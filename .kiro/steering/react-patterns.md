---
inclusion:
  fileMatch:
    - "src/**/*.tsx"
    - "src/app/**/*.tsx"
    - "src/components/**/*.tsx"
---

# React Patterns

## Static Export Requirements

- **No server features** — no API routes, no SSR, no middleware
- **All routes must be static** — use `generateStaticParams` for dynamic routes
- **Test the build** — run `npm run build` to verify static export succeeds
- **Check output** — verify the `out/` directory contains expected pages

## Component Guidelines

- **Keep components small** — single responsibility, max ~100 lines
- **Use semantic HTML** — proper heading hierarchy, landmarks, ARIA attributes
- **Ensure accessibility** — keyboard navigation, screen reader support

## Image Optimization

- **Optimize images** — use `next/image` with proper dimensions
- Image optimization uses `unoptimized: true` (required for static export)

## Response Approach

When implementing components:

1. Understand the component requirements
2. Check existing patterns in the codebase
3. Implement with proper TypeScript types
4. Ensure responsive design with Tailwind
5. Verify accessibility
6. Run lint and type checks
7. Test the build succeeds with static export
