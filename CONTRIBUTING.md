# Contributing to Simple Auth

Thank you for your interest in contributing to Simple Auth! 🎉

This document provides guidelines and information for contributing to this project. Please read it carefully before submitting your contributions.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Release Process](#release-process)
- [Getting Help](#getting-help)

## Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. Please be respectful, inclusive, and constructive in all interactions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (latest version)
- **Git**

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/simple-auth.git
   cd simple-auth
   ```

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Build the project:

   ```bash
   pnpm build
   ```

3. Start development mode:

   ```bash
   pnpm dev
   ```

## Project Structure

This is a monorepo managed with **Turborepo** and **pnpm workspaces**:

```text
simple-auth/
├── apps/                    # Application examples and demos
├── packages/
│   └── core/               # Main authentication library
│       ├── src/
│       │   ├── adapter.ts  # Database adapters
│       │   ├── provider.ts  # Authentication providers
│       │   ├── main.ts     # Main entry point
│       │   ├── schemas/    # Zod validation schemas
│       │   ├── types/      # TypeScript type definitions
│       │   └── tests/      # Test files
│       └── package.json
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # Workspace configuration
├── turbo.json             # Turborepo configuration
└── biome.jsonc            # Code formatting/linting config
```

### Key Files

- **`packages/core/src/main.ts`** - Main library entry point
- **`packages/core/src/adapter.ts`** - Database adapter interfaces
- **`packages/core/src/provider.ts`** - Authentication provider interfaces
- **`packages/core/src/schemas/`** - Validation schemas using Zod
- **`packages/core/src/types/`** - TypeScript type definitions

## Development Workflow

### 1. Create a Branch

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Changes

- Write clean, documented code
- Follow the established patterns in the codebase
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

Run the test suite:

```bash
pnpm test
```

Check types:

```bash
pnpm check-types
```

### 4. Format and Lint

Format your code:

```bash
pnpm format
```

Lint your code:

```bash
pnpm lint
```

## Coding Standards

This project uses **Ultracite** for code formatting and linting with strict accessibility and TypeScript rules.

### Key Guidelines

- **TypeScript**: Use strict TypeScript with proper type definitions
- **ESM**: Use ES modules (`import`/`export`)
- **Accessibility**: Follow WCAG guidelines for any UI components
- **No `any` types**: Use proper TypeScript types
- **Error handling**: Always handle errors appropriately
- **Documentation**: Add JSDoc comments for public APIs

### Code Style

- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Use **semicolons**
- Use **arrow functions** instead of function expressions
- Use **const** by default, `let` only when reassignment is needed
- Use **template literals** for string interpolation

### Example Code Style

```typescript
// ✅ Good
const createUser = async (userData: UserData): Promise<User> => {
  try {
    const validatedData = userSchema.parse(userData);
    return await adapter.createUser(validatedData);
  } catch (error) {
    throw new AuthError("Failed to create user", { cause: error });
  }
};

// ❌ Bad
function createUser(userData: any) {
  return adapter.createUser(userData);
}
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

- Write unit tests for all new functions and methods
- Use descriptive test names
- Test both success and error cases
- Mock external dependencies appropriately

### Test Structure

```typescript
import { describe, it, expect } from "vitest";
import { createUser } from "../src/main.js";

describe("createUser", () => {
  it("should create a user with valid data", async () => {
    // Arrange
    const userData = {
      email: "test@example.com",
      password: "securePassword123",
    };

    // Act
    const result = await createUser(userData);

    // Assert
    expect(result).toHaveProperty("id");
    expect(result.email).toBe(userData.email);
  });

  it("should throw an error with invalid data", async () => {
    // Arrange
    const invalidData = { email: "invalid-email" };

    // Act & Assert
    await expect(createUser(invalidData)).rejects.toThrow();
  });
});
```

## Submitting Changes

### Pull Request Process

1. **Update documentation** if you've changed APIs or behavior
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update changelog** if your changes are user-facing
5. **Create a pull request** with a clear title and description

### Pull Request Template

When creating a pull request, please include:

- **Description**: What changes you made and why
- **Type of change**: Feature, bug fix, documentation, etc.
- **Testing**: How you tested your changes
- **Checklist**: Ensure all items are completed

### Commit Message Format

Use conventional commit format:

```text
type(scope): description

[optional body]

[optional footer]
```

Examples:

- `feat(core): add OAuth provider support`
- `fix(adapter): handle connection timeout errors`
- `docs: update API documentation`
- `test: add integration tests for user registration`

## Release Process

This project follows semantic versioning (semver):

- **Major** (1.0.0): Breaking changes
- **Minor** (0.1.0): New features, backward compatible
- **Patch** (0.0.1): Bug fixes, backward compatible

Releases are managed by the maintainers and automated through GitHub Actions.

## Getting Help

### Documentation

- Check the [README](README.md) for basic usage
- Review existing code and tests for patterns
- Look at type definitions in `src/types/`

### Communication

- **Issues**: For bug reports and feature requests
- **Discussions**: For questions and general discussion
- **Email**: Contact the maintainers directly if needed

### Reporting Issues

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to reproduce**: Minimal reproduction steps
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Environment**: Node.js version, operating system, etc.
6. **Code example**: Minimal code that reproduces the issue

## Development Tips

### Useful Commands

```bash
# Build only the core package
pnpm --filter @simple-auth/core build

# Run tests for specific package
pnpm --filter @simple-auth/core test

# Add dependency to core package
pnpm --filter @simple-auth/core add dependency-name

# Clean all build artifacts
pnpm clean
```

### Working with Types

When adding new types:

1. Add them to appropriate files in `src/types/`
2. Export them from the main entry point
3. Document them with JSDoc comments
4. Include examples in documentation

### Database Adapters

When working on adapters:

1. Implement the base `Adapter` interface
2. Handle all required methods
3. Add proper error handling
4. Include comprehensive tests
5. Document configuration options

## Thank You

Your contributions help make Simple Auth better for everyone. Whether you're fixing bugs, adding features, improving documentation, or helping other contributors, your efforts are appreciated! 🙏

---

_This contributing guide is a living document. If you have suggestions for improvements, please feel free to open an issue or submit a pull request._
