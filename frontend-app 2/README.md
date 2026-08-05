# Code editor portfolio

Paul Khoza's portfolio, migrated to Next.js 16 App Router, React 19, and
Tailwind CSS 4.

## Getting Started

Copy the environment template and add the Sanity and Formspree credentials:

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run check
npm run build
```

Sanity-backed sections render empty states when credentials are missing, so the
application can still be built and reviewed locally before a CMS is connected.
