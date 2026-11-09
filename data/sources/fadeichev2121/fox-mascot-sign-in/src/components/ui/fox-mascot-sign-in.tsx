import { useEffect, useRef, useState, type FormEvent } from 'react';
type PulseLoginMood = 'idle' | 'email' | 'password' | 'otp' | 'busy' | 'success' | 'error';
const MODEL_URL = 'https://cdn.imageurlgenerator.com/uploads/1b577b81-86cd-42b1-8b3f-895c32131ceb.glb';
const POSTER_URL = 'https://cdn.21st.dev/assets/mirror/96/9645a9f3d6adc8fe2306500cfe92fbaf2ff11d6ffb5867c7bb021833a70ea681.webp';
export type FoxState = { mood: PulseLoginMood; typing: boolean; reduced: boolean; peeking?: boolean; mobile?: boolean };
type Phase = { kind: 'turning' | 'walking' | 'sitting' | 'standing'; age: number; duration: number; from: number; to: number };
const smooth = (t: number) => t * t * (3 - 2 * t);
const near = (a: number, b: number) => Math.abs(a - b) < .001;
const angleDelta = (from: number, to: number) => Math.atan2(Math.sin(to - from), Math.cos(to - from));

export function createFoxMotion(initial: FoxState) {
  let state = initial, time = 0, earAge = 10;
  let progress = 0, yaw = -.12, sit = 0;
  let tailPhase = 0, tailSpeed = 1.8, tailAmplitude = .02;
  let peek = 0, lookDown = 0;
  let phase: Phase | null = null;
  const destination = () => !state.mobile && (state.mood === 'email' || state.mood === 'otp') ? 1 : 0;
  const facing = () => state.mood === 'password' ? Math.PI : destination() ? .65 : -.12;
  const plan = () => {
    const target = destination();
    const desiredSit = state.mood === 'password' ? 1 : 0;
    const needsTravel = !near(progress, target);
    const targetYaw = needsTravel ? target > progress ? Math.PI / 2 : -Math.PI / 2 : facing();
    const delta = angleDelta(yaw, targetYaw);
    if (sit > 0 && (needsTravel || Math.abs(delta) > .001 || !desiredSit)) {
      phase = { kind: 'standing', age: 0, duration: .6, from: sit, to: 0 };
    } else if (Math.abs(delta) > .001) {
      phase = { kind: 'turning', age: 0, duration: Math.max(1, Math.abs(delta) * .8), from: yaw, to: yaw + delta };
    } else if (needsTravel) {
      phase = { kind: 'walking', age: 0, duration: 2.1 * Math.abs(target - progress), from: progress, to: target };
    } else if (!near(sit, desiredSit)) {
      phase = { kind: 'sitting', age: 0, duration: .8, from: sit, to: desiredSit };
    }
  };
  return {
    setState(next: FoxState) {
      const enteringMobile = next.mobile && !state.mobile;
      if (next.mood !== state.mood || (next.typing && !state.typing) || next.peeking !== state.peeking) earAge = 0;
      // Replan at the next planted stance, never discard an airborne footfall.
      state = next;
      // A stacked layout has no horizontal route to the form. Cancel only
      // obsolete travel, leaving posture transitions intact on resize.
      if (state.mobile && (enteringMobile || progress !== 0)) {
        progress = 0;
        if (phase?.kind === 'walking' || phase?.kind === 'turning') phase = null;
        if (state.mood === 'email' || state.mood === 'otp') yaw = -.12;
      }
    },
    sample(dt: number) {
      time += dt; earAge += dt;
      let gait = 0;
      let activity: Phase['kind'] | 'resting' = 'resting';
      if (state.reduced) {
        progress = destination(); yaw = facing(); sit = state.mood === 'password' ? 1 : 0; phase = null;
      } else {
        if (!phase) plan();
        if (phase) {
          activity = phase.kind;
          phase.age = Math.min(phase.duration, phase.age + dt);
          const t = phase.age / phase.duration;
          const eased = smooth(t);
          const value = phase.from + (phase.to - phase.from) * eased;
          if (phase.kind === 'turning') yaw = value;
          else if (phase.kind === 'walking') progress = value;
          else sit = value;
          gait = phase.kind === 'walking' || phase.kind === 'turning' ? eased : 0;
          if (t === 1) phase = null;
        }
      }
      // Reveal only turns the head after the body has settled facing away.
      const peekTarget = state.peeking && state.mood === 'password' && sit > .99 && activity === 'resting' ? 1 : 0;
      peek = state.reduced ? peekTarget : peek + (peekTarget - peek) * (1 - Math.exp(-dt / .24));
      const lookDownTarget = state.mobile && (state.mood === 'email' || state.mood === 'otp') && sit < .01 ? 1 : 0;
      lookDown = state.reduced ? lookDownTarget : lookDown + (lookDownTarget - lookDown) * (1 - Math.exp(-dt / .28));
      if (!state.reduced) {
        // Integrate frequency instead of multiplying elapsed time by a
        // changing speed, which makes the phase jump during sitting.
        const settling = 1 - Math.exp(-dt / .65);
        tailSpeed += (1.8 + sit * .6 - tailSpeed) * settling;
        tailAmplitude += (.02 + sit * .06 - tailAmplitude) * settling;
        tailPhase = (tailPhase + tailSpeed * dt) % (Math.PI * 2);
      }
      return {
        progress, yaw, sit, gait, activity, peek, lookDown,
        walking: activity === 'walking' || activity === 'turning',
        earLeft: state.reduced ? 0 : earFlick(Math.min(earAge, time % 6.8)),
        earRight: state.reduced ? 0 : -earFlick(Math.min(earAge - .14, (time + 3.1) % 8.3)),
        tail: state.reduced ? 0 : Math.sin(tailPhase) * tailAmplitude,
        breath: state.reduced || activity !== 'resting' ? 1 : 1 + Math.sin(time * 1.8) * .0015,
      };
    },
  };
}

function earFlick(age: number) {
  if (age < 0 || age > .9) return 0;
  return .16 * Math.sin(age / .9 * Math.PI * 2) * Math.sin(age / .9 * Math.PI);
}

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
export type PulseFoxController = { setState: (state: FoxState) => void; dispose: () => void };

export async function createPulseFox(host: HTMLElement, initial: FoxState): Promise<PulseFoxController> {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, .05, 30);
  camera.position.set(.10, 1.08, 4.2);
  camera.lookAt(0, .85, .12);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, .06);
  room.dispose(); pmrem.dispose();
  scene.environment = environment.texture;
  scene.environmentIntensity = .8;
  scene.add(new THREE.HemisphereLight(0xf8fbff, 0xb4c5e6, 1.3));
  const key = new THREE.DirectionalLight(0xffffff, 2.7); key.position.set(-3,4,5); scene.add(key);
  const fill = new THREE.DirectionalLight(0xe1ebff, 1.1); fill.position.set(3,2,1); scene.add(fill);
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  let gltf;
  try { gltf = await loader.loadAsync(MODEL_URL); }
  catch (error) { environment.dispose(); renderer.dispose(); throw error; }
  const model = gltf.scene;
  // Small three-quarter turn makes the tail readable beside the body.
  model.rotation.y = -.12;
  scene.add(model);
  const morphs: THREE.Mesh[] = [];
  const blinkUniform = { value: 0 };
  model.traverse(object => {
    if (object instanceof THREE.Mesh) {
      object.frustumCulled = false;
      if (object.morphTargetDictionary) morphs.push(object);
      // Legacy lid shells are retained in the source asset but never rendered.
      // Blinking is drawn directly on the existing face surface below.
      if (object.morphTargetDictionary?.Blink25 !== undefined) object.visible = false;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.metalness = 0;
          material.envMapIntensity = .6;
          if ((object.name === 'Pulse_Fox' || object.name === 'Pulse Fox') && material.map) {
            // Blink on the existing skinned surface. Separate spherical caps
            // cannot fit this generated mesh and read as floating lenses.
            const positions = object.geometry.getAttribute('position');
            const uvs = object.geometry.getAttribute('uv');
            // Meshopt quantization is baked into inverse bind matrices, not
            // the node transform. Shader `position` is therefore normalized
            // around zero. Restore the source mesh space for the eye mask.
            // Source bounds: y = [-0.0001873448, 1.6999855042]. The same
            // uniform scale is used on all three axes by this asset's export.
            const restScale = .8500864244706463;
            const restCenter = new THREE.Vector3(-.000786125659942627, .8498990796797443, .002342313528060913);
            const restPositions = new THREE.Float32BufferAttribute(new Float32Array(positions.count * 3), 3);
            for (let i = 0; i < positions.count; i++) {
              restPositions.setXYZ(i,
                positions.getX(i) * restScale + restCenter.x,
                positions.getY(i) * restScale + restCenter.y,
                positions.getZ(i) * restScale + restCenter.z);
            }
            object.geometry.setAttribute('pulseRestPosition', restPositions);
            const sampleUv = (x: number, y: number, z: number) => {
              let closest = 0, distance = Infinity;
              for (let i = 0; i < positions.count; i++) {
                const d = (restPositions.getX(i) - x) ** 2 + (restPositions.getY(i) - y) ** 2 + (restPositions.getZ(i) - z) ** 2;
                if (d < distance) { distance = d; closest = i; }
              }
              return new THREE.Vector2(uvs.getX(closest), uvs.getY(closest));
            };
            // Forehead fur, clear of the dark painted eyebrows at x≈±.18/y≈1.25.
            const furLeft = sampleUv(-.12, 1.30, .60), furRight = sampleUv(.12, 1.30, .60);
            const cheekLeft = sampleUv(-.22, .91, .59), cheekRight = sampleUv(.22, .91, .59);
            material.onBeforeCompile = shader => {
              shader.uniforms.pulseBlink = blinkUniform;
              shader.uniforms.pulseFurLeft = { value: furLeft };
              shader.uniforms.pulseFurRight = { value: furRight };
              shader.uniforms.pulseCheekLeft = { value: cheekLeft };
              shader.uniforms.pulseCheekRight = { value: cheekRight };
              shader.vertexShader = 'attribute vec3 pulseRestPosition;\nvarying vec3 vPulseRest;\n' + shader.vertexShader;
              shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvPulseRest = pulseRestPosition;');
              shader.fragmentShader = `varying vec3 vPulseRest;
uniform float pulseBlink;
uniform vec2 pulseFurLeft, pulseFurRight, pulseCheekLeft, pulseCheekRight;
` + shader.fragmentShader;
              shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
if (pulseBlink > 0.001 && vPulseRest.z > 0.50) {
  vec2 eye = vec2((abs(vPulseRest.x) - 0.188) / 0.139, (vPulseRest.y - 1.069) / 0.151);
  float extent = sqrt(max(0.0, 1.0 - eye.x * eye.x));
  float area = 1.0 - smoothstep(0.97, 1.025, dot(eye, eye));
  float upperEdge = extent * (1.0 - 1.65 * pulseBlink);
  float lowerEdge = extent * (-1.0 + 0.35 * pulseBlink);
  float upper = smoothstep(upperEdge - 0.025, upperEdge + 0.025, eye.y);
  float lower = 1.0 - smoothstep(lowerEdge - 0.025, lowerEdge + 0.025, eye.y);
  vec2 furUv = vPulseRest.x < 0.0 ? pulseFurLeft : pulseFurRight;
  vec2 cheekUv = vPulseRest.x < 0.0 ? pulseCheekLeft : pulseCheekRight;
  vec3 furColor = texture2D(map, furUv).rgb;
  vec3 cheekColor = texture2D(map, cheekUv).rgb;
  // Combine the two coverage masks first. Two successive alpha blends left
  // 25% of the iris/highlights visible where the closed lids met.
  float coverage = min(1.0, upper + lower);
  vec3 lidColor = mix(cheekColor, furColor, upper / max(upper + lower, 0.001));
  diffuseColor.rgb = mix(diffuseColor.rgb, lidColor, coverage * area);
  float seam = (1.0 - smoothstep(0.006, 0.018, abs(eye.y + extent * 0.65))) * smoothstep(0.94, 1.0, pulseBlink);
  diffuseColor.rgb = mix(diffuseColor.rgb, furColor * 0.28, seam * area);
}`);
            };
            material.customProgramCacheKey = () => 'pulse-surface-blink-fur-seam-9';
          }
        }
      }
    }
  });
  // Reuse only the compact footfall rotations. Never play the rejected paw
  // gesture, root bounce, or head/body transforms from the old animation set.
  const approach = gltf.animations.find(clip => clip.name === 'Pulse_Approach');
  if (!approach) throw new Error('Pulse fox is missing its footfall animation');
  const legNames = new Set([5,6,7,10,11,12,24,25,26,30,31,32].map(id => `Bone_${String(id).padStart(3, '0')}`));
  const footfalls = new THREE.AnimationClip('Footfalls', approach.duration, approach.tracks.filter(track => {
    const [name, property] = track.name.split('.');
    return property === 'quaternion' && (legNames.has(name) || name.startsWith('Pulse_Forearm_Twist_'));
  }));
  const mixer = new THREE.AnimationMixer(model);
  const stride = mixer.clipAction(footfalls).setLoop(THREE.LoopOnce, 1).play();
  stride.clampWhenFinished = true;
  stride.paused = true;
  const seated = gltf.animations.find(clip => clip.name === 'Pulse_Sit');
  if (!seated) throw new Error('Pulse fox is missing its sitting pose');
  const sitAction = mixer.clipAction(seated).play();
  sitAction.paused = true; sitAction.time = 0; sitAction.setEffectiveWeight(0);
  const tail = model.getObjectByName('Bone_002');
  const tailRest = tail?.quaternion.clone();
  model.updateMatrixWorld(true);
  const tailAxis = new THREE.Vector3(0, 1, 0);
  if (tail) tailAxis.applyQuaternion(tail.getWorldQuaternion(new THREE.Quaternion()).invert());
  const tailRotation = new THREE.Quaternion();
  const ears = ['Bone_046', 'Bone_049'].map(name => {
    const bone = model.getObjectByName(name);
    return bone ? { bone, rest: bone.quaternion.clone() } : null;
  });
  const earRotation = new THREE.Quaternion();
  const earAxis = new THREE.Vector3(0, 0, 1);
  const peekBones = [{ name: 'Bone_020', angle: -.28, down: .10 }, { name: 'Bone_019', angle: -1.20, down: .27 }].flatMap(({ name, angle, down }) => {
    const bone = model.getObjectByName(name);
    return bone ? [{ bone, angle, down, rest: bone.quaternion.clone() }] : [];
  });
  const peekAxis = new THREE.Vector3();
  const peekParentRotation = new THREE.Quaternion();
  const peekRotation = new THREE.Quaternion();
  const headModelRotation = new THREE.Quaternion();
  const mobileLayout = window.matchMedia('(max-width: 700px)');
  const motion = createFoxMotion({ ...initial, mobile: mobileLayout.matches });
  const basePosition = model.position.clone();
  const baseScale = model.scale.clone();
  let travel = .46;
  let radialExtent = .82;
  // Keep the lowest sole on the floor during each stride. Sample only a small
  // fixed set of sole vertices, not the full high-resolution Meshy surface.
  const soleMesh = model.getObjectByName('Pulse_Fox') ?? model.getObjectByName('Pulse Fox');
  const soles: number[] = [];
  const solePoint = new THREE.Vector3();
  if (soleMesh instanceof THREE.SkinnedMesh) {
    const positions = soleMesh.geometry.getAttribute('position');
    radialExtent = 0;
    for (let i = 0; i < positions.count; i++) radialExtent = Math.max(radialExtent, Math.hypot(positions.getX(i), positions.getZ(i)));
    let lowest = Infinity;
    for (let i = 0; i < positions.count; i++) lowest = Math.min(lowest, positions.getY(i));
    const candidates: number[] = [];
    for (let i = 0; i < positions.count; i++) if (positions.getY(i) < lowest + .025) candidates.push(i);
    const step = Math.max(1, Math.floor(candidates.length / 120));
    for (let i = 0; i < candidates.length; i += step) soles.push(candidates[i]);
  }
  const soleHeight = () => {
    if (!(soleMesh instanceof THREE.SkinnedMesh) || !soles.length) return 0;
    model.updateMatrixWorld(true);
    let lowest = Infinity;
    for (const index of soles) {
      soleMesh.getVertexPosition(index, solePoint);
      soleMesh.localToWorld(solePoint);
      lowest = Math.min(lowest, solePoint.y);
    }
    return lowest;
  };
  const floorHeight = soleHeight();
  const ground = host.parentElement?.querySelector<HTMLElement>('.pulse-fox-ground');
  let state = initial;
  let running = true, inView = true, raf = 0, previous = performance.now(), elapsed = 0;
  let nextBlink = 2.5, blinkStart = -10;
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (width < 1 || height < 1) return;
    travel = mobileLayout.matches ? 0 : width < 400 ? .24 : .46;
    motion.setState({ ...state, mobile: mobileLayout.matches });
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Fit the full rotation envelope plus the entire approach distance. The
    // frustum sides must be tangent to that envelope, not intersect the nose.
    const halfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const horizontalSlope = halfFov * camera.aspect;
    const fitDistance = (radialExtent * Math.sqrt(1 + horizontalSlope * horizontalSlope) + travel / 2 + .10) / horizontalSlope;
    camera.position.set(travel / 2, 1.08, Math.max(4.2, fitDistance));
    camera.lookAt(travel / 2, .85, 0);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  };
  const observer = new ResizeObserver(resize); observer.observe(host);
  const visibility = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; resume(); });
  visibility.observe(host);
  host.appendChild(renderer.domElement);
  const loseContext = (event: Event) => { event.preventDefault(); running = false; };
  renderer.domElement.addEventListener('webglcontextlost', loseContext);
  const restoreContext = () => { running = true; resume(); };
  renderer.domElement.addEventListener('webglcontextrestored', restoreContext);
  function tick(now: number) {
    raf = 0;
    if (!running || document.hidden || !inView) return;
    const dt = Math.min((now - previous) / 1000, .05); previous = now; elapsed += dt;
    const pose = motion.sample(dt);
    // Root distance and the two gait cycles share one progress value, so
    // animation speed follows acceleration and braking instead of looping in place.
    stride.time = pose.gait * footfalls.duration;
    stride.setEffectiveWeight(1 - pose.sit);
    sitAction.setEffectiveWeight(pose.sit);
    // Reset the procedural offset before sampling the authored pose; never
    // accumulate head rotations across frames.
    peekBones.forEach(({ bone, rest }) => bone.quaternion.copy(rest));
    mixer.update(0);
    peekBones.forEach(({ bone, rest }) => rest.copy(bone.quaternion));
    host.dataset.motion = pose.activity;
    host.dataset.posture = pose.sit > .99 ? 'seated' : 'standing';
    if (tail && tailRest) tail.quaternion.copy(tailRest).multiply(tailRotation.setFromAxisAngle(tailAxis, pose.tail));
    ears.forEach((ear, index) => {
      if (ear) ear.bone.quaternion.copy(ear.rest).multiply(earRotation.setFromAxisAngle(earAxis, index ? pose.earRight : pose.earLeft));
    });
    model.position.set(basePosition.x + pose.progress * travel, basePosition.y, basePosition.z + pose.progress * .07);
    model.rotation.set(0, pose.yaw, 0);
    model.scale.set(baseScale.x, baseScale.y * pose.breath, baseScale.z);
    model.updateMatrixWorld(true);
    // Split the glance between neck and head. Rotate around the scene's
    // vertical axis expressed in each bone parent's space, not arbitrary local
    // axes from the auto-rig. Keep the torso, seated legs and root facing away.
    model.getWorldQuaternion(headModelRotation);
    for (const { bone, angle, down } of peekBones) {
      if (!bone.parent || (pose.peek < .0001 && pose.lookDown < .0001)) continue;
      bone.parent.getWorldQuaternion(peekParentRotation);
      peekParentRotation.invert();
      if (pose.peek >= .0001) {
        peekAxis.set(0, 1, 0).applyQuaternion(peekParentRotation);
        bone.quaternion.premultiply(peekRotation.setFromAxisAngle(peekAxis, angle * pose.peek));
      }
      if (pose.lookDown >= .0001) {
        // Positive model X pitches the nose down toward the mobile form.
        peekAxis.set(1, 0, 0).applyQuaternion(headModelRotation).applyQuaternion(peekParentRotation);
        bone.quaternion.premultiply(peekRotation.setFromAxisAngle(peekAxis, down * pose.lookDown));
      }
      bone.updateMatrixWorld(true);
    }
    model.position.y += floorHeight - soleHeight();
    if (ground) {
      const visibleWidth = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z * camera.aspect;
      ground.style.transform = `translateX(${pose.progress * travel / visibleWidth * host.clientWidth}px)`;
      ground.style.opacity = '1';
    }
    if (elapsed >= nextBlink && !state.reduced) {
      blinkStart = elapsed; nextBlink = elapsed + 3.2 + Math.random() * 2.3;
    }
    const blinkAge = elapsed - blinkStart;
    // Fast closure, short contact, slower reopening. No symmetric eyelid snap.
    const ease = (t: number) => t * t * (3 - 2 * t);
    const blink = state.reduced || blinkAge < 0 || blinkAge > .25 ? 0
      : blinkAge < .075 ? ease(blinkAge / .075)
      : blinkAge < .095 ? 1 : 1 - ease((blinkAge - .095) / .155);
    blinkUniform.value = blink;
    for (const mesh of morphs) {
      const dict = mesh.morphTargetDictionary!, values = mesh.morphTargetInfluences!;
      if (dict.Blink25 !== undefined) mesh.visible = false;
      if (dict.Blink !== undefined) values[dict.Blink] = 0;
      if (dict.Gaze !== undefined) values[dict.Gaze] = 0; // Source gaze morph pulls facial fur; keep the face stable.
    }
    renderer.render(scene, camera);
    if (!state.reduced) raf = requestAnimationFrame(tick);
  }
  function resume() {
    if (!raf && running && !document.hidden && inView) { previous = performance.now(); raf = requestAnimationFrame(tick); }
  }
  document.addEventListener('visibilitychange', resume);
  resize(); resume();
  return {
    setState(next) { state = next; motion.setState({ ...next, mobile: mobileLayout.matches }); resume(); },
    dispose() {
      running = false; cancelAnimationFrame(raf); observer.disconnect(); visibility.disconnect();
      document.removeEventListener('visibilitychange', resume);
      renderer.domElement.removeEventListener('webglcontextlost', loseContext);
      renderer.domElement.removeEventListener('webglcontextrestored', restoreContext);
      mixer.stopAllAction(); mixer.uncacheRoot(model);
      const textures = new Set<THREE.Texture>();
      model.traverse(object => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
          for (const value of Object.values(material)) if (value instanceof THREE.Texture) textures.add(value);
          material.dispose();
        }
        if (object instanceof THREE.SkinnedMesh) object.skeleton.dispose();
      });
      textures.forEach(texture => texture.dispose()); environment.dispose(); renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

const PulseLoginMascot = ({ mood, typing = false, peeking = false }: { mood: PulseLoginMood; typing?: boolean; peeking?: boolean }) => {
  const host = useRef<HTMLDivElement>(null);
  const controller = useRef<PulseFoxController | null>(null);
  const reduced = usePrefersReducedMotion();
  const latest = useRef({ mood, typing, peeking, reduced: Boolean(reduced) });
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  useEffect(() => {
    latest.current = { mood, typing, peeking, reduced: Boolean(reduced) };
    controller.current?.setState(latest.current);
  }, [mood, typing, peeking, reduced]);
  useEffect(() => {
    let disposed = false;
    const element = host.current;
    if (!element) return;
    // A quick CDN load should not flash a still image before the live scene.
    const fallbackTimer = window.setTimeout(() => {
      if (!disposed && !controller.current) setShowFallback(true);
    }, 650);
    void createPulseFox(element, latest.current).then(scene => {
      if (disposed) { scene.dispose(); return; }
      controller.current = scene;
      scene.setState(latest.current);
      setShowFallback(false);
      setReady(true);
    }).catch(error => { if (!disposed) { setFailed(true); setShowFallback(true); } console.error('Interactive mascot failed to initialize', error); });
    return () => { disposed = true; window.clearTimeout(fallbackTimer); controller.current?.dispose(); controller.current = null; };
  }, []);
  return <div className="ims-fox" data-motion-version="interactive-mascot-sign-in-1" data-mood={mood} data-typing={typing} data-renderer={ready ? 'webgl' : failed ? 'poster' : 'loading'}>
    <div className="ims-fox-ground" aria-hidden="true" />
    <img className={`ims-fox-poster${showFallback && !ready ? ' is-visible' : ''}`} src={POSTER_URL} alt="" aria-hidden="true" />
    <div ref={host} aria-hidden="true" className={`ims-fox-canvas${ready ? ' is-ready' : ''}`} />
  </div>;
};

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync(); query.addEventListener?.('change', sync);
    return () => query.removeEventListener?.('change', sync);
  }, []);
  return reduced;
};

const Icon = ({ name }: { name: 'user' | 'lock' | 'eye' | 'eyeOff' | 'arrow' | 'back' | 'check' }) => {
  const paths: Record<string, string> = {
    user: 'M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
    lock: 'M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5zM12 15v2',
    eye: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    eyeOff: 'm3 3 18 18M10.6 6.2A10.8 10.8 0 0 1 12 6c6.5 0 10 6 10 6a17.8 17.8 0 0 1-3.1 3.9M6.2 6.2C3.4 8.2 2 12 2 12s3.5 6 10 6a10 10 0 0 0 3.5-.6',
    arrow: 'M5 12h14m-6-6 6 6-6 6',
    back: 'm15 18-6-6 6-6',
    check: 'm5 12 4 4L19 6',
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
};

export const InteractiveMascotSignIn = () => {
  const [step, setStep] = useState<'credentials' | 'otp' | 'success'>('credentials');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<'idle' | 'email' | 'password' | 'otp'>('idle');
  const [typing, setTyping] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = usePrefersReducedMotion();
  useEffect(() => () => { if (typingTimer.current) clearTimeout(typingTimer.current); }, []);
  const reactToTyping = () => {
    setTyping(true); setError('');
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setTyping(false), 750);
  };
  const mood: PulseLoginMood = step === 'success' ? 'success' : submitting ? 'busy' : error && focused === 'idle' ? 'error'
    : step === 'otp' ? 'otp' : focused === 'password' || (showPassword && focused === 'idle') ? 'password' : focused;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (submitting || step === 'success') return;
    setSubmitting(true); setFocused('idle'); setTyping(false);
    window.setTimeout(() => {
      setSubmitting(false);
      if (step === 'credentials') {
        setStep('otp');
        setCode('');
      } else {
        if (code.length !== 6) { setError('Enter the 6-digit code.'); return; }
        setStep('success');
      }
    }, reduced ? 80 : 650);
  };
  const reset = () => { setStep('credentials'); setCode(''); setError(''); setFocused('idle'); };
  useEffect(() => {
    const node = document.createElement('style');
    node.dataset.interactiveMascotSignIn = 'true'; node.textContent = ".ims-shell{--ink:#182548;--muted:#7280a4;--line:#dbe4f3;--surface:#ffffffec;--accent:#4d72f5;--accent-2:#4ca6f6;color-scheme:light;position:relative;isolation:isolate;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr);align-items:center;gap:clamp(28px,5vw,76px);min-height:680px;width:100%;overflow:hidden;padding:clamp(34px,6vw,84px);border-radius:32px;background:#f7faff;color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;-webkit-font-smoothing:antialiased}\n.ims-shell *, .ims-shell *::before, .ims-shell *::after{box-sizing:border-box}\n.ims-shell::before,.ims-shell::after{content:\"\";position:absolute;z-index:-2;pointer-events:none;border-radius:50%;filter:blur(.2px)}\n.ims-shell::before{width:64vw;height:64vw;max-width:880px;max-height:880px;left:-34vw;top:-46vw;background:linear-gradient(145deg,#dbe9ff,#c7dcfb)}\n.ims-shell::after{width:420px;height:680px;right:-260px;bottom:-310px;background:linear-gradient(140deg,#dceaff,#f1f6ff);transform:rotate(17deg)}\n.ims-shell :is(button,input):focus-visible{outline:3px solid #9eb9ff;outline-offset:4px}\n.ims-stage{position:relative;min-width:0;min-height:520px;display:grid;place-items:center}\n.ims-fox{position:relative;width:100%;height:min(560px,66vh);min-height:360px}\n.ims-fox-canvas{position:absolute;inset:0;opacity:0;transition:opacity 360ms ease}\n.ims-fox-canvas.is-ready{opacity:1}\n.ims-fox-canvas canvas{display:block;width:100%;height:100%;pointer-events:none}\n.ims-fox-ground{position:absolute;width:48%;height:6%;left:26%;bottom:5%;border-radius:50%;background:#9db7eb42;filter:blur(14px)}\n.ims-fox-poster{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:0;transition:opacity 360ms ease}\n.ims-fox-poster.is-visible{opacity:1}\n.ims-card{width:min(100%,520px);justify-self:center;padding:clamp(30px,4vw,52px);border:1px solid #fff;border-radius:30px;background:var(--surface);box-shadow:0 28px 90px #a4bceb30;backdrop-filter:blur(14px)}\n.ims-card h1{margin:0 0 34px;font-size:clamp(32px,4.3vw,50px);line-height:1.03;letter-spacing:-.055em;font-weight:650}\n.ims-card p{margin:0}\n.ims-form{display:grid;gap:21px}\n.ims-field label{display:flex;justify-content:space-between;gap:8px;margin-bottom:9px;color:var(--muted);font-size:12px;font-weight:600;letter-spacing:.01em}\n.ims-input-wrap{position:relative;display:flex;align-items:center}\n.ims-input-wrap>svg{position:absolute;left:16px;width:19px;height:19px;color:#6f82ab;pointer-events:none;stroke-width:1.7}\n.ims-input-wrap input,.ims-code{appearance:none;width:100%;height:56px;border:1px solid var(--line);border-radius:11px;background:#fff;color:#243657;padding:0 16px 0 48px;font:inherit;font-size:16px;transition:border-color 160ms ease,box-shadow 160ms ease}\n.ims-input-wrap input::placeholder,.ims-code::placeholder{color:#9ba8c2;font-size:14px}\n.ims-input-wrap input:focus,.ims-code:focus{outline:none;border-color:#86a8fa;box-shadow:0 0 0 4px #779ae812}\n.ims-input-wrap input[name=password]{padding-right:52px}\n.ims-reveal{position:absolute;right:5px;width:42px;height:42px;display:grid;place-items:center;border:0;border-radius:8px;background:transparent;color:#8295bc;cursor:pointer}\n.ims-reveal:hover{background:#f3f6ff;color:#5570ad}\n.ims-reveal svg{width:19px;height:19px;stroke-width:1.7}\n.ims-submit{min-height:58px;margin-top:8px;display:flex;align-items:center;justify-content:center;gap:14px;border:0;border-radius:14px;background:linear-gradient(110deg,var(--accent-2),var(--accent));color:#fff;font:inherit;font-size:16px;font-weight:650;box-shadow:0 14px 28px #4c77f43b,inset 0 1px 2px #ffffff52;cursor:pointer;transition:transform 180ms ease,box-shadow 180ms ease}\n.ims-submit:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 18px 32px #4c77f450,inset 0 1px 2px #ffffff52}\n.ims-submit:active:not(:disabled){transform:translateY(1px)}\n.ims-submit:disabled{opacity:.64;cursor:wait}\n.ims-submit svg{width:19px;height:19px}\n.ims-code{height:66px;padding:0 18px;text-align:center;letter-spacing:.42em;font-size:26px;font-variant-numeric:tabular-nums}\n.ims-code::placeholder{font-size:26px;color:#c5cede}\n.ims-hint{margin-top:10px!important;color:#8894ad;font-size:12px}\n.ims-error{border:1px solid #f0d6d6;border-radius:9px;padding:11px 12px;background:#fff6f5;color:#a94444;font-size:13px;line-height:1.5}\n.ims-back{display:flex;align-items:center;justify-content:center;gap:8px;min-height:40px;border:0;border-radius:8px;background:transparent;color:#7e879b;font:inherit;font-size:12px;cursor:pointer}\n.ims-back:hover{background:#f2f5fa;color:#46669e}\n.ims-success{display:grid;gap:16px}\n.ims-success-mark{display:grid;place-items:center;width:54px;height:54px;border-radius:18px;background:#e7f7ed;color:#37a56c;font-size:27px}\n.ims-success p{color:var(--muted);font-size:14px;line-height:1.6}\n@media(max-width:900px){.ims-shell{grid-template-columns:minmax(0,1fr);padding:34px 24px;gap:10px}.ims-stage{min-height:340px}.ims-fox{height:360px}.ims-card{justify-self:stretch;margin:auto;max-width:560px}}\n@media(max-width:560px){.ims-shell{min-height:0;border-radius:24px;padding:25px 16px 30px}.ims-stage{min-height:260px}.ims-fox{height:280px;min-height:240px}.ims-card{padding:27px 22px 30px;border-radius:24px}.ims-card h1{font-size:35px;margin-bottom:27px}.ims-form{gap:18px}}\n@media(prefers-reduced-motion:reduce){.ims-shell *{transition:none!important;animation:none!important}}";
    document.head.appendChild(node);
    return () => { node.remove(); };
  }, []);
  return <main className="ims-shell">
    <div className="ims-stage"><PulseLoginMascot mood={mood} typing={typing} peeking={step === 'credentials' && showPassword} /></div>
    <section className="ims-card" aria-labelledby="ims-title">
      {step === 'success' ? <div className="ims-success">
        <div className="ims-success-mark"><Icon name="check" /></div>
        <h1 id="ims-title">You’re in</h1>
        <p>The sign-in flow is complete.</p>
        <button className="ims-back" type="button" onClick={reset}>Start again</button>
      </div> : <form className="ims-form" onSubmit={handleSubmit} aria-busy={submitting}
        onFocusCapture={event => {
          const field = event.target.closest('[data-login-field]')?.getAttribute('data-login-field');
          setFocused(field === 'email' || field === 'password' || field === 'otp' ? field : 'idle');
        }}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused('idle'); }}>
        <h1 id="ims-title">{step === 'otp' ? 'Check your inbox' : 'Sign in'}</h1>
        {step === 'otp' ? <div className="ims-field" data-login-field="otp">
          <label htmlFor="ims-code">Verification code <span>6 digits</span></label>
          <input className="ims-code" id="ims-code" name="code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required value={code}
            onChange={event => { setCode(event.target.value.replace(/\D/g, '').slice(0, 6)); reactToTyping(); }} placeholder="000000" />
          <p className="ims-hint">Use the code from your email.</p>
        </div> : <>
          <div className="ims-field" data-login-field="email">
            <label htmlFor="ims-email">Email</label>
            <div className="ims-input-wrap"><Icon name="user" /><input id="ims-email" name="email" type="email" autoComplete="username" required value={email}
              onChange={event => { setEmail(event.target.value); reactToTyping(); }} placeholder="name@company.com" autoCapitalize="none" spellCheck={false} disabled={submitting} /></div>
          </div>
          <div className="ims-field" data-login-field="password">
            <label htmlFor="ims-password">Password</label>
            <div className="ims-input-wrap"><Icon name="lock" /><input id="ims-password" name="password" autoComplete="current-password" type={showPassword ? 'text' : 'password'} required value={password}
              onChange={event => { setPassword(event.target.value); reactToTyping(); }} placeholder="Password" disabled={submitting} />
              <button className="ims-reveal" type="button" onClick={() => setShowPassword(current => !current)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword}><Icon name={showPassword ? 'eyeOff' : 'eye'} /></button>
            </div>
          </div>
        </>}
        {error && <p className="ims-error" role="alert">{error}</p>}
        <button className="ims-submit" type="submit" disabled={submitting}>
          <span>{submitting ? 'Working…' : step === 'otp' ? 'Sign in' : 'Continue'}</span>
          <Icon name="arrow" />
        </button>
        {step === 'otp' && <button className="ims-back" type="button" disabled={submitting} onClick={reset}><Icon name="back" />Back to sign in</button>}
      </form>}
    </section>
  </main>;
};

export default InteractiveMascotSignIn;
