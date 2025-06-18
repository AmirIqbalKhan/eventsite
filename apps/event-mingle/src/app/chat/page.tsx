import React from 'react'
import Link from 'next/link'

export default function ChatPage() {
  return (
    <div className="min-h-screen px-2 sm:px-4">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center mb-8">
        <div className="relative z-10 text-center px-4 pt-32">
          <h1 className="festival-title mb-4">Messages</h1>
          <p className="festival-subtitle text-white/90">
            Connect with event organizers and attendees
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="festival-section relative">
        <div className="festival-container flex flex-col lg:flex-row justify-center relative z-40">
          <div className="glass-effect rounded-2xl overflow-hidden p-0 max-w-5xl w-full min-h-[400px] lg:min-h-[600px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-[400px] lg:h-[600px]">
              {/* Chat List */}
              <div className="col-span-1 lg:col-span-4 border-r border-white/10 bg-white/5">
                <div className="p-4 border-b border-white/10">
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                  />
                </div>
                <div className="overflow-y-auto h-[calc(600px-73px)]">
                  {/* Chat List Items */}
                  {[1, 2, 3].map((chat) => (
                    <div
                      key={chat}
                      className="p-4 border-b border-white/10 hover:bg-white/10 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">Chat {chat}</h3>
                          <p className="text-sm text-white/70 truncate">
                            Last message preview...
                          </p>
                        </div>
                        <div className="text-xs text-white/50">2m ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Window */}
              <div className="col-span-1 lg:col-span-8 flex flex-col bg-white/5">
                {/* Chat Header */}
                <div className="p-4 border-b border-white/10 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-white">Chat Name</h3>
                    <p className="text-sm text-white/70">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Message Bubbles */}
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-lg p-3 max-w-[70%]">
                      <p>Hello! How are you?</p>
                      <span className="text-xs text-white/50">10:30 AM</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-white/20 rounded-lg p-3 max-w-[70%]">
                      <p>I'm good, thanks! How about you?</p>
                      <span className="text-xs text-white/50">10:31 AM</span>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50"
                    />
                    <button className="festival-button">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 