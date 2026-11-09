import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface InteractiveStarfieldShaderProps {
  hasActiveReminders?: boolean;
  hasUpcomingReminders?: boolean;
  disableCenterDimming?: boolean;
}

const InteractiveStarfieldShader = ({
  hasActiveReminders = false,
  hasUpcomingReminders = false,
  disableCenterDimming = false,
}: InteractiveStarfieldShaderProps) => {
  const containerRef = useRef(null);
  const materialRef = useRef();

  // Update shader uniforms when props change
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.hasActiveReminders.value =
        hasActiveReminders;
    }
  }, [hasActiveReminders]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.hasUpcomingReminders.value =
        hasUpcomingReminders;
    }
  }, [hasUpcomingReminders]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.disableCenterDimming.value =
        disableCenterDimming;
    }
  }, [disableCenterDimming]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer + Scene + Camera + Clock
    let renderer;
    try {
      // Use alpha:false for a standard opaque background
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.error("WebGL not supported", err);
      container.innerHTML =
        '<p style="color:white;text-align:center;">Sorry, WebGL isn’t available.</p>';
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) Shaders
    const vertexShader = `
      // We pass the UV coordinates of the plane to the fragment shader
      varying vec2 vTextureCoord;
      void main() {
        vTextureCoord = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform bool hasActiveReminders;
      uniform bool hasUpcomingReminders;
      uniform bool disableCenterDimming;
      varying vec2 vTextureCoord;

      void mainImage(out vec4 O, in vec2 fragCoord) {
        O = vec4(0.0, 0.0, 0.0, 1.0);
        vec2 b = vec2(0.0, 0.2);
        vec2 p;
        mat2 R = mat2(1.0, 0.0, 0.0, 1.0); // Initial identity matrix
        
        // Calculate distance from center for dimming the center
        vec2 center = iResolution.xy * 0.5;
        float dist = distance(fragCoord, center);
        float radius = min(iResolution.x, iResolution.y) * 0.5;
        
        // Create a dimming factor for the center area (30% of the radius)
        float centerDim = disableCenterDimming ? 1.0 : smoothstep(radius * 0.3, radius * 0.5, dist);
        
        // Using a proper GLSL loop structure
        for(int i = 0; i < 20; i++) {
          float fi = float(i) + 1.0; // Starting from 1.0
          
          // Create rotation matrix for this iteration
          float angle = fi + 0.0;
          float c = cos(angle);
          float s = sin(angle);
          R = mat2(c, -s, s, c);
          
          // Second rotation for effect
          float angle2 = fi + 33.0;
          float c2 = cos(angle2);
          float s2 = sin(angle2);
          mat2 R2 = mat2(c2, -s2, s2, c2);
          
          // Calculate position
          vec2 coord = fragCoord / iResolution.y * fi * 0.1 + iTime * b;
          vec2 frac_coord = fract(coord * R2) - 0.5;
          p = R * frac_coord;
          vec2 clamped_p = clamp(p, -b, b);
          
          // Calculate intensity and color
          float len = length(clamped_p - p);
          if (len > 0.0) {
            vec4 star = 1e-3 / len * (cos(p.y / 0.1 + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0);
            O += star;
          }
        }
        
        // Adjust colors based on reminder state
        if (hasActiveReminders) {
          // Blue for active reminders
          O.rgb = mix(O.rgb, vec3(0.2, 0.4, 1.0), 0.3);
        } else if (hasUpcomingReminders) {
          // Green for upcoming reminders
          O.rgb = mix(O.rgb, vec3(0.2, 1.0, 0.4), 0.3);
        }
        
        // Apply center dimming only if not disabled
        if (!disableCenterDimming) {
          O.rgb = mix(O.rgb * 0.3, O.rgb, centerDim);
        }
      }

      void main() {
        // Remove the circular mask to make the shader full screen
        vec4 color;
        mainImage(color, vTextureCoord * iResolution);
        gl_FragColor = color;
      }
    `;

    // 3) Material, Geometry, Mesh
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      hasActiveReminders: { value: hasActiveReminders },
      hasUpcomingReminders: { value: hasUpcomingReminders },
      disableCenterDimming: { value: disableCenterDimming },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    materialRef.current = material; // Store material in ref
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4) Resize Handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    window.addEventListener("resize", onResize);
    onResize();

    // 5) Animation Loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // 6) Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      const canvas = renderer.domElement;
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
      aria-label="Interactive starfield animation"
    />
  );
};

export default InteractiveStarfieldShader;
