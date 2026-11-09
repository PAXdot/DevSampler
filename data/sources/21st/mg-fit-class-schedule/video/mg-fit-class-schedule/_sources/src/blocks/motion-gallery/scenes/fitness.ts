// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const fitIntervalTimer: SceneSpec = {
  id: "fit-interval-timer",
  slug: "mg-fit-interval-timer",
  name: "Interval Ring Timer",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "countdown-ring-work-to-rest",
  energy: "punchy",
  settle: 4.4,
  colors: {"ink": "#EEF2EA", "accent": "#C8FF2E", "secondary": "#B9A6FF", "paper": "#07080A"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fitness", "timer", "workout"],
  fields: [
    { key: "brand", label: "Brand", default: "MOVARA", maxChars: 14, role: "label" },
    { key: "work", label: "Work move", default: "Burpees", maxChars: 16, role: "headline" },
    { key: "rest", label: "Rest cue", default: "Breathe", maxChars: 16, role: "headline" },
    { key: "next", label: "Next move", default: "Kettlebell swings", maxChars: 24, role: "label" },
  ],
  html: `<div class="grid"></div>
    <div class="glow"></div>
    <div class="glow g2"></div>
    <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="brand">{{brand}}</span></div>
    <div class="bpm"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5s-7.5-4.6-7.5-10.4A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.7c0 5.8-7.5 10.4-7.5 10.4z"/></svg>164 <small>BPM</small></div>
    <div class="ring">
      <div class="ticks"></div>
      <div class="track"></div>
      <div class="work">
        <div class="half r"><div class="arc"></div></div>
        <div class="half l"><div class="arc"></div></div>
        <div class="head"><i></i></div>
      </div>
      <div class="rest"></div>
      <div class="center">
        <div class="state"><span class="s-work">WORK</span><span class="s-rest">REST</span></div>
        <div class="time">
          <div class="tw">0:<span class="win"><span class="col"><b>20</b><b>19</b><b>18</b><b>17</b><b>16</b><b>15</b><b>14</b><b>13</b><b>12</b><b>11</b><b>10</b><b>09</b><b>08</b><b>07</b><b>06</b><b>05</b><b>04</b><b>03</b><b>02</b><b>01</b><b>00</b></span></span></div>
          <div class="tr">0:10</div>
        </div>
        <div class="sub">SEC LEFT</div>
      </div>
    </div>
    <div class="side">
      <div class="kicker">TABATA BURN · ROUND <b>03</b> / 08</div>
      <div class="move"><span class="m-work" data-21st-slot="work">{{work}}</span><span class="m-rest" data-21st-slot="rest">{{rest}}</span></div>
      <div class="bars"><i class="d"></i><i class="d"></i><i class="c"></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="next">
        <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8.5 10V8a3.5 3.5 0 0 1 7 0v2"/><circle cx="12" cy="15" r="5.5" fill="currentColor" stroke="none"/></svg></div>
        <div class="nx"><small>NEXT UP</small><strong data-21st-slot="next">{{next}}</strong></div>
        <div class="nt">0:20</div>
      </div>
      <div class="stats">
        <div>312<small>KCAL</small></div>
        <div>11:48<small>ELAPSED</small></div>
        <div>Z4<small>HR ZONE</small></div>
      </div>
    </div>`,
  css: `
.v-fit-interval-timer{color:var(--ink);font-family:var(--font-body)}
.v-fit-interval-timer[data-backdrop="on"]{background:var(--paper)}
.v-fit-interval-timer[data-backdrop="off"] .grid,.v-fit-interval-timer[data-backdrop="off"] .glow{display:none}
.v-fit-interval-timer .grid{position:absolute;inset:0;background-image:linear-gradient(color-mix(in srgb,var(--ink) 4.5%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--ink) 4.5%,transparent) 1px,transparent 1px);background-size:3.5cqw 3.5cqw;-webkit-mask-image:radial-gradient(70cqw 40cqw at 30% 52%,#000,transparent 75%);mask-image:radial-gradient(70cqw 40cqw at 30% 52%,#000,transparent 75%);animation:fit-interval-timer-drift 6s linear infinite}
.v-fit-interval-timer .glow{position:absolute;left:-4cqw;top:-1cqw;width:60cqw;height:60cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 30%,transparent),color-mix(in srgb,var(--accent) 8%,transparent) 55%,transparent);animation:fit-interval-timer-glow 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-interval-timer .glow.g2{background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 34%,transparent),color-mix(in srgb,var(--secondary) 8%,transparent) 55%,transparent);animation-name:fit-interval-timer-glow2}
.v-fit-interval-timer .brand{white-space:nowrap;position:absolute;left:4cqw;top:3.6cqw;display:flex;align-items:center;gap:.8cqw;font:800 1.3cqw/1.3 var(--font-display);letter-spacing:.24em}
.v-fit-interval-timer .brand svg{width:2.2cqw;height:2.2cqw;color:var(--accent)}
.v-fit-interval-timer .bpm{position:absolute;right:4cqw;top:3cqw;display:flex;align-items:center;gap:.8cqw;padding:.9cqw 1.4cqw;border-radius:5cqw;background:rgba(255,77,46,.12);border:1px solid rgba(255,77,46,.32);font:600 1.4cqw/1 var(--font-mono);color:color-mix(in srgb,#FF4D2E 45%,var(--ink))}
.v-fit-interval-timer .bpm small{font-size:.9cqw;letter-spacing:.14em;opacity:.7}
.v-fit-interval-timer .bpm svg{width:1.7cqw;height:1.7cqw;color:#FF4D2E;animation:fit-interval-timer-beat .75s ease-out infinite}
.v-fit-interval-timer .ring{position:absolute;left:9cqw;top:12cqw;width:34cqw;height:34cqw;animation:fit-interval-timer-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .ticks{position:absolute;inset:-2.4cqw;border-radius:50%;background:repeating-conic-gradient(color-mix(in srgb,var(--ink) 28%,transparent) 0 .7deg,transparent .7deg 6deg);-webkit-mask-image:radial-gradient(closest-side,transparent calc(100% - 1.1cqw),#000 calc(100% - 1cqw));mask-image:radial-gradient(closest-side,transparent calc(100% - 1.1cqw),#000 calc(100% - 1cqw))}
.v-fit-interval-timer .track{position:absolute;inset:0;border-radius:50%;box-sizing:border-box;border:1.7cqw solid color-mix(in srgb,var(--accent) 10%,transparent)}
.v-fit-interval-timer .work{position:absolute;inset:0;filter:drop-shadow(0 0 1.1cqw color-mix(in srgb,var(--accent) 55%,transparent));animation:fit-interval-timer-work 6s linear infinite}
.v-fit-interval-timer .half{position:absolute;top:0;width:50%;height:100%;overflow:hidden}
.v-fit-interval-timer .half.r{left:50%}
.v-fit-interval-timer .half.l{left:0}
.v-fit-interval-timer .arc{position:absolute;top:0;width:200%;height:100%;border-radius:50%;box-sizing:border-box;border:1.7cqw solid var(--accent)}
.v-fit-interval-timer .half.r .arc{left:-100%;clip-path:inset(0 50% 0 0);animation:fit-interval-timer-r 6s linear infinite}
.v-fit-interval-timer .half.l .arc{left:0;clip-path:inset(0 0 0 50%);animation:fit-interval-timer-l 6s linear infinite}
.v-fit-interval-timer .head{position:absolute;inset:0;animation:fit-interval-timer-head 6s linear infinite}
.v-fit-interval-timer .head i{position:absolute;left:50%;top:0;width:2.6cqw;height:2.6cqw;margin:-.45cqw 0 0 -1.3cqw;border-radius:50%;background:color-mix(in srgb,var(--accent) 30%,#fff);box-shadow:0 0 0 .5cqw color-mix(in srgb,var(--accent) 35%,transparent),0 0 2cqw var(--accent)}
.v-fit-interval-timer .rest{position:absolute;inset:0;border-radius:50%;box-sizing:border-box;border:1.7cqw solid var(--secondary);background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 16%,transparent),transparent);box-shadow:0 0 2.4cqw color-mix(in srgb,var(--secondary) 45%,transparent),inset 0 0 2.4cqw color-mix(in srgb,var(--secondary) 30%,transparent);opacity:0;animation:fit-interval-timer-rest 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-interval-timer .center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.v-fit-interval-timer .state,.v-fit-interval-timer .time{display:grid;justify-items:center}
.v-fit-interval-timer .state>span,.v-fit-interval-timer .time>div{grid-area:1/1}
.v-fit-interval-timer .state{font:600 1.35cqw/1.2 var(--font-mono);letter-spacing:.42em;padding-left:.42em;margin-bottom:1.5cqw}
.v-fit-interval-timer .s-work{color:var(--accent);animation:fit-interval-timer-swork 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .s-rest{color:var(--secondary);opacity:0;animation:fit-interval-timer-srest 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .time{font:800 6.6cqw/1 var(--font-display);font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.v-fit-interval-timer .tw{display:flex;line-height:1;animation:fit-interval-timer-tw 6s ease-out infinite}
.v-fit-interval-timer .win{display:block;height:1em;overflow:hidden}
.v-fit-interval-timer .col{display:block;animation:fit-interval-timer-count 6s linear infinite}
.v-fit-interval-timer .col b{display:block;height:1em;font-weight:700}
.v-fit-interval-timer .tr{color:color-mix(in srgb,var(--secondary) 40%,var(--ink));opacity:0;animation:fit-interval-timer-srest 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .sub{margin-top:1.3cqw;font:500 1.05cqw/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent);letter-spacing:.22em;padding-left:.22em}
.v-fit-interval-timer .side{position:absolute;left:52cqw;top:13.5cqw;width:40cqw;animation:fit-interval-timer-side 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .kicker{font:500 1.2cqw/1 var(--font-mono);letter-spacing:.18em;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fit-interval-timer .kicker b{color:var(--accent);font-weight:600}
.v-fit-interval-timer .move{display:grid;margin-top:1.6cqw;font:800 5.8cqw/1.25 var(--font-display);letter-spacing:-.03em}
.v-fit-interval-timer .move span{grid-area:1/1}
.v-fit-interval-timer .m-work{animation:fit-interval-timer-swork 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .m-rest{color:color-mix(in srgb,var(--secondary) 70%,var(--ink));opacity:0;animation:fit-interval-timer-srest 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-interval-timer .bars{display:flex;gap:.7cqw;margin-top:2.4cqw}
.v-fit-interval-timer .bars i{position:relative;flex:1;height:.7cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 10%,transparent);overflow:hidden}
.v-fit-interval-timer .bars i.d{background:var(--accent)}
.v-fit-interval-timer .bars i.c::after{content:"";position:absolute;inset:0;background:var(--accent);transform-origin:left;transform:scaleX(0);animation:fit-interval-timer-bar 6s linear infinite}
.v-fit-interval-timer .next{display:flex;align-items:center;gap:1.4cqw;margin-top:2.6cqw;padding:1.4cqw 1.8cqw;border-radius:1.4cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--ink) 9%,var(--paper)),color-mix(in srgb,var(--ink) 4%,var(--paper)));border:1px solid color-mix(in srgb,var(--ink) 9%,transparent);box-shadow:0 1.6cqw 3cqw rgba(0,0,0,.45)}
.v-fit-interval-timer .ico{flex:none;width:3.6cqw;height:3.6cqw;border-radius:1cqw;background:color-mix(in srgb,var(--accent) 12%,transparent);display:grid;place-items:center;color:var(--accent)}
.v-fit-interval-timer .ico svg{width:2cqw;height:2cqw}
.v-fit-interval-timer .nx small{display:block;font:500 .95cqw/1 var(--font-mono);letter-spacing:.2em;color:color-mix(in srgb,var(--ink) 50%,transparent);margin-bottom:.7cqw}
.v-fit-interval-timer .nx strong{font:600 1.75cqw/1.3 var(--font-body)}
.v-fit-interval-timer .nt{margin-left:auto;font:600 1.5cqw/1 var(--font-mono);color:var(--accent)}
.v-fit-interval-timer .stats{display:flex;gap:3.4cqw;margin-top:2.6cqw}
.v-fit-interval-timer .stats div{font:800 2.1cqw/1.1 var(--font-display)}
.v-fit-interval-timer .stats small{display:block;margin-top:.7cqw;font:500 .9cqw/1 var(--font-mono);letter-spacing:.16em;color:color-mix(in srgb,var(--ink) 50%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-fit-interval-timer .brand{left:8cqw;top:5cqh;font-size:5.6cqw;gap:2.4cqw}
  .v-fit-interval-timer .brand svg{width:7cqw;height:7cqw}
  .v-fit-interval-timer .bpm{right:8cqw;top:4.4cqh;font-size:4cqw;padding:2cqw 3.4cqw;gap:1.6cqw}
  .v-fit-interval-timer .bpm small{font-size:2.6cqw}
  .v-fit-interval-timer .bpm svg{width:4.6cqw;height:4.6cqw}
  .v-fit-interval-timer .ring{left:33cqw;top:calc(33cqh - 17cqw);scale:2.06}
  .v-fit-interval-timer .glow{left:-10cqw;top:10cqh;width:120cqw;height:120cqw}
  .v-fit-interval-timer .side{left:8cqw;width:84cqw;top:58cqh}
  .v-fit-interval-timer .kicker{font-size:3.4cqw}
  .v-fit-interval-timer .move{font-size:15cqw;margin-top:2cqw}
  .v-fit-interval-timer .bars{gap:1.6cqw;margin-top:3cqw}
  .v-fit-interval-timer .bars i{height:1.6cqw}
  .v-fit-interval-timer .next{gap:3cqw;margin-top:4cqw;padding:3.4cqw 4cqw;border-radius:3.4cqw}
  .v-fit-interval-timer .ico{width:10cqw;height:10cqw;border-radius:2.6cqw}
  .v-fit-interval-timer .ico svg{width:5.6cqw;height:5.6cqw}
  .v-fit-interval-timer .nx small{font-size:2.8cqw;margin-bottom:1.4cqw}
  .v-fit-interval-timer .nx strong{font-size:5.6cqw}
  .v-fit-interval-timer .nt{font-size:4.4cqw}
  .v-fit-interval-timer .stats{gap:8cqw;margin-top:4cqw}
  .v-fit-interval-timer .stats div{font-size:6.4cqw}
  .v-fit-interval-timer .stats small{font-size:2.6cqw;margin-top:1.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-interval-timer .brand{left:6cqw;top:6cqw;font-size:2.4cqw;gap:1.2cqw}
  .v-fit-interval-timer .brand svg{width:3.6cqw;height:3.6cqw}
  .v-fit-interval-timer .bpm{right:6cqw;top:5cqw;font-size:2.2cqw;padding:1.3cqw 2cqw;gap:1.1cqw}
  .v-fit-interval-timer .bpm small{font-size:1.4cqw}
  .v-fit-interval-timer .bpm svg{width:2.6cqw;height:2.6cqw}
  .v-fit-interval-timer .ring{left:9cqw;top:36cqw;scale:1.3}
  .v-fit-interval-timer .side{left:60cqw;width:34cqw;top:24cqw}
  .v-fit-interval-timer .kicker{font-size:1.8cqw;letter-spacing:.1em}
  .v-fit-interval-timer .move{font-size:7.4cqw;margin-top:1.6cqw}
  .v-fit-interval-timer .bars{gap:.9cqw;margin-top:2.6cqw}
  .v-fit-interval-timer .bars i{height:1cqw}
  .v-fit-interval-timer .next{flex-wrap:wrap;gap:1.6cqw;margin-top:3cqw;padding:2cqw 2.2cqw;border-radius:2cqw}
  .v-fit-interval-timer .ico{width:5cqw;height:5cqw}
  .v-fit-interval-timer .ico svg{width:2.8cqw;height:2.8cqw}
  .v-fit-interval-timer .nx small{font-size:1.5cqw;margin-bottom:.8cqw}
  .v-fit-interval-timer .nx strong{font-size:2.6cqw}
  .v-fit-interval-timer .nt{font-size:2.2cqw}
  .v-fit-interval-timer .stats{gap:3.4cqw;margin-top:3.4cqw}
  .v-fit-interval-timer .stats div{font-size:3.2cqw}
  .v-fit-interval-timer .stats small{font-size:1.4cqw}
}
@keyframes fit-interval-timer-drift{from{background-position:0 0}to{background-position:3.5cqw 0}}
@keyframes fit-interval-timer-glow{0%{opacity:0;transform:scale(.7)}10%{opacity:1;transform:scale(1)}35%{opacity:.75;transform:scale(1.05)}60%{opacity:1;transform:scale(1)}66%,100%{opacity:0;transform:scale(.9)}}
@keyframes fit-interval-timer-glow2{0%,62%{opacity:0;transform:scale(.8)}70%{opacity:1;transform:scale(1.05)}86%{opacity:.8;transform:scale(1)}94%,100%{opacity:0;transform:scale(.9)}}
@keyframes fit-interval-timer-beat{0%,100%{transform:scale(1)}12%{transform:scale(1.25)}24%{transform:scale(1)}36%{transform:scale(1.12)}50%{transform:scale(1)}}
@keyframes fit-interval-timer-ring{0%{opacity:0;transform:scale(.86) rotate(-20deg)}9%{opacity:1;transform:scale(1) rotate(0deg)}86%{opacity:1;transform:scale(1) rotate(0deg)}93%,100%{opacity:0;transform:scale(.92) rotate(0deg)}}
@keyframes fit-interval-timer-work{0%,62%{opacity:1}67%,96%{opacity:0}100%{opacity:1}}
@keyframes fit-interval-timer-r{0%,8%{transform:rotate(0deg)}35%,95%{transform:rotate(180deg)}96%,100%{transform:rotate(0deg)}}
@keyframes fit-interval-timer-l{0%,35%{transform:rotate(0deg)}62%,95%{transform:rotate(180deg)}96%,100%{transform:rotate(0deg)}}
@keyframes fit-interval-timer-head{0%,8%{transform:rotate(0deg)}62%,95%{transform:rotate(360deg)}96%,100%{transform:rotate(0deg)}}
@keyframes fit-interval-timer-count{0%{transform:translateY(0)}8%{transform:translateY(0);animation-timing-function:steps(20,end)}62%,95%{transform:translateY(-20em)}96%,100%{transform:translateY(0)}}
@keyframes fit-interval-timer-tw{0%,60%{opacity:1;transform:scale(1)}64%,96%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}
@keyframes fit-interval-timer-swork{0%{opacity:0;transform:translateY(60%)}8%,60%{opacity:1;transform:translateY(0)}64%,100%{opacity:0;transform:translateY(-60%)}}
@keyframes fit-interval-timer-srest{0%,62%{opacity:0;transform:translateY(60%)}67%,90%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fit-interval-timer-rest{0%,62%{opacity:0;transform:scale(.9)}68%{opacity:1;transform:scale(1)}77%{opacity:1;transform:scale(1.035)}86%,100%{opacity:1;transform:scale(1)}}
@keyframes fit-interval-timer-side{0%,3%{opacity:0;transform:translateX(3cqw)}15%,86%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(-2cqw)}}
@keyframes fit-interval-timer-bar{0%,8%{transform:scaleX(0)}62%,95%{transform:scaleX(1)}96%,100%{transform:scaleX(0)}}
`,
};

export const fitRepSlam: SceneSpec = {
  id: "fit-rep-slam",
  slug: "mg-fit-rep-slam",
  name: "Rep Count Slam",
  kind: "scene",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "rep-number-slam-shake",
  energy: "punchy",
  settle: 3.2,
  colors: {"ink": "#0B0B0B", "accent": "#F6F1E7", "secondary": "#7A1A08", "paper": "#FF4D2E"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fitness", "reps", "story-ad"],
  fields: [
    { key: "count", label: "Final rep", default: "10", maxChars: 3, role: "value" },
    { key: "headline", label: "Headline", default: "LAST REP. BEST REP.", maxChars: 24, role: "headline" },
    { key: "tape", label: "Program tape", default: "30-DAY STRENGTH BLOCK", maxChars: 26, role: "kicker" },
    { key: "cta", label: "Button", default: "Start the 30-day block", maxChars: 26, role: "cta" },
  ],
  html: `<div class="vig"></div>
    <div class="tone"></div>
    <div class="shake">
      <div class="story"><i class="f"></i><i class="c"></i><i></i></div>
      <div class="head">
        <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg>MOVARA</div>
        <div class="lab">STRENGTH LAB</div>
      </div>
      <div class="tape"><span data-21st-slot="tape">{{tape}}</span></div>
      <div class="stick">WEEK 03</div>
      <div class="rays"></div>
      <div class="burst"></div>
      <div class="n n8">8</div>
      <div class="n n9">9</div>
      <div class="n n10"><span data-21st-slot="count">{{count}}</span></div>
      <div class="repline"><span>SET 04 · BACK SQUAT</span><span>REP <span class="rw"><span class="rc"><b>07</b><b>08</b><b>09</b><b>10</b></span></span>/10</span></div>
      <div class="bar"><i></i></div>
      <div class="h1" data-21st-slot="headline">{{headline|words}}</div>
      <div class="cta"><span data-21st-slot="cta">{{cta}}</span><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></i></div>
      <div class="foot">FIRST WEEK FREE · MOVARA.APP</div>
      <div class="side">NO SHORTCUTS · MOVARA STRENGTH LAB</div>
    </div>`,
  css: `
.v-fit-rep-slam{color:var(--ink);font-family:var(--font-body)}
.v-fit-rep-slam[data-backdrop="on"]{background:var(--paper)}
.v-fit-rep-slam[data-backdrop="off"] .tone,.v-fit-rep-slam[data-backdrop="off"] .vig,.v-fit-rep-slam[data-backdrop="off"] .rays{display:none}
.v-fit-rep-slam .tone{position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ink) 16%,transparent) 24%,transparent 27%);background-size:3cqw 3cqw;-webkit-mask-image:linear-gradient(180deg,transparent 10%,#000 45%,#000 70%,transparent 100%);mask-image:linear-gradient(180deg,transparent 10%,#000 45%,#000 70%,transparent 100%);animation:fit-rep-slam-tone 6s linear infinite}
.v-fit-rep-slam .vig{position:absolute;inset:0;background:radial-gradient(90cqw 80cqw at 50% 40%,color-mix(in srgb,var(--paper) 70%,#fff 30%),transparent 70%),linear-gradient(180deg,transparent 60%,color-mix(in srgb,var(--secondary) 28%,transparent))}
.v-fit-rep-slam .shake{position:absolute;inset:0;animation:fit-rep-slam-shake 6s linear infinite}
.v-fit-rep-slam .story{position:absolute;left:5cqw;right:5cqw;top:4cqw;display:flex;gap:1.2cqw}
.v-fit-rep-slam .story i{position:relative;flex:1;height:.8cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 22%,transparent);overflow:hidden}
.v-fit-rep-slam .story i.f{background:var(--ink)}
.v-fit-rep-slam .story i.c::after{content:"";position:absolute;inset:0;background:var(--ink);transform-origin:left;animation:fit-rep-slam-story 6s linear infinite}
.v-fit-rep-slam .head{position:absolute;left:7cqw;right:7cqw;top:9cqw;display:flex;align-items:center;justify-content:space-between}
.v-fit-rep-slam .brand{display:flex;align-items:center;gap:1.4cqw;font:800 3.8cqw/1 var(--font-display);letter-spacing:.06em}
.v-fit-rep-slam .brand svg{width:5.4cqw;height:5.4cqw}
.v-fit-rep-slam .lab{font:600 2.7cqw/1 var(--font-mono);letter-spacing:.16em;border:.4cqw solid var(--ink);padding:1.2cqw 1.6cqw}
.v-fit-rep-slam .tape{position:absolute;left:6cqw;top:19cqw;padding:2cqw 3cqw;background:var(--ink);color:var(--accent);font:800 4.2cqw/1.2 var(--font-display);white-space:nowrap;letter-spacing:.02em;transform:rotate(-4deg);box-shadow:1.2cqw 1.2cqw 0 color-mix(in srgb,var(--ink) 25%,transparent);animation:fit-rep-slam-tape 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rep-slam .stick{position:absolute;right:7cqw;top:28cqw;padding:1.6cqw 2.4cqw;background:var(--accent);font:700 3.2cqw/1 var(--font-mono);transform:rotate(6deg);box-shadow:.8cqw .8cqw 0 var(--ink);animation:fit-rep-slam-stick 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rep-slam .rays{position:absolute;left:50%;top:70cqw;width:150cqw;height:150cqw;margin:-75cqw 0 0 -75cqw;border-radius:50%;background:repeating-conic-gradient(color-mix(in srgb,var(--ink) 10%,transparent) 0 6deg,transparent 6deg 18deg);-webkit-mask-image:radial-gradient(closest-side,#000 20%,transparent 80%);mask-image:radial-gradient(closest-side,#000 20%,transparent 80%);animation:fit-rep-slam-rays 6s linear infinite}
.v-fit-rep-slam .burst{position:absolute;left:50%;top:70cqw;width:76cqw;height:76cqw;margin:-38cqw 0 0 -38cqw;border-radius:50%;box-sizing:border-box;border:1.4cqw solid var(--ink);opacity:0;animation:fit-rep-slam-burst 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rep-slam .n{position:absolute;left:0;right:0;top:34cqw;height:72cqw;display:grid;place-items:center;font:800 60cqw/1.2 var(--font-display);letter-spacing:-.07em;color:var(--accent);text-shadow:1.8cqw 1.8cqw 0 var(--ink);opacity:0}
.v-fit-rep-slam .n8{animation:fit-rep-slam-n8 6s linear infinite}
.v-fit-rep-slam .n9{animation:fit-rep-slam-n9 6s linear infinite}
.v-fit-rep-slam .n10{animation:fit-rep-slam-n10 6s linear infinite}
.v-fit-rep-slam .repline{position:absolute;left:8cqw;right:8cqw;top:105cqw;display:flex;justify-content:space-between;font:600 3.2cqw/1 var(--font-mono);letter-spacing:.08em}
.v-fit-rep-slam .rw{display:inline-block;height:1em;overflow:hidden;vertical-align:top}
.v-fit-rep-slam .rc{display:block;animation:fit-rep-slam-rc 6s linear infinite}
.v-fit-rep-slam .rc b{display:block;height:1em}
.v-fit-rep-slam .bar{position:absolute;left:8cqw;right:8cqw;top:110.5cqw;height:2.4cqw;background:color-mix(in srgb,var(--ink) 20%,transparent);-webkit-mask-image:repeating-linear-gradient(90deg,#000 0 calc(10% - .9cqw),transparent calc(10% - .9cqw) 10%);mask-image:repeating-linear-gradient(90deg,#000 0 calc(10% - .9cqw),transparent calc(10% - .9cqw) 10%)}
.v-fit-rep-slam .bar i{position:absolute;inset:0;background:var(--ink);transform-origin:left;animation:fit-rep-slam-bar 6s linear infinite}
.v-fit-rep-slam .h1{position:absolute;left:8cqw;right:6cqw;top:118cqw;display:grid;grid-template-columns:auto 1fr;column-gap:.26em;font:800 11.4cqw/1.2 var(--font-display);letter-spacing:-.04em}
.v-fit-rep-slam .h1 .w{display:block;line-height:1.2;white-space:nowrap;clip-path:inset(0 100% 0 0);animation:fit-rep-slam-l1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-rep-slam .h1 .w:nth-child(n+3){--delay:.18s;color:var(--accent);text-shadow:.6cqw .6cqw 0 var(--ink)}
.v-fit-rep-slam .cta{position:absolute;left:7cqw;right:7cqw;top:146cqw;display:flex;align-items:center;justify-content:space-between;padding:2.4cqw 2.4cqw 2.4cqw 5cqw;border-radius:10cqw;background:var(--ink);color:var(--accent);font:600 5.4cqw/1.3 var(--font-body);box-shadow:0 2cqw 4cqw color-mix(in srgb,var(--secondary) 35%,transparent);opacity:0;animation:fit-rep-slam-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rep-slam .cta i{flex:none;display:grid;place-items:center;width:8.4cqw;height:8.4cqw;border-radius:50%;background:var(--paper);color:var(--ink)}
.v-fit-rep-slam .cta svg{width:4cqw;height:4cqw}
.v-fit-rep-slam .foot{position:absolute;left:0;right:0;top:165cqw;text-align:center;font:600 2.6cqw/1 var(--font-mono);letter-spacing:.2em;opacity:.75}
.v-fit-rep-slam .side{position:absolute;right:2.2cqw;top:42cqw;writing-mode:vertical-rl;font:500 2cqw/1 var(--font-mono);letter-spacing:.3em;opacity:.45;animation:fit-rep-slam-side 6s linear infinite}
@container (min-aspect-ratio: 4/5){
  .v-fit-rep-slam .side{display:none}
}
@container (min-aspect-ratio: 5/4){
  .v-fit-rep-slam .story{left:4cqw;right:4cqw;top:2.6cqw;gap:.8cqw}
  .v-fit-rep-slam .story i{height:.45cqw}
  .v-fit-rep-slam .head{left:6cqw;right:6cqw;top:5cqw}
  .v-fit-rep-slam .brand{font-size:2cqw;gap:.8cqw}
  .v-fit-rep-slam .brand svg{width:2.8cqw;height:2.8cqw}
  .v-fit-rep-slam .lab{font-size:1.3cqw;border-width:.22cqw;padding:.7cqw 1cqw}
  .v-fit-rep-slam .tape{left:6cqw;top:11.4cqw;font-size:2.4cqw;padding:1.1cqw 1.8cqw;box-shadow:.7cqw .7cqw 0 color-mix(in srgb,var(--ink) 25%,transparent)}
  .v-fit-rep-slam .stick{right:6cqw;top:12cqw;font-size:1.8cqw;padding:1cqw 1.4cqw;box-shadow:.5cqw .5cqw 0 var(--ink)}
  .v-fit-rep-slam .rays{left:68cqw;top:31cqw;width:80cqw;height:80cqw;margin:-40cqw 0 0 -40cqw}
  .v-fit-rep-slam .burst{left:68cqw;top:31cqw;width:40cqw;height:40cqw;margin:-20cqw 0 0 -20cqw;border-width:.8cqw}
  .v-fit-rep-slam .n{left:46cqw;right:2cqw;top:9cqw;height:44cqw;font-size:36cqw;text-shadow:1cqw 1cqw 0 var(--ink)}
  .v-fit-rep-slam .repline{left:6cqw;right:56cqw;top:21cqw;font-size:1.5cqw}
  .v-fit-rep-slam .bar{left:6cqw;right:56cqw;top:23.8cqw;height:1.2cqw}
  .v-fit-rep-slam .h1{left:6cqw;right:54cqw;top:27cqw;font-size:6.2cqw}
  .v-fit-rep-slam .h1 .w:nth-child(n+3){text-shadow:.35cqw .35cqw 0 var(--ink)}
  .v-fit-rep-slam .cta{left:6cqw;right:56cqw;top:44cqw;padding:1.2cqw 1.2cqw 1.2cqw 2.6cqw;font-size:1.9cqw;box-shadow:0 1cqw 2cqw color-mix(in srgb,var(--secondary) 35%,transparent)}
  .v-fit-rep-slam .cta i{width:4cqw;height:4cqw}
  .v-fit-rep-slam .cta svg{width:2cqw;height:2cqw}
  .v-fit-rep-slam .foot{left:46cqw;right:0;top:51.6cqw;font-size:1.1cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-rep-slam .story{left:5cqw;right:5cqw;top:3.6cqw;gap:1cqw}
  .v-fit-rep-slam .story i{height:.7cqw}
  .v-fit-rep-slam .head{left:6cqw;right:6cqw;top:7cqw}
  .v-fit-rep-slam .brand{font-size:3cqw;gap:1.2cqw}
  .v-fit-rep-slam .brand svg{width:4.2cqw;height:4.2cqw}
  .v-fit-rep-slam .lab{font-size:1.9cqw;border-width:.3cqw;padding:.9cqw 1.3cqw}
  .v-fit-rep-slam .tape{left:6cqw;top:16cqw;font-size:3.4cqw;padding:1.5cqw 2.4cqw}
  .v-fit-rep-slam .stick{right:6cqw;top:17cqw;font-size:2.4cqw;padding:1.3cqw 1.9cqw}
  .v-fit-rep-slam .rays{left:72cqw;top:48cqw;width:110cqw;height:110cqw;margin:-55cqw 0 0 -55cqw}
  .v-fit-rep-slam .burst{left:72cqw;top:48cqw;width:50cqw;height:50cqw;margin:-25cqw 0 0 -25cqw;border-width:1cqw}
  .v-fit-rep-slam .n{left:50cqw;right:2cqw;top:24cqw;height:48cqw;font-size:34cqw;text-shadow:1.2cqw 1.2cqw 0 var(--ink)}
  .v-fit-rep-slam .repline{left:6cqw;right:52cqw;top:31cqw;font-size:2cqw;letter-spacing:.02em}
  .v-fit-rep-slam .repline>span:first-child{display:none}
  .v-fit-rep-slam .bar{left:6cqw;right:52cqw;top:35cqw;height:1.6cqw}
  .v-fit-rep-slam .h1{left:6cqw;right:50cqw;top:41cqw;font-size:8.4cqw}
  .v-fit-rep-slam .h1 .w:nth-child(n+3){text-shadow:.45cqw .45cqw 0 var(--ink)}
  .v-fit-rep-slam .cta{left:6cqw;right:6cqw;top:78cqw;padding:1.8cqw 1.8cqw 1.8cqw 4cqw;font-size:3cqw}
  .v-fit-rep-slam .cta i{width:6cqw;height:6cqw}
  .v-fit-rep-slam .cta svg{width:3cqw;height:3cqw}
  .v-fit-rep-slam .foot{top:92cqw;font-size:1.9cqw}
}
@keyframes fit-rep-slam-tone{from{background-position:0 0}to{background-position:0 3cqw}}
@keyframes fit-rep-slam-story{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes fit-rep-slam-rays{from{transform:rotate(0deg)}to{transform:rotate(18deg)}}
@keyframes fit-rep-slam-side{from{transform:translateY(0)}to{transform:translateY(4cqw)}}
@keyframes fit-rep-slam-shake{0%,9%{transform:translate(0,0)}9.6%{transform:translate(-1cqw,.8cqw)}10.4%{transform:translate(.8cqw,-.6cqw)}11.2%{transform:translate(-.4cqw,.3cqw)}12%,23%{transform:translate(0,0)}23.6%{transform:translate(1.2cqw,1cqw)}24.4%{transform:translate(-1cqw,-.7cqw)}25.2%{transform:translate(.5cqw,.4cqw)}26%,37%{transform:translate(0,0)}37.6%{transform:translate(-2cqw,1.6cqw)}38.4%{transform:translate(1.6cqw,-1.2cqw)}39.2%{transform:translate(-.9cqw,.6cqw)}40%{transform:translate(.4cqw,-.2cqw)}41%,100%{transform:translate(0,0)}}
@keyframes fit-rep-slam-burst{0%,8.8%{opacity:0;transform:scale(.3)}9%{opacity:.9;transform:scale(.45)}16%,22.8%{opacity:0;transform:scale(1.5)}23%{opacity:.9;transform:scale(.45)}30%,36.8%{opacity:0;transform:scale(1.5)}37%{opacity:1;transform:scale(.45)}46%,100%{opacity:0;transform:scale(1.8)}}
@keyframes fit-rep-slam-n8{0%,4%{opacity:0;transform:scale(2.8);filter:blur(2cqw);animation-timing-function:cubic-bezier(.7,0,.84,0)}9%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}10.5%{opacity:1;transform:scale(1.05);filter:blur(0)}12%,17%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}20%,100%{opacity:0;transform:scale(.6);filter:blur(1cqw)}}
@keyframes fit-rep-slam-n9{0%,18%{opacity:0;transform:scale(2.8);filter:blur(2cqw);animation-timing-function:cubic-bezier(.7,0,.84,0)}23%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}24.5%{opacity:1;transform:scale(1.05);filter:blur(0)}26%,31%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}34%,100%{opacity:0;transform:scale(.6);filter:blur(1cqw)}}
@keyframes fit-rep-slam-n10{0%,32%{opacity:0;transform:scale(3);filter:blur(2.4cqw);animation-timing-function:cubic-bezier(.7,0,.84,0)}37%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}39%{opacity:1;transform:scale(1.07);filter:blur(0)}41%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:ease-in-out}70%{opacity:1;transform:scale(1.025);filter:blur(0)}86%{opacity:1;transform:scale(1);filter:blur(0);animation-timing-function:cubic-bezier(.65,0,.35,1)}93%,100%{opacity:0;transform:scale(.8);filter:blur(1.2cqw)}}
@keyframes fit-rep-slam-rc{0%,8.8%{transform:translateY(0)}9%,22.8%{transform:translateY(-1em)}23%,36.8%{transform:translateY(-2em)}37%,95%{transform:translateY(-3em)}96%,100%{transform:translateY(0)}}
@keyframes fit-rep-slam-bar{0%,8.8%{transform:scaleX(.7)}9%,22.8%{transform:scaleX(.8)}23%,36.8%{transform:scaleX(.9)}37%,92%{transform:scaleX(1)}98%,100%{transform:scaleX(.7)}}
@keyframes fit-rep-slam-tape{0%{clip-path:inset(0 100% 0 0)}6%,88%{clip-path:inset(0 0 0 0)}95%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes fit-rep-slam-stick{0%,3%{opacity:0;transform:rotate(18deg) scale(1.4)}9%,88%{opacity:1;transform:rotate(6deg) scale(1)}94%,100%{opacity:0;transform:rotate(6deg) scale(.9)}}
@keyframes fit-rep-slam-l1{0%,38%{clip-path:inset(0 100% 0 0)}45%,88%{clip-path:inset(0 0 0 0)}95%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes fit-rep-slam-l2{0%,41%{clip-path:inset(0 100% 0 0)}48%,88%{clip-path:inset(0 0 0 0)}95%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes fit-rep-slam-cta{0%,43%{opacity:0;transform:translateY(6cqw)}51%,88%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(3cqw)}}
`,
};

export const fitHeartZone: SceneSpec = {
  id: "fit-heart-zone",
  slug: "mg-fit-heart-zone",
  name: "Heart Rate Zones",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "ecg-sweep-zone-marker",
  energy: "default",
  settle: 2.6,
  colors: {"ink": "#0E1A24", "accent": "#F0435A", "secondary": "#0E9F9A", "paper": "#F8FAFB"},
  fonts: {"display": "Geist", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.heading",
  tags: ["fitness", "heart-rate", "dashboard"],
  fields: [
    { key: "brand", label: "Brand", default: "Movara", maxChars: 14, role: "label" },
    { key: "title", label: "Card title", default: "Heart rate", maxChars: 18, role: "headline" },
    { key: "sub", label: "Session", default: "Tempo run · Coach Ana Reyes", maxChars: 30, role: "body" },
    { key: "zone", label: "Zone label", default: "Zone 4 · Threshold", maxChars: 20, role: "label" },
  ],
  html: `<div class="halo"></div>
    <div class="halo h2"></div>
    <div class="top">
      <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="brand">{{brand}}</span> <em>Health</em></div>
      <div class="sync"><i></i>SYNCED · MOVARA BAND 2</div>
    </div>
    <div class="card main">
      <div class="ch">
        <div class="ttl"><b data-21st-slot="title">{{title}}</b><small data-21st-slot="sub">{{sub}}</small></div>
        <div class="live"><i></i>LIVE</div>
      </div>
      <div class="strip">
        <div class="reveal">
          <div class="ecg"><svg viewBox="0 0 1200 210"><path d="M0 125 L16 125 Q22 108 28 125 L36 125 L39 138 L44 30 L49 160 L53 125 L64 125 Q74 96 84 125 L100 125 L116 125 Q122 108 128 125 L136 125 L139 138 L144 30 L149 160 L153 125 L164 125 Q174 96 184 125 L200 125 L216 125 Q222 108 228 125 L236 125 L239 138 L244 30 L249 160 L253 125 L264 125 Q274 96 284 125 L300 125 L316 125 Q322 108 328 125 L336 125 L339 138 L344 30 L349 160 L353 125 L364 125 Q374 96 384 125 L400 125 L416 125 Q422 108 428 125 L436 125 L439 138 L444 30 L449 160 L453 125 L464 125 Q474 96 484 125 L500 125 L516 125 Q522 108 528 125 L536 125 L539 138 L544 30 L549 160 L553 125 L564 125 Q574 96 584 125 L600 125 L616 125 Q622 108 628 125 L636 125 L639 138 L644 30 L649 160 L653 125 L664 125 Q674 96 684 125 L700 125 L716 125 Q722 108 728 125 L736 125 L739 138 L744 30 L749 160 L753 125 L764 125 Q774 96 784 125 L800 125 L816 125 Q822 108 828 125 L836 125 L839 138 L844 30 L849 160 L853 125 L864 125 Q874 96 884 125 L900 125 L916 125 Q922 108 928 125 L936 125 L939 138 L944 30 L949 160 L953 125 L964 125 Q974 96 984 125 L1000 125 L1016 125 Q1022 108 1028 125 L1036 125 L1039 138 L1044 30 L1049 160 L1053 125 L1064 125 Q1074 96 1084 125 L1100 125 L1116 125 Q1122 108 1128 125 L1136 125 L1139 138 L1144 30 L1149 160 L1153 125 L1164 125 Q1174 96 1184 125 L1200 125" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/></svg></div>
        </div>
        <div class="fade"></div>
        <div class="tag">ECG · 25 MM/S</div>
      </div>
      <div class="zones">
        <div class="zl"><span>Z1</span><span>Z2</span><span>Z3</span><span>Z4</span><span>Z5</span></div>
        <div class="zb"><i class="z1"></i><i class="z2"></i><i class="z3"></i><i class="z4"></i><i class="z5"></i>
          <div class="mk"><i></i><b data-21st-slot="zone">{{zone}}</b></div>
        </div>
      </div>
    </div>
    <div class="card bpmc">
      <div class="lbl">Current<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5s-7.5-4.6-7.5-10.4A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.7c0 5.8-7.5 10.4-7.5 10.4z"/></svg></div>
      <div class="num"><div class="big">1<span class="win"><span class="col"><b>28</b><b>29</b><b>30</b><b>31</b><b>32</b><b>33</b><b>34</b><b>35</b><b>36</b><b>37</b><b>38</b><b>39</b><b>40</b><b>41</b><b>42</b><b>43</b><b>44</b><b>45</b><b>46</b><b>47</b><b>48</b><b>49</b><b>50</b><b>51</b><b>52</b></span></span></div><span class="unit">BPM</span></div>
      <div class="delta"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 5l7 10H5z"/></svg>24 above resting</div>
    </div>
    <div class="card trend">
      <div class="lbl">Last 20 min<span>avg 138</span></div>
      <div class="chart"><svg viewBox="0 0 120 40"><defs><linearGradient id="fit-heart-zone-ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".28"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs><path d="M0 30L8 28 16 31 24 25 32 27 40 22 48 24 56 19 64 21 72 15 80 17 88 12 96 14 104 9 112 10 120 5V40H0Z" fill="url(#fit-heart-zone-ga)"/><path d="M0 30L8 28 16 31 24 25 32 27 40 22 48 24 56 19 64 21 72 15 80 17 88 12 96 14 104 9 112 10 120 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></div>
      <div class="dot"></div>
      <div class="st">
        <div><small>MAX</small>161</div>
        <div><small>HRV</small>48 ms</div>
        <div><small>RECOVERY</small>82%</div>
      </div>
    </div>`,
  css: `
.v-fit-heart-zone{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 58%,transparent);--strip:color-mix(in srgb,var(--paper) 95%,var(--accent))}
.v-fit-heart-zone[data-backdrop="on"]{background:linear-gradient(160deg,color-mix(in srgb,var(--paper) 96%,var(--ink)) 0%,color-mix(in srgb,var(--paper) 88%,var(--ink)) 100%)}
.v-fit-heart-zone[data-backdrop="off"] .halo{display:none}
.v-fit-heart-zone .halo{position:absolute;right:-12cqw;top:-16cqw;width:54cqw;height:54cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 16%,transparent),transparent);animation:fit-heart-zone-halo 6s ease-in-out infinite}
.v-fit-heart-zone .halo.h2{left:-14cqw;right:auto;top:auto;bottom:-24cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 14%,transparent),transparent)}
.v-fit-heart-zone .top{position:absolute;left:4cqw;right:4cqw;top:3.2cqw;display:flex;align-items:center;justify-content:space-between;animation:fit-heart-zone-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-heart-zone .brand{display:flex;align-items:center;gap:.9cqw;font:600 1.5cqw/1.3 var(--font-body);white-space:nowrap;letter-spacing:-.01em}
.v-fit-heart-zone .brand svg{flex:none;width:2.6cqw;height:2.6cqw;padding:.55cqw;border-radius:.8cqw;background:var(--secondary);color:#fff;box-sizing:border-box}
.v-fit-heart-zone .brand em{font-style:normal;color:var(--muted);font-weight:500}
.v-fit-heart-zone .sync{display:flex;align-items:center;gap:.8cqw;font:500 1.1cqw/1 var(--font-mono);color:var(--muted);letter-spacing:.04em}
.v-fit-heart-zone .sync i{width:.8cqw;height:.8cqw;border-radius:50%;background:#2BB673;box-shadow:0 0 0 .35cqw rgba(43,182,115,.18)}
.v-fit-heart-zone .card{position:absolute;background:var(--paper);border-radius:1.8cqw;border:1px solid color-mix(in srgb,var(--ink) 6%,transparent);box-shadow:0 .3cqw .8cqw color-mix(in srgb,var(--ink) 4%,transparent),0 2cqw 5cqw color-mix(in srgb,var(--ink) 9%,transparent)}
.v-fit-heart-zone .card{transform-origin:0 0}
.v-fit-heart-zone .main{left:4cqw;top:9.5cqw;width:59cqw;height:42.5cqw;animation:fit-heart-zone-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-heart-zone .ch{position:absolute;left:2.4cqw;right:2.4cqw;top:2.2cqw;display:flex;justify-content:space-between;align-items:flex-start}
.v-fit-heart-zone .ch b{display:block;font:600 2.1cqw/1.25 var(--font-display)}
.v-fit-heart-zone .ch small{display:block;margin-top:.3cqw;font:400 1.4cqw/1.3 var(--font-body);color:var(--muted)}
.v-fit-heart-zone .live{display:flex;align-items:center;gap:.6cqw;padding:.7cqw 1.1cqw;border-radius:3cqw;background:color-mix(in srgb,var(--accent) 9%,transparent);color:color-mix(in srgb,var(--accent) 80%,var(--ink));font:600 1.05cqw/1 var(--font-mono);letter-spacing:.14em}
.v-fit-heart-zone .live i{width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);animation:fit-heart-zone-blink 1s ease-in-out infinite}
.v-fit-heart-zone .strip{position:absolute;left:2.4cqw;right:2.4cqw;top:8.4cqw;height:19cqw;border-radius:1cqw;overflow:hidden;background-color:var(--strip);background-image:linear-gradient(color-mix(in srgb,var(--accent) 14%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--accent) 14%,transparent) 1px,transparent 1px),linear-gradient(color-mix(in srgb,var(--accent) 6%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--accent) 6%,transparent) 1px,transparent 1px);background-size:4.5cqw 4.5cqw,4.5cqw 4.5cqw,.9cqw .9cqw,.9cqw .9cqw}
.v-fit-heart-zone .reveal{position:absolute;inset:0;clip-path:inset(0 100% 0 0);animation:fit-heart-zone-reveal 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-heart-zone .ecg{position:absolute;left:0;top:0;width:200%;height:100%;animation:fit-heart-zone-ecg 6s linear infinite}
.v-fit-heart-zone .ecg svg{color:var(--accent);display:block;width:100%;height:100%;filter:drop-shadow(0 0 .6cqw color-mix(in srgb,var(--accent) 35%,transparent))}
.v-fit-heart-zone .fade{position:absolute;inset:0;background:linear-gradient(90deg,var(--strip) 0%,transparent 12%,transparent 88%,var(--strip) 100%)}
.v-fit-heart-zone .tag{position:absolute;left:1.4cqw;top:1.3cqw;font:500 .95cqw/1 var(--font-mono);color:color-mix(in srgb,var(--accent) 75%,var(--ink));letter-spacing:.12em}
.v-fit-heart-zone .zones{position:absolute;left:2.4cqw;right:2.4cqw;top:30.6cqw}
.v-fit-heart-zone .zl{display:flex;font:500 1cqw/1 var(--font-mono);color:var(--muted);letter-spacing:.06em}
.v-fit-heart-zone .zl span{width:20%;text-align:center}
.v-fit-heart-zone .zb{position:relative;display:flex;gap:.5cqw;margin-top:1cqw;height:1.3cqw}
.v-fit-heart-zone .zb i{flex:1;border-radius:1cqw}
.v-fit-heart-zone .zb .z1{background:#CBD5DC}
.v-fit-heart-zone .zb .z2{background:#86CDEA}
.v-fit-heart-zone .zb .z3{background:#45C28C}
.v-fit-heart-zone .zb .z4{position:relative;background:#F5A623}
.v-fit-heart-zone .zb .z4::after{content:"";position:absolute;inset:-.4cqw;border-radius:1.4cqw;box-shadow:0 0 0 .4cqw rgba(245,166,35,.28),0 0 1.6cqw rgba(245,166,35,.5);opacity:0;animation:fit-heart-zone-z4 6s ease-out infinite}
.v-fit-heart-zone .zb .z5{background:var(--accent)}
.v-fit-heart-zone .mk{position:absolute;left:70%;top:50%;width:2.6cqw;height:2.6cqw;margin:-1.3cqw 0 0 -1.3cqw;animation:fit-heart-zone-mk 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-heart-zone .mk i{position:absolute;inset:0;border-radius:50%;background:var(--paper);border:.5cqw solid var(--ink);box-sizing:border-box;box-shadow:0 .4cqw 1cqw color-mix(in srgb,var(--ink) 25%,transparent)}
.v-fit-heart-zone .mk b{position:absolute;top:3.4cqw;left:50%;transform:translateX(-50%);white-space:nowrap;padding:.6cqw 1cqw;border-radius:.7cqw;background:var(--ink);color:var(--paper);font:600 1.3cqw/1.3 var(--font-body)}
.v-fit-heart-zone .bpmc{left:66cqw;top:9.5cqw;width:30cqw;height:20cqw;animation:fit-heart-zone-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-heart-zone .lbl{position:absolute;left:2.2cqw;right:2.2cqw;top:2.2cqw;display:flex;align-items:center;justify-content:space-between;font:500 1.15cqw/1 var(--font-body);color:var(--muted)}
.v-fit-heart-zone .lbl svg{width:2.4cqw;height:2.4cqw;color:var(--accent);animation:fit-heart-zone-beat .5s ease-out infinite}
.v-fit-heart-zone .num{position:absolute;left:2.2cqw;top:6.2cqw;display:flex;align-items:flex-end;gap:.8cqw}
.v-fit-heart-zone .big{display:flex;font:700 8.4cqw/1 var(--font-body);letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.v-fit-heart-zone .win{display:block;height:1em;overflow:hidden}
.v-fit-heart-zone .col{display:block;animation:fit-heart-zone-count 6s linear infinite}
.v-fit-heart-zone .col b{display:block;height:1em;font-weight:700}
.v-fit-heart-zone .unit{padding-bottom:1cqw;font:600 1.5cqw/1 var(--font-body);color:var(--muted)}
.v-fit-heart-zone .delta svg{width:1.1cqw;height:1.1cqw}
.v-fit-heart-zone .delta{position:absolute;left:2.2cqw;bottom:2cqw;display:flex;align-items:center;gap:.5cqw;padding:.6cqw 1cqw;border-radius:3cqw;background:color-mix(in srgb,var(--secondary) 10%,transparent);color:color-mix(in srgb,var(--secondary) 75%,var(--ink));font:600 1.05cqw/1 var(--font-body)}
.v-fit-heart-zone .trend{left:66cqw;top:31.5cqw;width:30cqw;height:20.5cqw;animation:fit-heart-zone-in3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-heart-zone .chart{position:absolute;left:2.2cqw;top:5cqw;width:25.6cqw;height:8.5cqw;clip-path:inset(0 100% 0 0);animation:fit-heart-zone-reveal2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-heart-zone .chart svg{color:var(--accent);display:block;width:100%;height:100%}
.v-fit-heart-zone .dot{position:absolute;left:27.1cqw;top:5.35cqw;opacity:0;animation:fit-heart-zone-dot 6s cubic-bezier(.2,.8,.2,1) infinite;width:1.4cqw;height:1.4cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .45cqw color-mix(in srgb,var(--accent) 20%,transparent)}
.v-fit-heart-zone .st{position:absolute;left:2.2cqw;right:2.2cqw;bottom:2cqw;display:flex;justify-content:space-between}
.v-fit-heart-zone .st div{font:700 1.6cqw/1 var(--font-body)}
.v-fit-heart-zone .st small{display:block;margin-bottom:.6cqw;font:500 .85cqw/1 var(--font-mono);color:var(--muted);letter-spacing:.12em}
@container (max-aspect-ratio: 4/5){
  .v-fit-heart-zone .top{left:6cqw;right:6cqw;top:4cqh}
  .v-fit-heart-zone .brand{font-size:5.4cqw;gap:2.2cqw}
  .v-fit-heart-zone .brand svg{width:8cqw;height:8cqw;padding:1.6cqw;border-radius:2.2cqw}
  .v-fit-heart-zone .sync{display:none}
  .v-fit-heart-zone .sync i{width:2cqw;height:2cqw}
  .v-fit-heart-zone .bpmc{left:6cqw;top:12cqh;scale:2.93}
  .v-fit-heart-zone .trend{display:none}
  .v-fit-heart-zone .main{left:6cqw;top:calc(12cqh + 66cqw);height:46cqw;scale:1.49}
  .v-fit-heart-zone .ch b{font-size:3.7cqw}
  .v-fit-heart-zone .ch small{font-size:3.7cqw;white-space:nowrap}
  .v-fit-heart-zone .live{display:none}
  .v-fit-heart-zone .strip{top:12.6cqw;height:14.6cqw}
  .v-fit-heart-zone .zones{top:29.4cqw}
  .v-fit-heart-zone .mk b{top:3.2cqw;left:auto;right:-1.4cqw;transform:none;font-size:3.7cqw;padding:.8cqw 1.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-heart-zone .top{left:11.65cqw;right:11.65cqw;top:4.6cqw}
  .v-fit-heart-zone .brand{font-size:2.2cqw}
  .v-fit-heart-zone .brand svg{width:3.6cqw;height:3.6cqw;padding:.7cqw}
  .v-fit-heart-zone .sync{font-size:1.5cqw}
  .v-fit-heart-zone .bpmc{left:11.65cqw;top:11cqw;scale:1.28}
  .v-fit-heart-zone .trend{left:50cqw;top:11cqw;scale:1.28}
  .v-fit-heart-zone .main{left:11.65cqw;top:39.5cqw;scale:1.3}
  .v-fit-heart-zone .ch small{font-size:1.45cqw}
  .v-fit-heart-zone .mk b{font-size:1.45cqw}
}
@keyframes fit-heart-zone-halo{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.12);opacity:1}}
@keyframes fit-heart-zone-blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes fit-heart-zone-beat{0%,100%{transform:scale(1)}15%{transform:scale(1.2)}35%{transform:scale(1)}}
@keyframes fit-heart-zone-ecg{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes fit-heart-zone-in1{0%{opacity:0;transform:translateY(3cqw)}12%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1.5cqw)}}
@keyframes fit-heart-zone-in2{0%,4%{opacity:0;transform:translateY(3cqw)}16%,87%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(-1.5cqw)}}
@keyframes fit-heart-zone-in3{0%,8%{opacity:0;transform:translateY(3cqw)}20%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(-1.5cqw)}}
@keyframes fit-heart-zone-reveal{0%,4%{clip-path:inset(0 100% 0 0)}20%,100%{clip-path:inset(0 0 0 0)}}
@keyframes fit-heart-zone-reveal2{0%,12%{clip-path:inset(0 100% 0 0)}34%,100%{clip-path:inset(0 0 0 0)}}
@keyframes fit-heart-zone-count{0%,8%{transform:translateY(0);animation-timing-function:steps(24,end)}32%,95%{transform:translateY(-24em)}96%,100%{transform:translateY(0)}}
@keyframes fit-heart-zone-mk{0%,8%{transform:translateX(-21.7cqw)}32%,94%{transform:translateX(0)}100%{transform:translateX(-21.7cqw)}}
@keyframes fit-heart-zone-z4{0%,30%{opacity:0}36%{opacity:1}50%,86%{opacity:.7}96%,100%{opacity:0}}
@keyframes fit-heart-zone-dot{0%,32%{opacity:0;transform:scale(0)}38%,100%{opacity:1;transform:scale(1)}}
`,
};

export const fitTransformation: SceneSpec = {
  id: "fit-transformation",
  slug: "mg-fit-transformation",
  name: "Member Transformation Story",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "before-after-slider-stats",
  energy: "calm",
  settle: 3.0,
  colors: {"ink": "#1C1814", "accent": "#C8431F", "secondary": "#F08A47", "paper": "#EEE7DB"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["fitness", "before-after", "member-story"],
  fields: [
    { key: "kicker", label: "Kicker", default: "MOVARA · MEMBER STORY No. 041", maxChars: 32, role: "kicker" },
    { key: "headline", label: "Headline", default: "Daniel, twelve weeks stronger.", maxChars: 40, role: "headline" },
    { key: "coach", label: "Coach", default: "Lena Ortiz", maxChars: 20, role: "name" },
  ],
  html: `<div class="paper"></div>
    <div class="frame">
      <div class="cam">
        <div class="ph before">
          <div class="win"></div>
          <svg viewBox="0 0 480 440" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="fit-transformation-gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#59626A"/><stop offset="1" stop-color="#363D43"/></linearGradient></defs><g fill="url(#fit-transformation-gb)"><ellipse cx="226" cy="236" rx="50" ry="58" transform="rotate(14 226 236)"/><path d="M92 440C104 372 146 334 198 318c16-5 26-12 30-26h20c4 14 14 21 30 26 52 16 94 54 106 122z"/></g></svg>
          <div class="pill"><i></i>BEFORE · WEEK 00</div>
        </div>
        <div class="ph after">
          <div class="streak"></div>
          <svg class="fig" viewBox="0 0 480 440" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="fit-transformation-ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A2219"/><stop offset="1" stop-color="#1B100C"/></linearGradient></defs><g fill="url(#fit-transformation-ga)" stroke="#FFD1A0" stroke-width="3"><ellipse cx="240" cy="182" rx="50" ry="60"/><path d="M38 440C52 352 118 306 186 294c22-4 36-12 40-32h28c4 20 18 28 40 32 68 12 134 58 148 146z"/></g></svg>
          <div class="pill"><i></i>AFTER · WEEK 12</div>
        </div>
        <div class="grain"></div>
      </div>
      <div class="slider"><div class="knob"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg></div></div>
    </div>
    <div class="cap">Fig. 1, Daniel K., 34. Photographed at Movara Eastside.</div>
    <div class="col">
      <div class="kick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
      <div class="h" data-21st-slot="headline">{{headline|words}}</div>
      <div class="rows">
        <div class="row r1"><b>+40<sup>kg</sup></b><span>added to his deadlift<br>since the first session</span></div>
        <div class="row r2"><b>58<sup>bpm</sup></b><span>resting heart rate,<br>down from 71</span></div>
        <div class="row r3"><b>41<sup>/48</sup></b><span>sessions attended,<br>zero Mondays missed</span></div>
      </div>
      <div class="sig"><small>COACHED BY</small><strong data-21st-slot="coach">{{coach}}</strong></div>
    </div>`,
  css: `
.v-fit-transformation{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 66%,transparent);--soft:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-fit-transformation[data-backdrop="on"]{background:var(--paper)}
.v-fit-transformation[data-backdrop="off"] .paper{display:none}
.v-fit-transformation .paper{position:absolute;inset:0;background:radial-gradient(80cqw 50cqw at 70% 30%,rgba(255,255,255,.55),transparent 70%),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .1  0 0 0 0 .08  0 0 0 0 .06  0 0 0 .09 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");background-size:auto,14cqw 14cqw}
.v-fit-transformation .frame{--fw:48cqw;position:absolute;left:4cqw;top:5.5cqw;width:var(--fw);height:44cqw;overflow:hidden;border-radius:.4cqw;box-shadow:0 .4cqw .8cqw rgba(40,25,10,.12),0 2.4cqw 5cqw rgba(40,25,10,.18)}
.v-fit-transformation .cam{position:absolute;inset:0;animation:fit-transformation-kb 6s ease-in-out infinite}
.v-fit-transformation .ph{position:absolute;inset:0}
.v-fit-transformation .ph svg{position:absolute;inset:0;width:100%;height:100%}
.v-fit-transformation .before{background:linear-gradient(170deg,#AEB6BB 0%,#7D878E 100%)}
.v-fit-transformation .before .win{position:absolute;left:8%;top:10%;width:22%;height:46%;background:linear-gradient(180deg,rgba(255,255,255,.35),rgba(255,255,255,.08));border-radius:.3cqw}
.v-fit-transformation .after{background:radial-gradient(30cqw 30cqw at 50% 42%,color-mix(in srgb,var(--secondary) 50%,#fff) 0%,var(--secondary) 45%,var(--accent) 100%);clip-path:inset(0 0 0 100%);animation:fit-transformation-wipe 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-transformation .after .streak{position:absolute;inset:0;background:repeating-linear-gradient(105deg,rgba(255,236,200,0) 0 5cqw,rgba(255,236,200,.18) 5cqw 6.4cqw,rgba(255,236,200,0) 6.4cqw 11cqw)}
.v-fit-transformation .after .fig{filter:drop-shadow(0 0 .8cqw rgba(255,200,140,.7))}
.v-fit-transformation .grain{position:absolute;inset:0;opacity:.5;mix-blend-mode:overlay;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>");background-size:12cqw 12cqw;animation:fit-transformation-grain .5s steps(3) infinite}
.v-fit-transformation .pill{position:absolute;top:2cqw;display:flex;align-items:center;gap:.7cqw;padding:.7cqw 1.1cqw;border-radius:.4cqw;font:600 1cqw/1 var(--font-mono);letter-spacing:.16em}
.v-fit-transformation .before .pill{left:2cqw;background:rgba(28,24,20,.72);color:#E8E2D8}
.v-fit-transformation .after .pill{right:2cqw;background:#1C1814;color:#FFD9B0}
.v-fit-transformation .pill i{width:.7cqw;height:.7cqw;border-radius:50%;background:currentColor}
.v-fit-transformation .slider{position:absolute;left:0;top:0;bottom:0;width:0;transform:translateX(var(--fw));animation:fit-transformation-slide 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-transformation .slider::before{content:"";position:absolute;top:0;bottom:0;left:-.12cqw;width:.24cqw;background:#FFF8EE;box-shadow:0 0 1.2cqw rgba(0,0,0,.25)}
.v-fit-transformation .knob{position:absolute;left:-2cqw;top:50%;width:4cqw;height:4cqw;margin-top:-2cqw;border-radius:50%;background:#FFF8EE;display:grid;place-items:center;box-shadow:0 .6cqw 1.6cqw rgba(0,0,0,.3);color:#1C1814}
.v-fit-transformation .knob svg{width:2.4cqw;height:2.4cqw}
.v-fit-transformation .cap{position:absolute;left:4cqw;top:51.2cqw;font:italic 400 1.3cqw/1.2 var(--font-display);color:var(--muted);animation:fit-transformation-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-transformation .col{position:absolute;left:56.5cqw;top:6.5cqw;width:39.5cqw}
.v-fit-transformation .kick{display:flex;align-items:center;gap:.8cqw;font:600 1.1cqw/1.3 var(--font-mono);letter-spacing:.18em;color:var(--soft);white-space:nowrap;animation:fit-transformation-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-transformation .kick svg{flex:none;width:1.8cqw;height:1.8cqw;color:var(--accent)}
.v-fit-transformation .h{margin-top:1.4cqw;font:400 4.3cqw/1.2 var(--font-display);letter-spacing:-.01em;clip-path:inset(0 0 100% 0);animation:fit-transformation-h 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-transformation .h .w{line-height:1.2}
.v-fit-transformation .h .w:last-child{font-style:italic;color:var(--accent)}
.v-fit-transformation .rows{margin-top:2.2cqw}
.v-fit-transformation .row{position:relative;display:flex;align-items:center;gap:2cqw;padding:1.3cqw 0}
.v-fit-transformation .row::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:color-mix(in srgb,var(--ink) 28%,transparent);transform-origin:left}
.v-fit-transformation .row b{flex:none;width:15cqw;font:400 4.4cqw/1.1 var(--font-display);letter-spacing:-.02em}
.v-fit-transformation .row b sup{font-size:.45em;vertical-align:top;margin-left:.2em;font-family:var(--font-body);font-weight:500}
.v-fit-transformation .row span{font:400 1.25cqw/1.35 var(--font-body);color:var(--muted)}
.v-fit-transformation .r1{animation:fit-transformation-r1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-transformation .r2{animation:fit-transformation-r2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-transformation .r3{animation:fit-transformation-r3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-transformation .sig{position:relative;display:flex;align-items:flex-end;gap:1.4cqw;padding-top:1.2cqw;border-top:1px solid color-mix(in srgb,var(--ink) 28%,transparent)}
.v-fit-transformation .sig small{flex:none;white-space:nowrap;padding-bottom:.9cqw;font:600 .95cqw/1 var(--font-mono);letter-spacing:.18em;color:var(--soft)}
.v-fit-transformation .sig strong{min-width:0;font:italic 400 3.4cqw/1.25 var(--font-display);color:var(--accent);white-space:normal;clip-path:inset(0 100% 0 0);animation:fit-transformation-sig 6s cubic-bezier(.65,0,.35,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-fit-transformation .frame{--fw:88cqw;left:6cqw;top:31cqh;height:56cqw}
  .v-fit-transformation .pill{top:3cqw;font-size:2.6cqw;padding:1.4cqw 2cqw;gap:1.4cqw}
  .v-fit-transformation .before .pill{left:3cqw}
  .v-fit-transformation .after .pill{right:3cqw}
  .v-fit-transformation .pill i{width:1.6cqw;height:1.6cqw}
  .v-fit-transformation .knob{left:-4cqw;width:8cqw;height:8cqw;margin-top:-4cqw}
  .v-fit-transformation .knob svg{width:4.6cqw;height:4.6cqw}
  .v-fit-transformation .cap{display:none}
  .v-fit-transformation .col{left:6cqw;width:88cqw;top:4cqh}
  .v-fit-transformation .kick{font-size:5.4cqw;gap:2cqw;white-space:normal;letter-spacing:.06em}
  .v-fit-transformation .kick svg{width:5cqw;height:5cqw}
  .v-fit-transformation .h{font-size:10.4cqw;margin-top:2cqw}
  .v-fit-transformation .rows{position:absolute;left:0;right:0;top:62cqh;margin:0}
  .v-fit-transformation .row{gap:4cqw;padding:1.6cqw 0}
  .v-fit-transformation .row b{width:28cqw;font-size:8.4cqw}
  .v-fit-transformation .row span{font-size:3.6cqw}
  .v-fit-transformation .sig{position:absolute;left:0;right:0;top:83cqh;gap:3cqw;padding-top:2.4cqw}
  .v-fit-transformation .sig small{font-size:2.8cqw;padding-bottom:2.2cqw}
  .v-fit-transformation .sig strong{font-size:9cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-transformation .frame{--fw:48cqw;left:5cqw;top:6cqw;height:84cqw}
  .v-fit-transformation .pill{font-size:1.5cqw;padding:1cqw 1.4cqw}
  .v-fit-transformation .knob{left:-2.8cqw;width:5.6cqw;height:5.6cqw;margin-top:-2.8cqw}
  .v-fit-transformation .knob svg{width:3.2cqw;height:3.2cqw}
  .v-fit-transformation .cap{left:5cqw;width:48cqw;top:91.6cqw;font-size:1.9cqw}
  .v-fit-transformation .col{left:58cqw;width:37cqw;top:7cqw}
  .v-fit-transformation .kick{font-size:1.9cqw;white-space:normal;letter-spacing:.08em}
  .v-fit-transformation .kick svg{width:2.6cqw;height:2.6cqw}
  .v-fit-transformation .h{font-size:6.2cqw;margin-top:2cqw}
  .v-fit-transformation .rows{margin-top:3cqw}
  .v-fit-transformation .row{gap:2cqw;padding:2cqw 0}
  .v-fit-transformation .row b{width:15cqw;font-size:5.6cqw}
  .v-fit-transformation .row span{font-size:1.85cqw}
  .v-fit-transformation .sig{gap:1.6cqw;padding-top:2cqw}
  .v-fit-transformation .sig small{font-size:1.5cqw;padding-bottom:1.4cqw}
  .v-fit-transformation .sig strong{font-size:5.4cqw}
}
@keyframes fit-transformation-kb{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
@keyframes fit-transformation-grain{0%{background-position:0 0}33%{background-position:-3cqw 2cqw}66%{background-position:2cqw -4cqw}100%{background-position:0 0}}
@keyframes fit-transformation-wipe{0%,10%{clip-path:inset(0 0 0 100%)}24%{clip-path:inset(0 0 0 30%)}34%,80%{clip-path:inset(0 0 0 50%)}93%,100%{clip-path:inset(0 0 0 100%)}}
@keyframes fit-transformation-slide{0%,10%{transform:translateX(var(--fw))}24%{transform:translateX(calc(var(--fw) * .3))}34%,80%{transform:translateX(calc(var(--fw) * .5))}93%,100%{transform:translateX(var(--fw))}}
@keyframes fit-transformation-in{0%,4%{opacity:0;transform:translateY(1.5cqw)}14%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@keyframes fit-transformation-h{0%,8%{clip-path:inset(0 0 100% 0);transform:translateY(2cqw);opacity:1}22%,86%{clip-path:inset(-10% -5% -10% 0);transform:translateY(0);opacity:1}94%,100%{clip-path:inset(0 0 0 0);transform:translateY(0);opacity:0}}
@keyframes fit-transformation-r1{0%,18%{opacity:0;transform:translateY(2cqw)}30%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@keyframes fit-transformation-r2{0%,23%{opacity:0;transform:translateY(2cqw)}35%,87%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes fit-transformation-r3{0%,28%{opacity:0;transform:translateY(2cqw)}40%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(0)}}
@keyframes fit-transformation-sig{0%,36%{clip-path:inset(0 100% 0 0);opacity:1}48%,88%{clip-path:inset(0 0 0 0);opacity:1}96%,100%{clip-path:inset(0 0 0 0);opacity:0}}
`,
};

export const fitClassSchedule: SceneSpec = {
  id: "fit-class-schedule",
  slug: "mg-fit-class-schedule",
  name: "Class Schedule Booking",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "grid-tap-to-book-toast",
  energy: "default",
  settle: 3.1,
  colors: {"ink": "#2A2438", "accent": "#7B5CE0", "secondary": "#C8FF2E", "paper": "#FBF7F1"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["fitness", "schedule", "booking"],
  fields: [
    { key: "kicker", label: "Studio", default: "MOVARA STUDIO · SOHO", maxChars: 28, role: "kicker" },
    { key: "title", label: "Headline", default: "This week on the mat", maxChars: 28, role: "headline" },
    { key: "picked", label: "Booked class", default: "Power Yoga", maxChars: 16, role: "label" },
    { key: "toast", label: "Confirmation", default: "You're in, Sam.", maxChars: 22, role: "label" },
  ],
  html: `<div class="blob"></div>
    <div class="head">
      <div class="kick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
      <div class="ttl" data-21st-slot="title">{{title|words}}</div>
    </div>
    <div class="week"><span>‹</span>Oct 13 to 19<span>›</span></div>
    <div class="toast">
      <div class="av">AR</div>
      <div class="tx"><b data-21st-slot="toast">{{toast}}</b><small>Power Yoga with Ana · Wed 18:30</small></div>
      <div class="cal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/></svg></div>
      <i class="bar"></i>
    </div>
    <div class="grid">
      <div></div><div class="dh now">Mon <b>13</b></div><div class="dh">Tue <b>14</b></div><div class="dh">Wed <b>15</b></div><div class="dh">Thu <b>16</b></div><div class="dh">Fri <b>17</b></div>
      <div class="tm">07:00</div><div class="c yoga"><b>Sunrise Flow</b><small>60 min · Ana</small></div><div class="c spin"><b>Spin Ride</b><small>45 min · Theo</small></div><div class="c yoga"><b>Mobility</b><small>45 min · Mia</small></div><div class="c hiit"><b>HIIT 30</b><small>30 min · Jonah</small></div><div class="c yoga"><b>Sunrise Flow</b><small>60 min · Ana</small></div><div class="tm">12:30</div><div class="c pil"><b>Core Pilates</b><small>50 min · Mia</small></div><div class="c empty"><span>Open floor</span></div><div class="c pil"><b>Barre Burn</b><small>45 min · Lena</small></div><div class="c spin"><b>Lunch Ride</b><small>30 min · Theo</small></div><div class="c str"><b>Strength 101</b><small>50 min · Lena</small></div><div class="tm">18:30</div><div class="c hiit"><b>HIIT 45</b><small>45 min · Jonah</small></div><div class="c str"><b>Strength Basics</b><small>60 min · Lena</small></div><div class="c yoga tgt"><b>Power Yoga</b><small>60 min · Ana</small><div class="pick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><b data-21st-slot="picked">{{picked}}</b><small>Booked · 3 spots left</small></div><i class="ripple"></i></div><div class="c yoga"><b>Yin &amp; Breath</b><small>75 min · Mia</small></div><div class="c spin"><b>Spin Party</b><small>45 min · Theo</small></div>
    </div>
    <div class="legend"><span class="yoga">Yoga</span><span class="pil">Pilates</span><span class="hiit">HIIT</span><span class="spin">Spin</span><span class="str">Strength</span></div>
    <div class="cursor"><svg viewBox="0 0 24 24"><path d="M5 3l14 8.2-6.1 1.3 3.6 6.6-2.6 1.4-3.6-6.6L5.6 18z" fill="currentColor" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg></div>`,
  css: `
.v-fit-class-schedule{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 60%,transparent);--card:color-mix(in srgb,var(--paper) 55%,#fff)}
.v-fit-class-schedule[data-backdrop="on"]{background:linear-gradient(160deg,color-mix(in srgb,var(--paper) 90%,var(--accent)) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper) 96%,var(--ink)) 100%)}
.v-fit-class-schedule[data-backdrop="off"] .blob{display:none}
.v-fit-class-schedule .blob{position:absolute;right:-12cqw;top:-18cqw;width:48cqw;height:48cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 35%,transparent),transparent);animation:fit-class-schedule-blob 6s ease-in-out infinite}
.v-fit-class-schedule .head{position:absolute;left:5cqw;top:4cqw;animation:fit-class-schedule-head 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-class-schedule .kick{display:flex;align-items:center;gap:.7cqw;font:500 1.1cqw/1.3 var(--font-mono);letter-spacing:.18em;white-space:nowrap;color:var(--muted)}
.v-fit-class-schedule .kick svg{flex:none;width:1.7cqw;height:1.7cqw;color:var(--ink)}
.v-fit-class-schedule .ttl{margin-top:.6cqw;font:400 4.4cqw/1.25 var(--font-display);letter-spacing:-.01em}
.v-fit-class-schedule .ttl .w{line-height:1.25}
.v-fit-class-schedule .ttl .w:last-child{font-style:italic;color:var(--accent)}
.v-fit-class-schedule .week{position:absolute;right:5cqw;top:5.4cqw;display:flex;align-items:center;gap:1.2cqw;padding:.9cqw 1.4cqw;border-radius:5cqw;background:var(--card);box-shadow:0 .3cqw 1cqw color-mix(in srgb,var(--ink) 8%,transparent);font:500 1.3cqw/1 var(--font-body);animation:fit-class-schedule-week 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-class-schedule .week span{color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-fit-class-schedule .grid{position:absolute;left:5cqw;top:15cqw;width:90cqw;display:grid;grid-template-columns:7cqw repeat(5,1fr);grid-template-rows:3.4cqw repeat(3,9.6cqw);gap:.8cqw;animation:fit-class-schedule-wipe 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-class-schedule .dh{display:flex;align-items:center;gap:.5cqw;font:500 1.2cqw/1 var(--font-body);color:var(--muted);padding-left:.4cqw}
.v-fit-class-schedule .dh b{font-weight:600;color:var(--ink)}
.v-fit-class-schedule .dh.now b{display:inline-grid;place-items:center;width:2.4cqw;height:2.4cqw;border-radius:50%;background:var(--ink);color:var(--paper);font-size:1.1cqw}
.v-fit-class-schedule .tm{font:500 1.1cqw/1 var(--font-mono);color:var(--muted);padding-top:1.2cqw}
.v-fit-class-schedule .c{position:relative;border-radius:1.2cqw;padding:1.1cqw 1.2cqw;display:flex;flex-direction:column;justify-content:space-between;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 5%,transparent)}
.v-fit-class-schedule .c b{font:600 1.4cqw/1.15 var(--font-body);letter-spacing:-.01em}
.v-fit-class-schedule .c small{font:400 1.02cqw/1 var(--font-body);opacity:.7}
.v-fit-class-schedule .c::before{content:"";position:absolute;right:1.1cqw;top:1.2cqw;width:.8cqw;height:.8cqw;border-radius:50%;background:currentColor;opacity:.5}
.v-fit-class-schedule .yoga{background:#DCEBDD;color:#2E5A3B}
.v-fit-class-schedule .pil{background:#E8DFFB;color:#4E3A8E}
.v-fit-class-schedule .hiit{background:#FFDCCF;color:#9A3A1E}
.v-fit-class-schedule .spin{background:#D8E7FF;color:#244E8F}
.v-fit-class-schedule .str{background:#FFECBC;color:#7A5410}
.v-fit-class-schedule .c.empty{background:transparent;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 12%,transparent);justify-content:center;align-items:center}
.v-fit-class-schedule .c.empty::before{display:none}
.v-fit-class-schedule .c.empty span{font:italic 400 1.5cqw/1 var(--font-display);color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-fit-class-schedule .tgt{animation:fit-class-schedule-tgt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-class-schedule .pick{position:absolute;inset:0;border-radius:1.2cqw;background:linear-gradient(150deg,color-mix(in srgb,var(--ink) 85%,var(--accent)),var(--ink));color:var(--paper);padding:1.1cqw 1.2cqw;display:flex;flex-direction:column;justify-content:flex-end;gap:.5cqw;box-shadow:0 1.2cqw 2.4cqw color-mix(in srgb,var(--ink) 30%,transparent);clip-path:circle(0% at 50% 50%);animation:fit-class-schedule-pick 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-class-schedule .pick svg{position:absolute;right:1cqw;top:1cqw;width:2.2cqw;height:2.2cqw;padding:.4cqw;border-radius:50%;background:var(--secondary);color:#211B33}
.v-fit-class-schedule .pick b{font:600 1.5cqw/1.25 var(--font-body)}
.v-fit-class-schedule .pick small{opacity:.75}
.v-fit-class-schedule .ripple{position:absolute;left:50%;top:50%;width:6cqw;height:6cqw;margin:-3cqw 0 0 -3cqw;border-radius:50%;border:.25cqw solid var(--accent);opacity:0;animation:fit-class-schedule-ripple 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-class-schedule .legend{position:absolute;left:12.8cqw;top:51.2cqw;display:flex;gap:2cqw;font:500 1.05cqw/1 var(--font-body);color:var(--muted);animation:fit-class-schedule-head 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-class-schedule .legend span{display:flex;align-items:center;gap:.6cqw;background:none}
.v-fit-class-schedule .legend span::before{content:"";width:1cqw;height:1cqw;border-radius:.3cqw;background:currentColor}
.v-fit-class-schedule .legend .yoga{color:#6FA77E}
.v-fit-class-schedule .legend .pil{color:#9C86E0}
.v-fit-class-schedule .legend .hiit{color:#F08A66}
.v-fit-class-schedule .legend .spin{color:#6E9BE6}
.v-fit-class-schedule .legend .str{color:#E2B23F}
.v-fit-class-schedule .toast{position:absolute;right:5cqw;top:3.6cqw;width:30cqw;display:flex;align-items:center;gap:1.2cqw;padding:1.2cqw 1.4cqw;border-radius:1.6cqw;background:var(--card);box-shadow:0 1.6cqw 3.6cqw color-mix(in srgb,var(--ink) 16%,transparent),0 .2cqw .6cqw color-mix(in srgb,var(--ink) 6%,transparent);overflow:hidden;opacity:0;animation:fit-class-schedule-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-class-schedule .av{flex:none;width:3.6cqw;height:3.6cqw;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#F7D9C4,#D79A7C 60%,#A8664E);color:#fff;font:600 1.15cqw/1 var(--font-body)}
.v-fit-class-schedule .tx b{display:block;font:600 1.45cqw/1.3 var(--font-body);white-space:nowrap}
.v-fit-class-schedule .tx small{display:block;margin-top:.2cqw;font:400 1.1cqw/1 var(--font-body);color:var(--muted)}
.v-fit-class-schedule .cal{margin-left:auto;width:3cqw;height:3cqw;border-radius:.9cqw;display:grid;place-items:center;background:color-mix(in srgb,var(--accent) 14%,transparent);color:var(--accent)}
.v-fit-class-schedule .cal svg{width:1.7cqw;height:1.7cqw}
.v-fit-class-schedule .toast .bar{position:absolute;left:0;bottom:0;width:100%;height:.35cqw;background:var(--accent);transform-origin:left;animation:fit-class-schedule-bar 6s linear infinite}
.v-fit-class-schedule .cursor{color:var(--ink);position:absolute;left:52.6cqw;top:43.2cqw;width:3.2cqw;height:3.2cqw;filter:drop-shadow(0 .4cqw .6cqw color-mix(in srgb,var(--ink) 30%,transparent));animation:fit-class-schedule-cursor 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-class-schedule .cursor svg{width:100%;height:100%}
@container (max-aspect-ratio: 4/5){
  .v-fit-class-schedule .head{left:6cqw;right:6cqw;top:5cqh}
  .v-fit-class-schedule .kick{font-size:5.4cqw;gap:2cqw;letter-spacing:.06em;white-space:normal}
  .v-fit-class-schedule .kick span{min-width:0}
  .v-fit-class-schedule .kick svg{width:5cqw;height:5cqw}
  .v-fit-class-schedule .ttl{font-size:12.4cqw;margin-top:1.4cqw}
  .v-fit-class-schedule .week{display:none}
  .v-fit-class-schedule .grid{left:6cqw;width:88cqw;top:27cqh;grid-template-columns:11cqw repeat(3,1fr);grid-template-rows:7cqw repeat(3,24cqw);gap:1.6cqw}
  .v-fit-class-schedule .grid>:nth-child(6n+5),.v-fit-class-schedule .grid>:nth-child(6n){display:none}
  .v-fit-class-schedule .dh{font-size:3.2cqw;gap:1.2cqw}
  .v-fit-class-schedule .dh.now b{width:6.4cqw;height:6.4cqw;font-size:3cqw}
  .v-fit-class-schedule .tm{font-size:2.8cqw;padding-top:2.6cqw}
  .v-fit-class-schedule .c{border-radius:3cqw;padding:2.4cqw 2.4cqw}
  .v-fit-class-schedule .c b{font-size:3.6cqw}
  .v-fit-class-schedule .c small{font-size:2.6cqw}
  .v-fit-class-schedule .c::before{width:1.8cqw;height:1.8cqw;right:2.4cqw;top:2.6cqw}
  .v-fit-class-schedule .c.empty span{font-size:3.8cqw}
  .v-fit-class-schedule .pick{border-radius:3cqw;padding:2.4cqw;gap:1cqw}
  .v-fit-class-schedule .pick b{font-size:5.4cqw}
  .v-fit-class-schedule .pick small{display:none}
  .v-fit-class-schedule .pick svg{width:5cqw;height:5cqw;padding:.8cqw;right:1.8cqw;top:1.8cqw}
  .v-fit-class-schedule .pick{padding:2cqw}
  .v-fit-class-schedule .ripple{width:14cqw;height:14cqw;margin:-7cqw 0 0 -7cqw}
  .v-fit-class-schedule .legend{left:6cqw;right:6cqw;top:75cqh;flex-wrap:wrap;gap:2.4cqw 4cqw;font-size:3cqw}
  .v-fit-class-schedule .legend span{gap:1.4cqw}
  .v-fit-class-schedule .legend span::before{width:2.6cqw;height:2.6cqw}
  .v-fit-class-schedule .toast{left:6cqw;right:6cqw;top:auto;bottom:5cqh;width:auto;gap:3cqw;padding:3.4cqw 3.6cqw;border-radius:4cqw}
  .v-fit-class-schedule .av{width:11cqw;height:11cqw;font-size:3.6cqw}
  .v-fit-class-schedule .tx{min-width:0}
  .v-fit-class-schedule .tx b{font-size:5.6cqw}
  .v-fit-class-schedule .tx small{font-size:3.2cqw;white-space:nowrap}
  .v-fit-class-schedule .cal{width:9cqw;height:9cqw;border-radius:2.6cqw}
  .v-fit-class-schedule .cal svg{width:5cqw;height:5cqw}
  .v-fit-class-schedule .toast .bar{height:1cqw}
  .v-fit-class-schedule .cursor{left:78cqw;top:calc(27cqh + 64cqw);width:8cqw;height:8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-class-schedule .head{left:5cqw;top:5cqw}
  .v-fit-class-schedule .kick{font-size:1.8cqw;gap:1.1cqw}
  .v-fit-class-schedule .kick svg{width:2.6cqw;height:2.6cqw}
  .v-fit-class-schedule .ttl{font-size:6.8cqw}
  .v-fit-class-schedule .week{right:5cqw;top:6cqw;font-size:1.9cqw;padding:1.2cqw 2cqw}
  .v-fit-class-schedule .grid{left:5cqw;width:90cqw;top:22cqw;grid-template-columns:9cqw repeat(4,1fr);grid-template-rows:4.6cqw repeat(3,17cqw);gap:1cqw}
  .v-fit-class-schedule .grid>:nth-child(6n){display:none}
  .v-fit-class-schedule .dh{font-size:1.9cqw;gap:.8cqw}
  .v-fit-class-schedule .dh.now b{width:3.8cqw;height:3.8cqw;font-size:1.8cqw}
  .v-fit-class-schedule .tm{font-size:1.7cqw;padding-top:1.8cqw}
  .v-fit-class-schedule .c{border-radius:1.8cqw;padding:1.6cqw}
  .v-fit-class-schedule .c b{font-size:2.2cqw}
  .v-fit-class-schedule .c small{font-size:1.6cqw}
  .v-fit-class-schedule .c::before{width:1.1cqw;height:1.1cqw}
  .v-fit-class-schedule .c.empty span{font-size:2.4cqw}
  .v-fit-class-schedule .pick b{font-size:2.4cqw}
  .v-fit-class-schedule .pick small{font-size:1.6cqw}
  .v-fit-class-schedule .pick svg{width:3.4cqw;height:3.4cqw}
  .v-fit-class-schedule .legend{display:none}
  .v-fit-class-schedule .toast{right:5cqw;top:auto;bottom:4cqw;width:56cqw;gap:1.8cqw;padding:1.8cqw 2cqw;border-radius:2.2cqw}
  .v-fit-class-schedule .av{width:5.6cqw;height:5.6cqw;font-size:1.8cqw}
  .v-fit-class-schedule .tx b{font-size:2.4cqw}
  .v-fit-class-schedule .tx small{font-size:1.7cqw}
  .v-fit-class-schedule .cal{width:4.6cqw;height:4.6cqw}
  .v-fit-class-schedule .cal svg{width:2.6cqw;height:2.6cqw}
  .v-fit-class-schedule .cursor{left:65cqw;top:72cqw;width:4.6cqw;height:4.6cqw}
}
@keyframes fit-class-schedule-blob{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-4cqw,3cqw) scale(1.12)}}
@keyframes fit-class-schedule-head{0%{opacity:0;transform:translateY(1.4cqw)}12%,90%{opacity:1;transform:translateY(0)}98%,100%{opacity:0;transform:translateY(0)}}
@keyframes fit-class-schedule-week{0%{opacity:0;transform:translateY(1.4cqw)}12%,38%{opacity:1;transform:translateY(0)}42%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes fit-class-schedule-wipe{0%,3%{clip-path:inset(0 100% 0 0);opacity:1}26%,90%{clip-path:inset(0 0 0 0);opacity:1}98%,100%{clip-path:inset(0 0 0 0);opacity:0}}
@keyframes fit-class-schedule-tgt{0%,34%{transform:scale(1)}38%{transform:scale(.95)}44%,100%{transform:scale(1)}}
@keyframes fit-class-schedule-pick{0%,37%{clip-path:circle(0% at 50% 50%)}47%,100%{clip-path:circle(150% at 50% 50%)}}
@keyframes fit-class-schedule-ripple{0%,37%{opacity:0;transform:scale(.3)}39%{opacity:1;transform:scale(.5)}52%,100%{opacity:0;transform:scale(2.4)}}
@keyframes fit-class-schedule-toast{0%,42%{opacity:0;transform:translateY(-2.4cqw) scale(.96)}49%,88%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(-1.4cqw) scale(.98)}}
@keyframes fit-class-schedule-bar{0%,46%{transform:scaleX(1)}90%,100%{transform:scaleX(0)}}
@keyframes fit-class-schedule-cursor{0%,20%{opacity:0;transform:translate(26cqw,10cqw)}24%{opacity:1;transform:translate(22cqw,8cqw)}35%{opacity:1;transform:translate(0,0) scale(1)}38%{transform:translate(0,0) scale(.82)}41%{transform:translate(0,0) scale(1)}47%{opacity:1;transform:translate(6cqw,7.4cqw)}82%{opacity:1;transform:translate(7.5cqw,8cqw)}90%,100%{opacity:0;transform:translate(10cqw,9cqw)}}
`,
};

export const fitCoachIntro: SceneSpec = {
  id: "fit-coach-intro",
  slug: "mg-fit-coach-intro",
  name: "Coach Intro Lower Third",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "key-light-push-name-reveal",
  energy: "calm",
  settle: 3.0,
  colors: {"ink": "#F5EEE6", "accent": "#C8FF2E", "secondary": "#FF8A3D", "paper": "#0D0A09"},
  fonts: {"display": "Instrument Serif", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.serif",
  tags: ["fitness", "coach", "lower-third"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Meet your coach", maxChars: 22, role: "kicker" },
    { key: "name", label: "Coach name", default: "Ana Reyes", maxChars: 20, role: "name" },
    { key: "role", label: "Role", default: "Head coach · Strength & mobility", maxChars: 36, role: "body" },
    { key: "quote", label: "Quote", default: "Strong is a skill. We practice it.", maxChars: 40, role: "caption" },
  ],
  html: `<div class="cam">
      <div class="key"></div>
      <div class="bgword"><span>STRENGTH · MOBILITY · STRENGTH · MOBILITY ·</span></div>
      <svg class="fig" style="color:var(--accent)" viewBox="0 0 400 400" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="fitCoachRim" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFB46B"/><stop offset=".55" stop-color="#FF7A3D" stop-opacity=".5"/><stop offset="1" stop-color="#5BD1C8" stop-opacity=".9"/></linearGradient>
          <linearGradient id="fitCoachBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A1E19"/><stop offset="1" stop-color="#110D0B"/></linearGradient>
          <radialGradient id="fitCoachFace" cx=".32" cy=".38" r=".8"><stop offset="0" stop-color="#5A3A2A"/><stop offset=".6" stop-color="#2A1C16"/><stop offset="1" stop-color="#140F0C"/></radialGradient>
        </defs>
        <g fill="url(#fitCoachRim)" transform="translate(-3 -2)">
          <circle cx="206" cy="58" r="26"/><ellipse cx="200" cy="122" rx="50" ry="60"/><path d="M180 168h40l5 46h-50z"/>
          <path d="M36 400C42 306 90 250 150 234l32-8h36l32 8c60 16 108 72 114 166z"/>
        </g>
        <g>
          <circle cx="206" cy="58" r="26" fill="#18110E"/>
          <ellipse cx="200" cy="122" rx="50" ry="60" fill="url(#fitCoachFace)"/>
          <path d="M180 168h40l5 46h-50z" fill="#1E1512"/>
          <path d="M36 400C42 306 90 250 150 234l32-8h36l32 8c60 16 108 72 114 166z" fill="url(#fitCoachBody)"/>
          <path d="M152 234c10 30 28 44 48 44s38-14 48-44" fill="none" stroke="currentColor" stroke-width="4" opacity=".85"/>
          <path d="M84 330c30-8 64-6 96 10M316 330c-30-8-64-6-96 10" fill="none" stroke="#3A2A22" stroke-width="3"/>
        </g>
      </svg>
      <div class="sweep"></div>
    </div>
    <div class="grain"></div>
    <div class="top">
      <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg>MOVARA</div>
      <div class="idx">COACHES <b>02</b> / 06</div>
    </div>
    <div class="loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>Movara Eastside</div>
    <div class="lt">
      <i class="rule"></i>
      <div class="kick" data-21st-slot="kicker">{{kicker}}</div>
      <div class="nm"><span data-21st-slot="name">{{name|words}}</span></div>
      <div class="role" data-21st-slot="role">{{role}}</div>
      <div class="chips"><span><b>12</b> yrs coaching</span><span>Level 3 coach</span><span>Pre &amp; postnatal</span></div>
    </div>
    <div class="quote" data-21st-slot="quote">{{quote}}</div>`,
  css: `
.v-fit-coach-intro{color:var(--ink);font-family:var(--font-body)}
.v-fit-coach-intro[data-backdrop="on"]{background:var(--paper)}
.v-fit-coach-intro[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-fit-coach-intro[data-backdrop="off"] .key,.v-fit-coach-intro[data-backdrop="off"] .bgword,.v-fit-coach-intro[data-backdrop="off"] .sweep,.v-fit-coach-intro[data-backdrop="off"] .grain{display:none}
.v-fit-coach-intro .cam{position:absolute;inset:0;transform-origin:72% 60%;animation:fit-coach-intro-cam 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .key{position:absolute;inset:0;background:radial-gradient(38cqw 30cqw at 70% 46%,color-mix(in srgb,var(--secondary) 42%,transparent),transparent 70%),radial-gradient(30cqw 26cqw at 96% 70%,rgba(91,209,200,.22),transparent 70%),linear-gradient(180deg,color-mix(in srgb,var(--paper) 90%,var(--secondary)),var(--paper));animation:fit-coach-intro-key 6s ease-in-out infinite}
.v-fit-coach-intro .bgword{position:absolute;left:0;top:13cqw;width:100%;overflow:hidden;white-space:nowrap;font:800 12cqw/1.1 var(--font-body);letter-spacing:-.02em;color:color-mix(in srgb,var(--secondary) 8%,transparent)}
.v-fit-coach-intro .bgword span{display:inline-block;animation:fit-coach-intro-word 6s linear infinite}
.v-fit-coach-intro .fig{position:absolute;right:6cqw;bottom:0;width:46cqw;height:46cqw;filter:drop-shadow(0 0 3cqw color-mix(in srgb,var(--secondary) 25%,transparent))}
.v-fit-coach-intro .sweep{position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,220,180,.16) 50%,transparent 60%);mix-blend-mode:screen;transform:translateX(-60%);animation:fit-coach-intro-sweep 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-coach-intro .grain{position:absolute;inset:-10cqw;opacity:.13;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:18cqw 18cqw;animation:fit-coach-intro-grain .6s steps(3) infinite}
.v-fit-coach-intro .top{position:absolute;left:5cqw;right:5cqw;top:4cqw;display:flex;justify-content:space-between;align-items:center;animation:fit-coach-intro-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .brand{display:flex;align-items:center;gap:.8cqw;font:700 1.3cqw/1.2 var(--font-body);letter-spacing:.24em}
.v-fit-coach-intro .brand svg{width:2.1cqw;height:2.1cqw;color:var(--accent)}
.v-fit-coach-intro .idx{font:500 1.1cqw/1 var(--font-mono);letter-spacing:.2em;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fit-coach-intro .idx b{color:var(--ink);font-weight:500}
.v-fit-coach-intro .loc{position:absolute;right:5cqw;top:8.4cqw;display:flex;align-items:center;gap:.5cqw;font:400 1.15cqw/1 var(--font-body);color:color-mix(in srgb,var(--ink) 60%,transparent);animation:fit-coach-intro-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .loc svg{width:1.4cqw;height:1.4cqw;color:#5BD1C8}
.v-fit-coach-intro .lt{position:absolute;left:5cqw;bottom:7cqw;padding-left:2.4cqw}
.v-fit-coach-intro .rule{position:absolute;left:0;top:.2cqw;bottom:.2cqw;width:.55cqw;border-radius:1cqw;background:var(--accent);box-shadow:0 0 1.6cqw color-mix(in srgb,var(--accent) 50%,transparent);transform-origin:bottom;animation:fit-coach-intro-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-coach-intro .kick{font:500 1.2cqw/1.3 var(--font-mono);white-space:nowrap;letter-spacing:.22em;color:var(--accent);animation:fit-coach-intro-kick 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .nm{margin:calc(.6cqw - .16em) 0 -.16em;overflow:hidden;font-size:7.4cqw;padding:.26em 0}
.v-fit-coach-intro .nm>span{display:block;font:400 1em/1.3 var(--font-display);white-space:nowrap;letter-spacing:-.015em;animation:fit-coach-intro-nm 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .nm .w{line-height:1.3}
.v-fit-coach-intro .nm .w:last-child{font-style:italic;color:color-mix(in srgb,var(--secondary) 55%,var(--ink))}
.v-fit-coach-intro .role{margin-top:.4cqw;font:500 1.75cqw/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 82%,transparent);animation:fit-coach-intro-role 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .chips{display:flex;gap:.8cqw;margin-top:1.8cqw;animation:fit-coach-intro-chips 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-coach-intro .chips span{padding:.75cqw 1.2cqw;border-radius:5cqw;background:color-mix(in srgb,var(--paper) 86%,var(--ink));border:1px solid color-mix(in srgb,var(--ink) 14%,transparent);font:500 1.15cqw/1 var(--font-body);color:color-mix(in srgb,var(--ink) 85%,transparent);white-space:nowrap}
.v-fit-coach-intro .chips b{color:var(--accent);font-weight:600}
.v-fit-coach-intro .quote{position:absolute;right:4cqw;bottom:4cqw;text-shadow:0 .3cqw 1.2cqw rgba(0,0,0,.8);text-align:right;font:italic 400 2.4cqw/1.25 var(--font-display);color:#FFD9B8;max-width:22cqw;transform:rotate(-3deg);animation:fit-coach-intro-quote 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-fit-coach-intro .top{left:7cqw;right:7cqw;top:5cqh}
  .v-fit-coach-intro .brand{font-size:4cqw;gap:2cqw}
  .v-fit-coach-intro .brand svg{width:6cqw;height:6cqw}
  .v-fit-coach-intro .idx{font-size:3cqw}
  .v-fit-coach-intro .loc{display:none}
  .v-fit-coach-intro .key{background:radial-gradient(70cqw 60cqw at 50% 40%,color-mix(in srgb,var(--secondary) 42%,transparent),transparent 70%),linear-gradient(180deg,color-mix(in srgb,var(--paper) 90%,var(--secondary)),var(--paper))}
  .v-fit-coach-intro .bgword{top:30cqh;font-size:26cqw}
  .v-fit-coach-intro .fig{right:auto;left:10cqw;bottom:auto;top:19cqh;width:80cqw;height:80cqw;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent 100%);mask-image:linear-gradient(180deg,#000 70%,transparent 100%)}
  .v-fit-coach-intro .quote{left:7cqw;right:7cqw;top:10cqh;bottom:auto;max-width:none;text-align:left;font-size:7.6cqw;transform:rotate(-2deg);color:color-mix(in srgb,var(--secondary) 45%,var(--ink));text-shadow:none}
  .v-fit-coach-intro .lt{left:7cqw;right:7cqw;bottom:6cqh;padding-left:5cqw}
  .v-fit-coach-intro .rule{width:1.4cqw}
  .v-fit-coach-intro .kick{font-size:5.4cqw;letter-spacing:.1em}
  .v-fit-coach-intro .nm{font-size:15cqw}
  .v-fit-coach-intro .nm>span{white-space:normal}
  .v-fit-coach-intro .role{font-size:5.4cqw}
  .v-fit-coach-intro .chips{gap:2cqw;margin-top:3.4cqw;flex-wrap:wrap}
  .v-fit-coach-intro .chips span{font-size:3cqw;padding:1.6cqw 2.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-coach-intro .top{left:6cqw;right:6cqw;top:5.4cqw}
  .v-fit-coach-intro .brand{font-size:2.2cqw;gap:1.2cqw}
  .v-fit-coach-intro .brand svg{width:3.4cqw;height:3.4cqw}
  .v-fit-coach-intro .idx{font-size:1.8cqw}
  .v-fit-coach-intro .loc{right:6cqw;top:10cqw;font-size:1.9cqw;gap:.8cqw}
  .v-fit-coach-intro .loc svg{width:2.2cqw;height:2.2cqw}
  .v-fit-coach-intro .bgword{top:20cqw;font-size:18cqw}
  .v-fit-coach-intro .fig{right:-10cqw;width:66cqw;height:66cqw}
  .v-fit-coach-intro .quote{left:6cqw;right:auto;top:17cqw;bottom:auto;max-width:44cqw;text-align:left;font-size:4.4cqw;color:color-mix(in srgb,var(--secondary) 45%,var(--ink));text-shadow:none}
  .v-fit-coach-intro .lt{left:6cqw;bottom:7cqw;padding-left:3cqw}
  .v-fit-coach-intro .rule{width:.8cqw}
  .v-fit-coach-intro .kick{font-size:2cqw}
  .v-fit-coach-intro .nm{font-size:10cqw}
  .v-fit-coach-intro .role{font-size:2.6cqw}
  .v-fit-coach-intro .chips{flex-direction:column;align-items:flex-start;gap:1.2cqw;margin-top:2.4cqw}
  .v-fit-coach-intro .chips span{font-size:1.9cqw;padding:1cqw 1.8cqw}
}
@keyframes fit-coach-intro-cam{0%{transform:scale(1.1);opacity:0}8%{opacity:1}88%{transform:scale(1);opacity:1}100%{transform:scale(.99);opacity:0}}
@keyframes fit-coach-intro-key{0%,100%{opacity:.85}50%{opacity:1}}
@keyframes fit-coach-intro-word{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes fit-coach-intro-sweep{0%,14%{transform:translateX(-70%)}42%,100%{transform:translateX(70%)}}
@keyframes fit-coach-intro-grain{0%{background-position:0 0}33%{background-position:-5cqw 3cqw}66%{background-position:4cqw -6cqw}100%{background-position:0 0}}
@keyframes fit-coach-intro-fade{0%,4%{opacity:0}14%,88%{opacity:1}96%,100%{opacity:0}}
@keyframes fit-coach-intro-rule{0%,10%{transform:scaleY(0)}22%,88%{transform:scaleY(1);opacity:1}96%,100%{transform:scaleY(1);opacity:0}}
@keyframes fit-coach-intro-kick{0%,14%{opacity:0;transform:translateX(-1.5cqw)}24%,88%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}}
@keyframes fit-coach-intro-nm{0%,16%{transform:translateY(130%)}30%,88%{transform:translateY(0);opacity:1}96%,100%{transform:translateY(0);opacity:0}}
@keyframes fit-coach-intro-role{0%,22%{opacity:0;transform:translateY(1cqw)}33%,88%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
@keyframes fit-coach-intro-chips{0%,28%{opacity:0;transform:translateY(1.2cqw)}40%,88%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
@keyframes fit-coach-intro-quote{0%,34%{opacity:0;clip-path:inset(0 0 0 100%)}46%,88%{opacity:1;clip-path:inset(0 0 0 0)}96%,100%{opacity:0;clip-path:inset(0 0 0 0)}}
`,
};

export const fitMacros: SceneSpec = {
  id: "fit-macros",
  slug: "mg-fit-macros",
  name: "Daily Macros Donut",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "donut-segments-fill-count",
  energy: "calm",
  settle: 2.8,
  colors: {"ink": "#1F2B22", "accent": "#3E7A52", "secondary": "#EC7B5D", "paper": "#F4F7F1"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fitness", "nutrition", "macros"],
  fields: [
    { key: "brand", label: "Brand", default: "movara", maxChars: 14, role: "label" },
    { key: "title", label: "Headline", default: "Today's fuel", maxChars: 22, role: "headline" },
    { key: "kcal", label: "Calories", default: "1,840", maxChars: 6, role: "value" },
    { key: "left", label: "Remaining", default: "360 left", maxChars: 14, role: "label" },
  ],
  html: `<div class="sun"></div>
    <div class="top">
      <div class="brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="brand">{{brand}}</span> <em>fuel</em></div>
      <div class="date">Tue · Oct 14</div>
    </div>
    <div class="ttl" data-21st-slot="title">{{title|words}}</div>
    <div class="donut">
      <svg viewBox="0 0 100 100">
        <circle class="trk" cx="50" cy="50" r="40"/>
        <circle class="seg p" cx="50" cy="50" r="40"/>
        <circle class="seg c" cx="50" cy="50" r="40"/>
        <circle class="seg f" cx="50" cy="50" r="40"/>
      </svg>
      <div class="mid">
        <div class="kc" data-21st-slot="kcal">{{kcal|chars}}</div>
        <small>kcal · <i data-21st-slot="left">{{left}}</i></small>
      </div>
      <div class="bob b1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c4 3 6 7 6 11a6 6 0 0 1-12 0c0-4 2-8 6-11z"/><circle cx="12" cy="15" r="2.4" fill="currentColor"/></svg></div>
      <div class="bob b2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13c3-5 13-5 16 0-3 5-13 5-16 0z"/><path d="M20 13l2-2.5M20 13l2 2.5"/><circle cx="8.5" cy="12.4" r=".9" fill="currentColor"/></svg></div>
      <div class="bob b3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19l8-8"/></svg></div>
    </div>
    <div class="legend">
      <div class="m p"><span class="k">Protein</span><b>132<small>g</small></b><i class="tr"><i></i></i><span class="of">of 150g</span></div>
      <div class="m c"><span class="k">Carbs</span><b>190<small>g</small></b><i class="tr"><i></i></i><span class="of">of 240g</span></div>
      <div class="m f"><span class="k">Fat</span><b>58<small>g</small></b><i class="tr"><i></i></i><span class="of">of 70g</span></div>
    </div>`,
  css: `
.v-fit-macros{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-fit-macros[data-backdrop="on"]{background:linear-gradient(170deg,color-mix(in srgb,var(--paper) 96%,var(--accent)) 0%,color-mix(in srgb,var(--paper) 88%,var(--accent)) 100%)}
.v-fit-macros[data-backdrop="off"] .sun{display:none}
.v-fit-macros .sun{position:absolute;left:50%;top:46cqw;width:84cqw;height:84cqw;margin:-42cqw 0 0 -42cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--paper) 60%,#fff),transparent);animation:fit-macros-sun 6s ease-in-out infinite}
.v-fit-macros .top{position:absolute;left:6cqw;right:6cqw;top:6cqw;display:flex;justify-content:space-between;align-items:center;animation:fit-macros-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-macros .brand{display:flex;align-items:center;gap:1cqw;font:700 2.6cqw/1.2 var(--font-display);white-space:nowrap;letter-spacing:-.01em}
.v-fit-macros .brand svg{flex:none;width:3.4cqw;height:3.4cqw;color:var(--accent)}
.v-fit-macros .brand em{font-style:normal;font-weight:400;color:var(--muted)}
.v-fit-macros .date{padding:1.3cqw 2.2cqw;border-radius:6cqw;background:var(--paper);box-shadow:0 .4cqw 1.4cqw color-mix(in srgb,var(--ink) 6%,transparent);font:500 2.2cqw/1 var(--font-body);color:var(--muted)}
.v-fit-macros .ttl{position:absolute;left:6cqw;top:14cqw;font:400 6.4cqw/1.25 var(--font-display);white-space:nowrap;letter-spacing:-.01em;animation:fit-macros-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-macros .ttl .w:last-child{font-style:italic;color:var(--accent)}
.v-fit-macros .donut{position:absolute;left:28cqw;top:25cqw;width:44cqw;height:44cqw;animation:fit-macros-donut 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-macros .donut svg{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 1.6cqw 2.4cqw color-mix(in srgb,var(--ink) 12%,transparent))}
.v-fit-macros .trk{fill:none;stroke:color-mix(in srgb,var(--ink) 6%,transparent);stroke-width:11}
.v-fit-macros .seg{fill:none;stroke-width:11;stroke-linecap:round;transform-box:view-box;transform-origin:50% 50%;stroke-dasharray:0 251.33}
.v-fit-macros .seg.p{stroke:var(--secondary);transform:rotate(-87deg);animation:fit-macros-p 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-macros .seg.c{stroke:#EFBE45;transform:rotate(22deg);animation:fit-macros-c 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-macros .seg.f{stroke:#7C9BE2;transform:rotate(184deg);animation:fit-macros-f 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-macros .mid{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.v-fit-macros .kc{display:flex;height:1.2em;box-sizing:content-box;padding-block:.24em;margin-block:-.24em;overflow:hidden;font:700 7.4cqw/1.2 var(--font-display);letter-spacing:-.03em}
.v-fit-macros .kc .c{display:block;line-height:1.2;--delay:calc(var(--i) * .07s);animation:fit-macros-roll 6s cubic-bezier(.3,1.3,.5,1) infinite}
.v-fit-macros .mid small{max-width:64%;margin-top:.4cqw;font:400 2.2cqw/1.3 var(--font-body);text-align:center;color:var(--muted)}
.v-fit-macros .mid small i{font-style:normal;color:var(--accent);font-weight:600}
.v-fit-macros .bob{position:absolute;width:7.6cqw;height:7.6cqw;border-radius:50%;display:grid;place-items:center;background:var(--paper);box-shadow:0 1cqw 2.4cqw color-mix(in srgb,var(--ink) 12%,transparent)}
.v-fit-macros .bob svg{width:4cqw;height:4cqw}
.v-fit-macros .b1{left:-9cqw;top:6cqw;color:#7C9BE2;animation:fit-macros-b1 6s ease-in-out infinite}
.v-fit-macros .b2{right:-10cqw;top:15cqw;color:var(--secondary);animation:fit-macros-b2 6s ease-in-out infinite}
.v-fit-macros .b3{left:-6cqw;bottom:2cqw;color:#D9A21F;animation:fit-macros-b3 6s ease-in-out infinite}
.v-fit-macros .legend{position:absolute;left:6cqw;right:6cqw;top:74cqw;display:grid;grid-template-columns:repeat(3,1fr);gap:2.4cqw}
.v-fit-macros .m{position:relative;padding:2.4cqw 2.4cqw 2.2cqw;border-radius:3cqw;background:var(--paper);box-shadow:0 1cqw 2.6cqw color-mix(in srgb,var(--ink) 7%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--ink) 6%,transparent)}
.v-fit-macros .m.p{--c:var(--secondary);--v:.88;animation:fit-macros-m1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-macros .m.c{--c:#EFBE45;--v:.79;animation:fit-macros-m2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-macros .m.f{--c:#7C9BE2;--v:.83;animation:fit-macros-m3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-macros .k{display:flex;align-items:center;gap:1cqw;font:500 2.2cqw/1 var(--font-body);color:var(--muted)}
.v-fit-macros .k::before{content:"";width:1.6cqw;height:1.6cqw;border-radius:50%;background:var(--c)}
.v-fit-macros .m b{display:block;margin-top:1.4cqw;font:700 5.6cqw/1.1 var(--font-display);letter-spacing:-.03em}
.v-fit-macros .m b small{font-size:2.6cqw;font-weight:500;color:var(--muted);margin-left:.3cqw}
.v-fit-macros .tr{display:block;margin-top:1.6cqw;height:1cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 7%,transparent);overflow:hidden}
.v-fit-macros .tr i{display:block;height:100%;border-radius:1cqw;background:var(--c);transform-origin:left;transform:scaleX(0);animation:fit-macros-bar 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-macros .of{display:block;margin-top:1.1cqw;font:400 1.8cqw/1 var(--font-body);color:color-mix(in srgb,var(--ink) 50%,transparent)}
@container (min-aspect-ratio: 5/4){
  .v-fit-macros .top{left:5cqw;right:5cqw;top:3.6cqw}
  .v-fit-macros .brand{font-size:1.7cqw;gap:.7cqw}
  .v-fit-macros .brand svg{width:2.2cqw;height:2.2cqw}
  .v-fit-macros .date{font-size:1.3cqw;padding:.8cqw 1.4cqw}
  .v-fit-macros .ttl{left:5cqw;top:8.4cqw;font-size:4.6cqw}
  .v-fit-macros .sun{left:28cqw;top:32cqw;width:50cqw;height:50cqw;margin:-25cqw 0 0 -25cqw}
  .v-fit-macros .donut{left:12cqw;top:17cqw;width:34cqw;height:34cqw}
  .v-fit-macros .kc{font-size:5.8cqw}
  .v-fit-macros .mid small{font-size:1.5cqw}
  .v-fit-macros .bob{width:5cqw;height:5cqw}
  .v-fit-macros .bob svg{width:2.6cqw;height:2.6cqw}
  .v-fit-macros .b1{left:-6cqw}
  .v-fit-macros .b2{right:-7cqw}
  .v-fit-macros .b3{left:-4cqw}
  .v-fit-macros .legend{left:56cqw;right:6cqw;top:9cqw;grid-template-columns:1fr;gap:1.4cqw}
  .v-fit-macros .m{display:grid;grid-template-columns:1fr auto;align-items:end;column-gap:2cqw;padding:1.6cqw 2cqw;border-radius:1.6cqw}
  .v-fit-macros .k{font-size:1.5cqw;gap:.7cqw}
  .v-fit-macros .k::before{width:1.1cqw;height:1.1cqw}
  .v-fit-macros .m b{grid-row:1 / span 3;grid-column:2;align-self:center;margin:0;font-size:4.2cqw}
  .v-fit-macros .m b small{font-size:1.8cqw}
  .v-fit-macros .tr{grid-column:1;height:.7cqw;margin-top:1.2cqw}
  .v-fit-macros .of{grid-column:1;font-size:1.2cqw;margin-top:.8cqw}
}
@container (max-aspect-ratio: 4/5){
  .v-fit-macros .top{left:6cqw;right:6cqw;top:5cqh}
  .v-fit-macros .brand{font-size:5.4cqw;gap:2cqw}
  .v-fit-macros .brand svg{width:6.6cqw;height:6.6cqw}
  .v-fit-macros .date{font-size:3.4cqw;padding:2cqw 3.4cqw}
  .v-fit-macros .sun{top:40cqh}
  .v-fit-macros .donut{left:12cqw;top:14cqh;width:76cqw;height:76cqw}
  .v-fit-macros .kc{font-size:12cqw}
  .v-fit-macros .mid small{font-size:5.4cqw}
  .v-fit-macros .legend{top:58cqh;gap:2.4cqw}
  .v-fit-macros .m{padding:3.6cqw 3.4cqw 3.4cqw}
  .v-fit-macros .k{font-size:3.4cqw}
  .v-fit-macros .m b{font-size:8cqw}
  .v-fit-macros .m b small{font-size:3.6cqw}
  .v-fit-macros .of{font-size:2.8cqw}
  .v-fit-macros .ttl{left:6cqw;right:6cqw;top:auto;bottom:5cqh;font-size:15cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-macros .top{left:6cqw;right:6cqw;top:5cqw}
  .v-fit-macros .brand{font-size:2.4cqw}
  .v-fit-macros .brand svg{width:3cqw;height:3cqw}
  .v-fit-macros .date{font-size:1.9cqw;padding:1.1cqw 2cqw}
  .v-fit-macros .ttl{left:6cqw;top:11cqw;font-size:6.4cqw}
  .v-fit-macros .sun{left:34cqw;top:52cqw;width:70cqw;height:70cqw;margin:-35cqw 0 0 -35cqw}
  .v-fit-macros .donut{left:10cqw;top:27cqw;width:46cqw;height:46cqw}
  .v-fit-macros .kc{font-size:8cqw}
  .v-fit-macros .mid small{font-size:2.2cqw}
  .v-fit-macros .bob{width:6cqw;height:6cqw}
  .v-fit-macros .bob svg{width:3.2cqw;height:3.2cqw}
  .v-fit-macros .b1{left:-6cqw}
  .v-fit-macros .legend{left:64cqw;right:6cqw;top:24cqw;grid-template-columns:1fr;gap:2cqw}
  .v-fit-macros .m{padding:2cqw 2.2cqw;border-radius:2.2cqw}
  .v-fit-macros .k{font-size:1.9cqw}
  .v-fit-macros .m b{margin-top:1cqw;font-size:5cqw}
  .v-fit-macros .m b small{font-size:2.2cqw}
  .v-fit-macros .tr{margin-top:1.2cqw;height:.8cqw}
  .v-fit-macros .of{font-size:1.6cqw;margin-top:.9cqw}
}
@keyframes fit-macros-sun{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.08);opacity:1}}
@keyframes fit-macros-in{0%{opacity:0;transform:translateY(2cqw)}12%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-macros-donut{0%{opacity:0;transform:scale(.88) rotate(-12deg)}12%{opacity:1;transform:scale(1) rotate(0)}88%{opacity:1;transform:scale(1) rotate(4deg)}98%,100%{opacity:0;transform:scale(.96) rotate(6deg)}}
@keyframes fit-macros-p{0%,6%{stroke-dasharray:0 251.33}20%,88%{stroke-dasharray:66 251.33}98%,100%{stroke-dasharray:0 251.33}}
@keyframes fit-macros-c{0%,16%{stroke-dasharray:0 251.33}31%,88%{stroke-dasharray:104 251.33}98%,100%{stroke-dasharray:0 251.33}}
@keyframes fit-macros-f{0%,26%{stroke-dasharray:0 251.33}39%,88%{stroke-dasharray:54 251.33}98%,100%{stroke-dasharray:0 251.33}}
@keyframes fit-macros-b1{0%,6%{opacity:0;transform:translate(2cqw,2cqw) scale(.6)}16%{opacity:1;transform:none}55%{transform:translateY(-1.4cqw)}88%{opacity:1;transform:none}98%,100%{opacity:0;transform:scale(.8)}}
@keyframes fit-macros-b2{0%,12%{opacity:0;transform:translate(-2cqw,2cqw) scale(.6)}22%{opacity:1;transform:none}62%{transform:translateY(1.2cqw)}88%{opacity:1;transform:none}98%,100%{opacity:0;transform:scale(.8)}}
@keyframes fit-macros-b3{0%,18%{opacity:0;transform:translate(2cqw,-2cqw) scale(.6)}28%{opacity:1;transform:none}68%{transform:translateY(-1cqw)}88%{opacity:1;transform:none}98%,100%{opacity:0;transform:scale(.8)}}
@keyframes fit-macros-m1{0%,10%{opacity:0;transform:translateY(4cqw)}22%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-macros-m2{0%,16%{opacity:0;transform:translateY(4cqw)}28%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-macros-m3{0%,22%{opacity:0;transform:translateY(4cqw)}34%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-macros-bar{0%,24%{transform:scaleX(0)}44%,90%{transform:scaleX(var(--v))}100%{transform:scaleX(0)}}
@keyframes fit-macros-roll{0%,18%{transform:translateY(150%);opacity:0}32%,90%{transform:translateY(0);opacity:1}98%,100%{transform:translateY(0);opacity:0}}
`,
};

export const fitStepStreak: SceneSpec = {
  id: "fit-step-streak",
  slug: "mg-fit-step-streak",
  name: "Step Streak Heatmap",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "heatmap-wipe-streak-count",
  energy: "default",
  settle: 3.0,
  colors: {"ink": "#E8F5EC", "accent": "#9BFFB8", "secondary": "#2A8A52", "paper": "#0B1A12"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fitness", "streak", "heatmap"],
  fields: [
    { key: "kicker", label: "Kicker", default: "MOVARA STEPS", maxChars: 20, role: "kicker" },
    { key: "big", label: "Streak", default: "42", maxChars: 3, role: "value" },
    { key: "label", label: "Label", default: "day streak", maxChars: 16, role: "label" },
    { key: "sub", label: "Message", default: "Your longest yet, Sam. One walk tomorrow keeps it alive.", maxChars: 64, role: "body" },
  ],
  html: `<div class="aura"></div>
    <div class="left">
      <div class="kick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
      <div class="big"><span class="num" data-21st-slot="big">{{big|chars}}</span><svg class="flame" viewBox="0 0 24 24"><path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-4-1-6 1-9.5z" fill="currentColor"/></svg></div>
      <div class="lab" data-21st-slot="label">{{label|words}}</div>
      <p class="sub" data-21st-slot="sub">{{sub}}</p>
      <div class="today">
        <div class="tv"><b>11,284</b><span>steps today</span><em>113%</em></div>
        <i class="goal"><i></i></i>
        <small>Goal 10,000</small>
      </div>
    </div>
    <div class="months"><span style="left:0">Jun</span><span style="left:8.85cqw">Jul</span><span style="left:20.65cqw">Aug</span><span style="left:35.4cqw">Sep</span><span style="left:47.2cqw">Oct</span></div>
    <div class="heat"><i class="l2"></i><i class="l1"></i><i class="l3"></i><i class="l3"></i><i class="l0"></i><i class="l0"></i><i class="l0"></i><i class="l0"></i><i class="l2"></i><i class="l2"></i><i class="l0"></i><i class="l0"></i><i class="l1"></i><i class="l0"></i><i class="l0"></i><i class="l3"></i><i class="l3"></i><i class="l0"></i><i class="l1"></i><i class="l0"></i><i class="l0"></i><i class="l3"></i><i class="l0"></i><i class="l2"></i><i class="l0"></i><i class="l1"></i><i class="l3"></i><i class="l3"></i><i class="l2"></i><i class="l0"></i><i class="l2"></i><i class="l2"></i><i class="l3"></i><i class="l0"></i><i class="l1"></i><i class="l0"></i><i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l1"></i><i class="l0"></i><i class="l0"></i><i class="l2"></i><i class="l2"></i><i class="l0"></i><i class="l3"></i><i class="l1"></i><i class="l0"></i><i class="l2"></i><i class="l2"></i><i class="l3"></i><i class="l1"></i><i class="l2"></i><i class="l0"></i><i class="l0"></i><i class="l4"></i><i class="l0"></i><i class="l2"></i><i class="l0"></i><i class="l2"></i><i class="l1"></i><i class="l1"></i><i class="l3"></i><i class="l0"></i><i class="l3"></i><i class="l2"></i><i class="l1"></i><i class="l2"></i><i class="l1"></i><i class="l2"></i><i class="l2"></i><i class="l1"></i><i class="l1"></i><i class="l4"></i><i class="l1"></i><i class="l0"></i><i class="l2"></i><i class="l2"></i><i class="l2"></i><i class="l4"></i><i class="l2"></i><i class="l4"></i><i class="l3"></i><i class="l3"></i><i class="l3"></i><i class="l3"></i><i class="l4"></i><i class="l3"></i><i class="l2"></i><i class="l3"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><i class="l4"></i><i class="l4"></i><i class="l2"></i><i class="l2"></i><i class="l3"></i><i class="l3"></i><i class="l4"></i><i class="l2"></i><i class="l3"></i><i class="l2"></i><i class="l4"></i><i class="l2"></i><i class="l4"></i><i class="l3"></i><i class="l4"></i><i class="l2"></i><i class="l2"></i><i class="l4"></i><i class="l3"></i><i class="l3"></i><i class="l2"></i><i class="l2"></i><i class="l4"></i><i class="l4"></i><i class="l3"></i><i class="l4"></i><i class="l4 now"></i><i class="lx"></i><i class="lx"></i><i class="lx"></i><i class="lx"></i><i class="lx"></i></div>
    <div class="tip">Today · 11,284</div>
    <div class="bracket"><i></i><span>42 days, no gaps</span></div>
    <div class="week">
      <div class="wl">Last 7 days</div>
      <div class="bars"><i style="--h:.62"><b>W</b></i><i style="--h:.78"><b>T</b></i><i style="--h:.55"><b>F</b></i><i style="--h:.92"><b>S</b></i><i style="--h:.7"><b>S</b></i><i style="--h:.84"><b>M</b></i><i class="t" style="--h:1"><b>T</b></i></div>
      <div class="avg"><b>9,870</b><span>avg per day</span></div>
    </div>`,
  css: `
.v-fit-step-streak{color:var(--ink);font-family:var(--font-body);--muted:var(--muted);--faint:var(--faint)}
.v-fit-step-streak[data-backdrop="on"]{background:radial-gradient(60cqw 40cqw at 20% 40%,color-mix(in srgb,var(--paper) 75%,var(--secondary)) 0%,transparent 70%),linear-gradient(170deg,var(--paper),color-mix(in srgb,var(--paper) 70%,#000))}
.v-fit-step-streak[data-backdrop="off"] .aura{display:none}
.v-fit-step-streak .aura{position:absolute;left:4cqw;top:6cqw;width:30cqw;height:30cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 22%,transparent),transparent);animation:fit-step-streak-aura 6s ease-in-out infinite}
.v-fit-step-streak .left{position:absolute;left:6cqw;top:6.5cqw;width:32cqw;animation:fit-step-streak-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-step-streak .kick{display:flex;align-items:center;gap:.7cqw;font:500 1.15cqw/1.3 var(--font-mono);letter-spacing:.22em;white-space:nowrap;color:var(--muted)}
.v-fit-step-streak .kick svg{flex:none;width:1.7cqw;height:1.7cqw;color:var(--accent)}
.v-fit-step-streak .big{display:flex;align-items:flex-start;gap:1cqw;margin-top:1.8cqw;font:800 13cqw/1.2 var(--font-display);letter-spacing:-.05em;color:var(--accent);filter:drop-shadow(0 0 2.4cqw color-mix(in srgb,var(--accent) 35%,transparent))}
.v-fit-step-streak .num{flex:none;display:flex;height:1.2em;box-sizing:content-box;padding-block:.24em;margin-block:-.24em;overflow:hidden}
.v-fit-step-streak .num .c{display:block;line-height:1.2;--delay:calc(var(--i) * .1s);animation:fit-step-streak-roll 6s cubic-bezier(.3,1.3,.5,1) infinite}
.v-fit-step-streak .flame{flex:none;color:var(--accent);width:4cqw;height:4cqw;margin-top:1.2cqw;filter:drop-shadow(0 0 1cqw color-mix(in srgb,var(--accent) 70%,transparent));transform-origin:50% 90%;animation:fit-step-streak-flame 1.2s ease-in-out infinite}
.v-fit-step-streak .lab{margin-top:.2cqw;font:400 3.6cqw/1.25 var(--font-display)}
.v-fit-step-streak .lab .w:first-child{font-style:italic;color:var(--accent)}
.v-fit-step-streak .sub{margin:1.2cqw 0 0;max-width:26cqw;font:400 1.35cqw/1.4 var(--font-body);color:var(--muted)}
.v-fit-step-streak .today{margin-top:3cqw;width:26cqw}
.v-fit-step-streak .tv{display:flex;align-items:baseline;gap:.9cqw}
.v-fit-step-streak .tv b{font:700 2.6cqw/1 var(--font-display);letter-spacing:-.02em}
.v-fit-step-streak .tv span{font:400 1.25cqw/1 var(--font-body);color:var(--muted)}
.v-fit-step-streak .tv em{margin-left:auto;font:600 1.2cqw/1 var(--font-mono);font-style:normal;color:var(--paper);background:var(--accent);padding:.4cqw .7cqw;border-radius:.6cqw}
.v-fit-step-streak .goal{display:block;margin-top:1.2cqw;height:.8cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 10%,transparent);overflow:hidden}
.v-fit-step-streak .goal i{display:block;height:100%;border-radius:1cqw;background:linear-gradient(90deg,var(--secondary),var(--accent));transform-origin:left;animation:fit-step-streak-goal 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-step-streak .today small{display:block;margin-top:.8cqw;font:400 1.05cqw/1 var(--font-mono);color:var(--faint)}
.v-fit-step-streak .months{position:absolute;left:42cqw;top:9.2cqw;width:53cqw;height:1.4cqw;font:500 1.05cqw/1 var(--font-mono);color:var(--faint);animation:fit-step-streak-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-step-streak .months span{position:absolute;top:0}
.v-fit-step-streak .heat{position:absolute;left:42cqw;top:12cqw;display:grid;grid-auto-flow:column;grid-template-rows:repeat(7,2.4cqw);grid-auto-columns:2.4cqw;gap:.55cqw;animation:fit-step-streak-wipe 6s cubic-bezier(.45,0,.25,1) infinite}
.v-fit-step-streak .heat i{border-radius:.55cqw;background:color-mix(in srgb,var(--ink) 6%,transparent)}
.v-fit-step-streak .heat .l1{background:color-mix(in srgb,var(--accent) 24%,var(--paper))}
.v-fit-step-streak .heat .l2{background:color-mix(in srgb,var(--accent) 48%,var(--paper))}
.v-fit-step-streak .heat .l3{background:color-mix(in srgb,var(--accent) 74%,var(--paper))}
.v-fit-step-streak .heat .l4{background:var(--accent);box-shadow:0 0 .9cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-fit-step-streak .heat .lx{background:transparent;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent)}
.v-fit-step-streak .heat .now{background:color-mix(in srgb,var(--accent) 30%,#fff);box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--accent) 35%,transparent),0 0 1.8cqw var(--accent);animation:fit-step-streak-today 1.5s ease-in-out infinite}
.v-fit-step-streak .tip{position:absolute;right:8.4cqw;top:14.4cqw;padding:.7cqw 1.1cqw;border-radius:.8cqw;background:var(--ink);color:var(--paper);font:600 1.15cqw/1 var(--font-body);white-space:nowrap;box-shadow:0 .8cqw 2cqw rgba(0,0,0,.4);transform-origin:right center;animation:fit-step-streak-tip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-step-streak .tip::after{content:"";position:absolute;right:-.5cqw;top:50%;width:1cqw;height:1cqw;margin-top:-.5cqw;background:var(--ink);transform:rotate(45deg)}
.v-fit-step-streak .bracket{position:absolute;left:74.45cqw;top:33.2cqw;width:20.1cqw;transform-origin:right;animation:fit-step-streak-bracket 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-step-streak .bracket i{display:block;height:1cqw;border:1.5px solid var(--accent);border-top:0;border-radius:0 0 .5cqw .5cqw}
.v-fit-step-streak .bracket span{display:block;margin-top:.8cqw;text-align:center;font:500 1.1cqw/1 var(--font-mono);color:var(--accent);letter-spacing:.06em}
.v-fit-step-streak .week{position:absolute;left:42cqw;top:39.5cqw;width:53cqw;display:flex;align-items:flex-end;gap:3cqw;animation:fit-step-streak-week 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-step-streak .wl{position:absolute;left:0;top:1.4cqw;font:500 1.05cqw/1 var(--font-mono);color:var(--faint)}
.v-fit-step-streak .bars{display:flex;align-items:flex-end;gap:1.1cqw;height:10cqw;padding-top:1.2cqw}
.v-fit-step-streak .bars i{position:relative;width:2.6cqw;height:8cqw;border-radius:.6cqw .6cqw .3cqw .3cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 74%,var(--paper)),color-mix(in srgb,var(--accent) 24%,var(--paper)));transform-origin:bottom;transform:scaleY(var(--h));animation:fit-step-streak-bar 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-step-streak .bars i.t{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 30%,#fff),var(--accent))}
.v-fit-step-streak .bars b{position:absolute;left:0;right:0;bottom:-2cqw;text-align:center;font:500 .95cqw/1 var(--font-mono);color:var(--faint)}
.v-fit-step-streak .avg{margin-left:auto;text-align:right;padding-bottom:.4cqw}
.v-fit-step-streak .avg b{display:block;font:700 3.2cqw/1 var(--font-display);letter-spacing:-.03em}
.v-fit-step-streak .avg span{display:block;margin-top:.8cqw;font:400 1.25cqw/1 var(--font-body);color:var(--muted)}
@container (max-aspect-ratio: 4/5){
  .v-fit-step-streak .aura{left:-10cqw;top:2cqh;width:80cqw;height:80cqw}
  .v-fit-step-streak .left{left:6cqw;top:4.6cqh;bottom:5cqh;width:88cqw;display:flex;flex-direction:column}
  .v-fit-step-streak .kick{font-size:5.4cqw;gap:2cqw;letter-spacing:.12em}
  .v-fit-step-streak .kick svg{width:6cqw;height:6cqw}
  .v-fit-step-streak .big{font-size:34cqw;margin-top:1cqw;gap:2cqw}
  .v-fit-step-streak .flame{width:11cqw;height:11cqw;margin-top:4cqw}
  .v-fit-step-streak .lab{font-size:10cqw}
  .v-fit-step-streak .sub{margin:auto 0 0;max-width:none;font-size:5.6cqw;line-height:1.35}
  .v-fit-step-streak .today{display:none}
  .v-fit-step-streak .months{left:6cqw;top:calc(42cqh - 4cqw);width:88cqw;font-size:2.8cqw;height:3cqw}
  .v-fit-step-streak .months span:nth-child(2){left:15cqw!important}
  .v-fit-step-streak .months span:nth-child(3){left:35cqw!important}
  .v-fit-step-streak .months span:nth-child(4){left:60cqw!important}
  .v-fit-step-streak .months span:nth-child(5){left:80cqw!important}
  .v-fit-step-streak .heat{left:6cqw;top:42cqh;grid-template-rows:repeat(7,4.1cqw);grid-auto-columns:4.1cqw;gap:.9cqw}
  .v-fit-step-streak .heat i{border-radius:.9cqw}
  .v-fit-step-streak .tip{right:10cqw;top:calc(42cqh + 4.6cqw);font-size:3.2cqw;padding:1.4cqw 2.2cqw;border-radius:1.6cqw}
  .v-fit-step-streak .tip::after{right:-1cqw;width:2cqw;height:2cqw;margin-top:-1cqw}
  .v-fit-step-streak .bracket{left:61cqw;top:calc(42cqh + 35.5cqw);width:34cqw}
  .v-fit-step-streak .bracket i{height:2cqw}
  .v-fit-step-streak .bracket span{font-size:3cqw;margin-top:1.4cqw}
  .v-fit-step-streak .week{left:6cqw;width:88cqw;top:auto;bottom:22cqh;gap:5cqw}
  .v-fit-step-streak .wl{font-size:2.8cqw;top:0}
  .v-fit-step-streak .bars{gap:2.4cqw;height:22cqw;padding-top:4cqw}
  .v-fit-step-streak .bars i{width:6cqw;height:18cqw;border-radius:1.4cqw 1.4cqw .6cqw .6cqw}
  .v-fit-step-streak .bars b{font-size:2.6cqw;bottom:-4.4cqw}
  .v-fit-step-streak .avg b{font-size:9cqw}
  .v-fit-step-streak .avg span{font-size:3.4cqw;margin-top:1.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-step-streak .left{left:6cqw;top:6cqw;width:34cqw}
  .v-fit-step-streak .kick{font-size:1.9cqw;gap:1cqw;letter-spacing:.14em}
  .v-fit-step-streak .kick svg{width:2.6cqw;height:2.6cqw}
  .v-fit-step-streak .big{font-size:20cqw;margin-top:1cqw}
  .v-fit-step-streak .flame{width:6cqw;height:6cqw;margin-top:2cqw}
  .v-fit-step-streak .lab{font-size:6cqw}
  .v-fit-step-streak .sub{max-width:34cqw;font-size:2.2cqw;margin-top:2cqw}
  .v-fit-step-streak .today{width:34cqw;margin-top:4cqw}
  .v-fit-step-streak .tv b{font-size:4cqw}
  .v-fit-step-streak .tv span{font-size:1.9cqw}
  .v-fit-step-streak .tv em{font-size:1.8cqw}
  .v-fit-step-streak .goal{height:1.1cqw}
  .v-fit-step-streak .today small{font-size:1.6cqw}
  .v-fit-step-streak .months{left:44cqw;top:18cqw;width:51cqw;font-size:1.6cqw;height:2cqw}
  .v-fit-step-streak .heat{left:44cqw;top:21.5cqw;grid-template-rows:repeat(7,2.3cqw);grid-auto-columns:2.3cqw;gap:.55cqw}
  .v-fit-step-streak .tip{right:8.6cqw;top:23.4cqw;font-size:1.7cqw;padding:.9cqw 1.4cqw}
  .v-fit-step-streak .bracket{left:75.35cqw;top:42cqw;width:19.65cqw}
  .v-fit-step-streak .bracket span{font-size:1.6cqw}
  .v-fit-step-streak .week{left:44cqw;top:54cqw;width:51cqw;gap:3cqw}
  .v-fit-step-streak .wl{font-size:1.6cqw}
  .v-fit-step-streak .bars{gap:1.4cqw;height:16cqw;padding-top:2.6cqw}
  .v-fit-step-streak .bars i{width:3.4cqw;height:13cqw}
  .v-fit-step-streak .bars b{font-size:1.5cqw;bottom:-2.8cqw}
  .v-fit-step-streak .avg b{font-size:5cqw}
  .v-fit-step-streak .avg span{font-size:1.9cqw}
}
@keyframes fit-step-streak-aura{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(1.15);opacity:1}}
@keyframes fit-step-streak-in{0%{opacity:0;transform:translateY(1.6cqw)}10%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-step-streak-flame{0%,100%{transform:scale(1) rotate(-3deg)}50%{transform:scale(1.1) rotate(3deg)}}
@keyframes fit-step-streak-goal{0%,10%{transform:scaleX(0)}40%,92%{transform:scaleX(1)}100%{transform:scaleX(0)}}
@keyframes fit-step-streak-wipe{0%,5%{clip-path:inset(0 100% 0 0);opacity:1}36%,90%{clip-path:inset(0 0 0 0);opacity:1}98%,100%{clip-path:inset(0 0 0 0);opacity:0}}
@keyframes fit-step-streak-today{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}
@keyframes fit-step-streak-tip{0%,36%{opacity:0;transform:translateX(1cqw) scale(.9)}43%,88%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}}
@keyframes fit-step-streak-bracket{0%,36%{transform:scaleX(0);opacity:1}46%,90%{transform:scaleX(1);opacity:1}98%,100%{transform:scaleX(1);opacity:0}}
@keyframes fit-step-streak-week{0%,14%{opacity:0;transform:translateY(2cqw)}26%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-step-streak-bar{0%,16%{transform:scaleY(0)}32%,90%{transform:scaleY(var(--h))}100%{transform:scaleY(0)}}
@keyframes fit-step-streak-roll{0%,18%{transform:translateY(150%);opacity:0}34%,90%{transform:translateY(0);opacity:1}98%,100%{transform:translateY(0);opacity:0}}
`,
};

export const fitLeaderboard: SceneSpec = {
  id: "fit-leaderboard",
  slug: "mg-fit-leaderboard",
  name: "Leaderboard Rank Climb",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "leaderboard-row-overtake",
  energy: "punchy",
  settle: 3.2,
  colors: {"ink": "#F3EEFF", "accent": "#7B4DFF", "secondary": "#FF3DA5", "paper": "#0A0712"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fitness", "leaderboard", "challenge"],
  fields: [
    { key: "kicker", label: "Club", default: "MOVARA ROW CLUB", maxChars: 22, role: "kicker" },
    { key: "title", label: "Challenge", default: "October 100K", maxChars: 18, role: "headline" },
    { key: "you", label: "Your row", default: "You · Sam Cole", maxChars: 20, role: "name" },
    { key: "cta", label: "Button", default: "Join the challenge", maxChars: 22, role: "cta" },
  ],
  html: `<div class="g1"></div><div class="g2"></div>
    <div class="hd">
      <div class="kick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
      <div class="ttl" data-21st-slot="title">{{title|words}}</div>
      <div class="sub"><span>Day 18 of 31</span><span class="live"><i></i>Live</span><span>km rowed</span></div>
    </div>
    <div class="ranks"><b>1</b><b>2</b><b>3</b><b>4</b><b>5</b></div>
    <div class="list">
      <div class="row r1"><i class="av" style="--a:#FFB547;--b:#FF6A3D">JR</i><div class="nm">Jonah Reyes<small>Eastside</small></div><div class="km">48.0<small>km</small></div></div>
      <div class="row r2"><i class="av" style="--a:#5BD1C8;--b:#2F7FE0">PN</i><div class="nm">Priya Nair<small>Soho</small></div><div class="km">41.0<small>km</small></div></div>
      <div class="row r3"><i class="av" style="--a:#C6A6FF;--b:#7B4DFF">LW</i><div class="nm">Lena Ward<small>Lisbon</small></div><div class="km">40.2<small>km</small></div></div>
      <div class="row r4 you"><i class="av" style="--a:#C8FF2E;--b:#4FD16E">SC</i><div class="nm"><span data-21st-slot="you">{{you}}</span><small>Soho</small></div><div class="km">41.6<small>km</small></div><span class="up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>2</span></div>
      <div class="row r5"><i class="av" style="--a:#FF8FC8;--b:#E0407F">TM</i><div class="nm">Theo Marsh<small>Eastside</small></div><div class="km">35.7<small>km</small></div></div>
    </div>
    <div class="cta"><span data-21st-slot="cta">{{cta}}</span><small>214 rowers · ends Oct 31</small><i class="shine"></i></div>`,
  css: `
.v-fit-leaderboard{color:var(--ink);font-family:var(--font-body);--muted:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fit-leaderboard[data-backdrop="on"]{background:var(--paper)}
.v-fit-leaderboard[data-backdrop="off"] .g1,.v-fit-leaderboard[data-backdrop="off"] .g2{display:none}
.v-fit-leaderboard .g1,.v-fit-leaderboard .g2{position:absolute;border-radius:50%}
.v-fit-leaderboard .g1{left:-24cqw;top:-20cqw;width:80cqw;height:80cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 45%,transparent),transparent);animation:fit-leaderboard-g1 6s ease-in-out infinite}
.v-fit-leaderboard .g2{right:-30cqw;bottom:-10cqw;width:84cqw;height:84cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 32%,transparent),transparent);animation:fit-leaderboard-g2 6s ease-in-out infinite}
.v-fit-leaderboard .hd{position:absolute;left:6cqw;right:6cqw;top:7cqw;animation:fit-leaderboard-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-leaderboard .kick{display:flex;align-items:center;gap:1cqw;font:500 2.1cqw/1.3 var(--font-mono);letter-spacing:.22em;white-space:nowrap;color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-fit-leaderboard .kick svg{flex:none;width:3cqw;height:3cqw;color:#C8FF2E}
.v-fit-leaderboard .ttl{margin-top:1.6cqw;font:800 8.4cqw/1.2 var(--font-display);white-space:nowrap;letter-spacing:-.04em}
.v-fit-leaderboard .ttl .w{line-height:1.2}
.v-fit-leaderboard .ttl .w:last-child{background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--secondary));-webkit-background-clip:text;background-clip:text;color:transparent}
.v-fit-leaderboard .sub{display:flex;gap:2.4cqw;align-items:center;margin-top:2.2cqw;font:500 2.2cqw/1 var(--font-body);color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-fit-leaderboard .live{display:flex;align-items:center;gap:.9cqw;color:color-mix(in srgb,var(--secondary) 75%,var(--ink))}
.v-fit-leaderboard .live i{width:1.3cqw;height:1.3cqw;border-radius:50%;background:var(--secondary);box-shadow:0 0 1.4cqw var(--secondary);animation:fit-leaderboard-blink 1s ease-in-out infinite}
.v-fit-leaderboard .ranks{--u:.59cqw;position:absolute;left:39.6cqw;top:7cqw;width:calc(var(--u) * 5);animation:fit-leaderboard-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-leaderboard .ranks b{display:flex;align-items:center;height:calc(var(--u) * 13);margin-bottom:calc(var(--u) * 2.5);font:700 calc(var(--u) * 3.4)/1 var(--font-display);color:color-mix(in srgb,var(--ink) 35%,transparent)}
.v-fit-leaderboard .ranks b:first-child{color:#FFC861}
.v-fit-leaderboard .list{--u:.59cqw;position:absolute;left:46cqw;right:6cqw;top:7cqw;height:calc(var(--u) * 75.5);animation:fit-leaderboard-list 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-leaderboard .row{position:absolute;left:0;right:0;height:calc(var(--u) * 13);display:flex;align-items:center;gap:calc(var(--u) * 2.6);padding:0 calc(var(--u) * 3) 0 calc(var(--u) * 2.4);border-radius:calc(var(--u) * 3);background:color-mix(in srgb,var(--paper) 92%,var(--ink));border:1px solid color-mix(in srgb,var(--ink) 9%,transparent)}
.v-fit-leaderboard .r1{top:0}
.v-fit-leaderboard .r2{top:calc(var(--u) * 15.5);animation:fit-leaderboard-down 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-leaderboard .r3{top:calc(var(--u) * 31);animation:fit-leaderboard-down 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-leaderboard .r4{top:calc(var(--u) * 46.5);z-index:2;animation:fit-leaderboard-climb 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-leaderboard .r5{top:calc(var(--u) * 62)}
.v-fit-leaderboard .you{background:linear-gradient(100deg,color-mix(in srgb,var(--accent) 42%,var(--paper)),color-mix(in srgb,var(--secondary) 30%,var(--paper)));border:1px solid color-mix(in srgb,var(--accent) 55%,var(--ink));box-shadow:0 calc(var(--u) * 2) calc(var(--u) * 5) color-mix(in srgb,var(--accent) 35%,transparent),inset 0 0 0 1px rgba(255,255,255,.06)}
.v-fit-leaderboard .av{flex:none;width:calc(var(--u) * 7.4);height:calc(var(--u) * 7.4);border-radius:50%;display:grid;place-items:center;font:700 calc(var(--u) * 2.3)/1 var(--font-body);font-style:normal;color:#160D24;background:radial-gradient(circle at 30% 25%,#fff8 0,transparent 40%),linear-gradient(140deg,var(--a),var(--b))}
.v-fit-leaderboard .nm{min-width:0;font:600 calc(var(--u) * 3.2)/1.25 var(--font-body);letter-spacing:-.01em;white-space:nowrap}
.v-fit-leaderboard .nm small{display:block;margin-top:calc(var(--u) * .7);font:400 calc(var(--u) * 2.1)/1 var(--font-body);color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-fit-leaderboard .km{margin-left:auto;display:flex;align-items:baseline;gap:calc(var(--u) * .7);font:700 calc(var(--u) * 4.2)/1 var(--font-display);letter-spacing:-.03em}
.v-fit-leaderboard .km small{font:500 calc(var(--u) * 2)/1 var(--font-mono);color:color-mix(in srgb,var(--ink) 50%,transparent);letter-spacing:0}
.v-fit-leaderboard .up{position:absolute;right:calc(var(--u) * -2);top:calc(var(--u) * -2);display:flex;align-items:center;gap:calc(var(--u) * .3);padding:calc(var(--u) * .9) calc(var(--u) * 1.3);border-radius:calc(var(--u) * 5);background:#C8FF2E;color:#120A1E;font:700 calc(var(--u) * 2.1)/1 var(--font-display);box-shadow:0 calc(var(--u) * .8) calc(var(--u) * 2) rgba(200,255,46,.4);animation:fit-leaderboard-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-leaderboard .up svg{width:calc(var(--u) * 2.2);height:calc(var(--u) * 2.2)}
.v-fit-leaderboard .cta{position:absolute;left:6cqw;right:6cqw;top:110cqw;height:9.6cqw;border-radius:5cqw;display:flex;align-items:center;justify-content:space-between;padding:0 4cqw;overflow:hidden;background:linear-gradient(90deg,var(--accent),var(--secondary));box-shadow:0 2cqw 5cqw color-mix(in srgb,var(--secondary) 35%,transparent);animation:fit-leaderboard-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-leaderboard .cta span{font:700 3.2cqw/1.3 var(--font-body);color:#fff}
.v-fit-leaderboard .cta small{color:#fff;font:500 2cqw/1 var(--font-body);opacity:.85}
.v-fit-leaderboard .shine{position:absolute;top:0;bottom:0;left:0;width:30cqw;background:linear-gradient(100deg,transparent,rgba(255,255,255,.35),transparent);transform:translateX(-40cqw);animation:fit-leaderboard-shine 6s cubic-bezier(.65,0,.35,1) infinite}
@container (min-aspect-ratio: 5/4){
  .v-fit-leaderboard .hd{left:6cqw;right:auto;width:31cqw;top:6cqw}
  .v-fit-leaderboard .kick{font-size:1.2cqw;gap:.7cqw}
  .v-fit-leaderboard .kick svg{width:1.8cqw;height:1.8cqw}
  .v-fit-leaderboard .ttl{font-size:6cqw;white-space:normal}
  .v-fit-leaderboard .sub{font-size:1.3cqw;gap:1.4cqw;margin-top:1.4cqw}
  .v-fit-leaderboard .live i{width:.8cqw;height:.8cqw}
  .v-fit-leaderboard .g1{left:-20cqw;top:-30cqw;width:70cqw;height:70cqw}
  .v-fit-leaderboard .g2{right:-20cqw;bottom:-30cqw;width:60cqw;height:60cqw}
  .v-fit-leaderboard .cta{left:6cqw;right:auto;width:31cqw;top:41cqw;height:6.4cqw;padding:0 2.2cqw;border-radius:3.2cqw;box-sizing:border-box;flex-direction:column;align-items:flex-start;justify-content:center;gap:.4cqw}
  .v-fit-leaderboard .cta span{font-size:1.9cqw}
  .v-fit-leaderboard .cta small{font-size:1.1cqw}
}
@container (max-aspect-ratio: 4/5){
  .v-fit-leaderboard .hd{left:6cqw;right:6cqw;top:5cqh}
  .v-fit-leaderboard .kick{font-size:5.4cqw;gap:2cqw;letter-spacing:.12em}
  .v-fit-leaderboard .kick svg{width:6cqw;height:6cqw}
  .v-fit-leaderboard .ttl{font-size:13.8cqw;margin-top:2cqw;white-space:normal}
  .v-fit-leaderboard .sub{font-size:3.8cqw;gap:3cqw;margin-top:2.4cqw}
  .v-fit-leaderboard .ranks{--u:1cqw;left:5cqw;top:36cqh}
  .v-fit-leaderboard .list{--u:1cqw;left:12cqw;right:5cqw;top:36cqh}
  .v-fit-leaderboard .nm{font-size:5.4cqw}
  .v-fit-leaderboard .nm small{font-size:3cqw}
  .v-fit-leaderboard .km{font-size:5.4cqw}
  .v-fit-leaderboard .av{width:9cqw;height:9cqw}
  .v-fit-leaderboard .row{gap:3cqw;padding:0 3cqw 0 2.4cqw}
  .v-fit-leaderboard .cta{left:6cqw;right:6cqw;top:auto;bottom:5cqh;height:auto;padding:4cqw 5cqw;border-radius:8cqw;flex-direction:column;align-items:flex-start;gap:1.4cqw}
  .v-fit-leaderboard .cta span{font-size:6.4cqw}
  .v-fit-leaderboard .cta small{font-size:3.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-leaderboard .hd{left:6cqw;right:6cqw;top:5cqw}
  .v-fit-leaderboard .kick{font-size:1.9cqw}
  .v-fit-leaderboard .kick svg{width:2.8cqw;height:2.8cqw}
  .v-fit-leaderboard .ttl{font-size:9cqw;margin-top:1.4cqw}
  .v-fit-leaderboard .sub{font-size:2cqw;margin-top:1.6cqw}
  .v-fit-leaderboard .ranks{--u:.72cqw;left:6cqw;top:29cqw}
  .v-fit-leaderboard .list{--u:.72cqw;left:12cqw;right:6cqw;top:29cqw}
  .v-fit-leaderboard .nm{font-size:2.6cqw}
  .v-fit-leaderboard .nm small{font-size:1.8cqw}
  .v-fit-leaderboard .cta{left:6cqw;right:6cqw;top:85.5cqw;height:8.4cqw;padding:0 3.4cqw}
  .v-fit-leaderboard .cta span{font-size:2.8cqw}
  .v-fit-leaderboard .cta small{font-size:1.9cqw}
}
@keyframes fit-leaderboard-g1{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,4cqw)}}
@keyframes fit-leaderboard-g2{0%,100%{transform:translate(0,0)}50%{transform:translate(-6cqw,-5cqw)}}
@keyframes fit-leaderboard-blink{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes fit-leaderboard-in{0%{opacity:0;transform:translateY(2cqw)}10%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-leaderboard-list{0%,3%{opacity:0;transform:translateY(4cqw)}15%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-leaderboard-down{0%,27%{transform:translateY(0)}40%,100%{transform:translateY(calc(var(--u) * 15.5))}}
@keyframes fit-leaderboard-climb{0%,25%{transform:translateY(0) scale(1)}31%{transform:translateY(calc(var(--u) * -8)) scale(1.04)}40%{transform:translateY(calc(var(--u) * -31)) scale(1.02)}46%,100%{transform:translateY(calc(var(--u) * -31)) scale(1)}}
@keyframes fit-leaderboard-up{0%,40%{opacity:0;transform:scale(.4) rotate(-20deg)}46%{opacity:1;transform:scale(1.12) rotate(4deg)}50%,90%{opacity:1;transform:scale(1) rotate(0)}97%,100%{opacity:0;transform:scale(.8)}}
@keyframes fit-leaderboard-cta{0%,12%{opacity:0;transform:translateY(4cqw)}24%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-leaderboard-shine{0%,52%{transform:translateX(-40cqw)}72%,100%{transform:translateX(110cqw)}}
`,
};

export const fitRingsOffer: SceneSpec = {
  id: "fit-rings-offer",
  slug: "mg-fit-rings-offer",
  name: "Activity Rings Offer",
  kind: "scene",
  job: "cta",
  language: "kinetic-poster",
  mechanic: "rings-close-check-burst",
  energy: "punchy",
  settle: 3.0,
  colors: {"ink": "#FFFFFF", "accent": "#C81D6B", "secondary": "#FFE07A", "paper": "#FF5A6E"},
  fonts: {"display": "Bricolage Grotesque", "body": "Geist", "mono": "Geist Mono"},
  displayRole: "fonts.display",
  tags: ["fitness", "offer", "free-trial"],
  fields: [
    { key: "kicker", label: "Kicker", default: "MOVARA · NEW MEMBERS", maxChars: 24, role: "kicker" },
    { key: "lead", label: "Lead line", default: "Close your rings with us.", maxChars: 30, role: "caption" },
    { key: "headline", label: "Offer", default: "Your first class is free.", maxChars: 30, role: "headline" },
    { key: "cta", label: "Button", default: "Book your free class", maxChars: 24, role: "cta" },
  ],
  html: `<div class="b1"></div><div class="b2"></div>
    <div class="rings">
      <svg viewBox="0 0 100 100">
        <circle class="t o" cx="50" cy="50" r="44"/><circle class="t m" cx="50" cy="50" r="34"/><circle class="t i" cx="50" cy="50" r="24"/>
        <circle class="f o" cx="50" cy="50" r="44"/><circle class="f m" cx="50" cy="50" r="34"/><circle class="f i" cx="50" cy="50" r="24"/>
      </svg>
      <div class="burst"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <div class="lbl l1">Move</div><div class="lbl l2">Train</div><div class="lbl l3">Recover</div>
    </div>
    <div class="copy">
      <div class="kick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18L8.5 6l3.5 7 3.5-7L21 18"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
      <div class="ser" data-21st-slot="lead">{{lead}}</div>
      <div class="big" data-21st-slot="headline">{{headline|words}}</div>
      <div class="sub">Any studio, any class. No card, no catch.</div>
      <div class="btn"><span data-21st-slot="cta">{{cta}}</span><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></i><b class="sh"></b></div>
      <div class="foot">movara.app · Soho · Eastside · Lisbon</div>
    </div>`,
  css: `
.v-fit-rings-offer{color:var(--ink);font-family:var(--font-body)}
.v-fit-rings-offer[data-backdrop="on"]{background:linear-gradient(130deg,color-mix(in srgb,var(--paper) 65%,var(--secondary)) 0%,var(--paper) 52%,var(--accent) 100%)}
.v-fit-rings-offer[data-backdrop="off"] .b1,.v-fit-rings-offer[data-backdrop="off"] .b2{display:none}
.v-fit-rings-offer .b1,.v-fit-rings-offer .b2{position:absolute;border-radius:50%}
.v-fit-rings-offer .b1{left:-10cqw;top:-14cqw;width:60cqw;height:60cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 45%,transparent),transparent);animation:fit-rings-offer-b1 6s ease-in-out infinite}
.v-fit-rings-offer .b2{right:-16cqw;bottom:-26cqw;width:64cqw;height:64cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 55%,transparent),transparent);animation:fit-rings-offer-b2 6s ease-in-out infinite}
.v-fit-rings-offer .rings{position:absolute;left:8cqw;top:9.1cqw;width:38cqw;height:38cqw;animation:fit-rings-offer-rings 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .rings>svg{width:100%;height:100%;transform:rotate(-90deg);overflow:visible}
.v-fit-rings-offer .t{fill:none;stroke-width:7;opacity:.22}
.v-fit-rings-offer .f{fill:none;stroke-width:7;stroke-linecap:round}
.v-fit-rings-offer .o{stroke:var(--ink)}
.v-fit-rings-offer .m{stroke:var(--secondary)}
.v-fit-rings-offer .i{stroke:color-mix(in srgb,var(--accent) 45%,#000)}
.v-fit-rings-offer .f.o{stroke-dasharray:276.46;stroke-dashoffset:276.46;filter:drop-shadow(0 0 .8cqw color-mix(in srgb,var(--ink) 45%,transparent));animation:fit-rings-offer-o 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-rings-offer .f.m{stroke-dasharray:213.63;stroke-dashoffset:213.63;filter:drop-shadow(0 0 1cqw color-mix(in srgb,var(--secondary) 60%,transparent));animation:fit-rings-offer-m 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-rings-offer .f.i{stroke-dasharray:150.8;stroke-dashoffset:150.8;animation:fit-rings-offer-i 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-rings-offer .burst{position:absolute;inset:0}
.v-fit-rings-offer .burst i{position:absolute;left:50%;top:50%;width:.7cqw;height:4cqw;margin:-2cqw 0 0 -.35cqw;border-radius:1cqw;background:color-mix(in srgb,var(--secondary) 30%,#fff);opacity:0;animation:fit-rings-offer-burst 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .burst i:nth-child(1){--r:0deg}
.v-fit-rings-offer .burst i:nth-child(2){--r:45deg}
.v-fit-rings-offer .burst i:nth-child(3){--r:90deg}
.v-fit-rings-offer .burst i:nth-child(4){--r:135deg}
.v-fit-rings-offer .burst i:nth-child(5){--r:180deg}
.v-fit-rings-offer .burst i:nth-child(6){--r:225deg}
.v-fit-rings-offer .burst i:nth-child(7){--r:270deg}
.v-fit-rings-offer .burst i:nth-child(8){--r:315deg}
.v-fit-rings-offer .chk{position:absolute;left:50%;top:50%;width:9cqw;height:9cqw;margin:-4.5cqw 0 0 -4.5cqw;border-radius:50%;display:grid;place-items:center;background:var(--ink);color:var(--accent);box-shadow:0 1.2cqw 3cqw rgba(110,10,70,.35);animation:fit-rings-offer-chk 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .chk svg{width:5cqw;height:5cqw}
.v-fit-rings-offer .lbl{position:absolute;right:-1cqw;font:500 1.1cqw/1 var(--font-mono);white-space:nowrap;letter-spacing:.14em;color:color-mix(in srgb,var(--ink) 85%,transparent);padding:.5cqw .8cqw;border-radius:5cqw;background:rgba(80,10,50,.25);animation:fit-rings-offer-lbl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .l1{top:1.4cqw;right:20.5cqw}
.v-fit-rings-offer .l2{top:5.2cqw;right:20.5cqw}
.v-fit-rings-offer .l3{top:9cqw;right:20.5cqw}
.v-fit-rings-offer .copy{position:absolute;left:52cqw;top:9.5cqw;width:42cqw}
.v-fit-rings-offer .kick{display:flex;align-items:center;gap:.8cqw;font:500 1.15cqw/1.3 var(--font-mono);letter-spacing:.2em;white-space:nowrap;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:fit-rings-offer-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .kick svg{flex:none;width:1.8cqw;height:1.8cqw}
.v-fit-rings-offer .ser{margin-top:1.4cqw;font:italic 400 3cqw/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 75%,var(--secondary));animation:fit-rings-offer-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .big{margin-top:1cqw;font:800 5cqw/1.2 var(--font-display);letter-spacing:-.04em;text-shadow:0 .6cqw 2.4cqw rgba(110,10,70,.3)}
.v-fit-rings-offer .big .w{display:inline-block;line-height:1.2;--delay:calc(var(--i) * .08s);animation:fit-rings-offer-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .big .w:nth-child(n+3){color:color-mix(in srgb,var(--ink) 55%,var(--secondary))}
.v-fit-rings-offer .sub{margin-top:1.6cqw;font:400 1.6cqw/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 85%,transparent);animation:fit-rings-offer-c4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .btn{position:relative;display:inline-flex;align-items:center;gap:1.4cqw;margin-top:2.6cqw;padding:.8cqw .8cqw .8cqw 2.4cqw;border-radius:5cqw;background:var(--ink);color:var(--accent);font:600 1.7cqw/1.3 var(--font-body);white-space:nowrap;overflow:hidden;box-shadow:0 1.4cqw 3.4cqw rgba(110,10,70,.35);animation:fit-rings-offer-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-fit-rings-offer .btn i{width:3.6cqw;height:3.6cqw;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--paper),var(--accent));color:#fff;flex:none}
.v-fit-rings-offer .btn i svg{width:1.9cqw;height:1.9cqw}
.v-fit-rings-offer .sh{position:absolute;top:0;bottom:0;left:0;width:8cqw;background:linear-gradient(100deg,transparent,color-mix(in srgb,var(--paper) 40%,transparent),transparent);transform:translateX(-12cqw);animation:fit-rings-offer-sh 6s cubic-bezier(.65,0,.35,1) infinite}
.v-fit-rings-offer .foot{margin-top:2.2cqw;font:500 1.1cqw/1 var(--font-mono);letter-spacing:.08em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:fit-rings-offer-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-fit-rings-offer .rings{left:15cqw;top:calc(52cqh - 35cqw);width:70cqw;height:70cqw}
  .v-fit-rings-offer .chk{width:16cqw;height:16cqw;margin:-8cqw 0 0 -8cqw}
  .v-fit-rings-offer .chk svg{width:9cqw;height:9cqw}
  .v-fit-rings-offer .lbl{font-size:2.4cqw;padding:1cqw 1.6cqw;right:38cqw}
  .v-fit-rings-offer .l1{top:2.4cqw}
  .v-fit-rings-offer .l2{top:9.4cqw}
  .v-fit-rings-offer .l3{top:16.4cqw}
  .v-fit-rings-offer .copy{left:7cqw;width:86cqw;top:5cqh;bottom:5cqh;display:flex;flex-direction:column;align-items:flex-start}
  .v-fit-rings-offer .kick{font-size:5.4cqw;gap:2cqw;letter-spacing:.08em;white-space:normal}
  .v-fit-rings-offer .kick svg{width:6cqw;height:6cqw}
  .v-fit-rings-offer .ser{font-size:6.4cqw;margin-top:2cqw}
  .v-fit-rings-offer .big{font-size:11cqw;margin-bottom:auto}
  .v-fit-rings-offer .sub{font-size:4.4cqw}
  .v-fit-rings-offer .btn{align-self:stretch;justify-content:space-between;font-size:5.6cqw;padding:2cqw 2cqw 2cqw 6cqw;gap:3cqw;margin-top:3cqw}
  .v-fit-rings-offer .btn i{width:11cqw;height:11cqw}
  .v-fit-rings-offer .btn i svg{width:5.6cqw;height:5.6cqw}
  .v-fit-rings-offer .foot{font-size:2.8cqw;margin-top:3cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-fit-rings-offer .rings{left:5cqw;top:28cqw;width:44cqw;height:44cqw}
  .v-fit-rings-offer .chk{width:11cqw;height:11cqw;margin:-5.5cqw 0 0 -5.5cqw}
  .v-fit-rings-offer .chk svg{width:6cqw;height:6cqw}
  .v-fit-rings-offer .lbl{font-size:1.6cqw;right:24cqw}
  .v-fit-rings-offer .l1{top:1.6cqw}
  .v-fit-rings-offer .l2{top:6.2cqw}
  .v-fit-rings-offer .l3{top:10.8cqw}
  .v-fit-rings-offer .copy{left:53cqw;width:42cqw;top:14cqw}
  .v-fit-rings-offer .kick{font-size:1.9cqw;letter-spacing:.1em;white-space:normal}
  .v-fit-rings-offer .kick svg{width:2.8cqw;height:2.8cqw}
  .v-fit-rings-offer .ser{font-size:3.4cqw}
  .v-fit-rings-offer .big{font-size:7.4cqw}
  .v-fit-rings-offer .sub{font-size:2.3cqw}
  .v-fit-rings-offer .btn{font-size:2.3cqw;padding:1.1cqw 1.1cqw 1.1cqw 3cqw;gap:1.6cqw;margin-top:3cqw}
  .v-fit-rings-offer .btn i{width:5cqw;height:5cqw}
  .v-fit-rings-offer .btn i svg{width:2.6cqw;height:2.6cqw}
  .v-fit-rings-offer .foot{font-size:1.6cqw}
}
@keyframes fit-rings-offer-b1{0%,100%{transform:translate(0,0)}50%{transform:translate(5cqw,4cqw)}}
@keyframes fit-rings-offer-b2{0%,100%{transform:translate(0,0)}50%{transform:translate(-5cqw,-3cqw)}}
@keyframes fit-rings-offer-rings{0%{opacity:0;transform:scale(.85) rotate(-20deg)}8%{opacity:1;transform:scale(1) rotate(0)}38%{transform:scale(1)}41%{transform:scale(1.05)}46%{transform:scale(1)}90%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.94)}}
@keyframes fit-rings-offer-o{0%,5%{stroke-dashoffset:276.46}34%,100%{stroke-dashoffset:0}}
@keyframes fit-rings-offer-m{0%,10%{stroke-dashoffset:213.63}37%,100%{stroke-dashoffset:0}}
@keyframes fit-rings-offer-i{0%,15%{stroke-dashoffset:150.8}40%,100%{stroke-dashoffset:0}}
@keyframes fit-rings-offer-burst{0%,39%{opacity:0;transform:rotate(var(--r)) translateY(-14cqw) scaleY(.2)}42%{opacity:1;transform:rotate(var(--r)) translateY(-21cqw) scaleY(1)}52%,100%{opacity:0;transform:rotate(var(--r)) translateY(-25cqw) scaleY(.2)}}
@keyframes fit-rings-offer-chk{0%,39%{opacity:0;transform:scale(.3)}44%{opacity:1;transform:scale(1.15)}48%,90%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}
@keyframes fit-rings-offer-lbl{0%,6%{opacity:0;transform:translateX(-1cqw)}14%,40%{opacity:1;transform:none}46%,100%{opacity:0;transform:none}}
@keyframes fit-rings-offer-c1{0%,4%{opacity:0;transform:translateY(1.4cqw)}14%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-rings-offer-c2{0%,10%{opacity:0;transform:translateY(1.4cqw)}20%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-rings-offer-c3{0%,24%{opacity:0;transform:translateY(2.4cqw);filter:blur(.6cqw)}34%,90%{opacity:1;transform:none;filter:blur(0)}98%,100%{opacity:0;transform:none;filter:blur(0)}}
@keyframes fit-rings-offer-c4{0%,28%{opacity:0;transform:translateY(2.4cqw);filter:blur(.6cqw)}38%,90%{opacity:1;transform:none;filter:blur(0)}98%,100%{opacity:0;transform:none;filter:blur(0)}}
@keyframes fit-rings-offer-btn{0%,34%{opacity:0;transform:translateY(2cqw)}44%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes fit-rings-offer-sh{0%,52%{transform:translateX(-12cqw)}70%,100%{transform:translateX(40cqw)}}
`,
};

export const FITNESS_SCENES: SceneSpec[] = [fitIntervalTimer, fitRepSlam, fitHeartZone, fitTransformation, fitClassSchedule, fitCoachIntro, fitMacros, fitStepStreak, fitLeaderboard, fitRingsOffer];
