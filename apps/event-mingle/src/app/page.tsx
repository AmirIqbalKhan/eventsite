import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen px-2 sm:px-4">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center section-blend-fade">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        {/* Gradient fade at the bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #18181b 100%)'
             }} />
        <div className="relative z-20 text-center px-4">
          <h1 className="festival-title mb-4 sm:mb-6">Discover Events, Share Your Own</h1>
          <p className="festival-subtitle text-white/90 mb-8">
            Connect with people who share your interests at events that matter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/discover" className="festival-button">
              Discover Events
            </Link>
            <Link href="/create" className="festival-button">
              Create Event
            </Link>
          </div>
        </div>
        <div className="section-gradient-fade" />
      </section>

      {/* Featured Events */}
      <section className="festival-section section-bg relative section-blend-fade section-blend-fade-top">
        {/* Gradient fade at the bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #18181b 100%)'
             }} />
        <div className="festival-container relative z-20">
          <div className="text-center mb-16">
            <h2 className="festival-section-title">Featured Events</h2>
            <p className="festival-section-subtitle">Discover the most exciting events happening near you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: 'Summer Music Festival',
                image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop',
                location: 'Central Park, NY',
                date: 'June 15, 2024',
                category: 'Music',
                price: '$150'
              },
              {
                id: 2,
                title: 'Tech Conference 2024',
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
                location: 'Convention Center, SF',
                date: 'July 20, 2024',
                category: 'Technology',
                price: '$299'
              },
              {
                id: 3,
                title: 'Food & Wine Festival',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
                location: 'Downtown, LA',
                date: 'August 5, 2024',
                category: 'Food',
                price: '$75'
              }
            ].map((event) => (
              <div key={event.id} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <div className="festival-image-container">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="festival-image group-hover:scale-110"
                    />
                    <div className="festival-image-overlay"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                        {event.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white/90 transition-colors">
                    {event.title}
                  </h3>
                  <Link href={`/event/${event.id}`} className="festival-button inline-block">
                    Get Tickets
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-gradient-fade" />
      </section>

      {/* Event Categories */}
      <section className="festival-section section-bg relative section-blend-fade section-blend-fade-top">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        {/* Gradient fade at the bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #18181b 100%)'
             }} />
        <div className="festival-container relative z-20">
          <div className="text-center mb-16">
            <h2 className="festival-section-title">Explore Categories</h2>
            <p className="festival-section-subtitle">Find events that match your interests</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: 'Music',
                icon: '🎵',
                image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop',
                count: '1.2k Events'
              },
              {
                name: 'Technology',
                icon: '💻',
                image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop',
                count: '800 Events'
              },
              {
                name: 'Food',
                icon: '🍽️',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
                count: '500 Events'
              },
              {
                name: 'Art',
                icon: '🎨',
                image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2070&auto=format&fit=crop',
                count: '300 Events'
              }
            ].map((category) => (
              <Link href={`/category/${category.name.toLowerCase()}`} key={category.name} className="group">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="festival-image-container">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="festival-image group-hover:scale-110"
                    />
                    <div className="festival-image-overlay"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <span className="text-4xl mb-4">{category.icon}</span>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-white/70">{category.count}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="section-gradient-fade" />
      </section>

      {/* How It Works */}
      <section className="festival-section section-bg relative section-blend-fade section-blend-fade-top">
        {/* Gradient fade at the bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #18181b 100%)'
             }} />
        <div className="festival-container relative z-20">
          <div className="text-center mb-16">
            <h2 className="festival-section-title">How It Works</h2>
            <p className="festival-section-subtitle">Three simple steps to start your event journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Discover Events',
                description: 'Browse through thousands of events and find the ones that match your interests'
              },
              {
                icon: '🎟️',
                title: 'Get Tickets',
                description: 'Purchase tickets securely and get instant confirmation'
              },
              {
                icon: '🤝',
                title: 'Connect & Share',
                description: 'Meet new people and share your experiences with friends'
              }
            ].map((step, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-gradient-fade" />
      </section>

      {/* Newsletter */}
      <section className="festival-section section-bg relative section-blend-fade section-blend-fade-top">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        {/* Gradient fade at the bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #18181b 100%)'
             }} />
        <div className="festival-container relative z-20 text-center">
          <div className="glass-effect rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="festival-section-title">Stay Updated</h2>
              <p className="festival-section-subtitle">
                Get notified about new events and exclusive offers
              </p>
            </div>
            <form className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="festival-input flex-1"
                />
                <button type="submit" className="festival-button">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="section-gradient-fade" />
      </section>

      {/* Footer */}
      <footer className="section-bg text-white py-12 sm:py-16 relative section-blend-fade-top">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="festival-container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">EventMingle</h3>
              <p className="text-white/70">
                Connect with people who share your interests at events that matter.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/discover" className="text-white/70 hover:text-white transition-colors">Discover</Link></li>
                <li><Link href="/chat" className="text-white/70 hover:text-white transition-colors">Chat</Link></li>
                <li><Link href="/calendar" className="text-white/70 hover:text-white transition-colors">Calendar</Link></li>
                <li><Link href="/profile" className="text-white/70 hover:text-white transition-colors">Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-white/70 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/feedback" className="text-white/70 hover:text-white transition-colors">Feedback</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-white/70 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/accessibility" className="text-white/70 hover:text-white transition-colors">Accessibility</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
            <p>© 2024 EventMingle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 