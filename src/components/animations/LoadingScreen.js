import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing systems...");

  useEffect(() => {
    const statuses = [
      "Initializing systems...",
      "Connecting to neural interface...",
      "Loading cybernetic enhancements...",
      "Calibrating visual matrix...",
      "Establishing secure connection...",
      "Rendering virtual environment...",
      "Access granted. Welcome."
    ];

    // Simulate loading process
    let interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Update status text at certain progress points
        const newProgress = prevProgress + (2 + Math.random() * 3); // Faster loading
        const statusIndex = Math.floor((newProgress / 100) * (statuses.length - 1));
        setStatusText(statuses[Math.min(statusIndex, statuses.length - 1)]);
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-cyber-dark flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-cyber font-bold mb-2">
            <span className="neon-text">System</span>{" "}
            <span className="neon-text-blue">Boot</span>{" "}
            <span className="neon-text-purple">Sequence</span>
          </h1>
          <div className="text-cyber-teal text-xl font-code">
            <span className="animate-pulse mr-2">▋</span>
            {statusText}
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="relative h-4 w-full bg-cyber-dark border border-cyber-blue rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-blue"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
          />
          <div className="absolute inset-0 grid grid-cols-10 gap-0 pointer-events-none opacity-50">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-r border-cyber-blue"></div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-sm font-code">
          <div className="text-cyber-blue">{Math.round(progress)}%</div>
          <div className="text-cyber-pink">{progress < 100 ? 'Loading...' : 'Complete'}</div>
        </div>

        {/* Matrix-like falling code effect in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <MatrixRain />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyber-pink opacity-70"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyber-blue opacity-70"></div>
      </div>
    </div>
  );
};

const MatrixRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => {
        const duration = 1 + Math.random() * 3;
        const delay = Math.random() * 2;
        const left = `${Math.random() * 100}%`;
        
        return (
          <div
            key={i}
            className="absolute top-0 text-cyber-green text-xs"
            style={{
              left,
              animation: `matrixRain ${duration}s linear ${delay}s infinite`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>{String.fromCharCode(33 + Math.floor(Math.random() * 94))}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default LoadingScreen;