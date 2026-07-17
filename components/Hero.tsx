'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const services = [
  '🌐 Website Development',
  '📱 Social Media Management',
  '🔍 Search Engine Optimization',
  '🎨 Branding & Identity Design',
  '📢 Ads Management (Paid Media)',
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050d1f]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Future 360 IT Solutions
        </div>

        {/* Main tagline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4 font-playfair">
          Innovate.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Integrate.
          </span>{' '}
          Elevate.
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          We combine creative marketing, powerful tech, and AI-driven strategies to help your brand grow faster than ever before.
        </p>

        {/* Services list */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((s, i) => (
            <span
              key={i}
              className="bg-white/5 border border-white/10 text-white/80 text-sm px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all duration-200"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:-translate-y-0.5"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200 group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
