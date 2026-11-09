// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const baWipe: SceneSpec = {
  id: "ba-wipe",
  slug: "mg-ba-wipe",
  name: "Before After Wipe",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "wipe-reveal-old-to-new",
  energy: "default",
  settle: 3.4,
  requiresScreenshot: true,
  colors: { ink: "#F5F5F7", accent: "#3D63FF", secondary: "#FF6AA2", paper: "#0B0B0D" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["before-after", "redesign", "wipe"],
  fields: [
    { key: "before", label: "Before label", default: "Before", maxChars: 14, role: "label" },
    { key: "after", label: "After label", default: "After", maxChars: 14, role: "label" },
    { key: "insight", label: "Insight", default: "Up 18%, driven by the Team plan", maxChars: 40, role: "caption" },
  ],
  html: `<div class="win">
  <div class="old"><div class="zm">
    <div class="o-title"><i></i><i></i><i></i><span>Q3_report_FINAL_v7 (2).xls  [Compatibility Mode]  - Read-Only</span></div>
    <div class="o-ribbon"><b>Arial ▾</b><b>10 ▾</b><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="o-fx"><b>fx</b><span>=SUM(B2:B19)/C4*1.07+'Sheet 3 (old)'!D9-VLOOKUP(A2,Q2_backup!A:F,6,FALSE)</span></div>
    <div class="o-grid">
      <span class="h"></span><span class="h">A</span><span class="h">B</span><span class="h">C</span><span class="h">D</span><span class="h">E</span><span class="h">F</span><span class="h">G</span><span class="h">H</span><span class="h">I</span><span class="h">J</span><span class="h">K</span><span class="h">L</span>
      <span class="h" style="grid-row:2;grid-column:1">1</span><span style="grid-row:2;grid-column:2">Region</span><span style="grid-row:2;grid-column:3">Rev (old)</span><span style="grid-row:2;grid-column:4">Rev new??</span><span style="grid-row:2;grid-column:5">delta</span><span style="grid-row:2;grid-column:7" class="p">do not edit!!</span>
      <span class="h" style="grid-row:3;grid-column:1">2</span><span style="grid-row:3;grid-column:2" class="y">EMEA</span><span style="grid-row:3;grid-column:3" class="n">48,210</span><span style="grid-row:3;grid-column:4" class="n r">#REF!</span><span style="grid-row:3;grid-column:5" class="n">0.07</span>
      <span class="h" style="grid-row:4;grid-column:1">3</span><span style="grid-row:4;grid-column:2">NA</span><span style="grid-row:4;grid-column:3" class="n y">51,9O2</span><span style="grid-row:4;grid-column:4" class="n">52,118</span><span style="grid-row:4;grid-column:5" class="n r">#DIV/0!</span>
      <span class="h" style="grid-row:5;grid-column:1">4</span><span style="grid-row:5;grid-column:2" class="g">APAC</span><span style="grid-row:5;grid-column:3" class="n">22,004</span><span style="grid-row:5;grid-column:4" class="n y">=??</span><span style="grid-row:5;grid-column:5" class="n">-0.3</span>
      <span class="h" style="grid-row:6;grid-column:1">5</span><span style="grid-row:6;grid-column:2">LATAM</span><span style="grid-row:6;grid-column:3" class="n p">9,8l1</span><span style="grid-row:6;grid-column:4" class="n">10,240</span>
      <span class="h" style="grid-row:7;grid-column:1">6</span><span style="grid-row:7;grid-column:2" class="r">Total</span><span style="grid-row:7;grid-column:3" class="n r">#VALUE!</span><span style="grid-row:7;grid-column:4" class="n y">131,9??</span>
      <span class="h" style="grid-row:8;grid-column:1">7</span>
      <span class="h" style="grid-row:9;grid-column:1">8</span><span style="grid-row:9;grid-column:6" class="y">see tab 4</span>
      <span class="h" style="grid-row:10;grid-column:1">9</span><span style="grid-row:10;grid-column:8" class="p">v6 numbers</span>
      <span class="h" style="grid-row:11;grid-column:1">10</span><span style="grid-row:11;grid-column:9" class="n">0.0412</span>
      <span class="h" style="grid-row:12;grid-column:1">11</span><span style="grid-row:12;grid-column:10" class="g">ok?</span>
      <span class="h" style="grid-row:13;grid-column:1">12</span>
      <span class="h" style="grid-row:14;grid-column:1">13</span><span style="grid-row:14;grid-column:11" class="r">check!!</span>
      <span class="h" style="grid-row:15;grid-column:1">14</span><span class="h" style="grid-row:16;grid-column:1">15</span><span class="h" style="grid-row:17;grid-column:1">16</span><span class="h" style="grid-row:18;grid-column:1">17</span><span class="h" style="grid-row:19;grid-column:1">18</span><span class="h" style="grid-row:20;grid-column:1">19</span><span class="h" style="grid-row:21;grid-column:1">20</span><span class="h" style="grid-row:22;grid-column:1">21</span><span class="h" style="grid-row:23;grid-column:1">22</span><span class="h" style="grid-row:24;grid-column:1">23</span><span class="h" style="grid-row:25;grid-column:1">24</span><span class="h" style="grid-row:26;grid-column:1">25</span><span class="h" style="grid-row:27;grid-column:1">26</span><span class="h" style="grid-row:28;grid-column:1">27</span><span class="h" style="grid-row:29;grid-column:1">28</span><span class="h" style="grid-row:30;grid-column:1">29</span><span class="h" style="grid-row:31;grid-column:1">30</span><span class="h" style="grid-row:32;grid-column:1">31</span><span class="h" style="grid-row:33;grid-column:1">32</span><span class="h" style="grid-row:34;grid-column:1">33</span><span class="h" style="grid-row:35;grid-column:1">34</span><span class="h" style="grid-row:36;grid-column:1">35</span>
    </div>
    <div class="o-err">
      <div class="bar">Warning</div>
      <div class="bd"><svg viewBox="0 0 24 24"><path d="M12 2.5 23 21.5H1Z" fill="#ffd400" stroke="#8a6d00" stroke-width="1"/><path d="M12 9v6M12 17.5v1.5" stroke="#000" stroke-width="2.2" stroke-linecap="round"/></svg><span>A formula in this worksheet contains one or more invalid references. Links to 3 files could not be updated.</span></div>
      <div class="bt"><b>OK</b><b>Help</b></div>
    </div>
    <div class="o-note">ask Dana?? numbers don't match Q2</div>
  </div></div>
  <div class="new"><div class="zm">
    <aside class="n-side">
      <div class="n-logo"><i></i>Lumen</div>
      <p><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 7 8 2.5 13.5 7v6.5h-11Z"/></svg>Home</p>
      <p class="on"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 13V8M8 13V3M13 13V6"/></svg>Reports</p>
      <p><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M2.5 6.5h11"/></svg>Projects</p>
      <p><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 9.5h3l1 2h3l1-2h3M2.5 9.5l1.5-6h8l1.5 6v4h-11Z"/></svg>Inbox<em>3</em></p>
      <p><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="6" cy="6" r="2.5"/><path d="M1.5 13.5c.6-2.6 2.3-4 4.5-4s3.9 1.4 4.5 4M11 3.6a2.4 2.4 0 0 1 0 4.8M12.5 9.8c1.2.6 1.9 1.9 2.1 3.7"/></svg>Team</p>
    </aside>
    <div class="n-main">
      <div class="n-hd">
        <div><h5>Q3 overview</h5><small>Summarized from 14 sources · updated 2 min ago</small></div>
        <div class="n-act"><div class="n-av"><i></i><i></i><i></i></div><b>Share</b></div>
      </div>
      <div class="n-stats">
        <div><span>Revenue</span><b>$2.41M<em>+18%</em></b></div>
        <div><span>Active teams</span><b>4,820<em>+9%</em></b></div>
        <div><span>Net retention</span><b>127%<em>+4 pt</em></b></div>
      </div>
      <div class="n-chart">
        <header>Revenue by month<span>Jul–Sep</span></header>
        <svg viewBox="0 0 600 170" preserveAspectRatio="none">
          <defs><linearGradient id="ba-wipe-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".32"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>
          <path d="M0 42H600M0 86H600M0 130H600" stroke="#efeff4" stroke-width="1.5"/>
          <path d="M0 140 C60 134 90 122 140 120 S230 98 280 102 S370 74 420 66 S520 34 600 22 V170 H0Z" fill="url(#ba-wipe-area)"/>
          <path d="M0 140 C60 134 90 122 140 120 S230 98 280 102 S370 74 420 66 S520 34 600 22" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="600" cy="22" r="7" fill="currentColor"/><circle cx="600" cy="22" r="14" fill="currentColor" opacity=".18"/>
        </svg>
      </div>
    </div>
  </div></div>
  <div class="rail"><div class="line"></div><div class="knob"><svg viewBox="0 0 24 24" fill="none" stroke="#141518" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7 4 12l5 5M15 7l5 5-5 5"/></svg></div></div>
</div>
<div class="tag o-tag" data-21st-slot="before"><i></i>{{before}}</div>
<div class="tag n-tag" data-21st-slot="after"><i></i>{{after}}</div>
<div class="n-ai" data-21st-slot="insight"><i>✦</i><span>{{insight}}</span></div>`,
  css: `
.v-ba-wipe{color:var(--ink);font-family:var(--font-body)}
.v-ba-wipe[data-backdrop="on"]{background:radial-gradient(70% 90% at 50% 30%,color-mix(in srgb,var(--ink) 14%,var(--paper)) 0%,color-mix(in srgb,var(--ink) 5%,var(--paper)) 55%,var(--paper) 100%)}
.v-ba-wipe .win{position:absolute;left:8cqw;top:6.2cqw;width:84cqw;height:44cqw;border-radius:1.2cqw;overflow:hidden;background:#ececec;box-shadow:0 0 0 1px rgba(255,255,255,.09),0 2.4cqw 5cqw rgba(0,0,0,.55),0 .4cqw 1cqw rgba(0,0,0,.35);animation:ba-wipe-cam 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-wipe .old,.v-ba-wipe .new{position:absolute;inset:0}
.v-ba-wipe .zm{position:absolute;inset:0}
.v-ba-wipe .old{font-family:Tahoma,Verdana,"Segoe UI",sans-serif;color:#222;background:#f2f2f2}
.v-ba-wipe .o-title{height:2.4cqw;display:flex;align-items:center;gap:.5cqw;padding:0 .8cqw;background:linear-gradient(#6d8fd3,#3b5fae);color:#fff;font-size:1cqw;font-weight:700;white-space:nowrap}
.v-ba-wipe .o-title i{width:1.1cqw;height:1.1cqw;background:#d9e2f5;border:1px solid #23407e;flex:none}
.v-ba-wipe .o-title span{margin-left:.6cqw;overflow:hidden;text-overflow:ellipsis}
.v-ba-wipe .o-ribbon{height:3.6cqw;display:flex;align-items:center;gap:.35cqw;padding:0 .8cqw;background:linear-gradient(#f7f8fb,#dde2ea);border-bottom:1px solid #a9b1c1;overflow:hidden}
.v-ba-wipe .o-ribbon i{width:1.4cqw;height:1.4cqw;border-radius:.15cqw;background:#9aa7bd;border:1px solid #6f7d96;flex:none}
.v-ba-wipe .o-ribbon i:nth-child(3n){background:#e5a33b}
.v-ba-wipe .o-ribbon i:nth-child(4n){background:#c74b4b}
.v-ba-wipe .o-ribbon i:nth-child(5n){background:#4d8f4a}
.v-ba-wipe .o-ribbon i:nth-child(7n){background:#5d74c9}
.v-ba-wipe .o-ribbon b{flex:none;font-weight:400;font-size:.95cqw;background:#fff;border:1px solid #8b93a3;padding:.15cqw .6cqw;margin:0 .3cqw}
.v-ba-wipe .o-fx{height:2.2cqw;display:flex;align-items:center;gap:.8cqw;padding:0 .8cqw;background:#fff;border-bottom:1px solid #a9a9a9;font-size:1cqw;white-space:nowrap;overflow:hidden}
.v-ba-wipe .o-fx b{font-style:italic;color:#555;border-right:1px solid #bbb;padding-right:.8cqw}
.v-ba-wipe .o-grid{position:absolute;left:0;right:0;top:8.2cqw;bottom:0;overflow:hidden;display:grid;grid-template-columns:3cqw repeat(12,7cqw);grid-auto-rows:2.2cqw;font-size:.95cqw;background:linear-gradient(#c7c7c7 1px,transparent 1px) 0 0/100% 2.2cqw,linear-gradient(90deg,#c7c7c7 1px,transparent 1px) 3cqw 0/7cqw 100%,linear-gradient(90deg,#e2e2e2 3cqw,#fff 3cqw)}
.v-ba-wipe .o-grid span{padding:0 .35cqw;line-height:2.2cqw;white-space:nowrap;overflow:hidden}
.v-ba-wipe .o-grid .h{background:#e2e2e2;color:#444;text-align:center;border-bottom:1px solid #b5b5b5}
.v-ba-wipe .o-grid .y{background:#fff27a}
.v-ba-wipe .o-grid .r{color:#d01c1c;font-weight:700}
.v-ba-wipe .o-grid .g{background:#c9efc0}
.v-ba-wipe .o-grid .p{background:#f6c4c4}
.v-ba-wipe .o-grid .n{text-align:right}
.v-ba-wipe .o-err{position:absolute;left:5cqw;top:17cqw;width:25cqw;background:#ece9d8;border:1px solid #0a246a;box-shadow:.4cqw .5cqw 0 rgba(0,0,0,.35);font-size:1cqw;animation:ba-wipe-jit 2s linear infinite}
.v-ba-wipe .o-err .bar{height:2cqw;line-height:2cqw;padding:0 .6cqw;color:#fff;font-weight:700;background:linear-gradient(90deg,#0a246a,#a6caf0)}
.v-ba-wipe .o-err .bd{display:flex;gap:1cqw;padding:1.1cqw 1cqw .6cqw;line-height:1.35}
.v-ba-wipe .o-err svg{width:2.8cqw;height:2.8cqw;flex:none}
.v-ba-wipe .o-err .bt{display:flex;justify-content:center;gap:.8cqw;padding:0 0 1cqw}
.v-ba-wipe .o-err .bt b{font-weight:400;min-width:5.4cqw;text-align:center;padding:.3cqw 0;background:#f4f3ee;border:1px solid #003c74;border-radius:.2cqw}
.v-ba-wipe .o-note{position:absolute;left:17cqw;top:33.5cqw;width:13cqw;padding:.8cqw 1cqw;background:#fde68a;color:#5b4300;font-family:var(--font-body);font-style:italic;font-size:1.3cqw;line-height:1.1;transform:rotate(4deg);box-shadow:.3cqw .5cqw .9cqw rgba(0,0,0,.25)}
.v-ba-wipe .new{background:var(--paper);color:var(--ink);clip-path:inset(0 0 0 100%);animation:ba-wipe-clip 6s linear infinite}
.v-ba-wipe .new .zm{display:flex}
.v-ba-wipe .n-side{width:15cqw;flex:none;background:color-mix(in srgb,var(--ink) 5%,var(--paper));border-right:1px solid color-mix(in srgb,var(--ink) 10%,transparent);padding:2cqw 1.2cqw;display:flex;flex-direction:column;gap:.4cqw;font-size:1.15cqw;color:color-mix(in srgb,var(--ink) 68%,transparent)}
.v-ba-wipe .n-logo{display:flex;align-items:center;gap:.7cqw;font-weight:600;font-size:1.45cqw;color:var(--ink);margin-bottom:1.4cqw}
.v-ba-wipe .n-logo i{width:2cqw;height:2cqw;border-radius:.6cqw;background:conic-gradient(from 210deg,color-mix(in srgb,var(--accent) 55%,#fff),var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));box-shadow:inset 0 0 0 .45cqw rgba(255,255,255,.35)}
.v-ba-wipe .n-side p{margin:0;display:flex;align-items:center;gap:.7cqw;padding:.55cqw .7cqw;border-radius:.6cqw}
.v-ba-wipe .n-side p svg{width:1.3cqw;height:1.3cqw;flex:none}
.v-ba-wipe .n-side p.on{background:var(--paper);color:var(--ink);font-weight:500;box-shadow:0 .1cqw .4cqw rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04)}
.v-ba-wipe .n-side p em{margin-left:auto;font-style:normal;font-size:.9cqw;background:color-mix(in srgb,var(--accent) 14%,#fff);color:var(--accent);padding:.05cqw .5cqw;border-radius:2cqw}
.v-ba-wipe .n-main{flex:1;padding:2.2cqw 2.6cqw;display:flex;flex-direction:column;gap:1.3cqw;min-width:0}
.v-ba-wipe .n-hd{display:flex;align-items:flex-start;justify-content:space-between}
.v-ba-wipe .n-hd h5{margin:0;font-family:var(--font-display);font-size:2.3cqw;font-weight:600;letter-spacing:-.03em}
.v-ba-wipe .n-hd small{display:block;margin-top:.3cqw;font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-ba-wipe .n-act{display:flex;align-items:center;gap:.9cqw}
.v-ba-wipe .n-av{display:flex}
.v-ba-wipe .n-av i{width:2.2cqw;height:2.2cqw;border-radius:50%;border:.2cqw solid var(--paper);margin-left:-.6cqw}
.v-ba-wipe .n-av i:nth-child(1){background:linear-gradient(135deg,#ffb38a,#ff7a59)}
.v-ba-wipe .n-av i:nth-child(2){background:linear-gradient(135deg,#8fd3ff,#4d8cff)}
.v-ba-wipe .n-av i:nth-child(3){background:linear-gradient(135deg,#b9f28c,#3fbf6f)}
.v-ba-wipe .n-act b{font-weight:500;font-size:1.1cqw;background:var(--ink);color:var(--paper);padding:.6cqw 1.3cqw;border-radius:2cqw}
.v-ba-wipe .n-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2cqw}
.v-ba-wipe .n-stats div{background:color-mix(in srgb,var(--ink) 4%,var(--paper));border-radius:1cqw;padding:1.1cqw 1.3cqw;box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent),0 .3cqw .8cqw rgba(21,23,25,.04)}
.v-ba-wipe .n-stats span{display:block;font-size:1cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-ba-wipe .n-stats b{display:flex;align-items:baseline;gap:.6cqw;margin-top:.35cqw;font-size:2.1cqw;font-weight:600;letter-spacing:-.03em}
.v-ba-wipe .n-stats em{font-style:normal;font-size:.95cqw;font-weight:500;color:#1a8f4c;background:#e3f6ea;padding:.1cqw .5cqw;border-radius:2cqw}
.v-ba-wipe .n-chart{position:relative;flex:1;background:color-mix(in srgb,var(--ink) 4%,var(--paper));border-radius:1cqw;box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 10%,transparent),0 .3cqw .8cqw rgba(21,23,25,.04);padding:1.2cqw 1.4cqw;color:var(--accent)}
.v-ba-wipe .n-chart header{display:flex;justify-content:space-between;font-size:1.15cqw;font-weight:600;color:var(--ink)}
.v-ba-wipe .n-chart header span{font-weight:400;color:color-mix(in srgb,var(--ink) 55%,transparent);font-size:1cqw}
.v-ba-wipe .n-chart svg{position:absolute;left:1.4cqw;right:1.4cqw;bottom:1.2cqw;width:calc(100% - 2.8cqw);height:72%}
.v-ba-wipe .rail{position:absolute;inset:0;pointer-events:none;transform:translateX(100%);animation:ba-wipe-rail 6s linear infinite}
.v-ba-wipe .line{position:absolute;left:-.12cqw;top:0;bottom:0;width:.24cqw;background:#fff;box-shadow:0 0 1.2cqw rgba(255,255,255,.9),0 0 3cqw color-mix(in srgb,var(--accent) 70%,transparent)}
.v-ba-wipe .knob{position:absolute;left:-2.3cqw;top:calc(50% - 2.3cqw);width:4.6cqw;height:4.6cqw;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 .6cqw 1.6cqw rgba(0,0,0,.35),0 0 0 .5cqw rgba(255,255,255,.25)}
.v-ba-wipe .knob svg{width:2.4cqw;height:2.4cqw}
.v-ba-wipe .tag{position:absolute;top:45.4cqw;display:flex;align-items:center;gap:.6cqw;padding:.55cqw 1.1cqw;border-radius:5cqw;font-family:var(--font-body);font-size:1.3cqw;font-weight:500;letter-spacing:-.01em;white-space:nowrap}
.v-ba-wipe .tag i{width:.7cqw;height:.7cqw;border-radius:50%;flex:none}
.v-ba-wipe .o-tag{left:9.6cqw;background:rgba(19,20,23,.82);color:#fff;animation:ba-wipe-cam 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-wipe .o-tag i{background:#9a9aa3}
.v-ba-wipe .n-tag{right:9.6cqw;background:#fff;color:#141518;box-shadow:0 .3cqw 1cqw rgba(41,42,45,.18),0 0 0 1px rgba(41,42,45,.08);animation:ba-wipe-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-wipe .n-tag i{background:var(--accent);box-shadow:0 0 .8cqw var(--accent)}
.v-ba-wipe .n-ai{position:absolute;right:13cqw;top:25.4cqw;max-width:30cqw;display:flex;align-items:center;gap:.6cqw;padding:.7cqw 1.1cqw;border-radius:.9cqw;background:var(--ink);color:var(--paper);font-family:var(--font-body);font-size:1.2cqw;line-height:1.25;box-shadow:0 .8cqw 2cqw rgba(32,33,36,.25);animation:ba-wipe-ai 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-wipe .n-ai i{font-style:normal;color:var(--secondary);flex:none}
@container (max-aspect-ratio: 4/5){
  .v-ba-wipe .win{left:6cqw;width:88cqw;top:16cqh;height:67cqh;border-radius:2.6cqw}
  .v-ba-wipe .n-main{flex-direction:column-reverse}
  .v-ba-wipe .n-hd{display:none}
  .v-ba-wipe .zm{zoom:1.6}
  .v-ba-wipe .n-side{display:none}
  .v-ba-wipe .n-act{display:none}
  .v-ba-wipe .o-err{left:4cqw;top:14cqw;width:34cqw}
  .v-ba-wipe .o-note{left:30cqw;top:30cqw}
  .v-ba-wipe .new{clip-path:inset(100% 0 0 0);animation-name:ba-wipe-clipv}
  .v-ba-wipe .rail{transform:translateY(100%);animation-name:ba-wipe-railv}
  .v-ba-wipe .line{left:0;right:0;top:-.25cqw;bottom:auto;width:auto;height:.5cqw}
  .v-ba-wipe .knob{left:calc(50% - 4.5cqw);top:-4.5cqw;width:9cqw;height:9cqw}
  .v-ba-wipe .knob svg{width:4.6cqw;height:4.6cqw;transform:rotate(90deg)}
  .v-ba-wipe .tag{font-size:5.6cqw;gap:2cqw;padding:1.6cqw 3.6cqw;top:auto}
  .v-ba-wipe .tag i{width:2.4cqw;height:2.4cqw}
  .v-ba-wipe .o-tag{left:6cqw;top:8.4cqh}
  .v-ba-wipe .n-tag{right:6cqw;top:86.4cqh}
  .v-ba-wipe .n-ai{left:12cqw;right:12cqw;top:54cqh;max-width:none;font-size:5.4cqw;gap:2.4cqw;padding:2.6cqw 3.6cqw;border-radius:3cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-ba-wipe .win{left:6cqw;width:88cqw;top:15cqh;height:68cqh;border-radius:2cqw}
  .v-ba-wipe .zm{zoom:1.4}
  .v-ba-wipe .o-err{top:14cqw}
  .v-ba-wipe .o-note{top:30cqw}
  .v-ba-wipe .knob{left:-3.4cqw;top:calc(50% - 3.4cqw);width:6.8cqw;height:6.8cqw}
  .v-ba-wipe .knob svg{width:3.4cqw;height:3.4cqw}
  .v-ba-wipe .tag{font-size:2.8cqw;gap:1.2cqw;padding:1cqw 2.2cqw}
  .v-ba-wipe .tag i{width:1.4cqw;height:1.4cqw}
  .v-ba-wipe .o-tag{left:6cqw;top:6cqh}
  .v-ba-wipe .n-tag{right:6cqw;top:86.6cqh}
  .v-ba-wipe .n-ai{right:10cqw;top:44cqh;max-width:36cqw;font-size:2.3cqw;gap:1.2cqw;padding:1.4cqw 2cqw;border-radius:1.6cqw}
}
@keyframes ba-wipe-cam{0%{transform:translateY(1.2cqw) scale(.97);opacity:0}9%{opacity:1}24%,100%{transform:none;opacity:1}}
@keyframes ba-wipe-in{0%,16%{opacity:0;transform:translateY(1cqw) scale(.9)}26%,100%{opacity:1;transform:none}}
@keyframes ba-wipe-ai{0%,30%{opacity:0;transform:translateY(1.2cqw)}42%,100%{opacity:1;transform:none}}
@keyframes ba-wipe-jit{0%,86%{transform:translateX(0)}89%{transform:translateX(.35cqw)}92%{transform:translateX(-.35cqw)}95%{transform:translateX(.2cqw)}98%,100%{transform:translateX(0)}}
@keyframes ba-wipe-clip{0%,9%{clip-path:inset(0 0 0 100%);animation-timing-function:cubic-bezier(.65,0,.35,1)}32%{clip-path:inset(0 0 0 44%);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%,100%{clip-path:inset(0 0 0 48%)}}
@keyframes ba-wipe-rail{0%,9%{transform:translateX(100%);opacity:0;animation-timing-function:cubic-bezier(.65,0,.35,1)}12%{opacity:1}32%{transform:translateX(44%);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%,100%{transform:translateX(48%);opacity:1}}
@keyframes ba-wipe-clipv{0%,9%{clip-path:inset(100% 0 0 0);animation-timing-function:cubic-bezier(.65,0,.35,1)}32%{clip-path:inset(44% 0 0 0);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%,100%{clip-path:inset(48% 0 0 0)}}
@keyframes ba-wipe-railv{0%,9%{transform:translateY(100%);opacity:0;animation-timing-function:cubic-bezier(.65,0,.35,1)}12%{opacity:1}32%{transform:translateY(44%);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%,100%{transform:translateY(48%);opacity:1}}
`,
};

export const baSplit: SceneSpec = {
  id: "ba-split",
  slug: "mg-ba-split",
  name: "Old Way Versus New",
  kind: "scene",
  job: "process",
  language: "editorial",
  mechanic: "split-steps-pile-vs-one-click",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#2C2925", accent: "#3D63FF", secondary: "#C2410C", paper: "#EBE7DF" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["before-after", "workflow", "split-screen"],
  fields: [
    { key: "oldWay", label: "Old way title", default: "Old way", maxChars: 18, role: "headline" },
    { key: "newWay", label: "New way title", default: "With Lumen", maxChars: 18, role: "headline" },
    { key: "stat", label: "Result stat", default: "1 prompt · 38 seconds", maxChars: 28, role: "caption" },
  ],
  html: `<div class="L">
  <div class="hd">
    <div><h5 data-21st-slot="oldWay">{{oldWay}}</h5><div class="when"><span>6 steps ·</span><div class="reel"><div>Mon 9:00<br>Mon 11:40<br>Mon 17:05<br>Tue 10:30<br>Wed 9:15<br>Wed 15:50</div></div></div></div>
    <div class="clock"><i class="hh"></i><i class="mh"></i></div>
  </div>
  <div class="stack">
    <div class="card c1"><div class="in"><b>1</b>Export CSVs from 3 tools<em>40 min</em></div></div>
    <div class="card c2"><div class="in"><b>2</b>Clean the columns by hand<em>1 h</em></div></div>
    <div class="card c3"><div class="in"><b>3</b>Email Sam for Q2 numbers<em>…</em></div></div>
    <div class="card c4"><div class="in"><b>4</b>Wait for Sam to reply<em class="hot">a day</em></div></div>
    <div class="card c5"><div class="in"><b>5</b>Paste it all into the deck<em>45 min</em></div></div>
    <div class="card c6"><div class="in"><b>6</b>Fix the formatting, again<em class="hot">ugh</em></div></div>
  </div>
</div>
<div class="R">
  <div class="glow"></div>
  <div class="hd"><h5 data-21st-slot="newWay"><i></i>{{newWay}}</h5><p data-21st-slot="stat">{{stat}}</p></div>
  <div class="pz">
    <div class="panel">
      <span class="chip">✦ Ask Lumen</span>
      <div class="prompt">Build the Q3 board report from Stripe exports, Notion docs and the CRM.<span class="go">Generate <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg></span></div>
      <div class="prog"><i></i></div>
      <div class="res">
        <div class="t">Q3 board report<span class="done">✓ Done in 38 s</span></div>
        <small>12 slides · 4 charts · every number linked to its source</small>
        <div class="thumbs"><div class="a"></div><div class="b"></div><div class="c"></div><div class="d"></div></div>
      </div>
    </div>
    <div class="cursor"><svg viewBox="0 0 24 24"><path d="M4 2.5v17.2l4.6-4.3 3 6.6 3-1.4-3-6.4h6.3Z" fill="#fff" stroke="#141518" stroke-width="1.4" stroke-linejoin="round"/></svg></div>
  </div>
</div>
<div class="vs">vs</div>`,
  css: `
.v-ba-split{color:var(--ink);font-family:var(--font-body)}
.v-ba-split .L{position:absolute;left:0;top:0;width:50cqw;height:100%}
.v-ba-split[data-backdrop="on"] .L{background:radial-gradient(90% 70% at 30% 10%,color-mix(in srgb,var(--paper) 55%,#fff) 0%,var(--paper) 70%,color-mix(in srgb,var(--paper) 93%,#000) 100%)}
.v-ba-split .L .hd{position:absolute;left:4.5cqw;top:3.6cqw;right:4.5cqw;display:flex;align-items:flex-start;justify-content:space-between}
.v-ba-split .L h5{margin:0;font-family:var(--font-display);font-style:italic;font-weight:400;font-size:4.2cqw;line-height:1.05;letter-spacing:-.01em}
.v-ba-split .when{display:flex;align-items:center;gap:.7cqw;margin-top:.8cqw;font-family:var(--font-mono);font-size:1.15cqw;color:color-mix(in srgb,var(--ink) 55%,var(--paper))}
.v-ba-split .reel{height:1.8cqw;overflow:hidden}
.v-ba-split .reel div{line-height:1.8cqw;animation:ba-split-when 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-split .clock{width:4.4cqw;height:4.4cqw;flex:none;border-radius:50%;background:color-mix(in srgb,var(--paper) 25%,#fff);box-shadow:inset 0 0 0 .25cqw var(--ink),0 .3cqw .8cqw rgba(60,50,30,.15);position:relative}
.v-ba-split .clock i{position:absolute;left:calc(50% - .14cqw);bottom:50%;width:.28cqw;border-radius:.2cqw;background:var(--ink);transform-origin:50% 100%}
.v-ba-split .clock .mh{height:1.6cqw;animation:ba-split-spin 1s linear infinite}
.v-ba-split .clock .hh{height:1.05cqw;background:var(--secondary);animation:ba-split-spin 6s linear infinite}
.v-ba-split .stack{position:absolute;left:0;top:0;width:50cqw;height:56.25cqw}
.v-ba-split .card{position:absolute;left:8cqw;width:32cqw;height:4.4cqw;opacity:0}
.v-ba-split .card .in{height:100%;display:flex;align-items:center;gap:1cqw;padding:0 1.1cqw;background:color-mix(in srgb,var(--paper) 25%,#fff);border:1px solid color-mix(in srgb,var(--paper) 80%,#000);border-radius:.8cqw;box-shadow:0 .35cqw .9cqw rgba(70,55,30,.13);font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 90%,var(--paper));white-space:nowrap}
.v-ba-split .card b{width:2.1cqw;height:2.1cqw;flex:none;border-radius:50%;background:color-mix(in srgb,var(--paper) 85%,#000 5%);display:grid;place-items:center;font-size:1cqw;font-weight:600;color:color-mix(in srgb,var(--ink) 65%,var(--paper))}
.v-ba-split .card em{margin-left:auto;font-style:normal;font-family:var(--font-mono);font-size:1cqw;color:color-mix(in srgb,var(--ink) 45%,var(--paper))}
.v-ba-split .card em.hot{color:var(--secondary);font-family:var(--font-display);font-style:italic;font-size:1.6cqw}
.v-ba-split .c1{top:46.4cqw;animation:ba-split-d1 6s linear infinite}
.v-ba-split .c2{top:41.2cqw;animation:ba-split-d2 6s linear infinite}
.v-ba-split .c3{top:36cqw;animation:ba-split-d3 6s linear infinite}
.v-ba-split .c4{top:30.8cqw;animation:ba-split-d4 6s linear infinite}
.v-ba-split .c5{top:25.6cqw;animation:ba-split-d5 6s linear infinite}
.v-ba-split .c6{top:20.4cqw;animation:ba-split-d6 6s linear infinite}
.v-ba-split .c1 .in{transform:translateX(0) rotate(-2deg)}
.v-ba-split .c2 .in{transform:translateX(1.2cqw) rotate(1.5deg)}
.v-ba-split .c3 .in{transform:translateX(-.8cqw) rotate(-1deg)}
.v-ba-split .c4 .in{transform:translateX(1.6cqw) rotate(2.4deg)}
.v-ba-split .c5 .in{transform:translateX(-.4cqw) rotate(-2.2deg)}
.v-ba-split .c6 .in{transform:translateX(.8cqw) rotate(1deg)}
.v-ba-split .R{position:absolute;left:50cqw;top:0;width:50cqw;height:100%;overflow:hidden;color:#fff;background:radial-gradient(70% 60% at 80% 10%,color-mix(in srgb,var(--accent) 55%,#fff) 0%,color-mix(in srgb,var(--accent) 0%,transparent) 60%),linear-gradient(160deg,var(--accent) 0%,color-mix(in srgb,var(--accent) 80%,#000) 55%,color-mix(in srgb,var(--accent) 62%,#000) 100%)}
.v-ba-split[data-backdrop="off"] .R{left:51cqw;top:1.5cqw;bottom:1.5cqw;height:auto;width:47.5cqw;border-radius:2cqw}
.v-ba-split .R .glow{position:absolute;left:10cqw;top:18cqw;width:34cqw;height:30cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.4),rgba(255,255,255,0));animation:ba-split-glow 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-split .R .hd{position:absolute;left:4.5cqw;right:4.5cqw;top:3.6cqw}
.v-ba-split .R h5{margin:0;display:flex;align-items:center;gap:1cqw;font-weight:600;font-size:3.1cqw;letter-spacing:-.035em;line-height:1.1;white-space:nowrap}
.v-ba-split .R h5 i{width:3cqw;height:3cqw;flex:none;border-radius:.9cqw;background:conic-gradient(from 200deg,color-mix(in srgb,var(--secondary) 40%,#ffd27a),var(--secondary),#ffffff,color-mix(in srgb,var(--secondary) 40%,#ffd27a));box-shadow:0 0 1.6cqw rgba(255,255,255,.5)}
.v-ba-split .R .hd p{margin:.8cqw 0 0;font-family:var(--font-mono);font-size:1.2cqw;color:rgba(255,255,255,.78);white-space:nowrap}
.v-ba-split .pz{position:absolute;left:0;top:0;width:50cqw;height:56.25cqw}
.v-ba-split .panel{position:absolute;left:5cqw;top:15.6cqw;width:40cqw;padding:1.8cqw;background:#fff;color:#1c1d20;border-radius:1.6cqw;box-shadow:0 2.4cqw 4cqw color-mix(in srgb,var(--accent) 40%,rgba(0,0,0,.45)),0 .4cqw 1cqw rgba(28,29,32,.3)}
.v-ba-split .chip{display:inline-flex;align-items:center;gap:.5cqw;font-size:1.05cqw;font-weight:500;color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,#fff);padding:.35cqw .9cqw;border-radius:2cqw}
.v-ba-split .prompt{position:relative;margin-top:1.2cqw;padding:1.2cqw 1.3cqw 3.8cqw;background:color-mix(in srgb,var(--accent) 5%,#fff);border:1px solid color-mix(in srgb,var(--accent) 16%,#fff);border-radius:1cqw;font-size:1.3cqw;line-height:1.4;color:#2b2d30}
.v-ba-split .go{position:absolute;right:1cqw;bottom:.9cqw;display:flex;align-items:center;gap:.5cqw;padding:.55cqw 1.2cqw;border-radius:2cqw;background:var(--accent);color:#fff;font-size:1.15cqw;font-weight:500;box-shadow:0 .4cqw 1cqw color-mix(in srgb,var(--accent) 40%,transparent);animation:ba-split-press 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-split .go svg{width:1cqw;height:1cqw}
.v-ba-split .prog{height:.4cqw;margin-top:1.4cqw;border-radius:1cqw;background:color-mix(in srgb,var(--accent) 10%,#fff);overflow:hidden;animation:ba-split-progv 6s linear infinite}
.v-ba-split .prog i{display:block;height:100%;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent));transform-origin:0 50%;animation:ba-split-prog 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-split .res{margin-top:-.4cqw;animation:ba-split-res 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-split .res .t{display:flex;align-items:center;justify-content:space-between;font-weight:600;font-size:1.55cqw;letter-spacing:-.02em}
.v-ba-split .done{display:inline-flex;align-items:center;gap:.4cqw;font-size:1.05cqw;font-weight:500;color:#137a3e;background:#ddf6e6;padding:.3cqw .8cqw;border-radius:2cqw}
.v-ba-split .res small{display:block;margin-top:.3cqw;font-size:1.05cqw;color:#88898d}
.v-ba-split .thumbs{display:grid;grid-template-columns:repeat(4,1fr);gap:.8cqw;margin-top:1.1cqw}
.v-ba-split .thumbs div{height:5.6cqw;border-radius:.6cqw;background:color-mix(in srgb,var(--accent) 4%,#f6f6f8);box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 10%,#eee);position:relative;overflow:hidden}
.v-ba-split .thumbs div::before{content:"";position:absolute;left:.7cqw;top:.7cqw;width:55%;height:.5cqw;border-radius:.3cqw;background:#2b2d30;opacity:.8}
.v-ba-split .thumbs .a::after{content:"";position:absolute;left:.7cqw;right:.7cqw;bottom:.7cqw;height:2.6cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent));clip-path:polygon(0 60%,18% 60%,18% 100%,27% 100%,27% 30%,45% 30%,45% 100%,54% 100%,54% 0,72% 0,72% 100%,81% 100%,81% 45%,100% 45%,100% 100%,0 100%)}
.v-ba-split .thumbs .b::after{content:"";position:absolute;left:.7cqw;right:.7cqw;bottom:.8cqw;height:2.4cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 35%,transparent),transparent);clip-path:polygon(0 80%,25% 55%,50% 65%,75% 25%,100% 10%,100% 100%,0 100%)}
.v-ba-split .thumbs .c::after{content:"";position:absolute;left:30%;top:1.8cqw;width:2.8cqw;height:2.8cqw;border-radius:50%;background:conic-gradient(var(--accent) 0 62%,var(--secondary) 62% 84%,color-mix(in srgb,var(--accent) 15%,#fff) 84%)}
.v-ba-split .thumbs .d::after{content:"";position:absolute;left:.7cqw;right:1.4cqw;top:1.8cqw;height:3cqw;background:repeating-linear-gradient(180deg,color-mix(in srgb,var(--accent) 25%,#ddd) 0 .35cqw,transparent .35cqw .8cqw)}
.v-ba-split .cursor{position:absolute;left:0;top:0;width:2.6cqw;height:2.6cqw;filter:drop-shadow(0 .3cqw .5cqw rgba(0,0,0,.35));animation:ba-split-cur 6s linear infinite}
.v-ba-split .cursor svg{width:100%;height:100%}
.v-ba-split .vs{position:absolute;left:calc(50cqw - 2.7cqw);top:calc(50% - 2.7cqw);width:5.4cqw;height:5.4cqw;border-radius:50%;background:var(--ink);color:var(--paper);display:grid;place-items:center;font-family:var(--font-display);font-style:italic;font-size:2.3cqw;box-shadow:0 0 0 .5cqw rgba(255,255,255,.55),0 .8cqw 2cqw rgba(0,0,0,.3);animation:ba-split-vs 6s cubic-bezier(.34,1.56,.64,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-ba-split .L{width:100%;height:47cqh}
  .v-ba-split .L .hd{left:8cqw;right:8cqw;top:7cqh}
  .v-ba-split .L h5{font-size:12cqw}
  .v-ba-split .when{font-size:3.6cqw;gap:2cqw;margin-top:1.4cqh}
  .v-ba-split .reel{height:5.4cqw}
  .v-ba-split .reel div{line-height:5.4cqw;animation-name:ba-split-whenv}
  .v-ba-split .clock{width:13cqw;height:13cqw;box-shadow:inset 0 0 0 .7cqw var(--ink),0 .8cqw 2cqw rgba(60,50,30,.15)}
  .v-ba-split .clock i{left:calc(50% - .4cqw);width:.8cqw}
  .v-ba-split .clock .mh{height:4.8cqw}
  .v-ba-split .clock .hh{height:3.2cqw}
  .v-ba-split .stack{zoom:1.6;left:7.25cqw;top:.85cqw}
  .v-ba-split .R{left:0;top:47cqh;width:100%;height:53cqh}
  .v-ba-split[data-backdrop="off"] .R{left:3cqw;width:94cqw;top:48cqh;bottom:2cqh;height:auto;border-radius:5cqw}
  .v-ba-split .R .glow{left:10cqw;top:20cqh;width:80cqw;height:60cqw}
  .v-ba-split .R .hd{position:static}
  .v-ba-split .R h5{position:absolute;left:8cqw;top:5cqh;font-size:8.4cqw;gap:3cqw}
  .v-ba-split .R h5 i{width:8cqw;height:8cqw;border-radius:2.4cqw}
  .v-ba-split .R .hd p{position:absolute;left:8cqw;right:8cqw;bottom:6cqh;margin:0;font-size:5.6cqw;line-height:1.3;white-space:normal;text-align:center;color:rgba(255,255,255,.92)}
  .v-ba-split .pz{zoom:1.95;left:-.5cqw;top:-3.5cqw}
  .v-ba-split .vs{left:79cqw;top:calc(47cqh - 7cqw);width:14cqw;height:14cqw;font-size:6cqw;box-shadow:0 0 0 1.4cqw rgba(255,255,255,.55),0 2cqw 4cqw rgba(0,0,0,.3)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-ba-split .L{width:100%;height:48cqh}
  .v-ba-split .L .hd{left:7cqw;right:7cqw;top:5cqh}
  .v-ba-split .L h5{font-size:6.4cqw}
  .v-ba-split .when{font-size:1.8cqw;gap:1cqw}
  .v-ba-split .reel{height:2.7cqw}
  .v-ba-split .reel div{line-height:2.7cqw;animation-name:ba-split-when1}
  .v-ba-split .clock{width:7cqw;height:7cqw;box-shadow:inset 0 0 0 .4cqw var(--ink),0 .5cqw 1.2cqw rgba(60,50,30,.15)}
  .v-ba-split .clock i{left:calc(50% - .22cqw);width:.44cqw}
  .v-ba-split .clock .mh{height:2.6cqw}
  .v-ba-split .clock .hh{height:1.7cqw}
  .v-ba-split .stack{zoom:1;left:26cqw;top:-3.4cqw}
  .v-ba-split .R{left:0;top:48cqh;width:100%;height:52cqh}
  .v-ba-split[data-backdrop="off"] .R{left:2cqw;width:96cqw;top:49cqh;bottom:2cqh;height:auto;border-radius:3cqw}
  .v-ba-split .R .glow{left:30cqw;top:10cqh;width:50cqw;height:40cqw}
  .v-ba-split .R .hd{left:7cqw;right:7cqw;top:4cqh;display:flex;align-items:center;justify-content:space-between}
  .v-ba-split .R h5{font-size:4.2cqw;gap:1.4cqw}
  .v-ba-split .R h5 i{width:4cqw;height:4cqw;border-radius:1.2cqw}
  .v-ba-split .R .hd p{margin:0;font-size:2cqw}
  .v-ba-split .pz{zoom:1.32;left:12.4cqw;top:-8.4cqw}
  .v-ba-split .vs{left:82cqw;top:calc(48cqh - 4.2cqw);width:8.4cqw;height:8.4cqw;font-size:3.6cqw}
}
@keyframes ba-split-when{0%,9%{transform:translateY(0)}11%,16%{transform:translateY(-1.8cqw)}18%,23%{transform:translateY(-3.6cqw)}25%,30%{transform:translateY(-5.4cqw)}32%,37%{transform:translateY(-7.2cqw)}39%,100%{transform:translateY(-9cqw)}}
@keyframes ba-split-whenv{0%,9%{transform:translateY(0)}11%,16%{transform:translateY(-5.4cqw)}18%,23%{transform:translateY(-10.8cqw)}25%,30%{transform:translateY(-16.2cqw)}32%,37%{transform:translateY(-21.6cqw)}39%,100%{transform:translateY(-27cqw)}}
@keyframes ba-split-when1{0%,9%{transform:translateY(0)}11%,16%{transform:translateY(-2.7cqw)}18%,23%{transform:translateY(-5.4cqw)}25%,30%{transform:translateY(-8.1cqw)}32%,37%{transform:translateY(-10.8cqw)}39%,100%{transform:translateY(-13.5cqw)}}
@keyframes ba-split-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes ba-split-d1{0%,3%{transform:translateY(-30cqw);opacity:0;animation-timing-function:cubic-bezier(.3,1.35,.55,1)}4%{opacity:1}9%,100%{transform:translateY(0);opacity:1}}
@keyframes ba-split-d2{0%,10%{transform:translateY(-30cqw);opacity:0;animation-timing-function:cubic-bezier(.3,1.35,.55,1)}11%{opacity:1}16%,100%{transform:translateY(0);opacity:1}}
@keyframes ba-split-d3{0%,17%{transform:translateY(-30cqw);opacity:0;animation-timing-function:cubic-bezier(.3,1.35,.55,1)}18%{opacity:1}23%,100%{transform:translateY(0);opacity:1}}
@keyframes ba-split-d4{0%,24%{transform:translateY(-30cqw);opacity:0;animation-timing-function:cubic-bezier(.3,1.35,.55,1)}25%{opacity:1}30%,100%{transform:translateY(0);opacity:1}}
@keyframes ba-split-d5{0%,31%{transform:translateY(-30cqw);opacity:0;animation-timing-function:cubic-bezier(.3,1.35,.55,1)}32%{opacity:1}37%,100%{transform:translateY(0);opacity:1}}
@keyframes ba-split-d6{0%,38%{transform:translateY(-30cqw);opacity:0;animation-timing-function:cubic-bezier(.3,1.35,.55,1)}39%{opacity:1}44%,100%{transform:translateY(0);opacity:1}}
@keyframes ba-split-glow{0%,30%{transform:scale(.8);opacity:.4}42%,100%{transform:scale(1.1);opacity:1}}
@keyframes ba-split-press{0%,22%{transform:scale(1)}23.5%{transform:scale(.9)}27%,100%{transform:scale(1)}}
@keyframes ba-split-progv{0%,23%{opacity:0}25%,34%{opacity:1}37%,100%{opacity:0}}
@keyframes ba-split-prog{0%,24%{transform:scaleX(0)}34%,100%{transform:scaleX(1)}}
@keyframes ba-split-res{0%,34%{transform:translateY(1.2cqw);opacity:0;filter:blur(.4cqw)}42%,100%{transform:translateY(0);opacity:1;filter:blur(0)}}
@keyframes ba-split-cur{0%,8%{transform:translate(48cqw,58cqw) scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}21%{transform:translate(39.2cqw,28.6cqw) scale(1)}23%{transform:translate(39.2cqw,28.6cqw) scale(.82)}25%{transform:translate(39.2cqw,28.6cqw) scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1)}40%,100%{transform:translate(44cqw,49cqw) scale(1)}}
@keyframes ba-split-vs{0%{transform:scale(.4);opacity:0}8%,100%{transform:scale(1);opacity:1}}
`,
};

export const baChecklist: SceneSpec = {
  id: "ba-checklist",
  slug: "mg-ba-checklist",
  name: "Checklist Done In One",
  kind: "scene",
  job: "process",
  language: "editorial",
  mechanic: "checklist-strike-collapse-to-done",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#1D1A12", accent: "#16A34A", secondary: "#F6B400", paper: "#FFD84A" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["before-after", "checklist", "automation"],
  fields: [
    { key: "list", label: "List title", default: "This week", maxChars: 18, role: "kicker" },
    { key: "done", label: "Done headline", default: "All 6 done.", maxChars: 22, role: "headline" },
    { key: "sub", label: "Done line", default: "Lumen handled them while you slept.", maxChars: 40, role: "body" },
    { key: "saved", label: "Time saved", default: "−3 h 40 min", maxChars: 14, role: "value" },
  ],
  html: `<div class="list">
  <div class="paper"></div>
  <div class="row r1" style="top:14.6cqw;--dy:8.9"><i class="cb"></i><span class="tx">Chase invoices in 4 inboxes</span><small>Mon</small></div>
  <div class="row r2" style="top:19.8cqw;--dy:3.7"><i class="cb"></i><span class="tx">Update the roadmap doc</span><small>Mon</small></div>
  <div class="row r3" style="top:25cqw;--dy:-1.5"><i class="cb"></i><span class="tx">Copy metrics into the deck</span><small>Tue</small></div>
  <div class="row r4" style="top:30.2cqw;--dy:-6.7"><i class="cb"></i><span class="tx">Triage 37 support tickets</span><small>Wed</small></div>
  <div class="row r5" style="top:35.4cqw;--dy:-11.9"><i class="cb"></i><span class="tx">Write the weekly update</span><small>Thu</small></div>
  <div class="row r6" style="top:40.6cqw;--dy:-17.1"><i class="cb"></i><span class="tx">Schedule the team sync</span><small>Fri</small></div>
</div>
<div class="hd"><h5 data-21st-slot="list">{{list}}</h5><span class="bdg"><b>6 to do</b><b>0 left</b></span></div>
<div class="note">every. single.<br>week.<svg viewBox="0 0 70 50" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M60 6C48 22 30 34 8 40M8 40l9-9M8 40l12 3"/></svg></div>
<div class="done">
  <div class="ok"><svg viewBox="0 0 40 40"><path d="M12 20.5l5.5 5.5L28.5 15" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
  <div class="dt"><h5 data-21st-slot="done">{{done}}</h5><p data-21st-slot="sub">{{sub}}</p></div>
</div>
<em class="saved" data-21st-slot="saved">{{saved}}</em>
<div class="chips"><span>invoices</span><span>roadmap</span><span>metrics</span><span>tickets</span><span>update</span><span>sync</span></div>`,
  css: `
.v-ba-checklist{color:var(--ink);font-family:var(--font-body)}
.v-ba-checklist[data-backdrop="on"]{background:radial-gradient(90% 90% at 25% 15%,color-mix(in srgb,var(--paper) 45%,#fff) 0%,var(--paper) 45%,var(--secondary) 100%)}
.v-ba-checklist .list{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;color:#1d1a12}
.v-ba-checklist .paper{position:absolute;left:27cqw;top:6.5cqw;width:46cqw;height:43cqw;border-radius:1.6cqw;background:color-mix(in srgb,var(--paper) 7%,#fff);box-shadow:0 1.8cqw 3.6cqw color-mix(in srgb,var(--secondary) 45%,rgba(0,0,0,.25)),0 .25cqw .6cqw rgba(0,0,0,.12);transform-origin:50% 50%;animation:ba-checklist-paper 6s linear infinite}
.v-ba-checklist .hd{position:absolute;left:30cqw;top:9.2cqw;width:40cqw;display:flex;align-items:center;justify-content:space-between;padding-bottom:1.2cqw;border-bottom:1px solid color-mix(in srgb,var(--ink) 10%,transparent);animation:ba-checklist-hdl 6s linear infinite}
.v-ba-checklist .hd h5{margin:0;font-family:var(--font-display);font-weight:700;font-size:2.5cqw;letter-spacing:-.03em;line-height:1.1;white-space:nowrap}
.v-ba-checklist .bdg{position:relative;display:grid;font-size:1.1cqw;font-weight:500;background:var(--ink);color:var(--paper);padding:.35cqw .9cqw;border-radius:2cqw;white-space:nowrap}
.v-ba-checklist .bdg b{grid-area:1/1;font-weight:500;text-align:center}
.v-ba-checklist .bdg b:first-child{animation:ba-checklist-b1 6s linear infinite}
.v-ba-checklist .bdg b:last-child{animation:ba-checklist-b2 6s linear infinite}
.v-ba-checklist .row{position:absolute;left:30cqw;width:40cqw;height:5.2cqw;display:flex;align-items:center;gap:1.2cqw;font-size:1.6cqw;font-weight:500;border-bottom:1px dashed rgba(29,26,18,.09);animation:ba-checklist-fold 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-checklist .row small{margin-left:auto;font-size:1.05cqw;font-weight:400;color:#8d897e;font-family:var(--font-mono)}
.v-ba-checklist .cb{position:relative;width:2cqw;height:2cqw;flex:none;border-radius:.45cqw;box-shadow:inset 0 0 0 .2cqw #1d1a12;overflow:hidden}
.v-ba-checklist .cb::after{content:"";position:absolute;inset:0;background:#1d1a12 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5 10.5l3.2 3.2L15 6.5' fill='none' stroke='%23fff' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/80% no-repeat;transform:scaleX(0);transform-origin:0 50%;rotate:1.2deg}
.v-ba-checklist .tx{position:relative;white-space:nowrap}
.v-ba-checklist .tx::before{content:"";position:absolute;inset:-.2cqw -.3cqw;background:rgba(255,255,255,.55);transform:scaleX(0);transform-origin:0 50%;rotate:1.2deg}
.v-ba-checklist .tx::after{content:"";position:absolute;left:-.4cqw;right:-.4cqw;top:52%;height:.32cqw;border-radius:.3cqw;background:#1d1a12;transform:scaleX(0) rotate(-1.2deg);transform-origin:0 50%}
.v-ba-checklist .r1 .cb::after,.v-ba-checklist .r1 .tx::before,.v-ba-checklist .r1 .tx::after{animation:ba-checklist-s1 6s linear infinite}
.v-ba-checklist .r2 .cb::after,.v-ba-checklist .r2 .tx::before,.v-ba-checklist .r2 .tx::after{animation:ba-checklist-s2 6s linear infinite}
.v-ba-checklist .r3 .cb::after,.v-ba-checklist .r3 .tx::before,.v-ba-checklist .r3 .tx::after{animation:ba-checklist-s3 6s linear infinite}
.v-ba-checklist .r4 .cb::after,.v-ba-checklist .r4 .tx::before,.v-ba-checklist .r4 .tx::after{animation:ba-checklist-s4 6s linear infinite}
.v-ba-checklist .r5 .cb::after,.v-ba-checklist .r5 .tx::before,.v-ba-checklist .r5 .tx::after{animation:ba-checklist-s5 6s linear infinite}
.v-ba-checklist .r6 .cb::after,.v-ba-checklist .r6 .tx::before,.v-ba-checklist .r6 .tx::after{animation:ba-checklist-s6 6s linear infinite}
.v-ba-checklist .note{position:absolute;left:74.5cqw;top:7.5cqw;font-family:var(--font-display);font-style:italic;font-weight:500;font-size:2.2cqw;line-height:.95;color:color-mix(in srgb,var(--ink) 80%,var(--secondary));transform:rotate(7deg);animation:ba-checklist-note 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-checklist .note svg{display:block;width:7cqw;height:5cqw;margin:.4cqw 0 0 -3cqw}
.v-ba-checklist .done{position:absolute;left:24cqw;top:18.6cqw;width:52cqw;height:14cqw;display:flex;align-items:center;gap:2cqw;padding:0 15cqw 0 2.8cqw;box-sizing:border-box;border-radius:1.6cqw;background:color-mix(in srgb,var(--paper) 7%,#fff);color:#1d1a12;box-shadow:0 1.8cqw 3.6cqw color-mix(in srgb,var(--secondary) 45%,rgba(0,0,0,.25)),0 .25cqw .6cqw rgba(0,0,0,.12);animation:ba-checklist-done 6s linear infinite}
.v-ba-checklist .ok{position:relative;width:7.2cqw;height:7.2cqw;flex:none;border-radius:50%;background:var(--accent);box-shadow:0 .6cqw 1.6cqw color-mix(in srgb,var(--accent) 40%,transparent)}
.v-ba-checklist .ok svg{position:absolute;inset:0;width:100%;height:100%;clip-path:inset(0 100% 0 0);animation:ba-checklist-tick 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-checklist .ok::after{content:"";position:absolute;inset:0;border-radius:50%;box-shadow:0 0 0 .3cqw var(--accent);animation:ba-checklist-ring 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-checklist .dt{min-width:0}
.v-ba-checklist .done h5{margin:0;font-family:var(--font-display);font-weight:700;font-size:3.3cqw;letter-spacing:-.035em;line-height:1.05}
.v-ba-checklist .done p{margin:.45cqw 0 0;font-size:1.45cqw;line-height:1.25;color:#6b675d}
.v-ba-checklist .saved{position:absolute;right:26.8cqw;top:24.3cqw;font-style:normal;font-family:var(--font-mono);font-size:1.25cqw;font-weight:500;color:color-mix(in srgb,var(--accent) 75%,#000);background:color-mix(in srgb,var(--accent) 14%,#fff);padding:.45cqw .9cqw;border-radius:2cqw;white-space:nowrap;animation:ba-checklist-done 6s linear infinite}
.v-ba-checklist .chips{position:absolute;left:24cqw;width:52cqw;top:35.2cqw;display:flex;flex-wrap:wrap;justify-content:center;gap:.8cqw;animation:ba-checklist-chips 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-checklist .chips span{display:flex;align-items:center;gap:.4cqw;font-size:1.15cqw;font-weight:500;color:#2e2b24;background:rgba(255,255,255,.82);padding:.4cqw .8cqw;border-radius:2cqw;box-shadow:0 0 0 1px rgba(29,26,18,.12)}
.v-ba-checklist .chips span::before{content:"✓";color:var(--accent);font-weight:700}
@container (max-aspect-ratio: 4/5){
  .v-ba-checklist .list{zoom:2;left:-25cqw;top:4.5cqw}
  .v-ba-checklist .paper{top:11.5cqw;height:38cqw}
  .v-ba-checklist .hd{left:8cqw;width:84cqw;top:8cqh;padding-bottom:2cqw;border-bottom:none}
  .v-ba-checklist .hd h5{font-size:9cqw}
  .v-ba-checklist .bdg{font-size:4cqw;padding:1cqw 2.8cqw;border-radius:6cqw}
  .v-ba-checklist .note{display:none}
  .v-ba-checklist .done{left:6cqw;width:88cqw;top:28cqh;height:auto;padding:6cqw;flex-direction:column;align-items:flex-start;gap:4cqw;border-radius:4.5cqw}
  .v-ba-checklist .ok{width:18cqw;height:18cqw}
  .v-ba-checklist .ok::after{box-shadow:0 0 0 .8cqw var(--accent)}
  .v-ba-checklist .done h5{font-size:12cqw}
  .v-ba-checklist .done p{margin-top:1.6cqw;font-size:5.6cqw}
  .v-ba-checklist .chips{left:6cqw;width:88cqw;top:66cqh;gap:2cqw}
  .v-ba-checklist .chips span{font-size:3.8cqw;padding:1.2cqw 2.4cqw;gap:1.2cqw;border-radius:6cqw}
  .v-ba-checklist .saved{right:0;left:0;margin:0 auto;width:fit-content;top:auto;bottom:8cqh;font-size:8cqw;padding:2cqw 4.4cqw;border-radius:8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-ba-checklist .list{zoom:1.6;left:-18.75cqw;top:-.875cqw}
  .v-ba-checklist .paper{top:11.5cqw;height:38cqw}
  .v-ba-checklist .hd{left:13.2cqw;width:73.6cqw;top:7cqw;padding-bottom:1cqw;border-bottom:none}
  .v-ba-checklist .hd h5{font-size:5cqw}
  .v-ba-checklist .bdg{font-size:2.2cqw;padding:.6cqw 1.6cqw;border-radius:4cqw}
  .v-ba-checklist .note{display:none}
  .v-ba-checklist .done{left:10cqw;width:80cqw;top:28cqw;height:26cqw;padding:0 4cqw;gap:3.4cqw;border-radius:3cqw}
  .v-ba-checklist .ok{width:12cqw;height:12cqw}
  .v-ba-checklist .ok::after{box-shadow:0 0 0 .5cqw var(--accent)}
  .v-ba-checklist .done h5{font-size:6.2cqw}
  .v-ba-checklist .done p{margin-top:1cqw;font-size:2.8cqw}
  .v-ba-checklist .chips{left:10cqw;width:80cqw;top:59cqw;gap:1.2cqw}
  .v-ba-checklist .chips span{font-size:2.1cqw;padding:.7cqw 1.4cqw;gap:.7cqw;border-radius:4cqw}
  .v-ba-checklist .saved{right:0;left:0;margin:0 auto;width:fit-content;top:auto;bottom:9cqw;font-size:4.2cqw;padding:1.2cqw 2.6cqw;border-radius:5cqw}
}
@keyframes ba-checklist-paper{0%,35%{transform:translateY(0) scaleY(1);opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}44%{transform:translateY(-2.75cqw) scaleY(.33);opacity:1}47%,100%{transform:translateY(-2.75cqw) scaleY(.33);opacity:0}}
@keyframes ba-checklist-hdl{0%,36%{border-bottom-color:rgba(29,26,18,.1);color:#1d1a12}42%,100%{border-bottom-color:transparent;color:var(--ink)}}
@keyframes ba-checklist-b1{0%,40%{opacity:1}44%,100%{opacity:0}}
@keyframes ba-checklist-b2{0%,42%{opacity:0}46%,100%{opacity:1}}
@keyframes ba-checklist-fold{0%,35%{transform:translateY(0) scaleY(1);opacity:1}43%,100%{transform:translateY(calc(var(--dy) * 1cqw)) scaleY(.3);opacity:0}}
@keyframes ba-checklist-s1{0%,6%{transform:scaleX(0) rotate(-1.2deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}10%,100%{transform:scaleX(1) rotate(-1.2deg)}}
@keyframes ba-checklist-s2{0%,11%{transform:scaleX(0) rotate(-1.2deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}15%,100%{transform:scaleX(1) rotate(-1.2deg)}}
@keyframes ba-checklist-s3{0%,16%{transform:scaleX(0) rotate(-1.2deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}20%,100%{transform:scaleX(1) rotate(-1.2deg)}}
@keyframes ba-checklist-s4{0%,21%{transform:scaleX(0) rotate(-1.2deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}25%,100%{transform:scaleX(1) rotate(-1.2deg)}}
@keyframes ba-checklist-s5{0%,26%{transform:scaleX(0) rotate(-1.2deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}30%,100%{transform:scaleX(1) rotate(-1.2deg)}}
@keyframes ba-checklist-s6{0%,31%{transform:scaleX(0) rotate(-1.2deg);animation-timing-function:cubic-bezier(.65,0,.35,1)}35%,100%{transform:scaleX(1) rotate(-1.2deg)}}
@keyframes ba-checklist-note{0%,4%{opacity:0;transform:rotate(7deg) translateY(1cqw)}10%,33%{opacity:1;transform:rotate(7deg) translateY(0)}38%,100%{opacity:0;transform:rotate(7deg) translateY(-1cqw)}}
@keyframes ba-checklist-done{0%,42%{opacity:0;transform:scale(.97)}46%{opacity:1;transform:scale(1.015);animation-timing-function:cubic-bezier(.2,.8,.2,1)}50%,100%{opacity:1;transform:scale(1)}}
@keyframes ba-checklist-tick{0%,44%{clip-path:inset(0 100% 0 0)}49%,100%{clip-path:inset(0 0 0 0)}}
@keyframes ba-checklist-ring{0%,46%{transform:scale(1);opacity:0}47%{opacity:.9}56%,100%{transform:scale(1.45);opacity:0}}
@keyframes ba-checklist-chips{0%,43%{opacity:0;transform:translateY(-1.6cqw)}49%,100%{opacity:1;transform:translateY(0)}}
`,
};

export const baTimeBars: SceneSpec = {
  id: "ba-time-bars",
  slug: "mg-ba-time-bars",
  name: "Time Race Bars",
  kind: "scene",
  job: "data",
  language: "product-ui",
  mechanic: "race-bars-time-counters",
  energy: "punchy",
  settle: 3.2,
  colors: { ink: "#F4F4F5", accent: "#C8FF3D", secondary: "#5CFFB0", paper: "#0A0A0B" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["before-after", "comparison", "speed"],
  fields: [
    { key: "task", label: "Task", default: "Monthly board report", maxChars: 28, role: "kicker" },
    { key: "oldLabel", label: "Old way label", default: "By hand", maxChars: 16, role: "label" },
    { key: "newLabel", label: "New way label", default: "With Lumen", maxChars: 16, role: "label" },
    { key: "result", label: "Result", default: "50× faster", maxChars: 14, role: "headline" },
  ],
  html: `<div class="top"><span><b data-21st-slot="task">{{task}}</b><em> · start to finish</em></span><span class="meta">same data · same team</span></div>
<div class="lbl la"><p><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="7.5"/><path d="M10 5.5V10l3 2"/></svg><span data-21st-slot="oldLabel">{{oldLabel}}</span></p><div class="val"><div>0 min<br>18 min<br>42 min<br>1 h 05 min<br>1 h 37 min<br>2 h 10 min<br>2 h 48 min<br>3 h 20 min</div></div></div>
<div class="trk ta"><div class="fill"><i></i></div><span class="tick">✓ finally</span></div>
<div class="lbl lb"><p><i></i><span data-21st-slot="newLabel">{{newLabel}}</span></p><div class="val"><div>0 min<br>1 min<br>2 min<br>3 min<br>4 min</div></div></div>
<div class="trk tb"><div class="fill"></div><div class="flash"></div><span class="tick">✓ Done</span></div>
<div class="big" data-21st-slot="result">{{result}}</div>`,
  css: `
.v-ba-time-bars{color:var(--ink);font-family:var(--font-body)}
.v-ba-time-bars[data-backdrop="on"]{background:radial-gradient(70% 80% at 85% 85%,color-mix(in srgb,var(--accent) 10%,transparent) 0%,transparent 60%),linear-gradient(90deg,color-mix(in srgb,var(--ink) 4%,transparent) 1px,transparent 1px) 6cqw 0/11cqw 100%,var(--paper)}
.v-ba-time-bars .top{position:absolute;left:6cqw;right:6cqw;top:4.4cqw;display:flex;justify-content:space-between;align-items:center;font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-ba-time-bars .top b{font-weight:500;color:color-mix(in srgb,var(--ink) 92%,transparent)}
.v-ba-time-bars .top em{font-style:normal}
.v-ba-time-bars .top .meta{font-family:var(--font-mono);font-size:1.1cqw}
.v-ba-time-bars .lbl{position:absolute;left:6cqw;right:6cqw;display:flex;align-items:flex-end;justify-content:space-between}
.v-ba-time-bars .lbl p{margin:0;display:flex;align-items:center;gap:.8cqw;font-size:1.55cqw;font-weight:500;padding-bottom:.6cqw;white-space:nowrap}
.v-ba-time-bars .la{top:10.2cqw}
.v-ba-time-bars .lb{top:27.4cqw}
.v-ba-time-bars .la p{color:color-mix(in srgb,var(--ink) 65%,transparent)}
.v-ba-time-bars .la p svg{width:1.8cqw;height:1.8cqw;flex:none}
.v-ba-time-bars .lb p i{width:1.9cqw;height:1.9cqw;flex:none;border-radius:.55cqw;background:conic-gradient(from 200deg,var(--accent),var(--secondary),var(--accent));box-shadow:0 0 1cqw color-mix(in srgb,var(--accent) 50%,transparent)}
.v-ba-time-bars .val{height:1.28em;overflow:hidden;padding:0 .3em;margin-right:-.3em;font-family:var(--font-display);font-weight:600;font-size:3.6cqw;letter-spacing:-.04em;text-align:right}
.v-ba-time-bars .val div{line-height:1.28em;white-space:nowrap}
.v-ba-time-bars .la .val{color:color-mix(in srgb,var(--ink) 82%,transparent)}
.v-ba-time-bars .lb .val{color:var(--accent);text-shadow:0 0 2cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-ba-time-bars .la .val div{animation:ba-time-bars-ra 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-time-bars .lb .val div{animation:ba-time-bars-rb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-time-bars .trk{position:absolute;left:6cqw;width:88cqw;height:5.2cqw;border-radius:1.3cqw;background:color-mix(in srgb,var(--ink) 7%,var(--paper));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 6%,transparent);overflow:hidden}
.v-ba-time-bars .ta{top:16cqw}
.v-ba-time-bars .tb{top:33.2cqw}
.v-ba-time-bars .fill{position:absolute;inset:0;border-radius:inherit;transform-origin:0 50%}
.v-ba-time-bars .ta .fill{background:repeating-linear-gradient(-45deg,color-mix(in srgb,var(--ink) 24%,var(--paper)) 0 1cqw,color-mix(in srgb,var(--ink) 18%,var(--paper)) 1cqw 2cqw);animation:ba-time-bars-fa 6s linear infinite}
.v-ba-time-bars .ta .fill i{position:absolute;inset:0;background:repeating-linear-gradient(-45deg,rgba(255,255,255,.05) 0 1cqw,transparent 1cqw 2cqw) 0 0/2.83cqw 100%;animation:ba-time-bars-stripe 1s linear infinite}
.v-ba-time-bars .tb .fill{background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 65%,var(--secondary)),var(--accent) 60%,color-mix(in srgb,var(--accent) 55%,#fff));box-shadow:0 0 2.4cqw color-mix(in srgb,var(--accent) 50%,transparent);animation:ba-time-bars-fb 6s linear infinite}
.v-ba-time-bars .flash{position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.85) 50%,rgba(255,255,255,0));width:30%;animation:ba-time-bars-flash 6s cubic-bezier(.4,0,.2,1) infinite}
.v-ba-time-bars .tick{position:absolute;right:1.2cqw;top:calc(50% - 1.3cqw);height:2.6cqw;display:flex;align-items:center;gap:.4cqw;padding:0 .9cqw;border-radius:2cqw;background:var(--paper);color:var(--accent);font-size:1.15cqw;font-weight:600;white-space:nowrap;animation:ba-time-bars-tick 6s cubic-bezier(.34,1.56,.64,1) infinite}
.v-ba-time-bars .ta .tick{background:color-mix(in srgb,var(--ink) 12%,var(--paper));color:color-mix(in srgb,var(--ink) 65%,transparent);animation-name:ba-time-bars-ticka}
.v-ba-time-bars .big{position:absolute;left:6cqw;top:43.4cqw;font-family:var(--font-display);font-weight:800;font-size:5cqw;letter-spacing:-.05em;color:var(--accent);line-height:1;padding-bottom:.08em;font-size:6.2cqw;top:42.6cqw;animation:ba-time-bars-big 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-ba-time-bars[data-backdrop="on"]{background:radial-gradient(90% 60% at 80% 90%,color-mix(in srgb,var(--accent) 12%,transparent) 0%,transparent 60%),linear-gradient(90deg,color-mix(in srgb,var(--ink) 4%,transparent) 1px,transparent 1px) 8cqw 0/21cqw 100%,var(--paper)}
  .v-ba-time-bars .top{left:8cqw;right:8cqw;top:8cqh;flex-direction:column;align-items:flex-start;gap:1.6cqh;font-size:5.6cqw}
  .v-ba-time-bars .top span:first-child{display:flex;flex-direction:column}
  .v-ba-time-bars .top em{display:none}
  .v-ba-time-bars .top .meta{display:none}
  .v-ba-time-bars .lbl{left:8cqw;right:8cqw}
  .v-ba-time-bars .lbl p{font-size:5.6cqw;gap:2.4cqw;padding-bottom:1.6cqw}
  .v-ba-time-bars .la{top:24cqh}
  .v-ba-time-bars .lb{top:45cqh}
  .v-ba-time-bars .la p svg{width:6cqw;height:6cqw}
  .v-ba-time-bars .lb p i{width:6cqw;height:6cqw;border-radius:1.8cqw}
  .v-ba-time-bars .val{font-size:8cqw}
  .v-ba-time-bars .trk{left:8cqw;width:84cqw;height:12cqw;border-radius:3.6cqw}
  .v-ba-time-bars .ta{top:31.4cqh}
  .v-ba-time-bars .tb{top:52.4cqh}
  .v-ba-time-bars .tick{right:2.4cqw;top:calc(50% - 3.4cqw);height:6.8cqw;padding:0 2.6cqw;gap:1cqw;font-size:3.8cqw;border-radius:5cqw}
  .v-ba-time-bars .big{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:21cqw;line-height:.92}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-ba-time-bars .top{left:7cqw;right:7cqw;top:7cqw;font-size:2.6cqw}
  .v-ba-time-bars .top em{display:none}
  .v-ba-time-bars .top .meta{font-size:2cqw}
  .v-ba-time-bars .lbl{left:7cqw;right:7cqw}
  .v-ba-time-bars .lbl p{font-size:3cqw;gap:1.4cqw;padding-bottom:1cqw}
  .v-ba-time-bars .la{top:17cqw}
  .v-ba-time-bars .lb{top:41cqw}
  .v-ba-time-bars .la p svg{width:3.2cqw;height:3.2cqw}
  .v-ba-time-bars .lb p i{width:3.2cqw;height:3.2cqw;border-radius:1cqw}
  .v-ba-time-bars .val{font-size:5.6cqw}
  .v-ba-time-bars .trk{left:7cqw;width:86cqw;height:9cqw;border-radius:2.4cqw}
  .v-ba-time-bars .ta{top:26cqw}
  .v-ba-time-bars .tb{top:50cqw}
  .v-ba-time-bars .tick{right:1.8cqw;top:calc(50% - 2.3cqw);height:4.6cqw;padding:0 1.6cqw;gap:.6cqw;font-size:2.2cqw;border-radius:3cqw}
  .v-ba-time-bars .big{left:7cqw;top:auto;bottom:8cqw;font-size:13cqw}
}
@keyframes ba-time-bars-ra{0%,10.4%{transform:translateY(0)}11%,16.4%{transform:translateY(-1.28em)}17%,21.4%{transform:translateY(-2.56em)}22%,27.4%{transform:translateY(-3.84em)}28%,32.4%{transform:translateY(-5.12em)}33%,38.4%{transform:translateY(-6.4em)}39%,45.4%{transform:translateY(-7.68em)}46%,100%{transform:translateY(-8.96em)}}
@keyframes ba-time-bars-rb{0%,8.4%{transform:translateY(0)}9%,11.4%{transform:translateY(-1.28em)}12%,14.4%{transform:translateY(-2.56em)}15%,17.4%{transform:translateY(-3.84em)}18%,100%{transform:translateY(-5.12em)}}
@keyframes ba-time-bars-stripe{0%{background-position:0 0}100%{background-position:2.83cqw 0}}
@keyframes ba-time-bars-fa{0%,6%{transform:scaleX(0);animation-timing-function:cubic-bezier(.4,0,.6,1)}11%{transform:scaleX(.09);animation-timing-function:linear}14%{transform:scaleX(.12);animation-timing-function:cubic-bezier(.4,0,.6,1)}20%{transform:scaleX(.31);animation-timing-function:linear}24%{transform:scaleX(.34);animation-timing-function:cubic-bezier(.4,0,.6,1)}30%{transform:scaleX(.54);animation-timing-function:linear}34%{transform:scaleX(.57);animation-timing-function:cubic-bezier(.4,0,.6,1)}40%{transform:scaleX(.8);animation-timing-function:linear}42%{transform:scaleX(.83);animation-timing-function:cubic-bezier(.4,0,.6,1)}46%,100%{transform:scaleX(1)}}
@keyframes ba-time-bars-fb{0%,6%{transform:scaleX(0);animation-timing-function:cubic-bezier(.3,0,.1,1)}18%,100%{transform:scaleX(1)}}
@keyframes ba-time-bars-flash{0%,18%{transform:translateX(-110%);opacity:0}19%{opacity:1}26%,100%{transform:translateX(360%);opacity:0}}
@keyframes ba-time-bars-tick{0%,18%{transform:scale(.4);opacity:0}23%,100%{transform:scale(1);opacity:1}}
@keyframes ba-time-bars-ticka{0%,46%{transform:scale(.4);opacity:0}49%,100%{transform:scale(1);opacity:1}}
@keyframes ba-time-bars-big{0%,40%{transform:translateY(2cqw);opacity:0;filter:blur(.5cqw)}48%,100%{transform:translateY(0);opacity:1;filter:blur(0)}}
`,
};

export const baMorph: SceneSpec = {
  id: "ba-morph",
  slug: "mg-ba-morph",
  name: "Legacy Form Morph",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "legacy-form-morph-to-modern",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#141518", accent: "#3D63FF", secondary: "#FFB36B", paper: "#F9F5F1" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["before-after", "redesign", "form"],
  fields: [
    { key: "headline", label: "Form headline", default: "Create your workspace", maxChars: 24, role: "headline" },
    { key: "cta", label: "Button", default: "Create workspace →", maxChars: 22, role: "cta" },
    { key: "caption", label: "Caption", default: "Same fields. New life.", maxChars: 28, role: "caption" },
  ],
  html: `<div class="bgl"></div>
<div class="bgm"></div>
<div class="sc">
  <div class="lo legacy ico ico1"><i></i>forms_old</div>
  <div class="lo legacy ico ico2"><i></i>backup (3)</div>
  <div class="ga" style="--lx:27;--ly:8;--lw:46;--lh:40;--mx:30;--my:4.5;--mw:40;--mh:47"><div class="sk bx w l"></div><div class="sk bx w n"></div></div>
  <div class="lo legacy ttl">Registration Form - Web Explorer</div>
  <div class="lo tbtn"><i></i><i></i><i></i></div>
  <div class="mo logo"><i></i>Lumen</div>
  <div class="ga" style="--lx:28.6;--ly:11.9;--lw:1;--lh:1;--mx:33;--my:11.6;--mw:1.625;--mh:1.625"><div class="sk hdl l">User Registration Form</div><div class="sk hdl n" data-21st-slot="headline">{{headline}}</div></div>
  <div class="mo sub">Start free. No card required.</div>
  <div class="ga" style="--lx:28.6;--ly:16.75;--lw:1;--lh:1;--mx:33;--my:20.3;--mw:1.05;--mh:1.05"><div class="sk lab l">Name:</div><div class="sk lab n">Full name</div></div>
  <div class="ga" style="--lx:37;--ly:16.4;--lw:22;--lh:2.3;--mx:33;--my:22.1;--mw:34;--mh:4.2"><div class="sk bx inp l"></div><div class="sk bx inp n"></div></div>
  <div class="ga" style="--lx:37.5;--ly:16.75;--lw:1;--lh:1;--mx:34.5;--my:23.3;--mw:1.29;--mh:1.29"><div class="sk val l">ada</div><div class="sk val n">Ada Lovelace</div></div>
  <div class="gb" style="--lx:28.6;--ly:19.95;--lw:1;--lh:1;--mx:33;--my:27.6;--mw:1.05;--mh:1.05"><div class="sk lab l">E-mail:</div><div class="sk lab n">Work email</div></div>
  <div class="gb" style="--lx:37;--ly:19.6;--lw:22;--lh:2.3;--mx:33;--my:29.4;--mw:34;--mh:4.2"><div class="sk bx inp l"></div><div class="sk bx inp foc n"></div></div>
  <div class="gb" style="--lx:37.5;--ly:19.95;--lw:1;--lh:1;--mx:34.5;--my:30.6;--mw:1.29;--mh:1.29"><div class="sk val l">ada_l@mailbox.net</div><div class="sk val n care">ada@northwind.co</div></div>
  <div class="lo legacy lbl3">Plan:</div>
  <div class="gb" style="--lx:37;--ly:22.8;--lw:13;--lh:2.3;--mx:33;--my:35.6;--mw:34;--mh:4.2"><div class="sk bx sel l"></div><div class="sk bx sel n"></div></div>
  <div class="mo pill"></div>
  <div class="mo seg seg1">Starter</div>
  <div class="mo seg seg2">Enterprise</div>
  <div class="gb" style="--lx:37.5;--ly:23.15;--lw:1;--lh:1;--mx:46.9;--my:36.75;--mw:1.24;--mh:1.24"><div class="sk val l">Standard</div><div class="sk pt n">Team</div></div>
  <div class="gc" style="--lx:28.6;--ly:26.5;--lw:1.3;--lh:1.3;--mx:33;--my:41.35;--mw:3.4;--mh:1.9"><div class="sk bx cbx l"></div><div class="sk bx cbx n"></div></div>
  <div class="gc" style="--lx:30.4;--ly:26.6;--lw:1;--lh:1;--mx:37.4;--my:41.5;--mw:1.26;--mh:1.26"><div class="sk ct l">Yes! Send me newsletters, offers &amp; partner deals</div><div class="sk ct n">Email me product updates</div></div>
  <div class="gc" style="--lx:28.6;--ly:30;--lw:8;--lh:2.6;--mx:33;--my:45.4;--mw:34;--mh:4.4"><div class="sk bx btn l"></div><div class="sk bx btn n"></div></div>
  <div class="gc" style="--lx:30.6;--ly:30.6;--lw:1;--lh:1;--mx:33;--my:45.4;--mw:1;--mh:1"><div class="sk bt l">Submit</div><div class="sk bt n" data-21st-slot="cta">{{cta}}</div></div>
  <div class="lo legacy bev rst">Reset</div>
  <div class="lo legacy req">* All fields are required!!</div>
  <div class="lo legacy cnt">Visitors: <b>004521</b></div>
  <div class="lo legacy ftr">Best viewed in 800×600 · © 2009</div>
  <div class="lo star"><svg viewBox="0 0 100 100"><path d="M50 4 60 30 88 18 74 44 98 56 70 62 76 92 52 74 30 96 30 66 2 60 26 44 12 18 40 30Z" fill="#ff1f1f" stroke="#ffe600" stroke-width="2"/><text x="50" y="57" text-anchor="middle" font-family="Tahoma,Verdana,sans-serif" font-weight="700" font-size="17" fill="#ffe600">New!</text></svg></div>
</div>
<div class="cap" data-21st-slot="caption">{{caption}}</div>`,
  css: `
.v-ba-morph{color:var(--ink);font-family:var(--font-body)}
.v-ba-morph .bgl{position:absolute;inset:0;background:repeating-conic-gradient(#017776 0 25%,#018281 0 50%) 0 0/.5cqw .5cqw;animation:ba-morph-bgl 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-morph .bgm{position:absolute;inset:0;background:radial-gradient(55% 70% at 12% 12%,color-mix(in srgb,var(--secondary) 40%,transparent) 0%,transparent 70%),radial-gradient(55% 70% at 92% 92%,color-mix(in srgb,var(--accent) 28%,transparent) 0%,transparent 70%),var(--paper);opacity:0;animation:ba-morph-bg 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-morph[data-backdrop="off"] .bgl,.v-ba-morph[data-backdrop="off"] .bgm{display:none}
.v-ba-morph .sc{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:50cqw 28cqw}
.v-ba-morph .sk{position:absolute;left:calc(var(--x) * 1cqw);top:calc(var(--y) * 1cqw);transform-origin:0 0;white-space:nowrap}
.v-ba-morph .bx{width:calc(var(--w) * 1cqw);height:calc(var(--h) * 1cqw)}
.v-ba-morph .l{--x:var(--lx);--y:var(--ly);--w:var(--lw);--h:var(--lh)}
.v-ba-morph .n{--x:var(--mx);--y:var(--my);--w:var(--mw);--h:var(--mh);opacity:0}
.v-ba-morph .ga .l{animation:ba-morph-la 6s linear infinite}
.v-ba-morph .gb .l{animation:ba-morph-lb 6s linear infinite}
.v-ba-morph .gc .l{animation:ba-morph-lc 6s linear infinite}
.v-ba-morph .ga .n{animation:ba-morph-na 6s linear infinite}
.v-ba-morph .gb .n{animation:ba-morph-nb 6s linear infinite}
.v-ba-morph .gc .n{animation:ba-morph-nc 6s linear infinite}
.v-ba-morph .lo{position:absolute;animation:ba-morph-lo 6s cubic-bezier(.65,0,.35,1) infinite}
.v-ba-morph .mo{position:absolute;opacity:0;animation:ba-morph-mo 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-ba-morph .legacy{font-family:Tahoma,Verdana,"Segoe UI",sans-serif;font-size:1.05cqw;color:#000}
.v-ba-morph .bev{background:#c3c3c3;border:.18cqw solid;border-color:#fff #3d3d3d #3d3d3d #fff}
.v-ba-morph .w.l{background:linear-gradient(90deg,#00087a,#1a84d0) 0 0/100% 2.5cqw no-repeat,#c3c3c3;border:.2cqw solid;border-color:#fff #3d3d3d #3d3d3d #fff;box-shadow:.4cqw .4cqw 0 rgba(0,0,0,.35)}
.v-ba-morph .w.n{background:#fff;border-radius:2cqw;box-shadow:0 0 0 1px rgba(20,21,24,.06),0 2.4cqw 5cqw color-mix(in srgb,var(--accent) 18%,rgba(0,0,0,.08)),0 .4cqw 1cqw rgba(0,0,0,.06)}
.v-ba-morph .hdl.l{font:700 1.6cqw "Times New Roman",Times,serif;color:#00157c;text-decoration:underline}
.v-ba-morph .hdl.n{font-family:var(--font-display);font-weight:600;font-size:2.6cqw;letter-spacing:-.035em;color:#141518}
.v-ba-morph .lab.l{font-family:Tahoma,Verdana,sans-serif;font-size:1.05cqw;color:#000}
.v-ba-morph .lab.n{font-size:1.1cqw;font-weight:500;color:#5f5b66}
.v-ba-morph .inp.l{background:#fff;border:.18cqw solid;border-color:#7b7b7b #fff #fff #7b7b7b}
.v-ba-morph .inp.n{background:#fff;border-radius:1cqw;box-shadow:0 0 0 1px #e3e2e5,0 .2cqw .5cqw rgba(0,0,0,.04)}
.v-ba-morph .foc.n{box-shadow:0 0 0 1px var(--accent),0 0 0 .45cqw color-mix(in srgb,var(--accent) 18%,transparent)}
.v-ba-morph .val.l{font-family:Tahoma,Verdana,sans-serif;font-size:1.05cqw;color:#000}
.v-ba-morph .val.n{font-size:1.35cqw;color:#141518}
.v-ba-morph .care::after{content:"";display:inline-block;width:.15cqw;height:1.6cqw;margin-left:.15cqw;vertical-align:-.3cqw;background:var(--accent);animation:ba-morph-caret 1s steps(1) infinite}
.v-ba-morph .sel.l{background:linear-gradient(#c3c3c3,#c3c3c3) right 0 top 0/1.7cqw 100% no-repeat,#fff;border:.18cqw solid;border-color:#7b7b7b #fff #fff #7b7b7b}
.v-ba-morph .sel.n{background:#f3f3f4;border-radius:1cqw}
.v-ba-morph .pt.n{font-size:1.3cqw;font-weight:600;color:#141518}
.v-ba-morph .cbx.l{background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath d='M2 5l2 2 4-4' fill='none' stroke='%23000' stroke-width='1.6'/%3E%3C/svg%3E") center/100% no-repeat;border:.15cqw solid;border-color:#7b7b7b #fff #fff #7b7b7b}
.v-ba-morph .cbx.n{border-radius:2cqw;background:radial-gradient(circle at calc(100% - .95cqw) 50%,#fff 0 .7cqw,rgba(255,255,255,0) .75cqw),linear-gradient(90deg,color-mix(in srgb,var(--accent) 80%,#fff),var(--accent))}
.v-ba-morph .ct.l{font-family:Tahoma,Verdana,sans-serif;font-size:.95cqw;color:#000}
.v-ba-morph .ct.n{font-size:1.2cqw;color:#5f5b66}
.v-ba-morph .btn.l{background:#c3c3c3;border:.2cqw solid;border-color:#fff #3d3d3d #3d3d3d #fff;outline:1px dotted #000;outline-offset:-.6cqw}
.v-ba-morph .btn.n{border-radius:1.1cqw;background:linear-gradient(180deg,#45424c,#141518);box-shadow:0 .8cqw 1.6cqw rgba(20,21,24,.28),inset 0 1px 0 rgba(255,255,255,.12)}
.v-ba-morph .bt.l{font-family:Tahoma,Verdana,sans-serif;font-size:1.05cqw;color:#000}
.v-ba-morph .bt.n{width:34cqw;height:4.4cqw;display:flex;align-items:center;justify-content:center;font-size:1.4cqw;font-weight:600;color:#fff;letter-spacing:-.01em}
.v-ba-morph .ttl{left:27.8cqw;top:8.5cqw;color:#fff;font-weight:700;white-space:nowrap}
.v-ba-morph .tbtn{left:67.4cqw;top:8.6cqw;display:flex;gap:.25cqw}
.v-ba-morph .tbtn i{width:1.55cqw;height:1.35cqw;background:#c3c3c3;border:.15cqw solid;border-color:#fff #3d3d3d #3d3d3d #fff}
.v-ba-morph .rst{left:37.6cqw;top:30cqw;width:7cqw;height:2.6cqw;display:grid;place-items:center}
.v-ba-morph .req{left:28.6cqw;top:34cqw;color:#d00000;font-size:.95cqw}
.v-ba-morph .cnt{left:28.6cqw;top:37cqw;display:flex;align-items:center;gap:.6cqw}
.v-ba-morph .cnt b{font:400 1.2cqw var(--font-mono);background:#000;color:#3aff3a;padding:.1cqw .5cqw;letter-spacing:.15em}
.v-ba-morph .ftr{left:28.6cqw;top:44.4cqw;color:#555;font-size:.9cqw}
.v-ba-morph .lbl3{left:28.6cqw;top:23.15cqw}
.v-ba-morph .star{left:61.5cqw;top:28.6cqw;width:8.4cqw;height:8.4cqw}
.v-ba-morph .star svg{width:100%;height:100%;animation:ba-morph-blink 1s steps(1) infinite}
.v-ba-morph .ico{left:3cqw;display:flex;flex-direction:column;align-items:center;gap:.4cqw;color:#fff;font-family:Tahoma,Verdana,sans-serif;font-size:.95cqw}
.v-ba-morph .ico i{width:3.4cqw;height:2.7cqw;background:linear-gradient(#ffe08a,#e8b931);border:1px solid #6b5200;border-radius:.2cqw .6cqw .2cqw .2cqw}
.v-ba-morph .ico1{top:5cqw}
.v-ba-morph .ico2{top:12.5cqw}
.v-ba-morph .logo{left:33cqw;top:7.6cqw;display:flex;align-items:center;gap:.8cqw;font-weight:600;font-size:1.45cqw;color:#141518}
.v-ba-morph .logo i{width:2.6cqw;height:2.6cqw;border-radius:.8cqw;background:conic-gradient(from 210deg,color-mix(in srgb,var(--accent) 55%,#fff),var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));box-shadow:inset 0 0 0 .55cqw rgba(255,255,255,.35)}
.v-ba-morph .sub{left:33cqw;top:16cqw;font-size:1.3cqw;color:#6f6c75}
.v-ba-morph .pill{left:44.4cqw;top:36cqw;width:11.2cqw;height:3.4cqw;border-radius:.8cqw;background:#fff;box-shadow:0 .2cqw .6cqw rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.04)}
.v-ba-morph .seg{top:36.85cqw;font-size:1.2cqw;color:#7a7780}
.v-ba-morph .seg1{left:35.6cqw}
.v-ba-morph .seg2{left:58.4cqw}
.v-ba-morph .cap{position:absolute;left:4cqw;top:47cqw;font-family:var(--font-display);font-style:italic;font-weight:600;font-size:2.4cqw;letter-spacing:-.02em;color:color-mix(in srgb,var(--accent) 60%,var(--ink));transform:rotate(-3deg);opacity:0;white-space:nowrap;animation:ba-morph-cap 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-ba-morph .sc{transform:translateY(81cqw) scale(2.15)}
  .v-ba-morph .ico{display:none}
  .v-ba-morph .bt.n{font-size:2.55cqw}
  .v-ba-morph .cap{left:8cqw;right:8cqw;top:9cqh;font-size:9.6cqw;line-height:1.02;white-space:normal;text-wrap:balance;text-align:center;transform:rotate(-2deg)}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-ba-morph .sc{transform:translateY(25.25cqw) scale(1.5)}
  .v-ba-morph .ico{display:none}
  .v-ba-morph .cap{left:8cqw;right:8cqw;top:6cqw;font-size:5.2cqw;text-align:center;transform:rotate(-2deg)}
}
@keyframes ba-morph-bg{0%,20%{opacity:0}40%,100%{opacity:1}}
@keyframes ba-morph-bgl{0%,30%{opacity:1}40%,100%{opacity:0}}
@keyframes ba-morph-la{0%,20%{transform:none;opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}26%{opacity:1}33%{opacity:0}38%,100%{transform:translate(calc((var(--mx) - var(--lx)) * 1cqw),calc((var(--my) - var(--ly)) * 1cqw)) scale(calc(var(--mw) / var(--lw)),calc(var(--mh) / var(--lh)));opacity:0}}
@keyframes ba-morph-lb{0%,23%{transform:none;opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}29%{opacity:1}36%{opacity:0}41%,100%{transform:translate(calc((var(--mx) - var(--lx)) * 1cqw),calc((var(--my) - var(--ly)) * 1cqw)) scale(calc(var(--mw) / var(--lw)),calc(var(--mh) / var(--lh)));opacity:0}}
@keyframes ba-morph-lc{0%,26%{transform:none;opacity:1;animation-timing-function:cubic-bezier(.65,0,.35,1)}32%{opacity:1}39%{opacity:0}44%,100%{transform:translate(calc((var(--mx) - var(--lx)) * 1cqw),calc((var(--my) - var(--ly)) * 1cqw)) scale(calc(var(--mw) / var(--lw)),calc(var(--mh) / var(--lh)));opacity:0}}
@keyframes ba-morph-na{0%,20%{transform:translate(calc((var(--lx) - var(--mx)) * 1cqw),calc((var(--ly) - var(--my)) * 1cqw)) scale(calc(var(--lw) / var(--mw)),calc(var(--lh) / var(--mh)));opacity:0;animation-timing-function:cubic-bezier(.65,0,.35,1)}27%{opacity:0}34%{opacity:1}38%,100%{transform:none;opacity:1}}
@keyframes ba-morph-nb{0%,23%{transform:translate(calc((var(--lx) - var(--mx)) * 1cqw),calc((var(--ly) - var(--my)) * 1cqw)) scale(calc(var(--lw) / var(--mw)),calc(var(--lh) / var(--mh)));opacity:0;animation-timing-function:cubic-bezier(.65,0,.35,1)}30%{opacity:0}37%{opacity:1}41%,100%{transform:none;opacity:1}}
@keyframes ba-morph-nc{0%,26%{transform:translate(calc((var(--lx) - var(--mx)) * 1cqw),calc((var(--ly) - var(--my)) * 1cqw)) scale(calc(var(--lw) / var(--mw)),calc(var(--lh) / var(--mh)));opacity:0;animation-timing-function:cubic-bezier(.65,0,.35,1)}33%{opacity:0}40%{opacity:1}44%,100%{transform:none;opacity:1}}
@keyframes ba-morph-lo{0%,20%{opacity:1;transform:translateY(0)}28%,100%{opacity:0;transform:translateY(1.2cqw)}}
@keyframes ba-morph-mo{0%,36%{opacity:0;transform:translateY(.8cqw)}46%,100%{opacity:1;transform:translateY(0)}}
@keyframes ba-morph-cap{0%,40%{opacity:0;translate:0 1cqw}50%,100%{opacity:1;translate:0 0}}
@keyframes ba-morph-caret{0%{opacity:1}50%,100%{opacity:0}}
@keyframes ba-morph-blink{0%{opacity:1}60%,100%{opacity:.25}}
`,
};

export const BEFORE_AFTER_SCENES: SceneSpec[] = [baWipe, baSplit, baChecklist, baTimeBars, baMorph];
