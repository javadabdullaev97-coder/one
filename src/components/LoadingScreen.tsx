"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ filter: "brightness(0)", opacity: 0.2 }}
            animate={{ filter: "brightness(1.2)", opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.2 }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
