# Portfolio

A minimal, single-page developer portfolio built with **React 19**, **Vite**, and **Tailwind CSS v4**. No backend, no router, no animation library.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

Requires Node 18 or newer.

## Make it yours

All content is **placeholder**. Every piece of text lives in one file:

```
src/data/portfolio.js
```

Edit it to change your name, intro, stats, about text, projects, skills, experience, and links. You shouldn't need to touch any component for a content change.

Also update these two things by hand:

- `<title>` and the meta description in `index.html`
- `public/favicon.svg` (optional)

### Things you can tweak quickly

| I want to...                        | Where                                                              |
| ----------------------------------- | ------------------------------------------------------------------ |
| Change the yellow accent            | `src/index.css`, `--color-accent` (also `theme-color` in `index.html`) |
| Change which project is highlighted | `featured: true` in `src/data/portfolio.js` (use on one project)  |
| Remove the stats strip              | Delete the `<dl>` block in `src/components/Hero.jsx`               |
| Remove the decorative pills/lines   | Delete `<Guides />` and the two `<Pill>` elements in `Hero.jsx`    |
| Reorder or remove sections          | `src/App.jsx` (and the `sections` array in `Navbar.jsx`)           |
| Change the nav button text          | `navCta` in `src/data/portfolio.js`                                |

## Project structure

```
src/
  main.jsx
  App.jsx                 page shell + section order
  index.css               Tailwind import + design tokens
  data/portfolio.js       ALL content
  components/
    Navbar.jsx            floating pill nav + mobile menu
    Hero.jsx              headline, decorative pills, stats
    About.jsx             statement card + current role card
    Projects.jsx          project grid
    Skills.jsx            grouped tag lists
    Experience.jsx        vertical timeline
    Footer.jsx            contact + socials
    Section.jsx           shared section wrapper
```

## Design notes

- Palette sampled from the reference design: yellow `#FFEF5C`, canvas `#F7F7F7`, ink `#141414`, hairline `#E5E5E5`. They are defined once as Tailwind theme tokens in `src/index.css`.
- Type is **Inter** (variable), bundled via `@fontsource-variable/inter`, so there are no external font requests.
- The only animation is the yellow highlight wiping in behind your name on page load. It is disabled for visitors who prefer reduced motion.
- Decorative pills and guide lines in the hero appear on screens 1280px and wider.

## Deploy

Any static host works. Build command: `npm run build`. Output directory: `dist`.

- **Vercel / Netlify / Cloudflare Pages:** import the repo and accept the detected Vite settings.
- **GitHub Pages under a repo path** (`user.github.io/repo-name`): set `base: "/repo-name/"` in `vite.config.js`, then publish `dist/`.
