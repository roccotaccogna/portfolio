/* eslint-disable no-unused-vars */
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

function HeroText() {
    const words = ["Sicure", "Moderne", "Scalabili"];
    const variants = {
        hidden: { opacity: 0, x: -50},
        visible: { opacity: 1, x: 0 },
    };

    return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* DESKTOP BREAKPOINT */}
        <div
          className="flex-col hidden md:flex c-space"
        >
            <motion.h1 
                className="text-4xl font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
            > 
                Rocco & Valerio
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p 
                    className="text-5xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9 }}
                >
                    2 Developers <br/> che si dedicano alla <br/> 
                    creazione di
                </motion.p>
                <motion.p 
                    className="text-4xl font-medium text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >
                    Soluzioni Web
                </motion.p>
                {/* ANIMATIONS */}
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.1 }}
                >
                    <FlipWords 
                        words={words}
                        className="font-black text-white text-8xl"
                    />
                </motion.div>
            </div>
        </div>
        {/* MOBILE BREAKPOINT */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p 
                className="text-4xl font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
            >
                Rocco & Valerio
            </motion.p>
            <div>
                <motion.p 
                    className="text-5xl font-black text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9 }}
                >
                    Costruendo
                </motion.p>
                <motion.p 
                    className="text-4xl font-black text-neutral-300"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                >
                    Applicazioni Web
                </motion.p>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.1 }}
                >
                    <FlipWords 
                        words={words}
                        className="text-white font-bold text-7xl"
                    />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroText;