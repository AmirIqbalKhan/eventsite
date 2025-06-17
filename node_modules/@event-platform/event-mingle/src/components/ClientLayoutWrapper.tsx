'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import FestivalBackground from '@/components/FestivalBackground';
import FestivalDotsBackground from '@/components/FestivalDotsBackground';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === '/') {
    return (
      <>
        <FestivalBackground />
        {children}
      </>
    );
  }
  return (
    <div className="festival-gradient-bg">
      <FestivalDotsBackground />
      {children}
    </div>
  );
} 