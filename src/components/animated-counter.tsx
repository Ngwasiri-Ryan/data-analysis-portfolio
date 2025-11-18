"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  value: number;
};

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1 second
    const frameRate = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.round(value * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [value]);

  return <span className="font-code">{count}</span>;
}
