// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const MARK = `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="7"/><path d="M50 10a40 40 0 0 1 0 80a24 40 0 0 0 0-80Z" fill="currentColor"/></svg>`;

export const beatCutGrid: SceneSpec = {
  id: "beat-cut-grid",
  slug: "mg-beat-cut-grid",
  name: "Beat-Cut Sequence",
  kind: "scene",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "hard-cuts-on-beat-timeline",
  energy: "punchy",
  settle: 4.6,
  colors: { ink: "#F1ECE2", accent: "#FF5B22", secondary: "#2747FF", paper: "#0D0D0F" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["beat-sync", "montage", "launch"],
  fields: [
    { key: "headline", label: "Opening line", default: "Meet Lumen.", maxChars: 20, role: "headline" },
    { key: "stat", label: "Stat", default: "3.2×", maxChars: 6, role: "value" },
    { key: "brand", label: "Brand", default: "Lumen", maxChars: 10, role: "name" },
    { key: "tagline", label: "Tagline", default: "Available today · lumen.app", maxChars: 34, role: "caption" },
  ],
  html: `<div class="view">
  <div class="sc s1"><div class="in">
    <div class="lab">01 · intro</div>
    <div class="big" data-21st-slot="headline">{{headline}}</div>
    <div class="orb"><div class="orbi">${MARK}<b></b></div></div>
  </div></div>
  <div class="sc s2"><div class="in">
    <div class="lab">02 · ask</div>
    <div class="chatw"><div class="chat">
      <div class="me">Plan Friday's launch. Keep it light.</div>
      <div class="ai"><i></i><div><p>Here's a 3-step plan for the team:</p>
        <ul><li><b></b>Draft the teaser post<span>Thu 10:00</span></li><li><b></b>Record a 30 s demo<span>Thu 15:00</span></li><li><b></b>Ship and announce<span>Fri 9:00</span></li></ul></div></div>
    </div></div>
  </div></div>
  <div class="sc s3"><div class="in">
    <div class="lab">03 · speed</div>
    <div class="num" data-21st-slot="stat">{{stat}}</div>
    <div class="bars"><i style="--h:22"></i><i style="--h:31"></i><i style="--h:29"></i><i style="--h:44"></i><i style="--h:53"></i><i style="--h:66"></i><i style="--h:81"></i><i style="--h:100"></i></div>
  </div></div>
  <div class="sc s4"><div class="in">
    <div class="ring"></div>
    <div class="lab">04 · out now</div>
    <div class="lock"><span class="lm">${MARK}</span><span class="ln" data-21st-slot="brand">{{brand}}</span></div>
  </div></div>
  <div class="flash"></div>
</div>
<div class="tl"><div class="tli">
  <div class="bpm">
    <div class="row"><span class="dot"></span>160 bpm</div>
    <div class="cnt"><i></i><b>1</b><b>2</b><b>3</b><b>4</b></div>
  </div>
  <div class="track">
    <div class="clips"><i class="k1">intro</i><i class="k2">ask</i><i class="k3">speed</i><i class="k4">out now</i><i class="k5">intro</i></div>
    <div class="ticks"></div>
    <i class="cut" style="left:12.5%"></i><i class="cut" style="left:37.5%"></i><i class="cut" style="left:62.5%"></i><i class="cut" style="left:87.5%"></i>
    <div class="ph"></div>
  </div>
</div></div>
<div class="tag" data-21st-slot="tagline">{{tagline}}</div>`,
  css: `
.v-beat-cut-grid{color:var(--ink);font-family:var(--font-body)}
.v-beat-cut-grid[data-backdrop="on"]{background:var(--paper)}
.v-beat-cut-grid[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-beat-cut-grid .view{position:absolute;left:0;top:0;width:100cqw;height:77.5cqh;overflow:hidden}
.v-beat-cut-grid .sc{position:absolute;inset:0;overflow:hidden}
.v-beat-cut-grid .in{position:absolute;inset:0}
.v-beat-cut-grid .lab{position:absolute;left:4cqw;top:3.2cqw;font-family:var(--font-mono);font-size:1.1cqw;letter-spacing:.02em;opacity:.8}
.v-beat-cut-grid .s1{background:var(--accent);color:var(--paper);animation:beat-cut-grid-v1 6s linear infinite}
.v-beat-cut-grid .s2{background:var(--ink);color:var(--paper);opacity:0;animation:beat-cut-grid-v2 6s linear infinite}
.v-beat-cut-grid .s3{background:var(--secondary);color:var(--ink);opacity:0;animation:beat-cut-grid-v3 6s linear infinite}
.v-beat-cut-grid .s4{background:var(--paper);color:var(--ink);opacity:0;animation:beat-cut-grid-v4 6s linear infinite}
@keyframes beat-cut-grid-v1{0%,12.49%{opacity:1}12.5%,87.49%{opacity:0}87.5%,100%{opacity:1}}
@keyframes beat-cut-grid-v2{0%,12.49%{opacity:0}12.5%,37.49%{opacity:1}37.5%,100%{opacity:0}}
@keyframes beat-cut-grid-v3{0%,37.49%{opacity:0}37.5%,62.49%{opacity:1}62.5%,100%{opacity:0}}
@keyframes beat-cut-grid-v4{0%,62.49%{opacity:0}62.5%,87.49%{opacity:1}87.5%,100%{opacity:0}}
.v-beat-cut-grid .s1 .in{animation:beat-cut-grid-p1 6s linear infinite}
@keyframes beat-cut-grid-p1{0%{transform:scale(1)}12.5%{transform:scale(.975)}12.51%,87.5%{transform:scale(1.14);animation-timing-function:cubic-bezier(.2,.8,.2,1)}92%{transform:scale(1.01)}100%{transform:scale(1)}}
.v-beat-cut-grid .s2 .in{animation:beat-cut-grid-p2 6s linear infinite}
@keyframes beat-cut-grid-p2{0%,12.5%{transform:scale(1.12);animation-timing-function:cubic-bezier(.2,.8,.2,1)}17%{transform:scale(1.01)}37.5%,100%{transform:scale(.985)}}
.v-beat-cut-grid .s3 .in{animation:beat-cut-grid-p3 6s linear infinite}
@keyframes beat-cut-grid-p3{0%,37.5%{transform:scale(1.12);animation-timing-function:cubic-bezier(.2,.8,.2,1)}42%{transform:scale(1.01)}62.5%,100%{transform:scale(.985)}}
.v-beat-cut-grid .s4 .in{animation:beat-cut-grid-p4 6s linear infinite}
@keyframes beat-cut-grid-p4{0%,62.5%{transform:scale(1.16);animation-timing-function:cubic-bezier(.2,.8,.2,1)}67%{transform:scale(1.01)}87.5%,100%{transform:scale(1)}}
.v-beat-cut-grid .big{position:absolute;left:4cqw;top:8.6cqw;width:54cqw;font-family:var(--font-display);font-weight:800;font-size:9.4cqw;line-height:1;letter-spacing:-.05em}
.v-beat-cut-grid .orb{position:absolute;left:63cqw;top:7.6cqw;width:29cqw;height:29cqw;border-radius:50%;background:var(--paper);display:grid;place-items:center;box-shadow:0 2cqw 4cqw color-mix(in srgb,var(--paper) 35%,transparent)}
.v-beat-cut-grid .orbi{position:relative;width:62%;height:62%;color:var(--accent);animation:beat-cut-grid-spin 6s linear infinite}
.v-beat-cut-grid .orbi svg{width:100%;height:100%;display:block}
.v-beat-cut-grid .orbi b{position:absolute;left:43%;top:43%;width:14%;height:14%;border-radius:50%;background:var(--ink)}
@keyframes beat-cut-grid-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.v-beat-cut-grid .chatw{position:absolute;left:24cqw;top:5.6cqw;width:52cqw;transform-origin:0 0}
.v-beat-cut-grid .chat{padding:2cqw;border-radius:2cqw;background:#fff;color:#17140f;box-shadow:0 2cqw 4cqw rgba(60,45,20,.16),0 0 0 1px rgba(60,45,20,.06);animation:beat-cut-grid-chat 6s linear infinite}
@keyframes beat-cut-grid-chat{0%,12.5%{transform:translateY(5cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}18%,100%{transform:translateY(0)}}
.v-beat-cut-grid .me{margin-left:auto;width:max-content;max-width:80%;padding:1cqw 1.5cqw;border-radius:1.4cqw 1.4cqw .4cqw 1.4cqw;background:var(--paper);color:var(--ink);font-size:1.6cqw}
.v-beat-cut-grid .ai{display:flex;gap:1.2cqw;margin-top:1.6cqw}
.v-beat-cut-grid .ai i{width:2.8cqw;height:2.8cqw;flex:none;border-radius:.8cqw;background:conic-gradient(from 200deg,var(--accent),var(--secondary),var(--accent))}
.v-beat-cut-grid .ai div{flex:1;font-size:1.5cqw;color:#3a352c}
.v-beat-cut-grid .ai p{margin:0 0 1cqw}
.v-beat-cut-grid .ai ul{list-style:none;margin:0;padding:0;display:grid;gap:.7cqw}
.v-beat-cut-grid .ai li{display:flex;align-items:center;gap:.9cqw;padding:.9cqw 1.2cqw;border-radius:.9cqw;background:#f6f3ec;font-size:1.45cqw}
.v-beat-cut-grid .ai li b{width:1.7cqw;height:1.7cqw;border-radius:50%;background:var(--accent);flex:none;box-shadow:inset 0 0 0 .45cqw color-mix(in srgb,var(--accent) 22%,#fff)}
.v-beat-cut-grid .ai li span{margin-left:auto;font-family:var(--font-mono);font-size:1.15cqw;color:#9a927f}
.v-beat-cut-grid .num{position:absolute;left:4cqw;top:7cqw;font-family:var(--font-display);font-weight:800;font-size:18cqw;line-height:1;letter-spacing:-.06em}
.v-beat-cut-grid .bars{position:absolute;left:52cqw;top:8cqw;width:42cqw;height:29cqw;display:flex;align-items:flex-end;gap:1.2cqw;border-bottom:1px solid color-mix(in srgb,var(--ink) 35%,transparent)}
.v-beat-cut-grid .bars i{flex:1;height:calc(var(--h) * 1%);border-radius:.6cqw .6cqw 0 0;background:color-mix(in srgb,var(--ink) 90%,transparent);transform-origin:50% 100%}
.v-beat-cut-grid .bars i:nth-child(odd){animation:beat-cut-grid-ba 6s linear infinite}
.v-beat-cut-grid .bars i:nth-child(even){animation:beat-cut-grid-bb 6s linear infinite}
.v-beat-cut-grid .bars i:last-child{background:var(--accent);box-shadow:0 0 2cqw color-mix(in srgb,var(--accent) 60%,transparent)}
@keyframes beat-cut-grid-ba{0%,37.5%{transform:scaleY(.08);animation-timing-function:cubic-bezier(.2,.8,.2,1)}44%,100%{transform:scaleY(1)}}
@keyframes beat-cut-grid-bb{0%,38.6%{transform:scaleY(.08);animation-timing-function:cubic-bezier(.2,.8,.2,1)}45.5%,100%{transform:scaleY(1)}}
.v-beat-cut-grid .lock{position:absolute;left:0;right:0;top:11cqw;display:flex;align-items:center;justify-content:center;gap:2cqw;font-family:var(--font-display);font-weight:700;font-size:8.6cqw;line-height:1.1;letter-spacing:-.05em}
.v-beat-cut-grid .lm{width:9cqw;height:9cqw;flex:none;color:var(--accent)}
.v-beat-cut-grid .lm svg{width:100%;height:100%;display:block}
.v-beat-cut-grid .ln{white-space:nowrap}
.v-beat-cut-grid .ring{position:absolute;left:calc(50% - 18cqw);top:-1.6cqw;width:36cqw;height:36cqw;border-radius:50%;border:1px solid color-mix(in srgb,var(--accent) 35%,transparent);animation:beat-cut-grid-ring 6s linear infinite}
@keyframes beat-cut-grid-ring{0%,62.5%{transform:scale(.5);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}63%{opacity:1}75%,100%{transform:scale(1.25);opacity:0}}
.v-beat-cut-grid .flash{position:absolute;inset:0;background:#fff;opacity:0;animation:beat-cut-grid-flash 6s linear infinite}
@keyframes beat-cut-grid-flash{0%,12.49%{opacity:0}12.5%{opacity:.4}15.5%,37.49%{opacity:0}37.5%{opacity:.4}40.5%,62.49%{opacity:0}62.5%{opacity:.4}65.5%,87.49%{opacity:0}87.5%{opacity:.4}90.5%,100%{opacity:0}}
.v-beat-cut-grid .tag{position:absolute;left:6cqw;right:6cqw;top:25.5cqw;text-align:center;font-family:var(--font-mono);font-size:1.6cqw;color:color-mix(in srgb,var(--ink) 62%,transparent);animation:beat-cut-grid-v4 6s linear infinite}
.v-beat-cut-grid .tl{position:absolute;left:0;right:0;top:77.5cqh;bottom:0;background:color-mix(in srgb,var(--paper) 92%,var(--ink));border-top:1px solid color-mix(in srgb,var(--ink) 10%,transparent)}
.v-beat-cut-grid .tli{position:absolute;left:0;top:0;width:100cqw;height:12.65cqw;transform-origin:0 0}
.v-beat-cut-grid .bpm{position:absolute;left:3cqw;top:2cqw;font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-beat-cut-grid .bpm .row{display:flex;align-items:center;gap:.7cqw}
.v-beat-cut-grid .dot{width:.9cqw;height:.9cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);animation:beat-cut-grid-pulse .375s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes beat-cut-grid-pulse{0%{transform:scale(1.5);opacity:1}70%,100%{transform:scale(.8);opacity:.35}}
.v-beat-cut-grid .cnt{position:relative;display:flex;gap:.3cqw;margin-top:1.1cqw}
.v-beat-cut-grid .cnt b{position:relative;z-index:1;width:2cqw;height:2cqw;display:grid;place-items:center;border-radius:.4cqw;font-weight:500;color:color-mix(in srgb,var(--ink) 80%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 12%,transparent)}
.v-beat-cut-grid .cnt i{position:absolute;left:0;top:0;width:2cqw;height:2cqw;border-radius:.4cqw;background:color-mix(in srgb,var(--accent) 22%,transparent);box-shadow:inset 0 0 0 1px var(--accent),0 0 1cqw color-mix(in srgb,var(--accent) 45%,transparent);animation:beat-cut-grid-count 1.5s linear infinite}
@keyframes beat-cut-grid-count{0%,24.9%{transform:translateX(4.6cqw)}25%,49.9%{transform:translateX(6.9cqw)}50%,74.9%{transform:translateX(0)}75%,100%{transform:translateX(2.3cqw)}}
.v-beat-cut-grid .track{position:absolute;left:15cqw;width:82cqw;top:1.4cqw;bottom:1.4cqw}
.v-beat-cut-grid .clips{position:absolute;left:0;right:0;top:0;height:3.8cqw}
.v-beat-cut-grid .clips i{position:absolute;top:0;bottom:0;display:flex;align-items:center;padding-left:.8cqw;border-radius:.5cqw;font-style:normal;font-family:var(--font-mono);font-size:.95cqw;overflow:hidden;white-space:nowrap;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.v-beat-cut-grid .k1{left:0;width:calc(12.5% - .2cqw);background:var(--accent);color:var(--paper)}
.v-beat-cut-grid .k2{left:12.5%;width:calc(25% - .2cqw);background:var(--ink);color:var(--paper)}
.v-beat-cut-grid .k3{left:37.5%;width:calc(25% - .2cqw);background:var(--secondary);color:var(--ink)}
.v-beat-cut-grid .k4{left:62.5%;width:calc(25% - .2cqw);background:color-mix(in srgb,var(--paper) 80%,var(--ink));color:var(--accent)}
.v-beat-cut-grid .k5{left:87.5%;width:12.5%;background:var(--accent);color:var(--paper)}
.v-beat-cut-grid .ticks{position:absolute;left:0;right:0;top:4.6cqw;height:3.4cqw;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--ink) 38%,transparent) 0 1px,transparent 1px 6.25%) 0 100%/100% 1.2cqw no-repeat,repeating-linear-gradient(90deg,color-mix(in srgb,var(--ink) 12%,transparent) 0 1px,transparent 1px 1.5625%) 0 100%/100% .6cqw no-repeat}
.v-beat-cut-grid .cut{position:absolute;top:-.4cqw;height:8.6cqw;width:.18cqw;margin-left:-.09cqw;background:var(--accent);opacity:.85}
.v-beat-cut-grid .cut::after{content:"";position:absolute;left:-.45cqw;bottom:-.1cqw;width:1.05cqw;height:1.05cqw;background:var(--accent);transform:rotate(45deg) scale(.7)}
.v-beat-cut-grid .ph{position:absolute;left:0;top:-.9cqw;width:.2cqw;margin-left:-.1cqw;height:10.6cqw;background:#fff;box-shadow:0 0 1cqw rgba(255,255,255,.7);animation:beat-cut-grid-ph 6s linear infinite}
.v-beat-cut-grid .ph::before{content:"";position:absolute;left:-.7cqw;top:-.3cqw;width:1.6cqw;height:1.1cqw;background:#fff;clip-path:polygon(0 0,100% 0,50% 100%)}
@keyframes beat-cut-grid-ph{0%{left:0%}100%{left:100%}}
@container (max-aspect-ratio: 4/5){
  .v-beat-cut-grid .view{height:70cqh}
  .v-beat-cut-grid .lab{left:8cqw;top:9cqh;font-size:3.4cqw}
  .v-beat-cut-grid .big{left:8cqw;top:16cqh;width:84cqw;font-size:17cqw}
  .v-beat-cut-grid .orb{left:23cqw;top:66cqw;width:54cqw;height:54cqw}
  .v-beat-cut-grid .chatw{left:6cqw;top:30cqw;width:52cqw;transform:scale(1.69)}
  .v-beat-cut-grid .num{left:8cqw;top:15cqh;font-size:26cqw}
  .v-beat-cut-grid .bars{left:8cqw;top:66cqw;width:84cqw;height:48cqw;gap:2.4cqw}
  .v-beat-cut-grid .lock{top:46cqw;flex-direction:column;gap:5cqw;font-size:15cqw}
  .v-beat-cut-grid .lm{width:26cqw;height:26cqw}
  .v-beat-cut-grid .ring{left:calc(50% - 45cqw);top:22cqw;width:90cqw;height:90cqw}
  .v-beat-cut-grid .tl{top:70cqh}
  .v-beat-cut-grid .tli{transform:scale(2.05);width:48.8cqw}
  .v-beat-cut-grid .bpm{left:2.4cqw;top:1.6cqw}
  .v-beat-cut-grid .track{left:11cqw;width:36cqw}
  .v-beat-cut-grid .tag{left:8cqw;right:8cqw;top:auto;bottom:7cqh;font-size:5.6cqw;line-height:1.25}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beat-cut-grid .view{height:74cqh}
  .v-beat-cut-grid .lab{left:6cqw;top:5cqw;font-size:2cqw}
  .v-beat-cut-grid .big{left:6cqw;top:12cqw;width:60cqw;font-size:12cqw}
  .v-beat-cut-grid .orb{left:52cqw;top:34cqw;width:36cqw;height:36cqw}
  .v-beat-cut-grid .chatw{left:8cqw;top:11cqw;transform:scale(1.62)}
  .v-beat-cut-grid .num{left:6cqw;top:9cqw;font-size:24cqw}
  .v-beat-cut-grid .bars{left:6cqw;top:38cqw;width:88cqw;height:30cqw}
  .v-beat-cut-grid .lock{top:22cqw;font-size:13cqw;gap:3cqw}
  .v-beat-cut-grid .lm{width:13cqw;height:13cqw}
  .v-beat-cut-grid .ring{left:calc(50% - 30cqw);top:-2cqw;width:60cqw;height:60cqw}
  .v-beat-cut-grid .tag{top:47cqw;font-size:2.8cqw}
  .v-beat-cut-grid .tl{top:74cqh}
  .v-beat-cut-grid .tli{transform:scale(2.05);width:48.8cqw}
  .v-beat-cut-grid .bpm{left:2cqw;top:1.6cqw}
  .v-beat-cut-grid .track{left:11cqw;width:36cqw}
}
`,
};

export const beatEqTitle: SceneSpec = {
  id: "beat-eq-title",
  slug: "mg-beat-eq-title",
  name: "Equalizer Bounce Title",
  kind: "scene",
  job: "titles",
  language: "aura",
  mechanic: "letters-bounce-over-equalizer",
  energy: "punchy",
  settle: 3.3,
  colors: { ink: "#FFFFFF", accent: "#FF4F1F", secondary: "#FFD166", paper: "#07080A" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["music", "title", "equalizer"],
  fields: [
    { key: "title", label: "Title", default: "Lumen 2.0", maxChars: 12, role: "headline" },
    { key: "sub", label: "Subtitle", default: "Now with sound.", maxChars: 30, role: "caption" },
    { key: "pill", label: "Pill", default: "sound on", maxChars: 14, role: "label" },
    { key: "track", label: "Track label", default: "track 01 · 120 bpm", maxChars: 22, role: "kicker" },
  ],
  html: `<div class="bgl"></div>
<div class="glow"></div>
<div class="top">
  <div class="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3l4.5-4v13L7 14.5H4Z" fill="currentColor"/><path class="w1" d="M15 9.2a4 4 0 0 1 0 5.6"/><path class="w2" d="M17.8 6.6a7.6 7.6 0 0 1 0 10.8"/></svg><span data-21st-slot="pill">{{pill}}</span></div>
  <div class="trk" data-21st-slot="track">{{track}}</div>
</div>
<div class="title" data-21st-slot="title">{{title|chars}}</div>
<div class="eq">
  <i style="--h:35"></i><i style="--h:49"></i><i style="--h:62"></i><i style="--h:56"></i><i style="--h:76"></i><i style="--h:69"></i><i style="--h:87"></i><i style="--h:80"></i><i style="--h:94"></i><i style="--h:83"></i><i style="--h:97"></i><i style="--h:90"></i><i style="--h:100"></i><i style="--h:94"></i>
  <i style="--h:99"></i><i style="--h:96"></i><i style="--h:100"></i><i style="--h:87"></i><i style="--h:93"></i><i style="--h:80"></i><i style="--h:86"></i><i style="--h:72"></i><i style="--h:76"></i><i style="--h:62"></i><i style="--h:67"></i><i style="--h:51"></i><i style="--h:46"></i><i style="--h:35"></i>
</div>
<div class="floor"></div>
<div class="sub" data-21st-slot="sub">{{sub}}</div>`,
  css: `
.v-beat-eq-title{color:var(--ink);font-family:var(--font-body)}
.v-beat-eq-title .bgl{position:absolute;inset:0;display:none;background:radial-gradient(60% 75% at 50% 42%,color-mix(in srgb,var(--accent) 26%,var(--paper)) 0%,color-mix(in srgb,var(--accent) 9%,var(--paper)) 55%,var(--paper) 100%)}
.v-beat-eq-title[data-backdrop="on"]{background:var(--paper)}
.v-beat-eq-title[data-backdrop="on"] .bgl{display:block}
.v-beat-eq-title[data-backdrop="off"] .glow{display:none}
.v-beat-eq-title .glow{position:absolute;left:18cqw;top:4cqw;width:64cqw;height:34cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 45%,transparent),transparent);animation:beat-eq-title-glow .5s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes beat-eq-title-glow{0%{opacity:1;transform:scale(1.04)}100%{opacity:.45;transform:scale(1)}}
.v-beat-eq-title .top{position:absolute;left:4cqw;right:4cqw;top:4cqw;display:flex;align-items:center;justify-content:space-between;gap:2cqw}
.v-beat-eq-title .pill{display:flex;align-items:center;gap:.7cqw;padding:.55cqw 1.2cqw .55cqw .8cqw;border-radius:3cqw;background:color-mix(in srgb,var(--ink) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent);font-size:1.3cqw;color:color-mix(in srgb,var(--ink) 75%,var(--accent));white-space:nowrap}
.v-beat-eq-title .pill svg{width:1.8cqw;height:1.8cqw;flex:none}
.v-beat-eq-title .pill .w1,.v-beat-eq-title .pill .w2{animation:beat-eq-title-wave .5s cubic-bezier(.2,.8,.2,1) infinite}
.v-beat-eq-title .pill .w2{animation-duration:1s}
@keyframes beat-eq-title-wave{0%{opacity:1}100%{opacity:.25}}
.v-beat-eq-title .trk{font-family:var(--font-mono);font-size:1.2cqw;color:color-mix(in srgb,var(--ink) 58%,transparent);white-space:nowrap}
.v-beat-eq-title .title{position:absolute;left:4cqw;right:4cqw;top:9.2cqw;display:flex;flex-wrap:wrap;justify-content:center;font-family:var(--font-display);font-weight:800;font-size:10cqw;line-height:1.2;letter-spacing:-.04em;animation:beat-eq-title-in 6s linear infinite}
@keyframes beat-eq-title-in{0%,2%{transform:translateY(4cqw);opacity:0;filter:blur(1cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}16%,86%{transform:translateY(0);opacity:1;filter:blur(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}95%,100%{transform:translateY(-2cqw);opacity:0;filter:blur(.6cqw)}}
.v-beat-eq-title .c{display:inline-block;transform-origin:50% 100%;background:linear-gradient(180deg,var(--ink) 35%,color-mix(in srgb,var(--ink) 55%,var(--accent)) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;animation:beat-eq-title-kick .5s linear infinite}
.v-beat-eq-title .c:nth-child(4n+2){animation:beat-eq-title-hat .5s linear infinite}
.v-beat-eq-title .c:nth-child(4n+3){animation:beat-eq-title-snare 1s linear infinite}
.v-beat-eq-title .c:nth-child(4n){animation:beat-eq-title-swell 1s cubic-bezier(.45,0,.55,1) infinite}
@keyframes beat-eq-title-kick{0%{transform:translateY(-1.7cqw) scaleY(1.07);animation-timing-function:cubic-bezier(.2,.8,.2,1)}35%{transform:translateY(0) scaleY(.94)}55%,100%{transform:translateY(0) scaleY(1)}}
@keyframes beat-eq-title-snare{0%,48%{transform:translateY(0) scaleY(1)}50%{transform:translateY(-1.4cqw) scaleY(1.06);animation-timing-function:cubic-bezier(.2,.8,.2,1)}68%{transform:translateY(0) scaleY(.95)}80%,100%{transform:translateY(0) scaleY(1)}}
@keyframes beat-eq-title-hat{0%{transform:translateY(-.7cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}25%{transform:translateY(0)}45%{transform:translateY(-.5cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}56%,100%{transform:translateY(0)}}
@keyframes beat-eq-title-swell{0%,36%,100%{transform:translateY(0) scaleY(1)}70%{transform:translateY(-1.6cqw) scaleY(1.05)}}
.v-beat-eq-title .eq{position:absolute;left:14cqw;width:72cqw;top:28.6cqw;height:14.4cqw;display:flex;align-items:flex-end;gap:.85cqw;transform-origin:50% 100%;animation:beat-eq-title-eq 6s linear infinite}
@keyframes beat-eq-title-eq{0%,4%{transform:scaleY(0);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}6%{opacity:1}18%,86%{transform:scaleY(1);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}95%,100%{transform:scaleY(0);opacity:0}}
.v-beat-eq-title .eq i{flex:1;height:calc(var(--h) * 1%);border-radius:.5cqw .5cqw .15cqw .15cqw;background:linear-gradient(0deg,var(--accent) 0%,color-mix(in srgb,var(--accent) 50%,var(--secondary)) 60%,var(--secondary) 100%);transform-origin:50% 100%;box-shadow:0 0 1.2cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-beat-eq-title .eq i:nth-child(6n+1){animation:beat-eq-title-e1 .5s linear infinite}
.v-beat-eq-title .eq i:nth-child(6n+2){animation:beat-eq-title-e2 .5s linear infinite}
.v-beat-eq-title .eq i:nth-child(6n+3){animation:beat-eq-title-e3 .25s linear infinite}
.v-beat-eq-title .eq i:nth-child(6n+4){animation:beat-eq-title-e4 1s linear infinite}
.v-beat-eq-title .eq i:nth-child(6n+5){animation:beat-eq-title-e5 .5s linear infinite}
.v-beat-eq-title .eq i:nth-child(6n){animation:beat-eq-title-e6 1.5s linear infinite}
@keyframes beat-eq-title-e1{0%{transform:scaleY(1);animation-timing-function:cubic-bezier(.2,.8,.2,1)}60%,100%{transform:scaleY(.3)}}
@keyframes beat-eq-title-e2{0%{transform:scaleY(.4)}50%{transform:scaleY(1);animation-timing-function:cubic-bezier(.2,.8,.2,1)}100%{transform:scaleY(.4)}}
@keyframes beat-eq-title-e3{0%{transform:scaleY(.85)}50%{transform:scaleY(.45)}100%{transform:scaleY(.85)}}
@keyframes beat-eq-title-e4{0%{transform:scaleY(.3)}25%{transform:scaleY(.85)}50%{transform:scaleY(.5)}75%{transform:scaleY(1)}100%{transform:scaleY(.3)}}
@keyframes beat-eq-title-e5{0%{transform:scaleY(.7)}35%{transform:scaleY(1)}70%{transform:scaleY(.45)}100%{transform:scaleY(.7)}}
@keyframes beat-eq-title-e6{0%{transform:scaleY(.5)}20%{transform:scaleY(.9)}40%{transform:scaleY(.35)}60%{transform:scaleY(1)}80%{transform:scaleY(.6)}100%{transform:scaleY(.5)}}
.v-beat-eq-title .floor{position:absolute;left:10cqw;right:10cqw;top:43cqw;height:1px;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--accent) 80%,transparent),transparent)}
.v-beat-eq-title .sub{position:absolute;left:4cqw;right:4cqw;top:45.4cqw;text-align:center;font-family:var(--font-display);font-style:italic;font-weight:400;font-size:3.2cqw;line-height:1.15;color:color-mix(in srgb,var(--ink) 80%,var(--accent));animation:beat-eq-title-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes beat-eq-title-sub{0%,14%{opacity:0;transform:translateY(1.2cqw)}26%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@container (max-aspect-ratio: 4/5){
  .v-beat-eq-title .top{left:7cqw;right:7cqw;top:8cqh;flex-direction:column;align-items:flex-start;gap:3cqw}
  .v-beat-eq-title .pill{font-size:5.4cqw;gap:2cqw;padding:1.6cqw 3.4cqw 1.6cqw 2.4cqw;border-radius:8cqw}
  .v-beat-eq-title .pill svg{width:6cqw;height:6cqw}
  .v-beat-eq-title .trk{font-size:5.4cqw}
  .v-beat-eq-title .glow{left:-20cqw;top:30cqh;width:140cqw;height:90cqw}
  .v-beat-eq-title .title{left:5cqw;right:5cqw;top:29cqh;font-size:17cqw;line-height:1.15}
  .v-beat-eq-title .eq{left:7cqw;width:86cqw;top:52cqh;height:22cqh;gap:1.2cqw}
  .v-beat-eq-title .floor{left:4cqw;right:4cqw;top:74cqh}
  .v-beat-eq-title .sub{left:7cqw;right:7cqw;top:auto;bottom:8cqh;font-size:8.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beat-eq-title .top{left:6cqw;right:6cqw;top:6cqw}
  .v-beat-eq-title .pill{font-size:2.6cqw;gap:1.2cqw;padding:1cqw 2cqw 1cqw 1.4cqw}
  .v-beat-eq-title .pill svg{width:3cqw;height:3cqw}
  .v-beat-eq-title .trk{font-size:2.4cqw}
  .v-beat-eq-title .glow{left:5cqw;top:14cqw;width:90cqw;height:50cqw}
  .v-beat-eq-title .title{top:19cqh;font-size:14cqw}
  .v-beat-eq-title .eq{left:8cqw;width:84cqw;top:46cqh;height:28cqh}
  .v-beat-eq-title .floor{left:4cqw;right:4cqw;top:74cqh}
  .v-beat-eq-title .sub{top:79cqh;font-size:5.6cqw}
}
`,
};

const WAVE_D = "M0.4 11.1V16.9M1.2 10.5V17.5M2.0 9.7V18.3M2.8 11.0V17.0M3.6 11.1V16.9M4.4 10.3V17.7M5.2 10.2V17.8M6.0 9.9V18.1M6.8 10.8V17.2M7.6 8.1V19.9M8.4 7.7V20.3M9.2 9.1V18.9M10.0 9.6V18.4M10.8 9.2V18.8M11.6 9.2V18.8M12.4 8.8V19.2M13.2 8.9V19.1M14.0 9.5V18.5M14.8 9.2V18.8M15.6 9.1V18.9M16.4 8.7V19.3M17.2 9.8V18.2M18.0 7.2V20.8M18.8 8.6V19.4M19.6 9.7V18.3M20.4 10.5V17.5M21.2 10.5V17.5M22.0 9.0V19.0M22.8 9.3V18.7M23.6 9.2V18.8M24.4 10.0V18.0M25.2 9.2V18.8M26.0 8.4V19.6M26.8 8.7V19.3M27.6 7.8V20.2M28.4 7.4V20.6M29.2 7.6V20.4M30.0 8.2V19.8M30.8 9.0V19.0M31.6 9.3V18.7M32.4 8.6V19.4M33.2 8.6V19.4M34.0 8.5V19.5M34.8 9.7V18.3M35.6 9.6V18.4M36.4 8.7V19.3M37.2 8.0V20.0M38.0 7.2V20.8M38.8 8.8V19.2M39.6 9.7V18.3M40.4 8.9V19.1M41.2 10.6V17.4M42.0 11.0V17.0M42.8 9.8V18.2M43.6 10.1V17.9M44.4 10.1V17.9M45.2 11.6V16.4M46.0 10.3V17.7M46.8 9.2V18.8M47.6 7.9V20.1M48.4 8.3V19.7M49.2 10.8V17.2M50.0 9.9V18.1M50.8 9.8V18.2M51.6 10.4V17.6M52.4 11.4V16.6M53.2 10.0V18.0M54.0 9.4V18.6M54.8 10.2V17.8M55.6 10.6V17.4M56.4 9.5V18.5M57.2 4.4V23.6M58.0 2.8V25.2M58.8 4.8V23.2M59.6 9.0V19.0M60.4 10.2V17.8M61.2 10.0V18.0M62.0 10.2V17.8M62.8 11.9V16.1M63.6 10.5V17.5M64.4 10.3V17.7M65.2 10.5V17.5M66.0 10.8V17.2M66.8 7.1V20.9M67.6 3.4V24.6M68.4 3.2V24.8M69.2 7.4V20.6M70.0 10.0V18.0M70.8 10.7V17.3M71.6 10.0V18.0M72.4 10.3V17.7M73.2 10.8V17.2M74.0 10.1V17.9M74.8 9.5V18.5M75.6 10.1V17.9M76.4 9.3V18.7M77.2 5.7V22.3M78.0 2.8V25.2M78.8 4.1V23.9M79.6 9.2V18.8M80.4 11.4V16.6M81.2 10.6V17.4M82.0 10.2V17.8M82.8 10.3V17.7M83.6 11.1V16.9M84.4 10.9V17.1M85.2 10.5V17.5M86.0 9.4V18.6M86.8 7.6V20.4M87.6 3.8V24.2M88.4 2.8V25.2M89.2 6.4V21.6M90.0 9.7V18.3M90.8 11.1V16.9M91.6 10.2V17.8M92.4 10.4V17.6M93.2 9.7V18.3M94.0 10.7V17.3M94.8 10.2V17.8M95.6 9.6V18.4M96.4 10.0V18.0M97.2 9.7V18.3M98.0 9.1V18.9M98.8 8.9V19.1M99.6 10.3V17.7M100.4 11.1V16.9M101.2 10.5V17.5M102.0 9.7V18.3M102.8 11.0V17.0M103.6 11.1V16.9M104.4 10.3V17.7M105.2 10.2V17.8M106.0 9.9V18.1M106.8 10.8V17.2M107.6 8.1V19.9M108.4 7.7V20.3M109.2 9.1V18.9M110.0 9.6V18.4M110.8 9.2V18.8M111.6 9.2V18.8M112.4 8.8V19.2M113.2 8.9V19.1M114.0 9.5V18.5M114.8 9.2V18.8M115.6 9.1V18.9M116.4 8.7V19.3M117.2 9.8V18.2M118.0 7.2V20.8M118.8 8.6V19.4M119.6 9.7V18.3M120.4 10.5V17.5M121.2 10.5V17.5M122.0 9.0V19.0M122.8 9.3V18.7M123.6 9.2V18.8M124.4 10.0V18.0M125.2 9.2V18.8M126.0 8.4V19.6M126.8 8.7V19.3M127.6 7.8V20.2M128.4 7.4V20.6M129.2 7.6V20.4M130.0 8.2V19.8M130.8 9.0V19.0M131.6 9.3V18.7M132.4 8.6V19.4M133.2 8.6V19.4M134.0 8.5V19.5M134.8 9.7V18.3M135.6 9.6V18.4M136.4 8.7V19.3M137.2 8.0V20.0M138.0 7.2V20.8M138.8 8.8V19.2M139.6 9.7V18.3M140.4 8.9V19.1M141.2 10.6V17.4M142.0 11.0V17.0M142.8 9.8V18.2M143.6 10.1V17.9M144.4 10.1V17.9M145.2 11.6V16.4M146.0 10.3V17.7M146.8 9.2V18.8M147.6 7.9V20.1M148.4 8.3V19.7M149.2 10.8V17.2M150.0 9.9V18.1M150.8 9.8V18.2M151.6 10.4V17.6M152.4 11.4V16.6M153.2 10.0V18.0M154.0 9.4V18.6M154.8 10.2V17.8M155.6 10.6V17.4M156.4 9.5V18.5M157.2 4.4V23.6M158.0 2.8V25.2M158.8 4.8V23.2M159.6 9.0V19.0M160.4 10.2V17.8M161.2 10.0V18.0M162.0 10.2V17.8M162.8 11.9V16.1M163.6 10.5V17.5M164.4 10.3V17.7M165.2 10.5V17.5M166.0 10.8V17.2M166.8 7.1V20.9M167.6 3.4V24.6M168.4 3.2V24.8M169.2 7.4V20.6M170.0 10.0V18.0M170.8 10.7V17.3M171.6 10.0V18.0M172.4 10.3V17.7M173.2 10.8V17.2M174.0 10.1V17.9M174.8 9.5V18.5M175.6 10.1V17.9M176.4 9.3V18.7M177.2 5.7V22.3M178.0 2.8V25.2M178.8 4.1V23.9M179.6 9.2V18.8M180.4 11.4V16.6M181.2 10.6V17.4M182.0 10.2V17.8M182.8 10.3V17.7M183.6 11.1V16.9M184.4 10.9V17.1M185.2 10.5V17.5M186.0 9.4V18.6M186.8 7.6V20.4M187.6 3.8V24.2M188.4 2.8V25.2M189.2 6.4V21.6M190.0 9.7V18.3M190.8 11.1V16.9M191.6 10.2V17.8M192.4 10.4V17.6M193.2 9.7V18.3M194.0 10.7V17.3M194.8 10.2V17.8M195.6 9.6V18.4M196.4 10.0V18.0M197.2 9.7V18.3M198.0 9.1V18.9M198.8 8.9V19.1M199.6 10.3V17.7";
const WAVE_SVG = `<svg viewBox="0 0 200 29" preserveAspectRatio="none"><path d="${WAVE_D}" stroke="currentColor" stroke-width=".42" stroke-linecap="round"/><path class="tk" d="M8 27V29M18 27V29M28 27V29M38 27V29M48 27V29M58 27V29M68 27V29M78 27V29M88 27V29M98 27V29M108 27V29M118 27V29M128 27V29M138 27V29M148 27V29M158 27V29M168 27V29M178 27V29M188 27V29M198 27V29" stroke-width=".12"/><path class="mk" d="M58 .1l1 1.2-1 1.2-1-1.2ZM68 .1l1 1.2-1 1.2-1-1.2ZM78 .1l1 1.2-1 1.2-1-1.2ZM88 .1l1 1.2-1 1.2-1-1.2ZM158 .1l1 1.2-1 1.2-1-1.2ZM168 .1l1 1.2-1 1.2-1-1.2ZM178 .1l1 1.2-1 1.2-1-1.2ZM188 .1l1 1.2-1 1.2-1-1.2Z"/></svg>`;

export const beatWaveform: SceneSpec = {
  id: "beat-waveform",
  slug: "mg-beat-waveform",
  name: "Waveform Word Hits",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "words-land-on-waveform-peaks",
  energy: "default",
  settle: 3.6,
  colors: { ink: "#121110", accent: "#FF4F12", secondary: "#CDC7BA", paper: "#F4F2ED" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["beat-sync", "kinetic-type", "audio"],
  fields: [
    { key: "headline", label: "Headline", default: "Think faster. Ship sooner.", maxChars: 30, role: "headline" },
    { key: "file", label: "Track label", default: "launch_cut_v3.wav · 100 bpm", maxChars: 30, role: "kicker" },
    { key: "caption", label: "Caption", default: "Every word lands on a peak.", maxChars: 34, role: "caption" },
  ],
  html: `<div class="top"><span class="file"><i class="rec"></i><span data-21st-slot="file">{{file}}</span></span><span class="tc">00:00:0<span class="rl rs"><span>0<br>1<br>2<br>3<br>4<br>5</span></span>:<span class="rl rf"><span>00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24</span></span></span></div>
<div class="words" data-21st-slot="headline">{{headline|words}}</div>
<div class="deck">
  <div class="wave">
    <div class="lay unplayed">${WAVE_SVG}</div>
    <div class="lay played">${WAVE_SVG}</div>
  </div>
  <div class="ph"></div>
  <div class="hit"></div>
</div>
<div class="bot"><span class="cap" data-21st-slot="caption">{{caption}}</span><span class="leg"><b>◆ hit</b>| beat</span></div>`,
  css: `
.v-beat-waveform{color:var(--ink);font-family:var(--font-body)}
.v-beat-waveform[data-backdrop="on"]{background:radial-gradient(80% 70% at 50% 100%,color-mix(in srgb,var(--paper) 88%,var(--ink)) 0%,var(--paper) 60%)}
.v-beat-waveform .top{position:absolute;left:5cqw;right:5cqw;top:3.6cqw;display:flex;justify-content:space-between;align-items:center;gap:2cqw;font-family:var(--font-mono);font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-beat-waveform .file{display:flex;align-items:center;min-width:0}
.v-beat-waveform .tc{display:flex;align-items:center;color:var(--ink);font-size:1.35cqw;font-weight:500;line-height:1.35}
.v-beat-waveform .rl{height:1.35em;overflow:hidden;line-height:1.35em}
.v-beat-waveform .rl>span{display:block}
.v-beat-waveform .rs>span{animation:beat-waveform-sec 6s steps(6,end) infinite}
.v-beat-waveform .rf>span{animation:beat-waveform-fr 1s steps(25,end) infinite}
@keyframes beat-waveform-sec{0%{transform:translateY(0)}100%{transform:translateY(-8.1em)}}
@keyframes beat-waveform-fr{0%{transform:translateY(0)}100%{transform:translateY(-33.75em)}}
.v-beat-waveform .rec{display:inline-block;flex:none;width:.65em;height:.65em;margin-right:.7em;border-radius:50%;background:var(--accent);animation:beat-waveform-rec 1s steps(1) infinite}
@keyframes beat-waveform-rec{0%{opacity:1}50%,100%{opacity:.25}}
.v-beat-waveform .words{position:absolute;left:5cqw;right:5cqw;top:8.2cqw;font-family:var(--font-display);font-size:9.6cqw;line-height:1.08;letter-spacing:-.05em}
.v-beat-waveform .w{--delay:calc(var(--i) * .6s);display:inline-block;margin-right:.18em;font-weight:800;transform-origin:0 85%;animation:beat-waveform-w 6s linear infinite}
.v-beat-waveform .w:nth-child(even){font-weight:400;font-style:italic;letter-spacing:-.03em;color:var(--accent)}
@keyframes beat-waveform-w{0%,7.6%{opacity:0;transform:scale(1.55);filter:blur(.6cqw)}8%{opacity:1;transform:scale(1.18);filter:blur(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}12%,84%{opacity:1;transform:scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}90%,100%{opacity:0;transform:translateY(-2cqw) scale(1);filter:blur(0)}}
.v-beat-waveform .deck{position:absolute;left:0;width:100cqw;top:29.6cqw;height:18.4cqw}
.v-beat-waveform .wave{position:absolute;left:0;right:0;top:10%;bottom:6%;overflow:hidden}
.v-beat-waveform .lay{position:absolute;inset:0}
.v-beat-waveform .unplayed{color:var(--secondary)}
.v-beat-waveform .played{color:var(--ink);clip-path:inset(0 50% 0 0)}
.v-beat-waveform .lay svg{position:absolute;left:0;top:0;width:200cqw;height:100%;overflow:visible;animation:beat-waveform-scroll 6s linear infinite}
.v-beat-waveform .tk{stroke:color-mix(in srgb,var(--ink) 30%,transparent)}
.v-beat-waveform .mk{fill:var(--accent);stroke:none}
@keyframes beat-waveform-scroll{0%{transform:translateX(0)}100%{transform:translateX(-100cqw)}}
.v-beat-waveform .ph{position:absolute;left:calc(50cqw - .13cqw);top:0;width:.26cqw;height:100%;background:var(--accent);box-shadow:0 0 1.4cqw color-mix(in srgb,var(--accent) 55%,transparent)}
.v-beat-waveform .ph::before{content:"";position:absolute;left:-.77cqw;top:-.2cqw;width:1.8cqw;height:1.3cqw;background:var(--accent);clip-path:polygon(0 0,100% 0,50% 100%)}
.v-beat-waveform .hit{position:absolute;left:calc(50cqw - 4cqw);top:calc(52% - 4cqw);width:8cqw;height:8cqw;border-radius:50%;box-shadow:0 0 0 .3cqw var(--accent),0 0 2cqw color-mix(in srgb,var(--accent) 60%,transparent);opacity:0;animation:beat-waveform-hit 6s linear infinite}
@keyframes beat-waveform-hit{0%,7.9%{opacity:0;transform:scale(.3)}8%{opacity:1;transform:scale(.3);animation-timing-function:cubic-bezier(.2,.8,.2,1)}12%,17.9%{opacity:0;transform:scale(1.4)}18%{opacity:1;transform:scale(.3);animation-timing-function:cubic-bezier(.2,.8,.2,1)}22%,27.9%{opacity:0;transform:scale(1.4)}28%{opacity:1;transform:scale(.3);animation-timing-function:cubic-bezier(.2,.8,.2,1)}32%,37.9%{opacity:0;transform:scale(1.4)}38%{opacity:1;transform:scale(.3);animation-timing-function:cubic-bezier(.2,.8,.2,1)}42%,100%{opacity:0;transform:scale(1.4)}}
.v-beat-waveform .bot{position:absolute;left:5cqw;right:5cqw;top:49.6cqw;display:flex;justify-content:space-between;align-items:center;gap:3cqw;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-beat-waveform .cap{font-size:1.5cqw}
.v-beat-waveform .leg{display:flex;align-items:center;gap:1.4cqw;font-family:var(--font-mono);font-size:1.1cqw;white-space:nowrap}
.v-beat-waveform .leg b{font-weight:400;color:var(--accent)}
@container (max-aspect-ratio: 4/5){
  .v-beat-waveform .top{left:7cqw;right:7cqw;top:8cqh;flex-direction:column;align-items:flex-start;gap:2.4cqw;font-size:5.4cqw}
  .v-beat-waveform .tc{font-size:4.6cqw}
  .v-beat-waveform .words{left:7cqw;right:7cqw;top:24cqh;font-size:15.5cqw}
  .v-beat-waveform .deck{top:60cqh;height:20cqh}
  .v-beat-waveform .ph{width:.6cqw;left:calc(50cqw - .3cqw)}
  .v-beat-waveform .ph::before{left:-1.7cqw;width:4cqw;height:3cqw}
  .v-beat-waveform .hit{left:calc(50cqw - 9cqw);top:calc(52% - 9cqw);width:18cqw;height:18cqw}
  .v-beat-waveform .bot{left:7cqw;right:7cqw;top:auto;bottom:7cqh;flex-direction:column;align-items:flex-start;gap:2cqw}
  .v-beat-waveform .cap{font-size:5.8cqw;line-height:1.2}
  .v-beat-waveform .leg{font-size:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beat-waveform .top{left:6cqw;right:6cqw;top:6cqw;font-size:2.2cqw}
  .v-beat-waveform .tc{font-size:2.4cqw}
  .v-beat-waveform .words{left:6cqw;right:6cqw;top:15cqw;font-size:12.5cqw}
  .v-beat-waveform .deck{top:58cqh;height:24cqh}
  .v-beat-waveform .ph{width:.4cqw}
  .v-beat-waveform .ph::before{left:-1.2cqw;width:2.8cqw;height:2cqw}
  .v-beat-waveform .hit{left:calc(50cqw - 6cqw);top:calc(52% - 6cqw);width:12cqw;height:12cqw}
  .v-beat-waveform .bot{left:6cqw;right:6cqw;top:auto;bottom:6cqw}
  .v-beat-waveform .cap{font-size:2.8cqw}
  .v-beat-waveform .leg{font-size:2cqw}
}
`,
};

export const RHYTHM_SCENES: SceneSpec[] = [beatCutGrid, beatEqTitle, beatWaveform];
