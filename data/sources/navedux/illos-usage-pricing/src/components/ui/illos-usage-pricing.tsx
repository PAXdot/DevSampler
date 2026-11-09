"use client";

// Usage-based pricing card with a cost estimate.
// The illustration is Usage billing (Isometric) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useRef, type CSSProperties, useId, useState } from "react";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const BILLING_SVG = `<svg class="li-billing" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" role="img" aria-labelledby="li-billing-t">
<title id="li-billing-t">Usage billing</title>
<style>
@scope (svg.li-billing) {
:scope{--d:var(--illos-dark,0);--g:var(--illos-ground,#ffffff);--ink:var(--illos-ink,#2a2a2a);--accent:var(--illos-accent,#1daf9c);--mute:color-mix(in srgb,var(--ink) 45%,var(--g))}
path,polygon,ellipse,circle{vector-effect:non-scaling-stroke;stroke-linecap:round;stroke-linejoin:round}
.top{fill:color-mix(in srgb,var(--ink) calc(var(--d) * 10% + (1 - var(--d)) * 0%),var(--g))}
.left{fill:color-mix(in srgb,var(--ink) calc(var(--d) * 5% + (1 - var(--d)) * 4%),var(--g))}
.right{fill:color-mix(in srgb,var(--ink) calc(var(--d) * 2% + (1 - var(--d)) * 9%),var(--g))}
.recess{fill:color-mix(in srgb,var(--ink) calc(var(--d) * 4% + (1 - var(--d)) * 6%),var(--g))}
.ttop{fill:color-mix(in srgb,var(--accent) calc(var(--d) * 30% + (1 - var(--d)) * 10%),var(--g))}
.tleft{fill:color-mix(in srgb,var(--accent) calc(var(--d) * 22% + (1 - var(--d)) * 18%),var(--g))}
.tright{fill:color-mix(in srgb,var(--accent) calc(var(--d) * 16% + (1 - var(--d)) * 26%),var(--g))}
.e,.m,.te,.tem{fill:none;stroke-width:1px}
.e{stroke:var(--ink)}.m{stroke:var(--mute)}.te{stroke:var(--accent)}
.tcell{fill:color-mix(in srgb,var(--accent) 75%,var(--g));stroke:var(--accent);stroke-width:1px}
.tem{stroke:color-mix(in srgb,var(--accent) 45%,var(--g))}
.d{stroke-dasharray:2 3}
.dot{fill:var(--ink)}.tdot{fill:var(--accent)}.mdot{fill:var(--mute)}

.tf{transform-box:fill-box;transform-origin:50% 50%;opacity:0}
.sl-old .sf{opacity:0}
.flash{opacity:0}
.tk0{animation:li-billing_m0 3.6s linear}.tk0 .tf{animation:li-billing_f0 3.6s linear}
.tk1{animation:li-billing_m1 3.6s linear}.tk1 .tf{animation:li-billing_f1 3.6s linear}
.tk2{animation:li-billing_m2 3.6s linear}.tk2 .tf{animation:li-billing_f2 3.6s linear}
.tk3{animation:li-billing_m3 3.6s linear}.tk3 .tf{animation:li-billing_f3 3.6s linear}
.sl-old{animation:li-billing_om 3.6s linear}.sl-old .sf{animation:li-billing_of 3.6s linear}
.sl-new{animation:li-billing_new 3.6s linear}
.flash{animation:li-billing_flash 3.6s linear}
.labinv{animation:li-billing_lab 3.6s linear}
@keyframes li-billing_m0{0%{transform:translateY(-56px)}6.944%{transform:translateY(-56px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}16.389%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}18.333%{transform:translateY(-2.5px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}21.944%{transform:translateY(0px)}54.167%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}66.667%{transform:translateY(84px)}100%{transform:translateY(84px)}}
@keyframes li-billing_f0{0%{opacity:0;transform:scale(0.92)}6.944%{opacity:0;transform:scale(0.92);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}12.5%{opacity:1;transform:scale(1)}67.222%{opacity:1;transform:scale(1)}67.778%{opacity:0;transform:scale(1)}100%{opacity:0;transform:scale(1)}}
@keyframes li-billing_m1{0%{transform:translateY(-46px)}16.944%{transform:translateY(-46px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}26.389%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}28.333%{transform:translateY(-2.5px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}31.944%{transform:translateY(0px)}54.167%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}66.667%{transform:translateY(84px)}100%{transform:translateY(84px)}}
@keyframes li-billing_f1{0%{opacity:0;transform:scale(0.92)}16.944%{opacity:0;transform:scale(0.92);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}22.5%{opacity:1;transform:scale(1)}67.222%{opacity:1;transform:scale(1)}67.778%{opacity:0;transform:scale(1)}100%{opacity:0;transform:scale(1)}}
@keyframes li-billing_m2{0%{transform:translateY(-36px)}26.944%{transform:translateY(-36px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}36.389%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}38.333%{transform:translateY(-2.5px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}41.944%{transform:translateY(0px)}54.167%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}66.667%{transform:translateY(84px)}100%{transform:translateY(84px)}}
@keyframes li-billing_f2{0%{opacity:0;transform:scale(0.92)}26.944%{opacity:0;transform:scale(0.92);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}32.5%{opacity:1;transform:scale(1)}67.222%{opacity:1;transform:scale(1)}67.778%{opacity:0;transform:scale(1)}100%{opacity:0;transform:scale(1)}}
@keyframes li-billing_m3{0%{transform:translateY(-26px)}36.944%{transform:translateY(-26px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}46.389%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}48.333%{transform:translateY(-2.5px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}51.944%{transform:translateY(0px)}54.167%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}66.667%{transform:translateY(84px)}100%{transform:translateY(84px)}}
@keyframes li-billing_f3{0%{opacity:0;transform:scale(0.92)}36.944%{opacity:0;transform:scale(0.92);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}42.5%{opacity:1;transform:scale(1)}67.222%{opacity:1;transform:scale(1)}67.778%{opacity:0;transform:scale(1)}100%{opacity:0;transform:scale(1)}}
@keyframes li-billing_om{0%{transform:translateY(0px)}55%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}65%{transform:translateY(-18px)}100%{transform:translateY(-18px)}}
@keyframes li-billing_of{0%{opacity:1}55%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}63.333%{opacity:0}100%{opacity:0}}
@keyframes li-billing_new{0%{transform:translateY(94px)}67.222%{transform:translateY(94px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}84.722%{transform:translateY(0px)}100%{transform:translateY(0px)}}
@keyframes li-billing_flash{0%{opacity:0}66.111%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}68.889%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}81.944%{opacity:0}100%{opacity:0}}
@keyframes li-billing_lab{0%{opacity:1}54.167%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}58.333%{opacity:0}83.333%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}90.278%{opacity:1}100%{opacity:1}}
*{animation-iteration-count:1!important;animation-fill-mode:both!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<polygon class="right" points="473.83,301 473.51,302.93 472.53,304.79 470.95,306.5 468.81,308 330.25,388 327.65,389.23 324.69,390.15 321.47,390.71 318.12,390.9 318.12,400.9 321.47,400.71 324.69,400.15 327.65,399.23 330.25,398 468.81,318 470.95,316.5 472.53,314.79 473.51,312.93 473.83,311"/><polygon class="left" points="318.12,390.9 314.78,390.71 311.56,390.15 308.6,389.23 306,388 143.19,294 141.05,292.5 139.47,290.79 138.49,288.93 138.17,287 138.17,297 138.49,298.93 139.47,300.79 141.05,302.5 143.19,304 306,398 308.6,399.23 311.56,400.15 314.78,400.71 318.12,400.9"/><polygon class="top" points="281.75,200 284.35,198.77 287.31,197.85 290.53,197.29 293.88,197.1 297.22,197.29 300.44,197.85 303.4,198.77 306,200 468.81,294 470.95,295.5 472.53,297.21 473.51,299.07 473.83,301 473.51,302.93 472.53,304.79 470.95,306.5 468.81,308 330.25,388 327.65,389.23 324.69,390.15 321.47,390.71 318.12,390.9 314.78,390.71 311.56,390.15 308.6,389.23 306,388 143.19,294 141.05,292.5 139.47,290.79 138.49,288.93 138.17,287 138.49,285.07 139.47,283.21 141.05,281.5 143.19,280"/><path class="e" d="M281.75 200L284.35 198.77L287.31 197.85L290.53 197.29L293.88 197.1L297.22 197.29L300.44 197.85L303.4 198.77L306 200L468.81 294L470.95 295.5L472.53 297.21L473.51 299.07L473.83 301L473.51 302.93L472.53 304.79L470.95 306.5L468.81 308L330.25 388L327.65 389.23L324.69 390.15L321.47 390.71L318.12 390.9L314.78 390.71L311.56 390.15L308.6 389.23L306 388L143.19 294L141.05 292.5L139.47 290.79L138.49 288.93L138.17 287L138.49 285.07L139.47 283.21L141.05 281.5L143.19 280ZM473.83 311L473.51 312.93L472.53 314.79L470.95 316.5L468.81 318L330.25 398L327.65 399.23L324.69 400.15L321.47 400.71L318.12 400.9L314.78 400.71L311.56 400.15L308.6 399.23L306 398L143.19 304L141.05 302.5L139.47 300.79L138.49 298.93L138.17 297M473.83 301L473.83 311M138.17 287L138.17 297"/>
<polygon class="right" points="454.06,197 453.78,198.66 452.95,200.25 451.59,201.71 449.76,203 328.52,273 326.29,274.06 323.75,274.84 320.99,275.32 318.12,275.49 318.12,379.49 320.99,379.32 323.75,378.84 326.29,378.06 328.52,377 449.76,307 451.59,305.71 452.95,304.25 453.78,302.66 454.06,301"/><polygon class="left" points="318.12,275.49 315.26,275.32 312.5,274.84 309.96,274.06 307.73,273 162.24,189 160.41,187.71 159.05,186.25 158.22,184.66 157.94,183 157.94,287 158.22,288.66 159.05,290.25 160.41,291.71 162.24,293 307.73,377 309.96,378.06 312.5,378.84 315.26,379.32 318.12,379.49"/><polygon class="top" points="283.48,107 285.71,105.94 288.25,105.16 291.01,104.68 293.88,104.51 296.74,104.68 299.5,105.16 302.04,105.94 304.27,107 449.76,191 451.59,192.29 452.95,193.75 453.78,195.34 454.06,197 453.78,198.66 452.95,200.25 451.59,201.71 449.76,203 328.52,273 326.29,274.06 323.75,274.84 320.99,275.32 318.12,275.49 315.26,275.32 312.5,274.84 309.96,274.06 307.73,273 162.24,189 160.41,187.71 159.05,186.25 158.22,184.66 157.94,183 158.22,181.34 159.05,179.75 160.41,178.29 162.24,177"/><path class="e" d="M283.48 107L285.71 105.94L288.25 105.16L291.01 104.68L293.88 104.51L296.74 104.68L299.5 105.16L302.04 105.94L304.27 107L449.76 191L451.59 192.29L452.95 193.75L453.78 195.34L454.06 197L453.78 198.66L452.95 200.25L451.59 201.71L449.76 203L328.52 273L326.29 274.06L323.75 274.84L320.99 275.32L318.12 275.49L315.26 275.32L312.5 274.84L309.96 274.06L307.73 273L162.24 189L160.41 187.71L159.05 186.25L158.22 184.66L157.94 183L158.22 181.34L159.05 179.75L160.41 178.29L162.24 177ZM454.06 301L453.78 302.66L452.95 304.25L451.59 305.71L449.76 307L328.52 377L326.29 378.06L323.75 378.84L320.99 379.32L318.12 379.49L315.26 379.32L312.5 378.84L309.96 378.06L307.73 377L162.24 293L160.41 291.71L159.05 290.25L158.22 288.66L157.94 287M454.06 197L454.06 301M157.94 183L157.94 287"/>
<path class="m" d="M287.81 111.5L289.11 110.88L290.59 110.43L292.2 110.15L293.88 110.05L295.55 110.15L297.16 110.43L298.64 110.88L299.94 111.5L441.97 193.5L443.03 194.25L443.82 195.11L444.31 196.03L444.48 197L444.31 197.97L443.82 198.89L443.03 199.75L441.97 200.5L324.19 268.5L322.89 269.12L321.41 269.57L319.8 269.85L318.12 269.95L316.45 269.85L314.84 269.57L313.36 269.12L312.06 268.5L170.03 186.5L168.97 185.75L168.18 184.89L167.69 183.97L167.52 183L167.69 182.03L168.18 181.11L168.97 180.25L170.03 179.5Z"/>
<ellipse class="e" cx="435.9" cy="197" rx="2.94" ry="1.7"/>
<ellipse class="e" cx="176.1" cy="183" rx="2.94" ry="1.7"/>
<ellipse class="e" cx="318.12" cy="265" rx="2.94" ry="1.7"/>
<polygon class="recess" points="340.64,162 341.38,161.65 342.23,161.39 343.15,161.23 344.11,161.17 345.06,161.23 345.98,161.39 346.83,161.65 347.57,162 409.92,198 410.53,198.43 410.99,198.92 411.26,199.45 411.36,200 411.26,200.55 410.99,201.08 410.53,201.57 409.92,202 409.92,202 409.18,202.35 408.33,202.61 407.41,202.77 406.46,202.83 405.5,202.77 404.58,202.61 403.74,202.35 402.99,202 340.64,166 340.03,165.57 339.58,165.08 339.3,164.55 339.21,164 339.3,163.45 339.58,162.92 340.03,162.43 340.64,162"/><path class="e" d="M340.64 162L341.38 161.65L342.23 161.39L343.15 161.23L344.11 161.17L345.06 161.23L345.98 161.39L346.83 161.65L347.57 162L409.92 198L410.53 198.43L410.99 198.92L411.26 199.45L411.36 200L411.26 200.55L410.99 201.08L410.53 201.57L409.92 202L409.92 202L409.18 202.35L408.33 202.61L407.41 202.77L406.46 202.83L405.5 202.77L404.58 202.61L403.74 202.35L402.99 202L340.64 166L340.03 165.57L339.58 165.08L339.3 164.55L339.21 164L339.3 163.45L339.58 162.92L340.03 162.43L340.64 162Z"/>
<path class="m" d="M336.31 158.5L337.98 157.71L339.89 157.12L341.95 156.76L344.11 156.64L346.26 156.76L348.32 157.12L350.23 157.71L351.9 158.5L415.99 195.5L417.36 196.46L418.37 197.56L419 198.76L419.21 200L419 201.24L418.37 202.44L417.36 203.54L415.99 204.5L414.25 205.5L412.58 206.29L410.68 206.88L408.61 207.24L406.46 207.36L404.31 207.24L402.24 206.88L400.34 206.29L398.66 205.5L334.58 168.5L333.21 167.54L332.19 166.44L331.56 165.24L331.35 164L331.56 162.76L332.19 161.56L333.21 160.46L334.58 159.5Z"/>
<ellipse class="e" cx="351.03" cy="222" rx="7.96" ry="4.6"/>
<ellipse class="m" cx="351.03" cy="222" rx="3.43" ry="1.98"/>
<ellipse class="dot flash" cx="351.03" cy="222" rx="5.39" ry="3.11"/>
<path class="m" d="M180.43 269.5L179.43 268.7L178.59 267.56L178.03 266.26L177.83 265L177.83 245L178.03 243.97L178.59 243.32L179.43 243.15L180.43 243.5L216.8 264.5L217.79 265.3L218.64 266.44L219.2 267.74L219.4 269L219.4 289L219.2 290.03L218.64 290.68L217.79 290.85L216.8 290.5ZM183.02 253L210.74 269M183.02 261L202.08 272M247.11 322L288.68 346M247.11 315L288.68 339M247.11 308L288.68 332M247.11 301L288.68 325M247.11 294L288.68 318M247.11 287L288.68 311M247.11 280L288.68 304"/>
<path class="m" d="M344.97 355.5L343.31 356.08L341.91 355.8L340.97 354.72L340.64 353L340.64 293L340.97 290.9L341.91 288.73L343.31 286.84L344.97 285.5L419.45 242.5L421.11 241.92L422.51 242.2L423.45 243.28L423.78 245L423.78 305L423.45 307.1L422.51 309.27L421.11 311.16L419.45 312.5Z"/>
<path class="e" d="M411.66 285L410.99 285.23L410.43 285.12L410.05 284.69L409.92 284L409.92 276L410.05 275.16L410.43 274.29L410.99 273.53L411.66 273L415.12 271L415.78 270.77L416.34 270.88L416.72 271.31L416.85 272L416.85 280L416.72 280.84L416.34 281.71L415.78 282.47L415.12 283Z"/>
<path class="left" d="M212.19 184L212.19 190A45.32 26.16 0 0 0 257.5 216.16L257.5 210.16A45.32 26.16 0 0 1 212.19 184Z"/><path class="right" d="M302.82 184L302.82 190A45.32 26.16 0 0 1 257.5 216.16L257.5 210.16A45.32 26.16 0 0 0 302.82 184Z"/><ellipse class="top" cx="257.5" cy="184" rx="45.32" ry="26.16"/><path class="e" d="M212.19 184L212.19 190A45.32 26.16 0 0 0 302.82 190L302.82 184"/><ellipse class="e" cx="257.5" cy="184" rx="45.32" ry="26.16"/>
<ellipse class="e" cx="257.5" cy="184" rx="31.84" ry="18.38"/>
<ellipse class="recess" cx="257.5" cy="184" rx="31.84" ry="18.38"/>
<path class="m d" d="M219.54 184A37.97 21.92 0 0 1 295.47 184"/>
<path class="e" d="M219.54 114A37.97 21.92 0 0 1 295.47 114"/>
<clipPath id="li-billing-hole"><polygon points="289.35,184 288.73,187.59 286.92,191.04 283.98,194.21 280.02,197 275.19,199.29 269.69,200.99 263.71,202.03 257.5,202.38 251.29,202.03 245.32,200.99 239.81,199.29 234.99,197 231.03,194.21 228.08,191.04 226.27,187.59 225.66,184 225.66,0 289.35,0"/></clipPath><g clip-path="url(#li-billing-hole)"><g class="tk0"><g class="tf"><path class="left" d="M228.11 174L228.11 184A29.39 16.97 0 0 0 257.5 200.97L257.5 190.97A29.39 16.97 0 0 1 228.11 174Z"/><path class="right" d="M286.9 174L286.9 184A29.39 16.97 0 0 1 257.5 200.97L257.5 190.97A29.39 16.97 0 0 0 286.9 174Z"/><ellipse class="top" cx="257.5" cy="174" rx="29.39" ry="16.97"/><path class="e" d="M228.11 174L228.11 184A29.39 16.97 0 0 0 286.9 184L286.9 174"/><ellipse class="e" cx="257.5" cy="174" rx="29.39" ry="16.97"/><ellipse class="m" cx="257.5" cy="174" rx="22.05" ry="12.73"/></g></g><g class="tk1"><g class="tf"><path class="left" d="M228.11 164L228.11 174A29.39 16.97 0 0 0 257.5 190.97L257.5 180.97A29.39 16.97 0 0 1 228.11 164Z"/><path class="right" d="M286.9 164L286.9 174A29.39 16.97 0 0 1 257.5 190.97L257.5 180.97A29.39 16.97 0 0 0 286.9 164Z"/><ellipse class="top" cx="257.5" cy="164" rx="29.39" ry="16.97"/><path class="e" d="M228.11 164L228.11 174A29.39 16.97 0 0 0 286.9 174L286.9 164"/><ellipse class="e" cx="257.5" cy="164" rx="29.39" ry="16.97"/><ellipse class="m" cx="257.5" cy="164" rx="22.05" ry="12.73"/></g></g><g class="tk2"><g class="tf"><path class="left" d="M228.11 154L228.11 164A29.39 16.97 0 0 0 257.5 180.97L257.5 170.97A29.39 16.97 0 0 1 228.11 154Z"/><path class="right" d="M286.9 154L286.9 164A29.39 16.97 0 0 1 257.5 180.97L257.5 170.97A29.39 16.97 0 0 0 286.9 154Z"/><ellipse class="top" cx="257.5" cy="154" rx="29.39" ry="16.97"/><path class="e" d="M228.11 154L228.11 164A29.39 16.97 0 0 0 286.9 164L286.9 154"/><ellipse class="e" cx="257.5" cy="154" rx="29.39" ry="16.97"/><ellipse class="m" cx="257.5" cy="154" rx="22.05" ry="12.73"/></g></g><g class="tk3"><g class="tf"><path class="left" d="M228.11 144L228.11 154A29.39 16.97 0 0 0 257.5 170.97L257.5 160.97A29.39 16.97 0 0 1 228.11 144Z"/><path class="right" d="M286.9 144L286.9 154A29.39 16.97 0 0 1 257.5 170.97L257.5 160.97A29.39 16.97 0 0 0 286.9 144Z"/><ellipse class="top" cx="257.5" cy="144" rx="29.39" ry="16.97"/><path class="e" d="M228.11 144L228.11 154A29.39 16.97 0 0 0 286.9 154L286.9 144"/><ellipse class="e" cx="257.5" cy="144" rx="29.39" ry="16.97"/><ellipse class="m" cx="257.5" cy="144" rx="22.05" ry="12.73"/></g></g></g>
<path class="e" d="M219.54 114V184M295.47 114V184M219.54 114A37.97 21.92 0 0 0 295.47 114M219.54 184A37.97 21.92 0 0 0 295.47 184"/><path class="m" d="M226.54 126V154M231.54 128V140"/>
<clipPath id="li-billing-slot"><polygon points="337.18,164 406.46,204 406.46,0 337.18,0"/></clipPath><g clip-path="url(#li-billing-slot)"><g class="sl-old"><g class="sf"><polygon class="tright" points="398.34,112.25 398.3,112.46 398.2,112.66 398.03,112.84 397.8,113 397.8,113 397.52,113.13 397.2,113.23 396.86,113.29 396.5,113.31 396.5,209.31 396.86,209.29 397.2,209.23 397.52,209.13 397.8,209 397.8,209 398.03,208.84 398.2,208.66 398.3,208.46 398.34,208.25"/><polygon class="tleft" points="396.5,113.31 396.14,113.29 395.8,113.23 395.48,113.13 395.2,113 345.84,84.5 345.61,84.34 345.44,84.16 345.33,83.96 345.3,83.75 345.3,179.75 345.33,179.96 345.44,180.16 345.61,180.34 345.84,180.5 395.2,209 395.48,209.13 395.8,209.23 396.14,209.29 396.5,209.31"/><polygon class="ttop" points="345.84,83 346.12,82.87 346.43,82.77 346.78,82.71 347.14,82.69 347.49,82.71 347.84,82.77 348.16,82.87 348.44,83 397.8,111.5 398.03,111.66 398.2,111.84 398.3,112.04 398.34,112.25 398.3,112.46 398.2,112.66 398.03,112.84 397.8,113 397.8,113 397.52,113.13 397.2,113.23 396.86,113.29 396.5,113.31 396.14,113.29 395.8,113.23 395.48,113.13 395.2,113 345.84,84.5 345.61,84.34 345.44,84.16 345.33,83.96 345.3,83.75 345.33,83.54 345.44,83.34 345.61,83.16 345.84,83"/><path class="te" d="M345.84 83L346.12 82.87L346.43 82.77L346.78 82.71L347.14 82.69L347.49 82.71L347.84 82.77L348.16 82.87L348.44 83L397.8 111.5L398.03 111.66L398.2 111.84L398.3 112.04L398.34 112.25L398.3 112.46L398.2 112.66L398.03 112.84L397.8 113L397.8 113L397.52 113.13L397.2 113.23L396.86 113.29L396.5 113.31L396.14 113.29L395.8 113.23L395.48 113.13L395.2 113L345.84 84.5L345.61 84.34L345.44 84.16L345.33 83.96L345.3 83.75L345.33 83.54L345.44 83.34L345.61 83.16L345.84 83ZM398.34 208.25L398.3 208.46L398.2 208.66L398.03 208.84L397.8 209L397.8 209L397.52 209.13L397.2 209.23L396.86 209.29L396.5 209.31L396.14 209.29L395.8 209.23L395.48 209.13L395.2 209L345.84 180.5L345.61 180.34L345.44 180.16L345.33 179.96L345.3 179.75M398.34 112.25L398.34 208.25M345.3 83.75L345.3 179.75"/><path class="tem" d="M351.47 101.75L382.64 119.75M351.47 110.75L375.72 124.75M351.47 119.75L382.64 137.75M351.47 128.75L375.72 142.75M351.47 135.75L389.57 157.75"/><path class="te" d="M373.98 156.75L389.57 165.75"/></g></g><g class="sl-new"><polygon class="tright" points="398.34,112.25 398.3,112.46 398.2,112.66 398.03,112.84 397.8,113 397.8,113 397.52,113.13 397.2,113.23 396.86,113.29 396.5,113.31 396.5,209.31 396.86,209.29 397.2,209.23 397.52,209.13 397.8,209 397.8,209 398.03,208.84 398.2,208.66 398.3,208.46 398.34,208.25"/><polygon class="tleft" points="396.5,113.31 396.14,113.29 395.8,113.23 395.48,113.13 395.2,113 345.84,84.5 345.61,84.34 345.44,84.16 345.33,83.96 345.3,83.75 345.3,179.75 345.33,179.96 345.44,180.16 345.61,180.34 345.84,180.5 395.2,209 395.48,209.13 395.8,209.23 396.14,209.29 396.5,209.31"/><polygon class="ttop" points="345.84,83 346.12,82.87 346.43,82.77 346.78,82.71 347.14,82.69 347.49,82.71 347.84,82.77 348.16,82.87 348.44,83 397.8,111.5 398.03,111.66 398.2,111.84 398.3,112.04 398.34,112.25 398.3,112.46 398.2,112.66 398.03,112.84 397.8,113 397.8,113 397.52,113.13 397.2,113.23 396.86,113.29 396.5,113.31 396.14,113.29 395.8,113.23 395.48,113.13 395.2,113 345.84,84.5 345.61,84.34 345.44,84.16 345.33,83.96 345.3,83.75 345.33,83.54 345.44,83.34 345.61,83.16 345.84,83"/><path class="te" d="M345.84 83L346.12 82.87L346.43 82.77L346.78 82.71L347.14 82.69L347.49 82.71L347.84 82.77L348.16 82.87L348.44 83L397.8 111.5L398.03 111.66L398.2 111.84L398.3 112.04L398.34 112.25L398.3 112.46L398.2 112.66L398.03 112.84L397.8 113L397.8 113L397.52 113.13L397.2 113.23L396.86 113.29L396.5 113.31L396.14 113.29L395.8 113.23L395.48 113.13L395.2 113L345.84 84.5L345.61 84.34L345.44 84.16L345.33 83.96L345.3 83.75L345.33 83.54L345.44 83.34L345.61 83.16L345.84 83ZM398.34 208.25L398.3 208.46L398.2 208.66L398.03 208.84L397.8 209L397.8 209L397.52 209.13L397.2 209.23L396.86 209.29L396.5 209.31L396.14 209.29L395.8 209.23L395.48 209.13L395.2 209L345.84 180.5L345.61 180.34L345.44 180.16L345.33 179.96L345.3 179.75M398.34 112.25L398.34 208.25M345.3 83.75L345.3 179.75"/><path class="tem" d="M351.47 101.75L382.64 119.75M351.47 110.75L375.72 124.75M351.47 119.75L382.64 137.75M351.47 128.75L375.72 142.75M351.47 135.75L389.57 157.75"/><path class="te" d="M373.98 156.75L389.57 165.75"/></g></g>
<g class="lab"><circle class="dot" cx="278.38" cy="95.81" r="1.75"/><path class="e" d="M278.38 95.81V52H596"/><path class="e" d="M604 48.4L604 54.4L605.2 55.6L607.6 55.6L608.8 54.4L608.8 48.4M616.48 49.6L615.28 48.4L612.88 48.4L611.68 49.6L611.68 50.8L612.88 52L615.28 52L616.48 53.2L616.48 54.4L615.28 55.6L612.88 55.6L611.68 54.4M619.36 55.6L619.36 50.8L621.76 48.4L624.16 50.8L624.16 55.6M619.36 52.6L624.16 52.6M631.84 49.6L630.64 48.4L628.24 48.4L627.04 49.6L627.04 54.4L628.24 55.6L630.64 55.6L631.84 54.4L631.84 52L629.44 52M639.52 48.4L634.72 48.4L634.72 55.6L639.52 55.6M634.72 52L638.32 52"/></g>
<g class="labinv"><g class="lab"><circle class="tdot" cx="397.37" cy="152.25" r="1.75"/><path class="te" d="M397.37 152.25H596"/><path class="te" d="M605.2 148.65L607.6 148.65M606.4 148.65L606.4 155.85M605.2 155.85L607.6 155.85M611.68 155.85L611.68 148.65L616.48 155.85L616.48 148.65M619.36 148.65L621.76 155.85L624.16 148.65M628.24 148.65L630.64 148.65L631.84 149.85L631.84 154.65L630.64 155.85L628.24 155.85L627.04 154.65L627.04 149.85L628.24 148.65M635.92 148.65L638.32 148.65M637.12 148.65L637.12 155.85M635.92 155.85L638.32 155.85M647.2 149.85L646 148.65L643.6 148.65L642.4 149.85L642.4 154.65L643.6 155.85L646 155.85L647.2 154.65M654.88 148.65L650.08 148.65L650.08 155.85L654.88 155.85M650.08 152.25L653.68 152.25"/></g></g>
<g class="lab"><circle class="dot" cx="432.44" cy="257" r="1.75"/><path class="e" d="M432.44 257H596"/><path class="e" d="M604 260.6L604 253.4L606.4 257L608.8 253.4L608.8 260.6M616.48 253.4L611.68 253.4L611.68 260.6L616.48 260.6M611.68 257L615.28 257M619.36 253.4L624.16 253.4M621.76 253.4L621.76 260.6M631.84 253.4L627.04 253.4L627.04 260.6L631.84 260.6M627.04 257L630.64 257M634.72 260.6L634.72 253.4L638.32 253.4L639.52 254.6L639.52 255.8L638.32 257L634.72 257M637.12 257L639.52 260.6"/></g>
</svg>`;

export type IllosUsagePricingProps = {
  planName?: string;
  description?: string;
  /** Price for each block of `unitSize` units. */
  unitPrice?: number;
  unitSize?: number;
  unitLabel?: string;
  /** Units included free every month. */
  freeUnits?: number;
  maxUnits?: number;
  defaultUnits?: number;
  currency?: string;
  features?: string[];
  ctaLabel?: string;
  onSelect?: (units: number) => void;
  className?: string;
};

export function IllosUsagePricing({
  planName = "Usage",
  description = "Pay only for the requests you make. No minimums and no seats.",
  unitPrice = 0.4,
  unitSize = 1000,
  unitLabel = "requests",
  freeUnits = 100000,
  maxUnits = 10000000,
  defaultUnits = 2000000,
  currency = "USD",
  features = ["100,000 requests free every month", "Lower rates past 50 million", "Usage alerts and spend caps", "Invoices you can forward to finance"],
  ctaLabel = "Start for free",
  onSelect,
  className,
}: IllosUsagePricingProps) {
  const id = useId();
  const [units, setUnits] = useState(defaultUnits);
  const money = new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 });
  const count = new Intl.NumberFormat("en-US");
  const short = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
  const cost = (Math.max(0, units - freeUnits) / unitSize) * unitPrice;
  return (
    <div className={cx("flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-border bg-card", className)}>
      <IllosArt svg={BILLING_SVG} className="w-full border-b border-border [--illos-dark:0] [--illos-ground:var(--color-card)] [--illos-ink:var(--color-foreground)] dark:[--illos-dark:1]" />
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-muted-foreground">{planName}</span>
          <p className="flex items-baseline gap-1.5">
            <span className="text-3xl font-semibold tracking-tight text-card-foreground">{money.format(unitPrice)}</span>
            <span className="text-sm text-muted-foreground">
              per {count.format(unitSize)} {unitLabel}
            </span>
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col gap-3 rounded-lg bg-muted p-4">
          <label htmlFor={id} className="flex items-center justify-between text-sm text-card-foreground">
            <span>Monthly {unitLabel}</span>
            <span className="font-medium tabular-nums">{short.format(units)}</span>
          </label>
          <input
            id={id}
            type="range"
            min={0}
            max={maxUnits}
            step={maxUnits / 100}
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            className="w-full accent-[var(--color-primary)]"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Estimated bill</span>
            <span className="font-semibold tabular-nums text-card-foreground">{money.format(cost)} / month</span>
          </div>
        </div>
        <ul className="flex flex-col gap-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-card-foreground">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => onSelect?.(units)} className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background h-10 w-full">
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}

export default IllosUsagePricing;

/** The illustration, inline. Decorative here: the block's own text says what it means. */
function IllosArt({ svg, className, style }: { svg: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? loopInView(ref.current) : undefined), []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx("[&>svg]:h-auto [&>svg]:w-full", className)}
      style={{ "--illos-play": "paused", ...style } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

/** Loops while a quarter of it is in view, restarting each cycle on the next frame, and pauses off screen. Still for prefers-reduced-motion. */
function loopInView(host: HTMLElement): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const animations = () => host.getAnimations({ subtree: true });
  let visible = false;
  let stopped = false;
  let waiting = false;
  const loop = () => {
    if (waiting || stopped || !visible) return;
    const list = animations();
    if (!list.length) return;
    waiting = true;
    Promise.all(list.map((a) => a.finished)).then(
      () =>
        requestAnimationFrame(() => {
          waiting = false;
          if (stopped || !visible) return;
          for (const a of animations()) a.currentTime = 0; // seek only: play() takes a CSS animation out of CSS control
          loop();
        }),
      () =>
        requestAnimationFrame(() => {
          waiting = false; // an animation was cancelled: pick the loop back up
          loop();
        }),
    );
  };
  const io = new IntersectionObserver(
    (entries) => {
      visible = entries.some((e) => e.isIntersecting);
      host.style.setProperty("--illos-play", visible ? "running" : "paused");
      loop();
    },
    { threshold: 0.25 },
  );
  io.observe(host);
  return () => {
    stopped = true;
    io.disconnect();
  };
}
