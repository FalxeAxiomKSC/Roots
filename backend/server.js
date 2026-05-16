const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const compressionMiddleware = require('./src/middleware/compression');
const { cacheMiddleware } = require('./src/middleware/cache');
const { registerSustainabilityRoutes } = require('./src/routes/sustainability');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

if (process.env.COMPRESSION_ENABLED !== 'false') {
  app.use(compressionMiddleware());
}

// Database connection placeholder
// In a real implementation, we would use pg or an ORM like Prisma
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://localhost/sustainability_funding'
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Cooperatives endpoints
app.get('/api/cooperatives', cacheMiddleware(), async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cooperatives ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/cooperatives', async (req, res) => {
  try {
    const {
      name, description, location, contact_email, contact_phone, website,
      founded_year, member_count, focus_areas, funding_needs
    } = req.body;
    
    const result = await pool.query(
      `INSERT INTO cooperatives 
       (name, description, location, contact_email, contact_phone, website, 
        founded_year, member_count, focus_areas, funding_needs) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
       RETURNING *`,
      [name, description, location, contact_email, contact_phone, website,
       founded_year, member_count, focus_areas, funding_needs]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/cooperatives/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM cooperatives WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cooperative not found' });
    }
    
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Aid Groups endpoints
app.get('/api/aid-groups', cacheMiddleware(), async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM aid_groups ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/aid-groups', async (req, res) => {
  try {
    const {
      name, description, location, contact_email, contact_phone, website,
      focus_areas, funding_types, geographic_scope, min_funding_amount,
      max_funding_amount, application_deadline
    } = req.body;
    
    const result = await pool.query(
      `INSERT INTO aid_groups 
       (name, description, location, contact_email, contact_phone, website,
        focus_areas, funding_types, geographic_scope, min_funding_amount,
        max_funding_amount, application_deadline) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
       RETURNING *`,
      [name, description, location, contact_email, contact_phone, website,
       focus_areas, funding_types, geographic_scope, min_funding_amount,
       max_funding_amount, application_deadline]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Funding Sources endpoints
app.get('/api/funding-sources', cacheMiddleware(), async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT fs.*, ag.name as aid_group_name 
      FROM funding_sources fs
      JOIN aid_groups ag ON fs.aid_group_id = ag.id
      WHERE fs.is_active = true
      ORDER BY fs.created_at DESC
    `);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/funding-sources', async (req, res) => {
  try {
    const {
      aid_group_id, name, description, funding_type, amount_min, amount_max,
      interest_rate, term_months, eligibility_criteria, application_process, deadline
    } = req.body;
    
    const result = await pool.query(
      `INSERT INTO funding_sources 
       (aid_group_id, name, description, funding_type, amount_min, amount_max,
        interest_rate, term_months, eligibility_criteria, application_process, deadline) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
       RETURNING *`,
      [aid_group_id, name, description, funding_type, amount_min, amount_max,
       interest_rate, term_months, eligibility_criteria, application_process, deadline]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Matching endpoint - finds potential matches between cooperatives and funding sources
app.get('/api/matches/:cooperativeId', async (req, res) => {
  try {
    const { cooperativeId } = req.params;
    
    // Get the cooperative to understand their needs
    const coopResult = await pool.query('SELECT * FROM cooperatives WHERE id = $1', [cooperativeId]);
    
    if (coopResult.rows.length === 0) {
      return res.status(404).json({ error: 'Cooperative not found' });
    }
    
    const cooperative = coopResult.rows[0];
    
    // Find active funding sources
    const fundingResult = await pool.query(`
      SELECT fs.*, ag.name as aid_group_name 
      FROM funding_sources fs
      JOIN aid_groups ag ON fs.aid_group_id = ag.id
      WHERE fs.is_active = true
    `);
    
    const fundingSources = fundingResult.rows;
    
    // Simple matching algorithm based on focus areas and geographic scope
    const matches = fundingSources.map(source => {
      let score = 0;
      const reasons = [];
      
      // Check focus area alignment
      if (cooperative.focus_areas && source.focus_areas) {
        const commonAreas = cooperative.focus_areas.filter(area => 
          source.focus_areas.includes(area)
        );
        if (commonAreas.length > 0) {
          score += 0.4;
          reasons.push(`Shared focus areas: ${commonAreas.join(', ')}`);
        }
      }
      
      // Check if funding amount matches needs (simplified)
      // In a real implementation, we'd analyze the cooperative's funding_needs more deeply
      if (source.amount_min > 0) {
        score += 0.3;
        reasons.push('Funding amount specified');
      }
      
      // Geographic preference (if specified)
      if (cooperative.location && source.geographic_scope) {
        // Simple check - in reality would use geocoding
        if (source.geographic_scope.toLowerCase().includes('national') || 
            source.geographic_scope.toLowerCase().includes('international')) {
          score += 0.2;
          reasons.push('Geographic scope matches');
        }
      }
      
      // Base score for having an active funding source
      score += 0.1;
      reasons.push('Active funding source');
      
      // Normalize score to 0-1 range
      score = Math.min(1.0, Math.max(0.0, score));
      
      return {
        ...source,
        match_score: parseFloat(score.toFixed(2)),
        match_reasons: reasons.join('; ')
      };
    });
    
      // Sort by match score descending
    matches.sort((a, b) => b.match_score - a.match_score);
    
      // Take top 10 matches
    const topMatches = matches.slice(0, 10);
    
    res.status(200).json(topMatches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Applications endpoints
app.get('/api/applications', cacheMiddleware(), async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT a.*, c.name as cooperative_name, fs.name as funding_source_name
      FROM applications a
      JOIN cooperatives c ON a.cooperative_id = c.id
      LEFT JOIN funding_sources fs ON a.funding_source_id = fs.id
      ORDER BY a.applied_at DESC
    `);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/applications', async (req, res) => {
  try {
    const {
      cooperative_id, funding_source_id, community_id, status,
      cover_letter, project_proposal, budget_details, supporting_documents
    } = req.body;
    
    const result = await pool.query(
      `INSERT INTO applications 
       (cooperative_id, funding_source_id, community_id, status,
        cover_letter, project_proposal, budget_details, supporting_documents) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [cooperative_id, funding_source_id, community_id, status,
       cover_letter, project_proposal, budget_details, supporting_documents]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Intentional Communities endpoints
app.get('/api/intentional-communities', cacheMiddleware(), async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM intentional_communities ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/intentional-communities', async (req, res) => {
  try {
    const {
      cooperative_id, name, description, location, planned_population,
      land_requirements_acres, sustainability_goals, infrastructure_needs,
      estimated_budget, status, website
    } = req.body;
    
    const result = await pool.query(
      `INSERT INTO intentional_communities 
       (cooperative_id, name, description, location, planned_population,
        land_requirements_acres, sustainability_goals, infrastructure_needs,
        estimated_budget, status, website) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
       RETURNING *`,
      [cooperative_id, name, description, location, planned_population,
       land_requirements_acres, sustainability_goals, infrastructure_needs,
       estimated_budget, status, website]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

registerSustainabilityRoutes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;