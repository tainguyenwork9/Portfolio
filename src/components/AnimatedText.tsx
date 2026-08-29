import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-x-2 gap-y-1", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
      })}
    </div>
  );
}

interface WordProps {
  word: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}

function Word({ word, progress, range }: WordProps) {
  const characters = useMemo(() => word.split(""), [word]);
  const amount = range[1] - range[0];
  const step = amount / word.length;

  return (
    <span className="relative inline-block">
      {characters.map((char, i) => {
        const start = range[0] + (step * i);
        const end = range[0] + (step * (i + 1));
        return <Character key={i} char={char} progress={progress} range={[start, end]} />;
      })}
    </span>
  );
}

interface CharacterProps {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <motion.span 
      className="relative inline-block"
      style={{ opacity }}
    >
      {char}
    </motion.span>
  );
}
