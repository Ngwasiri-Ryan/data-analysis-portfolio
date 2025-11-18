"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden transition duration-300 lg:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, hsla(215, 100%, 44%, 0.1), transparent 80%)`,
      }}
    />
  );
}
