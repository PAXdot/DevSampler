import React, { useState, useCallback, useRef, useEffect } from "react";

// --- Custom Hooks ---

/**
 * A custom hook to throttle a callback function.
 * This ensures the function is not called more than once every `delay` milliseconds.
 * Useful for performance-critical event handlers like mouse move or scroll.
 * @param {Function} callback The function to throttle.
 * @param {number} delay The throttle delay in milliseconds.
 * @returns {Function} A memoized, throttled version of the callback.
 */
const useThrottledCallback = (callback, delay) => {
  const timeoutRef = useRef(null);
  const callbackRef = useRef(callback);

  // Keep the latest callback in a ref to avoid stale closures.
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args) => {
      if (!timeoutRef.current) {
        callbackRef.current(...args);
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null;
        }, delay);
      }
    },
    [delay],
  );
};

/**
 * A custom hook to encapsulate all WebGL shader logic.
 * It handles scene setup, the animation loop, and cleanup, and now includes robust error handling.
 * @param {React.RefObject<HTMLCanvasElement>} canvasRef Ref to the canvas element.
 * @param {object} params Shader parameters (hue, speed, etc.).
 * @returns {boolean} A boolean indicating if WebGL is supported and initialized successfully.
 */
const useShaderAnimation = (canvasRef, params) => {
  const { hue, speed, intensity, complexity } = params;
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  // Throttled mouse move handler for performance
  const throttledMouseMove = useThrottledCallback((e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mousePos.current.x = (e.clientX - rect.left) / rect.width;
    mousePos.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
  }, 16); // Throttle to ~60fps

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Helper Functions for WebGL Setup ---
    const initWebGL = () => {
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        console.error("WebGL not supported.");
        setIsWebGLSupported(false);
        return null;
      }
      return gl;
    };

    const compileShader = (gl, source, type) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(`Shader compile error: ${gl.getShaderInfoLog(shader)}`);
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const createProgram = (gl, vertexShader, fragmentShader) => {
      const program = gl.createProgram();
      if (!program) return null;
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(`Program link error: ${gl.getProgramInfoLog(program)}`);
        return null;
      }
      return program;
    };

    const gl = initWebGL();
    if (!gl) return;

    // --- Shaders (GLSL) ---
    const vertexShaderSource = `
            attribute vec2 a_position;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `;

    const fragmentShaderSource = `
            precision highp float;
            
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform float u_hue;
            uniform float u_speed;
            uniform float u_intensity; // Controls turbulence
            uniform float u_complexity; // Controls viscosity / detail

            #define PI 3.14159265359
            
            // Creative color palette function inspired by Inigo Quilez.
            // Generates smooth, aesthetically pleasing color transitions.
            vec3 palette( float t ) {
                vec3 a = vec3(0.5, 0.5, 0.5);
                vec3 b = vec3(0.5, 0.5, 0.5);
                vec3 c = vec3(1.0, 1.0, 0.5);
                vec3 d = vec3(0.8, 0.9, 0.3);
                d.x += u_hue/360.0; // Shift hue based on user control.
                return a + b*cos( 6.28318*(c*t+d) );
            }

            // Simple pseudo-random number generator.
            float random (vec2 p) {
                return fract(sin(dot(p.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            // 2D Simplex/Value noise function.
            float noise (vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                vec2 u = f*f*(3.0-2.0*f); // Smoothstep for interpolation.
                return mix( mix( random( i + vec2(0.0,0.0) ), 
                                 random( i + vec2(1.0,0.0) ), u.x),
                            mix( random( i + vec2(0.0,1.0) ), 
                                 random( i + vec2(1.0,1.0) ), u.x), u.y);
            }

            // Fractal Brownian Motion (fbm) - layers multiple octaves of noise.
            // This creates a more natural, detailed texture than a single noise call.
            float fbm (vec2 p) {
                float v = 0.0;
                float a = 0.5;
                mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 ); // Rotation matrix to break up grid patterns.
                for (int i = 0; i < 6; ++i) {
                    v += a * noise(p);
                    p = m * p;
                    a *= 0.5;
                }
                return v;
            }

            void main() {
                // Normalize coordinates to be resolution-independent and centered.
                vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
                
                // Map mouse coordinates to the same space as uv.
                vec2 mouse_uv = (u_mouse * 2.0 - 1.0);
                mouse_uv.x *= u_resolution.x / u_resolution.y;

                // 1. Create a base flow field using time-varied fbm.
                // 'u_complexity' acts like viscosity, controlling the zoom level of the noise.
                vec2 p = uv * u_complexity;
                float t = u_time * 0.2 * u_speed;
                
                // 2. Advect the flow field by itself to create turbulence.
                // This is a common technique in fluid simulation for self-generating detail.
                float q = fbm(p - t);
                vec2 r = vec2(fbm(p + q + vec2(1.7,9.2) - t), 
                              fbm(p + q + vec2(8.3,2.8) - t));
                
                // 3. Distort the texture coordinates using the turbulent flow field.
                // 'u_intensity' controls the strength of this distortion (turbulence).
                vec2 distorted_uv = r * u_intensity;

                // 4. Add mouse interaction - creates a displacement field around the cursor.
                float mouse_dist = length(uv - mouse_uv);
                distorted_uv -= normalize(uv - mouse_uv) * 0.1 / (mouse_dist + 0.1);

                // 5. Generate the final texture using the distorted coordinates.
                float color_val = fbm(p + distorted_uv);
                
                // 6. Apply the color palette.
                vec3 col = palette(color_val);
                
                // 7. Add a soft vignette for depth and focus.
                col *= (1.0 - 0.5 * pow(length(uv), 2.0));

                gl_FragColor = vec4(col, 1.0);
            }
        `;

    const vertexShader = compileShader(
      gl,
      vertexShaderSource,
      gl.VERTEX_SHADER,
    );
    const fragmentShader = compileShader(
      gl,
      fragmentShaderSource,
      gl.FRAGMENT_SHADER,
    );
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_position",
    );
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // Cache uniform locations
    const uniformLocations = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      mouse: gl.getUniformLocation(program, "u_mouse"),
      hue: gl.getUniformLocation(program, "u_hue"),
      speed: gl.getUniformLocation(program, "u_speed"),
      intensity: gl.getUniformLocation(program, "u_intensity"),
      complexity: gl.getUniformLocation(program, "u_complexity"),
    };

    let animationFrameId;
    const startTime = performance.now();
    const render = () => {
      if (
        canvas.width !== canvas.clientWidth ||
        canvas.height !== canvas.clientHeight
      ) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }
      gl.uniform2f(
        uniformLocations.resolution,
        gl.canvas.width,
        gl.canvas.height,
      );
      gl.uniform1f(
        uniformLocations.time,
        (performance.now() - startTime) * 0.001,
      );
      gl.uniform2f(
        uniformLocations.mouse,
        mousePos.current.x,
        mousePos.current.y,
      );
      gl.uniform1f(uniformLocations.hue, hue);
      gl.uniform1f(uniformLocations.speed, speed);
      gl.uniform1f(uniformLocations.intensity, intensity);
      gl.uniform1f(uniformLocations.complexity, complexity);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    window.addEventListener("mousemove", throttledMouseMove);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", throttledMouseMove);
      if (gl && !gl.isContextLost()) {
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, [hue, speed, intensity, complexity, canvasRef, throttledMouseMove]);

  return isWebGLSupported;
};

// --- Components ---

// Canvas component with improved error handling.
const ShaderCanvas = React.memo(({ hue, speed, intensity, complexity }) => {
  const canvasRef = useRef(null);
  const isWebGLSupported = useShaderAnimation(canvasRef, {
    hue,
    speed,
    intensity,
    complexity,
  });

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-center p-4">
        <p>
          Sorry, your browser does not support WebGL, which is required for this
          animation.
        </p>
      </div>
    );
  }

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
});

// Main ShaderComponent
const ShaderComponent = ({
  hue = 25,
  speed = 0.4,
  intensity = 1.0, // Controls turbulence
  complexity = 2.0, // Controls viscosity
} = {}) => {
  return (
    <div className="relative w-full h-full bg-gray-900 font-sans overflow-hidden">
      <ShaderCanvas
        hue={hue}
        speed={speed}
        intensity={intensity}
        complexity={complexity}
      />
    </div>
  );
};

export default ShaderComponent;
