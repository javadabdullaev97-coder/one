"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { W, H, REGIONS, ARAL_D, TASHKENT, CYCLE_ORDER } from "./uzbekistan-map.data";


export default function UzbekistanMap({ onActiveChange }: { onActiveChange?: (id: string) => void }) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  const [cycleIdx, setCycleIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;
    if (hovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCycleIdx(p => (p + 1) % CYCLE_ORDER.length);
    }, 2800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced, hovered]);

  const activeId = hovered ?? CYCLE_ORDER[cycleIdx];
  const regionName = REGIONS.find(r => r.id === activeId)?.name ?? "";

  useEffect(() => {
    onActiveChange?.(activeId);
  }, [activeId, onActiveChange]);

  return (
    <div
      className="relative w-full max-w-2xl mx-auto select-none"
      onPointerLeave={() => setHovered(null)}
    >
      {/* Region name label removed — shown in the side panel instead */}

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", overflow: "hidden" }}
      >
        <defs>
          <filter id="uz-region-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="uz-dot-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Clip to SVG bounds */}
          <clipPath id="uz-clip">
            <rect x="0" y="0" width={W} height={H} />
          </clipPath>
        </defs>

        <g clipPath="url(#uz-clip)">
          {/* Invisible rect to capture pointer events outside paths */}
          <rect
            x="0" y="0" width={W} height={H}
            fill="transparent"
            onPointerEnter={() => setHovered(null)}
            style={{ pointerEvents: "all" }}
          />

          {/* Aral Sea (water) */}
          <path
            d={ARAL_D}
            fill="rgba(40,100,160,0.08)"
            stroke="rgba(60,130,190,0.15)"
            strokeWidth={0.5}
            style={{ pointerEvents: "none" }}
          />

          {/* Region paths */}
          {REGIONS.map((r) => {
            const active = r.id === activeId;
            return (
              <path
                key={r.id}
                d={r.d}
                onPointerEnter={() => setHovered(r.id)}
                style={{
                  fill: active ? "var(--map-region-active-fill)" : "rgba(255,255,255,0.06)",
                  stroke: active ? "var(--map-region-active-stroke)" : "rgba(255,255,255,0.08)",
                  strokeWidth: active ? 1.5 : 1,
                  filter: active ? "url(#uz-region-glow)" : "none",
                  transition: "fill 280ms ease, stroke 280ms ease, stroke-width 280ms ease",
                  cursor: "default",
                  pointerEvents: "all",
                }}
              />
            );
          })}

          {/* Tashkent pulse rings */}
          {!reduced && (
            <>
              <motion.circle
                cx={TASHKENT.cx}
                cy={TASHKENT.cy}
                r={12}
                fill="none"
                stroke="var(--map-pulse-ring)"
                strokeWidth={1.2}
                initial={{ scale: 0.6, opacity: 0.7 }}
                animate={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                style={{ transformOrigin: `${TASHKENT.cx}px ${TASHKENT.cy}px`, pointerEvents: "none" }}
              />
              <motion.circle
                cx={TASHKENT.cx}
                cy={TASHKENT.cy}
                r={8}
                fill="none"
                stroke="var(--map-pulse-ring-soft)"
                strokeWidth={0.8}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 2.8, opacity: 0 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                style={{ transformOrigin: `${TASHKENT.cx}px ${TASHKENT.cy}px`, pointerEvents: "none" }}
              />
            </>
          )}

          {/* Tashkent dot */}
          <circle
            cx={TASHKENT.cx}
            cy={TASHKENT.cy}
            r={4.5}
            fill="var(--map-dot)"
            filter="url(#uz-dot-glow)"
            style={{ pointerEvents: "none" }}
          />

          {/* Tashkent label */}
          <text
            x={TASHKENT.cx + 10}
            y={TASHKENT.cy - 8}
            fontSize={11}
            fill="var(--map-label)"
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="0.14em"
            style={{ pointerEvents: "none" }}
          >
            TASHKENT
          </text>
        </g>
      </svg>
    </div>
  );
}
