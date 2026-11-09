import { useRef, useCallback } from "react";
import { motion, useSpring } from "motion/react";

const PANEL_COUNT = 22;
const WAVE_SPRING = { stiffness: 160, damping: 22, mass: 0.6 };
const SCENE_SPRING = { stiffness: 80, damping: 22, mass: 1 };
const Z_SPREAD = 42;
const SIGMA = 2.8;

const PANEL_IMAGES = [
  "https://cdn.21st.dev/assets/mirror/0d/0d6dab54e9f4766eab1e8f8547f61dba0b074cfa11c5a9caf2cff99bef30ae16.jpg",
  "https://cdn.21st.dev/assets/mirror/df/dfda6b4ebc863405586605a7cb890471014475415a29edd52146711d239ea3c0.jpg",
  "https://cdn.21st.dev/assets/mirror/41/41c7e06a81d52b9cdd2cc2fbb6026584bfd16cc132854f587466d3eaab89c3f4.jpg",
  "https://cdn.21st.dev/assets/mirror/55/55d266a6cccee9a6ec557e72e95f6100ed8db13e4dada26176f0455d085704b1.jpg",
  "https://cdn.21st.dev/assets/mirror/af/af8af20b571811682fe2cd0d5639e83177c5c524443bd80cc392ee4ae43d02ae.jpg",
  "https://cdn.21st.dev/assets/mirror/1b/1b740251716ae93090835562839820816f7aee04f6b3f585a482f4efd191d325.jpg",
  "https://cdn.21st.dev/assets/mirror/5b/5b79aecf01db9bd3abecfb1637d529cfd361a7ea628039f5706dc3f402f0804d.jpg",
  "https://cdn.21st.dev/assets/mirror/63/636e2e9ced306e758d3e73dcc9505d16a4398dca891b54c1c49283a412ab14b4.jpg",
  "https://cdn.21st.dev/assets/mirror/72/725876e8644efb645d1f46b6925265796b18574736f97a50ab3bc6ca90893683.jpg",
  "https://images.unsplash.com/photo-1510784722466-f2aa240c3c4a?w=400&q=80",
  "https://cdn.21st.dev/assets/mirror/3d/3d19b9066704cb781451f344634c472634554ebafb48b517add0e05a61236acd.jpg",
  "https://cdn.21st.dev/assets/mirror/78/7809706c819e529e7b12c3a5165e986623b4c4b6fe82bcc4976751790222edc4.jpg",
  "https://cdn.21st.dev/assets/mirror/b2/b2dcc75d7a64252563716782eeb70e7e22ed398d107030ccc024243e9cddecf9.jpg",
  "https://cdn.21st.dev/assets/mirror/8a/8a81dec3e292c610b8778c6c7adc39be97f21c210a599d8ccd2679c424c7ddf7.jpg",
  "https://cdn.21st.dev/assets/mirror/aa/aa6204c2bdd790e2a60b80816b9e9e481b605357e4da1e0290203de592bb8bbf.jpg",
  "https://cdn.21st.dev/assets/mirror/f0/f06fe0b71eddddfb7e02945cfd29aaea4b5385f26f4f0469c0b465bfa1bac59b.jpg",
  "https://cdn.21st.dev/assets/mirror/e9/e91ba427ad4aee72869842eb6bd37de4d0ec78e07be4c8ba9ba4266ed2f833ec.jpg",
  "https://cdn.21st.dev/assets/mirror/8e/8e646f3354fdff11a4af08ef8f2c7c1b3daccab4fc970a350152a73127ed1dc1.jpg",
  "https://cdn.21st.dev/assets/mirror/6c/6cf402cf7a987bea99576f4c982779e5850771b3f2204187862bb22ba346ea6c.jpg",
  "https://cdn.21st.dev/assets/mirror/79/7907490d919f60d2f73be97bb8924f20dda7819f4bb96692a95fc24b8a2eaec9.jpg",
  "https://cdn.21st.dev/assets/mirror/32/320881e8fbbc3142a000e24847128c18f42f19192657f5ef4a1671a6405eb182.jpg",
  "https://cdn.21st.dev/assets/mirror/81/811af7356e0a6917d59c37f1ba21b299ac521c0b91e9d6d09ff697876ea03532.jpg",
];

const GRADIENT_OVERLAYS = [
  "linear-gradient(135deg, rgba(99,55,255,0.55) 0%, rgba(236,72,153,0.45) 100%)",
  "linear-gradient(135deg, rgba(6,182,212,0.55) 0%, rgba(59,130,246,0.45) 100%)",
  "linear-gradient(135deg, rgba(245,158,11,0.55) 0%, rgba(239,68,68,0.45) 100%)",
  "linear-gradient(135deg, rgba(16,185,129,0.45) 0%, rgba(6,182,212,0.55) 100%)",
  "linear-gradient(135deg, rgba(236,72,153,0.55) 0%, rgba(245,158,11,0.45) 100%)",
  "linear-gradient(135deg, rgba(59,130,246,0.55) 0%, rgba(99,55,255,0.45) 100%)",
  "linear-gradient(135deg, rgba(239,68,68,0.45) 0%, rgba(236,72,153,0.55) 100%)",
  "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(16,185,129,0.55) 100%)",
  "linear-gradient(135deg, rgba(99,55,255,0.45) 0%, rgba(6,182,212,0.55) 100%)",
  "linear-gradient(135deg, rgba(245,158,11,0.45) 0%, rgba(16,185,129,0.55) 100%)",
  "linear-gradient(135deg, rgba(239,68,68,0.55) 0%, rgba(245,158,11,0.45) 100%)",
  "linear-gradient(135deg, rgba(99,55,255,0.55) 0%, rgba(59,130,246,0.45) 100%)",
  "linear-gradient(135deg, rgba(16,185,129,0.55) 0%, rgba(99,55,255,0.45) 100%)",
  "linear-gradient(135deg, rgba(236,72,153,0.45) 0%, rgba(59,130,246,0.55) 100%)",
  "linear-gradient(135deg, rgba(6,182,212,0.55) 0%, rgba(245,158,11,0.45) 100%)",
  "linear-gradient(135deg, rgba(59,130,246,0.45) 0%, rgba(16,185,129,0.55) 100%)",
  "linear-gradient(135deg, rgba(245,158,11,0.55) 0%, rgba(99,55,255,0.45) 100%)",
  "linear-gradient(135deg, rgba(239,68,68,0.45) 0%, rgba(6,182,212,0.55) 100%)",
  "linear-gradient(135deg, rgba(99,55,255,0.45) 0%, rgba(236,72,153,0.55) 100%)",
  "linear-gradient(135deg, rgba(16,185,129,0.45) 0%, rgba(245,158,11,0.55) 100%)",
  "linear-gradient(135deg, rgba(236,72,153,0.55) 0%, rgba(239,68,68,0.45) 100%)",
  "linear-gradient(135deg, rgba(59,130,246,0.55) 0%, rgba(6,182,212,0.45) 100%)",
];

function Panel({
  index,
  total,
  waveY,
  scaleY,
}: {
  index: number;
  total: number;
  waveY: ReturnType<typeof useSpring>;
  scaleY: ReturnType<typeof useSpring>;
}) {
  const t = index / (total - 1);
  const baseZ = (index - (total - 1)) * Z_SPREAD;

  const w = 200 + t * 80;
  const h = 280 + t * 120;

  const opacity = 0.25 + t * 0.75;
  const imageUrl = PANEL_IMAGES[index % PANEL_IMAGES.length];
  const gradient = GRADIENT_OVERLAYS[index % GRADIENT_OVERLAYS.length];

  return (
    <motion.div
      className="absolute rounded-xl pointer-events-none overflow-hidden"
      style={{
        width: w,
        height: h,
        marginLeft: -w / 2,
        marginTop: -h / 2,
        translateZ: baseZ,
        y: waveY,
        scaleY,
        transformOrigin: "bottom center",
        opacity,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Aesthetic gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradient,
          mixBlendMode: "multiply",
        }}
      />
      {/* Subtle dark vignette for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.32) 100%)",
        }}
      />
      {/* Border glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          border: `1px solid rgba(255,255,255,${0.08 + t * 0.22})`,
          boxSizing: "border-box",
        }}
      />
    </motion.div>
  );
}

export default function StackedPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  const waveYSprings = Array.from({ length: PANEL_COUNT }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring(0, WAVE_SPRING)
  );

  const scaleYSprings = Array.from({ length: PANEL_COUNT }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSpring(1, WAVE_SPRING)
  );

  const rotY = useSpring(-42, SCENE_SPRING);
  const rotX = useSpring(18, SCENE_SPRING);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      isHovering.current = true;

      const cx = (e.clientX - rect.left) / rect.width;
      const cy = (e.clientY - rect.top) / rect.height;

      rotY.set(-42 + (cx - 0.5) * 14);
      rotX.set(18 + (cy - 0.5) * -10);

      const cursorCardPos = cx * (PANEL_COUNT - 1);

      waveYSprings.forEach((spring, i) => {
        const dist = Math.abs(i - cursorCardPos);
        const influence = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
        spring.set(-influence * 70);
      });

      scaleYSprings.forEach((spring, i) => {
        const dist = Math.abs(i - cursorCardPos);
        const influence = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
        spring.set(0.35 + influence * 0.65);
      });
    },
    [rotY, rotX, waveYSprings, scaleYSprings]
  );

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    rotY.set(-42);
    rotX.set(18);
    waveYSprings.forEach((s) => s.set(0));
    scaleYSprings.forEach((s) => s.set(1));
  }, [rotY, rotX, waveYSprings, scaleYSprings]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: "900px" }}
    >
      <motion.div
        style={{
          rotateY: rotY,
          rotateX: rotX,
          transformStyle: "preserve-3d",
          position: "relative",
          width: 0,
          height: 0,
        }}
      >
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <Panel
            key={i}
            index={i}
            total={PANEL_COUNT}
            waveY={waveYSprings[i]}
            scaleY={scaleYSprings[i]}
          />
        ))}
      </motion.div>
    </div>
  );
}