// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const pplWebcamBubble: SceneSpec = {
  id: "ppl-webcam-bubble",
  slug: "mg-ppl-webcam-bubble",
  name: "Webcam Bubble Walkthrough",
  kind: "element",
  job: "product-ui",
  language: "product-ui",
  mechanic: "webcam-bubble-dodges-cursor",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#1F1C17", accent: "#3D63FF", secondary: "#FF8A5C", paper: "#FBFAF7" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["webcam", "presenter", "walkthrough"],
  fields: [
    { key: "kicker", label: "Recording label", default: "Live walkthrough", maxChars: 24, role: "kicker" },
    { key: "name", label: "Presenter name", default: "Maya Okafor", maxChars: 22, role: "name" },
    { key: "role", label: "Presenter role", default: "Head of Product, Lumen", maxChars: 30, role: "label" },
  ],
  html: `<div class="xfr"><div class="top"><span class="mk"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span>Launch /<b>Announcement</b><span class="gap"></span><span class="avs"><i></i><i></i></span><span class="ghost">Share</span><span class="pub">Publish</span></div>
<div class="side"><span class="cap">Contents</span><span class="on">Introduction</span><span>What is new</span><span>AI suggestions</span><span>Pricing</span><span>Availability</span></div>
<div class="doc">
<div class="k">Draft · 1,240 words</div>
<h5>Introducing Lumen 2.0</h5>
<div class="by"><i></i>Maya Okafor · Oct 14</div>
<p><i class="hl"></i><span>Lumen 2.0 turns every doc into a workspace that thinks with you. Ask anything and get answers from your own notes.</span></p>
<p><span>We rebuilt search, added live AI suggestions, and made sharing instant for the whole team.</span></p>
<s style="width:100%"></s><s style="width:92%"></s><s style="width:96%"></s><s style="width:60%"></s>
</div>
<div class="tone">Tone<b>Confident, clear</b><u></u></div>
<div class="ai">
<div class="h"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg>Suggestions<em>2</em></div>
<div class="card c1"><b>Add a pricing line</b><span>Mention the free plan in the second paragraph.</span><div class="acts"><span class="dis">Dismiss</span><span class="apply"><span>Apply</span></span></div></div>
<div class="card c2"><b>Tighten the intro</b><span>Cut 18 words and keep the hook up front.</span><div class="acts"><span class="dis">Dismiss</span><span class="apply"><i class="ok"></i><span class="t1">Apply</span><span class="t2"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7"/></svg>Done</span></span></div><i class="hov"></i></div>
</div>
<div class="cur"><i class="rip"></i><svg viewBox="0 0 24 24"><path d="M4 2.5l15 9.2-6.6 1.4L9.3 20z" fill="#1f1c17" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg></div></div>
<div class="bub">
<i class="ring"></i><i class="ring r2"></i>
<div class="cam">
<div class="ft"><i style="left:8%;top:12%;width:30%;height:30%"></i><i style="left:66%;top:8%;width:20%;height:20%"></i></div>
<div class="bust"><i class="sh"></i><i class="nk"></i><span class="hg"><i class="hr"></i><i class="hd"></i></span></div>
<div class="grain"></div>
</div>
<div class="tag"><b data-21st-slot="name">{{name}}</b><span data-21st-slot="role">{{role}}</span></div>
<span class="mic"><i></i><i></i><i></i></span>
</div>
<div class="rec" data-21st-slot="kicker"><i></i>{{kicker}}</div>`,
  css: `
.v-ppl-webcam-bubble{color:var(--ink);font-family:var(--font-body)}
.v-ppl-webcam-bubble[data-backdrop="on"]{background:var(--paper)}
.v-ppl-webcam-bubble[data-backdrop="off"] .xfr{display:none}
.v-ppl-webcam-bubble *,.v-ppl-webcam-bubble *::before,.v-ppl-webcam-bubble *::after{box-sizing:border-box}
.v-ppl-webcam-bubble .grain{position:absolute;left:-30%;top:-30%;width:160%;height:160%;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23g)'/></svg>");background-size:24cqw 24cqw;mix-blend-mode:overlay;opacity:.34;pointer-events:none}
.v-ppl-webcam-bubble .bust{position:absolute;left:50%;bottom:0;width:3.4em;height:3.6em;margin-left:-1.7em}
.v-ppl-webcam-bubble .bust .sh{position:absolute;left:-.12em;right:-.12em;bottom:-.5em;height:2.05em;border-radius:1.3em 1.3em .2em .2em/.92em .92em .2em .2em;background:var(--shirt);box-shadow:inset -.08em .06em .14em var(--rim),inset .12em 0 .32em rgba(0,0,0,.28)}
.v-ppl-webcam-bubble .bust .sh::before{content:"";position:absolute;left:50%;top:-.02em;width:.64em;height:.42em;margin-left:-.32em;background:var(--neck);clip-path:polygon(0 0,100% 0,50% 100%)}
.v-ppl-webcam-bubble .bust .nk{position:absolute;left:50%;bottom:1.3em;width:.5em;height:.78em;margin-left:-.25em;border-radius:.22em;background:var(--neck)}
.v-ppl-webcam-bubble .bust .hg{position:absolute;left:50%;bottom:1.84em;width:1.12em;height:1.66em;margin-left:-.56em;transform-origin:50% 100%}
.v-ppl-webcam-bubble .bust .hd{position:absolute;left:0;right:0;bottom:0;height:1.46em;border-radius:50% 50% 47% 47%/56% 56% 44% 44%;background:radial-gradient(120% 70% at 24% -12%,var(--fringe) 0 40%,rgba(0,0,0,0) 68%),var(--skin);box-shadow:inset -.07em 0 .1em var(--rim)}
.v-ppl-webcam-bubble .bust .hr{position:absolute;left:-.1em;right:-.1em;top:0;height:1.2em;border-radius:50% 50% 44% 44%/58% 58% 42% 42%;background:var(--hair);box-shadow:inset -.06em 0 .09em var(--rim)}
.v-ppl-webcam-bubble .top{position:absolute;left:0;right:0;top:0;height:5.2cqw;display:flex;align-items:center;gap:1.1cqw;padding:0 2.4cqw;border-bottom:1px solid #ece8df;font-size:1.3cqw;color:#8c867a;background:#fff}
.v-ppl-webcam-bubble .mk{width:2.4cqw;height:2.4cqw;border-radius:.7cqw;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));display:flex;align-items:center;justify-content:center}
.v-ppl-webcam-bubble .mk svg{width:1.5cqw;height:1.5cqw;fill:#fff}
.v-ppl-webcam-bubble .top b{color:#2a2620;font-weight:500}
.v-ppl-webcam-bubble .top .gap{flex:1}
.v-ppl-webcam-bubble .avs{display:flex}
.v-ppl-webcam-bubble .avs i{width:2.3cqw;height:2.3cqw;border-radius:50%;border:.22cqw solid #fff;margin-left:-.7cqw;background:linear-gradient(135deg,#ffcf8a,#ff7a59)}
.v-ppl-webcam-bubble .avs i:nth-child(2){background:linear-gradient(135deg,#9fd8ff,#5b6cff)}
.v-ppl-webcam-bubble .ghost{border-radius:.8cqw;padding:.55cqw 1.2cqw;box-shadow:inset 0 0 0 1px #e4dfd5;color:#3a352d;font-weight:500}
.v-ppl-webcam-bubble .pub{border-radius:.8cqw;padding:.55cqw 1.3cqw;background:color-mix(in srgb,var(--accent) 84%,#000);color:#fff;font-weight:600}
.v-ppl-webcam-bubble .side{position:absolute;left:0;top:5.2cqw;bottom:0;width:17cqw;border-right:1px solid #ece8df;background:#f6f4ef;padding:2.4cqw 1.6cqw;display:flex;flex-direction:column;gap:.5cqw;font-size:1.3cqw;color:#7a7468}
.v-ppl-webcam-bubble .side span{display:block;padding:.55cqw .9cqw;border-radius:.7cqw}
.v-ppl-webcam-bubble .side .cap{font-size:1.05cqw;color:#aaa395;padding-bottom:.2cqw}
.v-ppl-webcam-bubble .side .on{background:#fff;color:#2a2620;font-weight:500;box-shadow:0 .1cqw .3cqw rgba(60,40,10,.08)}
.v-ppl-webcam-bubble .doc{position:absolute;left:21cqw;top:8.6cqw;width:46cqw}
.v-ppl-webcam-bubble .doc .k{font-size:1.15cqw;color:#a09a8d}
.v-ppl-webcam-bubble .doc h5{margin:.8cqw 0 0;font-family:var(--font-display);font-weight:400;font-size:3.8cqw;line-height:1.02;letter-spacing:-.01em;color:#1a1712}
.v-ppl-webcam-bubble .doc .by{display:flex;align-items:center;gap:.8cqw;margin-top:1.4cqw;font-size:1.2cqw;color:#8c867a}
.v-ppl-webcam-bubble .doc .by i{width:2cqw;height:2cqw;border-radius:50%;background:linear-gradient(135deg,#ffcf8a,#ff7a59)}
.v-ppl-webcam-bubble .doc p{position:relative;margin:2cqw 0 0;font-size:1.5cqw;line-height:1.62;color:#4a453c}
.v-ppl-webcam-bubble .doc p span{position:relative}
.v-ppl-webcam-bubble .doc .hl{position:absolute;left:-.8cqw;right:-.8cqw;top:-.4cqw;bottom:-.4cqw;border-radius:.8cqw;background:color-mix(in srgb,var(--accent) 12%,transparent);box-shadow:inset .3cqw 0 0 var(--accent);transform-origin:0 50%;transform:scaleX(0);animation:ppl-webcam-bubble-hl 6s linear infinite}
.v-ppl-webcam-bubble .doc s{display:block;height:1cqw;border-radius:.5cqw;background:#ece8df;margin-top:1.3cqw}
.v-ppl-webcam-bubble .tone{position:absolute;left:72cqw;right:2.4cqw;top:7.6cqw;height:8.6cqw;border-radius:1.2cqw;background:#fff;box-shadow:0 0 0 1px #ece8df;padding:1.4cqw 1.6cqw;font-size:1.2cqw;color:#8c867a}
.v-ppl-webcam-bubble .tone b{display:block;font-size:1.6cqw;color:#2a2620;font-weight:600;margin-top:.3cqw}
.v-ppl-webcam-bubble .tone u{position:absolute;left:1.6cqw;right:1.6cqw;bottom:1.4cqw;height:.5cqw;border-radius:.3cqw;background:#efebe3;text-decoration:none;overflow:hidden}
.v-ppl-webcam-bubble .tone u::after{content:"";position:absolute;left:0;top:0;bottom:0;width:72%;border-radius:.3cqw;background:linear-gradient(90deg,#ffb36b,color-mix(in srgb,var(--accent) 84%,#000))}
.v-ppl-webcam-bubble .ai{position:absolute;left:72cqw;right:2.4cqw;top:18cqw;bottom:2.4cqw;border-radius:1.4cqw;background:color-mix(in srgb,var(--accent) 6%,#fff);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 14%,#fff)}
.v-ppl-webcam-bubble .ai .h{position:absolute;left:1.4cqw;top:1.2cqw;display:flex;align-items:center;gap:.6cqw;font-size:1.35cqw;font-weight:600;color:#28292c}
.v-ppl-webcam-bubble .ai .h svg{width:1.6cqw;height:1.6cqw;fill:var(--accent)}
.v-ppl-webcam-bubble .ai .h em{font-style:normal;font-size:1cqw;color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,#fff);border-radius:1cqw;padding:.1cqw .6cqw}
.v-ppl-webcam-bubble .card{position:absolute;left:1.4cqw;right:1.4cqw;border-radius:1.1cqw;background:#fff;padding:1.3cqw 1.4cqw;box-shadow:0 .2cqw .6cqw rgba(55,56,60,.08)}
.v-ppl-webcam-bubble .card b{display:block;font-size:1.4cqw;font-weight:600;color:#28292c}
.v-ppl-webcam-bubble .card span{display:block;font-size:1.15cqw;color:#86888c;margin-top:.4cqw;line-height:1.35}
.v-ppl-webcam-bubble .c1{top:4.2cqw;height:13cqw}
.v-ppl-webcam-bubble .c2{top:19cqw;height:13.4cqw}
.v-ppl-webcam-bubble .hov{position:absolute;inset:0;border-radius:1.1cqw;box-shadow:0 0 0 .2cqw var(--accent),0 .8cqw 2cqw color-mix(in srgb,color-mix(in srgb,var(--accent) 84%,#000) 18%,transparent);opacity:0;animation:ppl-webcam-bubble-hov 6s linear infinite}
.v-ppl-webcam-bubble .acts{position:absolute;right:1.4cqw;bottom:1.3cqw;display:flex;align-items:center;gap:1.2cqw;font-size:1.15cqw}
.v-ppl-webcam-bubble .acts .dis{color:#86888c}
.v-ppl-webcam-bubble .apply{position:relative;height:2.6cqw;width:7.4cqw;border-radius:.8cqw;background:color-mix(in srgb,var(--accent) 84%,#000);color:#fff;font-weight:600;overflow:hidden}
.v-ppl-webcam-bubble .apply .ok{position:absolute;inset:0;background:#18a464;opacity:0;animation:ppl-webcam-bubble-ok 6s linear infinite}
.v-ppl-webcam-bubble .apply span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.4cqw;color:#fff;margin:0;font-size:1.15cqw}
.v-ppl-webcam-bubble .apply .t1{animation:ppl-webcam-bubble-t1 6s linear infinite}
.v-ppl-webcam-bubble .apply .t2{opacity:0;animation:ppl-webcam-bubble-ok 6s linear infinite}
.v-ppl-webcam-bubble .apply svg{width:1.2cqw;height:1.2cqw;fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.v-ppl-webcam-bubble .bub{position:absolute;right:3cqw;bottom:3cqw;width:15cqw;height:15cqw;animation:ppl-webcam-bubble-move 6s linear infinite}
.v-ppl-webcam-bubble .ring{position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--accent) 55%,transparent);animation:ppl-webcam-bubble-ring 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-ppl-webcam-bubble .ring.r2{animation-name:ppl-webcam-bubble-ring2}
.v-ppl-webcam-bubble .cam{position:absolute;inset:0;border-radius:50%;overflow:hidden;container-type:inline-size;box-shadow:0 0 0 .45cqw #fff,0 1.4cqw 3.4cqw rgba(38,40,43,.38),0 .3cqw .8cqw rgba(38,40,43,.2)}
.v-ppl-webcam-bubble .ft{position:absolute;inset:0;background:radial-gradient(60% 55% at 28% 22%,#f0f2f6 0%,rgba(240,242,246,0) 70%),radial-gradient(50% 50% at 85% 70%,rgba(255,170,140,.55),rgba(255,170,140,0) 70%),linear-gradient(165deg,color-mix(in srgb,var(--accent) 30%,#fff) 0%,color-mix(in srgb,var(--accent) 60%,#989a9e) 55%,color-mix(in srgb,var(--accent) 55%,#1c1e20) 100%)}
.v-ppl-webcam-bubble .ft i{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.7),rgba(255,255,255,0) 68%)}
.v-ppl-webcam-bubble .bust{font-size:27cqw;bottom:-6cqw;--shirt:linear-gradient(160deg,#3e3f42,#1f2023 70%);--neck:#5d5e62;--skin:radial-gradient(90% 90% at 38% 30%,#8a8c90,#5a5c60 75%);--hair:linear-gradient(180deg,#232427,#313336);--fringe:#292a2d;--rim:rgba(232,234,238,.75)}
.v-ppl-webcam-bubble .hg{animation:ppl-webcam-bubble-bob 1.5s ease-in-out infinite}
.v-ppl-webcam-bubble .grain{animation:ppl-webcam-bubble-grain .5s steps(1,end) infinite}
.v-ppl-webcam-bubble .mic{position:absolute;left:.2cqw;bottom:.8cqw;width:3.8cqw;height:3.8cqw;border-radius:50%;background:color-mix(in srgb,var(--accent) 84%,#000);box-shadow:0 0 0 .32cqw #fff,0 .4cqw 1cqw rgba(38,40,43,.35);display:flex;align-items:center;justify-content:center;gap:.28cqw}
.v-ppl-webcam-bubble .mic i{width:.36cqw;height:1.8cqw;border-radius:.2cqw;background:#fff;transform-origin:50% 50%}
.v-ppl-webcam-bubble .mic i:nth-child(1){animation:ppl-webcam-bubble-v1 1s ease-in-out infinite}
.v-ppl-webcam-bubble .mic i:nth-child(2){animation:ppl-webcam-bubble-v2 1s ease-in-out infinite}
.v-ppl-webcam-bubble .mic i:nth-child(3){animation:ppl-webcam-bubble-v3 1s ease-in-out infinite}
.v-ppl-webcam-bubble .cur{position:absolute;left:0;top:0;width:2.6cqw;height:2.6cqw;animation:ppl-webcam-bubble-cur 6s linear infinite}
.v-ppl-webcam-bubble .cur svg{position:absolute;left:0;top:0;width:2.6cqw;height:2.6cqw;transform-origin:0 0;filter:drop-shadow(0 .25cqw .4cqw rgba(0,0,0,.28));animation:ppl-webcam-bubble-press 6s linear infinite}
.v-ppl-webcam-bubble .rip{position:absolute;left:-2cqw;top:-2cqw;width:4cqw;height:4cqw;border-radius:50%;background:color-mix(in srgb,var(--accent) 35%,transparent);opacity:0;animation:ppl-webcam-bubble-rip 6s linear infinite}
@keyframes ppl-webcam-bubble-cur{0%{transform:translate(54cqw,31cqw);animation-timing-function:cubic-bezier(.45,0,.55,1)}12%{transform:translate(57cqw,33.5cqw);animation-timing-function:cubic-bezier(.45,0,.55,1)}22%{transform:translate(55.5cqw,31.5cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}40%,70%{transform:translate(89.6cqw,48.6cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}82%{transform:translate(58cqw,29.5cqw);animation-timing-function:cubic-bezier(.45,0,.55,1)}100%{transform:translate(54cqw,31cqw)}}
@keyframes ppl-webcam-bubble-press{0%,41%{transform:scale(1)}42.5%{transform:scale(.82)}44.5%,100%{transform:scale(1)}}
@keyframes ppl-webcam-bubble-rip{0%,42%{opacity:0;transform:scale(.2)}43%{opacity:1;transform:scale(.4)}50%,100%{opacity:0;transform:scale(1.6)}}
@keyframes ppl-webcam-bubble-move{0%,24%{transform:translate(0cqw,0cqw) scale(1);animation-timing-function:cubic-bezier(.55,0,.6,.5)}31%{transform:translate(-37cqw,-1.8cqw) scale(.95);animation-timing-function:cubic-bezier(.3,.5,.25,1)}38%,78%{transform:translate(-73cqw,0cqw) scale(1);animation-timing-function:cubic-bezier(.55,0,.6,.5)}85%{transform:translate(-36cqw,-1.8cqw) scale(.95);animation-timing-function:cubic-bezier(.3,.5,.25,1)}92%,100%{transform:translate(0cqw,0cqw) scale(1)}}
@keyframes ppl-webcam-bubble-ring{0%{transform:scale(1);opacity:.85}55%{transform:scale(1.2);opacity:0}100%{transform:scale(1.2);opacity:0}}
@keyframes ppl-webcam-bubble-ring2{0%{transform:scale(1.12);opacity:.25}20%{transform:scale(1.18);opacity:0}21%{transform:scale(1);opacity:.75}70%{transform:scale(1.1);opacity:.4}100%{transform:scale(1.12);opacity:.25}}
@keyframes ppl-webcam-bubble-bob{0%,100%{transform:rotate(0deg) translateY(0em)}30%{transform:rotate(-2deg) translateY(-.02em)}65%{transform:rotate(1.4deg) translateY(.01em)}}
@keyframes ppl-webcam-bubble-grain{0%{transform:translate(0,0)}25%{transform:translate(-6cqw,4cqw)}50%{transform:translate(5cqw,-6cqw)}75%{transform:translate(-3cqw,-2cqw)}100%{transform:translate(2cqw,5cqw)}}
@keyframes ppl-webcam-bubble-v1{0%,100%{transform:scaleY(.35)}30%{transform:scaleY(.9)}60%{transform:scaleY(.5)}}
@keyframes ppl-webcam-bubble-v2{0%,100%{transform:scaleY(.8)}25%{transform:scaleY(.4)}55%{transform:scaleY(1)}80%{transform:scaleY(.55)}}
@keyframes ppl-webcam-bubble-v3{0%,100%{transform:scaleY(.5)}40%{transform:scaleY(.95)}70%{transform:scaleY(.3)}}
@keyframes ppl-webcam-bubble-hov{0%,37%{opacity:0}40%,44%{opacity:1}50%,100%{opacity:0}}
@keyframes ppl-webcam-bubble-ok{0%,43.5%{opacity:0}44.5%,88%{opacity:1}92%,100%{opacity:0}}
@keyframes ppl-webcam-bubble-t1{0%,43.5%{opacity:1}44.5%,88%{opacity:0}92%,100%{opacity:1}}
@keyframes ppl-webcam-bubble-hl{0%,44%{transform:scaleX(0);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}50%,86%{transform:scaleX(1);opacity:1}92%,100%{transform:scaleX(1);opacity:0}}

.v-ppl-webcam-bubble .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:none}
@container (max-aspect-ratio: 4/5){.v-ppl-webcam-bubble .xfr{transform:translate(-30.4cqw,calc(17cqh - 15.7cqw)) scale(1.83)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-ppl-webcam-bubble .xfr{transform:translate(-18.2cqw,4cqw) scale(1.15)}}
.v-ppl-webcam-bubble .tag{position:absolute;left:0;bottom:calc(100% + 1.2cqw);display:flex;flex-direction:column;gap:.2cqw;padding:.8cqw 1.3cqw;border-radius:1.1cqw;background:color-mix(in srgb,var(--ink) 86%,transparent);color:var(--paper);white-space:nowrap;box-shadow:0 .8cqw 2cqw rgba(0,0,0,.18);--delay:.5s;animation:ppl-webcam-bubble-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ppl-webcam-bubble .tag b{font-size:1.6cqw;font-weight:600;letter-spacing:-.01em}
.v-ppl-webcam-bubble .tag span{font-size:1.2cqw;color:color-mix(in srgb,var(--paper) 72%,transparent)}
.v-ppl-webcam-bubble .rec{position:absolute;left:0;right:0;top:1.2cqw;margin:0 auto;width:fit-content;display:flex;align-items:center;gap:.8cqw;padding:.55cqw 1.3cqw;border-radius:2cqw;background:color-mix(in srgb,var(--ink) 86%,transparent);color:var(--paper);font:500 1.2cqw/1.25 var(--font-mono);letter-spacing:.03em;z-index:5;animation:ppl-webcam-bubble-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ppl-webcam-bubble .rec i{width:.8cqw;height:.8cqw;border-radius:50%;background:#ff4d4d;box-shadow:0 0 .8cqw #ff4d4d;animation:ppl-webcam-bubble-blink 1s steps(1,end) infinite}
@container (max-aspect-ratio: 4/5){
.v-ppl-webcam-bubble .bub{right:auto;left:8cqw;bottom:8cqh;width:36cqw;height:36cqw;animation:ppl-webcam-bubble-pop 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ppl-webcam-bubble .cam{box-shadow:0 0 0 1cqw #fff,0 3cqw 6cqw rgba(38,40,43,.38)}
.v-ppl-webcam-bubble .mic{width:9cqw;height:9cqw;gap:.6cqw}
.v-ppl-webcam-bubble .mic i{width:.9cqw;height:4.2cqw}
.v-ppl-webcam-bubble .cur,.v-ppl-webcam-bubble .top,.v-ppl-webcam-bubble .side,.v-ppl-webcam-bubble .tone,.v-ppl-webcam-bubble .ai{display:none}
.v-ppl-webcam-bubble .tag{left:calc(100% + 4cqw);bottom:2cqw;width:40cqw;white-space:normal;padding:2.6cqw 3.4cqw;border-radius:3cqw;gap:.8cqw}
.v-ppl-webcam-bubble .tag b{font-size:6.2cqw;line-height:1.1}
.v-ppl-webcam-bubble .tag span{font-size:5.4cqw;line-height:1.15}
.v-ppl-webcam-bubble .rec{left:8cqw;right:auto;top:7cqh;margin:0;font-size:5.4cqw;gap:2.4cqw;padding:1.8cqw 4cqw;border-radius:6cqw}
.v-ppl-webcam-bubble .rec i{width:2.4cqw;height:2.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-ppl-webcam-bubble .bub{right:auto;left:6cqw;bottom:6cqw;width:24cqw;height:24cqw;animation:ppl-webcam-bubble-pop 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ppl-webcam-bubble .mic{width:5.6cqw;height:5.6cqw}
.v-ppl-webcam-bubble .mic i{width:.55cqw;height:2.6cqw}
.v-ppl-webcam-bubble .cur,.v-ppl-webcam-bubble .top,.v-ppl-webcam-bubble .side{display:none}
.v-ppl-webcam-bubble .tag{left:calc(100% + 2.4cqw);bottom:1cqw;padding:1.6cqw 2.2cqw;border-radius:2cqw;gap:.4cqw}
.v-ppl-webcam-bubble .tag b{font-size:3cqw}
.v-ppl-webcam-bubble .tag span{font-size:2.2cqw}
.v-ppl-webcam-bubble .rec{left:6cqw;right:auto;top:4.5cqw;margin:0;font-size:2.2cqw;gap:1.2cqw;padding:1cqw 2.2cqw;border-radius:3cqw}
.v-ppl-webcam-bubble .rec i{width:1.2cqw;height:1.2cqw}
}
@keyframes ppl-webcam-bubble-pop{0%,6%{opacity:0;transform:scale(.6)}16%,100%{opacity:1;transform:scale(1)}}
@keyframes ppl-webcam-bubble-blink{0%{opacity:1}50%{opacity:.25}}
@keyframes ppl-webcam-bubble-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
`,
};

export const pplLowerThird: SceneSpec = {
  id: "ppl-lower-third",
  slug: "mg-ppl-lower-third",
  name: "Editorial Lower Third",
  kind: "element",
  job: "titles",
  language: "editorial",
  mechanic: "lower-third-wipe-in",
  energy: "calm",
  settle: 4.2,
  colors: { ink: "#FFFFFF", accent: "#FF8A5C", secondary: "#FFD29A", paper: "#140D09" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["lower-third", "speaker", "name-title"],
  fields: [
    { key: "name", label: "Name", default: "Maya Okafor", maxChars: 24, role: "name" },
    { key: "role", label: "Role", default: "Head of Product, Lumen", maxChars: 34, role: "label" },
    { key: "brand", label: "Brand", default: "Lumen", maxChars: 16, role: "label" },
  ],
  html: `<div class="xfr"><div class="cam">
<div class="bg"></div>
<div class="lamp"></div>
<div class="win"></div>
<div class="shelf"><i style="left:2cqw;height:7cqw;--c:#6a3f26"></i><i style="left:4cqw;height:8.4cqw;--c:#3b4a3a"></i><i style="left:6cqw;height:6.4cqw;--c:#8a5a34"></i><i style="left:8.2cqw;height:7.6cqw;--c:#2c2d30"></i><i style="left:14cqw;height:5cqw;width:5cqw;border-radius:50% 50% 0 0;--c:#4d6b44"></i><i style="left:22cqw;height:8cqw;--c:#704028"></i><i style="left:24cqw;height:6.6cqw;--c:#a07040"></i></div>
<div class="bk"><i style="left:76cqw;top:6cqw;width:7cqw;height:7cqw"></i><i style="left:86cqw;top:18cqw;width:5cqw;height:5cqw"></i><i style="left:30cqw;top:4cqw;width:4cqw;height:4cqw;opacity:.6"></i><i style="left:80cqw;top:34cqw;width:9cqw;height:9cqw;opacity:.7"></i><i style="left:40cqw;top:30cqw;width:3cqw;height:3cqw;opacity:.5"></i></div>
<div class="bust"><i class="sh"></i><i class="nk"></i><span class="hg"><i class="hr"></i><i class="hd"></i></span></div>
<div class="fg"><i style="left:0;top:4cqw;transform:rotate(-24deg)"></i><i style="left:7cqw;top:10cqw;transform:rotate(14deg)"></i><i style="left:2cqw;top:16cqw;transform:rotate(-6deg)"></i></div>
</div>
</div>
<div class="grain"></div>
<div class="vig"></div>
<div class="ltbg"></div>
<div class="wm" data-21st-slot="brand"><span><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span>{{brand}}</div>
<div class="lt">
<i class="bar"></i>
<div>
<div class="name" data-21st-slot="name">{{name|words}}</div>
<div class="role"><b data-21st-slot="role">{{role}}</b><span class="talk"><i></i><i></i><i></i><i></i></span></div>
</div>
</div>`,
  css: `
.v-ppl-lower-third{color:var(--ink);font-family:var(--font-body)}
.v-ppl-lower-third[data-backdrop="on"]{background:var(--paper)}
.v-ppl-lower-third[data-backdrop="off"] .xfr,.v-ppl-lower-third[data-backdrop="off"] .grain,.v-ppl-lower-third[data-backdrop="off"] .vig,.v-ppl-lower-third[data-backdrop="off"] .ltbg{display:none}
.v-ppl-lower-third *,.v-ppl-lower-third *::before,.v-ppl-lower-third *::after{box-sizing:border-box}
.v-ppl-lower-third .grain{position:absolute;left:-30%;top:-30%;width:160%;height:160%;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23g)'/></svg>");background-size:24cqw 24cqw;mix-blend-mode:overlay;opacity:.34;pointer-events:none}
.v-ppl-lower-third .bust{position:absolute;left:50%;bottom:0;width:3.4em;height:3.6em;margin-left:-1.7em}
.v-ppl-lower-third .bust .sh{position:absolute;left:-.12em;right:-.12em;bottom:-.5em;height:2.05em;border-radius:1.3em 1.3em .2em .2em/.92em .92em .2em .2em;background:var(--shirt);box-shadow:inset -.08em .06em .14em var(--rim),inset .12em 0 .32em rgba(0,0,0,.28)}
.v-ppl-lower-third .bust .sh::before{content:"";position:absolute;left:50%;top:-.02em;width:.64em;height:.42em;margin-left:-.32em;background:var(--neck);clip-path:polygon(0 0,100% 0,50% 100%)}
.v-ppl-lower-third .bust .nk{position:absolute;left:50%;bottom:1.3em;width:.5em;height:.78em;margin-left:-.25em;border-radius:.22em;background:var(--neck)}
.v-ppl-lower-third .bust .hg{position:absolute;left:50%;bottom:1.84em;width:1.12em;height:1.66em;margin-left:-.56em;transform-origin:50% 100%}
.v-ppl-lower-third .bust .hd{position:absolute;left:0;right:0;bottom:0;height:1.46em;border-radius:50% 50% 47% 47%/56% 56% 44% 44%;background:radial-gradient(120% 70% at 24% -12%,var(--fringe) 0 40%,rgba(0,0,0,0) 68%),var(--skin);box-shadow:inset -.07em 0 .1em var(--rim)}
.v-ppl-lower-third .bust .hr{position:absolute;left:-.1em;right:-.1em;top:0;height:1.2em;border-radius:50% 50% 44% 44%/58% 58% 42% 42%;background:var(--hair);box-shadow:inset -.06em 0 .09em var(--rim)}
.v-ppl-lower-third .cam{position:absolute;inset:0;transform-origin:60% 40%;animation:ppl-lower-third-push 6s cubic-bezier(.45,0,.55,1) infinite}
.v-ppl-lower-third .bg{position:absolute;inset:0;background:radial-gradient(40% 60% at 16% 30%,rgba(255,170,90,.28),rgba(255,170,90,0) 70%),linear-gradient(96deg,#1a110c 0%,#3a261b 32%,#7a5034 60%,#d39d66 84%,#f2cd96 100%)}
.v-ppl-lower-third .win{position:absolute;left:72cqw;top:-6cqw;width:34cqw;height:62cqw;background:linear-gradient(180deg,#fff4dc,#ffd8a2 45%,#f2a96a 100%);filter:blur(.7cqw);opacity:.95}
.v-ppl-lower-third .win::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,0) 0 9cqw,rgba(70,40,22,.85) 9cqw 10.2cqw),repeating-linear-gradient(180deg,rgba(0,0,0,0) 0 17cqw,rgba(70,40,22,.85) 17cqw 18.2cqw)}
.v-ppl-lower-third .shelf{position:absolute;left:4cqw;top:15cqw;width:30cqw;height:13cqw;filter:blur(.55cqw);opacity:.75}
.v-ppl-lower-third .shelf::before{content:"";position:absolute;left:0;right:0;bottom:0;height:.9cqw;background:#2a1a11}
.v-ppl-lower-third .shelf i{position:absolute;bottom:.9cqw;width:1.6cqw;border-radius:.2cqw .2cqw 0 0;background:var(--c)}
.v-ppl-lower-third .lamp{position:absolute;left:4cqw;top:2cqw;width:22cqw;height:22cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,190,110,.55),rgba(255,190,110,0));animation:ppl-lower-third-lamp 6s ease-in-out infinite}
.v-ppl-lower-third .bk{position:absolute;inset:0;animation:ppl-lower-third-par 6s cubic-bezier(.45,0,.55,1) infinite}
.v-ppl-lower-third .bk i{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,226,180,.55) 0%,rgba(255,226,180,.35) 55%,rgba(255,226,180,0) 72%);filter:blur(.15cqw)}
.v-ppl-lower-third .bust{left:61%;bottom:-1cqw;font-size:11.6cqw;--shirt:linear-gradient(95deg,#160f0b 0%,#2b1d16 55%,#4e3427 100%);--neck:#3a271e;--skin:radial-gradient(100% 90% at 70% 35%,#6b4a38,#2d1e17 72%);--hair:linear-gradient(180deg,#120c09,#24170f);--fringe:#1a110c;--rim:rgba(255,206,150,.7)}
.v-ppl-lower-third .hg{animation:ppl-lower-third-bob 1.5s ease-in-out infinite}
.v-ppl-lower-third .fg{position:absolute;left:-6cqw;bottom:-8cqw;width:24cqw;height:40cqw;filter:blur(1.1cqw);animation:ppl-lower-third-fg 6s cubic-bezier(.45,0,.55,1) infinite}
.v-ppl-lower-third .fg i{position:absolute;width:9cqw;height:22cqw;border-radius:50%;background:linear-gradient(180deg,#1b2414,#0a0e07)}
.v-ppl-lower-third .grain{animation:ppl-lower-third-grain .5s steps(1,end) infinite}
.v-ppl-lower-third .vig{position:absolute;inset:0;background:radial-gradient(120% 100% at 58% 40%,rgba(0,0,0,0) 45%,rgba(0,0,0,.55) 100%)}
.v-ppl-lower-third .ltbg{position:absolute;inset:0;background:radial-gradient(70% 55% at 0% 100%,rgba(10,6,3,.78),rgba(10,6,3,0) 70%);opacity:0;animation:ppl-lower-third-bgin 6s linear infinite}
.v-ppl-lower-third .lt{position:absolute;left:6.5cqw;bottom:8cqw;display:flex;gap:1.8cqw;align-items:stretch}
.v-ppl-lower-third .bar{width:.42cqw;border-radius:.3cqw;background:linear-gradient(180deg,var(--secondary),var(--accent));transform-origin:50% 0;transform:scaleY(0);animation:ppl-lower-third-bar 6s linear infinite}
.v-ppl-lower-third .name{font-family:var(--font-display);font-size:5.8cqw;line-height:1;letter-spacing:-.01em;white-space:nowrap;clip-path:inset(-30% 100% -30% 0);animation:ppl-lower-third-name 6s linear infinite}
.v-ppl-lower-third .name em{font-style:italic;color:var(--secondary)}
.v-ppl-lower-third .role{display:flex;align-items:center;gap:1.1cqw;margin-top:1cqw;font-size:1.7cqw;letter-spacing:.01em;color:color-mix(in srgb,var(--ink) 82%,transparent);white-space:nowrap;clip-path:inset(-30% 100% -30% 0);animation:ppl-lower-third-role 6s linear infinite}
.v-ppl-lower-third .role b{font-weight:600;color:var(--ink)}
.v-ppl-lower-third .role s{width:1px;height:1.4cqw;background:rgba(255,255,255,.35)}
.v-ppl-lower-third .talk{display:flex;align-items:center;gap:.25cqw;height:1.6cqw}
.v-ppl-lower-third .talk i{width:.3cqw;height:100%;border-radius:.2cqw;background:var(--accent)}
.v-ppl-lower-third .talk i:nth-child(1){animation:ppl-lower-third-v1 1s ease-in-out infinite}
.v-ppl-lower-third .talk i:nth-child(2){animation:ppl-lower-third-v2 1s ease-in-out infinite}
.v-ppl-lower-third .talk i:nth-child(3){animation:ppl-lower-third-v3 1s ease-in-out infinite}
.v-ppl-lower-third .talk i:nth-child(4){animation:ppl-lower-third-v1 1s ease-in-out infinite reverse}
.v-ppl-lower-third .wm{position:absolute;right:3.6cqw;top:3.4cqw;display:flex;align-items:center;gap:.8cqw;font-size:1.5cqw;font-weight:600;color:color-mix(in srgb,var(--ink) 85%,transparent)}
.v-ppl-lower-third .wm span{width:2cqw;height:2cqw;border-radius:.6cqw;background:linear-gradient(135deg,var(--secondary),var(--accent));display:flex;align-items:center;justify-content:center}
.v-ppl-lower-third .wm svg{width:1.3cqw;height:1.3cqw;fill:#2a170c}
@keyframes ppl-lower-third-push{0%,100%{transform:scale(1.02) translate(0cqw,0cqw)}50%{transform:scale(1.065) translate(-.8cqw,.3cqw)}}
@keyframes ppl-lower-third-par{0%,100%{transform:translateX(0cqw)}50%{transform:translateX(1.4cqw)}}
@keyframes ppl-lower-third-fg{0%,100%{transform:translateX(0cqw)}50%{transform:translateX(-1.6cqw)}}
@keyframes ppl-lower-third-lamp{0%,100%{opacity:.85}50%{opacity:1}}
@keyframes ppl-lower-third-bob{0%,100%{transform:rotate(0deg) translateY(0em)}35%{transform:rotate(1.6deg) translateY(-.015em)}70%{transform:rotate(-1.2deg) translateY(.01em)}}
@keyframes ppl-lower-third-grain{0%{transform:translate(0,0)}25%{transform:translate(-5cqw,3cqw)}50%{transform:translate(4cqw,-5cqw)}75%{transform:translate(-3cqw,-2cqw)}100%{transform:translate(2cqw,4cqw)}}
@keyframes ppl-lower-third-bgin{0%,8%{opacity:0}22%,82%{opacity:1}94%,100%{opacity:0}}
@keyframes ppl-lower-third-bar{0%,10%{transform:scaleY(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}19%,84%{transform:scaleY(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}92%,100%{transform:scaleY(0)}}
@keyframes ppl-lower-third-name{0%,15%{clip-path:inset(-30% 100% -30% 0);transform:translateX(-1.6cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}29%,80%{clip-path:inset(-30% -6% -30% 0);transform:translateX(0cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}89%,100%{clip-path:inset(-30% 100% -30% 0);transform:translateX(-1cqw)}}
@keyframes ppl-lower-third-role{0%,20%{clip-path:inset(-30% 100% -30% 0);transform:translateX(-1.2cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}33%,78%{clip-path:inset(-30% -6% -30% 0);transform:translateX(0cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}86%,100%{clip-path:inset(-30% 100% -30% 0);transform:translateX(-1cqw)}}
@keyframes ppl-lower-third-v1{0%,100%{transform:scaleY(.3)}35%{transform:scaleY(1)}65%{transform:scaleY(.5)}}
@keyframes ppl-lower-third-v2{0%,100%{transform:scaleY(.7)}30%{transform:scaleY(.35)}60%{transform:scaleY(.95)}}
@keyframes ppl-lower-third-v3{0%,100%{transform:scaleY(.45)}45%{transform:scaleY(.85)}75%{transform:scaleY(.25)}}

.v-ppl-lower-third .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:none}
@container (max-aspect-ratio: 4/5){.v-ppl-lower-third .xfr{transform:translate(-143cqw,0) scale(3.16)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-ppl-lower-third .xfr{transform:translate(-60cqw,0) scale(1.78)}}
.v-ppl-lower-third .name .w:last-child{font-style:italic;color:var(--secondary)}
@container (max-aspect-ratio: 4/5){
.v-ppl-lower-third .lt{left:8cqw;right:8cqw;bottom:11cqh;gap:4cqw}
.v-ppl-lower-third .lt > div{min-width:0;flex:1}
.v-ppl-lower-third .bar{width:1.3cqw}
.v-ppl-lower-third .name{font-size:14cqw;line-height:.98;white-space:normal}
.v-ppl-lower-third .role{font-size:5.6cqw;white-space:normal;margin-top:3cqw;gap:3cqw}
.v-ppl-lower-third .talk{height:4.4cqw;gap:.7cqw}
.v-ppl-lower-third .talk i{width:.8cqw}
.v-ppl-lower-third .wm{right:auto;left:8cqw;top:8cqh;font-size:5.6cqw;gap:2.4cqw}
.v-ppl-lower-third .wm span{width:7cqw;height:7cqw;border-radius:2cqw}
.v-ppl-lower-third .wm svg{width:4.4cqw;height:4.4cqw}
.v-ppl-lower-third .ltbg{background:linear-gradient(0deg,rgba(10,6,3,.82),rgba(10,6,3,0) 45%)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-ppl-lower-third .lt{left:7cqw;right:7cqw;bottom:9cqw;gap:2.4cqw}
.v-ppl-lower-third .lt > div{min-width:0;flex:1}
.v-ppl-lower-third .bar{width:.7cqw}
.v-ppl-lower-third .name{font-size:9cqw;white-space:normal}
.v-ppl-lower-third .role{font-size:2.8cqw;white-space:normal;margin-top:1.6cqw;gap:1.6cqw}
.v-ppl-lower-third .talk{height:2.4cqw;gap:.4cqw}
.v-ppl-lower-third .talk i{width:.45cqw}
.v-ppl-lower-third .wm{right:6cqw;top:6cqw;font-size:2.6cqw;gap:1.2cqw}
.v-ppl-lower-third .wm span{width:3.6cqw;height:3.6cqw;border-radius:1cqw}
.v-ppl-lower-third .wm svg{width:2.3cqw;height:2.3cqw}
}
`,
};

export const pplPipSwitch: SceneSpec = {
  id: "ppl-pip-switch",
  slug: "mg-ppl-pip-switch",
  name: "Speaker To Picture In Picture",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "speaker-shrinks-to-pip",
  energy: "default",
  settle: 4.4,
  colors: { ink: "#E8EFEC", accent: "#3EE0A1", secondary: "#1F8FFF", paper: "#0A0E0D" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["pip", "presenter", "screen-recording"],
  fields: [
    { key: "headline", label: "Screen title", default: "Weekly support digest", maxChars: 30, role: "headline" },
    { key: "value", label: "Big number", default: "6.5h", maxChars: 8, role: "value" },
    { key: "name", label: "Speaker name", default: "Maya Okafor", maxChars: 18, role: "name" },
  ],
  html: `<div class="prod">
<div class="rail"><span class="m"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span><i class="on"></i><i></i><i></i><i></i></div>
<div class="phd">Agents /<b data-21st-slot="headline">{{headline}}</b><span class="st"><span class="run"><i></i>Running</span><span class="done">Done</span></span><span class="again">Run again</span></div>
<div class="log">
<div class="t"><span>Run log</span><span>Today, 09:14</span></div>
<div class="row r1"><i class="ck"><u></u></i>read 2,480 tickets<em>0.8s</em></div>
<div class="row r2"><i class="ck"><u></u></i>cluster into 14 themes<em>2.1s</em></div>
<div class="row r3 cur"><i class="ck"><u></u></i>rank by revenue impact<em>1.4s</em></div>
<div class="row r4"><i class="ck"><u></u></i>draft weekly summary<em>3.0s</em></div>
<div class="row r5"><i class="ck"><u></u></i>post to #product<em>0.2s</em></div>
<div class="sum"><b>Onboarding</b> is the top theme this week. Fixing step 2 could cut tickets by a third.</div>
</div>
<div class="th">
<div class="t">Top themes</div>
<div class="bar">Onboarding<s style="--w:100%"><u></u></s><em>32%</em></div>
<div class="bar">Billing<s style="--w:66%"><u></u></s><em>21%</em></div>
<div class="bar">Mobile sync<s style="--w:56%"><u></u></s><em>18%</em></div>
<div class="bar">Exports<s style="--w:34%"><u></u></s><em>11%</em></div>
</div>
<div class="sv"><span>Time saved</span><b data-21st-slot="value">{{value}}</b><em>this week</em></div>
<div class="pipsh"></div>
</div>
<div class="spk">
<div class="ft"></div>
<i class="strip" style="left:14cqw"></i><i class="strip" style="left:80cqw;opacity:.7"></i>
<div class="bust"><i class="sh"></i><i class="nk"></i><span class="hg"><i class="hr"></i><i class="hd"></i></span></div>
<div class="grain"></div>
<div class="tagf"><span class="talk"><i></i><i></i><i></i></span>{{name}}</div>
<i class="edge"></i>
</div>
<div class="badge"><span class="talk"><i></i><i></i><i></i></span><span data-21st-slot="name">{{name}}</span></div>`,
  css: `
.v-ppl-pip-switch{color:var(--ink);font-family:var(--font-body)}
.v-ppl-pip-switch[data-backdrop="on"]{background:var(--paper)}
.v-ppl-pip-switch[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-ppl-pip-switch[data-backdrop="on"] .prod{background:radial-gradient(60% 60% at 70% 0%,color-mix(in srgb,var(--accent) 8%,transparent),transparent 70%),var(--paper)}
.v-ppl-pip-switch *,.v-ppl-pip-switch *::before,.v-ppl-pip-switch *::after{box-sizing:border-box}
.v-ppl-pip-switch .grain{position:absolute;left:-30%;top:-30%;width:160%;height:160%;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23g)'/></svg>");background-size:24cqw 24cqw;mix-blend-mode:overlay;opacity:.34;pointer-events:none}
.v-ppl-pip-switch .bust{position:absolute;left:50%;bottom:0;width:3.4em;height:3.6em;margin-left:-1.7em}
.v-ppl-pip-switch .bust .sh{position:absolute;left:-.12em;right:-.12em;bottom:-.5em;height:2.05em;border-radius:1.3em 1.3em .2em .2em/.92em .92em .2em .2em;background:var(--shirt);box-shadow:inset -.08em .06em .14em var(--rim),inset .12em 0 .32em rgba(0,0,0,.28)}
.v-ppl-pip-switch .bust .sh::before{content:"";position:absolute;left:50%;top:-.02em;width:.64em;height:.42em;margin-left:-.32em;background:var(--neck);clip-path:polygon(0 0,100% 0,50% 100%)}
.v-ppl-pip-switch .bust .nk{position:absolute;left:50%;bottom:1.3em;width:.5em;height:.78em;margin-left:-.25em;border-radius:.22em;background:var(--neck)}
.v-ppl-pip-switch .bust .hg{position:absolute;left:50%;bottom:1.84em;width:1.12em;height:1.66em;margin-left:-.56em;transform-origin:50% 100%}
.v-ppl-pip-switch .bust .hd{position:absolute;left:0;right:0;bottom:0;height:1.46em;border-radius:50% 50% 47% 47%/56% 56% 44% 44%;background:radial-gradient(120% 70% at 24% -12%,var(--fringe) 0 40%,rgba(0,0,0,0) 68%),var(--skin);box-shadow:inset -.07em 0 .1em var(--rim)}
.v-ppl-pip-switch .bust .hr{position:absolute;left:-.1em;right:-.1em;top:0;height:1.2em;border-radius:50% 50% 44% 44%/58% 58% 42% 42%;background:var(--hair);box-shadow:inset -.06em 0 .09em var(--rim)}
.v-ppl-pip-switch .prod{position:absolute;inset:0;animation:ppl-pip-switch-prod 6s linear infinite}
.v-ppl-pip-switch .rail{position:absolute;left:0;top:0;bottom:0;width:5.6cqw;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;align-items:center;gap:1.6cqw;padding-top:2.4cqw}
.v-ppl-pip-switch .rail .m{width:2.8cqw;height:2.8cqw;border-radius:.8cqw;background:linear-gradient(135deg,var(--accent),var(--secondary));display:flex;align-items:center;justify-content:center;margin-bottom:.8cqw}
.v-ppl-pip-switch .rail .m svg{width:1.7cqw;height:1.7cqw;fill:#04110b}
.v-ppl-pip-switch .rail i{width:2.2cqw;height:2.2cqw;border-radius:.7cqw;background:rgba(255,255,255,.06)}
.v-ppl-pip-switch .rail i.on{background:color-mix(in srgb,var(--accent) 18%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 40%,transparent)}
.v-ppl-pip-switch .phd{position:absolute;left:8cqw;right:3cqw;top:2.6cqw;display:flex;align-items:center;gap:1.2cqw;font-size:1.35cqw;color:#7e8b86}
.v-ppl-pip-switch .phd b{font-size:2.2cqw;font-weight:600;color:var(--ink);letter-spacing:-.02em}
.v-ppl-pip-switch .st{position:relative;height:2.3cqw;width:8.6cqw;border-radius:1.2cqw;font-size:1.15cqw;font-weight:600}
.v-ppl-pip-switch .st span{position:absolute;inset:0;border-radius:1.2cqw;display:flex;align-items:center;justify-content:center;gap:.5cqw}
.v-ppl-pip-switch .st .run{background:rgba(255,196,84,.14);color:#ffc454;animation:ppl-pip-switch-run 6s linear infinite}
.v-ppl-pip-switch .st .run i{width:.7cqw;height:.7cqw;border-radius:50%;background:#ffc454}
.v-ppl-pip-switch .st .done{background:color-mix(in srgb,var(--accent) 14%,transparent);color:var(--accent);opacity:0;animation:ppl-pip-switch-done 6s linear infinite}
.v-ppl-pip-switch .phd .again{margin-left:auto;border-radius:.8cqw;padding:.6cqw 1.3cqw;background:var(--ink);color:var(--paper);font-weight:600}
.v-ppl-pip-switch .log{position:absolute;left:8cqw;top:8.4cqw;width:44cqw;height:42.8cqw;border-radius:1.6cqw;background:#111716;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);padding:1.8cqw 2cqw}
.v-ppl-pip-switch .log .t{display:flex;justify-content:space-between;font-size:1.3cqw;color:#7e8b86;margin-bottom:1.4cqw}
.v-ppl-pip-switch .row{display:flex;align-items:center;gap:1.2cqw;padding:1.15cqw 1.2cqw;border-radius:.9cqw;font-family:var(--font-mono);font-size:1.3cqw;color:#cfdad6}
.v-ppl-pip-switch .row + .row{margin-top:.5cqw}
.v-ppl-pip-switch .row em{margin-left:auto;font-style:normal;color:#5d6b66}
.v-ppl-pip-switch .ck{position:relative;width:1.9cqw;height:1.9cqw;border-radius:50%;box-shadow:inset 0 0 0 .18cqw rgba(255,255,255,.18);flex:none}
.v-ppl-pip-switch .ck > u{content:"";position:absolute;inset:0;border-radius:50%;background:var(--accent) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 12.5l4 4L18 8' fill='none' stroke='%23052016' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/></svg>") center/78% no-repeat;transform:scale(0)}
.v-ppl-pip-switch .r1 .ck > u{transform:scale(1)}
.v-ppl-pip-switch .r2 .ck > u{animation:ppl-pip-switch-k2 6s linear infinite}
.v-ppl-pip-switch .r3 .ck > u{animation:ppl-pip-switch-k3 6s linear infinite}
.v-ppl-pip-switch .r4 .ck > u{animation:ppl-pip-switch-k4 6s linear infinite}
.v-ppl-pip-switch .r5 .ck > u{animation:ppl-pip-switch-k5 6s linear infinite}
.v-ppl-pip-switch .row.cur{background:rgba(255,255,255,.04)}
.v-ppl-pip-switch .sum{margin-top:1.6cqw;border-radius:1.1cqw;padding:1.5cqw 1.6cqw;background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 12%,transparent),color-mix(in srgb,var(--secondary) 6%,transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 22%,transparent);font-size:1.4cqw;line-height:1.5;color:#dbe7e3;opacity:0;animation:ppl-pip-switch-sum 6s linear infinite}
.v-ppl-pip-switch .sum b{color:var(--accent);font-weight:600}
.v-ppl-pip-switch .th{position:absolute;left:55cqw;right:3cqw;top:8.4cqw;height:26cqw;border-radius:1.6cqw;background:#111716;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);padding:1.8cqw 2cqw}
.v-ppl-pip-switch .th .t{font-size:1.3cqw;color:#7e8b86;margin-bottom:1.6cqw}
.v-ppl-pip-switch .bar{display:grid;grid-template-columns:10cqw 1fr 3.4cqw;align-items:center;gap:1cqw;font-size:1.25cqw;color:#cfdad6;margin-top:1.1cqw}
.v-ppl-pip-switch .bar s{height:1.3cqw;border-radius:.7cqw;background:rgba(255,255,255,.05);position:relative;overflow:hidden}
.v-ppl-pip-switch .bar s > u{content:"";position:absolute;left:0;top:0;bottom:0;width:var(--w);border-radius:.7cqw;background:linear-gradient(90deg,var(--secondary),var(--accent));transform-origin:0 50%;animation:ppl-pip-switch-grow 6s linear infinite}
.v-ppl-pip-switch .bar em{font-style:normal;text-align:right;color:#7e8b86;font-family:var(--font-mono)}
.v-ppl-pip-switch .sv{position:absolute;left:55cqw;top:37.2cqw;width:13cqw;height:14cqw;border-radius:1.6cqw;background:#111716;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);padding:1.6cqw 1.8cqw}
.v-ppl-pip-switch .sv span{display:block;font-size:1.2cqw;color:#7e8b86}
.v-ppl-pip-switch .sv b{display:block;font-size:4cqw;font-weight:600;color:#f4f4f5;letter-spacing:-.03em;margin-top:.8cqw}
.v-ppl-pip-switch .sv em{font-style:normal;font-size:1.1cqw;color:var(--accent)}
.v-ppl-pip-switch .pipsh{position:absolute;right:2.6cqw;bottom:2.6cqw;width:27cqw;height:15.19cqw;border-radius:1.75cqw;box-shadow:0 1.6cqw 3.6cqw rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.1);opacity:0;animation:ppl-pip-switch-sh 6s linear infinite}
.v-ppl-pip-switch .spk{position:absolute;inset:0;transform-origin:100% 100%;overflow:hidden;animation:ppl-pip-switch-pip 6s linear infinite}
.v-ppl-pip-switch .ft{position:absolute;inset:0;background:radial-gradient(45% 70% at 50% 30%,#3a7d8f 0%,rgba(58,125,143,0) 70%),radial-gradient(80% 60% at 50% 110%,#0d2a33,rgba(13,42,51,0) 70%),linear-gradient(180deg,#14303c,#0a161c)}
.v-ppl-pip-switch .strip{position:absolute;top:-4cqw;width:6cqw;height:64cqw;border-radius:3cqw;background:linear-gradient(180deg,rgba(150,235,255,.0),rgba(150,235,255,.5) 30%,rgba(150,235,255,.25) 70%,rgba(150,235,255,0));filter:blur(1.4cqw)}
.v-ppl-pip-switch .bust{font-size:12.5cqw;bottom:-1.5cqw;--shirt:linear-gradient(100deg,#0b1a20,#132a33 60%,#1c3c47);--neck:#183641;--skin:radial-gradient(100% 90% at 35% 35%,#2f5866,#14303a 72%);--hair:linear-gradient(180deg,#0c1d24,#123039);--fringe:#10242c;--rim:rgba(140,235,255,.5)}
.v-ppl-pip-switch .hg{animation:ppl-pip-switch-bob 1.5s ease-in-out infinite}
.v-ppl-pip-switch .grain{animation:ppl-pip-switch-grain .5s steps(1,end) infinite}
.v-ppl-pip-switch .tagf{position:absolute;left:4cqw;bottom:4cqw;display:flex;align-items:center;gap:1cqw;padding:.9cqw 1.6cqw .9cqw 1.2cqw;border-radius:3cqw;background:rgba(5,14,18,.55);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14);font-size:1.6cqw;font-weight:500;color:#f4f4f5;animation:ppl-pip-switch-tagf 6s linear infinite}
.v-ppl-pip-switch .talk{display:flex;align-items:center;gap:.25cqw;height:1.5cqw}
.v-ppl-pip-switch .talk i{width:.3cqw;height:100%;border-radius:.2cqw;background:var(--accent)}
.v-ppl-pip-switch .talk i:nth-child(1){animation:ppl-pip-switch-v1 1s ease-in-out infinite}
.v-ppl-pip-switch .talk i:nth-child(2){animation:ppl-pip-switch-v2 1s ease-in-out infinite}
.v-ppl-pip-switch .talk i:nth-child(3){animation:ppl-pip-switch-v1 1s ease-in-out infinite reverse}
.v-ppl-pip-switch .edge{position:absolute;inset:0;border-radius:6.5cqw;box-shadow:inset 0 0 0 .8cqw rgba(255,255,255,.22);opacity:0;animation:ppl-pip-switch-edge 6s linear infinite}
.v-ppl-pip-switch .badge{position:absolute;left:71.6cqw;top:39.6cqw;display:flex;align-items:center;gap:.6cqw;padding:.5cqw 1cqw .5cqw .8cqw;border-radius:2cqw;background:rgba(5,14,18,.66);font-size:1.3cqw;font-weight:500;color:#f4f4f5;opacity:0;animation:ppl-pip-switch-badge 6s linear infinite}
.v-ppl-pip-switch .badge .talk{height:1cqw}
.v-ppl-pip-switch .badge .talk i{width:.22cqw}
@keyframes ppl-pip-switch-pip{0%,26%{transform:translate(0cqw,0cqw) scale(1);clip-path:inset(0 round 0cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}42%,76%{transform:translate(-2.6cqw,-2.6cqw) scale(.27);clip-path:inset(0 round 6.5cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}92%,100%{transform:translate(0cqw,0cqw) scale(1);clip-path:inset(0 round 0cqw)}}
@keyframes ppl-pip-switch-prod{0%,26%{transform:scale(1.08);filter:blur(.8cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}42%,76%{transform:scale(1);filter:blur(0cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}92%,100%{transform:scale(1.08);filter:blur(.8cqw)}}
@keyframes ppl-pip-switch-edge{0%,30%{opacity:0}42%,76%{opacity:1}86%,100%{opacity:0}}
@keyframes ppl-pip-switch-sh{0%,36%{opacity:0}43%,75%{opacity:1}79%,100%{opacity:0}}
@keyframes ppl-pip-switch-badge{0%,42%{opacity:0;transform:translateY(.6cqw)}46%,74%{opacity:1;transform:translateY(0cqw)}77%,100%{opacity:0;transform:translateY(0cqw)}}
@keyframes ppl-pip-switch-tagf{0%,24%{opacity:1}30%,88%{opacity:0}94%,100%{opacity:1}}
@keyframes ppl-pip-switch-k2{0%,33%{transform:scale(0)}35%{transform:scale(1.2)}36.5%,90%{transform:scale(1)}92%,100%{transform:scale(0)}}
@keyframes ppl-pip-switch-k3{0%,38%{transform:scale(0)}40%{transform:scale(1.2)}41.5%,90%{transform:scale(1)}92%,100%{transform:scale(0)}}
@keyframes ppl-pip-switch-k4{0%,42%{transform:scale(0)}44%{transform:scale(1.2)}45.5%,90%{transform:scale(1)}92%,100%{transform:scale(0)}}
@keyframes ppl-pip-switch-k5{0%,46%{transform:scale(0)}48%{transform:scale(1.2)}49.5%,90%{transform:scale(1)}92%,100%{transform:scale(0)}}
@keyframes ppl-pip-switch-run{0%,47%{opacity:1}48.5%,90%{opacity:0}92%,100%{opacity:1}}
@keyframes ppl-pip-switch-done{0%,47%{opacity:0;transform:scale(.9)}48.5%{opacity:1;transform:scale(1.06)}50%,90%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(.9)}}
@keyframes ppl-pip-switch-sum{0%,44%{opacity:0;transform:translateY(1cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}49%,90%{opacity:1;transform:translateY(0cqw)}92%,100%{opacity:0;transform:translateY(0cqw)}}
@keyframes ppl-pip-switch-grow{0%,36%{transform:scaleX(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}48%,90%{transform:scaleX(1)}92%,100%{transform:scaleX(0)}}
@keyframes ppl-pip-switch-bob{0%,100%{transform:rotate(0deg) translateY(0em)}40%{transform:rotate(-1.5deg) translateY(-.015em)}75%{transform:rotate(1deg) translateY(.01em)}}
@keyframes ppl-pip-switch-grain{0%{transform:translate(0,0)}25%{transform:translate(-5cqw,3cqw)}50%{transform:translate(4cqw,-5cqw)}75%{transform:translate(-3cqw,-2cqw)}100%{transform:translate(2cqw,4cqw)}}
@keyframes ppl-pip-switch-v1{0%,100%{transform:scaleY(.3)}35%{transform:scaleY(1)}65%{transform:scaleY(.5)}}
@keyframes ppl-pip-switch-v2{0%,100%{transform:scaleY(.75)}30%{transform:scaleY(.3)}60%{transform:scaleY(1)}}

@container (max-aspect-ratio: 4/5){
.v-ppl-pip-switch .rail,.v-ppl-pip-switch .th,.v-ppl-pip-switch .phd .again{display:none}
.v-ppl-pip-switch .phd{left:8cqw;right:8cqw;top:12cqw;flex-wrap:wrap;font-size:3.6cqw;gap:2.4cqw}
.v-ppl-pip-switch .phd b{order:1;flex-basis:100%;font-size:8.4cqw;line-height:1.05}
.v-ppl-pip-switch .st{order:2;height:6.4cqw;width:22cqw;border-radius:3cqw;font-size:3.2cqw}
.v-ppl-pip-switch .st span{border-radius:3cqw;gap:1.2cqw}
.v-ppl-pip-switch .st .run i{width:1.6cqw;height:1.6cqw}
.v-ppl-pip-switch .log{left:8cqw;right:8cqw;width:auto;top:47cqw;height:auto;padding:4cqw;border-radius:3.4cqw}
.v-ppl-pip-switch .log .t{font-size:3cqw;margin-bottom:2.4cqw}
.v-ppl-pip-switch .row{font-size:3cqw;padding:1.6cqw 2cqw;gap:2.4cqw;border-radius:2cqw}
.v-ppl-pip-switch .row + .row{margin-top:.6cqw}
.v-ppl-pip-switch .ck{width:4cqw;height:4cqw}
.v-ppl-pip-switch .sum{font-size:3.1cqw;margin-top:2.4cqw;padding:3cqw;border-radius:2.4cqw}
.v-ppl-pip-switch .sv{left:8cqw;top:auto;bottom:5cqw;width:42cqw;height:auto;padding:3.6cqw 4cqw;border-radius:3.4cqw}
.v-ppl-pip-switch .sv span,.v-ppl-pip-switch .sv em{font-size:3.4cqw}
.v-ppl-pip-switch .sv b{font-size:14cqw;margin-top:1.4cqw}
.v-ppl-pip-switch .spk{animation-name:ppl-pip-switch-pipv}
.v-ppl-pip-switch .pipsh{right:5cqw;bottom:16cqw;width:32cqw;height:56.9cqw;border-radius:4cqw}
.v-ppl-pip-switch .bust{font-size:40cqw}
.v-ppl-pip-switch .tagf{left:8cqw;bottom:8cqh;font-size:5cqw;padding:2.4cqw 4cqw 2.4cqw 3cqw;gap:2.4cqw}
.v-ppl-pip-switch .talk{height:4cqw;gap:.7cqw}
.v-ppl-pip-switch .talk i{width:.8cqw}
.v-ppl-pip-switch .badge{left:auto;right:5cqw;top:auto;bottom:5cqw;white-space:nowrap;font-size:5.4cqw;padding:1.4cqw 2.6cqw 1.4cqw 2cqw;gap:1.6cqw;border-radius:4cqw}
.v-ppl-pip-switch .badge .talk{height:3.6cqw}
.v-ppl-pip-switch .badge .talk i{width:.7cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-ppl-pip-switch .phd{left:9cqw;top:4cqw;font-size:1.9cqw}
.v-ppl-pip-switch .phd b{font-size:3.6cqw}
.v-ppl-pip-switch .st{height:3.6cqw;width:13cqw;font-size:1.7cqw;border-radius:2cqw}
.v-ppl-pip-switch .st span{border-radius:2cqw}
.v-ppl-pip-switch .phd .again{padding:1cqw 2cqw;border-radius:1.2cqw}
.v-ppl-pip-switch .rail{width:6.4cqw}
.v-ppl-pip-switch .rail .m{width:3.6cqw;height:3.6cqw;border-radius:1cqw}
.v-ppl-pip-switch .rail i{width:3cqw;height:3cqw}
.v-ppl-pip-switch .log{left:9cqw;top:12cqw;width:53cqw;height:auto;padding:2.6cqw;border-radius:2.2cqw}
.v-ppl-pip-switch .log .t{font-size:1.8cqw;margin-bottom:1.8cqw}
.v-ppl-pip-switch .row{font-size:1.85cqw;padding:1.5cqw;gap:1.5cqw;border-radius:1.2cqw}
.v-ppl-pip-switch .ck{width:2.6cqw;height:2.6cqw}
.v-ppl-pip-switch .sum{font-size:1.95cqw;padding:2cqw;margin-top:2cqw;border-radius:1.6cqw}
.v-ppl-pip-switch .th{left:65cqw;top:12cqw;height:auto;padding:2.4cqw;border-radius:2.2cqw}
.v-ppl-pip-switch .th .t{font-size:1.8cqw;margin-bottom:1.6cqw}
.v-ppl-pip-switch .bar{grid-template-columns:12cqw 1fr 5cqw;font-size:1.7cqw;margin-top:1.6cqw}
.v-ppl-pip-switch .bar s{height:1.7cqw}
.v-ppl-pip-switch .sv{left:65cqw;top:43cqw;width:32cqw;height:auto;padding:2.4cqw 2.6cqw;border-radius:2.2cqw}
.v-ppl-pip-switch .sv span,.v-ppl-pip-switch .sv em{font-size:1.8cqw}
.v-ppl-pip-switch .sv b{font-size:6cqw}
.v-ppl-pip-switch .pipsh{height:27cqw;border-radius:2.4cqw}
.v-ppl-pip-switch .bust{font-size:22cqw}
.v-ppl-pip-switch .tagf{font-size:2.6cqw;padding:1.4cqw 2.4cqw 1.4cqw 1.8cqw}
.v-ppl-pip-switch .talk{height:2.2cqw}
.v-ppl-pip-switch .badge{left:72cqw;top:72cqw;font-size:2cqw;padding:.8cqw 1.4cqw .8cqw 1.1cqw}
.v-ppl-pip-switch .badge .talk{height:1.6cqw}
}
@keyframes ppl-pip-switch-pipv{0%,26%{transform:translate(0cqw,0cqw) scale(1);clip-path:inset(0 round 0cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}42%,76%{transform:translate(-5cqw,-16cqw) scale(.32);clip-path:inset(0 round 12cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}92%,100%{transform:translate(0cqw,0cqw) scale(1);clip-path:inset(0 round 0cqw)}}
`,
};

export const pplFootageTitle: SceneSpec = {
  id: "ppl-footage-title",
  slug: "mg-ppl-footage-title",
  name: "Cinematic Footage Title",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "letterbox-title-reveal",
  energy: "calm",
  settle: 4.2,
  colors: { ink: "#FFF6EA", accent: "#FFD6A3", secondary: "#FFCF8C", paper: "#000000" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["cinematic", "letterbox", "title-card"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen 2.0", maxChars: 22, role: "kicker" },
    { key: "headline", label: "Headline", default: "Made for", maxChars: 22, role: "headline" },
    { key: "accentLine", label: "Accent line", default: "deep work.", maxChars: 22, role: "headline" },
    { key: "caption", label: "Caption", default: "Out now on desktop and web", maxChars: 48, role: "caption" },
  ],
  html: `<div class="xfr"><div class="cam">
<div class="room"></div>
<div class="win"></div>
<div class="glow"></div>
<div class="bust"><i class="sh"></i><i class="nk"></i><span class="hg"><i class="hr"></i><i class="hd"></i></span></div>
<div class="desk"></div>
<div class="lap"></div>
<div class="mug"></div>
<div class="steam"></div>
<div class="beams"></div>
<div class="dust"><i style="left:30cqw;top:14cqw"></i><i style="left:38cqw;top:22cqw;opacity:.6"></i><i style="left:47cqw;top:11cqw"></i><i style="left:24cqw;top:28cqw;opacity:.5"></i><i style="left:58cqw;top:18cqw;opacity:.7"></i><i style="left:42cqw;top:33cqw;opacity:.6"></i><i style="left:34cqw;top:8cqw;opacity:.8"></i></div>
<div class="plant"><i style="left:4cqw;top:2cqw;transform:rotate(-18deg)"></i><i style="left:9cqw;top:8cqw;transform:rotate(16deg)"></i><i style="left:2cqw;top:14cqw;transform:rotate(-4deg)"></i></div>
</div>
</div>
<div class="grain"></div>
<div class="vig"></div>
<div class="shade"></div>
<div class="ttl">
<div class="kick" data-21st-slot="kicker"><i></i>{{kicker}}</div>
<h5><span class="a" data-21st-slot="headline">{{headline}}</span><span class="b" data-21st-slot="accentLine">{{accentLine}}</span></h5>
<div class="sub" data-21st-slot="caption">{{caption}}</div>
</div>
<div class="lb t"></div>
<div class="lb b"></div>
<div class="tc">00:00:12:08</div>
<div class="dip"></div>`,
  css: `
.v-ppl-footage-title{color:var(--ink);font-family:var(--font-body)}
.v-ppl-footage-title[data-backdrop="on"]{background:var(--paper)}
.v-ppl-footage-title[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-ppl-footage-title[data-backdrop="off"] .xfr,.v-ppl-footage-title[data-backdrop="off"] .grain,.v-ppl-footage-title[data-backdrop="off"] .vig,.v-ppl-footage-title[data-backdrop="off"] .dip{display:none}
.v-ppl-footage-title *,.v-ppl-footage-title *::before,.v-ppl-footage-title *::after{box-sizing:border-box}
.v-ppl-footage-title .grain{position:absolute;left:-30%;top:-30%;width:160%;height:160%;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23g)'/></svg>");background-size:24cqw 24cqw;mix-blend-mode:overlay;opacity:.34;pointer-events:none}
.v-ppl-footage-title .bust{position:absolute;left:50%;bottom:0;width:3.4em;height:3.6em;margin-left:-1.7em}
.v-ppl-footage-title .bust .sh{position:absolute;left:-.12em;right:-.12em;bottom:-.5em;height:2.05em;border-radius:1.3em 1.3em .2em .2em/.92em .92em .2em .2em;background:var(--shirt);box-shadow:inset -.08em .06em .14em var(--rim),inset .12em 0 .32em rgba(0,0,0,.28)}
.v-ppl-footage-title .bust .sh::before{content:"";position:absolute;left:50%;top:-.02em;width:.64em;height:.42em;margin-left:-.32em;background:var(--neck);clip-path:polygon(0 0,100% 0,50% 100%)}
.v-ppl-footage-title .bust .nk{position:absolute;left:50%;bottom:1.3em;width:.5em;height:.78em;margin-left:-.25em;border-radius:.22em;background:var(--neck)}
.v-ppl-footage-title .bust .hg{position:absolute;left:50%;bottom:1.84em;width:1.12em;height:1.66em;margin-left:-.56em;transform-origin:50% 100%}
.v-ppl-footage-title .bust .hd{position:absolute;left:0;right:0;bottom:0;height:1.46em;border-radius:50% 50% 47% 47%/56% 56% 44% 44%;background:radial-gradient(120% 70% at 24% -12%,var(--fringe) 0 40%,rgba(0,0,0,0) 68%),var(--skin);box-shadow:inset -.07em 0 .1em var(--rim)}
.v-ppl-footage-title .bust .hr{position:absolute;left:-.1em;right:-.1em;top:0;height:1.2em;border-radius:50% 50% 44% 44%/58% 58% 42% 42%;background:var(--hair);box-shadow:inset -.06em 0 .09em var(--rim)}
.v-ppl-footage-title .cam{position:absolute;inset:0;transform-origin:62% 45%;animation:ppl-footage-title-push 6s linear infinite}
.v-ppl-footage-title .room{position:absolute;inset:0;background:radial-gradient(60% 70% at 78% 18%,#ffcf8c 0%,rgba(255,207,140,0) 60%),linear-gradient(100deg,#160c09 0%,#2c1912 30%,#5a3221 55%,#a35c35 80%,#d98b4e 100%)}
.v-ppl-footage-title .win{position:absolute;left:44cqw;top:3cqw;width:52cqw;height:36cqw;border-radius:.3cqw;background:radial-gradient(70% 90% at 78% 12%,#fff6df 0%,#ffd394 35%,#f29a55 75%,#c8643a 100%);filter:blur(.35cqw);box-shadow:0 0 6cqw rgba(255,170,90,.55)}
.v-ppl-footage-title .win::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,0) 0 12.4cqw,rgba(40,20,12,.92) 12.4cqw 13cqw),linear-gradient(180deg,rgba(0,0,0,0) 0 54%,rgba(40,20,12,.92) 54% 55.6%,rgba(0,0,0,0) 55.6%)}
.v-ppl-footage-title .beams{position:absolute;left:-10cqw;top:-20cqw;width:120cqw;height:100cqw;background:repeating-linear-gradient(90deg,rgba(255,214,160,0) 0 5cqw,rgba(255,214,160,.16) 5cqw 9cqw,rgba(255,214,160,0) 9cqw 16cqw);transform:rotate(28deg);filter:blur(1.2cqw);mix-blend-mode:screen;-webkit-mask-image:linear-gradient(200deg,#000 20%,rgba(0,0,0,0) 70%);mask-image:linear-gradient(200deg,#000 20%,rgba(0,0,0,0) 70%);animation:ppl-footage-title-beams 6s ease-in-out infinite}
.v-ppl-footage-title .bust{left:62%;bottom:15cqw;font-size:8.6cqw;--shirt:linear-gradient(95deg,#0d0806,#1a100c 70%,#2a1810);--neck:#160d09;--skin:radial-gradient(100% 90% at 72% 30%,#3a2116,#120a07 70%);--hair:linear-gradient(180deg,#080504,#130b08);--fringe:#0d0806;--rim:rgba(255,190,120,.85)}
.v-ppl-footage-title .hg{animation:ppl-footage-title-bob 3s ease-in-out infinite}
.v-ppl-footage-title .glow{position:absolute;left:54cqw;top:24cqw;width:16cqw;height:12cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(150,190,255,.35),rgba(150,190,255,0));animation:ppl-footage-title-flick 1.5s ease-in-out infinite}
.v-ppl-footage-title .desk{position:absolute;left:-4cqw;right:-4cqw;top:40cqw;bottom:-4cqw;background:linear-gradient(180deg,#3a2216 0%,#1a0f0a 30%,#0b0605 100%);box-shadow:0 -.2cqw 0 rgba(255,190,130,.35)}
.v-ppl-footage-title .lap{position:absolute;left:53cqw;top:32.4cqw;width:17cqw;height:8cqw;background:linear-gradient(180deg,#1a1210,#0c0807);clip-path:polygon(4% 0,96% 0,100% 100%,0 100%);box-shadow:inset 0 .2cqw 0 rgba(255,190,130,.4)}
.v-ppl-footage-title .lap::after{content:"";position:absolute;left:47%;top:38%;width:6%;height:20%;border-radius:50%;background:rgba(255,220,180,.25)}
.v-ppl-footage-title .mug{position:absolute;left:76cqw;top:35.4cqw;width:3.6cqw;height:4.8cqw;border-radius:.3cqw .3cqw .9cqw .9cqw;background:linear-gradient(90deg,#120a08,#3b2418 70%,#7a4a2c)}
.v-ppl-footage-title .steam{position:absolute;left:76.6cqw;top:27cqw;width:2.4cqw;height:8cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,236,210,.28),rgba(255,236,210,0));filter:blur(.5cqw);animation:ppl-footage-title-steam 3s ease-in-out infinite}
.v-ppl-footage-title .plant{position:absolute;right:-5cqw;bottom:2cqw;width:18cqw;height:36cqw;filter:blur(1cqw)}
.v-ppl-footage-title .plant i{position:absolute;width:6cqw;height:18cqw;border-radius:50%;background:linear-gradient(180deg,#0f160c,#050704)}
.v-ppl-footage-title .dust{position:absolute;inset:0;animation:ppl-footage-title-dust 6s linear infinite}
.v-ppl-footage-title .dust i{position:absolute;width:.32cqw;height:.32cqw;border-radius:50%;background:rgba(255,236,200,.85);box-shadow:0 0 .6cqw rgba(255,220,170,.9)}
.v-ppl-footage-title .grain{opacity:.42;animation:ppl-footage-title-grain .5s steps(1,end) infinite}
.v-ppl-footage-title .vig{position:absolute;inset:0;background:radial-gradient(110% 90% at 55% 45%,rgba(0,0,0,0) 40%,rgba(0,0,0,.6) 100%)}
.v-ppl-footage-title .shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,4,2,.75) 0%,rgba(8,4,2,.35) 45%,rgba(8,4,2,0) 70%);opacity:0;animation:ppl-footage-title-shade 6s linear infinite}
.v-ppl-footage-title .ttl{position:absolute;left:7.5cqw;bottom:11.6cqw}
.v-ppl-footage-title .kick{display:flex;align-items:center;gap:1cqw;font-size:1.45cqw;letter-spacing:.3em;color:color-mix(in srgb,var(--ink) 82%,transparent);opacity:0;animation:ppl-footage-title-kick 6s linear infinite}
.v-ppl-footage-title .kick i{width:3.4cqw;height:1px;background:var(--accent)}
.v-ppl-footage-title h5{margin:1.4cqw 0 0;font-family:var(--font-display);font-weight:400;font-size:7.6cqw;line-height:.94;letter-spacing:-.015em;color:var(--ink)}
.v-ppl-footage-title h5 span{display:block;opacity:0}
.v-ppl-footage-title h5 .a{animation:ppl-footage-title-a 6s linear infinite}
.v-ppl-footage-title h5 .b{font-style:italic;color:var(--accent);animation:ppl-footage-title-b 6s linear infinite}
.v-ppl-footage-title .sub{margin-top:1.6cqw;font-size:1.55cqw;color:color-mix(in srgb,var(--ink) 72%,transparent);opacity:0;animation:ppl-footage-title-sub 6s linear infinite}
.v-ppl-footage-title .lb{position:absolute;left:0;right:0;height:7.2cqw;background:#000}
.v-ppl-footage-title .lb.t{top:0;animation:ppl-footage-title-lbt 6s linear infinite}
.v-ppl-footage-title .lb.b{bottom:0;animation:ppl-footage-title-lbb 6s linear infinite}
.v-ppl-footage-title .tc{position:absolute;right:3cqw;bottom:2.4cqw;font-family:var(--font-mono);font-size:1.15cqw;letter-spacing:.1em;color:rgba(255,255,255,.45);opacity:0;animation:ppl-footage-title-kick 6s linear infinite}
.v-ppl-footage-title .dip{position:absolute;inset:0;background:#000;animation:ppl-footage-title-dip 6s linear infinite}
@keyframes ppl-footage-title-push{0%{transform:scale(1) translate(0cqw,0cqw)}100%{transform:scale(1.09) translate(-1.6cqw,.4cqw)}}
@keyframes ppl-footage-title-beams{0%,100%{transform:rotate(28deg) translateX(0cqw);opacity:.85}50%{transform:rotate(28deg) translateX(2.5cqw);opacity:1}}
@keyframes ppl-footage-title-bob{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-2deg) translateY(.01em)}}
@keyframes ppl-footage-title-flick{0%,100%{opacity:.8}50%{opacity:1}}
@keyframes ppl-footage-title-steam{0%{transform:translateY(1cqw) scaleX(.8);opacity:0}40%{opacity:1}100%{transform:translateY(-3cqw) scaleX(1.3);opacity:0}}
@keyframes ppl-footage-title-dust{0%{transform:translate(0cqw,0cqw)}100%{transform:translate(-3cqw,-2.4cqw)}}
@keyframes ppl-footage-title-grain{0%{transform:translate(0,0)}25%{transform:translate(-5cqw,3cqw)}50%{transform:translate(4cqw,-5cqw)}75%{transform:translate(-3cqw,-2cqw)}100%{transform:translate(2cqw,4cqw)}}
@keyframes ppl-footage-title-dip{0%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.6,1)}9%,87%{opacity:0;animation-timing-function:cubic-bezier(.4,0,.6,1)}99%,100%{opacity:1}}
@keyframes ppl-footage-title-lbt{0%,2%{transform:translateY(-100%);animation-timing-function:cubic-bezier(.65,0,.35,1)}13%,100%{transform:translateY(0%)}}
@keyframes ppl-footage-title-lbb{0%,2%{transform:translateY(100%);animation-timing-function:cubic-bezier(.65,0,.35,1)}13%,100%{transform:translateY(0%)}}
@keyframes ppl-footage-title-shade{0%,14%{opacity:0}34%,84%{opacity:1}96%,100%{opacity:0}}
@keyframes ppl-footage-title-kick{0%,16%{opacity:0;transform:translateY(.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}28%,80%{opacity:1;transform:translateY(0cqw)}88%,100%{opacity:0;transform:translateY(0cqw)}}
@keyframes ppl-footage-title-a{0%,20%{opacity:0;transform:translateY(1.4cqw);filter:blur(1cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}36%,80%{opacity:1;transform:translateY(0cqw);filter:blur(0cqw)}89%,100%{opacity:0;transform:translateY(0cqw);filter:blur(.8cqw)}}
@keyframes ppl-footage-title-b{0%,27%{opacity:0;transform:translateY(1.4cqw);filter:blur(1cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}43%,81%{opacity:1;transform:translateY(0cqw);filter:blur(0cqw)}90%,100%{opacity:0;transform:translateY(0cqw);filter:blur(.8cqw)}}
@keyframes ppl-footage-title-sub{0%,35%{opacity:0;transform:translateY(.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}46%,80%{opacity:1;transform:translateY(0cqw)}88%,100%{opacity:0;transform:translateY(0cqw)}}

.v-ppl-footage-title .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:none}
@container (max-aspect-ratio: 4/5){.v-ppl-footage-title .xfr{transform:translate(-146cqw,0) scale(3.16)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-ppl-footage-title .xfr{transform:translate(-60cqw,0) scale(1.78)}}
.v-ppl-footage-title .ttl{right:7.5cqw}
.v-ppl-footage-title .kick i{height:.2cqw}
@container (max-aspect-ratio: 4/5){
.v-ppl-footage-title .ttl{left:8cqw;right:8cqw;top:9.5cqh;bottom:9cqh;display:flex;flex-direction:column}
.v-ppl-footage-title .kick{font-size:5.4cqw;gap:3cqw;letter-spacing:.18em}
.v-ppl-footage-title .kick i{width:9cqw;height:.4cqw}
.v-ppl-footage-title h5{margin-top:auto;font-size:19cqw}
.v-ppl-footage-title .sub{font-size:5.4cqw;margin-top:4cqw}
.v-ppl-footage-title .lb{height:6cqh}
.v-ppl-footage-title .tc{font-size:3cqw;right:8cqw;bottom:1.6cqh}
.v-ppl-footage-title .shade{background:linear-gradient(0deg,rgba(8,4,2,.82) 0%,rgba(8,4,2,.35) 45%,rgba(8,4,2,0) 70%)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-ppl-footage-title .ttl{left:7cqw;right:7cqw;bottom:13cqw}
.v-ppl-footage-title .kick{font-size:2.4cqw;gap:1.6cqw}
.v-ppl-footage-title .kick i{width:5cqw;height:.2cqw}
.v-ppl-footage-title h5{font-size:12cqw;margin-top:2cqw}
.v-ppl-footage-title .sub{font-size:2.6cqw;margin-top:2.4cqw}
.v-ppl-footage-title .lb{height:8cqw}
.v-ppl-footage-title .tc{font-size:1.8cqw;bottom:3cqw}
.v-ppl-footage-title .shade{background:linear-gradient(20deg,rgba(8,4,2,.8) 0%,rgba(8,4,2,.35) 45%,rgba(8,4,2,0) 70%)}
}
`,
};

export const pplSplitPresenter: SceneSpec = {
  id: "ppl-split-presenter",
  slug: "mg-ppl-split-presenter",
  name: "Presenter And Demo Split",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "split-presenter-synced-captions",
  energy: "default",
  settle: 4.4,
  colors: { ink: "#1D1A16", accent: "#3D63FF", secondary: "#D6F36A", paper: "#F2EDE4" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["presenter", "split-screen", "captions"],
  fields: [
    { key: "name", label: "Presenter", default: "Maya, Lumen", maxChars: 22, role: "name" },
    { key: "line1", label: "Caption line 1", default: "Ask Lumen to sum up your week,", maxChars: 40, role: "caption" },
    { key: "line2", label: "Caption line 2", default: "and it writes the update for you.", maxChars: 40, role: "caption" },
  ],
  html: `<div class="cam">
<div class="ft"><i style="left:-4cqw;top:-2cqw;width:16cqw;height:16cqw;background:rgba(255,236,200,.55)"></i><i style="left:28cqw;top:6cqw;width:7cqw;height:7cqw;background:rgba(255,240,210,.45)"></i><i style="left:2cqw;top:26cqw;width:8cqw;height:14cqw;background:rgba(40,60,40,.45)"></i></div>
<div class="bust"><i class="sh"></i><i class="nk"></i><span class="hg"><i class="hr"></i><i class="hd"></i></span></div>
<div class="grain"></div>
<div class="who"><span class="talk"><i></i><i></i><i></i></span><span data-21st-slot="name">{{name}}</span></div>
</div>
<div class="demo">
<div class="bar"><span class="m"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span><b>Lumen</b>Team updates<em><i></i><i></i></em></div>
<div class="ch"><span># general</span><span class="on"># launch</span><span># design</span><span># growth</span></div>
<div class="thread">
<div class="msg"><i></i><div><b>Jonah</b>Who can write the Friday update?</div></div>
<div class="mine">Sum up this week for the team</div>
<div class="typing"><i></i><i></i><i></i></div>
</div>
<div class="resp">
<div class="rh"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg>Week 41 update<em>Draft</em></div>
<div class="li l1"><i style="--c:#4870ff"></i><b>Shipped</b> templates gallery and the new onboarding</div>
<div class="li l2"><i style="--c:#ff8a5c"></i><b>Signups</b> up 38%, activation at 64%</div>
<div class="li l3"><i style="--c:#2fbf80"></i><b>Next</b> pricing page v3 goes live Tuesday</div>
</div>
<div class="inp"><span class="field"><span class="ph">Ask Lumen anything</span><span class="typ">Sum up this week for the team</span><span class="car"><i></i></span></span><span class="send"><svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg></span></div>
</div>
<div class="cap">
<div class="line la"><span class="base" data-21st-slot="line1">{{line1}}</span><span class="fill">{{line1}}</span></div>
<div class="line lb"><span class="base" data-21st-slot="line2">{{line2}}</span><span class="fill">{{line2}}</span></div>
</div>`,
  css: `
.v-ppl-split-presenter{color:var(--ink);font-family:var(--font-body)}
.v-ppl-split-presenter[data-backdrop="on"]{background:var(--paper)}
.v-ppl-split-presenter .demo{color:#1d1a16}
.v-ppl-split-presenter *,.v-ppl-split-presenter *::before,.v-ppl-split-presenter *::after{box-sizing:border-box}
.v-ppl-split-presenter .grain{position:absolute;left:-30%;top:-30%;width:160%;height:160%;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23g)'/></svg>");background-size:24cqw 24cqw;mix-blend-mode:overlay;opacity:.34;pointer-events:none}
.v-ppl-split-presenter .bust{position:absolute;left:50%;bottom:0;width:3.4em;height:3.6em;margin-left:-1.7em}
.v-ppl-split-presenter .bust .sh{position:absolute;left:-.12em;right:-.12em;bottom:-.5em;height:2.05em;border-radius:1.3em 1.3em .2em .2em/.92em .92em .2em .2em;background:var(--shirt);box-shadow:inset -.08em .06em .14em var(--rim),inset .12em 0 .32em rgba(0,0,0,.28)}
.v-ppl-split-presenter .bust .sh::before{content:"";position:absolute;left:50%;top:-.02em;width:.64em;height:.42em;margin-left:-.32em;background:var(--neck);clip-path:polygon(0 0,100% 0,50% 100%)}
.v-ppl-split-presenter .bust .nk{position:absolute;left:50%;bottom:1.3em;width:.5em;height:.78em;margin-left:-.25em;border-radius:.22em;background:var(--neck)}
.v-ppl-split-presenter .bust .hg{position:absolute;left:50%;bottom:1.84em;width:1.12em;height:1.66em;margin-left:-.56em;transform-origin:50% 100%}
.v-ppl-split-presenter .bust .hd{position:absolute;left:0;right:0;bottom:0;height:1.46em;border-radius:50% 50% 47% 47%/56% 56% 44% 44%;background:radial-gradient(120% 70% at 24% -12%,var(--fringe) 0 40%,rgba(0,0,0,0) 68%),var(--skin);box-shadow:inset -.07em 0 .1em var(--rim)}
.v-ppl-split-presenter .bust .hr{position:absolute;left:-.1em;right:-.1em;top:0;height:1.2em;border-radius:50% 50% 44% 44%/58% 58% 42% 42%;background:var(--hair);box-shadow:inset -.06em 0 .09em var(--rim)}
.v-ppl-split-presenter .cam{position:absolute;left:3.4cqw;top:3.4cqw;width:37cqw;height:41.4cqw;border-radius:2cqw;overflow:hidden;box-shadow:0 .3cqw .6cqw rgba(60,45,20,.12),0 1.6cqw 3.4cqw -1cqw rgba(60,45,20,.3)}
.v-ppl-split-presenter .ft{position:absolute;inset:0;background:radial-gradient(60% 70% at 22% 25%,rgba(255,228,180,.75),rgba(255,228,180,0) 65%),radial-gradient(70% 70% at 90% 90%,#3e5a46,rgba(62,90,70,0) 70%),linear-gradient(160deg,#b9c6aa 0%,#879d84 45%,#56705d 100%);animation:ppl-split-presenter-cam 6s cubic-bezier(.45,0,.55,1) infinite}
.v-ppl-split-presenter .ft i{position:absolute;border-radius:50%;filter:blur(.8cqw)}
.v-ppl-split-presenter .bust{font-size:9.6cqw;left:52%;bottom:-1.2cqw;--shirt:linear-gradient(100deg,#e9dcc6,#cbb894 60%,#a8946f);--neck:#7c6a55;--skin:radial-gradient(100% 90% at 32% 32%,#8f7a64,#5b4a3b 72%);--hair:linear-gradient(180deg,#2b2119,#3d2f24);--fringe:#33271e;--rim:rgba(255,232,190,.75)}
.v-ppl-split-presenter .hg{animation:ppl-split-presenter-bob 1.5s ease-in-out infinite}
.v-ppl-split-presenter .grain{animation:ppl-split-presenter-grain .5s steps(1,end) infinite}
.v-ppl-split-presenter .who{position:absolute;left:1.6cqw;bottom:1.6cqw;display:flex;align-items:center;gap:.9cqw;padding:.7cqw 1.3cqw .7cqw 1cqw;border-radius:2cqw;background:rgba(20,24,18,.55);color:#fff;font-size:1.3cqw;font-weight:500}
.v-ppl-split-presenter .talk{display:flex;align-items:center;gap:.22cqw;height:1.3cqw}
.v-ppl-split-presenter .talk i{width:.26cqw;height:100%;border-radius:.2cqw;background:var(--secondary)}
.v-ppl-split-presenter .talk i:nth-child(1){animation:ppl-split-presenter-v1 1s ease-in-out infinite}
.v-ppl-split-presenter .talk i:nth-child(2){animation:ppl-split-presenter-v2 1s ease-in-out infinite}
.v-ppl-split-presenter .talk i:nth-child(3){animation:ppl-split-presenter-v1 1s ease-in-out infinite reverse}
.v-ppl-split-presenter .demo{position:absolute;left:42.4cqw;top:3.4cqw;width:54.2cqw;height:41.4cqw;border-radius:2cqw;background:#fff;overflow:hidden;box-shadow:0 .3cqw .6cqw rgba(60,45,20,.1),0 1.6cqw 3.4cqw -1cqw rgba(60,45,20,.28)}
.v-ppl-split-presenter .bar{position:absolute;left:0;right:0;top:0;height:4.4cqw;border-bottom:1px solid #efebe4;display:flex;align-items:center;gap:1cqw;padding:0 1.8cqw;font-size:1.3cqw;color:#8b8478}
.v-ppl-split-presenter .bar .m{width:2.2cqw;height:2.2cqw;border-radius:.65cqw;background:linear-gradient(135deg,var(--accent),var(--secondary));display:flex;align-items:center;justify-content:center}
.v-ppl-split-presenter .bar .m svg{width:1.4cqw;height:1.4cqw;fill:#fff}
.v-ppl-split-presenter .bar b{color:#1d1a16;font-weight:600}
.v-ppl-split-presenter .bar em{margin-left:auto;font-style:normal;display:flex}
.v-ppl-split-presenter .bar em i{width:2cqw;height:2cqw;border-radius:50%;border:.2cqw solid #fff;margin-left:-.6cqw;background:linear-gradient(135deg,#ffcf8a,#ff7a59)}
.v-ppl-split-presenter .bar em i+i{background:linear-gradient(135deg,#9fd8ff,#5b6cff)}
.v-ppl-split-presenter .ch{position:absolute;left:0;top:4.4cqw;bottom:0;width:11.6cqw;background:#f8f6f2;border-right:1px solid #efebe4;padding:1.6cqw 1cqw;display:flex;flex-direction:column;gap:.4cqw;font-size:1.2cqw;color:#8b8478}
.v-ppl-split-presenter .ch span{padding:.5cqw .8cqw;border-radius:.6cqw}
.v-ppl-split-presenter .ch .on{background:#fff;color:#1d1a16;font-weight:500;box-shadow:0 .1cqw .3cqw rgba(60,45,20,.08)}
.v-ppl-split-presenter .thread{position:absolute;left:11.6cqw;right:0;top:4.4cqw;bottom:6.4cqw;padding:1.6cqw 2cqw;display:flex;flex-direction:column;gap:1.1cqw}
.v-ppl-split-presenter .msg{display:flex;gap:1cqw;font-size:1.25cqw;line-height:1.4;color:#4a443a}
.v-ppl-split-presenter .msg i{width:2.4cqw;height:2.4cqw;border-radius:50%;flex:none;background:linear-gradient(135deg,#9fd8ff,#5b6cff)}
.v-ppl-split-presenter .msg b{display:block;color:#1d1a16;font-weight:600}
.v-ppl-split-presenter .mine{align-self:flex-end;max-width:70%;padding:.8cqw 1.3cqw;border-radius:1.3cqw 1.3cqw .4cqw 1.3cqw;background:#1d1a16;color:#fff;font-size:1.25cqw;opacity:0;animation:ppl-split-presenter-mine 6s linear infinite}
.v-ppl-split-presenter .typing{display:flex;gap:.4cqw;padding:.9cqw 1.2cqw;border-radius:1.2cqw;background:#f3efe8;align-self:flex-start;opacity:0;animation:ppl-split-presenter-typing 6s linear infinite}
.v-ppl-split-presenter .typing i{width:.6cqw;height:.6cqw;border-radius:50%;background:#a59d90;animation:ppl-split-presenter-dot 1s ease-in-out infinite}
.v-ppl-split-presenter .resp{position:absolute;left:13.6cqw;right:2cqw;top:15.4cqw;border-radius:1.4cqw;padding:1.4cqw 1.6cqw;background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 6%,#fff),#fff6ef);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 14%,#fff);opacity:0;animation:ppl-split-presenter-resp 6s linear infinite}
.v-ppl-split-presenter .resp .rh{display:flex;align-items:center;gap:.7cqw;font-size:1.4cqw;font-weight:600}
.v-ppl-split-presenter .resp .rh svg{width:1.6cqw;height:1.6cqw;fill:var(--accent)}
.v-ppl-split-presenter .resp .rh em{margin-left:auto;font-style:normal;font-size:1cqw;font-weight:500;color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,#fff);border-radius:1cqw;padding:.2cqw .7cqw}
.v-ppl-split-presenter .li{display:flex;align-items:center;gap:.8cqw;margin-top:1cqw;font-size:1.2cqw;color:#3f3a32;opacity:0}
.v-ppl-split-presenter .li i{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--c);flex:none}
.v-ppl-split-presenter .li b{font-weight:600;color:#1d1a16}
.v-ppl-split-presenter .l1{animation:ppl-split-presenter-l1 6s linear infinite}
.v-ppl-split-presenter .l2{animation:ppl-split-presenter-l2 6s linear infinite}
.v-ppl-split-presenter .l3{animation:ppl-split-presenter-l3 6s linear infinite}
.v-ppl-split-presenter .inp{position:absolute;left:13.6cqw;right:2cqw;bottom:1.6cqw;height:3.8cqw;border-radius:1.4cqw;background:#f6f3ee;box-shadow:inset 0 0 0 1px #ebe6dd;display:flex;align-items:center;padding:0 .6cqw 0 1.4cqw;gap:1cqw}
.v-ppl-split-presenter .field{position:relative;flex:1;height:2cqw;display:flex;align-items:center}
.v-ppl-split-presenter .ph{position:absolute;left:0;font-size:1.25cqw;color:#aaa294;animation:ppl-split-presenter-ph 6s linear infinite}
.v-ppl-split-presenter .typ{font-family:var(--font-mono);font-size:1.2cqw;width:29ch;white-space:nowrap;color:#1d1a16;clip-path:inset(0 100% 0 0);animation:ppl-split-presenter-type 6s linear infinite}
.v-ppl-split-presenter .car{position:absolute;left:0;top:.2cqw;width:.13cqw;height:1.6cqw;font-family:var(--font-mono);font-size:1.2cqw;animation:ppl-split-presenter-car 6s linear infinite}
.v-ppl-split-presenter .car i{position:absolute;inset:0;background:var(--accent);animation:ppl-split-presenter-blink 1s steps(1,end) infinite}
.v-ppl-split-presenter .send{position:relative;width:2.6cqw;height:2.6cqw;border-radius:.9cqw;background:#1d1a16;display:flex;align-items:center;justify-content:center;animation:ppl-split-presenter-send 6s linear infinite}
.v-ppl-split-presenter .send svg{width:1.4cqw;height:1.4cqw;fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}

@keyframes ppl-split-presenter-cam{0%,100%{transform:scale(1.02)}50%{transform:scale(1.06) translateX(-.5cqw)}}
@keyframes ppl-split-presenter-bob{0%,100%{transform:rotate(0deg) translateY(0em)}30%{transform:rotate(1.6deg) translateY(-.015em)}70%{transform:rotate(-1.3deg) translateY(.01em)}}
@keyframes ppl-split-presenter-grain{0%{transform:translate(0,0)}25%{transform:translate(-5cqw,3cqw)}50%{transform:translate(4cqw,-5cqw)}75%{transform:translate(-3cqw,-2cqw)}100%{transform:translate(2cqw,4cqw)}}
@keyframes ppl-split-presenter-v1{0%,100%{transform:scaleY(.3)}35%{transform:scaleY(1)}65%{transform:scaleY(.5)}}
@keyframes ppl-split-presenter-v2{0%,100%{transform:scaleY(.75)}30%{transform:scaleY(.3)}60%{transform:scaleY(1)}}
@keyframes ppl-split-presenter-ph{0%,6%{opacity:1}7%,94%{opacity:0}97%,100%{opacity:1}}
@keyframes ppl-split-presenter-type{0%,7%{clip-path:inset(0 100% 0 0);opacity:1;animation-timing-function:steps(29,end)}24%,26%{clip-path:inset(0 0 0 0);opacity:1}27.5%,100%{clip-path:inset(0 0 0 0);opacity:0}}
@keyframes ppl-split-presenter-car{0%,7%{transform:translateX(0ch);opacity:1;animation-timing-function:steps(29,end)}24%,26%{transform:translateX(29ch);opacity:1}27%,94%{transform:translateX(0ch);opacity:0}96%,100%{transform:translateX(0ch);opacity:1}}
@keyframes ppl-split-presenter-blink{0%{opacity:1}50%{opacity:0}}
@keyframes ppl-split-presenter-send{0%,25%{transform:scale(1);background:#1d1a16}26%{transform:scale(.86)}28%,100%{transform:scale(1)}}
@keyframes ppl-split-presenter-mine{0%,26%{opacity:0;transform:translateY(1cqw) scale(.96);animation-timing-function:cubic-bezier(.2,.8,.2,1)}31%,86%{opacity:1;transform:translateY(0cqw) scale(1)}91%,100%{opacity:0;transform:translateY(0cqw) scale(1)}}
@keyframes ppl-split-presenter-typing{0%,30%{opacity:0}32%,37%{opacity:1}38.5%,100%{opacity:0}}
@keyframes ppl-split-presenter-dot{0%,100%{transform:translateY(0cqw);opacity:.5}30%{transform:translateY(-.3cqw);opacity:1}}
@keyframes ppl-split-presenter-resp{0%,37%{opacity:0;transform:translateY(1.2cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}42%,86%{opacity:1;transform:translateY(0cqw)}91%,100%{opacity:0;transform:translateY(0cqw)}}
@keyframes ppl-split-presenter-l1{0%,40%{opacity:0;transform:translateX(-.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}43%,86%{opacity:1;transform:translateX(0cqw)}91%,100%{opacity:0;transform:translateX(0cqw)}}
@keyframes ppl-split-presenter-l2{0%,43%{opacity:0;transform:translateX(-.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}46%,86%{opacity:1;transform:translateX(0cqw)}91%,100%{opacity:0;transform:translateX(0cqw)}}
@keyframes ppl-split-presenter-l3{0%,46%{opacity:0;transform:translateX(-.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}49%,86%{opacity:1;transform:translateX(0cqw)}91%,100%{opacity:0;transform:translateX(0cqw)}}
@keyframes ppl-split-presenter-la{0%,38%{opacity:1;transform:translateY(0cqw)}41%,96%{opacity:0;transform:translateY(-.6cqw)}97%{opacity:0;transform:translateY(.6cqw)}100%{opacity:1;transform:translateY(0cqw)}}
@keyframes ppl-split-presenter-lbv{0%,40%{opacity:0;transform:translateY(.6cqw)}43%,86%{opacity:1;transform:translateY(0cqw)}90%,100%{opacity:0;transform:translateY(-.6cqw)}}
@keyframes ppl-split-presenter-fa{0%,5%{clip-path:inset(-20% 100% -20% 0)}30%,100%{clip-path:inset(-20% -2% -20% 0)}}
@keyframes ppl-split-presenter-fb{0%,42%{clip-path:inset(-20% 100% -20% 0)}68%,100%{clip-path:inset(-20% -2% -20% 0)}}
@keyframes ppl-split-presenter-ma{0%,13%{transform:scaleX(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}19%,100%{transform:scaleX(1)}}
@keyframes ppl-split-presenter-mb{0%,45%{transform:scaleX(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}50%,100%{transform:scaleX(1)}}

.v-ppl-split-presenter .cap{position:absolute;left:4cqw;right:4cqw;top:46.4cqw;bottom:1.4cqw;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.2cqw}
.v-ppl-split-presenter .line{position:relative;font-family:var(--font-display);font-weight:700;font-size:2.6cqw;line-height:1.12;letter-spacing:-.02em;text-align:center;text-wrap:balance}
.v-ppl-split-presenter .line .base{display:block;color:color-mix(in srgb,var(--ink) 30%,transparent)}
.v-ppl-split-presenter .line .fill{position:absolute;inset:0;color:var(--ink);clip-path:inset(-20% 100% -20% 0)}
.v-ppl-split-presenter .la .fill{animation:ppl-split-presenter-fa 6s linear infinite}
.v-ppl-split-presenter .lb .fill{animation:ppl-split-presenter-fb 6s linear infinite}
.v-ppl-split-presenter .lb .fill{text-decoration:underline;text-decoration-color:var(--secondary);text-decoration-thickness:.24em;text-underline-offset:-.06em;text-decoration-skip-ink:none}
@container (max-aspect-ratio: 4/5){
.v-ppl-split-presenter .cam{left:8cqw;width:84cqw;top:7cqh;height:56cqw;border-radius:4cqw}
.v-ppl-split-presenter .bust{font-size:15cqw}
.v-ppl-split-presenter .who{left:3cqw;bottom:3cqw;font-size:5.4cqw;gap:2.4cqw;padding:1.8cqw 3.4cqw 1.8cqw 2.6cqw;border-radius:5cqw}
.v-ppl-split-presenter .talk{height:4.4cqw;gap:.7cqw}
.v-ppl-split-presenter .talk i{width:.8cqw}
.v-ppl-split-presenter .demo{left:8cqw;top:calc(7cqh + 60cqw);transform-origin:0 0;transform:scale(1.55);border-radius:2.2cqw}
.v-ppl-split-presenter .cap{left:7cqw;right:7cqw;top:calc(7cqh + 129cqw);bottom:6cqh;gap:1.2cqw}
.v-ppl-split-presenter .line{font-size:6.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-ppl-split-presenter .demo{left:26cqw;top:5cqw;transform-origin:0 0;transform:scale(1.3)}
.v-ppl-split-presenter .cam{left:4cqw;top:24cqw;width:30cqw;height:36cqw;z-index:2;box-shadow:0 0 0 .5cqw var(--paper),0 2cqw 4cqw -1cqw rgba(60,45,20,.4)}
.v-ppl-split-presenter .bust{font-size:9cqw}
.v-ppl-split-presenter .who{font-size:2.2cqw;padding:1cqw 1.8cqw 1cqw 1.4cqw;gap:1.2cqw}
.v-ppl-split-presenter .talk{height:2cqw}
.v-ppl-split-presenter .talk i{width:.4cqw}
.v-ppl-split-presenter .cap{left:6cqw;right:6cqw;top:65cqw;bottom:5cqw;gap:.8cqw}
.v-ppl-split-presenter .line{font-size:4.8cqw}
}
`,
};

export const PEOPLE_SCENES: SceneSpec[] = [pplWebcamBubble, pplLowerThird, pplPipSwitch, pplFootageTitle, pplSplitPresenter];
