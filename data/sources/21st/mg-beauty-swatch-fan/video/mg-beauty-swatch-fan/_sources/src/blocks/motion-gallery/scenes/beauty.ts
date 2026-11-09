// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const ARCH = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V11a7 7 0 0 1 14 0v10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="13.4" r="2.3" fill="currentColor"/></svg>`;
const SPARK_PATH = `<path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/>`;
const STAR = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>`;
const STARS5 = STAR + STAR + STAR + STAR + STAR;
const BURST = `<polygon points="50.0,0.0 57.1,9.6 67.1,3.0 70.5,14.5 82.1,11.7 81.4,23.6 93.3,25.0 88.5,36.0 99.2,41.3 91.0,50.0 99.2,58.7 88.5,64.0 93.3,75.0 81.4,76.4 82.1,88.3 70.5,85.5 67.1,97.0 57.1,90.4 50.0,100.0 42.9,90.4 32.9,97.0 29.5,85.5 17.9,88.3 18.6,76.4 6.7,75.0 11.5,64.0 0.8,58.7 9.0,50.0 0.8,41.3 11.5,36.0 6.7,25.0 18.6,23.6 17.9,11.7 29.5,14.5 32.9,3.0 42.9,9.6"/>`;

export const beautySerumHero: SceneSpec = {
  id: "beauty-serum-hero",
  slug: "mg-beauty-serum-hero",
  name: "Serum Bottle Hero",
  kind: "scene",
  job: "titles",
  language: "editorial",
  mechanic: "bottle-rise-onto-podium",
  energy: "calm",
  settle: 4.8,
  colors: { ink: "#3B2219", accent: "#D17834", secondary: "#984C3E", paper: "#F5CDB4" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "skincare", "product", "hero"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "velline skin", maxChars: 22, role: "kicker" },
    { key: "headline", label: "Product name", default: "Dew Serum.", maxChars: 16, role: "headline" },
    { key: "sub", label: "Promise", default: "glass skin in 14 days", maxChars: 30, role: "body" },
    { key: "cta", label: "Button", default: "Shop the serum · $48", maxChars: 24, role: "cta" },
  ],
  html: `<div class="prod">
  <i class="glow"></i>
  <div class="podium"><i class="front"></i><i class="upper"></i></div>
  <i class="shadow"></i>
  <div class="bottle">
    <i class="bulb"></i>
    <i class="collar"></i>
    <div class="glass">
      <i class="pipette"></i>
      <div class="lbl">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V11a7 7 0 0 1 14 0v10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="13.4" r="2.3" fill="currentColor"/></svg>
        <b>velline</b>
        <i>Dew Serum</i>
        <small>hyaluronic 2% + peptides</small>
        <em>30 ml · 1 fl oz</em>
      </div>
      <i class="hl"></i>
      <i class="sweep"></i>
    </div>
  </div>
  <i class="bd b1"></i><i class="bd b2"></i><i class="bd b3"></i><i class="bd b4"></i><i class="bd b5"></i><i class="bd b6"></i>
  <i class="drip"></i><i class="ripple"></i>
</div>
<div class="copy">
<div class="eyebrow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V11a7 7 0 0 1 14 0v10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="13.4" r="2.3" fill="currentColor"/></svg><span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="h1"><span data-21st-slot="headline">{{headline}}</span></div>
<div class="h2"><span data-21st-slot="sub">{{sub}}</span></div>
<div class="act"><span class="bttn" data-21st-slot="cta">{{cta}}</span></div>
</div>`,
  css: `
.v-beauty-serum-hero{color:var(--ink);font-family:var(--font-body)}
.v-beauty-serum-hero > *{--u:1cqw}
.v-beauty-serum-hero[data-backdrop="on"]{background:radial-gradient(120% 95% at 72% 38%,color-mix(in srgb,var(--paper),#fff 55%) 0%,var(--paper) 48%,color-mix(in srgb,var(--paper),var(--secondary) 22%) 100%)}
.v-beauty-serum-hero[data-backdrop="off"] .glow{display:none}
.v-beauty-serum-hero .prod{position:absolute;left:50cqw;top:0;width:calc(46*var(--u));height:calc(59*var(--u))}
.v-beauty-serum-hero .glow{position:absolute;left:calc(-3*var(--u));top:calc(-3*var(--u));width:calc(46*var(--u));height:calc(46*var(--u));border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--paper),#fff 80%),color-mix(in srgb,var(--paper),#fff 40%) 50%,transparent);animation:beauty-serum-hero-glow 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-serum-hero .podium{position:absolute;left:calc(5*var(--u));top:calc(43*var(--u));width:calc(30*var(--u));height:calc(16*var(--u));animation:beauty-serum-hero-podium 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .podium .front{position:absolute;left:0;right:0;top:calc(3.5*var(--u));bottom:0;background:linear-gradient(90deg,color-mix(in srgb,var(--paper),var(--secondary) 35%) 0%,color-mix(in srgb,var(--paper),var(--secondary) 12%) 30%,color-mix(in srgb,var(--paper),#fff 25%) 50%,color-mix(in srgb,var(--paper),var(--secondary) 18%) 72%,color-mix(in srgb,var(--paper),var(--secondary) 45%) 100%)}
.v-beauty-serum-hero .podium .upper{position:absolute;left:0;top:0;width:100%;height:calc(7*var(--u));border-radius:50%;background:radial-gradient(70% 80% at 46% 38%,color-mix(in srgb,var(--paper),#fff 75%) 0%,color-mix(in srgb,var(--paper),#fff 40%) 60%,color-mix(in srgb,var(--paper),#fff 10%) 100%);box-shadow:inset 0 calc(-.5*var(--u)) calc(.9*var(--u)) rgba(170,90,60,.16)}
.v-beauty-serum-hero .shadow{position:absolute;left:calc(11*var(--u));top:calc(45.2*var(--u));width:calc(18*var(--u));height:calc(2.6*var(--u));border-radius:50%;background:radial-gradient(closest-side,rgba(95,38,16,.5),rgba(95,38,16,0));animation:beauty-serum-hero-shadow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .bottle{position:absolute;left:calc(12.5*var(--u));top:calc(14.6*var(--u));width:calc(15*var(--u));display:flex;flex-direction:column;align-items:center;animation:beauty-serum-hero-bottle 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .bulb{width:calc(6.2*var(--u));height:calc(7.6*var(--u));border-radius:50% 50% 16% 16%/64% 64% 12% 12%;background:linear-gradient(90deg,color-mix(in srgb,var(--secondary),#000 50%) 0%,var(--secondary) 30%,color-mix(in srgb,var(--secondary),#fff 40%) 45%,color-mix(in srgb,var(--secondary),#fff 10%) 63%,color-mix(in srgb,var(--secondary),#000 52%) 100%);box-shadow:inset 0 calc(-.7*var(--u)) calc(.9*var(--u)) rgba(40,10,5,.35)}
.v-beauty-serum-hero .collar{position:relative;z-index:2;width:calc(7.8*var(--u));height:calc(3.4*var(--u));margin:calc(-.3*var(--u)) 0 calc(-.5*var(--u));border-radius:calc(.5*var(--u));background:repeating-linear-gradient(180deg,rgba(80,50,15,.16) 0 calc(.2*var(--u)),rgba(80,50,15,0) calc(.2*var(--u)) calc(.55*var(--u))),linear-gradient(90deg,#7C5A2A 0%,#D9B57A 28%,#FFF1D2 42%,#C79A5C 62%,#6E4E22 100%);box-shadow:0 calc(.4*var(--u)) calc(.7*var(--u)) rgba(60,25,10,.3)}
.v-beauty-serum-hero .glass{position:relative;width:calc(15*var(--u));height:calc(21.4*var(--u));overflow:hidden;border-radius:calc(4.4*var(--u)) calc(4.4*var(--u)) calc(2.2*var(--u)) calc(2.2*var(--u))/calc(3.8*var(--u)) calc(3.8*var(--u)) calc(2.2*var(--u)) calc(2.2*var(--u));background:linear-gradient(90deg,color-mix(in srgb,var(--accent),#000 60%) 0%,color-mix(in srgb,var(--accent),#000 25%) 16%,var(--accent) 38%,color-mix(in srgb,var(--accent),#fff 28%) 50%,color-mix(in srgb,var(--accent),#000 8%) 68%,color-mix(in srgb,var(--accent),#000 48%) 100%);box-shadow:inset 0 0 0 calc(.22*var(--u)) rgba(255,214,170,.22),inset calc(-1.4*var(--u)) 0 calc(2*var(--u)) rgba(50,15,3,.38),0 calc(2.4*var(--u)) calc(4*var(--u)) rgba(110,45,20,.28)}
.v-beauty-serum-hero .pipette{position:absolute;left:calc(6.5*var(--u));top:0;width:calc(2*var(--u));height:calc(15*var(--u));border-radius:0 0 calc(1*var(--u)) calc(1*var(--u))/0 0 calc(1.4*var(--u)) calc(1.4*var(--u));background:linear-gradient(90deg,rgba(255,236,214,.16),rgba(255,248,236,.5) 38%,rgba(255,236,214,.1) 70%,rgba(255,236,214,.28));box-shadow:inset 0 calc(-4.5*var(--u)) 0 rgba(120,48,12,.4)}
.v-beauty-serum-hero .lbl{position:absolute;left:calc(1.8*var(--u));right:calc(1.8*var(--u));top:calc(7.2*var(--u));height:calc(10.6*var(--u));border-radius:calc(.3*var(--u));background:linear-gradient(90deg,#D3BCA4 0%,#F6EADD 20%,#FFF9F2 48%,#F2E4D5 78%,#CBB298 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(.3*var(--u));color:#3B2219;text-align:center}
.v-beauty-serum-hero .lbl svg{width:calc(1.5*var(--u));height:calc(1.5*var(--u));color:#9A5434}
.v-beauty-serum-hero .lbl b{font:400 calc(2.3*var(--u))/1 var(--font-display);letter-spacing:.03em}
.v-beauty-serum-hero .lbl i{font:italic 400 calc(1.6*var(--u))/1 var(--font-display);color:#7A3E25}
.v-beauty-serum-hero .lbl small{margin-top:calc(.3*var(--u));font:500 calc(.78*var(--u))/1.2 var(--font-body);letter-spacing:.06em;color:#6E4A3A}
.v-beauty-serum-hero .lbl em{font:400 calc(.74*var(--u))/1 var(--font-body);color:#8E6B5A}
.v-beauty-serum-hero .hl{position:absolute;left:calc(1.6*var(--u));top:calc(2*var(--u));width:calc(1.1*var(--u));height:calc(17*var(--u));border-radius:calc(1*var(--u));background:linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.05))}
.v-beauty-serum-hero .sweep{position:absolute;top:-15%;left:0;width:45%;height:130%;background:linear-gradient(90deg,rgba(255,240,225,0),rgba(255,248,238,.7) 50%,rgba(255,240,225,0));animation:beauty-serum-hero-sweep 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-serum-hero .bd{position:absolute;border-radius:50%;background:radial-gradient(circle at 34% 30%,rgba(255,255,255,.95) 0 10%,rgba(255,255,255,.35) 24%,rgba(255,226,206,.1) 56%,color-mix(in srgb,var(--accent) 30%,transparent) 100%);box-shadow:inset calc(-.12*var(--u)) calc(-.18*var(--u)) calc(.3*var(--u)) rgba(150,60,25,.25),0 calc(.3*var(--u)) calc(.6*var(--u)) rgba(140,60,30,.16);animation:beauty-serum-hero-bead 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .b1{left:calc(5*var(--u));top:calc(12*var(--u));width:calc(2.2*var(--u));height:calc(2.2*var(--u));--dy:calc(-2.6*var(--u))}
.v-beauty-serum-hero .b2{left:calc(36*var(--u));top:calc(17*var(--u));width:calc(1.5*var(--u));height:calc(1.5*var(--u));--dy:calc(-1.6*var(--u))}
.v-beauty-serum-hero .b3{left:calc(3*var(--u));top:calc(31*var(--u));width:calc(1.2*var(--u));height:calc(1.2*var(--u));--dy:calc(-1.2*var(--u))}
.v-beauty-serum-hero .b4{left:calc(38*var(--u));top:calc(31*var(--u));width:calc(3*var(--u));height:calc(3*var(--u));--dy:calc(-3*var(--u))}
.v-beauty-serum-hero .b5{left:calc(30*var(--u));top:calc(7*var(--u));width:calc(1*var(--u));height:calc(1*var(--u));--dy:calc(-1*var(--u))}
.v-beauty-serum-hero .b6{left:calc(43*var(--u));top:calc(46*var(--u));width:calc(1.6*var(--u));height:calc(1.6*var(--u));--dy:calc(-2*var(--u))}
.v-beauty-serum-hero .drip{position:absolute;left:calc(31*var(--u));top:0;width:calc(1.1*var(--u));height:calc(1.1*var(--u));border-radius:0 50% 50% 50%;background:radial-gradient(circle at 60% 60%,rgba(255,255,255,.95) 0 14%,rgba(255,230,210,.55) 40%,color-mix(in srgb,var(--accent) 50%,transparent) 100%);animation:beauty-serum-hero-drip 6s linear infinite}
.v-beauty-serum-hero .ripple{position:absolute;left:calc(29*var(--u));top:calc(45.2*var(--u));width:calc(5*var(--u));height:calc(1.4*var(--u));border-radius:50%;border:calc(.16*var(--u)) solid rgba(255,250,244,.9);animation:beauty-serum-hero-ripple 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .copy{position:absolute;left:7cqw;top:12cqw;width:44cqw;display:flex;flex-direction:column;align-items:flex-start}
.v-beauty-serum-hero .eyebrow{display:flex;align-items:center;gap:.9cqw;font:500 1.6cqw/1.2 var(--font-body);letter-spacing:.1em;color:var(--secondary);animation:beauty-serum-hero-in1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .eyebrow svg{width:2.4cqw;height:2.4cqw;flex:none}
.v-beauty-serum-hero .h1,.v-beauty-serum-hero .h2{align-self:stretch;overflow:hidden;padding-block:.2em;margin-block:-.2em}
.v-beauty-serum-hero .h1 span,.v-beauty-serum-hero .h2 span{display:block}
.v-beauty-serum-hero .h1{margin-top:calc(.6cqw - .2em);font:400 7cqw/1.25 var(--font-display);letter-spacing:-.01em}
.v-beauty-serum-hero .h1 span{animation:beauty-serum-hero-l1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .h2{margin-top:calc(.4cqw - .2em);font:italic 400 4.6cqw/1.25 var(--font-display);color:var(--secondary)}
.v-beauty-serum-hero .h2 span{animation:beauty-serum-hero-l2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .act{margin-top:3.6cqw;display:flex;align-items:center;animation:beauty-serum-hero-in3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-serum-hero .bttn{padding:1.3cqw 2.6cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font:500 1.6cqw/1.2 var(--font-body);white-space:nowrap;box-shadow:0 1cqw 2.4cqw rgba(80,30,15,.25)}
@container (max-aspect-ratio: 4/5){
  .v-beauty-serum-hero .copy{left:8cqw;right:8cqw;top:7.5cqh;bottom:6cqh;width:auto}
  .v-beauty-serum-hero .eyebrow{font-size:5.4cqw;gap:3cqw}
  .v-beauty-serum-hero .eyebrow svg{width:8cqw;height:8cqw}
  .v-beauty-serum-hero .h1{margin-top:calc(1cqh - .2em);font-size:13.4cqw}
  .v-beauty-serum-hero .h2{margin-top:calc(.2cqh - .2em);font-size:7.6cqw}
  .v-beauty-serum-hero .prod{--u:1.7cqw;left:calc(50cqw - calc(21*var(--u)));top:30cqh}
  .v-beauty-serum-hero .act{align-self:stretch;margin-top:auto;justify-content:center}
  .v-beauty-serum-hero .bttn{font-size:5.6cqw;padding:3.6cqw 7cqw;border-radius:12cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-serum-hero .copy{left:7cqw;top:8cqw;bottom:9cqw;width:60cqw}
  .v-beauty-serum-hero .eyebrow{font-size:2.6cqw;gap:1.4cqw}
  .v-beauty-serum-hero .eyebrow svg{width:4cqw;height:4cqw}
  .v-beauty-serum-hero .h1{margin-top:calc(1cqw - .2em);font-size:9.6cqw}
  .v-beauty-serum-hero .h2{align-self:flex-start;max-width:46cqw;margin-top:calc(.4cqw - .2em);font-size:5.6cqw}
  .v-beauty-serum-hero .prod{--u:1.12cqw;left:44cqw;top:30cqw}
  .v-beauty-serum-hero .act{margin-top:auto}
  .v-beauty-serum-hero .bttn{font-size:2.6cqw;padding:2cqw 3.8cqw}
}
@keyframes beauty-serum-hero-glow{0%,100%{transform:scale(.94);opacity:.8}50%{transform:scale(1.05);opacity:1}}
@keyframes beauty-serum-hero-podium{0%,2%{opacity:0;transform:translateY(calc(3*var(--u)))}18%,88%{opacity:1;transform:translateY(0)}98%,100%{opacity:0;transform:translateY(calc(2*var(--u)))}}
@keyframes beauty-serum-hero-bottle{0%,6%{opacity:0;transform:translateY(calc(6*var(--u)));filter:blur(calc(1*var(--u)))}26%{opacity:1;transform:translateY(0);filter:blur(0)}56%{transform:translateY(calc(-.6*var(--u)))}86%{opacity:1;transform:translateY(0);filter:blur(0)}97%,100%{opacity:0;transform:translateY(calc(-3*var(--u)));filter:blur(calc(.8*var(--u)))}}
@keyframes beauty-serum-hero-shadow{0%,6%{opacity:0;transform:scale(.5)}26%{opacity:1;transform:scale(1)}56%{transform:scale(.92)}86%{opacity:1;transform:scale(1)}97%,100%{opacity:0;transform:scale(.6)}}
@keyframes beauty-serum-hero-sweep{0%,34%{transform:translateX(-140%) skewX(-16deg)}64%,100%{transform:translateX(260%) skewX(-16deg)}}
@keyframes beauty-serum-hero-bead{0%,8%{opacity:0;transform:translateY(calc(2*var(--u))) scale(.6)}26%{opacity:1;transform:translateY(0) scale(1)}86%{opacity:1;transform:translateY(var(--dy)) scale(1)}97%,100%{opacity:0;transform:translateY(calc(var(--dy) - calc(1*var(--u)))) scale(.8)}}
@keyframes beauty-serum-hero-drip{0%,55%{opacity:0;transform:translateY(calc(-3*var(--u))) rotate(45deg)}56%{opacity:1;transform:translateY(calc(-2*var(--u))) rotate(45deg);animation-timing-function:cubic-bezier(.55,0,1,.45)}64%{opacity:1;transform:translateY(calc(45*var(--u))) rotate(45deg)}65%,100%{opacity:0;transform:translateY(calc(45*var(--u))) rotate(45deg)}}
@keyframes beauty-serum-hero-ripple{0%,63%{opacity:0;transform:scale(.2)}65%{opacity:1;transform:scale(.3)}80%,100%{opacity:0;transform:scale(1.5)}}
@keyframes beauty-serum-hero-in1{0%,4%{opacity:0;transform:translateY(1.2cqw)}18%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes beauty-serum-hero-l1{0%,8%{opacity:1;transform:translateY(110%)}28%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-serum-hero-l2{0%,14%{opacity:1;transform:translateY(110%)}34%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-serum-hero-in3{0%,30%{opacity:0;transform:translateY(1.2cqw)}44%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(-1cqw)}}
`,
};

export const beautyPromoSticker: SceneSpec = {
  id: "beauty-promo-sticker",
  slug: "mg-beauty-promo-sticker",
  name: "Discount Sticker Slap",
  kind: "scene",
  job: "cta",
  language: "neo-brutal",
  mechanic: "sticker-slap-over-headline",
  energy: "punchy",
  settle: 3.3,
  colors: { ink: "#FFF6EC", accent: "#FFE45C", secondary: "#B8124F", paper: "#FF5C85" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["beauty", "promo", "discount", "reels"],
  fields: [
    { key: "headline", label: "Headline", default: "gel mani week.", maxChars: 20, role: "headline" },
    { key: "offer", label: "Sticker", default: "−20%", maxChars: 5, role: "value" },
    { key: "when", label: "Dates", default: "Oct 6–12 · every gel shade", maxChars: 30, role: "caption" },
    { key: "cta", label: "Button", default: "Book via link in bio", maxChars: 22, role: "cta" },
  ],
  html: `<i class="blob o1"></i><i class="blob o2"></i>
<div class="pill">${ARCH}velline studio</div>
<div class="big" data-21st-slot="headline">{{headline|words}}</div>
<svg class="spark s1" viewBox="0 0 24 24" aria-hidden="true">${SPARK_PATH}</svg>
<svg class="spark s2" viewBox="0 0 24 24" aria-hidden="true">${SPARK_PATH}</svg>
<svg class="spark s3" viewBox="0 0 24 24" aria-hidden="true">${SPARK_PATH}</svg>
<svg class="spark s4" viewBox="0 0 24 24" aria-hidden="true">${SPARK_PATH}</svg>
<div class="bob"><div class="bottle"><i class="cap"></i><i class="neck"></i><div class="vial"><i></i><b>velline</b><small>cherry pop · 04</small></div></div></div>
<div class="sticker">
  <svg class="burst sh" viewBox="0 0 100 100" aria-hidden="true">${BURST}</svg>
  <svg class="burst fg" viewBox="0 0 100 100" aria-hidden="true">${BURST}</svg>
  <div class="st-txt"><b data-21st-slot="offer">{{offer}}</b></div>
</div>
<div class="when" data-21st-slot="when">{{when}}</div>
<div class="act"><span data-21st-slot="cta">{{cta}}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
<div class="ribbon"><div class="track"><span>book now<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>20% off gel<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>velline studio<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>book now<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>20% off gel<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>velline studio<svg viewBox="0 0 24 24">${SPARK_PATH}</svg></span><span>book now<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>20% off gel<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>velline studio<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>book now<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>20% off gel<svg viewBox="0 0 24 24">${SPARK_PATH}</svg>velline studio<svg viewBox="0 0 24 24">${SPARK_PATH}</svg></span></div></div>`,
  css: `
.v-beauty-promo-sticker{color:var(--ink);font-family:var(--font-body)}
.v-beauty-promo-sticker > *{--u:.55cqw}
.v-beauty-promo-sticker[data-backdrop="on"]{background:linear-gradient(168deg,color-mix(in srgb,var(--paper),var(--secondary) 12%) 0%,var(--paper) 48%,color-mix(in srgb,var(--paper),var(--accent) 35%) 100%)}
.v-beauty-promo-sticker[data-backdrop="off"] .blob{display:none}
.v-beauty-promo-sticker[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-beauty-promo-sticker .blob{position:absolute;border-radius:50%;filter:blur(7cqw);animation:beauty-promo-sticker-blob 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-promo-sticker .o1{left:-14cqw;top:6cqw;width:50cqw;height:50cqw;background:color-mix(in srgb,var(--paper),#fff 45%);opacity:.55}
.v-beauty-promo-sticker .o2{left:56cqw;top:20cqw;width:50cqw;height:50cqw;background:color-mix(in srgb,var(--accent) 50%,transparent)}
.v-beauty-promo-sticker .pill{position:absolute;left:6cqw;top:4cqw;display:flex;align-items:center;gap:calc(1.6*var(--u));padding:calc(1.8*var(--u)) calc(3.6*var(--u));border-radius:calc(8*var(--u));background:color-mix(in srgb,var(--ink) 18%,transparent);border:1px solid color-mix(in srgb,var(--ink) 45%,transparent);font:500 calc(3.4*var(--u))/1.2 var(--font-body);letter-spacing:.04em;white-space:nowrap;animation:beauty-promo-sticker-chip 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-promo-sticker .pill svg{width:calc(4*var(--u));height:calc(4*var(--u))}
.v-beauty-promo-sticker .big{position:absolute;left:6cqw;top:9.5cqw;width:46cqw;font:800 8.6cqw/1.2 var(--font-display);letter-spacing:-.03em}
.v-beauty-promo-sticker .big .w{display:block;width:max-content;text-shadow:.1em .1em 0 var(--secondary);--delay:calc(var(--i) * .24s);animation:beauty-promo-sticker-w 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-promo-sticker .big .w:last-child{color:var(--accent)}
.v-beauty-promo-sticker .spark{position:absolute;fill:color-mix(in srgb,var(--ink),#fff 40%)}
.v-beauty-promo-sticker .s1{left:46cqw;top:6cqw;width:3.6cqw;height:3.6cqw;animation:beauty-promo-sticker-tw-a 2s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-promo-sticker .s2{left:90cqw;top:18cqw;width:2.4cqw;height:2.4cqw;animation:beauty-promo-sticker-tw-b 2s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-promo-sticker .s3{left:84cqw;top:44cqw;width:2.2cqw;height:2.2cqw;animation:beauty-promo-sticker-tw-a 2s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-promo-sticker .s4{left:54cqw;top:36cqw;width:2.8cqw;height:2.8cqw;animation:beauty-promo-sticker-tw-b 2s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-promo-sticker .bob{position:absolute;left:66cqw;top:4cqw;width:calc(28*var(--u));animation:beauty-promo-sticker-bob 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-promo-sticker .bottle{display:flex;flex-direction:column;align-items:center;transform:rotate(9deg)}
.v-beauty-promo-sticker .cap{width:calc(11*var(--u));height:calc(19*var(--u));border-radius:calc(1.6*var(--u)) calc(1.6*var(--u)) calc(.6*var(--u)) calc(.6*var(--u));background:linear-gradient(90deg,#1A0A10 0%,#4E2633 34%,#2A1219 58%,#12060A 100%);box-shadow:inset 0 calc(-.6*var(--u)) 0 rgba(255,255,255,.08)}
.v-beauty-promo-sticker .neck{width:calc(14*var(--u));height:calc(2.6*var(--u));border-radius:calc(.4*var(--u));background:linear-gradient(90deg,rgba(255,255,255,.35),rgba(255,255,255,.75) 40%,rgba(255,255,255,.3))}
.v-beauty-promo-sticker .vial{position:relative;width:calc(28*var(--u));height:calc(27*var(--u));border-radius:calc(5*var(--u));background:radial-gradient(120% 95% at 30% 20%,color-mix(in srgb,var(--secondary),#fff 40%) 0%,var(--secondary) 46%,color-mix(in srgb,var(--secondary),#000 45%) 100%);box-shadow:inset 0 0 0 calc(1.2*var(--u)) rgba(255,255,255,.18),inset calc(-2*var(--u)) calc(-2.4*var(--u)) calc(4*var(--u)) rgba(60,0,15,.45),0 calc(3*var(--u)) calc(6*var(--u)) rgba(140,10,50,.3);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(.8*var(--u))}
.v-beauty-promo-sticker .vial i{position:absolute;left:calc(2.6*var(--u));top:calc(2.6*var(--u));width:calc(2.8*var(--u));height:calc(19*var(--u));border-radius:calc(2*var(--u));background:linear-gradient(180deg,rgba(255,255,255,.8),rgba(255,255,255,0))}
.v-beauty-promo-sticker .vial b{font:400 calc(4.4*var(--u))/1 var(--font-display);color:#FFE9EC;letter-spacing:.02em}
.v-beauty-promo-sticker .vial small{font:500 calc(1.9*var(--u))/1 var(--font-body);color:rgba(255,233,236,.85);letter-spacing:.08em}
.v-beauty-promo-sticker .sticker{position:absolute;left:50cqw;top:18cqw;width:calc(46*var(--u));height:calc(46*var(--u));animation:beauty-promo-sticker-slap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-promo-sticker .burst{position:absolute;width:100%;height:100%;animation:beauty-promo-sticker-spin 6s linear infinite}
.v-beauty-promo-sticker .sh{left:calc(1.2*var(--u));top:calc(1.4*var(--u));fill:var(--secondary)}
.v-beauty-promo-sticker .fg{left:0;top:0;fill:var(--accent)}
.v-beauty-promo-sticker .st-txt{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#1B0B12;transform:rotate(-8deg)}
.v-beauty-promo-sticker .st-txt b{font:800 calc(11*var(--u))/1.2 var(--font-display);letter-spacing:-.04em;white-space:nowrap}
.v-beauty-promo-sticker .when{position:absolute;left:6cqw;top:41cqw;font:500 1.8cqw/1.2 var(--font-body);animation:beauty-promo-sticker-when 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-promo-sticker .act{position:absolute;left:6cqw;top:44.5cqw;display:flex;align-items:center;gap:.9cqw;padding:1.2cqw 2.2cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font:700 1.9cqw/1.2 var(--font-body);white-space:nowrap;box-shadow:0 .6cqw 0 var(--secondary);animation:beauty-promo-sticker-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-promo-sticker .act svg{width:1.9cqw;height:1.9cqw;flex:none}
.v-beauty-promo-sticker .ribbon{position:absolute;left:-10cqw;top:52cqw;width:120cqw;height:calc(5.6*var(--u));display:flex;align-items:center;overflow:hidden;background:color-mix(in srgb,var(--secondary),#000 72%);transform:rotate(-1.5deg)}
.v-beauty-promo-sticker .track{display:flex;flex:none;white-space:nowrap;font:700 calc(2.2*var(--u))/1 var(--font-display);color:var(--accent);animation:beauty-promo-sticker-marq 6s linear infinite}
.v-beauty-promo-sticker .track span{display:flex;align-items:center;gap:calc(1.6*var(--u));padding-right:calc(1.6*var(--u))}
.v-beauty-promo-sticker .track svg{flex:none;width:calc(1.8*var(--u));height:calc(1.8*var(--u));fill:var(--paper)}
@container (max-aspect-ratio: 4/5){
  .v-beauty-promo-sticker > *{--u:1cqw}
  .v-beauty-promo-sticker .o1{left:-24cqw;top:26cqw;width:72cqw;height:72cqw}
  .v-beauty-promo-sticker .o2{left:46cqw;top:104cqw;width:80cqw;height:80cqw}
  .v-beauty-promo-sticker .pill{left:50cqw;top:8cqw;translate:-50% 0;font-size:5.4cqw;padding:2.2cqw 4.6cqw;gap:2cqw}
  .v-beauty-promo-sticker .pill svg{width:6cqw;height:6cqw}
  .v-beauty-promo-sticker .big{left:7cqw;top:20cqw;width:86cqw;font-size:17cqw;line-height:1.2}
  .v-beauty-promo-sticker .s1{left:78cqw;top:22cqw;width:7cqw;height:7cqw}
  .v-beauty-promo-sticker .s2{left:86cqw;top:60cqw;width:4.4cqw;height:4.4cqw}
  .v-beauty-promo-sticker .s3{left:88cqw;top:133cqw;width:4cqw;height:4cqw}
  .v-beauty-promo-sticker .s4{left:44cqw;top:78cqw;width:5cqw;height:5cqw}
  .v-beauty-promo-sticker .bob{left:58cqw;top:84cqw}
  .v-beauty-promo-sticker .sticker{left:4cqw;top:88cqw}
  .v-beauty-promo-sticker .when{left:7cqw;right:7cqw;top:138cqw;font-size:5.4cqw}
  .v-beauty-promo-sticker .act{left:7cqw;top:148cqw;font-size:5.6cqw;gap:2cqw;padding:3cqw 5cqw;border-radius:10cqw;box-shadow:0 1.4cqw 0 var(--secondary)}
  .v-beauty-promo-sticker .act svg{width:5cqw;height:5cqw}
  .v-beauty-promo-sticker .ribbon{top:165cqw;height:calc(11*var(--u));transform:rotate(-4deg)}
  .v-beauty-promo-sticker .track{font-size:calc(4.2*var(--u))}
  .v-beauty-promo-sticker .track span{gap:calc(3*var(--u));padding-right:calc(3*var(--u))}
  .v-beauty-promo-sticker .track svg{width:calc(3.4*var(--u));height:calc(3.4*var(--u))}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-promo-sticker > *{--u:.85cqw}
  .v-beauty-promo-sticker .pill{left:6cqw;top:6cqw}
  .v-beauty-promo-sticker .big{left:6cqw;top:14cqw;width:60cqw;font-size:13cqw}
  .v-beauty-promo-sticker .bob{left:66cqw;top:7cqw}
  .v-beauty-promo-sticker .sticker{left:46cqw;top:44cqw}
  .v-beauty-promo-sticker .when{left:6cqw;top:66cqw;width:40cqw;font-size:2.6cqw}
  .v-beauty-promo-sticker .act{left:6cqw;top:75cqw;font-size:2.8cqw;padding:1.8cqw 3.2cqw;gap:1.2cqw}
  .v-beauty-promo-sticker .act svg{width:2.8cqw;height:2.8cqw}
  .v-beauty-promo-sticker .ribbon{top:89cqw;height:calc(7.5*var(--u));transform:rotate(-3deg)}
  .v-beauty-promo-sticker .track{font-size:calc(3*var(--u))}
  .v-beauty-promo-sticker .s1{left:56cqw;top:8cqw}
  .v-beauty-promo-sticker .s3{left:88cqw;top:58cqw}
  .v-beauty-promo-sticker .s4{left:40cqw;top:60cqw}
  .v-beauty-promo-sticker .o2{top:50cqw}
}
@keyframes beauty-promo-sticker-blob{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(4cqw,-5cqw) scale(1.08)}}
@keyframes beauty-promo-sticker-chip{0%,2%{opacity:0;transform:translateY(calc(-3*var(--u)))}12%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(calc(-3*var(--u)))}}
@keyframes beauty-promo-sticker-w{0%,3%{opacity:0;transform:translateY(.6em);clip-path:inset(0 -20% 100% -20%)}15%,86%{opacity:1;transform:translateY(0);clip-path:inset(-20% -20% -20% -20%)}95%,100%{opacity:0;transform:translateY(-.4em)}}
@keyframes beauty-promo-sticker-tw-a{0%,100%{opacity:.25;transform:scale(.4) rotate(0)}50%{opacity:1;transform:scale(1) rotate(45deg)}}
@keyframes beauty-promo-sticker-tw-b{0%,100%{opacity:1;transform:scale(1) rotate(45deg)}50%{opacity:.25;transform:scale(.4) rotate(0)}}
@keyframes beauty-promo-sticker-bob{0%,10%{opacity:0;transform:translateY(calc(30*var(--u))) rotate(20deg);animation-timing-function:cubic-bezier(.2,.8,.2,1)}26%{opacity:1;transform:translateY(0) rotate(0)}44%{transform:translateY(calc(-1.6*var(--u))) rotate(-2deg)}62%{transform:translateY(0) rotate(1deg)}78%{transform:translateY(calc(-1.2*var(--u))) rotate(-1deg)}88%{opacity:1;transform:translateY(0) rotate(0)}98%,100%{opacity:0;transform:translateY(calc(30*var(--u))) rotate(12deg)}}
@keyframes beauty-promo-sticker-slap{0%,26%{opacity:0;transform:scale(2.6) rotate(-34deg)}27%{opacity:1}32%{transform:scale(.9) rotate(-8deg)}36%{transform:scale(1.05) rotate(-13deg)}40%,88%{opacity:1;transform:scale(1) rotate(-12deg)}96%,100%{opacity:0;transform:scale(0) rotate(20deg)}}
@keyframes beauty-promo-sticker-spin{0%{transform:rotate(0)}100%{transform:rotate(60deg)}}
@keyframes beauty-promo-sticker-when{0%,30%{opacity:0;transform:translateY(calc(2.5*var(--u)))}42%,88%{opacity:1;transform:translateY(0)}96%,100%{opacity:0;transform:translateY(calc(2*var(--u)))}}
@keyframes beauty-promo-sticker-cta{0%,36%{opacity:0;transform:translateY(calc(3*var(--u))) scale(.94)}48%,88%{opacity:1;transform:translateY(0) scale(1)}96%,100%{opacity:0;transform:translateY(calc(3*var(--u))) scale(.94)}}
@keyframes beauty-promo-sticker-marq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
`,
};

export const beautyPriceMenu: SceneSpec = {
  id: "beauty-price-menu",
  slug: "mg-beauty-price-menu",
  name: "Editorial Price Menu",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "menu-rows-wipe-in-with-dot-leaders",
  energy: "calm",
  settle: 3.2,
  colors: { ink: "#151311", accent: "#B4532A", secondary: "#8C6A4F", paper: "#F3EEE6" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "salon", "menu", "prices"],
  fields: [
    { key: "kicker", label: "Kicker", default: "the autumn", maxChars: 18, role: "kicker" },
    { key: "title", label: "Title", default: "Menu", maxChars: 6, role: "headline" },
    { key: "sub", label: "Subtitle", default: "hair, hands & skin", maxChars: 24, role: "caption" },
    { key: "blurb", label: "Blurb", default: "Every visit begins with a ten-minute consult and a cup of something warm.", maxChars: 90, role: "body" },
  ],
  html: `<i class="grain"></i>
<div class="sheet">
  <div class="run"><span>Velline Studio</span><span class="mid">The menu · autumn 2026</span><span>No. 03</span></div>
  <i class="rule rt"></i><i class="rule rb"></i><i class="vrule"></i>
  <div class="lead">
  <div class="kick" data-21st-slot="kicker">{{kicker}}</div>
  <div class="ttl" data-21st-slot="title">{{title}}</div>
  <div class="subl" data-21st-slot="sub">{{sub}}</div>
  <p class="blurb" data-21st-slot="blurb">{{blurb}}</p>
  </div>
  <div class="items">
    <div class="strip r1"><div class="l1"><span>Signature cut &amp; finish</span><i class="dots"></i><span>$85</span></div><div class="ds">wash, consult, cut, blow-dry · 60 min</div></div>
    <div class="strip r2"><div class="l1"><span>Gloss &amp; tone</span><i class="dots"></i><span>$60</span></div><div class="ds">shine refresh · 45 min</div></div>
    <div class="strip r3"><div class="l1"><span>Copper balayage</span><i class="dots"></i><span>$240</span></div><div class="ds">hand-painted, toned, glossed · 3 h</div></div>
    <div class="strip r4"><div class="l1"><span>Gel manicure</span><i class="dots"></i><span>$45</span></div><div class="ds">shape, cuticle care, 21-day gel · 60 min</div></div>
    <div class="strip r5"><div class="l1"><span>Velvet facial</span><i class="dots"></i><span>$120</span></div><div class="ds">double cleanse, enzyme, massage · 60 min</div></div>
    <div class="note">most booked</div>
    <svg class="ink" viewBox="0 0 56 8" aria-hidden="true"><g fill="none" stroke="var(--accent)" stroke-width=".17" stroke-linecap="round" stroke-linejoin="round"><path d="M32.6 2.4C36.5 .8 41.5 1 45 3.2"/><path d="M43.4 3.5L45.2 3.3L44.6 1.7"/><path d="M46.4 3.1C48.6 1.8 53.4 1.9 54.5 4.2C55.4 6.3 51.6 7.6 48.6 7.4C45.6 7.2 44.9 5.1 46 3.7C46.9 2.6 48.8 2.2 50.6 2.1"/></g></svg>
  </div>
  <div class="foot"><span>Book at velline.studio</span><span>14 Linden Row, Old Town</span></div>
</div>`,
  css: `
.v-beauty-price-menu{color:var(--ink);font-family:var(--font-display)}
.v-beauty-price-menu .sheet > *{--u:1cqw}
.v-beauty-price-menu[data-backdrop="on"]{background:var(--paper)}
.v-beauty-price-menu .grain{position:absolute;inset:0;opacity:.24;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:22cqw}
.v-beauty-price-menu[data-backdrop="off"] .grain{display:none}
.v-beauty-price-menu .sheet{position:absolute;inset:0;animation:beauty-price-menu-push 6s linear infinite}
.v-beauty-price-menu .run,.v-beauty-price-menu .foot{position:absolute;left:6cqw;right:6cqw;display:flex;justify-content:space-between;font:500 1.2cqw/1.2 var(--font-body);letter-spacing:.14em;color:color-mix(in srgb,var(--ink) 80%,transparent);animation:beauty-price-menu-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-price-menu .run{top:4cqw}
.v-beauty-price-menu .foot{top:51.6cqw;font-size:1.1cqw;letter-spacing:.1em}
.v-beauty-price-menu .rule{position:absolute;left:6cqw;width:88cqw;height:1px;background:var(--ink);transform-origin:0 50%}
.v-beauty-price-menu .rt{top:7.4cqw;animation:beauty-price-menu-rule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .rb{top:50cqw;animation:beauty-price-menu-rule2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .vrule{position:absolute;left:37.5cqw;top:11cqw;width:1px;height:35.5cqw;background:color-mix(in srgb,var(--ink) 45%,transparent);transform-origin:50% 0;animation:beauty-price-menu-vrule 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .lead{position:absolute;left:6cqw;top:10.6cqw;width:30cqw;display:flex;flex-direction:column;align-items:flex-start}
.v-beauty-price-menu .kick{max-width:29cqw;font:italic 400 3cqw/1.2 var(--font-display);color:var(--secondary);animation:beauty-price-menu-kick 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-price-menu .ttl{max-width:30.5cqw;margin-left:-.6cqw;font:400 9.8cqw/1.2 var(--font-display);letter-spacing:-.02em;white-space:nowrap;padding-block:.1em;margin-block:-.1em;animation:beauty-price-menu-title 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-price-menu .subl{max-width:30cqw;margin-top:.4cqw;font:italic 400 2.7cqw/1.2 var(--font-display);color:var(--accent);animation:beauty-price-menu-sub 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-price-menu .blurb{margin:2.4cqw 0 0;width:24cqw;font:400 1.35cqw/1.55 var(--font-body);color:color-mix(in srgb,var(--ink) 75%,transparent);animation:beauty-price-menu-blurb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-price-menu .items{position:absolute;left:41cqw;top:11.2cqw;width:calc(53*var(--u))}
.v-beauty-price-menu .strip{height:calc(7.3*var(--u))}
.v-beauty-price-menu .r1{animation:beauty-price-menu-r1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .r2{animation:beauty-price-menu-r2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .r3{animation:beauty-price-menu-r3 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .r4{animation:beauty-price-menu-r4 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .r5{animation:beauty-price-menu-r5 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .l1{display:flex;align-items:baseline;font:400 calc(2.9*var(--u))/1.2 var(--font-display);white-space:nowrap}
.v-beauty-price-menu .dots{flex:1;height:calc(.5*var(--u));margin:0 calc(1.2*var(--u));background:radial-gradient(circle,color-mix(in srgb,var(--ink) 75%,transparent) calc(.11*var(--u)),transparent calc(.14*var(--u))) 0 50%/calc(.8*var(--u)) calc(.5*var(--u)) repeat-x}
.v-beauty-price-menu .ds{margin-top:calc(.5*var(--u));font:400 calc(1.2*var(--u))/1.2 var(--font-body);letter-spacing:.02em;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-beauty-price-menu .note{position:absolute;left:calc(21*var(--u));top:calc(12.2*var(--u));padding:0 calc(.8*var(--u));font:italic 400 calc(2.5*var(--u))/1.2 var(--font-display);color:var(--accent);transform:rotate(-4deg);animation:beauty-price-menu-note 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-price-menu .ink{position:absolute;left:0;top:calc(11.6*var(--u));width:calc(56*var(--u));height:calc(8*var(--u));overflow:visible;animation:beauty-price-menu-ink 6s cubic-bezier(.65,0,.35,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-beauty-price-menu .sheet > *{--u:1.6cqw}
  .v-beauty-price-menu .run{top:4cqh;font-size:2.8cqw;letter-spacing:.08em}
  .v-beauty-price-menu .run .mid{display:none}
  .v-beauty-price-menu .rt{top:7cqh}
  .v-beauty-price-menu .rb{top:auto;bottom:6.5cqh}
  .v-beauty-price-menu .foot{top:auto;bottom:3cqh;font-size:2.6cqw;letter-spacing:.04em}
  .v-beauty-price-menu .vrule{display:none}
  .v-beauty-price-menu .lead{display:contents}
  .v-beauty-price-menu .kick{position:absolute;max-width:none;left:7cqw;top:9.5cqh;font-size:6.4cqw}
  .v-beauty-price-menu .ttl{position:absolute;max-width:88cqw;margin:-.1em 0;left:6cqw;top:12.5cqh;font-size:30cqw;white-space:normal}
  .v-beauty-price-menu .subl{position:absolute;max-width:none;margin:0;left:7cqw;top:33.5cqh;font-size:7cqw}
  .v-beauty-price-menu .items{left:calc(50cqw - calc(26.5*var(--u)));top:41cqh}
  .v-beauty-price-menu .blurb{position:absolute;margin:0;left:7cqw;right:7cqw;width:auto;bottom:9cqh;font-size:5.4cqw;line-height:1.35}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-price-menu .run{top:6cqw;font-size:1.9cqw;letter-spacing:.1em}
  .v-beauty-price-menu .rt{top:10.5cqw}
  .v-beauty-price-menu .rb{top:auto;bottom:10.5cqw}
  .v-beauty-price-menu .foot{top:auto;bottom:6cqw;font-size:1.9cqw}
  .v-beauty-price-menu .vrule{display:none}
  .v-beauty-price-menu .lead{display:contents}
  .v-beauty-price-menu .kick{position:absolute;max-width:none;left:6cqw;top:15cqw;font-size:4cqw}
  .v-beauty-price-menu .ttl{position:absolute;max-width:41cqw;margin:-.1em 0;left:5.4cqw;top:19cqw;font-size:13.5cqw}
  .v-beauty-price-menu .subl{position:absolute;max-width:none;margin:0;left:6cqw;top:38.5cqw;font-size:4cqw}
  .v-beauty-price-menu .blurb{position:absolute;margin:0;left:50cqw;right:6cqw;width:auto;top:20cqw;font-size:2.2cqw}
  .v-beauty-price-menu .items{--u:1.4cqw;left:calc(50cqw - calc(26.5*var(--u)));top:50cqw}
  .v-beauty-price-menu .strip{height:calc(5.6*var(--u))}
  .v-beauty-price-menu .note{top:calc(8.8*var(--u))}
  .v-beauty-price-menu .ink{top:calc(8.2*var(--u))}
}
@keyframes beauty-price-menu-push{0%{transform:scale(1)}95%,100%{transform:scale(1.03)}}
@keyframes beauty-price-menu-fade{0%,4%{opacity:0}16%,86%{opacity:1}95%,100%{opacity:0}}
@keyframes beauty-price-menu-rule{0%,2%{opacity:1;transform:scaleX(0)}18%,86%{opacity:1;transform:scaleX(1)}95%,100%{opacity:0;transform:scaleX(1)}}
@keyframes beauty-price-menu-rule2{0%,8%{opacity:1;transform:scaleX(0)}26%,86%{opacity:1;transform:scaleX(1)}95%,100%{opacity:0;transform:scaleX(1)}}
@keyframes beauty-price-menu-vrule{0%,6%{opacity:1;transform:scaleY(0)}26%,86%{opacity:1;transform:scaleY(1)}95%,100%{opacity:0;transform:scaleY(1)}}
@keyframes beauty-price-menu-kick{0%,2%{opacity:0;transform:translateY(1.4cqw)}16%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-price-menu-title{0%,4%{opacity:0;transform:translateY(2.4cqw);filter:blur(.6cqw)}22%,86%{opacity:1;transform:translateY(0);filter:blur(0)}95%,100%{opacity:0;transform:translateY(0);filter:blur(.4cqw)}}
@keyframes beauty-price-menu-sub{0%,10%{opacity:0;transform:translateY(1.4cqw)}26%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-price-menu-blurb{0%,16%{opacity:0;transform:translateY(1.4cqw)}32%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-price-menu-r1{0%,8%{opacity:0;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}22%,86%{opacity:1;clip-path:inset(-10% -2% -10% 0);transform:translateX(0)}95%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-price-menu-r2{0%,12%{opacity:0;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}26%,86%{opacity:1;clip-path:inset(-10% -2% -10% 0);transform:translateX(0)}95%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-price-menu-r3{0%,16%{opacity:0;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}30%,86%{opacity:1;clip-path:inset(-10% -2% -10% 0);transform:translateX(0)}95%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-price-menu-r4{0%,20%{opacity:0;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}34%,86%{opacity:1;clip-path:inset(-10% -2% -10% 0);transform:translateX(0)}95%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-price-menu-r5{0%,24%{opacity:0;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}38%,86%{opacity:1;clip-path:inset(-10% -2% -10% 0);transform:translateX(0)}95%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-price-menu-note{0%,36%{opacity:1;clip-path:inset(0 100% 0 0)}43%,86%{opacity:1;clip-path:inset(-20% -5% -20% 0)}95%,100%{opacity:0}}
@keyframes beauty-price-menu-ink{0%,40%{opacity:1;clip-path:inset(0 100% 0 0)}48%,86%{opacity:1;clip-path:inset(-20% -5% -20% 0)}95%,100%{opacity:0}}
`,
};

export const beautyStylistIntro: SceneSpec = {
  id: "beauty-stylist-intro",
  slug: "mg-beauty-stylist-intro",
  name: "Stylist Arch Intro",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "arch-portrait-reveal-with-stats",
  energy: "calm",
  settle: 3.2,
  colors: { ink: "#F3E6D3", accent: "#CDA86B", secondary: "#D68C46", paper: "#17110D" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "salon", "team", "portrait"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "meet your colorist", maxChars: 24, role: "kicker" },
    { key: "name", label: "Name", default: "Inès Marlowe", maxChars: 18, role: "name" },
    { key: "role", label: "Role", default: "Senior colorist · balayage and copper specialist", maxChars: 52, role: "caption" },
  ],
  html: `<i class="leak"></i>
<div class="pg">
  <i class="outline"></i>
  <div class="panel">
    <svg class="portrait" viewBox="0 0 300 490" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="beauty-si-bg" cx="70%" cy="28%" r="80%"><stop offset="0" stop-color="#8A5A3E"/><stop offset=".45" stop-color="#4A2E21"/><stop offset="1" stop-color="#1C120D"/></radialGradient><linearGradient id="beauty-si-skin" x1="0" x2="1" y1="0" y2="0"><stop offset=".28" stop-color="#E2AC86"/><stop offset=".45" stop-color="#B07352"/><stop offset=".7" stop-color="#5E3826"/><stop offset="1" stop-color="#2A1911"/></linearGradient><linearGradient id="beauty-si-hair" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#5A3220"/><stop offset=".45" stop-color="#2A160E"/><stop offset="1" stop-color="#120906"/></linearGradient><linearGradient id="beauty-si-cloth" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#0E0907"/><stop offset=".75" stop-color="#241812"/><stop offset="1" stop-color="#3B281D"/></linearGradient></defs><rect width="300" height="490" fill="url(#beauty-si-bg)"/><circle cx="232" cy="150" r="110" fill="#FFC896" opacity=".12"/><path d="M30 490C40 424 92 390 140 378C166 394 204 392 226 372C262 390 288 430 298 490Z" fill="url(#beauty-si-cloth)"/><path d="M142 382L148 345C149 330 150 318 150 310C138 306 128 302 120 296C113 292 111 286 113 280C114 276 115 274 116 272C110 270 107 266 108 262C109 259 111 257 112 256C108 254 106 251 107 248C108 245 110 243 110 241C104 240 97 237 96 232C96 228 102 220 107 210C110 204 111 200 112 195C113 180 118 160 130 148C150 128 190 120 215 135C238 150 245 185 238 215C232 240 215 260 208 280C204 292 204 300 206 310C210 330 216 350 224 374Z" fill="url(#beauty-si-skin)"/><path d="M112 195C111 200 110 204 107 210C102 220 96 228 96 232C97 237 104 240 110 241C110 243 108 245 107 248C106 251 108 254 112 256C111 257 109 259 108 262C107 266 110 270 116 272C115 274 114 276 113 280C111 286 113 292 120 296C128 302 138 306 150 310" fill="none" stroke="#FFD9B4" stroke-width="1.6" stroke-linecap="round" opacity=".75"/><path d="M118 208C122 211 128 211 132 207" fill="none" stroke="#2A1810" stroke-width="1.6" stroke-linecap="round" opacity=".8"/><circle cx="250" cy="138" r="30" fill="url(#beauty-si-hair)"/><path d="M124 160C128 128 165 108 205 115C240 122 258 160 250 200C246 225 230 250 214 278C210 286 206 292 204 300C196 270 192 250 190 236C186 216 172 196 150 182C140 176 130 168 124 160Z" fill="url(#beauty-si-hair)"/><path d="M134 150C150 128 186 120 214 130" fill="none" stroke="#B9774C" stroke-width="2.2" stroke-linecap="round" opacity=".55"/><path d="M228 120C244 106 266 110 274 126" fill="none" stroke="#B9774C" stroke-width="2" stroke-linecap="round" opacity=".45"/><path d="M197 258V268" stroke="#E8C27E" stroke-width="1.4"/><circle cx="197" cy="273" r="4.4" fill="#E8C27E"/><circle cx="196" cy="272" r="1.5" fill="#FFF3D6"/></svg>
    <i class="grain"></i>
    <div class="badge">${ARCH}Velline, Linden Row</div>
  </div>
</div>
<div class="eyebrow"><i class="dash"></i><span data-21st-slot="kicker">{{kicker}}</span></div>
<div class="fullname"><span data-21st-slot="name">{{name}}</span></div>
<div class="role" data-21st-slot="role">{{role}}</div>
<div class="stats">
  <div class="st"><b><span class="odo"><span class="col"><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span></span></span></b><small>years at the chair</small></div>
  <div class="st"><b>2.4k</b><small>clients colored</small></div>
  <div class="st"><b>4.98<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg></b><small>average rating</small></div>
</div>
<div class="chips"><span>balayage</span><span>copper &amp; red</span><span>lived-in blonde</span></div>`,
  css: `
.v-beauty-stylist-intro{color:var(--ink);font-family:var(--font-body)}
.v-beauty-stylist-intro > *{--u:1cqw}
.v-beauty-stylist-intro[data-backdrop="on"]{background:radial-gradient(90% 120% at 22% 50%,color-mix(in srgb,var(--paper),var(--secondary) 14%) 0%,var(--paper) 58%,color-mix(in srgb,var(--paper),#000 40%) 100%)}
.v-beauty-stylist-intro[data-backdrop="off"] .leak{display:none}
.v-beauty-stylist-intro .leak{position:absolute;left:52cqw;top:-26cqw;width:62cqw;height:62cqw;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--secondary) 30%,transparent),transparent);animation:beauty-stylist-intro-leak 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-stylist-intro .pg{position:absolute;left:8cqw;top:5.8cqw;width:calc(27*var(--u));height:calc(44*var(--u))}
.v-beauty-stylist-intro .outline{position:absolute;left:calc(1.6*var(--u));top:calc(1.6*var(--u));width:calc(27*var(--u));height:calc(44*var(--u));border:1px solid color-mix(in srgb,var(--accent) 75%,transparent);border-radius:calc(13.5*var(--u)) calc(13.5*var(--u)) calc(.8*var(--u)) calc(.8*var(--u));animation:beauty-stylist-intro-outline 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .panel{position:absolute;inset:0;overflow:hidden;border-radius:calc(13.5*var(--u)) calc(13.5*var(--u)) calc(.8*var(--u)) calc(.8*var(--u));background:#2A1B14;animation:beauty-stylist-intro-card 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-stylist-intro .portrait{position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:60% 40%;animation:beauty-stylist-intro-kb 6s linear infinite}
.v-beauty-stylist-intro .grain{position:absolute;left:-10%;top:-10%;width:120%;height:120%;opacity:.5;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");background-size:calc(14*var(--u))}
.v-beauty-stylist-intro .badge{position:absolute;left:50%;bottom:calc(2*var(--u));display:flex;align-items:center;gap:calc(.6*var(--u));padding:calc(.7*var(--u)) calc(1.3*var(--u));border-radius:calc(3*var(--u));background:rgba(14,9,7,.55);border:1px solid rgba(205,168,107,.35);font:500 calc(1*var(--u))/1 var(--font-body);letter-spacing:.08em;color:#E9D3B0;white-space:nowrap;transform:translateX(-50%)}
.v-beauty-stylist-intro .badge svg{width:calc(1.3*var(--u));height:calc(1.3*var(--u));color:#CDA86B}
.v-beauty-stylist-intro .eyebrow{position:absolute;left:45cqw;top:8.5cqw;display:flex;align-items:center;gap:1.2cqw;font:500 1.5cqw/1.2 var(--font-body);letter-spacing:.16em;color:var(--accent);animation:beauty-stylist-intro-eb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .dash{display:block;flex:none;width:4cqw;height:1px;background:var(--accent);transform-origin:0 50%;animation:beauty-stylist-intro-dash 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-stylist-intro .fullname{position:absolute;left:45cqw;top:11.4cqw;width:50cqw;overflow:hidden;padding-block:.15em;font:400 7.2cqw/1.2 var(--font-display);letter-spacing:-.01em}
.v-beauty-stylist-intro .fullname span{display:block;animation:beauty-stylist-intro-name 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .role{position:absolute;left:45cqw;top:22.6cqw;width:48cqw;font:400 1.65cqw/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 68%,transparent);animation:beauty-stylist-intro-role 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .stats{position:absolute;left:45cqw;top:28cqw;display:flex;animation:beauty-stylist-intro-stats 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .st{padding:0 calc(2.8*var(--u));border-left:1px solid color-mix(in srgb,var(--accent) 35%,transparent)}
.v-beauty-stylist-intro .st:first-child{padding-left:0;border-left:0}
.v-beauty-stylist-intro .st b{display:flex;align-items:center;gap:calc(.5*var(--u));height:calc(4.4*var(--u));font:400 calc(4.4*var(--u))/1 var(--font-display);color:var(--ink)}
.v-beauty-stylist-intro .st b svg{width:calc(2*var(--u));height:calc(2*var(--u));fill:var(--accent)}
.v-beauty-stylist-intro .st small{display:block;margin-top:calc(.9*var(--u));font:400 calc(1.2*var(--u))/1 var(--font-body);letter-spacing:.04em;color:color-mix(in srgb,var(--ink) 58%,transparent);white-space:nowrap}
.v-beauty-stylist-intro .odo{display:block;height:1em;overflow:hidden}
.v-beauty-stylist-intro .col{display:block;animation:beauty-stylist-intro-odo 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .col span{display:block;height:1em}
.v-beauty-stylist-intro .chips{position:absolute;left:45cqw;top:38cqw;display:flex;gap:calc(1*var(--u));animation:beauty-stylist-intro-chips 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-stylist-intro .chips span{padding:calc(.9*var(--u)) calc(1.6*var(--u));border:1px solid color-mix(in srgb,var(--accent) 50%,transparent);border-radius:calc(3*var(--u));font:400 calc(1.3*var(--u))/1 var(--font-body);color:color-mix(in srgb,var(--ink) 85%,transparent);white-space:nowrap}
@container (max-aspect-ratio: 4/5){
  .v-beauty-stylist-intro .eyebrow{left:8cqw;top:7cqh;font-size:5.4cqw;gap:3cqw;letter-spacing:.08em}
  .v-beauty-stylist-intro .dash{width:9cqw}
  .v-beauty-stylist-intro .fullname{left:8cqw;right:8cqw;width:auto;top:10cqh;font-size:15cqw}
  .v-beauty-stylist-intro .pg{--u:1.9cqw;left:calc(50cqw - calc(14.3*var(--u)));top:22cqh}
  .v-beauty-stylist-intro .stats{--u:1.8cqw;left:8cqw;top:71cqh}
  .v-beauty-stylist-intro .chips{display:none}
  .v-beauty-stylist-intro .role{left:8cqw;right:8cqw;width:auto;top:auto;bottom:7cqh;font-size:5.4cqw}
  .v-beauty-stylist-intro .leak{left:20cqw;top:-20cqw;width:110cqw;height:110cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-stylist-intro .pg{--u:1.62cqw;left:6cqw;top:12cqw}
  .v-beauty-stylist-intro .eyebrow{left:56cqw;top:14cqw;font-size:2.2cqw;letter-spacing:.1em;gap:1.4cqw}
  .v-beauty-stylist-intro .dash{width:4cqw}
  .v-beauty-stylist-intro .fullname{left:56cqw;width:40cqw;top:19cqw;font-size:8.6cqw}
  .v-beauty-stylist-intro .role{left:56cqw;width:38cqw;top:43cqw;font-size:2.4cqw}
  .v-beauty-stylist-intro .stats{--u:1.05cqw;left:56cqw;top:56cqw;flex-direction:column;gap:calc(3*var(--u))}
  .v-beauty-stylist-intro .st{padding:0;border:0}
  .v-beauty-stylist-intro .st b{font-size:calc(5.4*var(--u));height:calc(5.4*var(--u))}
  .v-beauty-stylist-intro .st small{font-size:calc(1.9*var(--u))}
  .v-beauty-stylist-intro .chips{display:none}
}
@keyframes beauty-stylist-intro-leak{0%,100%{opacity:.7;transform:translate(0,0)}50%{opacity:1;transform:translate(-8cqw,6cqw)}}
@keyframes beauty-stylist-intro-outline{0%,10%{opacity:0;transform:translate(calc(-1.4*var(--u)),calc(-1.4*var(--u)))}30%,86%{opacity:1;transform:translate(0,0)}96%,100%{opacity:0;transform:translate(calc(-1.4*var(--u)),calc(-1.4*var(--u)))}}
@keyframes beauty-stylist-intro-card{0%,2%{opacity:1;clip-path:inset(100% 0 0 0)}24%,86%{opacity:1;clip-path:inset(0 0 0 0)}96%,100%{opacity:0;clip-path:inset(0 0 0 0)}}
@keyframes beauty-stylist-intro-kb{0%{transform:scale(1.16)}86%,100%{transform:scale(1.02)}}
@keyframes beauty-stylist-intro-eb{0%,10%{opacity:0;transform:translateY(1cqw)}22%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-stylist-intro-dash{0%,10%{transform:scaleX(0)}26%,100%{transform:scaleX(1)}}
@keyframes beauty-stylist-intro-name{0%,14%{opacity:1;transform:translateY(105%)}32%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-stylist-intro-role{0%,20%{opacity:0;transform:translateY(1.2cqw)}36%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-stylist-intro-stats{0%,26%{opacity:0;transform:translateY(calc(1.4*var(--u)))}40%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-stylist-intro-odo{0%,26%{transform:translateY(0)}46%,100%{transform:translateY(-83.333%)}}
@keyframes beauty-stylist-intro-chips{0%,32%{opacity:0;transform:translateY(calc(1.4*var(--u)))}46%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const beautyBooking: SceneSpec = {
  id: "beauty-booking",
  slug: "mg-beauty-booking",
  name: "Two Tap Booking",
  kind: "scene",
  job: "product-ui",
  language: "product-ui",
  mechanic: "finger-taps-date-time-confirm",
  energy: "default",
  settle: 3.2,
  colors: { ink: "#2A1835", accent: "#5B2E6E", secondary: "#D46A8C", paper: "#F7F3FB" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "booking", "app", "calendar"],
  fields: [
    { key: "headline", label: "Headline", default: "Book in two taps.", maxChars: 22, role: "headline" },
    { key: "service", label: "Service", default: "Gel manicure", maxChars: 18, role: "label" },
    { key: "done", label: "Confirmed button", default: "Booked", maxChars: 12, role: "cta" },
    { key: "notice", label: "Notification", default: "Booked: Fri 16 Oct, 15:30", maxChars: 30, role: "caption" },
  ],
  html: `<div class="brand">${ARCH}<span>velline studio</span><em>Linden Row</em></div>
<div class="ttl" data-21st-slot="headline">{{headline|words}}</div>
<div class="ph">
  <div class="panel svc">
    <div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9.2" y="2" width="5.6" height="7" rx="1" fill="var(--accent)"/><rect x="5.5" y="8.5" width="13" height="13" rx="3.4" fill="var(--secondary)"/><rect x="7.6" y="10.6" width="2" height="7.4" rx="1" fill="#FFFFFF" opacity=".6"/></svg></div>
    <div class="sv"><b data-21st-slot="service">{{service}}</b><small>60 min · with Mara</small></div>
    <div class="pr">$45</div>
  </div>
  <div class="panel cal"><div class="hd"><b>October 2026</b><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div><div class="wk"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div class="days"><span></span><span></span><span></span><span class="p">1</span><span class="p">2</span><span class="p">3</span><span class="p">4</span><span class="p">5</span><span class="p">6</span><span class="td">7</span><span>8</span><span>9</span><span>10</span><span class="x">11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span class="x">18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span class="x">25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span></span></div><div class="seld">16</div></div>
  <div class="slots">
    <div class="lb">Friday 16 October · 3 times left</div>
    <div class="strip"><span>10:00</span><span>11:30</span><span class="off">13:00</span><span>15:30</span></div>
    <div class="sels">15:30</div>
  </div>
  <div class="bttn"><span class="a">Confirm · $45</span><span class="b"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span data-21st-slot="done">{{done}}</span></span></div>
  <div class="fine">Free changes up to 24 h before</div>
  <i class="rp rp1"></i><i class="rp rp2"></i><i class="rp rp3"></i>
  <i class="tap"></i>
</div>
<div class="notif">
  <div class="ap">${ARCH}</div>
  <div class="nt">
    <div class="nh"><span>Velline</span><span>now</span></div>
    <b data-21st-slot="notice">{{notice}}</b>
    <p>Gel manicure with Mara. See you then!</p>
  </div>
</div>`,
  css: `
.v-beauty-booking{color:var(--ink);font-family:var(--font-body)}
.v-beauty-booking > *{--u:.36cqw}
.v-beauty-booking[data-backdrop="on"]{background:linear-gradient(180deg,color-mix(in srgb,var(--paper),var(--accent) 7%) 0%,color-mix(in srgb,var(--paper),var(--accent) 13%) 55%,color-mix(in srgb,var(--paper),var(--accent) 22%) 100%)}
.v-beauty-booking .brand{position:absolute;left:6cqw;top:6cqw;display:flex;align-items:center;gap:1cqw;font:500 1.6cqw/1.2 var(--font-body)}
.v-beauty-booking .brand svg{width:2cqw;height:2cqw;color:var(--accent)}
.v-beauty-booking .brand em{display:none}
.v-beauty-booking .ttl{position:absolute;left:6cqw;top:16cqw;width:44cqw;font:400 8cqw/1.2 var(--font-display);letter-spacing:-.01em;animation:beauty-booking-title 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .ttl .w{display:inline-block;padding-block:.08em;margin-block:-.08em}
.v-beauty-booking .ttl .w:nth-last-child(-n+2){font-style:italic;color:var(--accent);padding-right:.05em}
.v-beauty-booking .ph{position:absolute;left:56cqw;top:calc(12cqw - calc(50*var(--u)));width:calc(100*var(--u));height:calc(178*var(--u));animation:beauty-booking-float 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-booking .panel{position:absolute;left:calc(7*var(--u));width:calc(86*var(--u));border-radius:calc(4.4*var(--u));background:var(--paper);box-shadow:0 calc(1.6*var(--u)) calc(4.4*var(--u)) color-mix(in srgb,var(--accent) 14%,transparent),0 calc(.2*var(--u)) calc(.5*var(--u)) color-mix(in srgb,var(--accent) 8%,transparent)}
.v-beauty-booking .svc{top:calc(50*var(--u));height:calc(15*var(--u));display:flex;align-items:center;gap:calc(3.4*var(--u));padding:0 calc(4*var(--u));box-sizing:border-box}
.v-beauty-booking .ic{flex:none;display:flex;align-items:center;justify-content:center;width:calc(9*var(--u));height:calc(9*var(--u));border-radius:50%;background:color-mix(in srgb,var(--secondary) 22%,var(--paper))}
.v-beauty-booking .ic svg{width:calc(5.4*var(--u));height:calc(5.4*var(--u))}
.v-beauty-booking .sv{min-width:0}
.v-beauty-booking .svc b{display:block;font:600 calc(4.6*var(--u))/1.2 var(--font-body);white-space:nowrap}
.v-beauty-booking .svc small{display:block;margin-top:calc(.6*var(--u));font:400 calc(3.1*var(--u))/1.1 var(--font-body);color:color-mix(in srgb,var(--ink) 58%,transparent)}
.v-beauty-booking .svc .pr{margin-left:auto;font:400 calc(6.4*var(--u))/1 var(--font-display)}
.v-beauty-booking .cal{top:calc(69*var(--u));height:calc(57*var(--u))}
.v-beauty-booking .hd{position:absolute;left:calc(4*var(--u));right:calc(4*var(--u));top:calc(3.6*var(--u));display:flex;align-items:center;justify-content:space-between;font:600 calc(4*var(--u))/1 var(--font-body)}
.v-beauty-booking .hd span{display:flex;gap:calc(2.4*var(--u));color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-beauty-booking .hd svg{width:calc(4*var(--u));height:calc(4*var(--u))}
.v-beauty-booking .wk,.v-beauty-booking .days{position:absolute;left:calc(3*var(--u));width:calc(80*var(--u));display:grid;grid-template-columns:repeat(7,1fr);text-align:center}
.v-beauty-booking .wk{top:calc(11*var(--u));font:500 calc(2.6*var(--u))/1 var(--font-body);color:color-mix(in srgb,var(--ink) 45%,transparent)}
.v-beauty-booking .days{top:calc(16*var(--u));grid-auto-rows:calc(7.6*var(--u));font:500 calc(3.3*var(--u))/1 var(--font-body)}
.v-beauty-booking .days span{position:relative;display:flex;align-items:center;justify-content:center}
.v-beauty-booking .days .p,.v-beauty-booking .days .x{color:color-mix(in srgb,var(--ink) 28%,transparent)}
.v-beauty-booking .days .td{font-weight:700;color:var(--accent)}
.v-beauty-booking .days .td::after{content:"";position:absolute;left:50%;bottom:calc(.9*var(--u));width:calc(.9*var(--u));height:calc(.9*var(--u));margin-left:calc(-.45*var(--u));border-radius:50%;background:var(--accent)}
.v-beauty-booking .seld{position:absolute;left:calc(49.73*var(--u));top:calc(30.3*var(--u));width:calc(9.4*var(--u));height:calc(9.4*var(--u));display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--accent);color:var(--paper);font:600 calc(3.3*var(--u))/1 var(--font-body);box-shadow:0 calc(1*var(--u)) calc(2.4*var(--u)) color-mix(in srgb,var(--accent) 40%,transparent);animation:beauty-booking-seld 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .slots{position:absolute;left:calc(7*var(--u));top:calc(130*var(--u));width:calc(86*var(--u));height:calc(14*var(--u));animation:beauty-booking-slots 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .lb{font:500 calc(3*var(--u))/1 var(--font-body);color:color-mix(in srgb,var(--ink) 60%,transparent)}
.v-beauty-booking .strip{position:absolute;left:0;right:0;top:calc(5*var(--u));display:grid;grid-template-columns:repeat(4,1fr);gap:calc(2.33*var(--u))}
.v-beauty-booking .strip span{display:flex;align-items:center;justify-content:center;height:calc(9*var(--u));border-radius:calc(2.6*var(--u));background:var(--paper);border:1px solid color-mix(in srgb,var(--accent) 14%,transparent);font:600 calc(3.4*var(--u))/1 var(--font-body)}
.v-beauty-booking .strip .off{background:color-mix(in srgb,var(--paper) 45%,transparent);color:color-mix(in srgb,var(--ink) 30%,transparent);text-decoration:line-through}
.v-beauty-booking .sels{position:absolute;left:calc(66.25*var(--u));top:calc(5*var(--u));width:calc(19.75*var(--u));height:calc(9*var(--u));display:flex;align-items:center;justify-content:center;border-radius:calc(2.6*var(--u));background:var(--accent);color:var(--paper);font:600 calc(3.4*var(--u))/1 var(--font-body);box-shadow:0 calc(1*var(--u)) calc(2.4*var(--u)) color-mix(in srgb,var(--accent) 35%,transparent);animation:beauty-booking-sels 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .bttn{position:absolute;left:calc(7*var(--u));top:calc(150*var(--u));width:calc(86*var(--u));height:calc(12*var(--u));overflow:hidden;border-radius:calc(6*var(--u));background:var(--accent);color:var(--paper);font:600 calc(4.6*var(--u))/1.2 var(--font-body);box-shadow:0 calc(1.6*var(--u)) calc(3.6*var(--u)) color-mix(in srgb,var(--accent) 35%,transparent);animation:beauty-booking-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .bttn .a,.v-beauty-booking .bttn .b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:calc(1.6*var(--u))}
.v-beauty-booking .bttn .b{background:var(--ink);color:var(--paper);animation:beauty-booking-done 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .bttn svg{width:calc(5*var(--u));height:calc(5*var(--u))}
.v-beauty-booking .fine{position:absolute;left:0;right:0;top:calc(166.5*var(--u));text-align:center;font:400 calc(2.8*var(--u))/1 var(--font-body);color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-beauty-booking .tap{position:absolute;left:0;top:0;width:calc(8*var(--u));height:calc(8*var(--u));border-radius:50%;background:rgba(42,24,53,.16);border:calc(.5*var(--u)) solid rgba(255,255,255,.95);box-sizing:border-box;box-shadow:0 calc(1*var(--u)) calc(3*var(--u)) rgba(42,24,53,.3);animation:beauty-booking-tap 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-booking .rp{position:absolute;width:calc(10*var(--u));height:calc(10*var(--u));border-radius:50%;border:calc(.4*var(--u)) solid color-mix(in srgb,var(--accent) 50%,transparent);box-sizing:border-box}
.v-beauty-booking .rp1{left:calc(56.43*var(--u));top:calc(99*var(--u));animation:beauty-booking-rp1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .rp2{left:calc(78.13*var(--u));top:calc(134.5*var(--u));animation:beauty-booking-rp2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .rp3{left:calc(45*var(--u));top:calc(151*var(--u));animation:beauty-booking-rp3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .notif{position:absolute;left:calc(56cqw + calc(3*var(--u)));width:calc(94*var(--u));top:1.2cqw;display:flex;align-items:center;gap:calc(3*var(--u));padding:calc(2.8*var(--u)) calc(3.4*var(--u));border-radius:calc(5*var(--u));box-sizing:border-box;background:#FFFFFF;color:#2A1835;box-shadow:0 calc(2*var(--u)) calc(6*var(--u)) rgba(60,30,90,.22);animation:beauty-booking-notif 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-booking .ap{flex:none;display:flex;align-items:center;justify-content:center;width:calc(9*var(--u));height:calc(9*var(--u));border-radius:calc(2.4*var(--u));background:linear-gradient(145deg,color-mix(in srgb,var(--accent),#fff 18%),var(--accent));color:#FFFFFF}
.v-beauty-booking .ap svg{width:calc(5.6*var(--u));height:calc(5.6*var(--u))}
.v-beauty-booking .nt{flex:1;min-width:0}
.v-beauty-booking .nh{display:flex;justify-content:space-between;font:500 calc(2.6*var(--u))/1 var(--font-body);color:#8A7A96}
.v-beauty-booking .nt b{display:block;margin-top:calc(1*var(--u));font:600 calc(3.8*var(--u))/1.2 var(--font-body);color:#2A1835}
.v-beauty-booking .nt p{margin:calc(.6*var(--u)) 0 0;font:400 calc(2.8*var(--u))/1.3 var(--font-body);color:#5A4A66}
@container (max-aspect-ratio: 4/5){
  .v-beauty-booking > *{--u:1cqw}
  .v-beauty-booking .brand{left:7cqw;right:7cqw;top:8cqw;gap:1.8cqw;font-size:3.8cqw}
  .v-beauty-booking .brand svg{width:4.6cqw;height:4.6cqw}
  .v-beauty-booking .brand em{display:block;margin-left:auto;font:400 3cqw/1 var(--font-body);color:color-mix(in srgb,var(--ink) 55%,transparent)}
  .v-beauty-booking .ttl{left:7cqw;top:29cqw;width:86cqw;font-size:11cqw}
  .v-beauty-booking .ph{left:0;top:0}
  .v-beauty-booking .svc b{font-size:5.4cqw}
  .v-beauty-booking .bttn{font-size:5.6cqw}
  .v-beauty-booking .notif{left:4cqw;width:92cqw;top:4cqw}
  .v-beauty-booking .nt b{font-size:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-booking > *{--u:.6cqw}
  .v-beauty-booking .brand{left:5cqw;top:5cqw;font-size:2.4cqw;gap:1.2cqw}
  .v-beauty-booking .brand svg{width:3cqw;height:3cqw}
  .v-beauty-booking .ttl{left:5cqw;top:30cqw;width:30cqw;font-size:7.4cqw}
  .v-beauty-booking .ph{left:37cqw;top:calc(21cqw - calc(50*var(--u)))}
  .v-beauty-booking .notif{left:calc(37cqw + calc(3*var(--u)));top:2.5cqw}
}
@keyframes beauty-booking-float{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(-.8*var(--u)))}}
@keyframes beauty-booking-title{0%,2%{opacity:0;transform:translateY(3cqw)}14%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-booking-tap{0%,6%{opacity:0;transform:translate(calc(70*var(--u)),calc(176*var(--u))) scale(1)}14%{opacity:1;transform:translate(calc(57.43*var(--u)),calc(100*var(--u))) scale(1)}16%{transform:translate(calc(57.43*var(--u)),calc(100*var(--u))) scale(.8)}19%,22%{transform:translate(calc(57.43*var(--u)),calc(100*var(--u))) scale(1)}29%{transform:translate(calc(79.13*var(--u)),calc(135.5*var(--u))) scale(1)}31%{transform:translate(calc(79.13*var(--u)),calc(135.5*var(--u))) scale(.8)}34%,36%{transform:translate(calc(79.13*var(--u)),calc(135.5*var(--u))) scale(1)}41%{opacity:1;transform:translate(calc(46*var(--u)),calc(152*var(--u))) scale(1)}43%{transform:translate(calc(46*var(--u)),calc(152*var(--u))) scale(.8)}45%{opacity:1;transform:translate(calc(46*var(--u)),calc(152*var(--u))) scale(1)}49%,100%{opacity:0;transform:translate(calc(52*var(--u)),calc(164*var(--u))) scale(1)}}
@keyframes beauty-booking-rp1{0%,15%{opacity:0;transform:scale(.4)}16%{opacity:1;transform:scale(.5)}26%,100%{opacity:0;transform:scale(1.7)}}
@keyframes beauty-booking-rp2{0%,30%{opacity:0;transform:scale(.4)}31%{opacity:1;transform:scale(.5)}41%,100%{opacity:0;transform:scale(1.7)}}
@keyframes beauty-booking-rp3{0%,42%{opacity:0;transform:scale(.4)}43%{opacity:1;transform:scale(.5)}53%,100%{opacity:0;transform:scale(1.7)}}
@keyframes beauty-booking-seld{0%,16%{opacity:0;transform:scale(0)}19%{opacity:1;transform:scale(1.12)}22%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(.6)}}
@keyframes beauty-booking-slots{0%,19%{opacity:0;transform:translateY(calc(3*var(--u)))}27%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(calc(2*var(--u)))}}
@keyframes beauty-booking-sels{0%,31%{opacity:0;transform:scale(.85)}34%{opacity:1;transform:scale(1.05)}36%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(.9)}}
@keyframes beauty-booking-btn{0%,42%{transform:scale(1)}43.5%{transform:scale(.96)}46%,100%{transform:scale(1)}}
@keyframes beauty-booking-done{0%,43%{opacity:0}46%,86%{opacity:1}94%,100%{opacity:0}}
@keyframes beauty-booking-notif{0%,44%{opacity:0;transform:translateY(-140%)}49%,84%{opacity:1;transform:translateY(0)}92%,100%{opacity:0;transform:translateY(-140%)}}
`,
};

export const beautySwatchFan: SceneSpec = {
  id: "beauty-swatch-fan",
  slug: "mg-beauty-swatch-fan",
  name: "Shade Swatch Fan",
  kind: "scene",
  job: "gallery",
  language: "editorial",
  mechanic: "swatch-fan-open-pick-shade",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#2B1D14", accent: "#5A1E3C", secondary: "#8A5A3C", paper: "#F3E5BF" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["beauty", "nails", "shades", "palette"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "autumn edit · no. 06", maxChars: 24, role: "kicker" },
    { key: "name", label: "Shade name", default: "Fig Jam", maxChars: 10, role: "headline" },
    { key: "body", label: "Description", default: "Gel polish with 21-day wear. Vegan, cured in 60 seconds.", maxChars: 70, role: "body" },
    { key: "cta", label: "Button", default: "Try all 8 in salon · from $45", maxChars: 32, role: "cta" },
  ],
  html: `<div class="art">
  <i class="sun"></i>
  <div class="fan">
    <div class="bl" style="--a:-50deg;--c:#EADBCB"><i></i><span>01</span></div>
    <div class="bl" style="--a:-38deg;--c:#F0BFB0"><i></i><span>02</span></div>
    <div class="bl" style="--a:-26deg;--c:#EC9273"><i></i><span>03</span></div>
    <div class="bl" style="--a:-14deg;--c:#DE5640"><i></i><span>04</span></div>
    <div class="bl" style="--a:-2deg;--c:#A3182F"><i></i><span>05</span></div>
    <div class="bl hi" style="--a:10deg;--c:var(--accent)"><i></i><span>06</span></div>
    <div class="bl" style="--a:22deg;--c:#2D2131"><i></i><span>07</span></div>
    <div class="bl" style="--a:34deg;--c:#93A98F"><i></i><span>08</span></div>
    <i class="rivet"></i>
  </div>
  <i class="shadow"></i>
  <div class="bottle"><i class="cap"></i><i class="neck"></i><div class="vial"><i></i><b>velline</b><small>06 · signature</small></div></div>
</div>
<div class="eb" data-21st-slot="kicker">{{kicker}}</div>
<div class="nm"><span data-21st-slot="name">{{name}}</span></div>
<p class="ds" data-21st-slot="body">{{body}}</p>
<div class="dots"><i style="--c:#EADBCB"></i><i style="--c:#F0BFB0"></i><i style="--c:#EC9273"></i><i style="--c:#DE5640"></i><i style="--c:#A3182F"></i><i class="on" style="--c:var(--accent)"></i><i style="--c:#2D2131"></i><i style="--c:#93A98F"></i></div>
<div class="act" data-21st-slot="cta">{{cta}}</div>`,
  css: `
.v-beauty-swatch-fan{color:var(--ink);font-family:var(--font-body)}
.v-beauty-swatch-fan > *{--u:1cqw}
.v-beauty-swatch-fan[data-backdrop="on"]{background:radial-gradient(90% 110% at 30% 60%,color-mix(in srgb,var(--paper),#fff 45%) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper),var(--secondary) 18%) 100%)}
.v-beauty-swatch-fan[data-backdrop="off"] .sun{display:none}
.v-beauty-swatch-fan .art{position:absolute;left:0;top:0;width:calc(64*var(--u));height:calc(56*var(--u))}
.v-beauty-swatch-fan .sun{position:absolute;left:calc(7*var(--u));top:calc(8*var(--u));width:calc(40*var(--u));height:calc(40*var(--u));border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--paper),#fff 80%),transparent);animation:beauty-swatch-fan-sun 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-swatch-fan .fan{position:absolute;inset:0;transform-origin:calc(27*var(--u)) calc(50*var(--u));animation:beauty-swatch-fan-sway 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-swatch-fan .bl{position:absolute;left:calc(23.8*var(--u));top:calc(22.5*var(--u));width:calc(6.4*var(--u));height:calc(30*var(--u));border-radius:calc(3.2*var(--u)) calc(3.2*var(--u)) calc(.8*var(--u)) calc(.8*var(--u));background:linear-gradient(180deg,var(--c) 0 68%,#FFFCF5 68%);box-shadow:0 calc(.5*var(--u)) calc(1.2*var(--u)) rgba(80,50,20,.18),inset 0 0 0 1px rgba(0,0,0,.05);transform-origin:50% calc(100% - calc(2.5*var(--u)));animation:beauty-swatch-fan-open 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-swatch-fan .bl i{position:absolute;left:calc(1*var(--u));top:calc(1.4*var(--u));width:calc(1*var(--u));height:calc(16*var(--u));border-radius:calc(1*var(--u));background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,0))}
.v-beauty-swatch-fan .bl span{position:absolute;left:0;right:0;top:calc(21.6*var(--u));text-align:center;font:700 calc(1.5*var(--u))/1 var(--font-display);color:#2B1D14}
.v-beauty-swatch-fan .hi{z-index:5;animation:beauty-swatch-fan-pull 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-swatch-fan .rivet{position:absolute;z-index:10;left:calc(25.3*var(--u));top:calc(48.3*var(--u));width:calc(3.4*var(--u));height:calc(3.4*var(--u));border-radius:50%;background:radial-gradient(circle at 35% 30%,#FFF3D2 0%,#D8B275 40%,#8C6A35 100%);box-shadow:0 calc(.3*var(--u)) calc(.6*var(--u)) rgba(60,40,10,.35)}
.v-beauty-swatch-fan .shadow{position:absolute;left:calc(49*var(--u));top:calc(44.4*var(--u));width:calc(15*var(--u));height:calc(2.4*var(--u));border-radius:50%;background:radial-gradient(closest-side,rgba(90,60,20,.4),rgba(90,60,20,0));animation:beauty-swatch-fan-shadow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-swatch-fan .bottle{position:absolute;left:calc(49.5*var(--u));top:calc(18.6*var(--u));width:calc(14*var(--u));display:flex;flex-direction:column;align-items:center;animation:beauty-swatch-fan-bottle 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-swatch-fan .cap{width:calc(6*var(--u));height:calc(11*var(--u));border-radius:calc(.9*var(--u)) calc(.9*var(--u)) calc(.3*var(--u)) calc(.3*var(--u));background:linear-gradient(90deg,#BFAE93 0%,#EFE5D3 30%,#FFFCF4 46%,#E2D5BF 70%,#B5A486 100%);box-shadow:inset 0 calc(-.4*var(--u)) 0 rgba(0,0,0,.06)}
.v-beauty-swatch-fan .neck{width:calc(7.2*var(--u));height:calc(1.6*var(--u));background:linear-gradient(90deg,color-mix(in srgb,var(--accent),#000 40%),color-mix(in srgb,var(--accent),#fff 15%) 40%,color-mix(in srgb,var(--accent),#000 40%))}
.v-beauty-swatch-fan .vial{position:relative;width:calc(14*var(--u));height:calc(14*var(--u));border-radius:calc(2.6*var(--u));display:flex;flex-direction:column;align-items:center;justify-content:center;gap:calc(.5*var(--u));background:radial-gradient(110% 90% at 30% 22%,color-mix(in srgb,var(--accent),#fff 25%) 0%,var(--accent) 46%,color-mix(in srgb,var(--accent),#000 55%) 100%);box-shadow:inset 0 0 0 calc(.6*var(--u)) rgba(255,255,255,.14),inset calc(-1.2*var(--u)) calc(-1.4*var(--u)) calc(2.4*var(--u)) rgba(20,0,10,.5),0 calc(2*var(--u)) calc(3.6*var(--u)) rgba(90,50,20,.28);color:#F7E6EE}
.v-beauty-swatch-fan .vial i{position:absolute;left:calc(1.4*var(--u));top:calc(1.4*var(--u));width:calc(1.4*var(--u));height:calc(10*var(--u));border-radius:calc(1*var(--u));background:linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,0))}
.v-beauty-swatch-fan .vial b{font:400 calc(2.2*var(--u))/1 var(--font-display);letter-spacing:.03em}
.v-beauty-swatch-fan .vial small{font:600 calc(.9*var(--u))/1 var(--font-body);letter-spacing:.12em;opacity:.8}
.v-beauty-swatch-fan .eb{position:absolute;left:67cqw;top:11.5cqw;width:28cqw;font:500 1.4cqw/1.2 var(--font-body);letter-spacing:.12em;color:var(--secondary);animation:beauty-swatch-fan-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-swatch-fan .nm{position:absolute;left:67cqw;top:13.8cqw;width:30cqw;overflow:hidden;padding-block:.2em;margin-block:-.1em}
.v-beauty-swatch-fan .nm span{display:block;font:800 6.4cqw/1.3 var(--font-display);letter-spacing:-.03em;color:var(--accent);white-space:normal;animation:beauty-swatch-fan-nm 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-swatch-fan .ds{position:absolute;left:67cqw;top:23.4cqw;width:27cqw;margin:0;font:400 1.5cqw/1.45 var(--font-body);color:color-mix(in srgb,var(--ink) 80%,transparent);animation:beauty-swatch-fan-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-swatch-fan .dots{position:absolute;left:67cqw;top:32.4cqw;display:flex;gap:calc(.7*var(--u));animation:beauty-swatch-fan-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-swatch-fan .dots i{width:calc(2.2*var(--u));height:calc(2.2*var(--u));border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}
.v-beauty-swatch-fan .dots .on{box-shadow:0 0 0 calc(.3*var(--u)) var(--paper),0 0 0 calc(.55*var(--u)) var(--accent)}
.v-beauty-swatch-fan .act{position:absolute;left:67cqw;top:37.6cqw;display:inline-flex;align-items:center;gap:1cqw;padding:1.2cqw 2cqw;border-radius:4cqw;background:var(--ink);color:var(--paper);font:600 1.4cqw/1.2 var(--font-body);white-space:nowrap;animation:beauty-swatch-fan-c4 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-beauty-swatch-fan .eb{left:8cqw;top:7.5cqh;width:auto;right:8cqw;font-size:5.4cqw;letter-spacing:.06em}
  .v-beauty-swatch-fan .nm{left:8cqw;right:8cqw;width:auto;top:10.5cqh}
  .v-beauty-swatch-fan .nm span{font-size:17.5cqw}
  .v-beauty-swatch-fan .ds{left:8cqw;right:8cqw;width:auto;top:24cqh;font-size:5.4cqw;line-height:1.35}
  .v-beauty-swatch-fan .art{--u:1.45cqw;left:0;top:35cqh}
  .v-beauty-swatch-fan .dots{--u:3.4cqw;left:8cqw;top:auto;bottom:16cqh}
  .v-beauty-swatch-fan .act{left:8cqw;top:auto;bottom:6cqh;font-size:5.4cqw;padding:3.4cqw 5.4cqw;border-radius:10cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-swatch-fan .eb{left:6cqw;top:6cqw;width:auto;font-size:2.4cqw}
  .v-beauty-swatch-fan .nm{left:6cqw;top:9cqw;width:60cqw}
  .v-beauty-swatch-fan .nm span{font-size:12cqw}
  .v-beauty-swatch-fan .art{--u:1.02cqw;left:1cqw;top:28cqw}
  .v-beauty-swatch-fan .ds{left:68cqw;width:27cqw;top:38cqw;font-size:2.2cqw}
  .v-beauty-swatch-fan .dots{--u:1.4cqw;left:6cqw;top:auto;bottom:6cqw}
  .v-beauty-swatch-fan .act{left:auto;right:5cqw;top:auto;bottom:5cqw;font-size:2.4cqw;padding:1.8cqw 2.8cqw}
}
@keyframes beauty-swatch-fan-sun{0%,100%{opacity:.8;transform:scale(.95)}50%{opacity:1;transform:scale(1.05)}}
@keyframes beauty-swatch-fan-sway{0%,100%{transform:rotate(-1deg)}50%{transform:rotate(1.2deg)}}
@keyframes beauty-swatch-fan-open{0%{opacity:0;transform:rotate(-2deg) translateY(calc(3*var(--u)))}8%{opacity:1;transform:rotate(-2deg) translateY(0);animation-timing-function:cubic-bezier(.3,1.25,.5,1)}30%,84%{opacity:1;transform:rotate(var(--a)) translateY(0)}95%{opacity:1;transform:rotate(-2deg) translateY(0)}100%{opacity:0;transform:rotate(-2deg) translateY(calc(3*var(--u)))}}
@keyframes beauty-swatch-fan-pull{0%{opacity:0;transform:rotate(-2deg) translateY(calc(3*var(--u)))}8%{opacity:1;transform:rotate(-2deg) translateY(0);animation-timing-function:cubic-bezier(.3,1.25,.5,1)}30%{transform:rotate(var(--a)) translateY(0);animation-timing-function:cubic-bezier(.2,.8,.2,1)}38%,78%{transform:rotate(var(--a)) translateY(calc(-3.4*var(--u)))}84%{opacity:1;transform:rotate(var(--a)) translateY(0)}95%{opacity:1;transform:rotate(-2deg) translateY(0)}100%{opacity:0;transform:rotate(-2deg) translateY(calc(3*var(--u)))}}
@keyframes beauty-swatch-fan-bottle{0%,22%{opacity:0;transform:translateY(calc(5*var(--u))) rotate(6deg)}40%{opacity:1;transform:translateY(0) rotate(0)}64%{transform:translateY(calc(-.6*var(--u))) rotate(-1.5deg)}86%{opacity:1;transform:translateY(0) rotate(0)}96%,100%{opacity:0;transform:translateY(calc(4*var(--u))) rotate(4deg)}}
@keyframes beauty-swatch-fan-shadow{0%,22%{opacity:0;transform:scale(.5)}40%{opacity:1;transform:scale(1)}64%{transform:scale(.92)}86%{opacity:1;transform:scale(1)}96%,100%{opacity:0;transform:scale(.6)}}
@keyframes beauty-swatch-fan-c1{0%,24%{opacity:0;transform:translateY(1.2cqw)}36%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-swatch-fan-nm{0%,26%{opacity:1;transform:translateY(105%)}40%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-swatch-fan-c2{0%,30%{opacity:0;transform:translateY(1.2cqw)}43%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-swatch-fan-c3{0%,33%{opacity:0;transform:translateX(calc(-1.6*var(--u)))}45%,86%{opacity:1;transform:translateX(0)}95%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-swatch-fan-c4{0%,35%{opacity:0;transform:translateY(1.2cqw)}47%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const beautyReviews: SceneSpec = {
  id: "beauty-reviews",
  slug: "mg-beauty-reviews",
  name: "Review Card Cascade",
  kind: "scene",
  job: "testimonials",
  language: "editorial",
  mechanic: "rating-roll-and-cards-drop",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#F7EEE6", accent: "#E2B260", secondary: "#E7B4A0", paper: "#3E0F1A" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "reviews", "rating", "social-proof"],
  fields: [
    { key: "kicker", label: "Eyebrow", default: "what clients say", maxChars: 22, role: "kicker" },
    { key: "score", label: "Rating", default: "4.9", maxChars: 4, role: "value" },
    { key: "quote1", label: "First review", default: "Best color I've had in years.", maxChars: 36, role: "body" },
    { key: "quote2", label: "Second review", default: "Skin still glowing a week later.", maxChars: 36, role: "body" },
  ],
  html: `<div class="qm">&ldquo;</div>
<div class="eb" data-21st-slot="kicker">{{kicker}}</div>
<div class="score" data-21st-slot="score">{{score|chars}}</div>
<div class="stars"><div class="base">${STARS5}</div><div class="fill">${STARS5}</div></div>
<div class="cnt">from 1,286 verified visits</div>
<div class="loc">${ARCH}Velline Studio · Linden Row</div>
<div class="panel c1"><div class="in">
  <div class="hd"><i class="av" style="--g:linear-gradient(135deg,#E8A27C,#B5523A)">L</i><div class="who"><b>Lena Kovač</b><small>Copper balayage · with Inès</small></div><div class="st">${STARS5}</div></div>
  <p>&ldquo;<span data-21st-slot="quote1">{{quote1}}</span>&rdquo;</p>
</div></div>
<div class="panel c2"><div class="in">
  <div class="hd"><i class="av" style="--g:linear-gradient(135deg,#C88EB0,#7A3A6A)">P</i><div class="who"><b>Priya Shah</b><small>Gel manicure · with Mara</small></div><div class="st">${STARS5}</div></div>
  <p>&ldquo;Nails still perfect at week three.&rdquo;</p>
</div></div>
<div class="panel c3"><div class="in">
  <div class="hd"><i class="av" style="--g:linear-gradient(135deg,#9DB4A0,#4F6E5E)">J</i><div class="who"><b>Jo Martell</b><small>Velvet facial · with Odile</small></div><div class="st">${STARS5}</div></div>
  <p>&ldquo;<span data-21st-slot="quote2">{{quote2}}</span>&rdquo;</p>
</div></div>`,
  css: `
.v-beauty-reviews{color:var(--ink);font-family:var(--font-body)}
.v-beauty-reviews > *{--u:1cqw}
.v-beauty-reviews[data-backdrop="on"]{background:radial-gradient(110% 120% at 20% 30%,color-mix(in srgb,var(--paper),#fff 12%) 0%,var(--paper) 50%,color-mix(in srgb,var(--paper),#000 38%) 100%)}
.v-beauty-reviews[data-backdrop="off"] .qm{display:none}
.v-beauty-reviews .qm{position:absolute;left:66cqw;top:-15cqw;font:400 48cqw/1 var(--font-display);color:color-mix(in srgb,var(--ink) 5%,transparent);animation:beauty-reviews-qm 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-reviews .eb{position:absolute;left:7cqw;top:8.5cqw;font:500 1.5cqw/1.2 var(--font-body);letter-spacing:.14em;color:var(--secondary);animation:beauty-reviews-eb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .score{position:absolute;left:6.4cqw;top:9.6cqw;display:flex;height:1.4em;overflow:hidden;font:400 15cqw/1.4 var(--font-display);letter-spacing:-.02em;animation:beauty-reviews-score 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .c{position:relative;display:block;--delay:calc(var(--i) * .08s);animation:beauty-reviews-roll 6s linear infinite}
.v-beauty-reviews .c::before{content:"0\\A 1\\A 2\\A 3\\A 4\\A 5\\A 6";position:absolute;left:0;right:0;bottom:100%;white-space:pre;text-align:center;line-height:1.4}
.v-beauty-reviews .stars{position:absolute;left:7cqw;top:30.4cqw;width:calc(17*var(--u));height:calc(3*var(--u))}
.v-beauty-reviews .stars div{position:absolute;inset:0;display:flex;gap:calc(.5*var(--u))}
.v-beauty-reviews .stars svg{flex:none;width:calc(3*var(--u));height:calc(3*var(--u))}
.v-beauty-reviews .base svg{fill:color-mix(in srgb,var(--ink) 16%,transparent)}
.v-beauty-reviews .fill svg{fill:var(--accent)}
.v-beauty-reviews .fill{animation:beauty-reviews-stars 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-reviews .cnt{position:absolute;left:7cqw;top:35.4cqw;font:400 1.7cqw/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 78%,transparent);animation:beauty-reviews-cnt 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .loc{position:absolute;left:7cqw;top:41cqw;width:33cqw;display:flex;align-items:center;gap:.8cqw;padding-top:2cqw;border-top:1px solid color-mix(in srgb,var(--ink) 16%,transparent);font:500 1.25cqw/1 var(--font-body);letter-spacing:.06em;color:color-mix(in srgb,var(--ink) 62%,transparent);animation:beauty-reviews-loc 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .loc svg{width:1.8cqw;height:1.8cqw;color:var(--accent)}
.v-beauty-reviews .panel{position:absolute;width:calc(47*var(--u))}
.v-beauty-reviews .c1{left:44cqw;top:6cqw;--r:-2.2deg;animation:beauty-reviews-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .c2{left:48.5cqw;top:20cqw;--r:1.6deg;animation:beauty-reviews-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .c3{left:45cqw;top:34cqw;--r:-1deg;animation:beauty-reviews-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-reviews .in{padding:calc(1.7*var(--u)) calc(2.2*var(--u));border-radius:calc(1.4*var(--u));background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 6%,#FBF4EC),color-mix(in srgb,var(--paper) 10%,#F3E6DA));color:#2A0E14;box-shadow:0 calc(1.6*var(--u)) calc(3.4*var(--u)) rgba(20,0,6,.4),0 calc(.2*var(--u)) calc(.4*var(--u)) rgba(20,0,6,.25)}
.v-beauty-reviews .hd{display:flex;align-items:center;gap:calc(1.2*var(--u))}
.v-beauty-reviews .av{flex:none;display:flex;align-items:center;justify-content:center;width:calc(4.2*var(--u));height:calc(4.2*var(--u));border-radius:50%;background:var(--g);font:400 calc(2.2*var(--u))/1 var(--font-display);color:#FFF6EE}
.v-beauty-reviews .who b{display:block;font:600 calc(1.6*var(--u))/1.1 var(--font-body)}
.v-beauty-reviews .who small{display:block;margin-top:calc(.4*var(--u));font:400 calc(1.2*var(--u))/1 var(--font-body);color:#8A6A62}
.v-beauty-reviews .st{display:flex;gap:calc(.2*var(--u));margin-left:auto}
.v-beauty-reviews .st svg{width:calc(1.5*var(--u));height:calc(1.5*var(--u));fill:#C9973F}
.v-beauty-reviews .in p{margin:calc(1.1*var(--u)) 0 0;font:italic 400 calc(2.5*var(--u))/1.25 var(--font-display);white-space:nowrap}
@container (max-aspect-ratio: 4/5){
  .v-beauty-reviews .qm{left:50cqw;top:-10cqw;font-size:90cqw}
  .v-beauty-reviews .eb{left:8cqw;top:7cqh;font-size:5.4cqw;letter-spacing:.08em}
  .v-beauty-reviews .score{left:7cqw;top:8.5cqh;font-size:32cqw}
  .v-beauty-reviews .stars{--u:2.6cqw;left:8cqw;top:32cqh}
  .v-beauty-reviews .cnt{left:8cqw;top:37.6cqh;font-size:4.6cqw}
  .v-beauty-reviews .loc{display:none}
  .v-beauty-reviews .panel{--u:1.8cqw}
  .v-beauty-reviews .c1{left:6cqw;top:45cqh}
  .v-beauty-reviews .c2{left:9cqw;top:60.5cqh}
  .v-beauty-reviews .c3{left:6cqw;top:76cqh}
  .v-beauty-reviews .in p{font-size:calc(3.1*var(--u));white-space:normal}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-reviews .eb{left:6cqw;top:6cqw;font-size:2.2cqw}
  .v-beauty-reviews .score{left:5.4cqw;top:8cqw;font-size:19cqw}
  .v-beauty-reviews .stars{--u:1.5cqw;left:50cqw;top:15cqw}
  .v-beauty-reviews .cnt{left:50cqw;top:22cqw;font-size:2.4cqw}
  .v-beauty-reviews .loc{left:50cqw;top:28cqw;width:42cqw;font-size:1.9cqw;padding-top:2.4cqw}
  .v-beauty-reviews .loc svg{width:2.6cqw;height:2.6cqw}
  .v-beauty-reviews .panel{--u:1.6cqw}
  .v-beauty-reviews .c1{left:6cqw;top:40cqw}
  .v-beauty-reviews .c2{left:16cqw;top:58cqw}
  .v-beauty-reviews .c3{left:9cqw;top:76cqw}
}
@keyframes beauty-reviews-qm{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(1.5cqw) rotate(2deg)}}
@keyframes beauty-reviews-eb{0%,2%{opacity:0;transform:translateY(1cqw)}14%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-reviews-score{0%,4%{opacity:0;transform:translateY(2cqw)}18%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-reviews-roll{0%,6%{transform:translateY(9.8em);animation-timing-function:cubic-bezier(.12,.75,.2,1)}34%,100%{transform:translateY(0)}}
@keyframes beauty-reviews-stars{0%,16%{opacity:1;clip-path:inset(0 100% 0 0)}36%,86%{opacity:1;clip-path:inset(0 0 0 0)}95%,100%{opacity:0;clip-path:inset(0 0 0 0)}}
@keyframes beauty-reviews-cnt{0%,24%{opacity:0;transform:translateY(1cqw)}38%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-reviews-loc{0%,30%{opacity:0;transform:translateY(1cqw)}44%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-reviews-c1{0%,10%{opacity:0;transform:translateY(calc(-5*var(--u))) rotate(calc(var(--r) - 6deg));animation-timing-function:cubic-bezier(.3,1.3,.5,1)}24%{opacity:1;transform:translateY(0) rotate(var(--r))}55%{transform:translateY(calc(-.5*var(--u))) rotate(var(--r))}86%{opacity:1;transform:translateY(0) rotate(var(--r))}94%,100%{opacity:0;transform:translateY(calc(3*var(--u))) rotate(var(--r))}}
@keyframes beauty-reviews-c2{0%,16%{opacity:0;transform:translateY(calc(-5*var(--u))) rotate(calc(var(--r) + 6deg));animation-timing-function:cubic-bezier(.3,1.3,.5,1)}30%{opacity:1;transform:translateY(0) rotate(var(--r))}62%{transform:translateY(calc(.4*var(--u))) rotate(var(--r))}88%{opacity:1;transform:translateY(0) rotate(var(--r))}96%,100%{opacity:0;transform:translateY(calc(3*var(--u))) rotate(var(--r))}}
@keyframes beauty-reviews-c3{0%,22%{opacity:0;transform:translateY(calc(-5*var(--u))) rotate(calc(var(--r) - 5deg));animation-timing-function:cubic-bezier(.3,1.3,.5,1)}36%{opacity:1;transform:translateY(0) rotate(var(--r))}58%{transform:translateY(calc(-.35*var(--u))) rotate(var(--r))}90%{opacity:1;transform:translateY(0) rotate(var(--r))}98%,100%{opacity:0;transform:translateY(calc(3*var(--u))) rotate(var(--r))}}
`,
};

export const beautyBeforeAfter: SceneSpec = {
  id: "beauty-before-after",
  slug: "mg-beauty-before-after",
  name: "Color Before After",
  kind: "scene",
  job: "gallery",
  language: "photo-collage",
  mechanic: "divider-wipe-reveals-result",
  energy: "default",
  settle: 3.0,
  colors: { ink: "#2B1A14", accent: "#B2512A", secondary: "#7A6052", paper: "#F0D3BC" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "hair", "before-after", "transformation"],
  fields: [
    { key: "before", label: "Before label", default: "before", maxChars: 10, role: "label" },
    { key: "after", label: "After label", default: "after", maxChars: 10, role: "label" },
    { key: "title", label: "Service", default: "Copper balayage", maxChars: 22, role: "headline" },
    { key: "sub", label: "Credit", default: "by Inès Marlowe · 3 h 20 min", maxChars: 34, role: "caption" },
  ],
  html: `<div class="frame">
  <div class="cam">
    <svg class="ph" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="beauty-ba-bg1" cx="50%" cy="35%" r="75%"><stop offset="0" stop-color="color-mix(in srgb,var(--paper) 30%,#E4E0DC)"/><stop offset=".6" stop-color="color-mix(in srgb,var(--paper) 30%,#C9C3BD)"/><stop offset="1" stop-color="color-mix(in srgb,var(--paper) 30%,#ADA59E)"/></radialGradient><linearGradient id="beauty-ba-cape1" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ECE6DE"/><stop offset="1" stop-color="#CFC6BB"/></linearGradient><linearGradient id="beauty-ba-hair1" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#4A403A"/><stop offset=".5" stop-color="#625750"/><stop offset="1" stop-color="#726760"/></linearGradient><linearGradient id="beauty-ba-round" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#140A06" stop-opacity=".42"/><stop offset=".3" stop-color="#140A06" stop-opacity="0"/><stop offset=".7" stop-color="#140A06" stop-opacity="0"/><stop offset="1" stop-color="#140A06" stop-opacity=".42"/></linearGradient></defs><rect width="400" height="500" fill="url(#beauty-ba-bg1)"/><path d="M20 500C30 400 90 330 200 322C310 330 370 400 380 500Z" fill="url(#beauty-ba-cape1)"/><path d="M200 70C246 70 276 104 280 150C284 196 290 232 300 270C310 308 318 340 314 372C312 392 300 404 286 404C274 418 254 414 244 404C232 416 212 418 200 408C188 418 168 416 156 404C146 414 126 418 114 404C100 404 88 392 86 372C82 340 90 308 100 270C110 232 116 196 120 150C124 104 154 70 200 70Z" fill="url(#beauty-ba-hair1)"/><path d="M200 70C246 70 276 104 280 150C284 196 290 232 300 270C310 308 318 340 314 372C312 392 300 404 286 404C274 418 254 414 244 404C232 416 212 418 200 408C188 418 168 416 156 404C146 414 126 418 114 404C100 404 88 392 86 372C82 340 90 308 100 270C110 232 116 196 120 150C124 104 154 70 200 70Z" fill="url(#beauty-ba-round)"/><g fill="none" stroke-linecap="round"><path d="M150 118C140 180 128 240 124 300S112 380 116 400" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M174 100C168 170 160 240 162 320S160 390 160 406" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M200 94C199 170 200 260 200 330S198 395 200 408" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M226 100C232 170 240 240 238 320S240 390 240 406" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M250 118C260 180 272 240 276 300S288 380 284 400" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M130 160C120 220 108 280 100 330S96 370 96 384" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M270 160C280 220 292 280 300 330S304 370 304 384" stroke="#3A312C" stroke-width="2.2" opacity="0.45"/><path d="M174 100C168 170 160 240 162 320S160 390 160 406" stroke="#8A7D73" stroke-width="1.2" opacity="0.35"/><path d="M226 100C232 170 240 240 238 320S240 390 240 406" stroke="#8A7D73" stroke-width="1.2" opacity="0.35"/></g><g fill="none" stroke="#7E7168" stroke-width="1.1" stroke-linecap="round" opacity=".7"><path d="M188 72C180 62 170 58 160 58"/><path d="M214 72C220 62 230 60 238 62"/><path d="M118 196C110 192 104 186 100 178"/><path d="M286 214C294 210 300 202 302 194"/><path d="M120 406C116 414 110 418 104 420"/><path d="M262 410C266 418 272 422 278 424"/></g></svg><div class="aft"><svg class="ph" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><radialGradient id="beauty-ba-bg2" cx="50%" cy="32%" r="75%"><stop offset="0" stop-color="color-mix(in srgb,var(--paper),#fff 45%)"/><stop offset=".55" stop-color="var(--paper)"/><stop offset="1" stop-color="color-mix(in srgb,var(--paper),var(--accent) 30%)"/></radialGradient><linearGradient id="beauty-ba-cape2" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FAF5EE"/><stop offset="1" stop-color="#DCCDBE"/></linearGradient><linearGradient id="beauty-ba-hair2" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="color-mix(in srgb,var(--accent),#000 72%)"/><stop offset=".18" stop-color="color-mix(in srgb,var(--accent),#000 42%)"/><stop offset=".48" stop-color="var(--accent)"/><stop offset=".78" stop-color="color-mix(in srgb,var(--accent),#fff 28%)"/><stop offset="1" stop-color="color-mix(in srgb,var(--accent),#fff 52%)"/></linearGradient><linearGradient id="beauty-ba-round2" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#3A1206" stop-opacity=".38"/><stop offset=".3" stop-color="#3A1206" stop-opacity="0"/><stop offset=".7" stop-color="#3A1206" stop-opacity="0"/><stop offset="1" stop-color="#3A1206" stop-opacity=".38"/></linearGradient><linearGradient id="beauty-ba-ribbon" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="140" y2="410"><stop offset="0" stop-color="#F6C894" stop-opacity="0"/><stop offset=".5" stop-color="#F6C894" stop-opacity=".55"/><stop offset="1" stop-color="#FFE0B6" stop-opacity=".85"/></linearGradient><linearGradient id="beauty-ba-shine" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#FFE6C8" stop-opacity="0"/><stop offset=".5" stop-color="#FFE6C8" stop-opacity=".5"/><stop offset="1" stop-color="#FFE6C8" stop-opacity="0"/></linearGradient><clipPath id="beauty-ba-clip"><path d="M200 70C246 70 276 104 280 150C284 196 290 232 300 270C310 308 318 340 314 372C312 392 300 404 286 404C274 418 254 414 244 404C232 416 212 418 200 408C188 418 168 416 156 404C146 414 126 418 114 404C100 404 88 392 86 372C82 340 90 308 100 270C110 232 116 196 120 150C124 104 154 70 200 70Z"/></clipPath></defs><rect width="400" height="500" fill="url(#beauty-ba-bg2)"/><circle cx="200" cy="200" r="178" fill="#FFF4E8" opacity=".35"/><path d="M20 500C30 400 90 330 200 322C310 330 370 400 380 500Z" fill="url(#beauty-ba-cape2)"/><path d="M200 70C246 70 276 104 280 150C284 196 290 232 300 270C310 308 318 340 314 372C312 392 300 404 286 404C274 418 254 414 244 404C232 416 212 418 200 408C188 418 168 416 156 404C146 414 126 418 114 404C100 404 88 392 86 372C82 340 90 308 100 270C110 232 116 196 120 150C124 104 154 70 200 70Z" fill="url(#beauty-ba-hair2)"/><g clip-path="url(#beauty-ba-clip)"><g fill="none" stroke-linecap="round"><path d="M150 118C140 180 128 240 124 300S112 380 116 400" stroke="url(#beauty-ba-ribbon)" stroke-width="16" opacity="1"/><path d="M200 94C199 170 200 260 200 330S198 395 200 408" stroke="url(#beauty-ba-ribbon)" stroke-width="16" opacity="1"/><path d="M250 118C260 180 272 240 276 300S288 380 284 400" stroke="url(#beauty-ba-ribbon)" stroke-width="16" opacity="1"/><path d="M130 160C120 220 108 280 100 330S96 370 96 384" stroke="url(#beauty-ba-ribbon)" stroke-width="9" opacity="0.8"/><path d="M270 160C280 220 292 280 300 330S304 370 304 384" stroke="url(#beauty-ba-ribbon)" stroke-width="9" opacity="0.8"/></g><path d="M200 70C246 70 276 104 280 150C284 196 290 232 300 270C310 308 318 340 314 372C312 392 300 404 286 404C274 418 254 414 244 404C232 416 212 418 200 408C188 418 168 416 156 404C146 414 126 418 114 404C100 404 88 392 86 372C82 340 90 308 100 270C110 232 116 196 120 150C124 104 154 70 200 70Z" fill="url(#beauty-ba-round2)"/><g fill="none" stroke-linecap="round"><path d="M174 100C168 170 160 240 162 320S160 390 160 406" stroke="#5E2410" stroke-width="2" opacity="0.4"/><path d="M226 100C232 170 240 240 238 320S240 390 240 406" stroke="#5E2410" stroke-width="2" opacity="0.4"/><path d="M130 160C120 220 108 280 100 330S96 370 96 384" stroke="#5E2410" stroke-width="2" opacity="0.4"/><path d="M270 160C280 220 292 280 300 330S304 370 304 384" stroke="#5E2410" stroke-width="2" opacity="0.4"/><path d="M150 118C140 180 128 240 124 300S112 380 116 400" stroke="#FFD7A8" stroke-width="1.6" opacity="0.55"/><path d="M200 94C199 170 200 260 200 330S198 395 200 408" stroke="#FFD7A8" stroke-width="1.6" opacity="0.55"/><path d="M250 118C260 180 272 240 276 300S288 380 284 400" stroke="#FFD7A8" stroke-width="1.6" opacity="0.55"/></g><path d="M128 132C166 100 234 100 272 132" fill="none" stroke="#FFF1DE" stroke-width="14" stroke-linecap="round" opacity=".22"/><path d="M136 128C170 102 230 102 264 128" fill="none" stroke="#FFF6EA" stroke-width="4" stroke-linecap="round" opacity=".45"/><rect class="shim" x="80" y="40" width="240" height="70" fill="url(#beauty-ba-shine)"/></g></svg></div>
    <div class="div"><i class="ln"></i><i class="knob"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></div>
  </div>
  <span class="lb lb-b" data-21st-slot="before">{{before}}</span>
  <span class="lb lb-a" data-21st-slot="after">{{after}}</span>
</div>
<div class="mark">${ARCH}velline</div>
<div class="cap"><div class="ct"><b data-21st-slot="title">{{title}}</b><small data-21st-slot="sub">{{sub}}</small></div><span class="pill">$240</span></div>`,
  css: `
.v-beauty-before-after{color:var(--ink);font-family:var(--font-body)}
.v-beauty-before-after > *{--u:.4cqw}
.v-beauty-before-after[data-backdrop="on"]{background:radial-gradient(120% 100% at 30% 40%,color-mix(in srgb,var(--paper),#fff 35%) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper),var(--accent) 18%) 100%)}
.v-beauty-before-after[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-beauty-before-after .frame{position:absolute;left:7cqw;top:4.25cqw;width:calc(100*var(--u));height:calc(120*var(--u));border-radius:2cqw;overflow:hidden;box-shadow:0 2cqw 5cqw rgba(60,30,10,.22)}
.v-beauty-before-after .cam{position:absolute;inset:0;animation:beauty-before-after-cam 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-before-after .ph{position:absolute;left:0;top:0;width:100%;height:100%;display:block}
.v-beauty-before-after .aft{position:absolute;inset:0;animation:beauty-before-after-clip 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-before-after .shim{transform-box:fill-box;animation:beauty-before-after-shim 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-before-after .div{position:absolute;inset:0;animation:beauty-before-after-div 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-before-after .ln{position:absolute;left:calc(-.2*var(--u));top:0;bottom:0;width:calc(.5*var(--u));background:#FFFBF6;box-shadow:0 0 calc(1.4*var(--u)) rgba(60,30,10,.25)}
.v-beauty-before-after .knob{position:absolute;left:calc(-5*var(--u));top:calc(55% - calc(5*var(--u)));width:calc(10*var(--u));height:calc(10*var(--u));display:flex;align-items:center;justify-content:center;border-radius:50%;background:#FFFBF6;color:#3A2A22;box-shadow:0 calc(1*var(--u)) calc(3*var(--u)) rgba(60,30,10,.3)}
.v-beauty-before-after .knob svg{width:calc(6*var(--u));height:calc(6*var(--u))}
.v-beauty-before-after .lb{position:absolute;top:calc(5*var(--u));padding:.5em 1em;border-radius:5em;font:500 1.3cqw/1.2 var(--font-body);letter-spacing:.06em;white-space:nowrap}
.v-beauty-before-after .lb-b{left:calc(5*var(--u));background:rgba(255,255,255,.62);color:#4A3E36;animation:beauty-before-after-lbb 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-before-after .lb-a{right:calc(5*var(--u));background:var(--ink);color:var(--paper);animation:beauty-before-after-lba 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-before-after .mark{position:absolute;left:54cqw;top:11cqw;display:flex;align-items:center;gap:1cqw;font:400 2.6cqw/1.2 var(--font-display);animation:beauty-before-after-mark 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-before-after .mark svg{width:2.6cqw;height:2.6cqw;color:var(--accent)}
.v-beauty-before-after .cap{position:absolute;left:54cqw;top:17cqw;width:38cqw;display:flex;flex-direction:column;align-items:flex-start;gap:2.4cqw;animation:beauty-before-after-cap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-before-after .cap b{display:block;font:400 6cqw/1.2 var(--font-display)}
.v-beauty-before-after .cap small{display:block;margin-top:.6cqw;font:400 1.6cqw/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 65%,transparent)}
.v-beauty-before-after .pill{flex:none;padding:1cqw 2cqw;border-radius:5cqw;background:var(--ink);color:var(--paper);font:500 1.8cqw/1.2 var(--font-body)}
@container (max-aspect-ratio: 4/5){
  .v-beauty-before-after > *{--u:1cqw}
  .v-beauty-before-after .frame{left:0;top:0;width:100cqw;height:100cqh;border-radius:0;box-shadow:none}
  .v-beauty-before-after .lb{top:12cqh;font-size:5.4cqw}
  .v-beauty-before-after .mark{display:none}
  .v-beauty-before-after .mark svg{width:8cqw;height:8cqw}
  .v-beauty-before-after .cap{left:6cqw;right:6cqw;width:auto;top:auto;bottom:4cqh;flex-direction:row;align-items:center;justify-content:space-between;gap:3cqw;padding:4cqw 5cqw;border-radius:4cqw;background:color-mix(in srgb,var(--paper) 88%,transparent);box-shadow:0 2cqw 5cqw rgba(60,30,10,.18)}
  .v-beauty-before-after .cap b{font-size:9cqw}
  .v-beauty-before-after .cap small{font-size:5.4cqw}
  .v-beauty-before-after .pill{font-size:5.4cqw;padding:2.4cqw 4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-before-after > *{--u:1cqw}
  .v-beauty-before-after .frame{left:0;top:0;width:100cqw;height:100cqh;border-radius:0;box-shadow:none}
  .v-beauty-before-after .lb{font-size:2.6cqw}
  .v-beauty-before-after .mark{display:none}
  .v-beauty-before-after .mark svg{width:4.6cqw;height:4.6cqw}
  .v-beauty-before-after .cap{left:6cqw;right:6cqw;width:auto;top:auto;bottom:5cqw;flex-direction:row;align-items:center;justify-content:space-between;gap:3cqw;padding:2.8cqw 3.6cqw;border-radius:3cqw;background:color-mix(in srgb,var(--paper) 88%,transparent);box-shadow:0 2cqw 5cqw rgba(60,30,10,.18)}
  .v-beauty-before-after .cap small{font-size:2.5cqw}
  .v-beauty-before-after .pill{font-size:3cqw;padding:1.6cqw 2.6cqw}
}
@keyframes beauty-before-after-cam{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}
@keyframes beauty-before-after-clip{0%,4%{opacity:1;clip-path:inset(0 0 0 100%)}10%{opacity:1;clip-path:inset(0 0 0 90%)}30%,60%{opacity:1;clip-path:inset(0 0 0 50%)}72%,86%{opacity:1;clip-path:inset(0 0 0 0)}95%{opacity:0;clip-path:inset(0 0 0 0)}100%{opacity:0;clip-path:inset(0 0 0 100%)}}
@keyframes beauty-before-after-div{0%,4%{opacity:0;transform:translateX(100%)}10%{opacity:1;transform:translateX(90%)}30%{opacity:1;transform:translateX(50%)}60%{opacity:1;transform:translateX(50%)}66%{opacity:1}72%{opacity:0;transform:translateX(0)}99%{opacity:0;transform:translateX(0)}100%{opacity:0;transform:translateX(100%)}}
@keyframes beauty-before-after-shim{0%,14%{transform:translateY(-120%)}44%,100%{transform:translateY(620%)}}
@keyframes beauty-before-after-mark{0%,2%{opacity:0;transform:translateY(-1.5cqw)}14%,88%{opacity:1;transform:translateY(0)}97%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-before-after-lbb{0%,4%{opacity:0;transform:translateY(calc(-1.5*var(--u)))}14%,62%{opacity:1;transform:translateY(0)}70%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-before-after-lba{0%,14%{opacity:0;transform:translateY(calc(-1.5*var(--u)))}26%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-before-after-cap{0%,8%{opacity:0;transform:translateY(4cqw)}22%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(3cqw)}}
`,
};

export const beautyIngredients: SceneSpec = {
  id: "beauty-ingredients",
  slug: "mg-beauty-ingredients",
  name: "Ingredient Callouts",
  kind: "scene",
  job: "product-ui",
  language: "editorial",
  mechanic: "leader-lines-callout-actives",
  energy: "calm",
  settle: 3.0,
  colors: { ink: "#1F2F2C", accent: "#1F4A44", secondary: "#8FAA9D", paper: "#D4E3DF" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "skincare", "ingredients", "callouts"],
  fields: [
    { key: "headline", label: "Headline", default: "Four actives. Nothing you don't need.", maxChars: 40, role: "headline" },
    { key: "ing1", label: "Active 1", default: "Ceramide NP", maxChars: 16, role: "label" },
    { key: "ing2", label: "Active 2", default: "Squalane", maxChars: 16, role: "label" },
    { key: "ing3", label: "Active 3", default: "Niacinamide", maxChars: 16, role: "label" },
  ],
  html: `<div class="hdr"><span>velline lab / formula 07</span><span class="r">pH 5.5 · fragrance-free · 50 ml</span></div>
<div class="ob">
  <i class="halo"></i>
  <svg class="r1" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="49.4" fill="none" stroke="var(--accent)" stroke-opacity=".32" stroke-width=".35" pathLength="360" stroke-dasharray="1 4"/></svg>
  <i class="r2"></i>
  <i class="shadow"></i>
  <div class="prod"><svg class="tube" viewBox="0 0 120 300" aria-hidden="true"><defs><linearGradient id="beauty-ing-body" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#B9C6C2"/><stop offset=".22" stop-color="#EEF3F1"/><stop offset=".45" stop-color="#FFFFFF"/><stop offset=".72" stop-color="#E3EAE8"/><stop offset="1" stop-color="#AEBDB8"/></linearGradient><linearGradient id="beauty-ing-cap" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="color-mix(in srgb,var(--secondary),#000 35%)"/><stop offset=".35" stop-color="var(--secondary)"/><stop offset=".5" stop-color="color-mix(in srgb,var(--secondary),#fff 18%)"/><stop offset="1" stop-color="color-mix(in srgb,var(--secondary),#000 40%)"/></linearGradient><linearGradient id="beauty-ing-crimp" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C6D1CD"/><stop offset=".5" stop-color="#F6F9F8"/><stop offset="1" stop-color="#BCC8C4"/></linearGradient><linearGradient id="beauty-ing-sheen" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity=".85"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient><clipPath id="beauty-ing-clip"><path d="M16 22L104 22C104 120 98 210 84 248L36 248C22 210 16 120 16 22Z"/></clipPath></defs><rect x="13" y="6" width="94" height="17" rx="2" fill="url(#beauty-ing-crimp)"/><path d="M18 8V21M22 8V21M26 8V21M30 8V21M34 8V21M38 8V21M42 8V21M46 8V21M50 8V21M54 8V21M58 8V21M62 8V21M66 8V21M70 8V21M74 8V21M78 8V21M82 8V21M86 8V21M90 8V21M94 8V21M98 8V21M102 8V21" stroke="#A9B7B2" stroke-width=".8" opacity=".7"/><path d="M16 22L104 22C104 120 98 210 84 248L36 248C22 210 16 120 16 22Z" fill="url(#beauty-ing-body)"/><g clip-path="url(#beauty-ing-clip)"><rect x="0" y="150" width="120" height="16" fill="var(--secondary)" opacity=".85"/><text x="60" y="66" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-size="17" fill="#1F2F2C">velline</text><text x="60" y="88" text-anchor="middle" font-family="Instrument Serif, Georgia, serif" font-style="italic" font-size="12" fill="#1F2F2C">Barrier Balm</text><text x="60" y="104" text-anchor="middle" font-family="Geist Mono, monospace" font-size="4.6" fill="#4C605B">ceramide + niacinamide 5%</text><text x="60" y="161" text-anchor="middle" font-family="Geist Mono, monospace" font-size="5" fill="#F4F8F6">formula 07</text><text x="60" y="226" text-anchor="middle" font-family="Geist, sans-serif" font-size="5.5" fill="#4C605B">50 ml · 1.7 fl oz</text><rect class="sheen" x="0" y="0" width="30" height="260" fill="url(#beauty-ing-sheen)"/></g><path d="M36 248C42 256 78 256 84 248L83 260L37 260Z" fill="#C9D4D0"/><rect x="32" y="258" width="56" height="38" rx="5" fill="url(#beauty-ing-cap)"/><path d="M36 262V292M40 262V292M44 262V292M48 262V292M52 262V292M56 262V292M60 262V292M64 262V292M68 262V292M72 262V292M76 262V292M80 262V292M84 262V292" stroke="#4A6356" stroke-width=".8" opacity=".45"/></svg></div>
  <i class="ld l1"></i><i class="ld l2"></i><i class="ld l3"></i><i class="ld l4"></i>
  <i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><i class="dot d4"></i>
</div>
<div class="lab a1"><b>0.5%</b><span data-21st-slot="ing1">{{ing1}}</span><small>rebuilds the skin barrier</small></div>
<div class="lab a2"><b>3%</b><span data-21st-slot="ing2">{{ing2}}</span><small>locks moisture in for 24 h</small></div>
<div class="lab a3"><b>5%</b><span data-21st-slot="ing3">{{ing3}}</span><small>evens tone, refines pores</small></div>
<div class="lab a4"><b>2%</b><span>Colloidal oat</span><small>calms redness on contact</small></div>
<div class="cap" data-21st-slot="headline">{{headline|words}}</div>`,
  css: `
.v-beauty-ingredients{color:var(--ink);font-family:var(--font-body)}
.v-beauty-ingredients > *{--u:1cqw}
.v-beauty-ingredients[data-backdrop="on"]{background:linear-gradient(160deg,color-mix(in srgb,var(--paper),#fff 40%) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper),var(--accent) 12%) 100%)}
.v-beauty-ingredients[data-backdrop="off"] .halo{display:none}
.v-beauty-ingredients .hdr{position:absolute;left:6cqw;right:6cqw;top:4.4cqw;display:flex;justify-content:space-between;font:400 1.25cqw/1.2 var(--font-mono);letter-spacing:.02em;color:color-mix(in srgb,var(--ink) 75%,transparent);animation:beauty-ingredients-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .ob{position:absolute;left:28cqw;top:4.75cqw;width:calc(44*var(--u));height:calc(44*var(--u))}
.v-beauty-ingredients .halo{position:absolute;left:0;top:0;width:calc(44*var(--u));height:calc(44*var(--u));border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--paper),#fff 80%),transparent);animation:beauty-ingredients-halo 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-ingredients .r1{position:absolute;left:calc(4*var(--u));top:calc(4*var(--u));width:calc(36*var(--u));height:calc(36*var(--u));animation:beauty-ingredients-spin 6s linear infinite}
.v-beauty-ingredients .r2{position:absolute;left:calc(8*var(--u));top:calc(8*var(--u));width:calc(28*var(--u));height:calc(28*var(--u));border-radius:50%;border:1px solid color-mix(in srgb,var(--accent) 14%,transparent)}
.v-beauty-ingredients .shadow{position:absolute;left:calc(15*var(--u));top:calc(39.85*var(--u));width:calc(14*var(--u));height:calc(2.2*var(--u));border-radius:50%;background:radial-gradient(closest-side,rgba(30,60,55,.35),rgba(30,60,55,0));animation:beauty-ingredients-shadow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .prod{position:absolute;left:calc(14.5*var(--u));top:calc(3.25*var(--u));width:calc(15*var(--u));height:calc(37.5*var(--u));animation:beauty-ingredients-prod 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .tube{display:block;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 calc(1.2*var(--u)) calc(1.6*var(--u)) rgba(30,60,55,.18))}
.v-beauty-ingredients .sheen{transform-box:fill-box;animation:beauty-ingredients-sheen 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-ingredients .dot{position:absolute;width:calc(1.3*var(--u));height:calc(1.3*var(--u));border-radius:50%;background:var(--accent);box-shadow:0 0 0 calc(.35*var(--u)) rgba(255,255,255,.92),0 calc(.3*var(--u)) calc(.8*var(--u)) rgba(31,74,68,.35)}
.v-beauty-ingredients .dot::after{content:"";position:absolute;left:calc(-.9*var(--u));top:calc(-.9*var(--u));right:calc(-.9*var(--u));bottom:calc(-.9*var(--u));border-radius:50%;border:1px solid color-mix(in srgb,var(--accent) 45%,transparent);animation:beauty-ingredients-ping 2s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .d1{left:calc(17.55*var(--u));top:calc(6.8*var(--u));animation:beauty-ingredients-d1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .d2{left:calc(18.75*var(--u));top:calc(26.1*var(--u));animation:beauty-ingredients-d2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .d3{left:calc(24.95*var(--u));top:calc(18.1*var(--u));animation:beauty-ingredients-d3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .d4{left:calc(24.15*var(--u));top:calc(28.4*var(--u));animation:beauty-ingredients-d4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .ld{position:absolute;height:1px;background:var(--accent)}
.v-beauty-ingredients .l1{left:calc(3*var(--u));top:calc(7.45*var(--u));width:calc(15.2*var(--u));transform-origin:100% 50%;animation:beauty-ingredients-l1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .l2{left:calc(3*var(--u));top:calc(26.75*var(--u));width:calc(16.4*var(--u));transform-origin:100% 50%;animation:beauty-ingredients-l2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .l3{left:calc(25.6*var(--u));top:calc(18.75*var(--u));width:calc(15.4*var(--u));transform-origin:0 50%;animation:beauty-ingredients-l3 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .l4{left:calc(24.8*var(--u));top:calc(29.05*var(--u));width:calc(16.2*var(--u));transform-origin:0 50%;animation:beauty-ingredients-l4 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .lab{position:absolute;width:calc(24*var(--u));padding:0 calc(.4*var(--u));box-sizing:border-box}
.v-beauty-ingredients .a1{left:6cqw;top:8.3cqw;text-align:right;animation:beauty-ingredients-a1 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .a2{left:6cqw;top:27.6cqw;text-align:right;animation:beauty-ingredients-a2 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .a3{left:70cqw;top:19.6cqw;animation:beauty-ingredients-a3 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .a4{left:70cqw;top:29.9cqw;animation:beauty-ingredients-a4 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-ingredients .lab b{display:block;font:500 calc(3.2*var(--u))/1.2 var(--font-mono);letter-spacing:-.02em;color:var(--accent)}
.v-beauty-ingredients .lab span{display:block;margin-top:calc(.4*var(--u));font:600 calc(1.8*var(--u))/1.2 var(--font-body);color:var(--ink)}
.v-beauty-ingredients .lab small{display:block;margin-top:calc(.4*var(--u));font:400 calc(1.3*var(--u))/1.3 var(--font-body);color:color-mix(in srgb,var(--ink) 68%,transparent)}
.v-beauty-ingredients .cap{position:absolute;left:6cqw;right:6cqw;top:47.8cqw;text-align:center;font:400 2.8cqw/1.2 var(--font-display);animation:beauty-ingredients-cap 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-ingredients .cap .w:nth-child(-n+2){font-style:italic;color:var(--accent)}
@container (max-aspect-ratio: 4/5){
  .v-beauty-ingredients .hdr{left:7cqw;right:7cqw;top:4cqh;font-size:3cqw}
  .v-beauty-ingredients .hdr .r{display:none}
  .v-beauty-ingredients .cap{left:7cqw;right:7cqw;top:8cqh;font-size:10cqw;text-align:left}
  .v-beauty-ingredients .ob{--u:1.6cqw;left:calc(50cqw - calc(22*var(--u)));top:21cqh}
  .v-beauty-ingredients .ld{display:none}
  .v-beauty-ingredients .lab{--u:2.6cqw;width:42cqw;text-align:left}
  .v-beauty-ingredients .a1{left:7cqw;top:59cqh}
  .v-beauty-ingredients .a3{left:53cqw;top:59cqh}
  .v-beauty-ingredients .a2{left:7cqw;top:76cqh}
  .v-beauty-ingredients .a4{left:53cqw;top:76cqh}
  .v-beauty-ingredients .lab span{font-size:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-ingredients .hdr{top:6cqw;font-size:1.9cqw}
  .v-beauty-ingredients .ob{top:20cqw}
  .v-beauty-ingredients .a1{top:23.5cqw}
  .v-beauty-ingredients .a2{top:42.8cqw}
  .v-beauty-ingredients .a3{top:34.8cqw}
  .v-beauty-ingredients .a4{top:45.1cqw}
  .v-beauty-ingredients .lab span{font-size:calc(2.2*var(--u))}
  .v-beauty-ingredients .lab small{font-size:calc(1.6*var(--u))}
  .v-beauty-ingredients .cap{top:72cqw;font-size:6cqw}
}
@keyframes beauty-ingredients-halo{0%,100%{opacity:.8;transform:scale(.96)}50%{opacity:1;transform:scale(1.04)}}
@keyframes beauty-ingredients-spin{0%{transform:rotate(0)}100%{transform:rotate(30deg)}}
@keyframes beauty-ingredients-fade{0%,2%{opacity:0}14%,88%{opacity:1}97%,100%{opacity:0}}
@keyframes beauty-ingredients-prod{0%,3%{opacity:0;transform:translateY(calc(5*var(--u)));filter:blur(calc(.8*var(--u)))}18%,88%{opacity:1;transform:translateY(0);filter:blur(0)}97%,100%{opacity:0;transform:translateY(calc(-2*var(--u)));filter:blur(calc(.6*var(--u)))}}
@keyframes beauty-ingredients-shadow{0%,3%{opacity:0;transform:scale(.5)}18%,88%{opacity:1;transform:scale(1)}97%,100%{opacity:0;transform:scale(.6)}}
@keyframes beauty-ingredients-sheen{0%,14%{transform:translateX(-120%) skewX(-12deg)}44%,100%{transform:translateX(420%) skewX(-12deg)}}
@keyframes beauty-ingredients-ping{0%{opacity:.9;transform:scale(.5)}70%,100%{opacity:0;transform:scale(1.6)}}
@keyframes beauty-ingredients-d1{0%,15%{opacity:0;transform:scale(0)}19%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(0)}}
@keyframes beauty-ingredients-d2{0%,20%{opacity:0;transform:scale(0)}24%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(0)}}
@keyframes beauty-ingredients-d3{0%,25%{opacity:0;transform:scale(0)}29%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(0)}}
@keyframes beauty-ingredients-d4{0%,30%{opacity:0;transform:scale(0)}34%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(0)}}
@keyframes beauty-ingredients-l1{0%,18%{opacity:1;transform:scaleX(0)}26%,86%{opacity:1;transform:scaleX(1)}94%,100%{opacity:0;transform:scaleX(1)}}
@keyframes beauty-ingredients-l2{0%,23%{opacity:1;transform:scaleX(0)}31%,86%{opacity:1;transform:scaleX(1)}94%,100%{opacity:0;transform:scaleX(1)}}
@keyframes beauty-ingredients-l3{0%,28%{opacity:1;transform:scaleX(0)}36%,86%{opacity:1;transform:scaleX(1)}94%,100%{opacity:0;transform:scaleX(1)}}
@keyframes beauty-ingredients-l4{0%,33%{opacity:1;transform:scaleX(0)}41%,86%{opacity:1;transform:scaleX(1)}94%,100%{opacity:0;transform:scaleX(1)}}
@keyframes beauty-ingredients-a1{0%,24%{opacity:1;clip-path:inset(0 0 0 100%);transform:translateX(calc(1*var(--u)))}32%,86%{opacity:1;clip-path:inset(-10% -5% -10% -5%);transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-ingredients-a2{0%,29%{opacity:1;clip-path:inset(0 0 0 100%);transform:translateX(calc(1*var(--u)))}37%,86%{opacity:1;clip-path:inset(-10% -5% -10% -5%);transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-ingredients-a3{0%,34%{opacity:1;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}42%,86%{opacity:1;clip-path:inset(-10% -5% -10% -5%);transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-ingredients-a4{0%,39%{opacity:1;clip-path:inset(0 100% 0 0);transform:translateX(calc(-1*var(--u)))}47%,86%{opacity:1;clip-path:inset(-10% -5% -10% -5%);transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-ingredients-cap{0%,34%{opacity:0;transform:translateY(1.2cqw)}46%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
`,
};

export const beautyLocationCta: SceneSpec = {
  id: "beauty-location-cta",
  slug: "mg-beauty-location-cta",
  name: "Map Pin Location Card",
  kind: "scene",
  job: "cta",
  language: "product-ui",
  mechanic: "pin-drop-on-map-with-hours",
  energy: "calm",
  settle: 2.9,
  colors: { ink: "#F2EBDD", accent: "#D8B26E", secondary: "#3E9A62", paper: "#1E2D25" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["beauty", "salon", "map", "end-card"],
  fields: [
    { key: "place", label: "Pin label", default: "Velline Studio", maxChars: 20, role: "name" },
    { key: "kicker", label: "Eyebrow", default: "visit the studio", maxChars: 22, role: "kicker" },
    { key: "address", label: "Address", default: "14 Linden Row", maxChars: 20, role: "headline" },
    { key: "cta", label: "Button", default: "Book a visit", maxChars: 18, role: "cta" },
  ],
  html: `<div class="geo">
  <svg class="streets" viewBox="0 0 100 56.25" preserveAspectRatio="none" aria-hidden="true"><rect width="100" height="56.25" fill="var(--paper)"/><path d="M-4 11C10 5 22 14 38 8S66 0 104 4" fill="none" stroke="color-mix(in srgb,var(--paper),var(--secondary) 22%)" stroke-width="3.4"/><path d="M-4 9.4C10 3.4 22 12.4 38 6.4S66 -1.6 104 2.4" fill="none" stroke="var(--ink)" stroke-opacity=".08" stroke-width=".18"/><text x="8" y="8.6" font-family="Geist, sans-serif" font-size="1.05" fill="var(--ink)" fill-opacity=".35" letter-spacing=".15" transform="rotate(-14 8 8.6)">Canal Walk</text><g transform="rotate(-12 50 28)"><g fill="var(--ink)"><rect x="-13.1" y="10.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="-13.1" y="18.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-13.1" y="26.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="-13.1" y="34.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="-13.1" y="42.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-13.1" y="50.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-1.1" y="-13.1" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="-1.1" y="-5.1" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-1.1" y="2.9" width="6.2" height="6.2" rx=".6" opacity="0.05"/><rect x="-1.1" y="10.9" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="-1.1" y="18.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-1.1" y="26.9" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="-1.1" y="34.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-1.1" y="42.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="-1.1" y="50.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="6.9" y="-13.1" width="8.2" height="6.2" rx=".6" opacity="0.05"/><rect x="6.9" y="-5.1" width="8.2" height="6.2" rx=".6" opacity="0.05"/><rect x="6.9" y="2.9" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="6.9" y="10.9" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="6.9" y="18.9" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="6.9" y="26.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="6.9" y="34.9" width="8.2" height="6.2" rx=".6" opacity="0.05"/><rect x="6.9" y="42.9" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="6.9" y="50.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="16.9" y="-13.1" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="16.9" y="-5.1" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="16.9" y="2.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="16.9" y="10.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="16.9" y="18.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="16.9" y="26.9" width="8.2" height="6.2" rx=".6" opacity="0.035"/><rect x="16.9" y="34.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="16.9" y="42.9" width="8.2" height="6.2" rx=".6" opacity="0.065"/><rect x="16.9" y="50.9" width="8.2" height="6.2" rx=".6" opacity="0.05"/><rect x="26.9" y="-13.1" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="35.5" y="-13.1" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="26.9" y="-5.1" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="35.5" y="-5.1" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="26.9" y="2.9" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="35.5" y="2.9" width="7.6" height="6.2" rx=".6" opacity="0.05"/><rect x="26.9" y="10.9" width="7.6" height="6.2" rx=".6" opacity="0.05"/><rect x="35.5" y="10.9" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="26.9" y="18.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="35.5" y="18.9" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="26.9" y="26.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="35.5" y="26.9" width="7.6" height="6.2" rx=".6" opacity="0.05"/><rect x="26.9" y="34.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="35.5" y="34.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="26.9" y="42.9" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="35.5" y="42.9" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="26.9" y="50.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="35.5" y="50.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="26.9" y="58.9" width="7.6" height="6.2" rx=".6" opacity="0.065"/><rect x="35.5" y="58.9" width="7.6" height="6.2" rx=".6" opacity="0.035"/><rect x="44.9" y="-13.1" width="6.2" height="6.2" rx=".6" opacity="0.05"/><rect x="44.9" y="-5.1" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="44.9" y="2.9" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="44.9" y="10.9" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="44.9" y="18.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="44.9" y="26.9" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="44.9" y="42.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="44.9" y="50.9" width="6.2" height="6.2" rx=".6" opacity="0.065"/><rect x="44.9" y="58.9" width="6.2" height="6.2" rx=".6" opacity="0.035"/><rect x="52.9" y="-5.1" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="52.9" y="2.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="52.9" y="10.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="52.9" y="18.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="52.9" y="26.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="52.9" y="34.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="52.9" y="42.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="52.9" y="50.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="52.9" y="58.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="64.9" y="-5.1" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="64.9" y="2.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="64.9" y="10.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="64.9" y="18.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="64.9" y="26.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="64.9" y="34.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="64.9" y="42.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="64.9" y="50.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="64.9" y="58.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="64.9" y="66.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="76.9" y="-5.1" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="76.9" y="2.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="76.9" y="10.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="76.9" y="18.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="76.9" y="26.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="76.9" y="34.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="76.9" y="42.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="76.9" y="50.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="76.9" y="58.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="76.9" y="66.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="88.9" y="2.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="88.9" y="10.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="88.9" y="18.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="88.9" y="26.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="88.9" y="34.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="88.9" y="42.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="88.9" y="50.9" width="10.2" height="6.2" rx=".6" opacity="0.035"/><rect x="88.9" y="58.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="88.9" y="66.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="100.9" y="2.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="100.9" y="10.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="100.9" y="18.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="100.9" y="26.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/><rect x="100.9" y="34.9" width="10.2" height="6.2" rx=".6" opacity="0.065"/><rect x="100.9" y="42.9" width="10.2" height="6.2" rx=".6" opacity="0.05"/></g><rect x="44.9" y="34.9" width="6.2" height="6.2" rx=".6" fill="color-mix(in srgb,var(--paper),var(--secondary) 25%)"/><g fill="color-mix(in srgb,var(--paper),var(--secondary) 45%)"><circle cx="45.9" cy="35.5" r=".5"/><circle cx="46.2" cy="36.6" r=".8"/><circle cx="46.4" cy="38.3" r=".65"/><circle cx="45.6" cy="39.9" r=".7"/><circle cx="47.6" cy="35.7" r=".65"/><circle cx="50.3" cy="36.6" r=".65"/><circle cx="50.2" cy="39.4" r=".65"/><circle cx="49.9" cy="35.6" r=".5"/><circle cx="47.9" cy="38.6" r=".65"/><circle cx="48.4" cy="40.2" r=".5"/><circle cx="49.2" cy="37.8" r=".8"/></g><g stroke="var(--ink)" stroke-opacity=".09" stroke-width=".28"><path d="M-30 -6H130M-30 2H130M-30 18H130M-30 34H130M-30 50H130M-30 58H130M-30 66H130M-2 -30V100M6 -30V100M26 -30V100M44 -30V100M64 -30V100M76 -30V100M100 -30V100M112 -30V100"/></g><g stroke="var(--ink)" stroke-opacity=".2" stroke-width=".55"><path d="M-30 10H130M-30 26H130M-30 42H130M16 -30V100M52 -30V100M88 -30V100"/></g><text x="45.5" y="25.3" font-family="Geist, sans-serif" font-size="1.05" fill="var(--ink)" fill-opacity=".5" letter-spacing=".12">Linden Row</text><text x="15.4" y="24" font-family="Geist, sans-serif" font-size="1" fill="var(--ink)" fill-opacity=".38" letter-spacing=".12" transform="rotate(-90 15.4 24)">Mill Street</text></g></svg><div class="route"><svg viewBox="0 0 100 56.25" preserveAspectRatio="none" aria-hidden="true"><g transform="rotate(-12 50 28)"><polyline points="16,42 16,34 26,34 26,26 38.4,26" fill="none" stroke="var(--accent)" stroke-width=".42" stroke-dasharray=".9 .7" stroke-linecap="round" stroke-linejoin="round"/></g></svg></div><i class="you"></i><div class="walk">12 min walk</div><div class="rings"><i class="ra"></i><i class="rb"></i></div><i class="pshadow"></i><div class="pin"><svg viewBox="0 0 30 40" aria-hidden="true"><path d="M15 39C15 39 3 24.5 3 15A12 12 0 0 1 27 15C27 24.5 15 39 15 39Z" fill="var(--accent)"/><circle cx="15" cy="15" r="7.4" fill="var(--paper)"/><path d="M11.6 19.6V14.6a3.4 3.4 0 0 1 6.8 0v5" fill="none" stroke="var(--ink)" stroke-width="1.2" stroke-linecap="round"/><circle cx="15" cy="15.6" r="1.2" fill="var(--ink)"/></svg></div>
  <div class="ptag">${ARCH}<span data-21st-slot="place">{{place}}</span></div>
</div>
<i class="vign"></i>
<div class="panel">
  <div class="eb">${ARCH}<span data-21st-slot="kicker">{{kicker}}</span></div>
  <div class="addr" data-21st-slot="address">{{address}}</div>
  <div class="subl">Old Town · 2nd floor, ring twice</div>
  <div class="now"><i class="pulse"></i>Open now · until 20:00</div>
  <div class="hrs">
    <div class="hr on"><span>Mon – Fri</span><span>10:00 – 20:00</span></div>
    <div class="hr"><span>Saturday</span><span>10:00 – 18:00</span></div>
    <div class="hr"><span>Sunday</span><span>closed</span></div>
  </div>
  <div class="bttn"><span data-21st-slot="cta">{{cta}}</span><em>velline.studio<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></em><i></i></div>
</div>`,
  css: `
.v-beauty-location-cta{color:var(--ink);font-family:var(--font-body)}
.v-beauty-location-cta > *{--u:1cqw}
.v-beauty-location-cta[data-backdrop="on"]{background:var(--paper)}
.v-beauty-location-cta[data-backdrop="off"]{clip-path:inset(0 round 2%)}
.v-beauty-location-cta[data-backdrop="off"] .vign{display:none}
.v-beauty-location-cta .geo{position:absolute;left:0;top:0;width:calc(100*var(--u));height:calc(56.25*var(--u));transform-origin:calc(38.8*var(--u)) calc(28.3*var(--u));animation:beauty-location-cta-map 6s cubic-bezier(.45,0,.55,1) infinite}
.v-beauty-location-cta .streets,.v-beauty-location-cta .route svg{position:absolute;left:0;top:0;width:100%;height:100%;display:block}
.v-beauty-location-cta .route{position:absolute;inset:0;animation:beauty-location-cta-route 6s cubic-bezier(.65,0,.35,1) infinite}
.v-beauty-location-cta .you{position:absolute;left:calc(18.86*var(--u));top:calc(47.96*var(--u));width:calc(1.6*var(--u));height:calc(1.6*var(--u));border-radius:50%;background:var(--ink);box-shadow:0 0 0 calc(.5*var(--u)) color-mix(in srgb,var(--ink) 22%,transparent);animation:beauty-location-cta-you 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .walk{position:absolute;left:calc(21.6*var(--u));top:calc(42.6*var(--u));padding:calc(.6*var(--u)) calc(1.1*var(--u));border-radius:calc(2*var(--u));background:color-mix(in srgb,var(--ink) 10%,transparent);border:1px solid color-mix(in srgb,var(--ink) 22%,transparent);font:500 calc(1.15*var(--u))/1 var(--font-body);white-space:nowrap;animation:beauty-location-cta-walk 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .rings{position:absolute;left:calc(38.8*var(--u));top:calc(28.3*var(--u));width:0;height:0;animation:beauty-location-cta-rings 6s linear infinite}
.v-beauty-location-cta .rings i{position:absolute;left:calc(-6*var(--u));top:calc(-2.4*var(--u));width:calc(12*var(--u));height:calc(4.8*var(--u));border-radius:50%;border:1px solid color-mix(in srgb,var(--accent) 85%,transparent);box-sizing:border-box}
.v-beauty-location-cta .ra{animation:beauty-location-cta-ra 2s linear infinite}
.v-beauty-location-cta .rb{animation:beauty-location-cta-rb 2s linear infinite}
.v-beauty-location-cta .pshadow{position:absolute;left:calc(37*var(--u));top:calc(27.6*var(--u));width:calc(3.6*var(--u));height:calc(1.4*var(--u));border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.55),rgba(0,0,0,0));animation:beauty-location-cta-pshadow 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .pin{position:absolute;left:calc(36.3*var(--u));top:calc(21.7*var(--u));width:calc(5*var(--u));height:calc(6.6*var(--u));transform-origin:50% 100%;animation:beauty-location-cta-pin 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .pin svg{display:block;width:100%;height:100%;filter:drop-shadow(0 calc(.5*var(--u)) calc(.8*var(--u)) rgba(0,0,0,.4))}
.v-beauty-location-cta .ptag{position:absolute;left:calc(42*var(--u));top:calc(22.2*var(--u));display:flex;align-items:center;gap:calc(.6*var(--u));padding:calc(.6*var(--u)) calc(1.1*var(--u));border-radius:calc(2*var(--u));background:var(--ink);color:var(--paper);font:600 calc(1.25*var(--u))/1.2 var(--font-body);white-space:nowrap;box-shadow:0 calc(.6*var(--u)) calc(1.4*var(--u)) rgba(0,0,0,.35);animation:beauty-location-cta-ptag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .ptag svg{width:calc(1.4*var(--u));height:calc(1.4*var(--u));color:var(--accent);flex:none}
.v-beauty-location-cta .vign{position:absolute;inset:0;background:radial-gradient(80% 95% at 34% 50%,transparent 45%,color-mix(in srgb,var(--paper),#000 35%) 100%),linear-gradient(90deg,transparent 48%,color-mix(in srgb,var(--paper) 50%,transparent) 100%);opacity:.8}
.v-beauty-location-cta .panel{position:absolute;left:58cqw;top:7.5cqw;width:calc(36*var(--u));padding:calc(3*var(--u)) calc(3.2*var(--u));box-sizing:border-box;border-radius:calc(1.8*var(--u));background:var(--ink);color:var(--paper);box-shadow:0 calc(2.4*var(--u)) calc(6*var(--u)) rgba(0,0,0,.4);animation:beauty-location-cta-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .eb{display:flex;align-items:center;gap:calc(.8*var(--u));font:500 calc(1.3*var(--u))/1.2 var(--font-body);letter-spacing:.12em;color:color-mix(in srgb,var(--paper) 72%,transparent)}
.v-beauty-location-cta .eb svg{width:calc(1.8*var(--u));height:calc(1.8*var(--u));color:var(--accent);flex:none}
.v-beauty-location-cta .addr{margin-top:calc(1.2*var(--u));font:400 calc(4.6*var(--u))/1.2 var(--font-display);letter-spacing:-.01em;animation:beauty-location-cta-i1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .subl{margin-top:calc(.6*var(--u));font:400 calc(1.35*var(--u))/1.3 var(--font-body);color:color-mix(in srgb,var(--paper) 72%,transparent);animation:beauty-location-cta-i1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .now{display:flex;align-items:center;gap:calc(.9*var(--u));margin-top:calc(2.2*var(--u));padding-top:calc(2*var(--u));border-top:1px solid color-mix(in srgb,var(--paper) 14%,transparent);font:600 calc(1.4*var(--u))/1 var(--font-body);color:var(--secondary);animation:beauty-location-cta-i2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .pulse{position:relative;width:calc(1*var(--u));height:calc(1*var(--u));border-radius:50%;background:var(--secondary)}
.v-beauty-location-cta .pulse::after{content:"";position:absolute;left:calc(-.6*var(--u));top:calc(-.6*var(--u));right:calc(-.6*var(--u));bottom:calc(-.6*var(--u));border-radius:50%;border:1px solid color-mix(in srgb,var(--secondary) 70%,transparent);animation:beauty-location-cta-pulse 1.5s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .hrs{margin-top:calc(1.2*var(--u));animation:beauty-location-cta-i3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .hr{display:flex;justify-content:space-between;padding:calc(.75*var(--u)) 0;font:400 calc(1.4*var(--u))/1 var(--font-body);color:color-mix(in srgb,var(--paper) 82%,transparent)}
.v-beauty-location-cta .hr.on{margin:0 calc(-1.2*var(--u));padding:calc(.75*var(--u)) calc(1.2*var(--u));border-radius:calc(.6*var(--u));background:color-mix(in srgb,var(--accent) 26%,transparent);font-weight:600;color:var(--paper)}
.v-beauty-location-cta .bttn{position:relative;overflow:hidden;display:flex;justify-content:space-between;align-items:center;margin-top:calc(2*var(--u));padding:calc(1.5*var(--u)) calc(2*var(--u));border-radius:calc(1*var(--u));background:var(--paper);color:var(--ink);font:500 calc(1.5*var(--u))/1.2 var(--font-body);animation:beauty-location-cta-i4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-beauty-location-cta .bttn em{display:flex;align-items:center;gap:calc(.6*var(--u));font-style:normal;color:var(--accent);font-size:.85em}
.v-beauty-location-cta .bttn em svg{width:calc(1.6*var(--u));height:calc(1.6*var(--u))}
.v-beauty-location-cta .bttn i{position:absolute;left:0;top:0;bottom:0;width:30%;background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.2),rgba(255,255,255,0));animation:beauty-location-cta-sheen 6s cubic-bezier(.45,0,.55,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-beauty-location-cta .geo{--u:2.2cqw;left:calc(28cqw - calc(38.8*var(--u)));top:calc(30cqh - calc(28.3*var(--u)))}
  .v-beauty-location-cta .ptag{font-size:calc(2.5*var(--u));left:calc(41*var(--u));top:calc(21.6*var(--u))}
  .v-beauty-location-cta .ptag svg{width:calc(2.5*var(--u));height:calc(2.5*var(--u))}
  .v-beauty-location-cta .walk{display:none}
  .v-beauty-location-cta .vign{background:linear-gradient(180deg,transparent 40%,color-mix(in srgb,var(--paper),#000 20%) 66%)}
  .v-beauty-location-cta .panel{--u:2.4cqw;left:7cqw;top:auto;bottom:5cqh}
  .v-beauty-location-cta .eb{font-size:calc(2.3*var(--u))}
  .v-beauty-location-cta .subl{font-size:calc(2*var(--u))}
  .v-beauty-location-cta .now{font-size:calc(2*var(--u))}
  .v-beauty-location-cta .hrs{display:none}
  .v-beauty-location-cta .bttn{font-size:calc(2.3*var(--u));white-space:nowrap}
  .v-beauty-location-cta .bttn em{font-size:0;gap:0}
  .v-beauty-location-cta .bttn em svg{width:calc(2.6*var(--u));height:calc(2.6*var(--u))}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-beauty-location-cta .geo{--u:1.6cqw;left:calc(25cqw - calc(38.8*var(--u)));top:calc(36cqw - calc(28.3*var(--u)))}
  .v-beauty-location-cta .panel{--u:1.32cqw;left:auto;right:5cqw;top:auto;bottom:5cqw}
  .v-beauty-location-cta .eb{font-size:calc(1.5*var(--u))}
  .v-beauty-location-cta .subl,.v-beauty-location-cta .hr,.v-beauty-location-cta .now{font-size:calc(1.5*var(--u))}
  .v-beauty-location-cta .vign{background:linear-gradient(180deg,transparent 50%,color-mix(in srgb,var(--paper),#000 20%) 90%)}
}
@keyframes beauty-location-cta-map{0%,100%{transform:scale(1.07) translate(calc(.8*var(--u)),calc(.4*var(--u)))}50%{transform:scale(1) translate(0,0)}}
@keyframes beauty-location-cta-route{0%,24%{opacity:1;clip-path:inset(0 83% 0 0)}40%,86%{opacity:1;clip-path:inset(0 60% 0 0)}94%,100%{opacity:0;clip-path:inset(0 60% 0 0)}}
@keyframes beauty-location-cta-you{0%,20%{opacity:0;transform:scale(0)}26%,86%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(0)}}
@keyframes beauty-location-cta-walk{0%,32%{opacity:0;transform:translateY(calc(1*var(--u)))}42%,86%{opacity:1;transform:translateY(0)}94%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-location-cta-rings{0%,17%{opacity:0}21%,86%{opacity:1}92%,100%{opacity:0}}
@keyframes beauty-location-cta-ra{0%{opacity:.9;transform:scale(.2)}100%{opacity:0;transform:scale(1.5)}}
@keyframes beauty-location-cta-rb{0%{opacity:.45;transform:scale(.85)}50%{opacity:0;transform:scale(1.5)}50.01%{opacity:.9;transform:scale(.2)}100%{opacity:.45;transform:scale(.85)}}
@keyframes beauty-location-cta-pshadow{0%,8%{opacity:0;transform:scale(.2)}17%,86%{opacity:1;transform:scale(1)}95%,100%{opacity:0;transform:scale(.4)}}
@keyframes beauty-location-cta-pin{0%,8%{opacity:0;transform:translateY(calc(-14*var(--u))) scale(1);animation-timing-function:cubic-bezier(.55,0,1,.45)}9%{opacity:1}17%{transform:translateY(0) scale(1);animation-timing-function:cubic-bezier(.2,.8,.2,1)}19%{transform:translateY(0) scale(1.12,.84)}23%{transform:translateY(calc(-1.4*var(--u))) scale(.96,1.05)}27%,86%{opacity:1;transform:translateY(0) scale(1)}95%,100%{opacity:0;transform:translateY(calc(-3*var(--u))) scale(1)}}
@keyframes beauty-location-cta-ptag{0%,24%{opacity:0;transform:translateX(calc(-1.4*var(--u)))}34%,86%{opacity:1;transform:translateX(0)}94%,100%{opacity:0;transform:translateX(0)}}
@keyframes beauty-location-cta-card{0%,12%{opacity:0;transform:translateX(calc(6*var(--u)))}28%,86%{opacity:1;transform:translateX(0)}95%,100%{opacity:0;transform:translateX(calc(4*var(--u)))}}
@keyframes beauty-location-cta-i1{0%,18%{opacity:0;transform:translateY(calc(1.2*var(--u)))}30%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-location-cta-i2{0%,22%{opacity:0;transform:translateY(calc(1.2*var(--u)))}34%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-location-cta-i3{0%,26%{opacity:0;transform:translateY(calc(1.2*var(--u)))}38%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-location-cta-i4{0%,30%{opacity:0;transform:translateY(calc(1.2*var(--u)))}42%,86%{opacity:1;transform:translateY(0)}95%,100%{opacity:0;transform:translateY(0)}}
@keyframes beauty-location-cta-pulse{0%{opacity:.9;transform:scale(.6)}100%{opacity:0;transform:scale(1.8)}}
@keyframes beauty-location-cta-sheen{0%,50%{transform:translateX(-120%)}70%,100%{transform:translateX(380%)}}
`,
};

export const BEAUTY_SCENES: SceneSpec[] = [beautySerumHero, beautyPromoSticker, beautyPriceMenu, beautyStylistIntro, beautyBooking, beautySwatchFan, beautyReviews, beautyBeforeAfter, beautyIngredients, beautyLocationCta];
