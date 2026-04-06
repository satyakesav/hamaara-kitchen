"use client";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

export default function SpiceParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: 5 + (i / 16) * 90 + (Math.random() - 0.5) * 8,
        delay: Math.random() * 10,
        duration: 9 + Math.random() * 8,
        size: 2 + Math.random() * 3,
        opacity: 0.12 + Math.random() * 0.2,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            bottom: "-8px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "#C8A84B",
            opacity: p.opacity,
            willChange: "transform",
            animation: `particleFloat ${p.duration}s ${p.delay}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
