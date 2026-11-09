// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const wallFan: SceneSpec = {
  id: "wall-fan",
  slug: "mg-wall-fan",
  name: "App Window Fan",
  kind: "scene",
  job: "gallery",
  language: "product-ui",
  mechanic: "card-stack-fan-out",
  energy: "default",
  settle: 3,
  colors: {ink: "#F5EDE6", accent: "#EE7434", secondary: "#FFC996", paper: "#16171A"},
  fonts: {display: "Geist", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fan","windows","workspace"],
  fields: [
    { key: "title", label: "Headline", default: "Five views.", maxChars: 22, role: "headline" },
    { key: "accentLine", label: "Accent line", default: "One workspace.", maxChars: 24, role: "headline" },
    { key: "sub", label: "Subline", default: "Docs, boards, dashboards, chat and canvas in Lumen 2.0", maxChars: 64, role: "body" },
  ],
  html: `<div class="fan-glow"></div>
<div class="fan-hand">
  <div class="fan-card fan-c1">
    <div class="fan-bar"><i></i><i></i><i></i><b>Launch brief</b><u>Docs</u></div>
    <div class="fan-body">
      <div class="fan-kick">Product, Q4</div>
      <div class="fan-h">Lumen 2.0 launch brief</div>
      <div class="fan-by"><span class="fan-av" style="--c:linear-gradient(135deg,#f6b48a,#e0705a)"></span>Mara Ellis, edited 2m ago</div>
      <i class="fan-ln" style="--w:94%"></i><i class="fan-ln" style="--w:86%"></i><i class="fan-ln" style="--w:62%"></i>
      <div class="fan-ai"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span>Tighten the intro to one line?</span><em>Apply</em></div>
      <i class="fan-ln" style="--w:80%"></i><i class="fan-ln" style="--w:55%"></i>
    </div>
  </div>
  <div class="fan-card fan-c2">
    <div class="fan-bar"><i></i><i></i><i></i><b>Launch board</b><u>Board</u></div>
    <div class="fan-body fan-board">
      <div><div class="fan-colh"><i style="--c:#d6c6bb"></i>Backlog<em>6</em></div>
        <div class="fan-tk"><span class="fan-tag" style="--c:#ffe0cc">Design</span><p>Pricing page v2</p><s style="--w:80%"></s></div>
        <div class="fan-tk"><span class="fan-tag" style="--c:#dbe6ff">Eng</span><p>SSO for teams</p><s style="--w:60%"></s></div></div>
      <div><div class="fan-colh"><i style="--c:#f0a35e"></i>Doing<em>3</em></div>
        <div class="fan-tk"><span class="fan-tag" style="--c:#e5e7eb">AI</span><p>Agent handoff</p><span class="fan-prog"><i style="--w:64%"></i></span></div>
        <div class="fan-tk"><span class="fan-tag" style="--c:#ffe0cc">Design</span><p>Launch film</p><span class="fan-prog"><i style="--w:30%"></i></span></div></div>
      <div><div class="fan-colh"><i style="--c:#5fbf8a"></i>Done<em>12</em></div>
        <div class="fan-tk fan-done"><span class="fan-tag" style="--c:#d8f3e3">Ship</span><p>Canvas beta</p><s style="--w:70%"></s></div>
        <div class="fan-tk fan-done"><span class="fan-tag" style="--c:#dbe6ff">Eng</span><p>Offline sync</p><s style="--w:55%"></s></div></div>
    </div>
  </div>
  <div class="fan-card fan-c4">
    <div class="fan-bar"><i></i><i></i><i></i><b>Ask Lumen</b><u>Chat</u></div>
    <div class="fan-body">
      <div class="fan-me">Summarize this week for the team</div>
      <div class="fan-bot"><span class="fan-orb"></span><div><b>Here's your week in three lines:</b>
        <p><i style="--c:#5fbf8a"></i>Canvas beta shipped to 2,140 teams</p>
        <p><i style="--c:#f0a35e"></i>Churn down to 1.8%, best quarter yet</p>
        <p><i style="--c:#6287f6"></i>3 docs are waiting on your review</p></div></div>
      <div class="fan-input"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg>Ask Lumen anything<kbd>⌘K</kbd></div>
    </div>
  </div>
  <div class="fan-card fan-c5">
    <div class="fan-bar"><i></i><i></i><i></i><b>Moodboard</b><u>Canvas</u></div>
    <div class="fan-body">
      <div class="fan-gal">
        <i style="--g:radial-gradient(circle at 68% 34%,#fff2cf 0 14%,transparent 15%),linear-gradient(180deg,#f7a36b,#e2567a 70%,#5b3b33)"></i>
        <i style="--g:radial-gradient(60% 50% at 30% 30%,#9fe0d0,transparent 70%),linear-gradient(135deg,#1f5f6b,#0d2a3a)"></i>
        <i style="--g:radial-gradient(circle at 50% 120%,#f5d07a 0 45%,transparent 46%),linear-gradient(180deg,#ffd8c2,#f4a6a6)"></i>
        <i style="--g:linear-gradient(160deg,#303135,#65676a 60%,#acaeb2)"></i>
        <i style="--g:radial-gradient(circle at 40% 45%,#ffffff 0 10%,transparent 11%),radial-gradient(circle at 40% 45%,#ffd36b 0 30%,transparent 31%),linear-gradient(135deg,#ff8a4c,#c2412d)"></i>
        <i style="--g:repeating-linear-gradient(135deg,#f3e3cf 0 1cqw,#e9cfb2 1cqw 2cqw)"></i>
      </div>
      <div class="fan-galbar"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span>6 images, generated in 3.2s</span><em>Export</em></div>
    </div>
  </div>
  <div class="fan-card fan-c3">
    <div class="fan-bar"><i></i><i></i><i></i><b>Workspace pulse</b><u>Insights</u></div>
    <div class="fan-body">
      <div class="fan-kpis">
        <div class="fan-kpi"><small>Active users</small><b>48.2k</b><em>+12.4%</em></div>
        <div class="fan-kpi"><small>Docs this week</small><b>9,314</b><em>+8.1%</em></div>
        <div class="fan-kpi"><small>AI answers</small><b>212k</b><em>+31%</em></div>
      </div>
      <div class="fan-chartbox">
        <div class="fan-legend"><span><i style="--c:var(--accent)"></i>This month</span><span><i style="--c:#d9cfc6"></i>Last month</span></div>
        <svg viewBox="0 0 240 60" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="wall-fan-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--accent)" stop-opacity=".36"/><stop offset="1" style="stop-color:var(--accent)" stop-opacity="0"/></linearGradient></defs>
          <path d="M0 20H240M0 36H240M0 52H240" stroke="#f1e9e2" stroke-width="1" vector-effect="non-scaling-stroke"/>
          <path d="M0 55C30 53 50 51 70 48S110 45 130 41 170 37 190 33 225 28 240 26" fill="none" stroke="#dcd2c9" stroke-width="1.4" stroke-dasharray="4 4" vector-effect="non-scaling-stroke"/>
          <path d="M0 52C20 50 30 46 48 44S78 34 96 36 126 24 146 26 178 14 198 16 226 7 240 5V60H0Z" fill="url(#wall-fan-area)"/>
          <path d="M0 52C20 50 30 46 48 44S78 34 96 36 126 24 146 26 178 14 198 16 226 7 240 5" fill="none" style="stroke:var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/>
        </svg>
        <span class="fan-tip">Oct 6, 48.2k</span><span class="fan-pt"></span>
      </div>
    </div>
  </div>
</div>
<div class="fan-floor"></div>
<div class="fan-copy"><div class="fan-h1"><span data-21st-slot="title">{{title}}</span> <span class="acc" data-21st-slot="accentLine">{{accentLine}}</span></div><div class="fan-sub" data-21st-slot="sub">{{sub}}</div></div>`,
  css: `
.v-wall-fan *,.v-wall-fan *::before,.v-wall-fan *::after{box-sizing:border-box}
.v-wall-fan{color:var(--ink);font-family:var(--font-body)}
.v-wall-fan[data-backdrop="on"]{background:radial-gradient(90% 80% at 50% 26%,color-mix(in srgb,var(--accent) 16%,var(--paper)) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper) 55%,#000) 100%)}
.v-wall-fan[data-backdrop="off"] .fan-floor,.v-wall-fan[data-backdrop="off"] .fan-glow{display:none}
.v-wall-fan .fan-glow{position:absolute;left:14cqw;top:-7cqw;width:72cqw;height:50cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 42%,transparent),color-mix(in srgb,var(--accent) 13%,transparent) 55%,transparent);animation:wall-fan-glow 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes wall-fan-glow{0%{opacity:0;transform:scale(.6)}14%{opacity:.45;transform:scale(.8)}40%{opacity:1;transform:scale(1)}62%{opacity:.8;transform:scale(1.06)}84%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.6)}}
.v-wall-fan .fan-floor{position:absolute;left:0;right:0;bottom:0;height:26cqw;background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--paper) 94%,transparent) 62%);z-index:6}
.v-wall-fan .fan-hand{position:absolute;left:50%;top:7.6cqw;width:0;height:0;transform:scale(1.1);animation:wall-fan-hand 6s linear infinite}
@keyframes wall-fan-hand{0%{opacity:0}8%,90%{opacity:1}98%,100%{opacity:0}}
.v-wall-fan .fan-card{position:absolute;left:-13.5cqw;top:0;width:27cqw;height:18.5cqw;border-radius:1.2cqw;background:#fbf7f2;color:#242528;overflow:hidden;transform-origin:50% 400%;box-shadow:0 0 0 1px rgba(255,255,255,.4),0 .3cqw .6cqw rgba(0,0,0,.25),0 2.6cqw 5cqw -1cqw rgba(0,0,0,.65);font-size:1cqw;line-height:1.3}
.v-wall-fan .fan-c1{z-index:1;animation:wall-fan-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-fan .fan-c2{z-index:2;animation:wall-fan-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-fan .fan-c3{z-index:5;animation:wall-fan-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-fan .fan-c4{z-index:2;animation:wall-fan-c4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-fan .fan-c5{z-index:1;animation:wall-fan-c5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-fan .fan-bar{position:absolute;left:0;right:0;top:0;height:2.3cqw;display:flex;align-items:center;gap:.45cqw;padding:0 1cqw;background:#f3ece5;border-bottom:1px solid rgba(60,30,40,.08)}
.v-wall-fan .fan-bar i{width:.62cqw;height:.62cqw;border-radius:50%;background:#e1d5cb}
.v-wall-fan .fan-bar b{margin-left:.5cqw;font-weight:600;font-size:.9cqw;color:#5d4b52}
.v-wall-fan .fan-bar u{margin-left:auto;text-decoration:none;font-size:.78cqw;color:#a3918f;background:#ebe2da;padding:.1cqw .5cqw;border-radius:.4cqw}
.v-wall-fan .fan-body{position:absolute;left:0;right:0;top:2.3cqw;bottom:0;padding:1.15cqw 1.3cqw}
.v-wall-fan .fan-kick{font-size:.76cqw;color:color-mix(in srgb,var(--accent) 80%,#000);font-weight:600}
.v-wall-fan .fan-h{font-size:1.55cqw;font-weight:700;letter-spacing:-.025em;margin:.15cqw 0 .45cqw;color:#1d1e21}
.v-wall-fan .fan-by{display:flex;align-items:center;gap:.5cqw;font-size:.76cqw;color:#8e7c80;margin-bottom:.7cqw}
.v-wall-fan .fan-av{width:1.2cqw;height:1.2cqw;border-radius:50%;background:var(--c);box-shadow:0 0 0 .15cqw #fbf7f2}
.v-wall-fan .fan-ln{display:block;height:.48cqw;border-radius:.25cqw;background:#ebe2da;width:var(--w);margin:.5cqw 0}
.v-wall-fan .fan-ai{display:flex;align-items:center;gap:.55cqw;margin:.8cqw 0;padding:.6cqw .75cqw;border-radius:.7cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 11%,#fff),color-mix(in srgb,var(--secondary) 16%,#fff));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 28%,transparent);font-size:.84cqw;color:color-mix(in srgb,var(--accent) 45%,#242528)}
.v-wall-fan .fan-ai svg{width:1.05cqw;height:1.05cqw;flex:none;color:var(--accent)}
.v-wall-fan .fan-ai em{margin-left:auto;font-style:normal;font-weight:600;color:#fff;background:var(--accent);padding:.18cqw .6cqw;border-radius:.4cqw}
.v-wall-fan .fan-board{display:grid;grid-template-columns:repeat(3,1fr);gap:.7cqw}
.v-wall-fan .fan-colh{display:flex;align-items:center;gap:.4cqw;font-size:.78cqw;font-weight:600;color:#5d4b52;margin-bottom:.55cqw}
.v-wall-fan .fan-colh i{width:.55cqw;height:.55cqw;border-radius:50%;background:var(--c)}
.v-wall-fan .fan-colh em{font-style:normal;color:#b3a3a2;font-weight:500}
.v-wall-fan .fan-tk{background:#fff;border-radius:.6cqw;padding:.55cqw .6cqw;margin-bottom:.55cqw;box-shadow:0 0 0 1px rgba(60,30,40,.07),0 .2cqw .4cqw rgba(60,30,40,.05)}
.v-wall-fan .fan-tag{display:inline-block;font-size:.62cqw;font-weight:600;padding:.08cqw .4cqw;border-radius:.3cqw;background:var(--c);color:#4a3540}
.v-wall-fan .fan-tk p{margin:.35cqw 0 0;font-size:.74cqw;font-weight:600;color:#3a2e34}
.v-wall-fan .fan-tk s{display:block;height:.4cqw;border-radius:.2cqw;background:#efe7df;width:var(--w);margin-top:.35cqw;text-decoration:none}
.v-wall-fan .fan-prog{display:block;height:.3cqw;border-radius:.2cqw;background:#f1e8e0;margin-top:.4cqw;overflow:hidden}
.v-wall-fan .fan-prog i{display:block;height:100%;width:var(--w);background:linear-gradient(90deg,var(--secondary),var(--accent))}
.v-wall-fan .fan-done p{color:#9a8b8f;text-decoration:line-through;text-decoration-color:rgba(154,139,143,.6)}
.v-wall-fan .fan-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:.6cqw}
.v-wall-fan .fan-kpi{background:#fff;border-radius:.7cqw;padding:.55cqw .7cqw;box-shadow:0 0 0 1px rgba(60,30,40,.07)}
.v-wall-fan .fan-kpi small{display:block;font-size:.66cqw;color:#9a888b}
.v-wall-fan .fan-kpi b{display:block;font-size:1.45cqw;font-weight:700;letter-spacing:-.03em;color:#1d1e21;margin-top:.1cqw}
.v-wall-fan .fan-kpi em{font-style:normal;font-size:.66cqw;font-weight:600;color:#2f9e6a}
.v-wall-fan .fan-chartbox{position:relative;margin-top:.7cqw;height:7.4cqw;background:#fff;border-radius:.7cqw;padding:.55cqw .7cqw 0;box-shadow:0 0 0 1px rgba(60,30,40,.07)}
.v-wall-fan .fan-chartbox svg{position:absolute;left:0;right:0;bottom:0;width:100%;height:5.4cqw}
.v-wall-fan .fan-legend{display:flex;gap:.8cqw;font-size:.64cqw;color:#8e7c80;align-items:center}
.v-wall-fan .fan-legend i{display:inline-block;width:.55cqw;height:.55cqw;border-radius:.15cqw;background:var(--c);margin-right:.3cqw;vertical-align:-.05cqw}
.v-wall-fan .fan-pt{position:absolute;left:82.5%;top:3.34cqw;width:.8cqw;height:.8cqw;margin:-.4cqw 0 0 -.4cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .18cqw #fff}
.v-wall-fan .fan-pt::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--accent);animation:wall-fan-ping 1.5s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-fan-ping{0%{transform:scale(1);opacity:.55}100%{transform:scale(3.2);opacity:0}}
.v-wall-fan .fan-tip{position:absolute;left:82.5%;top:.45cqw;transform:translateX(-50%);font-size:.62cqw;font-weight:600;color:#fff;background:#242528;padding:.15cqw .45cqw;border-radius:.35cqw;white-space:nowrap}
.v-wall-fan .fan-me{margin-left:auto;width:fit-content;max-width:80%;background:#242528;color:#fbf2ea;font-size:.84cqw;padding:.5cqw .8cqw;border-radius:.8cqw .8cqw .2cqw .8cqw}
.v-wall-fan .fan-bot{display:flex;gap:.6cqw;margin-top:.8cqw}
.v-wall-fan .fan-orb{flex:none;width:1.6cqw;height:1.6cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--secondary) 30%,var(--accent) 60%,color-mix(in srgb,var(--accent) 60%,#000))}
.v-wall-fan .fan-bot>div{flex:1;font-size:.82cqw;color:#3a2e34}
.v-wall-fan .fan-bot b{display:block;font-weight:600;margin-bottom:.3cqw}
.v-wall-fan .fan-bot p{margin:.25cqw 0;display:flex;align-items:center;gap:.45cqw;font-size:.76cqw;color:#5d4b52}
.v-wall-fan .fan-bot p i{width:.5cqw;height:.5cqw;border-radius:50%;background:var(--c);flex:none}
.v-wall-fan .fan-input{position:absolute;left:1.3cqw;right:1.3cqw;bottom:1.1cqw;display:flex;align-items:center;gap:.5cqw;padding:.55cqw .8cqw;border-radius:.8cqw;background:#fff;box-shadow:0 0 0 1px rgba(60,30,40,.1),0 .4cqw 1cqw rgba(60,30,40,.06);font-size:.78cqw;color:#a3918f}
.v-wall-fan .fan-input svg{width:.95cqw;height:.95cqw;color:var(--accent)}
.v-wall-fan .fan-input kbd{margin-left:auto;font:600 .66cqw var(--font-mono);color:#7d6a6e;background:#f3ece5;border-radius:.3cqw;padding:.1cqw .35cqw}
.v-wall-fan .fan-gal{position:absolute;left:1.1cqw;right:1.1cqw;top:1.1cqw;bottom:3.3cqw;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:.5cqw}
.v-wall-fan .fan-gal i{border-radius:.6cqw;background:var(--g);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}
.v-wall-fan .fan-galbar{position:absolute;left:1.2cqw;right:1.1cqw;bottom:.9cqw;display:flex;align-items:center;gap:.45cqw;font-size:.76cqw;color:#7d6a6e}
.v-wall-fan .fan-galbar svg{width:.95cqw;height:.95cqw;color:var(--accent)}
.v-wall-fan .fan-galbar em{margin-left:auto;font-style:normal;font-weight:600;color:#242528;background:#f3ece5;padding:.2cqw .6cqw;border-radius:.4cqw}
.v-wall-fan .fan-copy{position:absolute;left:0;right:0;bottom:5.2cqw;text-align:center;z-index:7;animation:wall-fan-copy 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-fan .fan-h1{font-size:3.7cqw;font-weight:600;letter-spacing:-.04em;line-height:1.1;color:var(--ink);font-family:var(--font-display)}
.v-wall-fan .fan-h1 .acc{background:linear-gradient(90deg,var(--secondary),var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent}
.v-wall-fan .fan-sub{margin-top:.7cqw;font-size:1.4cqw;color:color-mix(in srgb,var(--ink) 58%,transparent)}
@keyframes wall-fan-copy{0%,26%{opacity:0;transform:translateY(1.6cqw)}40%,84%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(-.8cqw)}}

@keyframes wall-fan-c1{0%{transform:translateY(5cqw) rotate(calc(-3deg * var(--k,1))) scale(0.92)}10%{transform:translateY(0cqw) rotate(calc(-3deg * var(--k,1))) scale(1)}15%{transform:translateY(0cqw) rotate(calc(-3deg * var(--k,1))) scale(1)}28%{transform:translateY(0cqw) rotate(calc(-25deg * var(--k,1))) scale(1)}40%{transform:translateY(0cqw) rotate(calc(-22deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}62%{transform:translateY(0cqw) rotate(calc(-22.8deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}82%{transform:translateY(0cqw) rotate(calc(-22deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}93%{transform:translateY(1.4cqw) rotate(calc(-1.5deg * var(--k,1))) scale(0.97)}100%{transform:translateY(5cqw) rotate(calc(-3deg * var(--k,1))) scale(0.92)}}
@keyframes wall-fan-c2{0%{transform:translateY(5cqw) rotate(calc(2deg * var(--k,1))) scale(0.92)}10%{transform:translateY(0cqw) rotate(calc(2deg * var(--k,1))) scale(1)}15%{transform:translateY(0cqw) rotate(calc(2deg * var(--k,1))) scale(1)}28%{transform:translateY(0cqw) rotate(calc(-13deg * var(--k,1))) scale(1)}40%{transform:translateY(0cqw) rotate(calc(-11deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}62%{transform:translateY(0cqw) rotate(calc(-11.5deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}82%{transform:translateY(0cqw) rotate(calc(-11deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}93%{transform:translateY(1.4cqw) rotate(calc(1deg * var(--k,1))) scale(0.97)}100%{transform:translateY(5cqw) rotate(calc(2deg * var(--k,1))) scale(0.92)}}
@keyframes wall-fan-c3{0%{transform:translateY(5cqw) rotate(0deg) scale(0.92)}10%{transform:translateY(0cqw) rotate(0deg) scale(1)}15%{transform:translateY(0cqw) rotate(0deg) scale(1)}28%{transform:translateY(-1.2cqw) rotate(0deg) scale(1.02)}40%{transform:translateY(-0.8cqw) rotate(0deg) scale(1.02);animation-timing-function:cubic-bezier(.45,0,.55,1)}62%{transform:translateY(-1.1cqw) rotate(0deg) scale(1.02);animation-timing-function:cubic-bezier(.45,0,.55,1)}82%{transform:translateY(-0.8cqw) rotate(0deg) scale(1.02);animation-timing-function:cubic-bezier(.65,0,.35,1)}93%{transform:translateY(1.4cqw) rotate(0deg) scale(0.97)}100%{transform:translateY(5cqw) rotate(0deg) scale(0.92)}}
@keyframes wall-fan-c4{0%{transform:translateY(5cqw) rotate(calc(-1.5deg * var(--k,1))) scale(0.92)}10%{transform:translateY(0cqw) rotate(calc(-1.5deg * var(--k,1))) scale(1)}15%{transform:translateY(0cqw) rotate(calc(-1.5deg * var(--k,1))) scale(1)}28%{transform:translateY(0cqw) rotate(calc(13deg * var(--k,1))) scale(1)}40%{transform:translateY(0cqw) rotate(calc(11deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}62%{transform:translateY(0cqw) rotate(calc(11.5deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}82%{transform:translateY(0cqw) rotate(calc(11deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}93%{transform:translateY(1.4cqw) rotate(calc(-0.75deg * var(--k,1))) scale(0.97)}100%{transform:translateY(5cqw) rotate(calc(-1.5deg * var(--k,1))) scale(0.92)}}
@keyframes wall-fan-c5{0%{transform:translateY(5cqw) rotate(calc(3.5deg * var(--k,1))) scale(0.92)}10%{transform:translateY(0cqw) rotate(calc(3.5deg * var(--k,1))) scale(1)}15%{transform:translateY(0cqw) rotate(calc(3.5deg * var(--k,1))) scale(1)}28%{transform:translateY(0cqw) rotate(calc(25deg * var(--k,1))) scale(1)}40%{transform:translateY(0cqw) rotate(calc(22deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}62%{transform:translateY(0cqw) rotate(calc(22.8deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}82%{transform:translateY(0cqw) rotate(calc(22deg * var(--k,1))) scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}93%{transform:translateY(1.4cqw) rotate(calc(1.75deg * var(--k,1))) scale(0.97)}100%{transform:translateY(5cqw) rotate(calc(3.5deg * var(--k,1))) scale(0.92)}}

@container (max-aspect-ratio: 4/5){
  .v-wall-fan .fan-hand{--k:.34;top:33cqh;transform:scale(1.9)}
  .v-wall-fan .fan-glow{left:-20cqw;top:18cqh;width:140cqw;height:110cqw}
  .v-wall-fan .fan-floor{height:60cqh;background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--paper) 94%,transparent) 30%)}
  .v-wall-fan .fan-copy{inset:0;bottom:0}
  .v-wall-fan .fan-h1{position:absolute;left:8cqw;right:8cqw;top:8cqh;font-size:11cqw;line-height:1.02}
  .v-wall-fan .fan-h1 .acc{display:block}
  .v-wall-fan .fan-sub{position:absolute;left:8cqw;right:8cqw;bottom:8cqh;font-size:5.6cqw;line-height:1.25;margin:0}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-fan .fan-hand{--k:.62;top:12cqw;transform:scale(1.38)}
  .v-wall-fan .fan-glow{left:0;top:0;width:100cqw;height:70cqw}
  .v-wall-fan .fan-floor{height:52cqw}
  .v-wall-fan .fan-copy{bottom:7cqw;left:6cqw;right:6cqw}
  .v-wall-fan .fan-h1{font-size:6.6cqw}
  .v-wall-fan .fan-sub{margin-top:1.4cqw;font-size:2.7cqw}
}
`,
};

export const wallBento: SceneSpec = {
  id: "wall-bento",
  slug: "mg-wall-bento",
  name: "Feature Bento Grid",
  kind: "scene",
  job: "gallery",
  language: "product-ui",
  mechanic: "bento-tile-cascade",
  energy: "default",
  settle: 3,
  colors: {ink: "#15161B", accent: "#3D63FF", secondary: "#A3A5A9", paper: "#EFF0F4"},
  fonts: {display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["bento","features","grid"],
  fields: [
    { key: "headline", label: "Headline", default: "Ask anything", maxChars: 22, role: "headline" },
    { key: "sub", label: "Subline", default: "Answers grounded in every doc, chat and file.", maxChars: 56, role: "body" },
    { key: "tile1", label: "Tile title", default: "Live dashboards", maxChars: 22, role: "label" },
    { key: "tile2", label: "Second tile title", default: "Automations", maxChars: 22, role: "label" },
  ],
  html: `<div class="bt-grid">
  <div class="bt bt-a">
    <div class="bt-ask"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span class="bt-type">Draft a launch plan from Q3 notes</span><span class="bt-caretw"><i class="bt-caret"></i></span><b class="bt-send"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></b></div>
    <div class="bt-ans">
      <div class="bt-ans-h"><span class="bt-orb"></span>Launch plan <em>draft 1, from 6 sources</em></div>
      <div class="bt-row bt-r1"><span class="bt-chk"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span><b>Week 1</b>Private beta for 200 design teams</div>
      <div class="bt-row bt-r2"><span class="bt-chk"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span><b>Week 2</b>Launch film, changelog and press kit</div>
      <div class="bt-row bt-r3"><span class="bt-chk"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span><b>Week 3</b>Public launch on October 21</div>
      <div class="bt-src"><span>Q3 notes.pdf</span><span>Roadmap</span><span>Sales sync</span><span>+3</span></div>
    </div>
    <div class="bt-a-copy"><div class="bt-t" data-21st-slot="headline">{{headline}}</div><div class="bt-p" data-21st-slot="sub">{{sub}}</div></div>
  </div>
  <div class="bt bt-b">
    <div class="bt-head"><div><div class="bt-t" data-21st-slot="tile1">{{tile1}}</div><div class="bt-p">Every metric, refreshed as it happens.</div></div><span class="bt-chip">+38% MoM</span></div>
    <div class="bt-bars"><i style="--h:30%"></i><i style="--h:42%"></i><i style="--h:36%"></i><i style="--h:50%"></i><i style="--h:44%"></i><i style="--h:58%"></i><i style="--h:52%"></i><i style="--h:47%"></i><i style="--h:63%"></i><i style="--h:57%"></i><i style="--h:70%"></i><i style="--h:64%"></i><i style="--h:76%"></i><i style="--h:69%"></i><i style="--h:82%"></i><i style="--h:78%"></i><i style="--h:90%"></i><i style="--h:100%"></i><span class="bt-tipb">48.2k</span></div>
  </div>
  <div class="bt bt-c">
    <div class="bt-doc">
      <div class="bt-avs"><i style="--c:#ff5f93">M</i><i style="--c:#13b5a0">T</i><i style="--c:#ffb020">J</i><em>+5 here</em></div>
      <s style="--w:92%"></s><s class="bt-sel" style="--w:70%"></s><s style="--w:84%"></s>
      <div class="bt-cur bt-cur1"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 1.8 13 7.3 7.9 8.7 5.6 13.6Z" fill="currentColor" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg><span>Mara</span></div>
      <div class="bt-cur bt-cur2"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 1.8 13 7.3 7.9 8.7 5.6 13.6Z" fill="currentColor" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg><span>Theo</span></div>
    </div>
    <div class="bt-foot"><div class="bt-t">Multiplayer</div><div class="bt-p">Edit together, live.</div></div>
  </div>
  <div class="bt bt-d">
    <div class="bt-status"><i></i>All systems normal</div>
    <div class="bt-big">99.98<small>%</small></div>
    <div class="bt-p">Uptime, last 90 days</div>
    <div class="bt-up"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="w"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  </div>
  <div class="bt bt-g">
    <div class="bt-head"><div><div class="bt-t" data-21st-slot="tile2">{{tile2}}</div><div class="bt-p">Trigger, enrich, notify. No code.</div></div><span class="bt-chip bt-chip-g">Runs 24/7</span></div>
    <div class="bt-runs"><i></i>1,284 runs this week, last one 2m ago</div>
    <div class="bt-flow">
      <div class="bt-node"><b style="--c:#fff1d6;--i:#e29a12"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg></b><span>New signup<small>Trigger</small></span><i class="bt-ok bt-ok1"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>
      <div class="bt-wire bt-w1"></div>
      <div class="bt-node"><b style="--c:color-mix(in srgb,var(--accent) 13%,#fff);--i:var(--accent)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg></b><span>Enrich with AI<small>Lumen</small></span><i class="bt-ok bt-ok2"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>
      <div class="bt-wire bt-w2"></div>
      <div class="bt-node"><b style="--c:#ddf6e8;--i:#1f9d5c"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 3 7.5 21M16.5 3l-2 18M4 8.5h17M3 15.5h17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg></b><span>Post to #sales<small>Action</small></span><i class="bt-ok bt-ok3"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>
    </div>
  </div>
  <div class="bt bt-e">
    <div class="bt-keys"><span class="bt-key bt-k1">⌘</span><span class="bt-key bt-k2">K</span></div>
    <div class="bt-foot"><div class="bt-t">Command bar</div><div class="bt-p">Jump anywhere in two keys.</div></div>
  </div>
  <div class="bt bt-f">
    <div class="bt-orbit"><div class="bt-ring"><i style="--a:0deg"><b style="--c:#ff6b4a"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="currentColor"/></svg></b></i><i style="--a:60deg"><b style="--c:#2f6bff"><svg viewBox="0 0 24 24"><path d="M12 4 21 19H3z" fill="currentColor"/></svg></b></i><i style="--a:120deg"><b style="--c:#19b37d"><svg viewBox="0 0 24 24"><rect x="5" y="5" width="5" height="14" rx="2" fill="currentColor"/><rect x="14" y="9" width="5" height="10" rx="2" fill="currentColor"/></svg></b></i><i style="--a:180deg"><b style="--c:#ffb020"><svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="3" fill="#3a2a10"/></svg></b></i><i style="--a:240deg"><b style="--c:#1c1e21"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" stroke-width="3"/></svg></b></i><i style="--a:300deg"><b style="--c:#6188ff"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg></b></i></div><div class="bt-core"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.4" fill="currentColor"/><path d="M12 2.6v2.8M12 18.6v2.8M2.6 12h2.8M18.6 12h2.8M5.4 5.4l2 2M16.6 16.6l2 2M5.4 18.6l2-2M16.6 7.4l2-2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg></div></div>
    <div class="bt-foot"><div class="bt-t">120+ integrations</div><div class="bt-p">Plug in the tools you use.</div></div>
  </div>
</div>`,
  css: `
.v-wall-bento *,.v-wall-bento *::before,.v-wall-bento *::after{box-sizing:border-box}
.v-wall-bento{color:#15161b;font-family:var(--font-body)}
.v-wall-bento[data-backdrop="on"]{background:radial-gradient(90% 70% at 50% -10%,color-mix(in srgb,var(--paper) 40%,#fff) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 93%,var(--ink)) 100%)}
.v-wall-bento .bt-grid{position:absolute;inset:3.4cqw 4.2cqw;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));gap:1.3cqw}
.v-wall-bento .bt{position:relative;overflow:hidden;border-radius:1.7cqw;background:#fff;box-shadow:0 0 0 1px rgba(20,24,40,.06),0 .25cqw .5cqw rgba(20,24,40,.04),0 1.6cqw 3.2cqw -1.2cqw rgba(20,24,40,.16)}
.v-wall-bento .bt-t{font:600 1.5cqw/1.15 var(--font-display);letter-spacing:-.025em}
.v-wall-bento .bt-p{margin-top:.3cqw;font-size:.95cqw;line-height:1.35;color:#6b6f7c}
.v-wall-bento .bt-foot{position:absolute;left:1.5cqw;right:1.5cqw;bottom:1.3cqw}
.v-wall-bento .bt-head{position:absolute;left:1.5cqw;right:1.5cqw;top:1.3cqw;display:flex;justify-content:space-between;align-items:flex-start}
.v-wall-bento .bt-chip{font-size:.85cqw;font-weight:600;color:#127a46;background:#e3f7ec;padding:.3cqw .7cqw;border-radius:2cqw;white-space:nowrap}
.v-wall-bento .bt-chip-g{color:var(--accent);background:color-mix(in srgb,var(--accent) 11%,#fff)}
.v-wall-bento .bt-a{grid-column:1/3;grid-row:1/3;padding:1.8cqw;display:flex;flex-direction:column;color:#fff;background:radial-gradient(120% 90% at 100% 0%,var(--secondary) 0%,var(--accent) 42%,color-mix(in srgb,var(--accent) 62%,#000) 100%);animation:wall-bento-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-a::before{content:"";position:absolute;right:-10cqw;top:-12cqw;width:32cqw;height:32cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.32),rgba(255,255,255,0));animation:wall-bento-glow 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-bento-glow{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-3cqw,2cqw) scale(1.15)}}
.v-wall-bento .bt-ask{position:relative;display:flex;align-items:center;gap:.8cqw;height:3.7cqw;padding:0 .6cqw 0 1.2cqw;border-radius:1.2cqw;background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 1px rgba(255,255,255,.3),0 1cqw 2cqw rgba(26,27,30,.25);font-size:1.3cqw;white-space:nowrap}
.v-wall-bento .bt-ask>svg{width:1.4cqw;height:1.4cqw;flex:none;color:#e6e8ec}
.v-wall-bento .bt-type{animation:wall-bento-type 6s linear infinite}
@keyframes wall-bento-type{0%,11%{clip-path:inset(0 100% 0 0);animation-timing-function:steps(24,end)}24%,100%{clip-path:inset(0 0 0 0)}}
.v-wall-bento .bt-caretw{display:inline-block;animation:wall-bento-caretw 6s linear infinite}
@keyframes wall-bento-caretw{0%,23%{opacity:0}24%,100%{opacity:1}}
.v-wall-bento .bt-caret{display:block;width:.14cqw;height:1.6cqw;background:#fff;animation:wall-bento-blink 1s steps(1,end) infinite}
@keyframes wall-bento-blink{0%{opacity:1}50%{opacity:0}}
.v-wall-bento .bt-send{margin-left:auto;width:2.5cqw;height:2.5cqw;border-radius:.9cqw;background:#fff;color:var(--accent);display:grid;place-items:center;box-shadow:0 .4cqw 1cqw rgba(26,27,30,.3);animation:wall-bento-send 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-send svg{width:1.3cqw;height:1.3cqw}
@keyframes wall-bento-send{0%,24%{transform:scale(1)}25.5%{transform:scale(.84)}28%,100%{transform:scale(1)}}
.v-wall-bento .bt-ans{margin-top:1.1cqw;background:#fff;color:#1e1f22;border-radius:1.2cqw;padding:1cqw 1.2cqw .8cqw;box-shadow:0 1.6cqw 3cqw -1cqw rgba(26,27,30,.5);animation:wall-bento-ans 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-bento-ans{0%,25%{opacity:0;transform:translateY(1.5cqw) scale(.97)}33%,100%{opacity:1;transform:none}}
.v-wall-bento .bt-ans-h{display:flex;align-items:center;gap:.6cqw;font:600 1.15cqw var(--font-display);margin-bottom:.4cqw}
.v-wall-bento .bt-ans-h em{font:500 .85cqw var(--font-body);color:#8a8b8f;font-style:normal}
.v-wall-bento .bt-orb{width:1.5cqw;height:1.5cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--secondary) 35%,var(--accent) 70%)}
.v-wall-bento .bt-row{display:flex;align-items:center;gap:.7cqw;padding:.55cqw 0;border-top:1px solid #edeff3;font-size:1.02cqw;color:#2c2d30}
.v-wall-bento .bt-row b{font:600 .78cqw var(--font-mono);color:var(--accent);width:3.8cqw;flex:none}
.v-wall-bento .bt-chk{width:1.25cqw;height:1.25cqw;border-radius:.4cqw;background:color-mix(in srgb,var(--accent) 13%,#fff);color:var(--accent);display:grid;place-items:center;flex:none}
.v-wall-bento .bt-chk svg{width:.85cqw;height:.85cqw}
.v-wall-bento .bt-r1{animation:wall-bento-r1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-r2{animation:wall-bento-r2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-r3{animation:wall-bento-r3 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-bento-r1{0%,30%{opacity:0;transform:translateX(-1cqw)}36%,100%{opacity:1;transform:none}}
@keyframes wall-bento-r2{0%,33%{opacity:0;transform:translateX(-1cqw)}39%,100%{opacity:1;transform:none}}
@keyframes wall-bento-r3{0%,36%{opacity:0;transform:translateX(-1cqw)}42%,100%{opacity:1;transform:none}}
.v-wall-bento .bt-src{display:flex;gap:.45cqw;margin-top:.45cqw}
.v-wall-bento .bt-src span{font-size:.78cqw;color:#5e5f63;background:#f1f3f7;padding:.22cqw .6cqw;border-radius:.5cqw}
.v-wall-bento .bt-a-copy{margin-top:auto}
.v-wall-bento .bt-a-copy .bt-t{font-size:2.6cqw}
.v-wall-bento .bt-a-copy .bt-p{font-size:1.15cqw;color:rgba(255,255,255,.82);margin-top:.4cqw}
.v-wall-bento .bt-b{grid-column:3/5;grid-row:1;animation:wall-bento-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-bars{position:absolute;left:1.5cqw;right:1.5cqw;bottom:1.3cqw;height:7cqw;display:flex;align-items:flex-end;gap:.5cqw}
.v-wall-bento .bt-bars i{flex:1;height:var(--h);border-radius:.35cqw .35cqw .12cqw .12cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--secondary) 85%,#fff),color-mix(in srgb,var(--secondary) 30%,#fff));transform-origin:50% 100%;animation:wall-bento-bar 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-bars i:nth-child(2n){animation-name:wall-bento-bar2}
.v-wall-bento .bt-bars i:last-child{background:linear-gradient(180deg,var(--accent),var(--secondary));position:relative}
@keyframes wall-bento-bar{0%,10%{transform:scaleY(0)}26%{transform:scaleY(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%{transform:scaleY(.88);animation-timing-function:cubic-bezier(.45,0,.55,1)}74%{transform:scaleY(1.04);animation-timing-function:cubic-bezier(.45,0,.55,1)}88%{transform:scaleY(1)}96%,100%{transform:scaleY(0)}}
@keyframes wall-bento-bar2{0%,12%{transform:scaleY(0)}28%{transform:scaleY(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%{transform:scaleY(1.07);animation-timing-function:cubic-bezier(.45,0,.55,1)}74%{transform:scaleY(.92);animation-timing-function:cubic-bezier(.45,0,.55,1)}88%{transform:scaleY(1)}96%,100%{transform:scaleY(0)}}
.v-wall-bento .bt-tipb{position:absolute;right:.2cqw;bottom:7.4cqw;font:600 .78cqw var(--font-mono);color:#fff;background:#15161b;padding:.2cqw .5cqw;border-radius:.4cqw;animation:wall-bento-tip 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-bento-tip{0%,26%{opacity:0;transform:translateY(.6cqw)}32%,86%{opacity:1;transform:none}94%,100%{opacity:0}}
.v-wall-bento .bt-c{grid-column:3;grid-row:2;animation:wall-bento-in3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-doc{position:absolute;left:1.5cqw;right:1.5cqw;top:1.3cqw;height:7.6cqw}
.v-wall-bento .bt-avs{display:flex;align-items:center;margin-bottom:.9cqw}
.v-wall-bento .bt-avs i{width:1.7cqw;height:1.7cqw;border-radius:50%;background:var(--c);box-shadow:0 0 0 .2cqw #fff;margin-right:-.45cqw;display:grid;place-items:center;font:600 .78cqw var(--font-body);font-style:normal;color:#fff}
.v-wall-bento .bt-avs em{margin-left:.9cqw;font-size:.8cqw;font-style:normal;color:#8a8e9c}
.v-wall-bento .bt-doc s{display:block;height:.55cqw;border-radius:.3cqw;background:#eceef3;width:var(--w);margin-bottom:.75cqw;text-decoration:none}
.v-wall-bento .bt-doc s.bt-sel{background:rgba(255,120,165,.28);box-shadow:inset .18cqw 0 0 #ff6f9f}
.v-wall-bento .bt-cur{position:absolute;display:flex;align-items:flex-start;color:var(--c)}
.v-wall-bento .bt-cur svg{width:1.3cqw;height:1.3cqw;filter:drop-shadow(0 .15cqw .25cqw rgba(0,0,0,.2))}
.v-wall-bento .bt-cur span{margin:.9cqw 0 0 -.2cqw;font-size:.72cqw;font-weight:600;color:#fff;background:var(--c);padding:.12cqw .45cqw;border-radius:.35cqw}
.v-wall-bento .bt-cur1{left:3cqw;top:3.6cqw;--c:#ff5f93;animation:wall-bento-cur1 6s cubic-bezier(.45,0,.55,1) infinite}
.v-wall-bento .bt-cur2{left:13.5cqw;top:5.6cqw;--c:#13b5a0;animation:wall-bento-cur2 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-bento-cur1{0%,100%{transform:translate(0,0)}30%{transform:translate(5cqw,-.4cqw)}55%{transform:translate(7cqw,1.4cqw)}78%{transform:translate(2cqw,1.4cqw)}}
@keyframes wall-bento-cur2{0%,100%{transform:translate(0,0)}25%{transform:translate(-4cqw,-2.2cqw)}50%{transform:translate(-1.2cqw,-3.6cqw)}75%{transform:translate(-2.5cqw,.6cqw)}}
.v-wall-bento .bt-d{grid-column:4;grid-row:2;background:#111216;color:#fff;animation:wall-bento-in4 6s cubic-bezier(.2,.8,.2,1) infinite;box-shadow:0 0 0 1px rgba(0,0,0,.2),0 1.6cqw 3.2cqw -1.2cqw rgba(20,24,40,.35)}
.v-wall-bento .bt-status{position:absolute;left:1.5cqw;top:1.3cqw;display:flex;align-items:center;gap:.55cqw;font-size:.85cqw;color:#9ea3b0}
.v-wall-bento .bt-status i{position:relative;width:.7cqw;height:.7cqw;border-radius:50%;background:#3ccf7e}
.v-wall-bento .bt-status i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#3ccf7e;animation:wall-bento-ping 1.5s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-bento-ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(3);opacity:0}}
.v-wall-bento .bt-big{position:absolute;left:1.5cqw;top:3.2cqw;font:700 3.3cqw/1 var(--font-display);letter-spacing:-.04em}
.v-wall-bento .bt-big small{font-size:1.8cqw;color:#7d8291;margin-left:.15cqw}
.v-wall-bento .bt-d .bt-p{position:absolute;left:1.5cqw;top:7cqw;color:#8b90a0;margin:0}
.v-wall-bento .bt-up{position:absolute;left:1.5cqw;right:1.5cqw;bottom:1.4cqw;height:2.2cqw;display:flex;align-items:flex-end;gap:.2cqw;animation:wall-bento-wipe 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-bento .bt-up i{flex:1;height:100%;border-radius:.12cqw;background:#3ccf7e}
.v-wall-bento .bt-up i.w{background:#f5b84a;height:65%}
@keyframes wall-bento-wipe{0%,16%{clip-path:inset(0 100% 0 0)}30%,100%{clip-path:inset(0 0 0 0)}}
.v-wall-bento .bt-g{grid-column:1/3;grid-row:3;animation:wall-bento-in5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-flow{position:absolute;left:1.5cqw;right:1.5cqw;bottom:1.4cqw;display:flex;align-items:center}
.v-wall-bento .bt-node{position:relative;flex:none;width:11.6cqw;display:flex;align-items:center;gap:.6cqw;padding:.65cqw .7cqw;border-radius:.9cqw;background:#fff;box-shadow:0 0 0 1px rgba(20,24,40,.08),0 .5cqw 1.2cqw rgba(20,24,40,.07)}
.v-wall-bento .bt-node>b{width:2cqw;height:2cqw;border-radius:.6cqw;display:grid;place-items:center;background:var(--c);color:var(--i);flex:none}
.v-wall-bento .bt-node>b svg{width:1.1cqw;height:1.1cqw}
.v-wall-bento .bt-node span{font-size:.92cqw;font-weight:600;line-height:1.2;white-space:nowrap}
.v-wall-bento .bt-node small{display:block;font-size:.72cqw;font-weight:500;color:#8a8e9c}
.v-wall-bento .bt-ok{position:absolute;right:-.45cqw;top:-.45cqw;width:1.3cqw;height:1.3cqw;border-radius:50%;background:#1f9d5c;color:#fff;display:grid;place-items:center;box-shadow:0 0 0 .2cqw #fff}
.v-wall-bento .bt-ok svg{width:.8cqw;height:.8cqw}
.v-wall-bento .bt-ok1{animation:wall-bento-ok1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-ok2{animation:wall-bento-ok2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-ok3{animation:wall-bento-ok3 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-bento-ok1{0%,27%{transform:scale(0)}31%{transform:scale(1.25)}34%,100%{transform:scale(1)}}
@keyframes wall-bento-ok2{0%,35%{transform:scale(0)}39%{transform:scale(1.25)}42%,100%{transform:scale(1)}}
@keyframes wall-bento-ok3{0%,43%{transform:scale(0)}47%{transform:scale(1.25)}50%,100%{transform:scale(1)}}
.v-wall-bento .bt-runs{position:absolute;left:1.5cqw;top:6.3cqw;display:flex;align-items:center;gap:.5cqw;font:500 .82cqw var(--font-mono);color:#8a8e9c}
.v-wall-bento .bt-runs i{width:.55cqw;height:.55cqw;border-radius:50%;background:#3ccf7e;box-shadow:0 0 0 .2cqw rgba(60,207,126,.18)}
.v-wall-bento .bt-wire{position:relative;flex:1;height:.24cqw;margin:0 .3cqw;border-radius:.2cqw;background:repeating-linear-gradient(90deg,#d5d8e2 0 .5cqw,transparent .5cqw .9cqw)}
.v-wall-bento .bt-wire::after{content:"";position:absolute;inset:0;border-radius:.2cqw;background:linear-gradient(90deg,var(--secondary),var(--accent));transform-origin:0 50%;box-shadow:0 0 .8cqw color-mix(in srgb,var(--accent) 60%,transparent)}
.v-wall-bento .bt-w1::after{animation:wall-bento-w1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-bento .bt-w2::after{animation:wall-bento-w2 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes wall-bento-w1{0%,29%{transform:scaleX(0)}36%,100%{transform:scaleX(1)}}
@keyframes wall-bento-w2{0%,37%{transform:scaleX(0)}44%,100%{transform:scaleX(1)}}
.v-wall-bento .bt-e{grid-column:3;grid-row:3;animation:wall-bento-in6 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-keys{position:absolute;left:0;right:0;top:1.9cqw;display:flex;justify-content:center;gap:.9cqw}
.v-wall-bento .bt-key{width:4.4cqw;height:4.4cqw;border-radius:1cqw;display:grid;place-items:center;font:500 1.9cqw var(--font-body);color:#2a2c35;background:linear-gradient(180deg,#ffffff,#eef0f5);box-shadow:inset 0 0 0 1px rgba(20,24,40,.08),0 .35cqw 0 #d6d9e2,0 .7cqw 1.3cqw rgba(20,24,40,.14)}
.v-wall-bento .bt-k1{animation:wall-bento-k1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-k2{animation:wall-bento-k2 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-bento-k1{0%,30%{transform:none}32%,37%{transform:translateY(.3cqw) scale(.97)}40%,62%{transform:none}64%,69%{transform:translateY(.3cqw) scale(.97)}72%,100%{transform:none}}
@keyframes wall-bento-k2{0%,32%{transform:none}34%,37%{transform:translateY(.3cqw) scale(.97)}40%,64%{transform:none}66%,69%{transform:translateY(.3cqw) scale(.97)}72%,100%{transform:none}}
.v-wall-bento .bt-f{grid-column:4;grid-row:3;background:linear-gradient(160deg,color-mix(in srgb,var(--secondary) 14%,#fff),color-mix(in srgb,var(--secondary) 38%,#fff));animation:wall-bento-in7 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-bento .bt-f .bt-p{color:#5f5560}
.v-wall-bento .bt-orbit{position:absolute;right:-1.6cqw;top:-2cqw;width:12cqw;height:12cqw}
.v-wall-bento .bt-ring{position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(160,70,40,.3);animation:wall-bento-spin 24s linear infinite}
.v-wall-bento .bt-ring>i{position:absolute;left:50%;top:50%;width:2cqw;height:2cqw;margin:-1cqw 0 0 -1cqw;transform:rotate(var(--a)) translateY(-6cqw) rotate(calc(-1 * var(--a)))}
.v-wall-bento .bt-ring>i>b{display:grid;place-items:center;width:100%;height:100%;border-radius:.6cqw;background:var(--c);color:#fff;box-shadow:0 .4cqw .9cqw rgba(120,50,30,.25);animation:wall-bento-unspin 24s linear infinite}
.v-wall-bento .bt-ring>i>b svg{width:1.1cqw;height:1.1cqw}
@keyframes wall-bento-spin{to{transform:rotate(360deg)}}
@keyframes wall-bento-unspin{to{transform:rotate(-360deg)}}
.v-wall-bento .bt-core{position:absolute;left:50%;top:50%;width:3.6cqw;height:3.6cqw;margin:-1.8cqw 0 0 -1.8cqw;border-radius:1.1cqw;background:#15161b;color:#ffc58f;display:grid;place-items:center;box-shadow:0 .6cqw 1.4cqw rgba(120,50,30,.35)}
.v-wall-bento .bt-core svg{width:2cqw;height:2cqw}

@keyframes wall-bento-in1{0%,3%{opacity:0;transform:translateY(2.4cqw) scale(.94)}13%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}
@keyframes wall-bento-in2{0%,6.5%{opacity:0;transform:translateY(2.4cqw) scale(.94)}16.5%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}
@keyframes wall-bento-in3{0%,10%{opacity:0;transform:translateY(2.4cqw) scale(.94)}20%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}
@keyframes wall-bento-in4{0%,13.5%{opacity:0;transform:translateY(2.4cqw) scale(.94)}23.5%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}
@keyframes wall-bento-in5{0%,17%{opacity:0;transform:translateY(2.4cqw) scale(.94)}27%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}
@keyframes wall-bento-in6{0%,20.5%{opacity:0;transform:translateY(2.4cqw) scale(.94)}30.5%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}
@keyframes wall-bento-in7{0%,24%{opacity:0;transform:translateY(2.4cqw) scale(.94)}34%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.97)}}

@container (max-aspect-ratio: 4/5){
  .v-wall-bento .bt-grid{inset:auto;left:50%;top:50%;width:45.1cqw;height:92cqw;transform:translate(-50%,-50%) scale(1.78);grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:36fr 16fr 15fr 15fr;gap:1.2cqw}
  .v-wall-bento .bt-a{grid-column:1/3;grid-row:1}
  .v-wall-bento .bt-a-copy{order:-1;margin:0 0 1.4cqw}
  .v-wall-bento .bt-a-copy .bt-t{font-size:4.4cqw;line-height:1}
  .v-wall-bento .bt-a-copy .bt-p{font-size:3.1cqw;line-height:1.2;margin-top:.8cqw}
  .v-wall-bento .bt-b{grid-column:1/3;grid-row:2}
  .v-wall-bento .bt-b .bt-t,.v-wall-bento .bt-g .bt-t{font-size:3.1cqw}
  .v-wall-bento .bt-b .bt-p,.v-wall-bento .bt-g .bt-p,.v-wall-bento .bt-runs{display:none}
  .v-wall-bento .bt-bars{height:6.6cqw}
  .v-wall-bento .bt-tipb{bottom:7cqw}
  .v-wall-bento .bt-c{grid-column:1;grid-row:3}
  .v-wall-bento .bt-d{grid-column:2;grid-row:3}
  .v-wall-bento .bt-g{grid-column:1/3;grid-row:4}
  .v-wall-bento .bt-node{width:12.4cqw}
  .v-wall-bento .bt-e,.v-wall-bento .bt-f{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-bento .bt-grid{inset:auto;left:50%;top:50%;width:68.3cqw;height:68cqw;transform:translate(-50%,-50%) scale(1.3);grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(4,minmax(0,1fr))}
  .v-wall-bento .bt-a{grid-column:1/3;grid-row:1/3}
  .v-wall-bento .bt-a-copy .bt-p{font-size:1.45cqw}
  .v-wall-bento .bt-b{grid-column:3;grid-row:1}
  .v-wall-bento .bt-b .bt-p{display:none}
  .v-wall-bento .bt-chip{display:none}
  .v-wall-bento .bt-d{grid-column:3;grid-row:2}
  .v-wall-bento .bt-g{grid-column:1/3;grid-row:3}
  .v-wall-bento .bt-c{grid-column:3;grid-row:3}
  .v-wall-bento .bt-e{grid-column:1;grid-row:4}
  .v-wall-bento .bt-f{grid-column:2/4;grid-row:4}
}
`,
};

export const wallOneToMany: SceneSpec = {
  id: "wall-one-to-many",
  slug: "mg-wall-one-to-many",
  name: "One Prompt Many Results",
  kind: "scene",
  job: "gallery",
  language: "product-ui",
  mechanic: "prompt-burst-to-grid",
  energy: "punchy",
  settle: 3,
  colors: {ink: "#F4F2EE", accent: "#FF8F5A", secondary: "#FFB27A", paper: "#0E0E11"},
  fonts: {display: "Geist", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["prompt","variants","ai"],
  fields: [
    { key: "prompt", label: "Prompt", default: "A lighthouse at dusk,", maxChars: 30, role: "headline" },
    { key: "promptStyle", label: "Prompt style", default: "risograph poster, warm grain", maxChars: 32, role: "body" },
    { key: "brand", label: "Product label", default: "lumen / image studio", maxChars: 26, role: "label" },
    { key: "count", label: "Result count", default: "16 variations in 3.8s", maxChars: 26, role: "caption" },
  ],
  html: `<div class="om-dots"></div>
<div class="om-top"><span class="om-brand"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.4" fill="currentColor"/><path d="M12 2.6v2.8M12 18.6v2.8M2.6 12h2.8M18.6 12h2.8M5.4 5.4l2 2M16.6 16.6l2 2M5.4 18.6l2-2M16.6 7.4l2-2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg><span data-21st-slot="brand">{{brand}}</span></span><span class="om-count"><i></i><span data-21st-slot="count">{{count}}</span></span></div>
<div class="om-grid">
  <div class="om-card">
    <div class="om-card-top"><span class="om-lbl"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg>Prompt</span><span class="om-model">riso-v4</span></div>
    <div class="om-text"><span class="om-l1" data-21st-slot="prompt">{{prompt}}</span><span class="om-l2" data-21st-slot="promptStyle">{{promptStyle}}</span></div>
    <div class="om-card-bot"><span class="om-chip">1:1</span><span class="om-chip">16 variations</span><span class="om-go">Generate<kbd>↵</kbd></span></div>
  </div>
  <div class="om-img om-r3" style="--dx:17.1cqw;--dy:6.84cqw;--a:#f7a23b;--b:#ffe3a3;--c:#c7502f;--d:#6f2418;--sun:#fffbe8;--glow:rgba(255,240,180,.7);--lh:#3a1a12;--lh2:#fffbe8;--rock:#2a120c;--sx:70%;--rx:8.5cqw;--lx:14%;--fl:1;--sunr:rgba(255,251,232,0.5)"></div><div class="om-img om-r2" style="--dx:10.26cqw;--dy:6.84cqw;--a:#f6d3c9;--b:#f49ab0;--c:#e2475c;--d:#9e2440;--sun:#fff4e6;--glow:rgba(255,255,255,.45);--lh:#1f2124;--lh2:#fff4e6;--rock:#1f2124;--sx:56%;--rx:6.54cqw;--lx:14%;--fl:1;--sunr:rgba(255,244,230,0.5)"></div><div class="om-img om-r1" style="--dx:3.42cqw;--dy:6.84cqw;--a:#c9f0dc;--b:#fbe7b5;--c:#2f8a73;--d:#134a3c;--sun:#ff7a50;--glow:rgba(255,140,90,.35);--lh:#133b31;--lh2:#fbe7b5;--rock:#0e2f27;--sx:70%;--rx:8.5cqw;--lx:14%;--fl:1;--sunr:rgba(255,122,80,0.5)"></div><div class="om-img om-r1" style="--dx:-3.42cqw;--dy:6.84cqw;--a:#0ea5c6;--b:#9ef0ff;--c:#0b5f8a;--d:#08304a;--sun:#ffffff;--glow:rgba(255,255,255,.55);--lh:#062236;--lh2:#ff5d5d;--rock:#04192a;--sx:56%;--rx:6.54cqw;--lx:14%;--fl:1;--sunr:rgba(255,255,255,0.5)"></div><div class="om-img om-r2" style="--dx:-10.26cqw;--dy:6.84cqw;--a:#1b2a5a;--b:#8aa4e8;--c:#22346e;--d:#0d1636;--sun:#fdf6e3;--glow:rgba(220,230,255,.4);--lh:#0a1230;--lh2:#fdf6e3;--rock:#08102a;--sx:34%;--rx:3.46cqw;--lx:62%;--fl:-1;--sunr:rgba(253,246,227,0.5);--fx:radial-gradient(circle .12cqw at 18% 14%,#fff 90%,transparent),radial-gradient(circle .1cqw at 42% 24%,#fff 90%,transparent),radial-gradient(circle .14cqw at 76% 10%,#fff 90%,transparent),radial-gradient(circle .09cqw at 88% 32%,#fff 90%,transparent),radial-gradient(circle .1cqw at 30% 40%,rgba(255,255,255,.7) 90%,transparent),radial-gradient(circle .11cqw at 60% 18%,rgba(255,255,255,.8) 90%,transparent)"></div><div class="om-img om-r3" style="--dx:-17.1cqw;--dy:6.84cqw;--a:#4a6ddd;--b:#bfe3f2;--c:#2c46a2;--d:#27282b;--sun:#fff0f6;--glow:rgba(255,200,230,.5);--lh:#1d1e21;--lh2:#ffc9df;--rock:#18191c;--sx:56%;--rx:6.54cqw;--lx:14%;--fl:1;--sunr:rgba(255,240,246,0.5)"></div><div class="om-img om-r2" style="--dx:17.1cqw;--dy:0cqw;--a:#343639;--b:#ff8a5c;--c:#38393c;--d:#17181b;--sun:#ffd8a0;--glow:rgba(255,150,90,.6);--lh:#16171a;--lh2:#ff6b57;--rock:#0f1013;--sx:70%;--rx:8.5cqw;--lx:14%;--fl:1;--sunr:rgba(255,216,160,0.5)"></div><div class="om-img om-r1" style="--dx:10.26cqw;--dy:0cqw;--a:#e9e4da;--b:#cfc6b6;--c:#3b3a3a;--d:#151515;--sun:#151515;--glow:rgba(0,0,0,0);--lh:#151515;--lh2:#e9e4da;--rock:#151515;--sx:76%;--rx:9.34cqw;--lx:18%;--fl:1;--sunr:rgba(21,21,21,0.5);--lamp:#e9e4da;--halo:rgba(0,0,0,0);--beam:rgba(21,21,21,.35)"></div><div class="om-img om-r1" style="--dx:-10.26cqw;--dy:0cqw;--a:#111215;--b:#3956b7;--c:#1a1b1e;--d:#090a0d;--sun:#ffcf7a;--glow:rgba(255,190,110,.45);--lh:#050608;--lh2:#ffcf7a;--rock:#030406;--sx:28%;--rx:2.62cqw;--lx:74%;--fl:-1;--sunr:rgba(255,207,122,0.5);--fx:radial-gradient(circle .12cqw at 18% 14%,#fff 90%,transparent),radial-gradient(circle .1cqw at 42% 24%,#fff 90%,transparent),radial-gradient(circle .14cqw at 76% 10%,#fff 90%,transparent),radial-gradient(circle .09cqw at 88% 32%,#fff 90%,transparent),radial-gradient(circle .1cqw at 30% 40%,rgba(255,255,255,.7) 90%,transparent),radial-gradient(circle .11cqw at 60% 18%,rgba(255,255,255,.8) 90%,transparent)"><div class="om-sel"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z" fill="currentColor"/></svg>Favorite</span></div></div><div class="om-img om-r2" style="--dx:-17.1cqw;--dy:0cqw;--a:#ff6f61;--b:#ffc3a0;--c:#1f3b73;--d:#0d1f45;--sun:#fff1d6;--glow:rgba(255,230,200,.6);--lh:#0d1f45;--lh2:#fff1d6;--rock:#0a1836;--sx:62%;--rx:7.38cqw;--lx:18%;--fl:1;--sunr:rgba(255,241,214,0.5)"></div><div class="om-img om-r3" style="--dx:17.1cqw;--dy:-6.84cqw;--a:#071f2e;--b:#1d6f7a;--c:#0b3440;--d:#04151d;--sun:#f2f7d2;--glow:rgba(200,255,230,.35);--lh:#031018;--lh2:#e8f1c9;--rock:#021016;--sx:28%;--rx:2.62cqw;--lx:56%;--fl:-1;--sunr:rgba(242,247,210,0.5);--fx:radial-gradient(circle .12cqw at 18% 14%,#fff 90%,transparent),radial-gradient(circle .1cqw at 42% 24%,#fff 90%,transparent),radial-gradient(circle .14cqw at 76% 10%,#fff 90%,transparent),radial-gradient(circle .09cqw at 88% 32%,#fff 90%,transparent),radial-gradient(circle .1cqw at 30% 40%,rgba(255,255,255,.7) 90%,transparent),radial-gradient(circle .11cqw at 60% 18%,rgba(255,255,255,.8) 90%,transparent)"></div><div class="om-img om-r2" style="--dx:10.26cqw;--dy:-6.84cqw;--a:#27282b;--b:#ff4f7b;--c:#343539;--d:#121316;--sun:#ffd166;--glow:rgba(255,120,120,.5);--lh:#0b0c0f;--lh2:#ffd166;--rock:#090a0d;--sx:76%;--rx:9.34cqw;--lx:58%;--fl:-1;--sunr:rgba(255,209,102,0.5)"></div><div class="om-img om-r1" style="--dx:3.42cqw;--dy:-6.84cqw;--a:#f2e8d5;--b:#f2b28d;--c:#2754c5;--d:#142e7a;--sun:#e8432e;--glow:rgba(232,67,46,.25);--lh:#1c2440;--lh2:#e8432e;--rock:#142e7a;--sx:70%;--rx:8.5cqw;--lx:14%;--fl:1;--sunr:rgba(232,67,46,0.5)"></div><div class="om-img om-r1" style="--dx:-3.42cqw;--dy:-6.84cqw;--a:#0f3d3e;--b:#e8a87c;--c:#145a5b;--d:#082a2b;--sun:#ffe8c2;--glow:rgba(255,200,150,.5);--lh:#041c1d;--lh2:#e8a87c;--rock:#031617;--sx:48%;--rx:5.42cqw;--lx:72%;--fl:-1;--sunr:rgba(255,232,194,0.5)"></div><div class="om-img om-r2" style="--dx:-10.26cqw;--dy:-6.84cqw;--a:#ffb199;--b:#ffe0c7;--c:#e86f6f;--d:#8a3050;--sun:#fff7ee;--glow:rgba(255,255,255,.5);--lh:#4a1d33;--lh2:#fff7ee;--rock:#3a1428;--sx:48%;--rx:5.42cqw;--lx:18%;--fl:1;--sunr:rgba(255,247,238,0.5)"></div><div class="om-img om-r3" style="--dx:-17.1cqw;--dy:-6.84cqw;--a:#ffe066;--b:#fff3bf;--c:#ff5c8a;--d:#b0285a;--sun:#ff5c8a;--glow:rgba(255,92,138,.2);--lh:#28292c;--lh2:#fff3bf;--rock:#28292c;--sx:76%;--rx:9.34cqw;--lx:12%;--fl:1;--sunr:rgba(255,92,138,0.5);--beam:rgba(255,255,255,.6)"></div>
</div>
<div class="om-sheen"></div>`,
  css: `
.v-wall-one-to-many *,.v-wall-one-to-many *::before,.v-wall-one-to-many *::after{box-sizing:border-box}
.v-wall-one-to-many{color:var(--ink);font-family:var(--font-body)}
.v-wall-one-to-many[data-backdrop="on"]{background:radial-gradient(70% 70% at 50% 50%,color-mix(in srgb,var(--paper) 90%,var(--ink)) 0%,var(--paper) 70%,color-mix(in srgb,var(--paper) 80%,#000) 100%)}
.v-wall-one-to-many[data-backdrop="off"] .om-dots{display:none}
.v-wall-one-to-many .om-dots{position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ink) 10%,transparent) .12cqw,transparent .15cqw);background-size:2.2cqw 2.2cqw;-webkit-mask-image:radial-gradient(60% 60% at 50% 50%,#000,transparent);mask-image:radial-gradient(60% 60% at 50% 50%,#000,transparent)}
.v-wall-one-to-many .om-top{position:absolute;left:5cqw;right:5cqw;top:2cqw;display:flex;justify-content:space-between;align-items:center;font:500 1.05cqw var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-wall-one-to-many .om-brand{display:flex;align-items:center;gap:.5cqw}
.v-wall-one-to-many .om-brand svg{width:1.2cqw;height:1.2cqw;color:var(--accent)}
.v-wall-one-to-many .om-brand b{font-weight:500;opacity:.4}
.v-wall-one-to-many .om-count{display:flex;align-items:center;gap:.5cqw;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:wall-one-to-many-count 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-one-to-many .om-count i{width:.6cqw;height:.6cqw;border-radius:50%;background:#4ade80;box-shadow:0 0 .8cqw #4ade80}
@keyframes wall-one-to-many-count{0%,38%{opacity:0;transform:translateY(-.6cqw)}44%,88%{opacity:1;transform:none}95%,100%{opacity:0}}
.v-wall-one-to-many .om-grid{position:absolute;left:5cqw;right:5cqw;top:5.9cqw;height:44.4cqw;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));gap:1.2cqw}
.v-wall-one-to-many .om-card{grid-column:3/5;grid-row:2;position:relative;z-index:3;display:flex;flex-direction:column;padding:1.25cqw 1.5cqw;border-radius:1.4cqw;background:linear-gradient(180deg,#28292c,#18191c);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),0 0 0 1px rgba(0,0,0,.5),0 2cqw 5cqw rgba(0,0,0,.65),0 0 7cqw color-mix(in srgb,var(--accent) 22%,transparent);animation:wall-one-to-many-card 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-one-to-many-card{0%{opacity:0;transform:scale(1.34);filter:blur(.6cqw)}6%{opacity:1;transform:scale(1.3);filter:blur(0)}19%{transform:scale(1.3);animation-timing-function:cubic-bezier(.65,0,.35,1)}27%{transform:scale(1)}90%{opacity:1;transform:scale(1)}98%,100%{opacity:0;transform:scale(.94)}}
.v-wall-one-to-many .om-card-top{display:flex;justify-content:space-between;align-items:center;font:500 .9cqw var(--font-mono);color:rgba(244,242,238,.55)}
.v-wall-one-to-many .om-lbl{display:flex;align-items:center;gap:.45cqw}
.v-wall-one-to-many .om-lbl svg{width:1cqw;height:1cqw;color:var(--secondary)}
.v-wall-one-to-many .om-model{padding:.15cqw .5cqw;border-radius:.4cqw;background:rgba(255,255,255,.07)}
.v-wall-one-to-many .om-text{margin-top:.8cqw;font-size:1.55cqw;line-height:1.28;font-weight:500;letter-spacing:-.01em;color:#fbf8f3}
.v-wall-one-to-many .om-text span{display:block;white-space:nowrap}
.v-wall-one-to-many .om-l1{animation:wall-one-to-many-l1 6s linear infinite}
.v-wall-one-to-many .om-l2{animation:wall-one-to-many-l2 6s linear infinite}
@keyframes wall-one-to-many-l1{0%,5%{clip-path:inset(0 100% 0 0);animation-timing-function:steps(14,end)}11%,100%{clip-path:inset(0 0 0 0)}}
@keyframes wall-one-to-many-l2{0%,11%{clip-path:inset(0 100% 0 0);animation-timing-function:steps(18,end)}17%,100%{clip-path:inset(0 0 0 0)}}
.v-wall-one-to-many .om-text .om-l2{color:color-mix(in srgb,var(--secondary) 70%,#fff)}
.v-wall-one-to-many .om-card-bot{margin-top:auto;display:flex;align-items:center;gap:.5cqw}
.v-wall-one-to-many .om-chip{font-size:.92cqw;color:rgba(244,242,238,.7);padding:.3cqw .65cqw;border-radius:.5cqw;background:rgba(255,255,255,.06);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.v-wall-one-to-many .om-go{position:relative;margin-left:auto;display:flex;align-items:center;gap:.5cqw;font-size:1cqw;font-weight:600;color:#1a1210;padding:.45cqw .6cqw .45cqw .9cqw;border-radius:.65cqw;background:linear-gradient(180deg,var(--secondary),var(--accent));box-shadow:0 .5cqw 1.4cqw color-mix(in srgb,var(--accent) 35%,transparent);animation:wall-one-to-many-go 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-one-to-many .om-go kbd{font:600 .8cqw var(--font-mono);padding:.05cqw .35cqw;border-radius:.3cqw;background:rgba(0,0,0,.14)}
.v-wall-one-to-many .om-go::after{content:"";position:absolute;inset:0;border-radius:.65cqw;box-shadow:0 0 0 .2cqw var(--accent);opacity:0;animation:wall-one-to-many-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-one-to-many-go{0%,17%{transform:scale(1)}18.5%{transform:scale(.9)}21%,100%{transform:scale(1)}}
@keyframes wall-one-to-many-ring{0%,18%{opacity:0;transform:scale(1)}19%{opacity:.9;transform:scale(1)}30%,100%{opacity:0;transform:scale(1.6,2.2)}}
.v-wall-one-to-many .om-img{position:relative;border-radius:1cqw;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08),0 1.2cqw 2.4cqw rgba(0,0,0,.5);
background:
 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .36 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") 0 0/9cqw 9cqw,
 radial-gradient(ellipse 2.7cqw .95cqw at calc(var(--lx) + .85cqw) 64.6%,var(--rock) 0 94%,transparent 100%),
 repeating-linear-gradient(180deg,var(--sunr) 0 .26cqw,transparent .26cqw .7cqw) var(--rx) 100%/2.6cqw 34% no-repeat,
 repeating-linear-gradient(180deg,rgba(255,255,255,0) 0 .55cqw,rgba(255,255,255,.08) .55cqw .66cqw) 0 100%/100% 36% no-repeat,
 linear-gradient(180deg,var(--c),var(--d)) 0 100%/100% 36% no-repeat,
 radial-gradient(circle 1.9cqw at calc(var(--lx) + .85cqw) calc(64% - 5.55cqw),var(--halo,rgba(255,240,190,.75)),transparent 75%),
 var(--fx,linear-gradient(transparent,transparent)),
 radial-gradient(circle 2.4cqw at var(--sx) 64%,var(--sun) 0 97%,transparent 100%),
 radial-gradient(10cqw 6cqw at var(--sx) 64%,var(--glow),transparent 70%),
 linear-gradient(180deg,var(--a),var(--b) 64%)}
.v-wall-one-to-many .om-img::before{content:"";position:absolute;left:var(--lx);bottom:36%;width:1.7cqw;height:6.2cqw;background:linear-gradient(180deg,var(--lh) 0 5%,var(--lamp,#fff3c4) 5% 16%,var(--lh) 16% 21%,var(--lh2) 21% 40%,var(--lh) 40% 60%,var(--lh2) 60% 80%,var(--lh) 80%);clip-path:polygon(42% 0,58% 0,64% 5%,64% 16%,74% 16%,74% 21%,69% 21%,96% 100%,4% 100%,31% 21%,26% 21%,26% 16%,36% 16%,36% 5%)}
.v-wall-one-to-many .om-img::after{content:"";position:absolute;left:calc(var(--lx) + .85cqw);top:calc(64% - 6.55cqw);width:9cqw;height:2cqw;background:linear-gradient(90deg,var(--beam,rgba(255,244,210,.7)),rgba(255,244,210,0));clip-path:polygon(0 46%,100% 0,100% 100%,0 54%);transform-origin:0 50%;animation:wall-one-to-many-beam 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-one-to-many-beam{0%,100%{transform:scaleX(var(--fl,1)) rotate(-8deg)}50%{transform:scaleX(var(--fl,1)) rotate(6deg)}}
.v-wall-one-to-many .om-r1{animation:wall-one-to-many-r1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-one-to-many .om-r2{animation:wall-one-to-many-r2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-one-to-many .om-r3{animation:wall-one-to-many-r3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-one-to-many .om-sel{position:absolute;inset:0;border-radius:1cqw;box-shadow:inset 0 0 0 .25cqw #fff;z-index:2;animation:wall-one-to-many-sel 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-one-to-many .om-sel span{position:absolute;left:.7cqw;bottom:.7cqw;display:flex;align-items:center;gap:.35cqw;font-size:.85cqw;font-weight:600;color:#17110f;background:#fff;padding:.25cqw .55cqw;border-radius:.5cqw;box-shadow:0 .4cqw 1cqw rgba(0,0,0,.35)}
.v-wall-one-to-many .om-sel svg{width:.9cqw;height:.9cqw;color:var(--accent)}
@keyframes wall-one-to-many-sel{0%,42%{opacity:0;transform:scale(1.06)}47%,86%{opacity:1;transform:scale(1)}91%,100%{opacity:0;transform:scale(1)}}
.v-wall-one-to-many .om-sheen{position:absolute;left:5cqw;right:5cqw;top:5.9cqw;height:44.4cqw;z-index:4;pointer-events:none;background:linear-gradient(105deg,rgba(255,255,255,0) 40%,rgba(255,255,255,.16) 50%,rgba(255,255,255,0) 60%) 0 0/300% 100% no-repeat;mix-blend-mode:screen;animation:wall-one-to-many-sheen 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-one-to-many-sheen{0%,55%{background-position:100% 0;opacity:0}57%{opacity:1}74%{background-position:0 0;opacity:1}76%,100%{background-position:0 0;opacity:0}}

@keyframes wall-one-to-many-r1{0%,23%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5);filter:blur(.5cqw)}30%{opacity:1;transform:translate(0,0) scale(1.04);filter:blur(0)}35%,88%{opacity:1;transform:translate(0,0) scale(1);filter:blur(0)}95%,100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5);filter:blur(.3cqw)}}
@keyframes wall-one-to-many-r2{0%,27%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5);filter:blur(.5cqw)}34%{opacity:1;transform:translate(0,0) scale(1.04);filter:blur(0)}39%,86%{opacity:1;transform:translate(0,0) scale(1);filter:blur(0)}93%,100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5);filter:blur(.3cqw)}}
@keyframes wall-one-to-many-r3{0%,31%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5);filter:blur(.5cqw)}38%{opacity:1;transform:translate(0,0) scale(1.04);filter:blur(0)}43%,84%{opacity:1;transform:translate(0,0) scale(1);filter:blur(0)}91%,100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.5);filter:blur(.3cqw)}}

@container (max-aspect-ratio: 4/5){
  .v-wall-one-to-many .om-top{left:8cqw;right:8cqw;top:7cqh;height:auto;flex-direction:column;align-items:flex-start;gap:0;font-size:5.4cqw}
  .v-wall-one-to-many .om-brand{gap:2cqw}
  .v-wall-one-to-many .om-brand svg{width:5.4cqw;height:5.4cqw}
  .v-wall-one-to-many .om-count{position:absolute;left:0;top:79cqh;gap:2cqw;font-size:5.4cqw}
  .v-wall-one-to-many .om-count i{width:2.6cqw;height:2.6cqw}
  .v-wall-one-to-many .om-grid{left:50%;right:auto;top:50%;width:58.8cqw;height:auto;transform:translate(-50%,-50%) scale(1.43);grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(2,13cqw) auto repeat(2,13cqw)}
  .v-wall-one-to-many .om-card{grid-column:1/5;grid-row:3;padding:1.4cqw 1.6cqw}
  .v-wall-one-to-many .om-card-top{font-size:1.7cqw}
  .v-wall-one-to-many .om-lbl svg{width:1.7cqw;height:1.7cqw}
  .v-wall-one-to-many .om-text{font-size:3.9cqw;line-height:1.15;margin:1cqw 0 1.4cqw}
  .v-wall-one-to-many .om-text span{white-space:normal}
  .v-wall-one-to-many .om-chip{font-size:1.6cqw}
  .v-wall-one-to-many .om-go{font-size:1.7cqw}
  .v-wall-one-to-many .om-go kbd{font-size:1.4cqw}
  .v-wall-one-to-many .om-sel span{font-size:1.3cqw}
  .v-wall-one-to-many .om-sheen{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-one-to-many .om-top{left:5.6cqw;right:5.6cqw;top:4.2cqw;font-size:1.9cqw}
  .v-wall-one-to-many .om-brand svg{width:2cqw;height:2cqw}
  .v-wall-one-to-many .om-count i{width:1cqw;height:1cqw}
  .v-wall-one-to-many .om-grid{left:5.6cqw;right:5.6cqw;top:10.5cqw;height:84cqw;grid-template-rows:repeat(4,minmax(0,1fr))}
  .v-wall-one-to-many .om-card{grid-column:2/6;grid-row:2/4;padding:2.2cqw 2.4cqw}
  .v-wall-one-to-many .om-card-top{font-size:1.5cqw}
  .v-wall-one-to-many .om-lbl svg{width:1.6cqw;height:1.6cqw}
  .v-wall-one-to-many .om-text{font-size:3.2cqw;line-height:1.18;margin-top:1.6cqw}
  .v-wall-one-to-many .om-chip{font-size:1.5cqw}
  .v-wall-one-to-many .om-go{font-size:1.6cqw;padding:.7cqw 1cqw .7cqw 1.4cqw}
  .v-wall-one-to-many .om-go kbd{font-size:1.3cqw}
  .v-wall-one-to-many .om-sel span{font-size:1.2cqw}
  .v-wall-one-to-many .om-sheen{display:none}
}
`,
};

export const wallMarquee: SceneSpec = {
  id: "wall-marquee",
  slug: "mg-wall-marquee",
  name: "Tilted Screenshot Wall",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "tilted-marquee-rows",
  energy: "calm",
  settle: 2.5,
  colors: {ink: "#15171A", accent: "#E0553F", secondary: "#787A7D", paper: "#FBE2EE"},
  fonts: {display: "Instrument Serif", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["marquee","wall","headline"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen for teams", maxChars: 24, role: "kicker" },
    { key: "line1", label: "Headline", default: "Loved by teams", maxChars: 18, role: "headline" },
    { key: "line2", label: "Headline accent", default: "who ship daily.", maxChars: 18, role: "headline" },
    { key: "sub", label: "Subline", default: "40,000 teams in 120 countries run on Lumen", maxChars: 50, role: "body" },
  ],
  html: `<div class="mq-cam"><div class="mq-wall">
  <div class="mq-row mq-l" style="--m:0cqw"><i class="mq-s mq-t1"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t3"></i><i class="mq-s mq-t6"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t3"></i><i class="mq-s mq-t6"></i></div>
  <div class="mq-row mq-r" style="--m:-10cqw"><i class="mq-s mq-t4"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t6"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t6"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t7"></i></div>
  <div class="mq-row mq-l" style="--m:5cqw"><i class="mq-s mq-t3"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t6"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t3"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t6"></i><i class="mq-s mq-t2"></i></div>
  <div class="mq-row mq-r" style="--m:-6cqw"><i class="mq-s mq-t5"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t3"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t3"></i></div>
  <div class="mq-row mq-l" style="--m:10cqw"><i class="mq-s mq-t7"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t3"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t1"></i><i class="mq-s mq-t7"></i><i class="mq-s mq-t4"></i><i class="mq-s mq-t3"></i><i class="mq-s mq-t5"></i><i class="mq-s mq-t2"></i><i class="mq-s mq-t1"></i></div>
</div></div>
<div class="mq-blur"></div>
<div class="mq-veil"></div>
<div class="mq-copy">
  <div class="mq-pill"><i></i><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="mq-h"><span class="mq-ln mq-ln1"><span data-21st-slot="line1">{{line1}}</span></span><span class="mq-ln mq-ln2"><span data-21st-slot="line2">{{line2}}</span></span></div>
  <div class="mq-sub" data-21st-slot="sub">{{sub}}</div>
</div>`,
  css: `
.v-wall-marquee *,.v-wall-marquee *::before,.v-wall-marquee *::after{box-sizing:border-box}
.v-wall-marquee{color:var(--ink);font-family:var(--font-body)}
.v-wall-marquee[data-backdrop="on"]{background:linear-gradient(125deg,color-mix(in srgb,var(--accent) 14%,var(--paper)) 0%,var(--paper) 48%,color-mix(in srgb,var(--secondary) 16%,var(--paper)) 100%)}
.v-wall-marquee[data-backdrop="off"] .mq-cam{-webkit-mask-image:radial-gradient(50% 50% at 50% 50%,#000 62%,transparent 100%);mask-image:radial-gradient(50% 50% at 50% 50%,#000 62%,transparent 100%)}
.v-wall-marquee .mq-cam{position:absolute;inset:0;animation:wall-marquee-cam 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-marquee-cam{0%,100%{transform:scale(1.07)}50%{transform:scale(1)}}
.v-wall-marquee .mq-wall{position:absolute;left:-20cqw;right:-20cqw;top:-14cqw;bottom:-14cqw;transform:rotate(-12deg);display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:2cqw}
.v-wall-marquee .mq-row{display:flex;width:max-content;margin-left:var(--m)}
.v-wall-marquee .mq-l{animation:wall-marquee-l 18s linear infinite}
.v-wall-marquee .mq-r{animation:wall-marquee-r 18s linear infinite}
@keyframes wall-marquee-l{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes wall-marquee-r{from{transform:translateX(-50%)}to{transform:translateX(0)}}
.v-wall-marquee .mq-s{flex:none;width:21cqw;height:13.5cqw;margin-right:2cqw;border-radius:1cqw;background-color:#fff;box-shadow:0 0 0 1px rgba(47,48,51,.06),0 .4cqw .8cqw rgba(47,48,51,.06),0 1.8cqw 3.4cqw -1cqw rgba(61,62,66,.24)}
.v-wall-marquee .mq-veil{position:absolute;inset:0;background:radial-gradient(44% 50% at 50% 50%,color-mix(in srgb,var(--paper) 95%,transparent) 0%,color-mix(in srgb,var(--paper) 80%,transparent) 50%,transparent 100%);animation:wall-marquee-veil 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-marquee .mq-blur{position:absolute;inset:0;-webkit-backdrop-filter:blur(.5cqw);backdrop-filter:blur(.5cqw);-webkit-mask-image:radial-gradient(40% 46% at 50% 50%,#000 35%,transparent 100%);mask-image:radial-gradient(40% 46% at 50% 50%,#000 35%,transparent 100%);animation:wall-marquee-veil 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes wall-marquee-veil{0%,4%{opacity:0}18%,84%{opacity:1}96%,100%{opacity:0}}
.v-wall-marquee .mq-copy{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center}
.v-wall-marquee .mq-pill{display:inline-flex;align-items:center;gap:.6cqw;padding:.5cqw 1.1cqw;border-radius:5cqw;background:color-mix(in srgb,var(--paper) 88%,var(--ink));box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent),0 .6cqw 1.4cqw rgba(30,32,35,.12);font-size:1.15cqw;font-weight:500;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:wall-marquee-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-marquee .mq-pill i{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .25cqw color-mix(in srgb,var(--accent) 22%,transparent)}
.v-wall-marquee .mq-h{margin-top:1.2cqw;font:400 7.2cqw/.98 var(--font-display);letter-spacing:-.025em;color:var(--ink)}
.v-wall-marquee .mq-ln{display:block;overflow:hidden;padding:0 2cqw .5cqw}
.v-wall-marquee .mq-ln{margin-block:-.26em}
.v-wall-marquee .mq-ln>span{display:inline-block;padding-block:.26em;margin-block:-.26em}
.v-wall-marquee .mq-ln{padding-top:.26em;padding-bottom:calc(.5cqw + .26em)}
.v-wall-marquee .mq-ln1>span{animation:wall-marquee-ln1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-marquee .mq-ln2>span{animation:wall-marquee-ln2 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-marquee-ln1{0%,6%{transform:translateY(110%)}20%,84%{transform:translateY(0)}94%,100%{transform:translateY(-110%)}}
@keyframes wall-marquee-ln2{0%,9%{transform:translateY(110%)}23%,85%{transform:translateY(0)}95%,100%{transform:translateY(-110%)}}
.v-wall-marquee .mq-ln2>span{font-style:italic;color:var(--accent)}
.v-wall-marquee .mq-sub{margin-top:1.1cqw;font-size:1.45cqw;color:color-mix(in srgb,var(--ink) 68%,transparent);animation:wall-marquee-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-marquee-fade{0%,10%{opacity:0;transform:translateY(.8cqw)}24%,84%{opacity:1;transform:none}93%,100%{opacity:0;transform:translateY(-.5cqw)}}

.v-wall-marquee .mq-t1{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 0cqw 0cqw/21cqw 1.6cqw no-repeat,linear-gradient(#c6c8cc,#c6c8cc) 5.8cqw 3.2cqw/2.2cqw 0.32cqw no-repeat,linear-gradient(#27292c,#27292c) 5.8cqw 3.95cqw/3cqw 0.7cqw no-repeat,linear-gradient(#f4f5fa,#f4f5fa) 5.2cqw 2.6cqw/4.6cqw 2.8cqw no-repeat,linear-gradient(#c6c8cc,#c6c8cc) 11cqw 3.2cqw/2.2cqw 0.32cqw no-repeat,linear-gradient(#27292c,#27292c) 11cqw 3.95cqw/2.6cqw 0.7cqw no-repeat,linear-gradient(#f4f5fa,#f4f5fa) 10.4cqw 2.6cqw/4.6cqw 2.8cqw no-repeat,linear-gradient(#c6c8cc,#c6c8cc) 16.2cqw 3.2cqw/2.2cqw 0.32cqw no-repeat,linear-gradient(#27292c,#27292c) 16.2cqw 3.95cqw/2.2cqw 0.7cqw no-repeat,linear-gradient(#f4f5fa,#f4f5fa) 15.6cqw 2.6cqw/4.6cqw 2.8cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 5.9cqw 10.1cqw/0.8cqw 2.2cqw no-repeat,linear-gradient(color-mix(in srgb,var(--secondary) 60%,#fff),color-mix(in srgb,var(--secondary) 60%,#fff)) 7.23cqw 9.2cqw/0.8cqw 3.1cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 8.56cqw 9.7cqw/0.8cqw 2.6cqw no-repeat,linear-gradient(color-mix(in srgb,var(--secondary) 60%,#fff),color-mix(in srgb,var(--secondary) 60%,#fff)) 9.89cqw 8.5cqw/0.8cqw 3.8cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 11.22cqw 9.1cqw/0.8cqw 3.2cqw no-repeat,linear-gradient(color-mix(in srgb,var(--secondary) 60%,#fff),color-mix(in srgb,var(--secondary) 60%,#fff)) 12.55cqw 7.9cqw/0.8cqw 4.4cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 13.88cqw 8.4cqw/0.8cqw 3.9cqw no-repeat,linear-gradient(color-mix(in srgb,var(--secondary) 60%,#fff),color-mix(in srgb,var(--secondary) 60%,#fff)) 15.21cqw 7.4cqw/0.8cqw 4.9cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 16.54cqw 8.1cqw/0.8cqw 4.2cqw no-repeat,linear-gradient(color-mix(in srgb,var(--secondary) 60%,#fff),color-mix(in srgb,var(--secondary) 60%,#fff)) 17.87cqw 6.9cqw/0.8cqw 5.4cqw no-repeat,linear-gradient(#6c6e72,#6c6e72) 19.2cqw 7.3cqw/0.8cqw 5cqw no-repeat,linear-gradient(#fbfaff,#fbfaff) 5.2cqw 6.2cqw/15.2cqw 6.7cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 0.8cqw 3cqw/2.8cqw 0.4cqw no-repeat,linear-gradient(#d9dbdf,#d9dbdf) 0.8cqw 4.1cqw/2.2cqw 0.4cqw no-repeat,linear-gradient(#d9dbdf,#d9dbdf) 0.8cqw 5.2cqw/2.6cqw 0.4cqw no-repeat,linear-gradient(#d9dbdf,#d9dbdf) 0.8cqw 6.3cqw/2cqw 0.4cqw no-repeat,linear-gradient(#d9dbdf,#d9dbdf) 0.8cqw 7.4cqw/2.4cqw 0.4cqw no-repeat,linear-gradient(#eaebf0,#eaebf0) 0.5cqw 2.6cqw/3.4cqw 1.2cqw no-repeat,linear-gradient(#f8f7fb,#f8f7fb) 0cqw 1.6cqw/4.4cqw 11.9cqw no-repeat}
.v-wall-marquee .mq-t2{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 0cqw 0cqw/21cqw 1.6cqw no-repeat,radial-gradient(circle 1.1cqw at 15.4cqw 4.3cqw,rgba(255,255,255,.6) 92%,transparent 100%),linear-gradient(120deg,#ffb08a,#f17ab0) 1.6cqw 2.4cqw/17.8cqw 4.2cqw no-repeat,radial-gradient(circle 0.55cqw at 18.6cqw 7.8cqw,#f6a96b 92%,transparent 100%),linear-gradient(#1d1f22,#1d1f22) 1.6cqw 7.35cqw/10cqw 0.85cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 1.6cqw 8.9cqw/17cqw 0.36cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 1.6cqw 9.75cqw/15.5cqw 0.36cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 1.6cqw 10.6cqw/16.4cqw 0.36cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 1.6cqw 11.45cqw/9cqw 0.36cqw no-repeat}
.v-wall-marquee .mq-t3{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 0cqw 0cqw/21cqw 1.6cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 1cqw 2.4cqw/2.4cqw 0.38cqw no-repeat,linear-gradient(#ff8a7a,#ff8a7a) 1.5cqw 3.8cqw/1.6cqw 0.42cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 1.5cqw 4.55cqw/4.1cqw 0.32cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 1.5cqw 5.15cqw/2.8cqw 0.32cqw no-repeat,linear-gradient(#ffffff,#ffffff) 1cqw 3.3cqw/5.6cqw 3cqw no-repeat,linear-gradient(#e3e5ec,#e3e5ec) 0.94cqw 3.24cqw/5.72cqw 3.12cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 1.5cqw 7.4cqw/1.6cqw 0.42cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 1.5cqw 8.15cqw/4.1cqw 0.32cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 1.5cqw 8.75cqw/2.8cqw 0.32cqw no-repeat,linear-gradient(#ffffff,#ffffff) 1cqw 6.9cqw/5.6cqw 3.6cqw no-repeat,linear-gradient(#e3e5ec,#e3e5ec) 0.94cqw 6.84cqw/5.72cqw 3.72cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 7.7cqw 2.4cqw/2.4cqw 0.38cqw no-repeat,linear-gradient(#34c38f,#34c38f) 8.2cqw 3.8cqw/1.6cqw 0.42cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 8.2cqw 4.55cqw/4.1cqw 0.32cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 8.2cqw 5.15cqw/2.8cqw 0.32cqw no-repeat,linear-gradient(#ffffff,#ffffff) 7.7cqw 3.3cqw/5.6cqw 3.6cqw no-repeat,linear-gradient(#e3e5ec,#e3e5ec) 7.64cqw 3.24cqw/5.72cqw 3.72cqw no-repeat,linear-gradient(#ffb020,#ffb020) 8.2cqw 8cqw/1.6cqw 0.42cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 8.2cqw 8.75cqw/4.1cqw 0.32cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 8.2cqw 9.35cqw/2.8cqw 0.32cqw no-repeat,linear-gradient(#ffffff,#ffffff) 7.7cqw 7.5cqw/5.6cqw 2.8cqw no-repeat,linear-gradient(#e3e5ec,#e3e5ec) 7.64cqw 7.44cqw/5.72cqw 2.92cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 14.4cqw 2.4cqw/2.4cqw 0.38cqw no-repeat,linear-gradient(#3aa0ff,#3aa0ff) 14.9cqw 3.8cqw/1.6cqw 0.42cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 14.9cqw 4.55cqw/4.1cqw 0.32cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 14.9cqw 5.15cqw/2.8cqw 0.32cqw no-repeat,linear-gradient(#ffffff,#ffffff) 14.4cqw 3.3cqw/5.6cqw 2.8cqw no-repeat,linear-gradient(#e3e5ec,#e3e5ec) 14.34cqw 3.24cqw/5.72cqw 2.92cqw no-repeat,linear-gradient(#ff6fb1,#ff6fb1) 14.9cqw 7.2cqw/1.6cqw 0.42cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 14.9cqw 7.95cqw/4.1cqw 0.32cqw no-repeat,linear-gradient(#e2e4ea,#e2e4ea) 14.9cqw 8.55cqw/2.8cqw 0.32cqw no-repeat,linear-gradient(#ffffff,#ffffff) 14.4cqw 6.7cqw/5.6cqw 3.2cqw no-repeat,linear-gradient(#e3e5ec,#e3e5ec) 14.34cqw 6.64cqw/5.72cqw 3.32cqw no-repeat,#f4f5f8}
.v-wall-marquee .mq-t4{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 0cqw 0cqw/21cqw 1.6cqw no-repeat,radial-gradient(circle 0.5cqw at 19.3cqw 11.95cqw,var(--secondary) 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 6.2cqw 11.2cqw/13.9cqw 1.5cqw no-repeat,linear-gradient(rgba(255,255,255,.8),rgba(255,255,255,.8)) 15.1cqw 8.85cqw/4cqw 0.34cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 14.5cqw 8.3cqw/5.3cqw 1.4cqw no-repeat,linear-gradient(#cbcdd1,#cbcdd1) 7cqw 5.6cqw/8cqw 0.34cqw no-repeat,linear-gradient(#cbcdd1,#cbcdd1) 7cqw 6.4cqw/8.8cqw 0.34cqw no-repeat,linear-gradient(#cbcdd1,#cbcdd1) 7cqw 7.2cqw/5cqw 0.34cqw no-repeat,linear-gradient(#eff1f5,#eff1f5) 6.4cqw 5cqw/10cqw 2.9cqw no-repeat,linear-gradient(rgba(255,255,255,.8),rgba(255,255,255,.8)) 12.1cqw 3.4cqw/6.5cqw 0.34cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 11.5cqw 2.8cqw/8.3cqw 1.5cqw no-repeat,radial-gradient(circle 0.55cqw at 1.3cqw 3.2cqw,#ff8a7a 92%,transparent 100%),linear-gradient(#cbcdd1,#cbcdd1) 2.2cqw 2.8cqw/2.4cqw 0.3cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 2.2cqw 3.35cqw/1.7cqw 0.26cqw no-repeat,radial-gradient(circle 0.55cqw at 1.3cqw 5.5cqw,#34c38f 92%,transparent 100%),linear-gradient(#cbcdd1,#cbcdd1) 2.2cqw 5.1cqw/2.4cqw 0.3cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 2.2cqw 5.65cqw/1.7cqw 0.26cqw no-repeat,radial-gradient(circle 0.55cqw at 1.3cqw 7.8cqw,#ffb020 92%,transparent 100%),linear-gradient(#cbcdd1,#cbcdd1) 2.2cqw 7.4cqw/2.4cqw 0.3cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 2.2cqw 7.95cqw/1.7cqw 0.26cqw no-repeat,radial-gradient(circle 0.55cqw at 1.3cqw 10.1cqw,#3aa0ff 92%,transparent 100%),linear-gradient(#cbcdd1,#cbcdd1) 2.2cqw 9.7cqw/2.4cqw 0.3cqw no-repeat,linear-gradient(#e3e5e9,#e3e5e9) 2.2cqw 10.25cqw/1.7cqw 0.26cqw no-repeat,linear-gradient(#eceef3,#eceef3) 0.4cqw 2.3cqw/4.8cqw 1.8cqw no-repeat,linear-gradient(#faf9fc,#faf9fc) 0cqw 1.6cqw/5.4cqw 11.9cqw no-repeat}
.v-wall-marquee .mq-t5{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 0cqw 0cqw/21cqw 1.6cqw no-repeat,radial-gradient(circle 0.9cqw at 4.8cqw 4.2cqw,rgba(255,255,255,.7) 92%,transparent 100%),linear-gradient(160deg,#ff9a62,#e2567a) 1cqw 2.4cqw/5.8cqw 4.9cqw no-repeat,linear-gradient(30deg,#1f5f6b,#9fe0d0) 7.6cqw 2.4cqw/5.8cqw 4.9cqw no-repeat,linear-gradient(180deg,#ffd8c2,#f4a6a6) 14.2cqw 2.4cqw/5.8cqw 4.9cqw no-repeat,linear-gradient(140deg,#303135,#acaeb2) 1cqw 7.7cqw/5.8cqw 4.9cqw no-repeat,radial-gradient(circle 0.9cqw at 11.4cqw 9.5cqw,rgba(255,255,255,.7) 92%,transparent 100%),linear-gradient(120deg,#ffd36b,#c2412d) 7.6cqw 7.7cqw/5.8cqw 4.9cqw no-repeat,linear-gradient(200deg,#9be7c4,#3a7bd5) 14.2cqw 7.7cqw/5.8cqw 4.9cqw no-repeat}
.v-wall-marquee .mq-t6{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#1d1e21,#1d1e21) 0cqw 0cqw/21cqw 1.6cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 2.6cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#6ec1ff,#6ec1ff) 2.2cqw 2.6cqw/3.2cqw 0.34cqw no-repeat,linear-gradient(#6ec1ff,#6ec1ff) 5.9cqw 2.6cqw/3.2cqw 0.34cqw no-repeat,linear-gradient(#ff7ab6,#ff7ab6) 9.6cqw 2.6cqw/4cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 14.1cqw 2.6cqw/1.2cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 3.75cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 2.2cqw 3.75cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#ffd479,#ffd479) 4.3cqw 3.75cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 6.4cqw 3.75cqw/1.2cqw 0.34cqw no-repeat,linear-gradient(#888a8e,#888a8e) 8.1cqw 3.75cqw/1.2cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 4.9cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 3.3cqw 4.9cqw/4cqw 0.34cqw no-repeat,linear-gradient(#6ec1ff,#6ec1ff) 7.8cqw 4.9cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 6.05cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#ffd479,#ffd479) 4.4cqw 6.05cqw/1.2cqw 0.34cqw no-repeat,linear-gradient(#aaabaf,#aaabaf) 6.1cqw 6.05cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 7.2cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 3.3cqw 7.2cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#888a8e,#888a8e) 5.4cqw 7.2cqw/4cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 8.35cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 2.2cqw 8.35cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#ff7ab6,#ff7ab6) 5.1cqw 8.35cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 7.2cqw 8.35cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 9.5cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#ffd479,#ffd479) 3.3cqw 9.5cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 6.2cqw 9.5cqw/3.2cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 10.65cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#7ee0c3,#7ee0c3) 2.2cqw 10.65cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#aaabaf,#aaabaf) 5.1cqw 10.65cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#ff7ab6,#ff7ab6) 8cqw 10.65cqw/3.2cqw 0.34cqw no-repeat,linear-gradient(#aaabaf,#aaabaf) 11.7cqw 10.65cqw/3.2cqw 0.34cqw no-repeat,linear-gradient(#38393d,#38393d) 0.8cqw 11.8cqw/0.55cqw 0.34cqw no-repeat,linear-gradient(#ffd479,#ffd479) 2.2cqw 11.8cqw/2.4cqw 0.34cqw no-repeat,linear-gradient(#ffd479,#ffd479) 5.1cqw 11.8cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(rgba(134,135,139,.2),rgba(134,135,139,.2)) 0cqw 5.69cqw/21cqw 1.06cqw no-repeat,#131517}
.v-wall-marquee .mq-t7{background:radial-gradient(circle 0.27cqw at 1cqw 0.8cqw,#ff8a7a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 1.8cqw 0.8cqw,#ffd27a 92%,transparent 100%),radial-gradient(circle 0.27cqw at 2.6cqw 0.8cqw,#8be0a4 92%,transparent 100%),linear-gradient(#f1f3f7,#f1f3f7) 0cqw 0cqw/21cqw 1.6cqw no-repeat,linear-gradient(#ff8a7a,#ff8a7a) 1.15cqw 3.6cqw/0.24cqw 2.4cqw no-repeat,linear-gradient(#ffe4dc,#ffe4dc) 1.15cqw 3.6cqw/3.5cqw 2.4cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 4.95cqw 5cqw/0.24cqw 3.2cqw no-repeat,linear-gradient(#e7e9ed,#e7e9ed) 4.95cqw 5cqw/3.5cqw 3.2cqw no-repeat,linear-gradient(#34c38f,#34c38f) 8.75cqw 3.4cqw/0.24cqw 1.8cqw no-repeat,linear-gradient(#dcf5ea,#dcf5ea) 8.75cqw 3.4cqw/3.5cqw 1.8cqw no-repeat,linear-gradient(#ffb020,#ffb020) 12.55cqw 6.4cqw/0.24cqw 2.6cqw no-repeat,linear-gradient(#fff1d6,#fff1d6) 12.55cqw 6.4cqw/3.5cqw 2.6cqw no-repeat,linear-gradient(#3aa0ff,#3aa0ff) 16.35cqw 4.2cqw/0.24cqw 3.6cqw no-repeat,linear-gradient(#dcefff,#dcefff) 16.35cqw 4.2cqw/3.5cqw 3.6cqw no-repeat,linear-gradient(var(--secondary),var(--secondary)) 1.15cqw 8.4cqw/0.24cqw 2.2cqw no-repeat,linear-gradient(#e7e9ed,#e7e9ed) 1.15cqw 8.4cqw/3.5cqw 2.2cqw no-repeat,linear-gradient(#ff6fb1,#ff6fb1) 8.75cqw 7.6cqw/0.24cqw 3.4cqw no-repeat,linear-gradient(#ffe4ef,#ffe4ef) 8.75cqw 7.6cqw/3.5cqw 3.4cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 1.2cqw 2.3cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 5cqw 2.3cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 8.8cqw 2.3cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 12.6cqw 2.3cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#9aa0b4,#9aa0b4) 16.4cqw 2.3cqw/1.6cqw 0.34cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 1cqw 3.1cqw/0.06cqw 9.8cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 4.8cqw 3.1cqw/0.06cqw 9.8cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 8.6cqw 3.1cqw/0.06cqw 9.8cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 12.4cqw 3.1cqw/0.06cqw 9.8cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 16.2cqw 3.1cqw/0.06cqw 9.8cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 20cqw 3.1cqw/0.06cqw 9.8cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 1cqw 3.1cqw/19cqw 0.06cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 1cqw 5.5cqw/19cqw 0.06cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 1cqw 7.9cqw/19cqw 0.06cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 1cqw 10.3cqw/19cqw 0.06cqw no-repeat,linear-gradient(#eaecf0,#eaecf0) 1cqw 12.7cqw/19cqw 0.06cqw no-repeat}

@container (max-aspect-ratio: 4/5){
  .v-wall-marquee .mq-wall{transform:rotate(-12deg) scale(2.2)}
  .v-wall-marquee .mq-veil{background:radial-gradient(75% 30% at 50% 50%,color-mix(in srgb,var(--paper) 96%,transparent) 0%,color-mix(in srgb,var(--paper) 82%,transparent) 55%,transparent 100%)}
  .v-wall-marquee .mq-blur{-webkit-mask-image:radial-gradient(70% 28% at 50% 50%,#000 35%,transparent 100%);mask-image:radial-gradient(70% 28% at 50% 50%,#000 35%,transparent 100%)}
  .v-wall-marquee .mq-copy{top:0;bottom:0;transform:none}
  .v-wall-marquee .mq-pill{position:absolute;left:50%;top:8cqh;translate:-50% 0;white-space:nowrap;gap:2.4cqw;padding:1.8cqw 4.4cqw;border-radius:10cqw;font-size:5.4cqw}
  .v-wall-marquee .mq-pill i{width:2.6cqw;height:2.6cqw}
  .v-wall-marquee .mq-h{position:absolute;left:4cqw;right:4cqw;top:50%;translate:0 -50%;margin:0;font-size:13.5cqw;line-height:1}
  .v-wall-marquee .mq-sub{position:absolute;left:8cqw;right:8cqw;bottom:7cqh;margin:0;padding:3cqw 4.4cqw;border-radius:4cqw;background:color-mix(in srgb,var(--paper) 90%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent),0 2cqw 5cqw rgba(30,32,35,.14);font-size:5.4cqw;line-height:1.25}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-marquee .mq-wall{transform:rotate(-12deg) scale(1.45)}
  .v-wall-marquee .mq-veil{background:radial-gradient(60% 40% at 50% 50%,color-mix(in srgb,var(--paper) 96%,transparent) 0%,color-mix(in srgb,var(--paper) 82%,transparent) 55%,transparent 100%)}
  .v-wall-marquee .mq-pill{gap:1cqw;padding:.9cqw 2cqw;font-size:2.2cqw}
  .v-wall-marquee .mq-pill i{width:1.2cqw;height:1.2cqw}
  .v-wall-marquee .mq-h{margin-top:2cqw;font-size:10.5cqw}
  .v-wall-marquee .mq-sub{margin:2cqw auto 0;max-width:70cqw;font-size:2.6cqw}
}
`,
};

export const wallCoverflow: SceneSpec = {
  id: "wall-coverflow",
  slug: "mg-wall-coverflow",
  name: "3D Card Coverflow",
  kind: "scene",
  job: "gallery",
  language: "glass",
  mechanic: "coverflow-rotate",
  energy: "default",
  settle: 3,
  colors: {ink: "#FFFFFF", accent: "#3D63FF", secondary: "#C6C8CC", paper: "#17191C"},
  fonts: {display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["coverflow","carousel","3d"],
  fields: [
    { key: "kicker", label: "Kicker", default: "lumen / templates", maxChars: 26, role: "kicker" },
    { key: "title", label: "Headline", default: "Start from something beautiful", maxChars: 36, role: "headline" },
    { key: "caption", label: "Caption", default: "200+ templates for every kind of team", maxChars: 48, role: "caption" },
  ],
  html: `<div class="cf-spot"></div>
<div class="cf-floor"></div>
<div class="cf-head"><div class="cf-eyebrow" data-21st-slot="kicker">{{kicker}}</div><div class="cf-title" data-21st-slot="title">{{title}}</div></div>
<div class="cf-scene"><div class="cf-track">
  <div class="cf-card cf-e" style="--bg:radial-gradient(70% 50% at 80% 10%,#ffd1dc,rgba(255,209,220,0) 70%),linear-gradient(160deg,#fb7185,#e11d48 60%,#9f1239)">
    <div class="cf-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" opacity=".55"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" opacity=".55"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor"/></svg>Goals</div>
    <div class="cf-rings"><div class="cf-ring" style="--p:82;--in:#e8365a"><span>82%</span></div><div class="cf-ring" style="--p:64;--in:#e02c52"><span>64%</span></div><div class="cf-ring" style="--p:41;--in:#d4244b"><span>41%</span></div></div>
    <div class="cf-ringl"><span>Growth</span><span>Quality</span><span>Hiring</span></div>
    <div class="cf-info"><div><div class="cf-name">OKR tracker</div><div class="cf-meta">Template, 9 blocks</div></div><span class="cf-use">Use</span></div>
  </div>
  <div class="cf-card cf-d" style="--bg:radial-gradient(60% 50% at 20% 0%,#f7ffd6,rgba(247,255,214,0) 70%),linear-gradient(160deg,#d9f99d,#a3e635 55%,#65a30d)">
    <div class="cf-chip" style="background:rgba(20,40,0,.18)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg>Brand</div>
    <div class="cf-aa">Aa</div>
    <div class="cf-sw"><i style="--c:#1b2a0a"></i><i style="--c:#f97316"></i><i style="--c:#fef3c7"></i><i style="--c:#0ea5e9"></i></div>
    <div class="cf-info"><div><div class="cf-name">Brand kit</div><div class="cf-meta">Template, 22 blocks</div></div><span class="cf-use">Use</span></div>
  </div>
  <div class="cf-card cf-a" style="--bg:radial-gradient(80% 60% at 80% 10%,#ffd29a,rgba(255,210,154,0) 60%),linear-gradient(160deg,#ff8a4c,#e8473b 60%,#a72b4a)">
    <div class="cf-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg>Planning</div>
    <div class="cf-gantt"><i style="--x:0;--w:62%"></i><i style="--x:22%;--w:58%"></i><i style="--x:46%;--w:44%;--o:.22"></i><i style="--x:12%;--w:34%;--o:.18"></i></div>
    <div class="cf-info"><div><div class="cf-name">Launch plan</div><div class="cf-meta">Template, 14 blocks</div></div><span class="cf-use">Use</span></div>
  </div>
  <div class="cf-card cf-b" style="--bg:radial-gradient(70% 50% at 20% 0%,#bfe9ff,rgba(191,233,255,0) 70%),linear-gradient(160deg,#38bdf8,#2563eb 60%,#1e3a8a)">
    <div class="cf-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 10a7.5 7.5 0 0 1 13.2-3.6L20 9M19.5 14a7.5 7.5 0 0 1-13.2 3.6L4 15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M20 4v5h-5M4 20v-5h5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Meetings</div>
    <div class="cf-cal"><i></i><i class="on"></i><i></i><i class="mid"></i><i></i><i class="mid"></i><i></i><i></i><i class="on"></i><i></i><i></i><i class="mid"></i><i class="on"></i><i></i><i></i></div>
    <div class="cf-info"><div><div class="cf-name">Weekly sync</div><div class="cf-meta">Template, 8 blocks</div></div><span class="cf-use">Use</span></div>
  </div>
  <div class="cf-card cf-c" style="--bg:radial-gradient(70% 60% at 85% 15%,color-mix(in srgb,var(--secondary) 60%,transparent),transparent 70%),radial-gradient(70% 60% at 10% 60%,rgba(63,208,255,.5),rgba(63,208,255,0) 70%),linear-gradient(160deg,color-mix(in srgb,var(--accent) 55%,#000),var(--accent) 55%,color-mix(in srgb,var(--accent) 45%,#000))">
    <div class="cf-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>Research</div>
    <div class="cf-orb"></div>
    <span class="cf-pill" style="left:1.4cqw;top:12.2cqw">Papers <b>24</b></span>
    <span class="cf-pill" style="right:1.3cqw;top:4.6cqw">Notes <b>112</b></span>
    <span class="cf-pill" style="right:2.2cqw;top:14.2cqw">Sources <b>58</b></span>
    <div class="cf-info"><div><div class="cf-name">Research hub</div><div class="cf-meta">Template, 18 blocks</div></div><span class="cf-use">Use</span></div>
  </div>
</div></div>
<div class="cf-foot" data-21st-slot="caption">{{caption}}</div>
<div class="cf-dots"><i></i><i></i><i></i><i></i><i></i><b></b></div>`,
  css: `
.v-wall-coverflow *,.v-wall-coverflow *::before,.v-wall-coverflow *::after{box-sizing:border-box}
.v-wall-coverflow{color:var(--ink);font-family:var(--font-body)}
.v-wall-coverflow[data-backdrop="on"]{background:radial-gradient(90% 80% at 50% 28%,color-mix(in srgb,var(--secondary) 12%,var(--paper)) 0%,var(--paper) 50%,color-mix(in srgb,var(--paper) 55%,#000) 100%)}
.v-wall-coverflow[data-backdrop="off"] .cf-spot,.v-wall-coverflow[data-backdrop="off"] .cf-floor{display:none}
.v-wall-coverflow .cf-card{color:#fff}
.v-wall-coverflow .cf-spot{position:absolute;left:20cqw;right:20cqw;top:-10cqw;height:60cqw;background:radial-gradient(50% 50% at 50% 50%,color-mix(in srgb,var(--secondary) 18%,transparent),transparent 70%);animation:wall-coverflow-spot 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-coverflow-spot{0%,100%{opacity:.85;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
.v-wall-coverflow .cf-floor{position:absolute;left:0;right:0;top:41cqw;height:16cqw;background:radial-gradient(50% 70% at 50% 0%,color-mix(in srgb,var(--secondary) 18%,transparent),transparent 70%)}
.v-wall-coverflow .cf-floor::before{content:"";position:absolute;left:12cqw;right:12cqw;top:0;height:1px;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--secondary) 40%,transparent),transparent)}
.v-wall-coverflow .cf-head{position:absolute;left:0;right:0;top:3.1cqw;text-align:center}
.v-wall-coverflow .cf-eyebrow{font:500 1.05cqw var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent)}
.v-wall-coverflow .cf-title{margin-top:.5cqw;font:600 2.3cqw/1.1 var(--font-display);letter-spacing:-.02em}
.v-wall-coverflow .cf-scene{position:absolute;inset:0;perspective:85cqw;perspective-origin:50% 45%}
.v-wall-coverflow .cf-track{position:absolute;left:50%;top:26.5cqw;width:0;height:0;transform-style:preserve-3d}
.v-wall-coverflow .cf-card{position:absolute;left:-10.5cqw;top:-13cqw;width:21cqw;height:26cqw;border-radius:1.4cqw;overflow:hidden;background:var(--bg);box-shadow:inset 0 0 0 1px rgba(255,255,255,.2),0 2cqw 4cqw rgba(0,0,0,.5);-webkit-box-reflect:below .8cqw linear-gradient(transparent 64%,rgba(255,255,255,.26))}
.v-wall-coverflow .cf-card::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.28),rgba(255,255,255,0) 38%);z-index:2;pointer-events:none}
.v-wall-coverflow .cf-a{animation:wall-coverflow-a 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-coverflow .cf-b{animation:wall-coverflow-b 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-coverflow .cf-c{animation:wall-coverflow-c 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-coverflow .cf-d{animation:wall-coverflow-d 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-coverflow .cf-e{animation:wall-coverflow-e 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-coverflow .cf-chip{position:absolute;left:1.2cqw;top:1.2cqw;display:flex;align-items:center;gap:.4cqw;font-size:.85cqw;font-weight:600;padding:.3cqw .65cqw;border-radius:2cqw;background:rgba(255,255,255,.22);color:#fff;-webkit-backdrop-filter:blur(.4cqw);backdrop-filter:blur(.4cqw)}
.v-wall-coverflow .cf-chip svg{width:.9cqw;height:.9cqw}
.v-wall-coverflow .cf-info{position:absolute;left:0;right:0;bottom:0;padding:1.6cqw 1.3cqw 1.2cqw;background:linear-gradient(180deg,rgba(8,9,12,0),rgba(8,9,12,.62));display:flex;align-items:flex-end;justify-content:space-between}
.v-wall-coverflow .cf-name{font:600 1.45cqw/1.15 var(--font-display);letter-spacing:-.02em}
.v-wall-coverflow .cf-meta{margin-top:.35cqw;font-size:.85cqw;color:rgba(255,255,255,.7)}
.v-wall-coverflow .cf-use{font-size:.85cqw;font-weight:600;color:#17191c;background:#fff;padding:.35cqw .8cqw;border-radius:2cqw}
.v-wall-coverflow .cf-art{position:absolute;left:0;right:0;top:0;height:19cqw}
.v-wall-coverflow .cf-gantt{position:absolute;left:1.6cqw;right:1.6cqw;top:5cqw}
.v-wall-coverflow .cf-gantt i{display:block;height:1.5cqw;margin-bottom:.9cqw;border-radius:.75cqw;margin-left:var(--x);width:var(--w);background:rgba(255,255,255,var(--o,.3));box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}
.v-wall-coverflow .cf-gantt i:nth-child(2){background:#fff;box-shadow:0 .6cqw 1.4cqw rgba(140,30,30,.35)}
.v-wall-coverflow .cf-cal{position:absolute;left:1.6cqw;right:1.6cqw;top:4.6cqw;display:grid;grid-template-columns:repeat(5,1fr);gap:.45cqw}
.v-wall-coverflow .cf-cal i{height:2.2cqw;border-radius:.45cqw;background:rgba(255,255,255,.16)}
.v-wall-coverflow .cf-cal i.on{background:#fff;box-shadow:0 .5cqw 1.2cqw rgba(10,40,120,.35)}
.v-wall-coverflow .cf-cal i.mid{background:rgba(255,255,255,.45)}
.v-wall-coverflow .cf-orb{position:absolute;left:50%;top:9cqw;width:10cqw;height:10cqw;margin:-5cqw 0 0 -5cqw;border-radius:50%;background:radial-gradient(circle at 34% 28%,#ffffff 0%,rgba(255,255,255,.6) 12%,rgba(255,255,255,0) 40%),radial-gradient(circle at 70% 75%,#3fd0ff,rgba(63,208,255,0) 55%),radial-gradient(circle at 30% 70%,#22d3ee,rgba(34,211,238,0) 60%),#6d6f73;box-shadow:0 1.6cqw 3cqw rgba(29,30,33,.5),inset 0 -1cqw 2cqw rgba(29,30,33,.4);animation:wall-coverflow-orb 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-coverflow-orb{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-.8cqw) rotate(12deg)}}
.v-wall-coverflow .cf-pill{position:absolute;font-size:.8cqw;font-weight:600;padding:.3cqw .6cqw;border-radius:.6cqw;background:rgba(255,255,255,.88);color:#282a2d;box-shadow:0 .5cqw 1.2cqw rgba(29,30,33,.3)}
.v-wall-coverflow .cf-pill b{color:var(--accent)}
.v-wall-coverflow .cf-aa{position:absolute;left:1.6cqw;top:3.6cqw;font:400 8.5cqw/1 var(--font-display);color:#1b2a0a;letter-spacing:-.03em}
.v-wall-coverflow .cf-sw{position:absolute;left:1.6cqw;right:1.6cqw;top:13.2cqw;display:flex;gap:.6cqw}
.v-wall-coverflow .cf-sw i{width:2.4cqw;height:2.4cqw;border-radius:50%;background:var(--c);box-shadow:0 0 0 .18cqw rgba(255,255,255,.7)}
.v-wall-coverflow .cf-rings{position:absolute;left:1.6cqw;right:1.6cqw;top:5cqw;display:flex;justify-content:space-between}
.v-wall-coverflow .cf-ring{position:relative;width:5.2cqw;height:5.2cqw;border-radius:50%;background:conic-gradient(#fff calc(var(--p) * 1%),rgba(255,255,255,.22) 0)}
.v-wall-coverflow .cf-ring::after{content:"";position:absolute;inset:.7cqw;border-radius:50%;background:var(--in)}
.v-wall-coverflow .cf-ring span{position:absolute;inset:0;display:grid;place-items:center;z-index:1;font-size:.95cqw;font-weight:700}
.v-wall-coverflow .cf-ringl{position:absolute;left:1.6cqw;right:1.6cqw;top:11.4cqw;display:flex;justify-content:space-between;font-size:.75cqw;color:rgba(255,255,255,.8)}
.v-wall-coverflow .cf-ringl span{width:5.2cqw;text-align:center}
.v-wall-coverflow .cf-dots{position:absolute;left:50%;bottom:3.1cqw;display:flex;gap:.8cqw;transform:translateX(-50%)}
.v-wall-coverflow .cf-dots i{width:.6cqw;height:.6cqw;border-radius:50%;background:color-mix(in srgb,var(--ink) 25%,transparent)}
.v-wall-coverflow .cf-dots b{position:absolute;left:0;top:0;width:.6cqw;height:.6cqw;border-radius:50%;background:var(--ink);box-shadow:0 0 .8cqw color-mix(in srgb,var(--ink) 70%,transparent);animation:wall-coverflow-dot 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes wall-coverflow-dot{0%,14%{transform:translateX(0)}20%,34%{transform:translateX(1.4cqw)}40%,54%{transform:translateX(2.8cqw)}60%,74%{transform:translateX(4.2cqw)}80%,94%{transform:translateX(5.6cqw)}100%{transform:translateX(0)}}

@keyframes wall-coverflow-a{0%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}14%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}20%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}34%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}40%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}54%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}57%{transform:translate3d(-41cqw,0,-30cqw) rotateY(62deg);filter:brightness(0.15) saturate(0.6);opacity:0}57.01%{transform:translate3d(41cqw,0,-30cqw) rotateY(-62deg);filter:brightness(0.15) saturate(0.6);opacity:0}60%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}74%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}80%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}94%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}100%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}}
@keyframes wall-coverflow-b{0%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}14%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}20%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}34%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}40%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}54%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}60%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}74%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}77%{transform:translate3d(-41cqw,0,-30cqw) rotateY(62deg);filter:brightness(0.15) saturate(0.6);opacity:0}77.01%{transform:translate3d(41cqw,0,-30cqw) rotateY(-62deg);filter:brightness(0.15) saturate(0.6);opacity:0}80%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}94%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}100%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}}
@keyframes wall-coverflow-c{0%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}14%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}20%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}34%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}40%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}54%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}60%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}74%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}80%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}94%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}97%{transform:translate3d(-41cqw,0,-30cqw) rotateY(62deg);filter:brightness(0.15) saturate(0.6);opacity:0}97.01%{transform:translate3d(41cqw,0,-30cqw) rotateY(-62deg);filter:brightness(0.15) saturate(0.6);opacity:0}100%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}}
@keyframes wall-coverflow-d{0%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}14%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}20%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}34%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}37%{transform:translate3d(-41cqw,0,-30cqw) rotateY(62deg);filter:brightness(0.15) saturate(0.6);opacity:0}37.01%{transform:translate3d(41cqw,0,-30cqw) rotateY(-62deg);filter:brightness(0.15) saturate(0.6);opacity:0}40%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}54%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}60%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}74%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}80%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}94%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}100%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}}
@keyframes wall-coverflow-e{0%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}14%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}17%{transform:translate3d(-41cqw,0,-30cqw) rotateY(62deg);filter:brightness(0.15) saturate(0.6);opacity:0}17.01%{transform:translate3d(41cqw,0,-30cqw) rotateY(-62deg);filter:brightness(0.15) saturate(0.6);opacity:0}20%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}34%{transform:translate3d(32cqw,0,-20cqw) rotateY(-56deg);filter:brightness(0.28) saturate(0.7);opacity:1}40%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}54%{transform:translate3d(19cqw,0,-8cqw) rotateY(-48deg);filter:brightness(0.5) saturate(0.8);opacity:1}60%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}74%{transform:translate3d(0cqw,0,6cqw) rotateY(0deg);filter:brightness(1.06) saturate(1);opacity:1}80%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}94%{transform:translate3d(-19cqw,0,-8cqw) rotateY(48deg);filter:brightness(0.5) saturate(0.8);opacity:1}100%{transform:translate3d(-32cqw,0,-20cqw) rotateY(56deg);filter:brightness(0.28) saturate(0.7);opacity:1}}
.v-wall-coverflow .cf-foot{position:absolute;left:0;right:0;bottom:5.4cqw;text-align:center;font-size:1.3cqw;color:color-mix(in srgb,var(--ink) 72%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-wall-coverflow .cf-head{top:8cqh;left:7cqw;right:7cqw}
  .v-wall-coverflow .cf-eyebrow{font-size:5.4cqw}
  .v-wall-coverflow .cf-title{margin-top:2.4cqw;font-size:9cqw;line-height:1.05}
  .v-wall-coverflow .cf-scene{transform:scale(1.8);transform-origin:50% 50%}
  .v-wall-coverflow .cf-track{top:calc(50% - 1cqw)}
  .v-wall-coverflow .cf-spot{left:-30cqw;right:-30cqw;top:30cqh;height:120cqw}
  .v-wall-coverflow .cf-floor{top:calc(50% + 24cqw);height:40cqw}
  .v-wall-coverflow .cf-foot{left:7cqw;right:7cqw;bottom:9cqh;font-size:5.6cqw;line-height:1.2}
  .v-wall-coverflow .cf-dots{bottom:5cqh;transform:translateX(-50%) scale(3);transform-origin:50% 100%}
  .v-wall-coverflow .cf-foot{font-size:6cqw;left:10cqw;right:10cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-coverflow .cf-head{top:6.5cqw}
  .v-wall-coverflow .cf-eyebrow{font-size:2cqw}
  .v-wall-coverflow .cf-title{margin-top:1cqw;font-size:4.8cqw}
  .v-wall-coverflow .cf-scene{transform:scale(1.55);transform-origin:50% 50%}
  .v-wall-coverflow .cf-track{top:calc(50% - 1cqw)}
  .v-wall-coverflow .cf-floor{top:68cqw}
  .v-wall-coverflow .cf-foot{bottom:8cqw;font-size:2.4cqw}
  .v-wall-coverflow .cf-dots{bottom:4.4cqw;transform:translateX(-50%) scale(1.8);transform-origin:50% 100%}
}
`,
};

export const wallShuffle: SceneSpec = {
  id: "wall-shuffle",
  slug: "mg-wall-shuffle",
  name: "Shuffled Card Deck",
  kind: "scene",
  job: "gallery",
  language: "product-ui",
  mechanic: "deck-shuffle-to-back",
  energy: "default",
  settle: 3,
  colors: {ink: "#FFFFFF", accent: "#2D4CF6", secondary: "#C9D4FF", paper: "#2D4CF6"},
  fonts: {display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["deck","shuffle","cards"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen Studio", maxChars: 22, role: "kicker" },
    { key: "title", label: "Headline", default: "One prompt.", maxChars: 16, role: "headline" },
    { key: "title2", label: "Headline accent", default: "Every format.", maxChars: 16, role: "headline" },
    { key: "prompt", label: "Prompt", default: "Summarize Q3 for the board", maxChars: 32, role: "label" },
  ],
  html: `<div class="sh-grid"></div>
<div class="sh-left">
  <div class="sh-eyebrow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="sh-h"><span data-21st-slot="title">{{title}}</span> <span class="sh-h2" data-21st-slot="title2">{{title2}}</span></div>
  <div class="sh-prompt"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span data-21st-slot="prompt">{{prompt}}</span><b><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></b></div>
  <div class="sh-tabs"><i></i><span>Brief</span><span>Report</span><span>Moodboard</span></div>
</div>
<div class="sh-stack">
  <div class="sh-card sh-c">
    <div class="sh-top"><span class="sh-ic" style="--c:#ff5f93"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z" fill="currentColor"/></svg></span>Spring campaign<em>Moodboard</em></div>
    <div class="sh-mood">
      <i style="--g:radial-gradient(circle at 70% 32%,#fff3d6 0 14%,transparent 15%),linear-gradient(180deg,#ffb38a,#f0607a 70%,#5f6164)"></i>
      <i style="--g:radial-gradient(70% 60% at 30% 30%,#a8f0dc,transparent 70%),linear-gradient(135deg,#2a6f7d,#0f2c3d)"></i>
      <i style="--g:radial-gradient(circle at 50% 115%,#ffd36b 0 46%,transparent 47%),linear-gradient(180deg,#ffe0cf,#f7a8b0)"></i>
      <i style="--g:linear-gradient(160deg,#303135,#65676a 60%,#b9bbbf)"></i>
    </div>
    <div class="sh-pal"><i style="--c:#f0607a"></i><i style="--c:#ffb38a"></i><i style="--c:#ffd36b"></i><i style="--c:#2a6f7d"></i><i style="--c:#303135"></i></div>
    <div class="sh-foot"><svg style="width:1cqw;height:1cqw;color:var(--accent)" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span>4 images, generated in 4.1s</span></div>
  </div>
  <div class="sh-card sh-b">
    <div class="sh-top"><span class="sh-ic" style="--c:#1f9d5c"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" opacity=".55"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" opacity=".55"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor"/></svg></span>Q3 growth report<em>Board</em></div>
    <div class="sh-big"><b>$2.4M</b><em>+38% QoQ</em></div>
    <div class="sh-lbl">Net new ARR, quarter to date</div>
    <div class="sh-chart"><div style="--b:30%;--a:18%"><i></i><i></i><span>Jan</span></div><div style="--b:34%;--a:22%"><i></i><i></i><span>Feb</span></div><div style="--b:32%;--a:26%"><i></i><i></i><span>Mar</span></div><div style="--b:38%;--a:30%"><i></i><i></i><span>Apr</span></div><div style="--b:36%;--a:36%"><i></i><i></i><span>May</span></div><div style="--b:40%;--a:42%"><i></i><i></i><span>Jun</span></div><div style="--b:42%;--a:50%"><i></i><i></i><span>Jul</span></div><div class="hi" style="--b:44%;--a:58%"><i></i><i></i><span>Aug</span></div></div>
    <div class="sh-legend"><span><i style="--c:var(--accent)"></i>Self-serve</span><span><i style="--c:color-mix(in srgb,var(--accent) 25%,#fff)"></i>Enterprise</span></div>
    <div class="sh-foot"><svg style="width:1cqw;height:1cqw;color:var(--accent)" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 13.9 10.1 22 12 13.9 13.9 12 22 10.1 13.9 2 12 10.1 10.1Z" fill="currentColor"/></svg><span>Self-serve drove 62% of new ARR</span></div>
  </div>
  <div class="sh-card sh-a">
    <div class="sh-top"><span class="sh-ic" style="--c:var(--accent)"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.4" fill="currentColor"/><path d="M12 2.6v2.8M12 18.6v2.8M2.6 12h2.8M18.6 12h2.8M5.4 5.4l2 2M16.6 16.6l2 2M5.4 18.6l2-2M16.6 7.4l2-2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg></span>Weekly brief<em>Oct 7</em></div>
    <div class="sh-title">Leadership update, week 41</div>
    <i class="sh-ln" style="--w:96%"></i><i class="sh-ln" style="--w:88%"></i><i class="sh-ln" style="--w:64%"></i>
    <div class="sh-list">
      <div><i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i>Revenue up 38% quarter over quarter</div>
      <div><i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i>Agents beta now with 2,000 teams</div>
      <div><i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></i>Churn at 1.8%, lowest on record</div>
      <div><i class="o"></i>Hiring: three roles still open</div>
    </div>
    <div class="sh-foot"><span class="sh-avs"><i style="--c:#ff9f6b"></i><i style="--c:#5ad1c0"></i><i style="--c:#6287f6"></i></span><span>Shared to #leadership</span></div>
  </div>
</div>`,
  css: `
.v-wall-shuffle *,.v-wall-shuffle *::before,.v-wall-shuffle *::after{box-sizing:border-box}
.v-wall-shuffle{color:var(--ink);font-family:var(--font-display)}
.v-wall-shuffle[data-backdrop="on"]{background:radial-gradient(90% 100% at 18% 0%,color-mix(in srgb,var(--paper) 78%,#fff) 0%,var(--paper) 45%,color-mix(in srgb,var(--paper) 78%,#000) 100%)}
.v-wall-shuffle[data-backdrop="off"] .sh-grid{display:none}
.v-wall-shuffle .sh-grid{position:absolute;inset:0;background-image:linear-gradient(color-mix(in srgb,var(--ink) 8%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--ink) 8%,transparent) 1px,transparent 1px);background-size:5cqw 5cqw;-webkit-mask-image:radial-gradient(60% 70% at 70% 50%,#000,transparent);mask-image:radial-gradient(60% 70% at 70% 50%,#000,transparent)}
.v-wall-shuffle .sh-left{position:absolute;left:6.5cqw;top:14.6cqw;width:42cqw}
.v-wall-shuffle .sh-eyebrow{display:inline-flex;align-items:center;gap:.5cqw;font:500 1.1cqw var(--font-body);padding:.45cqw .9cqw;border-radius:3cqw;background:color-mix(in srgb,var(--ink) 13%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 24%,transparent)}
.v-wall-shuffle .sh-eyebrow svg{width:1.1cqw;height:1.1cqw;color:var(--secondary)}
.v-wall-shuffle .sh-h{margin-top:1.3cqw;font-size:5.4cqw;font-weight:700;line-height:.98;letter-spacing:-.045em}
.v-wall-shuffle .sh-h .sh-h2{display:block;color:color-mix(in srgb,var(--secondary) 72%,var(--ink))}
.v-wall-shuffle .sh-prompt{margin-top:2cqw;width:34cqw;display:flex;align-items:center;gap:.8cqw;padding:.55cqw .55cqw .55cqw 1.1cqw;border-radius:1.2cqw;background:#fff;color:#1b2347;font:500 1.2cqw var(--font-body);box-shadow:0 1.2cqw 3cqw rgba(10,20,90,.35)}
.v-wall-shuffle .sh-prompt>svg{width:1.3cqw;height:1.3cqw;flex:none;color:var(--accent)}
.v-wall-shuffle .sh-prompt b{margin-left:auto;width:2.6cqw;height:2.6cqw;border-radius:.8cqw;display:grid;place-items:center;flex:none;background:var(--accent);color:#fff}
.v-wall-shuffle .sh-prompt b svg{width:1.3cqw;height:1.3cqw}
.v-wall-shuffle .sh-tabs{position:relative;margin-top:1.4cqw;display:flex;gap:.4cqw;font:500 1.05cqw var(--font-body)}
.v-wall-shuffle .sh-tabs span{position:relative;z-index:1;width:8.4cqw;text-align:center;padding:.5cqw 0;color:color-mix(in srgb,var(--ink) 85%,transparent)}
.v-wall-shuffle .sh-tabs i{position:absolute;left:0;top:0;width:8.4cqw;height:100%;border-radius:2cqw;background:color-mix(in srgb,var(--ink) 18%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 35%,transparent);animation:wall-shuffle-tab 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes wall-shuffle-tab{0%,21%{transform:translateX(0)}31%,54.4%{transform:translateX(8.8cqw)}64.3%,88%{transform:translateX(17.6cqw)}98%,100%{transform:translateX(0)}}
.v-wall-shuffle .sh-stack{position:absolute;left:57cqw;top:13.2cqw;width:25cqw;height:31cqw;animation:wall-shuffle-float 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-shuffle-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-.7cqw) rotate(.5deg)}}
.v-wall-shuffle .sh-card{position:absolute;inset:0;border-radius:1.6cqw;background:#fff;color:#141a3a;padding:1.5cqw;transform-origin:50% 75%;font-family:var(--font-body);box-shadow:0 0 0 1px rgba(10,20,90,.06),0 .5cqw 1cqw rgba(10,20,90,.12),0 2.4cqw 4.4cqw -1cqw rgba(8,16,90,.5)}
.v-wall-shuffle .sh-a{animation:wall-shuffle-a 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-shuffle .sh-b{animation:wall-shuffle-b 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-shuffle .sh-c{animation:wall-shuffle-c 6s cubic-bezier(.65,0,.35,1) infinite}
.v-wall-shuffle .sh-top{display:flex;align-items:center;gap:.6cqw;font-size:.95cqw;font-weight:600;color:#3b4266}
.v-wall-shuffle .sh-ic{width:2cqw;height:2cqw;border-radius:.6cqw;display:grid;place-items:center;background:var(--c);color:#fff;flex:none}
.v-wall-shuffle .sh-ic svg{width:1.2cqw;height:1.2cqw}
.v-wall-shuffle .sh-top em{margin-left:auto;font-style:normal;font-weight:500;font-size:.8cqw;color:#6b7194;background:#f1f3fa;padding:.2cqw .55cqw;border-radius:.4cqw}
.v-wall-shuffle .sh-title{margin-top:1.1cqw;font:700 1.85cqw/1.08 var(--font-display);letter-spacing:-.03em;color:#0f1533}
.v-wall-shuffle .sh-ln{display:block;height:.5cqw;border-radius:.3cqw;background:#e9ecf5;width:var(--w);margin-top:.6cqw}
.v-wall-shuffle .sh-list{margin-top:1cqw;display:flex;flex-direction:column;gap:.55cqw}
.v-wall-shuffle .sh-list div{display:flex;align-items:center;gap:.6cqw;font-size:.92cqw;color:#2b3150}
.v-wall-shuffle .sh-list i{width:1.25cqw;height:1.25cqw;border-radius:.4cqw;display:grid;place-items:center;background:#e3f7ec;color:#1f9d5c;flex:none}
.v-wall-shuffle .sh-list i.o{background:#f1f3fa;color:transparent;box-shadow:inset 0 0 0 1px #d8dcea}
.v-wall-shuffle .sh-list svg{width:.85cqw;height:.85cqw}
.v-wall-shuffle .sh-foot{position:absolute;left:1.5cqw;right:1.5cqw;bottom:1.3cqw;display:flex;align-items:center;gap:.5cqw;font-size:.82cqw;color:#6b7194;padding-top:.9cqw;border-top:1px solid #eef0f6}
.v-wall-shuffle .sh-avs{display:flex}
.v-wall-shuffle .sh-avs i{width:1.4cqw;height:1.4cqw;border-radius:50%;background:var(--c);box-shadow:0 0 0 .15cqw #fff;margin-right:-.35cqw}
.v-wall-shuffle .sh-avs+span{margin-left:.6cqw}
.v-wall-shuffle .sh-big{margin-top:.8cqw;display:flex;align-items:baseline;gap:.7cqw}
.v-wall-shuffle .sh-big b{font:700 3.6cqw/1 var(--font-display);letter-spacing:-.05em;color:#0f1533}
.v-wall-shuffle .sh-big em{font-style:normal;font-size:.9cqw;font-weight:600;color:#127a46;background:#e3f7ec;padding:.2cqw .55cqw;border-radius:.5cqw}
.v-wall-shuffle .sh-lbl{font-size:.85cqw;color:#6b7194;margin-top:.3cqw}
.v-wall-shuffle .sh-chart{margin-top:1.2cqw;height:10.6cqw;display:flex;align-items:flex-end;gap:.7cqw;padding-bottom:1.4cqw;position:relative;background:linear-gradient(#eef0f6,#eef0f6) 0 0/100% 1px no-repeat,linear-gradient(#eef0f6,#eef0f6) 0 33%/100% 1px no-repeat,linear-gradient(#eef0f6,#eef0f6) 0 66%/100% 1px no-repeat}
.v-wall-shuffle .sh-chart>div{flex:1;display:flex;flex-direction:column;justify-content:flex-end;height:100%;position:relative}
.v-wall-shuffle .sh-chart>div i{display:block;border-radius:.3cqw .3cqw 0 0;background:color-mix(in srgb,var(--accent) 25%,#fff);height:var(--b)}
.v-wall-shuffle .sh-chart>div i+i{border-radius:0 0 .2cqw .2cqw;background:var(--accent);height:var(--a)}
.v-wall-shuffle .sh-chart>div span{position:absolute;left:0;right:0;bottom:-1.3cqw;text-align:center;font-size:.68cqw;color:#9097b5}
.v-wall-shuffle .sh-chart>div.hi i+i{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 75%,#fff),color-mix(in srgb,var(--accent) 70%,#000))}
.v-wall-shuffle .sh-legend{display:flex;gap:1cqw;font-size:.78cqw;color:#6b7194;margin-top:.6cqw}
.v-wall-shuffle .sh-legend i{display:inline-block;width:.6cqw;height:.6cqw;border-radius:.2cqw;background:var(--c);margin-right:.35cqw}
.v-wall-shuffle .sh-mood{margin-top:1cqw;display:grid;grid-template-columns:1fr 1fr;gap:.6cqw}
.v-wall-shuffle .sh-mood i{height:8.6cqw;border-radius:.8cqw;background:var(--g)}
.v-wall-shuffle .sh-pal{margin-top:.9cqw;display:flex;gap:.4cqw}
.v-wall-shuffle .sh-pal i{flex:1;height:1.6cqw;border-radius:.4cqw;background:var(--c)}

@keyframes wall-shuffle-a{0%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}19%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}19.1%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:4;animation-timing-function:cubic-bezier(.4,0,.2,1)}25%{transform:translate(22cqw,-3cqw) rotate(15deg) scale(1.02);z-index:4}25.1%{transform:translate(22cqw,-3cqw) rotate(15deg) scale(1.02);z-index:0;animation-timing-function:cubic-bezier(.3,0,.2,1)}33%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}52.3%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}52.4%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:2}54.4%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:2}64.3%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}85.7%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}85.8%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:3}88%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:3}98%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}100%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}}
@keyframes wall-shuffle-b{0%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}19%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}19.1%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:3}21%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:3}31%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}52.3%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}52.4%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:4;animation-timing-function:cubic-bezier(.4,0,.2,1)}58.3%{transform:translate(22cqw,-3cqw) rotate(15deg) scale(1.02);z-index:4}58.4%{transform:translate(22cqw,-3cqw) rotate(15deg) scale(1.02);z-index:0;animation-timing-function:cubic-bezier(.3,0,.2,1)}66.3%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}85.7%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}85.8%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:2}88%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:2}98%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}100%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}}
@keyframes wall-shuffle-c{0%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}19%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}19.1%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:2}21%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:2}31%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}52.3%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:2}52.4%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:3}54.4%{transform:translate(1.5cqw,-2.3cqw) rotate(3deg) scale(0.95);z-index:3}64.3%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}85.7%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:3}85.8%{transform:translate(0cqw,0cqw) rotate(-3deg) scale(1);z-index:4;animation-timing-function:cubic-bezier(.4,0,.2,1)}91.6%{transform:translate(22cqw,-3cqw) rotate(15deg) scale(1.02);z-index:4}91.7%{transform:translate(22cqw,-3cqw) rotate(15deg) scale(1.02);z-index:0;animation-timing-function:cubic-bezier(.3,0,.2,1)}99.7%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}100%{transform:translate(3cqw,-4.6cqw) rotate(8deg) scale(0.9);z-index:1}}

@container (max-aspect-ratio: 4/5){
  .v-wall-shuffle .sh-grid{-webkit-mask-image:radial-gradient(80% 50% at 50% 55%,#000,transparent);mask-image:radial-gradient(80% 50% at 50% 55%,#000,transparent)}
  .v-wall-shuffle .sh-left{left:8cqw;right:8cqw;top:7.5cqh;bottom:7cqh;width:auto;display:flex;flex-direction:column;align-items:flex-start}
  .v-wall-shuffle .sh-eyebrow{font-size:5.4cqw;gap:2cqw;padding:1.6cqw 3.6cqw;border-radius:10cqw}
  .v-wall-shuffle .sh-eyebrow svg{width:4.6cqw;height:4.6cqw}
  .v-wall-shuffle .sh-h{margin-top:4cqw;font-size:12cqw}
  .v-wall-shuffle .sh-tabs{order:2;margin-top:auto;margin-bottom:8cqw;scale:2.3;transform-origin:0 0}
  .v-wall-shuffle .sh-prompt{order:3;margin-top:0;width:100%;gap:2.6cqw;padding:2.4cqw 2.4cqw 2.4cqw 4cqw;border-radius:4.4cqw;font-size:5.4cqw;line-height:1.15}
  .v-wall-shuffle .sh-prompt>svg{width:5cqw;height:5cqw}
  .v-wall-shuffle .sh-prompt b{width:10cqw;height:10cqw;border-radius:3cqw}
  .v-wall-shuffle .sh-prompt b svg{width:5cqw;height:5cqw}
  .v-wall-shuffle .sh-stack{left:37.5cqw;top:calc(56cqh - 15.5cqw);scale:2.15}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-shuffle .sh-left{left:6cqw;top:50%;translate:0 -50%;width:42cqw}
  .v-wall-shuffle .sh-eyebrow{font-size:1.9cqw;gap:.8cqw;padding:.7cqw 1.4cqw}
  .v-wall-shuffle .sh-eyebrow svg{width:1.8cqw;height:1.8cqw}
  .v-wall-shuffle .sh-h{margin-top:2cqw;font-size:6.2cqw}
  .v-wall-shuffle .sh-prompt{margin-top:3cqw;width:42cqw;gap:1cqw;padding:.9cqw .9cqw .9cqw 1.6cqw;font-size:1.9cqw;line-height:1.2}
  .v-wall-shuffle .sh-prompt>svg{width:1.9cqw;height:1.9cqw}
  .v-wall-shuffle .sh-prompt b{width:3.8cqw;height:3.8cqw;border-radius:1.1cqw}
  .v-wall-shuffle .sh-prompt b svg{width:1.9cqw;height:1.9cqw}
  .v-wall-shuffle .sh-tabs{margin-top:2cqw;scale:1.5;transform-origin:0 0}
  .v-wall-shuffle .sh-stack{left:56cqw;top:calc(50cqw - 13cqw);scale:1.42}
}
`,
};

export const wallPullback: SceneSpec = {
  id: "wall-pullback",
  slug: "mg-wall-pullback",
  name: "Pullback To Wall",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "camera-pullback-reveal",
  energy: "default",
  settle: 3.1,
  colors: {ink: "#221A12", accent: "#C4583A", secondary: "#E3A948", paper: "#EFE8DC"},
  fonts: {display: "Instrument Serif", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["pullback","wall","camera"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen Spaces", maxChars: 22, role: "kicker" },
    { key: "title", label: "Headline", default: "Everything your team makes,", maxChars: 30, role: "headline" },
    { key: "accentLine", label: "Headline accent", default: "in one place.", maxChars: 20, role: "headline" },
    { key: "note", label: "Margin note", default: "yours, in context", maxChars: 20, role: "caption" },
  ],
  html: `<div class="wp-wall-mask"><div class="wp-wall">
    <div class="wp-c wp-quote" style="left:0cqw;top:-10cqw;width:11.5cqw;height:10cqw"><em>“</em><b>Every pixel earns its place.</b></div>
    <div class="wp-c wp-photo" style="left:0cqw;top:1.1cqw;width:11.5cqw;height:8.5cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fdf5e6 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#3b4f73,#3b4f73) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#3b4f73 98%,transparent 100%),linear-gradient(180deg,#c9d6e8,#8fa8c8)"></i></div>
    <div class="wp-c wp-sticky" style="left:0cqw;top:10.7cqw;width:11.5cqw;height:14.5cqw;--c:#ffd4c7"><b>ask Mara</b></div>
    <div class="wp-c wp-swatch" style="left:0cqw;top:26.3cqw;width:11.5cqw;height:12.2cqw"><div><i style="--c:#2c2d30"></i><i style="--c:#6e6f73"></i><i style="--c:#f08c78"></i><i style="--c:#f6dfb0"></i></div><b>Palette 3</b></div>
    <div class="wp-c wp-photo" style="left:0cqw;top:39.6cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff7e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#21514e 97%,transparent 100%),linear-gradient(#5fa8a0,#5fa8a0) 100% 100%/45% 40% no-repeat,#bfe0dc"></i></div>
    <div class="wp-c wp-photo wp-cap" style="left:0cqw;top:52.9cqw;width:11.5cqw;height:9.2cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff4ea 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#a2453a 97%,transparent 100%),linear-gradient(#f08c78,#f08c78) 100% 100%/45% 40% no-repeat,#f4c2b5"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-sticky" style="left:0cqw;top:63.2cqw;width:11.5cqw;height:11.5cqw;--c:#ffe7a3"><b>ask Mara</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:0cqw;top:75.8cqw;width:11.5cqw;height:13cqw"><i style="background:repeating-linear-gradient(160deg,#bfe0dc 0 1.2cqw,#5fa8a0 1.2cqw 2.4cqw)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo" style="left:0cqw;top:89.9cqw;width:11.5cqw;height:14.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fffbe9 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#9a5b1b 97%,transparent 100%),linear-gradient(#e3a948,#e3a948) 100% 100%/45% 40% no-repeat,#f6dfb0"></i></div>
    <div class="wp-c wp-swatch" style="left:12.6cqw;top:-2.5cqw;width:11.5cqw;height:8.5cqw"><div><i style="--c:#3b4f73"></i><i style="--c:#8fa8c8"></i><i style="--c:#e8d5b5"></i><i style="--c:#d9734e"></i></div><b>Palette 6</b></div>
    <div class="wp-c wp-photo" style="left:12.6cqw;top:7.1cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#f6f1e0 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#3f5e4c 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#9bb08f 60%,transparent 61%),linear-gradient(180deg,#cfdcc4,#9bb08f)"></i></div>
    <div class="wp-c wp-chart" style="left:12.6cqw;top:21.2cqw;width:11.5cqw;height:15.5cqw;--c:#8fa8c8"><b>Reach</b><u>+7%</u><div><i style="--h:73%"></i><i style="--h:27%"></i><i style="--h:83%"></i><i style="--h:77%"></i><i style="--h:62%"></i><i style="--h:65%"></i><i style="--h:77%"></i></div></div>
    <div class="wp-c wp-swatch" style="left:12.6cqw;top:37.8cqw;width:11.5cqw;height:8.5cqw"><div><i style="--c:#d9734e"></i><i style="--c:#e3a948"></i><i style="--c:#9bb08f"></i><i style="--c:#3f5e4c"></i></div><b>Palette 8</b></div>
    <div class="wp-c wp-photo" style="left:12.6cqw;top:47.4cqw;width:11.5cqw;height:10cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff7e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#21514e 97%,transparent 100%),linear-gradient(#5fa8a0,#5fa8a0) 100% 100%/45% 40% no-repeat,#bfe0dc"></i></div>
    <div class="wp-c wp-note" style="left:12.6cqw;top:58.5cqw;width:11.5cqw;height:10cqw"><b>Onboarding</b><s style="--w:84%"></s><s style="--w:76%"></s><s style="--w:84%"></s></div>
    <div class="wp-c wp-note" style="left:12.6cqw;top:69.6cqw;width:11.5cqw;height:15.5cqw"><b>Retro</b><s style="--w:88%"></s><s style="--w:92%"></s><s style="--w:76%"></s><s style="--w:60%"></s><s style="--w:88%"></s></div>
    <div class="wp-c wp-photo" style="left:12.6cqw;top:86.2cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fff1dc 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#8f3f2b,#8f3f2b) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#8f3f2b 98%,transparent 100%),linear-gradient(180deg,#f3c9a8,#d9734e)"></i></div>
    <div class="wp-c wp-photo wp-cap" style="left:25.2cqw;top:-7.5cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff7e6 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#21514e 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#5fa8a0 60%,transparent 61%),linear-gradient(180deg,#bfe0dc,#5fa8a0)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo wp-cap" style="left:25.2cqw;top:5.8cqw;width:11.5cqw;height:9.2cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff4ea 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#a2453a 97%,transparent 100%),linear-gradient(#f08c78,#f08c78) 100% 100%/45% 40% no-repeat,#f4c2b5"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo" style="left:25.2cqw;top:16.1cqw;width:11.5cqw;height:8.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff6ea 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#484a4d 97%,transparent 100%),linear-gradient(#999b9e,#999b9e) 100% 100%/45% 40% no-repeat,#d5d7db"></i></div>
    <div class="wp-c wp-photo" style="left:25.2cqw;top:25.7cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#f6f1e0 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#3f5e4c 97%,transparent 100%),linear-gradient(#9bb08f,#9bb08f) 100% 100%/45% 40% no-repeat,#cfdcc4"></i></div>
    <div class="wp-c wp-sticky" style="left:25.2cqw;top:39.8cqw;width:11.5cqw;height:8.5cqw;--c:#ffe7a3"><b>ship it friday!</b></div>
    <div class="wp-c wp-chart" style="left:25.2cqw;top:49.4cqw;width:11.5cqw;height:9.2cqw;--c:#d9734e"><b>Signups</b><u>+18%</u><div><i style="--h:27%"></i><i style="--h:42%"></i><i style="--h:42%"></i><i style="--h:62%"></i><i style="--h:85%"></i><i style="--h:62%"></i><i style="--h:97%"></i></div></div>
    <div class="wp-c wp-photo wp-cap" style="left:25.2cqw;top:59.7cqw;width:11.5cqw;height:11.5cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fdf5e6 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#3b4f73,#3b4f73) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#3b4f73 98%,transparent 100%),linear-gradient(180deg,#c9d6e8,#8fa8c8)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo" style="left:25.2cqw;top:72.3cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fff6ea 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#484a4d,#484a4d) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#484a4d 98%,transparent 100%),linear-gradient(180deg,#d5d7db,#999b9e)"></i></div>
    <div class="wp-c wp-photo wp-cap" style="left:25.2cqw;top:86.4cqw;width:11.5cqw;height:9.2cqw"><i style="background:repeating-linear-gradient(160deg,#d5d7db 0 1.2cqw,#999b9e 1.2cqw 2.4cqw)"></i><b></b><s style="--w:50%"></s></div>
    <div class="wp-c wp-photo" style="left:37.8cqw;top:-6cqw;width:11.5cqw;height:9.2cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fffbe9 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#9a5b1b 97%,transparent 100%),linear-gradient(#e3a948,#e3a948) 100% 100%/45% 40% no-repeat,#f6dfb0"></i></div>
    <div class="wp-c wp-swatch" style="left:37.8cqw;top:4.3cqw;width:11.5cqw;height:14.5cqw"><div><i style="--c:#2c2d30"></i><i style="--c:#6e6f73"></i><i style="--c:#f08c78"></i><i style="--c:#f6dfb0"></i></div><b>Palette 8</b></div>
    <div class="wp-c wp-swatch" style="left:37.8cqw;top:19.9cqw;width:11.5cqw;height:9.2cqw"><div><i style="--c:#d9734e"></i><i style="--c:#e3a948"></i><i style="--c:#9bb08f"></i><i style="--c:#3f5e4c"></i></div><b>Palette 9</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:37.8cqw;top:30.2cqw;width:11.5cqw;height:10cqw"><i style="background:repeating-linear-gradient(160deg,#dbdde1 0 1.2cqw,#999b9e 1.2cqw 2.4cqw)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo wp-cap" style="left:37.8cqw;top:41.3cqw;width:11.5cqw;height:15.5cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff6ea 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#484a4d 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#999b9e 60%,transparent 61%),linear-gradient(180deg,#d5d7db,#999b9e)"></i><b></b><s style="--w:50%"></s></div>
    <div class="wp-c wp-photo" style="left:37.8cqw;top:57.9cqw;width:11.5cqw;height:11.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fdf5e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#3b4f73 97%,transparent 100%),linear-gradient(#8fa8c8,#8fa8c8) 100% 100%/45% 40% no-repeat,#c9d6e8"></i></div>
    <div class="wp-c wp-photo" style="left:37.8cqw;top:70.5cqw;width:11.5cqw;height:15.5cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff4ea 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#a2453a 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#f08c78 60%,transparent 61%),linear-gradient(180deg,#f4c2b5,#f08c78)"></i></div>
    <div class="wp-c wp-photo" style="left:37.8cqw;top:87.1cqw;width:11.5cqw;height:15.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fdf5e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#3b4f73 97%,transparent 100%),linear-gradient(#8fa8c8,#8fa8c8) 100% 100%/45% 40% no-repeat,#c9d6e8"></i></div>
    <div class="wp-c wp-note" style="left:50.4cqw;top:-4cqw;width:11.5cqw;height:11.5cqw"><b>Brand words</b><s style="--w:60%"></s><s style="--w:88%"></s><s style="--w:60%"></s><s style="--w:84%"></s><s style="--w:88%"></s></div>
    <div class="wp-c wp-swatch" style="left:50.4cqw;top:8.6cqw;width:11.5cqw;height:11.5cqw"><div><i style="--c:#d9734e"></i><i style="--c:#e3a948"></i><i style="--c:#9bb08f"></i><i style="--c:#3f5e4c"></i></div><b>Palette 9</b></div>
    <div class="wp-c wp-chart" style="left:50.4cqw;top:21.2cqw;width:11.5cqw;height:9.2cqw;--c:#8fa8c8"><b>Retention</b><u>+42%</u><div><i style="--h:73%"></i><i style="--h:57%"></i><i style="--h:32%"></i><i style="--h:29%"></i><i style="--h:78%"></i><i style="--h:74%"></i><i style="--h:69%"></i></div></div>
    <div class="wp-c wp-note" style="left:50.4cqw;top:31.5cqw;width:11.5cqw;height:13cqw"><b>Retro</b><s style="--w:60%"></s><s style="--w:88%"></s><s style="--w:60%"></s><s style="--w:92%"></s><s style="--w:92%"></s></div>
    <div class="wp-c wp-photo" style="left:50.4cqw;top:45.6cqw;width:11.5cqw;height:10cqw"><i style="background:repeating-linear-gradient(160deg,#c9d6e8 0 1.2cqw,#8fa8c8 1.2cqw 2.4cqw)"></i></div>
    <div class="wp-c wp-photo" style="left:50.4cqw;top:56.7cqw;width:11.5cqw;height:10cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff1dc 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#8f3f2b 97%,transparent 100%),linear-gradient(#d9734e,#d9734e) 100% 100%/45% 40% no-repeat,#f3c9a8"></i></div>
    <div class="wp-c wp-note" style="left:50.4cqw;top:67.8cqw;width:11.5cqw;height:10cqw"><b>Pricing ideas</b><s style="--w:76%"></s><s style="--w:76%"></s><s style="--w:76%"></s></div>
    <div class="wp-c wp-photo" style="left:50.4cqw;top:78.9cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fffbe9 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#9a5b1b,#9a5b1b) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#9a5b1b 98%,transparent 100%),linear-gradient(180deg,#f6dfb0,#e3a948)"></i></div>
    <div class="wp-c wp-photo" style="left:50.4cqw;top:92.2cqw;width:11.5cqw;height:8.5cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fdf5e6 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#3b4f73 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#8fa8c8 60%,transparent 61%),linear-gradient(180deg,#c9d6e8,#8fa8c8)"></i></div>
    <div class="wp-c wp-swatch" style="left:63cqw;top:-6cqw;width:11.5cqw;height:14.5cqw"><div><i style="--c:#3b4f73"></i><i style="--c:#8fa8c8"></i><i style="--c:#e8d5b5"></i><i style="--c:#d9734e"></i></div><b>Palette 6</b></div>
    <div class="wp-c wp-swatch" style="left:63cqw;top:9.6cqw;width:11.5cqw;height:14.5cqw"><div><i style="--c:#3b4f73"></i><i style="--c:#8fa8c8"></i><i style="--c:#e8d5b5"></i><i style="--c:#d9734e"></i></div><b>Palette 3</b></div>
    <div class="wp-c wp-quote" style="left:63cqw;top:25.2cqw;width:11.5cqw;height:9.2cqw"><em>“</em><b>Warm, not loud.</b></div>
    <div class="wp-c wp-swatch" style="left:63cqw;top:35.5cqw;width:11.5cqw;height:10cqw"><div><i style="--c:#3b4f73"></i><i style="--c:#8fa8c8"></i><i style="--c:#e8d5b5"></i><i style="--c:#d9734e"></i></div><b>Palette 6</b></div>
    <div class="wp-c wp-photo" style="left:63cqw;top:46.6cqw;width:11.5cqw;height:9.2cqw"><i style="background:repeating-linear-gradient(160deg,#d5d7db 0 1.2cqw,#999b9e 1.2cqw 2.4cqw)"></i></div>
    <div class="wp-c wp-chart" style="left:63cqw;top:56.9cqw;width:11.5cqw;height:14.5cqw;--c:#8fa8c8"><b>Signups</b><u>+26%</u><div><i style="--h:34%"></i><i style="--h:41%"></i><i style="--h:47%"></i><i style="--h:52%"></i><i style="--h:87%"></i><i style="--h:32%"></i><i style="--h:43%"></i></div></div>
    <div class="wp-c wp-sticky" style="left:63cqw;top:72.5cqw;width:11.5cqw;height:14.5cqw;--c:#ffe7a3"><b>ship it friday!</b></div>
    <div class="wp-c wp-photo" style="left:63cqw;top:88.1cqw;width:11.5cqw;height:15.5cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fff1dc 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#8f3f2b,#8f3f2b) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#8f3f2b 98%,transparent 100%),linear-gradient(180deg,#f3c9a8,#d9734e)"></i></div>
    <div class="wp-c wp-swatch" style="left:75.6cqw;top:-5.6cqw;width:11.5cqw;height:12cqw"><div><i style="--c:#d9734e"></i><i style="--c:#e3a948"></i><i style="--c:#9bb08f"></i><i style="--c:#3f5e4c"></i></div><b>Palette 9</b></div>
    <div class="wp-c wp-photo" style="left:75.6cqw;top:7.5cqw;width:11.5cqw;height:11.3cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fff4ea 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#a2453a,#a2453a) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#a2453a 98%,transparent 100%),linear-gradient(180deg,#f4c2b5,#f08c78)"></i></div>
    <div class="wp-c wp-note" style="left:75.6cqw;top:19.9cqw;width:11.5cqw;height:12cqw"><b>Interview notes</b><s style="--w:76%"></s><s style="--w:92%"></s><s style="--w:84%"></s><s style="--w:84%"></s><s style="--w:84%"></s></div>
    <div class="wp-c wp-hero" style="left:75.6cqw;top:33cqw;width:11.5cqw;height:14cqw">
      <div class="wp-hero-img"><span class="wp-pin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6 4 4H6l4-4zM12 13v8" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>Pinned</span></div>
      <div class="wp-hero-cap"><b>Spring '27 campaign</b><span>Moodboard, 48 items</span>
        <div class="wp-hero-row"><span class="wp-hero-avs"><i style="--c:#d9734e"></i><i style="--c:#3f5e4c"></i><i style="--c:#8fa8c8"></i></span><u>Updated today</u></div></div>
    </div>
    <div class="wp-c wp-quote" style="left:75.6cqw;top:48.1cqw;width:11.5cqw;height:13cqw"><em>“</em><b>Warm, not loud.</b></div>
    <div class="wp-c wp-sticky" style="left:75.6cqw;top:62.2cqw;width:11.5cqw;height:14.5cqw;--c:#ffd4c7"><b>love this one</b></div>
    <div class="wp-c wp-quote" style="left:75.6cqw;top:77.8cqw;width:11.5cqw;height:11.5cqw"><em>“</em><b>Make it feel like morning.</b></div>
    <div class="wp-c wp-quote" style="left:75.6cqw;top:90.4cqw;width:11.5cqw;height:10cqw"><em>“</em><b>Make it feel like morning.</b></div>
    <div class="wp-c wp-note" style="left:88.2cqw;top:-6cqw;width:11.5cqw;height:10cqw"><b>Launch copy</b><s style="--w:84%"></s><s style="--w:60%"></s><s style="--w:88%"></s></div>
    <div class="wp-c wp-swatch" style="left:88.2cqw;top:5.1cqw;width:11.5cqw;height:15.5cqw"><div><i style="--c:#3b4f73"></i><i style="--c:#8fa8c8"></i><i style="--c:#e8d5b5"></i><i style="--c:#d9734e"></i></div><b>Palette 5</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:88.2cqw;top:21.7cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff6ea 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#484a4d 97%,transparent 100%),linear-gradient(#999b9e,#999b9e) 100% 100%/45% 40% no-repeat,#d5d7db"></i><b></b><s style="--w:50%"></s></div>
    <div class="wp-c wp-note" style="left:88.2cqw;top:35.8cqw;width:11.5cqw;height:9.2cqw"><b>Pricing ideas</b><s style="--w:92%"></s><s style="--w:60%"></s><s style="--w:60%"></s></div>
    <div class="wp-c wp-swatch" style="left:88.2cqw;top:46.1cqw;width:11.5cqw;height:11.5cqw"><div><i style="--c:#d9734e"></i><i style="--c:#e3a948"></i><i style="--c:#9bb08f"></i><i style="--c:#3f5e4c"></i></div><b>Palette 4</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:88.2cqw;top:58.7cqw;width:11.5cqw;height:10cqw"><i style="background:repeating-linear-gradient(160deg,#f4c2b5 0 1.2cqw,#f08c78 1.2cqw 2.4cqw)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo" style="left:88.2cqw;top:69.8cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff1dc 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#8f3f2b 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#d9734e 60%,transparent 61%),linear-gradient(180deg,#f3c9a8,#d9734e)"></i></div>
    <div class="wp-c wp-photo" style="left:88.2cqw;top:83.1cqw;width:11.5cqw;height:11.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff2e8 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#4f5154 97%,transparent 100%),linear-gradient(#999b9e,#999b9e) 100% 100%/45% 40% no-repeat,#dbdde1"></i></div>
    <div class="wp-c wp-sticky" style="left:88.2cqw;top:95.7cqw;width:11.5cqw;height:15.5cqw;--c:#dbe3ff"><b>more contrast?</b></div>
    <div class="wp-c wp-chart" style="left:100.8cqw;top:-7.5cqw;width:11.5cqw;height:8.5cqw;--c:#d9734e"><b>Signups</b><u>+18%</u><div><i style="--h:76%"></i><i style="--h:93%"></i><i style="--h:73%"></i><i style="--h:73%"></i><i style="--h:27%"></i><i style="--h:47%"></i><i style="--h:97%"></i></div></div>
    <div class="wp-c wp-chart" style="left:100.8cqw;top:2.1cqw;width:11.5cqw;height:12.2cqw;--c:#3f5e4c"><b>Reach</b><u>+26%</u><div><i style="--h:43%"></i><i style="--h:38%"></i><i style="--h:67%"></i><i style="--h:75%"></i><i style="--h:43%"></i><i style="--h:77%"></i><i style="--h:63%"></i></div></div>
    <div class="wp-c wp-sticky" style="left:100.8cqw;top:15.4cqw;width:11.5cqw;height:12.2cqw;--c:#dbe3ff"><b>v2 feels calmer</b></div>
    <div class="wp-c wp-sticky" style="left:100.8cqw;top:28.7cqw;width:11.5cqw;height:8.5cqw;--c:#d6efd8"><b>ship it friday!</b></div>
    <div class="wp-c wp-quote" style="left:100.8cqw;top:38.3cqw;width:11.5cqw;height:11.5cqw"><em>“</em><b>Warm, not loud.</b></div>
    <div class="wp-c wp-photo" style="left:100.8cqw;top:50.9cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff1dc 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#8f3f2b 97%,transparent 100%),linear-gradient(#d9734e,#d9734e) 100% 100%/45% 40% no-repeat,#f3c9a8"></i></div>
    <div class="wp-c wp-chart" style="left:100.8cqw;top:65cqw;width:11.5cqw;height:8.5cqw;--c:#e3a948"><b>Signups</b><u>+7%</u><div><i style="--h:47%"></i><i style="--h:39%"></i><i style="--h:27%"></i><i style="--h:54%"></i><i style="--h:71%"></i><i style="--h:79%"></i><i style="--h:56%"></i></div></div>
    <div class="wp-c wp-photo" style="left:100.8cqw;top:74.6cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff2e8 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#4f5154 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#999b9e 60%,transparent 61%),linear-gradient(180deg,#dbdde1,#999b9e)"></i></div>
    <div class="wp-c wp-swatch" style="left:100.8cqw;top:88.7cqw;width:11.5cqw;height:8.5cqw"><div><i style="--c:#2c2d30"></i><i style="--c:#6e6f73"></i><i style="--c:#f08c78"></i><i style="--c:#f6dfb0"></i></div><b>Palette 7</b></div>
    <div class="wp-c wp-sticky" style="left:113.4cqw;top:-6cqw;width:11.5cqw;height:15.5cqw;--c:#d6efd8"><b>use for OOH</b></div>
    <div class="wp-c wp-note" style="left:113.4cqw;top:10.6cqw;width:11.5cqw;height:10cqw"><b>Tone of voice</b><s style="--w:88%"></s><s style="--w:76%"></s><s style="--w:60%"></s></div>
    <div class="wp-c wp-quote" style="left:113.4cqw;top:21.7cqw;width:11.5cqw;height:9.2cqw"><em>“</em><b>Make it feel like morning.</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:113.4cqw;top:32cqw;width:11.5cqw;height:8.5cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#f6f1e0 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#3f5e4c 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#9bb08f 60%,transparent 61%),linear-gradient(180deg,#cfdcc4,#9bb08f)"></i><b></b><s style="--w:70%"></s></div>
    <div class="wp-c wp-photo wp-cap" style="left:113.4cqw;top:41.6cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fdf5e6 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#3b4f73,#3b4f73) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#3b4f73 98%,transparent 100%),linear-gradient(180deg,#c9d6e8,#8fa8c8)"></i><b></b><s style="--w:50%"></s></div>
    <div class="wp-c wp-photo" style="left:113.4cqw;top:54.9cqw;width:11.5cqw;height:15.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fffbe9 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#9a5b1b 97%,transparent 100%),linear-gradient(#e3a948,#e3a948) 100% 100%/45% 40% no-repeat,#f6dfb0"></i></div>
    <div class="wp-c wp-quote" style="left:113.4cqw;top:71.5cqw;width:11.5cqw;height:13cqw"><em>“</em><b>Warm, not loud.</b></div>
    <div class="wp-c wp-chart" style="left:113.4cqw;top:85.6cqw;width:11.5cqw;height:8.5cqw;--c:#d9734e"><b>Retention</b><u>+26%</u><div><i style="--h:89%"></i><i style="--h:29%"></i><i style="--h:45%"></i><i style="--h:29%"></i><i style="--h:83%"></i><i style="--h:94%"></i><i style="--h:75%"></i></div></div>
    <div class="wp-c wp-photo wp-cap" style="left:113.4cqw;top:95.2cqw;width:11.5cqw;height:10cqw"><i style="background:repeating-linear-gradient(160deg,#f4c2b5 0 1.2cqw,#f08c78 1.2cqw 2.4cqw)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-note" style="left:126cqw;top:-10cqw;width:11.5cqw;height:15.5cqw"><b>Interview notes</b><s style="--w:92%"></s><s style="--w:76%"></s><s style="--w:60%"></s><s style="--w:84%"></s><s style="--w:92%"></s></div>
    <div class="wp-c wp-photo" style="left:126cqw;top:6.6cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff7e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#21514e 97%,transparent 100%),linear-gradient(#5fa8a0,#5fa8a0) 100% 100%/45% 40% no-repeat,#bfe0dc"></i></div>
    <div class="wp-c wp-photo wp-cap" style="left:126cqw;top:20.7cqw;width:11.5cqw;height:15.5cqw"><i style="background:radial-gradient(circle 3.4cqw at 50% 52%,#fffbe9 92%,transparent 100%) 0 0/100% 100% no-repeat,linear-gradient(#9a5b1b,#9a5b1b) 50% 100%/58% 48% no-repeat,radial-gradient(29% 22% at 50% 52%,#9a5b1b 98%,transparent 100%),linear-gradient(180deg,#f6dfb0,#e3a948)"></i><b></b><s style="--w:70%"></s></div>
    <div class="wp-c wp-photo" style="left:126cqw;top:37.3cqw;width:11.5cqw;height:14.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff6ea 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#484a4d 97%,transparent 100%),linear-gradient(#999b9e,#999b9e) 100% 100%/45% 40% no-repeat,#d5d7db"></i></div>
    <div class="wp-c wp-photo" style="left:126cqw;top:52.9cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff2e8 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#4f5154 97%,transparent 100%),linear-gradient(#999b9e,#999b9e) 100% 100%/45% 40% no-repeat,#dbdde1"></i></div>
    <div class="wp-c wp-chart" style="left:126cqw;top:67cqw;width:11.5cqw;height:10cqw;--c:#8fa8c8"><b>Retention</b><u>+26%</u><div><i style="--h:59%"></i><i style="--h:48%"></i><i style="--h:59%"></i><i style="--h:53%"></i><i style="--h:52%"></i><i style="--h:55%"></i><i style="--h:25%"></i></div></div>
    <div class="wp-c wp-photo wp-cap" style="left:126cqw;top:78.1cqw;width:11.5cqw;height:10cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fdf5e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#3b4f73 97%,transparent 100%),linear-gradient(#8fa8c8,#8fa8c8) 100% 100%/45% 40% no-repeat,#c9d6e8"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-quote" style="left:126cqw;top:89.2cqw;width:11.5cqw;height:11.5cqw"><em>“</em><b>Make it feel like morning.</b></div>
    <div class="wp-c wp-sticky" style="left:138.6cqw;top:-6cqw;width:11.5cqw;height:13cqw;--c:#d6efd8"><b>love this one</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:138.6cqw;top:8.1cqw;width:11.5cqw;height:14.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff1dc 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#8f3f2b 97%,transparent 100%),linear-gradient(#d9734e,#d9734e) 100% 100%/45% 40% no-repeat,#f3c9a8"></i><b></b><s style="--w:70%"></s></div>
    <div class="wp-c wp-note" style="left:138.6cqw;top:23.7cqw;width:11.5cqw;height:10cqw"><b>Interview notes</b><s style="--w:76%"></s><s style="--w:92%"></s><s style="--w:84%"></s></div>
    <div class="wp-c wp-photo wp-cap" style="left:138.6cqw;top:34.8cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff1dc 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#8f3f2b 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#d9734e 60%,transparent 61%),linear-gradient(180deg,#f3c9a8,#d9734e)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-swatch" style="left:138.6cqw;top:48.1cqw;width:11.5cqw;height:11.5cqw"><div><i style="--c:#3b4f73"></i><i style="--c:#8fa8c8"></i><i style="--c:#e8d5b5"></i><i style="--c:#d9734e"></i></div><b>Palette 9</b></div>
    <div class="wp-c wp-note" style="left:138.6cqw;top:60.7cqw;width:11.5cqw;height:8.5cqw"><b>Field notes</b><s style="--w:60%"></s><s style="--w:92%"></s><s style="--w:92%"></s></div>
    <div class="wp-c wp-note" style="left:138.6cqw;top:70.3cqw;width:11.5cqw;height:15.5cqw"><b>Tone of voice</b><s style="--w:76%"></s><s style="--w:60%"></s><s style="--w:60%"></s><s style="--w:88%"></s><s style="--w:92%"></s></div>
    <div class="wp-c wp-note" style="left:138.6cqw;top:86.9cqw;width:11.5cqw;height:9.2cqw"><b>Pricing ideas</b><s style="--w:60%"></s><s style="--w:60%"></s><s style="--w:92%"></s></div>
    <div class="wp-c wp-photo wp-cap" style="left:151.2cqw;top:-2.5cqw;width:11.5cqw;height:11.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fdf5e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#3b4f73 97%,transparent 100%),linear-gradient(#8fa8c8,#8fa8c8) 100% 100%/45% 40% no-repeat,#c9d6e8"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-quote" style="left:151.2cqw;top:10.1cqw;width:11.5cqw;height:12.2cqw"><em>“</em><b>Every pixel earns its place.</b></div>
    <div class="wp-c wp-photo wp-cap" style="left:151.2cqw;top:23.4cqw;width:11.5cqw;height:10cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff2e8 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#4f5154 97%,transparent 100%),linear-gradient(#999b9e,#999b9e) 100% 100%/45% 40% no-repeat,#dbdde1"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo" style="left:151.2cqw;top:34.5cqw;width:11.5cqw;height:13cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fff4ea 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#a2453a 97%,transparent 100%),linear-gradient(#f08c78,#f08c78) 100% 100%/45% 40% no-repeat,#f4c2b5"></i></div>
    <div class="wp-c wp-photo" style="left:151.2cqw;top:48.6cqw;width:11.5cqw;height:14.5cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff6ea 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#484a4d 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#999b9e 60%,transparent 61%),linear-gradient(180deg,#d5d7db,#999b9e)"></i></div>
    <div class="wp-c wp-chart" style="left:151.2cqw;top:64.2cqw;width:11.5cqw;height:12.2cqw;--c:#e3a948"><b>Signups</b><u>+26%</u><div><i style="--h:53%"></i><i style="--h:50%"></i><i style="--h:79%"></i><i style="--h:39%"></i><i style="--h:94%"></i><i style="--h:36%"></i><i style="--h:82%"></i></div></div>
    <div class="wp-c wp-photo wp-cap" style="left:151.2cqw;top:77.5cqw;width:11.5cqw;height:12.2cqw"><i style="background:radial-gradient(circle 2cqw at 66% 36%,#fff6ea 92%,transparent 100%),radial-gradient(130% 60% at 25% 105%,#484a4d 58%,transparent 59%),radial-gradient(120% 55% at 85% 108%,#999b9e 60%,transparent 61%),linear-gradient(180deg,#d5d7db,#999b9e)"></i><b></b><s style="--w:60%"></s></div>
    <div class="wp-c wp-photo" style="left:151.2cqw;top:90.8cqw;width:11.5cqw;height:14.5cqw"><i style="background:radial-gradient(circle 3cqw at 64% 38%,#fdf5e6 97%,transparent 100%),radial-gradient(circle 4.2cqw at 30% 100%,#3b4f73 97%,transparent 100%),linear-gradient(#8fa8c8,#8fa8c8) 100% 100%/45% 40% no-repeat,#c9d6e8"></i></div>
</div>
</div>
<div class="wp-vig"></div>
<div class="wp-scrim"></div>
<div class="wp-note2"><svg viewBox="0 0 60 50" aria-hidden="true"><path d="M58 6C40 4 18 10 8 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M3 30 8 42 18 36" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="note">{{note}}</span></div>
<div class="wp-copy"><div class="wp-kick" data-21st-slot="kicker">{{kicker}}</div><div class="wp-h"><span data-21st-slot="title">{{title}}</span> <span class="wp-acc" data-21st-slot="accentLine">{{accentLine}}</span></div></div>
<div class="wp-grain"></div>`,
  css: `
.v-wall-pullback *,.v-wall-pullback *::before,.v-wall-pullback *::after{box-sizing:border-box}
.v-wall-pullback{color:var(--ink);font-family:var(--font-body)}
.v-wall-pullback[data-backdrop="on"]{background:var(--paper)}
.v-wall-pullback[data-backdrop="off"] .wp-grain,.v-wall-pullback[data-backdrop="off"] .wp-vig{display:none}
.v-wall-pullback[data-backdrop="off"] .wp-wall-mask{-webkit-mask-image:radial-gradient(50% 50% at 50% 50%,#000 62%,transparent 100%);mask-image:radial-gradient(50% 50% at 50% 50%,#000 62%,transparent 100%)}
.v-wall-pullback[data-backdrop="off"] .wp-scrim{-webkit-mask-image:linear-gradient(90deg,transparent 5%,#000 28%,#000 72%,transparent 95%);mask-image:linear-gradient(90deg,transparent 5%,#000 28%,#000 72%,transparent 95%)}
.v-wall-pullback .wp-wall-mask{position:absolute;inset:0}
.v-wall-pullback .wp-wall{position:absolute;left:-31.35cqw;top:-11.88cqw;width:162.7cqw;height:100cqw;transform-origin:81.35cqw 40cqw;animation:wall-pullback-cam 6s linear infinite}
@keyframes wall-pullback-cam{0%{transform:scale(4.1) rotate(-2.5deg)}7%{transform:scale(4.04) rotate(-2.4deg)}10.9%{transform:scale(3.980) rotate(-2.38deg)}14.8%{transform:scale(3.660) rotate(-2.26deg)}18.7%{transform:scale(3.062) rotate(-2.01deg)}22.6%{transform:scale(2.357) rotate(-1.64deg)}26.5%{transform:scale(1.729) rotate(-1.2deg)}30.4%{transform:scale(1.268) rotate(-0.76deg)}34.3%{transform:scale(0.976) rotate(-0.39deg)}38.2%{transform:scale(0.816) rotate(-0.14deg)}42.1%{transform:scale(0.751) rotate(-0.02deg)}46%{transform:scale(0.740) rotate(0deg)}82%{transform:scale(0.7) rotate(0deg)}83.8%{transform:scale(0.711) rotate(-0.02deg)}85.6%{transform:scale(0.775) rotate(-0.14deg)}87.4%{transform:scale(0.934) rotate(-0.41deg)}89.2%{transform:scale(1.227) rotate(-0.79deg)}91%{transform:scale(1.694) rotate(-1.25deg)}92.8%{transform:scale(2.339) rotate(-1.71deg)}94.6%{transform:scale(3.073) rotate(-2.09deg)}96.4%{transform:scale(3.701) rotate(-2.36deg)}98.2%{transform:scale(4.038) rotate(-2.48deg)}100%{transform:scale(4.100) rotate(-2.5deg)}}
.v-wall-pullback .wp-c{position:absolute;border-radius:.8cqw;overflow:hidden;background:#fffdf8;box-shadow:0 0 0 1px rgba(60,40,20,.06),0 .25cqw .5cqw rgba(60,40,20,.05),0 .9cqw 1.8cqw -.6cqw rgba(60,40,20,.18)}
.v-wall-pullback .wp-photo>i{position:absolute;inset:0}
.v-wall-pullback .wp-cap>i{bottom:2.6cqw}
.v-wall-pullback .wp-cap>b{position:absolute;left:.8cqw;bottom:1.45cqw;width:55%;height:.5cqw;border-radius:.3cqw;background:#3a3026}
.v-wall-pullback .wp-cap>s{position:absolute;left:.8cqw;bottom:.75cqw;width:var(--w);height:.35cqw;border-radius:.3cqw;background:#e2d8c8}
.v-wall-pullback .wp-note{padding:1cqw .9cqw}
.v-wall-pullback .wp-note b{display:block;font:400 1.15cqw/1.1 var(--font-display);color:#2a2218;margin-bottom:.55cqw}
.v-wall-pullback .wp-note s{display:block;height:.34cqw;border-radius:.2cqw;background:#e9e0d1;width:var(--w);margin-top:.45cqw}
.v-wall-pullback .wp-sticky{background:var(--c);padding:1cqw .9cqw;transform:rotate(-1.2deg)}
.v-wall-pullback .wp-sticky b{font:italic 400 1.35cqw/1.1 var(--font-display);color:#3a2e1e}
.v-wall-pullback .wp-quote{background:#2b2520;padding:.9cqw}
.v-wall-pullback .wp-quote em{display:block;font:400 2.6cqw/0.9 var(--font-display);color:var(--secondary);font-style:normal}
.v-wall-pullback .wp-quote b{display:block;margin-top:.2cqw;font:400 1.15cqw/1.15 var(--font-display);font-style:italic;color:#f4ecdf}
.v-wall-pullback .wp-chart{padding:.9cqw}
.v-wall-pullback .wp-chart b{font-size:.75cqw;font-weight:600;color:#6d604f}
.v-wall-pullback .wp-chart u{float:right;text-decoration:none;font-size:.7cqw;font-weight:600;color:#3f7a52}
.v-wall-pullback .wp-chart div{position:absolute;left:.9cqw;right:.9cqw;bottom:.9cqw;top:2.6cqw;display:flex;align-items:flex-end;gap:.3cqw}
.v-wall-pullback .wp-chart div i{flex:1;height:var(--h);border-radius:.2cqw .2cqw 0 0;background:var(--c);opacity:.85}
.v-wall-pullback .wp-chart div i:nth-child(2n){opacity:.5}
.v-wall-pullback .wp-swatch>div{position:absolute;left:0;right:0;top:0;bottom:2.2cqw;display:flex}
.v-wall-pullback .wp-swatch>div i{flex:1;background:var(--c)}
.v-wall-pullback .wp-swatch>b{position:absolute;left:.8cqw;bottom:.7cqw;font-size:.72cqw;font-weight:600;color:#5d5142}
.v-wall-pullback .wp-hero{z-index:2;animation:wall-pullback-hero 6s cubic-bezier(.2,.8,.2,1) infinite;background:#fffdf8;box-shadow:0 0 0 1px rgba(60,40,20,.08),0 .3cqw .6cqw rgba(60,40,20,.08),0 1.4cqw 2.6cqw -.6cqw rgba(60,40,20,.3)}
.v-wall-pullback .wp-hero::after{content:"";position:absolute;inset:0;border-radius:.8cqw;box-shadow:inset 0 0 0 .4cqw var(--accent);animation:wall-pullback-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-pullback-hero{0%,40%{transform:scale(1)}47%{transform:scale(1.16)}50%,80%{transform:scale(1.12)}88%,100%{transform:scale(1)}}
@keyframes wall-pullback-ring{0%,40%{opacity:0}48%,80%{opacity:1}86%,100%{opacity:0}}
.v-wall-pullback .wp-hero-img{position:absolute;left:.5cqw;right:.5cqw;top:.5cqw;height:8.3cqw;border-radius:.5cqw;overflow:hidden;background:radial-gradient(circle 1.5cqw at 64% 40%,#fff3dc 92%,transparent 100%),radial-gradient(circle 2.4cqw at 64% 40%,rgba(255,236,200,.5),transparent 100%),radial-gradient(140% 55% at 20% 108%,color-mix(in srgb,var(--accent) 50%,#000) 58%,transparent 59%),radial-gradient(120% 50% at 90% 112%,color-mix(in srgb,var(--accent) 78%,#000) 60%,transparent 61%),radial-gradient(150% 60% at 50% 125%,var(--accent) 60%,transparent 61%),linear-gradient(180deg,color-mix(in srgb,var(--secondary) 55%,#fff),color-mix(in srgb,var(--accent) 45%,var(--secondary)) 60%,color-mix(in srgb,var(--accent) 75%,var(--secondary)))}
.v-wall-pullback .wp-pin{position:absolute;left:.4cqw;top:.4cqw;display:flex;align-items:center;gap:.18cqw;font-size:.42cqw;font-weight:600;color:#3a2a1e;background:rgba(255,253,248,.92);padding:.1cqw .3cqw;border-radius:.3cqw}
.v-wall-pullback .wp-pin svg{width:.45cqw;height:.45cqw;color:var(--accent)}
.v-wall-pullback .wp-hero-cap{position:absolute;left:.7cqw;right:.7cqw;top:9.2cqw}
.v-wall-pullback .wp-hero-cap>b{display:block;font:400 1.22cqw/1.05 var(--font-display);color:#241c14;letter-spacing:-.01em}
.v-wall-pullback .wp-hero-cap>span{display:block;margin-top:.2cqw;font-size:.5cqw;color:#8a7b68}
.v-wall-pullback .wp-hero-row{display:flex;align-items:center;margin-top:.55cqw}
.v-wall-pullback .wp-hero-avs{display:flex}
.v-wall-pullback .wp-hero-avs i{width:.85cqw;height:.85cqw;border-radius:50%;background:var(--c);box-shadow:0 0 0 .1cqw #fffdf8;margin-right:-.2cqw}
.v-wall-pullback .wp-hero-row u{margin-left:auto;text-decoration:none;font-size:.45cqw;color:#8a7b68}
.v-wall-pullback .wp-vig{position:absolute;inset:0;background:radial-gradient(42% 60% at 50% 50%,transparent 60%,color-mix(in srgb,var(--paper) 85%,transparent) 100%);animation:wall-pullback-vig 6s linear infinite}
@keyframes wall-pullback-vig{0%,6%{opacity:1}24%,86%{opacity:0}100%{opacity:1}}
.v-wall-pullback .wp-grain{position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .36 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E") 0 0/14cqw 14cqw;opacity:.2;mix-blend-mode:multiply;pointer-events:none}
.v-wall-pullback .wp-scrim{position:absolute;left:0;right:0;bottom:0;height:30cqw;background:linear-gradient(0deg,color-mix(in srgb,var(--paper) 98%,transparent) 0%,color-mix(in srgb,var(--paper) 90%,transparent) 35%,transparent 100%);animation:wall-pullback-txt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-pullback .wp-copy{position:absolute;left:0;right:0;bottom:4.2cqw;text-align:center;animation:wall-pullback-txt2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-pullback .wp-kick{font:500 1.2cqw var(--font-body);color:color-mix(in srgb,var(--accent) 70%,var(--ink))}
.v-wall-pullback .wp-h{margin-top:.4cqw;font:400 4.6cqw/1 var(--font-display);letter-spacing:-.02em;color:var(--ink)}
.v-wall-pullback .wp-h .wp-acc{font-style:italic;color:var(--accent)}
.v-wall-pullback .wp-note2{position:absolute;left:54.6cqw;top:19.2cqw;font:italic 400 2cqw/1 var(--font-display);color:var(--accent);display:flex;align-items:flex-start;gap:.2cqw;white-space:nowrap;text-shadow:0 0 .5cqw var(--paper),0 0 .3cqw var(--paper),0 0 1cqw var(--paper);animation:wall-pullback-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-pullback .wp-note2 svg{width:3.6cqw;height:3cqw}
@keyframes wall-pullback-txt{0%,36%{opacity:0}46%,80%{opacity:1}86%,100%{opacity:0}}
@keyframes wall-pullback-txt2{0%,38%{opacity:0;transform:translateY(1.4cqw)}48%,80%{opacity:1;transform:none}86%,100%{opacity:0;transform:translateY(-.6cqw)}}
@keyframes wall-pullback-note{0%,44%{opacity:0;clip-path:inset(0 100% 0 0)}50%,80%{opacity:1;clip-path:inset(0 0 0 0)}85%,100%{opacity:0;clip-path:inset(0 0 0 0)}}

@container (max-aspect-ratio: 4/5){
  .v-wall-pullback .wp-wall{top:48.9cqw;scale:2.4}
  .v-wall-pullback .wp-vig{background:radial-gradient(60% 40% at 50% 50%,transparent 60%,color-mix(in srgb,var(--paper) 85%,transparent) 100%)}
  .v-wall-pullback .wp-scrim{height:70cqw}
  .v-wall-pullback .wp-copy{left:0;right:0;top:0;bottom:0}
  .v-wall-pullback .wp-kick{position:absolute;left:50%;top:8cqh;translate:-50% 0;white-space:nowrap;font-size:5.4cqw;padding:1.8cqw 4.4cqw;border-radius:10cqw;background:color-mix(in srgb,var(--paper) 94%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent),0 2cqw 5cqw rgba(40,30,20,.16)}
  .v-wall-pullback .wp-h{position:absolute;left:6cqw;right:6cqw;bottom:7cqh;font-size:10cqw;line-height:1.02}
  .v-wall-pullback .wp-acc{display:block}
  .v-wall-pullback .wp-note2{left:40cqw;top:58cqw;font-size:5.6cqw;gap:.6cqw}
  .v-wall-pullback .wp-note2 svg{width:9cqw;height:7.5cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-pullback .wp-wall{top:10cqw;scale:1.4}
  .v-wall-pullback .wp-scrim{height:44cqw}
  .v-wall-pullback .wp-copy{left:6cqw;right:6cqw;bottom:6cqw}
  .v-wall-pullback .wp-kick{font-size:2.2cqw}
  .v-wall-pullback .wp-h{margin-top:1cqw;font-size:6.4cqw;line-height:1.02}
  .v-wall-pullback .wp-acc{display:block}
  .v-wall-pullback .wp-note2{left:54cqw;top:31cqw;font-size:3cqw}
  .v-wall-pullback .wp-note2 svg{width:5.4cqw;height:4.5cqw}
}
`,
};

export const wallChangelog: SceneSpec = {
  id: "wall-changelog",
  slug: "mg-wall-changelog",
  name: "Release Notes Cascade",
  kind: "scene",
  job: "process",
  language: "product-ui",
  mechanic: "release-card-cascade",
  energy: "default",
  settle: 3,
  colors: {ink: "#E8ECF1", accent: "#46DCA0", secondary: "#A7F3D0", paper: "#0F1317"},
  fonts: {display: "Instrument Serif", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["changelog","releases","versions"],
  fields: [
    { key: "kicker", label: "URL label", default: "lumen.app/changelog", maxChars: 28, role: "kicker" },
    { key: "title", label: "Headline", default: "What's new", maxChars: 16, role: "headline" },
    { key: "titleAccent", label: "Headline accent", default: "in Lumen", maxChars: 16, role: "headline" },
    { key: "sub", label: "Subline", default: "Shipped every week. Here is the last month, from the newest.", maxChars: 64, role: "body" },
  ],
  html: `<div class="cl-left">
  <div class="cl-url"><i></i><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="cl-h"><span data-21st-slot="title">{{title}}</span><span class="cl-em" data-21st-slot="titleAccent">{{titleAccent}}</span></div>
  <div class="cl-p" data-21st-slot="sub">{{sub}}</div>
  <div class="cl-btns"><span class="cl-btn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M10 21h4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>Subscribe</span><span class="cl-btn ghost">RSS</span></div>
  <div class="cl-stats"><span><b>48</b>improvements</span><span><b>31</b>fixes</span><span><b>4</b>releases</span></div>
</div>
<div class="cl-list">
  <div class="cl-line"></div>
  <div class="cl-item cl-i1"><span class="cl-node"></span>
    <div class="cl-card" style="--c:var(--accent)">
      <div class="cl-txt"><div class="cl-top"><span class="cl-ver">v3.2.0</span>Oct 7, 2026<span class="cl-tag cl-new" style="--c:var(--accent);--b:color-mix(in srgb,var(--accent) 14%,transparent)">New</span></div>
        <div class="cl-title"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" opacity=".55"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" opacity=".55"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor"/></svg>Canvas boards</div>
        <div class="cl-desc">Drag docs, charts and images onto one infinite board.</div></div>
      <div class="cl-thumb cl-canvas"><i class="n1"></i><i class="n4"></i><i class="n3"></i><i class="n2"></i></div>
      <div class="cl-shine"></div>
    </div></div>
  <div class="cl-item cl-i2"><span class="cl-node"></span>
    <div class="cl-card" style="--c:#93c5fd">
      <div class="cl-txt"><div class="cl-top"><span class="cl-ver">v3.1.4</span>Sep 30, 2026<span class="cl-tag" style="--c:#93c5fd;--b:rgba(147,197,253,.12)">Improved</span></div>
        <div class="cl-title"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>Search is 2x faster</div>
        <div class="cl-desc">Results stream in as you type, across every workspace.</div></div>
      <div class="cl-thumb cl-spark"><b>p95 latency</b><u>62 ms</u>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><path d="M0 4 14 6 26 5 38 9 50 14 62 19 74 22 86 24 100 25" fill="none" stroke="#93c5fd" stroke-width="2" vector-effect="non-scaling-stroke"/><path d="M0 4 14 6 26 5 38 9 50 14 62 19 74 22 86 24 100 25V30H0Z" fill="rgba(147,197,253,.15)"/></svg></div>
    </div></div>
  <div class="cl-item cl-i3"><span class="cl-node"></span>
    <div class="cl-card" style="--c:#bfc1c5">
      <div class="cl-txt"><div class="cl-top"><span class="cl-ver">v3.1.0</span>Sep 23, 2026<span class="cl-tag" style="--c:#bfc1c5;--b:rgba(191,193,197,.12)">New</span></div>
        <div class="cl-title"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="4" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="9.5" cy="13" r="1.6" fill="currentColor"/><circle cx="14.5" cy="13" r="1.6" fill="currentColor"/><path d="M12 3v4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>Lumen Agents</div>
        <div class="cl-desc">Hand off busywork to agents that run in the background.</div></div>
      <div class="cl-thumb cl-agents"><div><i style="--c:linear-gradient(135deg,#bfc1c5,#6d6f73)"></i>Triage<em>done</em></div><div><i style="--c:linear-gradient(135deg,#93c5fd,#2563eb)"></i>Digest<em>done</em></div><div><i style="--c:linear-gradient(135deg,#fde68a,#f59e0b)"></i>Follow-ups<em class="w">running</em></div></div>
    </div></div>
  <div class="cl-item cl-i4"><span class="cl-node"></span>
    <div class="cl-card" style="--c:#fbbf24">
      <div class="cl-txt"><div class="cl-top"><span class="cl-ver">v3.0.9</span>Sep 16, 2026<span class="cl-tag" style="--c:#fbbf24;--b:rgba(251,191,36,.12)">Fixed</span></div>
        <div class="cl-title"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 10a7.5 7.5 0 0 1 13.2-3.6L20 9M19.5 14a7.5 7.5 0 0 1-13.2 3.6L4 15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M20 4v5h-5M4 20v-5h5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>Offline sync</div>
        <div class="cl-desc">Edits made on a plane now merge cleanly when you land.</div></div>
    </div></div>
</div>`,
  css: `
.v-wall-changelog *,.v-wall-changelog *::before,.v-wall-changelog *::after{box-sizing:border-box}
.v-wall-changelog{color:var(--ink);font-family:var(--font-body)}
.v-wall-changelog[data-backdrop="on"]{background:radial-gradient(60% 70% at 88% -5%,color-mix(in srgb,var(--accent) 14%,transparent),transparent 60%),radial-gradient(50% 60% at 0% 100%,color-mix(in srgb,var(--secondary) 10%,transparent),transparent 60%),linear-gradient(180deg,var(--paper),color-mix(in srgb,var(--paper) 75%,#000))}
.v-wall-changelog .cl-left{position:absolute;left:6cqw;top:15cqw;width:32cqw;animation:wall-changelog-left 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-changelog-left{0%,2%{opacity:0;transform:translateY(1.2cqw)}14%,86%{opacity:1;transform:none}95%,100%{opacity:0;transform:translateY(-.6cqw)}}
.v-wall-changelog .cl-url{display:flex;align-items:center;gap:.5cqw;font:500 1.1cqw var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-wall-changelog .cl-url i{width:.6cqw;height:.6cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent)}
.v-wall-changelog .cl-h{margin-top:1cqw;font-size:4.4cqw;font-weight:600;letter-spacing:-.045em;line-height:1}
.v-wall-changelog .cl-h .cl-em{display:block;font:400 4.8cqw/1 var(--font-display);font-style:italic;letter-spacing:-.02em;color:color-mix(in srgb,var(--secondary) 75%,var(--ink));margin-top:.2cqw}
.v-wall-changelog .cl-p{margin-top:1.3cqw;font-size:1.3cqw;line-height:1.4;color:color-mix(in srgb,var(--ink) 62%,transparent);width:26cqw}
.v-wall-changelog .cl-btns{margin-top:1.8cqw;display:flex;gap:.6cqw}
.v-wall-changelog .cl-btn{display:flex;align-items:center;gap:.5cqw;font-size:1.05cqw;font-weight:600;padding:.6cqw 1cqw;border-radius:.8cqw;background:var(--ink);color:var(--paper)}
.v-wall-changelog .cl-btn svg{width:1.1cqw;height:1.1cqw}
.v-wall-changelog .cl-btn.ghost{background:color-mix(in srgb,var(--ink) 7%,transparent);color:color-mix(in srgb,var(--ink) 80%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 12%,transparent)}
.v-wall-changelog .cl-stats{margin-top:2.2cqw;display:flex;gap:2cqw;font:500 .95cqw var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-wall-changelog .cl-stats b{display:block;font:600 1.7cqw var(--font-body);color:var(--ink);letter-spacing:-.02em}
.v-wall-changelog .cl-list{position:absolute;left:42cqw;right:5cqw;top:6.9cqw;animation:wall-changelog-drift 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-changelog-drift{0%,30%{transform:translateY(0)}84%,100%{transform:translateY(-1cqw)}}
.v-wall-changelog .cl-line{position:absolute;left:1.15cqw;top:1.4cqw;bottom:3cqw;width:1px;background:linear-gradient(180deg,var(--accent),color-mix(in srgb,var(--ink) 16%,transparent) 30%,color-mix(in srgb,var(--ink) 7%,transparent));transform-origin:50% 0;animation:wall-changelog-line 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes wall-changelog-line{0%,4%{transform:scaleY(0)}30%,86%{transform:scaleY(1)}96%,100%{transform:scaleY(1);opacity:0}}
.v-wall-changelog .cl-item{position:relative;padding-left:3.4cqw;margin-bottom:1.3cqw}
.v-wall-changelog .cl-node{position:absolute;left:.65cqw;top:1.25cqw;width:1cqw;height:1cqw;border-radius:50%;background:#151a20;box-shadow:inset 0 0 0 .2cqw #3b4552}
.v-wall-changelog .cl-i1 .cl-node{box-shadow:inset 0 0 0 .2cqw var(--accent),0 0 0 .35cqw color-mix(in srgb,var(--accent) 15%,transparent),0 0 1.2cqw color-mix(in srgb,var(--accent) 60%,transparent)}
.v-wall-changelog .cl-card{position:relative;display:flex;gap:1.2cqw;height:9.6cqw;padding:1.1cqw 1.3cqw;border-radius:1.1cqw;background:linear-gradient(180deg,#1b2128,#151a20);color:#e8ecf1;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08),0 1.2cqw 3cqw rgba(0,0,0,.35)}
.v-wall-changelog .cl-i1 .cl-card{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 10%,#1b2128),#161b21);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 38%,transparent),0 1.4cqw 3.4cqw rgba(0,0,0,.45),0 0 4cqw color-mix(in srgb,var(--accent) 10%,transparent)}
.v-wall-changelog .cl-txt{flex:1;min-width:0}
.v-wall-changelog .cl-top{display:flex;align-items:center;gap:.6cqw;font-size:.85cqw;color:#7c8794}
.v-wall-changelog .cl-ver{font:600 .85cqw var(--font-mono);color:#c4ccd6;padding:.15cqw .5cqw;border-radius:.4cqw;background:rgba(255,255,255,.07)}
.v-wall-changelog .cl-tag{margin-left:auto;font-size:.78cqw;font-weight:600;padding:.15cqw .55cqw;border-radius:2cqw;color:var(--c);background:var(--b)}
.v-wall-changelog .cl-title{margin-top:.75cqw;display:flex;align-items:center;gap:.6cqw;font-size:1.45cqw;font-weight:600;letter-spacing:-.025em;color:#f2f5f8}
.v-wall-changelog .cl-title svg{width:1.4cqw;height:1.4cqw;color:var(--c);flex:none}
.v-wall-changelog .cl-desc{margin-top:.4cqw;font-size:1cqw;line-height:1.4;color:#8b96a3}
.v-wall-changelog .cl-thumb{position:relative;flex:none;width:11cqw;border-radius:.7cqw;overflow:hidden;background:#141a20;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.v-wall-changelog .cl-canvas{background:radial-gradient(rgba(255,255,255,.09) .1cqw,transparent .12cqw) 0 0/1cqw 1cqw,#11161b}
.v-wall-changelog .cl-canvas i{position:absolute;border-radius:.3cqw;box-shadow:0 .3cqw .6cqw rgba(0,0,0,.4)}
.v-wall-changelog .cl-canvas i.n1{left:1cqw;top:1cqw;width:3.4cqw;height:2.8cqw;background:#ffd66b}
.v-wall-changelog .cl-canvas i.n2{left:5.6cqw;top:3.6cqw;width:4.2cqw;height:2.8cqw;background:linear-gradient(135deg,#ff8a6b,#c04b8f);animation:wall-changelog-note 6s cubic-bezier(.45,0,.55,1) infinite}
.v-wall-changelog .cl-canvas i.n3{left:1.6cqw;top:4.6cqw;width:3cqw;height:1.9cqw;background:#2b3542;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
.v-wall-changelog .cl-canvas i.n4{left:6.2cqw;top:.9cqw;width:3.6cqw;height:2.1cqw;background:#7ee0c3}
@keyframes wall-changelog-note{0%,100%{transform:translate(0,0) rotate(0deg)}50%{transform:translate(-.5cqw,-.4cqw) rotate(-3deg)}}
.v-wall-changelog .cl-spark{display:flex;flex-direction:column;justify-content:space-between;padding:.7cqw .8cqw}
.v-wall-changelog .cl-spark b{font:600 .72cqw var(--font-mono);color:#7c8794}
.v-wall-changelog .cl-spark u{text-decoration:none;font:600 1.35cqw var(--font-body);color:#93c5fd;letter-spacing:-.02em}
.v-wall-changelog .cl-spark svg{width:100%;height:2.6cqw}
.v-wall-changelog .cl-agents{display:flex;flex-direction:column;justify-content:center;gap:.5cqw;padding:.7cqw .8cqw}
.v-wall-changelog .cl-agents div{display:flex;align-items:center;gap:.45cqw;font-size:.72cqw;color:#c4ccd6}
.v-wall-changelog .cl-agents i{width:1.1cqw;height:1.1cqw;border-radius:50%;background:var(--c);flex:none}
.v-wall-changelog .cl-agents em{margin-left:auto;font-style:normal;font:500 .62cqw var(--font-mono);color:var(--accent)}
.v-wall-changelog .cl-agents em.w{color:#fbbf24}
.v-wall-changelog .cl-i1{animation:wall-changelog-i1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-changelog .cl-i2{animation:wall-changelog-i2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-changelog .cl-i3{animation:wall-changelog-i3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-changelog .cl-i4{animation:wall-changelog-i4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-changelog .cl-new{position:relative}
.v-wall-changelog .cl-new::after{content:"";position:absolute;inset:0;border-radius:2cqw;box-shadow:0 0 0 .15cqw var(--accent);animation:wall-changelog-ping 1.5s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-changelog-ping{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.5,1.9)}}
.v-wall-changelog .cl-shine{position:absolute;inset:0;border-radius:1.1cqw;overflow:hidden;pointer-events:none}
.v-wall-changelog .cl-shine::before{content:"";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(100deg,transparent,color-mix(in srgb,var(--secondary) 18%,transparent),transparent);animation:wall-changelog-shine 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-changelog-shine{0%,24%{transform:translateX(0)}40%,100%{transform:translateX(480%)}}

@keyframes wall-changelog-i1{0%,6%{opacity:0;transform:translateY(3cqw) scale(.97);filter:blur(.3cqw)}17%,84%{opacity:1;transform:none;filter:blur(0)}91%,100%{opacity:0;transform:translateY(-1.6cqw);filter:blur(.2cqw)}}
@keyframes wall-changelog-i2{0%,11%{opacity:0;transform:translateY(3cqw) scale(.97);filter:blur(.3cqw)}22%,86%{opacity:1;transform:none;filter:blur(0)}93%,100%{opacity:0;transform:translateY(-1.6cqw);filter:blur(.2cqw)}}
@keyframes wall-changelog-i3{0%,16%{opacity:0;transform:translateY(3cqw) scale(.97);filter:blur(.3cqw)}27%,88%{opacity:1;transform:none;filter:blur(0)}95%,100%{opacity:0;transform:translateY(-1.6cqw);filter:blur(.2cqw)}}
@keyframes wall-changelog-i4{0%,21%{opacity:0;transform:translateY(3cqw) scale(.97);filter:blur(.3cqw)}32%,90%{opacity:1;transform:none;filter:blur(0)}97%,100%{opacity:0;transform:translateY(-1.6cqw);filter:blur(.2cqw)}}

@container (max-aspect-ratio: 4/5){
  .v-wall-changelog .cl-left{left:8cqw;right:8cqw;top:7.5cqh;width:auto;height:84.5cqh}
  .v-wall-changelog .cl-url{font-size:5.4cqw;gap:2.4cqw}
  .v-wall-changelog .cl-url i{width:2.4cqw;height:2.4cqw}
  .v-wall-changelog .cl-h{margin-top:3cqw;font-size:12cqw}
  .v-wall-changelog .cl-h .cl-em{font-size:13cqw}
  .v-wall-changelog .cl-p{position:absolute;left:0;right:0;bottom:0;width:auto;margin:0;font-size:5.4cqw;line-height:1.3}
  .v-wall-changelog .cl-btns,.v-wall-changelog .cl-stats{display:none}
  .v-wall-changelog .cl-list{left:8cqw;right:auto;top:calc(55cqh - 33cqw);width:53cqw;scale:1.58;transform-origin:0 0}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-changelog .cl-left{left:8cqw;right:8cqw;top:6.5cqw;width:auto}
  .v-wall-changelog .cl-url{font-size:1.9cqw;gap:1cqw}
  .v-wall-changelog .cl-url i{width:1cqw;height:1cqw}
  .v-wall-changelog .cl-h{margin-top:1.6cqw;font-size:6.6cqw}
  .v-wall-changelog .cl-h .cl-em{display:inline;font-size:7cqw;margin:0 0 0 .15em}
  .v-wall-changelog .cl-p{width:auto;font-size:2.1cqw;margin-top:1.6cqw}
  .v-wall-changelog .cl-btns,.v-wall-changelog .cl-stats{display:none}
  .v-wall-changelog .cl-list{left:7cqw;right:auto;top:30cqw;width:57.3cqw;scale:1.5;transform-origin:0 0}
}
`,
};

export const wallIsoWave: SceneSpec = {
  id: "wall-iso-wave",
  slug: "mg-wall-iso-wave",
  name: "Isometric Tile Wave",
  kind: "scene",
  job: "logos",
  language: "isometric",
  mechanic: "iso-wall-light-wave",
  energy: "default",
  settle: 3.3,
  colors: {ink: "#EEF6F4", accent: "#C6FF4D", secondary: "#4DE1FF", paper: "#06080B"},
  fonts: {display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["isometric","wave","icon"],
  fields: [
    { key: "kicker", label: "Kicker", default: "lumen / blocks", maxChars: 24, role: "kicker" },
    { key: "title", label: "Headline", default: "120 blocks.", maxChars: 16, role: "headline" },
    { key: "titleAccent", label: "Headline accent", default: "One canvas.", maxChars: 16, role: "headline" },
    { key: "sub", label: "Subline", default: "Docs, charts, agents and apps, live side by side.", maxChars: 56, role: "body" },
  ],
  html: `<div class="iw-scene"><div class="iw-plane"><i class="iw-t iw-k3 iw-d6" style="--a:var(--secondary)"></i><i class="iw-t iw-k1 iw-d5" style="--a:#ff7a4d"></i><i class="iw-t iw-k3 iw-d4" style="--a:var(--accent)"></i><i class="iw-t iw-k4 iw-d3" style="--a:#ff7a4d"></i><i class="iw-t iw-k3 iw-d4" style="--a:#688fff"></i><i class="iw-t iw-k1 iw-d5" style="--a:var(--accent)"></i><i class="iw-t iw-k3 iw-d6" style="--a:#ff7a4d"></i><i class="iw-t iw-k1 iw-d5" style="--a:#ffc34d"></i><i class="iw-t iw-k1 iw-d4" style="--a:var(--secondary)"></i><i class="iw-t iw-k5 iw-d3" style="--a:#ff7a4d"></i><i class="iw-t iw-k0 iw-d2" style="--a:#ffc34d"></i><i class="iw-t iw-k3 iw-d3" style="--a:#ff7a4d"></i><i class="iw-t iw-k5 iw-d4" style="--a:#688fff"></i><i class="iw-t iw-k0 iw-d5" style="--a:var(--secondary)"></i><i class="iw-t iw-k5 iw-d4" style="--a:#ff7a4d"></i><i class="iw-t iw-k1 iw-d3" style="--a:#688fff"></i><i class="iw-t iw-k0 iw-d2" style="--a:var(--accent)"></i><i class="iw-t iw-k1 iw-d1" style="--a:#ff7a4d"></i><i class="iw-t iw-k0 iw-d2" style="--a:var(--accent)"></i><i class="iw-t iw-k2 iw-d3" style="--a:var(--secondary)"></i><i class="iw-t iw-k4 iw-d4" style="--a:#688fff"></i><i class="iw-t iw-k4 iw-d3" style="--a:#ffc34d"></i><i class="iw-t iw-k3 iw-d2" style="--a:var(--secondary)"></i><i class="iw-t iw-k2 iw-d1" style="--a:#ffc34d"></i><div class="iw-shadow"></div><div class="iw-hero"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.4" fill="currentColor"/><path d="M12 2.6v2.8M12 18.6v2.8M2.6 12h2.8M18.6 12h2.8M5.4 5.4l2 2M16.6 16.6l2 2M5.4 18.6l2-2M16.6 7.4l2-2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg></div><i class="iw-t iw-k1 iw-d1" style="--a:#ff7a4d"></i><i class="iw-t iw-k5 iw-d2" style="--a:#ffc34d"></i><i class="iw-t iw-k3 iw-d3" style="--a:var(--secondary)"></i><i class="iw-t iw-k5 iw-d4" style="--a:#95969a"></i><i class="iw-t iw-k3 iw-d3" style="--a:#ffc34d"></i><i class="iw-t iw-k0 iw-d2" style="--a:var(--secondary)"></i><i class="iw-t iw-k1 iw-d1" style="--a:#95969a"></i><i class="iw-t iw-k3 iw-d2" style="--a:var(--secondary)"></i><i class="iw-t iw-k3 iw-d3" style="--a:#95969a"></i><i class="iw-t iw-k4 iw-d4" style="--a:#ffc34d"></i><i class="iw-t iw-k0 iw-d5" style="--a:var(--secondary)"></i><i class="iw-t iw-k2 iw-d4" style="--a:#ff7a4d"></i><i class="iw-t iw-k1 iw-d3" style="--a:#ffc34d"></i><i class="iw-t iw-k5 iw-d2" style="--a:var(--secondary)"></i><i class="iw-t iw-k5 iw-d3" style="--a:#95969a"></i><i class="iw-t iw-k5 iw-d4" style="--a:var(--accent)"></i><i class="iw-t iw-k3 iw-d5" style="--a:#ff7a4d"></i><i class="iw-t iw-k4 iw-d6" style="--a:#ffc34d"></i><i class="iw-t iw-k4 iw-d5" style="--a:var(--accent)"></i><i class="iw-t iw-k1 iw-d4" style="--a:#ff7a4d"></i><i class="iw-t iw-k3 iw-d3" style="--a:var(--accent)"></i><i class="iw-t iw-k5 iw-d4" style="--a:#ff7a4d"></i><i class="iw-t iw-k5 iw-d5" style="--a:#ffc34d"></i><i class="iw-t iw-k3 iw-d6" style="--a:var(--accent)"></i></div></div>
<div class="iw-scrim"></div>
<div class="iw-copy">
  <div class="iw-url"><i></i><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="iw-h"><span data-21st-slot="title">{{title}}</span> <span class="iw-h2" data-21st-slot="titleAccent">{{titleAccent}}</span></div>
  <div class="iw-p" data-21st-slot="sub">{{sub}}</div>
  <div class="iw-tags"><span><i style="--c:var(--accent)"></i>Charts</span><span><i style="--c:var(--secondary)"></i>Docs</span><span><i style="--c:#ff7a4d"></i>Agents</span><span><i style="--c:#ffc34d"></i>Apps</span></div>
</div>`,
  css: `
.v-wall-iso-wave *,.v-wall-iso-wave *::before,.v-wall-iso-wave *::after{box-sizing:border-box}
.v-wall-iso-wave{color:var(--ink);font-family:var(--font-body)}
.v-wall-iso-wave[data-backdrop="on"]{background:radial-gradient(55% 65% at 64% 55%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 62%),radial-gradient(45% 55% at 92% 6%,color-mix(in srgb,var(--accent) 12%,transparent),transparent 60%),var(--paper)}
.v-wall-iso-wave[data-backdrop="off"] .iw-scrim{display:none}
.v-wall-iso-wave .iw-scene{position:absolute;inset:0;perspective:150cqw;perspective-origin:67% 4%}
.v-wall-iso-wave .iw-plane{position:absolute;left:39.4cqw;top:2.2cqw;width:55.6cqw;height:55.6cqw;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));grid-template-rows:repeat(7,minmax(0,1fr));gap:1.1cqw;transform-style:preserve-3d;animation:wall-iso-wave-plane 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes wall-iso-wave-plane{0%,100%{transform:rotateX(56deg) rotateZ(-43deg)}50%{transform:rotateX(56deg) rotateZ(-37deg)}}
.v-wall-iso-wave .iw-t{border-radius:1cqw;background-color:#10151b;box-shadow:inset 0 0 0 1px rgba(255,255,255,.07),0 0 0 1px rgba(0,0,0,.4)}
.v-wall-iso-wave .iw-d1{animation:wall-iso-wave-d1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-d2{animation:wall-iso-wave-d2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-d3{animation:wall-iso-wave-d3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-d4{animation:wall-iso-wave-d4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-d5{animation:wall-iso-wave-d5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-d6{animation:wall-iso-wave-d6 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-shadow{grid-row:4;grid-column:4;border-radius:1.4cqw;background:rgba(0,0,0,.75);filter:blur(1.2cqw);animation:wall-iso-wave-shadow 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-iso-wave-shadow{0%,38%{opacity:0;transform:translate(0,0) scale(.9)}48%,84%{opacity:1;transform:translate(1.6cqw,1.6cqw) scale(1.15)}94%,100%{opacity:0;transform:translate(0,0) scale(.9)}}
.v-wall-iso-wave .iw-hero{grid-row:4;grid-column:4;position:relative;border-radius:1.4cqw;display:grid;place-items:center;color:#06080b;background:radial-gradient(80% 80% at 25% 15%,rgba(255,255,255,.7),transparent 60%),linear-gradient(135deg,var(--accent),var(--secondary));box-shadow:inset 0 0 0 1px rgba(255,255,255,.5),0 0 3cqw color-mix(in srgb,var(--accent) 55%,transparent);animation:wall-iso-wave-hero 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-wall-iso-wave .iw-hero svg{width:4cqw;height:4cqw}
@keyframes wall-iso-wave-hero{0%{transform:translateZ(0) scale(1);filter:brightness(.4) saturate(.5)}5%{transform:translateZ(0) scale(1);filter:brightness(.4) saturate(.5)}10%{transform:translateZ(3cqw) scale(1.06);filter:brightness(1.15) saturate(1.1)}17%,38%{transform:translateZ(.6cqw) scale(1);filter:brightness(1) saturate(1)}48%{transform:translateZ(12cqw) scale(1.22);filter:brightness(1.08) saturate(1.05)}52%{transform:translateZ(11cqw) scale(1.2);filter:brightness(1) saturate(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}84%{transform:translateZ(10cqw) scale(1.2);filter:brightness(1) saturate(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}94%{transform:translateZ(0) scale(1);filter:brightness(1) saturate(1)}100%{transform:translateZ(0) scale(1);filter:brightness(.4) saturate(.5)}}
.v-wall-iso-wave .iw-scrim{position:absolute;inset:0;background:linear-gradient(90deg,var(--paper) 0%,color-mix(in srgb,var(--paper) 96%,transparent) 30%,color-mix(in srgb,var(--paper) 60%,transparent) 40%,transparent 54%)}
.v-wall-iso-wave .iw-copy{position:absolute;left:6cqw;top:16.5cqw;width:32cqw;animation:wall-iso-wave-copy 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes wall-iso-wave-copy{0%,12%{opacity:0;transform:translateY(1.4cqw)}26%,86%{opacity:1;transform:none}95%,100%{opacity:0;transform:translateY(-.6cqw)}}
.v-wall-iso-wave .iw-url{display:flex;align-items:center;gap:.5cqw;font:500 1.05cqw var(--font-mono);color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-wall-iso-wave .iw-url i{width:.6cqw;height:.6cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent)}
.v-wall-iso-wave .iw-h{margin-top:1.1cqw;font:600 4cqw/1.08 var(--font-display);letter-spacing:-.035em}
.v-wall-iso-wave .iw-h .iw-h2{display:block;background:linear-gradient(90deg,var(--accent),var(--secondary));-webkit-background-clip:text;background-clip:text;color:transparent}
.v-wall-iso-wave .iw-p{margin-top:1.3cqw;font-size:1.3cqw;line-height:1.4;color:color-mix(in srgb,var(--ink) 62%,transparent);width:31cqw}
.v-wall-iso-wave .iw-tags{margin-top:1.6cqw;display:flex;flex-wrap:wrap;gap:.5cqw}
.v-wall-iso-wave .iw-tags span{display:flex;align-items:center;gap:.4cqw;font-size:.95cqw;color:color-mix(in srgb,var(--ink) 82%,transparent);padding:.35cqw .7cqw;border-radius:2cqw;background:color-mix(in srgb,var(--ink) 6%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent)}
.v-wall-iso-wave .iw-tags i{width:.55cqw;height:.55cqw;border-radius:50%;background:var(--c)}

.v-wall-iso-wave .iw-k0{background:linear-gradient(rgba(255,255,255,.36),rgba(255,255,255,.36)) 1.1cqw 1.1cqw/2.4cqw 0.35cqw no-repeat,linear-gradient(var(--a),var(--a)) 1.1cqw 1.75cqw/1.4cqw 0.35cqw no-repeat,linear-gradient(color-mix(in srgb,var(--a) 42%,transparent),color-mix(in srgb,var(--a) 42%,transparent)) 1.1cqw 4.3cqw/0.62cqw 1.6cqw no-repeat,linear-gradient(color-mix(in srgb,var(--a) 42%,transparent),color-mix(in srgb,var(--a) 42%,transparent)) 2.1cqw 3.3cqw/0.62cqw 2.6cqw no-repeat,linear-gradient(color-mix(in srgb,var(--a) 42%,transparent),color-mix(in srgb,var(--a) 42%,transparent)) 3.1cqw 3.9cqw/0.62cqw 2cqw no-repeat,linear-gradient(var(--a),var(--a)) 4.1cqw 2.5cqw/0.62cqw 3.4cqw no-repeat,linear-gradient(color-mix(in srgb,var(--a) 42%,transparent),color-mix(in srgb,var(--a) 42%,transparent)) 5.1cqw 3.1cqw/0.62cqw 2.8cqw no-repeat,#10151b}
.v-wall-iso-wave .iw-k1{background:radial-gradient(circle 0.55cqw at 3.35cqw 2.05cqw,#ffffff 92%,transparent 100%),radial-gradient(circle 0.75cqw at 1.85cqw 2.05cqw,var(--a) 92%,transparent 100%),radial-gradient(circle 0.75cqw at 3.35cqw 2.05cqw,var(--a) 92%,transparent 100%),linear-gradient(var(--a),var(--a)) 1.85cqw 1.3cqw/1.5cqw 1.5cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 4cqw/4.6cqw 0.35cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 4.8cqw/3.2cqw 0.35cqw no-repeat,#10151b}
.v-wall-iso-wave .iw-k2{background:radial-gradient(circle 1.05cqw at 2.2cqw 2.2cqw,var(--a) 92%,transparent 100%),linear-gradient(rgba(255,255,255,.36),rgba(255,255,255,.36)) 3.75cqw 1.6cqw/2.2cqw 0.35cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 3.75cqw 2.4cqw/1.6cqw 0.3cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 4.4cqw/4.8cqw 0.35cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 5.2cqw/3.6cqw 0.35cqw no-repeat,#10151b}
.v-wall-iso-wave .iw-k3{background:radial-gradient(circle 1.3cqw at 3.5cqw 3.5cqw,#10151b 94%,transparent 100%),radial-gradient(circle 2.2cqw at 3.5cqw 3.5cqw,transparent 94%,#10151b 100%),conic-gradient(from 0deg at 3.5cqw 3.5cqw,var(--a) 0 68%,rgba(255,255,255,.1) 0),#10151b}
.v-wall-iso-wave .iw-k4{background:linear-gradient(var(--a),var(--a)) 1.1cqw 1.2cqw/3.2cqw 0.5cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 2.4cqw/4.8cqw 0.32cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 3.15cqw/4.2cqw 0.32cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 3.9cqw/4.6cqw 0.32cqw no-repeat,linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)) 1.1cqw 4.65cqw/2.6cqw 0.32cqw no-repeat,#10151b}
.v-wall-iso-wave .iw-k5{background:radial-gradient(circle 0.7cqw at 3.5cqw 3.5cqw,#10151b 92%,transparent 100%),radial-gradient(circle 1.9cqw at 3.5cqw 3.5cqw,var(--a) 92%,transparent 100%),#10151b}
@keyframes wall-iso-wave-d1{0%,12%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}17%{transform:translateZ(2.2cqw);filter:brightness(1.45) saturate(1.2)}25%,85%{transform:translateZ(0);filter:brightness(1) saturate(1)}93%,100%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}}
@keyframes wall-iso-wave-d2{0%,15.6%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}20.6%{transform:translateZ(2.2cqw);filter:brightness(1.45) saturate(1.2)}28.6%,86%{transform:translateZ(0);filter:brightness(1) saturate(1)}94%,100%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}}
@keyframes wall-iso-wave-d3{0%,19.2%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}24.2%{transform:translateZ(2.2cqw);filter:brightness(1.45) saturate(1.2)}32.2%,87%{transform:translateZ(0);filter:brightness(1) saturate(1)}95%,100%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}}
@keyframes wall-iso-wave-d4{0%,22.8%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}27.8%{transform:translateZ(2.2cqw);filter:brightness(1.45) saturate(1.2)}35.8%,88%{transform:translateZ(0);filter:brightness(1) saturate(1)}96%,100%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}}
@keyframes wall-iso-wave-d5{0%,26.4%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}31.4%{transform:translateZ(2.2cqw);filter:brightness(1.45) saturate(1.2)}39.4%,89%{transform:translateZ(0);filter:brightness(1) saturate(1)}97%,100%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}}
@keyframes wall-iso-wave-d6{0%,30%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}35%{transform:translateZ(2.2cqw);filter:brightness(1.45) saturate(1.2)}43%,90%{transform:translateZ(0);filter:brightness(1) saturate(1)}98%,100%{transform:translateZ(0);filter:brightness(.38) saturate(.5)}}

@container (max-aspect-ratio: 4/5){
  .v-wall-iso-wave .iw-scene{perspective-origin:50% 20%}
  .v-wall-iso-wave .iw-plane{left:19.5cqw;top:calc(53cqh - 27.8cqw);scale:1.18}
  .v-wall-iso-wave .iw-scrim{background:linear-gradient(180deg,var(--paper) 0%,color-mix(in srgb,var(--paper) 94%,transparent) 22%,transparent 36%,transparent 70%,color-mix(in srgb,var(--paper) 94%,transparent) 84%,var(--paper) 100%)}
  .v-wall-iso-wave .iw-copy{left:8cqw;right:8cqw;top:7.5cqh;bottom:7cqh;width:auto}
  .v-wall-iso-wave .iw-url{font-size:5.4cqw;gap:2.4cqw}
  .v-wall-iso-wave .iw-url i{width:2.4cqw;height:2.4cqw}
  .v-wall-iso-wave .iw-h{margin-top:3cqw;font-size:12.5cqw}
  .v-wall-iso-wave .iw-p{position:absolute;left:0;right:0;bottom:0;width:auto;margin:0;font-size:5.6cqw;line-height:1.3}
  .v-wall-iso-wave .iw-tags{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-wall-iso-wave .iw-scene{perspective-origin:60% 20%}
  .v-wall-iso-wave .iw-plane{left:31cqw;top:33cqw;scale:.92}
  .v-wall-iso-wave .iw-scrim{background:linear-gradient(160deg,var(--paper) 0%,color-mix(in srgb,var(--paper) 94%,transparent) 30%,transparent 50%)}
  .v-wall-iso-wave .iw-copy{left:7cqw;top:7cqw;width:60cqw}
  .v-wall-iso-wave .iw-url{font-size:2cqw;gap:1cqw}
  .v-wall-iso-wave .iw-url i{width:1cqw;height:1cqw}
  .v-wall-iso-wave .iw-h{margin-top:1.6cqw;font-size:7cqw}
  .v-wall-iso-wave .iw-p{font-size:2.2cqw;width:54cqw;margin-top:1.8cqw}
  .v-wall-iso-wave .iw-tags{margin-top:2cqw;gap:.9cqw}
  .v-wall-iso-wave .iw-tags span{font-size:1.6cqw;padding:.6cqw 1.1cqw;gap:.6cqw}
  .v-wall-iso-wave .iw-tags i{width:.9cqw;height:.9cqw}
}
`,
};

export const WALL_SCENES: SceneSpec[] = [wallFan, wallBento, wallOneToMany, wallMarquee, wallCoverflow, wallShuffle, wallPullback, wallChangelog, wallIsoWave];
