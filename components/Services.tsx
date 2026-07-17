'use client'

import { Globe, Search, Share2, Palette, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    short: 'Responsive, SEO-friendly & high-converting websites tailored to your goals.',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-900/20 to-cyan-900/10',
  },
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    short: 'Rank higher, reach the right audience through AI-powered SEO strategies.',
    gradient: 'from-green-500 to-teal-500',
    bg: 'from-green-900/20 to-teal-900/10',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    short: 'Platform-specific content, campaigns, and engagement across all channels.',
    gradient: 'from-pink-500 to-rose-500',
    bg: 'from-pink-900/20 to-rose-900/10',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    short: 'Logos, brand books, and visual identity that make you unforgettable.',
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'from-purple-900/20 to-indigo-900/10',
  },
  {
    icon: Target,
    title: 'Ads Management',
    short: 'Performance-driven Google & Meta ad campaigns focused on ROI.',
    gradient: 'from-orange-500 to-yellow-500',
    bg: 'from-orange-900/20 to-yellow-900/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#050d1f] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Click any service to learn more about how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, short, gradient, bg }, i) => (
            <Link
              key={i}
              href="/know-more"
              className={`group relative bg-gradient-to-br ${bg} border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 mb-5`}>
                <Icon size={22} className="text-white" />
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{short}</p>

              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                Know More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Corner gradient */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
