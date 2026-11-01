'use strict';
const projects=[["Anything-to-Anything","A document conversion workspace with a Python/FastAPI backend, useful everyday file transformations and a lightweight browser interface.","product software","MVP · In development","Python · FastAPI · JavaScript","https://github.com/zibah04/anythingtoanything","Document SaaS","↔"],["NGX Trading Assistant","Rule-based Nigerian equities trading prototype with mock execution, SQLite and a Streamlit simulation dashboard. Live brokerage integration is not verified.","product software","Simulation only","Python · SQLite · Streamlit","https://github.com/zibah04/Ngx_trading_bot","Fintech research","↗"],["Sol IR Remote","Offline Android infrared remote for a DStv decoder. Experimental IR codes, a number keypad and an APK build workflow; standalone device validation is pending.","software","Unverified APK build","Android · Java · Infrared","https://github.com/zibah04/Sol-IR-Remote","Android utility","⌁"],["Market Price Comparison","Web demo for comparing foodstuff and everyday item prices across markets. Exploring how real local market data might power a useful service.","product software","Demo","HTML · CSS · JavaScript","https://github.com/zibah04/price","Local commerce","₦"],["Student Attendance System","Full-stack attendance website built and defended during SIWES industrial training. PHP backend and MySQL database; public repository not yet available.","education software","Built & defended","HTML · CSS · PHP · MySQL","","SIWES capstone","✓"],["Kowalski","Planned Windows troubleshooting companion for system-log analysis, understandable reports, issue history and carefully controlled repair actions.","product software","Concept","Windows · Diagnostics · Product design","","PC support tool","⏻"],["Commit Snapshot","A developer storytelling concept that would transform GitHub commits into digestible progress narratives and project histories.","software","Concept","GitHub API · Web · Storytelling","","Developer tool","⌘"],["VLC Movie Enhance","Experiment in real-time sharpening and video scaling for VLC movie playback. Custom Windows DLL remains uncompiled and unverified.","software","Prototype","Video processing · VLC","","Media utility","▶"],["Sol Desktop Pet","An original animated desktop companion character and sprite design, still awaiting a fully implemented distributable desktop application.","software","Design phase","Animation · Sprites · Interaction","","Creative app","☀"],["Vibrant Academy Class Website","HTML/CSS class website and teaching edition with fictional example biographies, used to help learners understand real web development.","education software","Teaching demo","HTML · CSS · Education","https://github.com/zibah04/vibrant-academy-ss2-studentslearner","Classroom project","✳"]];
const grid=document.getElementById('project-grid');
function makeCard(p,index){
 const [name,description,categories,status,stack,url,context,icon]=p;
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
 if(url){const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='View source ↗';link.setAttribute('aria-label','View source: '+name);bottom.append(link)}
 else {const marker=document.createElement('span');marker.textContent='Source not public yet';bottom.append(marker)}
 const field=document.createElement('small');field.textContent=context;bottom.append(field);card.append(bottom);return card;
}
projects.forEach((p,i)=>grid.append(makeCard(p,i)));
const buttons=[...document.querySelectorAll('button[data-filter]')],cards=[...document.querySelectorAll('.project-card')];
buttons.forEach(b=>b.addEventListener('click',()=>{
 const current=b.dataset.filter;
 buttons.forEach(other=>{const active=other===b;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active))});
 let visible=0;cards.forEach(card=>{const show=current==='all'||card.dataset.tags.split(' ').includes(current);card.hidden=!show;if(show)visible++});
 document.getElementById('no-results').hidden=visible>0;
}));
document.getElementById('current-year').textContent=String(new Date().getFullYear());