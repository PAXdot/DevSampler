import { useEffect, useRef, useState } from 'react';

export  function BgBackground() {
    const canvasRef = useRef(null);
    const [isDark, setIsDark] = useState(false);
    const glRef = useRef(null);
    const programRef = useRef(null);
    const uResolutionRef = useRef(null);
    const uModeRef = useRef(null);

    // ---- Shader Sources ----
    const vertexShaderSource = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

    const fragmentShaderSource = `
            precision mediump float;

            uniform vec2 u_resolution;
            uniform float u_mode; // 0.0 = Light Mode, 1.0 = Dark Mode

            // --- Simplex Noise Functions for Organic Shapes ---
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                                   -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                    + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m;
                m = m*m;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            float fbm(vec2 st) {
                float value = 0.0;
                float amplitude = 0.5;
                for (int i = 0; i < 3; i++) {
                    value += amplitude * snoise(st);
                    st *= 2.0;
                    amplitude *= 0.5;
                }
                return value;
            }

            void main() {
                vec2 st = gl_FragCoord.xy / u_resolution.xy;
                vec2 aspectSt = st;
                aspectSt.x *= u_resolution.x / u_resolution.y;

                // --- Color Palette Definitions ---

                // LIGHT MODE PALETTE (Soft Mint, Ivory Vapor, Warm Pale-Gold Sun)
                vec3 lightBase  = vec3(0.89, 0.925, 0.902);  // Soft Seafoam Ivory
                vec3 lightMint  = vec3(0.72, 0.86, 0.78);   // Mint Accent
                vec3 lightSun   = vec3(1.0, 0.94, 0.80);    // Warm Gold Morning Light
                vec3 lightVapor = vec3(0.96, 0.98, 0.96);   // Translucent Light Waves

                // DARK MODE PALETTE (Deep Jungle Black, Emerald, Warm Amber Glow)
                vec3 darkBase   = vec3(0.02, 0.047, 0.027); // #050c07
                vec3 darkGreen  = vec3(0.055, 0.18, 0.125); // #0e2e20
                vec3 darkAmber  = vec3(0.33, 0.22, 0.086);  // #553816
                vec3 darkShadow = vec3(0.01, 0.02, 0.01);

                // --- Radial Lighting Setup ---
                // 1. Top-Right Gold Glow
                vec2 sunCenter = vec2(u_resolution.x / u_resolution.y * 0.82, 0.82);
                float distSun = length(aspectSt - sunCenter);
                float sunGlow = smoothstep(0.8, 0.0, distSun);

                // 2. Top-Left Mint/Green Glow
                vec2 mintCenter = vec2(u_resolution.x / u_resolution.y * 0.2, 0.7);
                float distMint = length(aspectSt - mintCenter);
                float mintGlow = smoothstep(0.85, 0.0, distMint);

                // --- Organic Leaf / Vapor Curves ---
                vec2 q = vec2(fbm(aspectSt * 1.2), fbm(aspectSt * 1.2 + vec2(1.0)));
                vec2 r = vec2(fbm(aspectSt * 1.5 + q + vec2(1.7, 9.2)), fbm(aspectSt * 1.5 + q + vec2(8.3, 2.8)));
                float organicFlow = fbm(aspectSt + r);
                float leafShape = smoothstep(-0.25, 0.55, organicFlow);

                // --- Mode Blending ---
                vec3 finalColor;

                if (u_mode < 0.5) {
                    // Render LIGHT MODE
                    finalColor = mix(lightBase, lightMint, mintGlow * 0.7 + leafShape * 0.3);
                    finalColor = mix(finalColor, lightSun, sunGlow * 0.85);
                    finalColor = mix(finalColor, lightVapor, leafShape * 0.4);
                } else {
                    // Render DARK MODE
                    finalColor = mix(darkBase, darkGreen, mintGlow * 0.85 + leafShape * 0.35);
                    finalColor = mix(finalColor, darkAmber, sunGlow * 0.75);
                    float shadowMask = smoothstep(0.0, 0.6, r.x);
                    finalColor *= (0.5 + 0.5 * shadowMask);
                }

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

    // ---- WebGL Helpers ----
    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function createProgram(gl, vertexSource, fragmentSource) {
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
        if (!vertexShader || !fragmentShader) return null;

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        return program;
    }

    // ---- Render Function ----
    function render(gl, program, uResolution, uMode, currentMode) {
        gl.uniform1f(uMode, currentMode);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    // ---- Resize Handler ----
    function resizeCanvas(canvas, gl, program, uResolution) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
    }

    // ---- Effect: WebGL Setup ----
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
            alert('WebGL not supported');
            return;
        }
        glRef.current = gl;

        const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
        if (!program) return;
        programRef.current = program;
        gl.useProgram(program);

        // Position buffer
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW
        );

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const uResolution = gl.getUniformLocation(program, 'u_resolution');
        const uMode = gl.getUniformLocation(program, 'u_mode');
        uResolutionRef.current = uResolution;
        uModeRef.current = uMode;

        // Initial resize & render
        resizeCanvas(canvas, gl, program, uResolution);
        render(gl, program, uResolution, uMode, isDark ? 1.0 : 0.0);

        // ---- Resize listener ----
        const handleResize = () => {
            resizeCanvas(canvas, gl, program, uResolution);
            render(gl, program, uResolution, uMode, isDark ? 1.0 : 0.0);
        };
        window.addEventListener('resize', handleResize);

        // ---- Cleanup ----
        return () => {
            window.removeEventListener('resize', handleResize);
            gl.deleteProgram(program);
            gl.deleteBuffer(positionBuffer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ---- Effect: Re-render when theme changes ----
    useEffect(() => {
        const gl = glRef.current;
        const program = programRef.current;
        const uResolution = uResolutionRef.current;
        const uMode = uModeRef.current;
        if (gl && program && uResolution && uMode) {
            render(gl, program, uResolution, uMode, isDark ? 1.0 : 0.0);
        }
    }, [isDark]);

    // ---- Toggle Handler ----
    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    // ---- Render ----
    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
        >
            <style>{`
                    /* Theme Toggle Button */
                    .demo-toggle-btn {
                        position: absolute;
                        top: 24px;
                        right: 24px;
                        padding: 10px 20px;
                        border-radius: 30px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        background: rgba(255, 255, 255, 0.15);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        color: #fff;
                        font-size: 14px;
                        font-weight: 500;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        z-index: 10;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                        user-select: none;
                    }
                    .demo-toggle-btn.light-active {
                        background: rgba(0, 0, 0, 0.08);
                        border-color: rgba(0, 0, 0, 0.15);
                        color: #1a2a20;
                    }
                    .demo-toggle-btn:hover {
                        transform: translateY(-2px);
                    }
                    .demo-canvas {
                        width: 100vw;
                        height: 100vh;
                        display: block;
                    }
                `}</style>

            <button
                className={`demo-toggle-btn ${!isDark ? 'light-active' : ''}`}
                onClick={toggleTheme}
            >
                {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>

            <canvas ref={canvasRef} className="demo-canvas" id="webgl-canvas" />
        </div>
    );
}