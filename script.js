'use strict';
// Updated 2026-11-05 from role-specific CVs and verified repository/release status.
// Project links are public; no full CV, phone number, student records or private source is published.
const projects = [
  [
    "SolScribe",
    "Offline-first Windows meeting and lecture transcription app with audio capture, editable transcripts, meeting minutes, study notes, revision cards, exports and recovery tools. v0.5.0 is a public unsigned beta; real-device acceptance testing is ongoing.",
    "product software",
    "Public beta · v0.5.0",
    "Python · PySide6 · faster-whisper · SQLite",
    "https://github.com/zibah04/Solscribe/releases/tag/v0.5.0-beta.1",
    "Windows productivity",
    "✎",
    "Get Windows beta ↗"
  ],
  [
    "Anything-to-Anything",
    "FastAPI-powered file conversion app for documents, spreadsheets, images and PDFs, with local OCR, browser-friendly tools and a Docker deployment configuration. Public service not yet verified.",
    "product software",
    "Functional MVP · Testing",
    "Python · FastAPI · JavaScript · OCR",
    "https://github.com/zibah04/anythingtoanything",
    "File conversion",
    "↔",
    "Explore source ↗"
  ],
  [
    "tradeAssist AI",
    "Nigerian equities research dashboard with historical signals, CSV data ingestion, next-bar backtests, a prediction journal and financial news summaries. Research only; no live orders or calibrated AI probabilities.",
    "product software",
    "Research prototype",
    "Python · Streamlit · SQLite · Market data",
    "https://github.com/zibah04/TradeAssist-Ai",
    "Market research",
    "↗",
    "Explore source ↗"
  ],
  [
    "Sol IR Remote",
    "Offline Android infrared controller for a DStv HD 8S decoder, featuring tested source signals, a keypad and familiar channel/volume controls. APK builds successfully; end-to-end device testing is still needed.",
    "software",
    "APK built · Device test pending",
    "Android · Java · Infrared",
    "https://github.com/zibah04/Sol-IR-Remote",
    "Android utility",
    "⌁",
    "Explore source ↗"
  ],
  [
    "Market Price Comparison",
    "A web experiment for comparing goods and foodstuff prices between markets. Both a simple HTML/CSS/JS demo and a richer frontend exist; regularly updated real-world pricing is not yet available.",
    "product software",
    "Web demo · Data pending",
    "HTML · CSS · JavaScript · Web UI",
    "https://github.com/zibah04/Pricecomparisonsite",
    "Local commerce",
    "₦",
    "Explore source ↗"
  ],
  [
    "NGX Trading Bot",
    "Python trading-automation prototype with a mock broker, SQLite persistence and a Streamlit simulation interface. Broker adapters have not been verified for real-money trading.",
    "software",
    "Simulation only",
    "Python · Streamlit · SQLite · Testing",
    "https://github.com/zibah04/Ngx_trading_bot",
    "Trading simulation",
    "⇄",
    "Explore source ↗"
  ],
  [
    "Student Attendance System",
    "Designed and defended a full-stack student attendance system during 2025 SIWES, including user interface, PHP backend and MySQL data model. Original source is not published here.",
    "education software",
    "Built & defended · 2025",
    "HTML · CSS · PHP · MySQL",
    "",
    "SIWES capstone",
    "✓"
  ],
  [
    "Vibrant Academy — Teaching Edition",
    "Beginner-friendly offline HTML and CSS teaching website, with responsive class pages, linked sample stories and a hands-on lesson plan. Uses fictional profiles instead of student information.",
    "education software",
    "Teaching demo",
    "HTML · CSS · Accessibility",
    "https://github.com/zibah04/vibrant-academy-ss2-studentslearner",
    "Web education",
    "✳",
    "Explore source ↗"
  ],
  [
    "Kowalski",
    "Planned Windows diagnostics assistant to turn PC and system checks into clear explanations and cautious troubleshooting suggestions. No released application yet.",
    "product software",
    "Concept · Design",
    "Windows · Diagnostics · UX",
    "",
    "PC support",
    "⏻"
  ],
  [
    "Commit Snapshot",
    "Planned developer storytelling tool that turns GitHub commit history into a readable project timeline and progress summaries. Implementation is not yet verified.",
    "software",
    "Concept",
    "GitHub API · Web · Developer tools",
    "",
    "Developer tools",
    "⌘"
  ],
  [
    "Sol Desktop Pet",
    "Original animated desktop-companion concept with character design and sprite direction. Interactive Windows application is not yet available.",
    "software",
    "Design stage",
    "Animation · Sprites · Desktop UI",
    "",
    "Creative software",
    "☀"
  ],
  [
    "VLC Movie Enhancer",
    "Exploration of real-time sharpening and scaling for video playback. A reliable compiled VLC extension and measurable quality tests are still pending.",
    "software",
    "Technical exploration",
    "Video · VLC · Image processing",
    "",
    "Media experimentation",
    "▶"
  ],
  [
    "WhatsApp Status Optimizer",
    "New research concept for preparing videos that retain better perceived quality after WhatsApp Status recompression. Encoding experiments and a prototype are still ahead.",
    "product software",
    "Research concept",
    "Video encoding · Compression · UX",
    "",
    "Video utility",
    "▣"
  ]
];
// Render from real project metadata. Statuses and URLs are intentionally conservative.
const featured = document.getElementById('featured-projects');
const more = document.getElementById('more-projects');
const ideas = document.getElementById('ideas-list');
function el(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
function externalLink(url, text, name) {
  const anchor = el('a', '', text);
  anchor.href = url;
  anchor.rel = 'noopener noreferrer';
  anchor.target = '_blank';
  anchor.setAttribute('aria-label', text + ': ' + name);
  return anchor;
}
function featuredCard(p, index) {
  const [name, description, categories, status, stack, url, context, icon, cta] = p;
  const article = el('article', 'project-card');
  const top = el('div', 'project-top');
  top.append(el('span', 'project-number', String(index+1).padStart(2,'0') + ' / 13'), el('span', 'project-status', status));
  article.append(top, el('p', 'project-category', context), el('h3', '', name), el('p', 'description', description));
  article.append(el('div', 'project-stack', stack));
  const bottom = el('div', 'project-bottom');
  bottom.append(url ? externalLink(url, cta || 'View project ↗', name) : el('span', 'no-link', 'Details on request'));
  bottom.append(el('span', 'project-context', categories.includes('product') ? 'PRODUCT / DEVELOPMENT' : 'SOFTWARE'));
  article.append(bottom);
  return article;
}
function compactCard(p, index) {
  const [name, description, categories, status, stack, url, context, icon, cta] = p;
  const article = el('article', 'compact-project');
  const copy = el('div');
  copy.append(el('div', 'project-meta', String(index+1).padStart(2,'0') + ' / ' + status));
  copy.append(el('h4', '', name), el('p', '', description));
  article.append(copy, url ? externalLink(url,'↗',name) : el('span', '', '—'));
  return article;
}
function ideaCard(p, index) {
  const [name, description, categories, status] = p;
  const article = el('article', 'idea');
  article.append(el('span', 'ideas-number', String(index+1).padStart(2,'0')));
  const copy = el('div');
  copy.append(el('h3', '', name), el('p', '', description), el('p', 'idea-status', status.toUpperCase()));
  article.append(copy);
  return article;
}
projects.slice(0,4).forEach((p,i) => featured.append(featuredCard(p,i)));
projects.slice(4,8).forEach((p,i) => more.append(compactCard(p,i+4)));
projects.slice(8).forEach((p,i) => ideas.append(ideaCard(p,i+8)));
const year = document.getElementById('current-year');
if (year) year.textContent = String(new Date().getFullYear());
