I'm bootstrapping a new Next.js / React project and I have a CLAUDE.md file in the project root that contains my established conventions from Claude Code. Please read it thoroughly and convert it into well-organized Kiro steering files.
Step 1: Create the following steering files under .kiro/steering/:
product.md (inclusion: always)

Project purpose, target users, key features
Business objectives and success criteria
Any domain-specific terminology or concepts

tech.md (inclusion: always)

Next.js version and App Router vs Pages Router choice
React version and preferred patterns (Server Components vs Client Components)
State management approach (React Context, Zustand, Jotai, Redux, etc.)
Styling solution (Tailwind CSS, CSS Modules, styled-components, etc.)
Data fetching strategy (Server Actions, React Query / TanStack Query, SWR, etc.)
Authentication library (NextAuth.js / Auth.js, Clerk, etc.)
ORM / database (Prisma, Drizzle, etc.)
Package manager preference (npm, pnpm, yarn)
Deployment target (Vercel, AWS, self-hosted, etc.)

structure.md (inclusion: always)

App directory structure and routing conventions
Feature/module organization pattern (feature-based, layer-based, etc.)
Barrel exports policy
Path aliases (e.g., @/components, @/lib)
Where shared types, utils, constants, and hooks live
Public assets and static file conventions

code-conventions.md (inclusion: always)

TypeScript strictness level and type patterns
Named exports vs default exports policy
Function components style (arrow functions vs function declarations)
Props typing pattern (inline vs separate interface, naming like Props vs ComponentNameProps)
Error handling patterns and error boundaries
Logging approach
Import ordering rules
Naming conventions for files, components, hooks, utils, types
Commit message and branch naming conventions if present

react-patterns.md (inclusion: fileMatch, pattern: src/**/*.tsx, app/**/*.tsx, components/**/*.tsx)

Server Component vs Client Component decision guidelines
"use client" directive policy
Component composition patterns
Custom hooks conventions (naming, return types, error handling)
Preferred patterns for loading states, suspense boundaries
Form handling approach (React Hook Form, server actions, etc.)
Accessibility standards (ARIA, semantic HTML, keyboard navigation)
Performance patterns (React.memo, useMemo, useCallback usage policy)

styling.md (inclusion: fileMatch, pattern: **/*.tsx, **/*.css)

Tailwind CSS conventions (or whatever styling solution is used)
Responsive design breakpoints and approach (mobile-first, etc.)
Design tokens, theme variables, color system
Component variant patterns (cva, clsx/cn utility, etc.)
Dark mode implementation approach if applicable
Animation preferences (Framer Motion, CSS transitions, etc.)

api-standards.md (inclusion: fileMatch, pattern: app/api/**/*, src/api/**/*, src/lib/api/**/*)

API route conventions (Route Handlers vs Server Actions)
Request validation approach (Zod schemas, etc.)
Error response format and HTTP status code usage
Authentication/authorization middleware patterns
Rate limiting approach if applicable
API versioning strategy if applicable

testing-standards.md (inclusion: fileMatch, pattern: **/*.test.*, **/*.spec.*, **/__tests__/**)

Test runner and framework (Vitest, Jest, etc.)
Component testing library (React Testing Library)
E2E testing tool (Playwright, Cypress) and conventions
Unit vs integration vs E2E test boundaries
Mocking strategy (MSW for API mocking, etc.)
Test file location (co-located vs __tests__ directory)
Naming conventions for test files and test cases
Coverage expectations

database.md (inclusion: fileMatch, pattern: prisma/**/*, drizzle/**/*, src/db/**/*, src/lib/db/**/*)

ORM conventions and schema patterns
Migration workflow
Seeding approach
Query patterns and performance considerations

security-policies.md (inclusion: always)

Environment variable handling (.env.local, server-only vs public NEXT_PUBLIC_)
Input sanitization and XSS prevention
CSRF protection approach
Content Security Policy if applicable
Sensitive data handling rules

Step 2: Adjust the list above

If my CLAUDE.md doesn't cover a topic, skip that file — don't generate placeholder content
If my CLAUDE.md has content that doesn't fit any of the above categories, create an appropriately named additional steering file for it
If a topic is too thin for its own file, merge it into the most related file

Step 3: Quality checks

Preserve all specific details — library names, version constraints, exact patterns, code examples
Don't generalize or summarize away specifics. If CLAUDE.md says "always use cn() from @/lib/utils for conditional classes", keep that exact detail
Include code examples from CLAUDE.md as fenced code blocks in the steering files
Make sure the fileMatchPattern globs actually match my project's directory structure — check the real file tree first

Step 4: Clean up

Rename CLAUDE.md to CLAUDE.md.bak so it doesn't cause confusion
Give me a summary of what was created and any conventions from CLAUDE.md that were ambiguous or conflicting