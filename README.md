# Unified Demo Sites

This project unifies six independent Vite demo projects (real-estate, accounting, conveyancing, mortgage-broker, medical-centre, barbershop) into a single React application with routing. Each demo maintains its original styling, components, and features while sharing a common build setup.

## Features

- **Professional Landing Page** at the root route (`/`) showcasing all demos with an attractive card layout.
- **Dynamic HTML titles** per route for better SEO and user experience.
- **Responsive design** built with Tailwind CSS v4.
- **Modern React** with TypeScript and React Router v7.

## Structure

```
src/
├── App.tsx           # Main app with React Router
├── main.tsx          # Entry point
└── demos/
    ├── real-estate/
    │   └── src/
    │       ├── App.tsx
    │       ├── components/
    │       ├── pages/
    │       ├── data/
    │       ├── types/
    │       └── index.css
    ├── accounting/
    │   └── src/...
    ├── conveyancing/
    │   └── src/...
    ├── mortgage-broker/
    │   └── src/...
    ├── medical-centre/
    │   └── src/...
    └── barbershop/
        └── src/...
```

## Routes

- `/` - Professional landing page with links to all demos
- `/real-estate/*` - Real Estate demo (property listings)
- `/accounting/*` - Accounting demo (Precision Accounting)
- `/conveyancing/*` - Conveyancing demo (Clear Title Conveyancing)
- `/mortgage-broker/*` - Mortgage Broker demo (HomeLoan Pro)
- `/medical-centre/*` - Medical Centre demo (HealthFirst Medical)
- `/barbershop/*` - Barbershop demo (The Classic Cut)

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:5173` (or the port shown in the terminal) in your browser. The dev server supports Hot Module Replacement (HMR).

## Production Build

```bash
npm run build
npm run preview
```

The built files will be in the `dist/` directory.

## Technology Stack

- **Vite** - Build tool and dev server
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **React Router v7** - Client-side routing
- **Lucide React** - Icon library

All dependencies are merged into a single `package.json` at the root, ensuring consistent versions across all demos.

## Theming & Styling

Each demo defines its own color palette and styling:

- Custom colors are scoped using Tailwind's `@theme` blocks inside a dedicated CSS class (e.g., `.demo-real-estate`), applied to the demo's root element.
- This allows each demo to retain its unique branding (e.g., real-estate's primary blue, mortgage-broker's navy & teal, medical-centre's medical green & blue) without conflicts.
- Global base styles (body font, etc.) are defined once by the real-estate demo's theme and shared.

## Notes

- All data is static; no backend or API integration.
- Images are sourced from Unsplash and require internet access.
- The project uses a single TypeScript configuration with `include: ["src"]`, covering all demo code under `src/demos/`.
- Unused configuration files from the original demos (vite.config.ts, tailwind.config.js, tsconfig.*, etc.) have been removed to avoid duplication.

## Demo Descriptions

- **Real Estate**: Property listings with buy/rent filters, property details, and a responsive card layout.
- **Accounting (Precision Accounting)**: Professional accounting services site with emerald green accents, services, about, and contact pages.
- **Conveyancing (Clear Title Conveyancing)**: Property law firm site with indigo/purple theme, services, team, and testimonials.
- **Mortgage Broker (HomeLoan Pro)**: Mortgage services with calculators, testimonials, and a navy/teal color scheme.
- **Medical Centre (HealthFirst Medical)**: Healthcare site with team profiles, news, appointments booking, and medical green/blue palette.
- **Barbershop (The Classic Cut)**: Premium barbershop site with dark masculine theme (navy/charcoal & gold), services, team profiles, gallery, booking form, and contact pages.

## License

These demos are provided as-is for educational and demonstration purposes.
