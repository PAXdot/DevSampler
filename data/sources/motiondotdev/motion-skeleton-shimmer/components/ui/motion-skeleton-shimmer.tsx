"use client"

import { useEffect, useState, startTransition } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./motion-skeleton-shimmer-utils/index.css"

const COVER_HEIGHT = 120
const AVATAR = 56
const SHIMMER_A = "rgba(255, 255, 255, 0.06)"
const SHIMMER_B = "rgba(255, 255, 255, 0.12)"
const SHIMMER = `linear-gradient(90deg, ${SHIMMER_A} 25%, ${SHIMMER_B} 50%, ${SHIMMER_A} 75%)`
const SHIMMER_ANIMATE = { backgroundPosition: ["-200% 0", "200% 0"] }
const NAME = "Motion"
const HANDLE = "@motiondotdev"
const BIO =
  "Free and open source. Create stunning web animations for React, JavaScript and Vue."
const STATS = [
  { value: "127", label: "Posts" },
  { value: "11K", label: "Followers" },
  { value: "5", label: "Following" },
]

const stage: React.CSSProperties = {
  width: "100%",
  maxWidth: 360,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  padding: 20,
  boxSizing: "border-box",
}

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: 360,
  borderRadius: "16px",
  border: "1px solid var(--border)",
  backgroundColor: "var(--layer)",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
}

const cover: React.CSSProperties = {
  width: "100%",
  height: COVER_HEIGHT,
  background: "linear-gradient(135deg, var(--hue-4) 0%, var(--hue-3) 100%)",
}

const body: React.CSSProperties = {
  padding: "0 20px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 14,
}

const avatarWrap: React.CSSProperties = { marginTop: -28 }

const avatarRing: React.CSSProperties = {
  width: AVATAR,
  height: AVATAR,
  borderRadius: "50%",
  backgroundColor: "var(--layer)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const avatar: React.CSSProperties = {
  width: AVATAR,
  height: AVATAR,
  borderRadius: "50%",
  background: "#f5e725",
  border: "3px solid var(--layer)",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
}

const identity: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
}

const nameStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  fontWeight: 600,
  color: "var(--white)",
  lineHeight: 1.2,
}

const handleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 13,
  color: "rgba(255, 255, 255, 0.45)",
  lineHeight: 1.2,
}

const bioStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.5,
  color: "rgba(255, 255, 255, 0.55)",
}

const statsRow: React.CSSProperties = {
  display: "flex",
  gap: 8,
}

const stat: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px 4px",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  flex: 1,
  gap: 2,
}

const statValue: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: "var(--white)",
  lineHeight: 1.3,
}

const statLabel: React.CSSProperties = {
  fontSize: 11,
  color: "rgba(255, 255, 255, 0.35)",
  lineHeight: 1.3,
}

const followBase: React.CSSProperties = {
  width: "100%",
  padding: "10px 0",
  fontSize: 14,
  fontWeight: 600,
  fontFamily: "inherit",
}

const followButton: React.CSSProperties = {
  ...followBase,
  borderRadius: "10px",
  border: "none",
  background: "var(--hue-4)",
  color: "var(--white)",
  cursor: "pointer",
}

const reloadButton: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: "10px",
  background: "transparent",
  color: "var(--white)",
  padding: "8px 20px",
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "inherit",
  cursor: "pointer",
}

const hiddenCopy: React.CSSProperties = { visibility: "hidden" }

function MotionMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1260 454"
      fill="currentColor"
      style={{ width: "65%", height: "65%" }}
    >
      <path d="M475.753 0L226.8 453.6L0 453.6L194.392 99.4116C224.526 44.5081 299.724 0 362.353 0L475.753 0Z" />
      <path d="M1031.93 113.4C1031.93 50.7709 1082.7 0 1145.33 0C1207.96 0 1258.73 50.7709 1258.73 113.4C1258.73 176.029 1207.96 226.8 1145.33 226.8C1082.7 226.8 1031.93 176.029 1031.93 113.4Z" />
      <path d="M518.278 0L745.078 0L496.125 453.6L269.325 453.6L518.278 0Z" />
      <path d="M786.147 0L1012.95 0L818.555 354.188C788.422 409.092 713.223 453.6 650.594 453.6L537.194 453.6L786.147 0Z" />
    </svg>
  )
}

function ShimmerBlock({
  duration,
  borderRadius = "6px",
  style,
  children,
}: {
  duration: number
  borderRadius?: string | number
  style?: React.CSSProperties
  children?: React.ReactNode
}) {
  return (
    <motion.div
      animate={SHIMMER_ANIMATE}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
      style={{
        borderRadius,
        background: SHIMMER,
        backgroundSize: "200% 100%",
        overflow: "hidden",
        ...style,
      }}
    >
      <div style={hiddenCopy}>{children}</div>
    </motion.div>
  )
}

function ShimmerRect({
  width,
  height,
  borderRadius = 6,
  duration,
}: {
  width: number | string
  height: number | string
  borderRadius?: number | string
  duration: number
}) {
  return (
    <motion.div
      animate={SHIMMER_ANIMATE}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
      style={{
        width,
        height,
        borderRadius,
        background: SHIMMER,
        backgroundSize: "200% 100%",
        flexShrink: 0,
      }}
    />
  )
}

function LoadedCard() {
  return (
    <div style={card}>
      <div style={cover} />
      <div style={body}>
        <div style={avatarWrap}>
          <div style={avatar}>
            <MotionMark />
          </div>
        </div>
        <div style={identity}>
          <h3 style={nameStyle}>{NAME}</h3>
          <p style={handleStyle}>{HANDLE}</p>
        </div>
        <p style={bioStyle}>{BIO}</p>
        <div style={statsRow}>
          {STATS.map((item) => (
            <div style={stat} key={item.label}>
              <span style={statValue}>{item.value}</span>
              <span style={statLabel}>{item.label}</span>
            </div>
          ))}
        </div>
        <button type="button" style={followButton}>
          Follow
        </button>
      </div>
    </div>
  )
}

function SkeletonCard({ shimmerDuration }: { shimmerDuration: number }) {
  return (
    <div style={card}>
      <ShimmerRect width="100%" height={COVER_HEIGHT} borderRadius={0} duration={shimmerDuration} />
      <div style={body}>
        <div style={avatarWrap}>
          <div style={avatarRing}>
            <ShimmerRect
              width={AVATAR - 6}
              height={AVATAR - 6}
              borderRadius="50%"
              duration={shimmerDuration}
            />
          </div>
        </div>
        <ShimmerBlock duration={shimmerDuration} borderRadius="6px" style={{ alignSelf: "flex-start" }}>
          <div style={identity}>
            <h3 style={nameStyle}>{NAME}</h3>
            <p style={handleStyle}>{HANDLE}</p>
          </div>
        </ShimmerBlock>
        <ShimmerBlock duration={shimmerDuration} borderRadius="6px">
          <p style={bioStyle}>{BIO}</p>
        </ShimmerBlock>
        <div style={statsRow}>
          {STATS.map((item) => (
            <ShimmerBlock
              key={item.label}
              duration={shimmerDuration}
              borderRadius="8px"
              style={{ flex: 1 }}
            >
              <div style={stat}>
                <span style={statValue}>{item.value}</span>
                <span style={statLabel}>{item.label}</span>
              </div>
            </ShimmerBlock>
          ))}
        </div>
        <ShimmerBlock duration={shimmerDuration} borderRadius="10px">
          <div style={{ ...followBase, textAlign: "center" }}>Follow</div>
        </ShimmerBlock>
      </div>
    </div>
  )
}

export function SkeletonShimmer({
  shimmerDuration = 1.5,
  loadDelay = 2500,
}: {
  shimmerDuration?: number
  loadDelay?: number
} = {}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return
    const id = window.setTimeout(() => {
      startTransition(() => setLoaded(true))
    }, loadDelay)
    return () => window.clearTimeout(id)
  }, [loaded, loadDelay])

  return (
    <div style={stage}>
      <AnimatePresence mode="wait">
        {loaded ? (
          <motion.div
            key="loaded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ ["--wipe" as string]: "-100%" }}
          >
            <LoadedCard />
          </motion.div>
        ) : (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <SkeletonCard shimmerDuration={shimmerDuration} />
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" style={reloadButton} onClick={() => startTransition(() => setLoaded(false))}>
        Reload
      </button>
    </div>
  )
}

export default SkeletonShimmer
