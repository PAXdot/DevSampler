import { useMemo, type CSSProperties } from "react";

type FocusRole = "background" | "button" | "visual";
type EffectMode = "light" | "dark";

type FocusTarget = {
  selector: string;
  role: FocusRole;
  fit?: "cover" | "contain-square" | "wide-wordmark" | "portrait-stage";
  preserveTransform?: boolean;
};

type EffectDefinition = {
  title: string;
  source: string;
  background: string;
  targets: readonly FocusTarget[];
  theme?: {
    nativeMode?: EffectMode;
    lightBackground: string;
    darkBackground: string;
    invertBackground?: boolean;
  };
  transformSource?: (source: string, mode: EffectMode) => string;
  hiddenTargets?: readonly string[];
  introWordmark?: {
    sceneSelector: string;
    text: string;
    fontSize: number;
    endTime: number;
    holdTime: number;
    logoSvg: string;
  };
};

export type VoidFieldProps = {
  mode?: EffectMode;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
};

export const NEUFORM_ISOLATED_DEFAULTS = {
  mode: "dark",
  hue: 0,
  saturation: 1,
  brightness: 1,
} as const;

const voidFieldSource = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Void Field</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet">
</head>
<body class="antialiased text-purple-200 bg-[#08030c] min-h-screen relative overflow-x-hidden flex items-center justify-center p-4 lg:p-12" style="font-family: 'Inter', sans-serif;">

    <!-- Background decorative text -->
    <div class="fixed top-[-5vh] left-[-10vw] text-[40vw] font-extralight tracking-tight text-purple-400/[0.03] select-none z-0 leading-none">
        042
    </div>

    <!-- Container Lines Directive -->
    <div class="relative w-full max-w-[1100px] mx-auto z-10">
        <!-- Infinite Container Vertical Lines -->
        <div class="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        <div class="absolute top-[-100vh] bottom-[-100vh] right-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        
        <!-- Container Corner Nodes (6px square) -->
        <div class="absolute top-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute top-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>

        <!-- Thin 16px Frame Brackets -->
        <div class="absolute top-[-16px] left-[-16px] w-[16px] h-[16px] border-t border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute top-[-16px] right-[-16px] w-[16px] h-[16px] border-t border-r border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] left-[-16px] w-[16px] h-[16px] border-b border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] right-[-16px] w-[16px] h-[16px] border-b border-r border-purple-400/30 hidden md:block z-20"></div>

        <div class="py-12 lg:py-24 flex justify-center w-full">
            
            <!-- Main Hardware Housing (2.3:1 Aspect Ratio on lg) -->
            <div class="relative w-full lg:aspect-[2.3/1] rounded-[3rem] bg-[#130a1c] shadow-[0_10px_40px_rgba(0,0,0,0.8),_0_20px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(216,180,254,0.15)] p-3 lg:p-5 flex flex-col">
                
                <!-- Premium Gradient Bezel Edge -->
                <div class="absolute inset-0 rounded-[3rem] shadow-[inset_0_2px_4px_rgba(216,180,254,0.05)] pointer-events-none z-10 border border-transparent" style="background: linear-gradient(135deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 40%, transparent 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                <!-- Hardware Details (Screws/Rivets top/bottom) -->
                <div class="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute top-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>

                <!-- Inner Housing / Shadow Box -->
                <div class="relative rounded-[2.5rem] bg-[#0a0510] overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)] border border-purple-400/5 z-10 flex-grow flex flex-col" style="background-image: repeating-linear-gradient(to right, #0a0510, #0a0510 6px, #10081a 6px, #10081a 10px);">
                    
                    <!-- Screen Area -->
                    <div class="relative m-4 lg:m-8 rounded-xl bg-[#0a0510] shadow-[inset_0_5px_20px_rgba(0,0,0,1)] overflow-hidden flex flex-col flex-grow min-h-[400px] lg:min-h-0">
                        
                        <!-- Premium Gradient Screen Border -->
                        <div class="absolute inset-0 rounded-xl pointer-events-none border border-transparent z-30" style="background: linear-gradient(180deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 25%, rgba(0,0,0,0.8) 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                        <!-- WebGL Dot Matrix Layer -->
                        <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full opacity-80 mix-blend-screen pointer-events-none z-0"></canvas>

                        <!-- Screen Horizontal Corrugation Overlay -->
                        <div class="absolute inset-0 pointer-events-none z-10 opacity-40" style="background-image: repeating-linear-gradient(to bottom, transparent, transparent 18px, rgba(0,0,0,0.9) 18px, rgba(0,0,0,0.9) 20px);"></div>

                        <!-- Faint Geometric Wireframe -->
                        <svg class="absolute right-0 top-0 h-full w-2/3 opacity-10 pointer-events-none z-10 stroke-purple-500" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M400 50 L550 150 L550 350 L400 450 L250 350 L250 150 Z" stroke-width="2"></path>
                            <path d="M400 50 L400 250 M250 150 L400 250 M550 150 L400 250 M400 450 L400 250 M250 350 L400 250 M550 350 L400 250" stroke-width="1"></path>
                            <circle cx="550" cy="150" r="40" stroke-width="2"></circle>
                        </svg>

                        <!-- Content Container -->
                        <div class="relative z-20 flex flex-col h-full text-purple-100 w-full">
                            
                            <!-- Top Section -->
                            <div class="flex items-center px-6 lg:px-12 py-6 border-b border-purple-400/10 bg-gradient-to-r from-transparent to-black/60">
                                <div class="flex items-center gap-4 border-r border-purple-400/20 pr-8">
                                    <iconify-icon icon="solar:arrow-right-up-linear" class="text-4xl text-purple-400" style="stroke-width: 1.5px;"></iconify-icon>
                                    <div class="flex items-center gap-2">
                                        <div class="w-1 h-6 bg-purple-400/50"></div>
                                        <span class="text-3xl font-extralight tracking-tight">V-72</span>
                                    </div>
                                </div>
                                <div class="pl-8 text-xs font-normal uppercase tracking-widest opacity-70 leading-tight">
                                    Void<br>Protocol
                                </div>
                            </div>

                            <!-- Middle Section (Data Band) -->
                            <div class="bg-purple-500/[0.03] text-purple-100 border-b border-purple-400/10 flex flex-col lg:flex-row relative backdrop-blur-sm">
                                
                                <!-- Inner layout grid -->
                                <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
                                    <!-- Column 1: Core Telemetry -->
                                    <div class="lg:col-span-3 px-6 lg:px-12 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <h2 class="text-3xl lg:text-4xl font-extralight tracking-tight leading-none masked-reveal">
                                            Quantum<br>Metric
                                        </h2>
                                    </div>

                                    <!-- Column 2: Date -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="flex items-start gap-1">
                                            <span class="text-4xl lg:text-5xl font-extralight tracking-tight">NET.42</span>
                                            <span class="text-sm font-extralight mt-1 opacity-70">.8192</span>
                                        </div>
                                        <iconify-icon icon="solar:double-alt-arrow-right-linear" class="ml-auto text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>

                                    <!-- Column 3: Data Uplink -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">72</div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 opacity-70">Link Status</div>
                                    </div>

                                    <!-- Column 4: Cycles -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center relative">
                                        <div class="flex items-center gap-3">
                                            <iconify-icon icon="solar:atom-linear" class="text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                            <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">1.059</div>
                                        </div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 ml-9 opacity-70">Phases</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Section -->
                            <div class="flex-grow flex items-end px-6 lg:px-12 py-8 lg:py-12 bg-gradient-to-t from-black/80 to-transparent relative">
                                <div class="flex items-end gap-8 w-full">
                                    <div class="text-8xl lg:text-9xl leading-none font-extralight tracking-tight opacity-90 masked-reveal text-purple-100" style="text-shadow: 0px 0px 20px rgba(216,180,254,0.2);">
                                        99
                                    </div>
                                    <div class="mb-4 lg:mb-8 flex flex-col gap-2">
                                        <div class="text-xs font-normal uppercase tracking-widest leading-tight opacity-70">
                                            System<br>Override
                                        </div>
                                        <iconify-icon icon="solar:target-linear" class="text-2xl opacity-50 text-purple-200" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>
                                </div>

                                <!-- Bottom Edge Detailing -->
                                <div class="absolute bottom-0 left-0 w-full h-4 flex border-t border-purple-400/10">
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="w-32 h-full bg-purple-400/5 border-r border-purple-400/10"></div>
                                    <!-- Striped hazard area -->
                                    <div class="w-48 h-full border-r border-purple-400/10" style="background-image: repeating-linear-gradient(45deg, rgba(216,180,254,0.05) 0, rgba(216,180,254,0.05) 4px, transparent 4px, transparent 8px);"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="flex-grow h-full bg-purple-400/[0.02]"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-l border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts for WebGL and GSAP -->
    <script>
        // 1. Masked Reveal via GSAP (TranslateY 100% to 0% with power4.out)
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const revealElements = document.querySelectorAll('.masked-reveal');
            
            revealElements.forEach(el => {
                const text = el.innerHTML;
                const words = text.split(/<br>|\s+/).filter(w => w.trim() !== '');
                el.innerHTML = '';
                
                words.forEach((word) => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-2';
                    
                    const inner = document.createElement('span');
                    inner.className = 'inline-block translate-y-[100%] opacity-0';
                    inner.innerHTML = word;
                    
                    if(text.includes(word + '<br>')) {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                        el.appendChild(document.createElement('br'));
                    } else {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                    }
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    y: "0%",
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    }
                });
            });
        });

        // 2. WebGL Dot-Matrix Terminal Shader
        const canvas = document.getElementById('webgl-canvas');
        const gl = canvas.getContext('webgl', { alpha: true, antialias: false });

        if (gl) {
            const resize = () => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            };
            window.addEventListener('resize', resize);
            resize();

            const vertexShaderSource = \`
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            \`;

            const fragmentShaderSource = \`
                precision highp float;
                uniform vec2 iResolution;
                uniform float iTime;
                uniform vec2 uMouse;

                vec2 barrel(vec2 uv, float amt) {
                    vec2 cc = uv - 0.5;
                    float r = dot(cc, cc);
                    return uv + cc * r * amt;
                }

                float rand(vec2 co) {
                    return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    
                    // Parallax drift based on uMouse
                    vec2 mouseOffset = (uMouse - 0.5) * 0.05;
                    uv += mouseOffset;

                    // Barrel distortion curvature
                    uv = barrel(uv, 0.2);

                    // Clamp edges
                    if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                        return;
                    }

                    // Dot matrix resolution
                    vec2 gridCount = vec2(100.0, 100.0 * (iResolution.y / iResolution.x));
                    vec2 gridUv = fract(uv * gridCount);
                    vec2 id = floor(uv * gridCount);

                    // Radial symmetry distance
                    vec2 cc = id / gridCount - 0.5;
                    float dist = length(cc);
                    
                    // Slow breathing pulse
                    float pulse = sin(iTime * 1.5 - dist * 10.0) * 0.5 + 0.5;

                    // Dot formulation
                    float dotSize = 0.35 * pulse;
                    float d = length(gridUv - 0.5);
                    float circle = smoothstep(dotSize, dotSize - 0.05, d);

                    // Digital scanlines
                    float scanline = sin(uv.y * 800.0) * 0.03;

                    // Randomized flicker
                    float flicker = rand(vec2(iTime, id.y)) > 0.98 ? 0.4 : 1.0;

                    // Base color compilation (Tinted Monotone Purple)
                    vec3 col = vec3(circle * pulse * flicker);
                    col -= scanline;
                    col *= vec3(0.7, 0.3, 1.0); // Purple tint
                    
                    // Vignette edge masking
                    col *= smoothstep(0.8, 0.2, dist);

                    gl_FragColor = vec4(col, 1.0);
                }
            \`;

            const compileShader = (type, source) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            };

            const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
            ]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const iResLoc = gl.getUniformLocation(program, "iResolution");
            const iTimeLoc = gl.getUniformLocation(program, "iTime");
            const uMouseLoc = gl.getUniformLocation(program, "uMouse");

            // Interactive pointer drift tracking
            let mouseX = 0.5, mouseY = 0.5;
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX / window.innerWidth;
                mouseY = 1.0 - (e.clientY / window.innerHeight);
            });

            const startTime = performance.now();
            const render = (time) => {
                const elapsedTime = (time - startTime) / 1000.0;
                
                gl.uniform2f(iResLoc, canvas.width, canvas.height);
                gl.uniform1f(iTimeLoc, elapsedTime);
                gl.uniform2f(uMouseLoc, mouseX, mouseY);

                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        }
    </script>
</body>
</html>`;

const VOID_FIELD_DEFINITION: EffectDefinition = {
  title: "Void Field shader background",
  source: voidFieldSource,
  background: "#030305",
  targets: [{ selector: "#webgl-canvas", role: "background" }],
};

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function effectBackground(definition: EffectDefinition, mode: EffectMode) {
  return definition.theme?.[`${mode}Background`] ?? definition.background;
}

function buildFocusedDocument(definition: EffectDefinition, mode: EffectMode) {
  const background = effectBackground(definition, mode);
  const invertBackground =
    definition.theme?.invertBackground === true &&
    definition.theme.nativeMode !== mode;
  const source =
    definition.transformSource?.(definition.source, mode) ?? definition.source;
  const targetJson = JSON.stringify(definition.targets).replace(
    /</g,
    "\\u003c",
  );
  const hiddenTargetJson = JSON.stringify(
    definition.hiddenTargets ?? [],
  ).replace(/</g, "\\u003c");
  const introWordmarkJson = JSON.stringify(
    definition.introWordmark ?? null,
  ).replace(/</g, "\\u003c");
  const modeJson = JSON.stringify(mode);
  const backgroundFilter = invertBackground
    ? "filter: invert(1) hue-rotate(180deg) saturate(.92) brightness(1.02) !important;"
    : "";
  const introWordmarkStyle = definition.introWordmark
    ? `${definition.introWordmark.sceneSelector} .tx { font-size: ${definition.introWordmark.fontSize}px !important; }`
    : "";
  const focusStyle = `<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${background} !important; color-scheme: ${mode} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; ${backgroundFilter} }
[data-threeui-role="background"][data-threeui-fit="contain-square"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: min(100vw, 100vh) !important; height: min(100vw, 100vh) !important; aspect-ratio: 1 / 1 !important; transform: translate(-50%, -50%) !important; }
[data-threeui-role="button"] { position: relative !important; z-index: 2 !important; opacity: 1 !important; flex: none !important; }
[data-threeui-role="button"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"] { position: relative !important; z-index: 1 !important; width: min(100%, 1040px) !important; max-width: 1040px !important; max-height: 100% !important; margin: auto !important; padding: 24px !important; overflow: auto !important; opacity: 1 !important; filter: none !important; }
[data-threeui-role="visual"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"][data-threeui-fit="contain-square"] { flex: none !important; width: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-width: none !important; height: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-height: none !important; aspect-ratio: 1 / 1 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="wide-wordmark"] { width: min(calc(100vw - 48px), 1180px) !important; max-width: calc(100vw - 48px) !important; height: auto !important; max-height: none !important; aspect-ratio: 16 / 3 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="portrait-stage"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: 1080px !important; max-width: none !important; height: 1350px !important; max-height: none !important; padding: 0 !important; overflow: hidden !important; transform-origin: center !important; }
${introWordmarkStyle}
</style>`;
  const focusScript = `<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${modeJson};
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${targetJson};
    var hiddenSelectors = ${hiddenTargetJson};
    var introWordmark = ${introWordmarkJson};
    var roots = [];
    hiddenSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute('data-threeui-hidden', '');
        element.setAttribute('aria-hidden', 'true');
        if ('inert' in element) element.inert = true;
      });
    });
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.fit) element.setAttribute('data-threeui-fit', spec.fit);
      if (spec.preserveTransform) element.setAttribute('data-threeui-preserve-transform', '');
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (introWordmark) {
      var introScene = document.querySelector(introWordmark.sceneSelector);
      var introText = introScene && introScene.querySelector('.tx');
      var introMark = introText && introText.querySelector('.mark');
      if (introText && introMark) {
        introMark.innerHTML = introWordmark.logoSvg;
        var introCharacters = Array.from(introText.children).filter(function (element) { return element !== introMark; });
        introCharacters.forEach(function (element, index) {
          element.textContent = introWordmark.text[index] === ' ' ? '\u00a0' : (introWordmark.text[index] || '');
          element.style.display = index < introWordmark.text.length ? 'inline-block' : 'none';
        });
      }
      var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var introStartedAt = performance.now();
      function renderIntroWordmark(now) {
        if (typeof window.__seek !== 'function') return;
        if (introReducedMotion) {
          window.__seek(introWordmark.endTime);
          return;
        }
        var introCycle = introWordmark.endTime + introWordmark.holdTime;
        var introTime = ((now - introStartedAt) / 1000) % introCycle;
        window.__seek(Math.min(introTime, introWordmark.endTime));
        requestAnimationFrame(renderIntroWordmark);
      }
      requestAnimationFrame(renderIntroWordmark);
    }
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) {
      var placeholderLink = root.matches('a[href="#"]') ? root : root.querySelector('a[href="#"]');
      if (placeholderLink) placeholderLink.addEventListener('click', function (event) { event.preventDefault(); });
      document.body.appendChild(root);
    });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
</script>`;
  return source
    .replace(/<\/head>/i, `${focusStyle}</head>`)
    .replace(/<\/body>/i, `${focusScript}</body>`);
}

function NeuformIsolatedEffect({
  definition,
  mode = NEUFORM_ISOLATED_DEFAULTS.mode,
  hue = NEUFORM_ISOLATED_DEFAULTS.hue,
  saturation = NEUFORM_ISOLATED_DEFAULTS.saturation,
  brightness = NEUFORM_ISOLATED_DEFAULTS.brightness,
  className,
  style,
}: VoidFieldProps & { definition: EffectDefinition }) {
  const safeMode: EffectMode = mode === "light" ? "light" : "dark";
  const background = effectBackground(definition, safeMode);
  const source = useMemo(
    () => buildFocusedDocument(definition, safeMode),
    [definition, safeMode],
  );
  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);
  const filter =
    safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
      ? undefined
      : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  return (
    <iframe
      className={className}
      data-mode={safeMode}
      title={definition.title}
      srcDoc={source}
      sandbox="allow-scripts"
      loading="eager"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background,
        filter,
        ...style,
      }}
    />
  );
}

function VoidField(props: VoidFieldProps) {
  return (
    <NeuformIsolatedEffect {...props} definition={VOID_FIELD_DEFINITION} />
  );
}

export default VoidField;
