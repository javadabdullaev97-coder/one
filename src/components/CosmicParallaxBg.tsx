"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CosmicParallaxBgProps {
  children?: ReactNode;
  className?: string;
}

function generateStarBoxShadow(count: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 4000);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(", ");
}

export default function CosmicParallaxBg({
  children,
  className,
}: CosmicParallaxBgProps) {
  const [smallStars, setSmallStars] = useState<string>("");
  const [mediumStars, setMediumStars] = useState<string>("");
  const [bigStars, setBigStars] = useState<string>("");

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(300));
    setMediumStars(generateStarBoxShadow(80));
    setBigStars(generateStarBoxShadow(40));
  }, []);

  return (
    <div
      className={cn(
        "cosmic-parallax-container relative w-full min-h-screen overflow-hidden",
        className,
      )}
    >
      {/* Star layers */}
      <div
        className="cosmic-stars"
        style={{ boxShadow: smallStars }}
        aria-hidden="true"
      />
      <div
        className="cosmic-stars-medium"
        style={{ boxShadow: mediumStars }}
        aria-hidden="true"
      />
      <div
        className="cosmic-stars-large"
        style={{ boxShadow: bigStars }}
        aria-hidden="true"
      />

      {/* Horizon glow */}
      <div className="cosmic-horizon" aria-hidden="true">
        <div className="cosmic-horizon-glow" />
      </div>

      {/* Earth element */}
      <div className="cosmic-earth" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
