"use client";

// Incident banner: a one-line notice that opens to a timeline of updates and an email subscribe form.
// The illustration is Incident timeline (HUD) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useId, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

const INCIDENT_SVG = `<svg class="sf-incident-timeline" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" stroke="#1daf9c" role="img" aria-labelledby="sf-incident-timeline-t">
<title id="sf-incident-timeline-t">Incident timeline</title>
<defs><filter id="sf-incident-timeline-glow" x="-15%" y="-15%" width="130%" height="130%"><feGaussianBlur stdDeviation="2.2"/></filter><clipPath id="sf-incident-timeline-open"><rect class="edge" x="-153.2" y="0" width="400" height="460"/></clipPath></defs>
<style>@scope (svg.sf-incident-timeline) {
:scope{--_ground:#ffffff;--_ink:#2a2a2a;--_line:#7a7a7a;--_faint:#dadadc;--_accent:#1daf9c;--_accent-dim:#84ebdd;--_alert:#d02533}
@media (prefers-color-scheme: dark){:scope{--_ground:#101112;--_ink:#dadadc;--_line:#8a8a8a;--_faint:#2a2a2a;--_accent:#3fdec9;--_accent-dim:#178c7d;--_alert:#fb3748}}
:scope{stroke:none}
@keyframes sf-incident-timeline_deploy{0%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}8.333%{opacity:0;transform:translateY(0px);animation-timing-function:step-end}12.667%{opacity:0;transform:translateY(-16px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}20%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}22.667%{opacity:1;transform:translateY(-2px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}26.667%{opacity:1;transform:translateY(0px)}100%{opacity:1;transform:translateY(0px)}}
.deploy{animation:sf-incident-timeline_deploy 3s linear}
@keyframes sf-incident-timeline_alert{0%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}8.333%{opacity:0;transform:translateY(0px);animation-timing-function:step-end}17.667%{opacity:0;transform:translateY(-16px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}25%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}27.667%{opacity:1;transform:translateY(-2px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}31.667%{opacity:1;transform:translateY(0px)}100%{opacity:1;transform:translateY(0px)}}
.alert{animation:sf-incident-timeline_alert 3s linear}
@keyframes sf-incident-timeline_ack{0%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}8.333%{opacity:0;transform:translateY(0px);animation-timing-function:step-end}22.667%{opacity:0;transform:translateY(-16px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}30%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}32.667%{opacity:1;transform:translateY(-2px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}36.667%{opacity:1;transform:translateY(0px)}100%{opacity:1;transform:translateY(0px)}}
.ack{animation:sf-incident-timeline_ack 3s linear}
@keyframes sf-incident-timeline_rollback{0%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}8.333%{opacity:0;transform:translateY(0px);animation-timing-function:step-end}31%{opacity:0;transform:translateY(-16px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}38.333%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}41%{opacity:1;transform:translateY(-2px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}45%{opacity:1;transform:translateY(0px)}100%{opacity:1;transform:translateY(0px)}}
.rollback{animation:sf-incident-timeline_rollback 3s linear}
@keyframes sf-incident-timeline_resolve{0%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}8.333%{opacity:0;transform:translateY(0px);animation-timing-function:step-end}42.667%{opacity:0;transform:translateY(-16px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}50%{opacity:1;transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}52.667%{opacity:1;transform:translateY(-2px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}56.667%{opacity:1;transform:translateY(0px)}100%{opacity:1;transform:translateY(0px)}}
.resolve{animation:sf-incident-timeline_resolve 3s linear}
@keyframes sf-incident-timeline_pulse{0%{opacity:0;transform:scale(0.7)}25%{opacity:0;transform:scale(0.7);animation-timing-function:step-end}25.333%{opacity:1;transform:scale(0.7);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}51.667%{opacity:0;transform:scale(2.4)}100%{opacity:0;transform:scale(2.4)}}
.pulse{opacity:0;transform-box:view-box;transform-origin:246.82px 92.5px;animation:sf-incident-timeline_pulse 3s linear}
@keyframes sf-incident-timeline_edge{0%{transform:translateX(246.82px)}10%{transform:translateX(246.82px);animation-timing-function:step-end}25%{transform:translateX(0px);animation-timing-function:linear}50%{transform:translateX(246.82px)}100%{transform:translateX(246.82px)}}
.edge{transform:translateX(246.82px);animation:sf-incident-timeline_edge 3s linear}
@keyframes sf-incident-timeline_go{0%{transform:translate(246.82px,142.5px)}25%{transform:translate(0px,0px);animation-timing-function:linear}50%{transform:translate(246.82px,142.5px)}100%{transform:translate(246.82px,142.5px)}}
.go{transform:translate(246.82px,142.5px);animation:sf-incident-timeline_go 3s linear}
@keyframes sf-incident-timeline_head{0%{opacity:0}25%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}28.333%{opacity:1}50%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}56.667%{opacity:0}100%{opacity:0}}
.head{opacity:0;animation:sf-incident-timeline_head 3s linear}
@keyframes sf-incident-timeline_span{0%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}10%{opacity:0;animation-timing-function:step-end}25%{opacity:1}100%{opacity:1}}
.span{animation:sf-incident-timeline_span 3s linear}
@keyframes sf-incident-timeline_read{0%{opacity:1;transform:scale(1);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}10%{opacity:0;transform:scale(0.92)}53.333%{opacity:0;transform:scale(0.92);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}66.667%{opacity:1;transform:scale(1)}100%{opacity:1;transform:scale(1)}}
.read{transform-box:view-box;transform-origin:370.23px 144.75px;animation:sf-incident-timeline_read 3s linear}
*{animation-iteration-count:infinite!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<use href="#sf-incident-timeline-glow-src" filter="url(#sf-incident-timeline-glow)" opacity="0.8"/><g id="sf-incident-timeline-glow-src"><path d="M174.9 132L569.8 360M154.2 144L549.1 372" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M154.2 144L144.6 149.5M170.6 153.5L166.3 156M187.1 163L182.7 165.5M203.5 172.5L199.2 175M220 182L215.6 184.5M236.4 191.5L226.9 197M252.9 201L248.6 203.5M269.3 210.5L265 213M285.8 220L281.5 222.5M302.2 229.5L297.9 232M318.7 239L309.2 244.5M335.2 248.5L330.8 251M351.6 258L347.3 260.5M368.1 267.5L363.7 270M384.5 277L380.2 279.5M401 286.5L391.4 292M417.4 296L413.1 298.5M433.9 305.5L429.5 308M450.3 315L446 317.5M466.8 324.5L462.5 327M483.2 334L473.7 339.5M499.7 343.5L495.4 346M516.2 353L511.8 355.5M532.6 362.5L528.3 365M549.1 372L544.7 374.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M180.13 103L620.08 357L543.87 401L103.92 147L180.13 103" fill="none" stroke="var(--illos-faint,var(--_faint))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M209.6 120L180.1 103L161.1 114M133.4 164L103.9 147L123 136M590.6 340L620.1 357L601 368M514.4 384L543.9 401L562.9 390" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M181.9 128L147.2 148M576.8 356L542.1 376" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M124.7 147L543.9 389" fill="none" stroke="var(--illos-faint,var(--_faint))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" stroke-dasharray="3 5"/></g><g class="deploy"><path d="M197.5 157L197.5 123" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M201.79 159.5L199.8 160.27L197.46 160.54L195.11 160.27L193.13 159.5L191.8 158.35L191.33 157L191.8 155.65L193.13 154.5L195.11 153.73L197.46 153.46L199.8 153.73L201.79 154.5L203.11 155.65L203.58 157L203.11 158.35L201.79 159.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><rect x="192" y="112" width="11" height="11" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.4"/></g><g class="alert"><path d="M246.8 185.5L246.8 101.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M251.15 188L249.16 188.77L246.82 189.04L244.48 188.77L242.49 188L241.16 186.85L240.69 185.5L241.16 184.15L242.49 183L244.48 182.23L246.82 181.96L249.16 182.23L251.15 183L252.48 184.15L252.94 185.5L252.48 186.85L251.15 188" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M246.8 83.5l9 9l-9 9l-9 -9Z" fill="none" stroke="var(--illos-alert,var(--_alert))" stroke-width="2" stroke-linejoin="round"/><circle cx="246.82" cy="92.5" r="2.6" fill="var(--illos-alert,var(--_alert))"/></g><g class="ack"><path d="M296.2 214L296.2 180" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M300.51 216.5L298.53 217.27L296.18 217.54L293.84 217.27L291.85 216.5L290.52 215.35L290.06 214L290.52 212.65L291.85 211.5L293.84 210.73L296.18 210.46L298.53 210.73L300.51 211.5L301.84 212.65L302.31 214L301.84 215.35L300.51 216.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><circle cx="296.18" cy="176" r="4" fill="var(--illos-ink,var(--_ink))"/></g><g class="rollback"><path d="M378.5 261.5L378.5 227.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M382.78 264L380.8 264.77L378.45 265.04L376.11 264.77L374.12 264L372.8 262.85L372.33 261.5L372.8 260.15L374.12 259L376.11 258.23L378.45 257.96L380.8 258.23L382.78 259L384.11 260.15L384.58 261.5L384.11 262.85L382.78 264" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M372 226.5L385 226.5L378.5 215.5Z" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></g><g class="resolve"><path d="M493.6 328L493.6 266" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M497.97 330.5L495.98 331.27L493.64 331.54L491.29 331.27L489.31 330.5L487.98 329.35L487.51 328L487.98 326.65L489.31 325.5L491.29 324.73L493.64 324.46L495.98 324.73L497.97 325.5L499.29 326.65L499.76 328L499.29 329.35L497.97 330.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M503.6 253L503.4 255L502.9 256.8L502 258.6L500.7 260.1L499.2 261.3L497.5 262.2L495.6 262.8L493.6 263L491.7 262.8L489.8 262.2L488.1 261.3L486.6 260.1L485.3 258.6L484.4 256.8L483.8 255L483.6 253L483.8 251L484.4 249.2L485.3 247.4L486.6 245.9L488.1 244.7L489.8 243.8L491.7 243.2L493.6 243L495.6 243.2L497.5 243.8L499.2 244.7L500.7 245.9L502 247.4L502.9 249.2L503.4 251L503.6 253" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="3.9000000000000004" opacity="0.22"/><path d="M503.6 253L503.4 255L502.9 256.8L502 258.6L500.7 260.1L499.2 261.3L497.5 262.2L495.6 262.8L493.6 263L491.7 262.8L489.8 262.2L488.1 261.3L486.6 260.1L485.3 258.6L484.4 256.8L483.8 255L483.6 253L483.8 251L484.4 249.2L485.3 247.4L486.6 245.9L488.1 244.7L489.8 243.8L491.7 243.2L493.6 243L495.6 243.2L497.5 243.8L499.2 244.7L500.7 245.9L502 247.4L502.9 249.2L503.4 251L503.6 253" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="1.3"/><path d="M489.1 253l3.5 3.5l5.5 -7" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="4.5" opacity="0.22"/><path d="M489.1 253l3.5 3.5l5.5 -7" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="1.5"/></g><g class="pulse"><path d="M259.8 92.5L259.6 95L258.8 97.5L257.6 99.7L256 101.7L254 103.3L251.8 104.5L249.4 105.3L246.8 105.5L244.3 105.3L241.8 104.5L239.6 103.3L237.6 101.7L236 99.7L234.8 97.5L234.1 95L233.8 92.5L234.1 90L234.8 87.5L236 85.3L237.6 83.3L239.6 81.7L241.8 80.5L244.3 79.7L246.8 79.5L249.4 79.7L251.8 80.5L254 81.7L256 83.3L257.6 85.3L258.8 87.5L259.6 90L259.8 92.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="3.5999999999999996" opacity="0.22"/><path d="M259.8 92.5L259.6 95L258.8 97.5L257.6 99.7L256 101.7L254 103.3L251.8 104.5L249.4 105.3L246.8 105.5L244.3 105.3L241.8 104.5L239.6 103.3L237.6 101.7L236 99.7L234.8 97.5L234.1 95L233.8 92.5L234.1 90L234.8 87.5L236 85.3L237.6 83.3L239.6 81.7L241.8 80.5L244.3 79.7L246.8 79.5L249.4 79.7L251.8 80.5L254 81.7L256 83.3L257.6 85.3L258.8 87.5L259.6 90L259.8 92.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="1.2"/></g><g clip-path="url(#sf-incident-timeline-open)"><g class="span"><path d="M246.8 123.5L493.6 266" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="6" opacity="0.22"/><path d="M246.8 123.5L493.6 266" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="2"/><path d="M246.8 117.5V129.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></g></g><g class="go"><g class="head"><circle cx="246.82" cy="123.5" r="3.4" fill="var(--illos-accent,var(--_accent))"/></g></g><g class="read"><path d="M370.2 190.8V144.8" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><rect x="303.63" y="120.75" width="133.2" height="19.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2"/><rect x="307.63" y="124.75" width="9" height="9" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2"/><path stroke="var(--illos-ink,var(--_ink))" stroke-width="1.1" fill="none" vector-effect="non-scaling-stroke" d="M322.63 133.75L322.63 124.75L327.13 124.75L328.63 126.25L328.63 127.75L327.13 129.25L322.63 129.25M325.63 129.25L328.63 133.75M338.23 124.75L332.23 124.75L332.23 133.75L338.23 133.75M332.23 129.25L336.73 129.25M347.83 126.25L346.33 124.75L343.33 124.75L341.83 126.25L341.83 127.75L343.33 129.25L346.33 129.25L347.83 130.75L347.83 132.25L346.33 133.75L343.33 133.75L341.83 132.25M352.93 124.75L355.93 124.75L357.43 126.25L357.43 132.25L355.93 133.75L352.93 133.75L351.43 132.25L351.43 126.25L352.93 124.75M361.03 124.75L361.03 133.75L367.03 133.75M370.63 124.75L373.63 133.75L376.63 124.75M386.23 124.75L380.23 124.75L380.23 133.75L386.23 133.75M380.23 129.25L384.73 129.25M389.83 124.75L389.83 133.75L394.33 133.75L395.83 132.25L395.83 126.25L394.33 124.75L389.83 124.75M409.03 127.75L412.03 124.75L412.03 133.75M410.53 133.75L413.53 133.75M424.63 124.75L418.63 124.75L418.63 129.25L423.13 129.25L424.63 130.75L424.63 132.25L423.13 133.75L420.13 133.75L418.63 132.25M428.23 133.75L428.23 124.75L431.23 129.25L434.23 124.75L434.23 133.75"/></g>
</svg>`;

export type IncidentStatus = "investigating" | "identified" | "monitoring" | "resolved";
export type IncidentUpdate = { status: IncidentStatus; time: string; message: string };

export type IllosIncidentBannerProps = {
  title?: string;
  affects?: string;
  updated?: string;
  /** Newest first. The first update sets the banner's status. */
  updates?: IncidentUpdate[];
  defaultOpen?: boolean;
  /** Called with a valid email. Return a promise to show the subscribing state until it settles. */
  onSubscribe?: (email: string) => void | Promise<void>;
  onDismiss?: () => void;
  className?: string;
};

const UPDATES: IncidentUpdate[] = [
  {
    status: "monitoring",
    time: "10:42 UTC",
    message: "We rolled the change back and error rates are normal again. We're watching closely before we call it resolved.",
  },
  {
    status: "identified",
    time: "10:31 UTC",
    message: "A configuration change sent some traffic in one region to an unhealthy pool of servers. We're rolling it back.",
  },
  { status: "investigating", time: "10:18 UTC", message: "Some API requests are failing with 502 errors. We're looking into it." },
];

const LABEL: Record<IncidentStatus, string> = {
  investigating: "Investigating",
  identified: "Identified",
  monitoring: "Monitoring",
  resolved: "Resolved",
};
const TONE: Record<IncidentStatus, string> = {
  investigating: "var(--status-down)",
  identified: "var(--status-down)",
  monitoring: "var(--status-warn)",
  resolved: "var(--status-ok)",
};

const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function IllosIncidentBanner({
  title = "Elevated error rates on the API",
  affects = "API and Webhooks",
  updated = "4 min ago",
  updates = UPDATES,
  defaultOpen = false,
  onSubscribe,
  onDismiss,
  className,
}: IllosIncidentBannerProps) {
  const uid = useId();
  const [open, setOpen] = useState(defaultOpen);
  const [hidden, setHidden] = useState(false);
  const status = updates[0]?.status ?? "investigating";
  if (hidden) return null;

  return (
    <section
      aria-labelledby={`${uid}-title`}
      className={cx(
        "w-full max-w-[1040px] rounded-2xl bg-card p-1.5 text-card-foreground",
        "shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_1px_2px_rgb(0_0_0/0.04),0_12px_32px_-16px_rgb(0_0_0/0.18)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.09)] antialiased",
        "[--status-ok:var(--color-chart-2,oklch(0.7_0.12_180))] [--status-warn:oklch(0.8_0.15_78)] [--status-down:var(--color-destructive,oklch(0.63_0.21_25))]",
        className,
      )}
    >
      <div className="flex items-start gap-3 py-2 pr-1 pl-3 sm:items-center sm:pl-3.5">
        <Dot tone={TONE[status]} className="mt-1.5 sm:mt-0" />
        <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 id={`${uid}-title`} className="text-sm font-medium text-pretty">
              {title}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {LABEL[status]}. Updated {updated}. Affects {affects}
            </p>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={`${uid}-panel`}
            onClick={() => setOpen(!open)}
            className={cx(
              "relative -ml-2 inline-flex h-9 shrink-0 before:absolute before:-inset-y-1 before:inset-x-0 items-center gap-1.5 rounded-lg pr-2.5 pl-2 text-sm font-medium transition-[background-color,transform] duration-150 ease-out select-none hover:bg-muted active:scale-[0.97] sm:ml-0 sm:pl-3",
              FOCUS,
            )}
          >
            {open ? "Hide updates" : `View ${updates.length} updates`}
            <Icon className={cx("text-muted-foreground transition-transform duration-200 ease-out motion-reduce:transition-none", open && "rotate-180")}>
              <path d="m6 9 6 6 6-6" />
            </Icon>
          </button>
        </div>
        <button
          type="button"
          aria-label="Dismiss incident banner"
          onClick={() => {
            setHidden(true);
            onDismiss?.();
          }}
          className={cx(
            "relative grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-[color,background-color,transform] duration-150 ease-out before:absolute before:-inset-1.5 hover:bg-muted hover:text-card-foreground active:scale-[0.94]",
            FOCUS,
          )}
        >
          <Icon>
            <path d="M6 6l12 12M18 6 6 18" />
          </Icon>
        </button>
      </div>

      <div
        id={`${uid}-panel`}
        inert={!open}
        className={cx(
          "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-1.5 pt-1.5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
            <HudWell svg={INCIDENT_SVG} className="aspect-[16/10] rounded-[10px] md:aspect-auto md:min-h-full" artClassName="[&>svg]:scale-[1.15] md:[&>svg]:scale-[1.25]" />
            <div className="flex flex-col px-3.5 pt-4 pb-4 sm:px-5 sm:pt-5">
              <h4 className="sr-only">Updates, newest first</h4>
              <ol className="flex flex-col">
                {updates.map((u, i) => (
                  <li key={i} className="relative grid grid-cols-[12px_minmax(0,1fr)] gap-x-3.5 pb-5 last:pb-0">
                    {i < updates.length - 1 && (
                      <span aria-hidden="true" className="absolute top-[18px] bottom-1 left-[5.5px] w-px bg-[color-mix(in_oklab,var(--color-foreground)_12%,transparent)]" />
                    )}
                    <span
                      aria-hidden="true"
                      className={cx("mt-[5px] size-3 rounded-full", i > 0 && "shadow-[inset_0_0_0_1.5px_color-mix(in_oklab,var(--color-foreground)_22%,transparent)]")}
                      style={i === 0 ? { background: TONE[u.status], boxShadow: `0 0 0 4px color-mix(in oklab, ${TONE[u.status]} 22%, transparent)` } : undefined}
                    />
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-baseline gap-x-2 text-sm">
                        <span className="font-medium">{LABEL[u.status]}</span>
                        <time className="text-xs text-muted-foreground tabular-nums">{u.time}</time>
                      </p>
                      <p className="mt-1 max-w-[56ch] text-sm leading-relaxed text-pretty text-muted-foreground">{u.message}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Subscribe onSubscribe={onSubscribe} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IllosIncidentBanner;

function Subscribe({ onSubscribe }: { onSubscribe?: (email: string) => void | Promise<void> }) {
  const uid = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const check = (v: string) =>
    !v.trim() ? "Enter your email address." : EMAIL.test(v.trim()) ? "" : "Enter an email address like name@company.com.";

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const problem = check(email);
    setError(problem);
    if (problem || state === "sending") return;
    setState("sending");
    try {
      await onSubscribe?.(email.trim());
      setState("done");
    } catch {
      setError("We couldn't subscribe you. Try again in a moment.");
      setState("idle");
    }
  };

  if (state === "done")
    return (
      <p role="status" className="mt-6 flex items-start md:mt-auto gap-2.5 rounded-xl bg-muted/70 px-3.5 py-3 text-sm dark:bg-muted/50">
        <Icon className="mt-0.5 shrink-0 text-[var(--status-ok)]">
          <path d="M20 6 9 17l-5-5" />
        </Icon>
        <span>
          <span className="font-medium">You're subscribed.</span>{" "}
          <span className="text-muted-foreground">We'll email {email.trim()} when this incident is updated.</span>
        </span>
      </p>
    );

  return (
    <form noValidate onSubmit={submit} className="mt-6 flex flex-col gap-2 md:mt-auto md:pt-6">
      <label htmlFor={`${uid}-email`} className="text-sm font-medium">
        Get an email when this incident is updated
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${uid}-email`}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          aria-invalid={!!error}
          aria-describedby={error ? `${uid}-error` : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(check(e.target.value)); // once an error shows, clear it as soon as the address is fixed
          }}
          onBlur={() => email && setError(check(email))}
          className={cx(
            "h-10 w-full min-w-0 rounded-lg bg-card px-3 sm:h-9 sm:flex-1 text-base text-card-foreground shadow-[inset_0_0_0_1px_var(--color-border)] transition-shadow duration-150 outline-none placeholder:text-muted-foreground hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_25%,transparent)] focus-visible:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_45%,transparent)] sm:text-sm",
            error && "shadow-[inset_0_0_0_1px_var(--status-down)] hover:shadow-[inset_0_0_0_1px_var(--status-down)] focus-visible:shadow-[inset_0_0_0_1.5px_var(--status-down)]",
          )}
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className={cx(
            "inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-primary sm:h-9 px-4 text-sm font-medium text-primary-foreground transition-[transform,background-color] duration-150 ease-out select-none hover:bg-primary/90 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60",
            FOCUS,
          )}
        >
          {state === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {error && (
        <p id={`${uid}-error`} className="flex items-center gap-1.5 text-sm text-[var(--status-down)]">
          <Icon size={14} className="shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5v5M12 16h.01" />
          </Icon>
          {error}
        </p>
      )}
    </form>
  );
}

function Dot({ tone, className }: { tone: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx("inline-block size-2 shrink-0 rounded-full", className)}
      style={{ background: tone, boxShadow: `0 0 0 4px color-mix(in oklab, ${tone} 22%, transparent)` }}
    />
  );
}

function Icon({ children, className, size = 16 }: { children: ReactNode; className?: string; size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  );
}

// A fine film grain for the display, as a tiling SVG noise image.
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

// The display stays dark in both themes: its ground is the theme's darkest token, its ink the lightest, and every
// colour role of the illustration is mixed from those two and the status colours.
const WELL_STYLE = {
  "--hud-accent": "color-mix(in oklab, var(--status-ok) 72%, white)",
  "--illos-ground": "var(--well)",
  "--illos-ink": "color-mix(in oklab, var(--well-ink) 84%, var(--well))",
  "--illos-line": "color-mix(in oklab, var(--well-ink) 50%, var(--well))",
  "--illos-faint": "color-mix(in oklab, var(--well-ink) 15%, var(--well))",
  "--illos-accent": "var(--hud-accent)",
  "--illos-accent-dim": "color-mix(in oklab, var(--hud-accent) 50%, var(--well))",
  "--illos-alert": "color-mix(in oklab, var(--status-down) 82%, white)",
  background: `${GRAIN}, radial-gradient(75% 65% at 50% 45%, color-mix(in oklab, var(--hud-accent) 10%, var(--well)), transparent 72%), radial-gradient(120% 90% at 50% 115%, color-mix(in oklab, black 45%, var(--well)), transparent 65%), var(--well)`,
  boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.06), inset 0 1px 0 rgb(255 255 255 / 0.05)",
} as CSSProperties;

/** The illustration on its dark display. Decorative here: the banner's own text says what it means. */
function HudWell({ svg, className, artClassName }: { svg: string; className?: string; artClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? playInView(ref.current) : undefined), []);
  return (
    <div
      aria-hidden="true"
      className={cx(
        "relative isolate overflow-hidden select-none",
        "[--well:var(--color-foreground)] [--well-ink:var(--color-background)]",
        "dark:[--well:color-mix(in_oklab,var(--color-background)_70%,black)] dark:[--well-ink:var(--color-foreground)]",
        className,
      )}
      style={WELL_STYLE}
    >
      <div
        ref={ref}
        className={cx("pointer-events-none absolute inset-0 grid place-items-center [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-none [&>svg]:shrink-0", artClassName)}
        style={{ "--illos-play": "paused" } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}

/** The illustration loops on its own; this only runs it while a quarter of it is on screen. Its own CSS keeps it still for prefers-reduced-motion. */
function playInView(host: HTMLElement): () => void {
  const io = new IntersectionObserver(
    (entries) => host.style.setProperty("--illos-play", entries[entries.length - 1].intersectionRatio >= 0.2 ? "running" : "paused"),
    { threshold: [0, 0.25] },
  );
  io.observe(host);
  return () => io.disconnect();
}
