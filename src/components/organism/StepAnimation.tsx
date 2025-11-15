import React, { useState, useEffect, useRef } from "react";

const StepAnimation: React.FC = () => {
  const [progress, setProgress] = useState(0); // 0 a 100
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Control del "play/pause"
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current!);
            return 100;
          }
          return prev + 1;
        });
      }, 50); // velocidad de avance
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePlayPause = () => setIsPlaying((prev) => !prev);

  const handleNext = () => setProgress((prev) => Math.min(prev + 10, 100));

  const handlePrev = () => setProgress((prev) => Math.max(prev - 10, 0));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white space-y-6">
      <div className="relative w-80 h-10 bg-gray-700 rounded-full overflow-hidden">
        {/* Línea de recorrido */}
        <div
          className="absolute top-0 left-0 h-10 bg-yellow-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
        {/* Punto */}
        <div
          className="absolute top-1/2 w-5 h-5 bg-yellow-500 rounded-full shadow-lg transition-transform duration-100 ease-linear"
          style={{
            transform: `translateX(${progress * 3}px) translateY(-50%)`,
          }}
        />
      </div>

      <div className="flex items-center space-x-4 text-xl">
        <button
          onClick={handlePrev}
          className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-full"
        >
          ⬅️
        </button>

        <button
          onClick={handlePlayPause}
          className="px-3 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        <button
          onClick={handleNext}
          className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-full"
        >
          ➡️
        </button>
      </div>

      <p className="text-sm text-gray-400">{progress}%</p>
    </div>
  );
};

export default StepAnimation;
