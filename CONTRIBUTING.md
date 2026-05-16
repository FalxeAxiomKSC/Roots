# Contributing Guidelines

We welcome contributions to the Sustainable Systems project! Please follow these guidelines to help us maintain code quality and consistency.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### 1. Fork and Clone

- Fork the repository on GitHub
- Clone your fork locally
- Add the original repository as upstream

```bash
git clone <your-fork-url>
cd sustainable-systems
git remote add upstream <original-repo-url>
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes

- Follow the existing code style and patterns
- Write tests for new functionality
- Update documentation as needed
- Ensure all tests pass

### 4. Commit Changes

Use conventional commit format:

```bash
git add -A
git commit -m "feat(api): add carbon footprint calculation endpoint"
```

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a pull request with:
- Clear title and description
- Links to related issues
- Test results
- Screenshots (if applicable)

## Development Workflow

### Working on Issues

1. Check the [issue tracker](../../issues) for available tasks
2. Claim an issue by creating a branch named appropriately
3. Submit PR with clear description of changes
4. Address feedback during review

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Keep functions small and focused
- Document complex logic with comments

### Testing

- Write tests for all new features
- Maintain test coverage above 80%
- Include both unit and integration tests
- Run tests before committing

### Documentation

- Update README.md for new features
- Add API documentation for new endpoints
- Include examples in documentation
- Keep installation guides current

## Review Process

1. All PRs require review from at least one maintainer
2. Address review comments promptly
3. CI must pass before merge
4. Ensure all automated checks are green

## Release Process

- Version bumps follow semantic versioning
- Releases are created by maintainers
- Changelog is updated with each release
- Breaking changes require major version bump

## Getting Help

- Join our [community discussions](../../discussions)
- Ask questions in [GitHub Issues](../../issues)
- Check existing issues before creating new ones

Thank you for contributing to Sustainable Systems! 🌱