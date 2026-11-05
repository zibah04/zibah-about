# Hephzibah Momoh — Developer & Educator

An editorial-style personal portfolio for **Hephzibah Onuh Momoh** / **Sol_Sama☀️**.

Live site: https://zibah04.github.io/zibah-about/

The site presents actual work without invented metrics or placeholder screenshots. Featured software is distinguished from smaller builds and ideas still on the bench. Content is based on the owner's role-specific CVs and linked GitHub repositories; statuses must be kept accurate.

## Design

- Warm paper, ink and terracotta palette, with a dark project section and restrained serif typography.
- A real-photo-based portrait on the hero, rather than generic abstract artwork.
- No external font dependencies, CSS frameworks, trackers or backend.
- Semantic HTML, keyboard focus styles, reduced-motion support and responsive layouts.
- JavaScript is used only to render and group project metadata.

### Portrait asset

`assets/solsama-portrait.webp` was optimized from an owner-supplied portrait and is an approximately **32 KB, 480 × 600, transparent WebP**. It is publicly included in this repository with the owner's request to feature his image. To update it, replace the file at the same path, preserving the appropriate image format and proportions. Do not publish the original photo set or any EXIF/GPS metadata.

## Local preview

Open `index.html` in a browser. No build system is needed. The site works as static files.

## GitHub Pages deployment

`.github/workflows/deploy-pages.yml` runs after changes to the website files on `main` or from the Actions tab. It verifies the JavaScript syntax and key site assets, checks the optimized WebP image size and signature, copies only public site files to `_site`, and deploys through GitHub Pages.

In the repository **Settings → Pages**, the source must be **GitHub Actions**. Check the latest deployment run and public URL before claiming it is live. The generated site contains the full image asset; it is not fetched from private services.

## Editing

- `index.html` — personal introduction, photo layout, about, experience, contact.
- `style.css` — responsive visual system.
- `script.js` — 13 project entries, ordered as **4 featured**, **4 other built projects**, and **5 early ideas**.
- `assets/solsama-portrait.webp` — optimized head-and-shoulders portrait.

## Boundaries and privacy

Professional contact is via a public email, GitHub and LinkedIn. No personal phone number, full CV, student records or identifying details of minors are published. Never describe proof-of-concept trading tools as production brokerage integrations. Beta downloads and future project statuses are not guarantees of compatibility.

© 2026 Hephzibah Momoh.
