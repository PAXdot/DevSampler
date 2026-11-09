"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const CURSOR_SIZE = 36;
const CURSOR_BODY_RADIUS = 7;
const CURSOR_HALO_RADIUS = 16;

const SPHERE_RADIUS = 1.5;
const CAMERA_Z = 8;
const SPHERE_SEGMENTS = 72;

const DEFAULTS = {
  theme: "dark" as const,
  numLatitudeLines: 18,
  numFlowLines: 60,
  particlesPerLine: 4,
  orbRadiusPx: 180,
  orbRotationSpeed: 0.14,
  orbPoleSpeed: 0.05,
  lineWidth: 1,
  particleSize: 2.5,
  floatAmplitude: 6,
  floatSpeed: 1,
  driftAmplitude: 0.12,
  showCursor: true,
  enableMouseInteraction: true,
  attractRadius: 90,
  pushRadius: 170,
  enableClickEffects: true,
  enablePokeEffects: true,
  pokeAmplitudePx: 10,
  pokeDuration: 2.8,
  maxPokes: 3,
  showGlow: true,
};

const THEME_COLORS = {
  dark: {
    orbColor: "#6366f1",
    flowColor: "#818cf8",
  },
  light: {
    orbColor: "#4338ca",
    flowColor: "#4f46e5",
  },
} as const;

export type OrbTheme = "dark" | "light";

export type OrbFlowConfig = {
  theme?: OrbTheme;
  numLatitudeLines?: number;
  numFlowLines?: number;
  particlesPerLine?: number;
  orbRadiusPx?: number;
  orbColor?: string;
  flowColor?: string;
  orbRotationSpeed?: number;
  orbPoleSpeed?: number;
  lineWidth?: number;
  particleSize?: number;
  floatAmplitude?: number;
  floatSpeed?: number;
  driftAmplitude?: number;
  showCursor?: boolean;
  enableMouseInteraction?: boolean;
  attractRadius?: number;
  pushRadius?: number;
  enableClickEffects?: boolean;
  enablePokeEffects?: boolean;
  pokeAmplitudePx?: number;
  pokeDuration?: number;
  maxPokes?: number;
  showGlow?: boolean;
  className?: string;
  style?: CSSProperties;
};

type ResolvedConfig = {
  theme: OrbTheme;
  numLatitudeLines: number;
  numFlowLines: number;
  particlesPerLine: number;
  orbRadiusPx: number;
  orbColor: string;
  flowColor: string;
  orbRotationSpeed: number;
  orbPoleSpeed: number;
  lineWidth: number;
  particleSize: number;
  floatAmplitude: number;
  floatSpeed: number;
  driftAmplitude: number;
  showCursor: boolean;
  enableMouseInteraction: boolean;
  attractRadius: number;
  pushRadius: number;
  enableClickEffects: boolean;
  enablePokeEffects: boolean;
  pokeAmplitudePx: number;
  pokeDuration: number;
  maxPokes: number;
  showGlow: boolean;
};

type Particle = {
  x: number;
  y: number;
  phase: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  life: number;
};

type Burst = {
  x: number;
  y: number;
  life: number;
};

type Poke = {
  latitude: number;
  longitude: number;
  startedAt: number;
  strength: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

function finiteOr(value: number | undefined, fallback: number) {
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : fallback;
}

function resolveConfig(props: OrbFlowConfig): ResolvedConfig {
  const theme = props.theme ?? DEFAULTS.theme;
  const themeColors = THEME_COLORS[theme];

  return {
    theme,
    numLatitudeLines: Math.round(
      clamp(finiteOr(props.numLatitudeLines, DEFAULTS.numLatitudeLines), 2, 48)
    ),
    numFlowLines: Math.round(
      clamp(finiteOr(props.numFlowLines, DEFAULTS.numFlowLines), 0, 250)
    ),
    particlesPerLine: Math.round(
      clamp(finiteOr(props.particlesPerLine, DEFAULTS.particlesPerLine), 1, 12)
    ),
    orbRadiusPx: clamp(finiteOr(props.orbRadiusPx, DEFAULTS.orbRadiusPx), 50, 500),
    orbColor: props.orbColor ?? themeColors.orbColor,
    flowColor: props.flowColor ?? themeColors.flowColor,
    orbRotationSpeed: clamp(
      finiteOr(props.orbRotationSpeed, DEFAULTS.orbRotationSpeed),
      -1.5,
      1.5
    ),
    orbPoleSpeed: clamp(
      finiteOr(props.orbPoleSpeed, DEFAULTS.orbPoleSpeed),
      -1,
      1
    ),
    lineWidth: clamp(finiteOr(props.lineWidth, DEFAULTS.lineWidth), 0.25, 4),
    particleSize: clamp(
      finiteOr(props.particleSize, DEFAULTS.particleSize),
      0.5,
      8
    ),
    floatAmplitude: clamp(
      finiteOr(props.floatAmplitude, DEFAULTS.floatAmplitude),
      0,
      24
    ),
    floatSpeed: clamp(finiteOr(props.floatSpeed, DEFAULTS.floatSpeed), 0, 4),
    driftAmplitude: clamp(
      finiteOr(props.driftAmplitude, DEFAULTS.driftAmplitude),
      0,
      1
    ),
    showCursor: props.showCursor ?? DEFAULTS.showCursor,
    enableMouseInteraction:
      props.enableMouseInteraction ?? DEFAULTS.enableMouseInteraction,
    attractRadius: clamp(
      finiteOr(props.attractRadius, DEFAULTS.attractRadius),
      0,
      300
    ),
    pushRadius: clamp(
      finiteOr(props.pushRadius, DEFAULTS.pushRadius),
      0,
      500
    ),
    enableClickEffects:
      props.enableClickEffects ?? DEFAULTS.enableClickEffects,
    enablePokeEffects: props.enablePokeEffects ?? DEFAULTS.enablePokeEffects,
    pokeAmplitudePx: clamp(
      finiteOr(props.pokeAmplitudePx, DEFAULTS.pokeAmplitudePx),
      0,
      40
    ),
    pokeDuration: clamp(
      finiteOr(props.pokeDuration, DEFAULTS.pokeDuration),
      0.5,
      8
    ),
    maxPokes: Math.round(
      clamp(finiteOr(props.maxPokes, DEFAULTS.maxPokes), 0, 10)
    ),
    showGlow: props.showGlow ?? DEFAULTS.showGlow,
  };
}

function hexToRgb(color: string, fallback: string): [number, number, number] {
  const normalize = (input: string) => {
    let value = input.trim().replace(/^#/, "");

    if (/^[\da-f]{3}$/i.test(value)) {
      value = value
        .split("")
        .map((character) => character + character)
        .join("");
    }

    if (/^[\da-f]{8}$/i.test(value)) {
      value = value.slice(0, 6);
    }

    return /^[\da-f]{6}$/i.test(value) ? value : null;
  };

  const value = normalize(color) ?? normalize(fallback) ?? "6366f1";

  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ];
}

function isInteractiveTarget(target: EventTarget | null) {
  return (
    target instanceof Element &&
    Boolean(
      target.closest(
        [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "option",
          "[role='button']",
          "[data-orb-native-cursor]",
          "[contenteditable='true']",
        ].join(",")
      )
    )
  );
}

export default function OrbFlowBackground(props: OrbFlowConfig) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<SVGSVGElement>(null);
  const configRef = useRef<ResolvedConfig>(resolveConfig(props));

  // Update values without tearing down the animation loop whenever a knob moves.
  configRef.current = resolveConfig(props);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const activeCanvas = canvas;

    const context = activeCanvas.getContext("2d", { alpha: true });
    if (!context) return;

    const cursorElement = cursorRef.current;
    const ctx = context;

    let width = 1;
    let height = 1;
    let dpr = 1;
    let animationFrameId = 0;
    let paused = document.visibilityState === "hidden";

    let mouseX = -9999;
    let mouseY = -9999;
    let mouseActive = false;
    let cursorVisible = false;

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    const bursts: Burst[] = [];
    const pokes: Poke[] = [];

    const startTime = performance.now();
    let lastFrameTime = startTime;
    let initializedParticleCount = -1;

    const getCanvasRect = () => activeCanvas.getBoundingClientRect();

    function initializeParticles(config: ResolvedConfig) {
      particles.length = 0;

      const total = Math.min(
        5000,
        config.numFlowLines * config.particlesPerLine
      );
      const exclusionRadius = config.orbRadiusPx * 1.2;

      for (let index = 0; index < total; index += 1) {
        let x = width / 2;
        let y = height / 2;

        for (let attempt = 0; attempt < 40; attempt += 1) {
          x = Math.random() * width;
          y = Math.random() * height;

          const dx = x - width / 2;
          const dy = y - height / 2;

          if (Math.hypot(dx, dy) > exclusionRadius) break;
        }

        particles.push({
          x,
          y,
          phase: Math.random() * Math.PI * 2,
        });
      }

      initializedParticleCount = total;
    }

    function resizeCanvas() {
      const rect = getCanvasRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      activeCanvas.width = Math.round(width * dpr);
      activeCanvas.height = Math.round(height * dpr);
      activeCanvas.style.width = "100%";
      activeCanvas.style.height = "100%";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initializeParticles(configRef.current);
    }

    function hideCustomCursor() {
      cursorVisible = false;
      if (cursorElement) cursorElement.style.opacity = "0";
      mouseActive = false;
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") {
        hideCustomCursor();
        return;
      }

      const rect = getCanvasRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const inside =
        localX >= 0 &&
        localY >= 0 &&
        localX <= rect.width &&
        localY <= rect.height;

      if (!inside) {
        hideCustomCursor();
        return;
      }

      mouseX = localX;
      mouseY = localY;
      mouseActive = true;

      const overInteractive = isInteractiveTarget(event.target);
      const shouldShowCursor =
        configRef.current.showCursor && !overInteractive;

      if (cursorElement) {
        cursorElement.style.transform = `translate3d(${localX - CURSOR_SIZE / 2}px, ${localY - CURSOR_SIZE / 2}px, 0)`;
        cursorElement.style.opacity = shouldShowCursor ? "1" : "0";
      }

      cursorVisible = shouldShowCursor;
    }

    function handleClick(event: MouseEvent) {
      if (event.button !== 0 || isInteractiveTarget(event.target)) return;

      const rect = getCanvasRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const config = configRef.current;
      const nowSeconds = (performance.now() - startTime) / 1000;

      if (config.enableClickEffects) {
        ripples.push({ x, y, radius: 0, life: 1 });
        bursts.push({ x, y, life: 1 });

        if (ripples.length > 8) ripples.shift();
        if (bursts.length > 8) bursts.shift();
      }

      if (!config.enablePokeEffects || config.maxPokes === 0) return;

      const centerX = width / 2;
      const centerY = height / 2;
      const dx = x - centerX;
      const dy = y - centerY;

      if (Math.hypot(dx, dy) >= config.orbRadiusPx * 1.15) return;

      const cosineLatitude = clamp(
        (centerY - y) / Math.max(1, config.orbRadiusPx),
        -1,
        1
      );
      const latitude = Math.acos(cosineLatitude);
      const sineLatitude = Math.sin(latitude);

      let relativeLongitude = Math.PI / 2;
      if (sineLatitude > 0.02) {
        const cosineLongitude = clamp(
          dx / (sineLatitude * config.orbRadiusPx),
          -1,
          1
        );
        relativeLongitude = Math.acos(cosineLongitude);
      }

      const longitude =
        relativeLongitude + nowSeconds * config.orbRotationSpeed;

      pokes.push({
        latitude,
        longitude,
        startedAt: nowSeconds,
        strength: 1,
      });

      while (pokes.length > config.maxPokes) pokes.shift();
    }

    function drawParticles(
      config: ResolvedConfig,
      time: number,
      deltaTime: number,
      flowRgb: [number, number, number]
    ) {
      const centerX = width / 2;
      const centerY = height / 2;
      const particleSize = config.particleSize;
      const fadeStart = config.orbRadiusPx * 1.05;
      const fadeEnd = config.orbRadiusPx * 0.75;

      const speedMultiplier = config.floatSpeed;
      const amplitudeMultiplier = config.floatAmplitude / 6;

      const baseUpwardSpeed = 16 * speedMultiplier;
      const amplitudeOne = 9 * amplitudeMultiplier * speedMultiplier;
      const amplitudeTwo = 7 * amplitudeMultiplier * speedMultiplier;
      const amplitudeThree =
        3 * (config.driftAmplitude / 0.12) * speedMultiplier;

      const frequencyOne = 0.01;
      const frequencyTwo = 0.015;
      const frequencyThree = 0.004;
      const waveSpeedOne = 0.12 * speedMultiplier;
      const waveSpeedTwo = -0.09 * speedMultiplier;
      const waveSpeedThree = 0.06 * speedMultiplier;

      const deflectionRadius = config.orbRadiusPx * 1.5;
      const outwardPush = 40 * speedMultiplier;
      const swirlForce = 32 * speedMultiplier;
      const mousePull = 60 * speedMultiplier;
      const clickPush = mousePull * 2;

      const wrapTop = -40;
      const wrapBottom = height + 40;
      const wrapLeft = -40;
      const wrapRight = width + 40;

      for (const particle of particles) {
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distanceFromCenter = Math.hypot(dx, dy);

        let velocityX = 0;
        let velocityY = -baseUpwardSpeed;

        {
          const sineX = Math.sin(frequencyOne * dx + waveSpeedOne * time);
          const cosineX = Math.cos(frequencyOne * dx + waveSpeedOne * time);
          const sineY = Math.sin(frequencyOne * dy);
          const cosineY = Math.cos(frequencyOne * dy);
          velocityX += amplitudeOne * sineX * cosineY;
          velocityY -= amplitudeOne * cosineX * sineY;
        }

        {
          const sineY = Math.sin(frequencyTwo * dy + waveSpeedTwo * time);
          const cosineY = Math.cos(frequencyTwo * dy + waveSpeedTwo * time);
          const sineX = Math.sin(frequencyTwo * dx);
          const cosineX = Math.cos(frequencyTwo * dx);
          velocityX += amplitudeTwo * cosineY * sineX;
          velocityY -= amplitudeTwo * sineY * cosineX;
        }

        {
          const sineY = Math.sin(frequencyThree * dy + waveSpeedThree * time);
          const cosineY = Math.cos(frequencyThree * dy + waveSpeedThree * time);
          const sineX = Math.sin(frequencyThree * dx);
          const cosineX = Math.cos(frequencyThree * dx);
          velocityX += amplitudeThree * cosineY * sineX;
          velocityY -= amplitudeThree * sineY * cosineX;
        }

        if (
          distanceFromCenter > 0.5 &&
          distanceFromCenter < deflectionRadius
        ) {
          const force = 1 - distanceFromCenter / deflectionRadius;
          const normalX = dx / distanceFromCenter;
          const normalY = dy / distanceFromCenter;

          velocityX += normalX * force * outwardPush - normalY * force * swirlForce;
          velocityY += normalY * force * outwardPush + normalX * force * swirlForce;
        }

        if (
          config.enableMouseInteraction &&
          mouseActive &&
          config.attractRadius > 0
        ) {
          const mouseDx = mouseX - particle.x;
          const mouseDy = mouseY - particle.y;
          const mouseDistance = Math.hypot(mouseDx, mouseDy);

          if (mouseDistance < config.attractRadius && mouseDistance > 0.5) {
            const force = 1 - mouseDistance / config.attractRadius;
            velocityX += (mouseDx / mouseDistance) * force * mousePull;
            velocityY += (mouseDy / mouseDistance) * force * mousePull;
          }
        }

        if (config.enableClickEffects && config.pushRadius > 0) {
          for (const burst of bursts) {
            const burstDx = particle.x - burst.x;
            const burstDy = particle.y - burst.y;
            const burstDistance = Math.hypot(burstDx, burstDy);

            if (burstDistance < config.pushRadius && burstDistance > 0.5) {
              const force = 1 - burstDistance / config.pushRadius;
              const pushForce = force * clickPush * burst.life;
              velocityX += (burstDx / burstDistance) * pushForce;
              velocityY += (burstDy / burstDistance) * pushForce;
            }
          }
        }

        velocityX += Math.sin(time * 0.7 + particle.phase) * 2.2 * speedMultiplier;
        velocityY +=
          Math.cos(time * 0.6 + particle.phase * 1.3) * 2.2 * speedMultiplier;

        particle.x += velocityX * deltaTime;
        particle.y += velocityY * deltaTime;

        if (
          config.enableMouseInteraction &&
          mouseActive &&
          particleSize > 0
        ) {
          const mouseDx = particle.x - mouseX;
          const mouseDy = particle.y - mouseY;
          const mouseDistance = Math.hypot(mouseDx, mouseDy);

          if (mouseDistance < CURSOR_BODY_RADIUS) {
            if (mouseDistance < 0.001) {
              particle.x = mouseX + Math.cos(particle.phase) * CURSOR_BODY_RADIUS;
              particle.y = mouseY + Math.sin(particle.phase) * CURSOR_BODY_RADIUS;
            } else {
              particle.x = mouseX + (mouseDx / mouseDistance) * CURSOR_BODY_RADIUS;
              particle.y = mouseY + (mouseDy / mouseDistance) * CURSOR_BODY_RADIUS;
            }
          }
        }

        const centerDx = particle.x - centerX;
        const centerDy = particle.y - centerY;
        const centerDistance = Math.hypot(centerDx, centerDy);

        if (centerDistance < config.orbRadiusPx) {
          if (centerDistance < 0.001) {
            particle.x = centerX + Math.cos(particle.phase) * config.orbRadiusPx;
            particle.y = centerY + Math.sin(particle.phase) * config.orbRadiusPx;
          } else {
            particle.x = centerX + (centerDx / centerDistance) * config.orbRadiusPx;
            particle.y = centerY + (centerDy / centerDistance) * config.orbRadiusPx;
          }
        }

        if (particle.y > wrapBottom) {
          particle.y = wrapTop;
          particle.x = Math.random() * width;
        } else if (particle.y < wrapTop - 40) {
          particle.y = wrapBottom - 20;
        }

        if (particle.x < wrapLeft) particle.x = wrapRight - 20;
        else if (particle.x > wrapRight) particle.x = wrapLeft + 20;

        const finalDistance = Math.hypot(
          particle.x - centerX,
          particle.y - centerY
        );
        let centerOpacity = 1;

        if (finalDistance < fadeStart) {
          centerOpacity = clamp(
            (finalDistance - fadeEnd) / (fadeStart - fadeEnd),
            0,
            1
          );
        }

        if (centerOpacity <= 0.01 || particleSize <= 0) continue;

        ctx.fillStyle = `rgba(${flowRgb[0]}, ${flowRgb[1]}, ${flowRgb[2]}, ${0.15 * centerOpacity})`;
        ctx.fillRect(
          particle.x - particleSize * 1.5,
          particle.y - particleSize * 1.5,
          particleSize * 3,
          particleSize * 3
        );

        ctx.fillStyle = `rgba(${flowRgb[0]}, ${flowRgb[1]}, ${flowRgb[2]}, ${0.85 * centerOpacity})`;
        ctx.fillRect(
          particle.x - particleSize / 2,
          particle.y - particleSize / 2,
          particleSize,
          particleSize
        );
      }
    }

    function drawOrb(
      config: ResolvedConfig,
      time: number,
      orbRgb: [number, number, number]
    ) {
      const centerX = width / 2;
      const centerY = height / 2;
      const orbScale = config.orbRadiusPx / SPHERE_RADIUS;
      const rotation = time * config.orbRotationSpeed;
      const cosineRotation = Math.cos(rotation);
      const sineRotation = Math.sin(rotation);
      const pokeDuration = config.pokeDuration;
      const pokeTimeDecay = Math.max(0.15, pokeDuration * 0.32);
      const pokeAmplitudeUnits =
        (config.pokeAmplitudePx * SPHERE_RADIUS) /
        Math.max(50, config.orbRadiusPx);

      for (let lineIndex = 0; lineIndex < config.numLatitudeLines; lineIndex += 1) {
        const lineOffset = lineIndex / config.numLatitudeLines;
        const progress = ((time * config.orbPoleSpeed + lineOffset) % 1 + 1) % 1;
        const latitude = progress * Math.PI;
        const sineLatitude = Math.sin(latitude);

        if (sineLatitude < 0.02) continue;

        const circleRadius = sineLatitude * SPHERE_RADIUS;
        const baseY = Math.cos(latitude) * SPHERE_RADIUS;

        const projectedX: number[] = [];
        const projectedY: number[] = [];
        const depthValues: number[] = [];

        for (let segment = 0; segment <= SPHERE_SEGMENTS; segment += 1) {
          const angle = (segment / SPHERE_SEGMENTS) * Math.PI * 2;

          let localX = Math.cos(angle) * circleRadius;
          let localY = baseY;
          let localZ = Math.sin(angle) * circleRadius;

          if (config.enablePokeEffects && pokes.length > 0) {
            for (const poke of pokes) {
              const age = time - poke.startedAt;
              if (age < 0 || age > pokeDuration) continue;

              let longitudeDistance = angle - poke.longitude;
              longitudeDistance -=
                Math.PI * 2 * Math.round(longitudeDistance / (Math.PI * 2));

              const latitudeDistance = latitude - poke.latitude;
              const scaledLongitudeDistance = longitudeDistance * sineLatitude;
              const distance = Math.hypot(
                latitudeDistance,
                scaledLongitudeDistance
              );

              const timeDecay = Math.exp(-age / pokeTimeDecay);
              const spaceDecay = Math.exp(-distance / 0.7);
              const wave = Math.sin(distance * 3.5 - age * 9);
              const displacement =
                pokeAmplitudeUnits *
                poke.strength *
                wave *
                timeDecay *
                spaceDecay;

              const scale = 1 + displacement / SPHERE_RADIUS;
              localX *= scale;
              localY *= scale;
              localZ *= scale;
            }
          }

          const rotatedX = localX * cosineRotation + localZ * sineRotation;
          const rotatedZ = -localX * sineRotation + localZ * cosineRotation;
          const perspective = CAMERA_Z / (CAMERA_Z - rotatedZ);

          projectedX.push(centerX + rotatedX * perspective * orbScale);
          projectedY.push(centerY - localY * perspective * orbScale);
          depthValues.push(
            clamp((rotatedZ / SPHERE_RADIUS + 1) / 2, 0, 1)
          );
        }

        for (let segment = 0; segment < SPHERE_SEGMENTS; segment += 1) {
          const opacity =
            ((depthValues[segment] + depthValues[segment + 1]) / 2) * 0.9 +
            0.05;

          ctx.strokeStyle = `rgba(${orbRgb[0]}, ${orbRgb[1]}, ${orbRgb[2]}, ${opacity})`;
          ctx.lineWidth = config.lineWidth;
          ctx.beginPath();
          ctx.moveTo(projectedX[segment], projectedY[segment]);
          ctx.lineTo(projectedX[segment + 1], projectedY[segment + 1]);
          ctx.stroke();
        }
      }
    }

    function drawEffects(
      config: ResolvedConfig,
      deltaTime: number,
      flowRgb: [number, number, number]
    ) {
      if (config.enableClickEffects) {
        for (let index = ripples.length - 1; index >= 0; index -= 1) {
          const ripple = ripples[index];
          ripple.radius += 180 * deltaTime;
          ripple.life -= 0.9 * deltaTime;

          if (ripple.life <= 0) ripples.splice(index, 1);
        }

        for (const ripple of ripples) {
          if (ripple.radius < 5) continue;

          ctx.strokeStyle = `rgba(${flowRgb[0]}, ${flowRgb[1]}, ${flowRgb[2]}, ${ripple.life * 0.35})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();

          if (ripple.radius > 30) {
            ctx.strokeStyle = `rgba(${flowRgb[0]}, ${flowRgb[1]}, ${flowRgb[2]}, ${ripple.life * 0.15})`;
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        for (let index = bursts.length - 1; index >= 0; index -= 1) {
          bursts[index].life -= 2.4 * deltaTime;
          if (bursts[index].life <= 0) bursts.splice(index, 1);
        }
      } else {
        ripples.length = 0;
        bursts.length = 0;
      }

      if (!config.enablePokeEffects) pokes.length = 0;
    }

    function drawFrame(now: number) {
      if (paused) return;

      const config = configRef.current;
      const elapsed = (now - startTime) / 1000;
      const deltaTime = clamp((now - lastFrameTime) / 1000, 0, 0.05);
      lastFrameTime = now;

      const expectedParticleCount = Math.min(
        5000,
        config.numFlowLines * config.particlesPerLine
      );
      if (expectedParticleCount !== initializedParticleCount) {
        initializeParticles(config);
      }

      while (pokes.length > config.maxPokes) pokes.shift();
      for (let index = pokes.length - 1; index >= 0; index -= 1) {
        if (elapsed - pokes[index].startedAt > config.pokeDuration) {
          pokes.splice(index, 1);
        }
      }

      ctx.clearRect(0, 0, width, height);

      const [orbRed, orbGreen, orbBlue] = hexToRgb(
        config.orbColor,
        THEME_COLORS[config.theme].orbColor
      );
      const [flowRed, flowGreen, flowBlue] = hexToRgb(
        config.flowColor,
        THEME_COLORS[config.theme].flowColor
      );
      const orbRgb: [number, number, number] = [orbRed, orbGreen, orbBlue];
      const flowRgb: [number, number, number] = [flowRed, flowGreen, flowBlue];

      if (config.showGlow) {
        const centerX = width / 2;
        const centerY = height / 2;
        const glowRadius = config.orbRadiusPx * 1.2;
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          glowRadius
        );

        gradient.addColorStop(
          0,
          `rgba(${flowRed}, ${flowGreen}, ${flowBlue}, 0.1)`
        );
        gradient.addColorStop(1, `rgba(${flowRed}, ${flowGreen}, ${flowBlue}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(
          centerX - glowRadius,
          centerY - glowRadius,
          glowRadius * 2,
          glowRadius * 2
        );
      }

      drawParticles(config, elapsed, deltaTime, flowRgb);
      drawOrb(config, elapsed, orbRgb);
      drawEffects(config, deltaTime, flowRgb);

      if (cursorElement) {
        cursorElement.style.opacity = config.showCursor && cursorVisible ? "1" : "0";
      }

      animationFrameId = window.requestAnimationFrame(drawFrame);
    }

    function handleVisibilityChange() {
      paused = document.visibilityState === "hidden";

      if (paused) {
        window.cancelAnimationFrame(animationFrameId);
      } else {
        lastFrameTime = performance.now();
        animationFrameId = window.requestAnimationFrame(drawFrame);
      }
    }

    function handleWindowBlur() {
      hideCustomCursor();
    }

    resizeCanvas();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resizeCanvas)
        : null;

    if (resizeObserver) {
      resizeObserver.observe(activeCanvas);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("click", handleClick);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (!paused) {
      animationFrameId = window.requestAnimationFrame(drawFrame);
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (cursorElement) cursorElement.style.opacity = "0";
    };
  }, []);

  const className = props.className ?? "";
  const style = props.style;
  const flowColor = props.flowColor ?? THEME_COLORS[props.theme ?? "dark"].flowColor;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 0, ...style }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="orb-flow-bg absolute inset-0 block h-full w-full"
        style={{ pointerEvents: "none" }}
      />

      <svg
        ref={cursorRef}
        viewBox={`0 0 ${CURSOR_SIZE} ${CURSOR_SIZE}`}
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          pointerEvents: "none",
          opacity: 0,
          transform: "translate3d(-100px, -100px, 0)",
          transition: "opacity 180ms ease",
          willChange: "transform, opacity",
        }}
      >
        <circle
          cx={CURSOR_SIZE / 2}
          cy={CURSOR_SIZE / 2}
          r={CURSOR_HALO_RADIUS}
          fill={flowColor}
          fillOpacity={0.12}
        />
        <circle
          cx={CURSOR_SIZE / 2}
          cy={CURSOR_SIZE / 2}
          r={CURSOR_BODY_RADIUS}
          fill={flowColor}
          fillOpacity={0.9}
        />
      </svg>
    </div>
  );
}
