# IP Address Tracker

My solution to the [Frontend Mentor IP Address Tracker challenge](https://www.frontendmentor.io), built with Next.js, TypeScript and Tailwind CSS. Search for any IP address or domain and see its location, timezone and ISP on a map.

<img width="377" height="664" alt="image" src="https://github.com/user-attachments/assets/0ffe8708-e7d3-462c-959f-5c1093ce373d" />


> TODO: add a screenshot (`screenshot.png`) and the links below.

- Live site: _add URL_
- Solution on Frontend Mentor: _add URL_

## Features

- Shows your own IP address and location when the page loads
- Search for any IP address (IPv4/IPv6) or domain
- Location, timezone and ISP in an info card
- Interactive map with a custom marker (Leaflet)
- The search term lives in the URL (`/?query=8.8.8.8`), so a search can be shared and survives a reload
- Responsive layout (mobile and desktop), hover states on all interactive elements
- Accessible form: visually hidden label, status message for screen readers

## Built with

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [SWR](https://swr.vercel.app) for data fetching
- [Leaflet](https://leafletjs.com) and [react-leaflet](https://react-leaflet.js.org)
- [ipify IP Geolocation API](https://geo.ipify.org)
- GitHub Actions (build check on every pull request)

## How it works

```
Browser ──► /api/geolocation?query=… ──► ipify API
        ◄── JSON                     ◄── JSON
```

The browser never talks to ipify directly. It calls my own API route (`app/api/geolocation/route.ts`), which adds the API key on the server and forwards the result. That way the key is never part of the JavaScript bundle.

The route:

- reads the `query` search parameter
- uses `isIP` from `node:net` to decide between the `ipAddress` and `domain` parameter
- encodes the user input with `encodeURIComponent`
- passes errors on with the original status code

### Demo data fallback

The free ipify plan has a limited number of credits. When the quota is used up (HTTP 403 or 429), the route returns demo data marked with `demo: true`, and the page shows a notice. Other errors, such as an invalid search term, are still shown as errors.

## Getting started

1. Get a free API key at [geo.ipify.org](https://geo.ipify.org).
2. Clone the repository and install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```
   IPIFY_API_KEY=your_key_here
   ```

   The variable has no `NEXT_PUBLIC_` prefix on purpose, so it stays on the server.

4. Start the development server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## What I learned

- Writing route handlers in the Next.js App Router, and why the API key belongs on the server
- Typing API responses, state and props with TypeScript, and narrowing types such as `FormDataEntryValue | null`
- Keeping the search term in the URL with `useSearchParams` and `useRouter`, and fetching with SWR
- Why `useSearchParams` needs a `Suspense` boundary
- Loading a browser-only library (Leaflet) with `next/dynamic` and `ssr: false`
- Stacking order (`z-index`, `isolate`) when a card overlaps a map
- Setting up a first CI workflow with GitHub Actions

## Continued development

- Read the visitor's IP from the `x-forwarded-for` header when deployed, so the first load shows the visitor's location and not the server's
- Cache lookups to save API credits
- Replace the demo-data fallback with a provider that has a larger free tier, if needed

## AI collaboration

I used Claude as a learning partner while building this project: explaining concepts, pointing me to documentation and reviewing my code. I wrote the code myself and asked for hints instead of finished solutions.

## Author

- GitHub: _add your username_
