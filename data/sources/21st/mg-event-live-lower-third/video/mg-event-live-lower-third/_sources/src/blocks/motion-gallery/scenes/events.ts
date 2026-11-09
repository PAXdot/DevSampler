// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const MK = `<svg class="mk" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.6" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 2.4a9.6 9.6 0 0 0 0 19.2z" fill="currentColor"/></svg>`;
const ARR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const NOISE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const eventAnnounceReel: SceneSpec = {
  id: "event-announce-reel",
  slug: "mg-event-announce-reel",
  kind: "scene",
  name: "Event Announcement Poster",
  job: "titles",
  language: "kinetic-poster",
  mechanic: "sun-disc-type-rise-marquee",
  energy: "punchy",
  settle: 2.6,
  colors: { ink: "#15110E", accent: "#DBFF45", secondary: "#FFB078", paper: "#FF5634" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["event", "announcement", "poster", "conference"],
  fields: [
    { key: "name", label: "Event name", default: "Meridian Summit", maxChars: 20, role: "headline" },
    { key: "year", label: "Year", default: "2026", maxChars: 6, role: "value" },
    { key: "kicker", label: "Kicker", default: "Just announced", maxChars: 20, role: "kicker" },
    { key: "details", label: "Date and city", default: "Nov 18–20 · Lisbon, PT", maxChars: 28, role: "caption" },
  ],
  html: `<div class="glow"></div>
<div class="head"><span class="brand">${MK}Meridian</span><span class="vol">VOL.04 / 2026</span></div>
<div class="sunwrap"><div class="sun"><div class="bars"><i></i></div></div><svg class="ring" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="event-ar-circ" d="M100 100m-84 0a84 84 0 1 1 168 0a84 84 0 1 1-168 0"/></defs><text font-size="8.4"><textPath href="#event-ar-circ" textLength="527" lengthAdjust="spacingAndGlyphs">{{details}}&#160;•&#160;{{details}}&#160;•&#160;{{details}}&#160;•&#160;</textPath></text></svg></div>
<div class="kicker" data-21st-slot="kicker"><i></i>{{kicker}}</div>
<div class="type"><div class="nm" data-21st-slot="name">{{name|words}}</div><div class="yr" data-21st-slot="year">{{year}}</div></div>
<div class="details"><i class="rule"></i><span data-21st-slot="details">{{details}}</span><span class="tk">Tickets on sale</span></div>
<div class="band"><div class="track"><span>Tickets on sale now<b></b>120 speakers<b></b>3 stages<b></b></span><span>Tickets on sale now<b></b>120 speakers<b></b>3 stages<b></b></span></div></div>
<div class="grain"></div>`,
  css: `
.v-event-announce-reel{color:var(--ink);font-family:var(--font-body)}
.v-event-announce-reel *{box-sizing:border-box}
.v-event-announce-reel[data-backdrop="on"]{background:var(--paper)}
.v-event-announce-reel[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-event-announce-reel[data-backdrop="off"] .glow,.v-event-announce-reel[data-backdrop="off"] .grain{display:none}
.v-event-announce-reel .glow{position:absolute;inset:0;background:radial-gradient(60cqw 40cqw at 75% 40%,color-mix(in srgb,var(--secondary) 60%,transparent),transparent 70%),radial-gradient(90cqw 40cqw at 50% 115%,color-mix(in srgb,var(--paper) 60%,#000),transparent 70%)}
.v-event-announce-reel .grain{position:absolute;inset:0;background-image:${NOISE};background-size:30cqw 30cqw;opacity:.3;mix-blend-mode:multiply;z-index:9;pointer-events:none}
.v-event-announce-reel .head{position:absolute;left:6cqw;right:6cqw;top:3.4cqw;display:flex;justify-content:space-between;align-items:center;font-weight:700;animation:event-announce-reel-head 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .brand{display:flex;align-items:center;gap:.9cqw;font-size:1.6cqw;letter-spacing:.16em;text-transform:uppercase}
.v-event-announce-reel .mk{width:2.4cqw;height:2.4cqw;display:block}
.v-event-announce-reel .vol{font-family:var(--font-mono);font-size:1.3cqw;font-weight:600;letter-spacing:.04em}
.v-event-announce-reel .sunwrap{position:absolute;left:55cqw;top:6cqw;width:42cqw;height:42cqw;--u:.525cqw;animation:event-announce-reel-sun 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .sun{position:absolute;inset:12.5%;border-radius:50%;overflow:hidden;background:radial-gradient(circle at 36% 30%,color-mix(in srgb,var(--accent) 35%,#fff) 0,var(--accent) 42%,color-mix(in srgb,var(--accent) 82%,#000) 100%);box-shadow:0 calc(var(--u) * 4) calc(var(--u) * 10) rgba(140,24,0,.35),inset 0 calc(var(--u) * -2) calc(var(--u) * 5) rgba(60,90,0,.18)}
.v-event-announce-reel .bars{position:absolute;left:0;right:0;top:54%;bottom:0;overflow:hidden}
.v-event-announce-reel .bars i{position:absolute;left:0;right:0;top:calc(var(--u) * -8);bottom:0;background:repeating-linear-gradient(180deg,transparent 0 calc(var(--u) * 2.2),var(--paper) calc(var(--u) * 2.2) calc(var(--u) * 4));animation:event-announce-reel-bars 6s linear infinite}
.v-event-announce-reel .ring{position:absolute;inset:0;width:100%;height:100%;overflow:visible;animation:event-announce-reel-ring 6s linear infinite}
.v-event-announce-reel .ring text{font-family:var(--font-display);font-weight:700;fill:var(--ink);text-transform:uppercase}
.v-event-announce-reel .kicker{position:absolute;left:6cqw;top:10cqw;display:flex;align-items:center;gap:.8cqw;padding:.7cqw 1.5cqw;border-radius:10cqw;background:var(--ink);color:var(--accent);font-size:1.5cqw;line-height:1.2;font-weight:700;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;transform-origin:0 50%;animation:event-announce-reel-kicker 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .kicker i{width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent);flex:none;animation:event-announce-reel-blink 1s ease-in-out infinite}
.v-event-announce-reel .type{position:absolute;left:5.6cqw;top:15.4cqw;font-family:var(--font-display);font-weight:800;letter-spacing:-.025em;text-transform:uppercase}
.v-event-announce-reel .nm .w{display:block;line-height:1.08;--delay:calc(var(--i) * .18s);animation:event-announce-reel-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .nm .w:nth-child(1){font-size:6.4cqw}
.v-event-announce-reel .nm .w:nth-child(n+2){font-size:8.4cqw}
.v-event-announce-reel .yr{font-size:12cqw;line-height:1.08;color:transparent;-webkit-text-stroke:.28cqw var(--ink);--delay:.4s;animation:event-announce-reel-up 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .details{position:absolute;left:6cqw;width:44cqw;top:46.4cqw;display:flex;justify-content:space-between;gap:2cqw;padding-top:1cqw;font-size:1.7cqw;line-height:1.2;font-weight:700;letter-spacing:.02em;animation:event-announce-reel-details 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .details .tk{font-weight:500;opacity:.7;white-space:nowrap}
.v-event-announce-reel .rule{position:absolute;left:0;right:0;top:0;height:.25cqw;background:var(--ink);transform-origin:0 50%;animation:event-announce-reel-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-announce-reel .band{position:absolute;left:-8cqw;right:-8cqw;bottom:.4cqw;height:4.6cqw;background:var(--ink);display:flex;align-items:center;overflow:hidden;box-shadow:0 -1cqw 3cqw rgba(110,20,0,.3);animation:event-announce-reel-band 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-announce-reel .track{display:flex;width:max-content;animation:event-announce-reel-marquee 6s linear infinite}
.v-event-announce-reel .track span{display:flex;align-items:center;white-space:nowrap;font-family:var(--font-display);font-weight:700;font-size:1.9cqw;color:var(--accent);letter-spacing:.02em}
.v-event-announce-reel .track b{display:block;width:1.5cqw;height:1.5cqw;margin:0 1.4cqw;background:var(--accent);clip-path:polygon(50% 0,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0 50%,40% 40%)}
@container (max-aspect-ratio: 4/5){
  .v-event-announce-reel .head{left:7cqw;right:7cqw;top:6cqw}
  .v-event-announce-reel .brand{font-size:3.4cqw;gap:1.8cqw}
  .v-event-announce-reel .mk{width:5.4cqw;height:5.4cqw}
  .v-event-announce-reel .vol{font-size:2.8cqw}
  .v-event-announce-reel .kicker{left:7cqw;top:15cqw;font-size:5.4cqw;gap:2cqw;padding:2cqw 4cqw}
  .v-event-announce-reel .kicker i{width:2.4cqw;height:2.4cqw}
  .v-event-announce-reel .sunwrap{left:12cqw;top:25cqw;width:76cqw;height:76cqw;--u:.95cqw}
  .v-event-announce-reel .type{left:6.4cqw;right:6cqw;top:100cqw}
  .v-event-announce-reel .nm .w:nth-child(1){font-size:12cqw}
  .v-event-announce-reel .nm .w:nth-child(n+2){font-size:15.4cqw}
  .v-event-announce-reel .yr{font-size:20cqw;-webkit-text-stroke:.55cqw var(--ink)}
  .v-event-announce-reel .details{left:7cqw;right:7cqw;width:auto;top:150cqw;font-size:5.4cqw;padding-top:2.4cqw}
  .v-event-announce-reel .details .tk{display:none}
  .v-event-announce-reel .rule{height:.55cqw}
  .v-event-announce-reel .band{bottom:1.5cqw;height:10.5cqw}
  .v-event-announce-reel .track span{font-size:4cqw}
  .v-event-announce-reel .track b{width:3.2cqw;height:3.2cqw;margin:0 2.8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-announce-reel .head{top:5cqw}
  .v-event-announce-reel .brand{font-size:2.4cqw;gap:1.2cqw}
  .v-event-announce-reel .mk{width:3.4cqw;height:3.4cqw}
  .v-event-announce-reel .vol{font-size:2cqw}
  .v-event-announce-reel .kicker{top:12cqw;font-size:2.4cqw;gap:1.2cqw;padding:1.1cqw 2.4cqw}
  .v-event-announce-reel .kicker i{width:1.2cqw;height:1.2cqw}
  .v-event-announce-reel .sunwrap{left:52cqw;top:12cqw;width:44cqw;height:44cqw;--u:.55cqw}
  .v-event-announce-reel .type{top:46cqw}
  .v-event-announce-reel .nm .w:nth-child(1){font-size:9cqw}
  .v-event-announce-reel .nm .w:nth-child(n+2){font-size:11.6cqw}
  .v-event-announce-reel .yr{font-size:15cqw;-webkit-text-stroke:.4cqw var(--ink)}
  .v-event-announce-reel .details{width:88cqw;top:84cqw;font-size:2.6cqw;padding-top:1.4cqw}
  .v-event-announce-reel .rule{height:.35cqw}
  .v-event-announce-reel .band{bottom:.6cqw;height:6cqw}
  .v-event-announce-reel .track span{font-size:2.6cqw}
  .v-event-announce-reel .track b{width:2cqw;height:2cqw;margin:0 1.8cqw}
}
@keyframes event-announce-reel-head{0%{opacity:0;transform:translateY(-3cqw)}10%,88%{opacity:1;transform:none}98%,100%{opacity:0;transform:translateY(-3cqw)}}
@keyframes event-announce-reel-sun{0%{opacity:0;transform:scale(.5) rotate(-35deg)}22%{opacity:1;transform:scale(1.04) rotate(3deg)}32%{opacity:1;transform:scale(1) rotate(0deg)}84%{opacity:1;transform:scale(1.04) rotate(0deg)}100%{opacity:0;transform:scale(1.3) rotate(10deg)}}
@keyframes event-announce-reel-bars{from{transform:translateY(0)}to{transform:translateY(calc(var(--u) * 8))}}
@keyframes event-announce-reel-ring{from{transform:rotate(0deg)}to{transform:rotate(90deg)}}
@keyframes event-announce-reel-kicker{0%,6%{opacity:0;transform:scale(.5)}15%{opacity:1;transform:scale(1.06)}20%,84%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(.8)}}
@keyframes event-announce-reel-blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes event-announce-reel-up{0%,8%{clip-path:inset(0 -5% 100% -5%);transform:translateY(60%)}26%,84%{clip-path:inset(-20% -5% -20% -5%);transform:none}96%,100%{clip-path:inset(-20% -5% 100% -5%);transform:translateY(-40%)}}
@keyframes event-announce-reel-details{0%,26%{opacity:0;transform:translateY(3cqw)}38%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes event-announce-reel-rule{0%,22%{transform:scaleX(0)}42%,100%{transform:scaleX(1)}}
@keyframes event-announce-reel-band{0%,4%{transform:translateY(18cqw) rotate(-3deg)}22%,88%{transform:translateY(0) rotate(-3deg)}100%{transform:translateY(18cqw) rotate(-3deg)}}
@keyframes event-announce-reel-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
`,
};

export const eventHeroGrid: SceneSpec = {
  id: "event-hero-grid",
  slug: "mg-event-hero-grid",
  kind: "scene",
  name: "Synthwave Event Hero",
  job: "titles",
  language: "aura",
  mechanic: "grid-floor-camera-settle",
  energy: "default",
  settle: 3.9,
  colors: { ink: "#F3F1FF", accent: "#8C72FF", secondary: "#7CF0C8", paper: "#05060B" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["event", "hero", "conference", "registration"],
  fields: [
    { key: "title", label: "Event name", default: "Meridian Summit", maxChars: 22, role: "headline" },
    { key: "eyebrow", label: "Eyebrow", default: "Registration open", maxChars: 24, role: "kicker" },
    { key: "sub", label: "Details", default: "Nov 18–20, 2026 · Lisbon · 120 talks", maxChars: 44, role: "caption" },
    { key: "cta", label: "Button", default: "Get your pass", maxChars: 20, role: "cta" },
  ],
  html: `<div class="scene">
<div class="sky"></div>
<div class="floor"><div class="grid"></div></div>
<div class="horizon"></div>
<div class="orbits"><div class="orbit o3"></div><div class="orbit o2"><i class="a"></i><i class="b"></i></div><div class="orbit o1"><i class="a"></i></div></div>
<div class="dust"></div>
<div class="center">
<div class="logo">${MK}</div>
<div class="eyebrow" data-21st-slot="eyebrow">{{eyebrow}}</div>
<div class="title"><span data-21st-slot="title">{{title}}</span></div>
<div class="sub" data-21st-slot="sub">{{sub}}</div>
<div class="cta"><span class="btn"><span data-21st-slot="cta">{{cta}}</span>${ARR}</span><span class="ghost">See the agenda</span></div>
</div>
</div>
<div class="hud tl">MRDN/26</div>
<div class="hud tr">38.72° N · 9.14° W</div>
<div class="hud bl"><i></i>Doors open in 42 days</div>
<div class="hud br">Riverside Hall</div>`,
  css: `
.v-event-hero-grid{color:var(--ink);font-family:var(--font-body)}
.v-event-hero-grid *{box-sizing:border-box}
.v-event-hero-grid[data-backdrop="on"]{background:var(--paper)}
.v-event-hero-grid[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-event-hero-grid[data-backdrop="off"] .sky{display:none}
.v-event-hero-grid .scene{position:absolute;inset:0;animation:event-hero-grid-cam 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-hero-grid .sky{position:absolute;inset:0;background:radial-gradient(75cqw 22cqw at 50% 68%,color-mix(in srgb,var(--accent) 55%,transparent),transparent 70%),radial-gradient(36cqw 9cqw at 50% 67%,color-mix(in srgb,var(--secondary) 42%,transparent),transparent 70%),radial-gradient(60cqw 30cqw at 50% 0%,color-mix(in srgb,var(--accent) 22%,transparent),transparent 70%),linear-gradient(180deg,var(--paper) 0%,color-mix(in srgb,var(--paper) 88%,var(--accent)) 62%,var(--paper) 100%)}
.v-event-hero-grid .orbits{position:absolute;left:50cqw;top:21cqw;width:0;height:0;transform:rotate(-6deg) scaleY(.3)}
.v-event-hero-grid .orbit{position:absolute;border-radius:50%;border:.16cqw solid color-mix(in srgb,var(--accent) 30%,transparent)}
.v-event-hero-grid .o1{left:-36cqw;top:-36cqw;width:72cqw;height:72cqw;animation:event-hero-grid-o1 6s linear infinite}
.v-event-hero-grid .o2{left:-54cqw;top:-54cqw;width:108cqw;height:108cqw;border-color:color-mix(in srgb,var(--accent) 20%,transparent);animation:event-hero-grid-o2 6s linear infinite}
.v-event-hero-grid .o3{left:-74cqw;top:-74cqw;width:148cqw;height:148cqw;border-color:color-mix(in srgb,var(--accent) 11%,transparent)}
.v-event-hero-grid .orbit i{position:absolute;top:50%;width:3cqw;height:3cqw;margin-top:-1.5cqw;border-radius:50%;background:radial-gradient(circle,#fff 0 16%,var(--accent) 32%,transparent 70%)}
.v-event-hero-grid .orbit .a{left:-1.5cqw}
.v-event-hero-grid .orbit .b{right:-1.5cqw}
.v-event-hero-grid .floor{position:absolute;left:-60cqw;right:-60cqw;top:37cqw;height:40cqw;perspective:42cqw;perspective-origin:50% 0}
.v-event-hero-grid .grid{position:absolute;inset:0;transform-origin:50% 0;transform:rotateX(76deg);background-image:linear-gradient(color-mix(in srgb,var(--accent) 65%,transparent) .14cqw,transparent .14cqw),linear-gradient(90deg,color-mix(in srgb,var(--accent) 65%,transparent) .14cqw,transparent .14cqw);background-size:5cqw 5cqw;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 40%);mask-image:linear-gradient(180deg,transparent 0,#000 40%);animation:event-hero-grid-floor 6s linear infinite}
.v-event-hero-grid .horizon{position:absolute;left:8cqw;right:8cqw;top:36.4cqw;height:1.2cqw;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 40%,#fff),color-mix(in srgb,var(--accent) 50%,transparent) 55%,transparent);filter:blur(.25cqw)}
.v-event-hero-grid .dust{position:absolute;inset:0;opacity:.75;background-image:radial-gradient(circle at 12% 18%,color-mix(in srgb,var(--ink) 85%,transparent) 0 .14cqw,transparent .24cqw),radial-gradient(circle at 63% 41%,color-mix(in srgb,var(--ink) 70%,transparent) 0 .1cqw,transparent .2cqw),radial-gradient(circle at 34% 72%,color-mix(in srgb,var(--secondary) 80%,transparent) 0 .12cqw,transparent .22cqw),radial-gradient(circle at 86% 88%,color-mix(in srgb,var(--ink) 60%,transparent) 0 .1cqw,transparent .2cqw);background-size:26cqw 20cqw;-webkit-mask-image:linear-gradient(180deg,transparent,#000 15%,#000 55%,transparent 72%);mask-image:linear-gradient(180deg,transparent,#000 15%,#000 55%,transparent 72%);animation:event-hero-grid-dust 6s linear infinite}
.v-event-hero-grid .center{position:absolute;left:4cqw;right:4cqw;top:6.4cqw;display:flex;flex-direction:column;align-items:center;text-align:center}
.v-event-hero-grid .logo{width:5.2cqw;height:5.2cqw;color:var(--ink);filter:drop-shadow(0 0 1.4cqw color-mix(in srgb,var(--accent) 95%,transparent));animation:event-hero-grid-logo 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-hero-grid .logo svg{width:100%;height:100%;display:block}
.v-event-hero-grid .eyebrow{margin-top:1.4cqw;font-family:var(--font-mono);font-size:1.3cqw;line-height:1.2;letter-spacing:.3em;color:color-mix(in srgb,var(--accent) 45%,var(--ink));text-transform:uppercase;animation:event-hero-grid-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-hero-grid .title{margin-top:.4cqw;font-family:var(--font-display);font-size:7.6cqw;font-weight:600;letter-spacing:-.045em;line-height:1.2;padding:0 1cqw}
.v-event-hero-grid .title span{display:inline-block;background:linear-gradient(100deg,var(--ink) 0 40%,color-mix(in srgb,var(--accent) 45%,var(--ink)) 47%,var(--secondary) 50%,color-mix(in srgb,var(--accent) 45%,var(--ink)) 53%,var(--ink) 60% 100%);background-size:260% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:event-hero-grid-title 6s cubic-bezier(.2,.8,.2,1) infinite,event-hero-grid-shine 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-hero-grid .sub{margin-top:1cqw;font-family:var(--font-mono);font-size:1.4cqw;line-height:1.3;letter-spacing:.12em;color:color-mix(in srgb,var(--ink) 75%,transparent);text-transform:uppercase;animation:event-hero-grid-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-hero-grid .cta{margin-top:2.2cqw;display:flex;gap:1.2cqw;justify-content:center;animation:event-hero-grid-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-hero-grid .btn{display:flex;align-items:center;gap:.8cqw;padding:1.05cqw 2.2cqw;border-radius:10cqw;background:var(--ink);color:var(--paper);font-size:1.5cqw;line-height:1.2;font-weight:600;white-space:nowrap;box-shadow:0 0 3cqw color-mix(in srgb,var(--accent) 55%,transparent)}
.v-event-hero-grid .btn svg{width:1.4cqw;height:1.4cqw;flex:none}
.v-event-hero-grid .ghost{padding:1.05cqw 2.2cqw;border-radius:10cqw;border:1px solid color-mix(in srgb,var(--ink) 24%,transparent);background:color-mix(in srgb,var(--ink) 4%,transparent);font-size:1.5cqw;line-height:1.2;font-weight:500;white-space:nowrap}
.v-event-hero-grid .hud{position:absolute;display:flex;align-items:center;gap:.8cqw;font-family:var(--font-mono);font-size:1.1cqw;letter-spacing:.16em;color:color-mix(in srgb,var(--ink) 55%,transparent);text-transform:uppercase;white-space:nowrap;animation:event-hero-grid-hud 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-hero-grid .tl{left:3.6cqw;top:3.2cqw}
.v-event-hero-grid .tr{right:3.6cqw;top:3.2cqw}
.v-event-hero-grid .bl{left:3.6cqw;bottom:3.2cqw}
.v-event-hero-grid .br{right:3.6cqw;bottom:3.2cqw}
.v-event-hero-grid .hud i{width:.75cqw;height:.75cqw;border-radius:50%;background:var(--secondary);box-shadow:0 0 1cqw var(--secondary);animation:event-hero-grid-blink 1s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-event-hero-grid .orbits{top:52cqw}
  .v-event-hero-grid .floor{top:104cqw;height:80cqw;perspective:60cqw}
  .v-event-hero-grid .grid{background-size:8cqw 8cqw}
  .v-event-hero-grid .horizon{top:103cqw;height:2cqw}
  .v-event-hero-grid .center{left:6cqw;right:6cqw;top:16cqw}
  .v-event-hero-grid .logo{width:12cqw;height:12cqw}
  .v-event-hero-grid .eyebrow{margin-top:4cqw;font-size:5.4cqw;letter-spacing:.1em}
  .v-event-hero-grid .title{margin-top:2cqw;font-size:16cqw;line-height:1.15}
  .v-event-hero-grid .sub{margin-top:3cqw;font-size:5.4cqw;letter-spacing:.04em}
  .v-event-hero-grid .ghost{display:none}
  .v-event-hero-grid .cta{position:absolute;left:0;right:0;top:134cqw;margin:0;flex-direction:column;align-items:center;gap:3cqw}
  .v-event-hero-grid .btn{font-size:5.8cqw;gap:2.4cqw;padding:3.4cqw 8cqw}
  .v-event-hero-grid .btn svg{width:5.4cqw;height:5.4cqw}
  .v-event-hero-grid .ghost{font-size:4.2cqw;padding:2.6cqw 6cqw}
  .v-event-hero-grid .hud{font-size:2.8cqw;gap:1.6cqw}
  .v-event-hero-grid .tl,.v-event-hero-grid .tr{top:6cqw}
  .v-event-hero-grid .tl{left:6cqw}.v-event-hero-grid .tr{right:6cqw}
  .v-event-hero-grid .bl,.v-event-hero-grid .br{bottom:6cqw}
  .v-event-hero-grid .bl{left:6cqw}.v-event-hero-grid .br{right:6cqw}
  .v-event-hero-grid .hud i{width:2cqw;height:2cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-hero-grid .orbits{top:34cqw}
  .v-event-hero-grid .floor{top:64cqw;height:50cqw;perspective:50cqw}
  .v-event-hero-grid .grid{background-size:6cqw 6cqw}
  .v-event-hero-grid .horizon{top:63.4cqw;height:1.6cqw}
  .v-event-hero-grid .center{top:13cqw}
  .v-event-hero-grid .logo{width:8cqw;height:8cqw}
  .v-event-hero-grid .eyebrow{margin-top:2.4cqw;font-size:2.2cqw;letter-spacing:.24em}
  .v-event-hero-grid .title{font-size:11cqw;margin-top:1cqw}
  .v-event-hero-grid .sub{font-size:2.2cqw;margin-top:1.6cqw}
  .v-event-hero-grid .cta{margin-top:5cqw;gap:1.8cqw}
  .v-event-hero-grid .btn{font-size:2.6cqw;gap:1.2cqw;padding:1.8cqw 3.6cqw}
  .v-event-hero-grid .btn svg{width:2.4cqw;height:2.4cqw}
  .v-event-hero-grid .ghost{font-size:2.6cqw;padding:1.8cqw 3.6cqw}
  .v-event-hero-grid .hud{font-size:1.7cqw}
  .v-event-hero-grid .tl,.v-event-hero-grid .tr{top:4.4cqw}
  .v-event-hero-grid .bl,.v-event-hero-grid .br{bottom:4.4cqw}
  .v-event-hero-grid .hud i{width:1.2cqw;height:1.2cqw}
}
@keyframes event-hero-grid-cam{0%{opacity:0;transform:scale(1.14);filter:blur(.8cqw)}24%{opacity:1;transform:scale(1);filter:blur(0)}86%{opacity:1;transform:scale(1.025);filter:blur(0)}100%{opacity:0;transform:scale(1.06);filter:blur(.5cqw)}}
@keyframes event-hero-grid-o1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes event-hero-grid-o2{from{transform:rotate(0deg)}to{transform:rotate(-180deg)}}
@keyframes event-hero-grid-floor{from{background-position:0 0}to{background-position:0 10cqw}}
@keyframes event-hero-grid-dust{from{background-position:0 0}to{background-position:0 -20cqw}}
@keyframes event-hero-grid-logo{0%,6%{opacity:0;transform:scale(.4)}18%{opacity:1;transform:scale(1.08)}24%,84%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(.8)}}
@keyframes event-hero-grid-title{0%,8%{clip-path:inset(0 0 100% 0);transform:translateY(50%)}26%,84%{clip-path:inset(-20% -5% -20% -5%);transform:none}96%,100%{clip-path:inset(-20% -5% 100% -5%);transform:translateY(-40%)}}
@keyframes event-hero-grid-shine{0%,30%{background-position:100% 0}64%,100%{background-position:0 0}}
@keyframes event-hero-grid-sub{0%,14%{opacity:0;transform:translateY(1.5cqw)}30%,84%{opacity:1;transform:none}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes event-hero-grid-cta{0%,22%{opacity:0;transform:translateY(2cqw) scale(.96)}38%,84%{opacity:1;transform:none}94%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes event-hero-grid-hud{0%,10%{opacity:0}24%,88%{opacity:1}98%,100%{opacity:0}}
@keyframes event-hero-grid-blink{0%,100%{opacity:1}50%{opacity:.3}}
`,
};

export const eventSpeakers: SceneSpec = {
  id: "event-speakers",
  slug: "mg-event-speakers",
  kind: "scene",
  name: "Speaker Lineup Reveal",
  job: "gallery",
  language: "editorial",
  mechanic: "card-curtain-reveal-lineup",
  energy: "default",
  settle: 3,
  colors: { ink: "#17140F", accent: "#E8553A", secondary: "#7B66DE", paper: "#EFEAE0" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["speakers", "lineup", "event", "conference"],
  fields: [
    { key: "title", label: "Title", default: "The first speakers", maxChars: 26, role: "headline" },
    { key: "event", label: "Event", default: "Meridian Summit 26 · Lineup", maxChars: 32, role: "kicker" },
    { key: "when", label: "Date and venue", default: "Nov 18–20, 2026 · Lisbon", maxChars: 30, role: "label" },
    { key: "cta", label: "Link", default: "meridian.events/speakers", maxChars: 28, role: "cta" },
  ],
  html: `<div class="paper"></div>
<div class="top"><span class="eyebrow" data-21st-slot="event">${MK}<span>{{event}}</span></span><span class="idx">Wave 01 / 04</span></div>
<div class="title" data-21st-slot="title">{{title|words}}</div>
<div class="when" data-21st-slot="when">{{when}}</div>
<div class="cards">
<div class="card c1" style="--c:var(--accent)"><div class="ph"><svg viewBox="0 0 100 110" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><g class="b"><path d="M6 110C8 88 26 78 50 78C74 78 92 88 94 110Z"/><path d="M43 60h14v20H43z"/><ellipse cx="50" cy="47" rx="15.5" ry="18.5"/></g><path class="h" d="M32 50C30 30 40 24 51 24C63 24 71 32 69 50C69 58 71 64 74 67C66 69 62 64 62 57L38 57C38 64 34 69 26 67C29 64 32 58 32 50Z"/></svg><span class="tag">Keynote</span><span class="no">01</span></div><b>Ava Lindqvist</b><small>Head of Design, Northbeam</small></div>
<div class="card c2" style="--c:var(--secondary)"><div class="ph"><svg viewBox="0 0 100 110" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><g class="b"><path d="M4 110C6 86 26 77 50 77C74 77 94 86 96 110Z"/><path d="M42 60h16v20H42z"/><ellipse cx="50" cy="46" rx="16" ry="18.5"/></g><path class="h" d="M34 44C34 30 42 26 51 26C61 26 67 32 66 44C62 38 56 36 50 36C44 36 38 38 34 44Z"/><path class="h" d="M36 50C37 64 44 68 50 68C56 68 63 64 64 50C60 58 40 58 36 50Z"/></svg><span class="no">02</span></div><b>Tomás Okafor</b><small>Founder, Paperfield</small></div>
<div class="card c3" style="--c:color-mix(in srgb,var(--accent) 45%,var(--secondary))"><div class="ph"><svg viewBox="0 0 100 110" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><g class="b"><path d="M8 110C10 89 27 79 50 79C73 79 90 89 92 110Z"/><path d="M43 61h14v20H43z"/><ellipse cx="50" cy="48" rx="15" ry="18"/></g><circle class="h" cx="50" cy="24" r="8.5"/><path class="h" d="M35 47C34 33 41 29 50 29C59 29 66 33 65 47C60 39 40 39 35 47Z"/></svg><span class="no">03</span></div><b>Mira Sato</b><small>Staff Engineer, Quiet Labs</small></div>
<div class="card c4" style="--c:color-mix(in srgb,var(--accent) 35%,#f2b544)"><div class="ph"><svg viewBox="0 0 100 110" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><path class="h" d="M33 46C32 30 41 25 50 25C59 25 68 30 67 46L71 86C64 89 60 84 59 78L41 78C40 84 36 89 29 86Z"/><g class="b"><path d="M7 110C9 88 27 79 50 79C73 79 91 88 93 110Z"/><path d="M43 61h14v20H43z"/><ellipse cx="50" cy="48" rx="15" ry="18"/></g><path class="h" d="M35 46C35 33 42 29 50 29C58 29 65 33 65 46C60 38 40 38 35 46Z"/></svg><span class="no">04</span></div><b>Leila Haddad</b><small>Research Lead, Tessel</small></div>
</div>
<div class="foot"><span class="more"><strong>+116 more</strong> speakers, announced weekly</span><i class="rule"></i><span class="go"><span data-21st-slot="cta">{{cta}}</span>${ARR}</span></div>`,
  css: `
.v-event-speakers{color:var(--ink);font-family:var(--font-body)}
.v-event-speakers *{box-sizing:border-box}
.v-event-speakers[data-backdrop="on"]{background:var(--paper)}
.v-event-speakers .paper{position:absolute;inset:0;background-image:${NOISE};background-size:40cqw 40cqw;opacity:.22;mix-blend-mode:multiply;pointer-events:none}
.v-event-speakers[data-backdrop="off"] .paper{display:none}
.v-event-speakers .top{position:absolute;left:5cqw;right:5cqw;top:4cqw;display:flex;justify-content:space-between;align-items:center;font-size:1.25cqw;font-weight:600;letter-spacing:.14em;text-transform:uppercase;animation:event-speakers-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .eyebrow{display:flex;align-items:center;gap:.9cqw;line-height:1.2}
.v-event-speakers .mk{width:1.9cqw;height:1.9cqw;display:block;color:var(--accent);flex:none}
.v-event-speakers .idx{font-family:var(--font-mono);font-weight:500;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-event-speakers .title{position:absolute;left:4.8cqw;top:6.6cqw;font-family:var(--font-display);font-size:6.4cqw;line-height:1.2;letter-spacing:-.01em;white-space:nowrap}
.v-event-speakers .title .w{display:inline-block;padding-block:.08em;--delay:calc(var(--i) * .1s);animation:event-speakers-rise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .title .w:nth-child(2){font-style:italic;color:var(--accent);background:linear-gradient(var(--accent),var(--accent)) no-repeat 0 94%/0% .06em;animation:event-speakers-rise 6s cubic-bezier(.2,.8,.2,1) infinite,event-speakers-ul 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-speakers .when{position:absolute;right:5cqw;top:11cqw;text-align:right;font-size:1.5cqw;line-height:1.3;font-weight:600;animation:event-speakers-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .cards{position:absolute;left:5cqw;right:5cqw;top:17.6cqw;display:grid;grid-template-columns:repeat(4,1fr);gap:2cqw}
.v-event-speakers .card{position:relative}
.v-event-speakers .c1{animation:event-speakers-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .c2{animation:event-speakers-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .c3{animation:event-speakers-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .c4{animation:event-speakers-c4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .ph{position:relative;height:22.5cqw;border-radius:1.1cqw;overflow:hidden;background:radial-gradient(80% 60% at 72% 8%,rgba(255,255,255,.6) 0,transparent 60%),linear-gradient(165deg,color-mix(in srgb,var(--c) 40%,#fff) 0%,var(--c) 100%);box-shadow:0 .2cqw .4cqw rgba(40,30,20,.08),0 1.8cqw 3cqw -1.2cqw rgba(40,30,20,.35)}
.v-event-speakers .ph svg{position:absolute;left:0;bottom:0;width:100%;height:100%;transform-origin:50% 100%;animation:event-speakers-drift 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .ph .b{fill:color-mix(in srgb,var(--c) 55%,#000);stroke:rgba(255,240,230,.45);stroke-width:.7}
.v-event-speakers .ph .h{fill:color-mix(in srgb,var(--c) 25%,#000)}
.v-event-speakers .ph::before{content:"";position:absolute;top:-20%;bottom:-20%;left:0;width:60%;z-index:2;background:linear-gradient(100deg,transparent,rgba(255,255,255,.35),transparent);transform:translateX(-120%) skewX(-14deg);animation:event-speakers-sweep 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-speakers .ph::after{content:"";position:absolute;inset:0;z-index:1;background-image:${NOISE};background-size:24cqw 24cqw;opacity:.3;mix-blend-mode:overlay}
.v-event-speakers .no{position:absolute;right:1cqw;top:1cqw;z-index:3;font-family:var(--font-mono);font-size:1cqw;color:rgba(255,255,255,.9);letter-spacing:.08em}
.v-event-speakers .tag{position:absolute;left:1cqw;top:1cqw;z-index:3;padding:.5cqw .95cqw;border-radius:10cqw;background:var(--ink);color:var(--paper);font-size:1cqw;font-weight:600;letter-spacing:.12em;text-transform:uppercase;transform-origin:0 50%;animation:event-speakers-tag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .card b{display:block;margin-top:1.3cqw;font-size:1.85cqw;font-weight:600;letter-spacing:-.01em;white-space:nowrap}
.v-event-speakers .card small{display:block;margin-top:.35cqw;font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 62%,transparent);white-space:nowrap}
.v-event-speakers .foot{position:absolute;left:5cqw;right:5cqw;bottom:3.4cqw;display:flex;align-items:center;gap:1.6cqw;font-size:1.4cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:event-speakers-foot 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-speakers .foot .rule{flex:1;height:1px;background:color-mix(in srgb,var(--ink) 28%,transparent)}
.v-event-speakers .foot strong{font-weight:600;color:var(--ink)}
.v-event-speakers .foot .go{display:flex;align-items:center;gap:.6cqw;font-weight:600;color:var(--ink);white-space:nowrap}
.v-event-speakers .foot .go svg{width:1.5cqw;height:1.5cqw;flex:none;animation:event-speakers-nudge 1s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-event-speakers .top{left:7cqw;right:7cqw;top:7cqw;font-size:5.4cqw;letter-spacing:.04em}
  .v-event-speakers .eyebrow{gap:2cqw}
  .v-event-speakers .mk{width:5.4cqw;height:5.4cqw}
  .v-event-speakers .idx{display:none}
  .v-event-speakers .title{left:7cqw;right:7cqw;top:24cqw;font-size:12.4cqw;white-space:normal}
  .v-event-speakers .when{left:7cqw;right:auto;top:43cqw;text-align:left;font-size:5.4cqw}
  .v-event-speakers .cards{left:7cqw;right:7cqw;top:55cqw;grid-template-columns:1fr 1fr;column-gap:4cqw;row-gap:4.4cqw}
  .v-event-speakers .ph{height:34cqw;border-radius:3cqw}
  .v-event-speakers .no{font-size:2.6cqw;right:2.4cqw;top:2.4cqw}
  .v-event-speakers .tag{font-size:2.6cqw;left:2.4cqw;top:2.4cqw;padding:1.2cqw 2.2cqw}
  .v-event-speakers .card b{font-size:4.4cqw;margin-top:2.2cqw}
  .v-event-speakers .card small{font-size:3cqw;margin-top:.8cqw;white-space:normal}
  .v-event-speakers .foot{left:7cqw;right:7cqw;bottom:8cqw;font-size:5.4cqw}
  .v-event-speakers .foot .more,.v-event-speakers .foot .rule{display:none}
  .v-event-speakers .foot .go{gap:2cqw}
  .v-event-speakers .foot .go svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-speakers .top{left:6cqw;right:6cqw;top:6cqw;font-size:2cqw}
  .v-event-speakers .mk{width:2.8cqw;height:2.8cqw}
  .v-event-speakers .title{left:5.8cqw;top:11cqw;font-size:9.4cqw}
  .v-event-speakers .when{left:6cqw;right:auto;top:25.4cqw;text-align:left;font-size:2.4cqw}
  .v-event-speakers .cards{left:6cqw;right:6cqw;top:34cqw;gap:2cqw}
  .v-event-speakers .ph{height:40cqw;border-radius:1.6cqw}
  .v-event-speakers .no{font-size:1.4cqw}
  .v-event-speakers .tag{font-size:1.3cqw;padding:.7cqw 1.2cqw}
  .v-event-speakers .card b{font-size:2.1cqw;margin-top:1.6cqw;white-space:normal}
  .v-event-speakers .card small{font-size:1.6cqw;white-space:normal}
  .v-event-speakers .foot{left:6cqw;right:6cqw;bottom:6cqw;font-size:2.2cqw}
  .v-event-speakers .foot .go svg{width:2.4cqw;height:2.4cqw}
}
@keyframes event-speakers-fade{0%,4%{opacity:0;transform:translateY(-1cqw)}18%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes event-speakers-rise{0%,4%{clip-path:inset(0 -5% 100% -5%);transform:translateY(60%)}20%,84%{clip-path:inset(-20% -5% -20% -5%);transform:none}94%,100%{clip-path:inset(-20% -5% 100% -5%);transform:translateY(-60%)}}
@keyframes event-speakers-ul{0%,28%{background-size:0% .06em}44%,100%{background-size:100% .06em}}
@keyframes event-speakers-c1{0%,4%{clip-path:inset(calc(100% + 3cqw) -3cqw -3cqw -3cqw);transform:translateY(4cqw)}22%,84%{clip-path:inset(-3cqw -3cqw -3cqw -3cqw);transform:none}94%,100%{clip-path:inset(-3cqw -3cqw calc(100% + 3cqw) -3cqw);transform:translateY(-2cqw)}}
@keyframes event-speakers-c2{0%,8%{clip-path:inset(calc(100% + 3cqw) -3cqw -3cqw -3cqw);transform:translateY(4cqw)}26%,86%{clip-path:inset(-3cqw -3cqw -3cqw -3cqw);transform:none}96%,100%{clip-path:inset(-3cqw -3cqw calc(100% + 3cqw) -3cqw);transform:translateY(-2cqw)}}
@keyframes event-speakers-c3{0%,12%{clip-path:inset(calc(100% + 3cqw) -3cqw -3cqw -3cqw);transform:translateY(4cqw)}30%,88%{clip-path:inset(-3cqw -3cqw -3cqw -3cqw);transform:none}98%,100%{clip-path:inset(-3cqw -3cqw calc(100% + 3cqw) -3cqw);transform:translateY(-2cqw)}}
@keyframes event-speakers-c4{0%,16%{clip-path:inset(calc(100% + 3cqw) -3cqw -3cqw -3cqw);transform:translateY(4cqw)}34%,89%{clip-path:inset(-3cqw -3cqw -3cqw -3cqw);transform:none}100%{clip-path:inset(-3cqw -3cqw calc(100% + 3cqw) -3cqw);transform:translateY(-2cqw)}}
@keyframes event-speakers-drift{0%,6%{transform:scale(1.2) translateY(3cqw)}36%{transform:scale(1.03) translateY(0)}100%{transform:scale(1) translateY(-.5cqw)}}
@keyframes event-speakers-sweep{0%,52%{transform:translateX(-120%) skewX(-14deg)}78%,100%{transform:translateX(260%) skewX(-14deg)}}
@keyframes event-speakers-tag{0%,34%{opacity:0;transform:scale(.4)}40%{opacity:1;transform:scale(1.12)}44%,84%{opacity:1;transform:scale(1)}90%,100%{opacity:0;transform:scale(.6)}}
@keyframes event-speakers-foot{0%,24%{opacity:0;transform:translateY(1.5cqw)}38%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(1cqw)}}
@keyframes event-speakers-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(.4cqw)}}
`,
};

export const eventAgenda: SceneSpec = {
  id: "event-agenda",
  slug: "mg-event-agenda",
  kind: "scene",
  name: "Live Agenda Timeline",
  job: "process",
  language: "product-ui",
  mechanic: "timeline-scroll-live-highlight",
  energy: "calm",
  settle: 2.9,
  colors: { ink: "#F3ECDD", accent: "#FF8A3D", secondary: "#A8F0C6", paper: "#0F241D" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["agenda", "schedule", "event", "timeline"],
  fields: [
    { key: "day", label: "Day", default: "Day 02", maxChars: 10, role: "headline" },
    { key: "date", label: "Date", default: "Thursday, November 19", maxChars: 28, role: "label" },
    { key: "session", label: "Live session", default: "Live build: realtime maps", maxChars: 30, role: "label" },
    { key: "event", label: "Event", default: "Meridian 26 · Agenda", maxChars: 26, role: "kicker" },
  ],
  html: `<div class="side">
<div class="eyebrow" data-21st-slot="event">${MK}<span>{{event}}</span></div>
<div class="day" data-21st-slot="day">{{day}}</div>
<div class="date" data-21st-slot="date">{{date}}</div>
<div class="tabs"><span>Day 01</span><span class="on">Day 02</span><span>Day 03</span></div>
<div class="stages"><div style="--c:var(--accent)"><i></i>Main Stage<span>HALL A</span></div><div style="--c:var(--secondary)"><i></i>Studio<span>HALL B</span></div><div style="--c:color-mix(in srgb,var(--accent) 40%,var(--secondary))"><i></i>Workshop Lab<span>HALL C</span></div></div>
<div class="clock">Lisbon time<b>11<i>:</i>42</b></div>
</div>
<div class="divider"></div>
<div class="tl"><div class="list">
<div class="row"><span class="time">09:30</span><div class="card" style="--c:var(--ink)"><b>Doors, badges &amp; coffee</b><small>Riverside Atrium</small><span class="dur">30 MIN</span></div></div>
<div class="row"><span class="time">10:00</span><div class="card" style="--c:var(--accent)"><b>Opening keynote: The next billion</b><small>Ava Lindqvist · Main Stage</small><span class="dur">45 MIN</span></div></div>
<div class="row"><span class="time">10:45</span><div class="card" style="--c:var(--secondary)"><b>Small teams, huge leverage</b><small>Tomás Okafor · Studio</small><span class="dur">40 MIN</span></div></div>
<div class="row cur"><span class="time">11:30</span><div class="card" style="--c:color-mix(in srgb,var(--accent) 40%,var(--secondary))"><div class="hl"><span class="live"><i></i>LIVE</span><span class="prog"><i></i></span></div><b data-21st-slot="session">{{session}}</b><small>Mira Sato &amp; Jonah Reyes · Workshop Lab</small></div></div>
<div class="row"><span class="time">12:30</span><div class="card" style="--c:var(--ink)"><b>Lunch on the river terrace</b><small>Terrace · catered by Casa Lume</small><span class="dur">60 MIN</span></div></div>
<div class="row"><span class="time">13:30</span><div class="card" style="--c:var(--accent)"><b>Panel: The quiet interface</b><small>4 speakers · Main Stage</small><span class="dur">45 MIN</span></div></div>
<div class="row"><span class="time">14:30</span><div class="card" style="--c:var(--secondary)"><b>Fireside: Leila Haddad × Noor Elbaz</b><small>Studio</small><span class="dur">30 MIN</span></div></div>
<div class="row"><span class="time">15:15</span><div class="card" style="--c:color-mix(in srgb,var(--accent) 40%,var(--secondary))"><b>Hands-on: shipping with tiny budgets</b><small>Felix Brandt · Workshop Lab</small><span class="dur">60 MIN</span></div></div>
</div></div>
<div class="now"><span>11:42</span><i></i></div>`,
  css: `
.v-event-agenda{color:var(--ink);font-family:var(--font-display)}
.v-event-agenda *{box-sizing:border-box}
.v-event-agenda[data-backdrop="on"]{background:radial-gradient(55cqw 40cqw at 92% 0%,color-mix(in srgb,var(--secondary) 12%,transparent),transparent 70%),radial-gradient(50cqw 40cqw at 0% 100%,color-mix(in srgb,var(--accent) 8%,transparent),transparent 70%),var(--paper)}
.v-event-agenda .side{position:absolute;left:5cqw;top:4.6cqw;bottom:4.4cqw;width:27cqw;display:flex;flex-direction:column;animation:event-agenda-side 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-agenda .eyebrow{display:flex;align-items:center;gap:.8cqw;font-family:var(--font-mono);font-size:1.15cqw;line-height:1.2;letter-spacing:.14em;color:var(--secondary);text-transform:uppercase}
.v-event-agenda .mk{width:1.6cqw;height:1.6cqw;display:block;flex:none}
.v-event-agenda .day{margin-top:1.2cqw;font-size:7.4cqw;font-weight:800;line-height:1.1;letter-spacing:-.045em;white-space:nowrap}
.v-event-agenda .date{margin-top:.6cqw;font-family:var(--font-body);font-size:1.9cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 75%,transparent)}
.v-event-agenda .tabs{margin-top:2.2cqw;display:flex;gap:.7cqw}
.v-event-agenda .tabs span{font-family:var(--font-body);font-size:1.2cqw;font-weight:600;padding:.6cqw 1.2cqw;border-radius:10cqw;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-event-agenda .tabs .on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.v-event-agenda .stages{margin-top:2.4cqw;display:grid;gap:1cqw;font-family:var(--font-body);font-size:1.45cqw;font-weight:500}
.v-event-agenda .stages div{display:flex;align-items:center;gap:1cqw}
.v-event-agenda .stages i{width:1cqw;height:1cqw;border-radius:.3cqw;background:var(--c)}
.v-event-agenda .stages span{margin-left:auto;font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-event-agenda .clock{margin-top:auto;font-family:var(--font-mono);font-size:1.1cqw;color:color-mix(in srgb,var(--ink) 50%,transparent);letter-spacing:.14em;text-transform:uppercase}
.v-event-agenda .clock b{display:block;margin-top:.4cqw;font-size:3cqw;font-weight:500;letter-spacing:0;color:var(--ink)}
.v-event-agenda .clock b i{font-style:normal;animation:event-agenda-colon 1s linear infinite}
.v-event-agenda .divider{position:absolute;left:34.5cqw;top:5cqw;bottom:5cqw;width:1px;background:linear-gradient(transparent,color-mix(in srgb,var(--ink) 16%,transparent),transparent)}
.v-event-agenda .tl{position:absolute;left:37cqw;right:4cqw;top:3cqw;bottom:3cqw;overflow:hidden;--rh:8.4cqw;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 15%,#000 82%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 15%,#000 82%,transparent 100%);animation:event-agenda-tl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-agenda .list{position:absolute;left:0;right:0;top:0;animation:event-agenda-scroll 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-agenda .list::before{content:"";position:absolute;left:5.4cqw;top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--ink) 14%,transparent)}
.v-event-agenda .row{position:relative;display:grid;grid-template-columns:7cqw 1fr;height:var(--rh);align-items:center}
.v-event-agenda .row::before{content:"";position:absolute;left:5.05cqw;top:50%;width:.75cqw;height:.75cqw;margin-top:-.375cqw;border-radius:50%;background:var(--paper);border:1px solid color-mix(in srgb,var(--ink) 40%,transparent)}
.v-event-agenda .time{font-family:var(--font-mono);font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-event-agenda .card{position:relative;height:calc(var(--rh) * .86);border-radius:1cqw;background:color-mix(in srgb,var(--ink) 5%,transparent);border:1px solid color-mix(in srgb,var(--ink) 8%,transparent);padding:0 2cqw 0 2.4cqw;display:flex;flex-direction:column;justify-content:center}
.v-event-agenda .card::before{content:"";position:absolute;left:0;top:20%;bottom:20%;width:.35cqw;border-radius:0 .3cqw .3cqw 0;background:var(--c)}
.v-event-agenda .card b{position:relative;font-size:1.85cqw;font-weight:600;line-height:1.2;letter-spacing:-.01em;white-space:nowrap}
.v-event-agenda .card small{position:relative;margin-top:.4cqw;font-family:var(--font-body);font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 60%,transparent);white-space:nowrap}
.v-event-agenda .dur{position:absolute;right:2cqw;top:50%;transform:translateY(-50%);font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 42%,transparent)}
.v-event-agenda .cur .card{animation:event-agenda-pop 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-agenda .hl{position:absolute;inset:-1px;border-radius:1cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--c) 26%,transparent),color-mix(in srgb,var(--c) 7%,transparent));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--c) 60%,transparent),0 1.4cqw 3cqw rgba(0,0,0,.35);opacity:0;animation:event-agenda-hl 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-agenda .live{position:absolute;right:2cqw;top:22%;display:flex;align-items:center;gap:.5cqw;padding:.35cqw .8cqw;border-radius:10cqw;background:var(--accent);color:var(--paper);font-family:var(--font-mono);font-size:1cqw;font-weight:700;letter-spacing:.12em}
.v-event-agenda .live i{width:.6cqw;height:.6cqw;border-radius:50%;background:var(--paper);animation:event-agenda-colon 1s linear infinite}
.v-event-agenda .prog{position:absolute;left:2.4cqw;right:2cqw;bottom:12%;height:.3cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 14%,transparent);overflow:hidden}
.v-event-agenda .prog i{display:block;height:100%;background:var(--c);transform-origin:0 50%;animation:event-agenda-prog 6s linear infinite}
.v-event-agenda .now{position:absolute;left:37cqw;top:22.95cqw;display:flex;align-items:center;width:8cqw;animation:event-agenda-now 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-agenda .now span{padding:.45cqw .7cqw;border-radius:.6cqw;background:var(--accent);color:var(--paper);font-family:var(--font-mono);font-size:1.15cqw;font-weight:700;box-shadow:0 0 2cqw color-mix(in srgb,var(--accent) 50%,transparent)}
.v-event-agenda .now i{flex:1;height:.2cqw;background:var(--accent)}
@container (max-aspect-ratio: 4/5){
  .v-event-agenda .side{left:7cqw;right:7cqw;width:auto;top:8cqw;bottom:8cqw}
  .v-event-agenda .eyebrow{font-size:5.4cqw;gap:2cqw;letter-spacing:.06em}
  .v-event-agenda .mk{width:5.4cqw;height:5.4cqw}
  .v-event-agenda .day{margin-top:auto;font-size:20cqw;white-space:normal}
  .v-event-agenda .date{font-size:5.4cqw;margin-top:1cqw}
  .v-event-agenda .tabs,.v-event-agenda .stages,.v-event-agenda .clock,.v-event-agenda .divider{display:none}
  .v-event-agenda .tl{left:4cqw;right:4cqw;top:20cqw;bottom:50cqw;--rh:18cqw}
  .v-event-agenda .list::before{left:10.6cqw}
  .v-event-agenda .row{grid-template-columns:14cqw 1fr}
  .v-event-agenda .row::before{left:9.8cqw;width:1.8cqw;height:1.8cqw;margin-top:-.9cqw}
  .v-event-agenda .time{font-size:3cqw}
  .v-event-agenda .card{border-radius:2.6cqw;padding:0 3cqw 0 4cqw}
  .v-event-agenda .card::before{width:.9cqw}
  .v-event-agenda .card b{font-size:5.4cqw;overflow:hidden;text-overflow:ellipsis}
  .v-event-agenda .cur .card b{white-space:normal;overflow:visible}
  .v-event-agenda .card small{font-size:3cqw;margin-top:.8cqw}
  .v-event-agenda .dur{display:none}
  .v-event-agenda .hl{border-radius:2.6cqw}
  .v-event-agenda .live{font-size:2.4cqw;right:3cqw;top:-2.2cqw;padding:.8cqw 1.8cqw;gap:1.2cqw}
  .v-event-agenda .live i{width:1.4cqw;height:1.4cqw}
  .v-event-agenda .prog{left:4cqw;right:22cqw;height:.7cqw;bottom:10%}
  .v-event-agenda .now{left:3cqw;top:62cqw;width:16cqw}
  .v-event-agenda .now span{font-size:3cqw;padding:1cqw 1.4cqw;border-radius:1.4cqw}
  .v-event-agenda .now i{height:.5cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-agenda .side{left:6cqw;right:6cqw;width:auto;top:6cqw;bottom:auto}
  .v-event-agenda .eyebrow{font-size:2cqw;gap:1.2cqw}
  .v-event-agenda .mk{width:2.6cqw;height:2.6cqw}
  .v-event-agenda .day{font-size:11cqw;margin-top:1.6cqw}
  .v-event-agenda .date{font-size:2.8cqw}
  .v-event-agenda .tabs{position:absolute;right:0;top:9cqw;margin:0;gap:1cqw}
  .v-event-agenda .tabs span{font-size:1.8cqw;padding:.9cqw 1.7cqw}
  .v-event-agenda .stages,.v-event-agenda .clock,.v-event-agenda .divider{display:none}
  .v-event-agenda .tl{left:4cqw;right:5cqw;top:30cqw;bottom:3cqw;--rh:11cqw}
  .v-event-agenda .list::before{left:8.4cqw}
  .v-event-agenda .row{grid-template-columns:11cqw 1fr}
  .v-event-agenda .row::before{left:7.85cqw;width:1.1cqw;height:1.1cqw;margin-top:-.55cqw}
  .v-event-agenda .time{font-size:2cqw}
  .v-event-agenda .card{border-radius:1.6cqw;padding:0 2.4cqw 0 3cqw}
  .v-event-agenda .card::before{width:.5cqw}
  .v-event-agenda .card b{font-size:2.8cqw}
  .v-event-agenda .card small{font-size:1.9cqw}
  .v-event-agenda .dur{font-size:1.6cqw;right:2.4cqw}
  .v-event-agenda .hl{border-radius:1.6cqw}
  .v-event-agenda .live{font-size:1.5cqw;padding:.5cqw 1.2cqw}
  .v-event-agenda .live i{width:.9cqw;height:.9cqw}
  .v-event-agenda .prog{left:3cqw;right:2.4cqw;height:.45cqw}
  .v-event-agenda .now{left:3cqw;top:56.1cqw;width:12cqw}
  .v-event-agenda .now span{font-size:1.7cqw;padding:.6cqw 1cqw}
  .v-event-agenda .now i{height:.3cqw}
}
@keyframes event-agenda-side{0%{opacity:0;transform:translateX(-2cqw)}16%,86%{opacity:1;transform:none}98%,100%{opacity:0;transform:translateX(-1cqw)}}
@keyframes event-agenda-tl{0%{opacity:0}14%,86%{opacity:1}98%,100%{opacity:0}}
@keyframes event-agenda-scroll{0%{transform:translateY(calc(var(--rh) * 1.67))}36%,74%{transform:translateY(calc(var(--rh) * -1))}100%{transform:translateY(calc(var(--rh) * -2.6))}}
@keyframes event-agenda-pop{0%,34%{transform:scale(1)}40%{transform:scale(1.03)}46%,76%{transform:scale(1.015)}84%,100%{transform:scale(1)}}
@keyframes event-agenda-hl{0%,32%{opacity:0}40%,76%{opacity:1}86%,100%{opacity:0}}
@keyframes event-agenda-prog{0%,36%{transform:scaleX(.12)}80%,100%{transform:scaleX(.34)}}
@keyframes event-agenda-now{0%,30%{opacity:0;transform:translateX(-2cqw)}40%,78%{opacity:1;transform:none}88%,100%{opacity:0;transform:translateX(-1cqw)}}
@keyframes event-agenda-colon{0%,49%{opacity:1}50%,100%{opacity:.2}}
`,
};

export const eventCountdown: SceneSpec = {
  id: "event-countdown",
  slug: "mg-event-countdown",
  kind: "scene",
  name: "Split Flap Countdown",
  job: "data",
  language: "pixel-terminal",
  mechanic: "split-flap-countdown",
  energy: "default",
  settle: 2.9,
  colors: { ink: "#EDE6D6", accent: "#FFB627", secondary: "#7CE38B", paper: "#0D0C0A" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["countdown", "event", "departure-board", "timer"],
  fields: [
    { key: "label", label: "Label", default: "Doors open in", maxChars: 22, role: "headline" },
    { key: "event", label: "Event", default: "Meridian Summit 26", maxChars: 26, role: "label" },
    { key: "offer", label: "Offer", default: "Early-bird €249 ends when the board hits zero.", maxChars: 56, role: "body" },
    { key: "cta", label: "Button", default: "Get your pass", maxChars: 20, role: "cta" },
  ],
  html: `<div class="board">
<div class="bar"><span>${MK}Departures · LIS</span><span class="b2">Gate A · Riverside Hall</span><span>Nov 18 · 09:00 WET</span></div>
<div class="label" data-21st-slot="label">{{label}}</div>
<div class="clock">
<div class="grp g1"><div class="tiles"><div class="tile"><span>4</span></div><div class="tile"><span>2</span></div></div><div class="unit">Days</div></div>
<div class="sep">:</div>
<div class="grp g2"><div class="tiles"><div class="tile"><span>0</span></div><div class="tile"><span>8</span></div></div><div class="unit">Hours</div></div>
<div class="sep">:</div>
<div class="grp g3"><div class="tiles"><div class="tile"><span>1</span></div><div class="tile"><span>5</span></div></div><div class="unit">Minutes</div></div>
<div class="sep">:</div>
<div class="grp g4"><div class="tiles"><div class="tile"><span>4</span></div><div class="tile"><div class="strip"><span>9</span><span>8</span><span>7</span><span>6</span><span>5</span><span>4</span></div><i class="flap"></i></div></div><div class="unit">Seconds</div></div>
</div>
<div class="dep"><span class="t">09:00</span><span class="ev" data-21st-slot="event">{{event}}</span><span class="g">Gate A</span><span class="ok"><i></i>On time</span></div>
<div class="foot"><span data-21st-slot="offer">{{offer}}</span><span class="cta"><span data-21st-slot="cta">{{cta}}</span>${ARR}</span></div>
</div>`,
  css: `
.v-event-countdown{color:var(--ink);font-family:var(--font-body)}
.v-event-countdown *{box-sizing:border-box}
.v-event-countdown[data-backdrop="on"]{background:radial-gradient(70cqw 40cqw at 50% 42%,color-mix(in srgb,var(--paper) 85%,var(--accent)) 0,var(--paper) 72%)}
.v-event-countdown .board{position:absolute;inset:0;animation:event-countdown-board 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-countdown .bar{position:absolute;left:5cqw;right:5cqw;top:4.2cqw;display:flex;justify-content:space-between;align-items:center;padding-bottom:1.4cqw;border-bottom:1px solid color-mix(in srgb,var(--accent) 25%,transparent);font-family:var(--font-mono);font-size:1.2cqw;letter-spacing:.18em;color:var(--accent);text-transform:uppercase}
.v-event-countdown .bar span{display:flex;align-items:center;gap:.8cqw}
.v-event-countdown .mk{width:1.6cqw;height:1.6cqw;display:block}
.v-event-countdown .label{position:absolute;left:0;right:0;top:9.6cqw;text-align:center;font-family:var(--font-display);font-style:italic;font-size:3.6cqw;line-height:1.2}
.v-event-countdown .clock{position:absolute;left:0;right:0;top:16.2cqw;display:flex;justify-content:center;align-items:flex-start;gap:1.6cqw;--tw:7.4cqw;--th:10.4cqw}
.v-event-countdown .grp{display:flex;flex-direction:column;align-items:center;gap:1.3cqw;transform-origin:50% 0}
.v-event-countdown .g1{animation:event-countdown-g1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-countdown .g2{animation:event-countdown-g2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-countdown .g3{animation:event-countdown-g3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-countdown .g4{animation:event-countdown-g4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-countdown .tiles{display:flex;gap:.6cqw}
.v-event-countdown .tile{position:relative;width:var(--tw);height:var(--th);border-radius:.9cqw;overflow:hidden;background:linear-gradient(#2B2925 0,#25231F 50%,#1E1C19 50%,#1A1916 100%);box-shadow:0 .3cqw 0 #070605,0 1.6cqw 2.6cqw rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.08)}
.v-event-countdown .tile::after{content:"";position:absolute;left:0;right:0;top:50%;height:.24cqw;margin-top:-.12cqw;background:#0A0908;box-shadow:0 1px 0 rgba(255,255,255,.05);z-index:3}
.v-event-countdown .tile span{display:block;height:var(--th);line-height:var(--th);text-align:center;font-family:var(--font-mono);font-weight:700;font-size:calc(var(--th) * .73);color:var(--accent);text-shadow:0 0 2cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-event-countdown .strip{animation:event-countdown-tick 6s steps(6,end) infinite}
.v-event-countdown .flap{position:absolute;left:0;right:0;top:0;height:50%;z-index:2;background:linear-gradient(rgba(255,255,255,.07),rgba(0,0,0,.45));transform-origin:50% 100%;opacity:0;animation:event-countdown-flap 1s cubic-bezier(.5,0,.75,0) infinite}
.v-event-countdown .sep{font-family:var(--font-mono);font-size:5cqw;line-height:var(--th);color:color-mix(in srgb,var(--accent) 45%,transparent)}
.v-event-countdown .unit{font-family:var(--font-mono);font-size:1.1cqw;letter-spacing:.28em;color:color-mix(in srgb,var(--ink) 55%,transparent);text-transform:uppercase}
.v-event-countdown .dep{position:absolute;left:12cqw;right:12cqw;top:36.6cqw;display:grid;grid-template-columns:auto 1fr auto auto;gap:2.4cqw;align-items:center;padding:1.2cqw 2cqw;border-radius:.8cqw;background:color-mix(in srgb,var(--paper) 90%,var(--ink));border:1px solid color-mix(in srgb,var(--accent) 18%,transparent);font-family:var(--font-mono);font-size:1.35cqw;line-height:1.2;letter-spacing:.12em;color:var(--accent);text-transform:uppercase;animation:event-countdown-dep 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-countdown .dep .ev{color:var(--ink)}
.v-event-countdown .dep .g{color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-event-countdown .dep .ok{display:flex;align-items:center;gap:.7cqw;color:var(--secondary)}
.v-event-countdown .dep .ok i{width:.7cqw;height:.7cqw;border-radius:50%;background:var(--secondary);box-shadow:0 0 1cqw var(--secondary);animation:event-countdown-blink 1s ease-in-out infinite}
.v-event-countdown .foot{position:absolute;left:12cqw;right:12cqw;bottom:4.2cqw;display:flex;justify-content:space-between;align-items:center;gap:3cqw;font-size:1.5cqw;line-height:1.3;color:color-mix(in srgb,var(--ink) 75%,transparent);animation:event-countdown-foot 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-countdown .cta{display:flex;align-items:center;gap:.8cqw;padding:1cqw 2cqw;border-radius:10cqw;background:var(--accent);color:var(--paper);font-size:1.5cqw;line-height:1.2;font-weight:700;white-space:nowrap;box-shadow:0 0 3cqw color-mix(in srgb,var(--accent) 35%,transparent)}
.v-event-countdown .cta svg{width:1.4cqw;height:1.4cqw;flex:none}
@container (max-aspect-ratio: 4/5){
  .v-event-countdown .bar{left:7cqw;right:7cqw;top:6cqw;font-size:3cqw;letter-spacing:.1em;padding-bottom:2.4cqw}
  .v-event-countdown .bar span:not(:first-child){display:none}
  .v-event-countdown .mk{width:4cqw;height:4cqw}
  .v-event-countdown .bar span{gap:1.6cqw}
  .v-event-countdown .label{top:16cqw;font-size:12cqw}
  .v-event-countdown .clock{left:6cqw;right:6cqw;top:36cqw;display:grid;grid-template-columns:1fr 1fr;justify-items:center;row-gap:5cqw;column-gap:4cqw;--tw:17cqw;--th:23cqw}
  .v-event-countdown .sep{display:none}
  .v-event-countdown .grp{gap:2.4cqw}
  .v-event-countdown .tiles{gap:1.2cqw}
  .v-event-countdown .tile{border-radius:2cqw}
  .v-event-countdown .tile::after{height:.5cqw;margin-top:-.25cqw}
  .v-event-countdown .unit{font-size:3cqw;letter-spacing:.2em}
  .v-event-countdown .dep{left:7cqw;right:7cqw;top:112cqw;grid-template-columns:auto 1fr;row-gap:2cqw;column-gap:4cqw;padding:3cqw 4cqw;border-radius:2cqw;font-size:3.6cqw;letter-spacing:.06em}
  .v-event-countdown .dep .ev{grid-column:1 / -1;order:-1;font-size:5.4cqw}
  .v-event-countdown .dep .g{display:none}
  .v-event-countdown .dep .ok{justify-self:end;gap:1.6cqw}
  .v-event-countdown .dep .ok i{width:1.8cqw;height:1.8cqw}
  .v-event-countdown .foot{left:7cqw;right:7cqw;bottom:8cqw;flex-direction:column;align-items:flex-start;gap:4cqw;font-size:5.4cqw}
  .v-event-countdown .cta{font-size:5.6cqw;gap:2.4cqw;padding:3.2cqw 6cqw}
  .v-event-countdown .cta svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-countdown .bar{left:6cqw;right:6cqw;top:6cqw;font-size:1.8cqw;letter-spacing:.12em}
  .v-event-countdown .bar .b2{display:none}
  .v-event-countdown .mk{width:2.4cqw;height:2.4cqw}
  .v-event-countdown .label{top:15cqw;font-size:6.4cqw}
  .v-event-countdown .clock{top:27cqw;gap:1.4cqw;--tw:8.4cqw;--th:14cqw}
  .v-event-countdown .sep{font-size:5cqw}
  .v-event-countdown .tiles{gap:.6cqw}
  .v-event-countdown .unit{font-size:1.6cqw;letter-spacing:.2em}
  .v-event-countdown .dep{left:6cqw;right:6cqw;top:58cqw;font-size:1.9cqw;letter-spacing:.06em;padding:2cqw 2.6cqw;gap:2cqw;grid-template-columns:auto 1fr auto}
  .v-event-countdown .dep .g{display:none}
  .v-event-countdown .foot{left:6cqw;right:6cqw;bottom:7cqw;font-size:2.4cqw;flex-direction:column;align-items:flex-start;gap:2.6cqw}
  .v-event-countdown .cta{font-size:2.8cqw;gap:1.2cqw;padding:1.8cqw 3.6cqw}
  .v-event-countdown .cta svg{width:2.6cqw;height:2.6cqw}
}
@keyframes event-countdown-board{0%{opacity:0}8%,90%{opacity:1}100%{opacity:0}}
@keyframes event-countdown-g1{0%,4%{opacity:0;transform:perspective(40cqw) rotateX(-85deg)}16%{opacity:1;transform:perspective(40cqw) rotateX(10deg)}22%,86%{opacity:1;transform:perspective(40cqw) rotateX(0deg)}96%,100%{opacity:0;transform:perspective(40cqw) translateY(-2cqw)}}
@keyframes event-countdown-g2{0%,7%{opacity:0;transform:perspective(40cqw) rotateX(-85deg)}19%{opacity:1;transform:perspective(40cqw) rotateX(10deg)}25%,87%{opacity:1;transform:perspective(40cqw) rotateX(0deg)}97%,100%{opacity:0;transform:perspective(40cqw) translateY(-2cqw)}}
@keyframes event-countdown-g3{0%,10%{opacity:0;transform:perspective(40cqw) rotateX(-85deg)}22%{opacity:1;transform:perspective(40cqw) rotateX(10deg)}28%,88%{opacity:1;transform:perspective(40cqw) rotateX(0deg)}98%,100%{opacity:0;transform:perspective(40cqw) translateY(-2cqw)}}
@keyframes event-countdown-g4{0%,13%{opacity:0;transform:perspective(40cqw) rotateX(-85deg)}25%{opacity:1;transform:perspective(40cqw) rotateX(10deg)}31%,89%{opacity:1;transform:perspective(40cqw) rotateX(0deg)}99%,100%{opacity:0;transform:perspective(40cqw) translateY(-2cqw)}}
@keyframes event-countdown-tick{from{transform:translateY(0)}to{transform:translateY(calc(var(--th) * -6))}}
@keyframes event-countdown-flap{0%{opacity:0;transform:perspective(20cqw) rotateX(0deg)}2%{opacity:1;transform:perspective(20cqw) rotateX(0deg)}16%,100%{opacity:0;transform:perspective(20cqw) rotateX(-90deg)}}
@keyframes event-countdown-dep{0%,28%{clip-path:inset(0 100% 0 0 round .8cqw)}44%,88%{clip-path:inset(0 0 0 0 round .8cqw)}98%,100%{clip-path:inset(0 0 0 100% round .8cqw)}}
@keyframes event-countdown-blink{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes event-countdown-foot{0%,32%{opacity:0;transform:translateY(1.5cqw)}44%,88%{opacity:1;transform:none}98%,100%{opacity:0;transform:translateY(1cqw)}}
`,
};

export const eventTicket: SceneSpec = {
  id: "event-ticket",
  slug: "mg-event-ticket",
  kind: "scene",
  name: "Holo Ticket Drop",
  job: "cta",
  language: "glass",
  mechanic: "holo-ticket-float-scan",
  energy: "punchy",
  settle: 2.7,
  colors: { ink: "#FFFFFF", accent: "#D7FF3A", secondary: "#7C5CFF", paper: "#0B0920" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["ticket", "event", "early-bird", "pass"],
  fields: [
    { key: "headline", label: "Headline", default: "Early-bird passes are live.", maxChars: 34, role: "headline" },
    { key: "pass", label: "Pass name", default: "Full Pass", maxChars: 12, role: "label" },
    { key: "price", label: "Price", default: "€249", maxChars: 6, role: "value" },
    { key: "cta", label: "Button", default: "Get your pass", maxChars: 20, role: "cta" },
  ],
  html: `<div class="beam b1"></div><div class="beam b2"></div>
<div class="hl" data-21st-slot="headline">{{headline|words}}</div>
<div class="tk"><div class="paper">
<div class="holo"></div>
<div class="brand">${MK}Meridian Summit 26</div>
<div class="pass" data-21st-slot="pass">{{pass}}</div>
<div class="acc">3-day access · all stages</div>
<div class="grid"><div><label>Date</label><b>Nov 18–20, 2026</b></div><div><label>Gate</label><b>A · Main</b></div><div><label>Venue</label><b>Riverside Hall</b></div><div><label>City</label><b>Lisbon, PT</b></div></div>
<div class="perf"></div>
<div class="qr"><svg viewBox="-1 -1 27 27" shape-rendering="crispEdges" aria-hidden="true"><path d="M0 0h7v1h-7zM8 0h1v1h-1zM12 0h1v1h-1zM14 0h3v1h-3zM18 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM11 1h1v1h-1zM16 1h1v1h-1zM18 1h1v1h-1zM24 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h1v1h-1zM10 2h3v1h-3zM15 2h2v1h-2zM18 2h1v1h-1zM20 2h3v1h-3zM24 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM9 3h5v1h-5zM16 3h1v1h-1zM18 3h1v1h-1zM20 3h3v1h-3zM24 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM10 4h1v1h-1zM12 4h2v1h-2zM16 4h1v1h-1zM18 4h1v1h-1zM20 4h3v1h-3zM24 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h1v1h-1zM11 5h1v1h-1zM13 5h3v1h-3zM18 5h1v1h-1zM24 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h7v1h-7zM9 7h5v1h-5zM16 7h1v1h-1zM3 8h2v1h-2zM6 8h1v1h-1zM9 8h1v1h-1zM12 8h1v1h-1zM14 8h2v1h-2zM18 8h3v1h-3zM23 8h1v1h-1zM1 9h4v1h-4zM7 9h1v1h-1zM10 9h2v1h-2zM13 9h4v1h-4zM20 9h1v1h-1zM23 9h1v1h-1zM3 10h1v1h-1zM5 10h2v1h-2zM9 10h2v1h-2zM15 10h1v1h-1zM17 10h1v1h-1zM19 10h1v1h-1zM24 10h1v1h-1zM0 11h4v1h-4zM5 11h1v1h-1zM7 11h2v1h-2zM10 11h1v1h-1zM13 11h1v1h-1zM15 11h1v1h-1zM17 11h3v1h-3zM22 11h2v1h-2zM0 12h1v1h-1zM2 12h1v1h-1zM4 12h1v1h-1zM6 12h4v1h-4zM11 12h2v1h-2zM18 12h2v1h-2zM22 12h2v1h-2zM0 13h1v1h-1zM3 13h1v1h-1zM5 13h1v1h-1zM8 13h2v1h-2zM11 13h2v1h-2zM14 13h3v1h-3zM18 13h1v1h-1zM21 13h2v1h-2zM24 13h1v1h-1zM0 14h1v1h-1zM3 14h2v1h-2zM6 14h1v1h-1zM10 14h3v1h-3zM18 14h1v1h-1zM20 14h2v1h-2zM24 14h1v1h-1zM3 15h2v1h-2zM9 15h1v1h-1zM11 15h1v1h-1zM13 15h1v1h-1zM16 15h1v1h-1zM20 15h5v1h-5zM2 16h2v1h-2zM5 16h2v1h-2zM9 16h1v1h-1zM12 16h12v1h-12zM8 17h1v1h-1zM12 17h1v1h-1zM15 17h2v1h-2zM20 17h1v1h-1zM22 17h3v1h-3zM0 18h7v1h-7zM9 18h5v1h-5zM15 18h2v1h-2zM18 18h1v1h-1zM20 18h1v1h-1zM22 18h1v1h-1zM24 18h1v1h-1zM0 19h1v1h-1zM6 19h1v1h-1zM9 19h3v1h-3zM14 19h3v1h-3zM20 19h3v1h-3zM0 20h1v1h-1zM2 20h3v1h-3zM6 20h1v1h-1zM11 20h1v1h-1zM14 20h7v1h-7zM23 20h2v1h-2zM0 21h1v1h-1zM2 21h3v1h-3zM6 21h1v1h-1zM8 21h5v1h-5zM14 21h2v1h-2zM17 21h2v1h-2zM21 21h1v1h-1zM0 22h1v1h-1zM2 22h3v1h-3zM6 22h1v1h-1zM8 22h2v1h-2zM12 22h3v1h-3zM17 22h3v1h-3zM21 22h4v1h-4zM0 23h1v1h-1zM6 23h1v1h-1zM10 23h1v1h-1zM12 23h4v1h-4zM18 23h3v1h-3zM23 23h2v1h-2zM0 24h7v1h-7zM9 24h2v1h-2zM14 24h2v1h-2zM18 24h1v1h-1zM20 24h3v1h-3zM24 24h1v1h-1z" fill="#16131F"/></svg><i class="scan"></i></div>
<div class="stub"><div class="adm">Admit one</div><div class="no">MRD-26-04821</div><div class="gate">Scan at any gate</div><div class="days"><span>18<small>NOV</small></span><span>19<small>NOV</small></span><span>20<small>NOV</small></span></div></div>
<i class="sheen"></i>
</div>
<div class="st"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50.0,0.0 57.8,5.7 67.1,3.0 72.5,11.0 82.1,11.7 84.5,21.1 93.3,25.0 92.3,34.6 99.2,41.3 95.0,50.0 99.2,58.7 92.3,65.4 93.3,75.0 84.5,78.9 82.1,88.3 72.5,89.0 67.1,97.0 57.8,94.3 50.0,100.0 42.2,94.3 32.9,97.0 27.5,89.0 17.9,88.3 15.5,78.9 6.7,75.0 7.7,65.4 0.8,58.7 5.0,50.0 0.8,41.3 7.7,34.6 6.7,25.0 15.5,21.1 17.9,11.7 27.5,11.0 32.9,3.0 42.2,5.7"/><circle cx="50" cy="50" r="38" fill="none" stroke="#16131F" stroke-width=".8" stroke-dasharray="2 2"/></svg><div><small>Early bird</small><b data-21st-slot="price">{{price}}</b><s>€390</s></div></div>
</div>
<div class="cta"><span class="go"><span data-21st-slot="cta">{{cta}}</span>${ARR}</span><em>until Oct 31</em></div>`,
  css: `
.v-event-ticket{color:var(--ink);font-family:var(--font-body)}
.v-event-ticket *{box-sizing:border-box}
.v-event-ticket[data-backdrop="on"]{background:radial-gradient(60cqw 40cqw at 70% 10%,color-mix(in srgb,var(--secondary) 45%,var(--paper)) 0,transparent 65%),radial-gradient(50cqw 30cqw at 90% 100%,color-mix(in srgb,var(--secondary) 30%,var(--paper)) 0,transparent 70%),var(--paper)}
.v-event-ticket[data-backdrop="off"] .beam{display:none}
.v-event-ticket[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-event-ticket .beam{position:absolute;top:-14cqw;width:22cqw;height:90cqw;background:linear-gradient(color-mix(in srgb,var(--secondary) 40%,transparent),transparent 72%);filter:blur(2cqw);transform-origin:50% 0}
.v-event-ticket .b1{left:52cqw;animation:event-ticket-b1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-ticket .b2{right:2cqw;animation:event-ticket-b2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-ticket .hl{position:absolute;left:6cqw;top:11cqw;width:46cqw;font-family:var(--font-display);font-weight:800;font-size:6cqw;line-height:1.15;letter-spacing:-.02em}
.v-event-ticket .hl .w{display:inline-block;--delay:calc(var(--i) * .08s);animation:event-ticket-h 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-ticket .hl .w:last-child{color:var(--accent)}
.v-event-ticket .tk{position:absolute;left:58cqw;top:4.6cqw;width:32.4cqw;height:46.5cqw;container-type:size;filter:drop-shadow(0 3cqw 4cqw rgba(0,0,0,.5)) drop-shadow(0 0 6cqw color-mix(in srgb,var(--secondary) 30%,transparent));animation:event-ticket-float 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-ticket .paper{position:absolute;inset:0;overflow:hidden;border-radius:4cqw;background:#F7F2E8;color:#16131F;-webkit-mask:radial-gradient(circle at 0 72.1%,transparent 5cqw,#000 5.2cqw) left/51% 100% no-repeat,radial-gradient(circle at 100% 72.1%,transparent 5cqw,#000 5.2cqw) right/51% 100% no-repeat;mask:radial-gradient(circle at 0 72.1%,transparent 5cqw,#000 5.2cqw) left/51% 100% no-repeat,radial-gradient(circle at 100% 72.1%,transparent 5cqw,#000 5.2cqw) right/51% 100% no-repeat}
.v-event-ticket .holo{position:absolute;left:0;right:0;top:0;height:50cqw;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 45%,#fff) 0%,color-mix(in srgb,var(--secondary) 35%,#fff) 25%,color-mix(in srgb,var(--accent) 25%,#fff) 50%,color-mix(in srgb,var(--secondary) 25%,#fff) 75%,color-mix(in srgb,var(--accent) 45%,#fff) 100%);background-size:200cqw 100%;animation:event-ticket-holo 6s linear infinite}
.v-event-ticket .holo::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(115deg,rgba(255,255,255,.22) 0 .5cqw,transparent .5cqw 2.2cqw),radial-gradient(100cqw 50cqw at 20% 0%,rgba(255,255,255,.5),transparent 60%)}
.v-event-ticket .brand{position:absolute;left:6.7cqw;top:6cqw;z-index:1;display:flex;align-items:center;gap:1.7cqw;font-size:3.2cqw;font-weight:700;letter-spacing:-.01em}
.v-event-ticket .mk{width:4.3cqw;height:4.3cqw;display:block}
.v-event-ticket .pass{position:absolute;left:6cqw;right:6cqw;top:25cqw;z-index:1;font-family:var(--font-display);font-weight:800;font-size:13.3cqw;line-height:1.05;letter-spacing:-.04em;text-transform:uppercase}
.v-event-ticket .acc{position:absolute;left:6.7cqw;top:43.6cqw;z-index:1;font-family:var(--font-mono);font-size:2.1cqw;letter-spacing:.14em;text-transform:uppercase;color:rgba(22,19,31,.7)}
.v-event-ticket .grid{position:absolute;left:6.7cqw;right:6.7cqw;top:60cqw;display:grid;grid-template-columns:1.3fr 1fr;row-gap:9cqw;column-gap:3.3cqw}
.v-event-ticket .grid label{display:block;font-family:var(--font-mono);font-size:1.85cqw;letter-spacing:.16em;color:#857E90;text-transform:uppercase}
.v-event-ticket .grid b{display:block;margin-top:1cqw;font-size:3.5cqw;font-weight:600;letter-spacing:-.01em;white-space:nowrap}
.v-event-ticket .perf{position:absolute;left:7.3cqw;right:7.3cqw;top:103.3cqw;border-top:.53cqw dashed #D3C9B6}
.v-event-ticket .qr{position:absolute;left:6.7cqw;top:109cqw;width:30cqw;height:30cqw}
.v-event-ticket .qr svg{display:block;width:100%;height:100%;animation:event-ticket-qr 6s linear infinite}
.v-event-ticket .scan{position:absolute;left:-1.7cqw;right:-1.7cqw;top:0;height:.83cqw;border-radius:1cqw;background:var(--secondary);box-shadow:0 0 2.6cqw var(--secondary);opacity:0;animation:event-ticket-scan 6s linear infinite}
.v-event-ticket .stub{position:absolute;left:42.5cqw;right:6cqw;top:110cqw}
.v-event-ticket .adm{font-family:var(--font-display);font-weight:800;font-size:4.2cqw;letter-spacing:-.01em;text-transform:uppercase}
.v-event-ticket .no{margin-top:1.5cqw;font-family:var(--font-mono);font-size:2.2cqw;letter-spacing:.08em;color:#4A4456}
.v-event-ticket .gate{margin-top:.8cqw;font-size:2.3cqw;color:#857E90}
.v-event-ticket .days{display:flex;gap:1.3cqw;margin-top:3.3cqw}
.v-event-ticket .days span{display:flex;flex-direction:column;align-items:center;justify-content:center;width:9.3cqw;height:9.3cqw;border-radius:1.7cqw;background:#16131F;color:#F7F2E8;font-family:var(--font-display);font-weight:800;font-size:3.2cqw;line-height:1}
.v-event-ticket .days small{margin-top:.7cqw;font-family:var(--font-mono);font-size:1.4cqw;font-weight:500;letter-spacing:.1em;color:var(--accent)}
.v-event-ticket .sheen{position:absolute;top:-17cqw;bottom:-17cqw;left:0;width:43cqw;z-index:4;background:linear-gradient(100deg,transparent,rgba(255,255,255,.6),transparent);mix-blend-mode:soft-light;transform:translateX(-67cqw) skewX(-14deg);animation:event-ticket-sheen 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-ticket .st{position:absolute;left:74cqw;top:-12cqw;width:38cqw;height:38cqw;container-type:size;color:#16131F;animation:event-ticket-sticker 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-ticket .st svg{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 5cqw 7cqw rgba(0,0,0,.4))}
.v-event-ticket .st polygon{fill:var(--accent)}
.v-event-ticket .st div{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;line-height:1}
.v-event-ticket .st small{font-size:5.4cqw;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
.v-event-ticket .st b{margin-top:2.4cqw;font-family:var(--font-display);font-weight:800;font-size:22cqw;line-height:1.2;letter-spacing:-.04em}
.v-event-ticket .st s{margin-top:1cqw;font-size:6.8cqw;font-weight:600;color:rgba(22,19,31,.6)}
.v-event-ticket .cta{position:absolute;left:6cqw;top:38cqw;display:flex;align-items:center;gap:2cqw;animation:event-ticket-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-ticket .go{display:flex;align-items:center;gap:1cqw;padding:1.3cqw 2.8cqw;border-radius:10cqw;background:var(--ink);color:var(--paper);font-size:2cqw;line-height:1.2;font-weight:700;white-space:nowrap}
.v-event-ticket .go svg{width:2cqw;height:2cqw;flex:none}
.v-event-ticket .cta em{font-style:normal;font-family:var(--font-mono);font-size:1.5cqw;color:color-mix(in srgb,var(--ink) 70%,transparent);white-space:nowrap}
@container (max-aspect-ratio: 4/5){
  .v-event-ticket .beam{width:40cqw;height:170cqw}
  .v-event-ticket .b1{left:0}
  .v-event-ticket .hl{left:7cqw;right:7cqw;width:auto;top:10cqw;font-size:10.4cqw;text-align:center}
  .v-event-ticket .tk{left:19cqw;width:62cqw;top:44cqw;height:89cqw}
  .v-event-ticket .cta{left:0;right:0;top:148cqw;flex-direction:column;justify-content:center;gap:2.4cqw}
  .v-event-ticket .go{font-size:5.6cqw;gap:2.4cqw;padding:3.4cqw 8cqw}
  .v-event-ticket .go svg{width:5.4cqw;height:5.4cqw}
  .v-event-ticket .cta em{font-size:3.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-ticket .beam{height:120cqw}
  .v-event-ticket .hl{top:16cqw;width:42cqw;font-size:7.4cqw}
  .v-event-ticket .tk{left:47cqw;top:18cqw;width:44cqw;height:63cqw}
  .v-event-ticket .cta{top:68cqw;flex-direction:column;align-items:flex-start;gap:1.8cqw}
  .v-event-ticket .go{font-size:3cqw;gap:1.4cqw;padding:2cqw 4cqw}
  .v-event-ticket .go svg{width:3cqw;height:3cqw}
  .v-event-ticket .cta em{font-size:2.2cqw}
}
@keyframes event-ticket-b1{0%,100%{transform:rotate(20deg)}50%{transform:rotate(11deg)}}
@keyframes event-ticket-b2{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(-11deg)}}
@keyframes event-ticket-h{0%,4%{clip-path:inset(0 -5% 100% -5%);transform:translateY(50%)}18%,86%{clip-path:inset(-20% -5% -20% -5%);transform:none}96%,100%{clip-path:inset(-20% -5% 100% -5%);transform:translateY(-50%)}}
@keyframes event-ticket-float{0%{opacity:0;transform:perspective(140cqw) translateY(50cqw) rotateX(40deg) rotateZ(-8deg)}26%{opacity:1;transform:perspective(140cqw) translateY(0) rotateY(-8deg) rotateZ(-2deg)}55%{opacity:1;transform:perspective(140cqw) translateY(-.8cqw) rotateX(4deg) rotateY(7deg) rotateZ(-1deg)}84%{opacity:1;transform:perspective(140cqw) rotateY(-5deg) rotateZ(-2deg)}100%{opacity:0;transform:perspective(140cqw) translateY(-30cqw) rotateX(-30deg) rotateZ(4deg)}}
@keyframes event-ticket-holo{from{background-position:0 0}to{background-position:-200cqw 0}}
@keyframes event-ticket-qr{0%,20%{clip-path:inset(0 0 100% 0)}38%,100%{clip-path:inset(0 0 0 0)}}
@keyframes event-ticket-scan{0%,19%{opacity:0;transform:translateY(0)}20%{opacity:1;transform:translateY(0)}38%{opacity:1;transform:translateY(29cqw)}42%,100%{opacity:0;transform:translateY(29cqw)}}
@keyframes event-ticket-sheen{0%,54%{transform:translateX(-67cqw) skewX(-14deg)}80%,100%{transform:translateX(133cqw) skewX(-14deg)}}
@keyframes event-ticket-sticker{0%,28%{opacity:0;transform:scale(0) rotate(-40deg)}36%{opacity:1;transform:scale(1.14) rotate(16deg)}42%,84%{opacity:1;transform:scale(1) rotate(12deg)}92%,100%{opacity:0;transform:scale(0) rotate(30deg)}}
@keyframes event-ticket-cta{0%,30%{opacity:0;transform:translateY(2cqw)}42%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(1cqw)}}
`,
};

export const eventVenueMap: SceneSpec = {
  id: "event-venue-map",
  slug: "mg-event-venue-map",
  kind: "scene",
  name: "Venue Floor Plan",
  job: "product-ui",
  language: "isometric",
  mechanic: "floorplan-tilt-route-walk",
  energy: "calm",
  settle: 4.6,
  colors: { ink: "#121826", accent: "#FF6A4D", secondary: "#7B61FF", paper: "#EEF2F7" },
  fonts: { display: "Geist", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.heading",
  tags: ["venue", "map", "floor-plan", "event"],
  fields: [
    { key: "name", label: "Venue", default: "Riverside Hall", maxChars: 22, role: "headline" },
    { key: "address", label: "Address", default: "Doca Norte 7, Lisbon", maxChars: 30, role: "label" },
    { key: "kicker", label: "Kicker", default: "Meridian 26 · Venue", maxChars: 26, role: "kicker" },
  ],
  html: `<div class="info">
<div class="eyebrow" data-21st-slot="kicker">${MK}<span>{{kicker}}</span></div>
<div class="name" data-21st-slot="name">{{name}}</div>
<div class="addr" data-21st-slot="address">{{address}}</div>
<div class="legend"><div style="--c:var(--accent)"><i></i>Main Stage<span>A</span></div><div style="--c:var(--secondary)"><i></i>Studio<span>B</span></div><div style="--c:#16B39B"><i></i>Workshop Lab<span>C</span></div><div style="--c:#FFB020"><i></i>Expo Hall<span>D</span></div><div style="--c:#3FB26F"><i></i>Café &amp; Terrace<span>E</span></div></div>
<div class="chips"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 16l20-6M6 20l3-7 6-2 3-6"/></svg>12 min from LIS</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="5" r="2"/><path d="M12 8v6h5l2 6M12 11H8a5 5 0 1 0 6 6"/></svg>Step-free</span></div>
</div>
<div class="view"><div class="plane">
<div class="base"></div>
<div class="z za"><b>A</b></div><div class="z zb"><b>B</b></div><div class="z zc"><b>C</b></div><div class="z zd"><b>D</b></div><div class="z ze"><b>E</b></div>
<div class="door"></div><div class="r1"></div><div class="r2"></div>
<div class="me"><i></i></div>
<div class="pin pa" style="--c:var(--accent)"><div class="pc"><div class="lab"><i></i><span><b>Main Stage</b><small>10:00 · Opening keynote</small></span></div><div class="stem"></div><div class="tip"></div></div></div>
<div class="pin pb" style="--c:var(--secondary)"><div class="pc"><div class="lab"><i></i><span><b>Studio</b><small>10:45 · Small teams</small></span></div><div class="stem"></div><div class="tip"></div></div></div>
</div></div>`,
  css: `
.v-event-venue-map{color:var(--ink);font-family:var(--font-body)}
.v-event-venue-map *{box-sizing:border-box}
.v-event-venue-map[data-backdrop="on"]{background:radial-gradient(70cqw 50cqw at 68% 50%,color-mix(in srgb,var(--paper) 60%,#fff) 0,var(--paper) 72%)}
.v-event-venue-map .info{position:absolute;left:5cqw;top:5cqw;bottom:5cqw;width:27cqw;animation:event-venue-map-info 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-venue-map .eyebrow{display:flex;align-items:center;gap:.8cqw;font-size:1.2cqw;line-height:1.2;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-event-venue-map .mk{width:1.7cqw;height:1.7cqw;display:block;color:var(--ink);flex:none}
.v-event-venue-map .name{margin-top:1.2cqw;font-family:var(--font-display);font-size:3.6cqw;font-weight:700;letter-spacing:-.035em;line-height:1.15}
.v-event-venue-map .addr{margin-top:.6cqw;font-size:1.5cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-event-venue-map .legend{margin-top:2.4cqw}
.v-event-venue-map .legend div{display:grid;grid-template-columns:1.4cqw 1fr auto;gap:1cqw;align-items:center;padding:.85cqw 0;border-top:1px solid color-mix(in srgb,var(--ink) 8%,transparent);font-size:1.45cqw;font-weight:500}
.v-event-venue-map .legend i{width:1.4cqw;height:1.4cqw;border-radius:.4cqw;background:var(--c)}
.v-event-venue-map .legend span{font-family:var(--font-mono);font-size:1.05cqw;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-event-venue-map .chips{position:absolute;left:0;bottom:0;display:flex;gap:.8cqw}
.v-event-venue-map .chips span{display:flex;align-items:center;gap:.6cqw;padding:.6cqw 1.1cqw;border-radius:10cqw;background:color-mix(in srgb,var(--paper) 70%,#fff);font-size:1.15cqw;font-weight:600;white-space:nowrap;box-shadow:0 .2cqw .8cqw rgba(18,24,38,.1)}
.v-event-venue-map .chips svg{width:1.3cqw;height:1.3cqw}
.v-event-venue-map .view{position:absolute;left:33cqw;top:0;width:67cqw;height:56.25cqw;container-type:size;perspective:164cqw;perspective-origin:50% 35%;animation:event-venue-map-view 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-venue-map .plane{position:absolute;left:8.2cqw;top:15.8cqw;width:83.6cqw;height:53.7cqw;transform-style:preserve-3d;animation:event-venue-map-plane 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-venue-map .base{position:absolute;inset:0;border-radius:2.4cqw;background-color:color-mix(in srgb,var(--paper) 80%,#fff);background-image:linear-gradient(color-mix(in srgb,var(--ink) 6%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--ink) 6%,transparent) 1px,transparent 1px);background-size:3cqw 3cqw;box-shadow:0 0 0 .9cqw color-mix(in srgb,var(--paper) 60%,#fff),0 0 0 1.12cqw color-mix(in srgb,var(--ink) 8%,transparent),0 6cqw 9cqw rgba(30,40,70,.2)}
.v-event-venue-map .z{position:absolute;border-radius:1.5cqw;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06),0 1.2cqw 2.1cqw -.6cqw rgba(30,40,70,.4);animation:event-venue-map-zone 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-venue-map .z b{position:absolute;left:1.8cqw;bottom:1cqw;font-size:5.1cqw;font-weight:800;letter-spacing:-.04em;color:rgba(255,255,255,.9)}
.v-event-venue-map .za{left:4.5cqw;top:4.5cqw;width:35.8cqw;height:23.9cqw;background:repeating-linear-gradient(0deg,rgba(255,255,255,.2) 0 .37cqw,transparent .37cqw 2.1cqw),linear-gradient(160deg,color-mix(in srgb,var(--accent) 70%,#fff),var(--accent))}
.v-event-venue-map .za::before{content:"";position:absolute;left:4.5cqw;right:4.5cqw;top:1.8cqw;height:3.9cqw;border-radius:.9cqw;background:color-mix(in srgb,var(--accent) 65%,#000);box-shadow:0 .45cqw 0 rgba(0,0,0,.15)}
.v-event-venue-map .zb{left:44.8cqw;top:4.5cqw;width:34.3cqw;height:14.9cqw;background:repeating-linear-gradient(90deg,rgba(255,255,255,.16) 0 .37cqw,transparent .37cqw 2.4cqw),linear-gradient(160deg,color-mix(in srgb,var(--secondary) 70%,#fff),var(--secondary))}
.v-event-venue-map .zc{left:44.8cqw;top:23.1cqw;width:34.3cqw;height:12.7cqw;background:radial-gradient(circle,rgba(255,255,255,.35) 0 .75cqw,transparent .82cqw) 0 0/4.5cqw 4.5cqw,linear-gradient(160deg,#3FD2B6,#11A08A)}
.v-event-venue-map .zd{left:4.5cqw;top:32.8cqw;width:49.3cqw;height:16.4cqw;background:linear-gradient(90deg,rgba(255,255,255,.4) .3cqw,transparent .3cqw) 0 0/6.1cqw 100%,linear-gradient(0deg,rgba(255,255,255,.4) .3cqw,transparent .3cqw) 0 0/100% 5.5cqw,linear-gradient(160deg,#FFC94D,#FFA51F)}
.v-event-venue-map .ze{left:58.2cqw;top:40.3cqw;width:20.9cqw;height:9cqw;background:linear-gradient(160deg,#6DD392,#34A862)}
.v-event-venue-map .ze b{font-size:3.6cqw}
.v-event-venue-map .door{position:absolute;left:53.1cqw;top:52.2cqw;width:5.7cqw;height:2.4cqw;border-radius:.6cqw;background:var(--ink)}
.v-event-venue-map .r1{position:absolute;left:55.5cqw;top:30.1cqw;width:.9cqw;height:22.1cqw;border-radius:.45cqw;background:repeating-linear-gradient(180deg,var(--ink) 0 1.34cqw,transparent 1.34cqw 2.4cqw);animation:event-venue-map-r1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-venue-map .r2{position:absolute;left:22.4cqw;top:30.1cqw;width:34cqw;height:.9cqw;border-radius:.45cqw;background:repeating-linear-gradient(270deg,var(--ink) 0 1.34cqw,transparent 1.34cqw 2.4cqw);animation:event-venue-map-r2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-venue-map .me{position:absolute;left:56cqw;top:52.2cqw;width:0;height:0;animation:event-venue-map-walk 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-venue-map .me i{position:absolute;left:-1.64cqw;top:-1.64cqw;width:3.3cqw;height:3.3cqw;border-radius:50%;background:#2F6BFF;border:.67cqw solid #fff;box-shadow:0 .6cqw 1.5cqw rgba(47,107,255,.5)}
.v-event-venue-map .me i::after{content:"";position:absolute;inset:-1.34cqw;border-radius:50%;border:.45cqw solid #2F6BFF;animation:event-venue-map-ping 2s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-venue-map .pin{position:absolute;width:0;height:0;transform-style:preserve-3d}
.v-event-venue-map .pa{left:22.4cqw;top:14.9cqw}
.v-event-venue-map .pb{left:61.9cqw;top:11.9cqw}
.v-event-venue-map .pc{position:absolute;left:-13.4cqw;bottom:0;width:26.9cqw;display:flex;flex-direction:column;align-items:center;transform-origin:50% 100%}
.v-event-venue-map .pa .pc{animation:event-venue-map-pina 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-venue-map .pb .pc{animation:event-venue-map-pinb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-venue-map .lab{display:flex;align-items:center;gap:1.5cqw;padding:1.34cqw 2.1cqw;border-radius:1.5cqw;background:var(--ink);color:var(--paper);white-space:nowrap;box-shadow:0 1.8cqw 3.6cqw rgba(18,24,38,.3)}
.v-event-venue-map .lab i{width:1.8cqw;height:1.8cqw;border-radius:.52cqw;background:var(--c);flex:none}
.v-event-venue-map .lab b{display:block;font-size:2.54cqw;font-weight:600;letter-spacing:-.01em}
.v-event-venue-map .lab small{display:block;margin-top:.3cqw;font-size:1.8cqw;opacity:.7}
.v-event-venue-map .stem{width:.37cqw;height:6.3cqw;background:var(--ink)}
.v-event-venue-map .tip{width:1.64cqw;height:1.64cqw;margin-bottom:-.82cqw;border-radius:50%;background:var(--ink);box-shadow:0 0 0 .52cqw var(--c),0 .45cqw 1.2cqw rgba(0,0,0,.3)}
@container (max-aspect-ratio: 4/5){
  .v-event-venue-map .info{left:7cqw;right:7cqw;width:auto;top:8cqw;bottom:8cqw}
  .v-event-venue-map .eyebrow{font-size:5.4cqw;gap:2cqw;letter-spacing:.04em}
  .v-event-venue-map .mk{width:5.4cqw;height:5.4cqw}
  .v-event-venue-map .name{font-size:12cqw;margin-top:2.4cqw}
  .v-event-venue-map .addr{position:absolute;left:0;right:0;bottom:0;margin:0;font-size:5.6cqw}
  .v-event-venue-map .legend{position:absolute;left:0;right:0;bottom:11cqw;margin:0;display:grid;grid-template-columns:1fr 1fr;column-gap:5cqw}
  .v-event-venue-map .legend div{grid-template-columns:3cqw 1fr auto;gap:2cqw;padding:1.6cqw 0;font-size:3.6cqw}
  .v-event-venue-map .legend i{width:3cqw;height:3cqw;border-radius:.8cqw}
  .v-event-venue-map .legend span{font-size:2.6cqw}
  .v-event-venue-map .chips{display:none}
  .v-event-venue-map .view{left:0;top:40cqw;width:100cqw;height:84cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-venue-map .info{left:6cqw;right:6cqw;width:auto;top:6cqw;bottom:6cqw}
  .v-event-venue-map .eyebrow{font-size:2cqw;gap:1.2cqw}
  .v-event-venue-map .mk{width:2.6cqw;height:2.6cqw}
  .v-event-venue-map .name{font-size:7cqw;margin-top:1.6cqw}
  .v-event-venue-map .addr{font-size:2.4cqw;margin-top:1cqw}
  .v-event-venue-map .legend{display:none}
  .v-event-venue-map .chips{gap:1.2cqw}
  .v-event-venue-map .chips span{font-size:1.9cqw;padding:1cqw 1.8cqw;gap:1cqw}
  .v-event-venue-map .chips svg{width:2.2cqw;height:2.2cqw}
  .v-event-venue-map .view{left:4cqw;top:18cqw;width:92cqw;height:77.2cqw}
}
@keyframes event-venue-map-info{0%,4%{opacity:0;transform:translateX(-2cqw)}20%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateX(-1cqw)}}
@keyframes event-venue-map-view{0%{opacity:0;transform:translateY(2cqw)}6%{opacity:1;transform:translateY(1.6cqw)}30%{opacity:1;transform:none}88%{opacity:1;transform:scale(1.035) translateY(-.5cqw)}100%{opacity:0;transform:scale(1.04) translateY(-.6cqw)}}
@keyframes event-venue-map-plane{0%,6%{transform:rotateX(0deg) rotateZ(0deg) scale(.92)}30%,88%{transform:rotateX(52deg) rotateZ(-28deg) scale(.82)}100%{transform:rotateX(52deg) rotateZ(-28deg) scale(.78)}}
@keyframes event-venue-map-zone{0%,4%{opacity:0;transform:scale(.86)}18%,100%{opacity:1;transform:scale(1)}}
@keyframes event-venue-map-r1{0%,30%{clip-path:inset(100% 0 0 0)}44%,100%{clip-path:inset(0 0 0 0)}}
@keyframes event-venue-map-r2{0%,42%{clip-path:inset(0 0 0 100%)}58%,100%{clip-path:inset(0 0 0 0)}}
@keyframes event-venue-map-walk{0%,32%{opacity:0;transform:translate(0,0)}38%{opacity:1;transform:translate(0,0)}58%{opacity:1;transform:translate(0,-22.1cqw)}76%,88%{opacity:1;transform:translate(-33.6cqw,-22.1cqw)}96%,100%{opacity:0;transform:translate(-33.6cqw,-22.1cqw)}}
@keyframes event-venue-map-ping{0%{opacity:.7;transform:scale(.6)}100%{opacity:0;transform:scale(1.8)}}
@keyframes event-venue-map-pina{0%,30%{opacity:0;transform:rotateZ(28deg) rotateX(-52deg) scale(.3)}38%{opacity:1;transform:rotateZ(28deg) rotateX(-52deg) scale(1.08)}42%,86%{opacity:1;transform:rotateZ(28deg) rotateX(-52deg) scale(1)}94%,100%{opacity:0;transform:rotateZ(28deg) rotateX(-52deg) scale(.6)}}
@keyframes event-venue-map-pinb{0%,34%{opacity:0;transform:rotateZ(28deg) rotateX(-52deg) scale(.3)}42%{opacity:1;transform:rotateZ(28deg) rotateX(-52deg) scale(1.08)}46%,86%{opacity:1;transform:rotateZ(28deg) rotateX(-52deg) scale(1)}94%,100%{opacity:0;transform:rotateZ(28deg) rotateX(-52deg) scale(.6)}}
`,
};

export const eventLiveLowerThird: SceneSpec = {
  id: "event-live-lower-third",
  slug: "mg-event-live-lower-third",
  kind: "scene",
  name: "Live Stage Broadcast",
  job: "titles",
  language: "editorial",
  mechanic: "lower-third-wipe-on-stage",
  energy: "default",
  settle: 2.5,
  colors: { ink: "#FFFFFF", accent: "#FF2D3D", secondary: "#6C4FF5", paper: "#0C0A18" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["livestream", "lower-third", "keynote", "event"],
  fields: [
    { key: "name", label: "Speaker", default: "Ava Lindqvist", maxChars: 22, role: "name" },
    { key: "role", label: "Role", default: "Head of Design, Northbeam", maxChars: 32, role: "label" },
    { key: "talk", label: "Session", default: "Opening keynote", maxChars: 24, role: "caption" },
    { key: "slide", label: "Slide title", default: "Designing for the next billion", maxChars: 36, role: "headline" },
  ],
  html: `<div class="cam">
<div class="hall"></div>
<div class="sbeam sb1"></div><div class="sbeam sb2"></div>
<div class="rig"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
<div class="screen"><div class="slide">${MK}<b data-21st-slot="slide">{{slide|words}}</b><small>{{name}} · {{talk}}</small></div></div>
<div class="floor"></div><div class="haze"></div><div class="spot"></div>
<div class="spk"><svg viewBox="0 0 100 140" aria-hidden="true"><defs><linearGradient id="event-ll-lec" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2338"/><stop offset="1" stop-color="#0E0B16"/></linearGradient></defs><g class="rim" fill="#06050B" stroke="rgba(255,224,182,.5)" stroke-width="1.1" stroke-linejoin="round"><ellipse cx="50" cy="22" rx="10.5" ry="12.5"/><path d="M45 31h10v10H45z"/><path d="M27 52C29 42 40 39 50 39C60 39 71 42 73 52L77 100H23Z"/><path d="M70 47C76 52 80 58 82 64L88 49C89 46 93 47 92 50L87 70C86 75 81 76 78 73L67 61Z"/><path d="M30 48C25 58 23 70 24 84L34 92L37 86L31 80C31 70 33 62 36 56Z"/></g><g fill="#06050B"><ellipse cx="50" cy="22" rx="10.5" ry="12.5"/><path d="M45 31h10v10H45z"/><path d="M27 52C29 42 40 39 50 39C60 39 71 42 73 52L77 100H23Z"/><path d="M70 47C76 52 80 58 82 64L88 49C89 46 93 47 92 50L87 70C86 75 81 76 78 73L67 61Z"/><path d="M30 48C25 58 23 70 24 84L34 92L37 86L31 80C31 70 33 62 36 56Z"/></g><path d="M16 90H84L78 140H22Z" fill="url(#event-ll-lec)" stroke="rgba(255,224,182,.4)" stroke-width=".9" stroke-linejoin="round"/><path d="M16 90H84" stroke="rgba(255,226,186,.4)" stroke-width=".8"/><g transform="translate(43 103) scale(.6)" fill="none" stroke="#B9A6FF" stroke-width="2.4"><circle cx="12" cy="12" r="9.6"/><path d="M12 2.4a9.6 9.6 0 0 0 0 19.2z" fill="#B9A6FF"/></g></svg></div>
<div class="crowd"><svg viewBox="0 0 200 30" preserveAspectRatio="none" aria-hidden="true"><path d="M-10 18a6 5 0 1 0 12 0a6 5 0 1 0-12 0zM-7 12a2.3 2.6 0 1 0 4.6 0a2.3 2.6 0 1 0-4.6 0zM0 18.7a5 5 0 1 0 10 0a5 5 0 1 0-10 0zM2 12.5a2.3 2.7 0 1 0 4.6 0a2.3 2.7 0 1 0-4.6 0zM6 18.7a5.7 5 0 1 0 11.4 0a5.7 5 0 1 0-11.4 0zM9.3 12.3a2.4 2.8 0 1 0 4.8 0a2.4 2.8 0 1 0-4.8 0zM16.5 18.2a5.2 5 0 1 0 10.4 0a5.2 5 0 1 0-10.4 0zM19.5 12.6a2.1 2.4 0 1 0 4.2 0a2.1 2.4 0 1 0-4.2 0zM23.2 18.2a5.4 5 0 1 0 10.8 0a5.4 5 0 1 0-10.8 0zM26.4 12.5a2.1 2.5 0 1 0 4.2 0a2.1 2.5 0 1 0-4.2 0zM30.4 18.2a5.8 5 0 1 0 11.6 0a5.8 5 0 1 0-11.6 0zM33.8 11.9a2.4 2.7 0 1 0 4.8 0a2.4 2.7 0 1 0-4.8 0zM39.3 18.7a5.1 5 0 1 0 10.2 0a5.1 5 0 1 0-10.2 0zM42.1 12.7a2.2 2.6 0 1 0 4.4 0a2.2 2.6 0 1 0-4.4 0zM46.6 17.8a5.6 5 0 1 0 11.2 0a5.6 5 0 1 0-11.2 0zM50.1 12.2a2.1 2.4 0 1 0 4.2 0a2.1 2.4 0 1 0-4.2 0zM53.7 19a5.4 5 0 1 0 10.8 0a5.4 5 0 1 0-10.8 0zM56.7 12.7a2.3 2.7 0 1 0 4.6 0a2.3 2.7 0 1 0-4.6 0zM62.4 17.9a5.1 5 0 1 0 10.2 0a5.1 5 0 1 0-10.2 0zM65.3 12.2a2.1 2.5 0 1 0 4.2 0a2.1 2.5 0 1 0-4.2 0zM71.1 19.2a5.7 5 0 1 0 11.4 0a5.7 5 0 1 0-11.4 0zM74.4 12.9a2.3 2.7 0 1 0 4.6 0a2.3 2.7 0 1 0-4.6 0zM79 18.5a5.9 5 0 1 0 11.8 0a5.9 5 0 1 0-11.8 0zM82.7 12.8a2.2 2.5 0 1 0 4.4 0a2.2 2.5 0 1 0-4.4 0zM85.3 18.8a5.9 5 0 1 0 11.8 0a5.9 5 0 1 0-11.8 0zM88.9 12.8a2.2 2.6 0 1 0 4.4 0a2.2 2.6 0 1 0-4.4 0zM93.9 18.4a5.4 5 0 1 0 10.8 0a5.4 5 0 1 0-10.8 0zM97.1 12.4a2.2 2.6 0 1 0 4.4 0a2.2 2.6 0 1 0-4.4 0zM102.4 18.4a5.2 5 0 1 0 10.4 0a5.2 5 0 1 0-10.4 0zM105.4 12.5a2.2 2.6 0 1 0 4.4 0a2.2 2.6 0 1 0-4.4 0zM108.8 17.8a5.9 5 0 1 0 11.8 0a5.9 5 0 1 0-11.8 0zM112.5 12a2.2 2.5 0 1 0 4.4 0a2.2 2.5 0 1 0-4.4 0zM116.3 18.3a5.2 5 0 1 0 10.4 0a5.2 5 0 1 0-10.4 0zM119.2 12.1a2.3 2.7 0 1 0 4.6 0a2.3 2.7 0 1 0-4.6 0zM123.4 18a5.9 5 0 1 0 11.8 0a5.9 5 0 1 0-11.8 0zM127.1 12a2.2 2.6 0 1 0 4.4 0a2.2 2.6 0 1 0-4.4 0zM132 17.7a4.9 5 0 1 0 9.8 0a4.9 5 0 1 0-9.8 0zM134.9 12.3a2 2.4 0 1 0 4 0a2 2.4 0 1 0-4 0zM141.5 18.4a5 5 0 1 0 10 0a5 5 0 1 0-10 0zM144.1 11.9a2.4 2.8 0 1 0 4.8 0a2.4 2.8 0 1 0-4.8 0zM148 17.8a5.7 5 0 1 0 11.4 0a5.7 5 0 1 0-11.4 0zM151.6 12a2.2 2.5 0 1 0 4.4 0a2.2 2.5 0 1 0-4.4 0zM155.3 18.7a5.6 5 0 1 0 11.2 0a5.6 5 0 1 0-11.2 0zM158.5 12.2a2.4 2.8 0 1 0 4.8 0a2.4 2.8 0 1 0-4.8 0zM164 17.7a5.5 5 0 1 0 11 0a5.5 5 0 1 0-11 0zM167.5 12.3a2 2.3 0 1 0 4 0a2 2.3 0 1 0-4 0zM172.3 17.6a5.3 5 0 1 0 10.6 0a5.3 5 0 1 0-10.6 0zM175.5 12a2.1 2.4 0 1 0 4.2 0a2.1 2.4 0 1 0-4.2 0zM178.1 18.5a5.8 5 0 1 0 11.6 0a5.8 5 0 1 0-11.6 0zM181.5 12.3a2.3 2.7 0 1 0 4.6 0a2.3 2.7 0 1 0-4.6 0zM185.8 18.7a4.9 5 0 1 0 9.8 0a4.9 5 0 1 0-9.8 0zM188.6 12.9a2.2 2.5 0 1 0 4.4 0a2.2 2.5 0 1 0-4.4 0zM193.4 18.4a5.9 5 0 1 0 11.8 0a5.9 5 0 1 0-11.8 0zM196.9 11.9a2.4 2.8 0 1 0 4.8 0a2.4 2.8 0 1 0-4.8 0z" fill="#1A1430"/><path d="M-11.8 25.9a7 7.4 0 1 0 14 0a7 7.4 0 1 0-14 0zM-7.8 17.8a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0zM0 26.2a7.2 7.4 0 1 0 14.4 0a7.2 7.4 0 1 0-14.4 0zM4 17.9a3.1 3.6 0 1 0 6.2 0a3.1 3.6 0 1 0-6.2 0zM11.5 28a7.7 7.4 0 1 0 15.4 0a7.7 7.4 0 1 0-15.4 0zM15.7 18.5a3.5 4.1 0 1 0 7 0a3.5 4.1 0 1 0-7 0zM22.1 26.5a7.1 7.4 0 1 0 14.2 0a7.1 7.4 0 1 0-14.2 0zM26.2 18.5a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0zM33.3 27.4a8.4 7.4 0 1 0 16.8 0a8.4 7.4 0 1 0-16.8 0zM38.4 18.5a3.3 3.9 0 1 0 6.6 0a3.3 3.9 0 1 0-6.6 0zM42.5 26.9a8.2 7.4 0 1 0 16.4 0a8.2 7.4 0 1 0-16.4 0zM47.5 18.4a3.2 3.7 0 1 0 6.4 0a3.2 3.7 0 1 0-6.4 0zM56.2 27.5a8.3 7.4 0 1 0 16.6 0a8.3 7.4 0 1 0-16.6 0zM61.3 19a3.2 3.7 0 1 0 6.4 0a3.2 3.7 0 1 0-6.4 0zM70.6 26.7a7.1 7.4 0 1 0 14.2 0a7.1 7.4 0 1 0-14.2 0zM74.5 18.3a3.1 3.7 0 1 0 6.2 0a3.1 3.7 0 1 0-6.2 0zM82.4 26.3a8.3 7.4 0 1 0 16.6 0a8.3 7.4 0 1 0-16.6 0zM87.7 18.2a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0zM92.3 27.9a8.5 7.4 0 1 0 17 0a8.5 7.4 0 1 0-17 0zM97.4 18.9a3.4 3.9 0 1 0 6.8 0a3.4 3.9 0 1 0-6.8 0zM107.9 28a7.8 7.4 0 1 0 15.6 0a7.8 7.4 0 1 0-15.6 0zM112.1 18.6a3.5 4.1 0 1 0 7 0a3.5 4.1 0 1 0-7 0zM116.6 26.4a8.3 7.4 0 1 0 16.6 0a8.3 7.4 0 1 0-16.6 0zM121.8 18.3a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0zM129.7 28.2a8.4 7.4 0 1 0 16.8 0a8.4 7.4 0 1 0-16.8 0zM134.6 18.8a3.5 4.1 0 1 0 7 0a3.5 4.1 0 1 0-7 0zM140 27.3a7.3 7.4 0 1 0 14.6 0a7.3 7.4 0 1 0-14.6 0zM143.9 18a3.5 4 0 1 0 7 0a3.5 4 0 1 0-7 0zM152.6 27.2a7.5 7.4 0 1 0 15 0a7.5 7.4 0 1 0-15 0zM156.8 18.4a3.3 3.8 0 1 0 6.6 0a3.3 3.8 0 1 0-6.6 0zM162.4 25.9a8.5 7.4 0 1 0 17 0a8.5 7.4 0 1 0-17 0zM167.9 17.8a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0zM177.4 26.6a7.2 7.4 0 1 0 14.4 0a7.2 7.4 0 1 0-14.4 0zM181.5 18.3a3.1 3.6 0 1 0 6.2 0a3.1 3.6 0 1 0-6.2 0zM186.8 26.6a8 7.4 0 1 0 16 0a8 7.4 0 1 0-16 0zM191.8 18.7a3 3.4 0 1 0 6 0a3 3.4 0 1 0-6 0zM200.4 27.4a8.3 7.4 0 1 0 16.6 0a8.3 7.4 0 1 0-16.6 0z" fill="#040309"/></svg></div>
<i class="phone ph1"></i><i class="phone ph2"></i>
</div>
<div class="grain"></div><div class="scan"></div><div class="vig"></div>
<div class="live"><b><i></i>LIVE</b><span>Main Stage · Day 1</span><span class="vw"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>12.4K</span></div>
<div class="bug">${MK}Meridian 26</div>
<div class="l3"><i class="acc"></i>
<div class="nm"><span data-21st-slot="name">{{name}}</span><span class="wave"><i class="w1"></i><i class="w2"></i><i class="w3"></i><i class="w4"></i></span></div>
<div class="role"><span data-21st-slot="role">{{role}}</span><i></i><em data-21st-slot="talk">{{talk}}</em></div>
</div>
<div class="tick"><b>UP NEXT</b><div class="win"><div class="track"><span><strong>10:45</strong><u>STUDIO</u>Small teams, huge leverage · Tomás Okafor</span><span><strong>11:30</strong><u>LAB</u>Live build: realtime maps · Mira Sato</span><span><strong>12:30</strong><u>TERRACE</u>Lunch on the river terrace</span><span><strong>10:45</strong><u>STUDIO</u>Small teams, huge leverage · Tomás Okafor</span><span><strong>11:30</strong><u>LAB</u>Live build: realtime maps · Mira Sato</span><span><strong>12:30</strong><u>TERRACE</u>Lunch on the river terrace</span></div></div></div>`,
  css: `
.v-event-live-lower-third{color:#fff;font-family:var(--font-body)}
.v-event-live-lower-third *{box-sizing:border-box}
.v-event-live-lower-third[data-backdrop="on"]{background:var(--paper)}
.v-event-live-lower-third[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-event-live-lower-third .cam{position:absolute;inset:0;transform-origin:30% 40%;animation:event-live-lower-third-cam 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .hall{position:absolute;inset:-4cqw;background:radial-gradient(60cqw 30cqw at 62% 36%,color-mix(in srgb,var(--secondary) 42%,transparent),transparent 70%),linear-gradient(color-mix(in srgb,var(--paper) 45%,#0C0A18) 0,color-mix(in srgb,var(--paper) 35%,#130F24) 60%,#0A0812 100%)}
.v-event-live-lower-third .rig{position:absolute;left:4cqw;right:4cqw;top:1.4cqw;display:flex;justify-content:space-between}
.v-event-live-lower-third .rig i{width:1.4cqw;height:1.4cqw;border-radius:50%;background:radial-gradient(circle,#FFF4DE 0 30%,rgba(255,200,140,.5) 50%,transparent 72%);box-shadow:0 0 2cqw rgba(255,210,160,.5)}
.v-event-live-lower-third .sbeam{position:absolute;top:-2cqw;width:16cqw;height:48cqw;transform-origin:50% 0;filter:blur(1.4cqw);mix-blend-mode:screen;clip-path:polygon(44% 0,56% 0,100% 100%,0 100%)}
.v-event-live-lower-third .sb1{left:52cqw;background:linear-gradient(color-mix(in srgb,var(--secondary) 60%,transparent),transparent 85%);animation:event-live-lower-third-sb1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .sb2{left:76cqw;background:linear-gradient(color-mix(in srgb,var(--accent) 45%,transparent),transparent 85%);animation:event-live-lower-third-sb2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .screen{position:absolute;left:38cqw;top:5.5cqw;width:52cqw;height:27cqw;border-radius:.6cqw;overflow:hidden;container-type:inline-size;background:linear-gradient(120deg,color-mix(in srgb,var(--secondary) 80%,#000) 0%,color-mix(in srgb,color-mix(in srgb,var(--secondary) 50%,var(--accent)) 82%,#000) 50%,color-mix(in srgb,var(--accent) 75%,#000) 100%);background-size:160% 160%;box-shadow:0 0 0 .5cqw #16121F,0 0 8cqw 1cqw color-mix(in srgb,var(--secondary) 40%,transparent);animation:event-live-lower-third-screen 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .screen::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.16) 0 1px,transparent 1px .45cqw),repeating-linear-gradient(90deg,rgba(0,0,0,.12) 0 1px,transparent 1px .45cqw)}
.v-event-live-lower-third .slide{position:absolute;inset:7.7cqw;display:flex;flex-direction:column;justify-content:space-between;color:#fff}
.v-event-live-lower-third .slide .mk{width:6.5cqw;height:6.5cqw;display:block;opacity:.95}
.v-event-live-lower-third .slide b{font-family:var(--font-display);font-weight:400;font-size:8.8cqw;line-height:1.15;letter-spacing:-.01em}
.v-event-live-lower-third .slide b .w:nth-last-of-type(-n+3){font-style:italic}
.v-event-live-lower-third .slide small{font-family:var(--font-mono);font-size:2.1cqw;letter-spacing:.16em;text-transform:uppercase;opacity:.8}
.v-event-live-lower-third .floor{position:absolute;left:-4cqw;right:-4cqw;top:35cqw;bottom:-4cqw;background:radial-gradient(40cqw 6cqw at 64% 0%,color-mix(in srgb,var(--secondary) 40%,transparent),transparent 70%),radial-gradient(70cqw 12cqw at 55% 55%,color-mix(in srgb,var(--secondary) 32%,transparent),transparent 70%),radial-gradient(14cqw 3cqw at 27% 4%,rgba(255,220,170,.35),transparent 70%),linear-gradient(#1A1428,#07060C 70%);border-top:1px solid rgba(255,255,255,.08)}
.v-event-live-lower-third .spot{position:absolute;left:12cqw;top:-6cqw;width:30cqw;height:44cqw;background:linear-gradient(rgba(255,232,196,.4),rgba(255,232,196,.04) 90%);clip-path:polygon(43% 0,57% 0,100% 100%,0 100%);filter:blur(1.2cqw);mix-blend-mode:screen;animation:event-live-lower-third-spot 3s ease-in-out infinite}
.v-event-live-lower-third .spk{position:absolute;left:17cqw;top:9cqw;width:20cqw;height:28cqw;transform-origin:50% 100%;animation:event-live-lower-third-sway 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .spk svg{position:relative;display:block;width:100%;height:100%;overflow:visible}
.v-event-live-lower-third .spk::before{content:"";position:absolute;left:-12%;right:-4%;top:-6%;bottom:30%;border-radius:50%;background:radial-gradient(closest-side,rgba(255,214,160,.24),rgba(255,214,160,.08) 60%,transparent)}
.v-event-live-lower-third .haze{position:absolute;left:-20cqw;top:6cqw;width:80cqw;height:30cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(200,180,255,.12),transparent);animation:event-live-lower-third-haze 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .crowd{position:absolute;left:-3cqw;right:-3cqw;bottom:-1cqw;height:15cqw}
.v-event-live-lower-third .crowd svg{position:absolute;inset:0;width:100%;height:100%}
.v-event-live-lower-third .phone{position:absolute;width:1.25cqw;height:2.1cqw;border-radius:.3cqw;background:linear-gradient(#EEF3FF,#B9C8FF);box-shadow:0 0 2.4cqw .4cqw rgba(190,205,255,.5);transform:rotate(-8deg)}
.v-event-live-lower-third .ph1{left:63cqw;top:44.6cqw}
.v-event-live-lower-third .ph2{left:84.5cqw;top:45.6cqw;transform:rotate(6deg)}
.v-event-live-lower-third .grain{position:absolute;inset:0;background-image:${NOISE};background-size:30cqw 30cqw;opacity:.22;mix-blend-mode:overlay;pointer-events:none}
.v-event-live-lower-third .scan{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 1px,transparent 1px .5cqw);opacity:.5;pointer-events:none}
.v-event-live-lower-third .vig{position:absolute;inset:0;background:radial-gradient(120% 90% at 50% 45%,transparent 55%,rgba(0,0,0,.6) 100%);pointer-events:none}
.v-event-live-lower-third .live{position:absolute;left:4cqw;top:3.6cqw;display:flex;align-items:center;gap:.8cqw}
.v-event-live-lower-third .live b{display:flex;align-items:center;gap:.6cqw;padding:.55cqw 1cqw;border-radius:.4cqw;background:#FF2D3D;font-size:1.3cqw;font-weight:800;letter-spacing:.12em;box-shadow:0 0 2cqw rgba(255,45,61,.45)}
.v-event-live-lower-third .live b i{width:.75cqw;height:.75cqw;border-radius:50%;background:#fff;animation:event-live-lower-third-blink 1s ease-in-out infinite}
.v-event-live-lower-third .live span{display:flex;align-items:center;gap:.6cqw;padding:.55cqw 1cqw;border-radius:.4cqw;background:rgba(10,8,18,.6);font-size:1.25cqw;font-weight:500;color:rgba(255,255,255,.88)}
.v-event-live-lower-third .live svg{width:1.4cqw;height:1.4cqw}
.v-event-live-lower-third .bug{position:absolute;right:4cqw;top:3.8cqw;display:flex;align-items:center;gap:.8cqw;font-size:1.3cqw;font-weight:700;letter-spacing:.16em;text-transform:uppercase;opacity:.8}
.v-event-live-lower-third .bug .mk{width:2cqw;height:2cqw;display:block}
.v-event-live-lower-third .l3{position:absolute;left:4cqw;top:36.4cqw;display:flex;flex-direction:column;align-items:flex-start}
.v-event-live-lower-third .acc{position:absolute;left:0;top:0;bottom:0;width:.7cqw;background:var(--accent);transform-origin:50% 0;animation:event-live-lower-third-acc 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-live-lower-third .nm{margin-left:1.2cqw;display:flex;align-items:center;gap:1.6cqw;padding:.8cqw 2cqw;background:var(--ink);color:var(--paper);font-size:3cqw;font-weight:700;letter-spacing:-.025em;line-height:1.2;animation:event-live-lower-third-nm 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .nm>span:first-child{display:block;white-space:nowrap;animation:event-live-lower-third-txt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-live-lower-third .wave{display:flex;align-items:center;gap:.28cqw;height:2.2cqw}
.v-event-live-lower-third .wave i{width:.36cqw;height:100%;border-radius:.2cqw;background:var(--accent)}
.v-event-live-lower-third .wave .w1{animation:event-live-lower-third-wa 1s ease-in-out infinite}
.v-event-live-lower-third .wave .w2{animation:event-live-lower-third-wb .5s ease-in-out infinite}
.v-event-live-lower-third .wave .w3{animation:event-live-lower-third-wa .75s ease-in-out infinite}
.v-event-live-lower-third .wave .w4{animation:event-live-lower-third-wb 1s ease-in-out infinite}
.v-event-live-lower-third .role{margin-left:1.2cqw;display:flex;align-items:center;gap:1.2cqw;padding:.7cqw 2cqw;background:color-mix(in srgb,var(--paper) 88%,#000);color:var(--ink);font-size:1.45cqw;font-weight:500;line-height:1.2;white-space:nowrap;animation:event-live-lower-third-role 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-live-lower-third .role i{width:1px;height:1.6cqw;background:color-mix(in srgb,var(--ink) 25%,transparent)}
.v-event-live-lower-third .role em{font-style:normal;color:color-mix(in srgb,var(--ink) 65%,transparent)}
.v-event-live-lower-third .tick{position:absolute;left:0;right:0;bottom:0;height:4.6cqw;display:flex;align-items:center;background:rgba(9,7,16,.94);border-top:1px solid rgba(255,255,255,.08)}
.v-event-live-lower-third .tick b{flex:none;display:flex;align-items:center;height:100%;padding:0 2cqw;background:var(--accent);color:#fff;font-size:1.2cqw;font-weight:800;letter-spacing:.14em}
.v-event-live-lower-third .win{flex:1;height:100%;overflow:hidden;display:flex;align-items:center}
.v-event-live-lower-third .track{display:flex;width:max-content;animation:event-live-lower-third-marquee 6s linear infinite}
.v-event-live-lower-third .track span{display:flex;align-items:center;gap:1cqw;white-space:nowrap;padding-left:2.6cqw;font-size:1.4cqw;color:rgba(255,255,255,.86)}
.v-event-live-lower-third .track strong{font-family:var(--font-mono);font-weight:600;font-size:1.25cqw;color:#FF7A85}
.v-event-live-lower-third .track u{text-decoration:none;font-family:var(--font-mono);font-size:1.05cqw;letter-spacing:.14em;color:rgba(255,255,255,.5)}
@container (max-aspect-ratio: 4/5){
  .v-event-live-lower-third .rig{top:3cqw}
  .v-event-live-lower-third .rig i{width:3cqw;height:3cqw}
  .v-event-live-lower-third .sbeam{width:40cqw;height:110cqw}
  .v-event-live-lower-third .sb1{left:20cqw}.v-event-live-lower-third .sb2{left:60cqw}
  .v-event-live-lower-third .screen{left:6cqw;width:88cqw;top:20cqw;height:50cqw;border-radius:1.4cqw}
  .v-event-live-lower-third .slide b{font-size:10.6cqw}
  .v-event-live-lower-third .floor{top:78cqw}
  .v-event-live-lower-third .spot{left:2cqw;top:68cqw;width:70cqw;height:76cqw}
  .v-event-live-lower-third .spk{left:16cqw;top:72cqw;width:40cqw;height:56cqw}
  .v-event-live-lower-third .haze{top:70cqw;width:160cqw;height:60cqw}
  .v-event-live-lower-third .crowd{height:34cqw;bottom:8cqw;left:-20cqw;right:-20cqw}
  .v-event-live-lower-third .phone{width:2.6cqw;height:4.4cqw}
  .v-event-live-lower-third .ph1{left:62cqw;top:146cqw}.v-event-live-lower-third .ph2{left:84cqw;top:150cqw}
  .v-event-live-lower-third .live{left:6cqw;top:8cqw;gap:1.6cqw}
  .v-event-live-lower-third .live b{font-size:3.4cqw;padding:1.2cqw 2cqw;gap:1.2cqw}
  .v-event-live-lower-third .live b i{width:1.8cqw;height:1.8cqw}
  .v-event-live-lower-third .live span{font-size:3.2cqw;padding:1.2cqw 2cqw;gap:1.2cqw}
  .v-event-live-lower-third .live svg{width:3.4cqw;height:3.4cqw}
  .v-event-live-lower-third .live span:not(.vw){display:none}
  .v-event-live-lower-third .bug{right:6cqw;top:9cqw;font-size:3.2cqw;gap:1.6cqw}
  .v-event-live-lower-third .bug .mk{width:4.4cqw;height:4.4cqw}
  .v-event-live-lower-third .l3{left:5cqw;right:5cqw;top:122cqw}
  .v-event-live-lower-third .acc{width:1.6cqw}
  .v-event-live-lower-third .nm{margin-left:2.6cqw;font-size:8.4cqw;gap:3cqw;padding:2cqw 4cqw}
  .v-event-live-lower-third .wave{height:6cqw;gap:.7cqw}
  .v-event-live-lower-third .wave i{width:1cqw}
  .v-event-live-lower-third .role{margin-left:2.6cqw;flex-direction:column;align-items:flex-start;gap:1.4cqw;padding:2.2cqw 4cqw;font-size:5.4cqw;white-space:normal}
  .v-event-live-lower-third .role i{display:none}
  .v-event-live-lower-third .tick{height:10cqw}
  .v-event-live-lower-third .tick b{font-size:3.2cqw;padding:0 3.4cqw}
  .v-event-live-lower-third .track span{font-size:3.6cqw;gap:2cqw;padding-left:5cqw}
  .v-event-live-lower-third .track strong{font-size:3.2cqw}
  .v-event-live-lower-third .track u{font-size:2.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-live-lower-third .sbeam{height:80cqw;width:24cqw}
  .v-event-live-lower-third .screen{left:34cqw;width:60cqw;top:11cqw;height:34cqw}
  .v-event-live-lower-third .floor{top:52cqw}
  .v-event-live-lower-third .spot{left:2cqw;top:4cqw;width:40cqw;height:60cqw}
  .v-event-live-lower-third .spk{left:8cqw;top:18cqw;width:28cqw;height:40cqw}
  .v-event-live-lower-third .crowd{height:22cqw}
  .v-event-live-lower-third .phone{width:1.8cqw;height:3cqw}
  .v-event-live-lower-third .ph1{left:60cqw;top:80cqw}.v-event-live-lower-third .ph2{left:84cqw;top:83cqw}
  .v-event-live-lower-third .live{left:5cqw;top:4cqw}
  .v-event-live-lower-third .live b{font-size:2cqw;padding:.8cqw 1.4cqw}
  .v-event-live-lower-third .live span{font-size:1.9cqw;padding:.8cqw 1.4cqw}
  .v-event-live-lower-third .live svg{width:2.2cqw;height:2.2cqw}
  .v-event-live-lower-third .bug{right:5cqw;top:4.6cqw;font-size:1.9cqw}
  .v-event-live-lower-third .bug .mk{width:2.8cqw;height:2.8cqw}
  .v-event-live-lower-third .l3{left:5cqw;top:62cqw}
  .v-event-live-lower-third .acc{width:1cqw}
  .v-event-live-lower-third .nm{margin-left:1.6cqw;font-size:5cqw;padding:1.2cqw 3cqw;gap:2cqw}
  .v-event-live-lower-third .wave{height:3.6cqw;gap:.45cqw}
  .v-event-live-lower-third .wave i{width:.6cqw}
  .v-event-live-lower-third .role{margin-left:1.6cqw;font-size:2.4cqw;padding:1.1cqw 3cqw;gap:1.8cqw}
  .v-event-live-lower-third .role i{height:2.6cqw}
  .v-event-live-lower-third .tick{height:7cqw}
  .v-event-live-lower-third .tick b{font-size:1.9cqw;padding:0 2.6cqw}
  .v-event-live-lower-third .track span{font-size:2.2cqw;gap:1.4cqw;padding-left:3.4cqw}
  .v-event-live-lower-third .track strong{font-size:2cqw}
  .v-event-live-lower-third .track u{font-size:1.6cqw}
}
@keyframes event-live-lower-third-cam{0%,100%{transform:scale(1.06) translateX(0)}50%{transform:scale(1.1) translateX(-1.2cqw)}}
@keyframes event-live-lower-third-sb1{0%,100%{transform:rotate(18deg)}50%{transform:rotate(4deg)}}
@keyframes event-live-lower-third-sb2{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(6deg)}}
@keyframes event-live-lower-third-screen{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes event-live-lower-third-spot{0%,100%{opacity:1}50%{opacity:.82}}
@keyframes event-live-lower-third-sway{0%,100%{transform:rotate(-.8deg)}50%{transform:rotate(1deg) translateX(.4cqw)}}
@keyframes event-live-lower-third-haze{0%,100%{transform:translateX(0)}50%{transform:translateX(14cqw)}}
@keyframes event-live-lower-third-blink{0%,100%{opacity:1}50%{opacity:.2}}
@keyframes event-live-lower-third-acc{0%,6%{transform:scaleY(0)}13%,84%{transform:scaleY(1)}92%,100%{transform:scaleY(0)}}
@keyframes event-live-lower-third-nm{0%,9%{clip-path:inset(0 100% 0 0)}21%,82%{clip-path:inset(0 0 0 0)}90%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes event-live-lower-third-txt{0%,11%{opacity:0;transform:translateX(-3cqw)}25%,82%{opacity:1;transform:none}88%,100%{opacity:0;transform:none}}
@keyframes event-live-lower-third-role{0%,14%{clip-path:inset(0 100% 0 0)}27%,80%{clip-path:inset(0 0 0 0)}88%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes event-live-lower-third-wa{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
@keyframes event-live-lower-third-wb{0%,100%{transform:scaleY(.9)}50%{transform:scaleY(.3)}}
@keyframes event-live-lower-third-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
`,
};

export const eventRecapStats: SceneSpec = {
  id: "event-recap-stats",
  slug: "mg-event-recap-stats",
  kind: "scene",
  name: "Event Recap Numbers",
  job: "data",
  language: "kinetic-poster",
  mechanic: "digit-roll-stat-row",
  energy: "punchy",
  settle: 2.7,
  colors: { ink: "#FFFFFF", accent: "#C8FF3A", secondary: "#5865FF", paper: "#2330F0" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["recap", "stats", "numbers", "event"],
  fields: [
    { key: "headline", label: "Headline", default: "Meridian 25, in numbers.", maxChars: 34, role: "headline" },
    { key: "v1", label: "Attendees", default: "2,400", maxChars: 7, role: "value" },
    { key: "v2", label: "Talks", default: "86", maxChars: 5, role: "value" },
    { key: "v3", label: "Countries", default: "41", maxChars: 5, role: "value" },
  ],
  html: `<div class="dots"></div><div class="rings"><i></i><i></i><i></i></div>
<div class="top"><span>${MK}Meridian Summit</span><span class="pill">2025 recap</span></div>
<div class="hl" data-21st-slot="headline">{{headline|words}}</div>
<div class="stats">
<div class="st s1"><div class="lab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.6 3-5.6 6-5.6s5.4 2 6 5.6M16 4.8a3.2 3.2 0 0 1 0 6.4M18 14.6c1.8.7 2.8 2.6 3 5.4"/></svg>Attendees</div><div class="num" data-21st-slot="v1">{{v1|chars}}</div><div class="sub">Sold out three weeks early</div></div>
<div class="st s2"><div class="lab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>Talks</div><div class="num" data-21st-slot="v2">{{v2|chars}}</div><div class="sub">Across 3 stages</div></div>
<div class="st s3"><div class="lab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>Countries</div><div class="num" data-21st-slot="v3">{{v3|chars}}</div><div class="sub">From six continents</div></div>
</div>
<div class="foot"><span><b>Meridian 26</b> · Nov 18–20 · Lisbon</span><span class="btn">Join them${ARR}</span></div>`,
  css: `
.v-event-recap-stats{color:var(--ink);font-family:var(--font-body)}
.v-event-recap-stats *{box-sizing:border-box}
.v-event-recap-stats[data-backdrop="on"]{background:radial-gradient(60cqw 40cqw at 88% -5%,var(--secondary) 0,transparent 70%),radial-gradient(50cqw 40cqw at 0% 110%,color-mix(in srgb,var(--paper) 75%,#000) 0,transparent 70%),var(--paper)}
.v-event-recap-stats[data-backdrop="off"] .dots,.v-event-recap-stats[data-backdrop="off"] .rings{display:none}
.v-event-recap-stats .dots{position:absolute;inset:0;background-image:radial-gradient(circle,color-mix(in srgb,var(--ink) 18%,transparent) 0 .12cqw,transparent .16cqw);background-size:2.5cqw 2.5cqw;-webkit-mask-image:linear-gradient(105deg,#000,transparent 55%);mask-image:linear-gradient(105deg,#000,transparent 55%)}
.v-event-recap-stats .rings{position:absolute;right:-14cqw;bottom:-26cqw;width:56cqw;height:56cqw;animation:event-recap-stats-ghost 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-recap-stats .rings i{position:absolute;border-radius:50%;border:.12cqw solid color-mix(in srgb,var(--ink) 16%,transparent)}
.v-event-recap-stats .rings i:nth-child(1){inset:0}.v-event-recap-stats .rings i:nth-child(2){inset:14%}.v-event-recap-stats .rings i:nth-child(3){inset:28%}
.v-event-recap-stats .top{position:absolute;left:5cqw;right:5cqw;top:4.4cqw;display:flex;justify-content:space-between;align-items:center;font-size:1.3cqw;font-weight:600;letter-spacing:.14em;text-transform:uppercase;animation:event-recap-stats-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-recap-stats .top span{display:flex;align-items:center;gap:.8cqw}
.v-event-recap-stats .mk{width:1.8cqw;height:1.8cqw;display:block}
.v-event-recap-stats .pill{padding:.5cqw 1.2cqw;border-radius:10cqw;border:1px solid color-mix(in srgb,var(--ink) 40%,transparent);letter-spacing:.1em}
.v-event-recap-stats .hl{position:absolute;left:4.8cqw;right:5cqw;top:8.6cqw;font-family:"Instrument Serif",serif;font-family:var(--font-display);font-weight:700;font-size:5.4cqw;line-height:1.15;letter-spacing:-.03em}
.v-event-recap-stats .hl .w{display:inline-block;--delay:calc(var(--i) * .07s);animation:event-recap-stats-rise 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-recap-stats .hl .w:nth-last-of-type(-n+2){color:var(--accent)}
.v-event-recap-stats .stats{position:absolute;left:5cqw;right:5cqw;top:20.5cqw;display:grid;grid-template-columns:1.45fr 1fr 1fr;gap:3cqw}
.v-event-recap-stats .st{position:relative;padding-top:1.6cqw;animation:event-recap-stats-col 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-recap-stats .s2{--delay:.12s}.v-event-recap-stats .s3{--delay:.24s}
.v-event-recap-stats .st::before{content:"";position:absolute;left:0;right:0;top:0;height:.2cqw;background:color-mix(in srgb,var(--ink) 85%,transparent);transform-origin:0 50%;animation:event-recap-stats-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-recap-stats .lab{display:flex;align-items:center;gap:.7cqw;font-size:1.25cqw;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ink) 82%,transparent)}
.v-event-recap-stats .lab svg{width:1.6cqw;height:1.6cqw}
.v-event-recap-stats .num{display:flex;margin-top:.6cqw;height:1.3em;overflow:hidden;font-family:var(--font-display);font-weight:600;font-size:8.4cqw;line-height:1.3;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.v-event-recap-stats .c{position:relative;display:block;--delay:calc(var(--i) * .1s);animation:event-recap-stats-roll 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-recap-stats .c::before{content:"0\\A 1\\A 2\\A 3\\A 4\\A 5\\A 6\\A 7\\A 8\\A 9";position:absolute;left:0;right:0;bottom:100%;white-space:pre;text-align:center;line-height:1.3}
.v-event-recap-stats .sub{margin-top:.6cqw;font-size:1.45cqw;color:color-mix(in srgb,var(--ink) 74%,transparent)}
.v-event-recap-stats .foot{position:absolute;left:5cqw;right:5cqw;bottom:4cqw;display:flex;justify-content:space-between;align-items:center;padding-top:1.8cqw;border-top:1px solid color-mix(in srgb,var(--ink) 25%,transparent);font-size:1.5cqw;animation:event-recap-stats-foot 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-recap-stats .foot b{font-weight:600}
.v-event-recap-stats .btn{display:flex;align-items:center;gap:.7cqw;padding:.9cqw 1.8cqw;border-radius:10cqw;background:var(--ink);color:var(--paper);font-size:1.45cqw;font-weight:700;box-shadow:0 1cqw 2.4cqw rgba(10,14,120,.3)}
.v-event-recap-stats .btn svg{width:1.4cqw;height:1.4cqw;animation:event-recap-stats-nudge 1s ease-in-out infinite}
@container (max-aspect-ratio: 4/5){
  .v-event-recap-stats .rings{width:110cqw;height:110cqw;right:-40cqw;bottom:-30cqw}
  .v-event-recap-stats .top{left:7cqw;right:7cqw;top:7cqw;font-size:3.2cqw}
  .v-event-recap-stats .top span{gap:1.6cqw}
  .v-event-recap-stats .mk{width:4.4cqw;height:4.4cqw}
  .v-event-recap-stats .pill{padding:1.2cqw 2.6cqw}
  .v-event-recap-stats .hl{left:7cqw;right:7cqw;top:17cqw;font-size:11.4cqw}
  .v-event-recap-stats .stats{left:7cqw;right:7cqw;top:50cqw;grid-template-columns:1fr;gap:4cqw}
  .v-event-recap-stats .st{padding-top:3cqw}
  .v-event-recap-stats .st::before{height:.5cqw}
  .v-event-recap-stats .lab{font-size:3.4cqw;gap:1.6cqw}
  .v-event-recap-stats .lab svg{width:4.2cqw;height:4.2cqw}
  .v-event-recap-stats .num{font-size:17cqw;margin-top:.6cqw}
  .v-event-recap-stats .sub{font-size:3.6cqw;margin-top:.4cqw}
  .v-event-recap-stats .foot{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-recap-stats .rings{width:80cqw;height:80cqw}
  .v-event-recap-stats .top{left:6cqw;right:6cqw;top:6cqw;font-size:2cqw}
  .v-event-recap-stats .mk{width:2.8cqw;height:2.8cqw}
  .v-event-recap-stats .hl{left:6cqw;right:6cqw;top:12.6cqw;font-size:8cqw}
  .v-event-recap-stats .stats{left:6cqw;right:6cqw;top:35cqw;grid-template-columns:1fr 1fr;gap:3cqw 4cqw}
  .v-event-recap-stats .s1{grid-column:1 / -1}
  .v-event-recap-stats .st{padding-top:2cqw}
  .v-event-recap-stats .st::before{height:.3cqw}
  .v-event-recap-stats .lab{font-size:1.9cqw;gap:1cqw}
  .v-event-recap-stats .lab svg{width:2.4cqw;height:2.4cqw}
  .v-event-recap-stats .num{font-size:12cqw}
  .v-event-recap-stats .sub{font-size:2.1cqw}
  .v-event-recap-stats .foot{left:6cqw;right:6cqw;bottom:5cqw;font-size:2.2cqw;padding-top:2.2cqw}
  .v-event-recap-stats .btn{font-size:2.2cqw;padding:1.3cqw 2.6cqw;gap:1cqw}
  .v-event-recap-stats .btn svg{width:2.2cqw;height:2.2cqw}
}
@keyframes event-recap-stats-ghost{0%,100%{transform:translateX(0)}50%{transform:translateX(-3cqw)}}
@keyframes event-recap-stats-fade{0%,4%{opacity:0;transform:translateY(-1cqw)}16%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes event-recap-stats-rise{0%,4%{clip-path:inset(0 -5% 100% -5%);transform:translateY(60%)}20%,84%{clip-path:inset(-20% -5% -20% -5%);transform:none}94%,100%{clip-path:inset(-20% -5% 100% -5%);transform:translateY(-60%)}}
@keyframes event-recap-stats-col{0%,6%{opacity:0;transform:translateY(2cqw)}16%,84%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes event-recap-stats-rule{0%,6%{transform:scaleX(0)}26%,100%{transform:scaleX(1)}}
@keyframes event-recap-stats-roll{0%,8%{transform:translateY(13em)}36%,100%{transform:translateY(0)}}
@keyframes event-recap-stats-foot{0%,30%{opacity:0;transform:translateY(1.5cqw)}44%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(1cqw)}}
@keyframes event-recap-stats-nudge{0%,100%{transform:translateX(0)}50%{transform:translateX(.35cqw)}}
`,
};

export const eventBadgeCta: SceneSpec = {
  id: "event-badge-cta",
  slug: "mg-event-badge-cta",
  kind: "scene",
  name: "Lanyard Badge Invite",
  job: "cta",
  language: "aura",
  mechanic: "lanyard-badge-drop-swing",
  energy: "default",
  settle: 3.3,
  colors: { ink: "#1B1530", accent: "#E8452B", secondary: "#6C4FF5", paper: "#F6E3EE" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["badge", "invite", "event", "register"],
  fields: [
    { key: "headline", label: "Headline", default: "See you in Lisbon.", maxChars: 26, role: "headline" },
    { key: "name", label: "Badge name", default: "Mira Sato", maxChars: 16, role: "name" },
    { key: "cta", label: "Button", default: "Register at meridian.events", maxChars: 32, role: "cta" },
    { key: "note", label: "Note", default: "this could be you", maxChars: 22, role: "caption" },
  ],
  html: `<div class="blob bl1"></div><div class="blob bl2"></div>
<div class="shadow"></div>
<div class="swing">
<div class="strap"><span>MERIDIAN 26 · MERIDIAN 26</span></div>
<div class="badge"><div class="face">
<div class="band"><div>${MK}Meridian Summit</div><small>Lisbon · Nov 18–20, 2026</small></div>
<i class="hole"></i>
<div class="av"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><g fill="#3D2C8F"><path d="M12 100C14 82 30 74 50 74C70 74 86 82 88 100Z"/><path d="M44 58h12v18H44z"/><ellipse cx="50" cy="46" rx="14" ry="16.5"/></g><circle cx="50" cy="24" r="8" fill="#1D1452"/><path d="M36 45C35 33 42 29 50 29C58 29 65 33 64 45C59 38 41 38 36 45Z" fill="#1D1452"/></svg></div>
<div class="nm" data-21st-slot="name">{{name}}</div>
<div class="rl"><b>Staff Engineer</b><br>Quiet Labs</div>
<div class="talk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>NOV 19 · 11:30 · LAB C</div>
<div class="ribbon"><b>Speaker</b><span>Nº 0217</span></div>
</div></div>
<i class="clip"></i>
</div>
<div class="note"><span data-21st-slot="note">{{note}}</span><svg viewBox="0 0 130 90" aria-hidden="true"><path d="M110 6C96 40 64 60 18 66" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M32 54L16 66L34 76" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="hl" data-21st-slot="headline">{{headline|words}}</div>
<div class="sub">Nov 18–20 · 3 days · 120 speakers</div>
<div class="btn"><span data-21st-slot="cta">{{cta}}</span>${ARR}</div>
<div class="proof"><span class="faces"><i style="--g:linear-gradient(160deg,#FFC4A3,#F27D57)"></i><i style="--g:linear-gradient(160deg,#D3E6C9,#6E9C78)"></i><i style="--g:linear-gradient(160deg,#DCD3FF,#7B66DE)"></i></span><span><b>2,400+</b> already going</span></div>`,
  css: `
.v-event-badge-cta{color:var(--ink);font-family:var(--font-body)}
.v-event-badge-cta *{box-sizing:border-box}
.v-event-badge-cta[data-backdrop="on"]{background:linear-gradient(140deg,color-mix(in srgb,var(--paper) 82%,var(--accent)) 0%,var(--paper) 45%,color-mix(in srgb,var(--paper) 82%,var(--secondary)) 100%)}
.v-event-badge-cta[data-backdrop="off"] .blob,.v-event-badge-cta[data-backdrop="off"] .shadow{display:none}
.v-event-badge-cta .blob{position:absolute;border-radius:50%;filter:blur(7cqw)}
.v-event-badge-cta .bl1{left:-12cqw;top:30cqw;width:40cqw;height:40cqw;background:var(--accent);opacity:.35;animation:event-badge-cta-blob1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-badge-cta .bl2{right:-14cqw;top:-14cqw;width:44cqw;height:44cqw;background:var(--secondary);opacity:.35;animation:event-badge-cta-blob2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-badge-cta .shadow{position:absolute;left:12cqw;top:50.4cqw;width:20cqw;height:2.4cqw;border-radius:50%;background:radial-gradient(closest-side,rgba(60,30,90,.3),transparent);animation:event-badge-cta-shadow 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-badge-cta .swing{position:absolute;left:10cqw;top:0;width:24cqw;aspect-ratio:44/84;container-type:inline-size;transform-origin:50% 0;animation:event-badge-cta-swing 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-badge-cta .strap{position:absolute;left:42cqw;top:-4.5cqw;width:16cqw;height:47.7cqw;overflow:hidden;background:linear-gradient(90deg,color-mix(in srgb,var(--accent) 85%,#000),var(--accent) 40%,color-mix(in srgb,var(--accent) 90%,#000));box-shadow:inset 0 0 0 .45cqw rgba(0,0,0,.06)}
.v-event-badge-cta .strap span{position:absolute;left:50%;top:2.3cqw;transform:translateX(-50%);writing-mode:vertical-rl;white-space:nowrap;font-family:var(--font-display);font-weight:700;font-size:4.5cqw;letter-spacing:.24em;color:rgba(255,255,255,.88)}
.v-event-badge-cta .clip{position:absolute;left:43.6cqw;top:39.5cqw;width:12.7cqw;height:12.3cqw;border-radius:2.7cqw;background:linear-gradient(#F2F2F6,#A9A7B6);box-shadow:0 .9cqw 1.8cqw rgba(40,20,60,.3),inset 0 .45cqw 0 #fff}
.v-event-badge-cta .clip::after{content:"";position:absolute;left:3.2cqw;right:3.2cqw;bottom:2cqw;height:3.2cqw;border-radius:1.1cqw;background:rgba(40,30,60,.25)}
.v-event-badge-cta .badge{position:absolute;left:0;top:47.7cqw;width:100cqw;height:136.4cqw}
.v-event-badge-cta .face{position:absolute;inset:0;overflow:hidden;border-radius:5.45cqw;background:color-mix(in srgb,var(--paper) 14%,#fff);color:#1B1530;box-shadow:0 .7cqw 1.4cqw rgba(40,20,60,.08),0 7.7cqw 11.4cqw -2.3cqw rgba(60,30,90,.38)}
.v-event-badge-cta .hole{position:absolute;left:50%;top:4.5cqw;z-index:2;width:20.5cqw;height:3.9cqw;margin-left:-10.2cqw;border-radius:2.3cqw;background:rgba(27,21,48,.16);box-shadow:inset 0 .6cqw .9cqw rgba(0,0,0,.25)}
.v-event-badge-cta .band{position:absolute;left:0;right:0;top:0;height:45.5cqw;padding:12.7cqw 7.7cqw 0;color:#fff;background:radial-gradient(68cqw 45cqw at 85% 0%,rgba(255,255,255,.35),transparent 70%),linear-gradient(135deg,var(--accent) 0%,color-mix(in srgb,var(--accent) 50%,var(--secondary)) 58%,var(--secondary) 100%)}
.v-event-badge-cta .band div{display:flex;align-items:center;gap:2.3cqw;font-size:4.8cqw;font-weight:700;letter-spacing:-.01em}
.v-event-badge-cta .mk{width:5.9cqw;height:5.9cqw;display:block;flex:none}
.v-event-badge-cta .band small{display:block;margin-top:1.8cqw;font-family:var(--font-mono);font-size:2.7cqw;letter-spacing:.12em;text-transform:uppercase;opacity:.85}
.v-event-badge-cta .av{position:absolute;left:7.7cqw;top:31.8cqw;width:29.5cqw;height:29.5cqw;overflow:hidden;border-radius:50%;border:1.8cqw solid color-mix(in srgb,var(--paper) 14%,#fff);background:radial-gradient(70% 60% at 70% 15%,#FFF0E2,transparent 60%),linear-gradient(160deg,#FFC9A8,#F07A55)}
.v-event-badge-cta .av svg{position:absolute;left:0;bottom:0;width:100%;height:100%}
.v-event-badge-cta .nm{position:absolute;left:7.7cqw;right:5cqw;top:64cqw;font-family:var(--font-display);font-weight:800;font-size:12.3cqw;line-height:1.2;letter-spacing:-.04em;white-space:nowrap}
.v-event-badge-cta .rl{position:absolute;left:7.7cqw;top:81.4cqw;font-size:4.1cqw;line-height:1.35;color:#6C6380}
.v-event-badge-cta .rl b{color:#1B1530;font-weight:600}
.v-event-badge-cta .talk{position:absolute;left:7.7cqw;right:7.7cqw;top:99.1cqw;display:flex;align-items:center;gap:1.8cqw;padding-top:3.2cqw;border-top:1px dashed rgba(27,21,48,.18);font-family:var(--font-mono);font-size:2.6cqw;letter-spacing:.06em;color:#6C6380}
.v-event-badge-cta .talk svg{width:3.2cqw;height:3.2cqw;color:var(--secondary)}
.v-event-badge-cta .ribbon{position:absolute;left:0;right:0;bottom:0;height:20.5cqw;display:flex;justify-content:space-between;align-items:center;padding:0 7.7cqw;background:#1B1530;color:#fff}
.v-event-badge-cta .ribbon b{font-family:var(--font-display);font-weight:700;font-size:5.9cqw;letter-spacing:.1em;text-transform:uppercase}
.v-event-badge-cta .ribbon span{font-family:var(--font-mono);font-size:2.7cqw;letter-spacing:.1em;color:color-mix(in srgb,var(--accent) 50%,#fff)}
.v-event-badge-cta .note{position:absolute;left:40cqw;top:6cqw;font-family:var(--font-body);font-style:italic;font-weight:600;font-size:2.6cqw;line-height:1.2;color:var(--ink);transform:rotate(-5deg);transform-origin:0 50%}
.v-event-badge-cta .note span{display:block;white-space:nowrap;animation:event-badge-cta-note 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-badge-cta .note svg{display:block;width:7cqw;height:5cqw;margin:.2cqw 0 0 -1.4cqw;overflow:visible;color:var(--ink);animation:event-badge-cta-arrow 6s cubic-bezier(.65,0,.35,1) infinite}
.v-event-badge-cta .hl{position:absolute;left:41cqw;right:5cqw;top:19cqw;font-family:var(--font-display);font-weight:800;font-size:6.4cqw;line-height:1.1;letter-spacing:-.045em}
.v-event-badge-cta .hl .w{display:inline-block;--delay:calc(var(--i) * .08s);animation:event-badge-cta-h 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-badge-cta .hl .w:last-child{color:var(--accent)}
.v-event-badge-cta .sub{position:absolute;left:41cqw;top:31cqw;font-size:1.6cqw;color:color-mix(in srgb,var(--ink) 72%,transparent);animation:event-badge-cta-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-badge-cta .btn{position:absolute;left:41cqw;top:35.4cqw;display:flex;align-items:center;gap:1cqw;padding:1.2cqw 2.2cqw;border-radius:10cqw;background:var(--ink);color:var(--paper);font-size:1.7cqw;line-height:1.2;font-weight:600;white-space:nowrap;box-shadow:0 1.6cqw 3cqw -1cqw rgba(27,21,48,.5);animation:event-badge-cta-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-badge-cta .btn svg{width:1.7cqw;height:1.7cqw;flex:none}
.v-event-badge-cta .proof{position:absolute;left:41cqw;top:42.4cqw;display:flex;align-items:center;gap:1cqw;font-size:1.4cqw;color:color-mix(in srgb,var(--ink) 72%,transparent);animation:event-badge-cta-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-event-badge-cta .proof b{color:var(--ink);font-weight:700}
.v-event-badge-cta .faces{display:flex}
.v-event-badge-cta .faces i{width:2.6cqw;height:2.6cqw;margin-left:-.8cqw;border-radius:50%;border:.3cqw solid var(--paper);background:var(--g)}
.v-event-badge-cta .faces i:first-child{margin-left:0}
@container (max-aspect-ratio: 4/5){
  .v-event-badge-cta .bl1{width:80cqw;height:80cqw;top:100cqw}
  .v-event-badge-cta .bl2{width:80cqw;height:80cqw}
  .v-event-badge-cta .swing{left:20cqw;width:52cqw}
  .v-event-badge-cta .shadow{left:26cqw;top:103cqw;width:40cqw;height:5cqw}
  .v-event-badge-cta .note{left:56cqw;right:4cqw;top:7cqw;font-size:5.4cqw}
  .v-event-badge-cta .note span{white-space:normal}
  .v-event-badge-cta .note svg{width:16cqw;height:11cqw;margin-left:-4cqw}
  .v-event-badge-cta .hl{left:7cqw;right:7cqw;top:110cqw;font-size:13cqw}
  .v-event-badge-cta .sub{left:7cqw;top:142cqw;font-size:4cqw}
  .v-event-badge-cta .btn{left:7cqw;right:7cqw;top:auto;bottom:8cqw;justify-content:space-between;white-space:normal;font-size:5.4cqw;gap:2.4cqw;padding:3.2cqw 5.4cqw}
  .v-event-badge-cta .btn svg{width:5.4cqw;height:5.4cqw}
  .v-event-badge-cta .proof{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-event-badge-cta .bl1{left:-12cqw;top:52cqw;width:52cqw;height:52cqw}
  .v-event-badge-cta .bl2{width:58cqw;height:58cqw}
  .v-event-badge-cta .swing{left:7cqw;width:42cqw}
  .v-event-badge-cta .shadow{left:11cqw;top:88cqw;width:34cqw;height:4cqw}
  .v-event-badge-cta .note{left:55cqw;top:14cqw;font-size:4.4cqw}
  .v-event-badge-cta .note svg{width:13cqw;height:9cqw;margin-left:-2cqw}
  .v-event-badge-cta .hl{left:55cqw;right:4cqw;top:37cqw;font-size:7.4cqw}
  .v-event-badge-cta .sub{left:55cqw;top:57cqw;font-size:1.9cqw}
  .v-event-badge-cta .btn{left:55cqw;right:4cqw;top:62cqw;white-space:normal;font-size:2.2cqw;gap:1.2cqw;padding:1.6cqw 2.4cqw}
  .v-event-badge-cta .btn svg{width:2.2cqw;height:2.2cqw}
  .v-event-badge-cta .proof{left:55cqw;top:74cqw;font-size:1.9cqw;gap:1.2cqw}
  .v-event-badge-cta .faces i{width:4cqw;height:4cqw;margin-left:-1.2cqw;border-width:.4cqw}
}
@keyframes event-badge-cta-blob1{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,-4cqw)}}
@keyframes event-badge-cta-blob2{0%,100%{transform:translate(0,0)}50%{transform:translate(-5cqw,5cqw)}}
@keyframes event-badge-cta-shadow{0%{opacity:0;transform:scale(.4)}14%,86%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.4)}}
@keyframes event-badge-cta-swing{0%{transform:translateY(-110%) rotate(0deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}14%{transform:translateY(0) rotate(5deg)}22%{transform:translateY(0) rotate(-3deg)}30%{transform:translateY(0) rotate(1.6deg)}38%{transform:translateY(0) rotate(-.8deg)}46%{transform:translateY(0) rotate(.4deg)}56%{transform:translateY(0) rotate(0deg)}66%{transform:translateY(0) rotate(-1.6deg)}76%{transform:translateY(0) rotate(.8deg)}86%{transform:translateY(0) rotate(0deg);animation-timing-function:cubic-bezier(.6,0,.8,.2)}100%{transform:translateY(-110%) rotate(-3deg)}}
@keyframes event-badge-cta-note{0%,22%{clip-path:inset(-20% 100% -20% -5%)}36%,86%{clip-path:inset(-20% -5% -20% -5%)}94%,100%{clip-path:inset(-20% -5% -20% 100%)}}
@keyframes event-badge-cta-arrow{0%,30%{clip-path:inset(0 0 0 100%)}42%,86%{clip-path:inset(0 0 0 0)}94%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes event-badge-cta-h{0%,8%{clip-path:inset(0 -5% 100% -5%);transform:translateY(50%)}22%,86%{clip-path:inset(-20% -5% -20% -5%);transform:none}96%,100%{clip-path:inset(-20% -5% 100% -5%);transform:translateY(-50%)}}
@keyframes event-badge-cta-sub{0%,18%{opacity:0;transform:translateY(1.5cqw)}32%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(1cqw)}}
@keyframes event-badge-cta-btn{0%,20%{opacity:0;transform:translateY(2cqw) scale(.94)}34%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(1cqw)}}
`,
};

export const EVENTS_SCENES: SceneSpec[] = [eventAnnounceReel, eventHeroGrid, eventSpeakers, eventAgenda, eventCountdown, eventTicket, eventVenueMap, eventLiveLowerThird, eventRecapStats, eventBadgeCta];
