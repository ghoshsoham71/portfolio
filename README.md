## Portfolio Application

## Tech Stack
- **React** - Component-based UI library
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server

## Project Structure
```
src/
├── components/     # UI components
├── pages/         # Route components
├── hooks/         # Custom hooks
├── types/         # TypeScript definitions
├── assets/        # Static assets
└── main.tsx       # Entry point
```

## Development

### Setup
```bash
npm install
npm run dev          # Start dev server
npm run build        # Production build
npm run type-check   # TypeScript validation
npm run lint         # Code linting
```

### Configuration
- `vite.config.ts` - Build configuration
- `tailwind.config.js` - Tailwind customization
- `tsconfig.json` - TypeScript settings

## Build Output
- Production assets in `dist/`
- Tree-shaken bundles with code splitting
- Optimized CSS with purged unused classes
- Source maps for debugging

## Deployment
- **Platform**: Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`

## Performance
- Bundle size: <200KB gzipped
- First Contentful Paint: <1.5s
- Modern browser support (Chrome 90+, Firefox 88+, Safari 14+)

## Key Features
- Hot module replacement in development
- TypeScript strict mode enabled
- Responsive design with Tailwind utilities
- Component memoization for performance
- ESLint + Prettier for code quality
