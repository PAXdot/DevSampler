// Dock from 000h by Cojeev — MIT licence — docs, variants and the full library: https://cojeev.com/ui/docs/dock/
"use client";

import * as React from "react";
import { useSyncExternalStore } from "react";
import * as Primitive from "@radix-ui/react-scroll-area";
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import type { Transition } from "motion";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { twMerge } from "tailwind-merge";

// ---- registry/cojeev/lib/utils.ts (inlined) ----
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

// ---- registry/cojeev/motion/use-reduced-motion.ts (inlined) ----
let query:MediaQueryList|undefined
const listeners_UseReducedMotion=new Set<()=>void>()
const changed=()=>listeners_UseReducedMotion.forEach(listener=>listener())
function media(){return query??=window.matchMedia('(prefers-reduced-motion: reduce)')}
function subscribe(listener:()=>void){
 const q=media();if(!listeners_UseReducedMotion.size)q.addEventListener('change',changed);listeners_UseReducedMotion.add(listener)
 return ()=>{listeners_UseReducedMotion.delete(listener);if(!listeners_UseReducedMotion.size){q.removeEventListener('change',changed);query=undefined}}
}
function snapshot_UseReducedMotion(){return typeof window==='undefined'?false:media().matches}
const serverSnapshot_UseReducedMotion=()=>false
/** Dynamic accessibility preference shared by genuine in-progress indicators and other component roles. */
function useReducedMotion(){return useSyncExternalStore(subscribe,snapshot_UseReducedMotion,serverSnapshot_UseReducedMotion)}

// ---- registry/cojeev/motion/choreography.ts (inlined) ----
/** The shared rhythm. Durations and stagger are seconds, matching Motion's API. */
const motionTokens = {
  spring: {
    responsive: { type: "spring", stiffness: 360, damping: 32, mass: .85 },
    expressive: { type: "spring", stiffness: 260, damping: 22, mass: 1 },
    gentle: { type: "spring", stiffness: 180, damping: 28, mass: 1 },
  },
  ease: { enter: [.2, .8, .2, 1], exit: [.4, 0, 1, 1], settle: [.2, .65, .25, 1] },
  duration: { quick: .16, enter: .32, exit: .18 },
  stagger: .035,
} as const;
const isQuiet = (snapshot: SettingsSnapshot) => snapshot.motion.mode === "off" || snapshot.flow.variant === "off";
function resolveChoreography(snapshot: SettingsSnapshot, reduced: boolean): { quiet: boolean; transition: Transition } {
  const quiet = reduced || isQuiet(snapshot);
  if (quiet) return { quiet, transition: { duration: 0, delay: 0 } };
  const speed = snapshot.flow.speed;
  const spring = ["jelly", "rubber", "drop", "pebble"].includes(snapshot.flow.variant)
    ? motionTokens.spring.expressive : motionTokens.spring.responsive;
  return { quiet, transition: { ...spring, stiffness: spring.stiffness * speed * speed, damping: spring.damping * speed } };
}
/** Reactive settings subscription for reusable React surfaces. */
function useChoreography() {
  const snapshot = React.useSyncExternalStore(subscribeSettings, getSettingsSnapshot, getServerSettingsSnapshot);
  const reduced = useReducedMotion();
  return React.useMemo(() => resolveChoreography(snapshot, reduced), [snapshot, reduced]);
}

// ---- registry/cojeev/motion/refs.ts (inlined) ----
/** React 19 callback refs may return their own teardown; object refs are mutable commit targets. */
function assignMotionRef<T>(ref:React.Ref<T>|undefined,value:T|null):()=>void{
 if(typeof ref==='function'){
  const cleanup=ref(value)
  return ()=>{if(typeof cleanup==='function')cleanup();else ref(null)}
 }
 if(ref)ref.current=value
 return ()=>{if(ref)ref.current=null}
}

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

// ---- registry/cojeev/motion/scroll-thumb.ts (inlined) ----
/** A fixed-topology contour in a 20 × 100 viewBox. Only its edges deform. */
function scrollThumbPath(engagement: number, bias: number, velocity = 0, pressure = 0) {
  const active = Math.max(0, Math.min(1, Number.isFinite(engagement) ? engagement : 0));
  const speed = Math.max(-1, Math.min(1, Number.isFinite(velocity) ? velocity : 0));
  const pressed = Math.max(0, Math.min(1, Number.isFinite(pressure) ? pressure : 0));
  const bend = Math.max(-1, Math.min(1, Number.isFinite(bias) ? bias : 0)) * active;
  const half = 5.4 + active * 1.6 + pressed * .8;
  const upper = half - speed * 1.15, lower = half + speed * 1.15;
  const waist = half - pressed * 2.2;
  const lean = bend * .8;
  const f = (n: number) => Number(n.toFixed(3));
  return `M 10 1 C ${f(10 + upper * .7)} 1 ${f(10 + upper)} 5 ${f(10 + upper)} 14 C ${f(10 + upper)} 28 ${f(10 + waist + lean)} 36 ${f(10 + waist + lean)} 50 C ${f(10 + waist + lean)} 66 ${f(10 + lower)} 75 ${f(10 + lower)} 87 C ${f(10 + lower)} 95 ${f(10 + lower * .65)} 99 10 99 C ${f(10 - lower * .7)} 99 ${f(10 - lower)} 95 ${f(10 - lower)} 86 C ${f(10 - lower)} 72 ${f(10 - waist + lean)} 64 ${f(10 - waist + lean)} 50 C ${f(10 - waist + lean)} 34 ${f(10 - upper)} 25 ${f(10 - upper)} 13 C ${f(10 - upper)} 5 ${f(10 - upper * .65)} 1 10 1 Z`;
}
/** Signed native pixels/ms become a bounded contour impulse, never scroll momentum. */
function scrollVelocity(delta:number,elapsed:number) {
  if(!Number.isFinite(delta)||!Number.isFinite(elapsed)||elapsed<=0)return 0;
  return Math.tanh(delta/Math.max(8,elapsed)*.85);
}

// ---- registry/cojeev/ui/scroll-area.tsx (inlined) ----
function useScrollFeedback(host:React.RefObject<HTMLDivElement|null>,mountedElement:HTMLDivElement|null,orientation:"vertical"|"horizontal",documentScroll=false,scrollElement?:HTMLElement|null) {
  const {quiet}=useChoreography();
  const {enabled,inView}=useMotionVisibility(host,mountedElement);
  const [dragging,setDragging]=React.useState(false);
  const hovered=React.useRef(false);
  const engagementTarget=useMotionValue(0),pointerTarget=useMotionValue(0),velocityTarget=useMotionValue(0),pressureTarget=useMotionValue(0);
  const engagement=useSpring(engagementTarget,motionTokens.spring.responsive),bend=useSpring(pointerTarget,motionTokens.spring.gentle),velocity=useSpring(velocityTarget,motionTokens.spring.responsive),pressure=useSpring(pressureTarget,motionTokens.spring.expressive);
  const contour=useTransform([engagement,bend,velocity,pressure],values=>scrollThumbPath(...values as [number,number,number,number]));
  const gripOffset=useTransform(velocity,value=>value*5);
  const active=!quiet&&enabled&&inView;
  React.useEffect(()=>{
    if(!active){
      for(const value of [engagementTarget,pointerTarget,velocityTarget,pressureTarget,engagement,bend,velocity,pressure])value.jump(0);
      host.current?.removeAttribute("data-scrolling");
    }else{engagementTarget.set(dragging?1:hovered.current ? .65 : 0);pressureTarget.set(dragging?1:0);}
  },[active,dragging,host,engagementTarget,pointerTarget,velocityTarget,pressureTarget,engagement,bend,velocity,pressure]);
  React.useEffect(()=>{
    const rail=host.current;
    const owner=scrollElement??(documentScroll?document.scrollingElement:rail?.closest('[data-slot="scroll-area"]')?.querySelector<HTMLElement>('[data-radix-scroll-area-viewport]'));
    if(!rail||!owner)return;
    const read=()=>orientation==="vertical"?owner.scrollTop:owner.scrollLeft;
    let previous=read(),time=performance.now(),timer:ReturnType<typeof setTimeout>|undefined;
    const onScroll=()=>{
      const next=read(),now=performance.now(),delta=next-previous,impulse=scrollVelocity(delta,now-time);
      previous=next;time=now;
      if(!delta)return;
      rail.dataset.direction=delta>0?"forward":"backward";
      if(!active)return;
      rail.dataset.scrolling="true";rail.dataset.scrollVelocity=String(Number(impulse.toFixed(3)));velocityTarget.set(impulse);
      clearTimeout(timer);timer=setTimeout(()=>{velocityTarget.set(0);rail.removeAttribute("data-scrolling");rail.removeAttribute("data-scroll-velocity")},120);
    };
    const source=documentScroll?window:owner;
    source.addEventListener("scroll",onScroll,{passive:true});
    return()=>{clearTimeout(timer);source.removeEventListener("scroll",onScroll);};
  },[host,mountedElement,orientation,documentScroll,scrollElement,active,velocityTarget]);
  const hover=(value:boolean)=>{hovered.current=value;if(active)engagementTarget.set(dragging?1:value ? .65 : 0);if(!value&&!dragging)pointerTarget.set(0);};
  const press=(value:boolean)=>{setDragging(value);if(active){pressureTarget.set(value?1:0);engagementTarget.set(value?1:hovered.current ? .65 : 0);}if(!value)pointerTarget.set(0);};
  const point=(event:React.PointerEvent<HTMLDivElement>)=>{
    const thumb=host.current?.querySelector<HTMLElement>('[data-slot="scroll-area-thumb"],[data-slot="page-scrollbar-thumb"]');
    if(!active||!thumb)return;
    const rect=thumb.getBoundingClientRect(),offset=orientation==="vertical"?event.clientY-rect.top:event.clientX-rect.left,length=orientation==="vertical"?rect.height:rect.width;
    pointerTarget.set(Math.max(-1,Math.min(1,offset/Math.max(1,length)*2-1)));
  };
  return {contour,gripOffset,active,dragging,hover,press,point};
}
function ScrollThumbPaint({feedback,orientation="vertical"}:{feedback:ReturnType<typeof useScrollFeedback>;orientation?:"vertical"|"horizontal"}) {
  return <><svg className="v-scroll__contour" viewBox={orientation==="vertical"?"0 0 20 100":"0 0 100 20"} preserveAspectRatio="none" aria-hidden="true" focusable="false"><motion.path d={feedback.contour} transform={orientation==="horizontal"?"matrix(0 1 1 0 0 0)":undefined}/></svg><motion.span className="v-scroll__grip" aria-hidden="true" style={orientation==="vertical"?{y:feedback.gripOffset}:{x:feedback.gripOffset}}><i/><i/><i/></motion.span></>;
}
/** Radix positions its thumb from a `requestAnimationFrame` loop it invokes immediately.
 *  Production minifiers read that IIFE's `@__PURE__` callee as a pure call and delete the
 *  loop, leaving the thumb written only on a gesture's first frame. Repeat Radix's own
 *  geometry from the live DOM so the paint survives any build, in any bundle a consumer
 *  makes of this file. The follow loop is armed by a scroll event and releases itself as
 *  soon as the position settles, so an idle scrollport costs nothing. */
function useThumbTracking(scrollbar: HTMLDivElement | null, orientation: "vertical" | "horizontal") {
  React.useEffect(() => {
    const viewport = scrollbar?.closest('[data-slot="scroll-area"]')?.querySelector<HTMLElement>("[data-radix-scroll-area-viewport]");
    if (!scrollbar || !viewport) return;
    const vertical = orientation === "vertical";
    const rail = getComputedStyle(scrollbar);
    let frame = 0, previous = NaN;
    const sync = () => {
      const position = vertical ? viewport.scrollTop : viewport.scrollLeft;
      const moved = position !== previous;
      previous = position;
      const thumb = scrollbar.querySelector<HTMLElement>('[data-slot="scroll-area-thumb"]');
      if (!thumb) return moved;
      const padding = vertical
        ? parseFloat(rail.paddingTop) + parseFloat(rail.paddingBottom)
        : parseFloat(rail.paddingLeft) + parseFloat(rail.paddingRight);
      const travel = Math.max(0, (vertical ? scrollbar.clientHeight : scrollbar.clientWidth) - padding - (vertical ? thumb.offsetHeight : thumb.offsetWidth));
      const maxScroll = Math.max(0, vertical ? viewport.scrollHeight - viewport.offsetHeight : viewport.scrollWidth - viewport.offsetWidth);
      // A right-to-left scrollport counts left from zero, so its thumb travels negative.
      const reversed = !vertical && rail.direction === "rtl";
      const clamped = reversed ? Math.min(0, Math.max(-maxScroll, position)) : Math.min(maxScroll, Math.max(0, position));
      const offset = maxScroll > 0 ? clamped / maxScroll * travel : 0;
      thumb.style.transform = vertical ? `translate3d(0, ${offset}px, 0)` : `translate3d(${offset}px, 0, 0)`;
      return moved;
    };
    // Smooth, keyboard and inertial scrolling all keep moving after their last scroll
    // event, so follow the position until it stops changing rather than trusting events.
    const follow = () => { frame = sync() ? requestAnimationFrame(follow) : 0; };
    const onScroll = () => { sync(); if (!frame) frame = requestAnimationFrame(follow); };
    sync();
    viewport.addEventListener("scroll", onScroll, { passive: true });
    // An expanded or collapsed group changes the range without any scrolling of its own.
    const resize = new ResizeObserver(() => { previous = NaN; sync(); });
    resize.observe(viewport);
    if (viewport.firstElementChild) resize.observe(viewport.firstElementChild);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      resize.disconnect();
      viewport.removeEventListener("scroll", onScroll);
    };
  }, [scrollbar, orientation]);
}
const scrollAreaVariants = cva("v-scroll", {
  variants: { variant: { default: "", ink: "-ink", plain: "-plain" } },
  defaultVariants: { variant: "default" },
});
type ScrollbarVariant = "organic" | "rounded" | "minimal";
type ScrollbarAppearanceProps = {
  /** Visible thumb thickness in pixels. The 24px rail remains the hit target. */
  scrollbarSize?: number;
  /** Thumb and active-rail color. */
  scrollbarColor?: string;
  /** Organic contour is the default; rounded and minimal use simpler paint. */
  scrollbarVariant?: ScrollbarVariant;
};
const defaultScrollbarAppearance = {
  scrollbarSize: 6,
  scrollbarColor: "var(--v-text-2)",
  scrollbarVariant: "organic",
} as const satisfies Required<ScrollbarAppearanceProps>;
const ScrollbarAppearanceContext = React.createContext<Required<ScrollbarAppearanceProps>>(defaultScrollbarAppearance);
function scrollbarAppearance(
  { scrollbarSize, scrollbarColor, scrollbarVariant }: ScrollbarAppearanceProps,
  inherited: Required<ScrollbarAppearanceProps> = defaultScrollbarAppearance,
) {
  scrollbarSize ??= inherited.scrollbarSize;
  scrollbarColor ??= inherited.scrollbarColor;
  scrollbarVariant ??= inherited.scrollbarVariant;
  const size = Number.isFinite(scrollbarSize) ? Math.max(2, Math.min(16, scrollbarSize)) : 6;
  return {
    size,
    color: scrollbarColor,
    variant: scrollbarVariant,
    style: {
      "--scrollbar-size": `${size}px`,
      ...(scrollbarColor ? { "--scrollbar-color": scrollbarColor } : {}),
    } as React.CSSProperties,
  };
}
type ScrollAreaProps = React.ComponentProps<typeof Primitive.Root> &
  VariantProps<typeof scrollAreaVariants> & {
    viewportClassName?: string;
    /** Native viewport attributes, including a ref, scroll listener or accessible name. */
    viewportProps?: React.ComponentProps<typeof Primitive.Viewport>;
    /** Compose a primitive around the actual scrolling element, preserving its ref. */
    viewportWrapper?: (viewport: React.ReactElement) => React.ReactNode;
  } & ScrollbarAppearanceProps;
function ScrollViewport({ style, ...props }: React.ComponentProps<typeof Primitive.Viewport>) {
  // An asChild parent such as Select.Viewport supplies an overflow shorthand.
  // Normalize it before Radix writes its own axis styles to the same DOM node.
  const { overflow, ...rest } = style ?? {};
  const axes = typeof overflow === "string" ? overflow.split(/\s+/) : [];
  const normalized = axes.length ? { ...rest, overflowX: rest.overflowX ?? axes[0], overflowY: rest.overflowY ?? axes[1] ?? axes[0] } as React.CSSProperties : rest;
  return <Primitive.Viewport {...props} style={normalized} />;
}
function ScrollArea({ className, variant, children, viewportClassName, viewportProps, viewportWrapper, type = "auto", scrollbarSize, scrollbarColor, scrollbarVariant, style, ...props }: ScrollAreaProps) {
  const inheritedAppearance = React.useContext(ScrollbarAppearanceContext);
  const appearance = scrollbarAppearance({ scrollbarSize, scrollbarColor, scrollbarVariant }, inheritedAppearance);
  const viewport = (
    <ScrollViewport
      data-slot="scroll-area-viewport"
      data-part="viewport"
      tabIndex={0}
      role="region"
      aria-label={props["aria-label"] ?? "Scrollable content"}
      {...viewportProps}
      className={cn("v-scroll__viewport", viewportClassName, viewportProps?.className)}
    >{children}</ScrollViewport>
  );
  const value = React.useMemo(() => ({ scrollbarSize: appearance.size, scrollbarColor: appearance.color, scrollbarVariant: appearance.variant }), [appearance.size, appearance.color, appearance.variant]);
  return <ScrollbarAppearanceContext.Provider value={value}>
    <Primitive.Root data-slot="scroll-area" data-part="root" data-scrollbar-variant={appearance.variant} type={type} className={cn(scrollAreaVariants({ variant }), className)} style={{ ...appearance.style, ...style }} {...props}>
      {viewportWrapper ? viewportWrapper(viewport) : viewport}
      <ScrollBar scrollbarSize={appearance.size} scrollbarColor={appearance.color} scrollbarVariant={appearance.variant} />
      <Primitive.Corner data-slot="scroll-area-corner" />
    </Primitive.Root>
  </ScrollbarAppearanceContext.Provider>;
}
type ScrollBarProps = React.ComponentProps<typeof Primitive.Scrollbar> & ScrollbarAppearanceProps;
function ScrollBar({
  className,
  ref,
  scrollbarSize,
  scrollbarColor,
  scrollbarVariant,
  style,
  orientation = "vertical",
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onLostPointerCapture,
  ...props
}: ScrollBarProps) {
  const inheritedAppearance = React.useContext(ScrollbarAppearanceContext);
  const appearance = scrollbarAppearance({ scrollbarSize, scrollbarColor, scrollbarVariant }, inheritedAppearance);
  const host = React.useRef<HTMLDivElement>(null);
  const [mountedElement, setMountedElement] = React.useState<HTMLDivElement | null>(null);
  const hostRef = React.useCallback((element: HTMLDivElement | null) => {
    host.current = element;
    setMountedElement(element);
    const release = assignMotionRef(ref, element);
    return () => { host.current = null; setMountedElement(null); release(); };
  }, [ref]);
  const feedback=useScrollFeedback(host,mountedElement,orientation);
  const {active,dragging}=feedback;
  useThumbTracking(mountedElement,orientation);
  return (
    <Primitive.Scrollbar
      ref={hostRef}
      data-slot="scroll-area-scrollbar"
      data-dragging={dragging ? "true" : undefined}
      data-motion={active ? "on" : "off"}
      data-scrollbar-variant={appearance.variant}
      orientation={orientation}
      className={cn("v-scroll__bar", className)}
      style={{ ...appearance.style, ...style }}
      {...props}
      onPointerEnter={event => { onPointerEnter?.(event); feedback.hover(true); feedback.point(event); }}
      onPointerLeave={event => { onPointerLeave?.(event); feedback.hover(false); }}
      onPointerDown={event => { onPointerDown?.(event); if (event.defaultPrevented || event.button !== 0) return; feedback.press(true); feedback.point(event); }}
      onPointerMove={event => { onPointerMove?.(event); feedback.point(event); }}
      onPointerUp={event => { onPointerUp?.(event); feedback.press(false); }}
      onPointerCancel={event => { onPointerCancel?.(event); feedback.press(false); }}
      onLostPointerCapture={event => { onLostPointerCapture?.(event); feedback.press(false); }}
    >
      <Primitive.Thumb data-slot="scroll-area-thumb" data-part="thumb" className="v-scroll__thumb">
        {appearance.variant === "organic" && <ScrollThumbPaint feedback={feedback} orientation={orientation}/>}
      </Primitive.Thumb>
    </Primitive.Scrollbar>
  );
}

// ---- registry/cojeev/ui/dock.tsx ----
export type DockVariant = "glass" | "shelf" | "rail";
export type DockItem = {
  value: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
  badge?: React.ReactNode;
  onSelect?: (value: string) => void;
};
export type DockProps = Omit<
  React.ComponentProps<"nav">,
  "children" | "defaultValue" | "onChange"
> & {
  items: DockItem[];
  variant?: DockVariant;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Base icon-button size, clamped to 32–72 CSS pixels. */
  itemSize?: number;
  /** Interaction strength, clamped to 1–2. Glass and shelf use the full scale; rail maps it to a restrained 1–1.12 response. */
  magnification?: number;
};
const bounded = (
  value: number | undefined,
  fallback: number,
  low: number,
  high: number,
) =>
  Number.isFinite(value)
    ? Math.max(low, Math.min(high, value as number))
    : fallback;
const firstEnabledValue = (items: DockItem[]) =>
  items.find((item) => !item.disabled)?.value;
/**
 * A labelled action launcher with macOS-inspired proximity response.
 * It changes local application state through callbacks; it never launches native apps.
 */
function DockImpl({
  items,
  variant = "glass",
  value,
  defaultValue,
  onValueChange,
  itemSize: requestedItemSize = 52,
  magnification: requestedMagnification = 1.65,
  className,
  style,
  ref,
  dir,
  onPointerMove,
  onPointerLeave,
  onPointerDownCapture,
  onPointerUpCapture,
  onPointerCancelCapture,
  onFocusCapture,
  onBlurCapture,
  onKeyDown,
  ...props
}: DockProps) {
  const itemSize = bounded(requestedItemSize, 52, 32, 72);
  const magnification = bounded(requestedMagnification, 1.65, 1, 2);
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? firstEnabledValue(items),
  );
  const activeValue = value ?? uncontrolledValue;
  const [focusIndex, setFocusIndex] = React.useState<number | null>(null);
  const [pointerIndex, setPointerIndex] = React.useState<number | null>(null);
  const [scales, setScales] = React.useState<number[]>(() =>
    items.map(() => 1),
  );
  const buttons = React.useRef<Array<HTMLButtonElement | null>>([]);
  const root = React.useRef<HTMLElement | null>(null);
  const [inheritedDirection, setInheritedDirection] = React.useState<
    "ltr" | "rtl"
  >("ltr");
  const scrollDirection =
    dir === "rtl" || dir === "ltr" ? dir : inheritedDirection;
  React.useLayoutEffect(() => {
    if (dir === "rtl" || dir === "ltr" || !root.current) return;
    const read = () =>
      setInheritedDirection(
        getComputedStyle(root.current!).direction === "rtl" ? "rtl" : "ltr",
      );
    read();
    const observer = new MutationObserver(read);
    for (
      let node: HTMLElement | null = root.current;
      node;
      node = node.parentElement
    )
      observer.observe(node, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, [dir]);
  const pointerPress = React.useRef(false);
  const { quiet } = useChoreography();
  const attach = React.useCallback(
    (node: HTMLElement | null) => {
      root.current = node;
      return assignMotionRef(ref, node);
    },
    [ref],
  );

  const scaleForDistance = React.useCallback(
    (distance: number, reach: number) => {
      if (quiet || distance >= reach) return 1;
      const influence = (Math.cos((Math.PI * distance) / reach) + 1) / 2;
      return 1 + (magnification - 1) * influence;
    },
    [magnification, quiet],
  );

  const focusScales = React.useCallback(
    (index: number | null) => {
      if (index === null || quiet) return items.map(() => 1);
      return items.map((_, candidate) => {
        const distance = Math.abs(candidate - index);
        if (distance === 0) return magnification;
        if (distance === 1) return 1 + (magnification - 1) * 0.34;
        return 1;
      });
    },
    [items, magnification, quiet],
  );

  const select = (item: DockItem) => {
    if (item.disabled) return;
    if (value === undefined) setUncontrolledValue(item.value);
    onValueChange?.(item.value);
    item.onSelect?.(item.value);
  };

  const moveFocus = (from: number, direction: 1 | -1) => {
    if (!items.some((item) => !item.disabled)) return;
    let candidate = from;
    for (let count = 0; count < items.length; count += 1) {
      candidate = (candidate + direction + items.length) % items.length;
      if (!items[candidate]?.disabled) {
        buttons.current[candidate]?.focus();
        return;
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    const target =
      event.target instanceof Element
        ? event.target.closest<HTMLButtonElement>("button[data-dock-index]")
        : null;
    if (!target) return;
    const index = Number(target.dataset.dockIndex);
    const direction = getComputedStyle(event.currentTarget).direction;
    let movement: 1 | -1 | undefined;
    if (variant === "rail") {
      if (event.key === "ArrowDown") movement = 1;
      if (event.key === "ArrowUp") movement = -1;
    } else {
      if (event.key === "ArrowRight") movement = direction === "rtl" ? -1 : 1;
      if (event.key === "ArrowLeft") movement = direction === "rtl" ? 1 : -1;
    }
    if (movement) {
      event.preventDefault();
      moveFocus(index, movement);
      return;
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const indices = items
        .map((item, itemIndex) => (item.disabled ? -1 : itemIndex))
        .filter((indexValue) => indexValue >= 0);
      buttons.current[
        event.key === "Home" ? indices[0] : indices.at(-1)!
      ]?.focus();
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    onPointerMove?.(event);
    if (event.defaultPrevented || quiet || event.pointerType === "touch")
      return;
    const axis = variant === "rail" ? "y" : "x";
    const pointer = axis === "x" ? event.clientX : event.clientY;
    const reach = itemSize * 1.7;
    let closest = { index: -1, distance: Number.POSITIVE_INFINITY };
    const next = items.map((item, index) => {
      if (item.disabled) return 1;
      const bounds = buttons.current[index]?.getBoundingClientRect();
      const center = bounds
        ? axis === "x"
          ? bounds.left + bounds.width / 2
          : bounds.top + bounds.height / 2
        : Number.POSITIVE_INFINITY;
      const distance = Math.abs(pointer - center);
      if (distance < closest.distance) closest = { index, distance };
      return scaleForDistance(distance, reach);
    });
    setPointerIndex(closest.distance <= reach ? closest.index : null);
    setScales(next);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    onPointerLeave?.(event);
    pointerPress.current = false;
    setPointerIndex(null);
    setScales(focusScales(focusIndex));
  };

  const handleFocusCapture = (event: React.FocusEvent<HTMLElement>) => {
    onFocusCapture?.(event);
    const target =
      event.target instanceof Element
        ? event.target.closest<HTMLButtonElement>("button[data-dock-index]")
        : null;
    if (!target) return;
    const index = Number(target.dataset.dockIndex);
    setFocusIndex(index);
    setScales(focusScales(index));
    if (!pointerPress.current)
      target.scrollIntoView({
        block: "nearest",
        inline: variant === "rail" ? "nearest" : "center",
        behavior: "auto",
      });
  };

  const handleBlurCapture = (event: React.FocusEvent<HTMLElement>) => {
    onBlurCapture?.(event);
    if (event.currentTarget.contains(event.relatedTarget as Node | null))
      return;
    pointerPress.current = false;
    setFocusIndex(null);
    setScales(items.map(() => 1));
  };

  const tabValue = items.some(
    (item) => item.value === activeValue && !item.disabled,
  )
    ? activeValue
    : firstEnabledValue(items);
  const customStyle = {
    ...style,
    "--dock-item-size": `${itemSize}px`,
    "--dock-magnification": magnification,
    "--dock-reserved-lift": `${Math.round((magnification - 1) * itemSize * 1.42)}px`,
  } as React.CSSProperties;

  return (
    <nav
      {...props}
      ref={attach}
      dir={dir}
      data-slot="dock"
      data-variant={variant}
      data-motion={quiet ? "off" : "on"}
      aria-label={
        props["aria-label"] ?? (props["aria-labelledby"] ? undefined : "Dock")
      }
      className={cn("v-dock", className)}
      style={customStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDownCapture={(event) => {
        onPointerDownCapture?.(event);
        pointerPress.current = !event.defaultPrevented;
      }}
      onPointerUpCapture={(event) => {
        onPointerUpCapture?.(event);
        pointerPress.current = false;
      }}
      onPointerCancelCapture={(event) => {
        onPointerCancelCapture?.(event);
        pointerPress.current = false;
      }}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
      onKeyDown={handleKeyDown}
    >
      <ScrollArea
        variant="plain"
        className="v-dock__scroll"
        dir={scrollDirection}
        viewportProps={{
          role: undefined,
          "aria-label": undefined,
          tabIndex: -1,
        }}
        viewportWrapper={(viewport) => (
          <>
            {viewport}
            <ScrollBar orientation="horizontal" />
          </>
        )}
      >
        <div data-part="stage">
          {variant === "glass" && (
            <span data-part="glass-lens" aria-hidden="true" />
          )}
          {variant === "shelf" && (
            <>
              <span data-part="shelf-plane" aria-hidden="true" />
              <span data-part="shelf-edge" aria-hidden="true" />
            </>
          )}
          {variant === "rail" && (
            <span data-part="rail-spine" aria-hidden="true" />
          )}
          <div
            role="toolbar"
            aria-orientation={variant === "rail" ? "vertical" : "horizontal"}
            data-part="items"
          >
            {items.map((item, index) => {
              const proximityScale = scales[index] ?? 1;
              const scale =
                variant === "rail"
                  ? 1 + (proximityScale - 1) * 0.12
                  : proximityScale;
              const engaged = pointerIndex === index || focusIndex === index;
              return (
                <span
                  key={item.value}
                  data-part="lane"
                  data-active={item.value === activeValue || undefined}
                  data-engaged={engaged || undefined}
                >
                  <button
                    ref={(node) => {
                      buttons.current[index] = node;
                    }}
                    type="button"
                    data-part="item"
                    data-dock-index={index}
                    disabled={item.disabled}
                    aria-label={item.label}
                    aria-pressed={item.value === activeValue}
                    tabIndex={
                      !item.disabled && item.value === tabValue ? 0 : -1
                    }
                    onClick={() => select(item)}
                    style={
                      {
                        "--dock-item-scale": scale,
                        "--dock-item-lift": `${(scale - 1) * itemSize * (variant === "shelf" ? 0.25 : variant === "rail" ? 0.45 : 0.42)}px`,
                        zIndex: Math.round(scale * 100),
                      } as React.CSSProperties
                    }
                  >
                    <span data-part="visual" aria-hidden="true">
                      <span data-part="icon">{item.icon}</span>
                      {item.badge !== undefined && (
                        <span data-part="badge">{item.badge}</span>
                      )}
                    </span>
                    <span data-part="label" aria-hidden="true">
                      {item.label}
                    </span>
                  </button>
                  <span data-part="active-indicator" aria-hidden="true" />
                </span>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </nav>
  );
}
export function Dock(props: Parameters<typeof DockImpl>[0]) {
  return (
    <>
      <CojeevStyles />
      {DockImpl(props)}
    </>
  );
}

// ---- Styles (React 19 hoists this <style> into <head> and renders it once per page) ----
const COJEEV_CSS = `/* Dock — styles for 000h by Cojeev (MIT). Plain CSS with native cascade layers; no Tailwind theme or config needed.
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

/* ---- dock styles ---- */
@layer cojeev-states {
.v-dock {
  --dock-gap: 8px;
  position: relative;
  display: block;
  inline-size: fit-content;
  max-inline-size: 100%;
  min-inline-size: 0;
  color: var(--v-text);
  font: var(--fw-medium) var(--fs-small)/1.2 var(--font-text);
  isolation: isolate;
}
.v-dock [data-part="viewport"] {
  position: relative;
  max-inline-size: 100%;
  min-inline-size: 0;
  overscroll-behavior: contain;
}
.v-dock:not([data-variant="rail"]) [data-part="viewport"] {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}
.v-dock:not([data-variant="rail"]) [data-part="viewport"]::-webkit-scrollbar {
  display: none;
}
.v-dock [data-part="stage"] {
  position: relative;
  inline-size: max-content;
  min-inline-size: 100%;
  box-sizing: border-box;
}
.v-dock:not([data-variant="rail"]) [data-part="stage"] {
  padding: calc(var(--dock-reserved-lift) + 78px)
    calc(var(--dock-reserved-lift) + 13px) var(--s-5);
}
.v-dock [data-part="items"] {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  gap: var(--dock-gap);
  inline-size: max-content;
  margin: auto;
}
.v-dock [data-part="lane"] {
  position: relative;
  display: grid;
  justify-items: center;
  align-items: end;
  inline-size: var(--dock-item-size);
  block-size: calc(var(--dock-item-size) + 8px);
  flex: 0 0 var(--dock-item-size);
}
.v-dock [data-part="item"] {
  position: relative;
  display: grid;
  place-items: center;
  inline-size: var(--dock-item-size);
  block-size: var(--dock-item-size);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--r-card-sm);
  background: transparent;
  color: var(--v-text);
  font: inherit;
  cursor: pointer;
  outline: none;
  isolation: isolate;
  -webkit-tap-highlight-color: transparent;
}
.v-dock [data-part="visual"] {
  position: relative;
  display: grid;
  place-items: center;
  inline-size: var(--dock-item-size);
  block-size: var(--dock-item-size);
  border-radius: var(--r-card-sm);
  background: var(--v-pink);
  color: var(--v-on-accent);
  box-shadow:
    0 7px 14px -8px rgba(17, 17, 17, 0.48),
    inset 0 1px rgba(255, 255, 255, 0.46);
  transform: translateY(calc(-1 * var(--dock-item-lift)))
    scale(var(--dock-item-scale));
  transform-origin: 50% 100%;
  transition:
    transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.18s ease-out,
    filter 0.18s ease-out;
  will-change: transform;
}
.v-dock [data-part="lane"]:nth-child(4n + 2) [data-part="visual"] {
  background: var(--v-blue);
}
.v-dock [data-part="lane"]:nth-child(4n + 3) [data-part="visual"] {
  background: var(--v-yellow);
}
.v-dock [data-part="lane"]:nth-child(4n + 4) [data-part="visual"] {
  background: var(--v-olive);
}
.v-dock [data-part="icon"] {
  display: grid;
  place-items: center;
  inline-size: 58%;
  block-size: 58%;
}
.v-dock [data-part="icon"] :where(svg, img) {
  display: block;
  inline-size: 100%;
  block-size: 100%;
  max-inline-size: 100%;
  max-block-size: 100%;
  object-fit: contain;
}
.v-dock [data-part="badge"] {
  position: absolute;
  inset-block-start: -5px;
  inset-inline-end: -5px;
  display: grid;
  place-items: center;
  min-inline-size: 20px;
  block-size: 20px;
  padding-inline: var(--s-1);
  border: 2px solid color-mix(in srgb, var(--v-paper) 88%, transparent);
  border-radius: var(--r-pill);
  background: var(--v-ink);
  color: var(--v-on-ink);
  font-size: var(--fs-caps);
  font-weight: var(--fw-bold);
  line-height: 1;
  box-sizing: border-box;
}
.v-dock [data-part="label"] {
  position: absolute;
  z-index: 3;
  inset-block-end: calc(100% + var(--dock-reserved-lift) + 7px);
  inset-inline-start: 50%;
  inline-size: max-content;
  max-inline-size: min(22ch, calc(100vw - 32px));
  padding: var(--s-2) var(--s-2);
  border-radius: var(--r-sm);
  background: var(--v-ink);
  color: var(--v-on-ink);
  box-shadow: 0 8px 18px -9px rgba(17, 17, 17, 0.5);
  opacity: 0;
  overflow-wrap: anywhere;
  text-align: center;
  transform: translate(-50%, 5px);
  transition:
    opacity 0.14s ease-out,
    transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
  pointer-events: none;
}
.v-dock [data-part="lane"][data-engaged="true"] [data-part="label"],
.v-dock [data-part="item"]:focus-visible [data-part="label"] {
  opacity: 1;
  transform: translate(-50%, 0);
}
.v-dock:not([data-variant="rail"])
  [data-part="lane"]:first-child
  [data-part="label"] {
  inset-inline-start: 0;
  transform: translateY(5px);
}
.v-dock:not([data-variant="rail"])
  [data-part="lane"]:first-child:is(
    [data-engaged="true"],
    :has([data-part="item"]:focus-visible)
  )
  [data-part="label"] {
  transform: none;
}
.v-dock:not([data-variant="rail"])
  [data-part="lane"]:last-child
  [data-part="label"] {
  inset-inline-start: auto;
  inset-inline-end: 0;
  transform: translateY(5px);
}
.v-dock:not([data-variant="rail"])
  [data-part="lane"]:last-child:is(
    [data-engaged="true"],
    :has([data-part="item"]:focus-visible)
  )
  [data-part="label"] {
  transform: none;
}
.v-dock [data-part="item"]:focus-visible::after {
  content: "";
  position: absolute;
  inset: -4px;
  border: 2px solid var(--v-brand);
  border-radius: var(--r-card);
  transform: translateY(calc(-1 * var(--dock-item-lift)))
    scale(var(--dock-item-scale));
  transform-origin: 50% 100%;
  pointer-events: none;
}
.v-dock [data-part="item"]:active [data-part="visual"] {
  filter: saturate(0.84) brightness(0.94);
}
.v-dock [data-part="item"]:disabled {
  cursor: not-allowed;
  color: var(--v-disabled-ink);
}
.v-dock [data-part="item"]:disabled [data-part="visual"] {
  background: var(--v-disabled-face);
  color: var(--v-disabled-ink);
  box-shadow: inset 0 0 0 1px var(--v-disabled-edge);
  filter: none;
  transform: none;
}
.v-dock [data-part="active-indicator"] {
  display: block;
  inline-size: 5px;
  block-size: 5px;
  margin-block-start: 3px;
  border-radius: 50%;
  background: transparent;
  transition:
    background-color 0.16s ease-out,
    transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: scale(0.65);
}
.v-dock [data-part="lane"][data-active="true"] [data-part="active-indicator"] {
  background: var(--v-accent-ink);
  transform: scale(1);
}
.v-dock [data-part="glass-lens"] {
  position: absolute;
  z-index: 0;
  inset-inline: 0;
  inset-block-end: 8px;
  block-size: calc(var(--dock-item-size) + 28px);
  border: 1px solid color-mix(in srgb, var(--v-edge) 52%, transparent);
  border-radius: var(--r-card);
  background: color-mix(in srgb, var(--v-paper) 74%, transparent);
  box-shadow:
    0 16px 36px -25px rgba(17, 17, 17, 0.72),
    inset 0 1px rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(18px) saturate(1.2);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
}
.v-dock[data-variant="shelf"] {
  perspective: 520px;
}
.v-dock[data-variant="shelf"] [data-part="stage"] {
  padding-inline: var(--s-6);
  padding-block-end: var(--s-5);
}
.v-dock [data-part="shelf-plane"] {
  position: absolute;
  z-index: 0;
  inset-inline: 5px;
  inset-block-end: 17px;
  block-size: calc(var(--dock-item-size) * 0.72);
  border-radius: var(--r-card-sm) var(--r-card-sm) var(--r-xs) var(--r-xs);
  background: linear-gradient(180deg, var(--v-beige-2), var(--v-beige));
  box-shadow: 0 18px 26px -20px rgba(17, 17, 17, 0.75);
  transform: rotateX(57deg);
  transform-origin: 50% 100%;
}
.v-dock [data-part="shelf-edge"] {
  position: absolute;
  z-index: 1;
  inset-inline: 10px;
  inset-block-end: 9px;
  block-size: 12px;
  border-radius: 2px 2px var(--r-sm) var(--r-sm);
  background: color-mix(in srgb, var(--v-edge) 35%, var(--v-beige));
  box-shadow: 0 8px 14px -9px rgba(17, 17, 17, 0.65);
}
.v-dock[data-variant="shelf"] [data-part="visual"] {
  border-radius: var(--r-md);
  box-shadow:
    0 9px 14px -9px rgba(17, 17, 17, 0.58),
    inset 0 1px rgba(255, 255, 255, 0.42);
}
.v-dock[data-variant="rail"] {
  inline-size: min(100%, 248px);
  padding: var(--s-2);
  border: 1px solid var(--v-border);
  border-radius: var(--r-card);
  background: var(--v-paper);
  box-shadow: 0 14px 30px -24px rgba(17, 17, 17, 0.58);
}
.v-dock[data-variant="rail"] [data-part="viewport"] {
  max-block-size: min(70dvh, 520px);
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.v-dock[data-variant="rail"] [data-part="stage"],
.v-dock[data-variant="rail"] [data-part="items"] {
  inline-size: 100%;
  min-inline-size: 0;
}
.v-dock[data-variant="rail"] [data-part="stage"] {
  padding: var(--s-1);
}
.v-dock[data-variant="rail"] [data-part="items"] {
  display: grid;
  align-items: stretch;
  gap: var(--s-1);
}
.v-dock[data-variant="rail"] [data-part="rail-spine"] {
  position: absolute;
  inset-block: 10px;
  inset-inline-start: calc(var(--dock-item-size) / 2 + 3px);
  inline-size: 1px;
  background: var(--v-border);
}
.v-dock[data-variant="rail"] [data-part="lane"] {
  display: grid;
  grid-template-columns: 1fr 4px;
  align-items: center;
  justify-items: stretch;
  inline-size: 100%;
  block-size: auto;
  min-inline-size: 0;
  padding-block: var(--s-1);
}
.v-dock[data-variant="rail"] [data-part="item"] {
  grid-template-columns: var(--dock-item-size) minmax(0, 1fr);
  gap: var(--s-3);
  inline-size: 100%;
  block-size: auto;
  min-block-size: var(--dock-item-size);
  padding-inline-end: var(--s-3);
  text-align: start;
}
.v-dock[data-variant="rail"] [data-part="visual"] {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  border-radius: var(--r-md);
  transform: translateX(var(--dock-item-lift)) scale(var(--dock-item-scale));
  transform-origin: 0 50%;
}
.v-dock[data-variant="rail"]:dir(rtl) [data-part="visual"] {
  transform: translateX(calc(-1 * var(--dock-item-lift)))
    scale(var(--dock-item-scale));
  transform-origin: 100% 50%;
}
.v-dock[data-variant="rail"] [data-part="label"] {
  position: static;
  grid-column: 2;
  grid-row: 1;
  align-self: center;
  max-inline-size: 100%;
  padding: 0;
  background: transparent;
  color: var(--v-text);
  box-shadow: none;
  opacity: 1;
  overflow-wrap: anywhere;
  text-align: start;
  transform: none;
  transition: color 0.16s ease-out;
}
.v-dock[data-variant="rail"] [data-part="active-indicator"] {
  grid-column: 2;
  grid-row: 1;
  align-self: center;
  justify-self: end;
  margin: 0;
}
.v-dock[data-variant="rail"]
  [data-part="lane"][data-active="true"]
  [data-part="item"] {
  background: var(--sel-bg);
}
.v-dock[data-variant="rail"] [data-part="item"]:focus-visible::after {
  inset: 2px;
  transform: none;
  border-radius: var(--r-md);
}
.v-dock[data-motion="off"] [data-part="visual"],
.v-dock[data-motion="off"] [data-part="label"],
.v-dock[data-motion="off"] [data-part="active-indicator"],
:root[data-flow="off"] .v-dock [data-part="visual"],
:root[data-flow="off"] .v-dock [data-part="label"],
:root[data-flow="off"] .v-dock [data-part="active-indicator"],
[data-flow="off"] .v-dock [data-part="visual"],
[data-flow="off"] .v-dock [data-part="label"],
[data-flow="off"] .v-dock [data-part="active-indicator"] {
  transition: none;
}
.v-dock[data-motion="off"] [data-part="visual"],
:root[data-flow="off"] .v-dock [data-part="visual"],
[data-flow="off"] .v-dock [data-part="visual"] {
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .v-dock [data-part="visual"],
  .v-dock [data-part="label"],
  .v-dock [data-part="active-indicator"] {
    transition: none;
  }
  .v-dock [data-part="visual"] {
    transform: none;
  }
}
@media (hover: none), (pointer: coarse) {
  .v-dock:not([data-variant="rail"]) [data-part="stage"] {
    padding-block-start: var(--s-3);
  }
  .v-dock:not([data-variant="rail"]) [data-part="lane"] {
    block-size: calc(var(--dock-item-size) + 35px);
  }
  .v-dock:not([data-variant="rail"]) [data-part="item"] {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--s-1);
    block-size: calc(var(--dock-item-size) + 27px);
  }
  .v-dock:not([data-variant="rail"]) [data-part="visual"] {
    flex: 0 0 var(--dock-item-size);
    transform: none;
  }
  .v-dock:not([data-variant="rail"]) [data-part="label"] {
    position: static;
    display: -webkit-box;
    max-inline-size: var(--dock-item-size);
    padding: 0;
    background: transparent;
    color: var(--v-text);
    box-shadow: none;
    font-size: var(--fs-caps);
    line-height: 1.15;
    opacity: 1;
    overflow: hidden;
    text-align: center;
    transform: none;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .v-dock [data-part="glass-lens"] {
    block-size: 100%;
  }
  .v-dock[data-variant="shelf"] [data-part="shelf-plane"] {
    block-size: calc(var(--dock-item-size) + 12px);
  }
}
.v-dock .v-dock__scroll[data-slot="scroll-area"] {
  --h: none;
  box-sizing: border-box;
  padding: 0;
  max-height: none;
  width: 100%;
  border-radius: inherit;
}
.v-dock .v-dock__scroll > [data-slot="scroll-area-viewport"] {
  height: auto;
  max-height: none;
  padding: 0 0 var(--s-5);
}
.v-dock[data-variant="rail"]
  .v-dock__scroll
  > [data-slot="scroll-area-viewport"] {
  max-height: min(70dvh, 520px);
  padding: 0 var(--s-6) 0 0;
}
.v-dock .v-dock__scroll > [data-slot="scroll-area-viewport"] > div {
  width: max-content;
  min-width: 100%;
}
.v-dock[data-variant="rail"]
  .v-dock__scroll
  > [data-slot="scroll-area-viewport"]
  > div {
  width: 100%;
}
}

/* ---- scroll-area styles ---- */
@layer cojeev-states {
/* Native overflow keeps its own scroll semantics while sharing the app's slim,
   theme-aware fallback. Managed controls below replace only the visible thumb. */
html[data-scrollbar-policy="cojeev"] {
  --cojeev-scrollbar-size: 4px;
  --cojeev-scrollbar-color: var(--v-text-2);
}
:where(html[data-scrollbar-policy="cojeev"],html[data-scrollbar-policy="cojeev"] *) {
  scrollbar-width: thin;
  scrollbar-color: var(--cojeev-scrollbar-color,var(--v-text-2)) transparent;
}
:where(html[data-scrollbar-policy="cojeev"],html[data-scrollbar-policy="cojeev"] *)::-webkit-scrollbar {
  width: var(--cojeev-scrollbar-size,6px);
  height: var(--cojeev-scrollbar-size,6px);
}
:where(html[data-scrollbar-policy="cojeev"],html[data-scrollbar-policy="cojeev"] *)::-webkit-scrollbar-track { background:transparent; }
:where(html[data-scrollbar-policy="cojeev"],html[data-scrollbar-policy="cojeev"] *)::-webkit-scrollbar-thumb {
  border-radius:var(--r-pill);
  background:var(--cojeev-scrollbar-color,var(--v-text-2));
}
:where(html[data-scrollbar-policy="cojeev"],html[data-scrollbar-policy="cojeev"] *)::-webkit-scrollbar-thumb:hover {
  background:color-mix(in oklab,var(--cojeev-scrollbar-color,var(--v-text-2)) 76%,var(--v-brand));
}

/* The Radix viewport owns scroll. The thumb's SVG is decorative geometry only. */
[data-slot="scroll-area"].v-scroll {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  max-height: var(--h, 240px);
  padding: var(--s-2) var(--s-2) var(--s-2) var(--s-5);
  border-radius: var(--r-card-sm, 20px);
  background: var(--v-canvas);
  color: var(--v-text);
  box-shadow: inset 0 0 0 1px var(--v-border);
}
[data-slot="scroll-area"].-ink { background: var(--v-ink); color: var(--v-on-ink); }
[data-slot="scroll-area"].-plain { min-width:0; max-width:100%; padding:0; background:transparent; color:inherit; box-shadow:none; border-radius:inherit; }
/* Leave room for control paint so decorative SVG overhang cannot invent a
   tiny scroll range (and an almost full-height thumb) when content fits. */
[data-slot="scroll-area"].-plain > [data-slot="scroll-area-viewport"] { height:auto; max-height:var(--h,320px); padding:var(--s-2) var(--s-6) var(--s-3) var(--s-2); }
[data-slot="scroll-area"].-plain > [data-slot="scroll-area-viewport"] > div { table-layout:fixed; width:100%; }
.v-list-scroll { --h:min(320px,60dvh); }
[data-slot="scroll-area-viewport"] {
  width: 100%;
  height: 100%;
  max-height: calc(var(--h, 240px) - 12px);
  border-radius: inherit;
  overscroll-behavior: contain;
  scrollbar-width: none;
  padding-right: var(--s-6);
}
[data-slot="scroll-area-viewport"]::-webkit-scrollbar { display:none; width:0; height:0; }
[data-slot="scroll-area-viewport"]:focus-visible {
  outline: 2px solid var(--v-brand);
  outline-offset: -3px;
}
[data-slot="scroll-area-viewport"] > div > :is(p,.v-body) {
  margin: 0;
  padding: var(--s-3) 0;
  border-bottom: 1px solid color-mix(in oklab,var(--v-border) 70%,transparent);
  font-size: var(--fs-body);
  line-height: 1.6;
}
[data-slot="scroll-area-viewport"] > div > :is(p,.v-body):last-child { border-bottom: 0; }
[data-slot="scroll-area"].-ink [data-slot="scroll-area-viewport"] > div > :is(p,.v-body) {
  border-bottom-color: color-mix(in oklab,var(--v-on-ink) 14%,transparent);
}
[data-slot="scroll-area-scrollbar"] {
  display: flex;
  --scrollbar-size: 6px;
  padding: 0 calc((24px - var(--scrollbar-size)) / 2);
  touch-action: none;
  user-select: none;
  border-radius: var(--r-pill);
  background: transparent;
  transition: background-color 160ms ease;
  z-index: 2;
}
[data-slot="scroll-area-scrollbar"][data-orientation="vertical"] { width: 24px; }
[data-slot="scroll-area-scrollbar"][data-orientation="horizontal"] { height: 24px; padding: calc((24px - var(--scrollbar-size)) / 2) 0; flex-direction: column; }
[data-slot="scroll-area-scrollbar"]::before {
  content: "";
  position: absolute;
  inset: 0 calc((24px - var(--scrollbar-size)) / 2);
  border-radius: inherit;
  pointer-events: none;
}
[data-slot="scroll-area-scrollbar"][data-orientation="horizontal"]::before {
  inset: calc((24px - var(--scrollbar-size)) / 2) 0;
}
[data-slot="scroll-area-scrollbar"]:hover::before,
[data-slot="scroll-area-scrollbar"][data-dragging="true"]::before {
  background: color-mix(in oklab,var(--scrollbar-color,var(--v-pink)) 24%,transparent);
}
[data-slot="scroll-area-thumb"] {
  position: relative;
  flex: 1;
  /* Match Radix's 18px geometry floor; a larger CSS minimum breaks its travel. */
  min-height: 18px;
  background: transparent;
  color: var(--scrollbar-color,var(--v-text-2));
}
[data-slot="scroll-area-thumb"]::before { content: ""; position: absolute; inset: -4px; }
[data-slot="scroll-area-scrollbar"][data-orientation="horizontal"] [data-slot="scroll-area-thumb"] { min-width: 18px; min-height: 0; }
.v-scroll__contour { display: block; position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; fill: currentColor; }
[data-slot="scroll-area-scrollbar"]:hover [data-slot="scroll-area-thumb"],
[data-slot="scroll-area-scrollbar"][data-scrolling="true"] [data-slot="scroll-area-thumb"] { color: var(--scrollbar-color,var(--v-pink-deep)); }
[data-slot="scroll-area-scrollbar"][data-dragging="true"] [data-slot="scroll-area-thumb"] { color: var(--scrollbar-color,var(--v-pink)); }
[data-slot="scroll-area"].-ink [data-slot="scroll-area-thumb"] { color: var(--scrollbar-color,color-mix(in oklab,var(--v-on-ink) 65%,transparent)); }
[data-slot="scroll-area-scrollbar"][data-scrollbar-variant="rounded"] [data-slot="scroll-area-thumb"]::after,
[data-slot="scroll-area-scrollbar"][data-scrollbar-variant="minimal"] [data-slot="scroll-area-thumb"]::after { content:""; position:absolute; inset:0; border-radius:var(--r-pill); background:currentColor; }
[data-slot="scroll-area-scrollbar"][data-scrollbar-variant="minimal"] [data-slot="scroll-area-thumb"]::after { opacity:.72; }
[data-slot="scroll-area-scrollbar"][data-scrollbar-variant="minimal"] [data-slot="scroll-area-thumb"]::after { border-radius:0; }
:is(:root[data-mode="dark"], .dark) [data-slot="scroll-area"].-ink { background: var(--v-canvas); color: var(--v-text); }
@media (prefers-reduced-motion: reduce) {
  [data-slot="scroll-area-scrollbar"] { transition: none; }
  [data-slot="scroll-area-viewport"] { scroll-behavior: auto; }
}
[data-slot="scroll-area-scrollbar"][data-motion="off"] { transition: none; }

/* Document scrolling stays native; the mounted attribute exists only while the overlay
   owns the paint, and the pending attribute only inside the head bootstrap's bounded
   window. The effect that writes "mounted" cannot run before hydration, so the pending
   marker is what keeps the native bar from painting and then being swapped. Neither
   attribute exists without scripting, and the bootstrap drops the pending one after its
   timeout, so a bundle that never arrives leaves the native scrollbar in place. */
html[data-page-scrollbar="mounted"],
html[data-page-scrollbar-pending],
html[data-page-scrollbar="mounted"] body,
html[data-page-scrollbar-pending] body { scrollbar-width: none; }
html[data-page-scrollbar="mounted"]::-webkit-scrollbar,
html[data-page-scrollbar-pending]::-webkit-scrollbar,
html[data-page-scrollbar="mounted"] body::-webkit-scrollbar,
html[data-page-scrollbar-pending] body::-webkit-scrollbar { width: 0; height: 0; }
.v-page-scrollbar {
  position: fixed;
  right: 2px;
  top: var(--page-scrollbar-top,80px);
  bottom: 16px;
  width: 24px;
  border-radius: var(--r-pill);
  z-index: 50;
  touch-action: none;
  user-select: none;
  --scrollbar-size: 6px;
  color: var(--scrollbar-color,var(--v-text-2));
  background: transparent;
  transition: background-color 160ms ease;
}
.v-page-scrollbar[data-overflow="false"] { visibility: hidden; pointer-events: none; }
.v-page-scrollbar:hover,
.v-page-scrollbar[data-scrolling="true"] { color: var(--scrollbar-color,var(--v-pink-deep)); }
.v-page-scrollbar[data-dragging="true"] { color: var(--scrollbar-color,var(--v-pink)); }
.v-page-scrollbar:focus-visible { outline: 2px solid var(--v-brand); outline-offset: -1px; }
[data-slot="page-scrollbar-thumb"] { position: absolute; left:calc((24px - var(--scrollbar-size)) / 2); right:calc((24px - var(--scrollbar-size)) / 2); top:0; min-height: 0; }
[data-slot="page-scrollbar-thumb"] svg { display: block; width: 100%; height: 100%; fill: currentColor; pointer-events: none; }
.v-page-scrollbar[data-scrollbar-variant="rounded"] [data-slot="page-scrollbar-thumb"]::after,
.v-page-scrollbar[data-scrollbar-variant="minimal"] [data-slot="page-scrollbar-thumb"]::after { content:""; position:absolute; inset:0; border-radius:var(--r-pill); background:currentColor; }
.v-page-scrollbar[data-scrollbar-variant="minimal"] [data-slot="page-scrollbar-thumb"]::after { opacity:.72; }
.v-page-scrollbar[data-scrollbar-variant="minimal"] [data-slot="page-scrollbar-thumb"]::after { border-radius:0; }
.v-page-scrollbar[data-motion="off"] { transition: none; }
@media (pointer: coarse) { .v-page-scrollbar { right: 0; width: 24px; } }
@media (prefers-reduced-motion: reduce) { .v-page-scrollbar { transition: none; } }

/* A fixed-size grip stays readable even when the proportional thumb is long. */
.v-scroll__grip { position:absolute; left:50%; top:50%; translate:-50% -50%; display:flex; flex-direction:column; gap:3px; color:var(--v-canvas); pointer-events:none; }
.v-scroll__grip i { display:block; width:min(3px,var(--scrollbar-size,6px)); height:min(3px,var(--scrollbar-size,6px)); border-radius:50%; background:currentColor; }
[data-orientation="horizontal"] .v-scroll__grip { flex-direction:row; }
[data-dragging="true"] .v-scroll__grip { color:var(--ink-fixed); }
.v-page-scrollbar::before { content:""; position:absolute; top:4px; bottom:4px; left:50%; width:1px; background:var(--v-border); pointer-events:none; }
[data-slot="page-scrollbar-thumb"]::before { content:""; position:absolute; inset:0 -3px; }

.v-page-scrollbar[data-slot="element-scrollbar"] { position:absolute; top:4px; bottom:18px; inset-inline-end:1px; z-index:2; }
.v-page-scrollbar[data-slot="element-scrollbar"]::before { display:none; }
:root [data-element-scrollbar="mounted"] { scrollbar-width:none; }
[data-element-scrollbar="mounted"]::-webkit-scrollbar { width:0; height:0; }
:root [data-element-scrollbar="horizontal"] { scrollbar-width:auto; }
[data-slot="element-scrollbar"][data-native-fallback] { visibility:hidden; pointer-events:none; }
@media(forced-colors:active) {
  :root [data-element-scrollbar="mounted"] { scrollbar-width:auto; }
  [data-element-scrollbar="mounted"]::-webkit-scrollbar { width:auto; height:auto; }
  [data-slot="element-scrollbar"] { display:none; }
}
}
`;

function CojeevStyles() {
  return (
    <style href="000h-dock" precedence="default">
      {COJEEV_CSS}
    </style>
  );
}
