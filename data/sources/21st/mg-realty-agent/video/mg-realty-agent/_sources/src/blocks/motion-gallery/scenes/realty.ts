// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const realtyBlueprint: SceneSpec = {
  id: "realty-blueprint",
  slug: "mg-realty-blueprint",
  name: "Blueprint Floor Plan",
  kind: "scene",
  job: "process",
  language: "editorial",
  mechanic: "floor-plan-wall-draw",
  energy: "calm",
  settle: 3.2,
  colors: {"ink": "#EAF2FF", "accent": "#8CCBFF", "secondary": "#A9C8F0", "paper": "#0F3C6E"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["real-estate", "floor-plan", "blueprint"],
  fields: [
    { key: "brand", label: "Agency", default: "Halden Estates", maxChars: 22, role: "label" },
    { key: "unit", label: "Unit name", default: "Unit 4B", maxChars: 12, role: "headline" },
    { key: "sub", label: "Tagline", default: "Two bedrooms, west light", maxChars: 30, role: "body" },
  ],
  html: `<div class="bp-grid"></div>
<div class="bp-sweep"></div>
<div class="bp-vig"></div>
<div class="bp-sheet">
  <div class="bp-board">
    <div class="bp-dim bp-dim-top"><i></i><span>11.40 m</span></div>
    <div class="bp-dim bp-dim-left"><i></i><span>7.75 m</span></div>
    <div class="bp-plan">
      <div class="bp-floor"></div>
      <svg class="bp-furn" viewBox="0 0 500 340" preserveAspectRatio="none" aria-hidden="true">
        <rect x="12" y="12" width="112" height="26" rx="2"/><rect x="28" y="17" width="24" height="16" rx="4"/>
        <circle cx="84" cy="20" r="5"/><circle cx="100" cy="20" r="5"/><circle cx="84" cy="31" r="4"/><circle cx="100" cy="31" r="4"/>
        <circle cx="200" cy="72" r="20"/><rect x="163" y="66" width="10" height="12" rx="2"/><rect x="227" y="66" width="10" height="12" rx="2"/><rect x="194" y="39" width="12" height="10" rx="2"/><rect x="194" y="95" width="12" height="10" rx="2"/>
        <rect class="bp-rug" x="16" y="116" width="130" height="88" rx="2"/>
        <rect x="24" y="166" width="112" height="34" rx="5"/><path d="M28 192 H132 M61 166 V192 M99 166 V192"/>
        <rect x="52" y="126" width="56" height="24" rx="12"/>
        <rect x="166" y="136" width="30" height="30" rx="6"/><path d="M170 160 H192"/>
        <circle cx="272" cy="24" r="9"/><path d="M272 15 V33 M263 24 H281"/>
        <rect x="372" y="34" width="114" height="104" rx="4"/><rect x="452" y="42" width="26" height="40" rx="5"/><rect x="452" y="90" width="26" height="40" rx="5"/><path d="M412 34 V138"/>
        <rect x="462" y="16" width="22" height="14" rx="2"/><rect x="462" y="144" width="22" height="14" rx="2"/>
        <rect x="302" y="146" width="56" height="26" rx="1"/><path d="M330 146 V172"/>
        <rect x="400" y="196" width="86" height="84" rx="4"/><rect x="456" y="206" width="24" height="64" rx="5"/>
        <rect x="372" y="306" width="80" height="20" rx="1"/><circle cx="412" cy="292" r="7"/>
        <rect x="14" y="244" width="38" height="82" rx="12"/><rect x="20" y="250" width="26" height="70" rx="9"/>
        <rect x="66" y="221" width="28" height="16" rx="6"/>
        <rect x="104" y="306" width="22" height="9" rx="2"/><ellipse cx="115" cy="321" rx="9" ry="8"/>
        <rect x="150" y="222" width="16" height="44" rx="1"/>
      </svg>
      <i class="bp-w bp-wt"></i><i class="bp-w bp-wr"></i><i class="bp-w bp-wb"></i><i class="bp-w bp-wl"></i>
      <i class="bp-w bp-wv1"></i><i class="bp-w bp-wh1"></i><i class="bp-w bp-wh2"></i><i class="bp-w bp-wv2"></i>
      <div class="bp-open">
        <i class="bp-gap" style="left:17cqw;top:32.9cqw;width:5.5cqw;height:1.2cqw"></i>
        <i class="bp-gap" style="left:17cqw;top:20.9cqw;width:9cqw;height:.9cqw"></i>
        <i class="bp-gap" style="left:28.8cqw;top:12cqw;width:.9cqw;height:4.2cqw"></i>
        <i class="bp-gap" style="left:28.8cqw;top:22.5cqw;width:.9cqw;height:4.2cqw"></i>
        <i class="bp-gap" style="left:13.8cqw;top:26cqw;width:.9cqw;height:4cqw"></i>
        <i class="bp-win" style="left:15cqw;top:0;width:10cqw;height:.9cqw"></i>
        <i class="bp-win" style="left:35cqw;top:0;width:9cqw;height:.9cqw"></i>
        <i class="bp-win" style="left:36cqw;top:33.1cqw;width:8cqw;height:.9cqw"></i>
        <i class="bp-win bp-v" style="left:0;top:6cqw;width:.9cqw;height:9cqw"></i>
        <svg class="bp-arcs" viewBox="0 0 500 340" preserveAspectRatio="none" aria-hidden="true">
          <path d="M170 331 V276"/><path class="bp-arc" d="M170 276 A55 55 0 0 1 225 331"/>
          <path d="M295 120 H337"/><path class="bp-arc" d="M337 120 A42 42 0 0 1 295 162"/>
          <path d="M295 225 H337"/><path class="bp-arc" d="M337 225 A42 42 0 0 1 295 267"/>
          <path d="M140 260 H100"/><path class="bp-arc" d="M100 260 A40 40 0 0 0 140 300"/>
        </svg>
      </div>
      <div class="bp-labels">
        <p style="left:2cqw;top:5.4cqw"><b>Living · kitchen</b><span>29.5 m²</span></p>
        <p style="left:30.6cqw;top:2.4cqw"><b>Bedroom</b><span>17.1 m²</span></p>
        <p style="left:30.6cqw;top:27.6cqw"><b>Bedroom</b><span>15.2 m²</span></p>
        <p style="left:5.8cqw;top:24.4cqw"><b>Bath</b><span>7.8 m²</span></p>
        <p style="left:23.2cqw;top:27.6cqw"><b>Hall</b><span>8.7 m²</span></p>
      </div>
      <div class="bp-pen"><i></i></div>
    </div>
    <div class="bp-scale"><div class="bp-bar"><i></i><i></i><em style="left:0">0</em><em style="left:50%">1</em><em style="left:100%">2 m</em></div><span>Level 4 · north up</span></div>
  </div>
</div>
<div class="bp-side">
  <div class="bp-brand" data-21st-slot="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg>{{brand}}</div>
  <div class="bp-title"><span data-21st-slot="unit">{{unit}}</span></div>
  <div class="bp-sub" data-21st-slot="sub">{{sub}}</div>
  <ul class="bp-specs">
    <li><span>Net area</span><b>78.3 m²</b></li>
    <li><span>Bedrooms</span><b>2</b></li>
    <li><span>Ceilings</span><b>2.85 m</b></li>
    <li><span>Floor</span><b>4 of 7</b></li>
  </ul>
  <div class="bp-block">
    <div><span>Sheet</span><b>A-102</b></div>
    <div><span>Scale</span><b>1:100</b></div>
    <svg class="bp-compass" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width=".8" stroke-dasharray="1.5 2"/><path d="M20 5 L24 21 L20 18.5 L16 21 Z" fill="currentColor"/><path d="M20 35 L24 21 L20 23.5 L16 21 Z" fill="none" stroke="currentColor" stroke-width=".8"/><text x="20" y="4.2" text-anchor="middle" font-size="4.6" fill="currentColor" font-weight="700">N</text></svg>
  </div>
</div>`,
  css: `
.v-realty-blueprint{color:var(--ink);font-family:var(--font-mono);--line:color-mix(in srgb,var(--ink) 82%,var(--accent));--floor:color-mix(in srgb,var(--paper) 90%,var(--ink) 10%);--dim:color-mix(in srgb,var(--ink) 78%,var(--accent))}
.v-realty-blueprint[data-backdrop="on"]{background:radial-gradient(120% 100% at 36% 46%,color-mix(in srgb,var(--paper) 88%,var(--ink) 12%) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper) 72%,#000) 100%)}
.v-realty-blueprint .bp-grid{position:absolute;inset:0;--g1:color-mix(in srgb,var(--ink) 14%,transparent);--g2:color-mix(in srgb,var(--ink) 6%,transparent);background-image:linear-gradient(var(--g1) 1px,transparent 1px),linear-gradient(90deg,var(--g1) 1px,transparent 1px),linear-gradient(var(--g2) 1px,transparent 1px),linear-gradient(90deg,var(--g2) 1px,transparent 1px);background-size:5cqw 5cqw,5cqw 5cqw,1.25cqw 1.25cqw,1.25cqw 1.25cqw}
.v-realty-blueprint .bp-sweep{position:absolute;inset:0;background:linear-gradient(100deg,transparent 38%,color-mix(in srgb,var(--accent) 10%,transparent) 50%,transparent 62%);animation:realty-blueprint-sweep 6s linear infinite}
.v-realty-blueprint .bp-vig{position:absolute;inset:0;background:radial-gradient(95% 85% at 40% 46%,transparent 55%,color-mix(in srgb,var(--paper) 50%,rgba(0,0,0,.6)) 100%)}
.v-realty-blueprint[data-backdrop="off"] .bp-grid,.v-realty-blueprint[data-backdrop="off"] .bp-sweep,.v-realty-blueprint[data-backdrop="off"] .bp-vig{display:none}
.v-realty-blueprint .bp-sheet{position:absolute;inset:0;transform-origin:34cqw 28cqw;animation:realty-blueprint-sheet 6s linear infinite}
.v-realty-blueprint .bp-board{position:absolute;left:9cqw;top:10.5cqw;width:50cqw;height:34cqw;transform-origin:0 0}
.v-realty-blueprint .bp-plan{position:absolute;inset:0}
.v-realty-blueprint .bp-floor{position:absolute;inset:0;background:var(--floor);animation:realty-blueprint-floor 6s ease-out infinite}
.v-realty-blueprint .bp-furn{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:color-mix(in srgb,var(--ink) 62%,transparent);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;animation:realty-blueprint-furn 6s ease-out infinite}
.v-realty-blueprint .bp-furn .bp-rug{stroke:color-mix(in srgb,var(--ink) 30%,transparent);stroke-dasharray:5 5}
.v-realty-blueprint .bp-w{position:absolute;background:var(--line);box-shadow:0 0 .7cqw color-mix(in srgb,var(--accent) 55%,transparent)}
.v-realty-blueprint .bp-wt{left:0;top:0;width:50cqw;height:.9cqw;animation:realty-blueprint-wt 6s linear infinite}
.v-realty-blueprint .bp-wr{left:49.1cqw;top:0;width:.9cqw;height:34cqw;animation:realty-blueprint-wr 6s linear infinite}
.v-realty-blueprint .bp-wb{left:0;top:33.1cqw;width:50cqw;height:.9cqw;animation:realty-blueprint-wb 6s linear infinite}
.v-realty-blueprint .bp-wl{left:0;top:0;width:.9cqw;height:34cqw;animation:realty-blueprint-wl 6s linear infinite}
.v-realty-blueprint .bp-wv1{left:29cqw;top:0;width:.5cqw;height:34cqw;animation:realty-blueprint-wv1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-blueprint .bp-wh1{left:29cqw;top:17.7cqw;width:21cqw;height:.5cqw;animation:realty-blueprint-wh1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-blueprint .bp-wh2{left:0;top:21.1cqw;width:29cqw;height:.5cqw;animation:realty-blueprint-wh2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-blueprint .bp-wv2{left:14cqw;top:21.1cqw;width:.5cqw;height:12.9cqw;animation:realty-blueprint-wv2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-blueprint .bp-open{position:absolute;inset:0;animation:realty-blueprint-open 6s ease-out infinite}
.v-realty-blueprint .bp-gap{position:absolute;background:var(--floor)}
.v-realty-blueprint .bp-win{position:absolute;box-sizing:border-box;background:linear-gradient(var(--dim),var(--dim)) 0 50%/100% 1px no-repeat,var(--floor);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.v-realty-blueprint .bp-win.bp-v{background:linear-gradient(var(--dim),var(--dim)) 50% 0/1px 100% no-repeat,var(--floor);border:0;border-left:1px solid var(--line);border-right:1px solid var(--line)}
.v-realty-blueprint .bp-arcs{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--ink);stroke-width:1.8}
.v-realty-blueprint .bp-arcs .bp-arc{stroke-dasharray:3 4;stroke:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-realty-blueprint .bp-labels p{position:absolute;margin:0;line-height:1.25;animation:realty-blueprint-label 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-blueprint .bp-labels b{display:block;font-size:1cqw;font-weight:500;color:color-mix(in srgb,var(--ink) 66%,transparent);letter-spacing:.02em}
.v-realty-blueprint .bp-labels span{display:block;font-size:1.3cqw;font-weight:700;color:var(--ink)}
.v-realty-blueprint .bp-pen{position:absolute;inset:0;animation:realty-blueprint-pen 6s linear infinite}
.v-realty-blueprint .bp-pen i{position:absolute;left:0;top:0;width:2.4cqw;height:2.4cqw;margin:-.75cqw 0 0 -.75cqw;border-radius:50%;background:radial-gradient(circle,var(--ink) 0 18%,color-mix(in srgb,var(--accent) 70%,transparent) 30%,color-mix(in srgb,var(--accent) 18%,transparent) 52%,transparent 70%)}
.v-realty-blueprint .bp-dim{position:absolute;color:var(--dim);font-size:1.1cqw}
.v-realty-blueprint .bp-dim i{position:absolute;background:var(--dim)}
.v-realty-blueprint .bp-dim-top{left:0;top:-4.9cqw;width:50cqw;height:4.9cqw;animation:realty-blueprint-dimh 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-blueprint .bp-dim-top i{left:0;right:0;top:2.4cqw;height:1px}
.v-realty-blueprint .bp-dim-top::before,.v-realty-blueprint .bp-dim-top::after{content:"";position:absolute;top:1.4cqw;width:1px;height:3.5cqw;background:color-mix(in srgb,var(--dim) 70%,transparent)}
.v-realty-blueprint .bp-dim-top::before{left:0}
.v-realty-blueprint .bp-dim-top::after{right:0}
.v-realty-blueprint .bp-dim-top span{position:absolute;left:50%;top:0;transform:translateX(-50%);padding:0 .8cqw;line-height:1.2}
.v-realty-blueprint .bp-dim-left{left:-4.6cqw;top:0;width:4.6cqw;height:34cqw;animation:realty-blueprint-dimv 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-blueprint .bp-dim-left i{top:0;bottom:0;left:2.2cqw;width:1px}
.v-realty-blueprint .bp-dim-left::before,.v-realty-blueprint .bp-dim-left::after{content:"";position:absolute;left:1.2cqw;width:3.4cqw;height:1px;background:color-mix(in srgb,var(--dim) 70%,transparent)}
.v-realty-blueprint .bp-dim-left::before{top:0}
.v-realty-blueprint .bp-dim-left::after{bottom:0}
.v-realty-blueprint .bp-dim-left span{position:absolute;left:.9cqw;top:50%;transform:translate(-50%,-50%) rotate(-90deg);white-space:nowrap}
.v-realty-blueprint .bp-scale{position:absolute;left:0;top:37.1cqw;display:flex;align-items:center;gap:2cqw;font-size:.95cqw;color:color-mix(in srgb,var(--ink) 66%,transparent);white-space:nowrap;animation:realty-blueprint-fade 6s ease-out infinite}
.v-realty-blueprint .bp-bar{position:relative;display:flex;width:8.8cqw;height:.7cqw;border:1px solid var(--dim)}
.v-realty-blueprint .bp-bar i{flex:1}
.v-realty-blueprint .bp-bar i:first-child{background:var(--dim)}
.v-realty-blueprint .bp-bar em{position:absolute;top:1.1cqw;font-style:normal;white-space:nowrap;transform:translateX(-50%)}
.v-realty-blueprint .bp-side{position:absolute;left:64cqw;top:0;width:31cqw;height:100%;animation:realty-blueprint-sidex 6s linear infinite}
.v-realty-blueprint .bp-brand{position:absolute;left:0;top:6.6cqw;display:flex;align-items:center;gap:.8cqw;font-family:var(--font-body);font-size:1.3cqw;line-height:1.2;font-weight:500;color:color-mix(in srgb,var(--ink) 82%,var(--accent));letter-spacing:.04em;animation:realty-blueprint-fade2 6s ease-out infinite}
.v-realty-blueprint .bp-brand svg{width:2cqw;height:2cqw;flex:none}
.v-realty-blueprint .bp-title{position:absolute;left:0;right:0;top:9.4cqw;overflow:hidden;font-size:6.6cqw;padding:.16em 0 calc(.16em + .4cqw);margin-top:-.16em}
.v-realty-blueprint .bp-title span{display:block;font-family:var(--font-display);font-size:1em;line-height:1.32;color:var(--ink);white-space:nowrap;animation:realty-blueprint-rise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-blueprint .bp-sub{position:absolute;left:0;right:0;top:18.2cqw;font-family:var(--font-display);font-style:italic;font-size:2.1cqw;line-height:1.25;color:color-mix(in srgb,var(--ink) 78%,var(--accent));animation:realty-blueprint-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-blueprint .bp-specs{position:absolute;left:0;top:22.6cqw;width:29cqw;margin:0;padding:0;list-style:none;animation:realty-blueprint-wipe 6s cubic-bezier(.45,0,.25,1) infinite}
.v-realty-blueprint .bp-specs li{display:flex;justify-content:space-between;align-items:baseline;height:3.2cqw;padding-top:.8cqw;box-sizing:border-box;border-bottom:1px dashed color-mix(in srgb,var(--ink) 32%,transparent)}
.v-realty-blueprint .bp-specs span{font-size:1.12cqw;color:color-mix(in srgb,var(--ink) 64%,transparent)}
.v-realty-blueprint .bp-specs b{font-size:1.4cqw;font-weight:700;color:var(--ink)}
.v-realty-blueprint .bp-block{position:absolute;left:0;top:40.4cqw;width:29cqw;height:10cqw;box-sizing:border-box;border:1px solid color-mix(in srgb,var(--ink) 50%,transparent);display:grid;grid-template-columns:1fr 1fr 10cqw;animation:realty-blueprint-fade3 6s ease-out infinite}
.v-realty-blueprint .bp-block div{padding:1.4cqw 1.2cqw;border-right:1px solid color-mix(in srgb,var(--ink) 32%,transparent)}
.v-realty-blueprint .bp-block span{display:block;font-size:.95cqw;color:color-mix(in srgb,var(--ink) 64%,transparent)}
.v-realty-blueprint .bp-block b{display:block;margin-top:.6cqw;font-size:1.9cqw;color:var(--ink);font-weight:700}
.v-realty-blueprint .bp-compass{width:7cqw;height:7cqw;margin:1.5cqw;color:var(--ink);font-family:var(--font-mono);animation:realty-blueprint-compass 6s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-realty-blueprint .bp-scale{display:none}
  .v-realty-blueprint .bp-side{left:8cqw;width:84cqw}
  .v-realty-blueprint .bp-brand{top:7cqh;font-size:5.4cqw;gap:2.4cqw}
  .v-realty-blueprint .bp-brand svg{width:7cqw;height:7cqw}
  .v-realty-blueprint .bp-title{top:11cqh}
  .v-realty-blueprint .bp-title{font-size:19.4cqw}
  .v-realty-blueprint .bp-specs{top:61.5cqh;width:84cqw}
  .v-realty-blueprint .bp-specs li{height:4.4cqh;padding-top:1.4cqh}
  .v-realty-blueprint .bp-specs span{font-size:3.8cqw}
  .v-realty-blueprint .bp-specs b{font-size:4.6cqw}
  .v-realty-blueprint .bp-block{display:none}
  .v-realty-blueprint .bp-sub{top:auto;bottom:6cqh;font-size:6.4cqw}
  .v-realty-blueprint .bp-board{left:13cqw;top:30cqh;scale:1.58}
  .v-realty-blueprint .bp-sheet{transform-origin:50% 40%}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-blueprint .bp-side{left:7cqw;width:86cqw}
  .v-realty-blueprint .bp-brand{top:6cqw;font-size:2.4cqw;gap:1.4cqw}
  .v-realty-blueprint .bp-brand svg{width:3.2cqw;height:3.2cqw}
  .v-realty-blueprint .bp-title{top:9.6cqw;width:52cqw;right:auto}
  .v-realty-blueprint .bp-title{font-size:10.4cqw}
  .v-realty-blueprint .bp-sub{top:auto;bottom:5cqw;font-size:3.8cqw}
  .v-realty-blueprint .bp-specs{top:34cqw;left:auto;right:0;width:20cqw}
  .v-realty-blueprint .bp-specs li{flex-direction:column;align-items:flex-start;height:auto;padding:1.2cqw 0}
  .v-realty-blueprint .bp-specs span{font-size:1.9cqw}
  .v-realty-blueprint .bp-specs b{font-size:2.6cqw;margin-top:.4cqw}
  .v-realty-blueprint .bp-block{display:none}
  .v-realty-blueprint .bp-board{left:11cqw;top:33cqw;scale:1.2}
  .v-realty-blueprint .bp-sheet{transform-origin:40% 60%}
}
@keyframes realty-blueprint-sweep{0%{transform:translateX(-70%)}100%{transform:translateX(70%)}}
@keyframes realty-blueprint-sheet{0%{opacity:1;transform:scale(1)}86%{opacity:1;transform:scale(1.025)}95%,100%{opacity:0;transform:scale(1.03)}}
@keyframes realty-blueprint-floor{0%,25%{opacity:0}32%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-blueprint-furn{0%,39%{opacity:0}47%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-blueprint-open{0%,35%{opacity:0}40%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-blueprint-pen{0%{transform:translate(0,0);opacity:0}3%{transform:translate(0,0);opacity:1}10%{transform:translate(100%,0)}15%{transform:translate(100%,100%)}21%{transform:translate(0,100%)}26%{transform:translate(0,0);opacity:1}29%,100%{transform:translate(0,0);opacity:0}}
@keyframes realty-blueprint-wt{0%,3%{clip-path:inset(0 100% 0 0)}10%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes realty-blueprint-wr{0%,10%{clip-path:inset(0 0 100% 0)}15%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 100% 0)}}
@keyframes realty-blueprint-wb{0%,15%{clip-path:inset(0 0 0 100%)}21%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes realty-blueprint-wl{0%,21%{clip-path:inset(100% 0 0 0)}26%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(100% 0 0 0)}}
@keyframes realty-blueprint-wv1{0%,26%{clip-path:inset(0 0 100% 0)}31%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 100% 0)}}
@keyframes realty-blueprint-wh1{0%,29%{clip-path:inset(0 100% 0 0)}33%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes realty-blueprint-wh2{0%,30%{clip-path:inset(0 0 0 100%)}34%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes realty-blueprint-wv2{0%,32%{clip-path:inset(0 0 100% 0)}36%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 100% 0)}}
@keyframes realty-blueprint-label{0%,40%{opacity:0;transform:translateY(.8cqw)}48%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(.8cqw)}}
@keyframes realty-blueprint-dimh{0%,34%{clip-path:inset(0 50% 0 50%)}43%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 50% 0 50%)}}
@keyframes realty-blueprint-dimv{0%,35%{clip-path:inset(50% 0 50% 0)}44%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(50% 0 50% 0)}}
@keyframes realty-blueprint-fade{0%,40%{opacity:0}47%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-blueprint-sidex{0%,86%{opacity:1}94%,100%{opacity:0}}
@keyframes realty-blueprint-fade2{0%,3%{opacity:0}11%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-blueprint-rise{0%,6%{transform:translateY(110%)}18%,95%{transform:translateY(0)}96%,100%{transform:translateY(110%)}}
@keyframes realty-blueprint-sub{0%,11%{opacity:0;transform:translateY(1cqw)}21%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(1cqw)}}
@keyframes realty-blueprint-wipe{0%,15%{clip-path:inset(0 0 100% 0)}32%,95%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 100% 0)}}
@keyframes realty-blueprint-fade3{0%,22%{opacity:0}30%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-blueprint-compass{0%{transform:rotate(-14deg)}35%{transform:rotate(5deg)}65%{transform:rotate(-3deg)}100%{transform:rotate(-14deg)}}
`,
};

export const realtyReels: SceneSpec = {
  id: "realty-reels",
  slug: "mg-realty-reels",
  name: "Dusk Listing Reel",
  kind: "scene",
  job: "cta",
  language: "kinetic-poster",
  mechanic: "story-ad-line-stack",
  energy: "punchy",
  settle: 3.0,
  colors: {"ink": "#FFFFFF", "accent": "#EC7766", "secondary": "#FFD6A2", "paper": "#1C1433"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["real-estate", "story-ad", "listing"],
  fields: [
    { key: "lines", label: "Features", default: "3 bed. 2 bath. 1 garden.", maxChars: 30, role: "headline" },
    { key: "place", label: "Location", default: "in Fernhill.", maxChars: 18, role: "caption" },
    { key: "price", label: "Price", default: "$1.24M", maxChars: 10, role: "value" },
    { key: "cta", label: "Button", default: "Book a viewing", maxChars: 20, role: "cta" },
  ],
  html: `<div class="rl-world">
  <div class="rl-scene">
    <div class="rl-sky"></div>
    <i class="rl-star" style="left:14cqw;top:18cqw"></i><i class="rl-star" style="left:78cqw;top:24cqw"></i><i class="rl-star" style="left:88cqw;top:52cqw"></i><i class="rl-star" style="left:60cqw;top:40cqw;width:.5cqw;height:.5cqw"></i>
    <div class="rl-sun"></div>
    <div class="rl-hill"></div>
    <div class="rl-ground"></div>
    <div class="rl-glow"></div>
    <div class="rl-path"></div>
    <div class="rl-house">
      <i class="rl-roof2"></i>
      <i class="rl-up"></i>
      <i class="rl-win rl-win-up"><b class="rl-lit"></b><b class="rl-shelf"></b><b class="rl-pend"></b><b class="rl-pend" style="left:12cqw"></b><b class="rl-mull"></b></i>
      <i class="rl-roof1"></i>
      <i class="rl-low"></i>
      <i class="rl-win rl-win-low"><b class="rl-lit"></b><b class="rl-sofa"></b><b class="rl-lamp"></b><b class="rl-plant"></b><b class="rl-mull" style="background:repeating-linear-gradient(90deg, transparent 0 8.7cqw, #2a1d2a 8.7cqw 9.2cqw)"></b></i>
      <i class="rl-door"></i>
      <i class="rl-sconce"></i>
    </div>
    <div class="rl-tree"><span class="rl-trunk"></span><i style="left:2cqw;top:4cqw;width:22cqw;height:22cqw"></i><i style="left:10cqw;top:0;width:16cqw;height:16cqw"></i><i style="left:0;top:14cqw;width:18cqw;height:16cqw"></i></div>
    <i class="rl-gl" style="left:20cqw"></i><i class="rl-gl" style="left:44cqw"></i><i class="rl-gl" style="left:86cqw"></i>
  </div>
  <div class="rl-topshade"></div>
  <div class="rl-shade"></div>
  <div class="rl-bars"><i></i><i><b></b></i><i></i></div>
  <div class="rl-acct"><span class="rl-av"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg></span><p><b>halden.homes</b><small>Sponsored</small></p><span class="rl-dots">···</span></div>
</div>
<div class="rl-copy">
  <div class="rl-lines" data-21st-slot="lines">{{lines|words}}</div>
  <p class="rl-place" data-21st-slot="place">{{place}}</p>
  <div class="rl-tag"><small>from</small><span data-21st-slot="price">{{price}}</span></div>
</div>
<div class="rl-cta">
  <p class="rl-oh"><i></i>Open house · Sat, 11:00</p>
  <div class="rl-btn"><b data-21st-slot="cta">{{cta}}</b><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
</div>
<svg class="rl-swipe" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l8-7 8 7"/></svg>`,
  css: `
.v-realty-reels{color:var(--ink);font-family:var(--font-body)}
.v-realty-reels[data-backdrop="on"]{background:radial-gradient(90% 90% at 70% 40%,color-mix(in srgb,var(--paper) 86%,var(--accent)),var(--paper) 70%)}
.v-realty-reels[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-realty-reels .rl-world{position:absolute;left:0;top:0;width:100cqw;height:100cqh;container-type:size;overflow:hidden;color:#fff}
.v-realty-reels .rl-scene{position:absolute;inset:0;transform-origin:50% 72%;animation:realty-reels-kb 6s cubic-bezier(.35,0,.25,1) infinite}
.v-realty-reels .rl-sky{position:absolute;inset:0;background:linear-gradient(180deg,var(--paper) 0%,color-mix(in srgb,var(--paper) 70%,var(--accent)) 22%,color-mix(in srgb,var(--paper) 35%,var(--accent)) 40%,var(--accent) 56%,color-mix(in srgb,var(--accent) 50%,var(--secondary)) 66%,var(--secondary) 76%,color-mix(in srgb,var(--secondary) 60%,#fff) 82%)}
.v-realty-reels .rl-star{position:absolute;width:.7cqw;height:.7cqw;border-radius:50%;background:#fff;box-shadow:0 0 1.2cqw rgba(255,255,255,.8);animation:realty-reels-twinkle 2s ease-in-out infinite}
.v-realty-reels .rl-sun{position:absolute;left:58cqw;top:112cqw;width:44cqw;height:44cqw;margin:-22cqw 0 0 -22cqw;border-radius:50%;background:radial-gradient(circle,#fff7e0 0 16%,color-mix(in srgb,var(--secondary) 80%,transparent) 26%,color-mix(in srgb,var(--secondary) 30%,transparent) 46%,transparent 68%);animation:realty-reels-sun 6s ease-in-out infinite}
.v-realty-reels .rl-hill{position:absolute;left:0;top:126cqw;width:100cqw;height:24cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 60%,var(--accent)),color-mix(in srgb,var(--paper) 80%,var(--accent)));clip-path:polygon(0 42%,14% 26%,30% 36%,48% 14%,66% 30%,84% 18%,100% 30%,100% 100%,0 100%)}
.v-realty-reels .rl-ground{position:absolute;left:0;top:144cqw;width:100cqw;height:34cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 80%,#2e1b3c) 0%,color-mix(in srgb,var(--paper) 60%,#100a19) 100%)}
.v-realty-reels .rl-glow{position:absolute;left:8cqw;top:140cqw;width:64cqw;height:14cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,186,110,.42),transparent);animation:realty-reels-lowglow 6s ease-out infinite}
.v-realty-reels .rl-house{position:absolute;left:8cqw;top:92cqw;width:84cqw;height:54cqw}
.v-realty-reels .rl-house>i{position:absolute;display:block}
.v-realty-reels .rl-roof2{left:14cqw;top:6cqw;width:70cqw;height:2.2cqw;background:#251a30;border-radius:.3cqw;box-shadow:0 .6cqw 1.2cqw rgba(10,5,20,.45)}
.v-realty-reels .rl-up{left:18cqw;top:8.2cqw;width:62cqw;height:20.4cqw;background:linear-gradient(90deg,rgba(36,16,48,.6),rgba(255,160,110,.06) 62%,rgba(255,170,120,.18)),repeating-linear-gradient(90deg,#9c6546 0 1.3cqw,#7b4c34 1.3cqw 1.6cqw)}
.v-realty-reels .rl-roof1{left:0;top:28.6cqw;width:70cqw;height:2cqw;background:#251a30;border-radius:.3cqw;box-shadow:0 .6cqw 1.2cqw rgba(10,5,20,.4)}
.v-realty-reels .rl-low{left:3cqw;top:30.6cqw;width:62cqw;height:23.4cqw;background:linear-gradient(90deg,#b99aa7 0%,#e3c6c0 55%,#f6dcc9 100%)}
.v-realty-reels .rl-win{overflow:hidden;background:linear-gradient(180deg,#6d3c66,#3a2442);box-shadow:inset 0 0 0 .5cqw #2a1d2a}
.v-realty-reels .rl-win-up{left:25cqw;top:11.8cqw;width:48cqw;height:13cqw}
.v-realty-reels .rl-win-low{left:7cqw;top:33.6cqw;width:36cqw;height:20.4cqw}
.v-realty-reels .rl-lit{position:absolute;inset:0;background:radial-gradient(60% 80% at 50% 30%,#fff1cf,rgba(255,210,140,0) 70%),linear-gradient(180deg,#ffd99a 0%,#ffb764 60%,#f0904c 100%)}
.v-realty-reels .rl-win-up .rl-lit{animation:realty-reels-lit1 6s ease-out infinite}
.v-realty-reels .rl-win-low .rl-lit{animation:realty-reels-lit2 6s ease-out infinite}
.v-realty-reels .rl-mull{position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 11.4cqw,#2a1d2a 11.4cqw 12cqw);box-shadow:inset 0 0 0 .5cqw #2a1d2a}
.v-realty-reels .rl-shelf{position:absolute;left:3cqw;top:6cqw;width:18cqw;height:.7cqw;background:rgba(90,45,40,.55);box-shadow:3cqw -2.2cqw 0 -.1cqw rgba(90,45,40,.4),7cqw -1.4cqw 0 .1cqw rgba(120,70,50,.35)}
.v-realty-reels .rl-pend{position:absolute;left:33cqw;top:0;width:4cqw;height:6.4cqw;background:linear-gradient(rgba(60,30,30,.6),rgba(60,30,30,.6)) 50% 0/1px 4cqw no-repeat,radial-gradient(circle at 50% 100%,#fffbe9 0 1.4cqw,rgba(255,240,200,0) 2cqw) 50% 100%/4cqw 2.6cqw no-repeat}
.v-realty-reels .rl-sofa{position:absolute;left:4cqw;bottom:1.2cqw;width:19cqw;height:5cqw;border-radius:1.4cqw 1.4cqw .4cqw .4cqw;background:rgba(70,30,40,.72)}
.v-realty-reels .rl-lamp{position:absolute;left:27cqw;bottom:1.2cqw;width:4.4cqw;height:13cqw;background:linear-gradient(rgba(70,30,40,.75),rgba(70,30,40,.75)) 50% 100%/2px 10cqw no-repeat,radial-gradient(circle at 50% 22%,#fffbe8 0 1.3cqw,rgba(255,240,200,.6) 2cqw,transparent 3.2cqw)}
.v-realty-reels .rl-plant{position:absolute;right:3cqw;bottom:1.2cqw;width:6cqw;height:9cqw;border-radius:50% 50% 20% 20%;background:rgba(60,40,40,.55)}
.v-realty-reels .rl-door{left:48cqw;top:34.6cqw;width:10cqw;height:19.4cqw;background:repeating-linear-gradient(90deg,#6f4431 0 1.2cqw,#5a3626 1.2cqw 1.45cqw);box-shadow:inset 0 0 0 .4cqw #3a2420}
.v-realty-reels .rl-door::after{content:"";position:absolute;right:1.6cqw;top:7cqw;width:.5cqw;height:6cqw;border-radius:.3cqw;background:linear-gradient(#ffe2a6,#c68b45)}
.v-realty-reels .rl-sconce{left:45.4cqw;top:37cqw;width:1.3cqw;height:1.3cqw;border-radius:50%;background:#fff3d1;box-shadow:0 0 2cqw .6cqw rgba(255,200,120,.75)}
.v-realty-reels .rl-tree{position:absolute;left:-6cqw;top:104cqw;width:30cqw;height:44cqw}
.v-realty-reels .rl-tree i{position:absolute;display:block;border-radius:50%;background:radial-gradient(circle at 72% 30%,color-mix(in srgb,var(--paper) 55%,var(--accent)),color-mix(in srgb,var(--paper) 85%,#000) 62%)}
.v-realty-reels .rl-trunk{position:absolute;left:13cqw;top:24cqw;width:1.6cqw;height:20cqw;background:color-mix(in srgb,var(--paper) 70%,#000)}
.v-realty-reels .rl-path{position:absolute;left:52cqw;top:146cqw;width:22cqw;height:32cqw;background:linear-gradient(180deg,rgba(255,205,160,.35),rgba(255,205,160,0));clip-path:polygon(30% 0,62% 0,100% 100%,20% 100%);opacity:.7}
.v-realty-reels .rl-gl{position:absolute;top:151cqw;width:1cqw;height:1cqw;border-radius:50%;background:#ffe7b5;box-shadow:0 0 2cqw .5cqw rgba(255,190,110,.7)}
.v-realty-reels .rl-shade{position:absolute;left:0;right:0;bottom:0;height:46cqw;background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--paper) 90%,transparent) 70%)}
.v-realty-reels .rl-topshade{position:absolute;left:0;right:0;top:0;height:24cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 55%,transparent),transparent)}
.v-realty-reels .rl-bars{position:absolute;left:4cqw;right:4cqw;top:3cqw;display:flex;gap:1.2cqw}
.v-realty-reels .rl-bars i{flex:1;height:.7cqw;border-radius:.35cqw;background:color-mix(in srgb,var(--ink) 32%,transparent);overflow:hidden}
.v-realty-reels .rl-bars i:first-child{background:var(--ink)}
.v-realty-reels .rl-bars b{display:block;height:100%;background:var(--ink);transform-origin:0 50%;animation:realty-reels-prog 6s linear infinite}
.v-realty-reels .rl-acct{position:absolute;left:4cqw;right:4cqw;top:6.6cqw;display:flex;align-items:center;gap:2.4cqw;color:var(--ink)}
.v-realty-reels .rl-av{display:grid;place-items:center;width:8.4cqw;height:8.4cqw;border-radius:50%;background:var(--secondary);color:var(--paper);box-shadow:0 0 0 .5cqw color-mix(in srgb,var(--ink) 25%,transparent)}
.v-realty-reels .rl-av svg{width:5cqw;height:5cqw}
.v-realty-reels .rl-acct p{margin:0;flex:1;line-height:1.15}
.v-realty-reels .rl-acct b{display:block;font-size:3.6cqw;font-weight:600}
.v-realty-reels .rl-acct small{display:block;font-size:2.8cqw;opacity:.78}
.v-realty-reels .rl-dots{font-size:5cqw;letter-spacing:-.1em;opacity:.9}
.v-realty-reels .rl-copy{position:absolute;inset:0;animation:realty-reels-copyx 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-reels .rl-lines{position:absolute;left:7cqw;right:7cqw;top:21cqw;display:grid;grid-template-columns:auto 1fr;column-gap:.26em;font-family:var(--font-display);font-weight:800;font-size:11cqw;line-height:1.2;letter-spacing:-.02em;text-shadow:0 .6cqw 3cqw color-mix(in srgb,var(--paper) 40%,transparent)}
.v-realty-reels .rl-lines .w{display:block;line-height:1.2;transform-origin:0 60%;--delay:calc(var(--i) * .18s);animation:realty-reels-l1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-reels .rl-place{position:absolute;left:7cqw;right:7cqw;top:61cqw;margin:0;font-family:var(--font-display);font-style:italic;font-weight:400;font-size:13cqw;line-height:1.25;color:var(--secondary);animation:realty-reels-l4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-reels .rl-tag{position:absolute;right:7cqw;top:80cqw;padding:1.8cqw 3.6cqw;border-radius:8cqw;background:#fff3d8;color:#2a163d;font-family:var(--font-display);font-weight:700;font-size:5.8cqw;line-height:1.2;white-space:nowrap;box-shadow:0 1.6cqw 4cqw rgba(40,10,40,.35);animation:realty-reels-tag 6s cubic-bezier(.3,1.5,.5,1) infinite}
.v-realty-reels .rl-tag small{font-family:var(--font-body);font-weight:500;font-size:.55em;margin-right:.4em;opacity:.7}
.v-realty-reels .rl-cta{position:absolute;inset:0;animation:realty-reels-copyx 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-reels .rl-oh{position:absolute;left:7cqw;top:147cqw;margin:0;display:flex;align-items:center;gap:2cqw;font-size:3.6cqw;font-weight:500;white-space:nowrap;animation:realty-reels-oh 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-reels .rl-oh i{width:2cqw;height:2cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .8cqw color-mix(in srgb,var(--accent) 25%,transparent)}
.v-realty-reels .rl-btn{position:absolute;left:6cqw;right:6cqw;top:154cqw;height:13cqw;display:flex;align-items:center;justify-content:space-between;gap:2cqw;padding:0 2.2cqw 0 6cqw;box-sizing:border-box;border-radius:7cqw;background:#fff;color:#1d1330;font-size:5.6cqw;font-weight:600;box-shadow:0 2cqw 5cqw rgba(0,0,0,.35);animation:realty-reels-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-reels .rl-btn b{font-weight:600;line-height:1.3;white-space:nowrap}
.v-realty-reels .rl-btn span{flex:none;display:grid;place-items:center;width:9cqw;height:9cqw;border-radius:50%;background:var(--accent);color:#fff}
.v-realty-reels .rl-btn svg{width:4.6cqw;height:4.6cqw}
.v-realty-reels .rl-swipe{position:absolute;left:50%;top:170cqw;width:6cqw;height:4cqw;margin-left:-3cqw;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:realty-reels-swipe 1s ease-in-out infinite}
@container (min-aspect-ratio: 4/5){
  .v-realty-reels .rl-swipe{display:none}
  .v-realty-reels .rl-world{border-radius:2.2cqw;box-shadow:0 2cqw 5cqw rgba(0,0,0,.35)}
}
@container (min-aspect-ratio: 5/4){
  .v-realty-reels .rl-world{left:63cqw;top:3.4cqw;width:27.84cqw;height:49.5cqw}
  .v-realty-reels .rl-lines{left:8cqw;right:40cqw;top:8cqw;font-size:6.8cqw}
  .v-realty-reels .rl-place{left:8cqw;right:40cqw;top:33.6cqw;font-size:7cqw}
  .v-realty-reels .rl-tag{right:auto;left:9cqw;top:45cqw;font-size:2.6cqw;padding:1cqw 2cqw}
  .v-realty-reels .rl-oh{left:65cqw;top:40.4cqw;font-size:1.25cqw;gap:.8cqw}
  .v-realty-reels .rl-oh i{width:.8cqw;height:.8cqw;box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--accent) 25%,transparent)}
  .v-realty-reels .rl-btn{left:64.6cqw;right:auto;width:24.6cqw;top:44.4cqw;height:5.4cqw;font-size:1.7cqw;padding:0 .8cqw 0 2.2cqw;border-radius:3cqw}
  .v-realty-reels .rl-btn span{width:3.8cqw;height:3.8cqw}
  .v-realty-reels .rl-btn svg{width:1.9cqw;height:1.9cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-reels .rl-world{left:52cqw;top:12.6cqw;width:42cqw;height:74.67cqw}
  .v-realty-reels .rl-lines{left:6cqw;right:50cqw;top:15cqw;font-size:7.4cqw}
  .v-realty-reels .rl-place{left:6cqw;right:50cqw;top:50cqw;font-size:7.6cqw}
  .v-realty-reels .rl-tag{right:auto;left:7cqw;top:68cqw;font-size:3.6cqw;padding:1.4cqw 2.8cqw}
  .v-realty-reels .rl-oh{left:55cqw;top:71cqw;font-size:2cqw;gap:1.2cqw}
  .v-realty-reels .rl-oh i{width:1.2cqw;height:1.2cqw;box-shadow:0 0 0 .5cqw color-mix(in srgb,var(--accent) 25%,transparent)}
  .v-realty-reels .rl-btn{left:54cqw;right:auto;width:38cqw;top:76cqw;height:8cqw;font-size:2.7cqw;padding:0 1.2cqw 0 3.4cqw;border-radius:4cqw}
  .v-realty-reels .rl-btn span{width:5.6cqw;height:5.6cqw}
  .v-realty-reels .rl-btn svg{width:2.8cqw;height:2.8cqw}
}
@keyframes realty-reels-kb{0%{transform:scale(1.1)}80%{transform:scale(1)}100%{transform:scale(1.1)}}
@keyframes realty-reels-twinkle{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes realty-reels-sun{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.06);opacity:1}}
@keyframes realty-reels-lowglow{0%,8%{opacity:.2}18%,92%{opacity:1}100%{opacity:.2}}
@keyframes realty-reels-lit1{0%,4%{opacity:.08}6%{opacity:.7}7%{opacity:.35}11%,92%{opacity:1}100%{opacity:.08}}
@keyframes realty-reels-lit2{0%,9%{opacity:.08}11%{opacity:.8}12%{opacity:.4}16%,92%{opacity:1}100%{opacity:.08}}
@keyframes realty-reels-prog{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@keyframes realty-reels-copyx{0%,86%{opacity:1;transform:translateY(0)}93%,100%{opacity:0;transform:translateY(-4cqw)}}
@keyframes realty-reels-l1{0%,5%{opacity:0;transform:translateY(3cqw) scale(1.3);filter:blur(1.2cqw)}10%{opacity:1;transform:translateY(0) scale(.98);filter:blur(0)}13%,95%{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}96%,100%{opacity:0;transform:translateY(3cqw) scale(1.3);filter:blur(1.2cqw)}}
@keyframes realty-reels-l4{0%,25%{opacity:0;transform:translateX(-3cqw);filter:blur(.8cqw)}34%,95%{opacity:1;transform:translateX(0);filter:blur(0)}96%,100%{opacity:0;transform:translateX(-3cqw);filter:blur(.8cqw)}}
@keyframes realty-reels-tag{0%,33%{opacity:0;transform:rotate(-14deg) scale(.3)}40%,95%{opacity:1;transform:rotate(-6deg) scale(1)}96%,100%{opacity:0;transform:rotate(-14deg) scale(.3)}}
@keyframes realty-reels-oh{0%,36%{opacity:0;transform:translateY(3cqw)}43%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(3cqw)}}
@keyframes realty-reels-btn{0%,39%{opacity:0;transform:translateY(6cqw)}46%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(6cqw)}}
@keyframes realty-reels-swipe{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-1.2cqw);opacity:1}}
`,
};

export const realtyListing: SceneSpec = {
  id: "realty-listing",
  slug: "mg-realty-listing",
  name: "Luxury Listing Card",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "photo-wipe-price-odometer",
  energy: "calm",
  settle: 3.0,
  colors: {"ink": "#EFE6D4", "accent": "#C9A46A", "secondary": "#E6C88E", "paper": "#0B0A08"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["real-estate", "listing", "price"],
  fields: [
    { key: "title", label: "Property name", default: "Cedar House", maxChars: 16, role: "headline" },
    { key: "addr", label: "Address", default: "18 Larkspur Ridge · Calder Park", maxChars: 36, role: "body" },
    { key: "price", label: "Price", default: "$1,950,000", maxChars: 12, role: "value" },
    { key: "cta", label: "Button", default: "Request a private tour", maxChars: 26, role: "cta" },
  ],
  html: `<div class="ls-photo">
  <div class="ls-kb"><div class="ls-art">
    <i class="ls-sky"></i>
        <i class="ls-moon"></i>
        <i class="ls-hills"></i>
        <i class="ls-tree" style="left:75.76cqw;top:19.7cqw;width:16.67cqw;height:16.67cqw"></i>
        <i class="ls-tree" style="left:83.33cqw;top:27.27cqw;width:15.15cqw;height:15.15cqw"></i>
        <i class="ls-roofA"></i>
        <i class="ls-up"></i>
        <i class="ls-glass ls-g1"></i>
        <i class="ls-low"></i>
        <i class="ls-glass ls-g2"><b class="ls-sofa"></b></i>
        <i class="ls-pend"></i>
        <i class="ls-slit"></i>
        <i class="ls-roofB"></i>
        <i class="ls-tree" style="left:78.79cqw;top:33.33cqw;width:18.18cqw;height:22.73cqw;border-radius:50% 50% 10% 10%"></i>
        <i class="ls-coping"></i>
        <i class="ls-pool"><b class="ls-refl"></b><b class="ls-ripple"></b><b class="ls-plight" style="left:21.21cqw"></b><b class="ls-plight" style="left:60.61cqw"></b></i>
        <i class="ls-deck"></i>
        <i class="ls-lounge" style="left:45.45cqw"></i>
        <i class="ls-lounge" style="left:63.64cqw"></i>
  </div></div>
  <div class="ls-fade"></div>
</div>
<div class="ls-chip"><i></i>Exclusive · New this week</div>
<div class="ls-panel">
  <div class="ls-brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg>Halden Private Office</div>
  <div class="ls-head"><div class="ls-eyebrow">Private listing</div><div class="ls-title"><span data-21st-slot="title">{{title}}</span></div></div>
  <div class="ls-addr" data-21st-slot="addr">{{addr}}</div>
  <div class="ls-rule"></div>
  <div class="ls-plabel">Guide price</div>
  <div class="ls-price" data-21st-slot="price">{{price|chars}}</div>
  <div class="ls-facts">
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19v-7.5A1.5 1.5 0 0 1 4.5 10h15a1.5 1.5 0 0 1 1.5 1.5V19M3 16h18M6 10V7.5A1.5 1.5 0 0 1 7.5 6h3A1.5 1.5 0 0 1 12 7.5V10M12 10V7.5A1.5 1.5 0 0 1 13.5 6h3A1.5 1.5 0 0 1 18 7.5V10"/></svg><b>4</b><small>bedrooms</small></div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM6 12V6a2 2 0 0 1 3.7-1M7 19l-1 2M17 19l1 2"/></svg><b>3.5</b><small>baths</small></div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M8 16l8-8M12 8h4v4M8 12v4h4"/></svg><b>312 m²</b><small>interior</small></div>
        <div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-6M12 15c-3.5 0-6-2.2-6-5.2C6 6.6 8.7 4 12 4s6 2.6 6 5.8c0 3-2.5 5.2-6 5.2zM4 21h16"/></svg><b>0.4 ac</b><small>grounds</small></div>
      </div>
  <div class="ls-cta"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
</div>`,
  css: `
.v-realty-listing{color:var(--ink);font-family:var(--font-body)}
.v-realty-listing[data-backdrop="on"]{background:radial-gradient(70% 90% at 80% 40%,color-mix(in srgb,var(--paper) 90%,var(--accent)) 0%,var(--paper) 70%)}
.v-realty-listing[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-realty-listing .ls-photo{position:absolute;left:0;top:0;width:66cqw;height:100cqh;overflow:hidden;container-type:size;-webkit-mask-image:linear-gradient(90deg,#000 62%,transparent 97%);mask-image:linear-gradient(90deg,#000 62%,transparent 97%);animation:realty-listing-wipe 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-listing .ls-kb{position:absolute;inset:0;transform-origin:40% 55%;animation:realty-listing-kb 6s cubic-bezier(.25,.6,.3,1) infinite}
.v-realty-listing .ls-art{position:absolute;left:0;top:var(--art-top,0);width:100cqw;height:86cqw}
.v-realty-listing .ls-kb i, .v-realty-listing .ls-kb b{position:absolute;display:block}
.v-realty-listing .ls-sky{left:0;top:0;width:100cqw;height:56.06cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 55%,#0d1226) 0%,color-mix(in srgb,var(--paper) 40%,#1c2242) 42%,color-mix(in srgb,var(--paper) 28%,#3a3352) 72%,color-mix(in srgb,var(--paper) 18%,#5d4656) 100%)}
.v-realty-listing .ls-moon{left:13.64cqw;top:9.09cqw;width:3.94cqw;height:3.94cqw;border-radius:50%;background:radial-gradient(circle at 40% 40%, #fbf4e1, #e2d6b8);box-shadow:0 0 3.64cqw 0.91cqw rgba(243,234,210,.28)}
.v-realty-listing .ls-hills{left:0;top:36.36cqw;width:100cqw;height:19.7cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 30%,#221f36),color-mix(in srgb,var(--paper) 22%,#17162a));clip-path:polygon(0 55%, 16% 30%, 34% 48%, 52% 22%, 70% 40%, 86% 28%, 100% 44%, 100% 100%, 0 100%)}
.v-realty-listing .ls-roofA{left:19.7cqw;top:25.15cqw;width:62.12cqw;height:1.97cqw;background:linear-gradient(180deg, #f1ebdf, #c9c0b0);box-shadow:0 0.76cqw 1.52cqw rgba(0,0,0,.45)}
.v-realty-listing .ls-up{left:25.76cqw;top:27.12cqw;width:51.52cqw;height:10cqw;background:linear-gradient(90deg, #a69c8e, #d8d0c2 60%, #b8ae9f)}
.v-realty-listing .ls-glass{overflow:hidden;background:linear-gradient(180deg, #ffdca0 0%, #f2b36a 55%, #d98a48 100%);box-shadow:0 0 4.55cqw rgba(255,190,110,.45)}
.v-realty-listing .ls-glass::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg, transparent 0 8.48cqw, rgba(30,22,16,.85) 8.48cqw 8.94cqw)}
.v-realty-listing .ls-g1{left:30.3cqw;top:28.79cqw;width:33.33cqw;height:6.67cqw}
.v-realty-listing .ls-roofB{left:6.06cqw;top:36.97cqw;width:83.33cqw;height:1.67cqw;background:linear-gradient(180deg, #ece5d7, #bdb3a2);box-shadow:0 0.76cqw 1.52cqw rgba(0,0,0,.5)}
.v-realty-listing .ls-low{left:9.09cqw;top:38.64cqw;width:75.76cqw;height:16.67cqw;background:repeating-linear-gradient(180deg, #2b2621 0 1.67cqw, #24201c 1.67cqw 1.82cqw)}
.v-realty-listing .ls-g2{left:12.88cqw;top:40.3cqw;width:45.45cqw;height:15cqw}
.v-realty-listing .ls-sofa{left:18.18cqw;top:49.39cqw;width:15.15cqw;height:5.91cqw;border-radius:1.21cqw 1.21cqw 0 0;background:rgba(60,36,24,.7)}
.v-realty-listing .ls-pend{left:40.91cqw;top:40.3cqw;width:4.55cqw;height:6.36cqw;background:linear-gradient(rgba(50,30,20,.7), rgba(50,30,20,.7)) 50% 0 / 1px 3.64cqw no-repeat, radial-gradient(circle at 50% 100%, #fffbe6 0 1.67cqw, transparent 2.42cqw) 50% 100% / 4.55cqw 3.03cqw no-repeat}
.v-realty-listing .ls-slit{left:63.64cqw;top:42.42cqw;width:16.67cqw;height:1.52cqw;background:#f2b36a;box-shadow:0 0 2.12cqw rgba(255,180,100,.5), 0 4.85cqw 0 #e7a45c}
.v-realty-listing .ls-coping{left:0;top:55.3cqw;width:100cqw;height:1.06cqw;background:linear-gradient(180deg, #e2d8c4, #a89c86)}
.v-realty-listing .ls-pool{left:0;top:56.36cqw;width:100cqw;height:14.24cqw;overflow:hidden;background:linear-gradient(180deg, #0d3f4e 0%, #12596a 55%, #0d4655 100%)}
.v-realty-listing .ls-refl{left:12.88cqw;top:0;width:45.45cqw;height:10.61cqw;background:linear-gradient(180deg, rgba(255,200,130,.6), rgba(255,200,130,0));filter:blur(0.53cqw);animation:realty-listing-shimmer 3s ease-in-out infinite}
.v-realty-listing .ls-ripple{inset:-3.03cqw 0 0 0;background:repeating-linear-gradient(180deg, transparent 0 1.36cqw, rgba(170,230,240,.12) 1.36cqw 1.52cqw);animation:realty-listing-ripple 6s linear infinite}
.v-realty-listing .ls-plight{top:6.06cqw;width:9.09cqw;height:6.06cqw;border-radius:50%;background:radial-gradient(closest-side, rgba(120,230,240,.55), transparent)}
.v-realty-listing .ls-deck{left:0;top:70.61cqw;width:100cqw;height:15.15cqw;background:repeating-linear-gradient(90deg, #17130f 0 4.85cqw, #120f0c 4.85cqw 5cqw)}
.v-realty-listing .ls-lounge{top:72.12cqw;width:13.64cqw;height:3.03cqw;border-radius:0.61cqw;background:linear-gradient(180deg, #efe6d3, #b9ad96);transform:skewX(-18deg);box-shadow:0 1.21cqw 1.52cqw rgba(0,0,0,.5)}
.v-realty-listing .ls-fade{position:absolute;inset:0;background:var(--fade,linear-gradient(180deg,color-mix(in srgb,var(--paper) 25%,transparent),transparent 30%,transparent 75%,color-mix(in srgb,var(--paper) 50%,transparent)))}
.v-realty-listing .ls-chip{position:absolute;left:3.4cqw;top:3.4cqw;display:flex;align-items:center;gap:.8cqw;padding:.7cqw 1.4cqw;border-radius:2cqw;background:color-mix(in srgb,var(--paper) 60%,transparent);border:1px solid color-mix(in srgb,var(--accent) 45%,transparent);font-size:1.1cqw;line-height:1.2;color:var(--ink);white-space:nowrap;animation:realty-listing-chip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-listing .ls-chip i{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent)}
.v-realty-listing .ls-panel{position:absolute;left:64cqw;top:0;width:32cqw;height:100%;box-sizing:border-box;padding-top:4cqw;display:flex;flex-direction:column;align-items:flex-start;animation:realty-listing-out 6s linear infinite}
.v-realty-listing .ls-panel>*{flex:none}
.v-realty-listing .ls-brand{display:flex;align-items:center;gap:.8cqw;font-size:1.1cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 60%,transparent);letter-spacing:.06em;white-space:nowrap;margin-bottom:3cqw;animation:realty-listing-f1 6s ease-out infinite}
.v-realty-listing .ls-brand svg{width:1.8cqw;height:1.8cqw;color:var(--accent)}
.v-realty-listing .ls-head{align-self:stretch}
.v-realty-listing .ls-eyebrow{display:flex;align-items:center;gap:1cqw;font-size:1.2cqw;line-height:1.2;letter-spacing:.18em;color:var(--accent);animation:realty-listing-f1 6s ease-out infinite}
.v-realty-listing .ls-eyebrow::before{content:"";width:2.6cqw;height:1px;background:var(--accent)}
.v-realty-listing .ls-title{overflow:hidden;font-size:5.4cqw;padding-block:.16em;margin-top:calc(.4cqw - .16em);margin-bottom:-.16em}
.v-realty-listing .ls-title span{display:block;font-family:var(--font-display);font-size:1em;line-height:1.32;color:var(--ink);animation:realty-listing-rise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-listing .ls-addr{align-self:stretch;margin-top:.4cqw;font-size:1.45cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 66%,transparent);animation:realty-listing-f2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-listing .ls-rule{width:30cqw;height:1px;margin:2.4cqw 0 1.8cqw;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 10%,transparent));transform-origin:0 50%;animation:realty-listing-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-listing .ls-plabel{font-size:1.15cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 56%,transparent);animation:realty-listing-f3 6s ease-out infinite}
.v-realty-listing .ls-price{display:flex;height:1.32em;overflow:hidden;box-sizing:content-box;padding-block:.14em;margin-top:calc(.2cqw - .14em);margin-bottom:-.14em;font-family:var(--font-display);font-size:5cqw;line-height:1.32;color:var(--secondary);white-space:nowrap;animation:realty-listing-f3 6s ease-out infinite}
.v-realty-listing .ls-price .c{position:relative;display:block;line-height:1.32;--delay:calc(var(--i) * .07s);animation:realty-listing-roll 6s cubic-bezier(.3,.7,.2,1) infinite}
.v-realty-listing .ls-price .c::before{content:"7\\A 3\\A 9\\A 1\\A 5\\A 8\\A 2";position:absolute;left:0;right:0;bottom:100%;white-space:pre;text-align:center;line-height:1.32}
.v-realty-listing .ls-price .c:nth-child(2n)::before{content:"2\\A 8\\A 4\\A 6\\A 0\\A 9\\A 3"}
.v-realty-listing .ls-price .c:nth-child(3n)::before{content:"5\\A 0\\A 6\\A 2\\A 9\\A 4\\A 7"}
.v-realty-listing .ls-facts{margin-top:2.4cqw;width:31cqw;display:grid;grid-template-columns:repeat(4,1fr);gap:.6cqw}
.v-realty-listing .ls-facts div{border-left:1px solid color-mix(in srgb,var(--accent) 28%,transparent);padding-left:1cqw;animation:realty-listing-fact 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-listing .ls-facts div:nth-child(2){--delay:.12s}
.v-realty-listing .ls-facts div:nth-child(3){--delay:.24s}
.v-realty-listing .ls-facts div:nth-child(4){--delay:.36s}
.v-realty-listing .ls-facts svg{width:2cqw;height:2cqw;color:var(--accent)}
.v-realty-listing .ls-facts b{display:block;margin-top:.5cqw;font-size:1.55cqw;font-weight:600;color:var(--ink);white-space:nowrap}
.v-realty-listing .ls-facts small{display:block;font-size:1cqw;color:color-mix(in srgb,var(--ink) 56%,transparent)}
.v-realty-listing .ls-cta{position:relative;margin-top:3cqw;display:flex;align-items:center;gap:1.2cqw;padding:1.1cqw 1.8cqw;border:1px solid var(--accent);border-radius:3cqw;font-size:1.3cqw;line-height:1.3;color:var(--ink);white-space:nowrap;overflow:hidden;animation:realty-listing-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-listing .ls-cta svg{width:1.6cqw;height:1.6cqw;flex:none;color:var(--accent)}
.v-realty-listing .ls-cta::after{content:"";position:absolute;top:0;bottom:0;left:0;width:40%;background:linear-gradient(100deg,transparent,color-mix(in srgb,var(--accent) 30%,transparent),transparent);animation:realty-listing-sheen 6s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-realty-listing .ls-photo{width:100cqw;height:52cqh;--art-top:19cqw;-webkit-mask-image:linear-gradient(180deg,#000 72%,transparent 99%);mask-image:linear-gradient(180deg,#000 72%,transparent 99%)}
  .v-realty-listing .ls-photo{--fade:linear-gradient(180deg,color-mix(in srgb,var(--paper) 88%,transparent),color-mix(in srgb,var(--paper) 40%,transparent) 30%,transparent 50%)}
  .v-realty-listing .ls-chip{left:8cqw;top:44cqh;font-size:3.2cqw;padding:1.4cqw 2.8cqw;gap:1.6cqw;border-radius:5cqw}
  .v-realty-listing .ls-chip i{width:1.8cqw;height:1.8cqw}
  .v-realty-listing .ls-panel{left:8cqw;width:84cqw;padding-top:53.5cqh}
  .v-realty-listing .ls-brand{display:none}
  .v-realty-listing .ls-head{position:absolute;left:0;right:0;top:6cqh}
  .v-realty-listing .ls-eyebrow{font-size:3.4cqw;gap:2.4cqw}
  .v-realty-listing .ls-eyebrow::before{width:7cqw}
  .v-realty-listing .ls-title{font-size:12cqw}
  .v-realty-listing .ls-addr{margin:0;font-size:5.4cqw}
  .v-realty-listing .ls-rule{width:84cqw;margin:2.4cqh 0 1.6cqh}
  .v-realty-listing .ls-plabel{font-size:3.6cqw}
  .v-realty-listing .ls-price{font-size:14cqw}
  .v-realty-listing .ls-facts{margin-top:2cqh;width:84cqw;gap:2cqw}
  .v-realty-listing .ls-facts div{padding-left:2.4cqw}
  .v-realty-listing .ls-facts svg{width:5.4cqw;height:5.4cqw}
  .v-realty-listing .ls-facts b{font-size:4.6cqw;margin-top:1cqw}
  .v-realty-listing .ls-facts small{font-size:3cqw}
  .v-realty-listing .ls-cta{position:absolute;top:86cqh;left:0;right:0;margin:0;justify-content:space-between;font-size:5.4cqw;padding:3cqw 5cqw;border-radius:9cqw}
  .v-realty-listing .ls-cta svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-listing .ls-photo{width:100cqw;height:50cqh;--art-top:-22cqw;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent 99%);mask-image:linear-gradient(180deg,#000 70%,transparent 99%)}
  .v-realty-listing .ls-chip{left:6cqw;top:5cqw;font-size:1.9cqw;padding:1cqw 2cqw;gap:1.2cqw;border-radius:3cqw}
  .v-realty-listing .ls-chip i{width:1.1cqw;height:1.1cqw}
  .v-realty-listing .ls-panel{left:6cqw;width:88cqw;padding-top:52cqw;display:grid;grid-template-columns:1fr 40cqw;column-gap:6cqw;align-content:start;align-items:start;grid-template-areas:"head plabel" "head price" "addr facts" "cta facts"}
  .v-realty-listing .ls-brand{display:none}
  .v-realty-listing .ls-brand svg{width:2.8cqw;height:2.8cqw}
  .v-realty-listing .ls-head{grid-area:head}
  .v-realty-listing .ls-eyebrow{font-size:1.9cqw}
  .v-realty-listing .ls-title{font-size:7.6cqw}
  .v-realty-listing .ls-addr{grid-area:addr;margin-top:1cqw;font-size:2.4cqw}
  .v-realty-listing .ls-cta{grid-area:cta;justify-self:start;margin-top:4cqw;font-size:2.4cqw;padding:1.8cqw 3cqw;border-radius:5cqw}
  .v-realty-listing .ls-cta svg{width:2.6cqw;height:2.6cqw}
  .v-realty-listing .ls-rule{display:none}
  .v-realty-listing .ls-plabel{grid-area:plabel;margin-top:1cqw;font-size:1.9cqw}
  .v-realty-listing .ls-price{grid-area:price;font-size:7cqw}
  .v-realty-listing .ls-facts{grid-area:facts;margin-top:3cqw;width:40cqw;grid-template-columns:repeat(2,1fr);row-gap:2cqw}
  .v-realty-listing .ls-facts div{display:grid;grid-template-columns:auto 1fr;column-gap:1.4cqw;align-items:center;padding-left:1.4cqw}
  .v-realty-listing .ls-facts svg{width:3.4cqw;height:3.4cqw;grid-row:span 2}
  .v-realty-listing .ls-facts b{font-size:2.6cqw;margin:0}
  .v-realty-listing .ls-facts small{font-size:1.8cqw}
}
@keyframes realty-listing-wipe{0%,2%{clip-path:inset(0 100% 0 0)}18%,86%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes realty-listing-kb{0%{transform:scale(1.14) translateX(1.5%)}88%{transform:scale(1.01) translateX(-.5%)}100%{transform:scale(1.14) translateX(1.5%)}}
@keyframes realty-listing-shimmer{0%,100%{transform:scaleX(1) translateX(0);opacity:.85}50%{transform:scaleX(1.04) translateX(.6cqw);opacity:.6}}
@keyframes realty-listing-ripple{0%{transform:translateY(0)}100%{transform:translateY(3cqw)}}
@keyframes realty-listing-chip{0%,14%{opacity:0;transform:translateY(-1cqw)}22%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes realty-listing-out{0%,86%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(2cqw)}}
@keyframes realty-listing-f1{0%,6%{opacity:0}14%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-listing-rise{0%,8%{transform:translateY(105%)}20%,95%{transform:translateY(0)}96%,100%{transform:translateY(105%)}}
@keyframes realty-listing-f2{0%,13%{opacity:0;transform:translateY(1cqw)}23%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(1cqw)}}
@keyframes realty-listing-rule{0%,15%{transform:scaleX(0)}28%,95%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
@keyframes realty-listing-f3{0%,17%{opacity:0}22%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-listing-roll{0%,18%{transform:translateY(700%)}38%,95%{transform:translateY(0)}96%,100%{transform:translateY(700%)}}
@keyframes realty-listing-fact{0%,28%{opacity:0;transform:translateY(1.4cqw)}36%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(1.4cqw)}}
@keyframes realty-listing-cta{0%,38%{opacity:0;transform:translateY(1.4cqw)}46%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(1.4cqw)}}
@keyframes realty-listing-sheen{0%,55%{transform:translateX(-120%)}75%,100%{transform:translateX(320%)}}
`,
};

export const realtyMap: SceneSpec = {
  id: "realty-map",
  slug: "mg-realty-map",
  name: "Neighbourhood Map Pin",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "map-pin-drop-poi-pop",
  energy: "default",
  settle: 3.0,
  colors: {"ink": "#1D2A25", "accent": "#1F3D33", "secondary": "#7FA58F", "paper": "#F2EEE6"},
  fonts: {"display": "Caveat", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.accent",
  tags: ["real-estate", "map", "neighbourhood"],
  fields: [
    { key: "address", label: "Address", default: "14 Larch Lane", maxChars: 22, role: "headline" },
    { key: "sub", label: "Details", default: "Fernhill · 3 bed townhouse", maxChars: 32, role: "body" },
    { key: "note", label: "Hand note", default: "Sunday market!", maxChars: 18, role: "caption" },
    { key: "score", label: "Walk score", default: "92", maxChars: 3, role: "value" },
  ],
  html: `<div class="mp-world"><div class="mp-cam">
  <svg class="mp-svg" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs><pattern id="realty-map-bld" width="9" height="7" patternUnits="userSpaceOnUse"><rect x=".9" y=".9" width="4" height="2.5" rx=".4" class="b1"/><rect x="5.6" y=".9" width="2.6" height="2.5" rx=".4" class="b2"/><rect x=".9" y="4.1" width="2.3" height="2.2" rx=".4" class="b2"/><rect x="3.9" y="4.1" width="4.3" height="2.2" rx=".4" class="b3"/></pattern></defs>
        <rect class="land" width="160" height="90"/>
        <rect width="160" height="90" fill="url(#realty-map-bld)"/>
        <path d="M29 12 C 39 8, 54 10, 57 17 C 60 25, 52 31, 42 30.5 C 32 30, 26 23, 29 12 Z" class="park"/>
        <path d="M34 15 C 40 20, 46 18, 52 24 M38 27 C 42 22, 48 21, 55 18" class="path" stroke-width=".8" fill="none" stroke-dasharray="1.2 1"/>
        <path d="M71 62 C 76 58, 85 60, 86 66 C 87 72, 79 75, 74 73 C 69 71, 68 65, 71 62 Z" class="park"/>
        <path d="M112 -2 H162 V30 C 152 34, 140 30, 133 24 C 125 17, 116 12, 112 -2 Z" class="water"/>
        <path d="M134 24 C 124 38, 108 48, 104 64 C 101 76, 96 84, 92 92" class="river" stroke-width="5" fill="none"/>
        <g fill="none" stroke-linecap="round">
          <g class="case" stroke-width="2.9">
            <path d="M46 -5 L 51 95"/><path d="M-5 63 L 165 67"/><path d="M86 -5 C 82 30, 92 60, 86 95"/><path d="M18 -5 L 22 95"/><path d="M-5 19 L 120 14"/><path d="M62 42 L 69 95"/><path d="M51 28 L 86 26"/><path d="M22 52 L 50 50"/>
          </g>
          <g class="road" stroke-width="2">
            <path d="M46 -5 L 51 95"/><path d="M-5 63 L 165 67"/><path d="M86 -5 C 82 30, 92 60, 86 95"/><path d="M18 -5 L 22 95"/><path d="M-5 19 L 120 14"/><path d="M62 42 L 69 95"/><path d="M51 28 L 86 26"/><path d="M22 52 L 50 50"/>
          </g>
          <path d="M-5 41 C 30 38, 62 46, 165 37" class="mcase" stroke-width="4.4"/>
          <path d="M-5 41 C 30 38, 62 46, 165 37" class="mroad" stroke-width="3.3"/>
          <path d="M-5 54 C 30 51, 62 57, 96 50 S 140 42, 165 44" class="rail" stroke-width=".9"/>
          <path d="M-5 54 C 30 51, 62 57, 96 50 S 140 42, 165 44" class="land-s" stroke-width=".45" stroke-dasharray="1.4 1.4"/>
        </g>
        <g class="lbl" font-size="1.9">
          <text x="3" y="39.2" transform="rotate(-3 3 39.2)">Calder St</text>
          <text x="52.6" y="12" transform="rotate(86 52.6 12)">Larch Ln</text>
          <text x="31.5" y="14.2" font-style="italic" class="plbl" font-size="2">Linden Park</text>
        </g>
      </svg>
  <svg class="mp-route" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M52.8 48 C 56 49, 58 51, 60 52 C 61.5 53, 62.5 54, 64 54.6" fill="none" stroke="currentColor" stroke-width=".9" stroke-linecap="round" stroke-dasharray=".01 1.7"/></svg>
  <div class="mp-ring"><span>10 min walk</span></div>
  <div class="mp-pulse"></div>
  <div class="mp-shadow"></div>
  <div class="mp-poi mp-p1"><i style="background:#b8643f"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M9 3v3M13 3v3"/></svg></i></div>
      <div class="mp-poi mp-p2"><i style="background:#5d8a5b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-5M12 16c-3.3 0-5.5-2-5.5-4.8C6.5 8 9 5 12 3c3 2 5.5 5 5.5 8.2 0 2.8-2.2 4.8-5.5 4.8z"/></svg></i></div>
      <div class="mp-poi mp-p3"><i style="background:#d99a2b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2.5 9 2.5 12 0v-5"/></svg></i></div>
      <div class="mp-poi mp-p4"><i style="background:#3a6ea8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2zM5 11h14M9 21l1.5-4M15 21l-1.5-4"/></svg></i></div>
      <div class="mp-poi mp-p5"><i style="background:#8466a8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18l-2 10H5zM8 9l3-5M16 9l-3-5M9.5 13v3M14.5 13v3"/></svg></i></div>
  <div class="mp-home"><div class="mp-pin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/></svg></div><div class="mp-hlabel"><span>{{address}}</span><small>Your future home</small></div></div>
</div></div>
<div class="mp-note"><span data-21st-slot="note">{{note}}</span><svg viewBox="0 0 46 36"><path d="M2 30 C 14 30, 26 24, 34 10"/><path d="M27 12 L34 9 L36 17"/></svg></div>
<div class="mp-card">
  <div class="mp-ch"><span class="mp-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/></svg></span>Halden Estates<em>Neighbourhood</em></div>
  <div class="mp-name" data-21st-slot="address">{{address}}</div>
  <p class="mp-sub" data-21st-slot="sub">{{sub}}</p>
  <div class="mp-hr"></div>
  <p class="mp-lab">Within a 10 min walk</p>
  <ul>
        <li><i style="background:#b8643f"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M9 3v3M13 3v3"/></svg></i><span>Ostra Café</span><b>3 min</b></li>
        <li><i style="background:#5d8a5b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-5M12 16c-3.3 0-5.5-2-5.5-4.8C6.5 8 9 5 12 3c3 2 5.5 5 5.5 8.2 0 2.8-2.2 4.8-5.5 4.8z"/></svg></i><span>Linden Park</span><b>2 min</b></li>
        <li><i style="background:#d99a2b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2.5 9 2.5 12 0v-5"/></svg></i><span>Fernhill Primary</span><b>6 min</b></li>
        <li><i style="background:#3a6ea8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2zM5 11h14M9 21l1.5-4M15 21l-1.5-4"/></svg></i><span>Calder St station</span><b>5 min</b></li>
        <li><i style="background:#8466a8"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18l-2 10H5zM8 9l3-5M16 9l-3-5M9.5 13v3M14.5 13v3"/></svg></i><span>Market hall</span><b>7 min</b></li>
      </ul>
  <div class="mp-score"><span>Walk score</span><b data-21st-slot="score">{{score}}</b><i><em></em></i></div>
</div>`,
  css: `
.v-realty-map{color:var(--ink);font-family:var(--font-body);--card:color-mix(in srgb,var(--paper) 86%,#fff);--muted:color-mix(in srgb,var(--ink) 58%,transparent);--hair:color-mix(in srgb,var(--ink) 12%,transparent)}
.v-realty-map[data-backdrop="on"]{background:var(--paper)}
.v-realty-map[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-realty-map .mp-world{position:absolute;left:0;top:0;width:100cqw;height:100cqh;container-type:size;overflow:hidden}
.v-realty-map .mp-cam{position:absolute;inset:0;transform-origin:33cqw 30cqw;animation:realty-map-cam 6s cubic-bezier(.45,0,.2,1) infinite}
.v-realty-map .mp-svg{position:absolute;inset:0;width:100%;height:100%}
.v-realty-map .mp-svg .land{fill:var(--paper)}
.v-realty-map .mp-svg .land-s{stroke:var(--paper)}
.v-realty-map .mp-svg .b1{fill:color-mix(in srgb,var(--paper) 94%,var(--ink))}
.v-realty-map .mp-svg .b2{fill:color-mix(in srgb,var(--paper) 95.5%,var(--ink))}
.v-realty-map .mp-svg .b3{fill:color-mix(in srgb,var(--paper) 92.5%,var(--ink))}
.v-realty-map .mp-svg .park{fill:color-mix(in srgb,var(--secondary) 28%,var(--paper))}
.v-realty-map .mp-svg .path{stroke:color-mix(in srgb,var(--secondary) 10%,var(--paper))}
.v-realty-map .mp-svg .water{fill:color-mix(in srgb,#8fc3d0 38%,var(--paper))}
.v-realty-map .mp-svg .river{stroke:color-mix(in srgb,#8fc3d0 38%,var(--paper))}
.v-realty-map .mp-svg .case{stroke:color-mix(in srgb,var(--paper) 86%,var(--ink))}
.v-realty-map .mp-svg .road{stroke:color-mix(in srgb,var(--paper) 55%,#fff)}
.v-realty-map .mp-svg .mcase{stroke:color-mix(in srgb,var(--paper) 78%,var(--secondary))}
.v-realty-map .mp-svg .mroad{stroke:color-mix(in srgb,var(--paper) 50%,#fff)}
.v-realty-map .mp-svg .rail{stroke:color-mix(in srgb,var(--paper) 50%,var(--ink))}
.v-realty-map .mp-svg .lbl{fill:color-mix(in srgb,var(--ink) 42%,var(--paper));font-family:var(--font-body)}
.v-realty-map .mp-svg .plbl{fill:color-mix(in srgb,var(--secondary) 70%,var(--ink))}
.v-realty-map .mp-route{position:absolute;inset:0;width:100%;height:100%;color:var(--accent);animation:realty-map-route 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-map .mp-ring{position:absolute;left:16cqw;top:13cqw;width:34cqw;height:34cqw;box-sizing:border-box;border-radius:50%;border:1px dashed color-mix(in srgb,var(--accent) 55%,transparent);background:radial-gradient(closest-side,transparent 60%,color-mix(in srgb,var(--accent) 9%,transparent));animation:realty-map-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-map .mp-ring span{position:absolute;left:50%;top:-1.3cqw;transform:translateX(-50%);padding:.45cqw 1.1cqw;border-radius:2cqw;background:var(--accent);color:var(--paper);font-size:1.05cqw;font-weight:500;white-space:nowrap}
.v-realty-map .mp-pulse{position:absolute;left:30cqw;top:27cqw;width:6cqw;height:6cqw;border-radius:50%;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);animation:realty-map-pulse 2s ease-out infinite}
.v-realty-map .mp-home{position:absolute;left:33cqw;top:30cqw;width:0;height:0;animation:realty-map-drop 6s cubic-bezier(.5,0,.75,0) infinite}
.v-realty-map .mp-shadow{position:absolute;left:33cqw;top:30cqw;width:4cqw;height:1.2cqw;margin:-.6cqw 0 0 -2cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(20,30,25,.35),transparent);animation:realty-map-shadow 6s ease-out infinite}
.v-realty-map .mp-pin{position:absolute;left:-2.5cqw;top:-6.1cqw;width:5cqw;height:5cqw;border-radius:50% 50% 50% 0;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 85%,#fff),color-mix(in srgb,var(--accent) 75%,#000));transform:rotate(-45deg);box-shadow:-.3cqw .5cqw 1.2cqw rgba(20,40,30,.35)}
.v-realty-map .mp-pin svg{position:absolute;left:1cqw;top:1cqw;width:3cqw;height:3cqw;color:var(--paper);transform:rotate(45deg)}
.v-realty-map .mp-hlabel{position:absolute;left:3.5cqw;top:-6.2cqw;padding:.6cqw 1.2cqw;border-radius:.8cqw;background:var(--card);color:var(--ink);box-shadow:0 .6cqw 1.6cqw rgba(30,40,30,.18);font-size:1.2cqw;line-height:1.25;font-weight:600;white-space:nowrap}
.v-realty-map .mp-hlabel small{display:block;font-size:.95cqw;font-weight:500;color:var(--muted)}
.v-realty-map .mp-poi{position:absolute;width:0;height:0}
.v-realty-map .mp-poi i{position:absolute;left:-1.7cqw;top:-4.3cqw;display:grid;place-items:center;width:3.4cqw;height:3.4cqw;border-radius:50%;border:.3cqw solid #fffdf8;box-sizing:border-box;box-shadow:0 .5cqw 1.2cqw rgba(30,40,30,.22)}
.v-realty-map .mp-poi i::after{content:"";position:absolute;left:50%;bottom:-1.1cqw;margin-left:-.5cqw;border:.5cqw solid transparent;border-top:.7cqw solid #fffdf8}
.v-realty-map .mp-poi svg,.v-realty-map .mp-card li i svg{width:58%;height:58%;color:#fff}
.v-realty-map .mp-p1{left:24.5cqw;top:22cqw;animation:realty-map-pop 6s cubic-bezier(.3,1.6,.5,1) infinite}
.v-realty-map .mp-p2{left:26.6cqw;top:18.4cqw;--delay:.18s;animation:realty-map-pop 6s cubic-bezier(.3,1.6,.5,1) infinite}
.v-realty-map .mp-p3{left:44cqw;top:17.5cqw;--delay:.36s;animation:realty-map-pop 6s cubic-bezier(.3,1.6,.5,1) infinite}
.v-realty-map .mp-p4{left:40cqw;top:34.4cqw;--delay:.54s;animation:realty-map-pop 6s cubic-bezier(.3,1.6,.5,1) infinite}
.v-realty-map .mp-p5{left:21cqw;top:38.5cqw;--delay:.72s;animation:realty-map-pop 6s cubic-bezier(.3,1.6,.5,1) infinite}
.v-realty-map .mp-note{position:absolute;left:3.6cqw;top:41cqw;font-family:var(--font-display);font-size:2.8cqw;line-height:1.3;font-weight:700;color:color-mix(in srgb,var(--accent) 70%,var(--ink));white-space:nowrap;transform:rotate(-6deg);animation:realty-map-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-map .mp-note svg{position:absolute;left:100%;top:-2.4cqw;margin-left:.4cqw;width:4.6cqw;height:3.6cqw;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round}
.v-realty-map .mp-card{position:absolute;left:65.5cqw;top:4.5cqw;width:31cqw;box-sizing:border-box;padding:2.2cqw 2.4cqw;border-radius:1.6cqw;background:var(--card);color:var(--ink);box-shadow:0 1.8cqw 4.5cqw rgba(40,50,35,.16),0 .2cqw .6cqw rgba(40,50,35,.08);animation:realty-map-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-map .mp-ch{display:flex;align-items:center;gap:.9cqw;font-size:1.1cqw;font-weight:500;color:var(--muted)}
.v-realty-map .mp-ch em{margin-left:auto;font-style:normal;padding:.3cqw .8cqw;border-radius:1cqw;background:color-mix(in srgb,var(--secondary) 18%,transparent);color:color-mix(in srgb,var(--secondary) 45%,var(--ink));font-size:.95cqw}
.v-realty-map .mp-mark{display:grid;place-items:center;width:2.4cqw;height:2.4cqw;border-radius:.6cqw;background:var(--accent);color:var(--paper)}
.v-realty-map .mp-mark svg{width:1.6cqw;height:1.6cqw}
.v-realty-map .mp-name{margin-top:1.8cqw;font-size:2.6cqw;font-weight:600;letter-spacing:-.01em;line-height:1.2}
.v-realty-map .mp-sub{margin:.4cqw 0 0;font-size:1.2cqw;line-height:1.3;color:var(--muted)}
.v-realty-map .mp-hr{height:1px;margin:1.6cqw 0 1.2cqw;background:var(--hair)}
.v-realty-map .mp-lab{margin:0 0 .6cqw;font-size:1.05cqw;color:var(--muted)}
.v-realty-map .mp-card ul{margin:0;padding:0;list-style:none;animation:realty-map-list 6s cubic-bezier(.45,0,.25,1) infinite}
.v-realty-map .mp-card li{display:flex;align-items:center;gap:1.1cqw;height:3.85cqw;font-size:1.28cqw}
.v-realty-map .mp-card li i{display:grid;place-items:center;flex:none;width:2.4cqw;height:2.4cqw;border-radius:50%}
.v-realty-map .mp-card li span{flex:1}
.v-realty-map .mp-card li b{font-family:var(--font-mono);font-size:1.1cqw;font-weight:500;color:color-mix(in srgb,var(--secondary) 40%,var(--ink))}
.v-realty-map .mp-score{display:flex;align-items:center;gap:1.2cqw;margin-top:1.4cqw;padding-top:1.3cqw;border-top:1px solid var(--hair);font-size:1.1cqw;color:var(--muted)}
.v-realty-map .mp-score b{font-size:2.2cqw;line-height:1.35;font-weight:700;color:var(--ink)}
.v-realty-map .mp-score i{flex:1;height:.7cqw;border-radius:.4cqw;background:color-mix(in srgb,var(--secondary) 18%,transparent);overflow:hidden}
.v-realty-map .mp-score em{display:block;width:92%;height:100%;border-radius:.4cqw;background:linear-gradient(90deg,var(--secondary),var(--accent));transform-origin:0 50%;animation:realty-map-bar 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-realty-map .mp-world{left:-22.6cqw;top:-14cqw;width:220cqw;height:123.75cqw}
  .v-realty-map .mp-note{left:8cqw;top:5cqh;font-size:9.4cqw;padding:.6cqw 4cqw;border-radius:2cqw;background:var(--card);box-shadow:0 1.6cqw 4cqw rgba(30,40,30,.2);transform:rotate(-3deg)}
  .v-realty-map .mp-note svg{display:none}
  .v-realty-map .mp-card{left:6cqw;right:6cqw;width:auto;top:41cqh;padding:4.6cqw 6cqw;border-radius:4.5cqw}
  .v-realty-map .mp-ch{font-size:3.4cqw;gap:2.4cqw}
  .v-realty-map .mp-ch em{font-size:2.8cqw;padding:.8cqw 2cqw;border-radius:3cqw}
  .v-realty-map .mp-mark{width:6.4cqw;height:6.4cqw;border-radius:1.6cqw}
  .v-realty-map .mp-mark svg{width:4cqw;height:4cqw}
  .v-realty-map .mp-name{margin-top:2.4cqw;font-size:8.4cqw}
  .v-realty-map .mp-sub{font-size:5.4cqw;margin-top:1cqw}
  .v-realty-map .mp-hr{margin:2.4cqw 0 1.8cqw}
  .v-realty-map .mp-lab{font-size:3.2cqw;margin-bottom:1cqw}
  .v-realty-map .mp-card li{height:6.8cqw;font-size:3.8cqw;gap:2.6cqw}
  .v-realty-map .mp-card li i{width:5.8cqw;height:5.8cqw}
  .v-realty-map .mp-card li b{font-size:3.2cqw}
  .v-realty-map .mp-score{margin-top:1.6cqw;padding-top:2cqw;font-size:3.6cqw;gap:3cqw}
  .v-realty-map .mp-score b{font-size:8cqw}
  .v-realty-map .mp-score i{height:1.8cqw;border-radius:1cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-map .mp-world{left:-31cqw;width:177.8cqw}
  .v-realty-map .mp-note{left:6cqw;top:84cqw;font-size:5.6cqw}
  .v-realty-map .mp-note svg{top:-5cqw;width:8cqw;height:6cqw}
  .v-realty-map .mp-card{left:auto;right:4cqw;top:5cqw;width:44cqw;padding:3.4cqw 3.6cqw;border-radius:2.6cqw}
  .v-realty-map .mp-ch{font-size:1.9cqw;gap:1.4cqw}
  .v-realty-map .mp-ch em{font-size:1.6cqw;padding:.5cqw 1.2cqw}
  .v-realty-map .mp-mark{width:3.8cqw;height:3.8cqw;border-radius:1cqw}
  .v-realty-map .mp-mark svg{width:2.4cqw;height:2.4cqw}
  .v-realty-map .mp-name{margin-top:2.6cqw;font-size:4.2cqw}
  .v-realty-map .mp-sub{font-size:2.1cqw}
  .v-realty-map .mp-hr{margin:2.4cqw 0 1.8cqw}
  .v-realty-map .mp-lab{font-size:1.8cqw;margin-bottom:.8cqw}
  .v-realty-map .mp-card li{height:6cqw;font-size:2.2cqw;gap:1.6cqw}
  .v-realty-map .mp-card li i{width:3.8cqw;height:3.8cqw}
  .v-realty-map .mp-card li b{font-size:1.9cqw}
  .v-realty-map .mp-score{margin-top:2cqw;padding-top:2cqw;font-size:1.9cqw;gap:1.8cqw}
  .v-realty-map .mp-score b{font-size:4cqw}
  .v-realty-map .mp-score i{height:1.1cqw}
}
@keyframes realty-map-cam{0%{transform:scale(1.14) translate(1cqw,1cqw)}30%{transform:scale(1.02) translate(0,0)}86%{transform:scale(1) translate(-.6cqw,0)}100%{transform:scale(1.14) translate(1cqw,1cqw)}}
@keyframes realty-map-route{0%,36%{clip-path:inset(0 67% 0 0)}46%,86%{clip-path:inset(0 0 0 0)}92%,100%{clip-path:inset(0 67% 0 0)}}
@keyframes realty-map-ring{0%,11%{opacity:0;transform:scale(.2)}24%,86%{opacity:1;transform:scale(1)}93%,100%{opacity:0;transform:scale(1.1)}}
@keyframes realty-map-pulse{0%{opacity:.7;transform:scale(.3)}100%{opacity:0;transform:scale(2.4)}}
@keyframes realty-map-drop{0%,3%{opacity:0;transform:translateY(-16cqw)}4%{opacity:1}10%{transform:translateY(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}12%{transform:translateY(-1.4cqw);animation-timing-function:cubic-bezier(.5,0,.75,0)}14%,86%{opacity:1;transform:translateY(0)}92%,100%{opacity:0;transform:translateY(0) scale(.4)}}
@keyframes realty-map-shadow{0%,3%{opacity:0;transform:scale(.3)}10%,86%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(.3)}}
@keyframes realty-map-pop{0%,17%{opacity:0;transform:scale(0)}22%,86%{opacity:1;transform:scale(1)}91%,100%{opacity:0;transform:scale(0)}}
@keyframes realty-map-note{0%,38%{opacity:0;translate:0 1cqw;clip-path:inset(0 100% 0 0)}47%,86%{opacity:1;translate:0 0;clip-path:inset(-3cqw -14cqw -2cqw -2cqw)}92%,100%{opacity:0;clip-path:inset(-3cqw -14cqw -2cqw -2cqw)}}
@keyframes realty-map-card{0%,5%{opacity:0;transform:translateX(6cqw)}18%,86%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(6cqw)}}
@keyframes realty-map-list{0%,18%{clip-path:inset(0 0 100% 0)}36%,100%{clip-path:inset(0 0 0 0)}}
@keyframes realty-map-bar{0%,34%{transform:scaleX(0)}46%,100%{transform:scaleX(1)}}
`,
};

export const realtyTour: SceneSpec = {
  id: "realty-tour",
  slug: "mg-realty-tour",
  name: "Room By Room Tour",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "room-crossfade-ken-burns",
  energy: "calm",
  settle: 4.7,
  colors: {"ink": "#FFFFFF", "accent": "#E7B852", "secondary": "#C9A46A", "paper": "#1B1612"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["real-estate", "home-tour", "rooms"],
  fields: [
    { key: "brand", label: "Agency", default: "Halden", maxChars: 18, role: "label" },
    { key: "roomA", label: "Room 1", default: "The living room", maxChars: 22, role: "headline" },
    { key: "roomB", label: "Room 2", default: "The kitchen", maxChars: 22, role: "headline" },
    { key: "roomC", label: "Room 3", default: "The main bedroom", maxChars: 22, role: "headline" },
  ],
  html: `<div class="tr-room tr-a">
      <div class="tr-kb">
        <i class="a-wall"></i><i class="a-floor"></i><i class="a-base"></i>
        <i class="a-win"></i>
        <i class="a-cur" style="left:3cqw;width:6cqw"></i><i class="a-cur" style="left:25.6cqw;width:5.4cqw"></i>
        <i class="a-beam"></i>
        <i class="a-art"></i>
        <i class="a-lglow"></i><i class="a-pole"></i><i class="a-shade"></i><i class="a-lbase"></i>
        <i class="a-rug"></i><i class="a-sh"></i>
        <i class="a-leaf" style="left:30cqw;top:20cqw;transform:rotate(-28deg)"></i><i class="a-leaf" style="left:34.6cqw;top:17cqw;transform:rotate(18deg)"></i><i class="a-leaf" style="left:32cqw;top:16.6cqw;transform:rotate(-6deg);height:10cqw"></i><i class="a-leaf" style="left:36cqw;top:22cqw;transform:rotate(40deg);height:7cqw"></i>
        <i class="a-pot"></i>
        <i class="a-back"></i>
        <i class="a-leg" style="left:42cqw"></i><i class="a-leg" style="left:80.2cqw"></i>
        <i class="a-seat"></i>
        <i class="a-arm" style="left:38.6cqw"></i><i class="a-arm" style="left:79.8cqw"></i>
        <i class="a-pil" style="left:44.4cqw;top:28cqw;background:linear-gradient(135deg,#e7b852,#c99530);transform:rotate(-9deg)"></i>
        <i class="a-pil" style="left:72cqw;top:28.2cqw;background:linear-gradient(135deg,#f5ecdc,#ddd0bb);transform:rotate(7deg)"></i>
        <i class="a-table"></i><i class="a-books"></i><i class="a-vase"></i>
      </div>
    </div>
<div class="tr-room tr-b">
      <div class="tr-kb">
        <i class="b-wall"></i>
        <i class="b-tile"></i>
        <i class="b-win"></i>
        <i class="b-shelf" style="left:6cqw"></i><i class="b-shelf" style="left:68cqw"></i>
        <i class="b-bowl" style="left:9cqw;top:9cqw"></i><i class="b-bowl" style="left:14cqw;top:9.4cqw;width:3cqw;height:1.6cqw"></i><i class="b-jar" style="left:22cqw;top:7cqw"></i><i class="b-jar" style="left:25.4cqw;top:8.4cqw;height:2.6cqw;background:linear-gradient(90deg,#d9c3a2,#efe2cc)"></i>
        <i class="b-jar" style="left:71cqw;top:6.6cqw;height:4.4cqw;background:linear-gradient(90deg,#c8714f,#de8f6c)"></i><i class="b-bowl" style="left:76cqw;top:9cqw"></i><i class="b-bowl" style="left:84cqw;top:9.2cqw;width:5cqw;height:1.8cqw;background:linear-gradient(180deg,#2f4a3f,#24382f)"></i>
        <i class="b-tap"></i>
        <i class="b-counter"></i>
        <i class="b-cab"></i>
        <i class="b-floor"></i>
        <i class="b-pglow" style="left:16cqw"></i><i class="b-pglow" style="left:40cqw"></i><i class="b-pglow" style="left:64cqw"></i>
        <i class="b-cord" style="left:25.9cqw"></i><i class="b-cord" style="left:49.9cqw"></i><i class="b-cord" style="left:73.9cqw"></i>
        <i class="b-dome" style="left:22.3cqw"></i><i class="b-dome" style="left:46.3cqw"></i><i class="b-dome" style="left:70.3cqw"></i>
        <i class="a-leaf" style="left:65.2cqw;top:25.4cqw;width:2.2cqw;height:7cqw;transform:rotate(-24deg)"></i><i class="a-leaf" style="left:67.6cqw;top:24.4cqw;width:2.2cqw;height:7.4cqw;transform:rotate(16deg)"></i><i class="a-leaf" style="left:66.4cqw;top:23.4cqw;width:2cqw;height:8cqw"></i><i class="b-bottle"></i>
        <i class="b-board"></i>
        <i class="b-lemon" style="left:23.6cqw;top:35.4cqw"></i><i class="b-lemon" style="left:25.8cqw;top:34.6cqw"></i><i class="b-lemon" style="left:27.6cqw;top:35.6cqw"></i>
        <i class="b-fbowl"></i>
        <i class="b-island"></i>
        <i class="b-body"></i>
      </div>
    </div>
<div class="tr-room tr-c">
      <div class="tr-kb">
        <i class="c-wall"></i>
        <i class="c-niche"></i>
        <i class="c-streak" style="left:70cqw"></i><i class="c-streak" style="left:82cqw;width:12cqw"></i>
        <i class="c-floor"></i><i class="c-rug"></i>
        <i class="c-lglow" style="left:5cqw"></i><i class="c-lglow" style="left:73cqw"></i>
        <i class="c-stand" style="left:11.4cqw"></i><i class="c-stand" style="left:79.2cqw"></i>
        <i class="c-lbase" style="left:14.2cqw"></i><i class="c-lbase" style="left:82cqw"></i>
        <i class="c-lshade" style="left:12.6cqw"></i><i class="c-lshade" style="left:80.4cqw"></i>
        <i class="c-frame"></i>
        <i class="c-pil" style="left:27cqw"></i><i class="c-pil" style="left:43cqw"></i><i class="c-pil" style="left:59cqw"></i>
        <i class="c-duvet"></i>
        <i class="c-throw"></i>
      </div>
    </div>
<div class="tr-shade"></div>
<div class="tr-grain"></div>
<div class="tr-brand" data-21st-slot="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg>{{brand}}</div>
<div class="tr-nums"><span>01 <em>/ 03</em></span><span>02 <em>/ 03</em></span><span>03 <em>/ 03</em></span></div>
<div class="tr-cap tr-ca"><b data-21st-slot="roomA">{{roomA}}</b><small>29.5 m² · west light</small></div>
<div class="tr-cap tr-cb"><b data-21st-slot="roomB">{{roomB}}</b><small>Oak island · seats four</small></div>
<div class="tr-cap tr-cc"><b data-21st-slot="roomC">{{roomC}}</b><small>17.1 m² · garden view</small></div>
<div class="tr-prog"><i><b></b></i><i><b></b></i><i><b></b></i></div>`,
  css: `
.v-realty-tour{color:var(--ink);font-family:var(--font-body)}
.v-realty-tour[data-backdrop="on"]{background:var(--paper)}
.v-realty-tour[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-realty-tour .tr-room{position:absolute;left:0;top:0;width:100cqw;height:100cqh;overflow:hidden;container-type:size}
.v-realty-tour .tr-kb { position: absolute; inset: 0; }
.v-realty-tour .tr-kb i, .v-realty-tour .tr-kb b { position: absolute; display: block; }
.v-realty-tour .tr-a .tr-kb { transform-origin: 40% 60%; animation: realty-tour-kba 6s linear infinite; }
.v-realty-tour .tr-b { animation: realty-tour-showb 6s ease-in-out infinite; }
.v-realty-tour .tr-b .tr-kb { transform-origin: 50% 45%; animation: realty-tour-kbb 6s linear infinite; }
.v-realty-tour .tr-c { animation: realty-tour-showc 6s ease-in-out infinite; }
.v-realty-tour .tr-c .tr-kb { transform-origin: 50% 55%; animation: realty-tour-kbc 6s linear infinite; }
.v-realty-tour .a-wall { left: 0; top: 0; width: 100cqw; height: 40cqw; background: radial-gradient(55% 75% at 20% 30%, rgba(255,250,236,.95), rgba(255,250,236,0) 60%), linear-gradient(90deg, #efe4d4, #e6d8c5 70%, #dccbb5); }
.v-realty-tour .a-floor { left: 0; top: 40cqw; width: 100cqw; height: 17cqw; background: repeating-linear-gradient(180deg, transparent 0 2.4cqw, rgba(90,55,25,.16) 2.4cqw 2.5cqw), linear-gradient(180deg, #c99a69, #a87947); }
.v-realty-tour .a-base { left: 0; top: 39.4cqw; width: 100cqw; height: .7cqw; background: #f7f0e4; }
.v-realty-tour .a-win { left: 6cqw; top: 5cqw; width: 22cqw; height: 31cqw; box-sizing: border-box; border: .8cqw solid #faf6ee; background: radial-gradient(40% 30% at 30% 85%, #9fb98f, transparent 70%), radial-gradient(35% 26% at 75% 88%, #8eaa82, transparent 70%), linear-gradient(180deg, #b8d4df 0%, #d8e6e2 55%, #eee6d4 100%); box-shadow: 0 0 4cqw rgba(255,250,235,.7); }
.v-realty-tour .a-win::before { content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: .6cqw; margin-left: -.3cqw; background: #faf6ee; }
.v-realty-tour .a-win::after { content: ""; position: absolute; left: 0; right: 0; top: 38%; height: .6cqw; background: #faf6ee; }
.v-realty-tour .a-cur { top: 2.6cqw; height: 37cqw; background: repeating-linear-gradient(90deg, rgba(0,0,0,.035) 0 .5cqw, transparent .5cqw 1.5cqw), linear-gradient(90deg, rgba(255,255,255,.9), rgba(250,245,235,.6)); border-radius: 0 0 .4cqw .4cqw; }
.v-realty-tour .a-beam { left: 5cqw; top: 39cqw; width: 46cqw; height: 18cqw; background: linear-gradient(180deg, rgba(255,244,214,.6), rgba(255,244,214,.08)); clip-path: polygon(4% 0, 50% 0, 100% 100%, 24% 100%); }
.v-realty-tour .a-art { left: 52cqw; top: 7.5cqw; width: 17cqw; height: 13cqw; box-sizing: border-box; border: .5cqw solid #2d2620; background: radial-gradient(circle at 70% 38%, #8ea893 0 2.2cqw, transparent 2.3cqw), radial-gradient(70% 90% at 36% 100%, #c8714f 0 49%, transparent 50%), #f6efe2; box-shadow: 0 1cqw 2cqw rgba(80,50,30,.18); }
.v-realty-tour .a-lglow { left: 79cqw; top: 2cqw; width: 19cqw; height: 19cqw; border-radius: 50%; background: radial-gradient(closest-side, rgba(255,222,150,.6), transparent); }
.v-realty-tour .a-pole { left: 88.4cqw; top: 13cqw; width: .4cqw; height: 26.6cqw; background: #2d2620; }
.v-realty-tour .a-shade { left: 85.2cqw; top: 9cqw; width: 6.8cqw; height: 5cqw; background: linear-gradient(180deg, #f6ebd3, #e6d2ad); clip-path: polygon(18% 0, 82% 0, 100% 100%, 0 100%); }
.v-realty-tour .a-lbase { left: 86.4cqw; top: 39cqw; width: 4.4cqw; height: 1cqw; border-radius: 50%; background: #2d2620; }
.v-realty-tour .a-rug { left: 28cqw; top: 43.5cqw; width: 64cqw; height: 10cqw; border-radius: 50%; background: radial-gradient(closest-side, #ebe0cd 78%, #d6c2a4 79% 85%, #ebe0cd 86%); }
.v-realty-tour .a-sh { left: 37cqw; top: 38cqw; width: 50cqw; height: 4cqw; border-radius: 50%; background: radial-gradient(closest-side, rgba(70,40,20,.35), transparent); }
.v-realty-tour .a-back { left: 41cqw; top: 26cqw; width: 41cqw; height: 9cqw; border-radius: 1.8cqw 1.8cqw .6cqw .6cqw; background: linear-gradient(180deg, #d27d5a, #b65f3f); }
.v-realty-tour .a-seat { left: 40cqw; top: 33.4cqw; width: 43cqw; height: 5.6cqw; border-radius: 1.2cqw; background: linear-gradient(90deg, transparent 49.7%, rgba(90,35,20,.3) 49.8% 50.2%, transparent 50.3%), linear-gradient(180deg, #cd7350, #a9563a); box-shadow: 0 .4cqw .8cqw rgba(80,35,20,.25); }
.v-realty-tour .a-arm { top: 29cqw; width: 4.6cqw; height: 10cqw; border-radius: 1.8cqw 1.8cqw .6cqw .6cqw; background: linear-gradient(90deg, #b15b3e, #c96f4e 60%, #b4603f); }
.v-realty-tour .a-leg { top: 38.9cqw; width: .8cqw; height: 1.5cqw; background: #3a2a20; }
.v-realty-tour .a-pil { width: 6.6cqw; height: 6.2cqw; border-radius: 1.3cqw; }
.v-realty-tour .a-pot { left: 31cqw; top: 32.4cqw; width: 6.6cqw; height: 7.6cqw; border-radius: .6cqw .6cqw 2.2cqw 2.2cqw; background: linear-gradient(90deg, #dcb892, #b88a60); }
.v-realty-tour .a-leaf { width: 4.2cqw; height: 9cqw; border-radius: 50%; background: linear-gradient(90deg, #4b7a50, #6c9c6c 55%, #3f6a46); transform-origin: 50% 100%; }
.v-realty-tour .a-table { left: 52cqw; top: 41.4cqw; width: 17cqw; height: 3cqw; border-radius: 50%; background: linear-gradient(180deg, #93653f, #6d4529); box-shadow: 0 1.4cqw 1.4cqw -0.6cqw rgba(60,30,15,.4); }
.v-realty-tour .a-books { left: 56cqw; top: 40cqw; width: 5cqw; height: 1.8cqw; background: linear-gradient(180deg, #2f4a3f 0 33%, #e7dccb 33% 66%, #c9a46a 66%); border-radius: .2cqw; }
.v-realty-tour .a-vase { left: 63.2cqw; top: 37.8cqw; width: 2cqw; height: 3.8cqw; border-radius: 40% 40% 30% 30%; background: linear-gradient(90deg, #f3ece0, #d8cbb5); }
.v-realty-tour .b-wall { left: 0; top: 0; width: 100cqw; height: 32cqw; background: radial-gradient(40% 60% at 50% 10%, rgba(255,248,230,.9), rgba(255,248,230,0) 70%), linear-gradient(180deg, #efe7da, #e5d9c7); }
.v-realty-tour .b-win { left: 41cqw; top: 3.4cqw; width: 18cqw; height: 18cqw; box-sizing: border-box; border: .7cqw solid #f8f3ea; border-radius: 9cqw 9cqw .3cqw .3cqw; background: radial-gradient(50% 30% at 30% 95%, #9db78e, transparent 70%), linear-gradient(180deg, #b3d0dd, #dbe6df 70%, #efe4cf); box-shadow: 0 0 5cqw rgba(255,250,232,.8); }
.v-realty-tour .b-win::before { content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: .5cqw; margin-left: -.25cqw; background: #f8f3ea; }
.v-realty-tour .b-win::after { content: ""; position: absolute; left: 0; right: 0; top: 52%; height: .5cqw; background: #f8f3ea; }
.v-realty-tour .b-tile { left: 0; top: 21.6cqw; width: 100cqw; height: 9.6cqw; background: repeating-linear-gradient(90deg, transparent 0 2.6cqw, rgba(245,250,245,.55) 2.6cqw 2.75cqw), repeating-linear-gradient(180deg, transparent 0 2.25cqw, rgba(245,250,245,.55) 2.25cqw 2.4cqw), linear-gradient(90deg, #8eae9a, #9dbca8 30%, #87a893 55%, #a0bdaa 80%, #8fae9b); }
.v-realty-tour .b-shelf { top: 11cqw; width: 26cqw; height: .9cqw; background: linear-gradient(#c49a6a, #a67d50); box-shadow: 0 .6cqw 1cqw rgba(90,60,30,.25); }
.v-realty-tour .b-bowl { width: 4cqw; height: 2cqw; border-radius: 0 0 2cqw 2cqw; background: linear-gradient(180deg, #f5efe5, #d7ccbb); }
.v-realty-tour .b-jar { width: 2.4cqw; height: 4cqw; border-radius: .6cqw .6cqw .4cqw .4cqw; background: linear-gradient(90deg, #6f8f7f, #8eab9b); }
.v-realty-tour .b-counter { left: 0; top: 31cqw; width: 100cqw; height: 1.3cqw; background: linear-gradient(180deg, #f6f2ea, #ddd5c8); box-shadow: 0 .4cqw .6cqw rgba(40,50,40,.25); }
.v-realty-tour .b-cab { left: 0; top: 32.3cqw; width: 100cqw; height: 10cqw; background: linear-gradient(90deg, transparent 0, transparent 100%), repeating-linear-gradient(90deg, #c9a46a 0 1.4cqw, transparent 1.4cqw 12.5cqw) 5.6cqw 1.8cqw / 100% .35cqw no-repeat, repeating-linear-gradient(90deg, #30493f 0 12.2cqw, #233a31 12.2cqw 12.5cqw); }
.v-realty-tour .b-tap { left: 48.2cqw; top: 26.6cqw; width: 3.4cqw; height: 4.6cqw; box-sizing: border-box; border: .45cqw solid #c9a46a; border-left: 0; border-bottom: 0; border-radius: 0 1.8cqw 0 0; }
.v-realty-tour .b-floor { left: 0; top: 42.3cqw; width: 100cqw; height: 15cqw; background: radial-gradient(circle at 30% 40%, rgba(120,100,80,.25) 0 .15cqw, transparent .2cqw) 0 0 / 2.2cqw 2.2cqw, radial-gradient(circle at 70% 70%, rgba(160,130,100,.25) 0 .2cqw, transparent .25cqw) 0 0 / 3.1cqw 3.1cqw, linear-gradient(180deg, #ddd2c2, #cdbfac); }
.v-realty-tour .b-cord { top: 0; width: .2cqw; height: 15cqw; background: #2d2620; }
.v-realty-tour .b-dome { top: 14.6cqw; width: 7.4cqw; height: 3.7cqw; border-radius: 3.7cqw 3.7cqw 0 0; background: linear-gradient(180deg, #e3c283, #a8803f); box-shadow: 0 .3cqw 0 -.05cqw #fff3d4; }
.v-realty-tour .b-pglow { top: 15cqw; width: 20cqw; height: 16cqw; border-radius: 50%; background: radial-gradient(closest-side, rgba(255,222,150,.55), transparent); }
.v-realty-tour .b-island { left: 12cqw; top: 39.4cqw; width: 76cqw; height: 2.5cqw; border-radius: .4cqw; background: linear-gradient(115deg, transparent 28%, rgba(150,140,130,.22) 29%, transparent 31%, transparent 62%, rgba(150,140,130,.18) 63%, transparent 64.5%), linear-gradient(180deg, #faf8f3, #e4dfd5); box-shadow: 0 1cqw 1.4cqw rgba(60,40,20,.3); }
.v-realty-tour .b-body { left: 14cqw; top: 41.9cqw; width: 72cqw; height: 15cqw; background: linear-gradient(180deg, rgba(40,20,5,.28), rgba(40,20,5,0) 25%), repeating-linear-gradient(90deg, #bb8d5e 0 1.4cqw, #a57a4e 1.4cqw 1.56cqw); }
.v-realty-tour .b-fbowl { left: 22cqw; top: 37cqw; width: 8cqw; height: 2.6cqw; border-radius: 0 0 4cqw 4cqw; background: linear-gradient(180deg, #f2ece2, #cfc3b0); }
.v-realty-tour .b-lemon { width: 2.4cqw; height: 2.1cqw; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #fff2a0, #e9c535 70%); }
.v-realty-tour .b-board { left: 39cqw; top: 33.6cqw; width: 7cqw; height: 6cqw; border-radius: 3cqw 3cqw .6cqw .6cqw; background: linear-gradient(90deg, #c9985f, #a9773f); transform: rotate(-8deg); }
.v-realty-tour .b-bottle { left: 66cqw; top: 32cqw; width: 3cqw; height: 7.6cqw; border-radius: 1.2cqw 1.2cqw .6cqw .6cqw; background: linear-gradient(90deg, #5e7f6f, #86a596 60%, #5e7f6f); }
.v-realty-tour .c-wall { left: 0; top: 0; width: 100cqw; height: 43cqw; background: linear-gradient(90deg, #ead8ca, #e2cbbb); }
.v-realty-tour .c-streak { top: 0; width: 18cqw; height: 43cqw; background: linear-gradient(180deg, rgba(255,245,228,.55), rgba(255,245,228,.05)); clip-path: polygon(60% 0, 100% 0, 40% 100%, 0 100%); }
.v-realty-tour .c-niche { left: 29cqw; top: 4.4cqw; width: 42cqw; height: 38.6cqw; border-radius: 21cqw 21cqw 0 0; background: linear-gradient(180deg, #d4b19d, #cba490); box-shadow: inset 0 1.4cqw 2.6cqw rgba(120,70,50,.22); }
.v-realty-tour .c-floor { left: 0; top: 43cqw; width: 100cqw; height: 14cqw; background: linear-gradient(180deg, #d2b18d, #b8946c); }
.v-realty-tour .c-rug { left: 10cqw; top: 48.5cqw; width: 80cqw; height: 9cqw; border-radius: 1cqw; background: linear-gradient(180deg, #f1e7da, #e4d6c4); }
.v-realty-tour .c-frame { left: 22cqw; top: 37.6cqw; width: 56cqw; height: 7.6cqw; border-radius: .6cqw; background: linear-gradient(180deg, #c0936a, #a07448); box-shadow: 0 1.2cqw 1.6cqw rgba(80,45,25,.3); }
.v-realty-tour .c-duvet { left: 23cqw; top: 30.6cqw; width: 54cqw; height: 9.4cqw; border-radius: 1.6cqw; background: repeating-linear-gradient(100deg, transparent 0 4.2cqw, rgba(140,120,100,.08) 4.2cqw 4.9cqw), linear-gradient(180deg, #fdfaf5, #e7e0d4); }
.v-realty-tour .c-pil { top: 26.2cqw; width: 14cqw; height: 6.4cqw; border-radius: 2.2cqw; background: linear-gradient(180deg, #ffffff, #ebe4d9); box-shadow: 0 .5cqw 1cqw rgba(90,60,40,.15); }
.v-realty-tour .c-throw { left: 23cqw; top: 35.6cqw; width: 54cqw; height: 3.6cqw; border-radius: .6cqw; background: repeating-linear-gradient(90deg, transparent 0 .5cqw, rgba(255,255,255,.12) .5cqw .7cqw), linear-gradient(180deg, #d0954a, #b97c32); }
.v-realty-tour .c-stand { top: 33.4cqw; width: 9.4cqw; height: 9.6cqw; border-radius: .5cqw; background: linear-gradient(180deg, transparent 47%, rgba(70,40,20,.35) 48% 50%, transparent 51%), linear-gradient(180deg, #c0936a, #9d7046); }
.v-realty-tour .c-lglow { top: 17cqw; width: 22cqw; height: 18cqw; border-radius: 50%; background: radial-gradient(closest-side, rgba(255,224,160,.65), transparent); }
.v-realty-tour .c-lbase { top: 28.6cqw; width: 3.8cqw; height: 4.8cqw; border-radius: 1.6cqw 1.6cqw .6cqw .6cqw; background: linear-gradient(90deg, #87a08c, #a9bfae); }
.v-realty-tour .c-lshade { top: 24.2cqw; width: 7cqw; height: 4.6cqw; background: linear-gradient(180deg, #fbf2df, #ecd9b4); clip-path: polygon(16% 0, 84% 0, 100% 100%, 0 100%); }
@keyframes realty-tour-kba { 0% { transform: scale(1.05) translateX(-1%); } 36% { transform: scale(1.13) translateX(1.5%); } 37%, 94% { transform: scale(1.02) translateX(-1.6%); } 100% { transform: scale(1.05) translateX(-1%); } }
@keyframes realty-tour-showb { 0%, 30% { opacity: 0; } 36%, 70% { opacity: 1; } 71%, 100% { opacity: 0; } }
@keyframes realty-tour-kbb { 0%, 30% { transform: scale(1.02) translateX(2%); } 71% { transform: scale(1.12) translate(-1.5%, -1%); } 72%, 100% { transform: scale(1.02) translateX(2%); } }
@keyframes realty-tour-showc { 0%, 64% { opacity: 0; } 70%, 94% { opacity: 1; } 100% { opacity: 0; } }
@keyframes realty-tour-kbc { 0%, 64% { transform: scale(1.15) translateY(-1%); } 100% { transform: scale(1.03) translateY(0); } }
@keyframes realty-tour-p1 { 0% { transform: scaleX(0); } 33%, 99.9% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
@keyframes realty-tour-p2 { 0%, 33% { transform: scaleX(0); } 67%, 99.9% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
@keyframes realty-tour-p3 { 0%, 67% { transform: scaleX(0); } 99.9% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
@keyframes realty-tour-grain { 0% { transform: translate(0, 0); } 20% { transform: translate(-4%, 3%); } 40% { transform: translate(3%, -5%); } 60% { transform: translate(-6%, -2%); } 80% { transform: translate(5%, 4%); } 100% { transform: translate(0, 0); } }
.v-realty-tour .tr-shade{position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 50%,transparent) 0%,transparent 22%,transparent 52%,color-mix(in srgb,var(--paper) 82%,transparent) 100%)}
.v-realty-tour .tr-grain{position:absolute;inset:-20%;opacity:.12;mix-blend-mode:overlay;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>") 0 0/22cqw 22cqw;animation:realty-tour-grain 1s steps(1,end) infinite}
.v-realty-tour .tr-nums{position:absolute;right:4.4cqw;top:3.8cqw;display:grid;font-family:var(--font-mono);font-size:1.15cqw;line-height:1.2;letter-spacing:.08em;color:var(--ink)}
.v-realty-tour .tr-nums span{grid-area:1/1;opacity:0}
.v-realty-tour .tr-nums em{font-style:normal;opacity:.55}
.v-realty-tour .tr-nums span:nth-child(1){animation:realty-tour-capa 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-tour .tr-nums span:nth-child(2){animation:realty-tour-capb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-tour .tr-nums span:nth-child(3){animation:realty-tour-capc 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-tour .tr-cap{position:absolute;left:5cqw;right:30cqw;bottom:4.6cqw}
.v-realty-tour .tr-cap b{display:block;font-family:var(--font-display);font-style:italic;font-weight:400;font-size:4.6cqw;line-height:1.25;color:var(--ink)}
.v-realty-tour .tr-cap small{display:flex;align-items:center;gap:.9cqw;margin-top:.4cqw;font-size:1.35cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 80%,transparent)}
.v-realty-tour .tr-cap small::before{content:"";width:2.4cqw;height:1px;background:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-realty-tour .tr-ca{animation:realty-tour-capa 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-tour .tr-cb{animation:realty-tour-capb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-tour .tr-cc{animation:realty-tour-capc 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-tour .tr-brand{position:absolute;left:4.4cqw;top:3.4cqw;display:flex;align-items:center;gap:.8cqw;font-family:var(--font-display);font-size:2.3cqw;line-height:1.25;color:var(--ink)}
.v-realty-tour .tr-brand svg{width:2.2cqw;height:2.2cqw;flex:none;color:var(--accent)}
.v-realty-tour .tr-prog{position:absolute;right:4.4cqw;bottom:5.4cqw;display:flex;gap:.7cqw}
.v-realty-tour .tr-prog i{width:4cqw;height:.35cqw;border-radius:.2cqw;background:color-mix(in srgb,var(--ink) 30%,transparent);overflow:hidden}
.v-realty-tour .tr-prog b{display:block;height:100%;background:var(--accent);transform-origin:0 50%}
.v-realty-tour .tr-prog i:nth-child(1) b{animation:realty-tour-p1 6s linear infinite}
.v-realty-tour .tr-prog i:nth-child(2) b{animation:realty-tour-p2 6s linear infinite}
.v-realty-tour .tr-prog i:nth-child(3) b{animation:realty-tour-p3 6s linear infinite}
@container (max-aspect-ratio: 4/5){
  .v-realty-tour .tr-room{width:316cqw;left:-108cqw}
  .v-realty-tour .tr-a{left:-146cqw}
  .v-realty-tour .tr-brand{left:8cqw;top:6cqh;font-size:7cqw;gap:2.4cqw}
  .v-realty-tour .tr-brand svg{width:6.6cqw;height:6.6cqw}
  .v-realty-tour .tr-nums{right:8cqw;top:7cqh;font-size:3.6cqw}
  .v-realty-tour .tr-cap{left:8cqw;right:8cqw;bottom:13cqh}
  .v-realty-tour .tr-cap b{font-size:11cqw}
  .v-realty-tour .tr-cap small{font-size:4.2cqw;gap:2.4cqw;margin-top:1.4cqw}
  .v-realty-tour .tr-cap small::before{width:7cqw}
  .v-realty-tour .tr-prog{left:8cqw;right:8cqw;bottom:6cqh;gap:2cqw}
  .v-realty-tour .tr-prog i{flex:1;height:1cqw;border-radius:.5cqw}
  .v-realty-tour .tr-shade{background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 60%,transparent) 0%,transparent 18%,transparent 55%,color-mix(in srgb,var(--paper) 88%,transparent) 88%)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-tour .tr-room{width:177.8cqw;left:-38.9cqw}
  .v-realty-tour .tr-a{left:-57cqw}
  .v-realty-tour .tr-brand{left:6cqw;top:5.4cqw;font-size:3.8cqw;gap:1.4cqw}
  .v-realty-tour .tr-brand svg{width:3.6cqw;height:3.6cqw}
  .v-realty-tour .tr-nums{right:6cqw;top:6.4cqw;font-size:2cqw}
  .v-realty-tour .tr-cap{left:6cqw;right:6cqw;bottom:12cqw}
  .v-realty-tour .tr-cap b{font-size:8.4cqw}
  .v-realty-tour .tr-cap small{font-size:2.4cqw;gap:1.4cqw;margin-top:1cqw}
  .v-realty-tour .tr-cap small::before{width:4cqw}
  .v-realty-tour .tr-prog{left:6cqw;right:6cqw;bottom:6cqw;gap:1.4cqw}
  .v-realty-tour .tr-prog i{flex:1;height:.7cqw}
}
@keyframes realty-tour-capa{0%,29%{opacity:1;transform:translateY(0)}33%,95%{opacity:0;transform:translateY(1.6cqw)}100%{opacity:1;transform:translateY(0)}}
@keyframes realty-tour-capb{0%,35%{opacity:0;transform:translateY(1.6cqw)}42%,63%{opacity:1;transform:translateY(0)}67%,100%{opacity:0;transform:translateY(0)}}
@keyframes realty-tour-capc{0%,69%{opacity:0;transform:translateY(1.6cqw)}76%,91%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const realtyMortgage: SceneSpec = {
  id: "realty-mortgage",
  slug: "mg-realty-mortgage",
  name: "Mortgage Payment Calculator",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "slider-drag-payment-roll",
  energy: "default",
  settle: 3.6,
  colors: {"ink": "#1C2622", "accent": "#24533F", "secondary": "#7FA58F", "paper": "#F8F6F1"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["real-estate", "mortgage", "calculator"],
  fields: [
    { key: "label", label: "Result label", default: "Your monthly payment", maxChars: 26, role: "label" },
    { key: "payment", label: "Payment", default: "$3,103", maxChars: 8, role: "value" },
    { key: "save", label: "Savings note", default: "$387 less every month", maxChars: 26, role: "caption" },
    { key: "cta", label: "Button", default: "Get pre-approved", maxChars: 20, role: "cta" },
  ],
  html: `<div class="mg-ui">
<div class="mg-card">
  <div class="mg-head"><span class="mg-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/></svg></span>Halden Home Loans<em>Estimate</em></div>
  <div class="mg-row" style="top:8.2cqw"><span>Home price</span><b>$640,000</b></div>
  <div class="mg-track" style="top:11.6cqw"><i class="mg-fill" style="transform:scaleX(.64)"></i><i class="mg-thumb" style="transform:translateX(28.2cqw)"></i></div>
  <div class="mg-row" style="top:15.6cqw"><span>Down payment</span><b class="mg-swap"><span class="mg-o1">10% · $64,000</span><span class="mg-o2">20% · $128,000</span></b></div>
  <div class="mg-track mg-drag" style="top:18.8cqw"><i class="mg-fill"></i><i class="mg-thumb"></i></div>
  <div class="mg-row" style="top:23cqw"><span>Interest rate</span><b>6.10% fixed</b></div>
  <div class="mg-track" style="top:26.2cqw"><i class="mg-fill" style="transform:scaleX(.61)"></i><i class="mg-thumb" style="transform:translateX(26.8cqw)"></i></div>
  <div class="mg-row" style="top:30.2cqw"><span>Loan term</span></div>
  <div class="mg-seg"><span>15 yr</span><span>20 yr</span><span>30 yr</span></div>
  <div class="mg-note">Estimate only · rates as of 7 Oct 2026</div>
</div>
<div class="mg-lab"><i></i><span data-21st-slot="label">{{label}}</span></div>
<div class="mg-num"><span class="mg-digits" data-21st-slot="payment">{{payment|chars}}</span><small>/mo</small></div>
<div class="mg-save"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg><span data-21st-slot="save">{{save}}</span></div>
<ul class="mg-kv">
  <li><span>Loan amount</span><b class="mg-swap"><span class="mg-o1">$576,000</span><span class="mg-o2">$512,000</span></b></li>
  <li><span>Rate · term</span><b>6.10% · 30 yr</b></li>
  <li><span>Pre-approval</span><b>within 24 h</b></li>
</ul>
<div class="mg-cta"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
<svg class="mg-cursor" viewBox="0 0 24 24"><path d="M3 2 L3 19 L7.6 14.8 L10.6 21.6 L13.6 20.3 L10.6 13.6 L16.8 13.4 Z" fill="#fff" stroke="#16211c" stroke-width="1.5" stroke-linejoin="round"/></svg>

</div>`,
  css: `
.v-realty-mortgage{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 60%,transparent);--hair:color-mix(in srgb,var(--ink) 13%,transparent)}
.v-realty-mortgage .mg-ui{position:absolute;inset:0;--cx0:4.5cqw;--cy0:5.6cqw;--k:1;--bx:72cqw;--by:44.2cqw}
.v-realty-mortgage[data-backdrop="on"]{background:radial-gradient(60% 80% at 88% 12%,color-mix(in srgb,var(--accent) 16%,transparent),transparent 60%),radial-gradient(55% 70% at 4% 100%,color-mix(in srgb,var(--secondary) 26%,transparent),transparent 60%),linear-gradient(160deg,color-mix(in srgb,var(--paper) 96%,var(--ink)),color-mix(in srgb,var(--paper) 90%,var(--ink)))}
.v-realty-mortgage .mg-card{position:absolute;left:var(--cx0);top:var(--cy0);width:50cqw;height:45cqw;border-radius:2cqw;background:var(--paper);box-shadow:0 2.2cqw 5cqw rgba(40,55,45,.13),0 .2cqw .5cqw rgba(40,55,45,.08),inset 0 0 0 1px var(--hair);transform-origin:0 0;scale:var(--k);animation:realty-mortgage-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-mortgage .mg-head{position:absolute;left:3cqw;right:3cqw;top:2.6cqw;display:flex;align-items:center;gap:1cqw;font-size:1.35cqw;font-weight:600}
.v-realty-mortgage .mg-mark{display:grid;place-items:center;width:2.8cqw;height:2.8cqw;border-radius:.7cqw;background:var(--accent);color:var(--paper)}
.v-realty-mortgage .mg-mark svg{width:1.8cqw;height:1.8cqw}
.v-realty-mortgage .mg-head em{margin-left:auto;font-style:normal;font-weight:500;font-size:1.05cqw;color:color-mix(in srgb,var(--accent) 70%,var(--ink));padding:.35cqw 1cqw;border-radius:2cqw;background:color-mix(in srgb,var(--secondary) 18%,transparent)}
.v-realty-mortgage .mg-row{position:absolute;left:3cqw;right:3cqw;display:flex;justify-content:space-between;align-items:baseline;font-size:1.25cqw;color:var(--muted)}
.v-realty-mortgage .mg-row b{position:relative;font-family:var(--font-display);font-size:1.75cqw;font-weight:700;color:var(--ink)}
.v-realty-mortgage .mg-swap{display:block;height:1.2em;min-width:15cqw;text-align:right}
.v-realty-mortgage .mg-swap span{position:absolute;right:0;top:0;white-space:nowrap}
.v-realty-mortgage .mg-o1{animation:realty-mortgage-old 6s ease-in-out infinite}
.v-realty-mortgage .mg-o2{animation:realty-mortgage-new 6s ease-in-out infinite}
.v-realty-mortgage .mg-track{position:absolute;left:3cqw;width:44cqw;height:.7cqw;border-radius:.35cqw;background:var(--hair)}
.v-realty-mortgage .mg-fill{position:absolute;inset:0;border-radius:.35cqw;background:linear-gradient(90deg,var(--secondary),var(--accent));transform-origin:0 50%}
.v-realty-mortgage .mg-thumb{position:absolute;left:0;top:50%;width:2.5cqw;height:2.5cqw;margin:-1.25cqw 0 0 -1.25cqw;box-sizing:border-box;border-radius:50%;background:var(--paper);border:.4cqw solid var(--accent);box-shadow:0 .4cqw 1cqw rgba(30,60,45,.3)}
.v-realty-mortgage .mg-drag .mg-fill{animation:realty-mortgage-fill 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-mortgage .mg-drag .mg-thumb{animation:realty-mortgage-thumb 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-mortgage .mg-seg{position:absolute;left:3cqw;top:33cqw;width:44cqw;height:3.6cqw;display:grid;grid-template-columns:repeat(3,1fr);padding:.35cqw;box-sizing:border-box;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 6%,transparent);font-size:1.2cqw;font-weight:500;color:var(--muted)}
.v-realty-mortgage .mg-seg span{display:grid;place-items:center;border-radius:.7cqw}
.v-realty-mortgage .mg-seg span:last-child{background:var(--paper);color:var(--ink);font-weight:600;box-shadow:0 .2cqw .6cqw rgba(30,40,35,.12)}
.v-realty-mortgage .mg-note{position:absolute;left:3cqw;top:39.8cqw;font-size:.95cqw;color:color-mix(in srgb,var(--ink) 48%,transparent)}
.v-realty-mortgage .mg-lab{position:absolute;left:60cqw;top:8.2cqw;display:flex;align-items:center;gap:.8cqw;font-size:1.4cqw;line-height:1.3;color:var(--muted);white-space:nowrap;--delay:.1s;animation:realty-mortgage-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-mortgage .mg-lab i{flex:none;width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .4cqw color-mix(in srgb,var(--accent) 15%,transparent)}
.v-realty-mortgage .mg-num{position:absolute;left:60cqw;top:10.6cqw;display:flex;align-items:flex-end;font-family:var(--font-display);font-weight:800;font-size:8.6cqw;line-height:1.25;letter-spacing:-.03em;color:var(--ink)}
.v-realty-mortgage .mg-digits{display:flex;height:1.25em;overflow:hidden;box-sizing:content-box;padding-block:.14em;margin-block:-.14em}
.v-realty-mortgage .mg-digits .c{position:relative;display:block;line-height:1.25;--delay:calc(var(--i) * .06s);animation:realty-mortgage-roll 6s cubic-bezier(.3,1.3,.5,1) infinite}
.v-realty-mortgage .mg-num small{margin:0 0 .26em .4em;font-family:var(--font-body);font-weight:500;font-size:.26em;line-height:1.2;letter-spacing:0;color:var(--muted)}
.v-realty-mortgage .mg-save{position:absolute;left:60cqw;top:21.8cqw;display:flex;align-items:center;gap:.7cqw;padding:.6cqw 1.3cqw .6cqw 1cqw;border-radius:2cqw;background:color-mix(in srgb,var(--secondary) 24%,transparent);color:color-mix(in srgb,var(--accent) 75%,var(--ink));font-size:1.25cqw;line-height:1.3;font-weight:600;white-space:nowrap;transform-origin:0 50%;animation:realty-mortgage-save 6s cubic-bezier(.3,1.5,.5,1) infinite}
.v-realty-mortgage .mg-save svg{flex:none;width:1.5cqw;height:1.5cqw}
.v-realty-mortgage .mg-kv{position:absolute;left:60cqw;top:27cqw;width:34cqw;margin:0;padding:0;list-style:none;--delay:.3s;animation:realty-mortgage-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-mortgage .mg-kv li{display:flex;justify-content:space-between;align-items:center;height:3.7cqw;border-bottom:1px solid var(--hair);font-size:1.25cqw;color:var(--muted)}
.v-realty-mortgage .mg-kv b{position:relative;font-weight:600;color:var(--ink)}
.v-realty-mortgage .mg-kv .mg-swap{min-width:10cqw}
.v-realty-mortgage .mg-cta{position:absolute;left:60cqw;top:41cqw;display:flex;align-items:center;gap:1.2cqw;padding:1.4cqw 2.4cqw;border-radius:1.2cqw;background:var(--accent);color:var(--paper);font-size:1.45cqw;line-height:1.3;font-weight:600;white-space:nowrap;overflow:hidden;box-shadow:0 1cqw 2.4cqw color-mix(in srgb,var(--accent) 30%,transparent);--delay:.4s;animation:realty-mortgage-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-mortgage .mg-cta::before{content:"";position:absolute;inset:0;background:color-mix(in srgb,var(--accent) 82%,#fff);animation:realty-mortgage-hover 6s ease-in-out infinite}
.v-realty-mortgage .mg-cta span,.v-realty-mortgage .mg-cta svg{position:relative}
.v-realty-mortgage .mg-cta svg{flex:none;width:1.7cqw;height:1.7cqw}
.v-realty-mortgage .mg-cursor{position:absolute;left:0;top:0;width:calc(2.8cqw * var(--k));height:calc(2.8cqw * var(--k));transform-origin:0 0;filter:drop-shadow(0 .3cqw .5cqw rgba(0,0,0,.25));animation:realty-mortgage-cur 6s cubic-bezier(.65,0,.35,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-realty-mortgage .mg-ui{--cx0:8cqw;--cy0:32cqh;--k:1.68;--bx:70cqw;--by:91cqh}
  .v-realty-mortgage .mg-lab{left:8cqw;top:6cqh;font-size:5.6cqw;gap:2.4cqw}
  .v-realty-mortgage .mg-lab i{width:2.4cqw;height:2.4cqw;box-shadow:0 0 0 1.2cqw color-mix(in srgb,var(--accent) 15%,transparent)}
  .v-realty-mortgage .mg-num{left:8cqw;top:9.4cqh;font-size:24cqw}
  .v-realty-mortgage .mg-save{left:8cqw;top:24.6cqh;font-size:5.4cqw;padding:1.6cqw 3.6cqw 1.6cqw 3cqw;gap:2cqw;border-radius:6cqw}
  .v-realty-mortgage .mg-save svg{width:5cqw;height:5cqw}
  .v-realty-mortgage .mg-kv{left:8cqw;top:74.4cqh;width:84cqw}
  .v-realty-mortgage .mg-kv li{height:3.6cqh;font-size:3.8cqw}
  .v-realty-mortgage .mg-kv li:nth-child(3){display:none}
  .v-realty-mortgage .mg-kv .mg-swap{min-width:30cqw}
  .v-realty-mortgage .mg-cta{left:8cqw;right:8cqw;top:84.6cqh;justify-content:space-between;font-size:5.6cqw;padding:3.4cqw 6cqw;border-radius:4cqw}
  .v-realty-mortgage .mg-cta svg{width:6cqw;height:6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-mortgage .mg-ui{--cx0:4cqw;--cy0:24cqw;--k:1.12;--bx:78cqw;--by:73cqw}
  .v-realty-mortgage .mg-lab{left:65cqw;top:25cqw;font-size:2cqw;gap:1.2cqw}
  .v-realty-mortgage .mg-lab i{width:1.2cqw;height:1.2cqw}
  .v-realty-mortgage .mg-num{left:65cqw;top:28.4cqw;font-size:8.4cqw}
  .v-realty-mortgage .mg-save{left:65cqw;top:41.6cqw;font-size:1.9cqw;padding:.9cqw 1.8cqw .9cqw 1.4cqw;gap:1cqw}
  .v-realty-mortgage .mg-save svg{width:2.2cqw;height:2.2cqw}
  .v-realty-mortgage .mg-kv{left:65cqw;top:48cqw;width:31cqw}
  .v-realty-mortgage .mg-kv li{height:5.2cqw;font-size:1.9cqw}
  .v-realty-mortgage .mg-kv .mg-swap{min-width:12cqw}
  .v-realty-mortgage .mg-cta{left:65cqw;top:67.6cqw;font-size:2.3cqw;padding:2cqw 3cqw;border-radius:1.6cqw;gap:1.6cqw}
  .v-realty-mortgage .mg-cta svg{width:2.6cqw;height:2.6cqw}
}
@keyframes realty-mortgage-thumb{0%,25%{transform:translateX(8.8cqw)}42%,89%{transform:translateX(17.6cqw)}98%,100%{transform:translateX(8.8cqw)}}
@keyframes realty-mortgage-fill{0%,25%{transform:scaleX(.2)}42%,89%{transform:scaleX(.4)}98%,100%{transform:scaleX(.2)}}
@keyframes realty-mortgage-roll{0%,10%{transform:translateY(110%);opacity:0}18%,25%{transform:translateY(0);opacity:1}30%{transform:translateY(-110%);opacity:0}31%{transform:translateY(110%);opacity:0}40%,89%{transform:translateY(0);opacity:1}98%,100%{transform:translateY(110%);opacity:0}}
@keyframes realty-mortgage-in{0%,2%{opacity:0;translate:0 3cqw}18%,100%{opacity:1;translate:0 0}}
@keyframes realty-mortgage-old{0%,28%{opacity:1;transform:translateY(0)}32%,93%{opacity:0;transform:translateY(-.8cqw)}97%,100%{opacity:1;transform:translateY(0)}}
@keyframes realty-mortgage-new{0%,32%{opacity:0;transform:translateY(.8cqw)}36%,89%{opacity:1;transform:translateY(0)}93%,100%{opacity:0;transform:translateY(.8cqw)}}
@keyframes realty-mortgage-save{0%,41%{opacity:0;transform:scale(.6)}47%,86%{opacity:1;transform:scale(1)}90%,100%{opacity:0;transform:scale(.6)}}
@keyframes realty-mortgage-hover{0%,53%{opacity:0}57%,80%{opacity:1}84%,100%{opacity:0}}
@keyframes realty-mortgage-cur{0%{transform:translate(calc(var(--cx0) + var(--k) * 12.9cqw),calc(var(--cy0) + var(--k) * 20.8cqw)) scale(1)}12%{transform:translate(calc(var(--cx0) + var(--k) * 13.3cqw),calc(var(--cy0) + var(--k) * 21.4cqw)) scale(1)}21%,25%{transform:translate(calc(var(--cx0) + var(--k) * 11.8cqw),calc(var(--cy0) + var(--k) * 19.15cqw)) scale(1)}23%,25%{transform:translate(calc(var(--cx0) + var(--k) * 11.8cqw),calc(var(--cy0) + var(--k) * 19.15cqw)) scale(.86)}42%{transform:translate(calc(var(--cx0) + var(--k) * 20.6cqw),calc(var(--cy0) + var(--k) * 19.15cqw)) scale(.86)}44%{transform:translate(calc(var(--cx0) + var(--k) * 20.6cqw),calc(var(--cy0) + var(--k) * 19.15cqw)) scale(1)}56%{transform:translate(var(--bx),var(--by)) scale(1)}80%,100%{transform:translate(calc(var(--bx) - .8cqw),calc(var(--by) + .6cqw)) scale(1)}}
`,
};

export const realtySkyline: SceneSpec = {
  id: "realty-skyline",
  slug: "mg-realty-skyline",
  name: "Skyline Sales Chart",
  kind: "scene",
  job: "data",
  language: "kinetic-poster",
  mechanic: "tower-bars-rise-counter",
  energy: "punchy",
  settle: 3.0,
  colors: {"ink": "#F4F1EA", "accent": "#FF5B1F", "secondary": "#FFCF86", "paper": "#121212"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["real-estate", "stats", "chart"],
  fields: [
    { key: "eye", label: "Kicker", default: "Halden in numbers", maxChars: 24, role: "kicker" },
    { key: "big", label: "Big number", default: "1,240", maxChars: 6, role: "value" },
    { key: "cap", label: "What it counts", default: "homes sold since 2019", maxChars: 28, role: "body" },
    { key: "trend", label: "Trend", default: "+23% this year", maxChars: 18, role: "label" },
  ],
  html: `<div class="sk-glow"></div>
<div class="sk-noise"></div>
<div class="sk-world"><div class="sk-chart">
  <div class="sk-ttl">Homes sold per year</div>
      <i class="sk-grid" style="top:12cqw"></i><i class="sk-grid" style="top:23.3cqw"></i><i class="sk-grid" style="top:34.6cqw"></i>
      <i class="sk-base"></i>
      <div class="sk-t sk-r1" style="left:49cqw;height:7.2cqw"><i class="sk-lit" style="left:1.8cqw;top:1.85cqw"></i></div>
      <div class="sk-t sk-r2" style="left:55.3cqw;height:11cqw"><i class="sk-lit" style="left:.5cqw;top:3.1cqw"></i><i class="sk-lit" style="left:3.1cqw;top:6.85cqw"></i></div>
      <div class="sk-t sk-r3" style="left:61.6cqw;height:17cqw"><i class="sk-lit" style="left:1.8cqw;top:1.85cqw"></i><i class="sk-lit" style="left:3.1cqw;top:9.35cqw"></i><i class="sk-lit" style="left:.5cqw;top:13.1cqw"></i></div>
      <div class="sk-t sk-r4" style="left:67.9cqw;height:19.8cqw;clip-path:polygon(0 7%, 100% 0, 100% 100%, 0 100%)"><i class="sk-lit" style="left:3.1cqw;top:4.35cqw"></i><i class="sk-lit" style="left:1.8cqw;top:10.6cqw"></i></div>
      <div class="sk-t sk-r5" style="left:74.2cqw;height:23cqw"><i class="sk-lit" style="left:.5cqw;top:3.1cqw"></i><i class="sk-lit" style="left:3.1cqw;top:8.1cqw"></i><i class="sk-lit" style="left:1.8cqw;top:15.6cqw"></i></div>
      <div class="sk-t sk-step sk-r6" style="left:80.5cqw;height:27.6cqw"><i class="sk-lit" style="left:1.8cqw;top:3.1cqw"></i><i class="sk-lit" style="left:.5cqw;top:11.85cqw"></i><i class="sk-lit" style="left:3.1cqw;top:20.6cqw"></i></div>
      <div class="sk-t sk-hot sk-r7" style="left:86.8cqw;height:34cqw"></div>
      <span class="sk-v" style="left:49cqw;top:36.4cqw">64</span>
      <span class="sk-v" style="left:55.3cqw;top:32.6cqw">98</span>
      <span class="sk-v" style="left:61.6cqw;top:26.6cqw">151</span>
      <span class="sk-v" style="left:67.9cqw;top:23.8cqw">176</span>
      <span class="sk-v" style="left:74.2cqw;top:20.6cqw">204</span>
      <span class="sk-v" style="left:80.5cqw;top:14.2cqw">245</span>
      <span class="sk-v sk-vhot" style="left:83cqw;top:7cqw;width:5.2cqw;text-align:right">302</span>
      <span class="sk-y" style="left:49cqw">2019</span><span class="sk-y" style="left:55.3cqw">2020</span><span class="sk-y" style="left:61.6cqw">2021</span><span class="sk-y" style="left:67.9cqw">2022</span><span class="sk-y" style="left:74.2cqw">2023</span><span class="sk-y" style="left:80.5cqw">2024</span><span class="sk-y sk-yhot" style="left:86.8cqw">2025</span>
</div></div>
<div class="sk-eye"><i></i><span data-21st-slot="eye">{{eye}}</span></div>
<div class="sk-big" data-21st-slot="big">{{big|chars}}</div>
<div class="sk-cap"><span data-21st-slot="cap">{{cap}}</span> <em data-21st-slot="trend">{{trend}}</em></div>
<div class="sk-hr"></div>
<div class="sk-stats">
        <div><b>18<small>days</small></b><span>average time on market</span></div>
        <div><b>102<small>%</small></b><span>of asking price, on average</span></div>
        <div><b>4.9<small>★</small></b><span>from 860 client reviews</span></div>
      </div>
<div class="sk-foot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg>halden.homes</div>`,
  css: `
.v-realty-skyline{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 58%,transparent);--tb:color-mix(in srgb,var(--paper) 86%,var(--ink));--tw:color-mix(in srgb,var(--paper) 72%,var(--ink))}
.v-realty-skyline[data-backdrop="on"]{background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 94%,var(--ink)),var(--paper))}
.v-realty-skyline .sk-glow{position:absolute;left:50cqw;top:26cqw;width:56cqw;height:44cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 20%,transparent),transparent);animation:realty-skyline-glow 6s ease-in-out infinite}
.v-realty-skyline .sk-noise{position:absolute;inset:0;opacity:.07;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>") 0 0/18cqw 18cqw}
.v-realty-skyline[data-backdrop="off"] .sk-glow,.v-realty-skyline[data-backdrop="off"] .sk-noise{display:none}
.v-realty-skyline .sk-world{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;container-type:size}
.v-realty-skyline .sk-chart{position:absolute;inset:0}
.v-realty-skyline .sk-ttl{position:absolute;left:49cqw;top:7.2cqw;font-family:var(--font-mono);font-size:1.05cqw;color:var(--muted);animation:realty-skyline-f1 6s ease-out infinite}
.v-realty-skyline .sk-grid{position:absolute;left:48cqw;width:47cqw;height:0;border-top:1px dashed color-mix(in srgb,var(--ink) 12%,transparent)}
.v-realty-skyline .sk-base{position:absolute;left:47cqw;top:46cqw;width:48cqw;height:1px;background:color-mix(in srgb,var(--ink) 22%,transparent)}
.v-realty-skyline .sk-t{position:absolute;bottom:10.25cqw;width:5.2cqw;transform-origin:50% 100%;background:linear-gradient(90deg,rgba(255,255,255,.06),rgba(0,0,0,.22)),repeating-linear-gradient(180deg,transparent 0 .62cqw,var(--tb) .62cqw 1.25cqw),repeating-linear-gradient(90deg,var(--tb) 0 .5cqw,var(--tw) .5cqw 1.1cqw,var(--tb) 1.1cqw 1.3cqw);background-position:0 0,0 .3cqw,.1cqw 0}
.v-realty-skyline .sk-t.sk-hot{background:linear-gradient(90deg,rgba(255,255,255,.12),rgba(0,0,0,.18)),repeating-linear-gradient(180deg,transparent 0 .62cqw,var(--accent) .62cqw 1.25cqw),repeating-linear-gradient(90deg,var(--accent) 0 .5cqw,color-mix(in srgb,var(--accent) 50%,#fff) .5cqw 1.1cqw,var(--accent) 1.1cqw 1.3cqw);background-position:0 0,0 .3cqw,.1cqw 0;box-shadow:0 0 4cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-realty-skyline .sk-t.sk-step::before{content:"";position:absolute;left:.9cqw;top:-1.8cqw;width:3.4cqw;height:1.8cqw;background:var(--tb)}
.v-realty-skyline .sk-t.sk-hot::before{content:"";position:absolute;left:50%;top:-4.4cqw;width:.25cqw;height:4.4cqw;margin-left:-.125cqw;background:var(--tw)}
.v-realty-skyline .sk-t.sk-hot::after{content:"";position:absolute;left:50%;top:-5cqw;width:.8cqw;height:.8cqw;margin-left:-.4cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 1.4cqw .3cqw color-mix(in srgb,var(--accent) 80%,transparent);animation:realty-skyline-blink 1s steps(1,end) infinite}
.v-realty-skyline .sk-lit{position:absolute;width:.6cqw;height:.63cqw;background:var(--secondary);box-shadow:0 0 .8cqw color-mix(in srgb,var(--secondary) 70%,transparent);animation:realty-skyline-tw 2s ease-in-out infinite}
.v-realty-skyline .sk-r1{animation:realty-skyline-r 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-r2{--delay:.18s;animation:realty-skyline-r 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-r3{--delay:.36s;animation:realty-skyline-r 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-r4{--delay:.54s;animation:realty-skyline-r 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-r5{--delay:.72s;animation:realty-skyline-r 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-r6{--delay:.9s;animation:realty-skyline-r 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-r7{--delay:1.08s;animation:realty-skyline-r7 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-lit{--delay:0s}
.v-realty-skyline .sk-v{position:absolute;width:5.2cqw;text-align:center;font-family:var(--font-mono);font-size:1.05cqw;color:var(--muted);animation:realty-skyline-val 6s ease-out infinite}
.v-realty-skyline .sk-v.sk-vhot{color:var(--accent);font-weight:700}
.v-realty-skyline .sk-y{position:absolute;top:47.2cqw;width:5.2cqw;text-align:center;font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-realty-skyline .sk-y.sk-yhot{color:var(--accent)}
.v-realty-skyline .sk-eye{position:absolute;left:6cqw;top:7cqw;display:flex;align-items:center;gap:1cqw;font-size:1.3cqw;line-height:1.3;color:var(--muted);white-space:nowrap;animation:realty-skyline-f1 6s ease-out infinite}
.v-realty-skyline .sk-eye i{flex:none;width:1cqw;height:1cqw;background:var(--accent)}
.v-realty-skyline .sk-big{position:absolute;left:5.6cqw;top:9.4cqw;display:flex;height:1.2em;overflow:hidden;box-sizing:content-box;padding-block:.14em;margin-block:-.14em;font-family:var(--font-display);font-weight:800;font-size:13cqw;line-height:1.2;letter-spacing:-.04em;color:var(--ink);white-space:nowrap}
.v-realty-skyline .sk-big .c{display:block;line-height:1.2;--delay:calc(var(--i) * .1s);animation:realty-skyline-roll 6s cubic-bezier(.3,1.2,.4,1) infinite}
.v-realty-skyline .sk-cap{position:absolute;left:6cqw;width:40cqw;top:25cqw;font-family:var(--font-display);font-weight:500;font-size:2.4cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 82%,transparent);animation:realty-skyline-f2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-cap em{font-style:normal;color:var(--accent);white-space:nowrap}
.v-realty-skyline .sk-hr{position:absolute;left:6cqw;top:31cqw;width:37cqw;height:1px;background:color-mix(in srgb,var(--ink) 16%,transparent);transform-origin:0 50%;animation:realty-skyline-hr 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-skyline .sk-stats{position:absolute;left:6cqw;top:33.4cqw;width:38cqw;display:grid;grid-template-columns:repeat(3,1fr);gap:1.6cqw}
.v-realty-skyline .sk-stats div{animation:realty-skyline-s 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-skyline .sk-stats div:nth-child(2){--delay:.18s}
.v-realty-skyline .sk-stats div:nth-child(3){--delay:.36s}
.v-realty-skyline .sk-stats b{display:flex;align-items:baseline;gap:.4cqw;font-family:var(--font-display);font-weight:700;font-size:3.8cqw;line-height:1.1;letter-spacing:-.02em}
.v-realty-skyline .sk-stats b small{font-size:1.5cqw;font-weight:600;color:var(--accent);letter-spacing:0}
.v-realty-skyline .sk-stats span{display:block;margin-top:.8cqw;font-size:1.08cqw;line-height:1.35;color:var(--muted)}
.v-realty-skyline .sk-foot{position:absolute;left:6cqw;top:49cqw;display:flex;align-items:center;gap:.7cqw;font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 45%,transparent);animation:realty-skyline-f1 6s ease-out infinite}
.v-realty-skyline .sk-foot svg{width:1.5cqw;height:1.5cqw}
@container (max-aspect-ratio: 4/5){
  .v-realty-skyline .sk-world{left:-69.55cqw;top:68cqw;width:165cqw;height:92.81cqw}
  .v-realty-skyline .sk-glow{left:10cqw;top:90cqw;width:90cqw;height:80cqw}
  .v-realty-skyline .sk-eye{left:8cqw;top:6cqh;font-size:5.4cqw;gap:2.4cqw}
  .v-realty-skyline .sk-eye i{width:3cqw;height:3cqw}
  .v-realty-skyline .sk-big{left:7cqw;top:9cqh;font-size:31cqw}
  .v-realty-skyline .sk-hr{left:8cqw;top:29cqh;width:84cqw}
  .v-realty-skyline .sk-stats{left:8cqw;top:30.4cqh;width:84cqw;gap:3cqw}
  .v-realty-skyline .sk-stats b{font-size:9cqw;gap:1cqw}
  .v-realty-skyline .sk-stats b small{font-size:3.6cqw}
  .v-realty-skyline .sk-stats span{font-size:3.2cqw;margin-top:1.4cqw}
  .v-realty-skyline .sk-cap{left:8cqw;width:84cqw;top:auto;bottom:6cqh;font-size:6cqw}
  .v-realty-skyline .sk-foot{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-skyline .sk-world{left:-12.9cqw;top:35.9cqw;width:112.5cqw;height:63.28cqw}
  .v-realty-skyline .sk-glow{left:40cqw;top:46cqw;width:60cqw;height:50cqw}
  .v-realty-skyline .sk-eye{left:6cqw;top:6cqw;font-size:2.2cqw;gap:1.4cqw}
  .v-realty-skyline .sk-eye i{width:1.4cqw;height:1.4cqw}
  .v-realty-skyline .sk-big{left:5.4cqw;top:9cqw;font-size:19cqw}
  .v-realty-skyline .sk-cap{left:56cqw;width:38cqw;top:15cqw;font-size:3.4cqw}
  .v-realty-skyline .sk-hr{left:6cqw;top:40cqw;width:28cqw}
  .v-realty-skyline .sk-stats{left:6cqw;top:43cqw;width:28cqw;grid-template-columns:1fr;gap:3.2cqw}
  .v-realty-skyline .sk-stats b{font-size:5.4cqw}
  .v-realty-skyline .sk-stats b small{font-size:2.2cqw}
  .v-realty-skyline .sk-stats span{font-size:1.9cqw;margin-top:.6cqw}
  .v-realty-skyline .sk-foot{top:auto;bottom:5cqw;font-size:1.9cqw;gap:1cqw}
  .v-realty-skyline .sk-foot svg{width:2.4cqw;height:2.4cqw}
}
@keyframes realty-skyline-glow{0%,100%{opacity:.55;transform:scale(.92)}50%{opacity:1;transform:scale(1.04)}}
@keyframes realty-skyline-f1{0%,3%{opacity:0}10%,95%{opacity:1}96%,100%{opacity:0}}
@keyframes realty-skyline-roll{0%,5%{transform:translateY(110%);opacity:0;filter:blur(.08em)}20%,95%{transform:translateY(0);opacity:1;filter:blur(0)}96%,100%{transform:translateY(110%);opacity:0}}
@keyframes realty-skyline-f2{0%,14%{opacity:0;transform:translateY(1cqw)}24%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(1cqw)}}
@keyframes realty-skyline-hr{0%,18%{transform:scaleX(0)}32%,95%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
@keyframes realty-skyline-s{0%,24%{opacity:0;transform:translateY(1.4cqw)}33%,95%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(1.4cqw)}}
@keyframes realty-skyline-r{0%,6%{transform:scaleY(0)}16%,86%{transform:scaleY(1)}93%,100%{transform:scaleY(0)}}
@keyframes realty-skyline-r7{0%,6%{transform:scaleY(0)}18%,86%{transform:scaleY(1)}93%,100%{transform:scaleY(0)}}
@keyframes realty-skyline-val{0%,34%{opacity:0;transform:translateY(.8cqw)}42%,86%{opacity:1;transform:translateY(0)}90%,100%{opacity:0;transform:translateY(.8cqw)}}
@keyframes realty-skyline-blink{0%{opacity:1}50%{opacity:.15}100%{opacity:1}}
@keyframes realty-skyline-tw{0%,100%{opacity:1}50%{opacity:.35}}
`,
};

export const realtyStaging: SceneSpec = {
  id: "realty-staging",
  slug: "mg-realty-staging",
  name: "Virtual Staging Wipe",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "empty-to-staged-wipe",
  energy: "default",
  settle: 2.9,
  colors: {"ink": "#1F1A16", "accent": "#6F8F6A", "secondary": "#D07A4F", "paper": "#F7F1E6"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["real-estate", "before-after", "staging"],
  fields: [
    { key: "title", label: "Headline", default: "Same room.", maxChars: 18, role: "headline" },
    { key: "emph", label: "Payoff", default: "Sold faster.", maxChars: 18, role: "headline" },
    { key: "card", label: "Proof line", default: "Staged by Halden in 48 h", maxChars: 30, role: "label" },
  ],
  html: `<div class="st-cam"><div class="st-world">
  <div class="st-layer">
        <svg class="st-room" viewBox="0 0 160 90" preserveAspectRatio="none">
          <defs>
            <linearGradient id="realty-staging-w0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4cec4"/><stop offset="1" stop-color="#c3bcb0"/></linearGradient>
            <linearGradient id="realty-staging-f0" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9c876b"/><stop offset="1" stop-color="#b39d80"/></linearGradient>
            <linearGradient id="realty-staging-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe2ef"/><stop offset="1" stop-color="#f4ead8"/></linearGradient>
          </defs>
          <rect width="160" height="61" fill="url(#realty-staging-w0)"/>
          <rect y="60" width="160" height="30" fill="url(#realty-staging-f0)"/>
          <g stroke="#8d7a60" stroke-width=".25" opacity=".6"><path d="M0 66h160M0 73h160M0 81h160"/><path d="M22 60v6M64 60v6M118 60v6M40 66v7M96 66v7M140 66v7M14 73v8M78 73v8M124 73v8M52 81v9M104 81v9"/></g>
          <rect y="59.2" width="160" height="1.6" fill="#b4ac9f"/>
          <rect x="18" y="11" width="32" height="36" fill="url(#realty-staging-sky)"/>
          <path d="M18 40 C26 34 34 37 50 33 V47 H18 Z" fill="#b8c9b0" opacity=".7"/>
          <rect x="18" y="11" width="32" height="36" fill="none" stroke="#f3f0ea" stroke-width="1.4"/>
          <path d="M34 11v36M18 29h32" stroke="#f3f0ea" stroke-width=".9"/>
          <rect x="16.5" y="46.5" width="35" height="1.8" fill="#ebe6dd"/>
          <path d="M18 61 L50 61 L70 90 L4 90 Z" fill="#fff8e8" opacity=".18"/>
          <path d="M100 0v14" stroke="#4a4038" stroke-width=".4"/>
          <circle cx="100" cy="15.6" r="1.5" fill="#fff6d6"/>
          <g transform="translate(118 64)"><path d="M0 18 L6 0 L12 18" fill="none" stroke="#8b7f70" stroke-width="1"/><path d="M2 12h8M3.6 7h4.8" stroke="#8b7f70" stroke-width=".8"/></g>
          <g transform="translate(92 76)"><path d="M0 0h9l-1 8H1Z" fill="#e8e3da"/><ellipse cx="4.5" cy="0" rx="4.5" ry="1.1" fill="#d9d3c8"/><path d="M1 2.6h7" stroke="#7aa0b8" stroke-width="1.2"/></g>
          <rect x="70" y="80" width="14" height="5" rx=".6" fill="#c9b58f" transform="rotate(-6 77 82)"/>
        </svg>
      </div>
      <div class="st-layer st-after">
        <svg class="st-room" viewBox="0 0 160 90" preserveAspectRatio="none">
          <defs>
            <linearGradient id="realty-staging-w1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efe5d4"/><stop offset="1" stop-color="#e2d4bd"/></linearGradient>
            <linearGradient id="realty-staging-f1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a77d55"/><stop offset="1" stop-color="#c39a6d"/></linearGradient>
            <linearGradient id="realty-staging-sofa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ba586"/><stop offset="1" stop-color="#6f8a6b"/></linearGradient>
            <radialGradient id="realty-staging-lamp"><stop offset="0" stop-color="#fff1c9" stop-opacity=".95"/><stop offset=".5" stop-color="#ffd68a" stop-opacity=".35"/><stop offset="1" stop-color="#ffd68a" stop-opacity="0"/></radialGradient>
            <linearGradient id="realty-staging-sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe2ef"/><stop offset="1" stop-color="#f7e6c8"/></linearGradient>
          </defs>
          <rect width="160" height="61" fill="url(#realty-staging-w1)"/>
          <rect y="60" width="160" height="30" fill="url(#realty-staging-f1)"/>
          <g stroke="#8f6844" stroke-width=".25" opacity=".55"><path d="M0 66h160M0 73h160M0 81h160"/><path d="M22 60v6M64 60v6M118 60v6M40 66v7M96 66v7M140 66v7M14 73v8M78 73v8M124 73v8M52 81v9M104 81v9"/></g>
          <rect y="59.2" width="160" height="1.6" fill="#f6efe3"/>
          <rect x="18" y="11" width="32" height="36" fill="url(#realty-staging-sky1)"/>
          <path d="M18 40 C26 34 34 37 50 33 V47 H18 Z" fill="#a9c39e" opacity=".75"/>
          <rect x="18" y="11" width="32" height="36" fill="none" stroke="#fbf8f2" stroke-width="1.4"/>
          <path d="M34 11v36M18 29h32" stroke="#fbf8f2" stroke-width=".9"/>
          <path d="M14 8 h40" stroke="#6d5a48" stroke-width=".6"/><path d="M15 8 C14 24 16 40 13 58 L19 58 C18 40 18 24 18 8 Z" fill="#e9dcc4"/><path d="M53 8 C54 24 52 40 55 58 L49 58 C50 40 50 24 50 8 Z" fill="#e9dcc4"/>
          <path d="M18 61 L50 61 L70 90 L4 90 Z" fill="#fff4d6" opacity=".22"/>
          <g transform="translate(77 17)"><rect width="26" height="19" fill="#fbf7ef" stroke="#3b3029" stroke-width="1"/><rect x="3" y="3" width="20" height="13" fill="#e7d6bd"/><circle cx="10" cy="9" r="4" fill="#d07a4f"/><path d="M3 16 C9 10 14 13 23 7 V16 Z" fill="#6f8a6b"/></g>
          <path d="M100 0v9" stroke="#3b3029" stroke-width=".4"/><path d="M94.5 13 a5.5 5 0 0 1 11 0 Z" fill="#2f3b33"/><ellipse cx="100" cy="13.3" rx="2.4" ry=".7" fill="#fff1c9"/>
          <ellipse cx="89" cy="77" rx="38" ry="7.5" fill="#efe3cf"/><ellipse cx="89" cy="77" rx="31" ry="5.6" fill="none" stroke="#d3bf9f" stroke-width=".6"/>
          <ellipse cx="89" cy="64.5" rx="30" ry="2" fill="#3a2a1f" opacity=".18"/>
          <rect x="65" y="43" width="48" height="14" rx="3" fill="url(#realty-staging-sofa)"/>
          <rect x="62" y="53" width="54" height="9" rx="2.5" fill="#94ad8f"/>
          <rect x="59" y="47" width="7" height="15" rx="2.6" fill="#728c6e"/><rect x="112" y="47" width="7" height="15" rx="2.6" fill="#728c6e"/>
          <path d="M64 62v2.6M114 62v2.6" stroke="#3b3029" stroke-width="1"/>
          <rect x="69" y="46" width="11" height="8.5" rx="2" fill="#efe0c6" transform="rotate(-8 74 50)"/>
          <rect x="98" y="46" width="11" height="8.5" rx="2" fill="#d08b62" transform="rotate(7 103 50)"/>
          <rect x="83" y="49" width="9" height="6" rx="1.6" fill="#e8d5b5"/>
          <ellipse cx="89" cy="72" rx="12" ry="2.3" fill="#3b2f27"/><path d="M80 72.5 l-1 5M98 72.5 l1 5M89 74 v4.5" stroke="#3b2f27" stroke-width=".9"/>
          <path d="M86.5 70.8 h3.4 l-.4 -3.2 h-2.6 Z" fill="#f2ede4"/><path d="M88 67.6 C87 64 89.5 63 88.4 60.6M88.6 67.6 C90 65 91.6 64.8 91 62.6" stroke="#6f8a6b" stroke-width=".5" fill="none"/>
          <rect x="93" y="70" width="5" height="1.2" fill="#c98f6a"/>
          <circle class="st-glow" cx="128" cy="32" r="13" fill="url(#realty-staging-lamp)"/>
          <path d="M128 33 V64 M124 64h8" stroke="#2f2620" stroke-width=".8"/>
          <path d="M123.5 26 h9 l2 8 h-13 Z" fill="#f6ead2" stroke="#d8c6a6" stroke-width=".3"/>
          <g transform="translate(143 52)"><path d="M-4 9 h8 l-1 9 h-6 Z" fill="#cf9d72"/><g fill="#5f7d58"><ellipse cx="-3" cy="3" rx="2" ry="6.5" transform="rotate(-25 -3 3)"/><ellipse cx="3" cy="2" rx="2" ry="7" transform="rotate(22 3 2)"/><ellipse cx="0" cy="0" rx="1.9" ry="8"/><ellipse cx="-5" cy="7" rx="1.6" ry="4.5" transform="rotate(-55 -5 7)"/><ellipse cx="5.5" cy="7" rx="1.6" ry="4.5" transform="rotate(55 5.5 7)"/></g></g>
          <g transform="translate(28 64)"><ellipse cx="6" cy="0" rx="7" ry="1.5" fill="#2f2620"/><path d="M6 0 v12 M2 12 h8" stroke="#2f2620" stroke-width=".8"/><rect x="2" y="-3.4" width="7" height="1.6" fill="#d07a4f"/><rect x="2.6" y="-5" width="6" height="1.6" fill="#6f8a6b"/></g>
        </svg>
      </div>
  <div class="st-div"><i></i><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg></b></div>
</div></div>
<div class="st-lb st-lb-b">Before</div>
<div class="st-lb st-lb-a"><i></i>After · virtually staged</div>
<div class="st-title"><span class="t1" data-21st-slot="title">{{title}}</span><em class="t2" data-21st-slot="emph">{{emph}}</em></div>
<div class="st-card"><span class="st-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/></svg></span><p><b data-21st-slot="card">{{card}}</b><span>3× more viewings · listed $18k higher</span></p></div>`,
  css: `
.v-realty-staging{color:var(--ink);font-family:var(--font-body)}
.v-realty-staging[data-backdrop="on"]{background:var(--paper)}
.v-realty-staging[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-realty-staging .st-cam{position:absolute;inset:0;--split:42%;--wl:0cqw;--ww:100cqw;transform-origin:58% 62%;animation:realty-staging-cam 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-staging .st-world{position:absolute;top:0;left:var(--wl);width:var(--ww);height:100cqh;container-type:size;overflow:hidden}
.v-realty-staging .st-layer{position:absolute;inset:0}
.v-realty-staging .st-room{position:absolute;inset:0;width:100%;height:100%;display:block}
.v-realty-staging .st-after{clip-path:inset(0 0 0 var(--split));animation:realty-staging-wipe 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-staging .st-glow{animation:realty-staging-glow 6s ease-in-out infinite;transform-origin:128px 32px}
.v-realty-staging .st-div{position:absolute;top:0;bottom:0;left:0;width:100%;animation:realty-staging-div 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-staging .st-div i{position:absolute;top:0;bottom:0;left:-.13cqw;width:.26cqw;background:#fff;box-shadow:0 0 1.2cqw rgba(0,0,0,.25)}
.v-realty-staging .st-div b{position:absolute;left:0;top:50%;width:var(--hs,5.2cqw);height:var(--hs,5.2cqw);translate:-50% -50%;border-radius:50%;background:#fff;color:#1f1a16;display:grid;place-items:center;box-shadow:0 .6cqw 1.8cqw rgba(30,20,10,.3),0 0 0 .5cqw rgba(255,255,255,.35)}
.v-realty-staging .st-div b svg{width:58%;height:58%}
.v-realty-staging .st-lb{position:absolute;top:3cqw;padding:.7cqw 1.5cqw;border-radius:9cqw;font-size:1.45cqw;line-height:1.3;font-weight:600;letter-spacing:.03em;display:flex;align-items:center;gap:.7cqw;white-space:nowrap}
.v-realty-staging .st-lb-b{left:3cqw;background:color-mix(in srgb,var(--paper) 72%,transparent);color:var(--ink);animation:realty-staging-lbb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-staging .st-lb-a{right:3cqw;background:var(--accent);color:var(--paper);box-shadow:0 .5cqw 1.6cqw rgba(30,20,10,.18);animation:realty-staging-lba 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-staging .st-lb-a i{width:.9cqw;height:.9cqw;border-radius:50%;background:var(--paper);box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--paper) 30%,transparent)}
.v-realty-staging .st-title{position:absolute;left:3cqw;bottom:3cqw;padding:1.4cqw 2.4cqw 1.6cqw;border-radius:1.4cqw;background:var(--paper);color:var(--ink);font-family:var(--font-display);font-size:4.2cqw;line-height:1.22;box-shadow:0 1.4cqw 3.6cqw rgba(40,25,10,.25);animation:realty-staging-title 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-staging .st-title span,.v-realty-staging .st-title em{display:block;line-height:1.22;white-space:nowrap}
.v-realty-staging .st-title em{font-style:italic;color:var(--accent)}
.v-realty-staging .st-card{position:absolute;right:3cqw;bottom:3cqw;display:flex;align-items:center;gap:1.3cqw;padding:1.4cqw 2cqw 1.4cqw 1.4cqw;border-radius:1.4cqw;background:var(--paper);color:var(--ink);box-shadow:0 1.4cqw 3.6cqw rgba(40,25,10,.28),0 .2cqw .5cqw rgba(40,25,10,.12);animation:realty-staging-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-staging .st-mark{flex:none;width:4cqw;height:4cqw;border-radius:1cqw;background:var(--accent);color:var(--paper);display:grid;place-items:center}
.v-realty-staging .st-mark svg{width:2.5cqw;height:2.5cqw}
.v-realty-staging .st-card p{margin:0;line-height:1.3;min-width:0}
.v-realty-staging .st-card b{display:block;font-size:1.6cqw;line-height:1.3;font-weight:700}
.v-realty-staging .st-card span{display:block;font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 62%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-realty-staging .st-cam{--split:50%;--wl:-108cqw;--ww:316cqw;--hs:5.2cqw}
  .v-realty-staging .st-title{left:7cqw;right:7cqw;top:5cqh;bottom:auto;padding:3cqw 5cqw 3.4cqw;border-radius:4cqw;font-size:12cqw}
  .v-realty-staging .st-title span,.v-realty-staging .st-title em{white-space:normal}
  .v-realty-staging .st-lb{top:30cqh;font-size:3.6cqw;padding:1.6cqw 3.4cqw;gap:1.6cqw}
  .v-realty-staging .st-lb-b{left:7cqw}
  .v-realty-staging .st-lb-a{right:7cqw}
  .v-realty-staging .st-lb-a i{width:2cqw;height:2cqw}
  .v-realty-staging .st-card{left:7cqw;right:7cqw;bottom:5cqh;gap:3.4cqw;padding:3.4cqw 4cqw;border-radius:4cqw}
  .v-realty-staging .st-mark{width:11cqw;height:11cqw;border-radius:3cqw}
  .v-realty-staging .st-mark svg{width:6.6cqw;height:6.6cqw}
  .v-realty-staging .st-card b{font-size:5.6cqw}
  .v-realty-staging .st-card span{font-size:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-staging .st-cam{--split:50%;--wl:-38.9cqw;--ww:177.8cqw;--hs:5.8cqw}
  .v-realty-staging .st-lb{top:5cqw;font-size:2.2cqw;padding:1cqw 2.2cqw;gap:1cqw}
  .v-realty-staging .st-lb-b{left:5cqw}
  .v-realty-staging .st-lb-a{right:5cqw}
  .v-realty-staging .st-lb-a i{width:1.3cqw;height:1.3cqw}
  .v-realty-staging .st-title{left:5cqw;bottom:5cqw;font-size:7cqw;padding:2cqw 3.4cqw 2.4cqw;border-radius:2.4cqw}
  .v-realty-staging .st-card{right:5cqw;bottom:5cqw;width:38cqw;box-sizing:border-box;gap:1.8cqw;padding:2cqw 2.4cqw;border-radius:2.4cqw}
  .v-realty-staging .st-mark{width:5.6cqw;height:5.6cqw;border-radius:1.4cqw}
  .v-realty-staging .st-mark svg{width:3.4cqw;height:3.4cqw}
  .v-realty-staging .st-card b{font-size:2.4cqw}
  .v-realty-staging .st-card span{font-size:1.9cqw}
}
@keyframes realty-staging-cam{0%{transform:scale(1.02)}50%{transform:scale(1.055)}100%{transform:scale(1.02)}}
@keyframes realty-staging-wipe{0%,12%{clip-path:inset(0 0 0 100%)}30%,60%{clip-path:inset(0 0 0 var(--split))}72%,84%{clip-path:inset(0 0 0 0%)}96%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes realty-staging-div{0%,6%{opacity:0;transform:translateX(100%)}12%{opacity:1;transform:translateX(100%)}30%,60%{opacity:1;transform:translateX(var(--split))}72%{opacity:1;transform:translateX(0)}76%,84%{opacity:0;transform:translateX(0)}86%{opacity:1;transform:translateX(0)}96%{opacity:1;transform:translateX(100%)}100%{opacity:0;transform:translateX(100%)}}
@keyframes realty-staging-glow{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:.9;transform:scale(1.06)}}
@keyframes realty-staging-lbb{0%,3%{opacity:0;transform:translateY(-1cqw)}10%,64%{opacity:1;transform:translateY(0)}70%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes realty-staging-lba{0%,22%{opacity:0;transform:translateY(-1cqw)}30%,88%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes realty-staging-title{0%,30%{opacity:0;transform:translateY(1.6cqw);filter:blur(.4cqw)}40%,86%{opacity:1;transform:translateY(0);filter:blur(0)}93%,100%{opacity:0;transform:translateY(1cqw);filter:blur(.3cqw)}}
@keyframes realty-staging-card{0%,33%{opacity:0;transform:translateY(2cqw) scale(.97)}42%,86%{opacity:1;transform:translateY(0) scale(1)}93%,100%{opacity:0;transform:translateY(1.4cqw) scale(.98)}}
`,
};

export const realtyAgent: SceneSpec = {
  id: "realty-agent",
  slug: "mg-realty-agent",
  name: "Meet Your Agent",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "portrait-push-name-card-wipe",
  energy: "calm",
  settle: 2.8,
  colors: {"ink": "#1D1714", "accent": "#C3552F", "secondary": "#E6B07C", "paper": "#FBF7F1"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["real-estate", "agent", "lower-third"],
  fields: [
    { key: "first", label: "First name", default: "Mara", maxChars: 14, role: "name" },
    { key: "last", label: "Last name", default: "Lindqvist", maxChars: 16, role: "name" },
    { key: "role", label: "Role", default: "Senior partner, Riverside & Old Town", maxChars: 40, role: "body" },
    { key: "cta", label: "Button", default: "Book a viewing", maxChars: 20, role: "cta" },
  ],
  html: `<div class="ag-foot">
      <div class="ag-bg"></div>
      <div class="ag-win"></div>
      <svg class="ag-plant" viewBox="0 0 40 64"><g fill="#3d4a30"><ellipse cx="14" cy="22" rx="5" ry="16" transform="rotate(-24 14 22)"/><ellipse cx="26" cy="20" rx="5" ry="17" transform="rotate(20 26 20)"/><ellipse cx="20" cy="16" rx="4.5" ry="16"/><ellipse cx="9" cy="36" rx="4" ry="11" transform="rotate(-55 9 36)"/></g><path d="M11 46h18l-2 18H13Z" fill="#5a3b2a"/></svg>
      <div class="ag-bk">
        <i style="left:44cqw;top:8cqw;width:7cqw;height:7cqw"></i>
        <i style="left:56cqw;top:4cqw;width:4cqw;height:4cqw"></i>
        <i style="left:38cqw;top:22cqw;width:3.4cqw;height:3.4cqw"></i>
        <i style="left:88cqw;top:10cqw;width:5.5cqw;height:5.5cqw"></i>
        <i style="left:3cqw;top:40cqw;width:4.6cqw;height:4.6cqw"></i>
        <i style="left:50cqw;top:30cqw;width:2.6cqw;height:2.6cqw"></i>
      </div>
      <div class="ag-subject">
        <svg viewBox="0 0 80 80">
          <defs>
            <linearGradient id="realty-agent-skin" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e2a982"/><stop offset=".55" stop-color="#a86a4c"/><stop offset="1" stop-color="#6b3f2e"/></linearGradient>
            <linearGradient id="realty-agent-coat" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5a4a40"/><stop offset=".4" stop-color="#2e2520"/><stop offset="1" stop-color="#1b1512"/></linearGradient>
            <linearGradient id="realty-agent-hair" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a4a2e"/><stop offset=".5" stop-color="#3b2318"/><stop offset="1" stop-color="#1e120d"/></linearGradient>
          </defs>
          <path d="M27 34 C24 16 36 12 42 12.5 C53 13 58 22 56 36 C55 46 57 54 60 60 L50 58 C51 48 51 40 49 33 Z" fill="url(#realty-agent-hair)"/>
          <path d="M34.5 44 h11 v10 q-5.5 4 -11 0 Z" fill="#8f5a40"/>
          <ellipse cx="40" cy="32" rx="10.5" ry="13" fill="url(#realty-agent-skin)"/>
          <path d="M29.5 31 C30 20 36 17 43 18 C49 19 52 24 51 28 C45 26 37 25 29.5 31 Z" fill="url(#realty-agent-hair)"/>
          <path d="M5 80 C6 65 15 57 29 54 L35 52 L40 60 L45 52 L51 54 C65 57 74 65 75 80 Z" fill="url(#realty-agent-coat)"/>
          <path d="M35 52 L40 60 L45 52 L42 51 L40 55 L38 51 Z" fill="#efe2d2"/>
          <path d="M29 54 L36 66 L33 80 M51 54 L44 66 L47 80" stroke="#0f0b09" stroke-width=".6" fill="none" opacity=".6"/>
          <path d="M6 80 C7 66 15 58 28.5 54.5" stroke="#ffcf9e" stroke-width=".9" fill="none" opacity=".75"/>
          <path d="M30 26 C29.6 30 29.8 36 31.5 40" stroke="#ffd8b0" stroke-width=".7" fill="none" opacity=".8"/>
        </svg>
      </div>
      <div class="ag-vig"></div>
    </div>
<div class="ag-grain"></div>
<div class="ag-bug"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg>Halden Estates<em>Meet your agent</em></div>
<div class="ag-card">
  <p class="ag-name"><span data-21st-slot="first">{{first}}</span> <em data-21st-slot="last">{{last}}</em></p>
  <p class="ag-role" data-21st-slot="role">{{role}}</p>
  <div class="ag-stats">
    <span><b>14 yrs</b>in the area</span>
    <span><b>310</b>homes sold</span>
    <span><b>4.9★</b>212 reviews</span>
  </div>
</div>
<div class="ag-call"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></i><b data-21st-slot="cta">{{cta}}</b><em>+1 555 014 2290</em></div>
<div class="ag-fade"></div>`,
  css: `
.v-realty-agent{color:var(--ink);font-family:var(--font-body)}
.v-realty-agent[data-backdrop="on"]{background:#2a1c16}
.v-realty-agent[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-realty-agent .ag-foot{position:absolute;inset:0;transform-origin:70% 45%;animation:realty-agent-push 6s linear infinite}
.v-realty-agent .ag-bg{position:absolute;inset:-4cqw;background:radial-gradient(60% 80% at 14% 30%,color-mix(in srgb,var(--secondary) 55%,#fff6e8) 0%,color-mix(in srgb,var(--secondary) 35%,transparent) 40%,transparent 70%),radial-gradient(50% 60% at 82% 70%,rgba(120,70,48,.6),transparent 70%),linear-gradient(100deg,var(--secondary) 0%,color-mix(in srgb,var(--secondary) 55%,#6a4130) 34%,#6a4130 64%,#2c1d17 100%)}
.v-realty-agent .ag-win{position:absolute;left:6cqw;top:3cqw;width:26cqw;height:34cqw;border-radius:.6cqw;background:repeating-linear-gradient(180deg,rgba(255,240,215,.9) 0 1.6cqw,rgba(255,226,186,.35) 1.6cqw 2.4cqw);filter:blur(.9cqw);opacity:.55}
.v-realty-agent .ag-plant{position:absolute;left:30cqw;bottom:6cqw;width:16cqw;height:26cqw;filter:blur(.7cqw);opacity:.7}
.v-realty-agent .ag-bk{position:absolute;inset:0;animation:realty-agent-drift 6s ease-in-out infinite}
.v-realty-agent .ag-bk i{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(255,226,180,.75),rgba(255,200,140,.15) 60%,transparent 72%);filter:blur(.25cqw);animation:realty-agent-twinkle 3s ease-in-out infinite}
.v-realty-agent .ag-subject{position:absolute;right:7cqw;bottom:0;width:46cqw;height:46cqw;transform-origin:50% 100%;animation:realty-agent-sway 6s ease-in-out infinite}
.v-realty-agent .ag-subject::before{content:"";position:absolute;left:2%;right:12%;top:12%;bottom:-6%;background:radial-gradient(42% 30% at 46% 34%,rgba(255,190,130,.22),transparent 72%),radial-gradient(52% 44% at 46% 96%,rgba(255,190,130,.2),transparent 70%)}
.v-realty-agent .ag-subject svg{width:100%;height:100%;display:block}
.v-realty-agent .ag-grain{position:absolute;inset:0;opacity:.16;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");background-size:14cqw 14cqw;animation:realty-agent-grain .6s steps(3) infinite}
.v-realty-agent .ag-vig{position:absolute;inset:0;background:radial-gradient(110% 100% at 55% 45%,transparent 55%,rgba(20,10,6,.55) 100%)}
.v-realty-agent .ag-fade{position:absolute;inset:0;background:#140c09;animation:realty-agent-fade 6s linear infinite}
.v-realty-agent .ag-bug{position:absolute;left:5cqw;top:4cqw;display:flex;align-items:center;gap:.9cqw;font-size:1.35cqw;line-height:1.3;font-weight:600;letter-spacing:.04em;color:rgba(255,248,238,.94);text-shadow:0 .2cqw 1cqw rgba(60,30,10,.4);white-space:nowrap;animation:realty-agent-bug 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-agent .ag-bug svg{width:2.2cqw;height:2.2cqw;flex:none}
.v-realty-agent .ag-bug em{font-style:normal;font-weight:400;opacity:.75;padding-left:.9cqw;border-left:1px solid rgba(255,248,238,.5)}
.v-realty-agent .ag-card{position:absolute;left:5cqw;bottom:10cqw;padding:1.8cqw 2.8cqw 1.9cqw 3.4cqw;border-radius:.8cqw;background:var(--paper);color:var(--ink);box-shadow:0 1.6cqw 4cqw rgba(30,14,6,.35);clip-path:inset(0 0 0 0);animation:realty-agent-card 6s cubic-bezier(.65,0,.35,1) infinite}
.v-realty-agent .ag-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:.7cqw;background:linear-gradient(var(--accent),color-mix(in srgb,var(--accent) 80%,#000))}
.v-realty-agent .ag-name{margin:0;font-family:var(--font-display);font-size:5.2cqw;line-height:1.22;letter-spacing:-.01em;white-space:nowrap;animation:realty-agent-up1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-agent .ag-name em{font-style:italic;color:var(--accent)}
.v-realty-agent .ag-role{margin:.4cqw 0 0;font-size:1.5cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 62%,transparent);animation:realty-agent-up2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-agent .ag-stats{display:flex;gap:2.4cqw;margin-top:1.5cqw;padding-top:1.3cqw;border-top:1px solid color-mix(in srgb,var(--ink) 14%,transparent);animation:realty-agent-up3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-agent .ag-stats span{font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 58%,transparent);line-height:1.2}
.v-realty-agent .ag-stats b{display:block;font-family:var(--font-display);font-size:2.3cqw;line-height:1.2;font-weight:700;color:var(--ink)}
.v-realty-agent .ag-call{position:absolute;left:5cqw;bottom:4cqw;display:flex;align-items:center;gap:1cqw;padding:.9cqw 1.8cqw .9cqw 1cqw;border-radius:9cqw;background:var(--accent);color:var(--paper);font-size:1.45cqw;line-height:1.3;white-space:nowrap;box-shadow:0 .8cqw 2.2cqw rgba(120,40,15,.4);animation:realty-agent-call 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-agent .ag-call b{font-weight:600}
.v-realty-agent .ag-call i{flex:none;width:2.6cqw;height:2.6cqw;border-radius:50%;background:color-mix(in srgb,var(--paper) 20%,transparent);display:grid;place-items:center}
.v-realty-agent .ag-call svg{width:1.5cqw;height:1.5cqw}
.v-realty-agent .ag-call em{font-style:normal;font-weight:400;opacity:.82}
@container (max-aspect-ratio: 4/5){
  .v-realty-agent .ag-subject{right:-10cqw;width:120cqw;height:120cqw}
  .v-realty-agent .ag-win{left:4cqw;top:30cqh;width:50cqw;height:60cqw}
  .v-realty-agent .ag-plant{left:2cqw;bottom:22cqh;width:30cqw;height:48cqw}
  .v-realty-agent .ag-bug{left:7cqw;top:4cqh;font-size:3.6cqw;gap:2.2cqw}
  .v-realty-agent .ag-bug svg{width:5.6cqw;height:5.6cqw}
  .v-realty-agent .ag-bug em{padding-left:2.2cqw}
  .v-realty-agent .ag-card{left:7cqw;right:7cqw;top:8.5cqh;bottom:auto;max-width:none;padding:4cqw 5cqw 4.4cqw 7cqw;border-radius:2.4cqw}
  .v-realty-agent .ag-card::before{width:2cqw}
  .v-realty-agent .ag-name{font-size:14cqw;white-space:normal}
  .v-realty-agent .ag-role{font-size:5.4cqw;margin-top:1cqw}
  .v-realty-agent .ag-stats{gap:5cqw;margin-top:3.4cqw;padding-top:3cqw}
  .v-realty-agent .ag-stats span{font-size:3.4cqw}
  .v-realty-agent .ag-stats b{font-size:6.4cqw}
  .v-realty-agent .ag-call{left:7cqw;right:7cqw;bottom:6cqh;gap:3cqw;padding:2.6cqw 5cqw 2.6cqw 2.6cqw;font-size:5.6cqw}
  .v-realty-agent .ag-call i{width:9cqw;height:9cqw}
  .v-realty-agent .ag-call svg{width:5cqw;height:5cqw}
  .v-realty-agent .ag-call em{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-agent .ag-subject{right:-8cqw;width:76cqw;height:76cqw}
  .v-realty-agent .ag-bug{left:6cqw;top:6cqw;font-size:2.2cqw;gap:1.4cqw}
  .v-realty-agent .ag-bug svg{width:3.4cqw;height:3.4cqw}
  .v-realty-agent .ag-card{left:6cqw;bottom:19cqw;max-width:62cqw;padding:2.6cqw 3.6cqw 2.8cqw 4.6cqw;border-radius:1.4cqw}
  .v-realty-agent .ag-card::before{width:1.1cqw}
  .v-realty-agent .ag-name{font-size:8.4cqw;white-space:normal}
  .v-realty-agent .ag-role{font-size:2.4cqw}
  .v-realty-agent .ag-stats{gap:3.4cqw;margin-top:2cqw;padding-top:1.8cqw}
  .v-realty-agent .ag-stats span{font-size:1.9cqw}
  .v-realty-agent .ag-stats b{font-size:3.6cqw}
  .v-realty-agent .ag-call{left:6cqw;bottom:6cqw;gap:1.6cqw;padding:1.4cqw 3cqw 1.4cqw 1.6cqw;font-size:2.4cqw}
  .v-realty-agent .ag-call i{width:4.4cqw;height:4.4cqw}
  .v-realty-agent .ag-call svg{width:2.4cqw;height:2.4cqw}
}
@keyframes realty-agent-push{0%{transform:scale(1.02)}100%{transform:scale(1.09)}}
@keyframes realty-agent-drift{0%,100%{transform:translateX(0)}50%{transform:translateX(-2cqw)}}
@keyframes realty-agent-twinkle{0%,100%{opacity:.55}50%{opacity:1}}
@keyframes realty-agent-sway{0%,100%{transform:translateY(0) rotate(0deg)}30%{transform:translateY(-.3cqw) rotate(-.6deg)}65%{transform:translateY(.1cqw) rotate(.4deg)}}
@keyframes realty-agent-grain{0%{background-position:0 0}100%{background-position:9cqw -6cqw}}
@keyframes realty-agent-fade{0%{opacity:1}7%,93%{opacity:0}100%{opacity:1}}
@keyframes realty-agent-bug{0%,6%{opacity:0;transform:translateY(-1cqw)}14%,88%{opacity:1;transform:translateY(0)}93%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes realty-agent-card{0%,10%{clip-path:inset(0 100% 0 0)}22%,84%{clip-path:inset(0 0 0 0)}93%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes realty-agent-up1{0%,14%{opacity:0;transform:translateY(2cqw)}26%,100%{opacity:1;transform:translateY(0)}}
@keyframes realty-agent-up2{0%,18%{opacity:0;transform:translateY(1.4cqw)}29%,100%{opacity:1;transform:translateY(0)}}
@keyframes realty-agent-up3{0%,23%{opacity:0;transform:translateY(1.4cqw)}34%,100%{opacity:1;transform:translateY(0)}}
@keyframes realty-agent-call{0%,34%{opacity:0;transform:translateY(1.6cqw) scale(.96)}44%,84%{opacity:1;transform:translateY(0) scale(1)}90%,100%{opacity:0;transform:translateY(1cqw) scale(.98)}}
`,
};

export const realtySold: SceneSpec = {
  id: "realty-sold",
  slug: "mg-realty-sold",
  name: "Just Sold Stamp",
  kind: "scene",
  job: "cta",
  language: "editorial",
  mechanic: "rubber-stamp-slam",
  energy: "punchy",
  settle: 3.1,
  colors: {"ink": "#1C1A17", "accent": "#C33A2F", "secondary": "#2F3B33", "paper": "#F4EEE3"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["real-estate", "sold", "announcement"],
  fields: [
    { key: "title", label: "Headline", default: "Just sold.", maxChars: 16, role: "headline" },
    { key: "stamp", label: "Stamp", default: "SOLD", maxChars: 6, role: "label" },
    { key: "addr", label: "Address", default: "14 Larkspur Lane, Old Town", maxChars: 32, role: "body" },
    { key: "cta", label: "Call to action", default: "Free valuation", maxChars: 22, role: "cta" },
  ],
  html: `<div class="sd-paper"></div>
<div class="sd-head"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M9.5 21v-5.5a2.5 2.5 0 0 1 5 0V21"/><path d="M3 21h18"/></svg>Halden Estates</span><small>No. 0412</small></div>
<p class="sd-title" data-21st-slot="title">{{title|words}}</p>
<div class="sd-card">
      <div class="sd-photo">
        <svg viewBox="0 0 172 112" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="realty-sold-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9db9d2"/><stop offset=".55" stop-color="#f3c9a3"/><stop offset="1" stop-color="#f7dcb6"/></linearGradient>
            <radialGradient id="realty-sold-sun"><stop offset="0" stop-color="#fff6e0"/><stop offset=".35" stop-color="#ffe2b0" stop-opacity=".8"/><stop offset="1" stop-color="#ffd59a" stop-opacity="0"/></radialGradient>
            <linearGradient id="realty-sold-lawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#93a774"/><stop offset="1" stop-color="#6f8656"/></linearGradient>
          </defs>
          <rect width="172" height="112" fill="url(#realty-sold-sky)"/>
          <circle cx="140" cy="50" r="26" fill="url(#realty-sold-sun)"/>
          <circle cx="140" cy="50" r="7" fill="#fff4dc"/>
          <path d="M0 74 C30 62 60 70 90 64 C120 58 146 66 172 60 V96 H0 Z" fill="#b9c3a2"/>
          <rect y="86" width="172" height="26" fill="url(#realty-sold-lawn)"/>
          <rect x="104" y="27" width="7" height="16" fill="#5b4a40"/>
          <rect x="122" y="62" width="32" height="26" fill="#e3d7c3"/><rect x="119" y="58" width="38" height="5" rx="1" fill="#4a3b33"/>
          <rect x="127" y="68" width="22" height="20" fill="#cfc2ac"/><path d="M127 73h22M127 78h22M127 83h22" stroke="#bcae96" stroke-width=".6"/>
          <rect x="46" y="50" width="76" height="38" fill="#f0e7d7"/>
          <path d="M84 50 L122 50 L122 88 L84 88 Z" fill="#e2d6c2" opacity=".55"/>
          <polygon points="40,52 84,22 128,52" fill="#4a3b33"/><polygon points="84,22 128,52 122,52 84,26" fill="#3a2e28"/>
          <circle cx="84" cy="40" r="4.2" fill="#ffd38a"/><circle cx="84" cy="40" r="4.2" fill="none" stroke="#f7efe2" stroke-width="1"/>
          <g fill="#ffd38a" stroke="#f7efe2" stroke-width="1"><rect x="54" y="58" width="14" height="12"/><rect x="100" y="58" width="14" height="12"/><rect x="54" y="74" width="14" height="10"/><rect x="100" y="74" width="14" height="10"/></g>
          <path d="M61 58v12M54 64h14M107 58v12M100 64h14" stroke="#f7efe2" stroke-width=".7"/>
          <rect x="78" y="66" width="12" height="22" rx="1" fill="#6b4a37"/><circle cx="87.5" cy="78" r=".8" fill="#e8c27a"/>
          <rect x="76" y="64" width="16" height="2" fill="#4a3b33"/>
          <path d="M84 88 L76 112 H96 Z" fill="#dccdb2"/>
          <g fill="#5f7a4c"><ellipse cx="50" cy="88" rx="8" ry="3.4"/><ellipse cx="116" cy="88" rx="8" ry="3.4"/></g>
          <rect x="18" y="62" width="3" height="28" fill="#5a4030"/>
          <g fill="#6c8554"><circle cx="20" cy="56" r="11"/><circle cx="12" cy="64" r="8"/><circle cx="28" cy="63" r="8.5"/></g>
          <g fill="#7f9963" opacity=".9"><circle cx="17" cy="52" r="6"/><circle cx="24" cy="58" r="5"/></g>
          <rect x="34" y="84" width="1.6" height="18" fill="#3b2e26"/><rect x="34" y="84" width="14" height="1.4" fill="#3b2e26"/>
          <rect x="37" y="86" width="12" height="8" rx=".8" fill="#fbf7ef" stroke="#3b2e26" stroke-width=".5"/>
          <g class="sd-fs"><text x="43" y="90.6" text-anchor="middle" font-size="2.6" font-weight="700" fill="#2f3b33">For sale</text><text x="43" y="93" text-anchor="middle" font-size="1.6" fill="#7d705f">Halden</text></g>
          <g class="sd-sd"><rect x="37" y="86" width="12" height="8" rx=".8" fill="#c33a2f"/><text x="43" y="91.6" text-anchor="middle" font-size="3.2" font-weight="800" fill="#fff">Sold</text></g>
        </svg>
      </div>
    </div>
<div class="sd-ring"></div>
<div class="sd-stamp"><b data-21st-slot="stamp">{{stamp}}</b><small>14 Oct 2026</small></div>
<div class="sd-info">
<p class="sd-addr" data-21st-slot="addr">{{addr}}</p>
<p class="sd-spec">4 bed · 3 bath · 2,480 sq ft</p>
<div class="sd-stats">
      <div><b>9<small> days</small></b><span>on the market</span></div>
      <div><b>104<small>%</small></b><span>of asking price</span></div>
      <div><b>6</b><span>competing offers</span></div>
    </div>
</div>
<div class="sd-foot"><span>Thinking of selling? <b data-21st-slot="cta">{{cta}}</b></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>`,
  css: `
.v-realty-sold{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 58%,transparent);--hair:color-mix(in srgb,var(--ink) 18%,transparent)}
.v-realty-sold[data-backdrop="on"]{background:radial-gradient(90% 60% at 50% 35%,color-mix(in srgb,var(--paper) 70%,#fff) 0%,var(--paper) 70%,color-mix(in srgb,var(--paper) 94%,var(--ink)) 100%)}
.v-realty-sold .sd-paper{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,color-mix(in srgb,var(--ink) 4%,transparent) 0 1px,transparent 1px 1.1cqw)}
.v-realty-sold[data-backdrop="off"] .sd-paper{display:none}
.v-realty-sold .sd-head{position:absolute;left:56cqw;right:5cqw;top:5cqw;display:flex;align-items:center;justify-content:space-between;font-size:1.4cqw;line-height:1.3;font-weight:600;white-space:nowrap;animation:realty-sold-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-head span{display:flex;align-items:center;gap:.8cqw}
.v-realty-sold .sd-head svg{width:2.2cqw;height:2.2cqw;color:var(--secondary)}
.v-realty-sold .sd-head small{font-family:var(--font-mono);font-size:1.15cqw;font-weight:500;color:var(--muted)}
.v-realty-sold .sd-title{position:absolute;left:56cqw;right:4cqw;top:8.4cqw;margin:0;font-family:var(--font-display);font-size:7.6cqw;line-height:1.25;letter-spacing:-.02em;animation:realty-sold-title 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-title .w{line-height:1.25}
.v-realty-sold .sd-title .w:last-child{font-style:italic;color:var(--accent)}
.v-realty-sold .sd-card{position:absolute;left:5cqw;top:8cqw;width:47cqw;height:40cqw;padding:1cqw;box-sizing:border-box;background:color-mix(in srgb,var(--paper) 45%,#fff);border-radius:.8cqw;box-shadow:0 2.4cqw 5cqw rgba(70,50,25,.2),0 .3cqw .8cqw rgba(70,50,25,.12);transform:rotate(-1.5deg);animation:realty-sold-card 6s linear infinite}
.v-realty-sold .sd-photo{position:relative;width:100%;height:100%;overflow:hidden;border-radius:.4cqw}
.v-realty-sold .sd-photo svg{position:absolute;inset:0;width:100%;height:100%;display:block;transform-origin:55% 60%;animation:realty-sold-drift 6s linear infinite;font-family:var(--font-body)}
.v-realty-sold .sd-fs{animation:realty-sold-fs 6s linear infinite}
.v-realty-sold .sd-sd{animation:realty-sold-sd 6s linear infinite}
.v-realty-sold .sd-stamp{position:absolute;left:30cqw;top:33cqw;padding:.8cqw 1.8cqw 1cqw;border:.5cqw solid var(--accent);border-radius:.9cqw;box-shadow:inset 0 0 0 .3cqw color-mix(in srgb,var(--paper) 30%,transparent),inset 0 0 0 .5cqw var(--accent);color:var(--accent);text-align:center;background:color-mix(in srgb,var(--paper) 55%,transparent);animation:realty-sold-stamp 6s linear infinite}
.v-realty-sold .sd-stamp b{display:block;font-family:var(--font-body);font-size:6cqw;font-weight:800;line-height:1.15;letter-spacing:.06em;white-space:nowrap}
.v-realty-sold .sd-stamp small{display:block;margin-top:.2cqw;font-family:var(--font-mono);font-size:1.15cqw;font-weight:700;letter-spacing:.12em}
.v-realty-sold .sd-ring{position:absolute;left:28cqw;top:33.5cqw;width:20cqw;height:10cqw;border-radius:50%;border:.35cqw solid color-mix(in srgb,var(--accent) 50%,transparent);animation:realty-sold-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-info{position:absolute;left:56cqw;right:5cqw;top:19.4cqw}
.v-realty-sold .sd-addr{margin:0;font-family:var(--font-display);font-size:2.9cqw;line-height:1.25;animation:realty-sold-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-spec{margin:.5cqw 0 0;font-family:var(--font-mono);font-size:1.2cqw;color:var(--muted);animation:realty-sold-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-stats{margin-top:2cqw;display:grid;grid-template-columns:1fr 1fr 1fr;border-top:1px solid var(--hair);padding-top:1.6cqw}
.v-realty-sold .sd-stats div{padding-left:1.4cqw;border-left:1px solid var(--hair);--delay:.24s;animation:realty-sold-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-stats div:first-child{padding-left:0;border-left:0}
.v-realty-sold .sd-stats div:nth-child(2){--delay:.42s}
.v-realty-sold .sd-stats div:nth-child(3){--delay:.6s}
.v-realty-sold .sd-stats b{display:block;font-family:var(--font-body);font-size:3.2cqw;font-weight:700;line-height:1.15;color:var(--ink)}
.v-realty-sold .sd-stats b small{font-size:.55em;font-weight:500}
.v-realty-sold .sd-stats span{font-size:1.15cqw;color:var(--muted)}
.v-realty-sold .sd-foot{position:absolute;left:56cqw;right:5cqw;top:42cqw;display:flex;align-items:center;justify-content:space-between;gap:1cqw;padding:1.2cqw 1.8cqw 1.2cqw 2.2cqw;border-radius:9cqw;background:var(--secondary);color:color-mix(in srgb,var(--paper) 80%,transparent);font-size:1.4cqw;line-height:1.3;white-space:nowrap;animation:realty-sold-foot 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-realty-sold .sd-foot b{font-weight:600;color:var(--paper)}
.v-realty-sold .sd-foot svg{flex:none;width:1.9cqw;height:1.9cqw;color:var(--paper)}
@container (max-aspect-ratio: 4/5){
  .v-realty-sold .sd-head{left:7cqw;right:7cqw;top:5cqh;font-size:3.8cqw}
  .v-realty-sold .sd-head span{gap:2cqw}
  .v-realty-sold .sd-head svg{width:6cqw;height:6cqw}
  .v-realty-sold .sd-head small{font-size:3.2cqw}
  .v-realty-sold .sd-title{left:7cqw;right:7cqw;top:9cqh;font-size:18cqw}
  .v-realty-sold .sd-card{left:7cqw;top:23cqh;width:86cqw;height:54cqw;padding:1.8cqw;border-radius:1.4cqw}
  .v-realty-sold .sd-stamp{left:auto;right:8cqw;top:40.5cqh;padding:1.6cqw 3.4cqw 1.8cqw;border-width:.9cqw;border-radius:1.6cqw;box-shadow:inset 0 0 0 .5cqw color-mix(in srgb,var(--paper) 30%,transparent),inset 0 0 0 .9cqw var(--accent)}
  .v-realty-sold .sd-stamp b{font-size:12cqw}
  .v-realty-sold .sd-stamp small{font-size:2.6cqw;margin-top:.6cqw}
  .v-realty-sold .sd-ring{left:auto;right:12cqw;top:41.5cqh;width:36cqw;height:18cqw;border-width:.6cqw}
  .v-realty-sold .sd-info{left:7cqw;right:7cqw;top:56.5cqh}
  .v-realty-sold .sd-addr{font-size:7.4cqw}
  .v-realty-sold .sd-spec{font-size:3.4cqw;margin-top:1.2cqw}
  .v-realty-sold .sd-stats{margin-top:3.4cqw;padding-top:3cqw}
  .v-realty-sold .sd-stats div{padding-left:3cqw}
  .v-realty-sold .sd-stats b{font-size:7.4cqw}
  .v-realty-sold .sd-stats span{font-size:3.2cqw}
  .v-realty-sold .sd-foot{left:7cqw;right:7cqw;top:auto;bottom:5cqh;padding:3cqw 4cqw 3cqw 5cqw;font-size:5.4cqw;white-space:normal}
  .v-realty-sold .sd-foot span{display:flex;flex-direction:column}
  .v-realty-sold .sd-foot b{font-size:6cqw}
  .v-realty-sold .sd-foot svg{width:7cqw;height:7cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-realty-sold .sd-head{left:6cqw;right:6cqw;top:5cqw;font-size:2.2cqw}
  .v-realty-sold .sd-head span{gap:1.2cqw}
  .v-realty-sold .sd-head svg{width:3.4cqw;height:3.4cqw}
  .v-realty-sold .sd-head small{font-size:1.9cqw}
  .v-realty-sold .sd-title{left:6cqw;right:6cqw;top:8.6cqw;font-size:11cqw}
  .v-realty-sold .sd-card{left:6cqw;top:24cqw;width:88cqw;height:40cqw;padding:1.4cqw}
  .v-realty-sold .sd-stamp{left:auto;right:9cqw;top:47cqw;padding:1.2cqw 2.6cqw 1.4cqw;border-width:.7cqw;box-shadow:inset 0 0 0 .4cqw color-mix(in srgb,var(--paper) 30%,transparent),inset 0 0 0 .7cqw var(--accent)}
  .v-realty-sold .sd-stamp b{font-size:8.4cqw}
  .v-realty-sold .sd-stamp small{font-size:1.9cqw}
  .v-realty-sold .sd-ring{left:auto;right:12cqw;top:48cqw;width:28cqw;height:14cqw}
  .v-realty-sold .sd-info{left:6cqw;right:6cqw;top:66.5cqw}
  .v-realty-sold .sd-addr{font-size:4.4cqw}
  .v-realty-sold .sd-spec{display:none}
  .v-realty-sold .sd-stats{margin-top:1.6cqw;padding-top:1.8cqw}
  .v-realty-sold .sd-stats div{padding-left:2cqw}
  .v-realty-sold .sd-stats b{font-size:4.4cqw}
  .v-realty-sold .sd-stats span{font-size:1.9cqw}
  .v-realty-sold .sd-foot{left:6cqw;right:6cqw;top:auto;bottom:5cqw;padding:1.8cqw 2.4cqw 1.8cqw 3cqw;font-size:2.4cqw}
  .v-realty-sold .sd-foot svg{width:3cqw;height:3cqw}
}
@keyframes realty-sold-fade{0%,2%{opacity:0}10%,90%{opacity:1}97%,100%{opacity:0}}
@keyframes realty-sold-title{0%,4%{opacity:0;transform:translateY(3cqw);clip-path:inset(0 0 100% 0)}16%,88%{opacity:1;transform:translateY(0);clip-path:inset(-10% -5% -10% -5%)}95%,100%{opacity:0;transform:translateY(-1.5cqw);clip-path:inset(-10% -5% -10% -5%)}}
@keyframes realty-sold-card{0%{opacity:0;transform:translateY(5cqw) rotate(-1.5deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}14%{opacity:1;transform:translateY(0) rotate(-1.5deg)}27.5%{transform:translateY(0) rotate(-1.5deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}28.5%{transform:translateY(.7cqw) rotate(-1.1deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}32%{opacity:1;transform:translateY(0) rotate(-1.5deg)}90%{opacity:1;transform:translateY(0) rotate(-1.5deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}98%,100%{opacity:0;transform:translateY(-3cqw) rotate(-1.5deg)}}
@keyframes realty-sold-drift{0%{transform:scale(1)}100%{transform:scale(1.07)}}
@keyframes realty-sold-fs{0%,28%{opacity:1}28.5%,100%{opacity:0}}
@keyframes realty-sold-sd{0%,28%{opacity:0}28.5%,100%{opacity:1}}
@keyframes realty-sold-stamp{0%,20%{opacity:0;transform:scale(2.4) rotate(-5deg);animation-timing-function:cubic-bezier(.7,0,.9,.5)}28%{opacity:1;transform:scale(.94) rotate(-12deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}32%{transform:scale(1.02) rotate(-12deg)}35%,90%{opacity:1;transform:scale(1) rotate(-12deg)}97%,100%{opacity:0;transform:scale(1) rotate(-12deg)}}
@keyframes realty-sold-ring{0%,27.5%{opacity:0;transform:rotate(-12deg) scale(.7)}28.5%{opacity:.8;transform:rotate(-12deg) scale(.85)}40%,100%{opacity:0;transform:rotate(-12deg) scale(1.35)}}
@keyframes realty-sold-up{0%,30%{opacity:0;transform:translateY(2cqw)}40%,88%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes realty-sold-foot{0%,40%{opacity:0;transform:translateY(2.4cqw)}50%,88%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(1.4cqw)}}
`,
};

export const REALTY_SCENES: SceneSpec[] = [realtyBlueprint, realtyReels, realtyListing, realtyMap, realtyTour, realtyMortgage, realtySkyline, realtyStaging, realtyAgent, realtySold];
