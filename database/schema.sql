-- Sustainability Funding Surfacing Interface Database Schema

-- Cooperatives table
CREATE TABLE cooperatives (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(50),
    website VARCHAR(255),
    founded_year INTEGER,
    member_count INTEGER,
    focus_areas TEXT[], -- Array of focus areas (e.g., agriculture, renewable energy, housing)
    funding_needs TEXT, -- Description of what funding is needed for
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Aid Groups table
CREATE TABLE aid_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(50),
    website VARCHAR(255),
    focus_areas TEXT[], -- Areas they fund (e.g., sustainability, community development)
    funding_types TEXT[], -- Types of funding they offer (grants, loans, technical assistance)
    geographic_scope VARCHAR(100), -- Local, regional, national, international
    min_funding_amount DECIMAL(15,2),
    max_funding_amount DECIMAL(15,2),
    application_deadline DATE, -- For cyclic funding programs
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Funding Sources table
CREATE TABLE funding_sources (
    id SERIAL PRIMARY KEY,
    aid_group_id INTEGER REFERENCES aid_groups(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    funding_type VARCHAR(50), -- grant, loan, equity, technical_assistance
    amount_min DECIMAL(15,2),
    amount_max DECIMAL(15,2),
    interest_rate DECIMAL(5,4), -- For loans
    term_months INTEGER, -- For loans
    eligibility_criteria TEXT, -- Requirements to qualify
    application_process TEXT, -- How to apply
    deadline DATE, -- Specific deadline for this funding source
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Intentional Communities table
CREATE TABLE intentional_communities (
    id SERIAL PRIMARY KEY,
    cooperative_id INTEGER REFERENCES cooperatives(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    planned_population INTEGER,
    land_requirements_acres DECIMAL(10,2),
    sustainability_goals TEXT[], -- Goals like carbon neutrality, food sovereignty, etc.
    infrastructure_needs TEXT, -- Description of needed infrastructure
    estimated_budget DECIMAL(15,2),
    status VARCHAR(50), -- planning, fundraising, under_construction, operational
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Applications table
CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    cooperative_id INTEGER REFERENCES cooperatives(id) ON DELETE CASCADE,
    funding_source_id INTEGER REFERENCES funding_sources(id) ON DELETE SET NULL,
    community_id INTEGER REFERENCES intentional_communities(id) ON DELETE SET NULL,
    status VARCHAR(50), -- draft, submitted, under_review, approved, rejected, awarded
    cover_letter TEXT,
    project_proposal TEXT,
    budget_details JSONB, -- Detailed budget breakdown
    supporting_documents TEXT[], -- URLs or references to supporting documents
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP,
    decision_date TIMESTAMP,
    awarded_amount DECIMAL(15,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Matches table (system-generated matches between cooperatives and funding sources)
CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    cooperative_id INTEGER REFERENCES cooperatives(id) ON DELETE CASCADE,
    funding_source_id INTEGER REFERENCES funding_sources(id) ON DELETE CASCADE,
    match_score DECIMAL(3,2), -- Score from 0.00 to 1.00 indicating match quality
    match_reasons TEXT, -- Explanation of why this is a good match
    is_notified BOOLEAN DEFAULT FALSE, -- Whether the cooperative has been notified
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX idx_cooperatives_location ON cooperatives(location);
CREATE INDEX idx_cooperatives_focus_areas ON cooperatives USING GIN(focus_areas);
CREATE INDEX idx_aid_groups_location ON aid_groups(location);
CREATE INDEX idx_aid_groups_focus_areas ON aid_groups USING GIN(focus_areas);
CREATE INDEX idx_funding_sources_aid_group ON funding_sources(aid_group_id);
CREATE INDEX idx_funding_sources_type ON funding_sources(funding_type);
CREATE INDEX idx_funding_sources_active ON funding_sources(is_active);
CREATE INDEX idx_applications_cooperative ON applications(cooperative_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_funding_source ON applications(funding_source_id);
CREATE INDEX idx_matches_cooperative ON matches(cooperative_id);
CREATE INDEX idx_matches_funding_source ON matches(funding_source_id);
CREATE INDEX idx_matches_score ON matches(match_score);

-- Updated at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cooperatives_updated_at BEFORE UPDATE ON cooperatives
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_aid_groups_updated_at BEFORE UPDATE ON aid_groups
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_funding_sources_updated_at BEFORE UPDATE ON funding_sources
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_intentional_communities_updated_at BEFORE UPDATE ON intentional_communities
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_matches_updated_at BEFORE UPDATE ON matches
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();