# Getting Started

Welcome to the Sustainable Systems project! This guide will help you get up and running with the development environment.

## Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager
- Git

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sustainable-systems
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install individual component dependencies**
   ```bash
   cd src/backend && npm install
   cd ../frontend && npm install  
   cd ../shared && npm install
   ```

## Development

### Running all services
```bash
npm run dev
```

### Running individual services
```bash
# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend
```

### Building the project
```bash
npm run build
```

### Running tests
```bash
npm run test
```

### Code quality
```bash
npm run lint        # Run linter
npm run typecheck   # Run TypeScript type checking
```

## Project Structure

```
├── src/
│   ├── backend/     # Express.js API server
│   ├── frontend/    # Next.js React application
│   └── shared/      # Shared types and utilities
├── docs/           # Documentation
├── scripts/        # Build and deployment scripts
└── tests/          # Test files
```

## Environment Variables

Create a `.env.local` file in the root directory and add required environment variables:

```env
# Backend
PORT=
NODE_ENV=development

# Database (example)
DATABASE_URL=your_database_url_here
```

## Next Steps

- Read the [architecture documentation](../docs/architecture/)
- Check the [API documentation](../docs/api/)
- Review [contributing guidelines](../../CONTRIBUTING.md)
