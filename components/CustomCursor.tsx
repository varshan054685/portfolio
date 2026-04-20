'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover detection for interactive elements
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      document.body.addEventListener('mouseenter', handleMouseEnter);
      document.body.addEventListener('mouseleave', handleMouseLeave);

      // Add listeners to interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, .cursor-pointer'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleElementHover);
        el.addEventListener('mouseleave', handleElementLeave);
      });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Cursor glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="w-12 h-12 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(0,243,255,0.6) 0%, rgba(188,19,254,0.4) 50%, transparent 70%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? 0.3 : 0,
          }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div 
            className="w-24 h-24 rounded-full border border-cyan-400/30"
            style={{
              boxShadow: '0 0 20px rgba(0,243,255,0.3), inset 0 0 20px rgba(0,243,255,0.1)',
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
