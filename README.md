# Sustainable Systems Project

> Building systems that make sustainability actionable

## Project Overview

This project develops software that communities can use to advance sustainability goals. We focus on creating efficient, accessible, and maintainable systems.

## Architecture

```
src/
├── backend/          # Server-side logic and APIs
├── frontend/         # User interfaces and client-side code  
└── shared/          # Shared utilities, types, and constants

docs/               # Documentation
├── guides/          # User and developer guides
├── api/             # API documentation
└── architecture/    # Architectural decisions and patterns

scripts/            # Build, test, and deployment scripts
tests/              # Test suites across all layers
```

## Principles

- **Simplicity**: Less code means fewer bugs, less compute, less energy
- **Accessibility**: Well-documented systems attract contributors
- **Testing**: Untested code is a promise not yet kept
- **Security**: Foundation of community trust
- **Measurement**: Deploy often, deploy small

## Getting Started

See [docs/guides/getting-started.md](docs/guides/getting-started.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT License - see LICENSE file for details

## Repository Organization

This repository is organized with the following structure:

```
├── src/
│   ├── backend/          # Express.js API server and backend services
│   ├── frontend/         # Next.js React application
│   └── shared/          # Shared utilities, types, and constants
├── docs/               # Documentation
│   ├── api/            # API documentation and endpoints
│   ├── architecture/   # Architectural decisions and patterns
│   └── guides/         # User and developer guides
├── scripts/            # Build, test, and development scripts
├── tests/              # Test suites across all layers
├── .github/            # GitHub workflows and issue templates
└── config files       # TypeScript, ESLint, and other configurations
```

### Key Features

- **Monorepo Structure**: Clear separation of concerns with dedicated directories for backend, frontend, and shared code
- **TypeScript**: Full type safety across all components
- **Comprehensive Testing**: Unit tests, integration tests, and coverage reporting
- **Automated CI/CD**: GitHub Actions workflow for testing and deployment
- **Documentation**: Detailed API docs, architecture guides, and getting started instructions
- **Development Tools**: Setup and cleanup scripts, environment templates
- **Issue Management**: GitHub issue templates for bug reports and feature requests

### Quick Start

1. **Setup Environment**:
   ```bash
   cp .env.example .env.local
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   ```

2. **Start Development**:
   ```bash
   npm run dev
   ```

3. **Run Tests**:
   ```bash
   npm test
   ```

### Scripts Available

- `./scripts/setup.sh` - Complete development environment setup
- `./scripts/clean.sh` - Clean build artifacts and dependencies
- `npm run dev` - Start all services in development mode
- `npm run test` - Run all tests
- `npm run lint` - Code linting
- `npm run typecheck` - TypeScript type checking

---

*This repository has been comprehensively organized to support sustainable development practices with clear structure, comprehensive documentation, and automated tooling.*