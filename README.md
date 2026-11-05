# Hephzibah Momoh — Developer Portfolio

A responsive, accessible single-page portfolio built using **HTML, CSS and vanilla JavaScript**. It highlights software development, full-stack web experience, Windows tools, Android utilities, IT troubleshooting, and teaching.

**Portfolio:** https://zibah04.github.io/zibah-about/ (live only after GitHub Pages completes deployment).

## Background and verification

Updated 5 November 2026 using the owner's general, web-development, software-development, IT helpdesk, and technical-support CVs and the linked GitHub repositories. Education is in progress at Joseph Sarwuan Tarkaa University, Makurdi. The 2025 SIWES attendance system was built and defended at Intercontinental College of Technology, Makurdi. Teaching and Windows troubleshooting experience are included without inventing employment dates, certifications or employers.

The portfolio includes **13 projects and concepts**, and carefully distinguishes released betas, prototypes, demos, projects defended without a public repo, and concepts. SolScribe 0.5.0 is a **public unsigned beta**; the Android remote is compiled but requires physical device tests; NGX research and automation prototypes are **not live-trading systems**. Work-in-progress is not represented as production software.

## Run locally

Open `index.html` in a modern browser. There are no build dependencies, accounts, analytics, or API keys. Google Fonts are optional; system fonts are provided as fallbacks.

## GitHub Pages deployment using Actions

The workflow at `.github/workflows/deploy-pages.yml`:

1. Runs JavaScript syntax and static asset checks.
2. Builds an isolated static directory with only public website assets.
3. Uploads a Pages artifact and deploys it.
4. Runs on relevant commits to `main` or manually from the **Actions** tab.

**One-time GitHub setting:** Go to this repository's **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source. The workflow's `configure-pages` step requests enablement, but repository policy may still require this setting or permission from the owner. A successful Actions deployment and an HTTP response from the Pages URL are required before claiming the portfolio is live.

The old Jekyll CI workflow is not needed because this is a static HTML/CSS/JS site.

## Update content

- Edit `script.js` to update featured projects and project status badges.
- Edit `index.html` to update biography, skills, roles and contact.
- Edit `style.css` for appearance.
- Project counts update from the JavaScript source automatically.

## Privacy

The portfolio intentionally **does not publish a phone number, copies of CVs, student records, home address, or private attendance-system code**. Only professional email, public GitHub and LinkedIn are shown. Avoid publishing identifiable minors' information. Project descriptions are conservative and should be revised as products are actually tested or released.

© 2026 Hephzibah Momoh.
