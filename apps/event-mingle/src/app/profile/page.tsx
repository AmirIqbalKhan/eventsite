import React from 'react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen px-2 sm:px-4">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center mb-8">
        <div className="relative z-10 festival-container pt-32 text-center">
          <h1 className="festival-title mb-4">My Profile</h1>
          <p className="festival-subtitle text-white/90">
            View and manage your event journey
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="festival-section relative">
        <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto mt-4 z-40">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="w-32 h-32 bg-white/10 rounded-full border-4 border-white/20"></div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-white/70 mb-4">Software Engineer | Tech Enthusiast</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="festival-button">Edit Profile</button>
                <button className="festival-button-secondary">Share Profile</button>
              </div>
            </div>
          </div>

          {/* Profile Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Me */}
            <div className="festival-card p-6">
              <h2 className="festival-section-title text-2xl mb-4">About Me</h2>
              <p className="text-white/80 mb-4">
                Passionate about technology and networking. Love attending tech conferences
                and meetups. Always looking to connect with like-minded professionals.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-white/60">📍</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white/60">💼</span>
                  <span>Tech Company Inc.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white/60">🎓</span>
                  <span>Computer Science, Stanford</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="festival-card p-6">
              <h2 className="festival-section-title text-2xl mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Technology',
                  'Networking',
                  'AI/ML',
                  'Startups',
                  'Web Development',
                  'Cloud Computing',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Event History */}
            <div className="festival-card p-6">
              <h2 className="festival-section-title text-2xl mb-4">Event History</h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Tech Conference 2023',
                    date: 'December 2023',
                    role: 'Attendee',
                  },
                  {
                    name: 'Startup Weekend',
                    date: 'November 2023',
                    role: 'Participant',
                  },
                  {
                    name: 'AI Workshop',
                    date: 'October 2023',
                    role: 'Speaker',
                  },
                ].map((event, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-white">{event.name}</h3>
                      <p className="text-sm text-white/60">{event.date}</p>
                    </div>
                    <span className="text-sm bg-white/10 text-white px-2 py-1 rounded">
                      {event.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Matches */}
            <div className="festival-card p-6">
              <h2 className="festival-section-title text-2xl mb-4">Suggested Matches</h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Sarah Johnson',
                    match: '95%',
                    interests: ['Technology', 'AI/ML', 'Startups'],
                  },
                  {
                    name: 'Mike Chen',
                    match: '88%',
                    interests: ['Web Development', 'Cloud Computing'],
                  },
                  {
                    name: 'Emily Brown',
                    match: '82%',
                    interests: ['Networking', 'Startups'],
                  },
                ].map((match, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                    <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{match.name}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {match.interests.map((interest) => (
                          <span
                            key={interest}
                            className="text-xs bg-white/10 text-white px-2 py-0.5 rounded"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white/80">
                        {match.match} Match
                      </div>
                      <button className="festival-button-secondary text-xs mt-1">
                        Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 