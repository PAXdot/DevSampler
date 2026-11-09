// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const LOMA_MARK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M3 20.5h18" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="16" r="2.2" fill="currentColor"/></svg>`;

const SHOP_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const shopTurntable: SceneSpec = {
  id: "shop-turntable",
  slug: "mg-shop-turntable",
  name: "Product Turntable Callouts",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "turntable-spin-callouts",
  energy: "calm",
  settle: 3.6,
  colors: { ink: "#F4EDE6", accent: "#FF7A4D", secondary: "#FFD9C4", paper: "#1C1816" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["product", "turntable", "specs"],
  fields: [
    { key: "name", label: "Product line", default: "Built to drift.", maxChars: 22, role: "headline" },
    { key: "kicker", label: "Kicker", default: "drift runner / 02", maxChars: 24, role: "kicker" },
    { key: "price", label: "Price line", default: "$128 · ember knit · free returns", maxChars: 36, role: "caption" },
    { key: "brand", label: "Brand", default: "loma", maxChars: 14, role: "label" },
  ],
  html: `<div class="spot"></div>
<div class="brand">${LOMA_MARK}<span data-21st-slot="brand">{{brand}}</span></div>
<div class="title">
  <div class="kick" data-21st-slot="kicker">{{kicker}}</div>
  <div class="name" data-21st-slot="name">{{name}}</div>
  <div class="price" data-21st-slot="price">{{price}}</div>
</div>
<div class="rig">
  <div class="floor"></div>
  <div class="deck"><div class="rim"></div><div class="top"><div class="disc"></div></div><div class="gloss"></div></div>
  <div class="cshadow"></div>
  <div class="shoe"><div class="shoe-in">
    <svg viewBox="0 0 400 200" aria-hidden="true">
      <defs>
        <linearGradient id="shop-turntable-up" x1="0" y1="0" x2="0" y2="1"><stop class="u0" offset="0"/><stop class="u1" offset=".55"/><stop class="u2" offset="1"/></linearGradient>
        <linearGradient id="shop-turntable-sole" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffaf3"/><stop offset="1" stop-color="#d9cfc2"/></linearGradient>
        <pattern id="shop-turntable-knit" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(32)"><rect width="7" height="3" fill="#fff" opacity=".09"/></pattern>
        <linearGradient id="shop-turntable-sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
        <clipPath id="shop-turntable-clip"><path d="M42 132C36 104 38 76 50 58C58 48 74 47 88 55C100 62 114 65 124 57L142 40C148 34 160 35 165 44C186 80 236 99 298 106C346 111 378 119 386 138L386 142L42 142Z"/><path d="M30 126L386 134C396 138 396 156 378 160L60 166C40 166 30 152 30 126Z"/></clipPath>
      </defs>
      <path d="M44 160L378 156C390 158 386 170 372 172L64 174C50 174 44 168 44 160Z" fill="#2a221d"/>
      <path d="M42 132C36 104 38 76 50 58C58 48 74 47 88 55C100 62 114 65 124 57L142 40C148 34 160 35 165 44C186 80 236 99 298 106C346 111 378 119 386 138L386 142L42 142Z" fill="url(#shop-turntable-up)"/>
      <path d="M42 132C36 104 38 76 50 58C58 48 74 47 88 55C100 62 114 65 124 57L142 40C148 34 160 35 165 44C186 80 236 99 298 106C346 111 378 119 386 138L386 142L42 142Z" fill="url(#shop-turntable-knit)"/>
      <path class="dk" d="M42 132C36 104 38 76 50 58C55 52 62 50 70 50C64 74 64 104 76 134Z" opacity=".55"/>
      <path class="md" d="M316 108C348 112 378 120 386 138L386 142L322 142C312 130 310 118 316 108Z" opacity=".65"/>
      <path class="cl" d="M54 62C62 54 76 54 88 61C100 68 114 70 124 61L127 64C116 76 100 74 88 67C76 60 64 60 56 66Z"/>
      <path d="M46 74C42 62 45 50 54 46L59 56C53 59 51 66 53 74Z" fill="#2a221d"/>
      <g class="ey"><circle cx="160" cy="68" r="3.2"/><circle cx="177" cy="80" r="3.2"/><circle cx="196" cy="91" r="3.2"/><circle cx="215" cy="100" r="3.2"/></g>
      <g fill="none" stroke="#fff3e6" stroke-width="5" stroke-linecap="round"><path d="M158 64L172 52"/><path d="M174 76L189 64"/><path d="M192 87L206 76"/><path d="M211 96L225 86"/></g>
      <path d="M197 121A18 18 0 0 1 233 121" fill="none" stroke="#fff3e6" stroke-width="6" stroke-linecap="round"/>
      <circle cx="215" cy="121" r="3.6" fill="#fff3e6"/>
      <path d="M50 126L380 133" stroke="#fff" stroke-opacity=".38" stroke-width="1.6" stroke-dasharray="5 5"/>
      <path d="M30 126L386 134C396 138 396 156 378 160L60 166C40 166 30 152 30 126Z" fill="url(#shop-turntable-sole)"/>
      <path d="M44 150C150 147 260 148 380 150" fill="none" stroke="#000" stroke-opacity=".09" stroke-width="2"/>
      <g clip-path="url(#shop-turntable-clip)"><g transform="skewX(-20)"><rect class="sheen" x="-90" y="0" width="90" height="200" fill="url(#shop-turntable-sh)"/></g></g>
    </svg>
  </div></div>
  <div class="co co-a"><i class="ln"></i><i class="dot"></i><div class="lab"><b>68%</b><span>recycled knit upper</span></div></div>
  <div class="co co-b"><i class="ln"></i><i class="dot"></i><div class="lab"><b>22 mm</b><span>cloudfoam midsole</span></div></div>
  <div class="co co-c"><i class="ln"></i><i class="dot"></i><div class="lab"><b>212 g</b><span>per shoe, us 9</span></div></div>
</div>
<div class="foot foot-l"><i class="s1"></i><i class="s2"></i><i class="s3"></i>3 colorways</div>
<div class="foot foot-r">360° view</div>`,
  css: `
.v-shop-turntable{color:var(--ink);font-family:var(--font-body)}
.v-shop-turntable[data-backdrop="on"]{background:radial-gradient(120% 95% at 50% 28%,color-mix(in srgb,var(--paper) 84%,var(--ink)) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper) 72%,#000) 100%)}
.v-shop-turntable .spot{position:absolute;left:20cqw;top:-6cqw;width:60cqw;height:58cqw;background:radial-gradient(60% 75% at 50% 0%,color-mix(in srgb,var(--secondary) 26%,transparent),transparent 72%);clip-path:polygon(36% 0,64% 0,100% 100%,0 100%);filter:blur(1.2cqw);animation:shop-turntable-spot 6s ease-in-out infinite}
.v-shop-turntable .brand{position:absolute;left:4cqw;top:3.6cqw;display:flex;align-items:center;gap:.7cqw;font:700 2.3cqw/1.2 var(--font-display);letter-spacing:-.03em}
.v-shop-turntable .brand svg{width:2.3cqw;height:2.3cqw;color:var(--accent);flex:none}
.v-shop-turntable .title{position:absolute;left:4cqw;top:9.6cqw;max-width:40cqw;animation:shop-turntable-title 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-turntable .kick{font:500 1.35cqw/1.2 var(--font-mono);color:var(--accent);letter-spacing:.04em}
.v-shop-turntable .name{margin-top:.9cqw;font:600 4.6cqw/1.2 var(--font-display);letter-spacing:-.035em}
.v-shop-turntable .price{margin-top:.9cqw;font-size:1.6cqw;line-height:1.25;color:color-mix(in srgb,var(--ink) 70%,transparent)}
.v-shop-turntable .rig{position:absolute;left:0;top:0;width:100em;height:56.25em;font-size:1cqw}
.v-shop-turntable .floor{position:absolute;left:12em;top:44em;width:76em;height:10em;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.55),rgba(0,0,0,0));animation:shop-turntable-deck 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-turntable .deck{position:absolute;left:23em;top:38em;width:54em;height:12em;animation:shop-turntable-deck 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-turntable .rim{position:absolute;left:0;top:1.7em;width:100%;height:100%;border-radius:50%;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 78%,var(--ink)) 0%,color-mix(in srgb,var(--paper) 80%,#000) 45%,color-mix(in srgb,var(--paper) 45%,#000) 100%);box-shadow:inset 0 -.4em .8em color-mix(in srgb,var(--accent) 14%,transparent)}
.v-shop-turntable .top{position:absolute;left:0;top:50%;width:54em;height:54em;margin-top:-27em;border-radius:50%;overflow:hidden;transform:scaleY(.2222)}
.v-shop-turntable .disc{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 50% 4.2%,var(--accent) 0 1.3%,transparent 1.6%),radial-gradient(circle at 50% 95.8%,var(--secondary) 0 1.1%,transparent 1.4%),radial-gradient(circle,transparent 0 29.6%,color-mix(in srgb,var(--ink) 8%,transparent) 30% 30.8%,transparent 31.2% 61.5%,color-mix(in srgb,var(--accent) 24%,transparent) 62% 63%,transparent 63.4%),repeating-conic-gradient(color-mix(in srgb,var(--paper) 88%,var(--ink)) 0 7.5deg,color-mix(in srgb,var(--paper) 93%,var(--ink)) 7.5deg 15deg);animation:shop-turntable-spin 6s linear infinite}
.v-shop-turntable .gloss{position:absolute;inset:0;border-radius:50%;background:radial-gradient(60% 80% at 50% 25%,color-mix(in srgb,var(--secondary) 18%,transparent),transparent 70%);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent)}
.v-shop-turntable .cshadow{position:absolute;left:31em;top:41.9em;width:38em;height:3.4em;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.7),rgba(0,0,0,0));animation:shop-turntable-shadow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-turntable .shoe{position:absolute;left:29em;top:25.5em;width:42em;height:21em;animation:shop-turntable-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-turntable .shoe-in{width:100%;height:100%;animation:shop-turntable-sway 6s ease-in-out infinite}
.v-shop-turntable .shoe svg{display:block;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 .8em 1.2em rgba(0,0,0,.4))}
.v-shop-turntable .u0{stop-color:color-mix(in srgb,var(--accent) 72%,#fff)}
.v-shop-turntable .u1{stop-color:var(--accent)}
.v-shop-turntable .u2{stop-color:color-mix(in srgb,var(--accent) 72%,#000)}
.v-shop-turntable .dk{fill:color-mix(in srgb,var(--accent) 62%,#000)}
.v-shop-turntable .md{fill:color-mix(in srgb,var(--accent) 80%,#000)}
.v-shop-turntable .cl{fill:color-mix(in srgb,var(--accent) 24%,#000)}
.v-shop-turntable .ey{fill:color-mix(in srgb,var(--accent) 42%,#000)}
.v-shop-turntable .sheen{transform-box:fill-box;animation:shop-turntable-sheen 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-turntable .co{position:absolute}
.v-shop-turntable .co-a{left:44em;top:25.5em;width:52.5em;height:8.5em;animation:shop-turntable-ca 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-turntable .co-b{left:57.5em;top:34.3em;width:39em;height:8.5em;animation:shop-turntable-cb 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-turntable .co-c{left:3.5em;top:29.5em;width:35em;height:8.5em;animation:shop-turntable-cc 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-turntable .dot{position:absolute;width:1.2em;height:1.2em;margin:-.6em 0 0 -.6em;border-radius:50%;background:#fff;box-shadow:0 0 0 .35em color-mix(in srgb,var(--accent) 35%,transparent),0 0 1.4em var(--accent)}
.v-shop-turntable .dot::after{content:"";position:absolute;inset:-.3em;border-radius:50%;border:1px solid var(--accent);animation:shop-turntable-pulse 2s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-turntable .ln{position:absolute;height:1px;background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 75%,transparent),color-mix(in srgb,var(--ink) 35%,transparent))}
.v-shop-turntable .co-c .ln{background:linear-gradient(270deg,color-mix(in srgb,var(--ink) 75%,transparent),color-mix(in srgb,var(--ink) 35%,transparent))}
.v-shop-turntable .lab{position:absolute;white-space:nowrap}
.v-shop-turntable .lab b{display:block;font:600 2.4em/1.15 var(--font-mono);color:var(--accent);letter-spacing:-.02em}
.v-shop-turntable .lab span{display:block;margin-top:.4em;font-size:1.45em;line-height:1.2;color:color-mix(in srgb,var(--ink) 72%,transparent)}
.v-shop-turntable .co-a .dot{left:3em;top:6.5em}
.v-shop-turntable .co-a .ln{left:3.8em;top:6.5em;width:48.7em}
.v-shop-turntable .co-a .lab{left:34.5em;top:.4em}
.v-shop-turntable .co-b .dot{left:3em;top:6.5em}
.v-shop-turntable .co-b .ln{left:3.8em;top:6.5em;width:35.2em}
.v-shop-turntable .co-b .lab{left:21em;top:.4em}
.v-shop-turntable .co-c .dot{left:31.8em;top:6.5em}
.v-shop-turntable .co-c .ln{left:.5em;top:6.5em;width:30.5em}
.v-shop-turntable .co-c .lab{left:.5em;top:.4em}
.v-shop-turntable .foot{position:absolute;bottom:3cqw;display:flex;align-items:center;gap:.8cqw;font-size:1.4cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 58%,transparent);animation:shop-turntable-foot 6s ease-out infinite}
.v-shop-turntable .foot-l{left:4cqw}
.v-shop-turntable .foot-r{right:4cqw;font-family:var(--font-mono);font-size:1.3cqw}
.v-shop-turntable .foot i{width:1.3cqw;height:1.3cqw;border-radius:50%;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 25%,transparent)}
.v-shop-turntable .foot .s1{background:var(--accent)}
.v-shop-turntable .foot .s2{background:var(--secondary)}
.v-shop-turntable .foot .s3{background:var(--ink)}
@container (max-aspect-ratio: 4/5){
  .v-shop-turntable .spot{left:0;width:100cqw;top:-4cqh;height:70cqh}
  .v-shop-turntable .brand{left:8cqw;top:6cqh;font-size:6.4cqw;gap:2cqw}
  .v-shop-turntable .brand svg{width:6.4cqw;height:6.4cqw}
  .v-shop-turntable .title{left:8cqw;right:8cqw;top:13cqh;bottom:8cqh;max-width:none;display:flex;flex-direction:column}
  .v-shop-turntable .kick{font-size:5.4cqw}
  .v-shop-turntable .name{margin-top:1.6cqh;font-size:14cqw;line-height:1.2}
  .v-shop-turntable .price{margin-top:auto;font-size:5.6cqw;line-height:1.3}
  .v-shop-turntable .rig{font-size:1.55cqw;left:-27.5cqw;top:calc(57cqh - 68.2cqw)}
  .v-shop-turntable .floor{left:18em;width:64em}
  .v-shop-turntable .co{top:57em;width:19em;height:9em}
  .v-shop-turntable .co-c{left:23em}
  .v-shop-turntable .co-b{left:41.5em}
  .v-shop-turntable .co-a{left:60em}
  .v-shop-turntable .co .ln{display:none}
  .v-shop-turntable .co .dot{left:.7em;top:.7em}
  .v-shop-turntable .co .lab{left:0;top:2em}
  .v-shop-turntable .lab b{font-size:2.8em}
  .v-shop-turntable .lab span{font-size:1.6em}
  .v-shop-turntable .foot-l{left:8cqw;bottom:auto;top:78cqh;font-size:3.6cqw;gap:2cqw}
  .v-shop-turntable .foot i{width:3.6cqw;height:3.6cqw}
  .v-shop-turntable .foot-r{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-turntable .spot{left:10cqw;width:80cqw;height:80cqh}
  .v-shop-turntable .brand{left:7cqw;top:6cqw;font-size:3.6cqw;gap:1.2cqw}
  .v-shop-turntable .brand svg{width:3.6cqw;height:3.6cqw}
  .v-shop-turntable .title{left:7cqw;top:13cqw;max-width:86cqw}
  .v-shop-turntable .kick{font-size:2.3cqw}
  .v-shop-turntable .name{font-size:7cqw}
  .v-shop-turntable .price{font-size:2.6cqw}
  .v-shop-turntable .rig{font-size:1.15cqw;left:-7.5cqw;top:4cqw}
  .v-shop-turntable .co{top:56.5em;width:24em;height:9em}
  .v-shop-turntable .co-c{left:12em}
  .v-shop-turntable .co-b{left:38em}
  .v-shop-turntable .co-a{left:64em}
  .v-shop-turntable .co .ln{display:none}
  .v-shop-turntable .co .dot{left:.7em;top:.7em}
  .v-shop-turntable .co .lab{left:0;top:2em}
  .v-shop-turntable .lab b{font-size:2.6em}
  .v-shop-turntable .lab span{font-size:1.6em}
  .v-shop-turntable .foot{bottom:6cqw;font-size:2.2cqw;gap:1.2cqw}
  .v-shop-turntable .foot-l{left:7cqw}
  .v-shop-turntable .foot-r{right:7cqw;font-size:2cqw}
  .v-shop-turntable .foot i{width:2.2cqw;height:2.2cqw}
}
@keyframes shop-turntable-spot{0%,100%{opacity:.75}50%{opacity:1}}
@keyframes shop-turntable-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes shop-turntable-deck{0%{opacity:0;transform:translateY(1.5em)}10%{opacity:1;transform:translateY(0)}88%{opacity:1;transform:translateY(0)}98%,100%{opacity:0;transform:translateY(1.5em)}}
@keyframes shop-turntable-in{0%,4%{opacity:0;transform:translateY(-5em);filter:blur(.8em)}18%{opacity:1;transform:translateY(0);filter:blur(0)}86%{opacity:1;transform:translateY(0);filter:blur(0)}96%,100%{opacity:0;transform:translateY(-5em);filter:blur(.8em)}}
@keyframes shop-turntable-sway{0%,100%{transform:perspective(90em) rotateY(-11deg) translateY(0)}50%{transform:perspective(90em) rotateY(11deg) translateY(-.7em)}}
@keyframes shop-turntable-shadow{0%,4%{opacity:0;transform:scaleX(.6)}18%{opacity:1;transform:scaleX(1)}50%{opacity:.8;transform:scaleX(.93)}86%{opacity:1;transform:scaleX(1)}96%,100%{opacity:0;transform:scaleX(.6)}}
@keyframes shop-turntable-sheen{0%,30%{transform:translateX(0)}56%,100%{transform:translateX(620%)}}
@keyframes shop-turntable-title{0%,6%{opacity:0;transform:translateY(1.6cqw)}20%{opacity:1;transform:translateY(0)}84%{opacity:1;transform:translateY(0)}92%,100%{opacity:0;transform:translateY(-1.2cqw)}}
@keyframes shop-turntable-ca{0%,18%{clip-path:inset(0 100% 0 0);opacity:1}28%{clip-path:inset(0 0 0 0);opacity:1}84%{clip-path:inset(0 0 0 0);opacity:1}90%{clip-path:inset(0 0 0 0);opacity:0}100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes shop-turntable-cb{0%,26%{clip-path:inset(0 100% 0 0);opacity:1}36%{clip-path:inset(0 0 0 0);opacity:1}84%{clip-path:inset(0 0 0 0);opacity:1}90%{clip-path:inset(0 0 0 0);opacity:0}100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes shop-turntable-cc{0%,32%{clip-path:inset(0 0 0 100%);opacity:1}42%{clip-path:inset(0 0 0 0);opacity:1}84%{clip-path:inset(0 0 0 0);opacity:1}90%{clip-path:inset(0 0 0 0);opacity:0}100%{clip-path:inset(0 0 0 100%);opacity:0}}
@keyframes shop-turntable-pulse{0%{transform:scale(.7);opacity:.95}100%{transform:scale(2.3);opacity:0}}
@keyframes shop-turntable-foot{0%,12%{opacity:0}26%,84%{opacity:1}92%,100%{opacity:0}}
`,
};

export const shopPriceSlash: SceneSpec = {
  id: "shop-price-slash",
  slug: "mg-shop-price-slash",
  name: "Price Tag Slash",
  kind: "scene",
  job: "cta",
  language: "editorial",
  mechanic: "tag-swing-price-strike",
  energy: "default",
  settle: 3.3,
  colors: { ink: "#1C1814", accent: "#E0391C", secondary: "#D2AE7C", paper: "#EFE6D7" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["sale", "price", "discount"],
  fields: [
    { key: "newPrice", label: "New price", default: "$179", maxChars: 6, role: "value" },
    { key: "oldPrice", label: "Old price", default: "$249", maxChars: 6, role: "value" },
    { key: "badge", label: "Badge", default: "-28%", maxChars: 5, role: "label" },
    { key: "caption", label: "Caption", default: "only 120 pairs at this price", maxChars: 32, role: "caption" },
  ],
  html: `<div class="grain"></div>
<div class="mark">${LOMA_MARK}</div>
<div class="floor"></div>
<div class="hp">
  <svg viewBox="0 0 200 200" aria-hidden="true">
    <defs>
      <linearGradient id="shop-price-slash-band" x1="0" y1="0" x2="0" y2="1"><stop class="b0" offset="0"/><stop class="b1" offset="1"/></linearGradient>
      <linearGradient id="shop-price-slash-cup" x1="0" y1="0" x2="1" y2="1"><stop class="b0" offset="0"/><stop class="b1" offset="1"/></linearGradient>
      <linearGradient id="shop-price-slash-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8d8a85"/><stop offset=".5" stop-color="#ebe7e0"/><stop offset="1" stop-color="#77736d"/></linearGradient>
    </defs>
    <path d="M38 120C34 34 166 34 162 120" fill="none" stroke="url(#shop-price-slash-band)" stroke-width="13" stroke-linecap="round"/>
    <path class="pad" d="M53 96C61 56 139 56 147 96" fill="none" stroke-width="8" stroke-linecap="round"/>
    <rect x="32" y="98" width="12" height="30" rx="4" fill="url(#shop-price-slash-metal)"/>
    <rect x="156" y="98" width="12" height="30" rx="4" fill="url(#shop-price-slash-metal)"/>
    <rect class="arm" x="46" y="122" width="15" height="52" rx="7.5"/>
    <rect class="arm" x="139" y="122" width="15" height="52" rx="7.5"/>
    <rect x="18" y="116" width="36" height="64" rx="18" fill="url(#shop-price-slash-cup)"/>
    <rect x="146" y="116" width="36" height="64" rx="18" fill="url(#shop-price-slash-cup)"/>
    <rect x="23" y="126" width="4.5" height="42" rx="2.25" fill="#fff" opacity=".16"/>
    <rect x="151" y="126" width="4.5" height="42" rx="2.25" fill="#fff" opacity=".16"/>
    <path class="pad" d="M29 152a7 7 0 0 1 14 0" fill="none" stroke-width="2.6" stroke-linecap="round"/>
    <path class="pad" d="M157 152a7 7 0 0 1 14 0" fill="none" stroke-width="2.6" stroke-linecap="round"/>
  </svg>
</div>
<div class="tag">
  <svg viewBox="0 0 420 300" aria-hidden="true">
    <defs><linearGradient id="shop-price-slash-kraft" x1="0" y1="0" x2="1" y2="1"><stop class="k0" offset="0"/><stop class="k1" offset="1"/></linearGradient></defs>
    <path d="M62 0H402Q420 0 420 18V282Q420 300 402 300H62L8 168Q0 150 8 132Z" fill="url(#shop-price-slash-kraft)"/>
    <path d="M70 12H398Q408 12 408 22V278Q408 288 398 288H70L22 160Q18 150 22 140Z" fill="none" stroke="#7a5530" stroke-opacity=".28" stroke-width="2" stroke-dasharray="6 6"/>
    <circle class="k2" cx="50" cy="150" r="16"/>
    <circle cx="50" cy="150" r="10" fill="#f4ede2"/>
  </svg>
  <div class="tk">over-ear · limited run</div>
  <div class="old"><span data-21st-slot="oldPrice">{{oldPrice}}</span><svg viewBox="0 0 190 64" aria-hidden="true"><path d="M6 44C50 34 110 22 184 12" fill="none" stroke-width="9" stroke-linecap="round"/><path d="M14 52C60 42 120 30 178 22" fill="none" stroke-width="3" stroke-linecap="round" opacity=".55"/></svg></div>
  <div class="new" data-21st-slot="newPrice">{{newPrice}}</div>
  <div class="tf"><span>price drop</span><span>ends sunday 11:59 pm</span></div>
</div>
<svg class="string s-w" viewBox="0 0 100 56.25" preserveAspectRatio="none" aria-hidden="true"><path d="M35.5 24C42 31.5 50 32.5 56 28"/></svg>
<svg class="string s-t" viewBox="0 0 100 177.78" preserveAspectRatio="none" aria-hidden="true"><path d="M36 48C14 56 10 95 18 116"/></svg>
<svg class="string s-s" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M36 41.8C42 50 48 52 52.6 48.8"/></svg>
<div class="badge">
  <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 0L57.6 6.7L67.1 3L72 11.9L82.1 11.7L83.7 21.7L93.3 25L91.3 35L99.2 41.3L94 50L99.2 58.7L91.3 65L93.3 75L83.7 78.3L82.1 88.3L72 88.1L67.1 97L57.6 93.3L50 100L42.4 93.3L32.9 97L28 88.1L17.9 88.3L16.3 78.3L6.7 75L8.7 65L.8 58.7L6 50L.8 41.3L8.7 35L6.7 25L16.3 21.7L17.9 11.7L28 11.9L32.9 3L42.4 6.7Z"/><circle cx="50" cy="50" r="38" fill="none" stroke="#fff4e8" stroke-opacity=".45" stroke-width="1.2" stroke-dasharray="3 3"/></svg>
  <b><span class="bv" data-21st-slot="badge">{{badge}}</span><span class="bs">this week</span></b>
</div>
<div class="cap" data-21st-slot="caption">{{caption}}</div>`,
  css: `
.v-shop-price-slash{color:var(--ink);font-family:var(--font-body)}
.v-shop-price-slash[data-backdrop="on"]{background:radial-gradient(90% 120% at 28% 60%,color-mix(in srgb,var(--paper) 80%,#fff) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper) 90%,var(--ink)) 100%)}
.v-shop-price-slash .grain{position:absolute;inset:0;background-image:${SHOP_GRAIN};background-size:28cqw;opacity:.28;mix-blend-mode:multiply}
.v-shop-price-slash[data-backdrop="off"] .grain{display:none}
.v-shop-price-slash .mark{position:absolute;left:4cqw;top:3.8cqw;width:2.6cqw;height:2.6cqw;color:var(--accent)}
.v-shop-price-slash .mark svg{display:block;width:100%;height:100%}
.v-shop-price-slash .floor{position:absolute;left:10cqw;top:44.6cqw;width:32cqw;height:3.4cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--ink) 30%,transparent),transparent);animation:shop-price-slash-floor 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-price-slash .hp{position:absolute;left:7cqw;top:9cqw;width:38cqw;height:38cqw;animation:shop-price-slash-hp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-price-slash .hp svg{display:block;width:100%;height:100%;filter:drop-shadow(0 1.2cqw 1.4cqw rgba(50,32,16,.28))}
.v-shop-price-slash .b0{stop-color:color-mix(in srgb,var(--ink) 80%,var(--paper))}
.v-shop-price-slash .b1{stop-color:color-mix(in srgb,var(--ink) 92%,#000)}
.v-shop-price-slash .pad{stroke:var(--secondary)}
.v-shop-price-slash .arm{fill:color-mix(in srgb,var(--secondary) 82%,#000)}
.v-shop-price-slash .string{position:absolute;inset:0;width:100%;height:100%;overflow:visible;animation:shop-price-slash-string 6s ease-out infinite}
.v-shop-price-slash .string path{fill:none;stroke:color-mix(in srgb,var(--secondary) 55%,#000);stroke-width:.25;stroke-linecap:round}
.v-shop-price-slash .s-t,.v-shop-price-slash .s-s{display:none}
.v-shop-price-slash .tag{position:absolute;left:51cqw;top:13cqw;width:42em;height:30em;font-size:1cqw;--u:1cqw;color:#1c1814;transform-origin:5em 15em;animation:shop-price-slash-swing 6s ease-in-out infinite}
.v-shop-price-slash .tag::before{content:"";position:absolute;left:5.6em;top:.4em;right:.2em;bottom:.2em;border-radius:1.8em;box-shadow:0 1em 1.4em rgba(70,46,22,.3)}
.v-shop-price-slash .tag>svg{position:absolute;left:0;top:0;width:100%;height:100%}
.v-shop-price-slash .k0{stop-color:color-mix(in srgb,var(--secondary) 45%,#f8f1e6)}
.v-shop-price-slash .k1{stop-color:color-mix(in srgb,var(--secondary) 70%,#f2e6d4)}
.v-shop-price-slash .k2{fill:color-mix(in srgb,var(--secondary) 80%,#6b4a26)}
.v-shop-price-slash .tk{position:absolute;left:calc(var(--u)*11.5);top:calc(var(--u)*3);font-size:calc(var(--u)*1.45);line-height:1.2;font-weight:500;color:rgba(28,24,20,.62)}
.v-shop-price-slash .old{position:absolute;left:calc(var(--u)*11.5);top:calc(var(--u)*5.4);font:400 calc(var(--u)*8.5)/1.2 var(--font-display);padding-block:.26em;margin-block:-.36em;transform-origin:0 .4em;white-space:nowrap;animation:shop-price-slash-old 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-price-slash .old svg{position:absolute;left:-.14em;top:.52em;width:2.24em;height:.75em;overflow:visible;animation:shop-price-slash-cut 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-price-slash .old svg path{stroke:var(--accent)}
.v-shop-price-slash .new{position:absolute;left:calc(var(--u)*11.5);top:calc(var(--u)*10.4);font:400 calc(var(--u)*13)/1.2 var(--font-display);padding-block:.26em;margin-block:-.36em;color:var(--accent);letter-spacing:-.01em;white-space:nowrap;animation:shop-price-slash-new 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-price-slash .tf{position:absolute;left:calc(var(--u)*11.5);right:calc(var(--u)*3.2);top:calc(var(--u)*24.6);padding-top:calc(var(--u)*1.1);border-top:1px dashed rgba(60,40,20,.35);display:flex;justify-content:space-between;font:500 calc(var(--u)*1.25)/1.2 var(--font-mono);color:rgba(28,24,20,.7)}
.v-shop-price-slash .badge{position:absolute;left:79.5cqw;top:4cqw;width:15.5em;height:15.5em;font-size:1cqw;animation:shop-price-slash-badge 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-price-slash .badge svg{position:absolute;left:0;top:0;width:100%;height:100%;filter:drop-shadow(0 .8em 1.2em color-mix(in srgb,var(--accent) 40%,transparent))}
.v-shop-price-slash .badge svg path{fill:var(--accent)}
.v-shop-price-slash .badge b{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff4e8}
.v-shop-price-slash .bv{font:700 3.4em/1.2 var(--font-body);letter-spacing:-.04em}
.v-shop-price-slash .bs{font:italic 400 1.9em/1.2 var(--font-display)}
.v-shop-price-slash .cap{position:absolute;left:56.5cqw;top:47cqw;max-width:40cqw;font:italic 400 2.5cqw/1.25 var(--font-display);color:var(--ink);padding-left:2.4cqw;animation:shop-price-slash-cap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-price-slash .cap::before{content:"";position:absolute;left:0;top:.62em;width:1.5cqw;height:.14em;border-radius:1em;background:var(--accent)}
@container (max-aspect-ratio: 4/5){
  .v-shop-price-slash .mark{left:8cqw;top:9cqh;width:8cqw;height:8cqw}
  .v-shop-price-slash .badge{left:auto;right:7cqw;top:5cqh;font-size:1.95cqw}
  .v-shop-price-slash .hp{left:22cqw;top:26cqw;width:56cqw;height:56cqw}
  .v-shop-price-slash .floor{left:26cqw;top:78.5cqw;width:48cqw;height:5cqw}
  .v-shop-price-slash .tag{left:8cqw;top:88cqw;font-size:2cqw;--u:2cqw}
  .v-shop-price-slash .s-w{display:none}
  .v-shop-price-slash .s-t{display:block}
  .v-shop-price-slash .cap{left:8cqw;right:8cqw;top:auto;bottom:8cqh;max-width:none;font-size:6.4cqw;padding-left:6cqw}
  .v-shop-price-slash .cap::before{width:4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-price-slash .mark{left:7cqw;top:6cqw;width:4.4cqw;height:4.4cqw}
  .v-shop-price-slash .badge{left:auto;right:6cqw;top:12cqw;font-size:1.42cqw}
  .v-shop-price-slash .hp{left:6cqw;top:26cqw;width:40cqw;height:40cqw}
  .v-shop-price-slash .floor{left:9.5cqw;top:63.5cqw;width:34cqw;height:3.6cqw}
  .v-shop-price-slash .tag{left:47cqw;top:32cqw;font-size:1.12cqw;--u:1.12cqw}
  .v-shop-price-slash .s-w{display:none}
  .v-shop-price-slash .s-s{display:block}
  .v-shop-price-slash .cap{left:7cqw;right:7cqw;top:auto;bottom:9cqw;max-width:none;font-size:4.2cqw;padding-left:4cqw}
  .v-shop-price-slash .cap::before{width:2.6cqw}
}
@keyframes shop-price-slash-hp{0%{opacity:0;transform:translateY(3cqw)}12%{opacity:1;transform:translateY(0) rotate(0deg)}50%{opacity:1;transform:translateY(-.8cqw) rotate(-1.2deg)}84%{opacity:1;transform:translateY(0) rotate(0deg)}94%,100%{opacity:0;transform:translateY(3cqw)}}
@keyframes shop-price-slash-floor{0%{opacity:0;transform:scaleX(.7)}12%{opacity:1;transform:scaleX(1)}50%{opacity:.75;transform:scaleX(.94)}84%{opacity:1;transform:scaleX(1)}94%,100%{opacity:0;transform:scaleX(.7)}}
@keyframes shop-price-slash-string{0%{opacity:0}6%,84%{opacity:1}92%,100%{opacity:0}}
@keyframes shop-price-slash-swing{0%{opacity:0;transform:rotate(-34deg)}4%{opacity:1}10%{transform:rotate(9deg)}16%{transform:rotate(-4.5deg)}22%{transform:rotate(2.2deg)}28%{transform:rotate(-1deg)}40%{transform:rotate(.9deg)}55%{transform:rotate(-.9deg)}70%{transform:rotate(.9deg)}84%{opacity:1;transform:rotate(0deg)}93%{opacity:0;transform:rotate(18deg)}100%{opacity:0;transform:rotate(-34deg)}}
@keyframes shop-price-slash-cut{0%,20%{clip-path:inset(0 100% 0 0)}28%,94%{clip-path:inset(0 0 0 0)}96%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes shop-price-slash-old{0%,30%{opacity:1;transform:none}37%,94%{opacity:.5;transform:translateY(-.06em) scale(.48)}96%,100%{opacity:1;transform:none}}
@keyframes shop-price-slash-new{0%,32%{opacity:0;transform:translateY(.25em) scale(.92)}38%{opacity:1;transform:translateY(-.04em) scale(1.03)}42%,94%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(.25em) scale(.92)}}
@keyframes shop-price-slash-badge{0%,39%{opacity:0;transform:scale(2.2) rotate(-40deg)}43%{opacity:1;transform:scale(.92) rotate(-6deg)}46.5%{transform:scale(1.05) rotate(-11deg)}50%{opacity:1;transform:scale(1) rotate(-10deg)}84%{opacity:1;transform:scale(1) rotate(-7deg)}90%{opacity:0;transform:scale(.6) rotate(10deg)}100%{opacity:0;transform:scale(2.2) rotate(-40deg)}}
@keyframes shop-price-slash-cap{0%,40%{opacity:0;transform:translateY(1.2cqw)}48%,84%{opacity:1;transform:translateY(0)}92%,100%{opacity:0;transform:translateY(-1cqw)}}
`,
};

const SHOP_TOTE = (grad: string, id: string) => `<svg viewBox="0 0 200 200" aria-hidden="true">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="0"><stop class="${grad}0" offset="0"/><stop class="${grad}1" offset=".35"/><stop class="${grad}0" offset="1"/></linearGradient></defs>
  <path d="M78 74C78 36 122 36 122 74" fill="none" stroke="#6e4630" stroke-width="6" stroke-linecap="round"/>
  <path d="M46 72H154L165 168Q166 178 156 178H44Q34 178 35 168Z" fill="url(#${id})"/>
  <path d="M46 72H154L155 82H45Z" fill="#000" opacity=".08"/>
  <path d="M47 81H153" stroke="#fff" stroke-opacity=".55" stroke-width="1.4" stroke-dasharray="4 4"/>
  <path d="M60 112H140L143 156H57Z" fill="#000" opacity=".06"/>
  <path d="M60 112H140L143 156H57Z" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" stroke-dasharray="4 4"/>
  <rect x="84" y="124" width="32" height="14" rx="2" fill="#f7efe4"/>
  <path d="M93 134.5a7 7 0 0 1 14 0M91 136.5h18" fill="none" stroke="#3a2a20" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M66 74C66 26 134 26 134 74" fill="none" stroke="#8a5a3c" stroke-width="7" stroke-linecap="round"/>
  <rect x="61" y="72" width="11" height="18" rx="2" fill="#8a5a3c"/>
  <rect x="128" y="72" width="11" height="18" rx="2" fill="#8a5a3c"/>
  <circle cx="66.5" cy="85" r="2" fill="#e2c07a"/><circle cx="133.5" cy="85" r="2" fill="#e2c07a"/>
  <path d="M40 170Q100 175 160 170" stroke="#000" stroke-opacity=".08" stroke-width="6" fill="none"/>
</svg>`;

export const shopAddToCart: SceneSpec = {
  id: "shop-add-to-cart",
  slug: "mg-shop-add-to-cart",
  name: "Add To Cart Flow",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "tap-swatch-fly-to-cart",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#17130F", accent: "#FF5B2E", secondary: "#A7BFA1", paper: "#FBF7F3" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["checkout", "mobile", "cart"],
  fields: [
    { key: "name", label: "Product name", default: "Day Tote", maxChars: 18, role: "name" },
    { key: "price", label: "Price", default: "$68", maxChars: 7, role: "value" },
    { key: "added", label: "Button result", default: "added to cart", maxChars: 18, role: "cta" },
    { key: "brand", label: "Brand", default: "loma", maxChars: 12, role: "label" },
  ],
  html: `<div class="phone">
  <div class="status"><span>9:41</span><svg viewBox="0 0 52 12" aria-hidden="true"><g fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/><rect x="28" y="1" width="20" height="10" rx="3" fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="1.2"/><rect x="30" y="3" width="14" height="6" rx="1.5"/><rect x="49" y="4" width="2" height="4" rx="1" opacity=".45"/></g></svg></div>
  <div class="nav">
    <span class="nb"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="#17130f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
    <span class="logo">${LOMA_MARK}<span data-21st-slot="brand">{{brand}}</span></span>
    <span class="nb cart"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2.2l2.1 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6.2" fill="none" stroke="#17130f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.5" fill="#17130f"/><circle cx="17" cy="20" r="1.5" fill="#17130f"/></svg><b class="badge">1</b></span>
  </div>
  <div class="media">
    <div class="bg b1"></div>
    <div class="bg b2"></div>
    <div class="tote">${SHOP_TOTE("ta", "shop-add-to-cart-a")}</div>
    <div class="tote t2">${SHOP_TOTE("tb", "shop-add-to-cart-b")}</div>
    <div class="chip">new colours</div>
    <div class="pager"><i></i><i></i><i></i><i></i></div>
  </div>
  <div class="cl">colour<span class="cv"><span class="c1">blush</span><span class="c2">sage</span></span></div>
  <div class="sw"><i class="s s1"></i><i class="s s2"></i><i class="s s3"></i><i class="s s4"></i><i class="ring"></i></div>
  <div class="btn">
    <div class="l1">add to cart<span>· {{price}}</span></div>
    <div class="l2"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="added">{{added}}</span></div>
  </div>
  <div class="rip r1"></div>
  <div class="rip r2"></div>
  <div class="home"></div>
  <div class="toast">
    <i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><circle cx="6.5" cy="17" r="1.9" fill="#ff5b2e" stroke="#fff" stroke-width="1.6"/><circle cx="17" cy="17" r="1.9" fill="#ff5b2e" stroke="#fff" stroke-width="1.6"/></svg></i>
    <div><b>free shipping unlocked</b><small>ships today</small></div>
    <em>bag</em>
  </div>
  <div class="fly"><div class="fly-y"><div class="fly-s">
    <svg viewBox="0 0 200 200" aria-hidden="true"><path d="M78 74C78 36 122 36 122 74" fill="none" stroke="#6e4630" stroke-width="6" stroke-linecap="round"/><path class="fb" d="M46 72H154L165 168Q166 178 156 178H44Q34 178 35 168Z"/><path d="M60 112H140L143 156H57Z" fill="#000" opacity=".06"/><rect x="84" y="124" width="32" height="14" rx="2" fill="#f7efe4"/><path d="M66 74C66 26 134 26 134 74" fill="none" stroke="#8a5a3c" stroke-width="7" stroke-linecap="round"/><rect x="61" y="72" width="11" height="18" rx="2" fill="#8a5a3c"/><rect x="128" y="72" width="11" height="18" rx="2" fill="#8a5a3c"/></svg>
  </div></div></div>
  <div class="tap"></div>
  <div class="veil"></div>
</div>
<div class="info">
  <div class="row"><span class="nm" data-21st-slot="name">{{name}}</span><span class="pr" data-21st-slot="price">{{price}}</span></div>
  <div class="sub">heavy canvas · 18 l · leather straps</div>
  <div class="rate"><svg viewBox="0 0 120 24" aria-hidden="true"><g fill="currentColor"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/><path transform="translate(24 0)" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/><path transform="translate(48 0)" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/><path transform="translate(72 0)" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/><path transform="translate(96 0)" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></g></svg>4.9 <span>(2,310)</span></div>
</div>`,
  css: `
.v-shop-add-to-cart{color:var(--ink);font-family:var(--font-body)}
.v-shop-add-to-cart[data-backdrop="on"]{background:radial-gradient(70% 90% at 75% 50%,color-mix(in srgb,var(--secondary) 26%,var(--paper)) 0%,color-mix(in srgb,var(--paper) 94%,var(--ink)) 100%)}
.v-shop-add-to-cart[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-add-to-cart .phone{position:absolute;left:58cqw;top:3.125cqw;width:28.125cqw;height:50cqw;container-type:size;overflow:hidden;border-radius:3cqw;background:var(--paper);color:var(--ink);box-shadow:0 0 0 .45cqw color-mix(in srgb,var(--ink) 88%,var(--paper)),0 2.4cqw 5cqw rgba(0,0,0,.22)}
.v-shop-add-to-cart .status{position:absolute;left:7cqw;right:7cqw;top:3.6cqw;display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:3.6cqw;line-height:1}
.v-shop-add-to-cart .status svg{height:3cqw;width:13cqw}
.v-shop-add-to-cart .nav{position:absolute;left:5cqw;right:5cqw;top:10.5cqw;height:10cqw;display:flex;align-items:center;justify-content:space-between}
.v-shop-add-to-cart .nb{position:relative;width:10cqw;height:10cqw;border-radius:50%;background:#fff;box-shadow:0 .6cqw 2cqw rgba(80,40,20,.09);display:flex;align-items:center;justify-content:center}
.v-shop-add-to-cart .nb svg{width:4.8cqw;height:4.8cqw}
.v-shop-add-to-cart .cart svg{animation:shop-add-to-cart-wiggle 6s ease-out infinite}
.v-shop-add-to-cart .badge{position:absolute;right:-1.2cqw;top:-1.2cqw;width:5.2cqw;height:5.2cqw;border-radius:50%;background:var(--accent);color:#fff;font-weight:700;font-size:2.9cqw;line-height:5.2cqw;text-align:center;box-shadow:0 0 0 .7cqw var(--paper);animation:shop-add-to-cart-badge 6s ease-out infinite}
.v-shop-add-to-cart .logo{display:flex;align-items:center;gap:1.3cqw;font:700 5.8cqw/1.2 var(--font-display);letter-spacing:-.035em;max-width:56cqw;white-space:nowrap}
.v-shop-add-to-cart .logo svg{width:5cqw;height:5cqw;color:var(--accent);flex:none}
.v-shop-add-to-cart .media{position:absolute;left:5cqw;top:23cqw;width:90cqw;height:88cqw;border-radius:6cqw;overflow:hidden}
.v-shop-add-to-cart .bg{position:absolute;inset:0}
.v-shop-add-to-cart .b1{background:radial-gradient(80% 70% at 50% 42%,color-mix(in srgb,var(--accent) 6%,#fff) 0%,color-mix(in srgb,var(--accent) 22%,#fff) 70%,color-mix(in srgb,var(--accent) 32%,#fff) 100%)}
.v-shop-add-to-cart .b2{background:radial-gradient(80% 70% at 50% 42%,color-mix(in srgb,var(--secondary) 10%,#fff) 0%,color-mix(in srgb,var(--secondary) 42%,#fff) 70%,color-mix(in srgb,var(--secondary) 60%,#fff) 100%);animation:shop-add-to-cart-swap 6s ease-out infinite}
.v-shop-add-to-cart .ta0{stop-color:color-mix(in srgb,var(--accent) 55%,#c98a78)}
.v-shop-add-to-cart .ta1{stop-color:color-mix(in srgb,var(--accent) 40%,#fff)}
.v-shop-add-to-cart .tb0{stop-color:color-mix(in srgb,var(--secondary) 80%,#000)}
.v-shop-add-to-cart .tb1{stop-color:color-mix(in srgb,var(--secondary) 75%,#fff)}
.v-shop-add-to-cart .fb{fill:var(--secondary)}
.v-shop-add-to-cart .tote{position:absolute;left:11cqw;top:9cqw;width:68cqw;height:68cqw;animation:shop-add-to-cart-float 6s ease-in-out infinite}
.v-shop-add-to-cart .t2{animation:shop-add-to-cart-float 6s ease-in-out infinite,shop-add-to-cart-swap 6s ease-out infinite}
.v-shop-add-to-cart .tote svg{display:block;width:100%;height:100%;filter:drop-shadow(0 2.4cqw 2.2cqw rgba(90,50,30,.2))}
.v-shop-add-to-cart .chip{position:absolute;left:4.5cqw;top:4.5cqw;padding:1.5cqw 2.8cqw;border-radius:5cqw;background:rgba(255,255,255,.85);color:#17130f;font-weight:600;font-size:3cqw;line-height:1.1}
.v-shop-add-to-cart .pager{position:absolute;left:0;right:0;bottom:4.5cqw;display:flex;justify-content:center;gap:1.6cqw}
.v-shop-add-to-cart .pager i{width:1.8cqw;height:1.8cqw;border-radius:1cqw;background:rgba(23,19,15,.2)}
.v-shop-add-to-cart .pager i:first-child{width:5.4cqw;background:#17130f}
.v-shop-add-to-cart .cl{position:absolute;left:5cqw;top:138cqw;font-size:3.3cqw;line-height:1.1;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-shop-add-to-cart .cv{position:relative;display:inline-block;margin-left:1cqw;color:var(--ink);font-weight:600}
.v-shop-add-to-cart .c1{display:inline-block;animation:shop-add-to-cart-swapout 6s ease-out infinite}
.v-shop-add-to-cart .c2{position:absolute;left:0;top:0;animation:shop-add-to-cart-swap 6s ease-out infinite}
.v-shop-add-to-cart .sw{position:absolute;left:5cqw;top:143.5cqw;width:50cqw;height:8cqw}
.v-shop-add-to-cart .s{position:absolute;top:.25cqw;width:7.5cqw;height:7.5cqw;border-radius:50%;box-shadow:inset 0 0 0 .5cqw rgba(255,255,255,.55),0 .5cqw 1.2cqw rgba(60,30,20,.12)}
.v-shop-add-to-cart .s1{left:0;background:color-mix(in srgb,var(--accent) 45%,#f2c2b2)}
.v-shop-add-to-cart .s2{left:10.5cqw;background:var(--secondary)}
.v-shop-add-to-cart .s3{left:21cqw;background:#e2cfae}
.v-shop-add-to-cart .s4{left:31.5cqw;background:color-mix(in srgb,var(--ink) 85%,var(--accent))}
.v-shop-add-to-cart .ring{position:absolute;left:-1.25cqw;top:-1cqw;width:10cqw;height:10cqw;border-radius:50%;border:.55cqw solid var(--ink);box-sizing:border-box;animation:shop-add-to-cart-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-add-to-cart .btn{position:absolute;left:5cqw;top:155cqw;width:90cqw;height:13cqw;border-radius:6.5cqw;background:var(--ink);color:var(--paper);overflow:hidden;box-shadow:0 2cqw 4cqw rgba(23,19,15,.22);animation:shop-add-to-cart-press 6s ease-out infinite}
.v-shop-add-to-cart .btn::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 66%,#000),color-mix(in srgb,var(--accent) 80%,#000));opacity:0;animation:shop-add-to-cart-green 6s ease-out infinite}
.v-shop-add-to-cart .l1,.v-shop-add-to-cart .l2{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:2cqw;font-weight:600;font-size:5.6cqw;line-height:1.2;white-space:nowrap}
.v-shop-add-to-cart .l1 span{opacity:.55;font-weight:400}
.v-shop-add-to-cart .l1{animation:shop-add-to-cart-l1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-add-to-cart .l2{opacity:0;color:#fff;animation:shop-add-to-cart-l2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-add-to-cart .l2 svg{width:5.6cqw;height:5.6cqw;flex:none}
.v-shop-add-to-cart .home{position:absolute;left:33cqw;width:34cqw;top:172.6cqw;height:1.2cqw;border-radius:1cqw;background:var(--ink)}
.v-shop-add-to-cart .toast{position:absolute;left:8cqw;right:8cqw;top:25.5cqw;padding:2.6cqw 3cqw;border-radius:4.5cqw;background:rgba(23,19,15,.93);color:#fff;display:flex;align-items:center;gap:2.6cqw;box-shadow:0 3cqw 6cqw rgba(23,19,15,.28);animation:shop-add-to-cart-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-add-to-cart .toast i{flex:none;width:8cqw;height:8cqw;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center}
.v-shop-add-to-cart .toast i svg{width:4.6cqw;height:4.6cqw}
.v-shop-add-to-cart .toast i circle{fill:var(--accent)}
.v-shop-add-to-cart .toast b{display:block;font-size:3.4cqw;line-height:1.15;font-weight:600}
.v-shop-add-to-cart .toast small{display:block;margin-top:.8cqw;font-size:2.7cqw;line-height:1.1;color:rgba(255,255,255,.62)}
.v-shop-add-to-cart .toast em{margin-left:auto;font-style:normal;font-size:2.8cqw;font-weight:600;padding:1.6cqw 2.6cqw;border-radius:4cqw;background:#fff;color:#17130f}
.v-shop-add-to-cart .fly{position:absolute;left:30cqw;top:47cqw;width:40cqw;height:40cqw;animation:shop-add-to-cart-fx 6s linear infinite}
.v-shop-add-to-cart .fly-y{width:100%;height:100%;animation:shop-add-to-cart-fy 6s linear infinite}
.v-shop-add-to-cart .fly-s{width:100%;height:100%;border-radius:5cqw;background:radial-gradient(80% 70% at 50% 42%,color-mix(in srgb,var(--secondary) 10%,#fff) 0%,color-mix(in srgb,var(--secondary) 45%,#fff) 100%);box-shadow:0 3cqw 6cqw rgba(40,60,40,.3);display:flex;align-items:center;justify-content:center;opacity:0;animation:shop-add-to-cart-fs 6s ease-in-out infinite}
.v-shop-add-to-cart .fly-s svg{width:32cqw;height:32cqw}
.v-shop-add-to-cart .tap{position:absolute;left:0;top:0;width:9cqw;height:9cqw;margin:-4.5cqw 0 0 -4.5cqw;border-radius:50%;background:rgba(23,19,15,.2);border:.5cqw solid rgba(255,255,255,.95);box-shadow:0 .8cqw 2.4cqw rgba(0,0,0,.25);opacity:0;animation:shop-add-to-cart-tap 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-add-to-cart .rip{position:absolute;width:14cqw;height:14cqw;margin:-7cqw 0 0 -7cqw;border-radius:50%;opacity:0}
.v-shop-add-to-cart .r1{left:19.25cqw;top:147.25cqw;border:.5cqw solid var(--ink);animation:shop-add-to-cart-r1 6s ease-out infinite}
.v-shop-add-to-cart .r2{left:60cqw;top:161.5cqw;border:.5cqw solid #fff;animation:shop-add-to-cart-r2 6s ease-out infinite}
.v-shop-add-to-cart .veil{position:absolute;inset:0;background:var(--paper);animation:shop-add-to-cart-veil 6s ease-in-out infinite}
.v-shop-add-to-cart .info{position:absolute;left:11cqw;top:17cqw;width:42cqw;animation:shop-add-to-cart-info 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-add-to-cart .row{display:flex;flex-direction:column;align-items:flex-start;font-family:var(--font-display);letter-spacing:-.035em}
.v-shop-add-to-cart .nm{font-weight:700;font-size:6.4cqw;line-height:1.2}
.v-shop-add-to-cart .pr{margin-top:.6cqw;font-weight:600;font-size:4.2cqw;line-height:1.2;color:var(--accent)}
.v-shop-add-to-cart .sub{margin-top:1.6cqw;font-size:1.7cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-shop-add-to-cart .rate{margin-top:1.4cqw;display:flex;align-items:center;gap:.8cqw;font-size:1.6cqw;line-height:1.2;font-weight:600}
.v-shop-add-to-cart .rate svg{width:8.5cqw;height:1.7cqw;color:var(--accent)}
.v-shop-add-to-cart .rate span{color:color-mix(in srgb,var(--ink) 52%,transparent);font-weight:400}
@container (max-aspect-ratio: 4/5){
  .v-shop-add-to-cart .phone{left:0;top:0;width:100cqw;height:100cqh;border-radius:0;box-shadow:none}
  .v-shop-add-to-cart .info{left:5cqw;right:5cqw;top:115.5cqw;width:auto}
  .v-shop-add-to-cart .row{flex-direction:row;justify-content:space-between;align-items:baseline;gap:4cqw}
  .v-shop-add-to-cart .nm{font-size:7.8cqw;min-width:0}
  .v-shop-add-to-cart .pr{margin-top:0;font-size:7.8cqw;color:var(--ink);flex:none}
  .v-shop-add-to-cart .sub{margin-top:1.4cqw;font-size:3.4cqw}
  .v-shop-add-to-cart .rate{margin-top:1.6cqw;gap:1.4cqw;font-size:3.2cqw}
  .v-shop-add-to-cart .rate svg{width:17cqw;height:3.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-add-to-cart .phone{left:44cqw;top:6cqw;width:49.5cqw;height:88cqw;border-radius:5cqw;box-shadow:0 0 0 .8cqw color-mix(in srgb,var(--ink) 88%,var(--paper)),0 4cqw 8cqw rgba(0,0,0,.22)}
  .v-shop-add-to-cart .info{left:6.5cqw;top:30cqw;width:34cqw}
  .v-shop-add-to-cart .nm{font-size:7cqw}
  .v-shop-add-to-cart .pr{font-size:5.4cqw}
  .v-shop-add-to-cart .sub{margin-top:2.4cqw;font-size:2.5cqw}
  .v-shop-add-to-cart .rate{margin-top:2cqw;gap:1.2cqw;font-size:2.4cqw}
  .v-shop-add-to-cart .rate svg{width:12.5cqw;height:2.5cqw}
}
@keyframes shop-add-to-cart-info{0%{opacity:0;transform:translateY(1.5cqw)}8%,90%{opacity:1;transform:none}96%,100%{opacity:0}}
@keyframes shop-add-to-cart-veil{0%{opacity:1}4%,90%{opacity:0}96%,100%{opacity:1}}
@keyframes shop-add-to-cart-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-1.6cqw) rotate(-1.2deg)}}
@keyframes shop-add-to-cart-tap{0%,4%{opacity:0;transform:translate(34cqw,166cqw) scale(1.3)}7%{opacity:1;transform:translate(19.25cqw,147.25cqw) scale(1)}9%{transform:translate(19.25cqw,147.25cqw) scale(.8)}11.5%,14%{opacity:1;transform:translate(19.25cqw,147.25cqw) scale(1)}21%{transform:translate(60cqw,161.5cqw) scale(1)}23%{transform:translate(60cqw,161.5cqw) scale(.8)}25.5%{opacity:1;transform:translate(60cqw,161.5cqw) scale(1)}31%{opacity:0;transform:translate(66cqw,166cqw) scale(1.1)}100%{opacity:0;transform:translate(34cqw,166cqw) scale(1.3)}}
@keyframes shop-add-to-cart-ring{0%,9%{transform:translateX(0)}12.5%,96%{transform:translateX(10.5cqw)}97%,100%{transform:translateX(0)}}
@keyframes shop-add-to-cart-swap{0%,9%{opacity:0}13%,96%{opacity:1}97%,100%{opacity:0}}
@keyframes shop-add-to-cart-swapout{0%,9%{opacity:1}12%,96%{opacity:0}97%,100%{opacity:1}}
@keyframes shop-add-to-cart-r1{0%,9%{opacity:0;transform:scale(.3)}9.5%{opacity:.45;transform:scale(.35)}17%,100%{opacity:0;transform:scale(1.3)}}
@keyframes shop-add-to-cart-r2{0%,23%{opacity:0;transform:scale(.3)}23.5%{opacity:.7;transform:scale(.35)}31%,100%{opacity:0;transform:scale(1.6)}}
@keyframes shop-add-to-cart-press{0%,22.5%{transform:scale(1)}24%{transform:scale(.965)}26.5%,100%{transform:scale(1)}}
@keyframes shop-add-to-cart-green{0%,24%{opacity:0}28%,96%{opacity:1}97%,100%{opacity:0}}
@keyframes shop-add-to-cart-l1{0%,24%{opacity:1;transform:translateY(0)}28%,96%{opacity:0;transform:translateY(-3cqw)}97%,100%{opacity:1;transform:translateY(0)}}
@keyframes shop-add-to-cart-l2{0%,25%{opacity:0;transform:translateY(3cqw)}30%,96%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(3cqw)}}
@keyframes shop-add-to-cart-fx{0%,26%{transform:translateX(0);animation-timing-function:cubic-bezier(.5,0,.85,.55)}37%,38.5%{transform:translateX(40cqw)}39%,100%{transform:translateX(0)}}
@keyframes shop-add-to-cart-fy{0%,26%{transform:translateY(0);animation-timing-function:cubic-bezier(.2,.6,.4,1)}37%,38.5%{transform:translateY(-51.5cqw)}39%,100%{transform:translateY(0)}}
@keyframes shop-add-to-cart-fs{0%,24.5%{opacity:0;transform:scale(1)}26%{opacity:1;transform:scale(1.05)}37%{opacity:1;transform:scale(.1)}38%{opacity:0;transform:scale(.08)}39%,100%{opacity:0;transform:scale(1)}}
@keyframes shop-add-to-cart-badge{0%,37%{transform:scale(0)}40%{transform:scale(1.35)}42.5%{transform:scale(.9)}45%,96%{transform:scale(1)}97%,100%{transform:scale(0)}}
@keyframes shop-add-to-cart-wiggle{0%,37%{transform:rotate(0deg)}39%{transform:rotate(-14deg) scale(1.1)}41.5%{transform:rotate(10deg)}44%{transform:rotate(-4deg)}46%,100%{transform:rotate(0deg)}}
@keyframes shop-add-to-cart-toast{0%,40%{opacity:0;transform:translateY(-6cqw) scale(.96)}46%,82%{opacity:1;transform:translateY(0) scale(1)}88%,100%{opacity:0;transform:translateY(-6cqw) scale(.96)}}
`,
};

const SHOP_SPARK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" fill="currentColor"/></svg>`;

export const shopUnboxing: SceneSpec = {
  id: "shop-unboxing",
  slug: "mg-shop-unboxing",
  name: "Glowing Unboxing Reveal",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "lid-lift-product-rise",
  energy: "default",
  settle: 3.1,
  colors: { ink: "#F2E6CF", accent: "#D9B26F", secondary: "#255A44", paper: "#0E231B" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["launch", "reveal", "packaging"],
  fields: [
    { key: "title", label: "Collection title", default: "the ember edit", maxChars: 22, role: "headline" },
    { key: "sub", label: "Product line", default: "No. 04 · ember fig · 50 ml", maxChars: 40, role: "caption" },
    { key: "foot", label: "Call to action", default: "pre-orders open oct 14", maxChars: 30, role: "cta" },
    { key: "brand", label: "Brand", default: "loma", maxChars: 12, role: "label" },
  ],
  html: `<div class="rig">
  <div class="rays-wrap"><div class="rays"></div></div>
  <div class="glow"></div>
  <div class="shadow"></div>
  <div class="opening"><div class="lit"></div></div>
  <div class="well"><div class="prod">
    <svg viewBox="0 0 120 200" aria-hidden="true">
      <defs>
        <linearGradient id="shop-unboxing-gold" x1="0" y1="0" x2="1" y2="0"><stop class="g0" offset="0"/><stop class="g1" offset=".3"/><stop class="g2" offset=".55"/><stop class="g1" offset=".8"/><stop class="g0" offset="1"/></linearGradient>
        <linearGradient id="shop-unboxing-liq" x1="0" y1="0" x2="0" y2="1"><stop class="q0" offset="0"/><stop class="q1" offset="1"/></linearGradient>
        <linearGradient id="shop-unboxing-glass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset=".5" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#fff" stop-opacity=".24"/></linearGradient>
      </defs>
      <rect x="34" y="4" width="52" height="42" rx="5" fill="url(#shop-unboxing-gold)"/>
      <rect x="34" y="38" width="52" height="3" fill="#000" opacity=".15"/>
      <rect x="44" y="44" width="32" height="10" fill="#7a5726"/>
      <rect x="8" y="52" width="104" height="144" rx="16" fill="url(#shop-unboxing-glass)" stroke="#fff" stroke-opacity=".5" stroke-width="1.5"/>
      <rect x="15" y="74" width="90" height="114" rx="11" fill="url(#shop-unboxing-liq)"/>
      <rect x="15" y="74" width="90" height="9" rx="4.5" fill="#fff" opacity=".35"/>
      <rect x="30" y="102" width="60" height="50" rx="2" fill="#f5ecdc"/>
      <path d="M53 120a7 7 0 0 1 14 0M51 122.5h18" fill="none" stroke="#1a3a2c" stroke-width="2" stroke-linecap="round"/>
      <path d="M40 133H80M46 141H74" stroke="#6b5a40" stroke-opacity=".6" stroke-width="2" stroke-linecap="round"/>
      <rect x="17" y="60" width="6" height="128" rx="3" fill="#fff" opacity=".38"/>
      <rect x="15" y="176" width="90" height="12" rx="6" fill="#fff" opacity=".14"/>
    </svg>
  </div></div>
  <div class="tissue ts-l"></div>
  <div class="tissue ts-r"></div>
  <div class="front"><div class="foil">{{brand}}</div></div>
  <div class="lid"><div class="lid-top"></div><div class="lid-front"></div><div class="seal">${LOMA_MARK}</div></div>
  <i class="spk k1">${SHOP_SPARK}</i>
  <i class="spk k2">${SHOP_SPARK}</i>
  <i class="spk k3">${SHOP_SPARK}</i>
  <i class="spk k4">${SHOP_SPARK}</i>
</div>
<div class="head">
  <div class="mark">${LOMA_MARK}<span data-21st-slot="brand">{{brand}}</span></div>
  <div class="ttl" data-21st-slot="title">{{title}}</div>
  <div class="sub" data-21st-slot="sub">{{sub}}</div>
</div>
<div class="foot"><span data-21st-slot="foot">{{foot}}</span></div>`,
  css: `
.v-shop-unboxing{color:var(--ink);font-family:var(--font-body)}
.v-shop-unboxing[data-backdrop="on"]{background:radial-gradient(90% 80% at 62% 64%,color-mix(in srgb,var(--secondary) 55%,var(--paper)) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 60%,#000) 100%)}
.v-shop-unboxing[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-unboxing .rig{position:absolute;left:37cqw;top:-20cqw;width:62cqw;height:77.5cqw;container-type:size;animation:shop-unboxing-in 6s ease-out infinite}
.v-shop-unboxing .rays-wrap{position:absolute;left:-20cqw;top:6cqw;width:140cqw;height:140cqw;clip-path:inset(0 0 50% 0);-webkit-mask-image:radial-gradient(closest-side,#000 15%,transparent 72%);mask-image:radial-gradient(closest-side,#000 15%,transparent 72%);animation:shop-unboxing-glow 6s ease-out infinite}
.v-shop-unboxing .rays{position:absolute;inset:0;border-radius:50%;background:repeating-conic-gradient(from 0deg,transparent 0deg,color-mix(in srgb,var(--accent) 24%,transparent) 4deg,transparent 9deg,transparent 16deg);animation:shop-unboxing-rays 6s linear infinite}
.v-shop-unboxing .glow{position:absolute;left:10cqw;top:46cqw;width:80cqw;height:50cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 62%,transparent),color-mix(in srgb,var(--accent) 18%,transparent) 55%,transparent);filter:blur(2cqw);animation:shop-unboxing-glow 6s ease-out infinite}
.v-shop-unboxing .shadow{position:absolute;left:10cqw;top:105cqw;width:80cqw;height:9cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.55),rgba(0,0,0,0))}
.v-shop-unboxing .opening{position:absolute;left:18cqw;top:72cqw;width:64cqw;height:8.5cqw;clip-path:polygon(8% 0,92% 0,100% 100%,0 100%);background:linear-gradient(180deg,color-mix(in srgb,var(--secondary) 25%,#000) 0%,color-mix(in srgb,var(--secondary) 55%,#000) 100%)}
.v-shop-unboxing .lit{position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 80%,transparent) 0%,color-mix(in srgb,var(--accent) 35%,transparent) 100%);animation:shop-unboxing-glow 6s ease-out infinite}
.v-shop-unboxing .well{position:absolute;left:0;top:0;width:100%;height:81cqw;overflow:hidden}
.v-shop-unboxing .prod{position:absolute;left:39cqw;top:42cqw;width:22cqw;height:36.7cqw;animation:shop-unboxing-rise 6s linear infinite}
.v-shop-unboxing .prod svg{display:block;width:100%;height:100%;filter:drop-shadow(0 0 3cqw color-mix(in srgb,var(--accent) 40%,transparent))}
.v-shop-unboxing .g0{stop-color:color-mix(in srgb,var(--accent) 70%,#000)}
.v-shop-unboxing .g1{stop-color:color-mix(in srgb,var(--accent) 45%,#fff)}
.v-shop-unboxing .g2{stop-color:color-mix(in srgb,var(--accent) 88%,#000)}
.v-shop-unboxing .q0{stop-color:color-mix(in srgb,var(--accent) 40%,#f6b366)}
.v-shop-unboxing .q1{stop-color:color-mix(in srgb,var(--accent) 30%,#9c3a10)}
.v-shop-unboxing .tissue{position:absolute;top:66cqw;width:20cqw;height:14cqw;background:linear-gradient(160deg,#fbf3e6 0%,#e2d4bd 100%)}
.v-shop-unboxing .ts-l{left:18.5cqw;clip-path:polygon(0 100%,18% 30%,40% 52%,62% 8%,100% 100%)}
.v-shop-unboxing .ts-r{left:61.5cqw;clip-path:polygon(0 100%,36% 12%,58% 46%,84% 22%,100% 100%)}
.v-shop-unboxing .front{position:absolute;left:18cqw;top:80cqw;width:64cqw;height:30cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--secondary) 100%,#fff) 0%,color-mix(in srgb,var(--secondary) 76%,#000) 55%,color-mix(in srgb,var(--secondary) 60%,#000) 100%);box-shadow:inset 0 1.2cqw 1.6cqw rgba(0,0,0,.35),inset 0 -.6cqw 1cqw rgba(0,0,0,.25)}
.v-shop-unboxing .front::before{content:"";position:absolute;inset:2cqw;border:1px solid color-mix(in srgb,var(--accent) 55%,transparent)}
.v-shop-unboxing .foil{position:absolute;left:3cqw;right:3cqw;top:9.6cqw;text-align:center;font:400 9cqw/1.2 var(--font-display);letter-spacing:-.01em;white-space:nowrap;overflow:hidden;background:linear-gradient(100deg,color-mix(in srgb,var(--accent) 70%,#000) 0%,color-mix(in srgb,var(--accent) 45%,#fff) 35%,var(--accent) 55%,color-mix(in srgb,var(--accent) 55%,#fff) 75%,color-mix(in srgb,var(--accent) 65%,#000) 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.v-shop-unboxing .lid{position:absolute;left:16.5cqw;top:64cqw;width:67cqw;height:18.5cqw;animation:shop-unboxing-lid 6s linear infinite}
.v-shop-unboxing .lid-top{position:absolute;left:0;top:0;width:100%;height:8cqw;clip-path:polygon(8.5% 0,91.5% 0,100% 100%,0 100%);background:linear-gradient(180deg,color-mix(in srgb,var(--secondary) 84%,#fff) 0%,color-mix(in srgb,var(--secondary) 92%,#fff) 100%)}
.v-shop-unboxing .lid-front{position:absolute;left:0;top:8cqw;width:100%;height:10.5cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--secondary) 94%,#fff) 0%,color-mix(in srgb,var(--secondary) 76%,#000) 100%);box-shadow:0 1.4cqw 2cqw rgba(0,0,0,.35)}
.v-shop-unboxing .lid-front::after{content:"";position:absolute;left:0;right:0;bottom:1.4cqw;height:1px;background:color-mix(in srgb,var(--accent) 60%,transparent)}
.v-shop-unboxing .seal{position:absolute;left:50%;top:5.3cqw;width:9cqw;height:9cqw;margin-left:-4.5cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,color-mix(in srgb,var(--accent) 45%,#fff) 0%,var(--accent) 60%,color-mix(in srgb,var(--accent) 70%,#000) 100%);box-shadow:0 .6cqw 1.2cqw rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;color:color-mix(in srgb,var(--secondary) 70%,#000)}
.v-shop-unboxing .seal svg{width:4.6cqw;height:4.6cqw}
.v-shop-unboxing .spk{position:absolute;width:3.4cqw;height:3.4cqw;color:color-mix(in srgb,var(--accent) 60%,#fff)}
.v-shop-unboxing .spk svg{display:block;width:100%;height:100%}
.v-shop-unboxing .k1{left:27cqw;top:47cqw;animation:shop-unboxing-spa 6s ease-in-out infinite}
.v-shop-unboxing .k2{left:70cqw;top:43cqw;width:2.4cqw;height:2.4cqw;animation:shop-unboxing-spb 6s ease-in-out infinite}
.v-shop-unboxing .k3{left:67cqw;top:60cqw;width:2.8cqw;height:2.8cqw;animation:shop-unboxing-spa 6s ease-in-out infinite}
.v-shop-unboxing .k4{left:31cqw;top:62cqw;width:2cqw;height:2cqw;animation:shop-unboxing-spb 6s ease-in-out infinite}
.v-shop-unboxing .head{position:absolute;left:7cqw;top:15cqw;width:36cqw;text-align:left;animation:shop-unboxing-head 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-unboxing .mark{display:inline-flex;align-items:center;gap:.8cqw;font:700 2.1cqw/1.2 var(--font-body);letter-spacing:-.03em;color:var(--accent)}
.v-shop-unboxing .mark svg{width:2.1cqw;height:2.1cqw;flex:none}
.v-shop-unboxing .ttl{margin-top:1.6cqw;font:italic 400 6.4cqw/1.2 var(--font-display);letter-spacing:-.01em;padding-block:.26em;margin-bottom:-.26em;margin-block-start:calc(1.6cqw - .26em)}
.v-shop-unboxing .sub{margin-top:1.4cqw;font-size:1.7cqw;line-height:1.25;letter-spacing:.02em;color:var(--accent)}
.v-shop-unboxing .foot{position:absolute;left:7cqw;top:43cqw;width:36cqw;font-size:1.6cqw;line-height:1.25;color:color-mix(in srgb,var(--ink) 75%,transparent);animation:shop-unboxing-foot 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-unboxing .foot span{display:inline-block;padding:.6em 1.1em;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:2em}
@container (max-aspect-ratio: 4/5){
  .v-shop-unboxing .rig{left:-12.5cqw;top:8cqw;width:125cqw;height:156.25cqw}
  .v-shop-unboxing .head{left:7cqw;right:7cqw;top:7cqh;width:auto;text-align:center}
  .v-shop-unboxing .mark{font-size:6cqw;gap:2cqw}
  .v-shop-unboxing .mark svg{width:6cqw;height:6cqw}
  .v-shop-unboxing .ttl{font-size:13cqw;margin-block-start:calc(2cqw - .26em)}
  .v-shop-unboxing .sub{margin-top:1.6cqw;font-size:5.4cqw}
  .v-shop-unboxing .foot{left:7cqw;right:7cqw;top:auto;bottom:5.5cqh;width:auto;text-align:center;font-size:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-unboxing .rig{left:14cqw;top:2cqw;width:72cqw;height:90cqw}
  .v-shop-unboxing .head{left:7cqw;right:7cqw;top:5.5cqw;width:auto;text-align:center}
  .v-shop-unboxing .mark{font-size:2.8cqw;gap:1cqw}
  .v-shop-unboxing .mark svg{width:2.8cqw;height:2.8cqw}
  .v-shop-unboxing .ttl{font-size:8.4cqw;margin-block-start:calc(.6cqw - .26em)}
  .v-shop-unboxing .sub{margin-top:.6cqw;font-size:2.5cqw}
  .v-shop-unboxing .foot{left:7cqw;right:7cqw;top:auto;bottom:4.5cqw;width:auto;text-align:center;font-size:2.4cqw}
}
@keyframes shop-unboxing-in{0%{opacity:0}6%,88%{opacity:1}95%,100%{opacity:0}}
@keyframes shop-unboxing-lid{0%,8%{opacity:1;transform:translate(0,0) rotate(0deg)}11%{transform:translate(0,.7cqw) rotate(0deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}26%{opacity:1;transform:translate(-5cqw,-30cqw) rotate(-10deg);animation-timing-function:cubic-bezier(.5,0,.75,0)}40%{opacity:0;transform:translate(-36cqw,-86cqw) rotate(-30deg)}96%{opacity:0;transform:translate(-36cqw,-86cqw) rotate(-30deg)}97%,100%{opacity:1;transform:translate(0,0) rotate(0deg)}}
@keyframes shop-unboxing-glow{0%,13%{opacity:0}30%{opacity:1}50%{opacity:.9}70%{opacity:1}100%{opacity:1}}
@keyframes shop-unboxing-rays{0%{transform:rotate(0deg)}100%{transform:rotate(40deg)}}
@keyframes shop-unboxing-rise{0%,22%{transform:translateY(40cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}42%{transform:translateY(-1.2cqw);animation-timing-function:ease-in-out}63%{transform:translateY(.4cqw)}84%{transform:translateY(-1cqw)}96%{transform:translateY(0)}97%,100%{transform:translateY(40cqw)}}
@keyframes shop-unboxing-head{0%,34%{opacity:0;transform:translateY(2cqw);filter:blur(.8cqw)}46%,100%{opacity:1;transform:translateY(0);filter:blur(0)}}
@keyframes shop-unboxing-foot{0%,40%{opacity:0;transform:translateY(1.5cqw)}50%,100%{opacity:1;transform:translateY(0)}}
@keyframes shop-unboxing-spa{0%,28%{opacity:0;transform:scale(0) rotate(0deg)}36%{opacity:1;transform:scale(1) rotate(45deg)}48%{opacity:.25;transform:scale(.5) rotate(90deg)}60%{opacity:1;transform:scale(1) rotate(135deg)}74%{opacity:.3;transform:scale(.55) rotate(180deg)}86%{opacity:1;transform:scale(.95) rotate(225deg)}96%,100%{opacity:0;transform:scale(0) rotate(270deg)}}
@keyframes shop-unboxing-spb{0%,32%{opacity:0;transform:scale(0) rotate(0deg)}42%{opacity:.35;transform:scale(.5) rotate(-45deg)}54%{opacity:1;transform:scale(1) rotate(-90deg)}66%{opacity:.3;transform:scale(.5) rotate(-135deg)}80%{opacity:1;transform:scale(1) rotate(-180deg)}96%,100%{opacity:0;transform:scale(0) rotate(-240deg)}}
`,
};

const SHOP_COLORWAY_LAYER = (cls: string, n: string, slotted: boolean) => {
  const s = (key: string) => (slotted ? ` data-21st-slot="${key}"` : "");
  return `<div class="lay ${cls}">
  <div class="sun"></div>
  <div class="br">${LOMA_MARK}<span${s("brand")}>{{brand}}</span></div>
  <div class="cp">
    <div class="k">32 oz / colorway ${n}</div>
    <div class="nm"${s("name")}>{{name}}</div>
    <div class="ds"${s("desc")}>{{desc}}</div>
    <div class="pr"><b${s("price")}>{{price}}</b><span>free engraving</span></div>
  </div>
  <div class="fl"></div>
  <div class="bt"><svg viewBox="0 0 120 310" aria-hidden="true"><defs><linearGradient id="shop-colorways-g${n}" x1="0" y1="0" x2="1" y2="0"><stop class="c0" offset="0"/><stop class="c1" offset=".3"/><stop class="c2" offset=".62"/><stop class="c0" offset="1"/></linearGradient></defs><path class="cs" d="M46 22C46 4 74 4 74 22" fill="none" stroke-width="7" stroke-linecap="round"/><rect class="cf" x="32" y="18" width="56" height="40" rx="11"/><rect x="38" y="23" width="6" height="30" rx="3" fill="#fff" opacity=".22"/><rect x="34" y="56" width="52" height="8" rx="2" fill="#c9cbc8"/><path d="M36 64H84C99 72 104 86 104 102V280C104 294 96 302 82 302H38C24 302 16 294 16 280V102C16 86 21 72 36 64Z" fill="url(#shop-colorways-g${n})"/><rect x="27" y="96" width="7" height="184" rx="3.5" fill="#fff" opacity=".3"/><rect x="93" y="100" width="3" height="176" rx="1.5" fill="#fff" opacity=".14"/><path class="cs" d="M50 176a10 10 0 0 1 20 0M46 182H74" fill="none" stroke-width="3" stroke-linecap="round"/></svg></div>
</div>`;
};

export const shopColorways: SceneSpec = {
  id: "shop-colorways",
  slug: "mg-shop-colorways",
  name: "Colorway Circle Wipe",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "swatch-circle-wipe-recolor",
  energy: "default",
  settle: 3.6,
  colors: { ink: "#23301F", accent: "#C9673F", secondary: "#7E9A78", paper: "#D6E1CD" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["product", "variants", "color"],
  fields: [
    { key: "name", label: "Product name", default: "Field Flask", maxChars: 16, role: "headline" },
    { key: "desc", label: "Description", default: "Powder-coated steel that keeps it cold for 24 hours.", maxChars: 60, role: "body" },
    { key: "price", label: "Price", default: "$42", maxChars: 7, role: "value" },
    { key: "brand", label: "Brand", default: "loma", maxChars: 12, role: "label" },
  ],
  html: `${SHOP_COLORWAY_LAYER("l-a", "01", false)}
${SHOP_COLORWAY_LAYER("l-b", "02", false)}
${SHOP_COLORWAY_LAYER("l-c", "03", true)}
<div class="pill"><i class="sw sw1"></i><i class="sw sw2"></i><i class="sw sw3"></i><i class="ring"></i>
  <div class="cur"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2L20 11.5L12.2 13.4L8.6 21Z" fill="#fff" stroke="#17130f" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
</div>`,
  css: `
.v-shop-colorways{font-family:var(--font-body);color:var(--ink)}
.v-shop-colorways .lay{--ox2:16%;--oy2:87.1%;--ox3:22%;--oy3:87.1%}
.v-shop-colorways[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-colorways .lay{position:absolute;inset:0}
.v-shop-colorways .l-a{background:radial-gradient(80% 110% at 70% 40%,color-mix(in srgb,var(--paper) 80%,#fff) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper) 88%,var(--ink)) 100%);color:var(--ink);--bc:color-mix(in srgb,var(--secondary) 88%,var(--ink));--cap:color-mix(in srgb,var(--secondary) 35%,#000);--sun:color-mix(in srgb,var(--paper) 70%,#fff)}
.v-shop-colorways .l-b{background:radial-gradient(80% 110% at 70% 40%,color-mix(in srgb,var(--secondary) 22%,var(--paper)) 0%,color-mix(in srgb,var(--secondary) 45%,var(--paper)) 60%,color-mix(in srgb,var(--secondary) 60%,var(--paper)) 100%);color:var(--ink);--bc:var(--accent);--cap:color-mix(in srgb,var(--accent) 30%,#000);--sun:color-mix(in srgb,var(--secondary) 12%,var(--paper));clip-path:circle(0% at var(--ox2) var(--oy2));animation:shop-colorways-wb 6s linear infinite}
.v-shop-colorways .l-c{background:radial-gradient(80% 110% at 70% 40%,color-mix(in srgb,var(--ink) 82%,var(--accent)) 0%,var(--ink) 60%,color-mix(in srgb,var(--ink) 85%,#000) 100%);color:var(--paper);--bc:color-mix(in srgb,var(--paper) 82%,var(--accent));--cap:color-mix(in srgb,var(--accent) 70%,#000);--sun:color-mix(in srgb,var(--ink) 80%,var(--paper));clip-path:circle(0% at var(--ox3) var(--oy3));animation:shop-colorways-wc 6s linear infinite}
.v-shop-colorways .c0{stop-color:color-mix(in srgb,var(--bc) 72%,#000)}
.v-shop-colorways .c1{stop-color:color-mix(in srgb,var(--bc) 62%,#fff)}
.v-shop-colorways .c2{stop-color:var(--bc)}
.v-shop-colorways .cs{stroke:var(--cap)}
.v-shop-colorways .cf{fill:var(--cap)}
.v-shop-colorways .br{position:absolute;left:6cqw;top:5cqw;display:flex;align-items:center;gap:.7cqw;font:700 2.3cqw/1.2 var(--font-body);letter-spacing:-.03em}
.v-shop-colorways .br svg{width:2.3cqw;height:2.3cqw;flex:none}
.v-shop-colorways .cp{position:absolute;left:6cqw;top:12.4cqw;width:47cqw;min-height:30cqw;display:flex;flex-direction:column;align-items:flex-start}
.v-shop-colorways .k{font:500 1.35cqw/1.2 var(--font-mono);letter-spacing:.03em;opacity:.7}
.v-shop-colorways .nm{width:47cqw;margin-left:-.4cqw;font:400 8.4cqw/1.2 var(--font-display);letter-spacing:-.02em;padding-block:.26em;margin-top:calc(.98cqw - .26em);margin-bottom:-.26em}
.v-shop-colorways .ds{width:32cqw;margin-top:3.9cqw;font-size:1.75cqw;line-height:1.45;opacity:.8}
.v-shop-colorways .pr{margin-top:auto;padding-top:2.4cqw;display:flex;align-items:center;gap:1.4cqw}
.v-shop-colorways .pr b{font:600 4cqw/1.2 var(--font-body);letter-spacing:-.03em}
.v-shop-colorways .pr span{font:500 1.35cqw/1.2 var(--font-body);padding:.7cqw 1.3cqw;border-radius:2cqw;border:1px solid currentColor;opacity:.75}
.v-shop-colorways .sun{position:absolute;left:47cqw;top:7cqw;width:38cqw;height:38cqw;border-radius:50%;background:radial-gradient(circle at 40% 35%,color-mix(in srgb,var(--sun) 80%,#fff) 0%,var(--sun) 70%,color-mix(in srgb,var(--sun) 92%,#000) 100%);animation:shop-colorways-sun 6s ease-in-out infinite}
.v-shop-colorways .fl{position:absolute;left:54.5cqw;top:49.6cqw;width:23cqw;height:2.8cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.35),rgba(0,0,0,0));animation:shop-colorways-shadow 6s ease-in-out infinite}
.v-shop-colorways .bt{position:absolute;left:57.1cqw;top:4.5cqw;width:17.8cqw;height:46cqw;animation:shop-colorways-float 6s ease-in-out infinite}
.v-shop-colorways .bt svg{display:block;width:100%;height:100%;filter:drop-shadow(0 1.4cqw 1.6cqw rgba(0,0,0,.22))}
.v-shop-colorways .l-b .nm,.v-shop-colorways .l-b .k,.v-shop-colorways .l-b .ds{animation:shop-colorways-tb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-colorways .l-c .nm,.v-shop-colorways .l-c .k,.v-shop-colorways .l-c .ds{animation:shop-colorways-tc 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-colorways .pill{position:absolute;left:6cqw;top:46cqw;width:20em;height:6em;font-size:1cqw;border-radius:3em;background:rgba(255,255,255,.82);box-shadow:0 .8em 2em rgba(0,0,0,.12)}
.v-shop-colorways .sw{position:absolute;top:1.1em;width:3.8em;height:3.8em;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}
.v-shop-colorways .sw1{left:2.1em;background:color-mix(in srgb,var(--secondary) 88%,var(--ink))}
.v-shop-colorways .sw2{left:8.1em;background:var(--accent)}
.v-shop-colorways .sw3{left:14.1em;background:var(--ink)}
.v-shop-colorways .ring{position:absolute;left:1.3em;top:.3em;width:5.4em;height:5.4em;border-radius:50%;border:.3em solid #17130f;box-sizing:border-box;animation:shop-colorways-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-colorways .cur{position:absolute;left:0;top:0;width:3.2em;height:3.2em;animation:shop-colorways-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-colorways .cur svg{display:block;width:100%;height:100%;filter:drop-shadow(0 .3em .6em rgba(0,0,0,.3))}
@container (max-aspect-ratio: 4/5){
  .v-shop-colorways .lay{--ox2:28%;--oy2:86.4%;--ox3:40%;--oy3:86.4%}
  .v-shop-colorways .br{left:8cqw;top:6cqh;font-size:6cqw;gap:2cqw}
  .v-shop-colorways .br svg{width:6cqw;height:6cqw}
  .v-shop-colorways .cp{left:8cqw;top:11.6cqh;width:84cqw;min-height:0}
  .v-shop-colorways .k{font-size:3.6cqw}
  .v-shop-colorways .nm{width:88cqw;margin-left:-.5cqw;margin-top:calc(-.05cqh - .26em);font-size:16cqw}
  .v-shop-colorways .ds{width:84cqw;margin-top:.9cqh;font-size:5.4cqw;line-height:1.35}
  .v-shop-colorways .sun{left:19.15cqw;top:71.6cqw;width:61.7cqw;height:61.7cqw}
  .v-shop-colorways .bt{left:35.5cqw;top:40cqh;width:28.9cqw;height:74.7cqw}
  .v-shop-colorways .fl{left:31.3cqw;top:143.4cqw;width:37.4cqw;height:4.5cqw}
  .v-shop-colorways .sun{top:75.2cqw}
  .v-shop-colorways .pr{position:absolute;right:0;top:71.4cqh;margin:0;padding:0}
  .v-shop-colorways .pr b{font-size:10cqw}
  .v-shop-colorways .pr span{display:none}
  .v-shop-colorways .pill{left:8cqw;top:83cqh;font-size:2cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-colorways .lay{--ox2:22%;--oy2:84.5%;--ox3:31%;--oy3:84.5%}
  .v-shop-colorways .br{left:7cqw;top:6cqw;font-size:3.2cqw;gap:1cqw}
  .v-shop-colorways .br svg{width:3.2cqw;height:3.2cqw}
  .v-shop-colorways .cp{left:7cqw;top:14cqw;width:38cqw;min-height:53.2cqw}
  .v-shop-colorways .k{font-size:2cqw}
  .v-shop-colorways .nm{width:38cqw;margin-top:calc(.6cqw - .26em);font-size:8.6cqw}
  .v-shop-colorways .ds{width:36cqw;margin-top:auto;font-size:2.5cqw}
  .v-shop-colorways .pr{padding-top:2cqw}
  .v-shop-colorways .pr b{font-size:6cqw}
  .v-shop-colorways .pr span{font-size:2cqw}
  .v-shop-colorways .sun{left:44cqw;top:20cqw;width:52cqw;height:52cqw}
  .v-shop-colorways .bt{left:57.8cqw;top:16.6cqw;width:24.4cqw;height:62.9cqw}
  .v-shop-colorways .fl{left:54.3cqw;top:78.3cqw;width:31.5cqw;height:3.8cqw}
  .v-shop-colorways .pill{left:7cqw;top:80cqw;font-size:1.5cqw}
}
@keyframes shop-colorways-wb{0%,20%{clip-path:circle(0% at var(--ox2) var(--oy2));animation-timing-function:cubic-bezier(.65,0,.35,1)}30%,100%{clip-path:circle(140% at var(--ox2) var(--oy2))}}
@keyframes shop-colorways-wc{0%,46%{clip-path:circle(0% at var(--ox3) var(--oy3));animation-timing-function:cubic-bezier(.65,0,.35,1)}56%,100%{clip-path:circle(140% at var(--ox3) var(--oy3))}}
@keyframes shop-colorways-tb{0%,21%{transform:translateX(-4cqw)}35%,100%{transform:translateX(0)}}
@keyframes shop-colorways-tc{0%,47%{transform:translateX(-4cqw)}58%,100%{transform:translateX(0)}}
@keyframes shop-colorways-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-1.2cqw) rotate(2deg)}}
@keyframes shop-colorways-shadow{0%,100%{transform:scaleX(1);opacity:1}50%{transform:scaleX(.88);opacity:.75}}
@keyframes shop-colorways-sun{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
@keyframes shop-colorways-ring{0%,19%{transform:translateX(0)}23%,45%{transform:translateX(6em)}49%,100%{transform:translateX(12em)}}
@keyframes shop-colorways-cur{0%{transform:translate(26em,8em) scale(1)}12%,16%{transform:translate(10em,3em) scale(1)}18%{transform:translate(10em,3em) scale(.8)}20%{transform:translate(10em,3em) scale(1)}30%{transform:translate(30em,-4em) scale(1)}40%,43%{transform:translate(16em,3em) scale(1)}45%{transform:translate(16em,3em) scale(.8)}47%{transform:translate(16em,3em) scale(1)}58%,100%{transform:translate(27em,7em) scale(1)}}
`,
};

const SHOP_TAPE = (a: string, b: string) => {
  const span = `<span>${a}${SHOP_SPARK}${b}${SHOP_SPARK}</span>`;
  return `<div class="run">${span}${span}${span}</div>`;
};

export const shopFlashSale: SceneSpec = {
  id: "shop-flash-sale",
  slug: "mg-shop-flash-sale",
  name: "Neon Flash Sale",
  kind: "scene",
  job: "cta",
  language: "kinetic-poster",
  mechanic: "tape-slam-countdown",
  energy: "punchy",
  settle: 2.8,
  colors: { ink: "#F7F5F0", accent: "#D7FF3A", secondary: "#FF3D8B", paper: "#140A10" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["sale", "countdown", "promo"],
  fields: [
    { key: "word1", label: "First word", default: "flash", maxChars: 7, role: "headline" },
    { key: "word2", label: "Second word", default: "sale", maxChars: 7, role: "headline" },
    { key: "offer", label: "Offer", default: "up to 50% off", maxChars: 18, role: "label" },
    { key: "cta", label: "Call to action", default: "shop the sale", maxChars: 24, role: "cta" },
  ],
  html: `<div class="glow"></div>
<div class="mark">${LOMA_MARK}</div>
<div class="tape tp1"><div class="tin">${SHOP_TAPE("flash sale", "48 hours only")}</div></div>
<div class="h1" data-21st-slot="word1">{{word1}}</div>
<div class="h2" data-21st-slot="word2">{{word2}}</div>
<div class="pill"><span data-21st-slot="offer">{{offer}}</span></div>
<div class="shoe"><div class="shoe-in">
  <i class="sp sp1"></i><i class="sp sp2"></i><i class="sp sp3"></i>
  <svg viewBox="0 0 400 200" aria-hidden="true">
    <defs>
      <linearGradient id="shop-flash-sale-up" x1="0" y1="0" x2="0" y2="1"><stop class="u0" offset="0"/><stop class="u1" offset=".55"/><stop class="u2" offset="1"/></linearGradient>
      <pattern id="shop-flash-sale-knit" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(32)"><rect width="7" height="3" fill="#fff" opacity=".1"/></pattern>
    </defs>
    <path class="ac" d="M44 160L378 156C390 158 386 170 372 172L64 174C50 174 44 168 44 160Z"/>
    <path d="M42 132C36 104 38 76 50 58C58 48 74 47 88 55C100 62 114 65 124 57L142 40C148 34 160 35 165 44C186 80 236 99 298 106C346 111 378 119 386 138L386 142L42 142Z" fill="url(#shop-flash-sale-up)"/>
    <path d="M42 132C36 104 38 76 50 58C58 48 74 47 88 55C100 62 114 65 124 57L142 40C148 34 160 35 165 44C186 80 236 99 298 106C346 111 378 119 386 138L386 142L42 142Z" fill="url(#shop-flash-sale-knit)"/>
    <path class="dk" d="M42 132C36 104 38 76 50 58C55 52 62 50 70 50C64 74 64 104 76 134Z" opacity=".5"/>
    <path class="md" d="M316 108C348 112 378 120 386 138L386 142L322 142C312 130 310 118 316 108Z" opacity=".6"/>
    <path class="cl" d="M54 62C62 54 76 54 88 61C100 68 114 70 124 61L127 64C116 76 100 74 88 67C76 60 64 60 56 66Z"/>
    <path class="ac" d="M46 74C42 62 45 50 54 46L59 56C53 59 51 66 53 74Z"/>
    <g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"><path d="M158 64L172 52"/><path d="M174 76L189 64"/><path d="M192 87L206 76"/><path d="M211 96L225 86"/></g>
    <path class="acs" d="M197 121A18 18 0 0 1 233 121" fill="none" stroke-width="6" stroke-linecap="round"/>
    <circle class="ac" cx="215" cy="121" r="3.6"/>
    <path d="M30 126L386 134C396 138 396 156 378 160L60 166C40 166 30 152 30 126Z" fill="#fbf7f0"/>
    <path d="M44 150C150 147 260 148 380 150" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="2"/>
  </svg>
</div></div>
<div class="cd">
  <div class="ends">sale ends in</div>
  <div class="digs">
    <div><div class="pd"><div class="dg">0</div><div class="dg">2</div></div><span class="un">hrs</span></div>
    <div class="col">:</div>
    <div><div class="pd"><div class="dg">1</div><div class="dg">4</div></div><span class="un">min</span></div>
    <div class="col">:</div>
    <div><div class="pd"><div class="dg">5</div><div class="dg"><div class="strip"><b>9</b><b>8</b><b>7</b><b>6</b><b>5</b><b>4</b><b>3</b></div></div></div><span class="un">sec</span></div>
  </div>
</div>
<div class="tape tp2"><div class="tin">${SHOP_TAPE("free shipping", "today only")}</div></div>
<div class="cta"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="strobe"></div>`,
  css: `
.v-shop-flash-sale{color:var(--ink);font-family:var(--font-body)}
.v-shop-flash-sale[data-backdrop="on"]{background:radial-gradient(90% 75% at 50% 52%,color-mix(in srgb,var(--secondary) 22%,var(--paper)) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 70%,#000) 100%)}
.v-shop-flash-sale[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-flash-sale[data-backdrop="off"] .strobe{display:none}
.v-shop-flash-sale .mark{position:absolute;left:4cqw;top:7.5cqw;width:2.6cqw;height:2.6cqw;color:var(--accent);display:none}
.v-shop-flash-sale .mark svg{display:block;width:100%;height:100%}
.v-shop-flash-sale .tape{position:absolute;left:-10cqw;width:120cqw;height:4.4cqw}
.v-shop-flash-sale .tp1{top:2.6cqw;transform:rotate(-2.5deg)}
.v-shop-flash-sale .tp2{top:51.6cqw;transform:rotate(2deg)}
.v-shop-flash-sale .tin{position:absolute;inset:0;overflow:hidden;box-shadow:0 1cqw 2cqw rgba(0,0,0,.4)}
.v-shop-flash-sale .tp1 .tin{background:var(--accent);color:var(--paper);animation:shop-flash-sale-tin1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .tp2 .tin{background:var(--secondary);color:var(--paper);animation:shop-flash-sale-tin2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .run{position:absolute;left:0;top:0;height:100%;display:flex;width:192cqw}
.v-shop-flash-sale .tp1 .run{animation:shop-flash-sale-run1 6s linear infinite}
.v-shop-flash-sale .tp2 .run{animation:shop-flash-sale-run2 6s linear infinite}
.v-shop-flash-sale .run span{flex:none;width:64cqw;display:flex;align-items:center;justify-content:space-around;font:800 1.9cqw/1.2 var(--font-display);letter-spacing:-.02em;white-space:nowrap}
.v-shop-flash-sale .run svg{width:1.6cqw;height:1.6cqw}
.v-shop-flash-sale .h1,.v-shop-flash-sale .h2{position:absolute;left:6cqw;font:800 15cqw/1.2 var(--font-display);letter-spacing:-.06em;white-space:nowrap;padding-right:.08em}
.v-shop-flash-sale .h1{top:8cqw;color:var(--accent);text-shadow:0 0 4cqw color-mix(in srgb,var(--accent) 35%,transparent);animation:shop-flash-sale-h1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .h2{top:23cqw;color:var(--secondary);text-shadow:0 0 4cqw color-mix(in srgb,var(--secondary) 40%,transparent);animation:shop-flash-sale-h2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .pill{position:absolute;left:6.6cqw;top:41cqw;padding:1cqw 2.4cqw;border-radius:5cqw;background:var(--secondary);color:var(--paper);font:800 2.6cqw/1.2 var(--font-display);letter-spacing:-.03em;white-space:nowrap;box-shadow:0 0 4cqw color-mix(in srgb,var(--secondary) 45%,transparent);transform-origin:50% 50%;animation:shop-flash-sale-pill 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .shoe{position:absolute;left:51cqw;top:10cqw;width:44cqw;height:22cqw;transform:rotate(-12deg)}
.v-shop-flash-sale .shoe-in{position:absolute;inset:0;animation:shop-flash-sale-shoe 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .shoe svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 1.6cqw 1.6cqw rgba(0,0,0,.5))}
.v-shop-flash-sale .u0{stop-color:color-mix(in srgb,var(--secondary) 65%,#fff)}
.v-shop-flash-sale .u1{stop-color:var(--secondary)}
.v-shop-flash-sale .u2{stop-color:color-mix(in srgb,var(--secondary) 70%,#000)}
.v-shop-flash-sale .dk{fill:color-mix(in srgb,var(--secondary) 60%,#000)}
.v-shop-flash-sale .md{fill:color-mix(in srgb,var(--secondary) 80%,#000)}
.v-shop-flash-sale .cl{fill:color-mix(in srgb,var(--secondary) 22%,#000)}
.v-shop-flash-sale .ac{fill:var(--accent)}
.v-shop-flash-sale .acs{stroke:var(--accent)}
.v-shop-flash-sale .sp{position:absolute;left:-6%;height:2%;min-height:2px;border-radius:1cqw;background:linear-gradient(90deg,transparent,var(--accent));transform-origin:100% 50%}
.v-shop-flash-sale .sp1{top:30%;width:25%;animation:shop-flash-sale-sp 1s ease-out infinite}
.v-shop-flash-sale .sp2{top:47%;width:18%;left:-2%;animation:shop-flash-sale-sp 1.5s ease-out infinite}
.v-shop-flash-sale .sp3{top:65%;width:28%;left:-4%;animation:shop-flash-sale-sp 2s ease-out infinite}
.v-shop-flash-sale .cd{--u:.54cqw;position:absolute;left:51cqw;right:5cqw;top:34cqw;text-align:center;animation:shop-flash-sale-cd 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .ends{font-size:calc(var(--u)*3.2);line-height:1.2;color:color-mix(in srgb,var(--ink) 65%,transparent)}
.v-shop-flash-sale .digs{margin-top:calc(var(--u)*2.4);display:flex;justify-content:center;align-items:flex-start;gap:calc(var(--u)*1.2)}
.v-shop-flash-sale .pd{display:flex;gap:calc(var(--u)*1.2)}
.v-shop-flash-sale .un{display:block;margin-top:calc(var(--u)*1.8);text-align:center;font:500 calc(var(--u)*2.4)/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-shop-flash-sale .dg{position:relative;width:calc(var(--u)*10.5);height:calc(var(--u)*14);border-radius:calc(var(--u)*1.8);overflow:hidden;background:linear-gradient(180deg,#232327 0%,#1b1b1e 50%,#141416 50%,#18181b 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.06),0 calc(var(--u)*1.4) calc(var(--u)*2.4) rgba(0,0,0,.5);font:700 calc(var(--u)*8.4)/calc(var(--u)*14) var(--font-display);color:var(--accent);text-align:center}
.v-shop-flash-sale .dg::after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(0,0,0,.65)}
.v-shop-flash-sale .strip{display:flex;flex-direction:column;animation:shop-flash-sale-tick 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-flash-sale .strip b{display:block;height:calc(var(--u)*14);font-weight:700}
.v-shop-flash-sale .col{width:calc(var(--u)*3);height:calc(var(--u)*14);display:flex;align-items:center;justify-content:center;font:700 calc(var(--u)*7)/1 var(--font-display);color:color-mix(in srgb,var(--ink) 45%,transparent);animation:shop-flash-sale-blink 1s steps(1) infinite}
.v-shop-flash-sale .cta{position:absolute;left:6.6cqw;top:47cqw;display:flex;align-items:center;gap:1cqw;font-weight:600;font-size:1.9cqw;line-height:1.2;animation:shop-flash-sale-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-flash-sale .cta svg{width:2.1cqw;height:2.1cqw;color:var(--accent);flex:none;animation:shop-flash-sale-nudge 1s ease-in-out infinite}
.v-shop-flash-sale .strobe{position:absolute;inset:0;background:#fff;opacity:0;animation:shop-flash-sale-strobe 6s ease-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-shop-flash-sale .tape{height:7.6cqw}
  .v-shop-flash-sale .tp1{top:10cqw;transform:rotate(-6deg)}
  .v-shop-flash-sale .tp2{top:153cqw;transform:rotate(3.5deg)}
  .v-shop-flash-sale .run span{font-size:3.2cqw}
  .v-shop-flash-sale .run svg{width:2.6cqw;height:2.6cqw}
  .v-shop-flash-sale .h1,.v-shop-flash-sale .h2{left:0;right:0;text-align:center;font-size:23cqw;padding:0}
  .v-shop-flash-sale .h1{top:21cqw}
  .v-shop-flash-sale .h2{top:43cqw}
  .v-shop-flash-sale .pill{left:50%;top:71cqw;padding:2cqw 5cqw;font-size:5.8cqw;translate:-50% 0}
  .v-shop-flash-sale .shoe{left:10cqw;top:86cqw;width:80cqw;height:40cqw}
  .v-shop-flash-sale .cd{--u:1cqw;left:0;right:0;top:120cqw}
  .v-shop-flash-sale .cta{left:0;right:0;top:auto;bottom:5cqh;justify-content:center;gap:2cqw;font-size:5.6cqw}
  .v-shop-flash-sale .cta svg{width:5.6cqw;height:5.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-flash-sale .tape{height:5.4cqw}
  .v-shop-flash-sale .tp1{top:5cqw;transform:rotate(-4deg)}
  .v-shop-flash-sale .tp2{top:80cqw;transform:rotate(3deg)}
  .v-shop-flash-sale .run span{font-size:2.4cqw}
  .v-shop-flash-sale .h1,.v-shop-flash-sale .h2{left:0;right:0;text-align:center;font-size:18cqw;padding:0}
  .v-shop-flash-sale .h1{top:11cqw}
  .v-shop-flash-sale .h2{top:28cqw}
  .v-shop-flash-sale .pill{left:50%;top:51cqw;padding:1.4cqw 3.4cqw;font-size:3.6cqw;translate:-50% 0}
  .v-shop-flash-sale .shoe{left:3cqw;top:62cqw;width:44cqw;height:22cqw}
  .v-shop-flash-sale .cd{--u:.58cqw;left:50cqw;right:4cqw;top:62cqw}
  .v-shop-flash-sale .cta{left:0;right:0;top:auto;bottom:4.5cqw;justify-content:center;gap:1.4cqw;font-size:3cqw}
  .v-shop-flash-sale .cta svg{width:3cqw;height:3cqw}
}
@keyframes shop-flash-sale-tin1{0%,2%{transform:translateX(-125cqw)}11%,100%{transform:translateX(0)}}
@keyframes shop-flash-sale-tin2{0%,24%{transform:translateX(125cqw)}33%,100%{transform:translateX(0)}}
@keyframes shop-flash-sale-run1{0%{transform:translateX(0)}100%{transform:translateX(-64cqw)}}
@keyframes shop-flash-sale-run2{0%{transform:translateX(-64cqw)}100%{transform:translateX(0)}}
@keyframes shop-flash-sale-h1{0%,4%{opacity:0;transform:scale(1.9);filter:blur(1.6cqw)}9%{opacity:1;transform:scale(.96);filter:blur(0)}12%{transform:scale(1)}60%{transform:scale(1.03)}100%{opacity:1;transform:scale(1);filter:blur(0)}}
@keyframes shop-flash-sale-h2{0%,8%{opacity:0;transform:translateX(40cqw) skewX(-24deg)}14%{opacity:1;transform:translateX(-2cqw) skewX(5deg)}18%,100%{opacity:1;transform:translateX(0) skewX(0deg)}}
@keyframes shop-flash-sale-pill{0%,14%{opacity:0;transform:rotate(-3deg) scale(.4)}19%{opacity:1;transform:rotate(-6deg) scale(1.12)}22%,100%{opacity:1;transform:rotate(-3deg) scale(1)}}
@keyframes shop-flash-sale-shoe{0%,16%{opacity:0;transform:translateX(80cqw)}24%{opacity:1;transform:translateX(-3cqw)}28%{transform:translateX(0) translateY(0)}50%{transform:translateX(0) translateY(-1.6cqw)}75%{transform:translateX(0) translateY(0)}100%{opacity:1;transform:translateX(0) translateY(-1.6cqw)}}
@keyframes shop-flash-sale-sp{0%{opacity:0;transform:translateX(4cqw) scaleX(.2)}30%{opacity:1}100%{opacity:0;transform:translateX(-6cqw) scaleX(1)}}
@keyframes shop-flash-sale-cd{0%,24%{opacity:0;transform:translateY(4cqw)}32%,100%{opacity:1;transform:translateY(0)}}
@keyframes shop-flash-sale-tick{0%,10%{transform:translateY(0)}12%,26.67%{transform:translateY(calc(var(--u)*-14))}28.67%,43.33%{transform:translateY(calc(var(--u)*-28))}45.33%,60%{transform:translateY(calc(var(--u)*-42))}62%,76.67%{transform:translateY(calc(var(--u)*-56))}78.67%,93.33%{transform:translateY(calc(var(--u)*-70))}95.33%,100%{transform:translateY(calc(var(--u)*-84))}}
@keyframes shop-flash-sale-blink{0%{opacity:1}50%{opacity:.35}}
@keyframes shop-flash-sale-cta{0%,30%{opacity:0;transform:translateY(2cqw)}38%,100%{opacity:1;transform:translateY(0)}}
@keyframes shop-flash-sale-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(.8cqw)}}
@keyframes shop-flash-sale-strobe{0%,5%{opacity:0}6%{opacity:.3}12%,100%{opacity:0}}
`,
};

const SHOP_STAR_PATH = "M11 1.5l2.8 5.8 6.3.8-4.6 4.4 1.2 6.3L11 15.7l-5.7 3.1 1.2-6.3-4.6-4.4 6.3-.8z";
const SHOP_STARS = (cls = "st") =>
  `<svg class="${cls}" viewBox="0 0 120 22" aria-hidden="true"><g fill="currentColor">${[0, 24, 48, 72, 96].map((x) => `<path transform="translate(${x} 0)" d="${SHOP_STAR_PATH}"/>`).join("")}</g></svg>`;
const SHOP_REVIEW = (q: string, who: string, av: number, ph = 0) =>
  `<div class="rc">${ph ? `<div class="ph p${ph}"></div>` : ""}${SHOP_STARS()}<div class="q">${q}</div><div class="who"><i class="av a${av}"></i>${who}</div></div>`;
const SHOP_COLUMN = (dir: string, items: string[]) => `<div class="colm"><div class="run ${dir}">${items.join("")}${items.join("")}</div></div>`;

export const shopReviewWall: SceneSpec = {
  id: "shop-review-wall",
  slug: "mg-shop-review-wall",
  name: "Customer Review Wall",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "review-columns-hero-lift",
  energy: "calm",
  settle: 3.0,
  colors: { ink: "#1D1A16", accent: "#FF5B2E", secondary: "#8FAE86", paper: "#F4EFE7" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["reviews", "social-proof", "rating"],
  fields: [
    { key: "headline", label: "Headline", default: "People don't just buy them. They rebuy them.", maxChars: 52, role: "headline" },
    { key: "score", label: "Rating", default: "4.9", maxChars: 4, role: "value" },
    { key: "quote", label: "Featured review", default: "“Wore them through a 14-hour travel day. Zero regrets.”", maxChars: 72, role: "body" },
    { key: "note", label: "Margin note", default: "62% come back for a second pair", maxChars: 36, role: "caption" },
  ],
  html: `<div class="wall">
  ${SHOP_COLUMN("up", [SHOP_REVIEW("Softest thing in my closet, hands down.", "Maya R.", 1, 1), SHOP_REVIEW("Second pair. Same size, same love.", "Leo T.", 2), SHOP_REVIEW("Shipped in two days and the box was gorgeous.", "Priya S.", 3), SHOP_REVIEW("Goes everywhere with me now.", "Ana M.", 4, 2)])}
  ${SHOP_COLUMN("dn", [SHOP_REVIEW("Support replied in four minutes. On a Sunday.", "Sam W.", 4), SHOP_REVIEW("Fits my 16 inch laptop and lunch.", "Noor A.", 1, 3), SHOP_REVIEW("Worth every cent. The next one is already in my cart.", "Elena V.", 2), SHOP_REVIEW("Comfy from day one, zero break-in.", "Kai O.", 3)])}
  ${SHOP_COLUMN("up", [SHOP_REVIEW("Got one for my dad. He loves it.", "Ruth B.", 2, 4), SHOP_REVIEW("Swapped a size, the exchange was free.", "Dev P.", 3), SHOP_REVIEW("Best thing I bought this year.", "Ollie J.", 1), SHOP_REVIEW("Already on my third order.", "Mina C.", 4, 1)])}
</div>
<div class="veil"></div>
<div class="kk">${LOMA_MARK}<b>reviews</b><span>/ verified buyers</span></div>
<div class="hl" data-21st-slot="headline">{{headline|words}}</div>
<div class="score">
  <div class="num" data-21st-slot="score">{{score}}</div>
  <div>
    <div class="stars">${SHOP_STARS("bg")}<div class="fill">${SHOP_STARS("fg")}</div></div>
    <div class="cnt"><b>12,400</b> verified reviews</div>
  </div>
</div>
<div class="note"><svg viewBox="0 0 60 40" aria-hidden="true"><path d="M4 6C18 4 34 10 44 26M44 26L36 24M44 26L46 17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg><span data-21st-slot="note">{{note}}</span></div>
<div class="hero">
  ${SHOP_STARS()}
  <div class="hq" data-21st-slot="quote">{{quote}}</div>
  <div class="hw"><i class="av a1"></i><div>Jonah K.<span>verified buyer · us 10</span></div><div class="vb"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>verified</div></div>
</div>`,
  css: `
.v-shop-review-wall{color:var(--ink);font-family:var(--font-body)}
.v-shop-review-wall[data-backdrop="on"]{background:var(--paper)}
.v-shop-review-wall[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-review-wall .wall{position:absolute;left:44cqw;top:0;width:56cqw;height:100%;container-type:size;display:flex;gap:2.86cqw;padding-left:1.8cqw;box-sizing:border-box;-webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 16%,#000 84%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0%,#000 16%,#000 84%,transparent 100%)}
.v-shop-review-wall .colm{flex:none;width:29.6cqw;height:100%;overflow:hidden}
.v-shop-review-wall .run{display:flex;flex-direction:column}
.v-shop-review-wall .up{animation:shop-review-wall-up 6s linear infinite}
.v-shop-review-wall .dn{animation:shop-review-wall-dn 6s linear infinite}
.v-shop-review-wall .rc{flex:none;margin-bottom:2.7cqw;padding:2.3cqw;border-radius:2.3cqw;background:color-mix(in srgb,var(--paper) 90%,#fff);color:var(--ink);box-shadow:0 .7cqw 2.1cqw rgba(60,40,20,.07),0 0 0 1px color-mix(in srgb,var(--ink) 7%,transparent)}
.v-shop-review-wall .ph{height:15.4cqw;border-radius:1.4cqw;margin-bottom:1.8cqw;position:relative;overflow:hidden}
.v-shop-review-wall .ph::after{content:"";position:absolute;left:22%;right:22%;bottom:18%;height:38%;border-radius:50% 50% 1.8cqw 1.8cqw;background:rgba(255,255,255,.55);filter:blur(.4cqw)}
.v-shop-review-wall .p1{background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 30%,#fff),var(--accent))}
.v-shop-review-wall .p2{background:linear-gradient(140deg,color-mix(in srgb,var(--secondary) 30%,#fff),var(--secondary))}
.v-shop-review-wall .p3{background:linear-gradient(140deg,color-mix(in srgb,var(--secondary) 40%,var(--accent) 10%,#fff),color-mix(in srgb,var(--secondary) 60%,var(--accent)))}
.v-shop-review-wall .p4{background:linear-gradient(140deg,color-mix(in srgb,var(--ink) 70%,var(--secondary)),color-mix(in srgb,var(--ink) 90%,#000))}
.v-shop-review-wall .st{display:block;width:12.5cqw;height:2.2cqw;color:var(--accent)}
.v-shop-review-wall .q{margin-top:1.4cqw;font-size:2.36cqw;line-height:1.32}
.v-shop-review-wall .who{margin-top:1.6cqw;display:flex;align-items:center;gap:1.1cqw;font-size:1.9cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-shop-review-wall .av{width:3.6cqw;height:3.6cqw;border-radius:50%;flex:none}
.v-shop-review-wall .a1{background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 45%,#fff),var(--accent))}
.v-shop-review-wall .a2{background:linear-gradient(135deg,color-mix(in srgb,var(--secondary) 50%,#fff),color-mix(in srgb,var(--secondary) 75%,#000))}
.v-shop-review-wall .a3{background:linear-gradient(135deg,color-mix(in srgb,var(--ink) 25%,#fff),color-mix(in srgb,var(--ink) 60%,var(--secondary)))}
.v-shop-review-wall .a4{background:linear-gradient(135deg,#ffe08a,#e0a830)}
.v-shop-review-wall .veil{position:absolute;left:44cqw;top:0;width:56cqw;height:100%;background:color-mix(in srgb,var(--paper) 72%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 16%,#000 84%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0%,#000 16%,#000 84%,transparent 100%);animation:shop-review-wall-veil 6s ease-in-out infinite}
.v-shop-review-wall .kk{position:absolute;left:5cqw;top:6.6cqw;display:flex;align-items:center;gap:.7cqw;font:600 1.6cqw/1.2 var(--font-body);letter-spacing:-.01em;animation:shop-review-wall-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-review-wall .kk svg{width:2cqw;height:2cqw;color:var(--accent);flex:none}
.v-shop-review-wall .kk span{margin-left:.3cqw;font:500 1.3cqw/1.2 var(--font-mono);color:color-mix(in srgb,var(--ink) 52%,transparent)}
.v-shop-review-wall .hl{position:absolute;left:5cqw;top:11cqw;width:37cqw;font:400 4.3cqw/1.2 var(--font-display);letter-spacing:-.015em;animation:shop-review-wall-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-review-wall .hl .w:last-child{font-style:italic;color:var(--accent)}
.v-shop-review-wall .score{position:absolute;left:5cqw;top:29.5cqw;display:flex;align-items:center;gap:2cqw;animation:shop-review-wall-in3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-review-wall .num{font:400 9cqw/1.2 var(--font-display);letter-spacing:-.03em}
.v-shop-review-wall .stars{position:relative;width:15cqw;height:2.6cqw}
.v-shop-review-wall .stars svg{position:absolute;left:0;top:0;width:100%;height:100%}
.v-shop-review-wall .stars .bg{color:color-mix(in srgb,var(--ink) 16%,transparent)}
.v-shop-review-wall .stars .fg{color:var(--accent)}
.v-shop-review-wall .fill{position:absolute;inset:0;animation:shop-review-wall-stars 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-review-wall .cnt{margin-top:1cqw;font-size:1.45cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-shop-review-wall .cnt b{color:var(--ink);font-weight:600}
.v-shop-review-wall .note{position:absolute;left:6cqw;top:43.5cqw;white-space:nowrap;display:flex;align-items:flex-start;gap:.6cqw;font:italic 400 2.5cqw/1.2 var(--font-display);color:var(--accent);transform:rotate(-3deg);animation:shop-review-wall-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-review-wall .note svg{width:5cqw;height:3.3cqw;margin-top:-1.4cqw;flex:none}
.v-shop-review-wall .hero{position:absolute;left:52cqw;top:13.5cqw;width:34cqw;box-sizing:border-box;padding:6.5%;container-type:inline-size;border-radius:2cqw;background:color-mix(in srgb,var(--paper) 78%,#fff);color:var(--ink);box-shadow:0 3cqw 6cqw rgba(30,20,10,.2),0 .6cqw 1.4cqw rgba(30,20,10,.08);animation:shop-review-wall-hero 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-review-wall .hero .st{width:29.4cqw;height:5.3cqw}
.v-shop-review-wall .hq{margin-top:4cqw;font:italic 400 10cqw/1.2 var(--font-display)}
.v-shop-review-wall .hw{margin-top:4.6cqw;display:flex;align-items:center;gap:2.9cqw;font-size:4cqw;line-height:1.2}
.v-shop-review-wall .hw .av{width:9.4cqw;height:9.4cqw}
.v-shop-review-wall .hw span{display:block;color:color-mix(in srgb,var(--ink) 52%,transparent);font-size:3.4cqw}
.v-shop-review-wall .vb{margin-left:auto;display:flex;align-items:center;gap:1.5cqw;padding:2cqw 3cqw;border-radius:6cqw;background:color-mix(in srgb,var(--secondary) 24%,transparent);font-size:3.2cqw;font-weight:600;white-space:nowrap}
.v-shop-review-wall .vb svg{width:3.5cqw;height:3.5cqw;color:color-mix(in srgb,var(--secondary) 70%,var(--ink))}
@container (max-aspect-ratio: 4/5){
  .v-shop-review-wall .wall,.v-shop-review-wall .veil{left:0;width:100cqw;top:47cqh;height:40cqh}
  .v-shop-review-wall .wall{gap:3.4cqw;padding-left:0;margin-left:0;justify-content:center}
  .v-shop-review-wall .kk{left:8cqw;top:6cqh;font-size:4.6cqw;gap:2cqw}
  .v-shop-review-wall .kk svg{width:5cqw;height:5cqw}
  .v-shop-review-wall .kk span{font-size:3.4cqw;margin-left:1cqw}
  .v-shop-review-wall .hl{left:8cqw;top:13cqh;width:84cqw;font-size:10cqw}
  .v-shop-review-wall .score{left:8cqw;top:36cqh;gap:5cqw}
  .v-shop-review-wall .num{font-size:19cqw}
  .v-shop-review-wall .stars{width:34cqw;height:6cqw}
  .v-shop-review-wall .cnt{margin-top:2cqw;font-size:3.6cqw}
  .v-shop-review-wall .hero{left:8cqw;top:54cqh;width:84cqw;border-radius:5cqw}
  .v-shop-review-wall .note{left:8cqw;top:auto;bottom:7cqh;font-size:6.2cqw;white-space:normal;max-width:84cqw;gap:2cqw}
  .v-shop-review-wall .note svg{width:10cqw;height:6.6cqw;margin-top:-2cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-review-wall .wall,.v-shop-review-wall .veil{left:0;width:100cqw;top:52cqw;height:48cqw}
  .v-shop-review-wall .wall{gap:3cqw;padding-left:0;justify-content:center}
  .v-shop-review-wall .kk{left:6cqw;top:5.5cqw;font-size:2.4cqw;gap:1cqw}
  .v-shop-review-wall .kk svg{width:2.8cqw;height:2.8cqw}
  .v-shop-review-wall .kk span{font-size:1.9cqw}
  .v-shop-review-wall .hl{left:6cqw;top:11cqw;width:84cqw;font-size:6.4cqw}
  .v-shop-review-wall .score{left:6cqw;top:33cqw;gap:3cqw}
  .v-shop-review-wall .num{font-size:11cqw}
  .v-shop-review-wall .stars{width:20cqw;height:3.5cqw}
  .v-shop-review-wall .cnt{font-size:2.2cqw}
  .v-shop-review-wall .note{left:auto;right:6cqw;top:37cqw;font-size:3.4cqw;flex-direction:row-reverse}
  .v-shop-review-wall .note svg{width:6cqw;height:4cqw;transform:scaleX(-1)}
  .v-shop-review-wall .hero{left:30cqw;top:57cqw;width:64cqw;border-radius:3cqw}
}
@keyframes shop-review-wall-up{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
@keyframes shop-review-wall-dn{0%{transform:translateY(-50%)}100%{transform:translateY(0)}}
@keyframes shop-review-wall-in1{0%,3%{opacity:0;transform:translateY(1.5cqw)}14%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes shop-review-wall-in2{0%,6%{opacity:0;transform:translateY(2cqw)}18%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes shop-review-wall-in3{0%,10%{opacity:0;transform:translateY(2cqw)}22%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes shop-review-wall-stars{0%,16%{clip-path:inset(0 100% 0 0)}32%,100%{clip-path:inset(0 2% 0 0)}}
@keyframes shop-review-wall-note{0%,28%{opacity:0;transform:rotate(-3deg) translateY(1cqw) scale(.95)}36%,86%{opacity:1;transform:rotate(-3deg) translateY(0) scale(1)}94%,100%{opacity:0;transform:rotate(-3deg) translateY(0) scale(1)}}
@keyframes shop-review-wall-hero{0%,32%{opacity:0;transform:translateY(4cqw) scale(.86) rotate(0deg)}42%{opacity:1;transform:translateY(-.4cqw) scale(1.01) rotate(-2.2deg)}48%,80%{opacity:1;transform:translateY(0) scale(1) rotate(-2deg)}88%,100%{opacity:0;transform:translateY(-3cqw) scale(.94) rotate(-1deg)}}
@keyframes shop-review-wall-veil{0%,32%{opacity:0}42%,80%{opacity:1}88%,100%{opacity:0}}
`,
};

const SHOP_CHECK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SHOP_ARROW = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const shopBundle: SceneSpec = {
  id: "shop-bundle",
  slug: "mg-shop-bundle",
  name: "Bundle Builder Kit",
  kind: "scene",
  job: "product-ui",
  language: "glass",
  mechanic: "items-drop-into-bundle-slots",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#221B3A", accent: "#7A64D6", secondary: "#FFAA82", paper: "#F3E7F5" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["bundle", "pricing", "upsell"],
  fields: [
    { key: "title", label: "Title", default: "build your weekend kit", maxChars: 28, role: "headline" },
    { key: "deal", label: "Kit price", default: "$109", maxChars: 7, role: "value" },
    { key: "save", label: "Savings", default: "you save $33", maxChars: 16, role: "label" },
    { key: "cta", label: "Button", default: "add kit to bag", maxChars: 18, role: "cta" },
  ],
  html: `<div class="blob bl1"></div>
<div class="blob bl2"></div>
<div class="hd"><b data-21st-slot="title">{{title}}</b><span>pick any three · ships together</span></div>
<div class="tray"></div>
<div class="slot sl1"></div><div class="slot sl2"></div><div class="slot sl3"></div>
<div class="plus pl1">+</div><div class="plus pl2">+</div>
<div class="it i1">
  <div class="pic"><svg viewBox="0 0 120 310" aria-hidden="true"><defs><linearGradient id="shop-bundle-fl" x1="0" y1="0" x2="1" y2="0"><stop class="f0" offset="0"/><stop class="f1" offset=".3"/><stop class="f2" offset=".62"/><stop class="f0" offset="1"/></linearGradient></defs><path class="fd" d="M46 22C46 4 74 4 74 22" fill="none" stroke-width="7" stroke-linecap="round"/><rect class="fdf" x="32" y="18" width="56" height="40" rx="11"/><rect x="34" y="56" width="52" height="8" rx="2" fill="#c9cbc8"/><path d="M36 64H84C99 72 104 86 104 102V280C104 294 96 302 82 302H38C24 302 16 294 16 280V102C16 86 21 72 36 64Z" fill="url(#shop-bundle-fl)"/><rect x="27" y="96" width="7" height="184" rx="3.5" fill="#fff" opacity=".3"/><path class="fd" d="M50 176a10 10 0 0 1 20 0M46 182H74" fill="none" stroke-width="3" stroke-linecap="round"/></svg></div>
  <div class="lb">flask<b>$42</b></div>
  <i class="ok">${SHOP_CHECK}</i>
</div>
<div class="it i2">
  <div class="pic"><svg viewBox="20 20 160 165" aria-hidden="true"><defs><linearGradient id="shop-bundle-tt" x1="0" y1="0" x2="1" y2="0"><stop class="t0" offset="0"/><stop class="t1" offset=".35"/><stop class="t0" offset="1"/></linearGradient></defs><path d="M78 74C78 36 122 36 122 74" fill="none" stroke="#6e4630" stroke-width="6" stroke-linecap="round"/><path d="M46 72H154L165 168Q166 178 156 178H44Q34 178 35 168Z" fill="url(#shop-bundle-tt)"/><path d="M60 112H140L143 156H57Z" fill="#000" opacity=".06"/><path d="M60 112H140L143 156H57Z" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.4" stroke-dasharray="4 4"/><rect x="84" y="124" width="32" height="14" rx="2" fill="#f7efe4"/><path d="M66 74C66 26 134 26 134 74" fill="none" stroke="#8a5a3c" stroke-width="7" stroke-linecap="round"/><rect x="61" y="72" width="11" height="18" rx="2" fill="#8a5a3c"/><rect x="128" y="72" width="11" height="18" rx="2" fill="#8a5a3c"/></svg></div>
  <div class="lb">day tote<b>$68</b></div>
  <i class="ok">${SHOP_CHECK}</i>
</div>
<div class="it i3">
  <div class="pic"><svg viewBox="4 4 120 70" aria-hidden="true"><defs><linearGradient id="shop-bundle-cp" x1="0" y1="0" x2="1" y2="1"><stop class="c0" offset="0"/><stop class="c1" offset="1"/></linearGradient></defs><path d="M14 62C14 26 40 12 62 12C88 12 104 32 104 62Z" fill="url(#shop-bundle-cp)"/><path class="cd" d="M96 58C110 58 120 60 120 64C120 69 104 69 90 66Z"/><rect class="cd" x="13" y="58" width="92" height="7" rx="3"/><path d="M62 13C56 28 54 44 56 60" stroke="#fff" stroke-opacity=".15" stroke-width="1.5" fill="none"/><path d="M62 13C76 26 84 42 86 60" stroke="#fff" stroke-opacity=".15" stroke-width="1.5" fill="none"/><circle class="cd" cx="62" cy="13" r="3.5"/><path class="cm" d="M64 46a9 9 0 0 1 18 0" stroke-width="3" fill="none" stroke-linecap="round"/></svg></div>
  <div class="lb">cap<b>$32</b></div>
  <i class="ok">${SHOP_CHECK}</i>
</div>
<div class="row">
  <div class="sum"><span class="lbl">separately</span><span class="roll"><span class="rs"><b>$42</b><b>$110</b><b>$142</b></span><i class="strike"></i></span></div>
  <svg class="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <div class="deal"><span class="lbl">kit price</span><b data-21st-slot="deal">{{deal}}</b></div>
  <div class="save" data-21st-slot="save">{{save}}</div>
  <div class="cta"><span data-21st-slot="cta">{{cta}}</span>${SHOP_ARROW}</div>
</div>`,
  css: `
.v-shop-bundle{color:var(--ink);font-family:var(--font-body)}
.v-shop-bundle[data-backdrop="on"]{background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 16%,var(--paper)) 0%,var(--paper) 48%,color-mix(in srgb,var(--secondary) 20%,var(--paper)) 100%)}
.v-shop-bundle[data-backdrop="off"] .blob{display:none}
.v-shop-bundle .blob{position:absolute;border-radius:50%;filter:blur(5cqw)}
.v-shop-bundle .bl1{left:-8cqw;top:-10cqw;width:40cqw;height:34cqw;background:color-mix(in srgb,var(--accent) 40%,transparent);animation:shop-bundle-drift1 6s ease-in-out infinite}
.v-shop-bundle .bl2{right:-8cqw;bottom:-14cqw;width:44cqw;height:36cqw;background:color-mix(in srgb,var(--secondary) 45%,transparent);animation:shop-bundle-drift2 6s ease-in-out infinite}
.v-shop-bundle .hd{position:absolute;left:6cqw;right:6cqw;top:3cqw;text-align:center}
.v-shop-bundle .hd b{display:block;font:700 4cqw/1.2 var(--font-display);letter-spacing:-.04em}
.v-shop-bundle .hd span{display:block;margin-top:.5cqw;font-size:1.6cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-shop-bundle .tray{position:absolute;left:12cqw;top:13.5cqw;width:76cqw;height:27cqw;border-radius:3cqw;background:color-mix(in srgb,var(--paper) 55%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--paper) 40%,#fff),0 2cqw 5cqw color-mix(in srgb,var(--accent) 16%,transparent)}
.v-shop-bundle .tray::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 .3cqw color-mix(in srgb,var(--accent) 75%,transparent),0 0 3cqw color-mix(in srgb,var(--accent) 35%,transparent);opacity:0;animation:shop-bundle-glow 6s ease-out infinite}
.v-shop-bundle .slot,.v-shop-bundle .it{position:absolute;top:17.5cqw;width:19cqw;height:19cqw;border-radius:2cqw}
.v-shop-bundle .slot{border:1px dashed color-mix(in srgb,var(--ink) 28%,transparent);box-sizing:border-box;transform:scale(.94)}
.v-shop-bundle .sl1,.v-shop-bundle .i1{left:15.5cqw}
.v-shop-bundle .sl2,.v-shop-bundle .i2{left:40.5cqw}
.v-shop-bundle .sl3,.v-shop-bundle .i3{left:65.5cqw}
.v-shop-bundle .plus{position:absolute;top:25.25cqw;width:3.5cqw;height:3.5cqw;margin-left:-1.75cqw;border-radius:50%;background:color-mix(in srgb,var(--paper) 70%,#fff);box-shadow:0 .5cqw 1.2cqw color-mix(in srgb,var(--accent) 20%,transparent);display:flex;align-items:center;justify-content:center;font:600 2.2cqw/1 var(--font-body);color:var(--accent)}
.v-shop-bundle .pl1{left:37.5cqw;animation:shop-bundle-plus1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-bundle .pl2{left:62.5cqw;animation:shop-bundle-plus2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-bundle .it{container-type:size;background:color-mix(in srgb,var(--paper) 72%,#fff);color:var(--ink);box-shadow:0 1.4cqw 3cqw color-mix(in srgb,var(--ink) 16%,transparent),0 0 0 1px color-mix(in srgb,var(--paper) 50%,#fff)}
.v-shop-bundle .i1{animation:shop-bundle-i1 6s linear infinite}
.v-shop-bundle .i2{animation:shop-bundle-i2 6s linear infinite}
.v-shop-bundle .i3{animation:shop-bundle-i3 6s linear infinite}
.v-shop-bundle .pic{position:absolute;left:0;right:0;top:7.4cqw;height:63cqw;display:flex;align-items:center;justify-content:center}
.v-shop-bundle .pic svg{height:100%;width:auto}
.v-shop-bundle .i3 .pic svg{height:42cqw}
.v-shop-bundle .f0{stop-color:color-mix(in srgb,var(--secondary) 70%,#000)}
.v-shop-bundle .f1{stop-color:color-mix(in srgb,var(--secondary) 60%,#fff)}
.v-shop-bundle .f2{stop-color:var(--secondary)}
.v-shop-bundle .fd{stroke:color-mix(in srgb,var(--secondary) 30%,#000)}
.v-shop-bundle .fdf{fill:color-mix(in srgb,var(--secondary) 30%,#000)}
.v-shop-bundle .t0{stop-color:color-mix(in srgb,var(--accent) 70%,#fff)}
.v-shop-bundle .t1{stop-color:color-mix(in srgb,var(--accent) 35%,#fff)}
.v-shop-bundle .c0{stop-color:color-mix(in srgb,var(--ink) 75%,var(--accent))}
.v-shop-bundle .c1{stop-color:color-mix(in srgb,var(--ink) 85%,#000)}
.v-shop-bundle .cd{fill:color-mix(in srgb,var(--ink) 80%,#000)}
.v-shop-bundle .cm{stroke:var(--secondary)}
.v-shop-bundle .lb{position:absolute;left:8.4cqw;right:8.4cqw;bottom:7.4cqw;display:flex;justify-content:space-between;font-size:7.1cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-shop-bundle .lb b{color:var(--ink);font-weight:600}
.v-shop-bundle .ok{position:absolute;right:-5.3cqw;top:-5.3cqw;width:17.9cqw;height:17.9cqw;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2.6cqw color-mix(in srgb,var(--paper) 60%,#fff)}
.v-shop-bundle .ok svg{width:10.5cqw;height:10.5cqw}
.v-shop-bundle .i1 .ok{animation:shop-bundle-ok1 6s ease-out infinite}
.v-shop-bundle .i2 .ok{animation:shop-bundle-ok2 6s ease-out infinite}
.v-shop-bundle .i3 .ok{animation:shop-bundle-ok3 6s ease-out infinite}
.v-shop-bundle .row{--r:1cqw;position:absolute;left:12cqw;right:12cqw;top:43.4cqw;height:8.6cqw;display:flex;align-items:center;gap:calc(var(--r)*2)}
.v-shop-bundle .lbl{display:block;font-size:calc(var(--r)*1.3);line-height:1.2;color:color-mix(in srgb,var(--ink) 58%,transparent);margin-bottom:calc(var(--r)*.5)}
.v-shop-bundle .sum{animation:shop-bundle-sum 6s ease-out infinite}
.v-shop-bundle .roll{position:relative;display:block;height:calc(var(--r)*3.6);overflow:hidden;font:600 calc(var(--r)*3.2)/calc(var(--r)*3.6) var(--font-display);letter-spacing:-.03em;color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-shop-bundle .rs{display:flex;flex-direction:column;animation:shop-bundle-roll 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-bundle .rs b{display:block;height:calc(var(--r)*3.6);font-weight:600}
.v-shop-bundle .strike{position:absolute;left:calc(var(--r)*-.3);right:calc(var(--r)*-.3);top:50%;height:calc(var(--r)*.3);background:color-mix(in srgb,var(--secondary) 45%,#d8321c);border-radius:1cqw;transform-origin:0 50%;animation:shop-bundle-strike 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-bundle .arr{flex:none;width:calc(var(--r)*3);height:calc(var(--r)*3);color:color-mix(in srgb,var(--ink) 45%,transparent);animation:shop-bundle-arr 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-bundle .deal{animation:shop-bundle-deal 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-bundle .deal b{display:block;font:700 calc(var(--r)*5.6)/1.2 var(--font-display);letter-spacing:-.045em}
.v-shop-bundle .save{padding:1cqw 1.6cqw;border-radius:2cqw;background:var(--ink);color:var(--paper);font-size:1.45cqw;font-weight:600;line-height:1.2;white-space:nowrap;animation:shop-bundle-save 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-bundle .cta{margin-left:auto;display:flex;align-items:center;justify-content:center;gap:1cqw;padding:1.5cqw 2.4cqw;border-radius:3cqw;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 88%,#fff),color-mix(in srgb,var(--accent) 82%,#000));color:#fff;font-size:1.6cqw;font-weight:600;line-height:1.2;white-space:nowrap;box-shadow:0 1.2cqw 2.6cqw color-mix(in srgb,var(--accent) 35%,transparent);animation:shop-bundle-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-bundle .cta svg{flex:none;width:1.8cqw;height:1.8cqw}
@container (max-aspect-ratio: 4/5){
  .v-shop-bundle .hd{left:7cqw;right:7cqw;top:8cqh}
  .v-shop-bundle .hd b{font-size:11cqw}
  .v-shop-bundle .hd span{margin-top:1.4cqw;font-size:4.2cqw}
  .v-shop-bundle .tray{left:2.5cqw;width:95cqw;top:28cqh;height:39cqw;border-radius:5cqw}
  .v-shop-bundle .slot,.v-shop-bundle .it{top:calc(28cqh + 6cqw);width:27cqw;height:27cqw;border-radius:3.4cqw}
  .v-shop-bundle .sl1,.v-shop-bundle .i1{left:5.5cqw}
  .v-shop-bundle .sl2,.v-shop-bundle .i2{left:36.5cqw}
  .v-shop-bundle .sl3,.v-shop-bundle .i3{left:67.5cqw}
  .v-shop-bundle .plus{top:calc(28cqh + 16.5cqw);width:6cqw;height:6cqw;margin-left:-3cqw;font-size:4cqw}
  .v-shop-bundle .pl1{left:34.5cqw}
  .v-shop-bundle .pl2{left:65.5cqw}
  .v-shop-bundle .row{--r:2.6cqw;left:7cqw;right:7cqw;top:56cqh;bottom:8cqh;height:auto;flex-wrap:wrap;align-content:space-between;row-gap:4cqw}
  .v-shop-bundle .save{font-size:5.6cqw;padding:2cqw 4cqw;border-radius:6cqw}
  .v-shop-bundle .cta{margin-left:0;width:100%;font-size:6cqw;padding:5cqw 4cqw;border-radius:10cqw;gap:3cqw}
  .v-shop-bundle .cta svg{width:6cqw;height:6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-bundle .hd{top:6cqw}
  .v-shop-bundle .hd b{font-size:6.4cqw}
  .v-shop-bundle .hd span{font-size:2.4cqw}
  .v-shop-bundle .tray{left:4.5cqw;width:91cqw;top:23cqw;height:36cqw;border-radius:4cqw}
  .v-shop-bundle .slot,.v-shop-bundle .it{top:27.5cqw;width:26cqw;height:26cqw;border-radius:3cqw}
  .v-shop-bundle .sl1,.v-shop-bundle .i1{left:8cqw}
  .v-shop-bundle .sl2,.v-shop-bundle .i2{left:37cqw}
  .v-shop-bundle .sl3,.v-shop-bundle .i3{left:66cqw}
  .v-shop-bundle .plus{top:38cqw;width:4.4cqw;height:4.4cqw;margin-left:-2.2cqw;font-size:3cqw}
  .v-shop-bundle .pl1{left:35.5cqw}
  .v-shop-bundle .pl2{left:64.5cqw}
  .v-shop-bundle .row{--r:1.55cqw;left:7cqw;right:7cqw;top:64cqw;bottom:6cqw;height:auto;flex-wrap:wrap;align-content:space-between}
  .v-shop-bundle .save{font-size:2.4cqw;padding:1.3cqw 2.2cqw}
  .v-shop-bundle .cta{margin-left:0;width:100%;font-size:2.8cqw;padding:2.6cqw;border-radius:5cqw;gap:1.6cqw}
  .v-shop-bundle .cta svg{width:3cqw;height:3cqw}
}
@keyframes shop-bundle-drift1{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,4cqw)}}
@keyframes shop-bundle-drift2{0%,100%{transform:translate(0,0)}50%{transform:translate(-6cqw,-3cqw)}}
@keyframes shop-bundle-i1{0%,5%{opacity:0;transform:translate(-30cqw,8cqw) rotate(-18deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}14%{opacity:1;transform:translate(.8cqw,-.5cqw) rotate(2deg);animation-timing-function:ease-out}17%{transform:translate(0,0) rotate(0deg);animation-timing-function:ease-in-out}50%{transform:translate(0,-.5cqw) rotate(0deg)}86%{opacity:1;transform:translate(0,0) rotate(0deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}94%,100%{opacity:0;transform:translate(0,-5cqw) rotate(0deg)}}
@keyframes shop-bundle-i2{0%,11%{opacity:0;transform:translate(0,-34cqw) rotate(12deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}20%{opacity:1;transform:translate(0,.8cqw) rotate(-1.5deg);animation-timing-function:ease-out}23%{transform:translate(0,0) rotate(0deg);animation-timing-function:ease-in-out}56%{transform:translate(0,-.5cqw) rotate(0deg)}87%{opacity:1;transform:translate(0,0) rotate(0deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}95%,100%{opacity:0;transform:translate(0,-5cqw) rotate(0deg)}}
@keyframes shop-bundle-i3{0%,17%{opacity:0;transform:translate(30cqw,8cqw) rotate(18deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}26%{opacity:1;transform:translate(-.8cqw,-.5cqw) rotate(-2deg);animation-timing-function:ease-out}29%{transform:translate(0,0) rotate(0deg);animation-timing-function:ease-in-out}62%{transform:translate(0,-.5cqw) rotate(0deg)}88%{opacity:1;transform:translate(0,0) rotate(0deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}96%,100%{opacity:0;transform:translate(0,-5cqw) rotate(0deg)}}
@keyframes shop-bundle-ok1{0%,15%{transform:scale(0)}18%{transform:scale(1.25)}20%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes shop-bundle-ok2{0%,21%{transform:scale(0)}24%{transform:scale(1.25)}26%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes shop-bundle-ok3{0%,27%{transform:scale(0)}30%{transform:scale(1.25)}32%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes shop-bundle-plus1{0%,19%{opacity:0;transform:scale(.3) rotate(-90deg)}24%,86%{opacity:1;transform:scale(1) rotate(0deg)}92%,100%{opacity:0;transform:scale(.3) rotate(0deg)}}
@keyframes shop-bundle-plus2{0%,25%{opacity:0;transform:scale(.3) rotate(-90deg)}30%,86%{opacity:1;transform:scale(1) rotate(0deg)}92%,100%{opacity:0;transform:scale(.3) rotate(0deg)}}
@keyframes shop-bundle-glow{0%,30%{opacity:0}34%{opacity:1}44%,100%{opacity:0}}
@keyframes shop-bundle-sum{0%,13%{opacity:0;transform:translateY(1.5cqw)}18%,86%{opacity:1;transform:translateY(0)}93%,100%{opacity:0;transform:translateY(0)}}
@keyframes shop-bundle-roll{0%,21%{transform:translateY(0)}24%,27%{transform:translateY(calc(var(--r)*-3.6))}30%,100%{transform:translateY(calc(var(--r)*-7.2))}}
@keyframes shop-bundle-strike{0%,33%{transform:scaleX(0)}38%,100%{transform:scaleX(1)}}
@keyframes shop-bundle-arr{0%,35%{opacity:0;transform:translateX(-1.5cqw)}40%,86%{opacity:1;transform:translateX(0)}93%,100%{opacity:0;transform:translateX(0)}}
@keyframes shop-bundle-deal{0%,36%{opacity:0;transform:translateY(2cqw) scale(.9)}43%,86%{opacity:1;transform:translateY(0) scale(1)}93%,100%{opacity:0;transform:translateY(0) scale(1)}}
@keyframes shop-bundle-save{0%,40%{opacity:0;transform:scale(.5) rotate(-8deg)}44%{opacity:1;transform:scale(1.12) rotate(-3deg)}47%,86%{opacity:1;transform:scale(1) rotate(-3deg)}93%,100%{opacity:0;transform:scale(.8) rotate(-3deg)}}
@keyframes shop-bundle-cta{0%,40%{opacity:0;transform:translateX(3cqw)}47%,86%{opacity:1;transform:translateX(0)}93%,100%{opacity:0;transform:translateX(0)}}
`,
};

const SHOP_NB = (n: number, bg: string, shape: string, title: string, price: string) =>
  `<div class="nb n${n}"><div class="ni" style="background:${bg}"><i style="${shape}"></i></div><div class="nt">${title}</div><div class="np">${price}</div></div>`;

export const shopListing: SceneSpec = {
  id: "shop-listing",
  slug: "mg-shop-listing",
  name: "Marketplace Listing Zoom",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "grid-zoom-to-listing",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#14171A", accent: "#FF5B2E", secondary: "#FFA41C", paper: "#E7ECE8" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["marketplace", "listing", "bestseller"],
  fields: [
    { key: "title", label: "Listing title", default: "Halo Wireless Over-Ear Headphones, Sand", maxChars: 48, role: "name" },
    { key: "price", label: "Price", default: "$179", maxChars: 7, role: "value" },
    { key: "badge", label: "Badge", default: "best seller", maxChars: 14, role: "label" },
    { key: "delivery", label: "Delivery line", default: "Free delivery Thursday", maxChars: 24, role: "caption" },
  ],
  html: `<div class="cam">
  ${SHOP_NB(1, "linear-gradient(160deg,#eef3ec,#d6e2d2)", "width:12cqw;height:30cqw;border-radius:4cqw 4cqw 3cqw 3cqw;background:linear-gradient(90deg,#5f7a5a,#a9c2a2 35%,#6e8a68)", "Trail Flask 24 oz, insulated", "$34.99")}
  ${SHOP_NB(2, "linear-gradient(160deg,#fbefe9,#f2d3c6)", "width:30cqw;height:24cqw;border-radius:2cqw 2cqw 4cqw 4cqw;background:linear-gradient(90deg,#d98c78,#f3bcab 40%,#d7907d)", "Canvas Day Tote, 18 l", "$68.00")}
  ${SHOP_NB(3, "linear-gradient(160deg,#eceef6,#d5d9ea)", "width:30cqw;height:16cqw;border-radius:16cqw 16cqw 1cqw 1cqw;background:linear-gradient(135deg,#4a5478,#1d2232)", "Six-Panel Cap, washed", "$32.00")}
  ${SHOP_NB(4, "linear-gradient(160deg,#fff4e8,#f6dcc4)", "width:34cqw;height:14cqw;border-radius:8cqw 12cqw 3cqw 3cqw;background:linear-gradient(180deg,#ff9466,#c8431a)", "Knit Runner, ember", "$128.00")}
  ${SHOP_NB(5, "linear-gradient(160deg,#f4efe6,#e4d9c6)", "width:18cqw;height:22cqw;border-radius:3cqw;background:linear-gradient(180deg,#f0a35a,#b64c17)", "Fig candle, 220 g", "$28.00")}
  ${SHOP_NB(6, "linear-gradient(160deg,#f0f0f0,#dcdcdc)", "width:26cqw;height:26cqw;border-radius:50%;background:radial-gradient(circle at 40% 35%,#55504a,#1c1a18)", "Pebble Speaker, 12 h", "$89.00")}
  ${SHOP_NB(7, "linear-gradient(160deg,#eaf0f6,#cfdbe8)", "width:22cqw;height:28cqw;border-radius:2cqw;background:linear-gradient(90deg,#8fa6c2,#c7d6e8 40%,#8ba2be)", "Linen Overshirt, sky", "$74.00")}
  ${SHOP_NB(8, "linear-gradient(160deg,#f6efe9,#e8d9cb)", "width:28cqw;height:10cqw;border-radius:5cqw;background:linear-gradient(180deg,#8a5a3c,#5e3c27)", "Leather Card Wallet", "$46.00")}
  <div class="card">
    <div class="img">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <linearGradient id="shop-listing-band" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efe5d4"/><stop offset="1" stop-color="#cdbb9e"/></linearGradient>
          <linearGradient id="shop-listing-cup" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3eadb"/><stop offset="1" stop-color="#c2ae8e"/></linearGradient>
          <linearGradient id="shop-listing-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9c958b"/><stop offset=".5" stop-color="#f1ede6"/><stop offset="1" stop-color="#8a847a"/></linearGradient>
        </defs>
        <path d="M38 120C34 34 166 34 162 120" fill="none" stroke="url(#shop-listing-band)" stroke-width="13" stroke-linecap="round"/>
        <path d="M53 96C61 56 139 56 147 96" fill="none" stroke="#7a6a55" stroke-width="8" stroke-linecap="round"/>
        <rect x="32" y="98" width="12" height="30" rx="4" fill="url(#shop-listing-metal)"/>
        <rect x="156" y="98" width="12" height="30" rx="4" fill="url(#shop-listing-metal)"/>
        <rect x="46" y="122" width="15" height="52" rx="7.5" fill="#6e604d"/>
        <rect x="139" y="122" width="15" height="52" rx="7.5" fill="#6e604d"/>
        <rect x="18" y="116" width="36" height="64" rx="18" fill="url(#shop-listing-cup)"/>
        <rect x="146" y="116" width="36" height="64" rx="18" fill="url(#shop-listing-cup)"/>
        <rect x="23" y="126" width="4.5" height="42" rx="2.25" fill="#fff" opacity=".6"/>
        <rect x="151" y="126" width="4.5" height="42" rx="2.25" fill="#fff" opacity=".6"/>
        <path d="M29 152a7 7 0 0 1 14 0" fill="none" stroke="#8a7a62" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M157 152a7 7 0 0 1 14 0" fill="none" stroke="#8a7a62" stroke-width="2.6" stroke-linecap="round"/>
      </svg>
      <div class="rib">bestseller</div>
      <div class="dots"><i></i><i></i><i></i><i></i></div>
    </div>
    <div class="body">
      <div class="store"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" class="vc"/><path d="M7.5 12.3l3 3 6-6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><b>official store</b></div>
      <div class="tt" data-21st-slot="title">{{title}}</div>
      <div class="rt">4.8<div class="stars">${SHOP_STARS("bg")}<div class="fill">${SHOP_STARS("fg")}</div></div><span>(3,912)</span></div>
      <div class="bought"><b>2k+ bought</b> in past month</div>
      <div class="pr"><b data-21st-slot="price">{{price}}</b><s>$249</s><em>-28%</em></div>
      <div class="dl"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="6.5" cy="17" r="1.9" fill="#fff" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="17" r="1.9" fill="#fff" stroke="currentColor" stroke-width="1.6"/></svg><span data-21st-slot="delivery">{{delivery}}</span></div>
    </div>
  </div>
  <div class="top1"><b>#1</b><span><span data-21st-slot="badge">{{badge}}</span><small>in over-ear headphones</small></span></div>
  <div class="cur"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2L20 11.5L12.2 13.4L8.6 21Z" fill="#14171a" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
</div>`,
  css: `
.v-shop-listing{color:#14171a;font-family:var(--font-body)}
.v-shop-listing[data-backdrop="on"]{background:radial-gradient(80% 80% at 50% 45%,color-mix(in srgb,var(--paper) 80%,#fff),var(--paper) 70%,color-mix(in srgb,var(--paper) 92%,var(--ink)))}
.v-shop-listing[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-listing .cam{position:absolute;left:21.875cqw;top:0;width:56.25cqw;height:56.25cqw;container-type:size;--k1:1;--k2:1;--k3:1;transform-origin:50% 50%;animation:shop-listing-cam 6s linear infinite}
.v-shop-listing .nb{position:absolute;width:62cqw;height:86cqw;border-radius:3cqw;background:color-mix(in srgb,var(--paper) 22%,#fff);box-shadow:0 .6cqw 2cqw rgba(20,40,30,.08);overflow:hidden;animation:shop-listing-nb 6s linear infinite}
.v-shop-listing .ni{height:44cqw;display:flex;align-items:center;justify-content:center}
.v-shop-listing .ni i{display:block}
.v-shop-listing .nt{margin:3cqw 3cqw 0;font-size:3cqw;line-height:1.25;color:#2a2f33}
.v-shop-listing .np{margin:2.4cqw 3cqw 0;font-size:6cqw;line-height:1.2;font-weight:700;letter-spacing:-.03em}
.v-shop-listing .n1{left:-47cqw;top:7cqw}
.v-shop-listing .n2{left:85cqw;top:7cqw}
.v-shop-listing .n3{left:19cqw;top:97cqw}
.v-shop-listing .n4{left:19cqw;top:-83cqw}
.v-shop-listing .n5{left:-47cqw;top:97cqw}
.v-shop-listing .n6{left:85cqw;top:97cqw}
.v-shop-listing .n7{left:-47cqw;top:-83cqw}
.v-shop-listing .n8{left:85cqw;top:-83cqw}
.v-shop-listing .card{position:absolute;left:19cqw;top:7cqw;width:62cqw;height:86cqw;border-radius:3cqw;background:color-mix(in srgb,var(--paper) 18%,#fff);box-shadow:0 3cqw 7cqw color-mix(in srgb,var(--ink) 18%,transparent),0 .6cqw 1.6cqw rgba(20,40,30,.08)}
.v-shop-listing .img{position:absolute;left:0;top:0;width:62cqw;height:44cqw;border-radius:3cqw 3cqw 0 0;overflow:hidden;background:radial-gradient(70% 70% at 50% 45%,#ffffff 0%,color-mix(in srgb,var(--paper) 35%,#f4f1ec) 70%,color-mix(in srgb,var(--paper) 55%,#e7e2da) 100%)}
.v-shop-listing .img svg{position:absolute;left:15cqw;top:5cqw;width:32cqw;height:32cqw;filter:drop-shadow(0 1.6cqw 1.6cqw rgba(60,40,20,.2));animation:shop-listing-hp 6s ease-in-out infinite}
.v-shop-listing .dots{position:absolute;left:0;right:0;bottom:2.2cqw;display:flex;justify-content:center;gap:1.2cqw}
.v-shop-listing .dots i{width:1.4cqw;height:1.4cqw;border-radius:50%;background:rgba(20,23,26,.18)}
.v-shop-listing .dots i:first-child{background:#14171a}
.v-shop-listing .rib{position:absolute;left:0;top:3cqw;padding:1.3cqw 2.4cqw 1.3cqw 3cqw;border-radius:0 2cqw 2cqw 0;background:var(--accent);color:#fff;font-size:2.4cqw;font-weight:600;line-height:1.1;animation:shop-listing-rib 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-listing .body{position:absolute;left:3.4cqw;right:3.4cqw;top:46.6cqw}
.v-shop-listing .store{display:flex;align-items:center;gap:.8cqw;font-size:2.1cqw;line-height:1.2;color:rgba(20,23,26,.55)}
.v-shop-listing .store svg{width:2.4cqw;height:2.4cqw;flex:none}
.v-shop-listing .vc{fill:var(--accent)}
.v-shop-listing .store b{color:#14171a;font-weight:600}
.v-shop-listing .tt{margin-top:1.2cqw;font-size:calc(2.75cqw * var(--k1));line-height:1.28;font-weight:500}
.v-shop-listing .rt{margin-top:1.4cqw;display:flex;align-items:center;gap:1cqw;font-size:2.3cqw;line-height:1.2;font-weight:600}
.v-shop-listing .rt span{color:rgba(20,23,26,.5);font-weight:400}
.v-shop-listing .stars{position:relative;width:13.5cqw;height:2.5cqw}
.v-shop-listing .stars svg{position:absolute;left:0;top:0;width:100%;height:100%}
.v-shop-listing .stars .bg{color:#e3e3e3}
.v-shop-listing .stars .fg{color:var(--secondary)}
.v-shop-listing .fill{position:absolute;inset:0;animation:shop-listing-stars 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-listing .bought{display:var(--hide,block);margin-top:1.3cqw;font-size:2.05cqw;line-height:1.2;color:rgba(20,23,26,.6)}
.v-shop-listing .bought b{color:#14171a;font-weight:600}
.v-shop-listing .pr{margin-top:1.4cqw;display:flex;align-items:baseline;gap:1.4cqw}
.v-shop-listing .pr b{font-size:6.2cqw;line-height:1.2;font-weight:700;letter-spacing:-.035em}
.v-shop-listing .pr s{font-size:2.5cqw;color:rgba(20,23,26,.45)}
.v-shop-listing .pr em{font-style:normal;padding:.7cqw 1.2cqw;border-radius:1cqw;background:color-mix(in srgb,var(--accent) 16%,#fff);color:color-mix(in srgb,var(--accent) 75%,#000);font-size:2.2cqw;font-weight:700;line-height:1.1}
.v-shop-listing .dl{margin-top:1.4cqw;display:flex;align-items:center;gap:1cqw;font-size:calc(2.1cqw * var(--k2));line-height:1.2;color:#1e7a4c;font-weight:500}
.v-shop-listing .dl svg{flex:none;width:1.4em;height:1.4em}
.v-shop-listing .top1{position:absolute;left:var(--tl,60cqw);top:var(--tt,3.5cqw);padding:1.5cqw 2.2cqw;border-radius:2.2cqw;background:var(--ink);color:var(--paper);display:flex;align-items:center;gap:1.2cqw;box-shadow:0 2cqw 4cqw rgba(20,23,26,.3);animation:shop-listing-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-listing .top1 b{font:800 calc(4.2cqw * var(--k3))/1.2 var(--font-display);color:var(--secondary);letter-spacing:-.04em}
.v-shop-listing .top1>span{font-size:calc(1.9cqw * var(--k3));line-height:1.2;white-space:nowrap}
.v-shop-listing .top1 small{display:var(--hide,block);font-size:1.6cqw;color:color-mix(in srgb,var(--paper) 60%,transparent)}
.v-shop-listing .cur{position:absolute;left:0;top:0;width:4.4cqw;height:4.4cqw;animation:shop-listing-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-listing .cur svg{display:block;width:100%;height:100%;filter:drop-shadow(0 .4cqw .8cqw rgba(0,0,0,.3))}
@container (max-aspect-ratio: 4/5){
  .v-shop-listing .cam{left:-15cqw;top:15.8cqw;width:130cqw;height:130cqw;--k1:1.5;--k2:2;--k3:2.2;--hide:none;--tl:38cqw;--tt:.5cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-listing .cam{left:0;top:0;width:100cqw;height:100cqw}
}
@keyframes shop-listing-cam{0%,6%{transform:scale(.58);animation-timing-function:cubic-bezier(.65,0,.35,1)}30%{transform:scale(1);animation-timing-function:ease-in-out}60%{transform:scale(1.02)}84%{transform:scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}100%{transform:scale(.58)}}
@keyframes shop-listing-nb{0%,8%{opacity:1;filter:blur(0)}30%,84%{opacity:.55;filter:blur(.5cqw)}100%{opacity:1;filter:blur(0)}}
@keyframes shop-listing-hp{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-1cqw) rotate(-2deg)}}
@keyframes shop-listing-rib{0%,28%{clip-path:inset(0 100% 0 0)}35%,84%{clip-path:inset(0 0 0 0)}90%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes shop-listing-stars{0%,30%{clip-path:inset(0 100% 0 0)}42%,100%{clip-path:inset(0 4% 0 0)}}
@keyframes shop-listing-top{0%,38%{opacity:0;transform:translateY(-2cqw) scale(.6) rotate(-12deg)}43%{opacity:1;transform:translateY(0) scale(1.08) rotate(9deg)}47%,84%{opacity:1;transform:translateY(0) scale(1) rotate(6deg)}90%,100%{opacity:0;transform:translateY(-2cqw) scale(.8) rotate(6deg)}}
@keyframes shop-listing-cur{0%,30%{opacity:0;transform:translate(96cqw,96cqw)}40%{opacity:1;transform:translate(70cqw,78cqw)}62%{opacity:1;transform:translate(52cqw,72cqw)}78%{opacity:1;transform:translate(56cqw,76cqw)}86%,100%{opacity:0;transform:translate(96cqw,100cqw)}}
`,
};

export const shopEndcard: SceneSpec = {
  id: "shop-endcard",
  slug: "mg-shop-endcard",
  name: "Brand Tape End Card",
  kind: "scene",
  job: "cta",
  language: "kinetic-poster",
  mechanic: "crossing-tapes-wordmark-cta",
  energy: "punchy",
  settle: 3.2,
  colors: { ink: "#1A120D", accent: "#FFF4E8", secondary: "#FFB38A", paper: "#FF5B2E" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["end-card", "cta", "brand"],
  fields: [
    { key: "brand", label: "Wordmark", default: "loma", maxChars: 8, role: "label" },
    { key: "tagline", label: "Tagline", default: "the fall drop is live.", maxChars: 30, role: "headline" },
    { key: "cta", label: "Button", default: "shop now", maxChars: 14, role: "cta" },
    { key: "url", label: "Store URL", default: "loma.shop", maxChars: 18, role: "label" },
  ],
  html: `<div class="tape tpb"><div class="tin">${SHOP_TAPE("30-day free returns", "carbon-neutral delivery")}</div></div>
<div class="tape tpa"><div class="tin">${SHOP_TAPE("free shipping over $50", "gift wrap on us")}</div></div>
<div class="stk sk1"><svg viewBox="0 0 400 200" aria-hidden="true"><path class="ik" d="M44 160L378 156C390 158 386 170 372 172L64 174C50 174 44 168 44 160Z"/><path class="cr" d="M42 132C36 104 38 76 50 58C58 48 74 47 88 55C100 62 114 65 124 57L142 40C148 34 160 35 165 44C186 80 236 99 298 106C346 111 378 119 386 138L386 142L42 142Z" stroke-width="6"/><g class="iks" fill="none" stroke-width="5" stroke-linecap="round"><path d="M158 64L172 52"/><path d="M174 76L189 64"/><path d="M192 87L206 76"/></g><path class="sc" d="M197 121A18 18 0 0 1 233 121" fill="none" stroke-width="7" stroke-linecap="round"/><path class="cr" d="M30 126L386 134C396 138 396 156 378 160L60 166C40 166 30 152 30 126Z" stroke-width="6"/></svg></div>
<div class="stk sk2"><svg viewBox="0 0 120 310" aria-hidden="true"><path class="iks" d="M46 22C46 4 74 4 74 22" fill="none" stroke-width="7" stroke-linecap="round"/><rect class="ik" x="32" y="18" width="56" height="40" rx="11"/><path class="cr" d="M36 64H84C99 72 104 86 104 102V280C104 294 96 302 82 302H38C24 302 16 294 16 280V102C16 86 21 72 36 64Z" stroke-width="6"/><path class="sc" d="M48 176a12 12 0 0 1 24 0M44 184H76" fill="none" stroke-width="5" stroke-linecap="round"/></svg></div>
<div class="lock">
  <div class="mk">${LOMA_MARK}</div>
  <div class="wm" data-21st-slot="brand">{{brand|chars}}</div>
</div>
<div class="tag" data-21st-slot="tagline">{{tagline}}</div>
<div class="btn"><b data-21st-slot="cta">{{cta}}</b><span data-21st-slot="url">{{url}}</span><i>${SHOP_ARROW}</i>
  <div class="cur"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 2L20 11.5L12.2 13.4L8.6 21Z" fill="#fff4e8" stroke="#1a120d" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
</div>`,
  css: `
.v-shop-endcard{color:var(--ink);font-family:var(--font-body)}
.v-shop-endcard[data-backdrop="on"]{background:radial-gradient(90% 110% at 50% 30%,color-mix(in srgb,var(--paper) 85%,#fff) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 90%,#000) 100%)}
.v-shop-endcard[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-shop-endcard .tape{position:absolute;left:-15cqw;width:130cqw;height:6.4cqw}
.v-shop-endcard .tpa{top:41cqw;transform:rotate(-5.5deg)}
.v-shop-endcard .tpb{top:42.5cqw;transform:rotate(4deg)}
.v-shop-endcard .tin{position:absolute;inset:0;overflow:hidden;box-shadow:0 1cqw 2.4cqw rgba(0,0,0,.25)}
.v-shop-endcard .tpa .tin{background:var(--accent);color:var(--ink);animation:shop-endcard-ta 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-endcard .tpb .tin{background:var(--ink);color:var(--accent);animation:shop-endcard-tb 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-endcard .run{position:absolute;left:0;top:0;height:100%;display:flex;width:216cqw}
.v-shop-endcard .tpa .run{animation:shop-endcard-ra 6s linear infinite}
.v-shop-endcard .tpb .run{animation:shop-endcard-rb 6s linear infinite}
.v-shop-endcard .run span{flex:none;width:72cqw;display:flex;align-items:center;justify-content:space-around;font:700 2.3cqw/1.2 var(--font-display);letter-spacing:-.02em;white-space:nowrap}
.v-shop-endcard .run svg{width:2cqw;height:2cqw;color:var(--paper)}
.v-shop-endcard .lock{position:absolute;left:0;right:0;top:5cqw;display:flex;justify-content:center;align-items:center;gap:1.6cqw}
.v-shop-endcard .mk{width:10cqw;height:10cqw;flex:none;color:var(--ink);animation:shop-endcard-mk 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-endcard .mk svg{display:block;width:100%;height:100%}
.v-shop-endcard .wm{display:flex;font:800 14cqw/1.2 var(--font-display);letter-spacing:-.06em;white-space:nowrap}
.v-shop-endcard .wm .c{display:block;line-height:1.2;--delay:calc(var(--i) * .12s);animation:shop-endcard-w 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-endcard .tag{position:absolute;left:6cqw;right:6cqw;top:23cqw;text-align:center;font:italic 400 4.4cqw/1.2 var(--font-display);color:var(--accent);animation:shop-endcard-tag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-endcard .btn{position:absolute;left:50%;top:31cqw;height:6.6cqw;translate:-50% 0;border-radius:3.3cqw;background:var(--ink);color:var(--paper);display:flex;align-items:center;gap:.6em;padding:0 .4em 0 1.4em;box-sizing:border-box;font-size:2.2cqw;line-height:1.2;white-space:nowrap;box-shadow:0 1.6cqw 3cqw rgba(0,0,0,.25);animation:shop-endcard-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-endcard .btn b{font-weight:600;color:var(--accent)}
.v-shop-endcard .btn span{opacity:.75;font-weight:400;color:var(--accent);margin-right:1.4em}
.v-shop-endcard .btn i{flex:none;width:2.2em;height:2.2em;border-radius:50%;background:var(--paper);display:flex;align-items:center;justify-content:center;color:var(--ink)}
.v-shop-endcard .btn i svg{width:1.1em;height:1.1em}
.v-shop-endcard .stk{position:absolute;filter:drop-shadow(0 1.2cqw 1.6cqw rgba(0,0,0,.22))}
.v-shop-endcard .stk svg{display:block;width:100%;height:100%;overflow:visible}
.v-shop-endcard .ik{fill:var(--ink)}
.v-shop-endcard .iks{stroke:var(--ink)}
.v-shop-endcard .cr{fill:#fff4e8;stroke:var(--ink)}
.v-shop-endcard .sc{stroke:color-mix(in srgb,var(--paper) 60%,var(--secondary))}
.v-shop-endcard .sk1{left:3cqw;top:12cqw;width:20cqw;height:10cqw;animation:shop-endcard-sk1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-endcard .sk2{left:84cqw;top:6.5cqw;width:7.6cqw;height:19.6cqw;animation:shop-endcard-sk2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-shop-endcard .cur{position:absolute;left:0;top:0;width:1.55em;height:1.55em;animation:shop-endcard-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-shop-endcard .cur svg{display:block;width:100%;height:100%;filter:drop-shadow(0 .3cqw .6cqw rgba(0,0,0,.3))}
@container (max-aspect-ratio: 4/5){
  .v-shop-endcard .tape{left:-30cqw;width:160cqw;height:10cqw}
  .v-shop-endcard .tpa{top:96cqw;transform:rotate(-8deg)}
  .v-shop-endcard .tpb{top:98cqw;transform:rotate(6deg)}
  .v-shop-endcard .run span{font-size:4cqw}
  .v-shop-endcard .run svg{width:3.4cqw;height:3.4cqw}
  .v-shop-endcard .lock{top:10cqh;flex-direction:column;gap:3cqw}
  .v-shop-endcard .mk{width:16cqw;height:16cqw}
  .v-shop-endcard .wm{font-size:24cqw}
  .v-shop-endcard .tag{left:8cqw;right:8cqw;top:39cqh;font-size:9cqw}
  .v-shop-endcard .btn{left:0;right:0;margin-inline:auto;width:fit-content;max-width:92cqw;translate:none;top:auto;bottom:9cqh;height:auto;min-height:15cqw;padding-block:1.2cqw;border-radius:8cqw;font-size:5.6cqw;white-space:normal}
  .v-shop-endcard .btn b,.v-shop-endcard .btn span{min-width:0}
  .v-shop-endcard .sk1{left:6cqw;top:68cqh;width:40cqw;height:20cqw}
  .v-shop-endcard .sk2{left:74cqw;top:63cqh;width:12cqw;height:31cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-shop-endcard .tape{height:7.6cqw}
  .v-shop-endcard .tpa{top:58cqw}
  .v-shop-endcard .tpb{top:60cqw}
  .v-shop-endcard .run span{font-size:3cqw}
  .v-shop-endcard .run svg{width:2.6cqw;height:2.6cqw}
  .v-shop-endcard .lock{top:12cqw;gap:2.4cqw}
  .v-shop-endcard .mk{width:14cqw;height:14cqw}
  .v-shop-endcard .wm{font-size:19cqw}
  .v-shop-endcard .tag{top:38cqw;font-size:6.4cqw}
  .v-shop-endcard .btn{top:auto;bottom:9cqw;height:10cqw;border-radius:5cqw;font-size:3.4cqw}
  .v-shop-endcard .sk1{left:4cqw;top:71cqw;width:26cqw;height:13cqw}
  .v-shop-endcard .sk2{left:85cqw;top:28cqw;width:9cqw;height:23cqw}
}
@keyframes shop-endcard-ta{0%,2%{transform:translateX(-135cqw)}16%,86%{transform:translateX(0)}97%,100%{transform:translateX(135cqw)}}
@keyframes shop-endcard-tb{0%,6%{transform:translateX(135cqw)}20%,86%{transform:translateX(0)}97%,100%{transform:translateX(-135cqw)}}
@keyframes shop-endcard-ra{0%{transform:translateX(0)}100%{transform:translateX(-72cqw)}}
@keyframes shop-endcard-rb{0%{transform:translateX(-72cqw)}100%{transform:translateX(0)}}
@keyframes shop-endcard-mk{0%,6%{opacity:0;transform:translateY(3cqw) rotate(-90deg) scale(.4)}20%{opacity:1;transform:translateY(0) rotate(0deg) scale(1)}86%{opacity:1;transform:translateY(0) rotate(0deg) scale(1)}94%,100%{opacity:0;transform:translateY(-3cqw) rotate(0deg) scale(1)}}
@keyframes shop-endcard-w{0%,8%{opacity:0;transform:translateY(.45em)}20%,86%{opacity:1;transform:translateY(0)}93%,100%{opacity:0;transform:translateY(-.3em)}}
@keyframes shop-endcard-tag{0%,18%{opacity:0;transform:translateY(2cqw);filter:blur(.6cqw)}30%,86%{opacity:1;transform:translateY(0);filter:blur(0)}93%,100%{opacity:0;transform:translateY(-2cqw);filter:blur(.6cqw)}}
@keyframes shop-endcard-btn{0%,24%{opacity:0;transform:translateY(2cqw) scale(.85)}32%{opacity:1;transform:translateY(0) scale(1.04)}36%,86%{opacity:1;transform:translateY(0) scale(1)}93%,100%{opacity:0;transform:translateY(-2cqw) scale(1)}}
@keyframes shop-endcard-sk1{0%,16%{opacity:0;transform:translate(-6cqw,3cqw) rotate(-30deg) scale(.6)}28%{opacity:1;transform:translate(0,0) rotate(-10deg) scale(1)}55%{transform:translate(0,-1cqw) rotate(-13deg) scale(1)}86%{opacity:1;transform:translate(0,0) rotate(-10deg) scale(1)}94%,100%{opacity:0;transform:translate(-6cqw,0) rotate(-20deg) scale(.8)}}
@keyframes shop-endcard-sk2{0%,20%{opacity:0;transform:translate(5cqw,3cqw) rotate(30deg) scale(.6)}32%{opacity:1;transform:translate(0,0) rotate(12deg) scale(1)}60%{transform:translate(0,-1cqw) rotate(15deg) scale(1)}86%{opacity:1;transform:translate(0,0) rotate(12deg) scale(1)}94%,100%{opacity:0;transform:translate(5cqw,0) rotate(20deg) scale(.8)}}
@keyframes shop-endcard-cur{0%,38%{opacity:0;left:120%;top:420%}46%{opacity:1;left:100%;top:130%}52%,100%{opacity:1;left:calc(100% - 1.6em);top:55%}}
`,
};

export const SHOP_SCENES: SceneSpec[] = [shopTurntable, shopPriceSlash, shopAddToCart, shopUnboxing, shopColorways, shopFlashSale, shopReviewWall, shopBundle, shopListing, shopEndcard];
