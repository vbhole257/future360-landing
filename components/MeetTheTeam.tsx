'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Team Member 1',
    position: 'Co-Founder & CEO',
    memeCaption: 'When the client says can you make the logo bigger',
    emoji: '😭',
  },
  {
    name: 'Team Member 2',
    position: 'Co-Founder & CTO',
    memeCaption: 'Me at 2AM debugging code that was working fine yesterday',
    emoji: '👨‍💻',
  },
  {
    name: 'Team Member 3',
    position: 'Head of Marketing',
    memeCaption: 'Watching our client Instagram reach go from 100 to 10K',
    emoji: '🚀',
  },
  {
    name: 'Team Member 4',
    position: 'Lead Designer',
    memeCaption: 'Client: Use more whitespace. Also client: Why is it so empty?',
    emoji: '🎨',
  },
]

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo layer */}
      <div className={`transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
        <div className="relative bg-gradient-to-br from-blue-900/60 to-[#080f22] h-72 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-4xl font-bold text-white">
            {member.name.charAt(0)}
          </div>
        </div>
        <div className="bg-[#0b1729] p-5 border-t border-white/10">
          <h3 className="text-white font-semibold text-lg">{member.name}</h3>
          <p className="text-blue-400 text-sm mt-1">{member.position}</p>
        </div>
      </div>

      {/* Meme overlay layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#1a0533] to-[#050d1f] flex flex-col items-center justify-center p-6 transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-6xl mb-4">{member.emoji}</div>
        <p className="text-white font-bold text-center text-base leading-snug mb-3">
          &ldquo;{member.memeCaption}&rdquo;
        </p>
        <p className="text-blue-400 text-sm font-semibold mt-2">— {member.name}</p>
        <div className="mt-4 bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs px-3 py-1 rounded-full">
          {member.position}
        </div>
      </div>

      {/* Border */}
      <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${hovered ? 'border-blue-500' : 'border-white/10'}`} />
    </div>
  )
}

export default function MeetTheTeam() {
  return (
    <section id="team" className="bg-[#080f22] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            The People Behind F360
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Team
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Hover over a card to see our true personality 😄
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* Know More Button */}
        <div className="text-center mt-14">
          <Link
            href="/know-more"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-blue-900/40 group"
          >
            Know More About F360
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-white/30 text-sm mt-3">Our story, process &amp; services in detail</p>
        </div>
      </div>
    </section>
  )
}
