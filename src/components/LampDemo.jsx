/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-200 to-slate-700 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl">
        Codice è <br /> Arte
      </motion.h1>
    </LampContainer>
  );
}
