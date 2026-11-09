import * as React from "react";

// Deterministic SVG path engine from liquid-path.js.
(function installLiquidPath(global) {
  "use strict";

  const KAPPA = 0.5522847498;

  const DEFAULT_PEEL_PARAMETERS = Object.freeze({
    detachGap: 6,
    transition: 6.5,
    couplingRadius: 5,
    pull: 2.5,
  });

  const PEEL_PARAMETER_LIMITS = Object.freeze({
    detachGap: Object.freeze({ min: 6, max: 9.8 }),
    transition: Object.freeze({ min: 1.5, max: 8 }),
    couplingRadius: Object.freeze({ min: 4, max: 48 }),
    pull: Object.freeze({ min: 0, max: 8 }),
  });

  const LIQUID_GEOMETRY = Object.freeze({
    viewWidth: 520,
    viewHeight: 300,
    x: 39,
    width: 444,
    outputHeight: 68,
    inputY: 135,
    inputHeight: 134,
    outputRadius: 34,
    inputRadius: 31,
    sendSize: 34,
    restGap: 10,
    hiddenGap: -54,
    minGap: -60,
    maxGap: 10,
    renderMinGap: -72,
    renderMaxGap: 24,
    mergeGap: 0,
  });

  const LIQUID_MOTION = Object.freeze({
    stiffness: 1200,
    damping: 38,
    settleDistance: 0.08,
    settleVelocity: 1,
    openContactStart: 0.061333,
    openBridgeStart: 0.073333,
    openPeelStart: 0.099,
    openTearTime: 0.105,
    peelEaseDuration: 0.023333,
    tearFaceApproach: 2.5,
  });

  const LIQUID_TRANSITIONS = Object.freeze({
    opening: Object.freeze([
      Object.freeze({ t: 0, gap: -54 }),
      Object.freeze({ t: 0.025, gap: -46 }),
      Object.freeze({ t: 0.048333, gap: -27 }),
      Object.freeze({ t: 0.073333, gap: 6 }),
      Object.freeze({ t: 0.098333, gap: 12 }),
      Object.freeze({ t: 0.121666, gap: 16 }),
      Object.freeze({ t: 0.171666, gap: 16 }),
      Object.freeze({ t: 0.195, gap: 15 }),
      Object.freeze({ t: 0.22, gap: 12 }),
      Object.freeze({ t: 0.245, gap: 11 }),
      Object.freeze({ t: 0.268333, gap: 9 }),
      Object.freeze({ t: 0.293333, gap: 9 }),
      Object.freeze({ t: 0.316666, gap: 10 }),
      Object.freeze({ t: 0.39, gap: 10 }),
    ]),
    closing: Object.freeze([
      Object.freeze({ t: 0, gap: 10 }),
      Object.freeze({ t: 0.023333, gap: 2 }),
      Object.freeze({ t: 0.048333, gap: -16 }),
      Object.freeze({ t: 0.073333, gap: -36 }),
      Object.freeze({ t: 0.096666, gap: -50 }),
      Object.freeze({ t: 0.121666, gap: -58 }),
      Object.freeze({ t: 0.146666, gap: -60 }),
      Object.freeze({ t: 0.171666, gap: -60 }),
      Object.freeze({ t: 0.195, gap: -59 }),
      Object.freeze({ t: 0.22, gap: -57 }),
      Object.freeze({ t: 0.245, gap: -55 }),
      Object.freeze({ t: 0.268333, gap: -54 }),
      Object.freeze({ t: 0.293333, gap: -53 }),
      Object.freeze({ t: 0.316666, gap: -53 }),
      Object.freeze({ t: 0.39, gap: -54 }),
    ]),
  });

  const CLOSING_START = LIQUID_TRANSITIONS.closing[0];
  const CLOSING_DESCENT_END = LIQUID_TRANSITIONS.closing.reduce(
    (lowest, key) => (key.gap < lowest.gap ? key : lowest),
    CLOSING_START,
  );

  const CLOSE_KEYS = Object.freeze([
    Object.freeze({ t: 0, compression: 0, expand: 0, content: 0, surface: 0, bottom: 0, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.025, compression: 9.5, expand: 0, content: 0, surface: 0, bottom: 0, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.038, compression: 13.76, expand: 1.5, content: 2.86, surface: 0.52, bottom: 2.86, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.05, compression: 20, expand: 1.5, content: 5.5, surface: 1, bottom: 5.5, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.073, compression: 18, expand: 1.5, content: 6, surface: 2, bottom: 6, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.098, compression: 9, expand: 1.5, content: 4, surface: 2, bottom: 4, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.122, compression: 5, expand: 1.25, content: 3, surface: 1.5, bottom: 3, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.147, compression: 4, expand: 0.75, content: 2, surface: 1, bottom: 2, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.172, compression: 3, expand: 0.25, content: 1, surface: 0.75, bottom: 1, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.197, compression: 2, expand: 0, content: 0.5, surface: 0.5, bottom: 0.5, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.222, compression: 1, expand: 0, content: 0, surface: 0.25, bottom: 0, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.247, compression: 0, expand: 0, content: 0, surface: 0, bottom: 0, sendOffset: 0, sendScale: 1 }),
    Object.freeze({ t: 0.3, compression: 0, expand: 0, content: 0, surface: 0, bottom: 0, sendOffset: 0, sendScale: 1 }),
  ]);

  // The supplied close sequence shows four consecutive strained content
  // states. Hold the layer nearly rigid until contact, then stretch the whole
  // input around its lower edge. Text width stays invariant; only Y changes.
  const CLOSE_CONTENT_SCALE_KEYS = Object.freeze([
    Object.freeze({ t: 0, value: 1 }),
    Object.freeze({ t: 0.02, value: 1.02 }),
    Object.freeze({ t: 0.022, value: 1.04 }),
    Object.freeze({ t: 0.023333, value: 1.22 }),
    Object.freeze({ t: 0.038333, value: 1.18 }),
    Object.freeze({ t: 0.061667, value: 1.08 }),
    Object.freeze({ t: 0.096666, value: 1 }),
    Object.freeze({ t: 0.3, value: 1 }),
  ]);

  // The button body changes real CSS height inside the strained parent.
  // Its arrow is compensated later, so the glyph remains optically fixed.
  const CLOSE_SEND_KEYS = Object.freeze([
    Object.freeze({ t: 0, offset: 0, scale: 1 }),
    Object.freeze({ t: 0.02, offset: 0, scale: 1 }),
    Object.freeze({ t: 0.022, offset: 0, scale: 1 }),
    Object.freeze({ t: 0.023333, offset: 0, scale: 1.02 }),
    Object.freeze({ t: 0.038333, offset: -0.5, scale: 1.005 }),
    Object.freeze({ t: 0.061667, offset: -0.2, scale: 0.992 }),
    Object.freeze({ t: 0.096666, offset: 0, scale: 1 }),
    Object.freeze({ t: 0.3, offset: 0, scale: 1 }),
  ]);

  const PEEL_CORRECTION_KEYS = Object.freeze([
    Object.freeze({ t: 0, inputTop: 0, inputBottom: 0, outputTop: 0, outputBottom: 0, content: 0 }),
    Object.freeze({ t: 0.023, inputTop: 2, inputBottom: 1, outputTop: 0, outputBottom: 0, content: 1.6 }),
    Object.freeze({ t: 0.073, inputTop: 2, inputBottom: 2, outputTop: 0, outputBottom: 0, content: 2.4 }),
    Object.freeze({ t: 0.097, inputTop: 2, inputBottom: 1, outputTop: 1, outputBottom: 0, content: 1.7 }),
    Object.freeze({ t: 0.122, inputTop: 1, inputBottom: 0, outputTop: 0, outputBottom: -2, content: 2.4 }),
    Object.freeze({ t: 0.147, inputTop: 0, inputBottom: -1, outputTop: 1, outputBottom: -1, content: 1.3 }),
    Object.freeze({ t: 0.17, inputTop: 0, inputBottom: 0, outputTop: 0, outputBottom: 0, content: 0 }),
  ]);

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function finiteNumber(value, fallback = 0) {
    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "")
    ) {
      return fallback;
    }
    const number = typeof value === "number" ? value : Number(value);
    return Number.isFinite(number) ? number : fallback;
  }

  function normalizePeelParameters(parameters = {}) {
    const source =
      parameters && typeof parameters === "object"
        ? parameters
        : DEFAULT_PEEL_PARAMETERS;
    const detachGap = clamp(
      finiteNumber(
        source.detachGap,
        DEFAULT_PEEL_PARAMETERS.detachGap,
      ),
      PEEL_PARAMETER_LIMITS.detachGap.min,
      PEEL_PARAMETER_LIMITS.detachGap.max,
    );
    const transition = clamp(
      finiteNumber(
        source.transition,
        DEFAULT_PEEL_PARAMETERS.transition,
      ),
      PEEL_PARAMETER_LIMITS.transition.min,
      PEEL_PARAMETER_LIMITS.transition.max,
    );
    const couplingRadius = clamp(
      finiteNumber(
        source.couplingRadius,
        DEFAULT_PEEL_PARAMETERS.couplingRadius,
      ),
      PEEL_PARAMETER_LIMITS.couplingRadius.min,
      PEEL_PARAMETER_LIMITS.couplingRadius.max,
    );
    const pull = clamp(
      finiteNumber(source.pull, DEFAULT_PEEL_PARAMETERS.pull),
      PEEL_PARAMETER_LIMITS.pull.min,
      PEEL_PARAMETER_LIMITS.pull.max,
    );

    return Object.freeze({
      detachGap,
      transition,
      couplingRadius,
      pull,
      peelStart: detachGap - transition,
    });
  }

  const DEFAULT_NORMALIZED_PEEL_PARAMETERS =
    normalizePeelParameters(DEFAULT_PEEL_PARAMETERS);

  function resolvePeelParameters(parameters) {
    if (
      parameters &&
      Object.isFrozen(parameters) &&
      Number.isFinite(parameters.detachGap) &&
      Number.isFinite(parameters.transition) &&
      Number.isFinite(parameters.peelStart) &&
      Number.isFinite(parameters.couplingRadius) &&
      Number.isFinite(parameters.pull) &&
      parameters.detachGap >= PEEL_PARAMETER_LIMITS.detachGap.min &&
      parameters.detachGap <= PEEL_PARAMETER_LIMITS.detachGap.max &&
      parameters.transition >= PEEL_PARAMETER_LIMITS.transition.min &&
      parameters.transition <= PEEL_PARAMETER_LIMITS.transition.max &&
      parameters.couplingRadius >=
        PEEL_PARAMETER_LIMITS.couplingRadius.min &&
      parameters.couplingRadius <=
        PEEL_PARAMETER_LIMITS.couplingRadius.max &&
      parameters.pull >= PEEL_PARAMETER_LIMITS.pull.min &&
      parameters.pull <= PEEL_PARAMETER_LIMITS.pull.max &&
      Math.abs(
        parameters.peelStart -
          (parameters.detachGap - parameters.transition),
      ) < 1e-9
    ) {
      return parameters;
    }
    return parameters
      ? normalizePeelParameters(parameters)
      : DEFAULT_NORMALIZED_PEEL_PARAMETERS;
  }

  function lerp(a, b, progress) {
    return a + (b - a) * progress;
  }

  function smoothstep(edge0, edge1, value) {
    if (edge0 === edge1) return value < edge0 ? 0 : 1;
    const progress = clamp((value - edge0) / (edge1 - edge0), 0, 1);
    return progress * progress * (3 - 2 * progress);
  }

  function smootherstep(edge0, edge1, value) {
    if (edge0 === edge1) return value < edge0 ? 0 : 1;
    const progress = clamp((value - edge0) / (edge1 - edge0), 0, 1);
    return (
      progress *
      progress *
      progress *
      (progress * (progress * 6 - 15) + 10)
    );
  }

  function transitionSlope(keys, index) {
    if (index <= 0 || index >= keys.length - 1) return 0;
    const previous = keys[index - 1];
    const current = keys[index];
    const next = keys[index + 1];
    const left = (current.gap - previous.gap) / (current.t - previous.t);
    const right = (next.gap - current.gap) / (next.t - current.t);
    if (left === 0 || right === 0 || Math.sign(left) !== Math.sign(right)) {
      return 0;
    }
    return (next.gap - previous.gap) / (next.t - previous.t);
  }

  function sampleMeasuredTransition(
    kind,
    age,
    hiddenGap = LIQUID_GEOMETRY.hiddenGap,
    restGap = LIQUID_GEOMETRY.restGap,
  ) {
    const safeHiddenGap = clamp(
      finiteNumber(hiddenGap, LIQUID_GEOMETRY.hiddenGap),
      LIQUID_GEOMETRY.renderMinGap,
      LIQUID_GEOMETRY.renderMaxGap,
    );
    const safeRestGap = clamp(
      finiteNumber(restGap, LIQUID_GEOMETRY.restGap),
      LIQUID_GEOMETRY.renderMinGap,
      LIQUID_GEOMETRY.renderMaxGap,
    );
    const keys = LIQUID_TRANSITIONS[kind];
    if (!keys) {
      return {
        done: true,
        gap: safeRestGap,
        velocity: 0,
      };
    }

    const safeAge = Math.max(0, finiteNumber(age, 0));
    const last = keys[keys.length - 1];
    if (safeAge >= last.t) {
      return {
        done: true,
        gap: kind === "opening" ? safeRestGap : safeHiddenGap,
        velocity: 0,
      };
    }

    let index = 1;
    while (index < keys.length && safeAge > keys[index].t) index += 1;
    const previous = keys[index - 1];
    const next = keys[index];
    const duration = next.t - previous.t;
    const progress = clamp((safeAge - previous.t) / duration, 0, 1);
    const progress2 = progress * progress;
    const progress3 = progress2 * progress;
    const previousSlope = transitionSlope(keys, index - 1);
    const nextSlope = transitionSlope(keys, index);
    const h00 = 2 * progress3 - 3 * progress2 + 1;
    const h10 = progress3 - 2 * progress2 + progress;
    const h01 = -2 * progress3 + 3 * progress2;
    const h11 = progress3 - progress2;
    const rawGap =
      h00 * previous.gap +
      h10 * duration * previousSlope +
      h01 * next.gap +
      h11 * duration * nextSlope;
    const rawVelocity =
      ((6 * progress2 - 6 * progress) * previous.gap) / duration +
      (3 * progress2 - 4 * progress + 1) * previousSlope +
      ((-6 * progress2 + 6 * progress) * next.gap) / duration +
      (3 * progress2 - 2 * progress) * nextSlope;
    const rangeScale =
      (safeRestGap - safeHiddenGap) /
      (LIQUID_GEOMETRY.restGap - LIQUID_GEOMETRY.hiddenGap);

    return {
      done: false,
      gap:
        safeHiddenGap +
        (rawGap - LIQUID_GEOMETRY.hiddenGap) * rangeScale,
      velocity: rawVelocity * rangeScale,
    };
  }

  function f(value) {
    return Number(value.toFixed(3));
  }

  function revealProgress(gap) {
    return clamp(
      (gap - LIQUID_GEOMETRY.hiddenGap) /
        (LIQUID_GEOMETRY.restGap - LIQUID_GEOMETRY.hiddenGap),
      0,
      1,
    );
  }

  function baseOutputY(gap) {
    return (
      LIQUID_GEOMETRY.inputY -
      (LIQUID_GEOMETRY.outputHeight + LIQUID_GEOMETRY.restGap) *
        revealProgress(gap)
    );
  }

  function openingTension(velocity) {
    return clamp((finiteNumber(velocity) - 80) / 640, 0, 1);
  }

  function openingContentPull(gap, velocity) {
    if (velocity <= 0) return 0;
    const motion = smoothstep(80, 500, velocity);
    return -20 * Math.sin(Math.PI * revealProgress(gap)) * motion;
  }

  function resolveLiquidMode(
    previousMode,
    gap,
    velocity = 0,
    peelParameters,
  ) {
    const peel = resolvePeelParameters(peelParameters);
    const safeGap = clamp(
      finiteNumber(gap, LIQUID_GEOMETRY.hiddenGap),
      LIQUID_GEOMETRY.renderMinGap,
      LIQUID_GEOMETRY.renderMaxGap,
    );
    const mergeLead = clamp(-finiteNumber(velocity) * 0.006, 0, 2.1);

    if (previousMode === "detached") {
      return safeGap < LIQUID_GEOMETRY.mergeGap + mergeLead
        ? "merged"
        : "detached";
    }
    if (previousMode === "merged") {
      return safeGap > peel.detachGap ? "detached" : "merged";
    }
    return safeGap > peel.detachGap ? "detached" : "merged";
  }

  function roundedPanelPath({
    x,
    y,
    width,
    height,
    topRx,
    topRy = topRx,
    bottomRx,
    bottomRy = bottomRx,
  }) {
    const right = x + width;
    const bottom = y + height;
    const trX = clamp(topRx, 0, width / 2);
    const trY = clamp(topRy, 0, height / 2);
    const brX = clamp(bottomRx, 0, width / 2);
    const brY = clamp(bottomRy, 0, height / 2);

    return [
      `M ${f(x + trX)} ${f(y)}`,
      `H ${f(right - trX)}`,
      `C ${f(right - trX + KAPPA * trX)} ${f(y)} ${f(right)} ${f(y + trY - KAPPA * trY)} ${f(right)} ${f(y + trY)}`,
      `V ${f(bottom - brY)}`,
      `C ${f(right)} ${f(bottom - brY + KAPPA * brY)} ${f(right - brX + KAPPA * brX)} ${f(bottom)} ${f(right - brX)} ${f(bottom)}`,
      `H ${f(x + brX)}`,
      `C ${f(x + brX - KAPPA * brX)} ${f(bottom)} ${f(x)} ${f(bottom - brY + KAPPA * brY)} ${f(x)} ${f(bottom - brY)}`,
      `V ${f(y + trY)}`,
      `C ${f(x)} ${f(y + trY - KAPPA * trY)} ${f(x + trX - KAPPA * trX)} ${f(y)} ${f(x + trX)} ${f(y)}`,
      "Z",
    ].join(" ");
  }

  function tangentCircleBridgePath({
    outputX,
    outputY,
    outputWidth,
    outputHeight,
    outputRadius,
    inputX,
    inputY,
    inputWidth,
    inputHeight,
    inputRadius,
    couplingRadius,
  }) {
    const outputRight = outputX + outputWidth;
    const outputBottom = outputY + outputHeight;
    const inputRight = inputX + inputWidth;
    const inputBottom = inputY + inputHeight;
    const requestedRadius = Math.max(
      0.01,
      finiteNumber(
        couplingRadius,
        DEFAULT_PEEL_PARAMETERS.couplingRadius,
      ),
    );

    function couplingGeometry(topCenter, lowerCenter, side) {
      const dx = lowerCenter.x - topCenter.x;
      const dy = lowerCenter.y - topCenter.y;
      const distance = Math.max(0.0001, Math.hypot(dx, dy));
      const minimumRadius = Math.max(
        0.01,
        (distance - outputRadius - inputRadius) / 2 + 0.001,
      );
      const radius = Math.max(requestedRadius, minimumRadius);
      const topDistance = outputRadius + radius;
      const lowerDistance = inputRadius + radius;
      const along =
        (topDistance * topDistance -
          lowerDistance * lowerDistance +
          distance * distance) /
        (2 * distance);
      const perpendicular = Math.sqrt(
        Math.max(0, topDistance * topDistance - along * along),
      );
      const unitX = dx / distance;
      const unitY = dy / distance;
      const baseX = topCenter.x + along * unitX;
      const baseY = topCenter.y + along * unitY;
      const candidateA = {
        x: baseX - unitY * perpendicular,
        y: baseY + unitX * perpendicular,
      };
      const candidateB = {
        x: baseX + unitY * perpendicular,
        y: baseY - unitX * perpendicular,
      };
      const center =
        side === "right"
          ? candidateA.x > candidateB.x
            ? candidateA
            : candidateB
          : candidateA.x < candidateB.x
            ? candidateA
            : candidateB;
      const topRatio = outputRadius / topDistance;
      const lowerRatio = inputRadius / lowerDistance;

      return {
        center,
        radius,
        topCenter,
        lowerCenter,
        topTangent: {
          x: topCenter.x + (center.x - topCenter.x) * topRatio,
          y: topCenter.y + (center.y - topCenter.y) * topRatio,
        },
        lowerTangent: {
          x:
            lowerCenter.x +
            (center.x - lowerCenter.x) * lowerRatio,
          y:
            lowerCenter.y +
            (center.y - lowerCenter.y) * lowerRatio,
        },
        waistX:
          side === "right"
            ? center.x - radius
            : center.x + radius,
      };
    }

    const rightCoupling = couplingGeometry(
      {
        x: outputRight - outputRadius,
        y: outputBottom - outputRadius,
      },
      {
        x: inputRight - inputRadius,
        y: inputY + inputRadius,
      },
      "right",
    );
    const leftCoupling = couplingGeometry(
      {
        x: outputX + outputRadius,
        y: outputBottom - outputRadius,
      },
      {
        x: inputX + inputRadius,
        y: inputY + inputRadius,
      },
      "left",
    );
    const rt = rightCoupling.topTangent;
    const rb = rightCoupling.lowerTangent;
    const lb = leftCoupling.lowerTangent;
    const lt = leftCoupling.topTangent;

    const d = [
      `M ${f(outputX + outputRadius)} ${f(outputY)}`,
      `H ${f(outputRight - outputRadius)}`,
      `C ${f(outputRight - outputRadius + KAPPA * outputRadius)} ${f(outputY)} ${f(outputRight)} ${f(outputY + outputRadius - KAPPA * outputRadius)} ${f(outputRight)} ${f(outputY + outputRadius)}`,
      `V ${f(outputBottom - outputRadius)}`,
      `A ${f(outputRadius)} ${f(outputRadius)} 0 0 1 ${f(rt.x)} ${f(rt.y)}`,
      `A ${f(rightCoupling.radius)} ${f(rightCoupling.radius)} 0 0 0 ${f(rb.x)} ${f(rb.y)}`,
      `A ${f(inputRadius)} ${f(inputRadius)} 0 0 1 ${f(inputRight)} ${f(inputY + inputRadius)}`,
      `V ${f(inputBottom - inputRadius)}`,
      `C ${f(inputRight)} ${f(inputBottom - inputRadius + KAPPA * inputRadius)} ${f(inputRight - inputRadius + KAPPA * inputRadius)} ${f(inputBottom)} ${f(inputRight - inputRadius)} ${f(inputBottom)}`,
      `H ${f(inputX + inputRadius)}`,
      `C ${f(inputX + inputRadius - KAPPA * inputRadius)} ${f(inputBottom)} ${f(inputX)} ${f(inputBottom - inputRadius + KAPPA * inputRadius)} ${f(inputX)} ${f(inputBottom - inputRadius)}`,
      `V ${f(inputY + inputRadius)}`,
      `A ${f(inputRadius)} ${f(inputRadius)} 0 0 1 ${f(lb.x)} ${f(lb.y)}`,
      `A ${f(leftCoupling.radius)} ${f(leftCoupling.radius)} 0 0 0 ${f(lt.x)} ${f(lt.y)}`,
      `A ${f(outputRadius)} ${f(outputRadius)} 0 0 1 ${f(outputX)} ${f(outputBottom - outputRadius)}`,
      `V ${f(outputY + outputRadius)}`,
      `C ${f(outputX)} ${f(outputY + outputRadius - KAPPA * outputRadius)} ${f(outputX + outputRadius - KAPPA * outputRadius)} ${f(outputY)} ${f(outputX + outputRadius)} ${f(outputY)}`,
      "Z",
    ].join(" ");

    return {
      d,
      couplingRadius:
        (leftCoupling.radius + rightCoupling.radius) / 2,
      leftCoupling,
      rightCoupling,
      leftWaistX: leftCoupling.waistX,
      rightWaistX: rightCoupling.waistX,
      seamY:
        (leftCoupling.center.y + rightCoupling.center.y) / 2,
      waistWidth:
        rightCoupling.waistX - leftCoupling.waistX,
    };
  }

  function sampleClosePose(age) {
    if (!(age >= 0)) {
      return {
        compression: 0,
        expand: 0,
        content: 0,
        surface: 0,
        bottom: 0,
        sendOffset: 0,
        sendScale: 1,
      };
    }

    const safeAge = finiteNumber(age, 0);
    for (let index = 1; index < CLOSE_KEYS.length; index += 1) {
      const next = CLOSE_KEYS[index];
      if (safeAge > next.t) continue;
      const previous = CLOSE_KEYS[index - 1];
      const progress = (safeAge - previous.t) / (next.t - previous.t);
      return {
        compression: lerp(previous.compression, next.compression, progress),
        expand: lerp(previous.expand, next.expand, progress),
        content: lerp(previous.content, next.content, progress),
        surface: lerp(previous.surface, next.surface, progress),
        bottom: lerp(previous.bottom, next.bottom, progress),
        sendOffset: lerp(
          previous.sendOffset,
          next.sendOffset,
          progress,
        ),
        sendScale: lerp(
          previous.sendScale,
          next.sendScale,
          progress,
        ),
      };
    }

    return {
      compression: 0,
      expand: 0,
      content: 0,
      surface: 0,
      bottom: 0,
      sendOffset: 0,
      sendScale: 1,
    };
  }

  function sampleCloseContentScale(age) {
    if (!(age >= 0)) return 1;

    const safeAge = finiteNumber(age, 0);
    for (
      let index = 1;
      index < CLOSE_CONTENT_SCALE_KEYS.length;
      index += 1
    ) {
      const next = CLOSE_CONTENT_SCALE_KEYS[index];
      if (safeAge > next.t) continue;
      const previous = CLOSE_CONTENT_SCALE_KEYS[index - 1];
      const progress =
        (safeAge - previous.t) / (next.t - previous.t);
      return lerp(previous.value, next.value, progress);
    }

    return 1;
  }

  // Manual gap scrubbing has no elapsed transition time. Invert the monotonic
  // closing descent (10 -> -60) so shell compression, melt geometry, content
  // strain, and the send control all reuse the same measured closing pose.
  function closeAgeForGap(gap) {
    const safeGap = clamp(
      finiteNumber(gap, LIQUID_GEOMETRY.restGap),
      CLOSING_DESCENT_END.gap,
      CLOSING_START.gap,
    );
    if (safeGap >= CLOSING_START.gap) return CLOSING_START.t;
    if (safeGap <= CLOSING_DESCENT_END.gap) {
      return CLOSING_DESCENT_END.t;
    }

    let lowerAge = CLOSING_START.t;
    let upperAge = CLOSING_DESCENT_END.t;
    for (let iteration = 0; iteration < 24; iteration += 1) {
      const middleAge = (lowerAge + upperAge) / 2;
      const middleGap = sampleMeasuredTransition(
        "closing",
        middleAge,
      ).gap;
      if (middleGap > safeGap) {
        lowerAge = middleAge;
      } else {
        upperAge = middleAge;
      }
    }
    return (lowerAge + upperAge) / 2;
  }

  function resolveScrubMode(previousMode, gap, peelParameters) {
    const scrubAge = closeAgeForGap(gap);
    const scrubVelocity = sampleMeasuredTransition(
      "closing",
      scrubAge,
    ).velocity;
    return resolveLiquidMode(
      previousMode,
      gap,
      scrubVelocity,
      peelParameters,
    );
  }

  function sampleCloseSendPose(age) {
    if (!(age >= 0)) return { offset: 0, scale: 1 };

    const safeAge = finiteNumber(age, 0);
    for (let index = 1; index < CLOSE_SEND_KEYS.length; index += 1) {
      const next = CLOSE_SEND_KEYS[index];
      if (safeAge > next.t) continue;
      const previous = CLOSE_SEND_KEYS[index - 1];
      const progress = (safeAge - previous.t) / (next.t - previous.t);
      return {
        offset: lerp(previous.offset, next.offset, progress),
        scale: lerp(previous.scale, next.scale, progress),
      };
    }

    return { offset: 0, scale: 1 };
  }

  function samplePeelCorrection(age) {
    const empty = {
      inputTop: 0,
      inputBottom: 0,
      outputTop: 0,
      outputBottom: 0,
      content: 0,
    };
    if (!(age >= 0)) return empty;

    const safeAge = finiteNumber(age, 0);
    for (
      let index = 1;
      index < PEEL_CORRECTION_KEYS.length;
      index += 1
    ) {
      const next = PEEL_CORRECTION_KEYS[index];
      if (safeAge > next.t) continue;
      const previous = PEEL_CORRECTION_KEYS[index - 1];
      const progress = (safeAge - previous.t) / (next.t - previous.t);
      return {
        inputTop: lerp(previous.inputTop, next.inputTop, progress),
        inputBottom: lerp(
          previous.inputBottom,
          next.inputBottom,
          progress,
        ),
        outputTop: lerp(previous.outputTop, next.outputTop, progress),
        outputBottom: lerp(
          previous.outputBottom,
          next.outputBottom,
          progress,
        ),
        content: lerp(previous.content, next.content, progress),
      };
    }

    return empty;
  }

  function effectiveCloseExpand(expand) {
    const safeExpand = Math.max(0, finiteNumber(expand, 0));
    return Math.max(
      0,
      safeExpand - smoothstep(1.5, 2.5, safeExpand),
    );
  }

  function containedPath(gap, velocity, closePose) {
    const {
      x,
      width,
      inputY,
      inputHeight,
      outputRadius,
      inputRadius,
    } = LIQUID_GEOMETRY;
    const reveal = revealProgress(gap);
    const lift = velocity > 0 ? 8 * openingTension(velocity) : 0;
    const closeExpand = effectiveCloseExpand(closePose.expand);
    const panelX = x - closeExpand;
    const panelWidth = width + closeExpand * 2;
    const top = baseOutputY(gap) - lift + closePose.compression;
    const bottom = inputY + inputHeight + closePose.bottom;
    const topRadius = inputRadius + (outputRadius - inputRadius) * reveal;
    const surfaceY = inputY + closePose.surface;
    const contentPull = openingContentPull(gap, velocity);
    const contentY = inputY + contentPull + closePose.content;
    const conceptualOutputBottom = top + LIQUID_GEOMETRY.outputHeight;
    const overlapTop = Math.min(surfaceY, conceptualOutputBottom);
    const overlapBottom = Math.max(surfaceY, conceptualOutputBottom);
    const overlapInset = Math.max(topRadius, inputRadius);
    const debugContactBandD =
      conceptualOutputBottom > surfaceY
        ? [
            `M ${f(panelX + overlapInset)} ${f(overlapTop)}`,
            `H ${f(panelX + panelWidth - overlapInset)}`,
            `V ${f(overlapBottom)}`,
            `H ${f(panelX + overlapInset)}`,
            "Z",
          ].join(" ")
        : "";

    return {
      d: roundedPanelPath({
        x: panelX,
        y: top,
        width: panelWidth,
        height: bottom - top,
        topRx: topRadius,
        bottomRx: inputRadius,
      }),
      inputBottom: bottom,
      inputContentY: contentY,
      inputHeight: bottom - surfaceY,
      inputWidth: panelWidth,
      inputX: panelX,
      inputY: surfaceY,
      lift,
      notch: 0,
      outputHeight: LIQUID_GEOMETRY.outputHeight,
      outputTopRadius: topRadius,
      outputWidth: panelWidth,
      outputX: panelX,
      outputY: top,
      phase: "contained",
      sendOffsetY: 0.3 * contentPull + closePose.sendOffset,
      sendScaleY: Math.max(
        1 + 0.009 * Math.abs(contentPull),
        closePose.sendScale,
      ),
      strain: Math.max(lift, closePose.compression),
      tension: openingTension(velocity),
      debugContactBandD,
      debugContactZoneD: "",
      debugWaistD: "",
      seamY: null,
      waistWidth: panelWidth,
    };
  }

  function mergedPath(
    gap,
    velocity,
    closePose,
    closeAge,
    openAge,
    openStrength,
    manualScrub,
    peelParameters,
  ) {
    const peel = resolvePeelParameters(peelParameters);
    const {
      x,
      width,
      outputHeight,
      inputY: baseInputY,
      inputHeight,
      outputRadius,
      inputRadius,
    } = LIQUID_GEOMETRY;
    const phase = smoothstep(-18, 6, gap);
    const motionTension =
      velocity > 0 ? openingTension(velocity) * phase : 0;
    const safeOpenStrength = clamp(
      finiteNumber(openStrength, 0),
      0,
      1,
    );
    // The final fused span is the envelope of three tangent circles per side:
    // output corner, coupling circle, and input corner. There is no central
    // ligament. Gap changes the circle centres continuously; detach only
    // changes topology after the last valid coupled envelope.
    const measuredSeamRelease =
      closeAge < 0
        ? smoothstep(
            LIQUID_MOTION.openPeelStart,
            LIQUID_MOTION.openTearTime,
            finiteNumber(openAge, -1),
          )
        : 0;
    const springSeamRelease =
      closeAge < 0 && openAge < 0 && velocity > 0
        ? smootherstep(
            peel.detachGap - 0.6,
            peel.detachGap,
            gap,
          )
        : 0;
    const seamRelease = Math.max(
      measuredSeamRelease,
      springSeamRelease,
    );
    const sourceTension = motionTension * (1 - seamRelease);
    const peelTarget = sampleDynamicPeelPose(
      0,
      safeOpenStrength,
      peel,
    );
    const baseTopRadius =
      inputRadius +
      (outputRadius - inputRadius) * revealProgress(gap);
    const scrubPeelProgress = manualScrub
      ? smootherstep(
          peel.peelStart,
          peel.detachGap,
          gap,
        )
      : 0;
    const lockDistance = clamp(
      peel.transition * 0.32,
      1,
      2,
    );
    const manualShapeLock = manualScrub
      ? smootherstep(
          peel.peelStart - lockDistance,
          peel.peelStart,
          gap,
        )
      : 0;
    const measuredShapeLock =
      closeAge < 0 && openAge >= 0
        ? smootherstep(
            LIQUID_MOTION.openContactStart - 0.018,
            LIQUID_MOTION.openContactStart,
            openAge,
          )
        : 0;
    const springShapeLock =
      closeAge < 0 && openAge < 0 && velocity > 0
        ? smootherstep(
            peel.peelStart - lockDistance,
            peel.peelStart,
            gap,
          )
        : 0;
    const shapeLock = Math.max(
      manualShapeLock,
      measuredShapeLock,
      springShapeLock,
    );
    const scrubShellRelease = scrubPeelProgress;
    const scrubFaceApproach =
      manualScrub
        ? peel.pull * scrubPeelProgress
        : 0;
    const shapeTension = Math.max(
      sourceTension,
      0.8 * scrubPeelProgress,
    );
    const closeExpand =
      effectiveCloseExpand(closePose.expand) *
      (1 - scrubShellRelease);
    const absorb =
      closeAge >= 0 ? smoothstep(0.025, 0.038, closeAge) : 0;
    const topExpand = closeExpand * absorb;
    const peelPanelX = x + peelTarget.inset;
    const peelPanelRight = x + width - peelTarget.inset;
    const rawTopX = lerp(
      x + sourceTension - topExpand,
      peelPanelX,
      seamRelease,
    );
    const rawTopRight = lerp(
      x + width - sourceTension + topExpand,
      peelPanelRight,
      seamRelease,
    );
    const topX = lerp(rawTopX, x, shapeLock);
    const topRight = lerp(
      rawTopRight,
      x + width,
      shapeLock,
    );
    const bottomX = lerp(
      x + sourceTension - closeExpand,
      peelPanelX,
      seamRelease,
    );
    const bottomRight = lerp(
      x + width - sourceTension + closeExpand,
      peelPanelRight,
      seamRelease,
    );
    const baseY = baseOutputY(gap);
    const sourceOutputY =
      baseY -
      10 * sourceTension +
      closePose.compression * (1 - scrubShellRelease);
    const targetOutputY =
      baseY -
      peelTarget.strain +
      peelTarget.correction.outputTop;
    const outputY = lerp(
      sourceOutputY,
      targetOutputY,
      seamRelease,
    );
    const targetOutputHeight =
      outputHeight +
      peelTarget.outputHeightStretch +
      peelTarget.faceApproach +
      peelTarget.correction.outputBottom -
      peelTarget.correction.outputTop;
    const rawOutputHeight =
      lerp(
        outputHeight,
        targetOutputHeight,
        seamRelease,
      ) + scrubFaceApproach;
    const currentOutputHeight = lerp(
      rawOutputHeight,
      outputHeight,
      shapeLock,
    );
    const sourceInputY =
      baseInputY + closePose.surface * (1 - scrubShellRelease);
    const targetInputY =
      baseInputY +
      peelTarget.inputTopPush -
      peelTarget.faceApproach +
      peelTarget.correction.inputTop;
    const inputY = lerp(
      sourceInputY,
      targetInputY,
      seamRelease,
    ) - scrubFaceApproach;
    const sourceInputBottom =
      baseInputY +
      inputHeight +
      closePose.bottom * (1 - scrubShellRelease) +
      6 * sourceTension;
    const targetInputBottom =
      baseInputY +
      peelTarget.inputTopPush +
      inputHeight +
      peelTarget.inputHeightStretch +
      peelTarget.correction.inputBottom;
    const inputBottom = lerp(
      sourceInputBottom,
      targetInputBottom,
      seamRelease,
    );
    const topRadius = lerp(
      baseTopRadius,
      outputRadius,
      shapeLock,
    );
    const contentPull = openingContentPull(gap, velocity);
    const sourceInputContentY =
      sourceInputY +
      contentPull -
      6 * sourceTension +
      closePose.content;
    const targetInputContentY =
      baseInputY +
      peelTarget.inputTopPush +
      peelTarget.strain * 0.18 +
      peelTarget.correction.content;
    const inputContentY = lerp(
      sourceInputContentY,
      targetInputContentY,
      seamRelease,
    );
    const sendOffsetY = lerp(
      -6 * sourceTension + closePose.sendOffset,
      peelTarget.sendOffsetY,
      seamRelease,
    );
    const sendScaleY = lerp(
      Math.max(
        1 + 0.15 * sourceTension,
        closePose.sendScale,
      ),
      Math.max(peelTarget.sendScaleY, closePose.sendScale),
      seamRelease,
    );
    const strain = Math.max(
      lerp(
        Math.max(10 * sourceTension, closePose.compression),
        peelTarget.strain,
        seamRelease,
      ),
      closePose.compression,
    );

    {
      // The construction circle is a geometric primitive, not an easing
      // proxy. A fixed radius gives an exact tangent solution at every gap.
      const currentCouplingRadius = peel.couplingRadius;
      const bridge = tangentCircleBridgePath({
        outputX: topX,
        outputY,
        outputWidth: topRight - topX,
        outputHeight: currentOutputHeight,
        outputRadius: topRadius,
        inputX: bottomX,
        inputY,
        inputWidth: bottomRight - bottomX,
        inputHeight: inputBottom - inputY,
        inputRadius,
        couplingRadius: currentCouplingRadius,
      });
      const circlePath = (center, radius) => [
        `M ${f(center.x + radius)} ${f(center.y)}`,
        `A ${f(radius)} ${f(radius)} 0 1 0 ${f(center.x - radius)} ${f(center.y)}`,
        `A ${f(radius)} ${f(radius)} 0 1 0 ${f(center.x + radius)} ${f(center.y)}`,
        "Z",
      ].join(" ");
      const debugContactZoneD = [
        circlePath(
          bridge.leftCoupling.center,
          bridge.leftCoupling.radius,
        ),
        circlePath(
          bridge.rightCoupling.center,
          bridge.rightCoupling.radius,
        ),
      ].join(" ");
      const debugContactBandD =
        `M ${f(bridge.leftWaistX)} ${f(bridge.seamY)} ` +
        `H ${f(bridge.rightWaistX)}`;
      const debugOutputD = [
        circlePath(bridge.leftCoupling.topCenter, topRadius),
        circlePath(bridge.rightCoupling.topCenter, topRadius),
      ].join(" ");
      const debugInputD = [
        circlePath(bridge.leftCoupling.lowerCenter, inputRadius),
        circlePath(bridge.rightCoupling.lowerCenter, inputRadius),
      ].join(" ");

      return {
        d: bridge.d,
        edgeD: bridge.d,
        debugInputD,
        debugOutputD,
        inputBottom,
        inputContentY,
        inputFaceRx: inputRadius,
        inputFaceRy: inputRadius,
        inputHeight: inputBottom - inputY,
        inputWidth: bottomRight - bottomX,
        inputX: bottomX,
        inputY,
        notch:
          (topRight - topX - bridge.waistWidth) / 2,
        outputHeight: currentOutputHeight,
        outputFaceRx: topRadius,
        outputFaceRy: topRadius,
        outputTopRadius: topRadius,
        outputWidth: topRight - topX,
        outputX: topX,
        outputY,
        phase: "neck",
        sendOffsetY,
        sendScaleY,
        seamY: bridge.seamY,
        strain,
        tension: shapeTension,
        debugContactBandD,
        debugContactZoneD,
        debugWaistD:
          `M ${f(bridge.leftWaistX)} ${f(bridge.seamY)} ` +
          `H ${f(bridge.rightWaistX)}`,
        waistWidth: bridge.waistWidth,
      };
    }

  }

  function peelStrain(age, strength) {
    const safeAge = clamp(finiteNumber(age, -1), -1, 1);
    const safeStrength = clamp(finiteNumber(strength, 0), 0, 1);
    if (safeAge <= 0 || safeStrength <= 0) return 0;
    const peakAge = LIQUID_MOTION.peelEaseDuration;
    const rise = smoothstep(0, peakAge, safeAge);
    const decay =
      safeAge <= peakAge
        ? 1
        : Math.exp(-(safeAge - peakAge) / 0.065);
    return 26 * safeStrength * rise * decay;
  }

  function easedPeelAge(elapsed) {
    const safeElapsed = Math.max(0, finiteNumber(elapsed, 0));
    const duration = LIQUID_MOTION.peelEaseDuration;
    if (safeElapsed >= duration) return safeElapsed;
    const progress = safeElapsed / duration;
    // Position and first derivative meet the identity map at `duration`,
    // while the first detached frame starts with zero peel velocity.
    return duration * progress * progress * (2 - progress);
  }

  function sampleDynamicPeelPose(
    tearAge,
    tearStrength,
    peelParameters,
  ) {
    const peel = resolvePeelParameters(peelParameters);
    const elapsed = clamp(finiteNumber(tearAge, -1), -1, 1);
    const strength = clamp(finiteNumber(tearStrength, 0), 0, 1);
    const dynamic = elapsed >= 0 && strength > 0;
    const age = dynamic ? easedPeelAge(elapsed) : 0;
    const strain = dynamic ? peelStrain(age, strength) : 0;
    const correction = samplePeelCorrection(dynamic ? age : -1);
    const faceApproach = dynamic
      ? peel.pull *
        strength *
        (1 - smoothstep(0, LIQUID_MOTION.peelEaseDuration, age))
      : 0;
    const inset =
      strain * 0.16 +
      (dynamic ? 0.5 * smoothstep(2, 5, strain) : 0);
    const outputHeightStretch =
      strain * (0.08 + 0.52 * Math.exp(-age / 0.018));
    const inputTopPush =
      strain * 0.35 * (1 - Math.exp(-age / 0.012));
    const inputHeightStretch =
      strain * (0.3 + 0.55 * Math.exp(-age / 0.018));

    return {
      age,
      correction,
      dynamic,
      faceApproach,
      inset,
      inputHeightStretch,
      inputTopPush,
      outputHeightStretch,
      sendOffsetY: dynamic
        ? -0.3 * strain * Math.exp(-age / 0.03)
        : 0,
      sendScaleY: dynamic
        ? 1 + 0.1 * (strain / 26)
        : 1,
      strain,
    };
  }

  function detachedPath(
    gap,
    tearAge,
    tearStrength,
    manualScrub,
    peelParameters,
  ) {
    const peel = resolvePeelParameters(peelParameters);
    const {
      x,
      width,
      outputHeight,
      inputY,
      inputHeight,
      outputRadius,
      inputRadius,
    } = LIQUID_GEOMETRY;
    const peelPose = sampleDynamicPeelPose(
      tearAge,
      tearStrength,
      peel,
    );
    const {
      correction,
      faceApproach,
      inset,
      inputHeightStretch,
      inputTopPush,
      sendOffsetY,
      sendScaleY,
      strain,
    } = peelPose;
    const scrubResidual = manualScrub
      ? gap <= peel.detachGap
        ? smootherstep(
            peel.peelStart,
            peel.detachGap,
            gap,
          )
        : 1 -
          smootherstep(
            peel.detachGap,
            LIQUID_GEOMETRY.restGap,
            gap,
          )
      : 0;
    // Downward hysteresis keeps two subpaths alive below the tear threshold.
    // A two-sided envelope releases their attraction before the merge point,
    // preventing detached panels from crossing through one another.
    const scrubApproachResidual =
      manualScrub && gap <= peel.detachGap
        ? smoothstep(
            peel.peelStart,
            peel.detachGap,
            gap,
          )
        : scrubResidual;
    const scrubFaceApproach =
      peel.pull * scrubApproachResidual;
    const totalFaceApproach =
      faceApproach + scrubFaceApproach;
    const inputPanelX = x + inset;
    const inputPanelWidth = width - inset * 2;
    const rawOutputY = baseOutputY(gap) - strain;
    const outputY = rawOutputY + correction.outputTop;
    const outputBottom = outputY + outputHeight;
    const currentOutputHeight = outputHeight;
    const rawInputY =
      inputY + inputTopPush - totalFaceApproach;
    const rawInputBottom =
      inputY + inputTopPush + inputHeight + inputHeightStretch;
    const currentInputY = rawInputY + correction.inputTop;
    const inputBottom = rawInputBottom + correction.inputBottom;
    const currentInputHeight = inputBottom - currentInputY;
    const inputContentY =
      inputY +
      inputTopPush +
      strain * 0.18 +
      correction.content;
    // Detachment keeps the same standard corner radii used by the two blue
    // construction circles; only the coupled envelope changes topology.
    const outputFaceRx = outputRadius;
    const inputFaceRx = inputRadius;
    const outputFaceRy = outputRadius;
    const inputFaceRy = inputRadius;

    const outputD = roundedPanelPath({
      x,
      y: outputY,
      width,
      height: currentOutputHeight,
      topRx: outputRadius,
      bottomRx: outputFaceRx,
      bottomRy: outputFaceRy,
    });
    const inputD = roundedPanelPath({
      x: inputPanelX,
      y: currentInputY,
      width: inputPanelWidth,
      height: currentInputHeight,
      topRx: inputFaceRx,
      topRy: inputFaceRy,
      bottomRx: inputRadius,
    });

    return {
      d: [outputD, inputD].join(" "),
      debugInputD: inputD,
      debugOutputD: outputD,
      faceTension: 0.8 * scrubResidual,
      inputFaceRx,
      inputFaceRy,
      inputBottom,
      inputContentY,
      inputHeight: currentInputHeight,
      inputWidth: inputPanelWidth,
      inputX: inputPanelX,
      inputY: currentInputY,
      outputHeight: currentOutputHeight,
      outputFaceRx,
      outputFaceRy,
      outputTopRadius: outputRadius,
      outputWidth: width,
      outputX: x,
      outputY,
      phase: "detached",
      sendOffsetY,
      sendScaleY,
      strain,
      debugContactBandD: "",
      debugContactZoneD: "",
      debugWaistD: "",
      seamY: null,
      waistWidth: 0,
    };
  }

  function createLiquidFrame(gap, velocity = 0, options = {}) {
    const peel = resolvePeelParameters(options.peelParameters);
    const safeGap = clamp(
      finiteNumber(gap, LIQUID_GEOMETRY.hiddenGap),
      LIQUID_GEOMETRY.renderMinGap,
      LIQUID_GEOMETRY.renderMaxGap,
    );
    const safeVelocity = finiteNumber(velocity, 0);
    const mode =
      options.mode === "merged" || options.mode === "detached"
        ? options.mode
        : resolveLiquidMode(
            undefined,
            safeGap,
            safeVelocity,
            peel,
          );
    const tearAge = finiteNumber(options.tearAge, -1);
    const tearStrength = clamp(
      finiteNumber(options.tearStrength, 0),
      0,
      1,
    );
    const closeAge = finiteNumber(options.closeAge, -1);
    const openAge = finiteNumber(options.openAge, -1);
    const openStrength = clamp(
      finiteNumber(options.openStrength, 0),
      0,
      1,
    );
    const closingScrub = options.scrub === true && closeAge < 0;
    const effectiveCloseAge = closingScrub
      ? closeAgeForGap(safeGap)
      : closeAge;
    const closePose = sampleClosePose(effectiveCloseAge);
    const closeSend = sampleCloseSendPose(effectiveCloseAge);
    const closingContained =
      effectiveCloseAge >= 0 &&
      (safeGap <= -8 || effectiveCloseAge >= 0.038);
    const merged =
      mode === "merged"
        ? safeGap <= -18 || closingContained
          ? containedPath(safeGap, safeVelocity, closePose)
          : mergedPath(
              safeGap,
              safeVelocity,
              closePose,
              effectiveCloseAge,
              openAge,
              openStrength,
              closingScrub,
              peel,
            )
        : null;
    const detached =
      mode === "detached"
        ? detachedPath(
            safeGap,
            tearAge,
            tearStrength,
            closingScrub,
            peel,
          )
        : null;
    const frame = merged || detached;
    const outputExitPhase =
      effectiveCloseAge >= 0
        ? smoothstep(0.021, 0.045, effectiveCloseAge)
        : 0;
    const outputSmearPhase =
      effectiveCloseAge >= 0
        ? smoothstep(0.008, 0.027, effectiveCloseAge)
        : 0;
    const outputBlur =
      effectiveCloseAge >= 0
        ? 2.2 * smoothstep(0.008, 0.023333, effectiveCloseAge) +
          1.8 * smoothstep(0.023333, 0.038, effectiveCloseAge) +
          1.75 * smoothstep(0.038, 0.048333, effectiveCloseAge) +
          1.25 * smoothstep(0.048333, 0.061667, effectiveCloseAge)
        : 0;
    const closingFade = 1 - 0.82 * outputExitPhase;
    const inputBottom =
      frame.inputBottom ?? frame.inputY + frame.inputHeight;
    const inputContentY = frame.inputContentY ?? frame.inputY;
    const scrubVisualRelease = closingScrub
      ? smootherstep(
          peel.peelStart,
          peel.detachGap,
          safeGap,
        )
      : 0;
    const inputVisualY =
      effectiveCloseAge >= 0 && mode === "merged"
        ? closingScrub
          ? lerp(
              frame.outputY,
              frame.inputY,
              scrubVisualRelease,
            )
          : frame.outputY
        : frame.inputY;
    const inputContentScaleY =
      sampleCloseContentScale(effectiveCloseAge);
    const sendScaleY =
      effectiveCloseAge >= 0
        ? closeSend.scale
        : frame.sendScaleY ?? 1;
    const sendHeight = LIQUID_GEOMETRY.sendSize * sendScaleY;
    const sendRadiusY = Math.min(
      sendHeight / 2,
      LIQUID_GEOMETRY.sendSize / 2 / inputContentScaleY,
    );
    const outputHeight =
      frame.outputHeight ?? LIQUID_GEOMETRY.outputHeight;
    const outputFaceRx =
      frame.outputFaceRx ?? LIQUID_GEOMETRY.outputRadius;
    const outputFaceRy =
      frame.outputFaceRy ?? outputFaceRx;
    const inputFaceRx =
      frame.inputFaceRx ?? LIQUID_GEOMETRY.inputRadius;
    const inputFaceRy =
      frame.inputFaceRy ?? inputFaceRx;
    const outputX = frame.outputX ?? LIQUID_GEOMETRY.x;
    const outputWidth = frame.outputWidth ?? LIQUID_GEOMETRY.width;
    const inputX = frame.inputX ?? LIQUID_GEOMETRY.x;
    const inputWidth = frame.inputWidth ?? LIQUID_GEOMETRY.width;
    const conceptualGap =
      frame.inputY - (frame.outputY + outputHeight);
    const phase =
      frame.phase ?? (mode === "detached" ? "detached" : "neck");
    const debugEnabled = options.debug === true;
    const contactKind =
      mode === "detached"
        ? "none"
        : Math.abs(conceptualGap) < 0.001
          ? "touch"
          : conceptualGap > 0
            ? "bridge"
            : "overlap";
    const debug = debugEnabled
      ? {
          topology: mode,
          phase,
          actualD: frame.d,
          outputD:
            frame.debugOutputD ??
            roundedPanelPath({
              x: outputX,
              y: frame.outputY,
              width: outputWidth,
              height: outputHeight,
              topRx:
                frame.outputTopRadius ??
                LIQUID_GEOMETRY.outputRadius,
              bottomRx: outputFaceRx,
              bottomRy: outputFaceRy,
            }),
          inputD:
            frame.debugInputD ??
            roundedPanelPath({
              x: inputX,
              y: frame.inputY,
              width: inputWidth,
              height: frame.inputHeight,
              topRx: inputFaceRx,
              topRy: inputFaceRy,
              bottomRx: LIQUID_GEOMETRY.inputRadius,
            }),
          contactZoneD: frame.debugContactZoneD ?? "",
          contactBandD: frame.debugContactBandD ?? "",
          waistD: frame.debugWaistD ?? "",
          conceptualGap,
          contactKind,
          overlap: Math.max(0, -conceptualGap),
          separation: Math.max(0, conceptualGap),
          seamY: frame.seamY,
          waistWidth: frame.waistWidth ?? 0,
        }
      : null;

    return {
      d: frame.d,
      edgeD: frame.edgeD ?? frame.d,
      debug,
      mode,
      phase,
      gap: safeGap,
      peelParameters: peel,
      faceGap: conceptualGap,
      inputBottom,
      inputContentHeight: Math.max(1, inputBottom - inputContentY),
      inputContentScaleY,
      inputContentY,
      inputFaceRx,
      inputFaceRy,
      inputHeight: frame.inputHeight,
      inputY: frame.inputY,
      inputVisualHeight: Math.max(1, inputBottom - inputVisualY),
      inputVisualY,
      notch: frame.notch ?? 0,
      outputHeight,
      outputFaceRx,
      outputFaceRy,
      outputOpacity:
        smoothstep(-18, 1, safeGap) * closingFade,
      outputBlur,
      outputScaleY: 1 - 0.25 * outputExitPhase,
      outputSmear:
        outputSmearPhase * smoothstep(-18, 1, safeGap),
      outputY: frame.outputY,
      sendArrowScaleY: 1 / inputContentScaleY,
      sendHeight,
      sendOffsetY:
        effectiveCloseAge >= 0
          ? closeSend.offset
          : frame.sendOffsetY ?? 0,
      sendRadiusY,
      sendScaleY,
      seamY: frame.seamY,
      strain: frame.strain ?? 0,
      stretch: Math.max(
        frame.tension ?? 0,
        frame.faceTension ?? 0,
        (frame.strain ?? 0) / 26,
      ),
      waistWidth: frame.waistWidth ?? 0,
    };
  }

  global.LiquidPath = Object.freeze({
    DEFAULT_PEEL_PARAMETERS,
    PEEL_PARAMETER_LIMITS,
    LIQUID_GEOMETRY,
    LIQUID_MOTION,
    LIQUID_TRANSITIONS,
    clamp,
    closeAgeForGap,
    createLiquidFrame,
    easedPeelAge,
    finiteNumber,
    normalizePeelParameters,
    openingContentPull,
    openingTension,
    resolveLiquidMode,
    resolveScrubMode,
    sampleClosePose,
    sampleMeasuredTransition,
    samplePeelCorrection,
    smoothstep,
    smootherstep,
  });
})(globalThis);

(function installLiquidConnector(global) {
  "use strict";

  const Path = global.LiquidPath;
  if (!Path) {
    throw new Error("liquid-path.js must load before liquid-connector.js");
  }

  const {
    DEFAULT_PEEL_PARAMETERS,
    LIQUID_GEOMETRY,
    LIQUID_MOTION,
    clamp,
    createLiquidFrame,
    finiteNumber,
    normalizePeelParameters,
    openingTension,
    resolveLiquidMode,
    resolveScrubMode,
    sampleMeasuredTransition,
  } = Path;

  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        --liquid-surface: #fdfdfd;
        --liquid-ink: #191919;
        --liquid-muted: #686868;
        --liquid-blue: #1e55c7;
        display: block;
        width: 520px;
        max-width: 100%;
        aspect-ratio: 520 / 300;
        contain: layout style;
        color: var(--liquid-ink);
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
        font-synthesis: none;
        -webkit-font-smoothing: antialiased;
        text-rendering: geometricPrecision;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      svg.stage {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      .surface-fill,
      .outline-edge,
      .surface,
      .debug-layer,
      .debug-layer path {
        pointer-events: none;
        vector-effect: non-scaling-stroke;
      }

      .surface-fill {
        fill: var(--liquid-surface);
        stroke: none;
      }

      .outline-edge {
        fill: none;
        stroke: #dedede;
        stroke-width: 1.5;
      }

      .surface {
        fill: none;
        stroke: #e2e2e2;
        stroke-width: 0.65;
      }

      :host(:focus-within) .surface {
        stroke: color-mix(in srgb, var(--liquid-blue) 42%, #e2e2e2);
        stroke-width: 1.1;
      }

      .content {
        width: 100%;
        height: 100%;
        color: var(--liquid-ink);
      }

      .output-content {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        padding: 0 12px 0 24px;
        transform-origin: 50% 100%;
      }

      .output-object {
        --output-blur: 0px;
        filter: blur(var(--output-blur));
      }

      .output-smear {
        pointer-events: none;
        opacity: 0;
      }

      :host([data-animating]) .output-content {
        will-change: opacity, transform;
      }

      :host([data-animating]) .input-content {
        will-change: transform;
      }

      .identity {
        display: flex;
        min-width: 0;
        align-items: center;
        gap: 13px;
        margin-right: auto;
        transform: translateY(-2px);
      }

      .notion-mark {
        display: block;
        width: 31px;
        height: 33px;
        flex: 0 0 31px;
        color: #111111;
      }

      .provider-copy {
        display: block;
        min-width: 0;
        line-height: 1;
      }

      .eyebrow {
        display: block;
        overflow: hidden;
        color: var(--liquid-muted);
        font-size: 11px;
        font-weight: 500;
        line-height: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .provider-name {
        display: block;
        margin-top: 1px;
        font-size: 17px;
        font-weight: 600;
        letter-spacing: -0.015em;
        line-height: 18px;
      }

      button,
      textarea {
        font: inherit;
      }

      button {
        position: relative;
        border: 0;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      button::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: max(100%, 44px);
        height: max(100%, 44px);
        content: "";
        transform: translate(-50%, -50%);
      }

      button:focus-visible {
        outline: 2px solid #2b70e8;
        outline-offset: 2px;
      }

      button:disabled {
        cursor: default;
      }

      .actions {
        display: flex;
        flex: 0 0 auto;
        align-items: center;
        gap: 21px;
        transform: translateY(-1px);
      }

      .skip {
        width: 32px;
        min-height: 32px;
        padding: 0;
        background: transparent;
        color: #525252;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
      }

      .connect {
        width: 97px;
        height: 35px;
        padding: 0;
        border: 1px solid #ccd9f2;
        border-radius: 999px;
        background: #fdfdfd;
        box-shadow:
          0 1px 2px rgba(31, 73, 150, 0.06),
          inset 0 0 0 0.5px rgba(255, 255, 255, 0.8);
        color: var(--liquid-blue);
        font-size: 15px;
        font-weight: 600;
        line-height: 1;
      }

      .connect:not(:disabled):hover {
        border-color: #adc4ec;
        background: #fafcff;
      }

      .connect:not(:disabled):active {
        transform: scale(0.97);
      }

      .input-content {
        position: relative;
        transform-origin: 50% 100%;
      }

      textarea {
        position: absolute;
        top: 19px;
        right: 24px;
        left: 23px;
        width: calc(100% - 47px);
        height: 54px;
        padding: 0;
        resize: none;
        border: 0;
        outline: 0;
        background: transparent;
        color: #242424;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.009em;
        line-height: 1.4;
      }

      textarea::placeholder {
        color: #535353;
        opacity: 1;
      }

      textarea:focus-visible {
        border-radius: 4px;
        outline: 2px solid #2b70e8;
        outline-offset: 4px;
      }

      .send {
        --send-offset-y: 0px;
        --send-height: 34px;
        --send-radius-y: 17px;
        --send-arrow-scale-y: 1;
        position: absolute;
        right: 14px;
        bottom: 17px;
        display: grid;
        width: 34px;
        height: var(--send-height);
        padding: 0;
        place-items: center;
        border-radius: 17px / var(--send-radius-y);
        background: #dedede;
        color: #ffffff;
        transform: translateY(var(--send-offset-y));
        transform-origin: 50% 50%;
      }

      .send:disabled {
        cursor: default;
      }

      .send:not(:disabled) {
        background: #2369df;
      }

      .send:not(:disabled):active {
        transform:
          translateY(var(--send-offset-y))
          scale(0.97);
      }

      .send svg {
        display: block;
        width: 15px;
        height: 15px;
        transform: scaleY(var(--send-arrow-scale-y));
        transform-origin: 50% 50%;
      }

      .debug-layer {
        display: none;
      }

      :host([debug]) .debug-layer {
        display: block;
      }

      .debug-actual,
      .debug-output,
      .debug-input,
      .debug-contact-zone,
      .debug-contact-band,
      .debug-waist {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .debug-actual {
        stroke: #ff9348;
        stroke-width: 1.25;
      }

      .debug-output {
        stroke: #78a4ff;
        stroke-width: 1;
      }

      .debug-input {
        stroke: #78a4ff;
        stroke-width: 1;
      }

      .debug-contact-zone {
        stroke: #ff5353;
        stroke-opacity: 0.9;
        stroke-width: 1;
      }

      .debug-contact-band {
        stroke: #ff5353;
        stroke-dasharray: 2 3;
        stroke-opacity: 0.68;
        stroke-width: 0.85;
      }

      .debug-waist {
        stroke: #ff5353;
        stroke-dasharray: 3 3;
        stroke-width: 1;
      }

      @media (prefers-reduced-motion: reduce) {
        .connect,
        .send {
          transition-duration: 0ms;
        }
      }
    </style>

    <svg class="stage" viewBox="0 0 520 300" role="group" aria-label="Liquid connector prompt">
      <path class="surface-fill" part="surface"></path>
      <path class="outline-edge" part="outline"></path>
      <path class="surface" part="focus-outline"></path>

      <foreignObject class="output-object" part="connector-card" x="40" y="57" width="440" height="68">
        <div class="content output-content" xmlns="http://www.w3.org/1999/xhtml">
          <div class="identity" part="identity">
            <svg class="notion-mark" part="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
            </svg>
            <span class="provider-copy" part="provider-copy">
              <span class="eyebrow" part="eyebrow">MCP Connector</span>
              <span class="provider-name" part="provider">Notion</span>
            </span>
          </div>
          <div class="actions">
            <button class="skip" part="skip-button" type="button">Skip</button>
            <button class="connect" part="connect-button" type="button">Connect</button>
          </div>
        </div>
      </foreignObject>

      <foreignObject class="input-object" part="prompt-card" x="40" y="135" width="440" height="134">
        <div class="content input-content" xmlns="http://www.w3.org/1999/xhtml">
          <textarea part="prompt" rows="2" aria-label="Prompt" placeholder="Ask anything..."></textarea>
          <button class="send" part="send-button" type="button" aria-label="Send prompt" disabled>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 13V3M8 3 4.5 6.5M8 3l3.5 3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            </svg>
          </button>
        </div>
      </foreignObject>

      <g class="debug-layer" aria-hidden="true">
        <path class="debug-input"></path>
        <path class="debug-output"></path>
        <path class="debug-contact-zone"></path>
        <path class="debug-contact-band"></path>
        <path class="debug-actual"></path>
        <path class="debug-waist"></path>
      </g>
    </svg>
  `;

  function targetGap(value, fallback = LIQUID_GEOMETRY.restGap) {
    return clamp(
      finiteNumber(value, fallback),
      LIQUID_GEOMETRY.minGap,
      LIQUID_GEOMETRY.maxGap,
    );
  }

  /**
   * A browser-only Web Component that renders a liquid connector with
   * deterministic SVG path math.
   *
   * @fires connect
   * @fires skip
   * @fires submit
   * @fires liquid-toggle
   * @fires liquid-frame
   */
  class LiquidConnector extends HTMLElement {
    static get observedAttributes() {
      return [
        "open",
        "gap",
        "debug",
        "provider",
        "eyebrow",
        "placeholder",
        "connect-label",
        "skip-label",
        "prompt-label",
        "send-label",
        "stage-label",
      ];
    }

    constructor() {
      super();
      this.attachShadow({ mode: "open" }).append(
        template.content.cloneNode(true),
      );
      this._fillPath =
        this.shadowRoot.querySelector(".surface-fill");
      this._paths = [
        ...this.shadowRoot.querySelectorAll(
          ".outline-edge, .surface",
        ),
      ];
      this._debugPaths = {
        actual: this.shadowRoot.querySelector(".debug-actual"),
        output: this.shadowRoot.querySelector(".debug-output"),
        input: this.shadowRoot.querySelector(".debug-input"),
        contactZone: this.shadowRoot.querySelector(
          ".debug-contact-zone",
        ),
        contactBand: this.shadowRoot.querySelector(
          ".debug-contact-band",
        ),
        waist: this.shadowRoot.querySelector(".debug-waist"),
      };
      this._outputObject = this.shadowRoot.querySelector(".output-object");
      this._stage = this.shadowRoot.querySelector(".stage");
      this._inputObject = this.shadowRoot.querySelector(".input-object");
      this._outputContent = this.shadowRoot.querySelector(".output-content");
      this._inputContent = this.shadowRoot.querySelector(".input-content");
      this._providerName = this.shadowRoot.querySelector(".provider-name");
      this._eyebrow = this.shadowRoot.querySelector(".eyebrow");
      this._textarea = this.shadowRoot.querySelector("textarea");
      this._connect = this.shadowRoot.querySelector(".connect");
      this._skip = this.shadowRoot.querySelector(".skip");
      this._send = this.shadowRoot.querySelector(".send");
      this._outputSmears = [-2, 2].map((offset) => {
        const clone = this._outputContent.cloneNode(true);
        clone.classList.add("output-smear");
        clone.setAttribute("aria-hidden", "true");
        clone.inert = true;
        clone.dataset.offset = String(offset);
        for (const button of clone.querySelectorAll("button")) {
          button.tabIndex = -1;
        }
        this._outputObject.append(clone);
        return clone;
      });
      this._restGap = LIQUID_GEOMETRY.restGap;
      this._peelParameters = normalizePeelParameters(
        DEFAULT_PEEL_PARAMETERS,
      );
      this._gap = LIQUID_GEOMETRY.hiddenGap;
      this._targetGap = LIQUID_GEOMETRY.hiddenGap;
      this._velocity = 0;
      this._mode = "merged";
      this._tearAge = -1;
      this._tearStrength = 0;
      this._direction = "idle";
      this._motionKind = "idle";
      this._transitionAge = 0;
      this._peakOpeningTension = 0;
      this._frame = null;
      this._raf = 0;
      this._lastTime = 0;
      this._connected = false;
      this._reducedMotion =
        typeof matchMedia === "function"
          ? matchMedia("(prefers-reduced-motion: reduce)")
          : { matches: false };
      this._tick = this._tick.bind(this);

      this._onConnect = () => {
        this.dispatchEvent(
          new CustomEvent("connect", { bubbles: true, composed: true }),
        );
      };
      this._onSkip = () => {
        this._textarea.focus({ preventScroll: true });
        this.toggle(false);
        this.dispatchEvent(
          new CustomEvent("skip", { bubbles: true, composed: true }),
        );
      };
      this._onSend = () => {
        if (this._send.disabled) return;
        this.dispatchEvent(
          new CustomEvent("submit", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: { value: this.value },
          }),
        );
      };
      this._onInput = () => this._syncInputState();
      this._onKeyDown = (event) => {
        if (
          event.key === "Enter" &&
          !event.shiftKey &&
          !event.isComposing &&
          event.keyCode !== 229
        ) {
          event.preventDefault();
          this._onSend();
        }
      };
      this._onReducedMotionChange = (event) => {
        if (event.matches) this._finishImmediately();
      };
    }

    connectedCallback() {
      if (this._connected) return;
      this._connected = true;
      this._restGap = targetGap(
        this.getAttribute("gap"),
        LIQUID_GEOMETRY.restGap,
      );
      this._gap = this.open
        ? this._restGap
        : LIQUID_GEOMETRY.hiddenGap;
      this._targetGap = this._gap;
      this._mode = resolveLiquidMode(
        undefined,
        this._gap,
        0,
        this._peelParameters,
      );
      this._direction = "idle";
      this._motionKind = "idle";
      this._transitionAge = 0;
      this._peakOpeningTension = 0;
      this._syncCopy();
      this._syncInputState();
      this._render();

      this._connect.addEventListener("click", this._onConnect);
      this._skip.addEventListener("click", this._onSkip);
      this._send.addEventListener("click", this._onSend);
      this._textarea.addEventListener("input", this._onInput);
      this._textarea.addEventListener("keydown", this._onKeyDown);
      if (this._reducedMotion.addEventListener) {
        this._reducedMotion.addEventListener(
          "change",
          this._onReducedMotionChange,
        );
      } else {
        this._reducedMotion.addListener?.(
          this._onReducedMotionChange,
        );
      }
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
      this._lastTime = 0;
      this.removeAttribute("data-animating");
      this._connect.removeEventListener("click", this._onConnect);
      this._skip.removeEventListener("click", this._onSkip);
      this._send.removeEventListener("click", this._onSend);
      this._textarea.removeEventListener("input", this._onInput);
      this._textarea.removeEventListener("keydown", this._onKeyDown);
      if (this._reducedMotion.removeEventListener) {
        this._reducedMotion.removeEventListener(
          "change",
          this._onReducedMotionChange,
        );
      } else {
        this._reducedMotion.removeListener?.(
          this._onReducedMotionChange,
        );
      }
      this._connected = false;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (!this._connected) return;
      if (name === "gap") {
        this._restGap = targetGap(this.getAttribute("gap"), this._restGap);
        if (this.open) this._setTarget(this._restGap);
      } else if (name === "open") {
        if (!this.open) {
          this._moveFocusFromOutput();
          this._outputObject.style.pointerEvents = "none";
          this._outputObject.setAttribute("aria-hidden", "true");
          this._outputContent.inert = true;
          this._connect.disabled = true;
          this._skip.disabled = true;
        }
        this._setTarget(
          this.open ? this._restGap : LIQUID_GEOMETRY.hiddenGap,
        );
        if (oldValue !== newValue) {
          this.dispatchEvent(
            new CustomEvent("liquid-toggle", {
              bubbles: true,
              composed: true,
              detail: { open: this.open },
            }),
          );
        }
      } else if (name === "debug") {
        this._render();
        this._emitFrame();
      } else {
        this._syncCopy();
      }
    }

    get open() {
      return this.hasAttribute("open");
    }

    set open(value) {
      this.toggle(Boolean(value));
    }

    get gap() {
      return this._restGap;
    }

    set gap(value) {
      this.setGap(value);
    }

    get peelParameters() {
      return { ...this._peelParameters };
    }

    set peelParameters(value) {
      this.setPeelParameters(value);
    }

    get value() {
      return this._textarea.value;
    }

    set value(value) {
      this._textarea.value = String(value ?? "");
      this._syncInputState();
    }

    /**
     * Opens or closes the connector.
     * @param {boolean} [force]
     * @returns {boolean} The resulting open state.
     */
    toggle(force = !this.open) {
      const next = Boolean(force);
      if (next === this.open) return this.open;
      this.toggleAttribute("open", next);
      return this.open;
    }

    /**
     * Sets the resting surface gap.
     * @param {number} value
     * @param {{ immediate?: boolean }} [options]
     */
    setGap(value, { immediate = false } = {}) {
      const next = targetGap(value, this._restGap);
      this._restGap = next;
      if (this.getAttribute("gap") !== String(next)) {
        this.setAttribute("gap", String(next));
      }
      if (!this.open) this.toggle(true);

      if (immediate || this._reducedMotion.matches) {
        cancelAnimationFrame(this._raf);
        this._raf = 0;
        this.removeAttribute("data-animating");
        this._gap = next;
        this._targetGap = next;
        this._velocity = 0;
        this._tearAge = -1;
        this._tearStrength = 0;
        this._direction = "scrub";
        this._motionKind = "idle";
        this._transitionAge = 0;
        this._peakOpeningTension = 0;
        this._render();
        this._emitFrame();
      } else {
        this._setTarget(next);
      }
    }

    /**
     * Updates one or more peel parameters and returns the normalized values.
     * @param {Partial<{detachGap: number, transition: number, couplingRadius: number, pull: number}>} [parameters]
     * @returns {{detachGap: number, transition: number, couplingRadius: number, pull: number, peelStart: number}}
     */
    setPeelParameters(parameters = {}) {
      const update =
        parameters && typeof parameters === "object"
          ? parameters
          : {};
      this._peelParameters = normalizePeelParameters({
        ...this._peelParameters,
        ...update,
      });

      if (this._connected) {
        this._mode =
          this._gap > this._peelParameters.detachGap
            ? "detached"
            : "merged";
        this._tearAge = -1;
        this._tearStrength = 0;
        this._render();
        this._emitFrame();
      }

      return this.peelParameters;
    }

    /**
     * Restores the default peel parameters.
     */
    resetPeelParameters() {
      return this.setPeelParameters(DEFAULT_PEEL_PARAMETERS);
    }

    /**
     * Advances an in-flight transition without scheduling animation frames.
     * Repeated calls provide deterministic manual playback for capture and
     * testing; calling toggle() or setGap() resumes normal animation.
     *
     * @param {number} [milliseconds]
     * @returns {object} The rendered LiquidPath frame.
     */
    step(milliseconds = 1000 / 60) {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
      this._lastTime = 0;
      this.removeAttribute("data-animating");
      const delta = clamp(
        finiteNumber(milliseconds, 1000 / 60) / 1000,
        0,
        0.5,
      );
      this._advance(delta);
      this._render();
      this._emitFrame();
      return this._frame;
    }

    _syncCopy() {
      const provider = this.getAttribute("provider") || "Notion";
      const eyebrow = this.getAttribute("eyebrow") || "MCP Connector";
      const connectLabel =
        this.getAttribute("connect-label") || "Connect";
      const skipLabel = this.getAttribute("skip-label") || "Skip";
      const promptLabel =
        this.getAttribute("prompt-label") || "Prompt";
      const sendLabel =
        this.getAttribute("send-label") || "Send prompt";
      const stageLabel =
        this.getAttribute("stage-label") ||
        "Liquid connector prompt";
      for (const node of this.shadowRoot.querySelectorAll(
        ".provider-name",
      )) {
        node.textContent = provider;
      }
      for (const node of this.shadowRoot.querySelectorAll(".eyebrow")) {
        node.textContent = eyebrow;
      }
      for (const node of this.shadowRoot.querySelectorAll(".connect")) {
        node.textContent = connectLabel;
      }
      for (const node of this.shadowRoot.querySelectorAll(".skip")) {
        node.textContent = skipLabel;
      }
      this._textarea.placeholder =
        this.getAttribute("placeholder") || "Ask anything...";
      this._textarea.setAttribute("aria-label", promptLabel);
      this._send.setAttribute("aria-label", sendLabel);
      this._stage.setAttribute("aria-label", stageLabel);
    }

    _syncInputState() {
      this._send.disabled = !this.value.trim();
    }

    _moveFocusFromOutput() {
      const active = this.shadowRoot.activeElement;
      if (active && this._outputContent.contains(active)) {
        this._textarea.focus({ preventScroll: true });
      }
    }

    _finishImmediately() {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
      this.removeAttribute("data-animating");
      this._gap = this._targetGap;
      this._velocity = 0;
      this._tearAge = -1;
      this._tearStrength = 0;
      this._direction = "idle";
      this._motionKind = "idle";
      this._transitionAge = 0;
      this._peakOpeningTension = 0;
      this._mode = resolveLiquidMode(
        this._mode,
        this._gap,
        0,
        this._peelParameters,
      );
      this._render();
      this._emitFrame();
    }

    _setTarget(value) {
      this._targetGap = targetGap(value, this._targetGap);
      if (this._reducedMotion.matches) {
        this._finishImmediately();
        return;
      }

      this._direction =
        this._targetGap < this._gap ? "closing" : "opening";
      const startsAtHidden =
        Math.abs(this._gap - LIQUID_GEOMETRY.hiddenGap) < 1.5;
      const startsAtRest = Math.abs(this._gap - this._restGap) < 1.5;
      const targetsHidden =
        Math.abs(
          this._targetGap - LIQUID_GEOMETRY.hiddenGap,
        ) < 0.1;
      const targetsRest =
        Math.abs(this._targetGap - this._restGap) < 0.1;
      this._motionKind =
        this._direction === "opening" &&
        startsAtHidden &&
        targetsRest
          ? "opening"
          : this._direction === "closing" &&
              startsAtRest &&
              targetsHidden
            ? "closing"
            : "spring";
      this._transitionAge = 0;
      this._peakOpeningTension = 0;
      if (!this._raf) {
        this._lastTime = performance.now();
        this._raf = requestAnimationFrame(this._tick);
        this.setAttribute("data-animating", "");
      }
    }

    _tick(now) {
      const delta = Math.min(
        0.032,
        Math.max(0.001, (now - this._lastTime) / 1000),
      );
      this._lastTime = now;
      this._advance(delta);
      this._render();
      this._emitFrame();
      if (this._raf) this._raf = requestAnimationFrame(this._tick);
    }

    _advance(delta) {
      this._transitionAge += delta;
      if (
        this._motionKind === "opening" ||
        this._motionKind === "closing"
      ) {
        const sample = sampleMeasuredTransition(
          this._motionKind,
          this._transitionAge,
          LIQUID_GEOMETRY.hiddenGap,
          this._restGap,
        );
        this._gap = sample.gap;
        this._velocity = sample.velocity;
        if (this._tearAge >= 0) this._tearAge += delta;

        if (sample.done) {
          this._gap = this._targetGap;
          this._velocity = 0;
          this._raf = 0;
          this._direction = "idle";
          this._motionKind = "idle";
          this._transitionAge = 0;
          this.removeAttribute("data-animating");
        }
        return;
      }

      const steps = Math.max(1, Math.ceil(delta / (1 / 120)));
      const dt = delta / steps;

      for (let index = 0; index < steps; index += 1) {
        const acceleration =
          LIQUID_MOTION.stiffness * (this._targetGap - this._gap) -
          LIQUID_MOTION.damping * this._velocity;
        this._velocity += acceleration * dt;
        this._gap += this._velocity * dt;
      }
      if (this._tearAge >= 0) this._tearAge += delta;

      if (
        Math.abs(this._targetGap - this._gap) <
          LIQUID_MOTION.settleDistance &&
        Math.abs(this._velocity) < LIQUID_MOTION.settleVelocity
      ) {
        this._gap = this._targetGap;
        this._velocity = 0;
        this._raf = 0;
        this._direction = "idle";
        this._motionKind = "idle";
        this._transitionAge = 0;
        this.removeAttribute("data-animating");
      }
    }

    _render() {
      const previousMode = this._mode;
      if (this._direction === "opening") {
        this._peakOpeningTension = Math.max(
          this._peakOpeningTension,
          openingTension(this._velocity),
        );
      }

      let nextMode;
      if (this._direction === "scrub") {
        nextMode = resolveScrubMode(
          previousMode,
          this._gap,
          this._peelParameters,
        );
      } else {
        nextMode = resolveLiquidMode(
          previousMode,
          this._gap,
          this._velocity,
          this._peelParameters,
        );
      }
      if (
        this._motionKind === "opening" &&
        previousMode === "merged"
      ) {
        const detachTimeOffset =
          (this._peelParameters.detachGap -
            DEFAULT_PEEL_PARAMETERS.detachGap) /
          240;
        const autoDetachTime = clamp(
          LIQUID_MOTION.openTearTime + detachTimeOffset,
          LIQUID_MOTION.openBridgeStart + 0.004,
          0.14,
        );
        nextMode =
          this._transitionAge >= autoDetachTime
            ? "detached"
            : "merged";
      }
      if (previousMode === "merged" && nextMode === "detached") {
        this._tearStrength = Math.max(
          openingTension(this._velocity),
          this._peakOpeningTension,
        );
        this._tearAge = this._tearStrength > 0 ? 0 : -1;
      } else if (
        previousMode === "detached" &&
        nextMode === "merged"
      ) {
        this._tearStrength = 0;
        this._tearAge = -1;
      }
      this._mode = nextMode;

      const frame = createLiquidFrame(this._gap, this._velocity, {
        mode: this._mode,
        scrub: this._direction === "scrub",
        tearAge: this._tearAge,
        tearStrength: this._tearStrength,
        closeAge:
          this._direction === "closing" ? this._transitionAge : -1,
        openAge:
          this._motionKind === "opening" ? this._transitionAge : -1,
        openStrength:
          this._direction === "opening"
            ? this._peakOpeningTension
            : 0,
        peelParameters: this._peelParameters,
        debug: this.hasAttribute("debug"),
      });
      this._frame = frame;

      this._fillPath.setAttribute("d", frame.d);
      for (const path of this._paths) {
        path.setAttribute("d", frame.edgeD);
      }
      const debug = frame.debug;
      this._debugPaths.actual.setAttribute("d", debug?.actualD ?? "");
      this._debugPaths.output.setAttribute("d", debug?.outputD ?? "");
      this._debugPaths.input.setAttribute("d", debug?.inputD ?? "");
      this._debugPaths.contactZone.setAttribute(
        "d",
        debug?.contactZoneD ?? "",
      );
      this._debugPaths.contactBand.setAttribute(
        "d",
        debug?.contactBandD ?? "",
      );
      this._debugPaths.waist.setAttribute("d", debug?.waistD ?? "");
      this._outputObject.setAttribute("y", frame.outputY.toFixed(3));
      this._outputObject.style.setProperty(
        "--output-blur",
        `${frame.outputBlur.toFixed(3)}px`,
      );
      this._inputObject.setAttribute(
        "y",
        frame.inputVisualY.toFixed(3),
      );
      this._inputObject.setAttribute(
        "height",
        frame.inputVisualHeight.toFixed(3),
      );
      this._inputContent.style.height =
        `${frame.inputContentHeight.toFixed(3)}px`;
      this._inputContent.style.transform =
        `translateY(${(frame.inputContentY - frame.inputVisualY).toFixed(3)}px) ` +
        `scaleY(${frame.inputContentScaleY.toFixed(3)})`;
      const mainOpacity =
        frame.outputOpacity * (1 - 0.35 * frame.outputSmear);
      this._outputContent.style.opacity = mainOpacity.toFixed(3);
      this._outputContent.style.transform =
        `scaleY(${frame.outputScaleY.toFixed(3)})`;
      for (const smear of this._outputSmears) {
        smear.style.opacity = (
          frame.outputOpacity *
          0.04 *
          frame.outputSmear
        ).toFixed(3);
        smear.style.transform =
          `translateX(${smear.dataset.offset}px) ` +
          `scaleY(${frame.outputScaleY.toFixed(3)})`;
        smear.style.visibility =
          frame.outputOpacity > 0.08 ? "visible" : "hidden";
      }
      this._send.style.setProperty(
        "--send-height",
        `${frame.sendHeight.toFixed(3)}px`,
      );
      this._send.style.setProperty(
        "--send-offset-y",
        `${frame.sendOffsetY.toFixed(3)}px`,
      );
      this._send.style.setProperty(
        "--send-radius-y",
        `${frame.sendRadiusY.toFixed(3)}px`,
      );
      this._send.style.setProperty(
        "--send-arrow-scale-y",
        frame.sendArrowScaleY.toFixed(4),
      );

      if (frame.outputOpacity < 0.88) this._moveFocusFromOutput();
      const interactive = this.open && frame.outputOpacity > 0.88;
      this._outputObject.style.pointerEvents =
        interactive ? "auto" : "none";
      this._outputObject.setAttribute(
        "aria-hidden",
        this.open && frame.outputOpacity > 0.1 ? "false" : "true",
      );
      this._outputContent.style.visibility =
        frame.outputOpacity > 0.08 ? "visible" : "hidden";
      this._outputContent.inert = !interactive;
      this._connect.disabled = !interactive;
      this._skip.disabled = !interactive;
      this.setAttribute("data-mode", frame.mode);
      this.setAttribute("data-phase", frame.phase);
    }

    _emitFrame() {
      if (
        !this.hasAttribute("emit-frames") &&
        !this.hasAttribute("debug")
      ) {
        return;
      }
      this.dispatchEvent(
        new CustomEvent("liquid-frame", {
          bubbles: true,
          composed: true,
          detail: {
            gap: this._frame?.gap ?? this._gap,
            mode: this._frame?.mode ?? this._mode,
            phase: this._frame?.phase ?? "detached",
            faceGap: this._frame?.faceGap ?? 0,
            notch: this._frame?.notch ?? 0,
            strain: this._frame?.strain ?? 0,
            stretch: this._frame?.stretch ?? 0,
            waistWidth: this._frame?.waistWidth ?? 0,
            velocity: this._velocity,
            open: this.open,
            peelParameters: this._peelParameters,
          },
        }),
      );
    }
  }

  const registeredConnector = customElements.get("liquid-connector");
  if (!registeredConnector) {
    customElements.define("liquid-connector", LiquidConnector);
  }

  global.LiquidConnector =
    registeredConnector ?? LiquidConnector;
})(globalThis);

export type LiquidConnectorProps = {
  open?: boolean;
  gap?: number;
  value?: string;
  provider?: string;
  eyebrow?: string;
  placeholder?: string;
  connectLabel?: string;
  skipLabel?: string;
  promptLabel?: string;
  sendLabel?: string;
  stageLabel?: string;
  className?: string;
};

const LiquidConnectorComponent = React.forwardRef<
  HTMLElement,
  LiquidConnectorProps
>(function LiquidConnectorComponent(
  {
    open = true,
    gap = 10,
    value = "",
    provider = "Notion",
    eyebrow = "MCP Connector",
    placeholder = "Ask anything...",
    connectLabel = "Connect",
    skipLabel = "Skip",
    promptLabel = "Prompt",
    sendLabel = "Send prompt",
    stageLabel = "Liquid connector prompt",
    className,
  },
  forwardedRef,
) {
  const elementRef = React.useRef<HTMLElement | null>(null);

  React.useImperativeHandle(forwardedRef, () => elementRef.current!, []);

  React.useLayoutEffect(() => {
    const element = elementRef.current as HTMLElement & {
      open: boolean;
      gap: number;
      value: string;
    };
    if (!element) return;
    element.gap = gap;
    element.value = value;
    element.open = open;
  }, [gap, open, value]);

  return React.createElement("liquid-connector", {
    ref: elementRef,
    className,
    provider,
    eyebrow,
    placeholder,
    "connect-label": connectLabel,
    "skip-label": skipLabel,
    "prompt-label": promptLabel,
    "send-label": sendLabel,
    "stage-label": stageLabel,
  });
});

export default LiquidConnectorComponent;
