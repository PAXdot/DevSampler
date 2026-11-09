// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const prAutozoom: SceneSpec = {
  id: "pr-autozoom",
  slug: "mg-pr-autozoom",
  name: "Auto Zoom To Metric",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "camera-push-to-metric",
  energy: "default",
  settle: 3.48,
  requiresScreenshot: true,
  colors: { ink: "#14161F", accent: "#3D63FF", secondary: "#4F7DFF", paper: "#EBEDF3" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["dashboard", "zoom", "metric"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Insights \u00b7 last 30 days", maxChars: 30, role: "kicker" },
    { key: "headline", label: "Headline", default: "Hours saved, up 31% this month", maxChars: 40, role: "headline" },
    { key: "cta", label: "Call to action", default: "See your own numbers", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design"><div class="mg-clip">
    <div class="cam">
      <div class="win">
        <div class="side">
          <div class="lights"><i></i><i></i><i></i></div>
          <div class="brand"><span class="logo"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><b>Lumen</b><span>Acme</span></div>
          <div class="nv"><svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>Home</div>
          <div class="nv"><svg class="i" viewBox="0 0 24 24"><path d="M3 13h5l1.5 3h5l1.5-3h5"/><path d="M5.5 5h13l2.5 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z"/></svg>Inbox<span class="bd">3</span></div>
          <div class="nv on"><svg class="i" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg>Insights</div>
          <div class="nv"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>Docs</div>
          <div class="nv"><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>Agents</div>
          <div class="nv"><svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/></svg>Members</div>
          <div class="sec">Spaces</div>
          <div class="sp"><i style="background:var(--accent)"></i>Growth</div>
          <div class="sp"><i style="background:#1FB89A"></i>Research</div>
          <div class="sp"><i style="background:#FF8A3D"></i>Design</div>        </div>
        <div class="main">
          <div class="head">
            <div><div class="ttl">Insights</div><div class="sub">Last 30 days · 6 spaces · 214 members</div></div>
            <div class="acts"><span class="seg"><span>7D</span><span class="on">30D</span><span>90D</span></span><span class="btn">Share</span><span class="btn dark">New report</span></div>
          </div>
          <div class="kpis">
            <div class="kpi">
              <div class="kl"><svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/></svg>Weekly active</div>
              <div class="kv">48.2k</div>
              <span class="dl">↑ 12.4%</span>
              <svg class="spk" viewBox="0 0 100 40"><path d="M0 32C10 30 15 34 25 27S40 20 50 22 65 13 75 15 90 8 100 6"/></svg>
            </div>
            <div class="kpi hero">
              <div class="kl"><svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Hours saved</div>
              <div class="kv"><span class="reel"><span>11,902</span><span>12,166</span><span>12,480</span></span><small>h</small></div>
              <span class="dl">↑ 31%</span><span class="vs">vs. Sep</span>
              <svg class="spk" viewBox="0 0 100 40"><defs><linearGradient id="pr-autozoom-sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--accent)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--accent)" stop-opacity="0"/></linearGradient></defs><path class="area" d="M0 34C12 33 16 30 26 30S42 24 52 25 66 14 76 14 90 6 100 4V40H0z"/><path pathLength="1" d="M0 34C12 33 16 30 26 30S42 24 52 25 66 14 76 14 90 6 100 4"/><circle cx="100" cy="4" r="3.6"/></svg>
            </div>
            <div class="kpi">
              <div class="kl"><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>Answers</div>
              <div class="kv">1.26M</div>
              <span class="dl">↑ 8.1%</span>
              <svg class="spk" viewBox="0 0 100 40"><path d="M0 28C10 26 16 30 26 24S40 26 50 20 66 22 76 16 90 14 100 10"/></svg>
            </div>
            <div class="kpi">
              <div class="kl"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>Docs synced</div>
              <div class="kv">9,412</div>
              <span class="dl dn">↓ 2.3%</span>
              <svg class="spk" viewBox="0 0 100 40"><path d="M0 12C10 14 16 10 26 16S40 14 50 18 66 16 76 22 90 20 100 24"/></svg>
            </div>
          </div>
          <div class="row2">
            <div class="card chart">
              <div class="ch">Answers by space<span class="lg"><span><i style="background:var(--accent)"></i>Growth</span><span><i style="background:#1FB89A"></i>Research</span><span><i style="background:#FF8A3D"></i>Design</span></span></div>
              <svg viewBox="0 0 380 150" preserveAspectRatio="none">
                <defs><linearGradient id="pr-autozoom-ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--accent)" stop-opacity=".22"/><stop offset="1" style="stop-color:var(--accent)" stop-opacity="0"/></linearGradient><linearGradient id="pr-autozoom-gb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1FB89A" stop-opacity=".18"/><stop offset="1" stop-color="#1FB89A" stop-opacity="0"/></linearGradient></defs>
                <g stroke="#EFF0F4" stroke-width="1"><path d="M0 20H380M0 60H380M0 100H380M0 140H380"/></g>
                <path d="M0 96C30 89 50 72 80 75S130 61 160 53 220 59 250 41 310 31 340 23 370 20 380 18V150H0z" fill="url(#pr-autozoom-ga)"/>
                <path d="M0 96C30 89 50 72 80 75S130 61 160 53 220 59 250 41 310 31 340 23 370 20 380 18" fill="none" style="stroke:var(--accent)" stroke-width="2.2"/>
                <path d="M0 122C30 117 60 106 90 109S150 97 180 99 240 87 270 81 330 73 380 66V150H0z" fill="url(#pr-autozoom-gb)"/>
                <path d="M0 122C30 117 60 106 90 109S150 97 180 99 240 87 270 81 330 73 380 66" fill="none" stroke="#1FB89A" stroke-width="2.2"/>
                <path d="M0 134C40 132 70 126 110 128S170 120 200 121 260 114 300 112 350 108 380 104" fill="none" stroke="#FF8A3D" stroke-width="2.2" stroke-dasharray="5 5"/>
              </svg>
            </div>
            <div class="card list">
              <div class="ch">Top agents<span class="lg">This month</span></div>
              <div class="ag"><span class="tl" style="background:var(--accent)"><svg class="i" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></span><span class="nm">Research Scout<span>Growth</span></span><span class="bar"><i style="width:92%"></i></span><span class="n">2,184</span></div>
              <div class="ag"><span class="tl" style="background:#1FB89A"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg></span><span class="nm">Release Notes<span>Research</span></span><span class="bar"><i style="width:71%;background:#1FB89A"></i></span><span class="n">1,630</span></div>
              <div class="ag"><span class="tl" style="background:#FF8A3D"><svg class="i" viewBox="0 0 24 24"><path d="M3 13h5l1.5 3h5l1.5-3h5"/><path d="M5.5 5h13l2.5 8v6H3v-6z"/></svg></span><span class="nm">Inbox Triage<span>Design</span></span><span class="bar"><i style="width:54%;background:#FF8A3D"></i></span><span class="n">1,207</span></div>
              <div class="ag"><span class="tl" style="background:#15161D"><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg></span><span class="nm">Spec Writer<span>Growth</span></span><span class="bar"><i style="width:38%;background:#15161D"></i></span><span class="n">864</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vig"></div></div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-autozoom{color:var(--ink);font-family:var(--font-body)}
.v-pr-autozoom[data-backdrop="on"]{background:radial-gradient(70cqw 45cqw at 14% -6%,color-mix(in srgb,var(--accent) 16%,var(--paper)) 0%,transparent 70%),radial-gradient(60cqw 40cqw at 104% 104%,color-mix(in srgb,var(--secondary) 18%,var(--paper)) 0%,transparent 70%),var(--paper)}
.v-pr-autozoom .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(7.143cqw,7.786cqw) scale(0.8571);filter:drop-shadow(0 .4cqw 1cqw rgba(35,36,39,.08)) drop-shadow(0 2.6cqw 4cqw rgba(48,49,53,.16));color:#14161F}
@container (max-aspect-ratio: 4/5){.v-pr-autozoom .mg-design{transform:translate(-4.651cqw,67.837cqw) scale(1.093)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-autozoom .mg-design{transform:translate(-1.754cqw,24.965cqw) scale(1.0351)}}

.v-pr-autozoom .mg-clip{position:absolute;inset:0;clip-path:inset(5.5cqw 7cqw 1.75cqw 7cqw round 1.4cqw)}
.v-pr-autozoom *{box-sizing:border-box;margin:0;}
.v-pr-autozoom .cam{position:absolute;inset:0;transform-origin:49.07cqw 18.1cqw;animation:pr-autozoom-cam 6s linear infinite;}
.v-pr-autozoom .win{position:absolute;left:7cqw;top:5.5cqw;width:86cqw;height:49cqw;background:#fff;border-radius:1.4cqw;display:flex;overflow:hidden;box-shadow:0 0 0 1px rgba(24,26,52,.06),0 .4cqw 1cqw rgba(35,36,39,.06),0 2.6cqw 6cqw rgba(48,49,53,.16);}
.v-pr-autozoom .i{width:1.15cqw;height:1.15cqw;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-autozoom .side{width:15cqw;flex:none;background:#F7F8FB;border-right:1px solid #ECEEF3;padding:1.3cqw 1cqw;display:flex;flex-direction:column;gap:.28cqw;font-size:1cqw;color:#50556A;}
.v-pr-autozoom .lights{display:flex;gap:.5cqw;margin-bottom:1.2cqw;}
.v-pr-autozoom .lights i{width:.78cqw;height:.78cqw;border-radius:50%;background:#FF5F57;}
.v-pr-autozoom .lights i:nth-child(2){background:#FEBC2E;}
.v-pr-autozoom .lights i:nth-child(3){background:#28C840;}
.v-pr-autozoom .brand{display:flex;align-items:center;gap:.6cqw;margin-bottom:1.1cqw;padding:0 .3cqw;}
.v-pr-autozoom .logo{width:1.8cqw;height:1.8cqw;border-radius:.55cqw;background:linear-gradient(140deg,var(--accent),var(--secondary));display:grid;place-items:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);}
.v-pr-autozoom .logo svg{width:1.15cqw;height:1.15cqw;fill:#fff;}
.v-pr-autozoom .brand b{font-size:1.15cqw;color:#14161F;font-weight:650;}
.v-pr-autozoom .brand span{margin-left:auto;font-size:.85cqw;color:#8A8FA3;}
.v-pr-autozoom .nv{display:flex;align-items:center;gap:.65cqw;padding:.48cqw .6cqw;border-radius:.55cqw;}
.v-pr-autozoom .nv.on{background:#fff;color:#14161F;font-weight:550;box-shadow:0 0 0 1px #ECEEF3,0 .15cqw .4cqw rgba(25,26,29,.05);}
.v-pr-autozoom .nv .bd{margin-left:auto;font-size:.75cqw;background:color-mix(in srgb,var(--accent) 13%,#fff);color:color-mix(in srgb,var(--accent) 82%,#000);padding:.05cqw .45cqw;border-radius:1cqw;font-weight:600;}
.v-pr-autozoom .sec{font-size:.8cqw;color:#9AA0B2;margin:1.2cqw 0 .3cqw .6cqw;}
.v-pr-autozoom .sp{display:flex;align-items:center;gap:.7cqw;padding:.4cqw .6cqw;}
.v-pr-autozoom .sp i{width:.65cqw;height:.65cqw;border-radius:.2cqw;}
.v-pr-autozoom .me{margin-top:auto;display:flex;align-items:center;gap:.6cqw;padding:.4cqw .5cqw;}
.v-pr-autozoom .av{width:1.9cqw;height:1.9cqw;border-radius:50%;background:radial-gradient(circle at 35% 30%,#FFD7B5,#F08A5D 60%,#C4523A);flex:none;}
.v-pr-autozoom .me b{display:block;font-size:.95cqw;color:#14161F;font-weight:550;}
.v-pr-autozoom .me span span{display:block;font-size:.75cqw;color:#9AA0B2;}
.v-pr-autozoom .main{flex:1;padding:2.2cqw 2.4cqw;display:flex;flex-direction:column;gap:1.6cqw;min-width:0;}
.v-pr-autozoom .head{height:3.8cqw;display:flex;align-items:flex-end;justify-content:space-between;}
.v-pr-autozoom .ttl{font-size:1.95cqw;font-weight:650;letter-spacing:-.025em;line-height:1.1;}
.v-pr-autozoom .sub{font-size:.95cqw;color:#8A8FA3;margin-top:.35cqw;}
.v-pr-autozoom .acts{display:flex;gap:.6cqw;align-items:center;font-size:.92cqw;}
.v-pr-autozoom .seg{display:flex;background:#F2F3F7;border-radius:.6cqw;padding:.2cqw;color:#7A7F93;}
.v-pr-autozoom .seg span{padding:.35cqw .7cqw;border-radius:.45cqw;}
.v-pr-autozoom .seg .on{background:#fff;color:#14161F;font-weight:550;box-shadow:0 .1cqw .3cqw rgba(25,26,29,.08);}
.v-pr-autozoom .btn{padding:.55cqw 1cqw;border-radius:.6cqw;border:1px solid #E4E6EE;font-weight:550;}
.v-pr-autozoom .btn.dark{background:#15161D;color:#fff;border-color:#15161D;}
.v-pr-autozoom .kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2cqw;flex:none;}
.v-pr-autozoom .kpi{position:relative;border:1px solid #ECEEF3;border-radius:1cqw;padding:1.05cqw 1.15cqw;background:#fff;}
.v-pr-autozoom .kl{display:flex;align-items:center;gap:.45cqw;font-size:.85cqw;color:#7A7F93;}
.v-pr-autozoom .kl .i{width:.95cqw;height:.95cqw;}
.v-pr-autozoom .kv{margin-top:.55cqw;font-size:2.05cqw;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums;line-height:1.15;display:flex;align-items:baseline;gap:.25cqw;}
.v-pr-autozoom .kv small{font-size:1.1cqw;color:#9AA0B2;font-weight:500;}
.v-pr-autozoom .dl{display:inline-flex;align-items:center;gap:.2cqw;margin-top:.5cqw;font-size:.72cqw;font-weight:600;color:#12925E;background:#E7F8F0;padding:.12cqw .45cqw;border-radius:1cqw;}
.v-pr-autozoom .dl.dn{color:#C2410C;background:#FFF0E6;}
.v-pr-autozoom .spk{position:absolute;right:1cqw;bottom:1.1cqw;width:5.6cqw;height:2.4cqw;overflow:visible;}
.v-pr-autozoom .spk path{fill:none;stroke:#B9BED0;stroke-width:1.6;stroke-linecap:round;}
.v-pr-autozoom .hero{border-color:color-mix(in srgb,var(--accent) 24%,#fff);background:linear-gradient(180deg,#fff,color-mix(in srgb,var(--accent) 3%,#fff));z-index:2;}
.v-pr-autozoom .hero::after{content:"";position:absolute;inset:-.45cqw;border-radius:1.35cqw;border:.13cqw solid var(--accent);box-shadow:0 0 0 .55cqw color-mix(in srgb,var(--accent) 13%,transparent),0 0 2.4cqw color-mix(in srgb,var(--accent) 35%,transparent);opacity:0;animation:pr-autozoom-ring 6s linear infinite;}
.v-pr-autozoom .hero .kl{color:color-mix(in srgb,var(--accent) 82%,#000);}
.v-pr-autozoom .reel{display:inline-block;height:1.15em;overflow:hidden;vertical-align:bottom;}
.v-pr-autozoom .reel span{display:block;line-height:1.15em;animation:pr-autozoom-reel 6s linear infinite;}
.v-pr-autozoom .hero .dl{animation:pr-autozoom-pop 6s linear infinite;transform-origin:left center;}
.v-pr-autozoom .hero .vs{font-size:.72cqw;color:#9AA0B2;margin-left:.4cqw;}
.v-pr-autozoom .hero .spk path{stroke:var(--accent);stroke-width:2;stroke-dasharray:1 1.2;stroke-dashoffset:1.1;animation:pr-autozoom-draw 6s linear infinite;}
.v-pr-autozoom .hero .spk .area{fill:url(#pr-autozoom-sg);stroke:none;opacity:0;animation:pr-autozoom-fade 6s linear infinite;}
.v-pr-autozoom .hero .spk circle{fill:var(--accent);stroke:#fff;stroke-width:1.5;transform-box:fill-box;transform-origin:center;animation:pr-autozoom-dot 6s linear infinite;}
.v-pr-autozoom .row2{display:grid;grid-template-columns:1.75fr 1fr;gap:1.2cqw;flex:1;min-height:0;}
.v-pr-autozoom .card{border:1px solid #ECEEF3;border-radius:1cqw;padding:1.1cqw 1.2cqw;}
.v-pr-autozoom .ch{display:flex;align-items:center;justify-content:space-between;font-size:1.02cqw;font-weight:600;}
.v-pr-autozoom .lg{display:flex;gap:.9cqw;font-size:.78cqw;color:#7A7F93;font-weight:450;}
.v-pr-autozoom .lg span{display:flex;align-items:center;gap:.3cqw;}
.v-pr-autozoom .lg i{width:.6cqw;height:.6cqw;border-radius:.2cqw;}
.v-pr-autozoom .chart svg{display:block;width:100%;height:15.4cqw;margin-top:1cqw;}
.v-pr-autozoom .ag{display:flex;align-items:center;gap:.7cqw;padding:.62cqw 0;border-bottom:1px solid #F2F3F7;font-size:.9cqw;}
.v-pr-autozoom .ag .tl{width:1.8cqw;height:1.8cqw;border-radius:.5cqw;display:grid;place-items:center;color:#fff;flex:none;}
.v-pr-autozoom .ag .tl .i{width:1cqw;height:1cqw;}
.v-pr-autozoom .ag .nm{flex:1;font-weight:500;}
.v-pr-autozoom .ag .nm span{display:block;font-size:.72cqw;color:#9AA0B2;font-weight:400;margin-top:.1cqw;}
.v-pr-autozoom .ag .bar{width:4.6cqw;height:.45cqw;border-radius:1cqw;background:#F0F1F5;overflow:hidden;}
.v-pr-autozoom .ag .bar i{display:block;height:100%;border-radius:1cqw;background:var(--accent);}
.v-pr-autozoom .ag .n{width:3cqw;text-align:right;font-variant-numeric:tabular-nums;color:#50556A;font-size:.85cqw;}
.v-pr-autozoom .vig{position:absolute;inset:0;pointer-events:none;background:radial-gradient(75% 85% at 50% 50%,rgba(29,30,33,0) 50%,rgba(29,30,33,.32) 100%);opacity:0;animation:pr-autozoom-vig 6s linear infinite;}
@keyframes pr-autozoom-cam{
  0%{transform:translate(0,0) scale(1);animation-timing-function:cubic-bezier(.4,0,.6,1);}
  14%{transform:translate(0,0) scale(1.012);animation-timing-function:cubic-bezier(.7,0,.2,1);}
  40%{transform:translate(.93cqw,10.03cqw) scale(2.8);animation-timing-function:cubic-bezier(.3,0,.7,1);}
  74%{transform:translate(.93cqw,10.03cqw) scale(2.9);animation-timing-function:cubic-bezier(.65,0,.25,1);}
  95%{transform:translate(0,0) scale(1);}
  100%{transform:translate(0,0) scale(1);}
}
@keyframes pr-autozoom-ring{
  0%,35%{opacity:0;transform:scale(1.12);animation-timing-function:cubic-bezier(.2,.8,.2,1);}
  44%{opacity:1;transform:scale(1);}
  72%{opacity:1;transform:scale(1);animation-timing-function:cubic-bezier(.4,0,.2,1);}
  79%,100%{opacity:0;transform:scale(1.04);}
}
@keyframes pr-autozoom-reel{
  0%,24%{transform:translateY(0);animation-timing-function:cubic-bezier(.5,0,.2,1);}
  31%{transform:translateY(-1.15em);animation-timing-function:cubic-bezier(.3,0,.1,1);}
  40%{transform:translateY(-2.3em);}
  92%{transform:translateY(-2.3em);}
  93%,100%{transform:translateY(0);}
}
@keyframes pr-autozoom-pop{
  0%,38%{opacity:0;transform:scale(.6);animation-timing-function:cubic-bezier(.3,1.6,.5,1);}
  45%{opacity:1;transform:scale(1);}
  88%{opacity:1;transform:scale(1);}
  92%,100%{opacity:0;transform:scale(.8);}
}
@keyframes pr-autozoom-draw{
  0%,24%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.5,0,.2,1);}
  44%{stroke-dashoffset:0;}
  90%{stroke-dashoffset:0;}
  93%,100%{stroke-dashoffset:1.1;}
}
@keyframes pr-autozoom-fade{
  0%,36%{opacity:0;}
  46%,88%{opacity:1;}
  92%,100%{opacity:0;}
}
@keyframes pr-autozoom-dot{
  0%,40%{transform:scale(0);animation-timing-function:cubic-bezier(.3,1.7,.5,1);}
  45%{transform:scale(1);}
  52%{transform:scale(1.35);}
  58%{transform:scale(1);}
  66%{transform:scale(1.35);}
  72%{transform:scale(1);}
  88%{transform:scale(1);}
  92%,100%{transform:scale(0);}
}
@keyframes pr-autozoom-vig{
  0%,16%{opacity:0;}
  40%,72%{opacity:1;}
  92%,100%{opacity:0;}
}.v-pr-autozoom .win{box-shadow:none}
@container (max-aspect-ratio: 4/5){.v-pr-autozoom .mg-clip{clip-path:inset(-6cqw 7cqw -17.75cqw 7cqw round 1.4cqw)} .v-pr-autozoom .vig{top:-6cqw;bottom:-17.75cqw}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-autozoom .mg-clip{clip-path:inset(1cqw 7cqw -1.75cqw 7cqw round 1.4cqw)} .v-pr-autozoom .vig{top:1cqw;bottom:-1.75cqw}}

.v-pr-autozoom .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-autozoom .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-autozoom-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-autozoom .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-autozoom .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:600;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-autozoom .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-autozoom-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-autozoom .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-autozoom-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-autozoom .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-autozoom .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-autozoom .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-autozoom .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-autozoom .mg-hl{margin-top:2.4cqw;font-size:9.4cqw;line-height:1.04}
  .v-pr-autozoom .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-autozoom .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-autozoom .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-autozoom .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-autozoom .mg-hl{margin-top:1.2cqw;font-size:5.6cqw}
  .v-pr-autozoom .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-autozoom-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-autozoom-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prCursorClick: SceneSpec = {
  id: "pr-cursor-click",
  slug: "mg-pr-cursor-click",
  name: "Cursor Click Publish",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "cursor-glide-click-confirm",
  energy: "default",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#ECECF1", accent: "#3D63FF", secondary: "#3878FF", paper: "#08080B" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["cursor", "click", "publish"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen 2.0 \u00b7 publishing", maxChars: 30, role: "kicker" },
    { key: "headline", label: "Headline", default: "Publish the plan in one click", maxChars: 40, role: "headline" },
    { key: "cta", label: "Call to action", default: "Live at lumen.app", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="glow"></div>
    <div class="win">
      <div class="top">
        <span class="lights"><i></i><i></i><i></i></span>
        <span class="crumb">Acme<span>/</span>Launches<span>/</span><b>Lumen 2.0 launch plan</b></span>
        <span class="tr"><span class="avs"><i style="background:linear-gradient(135deg,#FFB86B,#FF6B6B)"></i><i style="background:linear-gradient(135deg,#6BE4FF,#4A7BFF)"></i><i style="background:linear-gradient(135deg,#B6FF8A,#2FB872)"></i></span><span class="tb">Share</span><span class="tb v">Publish</span></span>
      </div>
      <div class="body">
        <div class="ol"><span class="h">Outline</span><span class="on">Goals</span><span>Audience</span><span>Timeline</span><span>Launch assets</span><span>Risks</span></div>
        <div class="doc">
          <div class="dt">Lumen 2.0 launch plan</div>
          <div class="dm"><i></i>Maya Chen · Edited 2 min ago · 6 comments</div>
          <div class="h2">Goals</div>
          <div class="p">Ship the live canvas to every workspace on October 28 and convert 8% of active teams to the Team plan within 30 days.</div>
          <div class="ck"><i class="d"></i>Private beta with 40 design partners</div>
          <div class="ck"><i class="d"></i>Press embargo lifts Oct 21, 9am PT</div>
          <div class="ck"><i></i>Launch film and changelog</div>
        </div>
      </div>
    </div>
    <div class="scrim"></div>
    <div class="modal">
      <div class="mh">
        <span class="mi"><svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></span>
        <div><div class="mt">Publish to the web</div><div class="md">Anyone with the link can view. Edits sync live.</div></div>
      </div>
      <div class="fld"><svg class="i" viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>lumen.app/acme/launch-plan<b>Copy</b></div>
      <div class="tg"><span>Allow comments<span>Viewers can leave notes</span></span><span class="sw on"></span></div>
      <div class="tg"><span>Show in search engines<span>Off until launch day</span></span><span class="sw"></span></div>
      <div class="mf">
        <span class="lp"><span class="a">Never published</span><span class="b">Live · just now</span></span>
        <span class="gb">Cancel</span>
        <span class="pb"><span class="hov"></span><span class="ok"></span><span class="l1">Publish</span><span class="sp"><i></i></span><span class="l2"><svg class="i" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>Published</span></span>
      </div>
    </div>
    <div class="toast"><span class="ck2"><svg class="i" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span><span><b>Launch plan is live</b><span class="u">lumen.app/acme/launch-plan</span></span><span class="cp">Copy link</span></div>
    <div class="ripw"><div class="rip"></div></div>
    <div class="cx"><div class="cy"><svg class="cur" viewBox="0 0 18 22"><path d="M2 1.2v16.6l4.3-4.2 2.9 6.6 2.9-1.3-2.8-6.4h5.9z" fill="#fff" stroke="#111" stroke-width="1.2" stroke-linejoin="round"/></svg></div></div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-cursor-click{color:var(--ink);font-family:var(--font-body)}
.v-pr-cursor-click[data-backdrop="on"]{background:radial-gradient(60cqw 40cqw at 74% 82%,color-mix(in srgb,var(--accent) 42%,transparent),transparent 70%),radial-gradient(50cqw 34cqw at 14% 6%,color-mix(in srgb,var(--secondary) 18%,transparent),transparent 70%),var(--paper)}
.v-pr-cursor-click .glow{display:none}
.v-pr-cursor-click .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(7.143cqw,8.214cqw) scale(0.8571);color:#ECECF1}
@container (max-aspect-ratio: 4/5){.v-pr-cursor-click .mg-design{transform:translate(-2.222cqw,74.189cqw) scale(1.0444)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-cursor-click .mg-design{transform:translate(-1.111cqw,25.344cqw) scale(1.0222)}}

.v-pr-cursor-click *{box-sizing:border-box;margin:0;}
.v-pr-cursor-click .glow{position:absolute;inset:-20%;background:radial-gradient(45cqw 30cqw at 72% 88%,color-mix(in srgb,var(--accent) 55%,transparent),transparent 70%),radial-gradient(40cqw 26cqw at 18% 6%,color-mix(in srgb,var(--secondary) 20%,transparent),transparent 70%);animation:pr-cursor-click-drift 6s ease-in-out infinite;}
.v-pr-cursor-click .i{width:1.1cqw;height:1.1cqw;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-cursor-click .win{position:absolute;left:5cqw;top:5cqw;width:90cqw;height:49cqw;background:#101214;border-radius:1.4cqw;border:1px solid rgba(255,255,255,.08);box-shadow:0 3cqw 8cqw rgba(0,0,0,.6);overflow:hidden;}
.v-pr-cursor-click .top{height:4cqw;display:flex;align-items:center;gap:1.4cqw;padding:0 1.4cqw;border-bottom:1px solid rgba(255,255,255,.06);font-size:.95cqw;color:#8C8C99;}
.v-pr-cursor-click .lights{display:flex;gap:.5cqw;}
.v-pr-cursor-click .lights i{width:.75cqw;height:.75cqw;border-radius:50%;background:#3A3A44;}
.v-pr-cursor-click .crumb b{color:#ECECF1;font-weight:500;}
.v-pr-cursor-click .crumb span{margin:0 .5cqw;color:#4A4A55;}
.v-pr-cursor-click .tr{margin-left:auto;display:flex;align-items:center;gap:.7cqw;}
.v-pr-cursor-click .avs{display:flex;margin-right:.4cqw;}
.v-pr-cursor-click .avs i{width:1.8cqw;height:1.8cqw;border-radius:50%;border:.15cqw solid #101214;margin-left:-.5cqw;}
.v-pr-cursor-click .tb{padding:.5cqw .9cqw;border-radius:.55cqw;background:rgba(255,255,255,.06);color:#D8DADE;font-weight:500;}
.v-pr-cursor-click .tb.v{background:var(--accent);color:#fff;}
.v-pr-cursor-click .body{display:flex;height:100%;}
.v-pr-cursor-click .ol{width:15cqw;padding:2cqw 1.4cqw;border-right:1px solid rgba(255,255,255,.05);font-size:.88cqw;color:#7A7A86;display:flex;flex-direction:column;gap:.85cqw;}
.v-pr-cursor-click .ol .h{color:#5C5C67;font-size:.78cqw;margin-bottom:.2cqw;}
.v-pr-cursor-click .ol .on{color:#ECECF1;}
.v-pr-cursor-click .doc{flex:1;padding:2.6cqw 5cqw;}
.v-pr-cursor-click .dt{font-size:2.6cqw;font-weight:650;letter-spacing:-.03em;}
.v-pr-cursor-click .dm{display:flex;align-items:center;gap:.6cqw;margin-top:.8cqw;font-size:.9cqw;color:#7A7A86;}
.v-pr-cursor-click .dm i{width:1.4cqw;height:1.4cqw;border-radius:50%;background:linear-gradient(135deg,#FFB86B,#FF6B6B);}
.v-pr-cursor-click .h2{font-size:1.25cqw;font-weight:600;margin:2cqw 0 .8cqw;}
.v-pr-cursor-click .p{font-size:1cqw;line-height:1.6;color:#A5A5B0;max-width:44cqw;}
.v-pr-cursor-click .ck{display:flex;align-items:center;gap:.7cqw;font-size:1cqw;color:#C8C8D0;margin-top:.7cqw;}
.v-pr-cursor-click .ck i{width:1.1cqw;height:1.1cqw;border-radius:.3cqw;border:1px solid #4A4A55;}
.v-pr-cursor-click .ck i.d{background:var(--accent);border-color:var(--accent);}
.v-pr-cursor-click .scrim{position:absolute;left:5cqw;top:5cqw;width:90cqw;height:49cqw;border-radius:1.4cqw;background:rgba(5,5,7,.5);}
.v-pr-cursor-click .modal{position:absolute;left:31cqw;top:13.6cqw;width:38cqw;background:linear-gradient(180deg,#1B1C1F,#15171A);border:1px solid rgba(255,255,255,.09);border-radius:1.5cqw;padding:1.8cqw;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 2.4cqw 6cqw rgba(0,0,0,.65),inset 0 1px 0 rgba(255,255,255,.06);}
.v-pr-cursor-click .mh{display:flex;gap:1cqw;align-items:flex-start;}
.v-pr-cursor-click .mi{width:2.8cqw;height:2.8cqw;border-radius:.8cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 80%,#fff),color-mix(in srgb,var(--accent) 85%,#000));display:grid;place-items:center;color:#fff;flex:none;box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 .6cqw 1.6cqw color-mix(in srgb,var(--accent) 40%,transparent);}
.v-pr-cursor-click .mi .i{width:1.5cqw;height:1.5cqw;}
.v-pr-cursor-click .mt{font-size:1.4cqw;font-weight:600;letter-spacing:-.01em;}
.v-pr-cursor-click .md{font-size:.92cqw;color:#8C8C99;margin-top:.35cqw;line-height:1.45;}
.v-pr-cursor-click .fld{margin-top:1.5cqw;display:flex;align-items:center;gap:.6cqw;height:3cqw;padding:0 .5cqw 0 1cqw;border-radius:.7cqw;background:#0C0D10;border:1px solid rgba(255,255,255,.08);font-family:var(--font-mono);font-size:.88cqw;color:#C8C8D0;}
.v-pr-cursor-click .fld .i{color:#6A6A76;}
.v-pr-cursor-click .fld b{margin-left:auto;font-family:var(--font-body);font-weight:500;font-size:.85cqw;padding:.4cqw .7cqw;border-radius:.45cqw;background:rgba(255,255,255,.07);color:#D8DADE;}
.v-pr-cursor-click .tg{display:flex;align-items:center;justify-content:space-between;margin-top:1.1cqw;font-size:.98cqw;color:#C8C8D0;}
.v-pr-cursor-click .tg span span{display:block;font-size:.8cqw;color:#6A6A76;margin-top:.15cqw;}
.v-pr-cursor-click .sw{width:2.6cqw;height:1.5cqw;border-radius:1cqw;background:#2A2B2E;position:relative;flex:none;}
.v-pr-cursor-click .sw::after{content:"";position:absolute;left:.18cqw;top:.18cqw;width:1.14cqw;height:1.14cqw;border-radius:50%;background:#8C8C99;}
.v-pr-cursor-click .sw.on{background:var(--accent);}
.v-pr-cursor-click .sw.on::after{left:auto;right:.18cqw;background:#fff;}
.v-pr-cursor-click .mf{display:flex;align-items:center;gap:.7cqw;margin-top:1.6cqw;padding-top:1.4cqw;border-top:1px solid rgba(255,255,255,.07);font-size:.85cqw;color:#6A6A76;}
.v-pr-cursor-click .lp{position:relative;height:1.2em;overflow:hidden;flex:1;}
.v-pr-cursor-click .lp span{position:absolute;left:0;top:0;white-space:nowrap;}
.v-pr-cursor-click .lp .a{animation:pr-cursor-click-lpa 6s linear infinite;}
.v-pr-cursor-click .lp .b{color:#4ADE80;opacity:0;animation:pr-cursor-click-lpb 6s linear infinite;}
.v-pr-cursor-click .gb{padding:.75cqw 1.1cqw;border-radius:.65cqw;color:#C8C8D0;font-weight:500;font-size:.95cqw;}
.v-pr-cursor-click .pb{position:relative;width:8.6cqw;height:2.7cqw;border-radius:.7cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 88%,#fff),var(--accent));box-shadow:inset 0 1px 0 rgba(255,255,255,.28),0 .5cqw 1.4cqw color-mix(in srgb,var(--accent) 45%,transparent);font-size:.98cqw;font-weight:600;color:#fff;animation:pr-cursor-click-press 6s linear infinite;}
.v-pr-cursor-click .pb > span{position:absolute;inset:0;border-radius:inherit;display:flex;align-items:center;justify-content:center;gap:.4cqw;}
.v-pr-cursor-click .pb .hov{background:rgba(255,255,255,.14);opacity:0;animation:pr-cursor-click-hov 6s linear infinite;}
.v-pr-cursor-click .pb .ok{background:linear-gradient(180deg,#2FCB72,#1FA85A);box-shadow:inset 0 1px 0 rgba(255,255,255,.3),0 .5cqw 1.6cqw rgba(47,203,114,.45);opacity:0;animation:pr-cursor-click-ok 6s linear infinite;}
.v-pr-cursor-click .pb .l1{animation:pr-cursor-click-l1 6s linear infinite;}
.v-pr-cursor-click .pb .sp{opacity:0;animation:pr-cursor-click-sp 6s linear infinite;}
.v-pr-cursor-click .pb .sp i{width:1.2cqw;height:1.2cqw;border-radius:50%;border:.18cqw solid rgba(255,255,255,.3);border-top-color:#fff;animation:pr-cursor-click-spin .7s linear infinite;}
.v-pr-cursor-click .pb .l2{opacity:0;animation:pr-cursor-click-l2 6s linear infinite;}
.v-pr-cursor-click .pb .l2 .i{width:1.05cqw;height:1.05cqw;stroke-width:2.6;}
.v-pr-cursor-click .ripw{position:absolute;left:62.7cqw;top:35.4cqw;}
.v-pr-cursor-click .rip{position:absolute;left:0;top:0;width:4cqw;height:4cqw;margin:-2cqw 0 0 -2cqw;border-radius:50%;border:.2cqw solid color-mix(in srgb,var(--accent) 55%,#fff);background:radial-gradient(circle,color-mix(in srgb,var(--accent) 35%,transparent),transparent 70%);opacity:0;animation:pr-cursor-click-rip 6s linear infinite;}
.v-pr-cursor-click .cx{position:absolute;left:0;top:0;animation:pr-cursor-click-x 6s linear infinite;}
.v-pr-cursor-click .cy{animation:pr-cursor-click-y 6s linear infinite;}
.v-pr-cursor-click .cur{display:block;width:1.9cqw;height:2.35cqw;margin:-.1cqw 0 0 -.2cqw;transform-origin:.2cqw .1cqw;filter:drop-shadow(0 .25cqw .5cqw rgba(0,0,0,.55));animation:pr-cursor-click-tap 6s linear infinite;}
.v-pr-cursor-click .toast{position:absolute;left:50%;bottom:2.6cqw;display:flex;align-items:center;gap:.9cqw;padding:.85cqw 1cqw .85cqw .9cqw;border-radius:1.2cqw;background:rgba(30,31,34,.92);border:1px solid rgba(255,255,255,.1);box-shadow:0 1.6cqw 4cqw rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.07);font-size:.98cqw;white-space:nowrap;opacity:0;animation:pr-cursor-click-toast 6s linear infinite;}
.v-pr-cursor-click .toast .ck2{width:2cqw;height:2cqw;border-radius:50%;background:#1FA85A;display:grid;place-items:center;color:#fff;box-shadow:0 0 1.4cqw rgba(47,203,114,.55);}
.v-pr-cursor-click .toast .ck2 .i{width:1.1cqw;height:1.1cqw;stroke-width:2.8;}
.v-pr-cursor-click .toast b{font-weight:600;}
.v-pr-cursor-click .toast .u{font-family:var(--font-mono);font-size:.85cqw;color:#9A9AA6;margin-left:.3cqw;}
.v-pr-cursor-click .toast .cp{margin-left:.6cqw;padding-left:1cqw;border-left:1px solid rgba(255,255,255,.12);color:color-mix(in srgb,var(--accent) 50%,#fff);font-weight:500;}
@keyframes pr-cursor-click-drift{0%,100%{transform:translate(0,0);}50%{transform:translate(-2cqw,-1.2cqw);}}
@keyframes pr-cursor-click-x{
  0%,6%{transform:translateX(18cqw);animation-timing-function:cubic-bezier(.22,.62,.28,1);}
  28%{transform:translateX(62.5cqw);animation-timing-function:cubic-bezier(.4,0,.6,1);}
  80%{transform:translateX(64.2cqw);animation-timing-function:cubic-bezier(.6,0,.8,.4);}
  95%{transform:translateX(84cqw);}
  96%{transform:translateX(84cqw);}
  97%,100%{transform:translateX(18cqw);}
}
@keyframes pr-cursor-click-y{
  0%,6%{transform:translateY(60cqw);animation-timing-function:cubic-bezier(.55,0,.15,1);}
  28%{transform:translateY(35.5cqw);animation-timing-function:cubic-bezier(.4,0,.6,1);}
  80%{transform:translateY(38.2cqw);animation-timing-function:cubic-bezier(.6,0,.9,.5);}
  95%,100%{transform:translateY(62cqw);}
}
@keyframes pr-cursor-click-tap{
  0%,28%{transform:scale(1);animation-timing-function:cubic-bezier(.4,0,1,1);}
  29.5%{transform:scale(.8);animation-timing-function:cubic-bezier(.2,.9,.3,1.3);}
  33%,100%{transform:scale(1);}
}
@keyframes pr-cursor-click-rip{
  0%,28.6%{opacity:0;transform:scale(.25);}
  29.4%{opacity:1;transform:scale(.4);animation-timing-function:cubic-bezier(.15,.7,.3,1);}
  42%{opacity:0;transform:scale(2.4);}
  100%{opacity:0;transform:scale(2.4);}
}
@keyframes pr-cursor-click-press{
  0%,28.6%{transform:scale(1);animation-timing-function:cubic-bezier(.4,0,1,1);}
  30%{transform:scale(.94);animation-timing-function:cubic-bezier(.2,.9,.3,1.4);}
  34%,100%{transform:scale(1);}
}
@keyframes pr-cursor-click-hov{0%,22%{opacity:0;}27%,30%{opacity:1;}33%,100%{opacity:0;}}
@keyframes pr-cursor-click-l1{0%,30%{opacity:1;transform:translateY(0);}31.5%{opacity:0;transform:translateY(-.6cqw);}88%{opacity:0;transform:translateY(.6cqw);}92%,100%{opacity:1;transform:translateY(0);}}
@keyframes pr-cursor-click-sp{0%,31%{opacity:0;}32.5%,38%{opacity:1;}39.5%,100%{opacity:0;}}
@keyframes pr-cursor-click-spin{to{transform:rotate(360deg);}}
@keyframes pr-cursor-click-ok{0%,38%{opacity:0;}40.5%,86%{opacity:1;}91%,100%{opacity:0;}}
@keyframes pr-cursor-click-l2{
  0%,38.5%{opacity:0;transform:translateY(.7cqw) scale(.9);animation-timing-function:cubic-bezier(.2,.8,.2,1);}
  42%{opacity:1;transform:translateY(0) scale(1);}
  86%{opacity:1;transform:translateY(0);}
  89%,100%{opacity:0;transform:translateY(-.5cqw);}
}
@keyframes pr-cursor-click-lpa{0%,39%{opacity:1;transform:translateY(0);}41%,88%{opacity:0;transform:translateY(-100%);}91%,100%{opacity:1;transform:translateY(0);}}
@keyframes pr-cursor-click-lpb{0%,39%{opacity:0;transform:translateY(100%);}41.5%,88%{opacity:1;transform:translateY(0);}90%,100%{opacity:0;transform:translateY(0);}}
@keyframes pr-cursor-click-toast{
  0%,39%{opacity:0;transform:translate(-50%,3cqw) scale(.96);animation-timing-function:cubic-bezier(.16,1,.3,1);}
  49%{opacity:1;transform:translate(-50%,0) scale(1);}
  83%{opacity:1;transform:translate(-50%,0) scale(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}
  90%,100%{opacity:0;transform:translate(-50%,2cqw) scale(.98);}
}
.v-pr-cursor-click .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-cursor-click .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-cursor-click-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-cursor-click .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-cursor-click .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:600;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-cursor-click .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-cursor-click-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-cursor-click .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-cursor-click-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-cursor-click .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-cursor-click .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-cursor-click .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-cursor-click .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-cursor-click .mg-hl{margin-top:2.4cqw;font-size:9.4cqw;line-height:1.04}
  .v-pr-cursor-click .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-cursor-click .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-cursor-click .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-cursor-click .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-cursor-click .mg-hl{margin-top:1.2cqw;font-size:5.6cqw}
  .v-pr-cursor-click .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-cursor-click-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-cursor-click-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prSpotlight: SceneSpec = {
  id: "pr-spotlight",
  slug: "mg-pr-spotlight",
  name: "Spotlight Feature Tour",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "spotlight-cutout-tour",
  energy: "default",
  settle: 4.5,
  requiresScreenshot: true,
  colors: { ink: "#1C1712", accent: "#FF5A3C", secondary: "#FFD27A", paper: "#FF9A4D" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["spotlight", "tour", "features"],
  fields: [
    { key: "headline", label: "Headline", default: "Research that shows its work", maxChars: 40, role: "headline" },
    { key: "p1", label: "First highlight", default: "Answers with real numbers", maxChars: 28, role: "label" },
    { key: "p2", label: "Second highlight", default: "Every claim, cited", maxChars: 28, role: "label" },
    { key: "p3", label: "Third highlight", default: "Share in one click", maxChars: 28, role: "label" },
  ],
  html: `<div class="mg-design">
    <div class="layer base">
<div class="win">
        <div class="top">
          <span class="logo"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><b>Research hub</b><svg class="i" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>Q4 market scan
          <span class="tr t-c"><span class="avs"><i style="background:linear-gradient(135deg,#FFB86B,#FF6B6B)"></i><i style="background:linear-gradient(135deg,#7FD1FF,#4A7BFF)"></i><i style="background:linear-gradient(135deg,#C6F27A,#2FB872)"></i><span>+4</span></span><span class="share"><svg class="i" viewBox="0 0 24 24"><path d="M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>Share</span></span>
        </div>
        <div class="rail">
          <svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
          <svg class="i on" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>
          <svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7"/></svg>
        </div>
        <div class="chat">
          <div class="ub">What changed in competitor pricing this quarter?</div>
          <div class="who"><span class="logo"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><b>Lumen</b>read 12 sources in 4s</div>
          <div class="ah">Three shifts this quarter</div>
          <div class="bl">
            <div>Seat prices fell across the board <span class="cite">1</span><span class="cite">4</span></div>
            <div>Usage-based AI add-ons are now standard <span class="cite">2</span></div>
            <div>Annual discounts widened to 20% <span class="cite">3</span><span class="cite">7</span></div>
          </div>
          <div class="ins t-a">
            <div><div class="k">Median seat price, USD</div><div class="v">$14.20</div><span class="d">↓ 14% vs Q3</span></div>
            <div class="bars"><span><i style="height:4.6cqw"></i>Halcyon</span><span><i style="height:3.7cqw"></i>Quarry</span><span><i style="height:3.1cqw"></i>Northwind</span><span class="me"><i style="height:2.4cqw"></i>Lumen</span></div>
          </div>
          <div class="ask">Ask a follow-up…<span class="m">Lumen 2 · Deep</span><span class="go"><svg class="i" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span></div>
        </div>
        <div class="src">
          <div class="t-b">
            <div class="sh">Sources<span>12</span></div>
            <div class="sc" style="margin-top:.8cqw"><span class="fav" style="background:#2F6BFF">H</span><div><div class="t">Halcyon pricing update</div><div class="u">halcyon.io · Oct 2</div></div><span class="cite n">1</span></div>
            <div class="sc" style="margin-top:.8cqw"><span class="fav" style="background:#1F9E78">Q</span><div><div class="t">Quarry AI add-on launch</div><div class="u">quarry.so · Sep 18</div></div><span class="cite n">2</span></div>
            <div class="sc" style="margin-top:.8cqw"><span class="fav" style="background:#7C7E81">N</span><div><div class="t">Northwind annual plans</div><div class="u">northwind.dev · Sep 9</div></div><span class="cite n">3</span></div>
          </div>
          <div class="sc"><span class="fav" style="background:#E0A21B">G</span><div><div class="t">SaaS pricing index Q3</div><div class="u">PDF · 42 pages</div></div><span class="cite n">4</span></div>
          <div class="sc"><span class="fav" style="background:#1C1712">#</span><div><div class="t">#pricing-intel thread</div><div class="u">Team chat · 31 messages</div></div><span class="cite n">7</span></div>
        </div>
      </div>
    </div>
    <div class="dim"></div>
    <div class="gw"><div class="ring"></div></div>
    <div class="layer lit"><div class="win">
        <div class="top">
          <span class="logo"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><b>Research hub</b><svg class="i" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>Q4 market scan
          <span class="tr t-c"><span class="avs"><i style="background:linear-gradient(135deg,#FFB86B,#FF6B6B)"></i><i style="background:linear-gradient(135deg,#7FD1FF,#4A7BFF)"></i><i style="background:linear-gradient(135deg,#C6F27A,#2FB872)"></i><span>+4</span></span><span class="share"><svg class="i" viewBox="0 0 24 24"><path d="M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>Share</span></span>
        </div>
        <div class="rail">
          <svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
          <svg class="i on" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>
          <svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7"/></svg>
        </div>
        <div class="chat">
          <div class="ub">What changed in competitor pricing this quarter?</div>
          <div class="who"><span class="logo"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><b>Lumen</b>read 12 sources in 4s</div>
          <div class="ah">Three shifts this quarter</div>
          <div class="bl">
            <div>Seat prices fell across the board <span class="cite">1</span><span class="cite">4</span></div>
            <div>Usage-based AI add-ons are now standard <span class="cite">2</span></div>
            <div>Annual discounts widened to 20% <span class="cite">3</span><span class="cite">7</span></div>
          </div>
          <div class="ins t-a">
            <div><div class="k">Median seat price, USD</div><div class="v">$14.20</div><span class="d">↓ 14% vs Q3</span></div>
            <div class="bars"><span><i style="height:4.6cqw"></i>Halcyon</span><span><i style="height:3.7cqw"></i>Quarry</span><span><i style="height:3.1cqw"></i>Northwind</span><span class="me"><i style="height:2.4cqw"></i>Lumen</span></div>
          </div>
          <div class="ask">Ask a follow-up…<span class="m">Lumen 2 · Deep</span><span class="go"><svg class="i" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span></div>
        </div>
        <div class="src">
          <div class="t-b">
            <div class="sh">Sources<span>12</span></div>
            <div class="sc" style="margin-top:.8cqw"><span class="fav" style="background:#2F6BFF">H</span><div><div class="t">Halcyon pricing update</div><div class="u">halcyon.io · Oct 2</div></div><span class="cite n">1</span></div>
            <div class="sc" style="margin-top:.8cqw"><span class="fav" style="background:#1F9E78">Q</span><div><div class="t">Quarry AI add-on launch</div><div class="u">quarry.so · Sep 18</div></div><span class="cite n">2</span></div>
            <div class="sc" style="margin-top:.8cqw"><span class="fav" style="background:#7C7E81">N</span><div><div class="t">Northwind annual plans</div><div class="u">northwind.dev · Sep 9</div></div><span class="cite n">3</span></div>
          </div>
          <div class="sc"><span class="fav" style="background:#E0A21B">G</span><div><div class="t">SaaS pricing index Q3</div><div class="u">PDF · 42 pages</div></div><span class="cite n">4</span></div>
          <div class="sc"><span class="fav" style="background:#1C1712">#</span><div><div class="t">#pricing-intel thread</div><div class="u">Team chat · 31 messages</div></div><span class="cite n">7</span></div>
        </div>
      </div></div>
    </div>
<div class="mg-over"><div class="lbl">
      <div class="pill p1" data-21st-slot="p1"><span>1</span>{{p1}}</div>
      <div class="pill p2" data-21st-slot="p2"><span>2</span>{{p2}}</div>
      <div class="pill p3" data-21st-slot="p3"><span>3</span>{{p3}}</div>
    </div></div>
<div class="mg-head"><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>`,
  css: `
.v-pr-spotlight{color:var(--ink);font-family:var(--font-body)}
.v-pr-spotlight[data-backdrop="on"]{background:radial-gradient(50cqw 40cqw at 10% 0%,var(--secondary),transparent 70%),radial-gradient(60cqw 45cqw at 100% 100%,color-mix(in srgb,var(--accent) 75%,#B0206A),transparent 70%),linear-gradient(135deg,var(--paper),var(--accent) 55%,color-mix(in srgb,var(--accent) 70%,#C8206A))}
.v-pr-spotlight .mg-design,.v-pr-spotlight .mg-over{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(7.143cqw,8.214cqw) scale(0.8571);color:#1C1712}
@container (max-aspect-ratio: 4/5){.v-pr-spotlight .mg-design,.v-pr-spotlight .mg-over{transform:translate(-3.409cqw,73.489cqw) scale(1.0682)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-spotlight .mg-design,.v-pr-spotlight .mg-over{transform:translate(-2.273cqw,24.659cqw) scale(1.0455)}}

.v-pr-spotlight *{box-sizing:border-box;margin:0;}
.v-pr-spotlight .layer{position:absolute;inset:0;}
.v-pr-spotlight .i{width:1.1cqw;height:1.1cqw;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-spotlight .win{position:absolute;left:6cqw;top:5cqw;width:88cqw;height:49cqw;background:#FFFEFC;border-radius:1.4cqw;overflow:hidden;box-shadow:0 0 0 1px rgba(120,40,20,.08),0 2.6cqw 6cqw rgba(120,30,30,.28);display:grid;grid-template-columns:4.4cqw 1fr 29cqw;grid-template-rows:4.4cqw 1fr;}
.v-pr-spotlight .top{grid-column:1/4;display:flex;align-items:center;gap:.7cqw;padding:0 1.4cqw;border-bottom:1px solid #F0ECE6;font-size:1cqw;color:#8A8178;}
.v-pr-spotlight .logo{width:1.8cqw;height:1.8cqw;border-radius:.55cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 65%,#FFC070),var(--accent));display:grid;place-items:center;}
.v-pr-spotlight .logo svg{width:1.1cqw;height:1.1cqw;fill:#fff;}
.v-pr-spotlight .top b{color:#1C1712;font-weight:600;}
.v-pr-spotlight .top .tr{margin-left:auto;display:flex;align-items:center;gap:.9cqw;}
.v-pr-spotlight .avs{display:flex;}
.v-pr-spotlight .avs i{width:1.9cqw;height:1.9cqw;border-radius:50%;border:.16cqw solid #fff;margin-left:-.55cqw;}
.v-pr-spotlight .avs span{margin-left:.5cqw;font-size:.88cqw;}
.v-pr-spotlight .share{display:flex;align-items:center;gap:.45cqw;padding:.55cqw 1cqw;border-radius:.6cqw;background:#1C1712;color:#fff;font-weight:550;font-size:.95cqw;}
.v-pr-spotlight .share .i{width:.95cqw;height:.95cqw;}
.v-pr-spotlight .rail{display:flex;flex-direction:column;align-items:center;gap:1.35cqw;padding-top:1.6cqw;border-right:1px solid #F0ECE6;color:#A69C92;}
.v-pr-spotlight .rail .on{color:var(--accent);}
.v-pr-spotlight .chat{padding:1.6cqw 2.4cqw;display:flex;flex-direction:column;gap:1cqw;min-width:0;}
.v-pr-spotlight .ub{align-self:flex-end;background:#F4F0EA;padding:.75cqw 1.1cqw;border-radius:1.1cqw 1.1cqw .3cqw 1.1cqw;font-size:1cqw;}
.v-pr-spotlight .who{display:flex;align-items:center;gap:.6cqw;font-size:.9cqw;color:#8A8178;}
.v-pr-spotlight .who .logo{width:1.6cqw;height:1.6cqw;}
.v-pr-spotlight .who b{color:#1C1712;font-weight:600;}
.v-pr-spotlight .ah{font-size:1.45cqw;font-weight:650;letter-spacing:-.02em;}
.v-pr-spotlight .bl{display:flex;flex-direction:column;gap:.5cqw;font-size:.98cqw;color:#4A423A;}
.v-pr-spotlight .bl div{display:flex;align-items:center;gap:.5cqw;}
.v-pr-spotlight .bl div::before{content:"";width:.4cqw;height:.4cqw;border-radius:50%;background:var(--accent);flex:none;}
.v-pr-spotlight .cite{display:inline-grid;place-items:center;min-width:1.25cqw;height:1.25cqw;padding:0 .3cqw;border-radius:.35cqw;background:color-mix(in srgb,var(--accent) 12%,#fff);color:color-mix(in srgb,var(--accent) 85%,#000);font-size:.72cqw;font-weight:650;}
.v-pr-spotlight .ins{display:flex;gap:1.6cqw;align-items:flex-end;border:1px solid #F0E8DF;background:linear-gradient(180deg,#FFFDFB,#FFF7F1);border-radius:1.1cqw;padding:1.1cqw 1.3cqw;width:31cqw;}
.v-pr-spotlight .ins .k{font-size:.82cqw;color:#8A8178;}
.v-pr-spotlight .ins .v{font-size:2.2cqw;font-weight:650;letter-spacing:-.03em;margin-top:.3cqw;}
.v-pr-spotlight .ins .d{display:inline-block;margin-top:.4cqw;font-size:.75cqw;font-weight:650;color:color-mix(in srgb,var(--accent) 85%,#000);background:color-mix(in srgb,var(--accent) 12%,#fff);padding:.1cqw .45cqw;border-radius:1cqw;}
.v-pr-spotlight .bars{display:flex;align-items:flex-end;gap:.9cqw;height:6cqw;margin-left:auto;}
.v-pr-spotlight .bars span{display:flex;flex-direction:column;align-items:center;gap:.35cqw;font-size:.68cqw;color:#A69C92;}
.v-pr-spotlight .bars i{display:block;width:2.4cqw;border-radius:.4cqw .4cqw .15cqw .15cqw;background:#F1E6DA;}
.v-pr-spotlight .bars .me i{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 70%,#fff),var(--accent));}
.v-pr-spotlight .ask{margin-top:auto;margin-bottom:1.6cqw;display:flex;align-items:center;gap:.8cqw;height:3.6cqw;padding:0 .5cqw 0 1.2cqw;border-radius:1.1cqw;border:1px solid #EDE6DD;background:#fff;box-shadow:0 .4cqw 1.4cqw rgba(80,40,10,.06);font-size:1cqw;color:#A69C92;}
.v-pr-spotlight .ask .m{margin-left:auto;font-size:.82cqw;color:#6E655C;background:#F6F2EC;padding:.35cqw .7cqw;border-radius:1cqw;}
.v-pr-spotlight .ask .go{width:2.5cqw;height:2.5cqw;border-radius:.8cqw;background:var(--accent);color:#fff;display:grid;place-items:center;}
.v-pr-spotlight .src{background:#FBF8F4;border-left:1px solid #F0ECE6;padding:1.6cqw 1.5cqw;display:flex;flex-direction:column;gap:.8cqw;}
.v-pr-spotlight .sh{display:flex;align-items:center;justify-content:space-between;font-size:1.05cqw;font-weight:600;}
.v-pr-spotlight .sh span{font-size:.8cqw;font-weight:500;color:#8A8178;background:#F1EBE3;padding:.15cqw .55cqw;border-radius:1cqw;}
.v-pr-spotlight .sc{display:flex;gap:.8cqw;align-items:center;background:#fff;border:1px solid #F0E8DF;border-radius:.9cqw;padding:.8cqw .9cqw;}
.v-pr-spotlight .fav{width:2.2cqw;height:2.2cqw;border-radius:.6cqw;display:grid;place-items:center;color:#fff;font-weight:700;font-size:1cqw;flex:none;font-family:var(--font-display);}
.v-pr-spotlight .sc .t{font-size:.92cqw;font-weight:550;line-height:1.25;}
.v-pr-spotlight .sc .u{font-size:.75cqw;color:#A69C92;margin-top:.15cqw;}
.v-pr-spotlight .sc .n{margin-left:auto;align-self:flex-start;}
.v-pr-spotlight .dim{position:absolute;left:6cqw;top:5cqw;width:88cqw;height:49cqw;border-radius:1.4cqw;background:rgba(24,8,16,.74);opacity:0;animation:pr-spotlight-dim 6s linear infinite;}
.v-pr-spotlight .gw{position:absolute;inset:0;filter:drop-shadow(0 0 1.4cqw color-mix(in srgb,var(--secondary) 75%,transparent));opacity:0;animation:pr-spotlight-dim 6s linear infinite;}
.v-pr-spotlight .ring{position:absolute;inset:0;background:rgba(255,246,236,.95);animation:pr-spotlight-ring 6s linear infinite;}
.v-pr-spotlight .lit{animation:pr-spotlight-lit 6s linear infinite;}
.v-pr-spotlight .lbl{position:absolute;left:0;top:0;animation:pr-spotlight-lbl 6s linear infinite;}
.v-pr-spotlight .pill{position:absolute;left:0;top:0;display:flex;align-items:center;gap:.8cqw;white-space:nowrap;padding:.6cqw 1.3cqw .6cqw .6cqw;border-radius:2cqw;background:#fff;color:#1C1712;font-family:var(--font-display);font-weight:650;font-size:1.5cqw;letter-spacing:-.01em;box-shadow:0 1cqw 2.6cqw rgba(20,5,10,.4);opacity:0;}
.v-pr-spotlight .pill span{width:2.3cqw;height:2.3cqw;flex:none;border-radius:50%;display:grid;place-items:center;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 65%,#FFC070),var(--accent));color:#fff;font-size:1.3cqw;line-height:1.2;}
.v-pr-spotlight .p1{animation:pr-spotlight-p1 6s linear infinite;}
.v-pr-spotlight .p2{animation:pr-spotlight-p2 6s linear infinite;}
.v-pr-spotlight .p3{animation:pr-spotlight-p3 6s linear infinite;}
@keyframes pr-spotlight-dim{0%,5%{opacity:0;}13%,86%{opacity:1;}95%,100%{opacity:0;}}
@keyframes pr-spotlight-lit{
  0%,30%{clip-path:inset(25.3cqw 55.2cqw 18.65cqw 11.8cqw round 1.3cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  40%,60%{clip-path:inset(9.9cqw 6.6cqw 28.15cqw 65.7cqw round 1.3cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  70%,95%{clip-path:inset(5.1cqw 6.5cqw 47.15cqw 79.1cqw round 1.3cqw);}
  100%{clip-path:inset(25.3cqw 55.2cqw 18.65cqw 11.8cqw round 1.3cqw);}
}
@keyframes pr-spotlight-ring{
  0%,30%{clip-path:inset(24.95cqw 54.85cqw 18.3cqw 11.45cqw round 1.55cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  40%,60%{clip-path:inset(9.55cqw 6.25cqw 27.8cqw 65.35cqw round 1.55cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  70%,95%{clip-path:inset(4.75cqw 6.15cqw 46.8cqw 78.75cqw round 1.55cqw);}
  100%{clip-path:inset(24.95cqw 54.85cqw 18.3cqw 11.45cqw round 1.55cqw);}
}
@keyframes pr-spotlight-lbl{
  0%,30%{transform:translate(11.8cqw,38.9cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  40%,60%{transform:translate(65.7cqw,29.4cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  70%,95%{transform:translate(73.2cqw,10.3cqw);}
  100%{transform:translate(11.8cqw,38.9cqw);}
}
@keyframes pr-spotlight-p1{0%,8%{opacity:0;transform:translateY(1cqw) scale(.94);animation-timing-function:cubic-bezier(.2,.8,.2,1);}15%,29%{opacity:1;transform:none;}33%,100%{opacity:0;transform:none;}}
@keyframes pr-spotlight-p2{0%,36%{opacity:0;transform:translateY(.8cqw) scale(.96);animation-timing-function:cubic-bezier(.2,.8,.2,1);}42%,59%{opacity:1;transform:none;}63%,100%{opacity:0;transform:none;}}
@keyframes pr-spotlight-p3{0%,66%{opacity:0;transform:translateY(.8cqw) scale(.96);animation-timing-function:cubic-bezier(.2,.8,.2,1);}72%,86%{opacity:1;transform:none;}92%,100%{opacity:0;transform:translateY(-.4cqw);}}.v-pr-spotlight .pill{width:max-content;max-width:24cqw;white-space:normal;line-height:1.1}
@container (max-aspect-ratio: 4/5){
  .v-pr-spotlight .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-spotlight .lbl{animation:none;transform:none;left:8cqw;right:8cqw;top:auto;bottom:9cqh}
  .v-pr-spotlight .pill{left:0;top:auto;bottom:0;max-width:84cqw;font-size:6cqw;gap:2.6cqw;padding:2cqw 4.4cqw 2cqw 2cqw;border-radius:8cqw}
  .v-pr-spotlight .pill span{width:8.6cqw;height:8.6cqw;font-size:5.6cqw;flex:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-spotlight .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-spotlight .lbl{animation:none;transform:none;left:6cqw;right:6cqw;top:auto;bottom:5cqw}
  .v-pr-spotlight .pill{left:0;top:auto;bottom:0;max-width:88cqw;font-size:2.8cqw;gap:1.2cqw;padding:1cqw 2.2cqw 1cqw 1cqw;border-radius:4cqw}
  .v-pr-spotlight .pill span{width:3.6cqw;height:3.6cqw;font-size:1.9cqw;flex:none}
}

.v-pr-spotlight .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-spotlight .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-spotlight-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-spotlight .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-spotlight .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:700;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-spotlight .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-spotlight-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-spotlight .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-spotlight-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-spotlight .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-spotlight .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-spotlight .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-spotlight .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-spotlight .mg-hl{margin-top:2.4cqw;font-size:9.6cqw;line-height:1.04}
  .v-pr-spotlight .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-spotlight .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-spotlight .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-spotlight .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-spotlight .mg-hl{margin-top:1.2cqw;font-size:5.8cqw}
  .v-pr-spotlight .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-spotlight-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-spotlight-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prLoupe: SceneSpec = {
  id: "pr-loupe",
  slug: "mg-pr-loupe",
  name: "Loupe Over Table",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "loupe-magnify-row",
  energy: "calm",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#1E1A14", accent: "#D2461F", secondary: "#FFDD40", paper: "#ECE6DA" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["table", "loupe", "data"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Usage ledger \u00b7 October", maxChars: 30, role: "kicker" },
    { key: "headline", label: "Headline", default: "One account is quietly expanding", maxChars: 40, role: "headline" },
    { key: "cta", label: "Callout", default: "Halcyon Labs, up 38%", maxChars: 28, role: "caption" },
  ],
  html: `<div class="mg-design">
<div class="card">
      <div class="hd">
        <div><div class="tt">Usage ledger <span>October</span></div><div class="st">48 workspaces · tokens in millions · updated 4 min ago</div></div>
        <div class="chips"><span class="on">All plans</span><span>Enterprise</span><span>Team</span><span>Sort: Δ vs Sep</span></div>
      </div>
      <div class="tb">
        <div class="r h"><span>Workspace</span><span>Owner</span><span>Plan</span><span class="n">Seats</span><span class="n">Tokens</span><span>Δ vs Sep</span><span>Status</span></div>
        <div class="r"><span class="w"><i style="background:#2F6BFF"></i>Northwind Studio</span><span class="o">Ava Patel</span><span class="pl">Team</span><span class="n">42</span><span class="n">1.84</span><span class="dl"><b style="width:3.2cqw"></b>+12%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#1F9E78"></i>Quarry &amp; Co</span><span class="o">Leo Martins</span><span class="pl">Pro</span><span class="n">9</span><span class="n">0.62</span><span class="dl"><b style="width:1.1cqw"></b>+4%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#7C7E81"></i>Ostra Health</span><span class="o">Mina Okafor</span><span class="pl">Enterprise</span><span class="n">180</span><span class="n">3.07</span><span class="dl"><b style="width:2.4cqw"></b>+9%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#E0A21B"></i>Fieldnote</span><span class="o">Jonas Berg</span><span class="pl">Team</span><span class="n">27</span><span class="n">1.12</span><span class="dl neg"><b style="width:.9cqw"></b>−3%</span><span class="s rv">Review</span></div>
        <div class="r"><span class="w"><i style="background:var(--accent)"></i>Bramble Labs</span><span class="o">Iris Chen</span><span class="pl">Pro</span><span class="n">6</span><span class="n">0.31</span><span class="dl"><b style="width:5.4cqw"></b>+22%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#3A332A"></i>Kestrel Freight</span><span class="o">Omar Haddad</span><span class="pl">Team</span><span class="n">54</span><span class="n">1.96</span><span class="dl"><b style="width:1.9cqw"></b>+7%</span><span class="s">Active</span></div>
        <div class="r r7"><span class="w"><i style="background:#FF7A45"></i>Halcyon Labs</span><span class="o">Sofia Reyes</span><span class="pl">Enterprise</span><span class="n">96</span><span class="n">2.41</span><span class="dl"><b style="width:6cqw;background:#3FA266"></b>+38%</span><span class="s ex">Expanding</span></div>
        <div class="r"><span class="w"><i style="background:#2AA5C9"></i>Tidewater</span><span class="o">Noah Kim</span><span class="pl">Pro</span><span class="n">11</span><span class="n">0.48</span><span class="dl neg"><b style="width:1.6cqw"></b>−6%</span><span class="s rk">At risk</span></div>
        <div class="r"><span class="w"><i style="background:#B4467A"></i>Marrow Type</span><span class="o">Elena Rossi</span><span class="pl">Team</span><span class="n">31</span><span class="n">1.27</span><span class="dl"><b style="width:3.8cqw"></b>+15%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#14532D"></i>Lattice Bank</span><span class="o">Ben Adler</span><span class="pl">Enterprise</span><span class="n">210</span><span class="n">4.88</span><span class="dl"><b style="width:1.4cqw"></b>+5%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#6B7F2A"></i>Pinecrest</span><span class="o">Hana Sato</span><span class="pl">Pro</span><span class="n">8</span><span class="n">0.29</span><span class="dl"><b style="width:.6cqw"></b>+2%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#56575B"></i>Corvid Audio</span><span class="o">Max Laurent</span><span class="pl">Team</span><span class="n">19</span><span class="n">0.77</span><span class="dl"><b style="width:2.9cqw"></b>+11%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#0F766E"></i>Solace Care</span><span class="o">Ruth Mensah</span><span class="pl">Enterprise</span><span class="n">120</span><span class="n">2.66</span><span class="dl"><b style="width:.9cqw"></b>+3%</span><span class="s rv">Review</span></div>
        <div class="r"><span class="w"><i style="background:#9A6B12"></i>Umber &amp; Oak</span><span class="o">Theo Grant</span><span class="pl">Pro</span><span class="n">5</span><span class="n">0.18</span><span class="dl"><b style="width:4.6cqw"></b>+31%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#5B6CFF"></i>Gilded Fern</span><span class="o">Priya Nair</span><span class="pl">Team</span><span class="n">23</span><span class="n">0.94</span><span class="dl"><b style="width:2.2cqw"></b>+8%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#334155"></i>Sable Systems</span><span class="o">Kai Moreno</span><span class="pl">Enterprise</span><span class="n">148</span><span class="n">3.52</span><span class="dl neg"><b style="width:1.2cqw"></b>−2%</span><span class="s rv">Review</span></div>
      </div>
    </div>
    <div class="loupe">
      <div class="handle"></div>
      <div class="lens"><div class="zoom"><div class="card">
      <div class="hd">
        <div><div class="tt">Usage ledger <span>October</span></div><div class="st">48 workspaces · tokens in millions · updated 4 min ago</div></div>
        <div class="chips"><span class="on">All plans</span><span>Enterprise</span><span>Team</span><span>Sort: Δ vs Sep</span></div>
      </div>
      <div class="tb">
        <div class="r h"><span>Workspace</span><span>Owner</span><span>Plan</span><span class="n">Seats</span><span class="n">Tokens</span><span>Δ vs Sep</span><span>Status</span></div>
        <div class="r"><span class="w"><i style="background:#2F6BFF"></i>Northwind Studio</span><span class="o">Ava Patel</span><span class="pl">Team</span><span class="n">42</span><span class="n">1.84</span><span class="dl"><b style="width:3.2cqw"></b>+12%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#1F9E78"></i>Quarry &amp; Co</span><span class="o">Leo Martins</span><span class="pl">Pro</span><span class="n">9</span><span class="n">0.62</span><span class="dl"><b style="width:1.1cqw"></b>+4%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#7C7E81"></i>Ostra Health</span><span class="o">Mina Okafor</span><span class="pl">Enterprise</span><span class="n">180</span><span class="n">3.07</span><span class="dl"><b style="width:2.4cqw"></b>+9%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#E0A21B"></i>Fieldnote</span><span class="o">Jonas Berg</span><span class="pl">Team</span><span class="n">27</span><span class="n">1.12</span><span class="dl neg"><b style="width:.9cqw"></b>−3%</span><span class="s rv">Review</span></div>
        <div class="r"><span class="w"><i style="background:var(--accent)"></i>Bramble Labs</span><span class="o">Iris Chen</span><span class="pl">Pro</span><span class="n">6</span><span class="n">0.31</span><span class="dl"><b style="width:5.4cqw"></b>+22%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#3A332A"></i>Kestrel Freight</span><span class="o">Omar Haddad</span><span class="pl">Team</span><span class="n">54</span><span class="n">1.96</span><span class="dl"><b style="width:1.9cqw"></b>+7%</span><span class="s">Active</span></div>
        <div class="r r7"><span class="w"><i style="background:#FF7A45"></i>Halcyon Labs</span><span class="o">Sofia Reyes</span><span class="pl">Enterprise</span><span class="n">96</span><span class="n">2.41</span><span class="dl"><b style="width:6cqw;background:#3FA266"></b>+38%</span><span class="s ex">Expanding</span></div>
        <div class="r"><span class="w"><i style="background:#2AA5C9"></i>Tidewater</span><span class="o">Noah Kim</span><span class="pl">Pro</span><span class="n">11</span><span class="n">0.48</span><span class="dl neg"><b style="width:1.6cqw"></b>−6%</span><span class="s rk">At risk</span></div>
        <div class="r"><span class="w"><i style="background:#B4467A"></i>Marrow Type</span><span class="o">Elena Rossi</span><span class="pl">Team</span><span class="n">31</span><span class="n">1.27</span><span class="dl"><b style="width:3.8cqw"></b>+15%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#14532D"></i>Lattice Bank</span><span class="o">Ben Adler</span><span class="pl">Enterprise</span><span class="n">210</span><span class="n">4.88</span><span class="dl"><b style="width:1.4cqw"></b>+5%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#6B7F2A"></i>Pinecrest</span><span class="o">Hana Sato</span><span class="pl">Pro</span><span class="n">8</span><span class="n">0.29</span><span class="dl"><b style="width:.6cqw"></b>+2%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#56575B"></i>Corvid Audio</span><span class="o">Max Laurent</span><span class="pl">Team</span><span class="n">19</span><span class="n">0.77</span><span class="dl"><b style="width:2.9cqw"></b>+11%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#0F766E"></i>Solace Care</span><span class="o">Ruth Mensah</span><span class="pl">Enterprise</span><span class="n">120</span><span class="n">2.66</span><span class="dl"><b style="width:.9cqw"></b>+3%</span><span class="s rv">Review</span></div>
        <div class="r"><span class="w"><i style="background:#9A6B12"></i>Umber &amp; Oak</span><span class="o">Theo Grant</span><span class="pl">Pro</span><span class="n">5</span><span class="n">0.18</span><span class="dl"><b style="width:4.6cqw"></b>+31%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#5B6CFF"></i>Gilded Fern</span><span class="o">Priya Nair</span><span class="pl">Team</span><span class="n">23</span><span class="n">0.94</span><span class="dl"><b style="width:2.2cqw"></b>+8%</span><span class="s">Active</span></div>
        <div class="r"><span class="w"><i style="background:#334155"></i>Sable Systems</span><span class="o">Kai Moreno</span><span class="pl">Enterprise</span><span class="n">148</span><span class="n">3.52</span><span class="dl neg"><b style="width:1.2cqw"></b>−2%</span><span class="s rv">Review</span></div>
      </div>
    </div></div></div>
      <div class="rim"></div>
    </div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-loupe{color:var(--ink);font-family:var(--font-body)}
.v-pr-loupe[data-backdrop="on"]{background:var(--paper) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .35 0 0 0 0 .3 0 0 0 0 .22 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")}
.v-pr-loupe .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(8.0cqw,8.3cqw) scale(0.84);color:#1E1A14}
@container (max-aspect-ratio: 4/5){.v-pr-loupe .mg-design{transform:translate(-2.222cqw,73.667cqw) scale(1.0444)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-loupe .mg-design{transform:translate(-1.111cqw,24.833cqw) scale(1.0222)}}

.v-pr-loupe *{box-sizing:border-box;margin:0;}
.v-pr-loupe .card{position:absolute;left:5cqw;top:5cqw;width:90cqw;height:50cqw;overflow:hidden;background:#FBF9F4;border:1px solid #DFD7C6;border-radius:1.2cqw;padding:2.2cqw 2.6cqw;box-shadow:0 .3cqw .8cqw rgba(70,50,20,.06),0 2cqw 5cqw rgba(70,50,20,.12);}
.v-pr-loupe .hd{display:flex;align-items:flex-end;justify-content:space-between;}
.v-pr-loupe .tt{font-family:var(--font-display);font-size:3.3cqw;line-height:1;letter-spacing:-.01em;}
.v-pr-loupe .tt span{font-style:italic;color:var(--accent);}
.v-pr-loupe .st{font-size:.95cqw;color:#8C8272;margin-top:.6cqw;}
.v-pr-loupe .chips{display:flex;gap:.6cqw;font-size:.88cqw;}
.v-pr-loupe .chips span{padding:.45cqw .9cqw;border-radius:2cqw;border:1px solid #DED6C5;color:#5A5246;background:#fff;}
.v-pr-loupe .chips .on{background:#1E1A14;color:#FBF9F4;border-color:#1E1A14;}
.v-pr-loupe .tb{margin-top:1.6cqw;}
.v-pr-loupe .r{display:grid;grid-template-columns:19cqw 14cqw 9.5cqw 6cqw 8.5cqw 14cqw 1fr;align-items:center;height:2.4cqw;border-bottom:1px solid #EEE8DC;font-size:.98cqw;}
.v-pr-loupe .r.h{height:2.2cqw;font-size:.78cqw;color:#9A907F;border-bottom:1px solid #DED6C5;letter-spacing:.02em;}
.v-pr-loupe .w{display:flex;align-items:center;gap:.7cqw;font-weight:550;}
.v-pr-loupe .w i{width:1.4cqw;height:1.4cqw;border-radius:.35cqw;flex:none;}
.v-pr-loupe .o{color:#5A5246;}
.v-pr-loupe .pl{font-size:.82cqw;color:#5A5246;}
.v-pr-loupe .n{font-family:var(--font-mono);font-size:.9cqw;text-align:right;padding-right:1.6cqw;}
.v-pr-loupe .dl{display:flex;align-items:center;gap:.6cqw;font-family:var(--font-mono);font-size:.88cqw;color:#2F7D4F;}
.v-pr-loupe .dl b{display:block;height:.5cqw;border-radius:1cqw;background:#9BCBA9;}
.v-pr-loupe .dl.neg{color:#C2410C;}
.v-pr-loupe .dl.neg b{background:#F2B79A;}
.v-pr-loupe .s{justify-self:start;font-size:.78cqw;padding:.18cqw .6cqw;border-radius:2cqw;background:#EAF3EC;color:#2F7D4F;}
.v-pr-loupe .s.rv{background:#F6EEDC;color:#9A6B12;}
.v-pr-loupe .s.rk{background:#FBE7DE;color:#C2410C;}
.v-pr-loupe .s.ex{background:#1E1A14;color:#FBF9F4;}
.v-pr-loupe .loupe{position:absolute;left:0;top:0;width:20cqw;height:20cqw;animation:pr-loupe-move 6s linear infinite;}
.v-pr-loupe .handle{position:absolute;left:15.6cqw;top:15.6cqw;width:9cqw;height:2.6cqw;border-radius:1.3cqw;background:linear-gradient(180deg,#3A332A,#15120E);transform:rotate(45deg);transform-origin:0 50%;box-shadow:0 1cqw 2cqw rgba(40,25,5,.35);}
.v-pr-loupe .lens{position:absolute;inset:0;border-radius:50%;overflow:hidden;background:var(--paper);box-shadow:0 1.6cqw 3.6cqw rgba(50,30,5,.32),0 .4cqw .8cqw rgba(50,30,5,.2);}
.v-pr-loupe .zoom{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;animation:pr-loupe-zoom 6s linear infinite;}
.v-pr-loupe .zoom .r7{background:linear-gradient(transparent 12%,color-mix(in srgb,var(--secondary) 60%,transparent) 12%,color-mix(in srgb,var(--secondary) 60%,transparent) 88%,transparent 88%);}
.v-pr-loupe .zoom .r7 .dl{color:var(--accent);font-weight:700;}
.v-pr-loupe .rim{position:absolute;inset:-.1cqw;border-radius:50%;border:.75cqw solid #1E1A14;box-shadow:inset 0 0 0 .18cqw rgba(255,255,255,.18),inset 0 .6cqw 1.6cqw rgba(0,0,0,.25);background:radial-gradient(60% 45% at 30% 22%,rgba(255,255,255,.38),rgba(255,255,255,0) 70%);}
.v-pr-loupe .rim::after{content:"";position:absolute;inset:-.75cqw;border-radius:50%;background:conic-gradient(from 210deg,rgba(255,255,255,0),rgba(255,255,255,.35) 12%,rgba(255,255,255,0) 26%);-webkit-mask:radial-gradient(closest-side,transparent 92%,#000 93%);mask:radial-gradient(closest-side,transparent 92%,#000 93%);}
@keyframes pr-loupe-move{
  0%,8%{transform:translate(10cqw,10cqw);animation-timing-function:cubic-bezier(.65,0,.3,1);}
  38%,70%{transform:translate(60.5cqw,21.98cqw);animation-timing-function:cubic-bezier(.5,0,.5,1);}
  84%{transform:translate(30cqw,34cqw);animation-timing-function:cubic-bezier(.4,0,.3,1);}
  100%{transform:translate(10cqw,10cqw);}
}
@keyframes pr-loupe-zoom{
  0%,8%{transform:translate(-32cqw,-32cqw) scale(2.1);animation-timing-function:cubic-bezier(.65,0,.3,1);}
  38%,70%{transform:translate(-138.05cqw,-57.16cqw) scale(2.1);animation-timing-function:cubic-bezier(.5,0,.5,1);}
  84%{transform:translate(-74cqw,-82.4cqw) scale(2.1);animation-timing-function:cubic-bezier(.4,0,.3,1);}
  100%{transform:translate(-32cqw,-32cqw) scale(2.1);}
}
.v-pr-loupe .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-loupe .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-loupe-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-loupe .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-loupe .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:400;font-size:3.6cqw;line-height:1.06;letter-spacing:-.01em;color:var(--ink)}
.v-pr-loupe .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-loupe-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-loupe .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-loupe-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-loupe .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-loupe .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-loupe .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-loupe .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-loupe .mg-hl{margin-top:2.4cqw;font-size:11cqw;line-height:1.04}
  .v-pr-loupe .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-loupe .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-loupe .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-loupe .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-loupe .mg-hl{margin-top:1.2cqw;font-size:6.6cqw}
  .v-pr-loupe .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-loupe-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-loupe-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prCallouts: SceneSpec = {
  id: "pr-callouts",
  slug: "mg-pr-callouts",
  name: "Hand-Drawn Callouts",
  kind: "scene",
  job: "product-ui",
  language: "hand-drawn",
  mechanic: "hand-drawn-callouts",
  energy: "default",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#18210F", accent: "#EE4B1F", secondary: "#FFD60A", paper: "#DCE5D2" },
  fonts: { display: "Caveat", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.accent",
  tags: ["annotations", "handwriting", "arrows"],
  fields: [
    { key: "headline", label: "Headline", default: "Your board update, written for you", maxChars: 40, role: "headline" },
    { key: "n1", label: "First note", default: "just ask, in plain English", maxChars: 30, role: "label" },
    { key: "n2", label: "Second note", default: "every claim links to its source", maxChars: 34, role: "label" },
    { key: "n3", label: "Third note", default: "one click and the whole team has it", maxChars: 38, role: "label" },
  ],
  html: `<div class="mg-design">
    <div class="app">
      <div class="win">
        <div class="top">
          <span class="lights"><i></i><i></i><i></i></span>
          <span class="cmd"><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>Ask Lumen anything…<span class="k">⌘K</span></span>
        </div>
        <div class="side">
          <span><svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>Home</span>
          <span class="on"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>Docs</span>
          <span><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>Agents</span>
          <span><svg class="i" viewBox="0 0 24 24"><path d="M3 13h5l1.5 3h5l1.5-3h5"/><path d="M5.5 5h13l2.5 8v6H3v-6z"/></svg>Inbox</span>
        </div>
        <div class="doc">
          <div class="dt">Q3 board update</div>
          <div class="dm"><b></b>Draft · written with Lumen · 3 sources</div>
          <div class="ln"><span class="tx">Revenue grew 18% QoQ to $4.2M ARR, led by Team plans in EMEA.</span><span class="ch c1"><i style="background:#787A7D"></i>Billing</span></div>
          <div class="ln"><span class="tx">Churn fell to 1.9% after the onboarding revamp shipped in July.</span><span class="ch"><i style="background:#5E6AD2"></i>Roadmap</span></div>
          <div class="ln"><span class="tx">Six of eight open roles are filled; design lead starts Oct 14.</span><span class="ch"><i style="background:#E5E5E5"></i>Wiki</span></div>
          <div class="kp"><div>ARR<b>$4.2M</b><span>+18% QoQ</span></div><div>Logo churn<b>1.9%</b><span>−0.7 pt</span></div><div>Open roles<b>6 / 8</b><span>filled</span></div></div>
          <div class="ft"><span class="who"><i></i>Maya · edited just now</span><span class="gh">Export</span><span class="sh"><svg class="i" viewBox="0 0 24 24"><path d="M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>Share</span></div>
        </div>
      </div>
      <div class="fade">
        <svg class="ink" viewBox="0 0 1000 562.5">
          <path class="a1" pathLength="1" d="M 212 90 C 252 70, 310 76, 348 106"/>
          <path class="h1" pathLength="1" d="M 340.8 89.5 L 348 106 L 330.1 104"/>
          <path class="m1" pathLength="1" d="M 384 103 C 450 92, 580 92, 628 104 C 652 112, 646 128, 600 132 C 520 139, 420 138, 378 130 C 352 124, 356 110, 392 100"/>
          <path class="a2" pathLength="1" d="M 776 297 C 755 297, 748 268, 754 230"/>
          <path class="h2" pathLength="1" d="M 743.3 243.2 L 754 230 L 760.1 245.9"/>
          <path class="m2" pathLength="1" d="M 690 199 C 712 190, 748 194, 750 208 C 752 224, 720 230, 694 226 C 674 222, 672 204, 700 197"/>
          <path class="a3" pathLength="1" d="M 232 458 C 300 540, 560 545, 690 482"/>
          <path class="h3" pathLength="1" d="M 672.1 480.7 L 690 482 L 679.9 496.9"/>
          <path class="m3" pathLength="1" d="M 672 438 C 700 428, 748 432, 752 446 C 756 462, 720 470, 690 467 C 664 464, 658 448, 680 437"/>
        </svg>
        </div>
    </div></div>
<div class="mg-over"><div class="app"><div class="fade"><div class="note n1" data-21st-slot="n1">{{n1|words}}</div>
<div class="note n2" data-21st-slot="n2">{{n2|words}}</div>
<div class="note n3" data-21st-slot="n3">{{n3|words}}</div></div></div></div>
<div class="mg-head"><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>`,
  css: `
.v-pr-callouts{color:var(--ink);font-family:var(--font-body)}
.v-pr-callouts[data-backdrop="on"]{background:radial-gradient(70cqw 50cqw at 50% 45%,color-mix(in srgb,var(--paper) 70%,#fff),var(--paper) 80%)}
.v-pr-callouts .mg-design,.v-pr-callouts .mg-over{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(8.0cqw,8.3cqw) scale(0.84);color:#ECEBF0}
@container (max-aspect-ratio: 4/5){.v-pr-callouts .mg-design,.v-pr-callouts .mg-over{transform:translate(-38.5cqw,40.3cqw) scale(1.77)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-callouts .mg-design,.v-pr-callouts .mg-over{transform:translate(1.064cqw,26.138cqw) scale(0.9787)}}

.v-pr-callouts *{box-sizing:border-box;margin:0;}
.v-pr-callouts .i{width:1cqw;height:1cqw;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-callouts .app{position:absolute;inset:0;animation:pr-callouts-breathe 6s ease-in-out infinite;transform-origin:50% 50%;}
.v-pr-callouts .win{position:absolute;left:24cqw;top:10cqw;width:52cqw;height:37.5cqw;background:#15161B;border-radius:1.2cqw;overflow:hidden;box-shadow:0 0 0 1px rgba(0,0,0,.4),0 .5cqw 1cqw rgba(30,50,20,.15),0 2.4cqw 5cqw rgba(30,50,20,.3);display:grid;grid-template-columns:9.5cqw 1fr;grid-template-rows:3.6cqw 1fr;}
.v-pr-callouts .top{grid-column:1/3;display:flex;align-items:center;padding:0 1.1cqw;border-bottom:1px solid rgba(255,255,255,.06);position:relative;}
.v-pr-callouts .lights{display:flex;gap:.45cqw;}
.v-pr-callouts .lights i{width:.7cqw;height:.7cqw;border-radius:50%;background:#34353D;}
.v-pr-callouts .cmd{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:24cqw;height:2.2cqw;display:flex;align-items:center;gap:.6cqw;padding:0 .5cqw 0 .8cqw;border-radius:.6cqw;background:#202128;border:1px solid rgba(255,255,255,.07);font-size:.85cqw;color:#8D8E99;}
.v-pr-callouts .cmd .k{margin-left:auto;font-size:.72cqw;color:#A9AAB4;background:#2B2C34;padding:.1cqw .4cqw;border-radius:.3cqw;}
.v-pr-callouts .side{padding:1.2cqw .8cqw;display:flex;flex-direction:column;gap:.3cqw;font-size:.82cqw;color:#8D8E99;border-right:1px solid rgba(255,255,255,.05);}
.v-pr-callouts .side span{display:flex;align-items:center;gap:.55cqw;padding:.4cqw .5cqw;border-radius:.45cqw;}
.v-pr-callouts .side .on{background:#22232A;color:#ECEBF0;}
.v-pr-callouts .doc{padding:1.8cqw 2.4cqw 1.4cqw;display:flex;flex-direction:column;min-width:0;}
.v-pr-callouts .dt{font-size:1.75cqw;font-weight:650;letter-spacing:-.02em;}
.v-pr-callouts .dm{display:flex;align-items:center;gap:.5cqw;font-size:.78cqw;color:#7C7D88;margin-top:.5cqw;}
.v-pr-callouts .dm b{width:.5cqw;height:.5cqw;border-radius:50%;background:#B8F35A;}
.v-pr-callouts .ln{display:flex;align-items:flex-start;gap:.6cqw;font-size:.92cqw;line-height:1.55;color:#C8CACE;margin-top:1.05cqw;}
.v-pr-callouts .ln .tx{flex:1;}
.v-pr-callouts .ch{display:inline-flex;align-items:center;gap:.35cqw;flex:none;font-size:.72cqw;font-weight:550;color:#ECEBF0;background:#24252D;border:1px solid rgba(255,255,255,.08);padding:.15cqw .5cqw .15cqw .3cqw;border-radius:.45cqw;margin-top:.15cqw;}
.v-pr-callouts .ch i{width:.9cqw;height:.9cqw;border-radius:.25cqw;}
.v-pr-callouts .kp{display:grid;grid-template-columns:repeat(3,1fr);gap:.8cqw;margin-top:1.5cqw;}
.v-pr-callouts .kp div{background:#1C1D23;border:1px solid rgba(255,255,255,.06);border-radius:.7cqw;padding:.8cqw .9cqw;font-size:.72cqw;color:#7C7D88;}
.v-pr-callouts .kp b{display:block;font-size:1.4cqw;font-weight:650;color:#ECEBF0;letter-spacing:-.02em;margin:.25cqw 0 .15cqw;}
.v-pr-callouts .kp span{color:#B8F35A;font-weight:600;}
.v-pr-callouts .ft{margin-top:auto;display:flex;align-items:center;gap:.6cqw;font-size:.85cqw;}
.v-pr-callouts .ft .who{display:flex;align-items:center;gap:.45cqw;color:#7C7D88;margin-right:auto;}
.v-pr-callouts .ft .who i{width:1.4cqw;height:1.4cqw;border-radius:50%;background:linear-gradient(135deg,#FFC78A,#F07A5A);}
.v-pr-callouts .gh{padding:.5cqw .9cqw;border-radius:.55cqw;color:#C8CACE;background:#22232A;}
.v-pr-callouts .sh{display:flex;align-items:center;gap:.4cqw;padding:.5cqw 1cqw;border-radius:.55cqw;background:#B8F35A;color:#15161B;font-weight:600;}
.v-pr-callouts .ink{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}
.v-pr-callouts .ink path{fill:none;stroke:var(--accent);stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1 1.2;stroke-dashoffset:1.1;}
.v-pr-callouts .ink .a1{animation:pr-callouts-a1 6s linear infinite;}
.v-pr-callouts .ink .h1{animation:pr-callouts-h1 6s linear infinite;}
.v-pr-callouts .ink .m1{animation:pr-callouts-m1 6s linear infinite;}
.v-pr-callouts .ink .a2{animation:pr-callouts-a2 6s linear infinite;}
.v-pr-callouts .ink .h2{animation:pr-callouts-h2 6s linear infinite;}
.v-pr-callouts .ink .m2{animation:pr-callouts-m2 6s linear infinite;}
.v-pr-callouts .ink .a3{animation:pr-callouts-a3 6s linear infinite;}
.v-pr-callouts .ink .h3{animation:pr-callouts-h3 6s linear infinite;}
.v-pr-callouts .ink .m3{animation:pr-callouts-m3 6s linear infinite;}
.v-pr-callouts .note{position:absolute;font-family:var(--font-display);font-weight:600;font-size:3cqw;line-height:.95;color:var(--accent);width:19cqw;}
.v-pr-callouts .note span{display:block;}
.v-pr-callouts .n1{left:3.5cqw;top:5.5cqw;transform:rotate(-4deg);animation:pr-callouts-n1 6s linear infinite;}
.v-pr-callouts .n2{left:78.6cqw;top:27.6cqw;transform:rotate(3deg);animation:pr-callouts-n2 6s linear infinite;}
.v-pr-callouts .n3{left:3.5cqw;top:41cqw;transform:rotate(-3deg);animation:pr-callouts-n3 6s linear infinite;}
.v-pr-callouts .note u{text-decoration:none;background:linear-gradient(transparent 58%,color-mix(in srgb,var(--secondary) 75%,transparent) 58%,color-mix(in srgb,var(--secondary) 75%,transparent) 92%,transparent 92%);padding:0 .2cqw;}
.v-pr-callouts .fade{position:absolute;inset:0;animation:pr-callouts-out 6s linear infinite;}
@keyframes pr-callouts-breathe{0%,100%{transform:scale(1);}50%{transform:scale(1.015);}}
@keyframes pr-callouts-out{0%,85%{opacity:1;transform:none;}94%{opacity:0;transform:translateY(-.6cqw);}95%,100%{opacity:0;transform:none;}}
@keyframes pr-callouts-n1{0%,3%{clip-path:inset(-20% 100% -20% 0);animation-timing-function:cubic-bezier(.4,0,.6,1);}12%,100%{clip-path:inset(-20% -5% -20% 0);}}
@keyframes pr-callouts-a1{0%,11%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.5,0,.3,1);}17%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-h1{0%,16.5%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.3,0,.3,1);}18.5%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-m1{0%,17%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.4,0,.3,1);}22%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-n2{0%,19%{clip-path:inset(-20% 100% -20% 0);animation-timing-function:cubic-bezier(.4,0,.6,1);}28%,100%{clip-path:inset(-20% -5% -20% 0);}}
@keyframes pr-callouts-a2{0%,27%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.5,0,.3,1);}33%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-h2{0%,32.5%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.3,0,.3,1);}34.5%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-m2{0%,33%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.4,0,.3,1);}37%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-n3{0%,33%{clip-path:inset(-20% 100% -20% 0);animation-timing-function:cubic-bezier(.4,0,.6,1);}41%,100%{clip-path:inset(-20% -5% -20% 0);}}
@keyframes pr-callouts-a3{0%,40%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.5,0,.3,1);}46%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-h3{0%,45.5%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.3,0,.3,1);}47.2%,100%{stroke-dashoffset:0;}}
@keyframes pr-callouts-m3{0%,45%{stroke-dashoffset:1.1;animation-timing-function:cubic-bezier(.4,0,.3,1);}49%,100%{stroke-dashoffset:0;}}.v-pr-callouts .note .w{display:inline}
.v-pr-callouts .note .w:last-child{background:linear-gradient(transparent 58%,color-mix(in srgb,var(--secondary) 75%,transparent) 58%,color-mix(in srgb,var(--secondary) 75%,transparent) 92%,transparent 92%);padding:0 .15em}
@container (max-aspect-ratio: 4/5){
  .v-pr-callouts .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-callouts .ink .a1,.v-pr-callouts .ink .a2,.v-pr-callouts .ink .a3,.v-pr-callouts .ink .h1,.v-pr-callouts .ink .h2,.v-pr-callouts .ink .h3{display:none}
  .v-pr-callouts .note{width:84cqw;left:8cqw;font-size:6.6cqw}
  .v-pr-callouts .n1{top:40cqw}
  .v-pr-callouts .n2{top:130cqw;left:12cqw}
  .v-pr-callouts .n3{top:146cqw}
}

.v-pr-callouts .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-callouts .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-callouts-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-callouts .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-callouts .mg-hl{margin-top:.5cqw;font-family:var(--font-body);font-weight:600;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-callouts .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-callouts-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-callouts .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-callouts-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-callouts .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-callouts .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-callouts .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-callouts .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-callouts .mg-hl{margin-top:2.4cqw;font-size:8.4cqw;line-height:1.04}
  .v-pr-callouts .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-callouts .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-callouts .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-callouts .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-callouts .mg-hl{margin-top:1.2cqw;font-size:5.4cqw}
  .v-pr-callouts .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-callouts-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-callouts-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prPromptResult: SceneSpec = {
  id: "pr-prompt-result",
  slug: "mg-pr-prompt-result",
  name: "Prompt To Result",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "prompt-type-to-build",
  energy: "default",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#ECEEF2", accent: "#3D63FF", secondary: "#3BC8FF", paper: "#050507" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["prompt", "ai", "build"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen Build", maxChars: 28, role: "kicker" },
    { key: "prompt", label: "Prompt", default: "Build a launch page for Lumen: hero, pricing, FAQ", maxChars: 56, role: "body" },
    { key: "cta", label: "Call to action", default: "Built in 6.2 seconds", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="dots"></div>
    <div class="aur"></div>
    <div class="res">
      <div class="rh"><span class="dt"><i></i><i></i><i></i></span><span class="url">lumen.app/launch</span><span class="stt"><span class="b1"><i></i>Building · 4 sections</span><span class="b2"><svg class="i" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>Built in 6.2s</span></span></div>
      <div class="pg">
        <div class="nav"><b><i></i>Lumen</b><span>Product</span><span>Pricing</span><span>Docs</span><span class="cta">Get started</span></div>
        <div class="hero">
          <div class="ht"><div class="h">Think in <span>light.</span></div><div class="s">Your team's knowledge, answered in seconds.</div><div class="bt"><span>Start free</span><span>Watch the film</span></div></div>
          <div class="art"><i style="width:13cqw;height:13cqw"></i><i style="width:9cqw;height:9cqw"></i><i class="o"></i></div>
        </div>
        <div class="prc">
          <div class="pc c1"><b>Free</b><div class="pr">$0<span> / seat</span></div><div class="f">100 answers a month</div><div class="f">3 connected sources</div><div class="f">Community support</div></div>
          <div class="pc hi c2"><b>Pro <span class="tag">Popular</span></b><div class="pr">$18<span> / seat</span></div><div class="f">Unlimited answers</div><div class="f">Agents and live canvas</div><div class="f">Priority models</div></div>
          <div class="pc c3"><b>Team</b><div class="pr">$32<span> / seat</span></div><div class="f">SSO and audit log</div><div class="f">Private model routing</div><div class="f">Dedicated success lead</div></div>
        </div>
        <div class="faq"><span>Does Lumen train on our data?</span><span>Can we bring our own model?</span></div>
        <div class="scan"></div>
      </div>
    </div>
    </div>
<div class="mg-over"><div class="bar">
      <svg class="spk" viewBox="0 0 24 24"><defs><linearGradient id="pr-prompt-result-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--secondary)"/><stop offset=".55" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#FF803D"/></linearGradient></defs><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z" fill="url(#pr-prompt-result-g)"/></svg>
      <div class="fld"><span class="ph">Describe what you want to build…</span><span class="ty" data-21st-slot="prompt">{{prompt|words}}<span class="car"><i></i></span></span></div>
      <span class="send"><svg class="i" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span>
    </div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-prompt-result{color:var(--ink);font-family:var(--font-body)}
.v-pr-prompt-result[data-backdrop="on"]{background:var(--paper)}
.v-pr-prompt-result[data-backdrop="off"] .dots,.v-pr-prompt-result[data-backdrop="off"] .aur{display:none}
.v-pr-prompt-result .mg-design,.v-pr-prompt-result .mg-over{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(0cqw,0cqw) scale(1)}
@container (max-aspect-ratio: 4/5){.v-pr-prompt-result .mg-design,.v-pr-prompt-result .mg-over{transform:translate(-21.212cqw,60.288cqw) scale(1.4242)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-prompt-result .mg-design,.v-pr-prompt-result .mg-over{transform:translate(-16.425cqw,13.995cqw) scale(1.3285)}}

.v-pr-prompt-result *{box-sizing:border-box;margin:0;}
.v-pr-prompt-result .i{width:1.1cqw;height:1.1cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-prompt-result .dots{position:absolute;inset:0;background:radial-gradient(rgba(255,255,255,.09) .09cqw,transparent .12cqw) 0 0/2.2cqw 2.2cqw;-webkit-mask:radial-gradient(60% 70% at 50% 50%,#000 20%,transparent 75%);mask:radial-gradient(60% 70% at 50% 50%,#000 20%,transparent 75%);}
.v-pr-prompt-result .aur{position:absolute;left:5cqw;top:2cqw;width:90cqw;height:54cqw;background:radial-gradient(32cqw 18cqw at 30% 52%,color-mix(in srgb,var(--secondary) 55%,transparent),transparent 70%),radial-gradient(34cqw 20cqw at 66% 44%,color-mix(in srgb,var(--accent) 70%,transparent),transparent 70%),radial-gradient(28cqw 15cqw at 52% 70%,color-mix(in srgb,var(--secondary) 40%,transparent),transparent 70%);opacity:.65;filter:blur(2cqw);animation:pr-prompt-result-aur 6s ease-in-out infinite;}
.v-pr-prompt-result .bar{position:absolute;left:19cqw;top:25cqw;width:62cqw;height:6.2cqw;display:flex;align-items:center;gap:1.1cqw;padding:0 .9cqw 0 1.5cqw;border-radius:1.9cqw;border:.13cqw solid transparent;background:linear-gradient(#101114,#101114) padding-box,linear-gradient(100deg,color-mix(in srgb,var(--secondary) 80%,transparent),color-mix(in srgb,var(--accent) 90%,transparent) 45%,color-mix(in srgb,var(--secondary) 80%,transparent)) border-box;box-shadow:0 2cqw 5cqw rgba(0,0,0,.55),0 0 4cqw color-mix(in srgb,var(--accent) 25%,transparent);animation:pr-prompt-result-bar 6s linear infinite;}
.v-pr-prompt-result .spk{width:1.9cqw;height:1.9cqw;flex:none;}
.v-pr-prompt-result .fld{position:relative;flex:1;height:1.6em;font-family:var(--font-mono);font-size:1.45cqw;line-height:1.6em;}
.v-pr-prompt-result .ph{position:absolute;left:0;top:0;white-space:nowrap;color:#5E5E6E;animation:pr-prompt-result-ph 6s linear infinite;}
.v-pr-prompt-result .ty{position:absolute;left:0;top:0;white-space:nowrap;color:#F4F4FA;clip-path:inset(0 100% 0 0);animation:pr-prompt-result-type 6s linear infinite;}
.v-pr-prompt-result .car{position:absolute;left:0;top:.2em;width:.12em;height:1.2em;animation:pr-prompt-result-car 6s linear infinite;}
.v-pr-prompt-result .car i{display:block;width:100%;height:100%;border-radius:.1em;background:color-mix(in srgb,var(--accent) 55%,#fff);animation:pr-prompt-result-blink 1s steps(1) infinite;}
.v-pr-prompt-result .send{position:relative;width:3.9cqw;height:3.9cqw;border-radius:50%;background:#F4F4FA;color:#0A0B0D;display:grid;place-items:center;flex:none;animation:pr-prompt-result-send 6s linear infinite;}
.v-pr-prompt-result .send .i{width:1.6cqw;height:1.6cqw;stroke-width:2.4;}
.v-pr-prompt-result .send::after{content:"";position:absolute;inset:-.2cqw;border-radius:50%;border:.15cqw solid color-mix(in srgb,var(--accent) 90%,transparent);opacity:0;animation:pr-prompt-result-ring 6s linear infinite;}
.v-pr-prompt-result .res{position:absolute;left:17cqw;top:12.8cqw;width:66cqw;height:41.4cqw;border-radius:1.4cqw;background:#0D0E10;border:1px solid rgba(255,255,255,.1);overflow:hidden;box-shadow:0 3cqw 7cqw rgba(0,0,0,.6),0 0 0 1px rgba(0,0,0,.5);opacity:0;animation:pr-prompt-result-res 6s linear infinite;}
.v-pr-prompt-result .rh{height:2.6cqw;display:flex;align-items:center;gap:.9cqw;padding:0 1.1cqw;font-size:.8cqw;color:#8A8A9A;border-bottom:1px solid rgba(255,255,255,.07);}
.v-pr-prompt-result .rh .dt{display:flex;gap:.4cqw;}
.v-pr-prompt-result .rh .dt i{width:.6cqw;height:.6cqw;border-radius:50%;background:#2C2D30;}
.v-pr-prompt-result .url{padding:.25cqw .9cqw;border-radius:.5cqw;background:#17181B;font-family:var(--font-mono);font-size:.75cqw;}
.v-pr-prompt-result .stt{margin-left:auto;position:relative;width:12cqw;height:1.4cqw;}
.v-pr-prompt-result .stt span{position:absolute;right:0;top:0;display:flex;align-items:center;gap:.45cqw;white-space:nowrap;}
.v-pr-prompt-result .stt .b1{animation:pr-prompt-result-b1 6s linear infinite;}
.v-pr-prompt-result .stt .b1 i{width:.9cqw;height:.9cqw;border-radius:50%;border:.14cqw solid color-mix(in srgb,var(--accent) 30%,transparent);border-top-color:color-mix(in srgb,var(--accent) 55%,#fff);animation:pr-prompt-result-spin .8s linear infinite;}
.v-pr-prompt-result .stt .b2{color:#6EE7A8;opacity:0;animation:pr-prompt-result-b2 6s linear infinite;}
.v-pr-prompt-result .stt .b2 .i{width:.95cqw;height:.95cqw;stroke-width:2.6;}
.v-pr-prompt-result .pg{position:relative;height:38.8cqw;background:#FAF8F4;color:#141518;padding:1.5cqw 2.2cqw;overflow:hidden;clip-path:inset(0 0 100% 0);animation:pr-prompt-result-pg 6s linear infinite;}
.v-pr-prompt-result .scan{position:absolute;left:0;right:0;top:0;height:5cqw;background:linear-gradient(180deg,transparent,color-mix(in srgb,var(--accent) 16%,transparent) 80%,color-mix(in srgb,var(--accent) 70%,transparent) 100%);border-bottom:1px solid color-mix(in srgb,var(--accent) 90%,transparent);opacity:0;animation:pr-prompt-result-scan 6s linear infinite;}
.v-pr-prompt-result .nav{display:flex;align-items:center;gap:1.6cqw;font-size:.85cqw;color:#5B5966;animation:pr-prompt-result-s1 6s linear infinite;}
.v-pr-prompt-result .nav b{display:flex;align-items:center;gap:.5cqw;color:#141518;font-size:1.05cqw;font-weight:650;margin-right:auto;}
.v-pr-prompt-result .nav b i{width:1.4cqw;height:1.4cqw;border-radius:.4cqw;background:linear-gradient(135deg,var(--secondary),var(--accent));}
.v-pr-prompt-result .nav .cta{padding:.4cqw .9cqw;border-radius:2cqw;background:#141518;color:#fff;font-weight:550;}
.v-pr-prompt-result .hero{display:flex;align-items:center;justify-content:space-between;margin-top:2.2cqw;height:12.4cqw;}
.v-pr-prompt-result .ht{animation:pr-prompt-result-s2 6s linear infinite;}
.v-pr-prompt-result .ht .h{font-family:var(--font-display);font-size:3.7cqw;line-height:.95;letter-spacing:-.01em;}
.v-pr-prompt-result .ht .h span{font-style:italic;background:linear-gradient(90deg,var(--secondary),var(--accent));-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.1em;}
.v-pr-prompt-result .ht .s{font-size:.95cqw;color:#5B5966;margin-top:.8cqw;}
.v-pr-prompt-result .ht .bt{display:flex;gap:.6cqw;margin-top:1.1cqw;font-size:.82cqw;font-weight:550;}
.v-pr-prompt-result .ht .bt span{padding:.45cqw 1cqw;border-radius:2cqw;border:1px solid #DDD9D0;}
.v-pr-prompt-result .ht .bt span:first-child{background:#141518;color:#fff;border-color:#141518;}
.v-pr-prompt-result .art{position:relative;width:19cqw;height:12.4cqw;border-radius:1cqw;overflow:hidden;background:radial-gradient(8cqw 8cqw at 50% 60%,#FFE3C9,rgba(255,227,201,0) 70%),linear-gradient(135deg,#191A1D,#0D0E10);animation:pr-prompt-result-s3 6s linear infinite;}
.v-pr-prompt-result .art i{position:absolute;left:50%;top:58%;border-radius:50%;border:1px solid rgba(255,255,255,.25);transform:translate(-50%,-50%);}
.v-pr-prompt-result .art .o{width:5cqw;height:5cqw;border:none;background:radial-gradient(circle at 35% 30%,#FFFFFF,#FFC59A 30%,#FF7A3D 60%,var(--accent) 100%);box-shadow:0 0 3cqw rgba(255,140,80,.7);}
.v-pr-prompt-result .prc{display:grid;grid-template-columns:repeat(3,1fr);gap:1cqw;margin-top:2.2cqw;}
.v-pr-prompt-result .pc{border:1px solid #E6E2D9;border-radius:.9cqw;padding:1.3cqw 1.3cqw;background:#fff;font-size:.78cqw;color:#5B5966;}
.v-pr-prompt-result .pc b{display:block;font-size:.95cqw;color:#141518;font-weight:600;}
.v-pr-prompt-result .pc .pr{font-size:2cqw;font-weight:650;color:#141518;letter-spacing:-.03em;margin:.4cqw 0 .5cqw;}
.v-pr-prompt-result .pc .pr span{font-size:.8cqw;font-weight:450;color:#8C8A95;letter-spacing:0;}
.v-pr-prompt-result .pc .f{display:flex;align-items:center;gap:.4cqw;margin-top:.3cqw;}
.v-pr-prompt-result .pc .f::before{content:"";width:.45cqw;height:.45cqw;border-radius:50%;background:var(--accent);}
.v-pr-prompt-result .pc.hi{background:#141518;border-color:#141518;color:#A7A8AC;box-shadow:0 1cqw 2.4cqw rgba(58,60,63,.25);}
.v-pr-prompt-result .pc.hi b,.v-pr-prompt-result .pc.hi .pr{color:#fff;}
.v-pr-prompt-result .pc.hi .f::before{background:#FF9A5C;}
.v-pr-prompt-result .pc .tag{float:right;font-size:.65cqw;font-weight:600;padding:.1cqw .5cqw;border-radius:2cqw;background:linear-gradient(90deg,var(--accent),#F0702D);color:#fff;}
.v-pr-prompt-result .c1{animation:pr-prompt-result-s4 6s linear infinite;}
.v-pr-prompt-result .c2{animation:pr-prompt-result-s5 6s linear infinite;}
.v-pr-prompt-result .c3{animation:pr-prompt-result-s6 6s linear infinite;}
.v-pr-prompt-result .faq{margin-top:1.8cqw;display:grid;grid-template-columns:1fr 1fr;gap:1cqw;font-size:.85cqw;animation:pr-prompt-result-s7 6s linear infinite;}
.v-pr-prompt-result .faq span{display:flex;justify-content:space-between;padding:.7cqw 0;border-bottom:1px solid #E6E2D9;}
.v-pr-prompt-result .faq span::after{content:"+";color:#8C8A95;}
@keyframes pr-prompt-result-aur{0%,22%{opacity:.6;transform:scale(1) rotate(0deg);}31%{opacity:1;transform:scale(1.1) rotate(4deg);}50%{opacity:.85;transform:scale(1.04) rotate(2deg);}80%{opacity:.8;transform:scale(1.02) rotate(-1deg);}100%{opacity:.6;transform:scale(1) rotate(0deg);}}
@keyframes pr-prompt-result-bar{
  0%,30%{transform:translateY(0) scale(1);animation-timing-function:cubic-bezier(.65,0,.25,1);}
  40%,86%{transform:translateY(-19.4cqw) scale(.78);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  97%,100%{transform:translateY(0) scale(1);}
}
@keyframes pr-prompt-result-ph{0%,3%{opacity:1;}4.5%,95%{opacity:0;}98%,100%{opacity:1;}}
@keyframes pr-prompt-result-type{
  0%,4%{clip-path:inset(0 100% 0 0);opacity:1;animation-timing-function:steps(49,end);}
  26%{clip-path:inset(0 0 0 0);opacity:1;}
  86%{clip-path:inset(0 0 0 0);opacity:1;}
  90%{clip-path:inset(0 0 0 0);opacity:0;}
  92%,100%{clip-path:inset(0 100% 0 0);opacity:0;}
}
@keyframes pr-prompt-result-car{
  0%,4%{transform:translateX(0);opacity:1;animation-timing-function:steps(49,end);}
  26%{transform:translateX(29.4em);opacity:1;}
  30%{transform:translateX(29.4em);opacity:1;}
  31%,94%{transform:translateX(29.4em);opacity:0;}
  95%,100%{transform:translateX(0);opacity:1;}
}
@keyframes pr-prompt-result-blink{0%{opacity:1;}50%{opacity:0;}}
@keyframes pr-prompt-result-send{0%,26.5%{transform:scale(1);animation-timing-function:cubic-bezier(.4,0,1,1);}28%{transform:scale(.84);animation-timing-function:cubic-bezier(.2,1.6,.4,1);}31%,100%{transform:scale(1);}}
@keyframes pr-prompt-result-ring{0%,27.5%{opacity:0;transform:scale(.9);}28.5%{opacity:1;transform:scale(1);animation-timing-function:cubic-bezier(.1,.7,.3,1);}38%,100%{opacity:0;transform:scale(2.4);}}
@keyframes pr-prompt-result-res{
  0%,33%{opacity:0;transform:translateY(2.4cqw) scale(.97);animation-timing-function:cubic-bezier(.16,1,.3,1);}
  40%{opacity:1;transform:translateY(0) scale(1);}
  86%{opacity:1;transform:translateY(0) scale(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}
  93%,100%{opacity:0;transform:translateY(1.6cqw) scale(.98);}
}
@keyframes pr-prompt-result-pg{0%,35%{clip-path:inset(0 0 100% 0);}47%,100%{clip-path:inset(0 0 0 0);}}
@keyframes pr-prompt-result-b1{0%,46%{opacity:1;}48%,100%{opacity:0;}}
@keyframes pr-prompt-result-b2{0%,47%{opacity:0;transform:translateY(.5cqw);}49.5%,100%{opacity:1;transform:none;}}
@keyframes pr-prompt-result-spin{to{transform:rotate(360deg);}}
@keyframes pr-prompt-result-scan{0%,35%{opacity:0;transform:translateY(-5cqw);}37%{opacity:1;}47%{opacity:1;transform:translateY(36cqw);}49%,100%{opacity:0;transform:translateY(38cqw);}}
@keyframes pr-prompt-result-s1{0%,36%{opacity:0;transform:translateY(1cqw);filter:blur(.4cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}40%,100%{opacity:1;transform:none;filter:blur(0);}}
@keyframes pr-prompt-result-s2{0%,37.5%{opacity:0;transform:translateY(1.4cqw);filter:blur(.5cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}42%,100%{opacity:1;transform:none;filter:blur(0);}}
@keyframes pr-prompt-result-s3{0%,39%{opacity:0;transform:scale(.92);filter:blur(.6cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}43.5%,100%{opacity:1;transform:none;filter:blur(0);}}
@keyframes pr-prompt-result-s4{0%,40.5%{opacity:0;transform:translateY(1.4cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}44.5%,100%{opacity:1;transform:none;}}
@keyframes pr-prompt-result-s5{0%,42%{opacity:0;transform:translateY(1.4cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}46%,100%{opacity:1;transform:none;}}
@keyframes pr-prompt-result-s6{0%,43.5%{opacity:0;transform:translateY(1.4cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}47.5%,100%{opacity:1;transform:none;}}
@keyframes pr-prompt-result-s7{0%,45%{opacity:0;transform:translateY(1cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}48.5%,100%{opacity:1;transform:none;}}.v-pr-prompt-result .ty{position:relative;clip-path:none;animation:none;white-space:nowrap;color:#F4F4FA}
.v-pr-prompt-result .ty .w{--delay:calc(.25s + var(--i) * .1s);display:inline-block;animation:pr-prompt-result-tw 6s steps(5,end) infinite}
.v-pr-prompt-result .car{position:relative;display:inline-block;left:auto;top:auto;vertical-align:-.2em;margin-left:.15em;width:.12em;height:1.2em;animation:pr-prompt-result-car2 6s linear infinite}
.v-pr-prompt-result .mg-head{top:2.4cqw;left:4cqw}
.v-pr-prompt-result .mg-cta{top:2.4cqw;right:4cqw}
@keyframes pr-prompt-result-tw{0%{clip-path:inset(0 100% 0 0)}2%,100%{clip-path:inset(0 -10% 0 0)}}
@keyframes pr-prompt-result-car2{0%,30%{opacity:1}31%,100%{opacity:0}}
@keyframes pr-prompt-result-bar9{0%,26.5%{transform:scale(1)}28%{transform:scale(.96)}31%,100%{transform:scale(1)}}
@container (max-aspect-ratio: 4/5){
  .v-pr-prompt-result .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-prompt-result .bar{left:6cqw;right:6cqw;width:auto;top:30cqw;height:auto;align-items:flex-start;gap:3cqw;padding:4cqw 3cqw 4cqw 4.4cqw;border-radius:7cqw;border-width:.4cqw;animation:pr-prompt-result-bar9 6s linear infinite}
  .v-pr-prompt-result .spk{width:6.4cqw;height:6.4cqw;margin-top:.6cqw}
  .v-pr-prompt-result .fld{height:auto;min-height:1.4em;font-size:5.6cqw;line-height:1.4}
  .v-pr-prompt-result .ty{white-space:normal}
  .v-pr-prompt-result .send{width:11cqw;height:11cqw}
  .v-pr-prompt-result .send .i{width:5cqw;height:5cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-prompt-result .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-prompt-result .bar{left:6cqw;right:6cqw;width:auto;top:12.5cqw;height:auto;align-items:center;gap:1.6cqw;padding:1.8cqw 1.6cqw 1.8cqw 2.4cqw;border-radius:4cqw;border-width:.25cqw;animation:pr-prompt-result-bar9 6s linear infinite}
  .v-pr-prompt-result .spk{width:3cqw;height:3cqw}
  .v-pr-prompt-result .fld{height:auto;min-height:1.4em;font-size:2.6cqw;line-height:1.4}
  .v-pr-prompt-result .ty{white-space:normal}
  .v-pr-prompt-result .send{width:5.6cqw;height:5.6cqw}
  .v-pr-prompt-result .send .i{width:2.6cqw;height:2.6cqw}
  .v-pr-prompt-result .mg-head{top:5cqw;left:6cqw}
}
@container (max-aspect-ratio: 4/5){ .v-pr-prompt-result .mg-head{top:9cqh;left:8cqw} }

.v-pr-prompt-result .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-prompt-result .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-prompt-result-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-prompt-result .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-prompt-result .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:600;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-prompt-result .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-prompt-result-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-prompt-result .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-prompt-result-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-prompt-result .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-prompt-result .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-prompt-result .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-prompt-result .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-prompt-result .mg-hl{margin-top:2.4cqw;font-size:9.4cqw;line-height:1.04}
  .v-pr-prompt-result .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-prompt-result .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-prompt-result .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-prompt-result .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-prompt-result .mg-hl{margin-top:1.2cqw;font-size:5.6cqw}
  .v-pr-prompt-result .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-prompt-result-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-prompt-result-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prShortcut: SceneSpec = {
  id: "pr-shortcut",
  slug: "mg-pr-shortcut",
  name: "Shortcut Command Menu",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "keycap-press-to-palette",
  energy: "punchy",
  settle: 4.4,
  requiresScreenshot: true,
  colors: { ink: "#FFFFFF", accent: "#2643EC", secondary: "#FF8A3D", paper: "#2442E6" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["keyboard", "shortcut", "command-menu"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Keyboard first", maxChars: 28, role: "kicker" },
    { key: "headline", label: "Headline", default: "Everything is one shortcut away", maxChars: 40, role: "headline" },
    { key: "cta", label: "Call to action", default: "Press \u2318K anywhere", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="win">
      <div class="side">
        <div class="lg"><i></i>Lumen</div>
        <span class="on"><svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>Home</span>
        <span><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>Ask</span>
        <span><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>Docs</span>
        <span><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>Agents</span>
        <span><svg class="i" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>Calendar</span>
      </div>
      <div class="main">
        <div class="gr">Good morning, Maya</div>
        <div class="gs">Three things need you today · Tuesday, Oct 14</div>
        <div class="cards">
          <div class="cd"><b>Today</b><div class="ev"><i style="background:var(--accent)"></i><div>Launch sync<span>10:00 · Studio</span></div></div><div class="ev"><i style="background:#FF8A3D"></i><div>Investor update due<span>13:00 · Draft ready</span></div></div><div class="ev"><i style="background:#1FB89A"></i><div>Design review<span>16:30 · Canvas</span></div></div></div>
          <div class="cd"><b>Recent docs</b><div class="dk"></div>Q4 launch plan<span style="display:block;font-size:.75cqw;color:#9A9FB5">Edited 2h ago</span></div>
          <div class="cd"><b>Agents</b><div class="ev"><i style="background:#828488"></i><div>Inbox Triage<span>Sorted 42 threads</span></div></div><div class="ev"><i style="background:var(--accent)"></i><div>Research Scout<span>Running · 3 of 5</span></div></div></div>
        </div>
      </div>
    </div>
    <div class="dim"></div>
    <div class="pal">
      <div class="inp">
        <svg class="i" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <div class="q"><span class="ph">Search or run a command…</span><span class="cr c0"><i></i></span><span class="ch k1">i</span><span class="cr c1"><i></i></span><span class="ch k2">n</span><span class="cr c2"><i></i></span><span class="ch k3">v</span><span class="cr c3"><i></i></span></div>
        <span class="esc">esc</span>
      </div>
      <div class="bd">
        <div class="ls">
          <div class="hl"></div>
          <div class="grp ga">
            <div class="lbl">Recent</div>
            <div class="rw"><span class="t" style="background:#FF8A3D"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg></span>Q4 launch plan<span class="h">Doc</span></div>
            <div class="rw"><span class="t" style="background:#828488"><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg></span>Ask Lumen…<span class="h">⌘J</span></div>
            <div class="rw"><span class="t" style="background:#1A1F3D"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span>New doc<span class="h">⌘N</span></div>
            <div class="rw"><span class="t" style="background:#1FB89A"><svg class="i" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg></span>Open calendar<span class="h">G C</span></div>
          </div>
          <div class="grp gb">
            <div class="lbl">Results for “inv”</div>
            <div class="rw"><span class="t" style="background:#1FB89A"><svg class="i" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/></svg></span><span><b>Inv</b>ite teammates</span><span class="h">Members</span></div>
            <div class="rw"><span class="t" style="background:var(--accent)"><svg class="i" viewBox="0 0 24 24"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg></span><span><b>Inv</b>oices &amp; billing</span><span class="h">Settings</span></div>
            <div class="rw"><span class="t" style="background:#FF8A3D"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg></span><span><b>Inv</b>estor update · draft</span><span class="h">Doc</span></div>
            <div class="rw"><span class="t" style="background:#828488"><svg class="i" viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg></span><span><b>Inv</b>entory sync agent</span><span class="h">Agent</span></div>
          </div>
        </div>
        <div class="pv">
          <div class="pp pa"><div class="pt">Q4 launch plan</div><div class="ps">Maya Chen · edited 2h ago</div><div class="doc"></div></div>
          <div class="pp pb"><div class="pt">Invite teammates</div><div class="ps">18 of 25 seats used</div><div class="avs"><i style="background:linear-gradient(135deg,#FFB86B,#FF6B6B)"></i><i style="background:linear-gradient(135deg,#7FD1FF,#4A7BFF)"></i><i style="background:linear-gradient(135deg,#C6F27A,#2FB872)"></i><i style="background:linear-gradient(135deg,#C8CACE,#828488)"></i></div><span class="btn">Send invites</span></div>
          <div class="pp pc"><div class="pt">Invoices &amp; billing</div><div class="ps">Pro plan · 25 seats</div><div class="big">$1,280</div><div class="kv"><span>Next invoice</span><span>Nov 1</span></div><div class="mb"><i style="height:52%"></i><i style="height:60%"></i><i style="height:58%"></i><i style="height:74%"></i><i style="height:81%"></i><i style="height:100%"></i></div></div>
        </div>
      </div>
      <div class="ft"><span><span>↑</span><span>↓</span>Navigate</span><span><span>↵</span>Open</span><span><span>esc</span>Close</span><span class="lm"><i></i>Lumen</span></div>
    </div>
    <div class="caps">
      <div class="cap a"><div class="base"></div><div class="face">⌘<span>command</span></div></div>
      <svg class="plus i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
      <div class="cap b"><div class="base"></div><div class="face">K</div></div>
    </div>
    <div class="hud">
      <div class="hp h1"><span class="kc">⌘</span><span class="kc">K</span><span>Command menu</span></div>
      <div class="hp h2"><span class="kc">↓</span><span>Next result</span></div>
      <div class="hp h3"><span class="kc">↵</span><span>Open</span></div>
    </div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-shortcut{color:var(--ink);font-family:var(--font-body)}
.v-pr-shortcut[data-backdrop="on"]{background:radial-gradient(60cqw 40cqw at 15% 0%,rgba(255,255,255,.22),transparent 70%),linear-gradient(160deg,color-mix(in srgb,var(--paper) 82%,#fff),var(--paper) 50%,color-mix(in srgb,var(--paper) 78%,#000))}
.v-pr-shortcut .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(5.319cqw,6.245cqw) scale(0.8936);color:#12152B}
@container (max-aspect-ratio: 4/5){.v-pr-shortcut .mg-design{transform:translate(-5.952cqw,70.869cqw) scale(1.119)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-shortcut .mg-design{transform:translate(-4.762cqw,22.095cqw) scale(1.0952)}}

.v-pr-shortcut *{box-sizing:border-box;margin:0;}
.v-pr-shortcut .i{width:1.1cqw;height:1.1cqw;fill:none;stroke:currentColor;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-shortcut .win{position:absolute;left:8cqw;top:7cqw;width:84cqw;height:47cqw;background:#fff;border-radius:1.4cqw;overflow:hidden;display:flex;box-shadow:0 0 0 1px rgba(10,20,90,.2),0 3cqw 7cqw rgba(8,14,80,.45);}
.v-pr-shortcut .side{width:14cqw;flex:none;background:#F6F7FB;border-right:1px solid #ECEEF5;padding:1.4cqw 1cqw;display:flex;flex-direction:column;gap:.3cqw;font-size:.95cqw;color:#5A5F78;}
.v-pr-shortcut .side .lg{display:flex;align-items:center;gap:.55cqw;font-weight:650;color:#12152B;font-size:1.1cqw;margin-bottom:1cqw;}
.v-pr-shortcut .side .lg i{width:1.7cqw;height:1.7cqw;border-radius:.5cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 70%,#fff),var(--accent));}
.v-pr-shortcut .side span{display:flex;align-items:center;gap:.6cqw;padding:.45cqw .55cqw;border-radius:.5cqw;}
.v-pr-shortcut .side .on{background:#fff;color:#12152B;font-weight:550;box-shadow:0 0 0 1px #ECEEF5;}
.v-pr-shortcut .main{flex:1;padding:2.4cqw 2.6cqw;}
.v-pr-shortcut .gr{font-size:2.1cqw;font-weight:650;letter-spacing:-.025em;}
.v-pr-shortcut .gs{font-size:1cqw;color:#7A7F98;margin-top:.4cqw;}
.v-pr-shortcut .cards{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:1.2cqw;margin-top:2cqw;}
.v-pr-shortcut .cd{border:1px solid #ECEEF5;border-radius:1cqw;padding:1.1cqw;font-size:.88cqw;color:#5A5F78;height:15cqw;}
.v-pr-shortcut .cd b{display:block;color:#12152B;font-size:.98cqw;margin-bottom:.8cqw;}
.v-pr-shortcut .ev{display:flex;gap:.6cqw;align-items:center;padding:.45cqw 0;}
.v-pr-shortcut .ev i{width:.3cqw;height:1.8cqw;border-radius:1cqw;}
.v-pr-shortcut .ev span{display:block;font-size:.75cqw;color:#9A9FB5;}
.v-pr-shortcut .dk{height:4.6cqw;border-radius:.6cqw;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 8%,#fff),color-mix(in srgb,var(--accent) 14%,#fff));margin-bottom:.5cqw;}
.v-pr-shortcut .dim{position:absolute;left:8cqw;top:7cqw;width:84cqw;height:47cqw;border-radius:1.4cqw;background:rgba(12,18,70,.34);opacity:0;animation:pr-shortcut-dim 6s linear infinite;}
.v-pr-shortcut .pal{position:absolute;left:22cqw;top:11.6cqw;width:56cqw;background:#fff;border-radius:1.5cqw;overflow:hidden;box-shadow:0 0 0 1px rgba(10,20,90,.12),0 1cqw 2cqw rgba(8,14,80,.2),0 4cqw 8cqw rgba(8,14,80,.4);opacity:0;animation:pr-shortcut-pal 6s linear infinite;}
.v-pr-shortcut .inp{height:4.2cqw;display:flex;align-items:center;gap:.9cqw;padding:0 1.4cqw;border-bottom:1px solid #EEF0F6;font-size:1.35cqw;}
.v-pr-shortcut .inp .i{width:1.4cqw;height:1.4cqw;color:#8C91AA;}
.v-pr-shortcut .q{position:relative;flex:1;height:1.4em;display:flex;align-items:center;}
.v-pr-shortcut .q .ph{position:absolute;left:0;color:#A3A8BE;white-space:nowrap;animation:pr-shortcut-ph 6s linear infinite;}
.v-pr-shortcut .q .ch{opacity:0;font-weight:500;}
.v-pr-shortcut .q .k1{animation:pr-shortcut-k1 6s linear infinite;}
.v-pr-shortcut .q .k2{animation:pr-shortcut-k2 6s linear infinite;}
.v-pr-shortcut .q .k3{animation:pr-shortcut-k3 6s linear infinite;}
.v-pr-shortcut .q .cr{position:relative;width:0;height:1.15em;opacity:0;}
.v-pr-shortcut .q .cr i{position:absolute;left:.04em;top:0;width:.1em;height:100%;border-radius:.1em;background:var(--accent);}
.v-pr-shortcut .q .c0{animation:pr-shortcut-c0 6s linear infinite;}
.v-pr-shortcut .q .c1{animation:pr-shortcut-c1 6s linear infinite;}
.v-pr-shortcut .q .c2{animation:pr-shortcut-c2 6s linear infinite;}
.v-pr-shortcut .q .c3{animation:pr-shortcut-c3 6s linear infinite;}
.v-pr-shortcut .q .c3 i{animation:pr-shortcut-blink 1s steps(1) infinite;}
.v-pr-shortcut .esc{font-size:.75cqw;color:#7A7F98;border:1px solid #E3E6F0;border-bottom-width:.18cqw;border-radius:.4cqw;padding:.15cqw .5cqw;}
.v-pr-shortcut .bd{display:grid;grid-template-columns:31cqw 1fr;height:16.8cqw;}
.v-pr-shortcut .ls{position:relative;padding:.9cqw .8cqw;}
.v-pr-shortcut .hl{position:absolute;left:.8cqw;right:.8cqw;top:2.8cqw;height:3cqw;border-radius:.8cqw;background:color-mix(in srgb,var(--accent) 8%,#fff);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 18%,#fff);animation:pr-shortcut-hl 6s linear infinite;}
.v-pr-shortcut .hl::after{content:"";position:absolute;inset:0;border-radius:inherit;background:var(--accent);opacity:0;animation:pr-shortcut-enter 6s linear infinite;}
.v-pr-shortcut .grp{position:absolute;left:.8cqw;right:.8cqw;top:.9cqw;}
.v-pr-shortcut .ga{animation:pr-shortcut-ga 6s linear infinite;}
.v-pr-shortcut .gb{opacity:0;animation:pr-shortcut-gb 6s linear infinite;}
.v-pr-shortcut .lbl{height:1.9cqw;padding-left:.7cqw;font-size:.78cqw;color:#9A9FB5;display:flex;align-items:center;}
.v-pr-shortcut .rw{position:relative;height:3cqw;display:flex;align-items:center;gap:.8cqw;padding:0 .7cqw;font-size:1.02cqw;color:#2A2E48;}
.v-pr-shortcut .rw .t{width:1.9cqw;height:1.9cqw;border-radius:.5cqw;display:grid;place-items:center;color:#fff;flex:none;}
.v-pr-shortcut .rw .t .i{width:1.05cqw;height:1.05cqw;}
.v-pr-shortcut .rw b{font-weight:700;color:var(--accent);}
.v-pr-shortcut .rw .h{margin-left:auto;font-size:.78cqw;color:#9A9FB5;}
.v-pr-shortcut .pv{position:relative;border-left:1px solid #EEF0F6;background:#FAFBFE;}
.v-pr-shortcut .pp{position:absolute;inset:0;padding:1.4cqw 1.5cqw;font-size:.85cqw;color:#5A5F78;opacity:0;}
.v-pr-shortcut .pp .pt{font-size:1.15cqw;font-weight:650;color:#12152B;letter-spacing:-.01em;}
.v-pr-shortcut .pp .ps{margin-top:.3cqw;}
.v-pr-shortcut .pa{animation:pr-shortcut-pa 6s linear infinite;}
.v-pr-shortcut .pb{animation:pr-shortcut-pb 6s linear infinite;}
.v-pr-shortcut .pc{animation:pr-shortcut-pc 6s linear infinite;}
.v-pr-shortcut .big{font-size:2.3cqw;font-weight:650;color:#12152B;letter-spacing:-.03em;margin-top:1.2cqw;}
.v-pr-shortcut .mb{display:flex;align-items:flex-end;gap:.55cqw;height:5.4cqw;margin-top:1cqw;padding-bottom:.2cqw;border-bottom:1px solid #E7EAF3;}
.v-pr-shortcut .mb i{flex:1;border-radius:.3cqw .3cqw 0 0;background:color-mix(in srgb,var(--accent) 20%,#fff);}
.v-pr-shortcut .mb i:last-child{background:var(--accent);}
.v-pr-shortcut .kv{display:flex;justify-content:space-between;margin-top:.7cqw;}
.v-pr-shortcut .kv span:last-child{color:#12152B;font-weight:550;}
.v-pr-shortcut .avs{display:flex;margin-top:1.2cqw;}
.v-pr-shortcut .avs i{width:2.4cqw;height:2.4cqw;border-radius:50%;border:.18cqw solid #FAFBFE;margin-right:-.6cqw;}
.v-pr-shortcut .btn{display:inline-block;margin-top:1.2cqw;padding:.55cqw 1cqw;border-radius:.6cqw;background:var(--accent);color:#fff;font-weight:550;}
.v-pr-shortcut .doc{height:9cqw;margin-top:1cqw;border-radius:.7cqw;border:1px solid #E7EAF3;background:repeating-linear-gradient(180deg,#fff 0 1.1cqw,#EEF0F6 1.1cqw 1.25cqw);}
.v-pr-shortcut .ft{height:2.6cqw;display:flex;align-items:center;gap:1.2cqw;padding:0 1.4cqw;border-top:1px solid #EEF0F6;font-size:.75cqw;color:#9A9FB5;background:#FAFBFE;}
.v-pr-shortcut .ft span span{display:inline-block;min-width:1.3cqw;text-align:center;margin-right:.35cqw;padding:0 .3cqw;border-radius:.3cqw;border:1px solid #E3E6F0;color:#5A5F78;}
.v-pr-shortcut .ft .lm{margin-left:auto;display:flex;align-items:center;gap:.4cqw;color:#5A5F78;}
.v-pr-shortcut .ft .lm i{width:1cqw;height:1cqw;border-radius:.3cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 70%,#fff),var(--accent));}
.v-pr-shortcut .caps{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;animation:pr-shortcut-caps 6s linear infinite;transform-origin:50% 92%;}
.v-pr-shortcut .cap{position:absolute;top:24cqw;width:10.5cqw;height:10.5cqw;}
.v-pr-shortcut .cap.a{left:38cqw;}
.v-pr-shortcut .cap.b{left:51.5cqw;}
.v-pr-shortcut .cap .base{position:absolute;left:0;right:0;top:1cqw;bottom:-1cqw;border-radius:1.9cqw;background:linear-gradient(180deg,#C5CBE3,#98A0C4);box-shadow:0 2.2cqw 3.4cqw rgba(6,12,70,.45),0 .6cqw 1cqw rgba(6,12,70,.3);}
.v-pr-shortcut .cap .face{position:absolute;inset:0;border-radius:1.9cqw;background:linear-gradient(180deg,#FFFFFF,#EEF0F8);box-shadow:inset 0 .15cqw 0 #fff,inset 0 -.3cqw .6cqw rgba(100,110,160,.18);display:grid;place-items:center;font-size:4.6cqw;font-weight:500;color:#1A1F3D;}
.v-pr-shortcut .cap .face span{position:absolute;left:1.1cqw;bottom:.8cqw;font-size:.95cqw;color:#8C91AA;font-weight:500;}
.v-pr-shortcut .cap.a .face{animation:pr-shortcut-pa1 6s linear infinite;}
.v-pr-shortcut .cap.b .face{animation:pr-shortcut-pb1 6s linear infinite;}
.v-pr-shortcut .plus{position:absolute;left:50cqw;top:28.45cqw;width:1.6cqw;height:1.6cqw;color:#fff;stroke-width:2.6;transform:translateX(-50%);filter:drop-shadow(0 .2cqw .4cqw rgba(6,12,70,.5));}
.v-pr-shortcut .hud{position:absolute;left:50%;bottom:2.8cqw;height:4cqw;}
.v-pr-shortcut .hp{position:absolute;left:0;top:0;display:flex;align-items:center;gap:.6cqw;padding:.55cqw .7cqw;border-radius:1.2cqw;background:rgba(10,16,64,.62);box-shadow:0 1cqw 2.4cqw rgba(6,10,60,.35),inset 0 0 0 1px rgba(255,255,255,.12);color:color-mix(in srgb,var(--accent) 18%,#fff);font-size:.95cqw;white-space:nowrap;opacity:0;transform:translateX(-50%);}
.v-pr-shortcut .hp .kc{min-width:2.6cqw;height:2.6cqw;padding:0 .6cqw;border-radius:.6cqw;display:grid;place-items:center;background:linear-gradient(180deg,#fff,#E9ECF7);color:#1A1F3D;font-size:1.3cqw;font-weight:500;box-shadow:0 .25cqw 0 #A9B0CF;}
.v-pr-shortcut .hp span:last-child{padding:0 .4cqw 0 .2cqw;}
.v-pr-shortcut .h1{animation:pr-shortcut-h1 6s linear infinite;}
.v-pr-shortcut .h2{animation:pr-shortcut-h2 6s linear infinite;}
.v-pr-shortcut .h3{animation:pr-shortcut-h3 6s linear infinite;}
.v-pr-shortcut .h2 .kc{animation:pr-shortcut-kd 6s linear infinite;}
.v-pr-shortcut .h3 .kc{animation:pr-shortcut-ke 6s linear infinite;}
@keyframes pr-shortcut-dim{0%,2%{opacity:0;}8%,21%{opacity:.55;}26%,84%{opacity:1;}90%,100%{opacity:0;}}
@keyframes pr-shortcut-pal{
  0%,21%{opacity:0;transform:translateY(-1.2cqw) scale(.96);animation-timing-function:cubic-bezier(.16,1,.3,1);}
  28%{opacity:1;transform:none;}
  84%{opacity:1;transform:none;animation-timing-function:cubic-bezier(.5,0,.75,0);}
  90%,100%{opacity:0;transform:scale(.97);}
}
@keyframes pr-shortcut-ph{0%,29.9%{opacity:1;}30%,95%{opacity:0;}96%,100%{opacity:1;}}
@keyframes pr-shortcut-k1{0%,29.9%{opacity:0;}30%,92%{opacity:1;}92.1%,100%{opacity:0;}}
@keyframes pr-shortcut-k2{0%,31.9%{opacity:0;}32%,92%{opacity:1;}92.1%,100%{opacity:0;}}
@keyframes pr-shortcut-k3{0%,33.9%{opacity:0;}34%,92%{opacity:1;}92.1%,100%{opacity:0;}}
@keyframes pr-shortcut-c0{0%,29.9%{opacity:1;}30%,100%{opacity:0;}}
@keyframes pr-shortcut-c1{0%,29.9%{opacity:0;}30%,31.9%{opacity:1;}32%,100%{opacity:0;}}
@keyframes pr-shortcut-c2{0%,31.9%{opacity:0;}32%,33.9%{opacity:1;}34%,100%{opacity:0;}}
@keyframes pr-shortcut-c3{0%,33.9%{opacity:0;}34%,92%{opacity:1;}92.1%,100%{opacity:0;}}
@keyframes pr-shortcut-blink{0%{opacity:1;}50%{opacity:0;}}
@keyframes pr-shortcut-ga{0%,34%{opacity:1;transform:none;}36.5%,95%{opacity:0;transform:translateY(-.6cqw);}96%,100%{opacity:1;transform:none;}}
@keyframes pr-shortcut-gb{0%,34.5%{opacity:0;transform:translateY(.8cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}38%,95%{opacity:1;transform:none;}96%,100%{opacity:0;}}
@keyframes pr-shortcut-hl{0%,45%{transform:translateY(0);animation-timing-function:cubic-bezier(.3,1.25,.5,1);}47.5%,95%{transform:translateY(3cqw);}96%,100%{transform:translateY(0);}}
@keyframes pr-shortcut-enter{0%,66.5%{opacity:0;}67.5%{opacity:.2;}71%,100%{opacity:0;}}
@keyframes pr-shortcut-pa{0%,34%{opacity:1;}36%,95%{opacity:0;}96%,100%{opacity:1;}}
@keyframes pr-shortcut-pb{0%,35%{opacity:0;}37.5%,45%{opacity:1;}46.5%,100%{opacity:0;}}
@keyframes pr-shortcut-pc{0%,45.5%{opacity:0;transform:translateY(.5cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1);}48%,95%{opacity:1;transform:none;}96%,100%{opacity:0;}}
@keyframes pr-shortcut-caps{
  0%,2%{opacity:0;transform:translateY(5cqw) scale(.94);animation-timing-function:cubic-bezier(.16,1,.3,1);}
  9%{opacity:1;transform:none;}
  20.5%{opacity:1;transform:none;animation-timing-function:cubic-bezier(.6,0,.4,1);}
  26%,100%{opacity:0;transform:translateY(17cqw) scale(.3);}
}
@keyframes pr-shortcut-pa1{0%,10%{transform:translateY(0);animation-timing-function:cubic-bezier(.5,0,1,1);}11.5%{transform:translateY(.95cqw);}19%{transform:translateY(.95cqw);animation-timing-function:cubic-bezier(.2,1.4,.4,1);}21%,100%{transform:translateY(0);}}
@keyframes pr-shortcut-pb1{0%,13.5%{transform:translateY(0);animation-timing-function:cubic-bezier(.5,0,1,1);}15%{transform:translateY(.95cqw);}19%{transform:translateY(.95cqw);animation-timing-function:cubic-bezier(.2,1.4,.4,1);}21%,100%{transform:translateY(0);}}
@keyframes pr-shortcut-h1{0%,23%{opacity:0;transform:translate(-50%,1cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}27%,40%{opacity:1;transform:translate(-50%,0);}42%,100%{opacity:0;transform:translate(-50%,-.6cqw);}}
@keyframes pr-shortcut-h2{0%,42%{opacity:0;transform:translate(-50%,1cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}44.5%,62%{opacity:1;transform:translate(-50%,0);}64%,100%{opacity:0;transform:translate(-50%,-.6cqw);}}
@keyframes pr-shortcut-h3{0%,64%{opacity:0;transform:translate(-50%,1cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}66.5%,84%{opacity:1;transform:translate(-50%,0);}88%,100%{opacity:0;transform:translate(-50%,-.6cqw);}}
@keyframes pr-shortcut-kd{0%,44.6%{transform:translateY(0);}45.4%{transform:translateY(.22cqw);}47%,100%{transform:translateY(0);}}
@keyframes pr-shortcut-ke{0%,66.8%{transform:translateY(0);}67.6%{transform:translateY(.22cqw);}69.5%,100%{transform:translateY(0);}}
.v-pr-shortcut .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-shortcut .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-shortcut-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-shortcut .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-shortcut .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:600;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-shortcut .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-shortcut-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-shortcut .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-shortcut-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-shortcut .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-shortcut .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-shortcut .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-shortcut .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-shortcut .mg-hl{margin-top:2.4cqw;font-size:9.4cqw;line-height:1.04}
  .v-pr-shortcut .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-shortcut .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-shortcut .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-shortcut .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-shortcut .mg-hl{margin-top:1.2cqw;font-size:5.6cqw}
  .v-pr-shortcut .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-shortcut-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-shortcut-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
.v-pr-shortcut .mg-cta::after{color:var(--ink)}
`,
};

export const prScrollPage: SceneSpec = {
  id: "pr-scroll-page",
  slug: "mg-pr-scroll-page",
  name: "Landing Page Scroll",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "page-scroll-to-feature",
  energy: "default",
  settle: 2.7,
  requiresScreenshot: true,
  colors: { ink: "#151619", accent: "#FF5A2B", secondary: "#787A7E", paper: "#F6D9C4" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["landing-page", "scroll", "website"],
  fields: [
    { key: "kicker", label: "Kicker", default: "lumen.app", maxChars: 28, role: "kicker" },
    { key: "headline", label: "Headline", default: "Scroll straight to what is new", maxChars: 40, role: "headline" },
    { key: "feature", label: "Feature tag", default: "Live canvas, new in 2.0", maxChars: 28, role: "label" },
    { key: "cta", label: "Call to action", default: "Try Lumen free", maxChars: 24, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="br">
      <div class="chr">
        <span class="lights"><i></i><i></i><i></i></span>
        <svg class="i" viewBox="0 0 24 24"><path d="m15 6-6 6 6 6"/></svg><svg class="i" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>
        <span class="url"><svg class="i" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>lumen.app</span>
      </div>
      <div class="vp">
        <div class="pg">
          <div class="s1">
            <div class="nav"><b><i></i>Lumen</b><span>Product</span><span>Canvas</span><span>Pricing</span><span>Changelog</span><span>Try Lumen</span></div>
            <div class="eb"><i></i>Lumen 2.0 is here</div>
            <div class="h1">Your team's<br>second brain.</div>
            <div class="sb">Lumen reads your docs, chats and tickets, then answers like the teammate who never forgets.</div>
            <div class="ctas"><span>Start for free</span><span>Watch the film</span></div>
            <div class="peek"><i style="width:9cqw"></i><i style="flex:1"></i><i style="width:12cqw"></i></div>
          </div>
          <div class="s2">
            <span class="k">Trusted by 4,000+ teams</span>
            <div class="lo">
              <span class="a"><svg viewBox="0 0 24 24"><path d="M4 20 12 4l8 16z" fill="currentColor"/></svg>northwind</span>
              <span class="b">Halcyon</span>
              <span class="c">quarry</span>
              <span class="d"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="3"/></svg>ostra</span>
              <span class="e">fieldnote.</span>
            </div>
          </div>
          <div class="s3">
            <div class="tx">
              <span class="eb2">New in 2.0</span>
              <div class="h2">Live canvas</div>
              <div class="p">Drag answers, docs and agents onto one board. Everyone sees it change in real time.</div>
              <div class="ln">Explore the canvas →</div>
            </div>
            <div class="cv">
              <svg class="w" viewBox="0 0 400 250" preserveAspectRatio="none"><path d="M120 60C170 60 170 120 220 125"/><path d="M120 70C150 150 200 170 240 190"/></svg>
              <div class="nd" style="left:1.6cqw;top:1.8cqw;width:13cqw"><b><i style="background:var(--accent)"></i>Q4 goals</b>Ship canvas to every workspace by Oct 28.</div>
              <div class="nd" style="left:17cqw;top:8.6cqw;width:15cqw"><b><i style="background:var(--secondary)"></i>Ask · churn drivers</b>Onboarding drop-off explains 62% of churn.</div>
              <div class="nd" style="left:21cqw;top:17.6cqw;width:12cqw"><b><i style="background:#1FB89A"></i>Research Scout</b>Running · 3 of 5<div class="bar"><i></i></div></div>
              <div class="cur u1"><svg viewBox="0 0 18 22"><path d="M2 1.2v16.6l4.3-4.2 2.9 6.6 2.9-1.3-2.8-6.4h5.9z" style="fill:var(--secondary)" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg><span style="background:var(--secondary)">Ava</span></div>
              <div class="cur u2"><svg viewBox="0 0 18 22"><path d="M2 1.2v16.6l4.3-4.2 2.9 6.6 2.9-1.3-2.8-6.4h5.9z" fill="#1FB89A" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg><span style="background:#1FB89A">Leo</span></div>
            </div>
            <div class="hlr"></div>
          </div>
          <div class="s4">
            <div class="h2">Built for how teams think</div>
            <div class="fg">
              <div class="fc"><span class="ic" style="background:var(--accent)"><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg></span><b>Answers with sources</b>Every reply links back to the doc, thread or ticket it came from.</div>
              <div class="fc"><span class="ic" style="background:var(--secondary)"><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg></span><b>Agents that finish</b>Hand off research, triage and specs. Check back when they're done.</div>
              <div class="fc"><span class="ic" style="background:#1FB89A"><svg class="i" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></span><b>Private by default</b>Your data stays yours. SSO, audit logs and regional hosting.</div>
            </div>
          </div>
          <div class="s5"><div class="q">“Lumen replaced three tools and <span>a weekly meeting.</span>”</div><div class="by">Ava Patel · Head of Ops, Northwind</div></div>
          <div class="s6"><div class="h2">Start thinking in light.</div><span>Try Lumen free</span></div>
        </div>
        <div class="sbar"></div>
      </div>
    </div>
    </div>
<div class="mg-over"><div class="tag" data-21st-slot="feature"><i></i>{{feature}}</div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-scroll-page{color:var(--ink);font-family:var(--font-body)}
.v-pr-scroll-page[data-backdrop="on"]{background:radial-gradient(50cqw 36cqw at 85% 10%,color-mix(in srgb,var(--paper) 30%,#fff),transparent 70%),linear-gradient(150deg,color-mix(in srgb,var(--paper) 60%,#fff),var(--paper))}
.v-pr-scroll-page .mg-design,.v-pr-scroll-page .mg-over{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(5.06cqw,8.72cqw) scale(0.84);color:#151619}
@container (max-aspect-ratio: 4/5){.v-pr-scroll-page .mg-design,.v-pr-scroll-page .mg-over{transform:translate(-15.278cqw,59.486cqw) scale(1.3056)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-scroll-page .mg-design,.v-pr-scroll-page .mg-over{transform:translate(-9.0cqw,19.69cqw) scale(1.18)}}

.v-pr-scroll-page *{box-sizing:border-box;margin:0;}
.v-pr-scroll-page .i{width:1cqw;height:1cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-scroll-page .br{position:absolute;left:14cqw;top:4.5cqw;width:72cqw;height:50cqw;border-radius:1.3cqw;background:#fff;overflow:hidden;box-shadow:0 0 0 1px rgba(90,40,10,.1),0 1cqw 2cqw rgba(110,50,20,.12),0 3.4cqw 7cqw rgba(110,50,20,.22);}
.v-pr-scroll-page .chr{position:relative;z-index:2;height:3.4cqw;display:flex;align-items:center;gap:1cqw;padding:0 1.2cqw;background:#F7F4F1;border-bottom:1px solid #ECE6E0;color:#9C948C;}
.v-pr-scroll-page .lights{display:flex;gap:.45cqw;}
.v-pr-scroll-page .lights i{width:.72cqw;height:.72cqw;border-radius:50%;background:#FF5F57;}
.v-pr-scroll-page .lights i:nth-child(2){background:#FEBC2E;}
.v-pr-scroll-page .lights i:nth-child(3){background:#28C840;}
.v-pr-scroll-page .url{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:26cqw;height:2cqw;border-radius:.55cqw;background:#ECE7E2;display:flex;align-items:center;justify-content:center;gap:.4cqw;font-size:.85cqw;color:#5B544D;}
.v-pr-scroll-page .url .i{width:.8cqw;height:.8cqw;}
.v-pr-scroll-page .vp{position:absolute;left:0;right:0;top:3.4cqw;bottom:0;overflow:hidden;}
.v-pr-scroll-page .pg{position:absolute;left:0;top:0;width:72cqw;animation:pr-scroll-page-scroll 6s linear infinite;}
.v-pr-scroll-page .s1{position:relative;height:40cqw;background:radial-gradient(26cqw 18cqw at 50% 105%,color-mix(in srgb,var(--accent) 55%,transparent),transparent 70%),radial-gradient(30cqw 20cqw at 50% 70%,color-mix(in srgb,var(--secondary) 45%,transparent),transparent 70%),#0C0D10;color:#fff;text-align:center;overflow:hidden;}
.v-pr-scroll-page .nav{display:flex;align-items:center;gap:1.6cqw;padding:1.4cqw 2.4cqw;font-size:.85cqw;color:#B6B8BC;}
.v-pr-scroll-page .nav b{display:flex;align-items:center;gap:.5cqw;color:#fff;font-size:1.05cqw;margin-right:auto;}
.v-pr-scroll-page .nav b i{width:1.35cqw;height:1.35cqw;border-radius:.4cqw;background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent) 50%,var(--secondary));}
.v-pr-scroll-page .nav span:last-child{padding:.4cqw .9cqw;border-radius:2cqw;background:#fff;color:#0C0D10;font-weight:600;}
.v-pr-scroll-page .eb{display:inline-flex;gap:.5cqw;align-items:center;margin-top:2.4cqw;padding:.3cqw .8cqw;border-radius:2cqw;border:1px solid rgba(255,255,255,.18);font-size:.75cqw;color:#D4D5D9;}
.v-pr-scroll-page .eb i{width:.5cqw;height:.5cqw;border-radius:50%;background:var(--accent);}
.v-pr-scroll-page .h1{font-family:var(--font-display);font-weight:700;font-size:3.5cqw;line-height:1.08;letter-spacing:-.03em;margin-top:1.2cqw;}
.v-pr-scroll-page .sb{font-size:1cqw;color:#A6A7AB;margin:1cqw auto 0;width:34cqw;line-height:1.5;}
.v-pr-scroll-page .ctas{display:flex;gap:.7cqw;justify-content:center;margin-top:1.4cqw;font-size:.85cqw;font-weight:600;}
.v-pr-scroll-page .ctas span{padding:.55cqw 1.2cqw;border-radius:2cqw;border:1px solid rgba(255,255,255,.2);}
.v-pr-scroll-page .ctas span:first-child{background:var(--accent);border-color:var(--accent);}
.v-pr-scroll-page .peek{position:absolute;left:11cqw;right:11cqw;bottom:-1cqw;height:8.4cqw;border-radius:1cqw 1cqw 0 0;background:#16171A;border:1px solid rgba(255,255,255,.12);box-shadow:0 -1cqw 4cqw color-mix(in srgb,var(--secondary) 35%,transparent);padding:1.2cqw;display:flex;gap:1cqw;}
.v-pr-scroll-page .peek i{display:block;border-radius:.5cqw;background:#212225;}
.v-pr-scroll-page .s2{height:9cqw;background:#FAF7F2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.1cqw;}
.v-pr-scroll-page .s2 .k{font-size:.78cqw;color:#9C948C;}
.v-pr-scroll-page .lo{display:flex;gap:3.6cqw;align-items:center;color:#6F675F;}
.v-pr-scroll-page .lo span{display:flex;align-items:center;gap:.4cqw;font-size:1.2cqw;}
.v-pr-scroll-page .lo .a{font-family:var(--font-display);font-weight:800;letter-spacing:-.04em;}
.v-pr-scroll-page .lo .b{font-family:var(--font-display);font-style:italic;font-size:1.5cqw;}
.v-pr-scroll-page .lo .c{font-family:var(--font-display);font-weight:600;font-size:1cqw;letter-spacing:.06em;}
.v-pr-scroll-page .lo .d{font-family:var(--font-mono);font-weight:700;font-size:1.05cqw;}
.v-pr-scroll-page .lo .e{font-family:var(--font-body);font-weight:800;letter-spacing:-.05em;}
.v-pr-scroll-page .lo svg{width:1.3cqw;height:1.3cqw;}
.v-pr-scroll-page .s3{position:relative;height:34cqw;background:#FFF2E8;display:flex;align-items:center;gap:3cqw;padding:0 3.4cqw;}
.v-pr-scroll-page .tx{width:22cqw;flex:none;}
.v-pr-scroll-page .tx .eb2{display:inline-block;font-size:.78cqw;font-weight:600;color:color-mix(in srgb,var(--accent) 88%,#000);background:color-mix(in srgb,var(--accent) 16%,#fff);padding:.25cqw .7cqw;border-radius:2cqw;}
.v-pr-scroll-page .tx .h2{font-family:var(--font-display);font-weight:700;font-size:2.4cqw;letter-spacing:-.03em;line-height:1.05;margin-top:1cqw;}
.v-pr-scroll-page .tx .p{font-size:.95cqw;color:#6F675F;line-height:1.55;margin-top:1cqw;}
.v-pr-scroll-page .tx .ln{font-size:.92cqw;font-weight:600;margin-top:1.2cqw;color:color-mix(in srgb,var(--accent) 88%,#000);}
.v-pr-scroll-page .cv{position:relative;flex:1;height:25cqw;border-radius:1.2cqw;background:#fff radial-gradient(#E9DFD6 .1cqw,transparent .13cqw) 0 0/1.6cqw 1.6cqw;border:1px solid #F1E3D7;box-shadow:0 1cqw 2.4cqw rgba(160,80,30,.1);overflow:hidden;}
.v-pr-scroll-page .cv svg.w{position:absolute;inset:0;width:100%;height:100%;}
.v-pr-scroll-page .cv svg.w path{fill:none;stroke:color-mix(in srgb,var(--accent) 50%,#fff);stroke-width:1.6;stroke-dasharray:4 4;}
.v-pr-scroll-page .nd{position:absolute;background:#fff;border:1px solid #EFE5DC;border-radius:.8cqw;padding:.8cqw .9cqw;font-size:.8cqw;color:#6F675F;box-shadow:0 .6cqw 1.4cqw rgba(120,60,20,.1);}
.v-pr-scroll-page .nd b{display:flex;align-items:center;gap:.45cqw;font-size:.9cqw;color:#151619;margin-bottom:.35cqw;}
.v-pr-scroll-page .nd b i{width:1.2cqw;height:1.2cqw;border-radius:.35cqw;}
.v-pr-scroll-page .nd .bar{height:.45cqw;border-radius:1cqw;background:#F3ECE6;margin-top:.5cqw;overflow:hidden;}
.v-pr-scroll-page .nd .bar i{display:block;height:100%;width:64%;background:var(--accent);border-radius:1cqw;}
.v-pr-scroll-page .cur{position:absolute;left:0;top:0;}
.v-pr-scroll-page .cur svg{display:block;width:1.3cqw;height:1.6cqw;}
.v-pr-scroll-page .cur span{position:absolute;left:1cqw;top:1.2cqw;font-size:.7cqw;font-weight:600;color:#fff;padding:.1cqw .45cqw;border-radius:.35cqw;white-space:nowrap;}
.v-pr-scroll-page .u1{animation:pr-scroll-page-u1 6s ease-in-out infinite;}
.v-pr-scroll-page .u2{animation:pr-scroll-page-u2 6s ease-in-out infinite;}
.v-pr-scroll-page .hlr{position:absolute;inset:.9cqw;border-radius:1.4cqw;border:.22cqw solid var(--accent);box-shadow:0 0 0 .6cqw color-mix(in srgb,var(--accent) 14%,transparent),0 0 3cqw color-mix(in srgb,var(--accent) 35%,transparent);opacity:0;animation:pr-scroll-page-hl 6s linear infinite;}
.v-pr-scroll-page .s4{height:28cqw;background:#FAF7F2;padding:3cqw 3.4cqw;}
.v-pr-scroll-page .s4 .h2{font-family:var(--font-display);font-weight:700;font-size:2cqw;letter-spacing:-.03em;text-align:center;}
.v-pr-scroll-page .fg{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2cqw;margin-top:2cqw;}
.v-pr-scroll-page .fc{background:#fff;border:1px solid #EFE7DE;border-radius:1cqw;padding:1.4cqw;font-size:.85cqw;color:#6F675F;line-height:1.45;height:15cqw;}
.v-pr-scroll-page .fc .ic{width:2.4cqw;height:2.4cqw;border-radius:.7cqw;display:grid;place-items:center;color:#fff;margin-bottom:1cqw;}
.v-pr-scroll-page .fc .ic .i{width:1.3cqw;height:1.3cqw;}
.v-pr-scroll-page .fc b{display:block;font-size:1.05cqw;color:#151619;margin-bottom:.4cqw;}
.v-pr-scroll-page .s5{height:21cqw;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 8cqw;}
.v-pr-scroll-page .s5 .q{font-family:var(--font-display);font-size:2.5cqw;line-height:1.15;}
.v-pr-scroll-page .s5 .q span{font-style:italic;color:color-mix(in srgb,var(--accent) 88%,#000);}
.v-pr-scroll-page .s5 .by{font-size:.85cqw;color:#9C948C;margin-top:1.2cqw;}
.v-pr-scroll-page .s6{height:20cqw;background:#0C0D10;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.4cqw;}
.v-pr-scroll-page .s6 .h2{font-family:var(--font-display);font-weight:700;font-size:2.4cqw;letter-spacing:-.03em;}
.v-pr-scroll-page .s6 span{padding:.6cqw 1.4cqw;border-radius:2cqw;background:var(--accent);font-size:.9cqw;font-weight:600;}
.v-pr-scroll-page .sbar{position:absolute;right:.35cqw;top:4cqw;width:.45cqw;height:15cqw;border-radius:1cqw;background:rgba(40,30,25,.32);animation:pr-scroll-page-bar 6s linear infinite;}
.v-pr-scroll-page .tag{position:absolute;left:75cqw;top:14.6cqw;display:flex;align-items:center;gap:.7cqw;padding:.7cqw 1.2cqw .7cqw .8cqw;border-radius:2cqw;background:#151619;color:#fff;font-family:var(--font-display);font-weight:650;font-size:1.3cqw;white-space:nowrap;box-shadow:0 1cqw 2.4cqw rgba(80,30,10,.3);opacity:0;animation:pr-scroll-page-tag 6s linear infinite;}
.v-pr-scroll-page .tag i{width:1.5cqw;height:1.5cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--accent) 30%,transparent);}
.v-pr-scroll-page .tag span{font-weight:500;color:#B8BABE;font-size:1cqw;}
@keyframes pr-scroll-page-scroll{
  0%,8%{transform:translateY(0);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  30%{transform:translateY(-39.6cqw);animation-timing-function:linear;}
  62%{transform:translateY(-43.2cqw);animation-timing-function:cubic-bezier(.55,0,.35,1);}
  82%,86%{transform:translateY(-103.65cqw);animation-timing-function:cubic-bezier(.7,0,.25,1);}
  97%,100%{transform:translateY(0);}
}
@keyframes pr-scroll-page-bar{
  0%,8%{transform:translateY(0);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  30%{transform:translateY(12.42cqw);animation-timing-function:linear;}
  62%{transform:translateY(13.55cqw);animation-timing-function:cubic-bezier(.55,0,.35,1);}
  82%,86%{transform:translateY(32.5cqw);animation-timing-function:cubic-bezier(.7,0,.25,1);}
  97%,100%{transform:translateY(0);}
}
@keyframes pr-scroll-page-hl{0%,28%{opacity:0;transform:scale(1.025);animation-timing-function:cubic-bezier(.2,.8,.2,1);}34%,60%{opacity:1;transform:scale(1);}65%,100%{opacity:0;transform:scale(1);}}
@keyframes pr-scroll-page-tag{0%,31%{opacity:0;transform:translateX(-1.5cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}37%,60%{opacity:1;transform:none;}64%,100%{opacity:0;transform:translateX(.8cqw);}}
@keyframes pr-scroll-page-u1{0%,100%{transform:translate(20cqw,15cqw);}35%{transform:translate(23cqw,12.5cqw);}55%{transform:translate(22cqw,13.6cqw);}75%{transform:translate(18cqw,16.5cqw);}}
@keyframes pr-scroll-page-u2{0%,100%{transform:translate(6cqw,19cqw);}30%{transform:translate(8.5cqw,20.5cqw);}55%{transform:translate(10cqw,19.2cqw);}80%{transform:translate(7cqw,18cqw);}}.v-pr-scroll-page .tag{font-size:1.5cqw;max-width:24cqw;white-space:normal;line-height:1.15;color:#fff;background:#151619}
@container (max-aspect-ratio: 4/5){
  .v-pr-scroll-page .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-scroll-page .tag{left:8cqw;top:138cqw;max-width:84cqw;font-size:5.6cqw;gap:3cqw;padding:2.4cqw 4.4cqw 2.4cqw 3.4cqw;border-radius:8cqw}
  .v-pr-scroll-page .tag i{width:4.4cqw;height:4.4cqw;flex:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-scroll-page .mg-over{transform:none;width:100cqw;height:100cqh}
  .v-pr-scroll-page .tag{left:auto;right:6cqw;top:auto;bottom:4.4cqw;max-width:46cqw;font-size:2.6cqw;gap:1.4cqw;padding:1.1cqw 2cqw 1.1cqw 1.4cqw;border-radius:4cqw}
  .v-pr-scroll-page .tag i{width:2cqw;height:2cqw;flex:none}
}

.v-pr-scroll-page .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-scroll-page .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-scroll-page-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-scroll-page .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-scroll-page .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:700;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-scroll-page .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-scroll-page-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-scroll-page .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-scroll-page-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-scroll-page .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-scroll-page .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-scroll-page .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-scroll-page .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-scroll-page .mg-hl{margin-top:2.4cqw;font-size:9.6cqw;line-height:1.04}
  .v-pr-scroll-page .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-scroll-page .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-scroll-page .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-scroll-page .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-scroll-page .mg-hl{margin-top:1.2cqw;font-size:6cqw}
  .v-pr-scroll-page .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-scroll-page-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-scroll-page-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prTiltPan: SceneSpec = {
  id: "pr-tilt-pan",
  slug: "mg-pr-tilt-pan",
  name: "Tilt To Flat Screen",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "perspective-tilt-to-flat",
  energy: "calm",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#E9ECFF", accent: "#3A4FE0", secondary: "#9DB1FF", paper: "#070A16" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["3d", "tilt", "reveal"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen agents", maxChars: 28, role: "kicker" },
    { key: "headline", label: "Headline", default: "Agents that finish the job", maxChars: 40, role: "headline" },
    { key: "cta", label: "Call to action", default: "12 running right now", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="floor"></div>
    <div class="pool"></div>
    <div class="cam">
      
      <div class="rig">
        <div class="slab"></div>
        <div class="scr">
          <div class="top">
            <b><i></i>Agents</b>
            <span class="tabs"><span class="on">Board</span><span>Runs</span><span>Logs</span></span>
            <span>12 active · 3 need review</span>
            <span class="nb"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>New agent</span>
          </div>
          <div class="board">
            <div>
              <div class="colh"><i style="background:#B4BAD0"></i>Queued<span>2</span></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#FF8A3D"><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg></span><b>Spec Writer<span>Growth</span></b></div><div class="ds">Draft the spec for annual billing from the pricing thread.</div><div class="mt"><i style="background:linear-gradient(135deg,#FFB86B,#FF6B6B)"></i>Starts 2:30 pm</div></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#121521"><svg class="i" viewBox="0 0 24 24"><path d="M3 13h5l1.5 3h5l1.5-3h5"/><path d="M5.5 5h13l2.5 8v6H3v-6z"/></svg></span><b>Inbox Triage<span>Support</span></b></div><div class="ds">Tag and route 48 new tickets.</div></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#1FB89A"><svg class="i" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg></span><b>Metrics Watch<span>Finance</span></b></div><div class="ds">Flag anomalies in Monday revenue.</div><div class="mt"><i style="background:linear-gradient(135deg,#7FD1FF,#4A7BFF)"></i>Starts 9:00 am</div></div>
            </div>
            <div>
              <div class="colh"><i style="background:var(--accent)"></i>Running<span>3</span></div>
              <div class="cd"><div class="ch"><span class="t" style="background:var(--accent)"><svg class="i" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></span><b>Research Scout<span>Q4 market scan</span></b></div><div class="ds">Reading 12 competitor pricing pages.</div><div class="pr"><i class="p1"></i></div><div class="mt"><span>Step 3 of 5</span><span>1m 12s</span></div></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#828488"><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg></span><b>Release Notes<span>Lumen 2.0</span></b></div><div class="ds">Summarizing 86 merged PRs.</div><div class="pr"><i class="p2"></i></div><div class="mt"><span>Almost done</span><span>3m 40s</span></div></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#E2552D"><svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><b>Design QA<span>Canvas</span></b></div><div class="ds">Checking 14 screens against the system.</div><div class="pr"><i class="p1" style="background:linear-gradient(90deg,#FF9A6B,#E2552D)"></i></div><div class="mt"><span>Step 2 of 4</span><span>52s</span></div></div>
            </div>
            <div>
              <div class="colh"><i style="background:#159A63"></i>Done<span>9</span></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#159A63"><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg></span><b>Churn Digest<span>Weekly</span></b></div><div class="ds">Onboarding drop-off explains 62% of churn.</div><div class="mt"><span class="ok"><svg class="i" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>Shipped to #growth</span><span>9:04</span></div></div>
              <div class="cd"><div class="ch"><span class="t" style="background:#E0A21B"><svg class="i" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span><b>Meeting Prep<span>Board sync</span></b></div><div class="mt"><span class="ok"><svg class="i" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>Brief ready</span><span>8:30</span></div></div>
              <div class="cd"><div class="ch"><span class="t" style="background:var(--accent)"><svg class="i" viewBox="0 0 24 24"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg></span><b>Invoice Recon<span>Finance</span></b></div><div class="ds">Matched 312 of 312 invoices.</div><div class="mt"><span class="ok"><svg class="i" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>Zero mismatches</span><span>7:52</span></div></div>
            </div>
          </div>
          <div class="sheen"></div>
        </div>
      </div>
    </div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-tilt-pan{color:var(--ink);font-family:var(--font-body)}
.v-pr-tilt-pan[data-backdrop="on"]{background:radial-gradient(70cqw 34cqw at 50% -6%,color-mix(in srgb,var(--accent) 35%,var(--paper)),transparent 70%),radial-gradient(60cqw 18cqw at 50% 100%,color-mix(in srgb,var(--accent) 22%,transparent),transparent 70%),linear-gradient(180deg,color-mix(in srgb,var(--paper) 90%,#343538),var(--paper))}
.v-pr-tilt-pan[data-backdrop="off"] .floor,.v-pr-tilt-pan[data-backdrop="off"] .pool{display:none}
.v-pr-tilt-pan .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(6.25cqw,7.25cqw) scale(0.875);color:#121521}
@container (max-aspect-ratio: 4/5){.v-pr-tilt-pan .mg-design{transform:translate(-13.514cqw,66.892cqw) scale(1.2703)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-tilt-pan .mg-design{transform:translate(-11.458cqw,18.625cqw) scale(1.2292)}}

.v-pr-tilt-pan *{box-sizing:border-box;margin:0;}
.v-pr-tilt-pan .i{width:1cqw;height:1cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-tilt-pan .floor{position:absolute;left:-20cqw;right:-20cqw;bottom:-6cqw;height:26cqw;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--secondary) 12%,transparent) 0 1px,transparent 1px 4cqw),repeating-linear-gradient(0deg,color-mix(in srgb,var(--secondary) 12%,transparent) 0 1px,transparent 1px 4cqw);transform:perspective(40cqw) rotateX(62deg);transform-origin:50% 100%;-webkit-mask:linear-gradient(180deg,transparent,#000 60%);mask:linear-gradient(180deg,transparent,#000 60%);opacity:.7;}
.v-pr-tilt-pan .pool{position:absolute;left:20cqw;top:38cqw;width:60cqw;height:16cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--accent) 55%,transparent),transparent);opacity:.3;animation:pr-tilt-pan-pool 6s linear infinite;}
.v-pr-tilt-pan .cam{position:absolute;inset:0;perspective:110cqw;perspective-origin:50% 35%;opacity:0;animation:pr-tilt-pan-cam 6s linear infinite;}
.v-pr-tilt-pan .rig{position:absolute;left:15cqw;top:8.6cqw;width:70cqw;height:39.4cqw;transform-style:preserve-3d;animation:pr-tilt-pan-rig 6s linear infinite;}
.v-pr-tilt-pan .slab{position:absolute;inset:0;border-radius:1.4cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 30%,#2A3050),#161B33);transform:translateZ(-1.2cqw);box-shadow:0 3cqw 6cqw rgba(0,0,0,.6);}
.v-pr-tilt-pan .scr{position:absolute;inset:0;border-radius:1.4cqw;background:#F6F7FB;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.35),0 0 4cqw color-mix(in srgb,var(--accent) 25%,transparent);}
.v-pr-tilt-pan .top{height:3.4cqw;display:flex;align-items:center;gap:1.4cqw;padding:0 1.4cqw;background:#fff;border-bottom:1px solid #E9EBF3;font-size:.9cqw;color:#717791;}
.v-pr-tilt-pan .top b{display:flex;align-items:center;gap:.5cqw;color:#121521;font-size:1.1cqw;}
.v-pr-tilt-pan .top b i{width:1.5cqw;height:1.5cqw;border-radius:.45cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 65%,#fff),var(--accent));}
.v-pr-tilt-pan .tabs{display:flex;gap:.3cqw;background:#F1F2F8;padding:.2cqw;border-radius:.55cqw;}
.v-pr-tilt-pan .tabs span{padding:.3cqw .8cqw;border-radius:.4cqw;}
.v-pr-tilt-pan .tabs .on{background:#fff;color:#121521;font-weight:550;box-shadow:0 .1cqw .3cqw rgba(25,26,29,.08);}
.v-pr-tilt-pan .top .nb{margin-left:auto;display:flex;align-items:center;gap:.4cqw;padding:.45cqw .9cqw;border-radius:.55cqw;background:#121521;color:#fff;font-weight:550;}
.v-pr-tilt-pan .board{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2cqw;padding:1.4cqw;}
.v-pr-tilt-pan .colh{display:flex;align-items:center;gap:.5cqw;font-size:.9cqw;font-weight:600;margin-bottom:.8cqw;}
.v-pr-tilt-pan .colh i{width:.6cqw;height:.6cqw;border-radius:50%;}
.v-pr-tilt-pan .colh span{font-weight:500;color:#9AA0B8;font-size:.8cqw;}
.v-pr-tilt-pan .cd{background:#fff;border:1px solid #E9EBF3;border-radius:.9cqw;padding:.9cqw 1cqw;margin-bottom:.8cqw;box-shadow:0 .2cqw .6cqw rgba(20,30,80,.04);}
.v-pr-tilt-pan .ch{display:flex;align-items:center;gap:.6cqw;}
.v-pr-tilt-pan .ch .t{width:1.8cqw;height:1.8cqw;border-radius:.5cqw;display:grid;place-items:center;color:#fff;flex:none;}
.v-pr-tilt-pan .ch .t .i{width:1cqw;height:1cqw;}
.v-pr-tilt-pan .ch b{font-size:.92cqw;font-weight:600;}
.v-pr-tilt-pan .ch b span{display:block;font-size:.72cqw;color:#9AA0B8;font-weight:450;margin-top:.1cqw;}
.v-pr-tilt-pan .ds{font-size:.8cqw;color:#5D6380;line-height:1.45;margin-top:.6cqw;}
.v-pr-tilt-pan .pr{height:.45cqw;border-radius:1cqw;background:#EEF0F7;margin-top:.7cqw;overflow:hidden;}
.v-pr-tilt-pan .pr i{display:block;height:100%;border-radius:1cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 65%,#fff),var(--accent));transform-origin:0 50%;}
.v-pr-tilt-pan .p1{animation:pr-tilt-pan-p1 6s linear infinite;}
.v-pr-tilt-pan .p2{animation:pr-tilt-pan-p2 6s linear infinite;}
.v-pr-tilt-pan .mt{display:flex;align-items:center;justify-content:space-between;margin-top:.7cqw;font-size:.72cqw;color:#9AA0B8;}
.v-pr-tilt-pan .mt i{width:1.3cqw;height:1.3cqw;border-radius:50%;}
.v-pr-tilt-pan .ok{display:inline-flex;align-items:center;gap:.3cqw;color:#159A63;font-weight:550;}
.v-pr-tilt-pan .ok .i{width:.85cqw;height:.85cqw;stroke-width:2.8;}
.v-pr-tilt-pan .sheen{position:absolute;top:-20%;bottom:-20%;left:0;width:40%;background:linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,.55) 50%,rgba(255,255,255,0));transform:translateX(-120%);animation:pr-tilt-pan-sheen 6s linear infinite;}
.v-pr-tilt-pan .cap{position:absolute;left:0;right:0;top:3cqw;text-align:center;font-family:var(--font-display);font-size:2.4cqw;color:#E9ECFF;letter-spacing:-.01em;opacity:0;animation:pr-tilt-pan-cap 6s linear infinite;}
.v-pr-tilt-pan .cap span{font-style:italic;color:var(--secondary);}
@keyframes pr-tilt-pan-cam{
  0%{opacity:0;transform:scale(.94);}
  6%{opacity:1;transform:scale(.95);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  46%{opacity:1;transform:scale(1);animation-timing-function:cubic-bezier(.3,0,.5,1);}
  88%{opacity:1;transform:scale(1.13);animation-timing-function:cubic-bezier(.5,0,.75,0);}
  95%,100%{opacity:0;transform:scale(1.15);}
}
@keyframes pr-tilt-pan-rig{
  0%{transform:translateY(3cqw) rotateX(34deg) rotateY(-30deg) rotateZ(9deg) scale(.84);animation-timing-function:cubic-bezier(.4,0,.6,1);}
  8%{transform:translateY(2.6cqw) rotateX(33deg) rotateY(-28deg) rotateZ(8.5deg) scale(.85);animation-timing-function:cubic-bezier(.65,0,.25,1);}
  46%{transform:translateY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);}
  95%{transform:translateY(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1);}
  96%,100%{transform:translateY(3cqw) rotateX(34deg) rotateY(-30deg) rotateZ(9deg) scale(.84);}
}
@keyframes pr-tilt-pan-pool{0%,8%{opacity:.25;transform:scale(.8);}46%,88%{opacity:1;transform:scale(1.1);}96%,100%{opacity:.25;transform:scale(.8);}}
@keyframes pr-tilt-pan-sheen{0%,14%{transform:translateX(-120%);animation-timing-function:cubic-bezier(.4,0,.3,1);}46%,100%{transform:translateX(320%);}}
@keyframes pr-tilt-pan-p1{0%{transform:scaleX(.32);}90%,100%{transform:scaleX(.88);}}
@keyframes pr-tilt-pan-p2{0%{transform:scaleX(.6);}90%,100%{transform:scaleX(.97);}}
@keyframes pr-tilt-pan-cap{0%,40%{opacity:0;transform:translateY(1cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}48%,84%{opacity:1;transform:none;}90%,100%{opacity:0;transform:translateY(-.5cqw);}}.v-pr-tilt-pan .mg-hl .w:last-child{font-style:italic;color:var(--secondary)}

.v-pr-tilt-pan .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-tilt-pan .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-tilt-pan-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-tilt-pan .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-tilt-pan .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:400;font-size:3.6cqw;line-height:1.06;letter-spacing:-.01em;color:var(--ink)}
.v-pr-tilt-pan .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-tilt-pan-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-tilt-pan .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-tilt-pan-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-tilt-pan .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-tilt-pan .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-tilt-pan .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-tilt-pan .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-tilt-pan .mg-hl{margin-top:2.4cqw;font-size:11cqw;line-height:1.04}
  .v-pr-tilt-pan .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-tilt-pan .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-tilt-pan .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-tilt-pan .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-tilt-pan .mg-hl{margin-top:1.2cqw;font-size:6.6cqw}
  .v-pr-tilt-pan .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-tilt-pan-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-tilt-pan-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prSplitProof: SceneSpec = {
  id: "pr-split-proof",
  slug: "mg-pr-split-proof",
  name: "Chat Beside Chart",
  kind: "scene",
  job: "product-ui",
  language: "glass",
  mechanic: "chat-to-chart-sync",
  energy: "default",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#1A1C1F", accent: "#3D63FF", secondary: "#5CC8F5", paper: "#EEF0F4" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["chat", "chart", "split-screen"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Analytics agent", maxChars: 28, role: "kicker" },
    { key: "headline", label: "Headline", default: "Ask for a chart, get the proof", maxChars: 40, role: "headline" },
    { key: "cta", label: "Call to action", default: "Organic signups up 38%", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="pn chat">
      <div class="hd"><span class="lg"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><span><b>Analytics agent</b><span class="sub">Connected to billing and events</span></span></div>
      <div class="msgs">
        <div class="m u m1">Chart weekly signups by channel</div>
        <div class="m a m2"><span class="lg"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><div class="bb">Here are the last 8 weeks: 14.2k signups.<br><span class="chip"><svg class="i" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7"/></svg>Bar chart · v1</span></div></div>
        <div class="m u m3">Stack by channel and add a 2k goal line</div>
        <div class="m a m4"><span class="lg"><svg viewBox="0 0 24 24"><path d="M12 2.5l2.2 6.6 6.8.9-6.8 2.1L12 21.5l-2.2-9.4L3 10l6.8-.9z"/></svg></span><div class="bb">Done. Organic is carrying the quarter, up 38%.<br><span class="chip"><svg class="i" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7"/></svg>Stacked · v2</span></div></div>
      </div>
      <div class="cmp">Ask a follow-up…<span><svg class="i" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span></div>
    </div>
    <div class="pn out">
      <div class="oh">Signups by channel<span class="ver"><span class="v1">v1</span><span class="v2">v2</span></span><span class="live"><i></i>Live</span><span class="ex">Export</span></div>
      <div class="lgd"><div class="l1"><span><i style="background:color-mix(in srgb,var(--accent) 34%,#fff)"></i>Total signups</span><b>14.2k</b></div><div class="l2"><span><i style="background:var(--accent)"></i>Organic</span><span><i style="background:var(--secondary)"></i>Paid</span><span><i style="background:#FFA36B"></i>Referral</span><b>14.2k</b></div></div>
      <div class="plot">
        <div class="grid"><div style="bottom:calc(2cqw + (100% - 2cqw) * 0.0000)"><span>0k</span></div><div style="bottom:calc(2cqw + (100% - 2cqw) * 0.3333)"><span>1k</span></div><div style="bottom:calc(2cqw + (100% - 2cqw) * 0.6667)"><span>2k</span></div><div style="bottom:calc(2cqw + (100% - 2cqw) * 1.0000)"><span>3k</span></div></div>
        <div class="bars"><div class="col"><div class="bar b1" style="height:calc((100% - 2cqw) * 0.44)"><i class="sr" style="height:18%"></i><i class="sp" style="height:34%"></i><i class="so" style="height:48%"></i><i class="mono"></i></div><span>W33</span></div><div class="col"><div class="bar b2" style="height:calc((100% - 2cqw) * 0.4833)"><i class="sr" style="height:17%"></i><i class="sp" style="height:31%"></i><i class="so" style="height:52%"></i><i class="mono"></i></div><span>W34</span></div><div class="col"><div class="bar b3" style="height:calc((100% - 2cqw) * 0.5033)"><i class="sr" style="height:18%"></i><i class="sp" style="height:30%"></i><i class="so" style="height:52%"></i><i class="mono"></i></div><span>W35</span></div><div class="col"><div class="bar b4" style="height:calc((100% - 2cqw) * 0.56)"><i class="sr" style="height:17%"></i><i class="sp" style="height:28%"></i><i class="so" style="height:55%"></i><i class="mono"></i></div><span>W36</span></div><div class="col"><div class="bar b5" style="height:calc((100% - 2cqw) * 0.58)"><i class="sr" style="height:17%"></i><i class="sp" style="height:27%"></i><i class="so" style="height:56%"></i><i class="mono"></i></div><span>W37</span></div><div class="col"><div class="bar b6" style="height:calc((100% - 2cqw) * 0.65)"><i class="sr" style="height:16%"></i><i class="sp" style="height:26%"></i><i class="so" style="height:58%"></i><i class="mono"></i></div><span>W38</span></div><div class="col"><div class="bar b7" style="height:calc((100% - 2cqw) * 0.7067)"><i class="sr" style="height:15%"></i><i class="sp" style="height:25%"></i><i class="so" style="height:60%"></i><i class="mono"></i></div><span>W39</span></div><div class="col"><div class="bar b8" style="height:calc((100% - 2cqw) * 0.81)"><i class="sr" style="height:14%"></i><i class="sp" style="height:24%"></i><i class="so" style="height:62%"></i><i class="mono"></i></div><span>W40</span></div></div>
        <div class="goal"><span>goal 2,000</span></div>
        <div class="call"><svg class="i" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg>Organic +38%</div>
      </div>
      <div class="flash"></div>
    </div>
    <div class="beam"></div>
    <div class="sync"><svg class="i" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg></div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-split-proof{color:var(--ink);font-family:var(--font-body)}
.v-pr-split-proof[data-backdrop="on"]{background:radial-gradient(45cqw 35cqw at 8% 6%,color-mix(in srgb,var(--accent) 28%,var(--paper)),transparent 70%),radial-gradient(40cqw 32cqw at 96% 12%,color-mix(in srgb,#FFB08A 35%,var(--paper)),transparent 70%),radial-gradient(50cqw 30cqw at 60% 108%,color-mix(in srgb,var(--secondary) 30%,var(--paper)),transparent 70%),var(--paper)}
.v-pr-split-proof .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(5.556cqw,8.5cqw) scale(0.8889);color:#1A1C1F}
@container (max-aspect-ratio: 4/5){.v-pr-split-proof .mg-design{transform:translate(9.05cqw,56cqw) scale(1.03)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-split-proof .mg-design{transform:translate(0.538cqw,27.677cqw) scale(0.9892)}}

.v-pr-split-proof *{box-sizing:border-box;margin:0;}
.v-pr-split-proof .i{width:1cqw;height:1cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-split-proof .pn{position:absolute;top:4.5cqw;height:47.25cqw;border-radius:1.6cqw;background:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.85);box-shadow:0 .4cqw 1cqw rgba(57,59,62,.06),0 2.4cqw 5cqw rgba(57,59,62,.14),inset 0 1px 0 #fff;overflow:hidden;}
.v-pr-split-proof .chat{left:3.5cqw;width:33cqw;display:flex;flex-direction:column;}
.v-pr-split-proof .out{left:38.5cqw;width:58cqw;padding:1.5cqw 1.8cqw;}
.v-pr-split-proof .hd{display:flex;align-items:center;gap:.7cqw;height:4.4cqw;padding:0 1.4cqw;border-bottom:1px solid rgba(45,71,165,.08);font-size:.95cqw;}
.v-pr-split-proof .lg{width:1.9cqw;height:1.9cqw;border-radius:.6cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 80%,#fff),color-mix(in srgb,var(--accent) 85%,#000));display:grid;place-items:center;flex:none;}
.v-pr-split-proof .lg svg{width:1.1cqw;height:1.1cqw;fill:#fff;}
.v-pr-split-proof .hd b{font-weight:600;}
.v-pr-split-proof .hd .sub{font-size:.75cqw;color:#8B8C90;display:block;margin-top:.1cqw;font-weight:400;}
.v-pr-split-proof .msgs{flex:1;padding:1.3cqw 1.3cqw 0;display:flex;flex-direction:column;gap:1cqw;}
.v-pr-split-proof .m{position:relative;font-size:.95cqw;line-height:1.45;opacity:0;}
.v-pr-split-proof .m.u{align-self:flex-end;max-width:80%;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 85%,#000));color:#fff;padding:.7cqw 1cqw;border-radius:1.1cqw 1.1cqw .3cqw 1.1cqw;box-shadow:0 .6cqw 1.4cqw color-mix(in srgb,var(--accent) 30%,transparent);}
.v-pr-split-proof .m.a{display:flex;gap:.7cqw;max-width:92%;}
.v-pr-split-proof .m.a .lg{width:1.7cqw;height:1.7cqw;}
.v-pr-split-proof .m.a .bb{background:#fff;padding:.7cqw 1cqw;border-radius:.3cqw 1.1cqw 1.1cqw 1.1cqw;box-shadow:0 .3cqw 1cqw rgba(57,59,62,.08);}
.v-pr-split-proof .chip{display:inline-flex;align-items:center;gap:.35cqw;margin-top:.5cqw;font-size:.75cqw;font-weight:550;color:color-mix(in srgb,var(--accent) 85%,#000);background:color-mix(in srgb,var(--accent) 10%,#fff);padding:.2cqw .55cqw;border-radius:.45cqw;}
.v-pr-split-proof .chip .i{width:.85cqw;height:.85cqw;}
.v-pr-split-proof .ty{position:absolute;left:2.4cqw;top:0;display:flex;gap:.3cqw;background:#fff;padding:.75cqw .9cqw;border-radius:.3cqw 1.1cqw 1.1cqw 1.1cqw;box-shadow:0 .3cqw 1cqw rgba(57,59,62,.08);}
.v-pr-split-proof .ty i{width:.5cqw;height:.5cqw;border-radius:50%;background:#B3B4B8;animation:pr-split-proof-dot 6s linear infinite;}
.v-pr-split-proof .ty i:nth-child(2){animation-name:pr-split-proof-dot2;}
.v-pr-split-proof .ty i:nth-child(3){animation-name:pr-split-proof-dot3;}
.v-pr-split-proof .m1{animation:pr-split-proof-m1 6s linear infinite;}
.v-pr-split-proof .m2{animation:pr-split-proof-m2 6s linear infinite;}
.v-pr-split-proof .m3{animation:pr-split-proof-m3 6s linear infinite;}
.v-pr-split-proof .m4{animation:pr-split-proof-m4 6s linear infinite;}
.v-pr-split-proof .t2{opacity:0;animation:pr-split-proof-t2 6s linear infinite;}
.v-pr-split-proof .t4{opacity:0;animation:pr-split-proof-t4 6s linear infinite;}
.v-pr-split-proof .cmp{margin:1.2cqw;height:3.2cqw;display:flex;align-items:center;padding:0 .4cqw 0 1cqw;border-radius:1cqw;background:#fff;font-size:.88cqw;color:#A0A1A5;box-shadow:0 .3cqw 1cqw rgba(57,59,62,.06);}
.v-pr-split-proof .cmp span{margin-left:auto;width:2.4cqw;height:2.4cqw;border-radius:.7cqw;background:#1A1C1F;color:#fff;display:grid;place-items:center;}
.v-pr-split-proof .oh{display:flex;align-items:center;gap:.8cqw;font-size:1.25cqw;font-weight:650;letter-spacing:-.01em;}
.v-pr-split-proof .oh .ver{position:relative;width:2.6cqw;height:1.5cqw;font-family:var(--font-mono);font-size:.75cqw;font-weight:600;}
.v-pr-split-proof .oh .ver span{position:absolute;inset:0;display:grid;place-items:center;border-radius:.4cqw;}
.v-pr-split-proof .oh .v1{background:#EBEDF1;color:#6D6E72;animation:pr-split-proof-v1 6s linear infinite;}
.v-pr-split-proof .oh .v2{background:#1A1C1F;color:#fff;opacity:0;animation:pr-split-proof-v2 6s linear infinite;}
.v-pr-split-proof .oh .live{margin-left:auto;display:flex;align-items:center;gap:.45cqw;font-size:.8cqw;font-weight:550;color:#159A63;}
.v-pr-split-proof .oh .live i{width:.6cqw;height:.6cqw;border-radius:50%;background:#22C55E;box-shadow:0 0 0 .3cqw rgba(34,197,94,.2);animation:pr-split-proof-live 6s linear infinite;}
.v-pr-split-proof .oh .ex{font-size:.8cqw;font-weight:550;padding:.4cqw .8cqw;border-radius:.5cqw;background:#fff;box-shadow:0 0 0 1px #E3E5E9;}
.v-pr-split-proof .lgd{position:relative;height:1.8cqw;margin-top:.8cqw;font-size:.78cqw;color:#6D6E72;}
.v-pr-split-proof .lgd div{position:absolute;left:0;top:0;display:flex;gap:1.2cqw;align-items:center;height:100%;}
.v-pr-split-proof .lgd span{display:flex;align-items:center;gap:.35cqw;}
.v-pr-split-proof .lgd span i{width:.7cqw;height:.7cqw;border-radius:.2cqw;}
.v-pr-split-proof .lgd .l1{animation:pr-split-proof-v1 6s linear infinite;}
.v-pr-split-proof .lgd .l2{opacity:0;animation:pr-split-proof-v2 6s linear infinite;}
.v-pr-split-proof .lgd b{font-family:var(--font-mono);font-weight:600;color:#1A1C1F;font-size:.85cqw;}
.v-pr-split-proof .plot{position:relative;margin-top:1.2cqw;height:37.5cqw;margin-left:2.6cqw;}
.v-pr-split-proof .grid{position:absolute;inset:0;}
.v-pr-split-proof .grid div{position:absolute;left:0;right:0;border-top:1px solid rgba(45,71,165,.1);}
.v-pr-split-proof .grid span{position:absolute;left:-2.6cqw;top:-.55cqw;font-family:var(--font-mono);font-size:.7cqw;color:#A0A1A5;}
.v-pr-split-proof .bars{position:absolute;left:1cqw;right:1cqw;top:0;bottom:0;display:flex;justify-content:space-between;}
.v-pr-split-proof .col{width:3.8cqw;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:.6cqw;padding-top:0;height:100%;}
.v-pr-split-proof .col span{flex:none;font-family:var(--font-mono);font-size:.68cqw;color:#A0A1A5;height:1.4cqw;}
.v-pr-split-proof .bar{position:relative;flex:none;width:100%;display:flex;flex-direction:column;border-radius:.6cqw .6cqw .2cqw .2cqw;overflow:hidden;transform-origin:50% 100%;transform:scaleY(0);}
.v-pr-split-proof .bar i{display:block;width:100%;}
.v-pr-split-proof .so{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 85%,#fff),color-mix(in srgb,var(--accent) 88%,#000));}
.v-pr-split-proof .sp{background:var(--secondary);}
.v-pr-split-proof .sr{background:#FFA36B;}
.v-pr-split-proof .mono{position:absolute;inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 22%,#fff),color-mix(in srgb,var(--accent) 34%,#fff));animation:pr-split-proof-mono 6s linear infinite;}
.v-pr-split-proof .goal{position:absolute;left:0;right:0;bottom:calc(2cqw + (100% - 2cqw) * .6667);height:0;border-top:.16cqw dashed #1A1C1F;clip-path:inset(-1cqw 100% -1cqw 0);animation:pr-split-proof-goal 6s linear infinite;}
.v-pr-split-proof .goal span{position:absolute;left:1cqw;top:-1.9cqw;font-size:.72cqw;font-weight:600;background:#1A1C1F;color:#fff;padding:.15cqw .5cqw;border-radius:.4cqw;font-family:var(--font-mono);}
.v-pr-split-proof .call{position:absolute;right:-.6cqw;bottom:calc(2cqw + (100% - 2cqw) * .81 + 3.2cqw);display:flex;align-items:center;gap:.4cqw;padding:.45cqw .75cqw;border-radius:.7cqw;background:#fff;box-shadow:0 .8cqw 2cqw rgba(57,59,62,.2);font-size:.85cqw;font-weight:650;color:color-mix(in srgb,var(--accent) 85%,#000);white-space:nowrap;transform-origin:70% 120%;opacity:0;animation:pr-split-proof-call 6s linear infinite;}
.v-pr-split-proof .call::after{content:"";position:absolute;right:2cqw;bottom:-.45cqw;width:.9cqw;height:.9cqw;background:#fff;transform:rotate(45deg);}
.v-pr-split-proof .flash{position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 .2cqw color-mix(in srgb,var(--accent) 75%,transparent),0 0 3cqw color-mix(in srgb,var(--accent) 35%,transparent);opacity:0;pointer-events:none;animation:pr-split-proof-flash 6s linear infinite;}
.v-pr-split-proof .sync{position:absolute;left:36.1cqw;top:26.4cqw;width:2.8cqw;height:2.8cqw;border-radius:50%;background:#1A1C1F;color:#fff;display:grid;place-items:center;box-shadow:0 0 0 .35cqw rgba(255,255,255,.7),0 .8cqw 1.6cqw rgba(57,59,62,.3);z-index:3;animation:pr-split-proof-sync 6s linear infinite;}
.v-pr-split-proof .sync .i{width:1.3cqw;height:1.3cqw;}
.v-pr-split-proof .beam{position:absolute;left:38cqw;top:27.5cqw;width:14cqw;height:.6cqw;border-radius:1cqw;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--accent) 90%,transparent),transparent);opacity:0;z-index:2;animation:pr-split-proof-beam 6s linear infinite;}
.v-pr-split-proof .b1{animation:pr-split-proof-b1 6s linear infinite;}
.v-pr-split-proof .b2{animation:pr-split-proof-b2 6s linear infinite;}
.v-pr-split-proof .b3{animation:pr-split-proof-b3 6s linear infinite;}
.v-pr-split-proof .b4{animation:pr-split-proof-b4 6s linear infinite;}
.v-pr-split-proof .b5{animation:pr-split-proof-b5 6s linear infinite;}
.v-pr-split-proof .b6{animation:pr-split-proof-b6 6s linear infinite;}
.v-pr-split-proof .b7{animation:pr-split-proof-b7 6s linear infinite;}
.v-pr-split-proof .b8{animation:pr-split-proof-b8 6s linear infinite;}

@keyframes pr-split-proof-m1{0%,3%{opacity:0;transform:translateY(1cqw) scale(.96);animation-timing-function:cubic-bezier(.16,1,.3,1);}8%,86%{opacity:1;transform:none;}91%,100%{opacity:0;transform:none;}}
@keyframes pr-split-proof-t2{0%,8%{opacity:0;}9%,12%{opacity:1;}13%,100%{opacity:0;}}
@keyframes pr-split-proof-m2{0%,12%{opacity:0;transform:translateY(.8cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}16%,86%{opacity:1;transform:none;}91%,100%{opacity:0;transform:none;}}
@keyframes pr-split-proof-m3{0%,26%{opacity:0;transform:translateY(1cqw) scale(.96);animation-timing-function:cubic-bezier(.16,1,.3,1);}31%,86%{opacity:1;transform:none;}91%,100%{opacity:0;transform:none;}}
@keyframes pr-split-proof-t4{0%,31%{opacity:0;}32%,35%{opacity:1;}36%,100%{opacity:0;}}
@keyframes pr-split-proof-m4{0%,35%{opacity:0;transform:translateY(.8cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}39%,86%{opacity:1;transform:none;}91%,100%{opacity:0;transform:none;}}
@keyframes pr-split-proof-dot{0%,100%{transform:translateY(0);opacity:.5;}9%,32%{transform:translateY(-.25cqw);opacity:1;}10.5%,33.5%{transform:translateY(0);opacity:.5;}}
@keyframes pr-split-proof-dot2{0%,100%{transform:translateY(0);opacity:.5;}10%,33%{transform:translateY(-.25cqw);opacity:1;}11.5%,34.5%{transform:translateY(0);opacity:.5;}}
@keyframes pr-split-proof-dot3{0%,100%{transform:translateY(0);opacity:.5;}11%,34%{transform:translateY(-.25cqw);opacity:1;}12.5%,35.5%{transform:translateY(0);opacity:.5;}}
@keyframes pr-split-proof-v1{0%,36%{opacity:1;}38%,95%{opacity:0;}97%,100%{opacity:1;}}
@keyframes pr-split-proof-v2{0%,36%{opacity:0;transform:translateY(.4cqw);}38.5%,95%{opacity:1;transform:none;}97%,100%{opacity:0;}}
@keyframes pr-split-proof-mono{0%,37%{opacity:1;animation-timing-function:cubic-bezier(.4,0,.2,1);}43%,95%{opacity:0;}96%,100%{opacity:1;}}
@keyframes pr-split-proof-goal{0%,40%{clip-path:inset(-2cqw 100% -2cqw 0);animation-timing-function:cubic-bezier(.65,0,.35,1);}46%,86%{clip-path:inset(-2cqw 0 -2cqw 0);opacity:1;}91%{clip-path:inset(-2cqw 0 -2cqw 0);opacity:0;}92%,100%{clip-path:inset(-2cqw 100% -2cqw 0);opacity:0;}}
@keyframes pr-split-proof-call{0%,43.5%{opacity:0;transform:translateY(.6cqw) scale(.85);animation-timing-function:cubic-bezier(.3,1.5,.5,1);}48%,86%{opacity:1;transform:none;}90%,100%{opacity:0;transform:scale(.95);}}
@keyframes pr-split-proof-flash{0%,13%{opacity:0;}14.5%{opacity:1;}20%,36%{opacity:0;}37.5%{opacity:1;}44%,100%{opacity:0;}}
@keyframes pr-split-proof-sync{0%,12.5%{transform:scale(1) rotate(0deg);animation-timing-function:cubic-bezier(.3,1.6,.5,1);}15%{transform:scale(1.18) rotate(90deg);}18%,35.5%{transform:scale(1) rotate(180deg);animation-timing-function:cubic-bezier(.3,1.6,.5,1);}38%{transform:scale(1.18) rotate(270deg);}41%,100%{transform:scale(1) rotate(360deg);}}
@keyframes pr-split-proof-beam{0%,13%{opacity:0;transform:translateX(-4cqw) scaleX(.4);}14.5%{opacity:1;}19%{opacity:0;transform:translateX(14cqw) scaleX(1);}36%{opacity:0;transform:translateX(-4cqw) scaleX(.4);}37.5%{opacity:1;}42%,100%{opacity:0;transform:translateX(14cqw) scaleX(1);}}
@keyframes pr-split-proof-live{0%,100%{transform:scale(1);}50%{transform:scale(1.35);}}
@keyframes pr-split-proof-b1{0%,14.0%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}20.0%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b2{0%,15.3%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}21.3%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b3{0%,16.6%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}22.6%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b4{0%,17.9%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}23.9%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b5{0%,19.2%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}25.2%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b6{0%,20.5%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}26.5%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b7{0%,21.8%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}27.8%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}
@keyframes pr-split-proof-b8{0%,23.1%{transform:scaleY(0);animation-timing-function:cubic-bezier(.2,.9,.25,1);}29.1%,86%{transform:scaleY(1);animation-timing-function:cubic-bezier(.5,0,.75,0);}92%,100%{transform:scaleY(0);}}@container (max-aspect-ratio: 4/5){
  .v-pr-split-proof .mg-design{width:78cqw;height:85.25cqw}
  .v-pr-split-proof .chat{left:2cqw;top:0;width:74cqw;height:34cqw}
  .v-pr-split-proof .out{left:2cqw;top:38cqw;width:74cqw}
  .v-pr-split-proof .sync{left:37.6cqw;top:34.6cqw}
  .v-pr-split-proof .beam{display:none}
}

.v-pr-split-proof .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-split-proof .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-split-proof-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-split-proof .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-split-proof .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:600;font-size:3cqw;line-height:1.06;letter-spacing:-.035em;color:var(--ink)}
.v-pr-split-proof .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-split-proof-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-split-proof .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-split-proof-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-split-proof .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-split-proof .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-split-proof .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-split-proof .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-split-proof .mg-hl{margin-top:2.4cqw;font-size:9.4cqw;line-height:1.04}
  .v-pr-split-proof .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-split-proof .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-split-proof .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-split-proof .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-split-proof .mg-hl{margin-top:1.2cqw;font-size:5.6cqw}
  .v-pr-split-proof .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-split-proof-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-split-proof-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prFocusPull: SceneSpec = {
  id: "pr-focus-pull",
  slug: "mg-pr-focus-pull",
  name: "Focus Pull To Phone",
  kind: "scene",
  job: "devices",
  language: "product-ui",
  mechanic: "focus-pull-desk-to-phone",
  energy: "calm",
  settle: 3.0,
  requiresScreenshot: true,
  colors: { ink: "#F3EDE6", accent: "#FF6A3D", secondary: "#747579", paper: "#120D0C" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["focus", "mobile", "cross-device"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Morning brief", maxChars: 28, role: "kicker" },
    { key: "headline", label: "Headline", default: "Your day, sharpened to three things", maxChars: 40, role: "headline" },
    { key: "cta", label: "Call to action", default: "Lumen on iPhone", maxChars: 28, role: "cta" },
  ],
  html: `<div class="mg-design">
    <div class="desk">
      <div class="top"><span class="lights"><i></i><i></i><i></i></span><b>Lumen</b>Morning brief</div>
      <div class="side">
        <span class="on"><svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>Today</span>
        <span><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>Ask</span>
        <span><svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>Docs</span>
        <span><svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>Agents</span>
      </div>
      <div class="doc">
        <div class="dt">Morning <span>brief</span></div>
        <div class="dm">Tuesday, Oct 14 · compiled by Lumen at 7:02</div>
        <div class="p">Overnight, <mark>Halcyon renewed for two years</mark> and the churn digest flagged onboarding step three. The board deck needs final numbers by noon.</div>
        <div class="tl"><div>Renewals<b>$184k</b></div><div>Open tickets<b>12</b></div><div>Focus time<b>3h 20m</b></div></div>
        <div class="nx"><div class="nh">Next up</div><div class="nr"><i style="background:color-mix(in srgb,var(--accent) 72%,#fff)"></i>Send board numbers<span>Due 12:00</span></div><div class="nr"><i style="background:#95979B"></i>Fix onboarding step 3<span>Assigned to Leo</span></div><div class="nr"><i style="background:#5CC8A5"></i>Design review, live canvas<span>16:30</span></div></div>
      </div>
      <div class="ai">
        <div class="h"><i></i>Lumen</div>
        <div class="b u">What should I do first?</div>
        <div class="b">Send the board numbers. Finance shared them at 6:48, I drafted the update.</div>
      </div>
    </div>
    <div class="af af2"></div>
    <div class="phone">
      <div class="scr">
        <div class="isl"></div>
        <div class="sb"><span>9:41</span><span><svg class="i" viewBox="0 0 24 24"><path d="M2 20h3V16H2zM7 20h3v-7H7zM12 20h3v-10h-3zM17 20h3V6h-3z" fill="currentColor" stroke="none"/></svg><i></i></span></div>
        <div class="gm">Good morning, Maya</div>
        <div class="hl">Three things need you.</div>
        <div class="sum"><div class="k"><svg class="i" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>Lumen summary</div><div class="t">Board numbers are ready to send.</div><div class="r"><span>Review draft</span><span>Send</span></div></div>
        <div class="it"><span class="ck d"></span><span>Halcyon renewal<span>Signed overnight</span></span></div>
        <div class="it"><span class="ck"></span><span>Fix onboarding step 3<span>Flagged by Churn Digest</span></span></div>
        <div class="it"><span class="ck"></span><span>Design review<span>16:30 · Canvas</span></span></div>
        <div class="it"><span class="ck"></span><span>Board update<span>Draft ready · due 12:00</span></span></div>
        <div class="ask">Ask Lumen<span><svg class="i" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg></span></div>
        <div class="home"></div>
      </div>
    </div>
    <div class="af af1"></div></div>
<div class="mg-head"><div class="mg-kick" data-21st-slot="kicker">{{kicker}}</div><div class="mg-hl" data-21st-slot="headline">{{headline|words}}</div></div>
<div class="mg-cta" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-pr-focus-pull{color:var(--ink);font-family:var(--font-body)}
.v-pr-focus-pull[data-backdrop="on"]{background:radial-gradient(48cqw 38cqw at 80% 28%,color-mix(in srgb,var(--accent) 36%,transparent),transparent 70%),radial-gradient(60cqw 40cqw at 6% 96%,color-mix(in srgb,var(--secondary) 28%,transparent),transparent 70%),var(--paper)}
.v-pr-focus-pull .mg-design{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(11.555cqw,10.185cqw) scale(0.8268);color:#F3EDE6}
@container (max-aspect-ratio: 4/5){.v-pr-focus-pull .mg-design{transform:translate(-1.424cqw,73.814cqw) scale(1.1059)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-focus-pull .mg-design{transform:translate(-0.329cqw,24.978cqw) scale(1.0824)}}

.v-pr-focus-pull *{box-sizing:border-box;margin:0;}
.v-pr-focus-pull .i{width:1cqw;height:1cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-focus-pull .desk{position:absolute;left:4cqw;top:6cqw;width:70cqw;height:46cqw;border-radius:1.3cqw;background:#1B1715;border:1px solid rgba(255,235,215,.08);box-shadow:0 3cqw 7cqw rgba(0,0,0,.55);overflow:hidden;display:grid;grid-template-columns:13cqw 1fr 20cqw;grid-template-rows:3.4cqw 1fr;animation:pr-focus-pull-desk 6s linear infinite;}
.v-pr-focus-pull .top{grid-column:1/4;display:flex;align-items:center;gap:1cqw;padding:0 1.2cqw;border-bottom:1px solid rgba(255,235,215,.06);font-size:.88cqw;color:#9C8F84;}
.v-pr-focus-pull .lights{display:flex;gap:.45cqw;}
.v-pr-focus-pull .lights i{width:.7cqw;height:.7cqw;border-radius:50%;background:#3A322D;}
.v-pr-focus-pull .top b{color:#F3EDE6;font-weight:550;}
.v-pr-focus-pull .side{padding:1.3cqw 1cqw;display:flex;flex-direction:column;gap:.35cqw;font-size:.88cqw;color:#9C8F84;border-right:1px solid rgba(255,235,215,.05);}
.v-pr-focus-pull .side span{display:flex;align-items:center;gap:.55cqw;padding:.42cqw .5cqw;border-radius:.45cqw;}
.v-pr-focus-pull .side .on{background:#2A2320;color:#F3EDE6;}
.v-pr-focus-pull .doc{padding:2.2cqw 2.6cqw;}
.v-pr-focus-pull .dt{font-family:var(--font-display);font-size:3cqw;line-height:1;letter-spacing:-.01em;}
.v-pr-focus-pull .dt span{font-style:italic;color:color-mix(in srgb,var(--accent) 72%,#fff);}
.v-pr-focus-pull .dm{font-size:.82cqw;color:#7E726A;margin-top:.7cqw;}
.v-pr-focus-pull .p{font-size:.95cqw;line-height:1.6;color:#C9BEB4;margin-top:1.3cqw;}
.v-pr-focus-pull .p mark{background:color-mix(in srgb,var(--accent) 22%,transparent);color:color-mix(in srgb,var(--accent) 30%,#fff);border-radius:.2cqw;padding:0 .2cqw;}
.v-pr-focus-pull .tl{display:flex;gap:.8cqw;margin-top:1.6cqw;}
.v-pr-focus-pull .tl div{flex:1;height:7.5cqw;border-radius:.8cqw;background:#241E1B;border:1px solid rgba(255,235,215,.06);padding:.8cqw;font-size:.75cqw;color:#9C8F84;}
.v-pr-focus-pull .tl b{display:block;font-size:1.4cqw;color:#F3EDE6;margin-top:.4cqw;font-weight:600;}
.v-pr-focus-pull .nx{margin-top:1.8cqw;font-size:.88cqw;color:#C9BEB4;}
.v-pr-focus-pull .nh{font-size:.78cqw;color:#7E726A;margin-bottom:.4cqw;}
.v-pr-focus-pull .nr{display:flex;align-items:center;gap:.7cqw;padding:.65cqw 0;border-bottom:1px solid rgba(255,235,215,.06);}
.v-pr-focus-pull .nr i{width:.55cqw;height:.55cqw;border-radius:50%;}
.v-pr-focus-pull .nr span{margin-left:auto;color:#7E726A;font-size:.78cqw;}
.v-pr-focus-pull .ai{background:#1F1A18;border-left:1px solid rgba(255,235,215,.06);padding:1.3cqw;display:flex;flex-direction:column;gap:.8cqw;font-size:.82cqw;color:#C9BEB4;}
.v-pr-focus-pull .ai .h{display:flex;align-items:center;gap:.5cqw;font-weight:600;color:#F3EDE6;font-size:.95cqw;}
.v-pr-focus-pull .ai .h i{width:1.4cqw;height:1.4cqw;border-radius:.4cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent));}
.v-pr-focus-pull .ai .b{background:#2A2320;border-radius:.7cqw;padding:.7cqw .8cqw;line-height:1.45;}
.v-pr-focus-pull .ai .b.u{background:#3A2A20;color:#FFE1CC;align-self:flex-end;}
.v-pr-focus-pull .phone{position:absolute;left:64cqw;top:4.2cqw;width:23.4cqw;height:48cqw;border-radius:3.8cqw;background:linear-gradient(145deg,#4A403A,#171311 40%,#2A2420);padding:.7cqw;box-shadow:0 0 0 1px rgba(255,220,190,.18),0 3cqw 6cqw rgba(0,0,0,.6),0 1cqw 2cqw rgba(0,0,0,.45);animation:pr-focus-pull-phone 6s linear infinite;}
.v-pr-focus-pull .scr{position:relative;width:100%;height:100%;border-radius:3.1cqw;background:#FBF6F0;color:#1E1814;overflow:hidden;padding:1.2cqw 1.5cqw;}
.v-pr-focus-pull .isl{position:absolute;left:50%;top:.9cqw;width:6.6cqw;height:1.9cqw;border-radius:1cqw;background:#0C0A09;transform:translateX(-50%);}
.v-pr-focus-pull .sb{display:flex;justify-content:space-between;align-items:center;font-size:.9cqw;font-weight:600;padding:0 .6cqw;height:1.9cqw;}
.v-pr-focus-pull .sb span:last-child{display:flex;gap:.3cqw;align-items:center;}
.v-pr-focus-pull .sb i{display:block;width:1.3cqw;height:.65cqw;border-radius:.2cqw;border:1px solid #1E1814;}
.v-pr-focus-pull .gm{font-size:.82cqw;color:#8C7F74;margin-top:1.6cqw;}
.v-pr-focus-pull .hl{font-family:var(--font-display);font-weight:700;font-size:2cqw;letter-spacing:-.03em;line-height:1.05;margin-top:.3cqw;}
.v-pr-focus-pull .sum{margin-top:1.2cqw;border-radius:1.4cqw;padding:1.1cqw 1.2cqw;background:linear-gradient(150deg,color-mix(in srgb,var(--accent) 70%,#FFD080),var(--accent) 60%,color-mix(in srgb,var(--accent) 60%,#E8457C));color:#fff;box-shadow:0 1cqw 2cqw color-mix(in srgb,var(--accent) 30%,transparent);}
.v-pr-focus-pull .sum .k{display:flex;align-items:center;gap:.4cqw;font-size:.75cqw;opacity:.9;font-weight:550;}
.v-pr-focus-pull .sum .k .i{width:.9cqw;height:.9cqw;}
.v-pr-focus-pull .sum .t{font-size:1.15cqw;font-weight:650;margin-top:.4cqw;line-height:1.25;}
.v-pr-focus-pull .sum .r{display:flex;gap:.4cqw;margin-top:.8cqw;}
.v-pr-focus-pull .sum .r span{font-size:.72cqw;padding:.2cqw .55cqw;border-radius:1cqw;background:rgba(255,255,255,.22);}
.v-pr-focus-pull .it{display:flex;align-items:center;gap:.8cqw;padding:.85cqw 0;border-bottom:1px solid #EFE6DC;font-size:.92cqw;}
.v-pr-focus-pull .it:first-of-type{margin-top:.6cqw;}
.v-pr-focus-pull .it .ck{width:1.4cqw;height:1.4cqw;border-radius:50%;border:.14cqw solid #CDBFB2;flex:none;}
.v-pr-focus-pull .it .ck.d{background:#1E1814;border-color:#1E1814;}
.v-pr-focus-pull .it span span{display:block;font-size:.72cqw;color:#8C7F74;margin-top:.1cqw;}
.v-pr-focus-pull .ask{position:absolute;left:1.3cqw;right:1.3cqw;bottom:2.6cqw;height:3.4cqw;border-radius:1.8cqw;background:#1E1814;color:#CDBFB2;display:flex;align-items:center;gap:.6cqw;padding:0 .5cqw 0 1.2cqw;font-size:.9cqw;}
.v-pr-focus-pull .ask span{margin-left:auto;width:2.5cqw;height:2.5cqw;border-radius:50%;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--accent));display:grid;place-items:center;color:#fff;}
.v-pr-focus-pull .ask span .i{width:1.1cqw;height:1.1cqw;}
.v-pr-focus-pull .home{position:absolute;left:50%;bottom:.9cqw;width:7cqw;height:.35cqw;border-radius:1cqw;background:#1E1814;transform:translateX(-50%);}
.v-pr-focus-pull .af{position:absolute;opacity:0;background:linear-gradient(#FFE2C8,#FFE2C8) 0 0/1.6cqw .16cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 0 0/.16cqw 1.6cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 100% 0/1.6cqw .16cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 100% 0/.16cqw 1.6cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 0 100%/1.6cqw .16cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 0 100%/.16cqw 1.6cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 100% 100%/1.6cqw .16cqw no-repeat,linear-gradient(#FFE2C8,#FFE2C8) 100% 100%/.16cqw 1.6cqw no-repeat;}
.v-pr-focus-pull .af1{left:62.6cqw;top:2.8cqw;width:26.2cqw;height:50.8cqw;animation:pr-focus-pull-af1 6s linear infinite;}
.v-pr-focus-pull .af2{left:18.4cqw;top:10.4cqw;width:34.2cqw;height:13.4cqw;animation:pr-focus-pull-af2 6s linear infinite;}
@keyframes pr-focus-pull-desk{
  0%,16%{filter:blur(0) brightness(1);transform:scale(1);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  38%,76%{filter:blur(.55cqw) brightness(.62);transform:scale(.985);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  96%,100%{filter:blur(0) brightness(1);transform:scale(1);}
}
@keyframes pr-focus-pull-phone{
  0%,16%{filter:blur(.85cqw) brightness(.8);transform:translate(2cqw,1cqw) scale(1.06) rotate(-2deg);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  38%{filter:blur(0) brightness(1);transform:translate(0,0) scale(1) rotate(0deg);animation-timing-function:linear;}
  76%{filter:blur(0) brightness(1);transform:translate(-.4cqw,-.3cqw) scale(1.01) rotate(0deg);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  96%,100%{filter:blur(.85cqw) brightness(.8);transform:translate(2cqw,1cqw) scale(1.06) rotate(-2deg);}
}
@keyframes pr-focus-pull-af1{0%,36%{opacity:0;transform:scale(1.08);animation-timing-function:cubic-bezier(.2,.8,.2,1);}40%{opacity:1;transform:scale(1);}43%{opacity:.35;}46%{opacity:1;}66%{opacity:1;transform:scale(1);}72%,100%{opacity:0;transform:scale(1);}}
@keyframes pr-focus-pull-af2{0%{opacity:1;transform:scale(1);}12%{opacity:1;transform:scale(1);}18%,92%{opacity:0;transform:scale(1);}96%{opacity:0;transform:scale(1.1);animation-timing-function:cubic-bezier(.2,.8,.2,1);}100%{opacity:1;transform:scale(1);}}
.v-pr-focus-pull .mg-head{position:absolute;left:6cqw;top:2.6cqw;width:64cqw;z-index:5}
.v-pr-focus-pull .mg-kick{display:flex;align-items:center;gap:.7cqw;font:500 1.2cqw/1.25 var(--font-mono);color:color-mix(in srgb,var(--ink) 66%,transparent);animation:pr-focus-pull-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-focus-pull .mg-kick::before{content:"";width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .8cqw var(--accent);flex:none}
.v-pr-focus-pull .mg-hl{margin-top:.5cqw;font-family:var(--font-display);font-weight:400;font-size:3.6cqw;line-height:1.06;letter-spacing:-.01em;color:var(--ink)}
.v-pr-focus-pull .mg-hl .w{--delay:calc(.12s + var(--i) * .07s);display:inline-block;animation:pr-focus-pull-wrise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-focus-pull .mg-cta{position:absolute;right:6cqw;top:5.2cqw;display:flex;align-items:center;gap:.6cqw;font:500 1.3cqw/1.25 var(--font-body);color:var(--ink);white-space:nowrap;z-index:5;--delay:.45s;animation:pr-focus-pull-cin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-pr-focus-pull .mg-cta::after{content:"→";color:var(--accent);font-weight:600}
@container (max-aspect-ratio: 4/5){
  .v-pr-focus-pull .mg-head{left:8cqw;right:8cqw;width:auto;top:9cqh}
  .v-pr-focus-pull .mg-kick{font-size:5.6cqw;gap:2.6cqw}
  .v-pr-focus-pull .mg-kick::before{width:2.6cqw;height:2.6cqw;box-shadow:0 0 3cqw var(--accent)}
  .v-pr-focus-pull .mg-hl{margin-top:2.4cqw;font-size:11cqw;line-height:1.04}
  .v-pr-focus-pull .mg-cta{left:8cqw;right:8cqw;top:auto;bottom:9cqh;font-size:5.8cqw;gap:2.4cqw;white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-focus-pull .mg-head{left:6cqw;right:6cqw;width:auto;top:5.5cqw}
  .v-pr-focus-pull .mg-kick{font-size:2.5cqw;gap:1.4cqw}
  .v-pr-focus-pull .mg-kick::before{width:1.4cqw;height:1.4cqw}
  .v-pr-focus-pull .mg-hl{margin-top:1.2cqw;font-size:6.6cqw}
  .v-pr-focus-pull .mg-cta{left:6cqw;right:auto;top:auto;bottom:5.5cqw;font-size:2.7cqw;gap:1.2cqw}
}
@keyframes pr-focus-pull-cin{0%{opacity:0;transform:translateY(.5em)}12%,100%{opacity:1;transform:none}}
@keyframes pr-focus-pull-wrise{0%{opacity:0;transform:translateY(.45em);filter:blur(.05em)}11%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const prVerticalReframe: SceneSpec = {
  id: "pr-vertical-reframe",
  slug: "mg-pr-vertical-reframe",
  name: "Wide To Vertical Reframe",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "reframe-pan-wide-to-vertical",
  energy: "default",
  settle: 4.62,
  requiresScreenshot: true,
  colors: { ink: "#EEF3EC", accent: "#C8F55A", secondary: "#8FD624", paper: "#070B09" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["vertical", "reframe", "social"],
  fields: [
    { key: "c1", label: "First caption", default: "Ask in plain English.", maxChars: 30, role: "headline" },
    { key: "c2", label: "Second caption", default: "Every answer, sourced.", maxChars: 30, role: "headline" },
    { key: "c3", label: "Third caption", default: "Share the proof.", maxChars: 30, role: "headline" },
    { key: "label", label: "Label", default: "auto-reframe 16:9 to 9:16", maxChars: 28, role: "label" },
  ],
  html: `<div class="mg-design"><div class="crop">
<div class="app">
        <div class="top"><span class="lg"></span><b>Research hub</b>Q4 market scan<span class="sh">Share</span></div>
        <div class="rail">
          <svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
          <svg class="i on" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>
        </div>
        <div class="chat">
          <div class="ub">What changed in competitor pricing this quarter?</div>
          <div class="st"><i></i>Lumen read 12 sources in 4s</div>
          <div class="steps"><span>Searched chat, docs and web</span><span>Compared 4 pricing pages</span><span>Checked Q3 board deck</span></div>
          <div class="ab">Here is what changed. I pinned the summary to <b>Q4 market scan</b> so the team sees it.</div>
          <div class="ub">Who moved first?</div>
          <div class="ab">Halcyon, on Oct 2. Quarry followed 16 days later.<span class="ct">1</span><span class="ct">2</span></div>
          <div class="ask">Ask a follow-up…<span><svg class="i" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span></div>
        </div>
        <div class="ans">
          <div class="h">Three shifts this quarter</div>
          <div class="l">Seat prices fell across the board, median down 14%.<span class="ct">1</span><span class="ct">4</span></div>
          <div class="l">Usage-based AI add-ons are now standard.<span class="ct">2</span></div>
          <div class="l">Annual discounts widened to 20%.<span class="ct">3</span></div>
          <div class="mc"><div class="k">Median seat price</div><div class="v">$14.20</div><div class="bs"><i style="height:4.2cqw"></i><i style="height:3.5cqw"></i><i style="height:3cqw"></i><i style="height:2.3cqw"></i></div><div class="ring"></div></div>
          <div class="l">Halcyon cut first, Quarry matched within weeks.<span class="ct">1</span><span class="ct">2</span></div>
          <div class="fu"><span>Follow-ups</span><i>How should we respond?</i><i>Model a 10% price cut</i><i>Draft a note to sales</i></div>
        </div>
        <div class="src">
          <div class="h">Sources<span>12 cited</span></div>
          <div class="sc"><span class="f" style="background:#7FB2FF">H</span><div><div class="t">Halcyon pricing update</div><div class="u">halcyon.io</div></div><span class="ct">1</span></div>
          <div class="sc"><span class="f" style="background:#5CD6A8">Q</span><div><div class="t">Quarry AI add-on</div><div class="u">quarry.so</div></div><span class="ct">2</span></div>
          <div class="sc"><span class="f" style="background:#B6B8BC">N</span><div><div class="t">Northwind annual plans</div><div class="u">northwind.dev</div></div><span class="ct">3</span></div>
          <div class="sc"><span class="f" style="background:#FFC56B">G</span><div><div class="t">SaaS index, Q3</div><div class="u">PDF · 42 pages</div></div><span class="ct">4</span></div>
          <div class="sc"><span class="f" style="background:#EEF3EC">#</span><div><div class="t">#pricing-intel</div><div class="u">Team chat · 31 messages</div></div><span class="ct">5</span></div>
          <div class="sc"><span class="f" style="background:#FF9C8A">B</span><div><div class="t">Q3 board deck</div><div class="u">Docs · slide 14</div></div><span class="ct">6</span></div>
          <div class="sc"><span class="f" style="background:#8FE3FF">O</span><div><div class="t">Ostra renewal call</div><div class="u">Notes · Sep 28</div></div><span class="ct">7</span></div>
        </div>
      </div>
    </div>
    <div class="lbl" data-21st-slot="label">{{label}}</div>
    <div class="mm"><div class="app">
        <div class="top"><span class="lg"></span><b>Research hub</b>Q4 market scan<span class="sh">Share</span></div>
        <div class="rail">
          <svg class="i" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
          <svg class="i on" viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>
          <svg class="i" viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>
        </div>
        <div class="chat">
          <div class="ub">What changed in competitor pricing this quarter?</div>
          <div class="st"><i></i>Lumen read 12 sources in 4s</div>
          <div class="steps"><span>Searched chat, docs and web</span><span>Compared 4 pricing pages</span><span>Checked Q3 board deck</span></div>
          <div class="ab">Here is what changed. I pinned the summary to <b>Q4 market scan</b> so the team sees it.</div>
          <div class="ub">Who moved first?</div>
          <div class="ab">Halcyon, on Oct 2. Quarry followed 16 days later.<span class="ct">1</span><span class="ct">2</span></div>
          <div class="ask">Ask a follow-up…<span><svg class="i" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></span></div>
        </div>
        <div class="ans">
          <div class="h">Three shifts this quarter</div>
          <div class="l">Seat prices fell across the board, median down 14%.<span class="ct">1</span><span class="ct">4</span></div>
          <div class="l">Usage-based AI add-ons are now standard.<span class="ct">2</span></div>
          <div class="l">Annual discounts widened to 20%.<span class="ct">3</span></div>
          <div class="mc"><div class="k">Median seat price</div><div class="v">$14.20</div><div class="bs"><i style="height:4.2cqw"></i><i style="height:3.5cqw"></i><i style="height:3cqw"></i><i style="height:2.3cqw"></i></div><div class="ring"></div></div>
          <div class="l">Halcyon cut first, Quarry matched within weeks.<span class="ct">1</span><span class="ct">2</span></div>
          <div class="fu"><span>Follow-ups</span><i>How should we respond?</i><i>Model a 10% price cut</i><i>Draft a note to sales</i></div>
        </div>
        <div class="src">
          <div class="h">Sources<span>12 cited</span></div>
          <div class="sc"><span class="f" style="background:#7FB2FF">H</span><div><div class="t">Halcyon pricing update</div><div class="u">halcyon.io</div></div><span class="ct">1</span></div>
          <div class="sc"><span class="f" style="background:#5CD6A8">Q</span><div><div class="t">Quarry AI add-on</div><div class="u">quarry.so</div></div><span class="ct">2</span></div>
          <div class="sc"><span class="f" style="background:#B6B8BC">N</span><div><div class="t">Northwind annual plans</div><div class="u">northwind.dev</div></div><span class="ct">3</span></div>
          <div class="sc"><span class="f" style="background:#FFC56B">G</span><div><div class="t">SaaS index, Q3</div><div class="u">PDF · 42 pages</div></div><span class="ct">4</span></div>
          <div class="sc"><span class="f" style="background:#EEF3EC">#</span><div><div class="t">#pricing-intel</div><div class="u">Team chat · 31 messages</div></div><span class="ct">5</span></div>
          <div class="sc"><span class="f" style="background:#FF9C8A">B</span><div><div class="t">Q3 board deck</div><div class="u">Docs · slide 14</div></div><span class="ct">6</span></div>
          <div class="sc"><span class="f" style="background:#8FE3FF">O</span><div><div class="t">Ostra renewal call</div><div class="u">Notes · Sep 28</div></div><span class="ct">7</span></div>
        </div>
      </div><div class="fr"></div></div></div>
<div class="caps"><div class="cp ca" data-21st-slot="c1"><div>{{c1|words}}</div></div><div class="cp cb" data-21st-slot="c2"><div>{{c2|words}}</div></div><div class="cp cc" data-21st-slot="c3"><div>{{c3|words}}</div></div></div>`,
  css: `
.v-pr-vertical-reframe{color:var(--ink);font-family:var(--font-body)}
.v-pr-vertical-reframe[data-backdrop="on"]{background:radial-gradient(90cqw 70cqw at 50% 40%,color-mix(in srgb,var(--accent) 12%,transparent),transparent 70%),linear-gradient(180deg,color-mix(in srgb,var(--paper) 90%,#fff),var(--paper))}
.v-pr-vertical-reframe .mg-design{position:absolute;left:0;top:0;width:100cqw;height:125cqw;transform-origin:0 0;transform:translate(52cqw,2cqw) scale(0.42);color:#EEF3EC}
@container (max-aspect-ratio: 4/5){.v-pr-vertical-reframe .mg-design{transform:translate(0cqw,47cqw) scale(1)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-pr-vertical-reframe .mg-design{transform:translate(38cqw,12.5cqw) scale(0.6)}}

.v-pr-vertical-reframe *{box-sizing:border-box;margin:0;}
.v-pr-vertical-reframe .i{width:1cqw;height:1cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;}
.v-pr-vertical-reframe .brand{position:absolute;left:0;right:0;top:8cqw;display:flex;justify-content:center;align-items:center;gap:2cqw;font-size:4cqw;font-weight:650;}
.v-pr-vertical-reframe .brand i{width:6cqw;height:6cqw;border-radius:1.8cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--secondary));}
.v-pr-vertical-reframe .brand span{font-size:3cqw;font-weight:600;padding:.4cqw 1.8cqw;border-radius:4cqw;background:color-mix(in srgb,var(--accent) 14%,transparent);color:var(--accent);}
.v-pr-vertical-reframe .caps{position:absolute;left:7cqw;right:7cqw;top:19cqw;height:24cqw;}
.v-pr-vertical-reframe .cp{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;font-family:var(--font-display);font-weight:750;font-size:10cqw;line-height:.98;letter-spacing:-.045em;opacity:0;}
.v-pr-vertical-reframe .cp span{color:var(--accent);}
.v-pr-vertical-reframe .ca{animation:pr-vertical-reframe-ca 6s linear infinite;}
.v-pr-vertical-reframe .cb{animation:pr-vertical-reframe-cb 6s linear infinite;}
.v-pr-vertical-reframe .cc{animation:pr-vertical-reframe-cc 6s linear infinite;}
.v-pr-vertical-reframe .crop{position:absolute;left:6cqw;top:0;width:88cqw;height:98cqw;border-radius:5cqw;overflow:hidden;background:#121A16;box-shadow:0 0 0 1px color-mix(in srgb,var(--accent) 22%,transparent),0 6cqw 14cqw rgba(0,0,0,.6),0 0 16cqw color-mix(in srgb,var(--accent) 12%,transparent);}
.v-pr-vertical-reframe .crop .app{animation:pr-vertical-reframe-pan 6s linear infinite;}
.v-pr-vertical-reframe .app{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;background:#121A16;display:grid;grid-template-columns:4cqw 30cqw 32cqw 1fr;grid-template-rows:4.2cqw 1fr;color:#EEF3EC;}
.v-pr-vertical-reframe .top{grid-column:1/5;display:flex;align-items:center;gap:.7cqw;padding:0 1.4cqw;border-bottom:1px solid rgba(255,255,255,.06);font-size:1cqw;color:#8FA095;}
.v-pr-vertical-reframe .top .lg{width:1.7cqw;height:1.7cqw;border-radius:.5cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--secondary));}
.v-pr-vertical-reframe .top b{color:#EEF3EC;font-weight:600;}
.v-pr-vertical-reframe .top .sh{margin-left:auto;padding:.45cqw 1cqw;border-radius:.6cqw;background:var(--accent);color:#0E1612;font-weight:650;}
.v-pr-vertical-reframe .rail{display:flex;flex-direction:column;align-items:center;gap:1.4cqw;padding-top:1.6cqw;border-right:1px solid rgba(255,255,255,.05);color:#5F7066;}
.v-pr-vertical-reframe .rail .on{color:var(--accent);}
.v-pr-vertical-reframe .chat{padding:1.6cqw 1.6cqw;display:flex;flex-direction:column;gap:1.1cqw;border-right:1px solid rgba(255,255,255,.05);}
.v-pr-vertical-reframe .ub{align-self:flex-end;background:var(--accent);color:#0E1612;font-weight:550;padding:.8cqw 1.1cqw;border-radius:1.1cqw 1.1cqw .3cqw 1.1cqw;font-size:1.05cqw;line-height:1.35;max-width:22cqw;}
.v-pr-vertical-reframe .st{display:flex;align-items:center;gap:.6cqw;font-size:.88cqw;color:#8FA095;}
.v-pr-vertical-reframe .st i{width:1.5cqw;height:1.5cqw;border-radius:.45cqw;background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 60%,#fff),var(--secondary));}
.v-pr-vertical-reframe .steps{display:flex;flex-direction:column;gap:.55cqw;font-size:.85cqw;color:#A9B8AE;padding-left:.4cqw;}
.v-pr-vertical-reframe .steps span{display:flex;align-items:center;gap:.5cqw;}
.v-pr-vertical-reframe .steps span::before{content:"";width:.5cqw;height:.5cqw;border-radius:50%;background:var(--accent);}
.v-pr-vertical-reframe .ab{background:#18221D;border-radius:.3cqw 1.1cqw 1.1cqw 1.1cqw;padding:.8cqw 1cqw;font-size:.95cqw;line-height:1.45;color:#C3D0C7;max-width:25cqw;}
.v-pr-vertical-reframe .ab b{color:var(--accent);font-weight:600;}
.v-pr-vertical-reframe .fu{display:flex;flex-direction:column;align-items:flex-start;gap:.5cqw;margin-top:.4cqw;font-size:.85cqw;}
.v-pr-vertical-reframe .fu span{color:#7C8C82;font-size:.78cqw;}
.v-pr-vertical-reframe .fu i{font-style:normal;padding:.45cqw .8cqw;border-radius:2cqw;border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);color:#DDE8D6;}
.v-pr-vertical-reframe .ask{margin-top:auto;margin-bottom:.4cqw;height:3.4cqw;display:flex;align-items:center;padding:0 .4cqw 0 1cqw;border-radius:1cqw;background:#18221D;border:1px solid rgba(255,255,255,.07);font-size:.95cqw;color:#6E7F74;}
.v-pr-vertical-reframe .ask span{margin-left:auto;width:2.5cqw;height:2.5cqw;border-radius:.75cqw;background:var(--accent);color:#0E1612;display:grid;place-items:center;}
.v-pr-vertical-reframe .ans{padding:1.8cqw 1.8cqw;display:flex;flex-direction:column;gap:.9cqw;border-right:1px solid rgba(255,255,255,.05);}
.v-pr-vertical-reframe .ans .h{font-size:1.5cqw;font-weight:650;letter-spacing:-.02em;}
.v-pr-vertical-reframe .ans .l{display:flex;align-items:flex-start;gap:.5cqw;font-size:.95cqw;line-height:1.45;color:#C3D0C7;}
.v-pr-vertical-reframe .ct{display:inline-grid;place-items:center;min-width:1.3cqw;height:1.3cqw;padding:0 .3cqw;border-radius:.35cqw;background:color-mix(in srgb,var(--accent) 16%,transparent);color:var(--accent);font-size:.72cqw;font-weight:700;vertical-align:middle;margin-left:.2cqw;}
.v-pr-vertical-reframe .mc{position:relative;margin-top:.4cqw;border-radius:1cqw;background:#18221D;border:1px solid rgba(255,255,255,.06);padding:1cqw 1.1cqw;}
.v-pr-vertical-reframe .mc .k{font-size:.8cqw;color:#8FA095;}
.v-pr-vertical-reframe .mc .v{font-size:2cqw;font-weight:650;letter-spacing:-.03em;margin-top:.3cqw;}
.v-pr-vertical-reframe .mc .bs{position:absolute;right:1.1cqw;bottom:1cqw;display:flex;align-items:flex-end;gap:.5cqw;height:4.4cqw;}
.v-pr-vertical-reframe .mc .bs i{width:1.6cqw;border-radius:.3cqw .3cqw .1cqw .1cqw;background:#2A3830;}
.v-pr-vertical-reframe .mc .bs i:last-child{background:var(--accent);}
.v-pr-vertical-reframe .ring{position:absolute;inset:-.5cqw;border-radius:1.4cqw;border:.16cqw solid var(--accent);box-shadow:0 0 1.6cqw color-mix(in srgb,var(--accent) 45%,transparent);opacity:0;animation:pr-vertical-reframe-ring 6s linear infinite;}
.v-pr-vertical-reframe .src{padding:1.8cqw 1.6cqw;display:flex;flex-direction:column;gap:.8cqw;background:#0F1613;}
.v-pr-vertical-reframe .src .h{display:flex;justify-content:space-between;align-items:center;font-size:1.1cqw;font-weight:600;}
.v-pr-vertical-reframe .src .h span{font-size:.8cqw;color:#8FA095;}
.v-pr-vertical-reframe .sc{display:flex;align-items:center;gap:.8cqw;background:#18221D;border:1px solid rgba(255,255,255,.06);border-radius:.9cqw;padding:.8cqw .9cqw;}
.v-pr-vertical-reframe .sc .f{width:2.2cqw;height:2.2cqw;border-radius:.6cqw;display:grid;place-items:center;font-weight:700;font-size:1cqw;color:#0E1612;flex:none;}
.v-pr-vertical-reframe .sc .t{font-size:.92cqw;font-weight:550;}
.v-pr-vertical-reframe .sc .u{font-size:.75cqw;color:#7C8C82;margin-top:.15cqw;}
.v-pr-vertical-reframe .sc .ct{margin-left:auto;}
.v-pr-vertical-reframe .mm{position:absolute;left:38cqw;top:112cqw;width:24cqw;height:13.5cqw;border-radius:1.2cqw;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.14);}
.v-pr-vertical-reframe .mm .app{transform:scale(.24);opacity:.7;}
.v-pr-vertical-reframe .fr{position:absolute;left:0;top:0;width:8.12cqw;height:9.6cqw;border-radius:.6cqw;border:.4cqw solid var(--accent);box-shadow:0 0 0 100cqw rgba(7,11,9,.45),0 0 2cqw color-mix(in srgb,var(--accent) 50%,transparent);animation:pr-vertical-reframe-fr 6s linear infinite;}
.v-pr-vertical-reframe .lbl{position:absolute;left:0;right:0;top:101cqw;text-align:center;font-family:var(--font-mono);font-size:5.4cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 62%,transparent);}
.v-pr-vertical-reframe .lbl b{color:var(--accent);font-weight:600;}
@keyframes pr-vertical-reframe-pan{
  0%,16%{transform:translate(-2.6cqw,-7.8cqw) scale(2.6);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  30%{transform:translate(-85.8cqw,-12cqw) scale(2.6);animation-timing-function:linear;}
  62%{transform:translate(-88.4cqw,-13cqw) scale(2.6);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  74%,86%{transform:translate(-171.6cqw,-7.8cqw) scale(2.6);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  98%,100%{transform:translate(-2.6cqw,-7.8cqw) scale(2.6);}
}
@keyframes pr-vertical-reframe-fr{
  0%,16%{transform:translate(.24cqw,.72cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  30%{transform:translate(7.92cqw,1.1cqw);animation-timing-function:linear;}
  62%{transform:translate(8.16cqw,1.2cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  74%,86%{transform:translate(15.84cqw,.72cqw);animation-timing-function:cubic-bezier(.65,0,.35,1);}
  98%,100%{transform:translate(.24cqw,.72cqw);}
}
@keyframes pr-vertical-reframe-ca{0%,18%{opacity:1;transform:none;}24%{opacity:0;transform:translateY(-2cqw);}90%{opacity:0;transform:translateY(2cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}97%,100%{opacity:1;transform:none;}}
@keyframes pr-vertical-reframe-cb{0%,22%{opacity:0;transform:translateY(2cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}29%,64%{opacity:1;transform:none;}70%,100%{opacity:0;transform:translateY(-2cqw);}}
@keyframes pr-vertical-reframe-cc{0%,67%{opacity:0;transform:translateY(2cqw);animation-timing-function:cubic-bezier(.16,1,.3,1);}74%,88%{opacity:1;transform:none;}93%,100%{opacity:0;transform:translateY(-2cqw);}}
@keyframes pr-vertical-reframe-ring{0%,30%{opacity:0;transform:scale(1.06);animation-timing-function:cubic-bezier(.2,.8,.2,1);}36%,62%{opacity:1;transform:none;}67%,100%{opacity:0;transform:none;}}.v-pr-vertical-reframe .cp .w{color:inherit}
.v-pr-vertical-reframe .cp .w:last-child{color:var(--accent)}
.v-pr-vertical-reframe .cp{color:var(--ink);font-weight:700}
.v-pr-vertical-reframe .caps{left:6cqw;right:auto;width:44cqw;top:8cqw;height:40cqw}
.v-pr-vertical-reframe .cp{justify-content:flex-start;text-align:left;font-size:5.6cqw;line-height:1.02}
@container (max-aspect-ratio: 4/5){
  .v-pr-vertical-reframe .caps{left:7cqw;right:7cqw;width:auto;top:11cqw;height:32cqw}
  .v-pr-vertical-reframe .cp{justify-content:center;text-align:center;font-size:10cqw;line-height:.98}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-pr-vertical-reframe .caps{left:6cqw;width:30cqw;top:20cqw;height:60cqw}
  .v-pr-vertical-reframe .cp{font-size:6.4cqw}
}
`,
};

export const PRODUCT_SCENES: SceneSpec[] = [
  prAutozoom,
  prCursorClick,
  prSpotlight,
  prLoupe,
  prCallouts,
  prPromptResult,
  prShortcut,
  prScrollPage,
  prTiltPan,
  prSplitProof,
  prFocusPull,
  prVerticalReframe,
];
