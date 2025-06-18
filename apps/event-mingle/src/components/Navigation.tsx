'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none transition-all duration-700">
      <div
        className={
          'pointer-events-auto shadow-xl border border-white/10 transition-all duration-700 transition-colors transition-shadow rounded-full mt-4 mx-auto max-w-4xl w-[98%] sm:w-[95%] flex items-center px-2 sm:px-4 py-2 h-16 ' +
          (scrolled ? 'bg-white/5 backdrop-blur-2xl' : 'bg-white/10 backdrop-blur-2xl')
        }
        style={{ position: 'relative' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-tight mr-6 z-20">
          <span className={pacifico.className + ' text-xl sm:text-2xl md:text-3xl transition-all duration-700'}>Event&nbsp;Mingle</span>
        </Link>

        {/* Centered Nav Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {[
            { href: '/discover', label: 'Discover' },
            { href: '/chat', label: 'Chat' },
            { href: '/calendar', label: 'Calendar' },
            { href: '/profile', label: 'Profile' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white/80 hover:text-white font-medium transition-colors duration-200 px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 ml-auto z-20">
          <button className="text-white/70 hover:text-white text-xl transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white/20">
            <span role="img" aria-label="Notifications">🔔</span>
          </button>
          <Link href="/signup" className="border border-white/40 text-white/90 font-semibold px-5 py-2 rounded-full hover:bg-white/20 transition-colors duration-200">
            Sign Up
          </Link>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg animate-fade-in z-40 rounded-b-3xl">
            <div className="flex flex-col gap-2 py-6 px-6">
              {[
                { href: '/discover', label: 'Discover' },
                { href: '/chat', label: 'Chat' },
                { href: '/calendar', label: 'Calendar' },
                { href: '/profile', label: 'Profile' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 text-lg font-semibold py-2 px-2 rounded hover:bg-white/10 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/signup" className="border border-white/40 text-white/90 font-semibold px-5 py-2 rounded-full hover:bg-white/20 transition-colors duration-200 mt-2">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 