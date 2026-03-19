# Demo Sites Monorepo

This repository contains a collection of independent, fully functional demo websites built with Vite, React, TypeScript, and Tailwind CSS.

## Structure

```
demos/
├── real-estate/       # Real estate property listings demo
├── accounting/        # Professional accounting services demo (tax, financial planning, bookkeeping)
└── conveyancing/     # Property law and conveyancing services demo
```

## Requirements

- Node.js (v18 or higher recommended)
- npm or yarn

## Running Each Demo

Each demo is a standalone Vite project with its own dependencies. To run a demo:

1. Navigate to the demo directory:
   ```bash
   cd demos/real-estate
   # or
   cd demos/accounting
   # or
   cd demos/conveyancing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal).

## Building for Production

To create a production build:

```bash
cd demos/<demo-name>
npm run build
```

The built files will be in the `dist/` directory.

## Demo Descriptions

### Real Estate
A property listings website featuring home buying and renting. Includes property search, detailed listings, and a responsive design.

### Accounting (Precision Accounting)
A professional services website for an accounting firm. Features services, about us, and contact sections with a clean, emerald-themed design.

### Conveyancing (Clear Title Conveyancing)
A property law firm website specializing in conveyancing. Includes services, team profiles, testimonials, and contact information with an indigo/purple theme.

## Technology Stack

- **Vite** - Build tool and dev server
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Icon library

All projects use the same versions of dependencies to ensure consistency.

## Notes

- Each demo is independent - they do not share dependencies or code.
- The demos are designed to be easy to understand and modify.
- Images are sourced from Unsplash (requires internet connection).
- No backend or API integration - all data is static.

## License

These demos are provided as-is for educational and demonstration purposes.