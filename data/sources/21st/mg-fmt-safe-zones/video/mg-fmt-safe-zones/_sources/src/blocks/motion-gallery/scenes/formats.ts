// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const fmtReframe: SceneSpec = {
  id: "fmt-reframe",
  slug: "mg-fmt-reframe",
  name: "Auto-Reframe Launch Card",
  kind: "scene",
  job: "titles",
  language: "product-ui",
  mechanic: "camera-pull-out-to-crop-marks",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#FFFFFF", accent: "#FFB547", secondary: "#7E8083", paper: "#121316" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["launch", "product-card", "title"],
  fields: [
    { key: "kicker", label: "Kicker", default: "New · out now", maxChars: 22, role: "kicker" },
    { key: "title", label: "Title", default: "Lumen 2.0", maxChars: 18, role: "headline" },
    { key: "sub", label: "Subtitle", default: "Your AI workspace", maxChars: 30, role: "body" },
    { key: "cta", label: "Button", default: "Try it free →", maxChars: 18, role: "cta" },
  ],
  html: `<div class="bg"></div>
<div class="hz hz-t"></div><div class="hz hz-b"></div>
<div class="cam">
  <div class="kick" data-21st-slot="kicker">{{kicker}}</div>
  <div class="tt"><div class="ttl" data-21st-slot="title">{{title}}</div><div class="sub" data-21st-slot="sub">{{sub}}</div></div>
  <div class="cd"><div class="ci">
    <div class="ch"><i></i>Weekly brief<em>now</em></div>
    <div class="ls"><i></i><i></i></div>
    <div class="bars"><i style="height:40%"></i><i style="height:62%"></i><i style="height:48%"></i><i style="height:75%"></i><i style="height:58%"></i><i style="height:100%"></i><i style="height:70%"></i></div>
    <div class="chip">✓ 5 tasks created</div>
  </div></div>
  <div class="go" data-21st-slot="cta">{{cta}}</div>
</div>
<i class="cr c1"></i><i class="cr c2"></i><i class="cr c3"></i><i class="cr c4"></i>
<div class="fmt">auto-reframe · <b></b></div>`,
  css: `
.v-fmt-reframe{color:var(--ink);font-family:var(--font-body)}
.v-fmt-reframe[data-backdrop="on"]{background:var(--paper)}
.v-fmt-reframe .bg{position:absolute;inset:0;display:none;background:radial-gradient(70% 60% at 85% 95%,color-mix(in srgb,var(--accent) 50%,transparent) 0%,transparent 70%),radial-gradient(80% 80% at 15% 5%,color-mix(in srgb,var(--secondary) 60%,var(--paper)) 0%,transparent 70%),var(--paper)}
.v-fmt-reframe[data-backdrop="on"] .bg{display:block}
.v-fmt-reframe .cam{position:absolute;inset:0;transform-origin:28% 40%;animation:fmt-reframe-cam 6s linear infinite}
@keyframes fmt-reframe-cam{0%,8%{transform:scale(1.42) translate(2cqw,1cqh);animation-timing-function:cubic-bezier(.65,0,.35,1)}28%,90%{transform:scale(1) translate(0,0)}100%{transform:scale(1.42) translate(2cqw,1cqh)}}
.v-fmt-reframe .kick{position:absolute;left:7cqw;top:11cqh;display:inline-flex;align-items:center;gap:.8cqw;padding:.5cqw 1.1cqw;border-radius:3cqw;font-family:var(--font-mono);font-size:1.3cqw;color:var(--accent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 45%,transparent);background:color-mix(in srgb,var(--accent) 10%,transparent);white-space:nowrap;animation:fmt-reframe-tt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fmt-reframe .tt{position:absolute;left:7cqw;top:24cqh;width:42cqw;animation:fmt-reframe-tt 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fmt-reframe-tt{0%,3%{opacity:0;transform:translateY(5cqh)}14%,90%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(0)}}
.v-fmt-reframe .ttl{font-family:var(--font-display);font-weight:800;font-size:7.6cqw;line-height:.98;letter-spacing:-.05em}
.v-fmt-reframe .sub{margin-top:1.6cqw;font-size:2.3cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 72%,transparent);letter-spacing:-.01em}
.v-fmt-reframe .go{position:absolute;left:7cqw;top:70cqh;font-weight:600;font-size:1.9cqw;padding:1.1cqw 2.4cqw;color:var(--paper);background:var(--accent);border-radius:10cqw;box-shadow:0 1cqw 3cqw color-mix(in srgb,var(--accent) 40%,transparent);white-space:nowrap;animation:fmt-reframe-go 6s cubic-bezier(.34,1.56,.64,1) infinite}
@keyframes fmt-reframe-go{0%,12%{opacity:0;transform:scale(.7)}20%,90%{opacity:1;transform:scale(1)}97%,100%{opacity:0;transform:scale(1)}}
.v-fmt-reframe .cd{--u:1cqw;position:absolute;left:54cqw;top:18cqh;width:39cqw;height:64cqh;animation:fmt-reframe-cd 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fmt-reframe-cd{0%,6%{opacity:0;transform:translateY(8cqh) scale(.96)}18%{opacity:1;transform:translateY(0) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}40%,90%{opacity:1;transform:translateY(-1cqh) scale(1)}97%,100%{opacity:0;transform:translateY(-1cqh) scale(1)}}
.v-fmt-reframe .ci{position:absolute;inset:0;padding:calc(2.6*var(--u));border-radius:calc(2.2*var(--u));background:#fbfaff;color:#151619;display:flex;flex-direction:column;justify-content:space-between;gap:calc(1.4*var(--u));box-shadow:0 calc(1.6*var(--u)) calc(4*var(--u)) rgba(0,0,0,.35)}
.v-fmt-reframe .ch{display:flex;align-items:center;gap:calc(1.2*var(--u));font-size:calc(2.2*var(--u));font-weight:600;letter-spacing:-.03em}
.v-fmt-reframe .ch i{width:calc(3*var(--u));height:calc(3*var(--u));border-radius:50%;background:conic-gradient(from 200deg,var(--accent),var(--secondary),var(--accent));flex:none}
.v-fmt-reframe .ch em{margin-left:auto;font-style:normal;font-weight:400;font-size:calc(1.6*var(--u));color:#98999d}
.v-fmt-reframe .ls{display:grid;gap:calc(1*var(--u))}
.v-fmt-reframe .ls i{display:block;height:calc(1.2*var(--u));border-radius:calc(.6*var(--u));background:#e6e8ec}
.v-fmt-reframe .ls i:last-child{width:74%}
.v-fmt-reframe .bars{flex:1;display:flex;align-items:flex-end;gap:calc(1*var(--u));min-height:0}
.v-fmt-reframe .bars i{flex:1;border-radius:calc(.4*var(--u)) calc(.4*var(--u)) 0 0;background:color-mix(in srgb,var(--secondary) 28%,#fff);transform-origin:50% 100%;animation:fmt-reframe-bar 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fmt-reframe .bars i:nth-child(6){background:var(--accent)}
.v-fmt-reframe .bars i:nth-child(2){--delay:.05s}.v-fmt-reframe .bars i:nth-child(3){--delay:.1s}.v-fmt-reframe .bars i:nth-child(4){--delay:.15s}.v-fmt-reframe .bars i:nth-child(5){--delay:.2s}.v-fmt-reframe .bars i:nth-child(6){--delay:.25s}.v-fmt-reframe .bars i:nth-child(7){--delay:.3s}
@keyframes fmt-reframe-bar{0%,16%{transform:scaleY(.1)}30%,100%{transform:scaleY(1)}}
.v-fmt-reframe .chip{align-self:flex-start;font-size:calc(1.6*var(--u));font-weight:500;color:#13753f;background:#dcf5e5;padding:calc(.5*var(--u)) calc(1.1*var(--u));border-radius:calc(2*var(--u))}
.v-fmt-reframe .hz{position:absolute;left:0;right:0;height:7cqh;background:repeating-linear-gradient(135deg,color-mix(in srgb,var(--accent) 40%,transparent) 0 1.2cqmin,transparent 1.2cqmin 3.2cqmin);opacity:0;animation:fmt-reframe-hz 6s linear infinite}
@keyframes fmt-reframe-hz{0%,22%{opacity:0}28%,36%{opacity:1}46%,100%{opacity:0}}
.v-fmt-reframe .hz-t{top:0;border-bottom:1px dashed var(--accent)}
.v-fmt-reframe .hz-b{bottom:0;border-top:1px dashed var(--accent)}
.v-fmt-reframe .cr{position:absolute;width:3.4cqmin;height:3.4cqmin;border:0 solid var(--ink);opacity:0;animation:fmt-reframe-cr 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fmt-reframe .c1{left:3cqmin;top:3cqmin;border-width:2px 0 0 2px;--dx:-3cqmin;--dy:-3cqmin}
.v-fmt-reframe .c2{right:3cqmin;top:3cqmin;border-width:2px 2px 0 0;--dx:3cqmin;--dy:-3cqmin}
.v-fmt-reframe .c3{left:3cqmin;bottom:3cqmin;border-width:0 0 2px 2px;--dx:-3cqmin;--dy:3cqmin}
.v-fmt-reframe .c4{right:3cqmin;bottom:3cqmin;border-width:0 2px 2px 0;--dx:3cqmin;--dy:3cqmin}
@keyframes fmt-reframe-cr{0%,20%{opacity:0;transform:translate(var(--dx),var(--dy))}30%,90%{opacity:.85;transform:translate(0,0)}97%,100%{opacity:0;transform:translate(0,0)}}
.v-fmt-reframe .fmt{position:absolute;right:7cqw;top:11cqh;font-family:var(--font-mono);font-size:1.1cqw;color:color-mix(in srgb,var(--ink) 55%,transparent);animation:fmt-reframe-ui 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fmt-reframe .fmt b{font-weight:600;color:var(--ink)}
.v-fmt-reframe .fmt b::after{content:"16:9"}
@keyframes fmt-reframe-ui{0%,24%{opacity:0;transform:translateY(1cqh)}32%,90%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(0)}}
@container (max-aspect-ratio: 4/5){
  .v-fmt-reframe .kick{left:7cqw;top:8cqh;font-size:5.4cqw;padding:1.6cqw 3.4cqw;border-radius:8cqw}
  .v-fmt-reframe .tt{left:7cqw;right:7cqw;width:auto;top:16cqh}
  .v-fmt-reframe .ttl{font-size:16cqw}
  .v-fmt-reframe .sub{margin-top:3cqw;font-size:6cqw}
  .v-fmt-reframe .cd{--u:2.15cqw;left:7cqw;width:86cqw;top:42cqh;height:37cqh}
  .v-fmt-reframe .go{left:7cqw;right:7cqw;top:auto;bottom:7cqh;text-align:center;font-size:5.8cqw;padding:3.4cqw 0}
  .v-fmt-reframe .fmt{right:7cqw;top:37.5cqh;font-size:3.2cqw}
  .v-fmt-reframe .fmt b::after{content:"9:16"}
  .v-fmt-reframe .hz{height:9cqh}
  .v-fmt-reframe .cam{transform-origin:50% 25%}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fmt-reframe .kick{left:7cqw;top:8cqh;font-size:2.4cqw;padding:.9cqw 2cqw}
  .v-fmt-reframe .tt{left:7cqw;top:17cqh;width:52cqw}
  .v-fmt-reframe .ttl{font-size:10cqw}
  .v-fmt-reframe .sub{margin-top:2cqw;font-size:3.4cqw}
  .v-fmt-reframe .cd{--u:1.15cqw;left:48cqw;top:44cqh;width:45cqw;height:46cqh}
  .v-fmt-reframe .go{left:7cqw;top:auto;bottom:10cqh;font-size:3cqw;padding:1.8cqw 3.6cqw}
  .v-fmt-reframe .fmt{right:7cqw;top:9cqh;font-size:2cqw}
  .v-fmt-reframe .fmt b::after{content:"1:1"}
}
`,
};

export const fmtSafeZones: SceneSpec = {
  id: "fmt-safe-zones",
  slug: "mg-fmt-safe-zones",
  name: "Safe-Zone Feed Check",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "platform-ui-ghosts-over-safe-area",
  energy: "calm",
  settle: 4.6,
  colors: { ink: "#F3ECD8", accent: "#C8F560", secondary: "#4FD1A5", paper: "#0D3427" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["social", "safe-area", "launch"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen 2.0 · out now", maxChars: 24, role: "kicker" },
    { key: "headline", label: "Headline", default: "Your whole team, one workspace.", maxChars: 40, role: "headline" },
    { key: "badge", label: "Check label", default: "key content in safe area", maxChars: 28, role: "label" },
  ],
  html: `<div class="eb" data-21st-slot="kicker">{{kicker}}</div>
<div class="hl" data-21st-slot="headline">{{headline|words}}</div>
<div class="cd">
  <div class="ch"><i></i>Launch week<span class="av"><b></b><b></b><b></b></span></div>
  <div class="rw"><s></s>Brief drafted by Lumen<em>Mon</em></div>
  <div class="rw"><s></s>Assets reviewed by Sam<em>Tue</em></div>
  <div class="rw"><u></u>Ship to everyone<em>Fri</em></div>
</div>
<i class="hz zt"></i><i class="hz zb"></i><i class="hz zr"></i>
<div class="scan"></div>
<div class="gh gt"><i></i><div><b>lumen</b><small>Sponsored</small></div><span>···</span></div>
<div class="gh gr">
  <div><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/></svg>12k</div>
  <div><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"/></svg>348</div>
  <div><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"><path d="M21 4 3 11l7 2.5L12.5 21Z"/><path d="m10 13.5 5-4.5"/></svg>1.2k</div>
</div>
<div class="gh gb"><p><b>lumen</b> Meet the new workspace for launch week … <b>more</b></p><div class="cta">Learn more<span>›</span></div></div>
<div class="gh pg"><i></i></div>
<div class="ok"><span class="tick">✓</span><span data-21st-slot="badge">{{badge}}</span></div>`,
  css: `
.v-fmt-safe-zones{color:var(--ink);font-family:var(--font-body)}
.v-fmt-safe-zones[data-backdrop="on"]{background:radial-gradient(80% 45% at 75% 18%,color-mix(in srgb,var(--secondary) 28%,var(--paper)) 0%,transparent 70%),radial-gradient(60% 40% at 10% 90%,color-mix(in srgb,var(--secondary) 16%,var(--paper)) 0%,transparent 70%),var(--paper)}
.v-fmt-safe-zones[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-fmt-safe-zones .eb{position:absolute;left:6cqw;top:19cqh;font-family:var(--font-mono);font-size:1.5cqw;color:var(--accent);animation:fmt-safe-zones-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fmt-safe-zones .hl{position:absolute;left:6cqw;top:26cqh;width:44cqw;font-family:var(--font-display);font-size:6.4cqw;line-height:.98;letter-spacing:-.02em}
.v-fmt-safe-zones .w{--delay:calc(var(--i) * .08s);display:inline-block;animation:fmt-safe-zones-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fmt-safe-zones .w:last-child{color:var(--accent);font-style:italic}
@keyframes fmt-safe-zones-in1{0%,2%{opacity:0;transform:translateY(2cqh)}10%,90%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(0)}}
@keyframes fmt-safe-zones-in2{0%,4%{opacity:0;transform:translateY(4cqh);filter:blur(.6cqmin)}15%,90%{opacity:1;transform:translateY(0);filter:blur(0)}97%,100%{opacity:0;transform:translateY(0);filter:blur(0)}}
.v-fmt-safe-zones .cd{--u:.5cqw;position:absolute;left:55cqw;top:28cqh;width:calc(70*var(--u));padding:calc(4*var(--u));border-radius:calc(3.6*var(--u));background:#f6f1e3;color:#14231C;box-shadow:0 calc(3*var(--u)) calc(7*var(--u)) rgba(0,0,0,.35);animation:fmt-safe-zones-cd 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fmt-safe-zones-cd{0%,8%{opacity:0;transform:translateY(6cqh) scale(.96)}20%{opacity:1;transform:translateY(0) scale(1);animation-timing-function:cubic-bezier(.45,0,.55,1)}55%,90%{opacity:1;transform:translateY(-1cqh) scale(1)}97%,100%{opacity:0;transform:translateY(-1cqh) scale(1)}}
.v-fmt-safe-zones .ch{display:flex;align-items:center;gap:calc(2*var(--u));font-weight:600;font-size:calc(3.2*var(--u));letter-spacing:-.02em}
.v-fmt-safe-zones .ch i{width:calc(4.6*var(--u));height:calc(4.6*var(--u));border-radius:calc(1.4*var(--u));background:conic-gradient(from 210deg,var(--accent),var(--secondary),var(--paper),var(--accent))}
.v-fmt-safe-zones .av{margin-left:auto;display:flex}
.v-fmt-safe-zones .av b{width:calc(4*var(--u));height:calc(4*var(--u));border-radius:50%;margin-left:calc(-1.2*var(--u));border:calc(.5*var(--u)) solid #f6f1e3}
.v-fmt-safe-zones .av b:nth-child(1){background:#ffb38a}
.v-fmt-safe-zones .av b:nth-child(2){background:#8fc3ff}
.v-fmt-safe-zones .av b:nth-child(3){background:#b9babe}
.v-fmt-safe-zones .rw{display:flex;align-items:center;gap:calc(2*var(--u));margin-top:calc(2.4*var(--u));padding:calc(2*var(--u)) calc(2.4*var(--u));border-radius:calc(2*var(--u));background:#fffaf0;box-shadow:0 0 0 1px rgba(21,45,35,.07);font-size:calc(2.6*var(--u))}
.v-fmt-safe-zones .ch+.rw{margin-top:calc(3.2*var(--u))}
.v-fmt-safe-zones .rw s{width:calc(3*var(--u));height:calc(3*var(--u));border-radius:50%;flex:none;background:#0D3427 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4.5 8.3l2.2 2.2 4.8-4.8' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/100% no-repeat}
.v-fmt-safe-zones .rw u{width:calc(3*var(--u));height:calc(3*var(--u));border-radius:50%;flex:none;box-shadow:inset 0 0 0 calc(.45*var(--u)) #b9b29e}
.v-fmt-safe-zones .rw em{margin-left:auto;font-style:normal;font-family:var(--font-mono);font-size:calc(2.1*var(--u));color:#8b8571}
.v-fmt-safe-zones .gh{--u:.5cqw;position:absolute;color:#fff;animation:fmt-safe-zones-gh 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes fmt-safe-zones-gh{0%,22%{opacity:0;filter:blur(.6cqmin)}32%,86%{opacity:.62;filter:blur(0)}93%,100%{opacity:0;filter:blur(0)}}
.v-fmt-safe-zones .gt{left:3cqw;right:3cqw;top:2.4cqh;display:flex;align-items:center;gap:calc(2.2*var(--u))}
.v-fmt-safe-zones .gt i{width:calc(6.4*var(--u));height:calc(6.4*var(--u));border-radius:50%;box-shadow:inset 0 0 0 calc(.5*var(--u)) #fff,inset 0 0 0 calc(4*var(--u)) rgba(255,255,255,.35)}
.v-fmt-safe-zones .gt b{display:block;font-weight:600;font-size:calc(3*var(--u))}
.v-fmt-safe-zones .gt small{display:block;font-size:calc(2.4*var(--u));opacity:.85}
.v-fmt-safe-zones .gt span{margin-left:auto;font-size:calc(4*var(--u));letter-spacing:.1em}
.v-fmt-safe-zones .gr{display:none;right:3cqw;top:40cqh;flex-direction:column;align-items:center;gap:calc(3*var(--u));font-size:calc(2.1*var(--u));font-weight:600}
.v-fmt-safe-zones .gr div{display:flex;flex-direction:column;align-items:center;gap:calc(.6*var(--u))}
.v-fmt-safe-zones .gr svg{width:calc(5.8*var(--u));height:calc(5.8*var(--u))}
.v-fmt-safe-zones .gb{left:3cqw;right:3cqw;bottom:5cqh;display:flex;align-items:center;justify-content:space-between;gap:3cqw}
.v-fmt-safe-zones .gb p{margin:0;font-size:calc(2.7*var(--u));line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v-fmt-safe-zones .gb p b{font-weight:600}
.v-fmt-safe-zones .gb .cta{display:flex;gap:calc(3*var(--u));justify-content:space-between;align-items:center;padding:calc(1.6*var(--u)) calc(2.6*var(--u));border-radius:calc(1.4*var(--u));background:rgba(255,255,255,.18);font-size:calc(2.8*var(--u));font-weight:600;white-space:nowrap}
.v-fmt-safe-zones .pg{left:3cqw;right:3cqw;bottom:2cqh;height:calc(.6*var(--u));border-radius:1cqw;background:rgba(255,255,255,.3);overflow:hidden}
.v-fmt-safe-zones .pg i{position:absolute;inset:0;background:#fff;transform-origin:0 50%;animation:fmt-safe-zones-pg 6s linear infinite}
@keyframes fmt-safe-zones-pg{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
.v-fmt-safe-zones .hz{position:absolute;background:repeating-linear-gradient(135deg,rgba(255,96,96,.22) 0 1cqmin,rgba(255,96,96,0) 1cqmin 2.8cqmin);animation:fmt-safe-zones-hz 6s linear infinite}
@keyframes fmt-safe-zones-hz{0%,26%{opacity:0}36%,86%{opacity:1}93%,100%{opacity:0}}
.v-fmt-safe-zones .zt{left:0;right:0;top:0;height:12cqh;border-bottom:2px dashed rgba(255,130,130,.9)}
.v-fmt-safe-zones .zb{left:0;right:0;bottom:0;height:16cqh;border-top:2px dashed rgba(255,130,130,.9)}
.v-fmt-safe-zones .zr{display:none;right:0;top:12cqh;bottom:16cqh;width:14cqw;border-left:2px dashed rgba(255,130,130,.9)}
.v-fmt-safe-zones .ok{position:absolute;right:6cqw;top:16cqh;display:flex;align-items:center;gap:.8cqw;padding:.8cqw 1.5cqw;border-radius:3cqw;background:var(--accent);color:var(--paper);font-family:var(--font-mono);font-size:1.4cqw;font-weight:600;white-space:nowrap;box-shadow:0 1.4cqmin 3cqmin rgba(0,0,0,.3);animation:fmt-safe-zones-ok 6s cubic-bezier(.34,1.56,.64,1) infinite}
@keyframes fmt-safe-zones-ok{0%,36%{opacity:0;transform:scale(.6)}44%,86%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(1)}}
.v-fmt-safe-zones .scan{position:absolute;left:4cqw;right:4cqw;top:12cqh;height:.3cqmin;background:linear-gradient(90deg,transparent,var(--accent),transparent);box-shadow:0 0 2cqmin color-mix(in srgb,var(--accent) 60%,transparent);opacity:0;animation:fmt-safe-zones-scan 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes fmt-safe-zones-scan{0%,38%{opacity:0;transform:translateY(0)}42%{opacity:.9}70%{opacity:.9;transform:translateY(72cqh)}74%,100%{opacity:0;transform:translateY(72cqh)}}
@keyframes fmt-safe-zones-scan2{0%,38%{opacity:0;transform:translateY(0)}42%{opacity:.9}70%{opacity:.9;transform:translateY(63cqh)}74%,100%{opacity:0;transform:translateY(63cqh)}}
@container (max-aspect-ratio: 4/5){
  .v-fmt-safe-zones .zt{height:13cqh}
  .v-fmt-safe-zones .zb{height:24cqh}
  .v-fmt-safe-zones .zr{display:block;top:13cqh;bottom:24cqh;width:14cqw}
  .v-fmt-safe-zones .gh{--u:1.1cqw}
  .v-fmt-safe-zones .gt{left:4cqw;right:4cqw;top:3.5cqh}
  .v-fmt-safe-zones .gr{display:flex;right:3cqw;top:44cqh}
  .v-fmt-safe-zones .gb{left:5cqw;right:5cqw;bottom:auto;top:78cqh;flex-direction:column;align-items:stretch;gap:2cqw}
  .v-fmt-safe-zones .pg{left:5cqw;right:5cqw;bottom:2cqh}
  .v-fmt-safe-zones .eb{left:7cqw;top:16cqh;font-size:5.4cqw}
  .v-fmt-safe-zones .hl{left:7cqw;top:21cqh;width:76cqw;font-size:14cqw}
  .v-fmt-safe-zones .cd{--u:1.04cqw;left:7cqw;top:48cqh}
  .v-fmt-safe-zones .ok{right:auto;left:7cqw;max-width:72cqw;white-space:normal;line-height:1.2;top:auto;bottom:4.5cqh;gap:2cqw;padding:2.2cqw 4cqw;border-radius:8cqw;font-size:5.4cqw}
  .v-fmt-safe-zones .scan{top:13cqh;animation-name:fmt-safe-zones-scan2}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fmt-safe-zones .zt{height:12cqh}
  .v-fmt-safe-zones .zb{height:20cqh}
  .v-fmt-safe-zones .zr{display:block;top:12cqh;bottom:20cqh;width:11cqw}
  .v-fmt-safe-zones .gh{--u:.8cqw}
  .v-fmt-safe-zones .gt{top:2.5cqh}
  .v-fmt-safe-zones .gr{display:flex;right:2cqw;top:40cqh}
  .v-fmt-safe-zones .gb{bottom:auto;top:83cqh;left:4cqw;right:4cqw}
  .v-fmt-safe-zones .eb{left:6cqw;top:16cqh;font-size:2.4cqw}
  .v-fmt-safe-zones .hl{left:6cqw;top:21cqh;width:66cqw;font-size:8.6cqw}
  .v-fmt-safe-zones .cd{--u:.72cqw;left:6cqw;top:46cqh}
  .v-fmt-safe-zones .ok{right:14cqw;top:15cqh;font-size:2.1cqw;padding:1cqw 2cqw}
}
`,
};

const ORBIT_ICONS = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="#4fd1ff" stroke-width="2.2" stroke-linecap="round"><path d="M3 8h10.5a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M4 16a8 8 0 0 1 16 0Z" fill="#ffb547"/><path d="M2 19.5h20" stroke="#ffb547" stroke-width="2" stroke-linecap="round"/><path d="M12 3.5v2.2M5.4 6.2 7 7.8M18.6 6.2 17 7.8" stroke="#ffb547" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M12 2.5 21 7.5 12 12.5 3 7.5Z" fill="#ffb08a"/><path d="M3 7.5v9l9 5v-9Z" fill="#ff7a45"/><path d="M21 7.5v9l-9 5v-9Z" fill="#c9502a"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M4.5 19.5C4.5 10.5 10.5 4.5 19.5 4.5c0 9-6 15-15 15Z" fill="#5be38c"/><path d="M4.5 19.5 14 10" stroke="#0f2a1b" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="6" fill="#ff6fb5"/><circle cx="15" cy="12" r="6" fill="none" stroke="#ff6fb5" stroke-width="2.2"/></svg>`,
  `<svg viewBox="0 0 24 24"><path d="M2.5 16 12 6.5l9.5 9.5h-4.6L12 11.1 7.1 16Z" fill="#799dff"/><path d="M8.5 19.5 12 16l3.5 3.5Z" fill="#799dff" opacity=".6"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="#5b8cff"><path d="M12 2.5l3.5 3.5L12 9.5 8.5 6Z"/><path d="M6 8.5l3.5 3.5L6 15.5 2.5 12Z" opacity=".7"/><path d="M18 8.5l3.5 3.5-3.5 3.5-3.5-3.5Z" opacity=".7"/><path d="M12 14.5l3.5 3.5-3.5 3.5L8.5 18Z" opacity=".45"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none"><path d="M2.5 13c2.4-5 4.8-5 7.1 0s4.8 5 7.2 0" stroke="#ffd84a" stroke-width="2.4" stroke-linecap="round"/><circle cx="20" cy="9" r="2" fill="#ffd84a"/></svg>`,
];
const ORBIT_SPOKES = ORBIT_ICONS.map((icon, i) => `<div class="sp ${i % 2 ? "gb" : "ga"}" style="--a:${22.5 + i * 45}deg"><i class="ln"></i><div class="dw"><i class="dt"></i></div><div class="slot"><div class="tl"><div class="ti">${icon}</div></div></div></div>`).join("\n      ");

export const logoOrbit: SceneSpec = {
  id: "logo-orbit",
  slug: "mg-logo-orbit",
  name: "Integrations Orbit",
  kind: "scene",
  job: "logos",
  language: "aura",
  mechanic: "logos-orbit-and-wire-to-core",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#F0F2F6", accent: "#3D63FF", secondary: "#C6C8CC", paper: "#07070A" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["integrations", "logos", "orbit"],
  fields: [
    { key: "kicker", label: "Kicker", default: "integrations", maxChars: 20, role: "kicker" },
    { key: "headline", label: "Headline", default: "Works with your stack.", maxChars: 30, role: "headline" },
    { key: "body", label: "Body", default: "40+ tools connect in one click. No glue code, no exports.", maxChars: 70, role: "body" },
    { key: "brand", label: "Brand", default: "Lumen", maxChars: 8, role: "name" },
  ],
  html: `<div class="txt">
  <small data-21st-slot="kicker">{{kicker}}</small>
  <h5 data-21st-slot="headline">{{headline|words}}</h5>
  <p data-21st-slot="body">{{body}}</p>
  <ul><li>two-way sync</li><li>SSO</li><li>audit log</li></ul>
</div>
<div class="orb">
  <div class="rg rg2"></div><div class="rg rg1"></div>
  <div class="ring">
      ${ORBIT_SPOKES}
  </div>
  <div class="pulse"></div>
  <div class="core"><i></i><span data-21st-slot="brand">{{brand}}</span></div>
</div>`,
  css: `
.v-logo-orbit{color:var(--ink);font-family:var(--font-body)}
.v-logo-orbit[data-backdrop="on"]{background:radial-gradient(40% 70% at 68% 50%,color-mix(in srgb,var(--accent) 22%,transparent) 0%,transparent 70%),radial-gradient(90% 90% at 0% 0%,color-mix(in srgb,var(--paper) 88%,var(--accent)) 0%,var(--paper) 60%)}
.v-logo-orbit .txt{position:absolute;left:6cqw;top:24cqh;width:36cqw;animation:logo-orbit-txt 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes logo-orbit-txt{0%,3%{opacity:0;transform:translateY(2.8cqh)}16%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
.v-logo-orbit .txt small{display:block;font-family:var(--font-mono);font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-logo-orbit .txt h5{margin:1.2cqw 0 0;font-family:var(--font-display);font-weight:400;font-size:5.8cqw;line-height:.98;letter-spacing:-.02em}
.v-logo-orbit .w{display:inline-block;margin-right:.22em}
.v-logo-orbit .w:nth-last-child(-n+2){font-style:italic;background:linear-gradient(90deg,var(--secondary),var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.08em}
.v-logo-orbit .txt p{margin:1.8cqw 0 0;font-size:1.5cqw;line-height:1.45;color:color-mix(in srgb,var(--ink) 66%,transparent)}
.v-logo-orbit .txt ul{list-style:none;margin:2cqw 0 0;padding:0;display:flex;gap:1.6cqw;font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 78%,transparent)}
.v-logo-orbit .txt li::before{content:"✓ ";color:var(--accent)}
.v-logo-orbit .orb{--u:1cqw;position:absolute;left:68cqw;top:50cqh;width:0;height:0}
.v-logo-orbit .rg{position:absolute;border-radius:50%;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 8%,transparent)}
.v-logo-orbit .rg1{left:calc(-18.5*var(--u));top:calc(-18.5*var(--u));width:calc(37*var(--u));height:calc(37*var(--u))}
.v-logo-orbit .rg2{left:calc(-26*var(--u));top:calc(-26*var(--u));width:calc(52*var(--u));height:calc(52*var(--u));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 4%,transparent)}
.v-logo-orbit .ring{position:absolute;left:0;top:0;width:0;height:0;animation:logo-orbit-spin 6s linear infinite}
@keyframes logo-orbit-spin{0%{transform:rotate(0deg)}100%{transform:rotate(40deg)}}
.v-logo-orbit .sp{position:absolute;left:0;top:0;transform:rotate(var(--a))}
.v-logo-orbit .ln{position:absolute;left:calc(5.6*var(--u));top:calc(-.06*var(--u));width:calc(9.5*var(--u));height:max(1px,calc(.12*var(--u)));background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 8%,transparent),color-mix(in srgb,var(--accent) 75%,transparent));transform-origin:100% 50%}
.v-logo-orbit .ga .ln{animation:logo-orbit-la 6s linear infinite}
.v-logo-orbit .gb .ln{animation:logo-orbit-lb 6s linear infinite}
@keyframes logo-orbit-la{0%,18%{transform:scaleX(0);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}28%,86%{transform:scaleX(1);opacity:1}93%,100%{transform:scaleX(1);opacity:0}}
@keyframes logo-orbit-lb{0%,22%{transform:scaleX(0);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}32%,86%{transform:scaleX(1);opacity:1}93%,100%{transform:scaleX(1);opacity:0}}
.v-logo-orbit .dw{position:absolute;left:0;top:0;animation:logo-orbit-dw 6s linear infinite}
@keyframes logo-orbit-dw{0%,33%{opacity:0}38%,84%{opacity:1}90%,100%{opacity:0}}
.v-logo-orbit .dt{position:absolute;left:calc(-.45*var(--u));top:calc(-.45*var(--u));width:calc(.9*var(--u));height:calc(.9*var(--u));border-radius:50%;background:#fff;box-shadow:0 0 calc(1*var(--u)) color-mix(in srgb,var(--accent) 60%,#fff),0 0 calc(2*var(--u)) var(--accent)}
.v-logo-orbit .ga .dt{animation:logo-orbit-da 1.5s cubic-bezier(.55,0,.75,.6) infinite}
.v-logo-orbit .gb .dt{animation:logo-orbit-da 2s cubic-bezier(.55,0,.75,.6) infinite}
@keyframes logo-orbit-da{0%{transform:translateX(calc(15*var(--u)));opacity:0}15%{opacity:1}85%{opacity:1}100%{transform:translateX(calc(5.8*var(--u)));opacity:0}}
.v-logo-orbit .slot{position:absolute;left:calc(18.5*var(--u));top:0;transform:rotate(calc(-1 * var(--a)))}
.v-logo-orbit .tl{position:absolute;left:calc(-3.1*var(--u));top:calc(-3.1*var(--u));width:calc(6.2*var(--u));height:calc(6.2*var(--u));animation:logo-orbit-counter 6s linear infinite}
@keyframes logo-orbit-counter{0%{transform:rotate(0deg)}100%{transform:rotate(-40deg)}}
.v-logo-orbit .ti{width:100%;height:100%;display:grid;place-items:center;border-radius:calc(1.7*var(--u));background:linear-gradient(180deg,#1c1d20,#111215);box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),inset 0 1px 0 rgba(255,255,255,.12),0 calc(1.2*var(--u)) calc(2.4*var(--u)) rgba(0,0,0,.55)}
.v-logo-orbit .ti svg{width:calc(3.3*var(--u));height:calc(3.3*var(--u))}
.v-logo-orbit .ga .ti{animation:logo-orbit-ta 6s linear infinite}
.v-logo-orbit .gb .ti{animation:logo-orbit-tb 6s linear infinite}
@keyframes logo-orbit-ta{0%,4%{opacity:0;transform:scale(.3);filter:blur(.6cqmin);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}15%,86%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}95%,100%{opacity:0;transform:scale(.6);filter:blur(0)}}
@keyframes logo-orbit-tb{0%,8%{opacity:0;transform:scale(.3);filter:blur(.6cqmin);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}19%,87%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}96%,100%{opacity:0;transform:scale(.6);filter:blur(0)}}
.v-logo-orbit .core{position:absolute;left:calc(-5.6*var(--u));top:calc(-5.6*var(--u));width:calc(11.2*var(--u));height:calc(11.2*var(--u));border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(.5*var(--u));background:radial-gradient(circle at 50% 30%,color-mix(in srgb,var(--accent) 22%,#121316),#121316 70%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),0 0 calc(4*var(--u)) color-mix(in srgb,var(--accent) 45%,transparent),0 calc(1.6*var(--u)) calc(3*var(--u)) rgba(0,0,0,.6);color:#F0F2F6;font-weight:600;font-size:1.5cqw;letter-spacing:-.02em;white-space:nowrap;animation:logo-orbit-core 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes logo-orbit-core{0%{opacity:0;transform:scale(.6)}8%,30%{opacity:1;transform:scale(1)}34%{transform:scale(1.08)}40%,88%{opacity:1;transform:scale(1)}97%,100%{opacity:0;transform:scale(.8)}}
.v-logo-orbit .core i{width:36%;height:36%;flex:none;border-radius:50%;background:conic-gradient(from 200deg,var(--secondary),var(--accent),var(--secondary));box-shadow:inset 0 0 0 calc(.7*var(--u)) rgba(18,19,22,.55),0 0 calc(1.6*var(--u)) color-mix(in srgb,var(--secondary) 55%,transparent)}
.v-logo-orbit .pulse{position:absolute;left:calc(-5.6*var(--u));top:calc(-5.6*var(--u));width:calc(11.2*var(--u));height:calc(11.2*var(--u));border-radius:50%;box-shadow:0 0 0 calc(.25*var(--u)) color-mix(in srgb,var(--accent) 80%,transparent);opacity:0;animation:logo-orbit-pulse 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes logo-orbit-pulse{0%,31%{opacity:0;transform:scale(1)}32%{opacity:1}46%,100%{opacity:0;transform:scale(2.3)}}
@container (max-aspect-ratio: 4/5){
  .v-logo-orbit .txt{left:7cqw;right:7cqw;width:auto;top:8cqh;bottom:7cqh}
  .v-logo-orbit .txt small{font-size:5.4cqw}
  .v-logo-orbit .txt h5{margin-top:2.4cqw;font-size:14cqw}
  .v-logo-orbit .txt p{position:absolute;left:0;right:0;bottom:0;margin:0;font-size:5.4cqw;line-height:1.3}
  .v-logo-orbit .txt ul{display:none}
  .v-logo-orbit .orb{--u:1.9cqw;left:50cqw;top:57cqh}
  .v-logo-orbit .core,.v-logo-orbit .pulse{left:-16cqw;top:-16cqw;width:32cqw;height:32cqw;font-size:5.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-logo-orbit .txt{left:6cqw;right:6cqw;width:auto;top:6cqw}
  .v-logo-orbit .txt small{font-size:2.2cqw}
  .v-logo-orbit .txt h5{width:52cqw;font-size:8cqw}
  .v-logo-orbit .txt p{position:absolute;left:60cqw;right:0;top:4.6cqw;margin:0;font-size:2.2cqw}
  .v-logo-orbit .txt ul{display:none}
  .v-logo-orbit .orb{--u:1.2cqw;left:50cqw;top:63cqh}
  .v-logo-orbit .core,.v-logo-orbit .pulse{left:-7cqw;top:-7cqw;width:14cqw;height:14cqw;font-size:2.2cqw}
}
`,
};

const W = (cls: string, k: string, x: number, y: number, r: number, icon: string, label: string) =>
  `<div class="c ${cls} ${k}" style="--x:${x};--y:${y};--r:${r}">${icon}${label}</div>`;
const I = {
  a: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M3 8h10.5a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/></svg>`,
  b: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 16a8 8 0 0 1 16 0Z"/><rect x="2" y="18.5" width="20" height="2" rx="1"/></svg>`,
  c: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 21 7.5 12 12.5 3 7.5Z" opacity=".55"/><path d="M3 7.5v9l9 5v-9Z"/><path d="M21 7.5v9l-9 5v-9Z" opacity=".8"/></svg>`,
  d: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 19.5C4.5 10.5 10.5 4.5 19.5 4.5c0 9-6 15-15 15Z"/></svg>`,
  e: `<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="6" fill="currentColor"/><circle cx="15" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>`,
  f: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 17 12 7.5l9.5 9.5h-4.6L12 12.1 7.1 17Z"/></svg>`,
  g: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l3.5 3.5L12 9.5 8.5 6Z"/><path d="M6 8.5l3.5 3.5L6 15.5 2.5 12Z"/><path d="M18 8.5l3.5 3.5-3.5 3.5-3.5-3.5Z"/><path d="M12 14.5l3.5 3.5-3.5 3.5L8.5 18Z"/></svg>`,
  h: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M2.5 13c2.4-5 4.8-5 7.1 0s4.8 5 7.2 0"/><circle cx="20" cy="8.5" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  i: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 12 17 7"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>`,
  j: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 18 11h-3l4.5 7H4.5L9 11H6Z"/><rect x="11" y="18" width="2" height="3.5"/></svg>`,
  k: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9.5" y="3" width="5" height="18" rx="1"/><circle cx="19" cy="18.5" r="2.5"/></svg>`,
  l: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 20 8.5 8l4 6.5 3-4.5 7 10Z"/></svg>`,
};
const ROW2 = [
  W("w5", "k1", -18, 3, 12, I.e, "parable"),
  W("w6", "k2", -7, 10, -16, I.f, "Kestrel"),
  W("w7", "k3", 8, 9, 18, I.g, "tessel"),
  W("w8", "k4", 17, 2, -12, I.h, "Morrow"),
];

export const logoWallAssemble: SceneSpec = {
  id: "logo-wall-assemble",
  slug: "mg-logo-wall-assemble",
  name: "Customer Logo Wall",
  kind: "scene",
  job: "logos",
  language: "editorial",
  mechanic: "logos-fly-into-grid-row-highlight",
  energy: "calm",
  settle: 4.0,
  colors: { ink: "#1C1B18", accent: "#1C1B18", secondary: "#8B867A", paper: "#F3F0E8" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["customers", "social-proof", "logo-wall"],
  fields: [
    { key: "kicker", label: "Kicker", default: "customers", maxChars: 18, role: "kicker" },
    { key: "headline", label: "Headline", default: "Trusted by teams at", maxChars: 30, role: "headline" },
    { key: "stat", label: "Stat", default: "12,000+ teams · 84 countries", maxChars: 32, role: "label" },
    { key: "more", label: "Footnote", default: "and 11,988 more teams", maxChars: 30, role: "caption" },
  ],
  html: `<div class="top"><div class="hd"><small data-21st-slot="kicker">{{kicker}}</small><h5 data-21st-slot="headline">{{headline}}</h5></div><span class="st" data-21st-slot="stat">{{stat}}</span></div>
<div class="grid"></div>
<div class="band"></div>
<div class="row r1">
  ${W("w1", "k1", -14, -9, -18, I.a, "Northwind")}
  ${W("w2", "k2", 6, -12, 14, I.b, "Halcyon")}
  ${W("w3", "k3", -4, -14, -10, I.c, "quarry")}
  ${W("w4", "k4", 13, -8, 20, I.d, "Fernway")}
</div>
<div class="row r2">
  ${ROW2.join("\n  ")}
</div>
<div class="row r2c">
  ${ROW2.join("\n  ")}
</div>
<div class="row r3">
  ${W("w9", "k1", -12, 12, -20, I.i, "Sundial")}
  ${W("w10", "k2", 5, 15, 10, I.j, "brightpine")}
  ${W("w11", "k3", -3, 13, -14, I.k, "obelo")}
  ${W("w12", "k4", 15, 11, 16, I.l, "Ridgeline")}
</div>
<div class="more"><span data-21st-slot="more">{{more}}</span><span class="rd">↗ read the stories</span></div>`,
  css: `
.v-logo-wall-assemble{--gt:27.7cqh;--rh:19.5cqh;--cols:4;color:var(--ink);font-family:var(--font-body)}
.v-logo-wall-assemble[data-backdrop="on"]{background:radial-gradient(70% 60% at 50% 0%,color-mix(in srgb,var(--paper) 70%,#fff) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper) 94%,var(--ink)) 100%)}
.v-logo-wall-assemble .top{position:absolute;left:7cqw;right:7cqw;top:8.5cqh;display:flex;align-items:flex-end;justify-content:space-between;gap:3cqw}
.v-logo-wall-assemble .top small{display:block;font-family:var(--font-mono);font-size:1.2cqw;color:var(--secondary)}
.v-logo-wall-assemble .top h5{margin:.5cqw 0 0;font-family:var(--font-display);font-weight:400;font-size:4.4cqw;line-height:1.05;letter-spacing:-.02em;clip-path:inset(0 0 100% 0);animation:logo-wall-assemble-h 6s linear infinite}
@keyframes logo-wall-assemble-h{0%,38%{clip-path:inset(0 0 100% 0);transform:translateY(3cqh);animation-timing-function:cubic-bezier(.2,.8,.2,1)}47%,86%{clip-path:inset(-20% -5% -20% -5%);transform:translateY(0);opacity:1}92%,100%{clip-path:inset(-20% -5% -20% -5%);transform:translateY(0);opacity:0}}
.v-logo-wall-assemble .st{font-family:var(--font-mono);font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 70%,transparent);white-space:nowrap;animation:logo-wall-assemble-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
@keyframes logo-wall-assemble-fade{0%,42%{opacity:0;transform:translateY(1.4cqh)}49%,86%{opacity:1;transform:translateY(0)}92%,100%{opacity:0;transform:translateY(0)}}
.v-logo-wall-assemble .grid{position:absolute;left:7cqw;top:var(--gt);width:86cqw;height:calc(3 * var(--rh));background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 13%,transparent) 1px,transparent 1px) 0 0/calc(100% / var(--cols)) 100%,linear-gradient(color-mix(in srgb,var(--ink) 13%,transparent) 1px,transparent 1px) 0 0/100% calc(100% / var(--hr,3));box-shadow:inset -1px -1px 0 color-mix(in srgb,var(--ink) 13%,transparent);clip-path:inset(50% 50% 50% 50%);animation:logo-wall-assemble-grid 6s linear infinite}
@keyframes logo-wall-assemble-grid{0%,4%{clip-path:inset(50% 50% 50% 50%);animation-timing-function:cubic-bezier(.65,0,.35,1)}24%,88%{clip-path:inset(0 0 0 0);opacity:1}96%,100%{clip-path:inset(0 0 0 0);opacity:0}}
.v-logo-wall-assemble .band{position:absolute;left:6.4cqw;top:calc(var(--gt) + var(--rh) - .3cqh);width:87.2cqw;height:calc(var(--rh) + .6cqh);border-radius:1.2cqmin;overflow:hidden;background:var(--accent);box-shadow:0 1.6cqmin 3.2cqmin color-mix(in srgb,var(--accent) 25%,transparent);transform-origin:0 50%;transform:scaleX(0);animation:logo-wall-assemble-band 6s linear infinite}
@keyframes logo-wall-assemble-band{0%,38%{transform:scaleX(0);transform-origin:0 50%;animation-timing-function:cubic-bezier(.65,0,.35,1)}47%,86%{transform:scaleX(1);transform-origin:0 50%;animation-timing-function:cubic-bezier(.65,0,.35,1)}86.01%{transform-origin:100% 50%}94%,100%{transform:scaleX(0);transform-origin:100% 50%}}
.v-logo-wall-assemble .band::after{content:"";position:absolute;top:0;bottom:0;left:0;width:22%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.16) 50%,transparent);opacity:0;animation:logo-wall-assemble-sheen 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes logo-wall-assemble-sheen{0%,47%{transform:translateX(-10%);opacity:0}50%{opacity:1}60%{transform:translateX(460%);opacity:1}63%,100%{transform:translateX(460%);opacity:0}}
.v-logo-wall-assemble .row{position:absolute;left:7cqw;width:86cqw;height:var(--rh);display:grid;grid-template-columns:repeat(var(--cols),1fr);font-size:1cqw}
.v-logo-wall-assemble .r1{top:var(--gt)}
.v-logo-wall-assemble .r2,.v-logo-wall-assemble .r2c{top:calc(var(--gt) + var(--rh))}
.v-logo-wall-assemble .r3{top:calc(var(--gt) + 2 * var(--rh))}
.v-logo-wall-assemble .r1,.v-logo-wall-assemble .r3{animation:logo-wall-assemble-dim 6s cubic-bezier(.65,0,.35,1) infinite}
@keyframes logo-wall-assemble-dim{0%,38%{opacity:1}46%,86%{opacity:.3}94%,100%{opacity:1}}
.v-logo-wall-assemble .r2c{color:var(--paper);clip-path:inset(0 100% 0 0);animation:logo-wall-assemble-wipe 6s linear infinite}
@keyframes logo-wall-assemble-wipe{0%,38%{clip-path:inset(0 100% 0 -1cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}47%,86%{clip-path:inset(0 -1cqw 0 -1cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}94%,100%{clip-path:inset(0 -1cqw 0 100%)}}
.v-logo-wall-assemble .c{display:flex;align-items:center;justify-content:center;gap:.35em;white-space:nowrap}
.v-logo-wall-assemble .row:not(.r2c) .c{opacity:0}
.v-logo-wall-assemble .c svg{width:1.15em;height:1.15em;flex:none}
.v-logo-wall-assemble .row:not(.r2c) .k1{animation:logo-wall-assemble-a1 6s linear infinite}
.v-logo-wall-assemble .row:not(.r2c) .k2{animation:logo-wall-assemble-a2 6s linear infinite}
.v-logo-wall-assemble .row:not(.r2c) .k3{animation:logo-wall-assemble-a3 6s linear infinite}
.v-logo-wall-assemble .row:not(.r2c) .k4{animation:logo-wall-assemble-a4 6s linear infinite}
@keyframes logo-wall-assemble-a1{0%,4%{opacity:0;transform:translate(calc(var(--x) * 1cqw),calc(var(--y) * 1cqw)) rotate(calc(var(--r) * 1deg)) scale(.7);filter:blur(.6cqmin);animation-timing-function:cubic-bezier(.2,.8,.2,1)}9%{opacity:1}20%,88%{opacity:1;transform:translate(0,0) rotate(0deg) scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.5,0,.75,0)}96%,100%{opacity:0;transform:translate(0,2cqw) rotate(0deg) scale(1);filter:blur(0)}}
@keyframes logo-wall-assemble-a2{0%,7%{opacity:0;transform:translate(calc(var(--x) * 1cqw),calc(var(--y) * 1cqw)) rotate(calc(var(--r) * 1deg)) scale(.7);filter:blur(.6cqmin);animation-timing-function:cubic-bezier(.2,.8,.2,1)}12%{opacity:1}23%,88.5%{opacity:1;transform:translate(0,0) rotate(0deg) scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.5,0,.75,0)}96.5%,100%{opacity:0;transform:translate(0,2cqw) rotate(0deg) scale(1);filter:blur(0)}}
@keyframes logo-wall-assemble-a3{0%,10%{opacity:0;transform:translate(calc(var(--x) * 1cqw),calc(var(--y) * 1cqw)) rotate(calc(var(--r) * 1deg)) scale(.7);filter:blur(.6cqmin);animation-timing-function:cubic-bezier(.2,.8,.2,1)}15%{opacity:1}26%,89%{opacity:1;transform:translate(0,0) rotate(0deg) scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.5,0,.75,0)}97%,100%{opacity:0;transform:translate(0,2cqw) rotate(0deg) scale(1);filter:blur(0)}}
@keyframes logo-wall-assemble-a4{0%,13%{opacity:0;transform:translate(calc(var(--x) * 1cqw),calc(var(--y) * 1cqw)) rotate(calc(var(--r) * 1deg)) scale(.7);filter:blur(.6cqmin);animation-timing-function:cubic-bezier(.2,.8,.2,1)}18%{opacity:1}29%,89.5%{opacity:1;transform:translate(0,0) rotate(0deg) scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.5,0,.75,0)}97.5%,100%{opacity:0;transform:translate(0,2cqw) rotate(0deg) scale(1);filter:blur(0)}}
.v-logo-wall-assemble .w1{font-weight:700;font-size:1.95em;letter-spacing:-.04em}
.v-logo-wall-assemble .w2{font-family:var(--font-display);font-style:italic;font-size:2.6em;letter-spacing:-.01em}
.v-logo-wall-assemble .w3{font-family:var(--font-mono);font-weight:600;font-size:1.7em;letter-spacing:-.04em}
.v-logo-wall-assemble .w4{font-weight:700;font-size:2.1em;letter-spacing:-.05em}
.v-logo-wall-assemble .w5{font-weight:500;font-size:1.6em;letter-spacing:.22em;text-transform:lowercase}
.v-logo-wall-assemble .w6{font-weight:800;font-size:2.15em;letter-spacing:-.06em}
.v-logo-wall-assemble .w7{font-family:var(--font-mono);font-weight:700;font-size:1.8em;letter-spacing:-.04em}
.v-logo-wall-assemble .w8{font-family:var(--font-display);font-size:2.7em;letter-spacing:.01em}
.v-logo-wall-assemble .w9{font-weight:600;font-size:1.9em;letter-spacing:-.02em}
.v-logo-wall-assemble .w10{font-family:var(--font-mono);font-weight:500;font-size:1.5em;letter-spacing:-.03em}
.v-logo-wall-assemble .w11{font-family:var(--font-display);font-size:2.5em;letter-spacing:-.02em}
.v-logo-wall-assemble .w12{font-weight:700;font-size:1.85em;letter-spacing:-.01em}
.v-logo-wall-assemble .more{position:absolute;left:7cqw;right:7cqw;top:89.5cqh;display:flex;justify-content:space-between;gap:3cqw;font-family:var(--font-mono);font-size:1.2cqw;color:var(--secondary);animation:logo-wall-assemble-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-logo-wall-assemble .rd{white-space:nowrap}
@container (max-aspect-ratio: 4/5){
  .v-logo-wall-assemble>*{--gt:30cqh;--rh:18.6cqh;--cols:2;--hr:6}
  .v-logo-wall-assemble .top{top:8cqh;flex-direction:column;align-items:flex-start;gap:2.4cqw}
  .v-logo-wall-assemble .top small{font-size:5.4cqw}
  .v-logo-wall-assemble .top h5{margin-top:1.4cqw;font-size:11cqw}
  .v-logo-wall-assemble .st{font-size:5.4cqw;white-space:normal}
  .v-logo-wall-assemble .row{grid-template-rows:1fr 1fr;font-size:2.5cqw}
  .v-logo-wall-assemble .more{top:auto;bottom:6cqh;flex-direction:column;gap:1.5cqw;font-size:5.4cqw}
  .v-logo-wall-assemble .rd{font-size:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-logo-wall-assemble>*{--gt:30cqh;--rh:17.5cqh}
  .v-logo-wall-assemble .top{top:7cqw;flex-direction:column;align-items:flex-start;gap:1.6cqw}
  .v-logo-wall-assemble .top small{font-size:2.2cqw}
  .v-logo-wall-assemble .top h5{font-size:7cqw}
  .v-logo-wall-assemble .st{font-size:2.2cqw}
  .v-logo-wall-assemble .row{font-size:1.5cqw}
  .v-logo-wall-assemble .more{top:89cqh;font-size:2.2cqw}
}
`,
};

export const FORMAT_SCENES: SceneSpec[] = [fmtReframe, fmtSafeZones, logoOrbit, logoWallAssemble];
