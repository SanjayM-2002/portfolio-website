"use client";

import { useMotionValue, useAnimationFrame, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isMoving = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  const isMobile = useRef(false);

  useEffect(() => {

    const userAgent = navigator.userAgent || navigator.vendor;
    isMobile.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    // If it's a mobile device, don't render the Cursor component
    if (isMobile.current) {
      return;
    }
    
    const moveCursor = (event: MouseEvent) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
      lastX.current = event.clientX - 16;
      lastY.current = event.clientY - 16;
      isMoving.current = true;
    };

    const stopMoving = () => {
      isMoving.current = false;
      cursorX.set(lastX.current);
      cursorY.set(lastY.current);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseup", stopMoving);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseup", stopMoving);
    };
  }, [cursorX, cursorY]);

  useAnimationFrame((t, delta) => {
    if (isMoving.current) {
      const movementX = cursorX.get() - lastX.current;
      const movementY = cursorY.get() - lastY.current;
      const distance = Math.sqrt(movementX ** 2 + movementY ** 2);
  
      if (distance > 0) {
        const angle = Math.atan2(movementY, movementX);
        const speed = distance * 0.5; // Adjust the speed factor as needed
  
        cursorX.set(cursorX.get() + Math.cos(angle) * speed);
        cursorY.set(cursorY.get() + Math.sin(angle) * speed);
      }
  
      lastX.current = cursorX.get();
      lastY.current = cursorY.get();
    }
  });

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          width: 32,
          height: 32,
          mixBlendMode: "difference",
        }}
        className="bg-black/30 dark:bg-white/50 border rounded-full"
      />
    </div>
  );
};

export default Cursor;
