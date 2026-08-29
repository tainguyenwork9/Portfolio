import React from 'react';
import { cn } from '../lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Magnet } from './Magnet';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
}

export function ContactButton({ className, onClick, href, children = "Liên hệ ngay" }: ContactButtonProps) {
  const content = (
    <>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded-full transition-all duration-300 group-hover:scale-105" />
      <div className="absolute inset-[1px] bg-[#0C0C0C] rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </>
  );

  const classes = cn(
    "group relative flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white overflow-hidden",
    className
  );

  return (
    <Magnet padding={50}>
      {href ? (
        <a href={href} className={classes}>
          {content}
        </a>
      ) : (
        <button onClick={onClick} className={classes}>
          {content}
        </button>
      )}
    </Magnet>
  );
}
