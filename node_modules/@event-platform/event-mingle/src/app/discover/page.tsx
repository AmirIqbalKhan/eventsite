import React from 'react'
import Link from 'next/link'

export default function DiscoverPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4 pt-32">
          <h1 className="festival-title mb-4 sm:mb-6">Discover Events</h1>
          <p className="festival-subtitle text-white/90 mb-8">
            Find and join events that match your interests
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="festival-section relative">
        <div className="festival-container relative z-40">
          <div className="glass-effect rounded-xl p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <select className="festival-select">
                <option value="">Event Category</option>
                <option value="music">Music</option>
                <option value="tech">Technology</option>
                <option value="food">Food & Drink</option>
                <option value="art">Art & Culture</option>
              </select>
              <select className="festival-select">
                <option value="">Distance</option>
                <option value="5">Within 5 miles</option>
                <option value="10">Within 10 miles</option>
                <option value="25">Within 25 miles</option>
                <option value="50">Within 50 miles</option>
              </select>
              <select className="festival-select">
                <option value="">Date</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="weekend">This Weekend</option>
                <option value="week">This Week</option>
              </select>
              <select className="festival-select">
                <option value="">Price Range</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="festival-section relative">
        <div className="festival-container relative z-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                title: 'Summer Music Festival',
                image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop',
                location: 'Central Park, NY',
                date: 'June 15, 2024',
                category: 'Music'
              },
              {
                id: 2,
                title: 'Tech Conference 2024',
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop',
                location: 'Convention Center, SF',
                date: 'July 20, 2024',
                category: 'Technology'
              },
              {
                id: 3,
                title: 'Food & Wine Festival',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
                location: 'Downtown, LA',
                date: 'August 5, 2024',
                category: 'Food'
              },
              {
                id: 4,
                title: 'Art Exhibition',
                image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=2070&auto=format&fit=crop',
                location: 'Modern Art Museum',
                date: 'September 10, 2024',
                category: 'Art'
              },
              {
                id: 5,
                title: 'Comedy Night',
                image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2070&auto=format&fit=crop',
                location: 'Comedy Club, Chicago',
                date: 'October 1, 2024',
                category: 'Entertainment'
              },
              {
                id: 6,
                title: 'Sports Tournament',
                image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
                location: 'Sports Complex',
                date: 'November 15, 2024',
                category: 'Sports'
              }
            ].map((event) => (
              <div key={event.id} className="festival-card group">
                <div className="festival-image-container">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="festival-image group-hover:scale-110"
                  />
                  <div className="festival-image-overlay"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/70">{event.category}</span>
                    <span className="text-sm text-white/70">{event.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-white/70 mb-4">{event.location}</p>
                  <Link href={`/event/${event.id}`} className="festival-button inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="festival-section relative">
        <div className="festival-container text-center relative z-40">
          <div className="glass-effect rounded-xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h2 className="festival-section-title">Stay Updated</h2>
            <p className="festival-section-subtitle mb-8">
              Get notified about new events in your area
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="festival-input flex-1"
                />
                <button type="submit" className="festival-button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 