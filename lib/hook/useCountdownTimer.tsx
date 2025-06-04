//lib/hook/useCountdownTimer.tsx
"use client";
import { useEffect, useRef, useState } from "react";

export const useCountdownTimer = (initialSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds * 1000);
  const [isFinished, setIsFinished] = useState(false);
  const [restartKey, setRestartKey] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const start = () => {
    startTimeRef.current = performance.now();
    const update = (now: number) => {
      if (startTimeRef.current === null) return;

      const elapsed = now - startTimeRef.current;
      const newTimeLeft = Math.max(initialSeconds * 1000 - elapsed, 0);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft > 0) {
        rafRef.current = requestAnimationFrame(update);
      } else {
        setIsFinished(true);
      }
    };
    rafRef.current = requestAnimationFrame(update);
  };

  const resetTimer = () => {
    console.log("restart");
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTimeLeft(initialSeconds * 1000);
    setIsFinished(false);
    setRestartKey((prev) => prev + 1);
    start();
  };

  useEffect(() => {
    start();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [initialSeconds, restartKey, start]);

  const seconds = Math.floor(timeLeft / 1000);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);

  return {
    seconds,
    milliseconds,
    isFinished,
    resetTimer,
    restartKey,
  };
};
