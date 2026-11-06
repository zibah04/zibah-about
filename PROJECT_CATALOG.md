# Project publishing inventory — 6 November 2026

This inventory records the projects found in the connected GitHub account **zibah04**. Presence of source code is not proof that an app is production-ready. GitHub Actions artifacts can expire; releases are the preferred location for durable downloadable builds.

## Public repositories

| Project | GitHub | Available now | Next publishing step |
|---|---|---|---|
| Developer portfolio | [zibah-about](https://github.com/zibah04/zibah-about) | HTML/CSS/JS source; successful Pages workflow; [website](https://zibah04.github.io/zibah-about/) | Check live site after each update |
| Kowalski Windows diagnostics | [Kowalski](https://github.com/zibah04/Kowalski) | Source, tests and installer directory; [successful Windows build](https://github.com/zibah04/Kowalski/actions/runs/42211989778) | Publish a signed/verified or clearly labeled unsigned release installer; validate on real Windows systems |
| Solscribe transcription | [Solscribe](https://github.com/zibah04/Solscribe) | [Windows installer and portable release ZIPs](https://github.com/zibah04/Solscribe/releases), latest observed tag v0.5.0-beta.1; source branches exist | Ensure reviewed latest source is merged into main and source matches the release |
| Sol IR Remote | [Sol-IR-Remote](https://github.com/zibah04/Sol-IR-Remote) | Android app source; [successful APK workflow](https://github.com/zibah04/Sol-IR-Remote/actions/runs/41533517131) | Attach a verified APK to a GitHub Release |
| TradeAssist AI | [TradeAssist-Ai](https://github.com/zibah04/TradeAssist-Ai) | Python source, tests, resources and Windows launch script | Validate data sources, backtests and operation; not guaranteed trading advice |
| NGX trading bot | [Ngx_trading_bot](https://github.com/zibah04/Ngx_trading_bot) | Source, tests and mock broker | Verify integrations and safety before any real-money use |
| Anything-to-Anything converter | [anythingtoanything](https://github.com/zibah04/anythingtoanything) | App source, tests and Docker/Render deployment configuration | Verify actual hosted deployment and file-handling limits |
| Price website | [price](https://github.com/zibah04/price) | Basic static web source | Document use cases and usage |
| Student learning website | [vibrant-academy-ss2-studentslearner](https://github.com/zibah04/vibrant-academy-ss2-studentslearner) | Static learning pages | Review any student-identifying content before further promotion |

## Private repositories (not publicly downloadable)

These exist in the account, but were **not** changed to public. Review personal/student data, secrets, licenses, and ownership before changing visibility.

- [Pricecomparisonsite](https://github.com/zibah04/Pricecomparisonsite) — application source (private)
- [format-magic-40](https://github.com/zibah04/format-magic-40) — web application source (private)
- [vibrant-academy-ss2](https://github.com/zibah04/vibrant-academy-ss2) — school project (private)

## Other projects mentioned in planning

No separate repository was found in the linked account under the known names for: Sol desktop pet, WhatsApp-status video optimizer, VLC realtime video upscaler, Commit Snapshot, dojoLens, or a standalone offline web-teaching demo. This does **not** prove that files do not exist elsewhere (other branches, local computers, other accounts or past attachments). Do not label any of these as released without code or a verified build.

## Verified checks

- Portfolio GitHub Pages workflow: successful ([run](https://github.com/zibah04/zibah-about/actions/runs/42096978463)).
- Kowalski Windows application build: successful ([run](https://github.com/zibah04/Kowalski/actions/runs/42211989778)).
- Sol IR Remote APK workflow: successful ([run](https://github.com/zibah04/Sol-IR-Remote/actions/runs/41533517131)).
- Solscribe GitHub releases: v0.4.0-beta.1, v0.4.1-beta.1, v0.5.0-beta.1 with Windows installer/portable assets; main branch currently has only a short README.

## Publication checklist

1. Confirm repository ownership and remove secrets, credentials, personal records and unlicensed assets.
2. Ensure source is on the intended default branch with an accurate README, license and setup steps.
3. Run automated tests and platform-specific smoke tests.
4. Upload permanent release assets (Windows installer, portable ZIP, APK) and hashes where relevant.
5. Verify deployment URLs and download links from an unauthenticated browser.
6. Clearly label experimental features, limitations and requirements.

_Inventory generated from the connected GitHub account on 6 November 2026. No repository visibility settings were changed._
