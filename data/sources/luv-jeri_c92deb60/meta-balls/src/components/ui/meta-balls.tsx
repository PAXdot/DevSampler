// Meta Balls from 000h by Cojeev — MIT licence — docs, variants and the full library: https://cojeev.com/ui/docs/meta-balls/
"use client";

import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { cancelFrame, frame } from "motion";
import { twMerge } from "tailwind-merge";

// ---- registry/cojeev/motion/settings.ts (inlined) ----
const RUNTIME={cfg:{rest:false,reach:true,merge:true,hold:true,jiggleOn:true,press:true,echo:false,dots:0,grain:.08,sheen:.6,curve:1.2,lobeK:130,lobeZ:1,mergeZ:.8,arcK:40,holdK:80,pressK:170,jiggle:.35,jiggleDecay:1.6,restSpeed:1,drift:1,quality:2.5},
 tier:{pill:{amp:0,reach:3,inside:1.2,press:.02},tile:{amp:0,reach:2.4,inside:1,press:.02},nav:{amp:0,reach:1.2,inside:.5,press:.008},card:{amp:0,reach:1,inside:.4,press:.004},blob:{amp:.006,reach:3,inside:1.2,press:.03}}};
const factoryTiers={pill:{amp:.008,reach:4,inside:2,sig:24,R:80,press:.03,lobes:0,depth:0,asym:0,spread:.55},tile:{amp:.008,reach:3.5,inside:1.6,sig:18,R:64,press:.035,lobes:0,depth:0,asym:0,spread:.55},nav:{amp:.0006,reach:3,inside:1.2,sig:24,R:64,press:.010,lobes:0,depth:0,asym:0,spread:.55},card:{amp:.0003,reach:2.5,inside:.9,sig:44,R:56,press:.004,lobes:0,depth:0,asym:0,spread:.55},blob:{amp:.012,reach:4,inside:1.8,sig:22,R:64,press:.05,lobes:0,depth:0,asym:0,spread:.55},spinner:{amp:.14,reach:0,inside:0,sig:1,R:0,press:0,lobes:0,depth:0,asym:0,spread:.55}};
const factoryCfg={quality:2.5,grain:.12,sheen:1,curve:1,lobeK:90,lobeZ:.9,mergeZ:.62,arcK:26,holdK:55,pressK:140,jiggle:.45,jiggleDecay:1.35,restSpeed:1,drift:1,rest:true,reach:true,merge:true,hold:true,jiggleOn:true,press:true,echo:false,echoOff:6,echoScale:1.04,dots:0};
type MorphConfig = typeof factoryCfg
type TierName = keyof typeof factoryTiers
type Tier = typeof factoryTiers.pill
type ProductCategory = "buttons" | "icons" | "pills" | "cards" | "skeleton"
type Category = ProductCategory | "nav" | "inputs" | "controls" | "surfaces"
type MotionSettings = {v:3;mode:"off"|"subtle";cats:Record<Category,boolean>}
type MorphProfile = {cfg:MorphConfig;TIER:Record<TierName,Tier>}
type FlowVariant = "glide"|"stretch"|"jelly"|"comet"|"drop"|"rubber"|"pebble"|"ripple"|"halo"|"off"
type FlowSettings = {variant:FlowVariant;hover:boolean;speed:number;intensity:number;hoverStrength:number}
type SettingsSnapshot = Readonly<{motion:MotionSettings;flow:FlowSettings;profile:MorphProfile;authored:boolean}>
const MOTION_KEY = "v-motion"
const MORPH_KEY = "v-morph-cfg-v3"
const FLOW_KEY = "v-flow-v1"
const PRODUCT_CATEGORIES:readonly ProductCategory[] = ["buttons","icons","pills","cards","skeleton"]
const FLOW_DEFAULTS:Readonly<FlowSettings> = Object.freeze({variant:"glide",hover:true,speed:1,intensity:1,hoverStrength:1})
const FLOW_CHARACTERS:Record<FlowVariant,{label:string;duration:number;ease:string;land:string;glow?:string}> = {
 glide:{label:"Glide",duration:.24,ease:"cubic-bezier(.2,.8,.2,1)",land:"none"},
 stretch:{label:"Stretch",duration:.3,ease:"cubic-bezier(.3,1.15,.4,1)",land:"vf-land"},
 jelly:{label:"Jelly",duration:.5,ease:"cubic-bezier(.3,1.3,.45,1)",land:"vf-jellyx"},
 comet:{label:"Comet",duration:.34,ease:"cubic-bezier(.2,.8,.2,1)",land:"vf-land"},
 drop:{label:"Ink drop",duration:.3,ease:"cubic-bezier(.3,1.25,.4,1)",land:"vf-bloom"},
 rubber:{label:"Rubber",duration:.36,ease:"cubic-bezier(.3,1.3,.4,1)",land:"vf-land"},
 pebble:{label:"Pebble",duration:.46,ease:"cubic-bezier(.32,1.25,.42,1)",land:"vf-lean"},
 ripple:{label:"Ripple",duration:.36,ease:"cubic-bezier(.2,.8,.2,1)",land:"vf-land",glow:"vf-ring"},
 halo:{label:"Halo",duration:.4,ease:"cubic-bezier(.3,1.2,.4,1)",land:"vf-land",glow:"vf-glow"},
 off:{label:"Off",duration:0,ease:"linear",land:"none"},
}
const defaultSettings:MotionSettings={v:3,mode:"subtle",cats:{buttons:true,icons:true,pills:true,cards:false,skeleton:true,nav:false,inputs:false,controls:false,surfaces:false}}
function runtime():MorphProfile {
 const TIER=structuredClone(factoryTiers)
 for(const name of Object.keys(RUNTIME.tier) as (keyof typeof RUNTIME.tier)[]) Object.assign(TIER[name],RUNTIME.tier[name])
 return {cfg:{...factoryCfg,...RUNTIME.cfg},TIER}
}
function immutable<T>(value:T):T {
 if(value && typeof value==="object"){Object.values(value).forEach(immutable);Object.freeze(value)}
 return value
}
const serverSnapshot:SettingsSnapshot=immutable({motion:structuredClone(defaultSettings),flow:{...FLOW_DEFAULTS},profile:runtime(),authored:false})
let settings=structuredClone(defaultSettings), profile=runtime(), flow={...FLOW_DEFAULTS}, authored=false, loaded=false
let snapshot=serverSnapshot
const listeners=new Set<()=>void>()
let releaseEvents:undefined|(()=>void), dispatching=false
function storage(){try{return typeof window==="undefined"?null:window.localStorage}catch{return null}}
function parse(key:string):unknown {try{return JSON.parse(storage()?.getItem(key)||"null")}catch{return null}}
function record(value:unknown):value is Record<string,unknown>{return !!value&&typeof value==="object"&&!Array.isArray(value)}
function mergeProfile(value:unknown,base:MorphProfile,strict=false):MorphProfile {
 if(!record(value)||(!record(value.cfg)&&!record(value.TIER)))throw new Error("Profile must contain a cfg or TIER object.")
 const next=structuredClone(base)
 if(record(value.cfg)) for(const key of Object.keys(next.cfg) as (keyof MorphConfig)[]){
  const v=value.cfg[key];if(v===undefined)continue
  if(typeof v!==typeof next.cfg[key]||(typeof v==="number"&&!Number.isFinite(v))){if(strict)throw new Error(`Invalid cfg.${key}: expected a finite ${typeof next.cfg[key]}.`);continue}
  Object.assign(next.cfg,{[key]:v})
 }
 if(record(value.TIER))for(const name of Object.keys(next.TIER) as TierName[]){const saved=value.TIER[name];if(!record(saved))continue
  for(const key of Object.keys(next.TIER[name]) as (keyof Tier)[]){const v=saved[key];if(v===undefined)continue
   if(typeof v!=="number"||!Number.isFinite(v)){if(strict)throw new Error(`Invalid TIER.${name}.${key}: expected a finite number.`);continue}
   next.TIER[name][key]=v
  }
 }
 return next
}
function normalizeFlow(value:unknown):FlowSettings {
 const v=record(value)?value:{},number=(key:string,fallback:number,min:number)=>typeof v[key]==="number"&&Number.isFinite(v[key])?Math.max(min,v[key] as number):fallback
 return {variant:typeof v.variant==="string"&&Object.hasOwn(FLOW_CHARACTERS,v.variant)?v.variant as FlowVariant:"glide",hover:typeof v.hover==="boolean"?v.hover:true,speed:number("speed",1,.25),intensity:number("intensity",1,0),hoverStrength:number("hoverStrength",1,0)}
}
function flowToken(name:string,fallback:string,el?:Element){try{return getComputedStyle(el??document.documentElement).getPropertyValue(name).trim()||fallback}catch{return fallback}}
function flowTokenMs(name:string,fallback:number,el?:Element){const v=flowToken(name,"",el),n=parseFloat(v);return Number.isFinite(n)?n*(v.endsWith("ms")?1:1000):fallback}
function applyFlowSettings(){
 if(typeof document==="undefined")return
 const h=document.documentElement,variant=settings.mode==="off"?"off":flow.variant,c=FLOW_CHARACTERS[variant],hover=flow.hover?"on":"off"
 // Read the character tokens before any root write: a computed read after one forces a
 // whole-document style pass. Unchanged writes are skipped, as they still wake every observer.
 const values:Record<string,string>={"--flow-speed":String(flow.speed),"--flow-intensity":String(flow.intensity),"--flow-hover":String(flow.hoverStrength),
  "--flow-ease":variant==="off"?c.ease:flowToken("--e-flow-"+variant,c.ease),
  "--flow-dur":((variant==="off"?0:flowTokenMs("--t-flow-"+variant,c.duration*1000))/1000/flow.speed).toFixed(3)+"s",
  "--flow-land":c.land,"--flow-glow":c.glow||"none"}
 if(h.dataset.flow!==variant)h.dataset.flow=variant
 if(h.dataset.flowHover!==hover)h.dataset.flowHover=hover
 for(const [name,value] of Object.entries(values))if(h.style.getPropertyValue(name)!==value)h.style.setProperty(name,value)
}
function publish(){
 const next={motion:settings,flow,profile,authored}
 if(JSON.stringify(next)===JSON.stringify(snapshot)){applyFlowSettings();return}
 snapshot=immutable(structuredClone(next));applyFlowSettings();listeners.forEach(fn=>fn())
}
function loadMotionSettings(){
 if(loaded||typeof window==="undefined")return
 loaded=true;settings=structuredClone(defaultSettings);profile=runtime();flow={...FLOW_DEFAULTS};authored=false
 const raw=parse(MOTION_KEY)
 if(record(raw)){
  if(raw.mode==="off"||raw.mode==="subtle")settings.mode=raw.mode
  if(raw.v===3&&record(raw.cats))for(const key of PRODUCT_CATEGORIES)if(typeof raw.cats[key]==="boolean")settings.cats[key]=raw.cats[key]
 }
 flow=normalizeFlow(parse(FLOW_KEY))
 const saved=parse(MORPH_KEY)
 if(saved)try{profile=mergeProfile(saved,{cfg:{...factoryCfg},TIER:structuredClone(factoryTiers)});authored=true}catch{/* Corrupt saved data keeps a usable runtime. */}
 try{for(const key of ["v-alive-settings","v-morph-cfg","v-morph-cfg-v2","v-motion-cfg"])storage()?.removeItem(key)}catch{}
 publish()
}
function getMotionSettings(){loadMotionSettings();return structuredClone(settings)}
function getFlowSettings(){loadMotionSettings();return {...flow}}
function getSettingsSnapshot(){loadMotionSettings();return snapshot}
function getServerSettingsSnapshot(){return serverSnapshot}
function reloadMotionSettings(){loaded=false;loadMotionSettings()}
function acquireEvents(){
 if(releaseEvents||typeof window==="undefined")return
 const onStorage=(event:StorageEvent)=>{if(event.key===null||[MOTION_KEY,MORPH_KEY,FLOW_KEY].includes(event.key))reloadMotionSettings()}
 const onEngine=()=>{if(!dispatching)reloadMotionSettings()}
 window.addEventListener("storage",onStorage);window.addEventListener("v-motion-change",onEngine);window.addEventListener("v-flow",onEngine)
 releaseEvents=()=>{window.removeEventListener("storage",onStorage);window.removeEventListener("v-motion-change",onEngine);window.removeEventListener("v-flow",onEngine);releaseEvents=undefined}
}
function subscribeSettings(fn:()=>void){loadMotionSettings();listeners.add(fn);acquireEvents();return ()=>{listeners.delete(fn);if(!listeners.size)releaseEvents?.()}}
function event(name:string){if(typeof window==="undefined")return;dispatching=true;try{window.dispatchEvent(new CustomEvent(name,{detail:name==="v-flow"?getFlowSettings():getMotionSettings()}))}finally{dispatching=false}}

// ---- registry/cojeev/motion/use-motion-visibility.ts (inlined) ----
function subscribePreferences(listener: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", listener);
  document.addEventListener("visibilitychange", listener);
  return () => {
    media.removeEventListener("change", listener);
    document.removeEventListener("visibilitychange", listener);
  };
}
function readPreferences() {
  return document.visibilityState === "visible" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/** A shared stillness boundary for optional landing-page effects. */
function useMotionVisibility(ref: React.RefObject<Element | null>, mountedElement?: Element | null) {
  const { motion, flow } = React.useSyncExternalStore(subscribeSettings, getSettingsSnapshot, getServerSettingsSnapshot);
  const permitted = React.useSyncExternalStore(subscribePreferences, readPreferences, () => false);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const element = mountedElement ?? ref.current;
    if (!element) { setInView(false); return; }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, mountedElement]);
  return { enabled: permitted && motion.mode !== "off" && flow.variant !== "off", inView };
}

// ---- registry/cojeev/lib/utils.ts (inlined) ----
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ---- registry/cojeev/lib/reference-effect-geometry.ts (inlined) ----
type Point = { x: number; y: number };
type SwarmPoint = Point & { vx: number; vy: number };
type Ripple = Point & { time: number };
const boundedCount = (n: number, fallback: number, max: number) => Math.max(1, Math.min(max, Math.round(Number.isFinite(n) ? n : fallback)));
const boundedNumber = (n: number, fallback: number, min: number, max: number) => Math.max(min, Math.min(max, Number.isFinite(n) ? n : fallback));
function makeSwarm(count: number): SwarmPoint[] {
  return Array.from({ length: boundedCount(count, 18, 64) }, (_, i) => ({ x: Math.cos(i * 2.4) * 25, y: Math.sin(i * 2.4) * 25, vx: 0, vy: 0 }));
}
/** Bounded semi-implicit springs; a long background-tab delta cannot explode the simulation. */
function stepSwarm(points: SwarmPoint[], target: Point, milliseconds: number, time: number, spread: number) {
  const dt = boundedNumber(milliseconds / 1000, .016, 0, .033);
  points.forEach((p, i) => {
    const angle = i * 2.39996 + time * (.55 + i % 3 * .09);
    const radius = boundedNumber(spread, 28, 0, 160) * (.3 + (i % 7) / 9);
    const x = target.x + Math.cos(angle) * radius, y = target.y + Math.sin(angle) * radius;
    p.vx = (p.vx + (x - p.x) * 48 * dt) * Math.exp(-7 * dt);
    p.vy = (p.vy + (y - p.y) * 48 * dt) * Math.exp(-7 * dt);
    p.x += p.vx * dt; p.y += p.vy * dt;
  });
}
function rippleOffset(x: number, y: number, waves: Ripple[], time: number): Point {
  let dx = 0, dy = 0;
  for (const wave of waves) {
    const age = time - wave.time;
    if (age < 0 || age > 1.6) continue;
    const distance = Math.hypot(x - wave.x, y - wave.y), envelope = Math.exp(-Math.pow((distance - age * 230) / 65, 2));
    const amount = Math.sin(distance * .085 - age * 16) * envelope * (1 - age / 1.6) * 12;
    dx += (x - wave.x) / Math.max(1, distance) * amount; dy += (y - wave.y) / Math.max(1, distance) * amount;
  }
  return { x: dx, y: dy };
}

// ---- registry/cojeev/lib/reference-field-paint.ts (inlined) ----
type FieldKind = "swarm-cursor" | "ghost-cursor" | "click-spark" | "magic-rings" | "strands" | "meta-balls" | "elastic-mesh" | "ripple-distortion" | "image-trail";
type Trail = Point & { time: number; index: number };
/** Original bounded canvas effects. No global pointer interception or GPU prerequisite. */
function createFieldPainter(kind: FieldKind, ctx: CanvasRenderingContext2D, count: number) {
  let width = 1, height = 1, time = 0, active = false;
  let pointer: Point = { x: .5, y: .5 }, lastTrail: Point = { x: -999, y: -999 };
  let waves: Ripple[] = [], trails: Trail[] = [], bursts: Ripple[] = [];
  const swarm = makeSwarm(count), mesh = Array.from({ length: 17 * 11 }, () => ({ x: 0, y: 0, vx: 0, vy: 0 }));
  const texture = typeof document === "undefined" ? null : document.createElement("canvas");
  let textureDirty = true;
  const dot = (x: number, y: number, r: number, color: string) => { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, Math.max(.1, r), 0, Math.PI * 2); ctx.fill(); };
  const painter = {
    palette: ["#f5b8db", "#9aab63", "#b6caeb", "#f5d867"], ink: "#111111", tone: 0,
    images: [] as HTMLImageElement[],
    invalidate() { textureDirty = true; },
    resize(w: number, h: number) {
      const old = { x: width, y: height }; width = w; height = h;
      pointer = { x: width / 2, y: height / 2 };
      swarm.forEach(p => { p.x = old.x === 1 ? width / 2 + p.x : p.x / old.x * w; p.y = old.y === 1 ? height / 2 + p.y : p.y / old.y * h; });
      textureDirty = true;
    },
    move(p: Point) {
      pointer = p; active = true;
      if (kind === "ripple-distortion" && (!waves.length || time - waves.at(-1)!.time > .06)) waves = [...waves.slice(-11), { ...p, time }];
      if (kind === "image-trail" && Math.hypot(p.x - lastTrail.x, p.y - lastTrail.y) > 42) {
        trails = [...trails.slice(-9), { ...p, time, index: (trails.at(-1)?.index ?? -1) + 1 }]; lastTrail = p;
      }
    },
    leave() { active = false; lastTrail = { x: -999, y: -999 }; },
    click(p: Point) {
      pointer = p; active = true; bursts = [...bursts.slice(-7), { ...p, time }]; waves = [...waves.slice(-11), { ...p, time }];
      swarm.forEach((particle, i) => { particle.vx += Math.cos(i * 2.4) * 650; particle.vy += Math.sin(i * 2.4) * 650; });
      if (kind === "image-trail") { trails = [...trails.slice(-9), { ...p, time, index: (trails.at(-1)?.index ?? -1) + 1 }]; }
    },
    draw(delta: number, running: boolean) {
      if (running) time += delta / 1000;
      const color = painter.palette[painter.tone], palette = painter.palette;
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1; ctx.lineCap = "round"; ctx.lineJoin = "round";
      if (kind === "swarm-cursor") {
        if (running) stepSwarm(swarm, active ? pointer : { x: width / 2, y: height / 2 }, delta, time, Math.min(45, width * .13));
        for (let i = 0; i < swarm.length; i++) {
          const p = swarm[i]; ctx.strokeStyle = palette[i % 4]; ctx.lineWidth = 2;
          ctx.globalAlpha = .3; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * .07, p.y - p.vy * .07); ctx.stroke();
          ctx.globalAlpha = .85; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.atan2(p.vy, p.vx)); ctx.scale(1.4, .82); dot(0, 0, 4 + i % 3, palette[i % 4]); ctx.restore();
        }
      } else if (kind === "ghost-cursor") {
        if (running) stepSwarm(swarm, active ? pointer : { x: width / 2, y: height / 2 }, delta, time, 10);
        const head = swarm[0];
        if (running) trails = [...trails.slice(-27), { x: head.x, y: head.y, time, index: 0 }];
        for (let i = 0; i < trails.length; i++) { ctx.globalAlpha = i / trails.length * .18; dot(trails[i].x, trails[i].y, 8 + i / trails.length * 18, color); }
        ctx.globalAlpha = .75; ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(head.x, head.y, 18, 23, Math.sin(time) * .2, 0, Math.PI * 2); ctx.stroke();
      } else if (kind === "click-spark") {
        bursts = bursts.filter(burst => time - burst.time < .7);
        for (const burst of bursts) {
          const p = (time - burst.time) / .7, eased = 1 - (1 - p) ** 3;
          for (let i = 0; i < Math.min(count, 24); i++) {
            const angle = i / Math.min(count, 24) * Math.PI * 2, r = 8 + eased * 44;
            ctx.strokeStyle = palette[i % 4]; ctx.lineWidth = 3 * (1 - p); ctx.globalAlpha = 1 - p;
            ctx.beginPath(); ctx.moveTo(burst.x + Math.cos(angle) * r, burst.y + Math.sin(angle) * r); ctx.lineTo(burst.x + Math.cos(angle) * (r + 12 * (1 - p)), burst.y + Math.sin(angle) * (r + 12 * (1 - p))); ctx.stroke();
          }
        }
      } else if (kind === "magic-rings") {
        const cx = width / 2 + (active ? (pointer.x - width / 2) * .1 : 0), cy = height / 2 + (active ? (pointer.y - height / 2) * .1 : 0);
        for (let i = 0; i < Math.min(count, 10); i++) {
          const phase = (time * .18 + i / Math.min(count, 10)) % 1, r = 16 + phase * Math.min(width, height) * .43;
          ctx.globalAlpha = Math.sin(phase * Math.PI) * .9; ctx.strokeStyle = palette[i % 4]; ctx.lineWidth = 1.5 + (1 - phase) * 2;
          ctx.beginPath(); ctx.ellipse(cx, cy, r, r * (.72 + .08 * Math.sin(time + i)), -.3, .1 + time * .1, Math.PI * 2 - .4 + time * .1); ctx.stroke();
        }
      } else if (kind === "strands") {
        for (let i = 0; i < Math.min(count, 12); i++) {
          ctx.strokeStyle = palette[i % 4]; ctx.globalAlpha = .72; ctx.lineWidth = 1.5 + i % 3;
          ctx.beginPath();
          for (let x = 0; x <= width; x += 5) {
            const envelope = Math.sin(x / width * Math.PI), y = height / 2 + Math.sin(x / width * (6 + i * .25) + time * (.4 + i * .035) + i * .6) * height * .23 * envelope + (i - Math.min(count, 12) / 2) * 3;
            if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      } else if (kind === "meta-balls") {
        // Marching squares over a small scalar field creates true liquid joins.
        const balls = Array.from({ length: Math.min(count, 10) }, (_, i) => ({ x: width / 2 + Math.sin(time * .4 + i * 2.2) * width * .24, y: height / 2 + Math.cos(time * .47 + i * 1.7) * height * .22, r: 21 + i % 3 * 5 }));
        if (active) balls.push({ ...pointer, r: 26 });
        const step = Math.max(4, width / 110), value = (x: number, y: number) => balls.reduce((sum, b) => sum + b.r * b.r / Math.max(1, (x - b.x) ** 2 + (y - b.y) ** 2), 0);
        ctx.fillStyle = color; ctx.beginPath();
        for (let y = 0; y < height; y += step) for (let x = 0; x < width; x += step) {
          const corners = [{ x, y }, { x: x + step, y }, { x: x + step, y: y + step }, { x, y: y + step }];
          const values = corners.map(p => value(p.x, p.y));
          const polygon: Point[] = [];
          for (let i = 0; i < 4; i++) {
            const a = corners[i], b = corners[(i + 1) % 4], av = values[i], bv = values[(i + 1) % 4];
            if (av >= 1) polygon.push(a);
            if ((av >= 1) !== (bv >= 1)) { const t = (1 - av) / (bv - av); polygon.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }); }
          }
          if (polygon.length) { polygon.forEach((p, i) => { if (i) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); }); ctx.closePath(); }
        }
        ctx.fill();
      } else if (kind === "image-trail") {
        trails = trails.filter(item => time - item.time < 1.5);
        const show = running ? trails : trails.length ? trails : [{ x: width / 2, y: height / 2, time, index: 0 }];
        show.forEach(item => {
          const age = Math.max(0, time - item.time), image = painter.images[item.index % Math.max(1, painter.images.length)];
          const side = Math.min(110, width * .27), opacity = Math.min(1, age * 12 + .15) * Math.min(1, (1.5 - age) * 2);
          ctx.save(); ctx.globalAlpha = running ? Math.max(0, opacity) : .8; ctx.translate(item.x, item.y - age * 12); ctx.rotate((item.index % 5 - 2) * .09); ctx.beginPath(); ctx.roundRect(-side / 2, -side * .62, side, side * 1.24, 12); ctx.clip();
          ctx.fillStyle = palette[item.index % 4]; ctx.fillRect(-side / 2, -side * .62, side, side * 1.24);
          if (image?.complete && image.naturalWidth) ctx.drawImage(image, -side / 2, -side * .62, side, side * 1.24);
          else { ctx.globalAlpha *= .8; dot(0, 0, side * .28, painter.ink); }
          ctx.restore();
        });
      } else if (kind === "ripple-distortion" || kind === "elastic-mesh") {
        if (!texture) return;
        if (textureDirty) {
          texture.width = Math.round(width); texture.height = Math.round(height);
          const paint = texture.getContext("2d")!;
          paint.fillStyle = palette[(painter.tone + 2) % 4]; paint.fillRect(0, 0, width, height);
          for (let i = 0; i < 7; i++) {
            paint.fillStyle = palette[i % 4]; paint.beginPath(); paint.ellipse(width * (.2 + i % 3 * .3), height * (.2 + Math.floor(i / 3) * .3), width * .19, height * .19, i, 0, Math.PI * 2); paint.fill();
            paint.strokeStyle = painter.ink; paint.lineWidth = 1; paint.stroke();
          }
          const image = painter.images[0];
          if (image?.complete && image.naturalWidth) {
            const ratio = Math.max(width / image.naturalWidth, height / image.naturalHeight), w = image.naturalWidth * ratio, h = image.naturalHeight * ratio;
            paint.drawImage(image, (width - w) / 2, (height - h) / 2, w, h);
          }
          textureDirty = false;
        }
        waves = waves.filter(wave => time - wave.time < 1.6);
        const columns = kind === "elastic-mesh" ? 16 : 32, rows = kind === "elastic-mesh" ? 10 : 20;
        const vertices: Point[] = [];
        for (let y = 0; y <= rows; y++) for (let x = 0; x <= columns; x++) {
          const px = x / columns * width, py = y / rows * height;
          let offset = rippleOffset(px, py, waves, time);
          if (kind === "elastic-mesh") {
            const p = mesh[y * (columns + 1) + x], d = Math.hypot(pointer.x - px, pointer.y - py), influence = active && running ? Math.exp(-d * d / 9000) : 0;
            if (running) { const dt = Math.min(delta / 1000, .033); p.vx = (p.vx + ((pointer.x - px) * influence * .38 - p.x) * 80 * dt) * Math.exp(-8 * dt); p.vy = (p.vy + ((pointer.y - py) * influence * .38 - p.y) * 80 * dt) * Math.exp(-8 * dt); p.x += p.vx * dt; p.y += p.vy * dt; }
            offset = { x: p.x, y: p.y };
          }
          const edge = Math.sin(x / columns * Math.PI) * Math.sin(y / rows * Math.PI);
          vertices.push({ x: px + offset.x * edge, y: py + offset.y * edge });
        }
        for (let y = 0; y < rows; y++) for (let x = 0; x < columns; x++) {
          const a = vertices[y * (columns + 1) + x], b = vertices[y * (columns + 1) + x + 1], c = vertices[(y + 1) * (columns + 1) + x], d = vertices[(y + 1) * (columns + 1) + x + 1];
          const sx = x / columns * width, sy = y / rows * height, sw = width / columns, sh = height / rows;
          drawTriangle(ctx, texture, [{ x: sx, y: sy }, { x: sx + sw, y: sy }, { x: sx, y: sy + sh }], [a, b, c]);
          drawTriangle(ctx, texture, [{ x: sx + sw, y: sy + sh }, { x: sx, y: sy + sh }, { x: sx + sw, y: sy }], [d, c, b]);
          if (kind === "elastic-mesh") { ctx.strokeStyle = painter.ink; ctx.globalAlpha = .13; ctx.lineWidth = .5; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(d.x, d.y); ctx.stroke(); ctx.globalAlpha = 1; }
        }
      }
      ctx.globalAlpha = 1;
    },
  };
  return painter;
}
function drawTriangle(ctx: CanvasRenderingContext2D, image: HTMLCanvasElement, source: Point[], destination: Point[]) {
  const [s0, s1, s2] = source, [d0, d1, d2] = destination;
  const sx1 = s1.x - s0.x, sy1 = s1.y - s0.y, sx2 = s2.x - s0.x, sy2 = s2.y - s0.y;
  const determinant = sx1 * sy2 - sx2 * sy1;
  if (Math.abs(determinant) < .001) return;
  const dx1 = d1.x - d0.x, dy1 = d1.y - d0.y, dx2 = d2.x - d0.x, dy2 = d2.y - d0.y;
  const a = (dx1 * sy2 - dx2 * sy1) / determinant, b = (dy1 * sy2 - dy2 * sy1) / determinant;
  const c = (dx2 * sx1 - dx1 * sx2) / determinant, d = (dy2 * sx1 - dy1 * sx2) / determinant;
  // Expand every edge by one CSS pixel. Moving vertices by a fixed distance
  // leaves shallow edges partly transparent; the incenter gives equal overdraw.
  const lengths = [Math.hypot(d1.x-d2.x,d1.y-d2.y),Math.hypot(d0.x-d2.x,d0.y-d2.y),Math.hypot(d0.x-d1.x,d0.y-d1.y)];
  const perimeter = lengths.reduce((sum, length) => sum + length, 0);
  const radius = Math.abs(dx1 * dy2 - dx2 * dy1) / perimeter;
  if (radius < .001) return;
  const center = { x: destination.reduce((sum, point, i) => sum + point.x * lengths[i], 0) / perimeter, y: destination.reduce((sum, point, i) => sum + point.y * lengths[i], 0) / perimeter };
  const cover = destination.map(point => ({ x: point.x + (point.x-center.x)/radius, y: point.y + (point.y-center.y)/radius }));
  ctx.save(); ctx.beginPath(); cover.forEach((point, i) => { if (i) ctx.lineTo(point.x, point.y); else ctx.moveTo(point.x, point.y); }); ctx.closePath(); ctx.clip();
  ctx.transform(a, b, c, d, d0.x - a * s0.x - c * s0.y, d0.y - b * s0.x - d * s0.y); ctx.drawImage(image, 0, 0); ctx.restore();
}

// ---- registry/cojeev/lib/reference-field.tsx (inlined) ----
type ReferenceFieldProps = React.ComponentProps<"div"> & {
  /** Stop movement while retaining a composed, meaningful still frame. */
  paused?: boolean;
  tone?: "pink" | "olive" | "blue" | "yellow";
  speed?: number;
  count?: number;
  /** Height of the local effect stage, in CSS pixels. */
  height?: number;
  /** Optional texture for the elastic sheet or ripple. */
  src?: string;
  /** Optional image cards for the trail. Decorative; describe their subject nearby. */
  images?: readonly string[];
};
/** One scoped paint surface shared by the actual field/cursor components. */
function ReferenceField({ kind, paused = false, tone = "pink", speed = 1, count = 18, height = 320, src, images, className, style, children, ref, ...props }: ReferenceFieldProps & { kind: FieldKind }) {
  const host = React.useRef<HTMLDivElement>(null), canvas = React.useRef<HTMLCanvasElement>(null);
  const { enabled, inView } = useMotionVisibility(host);
  const running = enabled && inView && !paused;
  const safeCount = boundedCount(count, 18, 64), safeSpeed = boundedNumber(speed, 1, .1, 3);
  const state = React.useRef({ running, speed: safeSpeed });
  React.useLayoutEffect(() => { state.current = { running, speed: safeSpeed }; }, [running, safeSpeed]);
  const painter = React.useRef<ReturnType<typeof createFieldPainter> | null>(null);
  const imagesKey = JSON.stringify(images ?? []);

  React.useEffect(() => {
    const element = host.current, surface = canvas.current;
    if (!element || !surface) return;
    const context = surface.getContext("2d");
    if (!context) { element.dataset.renderState = "unavailable"; return; }
    const renderer = createFieldPainter(kind, context, safeCount);
    painter.current = renderer;
    const assets = (src ? [src] : JSON.parse(imagesKey) as string[]).slice(0, 12).map(url => {
      const image = new Image();
      image.onload = () => { renderer.invalidate(); renderer.draw(0, false); };
      image.onerror = () => { element.dataset.assetState = "fallback"; };
      image.src = url; return image;
    });
    renderer.images = assets;
    let appearanceKey = "";
    const repaint = () => {
      const css = getComputedStyle(element);
      const palette = ["--v-pink", "--v-olive", "--v-blue", "--v-yellow"].map((key, i) => css.getPropertyValue(key).trim() || ["#f5b8db", "#9aab63", "#b6caeb", "#f5d867"][i]);
      const nextKey = JSON.stringify([palette, css.color]);
      if (appearanceKey === nextKey) return;
      appearanceKey = nextKey;
      renderer.palette = palette; renderer.ink = css.color;
      renderer.invalidate(); renderer.draw(0, false);
    };
    const resize = () => {
      const width = Math.max(1, element.clientWidth), h = Math.max(1, element.clientHeight);
      const ratio = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(900000 / (width * h)));
      surface.width = Math.round(width * ratio); surface.height = Math.round(h * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      renderer.resize(width, h);
      renderer.tone = ["pink", "olive", "blue", "yellow"].indexOf(tone);
      repaint();
      renderer.draw(0, false);
      element.dataset.renderState = "ready";
    };
    const observer = new ResizeObserver(resize); observer.observe(element);
    const theme = new MutationObserver(repaint);
    for (let ancestor: Element | null = element; ancestor; ancestor = ancestor.parentElement) {
      theme.observe(ancestor, { attributes: true, attributeFilter: ["data-mode", "data-palette", "data-contrast", "class", "style"] });
    }
    window.addEventListener("cojeev:appearancechange", repaint);
    const point = (event: PointerEvent | MouseEvent) => {
      const box = element.getBoundingClientRect();
      return { x: (event.clientX - box.left) * element.clientWidth / Math.max(1, box.width), y: (event.clientY - box.top) * element.clientHeight / Math.max(1, box.height) };
    };
    const move = (event: PointerEvent) => { if (state.current.running) renderer.move(point(event)); };
    const leave = () => renderer.leave();
    const click = (event: MouseEvent) => {
      if (!state.current.running) return;
      // A keyboard-activated child button has no pointer coordinates.
      const p = event.detail === 0 ? { x: element.clientWidth / 2, y: element.clientHeight / 2 } : point(event);
      renderer.click(p);
    };
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", leave);
    element.addEventListener("click", click);
    resize();
    return () => {
      observer.disconnect(); theme.disconnect(); window.removeEventListener("cojeev:appearancechange", repaint); assets.forEach(asset => { asset.onload = null; asset.onerror = null; });
      element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); element.removeEventListener("click", click);
      painter.current = null;
    };
  }, [kind, safeCount, src, imagesKey, tone]);

  React.useEffect(() => {
    const renderer = painter.current;
    if (!renderer) return;
    if (!running) { renderer.draw(0, false); return; }
    const tick = ({ delta }: { delta: number }) => renderer.draw(Math.min(delta, 33) * state.current.speed, true);
    frame.update(tick, true);
    return () => cancelFrame(tick);
  }, [running, kind, safeCount, src, imagesKey, tone]);

  return <div {...props} ref={React.useCallback((node: HTMLDivElement | null) => { host.current = node; if (typeof ref === "function") return ref(node); if (ref) ref.current = node; }, [ref])}
    className={cn(`v-${kind}`, className)} data-slot={kind} data-running={running ? "true" : "false"} data-tone={tone}
    style={{ position: "relative", isolation: "isolate", overflow: "hidden", minWidth: 0, width: "100%", height: boundedNumber(height, 320, 120, 1000), borderRadius: "var(--r-panel)", color: "var(--v-text)", background: "var(--v-beige)", ...style }}>
    <canvas ref={canvas} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
    {children && <div style={{ position: "relative", zIndex: 1, minHeight: "100%", display: "grid", placeItems: "center", padding: 24, pointerEvents: "none" }}><div style={{ pointerEvents: "auto", maxWidth: "100%" }}>{children}</div></div>}
  </div>;
}

// ---- registry/cojeev/ui/meta-balls.tsx ----
export type MetaBallsProps = ReferenceFieldProps;
/** Moving scalar-field bodies meet in true liquid joins. */
function MetaBallsImpl(props: MetaBallsProps) {
  return <ReferenceField {...props} kind="meta-balls" />;
}
export function MetaBalls(props: Parameters<typeof MetaBallsImpl>[0]) {
  return (
    <>
      <CojeevStyles />
      {MetaBallsImpl(props)}
    </>
  );
}

// ---- Styles (React 19 hoists this <style> into <head> and renders it once per page) ----
const COJEEV_CSS = `/* Meta Balls — styles for 000h by Cojeev (MIT). Plain CSS with native cascade layers; no Tailwind theme or config needed.
   Dark mode: put the \`dark\` class on <html> or an ancestor (shadcn convention); \`[data-mode="dark"]\` works too.
   Fonts: DM Sans and Bricolage Grotesque load from Google Fonts below (the full library embeds them instead). */
/* vietnamese */
@font-face {
  font-family: 'Bricolage Grotesque';
  font-style: normal;
  font-weight: 200 800;
  font-stretch: 75% 100%;
  font-display: swap;
  src: url(https://cdn.21st.dev/assets/mirror/e1/e1ad6fe7e770fe1587aa9911742429d456cb3e9c83969fbd9d92315667c3c5b7.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Bricolage Grotesque';
  font-style: normal;
  font-weight: 200 800;
  font-stretch: 75% 100%;
  font-display: swap;
  src: url(https://cdn.21st.dev/assets/mirror/10/104b93499342ede4da68d37234be0e5229345f0be0b9509328f3071f5fb9e8c8.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Bricolage Grotesque';
  font-style: normal;
  font-weight: 200 800;
  font-stretch: 75% 100%;
  font-display: swap;
  src: url(https://cdn.21st.dev/assets/mirror/9f/9fee080fcc2d2e0ea8c7ce2a58abaa8ba1f40c6e603643327cd5eb6f07db06a8.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 100 1000;
  font-display: swap;
  src: url(https://cdn.21st.dev/assets/mirror/0d/0d0609aee778d21b40bda1d27b7e6b5b3cb1a3e96b90b8831c681aca097c2219.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 100 1000;
  font-display: swap;
  src: url(https://cdn.21st.dev/assets/mirror/aa/aa530716b0d351866af7dbfa3eee4120fb36f2d071baff8c234185141865c7ff.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@layer theme, base, components, utilities, cojeev-states, cojeev-flow, cojeev-morph, cojeev-accessibility;

/* ---- Tokens: :root is light; [data-mode="dark"] and the shadcn .dark class are dark ---- */
/* Cojeev tokens: one definition per mode. The runtime palettes in lib/appearance-tokens.ts ("paper" is
   this default) re-point these at runtime. Contrast notes below are measured against these values. */
:root{
color-scheme:light;
/* accents [E] I03 */
--v-pink:#F0A4CC;--v-olive:#A8BC75;--v-blue:#95BAE8;--v-yellow:#F1D369;
/* surfaces [M] */
--v-canvas:#F8F6F1;--v-paper:#FFFFFF;/* @kind color */--v-beige:#EEE9E1;--v-beige-2:#f3efe8;--v-cream-pill:#FFFFFF;
--v-ink:#26282d;--v-structure:#14171B;--on-structure:#F9FAFC;--structure-quiet:#242931;--structure-line:#565D68;--structure-text:#E2E6ED;--v-ink-soft:#464951;--v-on-ink:#F8F6F1;
/* text [M] */
--v-text:#26282d;--v-text-2:#464951;--v-text-3:#52565e;--v-skel-face:#EEE9E1;--v-skel-sheen:#FFFFFF;--v-skel-edge:#b4b0ab;--v-disabled-ink:#52565e;--v-disabled-face:#EEE9E1;--v-disabled-edge:#706e6d;/* text-3 6.8:1 on canvas, 6.1:1 on beige — informational grey clears AA on both real surfaces */
/* semantic hues */
--v-danger:#D7473C;/* [M] I07 I16 — FILL only: dots, borders, destructive button (white on it passes) */
--v-danger-ink:#b2433b;--v-danger-fill:#B92D28;/* white text on it = 6.1:1 */--v-olive-ink:#525d3d;/* 6.5:1 on canvas */--v-accent-ink:#704f63;/* weekend / accent ink, 5.8:1 on beige *//* danger ink is text-only: 4.7:1 on --v-danger-soft, 4.6:1 on --v-beige */
--v-brand:#845c73;/* Cojeev mulberry — focus ring only (decision); 5.2:1 on canvas */
--v-border:#b4b0ab;/* hairlines between static surfaces only — 1.8:1 on beige, 2.0:1 on canvas; never a control edge */
--v-edge:#706e6d;/* control edge: 4.2:1 on beige, 4.7:1 on canvas — above the 3:1 floor for interactive boundaries */
--switch-knob:#FFFFFF;--switch-knob-on:#14171B;
/* ---- semantic roles: surfaces, selection, status, data ----
   Deliberate tinted regions so a page is not uniformly beige. Each is a light wash of an identity hue,
   keeping ink text at ≥ 4.5:1 (measured: quiet 14.8, work 13.6, automation 14.0, memory 13.5,
   library 13.6, ai 13.6, alert 13.2). */
--surface-quiet:#FFFFFF;--surface-work:#f1f6fc;--surface-automation:#fdf9ec;--surface-memory:#f4f6ed;
--surface-library:#fdf3f8;--surface-ai:#f1f6fc;--surface-alert:#fcf0ee;
--sel-bg:#fbe9f3;--sel-edge:#a87491;--sel-ink:#26282d;
--status-ok-bg:#f4f6ed;--status-ok-ink:#555f3f;--status-warn-bg:#fdf9ec;--status-warn-ink:#695d33;
--status-danger-bg:#fae7e6;--status-danger-ink:#96342d;--status-info-bg:#f1f6fc;--status-info-ink:#4b5d74;
--status-pending-bg:#e7e7e8;--status-pending-ink:#464951;
--v-scrim:rgba(19,24,32,.46);/* [I] I07 gave a beige veil; a cream dialog on a beige veil measured 1.04:1 and vanished. A warm-ink veil keeps the paper feel and lets the modal stand off the page. */
--v-disabled-fill:#EEE9E1;/* [M] I18 grey Join pill */
/* tonal watermarks [M] ≈ accent 88% + black */
--v-pink-deep:#d693b7;--v-olive-deep:#96a86a;--v-blue-deep:#86a6cf;--v-yellow-deep:#d6bc60;/* [M] I15 watermarks + hover: the SAME hue ~8–12 % darker, not a heavy mix */
/* soft tints for tag pills on beige [I] */
--v-pink-soft:#fbe9f3;
--v-olive-soft:#eaefde;
--v-blue-soft:#e6eef9;
--v-yellow-soft:#fcf4db;
--v-danger-soft:#fae7e6;
/* semantic roles (shadcn-style names) */--card-2:var(--v-beige-2);
/* categories (decision) */
--cat-work:var(--v-blue);--cat-automations:var(--v-yellow);--cat-memory:var(--v-olive);--cat-library:var(--v-pink);--cat-ai-apps:var(--v-blue);--cat-free-models:var(--v-olive);--cat-settings:var(--v-beige);--cat-needs-you:var(--v-pink);--cat-runs:var(--v-yellow);
/* status words — always paired with text/icon */
--status-ok:var(--v-olive);--status-warn:var(--v-yellow);--status-danger:var(--v-danger);--status-info:var(--v-blue);--status-pending:var(--v-ink-soft);--status-off:var(--v-text-3);
/* type */
--font-display:"Bricolage Grotesque",ui-sans-serif,system-ui,sans-serif;
--font-text:"DM Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
--v-font-mono:ui-monospace,"SF Mono",Menlo,monospace;/* terminal only */
/* type scale — every font-size in the library is one of these steps; nothing sits between them.
   hero and display are headlines, section and title head blocks, lead opens a passage, reading is long-form
   copy, body is interface copy, control labels controls, small is helper text under a label, meta is
   secondary data, caps is the smallest step and the floor for any text. */
--fs-hero:72px;--fs-display:44px;--fs-section:26px;--fs-title:21px;--fs-lead:17px;--fs-reading:16px;--fs-body:15px;--fs-control:14px;--fs-small:13px;--fs-meta:12px;--fs-caps:11px;
--lh-hero:.95;/* @kind other */
--lh-display:1.05;/* @kind other */
--lh-title:1.2;/* @kind other */
--lh-body:1.45;/* @kind other */
--lh-control:1.2;/* @kind other */
/* weights — four steps only; the variable faces can do more, the system does not */
--fw-regular:400;/* @kind other */
--fw-medium:500;/* @kind other */
--fw-semibold:600;/* @kind other */
--fw-bold:700;/* @kind other */
--fw-display:var(--fw-medium);/* @kind other */
--fw-title:var(--fw-semibold);/* @kind other */
--fw-body:var(--fw-regular);/* @kind other */
--fw-control:var(--fw-medium);/* @kind other */
--fw-value:var(--fw-bold);/* @kind other */
--ls-display:-.015em;/* @kind other */
--ls-hero:-.03em;/* @kind other */
--ls-caps:.06em;/* @kind other */
/* space — the 4px grid. Padding, margin and gap use these steps; only 1-3px optical nudges stay raw. */
--s-1:4px;--s-2:8px;--s-3:12px;--s-4:16px;--s-5:20px;--s-6:24px;--s-7:28px;--s-8:32px;--s-10:40px;--s-12:48px;--s-16:64px;
/* layout [M] I15 → 1440 */
--shell-inset:28px;--sidebar-w:212px;--sidebar-w-mini:76px;--sidebar-gap:52px;--rail-w:360px;--rail-gap:40px;--topbar-h:44px;--content-max:1440px;
--card-pad:24px;--card-gap:16px;--row-pad:12px 16px;--item-h:64px;--content-offset:16px;--agenda-slot:80px;
/* radius — every corner is one of these steps */
--r-xs:4px;--r-sm:8px;--r-md:12px;--r-card-sm:16px;--r-card:20px;--r-panel:24px;--r-sheet:28px;--r-frame:40px;--r-pill:999px;
/* dimensions [M/O] */
--disk-sm:32px;
--disk-md:40px;
--disk-lg:48px;
--icon-sm:16px;
--icon-md:20px;
--icon-lg:24px;
--icon-stroke:1.6;/* @kind other */
--ctl-sm:32px;
--ctl-md:40px;
--ctl-lg:48px;
--ctl-xl:56px;
--utility:44px;
--utility-overlap:-4px;/* @kind other */
--dock-h:72px;--dock-action:56px;--dock-shoulder:24px;--assist-close:48px;--hex:24px;--edit-badge:36px;
--track-h:10px;--track-h-lg:14px;--track-h-sm:6px;--table-row:72px;--table-head:44px;--nav-row:40px;--date-col:44px;
--hit-min:44px;
/* borders [I] */
--bw-hair:1px;
--bw-featured:1.5px;
--bw-dash:1px dashed var(--v-text-2);/* @kind other */
/* elevation — app surfaces are flat; only floating layers get a shadow [I] */
--shadow-none:none;--shadow-float:0 12px 32px -12px rgba(17,17,17,.18);--shadow-lift:0 1px 0 rgba(17,17,17,.06);
/* z [I] */
--z-base:0;/* @kind other */
--z-sticky:10;/* @kind other */
--z-dock:20;/* @kind other */
--z-sheet:30;/* @kind other */
--z-assist:35;/* @kind other */
--z-dialog:40;/* @kind other */
--z-popover:45;/* @kind other */
--z-toast:50;/* @kind other */
--z-tooltip:60;/* @kind other */
/* motion [I] — decision: alive but unobtrusive */
--t-micro:120ms;/* @kind other */
--t-element:200ms;/* @kind other */
--t-max:300ms;/* @kind other */
--t-draw:600ms;/* @kind other */
--t-count:700ms;/* @kind other */
--breath:6s;/* @kind other */
--enter:cubic-bezier(.2,.8,.2,1);/* @kind other */
--exit:cubic-bezier(.4,0,1,1);/* @kind other */
/* ---- component parameters ----
   Per-instance knobs that components re-point on their own selectors (a hue for an accordion row, the fill a
   motion body paints, a skeleton's face). Registered here with their defaults so every declaration below is a
   known parameter, not an unregistered token. */
--pulse:34px;/* @kind spacing */
--pulse-c:var(--v-pink);/* @kind color */
--c:var(--v-beige);/* @kind color */
--hue:var(--v-pink);/* @kind color */
--hue-deep:var(--v-pink-deep);/* @kind color */
--hue-ink:var(--v-text);/* @kind color */
--wm-m:none;/* @kind other */
--wm:var(--v-beige-2);/* @kind color */
--skel:var(--v-skel-face);/* @kind color */
--sw:var(--v-pink);/* @kind color */
--dot:var(--v-border);/* @kind color */
--disk-bg:var(--v-beige);/* @kind color */
--mfill:transparent;/* @kind color */
--mstroke:transparent;/* @kind color */
--glide-bg:#14171B;/* @kind color */ /* the travelling lozenge is dark in BOTH themes so its cream label always reads */
--glide-fg:#F9FAFC;/* @kind color */
--v-on-accent:#14171B;/* @kind color */ /* ink on pink / yellow / olive / blue, both modes */
/* ---- fixed inks [I] — values that the component sheets painted as raw hex and that do NOT follow the mode switch (the visual is unchanged by tokenising them) ---- */
--ink-fixed:#111111;/* @kind color */ /* structure fills / borders that stay ink in dark mode */
--cream-fixed:#F6EFE2;/* @kind color */ /* cream label on the ink rail, both modes */
--mask-ink:#000000;/* @kind color */ /* opaque paint inside mask-image gradients — only its alpha matters */
--unavail-ink:#52565e;/* @kind color */ /* "unavailable" and disabled date-strip ink */
--alert-ink:#464951;/* @kind color */ /* alert body text and kicker */
--btn-disabled-ink:#52565e;/* @kind color */ /* disabled button label */
--nav-group-ink:#52565e;/* @kind color */ /* catalog rail group label */
--muted-foreground-ink:#2E2A24;/* @kind color */ /* muted text on ink-adjacent surfaces (notch, feature media, selected item) */
--muted-foreground-tinted:#4A443C;/* @kind color */ /* muted text on soft tints and cream cards */
/* ---- legacy kit values [I] — referenced only by legacy-aliases.css for consumers still on the retired names ---- */
--danger-deep:#E9A79F;/* @kind color */ /* the danger alert's deep tint */
--legacy-on-brand:#FDF6F9;/* @kind color */--legacy-accent-5:#E29A6A;/* @kind color */--legacy-success:#5C8C34;/* @kind color */--legacy-warning:#B9831C;/* @kind color */--legacy-info:#3F79B4;/* @kind color */--legacy-danger-fill:#A8402A;/* @kind color */--legacy-success-fill:#3F6B22;/* @kind color */
--rail-sel:rgba(251,244,230,.1);/* @kind color */
--rail-hover:rgba(251,244,230,.055);/* @kind color */
/* ---- the travelling selection: per-character timing [I] — the per-character timing IS the feature; js/flow.js reads these too ---- */
--t-flow-glide:.24s;/* @kind other */--t-flow-glide-h:.24s;/* @kind other */--t-flow-glide-land:.36s;/* @kind other */
--t-flow-stretch:.3s;/* @kind other */--t-flow-stretch-p1:.16s;/* @kind other */
--t-flow-jelly:.5s;/* @kind other */--t-flow-jelly-h:.44s;/* @kind other */--t-flow-jelly-hover:.3s;/* @kind other */--t-flow-jelly-land:.52s;/* @kind other */
--t-flow-comet:.34s;/* @kind other */--t-flow-comet-h:.3s;/* @kind other */--t-flow-comet-trail:.72s;/* @kind other */--t-flow-comet-trail-h:.6s;/* @kind other */
--t-flow-drop:.3s;/* @kind other */--t-flow-drop-gather:.14s;/* @kind other */--t-flow-drop-shoot:.18s;/* @kind other */--t-flow-drop-land:.3s;/* @kind other */
--t-flow-rubber:.36s;/* @kind other */--t-flow-rubber-lead:.2s;/* @kind other */
--t-flow-pebble:.46s;/* @kind other */--t-flow-pebble-h:.4s;/* @kind other */--t-flow-pebble-land:.5s;/* @kind other */
--t-flow-ripple:.36s;/* @kind other */--t-flow-ripple-h:.3s;/* @kind other */--t-flow-ripple-ring:.6s;/* @kind other */--t-flow-ripple-delay:.18s;/* @kind other */
--t-flow-halo:.4s;/* @kind other */--t-flow-halo-h:.34s;/* @kind other */--t-flow-halo-glow:.7s;/* @kind other */
--t-flow-hover:.22s;/* @kind other */--t-flow-radius:.3s;/* @kind other */--t-flow-radius-sm:.2s;/* @kind other */--t-flow-fade:.18s;/* @kind other */--t-flow-fade-sm:.16s;/* @kind other */
--t-flow-label:.2s;/* @kind other */--t-flow-label-delay:.1s;/* @kind other */--t-flow-still:60ms;/* @kind other */--t-flow-land-hold:900ms;/* @kind other */
--t-skel:1.4s;/* @kind other */--t-skel-sheen:2.4s;/* @kind other */--t-pulse:2.1s;/* @kind other */
--e-flow-glide:cubic-bezier(.2,.8,.2,1);/* @kind other */--e-flow-stretch:cubic-bezier(.3,1.15,.4,1);/* @kind other */--e-flow-stretch-p1:cubic-bezier(.4,0,.2,1);/* @kind other */
--e-flow-jelly:cubic-bezier(.3,1.3,.45,1);/* @kind other */--e-flow-jelly-hover:cubic-bezier(.3,1.25,.45,1);/* @kind other */--e-flow-comet:cubic-bezier(.2,.8,.2,1);/* @kind other */--e-flow-comet-trail:cubic-bezier(.2,.7,.15,1);/* @kind other */
--e-flow-drop:cubic-bezier(.3,1.25,.4,1);/* @kind other */--e-flow-drop-gather:cubic-bezier(.4,0,.6,1);/* @kind other */--e-flow-drop-shoot:cubic-bezier(.3,0,.2,1);/* @kind other */
--e-flow-rubber:cubic-bezier(.3,1.3,.4,1);/* @kind other */--e-flow-rubber-lead:cubic-bezier(.2,.9,.3,1);/* @kind other */--e-flow-pebble:cubic-bezier(.32,1.25,.42,1);/* @kind other */
--e-flow-ripple:cubic-bezier(.2,.8,.2,1);/* @kind other */--e-flow-halo:cubic-bezier(.3,1.2,.4,1);/* @kind other */--e-flow-settle:cubic-bezier(.2,.7,.2,1);/* @kind other */
/* ---- ui.js timings [I] ---- */
--t-tooltip:220ms;/* @kind other */--t-hovercard:300ms;/* @kind other */--t-toast:5000ms;/* @kind other */--t-focus-settle:120ms;/* @kind other */
}
/* dark */
:root[data-mode="dark"], .dark{
color-scheme:dark;
/* surfaces */
--v-canvas:#15171A;--v-paper:#20242A;--v-beige:#292F37;--v-beige-2:#20242a;--v-cream-pill:#20242A;
/* ink and text */
--v-ink:#f3f4f4;--v-ink-soft:#bdc1c5;--v-on-ink:#15171A;--v-on-accent:#14171B;--v-text:#f3f4f4;--v-text-2:#bdc1c5;--v-text-3:#a9aeb4;--alert-ink:#bdc1c5;--nav-group-ink:#a9aeb4;--unavail-ink:#a9aeb4;--btn-disabled-ink:#a9aeb4;
/* edges */
--v-border:#4e5359;--v-edge:#8c9094;--v-brand:#F0A4CC;--v-scrim:rgba(0,0,0,.66);
/* accents */
--v-pink:#F0A4CC;--v-pink-deep:#d693b7;--v-pink-soft:#3f3742;--v-olive:#A8BC75;--v-olive-deep:#96a86a;--v-olive-soft:#343b35;--v-olive-ink:#A8BC75;--v-blue:#95BAE8;--v-blue-deep:#86a6cf;--v-blue-soft:#323b47;--v-yellow:#F1D369;--v-yellow-deep:#d6bc60;--v-yellow-soft:#3f3e33;--v-accent-ink:#F0A4CC;
/* danger */
--v-danger:#D7473C;--v-danger-fill:#B92D28;--v-danger-ink:#e3786f;--v-danger-soft:#36282c;
/* structure */
--v-structure:#14171B;--on-structure:#F9FAFC;--structure-quiet:#242931;--structure-line:#565D68;--structure-text:#E2E6ED;--glide-bg:#14171B;--glide-fg:#F9FAFC;
/* states */
--v-skel-face:#292F37;--v-skel-sheen:#20242A;--v-skel-edge:#4e5359;--v-disabled-ink:#a9aeb4;--v-disabled-face:#292F37;--v-disabled-edge:#8c9094;--v-disabled-fill:#292F37;--switch-knob:#20242A;--switch-knob-on:#14171B;--sel-bg:#433a46;--sel-edge:#F0A4CC;--sel-ink:#f3f4f4;
/* semantic surfaces: identity hues over the dark canvas, so a tinted region keeps its meaning and its text contrast */
--surface-quiet:#20242A;--surface-work:#2e3641;--surface-automation:#393932;--surface-memory:#303633;--surface-library:#39333d;--surface-ai:#2e3641;--surface-alert:#383034;
/* status */
--status-ok-bg:#303633;--status-ok-ink:#adc07c;--status-warn-bg:#393932;--status-warn-ink:#F1D369;--status-danger-bg:#36282c;--status-danger-ink:#e99891;--status-info-bg:#2e3641;--status-info-ink:#97bce9;--status-pending-bg:#33373d;--status-pending-ink:#bdc1c5;
/* elevation */
--shadow-float:0 12px 32px -12px rgba(0,0,0,.6);
}
@media (prefers-reduced-motion:reduce){:root{
--t-micro:0ms;/* @kind other */
--t-element:0ms;/* @kind other */
--t-max:0ms;/* @kind other */
--t-draw:0ms;/* @kind other */
--t-count:0ms;/* @kind other */
}}

/* ---- Reset and shared rules (scoped to [data-slot] so the host page is untouched) ---- */
/* Reset follows the reference. Component rules live in layers so accessibility
   overrides can come last without an importance flag. */
@layer base {
  :where([data-slot]) *,
  :where([data-slot]),
  :where([data-slot]) *::before,
  :where([data-slot])::before,
  :where([data-slot]) *::after,
  :where([data-slot])::after { box-sizing:border-box; border-width:0; border-style:none; }
  :where([data-slot]:not([data-slot] [data-slot], [data-slot="shape"], [data-slot="shape-morph"], [data-slot="icon"], [data-slot="animated-icon"], [data-slot="state-chevron"])) { color:var(--v-text); font-family:var(--font-text); font-size:var(--fs-body); line-height:var(--lh-body); font-weight:var(--fw-body); -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; }
  :where([data-slot]) h1,
  h1:where([data-slot]),
  :where([data-slot]) h2,
  h2:where([data-slot]),
  :where([data-slot]) h3,
  h3:where([data-slot]),
  :where([data-slot]) h4,
  h4:where([data-slot]),
  :where([data-slot]) p,
  p:where([data-slot]),
  :where([data-slot]) figure,
  figure:where([data-slot]),
  :where([data-slot]) ul,
  ul:where([data-slot]),
  :where([data-slot]) ol,
  ol:where([data-slot]) { margin:0; }
  /* Headings balance their lines so a short last word never sits alone; long copy avoids orphans. */
  :where([data-slot]) h1,
  h1:where([data-slot]),
  :where([data-slot]) h2,
  h2:where([data-slot]),
  :where([data-slot]) h3,
  h3:where([data-slot]),
  :where([data-slot]) h4,
  h4:where([data-slot]) { text-wrap:balance; }
  :where([data-slot]) p,
  p:where([data-slot]) { text-wrap:pretty; }
  :where([data-slot]) button,
  button:where([data-slot]),
  :where([data-slot]) input,
  input:where([data-slot]),
  :where([data-slot]) select,
  select:where([data-slot]),
  :where([data-slot]) textarea,
  textarea:where([data-slot]) { font:inherit; color:inherit; }
  :where([data-slot]) code,
  code:where([data-slot]),
  :where([data-slot]) pre,
  pre:where([data-slot]),
  :where([data-slot]) samp,
  samp:where([data-slot]) { font-family:monospace; }
  :where([data-slot]) button,
  button:where([data-slot]) { background:none; border:0; padding:0; cursor:pointer; }
  :where([data-slot]) :where(a[href],area[href],summary,label[for],label:has(input),select,input:is([type="checkbox"],[type="radio"],[type="range"],[type="button"],[type="submit"],[type="reset"],[type="file"]),[role="button"],[role="checkbox"],[role="radio"],[role="switch"],[role="tab"],[role="option"],[role="menuitem"],[role="menuitemcheckbox"],[role="menuitemradio"]),
  :where(a[href],area[href],summary,label[for],label:has(input),select,input:is([type="checkbox"],[type="radio"],[type="range"],[type="button"],[type="submit"],[type="reset"],[type="file"]),[role="button"],[role="checkbox"],[role="radio"],[role="switch"],[role="tab"],[role="option"],[role="menuitem"],[role="menuitemcheckbox"],[role="menuitemradio"]):where([data-slot]) { cursor:pointer; }
  /* Hit-test the control, not changing decorative SVG paths. Icon feedback
     already listens to the owning control. Standalone interactive art is intact. */
  :where(button,a[href],summary,[role="button"],[role="tab"],[role^="menuitem"],[role="option"],[role="checkbox"],[role="radio"],[role="switch"])
    :where([data-slot="icon"][aria-hidden="true"],[data-slot="animated-icon"]:has([data-slot="icon"][aria-hidden="true"]),[data-slot="shape"][aria-hidden="true"],[data-slot="state-chevron"][aria-hidden="true"]) { pointer-events:none; }
  /* Preserve the original browser touch feedback on library elements. */
  :where([data-slot]) { -webkit-tap-highlight-color:initial; }
  :where([data-slot]) img,
  img:where([data-slot]),
  :where([data-slot]) svg,
  svg:where([data-slot]) { display:block; max-width:100%; }
  :where([data-slot]) a,
  a:where([data-slot]) { color:var(--v-text); text-underline-offset:2px; }
  /* The reference preserves native link decoration; Tailwind preflight resets it. */
  :where([data-slot]) a:any-link,
  a:any-link:where([data-slot]) { text-decoration-line:underline; }
  :where([data-slot]) a:hover,
  a:hover:where([data-slot]) { color:var(--v-text-2); }
  :where([data-slot]) :focus-visible,
  :focus-visible:where([data-slot]) { outline:2px solid var(--v-brand); outline-offset:2px; border-radius:var(--r-sm); }
  :where([data-slot]) *::selection,
  :where([data-slot])::selection { background:var(--v-pink); color:var(--ink-fixed); }
}
/* Disabled controls remain hit-testable so their unavailable cursor is visible.
   Their native primitive or event guard still owns activation prevention. */
:where([data-slot]) :is(button,input,select,textarea,[role],[data-slot]):is(:disabled,[aria-disabled="true"],[data-disabled]:not([data-disabled="false"])),
  :is(button,input,select,textarea,[role],[data-slot]):is(:disabled,[aria-disabled="true"],[data-disabled]:not([data-disabled="false"])):where([data-slot]),
  :where([data-slot]) label:has(input:disabled),
  label:has(input:disabled):where([data-slot]) { cursor:not-allowed; }
:where([data-slot]) :is([aria-disabled="true"],[data-disabled]:not([data-disabled="false"]),label:has(input:disabled)) :where(span,svg,path),
  :is([aria-disabled="true"],[data-disabled]:not([data-disabled="false"]),label:has(input:disabled)) :where(span,svg,path):where([data-slot]) { cursor:inherit; }
@layer components {
  :where([data-slot]) .v-body-2,
  .v-body-2:where([data-slot]) { font-size:var(--fs-body); line-height:1.5; color:var(--v-text-2); }
  :where([data-slot]) .v-meta,
  .v-meta:where([data-slot]) { font-size:var(--fs-meta); line-height:1.3; color:var(--v-text-2); }
  :where([data-slot]) .v-id,
  .v-id:where([data-slot]) { font-variant-numeric:tabular-nums; letter-spacing:.02em; }
  :where([data-slot]) .v-icon,
  .v-icon:where([data-slot]) { width:var(--icon-md); height:var(--icon-md); flex:none; stroke-width:var(--icon-stroke); fill:none; }
}
@layer cojeev-accessibility {
  :where([data-slot]) [hidden]:not([hidden="until-found"]),
  [hidden]:not([hidden="until-found"]):where([data-slot]) { display:none; }
  :where([data-slot]) .v-sr,
  .v-sr:where([data-slot]) { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0 0 0 0); clip-path:inset(50%); white-space:nowrap; border:0; inset-inline-start:0; inset-block-start:0; }
  @media (prefers-reduced-motion:reduce) {
    :where([data-slot]) *,
  :where([data-slot]),
  :where([data-slot]) *::before,
  :where([data-slot])::before,
  :where([data-slot]) *::after,
  :where([data-slot])::after { animation-duration:0s; animation-iteration-count:1; transition-duration:0s; scroll-behavior:auto; }
  }
}

/* ---- meta-balls styles ---- */
@layer cojeev-states {
.v-meta-balls { --effect-accent:var(--v-pink); }
.v-meta-balls canvas { display:block; }
}
`;

function CojeevStyles() {
  return (
    <style href="000h-meta-balls" precedence="default">
      {COJEEV_CSS}
    </style>
  );
}
