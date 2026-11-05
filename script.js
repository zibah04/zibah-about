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
const grid=document.getElementById('project-grid');
function makeCard(p,index){
 const [name,description,categories,status,stack,url,context,icon,cta]=p;
 const card=document.createElement('article');card.className='project-card'+(index===0?' feature':'');card.dataset.tags=categories;
 const top=document.createElement('div');top.className='card-top';
 const label=document.createElement('span');label.className='meta';label.textContent=String(index+1).padStart(2,'0')+' / '+context.toUpperCase();
 const badge=document.createElement('span');badge.className='badge';badge.textContent=status;top.append(label,badge);card.append(top);
 const art=document.createElement('div');art.className='project-art art-'+index;art.setAttribute('aria-hidden','true');
 const sym=document.createElement('span');sym.className='art-symbol';sym.textContent=icon;
 const cap=document.createElement('span');cap.className='art-caption';cap.textContent=context.toUpperCase();art.append(sym,cap);card.append(art);
 const title=document.createElement('h3');title.textContent=name;card.append(title);
 const descriptionEl=document.createElement('p');descriptionEl.textContent=description;card.append(descriptionEl);
 const tags=document.createElement('div');tags.className='tech';stack.split(' · ').forEach(t=>{let s=document.createElement('span');s.textContent=t;tags.append(s)});card.append(tags);
 const bottom=document.createElement('div');bottom.className='card-end';
 if(url){const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=cta||'View source ↗';link.setAttribute('aria-label','View source: '+name);bottom.append(link)}
 else {const marker=document.createElement('span');marker.textContent='Details available on request';bottom.append(marker)}
 const field=document.createElement('small');field.textContent=context;bottom.append(field);card.append(bottom);return card;
}
projects.forEach((p,i)=>grid.append(makeCard(p,i)));
const total=document.getElementById('project-total'); if(total) total.textContent=String(projects.length);
const filterTotal=document.getElementById('filter-total'); if(filterTotal) filterTotal.textContent=String(projects.length);
const buttons=[...document.querySelectorAll('button[data-filter]')],cards=[...document.querySelectorAll('.project-card')];
buttons.forEach(b=>b.addEventListener('click',()=>{
 const current=b.dataset.filter;
 buttons.forEach(other=>{const active=other===b;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active))});
 let visible=0;cards.forEach(card=>{const show=current==='all'||card.dataset.tags.split(' ').includes(current);card.hidden=!show;if(show)visible++});
 document.getElementById('no-results').hidden=visible>0;
}));
document.getElementById('current-year').textContent=String(new Date().getFullYear());