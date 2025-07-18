/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function EmailButton() {

    const [copied, setCopied] = useState(false);
    const email = "roccotaccogna@hotmail.com";

    const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full 
                 font-extralight bg-slate-700 w-[12rem] 
                 cursor-pointer overflow-hidden"
    >
        <AnimatePresence mode="wait">
            {copied ? (
                <motion.p
                    className="flex items-center justify-center gap-2"
                    key="copied"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                >
                    <img 
                        src="assets/copy-done.svg" 
                        alt="copy icon"
                        className="w-5" 
                    />
                    Email è stata copiata
                </motion.p>
            ) : (
            <motion.p
                className="flex items-center justify-center gap-2"
                key="copy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <img 
                    src="assets/copy.svg" 
                    alt="copy icon"
                    className="w-5" 
                />
                Copia Email
            </motion.p>
        )}
        </AnimatePresence>
    </motion.button>
  )
}

export default EmailButton;