'use client'
import React, { useEffect, useRef } from 'react';

const COLORS = [
  '#e48bbd', // deeper pink
  '#7eb6e6', // deeper blue
  '#7ee6b6', // deeper green
  '#a88be4', // deeper purple
  '#e4e1b8', // deeper cream
];

const DOT_COUNT = 320;
const DOT_MIN_SIZE = 3;
const DOT_MAX_SIZE = 5;
const DOT_MIN_OPACITY = 0.18;
const DOT_MAX_OPACITY = 0.32;
const DOT_MIN_SPEED = 0.04;
const DOT_MAX_SPEED = 0.12;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function FestivalDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dotsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', resize);

    // Initialize dots
    dotsRef.current = Array.from({ length: DOT_COUNT }).map(() => {
      const size = randomBetween(DOT_MIN_SIZE, DOT_MAX_SIZE);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const opacity = randomBetween(DOT_MIN_OPACITY, DOT_MAX_OPACITY);
      const x = randomBetween(0, width);
      const y = randomBetween(0, height);
      const angle = randomBetween(0, 2 * Math.PI);
      const speed = randomBetween(DOT_MIN_SPEED, DOT_MAX_SPEED);
      return { x, y, size, color, opacity, angle, speed };
    });

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const dot of dotsRef.current) {
        // Move dot
        dot.x += Math.cos(dot.angle) * dot.speed;
        dot.y += Math.sin(dot.angle) * dot.speed;
        // Wrap around edges
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;
        // Draw dot
        ctx.save();
        ctx.globalAlpha = dot.opacity;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
        ctx.fillStyle = dot.color;
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        zIndex: 0,
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        display: 'block',
      }}
      aria-hidden="true"
    />
  );
} 