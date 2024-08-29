import React, { useEffect } from "react";
import styles from "./style.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorSize = 60;
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse.x, mouse.y]);

  return (
    <motion.div
      className={`${styles.cursor}`}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    >
      <div className={styles.vinyl}>
        <div className={styles.innerDisco}></div>
        <div className={styles.stripesDisco}></div>
        <div className={styles.center}></div>
      </div>
    </motion.div>
  );
}
