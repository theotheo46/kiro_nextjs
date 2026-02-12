---
inclusion: always
---

# Technology Stack

## Framework & Runtime

- **Framework**: Next.js (App Router) with TypeScript
- **Static Export**: Uses `output: "export"` in `next.config.ts`
- **Package Manager**: npm

## Styling & UI

- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix-based)
- **Class Sorting**: prettier-plugin-tailwindcss

## Image Handling

- Use `next/image` with `unoptimized: true` (required for static export)
- Always specify proper dimensions

## Static Export Constraints

**This project uses Next.js static export for GitHub Pages deployment.**

Constraints:

- No server-side features (API routes, SSR, ISR, middleware)
- No `getServerSideProps` or server actions
- Dynamic routes require `generateStaticParams`
- Image optimization uses `unoptimized: true`
- All pages must be statically renderable at build time

## Environment Variables

For static sites, only `NEXT_PUBLIC_*` variables are available in the browser.

## Deployment

- **Target**: GitHub Pages (static export)
- **Build Output**: `out/` directory
- **Build Command**: `npm run build`
- **Preview**: `npx serve out`
