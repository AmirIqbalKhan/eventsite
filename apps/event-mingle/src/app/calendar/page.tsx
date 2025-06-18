import React from 'react'
import Link from 'next/link'

export default function CalendarPage() {
  return (
    <div className="min-h-screen px-2 sm:px-4">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4 pt-32">
          <h1 className="festival-title mb-4">Calendar</h1>
          <p className="festival-subtitle text-white/90">
            Never miss an event again
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="festival-section relative">
        <div className="festival-container relative z-40">
          <div className="flex justify-end mb-8">
            <div className="flex space-x-4">
              <button className="festival-button bg-white/10 hover:bg-white/20">
                <span className="flex items-center space-x-2">
                  <span>📅</span>
                  <span>Sync with Google Calendar</span>
                </span>
              </button>
              <button className="festival-button bg-white/10 hover:bg-white/20">
                <span className="flex items-center space-x-2">
                  <span>📅</span>
                  <span>Sync with Apple Calendar</span>
                </span>
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="grid grid-cols-7 gap-4 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-semibold text-white/70">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i + 1
                const hasEvent = [3, 7, 15, 22, 28].includes(day)
                return (
                  <div
                    key={day}
                    className={`aspect-square p-2 border border-white/10 rounded-lg ${
                      hasEvent ? 'bg-white/10' : ''
                    }`}
                  >
                    <div className="text-sm text-white/70">{day}</div>
                    {hasEvent && (
                      <div className="mt-1">
                        <div className="text-xs bg-white/20 text-white rounded px-1 truncate">
                          Event Name
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="festival-section relative">
        <div className="festival-container relative z-40">
          <h2 className="festival-section-title text-center mb-16">Upcoming Events</h2>
          <div className="space-y-6">
            {[
              {
                name: 'Tech Conference 2024',
                date: 'March 15, 2024',
                time: '9:00 AM - 5:00 PM',
                location: 'Convention Center',
              },
              {
                name: 'Team Building Workshop',
                date: 'March 22, 2024',
                time: '2:00 PM - 4:00 PM',
                location: 'Office Space',
              },
              {
                name: 'Networking Mixer',
                date: 'March 28, 2024',
                time: '6:00 PM - 9:00 PM',
                location: 'Downtown Lounge',
              },
            ].map((event, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{event.name}</h3>
                    <div className="space-y-1 text-white/70">
                      <p>📅 {event.date}</p>
                      <p>⏰ {event.time}</p>
                      <p>📍 {event.location}</p>
                    </div>
                  </div>
                  <button className="festival-button">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 