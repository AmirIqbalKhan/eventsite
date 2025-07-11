import React from 'react';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4">
      <section className="relative w-full max-w-md glass-effect rounded-2xl p-4 sm:p-8 m-2 sm:m-4 mt-24">
        <div className="text-center mb-8">
          <h1 className="festival-section-title mb-2">Create Your Account</h1>
          <p className="festival-subtitle text-white/80">Join EventMingle and start discovering events!</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white/80 mb-2 font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="festival-input w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white/80 mb-2 font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="festival-input w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white/80 mb-2 font-medium">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="festival-input w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="festival-button w-full mt-4">Sign Up</button>
        </form>
        <div className="text-center mt-6">
          <span className="text-white/70">Already have an account?</span>{' '}
          <Link href="/signin" className="text-blue-300 hover:underline">Sign In</Link>
        </div>
      </section>
    </div>
  );
} 