"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]);
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      className="perspective-[800px] flex justify-center items-center h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="transform-style-3d"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        <motion.div
          className="shadow-[0px_0px_50px_-7px_rgba(0,0,0,0.85)] rounded-lg bg-blue-500 w-[400px] h-[250px] flex items-center justify-center"
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
          }}
        >
          {/* content here */}
          <p className="text-white text-4xl font-bold">3D Card</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
