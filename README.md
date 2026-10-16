# harshav.com

Portfolio site for Harsha Vemulapalli, Design & Research Executive. Built with [Astro](https://astro.build) and
deployed to Netlify from `main`.

```sh
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # production build into dist/
```

- Content: case studies in `src/content/portfolio/`, shared copy and numbers in `src/data/site.ts`.
- Resume PDFs in `public/downloads/` are exported from Word, not generated from the site.
  `scripts/check-resume-superset.sh` checks that /resume contains every PDF bullet.
- Link-preview cards: `scripts/build-og-cards.sh`.
