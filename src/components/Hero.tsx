
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center reveal">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-yellow-500"
      >
        ARSH SAIFI
      </motion.h1>

      <p className="text-gray-400 mt-6 max-w-xl">
        Full Stack Website Developer & Discord Systems Architect
      </p>
    </section>
  );
}
