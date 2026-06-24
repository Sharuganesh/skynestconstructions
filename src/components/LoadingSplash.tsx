import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.asset.json";

export function LoadingSplash() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("skynest_splash_seen") === "1") return;
      sessionStorage.setItem("skynest_splash_seen", "1");
    } catch {}
    setShow(true);
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-gradient-hero"
          style={{ perspective: 1200 }}
        >
          {/* drifting glow orbs */}
          <motion.div
            className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary-glow/30 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl"
            animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* sweeping light beam */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
            initial={{ x: "-100%", skewX: -20 }}
            animate={{ x: "220%" }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: 1 }}
          />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ rotateY: -180, scale: 0.5, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 1.2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative"
              >
                <img
                  src={logo.url}
                  alt="Sky Nest"
                  className="h-32 w-32 object-contain drop-shadow-[0_10px_40px_rgba(125,211,252,0.55)] sm:h-40 sm:w-40"
                />
              </motion.div>
              {/* glow ring */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-full"
                animate={{ boxShadow: ["0 0 0 0 rgba(125,211,252,0.0)", "0 0 80px 20px rgba(125,211,252,0.35)", "0 0 0 0 rgba(125,211,252,0.0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-6 font-[Playfair_Display] text-3xl font-bold tracking-wide text-white sm:text-4xl"
            >
              {"Sky Nest".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.7 + i * 0.06, duration: 0.5 }}
                  className="inline-block"
                >
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-2 text-[11px] uppercase tracking-[0.4em] text-white/80"
            >
              Build with Trust
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 2, ease: "easeInOut" }}
              className="mt-6 h-[2px] w-48 origin-left bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}