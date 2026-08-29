import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
}

export function Magnet({ children, padding = 100, disabled = false }: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!magnetRef.current || disabled) return;
    
    // Use rAF to throttle updates to 60fps
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!magnetRef.current) return;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      if (distance < padding) {
        const pull = 0.3;
        setPosition({ x: distanceX * pull, y: distanceY * pull });
      } else {
        setPosition((prev) => prev.x !== 0 || prev.y !== 0 ? { x: 0, y: 0 } : prev);
      }
    });
  }, [padding, disabled]);

  useEffect(() => {
    // Disable on touch devices
    if (disabled || window.matchMedia('(pointer: coarse)').matches) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, disabled]);

  return (
    <motion.div
      ref={magnetRef}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="gpu"
    >
      {children}
    </motion.div>
  );
}
