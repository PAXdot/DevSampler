"use client";

// Audit log panel: search, a category filter, rows that open to show the full record, and a CSV export.
// The illustration is Audit log (HUD) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

const AUDIT_SVG = `<svg class="sf-audit-log" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" stroke="#1daf9c" role="img" aria-labelledby="sf-audit-log-t" aria-describedby="sf-audit-log-d">
<title id="sf-audit-log-t">Audit log</title>
<desc id="sf-audit-log-d">A person presses a button and the event runs down a wire to a printer, which prints it as a new line on a paper tape: who, what and when. The tape moves on and winds onto a locked spool, so no line can be changed.</desc>
<defs><filter id="sf-audit-log-glow" x="-15%" y="-15%" width="130%" height="130%"><feGaussianBlur stdDeviation="2.2"/></filter><clipPath id="sf-audit-log-print"><path class="edge" d="M223.79 160L327.71 220L306.93 232L203.01 172Z"/></clipPath><clipPath id="sf-audit-log-tape"><path d="M244.57 248L355.43 312L572.8 186.5L461.95 122.5Z"/></clipPath></defs>
<style>@scope (svg.sf-audit-log) {
:scope{--_ground:#ffffff;--_ink:#2a2a2a;--_line:#7a7a7a;--_faint:#dadadc;--_accent:#1daf9c;--_accent-dim:#84ebdd;--_alert:#d02533}
@media (prefers-color-scheme: dark){:scope{--_ground:#101112;--_ink:#dadadc;--_line:#8a8a8a;--_faint:#2a2a2a;--_accent:#3fdec9;--_accent-dim:#178c7d;--_alert:#fb3748}}
:scope{stroke:none}
@keyframes sf-audit-log_spin{0%{transform:matrix(-0.866025,0.5,0,-1,0,0) rotate(0deg) matrix(-1.154701,-0.577350,0,-1,0,0)}69.048%{transform:matrix(-0.866025,0.5,0,-1,0,0) rotate(0deg) matrix(-1.154701,-0.577350,0,-1,0,0);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}83.333%{transform:matrix(-0.866025,0.5,0,-1,0,0) rotate(-90deg) matrix(-1.154701,-0.577350,0,-1,0,0)}100%{transform:matrix(-0.866025,0.5,0,-1,0,0) rotate(-90deg) matrix(-1.154701,-0.577350,0,-1,0,0)}}
.spin{transform-box:view-box;transform-origin:564.14px 159.5px;animation:sf-audit-log_spin 4.2s linear}
@keyframes sf-audit-log_light{0%{opacity:0}30.952%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}33.333%{opacity:1}58.333%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}63.095%{opacity:0}100%{opacity:0}}
.light{opacity:0;animation:sf-audit-log_light 4.2s linear}
@keyframes sf-audit-log_head{0%{transform:translate(0px,0px)}33.333%{transform:translate(0px,0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}57.143%{transform:translate(69.28px,40px)}58.333%{transform:translate(69.28px,40px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}67.857%{transform:translate(0px,0px)}100%{transform:translate(0px,0px)}}
.head{animation:sf-audit-log_head 4.2s linear}
@keyframes sf-audit-log_press{0%{transform:translateY(0)}7.143%{transform:translateY(0);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}9.048%{transform:translateY(2.5px)}10%{transform:translateY(2.5px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}14.286%{transform:translateY(0)}100%{transform:translateY(0)}}
.press{animation:sf-audit-log_press 4.2s linear}
@keyframes sf-audit-log_run{0%{transform:translate(0,0)}14.286%{transform:translate(0px,0px);animation-timing-function:linear}30.952%{transform:translate(81.41px,-47px);animation-timing-function:linear}100%{transform:translate(81.41px,-47px)}}
.run{animation:sf-audit-log_run 4.2s linear}
@keyframes sf-audit-log_blink{0%{opacity:0}12.381%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}14.286%{opacity:1}29.524%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}31.905%{opacity:0}100%{opacity:0}}
.blink{opacity:0;animation:sf-audit-log_blink 4.2s linear}
@keyframes sf-audit-log_edge{0%{transform:translate(0px,0px)}33.333%{transform:translate(0px,0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}57.143%{transform:translate(76.21px,44px)}100%{transform:translate(76.21px,44px)}}
.edge{animation:sf-audit-log_edge 4.2s linear}
@keyframes sf-audit-log_feed{0%{transform:translate(0px,0px)}69.048%{transform:translate(0px,0px);animation-timing-function:cubic-bezier(0.77,0,0.175,1)}83.333%{transform:translate(29.44px,-17px)}100%{transform:translate(29.44px,-17px)}}
.feed{animation:sf-audit-log_feed 4.2s linear}
@keyframes sf-audit-log_teal{0%{opacity:1}69.048%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}83.333%{opacity:0}100%{opacity:0}}
.teal{animation:sf-audit-log_teal 4.2s linear}
@keyframes sf-audit-log_settle{0%{opacity:0}69.048%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}83.333%{opacity:1}100%{opacity:1}}
.settle{opacity:0;animation:sf-audit-log_settle 4.2s linear}
*{animation-iteration-count:infinite!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<use href="#sf-audit-log-glow-src" filter="url(#sf-audit-log-glow)" opacity="0.8"/><g id="sf-audit-log-glow-src"><path d="M472.34 132.5L562.41 184.5L345.03 310L254.97 258L472.34 132.5M345.03 310L345.03 313L562.41 187.5L562.41 184.5M261.89 258L479.27 132.5M338.11 302L555.48 176.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M351.96 314L552.01 198.5M351.96 314L359.76 318.5M359.32 309.75L362.79 311.75M366.68 305.5L370.15 307.5M374.05 301.25L377.51 303.25M381.41 297L389.2 301.5M388.77 292.75L392.23 294.75M396.13 288.5L399.59 290.5M403.49 284.25L406.95 286.25M410.85 280L418.65 284.5M418.21 275.75L421.68 277.75M425.57 271.5L429.04 273.5M432.93 267.25L436.4 269.25M440.3 263L448.09 267.5M447.66 258.75L451.12 260.75M455.02 254.5L458.48 256.5M462.38 250.25L465.84 252.25M469.74 246L477.54 250.5M477.1 241.75L480.57 243.75M484.46 237.5L487.93 239.5M491.82 233.25L495.29 235.25M499.19 229L506.98 233.5M506.55 224.75L510.01 226.75M513.91 220.5L517.37 222.5M521.27 216.25L524.73 218.25M528.63 212L536.42 216.5M535.99 207.75L539.46 209.75M543.35 203.5L546.82 205.5M550.71 199.25L554.18 201.25" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity="0.7"/><path d="M540.76 173L541.04 168.61L541.9 164L543.3 159.27L545.22 154.55L547.6 149.95L550.39 145.59L553.52 141.57L556.91 137.99L560.48 134.94L564.14 132.5L567.8 130.72L571.36 129.65L574.75 129.31L577.88 129.72L580.67 130.86L583.05 132.71L584.97 135.21L586.38 138.32L587.23 141.94L587.52 146L587.23 150.39L586.38 155L584.97 159.73L583.05 164.45L580.67 169.05L577.88 173.41L574.75 177.43L571.36 181.01L567.8 184.06L564.14 186.5L560.48 188.28L556.91 189.35L553.52 189.69L550.39 189.28L547.6 188.14L545.22 186.29L543.3 183.79L541.9 180.68L541.04 177.06L540.76 173M447.22 119L447.51 114.61L448.37 110L449.77 105.27L451.69 100.55L454.07 95.95L456.86 91.59L459.99 87.57L463.38 83.99L466.95 80.94L470.61 78.5L474.26 76.72L477.83 75.65L481.22 75.31L484.35 75.72L487.14 76.86L489.52 78.71L491.44 81.21L492.85 84.32L493.7 87.94L493.99 92L493.7 96.39L492.85 101L491.44 105.73L489.52 110.45L487.14 115.05L484.35 119.41L481.22 123.43L477.83 127.01L474.26 130.06L470.61 132.5L466.95 134.28L463.38 135.35L459.99 135.69L456.86 135.28L454.07 134.14L451.69 132.29L449.77 129.79L448.37 126.68L447.51 123.06L447.22 119M457.13 128.83L550.67 182.83M484.08 82.17L577.61 136.17M545.09 170.5L545.32 166.92L546.02 163.16L547.16 159.31L548.72 155.47L550.67 151.72L552.94 148.17L555.49 144.89L558.25 141.98L561.16 139.49L564.14 137.5L567.12 136.05L570.03 135.18L572.79 134.9L575.34 135.24L577.61 136.17L579.55 137.67L581.11 139.71L582.26 142.24L582.96 145.19L583.19 148.5L582.96 152.08L582.26 155.84L581.11 159.69L579.55 163.53L577.61 167.28L575.34 170.83L572.79 174.11L570.03 177.02L567.12 179.51L564.14 181.5L561.16 182.95L558.25 183.82L555.49 184.1L552.94 183.76L550.67 182.83L548.72 181.33L547.16 179.29L546.02 176.76L545.32 173.81L545.09 170.5M559.81 162L559.86 161.19L560.02 160.33L560.28 159.46L560.63 158.58L561.08 157.73L561.59 156.92L562.17 156.18L562.8 155.52L563.46 154.95L564.14 154.5L564.82 154.17L565.48 153.97L566.1 153.91L566.68 153.99L567.2 154.2L567.64 154.54L568 155L568.26 155.58L568.41 156.25L568.47 157L568.41 157.81L568.26 158.67L568 159.54L567.64 160.42L567.2 161.27L566.68 162.08L566.1 162.82L565.48 163.48L564.82 164.05L564.14 164.5L563.46 164.83L562.8 165.03L562.17 165.09L561.59 165.01L561.08 164.8L560.63 164.46L560.28 164L560.02 163.42L559.86 162.75L559.81 162M554.61 165L554.73 163.21L555.08 161.33L555.65 159.41L556.43 157.48L557.4 155.61L558.54 153.83L559.81 152.2L561.19 150.74L562.65 149.5L564.14 148.5L565.63 147.78L567.08 147.34L568.46 147.2L569.74 147.37L570.87 147.83L571.84 148.58L572.63 149.61L573.2 150.87L573.55 152.35L573.66 154L573.55 155.79L573.2 157.67L572.63 159.59L571.84 161.52L570.87 163.39L569.74 165.17L568.46 166.8L567.08 168.26L565.63 169.5L564.14 170.5L562.65 171.22L561.19 171.66L559.81 171.8L558.54 171.63L557.4 171.17L556.43 170.42L555.65 169.39L555.08 168.13L554.73 166.65L554.61 165M550.28 167.5L550.45 164.9L550.96 162.16L551.79 159.36L552.93 156.57L554.34 153.84L555.99 151.26L557.85 148.88L559.86 146.76L561.97 144.95L564.14 143.5L566.31 142.45L568.42 141.81L570.43 141.61L572.28 141.85L573.94 142.53L575.35 143.62L576.48 145.11L577.32 146.95L577.82 149.1L577.99 151.5L577.82 154.1L577.32 156.84L576.48 159.64L575.35 162.43L573.94 165.16L572.28 167.74L570.43 170.12L568.42 172.24L566.31 174.05L564.14 175.5L561.97 176.55L559.86 177.19L557.85 177.39L555.99 177.15L554.34 176.47L552.93 175.38L551.79 173.89L550.96 172.05L550.45 169.9L550.28 167.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M463.68 127.5L463.68 101.5M474.07 121.5L453.29 133.5M474.07 121.5L463.68 117.5M453.29 133.5L463.68 117.5M571.07 189.5L571.07 163.5M581.46 183.5L560.67 195.5M581.46 183.5L571.07 179.5M560.67 195.5L571.07 179.5M463.68 101.5L571.07 163.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M577.99 182.5L564.14 190.5L564.14 178.5L577.99 170.5L577.99 182.5M566.74 177L566.82 175.98L567.07 174.9L567.47 173.8L568 172.73L568.66 171.73L569.41 170.84L570.22 170.08L571.07 169.5L571.91 169.11L572.72 168.92L573.47 168.95L574.13 169.2L574.67 169.64L575.07 170.28L575.31 171.07L575.4 172M571.07 182.5L571.07 179.5" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M249.77 255L350.23 313L287.88 349L187.42 291L249.77 255M249.77 215L350.23 273L287.88 309L187.42 251L249.77 215M249.77 255L249.77 215M350.23 313L350.23 273M287.88 349L287.88 309M187.42 291L187.42 251" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M260.16 259L339.84 305L339.84 297L260.16 251L260.16 259M249.77 227L329.44 273L287.88 297L208.2 251L249.77 227M244.57 230L324.25 276M196.08 287L196.08 272M202.14 290.5L202.14 275.5M208.2 294L208.2 279M214.26 297.5L214.26 282.5M220.33 301L220.33 286M226.39 304.5L226.39 289.5M232.45 308L232.45 293M299.13 316.5L299.19 315.69L299.35 314.83L299.61 313.96L299.96 313.08L300.4 312.23L300.92 311.42L301.5 310.68L302.13 310.02L302.79 309.45L303.46 309L304.14 308.67L304.8 308.47L305.43 308.41L306.01 308.49L306.53 308.7L306.97 309.04L307.32 309.5L307.58 310.08L307.74 310.75L307.79 311.5L307.74 312.31L307.58 313.17L307.32 314.04L306.97 314.92L306.53 315.77L306.01 316.58L305.43 317.32L304.8 317.98L304.14 318.55L303.46 319L302.79 319.33L302.13 319.53L301.5 319.59L300.92 319.51L300.4 319.3L299.96 318.96L299.61 318.5L299.35 317.92L299.19 317.25L299.13 316.5M350.23 281L287.88 317L187.42 259M248.04 220L251.5 222M338.11 272L341.57 274M286.14 302L289.61 304M196.08 250L199.54 252M254.97 228L259.3 230.5M261.89 232L266.23 234.5M268.82 236L273.15 238.5M275.75 240L280.08 242.5M282.68 244L287.01 246.5M190.88 293L190.88 296M284.41 347L284.41 350M291.34 347L291.34 350M346.77 315L346.77 318" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M308.66 221L308.66 179M301.73 225L301.73 183M308.66 217L301.73 215M308.66 205L301.73 203M308.66 193L301.73 191M312.99 218.5L297.4 227.5M409.12 279L409.12 237M402.19 283L402.19 241M409.12 275L402.19 273M409.12 263L402.19 261M409.12 251L402.19 249M413.45 276.5L397.86 285.5M308.66 179L409.12 237M301.73 183L402.19 241M301.73 189L402.19 247M308.66 189L308.66 191M319.05 195L319.05 197M329.44 201L329.44 203M339.84 207L339.84 209M350.23 213L350.23 215M360.62 219L360.62 221M371.01 225L371.01 227M381.41 231L381.41 233M391.8 237L391.8 239M345.03 310L345.03 315M562.41 184.5L562.41 189.5M472.34 132.5L472.34 137.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M142.38 359L170.1 375L145.85 389L118.13 373L142.38 359M142.38 333L170.1 349L145.85 363L118.13 347L142.38 333M142.38 359L142.38 333M170.1 375L170.1 349M145.85 389L145.85 363M118.13 373L118.13 347" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M142.38 339L159.7 349L145.85 357L128.53 347L142.38 339M164.9 372L151.04 380M164.9 366L151.04 374M164.9 360L151.04 368M126.79 374L137.19 380L137.19 374L126.79 368L126.79 374" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M110.34 354.5L108.15 355.58L105.69 356.45L103.03 357.09L100.22 357.48L97.35 357.61L94.48 357.48L91.67 357.09L89.01 356.45L86.55 355.58L84.36 354.5L82.49 353.23L80.98 351.82L79.88 350.28L79.21 348.66L78.98 347L79.21 345.34L79.88 343.72L80.98 342.18L82.49 340.77L84.36 339.5L86.55 338.42L89.01 337.55L91.67 336.91L94.48 336.52L97.35 336.39L100.22 336.52L103.03 336.91L105.69 337.55L108.15 338.42L110.34 339.5L112.21 340.77L113.72 342.18L114.82 343.72L115.5 345.34L115.72 347L115.5 348.66L114.82 350.28L113.72 351.82L112.21 353.23L110.34 354.5" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M112.94 356L115.54 357.5M103.06 359.29L104.01 361.34M91.64 359.29L90.69 361.34M81.76 356L79.16 357.5M76.06 350.29L72.51 350.84M76.06 343.71L72.51 343.16M81.76 338L79.16 336.5M91.64 334.71L90.69 332.66M103.06 334.71L104.01 332.66M112.94 338L115.54 336.5M118.64 343.71L122.19 343.16M118.64 350.29L122.19 350.84" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" opacity="0.7"/><path d="M84.4 343V331A13 13 0 0 1 110.4 331V343" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><circle cx="97.4" cy="306" r="8.5" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.3" vector-effect="non-scaling-stroke"/><path d="M156.24 365L237.65 318" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" stroke-dasharray="5 4"/></g><g class="spin"><path d="M560.46 157.38L549.44 151.01M567.81 153.14L578.83 134.04M567.81 161.62L578.83 167.99M560.46 165.86L549.44 184.96" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></g><g class="light"><path d="M299.13 316.5L299.19 315.69L299.35 314.83L299.61 313.96L299.96 313.08L300.4 312.23L300.92 311.42L301.5 310.68L302.13 310.02L302.79 309.45L303.46 309L304.14 308.67L304.8 308.47L305.43 308.41L306.01 308.49L306.53 308.7L306.97 309.04L307.32 309.5L307.58 310.08L307.74 310.75L307.79 311.5L307.74 312.31L307.58 313.17L307.32 314.04L306.97 314.92L306.53 315.77L306.01 316.58L305.43 317.32L304.8 317.98L304.14 318.55L303.46 319L302.79 319.33L302.13 319.53L301.5 319.59L300.92 319.51L300.4 319.3L299.96 318.96L299.61 318.5L299.35 317.92L299.19 317.25L299.13 316.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="4.800000000000001" opacity="0.22"/><path d="M299.13 316.5L299.19 315.69L299.35 314.83L299.61 313.96L299.96 313.08L300.4 312.23L300.92 311.42L301.5 310.68L302.13 310.02L302.79 309.45L303.46 309L304.14 308.67L304.8 308.47L305.43 308.41L306.01 308.49L306.53 308.7L306.97 309.04L307.32 309.5L307.58 310.08L307.74 310.75L307.79 311.5L307.74 312.31L307.58 313.17L307.32 314.04L306.97 314.92L306.53 315.77L306.01 316.58L305.43 317.32L304.8 317.98L304.14 318.55L303.46 319L302.79 319.33L302.13 319.53L301.5 319.59L300.92 319.51L300.4 319.3L299.96 318.96L299.61 318.5L299.35 317.92L299.19 317.25L299.13 316.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="1.6"/><circle cx="303.46" cy="314" r="2.2" fill="var(--illos-accent,var(--_accent))"/></g><g class="head"><path d="M321.65 207.5L332.04 213.5L319.92 220.5L309.53 214.5L321.65 207.5M321.65 189.5L332.04 195.5L319.92 202.5L309.53 196.5L321.65 189.5M321.65 207.5L321.65 189.5M332.04 213.5L332.04 195.5M319.92 220.5L319.92 202.5M309.53 214.5L309.53 196.5" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M320.78 214L320.78 226" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></g><g class="press"><path d="M148.45 347.5L147.18 348.06L145.7 348.42L144.12 348.54L142.53 348.42L141.05 348.06L139.79 347.5L138.81 346.77L138.2 345.92L137.99 345L138.2 344.08L138.81 343.23L139.79 342.5L141.05 341.94L142.53 341.58L144.12 341.46L145.7 341.58L147.18 341.94L148.45 342.5L149.42 343.23L150.03 344.08L150.24 345L150.03 345.92L149.42 346.77L148.45 347.5M139.79 345.5L139.79 342.5M148.45 350.5L148.45 347.5" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></g><g class="run"><g class="blink"><circle cx="156.2" cy="365" r="6" stroke="var(--illos-accent,var(--_accent))" stroke-width="1.2" opacity="0.5" vector-effect="non-scaling-stroke"/><circle cx="156.24" cy="365" r="2.6" fill="var(--illos-accent,var(--_accent))"/></g></g><g clip-path="url(#sf-audit-log-tape)"><g class="feed"><path d="M359.76 216.5L358.21 217.15L356.38 217.49L354.47 217.49L352.65 217.15L351.1 216.5L349.97 215.61L349.38 214.55L349.38 213.45L349.97 212.39L351.1 211.5L352.65 210.85L354.47 210.51L356.38 210.51L358.21 210.85L359.76 211.5L360.88 212.39L361.47 213.45L361.47 214.55L360.88 215.61L359.76 216.5M364.09 219L381.41 229M386.6 232L402.19 241M416.05 245.5L422.11 249L416.05 252.5L409.99 249L416.05 245.5M389.2 199.5L387.65 200.15L385.83 200.49L383.91 200.49L382.09 200.15L380.54 199.5L379.41 198.61L378.82 197.55L378.82 196.45L379.41 195.39L380.54 194.5L382.09 193.85L383.91 193.51L385.83 193.51L387.65 193.85L389.2 194.5L390.33 195.39L390.92 196.45L390.92 197.55L390.33 198.61L389.2 199.5M393.53 202L424.71 220M429.9 223L438.56 228M445.49 228.5L451.55 232L445.49 235.5L439.43 232L445.49 228.5M418.65 182.5L417.1 183.15L415.27 183.49L413.36 183.49L411.54 183.15L409.99 182.5L408.86 181.61L408.27 180.55L408.27 179.45L408.86 178.39L409.99 177.5L411.54 176.85L413.36 176.51L415.27 176.51L417.1 176.85L418.65 177.5L419.77 178.39L420.36 179.45L420.36 180.55L419.77 181.61L418.65 182.5M422.98 185L443.76 197M448.96 200L464.54 209M474.94 211.5L481 215L474.94 218.5L468.87 215L474.94 211.5M448.09 165.5L446.54 166.15L444.72 166.49L442.8 166.49L440.98 166.15L439.43 165.5L438.3 164.61L437.71 163.55L437.71 162.45L438.3 161.39L439.43 160.5L440.98 159.85L442.8 159.51L444.72 159.51L446.54 159.85L448.09 160.5L449.22 161.39L449.81 162.45L449.81 163.55L449.22 164.61L448.09 165.5M452.42 168L480.13 184M485.33 187L495.72 193M504.38 194.5L510.44 198L504.38 201.5L498.32 198L504.38 194.5M477.54 148.5L475.99 149.15L474.16 149.49L472.25 149.49L470.42 149.15L468.87 148.5L467.75 147.61L467.16 146.55L467.16 145.45L467.75 144.39L468.87 143.5L470.42 142.85L472.25 142.51L474.16 142.51L475.99 142.85L477.54 143.5L478.66 144.39L479.25 145.45L479.25 146.55L478.66 147.61L477.54 148.5M481.87 151L495.72 159M500.92 162L518.24 172M533.83 177.5L539.89 181L533.83 184.5L527.76 181L533.83 177.5M506.98 131.5L505.43 132.15L503.61 132.49L501.69 132.49L499.87 132.15L498.32 131.5L497.19 130.61L496.6 129.55L496.6 128.45L497.19 127.39L498.32 126.5L499.87 125.85L501.69 125.51L503.61 125.51L505.43 125.85L506.98 126.5L508.11 127.39L508.7 128.45L508.7 129.55L508.11 130.61L506.98 131.5M511.31 134L537.29 149M542.49 152L552.88 158M563.27 160.5L569.33 164L563.27 167.5L557.21 164L563.27 160.5" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><path d="M293.07 244L289.61 246M362.35 284L358.89 286M307.79 235.5L304.33 237.5M377.08 275.5L373.61 277.5M322.52 227L319.05 229M391.8 267L388.33 269M337.24 218.5L333.77 220.5M406.52 258.5L403.06 260.5M351.96 210L348.5 212M421.24 250L417.78 252M366.68 201.5L363.22 203.5M435.97 241.5L432.5 243.5M381.41 193L377.94 195M450.69 233L447.22 235M396.13 184.5L392.66 186.5M465.41 224.5L461.95 226.5M410.85 176L407.39 178M480.13 216L476.67 218M425.57 167.5L422.11 169.5M494.86 207.5L491.39 209.5M440.3 159L436.83 161M509.58 199L506.11 201M455.02 150.5L451.55 152.5M524.3 190.5L520.84 192.5M469.74 142L466.28 144M539.02 182L535.56 184M484.46 133.5L481 135.5M553.75 173.5L550.28 175.5M499.19 125L495.72 127M568.47 165L565 167" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /><g clip-path="url(#sf-audit-log-print)"><g class="teal"><path d="M330.31 233.5L328.76 234.15L326.94 234.49L325.02 234.49L323.2 234.15L321.65 233.5L320.52 232.61L319.93 231.55L319.93 230.45L320.52 229.39L321.65 228.5L323.2 227.85L325.02 227.51L326.94 227.51L328.76 227.85L330.31 228.5L331.44 229.39L332.03 230.45L332.03 231.55L331.44 232.61L330.31 233.5M334.64 236L358.89 250M364.09 253L377.94 261M386.6 262.5L392.66 266L386.6 269.5L380.54 266L386.6 262.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="3.9000000000000004" opacity="0.22"/><path d="M330.31 233.5L328.76 234.15L326.94 234.49L325.02 234.49L323.2 234.15L321.65 233.5L320.52 232.61L319.93 231.55L319.93 230.45L320.52 229.39L321.65 228.5L323.2 227.85L325.02 227.51L326.94 227.51L328.76 227.85L330.31 228.5L331.44 229.39L332.03 230.45L332.03 231.55L331.44 232.61L330.31 233.5M334.64 236L358.89 250M364.09 253L377.94 261M386.6 262.5L392.66 266L386.6 269.5L380.54 266L386.6 262.5" fill="none" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"  stroke-width="1.3"/></g><g class="settle"><path d="M330.31 233.5L328.76 234.15L326.94 234.49L325.02 234.49L323.2 234.15L321.65 233.5L320.52 232.61L319.93 231.55L319.93 230.45L320.52 229.39L321.65 228.5L323.2 227.85L325.02 227.51L326.94 227.51L328.76 227.85L330.31 228.5L331.44 229.39L332.03 230.45L332.03 231.55L331.44 232.61L330.31 233.5M334.64 236L358.89 250M364.09 253L377.94 261M386.6 262.5L392.66 266L386.6 269.5L380.54 266L386.6 262.5" fill="none" stroke="var(--illos-ink,var(--_ink))" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></g></g></g></g><rect x="67.35" y="267" width="62.8" height="18.6" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2"/><rect x="71.35" y="271" width="8.4" height="8.4" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2"/><path stroke="var(--illos-ink,var(--_ink))" stroke-width="1.1" fill="none" vector-effect="non-scaling-stroke" d="M85.75 279.4L85.75 273.8L88.55 271L91.35 273.8L91.35 279.4M85.75 275.9L91.35 275.9M94.71 271L94.71 279.4L98.91 279.4L100.31 278L100.31 272.4L98.91 271L94.71 271M103.67 279.4L103.67 271L106.47 275.2L109.27 271L109.27 279.4M114.03 271L116.83 271M115.43 271L115.43 279.4M114.03 279.4L116.83 279.4M121.59 279.4L121.59 271L127.19 279.4L127.19 271"/><rect x="585.07" y="106.5" width="71.76" height="18.6" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2"/><rect x="589.07" y="110.5" width="8.4" height="8.4" fill="none" stroke="var(--illos-line,var(--_line))" stroke-width="1.2"/><path stroke="var(--illos-ink,var(--_ink))" stroke-width="1.1" fill="none" vector-effect="non-scaling-stroke" d="M603.47 110.5L603.47 118.9L609.07 118.9M613.83 110.5L616.63 110.5L618.03 111.9L618.03 117.5L616.63 118.9L613.83 118.9L612.43 117.5L612.43 111.9L613.83 110.5M626.99 111.9L625.59 110.5L622.79 110.5L621.39 111.9L621.39 117.5L622.79 118.9L625.59 118.9L626.99 117.5M630.35 110.5L630.35 118.9M635.95 110.5L630.35 116.1M632.45 114.7L635.95 118.9M644.91 110.5L639.31 110.5L639.31 118.9L644.91 118.9M639.31 114.7L643.51 114.7M648.27 110.5L648.27 118.9L652.47 118.9L653.87 117.5L653.87 111.9L652.47 110.5L648.27 110.5"/>
</svg>`;

export type AuditCategory = "auth" | "members" | "settings";
export type AuditEvent = {
  /** The request ID, unique per event. */
  id: string;
  day: string;
  time: string;
  actor: string;
  email: string;
  /** What happened, read after the actor's name: "changed the role of Jonah Park". */
  action: string;
  category: AuditCategory;
  ip: string;
  location: string;
  client: string;
  change?: { field: string; from: string; to: string };
  /** Marks events worth a second look, such as a failed sign-in. */
  flagged?: boolean;
};

export type IllosAuditLogPanelProps = {
  title?: string;
  description?: string;
  events?: AuditEvent[];
  className?: string;
};

const EVENTS: AuditEvent[] = [
  { id: "req_8f2k41d9", day: "Today", time: "09:42", actor: "Maya Chen", email: "maya@company.com", action: "signed in", category: "auth", ip: "84.92.13.207", location: "Lisbon, PT", client: "Chrome 131 on macOS" },
  { id: "req_7d1m09xa", day: "Today", time: "09:31", actor: "Maya Chen", email: "maya@company.com", action: "changed the role of Jonah Park", category: "members", ip: "84.92.13.207", location: "Lisbon, PT", client: "Chrome 131 on macOS", change: { field: "Role", from: "Member", to: "Admin" } },
  { id: "req_6c3q77tb", day: "Today", time: "08:57", actor: "ci-deploy", email: "API key", action: "added a webhook endpoint", category: "settings", ip: "34.82.190.12", location: "Oregon, US", client: "API, v2", change: { field: "Endpoint", from: "None", to: "hooks.example.com/deploys" } },
  { id: "req_5b8w22nc", day: "Today", time: "08:12", actor: "Unknown", email: "priya@company.com", action: "failed to sign in as Priya Raman", category: "auth", ip: "185.220.101.4", location: "Frankfurt, DE", client: "curl 8.4", flagged: true },
  { id: "req_4a6e93pr", day: "Yesterday", time: "18:20", actor: "Priya Raman", email: "priya@company.com", action: "invited sam@company.com", category: "members", ip: "92.40.11.86", location: "London, UK", client: "Safari 18 on iOS", change: { field: "Invite", from: "None", to: "Viewer" } },
  { id: "req_3z2r58hk", day: "Yesterday", time: "16:05", actor: "Jonah Park", email: "jonah@company.com", action: "turned on two-factor authentication", category: "auth", ip: "71.198.4.33", location: "Austin, US", client: "Firefox 133 on Windows" },
  { id: "req_2y9t14fm", day: "Yesterday", time: "11:48", actor: "Maya Chen", email: "maya@company.com", action: "changed the billing plan", category: "settings", ip: "84.92.13.207", location: "Lisbon, PT", client: "Chrome 131 on macOS", change: { field: "Plan", from: "Team", to: "Business" } },
  { id: "req_1x4u66gs", day: "Earlier this week", time: "14:30", actor: "Priya Raman", email: "priya@company.com", action: "removed Alex Kim from the workspace", category: "members", ip: "92.40.11.86", location: "London, UK", client: "Chrome 131 on Windows" },
  { id: "req_0w7v31ld", day: "Earlier this week", time: "10:02", actor: "Jonah Park", email: "jonah@company.com", action: "rotated the webhook signing secret", category: "settings", ip: "71.198.4.33", location: "Austin, US", client: "Firefox 133 on Windows" },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "auth", label: "Sign-ins" },
  { id: "members", label: "Members" },
  { id: "settings", label: "Settings" },
] as const;
type Filter = (typeof FILTERS)[number]["id"];
const CATEGORY: Record<AuditCategory, string> = { auth: "Sign-in", members: "Members", settings: "Settings" };

const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const toCsv = (rows: AuditEvent[]) =>
  [
    ["day", "time", "actor", "email", "action", "category", "ip", "location", "client", "request_id"],
    ...rows.map((e) => [e.day, e.time, e.actor, e.email, e.action, e.category, e.ip, e.location, e.client, e.id]),
  ]
    .map((r) => r.map((v) => `"${v.replaceAll('"', '""')}"`).join(","))
    .join("\n");

export function IllosAuditLogPanel({
  title = "Audit log",
  description = "Every change in your workspace: who made it, what changed and where it came from.",
  events = EVENTS,
  className,
}: IllosAuditLogPanelProps) {
  const uid = useId();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<string | null>(null);
  const [exported, setExported] = useState(false);
  const search = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();
  const inFilter = (e: AuditEvent, f: Filter) => f === "all" || e.category === f;
  const shown = events.filter(
    (e) => inFilter(e, filter) && (!q || [e.actor, e.email, e.action, e.ip, e.location].some((v) => v.toLowerCase().includes(q))),
  );
  const days = [...new Set(shown.map((e) => e.day))];

  useEffect(() => {
    if (!exported) return;
    const t = setTimeout(() => setExported(false), 1600);
    return () => clearTimeout(t);
  }, [exported]);

  const exportCsv = () => {
    const url = URL.createObjectURL(new Blob([toCsv(shown)], { type: "text/csv" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "audit-log.csv" });
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
  };

  return (
    <section
      className={cx(
        "grid w-full max-w-[1040px] items-start gap-1.5 rounded-2xl bg-card p-1.5 text-card-foreground lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]",
        "shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_1px_2px_rgb(0_0_0/0.04),0_12px_32px_-16px_rgb(0_0_0/0.18)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.09)] antialiased",
        className,
      )}
    >
      <div className="flex flex-col lg:sticky lg:top-4">
        <HudWell svg={AUDIT_SVG} className="aspect-[16/10] rounded-[10px] lg:aspect-square" artClassName="[&>svg]:scale-[1.1] lg:[&>svg]:scale-[1.12]" />
        <div className="flex flex-col items-start gap-4 px-3.5 pt-5 pb-4 sm:px-4.5">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">{description}</p>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon className="shrink-0">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </Icon>
            Entries can't be edited or deleted.
          </p>
          <button
            type="button"
            onClick={exportCsv}
            disabled={!shown.length}
            className={cx(
              "inline-flex h-10 items-center gap-2 rounded-lg bg-card pr-4 pl-3.5 sm:h-9 text-sm font-medium shadow-[inset_0_0_0_1px_var(--color-border)] transition-[transform,background-color] duration-150 ease-out select-none hover:bg-muted active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
              FOCUS,
            )}
          >
            <Icon>{exported ? <path d="M20 6 9 17l-5-5" /> : <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />}</Icon>
            {exported ? "Exported" : "Export CSV"}
            <span className="tabular-nums text-muted-foreground">{shown.length}</span>
          </button>
        </div>
      </div>

      <div className="flex min-w-0 flex-col px-2 pt-2 pb-3 sm:px-3 lg:pt-3">
        <div role="search" className="flex flex-col gap-2.5 px-1.5 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <label htmlFor={`${uid}-q`} className="sr-only">
              Search the audit log
            </label>
            <Icon className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m20 20-4.2-4.2" />
            </Icon>
            <input
              ref={search}
              id={`${uid}-q`}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search people, actions or IPs"
              spellCheck={false}
              autoComplete="off"
              className={cx(
                "h-10 w-full rounded-lg bg-card pr-3 pl-9 sm:h-9 text-base text-card-foreground shadow-[inset_0_0_0_1px_var(--color-border)] transition-shadow duration-150 outline-none placeholder:text-muted-foreground hover:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_25%,transparent)] focus-visible:shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_45%,transparent)] sm:text-sm",
                "[&::-webkit-search-cancel-button]:hidden",
              )}
            />
          </div>
          <fieldset className="flex shrink-0 overflow-x-auto rounded-lg bg-muted p-0.5">
            <legend className="sr-only">Show</legend>
            {FILTERS.map((f) => (
              <label
                key={f.id}
                className={cx(
                  "relative flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium whitespace-nowrap text-muted-foreground select-none",
                  "transition-[color,background-color,box-shadow] duration-150 ease-out hover:text-card-foreground",
                  "has-[:checked]:bg-card has-[:checked]:text-card-foreground has-[:checked]:shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_1px_2px_rgb(0_0_0/0.08)] dark:has-[:checked]:shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
                  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-ring",
                )}
              >
                <input
                  type="radio"
                  name={`${uid}-filter`}
                  value={f.id}
                  checked={filter === f.id}
                  onChange={() => setFilter(f.id)}
                  className="sr-only"
                />
                {f.label}
                <span className="tabular-nums opacity-60">{events.filter((e) => inFilter(e, f.id)).length}</span>
              </label>
            ))}
          </fieldset>
        </div>

        <p className="sr-only" aria-live="polite">
          {shown.length} of {events.length} events shown
        </p>

        {shown.length ? (
          <div className="mt-3 flex flex-col gap-3">
            {days.map((d) => (
              <div key={d}>
                <h4 className="px-2.5 pt-1 pb-1.5 text-xs font-medium text-muted-foreground">{d}</h4>
                <ul className="flex flex-col gap-0.5">
                  {shown
                    .filter((e) => e.day === d)
                    .map((e) => (
                      <Row key={e.id} event={e} open={open === e.id} onToggle={() => setOpen(open === e.id ? null : e.id)} />
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[320px] flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-sm font-medium">No events match {q ? `“${query.trim()}”` : "this filter"}</p>
            <p className="max-w-[36ch] text-sm text-muted-foreground">Try a name, an email address or an IP, or show every category.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setFilter("all");
                search.current?.focus();
              }}
              className={cx(
                "mt-1 inline-flex h-10 items-center rounded-lg sm:h-9 bg-primary px-4 text-sm font-medium text-primary-foreground transition-[transform,background-color] duration-150 ease-out hover:bg-primary/90 active:scale-[0.97]",
                FOCUS,
              )}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default IllosAuditLogPanel;

function Row({ event: e, open, onToggle }: { event: AuditEvent; open: boolean; onToggle: () => void }) {
  const id = useId();
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);
  const initials = e.actor === "Unknown" ? "?" : e.actor.split(/[\s-]/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const details: [string, ReactNode][] = [
    ["Actor", e.email],
    ["IP address", e.ip],
    ["Location", e.location],
    ["Client", e.client],
  ];
  if (e.change)
    details.push([
      e.change.field,
      <>
        <span className="text-muted-foreground">{e.change.from}</span>
        <span aria-hidden="true" className="px-1.5 text-muted-foreground">
          →
        </span>
        <span className="sr-only"> changed to </span>
        {e.change.to}
      </>,
    ]);

  return (
    <li className={cx("rounded-lg transition-colors duration-150", open && "bg-muted/60 dark:bg-muted/40")}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className={cx("group flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left transition-colors duration-150 hover:bg-muted/60 dark:hover:bg-muted/40", open && "hover:bg-transparent dark:hover:bg-transparent", FOCUS)}
      >
        <span
          aria-hidden="true"
          className={cx(
            "relative grid size-8 shrink-0 place-items-center rounded-full bg-muted text-[11px] font-medium tracking-wide text-card-foreground",
            open && "bg-card",
          )}
        >
          {initials}
          {e.flagged && <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-[var(--color-destructive,oklch(0.6_0.21_25))] ring-2 ring-card" />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="line-clamp-2 text-sm sm:line-clamp-1">
            <span className="font-medium">{e.actor}</span> {e.action}
          </span>
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
            {e.flagged && <span className="text-[var(--color-destructive,oklch(0.6_0.21_25))]">Needs review, </span>}
            {CATEGORY[e.category]}, {e.location}
          </span>
        </span>
        <span className="shrink-0 text-xs text-muted-foreground tabular-nums">{e.time}</span>
        <Icon className={cx("shrink-0 text-muted-foreground transition-transform duration-200 ease-out motion-reduce:transition-none", open && "rotate-180")}>
          <path d="m6 9 6 6 6-6" />
        </Icon>
      </button>
      <div
        id={id}
        inert={!open}
        className={cx("grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      >
        <div className="overflow-hidden">
          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-2 pt-1 pr-3 pb-4 pl-[3.375rem] text-xs sm:text-[13px]">
            {details.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="min-w-0 break-words tabular-nums">{v}</dd>
              </div>
            ))}
            <dt className="self-center text-muted-foreground">Request ID</dt>
            <dd className="flex min-w-0 items-center gap-1.5">
              <code className="truncate font-mono text-[12px]">{e.id}</code>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText(e.id).then(() => setCopied(true), () => {})}
                aria-label={copied ? "Request ID copied" : "Copy request ID"}
                className={cx(
                  "relative grid size-6 place-items-center rounded-md text-muted-foreground transition-[color,background-color,transform] duration-150 ease-out before:absolute before:-inset-2 hover:bg-card hover:text-card-foreground active:scale-[0.94]",
                  FOCUS,
                )}
              >
                <Icon size={14}>
                  {copied ? (
                    <path d="M20 6 9 17l-5-5" />
                  ) : (
                    <>
                      <rect x="9" y="9" width="11" height="11" rx="2" />
                      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
                    </>
                  )}
                </Icon>
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Copied" : ""}
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </li>
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
// colour role of the illustration is mixed from those two, the chart accent and the destructive colour.
const WELL_STYLE = {
  "--hud-accent": "color-mix(in oklab, var(--color-chart-2, oklch(0.7 0.12 180)) 72%, white)",
  "--illos-ground": "var(--well)",
  "--illos-ink": "color-mix(in oklab, var(--well-ink) 84%, var(--well))",
  "--illos-line": "color-mix(in oklab, var(--well-ink) 50%, var(--well))",
  "--illos-faint": "color-mix(in oklab, var(--well-ink) 15%, var(--well))",
  "--illos-accent": "var(--hud-accent)",
  "--illos-accent-dim": "color-mix(in oklab, var(--hud-accent) 50%, var(--well))",
  "--illos-alert": "color-mix(in oklab, var(--color-destructive, oklch(0.6 0.21 25)) 82%, white)",
  background: `${GRAIN}, radial-gradient(75% 65% at 55% 45%, color-mix(in oklab, var(--hud-accent) 10%, var(--well)), transparent 72%), radial-gradient(120% 90% at 50% 115%, color-mix(in oklab, black 45%, var(--well)), transparent 65%), var(--well)`,
  boxShadow: "inset 0 0 0 1px rgb(255 255 255 / 0.06), inset 0 1px 0 rgb(255 255 255 / 0.05)",
} as CSSProperties;

/** The illustration on its dark display. Decorative here: the panel's own text says what it means. */
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
