// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const codeCliBrowser: SceneSpec = {
  id: "code-cli-browser",
  slug: "mg-code-cli-browser",
  name: "Terminal To Live Site",
  kind: "scene",
  job: "code",
  language: "pixel-terminal",
  mechanic: "terminal-deploy-to-live-site",
  energy: "default",
  settle: 3.1,
  colors: { ink: "#D7E5DF", accent: "#3EF0A6", secondary: "#E0561F", paper: "#040A08" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["deploy", "terminal", "cli"],
  fields: [
    { key: "command", label: "Command", default: "lumen deploy --prod", maxChars: 24, role: "label" },
    { key: "headline", label: "Site headline", default: "Notes that write themselves.", maxChars: 34, role: "headline" },
    { key: "toast", label: "Toast", default: "Deployed to production", maxChars: 28, role: "caption" },
  ],
  html: `<div class="term">
  <div class="bar"><i></i><i></i><i></i><span>~/acme-notes · zsh</span></div>
  <div class="body">
    <div class="l1"><span class="pr">acme-notes</span> <span class="ar">❯</span> <span class="cmd" data-21st-slot="command">{{command|chars}}</span><i class="car"></i></div>
    <div class="log">
      <div class="dim">▲ Lumen CLI 3.2.0</div>
      <div><span class="ok">✓</span> <span class="mut">Linked to</span> acme/notes</div>
      <div><span class="ok">✓</span> <span class="mut">Built 48 pages in</span> 3.1s</div>
      <div><span class="ok">✓</span> <span class="mut">Uploaded</span> 212 files <span class="dim">(1.8 MB)</span></div>
      <div><span class="ok">✓</span> <span class="mut">Synced to</span> 14 edge regions</div>
      <div class="live"><i class="pulse"></i>Live → <u>notes.acme.app</u></div>
    </div>
    <div class="nxt"><span class="pr">acme-notes</span> <span class="ar">❯</span> <i class="car"></i></div>
  </div>
</div>
<div class="brw"><div class="br">
  <div class="chrome"><i></i><i></i><i></i><div class="url"><svg viewBox="0 0 16 16" fill="none" stroke="#4a4740" stroke-width="1.6"><rect x="3.5" y="7" width="9" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/></svg>notes.acme.app</div><div class="load"></div></div>
  <div class="pg">
    <div class="sk"><i style="left:2.4cqw;top:1.5cqw;width:9cqw;height:1.6cqw"></i><i style="right:2.4cqw;top:1.5cqw;width:16cqw;height:1.6cqw"></i><i style="left:17cqw;top:7.8cqw;width:20cqw;height:3.2cqw"></i><i style="left:14cqw;top:12cqw;width:26cqw;height:3.2cqw"></i><i style="left:19cqw;top:16.6cqw;width:16cqw;height:1.2cqw"></i><i style="left:5cqw;top:24.4cqw;width:44cqw;height:16cqw"></i></div>
    <div class="c1">
      <div class="nav"><b><i></i>acme notes</b><span>Product</span><span>Pricing</span><span>Docs</span><em>Sign in</em></div>
      <div class="hero"><small>New · AI follow-ups</small><h6 data-21st-slot="headline">{{headline|words}}</h6><p>Capture the meeting. Get the summary. Ship the follow-ups.</p><div class="cta"><span>Get started</span><span>Watch demo</span></div></div>
    </div>
    <div class="c2"><div class="side"><i></i><i></i><i></i><i></i></div><div class="doc"><b>Weekly sync · Oct 7</b><p>Summary by acme notes · 4 action items</p><i></i><i></i><i></i></div></div>
  </div>
</div></div>
<div class="toast"><b>✓</b><span class="tt" data-21st-slot="toast">{{toast}}</span><span class="ms">9.8s</span></div>`,
  css: `
.v-code-cli-browser{color:var(--ink);font-family:var(--font-body)}
.v-code-cli-browser[data-backdrop="on"]{background:linear-gradient(color-mix(in srgb,var(--accent) 4.5%,transparent) 1px,transparent 1px) 0 0/4cqw 4cqw,linear-gradient(90deg,color-mix(in srgb,var(--accent) 4.5%,transparent) 1px,transparent 1px) 0 0/4cqw 4cqw,radial-gradient(70% 85% at 78% 30%,color-mix(in srgb,var(--accent) 16%,var(--paper)) 0%,color-mix(in srgb,var(--accent) 4%,var(--paper)) 55%,var(--paper) 100%)}
.v-code-cli-browser[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-code-cli-browser .term{position:absolute;left:5cqw;top:9.4cqw;width:46cqw;height:31.4cqw;border-radius:1.3cqw;background:color-mix(in srgb,var(--paper) 94%,transparent);box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 16%,transparent),0 2cqw 4.4cqw rgba(0,0,0,.55);overflow:hidden;transform-origin:0 50%;animation:code-cli-browser-term 6s linear infinite}
.v-code-cli-browser .bar{height:2.8cqw;display:flex;align-items:center;gap:.55cqw;padding:0 1.2cqw;border-bottom:1px solid rgba(255,255,255,.06);font-family:var(--font-mono);font-size:1cqw;color:color-mix(in srgb,var(--ink) 50%,var(--paper))}
.v-code-cli-browser .bar i{width:.9cqw;height:.9cqw;border-radius:50%;background:color-mix(in srgb,var(--ink) 18%,var(--paper))}
.v-code-cli-browser .bar span{margin-left:auto;margin-right:auto;transform:translateX(-1.6cqw)}
.v-code-cli-browser .body{padding:1.5cqw 2cqw;font-family:var(--font-mono);font-size:1.38cqw;line-height:2.4cqw;white-space:nowrap}
.v-code-cli-browser .pr{color:var(--accent)}
.v-code-cli-browser .ar{color:color-mix(in srgb,var(--ink) 55%,var(--paper))}
.v-code-cli-browser .cmd{color:color-mix(in srgb,var(--ink) 30%,#fff)}
.v-code-cli-browser .cmd .c{display:inline-block;vertical-align:top;overflow:hidden;max-width:0;--delay:calc(var(--i) * .034s);animation:code-cli-browser-ch 6s linear infinite}
.v-code-cli-browser .car{display:inline-block;width:.62em;height:1.15em;vertical-align:-.2em}
.v-code-cli-browser .car::before{content:"";display:block;width:100%;height:100%;background:var(--accent);animation:code-cli-browser-blink 1s steps(1) infinite}
.v-code-cli-browser .l1 .car{animation:code-cli-browser-car 6s linear infinite}
.v-code-cli-browser .log{clip-path:inset(0 0 100% 0);animation:code-cli-browser-log 6s linear infinite}
.v-code-cli-browser .dim{color:color-mix(in srgb,var(--ink) 50%,var(--paper))}
.v-code-cli-browser .ok{color:var(--accent)}
.v-code-cli-browser .mut{color:color-mix(in srgb,var(--ink) 72%,var(--paper))}
.v-code-cli-browser .live{color:color-mix(in srgb,var(--ink) 25%,#fff)}
.v-code-cli-browser .live u{text-decoration:none;color:var(--accent);border-bottom:.12cqw solid color-mix(in srgb,var(--accent) 60%,transparent);text-shadow:0 0 1cqw color-mix(in srgb,var(--accent) 55%,transparent)}
.v-code-cli-browser .pulse{display:inline-block;width:.9cqw;height:.9cqw;margin-right:.6cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 1cqw var(--accent);vertical-align:.05em;animation:code-cli-browser-pulse 1s cubic-bezier(.2,.8,.2,1) infinite}
.v-code-cli-browser .nxt{opacity:0;animation:code-cli-browser-nxt 6s linear infinite}
.v-code-cli-browser .brw{position:absolute;left:41cqw;top:12.2cqw;width:54cqw;height:39cqw;transform-origin:0 0}
.v-code-cli-browser .br{position:absolute;inset:0;border-radius:1.3cqw;background:#fff;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.1),0 3cqw 6cqw rgba(0,0,0,.6),0 0 6cqw color-mix(in srgb,var(--accent) 12%,transparent);animation:code-cli-browser-br 6s linear infinite}
.v-code-cli-browser .chrome{position:relative;height:3cqw;display:flex;align-items:center;gap:.5cqw;padding:0 1.2cqw;background:#efeeea;border-bottom:1px solid #e0ded8}
.v-code-cli-browser .chrome i{width:.85cqw;height:.85cqw;border-radius:50%;background:#d3d0c8}
.v-code-cli-browser .url{position:absolute;left:50%;top:.55cqw;transform:translateX(-50%);height:1.9cqw;width:24cqw;display:flex;align-items:center;justify-content:center;gap:.5cqw;border-radius:.6cqw;background:#fff;box-shadow:0 0 0 1px #e3e1da;font-family:var(--font-mono);font-size:.95cqw;color:#4a4740}
.v-code-cli-browser .url svg{width:1cqw;height:1cqw}
.v-code-cli-browser .load{position:absolute;left:0;right:0;bottom:0;height:.3cqw;background:var(--accent);transform-origin:0 50%;animation:code-cli-browser-load 6s linear infinite}
.v-code-cli-browser .pg{position:absolute;left:0;right:0;top:3cqw;bottom:0;background:radial-gradient(70% 60% at 50% 0%,color-mix(in srgb,var(--secondary) 18%,#fff) 0%,transparent 70%),linear-gradient(180deg,color-mix(in srgb,var(--secondary) 4%,#fff),color-mix(in srgb,var(--secondary) 8%,#fff));color:#1f1a14;overflow:hidden}
.v-code-cli-browser .sk{position:absolute;inset:0;animation:code-cli-browser-sk 6s linear infinite}
.v-code-cli-browser .sk i{position:absolute;border-radius:.5cqw;background:linear-gradient(90deg,#efe6dc,#f8f1ea,#efe6dc);background-size:200% 100%;animation:code-cli-browser-shim 1s linear infinite}
.v-code-cli-browser .c1{position:absolute;inset:0;animation:code-cli-browser-c1 6s linear infinite}
.v-code-cli-browser .c2{position:absolute;left:5cqw;right:5cqw;top:24.4cqw;height:16cqw;border-radius:1.2cqw;background:#fff;box-shadow:0 0 0 1px rgba(60,40,20,.08),0 1.6cqw 3cqw rgba(120,70,30,.18);padding:1.4cqw;display:grid;grid-template-columns:9cqw 1fr;gap:1.2cqw;animation:code-cli-browser-c2 6s linear infinite}
.v-code-cli-browser .nav{position:absolute;left:2.4cqw;right:2.4cqw;top:1.5cqw;display:flex;align-items:center;gap:2cqw;font-size:1cqw;color:#7a6f63}
.v-code-cli-browser .nav b{display:flex;align-items:center;gap:.6cqw;margin-right:auto;font-weight:700;font-size:1.4cqw;color:#1f1a14;letter-spacing:-.03em}
.v-code-cli-browser .nav b i{width:1.6cqw;height:1.6cqw;border-radius:50%;background:radial-gradient(circle at 35% 35%,color-mix(in srgb,var(--secondary) 45%,#fff),var(--secondary))}
.v-code-cli-browser .nav em{font-style:normal;color:#1f1a14;padding:.35cqw .9cqw;border-radius:2cqw;box-shadow:0 0 0 1px rgba(31,26,20,.18)}
.v-code-cli-browser .hero{position:absolute;left:3cqw;right:3cqw;top:6cqw;text-align:center}
.v-code-cli-browser .hero small{display:inline-block;font-size:.95cqw;color:color-mix(in srgb,var(--secondary) 80%,#000);background:color-mix(in srgb,var(--secondary) 16%,#fff);padding:.25cqw .8cqw;border-radius:2cqw}
.v-code-cli-browser .hero h6{margin:.8cqw auto 0;max-width:30cqw;font-family:var(--font-display);font-weight:400;font-size:4.4cqw;line-height:.98;letter-spacing:-.02em;text-wrap:balance}
.v-code-cli-browser .hero h6 .w:last-child{color:var(--secondary);font-style:italic}
.v-code-cli-browser .hero p{margin:.8cqw 0 0;font-size:1.15cqw;color:#7a6f63}
.v-code-cli-browser .cta{display:flex;justify-content:center;gap:.8cqw;margin-top:1.2cqw;font-size:1.05cqw;font-weight:500}
.v-code-cli-browser .cta span{padding:.55cqw 1.3cqw;border-radius:2cqw;box-shadow:0 0 0 1px rgba(31,26,20,.16)}
.v-code-cli-browser .cta span:first-child{background:#1f1a14;color:#fff;box-shadow:0 .6cqw 1.2cqw rgba(31,26,20,.25)}
.v-code-cli-browser .c2 .side{display:grid;gap:.6cqw;align-content:start}
.v-code-cli-browser .c2 .side i{height:1.3cqw;border-radius:.4cqw;background:#f3ece4}
.v-code-cli-browser .c2 .side i:first-child{background:color-mix(in srgb,var(--secondary) 18%,#fff)}
.v-code-cli-browser .c2 .doc b{display:block;font-size:1.25cqw;font-weight:600}
.v-code-cli-browser .c2 .doc p{margin:.5cqw 0 0;font-size:.95cqw;color:#8a7f73}
.v-code-cli-browser .c2 .doc i{display:block;height:.8cqw;margin-top:.7cqw;border-radius:.4cqw;background:#f1ebe4}
.v-code-cli-browser .c2 .doc i:nth-of-type(2){width:80%}
.v-code-cli-browser .c2 .doc i:nth-of-type(3){width:60%;background:color-mix(in srgb,var(--secondary) 12%,#fff)}
.v-code-cli-browser .toast{position:absolute;right:5cqw;top:5.2cqw;display:flex;align-items:center;gap:.7cqw;padding:.65cqw 1.2cqw;border-radius:2cqw;background:color-mix(in srgb,var(--paper) 88%,var(--accent) 6%);box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 35%,transparent),0 1cqw 2cqw rgba(0,0,0,.4);font-size:1.15cqw;color:color-mix(in srgb,var(--ink) 25%,#fff);white-space:nowrap;animation:code-cli-browser-toast 6s linear infinite}
.v-code-cli-browser .toast b{color:var(--accent)}
.v-code-cli-browser .toast .ms{font-family:var(--font-mono);font-size:.9em;color:color-mix(in srgb,var(--ink) 60%,var(--paper))}
@container (max-aspect-ratio: 4/5){
  .v-code-cli-browser .toast{right:auto;left:50%;top:7cqh;translate:-50% 0;font-size:5.4cqw;gap:2.4cqw;padding:2.2cqw 4.4cqw;border-radius:8cqw}
  .v-code-cli-browser .brw{left:6cqw;top:15.5cqh;transform:scale(1.63)}
  .v-code-cli-browser .term{left:6cqw;top:59cqh;width:88cqw;height:34cqh;border-radius:3.6cqw;transform-origin:50% 50%}
  .v-code-cli-browser .bar{height:6cqw;font-size:3cqw;gap:1.6cqw;padding:0 3.4cqw}
  .v-code-cli-browser .bar i{width:2.2cqw;height:2.2cqw}
  .v-code-cli-browser .bar span{transform:translateX(-4cqw)}
  .v-code-cli-browser .body{padding:3.4cqw 4.4cqw;font-size:3.4cqw;line-height:5.4cqw}
  .v-code-cli-browser .l1{font-size:5.6cqw;line-height:8.4cqw}
  .v-code-cli-browser .l1 .pr,.v-code-cli-browser .l1 .ar{display:none}
  .v-code-cli-browser .pulse{width:2.2cqw;height:2.2cqw;margin-right:1.6cqw}
  .v-code-cli-browser .live u{border-bottom-width:.3cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-code-cli-browser .toast{right:auto;left:50%;top:5cqw;translate:-50% 0;font-size:2.4cqw;gap:1.2cqw;padding:1.1cqw 2.2cqw;border-radius:4cqw}
  .v-code-cli-browser .brw{left:15cqw;top:13.5cqw;transform:scale(1.3)}
  .v-code-cli-browser .term{left:15cqw;top:65cqw;width:70cqw;height:30.5cqw;border-radius:2cqw;transform-origin:50% 50%}
  .v-code-cli-browser .bar{height:3.6cqw;font-size:1.6cqw;gap:.9cqw;padding:0 1.8cqw}
  .v-code-cli-browser .bar i{width:1.2cqw;height:1.2cqw}
  .v-code-cli-browser .bar span{transform:translateX(-2cqw)}
  .v-code-cli-browser .body{padding:1.8cqw 2.6cqw;font-size:1.85cqw;line-height:3cqw}
  .v-code-cli-browser .l1{font-size:2.4cqw;line-height:3.6cqw}
  .v-code-cli-browser .pulse{width:1.2cqw;height:1.2cqw;margin-right:.9cqw}
}
@keyframes code-cli-browser-term{0%{transform:translateY(1.6cqw);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}6%,36%{transform:translateY(0);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}46%,100%{transform:translateX(-1.2cqw) scale(.97);opacity:.94}}
@keyframes code-cli-browser-ch{0%,6%{max-width:0}6.2%,100%{max-width:1.5em}}
@keyframes code-cli-browser-car{0%,17%{opacity:1}18%,100%{opacity:0}}
@keyframes code-cli-browser-blink{0%{opacity:1}50%,100%{opacity:0}}
@keyframes code-cli-browser-log{0%,18.5%{clip-path:inset(0 0 100% 0);animation-timing-function:steps(6,start)}34%,100%{clip-path:inset(0 0 0 0)}}
@keyframes code-cli-browser-pulse{0%{transform:scale(1.4);opacity:1}100%{transform:scale(.9);opacity:.55}}
@keyframes code-cli-browser-nxt{0%,35.9%{opacity:0}36%,100%{opacity:1}}
@keyframes code-cli-browser-br{0%,35%{transform:translateX(10cqw) scale(.95);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}45%,100%{transform:translateX(0) scale(1);opacity:1}}
@keyframes code-cli-browser-load{0%,37%{transform:scaleX(0);opacity:1;animation-timing-function:cubic-bezier(.3,0,.2,1)}44%{transform:scaleX(1);opacity:1}47%,100%{transform:scaleX(1);opacity:0}}
@keyframes code-cli-browser-sk{0%,40%{opacity:1}45%,100%{opacity:0}}
@keyframes code-cli-browser-shim{0%{background-position:100% 0}100%{background-position:-100% 0}}
@keyframes code-cli-browser-c1{0%,40%{opacity:0;transform:translateY(.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}46%,100%{opacity:1;transform:translateY(0)}}
@keyframes code-cli-browser-c2{0%,42%{opacity:0;transform:translateY(3cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}49%,100%{opacity:1;transform:translateY(0)}}
@keyframes code-cli-browser-toast{0%,44%{opacity:0;transform:translateY(-1.2cqw) scale(.9);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}49%,100%{opacity:1;transform:translateY(0) scale(1)}}
`,
};

export const codeDiffAccept: SceneSpec = {
  id: "code-diff-accept",
  slug: "mg-code-diff-accept",
  name: "Accept Diff Live Preview",
  kind: "scene",
  job: "code",
  language: "product-ui",
  mechanic: "diff-accept-live-preview",
  energy: "default",
  settle: 3.5,
  colors: { ink: "#1F2328", accent: "#6D4AFF", secondary: "#1A7F37", paper: "#E1E4EC" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["ai-coding", "diff", "hot-reload"],
  fields: [
    { key: "prompt", label: "Prompt", default: "Make the call to action stand out", maxChars: 40, role: "caption" },
    { key: "plan", label: "Plan name", default: "Pro", maxChars: 12, role: "label" },
    { key: "price", label: "Price", default: "$24", maxChars: 6, role: "value" },
    { key: "cta", label: "Button", default: "Start free trial →", maxChars: 22, role: "cta" },
  ],
  html: `<div class="sc">
  <div class="ed">
    <div class="tabs"><div class="tab on"><i>ts</i>PricingCard.tsx<b></b></div><div class="tab">page.tsx</div></div>
    <div class="sugsp"></div>
    <div class="code">
<div class="ln"><span class="no">12</span><span class="sg"></span><span class="tx"><span class="k">export function</span> <span class="f">PricingCard</span>() {</span></div>
<div class="ln"><span class="no">13</span><span class="sg"></span><span class="tx">  <span class="k">return</span> (</span></div>
<div class="ln"><span class="no">14</span><span class="sg"></span><span class="tx">    &lt;<span class="c">Card</span> <span class="at">className</span>=<span class="s">"p-6"</span>&gt;</span></div>
<div class="ln"><span class="no">15</span><span class="sg"></span><span class="tx">      &lt;<span class="c">Price</span> <span class="at">value</span>={24} <span class="at">period</span>=<span class="s">"mo"</span> /&gt;</span></div>
<div class="ln del"><span class="no">16</span><span class="sg">−</span><span class="tx">      &lt;<span class="c">Button</span> <span class="at">variant</span>=<mark class="s">"ghost"</mark> <span class="at">size</span>=<mark class="s">"sm"</mark>&gt;</span></div>
<div class="ln del"><span class="no">17</span><span class="sg">−</span><span class="tx">        <mark>Subscribe</mark></span></div>
<div class="mv">
<div class="ln add"><span class="no"><span class="o">18</span><span class="n">16</span></span><span class="sg">+</span><span class="tx">      &lt;<span class="c">Button</span> <span class="at">variant</span>=<mark class="s">"primary"</mark> <span class="at">size</span>=<mark class="s">"lg"</mark></span></div>
<div class="ln add"><span class="no"><span class="o">19</span><span class="n">17</span></span><span class="sg">+</span><span class="tx">        <span class="at">className</span>=<mark class="s">"w-full rounded-full"</mark>&gt;</span></div>
<div class="ln add"><span class="no"><span class="o">20</span><span class="n">18</span></span><span class="sg">+</span><span class="tx">        <mark>Start free trial</mark></span></div>
<div class="ln"><span class="no"><span class="o">21</span><span class="n">19</span></span><span class="sg"></span><span class="tx">      &lt;/<span class="c">Button</span>&gt;</span></div>
<div class="ln"><span class="no"><span class="o">22</span><span class="n">20</span></span><span class="sg"></span><span class="tx">    &lt;/<span class="c">Card</span>&gt;</span></div>
<div class="ln"><span class="no"><span class="o">23</span><span class="n">21</span></span><span class="sg"></span><span class="tx">  )</span></div>
<div class="ln"><span class="no"><span class="o">24</span><span class="n">22</span></span><span class="sg"></span><span class="tx">}</span></div>
</div>
    </div>
  </div>
  <div class="sug">
    <b class="who">✦ Lumen</b>
    <span class="pt" data-21st-slot="prompt">{{prompt}}</span>
    <span class="acts"><span class="q"><em>Reject</em><strong>Accept<kbd>⌘↵</kbd></strong></span><span class="a">✓ Applied <span>+3 −2</span></span></span>
  </div>
  <div class="pv">
    <div class="pvh"><i></i>Preview<b class="hot">↻ Hot reload</b><span>localhost:3000</span></div>
    <div class="cv">
      <div class="pc">
        <div class="hd"><span data-21st-slot="plan">{{plan}}</span><em>Most popular</em></div>
        <div class="pr"><span class="pv1" data-21st-slot="price">{{price}}</span><span class="per">/ month</span></div>
        <p>For teams shipping every week.</p>
        <ul><li>Unlimited projects</li><li>AI drafts and reviews</li><li>Priority support</li></ul>
        <div class="bz"><div class="ob">Subscribe</div><div class="nb" data-21st-slot="cta">{{cta}}</div></div>
      </div>
    </div>
  </div>
  <div class="cur"><svg viewBox="0 0 24 24"><path d="M4 2.5v17.2l4.6-4.3 3 6.6 3-1.4-3-6.4h6.3Z" fill="#1f2328" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg></div>
</div>`,
  css: `
.v-code-diff-accept{color:var(--ink);font-family:var(--font-body)}
.v-code-diff-accept[data-backdrop="on"]{background:radial-gradient(80% 90% at 15% 0%,#fff 0%,color-mix(in srgb,var(--paper) 55%,#fff) 55%,var(--paper) 100%)}
.v-code-diff-accept .sc{position:absolute;inset:0;animation:code-diff-accept-sc 6s linear infinite}
.v-code-diff-accept .ed,.v-code-diff-accept .pv{position:absolute;top:5.4cqw;height:45.4cqw;border-radius:1.4cqw;background:#fff;overflow:hidden;box-shadow:0 0 0 1px rgba(31,35,40,.08),0 1.8cqw 3.8cqw rgba(31,35,40,.13),0 .3cqw .8cqw rgba(31,35,40,.06)}
.v-code-diff-accept .ed,.v-code-diff-accept .pv,.v-code-diff-accept .sug{color:#1f2328}
.v-code-diff-accept .ed{left:3.5cqw;width:55cqw}
.v-code-diff-accept .pv{left:61cqw;width:35.5cqw}
.v-code-diff-accept .tabs{height:3.2cqw;display:flex;align-items:flex-end;gap:.2cqw;padding:0 1cqw;background:#f6f8fa;border-bottom:1px solid #e5e8ec;font-size:1.05cqw;color:#656d76}
.v-code-diff-accept .tab{display:flex;align-items:center;gap:.6cqw;height:2.5cqw;padding:0 1.2cqw;border-radius:.7cqw .7cqw 0 0;white-space:nowrap}
.v-code-diff-accept .tab.on{background:#fff;color:#1f2328;box-shadow:0 0 0 1px #e5e8ec}
.v-code-diff-accept .tab i{font-style:normal;font-family:var(--font-mono);font-size:.8cqw;font-weight:700;color:#fff;background:#3178c6;padding:.05cqw .3cqw;border-radius:.2cqw}
.v-code-diff-accept .tab b{width:.7cqw;height:.7cqw;border-radius:50%;background:#d4a72c}
.v-code-diff-accept .sugsp{height:3.6cqw}
.v-code-diff-accept .sug{position:absolute;left:3.5cqw;top:8.6cqw;width:55cqw;height:3.6cqw;box-sizing:border-box;display:flex;align-items:center;gap:.8cqw;padding:0 1.2cqw;font-size:1.15cqw;background:color-mix(in srgb,var(--accent) 6%,#fff);border-top:1px solid #e5e8ec;border-bottom:1px solid color-mix(in srgb,var(--accent) 14%,#fff);white-space:nowrap}
.v-code-diff-accept .who{color:var(--accent);font-weight:600}
.v-code-diff-accept .pt{color:#3b4148;overflow:hidden;text-overflow:ellipsis}
.v-code-diff-accept .acts{position:relative;margin-left:auto;display:grid;align-items:center;justify-items:end}
.v-code-diff-accept .q,.v-code-diff-accept .a{grid-area:1/1;display:flex;align-items:center;gap:.6cqw}
.v-code-diff-accept .q{animation:code-diff-accept-q 6s linear infinite}
.v-code-diff-accept .q em{font-style:normal;padding:.4cqw .9cqw;border-radius:.6cqw;color:#656d76;font-size:.92em}
.v-code-diff-accept .q strong{font-weight:500;font-size:.92em;padding:.45cqw 1cqw;border-radius:.6cqw;background:var(--accent);color:#fff;box-shadow:0 .4cqw .9cqw color-mix(in srgb,var(--accent) 35%,transparent);animation:code-diff-accept-btn 6s linear infinite}
.v-code-diff-accept .q strong kbd{font-family:var(--font-mono);font-size:.8em;opacity:.75;margin-left:.3cqw}
.v-code-diff-accept .a{color:var(--secondary);font-weight:500;opacity:0;animation:code-diff-accept-a 6s linear infinite}
.v-code-diff-accept .a span{color:#656d76;font-family:var(--font-mono);font-size:.85em}
.v-code-diff-accept .code{padding:1cqw 0;font-family:var(--font-mono);font-size:1.3cqw}
.v-code-diff-accept .code{--lh:2.5cqw}
.v-code-diff-accept .ln{position:relative;display:flex;height:var(--lh);line-height:var(--lh)}
.v-code-diff-accept .no{position:relative;width:3.6cqw;flex:none;text-align:right;padding-right:.8cqw;color:#8c959f}
.v-code-diff-accept .no span{position:absolute;right:.8cqw;top:0}
.v-code-diff-accept .sg{width:1.8cqw;flex:none;text-align:center}
.v-code-diff-accept .tx{color:#1f2328;white-space:pre}
.v-code-diff-accept .k{color:#cf222e}
.v-code-diff-accept .f{color:#8250df}
.v-code-diff-accept .c{color:#116329}
.v-code-diff-accept .at{color:#0550ae}
.v-code-diff-accept .s{color:#0a3069}
.v-code-diff-accept .del{background:#ffebe9;transform-origin:50% 0;animation:code-diff-accept-del 6s linear infinite}
.v-code-diff-accept .del .sg{color:#cf222e}
.v-code-diff-accept .del mark{background:#ffcecb;color:inherit;border-radius:.2cqw}
.v-code-diff-accept .mv{animation:code-diff-accept-mv 6s linear infinite}
.v-code-diff-accept .add::before{content:"";position:absolute;inset:0;background:#dafbe1;animation:code-diff-accept-fade 6s linear infinite}
.v-code-diff-accept .add>*{position:relative}
.v-code-diff-accept .add .sg{color:#1a7f37;animation:code-diff-accept-fade 6s linear infinite}
.v-code-diff-accept .add mark{background:#aceebb;color:inherit;border-radius:.2cqw;animation:code-diff-accept-mk 6s linear infinite}
.v-code-diff-accept .o{animation:code-diff-accept-o 6s linear infinite}
.v-code-diff-accept .n{opacity:0;animation:code-diff-accept-n 6s linear infinite}
.v-code-diff-accept .pvh{height:3.2cqw;display:flex;align-items:center;gap:.7cqw;padding:0 1.2cqw;background:#f6f8fa;border-bottom:1px solid #e5e8ec;font-size:1.05cqw;color:#1f2328;white-space:nowrap}
.v-code-diff-accept .pvh>i{width:.75cqw;height:.75cqw;border-radius:50%;background:#2da44e;box-shadow:0 0 .6cqw rgba(45,164,78,.6)}
.v-code-diff-accept .pvh span{margin-left:auto;font-family:var(--font-mono);font-size:.9cqw;color:#8c959f}
.v-code-diff-accept .hot{font-size:.9cqw;font-weight:500;color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,#fff);padding:.2cqw .7cqw;border-radius:2cqw;animation:code-diff-accept-hot 6s linear infinite}
.v-code-diff-accept .cv{position:absolute;left:0;right:0;top:3.2cqw;bottom:0;background:radial-gradient(80% 70% at 50% 30%,color-mix(in srgb,var(--accent) 4%,#fff) 0%,color-mix(in srgb,var(--paper) 50%,#fff) 100%)}
.v-code-diff-accept .pc{position:absolute;left:4.6cqw;right:4.6cqw;top:7cqw;padding:2cqw;border-radius:1.5cqw;background:#fff;box-shadow:0 0 0 1px rgba(31,35,40,.06),0 1.6cqw 3cqw color-mix(in srgb,var(--accent) 12%,transparent)}
.v-code-diff-accept .pc .hd{display:flex;align-items:center;justify-content:space-between;font-weight:600;font-size:1.35cqw;white-space:nowrap}
.v-code-diff-accept .pc .hd em{font-style:normal;font-weight:500;font-size:.9cqw;color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,#fff);padding:.2cqw .7cqw;border-radius:2cqw}
.v-code-diff-accept .pr{display:flex;align-items:baseline;gap:.3cqw;margin-top:.9cqw;font-family:var(--font-display);font-size:4.2cqw;font-weight:600;letter-spacing:-.05em;line-height:1.1;white-space:nowrap}
.v-code-diff-accept .pr .per{font-family:var(--font-body);font-size:1.2cqw;font-weight:400;color:#8c959f;letter-spacing:0}
.v-code-diff-accept .pc p{margin:.6cqw 0 0;font-size:1.05cqw;color:#656d76}
.v-code-diff-accept .pc ul{list-style:none;margin:1.3cqw 0 0;padding:1.3cqw 0 0;border-top:1px solid #eef0f3;display:grid;gap:.75cqw;font-size:1.08cqw;color:#3b4148}
.v-code-diff-accept .pc li{display:flex;align-items:center;gap:.7cqw}
.v-code-diff-accept .pc li::before{content:"✓";display:grid;place-items:center;width:1.3cqw;height:1.3cqw;border-radius:50%;font-size:.8cqw;font-weight:700;color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,#fff)}
.v-code-diff-accept .bz{position:relative;height:3.6cqw;margin-top:1.6cqw}
.v-code-diff-accept .ob{position:absolute;left:0;top:.5cqw;height:2.6cqw;padding:0 1.1cqw;display:flex;align-items:center;border-radius:.5cqw;box-shadow:inset 0 0 0 1px #d0d7de;font-size:1.05cqw;color:#656d76;animation:code-diff-accept-ob 6s linear infinite}
.v-code-diff-accept .nb{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:.6cqw;border-radius:3cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent));color:#fff;font-size:1.3cqw;font-weight:600;white-space:nowrap;box-shadow:0 .9cqw 1.8cqw color-mix(in srgb,var(--accent) 38%,transparent),inset 0 1px 0 rgba(255,255,255,.25);animation:code-diff-accept-nb 6s linear infinite}
.v-code-diff-accept .nb::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 0 .3cqw color-mix(in srgb,var(--accent) 55%,transparent);opacity:0;animation:code-diff-accept-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-code-diff-accept .cur{position:absolute;left:0;top:0;width:2.4cqw;height:2.4cqw;filter:drop-shadow(0 .3cqw .5cqw rgba(0,0,0,.3));animation:code-diff-accept-cur 6s linear infinite}
.v-code-diff-accept .cur svg{width:100%;height:100%}
@container (max-aspect-ratio: 4/5){
  .v-code-diff-accept .sug{left:6cqw;top:6cqh;width:88cqw;height:auto;flex-wrap:wrap;gap:2.4cqw 3cqw;padding:4cqw 5cqw;font-size:4cqw;white-space:normal;border:none;border-radius:4cqw;box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 16%,#fff),0 2cqw 5cqw rgba(31,35,40,.12)}
  .v-code-diff-accept .pt{order:3;flex-basis:100%;font-size:6cqw;font-weight:600;line-height:1.3;letter-spacing:-.02em;color:#1f2328}
  .v-code-diff-accept .q{gap:1.6cqw}
  .v-code-diff-accept .q em,.v-code-diff-accept .q strong{padding:1cqw 2.4cqw;border-radius:1.6cqw}
  .v-code-diff-accept .sugsp{height:0}
  .v-code-diff-accept .ed{left:6cqw;top:27cqh;width:58.6cqw;height:33cqw;transform-origin:0 0;transform:scale(1.5)}
  .v-code-diff-accept .pv{left:6cqw;top:56cqh;width:88cqw;height:38cqh;border-radius:4cqw}
  .v-code-diff-accept .pvh{height:8cqw;gap:2cqw;padding:0 4cqw;font-size:3.4cqw}
  .v-code-diff-accept .pvh>i{width:2cqw;height:2cqw}
  .v-code-diff-accept .pvh span{font-size:2.8cqw}
  .v-code-diff-accept .hot{font-size:2.8cqw;padding:.6cqw 2cqw}
  .v-code-diff-accept .cv{top:8cqw}
  .v-code-diff-accept .pc{left:6cqw;right:6cqw;top:4cqw;padding:4.4cqw 5cqw;border-radius:4cqw}
  .v-code-diff-accept .pc .hd{font-size:6cqw}
  .v-code-diff-accept .pc .hd em{font-size:3.2cqw;padding:.6cqw 2cqw}
  .v-code-diff-accept .pr{font-size:13cqw;margin-top:1cqw;gap:1cqw}
  .v-code-diff-accept .pr .per{font-size:4cqw}
  .v-code-diff-accept .pc p{font-size:3.6cqw;margin-top:1.2cqw}
  .v-code-diff-accept .pc ul{display:none}
  .v-code-diff-accept .bz{height:11cqw;margin-top:3cqw}
  .v-code-diff-accept .ob{top:1.5cqw;height:8cqw;padding:0 3cqw;font-size:3.6cqw;border-radius:1.6cqw}
  .v-code-diff-accept .nb{font-size:5.6cqw;border-radius:8cqw}
  .v-code-diff-accept .nb::after{box-shadow:0 0 0 .8cqw color-mix(in srgb,var(--accent) 55%,transparent)}
  .v-code-diff-accept .cur{width:6cqw;height:6cqw;animation-name:code-diff-accept-curv}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-code-diff-accept .sug{left:5cqw;top:6cqw;width:90cqw;height:auto;flex-wrap:wrap;gap:1.4cqw 1.8cqw;padding:2.4cqw 3cqw;font-size:2.2cqw;white-space:normal;border:none;border-radius:2.4cqw;box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 16%,#fff),0 1.4cqw 3cqw rgba(31,35,40,.12)}
  .v-code-diff-accept .pt{order:3;flex-basis:100%;font-size:3.4cqw;font-weight:600;line-height:1.3;letter-spacing:-.02em;color:#1f2328}
  .v-code-diff-accept .sugsp{height:0}
  .v-code-diff-accept .ed{left:5cqw;top:27cqw;width:55cqw;height:67cqw;transform-origin:0 0;transform:scale(1)}
  .v-code-diff-accept .code{font-size:1.5cqw}
  .v-code-diff-accept .code{--lh:3.2cqw}
  .v-code-diff-accept .tabs{height:4cqw;font-size:1.4cqw}
  .v-code-diff-accept .tab{height:3.2cqw}
  .v-code-diff-accept .pv{left:62cqw;top:27cqw;width:33cqw;height:67cqw}
  .v-code-diff-accept .pvh{height:4cqw;font-size:1.5cqw}
  .v-code-diff-accept .pvh span{display:none}
  .v-code-diff-accept .hot{font-size:1.3cqw}
  .v-code-diff-accept .cv{top:4cqw}
  .v-code-diff-accept .pc{left:2.4cqw;right:2.4cqw;top:4cqw;padding:2.6cqw;border-radius:2cqw}
  .v-code-diff-accept .pc .hd{font-size:2.6cqw}
  .v-code-diff-accept .pc .hd em{font-size:1.4cqw}
  .v-code-diff-accept .pr{font-size:7cqw}
  .v-code-diff-accept .pr .per{font-size:1.8cqw}
  .v-code-diff-accept .pc p{font-size:1.7cqw}
  .v-code-diff-accept .pc ul{font-size:1.6cqw;gap:1.1cqw}
  .v-code-diff-accept .pc li::before{width:2cqw;height:2cqw;font-size:1.2cqw}
  .v-code-diff-accept .bz{height:6cqw;margin-top:2.4cqw}
  .v-code-diff-accept .ob{height:4.4cqw;font-size:1.7cqw}
  .v-code-diff-accept .nb{font-size:2.3cqw;border-radius:5cqw}
  .v-code-diff-accept .cur{width:3.6cqw;height:3.6cqw;animation-name:code-diff-accept-cur1}
}
@keyframes code-diff-accept-sc{0%{opacity:0;transform:translateY(1.4cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}7%,100%{opacity:1;transform:none}}
@keyframes code-diff-accept-btn{0%,28.5%{transform:scale(1)}30%{transform:scale(.9)}32%,100%{transform:scale(1)}}
@keyframes code-diff-accept-q{0%,32%{opacity:1;transform:translateY(0)}36%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes code-diff-accept-a{0%,33%{opacity:0;transform:translateY(1cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}38%,100%{opacity:1;transform:translateY(0)}}
@keyframes code-diff-accept-del{0%,32%{transform:scaleY(1);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}38%,100%{transform:scaleY(0);opacity:0}}
@keyframes code-diff-accept-mv{0%,32%{transform:translateY(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}39%,100%{transform:translateY(calc(var(--lh) * -2))}}
@keyframes code-diff-accept-fade{0%,38%{opacity:1}46%,100%{opacity:0}}
@keyframes code-diff-accept-mk{0%,38%{background-color:#aceebb}46%,100%{background-color:rgba(172,238,187,0)}}
@keyframes code-diff-accept-o{0%,36%{opacity:1}42%,100%{opacity:0}}
@keyframes code-diff-accept-n{0%,36%{opacity:0}42%,100%{opacity:1}}
@keyframes code-diff-accept-hot{0%,36%{opacity:0;transform:scale(.7)}40%{opacity:1;transform:scale(1.1);animation-timing-function:cubic-bezier(.2,.8,.2,1)}44%,100%{opacity:1;transform:scale(1)}}
@keyframes code-diff-accept-ob{0%,35%{opacity:1;transform:scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}40%,100%{opacity:0;transform:scale(.9)}}
@keyframes code-diff-accept-nb{0%,37%{opacity:0;transform:scale(.82)}42%{opacity:1;transform:scale(1.04);animation-timing-function:cubic-bezier(.2,.8,.2,1)}46%,100%{opacity:1;transform:scale(1)}}
@keyframes code-diff-accept-ring{0%,43%{opacity:0;transform:scale(1)}44%{opacity:1;transform:scale(1)}58%,100%{opacity:0;transform:scale(1.12,1.5)}}
@keyframes code-diff-accept-cur{0%,14%{transform:translate(46cqw,52cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}27%{transform:translate(51.6cqw,10.4cqw)}29%{transform:translate(51.6cqw,10.4cqw) scale(.85)}31%{transform:translate(51.6cqw,10.4cqw) scale(1)}40%{transform:translate(51.6cqw,10.4cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}54%,100%{transform:translate(83cqw,41.2cqw)}}
@keyframes code-diff-accept-curv{0%,14%{transform:translate(70cqw,190cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}27%{transform:translate(82cqw,17cqw)}29%{transform:translate(82cqw,17cqw) scale(.85)}31%{transform:translate(82cqw,17cqw) scale(1)}40%{transform:translate(82cqw,17cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}54%,100%{transform:translate(80cqw,163cqw)}}
@keyframes code-diff-accept-cur1{0%,14%{transform:translate(50cqw,104cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}27%{transform:translate(88cqw,10cqw)}29%{transform:translate(88cqw,10cqw) scale(.85)}31%{transform:translate(88cqw,10cqw) scale(1)}40%{transform:translate(88cqw,10cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}54%,100%{transform:translate(88cqw,73cqw)}}
`,
};

export const codeInstall: SceneSpec = {
  id: "code-install",
  slug: "mg-code-install",
  name: "One Command Install",
  kind: "scene",
  job: "code",
  language: "glass",
  mechanic: "npx-install-component-comes-alive",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#EFEAFF", accent: "#FF6FB5", secondary: "#7A5CFF", paper: "#120A26" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["install", "terminal", "component"],
  fields: [
    { key: "command", label: "Command", default: "npx lumen add chart", maxChars: 24, role: "label" },
    { key: "file", label: "Added file", default: "components/ui/chart.tsx", maxChars: 28, role: "caption" },
    { key: "metric", label: "Metric", default: "Revenue", maxChars: 16, role: "label" },
    { key: "value", label: "Value", default: "$48,290", maxChars: 9, role: "value" },
  ],
  html: `<div class="bl b1"></div><div class="bl b2"></div><div class="bl b3"></div>
<div class="tm">
  <div class="bar"><i></i><i></i><i></i><span>my-app · zsh</span></div>
  <div class="bd">
    <div class="l1"><span class="pm">❯</span> <span class="cmd" data-21st-slot="command">{{command|chars}}</span><i class="car"></i></div>
    <div class="l2 dim">◇ Resolving lumen/chart@2.1.0</div>
    <div class="l3"><span class="trk"><i></i></span><span class="pct"><span>0%<br>14%<br>31%<br>47%<br>62%<br>78%<br>91%<br>100%</span></span></div>
    <div class="l4"><span class="ok">✓</span> Added chart component</div>
    <div class="l5"><span class="ok">✓</span> <span class="dim">Updated</span> lumen.json <span class="dim">· 2 deps</span></div>
  </div>
</div>
<div class="cdw"><div class="cd">
  <div class="ch"><span data-21st-slot="metric">{{metric}}</span><div class="seg"><span>7d</span><span>30d</span><span>90d</span></div></div>
  <div class="vv"><span data-21st-slot="value">{{value}}</span><em>+12.4%</em></div>
  <div class="plot"><svg viewBox="0 0 400 180" preserveAspectRatio="none">
    <defs><linearGradient id="code-install-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--accent)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--secondary)" stop-opacity="0"/></linearGradient><linearGradient id="code-install-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--secondary)"/><stop offset="1" style="stop-color:var(--accent)"/></linearGradient></defs>
    <path d="M0 45H400M0 90H400M0 135H400" stroke="#f0eef5" stroke-width="1.5"/>
    <path d="M0 140C33 140 33 118 66.7 118S100 126 133.3 126 166.7 84 200 84 233.3 96 266.7 96 300 52 333.3 52 366.7 36 400 36V180H0Z" fill="url(#code-install-area)"/>
    <path d="M0 140C33 140 33 118 66.7 118S100 126 133.3 126 166.7 84 200 84 233.3 96 266.7 96 300 52 333.3 52 366.7 36 400 36" fill="none" stroke="url(#code-install-line)" stroke-width="4" stroke-linecap="round"/>
  </svg></div>
  <div class="xl"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
  <div class="tip"><i></i><div class="lb"><span>Thu · <b>$8.1k</b><br>Sat · <b>$10.6k</b><br>Fri · <b>$7.9k</b></span></div></div>
</div></div>
<div class="fc"><span data-21st-slot="file">{{file}}</span><b>new</b></div>`,
  css: `
.v-code-install{color:var(--ink);font-family:var(--font-body)}
.v-code-install[data-backdrop="on"]{background:var(--paper)}
.v-code-install[data-backdrop="off"] .bl{display:none}
.v-code-install .bl{position:absolute;border-radius:50%;filter:blur(3cqw)}
.v-code-install .b1{left:-14cqw;top:-18cqw;width:62cqw;height:56cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 85%,transparent),transparent);animation:code-install-d1 6s cubic-bezier(.45,0,.55,1) infinite}
.v-code-install .b2{left:52cqw;top:16cqw;width:64cqw;height:58cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 70%,transparent),transparent);animation:code-install-d2 6s cubic-bezier(.45,0,.55,1) infinite}
.v-code-install .b3{left:34cqw;top:-26cqw;width:50cqw;height:44cqw;background:radial-gradient(closest-side,color-mix(in srgb,color-mix(in srgb,var(--secondary) 35%,#3fd0ff) 55%,transparent),transparent);animation:code-install-d1 6s cubic-bezier(.45,0,.55,1) infinite reverse}
.v-code-install .tm{position:absolute;left:22cqw;top:12.4cqw;width:56cqw;height:31cqw;border-radius:1.6cqw;background:color-mix(in srgb,var(--paper) 50%,transparent);box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),0 2.4cqw 5cqw rgba(8,0,30,.5);-webkit-backdrop-filter:blur(2.4cqw);backdrop-filter:blur(2.4cqw);transform-origin:0 0;overflow:hidden;animation:code-install-tm 6s linear infinite}
.v-code-install .bar{height:2.9cqw;display:flex;align-items:center;gap:.55cqw;padding:0 1.3cqw;border-bottom:1px solid rgba(255,255,255,.1);font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-code-install .bar i{width:.9cqw;height:.9cqw;border-radius:50%;background:rgba(255,255,255,.22)}
.v-code-install .bar span{margin:0 auto;transform:translateX(-1.6cqw)}
.v-code-install .bd{padding:1.6cqw 2.2cqw;font-family:var(--font-mono);font-size:1.5cqw;line-height:1.8em;white-space:nowrap}
.v-code-install .pm{color:var(--accent)}
.v-code-install .cmd{color:#fff}
.v-code-install .cmd .c{display:inline-block;vertical-align:top;overflow:hidden;max-width:0;--delay:calc(var(--i) * .028s);animation:code-install-ch 6s linear infinite}
.v-code-install .car{display:inline-block;width:.6em;height:1.1em;vertical-align:-.18em;background:var(--accent);animation:code-install-car 6s linear infinite}
.v-code-install .dim{color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-code-install .ok{color:#7dffc4}
.v-code-install .l2{animation:code-install-l2 6s linear infinite}
.v-code-install .l4{animation:code-install-l4 6s linear infinite}
.v-code-install .l5{animation:code-install-l5 6s linear infinite}
.v-code-install .l3{display:flex;align-items:center;gap:.8em;height:1.8em}
.v-code-install .trk{position:relative;width:24cqw;height:1cqw;border-radius:1cqw;background:rgba(255,255,255,.1);overflow:hidden;animation:code-install-l2 6s linear infinite}
.v-code-install .trk i{position:absolute;inset:0;border-radius:1cqw;background:linear-gradient(90deg,var(--secondary),var(--accent) 60%,#ffd27a);box-shadow:0 0 1.2cqw color-mix(in srgb,var(--accent) 60%,transparent);transform-origin:0 50%;animation:code-install-fill 6s linear infinite}
.v-code-install .pct{height:1.8em;overflow:hidden;min-width:5ch;color:#fff;animation:code-install-l2 6s linear infinite}
.v-code-install .pct span{display:block;line-height:1.8em;animation:code-install-pct 6s linear infinite}
.v-code-install .cdw{position:absolute;left:51.5cqw;top:9.6cqw;width:44cqw;height:38cqw;transform-origin:0 0}
.v-code-install .cd{position:absolute;inset:0;padding:2.2cqw;border-radius:1.8cqw;background:#fff;color:#16112a;box-shadow:0 0 0 1px rgba(255,255,255,.6),0 2.6cqw 5.4cqw rgba(10,0,40,.5),0 0 6cqw color-mix(in srgb,var(--accent) 25%,transparent);animation:code-install-cd 6s linear infinite}
.v-code-install .fc{position:absolute;left:51.5cqw;top:6cqw;display:flex;align-items:center;gap:.6cqw;padding:.45cqw .9cqw;border-radius:2cqw;background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.22);font-family:var(--font-mono);font-size:1.05cqw;color:var(--ink);white-space:nowrap;animation:code-install-cd 6s linear infinite}
.v-code-install .fc b{font-weight:500;color:#120a26;background:#7dffc4;padding:0 .5em;border-radius:1em;font-size:.86em}
.v-code-install .ch{display:flex;align-items:center;justify-content:space-between;font-size:1.25cqw;color:#7c7591}
.v-code-install .seg{display:flex;gap:.2cqw;padding:.2cqw;border-radius:.7cqw;background:#f3f1f8;font-size:.95cqw}
.v-code-install .seg span{padding:.2cqw .7cqw;border-radius:.5cqw}
.v-code-install .seg span:first-child{background:#fff;color:#16112a;box-shadow:0 .1cqw .3cqw rgba(0,0,0,.08)}
.v-code-install .vv{display:flex;align-items:center;gap:1cqw;margin-top:.6cqw;font-family:var(--font-display);font-size:3.6cqw;font-weight:600;letter-spacing:-.045em;line-height:1.1;white-space:nowrap}
.v-code-install .vv em{font-family:var(--font-body);font-style:normal;font-size:1.05cqw;font-weight:500;letter-spacing:0;color:#127a43;background:#dcf7e7;padding:.25cqw .7cqw;border-radius:2cqw}
.v-code-install .plot{position:absolute;left:2.2cqw;right:2.2cqw;top:13.4cqw;height:18.6cqw;clip-path:inset(0 100% 0 0);animation:code-install-plot 6s linear infinite}
.v-code-install .plot svg{width:100%;height:100%;overflow:visible}
.v-code-install .xl{position:absolute;left:2.2cqw;right:2.2cqw;bottom:1.8cqw;display:flex;justify-content:space-between;font-size:.95cqw;color:#a29cb5}
.v-code-install .tip{position:absolute;left:21.75cqw;top:22.1cqw;animation:code-install-tip 6s linear infinite}
.v-code-install .tip i{position:absolute;left:-.8cqw;top:-.8cqw;width:1.6cqw;height:1.6cqw;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 .45cqw var(--accent),0 0 0 .5cqw color-mix(in srgb,var(--accent) 18%,transparent)}
.v-code-install .tip .lb{position:absolute;left:-5.4cqw;bottom:1.6cqw;width:10.8cqw;height:2.6cqw;border-radius:.8cqw;background:#16112a;color:#fff;font-size:1.05cqw;overflow:hidden;box-shadow:0 .6cqw 1.2cqw rgba(22,17,42,.3)}
.v-code-install .tip .lb span{display:block;text-align:center;line-height:2.6cqw;white-space:nowrap;animation:code-install-lbl 6s linear infinite}
.v-code-install .tip .lb b{font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-code-install .b1{left:-30cqw;top:-10cqh;width:120cqw;height:110cqw}
  .v-code-install .b2{left:10cqw;top:50cqh;width:120cqw;height:110cqw}
  .v-code-install .b3{left:30cqw;top:10cqh;width:90cqw;height:80cqw}
  .v-code-install .cdw{left:6cqw;top:8cqh;transform:scale(2)}
  .v-code-install .ch{font-size:2.8cqw}
  .v-code-install .vv{font-size:4.2cqw}
  .v-code-install .tm{left:6cqw;top:55cqh;width:88cqw;height:27cqh;border-radius:3.6cqw;animation-name:code-install-tmv}
  .v-code-install .bar{height:6cqw;font-size:3cqw;gap:1.6cqw;padding:0 3.4cqw}
  .v-code-install .bar i{width:2.2cqw;height:2.2cqw}
  .v-code-install .bar span{transform:translateX(-4cqw)}
  .v-code-install .bd{padding:3cqw 4.4cqw;font-size:3.4cqw}
  .v-code-install .l1{font-size:5.6cqw;line-height:1.5}
  .v-code-install .cmd,.v-code-install .cmd .c{line-height:1.5}
  .v-code-install .trk{width:48cqw;height:2.2cqw}
  .v-code-install .fc{left:6cqw;right:6cqw;top:auto;bottom:8cqh;justify-content:center;gap:2.4cqw;padding:2.4cqw 4cqw;font-size:4.6cqw;border-radius:8cqw}
  .v-code-install .fc span{font-size:5.4cqw}
  .v-code-install .fc b{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-code-install .cdw{left:19.2cqw;top:15cqw;transform:scale(1.4)}
  .v-code-install .ch{font-size:1.5cqw}
  .v-code-install .tm{left:6cqw;top:72cqw;width:88cqw;height:24cqw;border-radius:2cqw;animation-name:code-install-tmv}
  .v-code-install .bar{height:3.6cqw;font-size:1.6cqw;gap:.9cqw;padding:0 1.8cqw}
  .v-code-install .bar i{width:1.2cqw;height:1.2cqw}
  .v-code-install .bar span{transform:translateX(-2cqw)}
  .v-code-install .bd{padding:1.6cqw 2.6cqw;font-size:1.9cqw;line-height:1.6em}
  .v-code-install .l1{font-size:2.4cqw;line-height:1.5}
  .v-code-install .cmd,.v-code-install .cmd .c{line-height:1.5}
  .v-code-install .trk{width:30cqw;height:1.1cqw}
  .v-code-install .fc{left:19.2cqw;top:7.5cqw;font-size:2.2cqw;gap:1cqw;padding:.8cqw 1.6cqw}
}
@keyframes code-install-d1{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,4cqw)}}
@keyframes code-install-d2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-5cqw,-3cqw) scale(1.08)}}
@keyframes code-install-tm{0%{transform:translate(0,1.6cqw);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}5%,36%{transform:translate(0,0) scale(1);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}46%,100%{transform:translate(-17.6cqw,4.4cqw) scale(.8);opacity:1}}
@keyframes code-install-tmv{0%{transform:translate(0,1.6cqw);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}5%,100%{transform:none;opacity:1}}
@keyframes code-install-ch{0%,6%{max-width:0}6.2%,100%{max-width:1.5em}}
@keyframes code-install-car{0%,15%{opacity:1}16%,100%{opacity:0}}
@keyframes code-install-l2{0%,16.4%{opacity:0}16.5%,100%{opacity:1}}
@keyframes code-install-l4{0%,32.4%{opacity:0;transform:translateX(-.8cqw)}33%,100%{opacity:1;transform:translateX(0)}}
@keyframes code-install-l5{0%,34.4%{opacity:0;transform:translateX(-.8cqw)}35%,100%{opacity:1;transform:translateX(0)}}
@keyframes code-install-fill{0%,17%{transform:scaleX(0);animation-timing-function:cubic-bezier(.3,0,.3,1)}22%{transform:scaleX(.31);animation-timing-function:linear}24%{transform:scaleX(.36);animation-timing-function:cubic-bezier(.3,0,.3,1)}29%{transform:scaleX(.8);animation-timing-function:cubic-bezier(.3,0,.3,1)}32%,100%{transform:scaleX(1)}}
@keyframes code-install-pct{0%,18.9%{transform:translateY(0)}19%,20.9%{transform:translateY(-1.8em)}21%,22.9%{transform:translateY(-3.6em)}23%,25.9%{transform:translateY(-5.4em)}26%,27.4%{transform:translateY(-7.2em)}27.5%,28.9%{transform:translateY(-9em)}29%,30.9%{transform:translateY(-10.8em)}31%,100%{transform:translateY(-12.6em)}}
@keyframes code-install-cd{0%,37%{opacity:0;transform:translateY(5cqw) scale(.94);filter:blur(.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}46%,100%{opacity:1;transform:translateY(0) scale(1);filter:blur(0)}}
@keyframes code-install-plot{0%,40%{clip-path:inset(0 100% 0 0);animation-timing-function:cubic-bezier(.65,0,.35,1)}49%,100%{clip-path:inset(0 0 0 0)}}
@keyframes code-install-tip{0%,46%{opacity:0;transform:scale(.6)}50%,100%{opacity:1;transform:scale(1)}}
@keyframes code-install-lbl{0%,100%{transform:translateY(0)}}
`,
};

export const CODE_SCENES: SceneSpec[] = [codeCliBrowser, codeDiffAccept, codeInstall];
