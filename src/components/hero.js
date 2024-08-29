import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./about";

const Hero = () => {
  const title = "Chordz";
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const waveAnimation = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const scrollIndicatorAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="font-times bg-stone-100 text-stone-800 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <header className="absolute top-0 left-0 w-full p-4 flex items-center justify-start">
        <Button />
      </header>
      <section className="relative flex flex-col items-center justify-center h-full w-full">
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl font-extrabold flex relative select-none text-puce bg-clip-text"
          variants={typingAnimation}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              whileHover={{
                rotate: [0, 10, -10, 0],
                scale: 1.1,
                color: "#B5A4A3",
                transition: { duration: 0.3 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.svg
          className="absolute left-0 bottom-[-0.5rem] md:bottom-[-1.5rem] lg:bottom-[-0.5rem]"
          width="100%"
          height="20"
          viewBox="0 0 600 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 15 C30 5, 60 25, 90 15 C120 5, 150 25, 180 15 C210 5, 240 25, 270 15 C300 5, 330 25, 360 15 C390 5, 420 25, 450 15 C480 5, 510 25, 540 15 C570 5, 600 25, 630 15"
            stroke="#BCA88E"
            strokeWidth="5"
            variants={waveAnimation}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </section>
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          variants={scrollIndicatorAnimation}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center">
            <div className="border border-stone-800 rounded-full w-8 h-16 flex items-center justify-center">
              <motion.div
                className="bg-stone-800 rounded-full w-3 h-3 shadow-md"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>
            <span className="text-stone-800 text-xs mt-2 font-sans select-none">Scroll</span>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Hero;
