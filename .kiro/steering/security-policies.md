---
inclusion: always
---

# Security Policies

## Environment Variables

- **NEVER commit .env or .env.local** — Add to .gitignore
- Use environment variables for all secrets
- Use `.env.example` as template for required variables
- **If initial prompt contains new env variables — DON'T PUT values to generated documents**
- For static sites, only `NEXT_PUBLIC_*` variables are available in the browser

## Critical Security Rules

- **NEVER commit .env files**
- **NEVER hardcode API keys or secrets**
- **Sanitize user-generated content** — prevent XSS
- **Use HTTPS for external resources**
