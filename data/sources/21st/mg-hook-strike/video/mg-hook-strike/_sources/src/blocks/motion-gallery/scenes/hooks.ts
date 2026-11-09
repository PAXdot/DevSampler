// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const hookQuestion: SceneSpec = {
  id: "hook-question",
  slug: "mg-hook-question",
  name: "Question Hook",
  kind: "scene",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "question-word-rise",
  energy: "punchy",
  settle: 4.4,
  colors: { ink: "#F3EFE6", accent: "#FF542E", secondary: "#FFD2B8", paper: "#0B0B0D" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hook", "question", "cold-open"],
  fields: [
    { key: "question", label: "Question", default: "Why does shipping still take a week?", maxChars: 48, role: "headline" },
    { key: "kicker", label: "Kicker", default: "01 / the problem", maxChars: 24, role: "kicker" },
    { key: "brand", label: "Brand", default: "Lumen", maxChars: 18, role: "label" },
  ],
  html: `<div class="glow"></div>
<div class="top"><span class="kick" data-21st-slot="kicker"><b></b>{{kicker}}</span></div>
<div class="qw"><div class="q" data-21st-slot="question">{{question|words}}</div></div>
<div class="brand" data-21st-slot="brand"><i></i>{{brand}}</div>
<div class="grain"></div>`,
  css: `
.v-hook-question{color:var(--ink);font-family:var(--font-display)}
.v-hook-question[data-backdrop="on"]{background:var(--paper)}
.v-hook-question .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:34cqw;opacity:.22;mix-blend-mode:overlay;pointer-events:none}
.v-hook-question[data-backdrop="off"] .grain{display:none}
.v-hook-question .glow{position:absolute;left:4cqw;top:20cqw;width:62cqw;height:40cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 34%,transparent),transparent);filter:blur(2cqw);opacity:0;animation:hook-question-glow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-question .top{position:absolute;left:7cqw;right:7cqw;top:4.4cqw;display:flex;align-items:center;animation:hook-question-chrome 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-question .kick{font:500 1.6cqw/1.1 var(--font-mono);letter-spacing:.02em;color:color-mix(in srgb,var(--ink) 62%,transparent);display:flex;align-items:center}
.v-hook-question .kick b{display:inline-block;width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);margin-right:.9cqw;box-shadow:0 0 1cqw var(--accent)}
.v-hook-question .brand{position:absolute;right:7cqw;top:4.4cqw;display:flex;align-items:center;gap:.8cqw;font:600 1.7cqw/1.1 var(--font-body);letter-spacing:-.01em;animation:hook-question-chrome 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-question .brand i{width:1.6cqw;height:1.6cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--secondary) 40%,var(--accent))}
.v-hook-question .qw{position:absolute;left:7cqw;right:7cqw;top:12.6cqw}
.v-hook-question .q{font-weight:800;font-size:9.6cqw;line-height:1;letter-spacing:-.045em;transform-origin:0 50%;animation:hook-question-push 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-question .w{--delay:calc(var(--i) * .16s);display:inline-block;padding-bottom:.08em;animation:hook-question-rise 6s cubic-bezier(.2,.8,.2,1) infinite,hook-question-dim 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-question .w:last-child{position:relative;background:linear-gradient(90deg,var(--accent) 50%,var(--ink) 50%);background-size:200% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:hook-question-rise 6s cubic-bezier(.2,.8,.2,1) infinite,hook-question-wipe 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hook-question .w:last-child::after{content:"";position:absolute;left:.04em;right:.1em;bottom:0;height:.07em;border-radius:.04em;background:var(--accent);transform-origin:0 50%;transform:scaleX(0);animation:hook-question-ul 6s cubic-bezier(.65,0,.35,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-hook-question .top{left:8cqw;right:8cqw;top:9cqh}
  .v-hook-question .kick{font-size:5.8cqw}
  .v-hook-question .kick b{width:3cqw;height:3cqw;margin-right:3cqw}
  .v-hook-question .qw{left:8cqw;right:8cqw;top:26cqh}
  .v-hook-question .q{font-size:15.5cqw;line-height:1.02}
  .v-hook-question .brand{left:8cqw;right:auto;top:auto;bottom:9cqh;font-size:6.2cqw;gap:2.4cqw}
  .v-hook-question .brand i{width:6cqw;height:6cqw}
  .v-hook-question .glow{left:-10cqw;top:30cqh;width:120cqw;height:70cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-question .top{top:7cqw}
  .v-hook-question .kick{font-size:2.6cqw}
  .v-hook-question .kick b{width:1.4cqw;height:1.4cqw}
  .v-hook-question .qw{top:24cqh}
  .v-hook-question .q{font-size:12.4cqw}
  .v-hook-question .brand{left:7cqw;right:auto;top:auto;bottom:7cqw;font-size:2.8cqw}
  .v-hook-question .brand i{width:2.6cqw;height:2.6cqw}
}
@keyframes hook-question-glow{0%,33%{opacity:0;transform:scale(.8)}46%{opacity:1;transform:scale(1)}86%{opacity:1;transform:scale(1.05)}93%,100%{opacity:0;transform:scale(1.05)}}
@keyframes hook-question-chrome{0%{opacity:0}4%{opacity:1}88%{opacity:1}94%,100%{opacity:0}}
@keyframes hook-question-push{0%,28%{transform:scale(1)}88%{transform:scale(1.04)}100%{transform:scale(1)}}
@keyframes hook-question-rise{0%,4%{opacity:0;transform:translateY(.45em) rotate(3deg);filter:blur(.06em)}12%{opacity:1;transform:translateY(0) rotate(0deg);filter:blur(0)}86%{opacity:1;transform:none}92%,100%{opacity:0;transform:translateY(-.3em)}}
@keyframes hook-question-dim{0%,40%{color:var(--ink)}47%,86%{color:color-mix(in srgb,var(--ink) 42%,transparent)}94%,100%{color:var(--ink)}}
@keyframes hook-question-wipe{0%,35%{background-position:100% 0}41%,97%{background-position:0 0}100%{background-position:100% 0}}
@keyframes hook-question-ul{0%,39%{transform:scaleX(0)}45%,86%{transform:scaleX(1)}90%,100%{transform:scaleX(0)}}
`,
};

export const hookStrike: SceneSpec = {
  id: "hook-strike",
  slug: "mg-hook-strike",
  name: "Strike The Old Way",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "pen-strike-then-rewrite",
  energy: "default",
  settle: 3.6,
  colors: {ink: "#1C1A16", accent: "#D2381C", secondary: "#9A917E", paper: "#F1ECE1"},
  fonts: {display: "Instrument Serif", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["hook", "before-after", "editorial"],
  fields: [
    { key: "old", label: "Old way", default: "Copying docs into chat.", maxChars: 28, role: "headline" },
    { key: "new", label: "New way", default: "Ask your docs instead.", maxChars: 28, role: "headline" },
    { key: "note", label: "Margin note", default: "with Lumen", maxChars: 18, role: "caption" },
    { key: "kicker", label: "Masthead", default: "Lumen Notes", maxChars: 22, role: "kicker" },
  ],
  html: `<div class="paper"></div>
<div class="mast"><span class="t" data-21st-slot="kicker">{{kicker}}</span><span class="s">No. 01</span><i class="rule"></i></div>
<div class="body"><div class="ln l1"><span class="num">i.</span><span class="old"><span class="oldt" data-21st-slot="old">{{old|words}}</span></span></div><div class="ln l2"><span class="num">ii.</span><span class="newp"><span class="em" data-21st-slot="new">{{new|words}}<i class="und"></i></span><span class="note"><svg viewBox="0 0 60 30"><path d="M6 24 C 18 22, 34 14, 52 5 M40 4 L53 4 L49 16"/></svg><span data-21st-slot="note">{{note}}</span></span></span></div></div>
<div class="foot"><span>p. 1</span></div>
<div class="grain"></div>`,
  css: `
.v-hook-strike{color:var(--ink);font-family:var(--font-display)}
.v-hook-strike[data-backdrop="on"]{background:var(--paper)}
.v-hook-strike .paper{position:absolute;inset:0;background:radial-gradient(120% 90% at 30% 20%,rgba(255,255,255,.55),transparent 60%),radial-gradient(140% 120% at 50% 50%,transparent 60%,color-mix(in srgb,var(--ink) 16%,transparent))}
.v-hook-strike .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:30cqw;opacity:.32;mix-blend-mode:multiply;pointer-events:none}
.v-hook-strike[data-backdrop="off"] .grain,.v-hook-strike[data-backdrop="off"] .paper{display:none}
.v-hook-strike .mast{position:absolute;left:7cqw;right:7cqw;top:4.2cqw;display:flex;justify-content:space-between;align-items:baseline;padding-bottom:1.2cqw;animation:hook-strike-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-strike .rule{position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--ink);transform-origin:0 50%;animation:hook-strike-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hook-strike .mast .t{font-style:italic;font-size:2.4cqw;line-height:1.1}
.v-hook-strike .mast .s{font:500 1.2cqw/1 var(--font-body);letter-spacing:.06em;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-hook-strike .foot{position:absolute;left:7cqw;right:7cqw;bottom:3.8cqw;display:flex;justify-content:flex-end;font:500 1.15cqw/1 var(--font-body);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 55%,transparent);padding-top:1.1cqw;border-top:1px solid color-mix(in srgb,var(--ink) 35%,transparent);animation:hook-strike-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-strike .body{position:absolute;left:11cqw;right:7cqw;top:16.5cqw;font-size:7cqw;line-height:1.12;letter-spacing:-.012em;transform-origin:0 50%;animation:hook-strike-drift 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-strike .ln{position:relative;display:block}
.v-hook-strike .ln + .ln{margin-top:2.2cqw}
.v-hook-strike .l1{--base:0s}
.v-hook-strike .l2{--base:1.56s}
.v-hook-strike .num{position:absolute;left:-4.4cqw;top:.62em;font-style:italic;font-size:1.9cqw;line-height:1;color:var(--secondary);--delay:var(--base);animation:hook-strike-rise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-strike .w{display:inline-block;--delay:calc(var(--base) + .24s + var(--i) * .15s);animation:hook-strike-rise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-strike .old{position:relative;display:inline-block}
.v-hook-strike .oldt .w{text-decoration:line-through;text-decoration-thickness:.075em;text-decoration-skip-ink:none;animation:hook-strike-rise 6s cubic-bezier(.2,.8,.2,1) infinite,hook-strike-cross 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hook-strike .newp{position:relative;display:inline-block}
.v-hook-strike .em{position:relative;display:inline-block;font-style:italic}
.v-hook-strike .und{position:absolute;left:-.05em;right:-.05em;top:100%;margin-top:-.04em;height:.22em;background:var(--accent);-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 20' preserveAspectRatio='none'%3E%3Cpath d='M4 12 C 80 6, 170 15, 250 9 S 360 7, 396 10' fill='none' stroke='black' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E") 0 0/100% 100% no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 20' preserveAspectRatio='none'%3E%3Cpath d='M4 12 C 80 6, 170 15, 250 9 S 360 7, 396 10' fill='none' stroke='black' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E") 0 0/100% 100% no-repeat;clip-path:inset(-50% 100% -50% 0);animation:hook-strike-circ 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hook-strike .note{position:absolute;right:-1cqw;top:100%;margin-top:1.8cqw;display:flex;align-items:center;gap:.6cqw;font-style:italic;font-size:3.4cqw;line-height:1.1;color:var(--accent);white-space:nowrap;transform:rotate(-4deg);clip-path:inset(-20% 100% -20% 0);animation:hook-strike-note 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hook-strike .note svg{width:5cqw;height:2.5cqw;transform:scaleX(-1);flex:none}
.v-hook-strike .note path{fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
@container (max-aspect-ratio: 4/5){
  .v-hook-strike .mast{left:8cqw;right:8cqw;top:8cqh;padding-bottom:2.4cqw}
  .v-hook-strike .mast .t{font-size:6.6cqw}
  .v-hook-strike .mast .s{font-size:3.2cqw}
  .v-hook-strike .body{left:8cqw;right:8cqw;top:0;bottom:0;padding-top:27cqh;font-size:12.4cqw}
  .v-hook-strike .ln,.v-hook-strike .newp{position:static}
  .v-hook-strike .ln + .ln{margin-top:5cqh}
  .v-hook-strike .num{position:static;display:block;font-size:5cqw;margin-bottom:1.4cqh}
  .v-hook-strike .note{left:0;right:auto;top:auto;bottom:10cqh;margin:0;font-size:9cqw;gap:2.4cqw}
  .v-hook-strike .note svg{width:12cqw;height:6cqw;transform:scaleX(-1) rotate(-60deg)}
  .v-hook-strike .foot{left:8cqw;right:8cqw;bottom:4cqh;font-size:3cqw;padding-top:2.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-strike .mast{top:6cqw;padding-bottom:2cqw}
  .v-hook-strike .mast .t{font-size:4.2cqw}
  .v-hook-strike .mast .s{font-size:2.2cqw}
  .v-hook-strike .body{left:13cqw;right:7cqw;top:27cqh;font-size:9.6cqw}
  .v-hook-strike .ln + .ln{margin-top:4cqw}
  .v-hook-strike .num{left:-6cqw;font-size:3.2cqw}
  .v-hook-strike .note{font-size:5.6cqw;margin-top:3cqw}
  .v-hook-strike .note svg{width:7cqw;height:3.5cqw}
  .v-hook-strike .foot{bottom:6cqw;font-size:2cqw}
}
@keyframes hook-strike-fade{0%{opacity:0}5%{opacity:1}87%{opacity:1}94%,100%{opacity:0}}
@keyframes hook-strike-rule{0%,1%{transform:scaleX(0)}12%,100%{transform:scaleX(1)}}
@keyframes hook-strike-drift{0%{transform:translateY(0) scale(1)}55%,100%{transform:translateY(-.3cqw) scale(1.012)}}
@keyframes hook-strike-cross{0%,17%{color:var(--ink);text-decoration-color:transparent}21%{color:var(--ink);text-decoration-color:var(--accent)}27%,86%{color:color-mix(in srgb,var(--ink) 42%,transparent);text-decoration-color:var(--accent)}94%,100%{color:var(--ink);text-decoration-color:transparent}}
@keyframes hook-strike-p1{0%,17%{clip-path:inset(0 100% 0 0);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}24%,86%{clip-path:inset(0 0 0 0);opacity:1}92%{clip-path:inset(0 0 0 0);opacity:0}100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes hook-strike-p2{0%,23%{clip-path:inset(0 0 0 100%);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}28.5%,86%{clip-path:inset(0 0 0 0);opacity:1}92%{clip-path:inset(0 0 0 0);opacity:0}100%{clip-path:inset(0 0 0 100%);opacity:0}}
@keyframes hook-strike-note{0%,40%{clip-path:inset(-20% 100% -20% -10%);opacity:1}47%,86%{clip-path:inset(-20% -10% -20% -10%);opacity:1}92%{opacity:0}100%{clip-path:inset(-20% 100% -20% -10%);opacity:0}}
@keyframes hook-strike-circ{0%,40%{clip-path:inset(-50% 100% -50% 0)}45%,86%{clip-path:inset(-50% 0 -50% 0);opacity:1}92%,100%{clip-path:inset(-50% 0 -50% 0);opacity:0}}
@keyframes hook-strike-rise{0%,4%{opacity:0;transform:translateY(.22em);filter:blur(.4cqw)}7.2%,87%{opacity:1;transform:translateY(0);filter:blur(0)}93%,100%{opacity:0;transform:translateY(0);filter:blur(0)}}
`,
};

export const hookStatShock: SceneSpec = {
  id: "hook-stat-shock",
  slug: "mg-hook-stat-shock",
  name: "Shock Stat Counter",
  kind: "scene",
  job: "data",
  language: "neo-brutal",
  mechanic: "digit-reel-roll-to-stat",
  energy: "punchy",
  settle: 3,
  colors: {ink: "#0A0A0A", accent: "#FF3D1F", secondary: "#2A2A2A", paper: "#E4FF3C"},
  fonts: {display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["hook", "stat", "counter", "number"],
  fields: [
    { key: "value", label: "Number", default: "4.6", maxChars: 4, role: "value" },
    { key: "unit", label: "Unit", default: "hours", maxChars: 8, role: "label" },
    { key: "body", label: "What it means", default: "lost every week, just looking for things.", maxChars: 48, role: "body" },
    { key: "sticker", label: "Sticker", default: "= 239 hours a year", maxChars: 22, role: "caption" },
  ],
  html: `<div class="top"><span>stat / 01</span><span>fig. 1</span></div>
<div class="row"><div class="big" data-21st-slot="value">{{value|chars}}</div><div class="unit"><b data-21st-slot="unit">{{unit}}</b><p data-21st-slot="body">{{body}}</p></div></div>
<div class="barw"><div class="bar"><div class="fill"></div><div class="flag"><i></i></div></div><div class="ticks"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span></div></div>
<div class="stk" data-21st-slot="sticker">{{sticker}}</div>
<div class="grain"></div>`,
  css: `
.v-hook-stat-shock{color:var(--ink);font-family:var(--font-mono)}
.v-hook-stat-shock[data-backdrop="on"]{background:var(--paper)}
.v-hook-stat-shock .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:30cqw;opacity:.25;mix-blend-mode:multiply;pointer-events:none}
.v-hook-stat-shock[data-backdrop="off"] .grain{display:none}
.v-hook-stat-shock .top{position:absolute;left:4cqw;right:4cqw;top:3.4cqw;display:flex;justify-content:space-between;font-weight:700;font-size:1.45cqw;letter-spacing:.02em;padding-bottom:1cqw;border-bottom:.45cqw solid var(--ink);animation:hook-stat-shock-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-stat-shock .top span:first-child{background:var(--ink);color:var(--paper);padding:.2cqw .7cqw;margin:-.2cqw 0}
.v-hook-stat-shock .row{position:absolute;left:3cqw;right:4cqw;top:6.4cqw;display:flex;align-items:flex-start;gap:3cqw}
.v-hook-stat-shock .big{flex:none;display:flex;font:800 22cqw/1.3 var(--font-display);letter-spacing:-.06em;height:1.3em;overflow:hidden;clip-path:inset(0 -.3em);transform-origin:0 80%;animation:hook-stat-shock-punch 6s linear infinite}
.v-hook-stat-shock .c{position:relative;display:block;--delay:calc(var(--i) * .12s);animation:hook-stat-shock-roll 6s linear infinite}
.v-hook-stat-shock .c::before{content:"7\\A 3\\A 9\\A 1\\A 5\\A 8\\A 2";position:absolute;left:0;right:0;bottom:100%;white-space:pre;text-align:center;line-height:1.3}
.v-hook-stat-shock .c:nth-child(2n)::before{content:"2\\A 8\\A 4\\A 6\\A 0\\A 9\\A 3"}
.v-hook-stat-shock .c:nth-child(3n)::before{content:"5\\A 0\\A 6\\A 2\\A 9\\A 4\\A 7"}
.v-hook-stat-shock .unit{flex:1;min-width:0;padding-top:4.2cqw;animation:hook-stat-shock-unit 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-stat-shock .unit b{display:block;font:700 6cqw/1.05 var(--font-display);letter-spacing:-.04em}
.v-hook-stat-shock .unit p{margin:1.3cqw 0 0;font:500 2.4cqw/1.25 var(--font-display);letter-spacing:-.02em;max-width:34cqw}
.v-hook-stat-shock .stk{position:absolute;right:6cqw;top:30cqw;font:700 2.2cqw/1.1 var(--font-display);letter-spacing:-.02em;background:var(--ink);color:var(--paper);padding:1.1cqw 1.5cqw;box-shadow:.6cqw .6cqw 0 var(--accent);animation:hook-stat-shock-stk 6s linear infinite}
.v-hook-stat-shock .barw{position:absolute;left:4cqw;right:4cqw;top:41cqw;animation:hook-stat-shock-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-stat-shock .bar{position:relative;height:5cqw;border:.45cqw solid var(--ink);background:repeating-linear-gradient(90deg,transparent 0 calc(12.5% - 1px),color-mix(in srgb,var(--ink) 35%,transparent) calc(12.5% - 1px) 12.5%)}
.v-hook-stat-shock .fill{position:absolute;inset:0;background:repeating-linear-gradient(-45deg,var(--ink) 0 .9cqw,var(--secondary) .9cqw 1.8cqw);transform-origin:0 50%;transform:scaleX(0);animation:hook-stat-shock-fill 6s linear infinite}
.v-hook-stat-shock .flag{position:absolute;left:57.5%;bottom:-.45cqw;width:.45cqw;height:9cqw;background:var(--accent);transform-origin:50% 100%;animation:hook-stat-shock-flag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-stat-shock .flag i{position:absolute;left:0;top:0;width:3cqw;height:2cqw;background:var(--accent)}
.v-hook-stat-shock .ticks{display:flex;justify-content:space-between;margin-top:.9cqw;font-weight:600;font-size:1.25cqw}
@container (max-aspect-ratio: 4/5){
  .v-hook-stat-shock .top{left:7cqw;right:7cqw;top:5cqh;font-size:3.4cqw;padding-bottom:2cqw;border-bottom-width:1cqw}
  .v-hook-stat-shock .row{left:5cqw;right:7cqw;top:11cqh;flex-direction:column;gap:1cqh}
  .v-hook-stat-shock .big{font-size:36cqw}
  .v-hook-stat-shock .unit{padding:0 0 0 2cqw}
  .v-hook-stat-shock .unit b{font-size:15cqw}
  .v-hook-stat-shock .unit p{font-size:6.4cqw;margin-top:2cqh;max-width:none}
  .v-hook-stat-shock .barw{left:7cqw;right:7cqw;top:auto;bottom:25cqh}
  .v-hook-stat-shock .bar{height:12cqw;border-width:1cqw}
  .v-hook-stat-shock .fill{background:repeating-linear-gradient(-45deg,var(--ink) 0 2cqw,var(--secondary) 2cqw 4cqw)}
  .v-hook-stat-shock .flag{width:1cqw;height:20cqw;bottom:-1cqw}
  .v-hook-stat-shock .flag i{width:7cqw;height:4.6cqw}
  .v-hook-stat-shock .ticks{font-size:3.2cqw;margin-top:1.6cqw}
  .v-hook-stat-shock .stk{left:7cqw;right:auto;top:auto;bottom:8cqh;font-size:6cqw;padding:3cqw 3.6cqw;box-shadow:1.4cqw 1.4cqw 0 var(--accent)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-stat-shock .top{left:6cqw;right:6cqw;top:5cqw;font-size:2.4cqw;border-bottom-width:.7cqw}
  .v-hook-stat-shock .row{left:5cqw;right:6cqw;top:13cqw;flex-direction:column;gap:0}
  .v-hook-stat-shock .big{font-size:31cqw}
  .v-hook-stat-shock .unit{padding:0 0 0 1.4cqw}
  .v-hook-stat-shock .unit b{font-size:9cqw}
  .v-hook-stat-shock .unit p{font-size:3.8cqw;margin-top:1.4cqw;max-width:48cqw}
  .v-hook-stat-shock .barw{left:6cqw;right:6cqw;top:auto;bottom:8cqw}
  .v-hook-stat-shock .bar{height:7cqw;border-width:.7cqw}
  .v-hook-stat-shock .flag{width:.7cqw;height:13cqw;bottom:-.7cqw}
  .v-hook-stat-shock .flag i{width:4.6cqw;height:3cqw}
  .v-hook-stat-shock .ticks{font-size:2cqw}
  .v-hook-stat-shock .stk{right:6cqw;top:auto;bottom:30cqw;font-size:3.6cqw;padding:1.8cqw 2.4cqw}
}
@keyframes hook-stat-shock-in{0%{opacity:0;transform:translateY(-.6cqw)}5%,88%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@keyframes hook-stat-shock-punch{0%{opacity:0;transform:scale(.96)}4%,34%{opacity:1;transform:scale(1)}36%{opacity:1;transform:scale(1.035)}39%,88%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(1)}}
@keyframes hook-stat-shock-roll{0%,6%{transform:translateY(9.1em);animation-timing-function:cubic-bezier(.12,.75,.2,1)}30%,95%{transform:translateY(0)}100%{transform:translateY(0)}}
@keyframes hook-stat-shock-unit{0%,10%{opacity:0;transform:translateX(-1.5cqw)}17%,88%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes hook-stat-shock-stk{0%,37%{opacity:0;transform:rotate(-14deg) scale(.4)}40%{opacity:1;transform:rotate(-2deg) scale(1.12)}42.5%{opacity:1;transform:rotate(-6deg) scale(.97)}44.5%,88%{opacity:1;transform:rotate(-5deg) scale(1)}92%,100%{opacity:0;transform:rotate(-5deg) scale(.9)}}
@keyframes hook-stat-shock-fill{0%,10%{transform:scaleX(0);animation-timing-function:cubic-bezier(.12,.75,.2,1)}36%,88%{transform:scaleX(.575);opacity:1}94%{transform:scaleX(.575);opacity:0}100%{transform:scaleX(0);opacity:0}}
@keyframes hook-stat-shock-flag{0%,34%{opacity:0;transform:scaleY(.2)}38%,88%{opacity:1;transform:scaleY(1)}94%,100%{opacity:0;transform:scaleY(1)}}
`,
};

export const hookChaosOrder: SceneSpec = {
  id: "hook-chaos-order",
  slug: "mg-hook-chaos-order",
  name: "Chaos Into One Card",
  kind: "scene",
  job: "titles",
  language: "product-ui",
  mechanic: "chip-swirl-collapse-to-card",
  energy: "punchy",
  settle: 3.2,
  colors: {ink: "#1B1C1F", accent: "#3D63FF", secondary: "#FFE4CC", paper: "#EBEDF1"},
  fonts: {display: "Geist", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.heading",
  tags: ["hook", "chaos", "notifications", "before-after"],
  fields: [
    { key: "before", label: "Before", default: "9:04 am · 22 tabs open", maxChars: 26, role: "label" },
    { key: "title", label: "Card title", default: "Today in Lumen", maxChars: 20, role: "headline" },
    { key: "after", label: "After", default: "9:05 am · one place", maxChars: 26, role: "label" },
  ],
  html: `<div class="bg"></div>
<div class="lbl l1"><i></i><span data-21st-slot="before">{{before}}</span><b class="strike"></b></div>
<div class="swarm"><div class="chip" style="--x0:21.0cqw;--y0:1.9cqw;--r0:-6deg;--x1:8.4cqw;--y1:9.2cqw;--r1:-15deg;--x2:-9.8cqw;--y2:7.2cqw;--r2:-24deg;--x3:-11.7cqw;--y3:0.0cqw;--r3:-33deg;--c:#4870FF"><div class="cin"><span class="ico">P</span><b>Pinwheel</b><span>14 new in #launch</span></div></div><div class="chip" style="--x0:-19.7cqw;--y0:6.4cqw;--r0:-10deg;--x1:-20.0cqw;--y1:-4.3cqw;--r1:-1deg;--x2:-2.4cqw;--y2:-9.5cqw;--r2:8deg;--x3:9.5cqw;--y3:-4.5cqw;--r3:17deg;--c:#FF6B5B"><div class="cin"><span class="ico">M</span><b>Mail</b><span>Re: Re: Fwd: final deck</span></div></div><div class="chip" style="--x0:6.4cqw;--y0:-12.3cqw;--r0:-2deg;--x1:21.6cqw;--y1:-4.0cqw;--r1:-11deg;--x2:15.2cqw;--y2:6.5cqw;--r2:-20deg;--x3:-1.2cqw;--y3:7.0cqw;--r3:-29deg;--c:#22A06B"><div class="cin"><span class="ico">K</span><b>Kite</b><span>LUM-482 is blocked</span></div></div><div class="chip" style="--x0:11.9cqw;--y0:11.8cqw;--r0:-8deg;--x1:-11.1cqw;--y1:11.0cqw;--r1:1deg;--x2:-20.7cqw;--y2:0.5cqw;--r2:10deg;--x3:-8.7cqw;--y3:-5.8cqw;--r3:19deg;--c:#1F2430"><div class="cin"><span class="ico">Q</span><b>Quarry</b><span>PR #1293 needs review</span></div></div><div class="chip" style="--x0:-25.2cqw;--y0:-4.7cqw;--r0:-10deg;--x1:-6.5cqw;--y1:-12.4cqw;--r1:-19deg;--x2:15.2cqw;--y2:-7.8cqw;--r2:-28deg;--x3:14.6cqw;--y3:1.3cqw;--r3:-37deg;--c:#F59E0B"><div class="cin"><span class="ico">H</span><b>Halcyon</b><span>spec_v7_FINAL(2).doc</span></div></div><div class="chip" style="--x0:25.6cqw;--y0:-5.4cqw;--r0:-2deg;--x1:21.8cqw;--y1:7.1cqw;--r1:7deg;--x2:-1.0cqw;--y2:11.4cqw;--r2:16deg;--x3:-12.9cqw;--y3:4.2cqw;--r3:25deg;--c:#3B82F6"><div class="cin"><span class="ico">C</span><b>Calendar</b><span>Standup moved to 9:30</span></div></div><div class="chip tab" style="--x0:-12.1cqw;--y0:13.3cqw;--r0:10deg;--x1:-26.2cqw;--y1:2.4cqw;--r1:1deg;--x2:-14.7cqw;--y2:-9.0cqw;--r2:-8deg;--x3:4.1cqw;--y3:-7.8cqw;--r3:-17deg;--c:#EC4899"><div class="cin"><span class="ico"></span><b>pricing draft (copy)</b><span class="x">&times;</span></div></div><div class="chip" style="--x0:-8.8cqw;--y0:-14.4cqw;--r0:7deg;--x1:16.6cqw;--y1:-11.1cqw;--r1:16deg;--x2:23.2cqw;--y2:1.6cqw;--r2:25deg;--x3:7.4cqw;--y3:7.3cqw;--r3:34deg;--c:#4870FF"><div class="cin"><span class="ico">P</span><b>Pinwheel</b><span>@you who owns this?</span></div></div><div class="chip bad" style="--x0:26.0cqw;--y0:7.7cqw;--r0:6deg;--x1:2.4cqw;--y1:14.3cqw;--r1:-3deg;--x2:-19.7cqw;--y2:7.1cqw;--r2:-12deg;--x3:-15.5cqw;--y3:-2.9cqw;--r3:-21deg;--c:#EF4444"><div class="cin"><span class="ico">!</span><b>Build</b><span>failed on main</span></div></div><div class="chip tab" style="--x0:-29.9cqw;--y0:3.4cqw;--r0:-7deg;--x1:-21.0cqw;--y1:-9.9cqw;--r1:2deg;--x2:5.3cqw;--y2:-12.3cqw;--r2:11deg;--x3:15.6cqw;--y3:-3.3cqw;--r3:20deg;--c:#14B8A6"><div class="cin"><span class="ico"></span><b>Roadmap Q4 v3</b><span class="x">&times;</span></div></div><div class="chip" style="--x0:18.0cqw;--y0:-13.1cqw;--r0:1deg;--x1:29.1cqw;--y1:0.0cqw;--r1:-8deg;--x2:12.5cqw;--y2:11.1cqw;--r2:-17deg;--x3:-7.3cqw;--y3:8.0cqw;--r3:-26deg;--c:#FF6B5B"><div class="cin"><span class="ico">M</span><b>Mail</b><span>2,341 unread</span></div></div><div class="chip" style="--x0:4.1cqw;--y0:16.2cqw;--r0:-5deg;--x1:-21.9cqw;--y1:10.3cqw;--r1:4deg;--x2:-24.3cqw;--y2:-4.0cqw;--r2:13deg;--x3:-5.2cqw;--y3:-8.6cqw;--r3:22deg;--c:#22A06B"><div class="cin"><span class="ico">K</span><b>Kite</b><span>6 tickets assigned</span></div></div><div class="chip tab" style="--x0:-24.8cqw;--y0:-10.7cqw;--r0:-8deg;--x1:2.7cqw;--y1:-15.4cqw;--r1:-17deg;--x2:23.5cqw;--y2:-5.6cqw;--r2:-26deg;--x3:15.4cqw;--y3:4.6cqw;--r3:-35deg;--c:#4B73FF"><div class="cin"><span class="ico"></span><b>Untitled doc</b><span class="x">&times;</span></div></div><div class="chip" style="--x0:33.0cqw;--y0:-0.7cqw;--r0:-9deg;--x1:18.6cqw;--y1:12.5cqw;--r1:-0deg;--x2:-10.1cqw;--y2:12.5cqw;--r2:9deg;--x3:-17.7cqw;--y3:2.0cqw;--r3:18deg;--c:#F59E0B"><div class="cin"><span class="ico">H</span><b>Halcyon</b><span>Where's the latest spec?</span></div></div><div class="chip" style="--x0:-23.7cqw;--y0:12.1cqw;--r0:-7deg;--x1:-30.7cqw;--y1:-2.8cqw;--r1:-16deg;--x2:-9.1cqw;--y2:-12.9cqw;--r2:-25deg;--x3:10.6cqw;--y3:-7.7cqw;--r3:-34deg;--c:#1F2430"><div class="cin"><span class="ico">Q</span><b>Quarry</b><span>3 merge conflicts</span></div></div><div class="chip tab" style="--x0:1.6cqw;--y0:-17.5cqw;--r0:10deg;--x1:26.7cqw;--y1:-8.7cqw;--r1:19deg;--x2:24.1cqw;--y2:6.5cqw;--r2:28deg;--x3:2.4cqw;--y3:9.5cqw;--r3:37deg;--c:#F97316"><div class="cin"><span class="ico"></span><b>Launch checklist (old)</b><span class="x">&times;</span></div></div><div class="chip" style="--x0:22.1cqw;--y0:13.6cqw;--r0:8deg;--x1:-8.4cqw;--y1:15.9cqw;--r1:-1deg;--x2:-26.7cqw;--y2:3.6cqw;--r2:-10deg;--x3:-14.5cqw;--y3:-6.3cqw;--r3:-19deg;--c:#3B82F6"><div class="cin"><span class="ico">C</span><b>Calendar</b><span>Sync in 2 min</span></div></div><div class="chip" style="--x0:-34.7cqw;--y0:-2.4cqw;--r0:7deg;--x1:-15.0cqw;--y1:-14.8cqw;--r1:16deg;--x2:15.1cqw;--y2:-12.1cqw;--r2:25deg;--x3:19.2cqw;--y3:-0.4cqw;--r3:34deg;--c:#4870FF"><div class="cin"><span class="ico">P</span><b>Pinwheel</b><span>Can someone paste the link?</span></div></div><div class="chip tab" style="--x0:29.1cqw;--y0:-10.4cqw;--r0:7deg;--x1:31.0cqw;--y1:5.8cqw;--r1:-2deg;--x2:4.9cqw;--y2:14.4cqw;--r2:-11deg;--x3:-13.8cqw;--y3:7.1cqw;--r3:-20deg;--c:#0EA5E9"><div class="cin"><span class="ico"></span><b>API keys v2</b><span class="x">&times;</span></div></div><div class="chip" style="--x0:-7.9cqw;--y0:18.0cqw;--r0:-7deg;--x1:-30.9cqw;--y1:6.5cqw;--r1:2deg;--x2:-22.7cqw;--y2:-9.0cqw;--r2:11deg;--x3:0.9cqw;--y3:-10.1cqw;--r3:20deg;--c:#F59E0B"><div class="cin"><span class="ico">H</span><b>Halcyon</b><span>4 docs named Roadmap</span></div></div><div class="chip bad" style="--x0:-18.1cqw;--y0:-16.2cqw;--r0:-5deg;--x1:14.4cqw;--y1:-15.7cqw;--r1:-14deg;--x2:29.0cqw;--y2:-1.3cqw;--r2:-23deg;--x3:12.8cqw;--y3:7.9cqw;--r3:-32deg;--c:#EF4444"><div class="cin"><span class="ico">!</span><b>Search</b><span>0 results for 'spec'</span></div></div><div class="chip tab" style="--x0:35.1cqw;--y0:5.7cqw;--r0:3deg;--x1:10.2cqw;--y1:16.8cqw;--r1:12deg;--x2:-19.9cqw;--y2:11.1cqw;--r2:21deg;--x3:-20.1cqw;--y3:-1.4cqw;--r3:30deg;--c:#84CC16"><div class="cin"><span class="ico"></span><b>notes final final</b><span class="x">&times;</span></div></div></div>
<div class="cardw"><div class="stk" style="--w:36;--y:4.6;--a:.4"></div><div class="stk" style="--w:40;--y:2.6;--a:.65"></div>
<div class="card"><div class="ch"><span class="orb"></span><b data-21st-slot="title">{{title}}</b><em>3 new</em></div>
<div class="it"><span class="ico" style="--c:#F59E0B">H</span><div><b>Launch spec v8 is final</b><span>Merged from 4 docs, updated 2m ago</span></div><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i></div>
<div class="it"><span class="ico" style="--c:#1F2430">Q</span><div><b>2 PRs ready to merge</b><span>Conflicts resolved on main</span></div><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i></div>
<div class="it"><span class="ico" style="--c:#4870FF">P</span><div><b>#launch summarized</b><span>14 messages, 2 decisions, 1 owner</span></div><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i></div>
<div class="ask"><span>Ask anything</span><kbd>&#8984;K</kbd></div>
</div></div>
<div class="l2w"><div class="lbl l2"><i></i><span data-21st-slot="after">{{after}}</span></div></div>`,
  css: `
.v-hook-chaos-order{--u:1cqw;color:var(--ink);font-family:var(--font-body)}
.v-hook-chaos-order[data-backdrop="on"]{background:var(--paper)}
.v-hook-chaos-order .bg{position:absolute;inset:-10%;background:radial-gradient(45% 55% at 18% 25%,color-mix(in srgb,var(--accent) 22%,var(--paper)),transparent 70%),radial-gradient(50% 55% at 85% 30%,var(--secondary),transparent 70%),radial-gradient(55% 60% at 60% 95%,color-mix(in srgb,var(--secondary) 60%,#FFE8CF),transparent 70%);animation:hook-chaos-order-bg 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-chaos-order[data-backdrop="off"] .bg{display:none}
.v-hook-chaos-order .swarm{position:absolute;left:50%;top:50%;width:0;height:0}
.v-hook-chaos-order .chip{position:absolute;left:0;top:0;animation:hook-chaos-order-swirl 6s linear infinite}
.v-hook-chaos-order .cin{display:flex;align-items:center;gap:.7cqw;transform:translate(-50%,-50%);white-space:nowrap;font-size:1.45cqw;padding:.7cqw 1.1cqw .7cqw .7cqw;border-radius:1cqw;color:#1B1C1F;background:rgba(255,255,255,.82);box-shadow:0 0 0 1px rgba(255,255,255,.9),0 .5cqw 1.6cqw color-mix(in srgb,var(--accent) 18%,transparent),0 .1cqw .3cqw rgba(41,42,45,.12)}
.v-hook-chaos-order .cin b{font-weight:650}
.v-hook-chaos-order .cin span{color:#58595D}
.v-hook-chaos-order .ico{width:2.1cqw;height:2.1cqw;border-radius:.55cqw;display:grid;place-items:center;font-size:1.15cqw;font-weight:700;color:#fff;background:var(--c);flex:none}
.v-hook-chaos-order .tab .cin{border-radius:.8cqw .8cqw .3cqw .3cqw;padding:.6cqw .9cqw}
.v-hook-chaos-order .tab .ico{width:1.4cqw;height:1.4cqw;border-radius:50%}
.v-hook-chaos-order .tab .x{color:#97999D;margin-left:.6cqw}
.v-hook-chaos-order .bad .cin{box-shadow:0 0 0 1px rgba(239,68,68,.35),0 .5cqw 1.6cqw rgba(239,68,68,.16)}
.v-hook-chaos-order .cardw{position:absolute;inset:0;display:grid;place-items:center}
.v-hook-chaos-order .cardw > *{grid-area:1/1}
.v-hook-chaos-order .stk{position:relative;top:calc(var(--y) * var(--u));width:calc(var(--w) * var(--u));height:calc(30*var(--u));border-radius:calc(1.8*var(--u));background:rgba(255,255,255,var(--a));box-shadow:0 calc(1.2*var(--u)) calc(3*var(--u)) color-mix(in srgb,var(--accent) 14%,transparent);animation:hook-chaos-order-card 6s linear infinite}
.v-hook-chaos-order .card{width:calc(44*var(--u));border-radius:calc(1.8*var(--u));background:#fff;color:#1B1C1F;padding:calc(2*var(--u));box-shadow:0 0 0 1px rgba(32,33,36,.06),0 calc(2.6*var(--u)) calc(6*var(--u)) color-mix(in srgb,var(--accent) 24%,transparent),0 calc(.6*var(--u)) calc(1.2*var(--u)) rgba(41,42,45,.1);animation:hook-chaos-order-card 6s linear infinite}
.v-hook-chaos-order .ch{display:flex;align-items:center;gap:calc(1*var(--u));margin-bottom:calc(1.5*var(--u))}
.v-hook-chaos-order .orb{width:calc(2.8*var(--u));height:calc(2.8*var(--u));flex:none;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,color-mix(in srgb,var(--accent) 45%,#fff) 30%,var(--accent) 70%,color-mix(in srgb,var(--accent) 70%,#000));box-shadow:0 0 calc(1.4*var(--u)) color-mix(in srgb,var(--accent) 45%,transparent)}
.v-hook-chaos-order .ch b{flex:1;min-width:0;font-size:calc(1.9*var(--u));line-height:1.15;font-weight:650;letter-spacing:-.02em;font-family:var(--font-display)}
.v-hook-chaos-order .ch em{flex:none;font-style:normal;font-size:calc(1.2*var(--u));font-weight:600;color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,#fff);padding:calc(.45*var(--u)) calc(.9*var(--u));border-radius:calc(2*var(--u))}
.v-hook-chaos-order .it{display:flex;align-items:center;gap:calc(1.1*var(--u));padding:calc(1*var(--u)) 0;border-top:1px solid #EDEFF3}
.v-hook-chaos-order .it .ico{width:calc(2.6*var(--u));height:calc(2.6*var(--u));border-radius:calc(.7*var(--u));font-size:calc(1.3*var(--u))}
.v-hook-chaos-order .it div{display:flex;flex-direction:column;gap:calc(.3*var(--u))}
.v-hook-chaos-order .it b{font-size:calc(1.5*var(--u));font-weight:600}
.v-hook-chaos-order .it span{font-size:calc(1.15*var(--u));color:#77787C}
.v-hook-chaos-order .it i{margin-left:auto;width:calc(1.8*var(--u));height:calc(1.8*var(--u));flex:none;border-radius:50%;background:#22C55E;display:grid;place-items:center}
.v-hook-chaos-order .it i svg{width:calc(1.1*var(--u));height:calc(1.1*var(--u))}
.v-hook-chaos-order .ask{margin-top:calc(1.2*var(--u));display:flex;align-items:center;justify-content:space-between;padding:calc(1*var(--u)) calc(1.2*var(--u));border-radius:calc(1*var(--u));background:#F3F5F9;font-size:calc(1.3*var(--u));color:#898B8E}
.v-hook-chaos-order .ask kbd{font:600 calc(1.1*var(--u))/1 var(--font-body);background:#fff;padding:calc(.4*var(--u)) calc(.6*var(--u));border-radius:calc(.5*var(--u));box-shadow:0 0 0 1px #E3E4E9;color:#58595D}
.v-hook-chaos-order .lbl{position:relative;font-size:1.6cqw;line-height:1.2;font-weight:600;letter-spacing:-.01em;display:flex;align-items:center;gap:.8cqw}
.v-hook-chaos-order .lbl i{width:.9cqw;height:.9cqw;border-radius:50%;flex:none}
.v-hook-chaos-order .l1{position:absolute;left:5cqw;top:4cqw;animation:hook-chaos-order-l1 6s linear infinite}
.v-hook-chaos-order .l1 i{background:#EF4444}
.v-hook-chaos-order .strike{position:absolute;left:1.7cqw;right:-.3cqw;top:52%;height:.12em;background:currentColor;transform-origin:0 50%;transform:scaleX(0);animation:hook-chaos-order-strike 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hook-chaos-order .l2w{position:absolute;left:5cqw;right:5cqw;bottom:3.4cqw;display:flex;justify-content:center}
.v-hook-chaos-order .l2{animation:hook-chaos-order-l2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-chaos-order .l2 i{background:var(--accent);box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--accent) 22%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-hook-chaos-order > *{--u:2cqw}
  .v-hook-chaos-order .swarm{transform:scale(2.1)}
  .v-hook-chaos-order .ch b{font-size:5.8cqw}
  .v-hook-chaos-order .ch em{display:none}
  .v-hook-chaos-order .lbl{font-size:6cqw;gap:2.4cqw}
  .v-hook-chaos-order .lbl i{width:2.6cqw;height:2.6cqw}
  .v-hook-chaos-order .l1{left:8cqw;right:auto;top:8cqh}
  .v-hook-chaos-order .strike{left:5cqw}
  .v-hook-chaos-order .l2w{left:8cqw;right:8cqw;bottom:8cqh;justify-content:flex-start}
  .v-hook-chaos-order .l2 i{box-shadow:0 0 0 1cqw color-mix(in srgb,var(--accent) 22%,transparent)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-chaos-order > *{--u:1.55cqw}
  .v-hook-chaos-order .swarm{transform:scale(1.5)}
  .v-hook-chaos-order .lbl{font-size:3cqw;gap:1.4cqw}
  .v-hook-chaos-order .lbl i{width:1.6cqw;height:1.6cqw}
  .v-hook-chaos-order .l1{left:6cqw;top:6cqw}
  .v-hook-chaos-order .strike{left:3cqw}
  .v-hook-chaos-order .l2w{bottom:6cqw}
}
@keyframes hook-chaos-order-bg{0%{transform:rotate(0deg) scale(1)}50%,100%{transform:rotate(4deg) scale(1.06)}}
@keyframes hook-chaos-order-swirl{0%{opacity:1;transform:translate(var(--x0),var(--y0)) rotate(var(--r0)) scale(1)}10%{opacity:1;transform:translate(var(--x1),var(--y1)) rotate(var(--r1)) scale(1)}20%{opacity:1;transform:translate(var(--x2),var(--y2)) rotate(var(--r2)) scale(.96)}28%{opacity:1;transform:translate(var(--x3),var(--y3)) rotate(var(--r3)) scale(.9);animation-timing-function:cubic-bezier(.6,0,.9,.5)}35%{opacity:0;transform:translate(0cqw,0cqw) rotate(0deg) scale(.3)}90%{opacity:0;transform:translate(var(--x0),var(--y0)) rotate(var(--r0)) scale(.85)}100%{opacity:1;transform:translate(var(--x0),var(--y0)) rotate(var(--r0)) scale(1)}}
@keyframes hook-chaos-order-card{0%,32%{opacity:0;transform:scale(.6);filter:blur(1cqw)}37.5%{opacity:1;transform:scale(1.04);filter:blur(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}42%,85%{opacity:1;transform:scale(1);filter:blur(0)}91%,100%{opacity:0;transform:scale(.94);filter:blur(.6cqw)}}
@keyframes hook-chaos-order-l1{0%{opacity:0}4%,28%{opacity:1}34%,88%{opacity:.5}94%,100%{opacity:0}}
@keyframes hook-chaos-order-strike{0%,28%{transform:scaleX(0)}34%,88%{transform:scaleX(1)}94%,100%{transform:scaleX(0)}}
@keyframes hook-chaos-order-l2{0%,38%{opacity:0;transform:translateY(.8cqw)}43%,86%{opacity:1;transform:translateY(0)}91%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const hookWhatIf: SceneSpec = {
  id: "hook-what-if",
  slug: "mg-hook-what-if",
  name: "What If Focus Pull",
  kind: "scene",
  job: "titles",
  language: "product-ui",
  mechanic: "blurred-ui-focus-pull",
  energy: "calm",
  settle: 3.4,
  colors: {ink: "#0F0F12", accent: "#3D63FF", secondary: "#3FD0FF", paper: "#F7F7F5"},
  fonts: {display: "Geist", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.heading",
  tags: ["hook", "question", "product-reveal"],
  fields: [
    { key: "headline", label: "Question", default: "What if it just worked?", maxChars: 28, role: "headline" },
    { key: "sub", label: "Subline", default: "Lumen keeps your docs, code and team in sync.", maxChars: 52, role: "body" },
  ],
  html: `<div class="halo"></div>
<div class="scene"><div class="win">
      <div class="bar"><i style="--c:#FF5F57"></i><i style="--c:#FEBC2E"></i><i style="--c:#28C840"></i><span>Launch plan</span></div>
      <div class="bd"><div class="side"><div class="nv"><i style="--c:#A3A3AF"></i>Home</div><div class="nv"><i style="--c:#60A5FA"></i>Inbox<em>3</em></div><div class="nv on"><i style="--c:#3F65FA"></i>Launch plan</div><div class="nv"><i style="--c:#F59E0B"></i>Specs</div><div class="nv"><i style="--c:#10B981"></i>Code</div><div class="nv"><i style="--c:#EC4899"></i>Team</div></div>
        <div class="doc"><h5>Launch plan, Q4</h5><div class="pills"><span style="--b:#DCFCE7;--c:#15803D">On track</span><span style="--b:#EEF0FF;--c:#2844DA">Ships Oct 14</span><span style="--b:#FFF1E6;--c:#C2410C">6 people</span></div><div class="task"><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i>Spec v8 approved<span>Maya</span></div><div class="task"><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i>Pricing page merged<span>PR #1293</span></div><div class="task"><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i>QA pass on staging<span>214 tests</span></div><div class="task"><i><svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg></i>Launch post drafted<span>Theo</span></div></div>
        <div class="ai"><div class="t"><span class="orb"></span>Ask</div><div class="me">Are we ready to launch?</div><div class="ans"><b>Yes.</b> Spec is final, both PRs are merged and QA passed on staging.<div class="src"><span>spec_v8</span><span>PR #1293</span></div></div></div>
      </div></div></div>
<div class="hd" data-21st-slot="headline">{{headline|words}}</div>
<div class="sub" data-21st-slot="sub">{{sub}}</div>`,
  css: `
.v-hook-what-if{--u:1cqw;color:var(--ink);font-family:var(--font-body)}
.v-hook-what-if[data-backdrop="on"]{background:var(--paper)}
.v-hook-what-if .halo{position:absolute;left:10cqw;right:10cqw;top:20cqw;height:40cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 28%,transparent),color-mix(in srgb,var(--secondary) 14%,transparent) 60%,transparent);filter:blur(2cqw);animation:hook-what-if-halo 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-what-if[data-backdrop="off"] .halo{display:none}
.v-hook-what-if .hd{position:absolute;left:6cqw;right:6cqw;top:5.6cqw;text-align:center;font:600 5.8cqw/1.08 var(--font-display);letter-spacing:-.045em;word-spacing:.08em}
.v-hook-what-if .w{display:inline-block;--delay:calc(var(--i) * .22s);animation:hook-what-if-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-what-if .w:last-child{background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 50%,var(--secondary)) 60%,var(--secondary));-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.04em}
.v-hook-what-if .sub{position:absolute;left:6cqw;right:6cqw;top:13.4cqw;text-align:center;font-size:1.8cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 62%,transparent);animation:hook-what-if-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-what-if .scene{position:absolute;left:13cqw;right:13cqw;top:19.6cqw;height:33cqw;animation:hook-what-if-scene 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-what-if .win{position:absolute;inset:0;border-radius:calc(1.6*var(--u));background:#fff;color:#15171A;box-shadow:0 0 0 1px rgba(15,15,18,.08),0 calc(3*var(--u)) calc(7*var(--u)) rgba(33,34,37,.16),0 calc(.6*var(--u)) calc(1.4*var(--u)) rgba(33,34,37,.08);overflow:hidden;display:flex;flex-direction:column}
.v-hook-what-if .bar{height:calc(3.2*var(--u));flex:none;display:flex;align-items:center;gap:calc(.6*var(--u));padding:0 calc(1.4*var(--u));border-bottom:1px solid #EEEEF2;font-size:calc(1.15*var(--u));color:#8A8A96}
.v-hook-what-if .bar i{width:calc(.9*var(--u));height:calc(.9*var(--u));border-radius:50%;background:var(--c)}
.v-hook-what-if .bar span{margin-left:auto;margin-right:auto}
.v-hook-what-if .bd{flex:1;display:flex;min-height:0}
.v-hook-what-if .side{width:calc(13*var(--u));flex:none;background:#FAFAFB;border-right:1px solid #EEEEF2;padding:calc(1.4*var(--u)) calc(1.1*var(--u));display:flex;flex-direction:column;gap:calc(.5*var(--u));font-size:calc(1.2*var(--u));color:#4A4A55}
.v-hook-what-if .nv{display:flex;align-items:center;gap:calc(.7*var(--u));padding:calc(.5*var(--u)) calc(.6*var(--u));border-radius:calc(.6*var(--u))}
.v-hook-what-if .nv i{width:calc(1.2*var(--u));height:calc(1.2*var(--u));border-radius:calc(.35*var(--u));background:var(--c)}
.v-hook-what-if .nv.on{background:color-mix(in srgb,var(--accent) 10%,#fff);color:var(--accent);font-weight:600}
.v-hook-what-if .nv.on i{background:var(--accent)}
.v-hook-what-if .nv em{margin-left:auto;font-style:normal;font-size:calc(1*var(--u));background:#FF5A5F;color:#fff;border-radius:calc(1*var(--u));padding:calc(.1*var(--u)) calc(.5*var(--u))}
.v-hook-what-if .doc{flex:1;padding:calc(1.8*var(--u)) calc(2.2*var(--u));display:flex;flex-direction:column;gap:calc(1*var(--u));min-width:0}
.v-hook-what-if .doc h5{margin:0;font-size:calc(2.3*var(--u));font-weight:650;letter-spacing:-.03em}
.v-hook-what-if .pills{display:flex;gap:calc(.6*var(--u))}
.v-hook-what-if .pills span{font-size:calc(1.05*var(--u));font-weight:600;padding:calc(.35*var(--u)) calc(.8*var(--u));border-radius:calc(1*var(--u));background:var(--b);color:var(--c)}
.v-hook-what-if .task{display:flex;align-items:center;gap:calc(.9*var(--u));font-size:calc(1.25*var(--u));color:#2A2B2E;padding:calc(.55*var(--u)) 0;border-bottom:1px solid #F2F2F5}
.v-hook-what-if .task i{width:calc(1.5*var(--u));height:calc(1.5*var(--u));border-radius:calc(.4*var(--u));background:#22C55E;display:grid;place-items:center;flex:none}
.v-hook-what-if .task i svg{width:calc(1*var(--u));height:calc(1*var(--u))}
.v-hook-what-if .task span{margin-left:auto;font-size:calc(1*var(--u));color:#8A8A96}
.v-hook-what-if .ai{width:calc(20*var(--u));flex:none;border-left:1px solid #EEEEF2;padding:calc(1.6*var(--u)) calc(1.4*var(--u));display:flex;flex-direction:column;gap:calc(1*var(--u));background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 4%,#fff),#fff)}
.v-hook-what-if .ai .t{display:flex;align-items:center;gap:calc(.7*var(--u));font-size:calc(1.2*var(--u));font-weight:600}
.v-hook-what-if .orb{width:calc(1.8*var(--u));height:calc(1.8*var(--u));border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,color-mix(in srgb,var(--accent) 45%,#fff) 30%,var(--accent) 70%)}
.v-hook-what-if .me{align-self:flex-end;font-size:calc(1.1*var(--u));background:#F1F1F4;padding:calc(.7*var(--u)) calc(.9*var(--u));border-radius:calc(1*var(--u)) calc(1*var(--u)) calc(.3*var(--u)) calc(1*var(--u));max-width:85%}
.v-hook-what-if .ans{font-size:calc(1.1*var(--u));line-height:1.45;padding:calc(1*var(--u));border-radius:calc(1*var(--u));background:#fff;box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 18%,#fff),0 calc(.5*var(--u)) calc(1.4*var(--u)) color-mix(in srgb,var(--accent) 12%,transparent)}
.v-hook-what-if .ans b{color:#16A34A}
.v-hook-what-if .src{display:flex;gap:calc(.5*var(--u));margin-top:calc(.7*var(--u))}
.v-hook-what-if .src span{font-size:calc(.95*var(--u));padding:calc(.25*var(--u)) calc(.6*var(--u));border-radius:calc(.5*var(--u));background:color-mix(in srgb,var(--accent) 9%,#fff);color:var(--accent)}
@container (max-aspect-ratio: 4/5){
  .v-hook-what-if > *{--u:1.85cqw}
  .v-hook-what-if .hd{left:7cqw;right:7cqw;top:8cqh;font-size:13cqw;line-height:1.02}
  .v-hook-what-if .sub{left:8cqw;right:8cqw;top:auto;bottom:7cqh;font-size:5.6cqw}
  .v-hook-what-if .scene{left:6cqw;right:6cqw;top:31cqh;height:auto}
  .v-hook-what-if .win{position:relative}
  .v-hook-what-if .side{display:none}
  .v-hook-what-if .bd{flex-direction:column}
  .v-hook-what-if .ai{width:auto;border-left:0;border-top:1px solid #EEEEF2}
  .v-hook-what-if .halo{left:-20cqw;right:-20cqw;top:35cqh;height:60cqh}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-what-if > *{--u:1.3cqw}
  .v-hook-what-if .hd{left:7cqw;right:7cqw;top:7cqw;font-size:8.4cqw}
  .v-hook-what-if .sub{left:8cqw;right:8cqw;top:auto;bottom:6cqw;font-size:3.2cqw}
  .v-hook-what-if .scene{left:7cqw;right:7cqw;top:27cqw;height:auto}
  .v-hook-what-if .win{position:relative}
  .v-hook-what-if .side{display:none}
  .v-hook-what-if .ai{width:calc(26*var(--u))}
  .v-hook-what-if .halo{left:0;right:0;top:25cqw;height:60cqw}
}
@keyframes hook-what-if-halo{0%,16%{opacity:0;transform:scale(.8)}46%{opacity:1;transform:scale(1)}84%{opacity:1;transform:scale(1.05)}96%,100%{opacity:0;transform:scale(.8)}}
@keyframes hook-what-if-sub{0%,34%{opacity:0;transform:translateY(.6cqw)}40%,86%{opacity:1;transform:translateY(0)}92%,100%{opacity:0;transform:translateY(0)}}
@keyframes hook-what-if-scene{0%,15%{filter:blur(1.3cqw) grayscale(1) contrast(.82) brightness(1.06);transform:translateY(2.4cqw) scale(1.05)}44%{filter:blur(0) grayscale(0) contrast(1) brightness(1);transform:translateY(0) scale(1)}84%{filter:blur(0) grayscale(0) contrast(1) brightness(1);transform:translateY(-.8cqw) scale(1.012)}96%,100%{filter:blur(1.3cqw) grayscale(1) contrast(.82) brightness(1.06);transform:translateY(2.4cqw) scale(1.05)}}
@keyframes hook-what-if-word{0%,6%{opacity:0;filter:blur(1cqw);transform:translateY(.18em) scale(.97)}15%,86%{opacity:1;filter:blur(0);transform:translateY(0) scale(1)}93%,100%{opacity:0;filter:blur(1cqw);transform:translateY(-.1em) scale(1)}}
`,
};

export const hookCountdown: SceneSpec = {
  id: "hook-countdown",
  slug: "mg-hook-countdown",
  name: "Neon Countdown Ring",
  kind: "scene",
  job: "titles",
  language: "pixel-terminal",
  mechanic: "ring-timer-countdown-to-done",
  energy: "punchy",
  settle: 4.3,
  colors: {ink: "#EFFFF6", accent: "#3DFF9A", secondary: "#2EE6FF", paper: "#04060A"},
  fonts: {display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["hook", "countdown", "timer", "speed"],
  fields: [
    { key: "kicker", label: "Kicker", default: "deploy · production", maxChars: 22, role: "kicker" },
    { key: "line1", label: "Promise", default: "Ship in", maxChars: 14, role: "headline" },
    { key: "line2", label: "Payoff", default: "60 seconds.", maxChars: 14, role: "headline" },
    { key: "status", label: "Done label", default: "live", maxChars: 10, role: "label" },
  ],
  html: `<div class="haze"></div>
<div class="floor"></div>
<div class="left">
<div class="live"><i></i><span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="h1" data-21st-slot="line1">{{line1}}</div>
<div class="h2" data-21st-slot="line2">{{line2}}</div>
<div class="log"><div class="lg lg1"><b>&#10003;</b>build<u>12.4s</u></div><div class="lg lg2"><b>&#10003;</b>tests<u>214 passed</u></div><div class="lg lg3"><b><span class="pend">&#9679;</span><span class="dn">&#10003;</span></b>deploy<u>ready</u></div></div>
</div>
<div class="ring"><div class="track"></div><div class="dial"></div><div class="arcw"><div class="arc"></div></div><div class="head"><b></b></div>
<div class="num"><div class="dg"><span class="col tens"><span class="s"><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span></span></span><span class="col ones"><span class="s"><span>0</span><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span><span>3</span><span>2</span><span>1</span><span>0</span></span></span></div><div class="sec">seconds</div></div>
<div class="done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M7 12.5 10.5 16 17 8.5"/></svg><span data-21st-slot="status">{{status}}</span></div>
</div>
<div class="scan"></div>`,
  css: `
.v-hook-countdown{color:var(--ink);font-family:var(--font-display)}
.v-hook-countdown[data-backdrop="on"]{background:var(--paper)}
.v-hook-countdown[data-backdrop="off"] .floor,.v-hook-countdown[data-backdrop="off"] .haze,.v-hook-countdown[data-backdrop="off"] .scan{display:none}
.v-hook-countdown .floor{position:absolute;left:-30%;right:-30%;bottom:-2cqw;height:34cqw;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--accent) 40%,transparent) 0 1px,transparent 1px 5cqw),repeating-linear-gradient(0deg,color-mix(in srgb,var(--accent) 40%,transparent) 0 1px,transparent 1px 5cqw);transform:perspective(40cqw) rotateX(58deg);transform-origin:50% 100%;-webkit-mask:linear-gradient(0deg,#000,transparent 85%);mask:linear-gradient(0deg,#000,transparent 85%);animation:hook-countdown-floor 6s linear infinite}
.v-hook-countdown .haze{position:absolute;left:44cqw;top:-6cqw;width:56cqw;height:66cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 16%,transparent),color-mix(in srgb,var(--secondary) 6%,transparent) 60%,transparent);animation:hook-countdown-haze 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-countdown .scan{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.035) 0 1px,transparent 1px .55cqw);pointer-events:none}
.v-hook-countdown .left{position:absolute;left:6.5cqw;top:12.5cqw;width:44cqw}
.v-hook-countdown .live{display:flex;align-items:center;gap:.8cqw;font:600 1.45cqw/1.2 var(--font-mono);color:var(--accent);letter-spacing:.04em;margin-bottom:2cqw;animation:hook-countdown-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .live i{width:.9cqw;height:.9cqw;flex:none;border-radius:50%;background:var(--accent);box-shadow:0 0 1cqw var(--accent);animation:hook-countdown-pulse 1s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-countdown .h1{font-weight:700;font-size:5.4cqw;line-height:1.08;letter-spacing:-.04em;animation:hook-countdown-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .h2{font-weight:700;font-size:5.4cqw;line-height:1.1;letter-spacing:-.04em;color:var(--accent);text-shadow:0 0 .6cqw color-mix(in srgb,var(--accent) 90%,transparent),0 0 2.4cqw color-mix(in srgb,var(--accent) 55%,transparent);animation:hook-countdown-neon 6s steps(1,end) infinite}
.v-hook-countdown .log{margin-top:3cqw;display:flex;flex-direction:column;gap:.9cqw;font:500 1.4cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-hook-countdown .lg{display:flex;gap:1.2cqw}
.v-hook-countdown .lg b{position:relative;font-weight:600;color:var(--accent);width:1.4cqw}
.v-hook-countdown .lg u{text-decoration:none;color:color-mix(in srgb,var(--ink) 38%,transparent);margin-left:auto;padding-left:3cqw}
.v-hook-countdown .lg1{animation:hook-countdown-lg1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .lg2{animation:hook-countdown-lg2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .lg3{animation:hook-countdown-lg3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .lg3 .pend{color:#FFC94D;animation:hook-countdown-pend 6s linear infinite}
.v-hook-countdown .lg3 .dn{position:absolute;left:0;top:0;animation:hook-countdown-dn 6s linear infinite}
.v-hook-countdown .ring{--u:1cqw;position:absolute;left:55cqw;top:10cqw;width:calc(36*var(--u));height:calc(36*var(--u));animation:hook-countdown-ringin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .dial{position:absolute;inset:calc(4.2*var(--u));border-radius:50%;background:repeating-conic-gradient(from -.4deg,color-mix(in srgb,var(--ink) 55%,transparent) 0 .8deg,transparent .8deg 6deg);-webkit-mask:radial-gradient(closest-side,transparent calc(100% - calc(1.4*var(--u))),#000 calc(100% - calc(1.3*var(--u))));mask:radial-gradient(closest-side,transparent calc(100% - calc(1.4*var(--u))),#000 calc(100% - calc(1.3*var(--u))));opacity:.5}
.v-hook-countdown .track{position:absolute;inset:0;border-radius:50%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - calc(1.6*var(--u))),#000 calc(100% - calc(1.5*var(--u))));mask:radial-gradient(closest-side,transparent calc(100% - calc(1.6*var(--u))),#000 calc(100% - calc(1.5*var(--u))));background:color-mix(in srgb,var(--accent) 10%,transparent)}
.v-hook-countdown .arcw{position:absolute;inset:0;filter:drop-shadow(0 0 calc(.7*var(--u)) color-mix(in srgb,var(--accent) 85%,transparent)) drop-shadow(0 0 calc(2.2*var(--u)) color-mix(in srgb,var(--secondary) 45%,transparent))}
.v-hook-countdown .arc{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,var(--secondary),var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,#F5FF4A));-webkit-mask:radial-gradient(closest-side,transparent calc(100% - calc(1.6*var(--u))),#000 calc(100% - calc(1.5*var(--u))));mask:radial-gradient(closest-side,transparent calc(100% - calc(1.6*var(--u))),#000 calc(100% - calc(1.5*var(--u))));animation:hook-countdown-arc 6s linear infinite}
.v-hook-countdown .head{position:absolute;inset:0;animation:hook-countdown-head 6s linear infinite}
.v-hook-countdown .head b{position:absolute;left:50%;top:0;width:calc(2.6*var(--u));height:calc(2.6*var(--u));margin:calc(-.55*var(--u)) 0 0 calc(-1.3*var(--u));border-radius:50%;background:var(--ink);box-shadow:0 0 calc(1*var(--u)) var(--accent),0 0 calc(3*var(--u)) var(--accent)}
.v-hook-countdown .num{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.v-hook-countdown .dg{display:flex;font-weight:600;font-size:calc(11*var(--u));line-height:1;letter-spacing:-.04em;text-shadow:0 0 calc(1.6*var(--u)) color-mix(in srgb,var(--accent) 55%,transparent);animation:hook-countdown-dg 6s linear infinite}
.v-hook-countdown .col{display:block;height:1em;overflow:hidden;width:.78em;text-align:center}
.v-hook-countdown .col .s{display:block}
.v-hook-countdown .col .s span{display:block;height:1em}
.v-hook-countdown .tens .s{animation:hook-countdown-tens 6s linear infinite}
.v-hook-countdown .ones .s{animation:hook-countdown-ones 6s linear infinite}
.v-hook-countdown .sec{font:500 calc(1.35*var(--u))/1 var(--font-mono);letter-spacing:.2em;color:color-mix(in srgb,var(--ink) 55%,transparent);margin-top:calc(1*var(--u));animation:hook-countdown-dg 6s linear infinite}
.v-hook-countdown .done{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(1*var(--u));color:var(--accent);animation:hook-countdown-done 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-countdown .done svg{width:calc(9*var(--u));height:calc(9*var(--u));filter:drop-shadow(0 0 calc(1*var(--u)) var(--accent))}
.v-hook-countdown .done span{font-weight:700;font-size:calc(3.2*var(--u));line-height:1.1;text-shadow:0 0 calc(1.2*var(--u)) color-mix(in srgb,var(--accent) 70%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-hook-countdown .left{left:7cqw;right:7cqw;width:auto;top:7cqh;text-align:center}
  .v-hook-countdown .live{justify-content:center;font-size:5.6cqw;gap:2.4cqw;margin-bottom:47cqh}
  .v-hook-countdown .live i{width:2.6cqw;height:2.6cqw}
  .v-hook-countdown .h1,.v-hook-countdown .h2{font-size:12.4cqw}
  .v-hook-countdown .log{margin:5cqh auto 0;width:74cqw;font-size:4cqw;gap:2.4cqw;text-align:left}
  .v-hook-countdown .lg{gap:3cqw}
  .v-hook-countdown .lg b{width:4cqw}
  .v-hook-countdown .ring{--u:1.94cqw;left:15cqw;top:14.5cqh}
  .v-hook-countdown .haze{left:-20cqw;top:0;width:140cqw;height:80cqh}
  .v-hook-countdown .floor{height:60cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-countdown .left{left:7cqw;right:7cqw;width:auto;top:5cqw;text-align:center}
  .v-hook-countdown .live{justify-content:center;font-size:2.8cqw;gap:1.4cqw;margin-bottom:62cqw}
  .v-hook-countdown .live i{width:1.5cqw;height:1.5cqw}
  .v-hook-countdown .h1,.v-hook-countdown .h2{display:inline;font-size:9cqw}
  .v-hook-countdown .h1::after{content:" "}
  .v-hook-countdown .log{display:none}
  .v-hook-countdown .ring{--u:1.55cqw;left:22cqw;top:11cqw}
  .v-hook-countdown .haze{left:10cqw;top:-5cqw;width:80cqw;height:80cqw}
}
@keyframes hook-countdown-floor{0%{background-position:0 0,0 0}100%{background-position:0 0,0 10cqw}}
@keyframes hook-countdown-haze{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}
@keyframes hook-countdown-pulse{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes hook-countdown-in{0%{opacity:0;transform:translateY(1cqw)}6%,88%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@keyframes hook-countdown-neon{0%,3%{opacity:0}4%{opacity:.8}5%{opacity:.15}6%{opacity:1}7%{opacity:.4}8%,88%{opacity:1}94%,100%{opacity:0}}
@keyframes hook-countdown-lg1{0%,18%{opacity:0;transform:translateX(-1cqw)}21%,88%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes hook-countdown-lg2{0%,30%{opacity:0;transform:translateX(-1cqw)}33%,88%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes hook-countdown-lg3{0%,40%{opacity:0;transform:translateX(-1cqw)}43%,88%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes hook-countdown-pend{0%,60%{opacity:1}61%,100%{opacity:0}}
@keyframes hook-countdown-dn{0%,60%{opacity:0}61%,99%{opacity:1}100%{opacity:0}}
@keyframes hook-countdown-ringin{0%{opacity:0;transform:scale(.9) rotate(-20deg)}8%,88%{opacity:1;transform:scale(1) rotate(0deg)}95%,100%{opacity:0;transform:scale(.94) rotate(0deg)}}
@keyframes hook-countdown-arc{0%,8%{clip-path:polygon(50.00% 50.00%,50.00% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}9.083%{clip-path:polygon(50.00% 50.00%,56.85% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}10.167%{clip-path:polygon(50.00% 50.00%,63.93% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}11.25%{clip-path:polygon(50.00% 50.00%,71.54% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}12.333%{clip-path:polygon(50.00% 50.00%,80.02% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}13.417%{clip-path:polygon(50.00% 50.00%,89.90% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}14.5%{clip-path:polygon(50.00% 50.00%,102.00% -2.00%,102.00% -2.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}15.583%{clip-path:polygon(50.00% 50.00%,102.00% 10.10%,102.00% 10.10%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}16.667%{clip-path:polygon(50.00% 50.00%,102.00% 19.98%,102.00% 19.98%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}17.75%{clip-path:polygon(50.00% 50.00%,102.00% 28.46%,102.00% 28.46%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}18.833%{clip-path:polygon(50.00% 50.00%,102.00% 36.07%,102.00% 36.07%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}19.917%{clip-path:polygon(50.00% 50.00%,102.00% 43.15%,102.00% 43.15%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}21%{clip-path:polygon(50.00% 50.00%,102.00% 50.00%,102.00% 50.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}22.083%{clip-path:polygon(50.00% 50.00%,102.00% 56.85%,102.00% 56.85%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}23.167%{clip-path:polygon(50.00% 50.00%,102.00% 63.93%,102.00% 63.93%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}24.25%{clip-path:polygon(50.00% 50.00%,102.00% 71.54%,102.00% 71.54%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}25.333%{clip-path:polygon(50.00% 50.00%,102.00% 80.02%,102.00% 80.02%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}26.417%{clip-path:polygon(50.00% 50.00%,102.00% 89.90%,102.00% 89.90%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}27.5%{clip-path:polygon(50.00% 50.00%,102.00% 102.00%,102.00% 102.00%,102.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}28.583%{clip-path:polygon(50.00% 50.00%,89.90% 102.00%,89.90% 102.00%,89.90% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}29.667%{clip-path:polygon(50.00% 50.00%,80.02% 102.00%,80.02% 102.00%,80.02% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}30.75%{clip-path:polygon(50.00% 50.00%,71.54% 102.00%,71.54% 102.00%,71.54% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}31.833%{clip-path:polygon(50.00% 50.00%,63.93% 102.00%,63.93% 102.00%,63.93% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}32.917%{clip-path:polygon(50.00% 50.00%,56.85% 102.00%,56.85% 102.00%,56.85% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}34%{clip-path:polygon(50.00% 50.00%,50.00% 102.00%,50.00% 102.00%,50.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}35.083%{clip-path:polygon(50.00% 50.00%,43.15% 102.00%,43.15% 102.00%,43.15% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}36.167%{clip-path:polygon(50.00% 50.00%,36.07% 102.00%,36.07% 102.00%,36.07% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}37.25%{clip-path:polygon(50.00% 50.00%,28.46% 102.00%,28.46% 102.00%,28.46% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}38.333%{clip-path:polygon(50.00% 50.00%,19.98% 102.00%,19.98% 102.00%,19.98% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}39.417%{clip-path:polygon(50.00% 50.00%,10.10% 102.00%,10.10% 102.00%,10.10% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}40.5%{clip-path:polygon(50.00% 50.00%,-2.00% 102.00%,-2.00% 102.00%,-2.00% 102.00%,-2.00% 102.00%,-2.00% -2.00%,50.00% -2.00%)}41.583%{clip-path:polygon(50.00% 50.00%,-2.00% 89.90%,-2.00% 89.90%,-2.00% 89.90%,-2.00% 89.90%,-2.00% -2.00%,50.00% -2.00%)}42.667%{clip-path:polygon(50.00% 50.00%,-2.00% 80.02%,-2.00% 80.02%,-2.00% 80.02%,-2.00% 80.02%,-2.00% -2.00%,50.00% -2.00%)}43.75%{clip-path:polygon(50.00% 50.00%,-2.00% 71.54%,-2.00% 71.54%,-2.00% 71.54%,-2.00% 71.54%,-2.00% -2.00%,50.00% -2.00%)}44.833%{clip-path:polygon(50.00% 50.00%,-2.00% 63.93%,-2.00% 63.93%,-2.00% 63.93%,-2.00% 63.93%,-2.00% -2.00%,50.00% -2.00%)}45.917%{clip-path:polygon(50.00% 50.00%,-2.00% 56.85%,-2.00% 56.85%,-2.00% 56.85%,-2.00% 56.85%,-2.00% -2.00%,50.00% -2.00%)}47%{clip-path:polygon(50.00% 50.00%,-2.00% 50.00%,-2.00% 50.00%,-2.00% 50.00%,-2.00% 50.00%,-2.00% -2.00%,50.00% -2.00%)}48.083%{clip-path:polygon(50.00% 50.00%,-2.00% 43.15%,-2.00% 43.15%,-2.00% 43.15%,-2.00% 43.15%,-2.00% -2.00%,50.00% -2.00%)}49.167%{clip-path:polygon(50.00% 50.00%,-2.00% 36.07%,-2.00% 36.07%,-2.00% 36.07%,-2.00% 36.07%,-2.00% -2.00%,50.00% -2.00%)}50.25%{clip-path:polygon(50.00% 50.00%,-2.00% 28.46%,-2.00% 28.46%,-2.00% 28.46%,-2.00% 28.46%,-2.00% -2.00%,50.00% -2.00%)}51.333%{clip-path:polygon(50.00% 50.00%,-2.00% 19.98%,-2.00% 19.98%,-2.00% 19.98%,-2.00% 19.98%,-2.00% -2.00%,50.00% -2.00%)}52.417%{clip-path:polygon(50.00% 50.00%,-2.00% 10.10%,-2.00% 10.10%,-2.00% 10.10%,-2.00% 10.10%,-2.00% -2.00%,50.00% -2.00%)}53.5%{clip-path:polygon(50.00% 50.00%,-2.00% -2.00%,-2.00% -2.00%,-2.00% -2.00%,-2.00% -2.00%,-2.00% -2.00%,50.00% -2.00%)}54.583%{clip-path:polygon(50.00% 50.00%,10.10% -2.00%,10.10% -2.00%,10.10% -2.00%,10.10% -2.00%,10.10% -2.00%,50.00% -2.00%)}55.667%{clip-path:polygon(50.00% 50.00%,19.98% -2.00%,19.98% -2.00%,19.98% -2.00%,19.98% -2.00%,19.98% -2.00%,50.00% -2.00%)}56.75%{clip-path:polygon(50.00% 50.00%,28.46% -2.00%,28.46% -2.00%,28.46% -2.00%,28.46% -2.00%,28.46% -2.00%,50.00% -2.00%)}57.833%{clip-path:polygon(50.00% 50.00%,36.07% -2.00%,36.07% -2.00%,36.07% -2.00%,36.07% -2.00%,36.07% -2.00%,50.00% -2.00%)}58.917%{clip-path:polygon(50.00% 50.00%,43.15% -2.00%,43.15% -2.00%,43.15% -2.00%,43.15% -2.00%,43.15% -2.00%,50.00% -2.00%)}60%{clip-path:polygon(50.00% 50.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%)}100%{clip-path:polygon(50.00% 50.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%,50.00% -2.00%)}}
@keyframes hook-countdown-head{0%,8%{opacity:1;transform:rotate(0deg)}60%{opacity:1;transform:rotate(360deg)}61.5%,100%{opacity:0;transform:rotate(360deg)}}
@keyframes hook-countdown-ones{0%,8%{transform:translateY(0em);animation-timing-function:steps(60,end)}60%,100%{transform:translateY(-60em)}}
@keyframes hook-countdown-tens{0%{transform:translateY(0em)}8.847%{transform:translateY(-0em)}8.867%{transform:translateY(-1em)}17.513%{transform:translateY(-1em)}17.533%{transform:translateY(-2em)}26.180%{transform:translateY(-2em)}26.2%{transform:translateY(-3em)}34.847%{transform:translateY(-3em)}34.867%{transform:translateY(-4em)}43.513%{transform:translateY(-4em)}43.533%{transform:translateY(-5em)}52.180%{transform:translateY(-5em)}52.2%{transform:translateY(-6em)}100%{transform:translateY(-6em)}}
@keyframes hook-countdown-dg{0%,60.5%{opacity:1;transform:scale(1)}62%,100%{opacity:0;transform:scale(.85)}}
@keyframes hook-countdown-done{0%,61%{opacity:0;transform:scale(.7)}63.5%{opacity:1;transform:scale(1.06)}65%,88%{opacity:1;transform:scale(1)}93%,100%{opacity:0;transform:scale(1)}}
`,
};

export const hookGlitch: SceneSpec = {
  id: "hook-glitch",
  slug: "mg-hook-glitch",
  name: "Error Glitch To Calm",
  kind: "scene",
  job: "titles",
  language: "aura",
  mechanic: "rgb-glitch-collapse-to-logo",
  energy: "punchy",
  settle: 3.8,
  colors: {ink: "#F4F4F6", accent: "#FFAA6E", secondary: "#FF4D5E", paper: "#08080B"},
  fonts: {display: "Geist", body: "Geist", mono: "Geist Mono"},
  displayRole: "fonts.heading",
  tags: ["hook", "glitch", "logo", "error"],
  fields: [
    { key: "error", label: "Error title", default: "Sync failed", maxChars: 22, role: "headline" },
    { key: "brand", label: "Brand", default: "Lumen", maxChars: 10, role: "name" },
    { key: "tagline", label: "Tagline", default: "Calm, connected work.", maxChars: 34, role: "caption" },
  ],
  html: `<div class="calm"></div>
<div class="scan"></div>
<div class="gw"><div class="card base"><div class="ttl"><svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="currentColor" fill-opacity=".16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1.1" fill="currentColor"/></svg><div><b data-21st-slot="error">{{error}}</b><code>error 409 &middot; merge conflict</code></div></div><div class="msg">14 conflicts while merging <span class="file">spec_v7_final_FINAL.docx</span></div><div class="prog"><i></i></div><div class="btns"><span>Copy logs</span><span>Retry</span></div></div><div class="card ch r"><div class="ttl"><svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="currentColor" fill-opacity=".16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1.1" fill="currentColor"/></svg><div><b>{{error}}</b><code>error 409 &middot; merge conflict</code></div></div><div class="msg">14 conflicts while merging <span class="file">spec_v7_final_FINAL.docx</span></div><div class="prog"><i></i></div><div class="btns"><span>Copy logs</span><span>Retry</span></div></div><div class="card ch c"><div class="ttl"><svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="currentColor" fill-opacity=".16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1.1" fill="currentColor"/></svg><div><b>{{error}}</b><code>error 409 &middot; merge conflict</code></div></div><div class="msg">14 conflicts while merging <span class="file">spec_v7_final_FINAL.docx</span></div><div class="prog"><i></i></div><div class="btns"><span>Copy logs</span><span>Retry</span></div></div><div class="card sl s1"><div class="ttl"><svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="currentColor" fill-opacity=".16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1.1" fill="currentColor"/></svg><div><b>{{error}}</b><code>error 409 &middot; merge conflict</code></div></div><div class="msg">14 conflicts while merging <span class="file">spec_v7_final_FINAL.docx</span></div><div class="prog"><i></i></div><div class="btns"><span>Copy logs</span><span>Retry</span></div></div><div class="card sl s2"><div class="ttl"><svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="currentColor" fill-opacity=".16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1.1" fill="currentColor"/></svg><div><b>{{error}}</b><code>error 409 &middot; merge conflict</code></div></div><div class="msg">14 conflicts while merging <span class="file">spec_v7_final_FINAL.docx</span></div><div class="prog"><i></i></div><div class="btns"><span>Copy logs</span><span>Retry</span></div></div><div class="card sl s3"><div class="ttl"><svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="currentColor" fill-opacity=".16" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 9.5v5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="17.4" r="1.1" fill="currentColor"/></svg><div><b>{{error}}</b><code>error 409 &middot; merge conflict</code></div></div><div class="msg">14 conflicts while merging <span class="file">spec_v7_final_FINAL.docx</span></div><div class="prog"><i></i></div><div class="btns"><span>Copy logs</span><span>Retry</span></div></div></div>
<div class="flash"></div>
<div class="mark"><div class="orb"></div><div class="wm"><span class="main" data-21st-slot="brand">{{brand}}</span><span class="fr r">{{brand}}</span><span class="fr c">{{brand}}</span></div><div class="tag" data-21st-slot="tagline">{{tagline}}</div></div>
<div class="band"></div>
<div class="noise"></div>`,
  css: `
.v-hook-glitch{--u:1cqw;color:var(--ink);font-family:var(--font-body)}
.v-hook-glitch[data-backdrop="on"]{background:var(--paper)}
.v-hook-glitch[data-backdrop="off"] .calm,.v-hook-glitch[data-backdrop="off"] .noise,.v-hook-glitch[data-backdrop="off"] .scan,.v-hook-glitch[data-backdrop="off"] .band{display:none}
.v-hook-glitch .calm{position:absolute;inset:0;background:radial-gradient(70% 70% at 50% 108%,color-mix(in srgb,var(--accent) 90%,#fff) 0%,color-mix(in srgb,var(--accent) 50%,var(--secondary)) 22%,color-mix(in srgb,var(--secondary) 40%,#303235) 48%,transparent 75%),linear-gradient(180deg,color-mix(in srgb,var(--paper) 80%,#2A2B2E),color-mix(in srgb,var(--paper) 70%,#323336) 60%,color-mix(in srgb,var(--paper) 60%,#35363A));opacity:0;animation:hook-glitch-calm 6s cubic-bezier(.45,0,.55,1) infinite}
.v-hook-glitch .noise{position:absolute;inset:-10%;background-image:${GRAIN};background-size:26cqw;opacity:.22;mix-blend-mode:overlay;pointer-events:none;animation:hook-glitch-noise 6s steps(1,end) infinite}
.v-hook-glitch .scan{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.04) 0 1px,transparent 1px .55cqw);animation:hook-glitch-scanop 6s linear infinite}
.v-hook-glitch .band{position:absolute;left:0;right:0;top:0;height:6cqw;background:linear-gradient(180deg,transparent,rgba(255,255,255,.08),transparent);animation:hook-glitch-band 6s linear infinite}
.v-hook-glitch .gw{position:absolute;left:50%;top:50%;width:calc(46*var(--u));height:calc(22.6*var(--u));margin:calc(-11.3*var(--u)) 0 0 calc(-23*var(--u));animation:hook-glitch-gw 6s linear infinite}
.v-hook-glitch .card{position:absolute;inset:0;border-radius:calc(1.6*var(--u));background:#121316;box-shadow:0 0 0 1px color-mix(in srgb,var(--secondary) 35%,transparent),0 0 calc(5*var(--u)) color-mix(in srgb,var(--secondary) 16%,transparent),0 calc(2*var(--u)) calc(4*var(--u)) rgba(0,0,0,.6);padding:calc(2.4*var(--u));display:flex;flex-direction:column;gap:calc(1.3*var(--u))}
.v-hook-glitch .ttl{display:flex;align-items:center;gap:calc(1.2*var(--u));color:var(--secondary)}
.v-hook-glitch .ttl svg{width:calc(3.4*var(--u));height:calc(3.4*var(--u));flex:none}
.v-hook-glitch .ttl b{display:block;font-size:calc(2.9*var(--u));line-height:1.1;font-weight:650;letter-spacing:-.03em;color:var(--ink);font-family:var(--font-display)}
.v-hook-glitch .ttl code{display:block;font:500 calc(1.2*var(--u))/1 var(--font-mono);color:color-mix(in srgb,var(--secondary) 80%,#fff);margin-top:calc(.5*var(--u))}
.v-hook-glitch .msg{font-size:calc(1.45*var(--u));line-height:1.4;color:#A9A9B4}
.v-hook-glitch .file{display:inline-block;font:500 calc(1.25*var(--u))/1 var(--font-mono);color:var(--ink);background:color-mix(in srgb,var(--secondary) 12%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--secondary) 35%,transparent);padding:calc(.45*var(--u)) calc(.7*var(--u));border-radius:calc(.5*var(--u))}
.v-hook-glitch .prog{height:calc(.8*var(--u));border-radius:calc(.4*var(--u));background:rgba(255,255,255,.06);overflow:hidden}
.v-hook-glitch .prog i{display:block;height:100%;width:63%;background:repeating-linear-gradient(-45deg,var(--secondary) 0 calc(.7*var(--u)),color-mix(in srgb,var(--secondary) 70%,#000) calc(.7*var(--u)) calc(1.4*var(--u)))}
.v-hook-glitch .btns{display:flex;gap:calc(.9*var(--u));justify-content:flex-end;margin-top:auto}
.v-hook-glitch .btns span{font-size:calc(1.3*var(--u));font-weight:600;padding:calc(.8*var(--u)) calc(1.4*var(--u));border-radius:calc(.8*var(--u));box-shadow:inset 0 0 0 1px rgba(255,255,255,.14);color:#D3D5D9}
.v-hook-glitch .btns span:last-child{background:var(--secondary);color:#fff;box-shadow:none}
.v-hook-glitch .ch{mix-blend-mode:screen;opacity:0}
.v-hook-glitch .ch.r{filter:sepia(1) saturate(9) hue-rotate(-45deg) brightness(.9);animation:hook-glitch-r 6s steps(1,end) infinite}
.v-hook-glitch .ch.c{filter:sepia(1) saturate(9) hue-rotate(150deg) brightness(.9);animation:hook-glitch-c 6s steps(1,end) infinite}
.v-hook-glitch .sl{opacity:0}
.v-hook-glitch .s1{animation:hook-glitch-s1 6s steps(1,end) infinite}
.v-hook-glitch .s2{animation:hook-glitch-s2 6s steps(1,end) infinite}
.v-hook-glitch .s3{animation:hook-glitch-s3 6s steps(1,end) infinite}
.v-hook-glitch .base{animation:hook-glitch-base 6s steps(1,end) infinite}
.v-hook-glitch .flash{position:absolute;left:0;right:0;top:50%;height:.4cqw;margin-top:-.2cqw;background:#fff;box-shadow:0 0 2cqw #fff,0 0 6cqw color-mix(in srgb,var(--accent) 90%,transparent);opacity:0;animation:hook-glitch-flash 6s linear infinite}
.v-hook-glitch .mark{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.v-hook-glitch .orb{width:9cqw;height:9cqw;flex:none;border-radius:50%;background:radial-gradient(circle at 50% 30%,#FFFDF6 0%,color-mix(in srgb,var(--accent) 40%,#fff) 28%,var(--accent) 58%,color-mix(in srgb,var(--accent) 50%,var(--secondary)) 100%);box-shadow:0 0 4cqw color-mix(in srgb,var(--accent) 75%,transparent),0 0 12cqw color-mix(in srgb,var(--accent) 45%,transparent);animation:hook-glitch-orb 6s linear infinite}
.v-hook-glitch .wm{position:relative;margin-top:2.6cqw;font:600 7.6cqw/1.1 var(--font-display);letter-spacing:-.055em}
.v-hook-glitch .wm span{display:block}
.v-hook-glitch .wm .main{animation:hook-glitch-wm 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hook-glitch .wm .fr{position:absolute;left:0;top:0;width:100%;mix-blend-mode:screen}
.v-hook-glitch .wm .fr.r{color:var(--secondary);animation:hook-glitch-fr 6s linear infinite}
.v-hook-glitch .wm .fr.c{color:#2EE6FF;animation:hook-glitch-fc 6s linear infinite}
.v-hook-glitch .tag{margin-top:1.8cqw;font-size:2.1cqw;line-height:1.25;color:color-mix(in srgb,var(--ink) 74%,transparent);letter-spacing:-.01em;animation:hook-glitch-tag 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-hook-glitch > *{--u:1.9cqw}
  .v-hook-glitch .mark{justify-content:space-between;padding:9cqh 8cqw 9cqh}
  .v-hook-glitch .wm{order:-1;margin:0;font-size:15cqw}
  .v-hook-glitch .orb{width:46cqw;height:46cqw}
  .v-hook-glitch .tag{margin:0;font-size:7cqw}
  .v-hook-glitch .flash{height:.8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hook-glitch > *{--u:1.7cqw}
  .v-hook-glitch .orb{width:18cqw;height:18cqw}
  .v-hook-glitch .wm{margin-top:4cqw;font-size:13cqw}
  .v-hook-glitch .tag{margin-top:3cqw;font-size:3.8cqw}
}
@keyframes hook-glitch-calm{0%,34%{opacity:0;transform:scale(1.1)}48%{opacity:1;transform:scale(1)}86%{opacity:1;transform:scale(1.03)}95%,100%{opacity:0;transform:scale(1.1)}}
@keyframes hook-glitch-scanop{0%,33%{opacity:1}42%,88%{opacity:.25}100%{opacity:1}}
@keyframes hook-glitch-band{0%,4.9%{opacity:0;transform:translateY(-6cqw)}5%{opacity:1;transform:translateY(-6cqw)}9%{opacity:1;transform:translateY(58cqw)}9.1%{opacity:0;transform:translateY(-6cqw)}25%{opacity:1;transform:translateY(-6cqw)}29%{opacity:1;transform:translateY(58cqw)}29.1%{opacity:1;transform:translateY(-6cqw)}33%{opacity:1;transform:translateY(58cqw)}33.1%,100%{opacity:0;transform:translateY(-6cqw)}}
@keyframes hook-glitch-r{0%{opacity:0;transform:translate(0,0)}5%{opacity:.9;transform:translate(0.32cqw,0.11cqw)}5.6%{opacity:.9;transform:translate(0.54cqw,-0.01cqw)}6.3%{opacity:.9;transform:translate(0.34cqw,0.18cqw)}7%{opacity:.9;transform:translate(0.63cqw,0.01cqw)}7.8%{opacity:.9;transform:translate(0.48cqw,-0.16cqw)}8.5%{opacity:0;transform:translate(0,0)}15%{opacity:.9;transform:translate(0.40cqw,-0.08cqw)}15.5%{opacity:.9;transform:translate(0.87cqw,-0.26cqw)}16.2%{opacity:.9;transform:translate(1.04cqw,-0.16cqw)}16.8%{opacity:.9;transform:translate(0.59cqw,-0.27cqw)}17.5%{opacity:.9;transform:translate(1.20cqw,0.14cqw)}18.2%{opacity:.9;transform:translate(1.10cqw,0.07cqw)}19%{opacity:0;transform:translate(0,0)}25%{opacity:.9;transform:translate(0.68cqw,-0.10cqw)}25.5%{opacity:.9;transform:translate(1.28cqw,-0.23cqw)}26%{opacity:.9;transform:translate(1.86cqw,-0.08cqw)}26.6%{opacity:.9;transform:translate(0.84cqw,0.19cqw)}27.2%{opacity:.9;transform:translate(0.80cqw,0.26cqw)}27.8%{opacity:.9;transform:translate(1.22cqw,0.03cqw)}28.4%{opacity:.9;transform:translate(1.08cqw,-0.01cqw)}29%{opacity:.9;transform:translate(0.88cqw,-0.28cqw)}29.7%{opacity:.9;transform:translate(1.75cqw,-0.16cqw)}30.4%{opacity:.9;transform:translate(1.64cqw,-0.17cqw)}31.1%{opacity:.9;transform:translate(1.88cqw,0.24cqw)}31.8%{opacity:.9;transform:translate(1.61cqw,0.16cqw)}32.5%{opacity:.9;transform:translate(1.38cqw,0.14cqw)}33.2%{opacity:0;transform:translate(0,0)}100%{opacity:0;transform:translate(0,0)}}
@keyframes hook-glitch-c{0%{opacity:0;transform:translate(0,0)}5%{opacity:.9;transform:translate(-0.30cqw,-0.01cqw)}5.6%{opacity:.9;transform:translate(-0.64cqw,-0.18cqw)}6.3%{opacity:.9;transform:translate(-0.68cqw,0.23cqw)}7%{opacity:.9;transform:translate(-0.44cqw,-0.08cqw)}7.8%{opacity:.9;transform:translate(-0.46cqw,-0.07cqw)}8.5%{opacity:0;transform:translate(0,0)}15%{opacity:.9;transform:translate(-1.20cqw,-0.07cqw)}15.5%{opacity:.9;transform:translate(-0.42cqw,-0.24cqw)}16.2%{opacity:.9;transform:translate(-0.97cqw,0.30cqw)}16.8%{opacity:.9;transform:translate(-0.80cqw,-0.01cqw)}17.5%{opacity:.9;transform:translate(-0.84cqw,0.15cqw)}18.2%{opacity:.9;transform:translate(-0.58cqw,0.07cqw)}19%{opacity:0;transform:translate(0,0)}25%{opacity:.9;transform:translate(-1.35cqw,0.07cqw)}25.5%{opacity:.9;transform:translate(-0.87cqw,-0.20cqw)}26%{opacity:.9;transform:translate(-1.09cqw,0.26cqw)}26.6%{opacity:.9;transform:translate(-1.08cqw,0.06cqw)}27.2%{opacity:.9;transform:translate(-1.03cqw,-0.24cqw)}27.8%{opacity:.9;transform:translate(-0.72cqw,0.19cqw)}28.4%{opacity:.9;transform:translate(-1.63cqw,-0.08cqw)}29%{opacity:.9;transform:translate(-1.51cqw,0.11cqw)}29.7%{opacity:.9;transform:translate(-1.79cqw,0.27cqw)}30.4%{opacity:.9;transform:translate(-1.16cqw,0.29cqw)}31.1%{opacity:.9;transform:translate(-1.87cqw,0.05cqw)}31.8%{opacity:.9;transform:translate(-1.77cqw,-0.01cqw)}32.5%{opacity:.9;transform:translate(-1.12cqw,-0.15cqw)}33.2%{opacity:0;transform:translate(0,0)}100%{opacity:0;transform:translate(0,0)}}
@keyframes hook-glitch-s1{0%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}5%{opacity:1;clip-path:inset(70.1% 0 22.8% 0);transform:translateX(-1.39cqw)}5.6%{opacity:1;clip-path:inset(32.6% 0 52.8% 0);transform:translateX(-2.11cqw)}6.3%{opacity:1;clip-path:inset(4.2% 0 87.5% 0);transform:translateX(0.66cqw)}7%{opacity:1;clip-path:inset(19.9% 0 70.0% 0);transform:translateX(1.76cqw)}7.8%{opacity:1;clip-path:inset(11.7% 0 81.3% 0);transform:translateX(0.69cqw)}8.5%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}15%{opacity:1;clip-path:inset(11.2% 0 75.4% 0);transform:translateX(1.08cqw)}15.5%{opacity:1;clip-path:inset(17.0% 0 67.1% 0);transform:translateX(-3.64cqw)}16.2%{opacity:1;clip-path:inset(48.1% 0 41.4% 0);transform:translateX(1.92cqw)}16.8%{opacity:1;clip-path:inset(42.7% 0 48.7% 0);transform:translateX(-2.15cqw)}17.5%{opacity:1;clip-path:inset(10.1% 0 75.6% 0);transform:translateX(2.78cqw)}18.2%{opacity:1;clip-path:inset(51.5% 0 32.4% 0);transform:translateX(1.77cqw)}19%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}25%{opacity:1;clip-path:inset(32.4% 0 50.1% 0);transform:translateX(-2.24cqw)}25.5%{opacity:1;clip-path:inset(7.6% 0 86.2% 0);transform:translateX(-4.68cqw)}26%{opacity:1;clip-path:inset(62.9% 0 31.2% 0);transform:translateX(-4.75cqw)}26.6%{opacity:1;clip-path:inset(10.1% 0 77.9% 0);transform:translateX(3.50cqw)}27.2%{opacity:1;clip-path:inset(71.0% 0 15.9% 0);transform:translateX(-2.48cqw)}27.8%{opacity:1;clip-path:inset(30.2% 0 55.5% 0);transform:translateX(-4.50cqw)}28.4%{opacity:1;clip-path:inset(40.4% 0 44.9% 0);transform:translateX(-5.40cqw)}29%{opacity:1;clip-path:inset(0.6% 0 88.3% 0);transform:translateX(-3.51cqw)}29.7%{opacity:1;clip-path:inset(45.4% 0 38.5% 0);transform:translateX(-2.81cqw)}30.4%{opacity:1;clip-path:inset(55.7% 0 35.2% 0);transform:translateX(-2.77cqw)}31.1%{opacity:1;clip-path:inset(12.5% 0 73.1% 0);transform:translateX(5.52cqw)}31.8%{opacity:1;clip-path:inset(64.2% 0 24.4% 0);transform:translateX(-4.22cqw)}32.5%{opacity:1;clip-path:inset(4.8% 0 82.5% 0);transform:translateX(6.24cqw)}33.2%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}100%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}}
@keyframes hook-glitch-s2{0%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}5%{opacity:1;clip-path:inset(24.8% 0 61.1% 0);transform:translateX(-0.71cqw)}5.6%{opacity:1;clip-path:inset(65.2% 0 17.1% 0);transform:translateX(0.72cqw)}6.3%{opacity:1;clip-path:inset(52.6% 0 36.9% 0);transform:translateX(-1.77cqw)}7%{opacity:1;clip-path:inset(50.1% 0 34.4% 0);transform:translateX(1.51cqw)}7.8%{opacity:1;clip-path:inset(75.8% 0 10.4% 0);transform:translateX(1.45cqw)}8.5%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}15%{opacity:1;clip-path:inset(41.0% 0 42.6% 0);transform:translateX(-1.68cqw)}15.5%{opacity:1;clip-path:inset(3.9% 0 85.5% 0);transform:translateX(-1.83cqw)}16.2%{opacity:1;clip-path:inset(47.2% 0 42.6% 0);transform:translateX(2.37cqw)}16.8%{opacity:1;clip-path:inset(18.9% 0 71.1% 0);transform:translateX(1.68cqw)}17.5%{opacity:1;clip-path:inset(73.2% 0 13.3% 0);transform:translateX(-2.44cqw)}18.2%{opacity:1;clip-path:inset(39.4% 0 46.3% 0);transform:translateX(-3.34cqw)}19%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}25%{opacity:1;clip-path:inset(50.1% 0 35.0% 0);transform:translateX(2.78cqw)}25.5%{opacity:1;clip-path:inset(73.3% 0 16.6% 0);transform:translateX(5.56cqw)}26%{opacity:1;clip-path:inset(77.1% 0 5.0% 0);transform:translateX(-2.38cqw)}26.6%{opacity:1;clip-path:inset(16.2% 0 67.5% 0);transform:translateX(-2.04cqw)}27.2%{opacity:1;clip-path:inset(14.0% 0 74.2% 0);transform:translateX(5.16cqw)}27.8%{opacity:1;clip-path:inset(37.0% 0 56.6% 0);transform:translateX(-4.98cqw)}28.4%{opacity:1;clip-path:inset(16.5% 0 74.2% 0);transform:translateX(-2.85cqw)}29%{opacity:1;clip-path:inset(76.1% 0 14.7% 0);transform:translateX(6.14cqw)}29.7%{opacity:1;clip-path:inset(77.4% 0 5.9% 0);transform:translateX(-2.74cqw)}30.4%{opacity:1;clip-path:inset(55.1% 0 30.6% 0);transform:translateX(-6.12cqw)}31.1%{opacity:1;clip-path:inset(37.4% 0 52.0% 0);transform:translateX(4.81cqw)}31.8%{opacity:1;clip-path:inset(53.4% 0 33.5% 0);transform:translateX(-2.50cqw)}32.5%{opacity:1;clip-path:inset(76.9% 0 17.7% 0);transform:translateX(1.69cqw)}33.2%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}100%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}}
@keyframes hook-glitch-s3{0%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}5%{opacity:1;clip-path:inset(40.1% 0 54.4% 0);transform:translateX(1.86cqw)}5.6%{opacity:1;clip-path:inset(19.2% 0 75.7% 0);transform:translateX(-0.77cqw)}6.3%{opacity:1;clip-path:inset(24.7% 0 64.4% 0);transform:translateX(-1.27cqw)}7%{opacity:1;clip-path:inset(10.8% 0 73.9% 0);transform:translateX(1.55cqw)}7.8%{opacity:1;clip-path:inset(3.9% 0 88.6% 0);transform:translateX(2.19cqw)}8.5%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}15%{opacity:1;clip-path:inset(19.5% 0 68.0% 0);transform:translateX(3.65cqw)}15.5%{opacity:1;clip-path:inset(1.4% 0 86.0% 0);transform:translateX(-2.31cqw)}16.2%{opacity:1;clip-path:inset(66.6% 0 15.5% 0);transform:translateX(-1.46cqw)}16.8%{opacity:1;clip-path:inset(39.8% 0 48.4% 0);transform:translateX(2.41cqw)}17.5%{opacity:1;clip-path:inset(64.0% 0 26.6% 0);transform:translateX(1.46cqw)}18.2%{opacity:1;clip-path:inset(23.0% 0 63.6% 0);transform:translateX(-3.67cqw)}19%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}25%{opacity:1;clip-path:inset(5.7% 0 88.4% 0);transform:translateX(-4.85cqw)}25.5%{opacity:1;clip-path:inset(15.2% 0 76.3% 0);transform:translateX(-2.38cqw)}26%{opacity:1;clip-path:inset(46.8% 0 44.6% 0);transform:translateX(2.36cqw)}26.6%{opacity:1;clip-path:inset(8.3% 0 74.6% 0);transform:translateX(3.56cqw)}27.2%{opacity:1;clip-path:inset(55.3% 0 30.3% 0);transform:translateX(1.98cqw)}27.8%{opacity:1;clip-path:inset(66.2% 0 26.0% 0);transform:translateX(-5.09cqw)}28.4%{opacity:1;clip-path:inset(48.5% 0 38.2% 0);transform:translateX(-1.70cqw)}29%{opacity:1;clip-path:inset(29.5% 0 59.3% 0);transform:translateX(5.47cqw)}29.7%{opacity:1;clip-path:inset(72.5% 0 13.7% 0);transform:translateX(-4.87cqw)}30.4%{opacity:1;clip-path:inset(51.8% 0 35.2% 0);transform:translateX(-6.26cqw)}31.1%{opacity:1;clip-path:inset(31.2% 0 51.5% 0);transform:translateX(1.65cqw)}31.8%{opacity:1;clip-path:inset(28.2% 0 58.9% 0);transform:translateX(-5.23cqw)}32.5%{opacity:1;clip-path:inset(51.7% 0 41.2% 0);transform:translateX(2.59cqw)}33.2%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}100%{opacity:0;clip-path:inset(40% 0 40% 0);transform:translateX(0)}}
@keyframes hook-glitch-base{0%{transform:translate(0,0) skewX(0deg)}5%{transform:translate(0.36cqw,0) skewX(0.3deg)}5.6%{transform:translate(0.20cqw,0) skewX(1.2deg)}6.3%{transform:translate(0.28cqw,0) skewX(-0.7deg)}7%{transform:translate(-0.30cqw,0) skewX(-0.5deg)}7.8%{transform:translate(-0.23cqw,0) skewX(0.2deg)}8.5%{transform:translate(0,0) skewX(0deg)}15%{transform:translate(0.38cqw,0) skewX(-1.1deg)}15.5%{transform:translate(-0.44cqw,0) skewX(-3.8deg)}16.2%{transform:translate(-0.09cqw,0) skewX(0.6deg)}16.8%{transform:translate(-0.57cqw,0) skewX(1.3deg)}17.5%{transform:translate(-0.35cqw,0) skewX(-3.1deg)}18.2%{transform:translate(0.51cqw,0) skewX(0.2deg)}19%{transform:translate(0,0) skewX(0deg)}25%{transform:translate(0.76cqw,0) skewX(0.2deg)}25.5%{transform:translate(-0.72cqw,0) skewX(-3.3deg)}26%{transform:translate(-0.15cqw,0) skewX(1.8deg)}26.6%{transform:translate(0.52cqw,0) skewX(3.2deg)}27.2%{transform:translate(0.29cqw,0) skewX(-3.2deg)}27.8%{transform:translate(-0.13cqw,0) skewX(-1.6deg)}28.4%{transform:translate(-0.02cqw,0) skewX(-3.0deg)}29%{transform:translate(0.07cqw,0) skewX(-0.5deg)}29.7%{transform:translate(-0.89cqw,0) skewX(4.1deg)}30.4%{transform:translate(0.17cqw,0) skewX(3.9deg)}31.1%{transform:translate(0.45cqw,0) skewX(3.0deg)}31.8%{transform:translate(0.95cqw,0) skewX(-1.6deg)}32.5%{transform:translate(-0.20cqw,0) skewX(-6.4deg)}33.2%{transform:translate(0,0) skewX(0deg)}100%{transform:translate(0,0) skewX(0deg)}}
@keyframes hook-glitch-noise{0%{opacity:.22;transform:translate(0,0)}5%{opacity:.6;transform:translate(1.3cqw,0.7cqw)}5.6%{opacity:.6;transform:translate(0.6cqw,4.0cqw)}6.3%{opacity:.6;transform:translate(-2.4cqw,-2.2cqw)}7%{opacity:.6;transform:translate(1.9cqw,2.5cqw)}7.8%{opacity:.6;transform:translate(-0.1cqw,-3.6cqw)}8.5%{opacity:.22;transform:translate(0,0)}15%{opacity:.6;transform:translate(-1.0cqw,2.6cqw)}15.5%{opacity:.6;transform:translate(-0.0cqw,-0.3cqw)}16.2%{opacity:.6;transform:translate(-0.9cqw,1.0cqw)}16.8%{opacity:.6;transform:translate(0.8cqw,1.5cqw)}17.5%{opacity:.6;transform:translate(2.9cqw,2.0cqw)}18.2%{opacity:.6;transform:translate(-1.0cqw,-2.0cqw)}19%{opacity:.22;transform:translate(0,0)}25%{opacity:.6;transform:translate(2.3cqw,2.3cqw)}25.5%{opacity:.6;transform:translate(3.4cqw,-2.4cqw)}26%{opacity:.6;transform:translate(2.8cqw,3.1cqw)}26.6%{opacity:.6;transform:translate(-3.4cqw,-1.5cqw)}27.2%{opacity:.6;transform:translate(1.1cqw,-2.8cqw)}27.8%{opacity:.6;transform:translate(2.6cqw,-1.9cqw)}28.4%{opacity:.6;transform:translate(1.5cqw,-1.6cqw)}29%{opacity:.6;transform:translate(-2.3cqw,-2.3cqw)}29.7%{opacity:.6;transform:translate(-0.0cqw,1.7cqw)}30.4%{opacity:.6;transform:translate(-2.3cqw,1.5cqw)}31.1%{opacity:.6;transform:translate(-1.3cqw,1.2cqw)}31.8%{opacity:.6;transform:translate(-1.1cqw,-2.5cqw)}32.5%{opacity:.6;transform:translate(-2.9cqw,-3.5cqw)}33.2%{opacity:.22;transform:translate(0,0)}100%{opacity:.22;transform:translate(0,0)}}
@keyframes hook-glitch-gw{0%,33.2%{opacity:1;transform:scale(1,1);filter:brightness(1)}35%{opacity:1;transform:scale(1.12,.035);filter:brightness(3)}37%{opacity:0;transform:scale(0,.035);filter:brightness(3)}94%{opacity:0;transform:scale(1,1);filter:brightness(1)}100%{opacity:1;transform:scale(1,1);filter:brightness(1)}}
@keyframes hook-glitch-flash{0%,34%{opacity:0;transform:scaleX(.2)}35.5%{opacity:1;transform:scaleX(1)}38.5%{opacity:0;transform:scaleX(.05)}100%{opacity:0;transform:scaleX(.05)}}
@keyframes hook-glitch-orb{0%,36.5%{opacity:0;transform:scale(0)}41%{opacity:1;transform:scale(1.12);animation-timing-function:cubic-bezier(.45,0,.55,1)}44%,86%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(.9)}}
@keyframes hook-glitch-wm{0%,38%{opacity:0;transform:translateY(.25em);filter:blur(.6cqw)}45%,86%{opacity:1;transform:translateY(0);filter:blur(0)}92%,100%{opacity:0;transform:translateY(0);filter:blur(.6cqw)}}
@keyframes hook-glitch-fr{0%,38%{opacity:0;transform:translate(1.4cqw,0)}41%{opacity:.85;transform:translate(1.1cqw,0)}47%{opacity:.5;transform:translate(.5cqw,0)}56%,100%{opacity:0;transform:translate(0,0)}}
@keyframes hook-glitch-fc{0%,38%{opacity:0;transform:translate(-1.4cqw,0)}41%{opacity:.85;transform:translate(-1.1cqw,0)}47%{opacity:.5;transform:translate(-.5cqw,0)}56%,100%{opacity:0;transform:translate(0,0)}}
@keyframes hook-glitch-tag{0%,44%{opacity:0;transform:translateY(.8cqw)}50%,86%{opacity:1;transform:translateY(0)}91%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const HOOK_SCENES: SceneSpec[] = [hookQuestion, hookStrike, hookStatShock, hookChaosOrder, hookWhatIf, hookCountdown, hookGlitch];
