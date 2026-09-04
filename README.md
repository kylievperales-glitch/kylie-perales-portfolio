# Kylie Perales — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind v4.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding real content

All content lives in typed data files under `src/lib/data/`. Editing these files is the only thing you need to do to update the site — pages read from them automatically.

| What | File | Notes |
|---|---|---|
| Projects / case studies | `projects.ts` | Powers `/work` and `/work/[slug]` |
| Parlance articles | `articles.ts` | Powers `/writing` and `/writing/[slug]` |
| YouTube videos | `videos.ts` | Set `youtubeId` on an entry and its card automatically embeds the real video |
| Presentations | `presentations.ts` | Slide-by-slide viewer; replace placeholder slides with real slide image exports |
| Photography | `photos.ts` | Grid + lightbox on `/photography` |
| Interests, values, timeline, curiosities | `interests.ts`, `drives-and-values.ts`, `timeline.ts`, `curiosities.ts` | Home + About page content |

### Images

Every image in the site is an `ImageAsset` (`{ src?, alt, label, aspect }`). Leave `src` empty and the `Media` component renders a labeled placeholder in the site's own visual style — search the codebase for `ADD ` to find every open placeholder. To drop in a real image, put the file in `public/` and set `src: "/your-file.jpg"`.

### Résumé

Set `resumeUrl` in `src/lib/site.ts` to a path under `public/` (e.g. `/resume.pdf`) and a "View Résumé" link appears on the Contact page automatically.

## Deploy

`npm run build` then deploy to [Vercel](https://vercel.com/new) or any Next.js host.
