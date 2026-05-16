# Roots - Sustainability Funding Surfacing Interface

A comprehensive platform that allows cooperatives to find funding sources from other aid groups and start intentional communities.

## 🌱 Sustainability-First Approach

This system is built with sustainability as a core principle:
- **Carbon-aware hosting**: Automatically runs during low-carbon electricity periods
- **Circular economy**: Resource sharing between communities
- **Energy efficiency**: Optimized infrastructure with caching and compression
- **Impact tracking**: Measure real environmental and community impact

## 📋 Project Overview

### What We Built
A complete platform with:
1. **Database Schema**: PostgreSQL with comprehensive tables for cooperatives, aid groups, funding sources, and more
2. **Backend API**: RESTful API with carbon-aware features, caching, and compression
3. **Frontend Interface**: React-based UI with dashboard, funding discovery, applications, and matching

### Key Features
- **AI-powered matching**: Automatically matches cooperatives with funding sources based on focus areas, goals, and preferences
- **Funding discovery**: Browse and filter thousands of funding opportunities
- **Application workflow**: Create, track, and manage funding applications
- **Community planning**: Tools for designing and managing intentional communities
- **Carbon awareness**: Integration with Electricity Maps API for green hosting decisions
- **Data retention**: Automated cleanup and compliance with retention policies

## 🏗️ Architecture

### Database Schema (PostgreSQL)
```
├── cooperatives (organization profiles)
├── aid_groups (funding organizations)
├── funding_sources (specific opportunities)
├── intentional_communities (planned communities)
├── applications (funding requests)
├── matches (AI-generated matches)
├── shared_resources (circular economy)
├── impact_metrics (real-world measurement)
└── data_audit_log (compliance tracking)
```

### Backend (Node.js + Express)
- RESTful API with full CRUD operations
- Carbon-aware computing via Electricity Maps API
- Built-in caching with NodeCache
- Compression for reduced bandwidth usage
- Data retention automation
- Health monitoring and metrics

### Frontend (React + TypeScript + Vite)
- Modern responsive design
- Dashboard with real-time statistics
- Funding source browsing with filters
- Application creation wizard
- Match recommendations with scores
- Navigation and state management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 16+
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
npm install pg dotenv cors helmet morgan joi jsonwebtoken bcryptjs
npm start
```

The backend will run on port 3001 by default.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on port 5173 and proxy API requests to the backend.

### Database Setup

```bash
# Run the main schema
psql -U postgres -f database/schema.sql

# Run sustainability infrastructure migrations (optional)
psql -U postgres -f database/migrations/001_sustainability_infrastructure.sql
```

## 📁 Project Structure

```
Roots/
├── backend/               # Node.js backend API
│   ├── src/
│   │   ├── middleware/    # Compression and caching
│   │   ├── routes/        # API routes
│   │   └── services/      # Business logic
│   ├── package.json
│   └── server.js
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React contexts
│   │   └── api/           # API client
│   ├── package.json
│   └── vite.config.js
├── database/              # Database schema
│   ├── schema.sql
│   └── migrations/
├── infra/                 # Docker configuration
│   ├── docker-compose.yml
│   ├── Dockerfile.backend
│   └── Dockerfile.frontend
├── scripts/               # Utility scripts
├── PLAN.md
└── README.md
```

## 🛠️ Technical Details

### Backend Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Native pg library
- **Authentication**: JWT with bcryptjs
- **Caching**: NodeCache
- **Compression**: node-compression
- **Monitoring**: Custom metrics endpoint

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: React Context
- **Styling**: Custom CSS with modern utility patterns

## 🧪 Testing

### Backend Tests

```bash
cd backend
npm install --save-dev jest supertest
npm test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## 📊 API Endpoints

### Health & Monitoring
- `GET /health` - Backend health check
- `GET /sustainability/health` - Sustainability system health
- `GET /sustainability/metrics` - System metrics and cache stats
- `GET /sustainability/carbon-intensity?zone=US-WECC` - Carbon intensity data

### Cooperatives
- `GET /api/cooperatives` - List all cooperatives
- `POST /api/cooperatives` - Create new cooperative
- `GET /api/cooperatives/:id` - Get cooperative by ID
- `PATCH /api/cooperatives/:id` - Update cooperative
- `DELETE /api/cooperatives/:id` - Delete cooperative

### Aid Groups
- `GET /api/aid-groups` - List all aid groups
- `POST /api/aid-groups` - Create new aid group
- `GET /api/aid-groups/:id` - Get aid group by ID
- `PATCH /api/aid-groups/:id` - Update aid group
- `DELETE /api/aid-groups/:id` - Delete aid group

### Funding Sources
- `GET /api/funding-sources` - List funding sources
- `POST /api/funding-sources` - Create new funding source
- `GET /api/funding-sources/:id` - Get funding source by ID
- `PATCH /api/funding-sources/:id` - Update funding source
- `DELETE /api/funding-sources/:id` - Delete funding source

### Applications
- `GET /api/applications` - List all applications
- `POST /api/applications` - Create new application
- `GET /api/applications/:id` - Get application by ID
- `PATCH /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Delete application

### Intentional Communities
- `GET /api/intentional-communities` - List all communities
- `POST /api/intentional-communities` - Create new community
- `GET /api/intentional-communities/:id` - Get community by ID
- `PATCH /api/intentional-communities/:id` - Update community
- `DELETE /api/intentional-communities/:id` - Delete community

### Matches
- `GET /api/matches/:cooperativeId` - Get matches for cooperative

## 🔒 Security

- **Helmet**: HTTP headers for security
- **CORS**: Controlled cross-origin access
- **Rate Limiting**: Built-in via express-rate-limit (planned)
- **Input Validation**: Joi schema validation
- **Authentication**: JWT-based auth (planned)
- **Database Security**: Connection pooling with pg

## 📈 Performance Optimizations

- **Redis-like caching** with NodeCache
- **Compression** for bandwidth reduction
- **Database indexing** on all foreign keys
- **Lazy loading** of components
- **Code splitting** with React Router
- **Debounced API calls** for filtering

## 🌍 Sustainability Features

1. **Carbon-Aware Scheduling**
   - Integration with Electricity Maps API
   - Automatic deferral during high-carbon periods
   - Zone-based carbon intensity tracking

2. **Circular Economy**
   - Shared resource tracking between communities
   - Resource availability monitoring
   - Community resource networks

3. **Impact Tracking**
   - Real-world metric measurement
   - Environmental impact calculation
   - Community development tracking

4. **Data Efficiency**
   - Compression middleware
   - Intelligent caching with TTL
   - Efficient database queries with proper indexing

## 🔄 Deployment

### Docker Deployment

```bash
cd infra
docker-compose up -d
```

### Environment Variables

```bash
# Backend
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/sustainability_funding
CACHE_TTL=300
COMPRESSION_ENABLED=true
CARBON_AWARE_SCHEDULING=false
DATA_RETENTION_DAYS=365

# Frontend
VITE_API_URL=http://localhost:3001
```

## 📝 Development

### Code Style
- Follow existing file naming conventions
- Use TypeScript for all frontend files
- Use JSDoc comments for backend functions
- Maintain consistent formatting with existing code

### Commit Guidelines
- Use conventional commits format
- Prefix commits with feature:, fix:, docs:, chore:, etc.
- Example: `feat: add matching algorithm`

### Branching Strategy
- `main` - Production ready code
- `develop` - Integration branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `docs/*` - Documentation updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

Built with sustainable practices in mind:
- [Electricity Maps API](https://www.electricitymaps.com/) for carbon intensity data
- React and Vite communities for excellent tooling
- PostgreSQL community for robust database solutions

---

**Note**: This is a comprehensive sustainability platform built with environmental and social impact as its core mission.
