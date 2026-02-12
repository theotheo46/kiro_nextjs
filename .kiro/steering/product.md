---
inclusion: always
---

# Product Overview

## Project Purpose

Next.js static web application deployed to GitHub Pages. No backend, no database — pure frontend with static export.

## Target Deployment

GitHub Pages (static export only)

## Key Constraints

- No server-side features (API routes, SSR, ISR, middleware)
- No `getServerSideProps` or server actions
- All pages must be statically renderable at build time
- Dynamic routes require `generateStaticParams`
