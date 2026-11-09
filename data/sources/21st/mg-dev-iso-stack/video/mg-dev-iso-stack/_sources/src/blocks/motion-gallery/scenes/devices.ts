// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

export const devLaptop: SceneSpec = {
  id: "dev-laptop",
  slug: "mg-dev-laptop",
  name: "Laptop Lid Opens",
  kind: "scene",
  job: "devices",
  language: "product-ui",
  mechanic: "lid-open-screen-wake",
  energy: "default",
  settle: 3.6,
  colors: { ink: "#1C1A17", accent: "#3D63FF", secondary: "#FF8A5C", paper: "#F1ECE3" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["laptop", "3d", "product-reveal"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen for teams", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "Your whole launch on one screen", maxChars: 44, role: "headline" },
    { key: "caption", label: "Caption", default: "Plans, numbers and AI summaries, live for everyone", maxChars: 64, role: "caption" },
  ],
  html: `<div class="haze"></div>
<div class="xfr"><div class="scene">
<div class="rig">
<div class="shadow"></div>
<div class="base">
<div class="spk l"></div><div class="spk r"></div>
<div class="kb"></div>
<div class="tp"></div>
<div class="spill"></div>
<div class="lip"><i></i></div>
</div>
<div class="lid">
<div class="back"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></div>
<div class="front">
<div class="scr">
<div class="boot"><span><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span></div>
<div class="app">
<div class="side">
<div class="ws"><span class="mk"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span>Lumen</div>
<div class="nv on"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/></svg>Home</div>
<div class="nv"><svg viewBox="0 0 24 24"><path d="M4 13l2-8h12l2 8v6H4zM4 13h5l1 2h4l1-2h5"/></svg>Inbox<em>3</em></div>
<div class="nv"><svg viewBox="0 0 24 24"><path d="M3 7h6l2 2h10v10H3z"/></svg>Projects</div>
<div class="nv"><svg viewBox="0 0 24 24"><path d="M12 3v3M5 9h14v10H5zM9.5 14h.01M14.5 14h.01"/></svg>Agents</div>
<div class="cap">Spaces</div>
<div class="sp"><i style="--c:#658cff"></i>Launch</div>
<div class="sp"><i style="--c:#2fd6a7"></i>Research</div>
<div class="sp"><i style="--c:#ff8a5c"></i>Design</div>
</div>
<div class="main">
<div class="top"><span>Launch / <b>Q4 plan</b></span><span class="avs"><i></i><i></i><i></i></span><span class="share">Share</span></div>
<div class="h">Q4 launch plan</div>
<div class="sub"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg>Summarized by Lumen AI · 2 min ago</div>
<div class="kpis">
<div class="k"><span>Signups</span><b>12,480</b><em>+38%</em></div>
<div class="k"><span>Activation</span><b>64%</b><em>+9%</em></div>
<div class="k"><span>Revenue</span><b>$182k</b><em>+21%</em></div>
</div>
<div class="row">
<div class="chart"><span>Weekly signups</span>
<div class="bars"><i style="--h:.28"></i><i style="--h:.36"></i><i style="--h:.32"></i><i style="--h:.45"></i><i style="--h:.41"></i><i style="--h:.52"></i><i style="--h:.5"></i><i style="--h:.63"></i><i style="--h:.6"></i><i style="--h:.74"></i><i style="--h:.82"></i><i class="hi" style="--h:1"></i></div>
</div>
<div class="ai">
<div class="aih"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg>Lumen AI</div>
<p>Signups are up 38% since beta. Two blockers left before launch.</p>
<div class="chips"><span>Draft update</span><span>Open blockers</span></div>
</div>
</div>
</div>
</div>
<div class="glare"></div>
</div>
<div class="notch"><i></i></div>
</div>
</div>
</div>
</div></div>
<div class="xcopy"><div class="xtop"><div class="xk" data-21st-slot="kicker"><b></b>{{kicker}}</div><div class="xh" data-21st-slot="headline">{{headline|words}}</div></div><div class="xc" data-21st-slot="caption">{{caption}}</div></div>`,
  css: `
.v-dev-laptop{color:var(--ink);font-family:var(--font-body)}
.v-dev-laptop[data-backdrop="on"]{background:radial-gradient(80% 70% at 50% 10%,color-mix(in srgb,var(--paper) 30%,#fff) 0%,var(--paper) 46%,color-mix(in srgb,var(--paper) 84%,#3a2a14) 100%)}
.v-dev-laptop[data-backdrop="off"] .haze{display:none}
.v-dev-laptop *,.v-dev-laptop *::before,.v-dev-laptop *::after{box-sizing:border-box}
.v-dev-laptop .haze{position:absolute;inset:0;background:radial-gradient(46% 26% at 50% 80%,rgba(255,255,255,.75),rgba(255,255,255,0) 70%),linear-gradient(180deg,rgba(255,255,255,0) 60%,rgba(150,120,90,.10))}
.v-dev-laptop .scene{position:absolute;inset:0;perspective:165cqw;perspective-origin:50% 22%}
.v-dev-laptop .rig{position:absolute;left:50%;top:33.4cqw;width:0;height:0;transform-style:preserve-3d;animation:dev-laptop-orbit 6s linear infinite}
.v-dev-laptop .shadow{position:absolute;left:-36cqw;top:0;width:72cqw;height:48cqw;transform-origin:50% 0;transform:rotateX(90deg) translate3d(0,-7cqw,-1.35cqw);background:radial-gradient(46% 40% at 50% 46%,rgba(74,52,28,.42),rgba(74,52,28,.14) 55%,rgba(74,52,28,0) 100%)}
.v-dev-laptop .base{position:absolute;left:-23cqw;top:0;width:46cqw;height:31cqw;transform-origin:50% 0;transform:rotateX(90deg);transform-style:preserve-3d;border-radius:.5cqw .5cqw 2.2cqw 2.2cqw;background:linear-gradient(180deg,#c4c4ca 0%,#dcdce1 18%,#d6d6db 70%,#cbcbd1 100%);box-shadow:inset 0 -.3cqw .3cqw rgba(255,255,255,.75),inset 0 .25cqw .5cqw rgba(0,0,0,.2)}
.v-dev-laptop .kb{position:absolute;left:6.2cqw;right:6.2cqw;top:2.4cqw;height:12.4cqw;border-radius:.7cqw;background:repeating-linear-gradient(180deg,rgba(0,0,0,0) 0 2.16cqw,#121215 2.16cqw 2.48cqw),repeating-linear-gradient(90deg,#2b2b31 0 2.3cqw,#121215 2.3cqw 2.62cqw);box-shadow:0 0 0 .22cqw #bdbdc3,inset 0 .1cqw .3cqw rgba(0,0,0,.6)}
.v-dev-laptop .spk{position:absolute;top:2.4cqw;height:12.4cqw;width:3.4cqw;background:radial-gradient(circle,rgba(40,41,44,.4) .11cqw,rgba(0,0,0,0) .16cqw) 0 0/.55cqw .55cqw}
.v-dev-laptop .spk.l{left:1.6cqw}
.v-dev-laptop .spk.r{right:1.6cqw}
.v-dev-laptop .tp{position:absolute;left:50%;top:16.8cqw;width:17cqw;height:11.4cqw;margin-left:-8.5cqw;border-radius:1cqw;background:linear-gradient(180deg,#d2d2d8,#cacad0);box-shadow:inset 0 0 0 1px rgba(0,0,0,.08),inset 0 .12cqw .2cqw rgba(255,255,255,.7)}
.v-dev-laptop .spill{position:absolute;left:3cqw;right:3cqw;top:0;height:14cqw;background:radial-gradient(60% 100% at 50% 0%,color-mix(in srgb,var(--accent) 42%,transparent),color-mix(in srgb,var(--accent) 0%,transparent) 72%);opacity:0;animation:dev-laptop-on 6s linear infinite}
.v-dev-laptop .lip{position:absolute;left:1.6cqw;right:1.6cqw;top:100%;height:1.15cqw;transform-origin:50% 0;transform:rotateX(-90deg);border-radius:0 0 1.2cqw 1.2cqw;background:linear-gradient(180deg,#bcbcc2,#8b8b93)}
.v-dev-laptop .lip i{position:absolute;left:50%;top:0;width:7cqw;height:.45cqw;margin-left:-3.5cqw;border-radius:0 0 .6cqw .6cqw;background:#7d7d85}
.v-dev-laptop .lid{position:absolute;left:-23cqw;top:-30cqw;width:46cqw;height:30cqw;transform-origin:50% 100%;transform-style:preserve-3d;animation:dev-laptop-lid 6s linear infinite}
.v-dev-laptop .front,.v-dev-laptop .back{position:absolute;inset:0;border-radius:1.6cqw 1.6cqw .5cqw .5cqw;backface-visibility:hidden}
.v-dev-laptop .front{background:#0a0a0c;box-shadow:inset 0 0 0 .2cqw #5a5a62,inset 0 0 0 .34cqw #0b0b0e}
.v-dev-laptop .back{transform:rotateY(180deg) translateZ(.12cqw);background:linear-gradient(165deg,#efeff2 0%,#d2d2d8 45%,#b3b3ba 100%);display:flex;align-items:center;justify-content:center}
.v-dev-laptop .back svg{width:4.6cqw;height:4.6cqw;fill:rgba(255,255,255,.7);filter:drop-shadow(0 .1cqw .1cqw rgba(0,0,0,.18))}
.v-dev-laptop .scr{position:absolute;left:1.1cqw;right:1.1cqw;top:1.1cqw;bottom:1.8cqw;border-radius:.55cqw;overflow:hidden;background:#030305;container-type:inline-size}
.v-dev-laptop .notch{position:absolute;left:50%;top:1.05cqw;width:5.4cqw;height:1.05cqw;margin-left:-2.7cqw;border-radius:0 0 .6cqw .6cqw;background:#0a0a0c}
.v-dev-laptop .notch i{position:absolute;left:50%;top:.3cqw;width:.42cqw;height:.42cqw;margin-left:-.21cqw;border-radius:50%;background:radial-gradient(circle at 35% 35%,#3c4a7a,#0d0f18 70%)}
.v-dev-laptop .boot{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;animation:dev-laptop-boot 6s linear infinite}
.v-dev-laptop .boot span{width:9cqw;height:9cqw;border-radius:2.6cqw;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));display:flex;align-items:center;justify-content:center;box-shadow:0 0 8cqw color-mix(in srgb,var(--accent) 55%,transparent)}
.v-dev-laptop .boot svg{width:5.4cqw;height:5.4cqw;fill:#fff}
.v-dev-laptop .app{position:absolute;inset:0;display:grid;grid-template-columns:20cqw 1fr;background:#0d0e14;color:#eaecf0;font-size:1.9cqw;opacity:0;animation:dev-laptop-app 6s linear infinite}
.v-dev-laptop .side{background:#090a0f;border-right:1px solid rgba(255,255,255,.06);padding:2.6cqw 1.6cqw;display:flex;flex-direction:column;gap:.5cqw}
.v-dev-laptop .ws{display:flex;align-items:center;gap:1.2cqw;font-weight:600;font-size:2.3cqw;margin:0 0 2.2cqw .6cqw}
.v-dev-laptop .mk{width:3.4cqw;height:3.4cqw;border-radius:1cqw;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));display:flex;align-items:center;justify-content:center}
.v-dev-laptop .mk svg{width:2.2cqw;height:2.2cqw;fill:#fff}
.v-dev-laptop .nv{display:flex;align-items:center;gap:1.2cqw;padding:1cqw 1.1cqw;border-radius:1cqw;color:#8e90a6}
.v-dev-laptop .nv svg{width:2.3cqw;height:2.3cqw;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.v-dev-laptop .nv.on{background:rgba(255,255,255,.07);color:#fff}
.v-dev-laptop .nv em{margin-left:auto;font-style:normal;font-size:1.5cqw;background:var(--accent);color:#fff;border-radius:1cqw;padding:.1cqw .8cqw}
.v-dev-laptop .cap{font-size:1.55cqw;color:#5d6078;margin:2cqw 0 .6cqw 1.1cqw}
.v-dev-laptop .sp{display:flex;align-items:center;gap:1.2cqw;padding:.8cqw 1.1cqw;color:#a7a9bd}
.v-dev-laptop .sp i{width:1.3cqw;height:1.3cqw;border-radius:.4cqw;background:var(--c)}
.v-dev-laptop .main{padding:2.6cqw 3.2cqw;display:flex;flex-direction:column;min-width:0}
.v-dev-laptop .top{display:flex;align-items:center;gap:1.4cqw;color:#7f8299;font-size:1.7cqw}
.v-dev-laptop .top b{color:#d9dae6;font-weight:500}
.v-dev-laptop .avs{margin-left:auto;display:flex}
.v-dev-laptop .avs i{width:2.8cqw;height:2.8cqw;border-radius:50%;border:.3cqw solid #0d0e14;margin-left:-.9cqw;background:linear-gradient(135deg,#ffb38a,#e5677d)}
.v-dev-laptop .avs i:nth-child(2){background:linear-gradient(135deg,#7fd3ff,#5a6cff)}
.v-dev-laptop .avs i:nth-child(3){background:linear-gradient(135deg,#9ff0c9,#2fb98a)}
.v-dev-laptop .share{background:#f1f1f6;color:#111219;border-radius:1cqw;padding:.7cqw 1.6cqw;font-weight:600}
.v-dev-laptop .h{font-size:4.4cqw;font-weight:600;letter-spacing:-.03em;margin-top:2.6cqw}
.v-dev-laptop .sub{display:flex;align-items:center;gap:.8cqw;color:#7f8299;font-size:1.7cqw;margin-top:.6cqw}
.v-dev-laptop .sub svg{width:1.9cqw;height:1.9cqw;fill:color-mix(in srgb,var(--accent) 62%,#fff)}
.v-dev-laptop .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:1.6cqw;margin-top:2.6cqw}
.v-dev-laptop .k{background:#14151e;border:1px solid rgba(255,255,255,.06);border-radius:1.5cqw;padding:1.6cqw 1.8cqw;display:grid;grid-template-columns:1fr auto;align-items:end;row-gap:.4cqw}
.v-dev-laptop .k span{grid-column:1/3;color:#8b8da5;font-size:1.6cqw}
.v-dev-laptop .k b{font-size:3.6cqw;font-weight:600;letter-spacing:-.02em}
.v-dev-laptop .k em{font-style:normal;font-size:1.45cqw;color:#45e0a0;background:rgba(69,224,160,.12);border-radius:.8cqw;padding:.2cqw .8cqw;margin-bottom:.5cqw}
.v-dev-laptop .row{display:grid;grid-template-columns:1.35fr 1fr;gap:1.6cqw;margin-top:1.6cqw;flex:1;min-height:0;margin-bottom:.4cqw}
.v-dev-laptop .chart,.v-dev-laptop .ai{border-radius:1.5cqw;padding:1.6cqw 1.8cqw;display:flex;flex-direction:column}
.v-dev-laptop .chart{background:#14151e;border:1px solid rgba(255,255,255,.06)}
.v-dev-laptop .chart span{color:#8b8da5;font-size:1.6cqw}
.v-dev-laptop .bars{flex:1;display:flex;align-items:flex-end;gap:.9cqw;margin-top:1.4cqw;transform-origin:50% 100%;animation:dev-laptop-bars 6s linear infinite}
.v-dev-laptop .bars i{flex:1;height:calc(var(--h) * 100%);border-radius:.5cqw .5cqw .2cqw .2cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 62%,#000),color-mix(in srgb,var(--accent) 26%,#0d0e14))}
.v-dev-laptop .bars i.hi{background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 62%,#fff),var(--accent));box-shadow:0 0 2cqw color-mix(in srgb,var(--accent) 50%,transparent)}
.v-dev-laptop .ai{background:linear-gradient(160deg,color-mix(in srgb,var(--accent) 22%,transparent),color-mix(in srgb,var(--accent) 10%,transparent)),#14151e;border:1px solid color-mix(in srgb,color-mix(in srgb,var(--accent) 62%,#fff) 35%,transparent)}
.v-dev-laptop .aih{display:flex;align-items:center;gap:.8cqw;font-weight:600;font-size:1.8cqw}
.v-dev-laptop .aih svg{width:2.2cqw;height:2.2cqw;fill:color-mix(in srgb,var(--accent) 62%,#fff);animation:dev-laptop-spark 3s ease-in-out infinite}
.v-dev-laptop .ai p{margin:1.2cqw 0 0;color:#c9cad8;font-size:1.75cqw;line-height:1.45}
.v-dev-laptop .chips{display:flex;flex-wrap:wrap;gap:.8cqw;margin-top:auto}
.v-dev-laptop .chips span{font-size:1.45cqw;border-radius:2cqw;padding:.5cqw 1.2cqw;background:rgba(255,255,255,.08);color:#e2e4e8}
.v-dev-laptop .glare{position:absolute;left:-40%;top:-20%;width:180%;height:140%;background:linear-gradient(112deg,rgba(255,255,255,0) 38%,rgba(255,255,255,.11) 45%,rgba(255,255,255,.03) 52%,rgba(255,255,255,0) 58%);animation:dev-laptop-glare 6s linear infinite}
@keyframes dev-laptop-orbit{0%{transform:scale3d(.9,.9,.9) translate3d(0cqw,0cqw,-12cqw) rotateX(-27deg) rotateY(-19deg);animation-timing-function:cubic-bezier(.4,.1,.5,1)}84%{transform:scale3d(.9,.9,.9) translate3d(0cqw,0cqw,0cqw) rotateX(-13deg) rotateY(12deg);animation-timing-function:cubic-bezier(.6,0,.4,1)}100%{transform:scale3d(.9,.9,.9) translate3d(0cqw,0cqw,-12cqw) rotateX(-27deg) rotateY(-19deg)}}
@keyframes dev-laptop-lid{0%,8%{transform:rotateX(-88.6deg);animation-timing-function:cubic-bezier(.55,0,.25,1)}34%{transform:rotateX(21deg);animation-timing-function:cubic-bezier(.3,0,.3,1)}42%,84%{transform:rotateX(16deg);animation-timing-function:cubic-bezier(.6,0,.85,.45)}98%,100%{transform:rotateX(-88.6deg)}}
@keyframes dev-laptop-boot{0%,21%{opacity:0;transform:scale(.82)}27%{opacity:1;transform:scale(1);animation-timing-function:ease-in}33%{opacity:1;transform:scale(1.02)}39%,100%{opacity:0;transform:scale(1.12)}}
@keyframes dev-laptop-app{0%,31%{opacity:0;transform:scale(1.05);animation-timing-function:cubic-bezier(.2,.8,.2,1)}41%,84%{opacity:1;transform:scale(1)}90%,100%{opacity:0;transform:scale(1)}}
@keyframes dev-laptop-on{0%,26%{opacity:0}40%,84%{opacity:1}92%,100%{opacity:0}}
@keyframes dev-laptop-bars{0%,34%{transform:scaleY(.04);animation-timing-function:cubic-bezier(.2,.8,.2,1)}48%,86%{transform:scaleY(1)}94%,100%{transform:scaleY(.04)}}
@keyframes dev-laptop-spark{0%,100%{transform:scale(1) rotate(0deg);opacity:.8}50%{transform:scale(1.15) rotate(45deg);opacity:1}}
@keyframes dev-laptop-glare{0%{transform:translateX(-22cqw);animation-timing-function:cubic-bezier(.4,.1,.5,1)}84%{transform:translateX(18cqw);animation-timing-function:cubic-bezier(.6,0,.4,1)}100%{transform:translateX(-22cqw)}}

.v-dev-laptop .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(29cqw,6cqw) scale(.8)}
@container (max-aspect-ratio: 4/5){.v-dev-laptop .xfr{transform:translate(-25cqw,calc(36cqh - 10.5cqw)) scale(1.5)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-dev-laptop .xfr{transform:translate(-6cqw,20cqw) scale(1.12)}}
.v-dev-laptop .xcopy{position:absolute;left:6cqw;top:0;bottom:0;width:29cqw;display:flex;flex-direction:column;justify-content:center;gap:2.4cqw;z-index:40;color:var(--ink)}
.v-dev-laptop .xtop{display:flex;flex-direction:column;gap:1.5cqw}
.v-dev-laptop .xk{display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:dev-laptop-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-laptop .xk b{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .9cqw var(--accent);flex:none}
.v-dev-laptop .xh{font-family:var(--font-display);font-weight:700;font-size:4cqw;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
.v-dev-laptop .xh .w{display:inline-block;--delay:calc(.2s + var(--i) * .08s);animation:dev-laptop-xw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-laptop .xc{font:400 1.45cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 74%,transparent);--delay:.8s;animation:dev-laptop-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
.v-dev-laptop .xcopy{left:8cqw;right:8cqw;width:auto;top:8cqh;bottom:7.5cqh;justify-content:space-between;gap:0}
.v-dev-laptop .xtop{gap:3cqw}
.v-dev-laptop .xk{font-size:5.6cqw;gap:2.4cqw}
.v-dev-laptop .xk b{width:2.4cqw;height:2.4cqw}
.v-dev-laptop .xh{font-size:10.4cqw}
.v-dev-laptop .xc{font-size:5.6cqw;line-height:1.3}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-laptop .xcopy{left:7cqw;right:7cqw;width:auto;top:6.5cqw;bottom:6cqw;justify-content:space-between;gap:0}
.v-dev-laptop .xtop{gap:1.8cqw}
.v-dev-laptop .xk{font-size:2.3cqw;gap:1.4cqw}
.v-dev-laptop .xk b{width:1.2cqw;height:1.2cqw}
.v-dev-laptop .xh{font-size:6cqw}
.v-dev-laptop .xc{font-size:2.5cqw}
}
@keyframes dev-laptop-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
@keyframes dev-laptop-xw{0%{opacity:0;transform:translateY(.45em);filter:blur(.08em)}8%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const devBrowser: SceneSpec = {
  id: "dev-browser",
  slug: "mg-dev-browser",
  name: "Browser URL Load",
  kind: "scene",
  job: "devices",
  language: "product-ui",
  mechanic: "url-type-page-load",
  energy: "default",
  settle: 3.6,
  colors: { ink: "#1B1C1F", accent: "#3D63FF", secondary: "#FF7A59", paper: "#EFF1F5" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["browser", "website", "page-load"],
  fields: [
    { key: "kicker", label: "Kicker", default: "lumen.app/launch", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "One link and the whole team is in", maxChars: 44, role: "headline" },
    { key: "caption", label: "Caption", default: "Boards, docs and launch metrics load in seconds", maxChars: 64, role: "caption" },
  ],
  html: `<div class="orb"></div>
<div class="xfr"><div class="win">
<div class="tabs">
<div class="dots"><i></i><i></i><i></i></div>
<div class="tab on">
<span class="fav"><svg class="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg><span class="spin"></span><span class="m"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span></span>
<span class="ttl"><span class="a">New tab</span><span class="b">Lumen · Launch hub</span></span>
<svg class="x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
</div>
<div class="tab off"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7zM14 3v5h5"/></svg>Release notes</div>
<div class="tab off"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></div>
</div>
<div class="bar">
<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>
<svg class="dim" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5"/></svg>
<div class="addr">
<div class="ring"></div>
<span class="ico"><svg class="s" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg><svg class="l" viewBox="0 0 24 24"><path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3"/></svg></span>
<span class="typ"><span class="ph">Search or type a URL</span><span class="url">lumen.app<b>/launch</b></span><span class="car"><i></i></span></span>
</div>
<span class="me"></span>
</div>
<div class="prog"></div>
<div class="vp">
<div class="ntp"><b>Good morning</b><div><i></i><i></i><i></i><i></i><i></i></div></div>
<div class="skel"><i class="sb"></i><i style="left:1.2cqw;top:1.6cqw;width:9cqw;height:2cqw"></i><i style="left:1.2cqw;top:5cqw;width:13cqw;height:1.6cqw"></i><i style="left:1.2cqw;top:8cqw;width:11cqw;height:1.6cqw"></i><i style="left:1.2cqw;top:11cqw;width:12cqw;height:1.6cqw"></i><i style="left:17.7cqw;top:1.8cqw;width:18cqw;height:3.2cqw"></i><i style="left:17.7cqw;top:9.4cqw;width:19cqw;height:9cqw"></i><i style="left:38cqw;top:9.4cqw;width:19cqw;height:9cqw"></i><i style="left:58.3cqw;top:9.4cqw;width:19cqw;height:12cqw"></i><i style="left:17.7cqw;top:19.6cqw;width:19cqw;height:9cqw"></i><i style="left:38cqw;top:19.6cqw;width:19cqw;height:9cqw"></i></div>
<div class="ps">
<div class="wsr"><span class="m"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span>Lumen</div>
<div class="srch"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>Search</div>
<div class="ni"><svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/></svg>Home</div>
<div class="ni"><svg viewBox="0 0 24 24"><path d="M4 13l2-8h12l2 8v6H4zM4 13h5l1 2h4l1-2h5"/></svg>Inbox<em>4</em></div>
<div class="ni on"><svg viewBox="0 0 24 24"><path d="M5 19l4-12 4 8 3-5 3 9"/></svg>Launch hub</div>
<div class="ni"><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7zM14 3v5h5"/></svg>Docs</div>
<div class="ni"><svg viewBox="0 0 24 24"><path d="M12 3v3M5 9h14v10H5zM9.5 14h.01M14.5 14h.01"/></svg>Agents</div>
<div class="sec">Teams</div>
<div class="ni"><i style="--c:#ff7a59"></i>Growth</div>
<div class="ni"><i style="--c:#2e4df9"></i>Design</div>
</div>
<div class="pm">
<div class="hd"><h5>Launch week</h5><span class="lv"><i></i>On track</span><span class="avs"><i></i><i></i><i></i></span><span class="btn">Share</span></div>
<div class="tb"><span class="on">Board</span><span>Timeline</span><span>Docs</span><span>Metrics</span></div>
<div class="board">
<div class="col c1">
<div class="ch"><i style="--c:#f5a524"></i>Drafting <em>4</em></div>
<div class="cd"><span class="tg" style="--c:#b26a00;--b:#fff1d6">Copy</span><b>Launch post for the blog</b><div class="ft"><i style="--a:linear-gradient(135deg,#ffcf8a,#ff7a59)"></i>Oct 14<span class="pb" style="--p:40%"><s></s></span></div></div>
<div class="cd"><span class="tg" style="--c:#0f7a52;--b:#dcf5e9">Video</span><b>30s teaser cut</b><div class="ft"><i style="--a:linear-gradient(135deg,#9fd8ff,#5b6cff)"></i>Oct 15<span class="pb" style="--p:25%"><s></s></span></div></div>
</div>
<div class="col c2">
<div class="ch"><i style="--c:#2e4df9"></i>In review <em>3</em></div>
<div class="cd"><span class="tg" style="--c:#2e4df9;--b:#e9ebef">Product</span><b>Pricing page v3</b><div class="ft"><i style="--a:linear-gradient(135deg,#b6f2d2,#32b98a)"></i>Oct 12<span class="pb" style="--p:80%"><s></s></span></div></div>
<div class="cd"><span class="tg" style="--c:#c2316b;--b:#ffe3ee">Press</span><b>Embargoed briefing kit</b><div class="ft"><i style="--a:linear-gradient(135deg,#ffcf8a,#ff7a59)"></i>Oct 13<span class="pb" style="--p:65%"><s></s></span></div></div>
</div>
<div class="col c3">
<div class="ch"><i style="--c:#2fbf80"></i>Shipped <em>7</em></div>
<div class="cd"><div class="cv"></div><b>New onboarding flow</b><div class="ft"><i style="--a:linear-gradient(135deg,#9fd8ff,#5b6cff)"></i>Oct 9<span class="pb" style="--p:100%"><s></s></span></div></div>
</div>
</div>
</div>
</div>
</div></div>
<div class="xcopy"><div class="xtop"><div class="xk" data-21st-slot="kicker"><b></b>{{kicker}}</div><div class="xh" data-21st-slot="headline">{{headline|words}}</div></div><div class="xc" data-21st-slot="caption">{{caption}}</div></div>`,
  css: `
.v-dev-browser{color:var(--ink);font-family:var(--font-body)}
.v-dev-browser[data-backdrop="on"]{background:radial-gradient(55% 75% at 12% 18%,color-mix(in srgb,var(--secondary) 34%,var(--paper)) 0%,transparent 62%),radial-gradient(60% 80% at 92% 88%,color-mix(in srgb,var(--accent) 28%,var(--paper)) 0%,transparent 64%),var(--paper)}
.v-dev-browser[data-backdrop="off"] .orb{display:none}
.v-dev-browser *,.v-dev-browser *::before,.v-dev-browser *::after{box-sizing:border-box}
.v-dev-browser .orb{position:absolute;width:30cqw;height:30cqw;border-radius:50%;left:66cqw;top:-8cqw;background:radial-gradient(circle,rgba(255,255,255,.8),rgba(255,255,255,0) 68%);animation:dev-browser-orb 6s ease-in-out infinite}
.v-dev-browser .win{position:absolute;left:10cqw;top:5.4cqw;width:80cqw;height:46cqw;border-radius:1.4cqw;background:#fff;overflow:hidden;box-shadow:0 0 0 1px rgba(41,42,45,.08),0 .5cqw 1.2cqw rgba(51,52,56,.10),0 3cqw 7cqw -1cqw rgba(36,37,41,.30);animation:dev-browser-cam 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-browser .tabs{position:absolute;left:0;right:0;top:0;height:3.8cqw;background:#ebedf1;display:flex;align-items:flex-end;padding:0 1.2cqw;gap:.3cqw}
.v-dev-browser .dots{display:flex;gap:.6cqw;align-self:center;margin-right:1.2cqw}
.v-dev-browser .dots i{width:.95cqw;height:.95cqw;border-radius:50%;background:#d0d2d6}
.v-dev-browser .tab{position:relative;height:2.9cqw;display:flex;align-items:center;gap:.7cqw;padding:0 1.3cqw;font-size:1.3cqw;color:#686a6d;border-radius:1cqw 1cqw 0 0}
.v-dev-browser .tab.on{background:#fff;color:#212225;width:19cqw}
.v-dev-browser .tab .x{margin-left:auto;width:1.1cqw;height:1.1cqw;stroke:#97989c;stroke-width:2.4;fill:none}
.v-dev-browser .fav{position:relative;width:1.5cqw;height:1.5cqw;flex:none}
.v-dev-browser .fav > *{position:absolute;inset:0}
.v-dev-browser .globe{fill:none;stroke:#86888c;stroke-width:1.8;animation:dev-browser-out1 6s linear infinite}
.v-dev-browser .spin{border-radius:50%;border:.22cqw solid color-mix(in srgb,var(--accent) 20%,transparent);border-top-color:var(--accent);opacity:0;animation:dev-browser-spinv 6s linear infinite}
.v-dev-browser .fav .m{border-radius:.42cqw;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));display:flex;align-items:center;justify-content:center;opacity:0;animation:dev-browser-favin 6s linear infinite}
.v-dev-browser .fav .m svg{width:1cqw;height:1cqw;fill:#fff}
.v-dev-browser .ttl{position:relative;flex:1;height:1.6cqw;overflow:hidden}
.v-dev-browser .ttl span{position:absolute;left:0;top:0;white-space:nowrap;line-height:1.6cqw}
.v-dev-browser .ttl .a{animation:dev-browser-out1 6s linear infinite}
.v-dev-browser .ttl .b{opacity:0;animation:dev-browser-favin 6s linear infinite}
.v-dev-browser .tab.off{color:#86888c}
.v-dev-browser .tab.off svg{width:1.3cqw;height:1.3cqw;fill:none;stroke:#86888c;stroke-width:2}
.v-dev-browser .bar{position:absolute;left:0;right:0;top:3.8cqw;height:4.4cqw;display:flex;align-items:center;gap:1.3cqw;padding:0 1.4cqw;border-bottom:1px solid #e9ebf0}
.v-dev-browser .bar > svg{width:1.7cqw;height:1.7cqw;fill:none;stroke:#86888c;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.v-dev-browser .bar > svg.dim{stroke:#cbccd0}
.v-dev-browser .addr{position:relative;flex:1;height:2.9cqw;border-radius:1.6cqw;background:#f0f2f6;display:flex;align-items:center;gap:.8cqw;padding:0 1.3cqw}
.v-dev-browser .ring{position:absolute;inset:0;border-radius:1.6cqw;background:#fff;box-shadow:0 0 0 .22cqw color-mix(in srgb,var(--accent) 55%,transparent),0 0 0 .7cqw color-mix(in srgb,var(--accent) 12%,transparent);opacity:0;animation:dev-browser-ring 6s linear infinite}
.v-dev-browser .ico{position:relative;width:1.4cqw;height:1.4cqw;flex:none}
.v-dev-browser .ico svg{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:#76787c;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.v-dev-browser .ico .s{animation:dev-browser-out1 6s linear infinite}
.v-dev-browser .ico .l{opacity:0;stroke:#2f9e6f;animation:dev-browser-favin 6s linear infinite}
.v-dev-browser .typ{position:relative;height:2cqw;display:flex;align-items:center}
.v-dev-browser .url{font-family:var(--font-mono);font-size:1.45cqw;width:16ch;white-space:nowrap;color:#212225;clip-path:inset(0 100% 0 0);animation:dev-browser-type 6s linear infinite}
.v-dev-browser .url b{font-weight:400;color:#96989b}
.v-dev-browser .ph{position:absolute;left:0;top:0;line-height:2cqw;font-size:1.4cqw;color:#9fa0a4;white-space:nowrap;animation:dev-browser-ph 6s linear infinite}
.v-dev-browser .car{position:absolute;left:0;top:.2cqw;font-family:var(--font-mono);font-size:1.45cqw;width:.14cqw;height:1.6cqw;animation:dev-browser-caret 6s linear infinite}
.v-dev-browser .car i{position:absolute;inset:0;background:var(--accent);border-radius:.1cqw;animation:dev-browser-blink 1s steps(1,end) infinite}
.v-dev-browser .me{width:2.4cqw;height:2.4cqw;border-radius:50%;background:linear-gradient(135deg,#ffb38a,#e5677d);flex:none}
.v-dev-browser .prog{position:absolute;left:0;right:0;top:8.05cqw;height:.32cqw;background:linear-gradient(90deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));transform-origin:0 50%;transform:scaleX(0);box-shadow:0 0 .8cqw color-mix(in srgb,var(--accent) 60%,transparent);animation:dev-browser-prog 6s linear infinite}
.v-dev-browser .vp{position:absolute;left:0;right:0;top:8.2cqw;bottom:0;background:#fbfaff;overflow:hidden}
.v-dev-browser .ntp{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.2cqw;animation:dev-browser-ntp 6s linear infinite}
.v-dev-browser .ntp b{font-family:var(--font-display);font-weight:600;font-size:2.6cqw;color:#c6c8cc;letter-spacing:-.02em}
.v-dev-browser .ntp div{display:flex;gap:1.6cqw}
.v-dev-browser .ntp i{width:5cqw;height:5cqw;border-radius:1.4cqw;background:#edeff3;box-shadow:inset 0 0 0 1px #e4e6ea}
.v-dev-browser .ps{position:absolute;left:0;top:0;bottom:0;width:15.5cqw;background:#f3f5f9;border-right:1px solid #e8eaee;padding:1.6cqw 1.1cqw;display:flex;flex-direction:column;gap:.35cqw;font-size:1.25cqw;color:#686a6d;opacity:0;animation:dev-browser-r1 6s linear infinite}
.v-dev-browser .wsr{display:flex;align-items:center;gap:.8cqw;font-weight:600;color:#212225;font-size:1.4cqw;margin-bottom:1cqw}
.v-dev-browser .wsr .m{width:2.2cqw;height:2.2cqw;border-radius:.65cqw;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));display:flex;align-items:center;justify-content:center}
.v-dev-browser .wsr .m svg{width:1.4cqw;height:1.4cqw;fill:#fff}
.v-dev-browser .srch{height:2.4cqw;border-radius:.8cqw;background:#fff;box-shadow:inset 0 0 0 1px #e7e9ed;display:flex;align-items:center;gap:.6cqw;padding:0 .8cqw;color:#a6a7ab;margin-bottom:.8cqw}
.v-dev-browser .srch svg,.v-dev-browser .ni svg{width:1.3cqw;height:1.3cqw;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.v-dev-browser .ni{display:flex;align-items:center;gap:.8cqw;padding:.65cqw .8cqw;border-radius:.8cqw}
.v-dev-browser .ni.on{background:#fff;color:color-mix(in srgb,var(--accent) 82%,#000);box-shadow:0 .1cqw .4cqw rgba(51,52,56,.10);font-weight:500}
.v-dev-browser .ni em{margin-left:auto;font-style:normal;font-size:1cqw;color:#fff;background:var(--secondary);border-radius:.8cqw;padding:0 .55cqw}
.v-dev-browser .sec{font-size:1.05cqw;color:#a6a7ab;margin:1cqw 0 .2cqw .8cqw}
.v-dev-browser .ni i{width:1cqw;height:1cqw;border-radius:.3cqw;background:var(--c);margin:0 .15cqw}
.v-dev-browser .pm{position:absolute;left:15.5cqw;right:0;top:0;bottom:0;padding:1.8cqw 2.2cqw}
.v-dev-browser .hd{display:flex;align-items:center;gap:1.2cqw;opacity:0;animation:dev-browser-r2 6s linear infinite}
.v-dev-browser .hd h5{margin:0;font-family:var(--font-display);font-size:2.7cqw;font-weight:700;letter-spacing:-.03em;color:#1b1c1f}
.v-dev-browser .hd .lv{font-size:1.1cqw;color:#2f9e6f;background:#e5f6ee;border-radius:1cqw;padding:.25cqw .8cqw;display:flex;align-items:center;gap:.4cqw}
.v-dev-browser .hd .lv i{width:.6cqw;height:.6cqw;border-radius:50%;background:#2fbf80}
.v-dev-browser .hd .avs{margin-left:auto;display:flex}
.v-dev-browser .hd .avs i{width:2.2cqw;height:2.2cqw;border-radius:50%;border:.22cqw solid #fbfaff;margin-left:-.7cqw;background:linear-gradient(135deg,#ffcf8a,var(--secondary))}
.v-dev-browser .hd .avs i:nth-child(2){background:linear-gradient(135deg,#9fd8ff,color-mix(in srgb,var(--accent) 82%,#000))}
.v-dev-browser .hd .avs i:nth-child(3){background:linear-gradient(135deg,#b6f2d2,#32b98a)}
.v-dev-browser .hd .btn{font-size:1.2cqw;font-weight:600;color:#fff;background:color-mix(in srgb,var(--accent) 82%,#000);border-radius:.8cqw;padding:.6cqw 1.3cqw;box-shadow:0 .3cqw .8cqw color-mix(in srgb,color-mix(in srgb,var(--accent) 82%,#000) 35%,transparent)}
.v-dev-browser .tb{display:flex;gap:2cqw;font-size:1.2cqw;color:#86888c;margin-top:1.3cqw;border-bottom:1px solid #e8eaee;opacity:0;animation:dev-browser-r2 6s linear infinite}
.v-dev-browser .tb span{padding-bottom:.8cqw}
.v-dev-browser .tb .on{color:#1b1c1f;font-weight:600;box-shadow:inset 0 -.22cqw 0 color-mix(in srgb,var(--accent) 82%,#000)}
.v-dev-browser .board{display:grid;grid-template-columns:repeat(3,1fr);gap:1.3cqw;margin-top:1.5cqw}
.v-dev-browser .col{display:flex;flex-direction:column;gap:.9cqw;opacity:0}
.v-dev-browser .col.c1{animation:dev-browser-r3 6s linear infinite}
.v-dev-browser .col.c2{animation:dev-browser-r4 6s linear infinite}
.v-dev-browser .col.c3{animation:dev-browser-r5 6s linear infinite}
.v-dev-browser .ch{display:flex;align-items:center;gap:.6cqw;font-size:1.15cqw;font-weight:600;color:#37383c}
.v-dev-browser .ch i{width:.8cqw;height:.8cqw;border-radius:50%;background:var(--c)}
.v-dev-browser .ch em{font-style:normal;font-weight:500;color:#a6a7ab}
.v-dev-browser .cd{background:#fff;border-radius:1cqw;padding:1cqw 1.1cqw;box-shadow:0 0 0 1px #e8eaee,0 .3cqw .8cqw rgba(51,52,56,.06);display:flex;flex-direction:column;gap:.7cqw}
.v-dev-browser .cd .tg{align-self:flex-start;font-size:.95cqw;font-weight:600;border-radius:.6cqw;padding:.15cqw .6cqw;color:var(--c);background:var(--b)}
.v-dev-browser .cd b{font-size:1.25cqw;font-weight:600;color:#212225;line-height:1.3}
.v-dev-browser .cd .ft{display:flex;align-items:center;gap:.6cqw;font-size:1cqw;color:#96989b}
.v-dev-browser .cd .ft i{width:1.5cqw;height:1.5cqw;border-radius:50%;background:var(--a)}
.v-dev-browser .cd .pb{margin-left:auto;width:4.5cqw;height:.45cqw;border-radius:.3cqw;background:#eceef2;overflow:hidden}
.v-dev-browser .cd .pb s{display:block;height:100%;width:var(--p);background:color-mix(in srgb,var(--accent) 82%,#000);border-radius:.3cqw}
.v-dev-browser .cv{height:6.2cqw;border-radius:.7cqw;background:radial-gradient(60% 90% at 25% 30%,#ffd0b4,rgba(255,208,180,0) 70%),radial-gradient(70% 90% at 80% 80%,color-mix(in srgb,var(--accent) 50%,#fff),color-mix(in srgb,color-mix(in srgb,var(--accent) 50%,#fff) 0%,transparent) 70%),linear-gradient(135deg,#ffe9dd,#e4e6ea);position:relative;overflow:hidden}
.v-dev-browser .cv::after{content:"";position:absolute;left:14%;right:14%;bottom:-20%;height:70%;border-radius:.6cqw .6cqw 0 0;background:#fff;box-shadow:0 .4cqw 1cqw rgba(51,52,56,.18)}
.v-dev-browser .skel{position:absolute;inset:0;opacity:0;animation:dev-browser-skel 6s linear infinite}
.v-dev-browser .skel i{position:absolute;border-radius:.8cqw;background:linear-gradient(90deg,#eef0f4 0%,#f8f6fb 50%,#eef0f4 100%)}
.v-dev-browser .skel .sb{left:0;top:0;bottom:0;width:15.5cqw;border-radius:0;background:#f3f5f9}
@keyframes dev-browser-skel{0%,27%{opacity:0}30%,37%{opacity:1}43%,100%{opacity:0}}
@keyframes dev-browser-orb{0%,100%{transform:translate(0,0)}50%{transform:translate(-3cqw,2cqw)}}
@keyframes dev-browser-cam{0%{transform:translateY(.6cqw) scale(.975)}84%{transform:translateY(-.4cqw) scale(1.05)}100%{transform:translateY(.6cqw) scale(.975)}}
@keyframes dev-browser-ring{0%,2%{opacity:0}5%,24%{opacity:1}28%,100%{opacity:0}}
@keyframes dev-browser-ph{0%,3%{opacity:1}5%,91%{opacity:0}96%,100%{opacity:1}}
@keyframes dev-browser-type{0%,5%{clip-path:inset(0 100% 0 0);opacity:1;animation-timing-function:steps(16,end)}23%,86%{clip-path:inset(0 0 0 0);opacity:1}90%{clip-path:inset(0 0 0 0);opacity:0}91%,100%{clip-path:inset(0 100% 0 0);opacity:0}}
@keyframes dev-browser-caret{0%,5%{transform:translateX(0ch);opacity:1;animation-timing-function:steps(16,end)}23%,25.5%{transform:translateX(16ch);opacity:1}26%,90%{transform:translateX(16ch);opacity:0}91%,100%{transform:translateX(0ch);opacity:0}}
@keyframes dev-browser-blink{0%{opacity:1}50%{opacity:0}}
@keyframes dev-browser-prog{0%,25%{transform:scaleX(0);opacity:1;animation-timing-function:cubic-bezier(.2,.8,.2,1)}35%{transform:scaleX(.7);opacity:1;animation-timing-function:cubic-bezier(.5,0,.5,1)}42%{transform:scaleX(1);opacity:1}47%,100%{transform:scaleX(1);opacity:0}}
@keyframes dev-browser-out1{0%,25%{opacity:1}27%,90%{opacity:0}94%,100%{opacity:1}}
@keyframes dev-browser-favin{0%,40%{opacity:0}43%,88%{opacity:1}91%,100%{opacity:0}}
@keyframes dev-browser-spinv{0%,25%{opacity:0;transform:rotate(0deg)}27%{opacity:1;transform:rotate(130deg)}40%{opacity:1;transform:rotate(780deg)}42%,100%{opacity:0;transform:rotate(900deg)}}
@keyframes dev-browser-ntp{0%,25%{opacity:1;transform:scale(1)}30%,90%{opacity:0;transform:scale(.98)}96%,100%{opacity:1;transform:scale(1)}}
@keyframes dev-browser-r1{0%,30%{opacity:0;transform:translateX(-1.5cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}40%,86%{opacity:1;transform:translateX(0)}91%,100%{opacity:0;transform:translateX(0)}}
@keyframes dev-browser-r2{0%,32%{opacity:0;transform:translateY(1.2cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}42%,86%{opacity:1;transform:translateY(0)}91%,100%{opacity:0;transform:translateY(0)}}
@keyframes dev-browser-r3{0%,34%{opacity:0;transform:translateY(2cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}44%,86%{opacity:1;transform:translateY(0)}91%,100%{opacity:0;transform:translateY(0)}}
@keyframes dev-browser-r4{0%,36%{opacity:0;transform:translateY(2cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}46%,86%{opacity:1;transform:translateY(0)}91%,100%{opacity:0;transform:translateY(0)}}
@keyframes dev-browser-r5{0%,38%{opacity:0;transform:translateY(2cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}48%,86%{opacity:1;transform:translateY(0)}91%,100%{opacity:0;transform:translateY(0)}}

.v-dev-browser .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(31cqw,7.6cqw) scale(.7)}
@container (max-aspect-ratio: 4/5){.v-dev-browser .xfr{transform:translate(-4cqw,calc(39cqh - 5.6cqw)) scale(1.08)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-dev-browser .xfr{transform:translate(0cqw,26cqw) scale(1)}}
.v-dev-browser .xcopy{position:absolute;left:6cqw;top:0;bottom:0;width:29cqw;display:flex;flex-direction:column;justify-content:center;gap:2.4cqw;z-index:40;color:var(--ink)}
.v-dev-browser .xtop{display:flex;flex-direction:column;gap:1.5cqw}
.v-dev-browser .xk{display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:dev-browser-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-browser .xk b{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .9cqw var(--accent);flex:none}
.v-dev-browser .xh{font-family:var(--font-display);font-weight:800;font-size:4cqw;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
.v-dev-browser .xh .w{display:inline-block;--delay:calc(.2s + var(--i) * .08s);animation:dev-browser-xw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-browser .xc{font:400 1.45cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 74%,transparent);--delay:.8s;animation:dev-browser-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
.v-dev-browser .xcopy{left:8cqw;right:8cqw;width:auto;top:8cqh;bottom:7.5cqh;justify-content:space-between;gap:0}
.v-dev-browser .xtop{gap:3cqw}
.v-dev-browser .xk{font-size:5.6cqw;gap:2.4cqw}
.v-dev-browser .xk b{width:2.4cqw;height:2.4cqw}
.v-dev-browser .xh{font-size:10.4cqw}
.v-dev-browser .xc{font-size:5.6cqw;line-height:1.3}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-browser .xcopy{left:7cqw;right:7cqw;width:auto;top:6.5cqw;bottom:6cqw;justify-content:space-between;gap:0}
.v-dev-browser .xtop{gap:1.8cqw}
.v-dev-browser .xk{font-size:2.3cqw;gap:1.4cqw}
.v-dev-browser .xk b{width:1.2cqw;height:1.2cqw}
.v-dev-browser .xh{font-size:6cqw}
.v-dev-browser .xc{font-size:2.5cqw}
}
@keyframes dev-browser-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
@keyframes dev-browser-xw{0%{opacity:0;transform:translateY(.45em);filter:blur(.08em)}8%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const devTablet: SceneSpec = {
  id: "dev-tablet",
  slug: "mg-dev-tablet",
  name: "Tablet Stylus Markup",
  kind: "scene",
  job: "devices",
  language: "hand-drawn",
  mechanic: "stylus-circle-annotate",
  energy: "default",
  settle: 4.3,
  colors: { ink: "#F3EFE6", accent: "#FF5A36", secondary: "#4F6BFF", paper: "#1A2A20" },
  fonts: { display: "Caveat", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.accent",
  tags: ["tablet", "stylus", "annotation"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Launch retro", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "Circle what matters, right on the board", maxChars: 44, role: "headline" },
    { key: "note", label: "Handwritten note", default: "best week yet!", maxChars: 18, role: "label" },
    { key: "caption", label: "Caption", default: "Sketch, mark up and share in one canvas", maxChars: 60, role: "caption" },
  ],
  html: `<div class="leaf"></div>
<div class="xfr"><div class="spot"></div>
<div class="tab">
<div class="shell"></div>
<div class="bez"></div>
<div class="cam"></div>
<div class="scr">
<div class="tt"><span>Lumen Canvas</span><b>Launch retro</b></div>
<div class="who"><i></i><i></i><i></i><span>Share</span></div>
<div class="note n1"><b>Onboarding drop-off fixed at step 2</b><span><i style="--a:linear-gradient(135deg,#ffc18a,#e8704f)"></i>Maya</span></div>
<div class="note n2"><b>Templates gallery shipped early</b><span><i style="--a:linear-gradient(135deg,#9ad7ff,#4f6bff)"></i>Jonah</span></div>
<div class="img"><div class="ph"></div><span>Hero shot v4</span></div>
<div class="met">
<span>Activation, week 6</span>
<b>+38%</b>
<em>Best yet</em>
<svg viewBox="0 0 100 30" preserveAspectRatio="none"><defs><linearGradient id="dev-tablet-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff5a36" stop-opacity=".22"/><stop offset="1" stop-color="#ff5a36" stop-opacity="0"/></linearGradient></defs><path d="M0 26 C10 25 16 22 24 23 S38 18 46 19 60 12 68 13 82 6 100 3 V30 H0Z" fill="url(#dev-tablet-fill)"/><path d="M0 26 C10 25 16 22 24 23 S38 18 46 19 60 12 68 13 82 6 100 3" fill="none" stroke="#ff5a36" stroke-width="1.4" vector-effect="non-scaling-stroke"/></svg>
</div>
<div class="collab"><i><svg viewBox="0 0 24 24"><path d="M4 12h16M12 4v16"/></svg></i><div><b>3 people editing</b><span>Changes sync live</span></div></div>
<div class="tools">
<svg viewBox="0 0 24 24"><path d="M5 3l14 8-6 2-2 6z"/></svg>
<svg class="on" viewBox="0 0 24 24"><path d="M4 20l1-5L16 4l4 4L9 19zM14 6l4 4"/></svg>
<svg viewBox="0 0 24 24"><path d="M9 15l-4 5h6l8-8-4-4z"/></svg>
<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>
<svg viewBox="0 0 24 24"><path d="M6 6h12M12 6v13"/></svg>
<hr>
<i class="sel" style="--c:#ff5a36"></i><i style="--c:#26231d"></i><i style="--c:#4f6bff"></i>
</div>
<div class="peer"><svg viewBox="0 0 24 24"><path d="M3 2l7 19 2.6-7.4L20 11z" fill="#4f6bff" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg><span>Jonah</span></div>
<svg class="ink" viewBox="0 0 100 69.28"><path class="loop" pathLength="1" d="M59 33.5C54.5 30.5 55 22 66 19.6C76 17.8 86.5 20.5 85 27.5C83.8 33.5 74 36.4 66 35.6C61 35.1 57 34.6 54.5 37.5C52 40.4 50 42.5 47.5 44.5"/><path class="head" pathLength="1" d="M51.5 44.26L47.5 44.5L48.6 40.7"/></svg>
<div class="hand" data-21st-slot="note">{{note}}</div>
<div class="gloss"></div>
</div>
<div class="layer">
<div class="pen"><div class="pshadow"></div><div class="lift"><div class="body"></div></div></div>
</div>
</div></div>
<div class="xcopy"><div class="xtop"><div class="xk" data-21st-slot="kicker"><b></b>{{kicker}}</div><div class="xh" data-21st-slot="headline">{{headline|words}}</div></div><div class="xc" data-21st-slot="caption">{{caption}}</div></div>`,
  css: `
.v-dev-tablet{color:var(--ink);font-family:var(--font-body)}
.v-dev-tablet[data-backdrop="on"]{background:radial-gradient(70% 90% at 58% 26%,color-mix(in srgb,var(--paper) 72%,#8ab89a) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper) 45%,#000) 100%)}
.v-dev-tablet[data-backdrop="off"] .leaf,.v-dev-tablet[data-backdrop="off"] .spot{display:none}
.v-dev-tablet *,.v-dev-tablet *::before,.v-dev-tablet *::after{box-sizing:border-box}
.v-dev-tablet .spot{position:absolute;left:12cqw;top:42cqw;width:76cqw;height:18cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.55),rgba(0,0,0,0));animation:dev-tablet-shadow 6s linear infinite}
.v-dev-tablet .leaf{position:absolute;right:-6cqw;top:-10cqw;width:34cqw;height:34cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(214,255,190,.12),rgba(214,255,190,0));animation:dev-tablet-glow 6s ease-in-out infinite}
.v-dev-tablet .tab{position:absolute;left:19cqw;top:6.1cqw;width:62cqw;height:44cqw;animation:dev-tablet-slide 6s linear infinite}
.v-dev-tablet .shell{position:absolute;inset:0;border-radius:3.3cqw;background:linear-gradient(150deg,#55595f 0%,#2a2c30 38%,#1b1c1f 100%);box-shadow:inset 0 0 0 .14cqw rgba(255,255,255,.16),0 1.2cqw 2cqw rgba(0,0,0,.35),0 3.5cqw 6cqw -1cqw rgba(0,0,0,.55)}
.v-dev-tablet .bez{position:absolute;inset:.38cqw;border-radius:2.95cqw;background:#070808}
.v-dev-tablet .cam{position:absolute;left:50%;top:.62cqw;width:.55cqw;height:.55cqw;margin-left:-.27cqw;border-radius:50%;background:radial-gradient(circle at 35% 35%,#34405e,#0a0c12 70%)}
.v-dev-tablet .scr{position:absolute;left:1.7cqw;top:1.7cqw;right:1.7cqw;bottom:1.7cqw;border-radius:1.5cqw;overflow:hidden;container-type:inline-size;color:#26231d;background:radial-gradient(circle,#d8d1c2 .17cqw,rgba(0,0,0,0) .21cqw) 0 0/2.4cqw 2.4cqw,#f7f4ed}
.v-dev-tablet .tt{position:absolute;left:4cqw;top:3.2cqw}
.v-dev-tablet .tt span{display:block;font-size:1.6cqw;color:#9b9384}
.v-dev-tablet .tt b{display:block;font-size:2.8cqw;font-weight:600;letter-spacing:-.02em;margin-top:.3cqw}
.v-dev-tablet .who{position:absolute;right:4cqw;top:3.6cqw;display:flex;align-items:center;gap:1cqw}
.v-dev-tablet .who i{width:3.4cqw;height:3.4cqw;border-radius:50%;border:.35cqw solid #f7f4ed;margin-left:-1.6cqw;background:linear-gradient(135deg,#ffc18a,#e8704f)}
.v-dev-tablet .who i:nth-child(2){background:linear-gradient(135deg,#9ad7ff,var(--secondary))}
.v-dev-tablet .who i:nth-child(3){background:linear-gradient(135deg,#bdf0c8,#36a46a)}
.v-dev-tablet .who span{font-size:1.7cqw;font-weight:600;background:#26231d;color:#f7f4ed;border-radius:2cqw;padding:.8cqw 1.8cqw;margin-left:.6cqw}
.v-dev-tablet .note{position:absolute;width:21cqw;height:17.5cqw;padding:2cqw;border-radius:.6cqw;box-shadow:0 .2cqw .3cqw rgba(60,40,10,.12),0 1.4cqw 2cqw -.6cqw rgba(60,40,10,.25);display:flex;flex-direction:column;justify-content:space-between}
.v-dev-tablet .note b{font-size:2.35cqw;font-weight:600;line-height:1.22;letter-spacing:-.01em}
.v-dev-tablet .note span{font-size:1.5cqw;color:rgba(38,35,29,.6);display:flex;align-items:center;gap:.8cqw}
.v-dev-tablet .note span i{width:2.2cqw;height:2.2cqw;border-radius:50%;background:var(--a)}
.v-dev-tablet .n1{left:4.5cqw;top:13cqw;background:#ffe27a;transform:rotate(-3deg)}
.v-dev-tablet .n2{left:7cqw;top:35cqw;background:#ffc3d4;transform:rotate(2.5deg)}
.v-dev-tablet .img{position:absolute;left:30.5cqw;top:12cqw;width:21cqw;padding:1.2cqw;background:#fff;border-radius:1.2cqw;box-shadow:0 .2cqw .3cqw rgba(60,40,10,.08),0 1.2cqw 2.4cqw -.8cqw rgba(60,40,10,.25);transform:rotate(1.5deg)}
.v-dev-tablet .img .ph{height:13cqw;border-radius:.7cqw;position:relative;overflow:hidden;background:linear-gradient(180deg,#ffb98a 0%,#ff8a6a 45%,#484a4d 100%)}
.v-dev-tablet .img .ph::before{content:"";position:absolute;left:30%;top:22%;width:40%;height:40%;border-radius:50%;background:#ffe9b0;box-shadow:0 0 3cqw #ffd58a}
.v-dev-tablet .img .ph::after{content:"";position:absolute;left:-10%;right:-10%;bottom:-30%;height:65%;border-radius:50% 50% 0 0;background:#27292c}
.v-dev-tablet .img span{display:block;font-size:1.6cqw;font-weight:500;margin-top:1cqw;color:#4a443a}
.v-dev-tablet .met{position:absolute;left:56cqw;top:13cqw;width:37cqw;height:31.5cqw;border-radius:1.8cqw;background:#fff;box-shadow:0 .2cqw .3cqw rgba(60,40,10,.08),0 1.6cqw 3cqw -1cqw rgba(60,40,10,.28);padding:2.6cqw 3cqw}
.v-dev-tablet .met span{display:block;font-size:1.7cqw;color:#9b9384}
.v-dev-tablet .met b{display:block;font-family:var(--font-body);font-size:8.6cqw;font-weight:700;letter-spacing:-.04em;line-height:1;margin-top:1.4cqw;color:#1f1c17}
.v-dev-tablet .met em{position:absolute;right:3cqw;top:2.4cqw;font-style:normal;font-size:1.5cqw;font-weight:600;color:#1f8f5a;background:#e2f5ea;border-radius:1.4cqw;padding:.4cqw 1.2cqw}
.v-dev-tablet .met svg{position:absolute;left:3cqw;right:3cqw;bottom:2.4cqw;width:31cqw;height:9cqw}
.v-dev-tablet .collab{position:absolute;left:57cqw;top:50cqw;width:36cqw;display:flex;align-items:center;gap:1.4cqw;padding:1.6cqw 2cqw;border-radius:1.6cqw;background:#fff;box-shadow:0 1.2cqw 2.4cqw -1cqw rgba(60,40,10,.25)}
.v-dev-tablet .collab i{width:3.6cqw;height:3.6cqw;border-radius:1cqw;background:#efe9dc;display:flex;align-items:center;justify-content:center}
.v-dev-tablet .collab i svg{width:2cqw;height:2cqw;fill:none;stroke:#7a7263;stroke-width:2;stroke-linecap:round}
.v-dev-tablet .collab b{display:block;font-size:1.8cqw;font-weight:600}
.v-dev-tablet .collab span{display:block;font-size:1.45cqw;color:#9b9384;margin-top:.2cqw}
.v-dev-tablet .tools{position:absolute;left:50%;bottom:2.6cqw;transform:translateX(-50%);display:flex;align-items:center;gap:1.1cqw;padding:1cqw 1.6cqw;border-radius:3cqw;background:#fff;box-shadow:0 .2cqw .4cqw rgba(60,40,10,.08),0 1.4cqw 3cqw -1cqw rgba(60,40,10,.3)}
.v-dev-tablet .tools svg{width:2.6cqw;height:2.6cqw;fill:none;stroke:#8a8172;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}
.v-dev-tablet .tools .on{background:#26231d;border-radius:1.2cqw;padding:.55cqw;width:3.7cqw;height:3.7cqw;stroke:#fff}
.v-dev-tablet .tools hr{width:1px;height:2.6cqw;border:0;background:#e6dfd0;margin:0 .3cqw}
.v-dev-tablet .tools i{width:2.2cqw;height:2.2cqw;border-radius:50%;background:var(--c)}
.v-dev-tablet .tools i.sel{box-shadow:0 0 0 .35cqw #fff,0 0 0 .6cqw var(--accent)}
.v-dev-tablet .peer{position:absolute;left:0;top:0;animation:dev-tablet-peer 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-tablet .peer svg{width:2.6cqw;height:2.6cqw;display:block}
.v-dev-tablet .peer span{position:absolute;left:2cqw;top:2.2cqw;font-size:1.4cqw;font-weight:600;color:#fff;background:var(--secondary);border-radius:.5cqw 1.2cqw 1.2cqw 1.2cqw;padding:.3cqw 1cqw;white-space:nowrap}
.v-dev-tablet .ink{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.v-dev-tablet .ink path{fill:none;stroke:var(--accent);stroke-width:.85;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1 2;stroke-dashoffset:1}
.v-dev-tablet .ink .loop{animation:dev-tablet-draw 6s linear infinite}
.v-dev-tablet .ink .head{animation:dev-tablet-head 6s linear infinite}
.v-dev-tablet .hand{position:absolute;left:30.5cqw;top:45.8cqw;font-family:var(--font-display);font-weight:700;font-size:5.4cqw;line-height:1;color:var(--accent);white-space:nowrap;transform:rotate(-3deg);clip-path:inset(-20% 100% -20% 0);animation:dev-tablet-write 6s linear infinite}
.v-dev-tablet .gloss{position:absolute;inset:0;background:linear-gradient(118deg,rgba(255,255,255,0) 35%,rgba(255,255,255,.22) 44%,rgba(255,255,255,0) 54%);mix-blend-mode:soft-light;animation:dev-tablet-gloss 6s linear infinite}
.v-dev-tablet .layer{position:absolute;left:1.7cqw;top:1.7cqw;right:1.7cqw;bottom:1.7cqw;container-type:inline-size}
.v-dev-tablet .pen{position:absolute;left:0;top:0;width:0;height:0;animation:dev-tablet-pen 6s linear infinite}
.v-dev-tablet .lift{position:absolute;left:0;top:0;animation:dev-tablet-lift 6s linear infinite}
.v-dev-tablet .body{position:absolute;left:0;top:-1.15cqw;width:33cqw;height:2.3cqw;transform-origin:0 50%;transform:rotate(52deg);border-radius:.5cqw 1.15cqw 1.15cqw .5cqw;background:linear-gradient(180deg,#ffffff 0%,#f2f1ee 40%,#d9d7d1 85%,#c8c5bd 100%);clip-path:polygon(0 50%,3.6cqw 0,100% 0,100% 100%,3.6cqw 100%);box-shadow:inset -.4cqw 0 .4cqw rgba(0,0,0,.08)}
.v-dev-tablet .body::before{content:"";position:absolute;left:0;top:0;width:3.6cqw;height:100%;background:linear-gradient(180deg,#e9e7e2,#b9b6ae);clip-path:polygon(0 50%,100% 0,100% 100%)}
.v-dev-tablet .body::after{content:"";position:absolute;left:12cqw;top:.1cqw;width:7cqw;height:.55cqw;border-radius:.3cqw;background:rgba(0,0,0,.07)}
.v-dev-tablet .pshadow{position:absolute;left:0;top:-1cqw;width:33cqw;height:2cqw;transform-origin:0 50%;border-radius:1cqw;background:rgba(40,25,5,.35);filter:blur(.9cqw);animation:dev-tablet-pshadow 6s linear infinite}
@keyframes dev-tablet-slide{0%{transform:translate(100cqw,3cqw) rotate(10deg);animation-timing-function:cubic-bezier(.16,.84,.24,1)}22%{transform:translate(0cqw,0cqw) rotate(0deg);animation-timing-function:cubic-bezier(.45,0,.55,1)}52%{transform:translate(0cqw,-.35cqw) rotate(-.5deg);animation-timing-function:cubic-bezier(.45,0,.55,1)}84%{transform:translate(0cqw,0cqw) rotate(.25deg);animation-timing-function:cubic-bezier(.7,0,.84,0)}100%{transform:translate(-100cqw,1cqw) rotate(-8deg)}}
@keyframes dev-tablet-shadow{0%{transform:translateX(100cqw) scaleX(.9);opacity:0;animation-timing-function:cubic-bezier(.16,.84,.24,1)}22%,84%{transform:translateX(0cqw) scaleX(1);opacity:1;animation-timing-function:cubic-bezier(.7,0,.84,0)}100%{transform:translateX(-100cqw) scaleX(.9);opacity:0}}
@keyframes dev-tablet-glow{0%,100%{transform:translate(0,0);opacity:.7}50%{transform:translate(-4cqw,3cqw);opacity:1}}
@keyframes dev-tablet-gloss{0%,22%{transform:translateX(-30%)}84%{transform:translateX(18%)}100%{transform:translateX(-30%)}}
@keyframes dev-tablet-peer{0%,100%{transform:translate(22cqw,56cqw)}30%{transform:translate(26cqw,52cqw)}62%{transform:translate(20cqw,58.5cqw)}}
@keyframes dev-tablet-pen{0%,10%{transform:translate(112cqw,88cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}21%{transform:translate(61.5cqw,37cqw);animation-timing-function:cubic-bezier(.4,0,.6,1)}22%{transform:translate(59cqw,33.5cqw)}23%{transform:translate(56.35cqw,28.88cqw)}24%{transform:translate(58.13cqw,23.8cqw)}25%{transform:translate(62.6cqw,20.66cqw)}26%{transform:translate(67.93cqw,19.31cqw)}27%{transform:translate(73.43cqw,19.09cqw)}28%{transform:translate(78.87cqw,19.94cqw)}29%{transform:translate(83.65cqw,22.57cqw)}30%{transform:translate(84.96cqw,27.68cqw)}31%{transform:translate(81.83cqw,32.08cqw)}32%{transform:translate(76.9cqw,34.5cqw)}33%{transform:translate(71.51cqw,35.59cqw)}34%{transform:translate(66cqw,35.6cqw)}35%{transform:translate(60.5cqw,35.22cqw)}36%{transform:translate(55.3cqw,36.72cqw)}37%{transform:translate(51.56cqw,40.77cqw)}38%{transform:translate(47.5cqw,44.5cqw)}39%{transform:translate(51.5cqw,44.26cqw)}40.5%{transform:translate(47.5cqw,44.5cqw)}42%{transform:translate(48.6cqw,40.7cqw);animation-timing-function:cubic-bezier(.4,0,.6,1)}43.5%{transform:translate(31.3cqw,49.2cqw)}44%{transform:translate(33.1cqw,47cqw)}44.5%{transform:translate(35.2cqw,49.9cqw)}45%{transform:translate(37.3cqw,47.4cqw)}45.5%{transform:translate(39.4cqw,50.1cqw)}46%{transform:translate(41.5cqw,47cqw)}46.5%{transform:translate(43.6cqw,49.7cqw)}47%{transform:translate(45.7cqw,47.5cqw)}47.5%{transform:translate(47.8cqw,50.1cqw)}48%{transform:translate(49.9cqw,47cqw)}48.5%{transform:translate(52.0cqw,49.6cqw)}49%{transform:translate(54.1cqw,47.6cqw)}49.5%{transform:translate(56.1cqw,49.6cqw)}50%{transform:translate(57.5cqw,48cqw);animation-timing-function:cubic-bezier(.2,.8,.2,1)}57%{transform:translate(66cqw,56.5cqw);animation-timing-function:cubic-bezier(.45,0,.55,1)}70%{transform:translate(67.4cqw,55.4cqw);animation-timing-function:cubic-bezier(.45,0,.55,1)}84%,100%{transform:translate(66.4cqw,56.8cqw)}}
@keyframes dev-tablet-lift{0%,20.5%{transform:translate(-.9cqw,-1.5cqw)}22%,38%{transform:translate(0cqw,0cqw)}38.5%{transform:translate(-.4cqw,-.7cqw)}39%,42%{transform:translate(0cqw,0cqw)}42.7%{transform:translate(-.6cqw,-1cqw)}43.5%,50%{transform:translate(0cqw,0cqw)}53%,100%{transform:translate(-.9cqw,-1.5cqw)}}
@keyframes dev-tablet-pshadow{0%,20.5%{transform:translate(2.8cqw,3.4cqw) rotate(52deg);opacity:.35}22%,38%{transform:translate(.5cqw,.7cqw) rotate(52deg);opacity:.6}38.5%{transform:translate(1.4cqw,1.8cqw) rotate(52deg);opacity:.45}39%,42%{transform:translate(.5cqw,.7cqw) rotate(52deg);opacity:.6}42.7%{transform:translate(1.8cqw,2.2cqw) rotate(52deg);opacity:.45}43.5%,50%{transform:translate(.5cqw,.7cqw) rotate(52deg);opacity:.6}53%,100%{transform:translate(2.8cqw,3.4cqw) rotate(52deg);opacity:.35}}
@keyframes dev-tablet-draw{0%,22%{stroke-dashoffset:1}38%,100%{stroke-dashoffset:0}}
@keyframes dev-tablet-head{0%,39%{stroke-dashoffset:1}42%,100%{stroke-dashoffset:0}}
@keyframes dev-tablet-write{0%,43.5%{clip-path:inset(-20% 100% -20% 0)}50%,100%{clip-path:inset(-20% -2% -20% 0)}}

.v-dev-tablet .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(24.5cqw,8.5cqw) scale(.68)}
@container (max-aspect-ratio: 4/5){.v-dev-tablet .xfr{transform:translate(-17cqw,calc(37cqh - 7.6cqw)) scale(1.32)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-dev-tablet .xfr{transform:translate(-8cqw,20.5cqw) scale(1.16)}}
.v-dev-tablet .xcopy{position:absolute;left:6cqw;top:0;bottom:0;width:29cqw;display:flex;flex-direction:column;justify-content:center;gap:2.4cqw;z-index:40;color:var(--ink)}
.v-dev-tablet .xtop{display:flex;flex-direction:column;gap:1.5cqw}
.v-dev-tablet .xk{display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:dev-tablet-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-tablet .xk b{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .9cqw var(--accent);flex:none}
.v-dev-tablet .xh{font-family:var(--font-body);font-weight:700;font-size:3.6cqw;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
.v-dev-tablet .xh .w{display:inline-block;--delay:calc(.2s + var(--i) * .08s);animation:dev-tablet-xw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-tablet .xc{font:400 1.45cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 74%,transparent);--delay:.8s;animation:dev-tablet-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
.v-dev-tablet .xcopy{left:8cqw;right:8cqw;width:auto;top:8cqh;bottom:7.5cqh;justify-content:space-between;gap:0}
.v-dev-tablet .xtop{gap:3cqw}
.v-dev-tablet .xk{font-size:5.6cqw;gap:2.4cqw}
.v-dev-tablet .xk b{width:2.4cqw;height:2.4cqw}
.v-dev-tablet .xh{font-size:9.6cqw}
.v-dev-tablet .xc{font-size:5.6cqw;line-height:1.3}
.v-dev-tablet .hand{font-size:5.8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-tablet .xcopy{left:7cqw;right:7cqw;width:auto;top:6.5cqw;bottom:6cqw;justify-content:space-between;gap:0}
.v-dev-tablet .xtop{gap:1.8cqw}
.v-dev-tablet .xk{font-size:2.3cqw;gap:1.4cqw}
.v-dev-tablet .xk b{width:1.2cqw;height:1.2cqw}
.v-dev-tablet .xh{font-size:5.6cqw}
.v-dev-tablet .xc{font-size:2.5cqw}
}
@keyframes dev-tablet-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
@keyframes dev-tablet-xw{0%{opacity:0;transform:translateY(.45em);filter:blur(.08em)}8%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const devPhoneFeed: SceneSpec = {
  id: "dev-phone-feed",
  slug: "mg-dev-phone-feed",
  name: "Phone Feed Notification",
  kind: "scene",
  job: "devices",
  language: "product-ui",
  mechanic: "feed-scroll-notification-drop",
  energy: "default",
  settle: 3.4,
  colors: { ink: "#FFF7F2", accent: "#3D63FF", secondary: "#FF9A55", paper: "#F2486C" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["phone", "mobile-app", "notification"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Lumen mobile", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "Approvals land the moment they happen", maxChars: 44, role: "headline" },
    { key: "caption", label: "Caption", default: "Your team's activity, in your pocket", maxChars: 60, role: "caption" },
  ],
  html: `<div class="halo"></div>
<div class="xfr"><div class="ph">
<div class="buzz">
<div class="rim"></div>
<i class="btn b1"></i><i class="btn b2"></i><i class="btn b3"></i><i class="btn b4"></i>
<div class="glass"></div>
<div class="scr">
<div class="isl"><i></i></div>
<div class="sb"><span>10:08</span><div><svg class="s" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><svg class="w" viewBox="0 0 16 12"><path d="M1.5 4.6a9.5 9.5 0 0 1 13 0M4.3 7.4a5.6 5.6 0 0 1 7.4 0" fill="none" stroke="#141518" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="10.2" r="1.4"/></svg><svg class="bt" viewBox="0 0 26 12"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="#141518" stroke-opacity=".4"/><rect x="2.5" y="2.5" width="15" height="7" rx="1.6"/><rect x="23.5" y="4" width="2" height="4" rx="1" fill-opacity=".4"/></svg></div></div>
<div class="sbg"></div>
<div class="roll">
<div class="hdr"><div class="t"><b>Activity</b><i class="me"></i></div><div class="seg"><span class="on">All</span><span>Mentions</span><span>AI</span></div></div>
<div class="feed">
<div class="c dig"><div class="l"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg>Morning digest</div><p>3 docs changed overnight. The launch checklist is almost done.</p><div class="pr"><s></s>92%</div></div>
<div class="c"><div class="who"><i style="--a:linear-gradient(135deg,#ffb36b,#ff5f4d)">MO</i><div><b>Maya Okafor</b> edited Launch plan<br><em>4 min ago</em></div></div><div class="cov"><span>v3</span><b>Launch plan</b></div></div>
<div class="c"><div class="who"><i style="--a:linear-gradient(135deg,#7fd8c8,#2f9c8a)">JL</i><div><b>Jonah Lee</b> commented<br><em>12 min ago</em></div></div><div class="q">Can we move the demo to Thursday? Press wants an early look.</div><div class="rx"><span><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>6</span><span>Reply</span></div></div>
<div class="c"><div class="st"><div><span>Signups this week</span><b>12,480</b></div><em>+38%</em></div><div class="bars"><i style="--h:.35"></i><i style="--h:.5"></i><i style="--h:.42"></i><i style="--h:.62"></i><i style="--h:.58"></i><i style="--h:.8"></i><i class="hi" style="--h:1"></i></div></div>
<div class="c doc"><i><svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7zM14 3v5h5M9.5 13h5M9.5 16.5h5"/></svg></i><div><b>Release notes v2</b><span>Drafted by Lumen AI</span></div></div>
</div>
</div>
<div class="ntf"><span class="ic"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span><div class="tx"><div class="r1">Lumen<span>now</span></div><p>Maya approved Launch plan v3. You are clear to ship.</p></div></div>
<div class="tbar"><svg class="on" viewBox="0 0 24 24"><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/></svg><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg><svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 21h4"/></svg><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></div>
<div class="home"></div>
<div class="shine"></div>
</div>
</div>
</div></div>
<div class="xcopy"><div class="xtop"><div class="xk" data-21st-slot="kicker"><b></b>{{kicker}}</div><div class="xh" data-21st-slot="headline">{{headline|words}}</div></div><div class="xc" data-21st-slot="caption">{{caption}}</div></div>`,
  css: `
.v-dev-phone-feed{color:var(--ink);font-family:var(--font-body)}
.v-dev-phone-feed[data-backdrop="on"]{background:radial-gradient(70% 45% at 18% 8%,color-mix(in srgb,var(--secondary) 70%,#fff) 0%,transparent 70%),radial-gradient(80% 55% at 92% 96%,color-mix(in srgb,var(--paper) 55%,#333538) 0%,transparent 70%),linear-gradient(165deg,var(--secondary) 0%,var(--paper) 52%,color-mix(in srgb,var(--paper) 72%,#46474b) 100%)}
.v-dev-phone-feed[data-backdrop="off"] .halo{display:none}
.v-dev-phone-feed .scr{color:#141518}
.v-dev-phone-feed *,.v-dev-phone-feed *::before,.v-dev-phone-feed *::after{box-sizing:border-box}
.v-dev-phone-feed .halo{position:absolute;left:10cqw;top:22cqw;width:80cqw;height:80cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,240,230,.55),rgba(255,240,230,0));animation:dev-phone-feed-halo 6s ease-in-out infinite}
.v-dev-phone-feed .ph{position:absolute;left:26cqw;top:13cqw;width:48cqw;height:99cqw;animation:dev-phone-feed-float 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-phone-feed .buzz{position:absolute;inset:0;animation:dev-phone-feed-buzz 6s linear infinite}
.v-dev-phone-feed .rim{position:absolute;inset:0;border-radius:8.4cqw;background:linear-gradient(135deg,#efece8 0%,#a4a09a 22%,#dedbd6 48%,#8f8b85 78%,#d3d0cb 100%);box-shadow:0 1.5cqw 3cqw rgba(90,10,50,.30),0 5cqw 9cqw -2cqw rgba(90,10,50,.55)}
.v-dev-phone-feed .btn{position:absolute;width:.7cqw;border-radius:.4cqw;background:linear-gradient(90deg,#8d8983,#cfccc6)}
.v-dev-phone-feed .b1{left:-.45cqw;top:17cqw;height:5cqw}
.v-dev-phone-feed .b2{left:-.45cqw;top:25cqw;height:8cqw}
.v-dev-phone-feed .b3{left:-.45cqw;top:35cqw;height:8cqw}
.v-dev-phone-feed .b4{right:-.45cqw;top:28cqw;height:12cqw;background:linear-gradient(270deg,#8d8983,#cfccc6)}
.v-dev-phone-feed .glass{position:absolute;inset:.65cqw;border-radius:7.8cqw;background:#050506}
.v-dev-phone-feed .scr{position:absolute;inset:1.85cqw;border-radius:6.7cqw;overflow:hidden;background:#f3f2f7;container-type:inline-size}
.v-dev-phone-feed .isl{position:absolute;left:35cqw;top:2.6cqw;width:30cqw;height:8.6cqw;border-radius:5cqw;background:#000;z-index:5;animation:dev-phone-feed-isl 6s linear infinite}
.v-dev-phone-feed .isl i{position:absolute;right:3cqw;top:2.6cqw;width:3.4cqw;height:3.4cqw;border-radius:50%;background:radial-gradient(circle at 35% 35%,#2d3a63,#07080d 70%)}
.v-dev-phone-feed .sb{position:absolute;left:0;right:0;top:0;height:14cqw;display:flex;align-items:center;justify-content:space-between;padding:0 8cqw 0 10cqw;z-index:4;font-size:4.1cqw;font-weight:600}
.v-dev-phone-feed .sb div{display:flex;align-items:center;gap:1.4cqw}
.v-dev-phone-feed .sb svg{height:3cqw;fill:#141518}
.v-dev-phone-feed .sb .w{width:4.2cqw}
.v-dev-phone-feed .sb .s{width:4.6cqw}
.v-dev-phone-feed .sb .bt{width:6.6cqw}
.v-dev-phone-feed .roll{position:absolute;left:0;right:0;top:0;animation:dev-phone-feed-scroll 6s linear infinite}
.v-dev-phone-feed .hdr{padding:16cqw 5.5cqw 0}
.v-dev-phone-feed .sbg{position:absolute;left:0;right:0;top:0;height:15cqw;z-index:3;background:linear-gradient(180deg,rgba(243,242,247,.96) 70%,rgba(243,242,247,0));backdrop-filter:blur(2cqw)}
.v-dev-phone-feed .hdr .t{display:flex;align-items:center;justify-content:space-between}
.v-dev-phone-feed .hdr b{font-size:8.4cqw;font-weight:700;letter-spacing:-.03em}
.v-dev-phone-feed .hdr .me{width:8.6cqw;height:8.6cqw;border-radius:50%;background:linear-gradient(135deg,#ffcf8a,#ff6a4d);box-shadow:0 0 0 .7cqw #fff}
.v-dev-phone-feed .seg{display:flex;gap:2cqw;margin-top:3.4cqw}
.v-dev-phone-feed .seg span{font-size:3.4cqw;font-weight:500;padding:1.4cqw 3.6cqw;border-radius:5cqw;background:#e5e6eb;color:#696a6e}
.v-dev-phone-feed .seg .on{background:#141518;color:#fff}
.v-dev-phone-feed .feed{margin:4.6cqw 5cqw 0;display:flex;flex-direction:column;gap:3.2cqw}
.v-dev-phone-feed .c{background:#fff;border-radius:5.4cqw;padding:4.4cqw;box-shadow:0 .4cqw 1.4cqw rgba(30,32,35,.06)}
.v-dev-phone-feed .dig{background:radial-gradient(90% 120% at 100% 0%,rgba(127,211,255,.4),rgba(127,211,255,0) 60%),linear-gradient(150deg,color-mix(in srgb,var(--accent) 20%,#101114),color-mix(in srgb,var(--accent) 38%,#16171a));color:#fff}
.v-dev-phone-feed .dig .l{display:flex;align-items:center;gap:2cqw;font-size:3.3cqw;font-weight:600;color:color-mix(in srgb,var(--accent) 30%,#fff)}
.v-dev-phone-feed .dig .l svg{width:4.4cqw;height:4.4cqw;fill:#ffb38a}
.v-dev-phone-feed .dig p{margin:2.4cqw 0 0;font-size:4.5cqw;line-height:1.32;font-weight:500;letter-spacing:-.01em}
.v-dev-phone-feed .dig .pr{display:flex;align-items:center;gap:2.4cqw;margin-top:3.6cqw;font-size:3cqw;color:#cbcdd1}
.v-dev-phone-feed .dig .pr s{flex:1;height:1.6cqw;border-radius:1cqw;background:rgba(255,255,255,.16);position:relative;overflow:hidden}
.v-dev-phone-feed .dig .pr s::after{content:"";position:absolute;left:0;top:0;bottom:0;width:92%;border-radius:1cqw;background:linear-gradient(90deg,#ffb38a,#ff5f7e)}
.v-dev-phone-feed .who{display:flex;align-items:center;gap:2.6cqw}
.v-dev-phone-feed .who i{width:8.6cqw;height:8.6cqw;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:3.2cqw;font-weight:700;color:#fff;background:var(--a)}
.v-dev-phone-feed .who div{flex:1;min-width:0;font-size:3.5cqw;line-height:1.3;color:#696a6e}
.v-dev-phone-feed .who b{color:#141518;font-weight:600}
.v-dev-phone-feed .who em{font-style:normal;font-size:3cqw;color:#9fa0a4}
.v-dev-phone-feed .cov{margin-top:3.4cqw;height:36cqw;border-radius:3.6cqw;position:relative;overflow:hidden;background:radial-gradient(50% 70% at 30% 40%,#ffd36e,rgba(255,211,110,0) 70%),radial-gradient(60% 80% at 80% 70%,var(--accent),color-mix(in srgb,var(--accent) 0%,transparent) 70%),linear-gradient(135deg,#ffe2c4,#d6d7db)}
.v-dev-phone-feed .cov b{position:absolute;left:4cqw;bottom:3.6cqw;font-family:var(--font-display);font-weight:400;font-size:7.4cqw;line-height:1;color:#191a1d;letter-spacing:-.01em}
.v-dev-phone-feed .cov span{position:absolute;right:4cqw;top:3.6cqw;font-size:2.8cqw;font-weight:600;background:rgba(255,255,255,.8);border-radius:3cqw;padding:1cqw 2.4cqw}
.v-dev-phone-feed .q{margin-top:3cqw;padding:3.2cqw 3.6cqw;border-radius:1.2cqw 4cqw 4cqw 4cqw;background:#eff1f5;font-size:3.9cqw;line-height:1.35;color:#292a2d}
.v-dev-phone-feed .rx{display:flex;gap:2cqw;margin-top:2.8cqw}
.v-dev-phone-feed .rx span{display:flex;align-items:center;gap:1.2cqw;font-size:3cqw;font-weight:600;color:#696a6e;background:#eff1f5;border-radius:4cqw;padding:1.2cqw 2.8cqw}
.v-dev-phone-feed .rx svg{width:3.4cqw;height:3.4cqw;fill:none;stroke:var(--paper);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.v-dev-phone-feed .st{display:flex;align-items:flex-end;justify-content:space-between}
.v-dev-phone-feed .st span{display:block;font-size:3.3cqw;color:#898a8e}
.v-dev-phone-feed .st b{display:block;font-size:8cqw;font-weight:700;letter-spacing:-.03em;margin-top:.6cqw}
.v-dev-phone-feed .st em{font-style:normal;font-size:3cqw;font-weight:600;color:#14935e;background:#e1f6eb;border-radius:3cqw;padding:1cqw 2.4cqw}
.v-dev-phone-feed .bars{display:flex;align-items:flex-end;gap:2cqw;height:18cqw;margin-top:3.6cqw}
.v-dev-phone-feed .bars i{flex:1;height:calc(var(--h) * 100%);border-radius:1.4cqw 1.4cqw .6cqw .6cqw;background:#e8eaee}
.v-dev-phone-feed .bars i.hi{background:linear-gradient(180deg,var(--secondary),var(--paper))}
.v-dev-phone-feed .doc{display:flex;align-items:center;gap:3cqw}
.v-dev-phone-feed .doc i{width:11cqw;height:11cqw;border-radius:3cqw;background:color-mix(in srgb,var(--accent) 14%,#fff);display:flex;align-items:center;justify-content:center;flex:none}
.v-dev-phone-feed .doc i svg{width:5.4cqw;height:5.4cqw;fill:none;stroke:var(--accent);stroke-width:2;stroke-linejoin:round}
.v-dev-phone-feed .doc b{display:block;font-size:3.9cqw;font-weight:600}
.v-dev-phone-feed .doc span{display:block;font-size:3.2cqw;color:#898a8e;margin-top:.6cqw}
.v-dev-phone-feed .tbar{position:absolute;left:0;right:0;bottom:0;height:20cqw;background:rgba(255,255,255,.86);backdrop-filter:blur(3cqw);box-shadow:0 -1px 0 rgba(0,0,0,.05);display:flex;justify-content:space-around;padding:3.6cqw 6cqw 0;z-index:4}
.v-dev-phone-feed .tbar svg{width:6cqw;height:6cqw;fill:none;stroke:#9fa0a4;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.v-dev-phone-feed .tbar svg.on{stroke:#141518}
.v-dev-phone-feed .home{position:absolute;left:33cqw;right:33cqw;bottom:2.2cqw;height:1.3cqw;border-radius:1cqw;background:#141518;z-index:5}
.v-dev-phone-feed .ntf{position:absolute;left:3.6cqw;right:3.6cqw;top:12.6cqw;z-index:4;border-radius:7cqw;padding:3.8cqw 4cqw;display:grid;grid-template-columns:10.5cqw 1fr;column-gap:3.2cqw;align-items:center;background:rgba(250,249,252,.9);backdrop-filter:blur(4cqw) saturate(1.6);box-shadow:0 0 0 1px rgba(255,255,255,.6) inset,0 3cqw 7cqw -1cqw rgba(27,28,31,.35),0 .6cqw 1.5cqw rgba(27,28,31,.12);transform-origin:50% 0;animation:dev-phone-feed-ntf 6s linear infinite}
.v-dev-phone-feed .ntf .ic{width:10.5cqw;height:10.5cqw;border-radius:2.8cqw;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 55%,#fff));display:flex;align-items:center;justify-content:center}
.v-dev-phone-feed .ntf .ic svg{width:6cqw;height:6cqw;fill:#fff}
.v-dev-phone-feed .ntf .tx{min-width:0}
.v-dev-phone-feed .ntf .r1{display:flex;justify-content:space-between;font-size:3.5cqw;font-weight:700}
.v-dev-phone-feed .ntf .r1 span{font-weight:400;color:#898a8e;font-size:3.1cqw}
.v-dev-phone-feed .ntf p{margin:.6cqw 0 0;font-size:3.5cqw;line-height:1.3;color:#292a2d}
.v-dev-phone-feed .shine{position:absolute;inset:0;border-radius:6.7cqw;background:linear-gradient(125deg,rgba(255,255,255,0) 30%,rgba(255,255,255,.18) 40%,rgba(255,255,255,0) 52%);z-index:6;animation:dev-phone-feed-shine 6s cubic-bezier(.45,0,.55,1) infinite}
@keyframes dev-phone-feed-halo{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.08);opacity:1}}
@keyframes dev-phone-feed-float{0%,100%{transform:perspective(220cqw) translateY(1.2cqw) rotateY(-12deg) rotateX(5deg)}50%{transform:perspective(220cqw) translateY(-1.2cqw) rotateY(-4deg) rotateX(3deg)}}
@keyframes dev-phone-feed-shine{0%,100%{transform:translateX(-14%)}50%{transform:translateX(10%)}}
@keyframes dev-phone-feed-buzz{0%,39%{transform:rotate(0deg)}40%{transform:rotate(.9deg)}41%{transform:rotate(-.9deg)}42%{transform:rotate(.6deg)}43%{transform:rotate(-.4deg)}44%,100%{transform:rotate(0deg)}}
@keyframes dev-phone-feed-scroll{0%,9%{transform:translateY(0cqw);animation-timing-function:cubic-bezier(.15,.75,.25,1)}26%,56%{transform:translateY(-38cqw);animation-timing-function:cubic-bezier(.15,.75,.25,1)}72%,86%{transform:translateY(-82cqw);animation-timing-function:cubic-bezier(.65,0,.35,1)}97%,100%{transform:translateY(0cqw)}}
@keyframes dev-phone-feed-ntf{0%,36%{transform:translateY(-34cqw) scale(.9);opacity:0;animation-timing-function:cubic-bezier(.2,.9,.25,1.15)}45%{transform:translateY(0cqw) scale(1);opacity:1}76%{transform:translateY(0cqw) scale(1);opacity:1;animation-timing-function:cubic-bezier(.6,0,.8,.4)}84%,100%{transform:translateY(-34cqw) scale(.92);opacity:0}}
@keyframes dev-phone-feed-isl{0%,35%{transform:scale(1,1)}38%{transform:scale(1.14,1.06)}43%,100%{transform:scale(1,1)}}

.v-dev-phone-feed .xfr{position:absolute;left:0;top:0;width:100cqw;height:125cqw;transform-origin:0 0;transform:translate(48cqw,.8cqw) scale(.44)}
@container (max-aspect-ratio: 4/5){.v-dev-phone-feed .xfr{transform:translate(9cqw,calc(36cqh - 10.7cqw)) scale(.82)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-dev-phone-feed .xfr{transform:translate(37cqw,3.4cqw) scale(.74)}}
.v-dev-phone-feed .xcopy{position:absolute;left:6cqw;top:0;bottom:0;width:36cqw;display:flex;flex-direction:column;justify-content:center;gap:2.4cqw;z-index:40;color:var(--ink)}
.v-dev-phone-feed .xtop{display:flex;flex-direction:column;gap:1.5cqw}
.v-dev-phone-feed .xk{display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:dev-phone-feed-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-phone-feed .xk b{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .9cqw var(--accent);flex:none}
.v-dev-phone-feed .xh{font-family:var(--font-display);font-weight:700;font-size:4.4cqw;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
.v-dev-phone-feed .xh .w{display:inline-block;--delay:calc(.2s + var(--i) * .08s);animation:dev-phone-feed-xw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-phone-feed .xc{font:400 1.45cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 74%,transparent);--delay:.8s;animation:dev-phone-feed-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
.v-dev-phone-feed .xcopy{left:8cqw;right:8cqw;width:auto;top:8cqh;bottom:7.5cqh;justify-content:space-between;gap:0}
.v-dev-phone-feed .xtop{gap:3cqw}
.v-dev-phone-feed .xk{font-size:5.6cqw;gap:2.4cqw}
.v-dev-phone-feed .xk b{width:2.4cqw;height:2.4cqw}
.v-dev-phone-feed .xh{font-size:10.4cqw}
.v-dev-phone-feed .xc{font-size:5.6cqw;line-height:1.3}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-phone-feed .xcopy{left:7cqw;right:7cqw;width:auto;top:6.5cqw;bottom:6cqw;justify-content:space-between;gap:0}
.v-dev-phone-feed .xtop{gap:1.8cqw}
.v-dev-phone-feed .xk{font-size:2.3cqw;gap:1.4cqw}
.v-dev-phone-feed .xk b{width:1.2cqw;height:1.2cqw}
.v-dev-phone-feed .xh{font-size:6cqw}
.v-dev-phone-feed .xc{font-size:2.5cqw}
}
@keyframes dev-phone-feed-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
@keyframes dev-phone-feed-xw{0%{opacity:0;transform:translateY(.45em);filter:blur(.08em)}8%,100%{opacity:1;transform:none;filter:blur(0)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-phone-feed .xcopy{left:7cqw;right:auto;width:42cqw;top:0;bottom:0;justify-content:center;gap:4cqw}
.v-dev-phone-feed .xh{font-size:5.8cqw}
}
`,
};

export const devHandoff: SceneSpec = {
  id: "dev-handoff",
  slug: "mg-dev-handoff",
  name: "Phone To Laptop Handoff",
  kind: "scene",
  job: "devices",
  language: "product-ui",
  mechanic: "card-flies-between-devices",
  energy: "default",
  settle: 4.2,
  colors: { ink: "#EEF0FF", accent: "#6F8BFF", secondary: "#94969A", paper: "#05060C" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["handoff", "multi-device", "continuity"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Works everywhere", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "Start on your phone, finish on your laptop", maxChars: 48, role: "headline" },
    { key: "caption", label: "Caption", default: "Drafts follow you across every device", maxChars: 60, role: "caption" },
  ],
  html: `<div class="xfr"><div class="drift">
<div class="floor"></div>
<div class="lap">
<div class="ls">
<div class="lsd"><span class="m"><svg viewBox="0 0 24 24"><path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"/></svg></span><span class="on"><i style="--c:#6f8bff"></i>Launch</span><span><i style="--c:#46e3a0"></i>Research</span><span><i style="--c:#ff9a6b"></i>Brand</span><span><i style="--c:#678eff"></i>Hiring</span></div>
<div class="lh"><b>Launch</b><span>12 docs</span><em>New doc</em></div>
<div class="lc a"><i style="--g:linear-gradient(135deg,#2c3a8f,#6f8bff)"></i><b>Pricing FAQ</b><span>2h ago</span></div>
<div class="lc b"><i style="--g:linear-gradient(135deg,#333437,#94969a)"></i><b>Press kit</b><span>Yesterday</span></div>
<div class="slot"></div>
<div class="cm"><div><i style="--a:linear-gradient(135deg,#ffcf8a,#ff6a4d)"></i><p><s></s><s></s></p></div><div><i style="--a:linear-gradient(135deg,#9fd8ff,#5b6cff)"></i><p><s></s><s></s></p></div><div><i style="--a:linear-gradient(135deg,#b6f2d2,#32b98a)"></i><p><s></s><s></s></p></div></div>
<div class="lact"><i></i>Maya and 2 others are here</div>
<div class="glare"></div>
</div>
<div class="notch"></div>
</div>
<div class="deck"><i></i></div>
<div class="ph">
<div class="pg"></div>
<div class="ps">
<div class="pi"></div>
<div class="pt">10:08</div>
<h6>Docs</h6>
<div class="hole"></div>
<div class="pr r1"><i style="--g:linear-gradient(135deg,#2c3a8f,#6f8bff)"></i><div><b>Pricing FAQ</b><span>2h ago</span></div></div>
<div class="pr r2"><i style="--g:linear-gradient(135deg,#333437,#94969a)"></i><div><b>Press kit</b><span>Yesterday</span></div></div>
<div class="pr r3"><i style="--g:linear-gradient(135deg,#21544a,#46e3a0)"></i><div><b>Checklist</b><span>Mon</span></div></div>
<div class="phb"></div>
</div>
</div>
<svg class="trail" viewBox="0 0 100 56.25" preserveAspectRatio="none"><path class="gl" pathLength="1" d="M18.2 25C28 10 54 6 69.6 24"/><path class="ln" pathLength="1" d="M18.2 25C28 10 54 6 69.6 24"/></svg>
<div class="ripple"></div>
<div class="fly">
<div class="art"><i></i><em>Draft</em></div>
<div class="bd"><b>Launch brief</b><div class="mt"><i></i><i></i><span>Edited on phone · now</span></div></div>
</div>
<div class="chip"><span class="dot"></span>Continue on laptop<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
</div></div>
<div class="xcopy"><div class="xtop"><div class="xk" data-21st-slot="kicker"><b></b>{{kicker}}</div><div class="xh" data-21st-slot="headline">{{headline|words}}</div></div><div class="xc" data-21st-slot="caption">{{caption}}</div></div>`,
  css: `
.v-dev-handoff{color:var(--ink);font-family:var(--font-body)}
.v-dev-handoff[data-backdrop="on"]{background:radial-gradient(55% 70% at 66% 38%,color-mix(in srgb,var(--accent) 30%,var(--paper)) 0%,transparent 62%),radial-gradient(40% 55% at 16% 72%,color-mix(in srgb,var(--secondary) 26%,var(--paper)) 0%,transparent 65%),var(--paper)}
.v-dev-handoff[data-backdrop="off"] .floor{display:none}
.v-dev-handoff *,.v-dev-handoff *::before,.v-dev-handoff *::after{box-sizing:border-box}
.v-dev-handoff .drift{position:absolute;inset:0;transform-origin:50% 45%;animation:dev-handoff-drift 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-handoff .floor{position:absolute;left:0;right:0;top:44cqw;bottom:0;background:linear-gradient(180deg,color-mix(in srgb,var(--accent) 10%,transparent),rgba(120,140,255,0) 70%)}
.v-dev-handoff .lap{position:absolute;left:37cqw;top:6.5cqw;width:56cqw;height:36cqw;border-radius:1.8cqw 1.8cqw .6cqw .6cqw;background:#0b0c10;box-shadow:inset 0 0 0 .2cqw #3c4050,inset 0 0 0 .32cqw #0b0c10,0 0 8cqw color-mix(in srgb,var(--accent) 22%,transparent),0 2cqw 5cqw rgba(0,0,0,.6)}
.v-dev-handoff .lap .notch{position:absolute;left:50%;top:1.15cqw;width:6cqw;height:1.05cqw;margin-left:-3cqw;border-radius:0 0 .6cqw .6cqw;background:#0b0c10;z-index:3}
.v-dev-handoff .ls{position:absolute;left:1.2cqw;right:1.2cqw;top:1.2cqw;bottom:1.6cqw;border-radius:.6cqw;overflow:hidden;container-type:inline-size;background:#0f111a;color:#e6e8f5}
.v-dev-handoff .deck{position:absolute;left:34cqw;top:42.4cqw;width:62cqw;height:1.9cqw;border-radius:.3cqw .3cqw 1.6cqw 1.6cqw/.3cqw .3cqw 1cqw 1cqw;background:linear-gradient(180deg,#6b7080 0%,#353844 45%,#16181e 100%);box-shadow:0 1.6cqw 3cqw rgba(0,0,0,.7)}
.v-dev-handoff .deck i{position:absolute;left:50%;top:0;width:9cqw;height:.7cqw;margin-left:-4.5cqw;border-radius:0 0 .7cqw .7cqw;background:linear-gradient(180deg,#1e2027,#3b3f4c)}
.v-dev-handoff .lsd{position:absolute;left:0;top:0;bottom:0;width:17cqw;background:#0b0d14;border-right:1px solid rgba(255,255,255,.06);padding:4cqw 2cqw;display:flex;flex-direction:column;gap:1.2cqw}
.v-dev-handoff .lsd .m{width:5cqw;height:5cqw;border-radius:1.5cqw;background:linear-gradient(135deg,var(--accent),var(--secondary));margin-bottom:2cqw;display:flex;align-items:center;justify-content:center}
.v-dev-handoff .lsd .m svg{width:3cqw;height:3cqw;fill:#fff}
.v-dev-handoff .lsd span{height:3.4cqw;border-radius:1cqw;background:rgba(255,255,255,.05);display:flex;align-items:center;gap:1cqw;padding:0 1.2cqw;font-size:1.9cqw;color:#8d93b3}
.v-dev-handoff .lsd span.on{background:color-mix(in srgb,var(--accent) 16%,transparent);color:#fff}
.v-dev-handoff .lsd span i{width:1.6cqw;height:1.6cqw;border-radius:.5cqw;background:var(--c)}
.v-dev-handoff .lh{position:absolute;left:20cqw;right:3cqw;top:3.6cqw;display:flex;align-items:center;gap:1.4cqw}
.v-dev-handoff .lh b{font-size:3.4cqw;font-weight:600;letter-spacing:-.02em}
.v-dev-handoff .lh span{font-size:1.8cqw;color:#8d93b3}
.v-dev-handoff .lh em{margin-left:auto;font-style:normal;font-size:1.8cqw;font-weight:600;background:#eef0ff;color:#0f111a;border-radius:1.2cqw;padding:.7cqw 1.8cqw}
.v-dev-handoff .lc{position:absolute;left:20cqw;width:15cqw;border-radius:1.6cqw;background:#161927;border:1px solid rgba(255,255,255,.06);padding:1.4cqw}
.v-dev-handoff .lc i{display:block;height:8cqw;border-radius:1cqw;background:var(--g)}
.v-dev-handoff .lc b{display:block;font-size:1.8cqw;font-weight:500;margin-top:1.2cqw}
.v-dev-handoff .lc span{display:block;font-size:1.4cqw;color:#7b81a3;margin-top:.4cqw}
.v-dev-handoff .lc.a{top:14cqw}
.v-dev-handoff .lc.b{top:37cqw}
.v-dev-handoff .slot{position:absolute;left:38cqw;top:14cqw;width:41.04cqw;height:32.84cqw;border-radius:2.9cqw;border:.3cqw dashed color-mix(in srgb,var(--accent) 70%,transparent);background:color-mix(in srgb,var(--accent) 8%,transparent);opacity:0;animation:dev-handoff-slot 6s linear infinite}
.v-dev-handoff .cm{position:absolute;left:82cqw;right:3cqw;top:14cqw;display:flex;flex-direction:column;gap:1.4cqw}
.v-dev-handoff .cm div{border-radius:1.4cqw;background:#161927;padding:1.2cqw;display:flex;gap:1cqw}
.v-dev-handoff .cm i{width:2.6cqw;height:2.6cqw;border-radius:50%;flex:none;background:var(--a)}
.v-dev-handoff .cm s{display:block;height:1cqw;border-radius:.5cqw;background:rgba(255,255,255,.12);margin-top:.4cqw}
.v-dev-handoff .cm s+s{width:60%}
.v-dev-handoff .cm p{margin:0;flex:1}
.v-dev-handoff .lact{position:absolute;left:38cqw;right:3cqw;top:50cqw;display:flex;align-items:center;gap:1.2cqw;font-size:1.8cqw;color:#8d93b3}
.v-dev-handoff .lact i{width:1.2cqw;height:1.2cqw;border-radius:50%;background:#46e3a0;box-shadow:0 0 1.2cqw #46e3a0;animation:dev-handoff-pulse 1.5s ease-in-out infinite}
.v-dev-handoff .glare{position:absolute;inset:0;background:linear-gradient(115deg,rgba(255,255,255,0) 40%,rgba(255,255,255,.06) 48%,rgba(255,255,255,0) 58%);pointer-events:none}
.v-dev-handoff .ph{position:absolute;left:10cqw;top:14cqw;width:16.4cqw;height:33.6cqw;border-radius:3cqw;background:linear-gradient(135deg,#6a6f80,#2a2d38 30%,#5d6272 60%,#22252e);box-shadow:0 0 0 .1cqw rgba(255,255,255,.12) inset,0 2cqw 4cqw rgba(0,0,0,.65),0 0 6cqw color-mix(in srgb,var(--secondary) 18%,transparent)}
.v-dev-handoff .pg{position:absolute;inset:.3cqw;border-radius:2.75cqw;background:#050507}
.v-dev-handoff .ps{position:absolute;inset:.9cqw;border-radius:2.2cqw;overflow:hidden;container-type:inline-size;background:#0f111a;color:#e6e8f5}
.v-dev-handoff .pi{position:absolute;left:35cqw;top:3cqw;width:30cqw;height:8.4cqw;border-radius:5cqw;background:#000}
.v-dev-handoff .pt{position:absolute;left:9cqw;top:3.8cqw;font-size:5cqw;font-weight:600}
.v-dev-handoff .ph h6{position:absolute;left:6cqw;top:17cqw;margin:0;font-size:9.6cqw;font-weight:700;letter-spacing:-.03em;color:#fff}
.v-dev-handoff .ph .hole{position:absolute;left:6cqw;top:34cqw;width:88cqw;height:70.4cqw;border-radius:7cqw;border:.6cqw dashed color-mix(in srgb,var(--accent) 45%,transparent);opacity:0;animation:dev-handoff-hole 6s linear infinite}
.v-dev-handoff .pr{position:absolute;left:6cqw;right:6cqw;height:15cqw;border-radius:4cqw;background:#161927;display:flex;align-items:center;gap:3cqw;padding:0 4cqw}
.v-dev-handoff .pr i{width:8cqw;height:8cqw;border-radius:2.4cqw;background:var(--g);flex:none}
.v-dev-handoff .pr b{display:block;font-size:4.4cqw;font-weight:500}
.v-dev-handoff .pr span{display:block;font-size:3.4cqw;color:#7b81a3;margin-top:.6cqw}
.v-dev-handoff .pr.r1{top:110cqw}
.v-dev-handoff .pr.r2{top:128cqw}
.v-dev-handoff .pr.r3{top:146cqw}
.v-dev-handoff .phb{position:absolute;left:32cqw;right:32cqw;bottom:2.4cqw;height:1.3cqw;border-radius:1cqw;background:rgba(255,255,255,.75)}
.v-dev-handoff .trail{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.v-dev-handoff .trail path{fill:none;stroke-linecap:round;stroke-dasharray:1 2;stroke-dashoffset:1;animation:dev-handoff-trail 6s linear infinite}
.v-dev-handoff .trail .gl{stroke:color-mix(in srgb,var(--accent) 35%,transparent);stroke-width:1.1;filter:blur(.5cqw)}
.v-dev-handoff .trail .ln{stroke:color-mix(in srgb,var(--accent) 55%,#fff);stroke-width:.22}
.v-dev-handoff .fly{position:absolute;left:58.6cqw;top:15.2cqw;width:22cqw;height:17.6cqw;container-type:inline-size;border-radius:1.55cqw;background:#f6f4ef;color:#131417;box-shadow:0 0 0 1px rgba(255,255,255,.4),0 1.4cqw 3.4cqw rgba(0,0,0,.45);overflow:hidden;transform-origin:50% 50%;animation:dev-handoff-fly 6s linear infinite}
.v-dev-handoff .fly .art{height:52cqw;position:relative;overflow:hidden;background:radial-gradient(60% 90% at 22% 30%,#ffcf7a,rgba(255,207,122,0) 70%),radial-gradient(70% 100% at 85% 80%,var(--accent),color-mix(in srgb,var(--accent) 0%,transparent) 70%),linear-gradient(135deg,#ffe2c4,#e3e6eb)}
.v-dev-handoff .fly .art i{position:absolute;left:58%;top:20%;width:24cqw;height:24cqw;border-radius:50%;background:rgba(255,255,255,.55);box-shadow:0 0 6cqw rgba(255,255,255,.7)}
.v-dev-handoff .fly .art em{position:absolute;left:6cqw;top:6cqw;font-style:normal;font-size:5cqw;font-weight:600;background:rgba(255,255,255,.85);border-radius:4cqw;padding:1.2cqw 3cqw}
.v-dev-handoff .fly .bd{padding:4.6cqw 6cqw}
.v-dev-handoff .fly b{display:block;font-family:var(--font-display);font-weight:400;font-size:11cqw;line-height:1;letter-spacing:-.01em}
.v-dev-handoff .fly .mt{display:flex;align-items:center;gap:2.4cqw;margin-top:3.4cqw;font-size:5cqw;color:#6f6a78}
.v-dev-handoff .fly .mt i{width:6.4cqw;height:6.4cqw;border-radius:50%;border:.8cqw solid #f6f4ef;margin-right:-4.4cqw;background:linear-gradient(135deg,#ffcf8a,#ff6a4d)}
.v-dev-handoff .fly .mt i+i{background:linear-gradient(135deg,#9fd8ff,#5b6cff)}
.v-dev-handoff .fly .mt span{margin-left:4.4cqw}
.v-dev-handoff .ripple{position:absolute;left:58.6cqw;top:15.2cqw;width:22cqw;height:17.6cqw;border-radius:1.8cqw;box-shadow:0 0 0 .35cqw color-mix(in srgb,var(--accent) 90%,transparent),0 0 3cqw color-mix(in srgb,var(--accent) 80%,transparent);opacity:0;animation:dev-handoff-ripple 6s linear infinite}
.v-dev-handoff .chip{position:absolute;left:41.5cqw;top:48.2cqw;display:flex;align-items:center;gap:1.1cqw;padding:.9cqw 1.8cqw .9cqw 1.2cqw;border-radius:3cqw;background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14);backdrop-filter:blur(1cqw);font-size:1.55cqw;color:#dfe4ff;opacity:0;animation:dev-handoff-chip 6s linear infinite}
.v-dev-handoff .chip svg{width:1.8cqw;height:1.8cqw;fill:none;stroke:color-mix(in srgb,var(--accent) 55%,#fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.v-dev-handoff .chip .dot{width:.8cqw;height:.8cqw;border-radius:50%;background:#46e3a0;box-shadow:0 0 1cqw #46e3a0}
@keyframes dev-handoff-drift{0%,100%{transform:scale(1) translateX(0cqw)}50%{transform:scale(1.03) translateX(-.6cqw)}}
@keyframes dev-handoff-pulse{0%,100%{opacity:.55;transform:scale(.85)}50%{opacity:1;transform:scale(1.1)}}
@keyframes dev-handoff-fly{0%,8%{transform:translate(-51.4cqw,1cqw) scale(.584) rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(.3,0,.3,1)}14%,21%{transform:translate(-51.4cqw,.4cqw) scale(.61) rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(.4,0,.6,1)}24%{transform:translate(-51.4cqw,1cqw) scale(.6) rotate(0deg);opacity:1}25%{transform:translate(-51.32cqw,.88cqw) scale(.6) rotate(-.05deg);opacity:1}26%{transform:translate(-51.05cqw,.48cqw) scale(.601) rotate(-.2deg);opacity:1}27%{transform:translate(-50.52cqw,-.26cqw) scale(.608) rotate(-.49deg);opacity:1}28%{transform:translate(-49.61cqw,-1.41cqw) scale(.622) rotate(-.95deg);opacity:1}29%{transform:translate(-48.14cqw,-3.02cqw) scale(.645) rotate(-1.63deg);opacity:1}30%{transform:translate(-45.76cqw,-5.15cqw) scale(.677) rotate(-2.58deg);opacity:1}31%{transform:translate(-41.96cqw,-7.72cqw) scale(.726) rotate(-3.81deg);opacity:1}32%{transform:translate(-36.1cqw,-10.3cqw) scale(.789) rotate(-5.14deg);opacity:1}33%{transform:translate(-28.18cqw,-11.85cqw) scale(.857) rotate(-5.96deg);opacity:1}34%{transform:translate(-20cqw,-11.46cqw) scale(.911) rotate(-5.69deg);opacity:1}35%{transform:translate(-13.54cqw,-9.67cqw) scale(.944) rotate(-4.67deg);opacity:1}36%{transform:translate(-9.02cqw,-7.5cqw) scale(.964) rotate(-3.51deg);opacity:1}37%{transform:translate(-5.95cqw,-5.5cqw) scale(.976) rotate(-2.5deg);opacity:1}38%{transform:translate(-3.84cqw,-3.83cqw) scale(.985) rotate(-1.7deg);opacity:1}39%{transform:translate(-2.39cqw,-2.51cqw) scale(.99) rotate(-1.1deg);opacity:1}40%{transform:translate(-1.39cqw,-1.52cqw) scale(.994) rotate(-.65deg);opacity:1}41%{transform:translate(-.72cqw,-.81cqw) scale(.997) rotate(-.34deg);opacity:1}42%{transform:translate(-.3cqw,-.34cqw) scale(.999) rotate(-.14deg);opacity:1}43%{transform:translate(-.07cqw,-.08cqw) scale(1) rotate(-.03deg);opacity:1}44%{transform:translate(0cqw,0cqw) scale(1) rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(.3,0,.3,1)}46%{transform:translate(0cqw,0cqw) scale(1.025) rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(.3,0,.3,1)}49%,85%{transform:translate(0cqw,0cqw) scale(1) rotate(0deg);opacity:1;animation-timing-function:cubic-bezier(.4,0,.6,1)}89%{transform:translate(0cqw,0cqw) scale(.94) rotate(0deg);opacity:0}89.5%{transform:translate(-51.4cqw,1cqw) scale(.584) rotate(0deg);opacity:0;animation-timing-function:cubic-bezier(.2,.8,.2,1)}97%,100%{transform:translate(-51.4cqw,1cqw) scale(.584) rotate(0deg);opacity:1}}
@keyframes dev-handoff-trail{0%,24%{stroke-dashoffset:1;opacity:1;animation-timing-function:cubic-bezier(.6,0,.3,1)}44%{stroke-dashoffset:0;opacity:1}58%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes dev-handoff-slot{0%,24%{opacity:0;transform:scale(.96)}30%,42%{opacity:1;transform:scale(1)}46%,100%{opacity:0;transform:scale(1.02)}}
@keyframes dev-handoff-hole{0%,23%{opacity:0}28%,88%{opacity:1}92%,100%{opacity:0}}
@keyframes dev-handoff-ripple{0%,43%{opacity:0;transform:scale(1)}45%{opacity:1;transform:scale(1)}56%,100%{opacity:0;transform:scale(1.2)}}
@keyframes dev-handoff-chip{0%,22%{opacity:0;transform:translateY(1cqw)}28%,80%{opacity:1;transform:translateY(0cqw)}86%,100%{opacity:0;transform:translateY(0cqw)}}

.v-dev-handoff .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(31.5cqw,9cqw) scale(.68)}
@container (max-aspect-ratio: 4/5){.v-dev-handoff .xfr{transform:translate(-2cqw,calc(42cqh - 7cqw)) scale(.98)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-dev-handoff .xfr{transform:translate(-4cqw,25cqw) scale(1)}}
.v-dev-handoff .xcopy{position:absolute;left:6cqw;top:0;bottom:0;width:29cqw;display:flex;flex-direction:column;justify-content:center;gap:2.4cqw;z-index:40;color:var(--ink)}
.v-dev-handoff .xtop{display:flex;flex-direction:column;gap:1.5cqw}
.v-dev-handoff .xk{display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:dev-handoff-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-handoff .xk b{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .9cqw var(--accent);flex:none}
.v-dev-handoff .xh{font-family:var(--font-display);font-weight:400;font-size:4.6cqw;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
.v-dev-handoff .xh .w{display:inline-block;--delay:calc(.2s + var(--i) * .08s);animation:dev-handoff-xw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-handoff .xc{font:400 1.45cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 74%,transparent);--delay:.8s;animation:dev-handoff-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
.v-dev-handoff .xcopy{left:8cqw;right:8cqw;width:auto;top:8cqh;bottom:7.5cqh;justify-content:space-between;gap:0}
.v-dev-handoff .xtop{gap:3cqw}
.v-dev-handoff .xk{font-size:5.6cqw;gap:2.4cqw}
.v-dev-handoff .xk b{width:2.4cqw;height:2.4cqw}
.v-dev-handoff .xh{font-size:12cqw}
.v-dev-handoff .xc{font-size:5.6cqw;line-height:1.3}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-handoff .xcopy{left:7cqw;right:7cqw;width:auto;top:6.5cqw;bottom:6cqw;justify-content:space-between;gap:0}
.v-dev-handoff .xtop{gap:1.8cqw}
.v-dev-handoff .xk{font-size:2.3cqw;gap:1.4cqw}
.v-dev-handoff .xk b{width:1.2cqw;height:1.2cqw}
.v-dev-handoff .xh{font-size:7cqw}
.v-dev-handoff .xc{font-size:2.5cqw}
}
@keyframes dev-handoff-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
@keyframes dev-handoff-xw{0%{opacity:0;transform:translateY(.45em);filter:blur(.08em)}8%,100%{opacity:1;transform:none;filter:blur(0)}}
.v-dev-handoff .xh{letter-spacing:-.015em;line-height:1}
.v-dev-handoff .floor{left:-80cqw;right:-80cqw;bottom:-80cqw}
`,
};

export const devIsoStack: SceneSpec = {
  id: "dev-iso-stack",
  slug: "mg-dev-iso-stack",
  name: "Isometric Device Family",
  kind: "scene",
  job: "devices",
  language: "isometric",
  mechanic: "iso-devices-sync-screens",
  energy: "calm",
  settle: 3.6,
  colors: { ink: "#FFFFFF", accent: "#B9FF66", secondary: "#38E0C8", paper: "#2844E1" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["isometric", "multi-device", "sync"],
  fields: [
    { key: "kicker", label: "Kicker", default: "Launch checklist", maxChars: 26, role: "kicker" },
    { key: "headline", label: "Headline", default: "In sync on every screen", maxChars: 40, role: "headline" },
    { key: "caption", label: "Caption", default: "Check it off once and every device updates", maxChars: 60, role: "caption" },
  ],
  html: `<div class="xfr"><div class="world">
<div class="floor"></div>
<div class="sh s1"></div>
<div class="sh s2"></div>
<div class="sh s3"></div>
<div class="g lap"><div class="bob">
<div class="base"><div class="kb"></div><div class="tp"></div><div class="lip"></div><div class="side"></div></div>
<div class="lid">
<div class="bk"></div>
<div class="rt"></div>
<div class="fr">
<div class="scr">
<div class="sync wide">
<div class="nav"><i></i><i class="on"></i><i></i><i></i><i></i></div>
<div class="hd"><span class="m"></span>Launch checklist<em>Synced</em></div>
<div class="bd">
<div class="rg"><svg viewBox="0 0 36 36"><circle class="tr" cx="18" cy="18" r="15"/><circle class="fg" cx="18" cy="18" r="15" pathLength="1"/></svg><b><span class="v1">0%</span><span class="v2">25%</span><span class="v3">50%</span><span class="v4">75%</span><span class="v5">100%</span></b></div>
<div class="rows">
<div class="r r1"><i><u></u></i><span>Final copy</span><s style="--a:linear-gradient(135deg,#ffcf8a,#ff6a4d)"></s></div>
<div class="r r2"><i><u></u></i><span>Pricing page</span><s style="--a:linear-gradient(135deg,#9fd8ff,#5b6cff)"></s></div>
<div class="r r3"><i><u></u></i><span>Demo video</span><s style="--a:linear-gradient(135deg,#b6f2d2,#32b98a)"></s></div>
<div class="r r4"><i><u></u></i><span>Press kit</span><s style="--a:linear-gradient(135deg,#ffb3d1,#d6457f)"></s></div>
</div>
</div>
</div>
<div class="flash"></div>
</div>
</div>
</div>
</div></div>
<div class="g tabl"><div class="bob">
<div class="slab">
<div class="f back"></div><div class="f er"></div><div class="f el"></div><div class="f et"></div><div class="f eb"></div>
<div class="f front">
<div class="scr">
<div class="sync">
<div class="hd"><span class="m"></span>Checklist<em>Synced</em></div>
<div class="bd">
<div class="rg"><svg viewBox="0 0 36 36"><circle class="tr" cx="18" cy="18" r="15"/><circle class="fg" cx="18" cy="18" r="15" pathLength="1"/></svg><b><span class="v1">0%</span><span class="v2">25%</span><span class="v3">50%</span><span class="v4">75%</span><span class="v5">100%</span></b></div>
<div class="rows">
<div class="r r1"><i><u></u></i><span>Final copy</span></div>
<div class="r r2"><i><u></u></i><span>Pricing page</span></div>
<div class="r r3"><i><u></u></i><span>Demo video</span></div>
<div class="r r4"><i><u></u></i><span>Press kit</span></div>
</div>
</div>
</div>
<div class="flash"></div>
</div>
</div>
</div>
</div></div>
<div class="g phn"><div class="bob">
<div class="slab">
<div class="f back"></div><div class="f er"></div><div class="f el"></div><div class="f et"></div><div class="f eb"></div>
<div class="f front">
<div class="scr">
<div class="isl"></div>
<div class="sync">
<div class="hd"><span class="m"></span></div>
<div class="bd">
<div class="rg"><svg viewBox="0 0 36 36"><circle class="tr" cx="18" cy="18" r="15"/><circle class="fg" cx="18" cy="18" r="15" pathLength="1"/></svg><b><span class="v1">0%</span><span class="v2">25%</span><span class="v3">50%</span><span class="v4">75%</span><span class="v5">100%</span></b></div>
<div class="rows">
<div class="r r1"><i><u></u></i><span>Copy</span></div>
<div class="r r2"><i><u></u></i><span>Pricing</span></div>
<div class="r r3"><i><u></u></i><span>Video</span></div>
<div class="r r4"><i><u></u></i><span>Press</span></div>
</div>
</div>
</div>
<div class="flash"></div>
</div>
</div>
</div>
</div></div>
</div>
</div>
<div class="xcopy"><div class="xtop"><div class="xk" data-21st-slot="kicker"><b></b>{{kicker}}</div><div class="xh" data-21st-slot="headline">{{headline|words}}</div></div><div class="xc" data-21st-slot="caption">{{caption}}</div></div>`,
  css: `
.v-dev-iso-stack{color:var(--ink);font-family:var(--font-body)}
.v-dev-iso-stack[data-backdrop="on"]{background:radial-gradient(70% 85% at 50% 38%,color-mix(in srgb,var(--paper) 70%,#fff 12%) 0%,var(--paper) 42%,color-mix(in srgb,var(--paper) 55%,#000) 100%)}
.v-dev-iso-stack[data-backdrop="off"] .floor,.v-dev-iso-stack[data-backdrop="off"] .sh{display:none}
.v-dev-iso-stack *,.v-dev-iso-stack *::before,.v-dev-iso-stack *::after{box-sizing:border-box}
.v-dev-iso-stack .world{position:absolute;left:51%;top:71%;width:0;height:0;transform-style:preserve-3d;animation:dev-iso-stack-spin 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-iso-stack .floor{position:absolute;left:-44cqw;top:-44cqw;width:88cqw;height:88cqw;transform:rotateX(90deg);background:linear-gradient(rgba(255,255,255,.16) 1px,rgba(255,255,255,0) 1px) 0 0/5.5cqw 5.5cqw,linear-gradient(90deg,rgba(255,255,255,.16) 1px,rgba(255,255,255,0) 1px) 0 0/5.5cqw 5.5cqw;-webkit-mask-image:radial-gradient(closest-side,#000 25%,rgba(0,0,0,0) 100%);mask-image:radial-gradient(closest-side,#000 25%,rgba(0,0,0,0) 100%)}
.v-dev-iso-stack .sh{position:absolute;border-radius:50%;background:radial-gradient(closest-side,rgba(17,18,21,.55),rgba(17,18,21,0));transform-origin:50% 50%}
.v-dev-iso-stack .sh.s1{left:-22cqw;top:-14cqw;width:44cqw;height:28cqw;transform:translate3d(-1cqw,-.05cqw,-1cqw) rotateX(90deg)}
.v-dev-iso-stack .sh.s2{left:-12cqw;top:-5cqw;width:24cqw;height:10cqw;transform:translate3d(-27cqw,-.1cqw,10cqw) rotateY(16deg) rotateX(90deg);animation:dev-iso-stack-sh2 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-iso-stack .sh.s3{left:-7cqw;top:-3.5cqw;width:14cqw;height:7cqw;transform:translate3d(24cqw,-.15cqw,16cqw) rotateY(-10deg) rotateX(90deg);animation:dev-iso-stack-sh3 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-iso-stack .g{position:absolute;left:0;top:0;width:0;height:0;transform-style:preserve-3d}
.v-dev-iso-stack .bob{position:absolute;left:0;top:0;width:0;height:0;transform-style:preserve-3d}
.v-dev-iso-stack .lap{transform:translate3d(-1cqw,-3.5cqw,-12cqw)}
.v-dev-iso-stack .lap .bob{animation:dev-iso-stack-bob1 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-iso-stack .base{position:absolute;left:-17cqw;top:0;width:34cqw;height:22cqw;transform-origin:50% 0;transform:rotateX(90deg);transform-style:preserve-3d;border-radius:.4cqw .4cqw 1.6cqw 1.6cqw;background:linear-gradient(180deg,#c9cdf0,#e9ebfb 30%,#dfe2f8)}
.v-dev-iso-stack .base .kb{position:absolute;left:3.4cqw;right:3.4cqw;top:1.8cqw;height:9cqw;border-radius:.6cqw;background:repeating-linear-gradient(180deg,rgba(0,0,0,0) 0 1.55cqw,#5b5fa8 1.55cqw 1.8cqw),repeating-linear-gradient(90deg,#9ea3dc 0 1.6cqw,#5b5fa8 1.6cqw 1.85cqw);opacity:.75}
.v-dev-iso-stack .base .tp{position:absolute;left:50%;top:12.4cqw;width:12cqw;height:8cqw;margin-left:-6cqw;border-radius:.8cqw;background:rgba(120,126,210,.25)}
.v-dev-iso-stack .base .lip{position:absolute;left:1cqw;right:1cqw;top:100%;height:1cqw;transform-origin:50% 0;transform:rotateX(-90deg);background:linear-gradient(180deg,#a9aee6,#7d83d0);border-radius:0 0 1cqw 1cqw}
.v-dev-iso-stack .base .side{position:absolute;left:100%;top:0;width:1cqw;height:100%;transform-origin:0 50%;transform:rotateY(90deg);background:linear-gradient(180deg,#8f95db,#6f75c6)}
.v-dev-iso-stack .lid{position:absolute;left:-17cqw;top:-22cqw;width:34cqw;height:22cqw;transform-origin:50% 100%;transform:rotateX(12deg);transform-style:preserve-3d}
.v-dev-iso-stack .lid .fr,.v-dev-iso-stack .lid .bk{position:absolute;inset:0;border-radius:1.2cqw 1.2cqw .4cqw .4cqw;backface-visibility:hidden}
.v-dev-iso-stack .lid .fr{background:#0b0c1c;box-shadow:inset 0 0 0 .18cqw #9aa0e6}
.v-dev-iso-stack .lid .bk{transform:rotateY(180deg) translateZ(.1cqw);background:linear-gradient(160deg,#eef0ff,#c3c7f2)}
.v-dev-iso-stack .lid .rt{position:absolute;left:100%;top:0;width:.7cqw;height:100%;transform-origin:0 50%;transform:rotateY(90deg);background:#8c92dc}
.v-dev-iso-stack .lid .scr{position:absolute;left:.9cqw;right:.9cqw;top:.9cqw;bottom:1.3cqw}
.v-dev-iso-stack .lid .sync{font-size:3.1cqw}
.v-dev-iso-stack .scr{border-radius:.5cqw;overflow:hidden;container-type:inline-size;background:#141518;color:#eef0ff}
.v-dev-iso-stack .slab{position:absolute;transform-style:preserve-3d}
.v-dev-iso-stack .slab > .f{position:absolute;inset:0;backface-visibility:hidden}
.v-dev-iso-stack .tabl{transform:translate3d(-27cqw,-16.5cqw,10cqw) rotateY(16deg)}
.v-dev-iso-stack .tabl .bob{animation:dev-iso-stack-bob2 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-iso-stack .tabl .slab{left:-9.5cqw;top:-12.5cqw;width:19cqw;height:25cqw}
.v-dev-iso-stack .tabl .front{transform:translateZ(.5cqw);border-radius:1.8cqw;background:#0b0c1c;box-shadow:inset 0 0 0 .2cqw #a3a9ee}
.v-dev-iso-stack .tabl .back{transform:rotateY(180deg) translateZ(.5cqw);border-radius:1.8cqw;background:linear-gradient(160deg,#eef0ff,#c3c7f2)}
.v-dev-iso-stack .tabl .er{left:9cqw;width:1cqw;transform:rotateY(90deg) translateZ(9.5cqw);background:linear-gradient(180deg,#9aa0e6,#7177c9)}
.v-dev-iso-stack .tabl .el{left:9cqw;width:1cqw;transform:rotateY(-90deg) translateZ(9.5cqw);background:linear-gradient(180deg,#b9bdf3,#8e94dc)}
.v-dev-iso-stack .tabl .et{top:12cqw;height:1cqw;transform:rotateX(90deg) translateZ(12.5cqw);background:#cfd2fa}
.v-dev-iso-stack .tabl .eb{top:12cqw;height:1cqw;transform:rotateX(-90deg) translateZ(12.5cqw);background:#6f75c6}
.v-dev-iso-stack .tabl .er,.v-dev-iso-stack .tabl .el{top:.9cqw;bottom:.9cqw}
.v-dev-iso-stack .tabl .et,.v-dev-iso-stack .tabl .eb{left:.9cqw;right:.9cqw}
.v-dev-iso-stack .tabl .scr{position:absolute;inset:1.1cqw;border-radius:.9cqw}
.v-dev-iso-stack .tabl .sync{font-size:6.2cqw}
.v-dev-iso-stack .phn{transform:translate3d(24cqw,-14cqw,16cqw) rotateY(-10deg)}
.v-dev-iso-stack .phn .bob{animation:dev-iso-stack-bob3 6s cubic-bezier(.45,0,.55,1) infinite}
.v-dev-iso-stack .phn .slab{left:-5.2cqw;top:-10.7cqw;width:10.4cqw;height:21.4cqw}
.v-dev-iso-stack .phn .front{transform:translateZ(.45cqw);border-radius:1.9cqw;background:#0b0c1c;box-shadow:inset 0 0 0 .2cqw #a3a9ee}
.v-dev-iso-stack .phn .back{transform:rotateY(180deg) translateZ(.45cqw);border-radius:1.9cqw;background:linear-gradient(160deg,#eef0ff,#c3c7f2)}
.v-dev-iso-stack .phn .er{top:1.2cqw;bottom:1.2cqw;left:4.75cqw;width:.9cqw;transform:rotateY(90deg) translateZ(5.2cqw);background:linear-gradient(180deg,#9aa0e6,#7177c9)}
.v-dev-iso-stack .phn .el{top:1.2cqw;bottom:1.2cqw;left:4.75cqw;width:.9cqw;transform:rotateY(-90deg) translateZ(5.2cqw);background:linear-gradient(180deg,#b9bdf3,#8e94dc)}
.v-dev-iso-stack .phn .et{left:1.2cqw;right:1.2cqw;top:10.25cqw;height:.9cqw;transform:rotateX(90deg) translateZ(10.7cqw);background:#cfd2fa}
.v-dev-iso-stack .phn .eb{left:1.2cqw;right:1.2cqw;top:10.25cqw;height:.9cqw;transform:rotateX(-90deg) translateZ(10.7cqw);background:#6f75c6}
.v-dev-iso-stack .phn .scr{position:absolute;inset:.7cqw;border-radius:1.4cqw}
.v-dev-iso-stack .phn .sync{font-size:11.5cqw}
.v-dev-iso-stack .phn .isl{position:absolute;left:36%;right:36%;top:3.5%;height:4%;border-radius:2cqw;background:#000;z-index:3}
.v-dev-iso-stack .sync{position:absolute;inset:0;padding:1.1em 1.1em;display:flex;flex-direction:column;gap:.8em}
.v-dev-iso-stack .sync .hd{display:flex;align-items:center;gap:.5em;font-size:.95em;font-weight:600}
.v-dev-iso-stack .sync .hd .m{width:1.5em;height:1.5em;border-radius:.45em;background:linear-gradient(135deg,var(--accent),var(--secondary));flex:none}
.v-dev-iso-stack .sync .hd em{margin-left:auto;font-style:normal;font-size:.72em;font-weight:600;color:#141518;background:var(--accent);border-radius:1em;padding:.2em .7em;animation:dev-iso-stack-pill 6s linear infinite}
.v-dev-iso-stack .sync .bd{display:flex;flex-direction:column;gap:.8em;flex:1;min-height:0}
.v-dev-iso-stack .sync .rg{position:relative;width:5.2em;height:5.2em;flex:none;align-self:center}
.v-dev-iso-stack .sync .rg svg{width:100%;height:100%;transform:rotate(-90deg)}
.v-dev-iso-stack .sync .rg circle{fill:none;stroke-width:3.4}
.v-dev-iso-stack .sync .rg .tr{stroke:rgba(255,255,255,.1)}
.v-dev-iso-stack .sync .rg .fg{stroke:var(--accent);stroke-linecap:round;stroke-dasharray:1 2;stroke-dashoffset:1;animation:dev-iso-stack-ring 6s linear infinite}
.v-dev-iso-stack .sync .rg b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:1.25em;font-weight:700;letter-spacing:-.03em}
.v-dev-iso-stack .sync .rg b span{position:absolute;opacity:0}
.v-dev-iso-stack .sync .rg .v1{animation:dev-iso-stack-v1 6s linear infinite}
.v-dev-iso-stack .sync .rg .v2{animation:dev-iso-stack-v2 6s linear infinite}
.v-dev-iso-stack .sync .rg .v3{animation:dev-iso-stack-v3 6s linear infinite}
.v-dev-iso-stack .sync .rg .v4{animation:dev-iso-stack-v4 6s linear infinite}
.v-dev-iso-stack .sync .rg .v5{animation:dev-iso-stack-v5 6s linear infinite}
.v-dev-iso-stack .sync .rows{display:flex;flex-direction:column;gap:.45em;flex:1}
.v-dev-iso-stack .sync .r{display:flex;align-items:center;gap:.55em;font-size:.82em;padding:.5em .6em;border-radius:.55em;background:rgba(255,255,255,.06)}
.v-dev-iso-stack .sync .r i{position:relative;width:1.15em;height:1.15em;border-radius:.35em;box-shadow:inset 0 0 0 .12em rgba(255,255,255,.3);flex:none}
.v-dev-iso-stack .sync .r i > u{content:"";position:absolute;inset:0;border-radius:.35em;background:var(--accent) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M5 12.5l4.5 4.5L19 7' fill='none' stroke='%230f1030' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'/></svg>") center/80% no-repeat;transform:scale(0)}
.v-dev-iso-stack .sync .r1 i > u{animation:dev-iso-stack-c1 6s linear infinite}
.v-dev-iso-stack .sync .r2 i > u{animation:dev-iso-stack-c2 6s linear infinite}
.v-dev-iso-stack .sync .r3 i > u{animation:dev-iso-stack-c3 6s linear infinite}
.v-dev-iso-stack .sync .r4 i > u{animation:dev-iso-stack-c4 6s linear infinite}
.v-dev-iso-stack .sync .r span{flex:1;white-space:nowrap;overflow:hidden}
.v-dev-iso-stack .sync .r s{width:1.3em;height:1.3em;border-radius:50%;background:var(--a);flex:none}
.v-dev-iso-stack .wide .bd{flex-direction:row;align-items:center;gap:1.4em}
.v-dev-iso-stack .wide .rg{width:6.6em;height:6.6em}
.v-dev-iso-stack .wide{padding-left:7.4em}
.v-dev-iso-stack .wide .nav{position:absolute;left:0;top:0;bottom:0;width:6em;background:rgba(255,255,255,.04);border-right:1px solid rgba(255,255,255,.06);padding:1.1em .8em;display:flex;flex-direction:column;gap:.5em}
.v-dev-iso-stack .wide .nav i{height:.9em;border-radius:.3em;background:rgba(255,255,255,.1)}
.v-dev-iso-stack .wide .nav i.on{background:color-mix(in srgb,var(--accent) 50%,transparent)}
.v-dev-iso-stack .wide .nav i:first-child{width:1.6em;height:1.6em;border-radius:.45em;background:linear-gradient(135deg,var(--accent),var(--secondary));margin-bottom:.6em}
.v-dev-iso-stack .flash{position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 .25em color-mix(in srgb,var(--accent) 90%,transparent),inset 0 0 2em color-mix(in srgb,var(--accent) 40%,transparent);opacity:0;animation:dev-iso-stack-flash 6s linear infinite;pointer-events:none}
.v-dev-iso-stack .tag{position:absolute;left:4cqw;bottom:4cqw;display:flex;align-items:center;gap:1cqw;font-family:var(--font-display);font-size:1.7cqw;font-weight:600;letter-spacing:-.01em;padding:1cqw 2cqw;border-radius:3cqw;background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.22);white-space:nowrap}
.v-dev-iso-stack .tag i{width:1cqw;height:1cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 1.2cqw var(--accent);animation:dev-iso-stack-dot 1s ease-in-out infinite}
@keyframes dev-iso-stack-spin{0%,100%{transform:scale3d(.9,.9,.9) rotateX(-27deg) rotateY(-34deg)}50%{transform:scale3d(.9,.9,.9) rotateX(-24deg) rotateY(-48deg)}}
@keyframes dev-iso-stack-bob1{0%,100%{transform:translateY(0cqw)}50%{transform:translateY(-1cqw)}}
@keyframes dev-iso-stack-bob2{0%,100%{transform:translateY(-1.4cqw)}50%{transform:translateY(.6cqw)}}
@keyframes dev-iso-stack-bob3{0%,100%{transform:translateY(.4cqw)}25%{transform:translateY(-1.3cqw)}75%{transform:translateY(1cqw)}}
@keyframes dev-iso-stack-sh2{0%,100%{transform:translate3d(-27cqw,-.1cqw,10cqw) rotateY(16deg) rotateX(90deg) scale(1.06);opacity:1}50%{transform:translate3d(-27cqw,-.1cqw,10cqw) rotateY(16deg) rotateX(90deg) scale(.9);opacity:.7}}
@keyframes dev-iso-stack-sh3{0%,50%,100%{transform:translate3d(24cqw,-.15cqw,16cqw) rotateY(-10deg) rotateX(90deg) scale(1);opacity:.9}25%{transform:translate3d(24cqw,-.15cqw,16cqw) rotateY(-10deg) rotateX(90deg) scale(.85);opacity:.65}75%{transform:translate3d(24cqw,-.15cqw,16cqw) rotateY(-10deg) rotateX(90deg) scale(1.08);opacity:1}}
@keyframes dev-iso-stack-ring{0%,14%{stroke-dashoffset:1;animation-timing-function:cubic-bezier(.2,.8,.2,1)}20%,22%{stroke-dashoffset:.75;animation-timing-function:cubic-bezier(.2,.8,.2,1)}28%,30%{stroke-dashoffset:.5;animation-timing-function:cubic-bezier(.2,.8,.2,1)}36%,38%{stroke-dashoffset:.25;animation-timing-function:cubic-bezier(.2,.8,.2,1)}44%,86%{stroke-dashoffset:0;animation-timing-function:cubic-bezier(.65,0,.35,1)}96%,100%{stroke-dashoffset:1}}
@keyframes dev-iso-stack-c1{0%,14%{transform:scale(0)}17%{transform:scale(1.2)}19%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes dev-iso-stack-c2{0%,22%{transform:scale(0)}25%{transform:scale(1.2)}27%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes dev-iso-stack-c3{0%,30%{transform:scale(0)}33%{transform:scale(1.2)}35%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes dev-iso-stack-c4{0%,38%{transform:scale(0)}41%{transform:scale(1.2)}43%,86%{transform:scale(1)}90%,100%{transform:scale(0)}}
@keyframes dev-iso-stack-v1{0%,15%{opacity:1}16%,93%{opacity:0}95%,100%{opacity:1}}
@keyframes dev-iso-stack-v2{0%,15%{opacity:0}16%,23%{opacity:1}24%,100%{opacity:0}}
@keyframes dev-iso-stack-v3{0%,23%{opacity:0}24%,31%{opacity:1}32%,100%{opacity:0}}
@keyframes dev-iso-stack-v4{0%,31%{opacity:0}32%,39%{opacity:1}40%,100%{opacity:0}}
@keyframes dev-iso-stack-v5{0%,39%{opacity:0}40%,88%{opacity:1}92%,100%{opacity:0}}
@keyframes dev-iso-stack-pill{0%,40%{opacity:.35;transform:scale(.92)}44%{opacity:1;transform:scale(1.12)}48%,86%{opacity:1;transform:scale(1)}92%,100%{opacity:.35;transform:scale(.92)}}
@keyframes dev-iso-stack-flash{0%,15%{opacity:0}17%{opacity:.5}21%,23%{opacity:0}25%{opacity:.5}29%,31%{opacity:0}33%{opacity:.5}37%,39%{opacity:0}42%{opacity:1}56%,100%{opacity:0}}
@keyframes dev-iso-stack-dot{0%,100%{opacity:.5;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}

.v-dev-iso-stack .xfr{position:absolute;left:0;top:0;width:100cqw;height:56.25cqw;transform-origin:0 0;transform:translate(30cqw,7.5cqw) scale(.76)}
@container (max-aspect-ratio: 4/5){.v-dev-iso-stack .xfr{transform:translate(-14cqw,calc(31cqh - 2cqw)) scale(1.3)}}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){.v-dev-iso-stack .xfr{transform:translate(-3cqw,21cqw) scale(1.06)}}
.v-dev-iso-stack .xcopy{position:absolute;left:6cqw;top:0;bottom:0;width:29cqw;display:flex;flex-direction:column;justify-content:center;gap:2.4cqw;z-index:40;color:var(--ink)}
.v-dev-iso-stack .xtop{display:flex;flex-direction:column;gap:1.5cqw}
.v-dev-iso-stack .xk{display:flex;align-items:center;gap:.8cqw;font:500 1.3cqw/1.25 var(--font-mono);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 70%,transparent);animation:dev-iso-stack-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-iso-stack .xk b{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--accent);box-shadow:0 0 .9cqw var(--accent);flex:none}
.v-dev-iso-stack .xh{font-family:var(--font-display);font-weight:800;font-size:4.4cqw;line-height:1.04;letter-spacing:-.035em;text-wrap:balance}
.v-dev-iso-stack .xh .w{display:inline-block;--delay:calc(.2s + var(--i) * .08s);animation:dev-iso-stack-xw 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-dev-iso-stack .xc{font:400 1.45cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 74%,transparent);--delay:.8s;animation:dev-iso-stack-xin 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
.v-dev-iso-stack .xcopy{left:8cqw;right:8cqw;width:auto;top:8cqh;bottom:7.5cqh;justify-content:space-between;gap:0}
.v-dev-iso-stack .xtop{gap:3cqw}
.v-dev-iso-stack .xk{font-size:5.6cqw;gap:2.4cqw}
.v-dev-iso-stack .xk b{width:2.4cqw;height:2.4cqw}
.v-dev-iso-stack .xh{font-size:10.4cqw}
.v-dev-iso-stack .xc{font-size:5.6cqw;line-height:1.3}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
.v-dev-iso-stack .xcopy{left:7cqw;right:7cqw;width:auto;top:6.5cqw;bottom:6cqw;justify-content:space-between;gap:0}
.v-dev-iso-stack .xtop{gap:1.8cqw}
.v-dev-iso-stack .xk{font-size:2.3cqw;gap:1.4cqw}
.v-dev-iso-stack .xk b{width:1.2cqw;height:1.2cqw}
.v-dev-iso-stack .xh{font-size:6cqw}
.v-dev-iso-stack .xc{font-size:2.5cqw}
}
@keyframes dev-iso-stack-xin{0%{opacity:0;transform:translateY(.8em)}9%,100%{opacity:1;transform:none}}
@keyframes dev-iso-stack-xw{0%{opacity:0;transform:translateY(.45em);filter:blur(.08em)}8%,100%{opacity:1;transform:none;filter:blur(0)}}
`,
};

export const DEVICE_SCENES: SceneSpec[] = [devLaptop, devBrowser, devTablet, devPhoneFeed, devHandoff, devIsoStack];
