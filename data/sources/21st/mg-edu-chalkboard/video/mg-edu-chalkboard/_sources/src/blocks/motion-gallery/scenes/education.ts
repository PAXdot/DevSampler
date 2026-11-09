// Built with Remotion - https://remotion.pro/license
import type { SceneSpec } from "../types";

const BOOK = `<svg viewBox="0 0 24 24" fill="none"><path d="M12 7.2C9.6 5.6 6.6 5.2 3.5 5.7v12.6c3.1-.5 6.1-.1 8.5 1.5 2.4-1.6 5.4-2 8.5-1.5V5.7c-3.1-.5-6.1-.1-8.5 1.5zM12 7.2v12.6" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M18.5 .8l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6z" fill="currentColor"/></svg>`;
const CHECK = `<svg viewBox="0 0 10 10"><path d="M2 5.2l2 2 4-4.4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ARROW = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CHEV = `<svg class="chev" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const PLAY = `<svg viewBox="0 0 10 10"><path d="M2.5 1.5v7l6-3.5z" fill="currentColor"/></svg>`;
const STAR4 = `<svg viewBox="0 0 20 20"><path d="M10 0l2.2 7.8L20 10l-7.8 2.2L10 20l-2.2-7.8L0 10l7.8-2.2z" fill="currentColor"/></svg>`;
const STAR5 = `<svg viewBox="0 0 20 20"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" fill="currentColor"/></svg>`;
const CURSOR = (fill: string) => `<svg viewBox="0 0 24 24"><path d="M4 2.5l15 8.2-6.6 1.6-3.1 6.4z" fill="${fill}" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>`;

export const eduReelsQuiz: SceneSpec = {
  id: "edu-reels-quiz",
  slug: "mg-edu-reels-quiz",
  kind: "scene",
  name: "Quiz Answer Reveal",
  job: "product-ui",
  language: "aura",
  mechanic: "quiz-answer-tap-confetti",
  energy: "punchy",
  settle: 3.2,
  colors: { ink: "#FFFFFF", accent: "#FF7A59", secondary: "#3FD0FF", paper: "#4B1DB8" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["quiz", "education", "reels", "confetti"],
  fields: [
    { key: "question", label: "Question", default: "Which planet spins the fastest?", maxChars: 48, role: "headline" },
    { key: "answer", label: "Correct answer", default: "Jupiter", maxChars: 16, role: "label" },
    { key: "cta", label: "Button", default: "Start learning free", maxChars: 24, role: "cta" },
    { key: "brand", label: "Brand", default: "Brightwell", maxChars: 18, role: "label" },
  ],
  html: `<div class="blob b1"></div><div class="blob b2"></div>
<div class="top"><div class="brand" data-21st-slot="brand"><span class="logo">${BOOK}</span>{{brand}}</div><div class="pill">Quiz 12/20</div></div>
<div class="timer"><i></i></div>
<div class="card"><div class="kick"><i></i>Quick quiz · 30 sec</div><div class="q" data-21st-slot="question">{{question}}</div><div class="fact"><b>Correct!</b> +10 XP and a 4 day streak</div></div>
<div class="opts">
<div class="opt o1"><b>A</b><span>Mars</span></div>
<div class="opt o2"><div class="fx"><div class="ok"></div><div class="tap"></div></div><b>B</b><span data-21st-slot="answer">{{answer}}</span><div class="tick">${CHECK}</div><div class="burst"><i style="--x:-14em;--y:-12em;--r:120deg;--c:var(--secondary)"></i><i style="--x:-6em;--y:-16em;--r:-80deg;--c:var(--accent)"></i><i style="--x:4em;--y:-15em;--r:200deg;--c:#fff"></i><i style="--x:10em;--y:-10em;--r:90deg;--c:#ffd166"></i><i style="--x:12em;--y:-2em;--r:-140deg;--c:var(--secondary)"></i><i style="--x:9em;--y:7em;--r:60deg;--c:var(--accent)"></i><i style="--x:-2em;--y:10em;--r:160deg;--c:#fff"></i><i style="--x:-12em;--y:6em;--r:-60deg;--c:#ffd166"></i><i style="--x:-17em;--y:-3em;--r:240deg;--c:var(--accent)"></i><i style="--x:0em;--y:-20em;--r:30deg;--c:var(--secondary)"></i></div></div>
<div class="opt o3"><b>C</b><span>Earth</span></div>
<div class="opt o4"><b>D</b><span>Venus</span></div>
</div>
<div class="cta"><div class="btn" data-21st-slot="cta">{{cta}}${ARROW}</div></div>`,
  css: `
.v-edu-reels-quiz{color:var(--ink);font-family:var(--font-display)}
.v-edu-reels-quiz[data-backdrop="on"]{background:radial-gradient(130% 80% at 15% 0%,color-mix(in srgb,var(--paper) 62%,#fff) 0%,var(--paper) 45%,color-mix(in srgb,var(--paper) 55%,#000) 100%)}
.v-edu-reels-quiz[data-backdrop="off"] .blob{display:none}
.v-edu-reels-quiz .blob{position:absolute;border-radius:50%;filter:blur(6cqw)}
.v-edu-reels-quiz .b1{width:40cqw;height:40cqw;left:-12cqw;top:26cqw;background:var(--accent);opacity:.5;animation:edu-reels-quiz-drift 6s ease-in-out infinite}
.v-edu-reels-quiz .b2{width:34cqw;height:34cqw;right:-12cqw;top:-8cqw;background:var(--secondary);opacity:.4;animation:edu-reels-quiz-drift 6s ease-in-out infinite reverse}
.v-edu-reels-quiz .top{position:absolute;left:6cqw;right:6cqw;top:3.6cqw;display:flex;align-items:center;justify-content:space-between;animation:edu-reels-quiz-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .brand{display:flex;align-items:center;gap:1cqw;font-weight:700;font-size:2.1cqw;line-height:1.2;letter-spacing:-.02em}
.v-edu-reels-quiz .logo{width:3.4cqw;height:3.4cqw;border-radius:1cqw;background:var(--ink);color:var(--paper);display:grid;place-items:center;flex:none}
.v-edu-reels-quiz .logo svg{width:2.2cqw;height:2.2cqw}
.v-edu-reels-quiz .pill{font-family:var(--font-body);font-size:1.3cqw;font-weight:600;padding:.6cqw 1.3cqw;border-radius:99cqw;background:color-mix(in srgb,var(--ink) 16%,transparent);border:1px solid color-mix(in srgb,var(--ink) 30%,transparent)}
.v-edu-reels-quiz .timer{position:absolute;left:6cqw;width:44cqw;top:9.6cqw;height:.7cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 18%,transparent);overflow:hidden;animation:edu-reels-quiz-fade 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .timer i{position:absolute;inset:0;background:linear-gradient(90deg,var(--secondary),var(--accent));transform-origin:left;animation:edu-reels-quiz-timer 6s linear infinite}
.v-edu-reels-quiz .card{position:absolute;left:6cqw;width:44cqw;top:12cqw;box-sizing:border-box;background:var(--ink);color:var(--paper);border-radius:2.4cqw;padding:2.8cqw 2.8cqw 2.6cqw;box-shadow:0 1.6cqw 4cqw rgba(20,0,60,.35);animation:edu-reels-quiz-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .kick{font-family:var(--font-body);font-size:1.3cqw;font-weight:600;color:color-mix(in srgb,var(--paper) 70%,var(--ink));display:flex;gap:.8cqw;align-items:center}
.v-edu-reels-quiz .kick i{width:.8cqw;height:.8cqw;border-radius:50%;background:var(--accent)}
.v-edu-reels-quiz .q{font-size:4.1cqw;font-weight:800;line-height:1.2;letter-spacing:-.03em;margin-top:1.2cqw}
.v-edu-reels-quiz .fact{margin-top:1.8cqw;font-family:var(--font-body);font-size:1.4cqw;line-height:1.3;color:var(--paper);padding:1cqw 1.3cqw;background:color-mix(in srgb,var(--paper) 10%,var(--ink));border-radius:1.2cqw;clip-path:inset(0 100% 0 0 round 1.2cqw);animation:edu-reels-quiz-fact 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-reels-quiz .fact b{color:var(--accent)}
.v-edu-reels-quiz .opts{position:absolute;left:55cqw;right:6cqw;top:12cqw;display:flex;flex-direction:column;gap:1.3cqw}
.v-edu-reels-quiz .opt{position:relative;height:6.6cqw;box-sizing:border-box;border-radius:1.8cqw;background:color-mix(in srgb,var(--ink) 13%,transparent);border:1px solid color-mix(in srgb,var(--ink) 26%,transparent);display:flex;align-items:center;gap:1.6cqw;padding:0 1.8cqw;font-size:2.4cqw;font-weight:700;line-height:1.2}
.v-edu-reels-quiz .opt b{position:relative;z-index:1;width:3.4cqw;height:3.4cqw;border-radius:50%;background:color-mix(in srgb,var(--ink) 20%,transparent);display:grid;place-items:center;font-size:1.5cqw;flex:none}
.v-edu-reels-quiz .opt span{position:relative;z-index:1;white-space:nowrap}
.v-edu-reels-quiz .o1{animation:edu-reels-quiz-o1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .o2{animation:edu-reels-quiz-o2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .o3{animation:edu-reels-quiz-o3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .o4{animation:edu-reels-quiz-o4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .fx{position:absolute;inset:-1px;border-radius:inherit;overflow:hidden}
.v-edu-reels-quiz .ok{position:absolute;inset:0;background:linear-gradient(90deg,#16b866,#3be38f);opacity:0;animation:edu-reels-quiz-ok 6s ease-out infinite}
.v-edu-reels-quiz .tick{position:absolute;right:1.4cqw;top:50%;margin-top:-1.7cqw;width:3.4cqw;height:3.4cqw;border-radius:50%;background:#fff;color:#12a35a;display:grid;place-items:center;z-index:2;transform:scale(0);animation:edu-reels-quiz-tick 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .tick svg{width:2.1cqw;height:2.1cqw}
.v-edu-reels-quiz .tap{position:absolute;left:52%;top:50%;width:6cqw;height:6cqw;margin:-3cqw 0 0 -3cqw;border-radius:50%;background:rgba(255,255,255,.85);opacity:0;animation:edu-reels-quiz-tap 6s ease-out infinite}
.v-edu-reels-quiz .burst{position:absolute;right:3.1cqw;top:50%;width:0;height:0;font-size:.55cqw;z-index:3}
.v-edu-reels-quiz .burst i{position:absolute;left:-.9em;top:-.6em;width:1.8em;height:1.2em;border-radius:.3em;background:var(--c);opacity:0;animation:edu-reels-quiz-conf 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .cta{position:absolute;left:55cqw;right:6cqw;top:44.4cqw;display:flex;justify-content:center;animation:edu-reels-quiz-cta 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-reels-quiz .btn{display:inline-flex;align-items:center;gap:1cqw;background:var(--ink);color:var(--paper);font-size:2.1cqw;font-weight:800;line-height:1.2;padding:1.4cqw 3.2cqw;border-radius:99cqw;white-space:nowrap;box-shadow:0 1cqw 3cqw color-mix(in srgb,var(--accent) 50%,transparent);animation:edu-reels-quiz-pulse 2s ease-in-out infinite}
.v-edu-reels-quiz .btn svg{width:2cqw;height:2cqw;flex:none}
@container (max-aspect-ratio: 4/5){
  .v-edu-reels-quiz .b1{width:70cqw;height:70cqw;left:-24cqw;top:100cqw}
  .v-edu-reels-quiz .b2{width:60cqw;height:60cqw;right:-26cqw;top:18cqw}
  .v-edu-reels-quiz .top{left:7cqw;right:7cqw;top:8cqw}
  .v-edu-reels-quiz .brand{font-size:5.8cqw;gap:2.4cqw}
  .v-edu-reels-quiz .logo{width:9cqw;height:9cqw;border-radius:2.6cqw}
  .v-edu-reels-quiz .logo svg{width:6cqw;height:6cqw}
  .v-edu-reels-quiz .pill{font-size:3.4cqw;padding:1.4cqw 3cqw}
  .v-edu-reels-quiz .timer{left:7cqw;width:86cqw;top:22cqw;height:1.6cqw}
  .v-edu-reels-quiz .card{left:7cqw;width:86cqw;top:27cqw;border-radius:6cqw;padding:6cqw 6cqw 5.5cqw}
  .v-edu-reels-quiz .kick{font-size:3.4cqw;gap:2cqw}
  .v-edu-reels-quiz .kick i{width:2cqw;height:2cqw}
  .v-edu-reels-quiz .q{font-size:8.4cqw;margin-top:2.4cqw}
  .v-edu-reels-quiz .fact{margin-top:3cqw;font-size:3.6cqw;padding:2.4cqw 3cqw;border-radius:3cqw}
  .v-edu-reels-quiz .opts{left:7cqw;right:7cqw;top:91cqw;gap:2.4cqw}
  .v-edu-reels-quiz .opt{height:12.4cqw;border-radius:4cqw;gap:3.6cqw;padding:0 4cqw;font-size:5.8cqw}
  .v-edu-reels-quiz .opt b{width:7.4cqw;height:7.4cqw;font-size:3.6cqw}
  .v-edu-reels-quiz .tick{right:3cqw;width:7.4cqw;height:7.4cqw;margin-top:-3.7cqw}
  .v-edu-reels-quiz .tick svg{width:4.4cqw;height:4.4cqw}
  .v-edu-reels-quiz .tap{width:10cqw;height:10cqw;margin:-5cqw 0 0 -5cqw}
  .v-edu-reels-quiz .burst{right:6.7cqw;font-size:1cqw}
  .v-edu-reels-quiz .cta{left:7cqw;right:7cqw;top:auto;bottom:9cqw}
  .v-edu-reels-quiz .btn{font-size:5.8cqw;gap:2cqw;padding:3.6cqw 8cqw}
  .v-edu-reels-quiz .btn svg{width:5.4cqw;height:5.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-reels-quiz .top{top:5cqw}
  .v-edu-reels-quiz .brand{font-size:3.4cqw;gap:1.6cqw}
  .v-edu-reels-quiz .logo{width:5.4cqw;height:5.4cqw;border-radius:1.6cqw}
  .v-edu-reels-quiz .logo svg{width:3.6cqw;height:3.6cqw}
  .v-edu-reels-quiz .pill{font-size:2.2cqw;padding:1cqw 2cqw}
  .v-edu-reels-quiz .timer{width:88cqw;top:13.4cqw;height:1cqw}
  .v-edu-reels-quiz .card{width:88cqw;top:16.4cqw;border-radius:3.6cqw;padding:3.6cqw 4cqw}
  .v-edu-reels-quiz .kick{font-size:2.2cqw;gap:1.2cqw}
  .v-edu-reels-quiz .kick i{width:1.3cqw;height:1.3cqw}
  .v-edu-reels-quiz .q{font-size:6cqw;margin-top:1.6cqw}
  .v-edu-reels-quiz .fact{font-size:2.4cqw;padding:1.4cqw 2cqw;margin-top:2cqw;border-radius:1.8cqw}
  .v-edu-reels-quiz .opts{left:6cqw;right:6cqw;top:54cqw;display:grid;grid-template-columns:1fr 1fr;gap:2cqw}
  .v-edu-reels-quiz .opt{height:10.4cqw;border-radius:3cqw;gap:2.2cqw;padding:0 2.4cqw;font-size:3.6cqw}
  .v-edu-reels-quiz .opt b{width:5.4cqw;height:5.4cqw;font-size:2.4cqw}
  .v-edu-reels-quiz .tick{right:2cqw;width:5.4cqw;height:5.4cqw;margin-top:-2.7cqw}
  .v-edu-reels-quiz .tick svg{width:3.2cqw;height:3.2cqw}
  .v-edu-reels-quiz .burst{right:4.7cqw;font-size:.75cqw}
  .v-edu-reels-quiz .cta{left:6cqw;right:6cqw;top:auto;bottom:6cqw}
  .v-edu-reels-quiz .btn{font-size:3.6cqw;gap:1.4cqw;padding:2.4cqw 5.4cqw}
  .v-edu-reels-quiz .btn svg{width:3.4cqw;height:3.4cqw}
}
@keyframes edu-reels-quiz-drift{0%,100%{transform:translate(0,0)}50%{transform:translate(7cqw,-6cqw)}}
@keyframes edu-reels-quiz-fade{0%{opacity:0;transform:translateY(-3cqw)}10%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-3cqw)}}
@keyframes edu-reels-quiz-timer{0%,12%{transform:scaleX(1)}36%,96%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@keyframes edu-reels-quiz-card{0%{opacity:0;transform:translateY(8cqw) scale(.94)}12%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-4cqw) scale(.98)}}
@keyframes edu-reels-quiz-fact{0%,38%{clip-path:inset(0 100% 0 0 round 3cqw)}47%,100%{clip-path:inset(0 0 0 0 round 3cqw)}}
@keyframes edu-reels-quiz-o1{0%,6%{opacity:0;transform:translateY(5cqw)}15%,34%{opacity:1;transform:none}40%,86%{opacity:.38;transform:none}96%,100%{opacity:0;transform:translateY(-3cqw)}}
@keyframes edu-reels-quiz-o2{0%,9%{opacity:0;transform:translateY(5cqw)}18%,34%{opacity:1;transform:none}38%{opacity:1;transform:scale(1.04)}42%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-3cqw)}}
@keyframes edu-reels-quiz-o3{0%,12%{opacity:0;transform:translateY(5cqw)}21%,34%{opacity:1;transform:none}40%,86%{opacity:.38;transform:none}96%,100%{opacity:0;transform:translateY(-3cqw)}}
@keyframes edu-reels-quiz-o4{0%,15%{opacity:0;transform:translateY(5cqw)}24%,34%{opacity:1;transform:none}40%,86%{opacity:.38;transform:none}96%,100%{opacity:0;transform:translateY(-3cqw)}}
@keyframes edu-reels-quiz-ok{0%,35%{opacity:0}39%,100%{opacity:1}}
@keyframes edu-reels-quiz-tick{0%,37%{transform:scale(0) rotate(-40deg)}42%{transform:scale(1.2) rotate(0)}46%,100%{transform:scale(1) rotate(0)}}
@keyframes edu-reels-quiz-tap{0%,28%{opacity:0;transform:scale(.3)}31%{opacity:.9;transform:scale(.7)}40%,100%{opacity:0;transform:scale(2.6)}}
@keyframes edu-reels-quiz-conf{0%,38%{opacity:0;transform:translate(0,0) rotate(0) scale(.4)}41%{opacity:1}60%{opacity:1;transform:translate(var(--x),var(--y)) rotate(var(--r)) scale(1)}72%,100%{opacity:0;transform:translate(var(--x),calc(var(--y) + 6em)) rotate(var(--r)) scale(1)}}
@keyframes edu-reels-quiz-cta{0%,36%{opacity:0;transform:translateY(6cqw)}46%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(3cqw)}}
@keyframes edu-reels-quiz-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
`,
};


export const eduCurriculum: SceneSpec = {
  id: "edu-curriculum",
  slug: "mg-edu-curriculum",
  kind: "scene",
  name: "Course Syllabus Accordion",
  job: "process",
  language: "editorial",
  mechanic: "accordion-module-expand",
  energy: "calm",
  settle: 3.4,
  colors: { ink: "#15172A", accent: "#2F5BFF", secondary: "#E0607E", paper: "#F6F2E9" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["course", "syllabus", "modules", "education"],
  fields: [
    { key: "title", label: "Course title", default: "Product design, from first sketch to shipped.", maxChars: 52, role: "headline" },
    { key: "kicker", label: "Kicker", default: "Online course · 6 weeks", maxChars: 28, role: "kicker" },
    { key: "module", label: "Open module", default: "Sketching ideas fast", maxChars: 24, role: "label" },
    { key: "brand", label: "Brand", default: "Brightwell", maxChars: 18, role: "label" },
  ],
  html: `<div class="left">
<div class="brand" data-21st-slot="brand">${BOOK}<span>{{brand}}</span></div>
<div class="kick" data-21st-slot="kicker"><i></i>{{kicker}}</div>
<div class="title" data-21st-slot="title">{{title|words}}</div>
<div class="chips"><span>5 modules</span><span>32 lessons</span><span>Certificate</span></div>
</div>
<div class="enrolled"><div class="av"><i></i><i class="a2"></i><i class="a3"></i><i class="a4"></i></div><span><b>2,140</b> students enrolled</span></div>
<div class="mods">
<div class="mod m1"><div class="card"><div class="hd"><span class="num">01</span><span class="nm">Seeing like a designer</span><span class="ct">5 lessons</span>${CHEV}</div></div></div>
<div class="mod m2"><div class="card"><div class="hd"><span class="num">02</span><span class="nm" data-21st-slot="module">{{module}}</span><span class="ct">3 lessons</span>${CHEV}</div>
<div class="panel">
<div class="ls done l1"><span class="pi">${CHECK}</span><span class="t">2.1 Thumbnails in ten minutes</span><span class="d">12:40</span></div>
<div class="ls on l2"><span class="pi">${PLAY}</span><span class="t">2.2 Crazy eights, explained</span><span class="eq"><i></i><i></i><i></i></span><span class="d">08:15</span></div>
<div class="ls l3"><span class="pi">${PLAY}</span><span class="t">2.3 From sketch to user flow</span><span class="d">15:02</span></div>
</div></div></div>
<div class="mod m3"><div class="card"><div class="hd"><span class="num">03</span><span class="nm">Wireframes that speak</span><span class="ct">8 lessons</span>${CHEV}</div></div></div>
<div class="mod m4"><div class="card"><div class="hd"><span class="num">04</span><span class="nm">Prototype and test</span><span class="ct">9 lessons</span>${CHEV}</div></div></div>
<div class="mod m5"><div class="card"><div class="hd"><span class="num">05</span><span class="nm">Ship your portfolio</span><span class="ct">7 lessons</span>${CHEV}</div></div></div>
</div>
<div class="cursor">${CURSOR("#15172a")}</div>`,
  css: `
.v-edu-curriculum{color:var(--ink);font-family:var(--font-body)}
.v-edu-curriculum .mods{--ph:15cqw}
.v-edu-curriculum .cursor{--cx:80cqw;--cy:13.5cqw}
.v-edu-curriculum[data-backdrop="on"]{background:radial-gradient(90% 120% at 100% 0%,color-mix(in srgb,var(--accent) 12%,var(--paper)) 0%,transparent 55%),color-mix(in srgb,var(--paper) 94%,var(--ink))}
.v-edu-curriculum .left{position:absolute;left:6cqw;top:6.5cqw;width:35cqw;animation:edu-curriculum-left 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .brand{display:flex;align-items:center;gap:1cqw;font-weight:700;font-size:1.7cqw;line-height:1.2}
.v-edu-curriculum .brand svg{width:2.6cqw;height:2.6cqw;color:var(--accent);flex:none}
.v-edu-curriculum .kick{margin-top:5cqw;font-size:1.45cqw;line-height:1.2;font-weight:600;color:var(--accent);display:flex;align-items:center;gap:.9cqw}
.v-edu-curriculum .kick i{width:2.4cqw;height:1px;background:var(--accent);flex:none}
.v-edu-curriculum .title{margin-top:1.4cqw;font-family:var(--font-display);font-size:4.6cqw;line-height:1.2;letter-spacing:-.01em;padding-block:.26em;margin-bottom:-.26em}
.v-edu-curriculum .title .w:last-child{color:var(--accent);font-style:italic}
.v-edu-curriculum .chips{display:flex;gap:.8cqw;margin-top:2.2cqw;flex-wrap:wrap}
.v-edu-curriculum .chips span{font-size:1.3cqw;font-weight:600;padding:.7cqw 1.3cqw;border-radius:99cqw;background:var(--paper);border:1px solid color-mix(in srgb,var(--ink) 12%,transparent)}
.v-edu-curriculum .enrolled{position:absolute;left:6cqw;bottom:6cqw;display:flex;align-items:center;gap:1.4cqw;font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 65%,transparent);animation:edu-curriculum-enr 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .enrolled b{color:var(--ink)}
.v-edu-curriculum .av{display:flex;padding-left:.9cqw}
.v-edu-curriculum .av i{width:3cqw;height:3cqw;border-radius:50%;border:.3cqw solid var(--paper);margin-left:-.9cqw;background:linear-gradient(135deg,#ffb48a,#e0607e)}
.v-edu-curriculum .av i.a2{background:linear-gradient(135deg,#9fd3ff,#4a6cf0)}
.v-edu-curriculum .av i.a3{background:linear-gradient(135deg,#ffe08a,#e8a33c)}
.v-edu-curriculum .av i.a4{background:linear-gradient(135deg,#b9f0c9,#3a9e6c)}
.v-edu-curriculum .mods{position:absolute;left:46cqw;right:5.5cqw;top:5cqw}
.v-edu-curriculum .mod{margin-bottom:1cqw}
.v-edu-curriculum .card{background:var(--paper);border:1px solid color-mix(in srgb,var(--ink) 10%,transparent);border-radius:1.3cqw;box-shadow:0 .3cqw .8cqw rgba(30,30,60,.05),0 1.6cqw 3cqw -1.6cqw rgba(30,30,60,.18)}
.v-edu-curriculum .hd{min-height:5.4cqw;box-sizing:border-box;display:flex;align-items:center;gap:1.4cqw;padding:0 1.6cqw;position:relative}
.v-edu-curriculum .num{font-family:var(--font-mono);font-size:1.2cqw;color:color-mix(in srgb,var(--ink) 45%,transparent);flex:none}
.v-edu-curriculum .nm{font-size:1.65cqw;font-weight:600;line-height:1.2;flex:1;min-width:0}
.v-edu-curriculum .ct{font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 50%,transparent);flex:none}
.v-edu-curriculum .chev{width:1.6cqw;height:1.6cqw;color:color-mix(in srgb,var(--ink) 50%,transparent);flex:none}
.v-edu-curriculum .m1{animation:edu-curriculum-m1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .m2{animation:edu-curriculum-m2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .m3{animation:edu-curriculum-m3 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-curriculum .m4{animation:edu-curriculum-m4 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-curriculum .m5{animation:edu-curriculum-m5 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-curriculum .m2 .card{clip-path:inset(-2cqw -2cqw var(--ph) -2cqw);animation:edu-curriculum-open 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-curriculum .m2 .hd::before{content:"";position:absolute;left:0;top:25%;bottom:25%;width:.35cqw;background:var(--accent);border-radius:0 .3cqw .3cqw 0;transform:scaleY(0);animation:edu-curriculum-bar 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .m2 .hd::after{content:"";position:absolute;left:1.6cqw;right:1.6cqw;bottom:0;height:1px;background:color-mix(in srgb,var(--ink) 8%,transparent)}
.v-edu-curriculum .m2 .chev{color:var(--accent);animation:edu-curriculum-chev 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-curriculum .panel{height:var(--ph);padding:.6cqw 1.2cqw;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;gap:.3cqw}
.v-edu-curriculum .ls{display:flex;align-items:center;gap:1.2cqw;height:4cqw;padding:0 1cqw;border-radius:.9cqw;font-size:1.35cqw}
.v-edu-curriculum .ls.on{background:color-mix(in srgb,var(--accent) 10%,var(--paper))}
.v-edu-curriculum .pi{width:2.2cqw;height:2.2cqw;border-radius:50%;display:grid;place-items:center;background:color-mix(in srgb,var(--ink) 7%,var(--paper));color:var(--ink);flex:none}
.v-edu-curriculum .pi svg{width:1.1cqw;height:1.1cqw}
.v-edu-curriculum .ls.done .pi{background:var(--accent);color:var(--paper)}
.v-edu-curriculum .ls.on .pi{background:var(--ink);color:var(--paper)}
.v-edu-curriculum .ls .t{flex:1;white-space:nowrap}
.v-edu-curriculum .ls.done .t{color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-edu-curriculum .ls .d{font-family:var(--font-mono);font-size:1.15cqw;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-edu-curriculum .l1{animation:edu-curriculum-l1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .l2{animation:edu-curriculum-l2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .l3{animation:edu-curriculum-l3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-curriculum .eq{display:flex;gap:.25cqw;align-items:flex-end;height:1.4cqw}
.v-edu-curriculum .eq i{width:.35cqw;height:100%;background:var(--accent);border-radius:.2cqw;transform-origin:bottom;animation:edu-curriculum-eq .8s ease-in-out infinite}
.v-edu-curriculum .eq i:nth-child(2){animation-duration:1.1s;animation-direction:reverse}
.v-edu-curriculum .eq i:nth-child(3){animation-duration:.65s}
.v-edu-curriculum .cursor{position:absolute;left:0;top:0;width:2.4cqw;height:2.4cqw;filter:drop-shadow(0 .3cqw .5cqw rgba(0,0,0,.25));animation:edu-curriculum-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-curriculum .cursor svg{width:100%;height:100%;display:block}
@container (max-aspect-ratio: 4/5){
  .v-edu-curriculum .mods{--ph:32cqw}
  .v-edu-curriculum .cursor{--cx:84cqw;--cy:45cqw}
  .v-edu-curriculum .left{left:8cqw;right:8cqw;top:8cqw;width:auto}
  .v-edu-curriculum .brand{font-size:5.6cqw;gap:2.4cqw}
  .v-edu-curriculum .brand svg{width:7cqw;height:7cqw}
  .v-edu-curriculum .kick{margin-top:3cqw;font-size:5.4cqw;gap:2.4cqw}
  .v-edu-curriculum .kick i{width:6cqw}
  .v-edu-curriculum .title{position:absolute;left:0;right:0;top:124cqw;margin:0;font-size:10cqw}
  .v-edu-curriculum .chips,.v-edu-curriculum .enrolled{display:none}
  .v-edu-curriculum .mods{left:7cqw;right:7cqw;top:34cqw}
  .v-edu-curriculum .mod{margin-bottom:1.8cqw}
  .v-edu-curriculum .card{border-radius:3.4cqw}
  .v-edu-curriculum .hd{min-height:10.6cqw;gap:3cqw;padding:1.4cqw 4cqw}
  .v-edu-curriculum .num{font-size:3.4cqw}
  .v-edu-curriculum .nm{font-size:5.4cqw}
  .v-edu-curriculum .ct{display:none}
  .v-edu-curriculum .chev{width:5cqw;height:5cqw}
  .v-edu-curriculum .m2 .hd::before{width:1cqw}
  .v-edu-curriculum .m2 .hd::after{left:4cqw;right:4cqw}
  .v-edu-curriculum .panel{padding:1.4cqw 2.4cqw;gap:.6cqw}
  .v-edu-curriculum .ls{height:8.4cqw;gap:2.6cqw;padding:0 2.2cqw;border-radius:2.2cqw;font-size:3.5cqw}
  .v-edu-curriculum .pi{width:5.4cqw;height:5.4cqw}
  .v-edu-curriculum .pi svg{width:2.6cqw;height:2.6cqw}
  .v-edu-curriculum .ls .d{font-size:3cqw}
  .v-edu-curriculum .eq{height:3.4cqw;gap:.6cqw}
  .v-edu-curriculum .eq i{width:.9cqw}
  .v-edu-curriculum .cursor{width:6cqw;height:6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-curriculum .mods{--ph:21cqw}
  .v-edu-curriculum .cursor{--cx:90cqw;--cy:30.6cqw}
  .v-edu-curriculum .left{left:6cqw;top:8cqw;width:37cqw}
  .v-edu-curriculum .brand{font-size:2.6cqw;gap:1.4cqw}
  .v-edu-curriculum .brand svg{width:3.6cqw;height:3.6cqw}
  .v-edu-curriculum .kick{margin-top:7cqw;font-size:2.2cqw;gap:1.4cqw}
  .v-edu-curriculum .kick i{width:3.4cqw}
  .v-edu-curriculum .title{font-size:6.2cqw;margin-top:2cqw}
  .v-edu-curriculum .chips{margin-top:3cqw;gap:1.2cqw}
  .v-edu-curriculum .chips span{font-size:1.9cqw;padding:1cqw 1.8cqw}
  .v-edu-curriculum .enrolled{bottom:8cqw;font-size:2cqw;gap:1.8cqw}
  .v-edu-curriculum .av i{width:4.4cqw;height:4.4cqw;margin-left:-1.4cqw}
  .v-edu-curriculum .mods{left:47cqw;right:5cqw;top:17cqw}
  .v-edu-curriculum .mod{margin-bottom:1.4cqw}
  .v-edu-curriculum .card{border-radius:2cqw}
  .v-edu-curriculum .hd{min-height:7.6cqw;gap:1.6cqw;padding:.8cqw 2.2cqw}
  .v-edu-curriculum .num{font-size:1.7cqw}
  .v-edu-curriculum .nm{font-size:2.3cqw}
  .v-edu-curriculum .ct{display:none}
  .v-edu-curriculum .chev{width:2.4cqw;height:2.4cqw}
  .v-edu-curriculum .m2 .hd::before{width:.5cqw}
  .v-edu-curriculum .m2 .hd::after{left:2.2cqw;right:2.2cqw}
  .v-edu-curriculum .panel{padding:.8cqw 1.4cqw;gap:.4cqw}
  .v-edu-curriculum .ls{height:5.8cqw;gap:1.4cqw;padding:0 1.2cqw;border-radius:1.3cqw;font-size:1.9cqw}
  .v-edu-curriculum .pi{width:3.2cqw;height:3.2cqw}
  .v-edu-curriculum .pi svg{width:1.6cqw;height:1.6cqw}
  .v-edu-curriculum .ls .d{font-size:1.6cqw}
  .v-edu-curriculum .eq{height:2cqw;gap:.35cqw}
  .v-edu-curriculum .eq i{width:.5cqw}
  .v-edu-curriculum .cursor{width:3.4cqw;height:3.4cqw}
}
@keyframes edu-curriculum-left{0%{opacity:0;transform:translateY(3cqw)}12%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes edu-curriculum-enr{0%,10%{opacity:0;transform:translateY(2cqw)}20%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
@keyframes edu-curriculum-m1{0%,3%{opacity:0;transform:translateX(5cqw)}12%,86%{opacity:1;transform:none}95%,100%{opacity:0;transform:translateX(-2cqw)}}
@keyframes edu-curriculum-m2{0%,6%{opacity:0;transform:translateX(5cqw)}15%,86%{opacity:1;transform:none}95%,100%{opacity:0;transform:translateX(-2cqw)}}
@keyframes edu-curriculum-m3{0%,9%{opacity:0;transform:translate(5cqw,calc(var(--ph) * -1))}18%,28%{opacity:1;transform:translate(0,calc(var(--ph) * -1))}40%,86%{opacity:1;transform:translate(0,0)}95%,100%{opacity:0;transform:translate(-2cqw,0)}}
@keyframes edu-curriculum-m4{0%,12%{opacity:0;transform:translate(5cqw,calc(var(--ph) * -1))}21%,28%{opacity:1;transform:translate(0,calc(var(--ph) * -1))}40%,86%{opacity:1;transform:translate(0,0)}95%,100%{opacity:0;transform:translate(-2cqw,0)}}
@keyframes edu-curriculum-m5{0%,15%{opacity:0;transform:translate(5cqw,calc(var(--ph) * -1))}24%,28%{opacity:1;transform:translate(0,calc(var(--ph) * -1))}40%,86%{opacity:1;transform:translate(0,0)}95%,100%{opacity:0;transform:translate(-2cqw,0)}}
@keyframes edu-curriculum-open{0%,28%{clip-path:inset(-2cqw -2cqw var(--ph) -2cqw)}40%,100%{clip-path:inset(-2cqw -2cqw -2cqw -2cqw)}}
@keyframes edu-curriculum-bar{0%,26%{transform:scaleY(0)}34%,100%{transform:scaleY(1)}}
@keyframes edu-curriculum-chev{0%,28%{transform:rotate(0)}38%,100%{transform:rotate(180deg)}}
@keyframes edu-curriculum-l1{0%,30%{opacity:0;transform:translateY(1cqw)}36%,100%{opacity:1;transform:none}}
@keyframes edu-curriculum-l2{0%,32%{opacity:0;transform:translateY(1cqw)}39%,100%{opacity:1;transform:none}}
@keyframes edu-curriculum-l3{0%,34%{opacity:0;transform:translateY(1cqw)}42%,100%{opacity:1;transform:none}}
@keyframes edu-curriculum-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes edu-curriculum-cur{0%,10%{opacity:0;transform:translate(calc(var(--cx) + 16cqw),calc(var(--cy) + 44cqw))}14%{opacity:1}24%{transform:translate(var(--cx),var(--cy))}26%{transform:translate(var(--cx),var(--cy)) scale(.82)}29%{transform:translate(var(--cx),var(--cy)) scale(1)}46%{transform:translate(calc(var(--cx) + 4cqw),calc(var(--cy) + 10.5cqw))}80%{opacity:1;transform:translate(calc(var(--cx) + 6cqw),calc(var(--cy) + 12cqw))}92%,100%{opacity:0;transform:translate(calc(var(--cx) + 22cqw),calc(var(--cy) + 36cqw))}}
`,
};

export const eduCertificate: SceneSpec = {
  id: "edu-certificate",
  slug: "mg-edu-certificate",
  kind: "scene",
  name: "Progress To Certificate",
  job: "product-ui",
  language: "editorial",
  mechanic: "progress-fill-to-certificate",
  energy: "default",
  settle: 3.15,
  colors: { ink: "#1E3A2C", accent: "#B8893A", secondary: "#1E7A4F", paper: "#EDE5D2" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["certificate", "progress", "course", "graduation"],
  fields: [
    { key: "name", label: "Student name", default: "Maya Okafor", maxChars: 22, role: "name" },
    { key: "course", label: "Course", default: "Data Analytics Essentials", maxChars: 32, role: "label" },
    { key: "title", label: "Certificate title", default: "Certificate of Completion", maxChars: 30, role: "kicker" },
    { key: "school", label: "School", default: "Brightwell School", maxChars: 24, role: "label" },
  ],
  html: `<div class="prog">
<div class="row"><div><div class="lbl">Your progress</div><div class="crs">{{course}}</div></div><div class="pct"><div class="strip"><div>0%</div><div>26%</div><div>61%</div><div>88%</div><div>100%</div></div></div></div>
<div class="track"><div class="fill"></div></div>
<div class="foot"><span>32 of 32 lessons</span><span>48 hours of practice</span></div>
</div>
<span class="spk s1">${STAR4}</span><span class="spk s2">${STAR4}</span>
<div class="cert"><div class="fr1"></div><div class="fr2"></div>
<div class="in">
<div class="cbrand" data-21st-slot="school">${BOOK}<span>{{school}}</span></div>
<div class="ttl" data-21st-slot="title">{{title}}</div>
<div class="aw">This certifies that</div>
<div class="name" data-21st-slot="name">{{name}}</div>
<div class="desc">has successfully completed</div>
<div class="crs2" data-21st-slot="course">{{course}}</div>
<div class="bot">
<div class="sig"><svg viewBox="0 0 140 46"><path pathLength="1" d="M5 33C14 9 25 8 22 28s8 15 18-4c5-10 10 5 15 3 7-3 9-13 15-6 5 8 10 12 18 2 4-6 8-2 12 2 8 8 20-6 35-8"/></svg><div class="ln"><b>Arun Velasco</b><br>Lead instructor</div></div>
<div class="seal"><svg viewBox="0 0 100 120"><path class="rb1" d="M30 70l-10 46 18-10 10 14 6-48z"/><path class="rb2" d="M70 70l10 46-18-10-10 14-6-48z"/><circle class="sd" cx="50" cy="48" r="44"/><circle class="sr" cx="50" cy="48" r="38" fill="none" stroke-width="1.6" stroke-dasharray="3 3"/><circle class="si" cx="50" cy="48" r="31"/><path class="ss" d="M50 28l5.6 12 13 1.4-9.7 8.8 2.8 12.8L50 56.4 38.3 63l2.8-12.8-9.7-8.8 13-1.4z"/></svg></div>
<div class="date"><div class="dv">October 7, 2026</div><div class="ln">Date of completion<br>ID BW-2026-48117</div></div>
</div>
</div>
</div>
<span class="spk s3">${STAR4}</span><span class="spk s4">${STAR4}</span>`,
  css: `
.v-edu-certificate{color:var(--ink);font-family:var(--font-body)}
.v-edu-certificate .prog{--sh:4cqw}
.v-edu-certificate[data-backdrop="on"]{background:radial-gradient(70% 90% at 50% 40%,color-mix(in srgb,var(--paper) 80%,#fff) 0%,var(--paper) 60%,color-mix(in srgb,var(--paper) 88%,var(--ink)) 100%)}
.v-edu-certificate .prog{position:absolute;left:25cqw;top:16cqw;width:50cqw;background:color-mix(in srgb,var(--paper) 88%,#fff);border-radius:1.6cqw;padding:3cqw 3.2cqw;box-sizing:border-box;box-shadow:0 2cqw 5cqw -1cqw rgba(60,45,20,.28);animation:edu-certificate-prog 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-certificate .row{display:flex;justify-content:space-between;align-items:flex-end;gap:2cqw}
.v-edu-certificate .lbl{font-size:1.35cqw;color:color-mix(in srgb,var(--ink) 55%,transparent);font-weight:600}
.v-edu-certificate .crs{font-size:2.3cqw;font-weight:700;line-height:1.2;letter-spacing:-.02em;margin-top:.6cqw}
.v-edu-certificate .pct{height:var(--sh);overflow:hidden;font-family:var(--font-display);font-size:3.2cqw;line-height:var(--sh);color:var(--secondary);flex:none}
.v-edu-certificate .strip{animation:edu-certificate-pct 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-certificate .strip div{height:var(--sh);text-align:right}
.v-edu-certificate .track{margin-top:2.2cqw;height:1.4cqw;border-radius:1cqw;background:color-mix(in srgb,var(--ink) 10%,transparent);overflow:hidden}
.v-edu-certificate .fill{height:100%;background:linear-gradient(90deg,var(--secondary),color-mix(in srgb,var(--secondary) 60%,#fff));transform-origin:left;transform:scaleX(0);animation:edu-certificate-fill 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-certificate .foot{display:flex;justify-content:space-between;margin-top:1.4cqw;font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 55%,transparent)}
.v-edu-certificate .cert{position:absolute;left:17cqw;top:5cqw;width:66cqw;height:46cqw;box-sizing:border-box;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 86%,#fff),color-mix(in srgb,var(--paper) 94%,#fff));border-radius:.6cqw;padding:2.2cqw;overflow:hidden;box-shadow:0 .4cqw 1cqw rgba(60,45,20,.14),0 3cqw 6cqw -2cqw rgba(60,45,20,.4);animation:edu-certificate-cert 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-certificate .cert::after{content:"";position:absolute;top:-10cqw;bottom:-10cqw;left:0;width:14cqw;background:linear-gradient(90deg,transparent,rgba(255,250,230,.6),transparent);transform:translateX(-20cqw) skewX(-18deg);animation:edu-certificate-shine 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-certificate .fr1{position:absolute;inset:1.4cqw;border:.3cqw solid var(--accent);border-radius:.3cqw}
.v-edu-certificate .fr2{position:absolute;inset:2.1cqw;border:1px solid color-mix(in srgb,var(--accent) 50%,transparent)}
.v-edu-certificate .in{position:relative;height:100%;display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:2.6cqw;box-sizing:border-box}
.v-edu-certificate .cbrand{display:flex;gap:.8cqw;align-items:center;font-size:1.3cqw;line-height:1.2;font-weight:700;letter-spacing:.04em}
.v-edu-certificate .cbrand svg{width:2cqw;height:2cqw;color:var(--accent);flex:none}
.v-edu-certificate .ttl{font-family:var(--font-display);font-style:italic;font-size:2.7cqw;line-height:1.2;color:var(--accent);margin-top:1cqw}
.v-edu-certificate .aw,.v-edu-certificate .desc{font-size:1.15cqw;color:color-mix(in srgb,var(--ink) 60%,transparent);margin-top:.6cqw}
.v-edu-certificate .name{font-family:var(--font-display);font-size:5.8cqw;line-height:1.2;padding-block:.1em;margin-block:-.1em;clip-path:inset(-20% 100% -20% 0);animation:edu-certificate-name 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-certificate .crs2{font-size:1.7cqw;line-height:1.2;font-weight:600;margin-top:.4cqw;max-width:44cqw}
.v-edu-certificate .bot{position:absolute;left:2.6cqw;right:2.6cqw;bottom:2cqw;display:flex;justify-content:space-between;align-items:flex-end}
.v-edu-certificate .sig{width:16cqw;text-align:left}
.v-edu-certificate .sig svg{width:14cqw;height:4.6cqw;display:block}
.v-edu-certificate .sig path{fill:none;stroke:var(--ink);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:edu-certificate-sig 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-certificate .ln{border-top:1px solid color-mix(in srgb,var(--ink) 30%,transparent);padding-top:.6cqw;font-size:1cqw;color:color-mix(in srgb,var(--ink) 62%,transparent);line-height:1.35}
.v-edu-certificate .ln b{color:var(--ink);font-weight:600}
.v-edu-certificate .date{width:16cqw;text-align:right}
.v-edu-certificate .dv{font-family:var(--font-display);font-size:1.9cqw;margin-bottom:.8cqw}
.v-edu-certificate .seal{width:9cqw;height:11cqw;margin-bottom:-.6cqw;animation:edu-certificate-seal 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-certificate .seal svg{width:100%;height:100%;display:block;filter:drop-shadow(0 .4cqw .6cqw rgba(120,80,20,.35))}
.v-edu-certificate .rb1{fill:color-mix(in srgb,var(--secondary) 75%,#000)}
.v-edu-certificate .rb2{fill:var(--secondary)}
.v-edu-certificate .sd{fill:var(--accent)}
.v-edu-certificate .sr{stroke:color-mix(in srgb,var(--accent) 40%,#fff)}
.v-edu-certificate .si{fill:color-mix(in srgb,var(--accent) 85%,#000)}
.v-edu-certificate .ss{fill:color-mix(in srgb,var(--accent) 30%,#fff)}
.v-edu-certificate .spk{position:absolute;width:2.2cqw;height:2.2cqw;color:var(--accent);transform:scale(0);animation:edu-certificate-spk 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-certificate .spk svg{width:100%;height:100%;display:block}
.v-edu-certificate .s1{left:12cqw;top:8cqw}
.v-edu-certificate .s2{left:85cqw;top:13cqw;width:1.6cqw;height:1.6cqw}
.v-edu-certificate .s3{left:86cqw;top:43cqw}
.v-edu-certificate .s4{left:13cqw;top:46cqw;width:1.4cqw;height:1.4cqw}
@container (max-aspect-ratio: 4/5){
  .v-edu-certificate .prog{--sh:8cqw}
  .v-edu-certificate .prog{left:7cqw;width:86cqw;top:62cqw;padding:6cqw;border-radius:4cqw}
  .v-edu-certificate .lbl{font-size:3.4cqw}
  .v-edu-certificate .crs{font-size:5.4cqw;margin-top:1.4cqw}
  .v-edu-certificate .pct{font-size:6.4cqw}
  .v-edu-certificate .track{margin-top:5cqw;height:3cqw;border-radius:2cqw}
  .v-edu-certificate .foot{margin-top:3cqw;font-size:3.2cqw}
  .v-edu-certificate .cert{left:6cqw;width:88cqw;top:9cqw;height:160cqw;padding:4cqw;border-radius:1.4cqw}
  .v-edu-certificate .cert::after{width:30cqw}
  .v-edu-certificate .fr1{inset:3cqw;border-width:.7cqw;border-radius:.8cqw}
  .v-edu-certificate .fr2{inset:4.6cqw}
  .v-edu-certificate .in{padding-top:9cqw}
  .v-edu-certificate .cbrand{position:absolute;left:0;right:0;bottom:6cqw;justify-content:center;font-size:5.4cqw;gap:2cqw}
  .v-edu-certificate .cbrand svg{width:7cqw;height:7cqw}
  .v-edu-certificate .ttl{font-size:9cqw;margin-top:0;max-width:66cqw}
  .v-edu-certificate .aw,.v-edu-certificate .desc{font-size:3.6cqw;margin-top:2.6cqw}
  .v-edu-certificate .name{font-size:13cqw;margin-top:1cqw;max-width:74cqw}
  .v-edu-certificate .crs2{font-size:5.6cqw;margin-top:1.2cqw;max-width:70cqw}
  .v-edu-certificate .bot{left:6cqw;right:6cqw;bottom:22cqw;align-items:center;flex-wrap:wrap;justify-content:center;column-gap:4cqw;row-gap:3cqw}
  .v-edu-certificate .seal{order:-1;width:100%;height:24cqw;margin:0}
  .v-edu-certificate .sig,.v-edu-certificate .date{width:30cqw}
  .v-edu-certificate .sig svg{width:28cqw;height:9cqw}
  .v-edu-certificate .ln{font-size:3cqw;padding-top:1.2cqw}
  .v-edu-certificate .dv{font-size:4.4cqw;margin-bottom:1.6cqw}
  .v-edu-certificate .spk{width:5cqw;height:5cqw}
  .v-edu-certificate .s1{left:2cqw;top:4cqw}
  .v-edu-certificate .s2{left:91cqw;top:24cqw;width:4cqw;height:4cqw}
  .v-edu-certificate .s3{left:90cqw;top:146cqw}
  .v-edu-certificate .s4{left:3cqw;top:168cqw;width:3.6cqw;height:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-certificate .prog{--sh:5.4cqw}
  .v-edu-certificate .prog{left:14cqw;width:72cqw;top:34cqw;padding:4.4cqw;border-radius:2.4cqw}
  .v-edu-certificate .lbl{font-size:2cqw}
  .v-edu-certificate .crs{font-size:3.2cqw;margin-top:.8cqw}
  .v-edu-certificate .pct{font-size:4.4cqw}
  .v-edu-certificate .track{margin-top:3cqw;height:2cqw}
  .v-edu-certificate .foot{margin-top:2cqw;font-size:1.8cqw}
  .v-edu-certificate .cert{left:6cqw;width:88cqw;top:14cqw;height:72cqw;padding:3cqw;border-radius:.8cqw}
  .v-edu-certificate .cert::after{width:20cqw}
  .v-edu-certificate .fr1{inset:1.9cqw;border-width:.4cqw}
  .v-edu-certificate .fr2{inset:2.9cqw}
  .v-edu-certificate .in{padding-top:3.6cqw}
  .v-edu-certificate .cbrand{font-size:2cqw;gap:1.1cqw}
  .v-edu-certificate .cbrand svg{width:2.8cqw;height:2.8cqw}
  .v-edu-certificate .ttl{font-size:3.8cqw;margin-top:1.4cqw}
  .v-edu-certificate .aw,.v-edu-certificate .desc{font-size:1.6cqw;margin-top:.9cqw}
  .v-edu-certificate .name{font-size:8cqw}
  .v-edu-certificate .crs2{font-size:2.4cqw;margin-top:.6cqw;max-width:60cqw}
  .v-edu-certificate .bot{left:3.6cqw;right:3.6cqw;bottom:2.8cqw}
  .v-edu-certificate .sig,.v-edu-certificate .date{width:22cqw}
  .v-edu-certificate .sig svg{width:19cqw;height:6.2cqw}
  .v-edu-certificate .ln{font-size:1.4cqw;padding-top:.8cqw}
  .v-edu-certificate .dv{font-size:2.6cqw;margin-bottom:1.1cqw}
  .v-edu-certificate .seal{width:12cqw;height:14.6cqw}
  .v-edu-certificate .spk{width:3cqw;height:3cqw}
  .v-edu-certificate .s1{left:2cqw;top:9cqw}
  .v-edu-certificate .s2{left:94cqw;top:18cqw;width:2.2cqw;height:2.2cqw}
  .v-edu-certificate .s3{left:93cqw;top:82cqw}
  .v-edu-certificate .s4{left:3cqw;top:90cqw;width:2cqw;height:2cqw}
}
@keyframes edu-certificate-prog{0%{opacity:0;transform:translateY(4cqw) scale(.96);filter:blur(0)}6%,30%{opacity:1;transform:none;filter:blur(0)}37%,100%{opacity:0;transform:translateY(-4cqw) scale(.9);filter:blur(.6cqw)}}
@keyframes edu-certificate-pct{0%,6%{transform:translateY(0)}9%,12%{transform:translateY(calc(var(--sh) * -1))}15%,18%{transform:translateY(calc(var(--sh) * -2))}21%,24%{transform:translateY(calc(var(--sh) * -3))}27%,100%{transform:translateY(calc(var(--sh) * -4))}}
@keyframes edu-certificate-fill{0%,5%{transform:scaleX(0)}27%,100%{transform:scaleX(1)}}
@keyframes edu-certificate-cert{0%,32%{opacity:0;transform:perspective(120cqw) translateY(10cqw) rotateX(18deg) scale(.92)}44%,86%{opacity:1;transform:perspective(120cqw) translateY(0) rotateX(0) scale(1)}96%,100%{opacity:0;transform:perspective(120cqw) translateY(-5cqw) rotateX(0) scale(.97)}}
@keyframes edu-certificate-name{0%,36%{clip-path:inset(-20% 100% -20% 0)}45%,100%{clip-path:inset(-20% -5% -20% -5%)}}
@keyframes edu-certificate-sig{0%,40%{stroke-dashoffset:1}50%,100%{stroke-dashoffset:0}}
@keyframes edu-certificate-seal{0%,38%{opacity:0;transform:scale(1.7) rotate(-40deg)}45%{opacity:1;transform:scale(.94) rotate(4deg)}49%,100%{opacity:1;transform:scale(1) rotate(0)}}
@keyframes edu-certificate-shine{0%,54%{transform:translateX(-70cqw) skewX(-18deg)}74%,100%{transform:translateX(120cqw) skewX(-18deg)}}
@keyframes edu-certificate-spk{0%,40%{transform:scale(0) rotate(0)}48%{transform:scale(1) rotate(45deg)}66%{transform:scale(.55) rotate(90deg)}82%{transform:scale(1) rotate(135deg)}94%,100%{transform:scale(0) rotate(180deg)}}
`,
};

export const eduInstructor: SceneSpec = {
  id: "edu-instructor",
  slug: "mg-edu-instructor",
  kind: "scene",
  name: "Meet The Instructor",
  job: "titles",
  language: "editorial",
  mechanic: "portrait-push-name-reveal",
  energy: "calm",
  settle: 2.7,
  colors: { ink: "#F7EAD9", accent: "#FFB36B", secondary: "#7A3D8F", paper: "#1C1024" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["instructor", "speaker", "portrait", "course"],
  fields: [
    { key: "name", label: "Name", default: "Lena Moravec", maxChars: 22, role: "name" },
    { key: "role", label: "Bio", default: "Teaches Data Storytelling. Ex-lead analyst, 12 years at Halden Labs.", maxChars: 80, role: "body" },
    { key: "kicker", label: "Kicker", default: "meet your instructor", maxChars: 24, role: "kicker" },
    { key: "brand", label: "Brand", default: "Brightwell", maxChars: 18, role: "label" },
  ],
  html: `<div class="photo"><div class="scene">
<div class="bok k1"></div><div class="bok k2"></div><div class="bok k3"></div>
<svg class="sil" viewBox="0 0 100 110" preserveAspectRatio="xMidYMax slice"><defs><linearGradient id="edu-instructor-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6c39b"/><stop offset="1" stop-color="#c47468"/></linearGradient><linearGradient id="edu-instructor-body" x1="0" y1="0" x2="1" y2="1"><stop class="g1" offset="0"/><stop class="g2" offset="1"/></linearGradient></defs><path d="M44 56h16v14H44z" fill="#b8665f"/><path d="M8 110C10 82 28 68 52 68s42 14 44 42z" fill="url(#edu-instructor-body)"/><path d="M40 66c4 6 20 6 24 0l3 5c-6 7-24 7-30 0z" fill="#2b1530"/><ellipse cx="52" cy="40" rx="16" ry="19.5" fill="url(#edu-instructor-skin)"/><path d="M33 44c-3-20 9-29 21-28 14 1 20 12 18 26-2-8-6-14-12-15-8 6-18 7-25 5-1 4-1 8-2 12z" fill="#2b1530"/><path class="rim" d="M68 30c6 4 8 14 6 22" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".7"/></svg>
</div></div>
<div class="top"><div class="pill" data-21st-slot="brand">${BOOK}<span>{{brand}}</span></div><div class="pill p2">Course 03 · 6 weeks</div></div>
<div class="info">
<div class="kick"><span data-21st-slot="kicker">{{kicker}}</span><svg viewBox="0 0 40 34"><path pathLength="1" d="M3 30C14 28 26 20 32 5M24 9l8-5 2 9"/></svg></div>
<div class="name" data-21st-slot="name">{{name|words}}</div>
<div class="role" data-21st-slot="role">{{role}}</div>
<div class="stats"><div class="st c1"><b>4.9</b><span>rating</span></div><div class="st c2"><b>18k</b><span>students</span></div><div class="st c3"><b>42</b><span>lessons</span></div></div>
</div>`,
  css: `
.v-edu-instructor{color:var(--ink);font-family:var(--font-body)}
.v-edu-instructor[data-backdrop="on"]{background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 86%,var(--secondary)) 0%,var(--paper) 100%)}
.v-edu-instructor .photo{position:absolute;left:4.5cqw;top:4.5cqw;bottom:4.5cqw;width:43cqw;border-radius:2cqw;overflow:hidden;box-shadow:0 1.2cqw 2.4cqw rgba(0,0,0,.32)}
.v-edu-instructor .photo::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 62%,rgba(10,4,14,.35) 100%)}
.v-edu-instructor .scene{position:absolute;inset:0;background:radial-gradient(55% 50% at 66% 40%,color-mix(in srgb,var(--accent) 90%,transparent) 0%,transparent 70%),radial-gradient(50% 50% at 18% 22%,var(--secondary) 0%,transparent 70%),linear-gradient(160deg,color-mix(in srgb,var(--secondary) 55%,#1a0f22),#1a0f22);transform-origin:60% 40%;animation:edu-instructor-push 6s cubic-bezier(.3,0,.3,1) infinite}
.v-edu-instructor .bok{position:absolute;border-radius:50%;filter:blur(.8cqw);animation:edu-instructor-bok 6s ease-in-out infinite}
.v-edu-instructor .k1{width:12%;aspect-ratio:1;left:10%;top:18%;background:color-mix(in srgb,var(--accent) 40%,transparent)}
.v-edu-instructor .k2{width:7%;aspect-ratio:1;left:26%;top:44%;background:rgba(255,140,170,.3);animation-direction:reverse}
.v-edu-instructor .k3{width:18%;aspect-ratio:1;left:-4%;top:62%;background:color-mix(in srgb,var(--secondary) 50%,transparent)}
.v-edu-instructor .sil{position:absolute;right:-6%;bottom:0;width:100%;height:88%}
.v-edu-instructor .g1{stop-color:var(--secondary)}
.v-edu-instructor .g2{stop-color:color-mix(in srgb,var(--secondary) 45%,#000)}
.v-edu-instructor .rim{stroke:color-mix(in srgb,var(--accent) 60%,#fff)}
.v-edu-instructor .top{position:absolute;left:53cqw;right:5cqw;top:5cqw;display:flex;justify-content:space-between;align-items:center;gap:1cqw;animation:edu-instructor-top 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-instructor .pill{display:flex;align-items:center;gap:.8cqw;padding:.8cqw 1.5cqw;border-radius:99cqw;background:color-mix(in srgb,var(--ink) 9%,transparent);border:1px solid color-mix(in srgb,var(--ink) 16%,transparent);font-size:1.5cqw;line-height:1.2;font-weight:600;white-space:nowrap}
.v-edu-instructor .pill svg{width:1.9cqw;height:1.9cqw;color:var(--accent);flex:none}
.v-edu-instructor .p2{font-size:1.2cqw;color:color-mix(in srgb,var(--ink) 75%,transparent)}
.v-edu-instructor .info{position:absolute;left:53cqw;right:5cqw;top:11.6cqw;animation:edu-instructor-out 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-instructor .kick{display:flex;align-items:flex-end;gap:1cqw;font-family:var(--font-display);font-style:italic;font-size:3.2cqw;line-height:1.2;color:var(--accent)}
.v-edu-instructor .kick span{display:inline-block;transform:rotate(-2deg);clip-path:inset(-20% 100% -20% 0);animation:edu-instructor-kick 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-instructor .kick svg{width:4.4cqw;height:3.8cqw;margin-bottom:1.2cqw;overflow:visible;flex:none;transform:scaleY(-1)}
.v-edu-instructor .kick path{fill:none;stroke:var(--accent);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:edu-instructor-arrow 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-instructor .name{font-family:var(--font-display);font-size:7cqw;line-height:1.2;letter-spacing:-.01em;margin-top:.4cqw;padding-block:.06em;clip-path:inset(0 0 100% 0);animation:edu-instructor-name 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-instructor .name .w:last-child{color:color-mix(in srgb,var(--accent) 55%,var(--ink));font-style:italic}
.v-edu-instructor .role{font-size:1.9cqw;line-height:1.4;color:color-mix(in srgb,var(--ink) 78%,transparent);margin-top:1.2cqw;animation:edu-instructor-role 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-instructor .stats{display:flex;gap:1.2cqw;margin-top:2.6cqw}
.v-edu-instructor .st{flex:1;padding:1.1cqw 1.3cqw;border-radius:1.4cqw;background:color-mix(in srgb,var(--ink) 6%,transparent);border:1px solid color-mix(in srgb,var(--ink) 14%,transparent)}
.v-edu-instructor .st b{display:block;font-family:var(--font-display);font-size:3.4cqw;font-weight:400;line-height:1.1}
.v-edu-instructor .st span{font-size:1.4cqw;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-edu-instructor .c1{animation:edu-instructor-c1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-instructor .c2{animation:edu-instructor-c2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-instructor .c3{animation:edu-instructor-c3 6s cubic-bezier(.2,.8,.2,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-edu-instructor .photo{left:6cqw;right:6cqw;top:6cqw;bottom:auto;width:auto;height:80cqw;border-radius:5cqw}
  .v-edu-instructor .top{left:10cqw;right:10cqw;top:10cqw;gap:2cqw}
  .v-edu-instructor .pill{font-size:5.4cqw;gap:2cqw;padding:1.8cqw 3.4cqw;background:rgba(20,8,26,.42);border-color:rgba(255,255,255,.2);color:#f7ead9}
  .v-edu-instructor .p2{font-size:3.4cqw}
  .v-edu-instructor .pill svg{width:6cqw;height:6cqw}
  .v-edu-instructor .info{left:7cqw;right:7cqw;top:91cqw}
  .v-edu-instructor .kick{font-size:6cqw;gap:2cqw}
  .v-edu-instructor .kick svg{width:10cqw;height:8.6cqw;margin-bottom:3cqw}
  .v-edu-instructor .name{font-size:11cqw;margin-top:1cqw}
  .v-edu-instructor .role{font-size:5.4cqw;margin-top:2.4cqw;line-height:1.35}
  .v-edu-instructor .stats{gap:2.4cqw;margin-top:4.4cqw}
  .v-edu-instructor .st{padding:2.2cqw 2.6cqw;border-radius:3cqw}
  .v-edu-instructor .st b{font-size:6.4cqw}
  .v-edu-instructor .st span{font-size:3cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-instructor .photo{left:5cqw;top:5cqw;bottom:5cqw;width:43cqw;border-radius:3cqw}
  .v-edu-instructor .top{left:53cqw;right:5cqw;top:7cqw}
  .v-edu-instructor .pill{font-size:2.3cqw;gap:1.1cqw;padding:1.1cqw 2cqw}
  .v-edu-instructor .p2{display:none}
  .v-edu-instructor .pill svg{width:2.8cqw;height:2.8cqw}
  .v-edu-instructor .info{left:53cqw;right:5cqw;top:19cqw}
  .v-edu-instructor .kick{font-size:4.4cqw;gap:1.4cqw}
  .v-edu-instructor .kick svg{width:6cqw;height:5.2cqw;margin-bottom:1.8cqw}
  .v-edu-instructor .name{font-size:8.6cqw}
  .v-edu-instructor .role{font-size:2.4cqw;margin-top:1.8cqw}
  .v-edu-instructor .stats{gap:1.4cqw;margin-top:3.6cqw}
  .v-edu-instructor .st{padding:1.4cqw 1.6cqw;border-radius:2cqw}
  .v-edu-instructor .st b{font-size:4cqw}
  .v-edu-instructor .st span{font-size:1.7cqw}
}
@keyframes edu-instructor-push{0%{opacity:0;transform:scale(1.14)}10%{opacity:1}86%{opacity:1;transform:scale(1)}96%,100%{opacity:0;transform:scale(1)}}
@keyframes edu-instructor-bok{0%,100%{transform:translate(0,0)}50%{transform:translate(3cqw,-4cqw)}}
@keyframes edu-instructor-top{0%,4%{opacity:0;transform:translateY(-3cqw)}14%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
@keyframes edu-instructor-out{0%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes edu-instructor-kick{0%,10%{clip-path:inset(-20% 100% -20% 0)}22%,100%{clip-path:inset(-20% -5% -20% -5%)}}
@keyframes edu-instructor-arrow{0%,16%{stroke-dashoffset:1}28%,100%{stroke-dashoffset:0}}
@keyframes edu-instructor-name{0%,14%{clip-path:inset(0 0 100% 0);transform:translateY(5cqw)}28%,100%{clip-path:inset(-20% -5% -20% -5%);transform:none}}
@keyframes edu-instructor-role{0%,22%{opacity:0;transform:translateY(2cqw)}32%,100%{opacity:1;transform:none}}
@keyframes edu-instructor-c1{0%,27%{opacity:0;transform:translateY(3cqw)}36%,100%{opacity:1;transform:none}}
@keyframes edu-instructor-c2{0%,30%{opacity:0;transform:translateY(3cqw)}39%,100%{opacity:1;transform:none}}
@keyframes edu-instructor-c3{0%,33%{opacity:0;transform:translateY(3cqw)}42%,100%{opacity:1;transform:none}}
`,
};

export const eduChalkboard: SceneSpec = {
  id: "edu-chalkboard",
  slug: "mg-edu-chalkboard",
  kind: "scene",
  name: "Chalkboard Formula",
  job: "titles",
  language: "hand-drawn",
  mechanic: "chalk-stroke-draw",
  energy: "default",
  settle: 3.5,
  colors: { ink: "#F2F0E6", accent: "#F6D77A", secondary: "#F29FB0", paper: "#22362D" },
  fonts: { display: "Caveat", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.accent",
  tags: ["chalkboard", "math", "lesson", "hand-drawn"],
  fields: [
    { key: "formula", label: "Formula", default: "a² + b² = c²", maxChars: 18, role: "headline" },
    { key: "title", label: "Title", default: "Math that finally clicks.", maxChars: 32, role: "headline" },
    { key: "tag", label: "Course tag", default: "Algebra to Calculus · 24 lessons", maxChars: 40, role: "label" },
  ],
  html: `<div class="smudge sm1"></div><div class="smudge sm2"></div>
<div class="content">
<div class="fig"><svg class="draw" viewBox="6 10 38 38"><path class="p tri" pathLength="1" d="M10 16.2L9.9 44.1 36.2 43.9Z"/><path class="p sq" pathLength="1" d="M10 40.4h3.6V44"/><path class="p arr" pathLength="1" d="M30 24.5C33 18 37 15 41.5 14.6M39.2 12.6l2.4 2-2.2 2.4"/></svg><div class="lab la">a</div><div class="lab lb">b</div><div class="lab lc">c</div></div>
<div class="eq" data-21st-slot="formula">{{formula|words}}<svg class="und" viewBox="0 0 100 10" preserveAspectRatio="none"><path pathLength="1" d="M1 6C25 3 55 9 99 4"/></svg></div>
<div class="ttl" data-21st-slot="title">{{title}}</div>
<svg class="star" viewBox="0 0 40 40"><path pathLength="1" d="M20 4l4.5 10.5L36 15.5l-8.6 7.6L30 34.5 20 28.6 10 34.5l2.6-11.4L4 15.5l11.5-1z"/></svg>
<div class="tag" data-21st-slot="tag">${BOOK}<span>{{tag}}</span></div>
<div class="chalk"></div>
</div>
<div class="frame"></div><div class="ledge"></div>`,
  css: `
.v-edu-chalkboard{color:var(--ink);font-family:var(--font-display)}
.v-edu-chalkboard[data-backdrop="on"]{background:radial-gradient(80% 90% at 45% 40%,color-mix(in srgb,var(--paper) 90%,#fff) 0%,var(--paper) 70%,color-mix(in srgb,var(--paper) 80%,#000) 100%)}
.v-edu-chalkboard[data-backdrop="off"] .smudge,.v-edu-chalkboard[data-backdrop="off"] .frame,.v-edu-chalkboard[data-backdrop="off"] .ledge{display:none}
.v-edu-chalkboard .smudge{position:absolute;border-radius:50%;background:color-mix(in srgb,var(--ink) 6%,transparent);filter:blur(3cqw);animation:edu-chalkboard-drift 6s ease-in-out infinite}
.v-edu-chalkboard .sm1{width:40cqw;height:14cqw;left:8cqw;top:6cqw}
.v-edu-chalkboard .sm2{width:34cqw;height:12cqw;left:52cqw;top:34cqw;animation-direction:reverse}
.v-edu-chalkboard .content{position:absolute;inset:0;text-shadow:0 0 .25cqw color-mix(in srgb,var(--ink) 35%,transparent)}
.v-edu-chalkboard .fig{position:absolute;left:6cqw;top:10cqw;width:38cqw;height:38cqw;container-type:inline-size}
.v-edu-chalkboard .draw{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.v-edu-chalkboard .p{fill:none;stroke:var(--ink);stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;opacity:.94}
.v-edu-chalkboard .tri{animation:edu-chalkboard-tri 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .sq{stroke:var(--accent);animation:edu-chalkboard-sq 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .arr{stroke:var(--secondary);stroke-width:.4;animation:edu-chalkboard-arr 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .lab{position:absolute;font-size:11cqw;line-height:1.2;opacity:0;animation:edu-chalkboard-lab 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chalkboard .la{left:-3%;top:40%}
.v-edu-chalkboard .lb{left:40%;top:88%}
.v-edu-chalkboard .lc{left:50%;top:27%}
.v-edu-chalkboard .eq{position:absolute;left:44cqw;top:8.4cqw;font-size:9cqw;line-height:1.2;white-space:nowrap;clip-path:inset(-30% 100% -30% 0);animation:edu-chalkboard-eq 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .eq .w:last-of-type{position:relative;display:inline-block}
.v-edu-chalkboard .eq .w:last-of-type::after{content:"";position:absolute;left:-22%;right:-22%;top:4%;bottom:0;border:.22cqw solid var(--secondary);border-radius:50%;transform:rotate(-4deg);clip-path:inset(0 100% 0 0);animation:edu-chalkboard-ring 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .und{position:absolute;left:0;right:0;bottom:-.2em;height:.32em;width:100%;overflow:visible}
.v-edu-chalkboard .und path{fill:none;stroke:var(--accent);stroke-width:2.2;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:edu-chalkboard-und 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .ttl{position:absolute;left:44cqw;top:25.6cqw;width:38cqw;font-size:6.4cqw;line-height:1.2;color:var(--accent);clip-path:inset(-20% 100% -20% 0);animation:edu-chalkboard-ttl 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .star{position:absolute;left:84cqw;top:28cqw;width:6cqw;height:6cqw;overflow:visible}
.v-edu-chalkboard .star path{fill:none;stroke:var(--accent);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:edu-chalkboard-star 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .tag{position:absolute;left:44cqw;top:44.4cqw;display:flex;align-items:center;gap:1cqw;font-family:var(--font-body);font-size:1.45cqw;line-height:1.25;font-weight:500;color:color-mix(in srgb,var(--ink) 88%,transparent);padding:.9cqw 1.6cqw;border:1px dashed color-mix(in srgb,var(--ink) 45%,transparent);border-radius:99cqw;opacity:0;text-shadow:none;animation:edu-chalkboard-tag 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chalkboard .tag svg{width:2cqw;height:2cqw;color:var(--accent);flex:none}
.v-edu-chalkboard .chalk{position:absolute;left:44cqw;top:16cqw;width:3.4cqw;height:1.1cqw;border-radius:.4cqw;background:linear-gradient(180deg,#fffef8,#d9d6c8);box-shadow:0 .4cqw .8cqw rgba(0,0,0,.4);opacity:0;animation:edu-chalkboard-chalk 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-chalkboard .frame{position:absolute;inset:0;box-shadow:inset 0 0 0 1.3cqw #8a5a35,inset 0 0 0 1.6cqw #5e3a22,inset 0 0 6cqw 1.6cqw rgba(0,0,0,.5);pointer-events:none}
.v-edu-chalkboard .ledge{position:absolute;left:30cqw;right:30cqw;bottom:1.3cqw;height:.9cqw;background:#6b4227;border-radius:.4cqw .4cqw 0 0}
@container (max-aspect-ratio: 4/5){
  .v-edu-chalkboard .sm1{width:80cqw;height:30cqw;left:4cqw;top:20cqw}
  .v-edu-chalkboard .sm2{width:70cqw;height:26cqw;left:24cqw;top:120cqw}
  .v-edu-chalkboard .eq{left:9cqw;top:15cqw;max-width:82cqw;font-size:17cqw;white-space:normal}
  .v-edu-chalkboard .eq .w:last-of-type::after{border-width:.5cqw}
  .v-edu-chalkboard .fig{left:14cqw;top:48cqw;width:66cqw;height:66cqw}
  .v-edu-chalkboard .ttl{left:9cqw;right:9cqw;width:auto;top:117cqw;font-size:12.4cqw}
  .v-edu-chalkboard .star{left:78cqw;top:40cqw;width:12cqw;height:12cqw}
  .v-edu-chalkboard .tag{left:9cqw;right:9cqw;top:auto;bottom:9cqw;font-size:5.4cqw;gap:2.4cqw;padding:2.4cqw 4cqw;border-radius:5cqw}
  .v-edu-chalkboard .tag svg{width:7cqw;height:7cqw}
  .v-edu-chalkboard .chalk{display:none}
  .v-edu-chalkboard .frame{box-shadow:inset 0 0 0 2.6cqw #8a5a35,inset 0 0 0 3.2cqw #5e3a22,inset 0 0 12cqw 3cqw rgba(0,0,0,.5)}
  .v-edu-chalkboard .ledge{left:22cqw;right:22cqw;bottom:2.6cqw;height:1.8cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-chalkboard .eq{left:50cqw;top:12cqw;max-width:44cqw;font-size:10cqw;white-space:normal}
  .v-edu-chalkboard .fig{left:5cqw;top:16cqw;width:46cqw;height:46cqw}
  .v-edu-chalkboard .ttl{left:50cqw;width:44cqw;top:34cqw;font-size:8.4cqw}
  .v-edu-chalkboard .star{left:84cqw;top:64cqw;width:8cqw;height:8cqw}
  .v-edu-chalkboard .tag{left:7cqw;top:auto;bottom:9cqw;font-size:2.4cqw;gap:1.4cqw;padding:1.4cqw 2.6cqw}
  .v-edu-chalkboard .tag svg{width:3cqw;height:3cqw}
  .v-edu-chalkboard .chalk{display:none}
  .v-edu-chalkboard .frame{box-shadow:inset 0 0 0 1.8cqw #8a5a35,inset 0 0 0 2.2cqw #5e3a22,inset 0 0 8cqw 2cqw rgba(0,0,0,.5)}
  .v-edu-chalkboard .ledge{bottom:1.8cqw;height:1.2cqw}
}
@keyframes edu-chalkboard-drift{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(3cqw,1.5cqw) rotate(-4deg)}}
@keyframes edu-chalkboard-tri{0%,4%{stroke-dashoffset:1}20%,100%{stroke-dashoffset:0}}
@keyframes edu-chalkboard-sq{0%,19%{stroke-dashoffset:1}23%,100%{stroke-dashoffset:0}}
@keyframes edu-chalkboard-arr{0%,24%{stroke-dashoffset:1}32%,100%{stroke-dashoffset:0}}
@keyframes edu-chalkboard-lab{0%,18%{opacity:0;transform:scale(.6)}25%,100%{opacity:1;transform:none}}
@keyframes edu-chalkboard-eq{0%,22%{clip-path:inset(-30% 100% -30% 0)}34%,100%{clip-path:inset(-30% -20% -30% -5%)}}
@keyframes edu-chalkboard-und{0%,33%{stroke-dashoffset:1}39%,100%{stroke-dashoffset:0}}
@keyframes edu-chalkboard-ring{0%,36%{clip-path:inset(0 100% 0 0)}44%,100%{clip-path:inset(-10% -10% -10% -10%)}}
@keyframes edu-chalkboard-ttl{0%,38%{clip-path:inset(-20% 100% -20% 0)}49%,100%{clip-path:inset(-20% -5% -20% -5%)}}
@keyframes edu-chalkboard-star{0%,48%{stroke-dashoffset:1}56%,100%{stroke-dashoffset:0}}
@keyframes edu-chalkboard-tag{0%,40%{opacity:0;transform:translateY(1.5cqw)}48%,100%{opacity:1;transform:none}}
@keyframes edu-chalkboard-chalk{0%,20%{opacity:0;transform:translate(0,0) rotate(-30deg)}22%{opacity:1;transform:translate(0,0) rotate(-30deg)}34%{opacity:1;transform:translate(40cqw,-1cqw) rotate(-26deg)}38%{opacity:1;transform:translate(0,17cqw) rotate(-30deg)}49%{opacity:1;transform:translate(36cqw,17cqw) rotate(-26deg)}53%,100%{opacity:0;transform:translate(42cqw,20cqw) rotate(-20deg)}}
`,
};

export const eduFlashcards: SceneSpec = {
  id: "edu-flashcards",
  slug: "mg-edu-flashcards",
  kind: "scene",
  name: "Flashcard Flip",
  job: "product-ui",
  language: "neo-brutal",
  mechanic: "flashcard-drop-flip",
  energy: "punchy",
  settle: 3,
  colors: { ink: "#23305A", accent: "#FF6B5B", secondary: "#2BB3A3", paper: "#FFD84D" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["flashcards", "language", "learning", "flip"],
  fields: [
    { key: "word", label: "Front word", default: "la manzana", maxChars: 18, role: "headline" },
    { key: "answer", label: "Answer", default: "apple", maxChars: 14, role: "headline" },
    { key: "cta", label: "Button", default: "Got it!", maxChars: 12, role: "cta" },
    { key: "brand", label: "Brand", default: "Brightwell Kids", maxChars: 18, role: "label" },
  ],
  html: `<div class="dots"></div>
<div class="top"><div class="pill" data-21st-slot="brand">${BOOK}<span>{{brand}}</span></div><div class="pill dark"><svg viewBox="0 0 24 24"><path class="flame" d="M12 2c1 4 6 6.5 6 12a6 6 0 0 1-12 0c0-3 2-5 3.2-6 0 2 .8 3.2 2 3.2 0-4-1.2-6 .8-9.2z" fill="#ff8a3d"/></svg>7 day streak</div></div>
<div class="stack"><div class="bk bk1"></div><div class="bk bk2"></div>
<div class="fly"><div class="flip">
<div class="face front"><div class="lang">Word of the day</div><div class="word" data-21st-slot="word">{{word}}</div><div class="hint">tap to flip <svg viewBox="0 0 30 24" fill="none"><path d="M3 18c8 2 18-2 22-12M20 6l5 0 0 5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
<div class="face backf"><svg class="apple" viewBox="0 0 100 100"><defs><radialGradient id="edu-flashcards-apple" cx=".35" cy=".35" r=".75"><stop offset="0" stop-color="#ff8a6e"/><stop offset=".6" stop-color="#f0473f"/><stop offset="1" stop-color="#c22f35"/></radialGradient></defs><path d="M50 30c-6-6-18-8-27-2-11 8-11 26-4 40 6 12 14 20 22 20 4 0 6-2 9-2s5 2 9 2c8 0 16-8 22-20 7-14 7-32-4-40-9-6-21-4-27 2z" fill="url(#edu-flashcards-apple)"/><path d="M50 31c0-8 2-14 6-19" stroke="#6b3e1f" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M55 21c6-10 18-12 25-8-4 8-15 12-25 8z" fill="#3fb26b"/><ellipse cx="32" cy="48" rx="5" ry="11" fill="#fff" opacity=".35" transform="rotate(20 32 48)"/></svg><div class="word" data-21st-slot="answer">{{answer}}</div><div class="ipa">noun · say it out loud</div></div>
</div></div>
<div class="tap"></div>
</div>
<div class="btns"><div class="btn">Again</div><div class="btn go" data-21st-slot="cta">{{cta}}</div></div>
<div class="xp">+10 XP</div>
<span class="sp sp1">${STAR4}</span><span class="sp sp2">${STAR4}</span><span class="sp sp3">${STAR4}</span>`,
  css: `
.v-edu-flashcards{color:var(--ink);font-family:var(--font-display)}
.v-edu-flashcards[data-backdrop="on"]{background:var(--paper)}
.v-edu-flashcards .dots{position:absolute;inset:0;background:radial-gradient(circle,color-mix(in srgb,var(--paper) 86%,var(--ink)) 13%,transparent 14%) 0 0/4cqw 4cqw}
.v-edu-flashcards[data-backdrop="off"] .dots{display:none}
.v-edu-flashcards .top{position:absolute;left:5cqw;right:5cqw;top:3.4cqw;display:flex;justify-content:space-between;align-items:center}
.v-edu-flashcards .pill{display:flex;align-items:center;gap:.8cqw;padding:.8cqw 1.6cqw;border-radius:99cqw;background:color-mix(in srgb,var(--paper) 14%,#fff);color:#23305a;font-size:1.6cqw;line-height:1.2;font-weight:700;box-shadow:0 .4cqw 0 rgba(35,48,90,.15);white-space:nowrap}
.v-edu-flashcards .pill svg{width:2.1cqw;height:2.1cqw;color:var(--accent);flex:none}
.v-edu-flashcards .pill.dark{background:var(--ink);color:var(--paper);font-size:1.4cqw}
.v-edu-flashcards .flame{transform-box:fill-box;transform-origin:50% 90%;animation:edu-flashcards-flame .9s ease-in-out infinite}
.v-edu-flashcards .stack{position:absolute;left:35cqw;top:8.6cqw;width:30cqw;height:33.3cqw;container-type:size}
.v-edu-flashcards .bk{position:absolute;inset:0;border-radius:7.4cqw;box-shadow:0 3cqw 0 rgba(35,48,90,.12)}
.v-edu-flashcards .bk1{background:var(--secondary);animation:edu-flashcards-bk1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-flashcards .bk2{background:var(--accent);animation:edu-flashcards-bk2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-flashcards .fly{position:absolute;inset:0;perspective:400cqw;animation:edu-flashcards-fly 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-flashcards .flip{position:absolute;inset:0;transform-style:preserve-3d;animation:edu-flashcards-flip 6s cubic-bezier(.3,.7,.3,1) infinite}
.v-edu-flashcards .face{position:absolute;inset:0;border-radius:7.4cqw;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#23305a;box-shadow:0 3cqw 0 rgba(35,48,90,.18),0 7.4cqw 13cqw rgba(35,48,90,.22)}
.v-edu-flashcards .front{background:color-mix(in srgb,var(--paper) 8%,#fff)}
.v-edu-flashcards .backf{background:color-mix(in srgb,var(--paper) 16%,#fff);transform:rotateY(180deg)}
.v-edu-flashcards .lang{position:absolute;top:7.4cqw;font-family:var(--font-body);font-size:4.8cqw;font-weight:600;color:color-mix(in srgb,var(--secondary) 70%,#000);background:color-mix(in srgb,var(--secondary) 18%,#fff);padding:1.8cqw 4.4cqw;border-radius:99cqw}
.v-edu-flashcards .word{font-size:11.4cqw;font-weight:800;letter-spacing:-.02em;line-height:1.2;max-width:84cqw}
.v-edu-flashcards .hint{position:absolute;bottom:9.3cqw;font-family:var(--font-body);font-style:italic;font-weight:600;font-size:5.6cqw;color:color-mix(in srgb,var(--accent) 80%,#000);display:flex;align-items:center;gap:1.8cqw}
.v-edu-flashcards .hint svg{width:9.3cqw;height:7.4cqw}
.v-edu-flashcards .apple{width:40cqw;height:40cqw;animation:edu-flashcards-bob 2s ease-in-out infinite}
.v-edu-flashcards .backf .word{font-size:15cqw;margin-top:1cqw}
.v-edu-flashcards .ipa{font-family:var(--font-body);font-size:5cqw;color:#6b7394;margin-top:1.4cqw}
.v-edu-flashcards .tap{position:absolute;left:50%;top:50%;width:22cqw;height:22cqw;margin:-11cqw 0 0 -11cqw;border-radius:50%;background:rgba(35,48,90,.25);opacity:0;animation:edu-flashcards-tap 6s ease-out infinite}
.v-edu-flashcards .btns{position:absolute;left:35cqw;width:30cqw;top:45.2cqw;height:5.2cqw;display:flex;gap:1.6cqw}
.v-edu-flashcards .btn{flex:1;border-radius:99cqw;display:flex;align-items:center;justify-content:center;font-size:1.9cqw;line-height:1.2;font-weight:700;background:color-mix(in srgb,var(--paper) 14%,#fff);color:#23305a;box-shadow:0 .5cqw 0 rgba(35,48,90,.18);white-space:nowrap}
.v-edu-flashcards .btn.go{background:var(--ink);color:var(--paper);box-shadow:0 .5cqw 0 color-mix(in srgb,var(--ink) 60%,#000);animation:edu-flashcards-press 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-flashcards .xp{position:absolute;left:62cqw;top:40cqw;font-size:2cqw;font-weight:800;color:var(--ink);opacity:0;animation:edu-flashcards-xp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-flashcards .sp{position:absolute;width:1.9cqw;height:1.9cqw;color:var(--accent);opacity:0;animation:edu-flashcards-sp 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-flashcards .sp svg{width:100%;height:100%;display:block}
.v-edu-flashcards .sp1{left:67cqw;top:43cqw}
.v-edu-flashcards .sp2{left:60cqw;top:44cqw;width:1.3cqw;height:1.3cqw}
.v-edu-flashcards .sp3{left:66cqw;top:50cqw;width:1.4cqw;height:1.4cqw}
@container (max-aspect-ratio: 4/5){
  .v-edu-flashcards .dots{background-size:8cqw 8cqw}
  .v-edu-flashcards .top{left:7cqw;right:7cqw;top:7cqw;flex-wrap:wrap;row-gap:2.4cqw}
  .v-edu-flashcards .pill{font-size:5.4cqw;gap:2cqw;padding:2cqw 4cqw;box-shadow:0 1cqw 0 rgba(35,48,90,.15)}
  .v-edu-flashcards .pill svg{width:6cqw;height:6cqw}
  .v-edu-flashcards .pill.dark{font-size:4cqw}
  .v-edu-flashcards .stack{left:12cqw;width:76cqw;top:36cqw;height:84.4cqw}
  .v-edu-flashcards .btns{left:8cqw;width:84cqw;top:140cqw;height:15cqw;gap:4cqw}
  .v-edu-flashcards .btn{font-size:5.6cqw;box-shadow:0 1.2cqw 0 rgba(35,48,90,.18)}
  .v-edu-flashcards .btn.go{box-shadow:0 1.2cqw 0 color-mix(in srgb,var(--ink) 60%,#000)}
  .v-edu-flashcards .xp{left:64cqw;top:128cqw;font-size:5cqw}
  .v-edu-flashcards .sp1{left:88cqw;top:132cqw;width:5cqw;height:5cqw}
  .v-edu-flashcards .sp2{left:56cqw;top:136cqw;width:3.4cqw;height:3.4cqw}
  .v-edu-flashcards .sp3{left:84cqw;top:158cqw;width:3.6cqw;height:3.6cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-flashcards .dots{background-size:6cqw 6cqw}
  .v-edu-flashcards .top{left:6cqw;right:6cqw;top:5.4cqw}
  .v-edu-flashcards .pill{font-size:3cqw;gap:1.4cqw;padding:1.5cqw 3cqw;box-shadow:0 .8cqw 0 rgba(35,48,90,.15)}
  .v-edu-flashcards .pill svg{width:4cqw;height:4cqw}
  .v-edu-flashcards .pill.dark{font-size:2.6cqw}
  .v-edu-flashcards .stack{left:23cqw;width:54cqw;top:17cqw;height:60cqw}
  .v-edu-flashcards .btns{left:14cqw;width:72cqw;top:84cqw;height:9cqw;gap:3cqw}
  .v-edu-flashcards .btn{font-size:3.6cqw;box-shadow:0 .9cqw 0 rgba(35,48,90,.18)}
  .v-edu-flashcards .btn.go{box-shadow:0 .9cqw 0 color-mix(in srgb,var(--ink) 60%,#000)}
  .v-edu-flashcards .xp{left:62cqw;top:76cqw;font-size:3.6cqw}
  .v-edu-flashcards .sp1{left:83cqw;top:80cqw;width:3.4cqw;height:3.4cqw}
  .v-edu-flashcards .sp2{left:56cqw;top:81cqw;width:2.4cqw;height:2.4cqw}
  .v-edu-flashcards .sp3{left:80cqw;top:93cqw;width:2.6cqw;height:2.6cqw}
}
@keyframes edu-flashcards-flame{0%,100%{transform:scale(1) rotate(-3deg)}50%{transform:scale(1.12,.92) rotate(3deg)}}
@keyframes edu-flashcards-bk1{0%,74%{transform:translate(-3.7cqw,1.85cqw) rotate(-7deg)}88%{transform:translate(-1.85cqw,-.9cqw) rotate(-4deg)}100%{transform:translate(-3.7cqw,1.85cqw) rotate(-7deg)}}
@keyframes edu-flashcards-bk2{0%,74%{transform:translate(3.7cqw,.9cqw) rotate(6deg)}88%{transform:translate(1.85cqw,-1.85cqw) rotate(3deg)}100%{transform:translate(3.7cqw,.9cqw) rotate(6deg)}}
@keyframes edu-flashcards-fly{0%{opacity:0;transform:translateY(-48cqw) rotate(-8deg)}10%{opacity:1;transform:translateY(2.8cqw) rotate(1deg)}14%,74%{opacity:1;transform:none}86%{opacity:1;transform:translate(139cqw,-11cqw) rotate(24deg)}87%,100%{opacity:0;transform:translateY(-48cqw) rotate(-8deg)}}
@keyframes edu-flashcards-flip{0%,22%{transform:rotateY(0)}34%{transform:rotateY(192deg)}39%,86%{transform:rotateY(180deg)}87%,100%{transform:rotateY(0)}}
@keyframes edu-flashcards-bob{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-2.2cqw) rotate(3deg)}}
@keyframes edu-flashcards-tap{0%,16%{opacity:0;transform:scale(.3)}19%{opacity:.8;transform:scale(.8)}27%,100%{opacity:0;transform:scale(2.2)}}
@keyframes edu-flashcards-press{0%,69%{transform:none}72%{transform:translateY(.4cqw) scale(.94)}76%,100%{transform:none}}
@keyframes edu-flashcards-xp{0%,71%{opacity:0;transform:translateY(2cqw) scale(.8)}75%{opacity:1;transform:translateY(-2cqw) scale(1.12)}86%{opacity:1;transform:translateY(-5cqw) scale(1)}93%,100%{opacity:0;transform:translateY(-7cqw) scale(1)}}
@keyframes edu-flashcards-sp{0%,71%{opacity:0;transform:scale(0) rotate(0)}76%{opacity:1;transform:scale(1.2) rotate(60deg)}88%,100%{opacity:0;transform:scale(.4) rotate(140deg)}}
`,
};

export const eduChapters: SceneSpec = {
  id: "edu-chapters",
  slug: "mg-edu-chapters",
  kind: "scene",
  name: "Lesson Chapter Player",
  job: "product-ui",
  language: "glass",
  mechanic: "chapter-playhead-highlight",
  energy: "calm",
  settle: 3,
  colors: { ink: "#1D1B38", accent: "#7C5CFF", secondary: "#FF6BB5", paper: "#EEE8FA" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["video", "chapters", "lesson", "player"],
  fields: [
    { key: "title", label: "Lesson title", default: "Color that works", maxChars: 26, role: "headline" },
    { key: "chapter", label: "Current chapter", default: "Building a palette", maxChars: 24, role: "label" },
    { key: "kicker", label: "Kicker", default: "Lesson 4 of 12", maxChars: 20, role: "kicker" },
    { key: "brand", label: "Brand line", default: "Brightwell · Visual Design Track", maxChars: 36, role: "label" },
  ],
  html: `<div class="orb or1"></div><div class="orb or2"></div>
<div class="player">
<div class="video">
<div class="slide"><div class="sl-t">Color, step by step</div><div class="sw"><i style="background:#ff6b5b"></i><i style="background:#ffb36b"></i><i style="background:#2bb3a3"></i><i style="background:#3c3a8f"></i></div><div class="bars"><i></i><i></i></div></div>
<svg class="teach" viewBox="0 0 100 110" preserveAspectRatio="xMidYMax meet"><defs><linearGradient id="edu-chapters-skin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd2b0"/><stop offset="1" stop-color="#d98b7c"/></linearGradient><linearGradient id="edu-chapters-top" x1="0" y1="0" x2="0" y2="1"><stop class="t1" offset="0"/><stop class="t2" offset="1"/></linearGradient></defs><path d="M10 110C12 80 30 66 52 66s40 14 42 44z" fill="url(#edu-chapters-top)"/><path d="M45 54h14v14H45z" fill="#c97d70"/><ellipse cx="52" cy="38" rx="15" ry="18" fill="url(#edu-chapters-skin)"/><path d="M36 42c-4-18 6-26 17-26 13 0 19 9 17 22-4-6-10-10-18-11-6 4-11 9-16 15z" fill="#2a1f40"/></svg>
<div class="toast tt2"><i></i>Chapter 2 <span>Contrast and hierarchy</span></div>
<div class="toast tt3"><i></i>Chapter 3 <span>{{chapter}}</span></div>
<div class="toast tt4"><i></i>Chapter 4 <span>Practice</span></div>
<div class="sub">pick one hue, then push its lightness</div>
</div>
<div class="ctrl"><svg viewBox="0 0 24 24"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg><span class="time">08:24 / 18:40</span><div class="track"><div class="fill"></div><i class="gap" style="left:12%"></i><i class="gap" style="left:41%"></i><i class="gap" style="left:77%"></i><div class="ph"><div class="dot"></div></div></div><svg viewBox="0 0 24 24" fill="none"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
</div>
<div class="side"><div class="head"><div class="lh" data-21st-slot="kicker">{{kicker}}</div><div class="lt" data-21st-slot="title">{{title}}</div></div>
<div class="list">
<div class="rows"><div class="hl"></div>
<div class="r"><span class="n">01<span class="ck ck1">${CHECK}</span></span><div><div class="rt">Why color matters</div><div class="rd">2:10</div></div></div>
<div class="r"><span class="n">02<span class="ck ck2">${CHECK}</span></span><div><div class="rt">Contrast and hierarchy</div><div class="rd">5:30</div></div></div>
<div class="r"><span class="n">03<span class="ck ck3">${CHECK}</span></span><div><div class="rt" data-21st-slot="chapter">{{chapter}}</div><div class="rd">6:45</div></div></div>
<div class="r"><span class="n">04</span><div><div class="rt">Practice: recolor a UI</div><div class="rd">4:15</div></div></div>
</div>
<div class="next"><div class="thumb"></div><div><div class="rd">Up next</div><div class="rt">Lesson 5 · Type pairing</div></div></div>
</div></div>
<div class="foot" data-21st-slot="brand">${BOOK}<span>{{brand}}</span></div>`,
  css: `
.v-edu-chapters{color:var(--ink);font-family:var(--font-body)}
.v-edu-chapters[data-backdrop="on"]{background:linear-gradient(135deg,color-mix(in srgb,var(--paper) 88%,var(--accent)) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 90%,var(--secondary)) 100%)}
.v-edu-chapters[data-backdrop="off"] .orb{display:none}
.v-edu-chapters .orb{position:absolute;border-radius:50%;filter:blur(5cqw);animation:edu-chapters-orb 6s ease-in-out infinite}
.v-edu-chapters .or1{width:30cqw;height:30cqw;left:-8cqw;top:30cqw;background:color-mix(in srgb,var(--accent) 40%,transparent)}
.v-edu-chapters .or2{width:26cqw;height:26cqw;right:-6cqw;top:-8cqw;background:color-mix(in srgb,var(--secondary) 35%,transparent);animation-direction:reverse}
.v-edu-chapters .player{position:absolute;left:5cqw;top:6cqw;width:60cqw;box-sizing:border-box;container-type:inline-size;background:color-mix(in srgb,var(--paper) 88%,#fff);border:1px solid color-mix(in srgb,var(--paper) 60%,#fff);border-radius:1.8cqw;padding:1cqw;box-shadow:0 3cqw 6cqw -2cqw rgba(60,40,120,.35);animation:edu-chapters-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .video{position:relative;aspect-ratio:58/32.6;border-radius:3cqw;overflow:hidden;container-type:size;background:radial-gradient(60% 80% at 78% 50%,color-mix(in srgb,var(--accent) 70%,transparent) 0%,transparent 70%),linear-gradient(135deg,#17163a,color-mix(in srgb,var(--accent) 30%,#17163a))}
.v-edu-chapters .slide{position:absolute;left:5.2cqw;top:9.5cqw;width:46.6cqw;height:32.8cqw;box-sizing:border-box;padding:3.45cqw;background:#fbfaff;color:#1d1b38;border-radius:1.55cqw;box-shadow:0 2.4cqw 5.2cqw rgba(0,0,0,.35)}
.v-edu-chapters .sl-t{font-family:var(--font-display);font-size:4.5cqw;line-height:1.1}
.v-edu-chapters .sw{display:flex;gap:1.72cqw;margin-top:3.45cqw}
.v-edu-chapters .sw i{width:7.24cqw;height:7.24cqw;border-radius:50%;animation:edu-chapters-sw 2s ease-in-out infinite}
.v-edu-chapters .sw i:nth-child(2){animation-duration:2.4s}
.v-edu-chapters .sw i:nth-child(3){animation-duration:1.8s;animation-direction:reverse}
.v-edu-chapters .sw i:nth-child(4){animation-duration:2.2s}
.v-edu-chapters .bars{margin-top:3.45cqw;display:flex;flex-direction:column;gap:1.38cqw}
.v-edu-chapters .bars i{height:1.38cqw;border-radius:.7cqw;background:#e4e0f5}
.v-edu-chapters .bars i:nth-child(2){width:70%}
.v-edu-chapters .teach{position:absolute;right:1.7cqw;bottom:0;width:41.4cqw;height:83%;transform-origin:50% 100%;animation:edu-chapters-teach 3s ease-in-out infinite}
.v-edu-chapters .t1{stop-color:var(--secondary)}
.v-edu-chapters .t2{stop-color:var(--accent)}
.v-edu-chapters .toast{position:absolute;left:3.45cqw;top:3.45cqw;display:flex;align-items:center;gap:1.55cqw;padding:1.4cqw 2.4cqw;border-radius:99cqw;background:rgba(15,14,40,.62);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:2.3cqw;font-weight:600;opacity:0;white-space:nowrap}
.v-edu-chapters .toast i{width:1.55cqw;height:1.55cqw;border-radius:50%;background:var(--secondary)}
.v-edu-chapters .toast span{color:rgba(255,255,255,.65);font-weight:500}
.v-edu-chapters .tt2{animation:edu-chapters-tt2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .tt3{animation:edu-chapters-tt3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .tt4{animation:edu-chapters-tt4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .sub{position:absolute;left:5.2cqw;bottom:3.8cqw;font-size:2.33cqw;color:#fff;background:rgba(0,0,0,.55);padding:.86cqw 1.9cqw;border-radius:.86cqw}
.v-edu-chapters .ctrl{display:flex;align-items:center;gap:2.3cqw;padding:2cqw 1.33cqw .5cqw}
.v-edu-chapters .ctrl svg{width:3.33cqw;height:3.33cqw;color:var(--ink);flex:none}
.v-edu-chapters .time{font-family:var(--font-mono);font-size:1.83cqw;color:color-mix(in srgb,var(--ink) 65%,transparent);white-space:nowrap}
.v-edu-chapters .track{position:relative;flex:1;height:1.33cqw;border-radius:.7cqw;background:color-mix(in srgb,var(--ink) 12%,transparent)}
.v-edu-chapters .fill{position:absolute;inset:0;border-radius:.7cqw;background:linear-gradient(90deg,var(--accent),var(--secondary));transform-origin:left;animation:edu-chapters-fill 6s linear infinite}
.v-edu-chapters .gap{position:absolute;top:-.2cqw;bottom:-.2cqw;width:.75cqw;background:color-mix(in srgb,var(--paper) 88%,#fff)}
.v-edu-chapters .ph{position:absolute;inset:0;animation:edu-chapters-ph 6s linear infinite}
.v-edu-chapters .dot{position:absolute;left:-1.5cqw;top:-.83cqw;width:3cqw;height:3cqw;border-radius:50%;background:#fff;border:.58cqw solid var(--accent);box-sizing:border-box;box-shadow:0 .6cqw 1.6cqw color-mix(in srgb,var(--accent) 50%,transparent)}
.v-edu-chapters .side{position:absolute;left:68cqw;top:6cqw;width:27cqw;display:flex;flex-direction:column;gap:1.7cqw}
.v-edu-chapters .head{position:relative;animation:edu-chapters-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .lh{font-size:1.25cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 62%,transparent);font-weight:600}
.v-edu-chapters .lt{font-family:var(--font-display);font-size:3.2cqw;line-height:1.2;margin-top:.2cqw}
.v-edu-chapters .list{position:relative;--rh:6cqw;animation:edu-chapters-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .rows{position:relative}
.v-edu-chapters .hl{position:absolute;left:0;right:0;top:0;height:var(--rh);border-radius:1.1cqw;background:color-mix(in srgb,var(--paper) 86%,#fff);box-shadow:0 1cqw 2.4cqw -.8cqw rgba(60,40,120,.35);animation:edu-chapters-hl 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-chapters .r{position:relative;height:var(--rh);display:flex;align-items:center;gap:1.2cqw;padding:0 1.2cqw}
.v-edu-chapters .n{position:relative;width:2.6cqw;height:2.6cqw;border-radius:50%;border:1px solid color-mix(in srgb,var(--ink) 20%,transparent);display:grid;place-items:center;font-family:var(--font-mono);font-size:1cqw;color:color-mix(in srgb,var(--ink) 65%,transparent);flex:none}
.v-edu-chapters .ck{position:absolute;inset:-1px;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;transform:scale(0)}
.v-edu-chapters .ck svg{width:50%;height:50%}
.v-edu-chapters .ck1{animation:edu-chapters-ck1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .ck2{animation:edu-chapters-ck2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .ck3{animation:edu-chapters-ck3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .rt{font-size:1.4cqw;font-weight:600;line-height:1.2}
.v-edu-chapters .rd{font-family:var(--font-mono);font-size:1cqw;color:color-mix(in srgb,var(--ink) 55%,transparent);margin-top:.2cqw}
.v-edu-chapters .next{margin-top:1.6cqw;display:flex;gap:1.2cqw;align-items:center;padding:1cqw;border-radius:1.1cqw;border:1px dashed color-mix(in srgb,var(--ink) 20%,transparent)}
.v-edu-chapters .thumb{width:5.4cqw;height:3.6cqw;border-radius:.6cqw;background:linear-gradient(135deg,var(--secondary),var(--accent));flex:none}
.v-edu-chapters .next .rt{font-size:1.2cqw}
.v-edu-chapters .foot{position:absolute;left:5cqw;top:48.6cqw;display:flex;align-items:center;gap:1cqw;font-size:1.45cqw;line-height:1.2;font-weight:600;animation:edu-chapters-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-chapters .foot svg{width:2.2cqw;height:2.2cqw;color:var(--accent);flex:none}
@container (max-aspect-ratio: 4/5){
  .v-edu-chapters .or1{width:60cqw;height:60cqw;top:110cqw}
  .v-edu-chapters .or2{width:52cqw;height:52cqw}
  .v-edu-chapters .side{display:contents}
  .v-edu-chapters .head{position:absolute;left:8cqw;right:8cqw;width:auto;top:8cqw}
  .v-edu-chapters .lh{font-size:5.4cqw}
  .v-edu-chapters .lt{font-size:8.8cqw;margin-top:.6cqw}
  .v-edu-chapters .player{left:6cqw;width:88cqw;top:36cqw;border-radius:4cqw;padding:2cqw}
  .v-edu-chapters .list{position:absolute;left:7cqw;right:7cqw;width:auto;top:100cqw;--rh:12.4cqw}
  .v-edu-chapters .hl{border-radius:3cqw}
  .v-edu-chapters .r{gap:3.4cqw;padding:0 3cqw}
  .v-edu-chapters .n{width:7cqw;height:7cqw;font-size:2.8cqw}
  .v-edu-chapters .rt{font-size:5.4cqw}
  .v-edu-chapters .rd{font-size:3cqw;margin-top:.4cqw}
  .v-edu-chapters .next{display:none}
  .v-edu-chapters .foot{left:8cqw;right:8cqw;top:auto;bottom:9cqw;font-size:5.4cqw;gap:2.4cqw}
  .v-edu-chapters .foot svg{width:6.4cqw;height:6.4cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-chapters .side{display:contents}
  .v-edu-chapters .head{position:absolute;left:15cqw;width:52cqw;top:4.6cqw}
  .v-edu-chapters .lh{font-size:2cqw}
  .v-edu-chapters .lt{font-size:4.8cqw;margin-top:1cqw}
  .v-edu-chapters .player{left:15cqw;width:70cqw;top:17cqw;border-radius:2.4cqw;padding:1.4cqw}
  .v-edu-chapters .list{position:absolute;left:15cqw;width:70cqw;top:67cqw;--rh:6.6cqw}
  .v-edu-chapters .hl{border-radius:1.6cqw}
  .v-edu-chapters .r{gap:1.8cqw;padding:0 1.8cqw}
  .v-edu-chapters .n{width:3.8cqw;height:3.8cqw;font-size:1.5cqw}
  .v-edu-chapters .rt{font-size:2.3cqw}
  .v-edu-chapters .rd{font-size:1.5cqw}
  .v-edu-chapters .r>div{display:flex;align-items:baseline;justify-content:space-between;flex:1;gap:2cqw}
  .v-edu-chapters .next{display:none}
  .v-edu-chapters .foot{left:auto;right:15cqw;top:4.4cqw;font-size:2cqw;gap:1.2cqw}
  .v-edu-chapters .foot svg{width:2.8cqw;height:2.8cqw}
}
@keyframes edu-chapters-orb{0%,100%{transform:translate(0,0)}50%{transform:translate(4cqw,-3cqw)}}
@keyframes edu-chapters-in{0%{opacity:0;transform:translateY(3cqw) scale(.97)}9%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes edu-chapters-in2{0%,3%{opacity:0;transform:translateX(3cqw)}12%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes edu-chapters-sw{0%,100%{transform:scale(1)}50%{transform:scale(.86)}}
@keyframes edu-chapters-teach{0%,100%{transform:rotate(-1.2deg)}50%{transform:rotate(1.2deg) translateY(-.7cqw)}}
@keyframes edu-chapters-tt2{0%,8%{opacity:0;transform:translateY(-2.6cqw)}11%,32%{opacity:1;transform:none}35%,100%{opacity:0;transform:translateY(-2.6cqw)}}
@keyframes edu-chapters-tt3{0%,36%{opacity:0;transform:translateY(-2.6cqw)}39%,70%{opacity:1;transform:none}73%,100%{opacity:0;transform:translateY(-2.6cqw)}}
@keyframes edu-chapters-tt4{0%,73%{opacity:0;transform:translateY(-2.6cqw)}76%,88%{opacity:1;transform:none}91%,100%{opacity:0;transform:translateY(-2.6cqw)}}
@keyframes edu-chapters-fill{0%{transform:scaleX(.05)}86%{transform:scaleX(.9)}96%,100%{transform:scaleX(.05)}}
@keyframes edu-chapters-ph{0%{transform:translateX(5%)}86%{transform:translateX(90%)}96%,100%{transform:translateX(5%)}}
@keyframes edu-chapters-hl{0%,6%{transform:translateY(0)}9%,35%{transform:translateY(var(--rh))}38%,72%{transform:translateY(calc(var(--rh) * 2))}75%,88%{transform:translateY(calc(var(--rh) * 3))}95%,100%{transform:translateY(0)}}
@keyframes edu-chapters-ck1{0%,7%{transform:scale(0)}10%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
@keyframes edu-chapters-ck2{0%,36%{transform:scale(0)}39%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
@keyframes edu-chapters-ck3{0%,73%{transform:scale(0)}76%,90%{transform:scale(1)}94%,100%{transform:scale(0)}}
`,
};

export const eduTestimonials: SceneSpec = {
  id: "edu-testimonials",
  slug: "mg-edu-testimonials",
  kind: "scene",
  name: "Sticky Note Reviews",
  job: "testimonials",
  language: "hand-drawn",
  mechanic: "sticky-note-drop",
  energy: "default",
  settle: 2.9,
  colors: { ink: "#22314F", accent: "#FF6B5B", secondary: "#F4B324", paper: "#FDFCF6" },
  fonts: { display: "Caveat", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.accent",
  tags: ["reviews", "testimonials", "notebook", "students"],
  fields: [
    { key: "head", label: "Heading", default: "What students say", maxChars: 26, role: "headline" },
    { key: "quote", label: "Featured quote", default: "The weekly feedback calls alone were worth the price.", maxChars: 70, role: "body" },
    { key: "score", label: "Rating", default: "4.9", maxChars: 4, role: "value" },
    { key: "cta", label: "Button", default: "Join cohort 15", maxChars: 22, role: "cta" },
  ],
  html: `<div class="paper"></div><div class="hole h1"></div><div class="hole h2"></div><div class="hole h3"></div>
<div class="head"><span data-21st-slot="head">{{head}}</span><svg viewBox="0 0 100 10" preserveAspectRatio="none"><path pathLength="1" d="M1 6C30 2 60 9 99 3"/></svg></div>
<div class="rate"><div class="score" data-21st-slot="score">{{score}}</div><div><div class="stars">${STAR5}${STAR5}${STAR5}${STAR5}${STAR5}<div class="gold">${STAR5}${STAR5}${STAR5}${STAR5}${STAR5}</div></div><div class="rv">from 2,140 reviews</div></div></div>
<div class="notes">
<div class="note n1"><div class="tape"></div><div class="qt">I went from zero to my first freelance client in eight weeks.</div><div class="who"><div class="av a1"></div><div><b>Priya N.</b>UX cohort 9</div></div></div>
<div class="note n2"><div class="tape"></div><div class="qt" data-21st-slot="quote">{{quote|words}}</div><div class="who"><div class="av a2"></div><div><b>Tomas R.</b>Product design</div></div></div>
<div class="note n3"><div class="tape"></div><div class="qt">Finally a course I actually finished. Twice, honestly.</div><div class="who"><div class="av a3"></div><div><b>Hana K.</b>Data cohort 4</div></div></div>
</div>
<div class="bot"><div class="cta" data-21st-slot="cta">{{cta}}${ARROW}</div><div class="br">${BOOK}Brightwell</div></div>`,
  css: `
.v-edu-testimonials{color:var(--ink);font-family:var(--font-display)}
.v-edu-testimonials[data-backdrop="on"]{background:var(--paper)}
.v-edu-testimonials[data-backdrop="off"] .paper,.v-edu-testimonials[data-backdrop="off"] .hole{display:none}
.v-edu-testimonials .paper{position:absolute;inset:0;background:linear-gradient(90deg,transparent 9cqw,color-mix(in srgb,var(--accent) 50%,transparent) 9cqw,color-mix(in srgb,var(--accent) 50%,transparent) calc(9cqw + 1px),transparent calc(9cqw + 1px)),repeating-linear-gradient(180deg,transparent 0,transparent 3.9cqw,color-mix(in srgb,var(--ink) 12%,transparent) 3.9cqw,color-mix(in srgb,var(--ink) 12%,transparent) 4cqw)}
.v-edu-testimonials .hole{position:absolute;left:3cqw;width:2.6cqw;height:2.6cqw;border-radius:50%;background:color-mix(in srgb,var(--paper) 88%,var(--ink));box-shadow:inset 0 .3cqw .5cqw rgba(0,0,0,.18)}
.v-edu-testimonials .h1{top:9cqw}.v-edu-testimonials .h2{top:26.8cqw}.v-edu-testimonials .h3{top:44.6cqw}
.v-edu-testimonials .head{position:absolute;left:12cqw;top:3.4cqw;font-size:5.4cqw;font-weight:700;line-height:1.2;animation:edu-testimonials-head 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-testimonials .head svg{position:absolute;left:0;bottom:-.6cqw;width:100%;height:2cqw;overflow:visible}
.v-edu-testimonials .head path{fill:none;stroke:var(--accent);stroke-width:2;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:edu-testimonials-und 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-testimonials .rate{position:absolute;right:6cqw;top:4.6cqw;display:flex;align-items:center;gap:1.2cqw;font-family:var(--font-body);animation:edu-testimonials-head 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-testimonials .score{font-size:4.2cqw;font-weight:800;letter-spacing:-.03em;line-height:1.2}
.v-edu-testimonials .stars{position:relative;display:flex;gap:.3cqw;color:color-mix(in srgb,var(--ink) 15%,transparent)}
.v-edu-testimonials .stars svg{width:2cqw;height:2cqw;flex:none}
.v-edu-testimonials .gold{position:absolute;inset:0;display:flex;gap:.3cqw;color:var(--secondary);clip-path:inset(0 100% 0 0);animation:edu-testimonials-stars 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-testimonials .rv{font-size:1.25cqw;color:color-mix(in srgb,var(--ink) 70%,transparent);margin-top:.4cqw}
.v-edu-testimonials .notes{position:absolute;left:12cqw;right:6cqw;top:16cqw;display:flex;gap:3.5cqw}
.v-edu-testimonials .note{position:relative;flex:1;height:25.5cqw;box-sizing:border-box;padding:2.6cqw 2.4cqw 2.2cqw;display:flex;flex-direction:column;justify-content:space-between;gap:1cqw;color:#22314f;box-shadow:0 .3cqw .4cqw rgba(60,50,20,.12),0 2cqw 3cqw -1cqw rgba(60,50,20,.28)}
.v-edu-testimonials .n1{background:linear-gradient(170deg,color-mix(in srgb,var(--secondary) 34%,#fff),color-mix(in srgb,var(--secondary) 50%,#fff));animation:edu-testimonials-n1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-testimonials .n2{background:linear-gradient(170deg,color-mix(in srgb,var(--accent) 24%,#fff),color-mix(in srgb,var(--accent) 36%,#fff));animation:edu-testimonials-n2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-testimonials .n3{background:linear-gradient(170deg,color-mix(in srgb,#a6e9c8 60%,color-mix(in srgb,var(--paper) 30%,#fff)),color-mix(in srgb,#8fe0b8 70%,color-mix(in srgb,var(--paper) 30%,#fff)));animation:edu-testimonials-n3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-testimonials .tape{position:absolute;top:-1.4cqw;left:50%;width:9cqw;height:2.8cqw;margin-left:-4.5cqw;background:rgba(255,255,255,.6);box-shadow:0 .2cqw .4cqw rgba(0,0,0,.08);transform:rotate(-4deg)}
.v-edu-testimonials .qt{font-size:2.85cqw;line-height:1.2;font-weight:600}
.v-edu-testimonials .n2 .w:nth-last-of-type(-n+3){background:linear-gradient(color-mix(in srgb,var(--accent) 45%,transparent),color-mix(in srgb,var(--accent) 45%,transparent)) no-repeat 0 80%/0% 50%;animation:edu-testimonials-mk 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-testimonials .who{display:flex;align-items:center;gap:1cqw;font-family:var(--font-body);font-size:1.2cqw;color:#3d4a68;line-height:1.25}
.v-edu-testimonials .who b{display:block;color:#22314f}
.v-edu-testimonials .av{width:2.8cqw;height:2.8cqw;border-radius:50%;flex:none}
.v-edu-testimonials .a1{background:linear-gradient(135deg,#ffb48a,#e0607e)}
.v-edu-testimonials .a2{background:linear-gradient(135deg,#9fd3ff,#4a6cf0)}
.v-edu-testimonials .a3{background:linear-gradient(135deg,#b9f0c9,#3a9e6c)}
.v-edu-testimonials .bot{position:absolute;left:12cqw;right:6cqw;top:46.2cqw;display:flex;align-items:center;justify-content:space-between;font-family:var(--font-body);animation:edu-testimonials-bot 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-testimonials .cta{display:flex;align-items:center;gap:1cqw;background:var(--ink);color:var(--paper);font-size:1.6cqw;line-height:1.2;font-weight:600;padding:1.1cqw 2.2cqw;border-radius:99cqw;white-space:nowrap}
.v-edu-testimonials .cta svg{width:1.7cqw;height:1.7cqw;flex:none}
.v-edu-testimonials .br{display:flex;align-items:center;gap:.8cqw;font-size:1.5cqw;font-weight:700}
.v-edu-testimonials .br svg{width:2.2cqw;height:2.2cqw;color:var(--accent)}
@container (max-aspect-ratio: 4/5){
  .v-edu-testimonials .paper{background:linear-gradient(90deg,transparent 7cqw,color-mix(in srgb,var(--accent) 50%,transparent) 7cqw,color-mix(in srgb,var(--accent) 50%,transparent) calc(7cqw + 1px),transparent calc(7cqw + 1px)),repeating-linear-gradient(180deg,transparent 0,transparent 7.9cqw,color-mix(in srgb,var(--ink) 12%,transparent) 7.9cqw,color-mix(in srgb,var(--ink) 12%,transparent) 8cqw)}
  .v-edu-testimonials .hole{left:1.6cqw;width:3.6cqw;height:3.6cqw}
  .v-edu-testimonials .h1{top:30cqw}.v-edu-testimonials .h2{top:88cqw}.v-edu-testimonials .h3{top:146cqw}
  .v-edu-testimonials .head{left:12cqw;right:6cqw;top:9cqw;font-size:12cqw}
  .v-edu-testimonials .head svg{height:4cqw;bottom:-1cqw}
  .v-edu-testimonials .rate{left:12cqw;right:auto;top:30cqw;gap:3cqw}
  .v-edu-testimonials .score{font-size:10cqw}
  .v-edu-testimonials .stars svg{width:5.4cqw;height:5.4cqw}
  .v-edu-testimonials .stars,.v-edu-testimonials .gold{gap:.8cqw}
  .v-edu-testimonials .rv{font-size:3.4cqw;margin-top:1cqw}
  .v-edu-testimonials .notes{left:14cqw;right:8cqw;top:52cqw;flex-direction:column;gap:7cqw}
  .v-edu-testimonials .note{flex:none;height:auto;min-height:38cqw;padding:6cqw 5.4cqw 4.6cqw;gap:3cqw}
  .v-edu-testimonials .n1{display:none}
  .v-edu-testimonials .tape{width:20cqw;height:6cqw;margin-left:-10cqw;top:-3cqw}
  .v-edu-testimonials .qt{font-size:7cqw}
  .v-edu-testimonials .who{font-size:3.4cqw;gap:2.4cqw}
  .v-edu-testimonials .av{width:7.4cqw;height:7.4cqw}
  .v-edu-testimonials .bot{left:12cqw;right:6cqw;top:auto;bottom:8cqw}
  .v-edu-testimonials .cta{font-size:5.6cqw;gap:2.4cqw;padding:3.2cqw 6cqw}
  .v-edu-testimonials .cta svg{width:5.6cqw;height:5.6cqw}
  .v-edu-testimonials .br{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-testimonials .paper{background:linear-gradient(90deg,transparent 9cqw,color-mix(in srgb,var(--accent) 50%,transparent) 9cqw,color-mix(in srgb,var(--accent) 50%,transparent) calc(9cqw + 1px),transparent calc(9cqw + 1px)),repeating-linear-gradient(180deg,transparent 0,transparent 5.9cqw,color-mix(in srgb,var(--ink) 12%,transparent) 5.9cqw,color-mix(in srgb,var(--ink) 12%,transparent) 6cqw)}
  .v-edu-testimonials .hole{width:3cqw;height:3cqw;left:3cqw}
  .v-edu-testimonials .h1{top:16cqw}.v-edu-testimonials .h2{top:48cqw}.v-edu-testimonials .h3{top:80cqw}
  .v-edu-testimonials .head{top:7cqw;font-size:7.6cqw}
  .v-edu-testimonials .head svg{height:2.6cqw}
  .v-edu-testimonials .rate{right:5cqw;top:8cqw}
  .v-edu-testimonials .score{font-size:5.4cqw}
  .v-edu-testimonials .stars svg{width:2.4cqw;height:2.4cqw}
  .v-edu-testimonials .rv{font-size:1.6cqw}
  .v-edu-testimonials .notes{left:13cqw;right:5cqw;top:26cqw;gap:2.4cqw}
  .v-edu-testimonials .note{height:44cqw;padding:3.4cqw 2.4cqw 2.6cqw}
  .v-edu-testimonials .tape{width:10cqw;height:3cqw;margin-left:-5cqw}
  .v-edu-testimonials .qt{font-size:3.7cqw}
  .v-edu-testimonials .who{font-size:1.6cqw;gap:1.2cqw}
  .v-edu-testimonials .av{width:3.6cqw;height:3.6cqw}
  .v-edu-testimonials .bot{left:13cqw;right:5cqw;top:auto;bottom:9cqw}
  .v-edu-testimonials .cta{font-size:2.6cqw;gap:1.4cqw;padding:1.8cqw 3.4cqw}
  .v-edu-testimonials .cta svg{width:2.6cqw;height:2.6cqw}
  .v-edu-testimonials .br{font-size:2.2cqw}
  .v-edu-testimonials .br svg{width:3cqw;height:3cqw}
}
@keyframes edu-testimonials-head{0%{opacity:0;transform:translateY(-2cqw)}10%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes edu-testimonials-und{0%,6%{stroke-dashoffset:1}16%,100%{stroke-dashoffset:0}}
@keyframes edu-testimonials-stars{0%,24%{clip-path:inset(0 100% 0 0)}40%,100%{clip-path:inset(0 2% 0 0)}}
@keyframes edu-testimonials-n1{0%,6%{opacity:0;transform:translateY(-8cqw) rotate(-10deg) scale(1.08)}16%{opacity:1;transform:translateY(.6cqw) rotate(-2.4deg) scale(1)}20%{opacity:1;transform:rotate(-3deg)}55%{transform:rotate(-2.2deg)}86%{opacity:1;transform:rotate(-3deg)}96%,100%{opacity:0;transform:translateY(-4cqw) rotate(-3deg)}}
@keyframes edu-testimonials-n2{0%,14%{opacity:0;transform:translateY(-8cqw) rotate(9deg) scale(1.08)}24%{opacity:1;transform:translateY(.6cqw) rotate(1.4deg) scale(1)}28%{opacity:1;transform:rotate(2deg)}60%{transform:rotate(2.8deg)}86%{opacity:1;transform:rotate(2deg)}96%,100%{opacity:0;transform:translateY(-4cqw) rotate(2deg)}}
@keyframes edu-testimonials-n3{0%,22%{opacity:0;transform:translateY(-8cqw) rotate(-8deg) scale(1.08)}32%{opacity:1;transform:translateY(.6cqw) rotate(-1deg) scale(1)}36%{opacity:1;transform:rotate(-1.5deg)}65%{transform:rotate(-.7deg)}86%{opacity:1;transform:rotate(-1.5deg)}96%,100%{opacity:0;transform:translateY(-4cqw) rotate(-1.5deg)}}
@keyframes edu-testimonials-mk{0%,36%{background-size:0% 50%}46%,100%{background-size:100% 50%}}
@keyframes edu-testimonials-bot{0%,36%{opacity:0;transform:translateY(2cqw)}46%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
`,
};

export const eduCountdown: SceneSpec = {
  id: "edu-countdown",
  slug: "mg-edu-countdown",
  kind: "scene",
  name: "Enrollment Countdown",
  job: "cta",
  language: "pixel-terminal",
  mechanic: "countdown-seat-claim",
  energy: "punchy",
  settle: 3.1,
  colors: { ink: "#E8FFE9", accent: "#3DFF8A", secondary: "#1AA3FF", paper: "#07090C" },
  fonts: { display: "Bricolage Grotesque", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.display",
  tags: ["countdown", "enrollment", "early-bird", "seats"],
  fields: [
    { key: "headline", label: "Headline", default: "Full-stack in 12 weeks.", maxChars: 30, role: "headline" },
    { key: "label", label: "Timer label", default: "Early bird closes in", maxChars: 26, role: "label" },
    { key: "price", label: "Price", default: "$1,190", maxChars: 8, role: "value" },
    { key: "cta", label: "Button", default: "Reserve your seat", maxChars: 22, role: "cta" },
  ],
  html: `<div class="gridbg"></div>
<div class="l">
<div class="cmd">$ enroll <span>--cohort 14</span><i class="caret"></i></div>
<div class="h" data-21st-slot="headline">{{headline|words}}</div>
<div class="sub" data-21st-slot="label">{{label}}</div>
<div class="count">
<div class="box"><div class="dig">02</div><div class="lb">days</div></div><span class="colon">:</span>
<div class="box"><div class="dig">07</div><div class="lb">hours</div></div><span class="colon">:</span>
<div class="box"><div class="dig">14</div><div class="lb">min</div></div><span class="colon">:</span>
<div class="box sec"><div class="dig"><div class="strip"><div>59</div><div>58</div><div>57</div><div>56</div><div>55</div><div>54</div><div>53</div></div></div><div class="lb">sec</div></div>
</div>
<div class="price"><span class="old">$1,490<i></i></span><span class="new" data-21st-slot="price">{{price}}</span><span class="eb">early bird</span></div>
<div class="btn" data-21st-slot="cta">{{cta}}${ARROW}</div>
</div>
<div class="panel">
<div class="ph"><span>cohort_14.seats</span><span class="live"><i></i>live</span></div>
<div class="big"><div class="num"><div>06</div><div>05</div></div><span>seats left of 40</span></div>
<div class="grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="e"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="e"><b></b></i><i></i><i></i><i></i><i></i><i class="e"></i><i></i><i></i><i></i><i class="e"></i><i></i><i></i><i></i><i></i><i class="e"></i><i></i><i></i><i class="e"></i><i></i></div>
<div class="toast"><div class="av"></div><div>maya_k just enrolled <span>· Lisbon</span></div></div>
</div>`,
  css: `
.v-edu-countdown{color:var(--ink);font-family:var(--font-mono)}
.v-edu-countdown[data-backdrop="on"]{background:radial-gradient(60% 70% at 0% 0%,color-mix(in srgb,var(--accent) 16%,transparent),transparent 60%),var(--paper)}
.v-edu-countdown .gridbg{position:absolute;inset:0;background:linear-gradient(color-mix(in srgb,var(--ink) 4%,transparent) 1px,transparent 1px) 0 0/4cqw 4cqw,linear-gradient(90deg,color-mix(in srgb,var(--ink) 4%,transparent) 1px,transparent 1px) 0 0/4cqw 4cqw}
.v-edu-countdown[data-backdrop="off"] .gridbg{display:none}
.v-edu-countdown .l{position:absolute;left:6cqw;top:5cqw;width:48cqw;animation:edu-countdown-in 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-countdown .cmd{font-size:1.45cqw;color:var(--accent);display:flex;align-items:center;gap:.6cqw;white-space:nowrap}
.v-edu-countdown .cmd span{color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-edu-countdown .caret{width:.8cqw;height:1.7cqw;background:var(--accent);animation:edu-countdown-blink 1s steps(1) infinite}
.v-edu-countdown .h{font-family:var(--font-display);font-size:4cqw;font-weight:800;line-height:1.2;letter-spacing:-.02em;margin-top:1.8cqw;max-width:40cqw}
.v-edu-countdown .h .w:nth-last-of-type(-n+2){color:var(--accent)}
.v-edu-countdown .sub{font-size:1.4cqw;line-height:1.2;color:color-mix(in srgb,var(--ink) 62%,transparent);margin-top:1.8cqw}
.v-edu-countdown .count{display:flex;align-items:flex-start;gap:.8cqw;margin-top:1.2cqw;--dh:6cqw}
.v-edu-countdown .box{width:8.6cqw;padding:.9cqw 0 .8cqw;background:linear-gradient(180deg,color-mix(in srgb,var(--paper) 88%,var(--ink)),color-mix(in srgb,var(--paper) 94%,var(--ink)));border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-radius:1cqw;text-align:center;box-shadow:0 1cqw 2cqw rgba(0,0,0,.4)}
.v-edu-countdown .dig{height:var(--dh);overflow:hidden;font-family:var(--font-display);font-size:4.2cqw;font-weight:800;line-height:var(--dh)}
.v-edu-countdown .strip{animation:edu-countdown-sec 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-countdown .strip div{height:var(--dh)}
.v-edu-countdown .box.sec .dig{color:var(--accent)}
.v-edu-countdown .lb{font-size:1cqw;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-edu-countdown .colon{font-family:var(--font-display);font-size:3cqw;color:color-mix(in srgb,var(--accent) 50%,transparent);line-height:7.5cqw}
.v-edu-countdown .price{display:flex;align-items:baseline;gap:1.4cqw;margin-top:2.6cqw}
.v-edu-countdown .old{position:relative;font-family:var(--font-body);font-size:2cqw;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-edu-countdown .old i{position:absolute;left:-.3cqw;right:-.3cqw;top:52%;height:.25cqw;background:#ff5d5d;transform-origin:left;transform:scaleX(0);animation:edu-countdown-strike 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-countdown .new{font-family:var(--font-display);font-size:3.6cqw;font-weight:800;line-height:1.2;color:var(--accent);animation:edu-countdown-new 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-countdown .eb{font-size:1.15cqw;color:var(--ink);background:color-mix(in srgb,var(--accent) 12%,transparent);border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);padding:.4cqw .9cqw;border-radius:.6cqw;animation:edu-countdown-new 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-countdown .btn{position:relative;display:inline-flex;align-items:center;gap:1cqw;margin-top:2.2cqw;background:var(--accent);color:var(--paper);font-family:var(--font-body);font-size:1.7cqw;line-height:1.2;font-weight:700;padding:1.3cqw 2.4cqw;border-radius:.8cqw;white-space:nowrap}
.v-edu-countdown .btn::after{content:"";position:absolute;inset:-.6cqw;border-radius:1.2cqw;box-shadow:0 0 3cqw color-mix(in srgb,var(--accent) 60%,transparent);opacity:.3;animation:edu-countdown-glow 2s ease-in-out infinite}
.v-edu-countdown .btn svg{width:1.8cqw;height:1.8cqw;flex:none}
.v-edu-countdown .panel{position:absolute;left:57cqw;top:7.5cqw;width:37cqw;box-sizing:border-box;padding:2.2cqw 2.4cqw;background:color-mix(in srgb,var(--paper) 90%,var(--ink));border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);border-radius:1.4cqw;box-shadow:0 2cqw 5cqw rgba(0,0,0,.5);--nh:5.2cqw;animation:edu-countdown-in2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-countdown .ph{display:flex;justify-content:space-between;align-items:center;font-size:1.15cqw;color:color-mix(in srgb,var(--ink) 50%,transparent)}
.v-edu-countdown .live{display:flex;align-items:center;gap:.6cqw;color:var(--accent)}
.v-edu-countdown .live i{width:.9cqw;height:.9cqw;border-radius:50%;background:var(--accent);animation:edu-countdown-live 1s ease-in-out infinite}
.v-edu-countdown .big{display:flex;align-items:baseline;gap:1.2cqw;margin-top:1.4cqw}
.v-edu-countdown .num{height:var(--nh);overflow:hidden;font-family:var(--font-display);font-size:4.4cqw;font-weight:800;line-height:var(--nh);color:var(--ink)}
.v-edu-countdown .num div{height:var(--nh);animation:edu-countdown-roll 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-countdown .big span{font-size:1.3cqw;color:color-mix(in srgb,var(--ink) 62%,transparent)}
.v-edu-countdown .grid{display:grid;grid-template-columns:repeat(8,2.6cqw);gap:.9cqw;margin-top:1.6cqw}
.v-edu-countdown .grid i{position:relative;width:2.6cqw;height:2.6cqw;border-radius:.5cqw;background:color-mix(in srgb,var(--accent) 30%,var(--paper));box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 25%,transparent)}
.v-edu-countdown .grid i.e{background:transparent;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--accent) 45%,transparent)}
.v-edu-countdown .grid b{position:absolute;inset:0;border-radius:.5cqw;background:var(--accent);box-shadow:0 0 2cqw color-mix(in srgb,var(--accent) 80%,transparent);transform:scale(0);animation:edu-countdown-take 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-countdown .toast{display:flex;align-items:center;gap:1cqw;margin-top:1.8cqw;padding:1cqw 1.2cqw;border-radius:.9cqw;background:color-mix(in srgb,var(--paper) 82%,var(--ink));border:1px solid color-mix(in srgb,var(--ink) 12%,transparent);font-family:var(--font-body);font-size:1.25cqw;animation:edu-countdown-toast 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-countdown .toast .av{width:2.4cqw;height:2.4cqw;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--secondary));flex:none}
.v-edu-countdown .toast span{color:color-mix(in srgb,var(--ink) 50%,transparent)}
@container (max-aspect-ratio: 4/5){
  .v-edu-countdown .gridbg{background-size:8cqw 8cqw}
  .v-edu-countdown .l{left:8cqw;right:8cqw;width:auto;top:8cqw}
  .v-edu-countdown .cmd{font-size:3.6cqw;gap:1.4cqw}
  .v-edu-countdown .caret{width:2cqw;height:4.2cqw}
  .v-edu-countdown .h{font-size:11.4cqw;margin-top:3cqw;max-width:none}
  .v-edu-countdown .sub{font-size:5.4cqw;margin-top:4cqw}
  .v-edu-countdown .count{gap:1.4cqw;margin-top:2.6cqw;--dh:12cqw}
  .v-edu-countdown .box{width:18cqw;padding:2cqw 0 1.6cqw;border-radius:2.4cqw}
  .v-edu-countdown .dig{font-size:8.4cqw}
  .v-edu-countdown .lb{font-size:2.8cqw}
  .v-edu-countdown .colon{font-size:6cqw;line-height:15cqw}
  .v-edu-countdown .price{gap:3cqw;margin-top:5cqw}
  .v-edu-countdown .old{font-size:5cqw}
  .v-edu-countdown .old i{height:.6cqw}
  .v-edu-countdown .new{font-size:10cqw}
  .v-edu-countdown .eb{font-size:3.2cqw;padding:1cqw 2cqw;border-radius:1.4cqw}
  .v-edu-countdown .btn{position:absolute;left:0;right:0;top:147cqw;margin:0;justify-content:center;font-size:5.6cqw;gap:2.4cqw;padding:3.6cqw 4cqw;border-radius:2.4cqw}
  .v-edu-countdown .btn svg{width:5.6cqw;height:5.6cqw}
  .v-edu-countdown .panel{left:8cqw;right:8cqw;width:auto;top:98cqw;padding:4cqw 4.4cqw;border-radius:3cqw;--nh:9cqw}
  .v-edu-countdown .ph{font-size:3cqw}
  .v-edu-countdown .live i{width:2cqw;height:2cqw}
  .v-edu-countdown .big{margin-top:1.6cqw;gap:2.4cqw}
  .v-edu-countdown .num{font-size:7.6cqw}
  .v-edu-countdown .big span{font-size:3.2cqw}
  .v-edu-countdown .grid{grid-template-columns:repeat(10,1fr);gap:1.4cqw;margin-top:2.4cqw}
  .v-edu-countdown .grid i{width:auto;height:auto;aspect-ratio:1;border-radius:1cqw}
  .v-edu-countdown .grid b{border-radius:1cqw}
  .v-edu-countdown .toast{display:none}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-countdown .gridbg{background-size:6cqw 6cqw}
  .v-edu-countdown .l{left:6cqw;right:6cqw;width:auto;top:6cqw}
  .v-edu-countdown .cmd{font-size:2.2cqw;gap:1cqw}
  .v-edu-countdown .caret{width:1.2cqw;height:2.6cqw}
  .v-edu-countdown .h{font-size:7cqw;margin-top:2.4cqw;max-width:70cqw}
  .v-edu-countdown .sub{font-size:2.4cqw;margin-top:3cqw}
  .v-edu-countdown .count{gap:1.2cqw;margin-top:2cqw;--dh:10cqw}
  .v-edu-countdown .box{width:17cqw;padding:1.6cqw 0 1.4cqw;border-radius:1.8cqw}
  .v-edu-countdown .dig{font-size:7cqw}
  .v-edu-countdown .lb{font-size:1.8cqw}
  .v-edu-countdown .colon{font-size:5cqw;line-height:12.5cqw}
  .v-edu-countdown .price{gap:2cqw;margin-top:3.6cqw}
  .v-edu-countdown .old{font-size:3cqw}
  .v-edu-countdown .old i{height:.4cqw}
  .v-edu-countdown .new{font-size:5.6cqw}
  .v-edu-countdown .eb{font-size:1.8cqw;padding:.6cqw 1.3cqw}
  .v-edu-countdown .btn{font-size:2.6cqw;gap:1.4cqw;padding:2cqw 3.4cqw;margin-top:3cqw;border-radius:1.2cqw}
  .v-edu-countdown .btn svg{width:2.8cqw;height:2.8cqw}
  .v-edu-countdown .panel{left:54cqw;right:6cqw;width:auto;top:auto;bottom:6cqw;padding:2.4cqw 2.6cqw;--nh:6cqw}
  .v-edu-countdown .ph{font-size:1.6cqw}
  .v-edu-countdown .big{margin-top:1cqw}
  .v-edu-countdown .num{font-size:5cqw}
  .v-edu-countdown .big span{font-size:1.7cqw}
  .v-edu-countdown .grid{grid-template-columns:repeat(8,1fr);gap:.8cqw;margin-top:1.4cqw}
  .v-edu-countdown .grid i{width:auto;height:auto;aspect-ratio:1}
  .v-edu-countdown .toast{display:none}
}
@keyframes edu-countdown-in{0%{opacity:0;transform:translateY(2cqw)}10%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:translateY(-1cqw)}}
@keyframes edu-countdown-in2{0%,4%{opacity:0;transform:translateX(3cqw)}14%,90%{opacity:1;transform:none}98%,100%{opacity:0;transform:none}}
@keyframes edu-countdown-blink{0%,49%{opacity:1}50%,100%{opacity:0}}
@keyframes edu-countdown-sec{0%,14.7%{transform:translateY(0)}16.7%,31.3%{transform:translateY(calc(var(--dh) * -1))}33.3%,48%{transform:translateY(calc(var(--dh) * -2))}50%,64.7%{transform:translateY(calc(var(--dh) * -3))}66.7%,81.3%{transform:translateY(calc(var(--dh) * -4))}83.3%,98%{transform:translateY(calc(var(--dh) * -5))}100%{transform:translateY(calc(var(--dh) * -6))}}
@keyframes edu-countdown-strike{0%,26%{transform:scaleX(0)}33%,100%{transform:scaleX(1)}}
@keyframes edu-countdown-new{0%,30%{opacity:0;transform:translateY(1.5cqw) scale(.85)}38%,100%{opacity:1;transform:none}}
@keyframes edu-countdown-glow{0%,100%{opacity:.25}50%{opacity:.8}}
@keyframes edu-countdown-live{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}
@keyframes edu-countdown-roll{0%,40%{transform:translateY(0)}45%,100%{transform:translateY(calc(var(--nh) * -1))}}
@keyframes edu-countdown-take{0%,38%{transform:scale(0)}41%{transform:scale(1.35)}45%,100%{transform:scale(1)}}
@keyframes edu-countdown-toast{0%,40%{opacity:0;transform:translateY(1.5cqw)}46%,86%{opacity:1;transform:none}92%,100%{opacity:0;transform:none}}
`,
};

export const eduChecklist: SceneSpec = {
  id: "edu-checklist",
  slug: "mg-edu-checklist",
  kind: "scene",
  name: "Syllabus Checklist Enroll",
  job: "process",
  language: "editorial",
  mechanic: "checklist-tick-then-click",
  energy: "default",
  settle: 4.5,
  colors: { ink: "#FFF6EC", accent: "#C2361B", secondary: "#FFD696", paper: "#FF6A4A" },
  fonts: { display: "Instrument Serif", body: "Geist", mono: "Geist Mono" },
  displayRole: "fonts.serif",
  tags: ["checklist", "syllabus", "enroll", "outcomes"],
  fields: [
    { key: "headline", label: "Headline", default: "What you'll learn", maxChars: 24, role: "headline" },
    { key: "sub", label: "Course line", default: "UX Writing Bootcamp · 5 weeks, live cohort", maxChars: 48, role: "body" },
    { key: "cta", label: "Button", default: "Enroll now · first lesson free", maxChars: 32, role: "cta" },
    { key: "note", label: "Note", default: "you're in! see you on the 20th", maxChars: 34, role: "caption" },
  ],
  html: `<div class="glow"></div>
<div class="l"><div class="brand">${BOOK}Brightwell</div><div class="h" data-21st-slot="headline">{{headline|words}}</div><div class="sub" data-21st-slot="sub">{{sub}}</div><div class="chips"><span>Starts Oct 20</span><span>4.9 from 860 reviews</span></div></div>
<div class="yay" data-21st-slot="note">{{note}}</div>
<div class="btn"><span data-21st-slot="cta">{{cta}}</span><span class="ar">${ARROW}</span><i class="rip"></i></div>
<div class="card">
<div class="ch"><span>Syllabus outcomes</span><div class="ctr"><div><span>0/5</span><span>1/5</span><span>2/5</span><span>3/5</span><span>4/5</span><span>5/5</span></div></div></div>
<div class="it i1"><div class="bx"><div class="bf"></div><svg viewBox="0 0 10 10"><path pathLength="1" d="M2 5.2l2 2 4-4.4"/></svg></div><div><div class="tx">Write microcopy that converts</div><div class="dt">Buttons, empty states, onboarding</div></div></div>
<div class="it i2"><div class="bx"><div class="bf"></div><svg viewBox="0 0 10 10"><path pathLength="1" d="M2 5.2l2 2 4-4.4"/></svg></div><div><div class="tx">Name features people remember</div><div class="dt">A naming sprint you can reuse</div></div></div>
<div class="it i3"><div class="bx"><div class="bf"></div><svg viewBox="0 0 10 10"><path pathLength="1" d="M2 5.2l2 2 4-4.4"/></svg></div><div><div class="tx">Turn errors into help</div><div class="dt">Rewrite 20 real error messages</div></div></div>
<div class="it i4"><div class="bx"><div class="bf"></div><svg viewBox="0 0 10 10"><path pathLength="1" d="M2 5.2l2 2 4-4.4"/></svg></div><div><div class="tx">Build a voice and tone guide</div><div class="dt">Your team's single source of truth</div></div></div>
<div class="it i5"><div class="bx"><div class="bf"></div><svg viewBox="0 0 10 10"><path pathLength="1" d="M2 5.2l2 2 4-4.4"/></svg></div><div><div class="tx">Ship a portfolio case study</div><div class="dt">Reviewed by a senior writer</div></div></div>
</div>
<div class="cur">${CURSOR("#2a120b")}</div>`,
  css: `
.v-edu-checklist{color:var(--ink);font-family:var(--font-body)}
.v-edu-checklist[data-backdrop="on"]{background:radial-gradient(70% 90% at 15% 20%,color-mix(in srgb,var(--paper) 82%,#fff) 0%,var(--paper) 55%,color-mix(in srgb,var(--paper) 88%,#000) 100%)}
.v-edu-checklist .glow{position:absolute;width:40cqw;height:40cqw;left:-10cqw;top:24cqw;border-radius:50%;background:color-mix(in srgb,var(--secondary) 45%,transparent);filter:blur(6cqw);animation:edu-checklist-glow 6s ease-in-out infinite}
.v-edu-checklist[data-backdrop="off"] .glow{display:none}
.v-edu-checklist .l{position:absolute;left:6cqw;top:6.4cqw;width:40cqw;animation:edu-checklist-l 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .brand{display:flex;align-items:center;gap:1cqw;font-size:1.7cqw;font-weight:700}
.v-edu-checklist .brand svg{width:2.6cqw;height:2.6cqw;flex:none}
.v-edu-checklist .h{font-family:var(--font-display);font-size:7cqw;line-height:1.2;letter-spacing:-.01em;margin-top:2cqw;padding-block:.26em;margin-bottom:-.26em}
.v-edu-checklist .h .w:last-child{font-style:italic;color:var(--secondary)}
.v-edu-checklist .sub{font-size:1.6cqw;line-height:1.4;color:color-mix(in srgb,var(--ink) 90%,transparent);margin-top:1.6cqw}
.v-edu-checklist .chips{display:flex;gap:.8cqw;margin-top:2cqw}
.v-edu-checklist .chips span{font-size:1.25cqw;font-weight:600;padding:.7cqw 1.3cqw;border-radius:99cqw;background:color-mix(in srgb,var(--ink) 18%,transparent);border:1px solid color-mix(in srgb,var(--ink) 35%,transparent)}
.v-edu-checklist .btn{position:absolute;left:6cqw;top:44cqw;display:flex;align-items:center;gap:1.4cqw;background:var(--ink);color:var(--paper);font-size:1.75cqw;line-height:1.2;font-weight:700;padding:1.1cqw 1.2cqw 1.1cqw 2.6cqw;border-radius:99cqw;box-shadow:0 1.6cqw 3cqw -1cqw rgba(80,15,0,.5);overflow:hidden;white-space:nowrap;animation:edu-checklist-btn 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .btn .ar{width:3.2cqw;height:3.2cqw;border-radius:50%;background:var(--accent);color:#fff;display:grid;place-items:center;flex:none}
.v-edu-checklist .btn .ar svg{width:1.8cqw;height:1.8cqw}
.v-edu-checklist .rip{position:absolute;left:30%;top:50%;width:10cqw;height:10cqw;margin:-5cqw 0 0 -5cqw;border-radius:50%;background:color-mix(in srgb,var(--paper) 35%,transparent);transform:scale(0);opacity:0;animation:edu-checklist-rip 6s ease-out infinite}
.v-edu-checklist .yay{position:absolute;left:7cqw;top:50.4cqw;font-family:var(--font-display);font-style:italic;font-size:2.9cqw;line-height:1.2;color:var(--ink);transform:rotate(-3deg);opacity:0;white-space:nowrap;animation:edu-checklist-yay 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .card{position:absolute;left:50cqw;top:6.4cqw;width:44cqw;box-sizing:border-box;padding:2.4cqw 2.8cqw 1.4cqw;background:color-mix(in srgb,var(--paper) 6%,#fff);color:#2a120b;border-radius:2cqw;box-shadow:0 .6cqw 1.2cqw rgba(120,30,10,.18),0 3cqw 6cqw -1cqw rgba(120,30,10,.4);--rh:1.6cqw;animation:edu-checklist-card 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .ch{display:flex;justify-content:space-between;align-items:center;font-size:1.2cqw;color:#9a7363;font-weight:600;padding-bottom:1cqw;border-bottom:1px solid #f0dfd1}
.v-edu-checklist .ctr{height:var(--rh);overflow:hidden;font-family:var(--font-mono);color:var(--accent);line-height:var(--rh)}
.v-edu-checklist .ctr div{animation:edu-checklist-ctr 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-checklist .ctr span{display:block;height:var(--rh)}
.v-edu-checklist .it{display:flex;align-items:center;gap:1.6cqw;height:7cqw;border-bottom:1px solid #f4e6da}
.v-edu-checklist .it:last-child{border-bottom:0}
.v-edu-checklist .bx{position:relative;width:2.8cqw;height:2.8cqw;border-radius:.7cqw;box-shadow:inset 0 0 0 .2cqw #ead3c3;flex:none}
.v-edu-checklist .bf{position:absolute;inset:0;border-radius:.7cqw;background:var(--accent);transform:scale(0)}
.v-edu-checklist .bx svg{position:absolute;inset:16%;width:68%;height:68%;overflow:visible}
.v-edu-checklist .bx path{fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}
.v-edu-checklist .tx{font-size:1.65cqw;font-weight:600;line-height:1.2}
.v-edu-checklist .dt{font-size:1.15cqw;color:#9a7363;margin-top:.3cqw}
.v-edu-checklist .cur{position:absolute;left:0;top:0;width:2.6cqw;height:2.6cqw;--cx:27cqw;--cy:46.5cqw;filter:drop-shadow(0 .3cqw .6cqw rgba(60,10,0,.35));animation:edu-checklist-cur 6s cubic-bezier(.65,0,.35,1) infinite}
.v-edu-checklist .cur svg{width:100%;height:100%;display:block}
.v-edu-checklist .i1 .bf{animation:edu-checklist-f1 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .i1 path{animation:edu-checklist-k1 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-checklist .i2 .bf{animation:edu-checklist-f2 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .i2 path{animation:edu-checklist-k2 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-checklist .i3 .bf{animation:edu-checklist-f3 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .i3 path{animation:edu-checklist-k3 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-checklist .i4 .bf{animation:edu-checklist-f4 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .i4 path{animation:edu-checklist-k4 6s cubic-bezier(.45,0,.25,1) infinite}
.v-edu-checklist .i5 .bf{animation:edu-checklist-f5 6s cubic-bezier(.2,.8,.2,1) infinite}
.v-edu-checklist .i5 path{animation:edu-checklist-k5 6s cubic-bezier(.45,0,.25,1) infinite}
@container (max-aspect-ratio: 4/5){
  .v-edu-checklist .glow{width:80cqw;height:80cqw;top:60cqw}
  .v-edu-checklist .l{left:8cqw;right:8cqw;width:auto;top:7cqw}
  .v-edu-checklist .brand{font-size:4cqw;gap:2cqw}
  .v-edu-checklist .brand svg{width:6cqw;height:6cqw}
  .v-edu-checklist .h{font-size:13.6cqw;margin-top:2cqw}
  .v-edu-checklist .sub{font-size:5.4cqw;margin-top:2cqw;line-height:1.3}
  .v-edu-checklist .chips{display:none}
  .v-edu-checklist .card{left:6cqw;right:6cqw;width:auto;top:62cqw;padding:4cqw 5cqw 2cqw;border-radius:4cqw;--rh:3.6cqw}
  .v-edu-checklist .ch{font-size:3.2cqw;padding-bottom:2cqw}
  .v-edu-checklist .it{height:11.4cqw;gap:3.4cqw}
  .v-edu-checklist .bx{width:6.4cqw;height:6.4cqw;border-radius:1.6cqw;box-shadow:inset 0 0 0 .5cqw #ead3c3}
  .v-edu-checklist .bf{border-radius:1.6cqw}
  .v-edu-checklist .tx{font-size:4.2cqw}
  .v-edu-checklist .dt{display:none}
  .v-edu-checklist .yay{left:8cqw;right:8cqw;top:138cqw;font-size:6.6cqw;white-space:normal}
  .v-edu-checklist .btn{left:7cqw;right:7cqw;top:auto;bottom:8cqw;justify-content:space-between;font-size:5.4cqw;gap:3cqw;padding:2.6cqw 2.6cqw 2.6cqw 6cqw;white-space:normal}
  .v-edu-checklist .btn .ar{width:10cqw;height:10cqw}
  .v-edu-checklist .btn .ar svg{width:5.4cqw;height:5.4cqw}
  .v-edu-checklist .cur{width:7cqw;height:7cqw;--cx:60cqw;--cy:164cqw}
}
@container (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4){
  .v-edu-checklist .l{left:6cqw;width:40cqw;top:7cqw}
  .v-edu-checklist .brand{font-size:2.4cqw;gap:1.2cqw}
  .v-edu-checklist .brand svg{width:3.4cqw;height:3.4cqw}
  .v-edu-checklist .h{font-size:9cqw;margin-top:3cqw}
  .v-edu-checklist .sub{font-size:2.4cqw;margin-top:2.4cqw}
  .v-edu-checklist .chips{flex-wrap:wrap;gap:1cqw;margin-top:3cqw}
  .v-edu-checklist .chips span{font-size:1.9cqw;padding:1cqw 1.8cqw}
  .v-edu-checklist .card{left:50cqw;right:5cqw;width:auto;top:7cqw;padding:3cqw 3cqw 1.6cqw;border-radius:2.6cqw;--rh:2.2cqw}
  .v-edu-checklist .ch{font-size:1.8cqw;padding-bottom:1.4cqw}
  .v-edu-checklist .it{height:13cqw;gap:2cqw}
  .v-edu-checklist .bx{width:4cqw;height:4cqw;border-radius:1cqw}
  .v-edu-checklist .bf{border-radius:1cqw}
  .v-edu-checklist .tx{font-size:2.3cqw}
  .v-edu-checklist .dt{font-size:1.7cqw}
  .v-edu-checklist .yay{left:7cqw;top:90cqw;font-size:3.6cqw}
  .v-edu-checklist .btn{left:6cqw;top:79cqw;font-size:2.5cqw;gap:1.8cqw;padding:1.6cqw 1.6cqw 1.6cqw 3.4cqw}
  .v-edu-checklist .btn .ar{width:4.6cqw;height:4.6cqw}
  .v-edu-checklist .btn .ar svg{width:2.6cqw;height:2.6cqw}
  .v-edu-checklist .cur{width:4cqw;height:4cqw;--cx:30cqw;--cy:83cqw}
}
@keyframes edu-checklist-glow{0%,100%{transform:translate(0,0)}50%{transform:translate(6cqw,-4cqw)}}
@keyframes edu-checklist-l{0%{opacity:0;transform:translateY(3cqw)}10%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes edu-checklist-card{0%,2%{opacity:0;transform:translateY(5cqw) rotate(3deg)}12%,86%{opacity:1;transform:rotate(-1.2deg)}96%,100%{opacity:0;transform:translateY(-3cqw) rotate(-1.2deg)}}
@keyframes edu-checklist-ctr{0%,9%{transform:translateY(0)}11%,15%{transform:translateY(calc(var(--rh) * -1))}17%,21%{transform:translateY(calc(var(--rh) * -2))}23%,27%{transform:translateY(calc(var(--rh) * -3))}29%,33%{transform:translateY(calc(var(--rh) * -4))}35%,100%{transform:translateY(calc(var(--rh) * -5))}}
@keyframes edu-checklist-btn{0%,36%{opacity:0;transform:translateY(3cqw) scale(.95)}46%,58%{opacity:1;transform:none}61%{opacity:1;transform:scale(.94)}65%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
@keyframes edu-checklist-rip{0%,60%{transform:scale(0);opacity:0}62%{transform:scale(.4);opacity:1}74%,100%{transform:scale(4);opacity:0}}
@keyframes edu-checklist-yay{0%,63%{opacity:0;transform:translateY(1.5cqw) rotate(-3deg)}69%,86%{opacity:1;transform:rotate(-3deg)}94%,100%{opacity:0;transform:rotate(-3deg)}}
@keyframes edu-checklist-cur{0%,40%{opacity:0;transform:translate(calc(var(--cx) + 69cqw),calc(var(--cy) + 9.5cqw))}44%{opacity:1}58%{transform:translate(var(--cx),var(--cy))}60%{transform:translate(var(--cx),var(--cy)) scale(.82)}63%{transform:translate(var(--cx),var(--cy)) scale(1)}84%{opacity:1;transform:translate(calc(var(--cx) + 4cqw),calc(var(--cy) + 3.5cqw))}94%,100%{opacity:0;transform:translate(calc(var(--cx) + 9cqw),calc(var(--cy) + 13.5cqw))}}
@keyframes edu-checklist-f1{0%,8%{transform:scale(0)}10%{transform:scale(1.18)}12%,100%{transform:scale(1)}}
@keyframes edu-checklist-k1{0%,9%{stroke-dashoffset:1}13%,100%{stroke-dashoffset:0}}
@keyframes edu-checklist-f2{0%,14%{transform:scale(0)}16%{transform:scale(1.18)}18%,100%{transform:scale(1)}}
@keyframes edu-checklist-k2{0%,15%{stroke-dashoffset:1}19%,100%{stroke-dashoffset:0}}
@keyframes edu-checklist-f3{0%,20%{transform:scale(0)}22%{transform:scale(1.18)}24%,100%{transform:scale(1)}}
@keyframes edu-checklist-k3{0%,21%{stroke-dashoffset:1}25%,100%{stroke-dashoffset:0}}
@keyframes edu-checklist-f4{0%,26%{transform:scale(0)}28%{transform:scale(1.18)}30%,100%{transform:scale(1)}}
@keyframes edu-checklist-k4{0%,27%{stroke-dashoffset:1}31%,100%{stroke-dashoffset:0}}
@keyframes edu-checklist-f5{0%,32%{transform:scale(0)}34%{transform:scale(1.18)}36%,100%{transform:scale(1)}}
@keyframes edu-checklist-k5{0%,33%{stroke-dashoffset:1}37%,100%{stroke-dashoffset:0}}
`,
};

export const EDUCATION_SCENES: SceneSpec[] = [eduReelsQuiz, eduCurriculum, eduCertificate, eduInstructor, eduChalkboard, eduFlashcards, eduChapters, eduTestimonials, eduCountdown, eduChecklist];
