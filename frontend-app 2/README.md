# Code editor portfolio

Paul Khoza's portfolio, migrated to Next.js 16 App Router, React 19, and
Tailwind CSS 4. The application source is written in TypeScript and Sanity
queries use tag-based caching.

## Getting Started

Copy the environment template and add the Sanity and Formspree credentials:

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sanity webhook revalidation

The `POST /api/revalidate` route verifies Sanity webhook signatures and
invalidates the cache tags used by the affected document type. Once this is
configured, publishing content in Sanity refreshes the website without another
deployment.

1. Generate a long random value for `SANITY_REVALIDATE_SECRET` and add it to
   the deployed application's environment variables.
2. In Sanity Manage, open **API > Webhooks** and create a webhook with:
   - URL: `https://your-domain.example/api/revalidate`
   - Trigger: create, update, and delete
   - Filter: `_type in ["aboutMe", "contactMe", "projects", "stackTags"]`
   - Projection: `{_type, "slug": slug.current}`
   - Secret: the same `SANITY_REVALIDATE_SECRET` value
3. Redeploy once after adding the environment variable. Future content changes
   will be revalidated by the webhook and will not need a deployment.

The endpoint intentionally rejects unsigned requests. A normal browser request
to the route will therefore return an authorization error.

## Checks

```bash
npm run check
npm run typecheck
npm run build
```

Sanity-backed sections render empty states when credentials are missing, so the
application can still be built and reviewed locally before a CMS is connected.
