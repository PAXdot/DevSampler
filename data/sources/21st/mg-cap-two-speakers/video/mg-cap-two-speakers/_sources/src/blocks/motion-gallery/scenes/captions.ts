// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const capKaraoke: SceneSpec = {
  id: "cap-karaoke",
  slug: "mg-cap-karaoke",
  name: "Karaoke Captions",
  kind: "element",
  job: "titles",
  language: "product-ui",
  mechanic: "karaoke-word-fill",
  energy: "default",
  settle: 3.9,
  colors: { ink: "#FFFFFF", accent: "#D8FF4A", secondary: "#808286", paper: "#07080C" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["captions", "subtitles", "karaoke", "voiceover"],
  fields: [
    { key: "caption", label: "Caption", default: "Meet Lumen. Your docs, your code, your team, in one place.", maxChars: 64, role: "caption" },
    { key: "source", label: "Source label", default: "rec 00:04:12", maxChars: 18, role: "label" },
  ],
  html: `<div class="bd"><div class="shot"><div class="app"><div class="side"><div class="brand"><span class="orb"></span><span class="ln" style="--w:50%"></span></div><div class="nav"><span class="ic" style="--c:#638AFF"></span><span class="ln" style="--w:62%"></span></div><div class="nav"><span class="ic" style="--c:#5EB0FF"></span><span class="ln" style="--w:48%"></span></div><div class="nav on"><span class="ic" style="--c:#F7B955"></span><span class="ln" style="--w:70%"></span></div><div class="nav"><span class="ic" style="--c:#34D399"></span><span class="ln" style="--w:54%"></span></div><div class="nav"><span class="ic" style="--c:#F472B6"></span><span class="ln" style="--w:40%"></span></div><div class="sec"></div><div class="nav"><span class="av" style="--c:#F59E6B"></span><span class="ln" style="--w:50%"></span></div><div class="nav"><span class="av" style="--c:#7DD3FC"></span><span class="ln" style="--w:64%"></span></div><div class="nav"><span class="av" style="--c:#BFC1C5"></span><span class="ln" style="--w:44%"></span></div></div><div class="main"><div class="crumbs"><span></span><span></span></div><div class="h"></div><div class="chips"><span class="chip g" style="--w:7cqw"></span><span class="chip" style="--w:9cqw"></span><span class="chip" style="--w:6cqw"></span></div><div class="para"><i style="--w:94%"></i><i style="--w:86%"></i><i style="--w:62%"></i></div><div class="cards"><div class="card"><div class="ct"></div><div class="bars"><i style="--h:38%"></i><i style="--h:52%"></i><i style="--h:46%"></i><i style="--h:70%"></i><i style="--h:64%"></i><i style="--h:88%"></i><i style="--h:76%"></i></div></div><div class="card"><div class="ct"></div><div class="kan"><i style="--c:#638AFF"></i><i style="--c:#F7B955"></i><i style="--c:#34D399"></i></div></div><div class="card"><div class="ct"></div><div class="ring"></div><div class="faces"><i style="--c:#F59E6B"></i><i style="--c:#7DD3FC"></i><i style="--c:#BFC1C5"></i></div></div></div></div><div class="ai"><div class="aih"><span class="orb"></span><span class="ln" style="--w:40%"></span></div><div class="bub me"><i style="--w:90%"></i><i style="--w:60%"></i></div><div class="bub bot"><i style="--w:96%"></i><i style="--w:88%"></i><i style="--w:92%"></i><i style="--w:54%"></i></div></div></div></div><div class="leak"></div><div class="scrim"></div></div>
<div class="tc" data-21st-slot="source"><b></b>{{source}}</div>
<div class="cc"><div class="cw" data-21st-slot="caption">{{caption|words}}</div></div>`,
  css: `
.v-cap-karaoke{color:var(--ink);font-family:var(--font-display)}
.v-cap-karaoke[data-backdrop="on"]{background:var(--paper)}
.v-cap-karaoke[data-backdrop="off"] .bd{display:none}
.v-cap-karaoke .bd{position:absolute;inset:0}
.v-cap-karaoke .shot{position:absolute;inset:-4%;animation:cap-karaoke-shot 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-karaoke .app{position:absolute;left:9cqw;top:5cqw;width:96cqw;height:60cqw;display:flex;background:#111319;border-radius:1.6cqw;box-shadow:0 0 0 1px rgba(255,255,255,.06),0 3cqw 8cqw rgba(0,0,0,.6);transform:perspective(140cqw) rotateX(9deg) rotateY(-11deg) rotateZ(1.5deg);transform-origin:30% 40%;filter:blur(.32cqw) saturate(1.15);overflow:hidden}
.v-cap-karaoke .side{width:17cqw;flex:none;background:#0C0E12;padding:2.2cqw 1.6cqw;display:flex;flex-direction:column;gap:1.1cqw;border-right:1px solid rgba(255,255,255,.05)}
.v-cap-karaoke .brand{display:flex;align-items:center;gap:.9cqw;font-weight:600;font-size:1.7cqw;margin-bottom:1cqw}
.v-cap-karaoke .orb{width:2.2cqw;height:2.2cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0,color-mix(in srgb,var(--secondary) 40%,#fff) 25%,var(--secondary) 60%,color-mix(in srgb,var(--secondary) 50%,#000) 100%);box-shadow:0 0 1.4cqw var(--secondary)}
.v-cap-karaoke .nav{display:flex;align-items:center;gap:.9cqw;padding:.55cqw .7cqw;border-radius:.7cqw}
.v-cap-karaoke .nav.on{background:color-mix(in srgb,var(--secondary) 22%,transparent)}
.v-cap-karaoke .ic{width:1.5cqw;height:1.5cqw;border-radius:.4cqw;background:var(--c);opacity:.9}
.v-cap-karaoke .av{width:1.6cqw;height:1.6cqw;border-radius:50%;background:var(--c)}
.v-cap-karaoke .ln{height:.9cqw;border-radius:.5cqw;background:rgba(255,255,255,.28);width:var(--w)}
.v-cap-karaoke .sec{height:.6cqw;width:40%;border-radius:.4cqw;background:rgba(255,255,255,.12);margin:1cqw 0 .2cqw .7cqw}
.v-cap-karaoke .main{flex:1;padding:2.6cqw 3cqw;display:flex;flex-direction:column;gap:1.4cqw}
.v-cap-karaoke .crumbs{display:flex;gap:.8cqw}
.v-cap-karaoke .crumbs span{height:.8cqw;width:6cqw;border-radius:.4cqw;background:rgba(255,255,255,.18)}
.v-cap-karaoke .h{height:2.8cqw;width:24cqw;border-radius:.6cqw;background:rgba(255,255,255,.72)}
.v-cap-karaoke .chips{display:flex;gap:.8cqw}
.v-cap-karaoke .chip{height:2cqw;width:var(--w);border-radius:2cqw;background:rgba(255,255,255,.1)}
.v-cap-karaoke .chip.g{background:color-mix(in srgb,var(--accent) 30%,transparent)}
.v-cap-karaoke .para{display:flex;flex-direction:column;gap:.8cqw}
.v-cap-karaoke .para i{display:block;height:.9cqw;border-radius:.5cqw;background:rgba(255,255,255,.16);width:var(--w)}
.v-cap-karaoke .cards{display:flex;gap:1.4cqw;margin-top:.6cqw}
.v-cap-karaoke .card{flex:1;height:15cqw;border-radius:1.2cqw;background:#171A22;border:1px solid rgba(255,255,255,.06);padding:1.4cqw;display:flex;flex-direction:column;gap:1cqw}
.v-cap-karaoke .ct{height:.8cqw;width:50%;border-radius:.4cqw;background:rgba(255,255,255,.3)}
.v-cap-karaoke .bars{flex:1;display:flex;align-items:flex-end;gap:.6cqw}
.v-cap-karaoke .bars i{flex:1;height:var(--h);border-radius:.3cqw .3cqw 0 0;background:linear-gradient(color-mix(in srgb,var(--secondary) 70%,#fff),var(--secondary))}
.v-cap-karaoke .kan{display:flex;flex-direction:column;gap:.7cqw}
.v-cap-karaoke .kan i{display:block;height:2.2cqw;border-radius:.5cqw;background:rgba(255,255,255,.07);border-left:.35cqw solid var(--c)}
.v-cap-karaoke .faces{display:flex;margin-top:auto}
.v-cap-karaoke .faces i{width:3cqw;height:3cqw;border-radius:50%;background:var(--c);border:.3cqw solid #171A22;margin-right:-.9cqw}
.v-cap-karaoke .ring{width:8cqw;height:8cqw;border-radius:50%;background:conic-gradient(#34D399 0 72%,rgba(255,255,255,.1) 72%);-webkit-mask:radial-gradient(circle,transparent 55%,#000 56%);mask:radial-gradient(circle,transparent 55%,#000 56%)}
.v-cap-karaoke .ai{width:24cqw;flex:none;background:linear-gradient(180deg,#191B1E,#131417);padding:2.2cqw 1.8cqw;display:flex;flex-direction:column;gap:1.2cqw;border-left:1px solid rgba(255,255,255,.06)}
.v-cap-karaoke .aih{display:flex;align-items:center;gap:.9cqw}
.v-cap-karaoke .bub{border-radius:1cqw;padding:1.1cqw;display:flex;flex-direction:column;gap:.6cqw}
.v-cap-karaoke .bub.me{align-self:flex-end;width:70%;background:color-mix(in srgb,var(--secondary) 30%,#111319)}
.v-cap-karaoke .bub.bot{background:rgba(255,255,255,.05);border:1px solid color-mix(in srgb,var(--secondary) 35%,transparent)}
.v-cap-karaoke .bub i{display:block;height:.75cqw;border-radius:.4cqw;background:rgba(255,255,255,.3);width:var(--w)}
.v-cap-karaoke .leak{position:absolute;width:70cqw;height:50cqw;right:-20cqw;top:-22cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 55%,transparent),color-mix(in srgb,var(--secondary) 18%,transparent) 55%,transparent);animation:cap-karaoke-leak 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-karaoke .scrim{position:absolute;inset:0;background:linear-gradient(0deg,rgba(4,5,9,.92) 0%,rgba(4,5,9,.6) 26%,rgba(4,5,9,0) 55%),radial-gradient(120% 90% at 50% 40%,transparent 50%,rgba(0,0,0,.45))}
@keyframes cap-karaoke-shot{0%,100%{transform:scale(1.04) translate(0,0)}50%{transform:scale(1.1) translate(-1.6cqw,-.8cqw)}}
@keyframes cap-karaoke-leak{0%,100%{transform:translate(0,0);opacity:.85}50%{transform:translate(-8cqw,4cqw);opacity:1}}
.v-cap-karaoke .tc{position:absolute;right:3.4cqw;top:3cqw;display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1 var(--font-mono);letter-spacing:.02em;color:color-mix(in srgb,var(--ink) 80%,transparent);padding:.7cqw 1.1cqw;border-radius:2cqw;background:color-mix(in srgb,var(--paper) 55%,transparent);animation:cap-karaoke-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-karaoke .tc b{width:.9cqw;height:.9cqw;border-radius:50%;background:var(--accent);--delay:.5s;box-shadow:0 0 .8cqw var(--accent);animation:cap-karaoke-rec 1s steps(1,end) infinite}
.v-cap-karaoke .cc{position:absolute;left:12cqw;right:12cqw;bottom:5.6cqw;display:flex;justify-content:center;filter:drop-shadow(0 .2cqw .7cqw rgba(0,0,0,.65));animation:cap-karaoke-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-karaoke .cw{text-align:center;font-weight:600;font-size:3.7cqw;line-height:1.32;letter-spacing:-.012em;text-wrap:balance}
.v-cap-karaoke .w{--delay:calc(.4s + var(--i) * .24s);display:inline-block;padding:0 .04em;transform-origin:50% 85%;background-image:linear-gradient(90deg,var(--ink) 33.34%,var(--accent) 33.34% 66.66%,var(--ink) 66.66%);background-size:300% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;color:transparent;animation:cap-karaoke-lit 6s cubic-bezier(.2,.8,.2,1) infinite,cap-karaoke-fill 6s linear infinite}
.v-cap-karaoke .w:last-child{animation:cap-karaoke-lit-last 6s cubic-bezier(.2,.8,.2,1) infinite,cap-karaoke-fill-last 6s linear infinite}
@container (max-aspect-ratio: 4/5){
  .v-cap-karaoke .tc{right:auto;left:8cqw;top:8cqh;font-size:5.6cqw;gap:2.4cqw;padding:2cqw 3.6cqw;border-radius:6cqw}
  .v-cap-karaoke .tc b{width:3cqw;height:3cqw}
  .v-cap-karaoke .cc{left:7cqw;right:7cqw;bottom:11cqh}
  .v-cap-karaoke .cw{font-size:8cqw;line-height:1.28}
  .v-cap-karaoke .app{left:-30cqw;top:22cqw;zoom:1.7}
  .v-cap-karaoke .leak{right:-50cqw;top:-10cqw;width:140cqw;height:120cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-karaoke .tc{right:5cqw;top:5cqw;font-size:2.3cqw;gap:1.2cqw;padding:1.1cqw 1.8cqw}
  .v-cap-karaoke .tc b{width:1.5cqw;height:1.5cqw}
  .v-cap-karaoke .cc{left:7cqw;right:7cqw;bottom:7cqw}
  .v-cap-karaoke .cw{font-size:5.4cqw}
  .v-cap-karaoke .app{left:-6cqw;top:12cqw;zoom:1.25}
}
@keyframes cap-karaoke-in{0%{opacity:0;transform:translateY(.8cqw)}5%,100%{opacity:1;transform:translateY(0)}}
@keyframes cap-karaoke-rec{0%{opacity:1}50%{opacity:.25}}
@keyframes cap-karaoke-lit{0%{opacity:.38;transform:none}1.5%{opacity:1;transform:translateY(-.06em) scale(1.05)}4.5%{opacity:1;transform:translateY(-.06em) scale(1.05)}6.5%,100%{opacity:1;transform:none}}
@keyframes cap-karaoke-fill{0%{background-position:100% 0}1.5%,4.5%{background-position:50% 0}6.5%,100%{background-position:0% 0}}
@keyframes cap-karaoke-lit-last{0%{opacity:.38;transform:none}1.5%,100%{opacity:1;transform:translateY(-.06em) scale(1.05)}}
@keyframes cap-karaoke-fill-last{0%{background-position:100% 0}1.5%,100%{background-position:50% 0}}
`,
};

export const capWordPop: SceneSpec = {
  id: "cap-word-pop",
  slug: "mg-cap-word-pop",
  name: "Word Pop Captions",
  kind: "element",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "word-pop-replace",
  energy: "punchy",
  settle: 3.8,
  colors: { ink: "#FFFFFF", accent: "#FFE14A", secondary: "#FF4FA3", paper: "#050608" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["captions", "shorts", "word-by-word", "vertical"],
  fields: [
    { key: "lead", label: "Spoken words", default: "Meet Lumen. Your docs, your code, your team,", maxChars: 44, role: "caption" },
    { key: "punch", label: "Final words", default: "one place.", maxChars: 16, role: "headline" },
    { key: "handle", label: "Handle", default: "@lumen.app", maxChars: 20, role: "label" },
    { key: "cta", label: "Footer", default: "follow for part 2", maxChars: 24, role: "cta" },
  ],
  html: `<div class="bd"><div class="night"><i class="bk" style="--x:6cqw;--y:14cqw;--s:22cqw;--c:rgba(255,92,170,.55);--e:rgba(255,150,210,.75);--o:0.8;--dx:4cqw;--dy:6cqw"></i><i class="bk" style="--x:62cqw;--y:6cqw;--s:30cqw;--c:rgba(255,180,80,.45);--e:rgba(255,210,140,.7);--o:0.75;--dx:-5cqw;--dy:4cqw"></i><i class="bk" style="--x:70cqw;--y:40cqw;--s:16cqw;--c:rgba(80,200,255,.5);--e:rgba(150,230,255,.75);--o:0.7;--dx:-3cqw;--dy:-4cqw"></i><i class="bk" style="--x:-6cqw;--y:52cqw;--s:26cqw;--c:rgba(70,109,255,.45);--e:rgba(131,165,255,.7);--o:0.7;--dx:5cqw;--dy:-3cqw"></i><i class="bk" style="--x:34cqw;--y:26cqw;--s:12cqw;--c:rgba(255,120,90,.55);--e:rgba(255,170,140,.75);--o:0.65;--dx:3cqw;--dy:5cqw"></i><i class="bk" style="--x:78cqw;--y:92cqw;--s:20cqw;--c:rgba(255,92,170,.45);--e:rgba(255,150,210,.7);--o:0.7;--dx:-4cqw;--dy:-6cqw"></i><i class="bk" style="--x:10cqw;--y:96cqw;--s:14cqw;--c:rgba(255,200,90,.5);--e:rgba(255,225,150,.7);--o:0.6;--dx:4cqw;--dy:-3cqw"></i><i class="bk" style="--x:44cqw;--y:2cqw;--s:10cqw;--c:rgba(110,220,255,.5);--e:rgba(170,240,255,.7);--o:0.6;--dx:-2cqw;--dy:3cqw"></i><i class="bk" style="--x:84cqw;--y:18cqw;--s:9cqw;--c:rgba(255,240,200,.6);--e:rgba(255,250,230,.8);--o:0.6;--dx:-3cqw;--dy:2cqw"></i><i class="bk" style="--x:22cqw;--y:140cqw;--s:24cqw;--c:rgba(255,120,200,.35);--e:rgba(255,170,220,.6);--o:0.55;--dx:3cqw;--dy:-4cqw"></i><div class="city"><i class="bld" style="--x:-4cqw;--w:24cqw;--h:74cqw;--c:rgba(255,196,120,.45)"></i><i class="bld" style="--x:18cqw;--w:18cqw;--h:98cqw;--c:rgba(140,200,255,.35)"></i><i class="bld" style="--x:34cqw;--w:26cqw;--h:62cqw;--c:rgba(255,170,120,.4)"></i><i class="bld" style="--x:58cqw;--w:20cqw;--h:104cqw;--c:rgba(255,214,150,.42)"></i><i class="bld" style="--x:76cqw;--w:30cqw;--h:70cqw;--c:rgba(131,165,255,.38)"></i><div class="street"></div><i class="neon" style="--x:8cqw;--y:104cqw;--w:22cqw;--h:9cqw;--c:#FF4FA3"></i><i class="neon" style="--x:62cqw;--y:92cqw;--w:8cqw;--h:24cqw;--c:#3FD8FF"></i><i class="neon" style="--x:38cqw;--y:118cqw;--w:16cqw;--h:6cqw;--c:#FFB547"></i><i class="refl" style="--x:8cqw;--w:22cqw;--c:rgba(255,79,163,.8)"></i><i class="refl" style="--x:62cqw;--w:8cqw;--c:rgba(63,216,255,.8)"></i><i class="refl" style="--x:38cqw;--w:16cqw;--c:rgba(255,181,71,.7)"></i><i class="refl" style="--x:80cqw;--w:10cqw;--c:rgba(131,165,255,.5)"></i></div></div><div class="shade"></div><div class="grain"></div></div>
<div class="hd" data-21st-slot="handle"><b></b>{{handle}}</div>
<div class="stack"><div class="lead" data-21st-slot="lead">{{lead|words}}</div><div class="punch" data-21st-slot="punch">{{punch|words}}</div></div>
<div class="ft" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-cap-word-pop{color:var(--ink);font-family:var(--font-display)}
.v-cap-word-pop[data-backdrop="on"]{background:var(--paper)}
.v-cap-word-pop[data-backdrop="off"] .bd{display:none}
.v-cap-word-pop .bd{position:absolute;left:50%;top:50%;width:max(100cqw,56.25cqh);aspect-ratio:9/16;transform:translate(-50%,-50%);container-type:size;overflow:hidden}
.v-cap-word-pop .night{position:absolute;inset:-8%;background:radial-gradient(60% 34% at 28% 18%,#3A3C3F 0%,transparent 70%),radial-gradient(70% 40% at 85% 62%,#0F3F73 0%,transparent 72%),radial-gradient(60% 30% at 20% 88%,#333437 0%,transparent 70%),linear-gradient(180deg,#0C0D10,#111215 48%,#060709);animation:cap-word-pop-pan 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-word-pop .bk{position:absolute;left:var(--x);top:var(--y);width:var(--s);height:var(--s);border-radius:50%;background:radial-gradient(circle,var(--c) 0 52%,var(--e) 60%,transparent 66%);opacity:var(--o);filter:blur(.5cqw);mix-blend-mode:screen;animation:cap-word-pop-bk 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-word-pop .bld{position:absolute;bottom:42cqw;left:var(--x);width:var(--w);height:var(--h);background:linear-gradient(90deg,transparent 0 30%,#0D0E11 30% 42%,transparent 42% 70%,#0D0E11 70%) 0 0/6cqw 100%,linear-gradient(180deg,transparent 0 55%,#0D0E11 55%) 0 0/100% 5cqw,linear-gradient(180deg,var(--c),transparent 120%);opacity:.92;border-radius:.6cqw .6cqw 0 0}
.v-cap-word-pop .neon{position:absolute;left:var(--x);top:var(--y);width:var(--w);height:var(--h);border-radius:2cqw;border:.9cqw solid var(--c);box-shadow:0 0 3cqw var(--c),inset 0 0 2cqw var(--c);animation:cap-word-pop-flick 6s steps(1,end) infinite;}
.v-cap-word-pop .street{position:absolute;left:0;right:0;bottom:0;height:48cqw;background:linear-gradient(180deg,rgba(13,14,17,0),#0D0E11 5cqw,#040507)}
.v-cap-word-pop .city{position:absolute;inset:0;filter:blur(1.15cqw)}
.v-cap-word-pop .refl{position:absolute;bottom:0;left:var(--x);width:var(--w);height:46cqw;background:linear-gradient(180deg,transparent 0%,var(--c) 18%,transparent 90%);filter:blur(1.8cqw);opacity:.45;transform:scaleX(.7)}
.v-cap-word-pop .shade{position:absolute;inset:0;background:radial-gradient(90% 46% at 50% 50%,rgba(0,0,0,.42),transparent 75%),linear-gradient(180deg,rgba(0,0,0,.35),transparent 20%,transparent 80%,rgba(0,0,0,.45))}
@keyframes cap-word-pop-pan{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-3cqw,-4cqw) scale(1.06)}}
@keyframes cap-word-pop-flick{0%{opacity:1}31%{opacity:.55}32.5%{opacity:1}34%{opacity:.6}35%{opacity:1}100%{opacity:1}}
@keyframes cap-word-pop-bk{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(var(--dx),var(--dy)) scale(1.1)}}
.v-cap-word-pop .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:40cqw;opacity:.18;mix-blend-mode:overlay}
.v-cap-word-pop .hd{position:absolute;left:50%;top:4.2cqw;transform:translateX(-50%);display:flex;align-items:center;gap:.7cqw;white-space:nowrap;font:600 1.6cqw/1 var(--font-body);padding:.7cqw 1.3cqw;border-radius:3cqw;background:color-mix(in srgb,var(--paper) 55%,transparent);animation:cap-word-pop-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-word-pop .hd b{width:1.5cqw;height:1.5cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--accent) 45%,var(--secondary))}
.v-cap-word-pop .ft{position:absolute;left:50%;bottom:4.2cqw;transform:translateX(-50%);white-space:nowrap;font:600 1.6cqw/1 var(--font-body);color:var(--paper);background:var(--accent);padding:.8cqw 1.6cqw;border-radius:3cqw;animation:cap-word-pop-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-word-pop .stack{position:absolute;left:6cqw;right:6cqw;top:50%;transform:translateY(-50%);display:grid;place-items:center;font-weight:700;font-size:9cqw;line-height:.94;letter-spacing:-.04em;text-align:center}
.v-cap-word-pop .lead,.v-cap-word-pop .punch{grid-area:1/1;display:grid;place-items:center}
.v-cap-word-pop .punch{display:flex;flex-direction:row;gap:.24em;color:var(--accent)}
.v-cap-word-pop .lead{animation:cap-word-pop-lead 6s linear infinite}
.v-cap-word-pop .lead .w{grid-area:1/1}
.v-cap-word-pop .w{--r:-4deg;display:block;opacity:0;padding:.06em .04em;text-shadow:.055em 0 0 var(--paper),-.055em 0 0 var(--paper),0 .055em 0 var(--paper),0 -.055em 0 var(--paper),.04em .04em 0 var(--paper),-.04em .04em 0 var(--paper),.04em -.04em 0 var(--paper),-.04em -.04em 0 var(--paper),0 .1em 0 var(--paper),0 0 .5em rgba(0,0,0,.5)}
.v-cap-word-pop .w:nth-child(even){--r:3deg}
.v-cap-word-pop .w:nth-child(3n){--r:-2deg}
.v-cap-word-pop .lead .w{--delay:calc(.25s + var(--i) * .3s);animation:cap-word-pop-pop 6s linear infinite}
.v-cap-word-pop .lead .w:last-child{animation:cap-word-pop-stay 6s linear infinite}
.v-cap-word-pop .punch .w{--delay:calc(2.9s + var(--i) * .16s);animation:cap-word-pop-stay 6s linear infinite}
@container (max-aspect-ratio: 4/5){
  .v-cap-word-pop .hd{top:8cqh;font-size:5.6cqw;gap:2.2cqw;padding:2.2cqw 4cqw;border-radius:8cqw}
  .v-cap-word-pop .hd b{width:5cqw;height:5cqw}
  .v-cap-word-pop .ft{bottom:8cqh;font-size:5.6cqw;padding:2.6cqw 5cqw;border-radius:8cqw}
  .v-cap-word-pop .stack{top:56cqh;font-size:16cqw}
  .v-cap-word-pop .punch{flex-direction:column;gap:0;font-size:1.1em}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-word-pop .hd{top:6cqw;font-size:2.8cqw;gap:1.2cqw;padding:1.2cqw 2.2cqw}
  .v-cap-word-pop .hd b{width:2.6cqw;height:2.6cqw}
  .v-cap-word-pop .ft{bottom:6cqw;font-size:2.8cqw;padding:1.4cqw 2.8cqw}
  .v-cap-word-pop .stack{font-size:12.5cqw}
  .v-cap-word-pop .punch{flex-direction:column;gap:0}
}
@keyframes cap-word-pop-fade{0%{opacity:0}5%,100%{opacity:1}}
@keyframes cap-word-pop-lead{0%,47%{opacity:1}48.5%,100%{opacity:0}}
@keyframes cap-word-pop-pop{0%{opacity:0;transform:translateY(.14em) scale(.5) rotate(var(--r))}1.6%{opacity:1;transform:translateY(0) scale(1.14) rotate(calc(var(--r) * -.33))}2.8%{opacity:1;transform:scale(.96)}3.6%{opacity:1;transform:scale(1)}4.6%{opacity:1;transform:scale(1.03)}5%,100%{opacity:0;transform:translateY(-.06em) scale(.9)}}
@keyframes cap-word-pop-stay{0%{opacity:0;transform:translateY(.14em) scale(.5) rotate(var(--r))}1.6%{opacity:1;transform:translateY(0) scale(1.14) rotate(calc(var(--r) * -.33))}2.8%{opacity:1;transform:scale(.96)}3.6%,100%{opacity:1;transform:scale(1)}}
`,
};

export const capBoxed: SceneSpec = {
  id: "cap-boxed",
  slug: "mg-cap-boxed",
  name: "Boxed Caption Lines",
  kind: "element",
  job: "titles",
  language: "editorial",
  mechanic: "caption-boxes-stack-up",
  energy: "calm",
  settle: 3.6,
  colors: { ink: "#141210", accent: "#FF5A3C", secondary: "#D9B48A", paper: "#FFFFFF" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["captions", "subtitles", "boxed", "talking-head"],
  fields: [
    { key: "line1", label: "First line", default: "Your docs, your code, your team,", maxChars: 34, role: "caption" },
    { key: "line2", label: "Second line", default: "all in one place.", maxChars: 34, role: "caption" },
    { key: "badge", label: "Badge", default: "rec 00:00:12", maxChars: 18, role: "label" },
  ],
  html: `<div class="bd"><div class="shot"><div class="wall"></div><div class="sun" style="left:58cqw"></div><div class="sun" style="left:78cqw;width:9cqw;opacity:.7"></div><div class="leaf" style="left:-2cqw;top:2cqw;width:16cqw;height:20cqw"></div><div class="leaf" style="left:8cqw;top:-4cqw;width:12cqw;height:14cqw;opacity:.85"></div><div class="leaf" style="left:-4cqw;top:16cqw;width:12cqw;height:14cqw;opacity:.9"></div><div class="desk"></div><div class="lap"><div class="scr"><div class="sb"><i style="--w:70%"></i><i style="--w:52%"></i><i style="--w:86%"></i><i style="--w:60%"></i><i style="--w:44%"></i></div><div class="mn"><i style="--h:8cqw;--c:#E3E5E9"></i><i style="--h:8cqw;--c:#FFE7CC"></i><i style="--h:5cqw;--c:#DDF5EA"></i><i style="--h:5cqw;--c:#EDEBE6"></i><i style="--h:3cqw;--c:#EDEBE6"></i><i style="--h:3cqw;--c:#EDEBE6"></i></div></div></div><div class="base"></div><div class="mug"></div></div><div class="vig"></div></div>
<div class="rec" data-21st-slot="badge"><b></b>{{badge}}</div>
<div class="stack"><div class="row r1"><span class="box" data-21st-slot="line1">{{line1|words}}</span></div><div class="grow"><div class="row r2"><span class="box" data-21st-slot="line2">{{line2|words}}</span></div></div></div>`,
  css: `
.v-cap-boxed{color:var(--ink);font-family:var(--font-display)}
.v-cap-boxed[data-backdrop="on"]{background:color-mix(in srgb,var(--secondary) 70%,var(--paper))}
.v-cap-boxed[data-backdrop="off"] .bd{display:none}
.v-cap-boxed .bd{position:absolute;left:50%;top:50%;height:max(100cqh,56.25cqw);aspect-ratio:16/9;transform:translate(-50%,-50%);container-type:size;overflow:hidden}
.v-cap-boxed .shot{position:absolute;inset:-5%;animation:cap-boxed-hand 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-boxed .wall{position:absolute;inset:0;background:linear-gradient(172deg,#F8EAD3 0%,#F0D6B2 38%,#DDB386 66%,#C08E62 100%)}
.v-cap-boxed .sun{position:absolute;top:-10cqw;width:16cqw;height:46cqw;background:rgba(255,251,238,.9);transform:skewX(-24deg);filter:blur(2.4cqw)}
.v-cap-boxed .leaf{position:absolute;border-radius:50%;background:radial-gradient(circle at 40% 35%,#7FA65E,#3F6B35 60%,#2B4A26);filter:blur(1.5cqw)}
.v-cap-boxed .desk{position:absolute;left:0;right:0;bottom:0;height:22cqw;background:linear-gradient(180deg,#B07A4E 0%,#8A5733 60%,#6C4126);filter:blur(.6cqw)}
.v-cap-boxed .lap{position:absolute;left:36cqw;top:12cqw;width:52cqw;height:31cqw;border-radius:1.3cqw;background:#1C1C1F;padding:1cqw;filter:blur(.75cqw);box-shadow:0 2cqw 4cqw rgba(70,35,10,.45)}
.v-cap-boxed .scr{width:100%;height:100%;border-radius:.6cqw;background:#FBFAF7;display:flex;overflow:hidden}
.v-cap-boxed .scr .sb{width:12cqw;background:#EDEFF3;padding:2cqw 1.4cqw;display:flex;flex-direction:column;gap:1.2cqw}
.v-cap-boxed .scr .sb i{display:block;height:1.2cqw;border-radius:.6cqw;background:#CCCED2;width:var(--w)}
.v-cap-boxed .scr .mn{flex:1;padding:2.4cqw;display:grid;grid-template-columns:1fr 1fr;gap:1.4cqw;align-content:start}
.v-cap-boxed .scr .mn i{display:block;height:var(--h);border-radius:.8cqw;background:var(--c)}
.v-cap-boxed .base{position:absolute;left:32cqw;top:43.4cqw;width:60cqw;height:2cqw;border-radius:0 0 1.6cqw 1.6cqw;background:linear-gradient(#D7D5D2,#9E9B97);filter:blur(.7cqw)}
.v-cap-boxed .mug{position:absolute;left:13cqw;top:31cqw;width:10cqw;height:12cqw;border-radius:1cqw 1cqw 2.4cqw 2.4cqw;background:linear-gradient(90deg,#E9E2D6,#FFFDF8 45%,#CFC5B6);filter:blur(1cqw)}
.v-cap-boxed .mug::after{content:"";position:absolute;right:-3cqw;top:3cqw;width:4cqw;height:5cqw;border-radius:50%;border:1.1cqw solid #E2DACC}
.v-cap-boxed .vig{position:absolute;inset:0;background:radial-gradient(120% 100% at 50% 35%,transparent 55%,rgba(60,30,10,.35)),linear-gradient(0deg,rgba(40,20,5,.35),transparent 40%)}
@keyframes cap-boxed-hand{0%,100%{transform:translate(0,0) rotate(0deg) scale(1.02)}27%{transform:translate(-.8cqw,.4cqw) rotate(-.3deg) scale(1.03)}58%{transform:translate(.6cqw,-.5cqw) rotate(.25deg) scale(1.05)}81%{transform:translate(-.3cqw,.3cqw) rotate(-.15deg) scale(1.035)}}
.v-cap-boxed .rec{position:absolute;right:3.2cqw;top:3cqw;display:flex;gap:.7cqw;align-items:center;font:600 1.3cqw/1 var(--font-mono);color:var(--paper);background:color-mix(in srgb,var(--ink) 55%,transparent);padding:.7cqw 1.1cqw;border-radius:2cqw;animation:cap-boxed-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-boxed .rec b{width:.8cqw;height:.8cqw;border-radius:50%;--delay:.2s;background:var(--accent);animation:cap-boxed-rec 1s steps(1,end) infinite}
.v-cap-boxed .stack{position:absolute;left:8cqw;right:8cqw;bottom:5.5cqw;display:flex;flex-direction:column;align-items:center;font-size:3.4cqw;font-weight:600;line-height:1.62;letter-spacing:-.012em;text-align:center}
.v-cap-boxed .row{max-width:100%;text-wrap:balance}
.v-cap-boxed .grow{display:grid;grid-template-rows:0fr;width:100%;animation:cap-boxed-grow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-boxed .grow>.row{min-height:0;margin:0 auto;padding-top:.32em}
.v-cap-boxed .box{background:var(--paper);padding:.3em .62em;border-radius:.5em;-webkit-box-decoration-break:clone;box-decoration-break:clone;box-shadow:0 .5cqw 1.8cqw rgba(60,30,10,.26),0 .1cqw .3cqw rgba(60,30,10,.2),inset .2em 0 0 var(--accent)}
.v-cap-boxed .r1{animation:cap-boxed-row 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-boxed .r1 .box{animation:cap-boxed-mark 6s linear infinite}
.v-cap-boxed .r2{--delay:1.7s;opacity:0;animation:cap-boxed-row 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-boxed .w{display:inline-block;opacity:.24;animation:cap-boxed-word 6s linear infinite}
.v-cap-boxed .r1 .w{--delay:calc(.45s + var(--i) * .14s)}
.v-cap-boxed .r2 .w{--delay:calc(1.95s + var(--i) * .14s)}
@container (max-aspect-ratio: 4/5){
  .v-cap-boxed .rec{right:auto;left:8cqw;top:8cqh;font-size:5.6cqw;gap:2.4cqw;padding:2.2cqw 3.6cqw;border-radius:6cqw}
  .v-cap-boxed .rec b{width:3cqw;height:3cqw}
  .v-cap-boxed .stack{left:7cqw;right:7cqw;bottom:10cqh;font-size:6.6cqw;line-height:1.6}
  .v-cap-boxed .box{box-shadow:0 1.4cqw 4cqw rgba(60,30,10,.26),inset .2em 0 0 var(--accent)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-boxed .rec{right:5cqw;top:5cqw;font-size:2.3cqw;gap:1.2cqw;padding:1.1cqw 1.8cqw}
  .v-cap-boxed .rec b{width:1.4cqw;height:1.4cqw}
  .v-cap-boxed .stack{left:6cqw;right:6cqw;bottom:7cqw;font-size:4.6cqw}
}
@keyframes cap-boxed-fade{0%{opacity:0}5%,100%{opacity:1}}
@keyframes cap-boxed-rec{0%{opacity:1}50%{opacity:.25}}
@keyframes cap-boxed-row{0%,3%{opacity:0;transform:translateY(.9em) scale(.94)}7%,100%{opacity:1;transform:none}}
@keyframes cap-boxed-grow{0%,28%{grid-template-rows:0fr}33%,100%{grid-template-rows:1fr}}
@keyframes cap-boxed-mark{0%,29%{box-shadow:0 .5cqw 1.8cqw rgba(60,30,10,.26),0 .1cqw .3cqw rgba(60,30,10,.2),inset .2em 0 0 var(--accent)}32%,100%{box-shadow:0 .5cqw 1.8cqw rgba(60,30,10,.2),0 .1cqw .3cqw rgba(60,30,10,.16),inset 0 0 0 var(--accent)}}
@keyframes cap-boxed-word{0%{opacity:.24}1.5%,100%{opacity:1}}
`,
};

export const capTypewriter: SceneSpec = {
  id: "cap-typewriter",
  slug: "mg-cap-typewriter",
  name: "Typewriter Transcript",
  kind: "element",
  job: "titles",
  language: "pixel-terminal",
  mechanic: "typed-transcript-scroll",
  energy: "calm",
  settle: 3.4,
  colors: { ink: "#EDEFEA", accent: "#FFB224", secondary: "#5EEAD4", paper: "#050807" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["captions", "transcript", "typewriter", "screen-recording"],
  fields: [
    { key: "prev", label: "Previous line", default: "Meet Lumen.", maxChars: 28, role: "caption" },
    { key: "line", label: "Current line", default: "Your docs, your code, your team, in one place.", maxChars: 56, role: "caption" },
    { key: "label", label: "Panel label", default: "live captions · en", maxChars: 22, role: "label" },
  ],
  html: `<div class="bd"><div class="shot"><div class="ed"><div class="tree"><i style="--p:0cqw;--c:#5EEAD4;--w:9cqw"></i><i style="--p:1.4cqw;--c:#82AAFF;--w:7cqw"></i><i style="--p:1.4cqw;--c:#FFCB6B;--w:8cqw"></i><i style="--p:2.8cqw;--c:#87A8FF;--w:6cqw"></i><i style="--p:2.8cqw;--c:#87A8FF;--w:9cqw"></i><i style="--p:1.4cqw;--c:#F78C6C;--w:6cqw"></i><i style="--p:0cqw;--c:#5EEAD4;--w:8cqw"></i><i style="--p:1.4cqw;--c:#C3E88D;--w:10cqw"></i><i style="--p:1.4cqw;--c:#82AAFF;--w:7cqw"></i><i style="--p:0cqw;--c:#7FDBCA;--w:6cqw"></i></div><div class="code"><div class="tabs"><b></b><b></b><b></b></div><div class="l"><span class="n" style="--i:0.0cqw"></span><i style="--w:5cqw;--c:#82AAFF"></i><i style="--w:3cqw;--c:#87A8FF"></i><i style="--w:11cqw;--c:#87A8FF"></i></div><div class="l"><span class="n" style="--i:0.0cqw"></span><i style="--w:3cqw;--c:#C3E88D"></i><i style="--w:6cqw;--c:#87A8FF"></i><i style="--w:4cqw;--c:#82AAFF"></i></div><div class="l"><span class="n" style="--i:1.8cqw"></span><i style="--w:4cqw;--c:#7FDBCA"></i><i style="--w:4cqw;--c:#C3E88D"></i><i style="--w:9cqw;--c:#87A8FF"></i><i style="--w:4cqw;--c:#7FDBCA"></i></div><div class="l"><span class="n" style="--i:1.8cqw"></span><i style="--w:9cqw;--c:#87A8FF"></i></div><div class="l"><span class="n" style="--i:3.6cqw"></span><i style="--w:3cqw;--c:#C3E88D"></i><i style="--w:5cqw;--c:#FFCB6B"></i></div><div class="l"><span class="n" style="--i:3.6cqw"></span><i style="--w:5cqw;--c:#C3E88D"></i><i style="--w:4cqw;--c:#C3E88D"></i><i style="--w:7cqw;--c:#C3E88D"></i><i style="--w:5cqw;--c:#87A8FF"></i></div><div class="l"><span class="n" style="--i:3.6cqw"></span><i style="--w:8cqw;--c:#87A8FF"></i><i style="--w:11cqw;--c:#F78C6C"></i></div><div class="l hi"><span class="n" style="--i:1.8cqw"></span><i style="--w:3cqw;--c:#C3E88D"></i></div><div class="l"><span class="n" style="--i:1.8cqw"></span><i style="--w:10cqw;--c:#F78C6C"></i><i style="--w:11cqw;--c:#82AAFF"></i></div><div class="l"><span class="n" style="--i:3.6cqw"></span><i style="--w:10cqw;--c:#C3E88D"></i><i style="--w:10cqw;--c:#FFCB6B"></i><i style="--w:7cqw;--c:#7FDBCA"></i></div><div class="l"><span class="n" style="--i:5.4cqw"></span><i style="--w:6cqw;--c:#87A8FF"></i><i style="--w:7cqw;--c:#C3E88D"></i></div><div class="l"><span class="n" style="--i:5.4cqw"></span><i style="--w:8cqw;--c:#F78C6C"></i><i style="--w:10cqw;--c:#FFCB6B"></i><i style="--w:4cqw;--c:#87A8FF"></i><i style="--w:11cqw;--c:#82AAFF"></i></div><div class="l"><span class="n" style="--i:3.6cqw"></span><i style="--w:8cqw;--c:#7FDBCA"></i><i style="--w:10cqw;--c:#82AAFF"></i></div><div class="l"><span class="n" style="--i:1.8cqw"></span><i style="--w:4cqw;--c:rgba(220,235,228,.35)"></i></div><div class="l"><span class="n" style="--i:0.0cqw"></span><i style="--w:8cqw;--c:#F78C6C"></i><i style="--w:8cqw;--c:#C3E88D"></i><i style="--w:10cqw;--c:#C3E88D"></i></div><div class="l"><span class="n" style="--i:0.0cqw"></span><i style="--w:4cqw;--c:rgba(220,235,228,.35)"></i><i style="--w:4cqw;--c:#FFCB6B"></i><i style="--w:10cqw;--c:#F78C6C"></i><i style="--w:4cqw;--c:#87A8FF"></i></div><div class="l"><span class="n" style="--i:1.8cqw"></span><i style="--w:10cqw;--c:#FFCB6B"></i><i style="--w:9cqw;--c:#F78C6C"></i><i style="--w:8cqw;--c:#87A8FF"></i></div><div class="l"><span class="n" style="--i:1.8cqw"></span><i style="--w:8cqw;--c:#7FDBCA"></i><i style="--w:4cqw;--c:#82AAFF"></i><i style="--w:3cqw;--c:#7FDBCA"></i><i style="--w:7cqw;--c:#7FDBCA"></i></div><div class="l"><span class="n" style="--i:3.6cqw"></span><i style="--w:9cqw;--c:#82AAFF"></i><i style="--w:10cqw;--c:#87A8FF"></i></div></div><div class="chat"><div class="bb me"><i style="--w:90%"></i><i style="--w:55%"></i></div><div class="bb"><i style="--w:94%"></i><i style="--w:86%"></i><i style="--w:70%"></i></div><div class="ok"><b style="--w:7cqw;--c:rgba(94,234,212,.4)"></b><b style="--w:5cqw;--c:rgba(255,203,107,.35)"></b></div><div class="bb"><i style="--w:80%"></i><i style="--w:92%"></i></div></div></div><div class="glow"></div></div><div class="scrim"></div></div>
<div class="panel"><div class="lab" data-21st-slot="label"><b></b>{{label}}</div><div class="rows"><div class="row prev"><span class="ts">00:01</span><span class="tx" data-21st-slot="prev">{{prev|words}}<i class="car"></i></span></div><div class="grow"><div class="row cur"><span class="ts">00:02</span><span class="tx" data-21st-slot="line">{{line|words}}<i class="car"></i></span></div></div></div></div>`,
  css: `
.v-cap-typewriter{color:var(--ink);font-family:var(--font-mono)}
.v-cap-typewriter[data-backdrop="on"]{background:var(--paper)}
.v-cap-typewriter[data-backdrop="off"] .bd{display:none}
.v-cap-typewriter .bd{position:absolute;left:50%;top:50%;height:max(100cqh,56.25cqw);aspect-ratio:16/9;transform:translate(-50%,-50%);container-type:size;overflow:hidden}
.v-cap-typewriter .shot{position:absolute;inset:-4%;filter:blur(.42cqw);animation:cap-typewriter-shot 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-typewriter .ed{position:absolute;left:5cqw;top:4cqw;width:98cqw;height:62cqw;background:#0C1412;border-radius:1.4cqw;display:flex;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.05);transform:perspective(150cqw) rotateY(-8deg) rotateX(5deg)}
.v-cap-typewriter .tree{width:17cqw;flex:none;background:#09100E;padding:2cqw 1.5cqw;display:flex;flex-direction:column;gap:1cqw}
.v-cap-typewriter .tree i{display:flex;gap:.7cqw;align-items:center;padding-left:var(--p)}
.v-cap-typewriter .tree i::before{content:"";width:1.2cqw;height:1.2cqw;border-radius:.3cqw;background:var(--c)}
.v-cap-typewriter .tree i::after{content:"";height:.8cqw;width:var(--w);border-radius:.4cqw;background:rgba(220,235,228,.25)}
.v-cap-typewriter .code{flex:1;padding:1.4cqw 0}
.v-cap-typewriter .tabs{display:flex;gap:.4cqw;padding:0 1.6cqw 1.4cqw;border-bottom:1px solid rgba(255,255,255,.05);margin-bottom:1.2cqw}
.v-cap-typewriter .tabs b{height:2.2cqw;width:11cqw;border-radius:.5cqw .5cqw 0 0;background:rgba(255,255,255,.04)}
.v-cap-typewriter .tabs b:first-child{background:color-mix(in srgb,var(--secondary) 12%,transparent);box-shadow:inset 0 .2cqw 0 var(--secondary)}
.v-cap-typewriter .l{display:flex;align-items:center;gap:.7cqw;height:2.45cqw;padding-left:1.6cqw}
.v-cap-typewriter .l .n{width:2cqw;height:.7cqw;border-radius:.3cqw;background:rgba(255,255,255,.12);margin-right:var(--i)}
.v-cap-typewriter .l i{height:.95cqw;border-radius:.4cqw;width:var(--w);background:var(--c)}
.v-cap-typewriter .l.hi{background:color-mix(in srgb,var(--secondary) 8%,transparent)}
.v-cap-typewriter .chat{width:27cqw;flex:none;background:linear-gradient(180deg,#0F1D1A,#0B1412);border-left:1px solid rgba(255,255,255,.05);padding:2.2cqw 1.8cqw;display:flex;flex-direction:column;gap:1.3cqw}
.v-cap-typewriter .chat .bb{border-radius:1cqw;padding:1.1cqw;display:flex;flex-direction:column;gap:.6cqw;background:rgba(255,255,255,.05)}
.v-cap-typewriter .chat .bb.me{align-self:flex-end;width:72%;background:color-mix(in srgb,var(--secondary) 16%,transparent)}
.v-cap-typewriter .chat .bb i{display:block;height:.75cqw;border-radius:.4cqw;background:rgba(220,240,232,.32);width:var(--w)}
.v-cap-typewriter .chat .ok{display:flex;gap:.6cqw}
.v-cap-typewriter .chat .ok b{height:2cqw;border-radius:1cqw;width:var(--w);background:var(--c)}
.v-cap-typewriter .glow{position:absolute;left:30cqw;top:-10cqw;width:70cqw;height:40cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 28%,transparent),transparent);filter:blur(2cqw)}
.v-cap-typewriter .scrim{position:absolute;inset:0;background:linear-gradient(0deg,rgba(2,4,3,.85),rgba(2,4,3,.2) 50%,transparent 75%)}
@keyframes cap-typewriter-shot{0%,100%{transform:scale(1.03) translate(0,0)}50%{transform:scale(1.07) translate(-1.2cqw,.6cqw)}}
.v-cap-typewriter .panel{position:absolute;left:5.5cqw;bottom:5cqw;width:62cqw;padding:1.5cqw 2.2cqw 1.7cqw;border-radius:1.2cqw;background:color-mix(in srgb,var(--paper) 80%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent),0 2cqw 5cqw rgba(0,0,0,.5);animation:cap-typewriter-panel 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-typewriter .lab{display:flex;align-items:center;gap:.8cqw;margin-bottom:.9cqw;font:500 1.2cqw/1 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 58%,transparent);white-space:nowrap}
.v-cap-typewriter .lab b{flex:none;width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent)}
.v-cap-typewriter .rows{font-size:2.6cqw;font-weight:500;line-height:1.5}
.v-cap-typewriter .row{display:flex;gap:1.1em;align-items:baseline}
.v-cap-typewriter .ts{flex:none;font-size:.72em;letter-spacing:.02em;color:color-mix(in srgb,var(--secondary) 55%,transparent)}
.v-cap-typewriter .tx{min-width:0;word-spacing:-1ch}
.v-cap-typewriter .prev .tx{animation:cap-typewriter-dim 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-typewriter .grow{display:grid;grid-template-rows:0fr;animation:cap-typewriter-grow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-typewriter .cur{min-height:0;opacity:0;animation:cap-typewriter-show 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-typewriter .w{display:inline-block;vertical-align:top;max-width:0;overflow:hidden;white-space:pre;word-spacing:normal;animation:cap-typewriter-type 6s steps(24,end) infinite}
.v-cap-typewriter .prev .w{--delay:calc(.3s + var(--i) * .16s)}
.v-cap-typewriter .cur .w{--delay:calc(1.6s + var(--i) * .13s)}
.v-cap-typewriter .car{display:inline-block;width:.56ch;height:1.05em;vertical-align:-.16em;background:var(--accent);box-shadow:0 0 .6em color-mix(in srgb,var(--accent) 60%,transparent);animation:cap-typewriter-blink 1s steps(1,end) infinite}
.v-cap-typewriter .prev .car{animation:cap-typewriter-blink 1s steps(1,end) infinite,cap-typewriter-off 6s linear infinite}
@container (max-aspect-ratio: 4/5){
  .v-cap-typewriter .panel{left:6cqw;right:6cqw;width:auto;top:60cqh;bottom:auto;padding:4cqw 5cqw 4.4cqw;border-radius:4cqw}
  .v-cap-typewriter .lab{position:absolute;left:0;top:-52cqh;margin:0;gap:2.4cqw;font-size:5.6cqw;padding:2.2cqw 3.8cqw;border-radius:6cqw;background:color-mix(in srgb,var(--paper) 80%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent)}
  .v-cap-typewriter .lab b{width:2.8cqw;height:2.8cqw}
  .v-cap-typewriter .rows{font-size:5.8cqw}
  .v-cap-typewriter .ts{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-typewriter .panel{left:6cqw;right:6cqw;width:auto;bottom:6cqw;padding:2.6cqw 3.4cqw 2.8cqw;border-radius:2.2cqw}
  .v-cap-typewriter .lab{font-size:2.1cqw;gap:1.3cqw;margin-bottom:1.6cqw}
  .v-cap-typewriter .lab b{width:1.4cqw;height:1.4cqw}
  .v-cap-typewriter .rows{font-size:3.9cqw}
}
@keyframes cap-typewriter-panel{0%{opacity:0;transform:translateY(1cqw)}4%,100%{opacity:1;transform:translateY(0)}}
@keyframes cap-typewriter-type{0%{max-width:0;margin-right:0}6%,100%{max-width:24em;margin-right:1ch}}
@keyframes cap-typewriter-blink{0%{opacity:1}50%{opacity:0}}
@keyframes cap-typewriter-off{0%,23.5%{visibility:visible}24%,100%{visibility:hidden}}
@keyframes cap-typewriter-dim{0%,23%{opacity:1}28%,100%{opacity:.42}}
@keyframes cap-typewriter-grow{0%,23%{grid-template-rows:0fr}28%,100%{grid-template-rows:1fr}}
@keyframes cap-typewriter-show{0%,24%{opacity:0}27%,100%{opacity:1}}
`,
};

export const capEmphasis: SceneSpec = {
  id: "cap-emphasis",
  slug: "mg-cap-emphasis",
  name: "Serif Keyword Caption",
  kind: "element",
  job: "titles",
  language: "editorial",
  mechanic: "keyword-serif-morph",
  energy: "default",
  settle: 3.5,
  colors: { ink: "#FFFFFF", accent: "#FFC98F", secondary: "#C25E73", paper: "#16171A" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["captions", "subtitles", "keyword", "serif-accent"],
  fields: [
    { key: "line", label: "Caption", default: "Your docs, your code, your team, in", maxChars: 48, role: "caption" },
    { key: "keyword", label: "Keyword", default: "one place.", maxChars: 18, role: "headline" },
    { key: "kicker", label: "Chapter label", default: "chapter 02", maxChars: 20, role: "kicker" },
  ],
  html: `<div class="bd"><div class="sky"><i class="cloud" style="left:6cqw;top:8cqw;width:44cqw;height:9cqw"></i><i class="cloud" style="left:52cqw;top:16cqw;width:40cqw;height:7cqw;opacity:.7"></i><i class="cloud" style="left:20cqw;top:22cqw;width:30cqw;height:5cqw;opacity:.6"></i><i class="hill" style="left:-20cqw;top:40cqw;width:80cqw;height:30cqw"></i><i class="hill" style="left:38cqw;top:43cqw;width:90cqw;height:30cqw;background:#1C1D20"></i><i class="lt" style="--x:45.2cqw;--y:52.8cqw;--s:0.39cqw;--c:#FFB070"></i><i class="lt" style="--x:18.5cqw;--y:50.2cqw;--s:0.49cqw;--c:#FFD08A"></i><i class="lt" style="--x:44.7cqw;--y:49.3cqw;--s:0.52cqw;--c:#FFD08A"></i><i class="lt" style="--x:59.5cqw;--y:50.6cqw;--s:0.47cqw;--c:#FFB070"></i><i class="lt" style="--x:62.3cqw;--y:49.0cqw;--s:0.26cqw;--c:#FFB070"></i><i class="lt" style="--x:60.0cqw;--y:49.4cqw;--s:0.43cqw;--c:#FFB070"></i><i class="lt" style="--x:51.9cqw;--y:49.0cqw;--s:0.45cqw;--c:#FF9F7A"></i><i class="lt" style="--x:65.5cqw;--y:51.5cqw;--s:0.53cqw;--c:#FFD08A"></i><i class="lt" style="--x:70.8cqw;--y:48.6cqw;--s:0.34cqw;--c:#FFD08A"></i><i class="lt" style="--x:56.3cqw;--y:47.5cqw;--s:0.34cqw;--c:#FFD08A"></i><i class="lt" style="--x:95.8cqw;--y:48.5cqw;--s:0.31cqw;--c:#FFD08A"></i><i class="lt" style="--x:47.0cqw;--y:50.3cqw;--s:0.27cqw;--c:#FFB070"></i><i class="lt" style="--x:77.9cqw;--y:47.3cqw;--s:0.35cqw;--c:#FF9F7A"></i><i class="lt" style="--x:75.8cqw;--y:48.7cqw;--s:0.28cqw;--c:#FFD08A"></i><i class="lt" style="--x:46.5cqw;--y:50.6cqw;--s:0.31cqw;--c:#FFB070"></i><i class="lt" style="--x:98.5cqw;--y:50.3cqw;--s:0.37cqw;--c:#FF9F7A"></i><i class="lt" style="--x:42.1cqw;--y:46.9cqw;--s:0.54cqw;--c:#FFE6B8"></i><i class="lt" style="--x:99.8cqw;--y:48.2cqw;--s:0.55cqw;--c:#FFD08A"></i><i class="lt" style="--x:4.2cqw;--y:48.5cqw;--s:0.25cqw;--c:#FFE6B8"></i><i class="lt" style="--x:83.0cqw;--y:47.2cqw;--s:0.31cqw;--c:#FFB070"></i><i class="lt" style="--x:1.6cqw;--y:50.1cqw;--s:0.29cqw;--c:#FF9F7A"></i><i class="lt" style="--x:83.2cqw;--y:50.0cqw;--s:0.44cqw;--c:#FFE6B8"></i><i class="lt" style="--x:90.8cqw;--y:50.4cqw;--s:0.31cqw;--c:#FFB070"></i><i class="lt" style="--x:68.7cqw;--y:50.8cqw;--s:0.27cqw;--c:#FFD08A"></i><i class="lt" style="--x:10.4cqw;--y:53.2cqw;--s:0.32cqw;--c:#FF9F7A"></i><i class="lt" style="--x:25.7cqw;--y:52.2cqw;--s:0.34cqw;--c:#FFB070"></i><i class="lt" style="--x:92.9cqw;--y:49.4cqw;--s:0.39cqw;--c:#FFD08A"></i><i class="lt" style="--x:28.0cqw;--y:48.4cqw;--s:0.25cqw;--c:#FFE6B8"></i><i class="lt" style="--x:41.1cqw;--y:44.9cqw;--s:0.33cqw;--c:#FFB070"></i><i class="lt" style="--x:9.2cqw;--y:48.6cqw;--s:0.35cqw;--c:#FFB070"></i><i class="lt" style="--x:59.0cqw;--y:52.1cqw;--s:0.36cqw;--c:#FFE6B8"></i><i class="lt" style="--x:96.3cqw;--y:52.2cqw;--s:0.39cqw;--c:#FFE6B8"></i><i class="lt" style="--x:31.9cqw;--y:47.2cqw;--s:0.41cqw;--c:#FFD08A"></i><i class="lt" style="--x:90.0cqw;--y:52.8cqw;--s:0.49cqw;--c:#FFE6B8"></i><i class="lt" style="--x:35.2cqw;--y:52.6cqw;--s:0.51cqw;--c:#FF9F7A"></i><i class="lt" style="--x:94.4cqw;--y:51.0cqw;--s:0.25cqw;--c:#FF9F7A"></i><i class="lt" style="--x:37.9cqw;--y:45.2cqw;--s:0.28cqw;--c:#FFD08A"></i><i class="lt" style="--x:99.3cqw;--y:54.0cqw;--s:0.37cqw;--c:#FF9F7A"></i><i class="lt" style="--x:44.1cqw;--y:47.3cqw;--s:0.48cqw;--c:#FFD08A"></i><i class="lt" style="--x:31.0cqw;--y:44.7cqw;--s:0.54cqw;--c:#FFD08A"></i><i class="lt" style="--x:49.7cqw;--y:52.8cqw;--s:0.33cqw;--c:#FFD08A"></i><i class="lt" style="--x:36.8cqw;--y:50.0cqw;--s:0.41cqw;--c:#FFE6B8"></i><i class="lt" style="--x:66.0cqw;--y:54.5cqw;--s:0.35cqw;--c:#FFE6B8"></i><i class="lt" style="--x:19.9cqw;--y:51.8cqw;--s:0.52cqw;--c:#FFB070"></i><i class="lt" style="--x:38.4cqw;--y:47.3cqw;--s:0.29cqw;--c:#FF9F7A"></i><i class="lt" style="--x:35.1cqw;--y:46.9cqw;--s:0.27cqw;--c:#FFE6B8"></i></div><div class="flare"></div><div class="scrim"></div><div class="grain"></div></div>
<div class="kick" data-21st-slot="kicker"><b></b>{{kicker}}</div>
<div class="ln"><span class="lw" data-21st-slot="line">{{line|words}}</span> <span class="k"><span class="kr">{{keyword}}</span><span class="ks" data-21st-slot="keyword">{{keyword}}</span></span></div>`,
  css: `
.v-cap-emphasis{color:var(--ink);font-family:var(--font-body)}
.v-cap-emphasis[data-backdrop="on"]{background:var(--paper)}
.v-cap-emphasis[data-backdrop="off"] .bd{display:none}
.v-cap-emphasis .bd{position:absolute;left:50%;top:50%;height:max(100cqh,56.25cqw);aspect-ratio:16/9;transform:translate(-50%,-50%);container-type:size;overflow:hidden}
.v-cap-emphasis .sky{position:absolute;inset:-6%;background:radial-gradient(40% 32% at 64% 64%,rgba(255,214,150,.95),rgba(255,150,90,.55) 40%,transparent 72%),radial-gradient(70% 30% at 30% 30%,rgba(255,140,170,.45),transparent 70%),linear-gradient(180deg,#222326 0%,#47484B 28%,#C25E73 52%,#F09A6A 64%,#7A3E62 74%,#202124 88%,#121316 100%);animation:cap-emphasis-sky 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-emphasis .cloud{position:absolute;border-radius:50%;background:radial-gradient(closest-side,rgba(255,190,200,.55),transparent);filter:blur(1cqw);animation:cap-emphasis-cloud 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-emphasis .hill{position:absolute;border-radius:50%;background:#17181B;filter:blur(.7cqw)}
.v-cap-emphasis .lt{position:absolute;left:var(--x);top:var(--y);width:var(--s);height:var(--s);border-radius:50%;background:var(--c);box-shadow:0 0 .8cqw var(--c);filter:blur(.12cqw)}
.v-cap-emphasis .flare{position:absolute;left:30cqw;top:34cqw;width:80cqw;height:1.2cqw;background:linear-gradient(90deg,transparent,rgba(255,220,170,.55),transparent);filter:blur(.5cqw);animation:cap-emphasis-flare 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-emphasis .scrim{position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,9,12,.8) 0%,rgba(8,9,12,.35) 30%,transparent 55%)}
@keyframes cap-emphasis-sky{0%,100%{transform:translateX(0) scale(1.02)}50%{transform:translateX(-2.4cqw) scale(1.06)}}
@keyframes cap-emphasis-cloud{0%,100%{transform:translateX(0)}50%{transform:translateX(5cqw)}}
@keyframes cap-emphasis-flare{0%,100%{transform:translateX(0) scaleX(.9);opacity:.6}50%{transform:translateX(-6cqw) scaleX(1.1);opacity:1}}
.v-cap-emphasis .grain{position:absolute;inset:0;background-image:${GRAIN};background-size:36cqw;opacity:.16;mix-blend-mode:overlay}
.v-cap-emphasis .kick{position:absolute;left:4cqw;top:3.6cqw;display:flex;align-items:center;gap:.8cqw;font:500 1.4cqw/1 var(--font-body);letter-spacing:.01em;color:color-mix(in srgb,var(--ink) 85%,transparent);padding:.7cqw 1.2cqw;border-radius:2cqw;background:color-mix(in srgb,var(--paper) 50%,transparent);animation:cap-emphasis-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-emphasis .kick b{width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent)}
.v-cap-emphasis .ln{position:absolute;left:8cqw;right:8cqw;bottom:5.6cqw;text-align:center;font-weight:600;font-size:4.2cqw;line-height:1.25;letter-spacing:-.015em;text-wrap:balance;text-shadow:0 .2cqw 1cqw rgba(12,13,16,.55);isolation:isolate}
.v-cap-emphasis .w{--delay:calc(.3s + var(--i) * .14s);display:inline-block;opacity:0;animation:cap-emphasis-word 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-emphasis .k{display:inline-grid;align-items:baseline;justify-items:center;position:relative;margin:0 .06em;vertical-align:baseline}
.v-cap-emphasis .kr,.v-cap-emphasis .ks{grid-area:1/1;white-space:nowrap}
.v-cap-emphasis .kr{--delay:1.7s;animation:cap-emphasis-kr 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-emphasis .ks{--delay:1.7s;font-family:var(--font-display);font-style:italic;font-weight:400;font-size:1.6em;line-height:1;letter-spacing:-.01em;color:var(--accent);text-shadow:0 0 .5em color-mix(in srgb,var(--accent) 55%,transparent),0 .1em .3em rgba(17 18 21,.4);padding:0 .08em;transform-origin:50% 70%;animation:cap-emphasis-ks 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-emphasis .k::after{content:"";position:absolute;left:-12%;right:-12%;top:20%;bottom:-14%;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 45%,transparent),transparent);z-index:-1;opacity:0;--delay:1.7s;animation:cap-emphasis-glow 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-cap-emphasis .kick{left:8cqw;top:8cqh;font-size:5.6cqw;gap:2.4cqw;padding:2.2cqw 3.8cqw;border-radius:6cqw}
  .v-cap-emphasis .kick b{width:2.8cqw;height:2.8cqw}
  .v-cap-emphasis .ln{left:7cqw;right:7cqw;bottom:11cqh;font-size:7.8cqw;line-height:1.22}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-emphasis .kick{left:6cqw;top:6cqw;font-size:2.4cqw;gap:1.2cqw;padding:1.1cqw 1.9cqw}
  .v-cap-emphasis .kick b{width:1.4cqw;height:1.4cqw}
  .v-cap-emphasis .ln{left:7cqw;right:7cqw;bottom:7cqw;font-size:5.6cqw}
}
@keyframes cap-emphasis-fade{0%{opacity:0}5%,100%{opacity:1}}
@keyframes cap-emphasis-word{0%{opacity:0;transform:translateY(.35em)}2.4%,100%{opacity:1;transform:translateY(0)}}
@keyframes cap-emphasis-kr{0%{opacity:0;transform:translateY(.35em)}2.4%{opacity:1;transform:none;filter:blur(0)}9%{opacity:1;transform:none;filter:blur(0)}11%,100%{opacity:0;transform:scale(1.18);filter:blur(.3cqw)}}
@keyframes cap-emphasis-ks{0%,9%{opacity:0;transform:scale(.62) rotate(-3deg);filter:blur(.5cqw)}11.6%{opacity:1;transform:scale(1.07) rotate(0deg);filter:blur(0)}13.2%,100%{opacity:1;transform:scale(1) rotate(0deg);filter:blur(0)}}
@keyframes cap-emphasis-glow{0%,9%{opacity:0;transform:scale(.6)}12%,100%{opacity:1;transform:scale(1)}}
`,
};

export const capTwoSpeakers: SceneSpec = {
  id: "cap-two-speakers",
  slug: "mg-cap-two-speakers",
  name: "Two Speaker Captions",
  kind: "element",
  job: "titles",
  language: "product-ui",
  mechanic: "speaker-turn-captions",
  energy: "default",
  settle: 3.6,
  colors: { ink: "#FFFFFF", accent: "#3D63FF", secondary: "#4BE3A3", paper: "#08090C" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["captions", "dialogue", "podcast", "interview"],
  fields: [
    { key: "nameA", label: "First speaker", default: "Maya", maxChars: 14, role: "name" },
    { key: "lineA", label: "First line", default: "Where's the launch spec?", maxChars: 40, role: "caption" },
    { key: "nameB", label: "Second speaker", default: "Theo", maxChars: 14, role: "name" },
    { key: "lineB", label: "Second line", default: "Already in Lumen, next to the code.", maxChars: 40, role: "caption" },
  ],
  html: `<div class="bd"><div class="tile a"><div class="room"><div class="lamp"></div><div class="shelf"></div></div><div class="who" style="--skin:#D9A27E;--skin2:#9E6B4E;--hair:#2A1A14;--shirt:#3E4A7A"><div class="body"></div><div class="head"></div><div class="hair"></div></div><div class="tag"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8.5" rx="2.5"/><path d="M3 8a5 5 0 0 0 10 0M8 13v2"/></svg>{{nameA}}</div><div class="ring"></div></div><div class="tile b"><div class="room"><div class="win"></div><div class="plant"></div></div><div class="who" style="--skin:#E7C2A4;--skin2:#B88A6C;--hair:#6B4A2E;--shirt:#2F5A4C"><div class="body"></div><div class="head"></div><div class="hair"></div></div><div class="tag"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="5.5" y="1.5" width="5" height="8.5" rx="2.5"/><path d="M3 8a5 5 0 0 0 10 0M8 13v2"/></svg>{{nameB}}</div><div class="ring"></div></div><div class="scrim"></div></div>
<div class="stack"><div class="row ra"><span class="chip"><i class="av"></i><span class="nm" data-21st-slot="nameA">{{nameA}}</span><span class="eq"><i></i><i></i><i></i></span></span><span class="txt" data-21st-slot="lineA">{{lineA|words}}</span></div><div class="grow"><div class="row rb"><span class="txt" data-21st-slot="lineB">{{lineB|words}}</span><span class="chip"><span class="eq"><i></i><i></i><i></i></span><span class="nm" data-21st-slot="nameB">{{nameB}}</span><i class="av"></i></span></div></div></div>`,
  css: `
.v-cap-two-speakers{color:var(--ink);font-family:var(--font-display)}
.v-cap-two-speakers[data-backdrop="on"]{background:var(--paper)}
.v-cap-two-speakers[data-backdrop="off"] .bd{display:none}
.v-cap-two-speakers .bd{position:absolute;inset:0}
.v-cap-two-speakers .tile{position:absolute;top:1.4cqw;bottom:1.4cqw;width:47.9cqw;border-radius:1.4cqw;overflow:hidden}
.v-cap-two-speakers .tile.a{left:1.4cqw;background:radial-gradient(50% 60% at 18% 18%,rgba(255,190,110,.85),transparent 70%),linear-gradient(160deg,#5A3A26,#2A1A12 70%)}
.v-cap-two-speakers .tile.b{right:1.4cqw;background:radial-gradient(60% 70% at 88% 26%,rgba(170,225,240,.75),transparent 70%),linear-gradient(200deg,#29424C,#111C22 70%)}
.v-cap-two-speakers .room{position:absolute;inset:0;filter:blur(1.1cqw)}
.v-cap-two-speakers .shelf{position:absolute;right:3cqw;top:5cqw;width:13cqw;height:22cqw;background:repeating-linear-gradient(90deg,#7A4B33 0 1.6cqw,#3C5A6B 1.6cqw 2.6cqw,#A87A3C 2.6cqw 3.6cqw,#4A2E21 3.6cqw 4.4cqw);opacity:.75;border-radius:.5cqw}
.v-cap-two-speakers .lamp{position:absolute;left:4cqw;top:4cqw;width:9cqw;height:9cqw;border-radius:50%;background:radial-gradient(circle,#FFE2B0,rgba(255,180,90,0) 70%)}
.v-cap-two-speakers .win{position:absolute;right:-2cqw;top:2cqw;width:16cqw;height:30cqw;background:linear-gradient(180deg,#D8F1F7,#9CCBDA);opacity:.75}
.v-cap-two-speakers .plant{position:absolute;left:2cqw;top:14cqw;width:12cqw;height:20cqw;border-radius:50%;background:radial-gradient(circle at 50% 40%,#5C8C55,#2A4A2C 70%,transparent 72%)}
.v-cap-two-speakers .who{position:absolute;left:50%;bottom:-2cqw;width:34cqw;height:44cqw;margin-left:-17cqw;filter:blur(1cqw);animation:cap-two-speakers-sway 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-two-speakers .b .who{animation-direction:reverse}
.v-cap-two-speakers .head{position:absolute;left:11cqw;top:6cqw;width:12cqw;height:15cqw;border-radius:46% 46% 44% 44%;background:radial-gradient(circle at 45% 40%,var(--skin),var(--skin2) 80%)}
.v-cap-two-speakers .hair{position:absolute;left:10.2cqw;top:4.8cqw;width:13.6cqw;height:9cqw;border-radius:50% 50% 30% 30%;background:var(--hair)}
.v-cap-two-speakers .body{position:absolute;left:0;top:22cqw;width:34cqw;height:30cqw;border-radius:46% 46% 0 0;background:var(--shirt)}
.v-cap-two-speakers .tag{position:absolute;top:1.6cqw;left:1.6cqw;display:flex;align-items:center;gap:.7cqw;font-size:1.3cqw;font-weight:500;padding:.55cqw 1cqw;border-radius:2cqw;background:rgba(0,0,0,.38);backdrop-filter:blur(.6cqw);color:rgba(255,255,255,.9)}
.v-cap-two-speakers .tag svg{width:1.3cqw;height:1.3cqw}
.v-cap-two-speakers .ring{position:absolute;inset:0;border-radius:1.4cqw;box-shadow:inset 0 0 0 .32cqw var(--c),inset 0 0 3cqw color-mix(in srgb,var(--c) 40%,transparent);opacity:0}
.v-cap-two-speakers .scrim{position:absolute;inset:0;background:linear-gradient(0deg,rgba(4,5,8,.9) 0%,rgba(4,5,8,.55) 32%,transparent 58%)}
@keyframes cap-two-speakers-sway{0%,100%{transform:translate(0,0) rotate(0deg)}30%{transform:translate(.6cqw,.2cqw) rotate(1deg)}65%{transform:translate(-.5cqw,0) rotate(-.8deg)}}
.v-cap-two-speakers .tile.a{--c:var(--accent)}
.v-cap-two-speakers .tile.b{--c:var(--secondary)}
.v-cap-two-speakers .a .ring{animation:cap-two-speakers-ra 6s linear infinite}
.v-cap-two-speakers .b .ring{animation:cap-two-speakers-rb 6s linear infinite}
.v-cap-two-speakers .stack{position:absolute;left:4.5cqw;right:4.5cqw;bottom:4.4cqw;display:flex;flex-direction:column}
.v-cap-two-speakers .row{display:flex;align-items:center;gap:1.3cqw;font-size:3cqw;font-weight:600;line-height:1.2;letter-spacing:-.012em;text-shadow:0 .2cqw .8cqw rgba(0,0,0,.6)}
.v-cap-two-speakers .ra{--c:var(--accent);animation:cap-two-speakers-rowa 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-two-speakers .rb{--c:var(--secondary);justify-content:flex-end;text-align:right;opacity:0;animation:cap-two-speakers-rowb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-two-speakers .grow{display:grid;grid-template-rows:0fr;animation:cap-two-speakers-grow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-two-speakers .grow>.row{min-height:0;padding-top:1.2cqw}
.v-cap-two-speakers .txt{min-width:0;text-wrap:balance}
.v-cap-two-speakers .chip{display:flex;align-items:center;gap:.6cqw;flex:none;font-size:1.55cqw;font-weight:600;padding:.45cqw .9cqw .45cqw .45cqw;border-radius:3cqw;background:color-mix(in srgb,var(--c) 22%,color-mix(in srgb,var(--paper) 60%,transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c) 55%,transparent);color:var(--c);text-shadow:none}
.v-cap-two-speakers .rb .chip{padding:.45cqw .45cqw .45cqw .9cqw}
.v-cap-two-speakers .av{width:2cqw;height:2cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,color-mix(in srgb,var(--c) 40%,#fff),var(--c))}
.v-cap-two-speakers .nm{white-space:nowrap}
.v-cap-two-speakers .eq{display:flex;gap:.18cqw;align-items:center;height:1.4cqw}
.v-cap-two-speakers .eq i{width:.26cqw;height:100%;border-radius:.2cqw;background:var(--c);animation:cap-two-speakers-eq .8s cubic-bezier(.45,0,.55,1) infinite}
.v-cap-two-speakers .eq i:nth-child(2){animation-direction:reverse}
.v-cap-two-speakers .eq i:nth-child(3){animation-duration:.6s}
.v-cap-two-speakers .ra .eq{animation:cap-two-speakers-eqa 6s linear infinite}
.v-cap-two-speakers .w{display:inline-block;opacity:0;animation:cap-two-speakers-word 6s linear infinite}
.v-cap-two-speakers .ra .w{--delay:calc(.4s + var(--i) * .13s)}
.v-cap-two-speakers .rb .w{--delay:calc(1.9s + var(--i) * .13s)}
@container (max-aspect-ratio: 4/5){
  .v-cap-two-speakers .tile{left:1.4cqw;right:1.4cqw;width:auto}
  .v-cap-two-speakers .tile.a{top:1.4cqw;bottom:calc(50% + .7cqw)}
  .v-cap-two-speakers .tile.b{top:calc(50% + .7cqw);bottom:1.4cqw}
  .v-cap-two-speakers .who{zoom:1.7}
  .v-cap-two-speakers .tag{font-size:3.4cqw;gap:1.6cqw;padding:1.4cqw 2.6cqw;border-radius:4cqw}
  .v-cap-two-speakers .tag svg{width:3.4cqw;height:3.4cqw}
  .v-cap-two-speakers .a .tag{top:auto;bottom:3cqw;left:3cqw}
  .v-cap-two-speakers .b .tag{top:3cqw;left:3cqw}
  .v-cap-two-speakers .scrim{background:linear-gradient(180deg,rgba(4,5,8,.82) 0%,rgba(4,5,8,.3) 20%,transparent 30%,transparent 72%,rgba(4,5,8,.55) 84%,rgba(4,5,8,.9) 100%)}
  .v-cap-two-speakers .stack{left:6cqw;right:6cqw;top:7cqh;bottom:8cqh;justify-content:space-between}
  .v-cap-two-speakers .grow>.row{padding-top:0}
  .v-cap-two-speakers .row{flex-direction:column;align-items:flex-start;gap:2.4cqw;font-size:6.8cqw}
  .v-cap-two-speakers .rb{align-items:flex-end}
  .v-cap-two-speakers .rb .chip{order:-1}
  .v-cap-two-speakers .chip{font-size:5.6cqw;gap:2cqw;padding:1.4cqw 3cqw 1.4cqw 1.4cqw;border-radius:8cqw}
  .v-cap-two-speakers .rb .chip{padding:1.4cqw 1.4cqw 1.4cqw 3cqw}
  .v-cap-two-speakers .av{width:6.4cqw;height:6.4cqw}
  .v-cap-two-speakers .eq{gap:.6cqw;height:4.4cqw}
  .v-cap-two-speakers .eq i{width:.9cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-two-speakers .stack{left:5cqw;right:5cqw;bottom:5cqw}
  .v-cap-two-speakers .row{font-size:4.3cqw;gap:1.8cqw}
  .v-cap-two-speakers .chip{font-size:2.6cqw;gap:1cqw;padding:.7cqw 1.4cqw .7cqw .7cqw}
  .v-cap-two-speakers .rb .chip{padding:.7cqw .7cqw .7cqw 1.4cqw}
  .v-cap-two-speakers .av{width:3.2cqw;height:3.2cqw}
  .v-cap-two-speakers .eq{height:2.2cqw;gap:.3cqw}
  .v-cap-two-speakers .eq i{width:.4cqw}
  .v-cap-two-speakers .tag{font-size:2cqw}
  .v-cap-two-speakers .tag svg{width:2cqw;height:2cqw}
  .v-cap-two-speakers .who{zoom:1.45}
}
@keyframes cap-two-speakers-ra{0%,4%{opacity:0}6%,26%{opacity:1}29%,100%{opacity:0}}
@keyframes cap-two-speakers-rb{0%,27%{opacity:0}30%,100%{opacity:1}}
@keyframes cap-two-speakers-rowa{0%,2%{opacity:0;transform:translateY(1.2em)}6%,26%{opacity:1;transform:none}30%,100%{opacity:.55;transform:none}}
@keyframes cap-two-speakers-rowb{0%,27%{opacity:0;transform:translateY(1.2em)}31%,100%{opacity:1;transform:none}}
@keyframes cap-two-speakers-grow{0%,26%{grid-template-rows:0fr}30%,100%{grid-template-rows:1fr}}
@keyframes cap-two-speakers-eqa{0%,26%{opacity:1}29%,100%{opacity:0}}
@keyframes cap-two-speakers-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes cap-two-speakers-word{0%{opacity:0;transform:translateY(.3em)}1.6%,100%{opacity:1;transform:none}}
`,
};

export const capSafeZone: SceneSpec = {
  id: "cap-safe-zone",
  slug: "mg-cap-safe-zone",
  name: "Safe Zone Captions",
  kind: "element",
  job: "titles",
  language: "product-ui",
  mechanic: "caption-lift-into-safe-zone",
  energy: "default",
  settle: 3.1,
  colors: { ink: "#FFFFFF", accent: "#FFE14A", secondary: "#7CFFB2", paper: "#0C0D10" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["captions", "safe-zone", "vertical", "shorts"],
  fields: [
    { key: "caption", label: "Caption", default: "Your docs, your code, your team, in", maxChars: 44, role: "caption" },
    { key: "highlight", label: "Highlighted words", default: "one place.", maxChars: 18, role: "headline" },
  ],
  html: `<div class="bd"><div class="sbox"><div class="shot"><div class="room"></div><div class="lamp"></div><div class="dev"><div class="hd"><span class="orb"></span><i style="--w:40%;--c:#37393C"></i></div><div class="cd"></div><i style="--w:88%;--c:#2B2D30"></i><i style="--w:72%;--c:#2B2D30"></i><i style="--w:54%;--c:#5B3F2E"></i><i style="--w:80%;--c:#2B2D30"></i></div></div><div class="shade"></div></div><div class="hatch top"></div><div class="hatch bot"></div><div class="hatch sl"></div><div class="hatch sr"></div><div class="ui tabs"><span>Following</span><b>For you</b></div><div class="ui srch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg></div><div class="ui acts"><span class="me"></span><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z"/></svg>12.4k</span><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.4 1.1 4.6 3 6.2L4.2 21l4-1.8c1.2.4 2.5.6 3.8.6 5.5 0 10-3.9 10-8.7S17.5 3 12 3z"/></svg>381</span><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 3.5v4.6C6.6 8.6 3 13 2.5 20c2.4-3.6 5.8-5.4 11-5.4v4.9L22 11.5z"/></svg>Share</span></div><div class="ui user"><b>@lumen.app</b><i style="--w:92%"></i><i style="--w:64%"></i><em>&#9835; original sound</em></div><div class="lbl pct" style="left:4cqw;top:18.5cqw">14%</div><div class="lbl pct" style="left:4cqw;top:117.8cqw">35%</div><div class="lbl pct" style="right:1.2cqw;top:71.1cqw">6%</div></div>
<div class="safe"><span>safe zone</span></div>
<div class="cap"><div class="fr bad"><b>covered by UI</b></div><div class="fr ok"><b>inside safe zone</b></div><div class="pg"><span class="cw" data-21st-slot="caption">{{caption|words}}</span> <span class="hl" data-21st-slot="highlight">{{highlight|words}}</span></div></div>`,
  css: `
.v-cap-safe-zone{color:var(--ink);font-family:var(--font-display);--drop:30cqh}
.v-cap-safe-zone[data-backdrop="on"]{background:var(--paper)}
.v-cap-safe-zone[data-backdrop="off"] .bd{display:none}
.v-cap-safe-zone .bd{position:absolute;inset:0}
.v-cap-safe-zone .sbox{position:absolute;left:50%;top:50%;width:max(100cqw,56.25cqh);aspect-ratio:9/16;transform:translate(-50%,-50%);container-type:size;overflow:hidden}
.v-cap-safe-zone .shot{position:absolute;inset:-6%;animation:cap-safe-zone-shot 6s cubic-bezier(.45,0,.55,1) infinite;}
.v-cap-safe-zone .room{position:absolute;inset:0;background:radial-gradient(50% 30% at 80% 20%,rgba(255,170,90,.55),transparent 70%),radial-gradient(60% 40% at 10% 70%,rgba(114,115,119,.35),transparent 70%),linear-gradient(180deg,#17181B,#212225 45%,#0F1013)}
.v-cap-safe-zone .lamp{position:absolute;right:6cqw;top:20cqw;width:30cqw;height:30cqw;border-radius:50%;background:radial-gradient(circle,#FFDCA8,rgba(255,170,90,0) 70%);filter:blur(2cqw)}
.v-cap-safe-zone .dev{position:absolute;left:8cqw;top:46cqw;width:92cqw;height:116cqw;border-radius:5cqw;background:#141518;padding:6cqw 5cqw;display:flex;flex-direction:column;gap:3.4cqw;transform:rotate(-7deg);filter:blur(.9cqw);box-shadow:0 6cqw 14cqw rgba(0,0,0,.55),0 0 0 2cqw #27282B,0 0 16cqw color-mix(in srgb,var(--accent) 30%,transparent)}
.v-cap-safe-zone .dev .hd{display:flex;align-items:center;gap:3cqw}
.v-cap-safe-zone .dev .orb{width:9cqw;height:9cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,color-mix(in srgb,var(--accent) 50%,#fff) 35%,var(--accent))}
.v-cap-safe-zone .dev i{display:block;height:4.2cqw;border-radius:2cqw;width:var(--w);background:var(--c)}
.v-cap-safe-zone .dev .cd{height:24cqw;border-radius:3.4cqw;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 70%,#747679),#94969A 55%,#FF9F6B)}
.v-cap-safe-zone .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),transparent 22%,transparent 55%,rgba(0,0,0,.55))}
.v-cap-safe-zone .hatch{position:absolute;background:repeating-linear-gradient(135deg,rgba(255,255,255,.16) 0 .7cqw,transparent .7cqw 2.6cqw);animation:cap-safe-zone-hatch 6s cubic-bezier(.2,.8,.2,1) infinite;}
.v-cap-safe-zone .hatch.top{left:0;right:0;top:0;height:14%;border-bottom:1px dashed rgba(255,255,255,.45)}
.v-cap-safe-zone .hatch.bot{left:0;right:0;bottom:0;height:35%;border-top:1px dashed rgba(255,255,255,.45)}
.v-cap-safe-zone .hatch.sl{left:0;width:6%;top:14%;bottom:35%;border-right:1px dashed rgba(255,255,255,.3);opacity:.7}
.v-cap-safe-zone .hatch.sr{right:0;width:6%;top:14%;bottom:35%;border-left:1px dashed rgba(255,255,255,.3);opacity:.7}
.v-cap-safe-zone .ui{position:absolute;color:rgba(255,255,255,.5);animation:cap-safe-zone-hatch 6s cubic-bezier(.2,.8,.2,1) infinite;}
.v-cap-safe-zone .tabs{left:0;right:0;top:10cqw;display:flex;justify-content:center;gap:6cqw;font-size:4.2cqw;font-weight:600}
.v-cap-safe-zone .tabs b{color:rgba(255,255,255,.75);border-bottom:.6cqw solid rgba(255,255,255,.7);padding-bottom:1cqw}
.v-cap-safe-zone .srch{right:6cqw;top:10cqw;width:5.4cqw;height:5.4cqw}
.v-cap-safe-zone .acts{right:3.4cqw;top:119.1cqw;display:flex;flex-direction:column;align-items:center;gap:3.2cqw;font-size:2.6cqw;font-weight:600}
.v-cap-safe-zone .acts span{display:flex;flex-direction:column;align-items:center;gap:1cqw}
.v-cap-safe-zone .acts svg{width:6.6cqw;height:6.6cqw}
.v-cap-safe-zone .acts .me{width:8cqw;height:8cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#B5B7BB 35%,#747679);box-shadow:0 0 0 .5cqw rgba(255,255,255,.5)}
.v-cap-safe-zone .user{left:5cqw;right:22cqw;top:148.4cqw;display:flex;flex-direction:column;gap:2cqw;font-size:3.6cqw}
.v-cap-safe-zone .user b{font-weight:700;color:rgba(255,255,255,.75)}
.v-cap-safe-zone .user i{display:block;height:2.4cqw;border-radius:1.2cqw;background:rgba(255,255,255,.35);width:var(--w)}
.v-cap-safe-zone .user em{font-style:normal;font-size:3cqw}
.v-cap-safe-zone .lbl{position:absolute;font:600 2.7cqw/1 var(--font-mono);color:#0C0D10;background:rgba(255,255,255,.85);padding:.8cqw 1.4cqw;border-radius:1cqw;animation:cap-safe-zone-hatch 6s cubic-bezier(.2,.8,.2,1) infinite;}
@keyframes cap-safe-zone-shot{0%,100%{transform:scale(1.02) translate(0,0)}50%{transform:scale(1.07) translate(-2cqw,-3cqw)}}
@keyframes cap-safe-zone-hatch{0%{opacity:.55}50%{opacity:1}100%{opacity:.55}}
.v-cap-safe-zone .safe{position:absolute;left:6%;right:6%;top:14%;bottom:35%;border:.45cqw dashed color-mix(in srgb,var(--secondary) 80%,transparent);border-radius:2cqw;animation:cap-safe-zone-safe 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-cap-safe-zone .safe span{position:absolute;left:2.4cqw;top:2.4cqw;font:600 2.7cqw/1 var(--font-mono);color:var(--secondary);letter-spacing:.02em}
.v-cap-safe-zone .cap{position:absolute;left:10%;right:10%;top:44cqh;animation:cap-safe-zone-cap 6s cubic-bezier(.65,0,.35,1) infinite}
.v-cap-safe-zone .fr{position:absolute;inset:-2.6cqw -2cqw;border-radius:2.4cqw;border:.45cqw dashed var(--c);background:color-mix(in srgb,var(--c) 10%,transparent)}
.v-cap-safe-zone .fr b{position:absolute;left:50%;top:-4.4cqw;transform:translateX(-50%);white-space:nowrap;font:600 2.6cqw/1 var(--font-mono);color:var(--paper);background:var(--c);padding:.8cqw 1.4cqw;border-radius:1cqw}
.v-cap-safe-zone .fr.bad{--c:#FF5A5F;animation:cap-safe-zone-bad 6s linear infinite}
.v-cap-safe-zone .fr.ok{--c:var(--secondary);opacity:0;animation:cap-safe-zone-ok 6s linear infinite}
.v-cap-safe-zone .pg{position:relative;text-align:center;font-weight:600;font-size:6.8cqw;line-height:1.14;letter-spacing:-.02em;text-wrap:balance;text-shadow:0 .5cqw 2cqw rgba(0,0,0,.6);-webkit-text-stroke:.32cqw color-mix(in srgb,var(--paper) 88%,transparent);paint-order:stroke fill}
.v-cap-safe-zone .w{display:inline-block;opacity:0;animation:cap-safe-zone-pop 6s linear infinite}
.v-cap-safe-zone .cw .w{--delay:calc(.15s + var(--i) * .1s)}
.v-cap-safe-zone .hl .w{--delay:calc(1.85s + var(--i) * .14s);color:var(--accent)}
@container (min-aspect-ratio: 4/5){
  .v-cap-safe-zone .tabs,.v-cap-safe-zone .pct{display:none}
  .v-cap-safe-zone .hatch.top{height:8%}
  .v-cap-safe-zone .hatch.bot{height:22%}
  .v-cap-safe-zone .hatch.sl,.v-cap-safe-zone .hatch.sr{width:5%;top:8%;bottom:22%}
  .v-cap-safe-zone .safe{left:5%;right:5%;top:8%;bottom:22%;border-width:.2cqw;border-radius:1cqw}
  .v-cap-safe-zone .safe span{left:1.2cqw;top:1.2cqw;font-size:1.2cqw}
  .v-cap-safe-zone .srch{top:2cqw;right:2cqw;width:2.2cqw;height:2.2cqw}
  .v-cap-safe-zone .acts{right:2.4cqw;top:auto;bottom:3cqw;flex-direction:row;font-size:1.1cqw;gap:2cqw}
  .v-cap-safe-zone .acts span{gap:.4cqw}
  .v-cap-safe-zone .acts svg{width:2.4cqw;height:2.4cqw}
  .v-cap-safe-zone .acts .me{width:3cqw;height:3cqw;box-shadow:0 0 0 .2cqw rgba(255,255,255,.5)}
  .v-cap-safe-zone .user{left:2.4cqw;right:auto;width:30cqw;top:auto;bottom:3cqw;gap:.8cqw;font-size:1.4cqw}
  .v-cap-safe-zone .user i{height:.9cqw}
  .v-cap-safe-zone .user em{font-size:1.1cqw}
  .v-cap-safe-zone{--drop:25cqh}
  .v-cap-safe-zone .cap{left:18%;right:18%;top:52cqh}
  .v-cap-safe-zone .fr{inset:-1.2cqw -1.2cqw;border-width:.2cqw;border-radius:1.2cqw}
  .v-cap-safe-zone .fr b{top:-2cqw;font-size:1.2cqw;padding:.4cqw .7cqw;border-radius:.5cqw}
  .v-cap-safe-zone .pg{font-size:3.4cqw;-webkit-text-stroke:.16cqw color-mix(in srgb,var(--paper) 88%,transparent)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-cap-safe-zone .hatch.top{height:10%}
  .v-cap-safe-zone .hatch.bot{height:26%}
  .v-cap-safe-zone .hatch.sl,.v-cap-safe-zone .hatch.sr{width:6%;top:10%;bottom:26%}
  .v-cap-safe-zone .safe{left:6%;right:6%;top:10%;bottom:26%;border-width:.3cqw;border-radius:1.6cqw}
  .v-cap-safe-zone .safe span{left:1.8cqw;top:1.8cqw;font-size:1.9cqw}
  .v-cap-safe-zone .srch{width:3.4cqw;height:3.4cqw}
  .v-cap-safe-zone .acts{font-size:1.7cqw;gap:3cqw}
  .v-cap-safe-zone .acts svg{width:3.6cqw;height:3.6cqw}
  .v-cap-safe-zone .acts .me{width:4.4cqw;height:4.4cqw}
  .v-cap-safe-zone .user{width:42cqw;font-size:2.1cqw;gap:1.2cqw}
  .v-cap-safe-zone .user i{height:1.3cqw}
  .v-cap-safe-zone .user em{font-size:1.7cqw}
  .v-cap-safe-zone{--drop:27cqh}
  .v-cap-safe-zone .cap{left:12%;right:12%;top:46cqh}
  .v-cap-safe-zone .fr{inset:-1.8cqw -1.6cqw;border-width:.3cqw;border-radius:1.8cqw}
  .v-cap-safe-zone .fr b{top:-3cqw;font-size:1.8cqw;padding:.6cqw 1cqw;border-radius:.7cqw}
  .v-cap-safe-zone .pg{font-size:5.2cqw;-webkit-text-stroke:.24cqw color-mix(in srgb,var(--paper) 88%,transparent)}
}
@keyframes cap-safe-zone-safe{0%,18%{opacity:.3;transform:scale(1.02)}27%,100%{opacity:1;transform:scale(1)}}
@keyframes cap-safe-zone-cap{0%,20%{transform:translateY(var(--drop))}28%,100%{transform:translateY(0)}}
@keyframes cap-safe-zone-bad{0%{opacity:0;transform:scale(.96)}3%,20%{opacity:1;transform:scale(1)}24%,100%{opacity:0;transform:scale(1)}}
@keyframes cap-safe-zone-ok{0%,25%{opacity:0;transform:scale(1.06)}30%,100%{opacity:1;transform:scale(1)}}
@keyframes cap-safe-zone-pop{0%{opacity:0;transform:translateY(.3em) scale(.9)}1.4%{opacity:1;transform:translateY(0) scale(1.04)}2.4%,100%{opacity:1;transform:none}}
`,
};

export const CAPTION_SCENES: SceneSpec[] = [capKaraoke, capWordPop, capBoxed, capTypewriter, capEmphasis, capTwoSpeakers, capSafeZone];
