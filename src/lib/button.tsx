"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  scale?: number;
  tollerance?: number;
  speed?: number;
  borderRadius?: number;
}

export default function MagneticButton({
  children,
  scale = 1.05,
  tollerance = 0.3,
  speed = 300,
  borderRadius = 0,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX * tollerance,
      y: middleY * tollerance,
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{
        position: "relative",
        borderRadius: `${borderRadius}px`,
      }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y, scale: 1 }}
      whileHover={{ scale }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
        mass: 0.01,
        duration: speed / 100,
      }}
    >
      {children}
    </motion.div>
  );
}
