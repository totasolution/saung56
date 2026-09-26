# Saung56 — Official Website

Company website for Saung56, a landscaping company in Batam. Built with Next.js (App Router) and deployed on Vercel.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # type check
```

## Structure

| Path | Purpose |
|---|---|
| `app/page.tsx` | Home page: services, projects, testimonials, FAQ, contact |
| `app/artikel/` | Article list and article detail pages (statically generated) |
| `app/sitemap.ts`, `app/robots.ts` | Generated `sitemap.xml` and `robots.txt` |
| `content/artikel/*.md` | Article content in Markdown |
| `lib/site.ts` | Business info: phone, WhatsApp, email, address, social links |
| `components/` | Header, footer, gallery, contact form, shared UI |
| `opsi-*.html` | Original design samples (reference only) |

## Adding an article

Create a Markdown file in `content/artikel/`. The file name becomes the URL slug.

```markdown
---
title: "Judul Artikel"
description: "Ringkasan 1–2 kalimat untuk Google dan media sosial."
date: 2026-10-01
cover: "/images/artikel/cover.jpg"
coverAlt: "Deskripsi gambar"
tags: ["Tips Taman"]
author: "Tim Saung56"
---

Isi artikel dalam Markdown...
```

Push to `main` and Vercel rebuilds the site automatically.

## SEO

- Per-page metadata, canonical URLs, Open Graph, and Twitter cards.
- JSON-LD: `LandscapingBusiness` (all pages), `FAQPage` (home), `BlogPosting` and `BreadcrumbList` (articles).
- `sitemap.xml` includes every article automatically.

## Before launch

- [ ] Replace placeholder contact data in `lib/site.ts` (WhatsApp, email, address, geo, social links, domain).
- [ ] Replace stats and testimonials in `app/page.tsx` with real data.
- [ ] Replace Unsplash photos with real project photos in `public/`.
- [ ] Add the domain in Vercel and submit `sitemap.xml` to Google Search Console.
- [ ] Create a Google Business Profile with the same name, address, and phone number.
