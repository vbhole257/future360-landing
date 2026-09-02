'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Globe,
  Search,
  Share2,
  Bot,
  Palette,
  Cloud,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website & App Development',
    description: 'Build fast, secure, and scalable websites and mobile applications.',
    keyServices: [
      'Business & E-commerce Websites',
      'Android & iOS Applications',
      'Cross-Platform Development',
      'UI/UX Design',
      'CMS Solutions',
      'Maintenance & Support',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-900/30 to-cyan-900/15',
    accentColor: '#3b82f6',
  },
  {
    icon: Search,
    title: 'Search Engine Optimisation (SEO)',
    description: 'Increase visibility and drive qualified traffic with modern search optimisation.',
    keyServices: [
      'Technical, On-Page & Off-Page SEO',
      'Local SEO',
      'AI Search Optimisation (AEO & GEO)',
      'Keyword Research',
      'SEO Audits',
      'Schema & Voice Search Optimisation',
    ],
    gradient: 'from-green-500 to-teal-500',
    bg: 'from-green-900/30 to-teal-900/15',
    accentColor: '#10b981',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Grow your brand through strategic content, community engagement, and paid social advertising.',
    keyServices: [
      'Social Media Strategy',
      'Content Creation',
      'Community Management',
      'Paid Social Advertising',
      'Campaign Management',
      'Social Media Optimisation',
    ],
    gradient: 'from-pink-500 to-rose-500',
    bg: 'from-pink-900/30 to-rose-900/15',
    accentColor: '#ec4899',
  },
  {
    icon: Bot,
    title: 'AI Solutions & Automation',
    description: 'Automate business processes with intelligent AI-powered solutions.',
    keyServices: [
      'AI Chatbots & Virtual Assistants',
      'AI Content & Image Generation',
      'Workflow Automation',
      'AI Knowledge Base Development',
      'Custom AI Integrations',
    ],
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'from-purple-900/30 to-indigo-900/15',
    accentColor: '#8b5cf6',
  },
  {
    icon: Palette,
    title: 'Branding & Creative Design',
    description: 'Create impactful brand identities that build trust and recognition.',
    keyServices: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines',
      'Marketing Collateral',
      'Brand Positioning',
    ],
    gradient: 'from-orange-500 to-yellow-500',
    bg: 'from-orange-900/30 to-yellow-900/15',
    accentColor: '#f97316',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Deploy secure and scalable cloud infrastructure for business growth.',
    keyServices: [
      'Cloud Migration',
      'Infrastructure Management',
      'Data Backup & Recovery',
      'Cloud Security',
      'Performance Monitoring',
    ],
    gradient: 'from-cyan-500 to-blue-500',
    bg: 'from-cyan-900/30 to-blue-900/15',
    accentColor: '#06b6d4',
  },
]

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section id="services" className="bg-[#050d1f] text-white py-20 relative overflow-hidden scroll-mt-20">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[90px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-3">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-xs sm:text-sm">
            Hover or tap any service card to view complete capabilities and key services.
          </p>
        </div>

        {/* Compact 3D Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(
            ({ icon: Icon, title, description, keyServices, gradient, bg, accentColor }, i) => {
              const isFlipped = flippedIndex === i

              return (
                <div
                  key={title}
                  className="perspective w-full h-[245px]"
                  onClick={() => toggleFlip(i)}
                >
                  <div
                    className={`card-wrapper relative w-full h-full rounded-2xl ${
                      isFlipped ? 'is-flipped' : ''
                    }`}
                  >
                    {/* ================= FRONT FACE (Icon + Header only, no background on icon) ================= */}
                    <div
                      className={`card-face absolute inset-0 bg-gradient-to-br ${bg} border border-white/10 rounded-2xl p-5 flex flex-col justify-center items-center text-center overflow-hidden shadow-lg hover:border-white/25 transition-all`}
                    >
                      {/* Icon without any background color */}
                      <div className="mb-3">
                        <Icon size={40} className="text-blue-400 group-hover:text-cyan-300 transition-colors" strokeWidth={1.8} />
                      </div>

                      {/* Header */}
                      <h3 className="text-lg sm:text-xl font-bold text-white font-playfair leading-snug group-hover:text-blue-400 transition-colors max-w-[220px]">
                        {title}
                      </h3>

                      {/* Corner gradient */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient} opacity-15 rounded-2xl blur-xl pointer-events-none`}
                      />
                    </div>

                    {/* ================= BACK FACE (Other data: Description + Key Services + CTA) ================= */}
                    <div className="card-face card-back absolute inset-0 bg-[#0b1729] border border-blue-500/30 rounded-2xl px-4 py-0 flex flex-col justify-center gap-y-3 overflow-hidden shadow-xl">
                      {/* Key Services Grid */}
                      <div className="m-0 p-0">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 block mb-1.5">
                          Key Services
                        </span>
                        <ul className="grid grid-cols-2 gap-x-2.5 gap-y-1.5 text-white/90">
                          {keyServices.map((ks, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{
                                  backgroundColor: accentColor,
                                  boxShadow: `0 0 5px ${accentColor}`,
                                }}
                              />
                              <span className="leading-tight text-white/90 text-[11px]">{ks}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact CTA */}
                      <div className="m-0 p-0">
                        <Link
                          href="/process"
                          onClick={(e) => e.stopPropagation()}
                          className={`w-full inline-flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${gradient} !text-white shadow-sm hover:shadow-blue-500/30 hover:scale-[1.01] transition-all`}
                        >
                          <span className="!text-white">Get In Touch</span>
                          <ArrowRight size={12} className="!text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}
