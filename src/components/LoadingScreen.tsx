"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fillDuration, setFillDuration] = useState(1.6);

  useEffect(() => {
    const alreadyLoaded = document.readyState === "complete";
    const dur = alreadyLoaded ? 0.65 : 1.6;
    setFillDuration(dur);

    const hide = () => setVisible(false);

    if (alreadyLoaded) {
      setTimeout(hide, dur * 1000 + 300);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 350), { once: true });
      setTimeout(hide, (dur + 0.5) * 1000);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative" style={{ width: 340, filter: "sepia(1) hue-rotate(320deg) saturate(2) brightness(0.5)" }}>
            {/* Dim ghost layer — always visible */}
            <Image
              src="/Loading.png"
              alt=""
              width={340}
              height={340}
              style={{ width: "340px", height: "auto", opacity: 0.1 }}
              priority
            />
            {/* Fill layer — reveals bottom to top */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              style={{ opacity: 0.5 }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: fillDuration, ease: "easeInOut" }}
            >
              <Image
                src="/Loading.png"
                alt=""
                width={340}
                height={340}
                style={{ width: "340px", height: "auto" }}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
