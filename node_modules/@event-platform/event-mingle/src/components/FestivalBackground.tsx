'use client'

import React, { useEffect, useRef } from "react";

const COLORS = [
  "#00c3ff", // blue
  "#3a7bd5", // blue
  "#ff6a88", // pink
  "#6f00ff", // purple
  "#00ffb3", // green
  "#ffb347", // orange
];

const DOT_COUNT = 40;
const DOT_MIN_SIZE = 10;
const DOT_MAX_SIZE = 32;
const DOT_MIN_OPACITY = 0.08;
const DOT_MAX_OPACITY = 0.18;
const ANIMATION_DURATION = 30; // seconds

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const FestivalBackground: React.FC = () => {
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const animate = () => {
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        const x = randomBetween(0, 100);
        const y = randomBetween(0, 100);
        dot.animate(
          [
            { left: dot.style.left, top: dot.style.top },
            { left: `${x}%`, top: `${y}%` },
          ],
          {
            duration: ANIMATION_DURATION * 1000,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
      });
    };
    const interval = setInterval(animate, ANIMATION_DURATION * 1000);
    animate();
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 0,
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 30%, #00c3ff 0%, #3a7bd5 30%, #6f00ff 60%, #ff6a88 100%)",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: DOT_COUNT }).map((_, i) => {
        const size = randomBetween(DOT_MIN_SIZE, DOT_MAX_SIZE);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const opacity = randomBetween(DOT_MIN_OPACITY, DOT_MAX_OPACITY);
        const left = randomBetween(0, 100);
        const top = randomBetween(0, 100);
        return (
          <div
            key={i}
            ref={el => { dotsRef.current[i] = el!; }}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              opacity,
              filter: "blur(1.5px)",
              transition: `left ${ANIMATION_DURATION}s linear, top ${ANIMATION_DURATION}s linear`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FestivalBackground; 