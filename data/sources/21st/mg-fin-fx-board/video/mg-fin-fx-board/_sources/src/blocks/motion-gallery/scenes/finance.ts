// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const LOGO = `<svg viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="var(--accent)"/><path d="M8.5 19.5a7.5 7.5 0 0 1 15 0z" fill="var(--paper)"/><rect x="7" y="21.6" width="18" height="2.4" rx="1.2" fill="var(--paper)"/></svg>`;

export const finCardReveal: SceneSpec = {
  id: "fin-card-reveal",
  slug: "mg-fin-card-reveal",
  name: "Metal Card Reveal",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "card-spin-in-with-sheen",
  energy: "default",
  settle: 3.9,
  colors: { ink: "#ECE9E2", accent: "#CFF26B", secondary: "#BEB9AC", paper: "#151619" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["fintech", "card", "launch"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "Halcy Metal · now shipping", maxChars: 28, role: "kicker" },
    { key: "headline", label: "Headline", default: "Heavier than it looks.", maxChars: 26, role: "headline" },
    { key: "line2", label: "Second line", default: "Lighter on fees.", maxChars: 22, role: "headline" },
    { key: "cta", label: "Button", default: "Reserve yours", maxChars: 18, role: "cta" },
  ],
  html: `<div class="glow"></div>
<div class="grain"></div>
<div class="copy">
  <div class="eyebrow">${LOGO}<span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="h"><span class="h1" data-21st-slot="headline">{{headline}}</span><em data-21st-slot="line2">{{line2}}</em></div>
  <div class="cta"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></div>
</div>
<div class="hold">
  <div class="shadow"></div>
  <div class="rig">
    <div class="card">
      <div class="brush"></div>
      <div class="tint"></div>
      <div class="logo"><svg viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="rgba(255,255,255,.82)"/><path d="M8.5 19.5a7.5 7.5 0 0 1 15 0z" fill="#3a3c41"/><rect x="7" y="21.6" width="18" height="2.4" rx="1.2" fill="#3a3c41"/></svg>halcy</div>
      <svg class="nfc" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 7.5a6.5 6.5 0 0 1 0 9"/><path d="M11.5 5a10 10 0 0 1 0 14"/><path d="M15 2.8a13.5 13.5 0 0 1 0 18.4"/></svg>
      <div class="chip"></div>
      <div class="num">4821 &nbsp;••••&nbsp; ••••&nbsp; 0917</div>
      <div class="name">Maya Okafor</div>
      <div class="tier">metal</div>
      <div class="sweep"></div>
    </div>
  </div>
</div>`,
  css: `
.v-fin-card-reveal{color:var(--ink);font-family:var(--font-body)}
.v-fin-card-reveal[data-backdrop="on"]{background:radial-gradient(120% 95% at 72% 42%,color-mix(in srgb,var(--paper),var(--ink) 12%) 0%,var(--paper) 48%,color-mix(in srgb,var(--paper),#000 35%) 100%)}
.v-fin-card-reveal .glow{position:absolute;left:44cqw;top:-14cqw;width:62cqw;height:62cqw;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 17%,transparent) 0%,color-mix(in srgb,var(--accent) 5%,transparent) 38%,transparent 64%);animation:fin-card-reveal-glow 6s ease-in-out infinite}
.v-fin-card-reveal .grain{position:absolute;inset:0;opacity:.35;background-image:radial-gradient(color-mix(in srgb,var(--ink) 6%,transparent) 1px,transparent 1px);background-size:.9cqw .9cqw}
.v-fin-card-reveal[data-backdrop="off"] .grain,.v-fin-card-reveal[data-backdrop="off"] .glow{display:none}
.v-fin-card-reveal .copy{position:absolute;left:7cqw;top:12.5cqw;width:40cqw}
.v-fin-card-reveal .eyebrow{display:flex;align-items:center;gap:1cqw;font-size:1.75cqw;line-height:1.2;letter-spacing:.06em;color:var(--accent);animation:fin-card-reveal-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-card-reveal .eyebrow svg{width:2.4cqw;height:2.4cqw;flex:none}
.v-fin-card-reveal .h{margin-top:2.2cqw;font-family:var(--font-display);font-size:6.1cqw;line-height:1.2;letter-spacing:-.01em;font-weight:400;animation:fin-card-reveal-t2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-card-reveal .h1,.v-fin-card-reveal .h em{display:block;padding-block:.13em;margin-block:-.13em}
.v-fin-card-reveal .h em{font-style:italic;color:var(--secondary)}
.v-fin-card-reveal .cta{display:inline-flex;align-items:center;gap:.9cqw;margin-top:3.4cqw;padding:1.1cqw 2.2cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font-size:1.6cqw;line-height:1.2;font-weight:600;box-shadow:0 .8cqw 2.4cqw rgba(0,0,0,.3);animation:fin-card-reveal-t3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-card-reveal .cta svg{width:1.6cqw;height:1.6cqw}
.v-fin-card-reveal .hold{position:absolute;left:51cqw;top:14.6cqw;width:40cqw;height:25.2cqw;transform-origin:50% 50%}
.v-fin-card-reveal .rig{position:absolute;inset:0;perspective:110cqw}
.v-fin-card-reveal .card{position:absolute;inset:0;border-radius:1.8cqw;overflow:hidden;backface-visibility:hidden;background:linear-gradient(122deg,#232428 0%,#5b5e64 21%,#2b2d31 44%,#74777d 68%,#2c2e32 88%,#4a4c51 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12),inset 0 .25cqw .3cqw rgba(255,255,255,.08),0 3.4cqw 6cqw rgba(0,0,0,.45),0 .6cqw 1.2cqw rgba(0,0,0,.4);animation:fin-card-reveal-spin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-card-reveal .brush{position:absolute;inset:0;opacity:.9;background:repeating-linear-gradient(0deg,rgba(255,255,255,.04) 0 1px,rgba(0,0,0,.05) 1px 2px,transparent 2px 3px)}
.v-fin-card-reveal .tint{position:absolute;inset:0;background:linear-gradient(122deg,var(--accent),var(--secondary));mix-blend-mode:color;opacity:.38}
.v-fin-card-reveal .sweep{position:absolute;top:-30%;bottom:-30%;left:0;width:38%;background:linear-gradient(100deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.06) 30%,rgba(255,255,255,.42) 50%,rgba(255,250,235,.1) 64%,rgba(255,255,255,0) 82%);mix-blend-mode:screen;animation:fin-card-reveal-sweep 6s cubic-bezier(.45,0,.55,1) infinite}
.v-fin-card-reveal .logo{position:absolute;left:3cqw;top:2.8cqw;display:flex;align-items:center;gap:.8cqw;font-family:var(--font-body);font-weight:700;font-size:2.3cqw;letter-spacing:-.02em;color:rgba(255,255,255,.86);text-shadow:0 -1px 0 rgba(0,0,0,.45)}
.v-fin-card-reveal .logo svg{width:2.6cqw;height:2.6cqw}
.v-fin-card-reveal .nfc{position:absolute;right:3cqw;top:2.7cqw;width:2.6cqw;height:2.6cqw;color:rgba(255,255,255,.7)}
.v-fin-card-reveal .chip{position:absolute;left:3cqw;top:9.2cqw;width:4.8cqw;height:3.7cqw;border-radius:.65cqw;background:linear-gradient(90deg,transparent 31%,rgba(84,62,22,.45) 31% 33%,transparent 33% 67%,rgba(84,62,22,.45) 67% 69%,transparent 69%),linear-gradient(0deg,transparent 47%,rgba(84,62,22,.45) 47% 53%,transparent 53%),linear-gradient(135deg,#e2cd92,#a98e50 45%,#f1dfa9 70%,#9a8044);box-shadow:inset 0 0 0 1px rgba(60,44,12,.35)}
.v-fin-card-reveal .num{position:absolute;left:3cqw;bottom:6.6cqw;font-family:var(--font-mono);font-size:1.85cqw;letter-spacing:.14em;color:rgba(255,255,255,.8);text-shadow:0 -1px 0 rgba(0,0,0,.5)}
.v-fin-card-reveal .name{position:absolute;left:3cqw;bottom:2.7cqw;font-size:1.5cqw;letter-spacing:.08em;color:rgba(255,255,255,.72)}
.v-fin-card-reveal .tier{position:absolute;right:3cqw;bottom:2.1cqw;font-family:var(--font-display);font-style:italic;font-size:2.7cqw;color:rgba(255,255,255,.78)}
.v-fin-card-reveal .shadow{position:absolute;left:5%;top:116%;width:90%;height:16%;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.6),rgba(0,0,0,0));filter:blur(.6cqw);animation:fin-card-reveal-shadow 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-fin-card-reveal .copy{position:static}
  .v-fin-card-reveal .eyebrow{position:absolute;left:8cqw;right:8cqw;top:8cqh;font-size:5.4cqw;gap:3cqw;letter-spacing:.02em}
  .v-fin-card-reveal .eyebrow svg{width:8cqw;height:8cqw}
  .v-fin-card-reveal .h{position:absolute;left:8cqw;right:8cqw;top:16cqh;margin:0;font-size:12.6cqw}
  .v-fin-card-reveal .cta{position:absolute;left:8cqw;bottom:8cqh;margin:0;font-size:5.6cqw;gap:3cqw;padding:3.4cqw 7cqw;border-radius:12cqw}
  .v-fin-card-reveal .cta svg{width:5.4cqw;height:5.4cqw}
  .v-fin-card-reveal .h{font-size:12.4cqw}
  .v-fin-card-reveal .hold{left:30cqw;top:61cqh;margin-top:-12.6cqw;transform:scale(2)}
  .v-fin-card-reveal .glow{left:-20cqw;top:40cqh;width:140cqw;height:140cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-card-reveal .copy{position:static}
  .v-fin-card-reveal .eyebrow{position:absolute;left:7cqw;right:7cqw;top:7cqw;font-size:2.8cqw;gap:1.6cqw}
  .v-fin-card-reveal .eyebrow svg{width:3.8cqw;height:3.8cqw}
  .v-fin-card-reveal .h{position:absolute;left:7cqw;right:7cqw;top:15cqw;margin:0;font-size:8cqw}
  .v-fin-card-reveal .cta{position:absolute;left:7cqw;top:auto;bottom:7cqw;margin:0;font-size:3cqw;gap:1.6cqw;padding:2cqw 4cqw;border-radius:8cqw}
  .v-fin-card-reveal .cta svg{width:3cqw;height:3cqw}
  .v-fin-card-reveal .hold{left:auto;right:9cqw;top:auto;bottom:20cqw;transform:scale(1.35);transform-origin:100% 100%}
}
@keyframes fin-card-reveal-spin{0%,6%{transform:translateY(5cqw) rotateY(-112deg) rotateX(18deg) rotateZ(-9deg);opacity:0}12%{opacity:1}36%{transform:translateY(0) rotateY(-17deg) rotateX(9deg) rotateZ(-4deg);animation-timing-function:cubic-bezier(.45,0,.55,1)}86%{transform:translateY(-.8cqw) rotateY(-7deg) rotateX(5deg) rotateZ(-3deg);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}97%{transform:translateY(-3cqw) rotateY(70deg) rotateX(5deg) rotateZ(-3deg);opacity:0}100%{transform:translateY(5cqw) rotateY(-112deg) rotateX(18deg) rotateZ(-9deg);opacity:0}}
@keyframes fin-card-reveal-sweep{0%,34%{transform:translateX(-140%) skewX(-14deg)}62%,100%{transform:translateX(300%) skewX(-14deg)}}
@keyframes fin-card-reveal-shadow{0%,6%{transform:scaleX(.2);opacity:0}36%{transform:scaleX(1);opacity:.9}86%{transform:scaleX(.94);opacity:.8}97%,100%{transform:scaleX(.3);opacity:0}}
@keyframes fin-card-reveal-glow{0%,100%{transform:translate(0,0) scale(.9);opacity:.6}50%{transform:translate(-3cqw,2cqw) scale(1.05);opacity:1}}
@keyframes fin-card-reveal-t1{0%,10%{opacity:0;transform:translateY(1.6cqw)}24%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1.2cqw)}}
@keyframes fin-card-reveal-t2{0%,14%{opacity:0;transform:translateY(3cqw);clip-path:inset(0 0 100% 0)}32%,86%{opacity:1;transform:translateY(0);clip-path:inset(-20% -5% -30% -5%)}95%,100%{opacity:0;transform:translateY(-1.2cqw);clip-path:inset(-20% -5% -30% -5%)}}
@keyframes fin-card-reveal-t3{0%,22%{opacity:0;transform:translateY(1.6cqw)}38%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1.2cqw)}}
`,
};

export const finBalanceChart: SceneSpec = {
  id: "fin-balance-chart",
  slug: "mg-fin-balance-chart",
  name: "Balance Growth Chart",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "balance-roll-and-line-draw",
  energy: "calm",
  settle: 3.4,
  colors: { ink: "#101215", accent: "#CFF26B", secondary: "#4A7A0C", paper: "#F6F2EA" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["fintech", "balance", "chart", "counter"],
  fields: [
    { key: "label", label: "Label", default: "Total balance", maxChars: 22, role: "label" },
    { key: "value", label: "Balance", default: "$48,260.14", maxChars: 11, role: "value" },
    { key: "delta", label: "Change", default: "+$2,418.60 this month", maxChars: 26, role: "caption" },
    { key: "brand", label: "Brand", default: "halcy", maxChars: 14, role: "name" },
  ],
  html: `<div class="brand">${LOGO}<b data-21st-slot="brand">{{brand}}</b><span class="acct">Everyday account</span></div>
<div class="range"><span>1W</span><span>1M</span><span class="on">6M</span><span>1Y</span></div>
<div class="label" data-21st-slot="label">{{label}}</div>
<div class="amt" data-21st-slot="value">{{value|chars}}</div>
<div class="pill"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5"/></svg><span data-21st-slot="delta">{{delta}}</span></div>
<div class="interest">
  <div class="k">Interest earned · 4.10% APY</div>
  <div class="v">$186.40<small>+$31 vs Sep</small></div>
  <div class="spark"><span style="height:38%"></span><span style="height:46%"></span><span style="height:44%"></span><span style="height:58%"></span><span style="height:66%"></span><span style="height:74%"></span><span style="height:100%"></span></div>
</div>
<div class="chart">
  <div class="grid" style="top:22%"></div>
  <div class="grid" style="top:56%"></div>
  <div class="plot">
    <svg viewBox="0 0 1000 260" preserveAspectRatio="none">
      <defs><linearGradient id="fin-balance-chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".95"/><stop offset=".7" stop-color="var(--accent)" stop-opacity=".25"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
      <path d="M0,214 C50,212 80,196 120,198 S200,214 250,190 S330,150 380,160 S470,176 520,140 S600,112 650,122 S740,96 790,78 S850,52 880,46 L880,260 L0,260 Z" fill="url(#fin-balance-chart-fill)"/>
      <path d="M0,214 C50,212 80,196 120,198 S200,214 250,190 S330,150 380,160 S470,176 520,140 S600,112 650,122 S740,96 790,78 S850,52 880,46" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
      <path d="M880,46 L1000,26" fill="none" stroke="var(--ink)" stroke-opacity=".3" stroke-width="2.4" stroke-dasharray="6 7" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
    </svg>
  </div>
  <div class="months"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div>
  <div class="tip">Today <span>▲ new high</span></div>
  <div class="dot"><b></b><i></i></div>
</div>`,
  css: `
.v-fin-balance-chart{color:var(--ink);font-family:var(--font-body)}
.v-fin-balance-chart[data-backdrop="on"]{background:linear-gradient(180deg,var(--paper) 0%,color-mix(in srgb,var(--paper),var(--ink) 4%) 100%)}
.v-fin-balance-chart .brand{position:absolute;left:6cqw;top:5cqw;display:flex;align-items:center;gap:1cqw;font-size:1.6cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 50%,transparent);animation:fin-balance-chart-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .brand svg{width:2.8cqw;height:2.8cqw;flex:none}
.v-fin-balance-chart .brand b{font-family:var(--font-display);font-size:2.3cqw;letter-spacing:-.02em;color:var(--ink);font-weight:700}
.v-fin-balance-chart .range{position:absolute;right:6cqw;top:5cqw;display:flex;gap:.4cqw;padding:.45cqw;border-radius:3cqw;background:color-mix(in srgb,var(--ink) 6%,transparent);font-size:1.35cqw;font-weight:500;animation:fin-balance-chart-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .range span{padding:.55cqw 1.3cqw;border-radius:3cqw;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-fin-balance-chart .range .on{background:var(--ink);color:var(--paper)}
.v-fin-balance-chart .label{position:absolute;left:6cqw;top:11.2cqw;font-size:1.7cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 58%,transparent);animation:fin-balance-chart-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .amt{position:absolute;left:5.6cqw;top:13.4cqw;display:flex;font-family:var(--font-display);font-size:8.4cqw;font-weight:600;letter-spacing:-.035em;line-height:1.3;height:1.3em;overflow:hidden;white-space:nowrap;font-variant-numeric:tabular-nums;animation:fin-balance-chart-amt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .c{position:relative;display:block;--delay:calc(var(--i) * .07s);animation:fin-balance-chart-roll 6s linear infinite}
.v-fin-balance-chart .c::before{content:"7\\A 3\\A 9\\A 1\\A 5\\A 8\\A 2";position:absolute;left:0;right:0;bottom:100%;white-space:pre;text-align:center;line-height:1.3}
.v-fin-balance-chart .c:nth-child(2n)::before{content:"2\\A 8\\A 4\\A 6\\A 0\\A 9\\A 3"}
.v-fin-balance-chart .c:nth-child(3n)::before{content:"5\\A 0\\A 6\\A 2\\A 9\\A 4\\A 7"}
.v-fin-balance-chart .pill{position:absolute;left:6cqw;top:24.6cqw;display:flex;align-items:center;gap:1cqw;padding:.8cqw 1.5cqw;border-radius:3cqw;background:color-mix(in srgb,var(--accent) 55%,var(--paper));color:var(--ink);font-size:1.55cqw;line-height:1.2;font-weight:600;box-shadow:0 .5cqw 1.4cqw color-mix(in srgb,var(--accent) 25%,transparent);animation:fin-balance-chart-pill 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .pill svg{width:1.4cqw;height:1.4cqw;flex:none}
.v-fin-balance-chart .interest{position:absolute;right:6cqw;top:11.4cqw;width:24cqw;padding:1.8cqw 2cqw;border-radius:1.6cqw;background:color-mix(in srgb,var(--paper),var(--ink) 4%);border:1px solid color-mix(in srgb,var(--ink) 8%,transparent);box-shadow:0 2cqw 4cqw color-mix(in srgb,var(--ink) 10%,transparent);animation:fin-balance-chart-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .interest .k{font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fin-balance-chart .interest .v{margin-top:.6cqw;font-size:3cqw;font-weight:600;letter-spacing:-.02em;white-space:nowrap}
.v-fin-balance-chart .interest .v small{font-size:.5em;color:var(--secondary);font-weight:600;margin-left:.6cqw}
.v-fin-balance-chart .spark{display:flex;align-items:flex-end;gap:.5cqw;height:3cqw;margin-top:1.2cqw}
.v-fin-balance-chart .spark span{flex:1;border-radius:.3cqw;background:color-mix(in srgb,var(--ink) 12%,transparent)}
.v-fin-balance-chart .spark span:last-child{background:var(--accent)}
.v-fin-balance-chart .chart{position:absolute;left:0;bottom:0;width:100cqw;height:26cqw}
.v-fin-balance-chart .grid{position:absolute;left:0;right:0;border-top:1px dashed color-mix(in srgb,var(--ink) 12%,transparent)}
.v-fin-balance-chart .plot{position:absolute;inset:0;animation:fin-balance-chart-draw 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-balance-chart .plot svg{position:absolute;inset:0;width:100%;height:100%}
.v-fin-balance-chart .months{position:absolute;left:0;bottom:1.6cqw;width:88%;display:flex;justify-content:space-around;font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-fin-balance-chart .dot{position:absolute;left:88%;top:17.7%;width:1.8cqw;height:1.8cqw;margin:-.9cqw 0 0 -.9cqw;animation:fin-balance-chart-dot 6s cubic-bezier(.34,1.56,.64,1) infinite}
.v-fin-balance-chart .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ink);box-shadow:0 0 0 .45cqw var(--paper)}
.v-fin-balance-chart .dot b{position:absolute;inset:0;border-radius:50%;background:color-mix(in srgb,var(--ink) 35%,transparent);animation:fin-balance-chart-ping 2s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .tip{position:absolute;right:15%;top:5%;padding:.7cqw 1.2cqw;border-radius:1cqw;background:var(--ink);color:var(--paper);font-size:1.3cqw;white-space:nowrap;animation:fin-balance-chart-tip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-balance-chart .tip span{color:var(--accent);margin-left:.6cqw}
@container (max-aspect-ratio: 4/5){
  .v-fin-balance-chart .range{display:none}
  .v-fin-balance-chart .label{left:8cqw;top:9cqh;font-size:5.6cqw}
  .v-fin-balance-chart .amt{left:7.4cqw;top:13cqh;font-size:14cqw}
  .v-fin-balance-chart .pill{left:8cqw;top:23.5cqh;font-size:5.4cqw;gap:2.4cqw;padding:2.4cqw 4.4cqw;border-radius:8cqw}
  .v-fin-balance-chart .pill svg{width:4.6cqw;height:4.6cqw}
  .v-fin-balance-chart .interest{left:8cqw;right:8cqw;top:31cqh;width:auto;padding:4cqw 5.4cqw;border-radius:5cqw}
  .v-fin-balance-chart .interest .k{font-size:3.8cqw}
  .v-fin-balance-chart .interest .v{font-size:9cqw;margin-top:1.6cqw}
  .v-fin-balance-chart .interest .v small{margin-left:2cqw}
  .v-fin-balance-chart .spark{height:7cqw;gap:1.6cqw;margin-top:2.4cqw}
  .v-fin-balance-chart .spark span{border-radius:1cqw}
  .v-fin-balance-chart .chart{bottom:14cqh;height:31cqh}
  .v-fin-balance-chart .months{bottom:-4.6cqh;width:88%;font-size:3.6cqw}
  .v-fin-balance-chart .dot{width:5cqw;height:5cqw;margin:-2.5cqw 0 0 -2.5cqw}
  .v-fin-balance-chart .dot i{box-shadow:0 0 0 1.2cqw var(--paper)}
  .v-fin-balance-chart .tip{right:16%;top:-1%;font-size:4cqw;padding:2cqw 3cqw;border-radius:3cqw}
  .v-fin-balance-chart .tip span{margin-left:1.6cqw}
  .v-fin-balance-chart .brand{left:8cqw;top:auto;bottom:4.5cqh;font-size:4.4cqw;gap:2.6cqw}
  .v-fin-balance-chart .brand svg{width:8cqw;height:8cqw}
  .v-fin-balance-chart .brand b{font-size:6.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-balance-chart .brand{left:7cqw;top:7cqw;font-size:2.6cqw;gap:1.6cqw}
  .v-fin-balance-chart .brand svg{width:4.6cqw;height:4.6cqw}
  .v-fin-balance-chart .brand b{font-size:3.8cqw}
  .v-fin-balance-chart .range{right:7cqw;top:7cqw;font-size:2.2cqw;padding:.7cqw;gap:.6cqw;border-radius:5cqw}
  .v-fin-balance-chart .range span{padding:.9cqw 2cqw;border-radius:5cqw}
  .v-fin-balance-chart .label{left:7cqw;top:17cqw;font-size:2.8cqw}
  .v-fin-balance-chart .amt{left:6.4cqw;top:20.6cqw;font-size:11.5cqw}
  .v-fin-balance-chart .pill{left:7cqw;top:37cqw;font-size:2.6cqw;gap:1.4cqw;padding:1.3cqw 2.4cqw;border-radius:5cqw}
  .v-fin-balance-chart .pill svg{width:2.4cqw;height:2.4cqw}
  .v-fin-balance-chart .interest{right:7cqw;top:33cqw;width:36cqw;padding:2.2cqw 3cqw;border-radius:2.6cqw}
  .v-fin-balance-chart .interest .k{font-size:2cqw}
  .v-fin-balance-chart .interest .v{font-size:4.6cqw}
  .v-fin-balance-chart .spark{height:3.6cqw;gap:.8cqw;margin-top:1.4cqw}
  .v-fin-balance-chart .chart{height:36cqw}
  .v-fin-balance-chart .months{font-size:2.2cqw;bottom:2.4cqw}
  .v-fin-balance-chart .dot{width:3cqw;height:3cqw;margin:-1.5cqw 0 0 -1.5cqw}
  .v-fin-balance-chart .dot i{box-shadow:0 0 0 .8cqw var(--paper)}
  .v-fin-balance-chart .tip{font-size:2.2cqw;padding:1.1cqw 1.8cqw;border-radius:1.6cqw;right:16%;top:1%}
}
@keyframes fin-balance-chart-fade{0%{opacity:0;transform:translateY(1cqw)}10%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-balance-chart-amt{0%,4%{opacity:0;transform:translateY(1.6cqw)}14%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-balance-chart-roll{0%,8%{transform:translateY(9.1em);animation-timing-function:cubic-bezier(.12,.75,.2,1)}44%,100%{transform:translateY(0)}}
@keyframes fin-balance-chart-pill{0%,40%{opacity:0;transform:translateY(1.2cqw) scale(.92)}48%,86%{opacity:1;transform:translateY(0) scale(1)}94%,100%{opacity:0;transform:translateY(0) scale(1)}}
@keyframes fin-balance-chart-card{0%,24%{opacity:0;transform:translateY(2.4cqw) scale(.96)}38%{opacity:1;transform:translateY(0) scale(1)}86%{opacity:1;transform:translateY(-.8cqw) scale(1)}94%,100%{opacity:0;transform:translateY(-1.4cqw) scale(1)}}
@keyframes fin-balance-chart-draw{0%,12%{clip-path:inset(0 100% 0 0);opacity:1}46%,86%{clip-path:inset(0 0 0 0);opacity:1}95%{clip-path:inset(0 0 0 0);opacity:0}96%,100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes fin-balance-chart-dot{0%,42%{opacity:0;transform:scale(0)}48%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(0)}}
@keyframes fin-balance-chart-ping{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.2);opacity:0}}
@keyframes fin-balance-chart-tip{0%,46%{opacity:0;transform:translateY(.8cqw)}54%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const finTxnFeed: SceneSpec = {
  id: "fin-txn-feed",
  slug: "mg-fin-txn-feed",
  name: "Live Transaction Alerts",
  kind: "scene",
  job: "product-ui",
  language: "glass",
  mechanic: "notifications-drop-and-stack",
  energy: "default",
  settle: 3.6,
  colors: { ink: "#FFFFFF", accent: "#CFF26B", secondary: "#6B4CFF", paper: "#140F28" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["fintech", "notifications", "lock-screen"],
  fields: [
    { key: "time", label: "Clock", default: "8:12", maxChars: 5, role: "value" },
    { key: "headline", label: "Headline", default: "Every cent, in", maxChars: 22, role: "headline" },
    { key: "highlight", label: "Highlighted words", default: "real time.", maxChars: 14, role: "headline" },
    { key: "cta", label: "Button", default: "Get the app", maxChars: 16, role: "cta" },
  ],
  html: `<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>
<div class="phone">
  <div class="lock">${LOGO}</div>
  <div class="date">Tuesday, October 7</div>
  <div class="time" data-21st-slot="time">{{time}}</div>
  <div class="list">
    <div class="n n1">
      <div class="ic" style="background:#FFB547"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3.5c0 1 1 1.2 1 2.2M12 3.5c0 1 1 1.2 1 2.2"/></svg></div>
      <div class="tx"><div class="cat"><span>Food &amp; drink</span><span>now</span></div><div class="row"><b>Blue Fern Café</b><b>−$4.80</b></div><div class="sub">Card •• 0917 · rounded up $0.20</div></div>
    </div>
    <div class="n n2">
      <div class="ic" style="background:#CFF26B"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11M7.5 9.5 12 14l4.5-4.5"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg></div>
      <div class="tx"><div class="cat"><span>Income</span><span>now</span></div><div class="row"><b>Northwind Labs</b><b class="in">+$4,200.00</b></div><div class="sub">Payday · 10% moved to Tokyo trip</div></div>
    </div>
    <div class="n n3">
      <div class="ic" style="background:#8FD0FF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg></div>
      <div class="tx"><div class="cat"><span>Housing</span><span>now</span></div><div class="row"><b>Theo paid you back</b><b class="in">+$975.00</b></div><div class="sub">Rent split · October</div></div>
    </div>
    <div class="n n4">
      <div class="ic" style="background:#FF9B85"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg></div>
      <div class="tx"><div class="cat"><span>Savings</span><span>now</span></div><div class="row"><b>Round-ups this week</b><b class="in">+$12.40</b></div><div class="sub">Tokyo trip · 78% of goal</div></div>
    </div>
  </div>
</div>
<div class="cap"><span class="cl" data-21st-slot="headline">{{headline}}</span> <span class="mk" data-21st-slot="highlight">{{highlight}}</span></div>
<div class="get"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></div>`,
  css: `
.v-fin-txn-feed{color:var(--ink);font-family:var(--font-body)}
.v-fin-txn-feed > *{--u:.45cqw}
.v-fin-txn-feed[data-backdrop="on"]{background:var(--paper)}
.v-fin-txn-feed[data-backdrop="off"] .blob{display:none}
.v-fin-txn-feed .blob{position:absolute;border-radius:50%;filter:blur(8cqw)}
.v-fin-txn-feed .b1{left:20cqw;top:-30cqw;width:80cqw;height:80cqw;background:radial-gradient(circle,var(--secondary) 0%,transparent 66%);animation:fin-txn-feed-b1 6s ease-in-out infinite}
.v-fin-txn-feed .b2{right:-30cqw;top:10cqw;width:70cqw;height:70cqw;background:radial-gradient(circle,color-mix(in srgb,var(--secondary),var(--accent) 50%) 0%,transparent 64%);opacity:.8;animation:fin-txn-feed-b2 6s ease-in-out infinite}
.v-fin-txn-feed .b3{left:-20cqw;top:20cqw;width:60cqw;height:60cqw;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 50%,transparent) 0%,transparent 62%);animation:fin-txn-feed-b1 6s ease-in-out infinite}
.v-fin-txn-feed .phone{position:absolute;left:52cqw;top:1.5cqw;width:calc(100*var(--u));height:calc(118*var(--u))}
.v-fin-txn-feed .lock{position:absolute;left:0;right:0;top:calc(4*var(--u));display:flex;justify-content:center;animation:fin-txn-feed-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .lock svg{width:calc(5.4*var(--u));height:calc(5.4*var(--u))}
.v-fin-txn-feed .date{position:absolute;left:0;right:0;top:calc(12*var(--u));text-align:center;font-size:calc(4*var(--u));font-weight:500;line-height:1.2;color:color-mix(in srgb,var(--ink) 78%,transparent);animation:fin-txn-feed-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .time{position:absolute;left:0;right:0;top:calc(16*var(--u));text-align:center;font-family:var(--font-display);font-size:calc(21*var(--u));font-weight:600;letter-spacing:-.04em;line-height:1.2;animation:fin-txn-feed-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .list{position:absolute;left:calc(6*var(--u));right:calc(6*var(--u));top:calc(46*var(--u));height:calc(70*var(--u))}
.v-fin-txn-feed .n{position:absolute;left:0;right:0;top:0;display:flex;gap:calc(3*var(--u));align-items:center;padding:calc(2.6*var(--u)) calc(3.4*var(--u)) calc(2.6*var(--u)) calc(2.8*var(--u));border-radius:calc(4.6*var(--u));background:color-mix(in srgb,var(--ink) 13%,transparent);border:1px solid color-mix(in srgb,var(--ink) 20%,transparent);backdrop-filter:blur(calc(3*var(--u)));box-shadow:0 calc(2*var(--u)) calc(5*var(--u)) rgba(10,6,30,.22)}
.v-fin-txn-feed .n1{animation:fin-txn-feed-n1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .n2{animation:fin-txn-feed-n2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .n3{animation:fin-txn-feed-n3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .n4{animation:fin-txn-feed-n4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .ic{flex:none;width:calc(9*var(--u));height:calc(9*var(--u));border-radius:calc(2.6*var(--u));display:grid;place-items:center;color:#140F28}
.v-fin-txn-feed .ic svg{width:calc(5*var(--u));height:calc(5*var(--u))}
.v-fin-txn-feed .tx{flex:1;min-width:0}
.v-fin-txn-feed .cat{display:flex;justify-content:space-between;font-size:calc(2.5*var(--u));color:color-mix(in srgb,var(--ink) 62%,transparent);line-height:1.2}
.v-fin-txn-feed .row{display:flex;justify-content:space-between;align-items:baseline;margin-top:calc(.5*var(--u));font-size:calc(3.6*var(--u));font-weight:600;line-height:1.25;white-space:nowrap}
.v-fin-txn-feed .row b{font-weight:600}
.v-fin-txn-feed .row .in{color:var(--accent)}
.v-fin-txn-feed .sub{margin-top:calc(.4*var(--u));font-size:calc(2.7*var(--u));color:color-mix(in srgb,var(--ink) 70%,transparent);line-height:1.2;white-space:nowrap}
.v-fin-txn-feed .cap{position:absolute;left:7cqw;width:40cqw;top:14cqw;font-family:var(--font-display);font-weight:800;font-size:5.6cqw;line-height:1.2;letter-spacing:-.03em;animation:fin-txn-feed-cap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .cl{display:inline}
.v-fin-txn-feed .mk{position:relative;display:inline-block;color:var(--paper);padding:0 .2em;margin-left:-.05em;z-index:0;white-space:nowrap}
.v-fin-txn-feed .mk::before{content:"";position:absolute;inset:.12em 0 .04em;border-radius:.18em;background:var(--accent);z-index:-1;transform-origin:left;animation:fin-txn-feed-mark 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-txn-feed .get{position:absolute;left:7cqw;top:38cqw;display:flex;align-items:center;gap:.9cqw;padding:1.2cqw 2.4cqw;border-radius:6cqw;background:var(--ink);color:var(--paper);font-size:1.7cqw;line-height:1.2;font-weight:600;animation:fin-txn-feed-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-txn-feed .get svg{width:1.7cqw;height:1.7cqw}
@container (max-aspect-ratio: 4/5){
  .v-fin-txn-feed > *{--u:1cqw}
  .v-fin-txn-feed .phone{left:0;top:2cqw}
  .v-fin-txn-feed .b1{left:-30cqw;top:-20cqw;width:110cqw;height:110cqw}
  .v-fin-txn-feed .b2{right:-40cqw;top:70cqw;width:120cqw;height:120cqw}
  .v-fin-txn-feed .b3{left:-20cqw;top:120cqw;width:90cqw;height:90cqw}
  .v-fin-txn-feed .cap{left:7cqw;width:auto;right:7cqw;top:126cqw;font-size:9cqw}
  .v-fin-txn-feed .get{left:7cqw;top:auto;bottom:7cqh;font-size:5.6cqw;gap:2.4cqw;padding:3.4cqw 6.4cqw;border-radius:10cqw}
  .v-fin-txn-feed .get svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-txn-feed > *{--u:.5cqw}
  .v-fin-txn-feed .phone{left:47cqw;top:6cqw}
  .v-fin-txn-feed .cap{left:7cqw;width:38cqw;top:28cqw;font-size:6.6cqw}
  .v-fin-txn-feed .get{left:7cqw;top:auto;bottom:9cqw;font-size:2.8cqw;gap:1.4cqw;padding:2cqw 3.8cqw}
  .v-fin-txn-feed .get svg{width:2.8cqw;height:2.8cqw}
  .v-fin-txn-feed .b1{left:-20cqw;top:-20cqw;width:90cqw;height:90cqw}
  .v-fin-txn-feed .b2{right:-30cqw;top:40cqw;width:90cqw;height:90cqw}
}
@keyframes fin-txn-feed-b1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(8cqw,6cqw) scale(1.1)}}
@keyframes fin-txn-feed-b2{0%,100%{transform:translate(0,0) scale(1.05)}50%{transform:translate(-10cqw,-8cqw) scale(.95)}}
@keyframes fin-txn-feed-top{0%{opacity:0;transform:translateY(calc(2*var(--u)))}10%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(calc(-2*var(--u)))}}
@keyframes fin-txn-feed-n1{0%,6%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}11%{opacity:1;transform:translateY(0) scale(1)}20%{transform:translateY(0) scale(1)}24%,32%{transform:translateY(calc(18*var(--u))) scale(1)}36%,44%{transform:translateY(calc(36*var(--u))) scale(1)}48%,86%{opacity:1;transform:translateY(calc(54*var(--u))) scale(1)}95%{opacity:0;transform:translateY(calc(48*var(--u))) scale(.97)}100%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}}
@keyframes fin-txn-feed-n2{0%,18%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}23%{opacity:1;transform:translateY(0) scale(1)}32%{transform:translateY(0) scale(1)}36%,44%{transform:translateY(calc(18*var(--u))) scale(1)}48%,86%{opacity:1;transform:translateY(calc(36*var(--u))) scale(1)}95%{opacity:0;transform:translateY(calc(30*var(--u))) scale(.97)}100%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}}
@keyframes fin-txn-feed-n3{0%,30%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}35%{opacity:1;transform:translateY(0) scale(1)}44%{transform:translateY(0) scale(1)}48%,86%{opacity:1;transform:translateY(calc(18*var(--u))) scale(1)}95%{opacity:0;transform:translateY(calc(12*var(--u))) scale(.97)}100%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}}
@keyframes fin-txn-feed-n4{0%,41%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}46%,86%{opacity:1;transform:translateY(0) scale(1)}95%{opacity:0;transform:translateY(calc(-6*var(--u))) scale(.97)}100%{opacity:0;transform:translateY(calc(-5*var(--u))) scale(.92)}}
@keyframes fin-txn-feed-cap{0%,10%{opacity:0;transform:translateY(4cqw)}26%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes fin-txn-feed-mark{0%,24%{transform:scaleX(0)}36%,88%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
`,
};

export const finSavingsRing: SceneSpec = {
  id: "fin-savings-ring",
  slug: "mg-fin-savings-ring",
  name: "Savings Goal Ring",
  kind: "scene",
  job: "data",
  language: "hand-drawn",
  mechanic: "goal-ring-fill-to-confetti",
  energy: "default",
  settle: 3.3,
  colors: { ink: "#2B1810", accent: "#E8492A", secondary: "#7A962A", paper: "#FFE4CC" },
  fonts: { display: "Caveat", body: "Bricolage Grotesque", mono: "Geist Mono" },
  displayRole: "fonts.accent",
  tags: ["fintech", "savings", "goal", "progress"],
  fields: [
    { key: "goal", label: "Goal name", default: "Tokyo trip", maxChars: 16, role: "label" },
    { key: "value", label: "Amount", default: "$4,000", maxChars: 7, role: "value" },
    { key: "badge", label: "Badge", default: "Goal reached · 3 weeks early", maxChars: 30, role: "caption" },
    { key: "note", label: "Hand note", default: "37 weeks of spare change", maxChars: 28, role: "caption" },
  ],
  html: `<div class="hd">${LOGO}<span>Savings goals</span></div>
<div class="sq">
  <div class="note"><span data-21st-slot="note">{{note}}</span><svg viewBox="0 0 60 50" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M48 4C44 22 32 34 10 40"/><path d="M19 32 9 40.5l12 3"/></svg></div>
  <div class="ringwrap">
    <div class="track"></div>
    <div class="half hr"><div class="disc"></div></div>
    <div class="half hl"><div class="disc"></div></div>
    <div class="startcap"></div>
    <div class="cap"><i></i></div>
    <div class="hole">
      <div class="goal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 21 4l-6.5 17-3-7.5z"/><path d="M11.5 13.5 21 4"/></svg><span data-21st-slot="goal">{{goal}}</span></div>
      <div class="num" data-21st-slot="value">{{value|chars}}</div>
      <div class="of">100% of goal</div>
    </div>
  </div>
  <div class="conf"><i style="--x:calc(-40*var(--u));--y:calc(-22*var(--u));--r:220deg;background:var(--ink)"></i><i style="--x:calc(-34*var(--u));--y:calc(-34*var(--u));--r:-160deg;background:var(--paper)"></i><i class="o" style="--x:calc(-18*var(--u));--y:calc(-42*var(--u));--r:300deg;background:var(--accent)"></i><i style="--x:calc(8*var(--u));--y:calc(-44*var(--u));--r:-240deg;background:var(--ink)"></i><i class="o" style="--x:calc(18*var(--u));--y:calc(-44*var(--u));--r:180deg;background:var(--paper)"></i><i style="--x:calc(44*var(--u));--y:calc(-14*var(--u));--r:-300deg;background:var(--accent)"></i><i style="--x:calc(44*var(--u));--y:calc(-4*var(--u));--r:260deg;background:var(--secondary)"></i><i style="--x:calc(-44*var(--u));--y:calc(-2*var(--u));--r:-200deg;background:var(--secondary)"></i><i class="o" style="--x:calc(-38*var(--u));--y:calc(14*var(--u));--r:140deg;background:var(--accent)"></i><i style="--x:calc(38*var(--u));--y:calc(16*var(--u));--r:-140deg;background:var(--ink)"></i><i style="--x:calc(-8*var(--u));--y:calc(-46*var(--u));--r:200deg;background:var(--secondary)"></i><i class="o" style="--x:calc(34*var(--u));--y:calc(-36*var(--u));--r:-220deg;background:var(--ink)"></i></div>
  <div class="pill"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg><b data-21st-slot="badge">{{badge}}</b></span></div>
</div>`,
  css: `
.v-fin-savings-ring{color:var(--ink);font-family:var(--font-body)}
.v-fin-savings-ring > *{--u:.5625cqw}
.v-fin-savings-ring[data-backdrop="on"]{background:radial-gradient(circle at 50% 42%,color-mix(in srgb,var(--paper),#fff 30%) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper),var(--accent) 28%) 100%)}
.v-fin-savings-ring .hd{position:absolute;left:4cqw;top:3.6cqw;display:flex;align-items:center;gap:1cqw;font-size:1.8cqw;font-weight:600;letter-spacing:-.02em;color:color-mix(in srgb,var(--ink) 60%,transparent);animation:fin-savings-ring-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-savings-ring .hd svg{width:2.8cqw;height:2.8cqw}
.v-fin-savings-ring .sq{position:absolute;left:calc(50cqw - calc(50*var(--u)));top:0;width:calc(100*var(--u));height:calc(100*var(--u))}
.v-fin-savings-ring .ringwrap{position:absolute;left:calc(22*var(--u));top:calc(17*var(--u));width:calc(56*var(--u));height:calc(56*var(--u));animation:fin-savings-ring-wrap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-savings-ring .track{position:absolute;inset:0;border-radius:50%;background:color-mix(in srgb,var(--ink) 10%,transparent);box-shadow:inset 0 calc(.4*var(--u)) calc(1*var(--u)) color-mix(in srgb,var(--ink) 12%,transparent)}
.v-fin-savings-ring .half{position:absolute;inset:0}
.v-fin-savings-ring .hr{clip-path:inset(0 0 0 50%)}
.v-fin-savings-ring .hl{clip-path:inset(0 49.7% 0 0)}
.v-fin-savings-ring .disc{position:absolute;inset:0;border-radius:50%}
.v-fin-savings-ring .hr .disc{background:linear-gradient(to right,var(--accent) 50%,transparent 50%);animation:fin-savings-ring-r 6s linear infinite}
.v-fin-savings-ring .hl .disc{background:linear-gradient(to left,var(--accent) 50%,transparent 50%);animation:fin-savings-ring-l 6s linear infinite}
.v-fin-savings-ring .startcap,.v-fin-savings-ring .cap i{position:absolute;left:calc(50% - calc(2.3*var(--u)));top:0;width:calc(4.6*var(--u));height:calc(4.6*var(--u));border-radius:50%;background:var(--accent)}
.v-fin-savings-ring .startcap{animation:fin-savings-ring-sc 6s linear infinite}
.v-fin-savings-ring .cap{position:absolute;inset:0;animation:fin-savings-ring-cap 6s linear infinite}
.v-fin-savings-ring .cap i{box-shadow:0 calc(.3*var(--u)) calc(.8*var(--u)) rgba(0,0,0,.25)}
.v-fin-savings-ring .hole{position:absolute;inset:calc(4.6*var(--u));border-radius:50%;background:radial-gradient(circle at 50% 30%,color-mix(in srgb,var(--paper),#fff 18%) 0%,color-mix(in srgb,var(--paper),#fff 6%) 100%);box-shadow:0 calc(1.6*var(--u)) calc(3.2*var(--u)) color-mix(in srgb,var(--ink) 18%,transparent);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.v-fin-savings-ring .goal{display:flex;align-items:center;gap:calc(1.2*var(--u));font-size:calc(3.4*var(--u));line-height:1.2;font-weight:600}
.v-fin-savings-ring .goal svg{width:calc(3.4*var(--u));height:calc(3.4*var(--u));color:var(--accent);flex:none}
.v-fin-savings-ring .num{margin-top:0;display:flex;height:1.45em;overflow:hidden;font-size:calc(9.4*var(--u));font-weight:700;letter-spacing:-.04em;line-height:1.45}
.v-fin-savings-ring .c{position:relative;display:block;--delay:calc(var(--i) * .05s);animation:fin-savings-ring-count 6s linear infinite}
.v-fin-savings-ring .c::before{content:"7\\A 3\\A 9\\A 1\\A 5\\A 8\\A 2";position:absolute;left:0;right:0;bottom:100%;white-space:pre;text-align:center;line-height:1.45}
.v-fin-savings-ring .c:nth-child(2n)::before{content:"2\\A 8\\A 4\\A 6\\A 0\\A 9\\A 3"}
.v-fin-savings-ring .of{margin-top:calc(.6*var(--u));font-size:calc(2.4*var(--u));color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fin-savings-ring .conf{position:absolute;left:calc(50*var(--u));top:calc(45*var(--u));width:0;height:0}
.v-fin-savings-ring .conf i{position:absolute;left:calc(-.7*var(--u));top:calc(-1.2*var(--u));width:calc(1.4*var(--u));height:calc(2.4*var(--u));border-radius:calc(.3*var(--u));animation:fin-savings-ring-pop 6s cubic-bezier(.15,.85,.3,1) infinite}
.v-fin-savings-ring .conf i.o{width:calc(1.5*var(--u));height:calc(1.5*var(--u));border-radius:50%}
.v-fin-savings-ring .pill{position:absolute;left:calc(-20*var(--u));right:calc(-20*var(--u));top:calc(78*var(--u));display:flex;justify-content:center;animation:fin-savings-ring-pill 6s cubic-bezier(.34,1.56,.64,1) infinite}
.v-fin-savings-ring .pill span{display:flex;align-items:center;gap:calc(1.2*var(--u));padding:calc(1.6*var(--u)) calc(3.4*var(--u));border-radius:calc(6*var(--u));background:var(--ink);color:var(--paper);font-size:calc(3.4*var(--u));line-height:1.2;font-weight:600;box-shadow:0 calc(1.2*var(--u)) calc(3*var(--u)) color-mix(in srgb,var(--ink) 25%,transparent);white-space:nowrap}
.v-fin-savings-ring .pill b{font-weight:600}
.v-fin-savings-ring .pill svg{width:calc(3*var(--u));height:calc(3*var(--u));color:var(--accent);flex:none}
.v-fin-savings-ring .note{position:absolute;left:calc(80*var(--u));top:calc(12*var(--u));width:calc(40*var(--u));font-family:var(--font-display);font-size:calc(6.4*var(--u));line-height:1.2;color:var(--ink);transform:rotate(-7deg);animation:fin-savings-ring-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-savings-ring .note span{display:block}
.v-fin-savings-ring .note svg{display:block;width:calc(12*var(--u));height:calc(10*var(--u));margin:calc(.6*var(--u)) 0 0 calc(-4*var(--u));color:var(--ink)}
@container (max-aspect-ratio: 4/5){
  .v-fin-savings-ring > *{--u:1cqw}
  .v-fin-savings-ring .hd{display:none}
  .v-fin-savings-ring .sq{left:0;top:24cqh}
  .v-fin-savings-ring .ringwrap{left:calc(9*var(--u));top:calc(2*var(--u));width:calc(82*var(--u));height:calc(82*var(--u))}
  .v-fin-savings-ring .hole{inset:calc(5.6*var(--u))}
  .v-fin-savings-ring .goal{font-size:calc(5.6*var(--u));gap:calc(2*var(--u))}
  .v-fin-savings-ring .goal svg{width:calc(5.4*var(--u));height:calc(5.4*var(--u))}
  .v-fin-savings-ring .num{font-size:calc(15*var(--u))}
  .v-fin-savings-ring .of{font-size:calc(4*var(--u))}
  .v-fin-savings-ring .startcap,.v-fin-savings-ring .cap i{left:calc(50% - calc(2.8*var(--u)));width:calc(5.6*var(--u));height:calc(5.6*var(--u))}
  .v-fin-savings-ring .conf{top:calc(43*var(--u))}
  .v-fin-savings-ring .note{left:calc(8*var(--u));top:calc(-30*var(--u));width:calc(84*var(--u));font-size:calc(11*var(--u));transform:rotate(-4deg)}
  .v-fin-savings-ring .note svg{width:calc(16*var(--u));height:calc(14*var(--u));margin:calc(1*var(--u)) 0 0 calc(62*var(--u));transform:scaleX(-1)}
  .v-fin-savings-ring .pill{left:0;right:0;top:calc(108*var(--u))}
  .v-fin-savings-ring .pill span{font-size:calc(5.4*var(--u));padding:calc(3*var(--u)) calc(5*var(--u));gap:calc(2*var(--u));border-radius:calc(10*var(--u));white-space:normal;max-width:calc(84*var(--u));text-align:center}
  .v-fin-savings-ring .pill svg{width:calc(5*var(--u));height:calc(5*var(--u))}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-savings-ring > *{--u:1cqw}
  .v-fin-savings-ring .hd{left:6cqw;top:6cqw;font-size:3cqw;gap:1.6cqw}
  .v-fin-savings-ring .hd svg{width:4.6cqw;height:4.6cqw}
  .v-fin-savings-ring .note{left:calc(70*var(--u));top:calc(8*var(--u));width:calc(27*var(--u));font-size:calc(5*var(--u))}
  .v-fin-savings-ring .note svg{width:calc(9*var(--u));height:calc(8*var(--u));margin-left:calc(-2*var(--u))}
}
@keyframes fin-savings-ring-fade{0%{opacity:0;transform:translateY(calc(1.4*var(--u)))}10%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-savings-ring-wrap{0%{opacity:0;transform:scale(.9)}8%{opacity:1;transform:scale(1)}46%{transform:scale(1);animation-timing-function:cubic-bezier(.3,0,.3,1)}49%{transform:scale(1.035)}54%,86%{opacity:1;transform:scale(1)}95%,100%{opacity:0;transform:scale(.92)}}
@keyframes fin-savings-ring-r{0%,10%{transform:rotate(0deg);animation-timing-function:cubic-bezier(.42,0,1,1)}28%,95%{transform:rotate(180deg)}96%,100%{transform:rotate(0deg)}}
@keyframes fin-savings-ring-l{0%,28%{transform:rotate(0deg);animation-timing-function:cubic-bezier(0,0,.58,1)}46%,95%{transform:rotate(180deg)}96%,100%{transform:rotate(0deg)}}
@keyframes fin-savings-ring-cap{0%,10%{transform:rotate(0deg);animation-timing-function:cubic-bezier(.42,0,1,1)}28%{transform:rotate(180deg);animation-timing-function:cubic-bezier(0,0,.58,1)}46%,95%{transform:rotate(360deg)}96%,100%{transform:rotate(0deg)}}
@keyframes fin-savings-ring-sc{0%,9%{opacity:0}10%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes fin-savings-ring-count{0%,10%{transform:translateY(10.15em);animation-timing-function:cubic-bezier(.3,.6,.4,1)}46%,100%{transform:translateY(0)}}
@keyframes fin-savings-ring-pop{0%,45%{opacity:0;transform:translate(calc(var(--x) * .3),calc(var(--y) * .3)) rotate(0deg) scale(0)}46%{opacity:1}50%{transform:translate(calc(var(--x) * .8),calc(var(--y) * .8)) rotate(calc(var(--r) * .5)) scale(1);animation-timing-function:cubic-bezier(.4,0,.6,1)}80%{opacity:1;transform:translate(var(--x),calc(var(--y) + calc(6*var(--u)))) rotate(var(--r)) scale(1)}90%,100%{opacity:0;transform:translate(var(--x),calc(var(--y) + calc(9*var(--u)))) rotate(var(--r)) scale(.7)}}
@keyframes fin-savings-ring-pill{0%,44%{opacity:0;transform:translateY(calc(2*var(--u))) scale(.8)}50%,86%{opacity:1;transform:translateY(0) scale(1)}94%,100%{opacity:0;transform:translateY(0) scale(.96)}}
@keyframes fin-savings-ring-note{0%,26%{opacity:0;translate:0 calc(1.4*var(--u))}38%,86%{opacity:1;translate:0 0}94%,100%{opacity:0;translate:0 0}}
`,
};

export const finTicker: SceneSpec = {
  id: "fin-ticker",
  slug: "mg-fin-ticker",
  name: "Candlestick Buy Ticket",
  kind: "scene",
  job: "data",
  language: "pixel-terminal",
  mechanic: "candles-draw-then-order-fills",
  energy: "default",
  settle: 3.3,
  colors: { ink: "#E6F4EC", accent: "#3CE58A", secondary: "#FF5D6C", paper: "#08120D" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["fintech", "stocks", "trading", "chart"],
  fields: [
    { key: "symbol", label: "Ticker", default: "NORA", maxChars: 6, role: "label" },
    { key: "price", label: "Price", default: "$182.40", maxChars: 9, role: "value" },
    { key: "headline", label: "Headline", default: "Invest from $1.", maxChars: 22, role: "headline" },
    { key: "sub", label: "Subline", default: "fractional shares · zero commission", maxChars: 40, role: "caption" },
  ],
  html: `<div class="hd">
  <div class="badge">N</div>
  <div class="sym"><b data-21st-slot="symbol">{{symbol}}</b><span>Northline Robotics</span></div>
  <div class="px"><b data-21st-slot="price">{{price}}</b><span>▲ +8.36 (4.8%) today</span></div>
</div>
<div class="hl"><b data-21st-slot="headline">{{headline|words}}</b></div>
<div class="sb" data-21st-slot="sub">{{sub}}</div>
<div class="cg">
  <div class="plotbox">
    <div class="candles"><svg viewBox="0 0 700 280" preserveAspectRatio="none"><line x1="14.6" y1="197.2" x2="14.6" y2="216.2" stroke="var(--accent)" stroke-width="2"/><rect x="6.6" y="205.6" width="16" height="4.3" rx="2" fill="var(--accent)"/><rect x="6.6" y="255.2" width="16" height="24.8" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="43.8" y1="180.2" x2="43.8" y2="215.2" stroke="var(--accent)" stroke-width="2"/><rect x="35.8" y="185.4" width="16" height="18.6" rx="2" fill="var(--accent)"/><rect x="35.8" y="246.2" width="16" height="33.8" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="72.9" y1="181.8" x2="72.9" y2="199.5" stroke="var(--secondary)" stroke-width="2"/><rect x="64.9" y="186.9" width="16" height="2.0" rx="2" fill="var(--secondary)"/><rect x="64.9" y="250.6" width="16" height="29.4" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="102.1" y1="183.7" x2="102.1" y2="209.7" stroke="var(--secondary)" stroke-width="2"/><rect x="94.1" y="193.6" width="16" height="10.9" rx="2" fill="var(--secondary)"/><rect x="94.1" y="264.6" width="16" height="15.4" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="131.2" y1="193.1" x2="131.2" y2="223.9" stroke="var(--accent)" stroke-width="2"/><rect x="123.2" y="202.8" width="16" height="6.1" rx="2" fill="var(--accent)"/><rect x="123.2" y="262.0" width="16" height="18.0" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="160.4" y1="195.1" x2="160.4" y2="219.3" stroke="var(--accent)" stroke-width="2"/><rect x="152.4" y="202.3" width="16" height="4.6" rx="2" fill="var(--accent)"/><rect x="152.4" y="254.6" width="16" height="25.4" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="189.6" y1="148.0" x2="189.6" y2="206.9" stroke="var(--accent)" stroke-width="2"/><rect x="181.6" y="159.8" width="16" height="37.7" rx="2" fill="var(--accent)"/><rect x="181.6" y="271.4" width="16" height="8.6" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="218.8" y1="149.8" x2="218.8" y2="181.3" stroke="var(--secondary)" stroke-width="2"/><rect x="210.8" y="154.7" width="16" height="11.2" rx="2" fill="var(--secondary)"/><rect x="210.8" y="260.0" width="16" height="20.0" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="247.9" y1="162.0" x2="247.9" y2="185.8" stroke="var(--secondary)" stroke-width="2"/><rect x="239.9" y="168.2" width="16" height="11.7" rx="2" fill="var(--secondary)"/><rect x="239.9" y="267.6" width="16" height="12.4" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="277.1" y1="158.2" x2="277.1" y2="188.6" stroke="var(--accent)" stroke-width="2"/><rect x="269.1" y="173.0" width="16" height="9.0" rx="2" fill="var(--accent)"/><rect x="269.1" y="269.0" width="16" height="11.0" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="306.2" y1="134.2" x2="306.2" y2="181.2" stroke="var(--accent)" stroke-width="2"/><rect x="298.2" y="146.8" width="16" height="25.3" rx="2" fill="var(--accent)"/><rect x="298.2" y="270.5" width="16" height="9.5" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="335.4" y1="141.2" x2="335.4" y2="159.8" stroke="var(--secondary)" stroke-width="2"/><rect x="327.4" y="146.3" width="16" height="8.4" rx="2" fill="var(--secondary)"/><rect x="327.4" y="252.0" width="16" height="28.0" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="364.6" y1="127.0" x2="364.6" y2="167.7" stroke="var(--accent)" stroke-width="2"/><rect x="356.6" y="140.1" width="16" height="17.8" rx="2" fill="var(--accent)"/><rect x="356.6" y="268.6" width="16" height="11.4" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="393.8" y1="130.2" x2="393.8" y2="161.9" stroke="var(--secondary)" stroke-width="2"/><rect x="385.8" y="142.1" width="16" height="9.7" rx="2" fill="var(--secondary)"/><rect x="385.8" y="265.6" width="16" height="14.4" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="422.9" y1="125.5" x2="422.9" y2="167.3" stroke="var(--accent)" stroke-width="2"/><rect x="414.9" y="140.0" width="16" height="14.0" rx="2" fill="var(--accent)"/><rect x="414.9" y="261.8" width="16" height="18.2" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="452.1" y1="101.2" x2="452.1" y2="153.8" stroke="var(--accent)" stroke-width="2"/><rect x="444.1" y="112.9" width="16" height="29.9" rx="2" fill="var(--accent)"/><rect x="444.1" y="249.3" width="16" height="30.7" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="481.2" y1="95.2" x2="481.2" y2="132.7" stroke="var(--secondary)" stroke-width="2"/><rect x="473.2" y="108.9" width="16" height="15.8" rx="2" fill="var(--secondary)"/><rect x="473.2" y="269.9" width="16" height="10.1" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="510.4" y1="106.6" x2="510.4" y2="129.2" stroke="var(--accent)" stroke-width="2"/><rect x="502.4" y="112.4" width="16" height="7.1" rx="2" fill="var(--accent)"/><rect x="502.4" y="260.3" width="16" height="19.7" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="539.6" y1="103.4" x2="539.6" y2="131.7" stroke="var(--secondary)" stroke-width="2"/><rect x="531.6" y="109.7" width="16" height="11.4" rx="2" fill="var(--secondary)"/><rect x="531.6" y="257.7" width="16" height="22.3" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="568.8" y1="91.9" x2="568.8" y2="140.2" stroke="var(--accent)" stroke-width="2"/><rect x="560.8" y="104.8" width="16" height="21.2" rx="2" fill="var(--accent)"/><rect x="560.8" y="249.0" width="16" height="31.0" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="597.9" y1="62.3" x2="597.9" y2="112.4" stroke="var(--accent)" stroke-width="2"/><rect x="589.9" y="77.9" width="16" height="26.1" rx="2" fill="var(--accent)"/><rect x="589.9" y="250.7" width="16" height="29.3" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="627.1" y1="58.2" x2="627.1" y2="87.6" stroke="var(--accent)" stroke-width="2"/><rect x="619.1" y="70.2" width="16" height="5.6" rx="2" fill="var(--accent)"/><rect x="619.1" y="249.5" width="16" height="30.5" rx="1.5" fill="var(--accent)" fill-opacity=".28"/><line x1="656.3" y1="55.5" x2="656.3" y2="99.8" stroke="var(--secondary)" stroke-width="2"/><rect x="648.3" y="70.7" width="16" height="12.6" rx="2" fill="var(--secondary)"/><rect x="648.3" y="264.8" width="16" height="15.2" rx="1.5" fill="var(--secondary)" fill-opacity=".28"/><line x1="685.4" y1="58.2" x2="685.4" y2="88.6" stroke="var(--accent)" stroke-width="2"/><rect x="677.4" y="71.1" width="16" height="12.4" rx="2" fill="var(--accent)"/><rect x="677.4" y="261.2" width="16" height="18.8" rx="1.5" fill="var(--accent)" fill-opacity=".28"/></svg></div>
    <div class="cur"><div class="h"></div><div class="v"></div><div class="d"></div></div>
  </div>
  <div class="axis"><span style="top:calc(3.5*var(--u))">185.00</span><span style="top:calc(10.5*var(--u))">180.00</span><span style="top:calc(17.5*var(--u))">175.00</span><span style="top:calc(24.5*var(--u))">170.00</span></div>
  <div class="tag">▲ 4.8%</div>
  <div class="times"><span>9:30</span><span>10:30</span><span>11:30</span><span>12:30</span><span>13:30</span><span>14:30</span><span>15:30</span></div>
</div>
<div class="ticket">
  <div class="t">Buy shares <i>market</i></div>
  <div class="r">Amount <b>$250.00</b></div>
  <div class="r">Shares <b>1.3706</b></div>
  <div class="r">Fee <b>$0.00</b></div>
  <div class="btn"><div class="s"><span>Buy $250</span><span>Order filled <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5l3 3 6-7"/></svg></span></div></div>
</div>
<div class="tape"><div class="m"><span>NORA <i class="u">182.40 ▲4.8%</i></span><span>KELP <i class="dn">41.08 ▼0.9%</i></span><span>ORBT <i class="u">96.12 ▲1.2%</i></span><span>MRDN <i class="u">310.55 ▲2.1%</i></span><span>FJRD <i class="dn">12.74 ▼0.4%</i></span><span>HALC 500 <i class="u">5,812 ▲0.6%</i></span><span>LUMN <i class="u">68.90 ▲3.3%</i></span><span>BRCH <i class="dn">22.15 ▼1.7%</i></span><span>NORA <i class="u">182.40 ▲4.8%</i></span><span>KELP <i class="dn">41.08 ▼0.9%</i></span><span>ORBT <i class="u">96.12 ▲1.2%</i></span><span>MRDN <i class="u">310.55 ▲2.1%</i></span><span>FJRD <i class="dn">12.74 ▼0.4%</i></span><span>HALC 500 <i class="u">5,812 ▲0.6%</i></span><span>LUMN <i class="u">68.90 ▲3.3%</i></span><span>BRCH <i class="dn">22.15 ▼1.7%</i></span></div></div>`,
  css: `
.v-fin-ticker{color:var(--ink);font-family:var(--font-mono)}
.v-fin-ticker > *{--u:1cqw}
.v-fin-ticker[data-backdrop="on"]{background:radial-gradient(90% 80% at 45% 40%,color-mix(in srgb,var(--paper),var(--accent) 8%) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper),#000 40%) 100%)}
.v-fin-ticker .hd{position:absolute;left:5cqw;top:4cqw;display:flex;align-items:center;gap:calc(1.4*var(--u));animation:fin-ticker-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .badge{flex:none;width:calc(4.4*var(--u));height:calc(4.4*var(--u));border-radius:calc(1.2*var(--u));display:grid;place-items:center;background:linear-gradient(140deg,var(--accent),color-mix(in srgb,var(--accent),#000 55%));color:var(--paper);font-family:var(--font-display);font-weight:700;font-size:calc(2.2*var(--u));box-shadow:0 0 calc(2.4*var(--u)) color-mix(in srgb,var(--accent) 35%,transparent)}
.v-fin-ticker .sym b{display:block;font-size:calc(1.9*var(--u));line-height:1.2;letter-spacing:.04em}
.v-fin-ticker .sym span{display:block;font-size:calc(1.25*var(--u));color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-fin-ticker .px{margin-left:calc(2*var(--u));padding-left:calc(2*var(--u));border-left:1px solid color-mix(in srgb,var(--ink) 14%,transparent)}
.v-fin-ticker .px b{display:block;font-size:calc(3.2*var(--u));font-weight:600;letter-spacing:-.02em;line-height:1.2}
.v-fin-ticker .px span{display:block;font-size:calc(1.3*var(--u));color:var(--accent)}
.v-fin-ticker .hl{position:absolute;right:5cqw;top:4cqw;width:44cqw;text-align:right;animation:fin-ticker-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .hl b{display:block;font-family:var(--font-display);font-size:4.1cqw;font-weight:600;letter-spacing:-.03em;line-height:1.2}
.v-fin-ticker .hl .w:last-child{color:var(--accent)}
.v-fin-ticker .sb{position:absolute;right:5cqw;top:9.8cqw;width:44cqw;text-align:right;font-size:1.3cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 60%,transparent);animation:fin-ticker-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .cg{position:absolute;left:5cqw;top:14cqw;width:calc(80*var(--u));height:calc(31*var(--u))}
.v-fin-ticker .plotbox{position:absolute;left:0;top:0;width:calc(72*var(--u));height:calc(28*var(--u));overflow:hidden;background-image:linear-gradient(color-mix(in srgb,var(--accent) 8%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--accent) 6%,transparent) 1px,transparent 1px);background-size:100% calc(7*var(--u)),calc(10*var(--u)) 100%}
.v-fin-ticker .candles{position:absolute;left:0;top:0;width:calc(70*var(--u));height:calc(28*var(--u));animation:fin-ticker-draw 6s linear infinite}
.v-fin-ticker .candles svg{width:100%;height:100%;display:block}
.v-fin-ticker .cur{position:absolute;left:0;top:0;width:0;height:0;animation:fin-ticker-cur 6s linear infinite}
.v-fin-ticker .cur .h{position:absolute;left:calc(-80*var(--u));width:calc(160*var(--u));top:0;border-top:1px dashed color-mix(in srgb,var(--accent) 55%,transparent)}
.v-fin-ticker .cur .v{position:absolute;top:calc(-40*var(--u));height:calc(80*var(--u));left:0;border-left:1px dashed color-mix(in srgb,var(--ink) 22%,transparent)}
.v-fin-ticker .cur .d{position:absolute;left:calc(-.8*var(--u));top:calc(-.8*var(--u));width:calc(1.6*var(--u));height:calc(1.6*var(--u));border-radius:50%;background:var(--accent);box-shadow:0 0 0 calc(.4*var(--u)) color-mix(in srgb,var(--accent) 25%,transparent),0 0 calc(2*var(--u)) var(--accent)}
.v-fin-ticker .cur .d::after{content:"";position:absolute;inset:0;border-radius:50%;border:1px solid var(--accent);animation:fin-ticker-ping 1.5s ease-out infinite}
.v-fin-ticker .axis{position:absolute;left:calc(73.2*var(--u));top:0;height:calc(28*var(--u));font-size:calc(1.15*var(--u));color:color-mix(in srgb,var(--ink) 38%,transparent);animation:fin-ticker-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .axis span{position:absolute;left:0;transform:translateY(-50%)}
.v-fin-ticker .tag{position:absolute;left:calc(72.4*var(--u));top:calc(5.8*var(--u));padding:calc(.5*var(--u)) calc(.9*var(--u));border-radius:calc(.6*var(--u));background:var(--accent);color:var(--paper);font-size:calc(1.3*var(--u));font-weight:700;white-space:nowrap;animation:fin-ticker-tag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .times{position:absolute;left:0;top:calc(29*var(--u));width:calc(70*var(--u));display:flex;justify-content:space-between;font-size:calc(1.1*var(--u));color:color-mix(in srgb,var(--ink) 35%,transparent);animation:fin-ticker-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .ticket{position:absolute;left:7cqw;top:14.6cqw;width:calc(22*var(--u));padding:calc(1.4*var(--u));border-radius:calc(1.4*var(--u));background:color-mix(in srgb,var(--paper) 82%,transparent);border:1px solid color-mix(in srgb,var(--accent) 24%,transparent);backdrop-filter:blur(calc(1.2*var(--u)));box-shadow:0 calc(2*var(--u)) calc(4*var(--u)) rgba(0,0,0,.35);animation:fin-ticker-ticket 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-ticker .ticket .t{display:flex;justify-content:space-between;align-items:center;font-size:calc(1.45*var(--u));font-weight:700}
.v-fin-ticker .ticket .t i{font-style:normal;font-weight:500;font-size:calc(1.05*var(--u));padding:calc(.25*var(--u)) calc(.7*var(--u));border-radius:calc(1*var(--u));background:color-mix(in srgb,var(--accent) 16%,transparent);color:var(--accent)}
.v-fin-ticker .ticket .r{display:flex;justify-content:space-between;margin-top:calc(1*var(--u));font-size:calc(1.25*var(--u));color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-fin-ticker .ticket .r b{color:var(--ink);font-weight:500}
.v-fin-ticker .btn{margin-top:calc(1.5*var(--u));height:calc(3.4*var(--u));border-radius:calc(.9*var(--u));background:var(--accent);color:var(--paper);overflow:hidden;font-family:var(--font-body);font-size:calc(1.4*var(--u));font-weight:600}
.v-fin-ticker .btn .s{display:block;animation:fin-ticker-btn 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-ticker .btn .s span{display:flex;align-items:center;justify-content:center;gap:calc(.6*var(--u));height:calc(3.4*var(--u))}
.v-fin-ticker .btn svg{width:calc(1.6*var(--u));height:calc(1.6*var(--u))}
.v-fin-ticker .tape{position:absolute;left:0;right:0;top:47cqw;height:calc(5.6*var(--u));border-top:1px solid color-mix(in srgb,var(--accent) 16%,transparent);border-bottom:1px solid color-mix(in srgb,var(--accent) 16%,transparent);background:color-mix(in srgb,var(--accent) 4%,transparent);overflow:hidden;display:flex;align-items:center}
.v-fin-ticker .tape .m{display:flex;white-space:nowrap;animation:fin-ticker-tape 6s linear infinite}
.v-fin-ticker .tape .m span{padding:0 calc(1.8*var(--u));font-size:calc(1.35*var(--u));color:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-fin-ticker .tape .m i{font-style:normal}
.v-fin-ticker .tape .m .u{color:var(--accent)}
.v-fin-ticker .tape .m .dn{color:var(--secondary)}
.v-fin-ticker[data-backdrop="off"] .tape{background:none}
@container (max-aspect-ratio: 4/5){
  .v-fin-ticker .hd{--u:2.9cqw;left:7cqw;top:7cqh;flex-wrap:wrap;width:86cqw;row-gap:calc(1*var(--u))}
  .v-fin-ticker .px{flex-basis:100%;margin:0;padding:0;border:0}
  .v-fin-ticker .hl{left:7cqw;right:7cqw;width:auto;top:25cqh;text-align:left}
  .v-fin-ticker .hl b{font-size:12cqw}
  .v-fin-ticker .sb{left:7cqw;right:7cqw;width:auto;top:auto;bottom:9cqh;text-align:left;font-size:5.4cqw}
  .v-fin-ticker .cg{--u:1.08cqw;left:6cqw;top:41.5cqh}
  .v-fin-ticker .ticket{--u:2.3cqw;left:calc(50cqw - calc(12.4*var(--u)));top:61cqh}
  .v-fin-ticker .tape{--u:2.6cqw;top:auto;bottom:2cqh}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-ticker .hd{--u:1.7cqw;left:6cqw;top:6cqw}
  .v-fin-ticker .hl{left:6cqw;right:6cqw;width:auto;top:22cqw;text-align:left}
  .v-fin-ticker .hl b{font-size:7.4cqw}
  .v-fin-ticker .sb{left:6cqw;right:6cqw;width:auto;top:31.5cqw;text-align:left;font-size:2.4cqw}
  .v-fin-ticker .cg{--u:1.08cqw;left:6cqw;top:42cqw}
  .v-fin-ticker .ticket{--u:1.45cqw;left:auto;right:13cqw;top:56cqw}
  .v-fin-ticker .tape{--u:1.6cqw;top:auto;bottom:3cqw}
}
@keyframes fin-ticker-fade{0%{opacity:0;transform:translateY(calc(1*var(--u)))}8%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-ticker-draw{0%,8%{clip-path:inset(0 100% 0 0);opacity:1}46%,88%{clip-path:inset(0 0 0 0);opacity:1}96%{clip-path:inset(0 0 0 0);opacity:0}97%,100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes fin-ticker-cur{0%,8%{transform:translate(0,calc(20.56*var(--u)));opacity:1}14.35%{transform:translate(calc(11.7*var(--u)),calc(20.36*var(--u)))}20.65%{transform:translate(calc(23.3*var(--u)),calc(17.3*var(--u)))}27%{transform:translate(calc(35*var(--u)),calc(14.7*var(--u)))}33.35%{transform:translate(calc(46.7*var(--u)),calc(11.8*var(--u)))}39.65%{transform:translate(calc(58.3*var(--u)),calc(9.2*var(--u)))}46%,88%{transform:translate(calc(70*var(--u)),calc(7.11*var(--u)));opacity:1}96%{transform:translate(calc(70*var(--u)),calc(7.11*var(--u)));opacity:0}97%,100%{transform:translate(0,calc(20.56*var(--u)));opacity:0}}
@keyframes fin-ticker-ping{0%{transform:scale(1);opacity:.9}100%{transform:scale(3);opacity:0}}
@keyframes fin-ticker-tag{0%,44%{opacity:0;transform:translateX(calc(-1*var(--u)))}50%,88%{opacity:1;transform:translateX(0)}96%,100%{opacity:0;transform:translateX(0)}}
@keyframes fin-ticker-ticket{0%,24%{opacity:0;transform:translateY(calc(2*var(--u))) scale(.96)}34%,86%{opacity:1;transform:translateY(0) scale(1)}94%,100%{opacity:0;transform:translateY(calc(-1*var(--u))) scale(1)}}
@keyframes fin-ticker-btn{0%,40%{transform:translateY(0)}45%,100%{transform:translateY(calc(-3.4*var(--u)))}}
@keyframes fin-ticker-tape{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
`,
};

export const finInvoicePaid: SceneSpec = {
  id: "fin-invoice-paid",
  slug: "mg-fin-invoice-paid",
  name: "Invoice Paid Stamp",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "stamp-slam-on-invoice",
  energy: "punchy",
  settle: 3.2,
  colors: { ink: "#1D1A16", accent: "#D24A33", secondary: "#C9B48F", paper: "#FFFDF8" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["fintech", "invoice", "freelance", "payments"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "Halcy for freelancers", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "Invoices that chase themselves.", maxChars: 34, role: "headline" },
    { key: "stamp", label: "Stamp word", default: "Paid", maxChars: 6, role: "label" },
    { key: "toast", label: "Notification", default: "Pine & Harbor paid $6,400.00", maxChars: 32, role: "caption" },
  ],
  html: `<div class="tex"></div>
<div class="doc">
  <div class="sheet">
    <div class="top">
      <div class="studio"><i></i>Studio Orla</div>
      <div class="no">INV-0427<br>Oct 5, 2026</div>
    </div>
    <div class="ttl">Invoice</div>
    <div class="to">Billed to <b>Pine &amp; Harbor Co.</b></div>
    <div class="rows">
      <div class="row"><span>Brand identity system</span><b>$4,200.00</b></div>
      <div class="row"><span>Motion toolkit</span><b>$1,600.00</b></div>
      <div class="row"><span>Launch assets</span><b>$600.00</b></div>
    </div>
    <div class="tot">
      <div class="lb"><span class="a">Total due</span><span class="b">Paid in full</span></div>
      <div class="amt">$6,400.00</div>
    </div>
    <div class="due">${LOGO}Pay by card or bank transfer</div>
  </div>
  <div class="wave"></div>
  <div class="stamp"><div class="in"><b data-21st-slot="stamp">{{stamp}}</b><span>OCT 7 · RECEIVED</span></div></div>
</div>
<div class="k">${LOGO}<span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="h" data-21st-slot="headline">{{headline|words}}</div>
<div class="toast"><svg viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="var(--accent)"/><path d="M8.5 14.5l3.6 3.6 7.4-8" fill="none" stroke="var(--paper)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><div><b data-21st-slot="toast">{{toast}}</b><span>Reminder sent automatically · 2 days ago</span></div></div>`,
  css: `
.v-fin-invoice-paid{color:var(--ink);font-family:var(--font-body)}
.v-fin-invoice-paid > *{--u:1cqw}
.v-fin-invoice-paid[data-backdrop="on"]{background:radial-gradient(110% 90% at 30% 40%,color-mix(in srgb,var(--paper),var(--secondary) 16%) 0%,color-mix(in srgb,var(--paper),var(--secondary) 30%) 60%,color-mix(in srgb,var(--paper),var(--secondary) 46%) 100%)}
.v-fin-invoice-paid .tex{position:absolute;inset:0;opacity:.5;background-image:radial-gradient(color-mix(in srgb,var(--ink) 8%,transparent) 1px,transparent 1px);background-size:.7cqw .7cqw}
.v-fin-invoice-paid[data-backdrop="off"] .tex{display:none}
.v-fin-invoice-paid[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-fin-invoice-paid .doc{position:absolute;left:7cqw;top:5.2cqw;width:calc(39*var(--u));height:calc(46*var(--u))}
.v-fin-invoice-paid .sheet{position:absolute;inset:0;padding:calc(3*var(--u)) calc(3.2*var(--u));box-sizing:border-box;background:var(--paper);border-radius:calc(.6*var(--u));box-shadow:0 calc(.2*var(--u)) calc(.4*var(--u)) rgba(60,40,10,.08),0 calc(1.6*var(--u)) calc(3*var(--u)) rgba(60,40,10,.12),0 calc(4*var(--u)) calc(7*var(--u)) rgba(60,40,10,.12);transform-origin:50% 60%;animation:fin-invoice-paid-sheet 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .top{display:flex;justify-content:space-between;align-items:flex-start}
.v-fin-invoice-paid .studio{display:flex;align-items:center;gap:calc(.9*var(--u));font-weight:600;font-size:calc(1.45*var(--u))}
.v-fin-invoice-paid .studio i{width:calc(2.4*var(--u));height:calc(2.4*var(--u));border-radius:50%;background:conic-gradient(from 200deg,color-mix(in srgb,var(--accent),#fff 40%),var(--accent),color-mix(in srgb,var(--accent),#fff 40%));display:block}
.v-fin-invoice-paid .no{text-align:right;font-family:var(--font-mono);font-size:calc(1.05*var(--u));color:color-mix(in srgb,var(--ink) 55%,transparent);line-height:1.5}
.v-fin-invoice-paid .ttl{margin-top:calc(2.6*var(--u));font-family:var(--font-display);font-size:calc(4.4*var(--u));line-height:1.1}
.v-fin-invoice-paid .to{margin-top:calc(.8*var(--u));font-size:calc(1.15*var(--u));color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fin-invoice-paid .to b{color:var(--ink);font-weight:500}
.v-fin-invoice-paid .rows{margin-top:calc(2.4*var(--u));border-top:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}
.v-fin-invoice-paid .row{display:flex;justify-content:space-between;padding:calc(1.05*var(--u)) 0;border-bottom:1px solid color-mix(in srgb,var(--ink) 8%,transparent);font-size:calc(1.3*var(--u))}
.v-fin-invoice-paid .row span{color:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-fin-invoice-paid .row b{font-family:var(--font-mono);font-weight:500;font-size:calc(1.2*var(--u))}
.v-fin-invoice-paid .tot{position:relative;display:flex;justify-content:space-between;align-items:baseline;margin-top:calc(2*var(--u))}
.v-fin-invoice-paid .tot .lb{position:relative;font-size:calc(1.3*var(--u));color:color-mix(in srgb,var(--ink) 70%,transparent);width:calc(14*var(--u));height:calc(1.8*var(--u))}
.v-fin-invoice-paid .tot .lb span{position:absolute;left:0;top:0;white-space:nowrap}
.v-fin-invoice-paid .tot .lb .a{animation:fin-invoice-paid-out 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .tot .lb .b{color:var(--accent);font-weight:600;animation:fin-invoice-paid-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .tot .amt{font-family:var(--font-body);font-weight:700;font-size:calc(3*var(--u));letter-spacing:-.02em}
.v-fin-invoice-paid .due{position:absolute;left:calc(3.2*var(--u));bottom:calc(2.6*var(--u));display:flex;align-items:center;gap:calc(.7*var(--u));font-size:calc(1.1*var(--u));color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fin-invoice-paid .due svg{width:calc(1.8*var(--u));height:calc(1.8*var(--u))}
.v-fin-invoice-paid .stamp{position:absolute;left:calc(12*var(--u));top:calc(22.3*var(--u));width:calc(17*var(--u));height:calc(10*var(--u));animation:fin-invoice-paid-stamp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .stamp .in{position:absolute;inset:0;border:calc(.45*var(--u)) solid var(--accent);border-radius:calc(1.4*var(--u));color:var(--accent);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:inset 0 0 0 calc(.35*var(--u)) var(--paper),inset 0 0 0 calc(.55*var(--u)) var(--accent);opacity:.92}
.v-fin-invoice-paid .stamp b{font-family:var(--font-display);font-style:italic;font-weight:400;font-size:calc(5*var(--u));line-height:1.2;white-space:nowrap}
.v-fin-invoice-paid .stamp span{font-family:var(--font-mono);font-size:calc(1*var(--u));letter-spacing:.18em}
.v-fin-invoice-paid .wave{position:absolute;left:calc(20.5*var(--u));top:calc(26.8*var(--u));width:calc(16*var(--u));height:calc(16*var(--u));margin:calc(-8*var(--u)) 0 0 calc(-8*var(--u));border-radius:50%;border:calc(.3*var(--u)) solid color-mix(in srgb,var(--accent) 50%,transparent);animation:fin-invoice-paid-wave 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .k{position:absolute;left:54cqw;top:11cqw;display:flex;align-items:center;gap:.9cqw;font-size:1.5cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 65%,transparent);animation:fin-invoice-paid-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .k svg{width:2.4cqw;height:2.4cqw;flex:none}
.v-fin-invoice-paid .h{position:absolute;left:54cqw;top:15cqw;width:40cqw;font-family:var(--font-display);font-size:5.6cqw;line-height:1.2;letter-spacing:-.01em;animation:fin-invoice-paid-t2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .h .w{display:inline-block;padding-block:.1em;margin-block:-.1em}
.v-fin-invoice-paid .h .w:nth-last-child(-n+2){font-style:italic;color:var(--accent)}
.v-fin-invoice-paid .toast{position:absolute;left:54cqw;top:39cqw;display:flex;align-items:center;gap:calc(1.1*var(--u));padding:calc(1.1*var(--u)) calc(1.8*var(--u)) calc(1.1*var(--u)) calc(1.1*var(--u));border-radius:calc(1.6*var(--u));background:var(--ink);color:var(--paper);box-shadow:0 calc(1.4*var(--u)) calc(3*var(--u)) rgba(40,25,5,.25);animation:fin-invoice-paid-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-invoice-paid .toast svg{width:calc(2.8*var(--u));height:calc(2.8*var(--u));flex:none}
.v-fin-invoice-paid .toast b{display:block;font-size:calc(1.45*var(--u));line-height:1.25;font-weight:600}
.v-fin-invoice-paid .toast span{display:block;font-size:calc(1.1*var(--u));color:color-mix(in srgb,var(--paper) 62%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-fin-invoice-paid .k{left:8cqw;top:8cqh;font-size:5.4cqw;gap:3cqw}
  .v-fin-invoice-paid .k svg{width:8cqw;height:8cqw}
  .v-fin-invoice-paid .h{left:8cqw;right:8cqw;width:auto;top:13.5cqh;font-size:11.4cqw}
  .v-fin-invoice-paid .doc{--u:1.72cqw;left:calc(50cqw - calc(19.5*var(--u)));top:38cqh}
  .v-fin-invoice-paid .toast{--u:3.8cqw;left:6cqw;right:6cqw;top:auto;bottom:5cqh}
  .v-fin-invoice-paid .toast span{font-size:calc(1*var(--u))}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-invoice-paid .k{left:6cqw;top:6cqw;font-size:2.6cqw;gap:1.4cqw}
  .v-fin-invoice-paid .k svg{width:4cqw;height:4cqw}
  .v-fin-invoice-paid .h{left:6cqw;right:6cqw;width:auto;top:12cqw;font-size:7.4cqw}
  .v-fin-invoice-paid .doc{--u:1.22cqw;left:6cqw;top:35cqw}
  .v-fin-invoice-paid .toast{--u:1.55cqw;left:auto;right:5cqw;top:auto;bottom:9cqw;max-width:44cqw}
}
@keyframes fin-invoice-paid-sheet{0%{opacity:0;transform:translateY(calc(8*var(--u))) rotate(-7deg)}20%{opacity:1;transform:translateY(0) rotate(-2.5deg)}37%{transform:translate(0,0) rotate(-2.5deg)}38.5%{transform:translate(calc(.2*var(--u)),calc(.5*var(--u))) rotate(-2.1deg)}41%{transform:translate(0,0) rotate(-2.5deg)}84%{opacity:1;transform:translate(0,calc(-.4*var(--u))) rotate(-2deg)}96%,100%{opacity:0;transform:translate(0,calc(-3*var(--u))) rotate(-2deg)}}
@keyframes fin-invoice-paid-stamp{0%,30%{opacity:0;transform:scale(2.3) rotate(-2deg)}37.5%{opacity:1;transform:scale(.93) rotate(-11deg)}41%,84%{opacity:1;transform:scale(1) rotate(-11deg)}96%,100%{opacity:0;transform:translateY(calc(-3*var(--u))) scale(1) rotate(-11deg)}}
@keyframes fin-invoice-paid-wave{0%,37%{opacity:0;transform:scale(.4)}38%{opacity:1;transform:scale(.5)}50%,100%{opacity:0;transform:scale(1.6)}}
@keyframes fin-invoice-paid-out{0%,37%{opacity:1;transform:translateY(0)}41%,100%{opacity:0;transform:translateY(calc(-1*var(--u)))}}
@keyframes fin-invoice-paid-in{0%,38%{opacity:0;transform:translateY(calc(1*var(--u)))}43%,100%{opacity:1;transform:translateY(0)}}
@keyframes fin-invoice-paid-t1{0%,6%{opacity:0;transform:translateY(1.5cqw)}18%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-invoice-paid-t2{0%,10%{opacity:0;transform:translateY(2cqw)}24%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-invoice-paid-toast{0%,40%{opacity:0;transform:translateY(calc(2*var(--u))) scale(.96)}48%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(calc(-1*var(--u))) scale(1)}}
`,
};

export const finFxBoard: SceneSpec = {
  id: "fin-fx-board",
  slug: "mg-fin-fx-board",
  name: "Split Flap Rates",
  kind: "scene",
  job: "data",
  language: "editorial",
  mechanic: "split-flap-rates-settle",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#F5E9D0", accent: "#F2C14E", secondary: "#6FD39A", paper: "#17130F" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["fintech", "currency", "rates", "split-flap"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "halcy send", maxChars: 20, role: "kicker" },
    { key: "headline", label: "Headline", default: "Send abroad at the real rate.", maxChars: 34, role: "headline" },
    { key: "offer", label: "Offer", default: "0% fee", maxChars: 8, role: "value" },
    { key: "terms", label: "Offer terms", default: "on your first $5,000", maxChars: 24, role: "caption" },
  ],
  html: `<div class="kh">
  <div class="k">${LOGO}<span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="h" data-21st-slot="headline">{{headline|words}}</div>
</div>
<div class="offer"><b data-21st-slot="offer">{{offer}}</b><span data-21st-slot="terms">{{terms}}</span></div>
<div class="board"><div class="glare"></div>
<div class="row r1"><div class="pair"><i style="background:#7FB2FF"></i><i style="background:#F2C14E"></i>USD<em>→</em>EUR</div><div class="cells"><div class="c"><s>7</s><b>0</b></div><div class="c"><s>3</s><b>.</b></div><div class="c"><s>6</s><b>9</b></div><div class="c"><s>2</s><b>1</b></div><div class="c"><s>7</s><b>8</b></div><div class="c"><s>3</s><b>4</b></div></div><div class="chg u">▲ 0.12%</div></div>
      <div class="row r2"><div class="pair"><i style="background:#E86A5C"></i><i style="background:#F5F0E6"></i>GBP<em>→</em>JPY</div><div class="cells"><div class="c"><s>4</s><b>1</b></div><div class="c"><s>5</s><b>8</b></div><div class="c"><s>1</s><b>9</b></div><div class="c"><s>9</s><b>.</b></div><div class="c"><s>4</s><b>7</b></div><div class="c"><s>5</s><b>2</b></div></div><div class="chg d">▼ 0.08%</div></div>
      <div class="row r3"><div class="pair"><i style="background:#F2C14E"></i><i style="background:#4FB37E"></i>EUR<em>→</em>MXN</div><div class="cells"><div class="c"><s>2</s><b>1</b></div><div class="c"><s>0</s><b>9</b></div><div class="c"><s>8</s><b>.</b></div><div class="c"><s>7</s><b>4</b></div><div class="c"><s>2</s><b>1</b></div><div class="c"><s>0</s><b>6</b></div></div><div class="chg u">▲ 0.31%</div></div>
      <div class="row r4"><div class="pair"><i style="background:#7FB2FF"></i><i style="background:#F29A4E"></i>USD<em>→</em>INR</div><div class="cells"><div class="c"><s>6</s><b>8</b></div><div class="c"><s>9</s><b>3</b></div><div class="c"><s>3</s><b>.</b></div><div class="c"><s>0</s><b>1</b></div><div class="c"><s>6</s><b>5</b></div><div class="c"><s>9</s><b>2</b></div></div><div class="chg u">▲ 0.04%</div></div>
</div>
<div class="foot"><span><i class="dot"></i>mid-market rates, live</span><span>40 currencies · arrives in seconds</span></div>`,
  css: `
.v-fin-fx-board{color:var(--ink);font-family:var(--font-display)}
.v-fin-fx-board > *{--u:1cqw}
.v-fin-fx-board[data-backdrop="on"]{background:radial-gradient(120% 100% at 50% 0%,color-mix(in srgb,var(--paper),var(--ink) 9%) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper),#000 40%) 100%)}
.v-fin-fx-board .kh{position:absolute;left:7cqw;top:4.6cqw;width:66cqw;animation:fin-fx-board-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-fx-board .k{display:flex;align-items:center;gap:.9cqw;font-family:var(--font-mono);font-size:1.3cqw;line-height:1.2;letter-spacing:.12em;color:var(--accent)}
.v-fin-fx-board .k svg{width:2.2cqw;height:2.2cqw;flex:none}
.v-fin-fx-board .h{margin-top:1cqw;font-size:4cqw;font-weight:700;letter-spacing:-.035em;line-height:1.2}
.v-fin-fx-board .h .w:nth-last-child(2){font-style:italic;font-weight:400;letter-spacing:0;color:var(--accent);padding-right:.06em}
.v-fin-fx-board .offer{position:absolute;right:7cqw;top:5.4cqw;text-align:right;padding:1cqw 1.6cqw;border-radius:1.2cqw;background:var(--accent);color:var(--paper);transform-origin:100% 100%;animation:fin-fx-board-offer 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-fx-board .offer b{display:block;font-size:3.4cqw;font-weight:800;letter-spacing:-.04em;line-height:1.2;white-space:nowrap}
.v-fin-fx-board .offer span{display:block;font-size:1.2cqw;line-height:1.2;font-weight:600}
.v-fin-fx-board .board{position:absolute;left:5.5cqw;right:5.5cqw;top:16.6cqw;padding:calc(1.6*var(--u)) calc(1.5*var(--u));border-radius:calc(1.6*var(--u));background:linear-gradient(color-mix(in srgb,var(--paper),#000 50%),color-mix(in srgb,var(--paper),#000 40%));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent),0 calc(2*var(--u)) calc(5*var(--u)) rgba(0,0,0,.4);animation:fin-fx-board-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-fx-board .glare{position:absolute;inset:0;border-radius:calc(1.6*var(--u));overflow:hidden;pointer-events:none}
.v-fin-fx-board .glare::after{content:"";position:absolute;top:-20%;bottom:-20%;left:-30%;width:30%;background:linear-gradient(90deg,rgba(255,240,210,0),rgba(255,240,210,.07),rgba(255,240,210,0));transform:skewX(-18deg);animation:fin-fx-board-glare 6s linear infinite}
.v-fin-fx-board .row{display:flex;align-items:center;height:calc(6.4*var(--u))}
.v-fin-fx-board .row + .row{margin-top:calc(1*var(--u))}
.v-fin-fx-board .pair{display:flex;align-items:center;width:calc(30*var(--u));font-family:var(--font-mono);font-size:calc(1.9*var(--u));font-weight:500;color:var(--ink)}
.v-fin-fx-board .pair i{width:calc(2.6*var(--u));height:calc(2.6*var(--u));border-radius:50%;margin-right:calc(.5*var(--u));box-shadow:inset 0 0 0 calc(.25*var(--u)) rgba(0,0,0,.25)}
.v-fin-fx-board .pair i + i{margin-left:calc(-1.4*var(--u));margin-right:calc(1.3*var(--u));box-shadow:0 0 0 calc(.3*var(--u)) color-mix(in srgb,var(--paper),#000 50%)}
.v-fin-fx-board .pair em{font-style:normal;color:color-mix(in srgb,var(--ink) 40%,transparent);margin:0 calc(.7*var(--u))}
.v-fin-fx-board .cells{display:flex;gap:calc(.45*var(--u))}
.v-fin-fx-board .c{position:relative;width:calc(4.4*var(--u));height:calc(6.2*var(--u));border-radius:calc(.6*var(--u));color:#F5E9D0;background:linear-gradient(#2B2620 0%,#231F1A 49.6%,#0B0907 49.6%,#0B0907 50.4%,#211D18 50.4%,#1B1814 100%);box-shadow:0 calc(.3*var(--u)) calc(.6*var(--u)) rgba(0,0,0,.5);perspective:calc(20*var(--u));font-family:var(--font-mono);font-size:calc(4.1*var(--u));font-weight:500;line-height:calc(6.2*var(--u));text-align:center}
.v-fin-fx-board .c b,.v-fin-fx-board .c s{position:absolute;inset:0;font-weight:500;text-decoration:none}
.v-fin-fx-board .c s{color:rgba(245,233,208,.55)}
.v-fin-fx-board .c::after{content:"";position:absolute;left:0;right:0;top:0;height:50%;border-radius:calc(.6*var(--u)) calc(.6*var(--u)) 0 0;background:linear-gradient(#36302A,#28231E);transform-origin:50% 100%;opacity:0}
.v-fin-fx-board .chg{margin-left:auto;font-family:var(--font-mono);font-size:calc(1.45*var(--u));padding:calc(.5*var(--u)) calc(.9*var(--u));border-radius:calc(.7*var(--u));white-space:nowrap}
.v-fin-fx-board .chg.u{color:var(--secondary);background:color-mix(in srgb,var(--secondary) 14%,transparent)}
.v-fin-fx-board .chg.d{color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,transparent)}
.v-fin-fx-board .foot{position:absolute;left:7cqw;right:7cqw;bottom:2.4cqw;display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:1.1cqw;color:color-mix(in srgb,var(--ink) 50%,transparent);animation:fin-fx-board-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-fx-board .foot span{display:flex;align-items:center;gap:.7cqw}
.v-fin-fx-board .dot{width:.9cqw;height:.9cqw;border-radius:50%;background:var(--secondary);animation:fin-fx-board-live 1s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-fin-fx-board .kh{left:8cqw;right:8cqw;width:auto;top:7.5cqh}
  .v-fin-fx-board .k{font-size:5.4cqw;gap:3cqw;letter-spacing:.06em}
  .v-fin-fx-board .k svg{width:8cqw;height:8cqw}
  .v-fin-fx-board .h{margin-top:3cqw;font-size:11cqw}
  .v-fin-fx-board .board{--u:1.6cqw;left:calc(50cqw - calc(24.5*var(--u)));right:auto;top:33cqh;width:calc(46*var(--u))}
  .v-fin-fx-board .row{flex-wrap:wrap;height:auto;row-gap:calc(.8*var(--u))}
  .v-fin-fx-board .row + .row{margin-top:calc(1.8*var(--u))}
  .v-fin-fx-board .pair{flex-basis:100%;width:auto}
  .v-fin-fx-board .chg{margin-left:auto}
  .v-fin-fx-board .offer{left:8cqw;right:8cqw;top:auto;bottom:6cqh;text-align:left;padding:3cqw 5cqw;border-radius:4cqw;display:flex;align-items:center;justify-content:space-between;gap:4cqw;transform-origin:50% 100%}
  .v-fin-fx-board .offer b{font-size:11cqw}
  .v-fin-fx-board .offer span{font-size:5.4cqw;text-align:right}
  .v-fin-fx-board .foot{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-fx-board .kh{left:6cqw;right:6cqw;width:auto;top:6cqw}
  .v-fin-fx-board .k{font-size:2.4cqw;gap:1.4cqw}
  .v-fin-fx-board .k svg{width:3.8cqw;height:3.8cqw}
  .v-fin-fx-board .h{font-size:7cqw}
  .v-fin-fx-board .board{--u:1.3cqw;left:6cqw;right:6cqw;top:33cqw}
  .v-fin-fx-board .pair{width:calc(24*var(--u))}
  .v-fin-fx-board .offer{right:6cqw;top:auto;bottom:6cqw;padding:1.8cqw 2.8cqw;border-radius:2cqw}
  .v-fin-fx-board .offer b{font-size:6.4cqw}
  .v-fin-fx-board .offer span{font-size:2.3cqw}
  .v-fin-fx-board .foot{right:auto;bottom:7cqw;flex-direction:column;gap:1cqw;font-size:1.9cqw}
  .v-fin-fx-board .dot{width:1.4cqw;height:1.4cqw}
}
@keyframes fin-fx-board-fade{0%{opacity:0;transform:translateY(1.2cqw)}8%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-fx-board-offer{0%,36%{opacity:0;transform:scale(.8) rotate(-4deg)}44%{opacity:1;transform:scale(1.04) rotate(2deg)}48%,86%{opacity:1;transform:scale(1) rotate(0)}94%,100%{opacity:0;transform:scale(.96) rotate(0)}}
@keyframes fin-fx-board-glare{0%{transform:translateX(0) skewX(-18deg)}100%{transform:translateX(460%) skewX(-18deg)}}
@keyframes fin-fx-board-live{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes fin-fx-board-f1{0%,8%{opacity:0;transform:rotateX(0)}8.01%{opacity:1;transform:rotateX(0)}11.00%{opacity:1;transform:rotateX(-90deg)}11.01%{opacity:1;transform:rotateX(0)}14.00%{opacity:1;transform:rotateX(-90deg)}14.01%{opacity:1;transform:rotateX(0)}17.00%{opacity:1;transform:rotateX(-90deg)}17.01%{opacity:1;transform:rotateX(0)}20.00%{opacity:1;transform:rotateX(-90deg)}20.01%{opacity:1;transform:rotateX(0)}23.00%{opacity:1;transform:rotateX(-90deg)}23.01%,100%{opacity:0;transform:rotateX(0)}}
@keyframes fin-fx-board-s1{0%,8%{opacity:0}9%{opacity:1;transform:translateY(0)}23%{opacity:1;transform:translateY(0)}24%,100%{opacity:0;transform:translateY(calc(-.4*var(--u)))}}
@keyframes fin-fx-board-c1{0%,23%{opacity:0;transform:translateY(calc(.5*var(--u)))}26%,100%{opacity:1;transform:translateY(0)}}
.v-fin-fx-board .r1 .c::after{animation:fin-fx-board-f1 6s linear infinite}
.v-fin-fx-board .r1 .c s{animation:fin-fx-board-s1 6s steps(1) infinite}
.v-fin-fx-board .r1 .c b{animation:fin-fx-board-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-fx-board-f2{0%,8%{opacity:0;transform:rotateX(0)}8.01%{opacity:1;transform:rotateX(0)}11.00%{opacity:1;transform:rotateX(-90deg)}11.01%{opacity:1;transform:rotateX(0)}14.00%{opacity:1;transform:rotateX(-90deg)}14.01%{opacity:1;transform:rotateX(0)}17.00%{opacity:1;transform:rotateX(-90deg)}17.01%{opacity:1;transform:rotateX(0)}20.00%{opacity:1;transform:rotateX(-90deg)}20.01%{opacity:1;transform:rotateX(0)}23.00%{opacity:1;transform:rotateX(-90deg)}23.01%{opacity:1;transform:rotateX(0)}26.00%{opacity:1;transform:rotateX(-90deg)}26.01%,100%{opacity:0;transform:rotateX(0)}}
@keyframes fin-fx-board-s2{0%,8%{opacity:0}9%{opacity:1;transform:translateY(0)}27%{opacity:1;transform:translateY(0)}28%,100%{opacity:0;transform:translateY(calc(-.4*var(--u)))}}
@keyframes fin-fx-board-c2{0%,27%{opacity:0;transform:translateY(calc(.5*var(--u)))}30%,100%{opacity:1;transform:translateY(0)}}
.v-fin-fx-board .r2 .c::after{animation:fin-fx-board-f2 6s linear infinite}
.v-fin-fx-board .r2 .c s{animation:fin-fx-board-s2 6s steps(1) infinite}
.v-fin-fx-board .r2 .c b{animation:fin-fx-board-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-fx-board-f3{0%,8%{opacity:0;transform:rotateX(0)}8.01%{opacity:1;transform:rotateX(0)}11.00%{opacity:1;transform:rotateX(-90deg)}11.01%{opacity:1;transform:rotateX(0)}14.00%{opacity:1;transform:rotateX(-90deg)}14.01%{opacity:1;transform:rotateX(0)}17.00%{opacity:1;transform:rotateX(-90deg)}17.01%{opacity:1;transform:rotateX(0)}20.00%{opacity:1;transform:rotateX(-90deg)}20.01%{opacity:1;transform:rotateX(0)}23.00%{opacity:1;transform:rotateX(-90deg)}23.01%{opacity:1;transform:rotateX(0)}26.00%{opacity:1;transform:rotateX(-90deg)}26.01%{opacity:1;transform:rotateX(0)}29.00%{opacity:1;transform:rotateX(-90deg)}29.01%{opacity:1;transform:rotateX(0)}32.00%{opacity:1;transform:rotateX(-90deg)}32.01%,100%{opacity:0;transform:rotateX(0)}}
@keyframes fin-fx-board-s3{0%,8%{opacity:0}9%{opacity:1;transform:translateY(0)}31%{opacity:1;transform:translateY(0)}32%,100%{opacity:0;transform:translateY(calc(-.4*var(--u)))}}
@keyframes fin-fx-board-c3{0%,31%{opacity:0;transform:translateY(calc(.5*var(--u)))}34%,100%{opacity:1;transform:translateY(0)}}
.v-fin-fx-board .r3 .c::after{animation:fin-fx-board-f3 6s linear infinite}
.v-fin-fx-board .r3 .c s{animation:fin-fx-board-s3 6s steps(1) infinite}
.v-fin-fx-board .r3 .c b{animation:fin-fx-board-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-fx-board-f4{0%,8%{opacity:0;transform:rotateX(0)}8.01%{opacity:1;transform:rotateX(0)}11.00%{opacity:1;transform:rotateX(-90deg)}11.01%{opacity:1;transform:rotateX(0)}14.00%{opacity:1;transform:rotateX(-90deg)}14.01%{opacity:1;transform:rotateX(0)}17.00%{opacity:1;transform:rotateX(-90deg)}17.01%{opacity:1;transform:rotateX(0)}20.00%{opacity:1;transform:rotateX(-90deg)}20.01%{opacity:1;transform:rotateX(0)}23.00%{opacity:1;transform:rotateX(-90deg)}23.01%{opacity:1;transform:rotateX(0)}26.00%{opacity:1;transform:rotateX(-90deg)}26.01%{opacity:1;transform:rotateX(0)}29.00%{opacity:1;transform:rotateX(-90deg)}29.01%{opacity:1;transform:rotateX(0)}32.00%{opacity:1;transform:rotateX(-90deg)}32.01%{opacity:1;transform:rotateX(0)}35.00%{opacity:1;transform:rotateX(-90deg)}35.01%,100%{opacity:0;transform:rotateX(0)}}
@keyframes fin-fx-board-s4{0%,8%{opacity:0}9%{opacity:1;transform:translateY(0)}35%{opacity:1;transform:translateY(0)}36%,100%{opacity:0;transform:translateY(calc(-.4*var(--u)))}}
@keyframes fin-fx-board-c4{0%,35%{opacity:0;transform:translateY(calc(.5*var(--u)))}38%,100%{opacity:1;transform:translateY(0)}}
.v-fin-fx-board .r4 .c::after{animation:fin-fx-board-f4 6s linear infinite}
.v-fin-fx-board .r4 .c s{animation:fin-fx-board-s4 6s steps(1) infinite}
.v-fin-fx-board .r4 .c b{animation:fin-fx-board-c4 6s cubic-bezier(.2,.8,.2,1) infinite}
`,
};

export const finPortfolioDonut: SceneSpec = {
  id: "fin-portfolio-donut",
  slug: "mg-fin-portfolio-donut",
  name: "Portfolio Rebalance Donut",
  kind: "scene",
  job: "data",
  language: "glass",
  mechanic: "donut-rotate-to-target-mix",
  energy: "calm",
  settle: 3.3,
  colors: { ink: "#14162B", accent: "#6E5BFF", secondary: "#2FBF95", paper: "#F1F3FA" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["fintech", "investing", "portfolio", "donut"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "halcy invest", maxChars: 20, role: "kicker" },
    { key: "headline", label: "Headline", default: "Your mix, kept in balance.", maxChars: 30, role: "headline" },
    { key: "status", label: "Donut status", default: "On target", maxChars: 12, role: "label" },
    { key: "chip", label: "Footnote", default: "Rebalanced automatically", maxChars: 28, role: "caption" },
  ],
  html: `<div class="blob b1"></div><div class="blob b2"></div>
<div class="hd"><div class="k">${LOGO}<span data-21st-slot="kicker">{{kicker}}</span></div><div class="h" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="card">
<div class="donut">
        <svg class="before" viewBox="0 0 100 100"><g transform="rotate(-90 50 50)"><circle cx="50" cy="50" r="40" fill="none" stroke="color-mix(in srgb,var(--ink) 6%,transparent)" stroke-width="12"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" stroke-width="12" stroke-dasharray="174.33 251.33" stroke-dashoffset="-0.80"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--secondary)" stroke-width="12" stroke-dasharray="33.59 251.33" stroke-dashoffset="-176.73"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" stroke-width="12" stroke-dasharray="13.48 251.33" stroke-dashoffset="-211.92"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--rose)" stroke-width="12" stroke-dasharray="23.53 251.33" stroke-dashoffset="-226.99"/></g></svg>
        <svg class="after" viewBox="0 0 100 100"><g transform="rotate(-90 50 50)"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" stroke-width="12" stroke-dasharray="149.20 251.33" stroke-dashoffset="-0.80"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--secondary)" stroke-width="12" stroke-dasharray="61.23 251.33" stroke-dashoffset="-151.60"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--gold)" stroke-width="12" stroke-dasharray="18.51 251.33" stroke-dashoffset="-214.43"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--rose)" stroke-width="12" stroke-dasharray="15.99 251.33" stroke-dashoffset="-234.53"/></g></svg>
        <div class="mid"><div class="m1"><b>10% off</b><span>target mix</span></div><div class="m2"><svg class="ok" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="var(--secondary)"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><b data-21st-slot="status">{{status}}</b><span>$24,860 portfolio</span></div></div>
      </div>
      <div class="leg"><div class="li"><i style="background:var(--accent)"></i><span class="n">Stocks</span><div class="track"><div class="fill" style="background:var(--accent);--a:0.875;--b:0.750"></div><div class="tick" style="left:75.0%"></div></div><div class="pc"><span class="p1">70%</span><span class="p2">60%</span></div></div><div class="li"><i style="background:var(--secondary)"></i><span class="n">Bonds</span><div class="track"><div class="fill" style="background:var(--secondary);--a:0.175;--b:0.312"></div><div class="tick" style="left:31.2%"></div></div><div class="pc"><span class="p1">14%</span><span class="p2">25%</span></div></div><div class="li"><i style="background:var(--gold)"></i><span class="n">Gold</span><div class="track"><div class="fill" style="background:var(--gold);--a:0.075;--b:0.100"></div><div class="tick" style="left:10.0%"></div></div><div class="pc"><span class="p1">6%</span><span class="p2">8%</span></div></div><div class="li"><i style="background:var(--rose)"></i><span class="n">Cash</span><div class="track"><div class="fill" style="background:var(--rose);--a:0.125;--b:0.087"></div><div class="tick" style="left:8.8%"></div></div><div class="pc"><span class="p1">10%</span><span class="p2">7%</span></div></div></div>
</div>
<div class="chip"><i></i><span data-21st-slot="chip">{{chip}}</span></div>`,
  css: `
.v-fin-portfolio-donut{color:var(--ink);font-family:var(--font-body);--gold:color-mix(in srgb,var(--accent) 25%,#F2B544);--rose:color-mix(in srgb,var(--secondary) 25%,#FF8FA3)}
.v-fin-portfolio-donut > *{--u:.55cqw}
.v-fin-portfolio-donut[data-backdrop="on"]{background:linear-gradient(165deg,color-mix(in srgb,var(--paper),var(--accent) 8%) 0%,var(--paper) 45%,color-mix(in srgb,var(--paper),var(--secondary) 10%) 100%)}
.v-fin-portfolio-donut[data-backdrop="off"] .blob{display:none}
.v-fin-portfolio-donut .blob{position:absolute;border-radius:50%;filter:blur(6cqw)}
.v-fin-portfolio-donut .b1{left:30cqw;top:4cqw;width:40cqw;height:40cqw;background:color-mix(in srgb,var(--accent) 30%,transparent);animation:fin-portfolio-donut-b1 6s ease-in-out infinite}
.v-fin-portfolio-donut .b2{right:-10cqw;top:24cqw;width:40cqw;height:40cqw;background:color-mix(in srgb,var(--secondary) 28%,transparent);animation:fin-portfolio-donut-b2 6s ease-in-out infinite}
.v-fin-portfolio-donut .hd{position:absolute;left:7cqw;top:12cqw;width:36cqw;animation:fin-portfolio-donut-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .k{display:flex;align-items:center;gap:1cqw;font-size:1.6cqw;line-height:1.2;font-weight:500;color:color-mix(in srgb,var(--ink) 65%,transparent)}
.v-fin-portfolio-donut .k svg{width:2.6cqw;height:2.6cqw;flex:none}
.v-fin-portfolio-donut .h{margin-top:1.6cqw;font-size:5.4cqw;font-weight:600;letter-spacing:-.04em;line-height:1.2}
.v-fin-portfolio-donut .h .w:nth-last-child(-n+2){font-family:var(--font-display);font-style:italic;font-weight:400;letter-spacing:-.01em;color:var(--accent);padding-right:.05em}
.v-fin-portfolio-donut .card{position:absolute;left:46cqw;top:7.2cqw;width:calc(86*var(--u));height:calc(76*var(--u));border-radius:calc(6*var(--u));background:color-mix(in srgb,var(--paper) 62%,transparent);border:1px solid color-mix(in srgb,var(--paper),#fff 60%);backdrop-filter:blur(calc(3*var(--u)));box-shadow:0 calc(1*var(--u)) calc(2*var(--u)) rgba(40,40,90,.06),0 calc(5*var(--u)) calc(10*var(--u)) rgba(40,40,90,.12);animation:fin-portfolio-donut-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .donut{position:absolute;left:calc(21*var(--u));top:calc(5*var(--u));width:calc(44*var(--u));height:calc(44*var(--u))}
.v-fin-portfolio-donut .donut > svg{position:absolute;inset:0;width:100%;height:100%}
.v-fin-portfolio-donut .before{animation:fin-portfolio-donut-before 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-portfolio-donut .after{animation:fin-portfolio-donut-after 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-portfolio-donut .mid{position:absolute;inset:0;display:grid;place-items:center;text-align:center}
.v-fin-portfolio-donut .mid > div{grid-area:1/1}
.v-fin-portfolio-donut .mid b{display:block;font-size:calc(6.4*var(--u));font-weight:700;letter-spacing:-.04em;line-height:1.2;white-space:nowrap}
.v-fin-portfolio-donut .mid span{display:block;margin-top:calc(.4*var(--u));font-size:calc(2.6*var(--u));color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-fin-portfolio-donut .m1 b{color:#E0605F}
.v-fin-portfolio-donut .m1{animation:fin-portfolio-donut-m1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .m2{animation:fin-portfolio-donut-m2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .m2 b{font-size:calc(5.6*var(--u))}
.v-fin-portfolio-donut .m2 .ok{display:block;margin:0 auto calc(1*var(--u));width:calc(5*var(--u));height:calc(5*var(--u))}
.v-fin-portfolio-donut .leg{position:absolute;left:calc(7*var(--u));right:calc(7*var(--u));top:calc(53*var(--u))}
.v-fin-portfolio-donut .li{display:flex;align-items:center;height:calc(5.4*var(--u));font-size:calc(3*var(--u))}
.v-fin-portfolio-donut .li i{width:calc(2.4*var(--u));height:calc(2.4*var(--u));border-radius:calc(.8*var(--u));margin-right:calc(2*var(--u))}
.v-fin-portfolio-donut .li .n{width:calc(16*var(--u));font-weight:500}
.v-fin-portfolio-donut .track{position:relative;flex:1;height:calc(1.4*var(--u));border-radius:calc(1*var(--u));background:color-mix(in srgb,var(--ink) 8%,transparent)}
.v-fin-portfolio-donut .fill{position:absolute;inset:0;border-radius:calc(1*var(--u));transform-origin:0 50%;animation:fin-portfolio-donut-bar 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-portfolio-donut .tick{position:absolute;top:calc(-.8*var(--u));bottom:calc(-.8*var(--u));width:calc(.45*var(--u));margin-left:calc(-.22*var(--u));border-radius:calc(.3*var(--u));background:var(--ink);opacity:.55}
.v-fin-portfolio-donut .pc{position:relative;width:calc(10*var(--u));height:calc(3.6*var(--u));text-align:right;font-family:var(--font-mono);font-size:calc(2.7*var(--u))}
.v-fin-portfolio-donut .pc span{position:absolute;right:0;top:0}
.v-fin-portfolio-donut .pc .p1{color:color-mix(in srgb,var(--ink) 45%,transparent);animation:fin-portfolio-donut-p1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .pc .p2{animation:fin-portfolio-donut-p2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .chip{position:absolute;left:7cqw;top:41cqw;display:flex;align-items:center;gap:1cqw;white-space:nowrap;padding:1cqw 1.8cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font-size:1.6cqw;line-height:1.2;animation:fin-portfolio-donut-chip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-portfolio-donut .chip i{flex:none;width:1cqw;height:1cqw;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 .4cqw color-mix(in srgb,var(--secondary) 25%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-fin-portfolio-donut > *{--u:1cqw}
  .v-fin-portfolio-donut .b1{left:-10cqw;top:50cqw;width:60cqw;height:60cqw}
  .v-fin-portfolio-donut .b2{right:-14cqw;top:90cqw;width:62cqw;height:62cqw}
  .v-fin-portfolio-donut .hd{left:8cqw;right:8cqw;width:auto;top:8cqh}
  .v-fin-portfolio-donut .k{font-size:5.4cqw;gap:2.4cqw}
  .v-fin-portfolio-donut .k svg{width:8cqw;height:8cqw}
  .v-fin-portfolio-donut .h{margin-top:2.6cqw;font-size:10.4cqw}
  .v-fin-portfolio-donut .card{left:7cqw;top:36cqh}
  .v-fin-portfolio-donut .chip{left:50cqw;top:auto;bottom:8cqh;translate:-50% 0;font-size:5.4cqw;gap:3cqw;padding:3cqw 5.4cqw;border-radius:10cqw}
  .v-fin-portfolio-donut .chip i{width:3cqw;height:3cqw;box-shadow:0 0 0 1.2cqw color-mix(in srgb,var(--secondary) 25%,transparent)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-portfolio-donut > *{--u:.72cqw}
  .v-fin-portfolio-donut .hd{left:7cqw;right:7cqw;width:auto;top:6cqw}
  .v-fin-portfolio-donut .k{font-size:2.6cqw;gap:1.4cqw}
  .v-fin-portfolio-donut .k svg{width:4cqw;height:4cqw}
  .v-fin-portfolio-donut .h{margin-top:1.6cqw;font-size:6.4cqw}
  .v-fin-portfolio-donut .card{left:calc(50cqw - calc(43*var(--u)));top:28cqw}
  .v-fin-portfolio-donut .chip{left:50cqw;top:auto;bottom:4.4cqw;translate:-50% 0;font-size:2.4cqw;gap:1.4cqw;padding:1.4cqw 2.6cqw}
  .v-fin-portfolio-donut .chip i{width:1.5cqw;height:1.5cqw}
  .v-fin-portfolio-donut .b1{left:0;top:30cqw;width:60cqw;height:60cqw}
  .v-fin-portfolio-donut .b2{right:-10cqw;top:50cqw;width:60cqw;height:60cqw}
}
@keyframes fin-portfolio-donut-b1{0%,100%{transform:translate(0,0)}50%{transform:translate(8cqw,-5cqw)}}
@keyframes fin-portfolio-donut-b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-7cqw,4cqw)}}
@keyframes fin-portfolio-donut-t1{0%{opacity:0;transform:translateY(calc(3*var(--u)))}14%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(calc(-2*var(--u)))}}
@keyframes fin-portfolio-donut-card{0%,4%{opacity:0;transform:translateY(calc(6*var(--u))) scale(.97)}20%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(calc(-2*var(--u))) scale(1)}}
@keyframes fin-portfolio-donut-before{0%,8%{opacity:0;transform:rotate(-90deg) scale(.85)}22%,32%{opacity:1;transform:rotate(0) scale(1)}42%,100%{opacity:0;transform:rotate(40deg) scale(1.06)}}
@keyframes fin-portfolio-donut-after{0%,32%{opacity:0;transform:rotate(-40deg) scale(.94)}42%{opacity:1;transform:rotate(0) scale(1)}86%{opacity:1;transform:rotate(6deg) scale(1)}95%,100%{opacity:0;transform:rotate(10deg) scale(1)}}
@keyframes fin-portfolio-donut-m1{0%,14%{opacity:0;transform:scale(.9)}22%,32%{opacity:1;transform:scale(1)}37%,100%{opacity:0;transform:scale(.9)}}
@keyframes fin-portfolio-donut-m2{0%,38%{opacity:0;transform:scale(.9)}45%,86%{opacity:1;transform:scale(1)}95%,100%{opacity:0;transform:scale(1)}}
@keyframes fin-portfolio-donut-bar{0%,10%{transform:scaleX(0)}24%,32%{transform:scaleX(var(--a))}44%,88%{transform:scaleX(var(--b))}96%,100%{transform:scaleX(0)}}
@keyframes fin-portfolio-donut-p1{0%,14%{opacity:0}22%,32%{opacity:1;transform:translateY(0)}38%,100%{opacity:0;transform:translateY(calc(-2*var(--u)))}}
@keyframes fin-portfolio-donut-p2{0%,34%{opacity:0;transform:translateY(calc(2*var(--u)))}42%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-portfolio-donut-chip{0%,44%{opacity:0;transform:translateY(calc(3*var(--u)))}52%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const finBudgetBars: SceneSpec = {
  id: "fin-budget-bars",
  slug: "mg-fin-budget-bars",
  name: "Budget Category Bars",
  kind: "scene",
  job: "data",
  language: "neo-brutal",
  mechanic: "category-bars-fill-to-limit",
  energy: "punchy",
  settle: 3.4,
  colors: { ink: "#141210", accent: "#FF6B57", secondary: "#7DD9A8", paper: "#FFE45C" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["fintech", "budget", "spending", "bars"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "halcy budgets", maxChars: 20, role: "kicker" },
    { key: "headline", label: "Headline", default: "Know where it goes.", maxChars: 24, role: "headline" },
    { key: "value", label: "Amount left", default: "$204", maxChars: 8, role: "value" },
    { key: "caption", label: "Amount caption", default: "left to spend · 18 days to go", maxChars: 34, role: "caption" },
  ],
  html: `<div class="sun"></div>
<div class="k">${LOGO}<span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="h" data-21st-slot="headline">{{headline|words}}</div>
<div class="left"><b data-21st-slot="value">{{value}}</b><span data-21st-slot="caption">{{caption}}</span></div>
<div class="card"><div class="ch">October spending<b>$1,796 of $2,000</b></div><div class="r r1"><div class="rl"><svg viewBox="0 0 22 22" fill="none" stroke="var(--secondary)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l1.6 8.2a1.5 1.5 0 0 0 1.5 1.2h6.4a1.5 1.5 0 0 0 1.5-1.1L18 7H6.2"/><circle cx="8.5" cy="17.5" r="1.2"/><circle cx="15" cy="17.5" r="1.2"/></svg>Groceries<em><b>$412</b> / $500</em></div><div class="tr"><i style="background:var(--secondary);--s:0.659"></i><s></s></div></div><div class="r r2 over"><div class="rl"><svg viewBox="0 0 22 22" fill="none" stroke="var(--accent)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7a2 2 0 0 0 2 2v6M11 3v7a2 2 0 0 1-2 2M9 3v5M16 18V3c-2 1-3 3.5-3 7h3"/></svg>Dining out<em><b>$268</b> / $250</em></div><div class="tr"><i style="background:var(--accent);--s:0.858"></i><s></s></div></div><div class="r r3"><div class="rl"><svg viewBox="0 0 22 22" fill="none" stroke="#8FB8FF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="12" height="12" rx="3"/><path d="M5 10h12M8 18l-1.5 2M14 18l1.5 2"/><circle cx="8.5" cy="12.6" r=".6"/><circle cx="13.5" cy="12.6" r=".6"/></svg>Transport<em><b>$96</b> / $150</em></div><div class="tr"><i style="background:#8FB8FF;--s:0.512"></i><s></s></div></div><div class="r r4"><div class="rl"><svg viewBox="0 0 22 22" fill="none" stroke="#C9A6FF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a2 2 0 0 0 0 4V15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.5a2 2 0 0 0 0-4z"/><path d="M13 6v11"/></svg>Fun<em><b>$140</b> / $200</em></div><div class="tr"><i style="background:#C9A6FF;--s:0.560"></i><s></s></div></div><div class="r r5"><div class="rl"><svg viewBox="0 0 22 22" fill="none" stroke="#FFD24C" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.5H19l-4.4 3.3 1.7 5.4L12 14l-4.3 3.2 1.7-5.4L5 8.5h5.2z"/></svg>Bills<em><b>$880</b> / $900</em></div><div class="tr"><i style="background:#FFD24C;--s:0.782"></i><s></s></div></div></div>
<div class="toast"><i></i><span><b>Dining is $18 over.</b> Cover it from Fun?</span><u>Move $18</u></div>`,
  css: `
.v-fin-budget-bars{color:var(--ink);font-family:var(--font-body)}
.v-fin-budget-bars > *{--u:1cqw}
.v-fin-budget-bars[data-backdrop="on"]{background:var(--paper)}
.v-fin-budget-bars[data-backdrop="off"] .sun{display:none}
.v-fin-budget-bars .sun{position:absolute;left:-12cqw;bottom:-22cqw;width:52cqw;height:52cqw;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--paper),#fff 55%) 0%,transparent 65%);animation:fin-budget-bars-sun 6s ease-in-out infinite}
.v-fin-budget-bars .k{position:absolute;left:6cqw;top:7cqw;display:flex;align-items:center;gap:.9cqw;font-size:1.5cqw;line-height:1.2;font-weight:600;animation:fin-budget-bars-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-budget-bars .k svg{width:2.4cqw;height:2.4cqw;flex:none}
.v-fin-budget-bars .h{position:absolute;left:6cqw;top:11.4cqw;width:36cqw;font-family:var(--font-display);font-size:4.9cqw;font-weight:800;line-height:1.2;letter-spacing:-.04em;animation:fin-budget-bars-t2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-budget-bars .h .w:last-child{display:inline-block;padding:0 .16em;margin-left:-.05em;border-radius:.2em;background:var(--ink);color:var(--paper);transform:rotate(-2deg)}
.v-fin-budget-bars .left{position:absolute;left:6cqw;top:30cqw;width:36cqw;animation:fin-budget-bars-t3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-budget-bars .left b{display:block;font-family:var(--font-display);font-size:5.2cqw;font-weight:800;letter-spacing:-.04em;line-height:1.2}
.v-fin-budget-bars .left span{display:block;margin-top:.4cqw;font-size:1.5cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 65%,transparent)}
.v-fin-budget-bars .card{position:absolute;left:45cqw;top:5cqw;width:calc(49*var(--u));height:calc(41.5*var(--u));box-sizing:border-box;padding:calc(2.8*var(--u)) calc(3*var(--u));border-radius:calc(2.6*var(--u));background:var(--ink);color:var(--paper);box-shadow:0 calc(.6*var(--u)) calc(1*var(--u)) rgba(60,45,0,.15),0 calc(3*var(--u)) calc(6*var(--u)) rgba(60,45,0,.25);animation:fin-budget-bars-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-budget-bars .ch{display:flex;justify-content:space-between;align-items:baseline;font-size:calc(1.3*var(--u));color:color-mix(in srgb,var(--paper) 58%,transparent)}
.v-fin-budget-bars .ch b{font-size:calc(2.1*var(--u));color:var(--paper);font-weight:600}
.v-fin-budget-bars .r{margin-top:calc(2.2*var(--u))}
.v-fin-budget-bars .r + .r{margin-top:calc(1.75*var(--u))}
.v-fin-budget-bars .rl{display:flex;align-items:center;font-size:calc(1.35*var(--u))}
.v-fin-budget-bars .rl svg{width:calc(1.9*var(--u));height:calc(1.9*var(--u));margin-right:calc(1*var(--u))}
.v-fin-budget-bars .rl em{margin-left:auto;font-style:normal;font-family:var(--font-mono);font-size:calc(1.2*var(--u));color:color-mix(in srgb,var(--paper) 55%,transparent)}
.v-fin-budget-bars .rl em b{color:var(--paper);font-weight:500}
.v-fin-budget-bars .over .rl em b{color:var(--accent)}
.v-fin-budget-bars .tr{position:relative;margin-top:calc(.8*var(--u));height:calc(1.2*var(--u));border-radius:calc(1*var(--u));background:color-mix(in srgb,var(--paper) 10%,transparent)}
.v-fin-budget-bars .tr i{position:absolute;inset:0;border-radius:calc(1*var(--u));transform-origin:0 50%}
.v-fin-budget-bars .tr s{position:absolute;left:80%;top:calc(-.5*var(--u));bottom:calc(-.5*var(--u));width:calc(.3*var(--u));border-radius:calc(.2*var(--u));background:color-mix(in srgb,var(--paper) 38%,transparent)}
.v-fin-budget-bars .toast{position:absolute;left:30cqw;top:40cqw;display:flex;align-items:center;gap:calc(1.2*var(--u));padding:calc(1*var(--u)) calc(1*var(--u)) calc(1*var(--u)) calc(1.6*var(--u));border-radius:calc(1.8*var(--u));background:#FFFFFF;color:#141210;font-size:calc(1.35*var(--u));white-space:nowrap;box-shadow:0 calc(1.6*var(--u)) calc(3.4*var(--u)) rgba(60,45,0,.3);animation:fin-budget-bars-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-budget-bars .toast i{flex:none;width:calc(1.2*var(--u));height:calc(1.2*var(--u));border-radius:50%;background:var(--accent)}
.v-fin-budget-bars .toast b{font-weight:600}
.v-fin-budget-bars .toast u{text-decoration:none;padding:calc(.7*var(--u)) calc(1.3*var(--u));border-radius:calc(1.2*var(--u));background:#141210;color:#FFFFFF;font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-fin-budget-bars .k{left:8cqw;top:7.5cqh;font-size:5.4cqw;gap:3cqw}
  .v-fin-budget-bars .k svg{width:8cqw;height:8cqw}
  .v-fin-budget-bars .h{left:8cqw;right:8cqw;width:auto;top:13cqh;font-size:13cqw}
  .v-fin-budget-bars .card{--u:1.66cqw;left:calc(50cqw - calc(24.5*var(--u)));top:36cqh}
  .v-fin-budget-bars .toast{--u:2cqw;left:50cqw;top:72.5cqh;translate:-50% 0}
  .v-fin-budget-bars .left{left:8cqw;right:8cqw;width:auto;top:auto;bottom:6cqh}
  .v-fin-budget-bars .left b{font-size:15cqw}
  .v-fin-budget-bars .left span{font-size:5.4cqw}
  .v-fin-budget-bars .sun{left:-30cqw;bottom:-30cqw;width:120cqw;height:120cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-budget-bars .k{left:6cqw;top:6cqw;font-size:2.4cqw;gap:1.4cqw}
  .v-fin-budget-bars .k svg{width:3.8cqw;height:3.8cqw}
  .v-fin-budget-bars .h{left:6cqw;right:6cqw;width:auto;top:12cqw;font-size:8cqw}
  .v-fin-budget-bars .card{--u:1.08cqw;left:auto;right:6cqw;top:34cqw}
  .v-fin-budget-bars .left{left:6cqw;top:40cqw;width:32cqw}
  .v-fin-budget-bars .left b{font-size:10cqw}
  .v-fin-budget-bars .left span{font-size:2.4cqw}
  .v-fin-budget-bars .toast{--u:1.3cqw;left:6cqw;top:auto;bottom:5cqw}
  .v-fin-budget-bars .sun{left:-20cqw;bottom:-30cqw;width:90cqw;height:90cqw}
}
@keyframes fin-budget-bars-sun{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(3cqw,-2cqw) scale(1.08)}}
@keyframes fin-budget-bars-t1{0%{opacity:0;transform:translateY(1.5cqw)}12%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-budget-bars-t2{0%,4%{opacity:0;transform:translateY(2.5cqw)}18%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-budget-bars-t3{0%,30%{opacity:0;transform:translateY(2cqw)}40%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-budget-bars-card{0%{opacity:0;transform:translateY(calc(5*var(--u))) rotate(2deg)}16%,86%{opacity:1;transform:translateY(0) rotate(0)}95%,100%{opacity:0;transform:translateY(calc(-2*var(--u))) rotate(0)}}
@keyframes fin-budget-bars-toast{0%,42%{opacity:0;transform:translateY(calc(2*var(--u))) scale(.94)}48%{opacity:1;transform:translateY(calc(-.3*var(--u))) scale(1.02)}52%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
@keyframes fin-budget-bars-g1{0%,16%{transform:scaleX(0)}32%,88%{transform:scaleX(var(--s))}96%,100%{transform:scaleX(0)}}
.v-fin-budget-bars .r1 .tr i{animation:fin-budget-bars-g1 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-budget-bars-g2{0%,20%{transform:scaleX(0)}36%,88%{transform:scaleX(var(--s))}96%,100%{transform:scaleX(0)}}
.v-fin-budget-bars .r2 .tr i{animation:fin-budget-bars-g2 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-budget-bars-g3{0%,24%{transform:scaleX(0)}40%,88%{transform:scaleX(var(--s))}96%,100%{transform:scaleX(0)}}
.v-fin-budget-bars .r3 .tr i{animation:fin-budget-bars-g3 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-budget-bars-g4{0%,28%{transform:scaleX(0)}44%,88%{transform:scaleX(var(--s))}96%,100%{transform:scaleX(0)}}
.v-fin-budget-bars .r4 .tr i{animation:fin-budget-bars-g4 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-budget-bars-g5{0%,32%{transform:scaleX(0)}48%,88%{transform:scaleX(var(--s))}96%,100%{transform:scaleX(0)}}
.v-fin-budget-bars .r5 .tr i{animation:fin-budget-bars-g5 6s cubic-bezier(.2,.8,.2,1) infinite}
`,
};

export const finShieldCta: SceneSpec = {
  id: "fin-shield-cta",
  slug: "mg-fin-shield-cta",
  name: "Security Shield CTA",
  kind: "scene",
  job: "cta",
  language: "aura",
  mechanic: "code-entry-shield-lock-check",
  energy: "default",
  settle: 3.05,
  colors: { ink: "#F1EEFF", accent: "#CFF26B", secondary: "#8C6EFF", paper: "#1A1043" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["fintech", "security", "end-card", "2fa"],
  fields: [
    { key: "brand", label: "Brand", default: "halcy", maxChars: 16, role: "name" },
    { key: "headline", label: "Headline", default: "Your money, locked tight.", maxChars: 30, role: "headline" },
    { key: "body", label: "Body", default: "Two-step sign-in, instant card freeze and fraud alerts that never sleep.", maxChars: 80, role: "body" },
    { key: "cta", label: "Button", default: "Open an account", maxChars: 20, role: "cta" },
  ],
  html: `<div class="stars"></div>
<div class="sec">
  <div class="halo"></div>
  <div class="ring"></div>
  <div class="shield">
    <svg class="base" viewBox="0 0 84 100"><defs><linearGradient id="fin-shield-cta-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="color-mix(in srgb,var(--secondary) 70%,var(--paper))"/><stop offset="1" stop-color="color-mix(in srgb,var(--secondary) 25%,var(--paper))"/></linearGradient><linearGradient id="fin-shield-cta-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--secondary)"/></linearGradient></defs><path d="M42 3 L78 15 V46 C78 70 62 87 42 97 C22 87 6 70 6 46 V15 Z" fill="url(#fin-shield-cta-g)" stroke="url(#fin-shield-cta-s)" stroke-width="2.4" stroke-linejoin="round"/><path d="M42 11 L71 21 V46 C71 65 58 79 42 88" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="1.4" stroke-linecap="round"/></svg>
    <svg class="lock" viewBox="0 0 32 36" fill="none" stroke="#F1EEFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="15" width="24" height="18" rx="4" fill="rgba(241,238,255,.1)"/><path d="M9.5 15V10a6.5 6.5 0 0 1 13 0v5"/><path d="M16 22v4"/></svg>
    <svg class="check" viewBox="0 0 40 32" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17l10 10L35 5"/></svg>
  </div>
  <div class="lbl">Confirm it's you · code sent to your phone</div>
  <div class="code"><div class="box"><span>4</span></div><div class="box"><span>8</span></div><div class="box"><span>2</span></div><div class="box"><span>9</span></div><div class="box"><span>1</span></div><div class="box"><span>7</span></div></div>
  <div class="dev"><i></i>New sign-in approved · Lisbon, 09:41</div>
</div>
<div class="brand">${LOGO}<span data-21st-slot="brand">{{brand}}</span></div>
<div class="h" data-21st-slot="headline">{{headline|words}}</div>
<div class="sub" data-21st-slot="body">{{body}}</div>
<div class="acts"><div class="btn"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></div><span class="url">halcy.money</span></div>`,
  css: `
.v-fin-shield-cta{color:var(--ink);font-family:var(--font-body)}
.v-fin-shield-cta > *{--u:1cqw}
.v-fin-shield-cta[data-backdrop="on"]{background:radial-gradient(90% 110% at 24% 45%,color-mix(in srgb,var(--paper),var(--secondary) 30%) 0%,var(--paper) 45%,color-mix(in srgb,var(--paper),#000 55%) 100%)}
.v-fin-shield-cta .stars{position:absolute;inset:0;opacity:.5;background-image:radial-gradient(color-mix(in srgb,var(--ink) 35%,transparent) 1px,transparent 1.2px);background-size:5.3cqw 5.3cqw;animation:fin-shield-cta-drift 6s linear infinite}
.v-fin-shield-cta[data-backdrop="off"] .stars{display:none}
.v-fin-shield-cta .sec{position:absolute;left:8cqw;top:3cqw;width:calc(32*var(--u));height:calc(47*var(--u))}
.v-fin-shield-cta .halo{position:absolute;left:calc(-3*var(--u));top:calc(-4*var(--u));width:calc(38*var(--u));height:calc(38*var(--u));border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 28%,transparent) 0%,color-mix(in srgb,var(--secondary) 18%,transparent) 35%,transparent 68%);animation:fin-shield-cta-halo 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .ring{position:absolute;left:calc(4*var(--u));top:calc(4*var(--u));width:calc(24*var(--u));height:calc(24*var(--u));border-radius:50%;border:1px solid color-mix(in srgb,var(--accent) 50%,transparent);animation:fin-shield-cta-ring 2s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .shield{position:absolute;left:calc(5.5*var(--u));top:calc(3.5*var(--u));width:calc(21*var(--u));height:calc(25*var(--u));animation:fin-shield-cta-shield 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .shield .base{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 calc(1.6*var(--u)) calc(2.4*var(--u)) rgba(5,2,20,.5))}
.v-fin-shield-cta .lock{position:absolute;left:calc(6.5*var(--u));top:calc(7*var(--u));width:calc(8*var(--u));height:calc(9*var(--u));animation:fin-shield-cta-lock 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .check{position:absolute;left:calc(5.5*var(--u));top:calc(7.5*var(--u));width:calc(10*var(--u));height:calc(8*var(--u));animation:fin-shield-cta-check 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-shield-cta .lbl{position:absolute;left:0;width:calc(32*var(--u));top:calc(31*var(--u));text-align:center;font-size:calc(1.35*var(--u));color:color-mix(in srgb,var(--ink) 62%,transparent);animation:fin-shield-cta-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .code{position:absolute;left:calc(.3*var(--u));top:calc(34.6*var(--u));display:flex;gap:calc(.8*var(--u));animation:fin-shield-cta-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .box{position:relative;width:calc(4.5*var(--u));height:calc(5.8*var(--u));border-radius:calc(1*var(--u));background:color-mix(in srgb,var(--ink) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 18%,transparent);font-family:var(--font-mono);font-size:calc(2.9*var(--u));line-height:calc(5.8*var(--u));text-align:center}
.v-fin-shield-cta .box::after{content:"";position:absolute;inset:0;border-radius:calc(1*var(--u));box-shadow:inset 0 0 0 calc(.2*var(--u)) var(--accent),0 0 calc(1.6*var(--u)) color-mix(in srgb,var(--accent) 35%,transparent);opacity:0;animation:fin-shield-cta-ok 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .dev{position:absolute;left:0;width:calc(32*var(--u));top:calc(43.4*var(--u));display:flex;justify-content:center;align-items:center;gap:calc(.8*var(--u));font-size:calc(1.2*var(--u));color:color-mix(in srgb,var(--ink) 55%,transparent);animation:fin-shield-cta-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .dev i{width:calc(.9*var(--u));height:calc(.9*var(--u));border-radius:50%;background:var(--accent)}
.v-fin-shield-cta .brand{position:absolute;left:50cqw;top:9.5cqw;display:flex;align-items:center;gap:1.2cqw;font-family:var(--font-display);font-size:2.6cqw;line-height:1.2;font-weight:700;letter-spacing:-.03em;animation:fin-shield-cta-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .brand svg{width:4cqw;height:4cqw;flex:none}
.v-fin-shield-cta .h{position:absolute;left:50cqw;top:16cqw;width:42cqw;font-family:var(--font-display);font-size:5.4cqw;font-weight:700;letter-spacing:-.045em;line-height:1.2;animation:fin-shield-cta-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .h .w:nth-last-child(-n+2){color:var(--accent)}
.v-fin-shield-cta .sub{position:absolute;left:50cqw;top:30.5cqw;width:38cqw;font-size:1.55cqw;line-height:1.5;color:color-mix(in srgb,var(--ink) 65%,transparent);animation:fin-shield-cta-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .acts{position:absolute;left:50cqw;top:39.5cqw;display:flex;align-items:center;gap:2cqw;animation:fin-shield-cta-c4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .btn{position:relative;overflow:hidden;display:flex;align-items:center;gap:1cqw;padding:1.5cqw 2.4cqw;border-radius:3cqw;background:var(--accent);color:var(--paper);font-size:1.65cqw;line-height:1.2;font-weight:600;white-space:nowrap;box-shadow:0 0 3cqw color-mix(in srgb,var(--accent) 35%,transparent);animation:fin-shield-cta-press 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fin-shield-cta .btn svg{width:1.7cqw;height:1.7cqw;flex:none}
.v-fin-shield-cta .btn::after{content:"";position:absolute;top:0;bottom:0;left:-40%;width:30%;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.65),rgba(255,255,255,0));transform:skewX(-20deg);animation:fin-shield-cta-shine 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fin-shield-cta .url{font-family:var(--font-mono);font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 58%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-fin-shield-cta .brand{left:8cqw;top:7cqh;font-size:7cqw;gap:3cqw}
  .v-fin-shield-cta .brand svg{width:10cqw;height:10cqw}
  .v-fin-shield-cta .h{left:8cqw;right:8cqw;width:auto;top:14cqh;font-size:11.5cqw}
  .v-fin-shield-cta .sec{--u:1.5cqw;left:calc(50cqw - calc(16*var(--u)));top:31cqh}
  .v-fin-shield-cta .sub{left:8cqw;right:8cqw;width:auto;top:auto;bottom:16cqh;font-size:5.4cqw;line-height:1.35}
  .v-fin-shield-cta .acts{left:8cqw;top:auto;bottom:5.5cqh}
  .v-fin-shield-cta .btn{font-size:5.6cqw;gap:3cqw;padding:3.4cqw 6.4cqw;border-radius:10cqw}
  .v-fin-shield-cta .btn svg{width:5.4cqw;height:5.4cqw}
  .v-fin-shield-cta .url{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fin-shield-cta .sec{--u:1.18cqw;left:5cqw;top:calc(50cqh - calc(25*var(--u)))}
  .v-fin-shield-cta .brand{left:50cqw;top:16cqw;font-size:3.6cqw;gap:1.6cqw}
  .v-fin-shield-cta .brand svg{width:5.4cqw;height:5.4cqw}
  .v-fin-shield-cta .h{left:50cqw;width:44cqw;top:25cqw;font-size:7cqw}
  .v-fin-shield-cta .sub{left:50cqw;width:44cqw;top:52cqw;font-size:2.4cqw}
  .v-fin-shield-cta .acts{left:50cqw;top:68cqw}
  .v-fin-shield-cta .btn{font-size:2.6cqw;gap:1.4cqw;padding:2cqw 3.4cqw;border-radius:5cqw}
  .v-fin-shield-cta .btn svg{width:2.6cqw;height:2.6cqw}
  .v-fin-shield-cta .url{display:none}
}
@keyframes fin-shield-cta-drift{0%{transform:translateY(0)}100%{transform:translateY(-5.3cqw)}}
@keyframes fin-shield-cta-halo{0%,30%{opacity:.35;transform:scale(.85)}40%,86%{opacity:1;transform:scale(1.05)}100%{opacity:.35;transform:scale(.85)}}
@keyframes fin-shield-cta-ring{0%{opacity:.8;transform:scale(.9)}100%{opacity:0;transform:scale(1.6)}}
@keyframes fin-shield-cta-shield{0%{opacity:0;transform:translateY(calc(3*var(--u))) scale(.9)}14%{opacity:1;transform:translateY(0) scale(1)}35%{transform:translateY(0) scale(1)}39%{transform:translateY(0) scale(1.06)}44%{transform:translateY(0) scale(1)}70%{transform:translateY(calc(-.6*var(--u))) scale(1)}86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(calc(-1*var(--u))) scale(.96)}}
@keyframes fin-shield-cta-lock{0%,34%{opacity:1;transform:scale(1)}39%,100%{opacity:0;transform:scale(.6)}}
@keyframes fin-shield-cta-check{0%,37%{clip-path:inset(0 100% 0 0);opacity:1}47%,88%{clip-path:inset(0 0 0 0);opacity:1}95%{clip-path:inset(0 0 0 0);opacity:0}96%,100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes fin-shield-cta-fade{0%{opacity:0;transform:translateY(calc(1.2*var(--u)))}10%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes fin-shield-cta-ok{0%,35%{opacity:0}39%,86%{opacity:1}95%,100%{opacity:0}}
@keyframes fin-shield-cta-c1{0%,36%{opacity:0;transform:translateY(2cqw)}44%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-shield-cta-c2{0%,38%{opacity:0;transform:translateY(2.5cqw);filter:blur(.6cqw)}47%,86%{opacity:1;transform:translateY(0);filter:blur(0)}95%,100%{opacity:0;transform:translateY(-1cqw);filter:blur(0)}}
@keyframes fin-shield-cta-c3{0%,40%{opacity:0;transform:translateY(2cqw)}48%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-shield-cta-c4{0%,41%{opacity:0;transform:translateY(2cqw)}49%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fin-shield-cta-press{0%,68%{transform:scale(1)}70%{transform:scale(.95)}73%,100%{transform:scale(1)}}
@keyframes fin-shield-cta-shine{0%,52%{transform:translateX(0) skewX(-20deg)}66%,100%{transform:translateX(560%) skewX(-20deg)}}
@keyframes fin-shield-cta-d1{0%,13.5%{opacity:0;transform:translateY(calc(1.2*var(--u))) scale(.7)}16.5%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
.v-fin-shield-cta .box:nth-child(1) span{display:block;animation:fin-shield-cta-d1 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-shield-cta-d2{0%,17.0%{opacity:0;transform:translateY(calc(1.2*var(--u))) scale(.7)}20.0%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
.v-fin-shield-cta .box:nth-child(2) span{display:block;animation:fin-shield-cta-d2 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-shield-cta-d3{0%,20.5%{opacity:0;transform:translateY(calc(1.2*var(--u))) scale(.7)}23.5%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
.v-fin-shield-cta .box:nth-child(3) span{display:block;animation:fin-shield-cta-d3 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-shield-cta-d4{0%,24.0%{opacity:0;transform:translateY(calc(1.2*var(--u))) scale(.7)}27.0%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
.v-fin-shield-cta .box:nth-child(4) span{display:block;animation:fin-shield-cta-d4 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-shield-cta-d5{0%,27.5%{opacity:0;transform:translateY(calc(1.2*var(--u))) scale(.7)}30.5%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
.v-fin-shield-cta .box:nth-child(5) span{display:block;animation:fin-shield-cta-d5 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fin-shield-cta-d6{0%,31.0%{opacity:0;transform:translateY(calc(1.2*var(--u))) scale(.7)}34.0%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(0) scale(1)}}
.v-fin-shield-cta .box:nth-child(6) span{display:block;animation:fin-shield-cta-d6 6s cubic-bezier(.2,.8,.2,1) infinite}
`,
};

export const FINANCE_SCENES: SceneSpec[] = [finCardReveal, finBalanceChart, finTxnFeed, finSavingsRing, finTicker, finInvoicePaid, finFxBoard, finPortfolioDonut, finBudgetBars, finShieldCta];
