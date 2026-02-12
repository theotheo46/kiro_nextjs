---
inclusion: always
---

# Code Conventions

## TypeScript

- **Strictness**: Strict typing required, avoid `any`
- **Type Hints**: Always type hint

## Code Style

- **Line Length**: Max 100 characters per line
- **Strings**: Use double quotes `"text"` (enforced by Prettier)
- **Semicolons**: Required (enforced by Prettier)
- **Indentation**: 2 spaces

## Naming Conventions

- **Variables/Functions**: `camelCase`
- **Components/Types**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`

## Imports

- **Sorting**: Sorted automatically by ESLint

## Component Guidelines

- **Keep components small** — single responsibility, max ~100 lines
- **Use semantic HTML** — proper heading hierarchy, landmarks, ARIA attributes
- **Ensure accessibility** — keyboard navigation, screen reader support

## Code Quality Commands

Run all validation checks from the project root:

```bash
# Validation gate (all checks)
npm run validate

# Individual checks
npm run format:check  # Check formatting (Prettier)
npm run format        # Format code (auto-fix)
npm run lint          # Lint code (ESLint)
npm run lint:fix      # Auto-fix lint issues
npm run typecheck     # Type checking (TypeScript)
```

## Testing

```bash
npm run test              # Run unit tests
npm run test:coverage     # Run tests with coverage
npm run test:e2e          # Run E2E tests with Playwright
```
