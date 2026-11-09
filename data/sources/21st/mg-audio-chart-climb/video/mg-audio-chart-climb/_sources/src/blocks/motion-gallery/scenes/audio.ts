// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const audioAudiogram: SceneSpec = {
  id: "audio-audiogram",
  slug: "mg-audio-audiogram",
  name: "Podcast Audiogram",
  kind: "scene",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "audiogram-wave-captions",
  energy: "default",
  settle: 4.4,
  colors: { ink: "#F5EFE6", accent: "#FF7A45", secondary: "#22B8A4", paper: "#0C2629" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["podcast", "audiogram", "waveform", "captions"],
  fields: [
    { key: "show", label: "Show name", default: "Slow Signal", maxChars: 22, role: "label" },
    { key: "title", label: "Episode title", default: "Rooms that remember", maxChars: 34, role: "headline" },
    { key: "guest", label: "Guest line", default: "with Ines Calder, sound artist", maxChars: 40, role: "caption" },
    { key: "quote", label: "Spoken line", default: "Every room keeps a little of the sound we leave in it.", maxChars: 64, role: "body" },
  ],
  html: `<div class="glow"></div>
<div class="top"><svg class="mark" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 12.5c1.3 0 1.6-3.5 3.2-3.5s1.9 6 3.3 6 1.7-6 3.3-6 1.9 3.5 3.2 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="show" data-21st-slot="show">{{show}}</span><span class="ep">ep. 48</span></div>
<div class="cover"><div class="art"></div><div class="cs">a tidewell podcast</div><svg class="cm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 12.5c1.3 0 1.6-3.5 3.2-3.5s1.9 6 3.3 6 1.7-6 3.3-6 1.9 3.5 3.2 3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="cn">48</div><div class="edge"></div></div>
<div class="info">
<div class="title" data-21st-slot="title">{{title}}</div>
<div class="sub" data-21st-slot="guest">{{guest}}</div>
<div class="waves"><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="wave on"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
<div class="time"><span>12:04</span><span class="bar"><span class="fill"></span></span><span>-31:40</span></div>
<div class="cap" data-21st-slot="quote">{{quote|words}}</div>
</div>
<div class="grain"></div>`,
  css: `
.v-audio-audiogram{color:var(--ink);font-family:var(--font-body)}
.v-audio-audiogram[data-backdrop="on"]{background:radial-gradient(130% 90% at 30% 30%,color-mix(in srgb,var(--secondary) 22%,var(--paper)) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper) 80%,#000) 100%)}
.v-audio-audiogram .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:24cqw;opacity:.2;mix-blend-mode:overlay;pointer-events:none}
.v-audio-audiogram[data-backdrop="off"] .grain,.v-audio-audiogram[data-backdrop="off"] .glow{display:none}
.v-audio-audiogram .glow{position:absolute;left:2cqw;top:6cqh;width:44cqw;height:88cqh;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 45%,transparent),color-mix(in srgb,var(--accent) 14%,transparent) 55%,transparent);filter:blur(2cqw);animation:audio-audiogram-glow 1.5s ease-in-out infinite}
.v-audio-audiogram .top{position:absolute;left:8cqw;right:8cqw;top:7cqh;display:flex;align-items:center;gap:1cqw;font-weight:600;font-size:1.7cqw;line-height:1.2;letter-spacing:-.01em;animation:audio-audiogram-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .mark{width:2.6cqw;height:2.6cqw;color:var(--accent);flex:none}
.v-audio-audiogram .ep{margin-left:auto;font:500 1.15cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 72%,transparent);padding:.5cqw 1.1cqw;border:1px solid color-mix(in srgb,var(--ink) 25%,transparent);border-radius:5cqw}
.v-audio-audiogram .cover{position:absolute;left:8cqw;top:20cqh;width:36cqw;height:36cqw;border-radius:1.8cqw;overflow:hidden;box-shadow:0 2.6cqw 5cqw -1.6cqw rgba(0,0,0,.6),0 .6cqw 1.2cqw rgba(0,0,0,.25);animation:audio-audiogram-cover 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .art{position:absolute;inset:-6%;background:repeating-radial-gradient(circle at 68% 30%,rgba(255,255,255,.16) 0 .2cqw,rgba(255,255,255,0) .2cqw 1.8cqw),radial-gradient(circle at 68% 30%,#ffe9c4 0,color-mix(in srgb,var(--accent) 60%,#ffe2a8) 8%,var(--accent) 24%,color-mix(in srgb,var(--accent) 0%,transparent) 50%),radial-gradient(circle at 12% 96%,var(--secondary) 0,color-mix(in srgb,var(--secondary) 35%,transparent) 28%,transparent 56%),linear-gradient(155deg,var(--accent) 0%,color-mix(in srgb,var(--accent) 50%,#5a1440) 50%,color-mix(in srgb,var(--paper) 50%,#1a0b2a) 100%);animation:audio-audiogram-art 6s ease-in-out infinite}
.v-audio-audiogram .edge{position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)}
.v-audio-audiogram .cs{position:absolute;left:2.4cqw;top:2.4cqw;font:500 1.1cqw/1 var(--font-mono);color:rgba(255,246,234,.88)}
.v-audio-audiogram .cn{position:absolute;right:2.2cqw;top:1.6cqw;font:700 3.6cqw/1 var(--font-display);letter-spacing:-.04em;color:#fff6ea}
.v-audio-audiogram .cm{position:absolute;left:2.4cqw;bottom:2.4cqw;width:9cqw;height:9cqw;color:#fff6ea;opacity:.92}
.v-audio-audiogram .info{position:absolute;left:50cqw;right:8cqw;top:20cqh;height:64cqh;display:flex;flex-direction:column;justify-content:center}
.v-audio-audiogram .title{font:700 3.9cqw/1.28 var(--font-display);letter-spacing:-.03em;animation:audio-audiogram-t1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .sub{margin-top:.8cqh;font-weight:500;font-size:1.6cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 62%,transparent);animation:audio-audiogram-t2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .waves{position:relative;margin-top:5cqh;height:14cqh}
.v-audio-audiogram .wave{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;animation:audio-audiogram-wave 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .wave.on{animation:audio-audiogram-wave 6s cubic-bezier(.2,.8,.2,1) infinite,audio-audiogram-prog 6s linear infinite}
.v-audio-audiogram .wave i{display:block;width:.62cqw;height:calc(var(--h,6) * 7%);border-radius:1cqw;background:color-mix(in srgb,var(--ink) 26%,transparent);animation:audio-audiogram-b1 1.2s ease-in-out infinite}
.v-audio-audiogram .wave.on i{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 45%,#ffe2a8),var(--accent))}
.v-audio-audiogram .wave i:nth-child(3n+2){animation-name:audio-audiogram-b2;animation-duration:.75s}
.v-audio-audiogram .wave i:nth-child(3n){animation-name:audio-audiogram-b3;animation-duration:1s}
.v-audio-audiogram .wave i:nth-child(7n+1){--h:6}
.v-audio-audiogram .wave i:nth-child(7n+2){--h:11}
.v-audio-audiogram .wave i:nth-child(7n+3){--h:8}
.v-audio-audiogram .wave i:nth-child(7n+4){--h:14}
.v-audio-audiogram .wave i:nth-child(7n+5){--h:5}
.v-audio-audiogram .wave i:nth-child(7n+6){--h:12}
.v-audio-audiogram .wave i:nth-child(7n){--h:9}
.v-audio-audiogram .time{margin-top:1.6cqh;display:flex;align-items:center;gap:1.2cqw;font:500 1.05cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 55%,transparent);animation:audio-audiogram-t2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .bar{position:relative;flex:1;height:.35cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 15%,transparent);overflow:hidden}
.v-audio-audiogram .fill{position:absolute;inset:0;border-radius:1cqw;background:var(--accent);transform-origin:left center;animation:audio-audiogram-fill 6s linear infinite}
.v-audio-audiogram .cap{margin-top:6cqh;font:700 2.6cqw/1.25 var(--font-body);letter-spacing:-.02em}
.v-audio-audiogram .cap .w{--delay:calc(1.3s + var(--i) * .18s);position:relative;display:inline-block;line-height:1.25;animation:audio-audiogram-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-audiogram .cap .w:last-child{isolation:isolate;padding:0 .12em;color:#fff}
.v-audio-audiogram .cap .w:last-child::before{content:"";position:absolute;left:0;right:0;top:.08em;bottom:.04em;border-radius:.2em;background:var(--accent);z-index:-1;transform-origin:left center;animation:audio-audiogram-pill 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-audio-audiogram .glow{left:-10cqw;top:4cqh;width:120cqw;height:60cqh}
  .v-audio-audiogram .top{top:7cqh;gap:3cqw;font-size:5.6cqw}
  .v-audio-audiogram .mark{width:8cqw;height:8cqw}
  .v-audio-audiogram .ep{font-size:3.4cqw;padding:1.4cqw 3cqw}
  .v-audio-audiogram .cover{left:20cqw;top:15cqh;width:60cqw;height:60cqw;border-radius:3.4cqw}
  .v-audio-audiogram .cs{left:4cqw;top:4cqw;font-size:2.3cqw}
  .v-audio-audiogram .cn{right:4cqw;top:3cqw;font-size:7cqw}
  .v-audio-audiogram .cm{left:4cqw;bottom:4cqw;width:15cqw;height:15cqw}
  .v-audio-audiogram .info{left:8cqw;right:8cqw;top:51cqh;height:auto;bottom:7cqh;justify-content:flex-start;text-align:center;align-items:stretch}
  .v-audio-audiogram .title{font-size:8cqw}
  .v-audio-audiogram .sub{font-size:5.4cqw;margin-top:1cqh}
  .v-audio-audiogram .waves{margin-top:3cqh;height:7cqh}
  .v-audio-audiogram .wave i{width:1.4cqw}
  .v-audio-audiogram .time{font-size:2.6cqw;gap:2.4cqw;margin-top:1.2cqh}
  .v-audio-audiogram .bar{height:.7cqw}
  .v-audio-audiogram .cap{margin-top:auto;font-size:7cqw;line-height:1.2}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-audiogram .glow{left:-4cqw;top:6cqh;width:60cqw;height:60cqh}
  .v-audio-audiogram .top{left:7cqw;right:7cqw;top:8cqh;font-size:2.8cqw;gap:1.6cqw}
  .v-audio-audiogram .mark{width:4.2cqw;height:4.2cqw}
  .v-audio-audiogram .ep{font-size:1.9cqw;padding:.8cqw 1.8cqw}
  .v-audio-audiogram .cover{left:7cqw;top:21cqh;width:38cqw;height:38cqw;border-radius:2.4cqw}
  .v-audio-audiogram .cs{font-size:1.5cqw}
  .v-audio-audiogram .cn{font-size:4.6cqw}
  .v-audio-audiogram .cm{width:10cqw;height:10cqw}
  .v-audio-audiogram .info{left:50cqw;right:7cqw;top:21cqh;height:38cqw;justify-content:flex-start}
  .v-audio-audiogram .title{font-size:4.6cqw}
  .v-audio-audiogram .sub{font-size:2.4cqw}
  .v-audio-audiogram .waves{margin-top:3cqh;height:12cqh}
  .v-audio-audiogram .wave i{width:.8cqw}
  .v-audio-audiogram .time{font-size:1.6cqw}
  .v-audio-audiogram .cap{position:absolute;left:-43cqw;right:0;top:49cqw;margin:0;font-size:4.6cqw}
}
@keyframes audio-audiogram-glow{0%,100%{transform:scale(.94);opacity:.7}50%{transform:scale(1.06);opacity:1}}
@keyframes audio-audiogram-cover{0%,2%{opacity:0;transform:translateY(4cqh) scale(.9);filter:blur(1cqw)}8%{opacity:1}22%,100%{opacity:1;transform:none;filter:blur(0)}}
@keyframes audio-audiogram-art{0%,100%{transform:scale(1) rotate(0deg)}50%{transform:scale(1.08) rotate(2deg)}}
@keyframes audio-audiogram-t1{0%,8%{opacity:0;transform:translateY(2cqh)}22%,100%{opacity:1;transform:none}}
@keyframes audio-audiogram-t2{0%,12%{opacity:0;transform:translateY(2cqh)}26%,100%{opacity:1;transform:none}}
@keyframes audio-audiogram-wave{0%,8%{opacity:0;transform:scaleY(0)}24%,100%{opacity:1;transform:scaleY(1)}}
@keyframes audio-audiogram-prog{0%{clip-path:inset(0 82% 0 0)}100%{clip-path:inset(0 40% 0 0)}}
@keyframes audio-audiogram-fill{0%{transform:scaleX(.18)}100%{transform:scaleX(.6)}}
@keyframes audio-audiogram-b1{0%,100%{transform:scaleY(.35)}30%{transform:scaleY(1)}55%{transform:scaleY(.5)}80%{transform:scaleY(.85)}}
@keyframes audio-audiogram-b2{0%,100%{transform:scaleY(.8)}40%{transform:scaleY(.3)}70%{transform:scaleY(1)}}
@keyframes audio-audiogram-b3{0%,100%{transform:scaleY(.55)}25%{transform:scaleY(.95)}50%{transform:scaleY(.25)}75%{transform:scaleY(1)}}
@keyframes audio-audiogram-word{0%{opacity:0;transform:translateY(.4em) scale(.94)}5%{opacity:1;transform:translateY(0) scale(1.04)}8%,100%{opacity:1;transform:none}}
@keyframes audio-audiogram-pill{0%,8%{transform:scaleX(0)}14%,100%{transform:scaleX(1)}}
`,
};

export const audioCoverReveal: SceneSpec = {
  id: "audio-cover-reveal",
  slug: "mg-audio-cover-reveal",
  name: "Riso Cover Reveal",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "riso-layers-snap-to-register",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#1F1D1A", accent: "#0078BF", secondary: "#FF48B0", paper: "#F3EAD7" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["podcast", "episode", "riso", "cover"],
  fields: [
    { key: "show", label: "Show on cover", default: "slow signal", maxChars: 18, role: "label" },
    { key: "kicker", label: "Kicker", default: "Slow Signal · episode 48", maxChars: 30, role: "kicker" },
    { key: "title", label: "Episode title", default: "Rooms that remember.", maxChars: 30, role: "headline" },
    { key: "meta", label: "Description", default: "Sound artist Ines Calder on why we remember places by how they sounded.", maxChars: 90, role: "body" },
  ],
  html: `<svg class="reg reg1 rp" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 0v24M0 12h24" stroke="currentColor" stroke-width="1.4"/></svg>
<svg class="reg reg1 rb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 0v24M0 12h24" stroke="currentColor" stroke-width="1.4"/></svg>
<svg class="reg reg2 rp" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 0v24M0 12h24" stroke="currentColor" stroke-width="1.4"/></svg>
<svg class="reg reg2 rb" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 0v24M0 12h24" stroke="currentColor" stroke-width="1.4"/></svg>
<div class="cover">
  <div class="pink"><div class="dots"></div><div class="sun"></div><div class="band"></div></div>
  <div class="blue"><div class="cl"><span class="cls" data-21st-slot="show">{{show}}</span><small>a tidewell podcast</small></div><svg class="waves" viewBox="0 0 390 90" preserveAspectRatio="none"><g fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><path d="M-30 20 C0 5 30 5 60 20 S120 35 150 20 S210 5 240 20 S300 35 330 20 S390 5 420 20"/><path d="M-30 45 C0 30 30 30 60 45 S120 60 150 45 S210 30 240 45 S300 60 330 45 S390 30 420 45"/><path d="M-30 70 C0 55 30 55 60 70 S120 85 150 70 S210 55 240 70 S300 85 330 70 S390 55 420 70"/></g></svg><div class="n">48</div></div>
</div>
<div class="stamp"><div class="sbg"></div><svg class="ring" viewBox="0 0 100 100"><defs><path id="audio-cover-reveal-circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"/></defs><text class="rt" font-size="10" fill="#fdf7ec"><textPath href="#audio-cover-reveal-circ" textLength="228" lengthAdjust="spacing">listen now · new episode · </textPath></text></svg><svg class="play" viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="#fdf7ec"/></svg></div>
<div class="txt">
  <div class="kick"><i></i><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="h" data-21st-slot="title">{{title|words}}</div>
  <div class="meta" data-21st-slot="meta">{{meta}}</div>
  <div class="chips"><span class="chip cp">new</span><span class="chip">52 min</span><span class="chip">out tuesday</span></div>
</div>
<div class="grain"></div>`,
  css: `
.v-audio-cover-reveal{color:var(--ink);font-family:var(--font-display)}
.v-audio-cover-reveal[data-backdrop="on"]{background:radial-gradient(120% 90% at 28% 18%,color-mix(in srgb,var(--paper) 80%,#fff) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper) 90%,var(--ink)) 100%)}
.v-audio-cover-reveal .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:22cqw;opacity:.28;mix-blend-mode:multiply;pointer-events:none}
.v-audio-cover-reveal[data-backdrop="off"] .grain,.v-audio-cover-reveal[data-backdrop="off"] .reg{display:none}
.v-audio-cover-reveal .reg{position:absolute;width:3cqw;height:3cqw;opacity:.85}
.v-audio-cover-reveal .rb{color:var(--accent)}
.v-audio-cover-reveal .rp{color:var(--secondary)}
.v-audio-cover-reveal .reg1.rb{left:2.2cqw;top:2.2cqw}
.v-audio-cover-reveal .reg1.rp{left:2.55cqw;top:2.45cqw}
.v-audio-cover-reveal .reg2.rb{right:2.2cqw;bottom:2.2cqw}
.v-audio-cover-reveal .reg2.rp{right:1.9cqw;bottom:2.5cqw}
.v-audio-cover-reveal .cover{position:absolute;left:7cqw;top:8.6cqw;width:39cqw;height:39cqw;border-radius:.5cqw;background:#faf4e8;overflow:hidden;box-shadow:0 2cqw 3.6cqw -1.4cqw rgba(40,25,10,.42),0 .3cqw .7cqw rgba(40,25,10,.16);animation:audio-cover-reveal-cover 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-cover-reveal .pink,.v-audio-cover-reveal .blue{position:absolute;inset:0;mix-blend-mode:multiply}
.v-audio-cover-reveal .pink{animation:audio-cover-reveal-pink 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .blue{animation:audio-cover-reveal-blue 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .dots{position:absolute;left:0;top:-1cqw;width:33cqw;height:33cqw;border-radius:50%;background-image:radial-gradient(circle,var(--secondary) 0 36%,transparent 40%);background-size:1.15cqw 1.15cqw;-webkit-mask-image:radial-gradient(circle,#000 40%,transparent 70%);mask-image:radial-gradient(circle,#000 40%,transparent 70%)}
.v-audio-cover-reveal .sun{position:absolute;left:6cqw;top:5cqw;width:21cqw;height:21cqw;border-radius:50%;background:var(--secondary)}
.v-audio-cover-reveal .band{position:absolute;left:0;right:0;bottom:0;height:9cqw;background:var(--secondary);opacity:.88}
.v-audio-cover-reveal .cl{position:absolute;left:3cqw;top:2.8cqw;right:3cqw;color:var(--accent)}
.v-audio-cover-reveal .cls{display:block;font-weight:700;font-size:3.1cqw;line-height:1.2;letter-spacing:-.03em}
.v-audio-cover-reveal .cl small{display:block;margin-top:.4cqw;font:500 1.4cqw/1.2 var(--font-mono)}
.v-audio-cover-reveal .waves{position:absolute;left:0;top:19cqw;width:39cqw;height:9cqw;color:var(--accent);animation:audio-cover-reveal-drift 6s ease-in-out infinite}
.v-audio-cover-reveal .n{position:absolute;right:1.6cqw;bottom:-2.4cqw;font-weight:700;font-size:22cqw;line-height:1;letter-spacing:-.07em;color:var(--accent)}
.v-audio-cover-reveal .stamp{position:absolute;left:37cqw;top:3.2cqw;width:13cqw;height:13cqw;animation:audio-cover-reveal-stamp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .sbg{position:absolute;inset:0;border-radius:50%;background:var(--secondary);box-shadow:0 1cqw 2cqw -1cqw rgba(0,0,0,.35)}
.v-audio-cover-reveal .ring{position:absolute;inset:0;width:100%;height:100%;animation:audio-cover-reveal-spin 6s linear infinite}
.v-audio-cover-reveal .rt{font-family:var(--font-mono);font-weight:600}
.v-audio-cover-reveal .play{position:absolute;left:4.4cqw;top:4.4cqw;width:4.2cqw;height:4.2cqw}
.v-audio-cover-reveal .txt{position:absolute;left:52cqw;top:9.4cqw;width:41cqw}
.v-audio-cover-reveal .kick{display:flex;align-items:center;gap:1.2cqw;font:500 1.7cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 80%,var(--accent));animation:audio-cover-reveal-k 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .kick i{display:block;width:1.5cqw;height:1.5cqw;border-radius:50%;background:var(--secondary);flex:none}
.v-audio-cover-reveal .h{margin-top:1.6cqw;font-weight:700;font-size:6.6cqw;line-height:1.2;letter-spacing:-.045em;color:var(--ink)}
.v-audio-cover-reveal .h .w{--delay:calc(1s + var(--i) * .18s);display:inline-block;line-height:1.2;padding-right:.06em;text-shadow:.4cqw .28cqw 0 color-mix(in srgb,var(--secondary) 85%,transparent);animation:audio-cover-reveal-line 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .meta{margin-top:2cqw;font:400 1.9cqw/1.38 var(--font-body);color:color-mix(in srgb,var(--ink) 82%,transparent);animation:audio-cover-reveal-m 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .chips{display:flex;gap:1cqw;margin-top:2cqw;animation:audio-cover-reveal-ch 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-cover-reveal .chip{font:500 1.45cqw/1.2 var(--font-mono);color:var(--ink);border:1px solid color-mix(in srgb,var(--ink) 60%,transparent);border-radius:3cqw;padding:.5cqw 1.3cqw}
.v-audio-cover-reveal .chip.cp{background:var(--secondary);border-color:var(--secondary);color:#fdf7ec}
@container (max-aspect-ratio: 4/5){
  .v-audio-cover-reveal .reg{width:6cqw;height:6cqw}
  .v-audio-cover-reveal .cover{left:12cqw;top:17cqh;width:76cqw;height:76cqw;border-radius:1cqw}
  .v-audio-cover-reveal .cover > div{zoom:1.9487}
  .v-audio-cover-reveal .cls{font-size:3.4cqw}
  .v-audio-cover-reveal .stamp{left:68cqw;top:13cqh;width:24cqw;height:24cqw}
  .v-audio-cover-reveal .play{left:8cqw;top:8cqw;width:8cqw;height:8cqw}
  .v-audio-cover-reveal .txt{position:static}
  .v-audio-cover-reveal .kick{position:absolute;left:8cqw;right:8cqw;top:8cqh;font-family:var(--font-body);font-weight:600;font-size:5.6cqw;gap:3cqw}
  .v-audio-cover-reveal .kick i{width:4cqw;height:4cqw}
  .v-audio-cover-reveal .h{position:absolute;left:8cqw;right:8cqw;top:62cqh;margin:0;font-size:12cqw}
  .v-audio-cover-reveal .h .w{text-shadow:.8cqw .55cqw 0 color-mix(in srgb,var(--secondary) 85%,transparent)}
  .v-audio-cover-reveal .meta{position:absolute;left:8cqw;right:8cqw;bottom:8cqh;margin:0;font-size:5.4cqw;line-height:1.3}
  .v-audio-cover-reveal .chips{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-cover-reveal .reg{width:4cqw;height:4cqw}
  .v-audio-cover-reveal .cover{left:7cqw;top:22cqh;width:42cqw;height:42cqw}
  .v-audio-cover-reveal .cover > div{zoom:1.0769}
  .v-audio-cover-reveal .cls{font-size:3.4cqw}
  .v-audio-cover-reveal .stamp{left:38cqw;top:14cqh;width:16cqw;height:16cqw}
  .v-audio-cover-reveal .play{left:5.3cqw;top:5.3cqw;width:5.4cqw;height:5.4cqw}
  .v-audio-cover-reveal .txt{left:55cqw;top:22cqh;width:38cqw}
  .v-audio-cover-reveal .kick{font-size:2.2cqw;gap:1.4cqw}
  .v-audio-cover-reveal .kick i{width:2cqw;height:2cqw}
  .v-audio-cover-reveal .h{font-size:7.4cqw}
  .v-audio-cover-reveal .meta{position:absolute;left:-48cqw;right:0;top:47cqw;font-size:2.6cqw}
  .v-audio-cover-reveal .chips{margin-top:2.4cqw}
  .v-audio-cover-reveal .chip{font-size:1.9cqw}
}
@keyframes audio-cover-reveal-cover{0%,3%{clip-path:inset(-4cqw -4cqw 100% -4cqw);transform:translateY(-1.2cqw)}26%,100%{clip-path:inset(-4cqw -4cqw -4cqw -4cqw);transform:translateY(0)}}
@keyframes audio-cover-reveal-pink{0%,10%{transform:translate(-3cqw,2cqw)}38%,100%{transform:translate(.3cqw,-.2cqw)}}
@keyframes audio-cover-reveal-blue{0%,10%{transform:translate(3cqw,-2cqw)}38%,100%{transform:translate(-.2cqw,.15cqw)}}
@keyframes audio-cover-reveal-drift{0%,100%{transform:translateX(0)}50%{transform:translateX(-2cqw)}}
@keyframes audio-cover-reveal-stamp{0%,30%{opacity:0;transform:scale(1.7) rotate(-24deg)}36%{opacity:1;transform:scale(.93) rotate(4deg)}40%,100%{opacity:1;transform:scale(1) rotate(0deg)}}
@keyframes audio-cover-reveal-spin{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
@keyframes audio-cover-reveal-k{0%,14%{opacity:0;transform:translateY(1.2cqw)}26%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-cover-reveal-line{0%{transform:translateY(70%);clip-path:inset(0 -20% 70% -20%);opacity:0}2%{opacity:1}14%,100%{transform:none;clip-path:inset(-20% -20% -20% -20%);opacity:1}}
@keyframes audio-cover-reveal-m{0%,29%{opacity:0;transform:translateY(1.5cqw)}41%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-cover-reveal-ch{0%,33%{opacity:0;transform:translateY(1.5cqw)}45%,100%{opacity:1;transform:translateY(0)}}
`,
};

export const audioGuestIntro: SceneSpec = {
  id: "audio-guest-intro",
  slug: "mg-audio-guest-intro",
  name: "Host And Guest Split",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "split-panels-speaker-highlight",
  energy: "default",
  settle: 4.3,
  colors: { ink: "#141414", accent: "#D0643C", secondary: "#5D8F77", paper: "#F2F0EB" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["podcast", "guest", "split-screen", "lower-third"],
  fields: [
    { key: "host", label: "Host name", default: "Mara Okafor", maxChars: 20, role: "name" },
    { key: "guest", label: "Guest name", default: "Ines Calder", maxChars: 20, role: "name" },
    { key: "role", label: "Guest role", default: "sound artist, author of quiet rooms", maxChars: 38, role: "caption" },
    { key: "title", label: "Episode title", default: "Rooms that remember", maxChars: 30, role: "headline" },
  ],
  html: `<div class="head"><span class="rec"></span><span>Slow Signal</span><span class="dim">no. 48 · recorded in studio b</span><span class="right">this week's guest</span></div>
<div class="p p1">
  <div class="fig"><div class="light"></div><div class="bd"></div><div class="nk"></div><div class="hd"></div><div class="hp"></div><div class="cup cup1"></div><div class="cup cup2"></div><svg class="mic" viewBox="0 0 60 108"><path d="M30 50 v14 L58 108" fill="none" stroke="#1b1b1b" stroke-width="4" stroke-linecap="round"/><rect x="17" y="2" width="26" height="50" rx="13" fill="#1b1b1b"/><g stroke="#3a3a3a" stroke-width="1.6"><path d="M19 12h22M18 18h24M18 24h24M18 30h24M19 36h22"/></g><rect x="17" y="2" width="26" height="50" rx="13" fill="none" stroke="rgba(255,214,190,.55)" stroke-width="1.2"/></svg></div>
  <div class="pgrain"></div>
  <div class="live"><div class="ring"></div><div class="spk"><span class="eq"><i></i><i></i><i></i></span>speaking</div></div>
  <div class="lt"><span class="nm" data-21st-slot="host">{{host}}</span><span class="rl">host</span></div>
</div>
<div class="p p2">
  <div class="fig"><div class="light"></div><div class="bd"></div><div class="nk"></div><div class="bun"></div><div class="hd"></div></div>
  <div class="pgrain"></div>
  <div class="live"><div class="ring"></div><div class="spk"><span class="eq"><i></i><i></i><i></i></span>speaking</div></div>
  <div class="lt"><span class="nm" data-21st-slot="guest">{{guest}}</span><span class="rl" data-21st-slot="role">{{role}}</span></div>
</div>
<div class="badge"><svg viewBox="0 0 100 100"><defs><path id="audio-guest-intro-circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs><text class="rtx" font-size="9.5"><textPath href="#audio-guest-intro-circ" textLength="234" lengthAdjust="spacing">in conversation · slow signal · </textPath></text></svg><div class="amp">&amp;</div></div>
<div class="foot"><span class="epn">ep. 48</span><span class="ttl" data-21st-slot="title">{{title}}</span><span class="when"><span class="eq"><i></i><i></i><i></i></span>new every tuesday</span></div>`,
  css: `
.v-audio-guest-intro{color:var(--ink);font-family:var(--font-body)}
.v-audio-guest-intro[data-backdrop="on"]{background:var(--paper)}
.v-audio-guest-intro .head{position:absolute;left:4cqw;right:4cqw;top:2.4cqw;height:4cqw;display:flex;align-items:center;gap:1.2cqw;font-size:1.5cqw;font-weight:600;letter-spacing:-.01em;animation:audio-guest-intro-hd 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-guest-intro .rec{width:1.2cqw;height:1.2cqw;border-radius:50%;background:var(--accent);animation:audio-guest-intro-blink 1s steps(1,end) infinite}
.v-audio-guest-intro .dim{color:color-mix(in srgb,var(--ink) 50%,transparent);font-weight:500}
.v-audio-guest-intro .right{margin-left:auto;font-family:var(--font-display);font-style:italic;font-weight:400;font-size:2.1cqw;line-height:1.2}
.v-audio-guest-intro .p{position:absolute;top:8cqw;width:45cqw;height:36.5cqw;border-radius:1.2cqw;overflow:hidden}
.v-audio-guest-intro .p1{left:4cqw;background:linear-gradient(165deg,color-mix(in srgb,var(--accent) 45%,#fff) 0%,var(--accent) 55%,color-mix(in srgb,var(--accent) 45%,#000) 100%);animation:audio-guest-intro-p1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-guest-intro .p2{left:51cqw;background:linear-gradient(165deg,color-mix(in srgb,var(--secondary) 40%,#fff) 0%,var(--secondary) 55%,color-mix(in srgb,var(--secondary) 40%,#000) 100%);animation:audio-guest-intro-p2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-guest-intro .fig{position:absolute;left:0;top:0;width:45cqw;height:36.5cqw;transform-origin:50% 80%;animation:audio-guest-intro-push 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-guest-intro .light{position:absolute;inset:0;background:radial-gradient(60% 55% at 78% 16%,rgba(255,244,230,.55),transparent 70%)}
.v-audio-guest-intro .p2 .light{background:radial-gradient(60% 55% at 20% 16%,rgba(240,250,244,.5),transparent 70%)}
.v-audio-guest-intro .hd{position:absolute;left:16cqw;top:7.5cqw;width:12.5cqw;height:15cqw;border-radius:50% 50% 46% 46%}
.v-audio-guest-intro .nk{position:absolute;left:19.5cqw;top:19cqw;width:5.5cqw;height:6cqw;border-radius:1cqw}
.v-audio-guest-intro .bd{position:absolute;left:5.5cqw;top:23.5cqw;width:34cqw;height:20cqw;border-radius:50% 50% 0 0/70% 70% 0 0}
.v-audio-guest-intro .bun{position:absolute;left:13.6cqw;top:5.4cqw;width:6.4cqw;height:6.4cqw;border-radius:50%}
.v-audio-guest-intro .p1 .hd,.v-audio-guest-intro .p1 .nk,.v-audio-guest-intro .p1 .bd{background:linear-gradient(200deg,color-mix(in srgb,var(--accent) 55%,#2a0c04) 0%,color-mix(in srgb,var(--accent) 22%,#1a0702) 62%);box-shadow:inset -.8cqw .3cqw 1.3cqw rgba(255,214,186,.4)}
.v-audio-guest-intro .p2 .hd,.v-audio-guest-intro .p2 .nk,.v-audio-guest-intro .p2 .bd,.v-audio-guest-intro .p2 .bun{background:linear-gradient(160deg,color-mix(in srgb,var(--secondary) 50%,#0a1a12) 0%,color-mix(in srgb,var(--secondary) 18%,#06100b) 62%);box-shadow:inset .8cqw .3cqw 1.3cqw rgba(220,242,228,.38)}
.v-audio-guest-intro .hp{position:absolute;left:14.6cqw;top:6cqw;width:15.3cqw;height:11cqw;border:.9cqw solid #1b1b1b;border-bottom:0;border-radius:8cqw 8cqw 0 0}
.v-audio-guest-intro .cup{position:absolute;top:13cqw;width:3cqw;height:5.4cqw;border-radius:1.2cqw;background:linear-gradient(90deg,#2a2a2a,#111)}
.v-audio-guest-intro .cup1{left:13.6cqw}
.v-audio-guest-intro .cup2{left:27.9cqw}
.v-audio-guest-intro .mic{position:absolute;left:30cqw;top:18.5cqw;width:10cqw;height:18cqw}
.v-audio-guest-intro .pgrain{position:absolute;inset:0;background-image:${GRAIN};background-size:20cqw;opacity:.22;mix-blend-mode:overlay}
.v-audio-guest-intro .live{position:absolute;inset:0;opacity:0}
.v-audio-guest-intro .p1 .live{animation:audio-guest-intro-s1 6s ease-in-out infinite}
.v-audio-guest-intro .p2 .live{animation:audio-guest-intro-s2 6s ease-in-out infinite}
.v-audio-guest-intro .ring{position:absolute;inset:0;border-radius:1.2cqw;box-shadow:inset 0 0 0 .4cqw var(--accent)}
.v-audio-guest-intro .p1 .ring{box-shadow:inset 0 0 0 .4cqw var(--paper)}
.v-audio-guest-intro .spk{position:absolute;right:2cqw;top:2cqw;display:flex;align-items:center;gap:.8cqw;padding:.7cqw 1.3cqw;border-radius:3cqw;background:rgba(20,20,20,.6);color:#fff;font-size:1.35cqw;font-weight:600}
.v-audio-guest-intro .eq{display:flex;align-items:center;gap:.3cqw;height:1.8cqw}
.v-audio-guest-intro .eq i{display:block;width:.35cqw;height:100%;border-radius:.2cqw;background:color-mix(in srgb,var(--accent) 60%,#fff);animation:audio-guest-intro-eq .5s ease-in-out infinite}
.v-audio-guest-intro .eq i:nth-child(2){animation-duration:.6s}
.v-audio-guest-intro .eq i:nth-child(3){animation-duration:.75s}
.v-audio-guest-intro .lt{position:absolute;left:2cqw;bottom:2cqw;max-width:38cqw;padding:1.1cqw 1.8cqw 1.2cqw 2.4cqw;background:var(--paper);color:var(--ink);border-radius:.8cqw;box-shadow:0 1cqw 2cqw -1cqw rgba(0,0,0,.35)}
.v-audio-guest-intro .p1 .lt{animation:audio-guest-intro-lt1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-guest-intro .p2 .lt{animation:audio-guest-intro-lt2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-guest-intro .lt::before{content:"";position:absolute;left:1cqw;top:1.2cqw;bottom:1.2cqw;width:.35cqw;border-radius:.2cqw;background:var(--accent)}
.v-audio-guest-intro .nm{display:block;font-family:var(--font-display);font-size:3.4cqw;line-height:1.34}
.v-audio-guest-intro .rl{display:block;margin-top:.3cqw;font-size:1.45cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 66%,transparent);font-weight:500}
.v-audio-guest-intro .badge{position:absolute;left:44cqw;top:20.25cqw;width:12cqw;height:12cqw;border-radius:50%;background:var(--ink);box-shadow:0 0 0 .7cqw var(--paper),0 1.4cqw 3cqw -1cqw rgba(0,0,0,.45);animation:audio-guest-intro-badge 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-guest-intro .badge svg{position:absolute;inset:0;width:100%;height:100%;animation:audio-guest-intro-spin 6s linear infinite}
.v-audio-guest-intro .rtx{font-family:var(--font-body);font-weight:600;fill:var(--paper)}
.v-audio-guest-intro .amp{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--font-display);font-style:italic;font-size:5.4cqw;line-height:1;color:var(--accent);padding-bottom:.3cqw}
.v-audio-guest-intro .foot{position:absolute;left:4cqw;right:4cqw;top:47.2cqw;height:5.4cqw;display:flex;align-items:center;gap:1.6cqw;animation:audio-guest-intro-ft 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-guest-intro .epn{font:500 1.4cqw/1 var(--font-mono);padding:.5cqw 1.1cqw;border-radius:3cqw;background:var(--ink);color:var(--paper);flex:none}
.v-audio-guest-intro .ttl{font-family:var(--font-display);font-style:italic;font-size:3.2cqw;line-height:1.34}
.v-audio-guest-intro .when{margin-left:auto;display:flex;align-items:center;gap:1cqw;font-size:1.5cqw;color:color-mix(in srgb,var(--ink) 70%,transparent);font-weight:500;flex:none}
.v-audio-guest-intro .when .eq i{background:var(--ink)}
@container (max-aspect-ratio: 4/5){
  .v-audio-guest-intro .head{display:none}
  .v-audio-guest-intro .foot{left:8cqw;right:8cqw;top:6cqh;height:auto;flex-wrap:wrap;gap:2cqw 3cqw}
  .v-audio-guest-intro .epn{font-size:3.4cqw;padding:1.2cqw 2.6cqw;border-radius:5cqw}
  .v-audio-guest-intro .ttl{order:3;width:100%;font-size:10cqw;line-height:1.34}
  .v-audio-guest-intro .when{margin-left:0;font-size:3.6cqw;gap:2cqw}
  .v-audio-guest-intro .eq{height:4cqw;gap:.7cqw}
  .v-audio-guest-intro .eq i{width:.8cqw}
  .v-audio-guest-intro .p{left:6cqw;width:88cqw;height:31cqh;border-radius:3cqw}
  .v-audio-guest-intro .p1{top:24.5cqh}
  .v-audio-guest-intro .p2{top:57.5cqh}
  .v-audio-guest-intro .ring{border-radius:3cqw;box-shadow:inset 0 0 0 1cqw var(--accent)}
  .v-audio-guest-intro .p1 .ring{box-shadow:inset 0 0 0 1cqw var(--paper)}
  .v-audio-guest-intro .fig{left:14cqw;top:auto;bottom:0;zoom:1.5}
  .v-audio-guest-intro .p2 .fig{left:20cqw}
  .v-audio-guest-intro .light{left:-30cqw}
  .v-audio-guest-intro .spk{right:4cqw;top:4cqw;gap:2cqw;padding:1.6cqw 3cqw;border-radius:6cqw;font-size:3.4cqw}
  .v-audio-guest-intro .lt{left:4cqw;bottom:4cqw;max-width:62cqw;padding:2.4cqw 4cqw 2.6cqw 5.6cqw;border-radius:2cqw}
  .v-audio-guest-intro .lt::before{left:2.4cqw;top:2.8cqw;bottom:2.8cqw;width:.9cqw}
  .v-audio-guest-intro .nm{font-size:8.4cqw}
  .v-audio-guest-intro .rl{font-size:5.4cqw;line-height:1.25}
  .v-audio-guest-intro .badge{left:40cqw;top:calc(56cqh - 10cqw);width:20cqw;height:20cqw;box-shadow:0 0 0 1.4cqw var(--paper),0 2cqw 4cqw -1cqw rgba(0,0,0,.45)}
  .v-audio-guest-intro .amp{font-size:9cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-guest-intro .head{left:6cqw;right:6cqw;top:4cqw;height:6cqw;font-size:2.2cqw;gap:1.6cqw}
  .v-audio-guest-intro .dim{display:none}
  .v-audio-guest-intro .right{font-size:3cqw}
  .v-audio-guest-intro .rec{width:1.8cqw;height:1.8cqw}
  .v-audio-guest-intro .p{top:13cqw;width:43cqw;height:58cqw;border-radius:2cqw}
  .v-audio-guest-intro .p1{left:6cqw}
  .v-audio-guest-intro .p2{left:51cqw}
  .v-audio-guest-intro .ring{border-radius:2cqw;box-shadow:inset 0 0 0 .6cqw var(--accent)}
  .v-audio-guest-intro .p1 .ring{box-shadow:inset 0 0 0 .6cqw var(--paper)}
  .v-audio-guest-intro .fig{left:-6cqw;top:auto;bottom:0;zoom:1.25}
  .v-audio-guest-intro .light{top:-20cqw}
  .v-audio-guest-intro .spk{right:2cqw;top:2cqw;font-size:1.9cqw;gap:1cqw;padding:.9cqw 1.6cqw}
  .v-audio-guest-intro .lt{left:2cqw;right:2cqw;bottom:2cqw;max-width:none;padding:1.4cqw 2cqw 1.5cqw 3cqw}
  .v-audio-guest-intro .lt::before{left:1.3cqw;width:.5cqw}
  .v-audio-guest-intro .nm{font-size:4.2cqw}
  .v-audio-guest-intro .rl{font-size:2cqw}
  .v-audio-guest-intro .badge{left:41cqw;top:30cqw;width:18cqw;height:18cqw;box-shadow:0 0 0 1cqw var(--paper),0 1.4cqw 3cqw -1cqw rgba(0,0,0,.45)}
  .v-audio-guest-intro .amp{font-size:8cqw}
  .v-audio-guest-intro .foot{left:6cqw;right:6cqw;top:76cqw;height:auto;flex-wrap:wrap;gap:1.4cqw 2cqw}
  .v-audio-guest-intro .epn{font-size:2cqw;padding:.8cqw 1.6cqw}
  .v-audio-guest-intro .ttl{order:3;width:100%;font-size:6.4cqw}
  .v-audio-guest-intro .when{margin-left:0;font-size:2.2cqw}
  .v-audio-guest-intro .eq{height:2.4cqw}
}
@keyframes audio-guest-intro-blink{0%,100%{opacity:1}50%{opacity:.2}}
@keyframes audio-guest-intro-hd{0%,2%{opacity:0;transform:translateY(-1cqw)}14%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-guest-intro-p1{0%,3%{clip-path:inset(100% 0 0 0 round 1.2cqw)}20%,100%{clip-path:inset(0 0 0 0 round 1.2cqw)}}
@keyframes audio-guest-intro-p2{0%,9%{clip-path:inset(100% 0 0 0 round 1.2cqw)}26%,100%{clip-path:inset(0 0 0 0 round 1.2cqw)}}
@keyframes audio-guest-intro-push{0%,4%{transform:scale(1.16)}40%{transform:scale(1.03)}72%,100%{transform:scale(1)}}
@keyframes audio-guest-intro-s1{0%,36%{opacity:0}40%,56%{opacity:1}60%,100%{opacity:0}}
@keyframes audio-guest-intro-s2{0%,58%{opacity:0}62%,100%{opacity:1}}
@keyframes audio-guest-intro-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes audio-guest-intro-lt1{0%,18%{clip-path:inset(0 100% 0 0 round .8cqw);transform:translateX(-1.2cqw)}31%,100%{clip-path:inset(0 0 0 0 round .8cqw);transform:translateX(0)}}
@keyframes audio-guest-intro-lt2{0%,24%{clip-path:inset(0 100% 0 0 round .8cqw);transform:translateX(-1.2cqw)}37%,100%{clip-path:inset(0 0 0 0 round .8cqw);transform:translateX(0)}}
@keyframes audio-guest-intro-badge{0%,28%{transform:scale(0) rotate(-120deg)}37%{transform:scale(1.08) rotate(6deg)}42%,100%{transform:scale(1) rotate(0deg)}}
@keyframes audio-guest-intro-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes audio-guest-intro-ft{0%,28%{opacity:0;transform:translateY(1.4cqw)}42%,100%{opacity:1;transform:translateY(0)}}
`,
};

export const audioPullQuote: SceneSpec = {
  id: "audio-pull-quote",
  slug: "mg-audio-pull-quote",
  name: "Episode Pull Quote",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "quote-lines-rise-underline",
  energy: "calm",
  settle: 3.6,
  colors: { ink: "#F3E6D3", accent: "#D9A35B", secondary: "#5D8F77", paper: "#34121A" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["podcast", "quote", "guest", "editorial"],
  fields: [
    { key: "quote", label: "Quote", default: "We don't remember rooms. We remember how they sounded.", maxChars: 70, role: "headline" },
    { key: "name", label: "Speaker", default: "Ines Calder", maxChars: 22, role: "name" },
    { key: "role", label: "Speaker line", default: "sound artist · at 23:14", maxChars: 30, role: "caption" },
    { key: "cta", label: "Player label", default: "Hear the full episode", maxChars: 26, role: "cta" },
  ],
  html: `<div class="light"></div>
<div class="top"><svg class="mk" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 12.5c1.3 0 1.6-3.5 3.2-3.5s1.9 6 3.3 6 1.7-6 3.3-6 1.9 3.5 3.2 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Slow Signal</span><span class="ep">episode 48</span></div>
<div class="rule"></div>
<div class="qm">&ldquo;</div>
<div class="q" data-21st-slot="quote">{{quote|words}}</div>
<div class="by"><div class="av"><div class="avb"></div><div class="avh"></div></div><div><span class="nm" data-21st-slot="name">{{name}}</span><span class="rl" data-21st-slot="role">{{role}}</span></div></div>
<div class="player"><div class="play"><svg viewBox="0 0 24 24"><path d="M6 4v16l14-8z" fill="currentColor"/></svg></div><div class="mid"><div class="pt" data-21st-slot="cta">{{cta}}</div><div class="wv"><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="bars on"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div><div class="tc">52:08</div></div>
<div class="grain"></div>`,
  css: `
.v-audio-pull-quote{color:var(--ink);font-family:var(--font-display)}
.v-audio-pull-quote[data-backdrop="on"]{background:radial-gradient(90% 80% at 20% 8%,color-mix(in srgb,var(--paper) 78%,var(--ink) 10%) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 75%,#000) 100%)}
.v-audio-pull-quote .light{position:absolute;left:-10cqw;top:-30cqh;width:60cqw;height:60cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 22%,transparent),transparent);animation:audio-pull-quote-light 6s ease-in-out infinite}
.v-audio-pull-quote .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:22cqw;opacity:.22;mix-blend-mode:overlay;pointer-events:none}
.v-audio-pull-quote[data-backdrop="off"] .grain,.v-audio-pull-quote[data-backdrop="off"] .light{display:none}
.v-audio-pull-quote .top{position:absolute;left:8cqw;right:8cqw;top:6.5cqh;display:flex;align-items:center;gap:1cqw;font:600 1.5cqw/1.2 var(--font-body);letter-spacing:-.01em;animation:audio-pull-quote-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-pull-quote .mk{width:2.4cqw;height:2.4cqw;color:var(--accent)}
.v-audio-pull-quote .ep{margin-left:auto;font:500 1.2cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-audio-pull-quote .rule{position:absolute;left:8cqw;right:8cqw;top:15cqh;height:1px;background:color-mix(in srgb,var(--ink) 24%,transparent);transform-origin:left center;animation:audio-pull-quote-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-pull-quote .qm{position:absolute;left:5.4cqw;top:12cqh;font-size:30cqw;line-height:1;color:var(--accent);opacity:.9;animation:audio-pull-quote-qm 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-pull-quote .q{position:absolute;left:8cqw;right:16cqw;top:24cqh;font-size:6cqw;line-height:1.2;letter-spacing:-.012em}
.v-audio-pull-quote .q .w{--delay:calc(.5s + var(--i) * .1s);display:inline-block;line-height:1.34;animation:audio-pull-quote-line 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-pull-quote .q .w:last-child{position:relative;font-style:italic;padding-inline:.06em .12em;margin-inline:-.06em -.12em;color:color-mix(in srgb,var(--accent) 75%,var(--ink))}
.v-audio-pull-quote .q .w:last-child::after{content:"";position:absolute;left:.04em;right:.1em;bottom:.04em;height:.2em;background:var(--accent);-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'%3E%3Cpath d='M3 13 C40 5 80 16 120 9 S180 6 197 11' fill='none' stroke='black' stroke-width='3.5' stroke-linecap='round'/%3E%3C/svg%3E") 0 0/100% 100% no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'%3E%3Cpath d='M3 13 C40 5 80 16 120 9 S180 6 197 11' fill='none' stroke='black' stroke-width='3.5' stroke-linecap='round'/%3E%3C/svg%3E") 0 0/100% 100% no-repeat;--delay:1.8s;animation:audio-pull-quote-ul 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-pull-quote .by{position:absolute;left:8cqw;top:72cqh;display:flex;align-items:center;gap:1.4cqw;font-family:var(--font-body);animation:audio-pull-quote-by 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-pull-quote .av{position:relative;flex:none;width:4.8cqw;height:4.8cqw;border-radius:50%;overflow:hidden;background:linear-gradient(160deg,color-mix(in srgb,var(--secondary) 40%,#fff),var(--secondary) 55%,color-mix(in srgb,var(--secondary) 40%,#000));box-shadow:0 0 0 .3cqw color-mix(in srgb,var(--accent) 40%,transparent)}
.v-audio-pull-quote .avh{position:absolute;left:32%;top:17%;width:35%;height:42%;border-radius:50%;background:color-mix(in srgb,var(--secondary) 25%,#0b1612)}
.v-audio-pull-quote .avb{position:absolute;left:7%;top:62%;width:88%;height:66%;border-radius:50% 50% 0 0;background:color-mix(in srgb,var(--secondary) 25%,#0b1612)}
.v-audio-pull-quote .nm{display:block;font-size:1.9cqw;line-height:1.25;font-weight:600;letter-spacing:-.015em}
.v-audio-pull-quote .rl{display:block;margin-top:.2cqw;font-size:1.35cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-audio-pull-quote .player{position:absolute;right:8cqw;top:69cqh;width:34cqw;height:8cqw;display:flex;align-items:center;gap:1.6cqw;padding:0 1.6cqw;border-radius:1.6cqw;background:color-mix(in srgb,var(--ink) 7%,var(--paper));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent);font-family:var(--font-body);animation:audio-pull-quote-pl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-pull-quote .play{position:relative;flex:none;width:4.8cqw;height:4.8cqw;border-radius:50%;background:var(--accent);color:var(--paper);display:grid;place-items:center}
.v-audio-pull-quote .play::after{content:"";position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 .3cqw color-mix(in srgb,var(--accent) 55%,transparent);animation:audio-pull-quote-ping 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-pull-quote .play svg{width:1.8cqw;height:1.8cqw;margin-left:.25cqw}
.v-audio-pull-quote .mid{flex:1;min-width:0}
.v-audio-pull-quote .pt{font-size:1.4cqw;line-height:1.25;font-weight:600}
.v-audio-pull-quote .wv{position:relative;height:2.4cqw;margin-top:.5cqw}
.v-audio-pull-quote .bars{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between}
.v-audio-pull-quote .bars i{display:block;width:.45cqw;height:calc(var(--h,2) * 20%);border-radius:.5cqw;background:color-mix(in srgb,var(--ink) 24%,transparent)}
.v-audio-pull-quote .bars.on i{background:var(--accent)}
.v-audio-pull-quote .bars.on{animation:audio-pull-quote-prog 6s linear infinite}
.v-audio-pull-quote .bars i:nth-child(5n+1){--h:1.6}
.v-audio-pull-quote .bars i:nth-child(5n+2){--h:3.4}
.v-audio-pull-quote .bars i:nth-child(5n+3){--h:2.4}
.v-audio-pull-quote .bars i:nth-child(5n+4){--h:4.2}
.v-audio-pull-quote .bars i:nth-child(5n){--h:2.8}
.v-audio-pull-quote .tc{flex:none;font:500 1.15cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 60%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-audio-pull-quote .light{left:-30cqw;top:-20cqw;width:120cqw;height:120cqw}
  .v-audio-pull-quote .top{top:6cqh;font-size:4.4cqw;gap:2.4cqw}
  .v-audio-pull-quote .mk{width:7cqw;height:7cqw}
  .v-audio-pull-quote .ep{font-size:3.4cqw}
  .v-audio-pull-quote .rule{top:12cqh}
  .v-audio-pull-quote .qm{left:5cqw;top:10cqh;font-size:60cqw}
  .v-audio-pull-quote .q{left:8cqw;right:8cqw;top:28cqh;font-size:12cqw}
  .v-audio-pull-quote .by{top:66cqh;gap:3.6cqw}
  .v-audio-pull-quote .av{width:13cqw;height:13cqw}
  .v-audio-pull-quote .nm{font-size:6.4cqw}
  .v-audio-pull-quote .rl{font-size:5.4cqw;margin-top:.6cqw}
  .v-audio-pull-quote .player{left:8cqw;right:8cqw;top:auto;bottom:7cqh;width:auto;height:22cqw;gap:3.6cqw;padding:0 4cqw;border-radius:4cqw}
  .v-audio-pull-quote .play{width:13cqw;height:13cqw}
  .v-audio-pull-quote .play svg{width:5cqw;height:5cqw}
  .v-audio-pull-quote .pt{font-size:5.4cqw}
  .v-audio-pull-quote .wv{height:5.4cqw;margin-top:1.4cqw}
  .v-audio-pull-quote .bars i{width:1cqw}
  .v-audio-pull-quote .tc{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-pull-quote .top{left:7cqw;right:7cqw;top:6cqh;font-size:2.6cqw;gap:1.6cqw}
  .v-audio-pull-quote .mk{width:4.2cqw;height:4.2cqw}
  .v-audio-pull-quote .ep{font-size:2cqw}
  .v-audio-pull-quote .rule{left:7cqw;right:7cqw;top:14cqh}
  .v-audio-pull-quote .qm{left:4cqw;top:10cqh;font-size:44cqw}
  .v-audio-pull-quote .q{left:7cqw;right:7cqw;top:25cqh;font-size:7.6cqw}
  .v-audio-pull-quote .by{left:7cqw;top:64cqh;gap:2.4cqw}
  .v-audio-pull-quote .av{width:8cqw;height:8cqw}
  .v-audio-pull-quote .nm{font-size:3.2cqw}
  .v-audio-pull-quote .rl{font-size:2.3cqw}
  .v-audio-pull-quote .player{left:7cqw;right:7cqw;top:auto;bottom:7cqh;width:auto;height:13cqw;gap:2.6cqw;padding:0 2.6cqw;border-radius:2.6cqw}
  .v-audio-pull-quote .play{width:8cqw;height:8cqw}
  .v-audio-pull-quote .play svg{width:3cqw;height:3cqw}
  .v-audio-pull-quote .pt{font-size:2.4cqw}
  .v-audio-pull-quote .wv{height:3.6cqw;margin-top:.8cqw}
  .v-audio-pull-quote .bars i{width:.8cqw}
  .v-audio-pull-quote .tc{font-size:2cqw}
}
@keyframes audio-pull-quote-light{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,4cqw)}}
@keyframes audio-pull-quote-fade{0%,2%{opacity:0}14%,100%{opacity:1}}
@keyframes audio-pull-quote-rule{0%,4%{transform:scaleX(0)}24%,100%{transform:scaleX(1)}}
@keyframes audio-pull-quote-qm{0%,4%{opacity:0;transform:translateY(4cqh)}20%,100%{opacity:.9;transform:translateY(0)}}
@keyframes audio-pull-quote-line{0%{transform:translateY(70%);clip-path:inset(0 -20% 70% -20%);opacity:0}2%{opacity:1}14%,100%{transform:none;clip-path:inset(-30% -20% -30% -20%);opacity:1}}
@keyframes audio-pull-quote-ul{0%,10%{clip-path:inset(0 100% 0 0)}24%,100%{clip-path:inset(0 0 0 0)}}
@keyframes audio-pull-quote-by{0%,32%{opacity:0;transform:translateY(2cqh)}44%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-pull-quote-pl{0%,36%{opacity:0;transform:translateY(3cqh)}47%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-pull-quote-ping{0%{transform:scale(1);opacity:1}70%,100%{transform:scale(1.45);opacity:0}}
@keyframes audio-pull-quote-prog{0%{clip-path:inset(0 70% 0 0)}100%{clip-path:inset(0 40% 0 0)}}
`,
};

export const audioVinylDrop: SceneSpec = {
  id: "audio-vinyl-drop",
  slug: "mg-audio-vinyl-drop",
  name: "Vinyl Album Drop",
  kind: "scene",
  job: "titles",
  language: "glass",
  mechanic: "vinyl-slides-out-and-spins",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#1B1446", accent: "#6B4DFF", secondary: "#FF4FA3", paper: "#D9D3FF" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["music", "album", "release", "vinyl"],
  fields: [
    { key: "kicker", label: "Release pill", default: "New album · out Friday", maxChars: 28, role: "kicker" },
    { key: "title", label: "Album title", default: "Glass Weather", maxChars: 24, role: "headline" },
    { key: "artist", label: "Artist", default: "Juno Vale", maxChars: 24, role: "name" },
    { key: "cta", label: "Button", default: "Pre-save", maxChars: 16, role: "cta" },
  ],
  html: `<div class="b1"></div><div class="b2"></div>
<div class="recw"><div class="rec">
  <div class="shadow"></div>
  <div class="vinyl"><div class="disc"><div class="label"><div class="lb">side a · 33</div></div></div><div class="sheen"></div></div>
  <div class="sleeve"><div class="orb"></div><div class="orbhl"></div><div class="sc">lp · tidewell records</div><div class="gloss"></div></div>
</div></div>
<div class="col">
  <div class="pill"><span class="dot"></span><span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="h" data-21st-slot="title">{{title|words}}</div>
  <div class="by" data-21st-slot="artist">{{artist}}</div>
  <div class="tracks">
    <div class="t t1"><span class="tn">01</span><span class="tt">Static Bloom</span><span class="td">3:42</span></div>
    <div class="t t2 now"><span class="eq"><i></i><i></i><i></i></span><span class="tt">Title Track</span><span class="td">4:05</span></div>
    <div class="t t3"><span class="tn">03</span><span class="tt">Low Ceilings</span><span class="td">3:18</span></div>
    <div class="t t4"><span class="tn">04</span><span class="tt">Paper Moons</span><span class="td">2:56</span></div>
    <div class="t t5"><span class="tn">05</span><span class="tt">Leave the Radio On</span><span class="td">4:31</span></div>
  </div>
  <div class="cta"><span class="btn"><svg viewBox="0 0 24 24"><path d="M12 3v12m0 0l-5-5m5 5l5-5M5 20h14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="cta">{{cta}}</span></span><span class="date">Oct 16<br>vinyl, cd, digital</span></div>
</div>`,
  css: `
.v-audio-vinyl-drop{color:var(--ink);font-family:var(--font-body)}
.v-audio-vinyl-drop[data-backdrop="on"]{background:linear-gradient(125deg,color-mix(in srgb,var(--paper) 82%,#fff) 0%,var(--paper) 48%,color-mix(in srgb,var(--paper) 72%,var(--secondary)) 100%)}
.v-audio-vinyl-drop[data-backdrop="off"] .b1,.v-audio-vinyl-drop[data-backdrop="off"] .b2,.v-audio-vinyl-drop[data-backdrop="off"] .shadow{display:none}
.v-audio-vinyl-drop .b1{position:absolute;left:-12cqw;top:-24cqw;width:56cqw;height:56cqw;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 24%,transparent),transparent 65%);filter:blur(2cqw);animation:audio-vinyl-drop-d1 6s ease-in-out infinite}
.v-audio-vinyl-drop .b2{position:absolute;right:-10cqw;bottom:-26cqw;width:50cqw;height:50cqw;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--secondary) 45%,transparent),transparent 65%);filter:blur(2cqw);animation:audio-vinyl-drop-d2 6s ease-in-out infinite}
.v-audio-vinyl-drop .recw{position:absolute;left:4cqw;top:11.2cqw;width:33cqw;height:33cqw}
.v-audio-vinyl-drop .rec{position:absolute;left:0;top:0;width:33cqw;height:33cqw;animation:audio-vinyl-drop-rec 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .shadow{position:absolute;left:-2cqw;top:31cqw;width:58cqw;height:4cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--ink) 30%,transparent),transparent);filter:blur(.6cqw)}
.v-audio-vinyl-drop .vinyl{position:absolute;left:1cqw;top:1cqw;width:31cqw;height:31cqw;animation:audio-vinyl-drop-slide 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-vinyl-drop .disc{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle closest-side,transparent 0 34%,rgba(255,255,255,.08) 34.5% 35.2%,transparent 35.8% 63%,rgba(255,255,255,.07) 63.5% 64.2%,transparent 64.8% 96%,#0c0b0f 96.5%),repeating-radial-gradient(circle closest-side,#141218 0 .32cqw,#26222d .32cqw .64cqw);box-shadow:0 2.4cqw 4cqw -1.2cqw rgba(20,15,50,.55);animation:audio-vinyl-drop-spin 6s linear infinite}
.v-audio-vinyl-drop .label{position:absolute;left:10.5cqw;top:10.5cqw;width:10cqw;height:10cqw;border-radius:50%;background:conic-gradient(from 210deg,var(--secondary),var(--accent),color-mix(in srgb,var(--accent) 30%,#fff),color-mix(in srgb,var(--secondary) 40%,#fff),var(--secondary));box-shadow:inset 0 0 0 .25cqw rgba(0,0,0,.2)}
.v-audio-vinyl-drop .label::after{content:"";position:absolute;left:4.45cqw;top:4.45cqw;width:1.1cqw;height:1.1cqw;border-radius:50%;background:#141218}
.v-audio-vinyl-drop .lb{position:absolute;left:0;right:0;top:6.7cqw;text-align:center;font:500 .85cqw/1 var(--font-mono);color:rgba(20,15,50,.8)}
.v-audio-vinyl-drop .sheen{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 30deg,transparent 0deg,rgba(255,255,255,.17) 28deg,transparent 60deg,transparent 180deg,rgba(255,255,255,.11) 208deg,transparent 240deg)}
.v-audio-vinyl-drop .sleeve{position:absolute;inset:0;border-radius:.8cqw;overflow:hidden;background:radial-gradient(120% 90% at 30% 20%,color-mix(in srgb,var(--accent) 45%,#1a1440) 0%,color-mix(in srgb,var(--accent) 22%,#110c2c) 60%,#0c0920 100%);box-shadow:0 3cqw 5cqw -1.6cqw rgba(20,15,50,.5),0 .5cqw 1cqw rgba(20,15,50,.25)}
.v-audio-vinyl-drop .orb{position:absolute;left:5.5cqw;top:5.5cqw;width:22cqw;height:22cqw;border-radius:50%;background:conic-gradient(from 210deg,var(--secondary),var(--accent),color-mix(in srgb,var(--accent) 30%,#fff),color-mix(in srgb,var(--secondary) 40%,#fff),var(--secondary));animation:audio-vinyl-drop-orb 6s linear infinite}
.v-audio-vinyl-drop .orbhl{position:absolute;left:5.5cqw;top:5.5cqw;width:22cqw;height:22cqw;border-radius:50%;background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.95) 0,rgba(255,255,255,.4) 10%,transparent 30%);box-shadow:inset -2.4cqw -2.8cqw 4cqw rgba(12,9,32,.6),0 0 6cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-audio-vinyl-drop .sc{position:absolute;left:2.2cqw;top:2.2cqw;font:500 1.1cqw/1 var(--font-mono);color:rgba(241,236,255,.7)}
.v-audio-vinyl-drop .gloss{position:absolute;top:-10%;bottom:-10%;left:0;width:40%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.18) 50%,transparent);animation:audio-vinyl-drop-gloss 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-vinyl-drop .col{position:absolute;left:60cqw;top:0;width:35cqw;height:100%}
.v-audio-vinyl-drop .pill{position:absolute;left:0;top:6.2cqw;display:inline-flex;align-items:center;gap:.9cqw;padding:.7cqw 1.5cqw;border-radius:4cqw;background:color-mix(in srgb,var(--paper) 55%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent),0 .6cqw 1.6cqw -.6cqw rgba(20,15,50,.25);font-size:1.55cqw;line-height:1.25;font-weight:600;white-space:nowrap;animation:audio-vinyl-drop-i1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .dot{width:1cqw;height:1cqw;border-radius:50%;flex:none;background:var(--secondary);box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--secondary) 25%,transparent);animation:audio-vinyl-drop-blink 1s ease-in-out infinite}
.v-audio-vinyl-drop .h{position:absolute;left:0;right:0;top:10.6cqw;font-family:var(--font-display);font-weight:700;font-size:4.9cqw;line-height:1.2;letter-spacing:-.035em}
.v-audio-vinyl-drop .h .w{--delay:calc(1.2s + var(--i) * .18s);display:inline-block;line-height:1.2;animation:audio-vinyl-drop-hw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .by{position:absolute;left:0;top:23cqw;font-size:2cqw;line-height:1.25;font-weight:500;color:color-mix(in srgb,var(--ink) 75%,transparent);animation:audio-vinyl-drop-i2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .tracks{position:absolute;left:0;right:0;top:27cqw}
.v-audio-vinyl-drop .t{position:relative;display:grid;grid-template-columns:3.4cqw 1fr auto;align-items:center;height:3.4cqw;padding:0 1cqw;font-size:1.5cqw;border-bottom:1px solid color-mix(in srgb,var(--ink) 12%,transparent);isolation:isolate}
.v-audio-vinyl-drop .t1{--delay:0s;animation:audio-vinyl-drop-t 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .t2{--delay:.12s;animation:audio-vinyl-drop-t 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .t3{--delay:.24s;animation:audio-vinyl-drop-t 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .t4{--delay:.36s;animation:audio-vinyl-drop-t 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .t5{--delay:.48s;animation:audio-vinyl-drop-t 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .tn,.v-audio-vinyl-drop .td{font:500 1.2cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-audio-vinyl-drop .tt{font-weight:500}
.v-audio-vinyl-drop .now{border-bottom-color:transparent}
.v-audio-vinyl-drop .now .tt{font-weight:600}
.v-audio-vinyl-drop .now::before{content:"";position:absolute;inset:0 -.3cqw;border-radius:.8cqw;background:color-mix(in srgb,var(--paper) 50%,#fff);box-shadow:0 .8cqw 2cqw -1cqw rgba(20,15,50,.35);z-index:-1;--delay:0s;animation:audio-vinyl-drop-now 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .now .tt,.v-audio-vinyl-drop .now .td{color:#1b1446}
.v-audio-vinyl-drop .eq{display:flex;gap:.25cqw;align-items:flex-end;height:1.6cqw}
.v-audio-vinyl-drop .eq i{display:block;width:.4cqw;height:100%;border-radius:.2cqw;background:var(--accent);transform-origin:50% 100%;animation:audio-vinyl-drop-eq .6s ease-in-out infinite}
.v-audio-vinyl-drop .eq i:nth-child(2){animation-duration:.5s}
.v-audio-vinyl-drop .eq i:nth-child(3){animation-duration:.75s}
.v-audio-vinyl-drop .cta{position:absolute;left:0;right:0;top:46.2cqw;display:flex;align-items:center;gap:1.6cqw;animation:audio-vinyl-drop-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-vinyl-drop .btn{display:inline-flex;white-space:nowrap;align-items:center;gap:.8cqw;padding:1cqw 2.2cqw;border-radius:4cqw;background:var(--ink);color:var(--paper);font-size:1.6cqw;line-height:1.25;font-weight:600;box-shadow:0 1cqw 2cqw -1cqw rgba(20,15,50,.6)}
.v-audio-vinyl-drop .btn svg{width:1.6cqw;height:1.6cqw}
.v-audio-vinyl-drop .date{white-space:nowrap;font:500 1.3cqw/1.4 var(--font-mono);color:color-mix(in srgb,var(--ink) 70%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-audio-vinyl-drop .recw{left:6cqw;top:15cqh;width:52cqw;height:52cqw}
  .v-audio-vinyl-drop .rec{zoom:1.5758}
  .v-audio-vinyl-drop .vinyl{animation-name:audio-vinyl-drop-slidev}
  .v-audio-vinyl-drop .col{position:static}
  .v-audio-vinyl-drop .pill{left:8cqw;top:6.5cqh;font-size:5.4cqw;gap:2.4cqw;padding:2cqw 4cqw;border-radius:8cqw}
  .v-audio-vinyl-drop .dot{width:2.6cqw;height:2.6cqw}
  .v-audio-vinyl-drop .h{left:8cqw;right:8cqw;top:47cqh;font-size:14cqw}
  .v-audio-vinyl-drop .by{left:8cqw;top:auto;bottom:24cqh;font-size:6.4cqw}
  .v-audio-vinyl-drop .tracks{display:none}
  .v-audio-vinyl-drop .cta{left:8cqw;right:8cqw;top:auto;bottom:8cqh;gap:4cqw}
  .v-audio-vinyl-drop .btn{font-size:6cqw;gap:2.4cqw;padding:3cqw 6cqw;border-radius:10cqw}
  .v-audio-vinyl-drop .btn svg{width:5.6cqw;height:5.6cqw}
  .v-audio-vinyl-drop .date{font-size:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-vinyl-drop .recw{left:6cqw;top:22cqh;width:40cqw;height:40cqw}
  .v-audio-vinyl-drop .rec{zoom:1.2121}
  .v-audio-vinyl-drop .vinyl{animation-name:audio-vinyl-drop-slidev}
  .v-audio-vinyl-drop .col{left:6cqw;width:88cqw}
  .v-audio-vinyl-drop .pill{top:8cqh;font-size:2.4cqw;gap:1.4cqw;padding:1.1cqw 2.2cqw}
  .v-audio-vinyl-drop .dot{width:1.4cqw;height:1.4cqw}
  .v-audio-vinyl-drop .h{top:68cqh;right:30cqw;font-size:7.4cqw}
  .v-audio-vinyl-drop .by{top:79cqh;font-size:3cqw}
  .v-audio-vinyl-drop .tracks{display:none}
  .v-audio-vinyl-drop .cta{left:auto;right:0;top:auto;bottom:7cqh;flex-direction:column;align-items:flex-end;gap:1.4cqw}
  .v-audio-vinyl-drop .btn{font-size:2.8cqw;gap:1.2cqw;padding:1.6cqw 3.2cqw}
  .v-audio-vinyl-drop .btn svg{width:2.6cqw;height:2.6cqw}
  .v-audio-vinyl-drop .date{font-size:1.9cqw;text-align:right}
}
@keyframes audio-vinyl-drop-d1{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,3cqw)}}
@keyframes audio-vinyl-drop-d2{0%,100%{transform:translate(0,0)}50%{transform:translate(-5cqw,-3cqw)}}
@keyframes audio-vinyl-drop-rec{0%,2%{opacity:0;transform:translateY(7cqw) rotate(-5deg)}18%,100%{opacity:1;transform:translateY(0) rotate(0deg)}}
@keyframes audio-vinyl-drop-slide{0%,15%{transform:translateX(0)}32%,100%{transform:translateX(21cqw)}}
@keyframes audio-vinyl-drop-slidev{0%,15%{transform:translateX(0)}32%,100%{transform:translateX(21cqw)}}
@keyframes audio-vinyl-drop-spin{from{transform:rotate(0deg)}to{transform:rotate(1080deg)}}
@keyframes audio-vinyl-drop-orb{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes audio-vinyl-drop-gloss{0%,20%{transform:translateX(-120%)}40%,100%{transform:translateX(300%)}}
@keyframes audio-vinyl-drop-blink{0%,100%{transform:scale(1)}50%{transform:scale(.6)}}
@keyframes audio-vinyl-drop-i1{0%,18%{opacity:0;transform:translateY(1.5cqw)}28%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-vinyl-drop-hw{0%{opacity:0;transform:translateY(60%);clip-path:inset(0 -10% 60% -10%)}12%,100%{opacity:1;transform:none;clip-path:inset(-30% -10% -30% -10%)}}
@keyframes audio-vinyl-drop-i2{0%,26%{opacity:0;transform:translateY(1.2cqw)}36%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-vinyl-drop-t{0%,28%{opacity:0;transform:translateX(2.5cqw)}36%,100%{opacity:1;transform:translateX(0)}}
@keyframes audio-vinyl-drop-now{0%,41%{opacity:0;transform:scaleX(.94)}47%,100%{opacity:1;transform:scaleX(1)}}
@keyframes audio-vinyl-drop-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes audio-vinyl-drop-cta{0%,38%{opacity:0;transform:translateY(1.5cqw)}47%,100%{opacity:1;transform:translateY(0)}}
`,
};

export const audioOnAir: SceneSpec = {
  id: "audio-on-air",
  slug: "mg-audio-on-air",
  name: "On Air Live Session",
  kind: "scene",
  job: "titles",
  language: "aura",
  mechanic: "neon-sign-flicker-vu-meters",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#F6E9DC", accent: "#FF4A3D", secondary: "#F3C982", paper: "#0D0608" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["live", "radio", "session", "neon"],
  fields: [
    { key: "sign", label: "Neon sign", default: "on air", maxChars: 10, role: "label" },
    { key: "kicker", label: "Kicker", default: "tidewell presents", maxChars: 26, role: "kicker" },
    { key: "title", label: "Session title", default: "The Late Session", maxChars: 26, role: "headline" },
    { key: "sub", label: "Line-up", default: "Live from studio b with the Ezra Moon Quartet", maxChars: 56, role: "caption" },
  ],
  html: `<div class="slats"></div><div class="room"></div><div class="haze"></div>
<svg class="mic" viewBox="0 0 100 220"><defs><linearGradient id="audio-on-air-body" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1e181a"/><stop offset=".45" stop-color="#4a3f43"/><stop offset=".78" class="hl" stop-opacity=".85"/><stop offset="1" stop-color="#2a1416"/></linearGradient><pattern id="audio-on-air-grille" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".9" fill="#000" fill-opacity=".55"/></pattern></defs><rect x="47" y="136" width="6" height="84" fill="#241d20"/><path d="M14 66 v32 a36 36 0 0 0 72 0 v-32" fill="none" stroke="#2c2427" stroke-width="5"/><circle cx="14" cy="66" r="4.5" fill="#3a3033"/><circle cx="86" cy="66" r="4.5" fill="#3a3033"/><rect x="26" y="8" width="48" height="118" rx="24" fill="url(#audio-on-air-body)"/><rect x="26" y="8" width="48" height="58" rx="24" fill="url(#audio-on-air-grille)"/><rect x="24" y="64" width="52" height="9" rx="2" fill="#140f11"/><rect x="26" y="8" width="48" height="118" rx="24" fill="none" stroke="rgba(255,140,120,.4)" stroke-width="1"/></svg>
<div class="sign"><div class="off">{{sign}}</div><div class="on" data-21st-slot="sign">{{sign}}</div></div>
<div class="copy">
<div class="kick" data-21st-slot="kicker">{{kicker}}</div>
<div class="title" data-21st-slot="title">{{title|words}}</div>
<div class="sub" data-21st-slot="sub">{{sub}}</div>
<div class="vus">
  <div class="vu vu1"><svg class="scale" viewBox="0 0 150 100"><path d="M25.9 65.6 A60 60 0 0 1 124.1 65.6" fill="none" stroke="#3a2416" stroke-width="1.6"/><path d="M100.4 45.6 A60 60 0 0 1 124.1 65.6" fill="none" stroke="#c8281e" stroke-width="4"/><g stroke="#3a2416" stroke-width="1.6"><path d="M29 61.4L33.6 65.3M40.6 50.9L44 55.8M54.5 43.6L56.5 49.2M69.8 40.2L70.3 46.2M85.4 40.9L84.4 46.8"/></g><g stroke="#c8281e" stroke-width="1.6"><path d="M100.4 45.6L97.8 51.1M113.6 54L109.7 58.6"/></g><text class="st" x="27" y="54" font-size="8" fill="#3a2416">-20</text><text class="st" x="90" y="36" font-size="8" fill="#3a2416">0</text><text class="st" x="118" y="52" font-size="8" fill="#c8281e">+3</text><text class="st" x="75" y="80" font-size="12" text-anchor="middle" fill="#3a2416">vu</text></svg><div class="vl">l</div><div class="needle"></div><div class="cap"></div></div>
  <div class="vu vu2"><svg class="scale" viewBox="0 0 150 100"><path d="M25.9 65.6 A60 60 0 0 1 124.1 65.6" fill="none" stroke="#3a2416" stroke-width="1.6"/><path d="M100.4 45.6 A60 60 0 0 1 124.1 65.6" fill="none" stroke="#c8281e" stroke-width="4"/><g stroke="#3a2416" stroke-width="1.6"><path d="M29 61.4L33.6 65.3M40.6 50.9L44 55.8M54.5 43.6L56.5 49.2M69.8 40.2L70.3 46.2M85.4 40.9L84.4 46.8"/></g><g stroke="#c8281e" stroke-width="1.6"><path d="M100.4 45.6L97.8 51.1M113.6 54L109.7 58.6"/></g><text class="st" x="27" y="54" font-size="8" fill="#3a2416">-20</text><text class="st" x="90" y="36" font-size="8" fill="#3a2416">0</text><text class="st" x="118" y="52" font-size="8" fill="#c8281e">+3</text><text class="st" x="75" y="80" font-size="12" text-anchor="middle" fill="#3a2416">vu</text></svg><div class="vl">r</div><div class="needle"></div><div class="cap"></div></div>
  <div class="live"><div class="lrow"><span class="badge"><i></i>live</span><span class="clock">01:24:3<span class="dig"><span class="strip"><b>1</b><b>2</b><b>3</b><b>4</b><b>5</b><b>6</b></span></span></span></div><div class="lrow aud"><span class="avs"><i></i><i></i><i></i></span><span>4,812 listening</span></div></div>
</div>
</div>
<div class="foot"><span>tonight 23:00 · tidewell.fm/live</span><i></i></div>`,
  css: `
.v-audio-on-air{color:var(--ink);font-family:var(--font-body)}
.v-audio-on-air[data-backdrop="on"]{background:radial-gradient(120% 100% at 66% 0%,color-mix(in srgb,var(--paper) 85%,var(--accent)) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 60%,#000) 100%)}
.v-audio-on-air[data-backdrop="off"] .slats,.v-audio-on-air[data-backdrop="off"] .room,.v-audio-on-air[data-backdrop="off"] .haze{display:none}
.v-audio-on-air .slats{position:absolute;inset:0;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--ink) 4%,transparent) 0 .25cqw,transparent .25cqw 3.2cqw);-webkit-mask-image:linear-gradient(180deg,#000 0%,rgba(0,0,0,.35) 70%,transparent 100%);mask-image:linear-gradient(180deg,#000 0%,rgba(0,0,0,.35) 70%,transparent 100%)}
.v-audio-on-air .room{position:absolute;inset:0;background:radial-gradient(42% 52% at 53% 12%,color-mix(in srgb,var(--accent) 36%,transparent),transparent 70%),radial-gradient(30% 60% at 19% 66%,color-mix(in srgb,var(--accent) 15%,transparent),transparent 70%);animation:audio-on-air-flick 6s linear infinite}
.v-audio-on-air .haze{position:absolute;left:10cqw;top:18cqw;width:80cqw;height:30cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--ink) 8%,transparent),transparent);filter:blur(2cqw);animation:audio-on-air-haze 6s ease-in-out infinite}
.v-audio-on-air .mic{position:absolute;left:8cqw;top:10cqw;width:21cqw;height:46.2cqw;transform-origin:50% 100%;animation:audio-on-air-mic 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .mic .hl{stop-color:var(--accent)}
.v-audio-on-air .sign{position:absolute;left:40cqw;top:5.4cqw;width:26cqw;height:9.6cqw}
.v-audio-on-air .off,.v-audio-on-air .on{position:absolute;inset:0;display:grid;place-items:center;border-radius:1.4cqw;font-family:"Bricolage Grotesque",var(--font-body);font-weight:700;font-size:4.4cqw;line-height:1.2;letter-spacing:-.01em;white-space:nowrap;padding-bottom:.4cqw}
.v-audio-on-air .off{border:.35cqw solid color-mix(in srgb,var(--accent) 25%,#140607);color:color-mix(in srgb,var(--accent) 22%,#140607);background:linear-gradient(180deg,#1a0a0c,#120607);box-shadow:0 1cqw 2cqw rgba(0,0,0,.6)}
.v-audio-on-air .on{border:.35cqw solid color-mix(in srgb,var(--accent) 80%,#fff);color:#fff4f0;background:radial-gradient(120% 140% at 50% 50%,color-mix(in srgb,var(--accent) 55%,#400404),color-mix(in srgb,var(--accent) 35%,#200202));box-shadow:0 0 .8cqw var(--accent),0 0 3.4cqw color-mix(in srgb,var(--accent) 60%,transparent),0 0 8cqw color-mix(in srgb,var(--accent) 25%,transparent),inset 0 0 1.4cqw color-mix(in srgb,var(--accent) 60%,transparent);text-shadow:0 0 .4cqw color-mix(in srgb,var(--accent) 70%,#fff),0 0 1.2cqw var(--accent),0 0 2.8cqw var(--accent);animation:audio-on-air-flick 6s linear infinite}
.v-audio-on-air .copy{position:absolute;left:40cqw;right:4cqw;top:18.6cqw;display:flex;flex-direction:column;align-items:flex-start;gap:.5cqw}
.v-audio-on-air .kick{font:500 1.45cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 58%,transparent);animation:audio-on-air-a1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .title{align-self:stretch;margin-left:-.4cqw;font-family:var(--font-display);font-size:6cqw;line-height:1.3;letter-spacing:-.01em;animation:audio-on-air-a2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .title .w{display:inline-block;line-height:1.3}
.v-audio-on-air .title .w:last-child{font-style:italic;padding-right:.08em;color:color-mix(in srgb,var(--accent) 55%,var(--ink))}
.v-audio-on-air .sub{max-width:50cqw;font-size:1.75cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 72%,transparent);animation:audio-on-air-a3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .vus{margin-top:2cqw;display:flex;gap:1.4cqw}
.v-audio-on-air .vu{position:relative;flex:none;width:15cqw;height:10cqw;border-radius:.9cqw;overflow:hidden;background:radial-gradient(120% 110% at 50% 100%,color-mix(in srgb,var(--secondary) 40%,#fff4dc) 0%,var(--secondary) 55%,color-mix(in srgb,var(--secondary) 70%,#5a3410) 100%);box-shadow:inset 0 0 0 .3cqw #1a0f10,inset 0 0 1.6cqw rgba(60,20,0,.45),0 0 2.4cqw color-mix(in srgb,var(--secondary) 22%,transparent)}
.v-audio-on-air .vu1{animation:audio-on-air-a4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .vu2{animation:audio-on-air-a5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .scale{position:absolute;inset:0;width:100%;height:100%}
.v-audio-on-air .st{font-family:var(--font-mono);font-weight:600}
.v-audio-on-air .needle{position:absolute;left:7.38cqw;bottom:0;width:.24cqw;height:6.8cqw;border-radius:.2cqw;background:#1a0f10;transform-origin:50% 100%;animation:audio-on-air-n1 1.5s ease-in-out infinite}
.v-audio-on-air .vu2 .needle{animation-name:audio-on-air-n2;animation-duration:1.2s}
.v-audio-on-air .cap{position:absolute;left:6.3cqw;bottom:0;width:2.4cqw;height:1.2cqw;border-radius:1.2cqw 1.2cqw 0 0;background:#1a0f10}
.v-audio-on-air .vl{position:absolute;left:1.1cqw;bottom:.8cqw;font:600 1cqw/1 var(--font-mono);color:rgba(58,36,22,.7)}
.v-audio-on-air .live{flex:none;width:21.2cqw;height:10cqw;padding:1.3cqw 1.5cqw;border-radius:.9cqw;background:color-mix(in srgb,var(--ink) 5%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 12%,transparent);display:flex;flex-direction:column;justify-content:space-between;animation:audio-on-air-a6 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .lrow{display:flex;align-items:center;gap:1cqw}
.v-audio-on-air .badge{display:inline-flex;align-items:center;gap:.6cqw;padding:.45cqw .9cqw;border-radius:.5cqw;background:var(--accent);color:#fff;font:600 1.25cqw/1 var(--font-mono)}
.v-audio-on-air .badge i{display:block;width:.7cqw;height:.7cqw;border-radius:50%;background:#fff;animation:audio-on-air-blink 1s steps(1,end) infinite}
.v-audio-on-air .clock{display:flex;font:500 2.3cqw/1.2 var(--font-mono)}
.v-audio-on-air .dig{display:block;height:1.2em;overflow:hidden}
.v-audio-on-air .strip{display:block;animation:audio-on-air-tick 6s steps(6,end) infinite}
.v-audio-on-air .strip b{display:block;height:1.2em;font-weight:500}
.v-audio-on-air .avs{display:flex}
.v-audio-on-air .avs i{display:block;width:2.2cqw;height:2.2cqw;border-radius:50%;margin-right:-.7cqw;box-shadow:0 0 0 .25cqw var(--paper)}
.v-audio-on-air .avs i:nth-child(1){background:linear-gradient(135deg,#ff9a7a,#a3264f)}
.v-audio-on-air .avs i:nth-child(2){background:linear-gradient(135deg,#ffd27a,#c46a1c)}
.v-audio-on-air .avs i:nth-child(3){background:linear-gradient(135deg,#9fd3c7,#2a6b5e)}
.v-audio-on-air .aud{font-size:1.5cqw;color:color-mix(in srgb,var(--ink) 75%,transparent);gap:1.6cqw}
.v-audio-on-air .foot{position:absolute;left:40cqw;right:6cqw;top:49cqw;display:flex;align-items:center;gap:1.4cqw;font:500 1.35cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent);animation:audio-on-air-a6 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-on-air .foot i{display:block;flex:1;height:1px;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 60%,transparent),transparent)}
@container (max-aspect-ratio: 4/5){
  .v-audio-on-air .sign{left:20cqw;top:6cqh;width:60cqw;height:22cqw}
  .v-audio-on-air .off,.v-audio-on-air .on{font-size:10cqw;border-radius:3cqw;border-width:.8cqw}
  .v-audio-on-air .copy{display:contents}
  .v-audio-on-air .kick{position:absolute;left:8cqw;right:8cqw;top:20cqh;text-align:center;font-size:5.4cqw}
  .v-audio-on-air .title{position:absolute;margin:0;left:8cqw;right:8cqw;top:23.8cqh;text-align:center;font-size:12cqw}
  .v-audio-on-air .mic{left:35cqw;top:42cqh;width:30cqw;height:66cqw}
  .v-audio-on-air .vus{position:absolute;margin:0;left:8cqw;right:8cqw;top:66cqh;justify-content:space-between}
  .v-audio-on-air .vu{zoom:2.6}
  .v-audio-on-air .live{display:none}
  .v-audio-on-air .sub{position:absolute;max-width:none;left:8cqw;right:8cqw;bottom:7cqh;text-align:center;font-size:5.6cqw}
  .v-audio-on-air .foot{display:none}
  .v-audio-on-air .haze{left:-10cqw;top:30cqh;width:120cqw;height:60cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-on-air .mic{left:4cqw;top:18cqh;width:30cqw;height:66cqw}
  .v-audio-on-air .sign{left:38cqw;top:11cqh;width:36cqw;height:13.4cqw}
  .v-audio-on-air .off,.v-audio-on-air .on{font-size:6.2cqw;border-radius:2cqw;border-width:.5cqw}
  .v-audio-on-air .copy{left:38cqw;right:4cqw;top:28cqh;gap:.8cqw}
  .v-audio-on-air .kick{font-size:2.2cqw}
  .v-audio-on-air .title{font-size:7.6cqw}
  .v-audio-on-air .sub{max-width:54cqw;font-size:2.6cqw}
  .v-audio-on-air .vus{margin-top:2.4cqw;gap:2cqw}
  .v-audio-on-air .vu{zoom:1.7}
  .v-audio-on-air .live{display:none}
  .v-audio-on-air .foot{left:38cqw;top:auto;bottom:9cqh;font-size:1.9cqw}
}
@keyframes audio-on-air-flick{0%,4%{opacity:0}5%{opacity:.9}6%{opacity:.1}7.5%{opacity:1}8.5%{opacity:.25}10%,100%{opacity:1}}
@keyframes audio-on-air-haze{0%,100%{transform:translateX(-4cqw) scale(1)}50%{transform:translateX(4cqw) scale(1.1)}}
@keyframes audio-on-air-mic{0%,8%{opacity:0;transform:translateY(3cqw) rotate(0deg)}24%{opacity:1;transform:translateY(0) rotate(-1deg)}55%,100%{opacity:1;transform:translateY(0) rotate(0deg)}}
@keyframes audio-on-air-a1{0%,14%{opacity:0;transform:translateY(1cqw)}26%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-on-air-a2{0%,16%{opacity:0;transform:translateY(1.6cqw);filter:blur(.8cqw)}30%,100%{opacity:1;transform:translateY(0);filter:blur(0)}}
@keyframes audio-on-air-a3{0%,21%{opacity:0;transform:translateY(1.2cqw)}33%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-on-air-a4{0%,25%{opacity:0;transform:translateY(2cqw)}37%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-on-air-a5{0%,28%{opacity:0;transform:translateY(2cqw)}40%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-on-air-a6{0%,31%{opacity:0;transform:translateY(2cqw)}43%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-on-air-n1{0%,100%{transform:rotate(-44deg)}10%{transform:rotate(-8deg)}18%{transform:rotate(-20deg)}30%{transform:rotate(18deg)}42%{transform:rotate(2deg)}55%{transform:rotate(34deg)}66%{transform:rotate(10deg)}78%{transform:rotate(26deg)}90%{transform:rotate(-18deg)}}
@keyframes audio-on-air-n2{0%,100%{transform:rotate(-30deg)}14%{transform:rotate(12deg)}26%{transform:rotate(-4deg)}40%{transform:rotate(30deg)}52%{transform:rotate(8deg)}66%{transform:rotate(40deg)}80%{transform:rotate(-6deg)}}
@keyframes audio-on-air-blink{0%,100%{opacity:1}50%{opacity:.15}}
@keyframes audio-on-air-tick{from{transform:translateY(0)}to{transform:translateY(-100%)}}
`,
};

export const audioChartClimb: SceneSpec = {
  id: "audio-chart-climb",
  slug: "mg-audio-chart-climb",
  name: "Chart Climb To One",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "row-overtakes-to-rank-one",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#0D1020", accent: "#3047FF", secondary: "#FF5B35", paper: "#EEF0F6" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["podcast", "chart", "ranking", "growth"],
  fields: [
    { key: "kicker", label: "Kicker", default: "season 3 · plays to date", maxChars: 30, role: "kicker" },
    { key: "plays", label: "Big number", default: "2.4M", maxChars: 6, role: "value" },
    { key: "label", label: "Number label", default: "plays across every platform", maxChars: 34, role: "label" },
    { key: "show", label: "Your show", default: "Slow Signal", maxChars: 20, role: "name" },
  ],
  html: `<div class="grid"></div><div class="blob"></div>
<div class="kick"><i></i><span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="num" data-21st-slot="plays">{{plays|chars}}</div>
<div class="lbl" data-21st-slot="label">{{label}}</div>
<div class="spark"><svg viewBox="0 0 360 120" preserveAspectRatio="none"><defs><linearGradient id="audio-chart-climb-area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".28"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs><path d="M0 110 C40 106 60 100 90 94 S150 86 180 72 S240 54 270 42 S330 20 352 12 L352 120 L0 120 Z" fill="url(#audio-chart-climb-area)"/><path d="M0 110 C40 106 60 100 90 94 S150 86 180 72 S240 54 270 42 S330 20 352 12" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg><div class="end"></div></div>
<div class="wk"><span>wk 1</span><span>wk 4</span><span>wk 8</span><span>wk 12</span></div>
<div class="pills"><span class="pill pc"><svg viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-7M14 8h6v6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>+312% vs season 2</span><span class="pill"><svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" fill="#ffb020"/></svg>4.9 · 18k ratings</span></div>
<div class="note">#1 this week</div>
<svg class="arrow" viewBox="0 0 84 36"><path d="M4 4 C14 22 40 26 76 17 M66 11 L77 17 L67 25" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
<div class="card">
  <div class="ch"><span class="ct">Top podcasts · arts</span><span class="cw"><i></i>this week</span></div>
  <div class="ranks"><div class="rk rk1">1</div><div class="rk">2</div><div class="rk">3</div><div class="rk">4</div><div class="rk">5</div></div>
  <div class="rows">
    <div class="row s1"><span class="cv cv1"></span><span class="tx"><span class="tn">Night Shift Stories</span><span class="tp">Halden Audio</span></span><span class="wks">31 wks</span></div>
    <div class="row s2"><span class="cv cv2"></span><span class="tx"><span class="tn">The Long Table</span><span class="tp">Common Room Media</span></span><span class="wks">12 wks</span></div>
    <div class="row s3"><span class="cv cv3"></span><span class="tx"><span class="tn">Field Notes</span><span class="tp">Brightwater</span></span><span class="wks">8 wks</span></div>
    <div class="row s4"><span class="cv cv4"></span><span class="tx"><span class="tn">Small Hours</span><span class="tp">Parlor Pods</span></span><span class="wks">5 wks</span></div>
    <div class="row me"><span class="cv cvme"></span><span class="tx"><span class="tn" data-21st-slot="show">{{show}}</span><span class="tp">new season</span></span><span class="up"><svg viewBox="0 0 24 24"><path d="M12 4l9 15H3z" fill="currentColor"/></svg>4</span></div>
  </div>
</div>`,
  css: `
.v-audio-chart-climb{color:var(--ink);font-family:var(--font-body)}
.v-audio-chart-climb[data-backdrop="on"]{background:linear-gradient(160deg,color-mix(in srgb,var(--paper) 95%,var(--ink)) 0%,color-mix(in srgb,var(--paper) 88%,var(--ink)) 100%)}
.v-audio-chart-climb[data-backdrop="off"] .grid,.v-audio-chart-climb[data-backdrop="off"] .blob{display:none}
.v-audio-chart-climb .grid{position:absolute;inset:0;background-image:linear-gradient(color-mix(in srgb,var(--ink) 5%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--ink) 5%,transparent) 1px,transparent 1px);background-size:5cqw 5cqw;-webkit-mask-image:radial-gradient(80% 90% at 30% 40%,#000,transparent);mask-image:radial-gradient(80% 90% at 30% 40%,#000,transparent)}
.v-audio-chart-climb .blob{position:absolute;left:30cqw;top:-10cqw;width:50cqw;height:50cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 16%,transparent),transparent);animation:audio-chart-climb-blob 6s ease-in-out infinite}
.v-audio-chart-climb .kick{position:absolute;left:6cqw;top:8cqw;display:flex;align-items:center;gap:1cqw;font:500 1.6cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 70%,var(--accent));animation:audio-chart-climb-k 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .kick i{display:block;width:1cqw;height:1cqw;border-radius:50%;background:var(--accent);flex:none}
.v-audio-chart-climb .num{position:absolute;left:6cqw;top:10.6cqw;font-family:var(--font-display);font-size:10.5cqw;font-weight:700;line-height:1.32;letter-spacing:-.045em;white-space:nowrap}
.v-audio-chart-climb .num .c{--delay:calc(.3s + var(--i) * .12s);display:inline-block;line-height:1.32;animation:audio-chart-climb-roll 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .lbl{position:absolute;left:6cqw;top:23.6cqw;font-size:2cqw;line-height:1.25;color:color-mix(in srgb,var(--ink) 72%,transparent);animation:audio-chart-climb-l 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .spark{position:absolute;left:6cqw;top:28cqw;width:36cqw;height:12cqw;color:var(--accent);animation:audio-chart-climb-sp 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .spark svg{display:block;width:100%;height:100%;overflow:visible}
.v-audio-chart-climb .end{position:absolute;right:.8%;top:10%;width:1.4cqw;height:1.4cqw;margin:-.7cqw -.7cqw 0 0;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .4cqw var(--paper);animation:audio-chart-climb-end 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .end::after{content:"";position:absolute;inset:-.4cqw;border-radius:50%;box-shadow:0 0 0 .3cqw color-mix(in srgb,var(--accent) 50%,transparent);animation:audio-chart-climb-ping 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .wk{position:absolute;left:6cqw;width:36cqw;top:41cqw;display:flex;justify-content:space-between;font:500 1.15cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent);animation:audio-chart-climb-l 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .pills{position:absolute;left:6cqw;top:45.6cqw;display:flex;gap:1cqw;animation:audio-chart-climb-pl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .pill{display:inline-flex;align-items:center;gap:.6cqw;padding:.7cqw 1.3cqw;border-radius:3cqw;font-size:1.45cqw;font-weight:600;white-space:nowrap;background:color-mix(in srgb,var(--paper) 60%,#fff);color:#0d1020;box-shadow:inset 0 0 0 1px rgba(13,16,32,.1)}
.v-audio-chart-climb .pill svg{width:1.4cqw;height:1.4cqw}
.v-audio-chart-climb .pc{background:var(--secondary);color:#fff;box-shadow:none}
.v-audio-chart-climb .note{position:absolute;left:31cqw;top:12.4cqw;font-family:var(--font-display);font-weight:700;font-style:italic;font-size:2.4cqw;line-height:1.2;color:var(--secondary);transform:rotate(-5deg);animation:audio-chart-climb-note 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .arrow{position:absolute;left:39.4cqw;top:15.6cqw;width:8.4cqw;height:3.6cqw;color:var(--secondary);animation:audio-chart-climb-arr 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .card{position:absolute;left:48cqw;top:6.5cqw;width:46cqw;height:43.5cqw;border-radius:1.8cqw;background:var(--paper);color:var(--ink);box-shadow:0 2.4cqw 5cqw -2cqw rgba(20,30,80,.28),0 .3cqw .8cqw rgba(20,30,80,.08),inset 0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent);animation:audio-chart-climb-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .ch{position:absolute;left:2.4cqw;right:2.4cqw;top:2.4cqw;display:flex;align-items:center;gap:1cqw}
.v-audio-chart-climb .ct{font-size:2cqw;font-weight:700;letter-spacing:-.02em}
.v-audio-chart-climb .cw{margin-left:auto;display:flex;align-items:center;gap:.7cqw;font:500 1.3cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-audio-chart-climb .cw i{display:block;width:.8cqw;height:.8cqw;border-radius:50%;background:#2fbf71;animation:audio-chart-climb-blink 1s ease-in-out infinite}
.v-audio-chart-climb .ranks{position:absolute;left:2.2cqw;top:7.6cqw;width:3cqw}
.v-audio-chart-climb .rk{position:relative;display:grid;place-items:center;height:5.4cqw;margin-bottom:.8cqw;font:600 1.7cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 40%,transparent)}
.v-audio-chart-climb .rk1{color:var(--accent)}
.v-audio-chart-climb .rk1::before{content:"";position:absolute;left:50%;top:50%;width:3.4cqw;height:3.4cqw;margin:-1.7cqw 0 0 -1.7cqw;border-radius:50%;background:color-mix(in srgb,var(--accent) 14%,transparent);animation:audio-chart-climb-rk 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .rows{position:absolute;left:6cqw;right:2.2cqw;top:7.6cqw;height:30.2cqw}
.v-audio-chart-climb .row{position:absolute;left:0;right:0;height:5.4cqw;display:flex;align-items:center;gap:1.3cqw;padding:0 1.2cqw 0 .8cqw;border-radius:.9cqw;background:color-mix(in srgb,var(--ink) 5%,transparent)}
.v-audio-chart-climb .s1{top:0;animation:audio-chart-climb-m4 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .s2{top:6.2cqw;animation:audio-chart-climb-m3 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .s3{top:12.4cqw;animation:audio-chart-climb-m2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .s4{top:18.6cqw;animation:audio-chart-climb-m1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .me{top:24.8cqw;z-index:2;background:var(--accent);color:var(--paper);box-shadow:0 1.2cqw 2.4cqw -1cqw color-mix(in srgb,var(--accent) 55%,transparent);animation:audio-chart-climb-me 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-chart-climb .cv{flex:none;width:3.8cqw;height:3.8cqw;border-radius:.6cqw}
.v-audio-chart-climb .cv1{background:linear-gradient(135deg,#0f1b3d,#4f5bd5)}
.v-audio-chart-climb .cv2{background:linear-gradient(135deg,#f7b267,#f4845f)}
.v-audio-chart-climb .cv3{background:linear-gradient(135deg,#7bd389,#2a9d8f)}
.v-audio-chart-climb .cv4{background:linear-gradient(135deg,#c77dff,#7b2cbf)}
.v-audio-chart-climb .cvme{background:repeating-radial-gradient(circle at 70% 30%,rgba(255,255,255,.2) 0 .1cqw,transparent .1cqw .7cqw),radial-gradient(circle at 70% 30%,#ffe2b0 0,var(--secondary) 30%,transparent 60%),linear-gradient(155deg,var(--secondary),color-mix(in srgb,var(--secondary) 45%,#3a0a2a) 55%,#1a0b2a);box-shadow:0 0 0 .2cqw rgba(255,255,255,.5)}
.v-audio-chart-climb .tx{flex:1;min-width:0}
.v-audio-chart-climb .tn{display:block;font-size:1.7cqw;line-height:1.25;font-weight:600;letter-spacing:-.015em;white-space:nowrap}
.v-audio-chart-climb .tp{display:block;font-size:1.25cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-audio-chart-climb .me .tp{color:color-mix(in srgb,var(--paper) 75%,transparent)}
.v-audio-chart-climb .wks{font:500 1.2cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-audio-chart-climb .up{display:inline-flex;align-items:center;gap:.4cqw;padding:.45cqw .9cqw;border-radius:2cqw;background:var(--paper);color:var(--accent);font:600 1.3cqw/1 var(--font-mono);animation:audio-chart-climb-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-chart-climb .up svg{width:1cqw;height:1cqw}
@container (max-aspect-ratio: 4/5){
  .v-audio-chart-climb .kick{left:8cqw;top:6cqh;font-size:5.4cqw;gap:2.6cqw}
  .v-audio-chart-climb .kick i{width:3cqw;height:3cqw}
  .v-audio-chart-climb .num{left:8cqw;top:9.5cqh;max-width:86cqw;font-size:26cqw;white-space:normal}
  .v-audio-chart-climb .spark{left:8cqw;top:28cqh;width:84cqw;height:9cqh}
  .v-audio-chart-climb .end{width:3cqw;height:3cqw;margin:-1.5cqw -1.5cqw 0 0}
  .v-audio-chart-climb .wk,.v-audio-chart-climb .pills{display:none}
  .v-audio-chart-climb .note{display:none}
  .v-audio-chart-climb .arrow{display:none}
  .v-audio-chart-climb .card{zoom:1.8;left:calc(8cqw / 1.8);top:calc(40cqh / 1.8);width:calc(84cqw / 1.8)}
  .v-audio-chart-climb .ct{font-size:2.2cqw}
  .v-audio-chart-climb .me .tn{font-size:3.1cqw}
  .v-audio-chart-climb .me .tp{display:none}
  .v-audio-chart-climb .lbl{left:8cqw;right:8cqw;top:auto;bottom:6.5cqh;font-size:5.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-chart-climb .kick{left:6cqw;top:7cqh;font-size:2.2cqw}
  .v-audio-chart-climb .num{left:6cqw;top:11cqh;font-size:15cqw}
  .v-audio-chart-climb .lbl{left:6cqw;top:30cqh;font-size:2.6cqw}
  .v-audio-chart-climb .note{left:auto;right:8cqw;top:12cqh;font-size:3.8cqw}
  .v-audio-chart-climb .arrow{left:auto;right:8cqw;top:18cqh;width:10cqw;height:4.4cqw;transform:rotate(70deg)}
  .v-audio-chart-climb .spark{left:6cqw;top:44cqh;width:24cqw;height:16cqh}
  .v-audio-chart-climb .wk{left:6cqw;width:24cqw;top:62cqh;font-size:1.5cqw}
  .v-audio-chart-climb .pills{left:6cqw;top:70cqh;flex-direction:column;align-items:flex-start;gap:1.2cqw}
  .v-audio-chart-climb .pill{font-size:1.8cqw;padding:1cqw 1.6cqw}
  .v-audio-chart-climb .pill svg{width:1.8cqw;height:1.8cqw}
  .v-audio-chart-climb .card{zoom:1.3;left:calc(34cqw / 1.3);top:calc(40cqh / 1.3)}
  .v-audio-chart-climb .me .tn{font-size:1.8cqw}
}
@keyframes audio-chart-climb-blob{0%,100%{transform:translate(0,0)}50%{transform:translate(-8cqw,6cqw)}}
@keyframes audio-chart-climb-k{0%,3%{opacity:0;transform:translateY(1.5cqw)}14%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-chart-climb-l{0%,7%{opacity:0;transform:translateY(1.5cqw)}18%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-chart-climb-roll{0%{opacity:0;transform:translateY(-.5em);filter:blur(.06em)}10%,100%{opacity:1;transform:none;filter:blur(0)}}
@keyframes audio-chart-climb-sp{0%,12%{clip-path:inset(-2cqw 100% -2cqw -2cqw)}38%,100%{clip-path:inset(-2cqw -2cqw -2cqw -2cqw)}}
@keyframes audio-chart-climb-end{0%,36%{opacity:0;transform:scale(0)}41%,100%{opacity:1;transform:scale(1)}}
@keyframes audio-chart-climb-ping{0%{transform:scale(1);opacity:1}70%,100%{transform:scale(2.2);opacity:0}}
@keyframes audio-chart-climb-pl{0%,34%{opacity:0;transform:translateY(1.5cqw)}45%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-chart-climb-note{0%,41%{opacity:0;clip-path:inset(-1cqw 100% -1cqw 0)}42%{opacity:1;clip-path:inset(-1cqw 100% -1cqw 0)}48%,100%{opacity:1;clip-path:inset(-1cqw -1cqw -1cqw 0)}}
@keyframes audio-chart-climb-arr{0%,45%{clip-path:inset(0 100% 0 0)}50%,100%{clip-path:inset(0 0 0 0)}}
@keyframes audio-chart-climb-card{0%,3%{opacity:0;transform:translateY(3cqw)}16%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-chart-climb-blink{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes audio-chart-climb-rk{0%,41%{transform:scale(0)}46%,100%{transform:scale(1)}}
@keyframes audio-chart-climb-me{0%,20%{transform:translateY(0) scale(1)}24%{transform:translateY(0) scale(1.04)}29%{transform:translateY(-6.2cqw) scale(1.04)}33%{transform:translateY(-12.4cqw) scale(1.04)}37%{transform:translateY(-18.6cqw) scale(1.04)}41%{transform:translateY(-24.8cqw) scale(1.04)}45%,100%{transform:translateY(-24.8cqw) scale(1)}}
@keyframes audio-chart-climb-m1{0%,25%{transform:translateY(0)}29%,100%{transform:translateY(6.2cqw)}}
@keyframes audio-chart-climb-m2{0%,29%{transform:translateY(0)}33%,100%{transform:translateY(6.2cqw)}}
@keyframes audio-chart-climb-m3{0%,33%{transform:translateY(0)}37%,100%{transform:translateY(6.2cqw)}}
@keyframes audio-chart-climb-m4{0%,37%{transform:translateY(0)}41%,100%{transform:translateY(6.2cqw)}}
@keyframes audio-chart-climb-up{0%,42%{opacity:0;transform:scale(.6)}47%,100%{opacity:1;transform:scale(1)}}
`,
};

export const audioKaraoke: SceneSpec = {
  id: "audio-karaoke",
  slug: "mg-audio-karaoke",
  name: "Karaoke Lyric Fill",
  kind: "scene",
  job: "titles",
  language: "aura",
  mechanic: "lyric-words-fill-in-time",
  energy: "default",
  settle: 4.1,
  colors: { ink: "#FFFFFF", accent: "#FF7A3D", secondary: "#FF2E88", paper: "#22062E" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["music", "lyrics", "karaoke", "sing-along"],
  fields: [
    { key: "track", label: "Track", default: "Static Bloom", maxChars: 24, role: "label" },
    { key: "artist", label: "Artist", default: "Juno Vale", maxChars: 24, role: "name" },
    { key: "lyric", label: "Lyric", default: "leave the radio on, so the room hums your name", maxChars: 64, role: "headline" },
    { key: "foot", label: "Footer", default: "Glass Weather · out now on tidewell records", maxChars: 52, role: "caption" },
  ],
  html: `<div class="b b1"></div><div class="b b2"></div><div class="b b3"></div><div class="shade"></div>
<div class="top"><div class="th"></div><div class="tt"><span class="tn" data-21st-slot="track">{{track}}</span><span class="ta" data-21st-slot="artist">{{artist}}</span></div><span class="tag"><svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>sing along</span></div>
<div class="lyr" data-21st-slot="lyric">{{lyric|words}}</div>
<div class="prog"><span>1:12</span><span class="bar"><i></i></span><span>3:42</span></div>
<div class="foot" data-21st-slot="foot">{{foot}}</div>
<div class="grain"></div>`,
  css: `
.v-audio-karaoke{color:var(--ink);font-family:var(--font-display)}
.v-audio-karaoke[data-backdrop="on"]{background:var(--paper)}
.v-audio-karaoke[data-backdrop="off"] .b,.v-audio-karaoke[data-backdrop="off"] .shade,.v-audio-karaoke[data-backdrop="off"] .grain{display:none}
.v-audio-karaoke .b{position:absolute;border-radius:50%;filter:blur(3cqw);opacity:.85}
.v-audio-karaoke .b1{left:-12cqw;top:-30cqh;width:46cqw;height:46cqw;background:radial-gradient(circle,var(--accent),transparent 66%);animation:audio-karaoke-d1 6s ease-in-out infinite}
.v-audio-karaoke .b2{left:52cqw;top:4cqh;width:50cqw;height:50cqw;background:radial-gradient(circle,color-mix(in srgb,var(--secondary) 85%,transparent),transparent 66%);animation:audio-karaoke-d2 6s ease-in-out infinite}
.v-audio-karaoke .b3{left:-8cqw;top:50cqh;width:44cqw;height:44cqw;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 50%,var(--secondary)),transparent 66%);animation:audio-karaoke-d3 6s ease-in-out infinite}
.v-audio-karaoke .shade{position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 12%,transparent) 0%,color-mix(in srgb,var(--paper) 45%,transparent) 100%)}
.v-audio-karaoke .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:22cqw;opacity:.2;mix-blend-mode:overlay;pointer-events:none}
.v-audio-karaoke .top{position:absolute;left:8cqw;right:8cqw;top:8cqh;display:flex;align-items:center;gap:1.4cqw;font-family:var(--font-body);animation:audio-karaoke-ui 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-karaoke .th{position:relative;flex:none;width:5cqw;height:5cqw;border-radius:.8cqw;overflow:hidden;background:radial-gradient(120% 90% at 30% 20%,color-mix(in srgb,var(--accent) 40%,#1a1440),#110c2c 60%,#0c0920);box-shadow:0 .8cqw 2cqw -.6cqw rgba(0,0,0,.5)}
.v-audio-karaoke .th::before{content:"";position:absolute;left:18%;top:15%;width:62%;height:62%;border-radius:50%;background:conic-gradient(from 210deg,var(--secondary),var(--accent),color-mix(in srgb,var(--accent) 30%,#fff),var(--secondary));box-shadow:inset -.4cqw -.5cqw .8cqw rgba(12,9,32,.6)}
.v-audio-karaoke .tt{min-width:0}
.v-audio-karaoke .tn{display:block;font-size:2cqw;line-height:1.25;font-weight:700;letter-spacing:-.02em}
.v-audio-karaoke .ta{display:block;font-size:1.5cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 72%,transparent)}
.v-audio-karaoke .tag{margin-left:auto;flex:none;display:inline-flex;align-items:center;gap:.6cqw;padding:.7cqw 1.4cqw;border-radius:5cqw;background:color-mix(in srgb,var(--ink) 14%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 22%,transparent);font-size:1.4cqw;font-weight:600}
.v-audio-karaoke .tag svg{width:1.6cqw;height:1.6cqw}
.v-audio-karaoke .lyr{position:absolute;left:8cqw;right:20cqw;top:31cqh;font-weight:700;font-size:6cqw;line-height:1.2;letter-spacing:-.03em;animation:audio-karaoke-scroll 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-karaoke .lyr .w{--delay:calc(.8s + var(--i) * .22s);display:inline-block;line-height:1.3;padding-right:.04em;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 28%,var(--ink)) 50%,color-mix(in srgb,var(--ink) 30%,transparent) 50%);background-size:200% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:audio-karaoke-fill 6s linear infinite}
.v-audio-karaoke .prog{position:absolute;left:8cqw;right:8cqw;top:79cqh;display:flex;align-items:center;gap:1.4cqw;font:500 1.3cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 70%,transparent);animation:audio-karaoke-ui 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-karaoke .bar{position:relative;flex:1;height:.45cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 20%,transparent);overflow:hidden}
.v-audio-karaoke .bar i{position:absolute;inset:0;border-radius:1cqw;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 30%,#fff));transform-origin:left center;animation:audio-karaoke-bar 6s linear infinite}
.v-audio-karaoke .foot{position:absolute;left:8cqw;right:8cqw;top:85cqh;font-family:var(--font-body);font-size:1.4cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 66%,transparent);animation:audio-karaoke-ui 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-audio-karaoke .b1{left:-30cqw;top:-10cqh;width:110cqw;height:110cqw}
  .v-audio-karaoke .b2{left:30cqw;top:30cqh;width:110cqw;height:110cqw}
  .v-audio-karaoke .b3{left:-30cqw;top:62cqh;width:100cqw;height:100cqw}
  .v-audio-karaoke .top{top:7cqh;gap:3.6cqw}
  .v-audio-karaoke .th{width:15cqw;height:15cqw;border-radius:2.4cqw}
  .v-audio-karaoke .tn{font-size:6.4cqw}
  .v-audio-karaoke .ta{font-size:5.4cqw}
  .v-audio-karaoke .tag{display:none}
  .v-audio-karaoke .lyr{right:8cqw;top:25cqh;font-size:11.5cqw}
  .v-audio-karaoke .prog{top:79cqh;font-size:3.6cqw;gap:3cqw}
  .v-audio-karaoke .bar{height:1.2cqw}
  .v-audio-karaoke .foot{top:84cqh;font-size:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-karaoke .b1{left:-20cqw;top:-25cqh;width:75cqw;height:75cqw}
  .v-audio-karaoke .b2{left:40cqw;top:8cqh;width:80cqw;height:80cqw}
  .v-audio-karaoke .b3{left:-14cqw;top:52cqh;width:72cqw;height:72cqw}
  .v-audio-karaoke .top{top:8cqh;gap:2.4cqw}
  .v-audio-karaoke .th{width:8.4cqw;height:8.4cqw;border-radius:1.4cqw}
  .v-audio-karaoke .tn{font-size:3.4cqw}
  .v-audio-karaoke .ta{font-size:2.6cqw}
  .v-audio-karaoke .tag{font-size:2.4cqw;gap:1cqw;padding:1.1cqw 2.2cqw}
  .v-audio-karaoke .tag svg{width:2.6cqw;height:2.6cqw}
  .v-audio-karaoke .lyr{right:8cqw;top:32cqh;font-size:8.4cqw}
  .v-audio-karaoke .prog{top:80cqh;font-size:2.3cqw;gap:2.4cqw}
  .v-audio-karaoke .bar{height:.8cqw}
  .v-audio-karaoke .foot{top:86cqh;font-size:2.3cqw}
}
@keyframes audio-karaoke-d1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(10cqw,6cqw) scale(1.1)}66%{transform:translate(4cqw,-4cqw) scale(.95)}}
@keyframes audio-karaoke-d2{0%,100%{transform:translate(0,0) scale(1)}40%{transform:translate(-12cqw,8cqw) scale(1.08)}75%{transform:translate(-4cqw,-6cqw) scale(1)}}
@keyframes audio-karaoke-d3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(14cqw,-8cqw) scale(1.12)}}
@keyframes audio-karaoke-ui{0%,2%{opacity:0;transform:translateY(1.5cqh)}12%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-karaoke-scroll{0%,3%{opacity:0;transform:translateY(4cqh);filter:blur(.6cqw)}12%{opacity:1;filter:blur(0)}20%{transform:translateY(1.5cqh)}50%,100%{opacity:1;transform:translateY(0);filter:blur(0)}}
@keyframes audio-karaoke-fill{0%{background-position:100% 0}6%,100%{background-position:0 0}}
@keyframes audio-karaoke-bar{0%{transform:scaleX(.3)}100%{transform:scaleX(.42)}}
`,
};

export const audioTourDates: SceneSpec = {
  id: "audio-tour-dates",
  slug: "mg-audio-tour-dates",
  name: "Tour Dates Poster",
  kind: "scene",
  job: "process",
  language: "neo-brutal",
  mechanic: "date-rows-wipe-in-sold-out-stamp",
  energy: "punchy",
  settle: 3.2,
  colors: { ink: "#141414", accent: "#D8341C", secondary: "#FFFFFF", paper: "#F3C331" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["music", "tour", "dates", "poster"],
  fields: [
    { key: "artist", label: "Artist", default: "Juno Vale", maxChars: 18, role: "headline" },
    { key: "tour", label: "Tour name", default: "Glass Weather tour", maxChars: 26, role: "label" },
    { key: "season", label: "Season", default: "autumn 2026", maxChars: 16, role: "kicker" },
    { key: "cta", label: "Tickets line", default: "Tickets at tidewell.fm", maxChars: 30, role: "cta" },
  ],
  html: `<div class="rip rip1"></div><div class="rip rip2"></div><div class="rip rip3"></div>
<div class="disc"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 12.5c1.3 0 1.6-3.5 3.2-3.5s1.9 6 3.3 6 1.7-6 3.3-6 1.9 3.5 3.2 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="title" data-21st-slot="artist">{{artist|words}}</div>
<div class="sub"><span data-21st-slot="tour">{{tour}}</span><span class="yr" data-21st-slot="season">{{season}}</span></div>
<div class="rows">
  <div class="row" style="--delay:0s"><div><span class="dm">oct 23</span><span class="dw">fri</span></div><div><span class="cn">Lisbon</span><span class="vn">Sala Aurora</span></div><span class="k">tickets<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
  <div class="row" style="--delay:.18s"><div><span class="dm">oct 24</span><span class="dw">sat</span></div><div><span class="cn">Madrid</span><span class="vn">Teatro Lumbre</span></div><span class="stamp">sold out</span></div>
  <div class="row" style="--delay:.36s"><div><span class="dm">oct 27</span><span class="dw">tue</span></div><div><span class="cn">Paris</span><span class="vn">La Cour Basse</span></div><span class="k">tickets<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
  <div class="row" style="--delay:.54s"><div><span class="dm">oct 30</span><span class="dw">fri</span></div><div><span class="cn">Berlin</span><span class="vn">Halle Nord</span></div><span class="k kd">few left</span></div>
  <div class="row r5" style="--delay:.72s"><div><span class="dm">nov 03</span><span class="dw">tue</span></div><div><span class="cn">Copenhagen</span><span class="vn">Vinterhaven</span></div><span class="k">tickets<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
  <div class="row r6" style="--delay:.9s"><div><span class="dm">nov 07</span><span class="dw">sat</span></div><div><span class="cn">London</span><span class="vn">The Gasworks Room</span></div><span class="k kn"><i></i>new date</span></div>
</div>
<div class="foot"><span data-21st-slot="cta">{{cta}}</span><span class="go"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
<div class="pres"><span>presented by tidewell records</span><span>all ages · doors 19:30</span></div>
<div class="grain"></div>`,
  css: `
.v-audio-tour-dates{color:var(--ink);font-family:var(--font-display)}
.v-audio-tour-dates[data-backdrop="on"]{background:var(--paper)}
.v-audio-tour-dates[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-audio-tour-dates .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:20cqw;opacity:.3;mix-blend-mode:multiply;pointer-events:none}
.v-audio-tour-dates[data-backdrop="off"] .grain{display:none}
.v-audio-tour-dates .rip{position:absolute;left:36cqw;top:10cqh;width:8cqw;height:8cqw;border-radius:50%;border:.25cqw solid var(--ink);opacity:0}
.v-audio-tour-dates .rip1{animation:audio-tour-dates-r1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .rip2{animation:audio-tour-dates-r2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .rip3{animation:audio-tour-dates-r3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .disc{position:absolute;left:36cqw;top:10cqh;width:8cqw;height:8cqw;border-radius:50%;background:var(--ink);display:grid;place-items:center;color:var(--paper);animation:audio-tour-dates-disc 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .disc svg{width:4.4cqw;height:4.4cqw}
.v-audio-tour-dates .title{position:absolute;left:5cqw;right:58cqw;top:26cqh;font-weight:700;font-size:10.5cqw;line-height:1.2;letter-spacing:-.06em}
.v-audio-tour-dates .title .w{--delay:calc(.15s + var(--i) * .2s);display:block;line-height:1.2;padding-right:.06em;animation:audio-tour-dates-h 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .title .w + .w{margin-top:-.26em}
.v-audio-tour-dates .sub{position:absolute;left:5.5cqw;right:58cqw;top:70cqh;display:flex;justify-content:space-between;align-items:baseline;gap:1cqw;padding-top:1cqw;font-size:1.9cqw;line-height:1.25;font-weight:700;letter-spacing:-.02em;animation:audio-tour-dates-sb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .sub::before{content:"";position:absolute;left:0;right:0;top:0;height:.3cqw;background:var(--ink);transform-origin:left center;animation:audio-tour-dates-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-tour-dates .yr{font:500 1.4cqw/1.25 var(--font-mono);white-space:nowrap}
.v-audio-tour-dates .rows{position:absolute;zoom:.55;left:calc(48cqw / .55);top:calc(12cqh / .55);width:calc(46cqw / .55)}
.v-audio-tour-dates .row{position:relative;display:grid;grid-template-columns:13.5cqw 1fr auto;align-items:center;height:9.2cqw;border-bottom:.25cqw solid var(--ink);animation:audio-tour-dates-w 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .dm{display:block;font:600 2.4cqw/1.2 var(--font-mono)}
.v-audio-tour-dates .dw{display:block;font:500 1.8cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-audio-tour-dates .cn{display:block;font-size:5.2cqw;font-weight:700;line-height:1.1;letter-spacing:-.035em}
.v-audio-tour-dates .vn{display:block;margin-top:.3cqw;font-family:var(--font-body);font-size:1.9cqw;font-weight:500;color:color-mix(in srgb,var(--ink) 72%,transparent)}
.v-audio-tour-dates .k{display:inline-flex;align-items:center;gap:.7cqw;padding:.9cqw 1.9cqw;border-radius:5cqw;border:.3cqw solid var(--ink);font-family:var(--font-body);font-size:1.9cqw;font-weight:600}
.v-audio-tour-dates .k svg{width:1.8cqw;height:1.8cqw}
.v-audio-tour-dates .kd{background:var(--ink);color:var(--paper)}
.v-audio-tour-dates .kn{background:var(--accent);border-color:var(--accent);color:#fff}
.v-audio-tour-dates .kn i{display:block;width:1cqw;height:1cqw;border-radius:50%;background:#fff;animation:audio-tour-dates-blink 1s steps(1,end) infinite}
.v-audio-tour-dates .stamp{padding:.7cqw 1.6cqw;border:.45cqw solid var(--accent);border-radius:.7cqw;color:var(--accent);font-family:var(--font-body);font-size:2.6cqw;font-weight:700;letter-spacing:-.01em;background:color-mix(in srgb,var(--paper) 80%,transparent);--delay:0s;animation:audio-tour-dates-stamp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .foot{position:absolute;left:48cqw;right:6cqw;top:calc(12cqh + 31.4cqw);min-height:4.8cqw;display:flex;align-items:center;justify-content:space-between;gap:1cqw;padding:.6cqw .8cqw .6cqw 2cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font-family:var(--font-body);font-size:1.6cqw;line-height:1.25;font-weight:600;animation:audio-tour-dates-ft 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-tour-dates .go{display:grid;place-items:center;flex:none;width:3.6cqw;height:3.6cqw;border-radius:50%;background:var(--paper);color:var(--ink)}
.v-audio-tour-dates .go svg{width:1.7cqw;height:1.7cqw}
.v-audio-tour-dates .pres{position:absolute;left:5.5cqw;right:58cqw;bottom:7cqh;display:flex;justify-content:space-between;gap:1cqw;font:500 1.05cqw/1.3 var(--font-mono);color:color-mix(in srgb,var(--ink) 68%,transparent);animation:audio-tour-dates-ft 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-audio-tour-dates .rip,.v-audio-tour-dates .disc{left:auto;right:7cqw;top:6cqh;width:16cqw;height:16cqw}
  .v-audio-tour-dates .rip{border-width:.45cqw}
  .v-audio-tour-dates .disc svg{width:8.6cqw;height:8.6cqw}
  .v-audio-tour-dates .title{left:6cqw;right:6cqw;top:5cqh;font-size:23cqw}
  .v-audio-tour-dates .sub{left:7cqw;right:7cqw;top:30cqh;flex-direction:column;align-items:flex-start;gap:.6cqh;padding-top:2cqw;font-size:6.2cqw}
  .v-audio-tour-dates .sub::before{height:.6cqw}
  .v-audio-tour-dates .yr{font-size:5.4cqw}
  .v-audio-tour-dates .rows{zoom:1;left:7cqw;top:44cqh;width:86cqw}
  .v-audio-tour-dates .foot{left:7cqw;right:7cqw;top:auto;bottom:6cqh;min-height:15cqw;padding:2cqw 2cqw 2cqw 5cqw;border-radius:8cqw;font-size:5.4cqw}
  .v-audio-tour-dates .go{width:11cqw;height:11cqw}
  .v-audio-tour-dates .go svg{width:5cqw;height:5cqw}
  .v-audio-tour-dates .pres{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-tour-dates .rip,.v-audio-tour-dates .disc{left:auto;right:7cqw;top:7cqh;width:13cqw;height:13cqw}
  .v-audio-tour-dates .disc svg{width:7cqw;height:7cqw}
  .v-audio-tour-dates .title{left:6cqw;right:24cqw;top:5cqh;font-size:13.5cqw}
  .v-audio-tour-dates .title .w{display:inline-block}
  .v-audio-tour-dates .title .w + .w{margin-top:0}
  .v-audio-tour-dates .sub{left:7cqw;right:7cqw;top:25cqh;font-size:3cqw}
  .v-audio-tour-dates .sub::before{height:.45cqw}
  .v-audio-tour-dates .yr{font-size:2.2cqw}
  .v-audio-tour-dates .rows{zoom:.82;left:calc(7cqw / .82);top:calc(33cqh / .82);width:calc(86cqw / .82)}
  .v-audio-tour-dates .r6{display:none}
  .v-audio-tour-dates .foot{left:7cqw;right:7cqw;top:auto;bottom:12cqh;min-height:8cqw;padding:1cqw 1.2cqw 1cqw 3cqw;font-size:2.6cqw}
  .v-audio-tour-dates .go{width:6cqw;height:6cqw}
  .v-audio-tour-dates .go svg{width:2.8cqw;height:2.8cqw}
  .v-audio-tour-dates .pres{left:7cqw;right:7cqw;bottom:5.5cqh;font-size:1.8cqw}
}
@keyframes audio-tour-dates-r1{0%{opacity:.8;transform:scale(1)}33.3%{opacity:0;transform:scale(3)}33.4%,100%{opacity:0;transform:scale(1)}}
@keyframes audio-tour-dates-r2{0%,33.3%{opacity:0;transform:scale(1)}33.4%{opacity:.8;transform:scale(1)}66.6%{opacity:0;transform:scale(3)}66.7%,100%{opacity:0;transform:scale(1)}}
@keyframes audio-tour-dates-r3{0%,66.6%{opacity:0;transform:scale(1)}66.7%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(3)}}
@keyframes audio-tour-dates-disc{0%,2%{transform:scale(0) rotate(-90deg)}14%,100%{transform:scale(1) rotate(0deg)}}
@keyframes audio-tour-dates-h{0%{transform:translateY(70%);clip-path:inset(0 -10% 70% -10%);opacity:0}2%{opacity:1}14%,100%{transform:none;clip-path:inset(-30% -10% -30% -10%);opacity:1}}
@keyframes audio-tour-dates-sb{0%,10%{opacity:0}22%,100%{opacity:1}}
@keyframes audio-tour-dates-rule{0%,8%{transform:scaleX(0)}24%,100%{transform:scaleX(1)}}
@keyframes audio-tour-dates-w{0%,16%{opacity:0;transform:translateX(-5cqw);clip-path:inset(0 100% 0 0)}28%,100%{opacity:1;transform:translateX(0);clip-path:inset(-2cqw -2cqw -2cqw -2cqw)}}
@keyframes audio-tour-dates-stamp{0%,39%{opacity:0;transform:scale(2.2) rotate(-22deg)}43%{opacity:1;transform:scale(.92) rotate(-6deg)}46%,100%{opacity:1;transform:scale(1) rotate(-8deg)}}
@keyframes audio-tour-dates-ft{0%,38%{opacity:0;transform:translateY(2.5cqh)}48%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-tour-dates-blink{0%,100%{opacity:1}50%{opacity:.2}}
`,
};

export const audioListenEverywhere: SceneSpec = {
  id: "audio-listen-everywhere",
  slug: "mg-audio-listen-everywhere",
  name: "Listen Everywhere End Card",
  kind: "scene",
  job: "cta",
  language: "glass",
  mechanic: "cursor-clicks-follow-platform-grid",
  energy: "default",
  settle: 3.1,
  colors: { ink: "#F5F0FF", accent: "#FF8A66", secondary: "#7B5CFF", paper: "#140D26" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["podcast", "end-card", "follow", "platforms"],
  fields: [
    { key: "brand", label: "Brand", default: "tidewell", maxChars: 18, role: "label" },
    { key: "headline", label: "Headline", default: "New episodes every Tuesday.", maxChars: 40, role: "headline" },
    { key: "sub", label: "Subline", default: "Slow Signal is free, wherever you listen.", maxChars: 54, role: "body" },
    { key: "cta", label: "Button", default: "Follow the show", maxChars: 20, role: "cta" },
  ],
  html: `<div class="o o1"></div><div class="o o2"></div><div class="o o3"></div>
<div class="copy">
<div class="logo"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 12.5c1.3 0 1.6-3.5 3.2-3.5s1.9 6 3.3 6 1.7-6 3.3-6 1.9 3.5 3.2 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
<div class="h" data-21st-slot="headline">{{headline|words}}</div>
<div class="sub" data-21st-slot="sub">{{sub}}</div>
<div class="follow"><span class="f"><span class="icn"><svg class="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg><svg class="i-ok" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span data-21st-slot="cta">{{cta}}</span></span><span class="rip"></span><svg class="cur" viewBox="0 0 24 24"><path d="M4 2.5v17l4.6-4.1 3 6.4 2.8-1.3-2.9-6.2h6.1z" fill="#fff" stroke="#140d26" stroke-width="1.4" stroke-linejoin="round"/></svg></div>
<div class="grid">
  <div class="btn" style="--delay:0s"><span class="ic i1"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.6" fill="#fff"/><ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-24 12 12)" fill="none" stroke="#fff" stroke-width="1.7"/></svg></span><span><span class="on">listen on</span><span class="nm">Orbitune</span></span></div>
  <div class="btn" style="--delay:.18s"><span class="ic i2"><svg viewBox="0 0 24 24"><path d="M4 12h1.5M8 8.5v7M12 5v14M16 8v8M19.5 11v2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg></span><span><span class="on">listen on</span><span class="nm">Ripplr</span></span></div>
  <div class="btn" style="--delay:.36s"><span class="ic i3"><svg viewBox="0 0 24 24"><path d="M8 9a3 3 0 1 0 0 6c2 0 3-1.6 4-3s2-3 4-3a3 3 0 1 1 0 6c-2 0-3-1.6-4-3s-2-3-4-3z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg></span><span><span class="on">listen on</span><span class="nm">Loopnest</span></span></div>
  <div class="btn" style="--delay:.54s"><span class="ic i4"><svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="2" fill="#fff"/><path d="M8 10.5a5.5 5.5 0 0 1 8 0M5 7.5a9.6 9.6 0 0 1 14 0M12 16v4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg></span><span><span class="on">listen on</span><span class="nm">Hearth Radio</span></span></div>
</div>
<div class="pl"><div class="th"></div><div class="pm"><span class="pt">Ep. 48 · Rooms that remember</span><span class="ps">52 min · new</span><div class="pb"><i></i></div></div><div class="pp"><svg viewBox="0 0 24 24"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg></div></div>
</div>
<div class="foot"><span>tidewell.fm/slowsignal</span><span>2.4M plays · rated 4.9</span></div>
<div class="grain"></div>`,
  css: `
.v-audio-listen-everywhere{color:var(--ink);font-family:var(--font-body)}
.v-audio-listen-everywhere[data-backdrop="on"]{background:radial-gradient(100% 120% at 0% 0%,color-mix(in srgb,var(--paper) 75%,var(--secondary)) 0%,var(--paper) 50%,color-mix(in srgb,var(--paper) 70%,#000) 100%)}
.v-audio-listen-everywhere[data-backdrop="off"] .o,.v-audio-listen-everywhere[data-backdrop="off"] .grain{display:none}
.v-audio-listen-everywhere .o{position:absolute;border-radius:50%;filter:blur(5cqw)}
.v-audio-listen-everywhere .o1{left:46cqw;top:-22cqw;width:50cqw;height:50cqw;background:var(--secondary);opacity:.5;animation:audio-listen-everywhere-o1 6s ease-in-out infinite}
.v-audio-listen-everywhere .o2{left:-10cqw;top:30cqw;width:40cqw;height:40cqw;background:var(--accent);opacity:.38;animation:audio-listen-everywhere-o2 6s ease-in-out infinite}
.v-audio-listen-everywhere .o3{right:-8cqw;bottom:-16cqw;width:32cqw;height:32cqw;background:color-mix(in srgb,var(--secondary) 50%,#4fd1ff);opacity:.26;animation:audio-listen-everywhere-o1 6s ease-in-out infinite}
.v-audio-listen-everywhere .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:22cqw;opacity:.18;mix-blend-mode:overlay;pointer-events:none}
.v-audio-listen-everywhere .copy{position:static;width:41cqw;margin:8.6cqw 0 0 7cqw;display:flex;flex-direction:column;align-items:flex-start}
.v-audio-listen-everywhere .logo{display:flex;align-items:center;gap:1.2cqw;font-size:2.8cqw;line-height:1.2;font-weight:600;letter-spacing:-.03em;animation:audio-listen-everywhere-a0 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .logo svg{width:4cqw;height:4cqw;color:var(--accent);flex:none}
.v-audio-listen-everywhere .h{align-self:stretch;margin-top:1.2cqw;font-family:var(--font-display);font-size:5.4cqw;line-height:1.2;letter-spacing:-.01em}
.v-audio-listen-everywhere .h .w{--delay:calc(.3s + var(--i) * .12s);display:inline-block;line-height:1.34;padding-right:.04em;animation:audio-listen-everywhere-hw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .h .w:last-child{font-style:italic;padding-right:.1em;color:color-mix(in srgb,var(--accent) 65%,var(--ink))}
.v-audio-listen-everywhere .sub{margin-top:1cqw;font-size:1.85cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 72%,transparent);animation:audio-listen-everywhere-a1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .follow{position:relative;flex:none;margin-top:2cqw;min-width:21cqw;height:5.6cqw;border-radius:4cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 70%,#fff),var(--accent));color:var(--paper);box-shadow:0 1.2cqw 3cqw -1cqw color-mix(in srgb,var(--accent) 60%,transparent),inset 0 1px 0 rgba(255,255,255,.5);animation:audio-listen-everywhere-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .f{display:flex;align-items:center;justify-content:center;gap:.8cqw;height:100%;padding:0 2.4cqw;font-size:1.9cqw;line-height:1.25;font-weight:600;letter-spacing:-.01em;white-space:nowrap}
.v-audio-listen-everywhere .icn{position:relative;flex:none;width:2cqw;height:2cqw}
.v-audio-listen-everywhere .icn svg{position:absolute;inset:0;width:100%;height:100%}
.v-audio-listen-everywhere .i-plus{animation:audio-listen-everywhere-f1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .i-ok{opacity:0;animation:audio-listen-everywhere-f2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .rip{position:absolute;left:62%;top:20%;width:6cqw;height:6cqw;margin:-3cqw 0 0 -3cqw;border-radius:50%;border:.3cqw solid color-mix(in srgb,var(--accent) 40%,#fff);opacity:0;animation:audio-listen-everywhere-rip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .cur{position:absolute;left:62%;top:52%;width:3.2cqw;height:3.2cqw;opacity:0;filter:drop-shadow(0 .4cqw .6cqw rgba(0,0,0,.45));animation:audio-listen-everywhere-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-audio-listen-everywhere .grid{position:absolute;left:54cqw;top:10.6cqw;width:40cqw;display:grid;grid-template-columns:1fr 1fr;gap:1.6cqw}
.v-audio-listen-everywhere .btn{position:relative;display:flex;align-items:center;gap:1.1cqw;height:8.2cqw;padding:0 1.2cqw;border-radius:1.6cqw;overflow:hidden;background:linear-gradient(180deg,color-mix(in srgb,var(--ink) 13%,transparent),color-mix(in srgb,var(--ink) 5%,transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 16%,transparent),0 1.2cqw 3cqw -1cqw rgba(0,0,0,.4);animation:audio-listen-everywhere-b 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .ic{flex:none;display:grid;place-items:center;width:4.6cqw;height:4.6cqw;border-radius:1.2cqw;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 .6cqw 1.2cqw -.4cqw rgba(0,0,0,.4)}
.v-audio-listen-everywhere .ic svg{width:2.8cqw;height:2.8cqw}
.v-audio-listen-everywhere .i1{background:linear-gradient(145deg,#9a80ff,#4b2fd6)}
.v-audio-listen-everywhere .i2{background:linear-gradient(145deg,#ffb092,#ff5f6d)}
.v-audio-listen-everywhere .i3{background:linear-gradient(145deg,#5ee0d0,#128a9e)}
.v-audio-listen-everywhere .i4{background:linear-gradient(145deg,#ffd88a,#f09a1f)}
.v-audio-listen-everywhere .on{display:block;font-size:1.2cqw;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-audio-listen-everywhere .nm{display:block;margin-top:.2cqw;font-size:1.7cqw;font-weight:600;letter-spacing:-.02em;white-space:nowrap}
.v-audio-listen-everywhere .pl{position:absolute;left:54cqw;top:29.6cqw;width:40cqw;height:11cqw;display:flex;align-items:center;gap:1.6cqw;padding:0 1.6cqw;border-radius:1.6cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--ink) 10%,transparent),color-mix(in srgb,var(--ink) 4%,transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent),0 1.2cqw 3cqw -1cqw rgba(0,0,0,.4);animation:audio-listen-everywhere-pl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-audio-listen-everywhere .th{flex:none;width:7.4cqw;height:7.4cqw;border-radius:1cqw;background:repeating-radial-gradient(circle at 68% 30%,rgba(255,255,255,.18) 0 .12cqw,transparent .12cqw .9cqw),radial-gradient(circle at 68% 30%,#ffe2b0 0,var(--accent) 28%,transparent 58%),linear-gradient(155deg,var(--accent),color-mix(in srgb,var(--secondary) 60%,#3a0a2a) 55%,#1a0b2a);box-shadow:0 .8cqw 1.6cqw -.6cqw rgba(0,0,0,.5)}
.v-audio-listen-everywhere .pm{flex:1;min-width:0}
.v-audio-listen-everywhere .pt{display:block;font-size:1.75cqw;font-weight:600;letter-spacing:-.015em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v-audio-listen-everywhere .ps{display:block;margin-top:.3cqw;font-size:1.3cqw;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-audio-listen-everywhere .pb{position:relative;height:.55cqw;margin-top:1.2cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 14%,transparent);overflow:hidden}
.v-audio-listen-everywhere .pb i{position:absolute;inset:0;border-radius:1cqw;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 40%,#fff));transform-origin:left center;animation:audio-listen-everywhere-pb 6s linear infinite}
.v-audio-listen-everywhere .pp{flex:none;display:grid;place-items:center;width:4.6cqw;height:4.6cqw;border-radius:50%;background:var(--ink);color:var(--paper)}
.v-audio-listen-everywhere .pp svg{width:1.8cqw;height:1.8cqw}
.v-audio-listen-everywhere .foot{position:absolute;left:7cqw;right:6cqw;top:48.4cqw;display:flex;justify-content:space-between;font:500 1.3cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent);animation:audio-listen-everywhere-pl 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-audio-listen-everywhere .o1{left:20cqw;top:-10cqh;width:100cqw;height:100cqw}
  .v-audio-listen-everywhere .o2{left:-30cqw;top:50cqh;width:90cqw;height:90cqw}
  .v-audio-listen-everywhere .copy{position:absolute;left:8cqw;right:8cqw;top:6.5cqh;bottom:7cqh;width:auto;margin:0;align-items:stretch}
  .v-audio-listen-everywhere .logo{font-size:6.4cqw;gap:2.6cqw}
  .v-audio-listen-everywhere .logo svg{width:9cqw;height:9cqw}
  .v-audio-listen-everywhere .h{margin-top:2.4cqh;font-size:11cqw}
  .v-audio-listen-everywhere .sub{margin-top:1.6cqh;font-size:5.6cqw}
  .v-audio-listen-everywhere .grid{position:static;zoom:2.1;margin-top:calc(3cqh / 2.1);width:calc(84cqw / 2.1)}
  .v-audio-listen-everywhere .pl{position:static;zoom:2.1;margin-top:calc(2cqh / 2.1);width:calc(84cqw / 2.1)}
  .v-audio-listen-everywhere .follow{order:1;margin-top:auto;height:15cqw;border-radius:10cqw}
  .v-audio-listen-everywhere .f{font-size:6cqw;gap:2.4cqw}
  .v-audio-listen-everywhere .icn{width:6cqw;height:6cqw}
  .v-audio-listen-everywhere .cur{width:9cqw;height:9cqw}
  .v-audio-listen-everywhere .rip{width:14cqw;height:14cqw;margin:-7cqw 0 0 -7cqw;border-width:.6cqw}
  .v-audio-listen-everywhere .foot{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-audio-listen-everywhere .copy{position:absolute;left:7cqw;right:7cqw;top:7cqh;width:auto;margin:0;flex-flow:row wrap;align-items:center;column-gap:4cqw}
  .v-audio-listen-everywhere .logo{flex-basis:100%;font-size:3.6cqw}
  .v-audio-listen-everywhere .logo svg{width:5cqw;height:5cqw}
  .v-audio-listen-everywhere .h{flex-basis:100%;margin-top:2cqw;font-size:7.6cqw}
  .v-audio-listen-everywhere .sub{flex:1 1 0;min-width:0;margin-top:2.4cqw;font-size:2.6cqw}
  .v-audio-listen-everywhere .follow{margin-top:2.4cqw;height:8cqw}
  .v-audio-listen-everywhere .f{font-size:2.6cqw;gap:1.2cqw}
  .v-audio-listen-everywhere .icn{width:2.6cqw;height:2.6cqw}
  .v-audio-listen-everywhere .cur{width:4.6cqw;height:4.6cqw}
  .v-audio-listen-everywhere .grid{position:static;zoom:1.9;margin-top:calc(5cqw / 1.9);width:calc(86cqw / 1.9)}
  .v-audio-listen-everywhere .pl{display:none}
  .v-audio-listen-everywhere .foot{left:7cqw;right:7cqw;top:auto;bottom:4.5cqh;font-size:1.8cqw}
}
@keyframes audio-listen-everywhere-o1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-6cqw,5cqw) scale(1.12)}}
@keyframes audio-listen-everywhere-o2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(7cqw,-5cqw) scale(1.1)}}
@keyframes audio-listen-everywhere-a0{0%,2%{opacity:0;transform:translateY(1.2cqw)}13%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-listen-everywhere-hw{0%{transform:translateY(70%);clip-path:inset(0 -10% 70% -10%);opacity:0}2%{opacity:1}14%,100%{transform:none;clip-path:inset(-30% -10% -30% -10%);opacity:1}}
@keyframes audio-listen-everywhere-a1{0%,14%{opacity:0;transform:translateY(1.2cqw)}25%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-listen-everywhere-btn{0%,16%{opacity:0;transform:translateY(1.5cqw) scale(1)}27%,37%{opacity:1;transform:translateY(0) scale(1)}39%{opacity:1;transform:translateY(0) scale(.93)}42%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes audio-listen-everywhere-f1{0%,39%{opacity:1;transform:rotate(0) scale(1)}42%,100%{opacity:0;transform:rotate(90deg) scale(.4)}}
@keyframes audio-listen-everywhere-f2{0%,39%{opacity:0;transform:scale(.4)}43%,100%{opacity:1;transform:scale(1)}}
@keyframes audio-listen-everywhere-rip{0%,39%{opacity:0;transform:scale(.2)}40%{opacity:.9;transform:scale(.3)}48%,100%{opacity:0;transform:scale(2.2)}}
@keyframes audio-listen-everywhere-cur{0%,26%{opacity:0;transform:translate(30cqw,14cqw) scale(1)}29%{opacity:1;transform:translate(26cqw,12cqw) scale(1)}37%{opacity:1;transform:translate(0,0) scale(1)}39%{opacity:1;transform:translate(0,0) scale(.85)}41%,100%{opacity:1;transform:translate(0,0) scale(1)}}
@keyframes audio-listen-everywhere-b{0%,14%{opacity:0;transform:translateY(2cqw);filter:blur(.6cqw)}25%,100%{opacity:1;transform:translateY(0);filter:blur(0)}}
@keyframes audio-listen-everywhere-pl{0%,26%{opacity:0;transform:translateY(2cqw)}37%,100%{opacity:1;transform:translateY(0)}}
@keyframes audio-listen-everywhere-pb{0%{transform:scaleX(.22)}100%{transform:scaleX(.4)}}
`,
};

export const AUDIO_SCENES: SceneSpec[] = [audioAudiogram, audioCoverReveal, audioGuestIntro, audioPullQuote, audioVinylDrop, audioOnAir, audioChartClimb, audioKaraoke, audioTourDates, audioListenEverywhere];
