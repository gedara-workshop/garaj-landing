# Garaj landing page

Early access landing page for **Garaj**, a vehicle paperwork and service tracker for Sri Lanka: revenue license, insurance and emission test reminders, bill scanning, and cost per km for every vehicle you own.

Part of [Gedara Workshop](https://github.com/), a set of solo side projects.

## Stack

- Next.js 16 (App Router, TypeScript)
- CSS Modules with design tokens from the Garaj design system (light and dark)
- Self-hosted fonts via Fontsource: Inter, JetBrains Mono, Noto Sans Sinhala, Noto Sans Tamil
- Signups through a Server Action that forwards to [Formspree](https://formspree.io)

## Run locally

```bash
npm install
cp .env.example .env.local   # optional locally
npm run dev
```

Open http://localhost:3000. Without `FORMSPREE_ENDPOINT`, signups are logged to the terminal instead of saved.

## Environment variables

| Name | What it does |
| --- | --- |
| `FORMSPREE_ENDPOINT` | Formspree form URL that stores signups. Required in production. |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for social preview images. |

## Deploy

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new) (framework is detected automatically).
3. Add `FORMSPREE_ENDPOINT` and `NEXT_PUBLIC_SITE_URL` in the project's environment variables.
4. Submit the form once from your phone and check the entry shows up in Formspree.

## Structure

```
src/
  app/
    layout.tsx        metadata, fonts, theme color
    page.tsx          page shell: header, sections, footer
    actions.ts        joinWaitlist server action (validation, honeypot, Formspree)
    globals.css       tokens and shared primitives (plate, chip, ticket, buttons)
  components/
    Hero.tsx          headline and the phone mock of the home screen
    Sections.tsx      features, made for Sri Lanka, the garage strip
    Signup.tsx        early access form (useActionState)
    ui.tsx            Wordmark, Plate, StatusChip, RenewalTicket
  content/
    site.ts           sample vehicles and copy
public/
  vehicles/           sample vehicle photos
  og.jpg              social preview image
```
