// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const hireMosaic: SceneSpec = {
  id: "hire-mosaic",
  slug: "mg-hire-mosaic",
  name: "Careers Culture Mosaic",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "culture-tiles-wipe-up-mosaic",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#F4EEE3", accent: "#FF5B2E", secondary: "#7BE0A8", paper: "#171316" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["hiring", "careers", "culture", "mosaic"],
  fields: [
    { key: "brand", label: "Company", default: "Wayfold", maxChars: 18, role: "label" },
    { key: "kicker", label: "Kicker", default: "Careers · 12 open roles", maxChars: 30, role: "kicker" },
    { key: "headline", label: "Headline", default: "Do the best work of your life, with people you like.", maxChars: 60, role: "headline" },
    { key: "cta", label: "Button", default: "See open roles", maxChars: 20, role: "cta" },
  ],
  html: `<div class="nav"><div class="logo"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span data-21st-slot="brand">{{brand}}</span></div><div class="pill"><b></b>We're hiring</div></div>
<div class="copy">
  <div class="eyebrow" data-21st-slot="kicker">{{kicker}}</div>
  <div class="h" data-21st-slot="headline">{{headline|words}}</div>
  <div class="ctas"><span class="btn"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span><span class="ghost">Life at the studio</span></div>
</div>
<div class="proof"><span class="av"><i style="--c:#FFC9B5"></i><i style="--c:#C3EEDB"></i><i style="--c:#DCD0FF"></i><i style="--c:#FFE3A1"></i></span><span>142 people in 23 countries</span></div>
<div class="tile ta"><div class="sc"><div class="win"></div><div class="beam"></div><div class="desk"></div><div class="mug"></div><div class="plant"><i></i><i></i><i></i></div><div class="pot"></div></div><span class="cap">Lisbon studio</span></div>
<div class="tile tb"><div class="sc"><div class="sun"></div><div class="m m1"></div><div class="m m2"></div><div class="m m3"></div><div class="fire"></div><div class="tent t1"></div><div class="tent t2"></div></div><span class="cap">Offsite '26</span></div>
<div class="tile tc"><div class="sc"><div class="scr"><div class="lab">+38%<small>friday demo · v2.4</small></div><svg viewBox="0 0 100 40" preserveAspectRatio="none" fill="none"><path d="M0 34 L14 30 L26 32 L40 22 L54 24 L68 14 L82 12 L100 3" stroke="#2A1D3F" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/><path d="M0 34 L14 30 L26 32 L40 22 L54 24 L68 14 L82 12 L100 3 L100 40 L0 40Z" fill="#2A1D3F" opacity=".12"/></svg></div><div class="crowd"><div class="hd"></div><div class="hd"></div><div class="hd"></div></div></div><span class="cap">Friday demos</span></div>
<div class="tile td"><div class="sc"><div class="plate p1"></div><div class="plate p2"></div><div class="plate p3"></div><div class="cup"></div></div><span class="cap">Team lunch</span></div>
<div class="tile te"><div class="sc"><div class="cone"></div><div class="larm"></div><div class="lhead"></div><div class="lap"></div></div><span class="cap">Deep work</span></div>`,
  css: `
.v-hire-mosaic,.v-hire-mosaic *{box-sizing:border-box}
.v-hire-mosaic svg{display:block}
.v-hire-mosaic{color:var(--ink);font-family:var(--font-body)}
.v-hire-mosaic[data-backdrop="on"]{background:radial-gradient(90% 120% at 0% 0%,color-mix(in srgb,var(--paper) 80%,var(--accent)) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 70%,#000) 100%)}
.v-hire-mosaic .nav{position:absolute;left:6cqw;top:4.4cqw;display:flex;align-items:center;gap:1.6cqw;animation:hire-mosaic-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-mosaic .logo{display:flex;align-items:center;gap:.7cqw;font-weight:600;font-size:1.7cqw;line-height:1.25;letter-spacing:-.02em}
.v-hire-mosaic .logo svg{width:2.4cqw;height:2.4cqw;color:var(--accent);flex:none}
.v-hire-mosaic .pill{display:flex;align-items:center;gap:.6cqw;font:500 1.02cqw/1 var(--font-mono);padding:.45cqw .95cqw;border-radius:5cqw;border:1px solid color-mix(in srgb,var(--ink) 20%,transparent);color:color-mix(in srgb,var(--ink) 75%,transparent);white-space:nowrap}
.v-hire-mosaic .pill b{display:block;width:.7cqw;height:.7cqw;border-radius:50%;background:var(--secondary);box-shadow:0 0 .8cqw var(--secondary);animation:hire-mosaic-blink 1.5s ease-in-out infinite}
.v-hire-mosaic .copy{position:absolute;left:6cqw;top:8cqw;bottom:8cqw;width:40cqw;display:flex;flex-direction:column;justify-content:center}
.v-hire-mosaic .eyebrow{font:500 1.15cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--accent) 60%,var(--ink));animation:hire-mosaic-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-mosaic .h{margin-top:1cqw;font-family:var(--font-display);font-size:4.6cqw;line-height:1.1;letter-spacing:-.01em}
.v-hire-mosaic .h .w{--delay:calc(.15s + var(--i) * .09s);display:inline-block;line-height:1.3;padding-right:.04em;animation:hire-mosaic-wl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-mosaic .h .w:nth-last-child(-n+3){font-style:italic;padding-right:.08em;color:color-mix(in srgb,var(--accent) 45%,var(--ink))}
.v-hire-mosaic .ctas{align-self:flex-start;margin-top:2.4cqw;display:flex;gap:1cqw;align-items:center;animation:hire-mosaic-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-mosaic .btn{display:flex;align-items:center;gap:.8cqw;background:var(--accent);color:var(--paper);font-weight:600;font-size:1.35cqw;line-height:1.25;padding:1cqw 1.8cqw;border-radius:5cqw;white-space:nowrap;box-shadow:0 .6cqw 2cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-hire-mosaic .btn svg{width:1.35cqw;height:1.35cqw;animation:hire-mosaic-nudge 1.5s ease-in-out infinite}
.v-hire-mosaic .ghost{font-size:1.35cqw;line-height:1.25;padding:1cqw 1.6cqw;border-radius:5cqw;border:1px solid color-mix(in srgb,var(--ink) 22%,transparent);color:color-mix(in srgb,var(--ink) 88%,transparent);white-space:nowrap}
.v-hire-mosaic .proof{position:absolute;left:6cqw;bottom:4.6cqw;display:flex;align-items:center;gap:1.1cqw;font-size:1.2cqw;color:color-mix(in srgb,var(--ink) 66%,transparent);animation:hire-mosaic-up2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-mosaic .av{display:flex;padding-left:.8cqw}
.v-hire-mosaic .av i{display:block;width:2.6cqw;height:2.6cqw;border-radius:50%;margin-left:-.8cqw;border:.2cqw solid var(--paper);background:radial-gradient(circle at 50% 40%,rgba(40,24,20,.82) 0 .5cqw,transparent .55cqw),radial-gradient(1.05cqw .8cqw at 50% 106%,rgba(40,24,20,.82) 0 96%,transparent 100%),var(--c)}
.v-hire-mosaic .tile{position:absolute;border-radius:1.4cqw;overflow:hidden;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent)}
.v-hire-mosaic .tile::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,color-mix(in srgb,var(--paper) 50%,transparent)),linear-gradient(135deg,color-mix(in srgb,var(--accent) 22%,transparent),transparent 55%);pointer-events:none}
.v-hire-mosaic .ta{left:48cqw;top:8.5cqw;width:21cqw;height:27cqw;animation:hire-mosaic-tile 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-mosaic .tb{left:70.5cqw;top:4.5cqw;width:24cqw;height:17.5cqw;--delay:.24s;animation:hire-mosaic-tile 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-mosaic .tc{left:70.5cqw;top:23.5cqw;width:24cqw;height:28cqw;--delay:.48s;animation:hire-mosaic-tile 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-mosaic .td{left:48cqw;top:37cqw;width:10cqw;height:14.5cqw;--delay:.72s;animation:hire-mosaic-tile 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-mosaic .te{left:59.5cqw;top:37cqw;width:9.5cqw;height:14.5cqw;--delay:.96s;animation:hire-mosaic-tile 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-mosaic .sc{position:absolute;inset:0;--delay:0s;animation:hire-mosaic-kb 6s linear infinite}
.v-hire-mosaic .tb .sc{transform-origin:70% 40%}
.v-hire-mosaic .tc .sc{transform-origin:50% 20%}
.v-hire-mosaic .td .sc{transform-origin:30% 70%}
.v-hire-mosaic .cap{position:absolute;z-index:2;left:.8cqw;bottom:.8cqw;font-size:.95cqw;font-weight:500;padding:.35cqw .75cqw;border-radius:3cqw;background:rgba(18,14,16,.62);color:#F4EEE3;white-space:nowrap}
.v-hire-mosaic .ta .sc{background:linear-gradient(180deg,#EBAB7B 0%,#DC8C5F 68%,#B26843 68.5%,#97573A 100%)}
.v-hire-mosaic .win{position:absolute;left:24%;top:11%;width:48%;height:44%;border-radius:.3cqw;background:linear-gradient(180deg,#BFE0F0 0%,#E8E4D6 60%,#F8D9B6 100%);box-shadow:inset 0 0 0 .45cqw #F3E2CC,0 0 3cqw rgba(255,233,200,.6)}
.v-hire-mosaic .win::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent calc(50% - .22cqw),#F3E2CC calc(50% - .22cqw),#F3E2CC calc(50% + .22cqw),transparent calc(50% + .22cqw)),linear-gradient(180deg,transparent calc(50% - .22cqw),#F3E2CC calc(50% - .22cqw),#F3E2CC calc(50% + .22cqw),transparent calc(50% + .22cqw))}
.v-hire-mosaic .beam{position:absolute;left:22%;top:50%;width:78%;height:50%;background:linear-gradient(165deg,rgba(255,240,210,.6),rgba(255,240,210,0) 75%);clip-path:polygon(4% 0,52% 0,100% 100%,38% 100%);animation:hire-mosaic-beam 6s ease-in-out infinite}
.v-hire-mosaic .desk{position:absolute;left:46%;right:-4%;top:62%;height:4%;background:#6E4630;border-radius:.2cqw}
.v-hire-mosaic .mug{position:absolute;left:62%;top:55%;width:7%;height:7%;border-radius:0 0 .4cqw .4cqw;background:#F4EEE3}
.v-hire-mosaic .pot{position:absolute;left:8%;top:66%;width:20%;height:14%;background:linear-gradient(90deg,#C9643D,#A44E2E);clip-path:polygon(0 0,100% 0,86% 100%,14% 100%)}
.v-hire-mosaic .plant{position:absolute;left:4%;top:38%;width:28%;height:30%;transform-origin:50% 100%;animation:hire-mosaic-sway 6s ease-in-out infinite}
.v-hire-mosaic .plant i{position:absolute;bottom:0;width:30%;height:80%;border-radius:100% 0;background:linear-gradient(135deg,#5E9E62,#2F6B3E);transform-origin:50% 100%}
.v-hire-mosaic .plant i:nth-child(1){left:35%;transform:rotate(-4deg)}
.v-hire-mosaic .plant i:nth-child(2){left:12%;height:62%;transform:rotate(-32deg)}
.v-hire-mosaic .plant i:nth-child(3){left:56%;height:66%;transform:rotate(28deg)}
.v-hire-mosaic .tb .sc{background:linear-gradient(180deg,#F7B88C 0%,#EE8466 45%,#8D5A8E 100%)}
.v-hire-mosaic .sun{position:absolute;left:56%;top:22%;width:24%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#FFF2CC 0 46%,rgba(255,242,204,.4) 56%,rgba(255,242,204,0) 72%);animation:hire-mosaic-sun 6s linear infinite}
.v-hire-mosaic .m{position:absolute;left:-5%;right:-5%;bottom:0}
.v-hire-mosaic .m1{height:62%;background:#8A5B8F;clip-path:polygon(0 60%,18% 25%,32% 48%,50% 8%,68% 45%,82% 22%,100% 50%,100% 100%,0 100%)}
.v-hire-mosaic .m2{height:44%;background:#583A6C;clip-path:polygon(0 55%,22% 18%,40% 50%,60% 14%,78% 40%,100% 20%,100% 100%,0 100%)}
.v-hire-mosaic .m3{height:22%;background:#2B1F3D;clip-path:polygon(0 40%,30% 12%,55% 45%,75% 22%,100% 50%,100% 100%,0 100%)}
.v-hire-mosaic .fire{position:absolute;left:38%;bottom:4%;width:16%;height:22%;border-radius:50%;background:radial-gradient(circle,rgba(255,190,110,.75),rgba(255,190,110,0) 65%);animation:hire-mosaic-beam 1.5s ease-in-out infinite}
.v-hire-mosaic .tent{position:absolute;bottom:5%;width:9%;height:13%;background:linear-gradient(90deg,#FFB25C 50%,#E58A3A 50%);clip-path:polygon(50% 0,100% 100%,0 100%)}
.v-hire-mosaic .tent.t1{left:30%}
.v-hire-mosaic .tent.t2{left:52%;width:7%;height:10%}
.v-hire-mosaic .tc .sc{background:radial-gradient(80% 60% at 50% 30%,#3D3168 0%,#1B1731 60%,#110E1E 100%)}
.v-hire-mosaic .scr{position:absolute;left:12%;top:10%;width:76%;height:44%;border-radius:.5cqw;background:linear-gradient(135deg,#FFF0E4,#FFC2AA 50%,#D3C4FF);box-shadow:0 0 4cqw rgba(201,184,255,.5),0 0 1.4cqw rgba(255,181,158,.55)}
.v-hire-mosaic .scr .lab{position:absolute;left:7%;top:10%;font-weight:700;font-size:1.7cqw;line-height:1.1;color:#2A1D3F;letter-spacing:-.03em}
.v-hire-mosaic .scr .lab small{display:block;font:500 .7cqw/1.2 var(--font-mono);letter-spacing:0;color:#6B5A80;margin-top:.2cqw}
.v-hire-mosaic .scr svg{position:absolute;left:6%;right:6%;bottom:10%;width:88%;height:48%;animation:hire-mosaic-draw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-mosaic .crowd{position:absolute;left:0;right:0;bottom:0;height:46%}
.v-hire-mosaic .hd{position:absolute;bottom:-8%;width:30%;height:92%;filter:drop-shadow(0 -.15cqw .25cqw rgba(214,196,255,.65))}
.v-hire-mosaic .hd::before{content:"";position:absolute;left:28%;top:0;width:44%;aspect-ratio:1;border-radius:50%;background:#0C0A14}
.v-hire-mosaic .hd::after{content:"";position:absolute;left:0;right:0;bottom:0;height:56%;border-radius:50% 50% 0 0/80% 80% 0 0;background:#0C0A14}
.v-hire-mosaic .hd:nth-child(1){left:-2%}
.v-hire-mosaic .hd:nth-child(2){left:35%;height:100%}
.v-hire-mosaic .hd:nth-child(3){left:72%;height:86%}
.v-hire-mosaic .td .sc{background:repeating-linear-gradient(90deg,#C88A5A 0 1.1cqw,#BC7E4F 1.1cqw 2.2cqw)}
.v-hire-mosaic .plate{position:absolute;width:52%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#FBF6EE 0 56%,#EADFCF 58% 66%,#FBF6EE 68%);box-shadow:0 .35cqw .7cqw rgba(60,30,10,.35)}
.v-hire-mosaic .plate::after{content:"";position:absolute;inset:24%;border-radius:50%;background:radial-gradient(circle at 34% 40%,#E5533A 0 16%,transparent 18%),radial-gradient(circle at 64% 60%,#F2C14E 0 15%,transparent 17%),radial-gradient(circle at 40% 72%,#5B9E4C 0 14%,transparent 16%),#A6D17A}
.v-hire-mosaic .plate.p1{left:4%;top:6%}
.v-hire-mosaic .plate.p2{left:46%;top:36%}
.v-hire-mosaic .plate.p3{left:2%;top:64%}
.v-hire-mosaic .cup{position:absolute;left:66%;top:10%;width:22%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#4A2B1A 0 52%,#F4EEE3 56%);box-shadow:0 .3cqw .6cqw rgba(60,30,10,.35)}
.v-hire-mosaic .te .sc{background:linear-gradient(180deg,#26324D 0%,#1A2338 66%,#5B4636 66.5%,#4A382B 100%)}
.v-hire-mosaic .cone{position:absolute;left:4%;top:24%;width:84%;height:44%;background:linear-gradient(180deg,rgba(255,214,140,.7),rgba(255,214,140,0));clip-path:polygon(34% 0,56% 0,100% 100%,0 100%);animation:hire-mosaic-beam 6s ease-in-out infinite}
.v-hire-mosaic .lhead{position:absolute;left:30%;top:17%;width:32%;height:9%;border-radius:2cqw 2cqw .2cqw .2cqw;background:#E8B85C;transform:rotate(-8deg)}
.v-hire-mosaic .larm{position:absolute;left:20%;top:20%;width:.3cqw;height:46%;background:#0E1320;transform:rotate(16deg);transform-origin:50% 100%}
.v-hire-mosaic .lap{position:absolute;left:38%;top:47%;width:50%;height:19%;border-radius:.3cqw .3cqw 0 0;background:linear-gradient(135deg,#9FD8FF,#7B8CFF);box-shadow:0 0 1.6cqw rgba(140,170,255,.6)}
.v-hire-mosaic .lap::after{content:"";position:absolute;left:-8%;right:-8%;bottom:-.4cqw;height:.4cqw;border-radius:.2cqw;background:#C9CED8}
@container (max-aspect-ratio: 4/5){
  .v-hire-mosaic .nav{left:8cqw;right:8cqw;top:6cqh;justify-content:space-between;gap:3cqw}
  .v-hire-mosaic .logo{font-size:5.6cqw;gap:2cqw}
  .v-hire-mosaic .logo svg{width:7cqw;height:7cqw}
  .v-hire-mosaic .pill{font-size:3cqw;padding:1.4cqw 2.6cqw;gap:1.6cqw}
  .v-hire-mosaic .pill b{width:2cqw;height:2cqw}
  .v-hire-mosaic .copy{left:8cqw;width:84cqw;top:14cqh;bottom:6cqh;justify-content:flex-start}
  .v-hire-mosaic .eyebrow{font-size:5.4cqw}
  .v-hire-mosaic .h{margin-top:2cqw;font-size:9.4cqw}
  .v-hire-mosaic .ta{left:8cqw;top:51cqh;width:40cqw;height:22cqh}
  .v-hire-mosaic .tb{left:50cqw;top:51cqh;width:42cqw;height:10cqh}
  .v-hire-mosaic .tc{left:50cqw;top:62cqh;width:42cqw;height:18cqh}
  .v-hire-mosaic .td{left:8cqw;top:74cqh;width:19.5cqw;height:6cqh}
  .v-hire-mosaic .te{left:28.5cqw;top:74cqh;width:19.5cqw;height:6cqh}
  .v-hire-mosaic .tile{border-radius:3cqw}
  .v-hire-mosaic .cap{font-size:2.4cqw;left:1.6cqw;bottom:1.6cqw;padding:.8cqw 1.6cqw}
  .v-hire-mosaic .td .cap,.v-hire-mosaic .te .cap{display:none}
  .v-hire-mosaic .scr .lab{font-size:4cqw}
  .v-hire-mosaic .scr .lab small{font-size:1.8cqw}
  .v-hire-mosaic .ctas{align-self:stretch;margin-top:auto}
  .v-hire-mosaic .btn{flex:1;justify-content:center;font-size:5.6cqw;gap:2.4cqw;padding:3.4cqw 4cqw;border-radius:10cqw}
  .v-hire-mosaic .btn svg{width:5.6cqw;height:5.6cqw}
  .v-hire-mosaic .ghost,.v-hire-mosaic .proof{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-mosaic .nav{left:7cqw;right:7cqw;top:6cqh;justify-content:space-between}
  .v-hire-mosaic .logo{font-size:2.8cqw;gap:1.2cqw}
  .v-hire-mosaic .logo svg{width:3.8cqw;height:3.8cqw}
  .v-hire-mosaic .pill{font-size:1.7cqw;padding:.8cqw 1.6cqw;gap:1cqw}
  .v-hire-mosaic .pill b{width:1.1cqw;height:1.1cqw}
  .v-hire-mosaic .copy{left:7cqw;width:86cqw;top:15cqh;bottom:6cqh;justify-content:flex-start}
  .v-hire-mosaic .eyebrow{font-size:2cqw}
  .v-hire-mosaic .h{font-size:6.8cqw}
  .v-hire-mosaic .ta{left:7cqw;top:49cqh;width:24cqw;height:31cqh}
  .v-hire-mosaic .tb{left:32.5cqw;top:49cqh;width:30cqw;height:15cqh}
  .v-hire-mosaic .tc{left:64cqw;top:49cqh;width:29cqw;height:31cqh}
  .v-hire-mosaic .td{left:32.5cqw;top:65cqh;width:14.5cqw;height:15cqh}
  .v-hire-mosaic .te{left:48cqw;top:65cqh;width:14.5cqw;height:15cqh}
  .v-hire-mosaic .cap{font-size:1.5cqw}
  .v-hire-mosaic .td .cap,.v-hire-mosaic .te .cap{display:none}
  .v-hire-mosaic .scr .lab{font-size:2.6cqw}
  .v-hire-mosaic .scr .lab small{font-size:1.1cqw}
  .v-hire-mosaic .ctas{margin-top:auto}
  .v-hire-mosaic .btn{font-size:2.6cqw;padding:1.6cqw 3cqw}
  .v-hire-mosaic .ghost{display:none}
  .v-hire-mosaic .btn svg{width:2.3cqw;height:2.3cqw}
  .v-hire-mosaic .proof{left:auto;right:7cqw;bottom:7.5cqh;font-size:1.8cqw}
  .v-hire-mosaic .av i{width:3.6cqw;height:3.6cqw}
}
@keyframes hire-mosaic-fade{0%{opacity:0;transform:translateY(1cqw)}10%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-mosaic-wl{0%{transform:translateY(70%);clip-path:inset(0 -10% 70% -10%);opacity:0}2%{opacity:1}14%,100%{transform:none;clip-path:inset(-30% -10% -30% -10%);opacity:1}}
@keyframes hire-mosaic-up{0%,16%{opacity:0;transform:translateY(1.5cqw)}28%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-mosaic-up2{0%,22%{opacity:0;transform:translateY(1.5cqw)}34%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-mosaic-tile{0%,5%{clip-path:inset(100% 0 0 0 round 1.4cqw);transform:translateY(3cqw)}21%,100%{clip-path:inset(0 0 0 0 round 1.4cqw);transform:translateY(0)}}
@keyframes hire-mosaic-kb{0%{transform:scale(1.16)}100%{transform:scale(1.02)}}
@keyframes hire-mosaic-beam{0%,100%{opacity:.6}50%{opacity:1}}
@keyframes hire-mosaic-sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
@keyframes hire-mosaic-sun{0%{transform:translateY(1.2cqw) scale(.94)}100%{transform:translateY(-.8cqw) scale(1.06)}}
@keyframes hire-mosaic-draw{0%,24%{clip-path:inset(0 100% 0 0)}44%,100%{clip-path:inset(0 0 0 0)}}
@keyframes hire-mosaic-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(.35cqw)}}
@keyframes hire-mosaic-blink{0%,100%{opacity:1}50%{opacity:.35}}
`,
};

export const hireKinetic: SceneSpec = {
  id: "hire-kinetic",
  slug: "mg-hire-kinetic",
  name: "We're Hiring Kinetic",
  kind: "scene",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "echo-word-and-role-reel",
  energy: "punchy",
  settle: 3.8,
  colors: { ink: "#F5EFE4", accent: "#FF5B2E", secondary: "#FFD066", paper: "#0F0E13" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hiring", "kinetic", "reel", "careers"],
  fields: [
    { key: "brand", label: "Company", default: "Wayfold", maxChars: 18, role: "label" },
    { key: "headline", label: "Headline", default: "we're hiring.", maxChars: 22, role: "headline" },
    { key: "role", label: "Final role in reel", default: "designers", maxChars: 14, role: "value" },
    { key: "cta", label: "Apply line", default: "Apply at wayfold.jobs", maxChars: 26, role: "cta" },
  ],
  html: `<div class="glow"></div>
<div class="top"><div class="logo"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span data-21st-slot="brand">{{brand}}</span></div><div class="tag"><i></i>careers</div></div>
<div class="hl" data-21st-slot="headline">{{headline|words}}</div>
<div class="echo e1">{{headline|words}}</div>
<div class="echo e2">{{headline|words}}</div>
<div class="look"><div class="lbl">Looking for curious</div><div class="win"><div class="reel"><span>engineers</span><span>writers</span><span>operators</span><span class="fin" data-21st-slot="role">{{role}}</span></div></div><div class="uline"></div></div>
<div class="stamp"><div class="disc"></div><svg class="ring" viewBox="0 0 100 100"><defs><path id="hire-kinetic-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"/></defs><text class="rt" font-size="8.6" fill="#0F0E13"><textPath href="#hire-kinetic-circle" textLength="230" lengthAdjust="spacing">now hiring · remote ok · 9 hubs ·</textPath></text></svg><svg class="mk" viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg></div>
<div class="chips"><span class="chip"><b>12</b> open roles</span><span class="chip">Lisbon · Berlin · Remote</span></div>
<div class="cta"><span data-21st-slot="cta">{{cta}}</span><span class="go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
<div class="grain"></div>`,
  css: `
.v-hire-kinetic,.v-hire-kinetic *{box-sizing:border-box}
.v-hire-kinetic svg{display:block}
.v-hire-kinetic{color:var(--ink);font-family:var(--font-body)}
.v-hire-kinetic[data-backdrop="on"]{background:var(--paper)}
.v-hire-kinetic[data-backdrop="off"] .glow,.v-hire-kinetic[data-backdrop="off"] .grain{display:none}
.v-hire-kinetic .glow{position:absolute;left:-10cqw;top:-10cqw;width:70cqw;height:70cqw;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--accent) 38%,transparent) 0%,color-mix(in srgb,var(--accent) 12%,transparent) 38%,transparent 66%);animation:hire-kinetic-glow 6s ease-in-out infinite}
.v-hire-kinetic .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:22cqw;opacity:.2;mix-blend-mode:overlay;pointer-events:none}
.v-hire-kinetic .top{position:absolute;left:6cqw;right:6cqw;top:4cqw;display:flex;justify-content:space-between;align-items:center;animation:hire-kinetic-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .logo{display:flex;align-items:center;gap:.8cqw;font-weight:600;font-size:2cqw;line-height:1.25;letter-spacing:-.02em}
.v-hire-kinetic .logo svg{width:2.8cqw;height:2.8cqw;color:var(--accent);flex:none}
.v-hire-kinetic .tag{display:flex;align-items:center;gap:.7cqw;font:500 1.3cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 72%,transparent)}
.v-hire-kinetic .tag i{display:block;width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 1cqw var(--accent);animation:hire-kinetic-blink 1s ease-in-out infinite}
.v-hire-kinetic .hl,.v-hire-kinetic .echo{position:absolute;left:5.5cqw;top:10cqw;font-family:var(--font-display);font-weight:700;font-size:6cqw;line-height:1.2;white-space:nowrap}
.v-hire-kinetic .hl .w{display:block;line-height:1.2}
.v-hire-kinetic .hl .w:not(:last-child){display:inline-block;font-weight:500;font-size:6cqw;letter-spacing:-.04em;margin-right:.2em;animation:hire-kinetic-w1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .hl .w:last-child{font-size:10.4cqw;letter-spacing:-.05em;color:var(--accent);transform-origin:0 60%;animation:hire-kinetic-w2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .echo .w{display:none}
.v-hire-kinetic .echo .w:last-child{display:block;font-size:10.4cqw;line-height:1.2;letter-spacing:-.05em;color:transparent;-webkit-text-stroke:.16cqw var(--accent)}
.v-hire-kinetic .e1{top:calc(10cqw + 7.2cqw + 9.6cqw)}
.v-hire-kinetic .e2{top:calc(10cqw + 7.2cqw + 19.2cqw)}
.v-hire-kinetic .e1 .w{animation:hire-kinetic-e1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .e2 .w{animation:hire-kinetic-e2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .look{position:absolute;left:56cqw;right:6cqw;top:12cqw;animation:hire-kinetic-look 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .lbl{font-size:1.6cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 66%,transparent)}
.v-hire-kinetic .win{margin-top:.4cqw;height:8cqw;clip-path:inset(0 0 -.12em 0);font-family:"Instrument Serif",var(--font-display);font-style:italic;font-weight:400;font-size:6.4cqw;line-height:8cqw;letter-spacing:-.01em}
.v-hire-kinetic .reel{animation:hire-kinetic-reel 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-kinetic .reel span{display:block;height:8cqw;line-height:8cqw;white-space:nowrap;padding-right:.1em}
.v-hire-kinetic .uline{margin-top:.6cqw;height:.4cqw;width:22cqw;border-radius:1cqw;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 40%,#fff));transform-origin:0 50%;animation:hire-kinetic-uline 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .stamp{position:absolute;right:7cqw;top:27cqw;width:13cqw;height:13cqw;animation:hire-kinetic-stamp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .disc{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 35% 30%,color-mix(in srgb,var(--secondary) 55%,#fff),var(--secondary) 60%,color-mix(in srgb,var(--secondary) 85%,#000));box-shadow:0 1cqw 3cqw color-mix(in srgb,var(--secondary) 22%,transparent)}
.v-hire-kinetic .ring{position:absolute;inset:0;width:100%;height:100%;animation:hire-kinetic-spin 6s linear infinite}
.v-hire-kinetic .rt{font-family:var(--font-mono);font-weight:600}
.v-hire-kinetic .stamp .mk{position:absolute;left:33%;top:33%;width:34%;height:34%;color:#0F0E13}
.v-hire-kinetic .chips{position:absolute;left:56cqw;top:30cqw;display:flex;flex-direction:column;align-items:flex-start;gap:1cqw;animation:hire-kinetic-chips 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .chip{font-size:1.5cqw;line-height:1.2;padding:.8cqw 1.5cqw;border-radius:4cqw;border:1px solid color-mix(in srgb,var(--ink) 22%,transparent);color:color-mix(in srgb,var(--ink) 88%,transparent);white-space:nowrap}
.v-hire-kinetic .chip b{font-weight:600;color:color-mix(in srgb,var(--accent) 70%,var(--ink))}
.v-hire-kinetic .cta{position:absolute;left:56cqw;right:6cqw;bottom:5cqw;height:6.4cqw;border-radius:4cqw;background:var(--ink);color:var(--paper);display:flex;align-items:center;justify-content:space-between;gap:1cqw;padding:0 .8cqw 0 2.4cqw;font-weight:600;font-size:1.9cqw;line-height:1.25;letter-spacing:-.01em;animation:hire-kinetic-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-kinetic .go{flex:none;width:4.8cqw;height:4.8cqw;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center}
.v-hire-kinetic .go svg{width:2.2cqw;height:2.2cqw;animation:hire-kinetic-nudge 1s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-hire-kinetic .glow{left:8cqw;top:34cqw;width:120cqw;height:120cqw}
  .v-hire-kinetic .top{left:7cqw;right:7cqw;top:7cqw}
  .v-hire-kinetic .logo{font-size:5.6cqw;gap:1.8cqw}
  .v-hire-kinetic .logo svg{width:7cqw;height:7cqw}
  .v-hire-kinetic .tag{font-size:3cqw;gap:1.6cqw}
  .v-hire-kinetic .tag i{width:1.8cqw;height:1.8cqw}
  .v-hire-kinetic .hl,.v-hire-kinetic .echo{left:6cqw;top:22cqw;font-size:13cqw}
  .v-hire-kinetic .hl .w:not(:last-child){font-size:13cqw}
  .v-hire-kinetic .hl .w:last-child,.v-hire-kinetic .echo .w:last-child{font-size:19.5cqw}
  .v-hire-kinetic .echo .w:last-child{-webkit-text-stroke:.3cqw var(--accent)}
  .v-hire-kinetic .e1{top:calc(22cqw + 15.6cqw + 18cqw)}
  .v-hire-kinetic .e2{top:calc(22cqw + 15.6cqw + 36cqw)}
  .v-hire-kinetic .look{left:7cqw;right:7cqw;top:104cqw}
  .v-hire-kinetic .lbl{font-size:3.6cqw}
  .v-hire-kinetic .win{height:15cqw;font-size:12.4cqw;line-height:15cqw}
  .v-hire-kinetic .reel span{height:15cqw;line-height:15cqw}
  .v-hire-kinetic .reel{animation-name:hire-kinetic-reelv}
  .v-hire-kinetic .uline{height:.8cqw;width:48cqw;margin-top:1cqw}
  .v-hire-kinetic .stamp{right:6cqw;top:94cqw;width:27cqw;height:27cqw}
  .v-hire-kinetic .chips{left:7cqw;right:7cqw;top:139cqw;flex-direction:row;gap:2cqw}
  .v-hire-kinetic .chip{font-size:3.3cqw;padding:1.8cqw 3.2cqw;border-radius:8cqw}
  .v-hire-kinetic .cta{left:7cqw;right:7cqw;bottom:8cqw;height:16cqw;border-radius:8cqw;padding:0 2cqw 0 6cqw;font-size:5.4cqw}
  .v-hire-kinetic .go{width:12cqw;height:12cqw}
  .v-hire-kinetic .go svg{width:5cqw;height:5cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-kinetic .glow{left:-10cqw;top:0;width:100cqw;height:100cqw}
  .v-hire-kinetic .top{left:6cqw;right:6cqw;top:6cqw}
  .v-hire-kinetic .logo{font-size:3cqw;gap:1.2cqw}
  .v-hire-kinetic .logo svg{width:4cqw;height:4cqw}
  .v-hire-kinetic .tag{font-size:2cqw}
  .v-hire-kinetic .hl,.v-hire-kinetic .echo{left:5.5cqw;top:14cqw;font-size:9cqw}
  .v-hire-kinetic .hl .w:not(:last-child){font-size:9cqw}
  .v-hire-kinetic .hl .w:last-child,.v-hire-kinetic .echo .w:last-child{font-size:15cqw}
  .v-hire-kinetic .echo .w:last-child{-webkit-text-stroke:.24cqw var(--accent)}
  .v-hire-kinetic .e1{top:calc(14cqw + 10.8cqw + 14cqw)}
  .v-hire-kinetic .e2{display:none}
  .v-hire-kinetic .look{left:6cqw;right:36cqw;top:58cqw}
  .v-hire-kinetic .lbl{font-size:2.4cqw}
  .v-hire-kinetic .win{height:10cqw;font-size:8.4cqw;line-height:10cqw}
  .v-hire-kinetic .reel span{height:10cqw;line-height:10cqw}
  .v-hire-kinetic .reel{animation-name:hire-kinetic-reels}
  .v-hire-kinetic .uline{height:.6cqw;width:30cqw}
  .v-hire-kinetic .stamp{right:7cqw;top:52cqw;width:22cqw;height:22cqw}
  .v-hire-kinetic .chips{left:auto;right:6cqw;top:auto;bottom:22cqw;align-items:flex-end}
  .v-hire-kinetic .chips{display:none}
  .v-hire-kinetic .cta{left:6cqw;right:6cqw;bottom:6cqw;height:11cqw;border-radius:6cqw;padding:0 1.4cqw 0 4cqw;font-size:3.4cqw}
  .v-hire-kinetic .go{width:8cqw;height:8cqw}
  .v-hire-kinetic .go svg{width:3.4cqw;height:3.4cqw}
}
@keyframes hire-kinetic-glow{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-6cqw,4cqw) scale(1.14)}}
@keyframes hire-kinetic-top{0%{opacity:0;transform:translateY(-2cqw)}8%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-kinetic-w1{0%{opacity:0;transform:translateY(.4em);filter:blur(.08em)}9%,100%{opacity:1;transform:translateY(0);filter:blur(0)}}
@keyframes hire-kinetic-w2{0%,4%{opacity:0;transform:scale(1.35);filter:blur(.1em)}13%{opacity:1;transform:scale(.97);filter:blur(0)}17%,100%{opacity:1;transform:scale(1);filter:blur(0)}}
@keyframes hire-kinetic-e1{0%,12%{opacity:0;transform:translate(-24cqw,0)}22%{opacity:.55;transform:translate(3%,0)}50%,100%{opacity:.55;transform:translate(5%,0)}}
@keyframes hire-kinetic-e2{0%,15%{opacity:0;transform:translate(-24cqw,0)}25%{opacity:.22;transform:translate(6%,0)}50%,100%{opacity:.22;transform:translate(9%,0)}}
@keyframes hire-kinetic-look{0%,18%{opacity:0;transform:translateY(4cqw)}28%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-kinetic-reel{0%,30%{transform:translateY(0)}36%,40%{transform:translateY(-8cqw)}46%,50%{transform:translateY(-16cqw)}56%,100%{transform:translateY(-24cqw)}}
@keyframes hire-kinetic-reelv{0%,30%{transform:translateY(0)}36%,40%{transform:translateY(-15cqw)}46%,50%{transform:translateY(-30cqw)}56%,100%{transform:translateY(-45cqw)}}
@keyframes hire-kinetic-reels{0%,30%{transform:translateY(0)}36%,40%{transform:translateY(-10cqw)}46%,50%{transform:translateY(-20cqw)}56%,100%{transform:translateY(-30cqw)}}
@keyframes hire-kinetic-uline{0%,22%{transform:scaleX(0)}34%,100%{transform:scaleX(1)}}
@keyframes hire-kinetic-stamp{0%,24%{opacity:0;transform:scale(.3) rotate(-40deg)}32%{opacity:1;transform:scale(1.08) rotate(6deg)}36%,100%{opacity:1;transform:scale(1) rotate(0deg)}}
@keyframes hire-kinetic-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes hire-kinetic-chips{0%,30%{opacity:0;transform:translateY(4cqw)}40%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-kinetic-cta{0%,34%{opacity:0;transform:translateY(4cqw)}44%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-kinetic-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(.8cqw)}}
@keyframes hire-kinetic-blink{0%,100%{opacity:1}50%{opacity:.3}}
`,
};

export const hireJobcard: SceneSpec = {
  id: "hire-jobcard",
  slug: "mg-hire-jobcard",
  name: "Job Post Card",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "job-card-assembles-then-apply",
  energy: "default",
  settle: 3.8,
  colors: { ink: "#17151C", accent: "#FF5B2E", secondary: "#7457D9", paper: "#FBF8F3" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hiring", "job-post", "salary", "linkedin"],
  fields: [
    { key: "role", label: "Role title", default: "Senior Product Designer", maxChars: 32, role: "headline" },
    { key: "location", label: "Location", default: "Remote · Lisbon or Berlin", maxChars: 30, role: "label" },
    { key: "salary", label: "Salary range", default: "€85k–€110k", maxChars: 14, role: "value" },
    { key: "cta", label: "Button", default: "Apply now", maxChars: 16, role: "cta" },
  ],
  html: `<div class="hd"><div class="logo"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg>Wayfold</div><div class="hiring"><span class="dot"><i></i><b></b></span>We're hiring</div></div>
<div class="card">
  <div class="colA">
    <div class="row1"><div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l6.5 7-4 9h-5l-4-9z"/><circle cx="12" cy="11.5" r="1.6"/><path d="M12 3v6.9M9 19h6"/></svg></div><div><div class="team">Design team</div><div class="posted">Posted 2 days ago · 48 applicants</div></div><div class="new">New</div></div>
    <div class="title" data-21st-slot="role">{{role|words}}</div>
    <div class="meta-row"><span class="loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg><span data-21st-slot="location">{{location}}</span></span><span class="ft"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>Full-time</span></div>
  </div>
  <div class="colB">
    <div class="sal"><div class="sal-top"><span>Base salary, per year</span><span class="eq">+ equity</span></div><div class="num"><span data-21st-slot="salary">{{salary}}</span><small>above market</small></div><div class="bar"><div class="fill"></div><div class="knob k1"></div><div class="knob k2"></div></div></div>
    <div class="chips"><span class="chip" style="--delay:0s"><i style="background:#FF5B2E"></i>Design systems</span><span class="chip" style="--delay:.18s"><i style="background:#7457D9"></i>Prototyping</span><span class="chip" style="--delay:.36s"><i style="background:#2F9A6C"></i>TypeScript</span><span class="chip" style="--delay:.54s"><i style="background:#CF931B"></i>User research</span></div>
  </div>
  <div class="foot"><div class="apply"><span data-21st-slot="cta">{{cta}}</span><span class="icn"><svg class="i-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><svg class="i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span><div class="cur"><svg viewBox="0 0 24 24"><path d="M5 3l14 8.2-6.3 1.4L9.8 19z" fill="#17151C" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg></div></div><div class="meet"><span class="av"><i style="--c:#FFC9B5"></i><i style="--c:#C3EEDB"></i><i style="--c:#DCD0FF"></i></span>Meet the team</div></div>
</div>
<div class="note"><span>1 of 12 open roles</span><span>wayfold.jobs/design</span></div>`,
  css: `
.v-hire-jobcard,.v-hire-jobcard *{box-sizing:border-box}
.v-hire-jobcard svg{display:block}
.v-hire-jobcard{color:var(--ink);font-family:var(--font-body)}
.v-hire-jobcard[data-backdrop="on"]{background:radial-gradient(70% 50% at 100% 0%,color-mix(in srgb,var(--accent) 34%,transparent),transparent 70%),radial-gradient(60% 45% at 0% 100%,color-mix(in srgb,var(--secondary) 34%,transparent),transparent 70%),color-mix(in srgb,var(--paper) 90%,var(--ink))}
.v-hire-jobcard[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-hire-jobcard .hd{position:absolute;left:6cqw;right:6cqw;top:3.4cqw;display:flex;justify-content:space-between;align-items:center;animation:hire-jobcard-hd 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .logo{display:flex;gap:.8cqw;align-items:center;font-weight:700;font-size:2cqw;letter-spacing:-.03em}
.v-hire-jobcard .logo svg{width:2.8cqw;height:2.8cqw;color:var(--accent)}
.v-hire-jobcard .hiring{display:flex;align-items:center;gap:.8cqw;font-size:1.3cqw;font-weight:600;padding:.7cqw 1.4cqw;border-radius:4cqw;background:var(--ink);color:var(--paper)}
.v-hire-jobcard .dot{position:relative;width:.8cqw;height:.8cqw}
.v-hire-jobcard .dot b,.v-hire-jobcard .dot i{position:absolute;inset:0;border-radius:50%;background:var(--accent)}
.v-hire-jobcard .dot i{animation:hire-jobcard-ping 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .card{position:absolute;zoom:.6;left:calc(6cqw / .6);top:calc(10.5cqw / .6);width:calc(88cqw / .6);display:grid;grid-template-columns:1.05fr 1fr;column-gap:5cqw;padding:5.4cqw;border-radius:3.4cqw;background:var(--paper);color:var(--ink);box-shadow:0 .3cqw .8cqw rgba(23,21,28,.06),0 3cqw 7cqw rgba(23,21,28,.12),0 10cqw 18cqw -6cqw color-mix(in srgb,var(--accent) 25%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent);animation:hire-jobcard-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .colA,.v-hire-jobcard .colB{min-width:0}
.v-hire-jobcard .row1{display:flex;align-items:center;gap:2.6cqw;animation:hire-jobcard-a 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .ico{flex:none;width:8.4cqw;height:8.4cqw;border-radius:2.3cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent) 60%,color-mix(in srgb,var(--accent) 85%,#000));display:grid;place-items:center;color:#fff;box-shadow:0 1cqw 2.4cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-hire-jobcard .ico svg{width:4.4cqw;height:4.4cqw}
.v-hire-jobcard .team{font-size:3cqw;font-weight:600}
.v-hire-jobcard .posted{font-size:2.4cqw;color:color-mix(in srgb,var(--ink) 58%,transparent);margin-top:.4cqw}
.v-hire-jobcard .new{margin-left:auto;font-size:2.3cqw;font-weight:600;color:#0F6B47;background:#D7F5E7;padding:.9cqw 2cqw;border-radius:5cqw}
.v-hire-jobcard .title{margin-top:3cqw;font-family:var(--font-display);font-weight:700;font-size:7.2cqw;line-height:1.2;letter-spacing:-.035em}
.v-hire-jobcard .title .w{--delay:calc(.5s + var(--i) * .14s);display:inline-block;line-height:1.2;padding-right:.04em;animation:hire-jobcard-w 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .meta-row{margin-top:2.6cqw;display:flex;flex-wrap:wrap;gap:1.4cqw 4cqw;font-size:2.7cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 72%,transparent);animation:hire-jobcard-b 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .meta-row > span{display:flex;align-items:center;gap:1.1cqw}
.v-hire-jobcard .meta-row svg{flex:none;width:3cqw;height:3cqw;color:var(--accent)}
.v-hire-jobcard .sal{padding:2.8cqw 3.4cqw 3.4cqw;border-radius:2.4cqw;background:color-mix(in srgb,var(--ink) 5%,var(--paper));animation:hire-jobcard-c 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .sal-top{display:flex;justify-content:space-between;align-items:center;font-size:2.4cqw;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-hire-jobcard .eq{font-weight:600;color:var(--secondary);background:color-mix(in srgb,var(--secondary) 14%,var(--paper));padding:.6cqw 1.6cqw;border-radius:4cqw}
.v-hire-jobcard .num{margin-top:.8cqw;font-family:var(--font-display);font-weight:700;font-size:5.8cqw;letter-spacing:-.03em;line-height:1.3;display:flex;align-items:baseline;flex-wrap:wrap}
.v-hire-jobcard .num small{font-family:var(--font-body);font-size:2.4cqw;font-weight:500;color:color-mix(in srgb,var(--ink) 58%,transparent);margin-left:1.4cqw;letter-spacing:0}
.v-hire-jobcard .bar{position:relative;margin-top:2cqw;height:1.3cqw;border-radius:2cqw;background:color-mix(in srgb,var(--ink) 12%,var(--paper))}
.v-hire-jobcard .fill{position:absolute;left:28%;width:46%;top:0;bottom:0;border-radius:2cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent));transform-origin:0 50%;animation:hire-jobcard-fill 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-jobcard .knob{position:absolute;top:50%;width:3.4cqw;height:3.4cqw;margin:-1.7cqw 0 0 -1.7cqw;border-radius:50%;background:#fff;border:.7cqw solid var(--accent);box-shadow:0 .5cqw 1.2cqw color-mix(in srgb,var(--accent) 35%,transparent);animation:hire-jobcard-knob 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .k1{left:28%}
.v-hire-jobcard .k2{left:74%}
.v-hire-jobcard .chips{margin-top:3cqw;display:flex;flex-wrap:wrap;gap:1.6cqw}
.v-hire-jobcard .chip{display:flex;align-items:center;gap:1.2cqw;font-size:2.7cqw;font-weight:500;padding:1.2cqw 2.4cqw;border-radius:6cqw;border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);white-space:nowrap;animation:hire-jobcard-chip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .chip i{display:block;width:1.5cqw;height:1.5cqw;border-radius:50%}
.v-hire-jobcard .foot{grid-column:1/-1;margin-top:4cqw;display:flex;align-items:center;justify-content:space-between;animation:hire-jobcard-d 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .apply{position:relative;display:flex;align-items:center;gap:1.6cqw;height:8cqw;padding:0 4.4cqw;border-radius:6cqw;background:var(--accent);color:var(--paper);font-weight:600;font-size:3.1cqw;line-height:1.25;white-space:nowrap;box-shadow:0 1.2cqw 3cqw color-mix(in srgb,var(--accent) 40%,transparent);animation:hire-jobcard-press 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .icn{position:relative;flex:none;width:3.2cqw;height:3.2cqw}
.v-hire-jobcard .icn svg{position:absolute;inset:0;width:100%;height:100%}
.v-hire-jobcard .i-arr{animation:hire-jobcard-out 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .i-ok{opacity:0;animation:hire-jobcard-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .meet{display:flex;align-items:center;gap:1.6cqw;font-size:2.4cqw;color:color-mix(in srgb,var(--ink) 72%,transparent)}
.v-hire-jobcard .av{display:flex;padding-left:1.6cqw}
.v-hire-jobcard .av i{display:block;width:5.6cqw;height:5.6cqw;border-radius:50%;margin-left:-1.6cqw;border:.45cqw solid var(--paper);background:radial-gradient(circle at 50% 40%,rgba(40,28,48,.78) 0 1.05cqw,transparent 1.1cqw),radial-gradient(2.2cqw 1.7cqw at 50% 106%,rgba(40,28,48,.78) 0 96%,transparent 100%),var(--c)}
.v-hire-jobcard .note{position:absolute;left:6cqw;right:6cqw;bottom:2.4cqw;display:flex;justify-content:space-between;font:500 1.1cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent);animation:hire-jobcard-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-jobcard .cur{position:absolute;left:72%;top:58%;width:5.4cqw;height:5.4cqw;z-index:3;filter:drop-shadow(0 .6cqw .8cqw rgba(0,0,0,.28));animation:hire-jobcard-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-jobcard .cur svg{width:100%;height:100%}
@container (max-aspect-ratio: 4/5){
  .v-hire-jobcard .hd,.v-hire-jobcard .note{display:none}
  .v-hire-jobcard .card{zoom:1;left:7cqw;top:6cqh;width:86cqw;height:88cqh;display:flex;flex-direction:column;justify-content:space-between;padding:6cqw;border-radius:5cqw}
  .v-hire-jobcard .title{font-size:11cqw}
  .v-hire-jobcard .meta-row{font-size:5.4cqw;flex-direction:column}
  .v-hire-jobcard .meta-row svg{width:5.4cqw;height:5.4cqw}
  .v-hire-jobcard .meta-row > .ft{display:none}
  .v-hire-jobcard .sal-top{font-size:3.4cqw}
  .v-hire-jobcard .num{font-size:9.6cqw}
  .v-hire-jobcard .num small{font-size:3.4cqw}
  .v-hire-jobcard .chip{font-size:3.6cqw}
  .v-hire-jobcard .foot{margin-top:0}
  .v-hire-jobcard .apply{height:14cqw;font-size:5.6cqw;padding:0 6cqw;border-radius:8cqw}
  .v-hire-jobcard .icn{width:5.4cqw;height:5.4cqw}
  .v-hire-jobcard .meet{display:none}
  .v-hire-jobcard .apply{flex:1;justify-content:center}
  .v-hire-jobcard .cur{width:8cqw;height:8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-jobcard .hd{left:7cqw;right:7cqw;top:5cqw}
  .v-hire-jobcard .logo{font-size:3.4cqw;gap:1.2cqw}
  .v-hire-jobcard .logo svg{width:4.6cqw;height:4.6cqw}
  .v-hire-jobcard .hiring{font-size:2.2cqw;padding:1.1cqw 2.2cqw;gap:1.2cqw}
  .v-hire-jobcard .dot{width:1.2cqw;height:1.2cqw}
  .v-hire-jobcard .card{zoom:.8;left:calc(7cqw / .8);top:calc(14cqw / .8);width:calc(86cqw / .8);display:block}
  .v-hire-jobcard .sal{margin-top:3.4cqw}
  .v-hire-jobcard .note{left:7cqw;right:7cqw;bottom:3.6cqw;font-size:2cqw}
}
@keyframes hire-jobcard-hd{0%{opacity:0;transform:translateY(-2cqw)}10%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-jobcard-ping{0%{opacity:.7;transform:scale(1)}70%,100%{opacity:0;transform:scale(2.6)}}
@keyframes hire-jobcard-card{0%{opacity:0;transform:translateY(8cqw) scale(.96)}14%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hire-jobcard-a{0%,6%{opacity:0;transform:translateY(2cqw)}18%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-jobcard-w{0%{transform:translateY(60%);clip-path:inset(0 -10% 60% -10%);opacity:0}2%{opacity:1}14%,100%{transform:none;clip-path:inset(-30% -10% -30% -10%);opacity:1}}
@keyframes hire-jobcard-b{0%,14%{opacity:0;transform:translateY(2cqw)}26%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-jobcard-c{0%,18%{opacity:0;transform:translateY(2.5cqw)}30%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-jobcard-fill{0%,24%{transform:scaleX(0)}40%,100%{transform:scaleX(1)}}
@keyframes hire-jobcard-knob{0%,32%{transform:scale(0)}39%{transform:scale(1.2)}44%,100%{transform:scale(1)}}
@keyframes hire-jobcard-chip{0%,28%{opacity:0;transform:translateY(1.5cqw) scale(.7)}34%{opacity:1;transform:translateY(0) scale(1.06)}38%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hire-jobcard-d{0%,34%{opacity:0;transform:translateY(2cqw)}42%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-jobcard-press{0%,49%{transform:scale(1);background:var(--accent)}51%{transform:scale(.93)}54%,100%{transform:scale(1);background:color-mix(in srgb,var(--accent) 72%,#000)}}
@keyframes hire-jobcard-out{0%,51%{opacity:1;transform:none}54%,100%{opacity:0;transform:translateX(.6em)}}
@keyframes hire-jobcard-in{0%,51%{opacity:0;transform:scale(.4)}55%,100%{opacity:1;transform:scale(1)}}
@keyframes hire-jobcard-cur{0%,38%{opacity:0;transform:translate(26cqw,16cqw) scale(1)}41%{opacity:1;transform:translate(22cqw,13cqw) scale(1)}49%{opacity:1;transform:translate(0,0) scale(1)}51%{transform:translate(0,0) scale(.86)}54%,100%{opacity:1;transform:translate(0,0) scale(1)}}
@keyframes hire-jobcard-note{0%,30%{opacity:0;transform:translateY(2cqw)}40%,100%{opacity:1;transform:translateY(0)}}
`,
};

export const hireTeamwall: SceneSpec = {
  id: "hire-teamwall",
  slug: "mg-hire-teamwall",
  name: "Team Wall Open Seat",
  kind: "scene",
  job: "data",
  language: "editorial",
  mechanic: "avatar-wall-iris-with-open-seat",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#1D1A17", accent: "#FF5B2E", secondary: "#7457D9", paper: "#FFFCF6" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hiring", "team", "headcount", "culture"],
  fields: [
    { key: "kicker", label: "Kicker", default: "The Wayfold team", maxChars: 26, role: "kicker" },
    { key: "count", label: "Headcount", default: "142", maxChars: 6, role: "value" },
    { key: "unit", label: "Unit", default: "people", maxChars: 12, role: "label" },
    { key: "sub", label: "Subline", default: "building one product from nine hubs.", maxChars: 48, role: "body" },
  ],
  html: `<div class="wall">
<i class="t k2"></i><i class="t k4 hl"></i><i class="t k1"></i><i class="t k6 hb"></i><i class="t k3"></i><i class="t k5"></i><i class="t k7 hl"></i><i class="t you"><u></u><b>+ you?</b></i><i class="t k2 hb"></i><i class="t k4"></i>
<i class="t k5 hl"></i><i class="t k1"></i><i class="t k3 hb"></i><i class="t k7"></i><i class="t k2"></i><i class="t k6 hl"></i><i class="t k4"></i><i class="t k1"></i><i class="t k5"></i><i class="t k3 hl"></i>
<i class="t k6"></i><i class="t k3"></i><i class="t k7 hl"></i><i class="t k4"></i><i class="t k5 hb"></i><i class="t k1"></i><i class="t k2"></i><i class="t k6 hb"></i><i class="t k7"></i><i class="t k1 hl"></i>
<i class="t k4"></i><i class="t k2 hb"></i><i class="t k5"></i><i class="t k1 hl"></i><i class="t k6"></i><i class="t k3"></i><i class="t k7 hb"></i><i class="t k5 hl"></i><i class="t k2"></i><i class="t k6"></i>
<i class="t k1 hb"></i><i class="t k7"></i><i class="t k6 hl"></i><i class="t k2"></i><i class="t k3"></i><i class="t k4 hl"></i><i class="t k1"></i><i class="t k3"></i><i class="t k6 hb"></i><i class="t k5"></i>
</div>
<div class="bub">this seat is open<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<div class="tag g1"><i style="background:#9C86F2"></i>Aiko · Design</div>
<div class="tag g2"><i style="background:#5BC596"></i>Tomás · Platform</div>
<div class="kick"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="card">
  <div class="big"><span class="digits" data-21st-slot="count">{{count|chars}}</span><span class="ppl" data-21st-slot="unit">{{unit}}</span></div>
  <div class="stats"><div><b>23</b><span>countries</span></div><div><b>3.4 yrs</b><span>average tenure</span></div><div><b>94%</b><span>would refer a friend</span></div></div>
</div>
<div class="sub" data-21st-slot="sub">{{sub}}</div>`,
  css: `
.v-hire-teamwall,.v-hire-teamwall *{box-sizing:border-box}
.v-hire-teamwall svg{display:block}
.v-hire-teamwall{color:var(--ink);font-family:var(--font-body)}
.v-hire-teamwall[data-backdrop="on"]{background:color-mix(in srgb,var(--paper) 90%,var(--ink))}
.v-hire-teamwall[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-hire-teamwall .wall{position:absolute;left:-6.75cqw;top:.15cqw;width:113.5cqw;display:grid;grid-template-columns:repeat(10,10cqw);grid-auto-rows:10cqw;gap:1.5cqw;animation:hire-teamwall-wall 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-teamwall .t{display:block;position:relative;border-radius:2.2cqw;overflow:hidden;background:radial-gradient(120% 90% at 30% 10%,rgba(255,255,255,.4),transparent 60%),color-mix(in srgb,var(--a) 62%,var(--paper))}
.v-hire-teamwall .t::before{content:"";position:absolute;left:32%;top:21%;width:36%;height:36%;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.28),transparent 55%),color-mix(in srgb,var(--b) 80%,var(--paper))}
.v-hire-teamwall .t::after{content:"";position:absolute;left:13%;bottom:-14%;width:74%;height:46%;border-radius:50% 50% 0 0/80% 80% 0 0;background:color-mix(in srgb,var(--b) 80%,var(--paper))}
.v-hire-teamwall .hb::before{box-shadow:0 -1.3cqw 0 -.7cqw var(--b)}
.v-hire-teamwall .hl::before{left:28%;top:18%;width:44%;height:48%;border-radius:50% 50% 38% 38%/56% 56% 44% 44%}
.v-hire-teamwall .k1{--a:#FFC9B5;--b:#E2603C}
.v-hire-teamwall .k2{--a:#DCD0FF;--b:#7457D9}
.v-hire-teamwall .k3{--a:#C3EEDB;--b:#2F9A6C}
.v-hire-teamwall .k4{--a:#FFE3A1;--b:#CF931B}
.v-hire-teamwall .k5{--a:#C8E5FF;--b:#3C7FC4}
.v-hire-teamwall .k6{--a:#FFD0DE;--b:#D2557F}
.v-hire-teamwall .k7{--a:#E6D9C6;--b:#8A6A4A}
.v-hire-teamwall .you{grid-row:1;grid-column:8;background:color-mix(in srgb,var(--accent) 10%,var(--paper));border:.25cqw dashed var(--accent);overflow:visible;display:grid;place-items:center;animation:hire-teamwall-you 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .you::before,.v-hire-teamwall .you::after{content:none}
.v-hire-teamwall .you b{font-family:var(--font-display);font-style:italic;font-weight:700;font-size:2cqw;color:var(--accent);line-height:1.2}
.v-hire-teamwall .you u{position:absolute;inset:-.25cqw;border-radius:2.2cqw;border:.3cqw solid var(--accent);animation:hire-teamwall-pulse 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .bub{position:absolute;left:62.5cqw;top:13.4cqw;display:flex;align-items:center;gap:.6cqw;padding:.6cqw 1.3cqw;border-radius:1.4cqw;background:var(--paper);color:var(--ink);box-shadow:0 .8cqw 2cqw rgba(60,40,20,.2);font-family:var(--font-display);font-style:italic;font-weight:600;font-size:1.7cqw;line-height:1.2;white-space:nowrap;animation:hire-teamwall-bub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .bub svg{width:1.8cqw;height:1.8cqw;color:var(--accent);transform:rotate(-90deg)}
.v-hire-teamwall .tag{position:absolute;display:flex;align-items:center;gap:.6cqw;padding:.5cqw 1.1cqw;border-radius:3cqw;background:var(--ink);color:var(--paper);font-size:1.1cqw;font-weight:500;white-space:nowrap;box-shadow:0 .6cqw 1.4cqw rgba(29,26,23,.25)}
.v-hire-teamwall .tag i{display:block;width:.7cqw;height:.7cqw;border-radius:50%}
.v-hire-teamwall .g1{left:9cqw;top:42cqw;animation:hire-teamwall-g1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .g2{left:84cqw;top:31cqw;animation:hire-teamwall-g2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .kick{position:absolute;left:50%;top:13cqw;transform:translateX(-50%);display:flex;align-items:center;gap:.8cqw;padding:.7cqw 1.5cqw;border-radius:4cqw;background:var(--paper);box-shadow:0 .6cqw 1.6cqw rgba(60,40,20,.2);font:500 1.3cqw/1.25 var(--font-mono);white-space:nowrap;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:hire-teamwall-kick 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .kick svg{width:1.8cqw;height:1.8cqw;color:var(--accent);flex:none}
.v-hire-teamwall .card{position:absolute;left:29cqw;top:17.6cqw;width:42cqw;padding:2.2cqw 3.2cqw 2.4cqw;border-radius:2.2cqw;background:var(--paper);color:var(--ink);box-shadow:0 .3cqw .8cqw rgba(60,40,20,.08),0 2.4cqw 6cqw rgba(60,40,20,.24);text-align:center;animation:hire-teamwall-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .big{display:flex;justify-content:center;align-items:baseline;gap:1.2cqw}
.v-hire-teamwall .digits{display:flex;font-family:var(--font-display);font-weight:700;font-size:8.4cqw;line-height:1.3;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.v-hire-teamwall .digits .c{--delay:calc(.9s + var(--i) * .16s);display:inline-block;line-height:1.3;animation:hire-teamwall-roll 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-teamwall .ppl{font-family:"Instrument Serif",var(--font-display);font-style:italic;font-size:4.6cqw;line-height:1.3;padding-right:.1em;color:var(--accent)}
.v-hire-teamwall .stats{margin-top:1cqw;display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid color-mix(in srgb,var(--ink) 12%,transparent);padding-top:1.6cqw}
.v-hire-teamwall .stats div+div{border-left:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}
.v-hire-teamwall .stats b{display:block;font-size:2.1cqw;font-weight:700;letter-spacing:-.02em}
.v-hire-teamwall .stats span{display:block;font-size:1.1cqw;color:color-mix(in srgb,var(--ink) 58%,transparent);margin-top:.2cqw}
.v-hire-teamwall .sub{position:absolute;left:50%;top:42.6cqw;transform:translateX(-50%);max-width:60cqw;padding:.8cqw 1.8cqw;border-radius:4cqw;background:var(--paper);box-shadow:0 .6cqw 1.6cqw rgba(60,40,20,.2);font-size:1.55cqw;line-height:1.3;text-align:center;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:hire-teamwall-kick 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-hire-teamwall .wall{left:-3cqw;top:-6cqw;width:106cqw;grid-template-columns:repeat(5,18cqw);grid-auto-rows:18cqw;gap:2.5cqw}
  .v-hire-teamwall .t{border-radius:4cqw}
  .v-hire-teamwall .you{grid-row:3;grid-column:2}
  .v-hire-teamwall .you b{font-size:4cqw}
  .v-hire-teamwall .you u{border-radius:4cqw;border-width:.5cqw}
  .v-hire-teamwall .bub{left:40cqw;top:40cqw;font-size:4cqw;padding:1.4cqw 2.6cqw;border-radius:3cqw}
  .v-hire-teamwall .bub svg{width:4cqw;height:4cqw;transform:rotate(180deg)}
  .v-hire-teamwall .g1{left:6cqw;top:120cqw;font-size:3cqw;padding:1.2cqw 2.4cqw;gap:1.4cqw}
  .v-hire-teamwall .g2{display:none}
  .v-hire-teamwall .tag i{width:1.6cqw;height:1.6cqw}
  .v-hire-teamwall .kick{top:8cqh;font-size:5.4cqw;gap:2cqw;padding:2cqw 4cqw;border-radius:8cqw}
  .v-hire-teamwall .kick svg{width:6cqw;height:6cqw}
  .v-hire-teamwall .card{left:7cqw;width:86cqw;top:34cqh;padding:5cqw 5cqw 5.4cqw;border-radius:5cqw}
  .v-hire-teamwall .big{flex-direction:column;align-items:center;gap:0}
  .v-hire-teamwall .digits{font-size:26cqw}
  .v-hire-teamwall .ppl{font-size:12cqw}
  .v-hire-teamwall .stats{margin-top:3cqw;padding-top:3.4cqw}
  .v-hire-teamwall .stats b{font-size:5cqw}
  .v-hire-teamwall .stats span{font-size:2.6cqw}
  .v-hire-teamwall .sub{top:auto;bottom:7cqh;max-width:86cqw;width:86cqw;font-size:5.4cqw;padding:2.6cqw 4cqw;border-radius:6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-teamwall .wall{left:-6.5cqw;top:-6cqw;width:114cqw;grid-template-columns:repeat(7,14.6cqw);grid-auto-rows:14.6cqw;gap:1.6cqw}
  .v-hire-teamwall .t{border-radius:3cqw}
  .v-hire-teamwall .you{grid-row:2;grid-column:6}
  .v-hire-teamwall .you b{font-size:3cqw}
  .v-hire-teamwall .bub{left:56cqw;top:28cqw;font-size:2.6cqw;padding:1cqw 1.8cqw}
  .v-hire-teamwall .bub svg{width:2.6cqw;height:2.6cqw;transform:rotate(-45deg)}
  .v-hire-teamwall .g1{left:6cqw;top:84cqw;font-size:1.9cqw;padding:.8cqw 1.6cqw}
  .v-hire-teamwall .g2{left:auto;right:6cqw;top:90cqw;font-size:1.9cqw;padding:.8cqw 1.6cqw}
  .v-hire-teamwall .tag i{width:1.1cqw;height:1.1cqw}
  .v-hire-teamwall .kick{top:36cqw;font-size:2.2cqw;padding:1cqw 2.2cqw}
  .v-hire-teamwall .kick svg{width:2.8cqw;height:2.8cqw}
  .v-hire-teamwall .card{left:14cqw;width:72cqw;top:42cqw;padding:3cqw 4cqw 3.4cqw}
  .v-hire-teamwall .digits{font-size:14cqw}
  .v-hire-teamwall .ppl{font-size:7.4cqw}
  .v-hire-teamwall .stats b{font-size:3.2cqw}
  .v-hire-teamwall .stats span{font-size:1.8cqw}
  .v-hire-teamwall .sub{top:83cqw;max-width:80cqw;font-size:2.4cqw;padding:1.2cqw 2.6cqw}
}
@keyframes hire-teamwall-wall{0%{clip-path:circle(0% at 50% 50%);transform:scale(1.12)}30%,100%{clip-path:circle(80% at 50% 50%);transform:scale(1)}}
@keyframes hire-teamwall-you{0%,40%{transform:scale(1)}46%{transform:scale(1.12)}52%,100%{transform:scale(1)}}
@keyframes hire-teamwall-pulse{0%{opacity:.8;transform:scale(1)}80%,100%{opacity:0;transform:scale(1.3)}}
@keyframes hire-teamwall-bub{0%,38%{opacity:0;transform:translateX(-1.5cqw) scale(.9)}46%,100%{opacity:1;transform:translateX(0) scale(1)}}
@keyframes hire-teamwall-g1{0%,32%{opacity:0;transform:translateY(1cqw) scale(.85)}40%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hire-teamwall-g2{0%,36%{opacity:0;transform:translateY(1cqw) scale(.85)}44%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hire-teamwall-card{0%,16%{opacity:0;transform:translateY(3cqw) scale(.94)}28%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hire-teamwall-kick{0%,20%{opacity:0;transform:translate(-50%,1.5cqw)}32%,100%{opacity:1;transform:translate(-50%,0)}}
@keyframes hire-teamwall-roll{0%{opacity:0;transform:translateY(-.5em);filter:blur(.05em)}12%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const hirePerks: SceneSpec = {
  id: "hire-perks",
  slug: "mg-hire-perks",
  name: "Perk Sticker Board",
  kind: "scene",
  job: "gallery",
  language: "neo-brutal",
  mechanic: "perk-stickers-slap-on",
  energy: "punchy",
  settle: 3.6,
  colors: { ink: "#1A1424", accent: "#FF5B2E", secondary: "#8EE3C0", paper: "#C9B8FF" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hiring", "perks", "benefits", "stickers"],
  fields: [
    { key: "title", label: "Title", default: "Perks that actually matter.", maxChars: 34, role: "headline" },
    { key: "brand", label: "Company", default: "Wayfold", maxChars: 18, role: "label" },
    { key: "cta", label: "Footer link", default: "+ 11 more on wayfold.jobs", maxChars: 30, role: "cta" },
  ],
  html: `<div class="ttl" data-21st-slot="title">{{title|words}}</div>
<div class="brand"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
<svg class="spark sp1" viewBox="0 0 24 24"><path d="M12 1.5c.8 5.6 4.9 9.7 10.5 10.5-5.6.8-9.7 4.9-10.5 10.5C11.2 16.9 7.1 12.8 1.5 12 7.1 11.2 11.2 7.1 12 1.5z" fill="currentColor" stroke="#1A1424" stroke-width="1.4" stroke-linejoin="round"/></svg>
<svg class="spark sp2" viewBox="0 0 24 24"><path d="M12 1.5c.8 5.6 4.9 9.7 10.5 10.5-5.6.8-9.7 4.9-10.5 10.5C11.2 16.9 7.1 12.8 1.5 12 7.1 11.2 11.2 7.1 12 1.5z" fill="currentColor" stroke="#1A1424" stroke-width="1.6" stroke-linejoin="round"/></svg>
<div class="board">
  <div class="st s1"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1424" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg></span><span><b>4-day weeks</b><small>all of July</small></span></div>
  <div class="st s2"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5C5.5 4.5 9 4.5 12 6.5c3-2 6.5-2 9-1v13c-2.5-1-6-1-9 1-3-2-6.5-2-9-1z"/><path d="M12 6.5v13"/></svg></span><span><b>€2k a year</b><small>to learn anything</small></span></div>
  <div class="st s3"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1424" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg></span><span><b>Remote-first</b><small>or one of 9 hubs</small></span></div>
  <div class="st s4"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/></svg></span><span><b>20 weeks</b><small>paid parental leave</small></span></div>
  <div class="st s5"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6.4 6.4"/></svg></span><span><b>Equity</b><small>for every single hire</small></span></div>
  <div class="st s6"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="#1A1424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M12 4 4 20M12 4l8 16M12 13l-3 7M12 13l3 7"/></svg></span><span><b>Team offsite</b><small>last stop: the Azores</small></span></div>
</div>
<div class="more"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c4-6 9-8 15-6M15 4l4 4-4 4"/></svg></div>`,
  css: `
.v-hire-perks,.v-hire-perks *{box-sizing:border-box}
.v-hire-perks svg{display:block}
.v-hire-perks{color:var(--ink);font-family:var(--font-body)}
.v-hire-perks[data-backdrop="on"]{background:radial-gradient(circle,color-mix(in srgb,var(--ink) 16%,transparent) .12cqw,transparent .16cqw) 0 0/2.4cqw 2.4cqw,linear-gradient(160deg,color-mix(in srgb,var(--paper) 75%,#fff),var(--paper) 60%,color-mix(in srgb,var(--paper) 88%,var(--ink)))}
.v-hire-perks .ttl{position:absolute;left:6cqw;top:16cqh;width:36cqw;font-family:var(--font-display);font-weight:700;font-size:5.8cqw;line-height:1.2;letter-spacing:-.045em;animation:hire-perks-ttl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .ttl .w{display:inline-block;line-height:1.2}
.v-hire-perks .ttl .w:nth-last-child(2){font-family:"Instrument Serif",var(--font-display);font-style:italic;font-weight:400;letter-spacing:-.01em;line-height:1.3;padding-right:.08em;color:var(--accent)}
.v-hire-perks .brand{position:absolute;left:6cqw;top:7cqh;display:flex;gap:.8cqw;align-items:center;font-weight:700;font-size:1.7cqw;line-height:1.25;letter-spacing:-.02em;animation:hire-perks-ttl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .brand svg{width:2.4cqw;height:2.4cqw;flex:none;color:var(--accent)}
.v-hire-perks .spark{position:absolute;width:3cqw;height:3cqw;color:var(--secondary);animation:hire-perks-spark 3s ease-in-out infinite}
.v-hire-perks .sp1{left:36cqw;top:10cqh}
.v-hire-perks .sp2{left:41cqw;top:17cqh;width:1.8cqw;height:1.8cqw;color:#fff}
.v-hire-perks .board{position:absolute;zoom:.55;left:calc(44cqw / .55);top:calc(-3.4cqw / .55);width:100cqw;height:100cqw;animation:hire-perks-float 6s ease-in-out infinite}
.v-hire-perks .st{position:absolute;display:flex;align-items:center;gap:2cqw;padding:2.1cqw 3cqw 2.1cqw 2.1cqw;border:.55cqw solid var(--ink);border-radius:3.4cqw;box-shadow:.9cqw .9cqw 0 var(--ink);background:var(--c);color:#1A1424;white-space:nowrap}
.v-hire-perks .ic{flex:none;width:7.4cqw;height:7.4cqw;border-radius:50%;background:#fff;border:.45cqw solid #1A1424;display:grid;place-items:center}
.v-hire-perks .ic svg{width:4.2cqw;height:4.2cqw}
.v-hire-perks .st b{display:block;font-family:var(--font-display);font-weight:700;font-size:3.9cqw;letter-spacing:-.035em;line-height:1.15}
.v-hire-perks .st small{display:block;margin-top:.5cqw;font-size:2.25cqw;font-weight:500;opacity:.78}
.v-hire-perks .s1{--c:#FFD66B;left:6cqw;top:29cqw;animation:hire-perks-s1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .s2{--c:var(--secondary);left:52cqw;top:28cqw;animation:hire-perks-s2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .s3{--c:#FFFFFF;left:8cqw;top:50.5cqw;animation:hire-perks-s3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .s4{--c:#FFB3C7;left:53cqw;top:50cqw;animation:hire-perks-s4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .s5{--c:var(--accent);left:5cqw;top:72cqw;animation:hire-perks-s5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .s6{--c:#9ED8FF;left:50cqw;top:72.5cqw;animation:hire-perks-s6 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .more{position:absolute;right:6cqw;bottom:6cqh;display:flex;align-items:center;gap:.8cqw;font-family:var(--font-display);font-style:italic;font-weight:700;font-size:2cqw;line-height:1.25;animation:hire-perks-more 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-perks .more svg{width:2.6cqw;height:2.6cqw;color:var(--accent);flex:none}
@container (max-aspect-ratio: 4/5){
  .v-hire-perks .brand{left:7cqw;top:6cqh;font-size:5.6cqw;gap:2cqw}
  .v-hire-perks .brand svg{width:7cqw;height:7cqw}
  .v-hire-perks .ttl{left:7cqw;top:12.5cqh;width:86cqw;font-size:12.4cqw}
  .v-hire-perks .sp1{left:78cqw;top:6cqh;width:7cqw;height:7cqw}
  .v-hire-perks .sp2{left:88cqw;top:10cqh;width:4cqw;height:4cqw}
  .v-hire-perks .board{zoom:1.06;left:calc(-3cqw / 1.06);top:calc((45cqh - 30cqw) / 1.06)}
  .v-hire-perks .more{left:7cqw;right:7cqw;bottom:7cqh;justify-content:center;font-size:6cqw;gap:2.4cqw}
  .v-hire-perks .more svg{width:7cqw;height:7cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-perks .ttl{left:7cqw;top:7cqw;width:62cqw;font-size:7.6cqw}
  .v-hire-perks .brand{left:auto;right:7cqw;top:8.2cqw;font-size:3cqw;gap:1.2cqw}
  .v-hire-perks .brand svg{width:4.4cqw;height:4.4cqw}
  .v-hire-perks .sp1{left:72cqw;top:16cqw;width:5cqw;height:5cqw}
  .v-hire-perks .sp2{left:86cqw;top:21cqw;width:3cqw;height:3cqw}
  .v-hire-perks .board{zoom:1;left:0;top:0}
  .v-hire-perks .more{right:7cqw;bottom:4cqw;font-size:3.6cqw}
  .v-hire-perks .more svg{width:4.4cqw;height:4.4cqw}
}
@keyframes hire-perks-ttl{0%{opacity:0;transform:translateY(3cqw)}10%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-perks-spark{0%,100%{transform:scale(.7) rotate(0deg);opacity:.6}50%{transform:scale(1.1) rotate(45deg);opacity:1}}
@keyframes hire-perks-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-.8cqw) rotate(-.4deg)}}
@keyframes hire-perks-s1{0%,8%{opacity:0;transform:rotate(-22deg) scale(1.7)}14%{opacity:1;transform:rotate(-3deg) scale(.93)}18%,100%{opacity:1;transform:rotate(-5deg) scale(1)}}
@keyframes hire-perks-s2{0%,14%{opacity:0;transform:rotate(20deg) scale(1.7)}20%{opacity:1;transform:rotate(6deg) scale(.93)}24%,100%{opacity:1;transform:rotate(4deg) scale(1)}}
@keyframes hire-perks-s3{0%,20%{opacity:0;transform:rotate(-18deg) scale(1.7)}26%{opacity:1;transform:rotate(5deg) scale(.93)}30%,100%{opacity:1;transform:rotate(3deg) scale(1)}}
@keyframes hire-perks-s4{0%,26%{opacity:0;transform:rotate(18deg) scale(1.7)}32%{opacity:1;transform:rotate(-6deg) scale(.93)}36%,100%{opacity:1;transform:rotate(-4deg) scale(1)}}
@keyframes hire-perks-s5{0%,32%{opacity:0;transform:rotate(-20deg) scale(1.7)}38%{opacity:1;transform:rotate(-1deg) scale(.93)}42%,100%{opacity:1;transform:rotate(-3deg) scale(1)}}
@keyframes hire-perks-s6{0%,38%{opacity:0;transform:rotate(22deg) scale(1.7)}44%{opacity:1;transform:rotate(7deg) scale(.93)}48%,100%{opacity:1;transform:rotate(5deg) scale(1)}}
@keyframes hire-perks-more{0%,46%{opacity:0;transform:translateX(-2cqw) rotate(-4deg)}54%,100%{opacity:1;transform:translateX(0) rotate(-4deg)}}
`,
};

export const hireProcess: SceneSpec = {
  id: "hire-process",
  slug: "mg-hire-process",
  name: "Hiring Process Timeline",
  kind: "scene",
  job: "process",
  language: "product-ui",
  mechanic: "candidate-walks-step-timeline",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#121826", accent: "#FF5B2E", secondary: "#667085", paper: "#FFFFFF" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["hiring", "process", "timeline", "steps"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Hiring at Wayfold", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "How we hire", maxChars: 26, role: "headline" },
    { key: "sub", label: "Subline", default: "Four steps, about two weeks. No unpaid take-home marathons.", maxChars: 70, role: "body" },
    { key: "badge", label: "Badge", default: "Avg. 12 days from hello to offer", maxChars: 36, role: "label" },
  ],
  html: `<div class="fadeL"></div>
<div class="hdr"><div class="eb"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div><div class="h" data-21st-slot="headline">{{headline}}</div><div class="sub" data-21st-slot="sub">{{sub}}</div></div>
<div class="badge"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg></i><span data-21st-slot="badge">{{badge}}</span></div>
<div class="track"></div><div class="prog"></div>
<div class="node n1">1<b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></b></div>
<div class="node n2">2<b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></b></div>
<div class="node n3">3<b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></b></div>
<div class="node n4">4<b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg></b></div>
<div class="you"><div class="you-in"><i></i><span>You</span></div></div>
<div class="cd c1"><i class="acc"></i><div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg></div><div class="tx"><b>Intro chat</b><p>A relaxed call about you, the team and the role.</p><span>30 min</span></div></div>
<div class="cd c2"><i class="acc"></i><div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12"/></svg></div><div class="tx"><b>Craft session</b><p>Pair with us on a real problem. Paid, no homework.</p><span>90 min</span></div></div>
<div class="cd c3"><i class="acc"></i><div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c.8-3.2 3.2-5 6-5s5.2 1.8 6 5M15 15.2c2.6-.4 4.8 1 5.5 3.8"/></svg></div><div class="tx"><b>Team day</b><p>Meet four future teammates and ask anything.</p><span>half day</span></div></div>
<div class="cd c4"><i class="ring"></i><i class="acc"></i><div class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M9.5 13.5l2 2 4-4.5"/></svg></div><div class="tx"><b>Offer</b><p>Salary and equity in writing, explained line by line.</p><span>within 48 h</span></div></div>`,
  css: `
.v-hire-process,.v-hire-process *{box-sizing:border-box}
.v-hire-process svg{display:block}
.v-hire-process{color:var(--ink);font-family:var(--font-body)}
.v-hire-process[data-backdrop="on"]{background:linear-gradient(color-mix(in srgb,var(--ink) 6%,transparent) 1px,transparent 1px) 0 0/100% 5cqw,linear-gradient(90deg,color-mix(in srgb,var(--ink) 6%,transparent) 1px,transparent 1px) 0 0/5cqw 100%,color-mix(in srgb,var(--paper) 96%,var(--ink))}
.v-hire-process .fadeL{position:absolute;inset:0;background:radial-gradient(70% 80% at 50% 50%,transparent,color-mix(in srgb,var(--paper) 85%,transparent) 100%)}
.v-hire-process[data-backdrop="off"] .fadeL{display:none}
.v-hire-process .hdr{position:absolute;left:7cqw;right:40cqw;top:5cqw;animation:hire-process-hdr 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .eb{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--accent) 70%,var(--ink))}
.v-hire-process .eb svg{width:1.7cqw;height:1.7cqw;flex:none;color:var(--accent)}
.v-hire-process .h{margin-top:.4cqw;font-family:var(--font-display);font-weight:700;font-size:4.4cqw;letter-spacing:-.035em;line-height:1.25}
.v-hire-process .sub{margin-top:.3cqw;font-size:1.55cqw;line-height:1.35;color:color-mix(in srgb,var(--ink) 66%,transparent);animation:hire-process-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .badge{position:absolute;right:6cqw;top:7.2cqw;max-width:30cqw;display:flex;align-items:center;gap:1cqw;padding:1cqw 1.6cqw 1cqw 1.1cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font-size:1.35cqw;line-height:1.25;font-weight:500;box-shadow:0 1.2cqw 2.4cqw rgba(18,24,38,.18);animation:hire-process-badge 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .badge i{flex:none;display:grid;place-items:center;width:2.4cqw;height:2.4cqw;border-radius:50%;background:var(--accent)}
.v-hire-process .badge svg{width:1.5cqw;height:1.5cqw;color:#fff}
.v-hire-process .track,.v-hire-process .prog{position:absolute;left:14cqw;width:72cqw;top:29.8cqw;height:.4cqw;border-radius:1cqw}
.v-hire-process .track{background:color-mix(in srgb,var(--ink) 12%,transparent)}
.v-hire-process .prog{background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent));transform-origin:0 50%;animation:hire-process-prog 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-process .node{position:absolute;top:28.2cqw;width:3.6cqw;height:3.6cqw;margin-left:-1.8cqw;border-radius:50%;background:var(--paper);border:.25cqw solid color-mix(in srgb,var(--ink) 22%,transparent);display:grid;place-items:center;font:500 1.3cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-hire-process .node b{position:absolute;inset:-.25cqw;border-radius:50%;background:var(--accent);display:grid;place-items:center;box-shadow:0 0 0 .6cqw color-mix(in srgb,var(--accent) 16%,transparent)}
.v-hire-process .node svg{width:1.9cqw;height:1.9cqw;color:#fff}
.v-hire-process .n1{left:14cqw}
.v-hire-process .n2{left:38cqw}
.v-hire-process .n3{left:62cqw}
.v-hire-process .n4{left:86cqw}
.v-hire-process .n1 b{animation:hire-process-n1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .n2 b{animation:hire-process-n2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .n3 b{animation:hire-process-n3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .n4 b{animation:hire-process-n4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .you{position:absolute;left:14cqw;top:22.6cqw;width:8cqw;margin-left:-4cqw;animation:hire-process-you 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-process .you-in{position:relative;display:flex;align-items:center;justify-content:center;gap:.6cqw;height:3.2cqw;border-radius:3cqw;background:var(--ink);color:var(--paper);font-size:1.25cqw;font-weight:600;animation:hire-process-bob 1.5s ease-in-out infinite}
.v-hire-process .you-in i{display:block;flex:none;width:1.9cqw;height:1.9cqw;border-radius:50%;background:radial-gradient(circle at 50% 40%,#5A3A2C 0 .38cqw,transparent .42cqw),radial-gradient(.8cqw .6cqw at 50% 106%,#5A3A2C 0 96%,transparent 100%),#FFC9B5}
.v-hire-process .you-in::after{content:"";position:absolute;left:50%;bottom:-.6cqw;margin-left:-.6cqw;border:.6cqw solid transparent;border-top-color:var(--ink);border-bottom:0}
.v-hire-process .cd{position:absolute;top:36cqw;width:20cqw;padding:1.7cqw;border-radius:1.4cqw;background:var(--paper);color:var(--ink);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);box-shadow:0 .2cqw .5cqw rgba(18,24,38,.04),0 1.4cqw 3cqw rgba(18,24,38,.08)}
.v-hire-process .cd .acc{position:absolute;left:1.7cqw;right:1.7cqw;top:-1px;height:.3cqw;border-radius:0 0 .3cqw .3cqw;background:var(--accent);transform-origin:0 50%}
.v-hire-process .cd .ci{width:3.4cqw;height:3.4cqw;border-radius:1cqw;background:color-mix(in srgb,var(--accent) 12%,var(--paper));color:var(--accent);display:grid;place-items:center;flex:none}
.v-hire-process .cd .ci svg{width:2cqw;height:2cqw}
.v-hire-process .cd b{display:block;margin-top:1.2cqw;font-size:1.8cqw;font-weight:600;letter-spacing:-.02em}
.v-hire-process .cd p{margin:.5cqw 0 0;font-size:1.25cqw;line-height:1.35;color:color-mix(in srgb,var(--ink) 64%,transparent)}
.v-hire-process .cd span{display:inline-block;margin-top:1.1cqw;font:500 1.1cqw/1.2 var(--font-mono);padding:.35cqw .8cqw;border-radius:.6cqw;background:color-mix(in srgb,var(--ink) 6%,var(--paper));color:color-mix(in srgb,var(--ink) 80%,transparent)}
.v-hire-process .c1{left:4cqw;--delay:0s;animation:hire-process-c 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c2{left:28cqw;--delay:.12s;animation:hire-process-c 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c3{left:52cqw;--delay:.24s;animation:hire-process-c 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c4{left:76cqw;--delay:.36s;animation:hire-process-c 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c1 .acc{--delay:0s;animation:hire-process-a1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c2 .acc{--delay:0s;animation:hire-process-a2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c3 .acc{--delay:0s;animation:hire-process-a3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c4 .acc{--delay:0s;animation:hire-process-a4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c4 .ring{position:absolute;inset:-1px;border-radius:1.4cqw;box-shadow:0 0 0 .22cqw color-mix(in srgb,var(--accent) 55%,transparent),0 1.6cqw 3.6cqw color-mix(in srgb,var(--accent) 20%,transparent);--delay:0s;animation:hire-process-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-process .c4 .ci{background:var(--accent);color:#fff}
@container (max-aspect-ratio: 4/5){
  .v-hire-process .hdr{left:7cqw;right:7cqw;top:5.5cqh}
  .v-hire-process .eb{font-size:5.4cqw;gap:2cqw}
  .v-hire-process .eb svg{width:6cqw;height:6cqw}
  .v-hire-process .h{font-size:13cqw;margin-top:1cqh}
  .v-hire-process .sub{font-size:5.4cqw;margin-top:.6cqh}
  .v-hire-process .track,.v-hire-process .prog{left:12cqw;width:.9cqw;margin-left:-.45cqw;top:36.5cqh;height:40cqh}
  .v-hire-process .prog{transform-origin:50% 0;animation-name:hire-process-progv}
  .v-hire-process .node{left:12cqw;width:7cqw;height:7cqw;margin:-3.5cqw 0 0 -3.5cqw;font-size:3cqw;border-width:.5cqw}
  .v-hire-process .node svg{width:3.6cqw;height:3.6cqw}
  .v-hire-process .n1{top:36.5cqh}
  .v-hire-process .n2{top:49.8cqh}
  .v-hire-process .n3{top:63.1cqh}
  .v-hire-process .n4{top:76.5cqh}
  .v-hire-process .you{left:12cqw;top:36.5cqh;width:10cqw;margin:-5cqw 0 0 -5cqw;animation-name:hire-process-youv}
  .v-hire-process .you-in{width:10cqw;height:10cqw;border-radius:50%;box-shadow:0 0 0 1cqw color-mix(in srgb,var(--paper) 80%,transparent)}
  .v-hire-process .you-in span,.v-hire-process .you-in::after{display:none}
  .v-hire-process .you-in i{width:7cqw;height:7cqw;background:radial-gradient(circle at 50% 40%,#5A3A2C 0 1.4cqw,transparent 1.5cqw),radial-gradient(3cqw 2.2cqw at 50% 106%,#5A3A2C 0 96%,transparent 100%),#FFC9B5}
  .v-hire-process .cd{left:22cqw;width:71cqw;display:flex;gap:3cqw;align-items:flex-start;padding:3cqw;border-radius:3cqw}
  .v-hire-process .c1{top:31cqh}
  .v-hire-process .c2{top:44.3cqh}
  .v-hire-process .c3{top:57.6cqh}
  .v-hire-process .c4{top:71cqh}
  .v-hire-process .cd .acc{left:3cqw;right:3cqw;height:.6cqw}
  .v-hire-process .cd .ci{width:8cqw;height:8cqw;border-radius:2.2cqw}
  .v-hire-process .cd .ci svg{width:4.4cqw;height:4.4cqw}
  .v-hire-process .cd b{margin-top:0;font-size:4.6cqw}
  .v-hire-process .cd p{font-size:3.2cqw;margin-top:.6cqw}
  .v-hire-process .cd span{display:none}
  .v-hire-process .badge{left:7cqw;right:7cqw;top:auto;bottom:5.5cqh;max-width:none;font-size:5.4cqw;gap:3cqw;padding:2.4cqw 4cqw 2.4cqw 2.4cqw;border-radius:10cqw}
  .v-hire-process .badge i{width:9cqw;height:9cqw}
  .v-hire-process .badge svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-process .hdr{left:6cqw;right:6cqw;top:6cqh}
  .v-hire-process .eb{font-size:2cqw;gap:1cqw}
  .v-hire-process .eb svg{width:2.6cqw;height:2.6cqw}
  .v-hire-process .h{font-size:7.6cqw}
  .v-hire-process .sub{font-size:2.4cqw}
  .v-hire-process .track,.v-hire-process .prog{top:38cqh;height:.6cqw}
  .v-hire-process .node{top:38cqh;width:5cqw;height:5cqw;margin:calc(-2.5cqw + .3cqw) 0 0 -2.5cqw;font-size:1.9cqw}
  .v-hire-process .node svg{width:2.6cqw;height:2.6cqw}
  .v-hire-process .you{top:calc(38cqh - 6.6cqw);width:11cqw;margin-left:-5.5cqw}
  .v-hire-process .you-in{height:4.4cqw;font-size:1.9cqw;gap:.8cqw}
  .v-hire-process .you-in i{width:2.8cqw;height:2.8cqw}
  .v-hire-process .cd{width:43cqw;padding:2.4cqw;border-radius:2cqw;display:flex;gap:2cqw;align-items:flex-start}
  .v-hire-process .c1{left:6cqw;top:46cqh}
  .v-hire-process .c2{left:51cqw;top:46cqh}
  .v-hire-process .c3{left:6cqw;top:65cqh}
  .v-hire-process .c4{left:51cqw;top:65cqh}
  .v-hire-process .cd .ci{width:5cqw;height:5cqw;border-radius:1.4cqw}
  .v-hire-process .cd .ci svg{width:3cqw;height:3cqw}
  .v-hire-process .cd b{margin-top:0;font-size:2.6cqw}
  .v-hire-process .cd p{font-size:1.8cqw}
  .v-hire-process .cd span{font-size:1.6cqw;margin-top:.8cqw}
  .v-hire-process .badge{left:6cqw;right:auto;top:auto;bottom:4.5cqh;max-width:none;font-size:2.2cqw;gap:1.4cqw;padding:1.3cqw 2.4cqw 1.3cqw 1.4cqw}
  .v-hire-process .badge i{width:3.6cqw;height:3.6cqw}
  .v-hire-process .badge svg{width:2.2cqw;height:2.2cqw}
}
@keyframes hire-process-hdr{0%{opacity:0;transform:translateY(1.5cqw)}10%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-process-sub{0%,3%{opacity:0;transform:translateY(1cqw)}13%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-process-badge{0%,44%{opacity:0;transform:translateY(-1cqw) scale(.9)}51%,100%{opacity:1;transform:translateY(0) scale(1)}}
@keyframes hire-process-prog{0%,16%{transform:scaleX(0)}24%,27%{transform:scaleX(.3333)}35%,38%{transform:scaleX(.6667)}45%,100%{transform:scaleX(1)}}
@keyframes hire-process-progv{0%,16%{transform:scaleY(0)}24%,27%{transform:scaleY(.3333)}35%,38%{transform:scaleY(.6667)}45%,100%{transform:scaleY(1)}}
@keyframes hire-process-you{0%,8%{opacity:0;transform:translate(0,1cqw)}14%,16%{opacity:1;transform:translate(0,0)}24%,27%{opacity:1;transform:translate(24cqw,0)}35%,38%{opacity:1;transform:translate(48cqw,0)}45%,100%{opacity:1;transform:translate(72cqw,0)}}
@keyframes hire-process-youv{0%,8%{opacity:0;transform:scale(.6)}14%,16%{opacity:1;transform:translate(0,0)}24%,27%{opacity:1;transform:translate(0,13.3cqh)}35%,38%{opacity:1;transform:translate(0,26.6cqh)}45%,100%{opacity:1;transform:translate(0,40cqh)}}
@keyframes hire-process-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-.35cqw)}}
@keyframes hire-process-n1{0%,13%{transform:scale(0)}17%{transform:scale(1.18)}20%,100%{transform:scale(1)}}
@keyframes hire-process-n2{0%,23%{transform:scale(0)}26%{transform:scale(1.18)}29%,100%{transform:scale(1)}}
@keyframes hire-process-n3{0%,34%{transform:scale(0)}37%{transform:scale(1.18)}40%,100%{transform:scale(1)}}
@keyframes hire-process-n4{0%,43%{transform:scale(0)}46%{transform:scale(1.2)}49%,100%{transform:scale(1)}}
@keyframes hire-process-c{0%,4%{opacity:0;transform:translateY(2cqw)}14%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-process-a1{0%,13%{transform:scaleX(0)}19%,100%{transform:scaleX(1)}}
@keyframes hire-process-a2{0%,23%{transform:scaleX(0)}29%,100%{transform:scaleX(1)}}
@keyframes hire-process-a3{0%,34%{transform:scaleX(0)}40%,100%{transform:scaleX(1)}}
@keyframes hire-process-a4{0%,43%{transform:scaleX(0)}49%,100%{transform:scaleX(1)}}
@keyframes hire-process-ring{0%,44%{opacity:0}50%,100%{opacity:1}}
`,
};

export const hireQuote: SceneSpec = {
  id: "hire-quote",
  slug: "mg-hire-quote",
  name: "Employee Quote Arch",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "arch-portrait-quote-highlight",
  energy: "calm",
  settle: 3.2,
  colors: { ink: "#2A1F17", accent: "#C2502C", secondary: "#FFCF5C", paper: "#F2E8D6" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["hiring", "employee", "quote", "editorial"],
  fields: [
    { key: "pub", label: "Masthead", default: "Voices of Wayfold", maxChars: 26, role: "kicker" },
    { key: "quote", label: "Quote", default: "Nobody here asks you to wait your turn. I shipped in my first week.", maxChars: 80, role: "headline" },
    { key: "name", label: "Name", default: "Maya Okafor", maxChars: 22, role: "name" },
    { key: "role", label: "Role line", default: "Staff Engineer, 3 years at Wayfold", maxChars: 40, role: "caption" },
  ],
  html: `<div class="mast"><span class="pub" data-21st-slot="pub">{{pub}}</span><span class="iss">No. 07 · Engineering</span></div>
<div class="rule"></div>
<div class="arch"><div class="ph"><div class="leak"></div><div class="bun"></div><div class="hair"></div><div class="neck"></div><div class="head"></div><div class="fringe"></div><div class="body"></div></div></div>
<div class="cap">at the Lisbon studio</div>
<div class="qm">“</div>
<div class="q" data-21st-slot="quote">{{quote|words}}</div>
<div class="att"><span class="dash"></span><div><div class="nm" data-21st-slot="name">{{name}}</div><div class="rl" data-21st-slot="role">{{role}}</div></div></div>
<div class="hand"><svg viewBox="0 0 60 44" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M56 40C40 40 20 34 8 10"/><path d="M4 18l4-9 9 4"/></svg><span>joined as a junior!</span></div>
<div class="brand"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><em>careers</em></div>
<div class="grain"></div>`,
  css: `
.v-hire-quote,.v-hire-quote *{box-sizing:border-box}
.v-hire-quote svg{display:block}
.v-hire-quote{color:var(--ink);font-family:var(--font-body)}
.v-hire-quote[data-backdrop="on"]{background:radial-gradient(80% 70% at 70% 30%,color-mix(in srgb,var(--paper) 70%,#fff),var(--paper) 60%,color-mix(in srgb,var(--paper) 92%,var(--ink)))}
.v-hire-quote .grain{position:absolute;inset:0;z-index:4;pointer-events:none;background-image:${GRAIN};background-size:20cqw;opacity:.3;mix-blend-mode:multiply}
.v-hire-quote[data-backdrop="off"] .grain{display:none}
.v-hire-quote .mast{position:absolute;left:6cqw;right:6cqw;top:3.2cqw;display:flex;justify-content:space-between;align-items:baseline;animation:hire-quote-mast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .pub{font-family:var(--font-display);font-style:italic;font-size:2cqw;line-height:1.3;padding-right:.1em}
.v-hire-quote .iss{font:500 1.1cqw/1 var(--font-mono);letter-spacing:.06em;color:color-mix(in srgb,var(--ink) 66%,transparent)}
.v-hire-quote .rule{position:absolute;left:6cqw;right:6cqw;top:7.4cqw;height:1px;background:color-mix(in srgb,var(--ink) 40%,transparent);transform-origin:0 50%;animation:hire-quote-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-quote .arch{position:absolute;left:6cqw;top:10.4cqw;width:27cqw;height:38.6cqw;border-radius:13.5cqw 13.5cqw 1cqw 1cqw;overflow:hidden;box-shadow:0 1.6cqw 3.6cqw rgba(90,50,30,.22);animation:hire-quote-arch 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-quote .ph{position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 35%,#F4CBA6) 0%,color-mix(in srgb,var(--accent) 75%,#E0A070) 55%,color-mix(in srgb,var(--accent) 60%,#3a1a10) 100%);transform-origin:50% 35%;animation:hire-quote-kb 6s linear infinite}
.v-hire-quote .leak{position:absolute;right:-20%;top:-10%;width:80%;height:60%;border-radius:50%;background:radial-gradient(circle,rgba(255,230,186,.9),transparent 68%);animation:hire-quote-leak 6s ease-in-out infinite}
.v-hire-quote .hair{position:absolute;left:26%;top:19%;width:48%;height:46%;border-radius:50% 50% 42% 42%/58% 58% 42% 42%;background:linear-gradient(160deg,#4A251B,#2A140E)}
.v-hire-quote .bun{position:absolute;left:41%;top:12%;width:18%;height:12%;border-radius:50%;background:#3A1C14}
.v-hire-quote .head{position:absolute;left:33.5%;top:25%;width:33%;height:31%;border-radius:48% 48% 46% 46%/46% 46% 54% 54%;background:radial-gradient(75% 65% at 66% 28%,#E3A07A 0%,#B86A48 50%,#7E3E2A 100%);box-shadow:inset -.5cqw .3cqw .9cqw rgba(255,226,186,.6)}
.v-hire-quote .fringe{position:absolute;left:31%;top:21.5%;width:30%;height:13%;border-radius:70% 40% 60% 10%/90% 60% 40% 20%;background:linear-gradient(160deg,#4A251B,#2A140E);transform:rotate(-8deg)}
.v-hire-quote .neck{position:absolute;left:43%;top:52%;width:14%;height:12%;background:linear-gradient(90deg,#6A3122,#8C4A35)}
.v-hire-quote .body{position:absolute;left:6%;right:6%;bottom:-6%;height:42%;border-radius:50% 50% 0 0/62% 62% 0 0;background:linear-gradient(160deg,#F6E9D6 0%,#DCC6AA 60%,#B89E80 100%)}
.v-hire-quote .body::after{content:"";position:absolute;left:38%;top:0;width:24%;height:22%;border-radius:0 0 50% 50%;background:#8C4A35}
.v-hire-quote .cap{position:absolute;left:6cqw;top:50.3cqw;font:500 1.02cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent);animation:hire-quote-att 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .qm{position:absolute;left:39.4cqw;top:6.4cqw;font-family:var(--font-display);font-size:15cqw;line-height:1;color:var(--accent);transform-origin:20% 60%;animation:hire-quote-qm 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .q{position:absolute;left:40cqw;top:17.6cqw;width:54cqw;font-family:var(--font-display);font-size:4.1cqw;line-height:1.2;letter-spacing:-.01em}
.v-hire-quote .q .w{--delay:calc(.45s + var(--i) * .07s);position:relative;z-index:0;display:inline-block;line-height:1.34;animation:hire-quote-w 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .q .w:nth-last-child(-n+3){font-style:italic;padding:0 .14em;margin:0 -.1em;line-height:1.34;-webkit-box-decoration-break:clone;box-decoration-break:clone;background:linear-gradient(color-mix(in srgb,var(--secondary) 60%,transparent),color-mix(in srgb,var(--secondary) 60%,transparent)) no-repeat 0 calc(100% - .12em)/100% .34em;animation:hire-quote-w 6s cubic-bezier(.2,.8,.2,1) infinite,hire-quote-mark 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-quote .att{position:absolute;left:40cqw;top:38cqw;display:flex;align-items:center;gap:1.4cqw;animation:hire-quote-att 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .dash{flex:none;width:3.4cqw;height:1px;background:var(--ink)}
.v-hire-quote .nm{font-size:1.9cqw;line-height:1.25;font-weight:600;letter-spacing:-.01em}
.v-hire-quote .rl{margin-top:.2cqw;font-size:1.3cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-hire-quote .hand{position:absolute;left:24cqw;top:44.6cqw;display:flex;align-items:flex-end;gap:.4cqw;color:var(--accent);animation:hire-quote-hand 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .hand svg{width:4.4cqw;height:3.2cqw;margin-bottom:1cqw;transform:scaleX(-1) rotate(30deg)}
.v-hire-quote .hand span{font-family:var(--font-display);font-style:italic;font-size:2.2cqw;line-height:1.2;white-space:nowrap;transform:rotate(-3deg)}
.v-hire-quote .brand{position:absolute;right:6cqw;bottom:4.2cqw;display:flex;align-items:center;gap:.7cqw;animation:hire-quote-att 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-quote .brand svg{width:2cqw;height:2cqw;color:var(--accent)}
.v-hire-quote .brand em{font-family:var(--font-display);font-size:1.8cqw;color:color-mix(in srgb,var(--ink) 66%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-hire-quote .mast{left:8cqw;right:8cqw;top:6cqh}
  .v-hire-quote .pub{font-size:6.4cqw}
  .v-hire-quote .iss{display:none}
  .v-hire-quote .rule{left:8cqw;right:8cqw;top:11cqh}
  .v-hire-quote .arch{left:8cqw;top:14cqh;width:42cqw;height:60cqw;border-radius:21cqw 21cqw 1.6cqw 1.6cqw}
  .v-hire-quote .cap{left:54cqw;top:calc(14cqh + 52cqw);font-size:2.8cqw}
  .v-hire-quote .hand{left:54cqw;top:calc(14cqh + 30cqw)}
  .v-hire-quote .hand svg{width:9cqw;height:6.6cqw;margin-bottom:2cqw;transform:rotate(-20deg)}
  .v-hire-quote .hand span{font-size:5cqw;white-space:normal;width:34cqw}
  .v-hire-quote .qm{left:56cqw;top:13cqh;font-size:36cqw}
  .v-hire-quote .q{left:8cqw;width:84cqw;top:51cqh;font-size:8cqw}
  .v-hire-quote .att{left:8cqw;right:8cqw;top:auto;bottom:6cqh;gap:3cqw}
  .v-hire-quote .dash{width:7cqw;height:2px}
  .v-hire-quote .nm{font-size:6.4cqw}
  .v-hire-quote .rl{font-size:5.4cqw}
  .v-hire-quote .brand{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-quote .mast{top:5cqw}
  .v-hire-quote .pub{font-size:3.4cqw}
  .v-hire-quote .iss{font-size:1.8cqw}
  .v-hire-quote .rule{top:11cqw}
  .v-hire-quote .arch{top:15cqw;width:34cqw;height:48cqw;border-radius:17cqw 17cqw 1.4cqw 1.4cqw}
  .v-hire-quote .cap{top:65cqw;font-size:1.8cqw}
  .v-hire-quote .qm{left:44cqw;top:11cqw;font-size:22cqw}
  .v-hire-quote .q{left:45cqw;width:49cqw;top:27cqw;font-size:5.2cqw}
  .v-hire-quote .hand{left:30cqw;top:61cqw}
  .v-hire-quote .hand svg{width:6cqw;height:4.4cqw}
  .v-hire-quote .hand span{font-size:3.2cqw}
  .v-hire-quote .att{left:6cqw;top:auto;bottom:9cqw;gap:2cqw}
  .v-hire-quote .dash{width:5cqw}
  .v-hire-quote .nm{font-size:3.2cqw}
  .v-hire-quote .rl{font-size:2.3cqw}
  .v-hire-quote .brand{bottom:9.4cqw}
  .v-hire-quote .brand svg{width:3.2cqw;height:3.2cqw}
  .v-hire-quote .brand em{font-size:2.8cqw}
}
@keyframes hire-quote-mast{0%{opacity:0;transform:translateY(-1cqw)}10%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-quote-rule{0%,2%{transform:scaleX(0)}16%,100%{transform:scaleX(1)}}
@keyframes hire-quote-arch{0%,2%{clip-path:inset(100% 0 0 0)}20%,100%{clip-path:inset(0 0 0 0)}}
@keyframes hire-quote-kb{0%{transform:scale(1.12) translateY(1cqw)}100%{transform:scale(1.01) translateY(0)}}
@keyframes hire-quote-leak{0%,100%{opacity:.75;transform:translate(0,0)}50%{opacity:1;transform:translate(-1.2cqw,.8cqw)}}
@keyframes hire-quote-qm{0%,5%{opacity:0;transform:scale(.6) rotate(-8deg)}15%,100%{opacity:1;transform:scale(1) rotate(0deg)}}
@keyframes hire-quote-w{0%{opacity:0;transform:translateY(60%);clip-path:inset(0 -10% 60% -10%)}12%,100%{opacity:1;transform:none;clip-path:inset(-40% -20% -40% -20%)}}
@keyframes hire-quote-mark{0%,10%{background-size:0% .42em}20%,100%{background-size:100% .42em}}
@keyframes hire-quote-att{0%,24%{opacity:0;transform:translateY(1.2cqw)}34%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-quote-hand{0%,36%{clip-path:inset(0 100% 0 0)}47%,100%{clip-path:inset(-20% -5% -20% -5%)}}
`,
};

export const hireManifesto: SceneSpec = {
  id: "hire-manifesto",
  slug: "mg-hire-manifesto",
  name: "Values Manifesto Strike",
  kind: "scene",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "values-strike-and-rewrite-scroll",
  energy: "punchy",
  settle: 4.3,
  colors: { ink: "#1E0E08", accent: "#FFF4E8", secondary: "#FF8A63", paper: "#FF5B2E" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hiring", "values", "manifesto", "culture"],
  fields: [
    { key: "kicker", label: "Kicker", default: "What we believe", maxChars: 24, role: "kicker" },
    { key: "old", label: "Old value", default: "Busy.", maxChars: 12, role: "headline" },
    { key: "new", label: "New value", default: "Focused.", maxChars: 12, role: "headline" },
    { key: "cta", label: "Button", default: "Read the full memo", maxChars: 22, role: "cta" },
  ],
  html: `<div class="burst"></div>
<div class="lab"><span data-21st-slot="kicker">{{kicker}}</span><i></i><span class="cnt"><span class="roll"><span><b>01</b><b>02</b><b>03</b><b>04</b></span></span>&nbsp;/ 04</span></div>
<div class="vp"><div class="list">
  <div class="ln v1"><span class="no">01</span><span class="old"><span class="ow">Meetings.</span><i class="sk"></i></span><span class="nw">Memos.</span></div>
  <div class="ln v2"><span class="no">02</span><span class="old"><span class="ow">Perfect.</span><i class="sk"></i></span><span class="nw">Shipped.</span></div>
  <div class="ln v3"><span class="no">03</span><span class="old"><span class="ow">Heroes.</span><i class="sk"></i></span><span class="nw">Teams.</span></div>
  <div class="ln v4"><span class="no">04</span><span class="old"><span class="ow" data-21st-slot="old">{{old}}</span><i class="sk"></i></span><span class="nw" data-21st-slot="new">{{new}}</span></div>
</div></div>
<div class="idx"><u></u><span>01</span><span>02</span><span>03</span><span>04</span></div>
<div class="foot"><div class="brand"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span>the way we work</span></div><div class="memo"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></div>`,
  css: `
.v-hire-manifesto,.v-hire-manifesto *{box-sizing:border-box}
.v-hire-manifesto svg{display:block}
.v-hire-manifesto{color:var(--ink);font-family:var(--font-body)}
.v-hire-manifesto[data-backdrop="on"]{background:radial-gradient(70% 90% at 85% 40%,color-mix(in srgb,var(--paper) 85%,#fff) 0%,var(--paper) 50%,color-mix(in srgb,var(--paper) 90%,#000) 100%)}
.v-hire-manifesto[data-backdrop="off"] .burst{display:none}
.v-hire-manifesto .burst{position:absolute;left:58cqw;top:-20cqw;width:96cqw;height:96cqw;border-radius:50%;background:repeating-conic-gradient(from 0deg,color-mix(in srgb,var(--ink) 14%,transparent) 0deg 7.5deg,transparent 7.5deg 15deg);-webkit-mask-image:radial-gradient(circle,#000 0 22%,transparent 68%);mask-image:radial-gradient(circle,#000 0 22%,transparent 68%);animation:hire-manifesto-spin 6s linear infinite}
.v-hire-manifesto .lab{position:absolute;left:6cqw;top:5.4cqw;display:flex;align-items:center;gap:1.4cqw;font-size:1.5cqw;line-height:1.25;font-weight:600;animation:hire-manifesto-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .lab i{display:block;width:3cqw;height:1px;background:var(--ink)}
.v-hire-manifesto .cnt{display:flex;font:500 1.3cqw/1.2 var(--font-mono);opacity:.75}
.v-hire-manifesto .cnt .roll{display:block;height:1.2em;overflow:hidden;line-height:1.2em}
.v-hire-manifesto .cnt .roll span{display:block;animation:hire-manifesto-cnt 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .cnt .roll b{display:block;font-weight:500}
.v-hire-manifesto .vp{--step:15cqw;position:absolute;left:6cqw;right:14cqw;top:calc(27cqw - var(--step) / 2 - 2cqw);height:calc(var(--step) + 4cqw);overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(180deg,transparent,#000 14%,#000 86%,transparent)}
.v-hire-manifesto .list{position:absolute;left:0;right:0;top:2cqw;animation:hire-manifesto-list 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .ln{display:flex;align-items:center;gap:2.4cqw;height:var(--step);white-space:nowrap}
.v-hire-manifesto .no{font:500 1.3cqw/1 var(--font-mono);opacity:.6;align-self:flex-start;margin-top:3cqw}
.v-hire-manifesto .old{position:relative;font-family:var(--font-display);font-weight:700;font-size:8.4cqw;letter-spacing:-.045em;line-height:1.25}
.v-hire-manifesto .ow{display:block;line-height:1.25;padding-right:.06em}
.v-hire-manifesto .sk{position:absolute;left:-3%;right:-3%;top:54%;height:.11em;margin-top:-.055em;border-radius:.06em;background:var(--ink);transform-origin:0 50%}
.v-hire-manifesto .nw{font-family:"Instrument Serif",var(--font-display);font-style:italic;font-size:9.8cqw;letter-spacing:-.02em;line-height:1.3;padding-right:.1em;color:var(--accent)}
.v-hire-manifesto .v1 .sk{animation:hire-manifesto-sk1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .v2 .sk{animation:hire-manifesto-sk2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .v3 .sk{animation:hire-manifesto-sk3 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .v4 .sk{animation:hire-manifesto-sk4 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .v1 .ow{animation:hire-manifesto-w1 6s ease-out infinite}
.v-hire-manifesto .v2 .ow{animation:hire-manifesto-w2 6s ease-out infinite}
.v-hire-manifesto .v3 .ow{animation:hire-manifesto-w3 6s ease-out infinite}
.v-hire-manifesto .v4 .ow{animation:hire-manifesto-w4 6s ease-out infinite}
.v-hire-manifesto .v1 .nw{animation:hire-manifesto-n1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .v2 .nw{animation:hire-manifesto-n2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .v3 .nw{animation:hire-manifesto-n3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .v4 .nw{animation:hire-manifesto-n4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .idx{position:absolute;right:6cqw;top:19.6cqw;width:4.4cqw;animation:hire-manifesto-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .idx span{display:block;height:2.6cqw;margin-bottom:1.6cqw;line-height:2.6cqw;text-align:center;font:500 1.15cqw/2.6cqw var(--font-mono);opacity:.55}
.v-hire-manifesto .idx u{position:absolute;left:0;top:0;width:4.4cqw;height:2.6cqw;border-radius:2cqw;border:.2cqw solid var(--ink);animation:hire-manifesto-ring 6s cubic-bezier(.65,0,.35,1) infinite}
.v-hire-manifesto .foot{position:absolute;left:6cqw;right:6cqw;bottom:4.6cqw;display:flex;justify-content:space-between;align-items:center;animation:hire-manifesto-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-manifesto .brand{display:flex;align-items:center;gap:.8cqw}
.v-hire-manifesto .brand svg{width:2.4cqw;height:2.4cqw;color:var(--ink)}
.v-hire-manifesto .brand span{font-family:"Instrument Serif",var(--font-display);font-style:italic;font-size:1.8cqw;line-height:1.3;opacity:.8}
.v-hire-manifesto .memo{display:flex;align-items:center;gap:.8cqw;font-size:1.35cqw;line-height:1.25;font-weight:600;padding:.9cqw 1.6cqw;border-radius:4cqw;background:var(--ink);color:var(--paper);white-space:nowrap}
.v-hire-manifesto .memo svg{width:1.4cqw;height:1.4cqw;flex:none}
@container (max-aspect-ratio: 4/5){
  .v-hire-manifesto .burst{left:20cqw;top:-10cqh;width:140cqw;height:140cqw}
  .v-hire-manifesto .lab{left:8cqw;top:7cqh;font-size:5.4cqw;gap:3cqw}
  .v-hire-manifesto .lab i{width:8cqw}
  .v-hire-manifesto .cnt{font-size:4cqw}
  .v-hire-manifesto .vp{--step:48cqw;left:8cqw;right:8cqw;top:calc(46cqh - var(--step) / 2 - 2cqw)}
  .v-hire-manifesto .ln{flex-direction:column;align-items:flex-start;justify-content:center;gap:0}
  .v-hire-manifesto .no{font-size:4cqw;margin:0 0 1cqw}
  .v-hire-manifesto .old{font-size:15cqw}
  .v-hire-manifesto .nw{font-size:18cqw}
  .v-hire-manifesto .idx{display:none}
  .v-hire-manifesto .foot{left:8cqw;right:8cqw;bottom:6cqh;flex-direction:column;align-items:stretch;gap:4cqw}
  .v-hire-manifesto .brand svg{width:7cqw;height:7cqw}
  .v-hire-manifesto .brand span{font-size:6cqw}
  .v-hire-manifesto .memo{justify-content:center;font-size:5.6cqw;gap:2.4cqw;padding:4cqw;border-radius:10cqw}
  .v-hire-manifesto .memo svg{width:5.6cqw;height:5.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-manifesto .lab{left:7cqw;top:7cqw;font-size:2.6cqw;gap:2cqw}
  .v-hire-manifesto .cnt{font-size:2.2cqw}
  .v-hire-manifesto .vp{--step:31cqw;left:7cqw;right:16cqw;top:calc(48cqh - var(--step) / 2 - 2cqw)}
  .v-hire-manifesto .ln{flex-direction:column;align-items:flex-start;justify-content:center;gap:0}
  .v-hire-manifesto .no{font-size:2.2cqw;margin:0 0 .6cqw}
  .v-hire-manifesto .old{font-size:9.6cqw}
  .v-hire-manifesto .nw{font-size:11.6cqw}
  .v-hire-manifesto .idx{right:7cqw;top:34cqh;width:6.4cqw}
  .v-hire-manifesto .idx span{height:3.8cqw;line-height:3.8cqw;margin-bottom:2.4cqw;font-size:1.8cqw}
  .v-hire-manifesto .idx u{width:6.4cqw;height:3.8cqw;animation-name:hire-manifesto-rings}
  .v-hire-manifesto .foot{left:7cqw;right:7cqw;bottom:7cqw}
  .v-hire-manifesto .brand svg{width:3.6cqw;height:3.6cqw}
  .v-hire-manifesto .brand span{font-size:2.8cqw}
  .v-hire-manifesto .memo{font-size:2.4cqw;padding:1.5cqw 2.6cqw;gap:1.2cqw}
  .v-hire-manifesto .memo svg{width:2.4cqw;height:2.4cqw}
}
@keyframes hire-manifesto-spin{0%{transform:rotate(0deg)}100%{transform:rotate(15deg)}}
@keyframes hire-manifesto-fade{0%{opacity:0;transform:translateY(1cqw)}8%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-manifesto-list{0%{opacity:0;transform:translateY(calc(var(--step) * .4))}4%,18%{opacity:1;transform:translateY(0)}22%,36%{opacity:1;transform:translateY(calc(var(--step) * -1))}40%,54%{opacity:1;transform:translateY(calc(var(--step) * -2))}58%,100%{opacity:1;transform:translateY(calc(var(--step) * -3))}}
@keyframes hire-manifesto-cnt{0%,18%{transform:translateY(0)}22%,36%{transform:translateY(-1.2em)}40%,54%{transform:translateY(-2.4em)}58%,100%{transform:translateY(-3.6em)}}
@keyframes hire-manifesto-ring{0%,18%{transform:translateY(0)}22%,36%{transform:translateY(4.2cqw)}40%,54%{transform:translateY(8.4cqw)}58%,100%{transform:translateY(12.6cqw)}}
@keyframes hire-manifesto-rings{0%,18%{transform:translateY(0)}22%,36%{transform:translateY(6.2cqw)}40%,54%{transform:translateY(12.4cqw)}58%,100%{transform:translateY(18.6cqw)}}
@keyframes hire-manifesto-sk1{0%,6%{transform:scaleX(0)}10%,100%{transform:scaleX(1)}}
@keyframes hire-manifesto-sk2{0%,24%{transform:scaleX(0)}28%,100%{transform:scaleX(1)}}
@keyframes hire-manifesto-sk3{0%,42%{transform:scaleX(0)}45%,100%{transform:scaleX(1)}}
@keyframes hire-manifesto-sk4{0%,60%{transform:scaleX(0)}63%,100%{transform:scaleX(1)}}
@keyframes hire-manifesto-w1{0%,8%{opacity:1}11%,100%{opacity:.4}}
@keyframes hire-manifesto-w2{0%,26%{opacity:1}29%,100%{opacity:.4}}
@keyframes hire-manifesto-w3{0%,44%{opacity:1}46%,100%{opacity:.4}}
@keyframes hire-manifesto-w4{0%,62%{opacity:1}64%,100%{opacity:.55}}
@keyframes hire-manifesto-n1{0%,9%{opacity:0;clip-path:inset(-20% 100% -20% 0);transform:translateX(-1.5cqw)}14%,100%{opacity:1;clip-path:inset(-20% -10% -20% -2%);transform:translateX(0)}}
@keyframes hire-manifesto-n2{0%,27%{opacity:0;clip-path:inset(-20% 100% -20% 0);transform:translateX(-1.5cqw)}32%,100%{opacity:1;clip-path:inset(-20% -10% -20% -2%);transform:translateX(0)}}
@keyframes hire-manifesto-n3{0%,45%{opacity:0;clip-path:inset(-20% 100% -20% 0);transform:translateX(-1.5cqw)}49%,100%{opacity:1;clip-path:inset(-20% -10% -20% -2%);transform:translateX(0)}}
@keyframes hire-manifesto-n4{0%,63%{opacity:0;clip-path:inset(-20% 100% -20% 0);transform:translateX(-1.5cqw)}67%,100%{opacity:1;clip-path:inset(-20% -10% -20% -2%);transform:translateX(0)}}
`,
};

export const hireFounder: SceneSpec = {
  id: "hire-founder",
  slug: "mg-hire-founder",
  name: "Founder Video Note",
  kind: "scene",
  job: "testimonials",
  language: "product-ui",
  mechanic: "webcam-captions-and-voice-note",
  energy: "calm",
  settle: 3.4,
  requiresScreenshot: false,
  colors: { ink: "#1C1A22", accent: "#FF5B2E", secondary: "#96DCBE", paper: "#E8E2F0" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["hiring", "founder", "video", "captions"],
  fields: [
    { key: "title", label: "Title", default: "A note from our founder", maxChars: 32, role: "headline" },
    { key: "caption", label: "Spoken line", default: "We're not hiring to fill seats. We want people who'll change how we work.", maxChars: 80, role: "body" },
    { key: "name", label: "Name", default: "Lena Varga", maxChars: 22, role: "name" },
    { key: "role", label: "Role", default: "Co-founder & CEO", maxChars: 30, role: "caption" },
  ],
  html: `<div class="blob b1"></div><div class="blob b2"></div>
<div class="cam">
  <div class="room"><div class="lamp"></div><div class="shelf"></div><div class="plant"><i></i><i></i><i></i></div></div>
  <div class="person"><div class="torso"></div><div class="neck"></div><div class="collar"></div><div class="headg"><div class="hair"></div><div class="face"></div><div class="fringe"></div></div></div>
  <div class="rec"><i></i>rec 00:42</div>
  <div class="q">to candidates</div>
  <div class="cc"><span class="ccs" data-21st-slot="caption">{{caption|words}}</span></div>
  <div class="lt"><i></i><div><b data-21st-slot="name">{{name}}</b><span data-21st-slot="role">{{role}}</span></div></div>
</div>
<div class="note">
  <div class="k"><i></i>Message · 1:12</div>
  <div class="wave"><i style="--h:.4"></i><i style="--h:.7"></i><i style="--h:1"></i><i style="--h:.55"></i><i style="--h:.8"></i><i style="--h:.35"></i><i style="--h:.9"></i><i style="--h:.6"></i><i style="--h:1"></i><i style="--h:.45"></i><i style="--h:.75"></i><i style="--h:.5"></i><i style="--h:.95"></i><i style="--h:.4"></i><i style="--h:.7"></i><i style="--h:.85"></i><i style="--h:.5"></i><i style="--h:.65"></i><i style="--h:.3"></i><i style="--h:.55"></i><i style="--h:.4"></i><i style="--h:.25"></i></div>
  <div class="prog"><i></i></div>
  <div class="tm"><span>0:42</span><span>1:12</span></div>
  <div class="sig">with care, L.</div>
  <div class="btn"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>Watch the full note</div>
</div>
<div class="ttl" data-21st-slot="title">{{title|words}}</div>`,
  css: `
.v-hire-founder,.v-hire-founder *{box-sizing:border-box}
.v-hire-founder svg{display:block}
.v-hire-founder{color:var(--ink);font-family:var(--font-body)}
.v-hire-founder[data-backdrop="on"]{background:linear-gradient(135deg,color-mix(in srgb,var(--paper) 80%,var(--secondary)) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 85%,var(--accent)) 100%)}
.v-hire-founder[data-backdrop="off"] .blob{display:none}
.v-hire-founder[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-hire-founder .blob{position:absolute;border-radius:50%;filter:blur(4cqw)}
.v-hire-founder .b1{left:-10cqw;top:-14cqw;width:42cqw;height:42cqw;background:color-mix(in srgb,var(--secondary) 70%,transparent);animation:hire-founder-d1 6s ease-in-out infinite}
.v-hire-founder .b2{right:-12cqw;bottom:-18cqw;width:46cqw;height:46cqw;background:color-mix(in srgb,var(--accent) 45%,transparent);animation:hire-founder-d2 6s ease-in-out infinite}
.v-hire-founder .cam{position:absolute;left:5cqw;top:6cqw;width:56cqw;height:44cqw;border-radius:2cqw;overflow:hidden;background:#1E1714;box-shadow:0 .4cqw 1cqw rgba(28,26,34,.12),0 3cqw 7cqw rgba(28,26,34,.28);animation:hire-founder-cam 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-founder .room{position:absolute;inset:-4%;background:radial-gradient(45% 55% at 16% 22%,rgba(255,184,116,.6),transparent 70%),linear-gradient(180deg,#4D392E 0%,#2E231D 62%,#221A16 100%);animation:hire-founder-room 6s ease-in-out infinite}
.v-hire-founder .shelf{position:absolute;right:5%;top:10%;width:30%;height:52%;filter:blur(.3cqw);opacity:.8;background:linear-gradient(#5E4538,#5E4538) 0 31%/100% .5cqw no-repeat,linear-gradient(#5E4538,#5E4538) 0 64.5%/100% .5cqw no-repeat,linear-gradient(#5E4538,#5E4538) 0 98%/100% .5cqw no-repeat,repeating-linear-gradient(90deg,#C2563A 0 1.1cqw,#E3B26A 1.1cqw 1.9cqw,#3E6B73 1.9cqw 3.2cqw,#D9CDB8 3.2cqw 3.9cqw,#7A4E86 3.9cqw 5cqw,transparent 5cqw 5.6cqw) 0 4%/100% 26% no-repeat,repeating-linear-gradient(90deg,#3E6B73 0 1.4cqw,#D9CDB8 1.4cqw 2cqw,#C2563A 2cqw 3cqw,transparent 3cqw 3.5cqw,#E3B26A 3.5cqw 4.6cqw) 0 37%/100% 26% no-repeat,repeating-linear-gradient(90deg,#D9CDB8 0 .8cqw,#7A4E86 .8cqw 2cqw,#E3B26A 2cqw 2.8cqw,#3E6B73 2.8cqw 4cqw,transparent 4cqw 4.8cqw) 0 71%/100% 26% no-repeat}
.v-hire-founder .lamp{position:absolute;left:6%;top:8%;width:16%;height:22%;border-radius:50%;background:radial-gradient(circle,rgba(255,214,150,.95) 0 18%,rgba(255,184,116,.35) 40%,transparent 70%);filter:blur(.2cqw)}
.v-hire-founder .plant{position:absolute;left:2%;bottom:6%;width:18%;height:46%;filter:blur(.45cqw);opacity:.85}
.v-hire-founder .plant i{position:absolute;bottom:0;width:36%;height:80%;border-radius:100% 0;background:#2E4A33;transform-origin:50% 100%}
.v-hire-founder .plant i:nth-child(1){left:30%}
.v-hire-founder .plant i:nth-child(2){left:6%;height:60%;transform:rotate(-30deg)}
.v-hire-founder .plant i:nth-child(3){left:54%;height:64%;transform:rotate(26deg)}
.v-hire-founder .person{position:absolute;left:25%;bottom:0;width:48%;height:84%;transform-origin:50% 100%;animation:hire-founder-talk 6s ease-in-out infinite}
.v-hire-founder .torso{position:absolute;left:0;right:0;bottom:-4%;height:42%;border-radius:46% 46% 0 0/70% 70% 0 0;background:linear-gradient(170deg,color-mix(in srgb,var(--accent) 30%,#43546B) 0%,#27313F 70%);box-shadow:inset 1cqw .6cqw 1.4cqw rgba(255,184,116,.28)}
.v-hire-founder .collar{position:absolute;left:39%;width:22%;bottom:30%;height:9%;border-radius:0 0 50% 50%;background:#E9E2D6}
.v-hire-founder .neck{position:absolute;left:41.5%;width:17%;bottom:34%;height:14%;border-radius:0 0 40% 40%;background:linear-gradient(90deg,#D49A76,#9C5E44)}
.v-hire-founder .headg{position:absolute;left:24%;width:52%;bottom:40%;height:58%;transform-origin:50% 90%;animation:hire-founder-nod 1.5s ease-in-out infinite}
.v-hire-founder .hair{position:absolute;left:0;right:0;top:2%;bottom:6%;border-radius:50% 50% 30% 30%/56% 56% 44% 44%;background:linear-gradient(160deg,#3A2318,#160D09)}
.v-hire-founder .face{position:absolute;left:12%;right:12%;top:16%;bottom:2%;border-radius:46% 46% 44% 44%/44% 44% 56% 56%;background:radial-gradient(60% 55% at 30% 34%,#EDBA94 0%,#CD8E6A 45%,#91573F 100%)}
.v-hire-founder .fringe{position:absolute;left:8%;right:30%;top:6%;height:30%;border-radius:60% 40% 70% 10%/80% 60% 40% 20%;background:linear-gradient(160deg,#3A2318,#1C110C)}
.v-hire-founder .rec{position:absolute;left:2cqw;top:2cqw;display:flex;align-items:center;gap:.7cqw;padding:.5cqw 1cqw;border-radius:3cqw;background:rgba(10,8,8,.5);font:500 1.05cqw/1 var(--font-mono);color:#fff}
.v-hire-founder .rec i{display:block;width:.9cqw;height:.9cqw;border-radius:50%;background:#FF4A3D;animation:hire-founder-blink 1s steps(2,jump-none) infinite}
.v-hire-founder .q{position:absolute;right:2cqw;top:2cqw;padding:.5cqw 1cqw;border-radius:3cqw;background:rgba(10,8,8,.5);font-size:1.05cqw;color:#fff}
.v-hire-founder .cc{position:absolute;left:4cqw;right:4cqw;bottom:9.6cqw;text-align:center;line-height:1.55}
.v-hire-founder .ccs{padding:.3cqw .9cqw;border-radius:.5cqw;background:rgba(10,8,8,.66);color:#fff;font-size:1.85cqw;font-weight:500;letter-spacing:-.01em;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.v-hire-founder .ccs .w{--delay:calc(.6s + var(--i) * .12s);animation:hire-founder-word 6s linear infinite}
.v-hire-founder .lt{position:absolute;left:2.4cqw;bottom:2.4cqw;display:flex;align-items:stretch;border-radius:1cqw;overflow:hidden;background:#fff;color:#1C1A22;box-shadow:0 1cqw 2.4cqw rgba(0,0,0,.3);animation:hire-founder-lt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-founder .lt i{display:block;width:.6cqw;flex:none;background:var(--accent)}
.v-hire-founder .lt div{padding:.8cqw 1.6cqw .9cqw 1.3cqw}
.v-hire-founder .lt b{display:block;font-size:1.7cqw;line-height:1.25;font-weight:700;letter-spacing:-.02em}
.v-hire-founder .lt span{display:block;font-size:1.15cqw;line-height:1.3;color:#5A5562}
.v-hire-founder .note{position:absolute;left:64cqw;top:6cqw;width:31cqw;height:44cqw;display:flex;flex-direction:column;padding:2.6cqw;border-radius:2cqw;background:color-mix(in srgb,var(--paper) 70%,transparent);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);box-shadow:0 2cqw 5cqw rgba(28,26,34,.12);animation:hire-founder-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-founder .k{display:flex;align-items:center;gap:.6cqw;font:500 1.05cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-hire-founder .k i{display:block;width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent)}
.v-hire-founder .ttl{position:absolute;left:66.6cqw;right:7.6cqw;top:10.6cqw;font-family:var(--font-display);font-size:3.3cqw;line-height:1.2;letter-spacing:-.01em;animation:hire-founder-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-founder .ttl .w{display:inline-block;line-height:1.34}
.v-hire-founder .ttl .w:nth-last-child(-n+2){font-style:italic;padding-right:.06em;color:color-mix(in srgb,var(--accent) 70%,var(--ink))}
.v-hire-founder .wave{margin-top:11.4cqw;display:flex;align-items:center;gap:.42cqw;height:4cqw}
.v-hire-founder .wave i{display:block;flex:1;max-width:.5cqw;height:calc(var(--h) * 4cqw);border-radius:.3cqw;background:var(--ink)}
.v-hire-founder .wave i:nth-child(3n+1){animation:hire-founder-wa 1s ease-in-out infinite}
.v-hire-founder .wave i:nth-child(3n+2){animation:hire-founder-wb .75s ease-in-out infinite}
.v-hire-founder .wave i:nth-child(3n){animation:hire-founder-wc 1.5s ease-in-out infinite}
.v-hire-founder .prog{position:relative;margin-top:1.6cqw;height:.45cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 14%,transparent)}
.v-hire-founder .prog i{position:absolute;inset:0;border-radius:1cqw;background:var(--accent);transform-origin:0 50%;animation:hire-founder-prog 6s linear infinite}
.v-hire-founder .tm{display:flex;justify-content:space-between;margin-top:.7cqw;font:500 1cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-hire-founder .sig{margin-top:1.4cqw;font-family:var(--font-display);font-style:italic;font-size:3cqw;line-height:1.2;animation:hire-founder-sig 6s cubic-bezier(.45,0,.3,1) infinite}
.v-hire-founder .btn{margin-top:auto;display:flex;align-items:center;justify-content:center;gap:.8cqw;height:4.4cqw;border-radius:3cqw;background:var(--ink);color:var(--paper);font-size:1.3cqw;font-weight:600}
.v-hire-founder .btn svg{width:1.3cqw;height:1.3cqw}
@container (max-aspect-ratio: 4/5){
  .v-hire-founder .ttl{left:8cqw;right:8cqw;top:6cqh;font-size:11cqw}
  .v-hire-founder .cam{left:6cqw;top:22cqh;width:88cqw;height:50cqh;border-radius:4cqw}
  .v-hire-founder .person{left:14%;width:72%;height:62%}
  .v-hire-founder .rec,.v-hire-founder .q{top:3cqw;font-size:2.8cqw;padding:1.2cqw 2.4cqw;gap:1.4cqw}
  .v-hire-founder .rec{left:3cqw}
  .v-hire-founder .q{right:3cqw}
  .v-hire-founder .rec i{width:2cqw;height:2cqw}
  .v-hire-founder .cc{left:4cqw;right:4cqw;bottom:auto;top:12cqw}
  .v-hire-founder .ccs{font-size:5.4cqw;padding:.6cqw 2cqw;border-radius:1cqw}
  .v-hire-founder .lt{left:4cqw;bottom:4cqw;border-radius:2cqw}
  .v-hire-founder .lt i{width:1.4cqw}
  .v-hire-founder .lt div{padding:2cqw 3.6cqw 2.2cqw 3cqw}
  .v-hire-founder .lt b{font-size:6.4cqw}
  .v-hire-founder .lt span{font-size:5.4cqw}
  .v-hire-founder .note{left:6cqw;top:75cqh;width:88cqw;height:19cqh;padding:3.4cqw 4cqw;border-radius:4cqw;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto 1fr auto;column-gap:4cqw}
  .v-hire-founder .k{grid-column:1/-1;font-size:3cqw;gap:1.6cqw}
  .v-hire-founder .k i{width:2cqw;height:2cqw}
  .v-hire-founder .wave{margin-top:2cqw;height:10cqw;gap:1cqw;align-self:center}
  .v-hire-founder .wave i{max-width:1.2cqw;height:calc(var(--h) * 10cqw)}
  .v-hire-founder .sig{grid-column:2;grid-row:2;align-self:center;margin:2cqw 0 0;font-size:7cqw}
  .v-hire-founder .prog,.v-hire-founder .tm{display:none}
  .v-hire-founder .btn{grid-column:1/-1;height:10cqw;font-size:3.6cqw;gap:2cqw;border-radius:6cqw}
  .v-hire-founder .btn svg{width:3.6cqw;height:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-founder .ttl{left:6cqw;right:6cqw;top:6cqh;font-size:6.4cqw}
  .v-hire-founder .cam{left:6cqw;top:20cqh;width:56cqw;height:72cqh;border-radius:2.6cqw}
  .v-hire-founder .person{left:12%;width:76%;height:66%}
  .v-hire-founder .rec,.v-hire-founder .q{font-size:1.7cqw}
  .v-hire-founder .cc{left:3cqw;right:3cqw;bottom:auto;top:9cqw}
  .v-hire-founder .ccs{font-size:2.8cqw}
  .v-hire-founder .lt b{font-size:2.8cqw}
  .v-hire-founder .lt span{font-size:2cqw}
  .v-hire-founder .note{left:65cqw;top:20cqh;width:29cqw;height:72cqh;padding:2.6cqw}
  .v-hire-founder .k{font-size:1.6cqw}
  .v-hire-founder .wave{margin-top:4cqw;height:12cqw}
  .v-hire-founder .wave i{height:calc(var(--h) * 12cqw)}
  .v-hire-founder .tm{font-size:1.5cqw}
  .v-hire-founder .sig{font-size:4.4cqw;margin-top:3cqw}
  .v-hire-founder .btn{height:7cqw;font-size:1.9cqw}
  .v-hire-founder .btn svg{width:1.9cqw;height:1.9cqw}
}
@keyframes hire-founder-d1{0%,100%{transform:translate(0,0)}50%{transform:translate(4cqw,3cqw)}}
@keyframes hire-founder-d2{0%,100%{transform:translate(0,0)}50%{transform:translate(-4cqw,-2cqw)}}
@keyframes hire-founder-cam{0%{opacity:0;transform:scale(.94);filter:blur(1cqw)}14%,100%{opacity:1;transform:scale(1);filter:blur(0)}}
@keyframes hire-founder-room{0%,100%{transform:translate(0,0) scale(1.02)}50%{transform:translate(-.6cqw,.3cqw) scale(1.04)}}
@keyframes hire-founder-talk{0%,100%{transform:translateY(0) rotate(0deg)}25%{transform:translateY(-.3cqw) rotate(-.6deg)}50%{transform:translateY(0) rotate(.5deg)}75%{transform:translateY(-.2cqw) rotate(-.3deg)}}
@keyframes hire-founder-nod{0%,100%{transform:rotate(0deg)}30%{transform:rotate(-1.4deg)}65%{transform:rotate(1deg)}}
@keyframes hire-founder-blink{0%{opacity:1}100%{opacity:.2}}
@keyframes hire-founder-word{0%{opacity:.15}3%,100%{opacity:1}}
@keyframes hire-founder-lt{0%,8%{opacity:0;transform:translateX(-4cqw)}18%,100%{opacity:1;transform:translateX(0)}}
@keyframes hire-founder-note{0%,6%{opacity:0;transform:translateX(3cqw)}20%,100%{opacity:1;transform:translateX(0)}}
@keyframes hire-founder-wa{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
@keyframes hire-founder-wb{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.4)}}
@keyframes hire-founder-wc{0%,100%{transform:scaleY(.6)}30%{transform:scaleY(.25)}70%{transform:scaleY(1)}}
@keyframes hire-founder-prog{0%{transform:scaleX(.12)}100%{transform:scaleX(.62)}}
@keyframes hire-founder-sig{0%,28%{clip-path:inset(-20% 100% -20% 0)}44%,100%{clip-path:inset(-20% -5% -20% 0)}}
`,
};

export const hireRolescta: SceneSpec = {
  id: "hire-rolescta",
  slug: "mg-hire-rolescta",
  name: "Open Roles End Card",
  kind: "scene",
  job: "cta",
  language: "kinetic-poster",
  mechanic: "role-marquee-behind-cta",
  energy: "default",
  settle: 2.9,
  colors: { ink: "#F2F2EE", accent: "#CFFF45", secondary: "#FF5B2E", paper: "#0B0B0D" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["hiring", "end-card", "roles", "marquee"],
  fields: [
    { key: "brand", label: "Company", default: "Wayfold", maxChars: 18, role: "label" },
    { key: "headline", label: "Headline", default: "12 roles open.", maxChars: 24, role: "headline" },
    { key: "sub", label: "Subline", default: "One of them has your name on it.", maxChars: 44, role: "body" },
    { key: "cta", label: "Button", default: "Apply at wayfold.jobs", maxChars: 26, role: "cta" },
  ],
  html: `<div class="field">
<div class="row"><div class="trk"><div class="grp"><span class="p">Senior Product Designer <em>· Remote</em></span><span class="p hot">Staff Backend Engineer <em>· Berlin</em><b>new</b></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Data Scientist <em>· Remote</em></span></div><div class="grp"><span class="p">Senior Product Designer <em>· Remote</em></span><span class="p hot">Staff Backend Engineer <em>· Berlin</em><b>new</b></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Data Scientist <em>· Remote</em></span></div></div></div>
<div class="row rev"><div class="trk"><div class="grp"><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Design Engineer <em>· Lisbon</em></span><span class="p hot">Mobile Engineer <em>· Remote</em><b>new</b></span><span class="p">Head of People <em>· Lisbon</em></span></div><div class="grp"><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Design Engineer <em>· Lisbon</em></span><span class="p hot">Mobile Engineer <em>· Remote</em><b>new</b></span><span class="p">Head of People <em>· Lisbon</em></span></div></div></div>
<div class="row"><div class="trk"><div class="grp"><span class="p">Growth Marketer <em>· Berlin</em></span><span class="p">Platform Engineer <em>· Remote</em></span><span class="p">Customer Success Lead <em>· Lisbon</em></span><span class="p hot">Recruiter <em>· Berlin</em><b>new</b></span></div><div class="grp"><span class="p">Growth Marketer <em>· Berlin</em></span><span class="p">Platform Engineer <em>· Remote</em></span><span class="p">Customer Success Lead <em>· Lisbon</em></span><span class="p hot">Recruiter <em>· Berlin</em><b>new</b></span></div></div></div>
<div class="row rev"><div class="trk"><div class="grp"><span class="p">Data Scientist <em>· Remote</em></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Senior Product Designer <em>· Remote</em></span></div><div class="grp"><span class="p">Data Scientist <em>· Remote</em></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Senior Product Designer <em>· Remote</em></span></div></div></div>
<div class="row"><div class="trk"><div class="grp"><span class="p">Head of People <em>· Lisbon</em></span><span class="p hot">Design Engineer <em>· Lisbon</em><b>new</b></span><span class="p">Platform Engineer <em>· Remote</em></span><span class="p">Growth Marketer <em>· Berlin</em></span></div><div class="grp"><span class="p">Head of People <em>· Lisbon</em></span><span class="p hot">Design Engineer <em>· Lisbon</em><b>new</b></span><span class="p">Platform Engineer <em>· Remote</em></span><span class="p">Growth Marketer <em>· Berlin</em></span></div></div></div>
<div class="row rev"><div class="trk"><div class="grp"><span class="p">Customer Success Lead <em>· Lisbon</em></span><span class="p">Recruiter <em>· Berlin</em></span><span class="p">Mobile Engineer <em>· Remote</em></span><span class="p">Staff Backend Engineer <em>· Berlin</em></span></div><div class="grp"><span class="p">Customer Success Lead <em>· Lisbon</em></span><span class="p">Recruiter <em>· Berlin</em></span><span class="p">Mobile Engineer <em>· Remote</em></span><span class="p">Staff Backend Engineer <em>· Berlin</em></span></div></div></div>
<div class="row"><div class="trk"><div class="grp"><span class="p">Growth Marketer <em>· Berlin</em></span><span class="p">Platform Engineer <em>· Remote</em></span><span class="p">Customer Success Lead <em>· Lisbon</em></span><span class="p hot">Recruiter <em>· Berlin</em><b>new</b></span></div><div class="grp"><span class="p">Growth Marketer <em>· Berlin</em></span><span class="p">Platform Engineer <em>· Remote</em></span><span class="p">Customer Success Lead <em>· Lisbon</em></span><span class="p hot">Recruiter <em>· Berlin</em><b>new</b></span></div></div></div>
<div class="row"><div class="trk"><div class="grp"><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Design Engineer <em>· Lisbon</em></span><span class="p hot">Mobile Engineer <em>· Remote</em><b>new</b></span><span class="p">Head of People <em>· Lisbon</em></span></div><div class="grp"><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Design Engineer <em>· Lisbon</em></span><span class="p hot">Mobile Engineer <em>· Remote</em><b>new</b></span><span class="p">Head of People <em>· Lisbon</em></span></div></div></div>
<div class="row rev"><div class="trk"><div class="grp"><span class="p">Senior Product Designer <em>· Remote</em></span><span class="p hot">Staff Backend Engineer <em>· Berlin</em><b>new</b></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Data Scientist <em>· Remote</em></span></div><div class="grp"><span class="p">Senior Product Designer <em>· Remote</em></span><span class="p hot">Staff Backend Engineer <em>· Berlin</em><b>new</b></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Data Scientist <em>· Remote</em></span></div></div></div>
<div class="row"><div class="trk"><div class="grp"><span class="p">Data Scientist <em>· Remote</em></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Senior Product Designer <em>· Remote</em></span></div><div class="grp"><span class="p">Data Scientist <em>· Remote</em></span><span class="p">Brand Writer <em>· Lisbon</em></span><span class="p">Engineering Manager <em>· Berlin</em></span><span class="p">Senior Product Designer <em>· Remote</em></span></div></div></div>
</div>
<div class="vig"></div>
<div class="cta">
  <div class="brand"><svg viewBox="0 0 32 32"><path d="M3 7h9l6 9-6 9H3l6-9z" fill="currentColor"/><path d="M14 7h9l6 9-6 9h-9l6-9z" fill="currentColor" opacity=".5"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
  <div class="big" data-21st-slot="headline">{{headline|words}}</div>
  <div class="sub" data-21st-slot="sub">{{sub}}</div>
  <div class="gowrap"><div class="pulse"></div><div class="go"><span data-21st-slot="cta">{{cta}}</span><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></i></div></div>
  <div class="fine">Lisbon · Berlin · Remote in 23 countries</div>
</div>`,
  css: `
.v-hire-rolescta,.v-hire-rolescta *{box-sizing:border-box}
.v-hire-rolescta svg{display:block}
.v-hire-rolescta{color:var(--ink);font-family:var(--font-body)}
.v-hire-rolescta[data-backdrop="on"]{background:var(--paper)}
.v-hire-rolescta[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-hire-rolescta .field{position:absolute;left:-16cqw;right:-16cqw;top:-10cqw;bottom:-10cqw;display:flex;flex-direction:column;justify-content:center;gap:2.2cqw;animation:hire-rolescta-field 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-rolescta .row{display:block}
.v-hire-rolescta .row:nth-child(n+7){display:none}
.v-hire-rolescta .trk{display:flex;width:max-content;animation:hire-rolescta-l 6s linear infinite}
.v-hire-rolescta .rev .trk{animation:hire-rolescta-r 6s linear infinite}
.v-hire-rolescta .grp{display:flex;gap:1.6cqw;padding-right:1.6cqw}
.v-hire-rolescta .p{display:flex;align-items:center;gap:1cqw;white-space:nowrap;font-size:1.9cqw;font-weight:500;padding:1.3cqw 2.4cqw;border-radius:6cqw;background:color-mix(in srgb,var(--ink) 6%,var(--paper));border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);color:color-mix(in srgb,var(--ink) 82%,transparent)}
.v-hire-rolescta .p em{font-style:normal;color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-hire-rolescta .p b{font-size:1.05cqw;font-weight:700;padding:.3cqw .7cqw;border-radius:2cqw;background:var(--accent);color:var(--paper)}
.v-hire-rolescta .p.hot{border-color:color-mix(in srgb,var(--accent) 45%,transparent);color:var(--ink)}
.v-hire-rolescta .vig{position:absolute;inset:0;background:radial-gradient(58% 64% at 50% 50%,color-mix(in srgb,var(--paper) 97%,transparent) 0%,color-mix(in srgb,var(--paper) 92%,transparent) 42%,color-mix(in srgb,var(--paper) 45%,transparent) 78%,color-mix(in srgb,var(--paper) 20%,transparent) 100%)}
.v-hire-rolescta .cta{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.v-hire-rolescta .brand{display:flex;align-items:center;gap:.8cqw;font-weight:600;font-size:1.7cqw;line-height:1.25;letter-spacing:-.02em;animation:hire-rolescta-a 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-rolescta .brand svg{width:2.5cqw;height:2.5cqw;color:var(--secondary);flex:none}
.v-hire-rolescta .big{margin-top:1.6cqw;max-width:80cqw;font-family:var(--font-display);font-weight:700;font-size:6.6cqw;line-height:1.2;letter-spacing:-.045em;animation:hire-rolescta-b 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-rolescta .big .w{display:inline-block;line-height:1.25}
.v-hire-rolescta .big .w:first-child{color:var(--accent);text-shadow:0 0 3cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-hire-rolescta .sub{margin-top:.8cqw;font-family:"Instrument Serif",var(--font-display);font-style:italic;font-size:2.6cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 75%,transparent);animation:hire-rolescta-c 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-rolescta .gowrap{position:relative;margin-top:2.6cqw;animation:hire-rolescta-d 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-rolescta .go{position:relative;overflow:hidden;display:flex;align-items:center;gap:1.4cqw;padding:.8cqw .8cqw .8cqw 2.6cqw;border-radius:5cqw;background:var(--accent);color:var(--paper);font-size:1.75cqw;line-height:1.25;font-weight:600;white-space:nowrap}
.v-hire-rolescta .go i{flex:none;display:grid;place-items:center;width:3.6cqw;height:3.6cqw;border-radius:50%;background:var(--paper);color:var(--accent)}
.v-hire-rolescta .go i svg{width:1.7cqw;height:1.7cqw}
.v-hire-rolescta .pulse{position:absolute;inset:0;border-radius:5cqw;border:.2cqw solid var(--accent);animation:hire-rolescta-pulse 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-hire-rolescta .fine{margin-top:1.8cqw;font:500 1.1cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent);animation:hire-rolescta-d 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-hire-rolescta .row:nth-child(n+7){display:block}
  .v-hire-rolescta .field{gap:4cqw}
  .v-hire-rolescta .grp{gap:3cqw;padding-right:3cqw}
  .v-hire-rolescta .p{font-size:4cqw;padding:2.6cqw 4.6cqw;gap:2cqw}
  .v-hire-rolescta .p b{font-size:2.4cqw;padding:.6cqw 1.4cqw}
  .v-hire-rolescta .vig{background:radial-gradient(80% 60% at 50% 50%,color-mix(in srgb,var(--paper) 97%,transparent) 0%,color-mix(in srgb,var(--paper) 90%,transparent) 50%,color-mix(in srgb,var(--paper) 45%,transparent) 85%,color-mix(in srgb,var(--paper) 25%,transparent) 100%)}
  .v-hire-rolescta .cta{padding:7cqh 8cqw}
  .v-hire-rolescta .brand{font-size:6cqw;gap:2.4cqw;padding:2cqw 4cqw;border-radius:8cqw;background:var(--paper)}
  .v-hire-rolescta .brand svg{width:8cqw;height:8cqw}
  .v-hire-rolescta .big{margin-top:auto;max-width:none;font-size:15cqw}
  .v-hire-rolescta .sub{font-size:7cqw;margin-top:2cqw}
  .v-hire-rolescta .gowrap{margin-top:auto;align-self:stretch}
  .v-hire-rolescta .go{justify-content:space-between;font-size:5.6cqw;padding:2cqw 2cqw 2cqw 6cqw;border-radius:10cqw}
  .v-hire-rolescta .pulse{border-radius:10cqw}
  .v-hire-rolescta .go i{width:11cqw;height:11cqw}
  .v-hire-rolescta .go i svg{width:5cqw;height:5cqw}
  .v-hire-rolescta .fine{font-size:3cqw;margin-top:3cqw;padding:1cqw 2cqw;background:var(--paper);border-radius:4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-hire-rolescta .row:nth-child(n+7):nth-child(-n+8){display:block}
  .v-hire-rolescta .field{gap:3cqw}
  .v-hire-rolescta .p{font-size:2.8cqw;padding:1.9cqw 3.4cqw}
  .v-hire-rolescta .p b{font-size:1.6cqw}
  .v-hire-rolescta .brand{font-size:3cqw;gap:1.4cqw}
  .v-hire-rolescta .brand svg{width:4.4cqw;height:4.4cqw}
  .v-hire-rolescta .big{margin-top:3cqw;font-size:10.4cqw}
  .v-hire-rolescta .sub{font-size:4.2cqw}
  .v-hire-rolescta .gowrap{margin-top:4.4cqw}
  .v-hire-rolescta .go{font-size:2.9cqw;gap:2cqw;padding:1.3cqw 1.3cqw 1.3cqw 4cqw;border-radius:8cqw}
  .v-hire-rolescta .pulse{border-radius:8cqw}
  .v-hire-rolescta .go i{width:6cqw;height:6cqw}
  .v-hire-rolescta .go i svg{width:2.8cqw;height:2.8cqw}
  .v-hire-rolescta .fine{font-size:1.9cqw;margin-top:3cqw}
}
@keyframes hire-rolescta-field{0%{opacity:0;transform:rotate(-7deg) scale(1.1)}14%,100%{opacity:1;transform:rotate(-7deg) scale(1)}}
@keyframes hire-rolescta-l{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes hire-rolescta-r{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
@keyframes hire-rolescta-a{0%,12%{opacity:0;transform:translateY(1.5cqw)}22%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-rolescta-b{0%,16%{opacity:0;transform:scale(1.12);filter:blur(1cqw)}28%,100%{opacity:1;transform:scale(1);filter:blur(0)}}
@keyframes hire-rolescta-c{0%,22%{opacity:0;transform:translateY(1.5cqw)}32%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-rolescta-d{0%,27%{opacity:0;transform:translateY(1.5cqw)}38%,100%{opacity:1;transform:translateY(0)}}
@keyframes hire-rolescta-pulse{0%{opacity:.7;transform:scale(1)}80%,100%{opacity:0;transform:scale(1.18,1.5)}}
`,
};

export const HIRING_SCENES: SceneSpec[] = [hireMosaic, hireKinetic, hireJobcard, hireTeamwall, hirePerks, hireProcess, hireQuote, hireManifesto, hireFounder, hireRolescta];
