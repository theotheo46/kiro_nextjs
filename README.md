# Calories Calculator

A static Next.js web application for tracking calories. Browse products, add them to your basket, and see real-time calorie calculations.

🌐 **Live Demo**: https://theotheo46.github.io/kiro_nextjs/

## Features

- 30 products across 6 categories (Fruits, Vegetables, Grains, Proteins, Dairy, Snacks)
- Add products to basket in 100g portions
- Real-time calorie calculation
- Remove individual portions or entire products
- Responsive design for mobile, tablet, and desktop
- Static export for GitHub Pages deployment

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory.

### Preview Production Build

```bash
npx serve out
```

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (ProductCard, Basket)
- `src/hooks/` - Custom React hooks (useBasket)
- `src/lib/` - Utilities and data (products)
- `src/types/` - TypeScript type definitions
- `public/products/` - Product images

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run validate` - Run all checks (format, typecheck)

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export for GitHub Pages

## Deployment to GitHub Pages

1. Build the project: `npm run build`
2. The static files will be in the `out/` directory
3. Deploy the `out/` directory to GitHub Pages
4. If deploying to a subdirectory, update `basePath` in `next.config.ts`

## License

MIT
