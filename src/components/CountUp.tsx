"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  /** Delay in seconds before starting the count */
  delay?: number;
  /** If true, starts counting when element enters the viewport instead of on mount */
  triggerOnView?: boolean;
  className?: string;
}

export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1.2,
  delay = 0,
  triggerOnView = false,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(() => 0);
  const [started, setStarted] = useState(false);

  // If the user prefers reduced motion, jump straight to the final value.
  const displayValue = shouldReduce && started ? target : count;

  useEffect(() => {
    if (triggerOnView && !inView) return;
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay, triggerOnView, inView]);

  useEffect(() => {
    if (!started || shouldReduce) return;
    let start = 0;
    const step = target / (duration * 60);
    let frame: number;
    const animate = () => {
      start += step;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration, shouldReduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
