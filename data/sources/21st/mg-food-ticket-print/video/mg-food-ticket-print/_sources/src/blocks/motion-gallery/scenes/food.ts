// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const foodSteamBowl: SceneSpec = {
  id: "food-steam-bowl",
  slug: "mg-food-steam-bowl",
  name: "Steaming Bowl Hero",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "dish-slide-in-steam-rise",
  energy: "calm",
  settle: 4.4,
  colors: { ink: "#1D1F2B", accent: "#C93220", secondary: "#34407E", paper: "#F4EEE3" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["restaurant", "dish", "hero", "menu"],
  fields: [
    { key: "headline", label: "Headline", default: "Twelve hours of slow broth, one bowl.", maxChars: 44, role: "headline" },
    { key: "brand", label: "Brand", default: "fennel. ramen counter", maxChars: 24, role: "label" },
    { key: "cta", label: "Button", default: "Order for pickup", maxChars: 20, role: "cta" },
    { key: "price", label: "Price", default: "$16", maxChars: 6, role: "value" },
  ],
  html: `<div class="sun"></div>
<div class="copy"><div class="brand"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" class="bdot"/><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" class="bleaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><b data-21st-slot="brand">{{brand}}</b></div>
<h2 class="h"><span class="hs" data-21st-slot="headline">{{headline|words}}</span></h2>
<div class="cta"><span class="btn"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><i class="shine"></i></span><span class="price"><small>from</small><span class="pv" data-21st-slot="price">{{price}}</span></span></div></div>
<div class="dish">
  <div class="steam">
    <i class="ws w1"><svg viewBox="0 0 20 64" preserveAspectRatio="none"><path d="M10 62C3 52 17 44 10 34S3 16 10 4" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/></svg></i>
    <i class="ws w2"><svg viewBox="0 0 20 64" preserveAspectRatio="none"><path d="M10 62C17 52 3 44 10 34S17 16 10 4" fill="none" stroke="#fff" stroke-width="5.4" stroke-linecap="round"/></svg></i>
    <i class="ws w3"><svg viewBox="0 0 20 64" preserveAspectRatio="none"><path d="M10 62C4 54 16 46 10 36S5 18 11 6" fill="none" stroke="#fff" stroke-width="4.6" stroke-linecap="round"/></svg></i>
  </div>
  <i class="shadow"></i>
  <svg class="bowl" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="food-sb-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="st1"/><stop offset="1" class="st2"/></linearGradient>
      <radialGradient id="food-sb-broth" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#f3b860"/><stop offset=".55" stop-color="#dc8c36"/><stop offset="1" stop-color="#a9561b"/></radialGradient>
    </defs>
    <path d="M28 120C34 232 112 280 200 282S366 232 372 120Z" fill="url(#food-sb-body)"/>
    <path d="M150 278Q200 294 250 278" fill="none" class="foot" stroke-width="9" stroke-linecap="round"/>
    <path d="M42 176C104 222 296 222 358 176" fill="none" class="band" stroke-width="3.2"/>
    <path d="M56 194C114 236 286 236 344 194" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="3" stroke-dasharray="1 9" stroke-linecap="round"/>
    <path d="M52 150C62 204 100 240 150 262" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="200" cy="120" rx="172" ry="58" class="rim"/>
    <ellipse cx="200" cy="123" rx="161" ry="50" class="inner"/>
    <ellipse cx="200" cy="128" rx="152" ry="44" fill="url(#food-sb-broth)"/>
    <g class="tops">
      <path d="M92 60L146 50L152 126L100 134Z" fill="#1b2620"/>
      <path d="M100 66L140 58" stroke="rgba(255,255,255,.14)" stroke-width="2"/>
      <ellipse cx="128" cy="136" rx="38" ry="21" fill="#f2d2bb"/>
      <ellipse cx="128" cy="136" rx="33" ry="17" fill="#b8664a"/>
      <ellipse cx="124" cy="134" rx="16" ry="8" fill="#d48a68"/>
      <ellipse cx="170" cy="148" rx="36" ry="20" fill="#f2d2bb"/>
      <ellipse cx="170" cy="148" rx="31" ry="16" fill="#c06e50"/>
      <path d="M150 146q14-8 34 2" stroke="#e6a383" stroke-width="3" fill="none"/>
      <path d="M206 158q8-7 16 0t16 0t16 0t16 0t16 0" stroke="#f3d38c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M214 166q8-6 16 0t16 0t16 0t16 0" stroke="#e9c477" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="208" cy="106" rx="19" ry="12" fill="#fbf6ee"/>
      <path d="M200 106c2-5 10-6 13-2s-1 8-6 7" stroke="#ec6d8c" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <ellipse cx="264" cy="112" rx="28" ry="18" fill="#fbf7ee"/>
      <ellipse cx="264" cy="113" rx="15" ry="10" fill="#f0901c"/>
      <ellipse cx="263" cy="112" rx="8" ry="5.5" fill="#f9b847"/>
      <ellipse cx="257" cy="108" rx="4" ry="2" fill="rgba(255,255,255,.7)"/>
      <ellipse cx="302" cy="136" rx="26" ry="17" fill="#f7f1e4"/>
      <ellipse cx="302" cy="137" rx="14" ry="9" fill="#ec8a17"/>
      <ellipse cx="301" cy="136" rx="7" ry="5" fill="#f8b443"/>
      <path d="M250 104q6 5 12 0M266 120q6 4 12-1" stroke="#c42d1f" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <g fill="#b9df8b" stroke="#4f8c33" stroke-width="2.4"><circle cx="188" cy="130" r="4"/><circle cx="199" cy="137" r="4"/><circle cx="226" cy="128" r="4"/><circle cx="236" cy="140" r="4"/><circle cx="176" cy="118" r="3.6"/><circle cx="244" cy="124" r="3.6"/><circle cx="150" cy="112" r="3.6"/><circle cx="276" cy="152" r="3.6"/></g>
      <g fill="#f6ecd2"><ellipse cx="218" cy="122" rx="2" ry="1.2"/><ellipse cx="230" cy="116" rx="2" ry="1.2"/><ellipse cx="212" cy="134" rx="2" ry="1.2"/><ellipse cx="160" cy="124" rx="2" ry="1.2"/><ellipse cx="284" cy="120" rx="2" ry="1.2"/></g>
      <g fill="rgba(255,226,150,.55)"><ellipse cx="88" cy="150" rx="8" ry="3"/><ellipse cx="330" cy="112" rx="6" ry="2.4"/><ellipse cx="312" cy="160" rx="7" ry="2.6"/></g>
    </g>
    <path d="M58 98Q200 48 342 98" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="3" stroke-linecap="round"/>
  </svg>
  <svg class="chop" viewBox="0 0 400 300">
    <polygon points="237,93.8 468.4,-9.7 471.6,-2.3 239,98.2" fill="#dcb07a"/>
    <polygon points="251,103.8 478.4,.4 481.6,7.7 253,108.2" fill="#c99659"/>
    <polygon points="418.5,12.7 468.4,-9.7 471.6,-2.3 421.5,19.4" class="tip"/>
    <polygon points="428.5,23.1 478.4,.4 481.6,7.7 431.5,29.7" class="tip"/>
  </svg>
  <div class="hanko"><span>味</span></div>
</div>`,
  css: `
.v-food-steam-bowl{color:var(--ink);font-family:var(--font-body)}
.v-food-steam-bowl[data-backdrop="on"]{background:radial-gradient(ellipse 55% 75% at 74% 52%,color-mix(in srgb,var(--paper) 55%,#fff) 0%,transparent 70%),linear-gradient(180deg,var(--paper),color-mix(in srgb,var(--paper) 90%,var(--ink)))}
.v-food-steam-bowl .sun{position:absolute;left:55cqw;top:4.5cqw;width:36cqw;height:36cqw;border-radius:50%;background:radial-gradient(circle at 38% 32%,color-mix(in srgb,var(--accent) 72%,#fff) 0%,var(--accent) 62%,color-mix(in srgb,var(--accent) 86%,#000) 100%);box-shadow:0 0 6cqw color-mix(in srgb,var(--accent) 24%,transparent);animation:food-steam-bowl-sun 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .copy{position:absolute;left:7cqw;top:7cqw;bottom:7cqw;width:41cqw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:1.8cqw}
.v-food-steam-bowl .brand{display:flex;align-items:center;gap:.8cqw;font-size:1.5cqw;line-height:1.2;animation:food-steam-bowl-in0 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .brand svg{flex:none;width:2.4cqw;height:2.4cqw}
.v-food-steam-bowl .bdot{fill:var(--accent)}
.v-food-steam-bowl .bleaf{stroke:var(--paper)}
.v-food-steam-bowl .brand b{font-weight:600;letter-spacing:-.01em;white-space:nowrap}
.v-food-steam-bowl .h{align-self:stretch;margin:0;font-family:var(--font-display);font-weight:400;font-size:6.4cqw;line-height:1.2;letter-spacing:-.015em}
.v-food-steam-bowl .hs{display:block;padding-block:.26em;margin-block:-.26em}
.v-food-steam-bowl .h .w{display:inline-block;line-height:1.2;--delay:calc(.3s + var(--i) * .12s);animation:food-steam-bowl-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .h .w:last-child{font-style:italic;color:var(--accent)}
.v-food-steam-bowl .cta{margin-top:.6cqw;display:flex;align-items:center;gap:2cqw;animation:food-steam-bowl-in5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .btn{flex:none;position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:.8cqw;padding:1.15cqw 1.9cqw;border-radius:4cqw;background:var(--ink);color:var(--paper);font-size:1.5cqw;line-height:1.2;font-weight:500;white-space:nowrap;box-shadow:0 .6cqw 1.6cqw color-mix(in srgb,var(--ink) 25%,transparent)}
.v-food-steam-bowl .btn svg{width:1.4cqw;height:1.4cqw;flex:none}
.v-food-steam-bowl .shine{position:absolute;inset:0;background:linear-gradient(100deg,rgba(255,255,255,0) 30%,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 70%);transform:translateX(-120%);animation:food-steam-bowl-shine 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-steam-bowl .price{display:flex;align-items:center;font-family:var(--font-display);font-size:3.4cqw;line-height:1.2;white-space:nowrap}
.v-food-steam-bowl .price small{font-family:var(--font-body);font-size:1.2cqw;color:color-mix(in srgb,var(--ink) 55%,transparent);margin-right:.6cqw}
.v-food-steam-bowl .dish{position:absolute;left:51cqw;top:20cqw;width:44em;height:33em;font-size:1cqw;transform-origin:50% 80%;animation:food-steam-bowl-dish 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .steam{position:absolute;left:10em;top:-12em;width:24em;height:26em}
.v-food-steam-bowl .ws{position:absolute;bottom:0;width:6em;height:18em;filter:blur(.55em);transform-origin:50% 100%;opacity:0}
.v-food-steam-bowl .ws svg{display:block;width:100%;height:100%;overflow:visible}
.v-food-steam-bowl .w1{left:3.5em;animation:food-steam-bowl-w1 6s cubic-bezier(.3,.5,.45,1) infinite}
.v-food-steam-bowl .w2{left:9.8em;height:20em;animation:food-steam-bowl-w2 6s cubic-bezier(.3,.5,.45,1) infinite}
.v-food-steam-bowl .w3{left:15.8em;height:16em;animation:food-steam-bowl-w3 6s cubic-bezier(.3,.5,.45,1) infinite}
.v-food-steam-bowl .bowl,.v-food-steam-bowl .chop{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible}
.v-food-steam-bowl .st1{stop-color:color-mix(in srgb,var(--secondary) 88%,#fff)}
.v-food-steam-bowl .st2{stop-color:color-mix(in srgb,var(--secondary) 45%,#000)}
.v-food-steam-bowl .foot{stroke:color-mix(in srgb,var(--secondary) 30%,#000)}
.v-food-steam-bowl .band{stroke:var(--accent)}
.v-food-steam-bowl .rim{fill:color-mix(in srgb,var(--secondary) 85%,#fff)}
.v-food-steam-bowl .inner{fill:color-mix(in srgb,var(--secondary) 35%,#000)}
.v-food-steam-bowl .tip{fill:var(--ink)}
.v-food-steam-bowl .chop{filter:drop-shadow(0 .5em .4em rgba(40,20,10,.25));animation:food-steam-bowl-chop 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .tops{transform-box:fill-box;transform-origin:50% 50%;animation:food-steam-bowl-tops 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .shadow{position:absolute;left:6%;right:6%;bottom:-1.8em;height:5em;border-radius:50%;background:radial-gradient(closest-side,rgba(60,30,10,.32),rgba(60,30,10,0))}
.v-food-steam-bowl .hanko{position:absolute;left:-2.6em;top:-12em;width:5.2em;height:5.2em;border-radius:.6em;background:var(--accent);color:var(--paper);display:grid;place-items:center;font-family:var(--font-display);font-size:1em;line-height:1;box-shadow:inset 0 0 0 .4em var(--accent),inset 0 0 0 .55em color-mix(in srgb,var(--paper) 65%,transparent);animation:food-steam-bowl-hanko 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-steam-bowl .hanko span{font-size:2.8em}
@container (max-aspect-ratio: 4/5){
  .v-food-steam-bowl .copy{left:8cqw;right:8cqw;width:auto;top:9cqh;bottom:7cqh;justify-content:flex-start;gap:2.6cqw}
  .v-food-steam-bowl .brand{font-size:5.6cqw;gap:2.4cqw}
  .v-food-steam-bowl .brand svg{width:8cqw;height:8cqw}
  .v-food-steam-bowl .h{font-size:11cqw;line-height:1.14}
  .v-food-steam-bowl .h .w{line-height:1.2}
  .v-food-steam-bowl .sun{left:15cqw;top:42cqh;width:70cqw;height:70cqw}
  .v-food-steam-bowl .dish{left:8cqw;top:47cqh;font-size:1.9cqw}
  .v-food-steam-bowl .hanko{left:auto;right:-1em;top:-9em}
  .v-food-steam-bowl .cta{margin-top:auto;align-self:stretch;justify-content:space-between;align-items:flex-end;gap:2.4cqw}
  .v-food-steam-bowl .btn{font-size:5.4cqw;padding:3.2cqw 4.4cqw;gap:2cqw;border-radius:12cqw}
  .v-food-steam-bowl .btn svg{width:4.4cqw;height:4.4cqw}
  .v-food-steam-bowl .price{font-size:11cqw;flex-direction:column;align-items:flex-end;line-height:1.1}
  .v-food-steam-bowl .price small{font-size:4.2cqw;margin-right:0}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-steam-bowl .copy{top:7cqw;bottom:8cqw;width:66cqw;justify-content:flex-start;gap:2cqw}
  .v-food-steam-bowl .brand{font-size:2.6cqw;gap:1.4cqw}
  .v-food-steam-bowl .brand svg{width:4cqw;height:4cqw}
  .v-food-steam-bowl .h{font-size:8.6cqw}
  .v-food-steam-bowl .hanko{left:auto;right:-1em;top:-9em}
  .v-food-steam-bowl .sun{left:46cqw;top:36cqw;width:50cqw;height:50cqw}
  .v-food-steam-bowl .dish{left:37cqw;top:56cqw;font-size:1.36cqw}
  .v-food-steam-bowl .cta{margin-top:auto;flex-direction:column;align-items:flex-start;gap:2.4cqw}
  .v-food-steam-bowl .btn{font-size:2.6cqw;padding:1.8cqw 3cqw;gap:1.2cqw}
  .v-food-steam-bowl .btn svg{width:2.4cqw;height:2.4cqw}
  .v-food-steam-bowl .price{font-size:6cqw}
  .v-food-steam-bowl .price small{font-size:2.2cqw}
}
@keyframes food-steam-bowl-sun{0%{transform:scale(.7);opacity:0}14%{transform:scale(1);opacity:1}84%{transform:scale(1.03);opacity:1}96%,100%{transform:scale(.9);opacity:0}}
@keyframes food-steam-bowl-dish{0%{transform:translate(12em,2em) rotate(7deg);opacity:0}20%{transform:translate(0,0) rotate(0deg);opacity:1}84%{transform:translate(0,-.6em) rotate(-1deg);opacity:1}96%,100%{transform:translate(-4em,2em) rotate(-3deg);opacity:0}}
@keyframes food-steam-bowl-tops{0%,10%{transform:scale(.8);opacity:0}26%,96%{transform:scale(1);opacity:1}97%,100%{transform:scale(.8);opacity:0}}
@keyframes food-steam-bowl-chop{0%,16%{transform:translate(18em,-6em);opacity:0}34%{transform:translate(0,0);opacity:1}84%{transform:translate(.4em,-.2em);opacity:1}96%,100%{transform:translate(10em,-3em);opacity:0}}
@keyframes food-steam-bowl-w1{0%,18%{transform:translateY(0) scaleX(.7);opacity:0}25%{opacity:.8}41%{transform:translateY(-12em) scaleX(1.5);opacity:0}41.01%{transform:translateY(0) scaleX(.7);opacity:0}50%{opacity:.8}71%{transform:translateY(-12em) scaleX(1.5);opacity:0}71.01%,100%{transform:translateY(0) scaleX(.7);opacity:0}}
@keyframes food-steam-bowl-w2{0%,30%{transform:translateY(0) scaleX(.7);opacity:0}39%{opacity:.7}60%{transform:translateY(-13em) scaleX(1.6);opacity:0}60.01%{transform:translateY(0) scaleX(.7);opacity:0}69%{opacity:.7}90%{transform:translateY(-13em) scaleX(1.6);opacity:0}90.01%,100%{transform:translateY(0) scaleX(.7);opacity:0}}
@keyframes food-steam-bowl-w3{0%,36%{transform:translateY(0) scaleX(.7);opacity:0}45%{opacity:.65}66%{transform:translateY(-11em) scaleX(1.4);opacity:0}66.01%{transform:translateY(0) scaleX(.7);opacity:0}75%{opacity:.65}92%{transform:translateY(-9em) scaleX(1.3);opacity:0}92.01%,100%{transform:translateY(0) scaleX(.7);opacity:0}}
@keyframes food-steam-bowl-hanko{0%,30%{transform:scale(1.8) rotate(-20deg);opacity:0}36%{transform:scale(.94) rotate(-8deg);opacity:1}40%,86%{transform:scale(1) rotate(-8deg);opacity:1}94%,100%{transform:scale(1) rotate(-8deg);opacity:0}}
@keyframes food-steam-bowl-in0{0%,2%{transform:translateY(1.5cqw);opacity:0}12%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-1cqw);opacity:0}}
@keyframes food-steam-bowl-word{0%,4%{transform:translateY(.5em);opacity:0;filter:blur(.05em)}16%,86%{transform:translateY(0);opacity:1;filter:blur(0)}95%,100%{transform:translateY(-.3em);opacity:0}}
@keyframes food-steam-bowl-in5{0%,22%{transform:translateY(1.2cqw);opacity:0}34%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-.8cqw);opacity:0}}
@keyframes food-steam-bowl-shine{0%,40%{transform:translateX(-120%)}56%,100%{transform:translateX(120%)}}
`,
};

export const foodMenuUnfold: SceneSpec = {
  id: "food-menu-unfold",
  slug: "mg-food-menu-unfold",
  name: "Trifold Menu Unfold",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "trifold-panels-unfold",
  energy: "calm",
  settle: 3.6,
  colors: { ink: "#F6EAD4", accent: "#B4532D", secondary: "#C0392B", paper: "#2A1912" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["restaurant", "menu", "unfold", "print"],
  fields: [
    { key: "title", label: "Title", default: "The autumn menu", maxChars: 26, role: "headline" },
    { key: "name", label: "Restaurant", default: "fennel. trattoria", maxChars: 22, role: "label" },
    { key: "note", label: "Margin note", default: "Marta's pick", maxChars: 16, role: "caption" },
    { key: "cta", label: "Footer", default: "Book a table tonight", maxChars: 26, role: "cta" },
  ],
  html: `<div class="props">
  <svg class="glass" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.28)" stroke-width="2"/><circle cx="50" cy="50" r="38" fill="#5a0f1f"/><circle cx="46" cy="46" r="30" fill="#6e1426"/><path d="M24 36a30 30 0 0 1 22-16" stroke="rgba(255,255,255,.35)" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M78 62a32 32 0 0 1-14 14" stroke="rgba(255,255,255,.18)" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
  <svg class="olives" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#efe6d6"/><circle cx="50" cy="50" r="36" fill="#e2d6c0"/><g><ellipse cx="40" cy="42" rx="11" ry="8" fill="#6f7f2e" transform="rotate(-20 40 42)"/><ellipse cx="58" cy="38" rx="11" ry="8" fill="#7d8c36" transform="rotate(15 58 38)"/><ellipse cx="62" cy="56" rx="11" ry="8" fill="#66762a" transform="rotate(-35 62 56)"/><ellipse cx="44" cy="60" rx="11" ry="8" fill="#7a8a33" transform="rotate(25 44 60)"/><ellipse cx="51" cy="49" rx="10" ry="7.5" fill="#5f6e25"/></g><g fill="rgba(255,255,255,.45)"><ellipse cx="37" cy="39" rx="3" ry="1.6"/><ellipse cx="55" cy="35" rx="3" ry="1.6"/><ellipse cx="59" cy="53" rx="3" ry="1.6"/><ellipse cx="41" cy="57" rx="3" ry="1.6"/><ellipse cx="48" cy="46" rx="3" ry="1.6"/></g><path d="M30 74L72 22" stroke="#d9b98a" stroke-width="2.4" stroke-linecap="round"/></svg>
  <svg class="herb" viewBox="0 0 120 60"><path d="M6 46C40 34 80 24 116 14" stroke="#4d5b2c" stroke-width="2.4" fill="none" stroke-linecap="round"/><g stroke="#6d7f3c" stroke-width="3.2" stroke-linecap="round"><path d="M16 42l-6-12M16 42l2 12M28 38l-4-13M28 38l4 12M40 35l-3-13M40 35l5 11M52 32l-2-13M52 32l6 11M64 28l-1-13M64 28l7 10M76 25l0-12M76 25l7 9M88 22l1-11M88 22l7 8M100 18l2-10M100 18l6 7"/></g></svg>
</div>
<div class="vig"></div>
<div class="hd"><div class="kk" data-21st-slot="name">{{name}}</div><div class="tt" data-21st-slot="title">{{title|words}}</div></div>
<div class="menu">
  <i class="drop"></i>
  <div class="pan pc"><div class="face">
    <div class="sec">Pasta</div><div class="orn"></div>
    <div class="it"><div class="row"><b>Cacio e pepe</b><i class="ld"></i><em>19</em></div><p>tonnarelli, black pepper</p></div>
    <div class="it it2"><div class="row"><b class="ringed">Ricotta ravioli<svg class="anno" viewBox="0 0 32 14" preserveAspectRatio="none"><path pathLength="1" d="M5 3.6C11 1 27 1.4 30 5 32 8.4 23 12.8 13 12.6 4.6 12.4 1 9.6 2.2 6.2 3.4 3.2 9.6 1.8 16 2"/></svg></b><i class="ld"></i><em>21</em></div><p>lemon, brown butter, sage</p><div class="note"><span class="ar">&uarr;</span><span data-21st-slot="note">{{note}}</span></div></div>
    <div class="it it3"><div class="row"><b>Pappardelle</b><i class="ld"></i><em>24</em></div><p>wild boar ragù, pecorino</p></div>
    <div class="ft">pasta rolled every morning</div>
  </div></div>
  <div class="pan pl">
    <div class="face f">
      <div class="sec">Antipasti</div><div class="orn"></div>
      <div class="it"><div class="row"><b>Burrata</b><i class="ld"></i><em>14</em></div><p>blood orange, basil oil</p></div>
      <div class="it"><div class="row"><b>Octopus</b><i class="ld"></i><em>18</em></div><p>charred, smoked paprika</p></div>
      <div class="it"><div class="row"><b>Fennel salad</b><i class="ld"></i><em>12</em></div><p>citrus, olives, mint</p></div>
      <div class="ft">ask about today's crudo</div>
    </div>
    <div class="face back blank"><svg viewBox="0 0 24 24"><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
  </div>
  <div class="pan pr">
    <div class="face f">
      <div class="sec">Dal forno</div><div class="orn"></div>
      <div class="it"><div class="row"><b>Margherita</b><i class="ld"></i><em>16</em></div><p>fior di latte, basil</p></div>
      <div class="it"><div class="row"><b>Nduja &amp; honey</b><i class="ld"></i><em>19</em></div><p>spicy salami, hot honey</p></div>
      <div class="sec sm">Dolci</div><div class="orn"></div>
      <div class="it"><div class="row"><b>Olive oil cake</b><i class="ld"></i><em>10</em></div><p>crème fraîche, figs</p></div>
    </div>
    <div class="face back cover"><i class="frame"></i><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11.2" fill="none" stroke="currentColor" stroke-width="1"/><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="nm">{{name}}</div><div class="rule"></div><div class="ed">{{title}}</div></div>
  </div>
</div>
<div class="cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-food-menu-unfold{color:var(--ink);font-family:var(--font-display)}
.v-food-menu-unfold[data-backdrop="on"]{background:radial-gradient(ellipse 60% 70% at 50% 16%,color-mix(in srgb,var(--accent) 22%,transparent),transparent 70%),repeating-linear-gradient(93deg,color-mix(in srgb,var(--ink) 3%,transparent) 0 .3cqw,transparent .3cqw 1.7cqw),linear-gradient(160deg,color-mix(in srgb,var(--paper) 86%,var(--ink)),var(--paper) 60%,color-mix(in srgb,var(--paper) 88%,#000))}
.v-food-menu-unfold[data-backdrop="off"] .props,.v-food-menu-unfold[data-backdrop="off"] .vig{display:none}
.v-food-menu-unfold .props{position:absolute;inset:0;animation:food-menu-unfold-props 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-menu-unfold .glass{position:absolute;left:85cqw;top:-5cqw;width:19cqw;height:19cqw;filter:drop-shadow(0 1cqw 1.4cqw rgba(0,0,0,.45))}
.v-food-menu-unfold .olives{position:absolute;left:-4cqw;top:35cqw;width:21cqw;height:21cqw;filter:drop-shadow(0 1cqw 1.4cqw rgba(0,0,0,.45))}
.v-food-menu-unfold .herb{position:absolute;left:83cqw;top:43cqw;width:20cqw;height:10cqw;transform:rotate(-14deg);filter:drop-shadow(0 .5cqw .6cqw rgba(0,0,0,.4))}
.v-food-menu-unfold .vig{position:absolute;inset:0;background:radial-gradient(ellipse 75% 80% at 50% 45%,transparent 55%,rgba(0,0,0,.36))}
.v-food-menu-unfold .hd{position:absolute;left:10cqw;right:10cqw;top:2.2cqw;text-align:center;animation:food-menu-unfold-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-menu-unfold .kk{font:500 1.25cqw/1.2 var(--font-body);letter-spacing:.24em;color:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-food-menu-unfold .tt{margin-top:.2cqw;font-style:italic;font-size:3.4cqw;line-height:1.2;padding-block:.2em;margin-block:-.2em}
.v-food-menu-unfold .tt .w{display:inline-block;line-height:1.2;--delay:calc(.15s + var(--i) * .1s);animation:food-menu-unfold-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-menu-unfold .cta{position:absolute;left:10cqw;right:10cqw;top:49.6cqw;text-align:center;font:500 1.5cqw/1.2 var(--font-body);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 82%,transparent);--delay:.5s;animation:food-menu-unfold-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-menu-unfold .menu{position:absolute;left:50%;top:10.2cqw;width:66em;height:43em;margin-left:-33em;font-size:.86cqw;color:var(--paper);animation:food-menu-unfold-cam 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-menu-unfold .drop{position:absolute;left:0;top:0;width:66em;height:43em;background:rgba(0,0,0,.5);filter:blur(1.8em);transform:translateY(1.8em) scaleX(.34);animation:food-menu-unfold-drop 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-menu-unfold .pan{position:absolute;top:0;width:22em;height:43em}
.v-food-menu-unfold .pc{left:22em}
.v-food-menu-unfold .pl{left:0;transform-origin:100% 50%;transform-style:preserve-3d;transform:perspective(120em) rotateY(180deg);animation:food-menu-unfold-l 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-menu-unfold .pr{left:44em;transform-origin:0 50%;transform-style:preserve-3d;transform:perspective(120em) rotateY(-180deg);animation:food-menu-unfold-r 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-menu-unfold .face{position:absolute;inset:0;padding:2.6em 2.3em;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:radial-gradient(ellipse 120% 70% at 50% 0%,color-mix(in srgb,var(--ink) 96%,#fff),color-mix(in srgb,var(--ink) 92%,var(--paper)) 85%)}
.v-food-menu-unfold .pc .face{background:linear-gradient(90deg,color-mix(in srgb,var(--paper) 13%,transparent),transparent 10%,transparent 90%,color-mix(in srgb,var(--paper) 13%,transparent)),radial-gradient(ellipse 120% 70% at 50% 0%,color-mix(in srgb,var(--ink) 96%,#fff),color-mix(in srgb,var(--ink) 92%,var(--paper)) 85%)}
.v-food-menu-unfold .pl .f{background:linear-gradient(90deg,transparent 82%,color-mix(in srgb,var(--paper) 16%,transparent)),radial-gradient(ellipse 120% 70% at 50% 0%,color-mix(in srgb,var(--ink) 96%,#fff),color-mix(in srgb,var(--ink) 92%,var(--paper)) 85%)}
.v-food-menu-unfold .pr .f{background:linear-gradient(270deg,transparent 82%,color-mix(in srgb,var(--paper) 16%,transparent)),radial-gradient(ellipse 120% 70% at 50% 0%,color-mix(in srgb,var(--ink) 96%,#fff),color-mix(in srgb,var(--ink) 92%,var(--paper)) 85%)}
.v-food-menu-unfold .back{transform:rotateY(180deg)}
.v-food-menu-unfold .blank{display:grid;place-items:center;background:repeating-linear-gradient(45deg,color-mix(in srgb,var(--accent) 6%,transparent) 0 .3em,transparent .3em 1.4em),color-mix(in srgb,var(--ink) 92%,var(--paper));color:color-mix(in srgb,var(--paper) 40%,transparent)}
.v-food-menu-unfold .blank svg{width:4em;height:4em}
.v-food-menu-unfold .cover{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:radial-gradient(ellipse 90% 60% at 50% 30%,var(--accent),color-mix(in srgb,var(--accent) 78%,#000));color:#fbf1e1}
.v-food-menu-unfold .frame{position:absolute;inset:1.1em;border:1px solid rgba(251,241,225,.45);border-radius:.3em}
.v-food-menu-unfold .cover svg{width:4em;height:4em}
.v-food-menu-unfold .cover .nm{font-style:italic;font-size:3.6em;line-height:1.1;margin-top:.4em;padding:0 .4em}
.v-food-menu-unfold .cover .rule{width:5em;height:1px;background:rgba(251,241,225,.6);margin:2.2em 0 1.4em}
.v-food-menu-unfold .cover .ed{font-size:2em;font-style:italic;line-height:1.2;padding:0 1em}
.v-food-menu-unfold .sec{font-size:3.1em;font-style:italic;color:var(--accent);line-height:1.1}
.v-food-menu-unfold .sec.sm{font-size:2.2em;margin-top:1em}
.v-food-menu-unfold .orn{height:1px;margin:1.2em 0 1.9em;background:linear-gradient(90deg,var(--accent) 0 3em,color-mix(in srgb,var(--paper) 20%,transparent) 3em)}
.v-food-menu-unfold .it{position:relative;margin-bottom:1.9em}
.v-food-menu-unfold .row{display:flex;align-items:baseline;gap:.5em;font-size:1.8em;line-height:1.15}
.v-food-menu-unfold .row b{font-weight:400;white-space:nowrap}
.v-food-menu-unfold .ld{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--paper) 45%,transparent)}
.v-food-menu-unfold .row em{font-style:normal;font-family:var(--font-body);font-size:.7em;font-weight:500}
.v-food-menu-unfold .it p{margin:.35em 0 0;font-family:var(--font-body);font-size:1.05em;color:color-mix(in srgb,var(--paper) 62%,transparent);line-height:1.3}
.v-food-menu-unfold .ft{position:absolute;left:2.3em;right:2.3em;bottom:2.3em;font-size:1.25em;font-style:italic;color:color-mix(in srgb,var(--paper) 55%,transparent);text-align:center}
.v-food-menu-unfold .ringed{position:relative}
.v-food-menu-unfold .anno{position:absolute;left:-.45em;right:-.45em;top:-.42em;bottom:-.42em;width:calc(100% + .9em);height:calc(100% + .84em);overflow:visible;animation:food-menu-unfold-anno 6s linear infinite}
.v-food-menu-unfold .anno path{fill:none;stroke:var(--secondary);stroke-width:1.1;stroke-linecap:round;stroke-dasharray:1 1;stroke-dashoffset:1;animation:food-menu-unfold-ring 6s cubic-bezier(.45,.1,.4,1) infinite}
.v-food-menu-unfold .note{position:absolute;left:.3em;top:100%;margin-top:.5em;display:flex;align-items:center;gap:.3em;white-space:nowrap;font-style:italic;font-size:2.5em;line-height:1.2;color:var(--secondary);transform:rotate(-4deg);transform-origin:0 50%;clip-path:inset(-20% 100% -20% 0);animation:food-menu-unfold-note 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-menu-unfold .note .ar{font-family:var(--font-body);font-style:normal;font-size:.8em}
.v-food-menu-unfold .it3{margin-top:4.2em}
@container (max-aspect-ratio: 4/5){
  .v-food-menu-unfold .hd{left:8cqw;right:8cqw;top:8.5cqh;text-align:left}
  .v-food-menu-unfold .kk{font-size:5.6cqw;letter-spacing:.06em}
  .v-food-menu-unfold .tt{margin-top:1.4cqh;font-size:14cqw;line-height:1.1}
  .v-food-menu-unfold .menu{top:41cqh;font-size:1.39cqw}
  .v-food-menu-unfold .it2{position:static}
  .v-food-menu-unfold .pc .ft{display:none}
  .v-food-menu-unfold .note{top:auto;left:.4em;right:.2em;bottom:1.3em;margin:0;display:block;white-space:normal;font-size:4em;line-height:1.2}
  .v-food-menu-unfold .cta{left:8cqw;right:8cqw;top:auto;bottom:8.5cqh;font-size:5.6cqw;letter-spacing:.01em}
  .v-food-menu-unfold .glass{left:72cqw;top:-8cqw;width:36cqw;height:36cqw}
  .v-food-menu-unfold .olives{left:-15cqw;top:74cqh;width:32cqw;height:32cqw}
  .v-food-menu-unfold .herb{left:72cqw;top:77cqh;width:36cqw;height:18cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-menu-unfold .hd{top:5cqw}
  .v-food-menu-unfold .kk{font-size:2.3cqw}
  .v-food-menu-unfold .tt{margin-top:.6cqw;font-size:6.6cqw}
  .v-food-menu-unfold .menu{top:22cqw;font-size:1.3cqw}
  .v-food-menu-unfold .note{font-size:2.9em}
  .v-food-menu-unfold .cta{top:auto;bottom:6cqw;font-size:2.8cqw}
  .v-food-menu-unfold .glass{left:82cqw;top:-7cqw;width:24cqw;height:24cqw}
  .v-food-menu-unfold .olives{left:-7cqw;top:80cqw;width:24cqw;height:24cqw}
  .v-food-menu-unfold .herb{left:78cqw;top:86cqw;width:26cqw;height:13cqw}
}
@keyframes food-menu-unfold-in{0%,2%{transform:translateY(1cqw);opacity:0}12%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-.8cqw);opacity:0}}
@keyframes food-menu-unfold-word{0%,3%{transform:translateY(.4em);opacity:0}14%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-.3em);opacity:0}}
@keyframes food-menu-unfold-cam{0%{transform:translateY(4em) scale(.92);opacity:0}10%{transform:translateY(0) scale(1);opacity:1}42%{transform:translateY(0) scale(1)}76%{transform:translateY(-.4em) scale(1.035)}90%{transform:translateY(0) scale(1);opacity:1}97%,100%{transform:translateY(3em) scale(.94);opacity:0}}
@keyframes food-menu-unfold-r{0%,12%{transform:perspective(120em) rotateY(-180deg)}30%,78%{transform:perspective(120em) rotateY(0deg)}92%,100%{transform:perspective(120em) rotateY(-180deg)}}
@keyframes food-menu-unfold-l{0%,22%{transform:perspective(120em) rotateY(180deg)}40%,74%{transform:perspective(120em) rotateY(0deg)}86%,100%{transform:perspective(120em) rotateY(180deg)}}
@keyframes food-menu-unfold-drop{0%,12%{transform:translateY(1.8em) scaleX(.34)}40%,74%{transform:translateY(1.8em) scaleX(1)}92%,100%{transform:translateY(1.8em) scaleX(.34)}}
@keyframes food-menu-unfold-ring{0%,40%{stroke-dashoffset:1}47%,100%{stroke-dashoffset:0}}
@keyframes food-menu-unfold-anno{0%,40%{opacity:0}40.6%,72%{opacity:1}74.5%,100%{opacity:0}}
@keyframes food-menu-unfold-note{0%,45%{clip-path:inset(-20% 100% -20% 0);opacity:1}50%,71%{clip-path:inset(-20% -10% -20% -10%);opacity:1}74%{opacity:0}75%,100%{clip-path:inset(-20% 100% -20% 0);opacity:0}}
@keyframes food-menu-unfold-props{0%,100%{transform:translate(0,0)}50%{transform:translate(-.6cqw,-.3cqw)}}
`,
};

export const foodDeliveryRoute: SceneSpec = {
  id: "food-delivery-route",
  slug: "mg-food-delivery-route",
  name: "Delivery Route Tracker",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "rider-traces-route-on-map",
  energy: "default",
  settle: 4.7,
  colors: { ink: "#F4F6F8", accent: "#C8FF4A", secondary: "#FF7A3D", paper: "#11161B" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["delivery", "map", "tracking", "app"],
  fields: [
    { key: "toast", label: "Arrival message", default: "Sami is at your door", maxChars: 24, role: "headline" },
    { key: "order", label: "Order title", default: "Order #2041", maxChars: 16, role: "kicker" },
    { key: "item", label: "Order item", default: "2× Smash burger", maxChars: 18, role: "label" },
  ],
  html: `<div class="mz"><div class="map">
  <svg class="streets" viewBox="0 0 100 177.78" preserveAspectRatio="none">
    <defs><g id="food-dr-tile">
      <rect width="100" height="177.78" style="fill:var(--m-base)"/>
      <path d="M-2 12C18 20 34 6 56 14S88 24 102 16V25C86 32 62 22 52 24S18 32-2 22Z" style="fill:var(--m-water)"/>
      <g style="fill:var(--m-block)"><rect x="23" y="39" width="26" height="20" rx="1.2"/><rect x="23" y="65" width="26" height="22" rx="1.2"/><rect x="55" y="39" width="18" height="20" rx="1.2"/><rect x="79" y="65" width="18" height="22" rx="1.2"/><rect x="2" y="39" width="15" height="20" rx="1.2"/><rect x="2" y="65" width="15" height="22" rx="1.2"/><rect x="79" y="93" width="18" height="12" rx="1.2"/><rect x="55" y="93" width="18" height="12" rx="1.2"/><rect x="2" y="93" width="15" height="12" rx="1.2"/><rect x="23" y="93" width="26" height="12" rx="1.2"/><rect x="79" y="39" width="18" height="20" rx="1.2"/><rect x="23" y="111" width="26" height="20" rx="1.2"/><rect x="55" y="111" width="18" height="20" rx="1.2"/><rect x="2" y="111" width="15" height="20" rx="1.2"/><rect x="79" y="111" width="18" height="20" rx="1.2"/><rect x="2" y="137" width="15" height="34" rx="1.2"/><rect x="23" y="137" width="26" height="34" rx="1.2"/><rect x="55" y="137" width="18" height="34" rx="1.2"/><rect x="79" y="137" width="18" height="34" rx="1.2"/></g>
      <rect x="55" y="65" width="18" height="22" rx="1.4" style="fill:var(--m-park)"/>
      <g style="fill:var(--m-tree)"><circle cx="59" cy="69" r="1.6"/><circle cx="64" cy="72" r="1.9"/><circle cx="69" cy="68" r="1.5"/><circle cx="60" cy="78" r="1.8"/><circle cx="67" cy="81" r="1.7"/><circle cx="70" cy="75" r="1.4"/></g>
      <g style="stroke:var(--m-minor)" stroke-width=".8"><path d="M8 0V178M36 0V178M64 0V178M90 0V178M0 48H100M0 76H100M0 98H100M0 120H100M0 150H100"/></g>
      <g style="stroke:var(--m-major)" stroke-width="2.2"><path d="M20 0V178M52 0V178M76 0V178M0 36H100M0 62H100M0 90H100M0 108H100M0 134H100M0 174H100"/></g>
      <path d="M-2 150L102 70" style="stroke:var(--m-major)" stroke-width="1.6"/>
      <text x="27" y="88.7" font-size="1.9" style="fill:var(--m-text)" font-family="sans-serif">Harbor St</text>
      <text x="78.2" y="60.6" font-size="1.9" style="fill:var(--m-text)" font-family="sans-serif">Mill Ave</text>
      <text x="30" y="20" font-size="1.9" style="fill:var(--m-text)" font-family="sans-serif" font-style="italic">Saltmarsh canal</text>
    </g></defs>
    <use href="#food-dr-tile"/><use href="#food-dr-tile" x="100"/><use href="#food-dr-tile" x="-100"/><use href="#food-dr-tile" x="200"/>
    <use href="#food-dr-tile" y="-177.78"/><use href="#food-dr-tile" x="100" y="-177.78"/><use href="#food-dr-tile" x="-100" y="-177.78"/><use href="#food-dr-tile" y="177.78"/><use href="#food-dr-tile" x="100" y="177.78"/>
  </svg>
  <svg class="route" viewBox="0 0 100 177.78" preserveAspectRatio="none">
    <path class="plan" d="M20 108V90H52V62H76V36"/>
    <path class="done" pathLength="1" d="M20 108V90H52V62H76V36"/>
  </svg>
  <div class="pin shop"><i><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7a2 2 0 0 0 2 2v9M11 3v7a2 2 0 0 1-2 2M17 21V3c-2 1.5-3 4-3 7v3h3"/></svg></i><span>Fennel Kitchen</span></div>
  <div class="pin home"><b class="ring"></b><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg></i><span>Home</span></div>
  <div class="rider"><b class="halo"></b><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="17" r="2.6"/><circle cx="18" cy="17" r="2.6"/><path d="M8.6 17h6.8l2-6h-4M15 5h3l1.5 5M4 13h6l2 4"/><path d="M5 9h5v4H5z" fill="currentColor"/></svg></i></div>
</div></div>
<div class="top">
  <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></span>
  <div class="tt"><b data-21st-slot="order">{{order}}</b><small>3 items · paid</small></div>
  <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></span>
</div>
<div class="sheet">
  <i class="grab"></i>
  <div class="eta">
    <div><small>Arriving in</small><span class="win"><span class="roll"><b>14<em>min</em></b><b>11<em>min</em></b><b>8<em>min</em></b><b>4<em>min</em></b><b>1<em>min</em></b></span></span></div>
    <div class="cour"><span class="av"><svg viewBox="0 0 40 40"><rect width="40" height="40" class="avbg"/><circle cx="20" cy="16" r="7.5" fill="#6f8a3a"/><path d="M6 40c1-9 7-14 14-14s13 5 14 14z" fill="#4f6a28"/><path d="M12.4 13.4a8 8 0 0 1 15.2 0z" fill="#2f3f18"/></svg></span><div><b>Sami</b><small>★ 4.9 · scooter</small></div></div>
  </div>
  <div class="steps"><i class="s on"></i><i class="s on"></i><i class="s cur"><b></b></i><i class="s last"><b></b></i></div>
  <div class="labels"><span>Ordered</span><span>Cooking</span><span class="hi">On the way</span><span>At door</span></div>
  <div class="order"><i class="thumb"></i><div><b data-21st-slot="item">{{item}}</b><small>Truffle fries · Miso shake</small></div><em>$31.40</em></div>
</div>
<div class="toast"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg><div><b data-21st-slot="toast">{{toast}}</b><small>Still hot. Enjoy!</small></div></div>`,
  css: `
.v-food-delivery-route{color:var(--ink);font-family:var(--font-body);--onacc:color-mix(in srgb,var(--accent) 12%,#0b0d0a)}
.v-food-delivery-route[data-backdrop="on"]{background:var(--paper)}
.v-food-delivery-route[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-food-delivery-route .mz{position:absolute;inset:0;transform-origin:30% 45%;animation:food-delivery-route-map 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-delivery-route .map{position:absolute;left:3cqw;top:-8cqw;width:100em;height:177.78em;font-size:.5cqw;--m-base:var(--paper);--m-water:color-mix(in srgb,var(--paper) 78%,#2a7ca6);--m-block:color-mix(in srgb,var(--paper) 95%,var(--ink));--m-park:color-mix(in srgb,var(--paper) 84%,#3c9a5c);--m-tree:color-mix(in srgb,var(--paper) 70%,#3c9a5c);--m-minor:color-mix(in srgb,var(--paper) 93%,var(--ink));--m-major:color-mix(in srgb,var(--paper) 86%,var(--ink));--m-text:color-mix(in srgb,var(--paper) 60%,var(--ink))}
.v-food-delivery-route .streets,.v-food-delivery-route .route{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible}
.v-food-delivery-route .route{filter:drop-shadow(0 0 1.2em color-mix(in srgb,var(--accent) 55%,transparent))}
.v-food-delivery-route .plan{fill:none;stroke:color-mix(in srgb,var(--paper) 62%,var(--ink));stroke-width:.9;stroke-dasharray:1.2 1.4;stroke-linecap:round}
.v-food-delivery-route .done{fill:none;stroke:var(--accent);stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1 1;stroke-dashoffset:1;animation:food-delivery-route-draw 6s linear infinite}
.v-food-delivery-route .pin{position:absolute;left:0;top:0}
.v-food-delivery-route .shop{transform:translate(20em,108em)}
.v-food-delivery-route .home{transform:translate(76em,36em)}
.v-food-delivery-route .pin i{position:absolute;display:grid;place-items:center;animation:food-delivery-route-pop 6s cubic-bezier(.3,1.5,.5,1) infinite}
.v-food-delivery-route .shop i{left:-3.6em;top:-3.6em;width:7.2em;height:7.2em;border-radius:2.2em;background:linear-gradient(160deg,color-mix(in srgb,var(--secondary) 75%,#fff),var(--secondary));box-shadow:0 0 0 .8em color-mix(in srgb,var(--secondary) 22%,transparent),0 1em 2.4em rgba(0,0,0,.4)}
.v-food-delivery-route .home i{left:-3.2em;top:-3.2em;width:6.4em;height:6.4em;border-radius:50%;background:var(--ink);color:var(--paper);box-shadow:0 1em 2.4em rgba(0,0,0,.4)}
.v-food-delivery-route .pin svg{width:3.6em;height:3.6em}
.v-food-delivery-route .pin span{position:absolute;top:-2.2em;white-space:nowrap;font-size:2.3em;line-height:1.2;font-weight:600;padding:.35em .7em;border-radius:1.3em;background:color-mix(in srgb,var(--paper) 86%,transparent);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);animation:food-delivery-route-pop 6s cubic-bezier(.3,1.5,.5,1) infinite}
.v-food-delivery-route .shop span{left:2.2em;top:-.95em}
.v-food-delivery-route .home span{right:2em;top:-.95em}
.v-food-delivery-route .ring{position:absolute;left:-5em;top:-5em;width:10em;height:10em;border-radius:50%;border:.4em solid var(--accent);animation:food-delivery-route-ring 2s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-delivery-route .rider{position:absolute;left:0;top:0;transform:translate(20em,108em);animation:food-delivery-route-ride 6s linear infinite}
.v-food-delivery-route .rider i{position:absolute;left:-4.2em;top:-4.2em;width:8.4em;height:8.4em;border-radius:50%;background:var(--accent);color:var(--onacc);display:grid;place-items:center;box-shadow:0 0 0 1em color-mix(in srgb,var(--accent) 22%,transparent),0 1.2em 3em rgba(0,0,0,.45)}
.v-food-delivery-route .rider svg{width:5em;height:5em}
.v-food-delivery-route .halo{position:absolute;left:-4.2em;top:-4.2em;width:8.4em;height:8.4em;border-radius:50%;background:color-mix(in srgb,var(--accent) 35%,transparent);animation:food-delivery-route-halo 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-delivery-route .top{position:absolute;left:57cqw;top:3.2cqw;width:90em;font-size:.42cqw;display:flex;align-items:center;gap:3em;animation:food-delivery-route-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-delivery-route .top .ic{flex:none;width:11em;height:11em;border-radius:50%;background:color-mix(in srgb,var(--paper) 86%,transparent);border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);display:grid;place-items:center}
.v-food-delivery-route .top .ic svg{width:4.4em;height:4.4em}
.v-food-delivery-route .top .tt{flex:1;min-width:0;text-align:center;padding:1.4em 2em;border-radius:6em;background:color-mix(in srgb,var(--paper) 86%,transparent);border:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}
.v-food-delivery-route .top b{display:block;font-size:5.4em;line-height:1.2;font-weight:600;white-space:nowrap}
.v-food-delivery-route .top small{display:block;font-size:2.6em;line-height:1.2;color:color-mix(in srgb,var(--ink) 58%,transparent);margin-top:.2em}
.v-food-delivery-route .toast{position:absolute;left:57cqw;top:42cqw;width:90em;font-size:.42cqw;display:flex;align-items:center;gap:3em;padding:3.2em 4em;border-radius:4.4em;background:var(--accent);color:var(--onacc);box-shadow:0 2em 5em rgba(0,0,0,.4);opacity:0;animation:food-delivery-route-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-delivery-route .toast svg{flex:none;width:7em;height:7em}
.v-food-delivery-route .toast div{min-width:0}
.v-food-delivery-route .toast b{display:block;font-size:5.4em;line-height:1.2;font-weight:700;letter-spacing:-.01em}
.v-food-delivery-route .toast small{display:block;font-size:3em;line-height:1.2;opacity:.72;margin-top:.2em}
.v-food-delivery-route .sheet{position:absolute;left:57cqw;top:13cqw;width:90em;box-sizing:content-box;font-size:.42cqw;padding:3em 5em 5em;margin-left:-5em;border-radius:6em;background:color-mix(in srgb,var(--ink) 96%,var(--paper));color:var(--paper);box-shadow:0 -1em 6em rgba(0,0,0,.35);animation:food-delivery-route-sheet 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-delivery-route .grab{display:block;width:10em;height:1em;margin:0 auto;border-radius:1em;background:color-mix(in srgb,var(--paper) 18%,var(--ink))}
.v-food-delivery-route .eta{display:flex;align-items:flex-end;justify-content:space-between;margin-top:3em}
.v-food-delivery-route .eta small{display:block;font-size:2.8em;line-height:1.2;color:color-mix(in srgb,var(--paper) 58%,var(--ink))}
.v-food-delivery-route .win{display:block;height:11em;overflow:hidden;margin-top:.8em}
.v-food-delivery-route .roll{display:block;animation:food-delivery-route-roll 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-delivery-route .roll b{display:block;height:11em;font-family:var(--font-display);font-weight:800;font-size:10em;line-height:1.1;letter-spacing:-.04em;height:1.1em}
.v-food-delivery-route .roll em{font-style:normal;font-family:var(--font-body);font-size:.42em;font-weight:500;letter-spacing:0;margin-left:.33em;color:color-mix(in srgb,var(--paper) 78%,var(--ink))}
.v-food-delivery-route .cour{display:flex;align-items:center;gap:2.4em;padding-bottom:1em}
.v-food-delivery-route .av{width:10em;height:10em;border-radius:50%;overflow:hidden}
.v-food-delivery-route .av svg{display:block;width:100%;height:100%}
.v-food-delivery-route .avbg{fill:color-mix(in srgb,var(--accent) 45%,#fff)}
.v-food-delivery-route .cour b{display:block;font-size:3.4em;line-height:1.2;font-weight:600}
.v-food-delivery-route .cour small{font-size:2.4em;color:color-mix(in srgb,var(--paper) 58%,var(--ink))}
.v-food-delivery-route .steps{display:flex;gap:1.6em;margin-top:4em}
.v-food-delivery-route .s{position:relative;flex:1;height:1.3em;border-radius:1em;background:color-mix(in srgb,var(--paper) 14%,var(--ink));overflow:hidden}
.v-food-delivery-route .s.on{background:var(--paper)}
.v-food-delivery-route .s b{position:absolute;inset:0;background:var(--paper);transform-origin:0 50%;transform:scaleX(0)}
.v-food-delivery-route .s.cur b{background:linear-gradient(90deg,var(--paper),color-mix(in srgb,var(--accent) 70%,var(--paper)));animation:food-delivery-route-cur 6s linear infinite}
.v-food-delivery-route .s.last b{animation:food-delivery-route-last 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-delivery-route .labels{display:flex;margin-top:1.6em;font-size:2.3em;line-height:1.2;color:color-mix(in srgb,var(--paper) 55%,var(--ink))}
.v-food-delivery-route .labels span{flex:1}
.v-food-delivery-route .labels .hi{color:var(--paper);font-weight:600}
.v-food-delivery-route .order{display:flex;align-items:center;gap:3em;margin-top:4em;padding-top:3.6em;border-top:1px solid color-mix(in srgb,var(--paper) 14%,var(--ink))}
.v-food-delivery-route .thumb{flex:none;width:11em;height:11em;border-radius:2.6em;background:radial-gradient(circle at 50% 36%,#f4b65b 0 30%,rgba(0,0,0,0) 31%),linear-gradient(180deg,#f6e4c8 0 40%,#5b3220 40% 58%,#f2c13a 58% 64%,#e8a14c 64%)}
.v-food-delivery-route .order div{flex:1;min-width:0}
.v-food-delivery-route .order b{display:block;font-size:5.4em;line-height:1.2;font-weight:600;white-space:nowrap;letter-spacing:-.01em}
.v-food-delivery-route .order small{display:block;font-size:2.4em;line-height:1.2;color:color-mix(in srgb,var(--paper) 58%,var(--ink))}
.v-food-delivery-route .order em{font-style:normal;font-size:3.6em;font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-food-delivery-route .mz{transform-origin:50% 40%}
  .v-food-delivery-route .map{left:0;top:0;font-size:1cqw}
  .v-food-delivery-route .top{left:5cqw;top:5cqw;font-size:1cqw}
  .v-food-delivery-route .toast{left:5cqw;top:22cqw;font-size:1cqw}
  .v-food-delivery-route .sheet{left:0;top:auto;bottom:0;margin:0;width:88em;padding:3em 6em 6em;font-size:1cqw;border-radius:6em 6em 0 0}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-delivery-route .mz{transform-origin:30% 50%}
  .v-food-delivery-route .map{left:1cqw;top:5cqw;font-size:.62cqw}
  .v-food-delivery-route .top{left:54cqw;top:15cqw;font-size:.46cqw}
  .v-food-delivery-route .sheet{left:54cqw;top:28cqw;font-size:.46cqw}
  .v-food-delivery-route .toast{left:54cqw;top:61cqw;font-size:.46cqw}
}
@keyframes food-delivery-route-map{0%{transform:scale(1.14)}24%{transform:scale(1)}86%{transform:scale(1.04)}100%{transform:scale(1.14)}}
@keyframes food-delivery-route-draw{0%,25%{stroke-dashoffset:1;opacity:1}70%{stroke-dashoffset:0;opacity:1}87%{stroke-dashoffset:0;opacity:1}93%{stroke-dashoffset:0;opacity:0}94%,100%{stroke-dashoffset:1;opacity:0}}
@keyframes food-delivery-route-ride{0%{transform:translate(20em,108em);opacity:0}14%,25%{transform:translate(20em,108em);opacity:1}31.33%{transform:translate(20em,90em)}42.58%{transform:translate(52em,90em)}52.42%{transform:translate(52em,62em)}60.86%{transform:translate(76em,62em)}70%,88%{transform:translate(76em,36em);opacity:1}94%,100%{transform:translate(76em,36em);opacity:0}}
@keyframes food-delivery-route-pop{0%,5%{transform:scale(0);opacity:0}12%,88%{transform:scale(1);opacity:1}95%,100%{transform:scale(.6);opacity:0}}
@keyframes food-delivery-route-ring{0%{transform:scale(.5);opacity:.9}100%{transform:scale(1.6);opacity:0}}
@keyframes food-delivery-route-halo{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.3);opacity:0}}
@keyframes food-delivery-route-top{0%,2%{transform:translateY(-3em);opacity:0}10%,90%{transform:translateY(0);opacity:1}97%,100%{transform:translateY(-2em);opacity:0}}
@keyframes food-delivery-route-toast{0%,71%{transform:translateY(-4em) scale(.96);opacity:0}75%,86%{transform:translateY(0) scale(1);opacity:1}91%,100%{transform:translateY(-2em) scale(.98);opacity:0}}
@keyframes food-delivery-route-sheet{0%,3%{transform:translateY(30em);opacity:0}16%,88%{transform:translateY(0);opacity:1}98%,100%{transform:translateY(30em);opacity:0}}
@keyframes food-delivery-route-roll{0%,33%{transform:translateY(0)}35%,45%{transform:translateY(-20%)}47%,57%{transform:translateY(-40%)}59%,67%{transform:translateY(-60%)}69%,96%{transform:translateY(-80%)}97%,100%{transform:translateY(0)}}
@keyframes food-delivery-route-cur{0%,25%{transform:scaleX(0)}70%,94%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
@keyframes food-delivery-route-last{0%,71%{transform:scaleX(0)}76%,94%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
`,
};

export const foodTicketPrint: SceneSpec = {
  id: "food-ticket-print",
  slug: "mg-food-ticket-print",
  name: "Kitchen Ticket Print",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "receipt-feeds-from-printer",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#F6EFE6", accent: "#FFB547", secondary: "#D8321F", paper: "#1D1814" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["restaurant", "kitchen", "orders", "receipt"],
  fields: [
    { key: "headline", label: "Headline", default: "Tap. Print. Fire.", maxChars: 24, role: "headline" },
    { key: "brand", label: "Brand", default: "fennel. kitchen line", maxChars: 24, role: "label" },
    { key: "sub", label: "Subline", default: "Every app order prints the second you pay.", maxChars: 56, role: "body" },
    { key: "stat", label: "Stat", default: "avg. ticket to pass 7:40", maxChars: 28, role: "caption" },
  ],
  html: `<div class="glow"></div>
<div class="lamp"><i></i></div>
<div class="rail"><i class="bar"></i><div class="old o1"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="old o2"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
<div class="brand"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" class="bdot"/><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" class="bleaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
<h2 class="h"><span class="hs" data-21st-slot="headline">{{headline|words}}</span></h2>
<p class="sub" data-21st-slot="sub">{{sub}}</p>
<div class="stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg><span data-21st-slot="stat">{{stat}}</span></div>
<div class="shelf"></div>
<div class="rig">
  <div class="pback"><i></i></div>
  <div class="clip">
    <div class="ticket">
      <div class="tk-h"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="currentColor"/><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" stroke="#fbf9f3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>{{brand}}</span></div>
      <div class="tk-c"><b>order 427 · table 12</b></div>
      <div class="tk-c">dine-in · 8:42 pm · maya</div>
      <div class="hr"></div>
      <div class="tk-r"><span>2</span><span>smash burger</span></div>
      <div class="tk-m">- no onion</div>
      <div class="tk-m">- extra pickles</div>
      <div class="tk-r"><span>1</span><span>truffle fries</span></div>
      <div class="tk-r"><span>1</span><span>miso caramel shake</span></div>
      <div class="hr"></div>
      <div class="fire">fire now<svg viewBox="0 0 24 24"><path d="M12 2c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-2.4 1-3.8 2-5 0 2 1 3 2 3-1-3 0-6 1-9"/></svg></div>
      <div class="code"></div>
      <div class="stamp">fired<small>8:43 pm</small></div>
    </div>
  </div>
  <div class="printer"><i class="lip"></i><span class="lbl">kp-80</span><i class="vent"></i><i class="led"></i></div>
</div>`,
  css: `
.v-food-ticket-print{color:var(--ink);font-family:var(--font-body)}
.v-food-ticket-print[data-backdrop="on"]{background:radial-gradient(ellipse 60% 60% at 20% 70%,color-mix(in srgb,var(--accent) 6%,transparent),transparent 70%),linear-gradient(180deg,var(--paper),color-mix(in srgb,var(--paper) 80%,#000))}
.v-food-ticket-print .glow{position:absolute;left:43cqw;top:-20cqw;width:56cqw;height:62cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 38%,transparent),transparent);pointer-events:none}
.v-food-ticket-print[data-backdrop="off"] .shelf,.v-food-ticket-print[data-backdrop="off"] .glow{display:none}
.v-food-ticket-print .lamp{position:absolute;left:50cqw;top:-1cqw;width:42cqw;height:3cqw;border-radius:0 0 1cqw 1cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 70%,#666),color-mix(in srgb,var(--paper) 80%,#333));box-shadow:0 .4cqw 1cqw rgba(0,0,0,.5)}
.v-food-ticket-print .lamp i{position:absolute;left:3cqw;right:3cqw;bottom:.3cqw;height:.7cqw;border-radius:.4cqw;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 50%,#fff),var(--accent));box-shadow:0 0 1.6cqw var(--accent),0 0 4cqw color-mix(in srgb,var(--accent) 70%,transparent);animation:food-ticket-print-lamp 6s ease-in-out infinite}
.v-food-ticket-print .rail{position:absolute;left:84cqw;top:3.4cqw;width:17cqw;height:24cqw}
.v-food-ticket-print .rail .bar{position:absolute;left:0;right:0;top:0;height:1cqw;border-radius:.5cqw;background:linear-gradient(180deg,#d9dbde,#7c8085);box-shadow:0 .3cqw .6cqw rgba(0,0,0,.5)}
.v-food-ticket-print .old{position:absolute;top:.6cqw;width:9cqw;height:17cqw;padding:1.2cqw 1cqw;background:#e9e3d6;filter:blur(.12cqw) brightness(.72);transform-origin:50% 0;box-shadow:0 1cqw 1.6cqw rgba(0,0,0,.4);animation:food-ticket-print-sway 6s ease-in-out infinite}
.v-food-ticket-print .o1{left:1.4cqw;rotate:2deg}
.v-food-ticket-print .o2{left:11.6cqw;height:14cqw;rotate:-3deg}
.v-food-ticket-print .old i{display:block;height:.55cqw;margin-bottom:.9cqw;border-radius:.2cqw;background:rgba(30,30,30,.45)}
.v-food-ticket-print .old i:nth-child(2n){width:70%}
.v-food-ticket-print .old i:nth-child(3n){width:45%}
.v-food-ticket-print .brand{position:absolute;left:7cqw;top:9cqw;display:flex;align-items:center;gap:.8cqw;font-size:1.45cqw;line-height:1.2;white-space:nowrap;color:color-mix(in srgb,var(--accent) 55%,var(--ink));animation:food-ticket-print-in0 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ticket-print .brand svg{flex:none;width:2.3cqw;height:2.3cqw}
.v-food-ticket-print .bdot{fill:var(--accent)}
.v-food-ticket-print .bleaf{stroke:var(--paper)}
.v-food-ticket-print .h{position:absolute;left:7cqw;top:12.6cqw;width:42cqw;margin:0;font-family:var(--font-display);font-weight:700;font-size:7.4cqw;line-height:1.2;letter-spacing:-.035em}
.v-food-ticket-print .hs{display:block}
.v-food-ticket-print .h .w{display:inline-block;line-height:1.2;--delay:calc(.25s + var(--i) * .24s);animation:food-ticket-print-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ticket-print .h .w:nth-child(2){color:var(--accent)}
.v-food-ticket-print .sub{position:absolute;left:7cqw;top:34cqw;width:33cqw;margin:0;font-size:1.6cqw;line-height:1.4;color:color-mix(in srgb,var(--ink) 68%,transparent);animation:food-ticket-print-in4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ticket-print .stat{position:absolute;z-index:2;left:7cqw;top:41cqw;display:inline-flex;align-items:center;gap:1cqw;padding:.9cqw 1.6cqw;border-radius:3cqw;border:1px solid color-mix(in srgb,var(--accent) 40%,transparent);background:color-mix(in srgb,var(--accent) 9%,transparent);font-family:var(--font-mono);font-size:1.3cqw;line-height:1.2;white-space:nowrap;color:var(--ink);animation:food-ticket-print-in5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ticket-print .stat svg{flex:none;width:1.6cqw;height:1.6cqw;color:var(--accent)}
.v-food-ticket-print .shelf{position:absolute;left:0;right:0;top:50.4cqw;bottom:0;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 40%,var(--ink)) 0,color-mix(in srgb,var(--paper) 62%,var(--ink)) 6%,color-mix(in srgb,var(--paper) 78%,var(--ink)) 40%,color-mix(in srgb,var(--paper) 88%,var(--ink))),repeating-linear-gradient(90deg,rgba(255,255,255,.05) 0 .15cqw,transparent .15cqw .6cqw);box-shadow:0 -.2cqw .6cqw rgba(0,0,0,.4)}
.v-food-ticket-print .rig{position:absolute;left:55cqw;top:0;width:30em;height:52.2em;font-size:1cqw}
.v-food-ticket-print .pback{position:absolute;left:0;top:38.6em;width:30em;height:2.4em;border-radius:1.2em 1.2em 0 0;background:linear-gradient(180deg,#56575c,#46474b)}
.v-food-ticket-print .pback i{position:absolute;left:2.4em;right:2.4em;top:1.5em;height:.7em;border-radius:.3em;background:#09090a}
.v-food-ticket-print .clip{position:absolute;left:3em;top:0;width:24em;height:40.6em;overflow:hidden}
.v-food-ticket-print .ticket{position:absolute;left:1em;bottom:0;width:22em;height:36em;box-sizing:border-box;padding:2.2em 1.8em 0;background:linear-gradient(180deg,#fbf9f3,#f1ede2);color:#1b1b1b;font-family:var(--font-mono);font-size:1em;line-height:1.55;transform-origin:50% 100%;transform:translateY(102%);clip-path:polygon(0% .7em,5% 0,10% .7em,15% 0,20% .7em,25% 0,30% .7em,35% 0,40% .7em,45% 0,50% .7em,55% 0,60% .7em,65% 0,70% .7em,75% 0,80% .7em,85% 0,90% .7em,95% 0,100% .7em,100% 100%,0% 100%);animation:food-ticket-print-print 6s cubic-bezier(.3,.6,.4,1) infinite}
.v-food-ticket-print .ticket>div{font-size:1.22em}
.v-food-ticket-print .ticket>.tk-h{display:flex;align-items:center;justify-content:center;gap:.35em;font-family:var(--font-body);font-weight:700;font-size:1.75em;letter-spacing:-.01em;white-space:nowrap;line-height:1.3}
.v-food-ticket-print .tk-h svg{flex:none;width:1.1em;height:1.1em;color:#1b1b1b}
.v-food-ticket-print .ticket>.tk-c{text-align:center;color:#55524b;font-size:1.1em}
.v-food-ticket-print .tk-c b{color:#1b1b1b;font-size:1.18em}
.v-food-ticket-print .ticket>.hr{height:0;margin:1em 0;border-top:1px dashed rgba(27,27,27,.45)}
.v-food-ticket-print .tk-r{display:flex;gap:1em;font-weight:700}
.v-food-ticket-print .ticket>.tk-m{padding-left:2.3em;color:#6a665d;font-size:1.1em}
.v-food-ticket-print .ticket>.fire{display:flex;align-items:center;justify-content:space-between;font-family:var(--font-display);font-weight:800;font-size:2.7em;line-height:1.2;letter-spacing:-.03em}
.v-food-ticket-print .fire svg{width:.9em;height:.9em;fill:var(--secondary)}
.v-food-ticket-print .ticket>.code{height:2.6em;margin-top:1.2em;font-size:1em;background:repeating-linear-gradient(90deg,#1b1b1b 0 .15em,transparent .15em .35em,#1b1b1b .35em .6em,transparent .6em .7em,#1b1b1b .7em .78em,transparent .78em 1.05em)}
.v-food-ticket-print .ticket>.stamp{position:absolute;right:.9em;top:6.3em;display:flex;flex-direction:column;align-items:center;padding:.2em .46em .24em;border:.12em solid var(--secondary);border-radius:.24em;color:var(--secondary);font-family:var(--font-display);font-weight:800;font-size:2.6em;line-height:1;mix-blend-mode:multiply;opacity:0;animation:food-ticket-print-stamp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ticket-print .stamp small{font-family:var(--font-mono);font-weight:500;font-size:.36em;margin-top:.3em}
.v-food-ticket-print .printer{position:absolute;left:0;top:40.6em;width:30em;height:11.6em;border-radius:0 0 1em 1em;background:linear-gradient(180deg,#45464b 0,#45464b 1.4em,#2c2d31 1.5em,#1d1e21);box-shadow:0 1.4em 2em rgba(0,0,0,.55),inset 0 .15em 0 rgba(255,255,255,.12)}
.v-food-ticket-print .printer .lip{position:absolute;left:2.4em;right:2.4em;top:0;height:.35em;background:#0c0c0d;border-radius:0 0 .3em .3em}
.v-food-ticket-print .printer .lbl{position:absolute;left:2.4em;top:4.4em;font-size:1.15em;font-weight:600;color:#8e8f96;letter-spacing:.02em}
.v-food-ticket-print .printer .vent{position:absolute;left:11em;right:7em;top:4.6em;height:2.4em;background:repeating-linear-gradient(90deg,#141416 0 .35em,transparent .35em .8em);opacity:.8}
.v-food-ticket-print .printer .led{position:absolute;right:2.6em;top:5.2em;width:1em;height:1em;border-radius:50%;background:#5dff8a;box-shadow:0 0 .8em #5dff8a,0 0 2em rgba(93,255,138,.6);animation:food-ticket-print-led 6s linear infinite}
@container (max-aspect-ratio: 4/5){
  .v-food-ticket-print .rail{display:none}
  .v-food-ticket-print .lamp{left:20cqw;width:60cqw;height:4cqw}
  .v-food-ticket-print .glow{left:0;top:-30cqw;width:100cqw;height:90cqw}
  .v-food-ticket-print .brand{left:8cqw;top:7cqh;font-size:5.6cqw;gap:2.4cqw}
  .v-food-ticket-print .brand svg{width:7.4cqw;height:7.4cqw}
  .v-food-ticket-print .h{left:8cqw;top:11.5cqh;width:84cqw;font-size:13cqw}
  .v-food-ticket-print .sub{left:8cqw;top:30cqh;width:84cqw;font-size:5.4cqw;line-height:1.3}
  .v-food-ticket-print .rig{left:23.75cqw;top:37cqh;font-size:1.75cqw}
  .v-food-ticket-print .shelf{top:86.6cqh}
  .v-food-ticket-print .stat{left:8cqw;right:8cqw;top:auto;bottom:4.5cqh;justify-content:center;text-align:center;white-space:normal;font-size:5.4cqw;gap:2.4cqw;padding:2.2cqw 4cqw;border-radius:8cqw}
  .v-food-ticket-print .stat svg{width:6cqw;height:6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-ticket-print .rail{left:86cqw;top:4cqw}
  .v-food-ticket-print .lamp{left:50cqw;width:46cqw}
  .v-food-ticket-print .brand{top:8cqw;font-size:2.4cqw;gap:1.2cqw}
  .v-food-ticket-print .brand svg{width:3.4cqw;height:3.4cqw}
  .v-food-ticket-print .h{top:13cqw;width:46cqw;font-size:10cqw}
  .v-food-ticket-print .sub{top:52cqw;width:42cqw;font-size:2.5cqw}
  .v-food-ticket-print .stat{top:66cqw;font-size:2.1cqw;padding:1.3cqw 2.2cqw;gap:1.4cqw}
  .v-food-ticket-print .stat svg{width:2.6cqw;height:2.6cqw}
  .v-food-ticket-print .rig{left:55cqw;top:30cqw;font-size:1.3cqw}
  .v-food-ticket-print .shelf{top:93.5cqw}
}
@keyframes food-ticket-print-print{0%,8%{transform:translateY(102%) rotate(0deg)}11%,12.5%{transform:translateY(88%) rotate(0deg)}15%,16.5%{transform:translateY(74%) rotate(0deg)}19%,20%{transform:translateY(60%) rotate(0deg)}23%,24.5%{transform:translateY(44%) rotate(0deg)}27%,28%{transform:translateY(28%) rotate(0deg)}31%,32%{transform:translateY(12%) rotate(0deg)}34%{transform:translateY(0) rotate(0deg)}60%{transform:translateY(0) rotate(.5deg)}84%{transform:translateY(0) rotate(-.3deg)}86%{transform:translateY(-1%) rotate(-1deg)}94%{transform:translateY(-135%) rotate(-7deg)}94.01%,100%{transform:translateY(102%) rotate(0deg)}}
@keyframes food-ticket-print-stamp{0%,38%{transform:scale(1.8) rotate(-22deg);opacity:0}41%{transform:scale(.92) rotate(-12deg);opacity:.92}44%,94%{transform:scale(1) rotate(-12deg);opacity:.92}94.01%,100%{transform:scale(1.8) rotate(-22deg);opacity:0}}
@keyframes food-ticket-print-led{0%,8%{opacity:.35}10%{opacity:1}13%{opacity:.35}16%{opacity:1}19%{opacity:.35}22%{opacity:1}25%{opacity:.35}28%{opacity:1}31%{opacity:.35}34%,96%{opacity:1}100%{opacity:.35}}
@keyframes food-ticket-print-lamp{0%,100%{opacity:.9}30%{opacity:1}55%{opacity:.86}80%{opacity:1}}
@keyframes food-ticket-print-sway{0%,100%{transform:rotate(0deg)}50%{transform:rotate(1.2deg)}}
@keyframes food-ticket-print-in0{0%,2%{transform:translateY(1.5cqw);opacity:0}12%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-1cqw);opacity:0}}
@keyframes food-ticket-print-word{0%,4%{transform:translateY(.55em);opacity:0}15%,86%{transform:translateY(0);opacity:1}95%,100%{transform:translateY(-.4em);opacity:0}}
@keyframes food-ticket-print-in4{0%,20%{transform:translateY(1.2cqw);opacity:0}32%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-.8cqw);opacity:0}}
@keyframes food-ticket-print-in5{0%,26%{transform:translateY(1.2cqw);opacity:0}38%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-.8cqw);opacity:0}}
`,
};

export const foodIngredientsDrop: SceneSpec = {
  id: "food-ingredients-drop",
  slug: "mg-food-ingredients-drop",
  name: "Ingredients Drop In",
  kind: "scene",
  job: "gallery",
  language: "kinetic-poster",
  mechanic: "ingredients-fall-into-bowl",
  energy: "punchy",
  settle: 3.2,
  colors: { ink: "#173A24", accent: "#E2543A", secondary: "#5EA13A", paper: "#DEEDCD" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["restaurant", "bowl", "ingredients", "price"],
  fields: [
    { key: "headline", label: "Headline", default: "Five things. One great bowl.", maxChars: 34, role: "headline" },
    { key: "brand", label: "Brand", default: "fennel. bowls", maxChars: 20, role: "label" },
    { key: "price", label: "Price", default: "$14", maxChars: 6, role: "value" },
    { key: "facts", label: "Facts", default: "32g protein · 540 kcal", maxChars: 30, role: "caption" },
  ],
  html: `<div class="brand"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" class="bdot"/><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" class="bleaf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
<h2 class="h"><span class="hs" data-21st-slot="headline">{{headline|words}}</span></h2>
<div class="bw">
  <i class="disc"></i>
  <div class="wrap">
    <i class="shadow"></i>
    <svg class="back" viewBox="0 0 300 200">
      <ellipse cx="150" cy="60" rx="140" ry="34" fill="#fbfaf6"/>
      <ellipse cx="150" cy="62" rx="131" ry="29" fill="#d7d1c2"/>
      <ellipse cx="150" cy="65" rx="124" ry="24" fill="#ead8ac"/>
      <g fill="#f6e8c5"><circle cx="60" cy="62" r="2"/><circle cx="74" cy="70" r="2"/><circle cx="92" cy="60" r="2"/><circle cx="110" cy="74" r="2"/><circle cx="130" cy="64" r="2"/><circle cx="150" cy="78" r="2"/><circle cx="170" cy="66" r="2"/><circle cx="190" cy="76" r="2"/><circle cx="208" cy="62" r="2"/><circle cx="226" cy="72" r="2"/><circle cx="244" cy="64" r="2"/><circle cx="84" cy="80" r="2"/><circle cx="214" cy="82" r="2"/></g>
      <g fill="#c9ab6c"><circle cx="66" cy="68" r="1.6"/><circle cx="100" cy="66" r="1.6"/><circle cx="140" cy="72" r="1.6"/><circle cx="180" cy="60" r="1.6"/><circle cx="200" cy="70" r="1.6"/><circle cx="236" cy="70" r="1.6"/><circle cx="120" cy="82" r="1.6"/><circle cx="168" cy="84" r="1.6"/></g>
    </svg>
    <div class="ing leaf"><svg viewBox="0 0 200 110"><path d="M10 80C40 20 110 10 150 40 110 70 60 92 10 80Z" fill="#4f9a3a"/><path d="M14 78C60 60 100 46 146 41" stroke="#8fd06a" stroke-width="3" fill="none"/><path d="M60 100C80 40 150 20 196 50 160 86 110 106 60 100Z" fill="#3d8a2e"/><path d="M64 98C100 76 150 58 192 51" stroke="#7cc25a" stroke-width="3" fill="none"/><path d="M30 96C50 70 90 64 120 76 96 96 62 104 30 96Z" fill="#69b84a"/><path d="M34 95C60 84 90 78 118 77" stroke="#a6dd84" stroke-width="2.4" fill="none"/></svg></div>
    <div class="ing egg"><svg viewBox="0 0 140 95"><ellipse cx="70" cy="50" rx="66" ry="42" fill="#fffaf0" stroke="#ede2cd" stroke-width="2"/><ellipse cx="72" cy="50" rx="34" ry="25" fill="#f39c1f"/><ellipse cx="72" cy="48" rx="22" ry="16" fill="#ffb93b"/><ellipse cx="60" cy="40" rx="8" ry="4" fill="rgba(255,255,255,.8)"/><g fill="#3a2a20"><circle cx="40" cy="36" r="1.4"/><circle cx="100" cy="64" r="1.4"/><circle cx="96" cy="30" r="1.2"/><circle cx="46" cy="68" r="1.2"/></g></svg></div>
    <div class="ing avo"><svg viewBox="0 0 170 115"><path d="M20 60C20 25 60 5 100 10 140 15 165 40 160 70 155 100 120 112 85 110 45 108 20 92 20 60Z" fill="#2f5a1f"/><path d="M30 60C30 32 64 16 100 20 134 24 152 44 148 70 144 94 116 102 86 100 52 98 30 86 30 60Z" fill="#c7df7a"/><ellipse cx="96" cy="60" rx="40" ry="30" fill="#e2ee9e"/><circle cx="98" cy="60" r="20" fill="#8a5a2b"/><circle cx="98" cy="60" r="20" fill="none" stroke="#6e4520" stroke-width="3"/><ellipse cx="91" cy="53" rx="6" ry="4" fill="rgba(255,255,255,.35)"/></svg></div>
    <div class="ing tom"><svg viewBox="0 0 150 85"><circle cx="35" cy="50" r="30" fill="#d93522"/><circle cx="31" cy="46" r="26" fill="#ec4630"/><circle cx="118" cy="52" r="28" fill="#d93522"/><circle cx="114" cy="48" r="24" fill="#ec4630"/><circle cx="78" cy="42" r="30" fill="#d93522"/><circle cx="74" cy="38" r="26" fill="#f0503a"/><g fill="rgba(255,255,255,.7)"><ellipse cx="22" cy="38" rx="6" ry="3.5"/><ellipse cx="66" cy="28" rx="6" ry="3.5"/><ellipse cx="106" cy="40" rx="5" ry="3"/></g><g fill="#3f8a2b"><path d="M78 14l4 6 7-2-5 5 4 6-7-3-4 6-1-7-7-1 7-3z"/><path d="M118 26l3 5 6-1-4 4 3 5-6-2-3 5-1-6-6-1 6-3z"/></g></svg></div>
    <div class="ing pea"><svg viewBox="0 0 130 65"><g fill="#e6c48a" stroke="#c4a063" stroke-width="2"><circle cx="20" cy="40" r="12"/><circle cx="42" cy="46" r="12"/><circle cx="36" cy="24" r="12"/><circle cx="62" cy="36" r="12"/><circle cx="84" cy="44" r="12"/><circle cx="78" cy="20" r="12"/><circle cx="106" cy="34" r="12"/></g><g fill="rgba(255,255,255,.55)"><circle cx="16" cy="36" r="3"/><circle cx="38" cy="42" r="3"/><circle cx="32" cy="20" r="3"/><circle cx="58" cy="32" r="3"/><circle cx="80" cy="40" r="3"/><circle cx="74" cy="16" r="3"/><circle cx="102" cy="30" r="3"/></g></svg></div>
    <div class="ing seed"><svg viewBox="0 0 400 100"><g fill="#fbf3dc"><ellipse cx="60" cy="50" rx="4" ry="2.4" transform="rotate(30 60 50)"/><ellipse cx="110" cy="30" rx="4" ry="2.4" transform="rotate(-20 110 30)"/><ellipse cx="150" cy="60" rx="4" ry="2.4" transform="rotate(60 150 60)"/><ellipse cx="200" cy="36" rx="4" ry="2.4"/><ellipse cx="240" cy="66" rx="4" ry="2.4" transform="rotate(-40 240 66)"/><ellipse cx="280" cy="40" rx="4" ry="2.4" transform="rotate(20 280 40)"/><ellipse cx="320" cy="58" rx="4" ry="2.4" transform="rotate(-10 320 58)"/><ellipse cx="180" cy="74" rx="4" ry="2.4" transform="rotate(50 180 74)"/></g><g fill="#2a2420"><ellipse cx="90" cy="62" rx="4" ry="2.4" transform="rotate(-30 90 62)"/><ellipse cx="170" cy="44" rx="4" ry="2.4" transform="rotate(10 170 44)"/><ellipse cx="226" cy="50" rx="4" ry="2.4" transform="rotate(70 226 50)"/><ellipse cx="300" cy="72" rx="4" ry="2.4" transform="rotate(-50 300 72)"/><ellipse cx="130" cy="78" rx="4" ry="2.4" transform="rotate(25 130 78)"/></g></svg></div>
    <svg class="front" viewBox="0 0 300 200">
      <defs><linearGradient id="food-id-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f1ede4"/><stop offset="1" stop-color="#d9d3c5"/></linearGradient></defs>
      <path d="M10 60A140 34 0 0 0 290 60Q284 150 216 182Q150 198 84 182Q16 150 10 60Z" fill="url(#food-id-body)"/>
      <path d="M22 102A130 40 0 0 0 278 102" fill="none" class="stripe" stroke-width="4"/>
      <path d="M30 116A122 38 0 0 0 270 116" fill="none" class="dots" stroke-width="2" stroke-dasharray="2 7" stroke-linecap="round"/>
      <path d="M46 98Q64 146 112 170" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>
      <path d="M10 60A140 34 0 0 0 290 60" fill="none" stroke="#ffffff" stroke-width="4"/>
    </svg>
  </div>
  <div class="badge"><svg viewBox="0 0 100 100"><polygon class="burst" points="50.0,0.0 56.0,4.4 62.9,1.7 67.6,7.5 75.0,6.7 78.0,13.5 85.4,14.6 86.5,22.0 93.3,25.0 92.5,32.4 98.3,37.1 95.6,44.0 100.0,50.0 95.6,56.0 98.3,62.9 92.5,67.6 93.3,75.0 86.5,78.0 85.4,85.4 78.0,86.5 75.0,93.3 67.6,92.5 62.9,98.3 56.0,95.6 50.0,100.0 44.0,95.6 37.1,98.3 32.4,92.5 25.0,93.3 22.0,86.5 14.6,85.4 13.5,78.0 6.7,75.0 7.5,67.6 1.7,62.9 4.4,56.0 0.0,50.0 4.4,44.0 1.7,37.1 7.5,32.4 6.7,25.0 13.5,22.0 14.6,14.6 22.0,13.5 25.0,6.7 32.4,7.5 37.1,1.7 44.0,4.4"/><circle cx="50" cy="50" r="40" fill="none" class="ring" stroke-width="1" stroke-dasharray="2 2.6"/></svg><div><b data-21st-slot="price">{{price}}</b></div></div>
</div>
<div class="facts"><i></i><span data-21st-slot="facts">{{facts}}</span></div>`,
  css: `
.v-food-ingredients-drop{color:var(--ink);font-family:var(--font-body)}
.v-food-ingredients-drop[data-backdrop="on"]{background:radial-gradient(circle at 74% 70%,color-mix(in srgb,var(--paper) 50%,#fff) 0%,transparent 46%),linear-gradient(180deg,var(--paper),color-mix(in srgb,var(--paper) 88%,var(--ink)))}
.v-food-ingredients-drop[data-backdrop="off"] .disc{display:none}
.v-food-ingredients-drop .brand{position:absolute;left:7cqw;top:12cqw;display:flex;align-items:center;gap:1cqw;font-size:1.7cqw;line-height:1.2;font-weight:600;white-space:nowrap;animation:food-ingredients-drop-in0 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ingredients-drop .brand svg{flex:none;width:2.6cqw;height:2.6cqw}
.v-food-ingredients-drop .bdot{fill:var(--ink)}
.v-food-ingredients-drop .bleaf{stroke:var(--paper)}
.v-food-ingredients-drop .h{position:absolute;left:7cqw;top:16cqw;width:44cqw;margin:0;font-family:var(--font-display);font-weight:800;font-size:6.6cqw;line-height:1.2;letter-spacing:-.045em}
.v-food-ingredients-drop .hs{display:block}
.v-food-ingredients-drop .h .w{display:inline-block;line-height:1.2;--delay:calc(.15s + var(--i) * .1s);animation:food-ingredients-drop-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ingredients-drop .h .w:nth-last-child(2){color:var(--accent)}
.v-food-ingredients-drop .bw{position:absolute;left:48cqw;top:6cqw;width:70em;height:55em;font-size:.62cqw}
.v-food-ingredients-drop .disc{position:absolute;z-index:-1;left:-7em;top:-14em;width:84em;height:84em;border-radius:50%;background:radial-gradient(circle at 50% 40%,color-mix(in srgb,var(--paper) 45%,#fff),transparent 65%);opacity:.6;animation:food-ingredients-drop-disc 6s ease-in-out infinite}
.v-food-ingredients-drop .wrap{position:absolute;inset:0;transform-origin:50% 85%;animation:food-ingredients-drop-wrap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ingredients-drop .shadow{position:absolute;left:3em;top:46em;width:64em;height:8em;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--ink) 30%,transparent),transparent)}
.v-food-ingredients-drop .back,.v-food-ingredients-drop .front{position:absolute;left:0;top:6em;width:70em;height:46.67em;overflow:visible}
.v-food-ingredients-drop .stripe{stroke:var(--secondary)}
.v-food-ingredients-drop .dots{stroke:var(--accent)}
.v-food-ingredients-drop .ing{position:absolute;transform-origin:50% 100%}
.v-food-ingredients-drop .ing svg{display:block;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 .6em .5em rgba(30,50,20,.22))}
.v-food-ingredients-drop .leaf{left:5em;top:10.5em;width:20em;height:11em;animation:food-ingredients-drop-leaf 6s linear infinite}
.v-food-ingredients-drop .egg{left:31em;top:8.75em;width:14em;height:9.5em;animation:food-ingredients-drop-egg 6s linear infinite}
.v-food-ingredients-drop .avo{left:44.5em;top:10.25em;width:17em;height:11.5em;animation:food-ingredients-drop-avo 6s linear infinite}
.v-food-ingredients-drop .tom{left:18.5em;top:15.25em;width:15em;height:8.5em;animation:food-ingredients-drop-tom 6s linear infinite}
.v-food-ingredients-drop .pea{left:37.5em;top:18.75em;width:13em;height:6.5em;animation:food-ingredients-drop-pea 6s linear infinite}
.v-food-ingredients-drop .seed{left:15em;top:10em;width:40em;height:10em;animation:food-ingredients-drop-seed 6s cubic-bezier(.4,0,.6,1) infinite}
.v-food-ingredients-drop .seed svg{filter:none}
.v-food-ingredients-drop .badge{position:absolute;left:54em;top:-7em;width:25em;height:25em;transform:scale(0);animation:food-ingredients-drop-badge 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ingredients-drop .badge svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 1.2em 1.6em rgba(120,40,20,.3))}
.v-food-ingredients-drop .burst{fill:var(--accent)}
.v-food-ingredients-drop .ring{stroke:color-mix(in srgb,var(--paper) 50%,transparent)}
.v-food-ingredients-drop .badge div{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--paper);text-align:center}
.v-food-ingredients-drop .badge b{font-family:var(--font-display);font-weight:800;font-size:7.4em;line-height:1.2;letter-spacing:-.03em;white-space:nowrap}
.v-food-ingredients-drop .facts{position:absolute;left:7cqw;top:40cqw;display:flex;align-items:center;gap:1cqw;padding:1cqw 2cqw;border-radius:4cqw;background:color-mix(in srgb,var(--paper) 55%,#fff);font-size:1.6cqw;line-height:1.2;font-weight:500;box-shadow:0 .6cqw 1.4cqw color-mix(in srgb,var(--ink) 12%,transparent);animation:food-ingredients-drop-chips 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-ingredients-drop .facts i{flex:none;width:1cqw;height:1cqw;border-radius:50%;background:var(--secondary);box-shadow:1.5cqw 0 0 var(--accent);margin-right:1.6cqw}
@container (max-aspect-ratio: 4/5){
  .v-food-ingredients-drop .brand{left:8cqw;top:8cqh;font-size:5.8cqw;gap:2.6cqw}
  .v-food-ingredients-drop .brand svg{width:8cqw;height:8cqw}
  .v-food-ingredients-drop .h{left:8cqw;top:13.5cqh;width:84cqw;font-size:13.6cqw}
  .v-food-ingredients-drop .bw{left:6.25cqw;top:40cqh;font-size:1.25cqw}
  .v-food-ingredients-drop .badge{left:47em;top:-6em}
  .v-food-ingredients-drop .facts{left:8cqw;right:8cqw;top:auto;bottom:8cqh;justify-content:center;font-size:5.6cqw;gap:3cqw;padding:3cqw 5cqw;border-radius:12cqw}
  .v-food-ingredients-drop .facts i{width:3cqw;height:3cqw;box-shadow:4.4cqw 0 0 var(--accent);margin-right:4.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-ingredients-drop .brand{top:6cqw;font-size:2.6cqw;gap:1.4cqw}
  .v-food-ingredients-drop .brand svg{width:4cqw;height:4cqw}
  .v-food-ingredients-drop .h{top:11cqw;width:86cqw;font-size:8.4cqw}
  .v-food-ingredients-drop .bw{left:15cqw;top:28cqw;font-size:1cqw}
  .v-food-ingredients-drop .badge{left:52em;top:-6em}
  .v-food-ingredients-drop .facts{left:50%;top:auto;bottom:4.5cqw;transform:translateX(-50%);font-size:2.4cqw;padding:1.4cqw 3cqw;white-space:nowrap}
  .v-food-ingredients-drop .facts i{width:1.6cqw;height:1.6cqw;box-shadow:2.4cqw 0 0 var(--accent);margin-right:2.4cqw}
}
@keyframes food-ingredients-drop-disc{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
@keyframes food-ingredients-drop-in0{0%,2%{transform:translateY(1.5cqw);opacity:0}11%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-1cqw);opacity:0}}
@keyframes food-ingredients-drop-word{0%,3%{transform:translateY(.5em);opacity:0}14%,86%{transform:translateY(0);opacity:1}95%,100%{transform:translateY(-.4em);opacity:0}}
@keyframes food-ingredients-drop-badge{0%,38%{transform:scale(0) rotate(-40deg)}44%{transform:scale(1.1) rotate(4deg)}48%{transform:scale(1) rotate(0deg)}84%{transform:scale(1) rotate(8deg)}92%,100%{transform:scale(0) rotate(30deg)}}
@keyframes food-ingredients-drop-chips{0%,40%{translate:0 3cqw;opacity:0}48%,86%{translate:0 0;opacity:1}93%,100%{translate:0 1cqw;opacity:0}}
@keyframes food-ingredients-drop-wrap{0%,86%{transform:translateY(0) scale(1);opacity:1}93%{transform:translateY(5em) scale(.94);opacity:0}95%{transform:translateY(3em) scale(.97);opacity:0}100%{transform:translateY(0) scale(1);opacity:1}}
@keyframes food-ingredients-drop-leaf{0%,8%{transform:translateY(-95em) rotate(-28deg) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.85,.36)}14%{transform:translateY(0) rotate(0deg) scale(1.08,.88);animation-timing-function:cubic-bezier(.2,.8,.2,1)}16.5%{transform:translateY(-1.6em) rotate(1.5deg) scale(.98,1.03);animation-timing-function:cubic-bezier(.5,0,.5,1)}19%,94%{transform:translateY(0) rotate(0deg) scale(1,1)}94.5%,100%{transform:translateY(-95em) rotate(-28deg) scale(1,1)}}
@keyframes food-ingredients-drop-egg{0%,13%{transform:translateY(-95em) rotate(40deg) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.85,.36)}19%{transform:translateY(0) rotate(0deg) scale(1.08,.86);animation-timing-function:cubic-bezier(.2,.8,.2,1)}21.5%{transform:translateY(-1.8em) rotate(-2deg) scale(.97,1.04);animation-timing-function:cubic-bezier(.5,0,.5,1)}24%,94%{transform:translateY(0) rotate(0deg) scale(1,1)}94.5%,100%{transform:translateY(-95em) rotate(40deg) scale(1,1)}}
@keyframes food-ingredients-drop-avo{0%,18%{transform:translateY(-95em) rotate(-50deg) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.85,.36)}24%{transform:translateY(0) rotate(-8deg) scale(1.07,.88);animation-timing-function:cubic-bezier(.2,.8,.2,1)}26.5%{transform:translateY(-1.6em) rotate(-10deg) scale(.98,1.03);animation-timing-function:cubic-bezier(.5,0,.5,1)}29%,94%{transform:translateY(0) rotate(-8deg) scale(1,1)}94.5%,100%{transform:translateY(-95em) rotate(-50deg) scale(1,1)}}
@keyframes food-ingredients-drop-tom{0%,23%{transform:translateY(-95em) rotate(30deg) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.85,.36)}29%{transform:translateY(0) rotate(0deg) scale(1.08,.86);animation-timing-function:cubic-bezier(.2,.8,.2,1)}31.5%{transform:translateY(-2em) rotate(3deg) scale(.97,1.04);animation-timing-function:cubic-bezier(.5,0,.5,1)}34%,94%{transform:translateY(0) rotate(0deg) scale(1,1)}94.5%,100%{transform:translateY(-95em) rotate(30deg) scale(1,1)}}
@keyframes food-ingredients-drop-pea{0%,27%{transform:translateY(-95em) rotate(-20deg) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.85,.36)}33%{transform:translateY(0) rotate(0deg) scale(1.08,.86);animation-timing-function:cubic-bezier(.2,.8,.2,1)}35.5%{transform:translateY(-1.2em) rotate(-2deg) scale(.98,1.03);animation-timing-function:cubic-bezier(.5,0,.5,1)}38%,94%{transform:translateY(0) rotate(0deg) scale(1,1)}94.5%,100%{transform:translateY(-95em) rotate(-20deg) scale(1,1)}}
@keyframes food-ingredients-drop-seed{0%,32%{transform:translateY(-16em);opacity:0}35%{opacity:1}40%,94%{transform:translateY(0);opacity:1}94.5%,100%{transform:translateY(-16em);opacity:0}}
`,
};

export const foodBookingSlots: SceneSpec = {
  id: "food-booking-slots",
  slug: "mg-food-booking-slots",
  name: "Table Booking Slots",
  kind: "scene",
  job: "product-ui",
  language: "glass",
  mechanic: "cursor-picks-time-slot",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#F6E9DA", accent: "#E3BF74", secondary: "#E2553F", paper: "#3A0E18" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["restaurant", "booking", "reservation", "app"],
  fields: [
    { key: "headline", label: "Headline", default: "Friday nights go fast.", maxChars: 30, role: "headline" },
    { key: "brand", label: "Brand", default: "fennel. wine bar", maxChars: 22, role: "label" },
    { key: "sub", label: "Subline", default: "Book a table in two taps. Small plates until late.", maxChars: 56, role: "body" },
    { key: "confirm", label: "Confirmation", default: "Table for 2 · Fri 10 Oct · 8:30 pm", maxChars: 36, role: "caption" },
  ],
  html: `<i class="bk b1"></i><i class="bk b2"></i><i class="bk b3"></i><i class="bk b4"></i>
<div class="copy"><div class="brand"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11.2" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
<h2 class="h"><span class="hs" data-21st-slot="headline">{{headline|words}}</span></h2>
<p class="p" data-21st-slot="sub">{{sub}}</p>
<div class="toast"><i class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></i><div><b data-21st-slot="confirm">{{confirm}}</b><small>Confirmed. We'll text you a reminder.</small></div></div></div>
<div class="card">
  <div class="ch"><b>Reserve a table</b><span>October 2026</span></div>
  <div class="dates"><span class="dim"><small>Mon</small>6</span><span><small>Tue</small>7</span><span><small>Wed</small>8</span><span><small>Thu</small>9</span><span class="sel"><small>Fri</small>10</span><span><small>Sat</small>11</span><span><small>Sun</small>12</span></div>
  <div class="guests"><span>Guests</span><div class="step"><i>−</i><b>2</b><i>+</i></div></div>
  <div class="slots"><span>6:00</span><span>6:30</span><span class="full">7:00</span><span>7:30</span><span>8:00</span><span>8:30<em class="on">8:30</em><i class="last">2 left</i></span><span>9:00</span><span class="full">9:30</span></div>
  <div class="btn"><span class="t1">Reserve table</span><span class="t2">Booked<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span></div>
  <i class="ripple r1"></i><i class="ripple r2"></i>
  <div class="cursor"><svg viewBox="0 0 24 24"><path d="M4 2.5l15.5 9.2-6.6 1.5 3.9 7.1-2.9 1.6-3.9-7.2L4.7 19z" fill="#fff" stroke="#1a0a0e" stroke-width="1.3" stroke-linejoin="round"/></svg></div>
</div>`,
  css: `
.v-food-booking-slots{color:var(--ink);font-family:var(--font-body);--ongold:color-mix(in srgb,var(--accent) 16%,#120406)}
.v-food-booking-slots[data-backdrop="on"]{background:radial-gradient(circle at 18% 28%,color-mix(in srgb,var(--accent) 16%,transparent),transparent 42%),radial-gradient(circle at 80% 90%,color-mix(in srgb,var(--accent) 12%,transparent),transparent 40%),linear-gradient(135deg,color-mix(in srgb,var(--paper) 78%,#000),var(--paper) 58%,color-mix(in srgb,var(--paper) 74%,#000))}
.v-food-booking-slots[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-food-booking-slots[data-backdrop="off"] .bk{display:none}
.v-food-booking-slots .bk{position:absolute;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 50%,transparent),transparent 70%);filter:blur(.4cqw);animation:food-booking-slots-bk 6s ease-in-out infinite}
.v-food-booking-slots .b1{left:40cqw;top:2cqw;width:9cqw;height:9cqw}
.v-food-booking-slots .b2{left:2cqw;top:44cqw;width:12cqw;height:12cqw;opacity:.7}
.v-food-booking-slots .b3{left:90cqw;top:44cqw;width:7cqw;height:7cqw}
.v-food-booking-slots .b4{left:30cqw;top:49cqw;width:5cqw;height:5cqw;opacity:.6}
.v-food-booking-slots .copy{position:absolute;left:7cqw;top:6cqw;bottom:6cqw;width:41cqw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:1.6cqw}
.v-food-booking-slots .brand{display:flex;align-items:center;gap:.8cqw;font-size:1.4cqw;line-height:1.2;letter-spacing:.12em;white-space:nowrap;color:var(--accent);animation:food-booking-slots-in0 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .brand svg{flex:none;width:2.2cqw;height:2.2cqw}
.v-food-booking-slots .h{align-self:stretch;margin:0;font-family:var(--font-display);font-weight:400;font-size:6cqw;line-height:1.2;letter-spacing:-.01em}
.v-food-booking-slots .hs{display:block;padding-block:.26em;margin-block:-.26em}
.v-food-booking-slots .h .w{display:inline-block;line-height:1.2;--delay:calc(.2s + var(--i) * .1s);animation:food-booking-slots-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .h .w:nth-last-child(-n+2){font-style:italic;color:var(--accent)}
.v-food-booking-slots .p{max-width:34cqw;margin:0;font-size:1.6cqw;line-height:1.45;color:color-mix(in srgb,var(--ink) 66%,transparent);animation:food-booking-slots-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .toast{flex:none;margin-top:1.4cqw;width:38em;box-sizing:border-box;font-size:1cqw;display:flex;align-items:center;gap:1.6em;padding:1.6em 2em;border-radius:1.6em;background:var(--ink);color:var(--paper);box-shadow:0 1.6em 4em rgba(0,0,0,.4);opacity:0;animation:food-booking-slots-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .ck{flex:none;width:4em;height:4em;border-radius:50%;background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent));color:var(--ongold);display:grid;place-items:center}
.v-food-booking-slots .ck svg{width:2.2em;height:2.2em}
.v-food-booking-slots .toast div{min-width:0}
.v-food-booking-slots .toast b{display:block;font-size:1.55em;line-height:1.25;font-weight:600}
.v-food-booking-slots .toast small{display:block;font-size:1.15em;line-height:1.2;opacity:.65;margin-top:.3em}
.v-food-booking-slots .card{position:absolute;left:51cqw;top:9.4cqw;width:42em;height:37.4em;font-size:1cqw;border-radius:2em;background:linear-gradient(160deg,color-mix(in srgb,var(--ink) 10%,transparent),color-mix(in srgb,var(--ink) 3%,transparent)),color-mix(in srgb,var(--paper) 70%,#000);border:1px solid color-mix(in srgb,var(--accent) 22%,transparent);box-shadow:0 2.4em 6em rgba(0,0,0,.45),inset 0 1px 0 color-mix(in srgb,var(--ink) 14%,transparent);animation:food-booking-slots-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .ch{position:absolute;left:2.4em;right:2.4em;top:2.3em;display:flex;justify-content:space-between;align-items:baseline}
.v-food-booking-slots .ch b{font-size:1.75em;font-weight:600}
.v-food-booking-slots .ch span{font-size:1.3em;color:var(--accent)}
.v-food-booking-slots .dates{position:absolute;left:2.4em;right:2.4em;top:6.4em;display:grid;grid-template-columns:repeat(7,1fr);gap:.8em}
.v-food-booking-slots .dates span{height:5.8em;border-radius:1.2em;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:1em;font-weight:500;background:color-mix(in srgb,var(--ink) 5%,transparent);border:1px solid color-mix(in srgb,var(--ink) 8%,transparent)}
.v-food-booking-slots .dates span{font-size:1.9em;height:3.05em;border-radius:.63em}
.v-food-booking-slots .dates small{font-size:.5em;opacity:.55;margin-bottom:.2em}
.v-food-booking-slots .dates .sel{background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent));color:var(--ongold);border-color:transparent;box-shadow:0 .4em 1em color-mix(in srgb,var(--accent) 35%,transparent)}
.v-food-booking-slots .dates .sel small{opacity:.75}
.v-food-booking-slots .dates .dim{opacity:.4}
.v-food-booking-slots .guests{position:absolute;left:2.4em;right:2.4em;top:14.4em;display:flex;justify-content:space-between;align-items:center;font-size:1em;color:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-food-booking-slots .guests>span{font-size:1.4em}
.v-food-booking-slots .step{display:flex;align-items:center;gap:1.4em;color:var(--ink)}
.v-food-booking-slots .step i{width:2.8em;height:2.8em;border-radius:50%;border:1px solid color-mix(in srgb,var(--ink) 25%,transparent);display:grid;place-items:center;font-style:normal;font-size:1.5em;width:1.87em;height:1.87em}
.v-food-booking-slots .step b{font-size:1.7em;font-weight:600}
.v-food-booking-slots .slots{position:absolute;left:2.4em;right:2.4em;top:19.6em;display:grid;grid-template-columns:repeat(4,1fr);gap:.9em}
.v-food-booking-slots .slots span{position:relative;height:3.8em;border-radius:1em;display:grid;place-items:center;font-size:1em;font-weight:500;background:color-mix(in srgb,var(--ink) 6%,transparent);border:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}
.v-food-booking-slots .slots span{font-size:1.45em;height:2.62em;border-radius:.69em}
.v-food-booking-slots .slots .full{opacity:.35;text-decoration:line-through}
.v-food-booking-slots .slots .on{position:absolute;inset:-1px;border-radius:.69em;display:grid;place-items:center;font-style:normal;background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent));color:var(--ongold);font-weight:600;box-shadow:0 .55em 1.5em color-mix(in srgb,var(--accent) 45%,transparent);opacity:0;animation:food-booking-slots-pick 6s cubic-bezier(.3,1.4,.5,1) infinite}
.v-food-booking-slots .slots .last{position:absolute;right:-.4em;top:-.83em;padding:.14em .41em;border-radius:.7em;background:var(--secondary);color:#fff;font-style:normal;font-size:.59em;line-height:1.2;font-weight:600;white-space:nowrap}
.v-food-booking-slots .btn{position:absolute;left:2.4em;right:2.4em;top:30.4em;height:4.6em;border-radius:1.2em;background:var(--ink);color:var(--paper);font-weight:600;overflow:hidden;animation:food-booking-slots-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .btn span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.5em;font-size:1.55em}
.v-food-booking-slots .btn svg{width:1.1em;height:1.1em}
.v-food-booking-slots .t1{animation:food-booking-slots-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .t2{opacity:0;color:var(--ongold);background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent));animation:food-booking-slots-t2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .ripple{position:absolute;width:5em;height:5em;margin:-2.5em 0 0 -2.5em;border-radius:50%;border:.25em solid color-mix(in srgb,var(--accent) 80%,#fff);opacity:0}
.v-food-booking-slots .r1{left:16.24em;top:26.2em;animation:food-booking-slots-r1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .r2{left:21em;top:32.7em;animation:food-booking-slots-r2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-booking-slots .cursor{position:absolute;left:0;top:0;width:2.8em;height:2.8em;transform-origin:0 0;filter:drop-shadow(0 .4em .6em rgba(0,0,0,.45));opacity:0;animation:food-booking-slots-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-food-booking-slots .cursor svg{display:block;width:100%;height:100%}
@container (max-aspect-ratio: 4/5){
  .v-food-booking-slots .b1{left:70cqw;top:4cqh;width:20cqw;height:20cqw}
  .v-food-booking-slots .b2{left:-4cqw;top:70cqh;width:26cqw;height:26cqw}
  .v-food-booking-slots .b3{left:84cqw;top:62cqh;width:14cqw;height:14cqw}
  .v-food-booking-slots .copy{left:8cqw;right:8cqw;width:auto;top:7cqh;bottom:4cqh;justify-content:flex-start;gap:2cqw}
  .v-food-booking-slots .brand{font-size:5.4cqw;gap:2.4cqw;letter-spacing:.06em}
  .v-food-booking-slots .brand svg{width:7cqw;height:7cqw}
  .v-food-booking-slots .h{font-size:10.5cqw}
  .v-food-booking-slots .p{max-width:none;font-size:5.4cqw;line-height:1.3}
  .v-food-booking-slots .card{left:10cqw;top:41cqh;font-size:1.9cqw}
  .v-food-booking-slots .toast{margin:auto -3cqw 0;align-self:stretch;width:auto;font-size:2.2cqw;padding:3.6cqw 4.4cqw;border-radius:4.4cqw;gap:3.6cqw}
  .v-food-booking-slots .toast b{font-size:5.4cqw;line-height:1.2}
  .v-food-booking-slots .toast small{font-size:3.4cqw;margin-top:.6cqw}
  .v-food-booking-slots .ck{width:12cqw;height:12cqw}
  .v-food-booking-slots .ck svg{width:6.4cqw;height:6.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-booking-slots .copy{right:7cqw;width:auto;top:6.5cqw;bottom:4cqw;justify-content:flex-start;gap:1.4cqw}
  .v-food-booking-slots .brand{font-size:2.3cqw;gap:1.2cqw}
  .v-food-booking-slots .brand svg{width:3.4cqw;height:3.4cqw}
  .v-food-booking-slots .h{font-size:7.4cqw}
  .v-food-booking-slots .p{max-width:70cqw;font-size:2.4cqw}
  .v-food-booking-slots .card{left:auto;right:7cqw;top:38cqw;font-size:1.3cqw}
  .v-food-booking-slots .toast{margin-top:auto;width:56cqw;font-size:1.5cqw}
  .v-food-booking-slots .toast b{font-size:1.8em}
}
@keyframes food-booking-slots-bk{0%,100%{transform:translate(0,0)}50%{transform:translate(2cqw,-1.4cqw)}}
@keyframes food-booking-slots-in0{0%,2%{transform:translateY(1.5cqw);opacity:0}12%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-1cqw);opacity:0}}
@keyframes food-booking-slots-in1{0%,5%{transform:translateY(.3em);opacity:0;filter:blur(.08em)}17%,86%{transform:translateY(0);opacity:1;filter:blur(0)}94%,100%{transform:translateY(-.15em);opacity:0;filter:blur(0)}}
@keyframes food-booking-slots-in2{0%,9%{transform:translateY(1.4cqw);opacity:0}20%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-1cqw);opacity:0}}
@keyframes food-booking-slots-card{0%{transform:translateX(4em);opacity:0}12%,86%{transform:translateX(0);opacity:1}95%,100%{transform:translateX(3em);opacity:0}}
@keyframes food-booking-slots-pick{0%,25.5%{transform:scale(.8);opacity:0}28%,86%{transform:scale(1);opacity:1}94%,100%{transform:scale(.8);opacity:0}}
@keyframes food-booking-slots-r1{0%,25.5%{transform:scale(.2);opacity:0}26%{transform:scale(.3);opacity:.9}33%,100%{transform:scale(2.4);opacity:0}}
@keyframes food-booking-slots-r2{0%,37.5%{transform:scale(.2);opacity:0}38%{transform:scale(.3);opacity:.9}45%,100%{transform:scale(3);opacity:0}}
@keyframes food-booking-slots-btn{0%,37.5%{transform:scale(1)}39%{transform:scale(.96)}41.5%,100%{transform:scale(1)}}
@keyframes food-booking-slots-t1{0%,40%{transform:translateY(0);opacity:1}43%,88%{transform:translateY(-.8em);opacity:0}96%,100%{transform:translateY(0);opacity:1}}
@keyframes food-booking-slots-t2{0%,40%{transform:translateY(.8em);opacity:0}43%,88%{transform:translateY(0);opacity:1}96%,100%{transform:translateY(.8em);opacity:0}}
@keyframes food-booking-slots-toast{0%,42%{transform:translateY(3em) scale(.96);opacity:0}50%,86%{transform:translateY(0) scale(1);opacity:1}94%,100%{transform:translateY(1em) scale(1);opacity:0}}
@keyframes food-booking-slots-cur{0%{transform:translate(46em,50.6em) scale(1);opacity:0}10%{transform:translate(35em,40.6em) scale(1);opacity:1}24%{transform:translate(16.2em,26.2em) scale(1)}26%{transform:translate(16.2em,26.2em) scale(.84)}28%{transform:translate(16.2em,26.2em) scale(1)}36%{transform:translate(21em,32.7em) scale(1)}38%{transform:translate(21em,32.7em) scale(.84)}40%{transform:translate(21em,32.7em) scale(1)}54%{transform:translate(30em,40.6em) scale(1);opacity:1}84%{transform:translate(32em,41.6em) scale(1);opacity:1}92%,100%{transform:translate(36em,44.6em) scale(1);opacity:0}}
`,
};

// part:food-chalkboard-special
export const foodChalkboardSpecial: SceneSpec = {
  id: "food-chalkboard-special",
  slug: "mg-food-chalkboard-special",
  name: "Chalkboard Daily Special",
  kind: "scene",
  job: "titles",
  language: "hand-drawn",
  mechanic: "chalk-handwriting-reveal",
  energy: "calm",
  settle: 3.1,
  colors: { ink: "#F2F0E6", accent: "#F4D97B", secondary: "#F3A6A6", paper: "#1C2823" },
  fonts: { display: "Caveat", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.accent",
  tags: ["restaurant", "special", "chalk"],
  fields: [
    { key: "dish", label: "Dish", default: "Grilled sea bream", maxChars: 20, role: "headline" },
    { key: "desc", label: "Description", default: "lemon · capers · charred fennel", maxChars: 36, role: "body" },
    { key: "price", label: "Price", default: "$24", maxChars: 6, role: "value" },
    { key: "note", label: "Note", default: "until it's gone!", maxChars: 22, role: "cta" },
  ],
  html: `<div class="board">
  <div class="ink">
    <div class="w lbl">today's special</div>
    <svg class="dr swoosh" viewBox="0 0 100 12" preserveAspectRatio="none"><path pathLength="1" d="M2 7C20 3 50 2 70 5S92 9 98 4"/></svg>
    <div class="w t1" data-21st-slot="dish">{{dish}}</div>
    <div class="w t2" data-21st-slot="desc">{{desc}}</div>
    <div class="w price" data-21st-slot="price">{{price}}</div>
    <svg class="dr ring" viewBox="0 0 100 70" preserveAspectRatio="none"><path pathLength="1" d="M60 6C30 2 6 14 6 34S30 66 56 64 96 50 94 30 72 4 44 8"/></svg>
    <svg class="dr fish" viewBox="0 0 200 110"><path pathLength="1" d="M18 56C40 22 96 14 136 40L170 18C166 38 166 70 172 94L136 72C98 98 42 92 18 56Z"/><path pathLength="1" d="M18 56C24 54 30 56 34 60"/><path pathLength="1" d="M58 34C66 48 66 66 58 80"/><path pathLength="1" d="M80 30C94 26 112 30 120 36M78 84C92 88 110 84 120 76"/><path pathLength="1" d="M42 46a3 3 0 1 0 .1 0"/><path class="y" pathLength="1" d="M150 92C162 74 186 72 196 88ZM158 88L173 79M168 90L176 80M182 88L178 78"/><path pathLength="1" d="M90 46L96 52M104 44L110 50M98 58L104 64"/></svg>
    <svg class="dr arrow" viewBox="0 0 100 26"><path pathLength="1" d="M4 18C30 24 60 22 92 10M80 6L93 10 84 20"/></svg>
    <div class="w ft" data-21st-slot="note">{{note}}</div>
  </div>
  <i class="grain"></i>
  <div class="chalk"></div>
</div>
<div class="ledge"><i></i><i></i><i></i></div>`,
  css: `
.v-food-chalkboard-special{color:var(--ink);font-family:var(--font-display)}
.v-food-chalkboard-special[data-backdrop="on"]{background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 .25cqw,transparent .25cqw 1.3cqw),linear-gradient(160deg,#7a4f2c,#5a3820 50%,#47291a)}
.v-food-chalkboard-special[data-backdrop="off"] .ledge{display:none}
.v-food-chalkboard-special .board{position:absolute;inset:2.4cqw;border-radius:.8cqw;overflow:hidden;background:radial-gradient(ellipse 45% 40% at 28% 38%,color-mix(in srgb,var(--ink) 7%,transparent),transparent 70%),radial-gradient(ellipse 40% 45% at 78% 72%,color-mix(in srgb,var(--ink) 5%,transparent),transparent 70%),linear-gradient(170deg,color-mix(in srgb,var(--paper) 90%,var(--ink)),var(--paper) 60%,color-mix(in srgb,var(--paper) 88%,#000));box-shadow:inset 0 0 3cqw rgba(0,0,0,.5),inset 0 0 0 .2cqw rgba(0,0,0,.35);animation:food-chalkboard-special-cam 6s ease-in-out infinite}
.v-food-chalkboard-special .ink{position:absolute;inset:0}
.v-food-chalkboard-special .w{position:absolute;white-space:nowrap;line-height:1.2;padding:.1em .25em .15em 0;text-shadow:0 0 .3cqw color-mix(in srgb,var(--ink) 35%,transparent);clip-path:inset(0 100% 0 0)}
.v-food-chalkboard-special .lbl{left:5.6cqw;top:2cqw;font-size:3.8cqw;color:var(--accent);animation:food-chalkboard-special-wl 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .t1{left:5cqw;top:7.2cqw;font-size:8.6cqw;font-weight:700;letter-spacing:-.01em;animation:food-chalkboard-special-w1 6s cubic-bezier(.4,.15,.6,.9) infinite}
.v-food-chalkboard-special .t2{left:5.6cqw;top:19cqw;font-size:4.1cqw;color:color-mix(in srgb,var(--ink) 88%,transparent);animation:food-chalkboard-special-w2 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .price{left:75.5cqw;top:3cqw;font-size:8.6cqw;font-weight:700;color:var(--accent);animation:food-chalkboard-special-wp 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .ft{left:5.6cqw;top:33cqw;font-size:4.6cqw;font-weight:700;color:var(--secondary);animation:food-chalkboard-special-wf 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .dr{position:absolute;overflow:visible}
.v-food-chalkboard-special .dr path{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1 1;stroke-dashoffset:1}
.v-food-chalkboard-special .swoosh{left:5.6cqw;top:6.8cqw;width:21cqw;height:2.4cqw}
.v-food-chalkboard-special .swoosh path{stroke:var(--accent);stroke-width:1.6;animation:food-chalkboard-special-d1 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .ring{left:72.6cqw;top:3cqw;width:19.6cqw;height:13.4cqw}
.v-food-chalkboard-special .ring path{stroke:var(--ink);stroke-width:1.3;animation:food-chalkboard-special-d2 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .fish{left:57cqw;top:24.6cqw;width:35cqw;height:19cqw}
.v-food-chalkboard-special .fish path{stroke:var(--ink);stroke-width:1.4;animation:food-chalkboard-special-d3 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .fish .y{stroke:var(--accent)}
.v-food-chalkboard-special .arrow{left:31cqw;top:35.4cqw;width:24cqw;height:6cqw}
.v-food-chalkboard-special .arrow path{stroke:var(--secondary);stroke-width:1.3;animation:food-chalkboard-special-d4 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .grain{position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 1.5 -.62'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E") 0 0/16cqw 16cqw;opacity:.35;mix-blend-mode:overlay}
.v-food-chalkboard-special .chalk{position:absolute;left:0;top:0;width:4.4cqw;height:1.1cqw;border-radius:.35cqw;background:linear-gradient(180deg,#fdfcf6,#d6d2c6);transform-origin:0 50%;box-shadow:0 .4cqw .6cqw rgba(0,0,0,.45);opacity:0;animation:food-chalkboard-special-chalk 6s cubic-bezier(.45,.1,.55,.9) infinite}
.v-food-chalkboard-special .ledge{position:absolute;left:0;right:0;bottom:0;height:3cqw;background:linear-gradient(180deg,#9a6a40,#6b4528 40%,#4a2e1a);box-shadow:0 -.4cqw .8cqw rgba(0,0,0,.4)}
.v-food-chalkboard-special .ledge i{position:absolute;top:.5cqw;height:.9cqw;border-radius:.3cqw;background:var(--ink)}
.v-food-chalkboard-special .ledge i:nth-child(1){left:70cqw;width:3.6cqw;background:#f4f1e6}
.v-food-chalkboard-special .ledge i:nth-child(2){left:75cqw;width:2.4cqw;background:var(--accent);rotate:-6deg}
.v-food-chalkboard-special .ledge i:nth-child(3){left:79cqw;width:3cqw;background:var(--secondary);rotate:4deg}
@container (max-aspect-ratio: 4/5){
  .v-food-chalkboard-special .board{border-radius:2cqw}
  .v-food-chalkboard-special .chalk,.v-food-chalkboard-special .arrow{display:none}
  .v-food-chalkboard-special .lbl{left:5.6cqw;top:4.5cqh;font-size:7.4cqw}
  .v-food-chalkboard-special .swoosh{left:5.6cqw;top:calc(5cqh + 9.4cqw);width:44cqw;height:4cqw}
  .v-food-chalkboard-special .t1{left:5cqw;right:4cqw;top:12cqh;font-size:19cqw;white-space:normal}
  .v-food-chalkboard-special .t2{left:5.6cqw;right:4cqw;top:37cqh;font-size:8.4cqw;white-space:normal}
  .v-food-chalkboard-special .price{left:50cqw;top:48.5cqh;font-size:19cqw}
  .v-food-chalkboard-special .ring{left:43cqw;top:47cqh;width:48cqw;height:36cqw}
  .v-food-chalkboard-special .fish{left:14cqw;top:63cqh;width:66cqw;height:36cqw}
  .v-food-chalkboard-special .ft{left:5.6cqw;top:auto;bottom:7cqh;font-size:11cqw}
  .v-food-chalkboard-special .ledge{height:4.6cqw}
  .v-food-chalkboard-special .ledge i{top:.9cqw;height:1.8cqw}
  .v-food-chalkboard-special .ledge i:nth-child(1){left:56cqw;width:7cqw}
  .v-food-chalkboard-special .ledge i:nth-child(2){left:66cqw;width:5cqw}
  .v-food-chalkboard-special .ledge i:nth-child(3){left:74cqw;width:6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-chalkboard-special .board{border-radius:1.2cqw}
  .v-food-chalkboard-special .chalk,.v-food-chalkboard-special .arrow{display:none}
  .v-food-chalkboard-special .lbl{left:5.6cqw;top:4cqw;font-size:4.6cqw}
  .v-food-chalkboard-special .swoosh{left:5.6cqw;top:10.4cqw;width:28cqw;height:3cqw}
  .v-food-chalkboard-special .t1{left:5cqw;right:4cqw;top:13cqw;font-size:10.4cqw;white-space:normal}
  .v-food-chalkboard-special .t2{left:5.6cqw;right:4cqw;top:28cqw;font-size:5cqw;white-space:normal}
  .v-food-chalkboard-special .price{left:64cqw;top:44cqw;font-size:11.5cqw}
  .v-food-chalkboard-special .ring{left:59cqw;top:43cqw;width:30cqw;height:21cqw}
  .v-food-chalkboard-special .fish{left:6cqw;top:41cqw;width:48cqw;height:26cqw}
  .v-food-chalkboard-special .ft{left:5.6cqw;top:auto;bottom:10cqw;font-size:6.4cqw}
  .v-food-chalkboard-special .ledge{height:3.6cqw}
}
@keyframes food-chalkboard-special-cam{0%,100%{transform:scale(1)}50%{transform:scale(1.012)}}
@keyframes food-chalkboard-special-wl{0%,4%{clip-path:inset(0 100% 0 0)}10%,100%{clip-path:inset(-10% -2% -10% 0)}}
@keyframes food-chalkboard-special-w1{0%,11%{clip-path:inset(0 100% 0 0)}28%,100%{clip-path:inset(-10% -2% -10% 0)}}
@keyframes food-chalkboard-special-w2{0%,28%{clip-path:inset(0 100% 0 0)}35%,100%{clip-path:inset(-10% -2% -10% 0)}}
@keyframes food-chalkboard-special-wp{0%,30%{clip-path:inset(0 100% 0 0)}36%,100%{clip-path:inset(-10% -2% -10% 0)}}
@keyframes food-chalkboard-special-wf{0%,41%{clip-path:inset(0 100% 0 0)}46%,100%{clip-path:inset(-10% -2% -10% 0)}}
@keyframes food-chalkboard-special-d1{0%,9%{stroke-dashoffset:1}13%,100%{stroke-dashoffset:0}}
@keyframes food-chalkboard-special-d2{0%,37%{stroke-dashoffset:1}45%,100%{stroke-dashoffset:0}}
@keyframes food-chalkboard-special-d3{0%,35%{stroke-dashoffset:1}48%,100%{stroke-dashoffset:0}}
@keyframes food-chalkboard-special-d4{0%,45%{stroke-dashoffset:1}49%,100%{stroke-dashoffset:0}}
@keyframes food-chalkboard-special-chalk{0%{transform:translate(98cqw,54cqw) rotate(-32deg);opacity:0}10%{transform:translate(6cqw,15.6cqw) rotate(-32deg);opacity:1}13%{transform:translate(14cqw,14.2cqw) rotate(-30deg)}16%{transform:translate(24cqw,16cqw) rotate(-33deg)}19%{transform:translate(34cqw,14.4cqw) rotate(-30deg)}22%{transform:translate(45cqw,16.2cqw) rotate(-33deg)}25%{transform:translate(55cqw,14.5cqw) rotate(-30deg)}28%{transform:translate(66cqw,15.6cqw) rotate(-32deg)}31%{transform:translate(76.5cqw,10cqw) rotate(-32deg)}36%{transform:translate(87cqw,10.6cqw) rotate(-30deg)}39%{transform:translate(91cqw,8cqw) rotate(-30deg)}42%{transform:translate(83cqw,15.6cqw) rotate(-34deg)}45%{transform:translate(73.5cqw,8.6cqw) rotate(-30deg);opacity:1}49%,100%{transform:translate(98cqw,54cqw) rotate(-32deg);opacity:0}}
`,
};
// end:food-chalkboard-special

// part:food-review-stars
const FOOD_STAR_ROW = `<path d="M11 1.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L11 16.3l-5.9 3.3 1.3-6.6L1.5 8.4l6.6-.8z"/><path transform="translate(24.5 0)" d="M11 1.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L11 16.3l-5.9 3.3 1.3-6.6L1.5 8.4l6.6-.8z"/><path transform="translate(49 0)" d="M11 1.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L11 16.3l-5.9 3.3 1.3-6.6L1.5 8.4l6.6-.8z"/><path transform="translate(73.5 0)" d="M11 1.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L11 16.3l-5.9 3.3 1.3-6.6L1.5 8.4l6.6-.8z"/><path transform="translate(98 0)" d="M11 1.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L11 16.3l-5.9 3.3 1.3-6.6L1.5 8.4l6.6-.8z"/>`;
const FOOD_REVIEW_CARD = (n: number, ini: string, name: string, meta: string, quote: string) =>
  `<div class="card c${n}"><div class="hd"><i class="av av${n}">${ini}</i><div class="who"><b>${name}</b><small>${meta}</small></div><svg class="mini" viewBox="0 0 120 22" fill="currentColor">${FOOD_STAR_ROW}</svg></div><p${n === 3 ? ' data-21st-slot="quote"' : ""}>${quote}</p></div>`;

export const foodReviewStars: SceneSpec = {
  id: "food-review-stars",
  slug: "mg-food-review-stars",
  name: "Guest Rating Stack",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "score-roll-review-stack",
  energy: "calm",
  settle: 3.1,
  colors: { ink: "#221A14", accent: "#D8462B", secondary: "#B8892F", paper: "#F5EDE0" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["restaurant", "reviews", "rating"],
  fields: [
    { key: "score", label: "Rating", default: "4.9", maxChars: 4, role: "value" },
    { key: "kicker", label: "Kicker", default: "what our guests say", maxChars: 30, role: "kicker" },
    { key: "count", label: "Review count", default: "from 2,140 reviews", maxChars: 30, role: "caption" },
    { key: "quote", label: "Featured review", default: "“Best bowl in the city, and it arrived still steaming.”", maxChars: 64, role: "body" },
  ],
  html: `<div class="q">“</div>
<div class="left">
  <div class="lbl"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="currentColor"/><path class="leaf" d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="score" data-21st-slot="score">{{score|chars}}</div>
  <div class="stars"><svg class="bg" viewBox="0 0 120 22"><g fill="currentColor">${FOOD_STAR_ROW}</g></svg><svg class="fill" viewBox="0 0 120 22"><g fill="currentColor">${FOOD_STAR_ROW}</g></svg></div>
  <p class="count" data-21st-slot="count">{{count}}</p>
  <div class="award"><svg viewBox="0 0 30 22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M8 20C3 16 2 9 5 3M5 8C3 8 2 7 2 5M4 13C2 13 1 12 1 10M7 17C5 18 4 17 3 16M22 20c5-4 6-11 3-17M25 8c2 0 3-1 3-3M26 13c2 0 3-1 3-3M23 17c2 1 3 0 4-1"/><path d="M15 6l1.5 3 3.3.4-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.4z" fill="currentColor" stroke="none"/></svg>City Eats · best of 2026</div>
</div>
<div class="stack">
  ${FOOD_REVIEW_CARD(1, "AR", "Aiko R.", "2 days ago", "“The broth is unreal. I still think about it on Mondays.”")}
  ${FOOD_REVIEW_CARD(2, "JP", "Jonah P.", "last week", "“Got a Friday table in two taps. That pappardelle, wow.”")}
  ${FOOD_REVIEW_CARD(3, "LM", "Leo M.", "yesterday", "{{quote}}")}
</div>`,
  css: `
.v-food-review-stars{color:var(--ink);font-family:var(--font-body)}
.v-food-review-stars[data-backdrop="on"]{background:radial-gradient(ellipse 60% 70% at 72% 50%,color-mix(in srgb,var(--paper) 60%,#fff),transparent 70%),linear-gradient(180deg,var(--paper),color-mix(in srgb,var(--paper) 94%,var(--ink)))}
.v-food-review-stars .q{position:absolute;left:46cqw;top:-1cqw;font-family:var(--font-display);font-size:36cqw;line-height:1;color:color-mix(in srgb,var(--accent) 9%,transparent);animation:food-review-stars-q 6s ease-in-out infinite}
.v-food-review-stars .left{position:absolute;left:7cqw;top:8cqw;width:40cqw;animation:food-review-stars-left 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .lbl{display:flex;align-items:center;gap:.8cqw;font-size:1.5cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 65%,transparent);animation:food-review-stars-in0 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .lbl svg{flex:none;width:2.2cqw;height:2.2cqw;color:var(--accent)}
.v-food-review-stars .leaf{stroke:var(--paper)}
.v-food-review-stars .score{display:flex;margin-top:.6cqw;font-family:var(--font-display);font-size:17cqw;line-height:1.2;letter-spacing:-.03em;clip-path:inset(-20% -10% 0 -10%)}
.v-food-review-stars .score .c{display:block;line-height:1.2;--delay:calc(var(--i) * .14s);animation:food-review-stars-roll 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .score .c:nth-child(2){color:var(--accent)}
.v-food-review-stars .stars{position:relative;width:25cqw;height:4.6cqw;margin-top:.2cqw}
.v-food-review-stars .stars svg{position:absolute;inset:0;width:100%;height:100%}
.v-food-review-stars .stars .bg{color:color-mix(in srgb,var(--ink) 14%,transparent)}
.v-food-review-stars .stars .fill{color:var(--accent);clip-path:inset(0 100% 0 0);animation:food-review-stars-fill 6s cubic-bezier(.3,.7,.3,1) infinite}
.v-food-review-stars .count{margin:1.8cqw 0 0;font-size:1.9cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 75%,transparent);animation:food-review-stars-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .award{display:inline-flex;align-items:center;gap:1cqw;margin-top:2.2cqw;padding:.9cqw 1.8cqw .9cqw 1.2cqw;border-radius:4cqw;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);font-size:1.3cqw;line-height:1.2;font-weight:500;animation:food-review-stars-in3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .award svg{width:3cqw;height:2.2cqw;color:var(--secondary)}
.v-food-review-stars .stack{position:absolute;left:50cqw;top:23cqw;width:42cqw;height:19cqw;container-type:size}
.v-food-review-stars .card{position:absolute;inset:0;padding:5.2cqw 5.7cqw;box-sizing:border-box;border-radius:3.3cqw;background:color-mix(in srgb,var(--paper) 55%,#fff);color:var(--ink);border:1px solid color-mix(in srgb,var(--ink) 8%,transparent);box-shadow:0 3.3cqw 7.6cqw rgba(80,45,15,.16),0 .5cqw 1.2cqw rgba(80,45,15,.08);transform-origin:50% 0;opacity:0}
.v-food-review-stars .c1{animation:food-review-stars-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .c2{animation:food-review-stars-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .c3{animation:food-review-stars-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-review-stars .hd{display:flex;align-items:center;gap:2.9cqw}
.v-food-review-stars .av{flex:none;width:10cqw;height:10cqw;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:3.2cqw;font-weight:600;font-style:normal}
.v-food-review-stars .av1{background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 55%,#fff),var(--accent))}
.v-food-review-stars .av2{background:linear-gradient(140deg,color-mix(in srgb,var(--secondary) 55%,#fff),color-mix(in srgb,var(--secondary) 80%,#000))}
.v-food-review-stars .av3{background:linear-gradient(140deg,color-mix(in srgb,var(--ink) 45%,#fff),var(--ink))}
.v-food-review-stars .who{flex:1;min-width:0}
.v-food-review-stars .who b{display:block;font-size:3.7cqw;line-height:1.2;font-weight:600}
.v-food-review-stars .who small{display:block;font-size:2.8cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 55%,transparent);margin-top:.3cqw}
.v-food-review-stars .mini{flex:none;width:19cqw;height:3.6cqw;color:var(--accent)}
.v-food-review-stars .card p{margin:3.4cqw 0 0;font-family:var(--font-display);font-style:italic;font-size:6.6cqw;line-height:1.2;letter-spacing:-.005em}
@container (max-aspect-ratio: 4/5){
  .v-food-review-stars .q{left:52cqw;top:-4cqw;font-size:70cqw}
  .v-food-review-stars .left{left:8cqw;top:7cqh;width:84cqw}
  .v-food-review-stars .lbl{font-size:5.4cqw;gap:2.4cqw}
  .v-food-review-stars .lbl svg{width:6.4cqw;height:6.4cqw}
  .v-food-review-stars .score{font-size:40cqw;margin-top:1cqw}
  .v-food-review-stars .stars{width:56cqw;height:10.3cqw}
  .v-food-review-stars .count{margin-top:4cqw;font-size:5.4cqw}
  .v-food-review-stars .award{display:none}
  .v-food-review-stars .stack{left:8cqw;top:62cqh;width:84cqw;height:38cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-review-stars .q{left:56cqw;top:-2cqw;font-size:56cqw}
  .v-food-review-stars .left{left:7cqw;top:6cqw;width:86cqw}
  .v-food-review-stars .lbl{font-size:2.4cqw;gap:1.2cqw}
  .v-food-review-stars .lbl svg{width:3.2cqw;height:3.2cqw}
  .v-food-review-stars .score{font-size:22cqw}
  .v-food-review-stars .stars{width:32cqw;height:5.9cqw}
  .v-food-review-stars .count{margin-top:2.4cqw;font-size:2.8cqw}
  .v-food-review-stars .award{font-size:2cqw;padding:1.2cqw 2.4cqw 1.2cqw 1.6cqw;margin-top:2.6cqw}
  .v-food-review-stars .award svg{width:4cqw;height:3cqw}
  .v-food-review-stars .stack{left:30cqw;top:66cqw;width:63cqw;height:28.5cqw}
}
@keyframes food-review-stars-q{0%,100%{transform:translate(0,0)}50%{transform:translate(-1cqw,.6cqw)}}
@keyframes food-review-stars-left{0%{transform:translateY(1cqw);opacity:0}5%,86%{transform:translateY(0);opacity:1}94%,100%{transform:translateY(-1.5cqw);opacity:0}}
@keyframes food-review-stars-in0{0%,2%{transform:translateY(1.4cqw);opacity:0}12%,100%{transform:translateY(0);opacity:1}}
@keyframes food-review-stars-roll{0%,5%{transform:translateY(105%)}22%{transform:translateY(-6%)}28%,100%{transform:translateY(0)}}
@keyframes food-review-stars-fill{0%,22%{clip-path:inset(0 100% 0 0)}38%,100%{clip-path:inset(0 1.6% 0 0)}}
@keyframes food-review-stars-in2{0%,18%{transform:translateY(1.2cqw);opacity:0}28%,100%{transform:translateY(0);opacity:1}}
@keyframes food-review-stars-in3{0%,28%{transform:translateY(1.2cqw);opacity:0}38%,100%{transform:translateY(0);opacity:1}}
@keyframes food-review-stars-c1{0%,10%{transform:translate(62cqw,19cqw) rotate(8deg) scale(1);opacity:0}22%,26%{transform:translate(0,0) rotate(-2deg) scale(1);opacity:1}36%,40%{transform:translate(0,-7.1cqw) rotate(-3.5deg) scale(.95);opacity:1}50%,100%{transform:translate(-1cqw,-14.6cqw) rotate(-5deg) scale(.9);opacity:1}}
@keyframes food-review-stars-c2{0%,24%{transform:translate(62cqw,19cqw) rotate(8deg) scale(1);opacity:0}36%,40%{transform:translate(0,0) rotate(1.5deg) scale(1);opacity:1}50%,100%{transform:translate(-.5cqw,-7.3cqw) rotate(2.5deg) scale(.95);opacity:1}}
@keyframes food-review-stars-c3{0%,38%{transform:translate(62cqw,19cqw) rotate(8deg) scale(1);opacity:0}50%,100%{transform:translate(0,0) rotate(-.8deg) scale(1);opacity:1}}
`,
};
// end:food-review-stars

// part:food-street-poster
const FOOD_LEAF = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="currentColor"/><path class="leaf" d="M12 19.5V8.5M12 14.5c-2.6-.3-4.4-2-4.9-4.6 2.6.2 4.4 1.9 4.9 4.6M12 11.5c2.3-.3 3.9-1.8 4.3-4.1-2.3.2-3.9 1.7-4.3 4.1M12 8.5c-.2-1.6.3-3 1.4-4" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const foodStreetPoster: SceneSpec = {
  id: "food-street-poster",
  slug: "mg-food-street-poster",
  name: "Burger Stack Poster",
  kind: "scene",
  job: "cta",
  language: "neo-brutal",
  mechanic: "layers-drop-stack-burst",
  energy: "punchy",
  settle: 3.0,
  colors: { ink: "#1A120D", accent: "#E8361F", secondary: "#FFF4D6", paper: "#FFCF2E" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["restaurant", "promo", "poster"],
  fields: [
    { key: "line1", label: "Line one", default: "double", maxChars: 8, role: "headline" },
    { key: "line2", label: "Line two", default: "smash.", maxChars: 8, role: "headline" },
    { key: "price", label: "Burst price", default: "$15", maxChars: 5, role: "value" },
    { key: "cta", label: "Call to action", default: "order on fennel.app", maxChars: 24, role: "cta" },
  ],
  html: `<div class="rays"></div>
<i class="dots"></i>
<i class="sun"></i>
<div class="type">
  <div class="ln l1"><span data-21st-slot="line1">{{line1}}</span></div>
  <div class="ln l2"><span data-21st-slot="line2">{{line2}}</span></div>
  <div class="tag">${FOOD_LEAF}street menu · fridays only</div>
</div>
<div class="burger">
  <i class="plate"></i>
  <i class="ly bunb"></i>
  <i class="ly patty p1"></i>
  <i class="ly cheese ch1"><svg viewBox="0 0 66 8" preserveAspectRatio="none"><path d="M1 0H65Q66 0 65.5 1.2L63 3H58Q57 6.5 55.5 6.5T54 3H44Q43 8 41 8T39 3H28Q27 5.5 25.5 5.5T24 3H14Q13 7 11 7T9 3H2.5L.5 1.2Q0 0 1 0Z" fill="#ffbe1a"/><path d="M3 .8H63" stroke="#ffe08a" stroke-width=".8"/></svg></i>
  <i class="ly patty p2"></i>
  <i class="ly cheese ch2"><svg viewBox="0 0 66 8" preserveAspectRatio="none"><path d="M1 0H65Q66 0 65.5 1.2L63 3H60Q59 7 57 7T55 3H40Q39 5.5 37.5 5.5T36 3H22Q21 7.5 19 7.5T17 3H2.5L.5 1.2Q0 0 1 0Z" fill="#ffbe1a"/><path d="M3 .8H63" stroke="#ffe08a" stroke-width=".8"/></svg></i>
  <i class="ly lettuce"><svg viewBox="0 0 68 6" preserveAspectRatio="none"><path d="M0 3Q2 0 4 2.5T8 2.5 12 2 16 3 20 1.5 24 3 28 2 32 3 36 1.5 40 3 44 2 48 3 52 1.5 56 3 60 2 64 3 68 2.6V5Q64 6.4 60 5.2T52 5.6 44 5 36 5.6 28 5 20 5.6 12 5 4 5.6 0 5Z" fill="#7cc242"/><path d="M2 3.4Q20 2.2 34 3.6T66 3.2" stroke="#a9e06e" stroke-width=".6" fill="none"/></svg></i>
  <i class="ly tomato"><i></i><i></i></i>
  <i class="ly bunt"><svg viewBox="0 0 60 22" preserveAspectRatio="none"><g fill="#fff3d6"><ellipse cx="18" cy="6" rx="1.4" ry=".8" transform="rotate(-20 18 6)"/><ellipse cx="26" cy="4" rx="1.4" ry=".8" transform="rotate(10 26 4)"/><ellipse cx="34" cy="4.5" rx="1.4" ry=".8" transform="rotate(-10 34 4.5)"/><ellipse cx="42" cy="6.5" rx="1.4" ry=".8" transform="rotate(25 42 6.5)"/><ellipse cx="22" cy="9.5" rx="1.4" ry=".8" transform="rotate(30 22 9.5)"/><ellipse cx="30" cy="8" rx="1.4" ry=".8"/><ellipse cx="38" cy="10" rx="1.4" ry=".8" transform="rotate(-30 38 10)"/><ellipse cx="13" cy="11" rx="1.4" ry=".8" transform="rotate(-40 13 11)"/><ellipse cx="47" cy="11.5" rx="1.4" ry=".8" transform="rotate(40 47 11.5)"/><ellipse cx="29" cy="12.5" rx="1.4" ry=".8" transform="rotate(15 29 12.5)"/></g></svg></i>
</div>
<div class="burst"><svg viewBox="0 0 100 100"><polygon points="50.0,0.0 57.5,7.7 67.1,3.0 71.5,12.8 82.1,11.7 82.9,22.4 93.3,25.0 90.4,35.3 99.2,41.3 93.0,50.0 99.2,58.7 90.4,64.7 93.3,75.0 82.9,77.6 82.1,88.3 71.5,87.2 67.1,97.0 57.5,92.3 50.0,100.0 42.5,92.3 32.9,97.0 28.5,87.2 17.9,88.3 17.1,77.6 6.7,75.0 9.6,64.7 0.8,58.7 7.0,50.0 0.8,41.3 9.6,35.3 6.7,25.0 17.1,22.4 17.9,11.7 28.5,12.8 32.9,3.0 42.5,7.7"/></svg><div class="bt"><small>any 2 for</small><b data-21st-slot="price">{{price}}</b></div></div>
<div class="ribbon"><div class="track"><span>2 for 1<em>●</em>smash fridays<em>●</em>street menu<em>●</em>2 for 1<em>●</em>smash fridays<em>●</em>street menu<em>●</em></span><span>2 for 1<em>●</em>smash fridays<em>●</em>street menu<em>●</em>2 for 1<em>●</em>smash fridays<em>●</em>street menu<em>●</em></span></div></div>
<div class="cta"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
  css: `
.v-food-street-poster{color:var(--ink);font-family:var(--font-body)}
.v-food-street-poster[data-backdrop="on"]{background:var(--paper)}
.v-food-street-poster[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-food-street-poster[data-backdrop="off"] .dots,.v-food-street-poster[data-backdrop="off"] .rays{display:none}
.v-food-street-poster .rays{position:absolute;left:14cqw;top:-34cqw;width:120cqw;height:120cqw;border-radius:50%;background:repeating-conic-gradient(from 0deg,rgba(255,255,255,.22) 0 7.5deg,transparent 7.5deg 15deg);-webkit-mask:radial-gradient(closest-side,#000 30%,transparent);mask:radial-gradient(closest-side,#000 30%,transparent);animation:food-street-poster-rays 6s linear infinite}
.v-food-street-poster .dots{position:absolute;inset:0;background:radial-gradient(circle,color-mix(in srgb,var(--ink) 14%,transparent) 28%,transparent 31%) 0 0/1.8cqw 1.8cqw;-webkit-mask:linear-gradient(180deg,#000,transparent 30%,transparent 72%,#000);mask:linear-gradient(180deg,#000,transparent 30%,transparent 72%,#000)}
.v-food-street-poster .sun{position:absolute;left:54cqw;top:5cqw;width:44cqw;height:44cqw;border-radius:50%;background:radial-gradient(circle,rgba(110,10,0,.22) 26%,transparent 29%) 0 0/1.5cqw 1.5cqw,radial-gradient(circle at 40% 35%,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent) 60%,color-mix(in srgb,var(--accent) 82%,#000));box-shadow:0 2cqw 6cqw color-mix(in srgb,var(--accent) 30%,transparent);animation:food-street-poster-sun 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .type{--ls:11cqw;position:absolute;left:6cqw;top:5cqw;width:46cqw;display:flex;flex-direction:column;font-family:var(--font-display);font-weight:800;letter-spacing:-.04em}
.v-food-street-poster .ln{display:block;overflow:hidden;padding:calc(var(--ls) * .22) 1cqw calc(var(--ls) * .22 + .4cqw) 0;margin-block:calc(var(--ls) * -.22);line-height:1.2}
.v-food-street-poster .ln span{display:block;line-height:1.2;white-space:nowrap;padding-block:.22em;margin-block:-.22em}
.v-food-street-poster .l1 span{font-size:var(--ls);color:transparent;-webkit-text-stroke:.35cqw var(--ink);animation:food-street-poster-l1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .l2{margin-top:calc(var(--ls) * -.22 - 1.6cqw)}
.v-food-street-poster .l2 span{font-size:var(--ls);color:var(--accent);text-shadow:.6cqw .6cqw 0 var(--ink);animation:food-street-poster-l2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .tag{display:flex;align-items:center;gap:1cqw;margin-top:1.2cqw;font-family:var(--font-body);font-size:1.8cqw;line-height:1.2;font-weight:600;letter-spacing:0;animation:food-street-poster-tag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .tag svg{flex:none;width:2.6cqw;height:2.6cqw;color:var(--ink)}
.v-food-street-poster .leaf{stroke:var(--paper)}
.v-food-street-poster .burger{position:absolute;left:59cqw;top:13cqw;width:34cqw;height:29.4cqw;container-type:size;transform-origin:50% 100%;animation:food-street-poster-burger 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .plate{position:absolute;left:-6cqw;right:-6cqw;bottom:-6cqw;height:12cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(60,8,0,.45),transparent);animation:food-street-poster-plate 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .ly{position:absolute;left:0;right:0;margin:0 auto;transform-origin:50% 100%;transform:translateY(-220cqw)}
.v-food-street-poster .ly svg{position:absolute;left:0;top:0;width:100%;overflow:visible}
.v-food-street-poster .bunb{bottom:0;width:88cqw;height:15.2cqw;border-radius:2.4cqw 2.4cqw 7.6cqw 7.6cqw;background:linear-gradient(180deg,#f6c27a,#e39a44 40%,#c97a2f);box-shadow:inset 0 -1.5cqw 2.1cqw rgba(120,60,10,.35);animation:food-street-poster-d0 6s linear infinite}
.v-food-street-poster .patty{height:12.9cqw;border-radius:6.4cqw;background:radial-gradient(circle at 20% 30%,rgba(255,180,120,.18) 0 .8cqw,transparent .9cqw) 0 0/5.2cqw 3.9cqw,linear-gradient(180deg,#6b3c22,#4a2614 50%,#2e170c);box-shadow:inset 0 .9cqw .9cqw rgba(255,200,150,.12),inset 0 -1.2cqw 1.5cqw rgba(0,0,0,.35)}
.v-food-street-poster .p1{bottom:13.6cqw;width:94cqw;animation:food-street-poster-d1 6s linear infinite}
.v-food-street-poster .p2{bottom:28cqw;width:91cqw;animation:food-street-poster-d3 6s linear infinite}
.v-food-street-poster .cheese{height:4.5cqw}
.v-food-street-poster .cheese svg{height:12.1cqw}
.v-food-street-poster .ch1{bottom:25cqw;width:100cqw;animation:food-street-poster-d2 6s linear infinite}
.v-food-street-poster .ch2{bottom:39.4cqw;width:97cqw;animation:food-street-poster-d4 6s linear infinite}
.v-food-street-poster .lettuce{bottom:42.4cqw;width:103cqw;height:6.8cqw;animation:food-street-poster-d5 6s linear infinite}
.v-food-street-poster .lettuce svg{height:9.1cqw;top:-1.2cqw}
.v-food-street-poster .tomato{bottom:47.7cqw;width:85cqw;height:6cqw;display:flex;gap:1.5cqw;animation:food-street-poster-d6 6s linear infinite}
.v-food-street-poster .tomato i{flex:1;border-radius:3cqw;background:radial-gradient(ellipse 30% 40% at 30% 50%,rgba(255,220,160,.5),transparent),radial-gradient(ellipse 30% 40% at 70% 50%,rgba(255,220,160,.5),transparent),linear-gradient(180deg,#ff5a45,#d92a1a);box-shadow:inset 0 -.6cqw .9cqw rgba(120,0,0,.3)}
.v-food-street-poster .bunt{bottom:52.3cqw;width:91cqw;height:33.3cqw;border-radius:50% 50% 14% 14%/92% 92% 12% 12%;background:radial-gradient(ellipse 40% 30% at 34% 24%,rgba(255,240,200,.75),transparent),radial-gradient(ellipse at 50% 30%,#f7b865,#e8983f 55%,#c27026);box-shadow:inset 0 -2.4cqw 3cqw rgba(140,70,10,.35),0 1.5cqw 3cqw rgba(80,20,0,.2);animation:food-street-poster-d7 6s linear infinite}
.v-food-street-poster .bunt svg{height:100%}
.v-food-street-poster .burst{position:absolute;left:80cqw;top:3cqw;width:17cqw;height:17cqw;container-type:size;transform:scale(0);animation:food-street-poster-burst 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .burst svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(2.3cqw 2.3cqw 0 var(--accent))}
.v-food-street-poster .burst polygon{fill:var(--ink)}
.v-food-street-poster .bt{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--paper);text-align:center}
.v-food-street-poster .bt small{font-size:10cqw;font-weight:600;line-height:1.2}
.v-food-street-poster .bt b{font-family:var(--font-display);font-weight:800;font-size:26cqw;line-height:1.2;letter-spacing:-.05em}
.v-food-street-poster .ribbon{position:absolute;left:-10cqw;top:50.5cqw;width:120cqw;height:4.4cqw;background:var(--ink);transform:rotate(-2.5deg);overflow:hidden;display:flex;align-items:center;box-shadow:0 .7cqw 0 var(--accent)}
.v-food-street-poster .track{display:flex;flex:none;animation:food-street-poster-mq 6s linear infinite}
.v-food-street-poster .track span{flex:none;white-space:nowrap;padding-right:2cqw;font-family:var(--font-display);font-weight:700;font-size:2.2cqw;line-height:1.2;letter-spacing:-.02em;color:var(--paper)}
.v-food-street-poster .track em{font-style:normal;color:var(--accent);padding:0 1cqw}
.v-food-street-poster .cta{position:absolute;left:6cqw;top:40cqw;height:5.4cqw;padding:0 2.6cqw;border-radius:3cqw;background:var(--ink);color:var(--secondary);display:inline-flex;align-items:center;justify-content:center;gap:1cqw;font-size:2.1cqw;line-height:1.2;font-weight:600;white-space:nowrap;box-shadow:0 .6cqw 0 var(--accent);animation:food-street-poster-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-street-poster .cta svg{flex:none;width:2.2cqw;height:2.2cqw}
@container (max-aspect-ratio: 4/5){
  .v-food-street-poster .rays{left:-40cqw;top:14cqw;width:180cqw;height:180cqw}
  .v-food-street-poster .dots{background-size:3.2cqw 3.2cqw}
  .v-food-street-poster .sun{left:11cqw;top:65cqw;width:78cqw;height:78cqw;background-size:2.6cqw 2.6cqw,auto}
  .v-food-street-poster .type{--ls:21cqw;left:6cqw;top:8cqw;width:90cqw}
  .v-food-street-poster .l1 span{-webkit-text-stroke:.5cqw var(--ink)}
  .v-food-street-poster .l2 span{text-shadow:.9cqw .9cqw 0 var(--ink)}
  .v-food-street-poster .l2{margin-top:calc(var(--ls) * -.22 - 2.6cqw)}
  .v-food-street-poster .tag{margin-top:2cqw;font-size:3.6cqw;gap:1.6cqw}
  .v-food-street-poster .tag svg{width:4.8cqw;height:4.8cqw}
  .v-food-street-poster .burger{left:17cqw;top:81cqw;width:66cqw;height:57cqw}
  .v-food-street-poster .burst{left:61cqw;top:58cqw;width:35cqw;height:35cqw}
  .v-food-street-poster .ribbon{top:146cqw;height:10cqw;transform:rotate(-4deg);box-shadow:0 1.2cqw 0 var(--accent)}
  .v-food-street-poster .track span{font-size:4.2cqw;padding-right:3cqw}
  .v-food-street-poster .cta{left:8cqw;right:8cqw;top:auto;bottom:4.5cqh;height:13cqw;border-radius:7cqw;font-size:5.6cqw;gap:2cqw;box-shadow:0 1cqw 0 var(--accent)}
  .v-food-street-poster .cta svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-street-poster .rays{left:-10cqw;top:-10cqw;width:130cqw;height:130cqw}
  .v-food-street-poster .sun{left:34cqw;top:30cqw;width:62cqw;height:62cqw}
  .v-food-street-poster .type{--ls:15cqw;top:5cqw;width:88cqw}
  .v-food-street-poster .tag{font-size:2.6cqw;gap:1.2cqw}
  .v-food-street-poster .tag svg{width:3.6cqw;height:3.6cqw}
  .v-food-street-poster .burger{left:42cqw;top:43cqw;width:46cqw;height:39.7cqw}
  .v-food-street-poster .burst{left:8cqw;top:57cqw;width:26cqw;height:26cqw}
  .v-food-street-poster .ribbon{top:87cqw;height:6cqw;transform:rotate(-3deg)}
  .v-food-street-poster .track span{font-size:2.8cqw}
  .v-food-street-poster .cta{left:auto;right:6cqw;top:9cqw;height:7cqw;border-radius:4cqw;font-size:2.7cqw}
  .v-food-street-poster .cta svg{width:2.8cqw;height:2.8cqw}
}
@keyframes food-street-poster-rays{0%{transform:rotate(0deg)}100%{transform:rotate(30deg)}}
@keyframes food-street-poster-sun{0%{transform:scale(.6);opacity:0}10%{transform:scale(1);opacity:1}86%{transform:scale(1.03);opacity:1}96%,100%{transform:scale(.8);opacity:0}}
@keyframes food-street-poster-l1{0%,2%{transform:translateY(110%)}12%,100%{transform:translateY(0)}}
@keyframes food-street-poster-l2{0%,5%{transform:translateY(110%)}15%,100%{transform:translateY(0)}}
@keyframes food-street-poster-tag{0%,12%{transform:translateX(-4cqw);opacity:0}22%,100%{transform:translateX(0);opacity:1}}
@keyframes food-street-poster-burger{0%,30%{transform:translateY(0) scale(1,1)}31.5%{transform:translateY(0) scale(1.03,.95)}34.5%{transform:translateY(0) scale(.99,1.02)}37%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-plate{0%,4%{transform:scaleX(.4);opacity:0}10%{transform:scaleX(.8);opacity:1}30%,100%{transform:scaleX(1);opacity:1}}
@keyframes food-street-poster-d0{0%,3%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}8%{transform:translateY(0) scale(1.06,.82);animation-timing-function:cubic-bezier(.2,.8,.2,1)}10.5%{transform:translateY(0) scale(.98,1.04)}13%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d1{0%,6%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}11%{transform:translateY(0) scale(1.06,.82);animation-timing-function:cubic-bezier(.2,.8,.2,1)}13.5%{transform:translateY(0) scale(.98,1.04)}16%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d2{0%,9%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}14%{transform:translateY(0) scale(1.04,.8);animation-timing-function:cubic-bezier(.2,.8,.2,1)}16.5%{transform:translateY(0) scale(.99,1.05)}19%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d3{0%,12%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}17%{transform:translateY(0) scale(1.06,.82);animation-timing-function:cubic-bezier(.2,.8,.2,1)}19.5%{transform:translateY(0) scale(.98,1.04)}22%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d4{0%,15%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}20%{transform:translateY(0) scale(1.04,.8);animation-timing-function:cubic-bezier(.2,.8,.2,1)}22.5%{transform:translateY(0) scale(.99,1.05)}25%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d5{0%,18%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}23%{transform:translateY(0) scale(1.05,.84);animation-timing-function:cubic-bezier(.2,.8,.2,1)}25.5%{transform:translateY(0) scale(.98,1.04)}28%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d6{0%,21%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}26%{transform:translateY(0) scale(1.05,.84);animation-timing-function:cubic-bezier(.2,.8,.2,1)}28.5%{transform:translateY(0) scale(.98,1.04)}31%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-d7{0%,24%{transform:translateY(-220cqw) scale(1,1);animation-timing-function:cubic-bezier(.55,0,.9,.4)}30%{transform:translateY(0) scale(1.07,.8);animation-timing-function:cubic-bezier(.2,.8,.2,1)}33%{transform:translateY(0) scale(.97,1.05)}36%,100%{transform:translateY(0) scale(1,1)}}
@keyframes food-street-poster-burst{0%,34%{transform:scale(0) rotate(-40deg)}40%{transform:scale(1.12) rotate(-4deg)}44%{transform:scale(1) rotate(-10deg)}84%,100%{transform:scale(1) rotate(-6deg)}}
@keyframes food-street-poster-mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes food-street-poster-cta{0%,38%{transform:translateY(3cqw);opacity:0}46%,100%{transform:translateY(0);opacity:1}}
`,
};
// end:food-street-poster

// part:food-neon-cta
export const foodNeonCta: SceneSpec = {
  id: "food-neon-cta",
  slug: "mg-food-neon-cta",
  name: "Neon Sign Open Late",
  kind: "scene",
  job: "cta",
  language: "aura",
  mechanic: "neon-flicker-on-card-slide",
  energy: "default",
  settle: 2.7,
  colors: { ink: "#F6EEF2", accent: "#FF2D8F", secondary: "#2BE0FF", paper: "#170E11" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["restaurant", "neon", "hours"],
  fields: [
    { key: "name", label: "Neon name", default: "fennel.", maxChars: 9, role: "headline" },
    { key: "sub", label: "Neon line", default: "open late", maxChars: 12, role: "label" },
    { key: "note", label: "Note", default: "walk in, or order ahead.", maxChars: 34, role: "caption" },
    { key: "cta", label: "Button", default: "Order on fennel.app", maxChars: 22, role: "cta" },
  ],
  html: `<i class="wall"></i>
<i class="wash"></i>
<i class="shade"></i>
<div class="sign">
  <i class="mnt m1"></i><i class="mnt m2"></i><i class="mnt m3"></i><i class="mnt m4"></i>
  <div class="nm"><span class="off">{{name}}</span><span class="on" data-21st-slot="name">{{name}}</span></div>
  <div class="ol"><span class="off">{{sub}}</span><span class="on" data-21st-slot="sub">{{sub}}</span></div>
  <svg class="arrow" viewBox="0 0 50 30"><path d="M3 15H44M33 4L45 15 33 26" fill="none" stroke="#e6feff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>
<p class="hand" data-21st-slot="note">{{note}}</p>
<div class="card">
  <div class="st"><span class="live"><i></i></span><b>Open now</b><span>· until 2 am tonight</span></div>
  <div class="hrs"><div><span>mon–thu</span><span>11:00–23:00</span></div><div class="td"><span>fri–sat</span><span>11:00–02:00</span></div><div><span>sunday</span><span>10:00–22:00</span></div></div>
  <div class="addr"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7m0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2"/></svg><div><b>48 Harbor St</b><small>5 min walk from the station</small></div></div>
  <div class="mm"><svg viewBox="0 0 100 20" preserveAspectRatio="none"><g stroke="currentColor" stroke-opacity=".5" stroke-width="1.6"><path d="M0 12H100M30 0V20M72 0V20"/></g><g stroke="currentColor" stroke-opacity=".3" stroke-width=".8"><path d="M0 4H100M12 0V20M52 0V20M90 0V20"/></g><path d="M-2 20L40 0" stroke="currentColor" stroke-opacity=".4" stroke-width="1.2"/></svg><i class="mring"></i><i class="mpin"><svg viewBox="0 0 24 30"><path class="pinf" d="M12 1a10 10 0 0 0-10 10c0 7 10 18 10 18s10-11 10-18A10 10 0 0 0 12 1"/><circle cx="12" cy="11" r="3.6" fill="#fff"/></svg></i></div>
  <div class="go"><i></i><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
</div>
<div class="counter"></div>
<i class="refl"></i>`,
  css: `
.v-food-neon-cta{color:var(--ink);font-family:var(--font-body)}
.v-food-neon-cta[data-backdrop="on"]{background:var(--paper)}
.v-food-neon-cta[data-backdrop="off"] .wall,.v-food-neon-cta[data-backdrop="off"] .shade,.v-food-neon-cta[data-backdrop="off"] .counter,.v-food-neon-cta[data-backdrop="off"] .refl,.v-food-neon-cta[data-backdrop="off"] .wash{display:none}
.v-food-neon-cta .wall{position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='64'%3E%3Crect width='140' height='64' fill='%23000' fill-opacity='.3'/%3E%3Crect x='2' y='2' width='66' height='28' rx='2' fill='%23fff' fill-opacity='.05'/%3E%3Crect x='72' y='2' width='66' height='28' rx='2' fill='%23fff' fill-opacity='.07'/%3E%3Crect x='-33' y='34' width='66' height='28' rx='2' fill='%23fff' fill-opacity='.06'/%3E%3Crect x='37' y='34' width='66' height='28' rx='2' fill='%23fff' fill-opacity='.04'/%3E%3Crect x='107' y='34' width='66' height='28' rx='2' fill='%23fff' fill-opacity='.06'/%3E%3C/svg%3E") 0 0/14cqw 6.4cqw}
.v-food-neon-cta .shade{position:absolute;inset:0;background:radial-gradient(ellipse 70% 90% at 30% 35%,transparent 30%,color-mix(in srgb,var(--paper) 72%,#000)),linear-gradient(180deg,color-mix(in srgb,var(--paper) 30%,transparent),transparent 30%)}
.v-food-neon-cta .wash{position:absolute;left:-6cqw;top:-8cqw;width:66cqw;height:56cqw;background:radial-gradient(ellipse 50% 45% at 50% 45%,color-mix(in srgb,var(--accent) 32%,transparent),transparent 70%),radial-gradient(ellipse 40% 20% at 42% 66%,color-mix(in srgb,var(--secondary) 16%,transparent),transparent 70%);opacity:0;animation:food-neon-cta-fl1 6s linear infinite}
.v-food-neon-cta .sign{position:absolute;left:6.4cqw;top:6.6cqw;width:48cqw;height:28cqw;container-type:size}
.v-food-neon-cta .mnt{position:absolute;width:2.1cqw;height:2.1cqw;border-radius:50%;background:#3a2c30;box-shadow:inset 0 0 0 .4cqw #1a1214}
.v-food-neon-cta .m1{left:6.25cqw;top:2.1cqw}
.v-food-neon-cta .m2{left:83.3cqw;top:2.1cqw}
.v-food-neon-cta .m3{left:6.25cqw;top:54.2cqw}
.v-food-neon-cta .m4{left:83.3cqw;top:54.2cqw}
.v-food-neon-cta .nm{position:absolute;left:3.1cqw;top:4.4cqw;font-family:var(--font-display);font-style:italic;font-size:26cqw;line-height:1.2;letter-spacing:-.01em;white-space:nowrap}
.v-food-neon-cta .ol{position:absolute;left:6.25cqw;top:39.6cqw;font-size:8.75cqw;font-weight:500;letter-spacing:.34em;line-height:1.2;white-space:nowrap}
.v-food-neon-cta .off{display:block;color:color-mix(in srgb,var(--accent) 22%,var(--paper))}
.v-food-neon-cta .ol .off{color:color-mix(in srgb,var(--secondary) 18%,var(--paper))}
.v-food-neon-cta .on{position:absolute;left:0;top:0;display:block;opacity:0}
.v-food-neon-cta .nm .on{color:color-mix(in srgb,var(--accent) 12%,#fff);text-shadow:0 0 .52cqw #fff,0 0 1.9cqw color-mix(in srgb,var(--accent) 70%,#fff),0 0 4.6cqw var(--accent),0 0 9.6cqw color-mix(in srgb,var(--accent) 75%,transparent);animation:food-neon-cta-fl1 6s linear infinite}
.v-food-neon-cta .ol .on{color:color-mix(in srgb,var(--secondary) 12%,#fff);text-shadow:0 0 .52cqw #fff,0 0 1.9cqw var(--secondary),0 0 5cqw var(--secondary),0 0 8.3cqw color-mix(in srgb,var(--secondary) 60%,transparent);animation:food-neon-cta-fl2 6s linear infinite}
.v-food-neon-cta .arrow{position:absolute;left:82cqw;top:39.6cqw;width:18.75cqw;height:11.25cqw;overflow:visible;filter:drop-shadow(0 0 1cqw var(--secondary)) drop-shadow(0 0 2.9cqw color-mix(in srgb,var(--secondary) 70%,transparent));opacity:0;animation:food-neon-cta-fl3 6s linear infinite}
.v-food-neon-cta .hand{position:absolute;left:8cqw;top:39cqw;width:44cqw;margin:0;font-family:var(--font-display);font-style:italic;font-size:2.8cqw;line-height:1.2;color:color-mix(in srgb,var(--accent) 25%,var(--ink));opacity:0;animation:food-neon-cta-hand 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-neon-cta .card{position:absolute;left:58cqw;top:8.4cqw;width:36cqw;container-type:inline-size;border-radius:1.8cqw;background:linear-gradient(160deg,color-mix(in srgb,var(--ink) 7%,transparent),color-mix(in srgb,var(--ink) 2%,transparent)),color-mix(in srgb,var(--paper) 86%,transparent);color:var(--ink);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);box-shadow:0 2.4cqw 5cqw rgba(0,0,0,.5),inset 0 1px 0 color-mix(in srgb,var(--ink) 8%,transparent);opacity:0;--mm:block;animation:food-neon-cta-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-neon-cta .card>*{margin-left:6.67cqw;margin-right:6.67cqw}
.v-food-neon-cta .card>:first-child{margin-top:6.67cqw}
.v-food-neon-cta .card>:last-child{margin-bottom:6.67cqw}
.v-food-neon-cta .st{display:flex;align-items:center;gap:2.8cqw;font-size:4.6cqw;line-height:1.2}
.v-food-neon-cta .st b{font-weight:600}
.v-food-neon-cta .st span{color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-food-neon-cta .live{position:relative;flex:none;width:3cqw;height:3cqw;border-radius:50%;background:#5dff9b;box-shadow:0 0 2.2cqw #5dff9b}
.v-food-neon-cta .live i{position:absolute;inset:0;border-radius:50%;background:#5dff9b;animation:food-neon-cta-live 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-neon-cta .hrs{margin-top:4.4cqw;font-family:var(--font-mono);font-size:3.6cqw;line-height:1.2}
.v-food-neon-cta .hrs div{display:flex;justify-content:space-between;padding:1.7cqw 2.8cqw;border-radius:1.7cqw;color:color-mix(in srgb,var(--ink) 68%,transparent)}
.v-food-neon-cta .hrs .td{background:color-mix(in srgb,var(--accent) 14%,transparent);color:var(--ink);box-shadow:inset .7cqw 0 0 var(--accent)}
.v-food-neon-cta .addr{display:flex;gap:3.3cqw;margin-top:4.4cqw;padding-top:4.4cqw;border-top:1px solid color-mix(in srgb,var(--ink) 10%,transparent)}
.v-food-neon-cta .addr svg{flex:none;width:6.1cqw;height:6.1cqw;color:var(--accent);margin-top:.3cqw}
.v-food-neon-cta .addr b{display:block;font-size:4.4cqw;line-height:1.2;font-weight:600}
.v-food-neon-cta .addr small{display:block;font-size:3.3cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 55%,transparent);margin-top:.8cqw}
.v-food-neon-cta .mm{display:var(--mm);position:relative;height:19.4cqw;margin-top:3.9cqw;border-radius:2.8cqw;overflow:hidden;background:color-mix(in srgb,var(--paper) 80%,var(--ink));color:color-mix(in srgb,var(--paper) 55%,var(--ink))}
.v-food-neon-cta .mm>svg{position:absolute;inset:0;width:100%;height:100%}
.v-food-neon-cta .mpin{position:absolute;left:55%;top:2.8cqw;width:7.2cqw;height:9.4cqw;margin-left:-3.6cqw;animation:food-neon-cta-pin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-neon-cta .mpin svg{position:relative;width:100%;height:100%;filter:drop-shadow(0 0 1.7cqw color-mix(in srgb,var(--accent) 80%,transparent))}
.v-food-neon-cta .pinf{fill:var(--accent)}
.v-food-neon-cta .mring{position:absolute;left:55%;top:12.2cqw;width:11.1cqw;height:4.4cqw;margin-left:-5.6cqw;border-radius:50%;border:.6cqw solid color-mix(in srgb,var(--accent) 80%,transparent);animation:food-neon-cta-mring 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-food-neon-cta .go{position:relative;display:flex;align-items:center;justify-content:center;gap:2.8cqw;min-height:15cqw;margin-top:4.4cqw;border-radius:3.3cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 88%,#000),color-mix(in srgb,var(--accent) 80%,#fff));color:#fff;font-size:6.6cqw;line-height:1.2;font-weight:600;white-space:nowrap}
.v-food-neon-cta .go svg{flex:none;width:5cqw;height:5cqw}
.v-food-neon-cta .go i{position:absolute;inset:-1.7cqw;border-radius:4.4cqw;box-shadow:0 0 6.7cqw color-mix(in srgb,var(--accent) 70%,transparent);animation:food-neon-cta-glow 2s ease-in-out infinite}
.v-food-neon-cta .counter{position:absolute;left:0;right:0;top:89.6cqh;bottom:0;background:linear-gradient(180deg,#5a3a2a 0,#3a2419 8%,#24160f);box-shadow:0 -.3cqw .8cqw rgba(0,0,0,.6)}
.v-food-neon-cta .refl{position:absolute;left:4cqw;top:89.6cqh;width:52cqw;height:5.85cqw;background:radial-gradient(ellipse 50% 70% at 50% 0%,color-mix(in srgb,var(--accent) 32%,transparent),transparent 70%);opacity:0;animation:food-neon-cta-fl1 6s linear infinite}
@container (max-aspect-ratio: 4/5){
  .v-food-neon-cta .wall{background-size:24cqw 11cqw}
  .v-food-neon-cta .wash{left:-10cqw;top:-4cqw;width:120cqw;height:80cqw}
  .v-food-neon-cta .sign{left:6cqw;top:5cqh;width:88cqw;height:51.3cqw}
  .v-food-neon-cta .hand{left:8cqw;top:36cqh;width:84cqw;font-size:6cqw}
  .v-food-neon-cta .card{left:8cqw;top:47cqh;width:84cqw;border-radius:4cqw;--mm:none}
  .v-food-neon-cta .refl{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-food-neon-cta .wall{background-size:20cqw 9.2cqw}
  .v-food-neon-cta .wash{width:90cqw;height:70cqw}
  .v-food-neon-cta .sign{left:5cqw;top:5cqw;width:62cqw;height:36.2cqw}
  .v-food-neon-cta .hand{left:7cqw;top:45cqw;width:38cqw;font-size:4cqw}
  .v-food-neon-cta .card{left:50cqw;top:42cqw;width:44cqw;border-radius:2.6cqw;--mm:none}
  .v-food-neon-cta .refl{width:70cqw}
}
@keyframes food-neon-cta-fl1{0%,4%{opacity:0}5%{opacity:.9}6%{opacity:.1}8%{opacity:1}9%{opacity:.3}10.5%{opacity:1}11%{opacity:.6}12%,100%{opacity:1}}
@keyframes food-neon-cta-fl2{0%,14%{opacity:0}15%{opacity:1}16%{opacity:.2}17.5%{opacity:1}18%{opacity:.4}19%,100%{opacity:1}}
@keyframes food-neon-cta-fl3{0%,20%{opacity:0}21%{opacity:1}22%{opacity:.3}23.5%,100%{opacity:1}}
@keyframes food-neon-cta-hand{0%,26%{transform:translateY(1cqw);opacity:0}34%,100%{transform:translateY(0);opacity:1}}
@keyframes food-neon-cta-card{0%,16%{transform:translateX(6cqw);opacity:0;filter:blur(.8cqw)}28%,100%{transform:translateX(0);opacity:1;filter:blur(0)}}
@keyframes food-neon-cta-live{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.8);opacity:0}}
@keyframes food-neon-cta-pin{0%,26%{transform:translateY(-8.3cqw);opacity:0}31%{transform:translateY(0);opacity:1}33.5%{transform:translateY(-2.5cqw)}36%,100%{transform:translateY(0);opacity:1}}
@keyframes food-neon-cta-mring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}
@keyframes food-neon-cta-glow{0%,100%{opacity:.35}50%{opacity:1}}
`,
};
// end:food-neon-cta

export const FOOD_SCENES: SceneSpec[] = [foodSteamBowl, foodMenuUnfold, foodDeliveryRoute, foodTicketPrint, foodIngredientsDrop, foodBookingSlots, foodChalkboardSpecial, foodReviewStars, foodStreetPoster, foodNeonCta];
