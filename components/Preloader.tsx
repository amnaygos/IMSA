"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Auto-remove after animation sequence
    const timer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = "unset";
      if (onComplete) onComplete();
      
      // Remove from DOM after transition
      setTimeout(() => setIsRemoved(true), 1000);
    }, 4500); 

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      >
        <div className="relative">
          <svg 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 160 160" 
            className="w-24 h-24 lg:w-32 lg:h-32"
          >
            {/* SVG Path drawing animation using Framer Motion (pathLength) */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              stroke="#CAFF00"
              strokeWidth="0.5"
              fill="none"
              d="M64.86,121.83c-6.67,7.27-16.34,7.77-22.78,1.56-6.46-6.23-5.88-16.49.52-22.09,7.16-6.25,16.69-4.44,22.83,2.64,3.5,4.04,9.16,8.12,14.62,7.88,6.9-.3,12.34-5.41,16.75-9.7,6.4-6.21,16.27-5.55,21.83.7,5.85,6.58,5.01,16.61-2.29,22.16-6.94,5.27-15.83,3.42-21.95-3.61-3.44-3.95-8.87-7.9-14.34-7.71-5.51.19-11.45,4.09-15.19,8.16"
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
              stroke="#CAFF00"
              strokeWidth="0.5"
              fill="none"
              d="M146.27,70.25c-5.56-6.26-15.43-6.91-21.83-.7-4.42,4.28-9.85,9.4-16.75,9.7-4.22.18-7.91-2.02-11.13-4.57-3.52-2.79-6.18-6.58-10.42-8.41-.71-.31-1.42-.56-2.15-.76-.45-.13-.89-.24-1.35-.33-.38-.07-.75-.12-1.14-.16-.81-.09-1.62-.12-2.55-.07-3.49.19-6.97,1.52-9.78,4.24-4.42,4.28-9.85,9.4-16.75,9.7-5.46.24-11.12-3.84-14.62-7.88-6.14-7.08-15.67-8.89-22.83-2.64-6.4,5.6-6.99,15.86-.52,22.09,6.44,6.21,16.11,5.7,22.78-1.56,3.74-4.08,9.68-7.97,15.19-8.16,5.47-.19,10.9,3.76,14.34,7.71,2.42,2.78,5.28,4.71,8.28,5.75.07.02.14.03.2.06.81.27,1.63.5,2.46.63.6.1,1.21.11,1.82.14.33.01.65.05.98.04,4.23-.12,8.52-2.02,12-5.81,3.74-4.08,9.68-7.97,15.19-8.16,5.48-.19,10.9,3.76,14.34,7.71,6.12,7.03,15.01,8.88,21.95,3.61,7.3-5.55,8.14-15.57,2.29-22.16"
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.6 }}
              stroke="#CAFF00"
              strokeWidth="0.5"
              fill="none"
              d="M64.86,56.32c-6.67,7.27-16.34,7.77-22.78,1.56-6.46-6.23-5.88-16.49.52-22.09,7.16-6.25,16.69-4.44,22.83,2.64,3.5,4.04,9.16,8.12,14.62,7.88,6.9-.3,12.34-5.41,16.75-9.7,6.4-6.21,16.27-5.56,21.83.7,5.85,6.58,5.01,16.61-2.29,22.16-6.94,5.28-15.83,3.42-21.95-3.61-3.44-3.95-8.87-7.9-14.34-7.71-5.51.19-11.45,4.09-15.19,8.16"
            />
            
            {/* Final Fill-in (Instant White) */}
            <motion.path 
              initial={{ fillOpacity: 0 }}
              animate={{ fillOpacity: 1 }}
              transition={{ duration: 0.4, delay: 2.8, ease: "easeOut" }}
              fill="#fff"
              d="M64.86,121.83c-6.67,7.27-16.34,7.77-22.78,1.56-6.46-6.23-5.88-16.49.52-22.09,7.16-6.25,16.69-4.44,22.83,2.64,3.5,4.04,9.16,8.12,14.62,7.88,6.9-.3,12.34-5.41,16.75-9.7,6.4-6.21,16.27-5.55,21.83.7,5.85,6.58,5.01,16.61-2.29,22.16-6.94,5.27-15.83,3.42-21.95-3.61-3.44-3.95-8.87-7.9-14.34-7.71-5.51.19-11.45,4.09-15.19,8.16"
            />
            <motion.path 
              initial={{ fillOpacity: 0 }}
              animate={{ fillOpacity: 1 }}
              transition={{ duration: 0.4, delay: 2.8, ease: "easeOut" }}
              fill="#fff"
              d="M146.27,70.25c-5.56-6.26-15.43-6.91-21.83-.7-4.42,4.28-9.85,9.4-16.75,9.7-4.22.18-7.91-2.02-11.13-4.57-3.52-2.79-6.18-6.58-10.42-8.41-.71-.31-1.42-.56-2.15-.76-.45-.13-.89-.24-1.35-.33-.38-.07-.75-.12-1.14-.16-.81-.09-1.62-.12-2.55-.07-3.49.19-6.97,1.52-9.78,4.24-4.42,4.28-9.85,9.4-16.75,9.7-5.46.24-11.12-3.84-14.62-7.88-6.14-7.08-15.67-8.89-22.83-2.64-6.4,5.6-6.99,15.86-.52,22.09,6.44,6.21,16.11,5.7,22.78-1.56,3.74-4.08,9.68-7.97,15.19-8.16,5.47-.19,10.9,3.76,14.34,7.71,2.42,2.78,5.28,4.71,8.28,5.75.07.02.14.03.2.06.81.27,1.63.5,2.46.63.6.1,1.21.11,1.82.14.33.01.65.05.98.04,4.23-.12,8.52-2.02,12-5.81,3.74-4.08,9.68-7.97,15.19-8.16,5.48-.19,10.9,3.76,14.34,7.71,6.12,7.03,15.01,8.88,21.95,3.61,7.3-5.55,8.14-15.57,2.29-22.16"
            />
            <motion.path 
              initial={{ fillOpacity: 0 }}
              animate={{ fillOpacity: 1 }}
              transition={{ duration: 0.4, delay: 2.8, ease: "easeOut" }}
              fill="#fff"
              d="M64.86,56.32c-6.67,7.27-16.34,7.77-22.78,1.56-6.46-6.23-5.88-16.49.52-22.09,7.16-6.25,16.69-4.44,22.83,2.64,3.5,4.04,9.16,8.12,14.62,7.88,6.9-.3,12.34-5.41,16.75-9.7,6.4-6.21,16.27-5.56,21.83.7,5.85,6.58,5.01,16.61-2.29,22.16-6.94,5.28-15.83,3.42-21.95-3.61-3.44-3.95-8.87-7.9-14.34-7.71-5.51.19-11.45,4.09-15.19,8.16"
            />
          </svg>
          
          {/* Decorative Glow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-white blur-[100px] rounded-full opacity-10 pointer-events-none"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
