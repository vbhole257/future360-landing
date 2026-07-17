'use client'

import { MessageSquare, Search, Lightbulb, Rocket, BarChart2 } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery Call',
    desc: 'We understand your business, goals, target audience, and current challenges in a detailed consultation.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Research & Audit',
    desc: 'Deep dive into your market, competitors, and digital presence to identify opportunities and gaps.',
  },
  {
    icon: Lightbulb,
    step: '03',
    title: 'Strategy Building',
    desc: 'We craft a custom 360° growth strategy combining creativity, tech, and data-driven insights.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Execution',
    desc: 'Our team executes with precision — from content creation to campaigns, websites to branding.',
  },
  {
    icon: BarChart2,
    step: '05',
    title: 'Track & Optimise',
    desc: 'Continuous monitoring, reporting, and refinement to maximize your ROI over time.',
  },
]

export default function OurProcess() {
  return (
    <section id="process" className="bg-[#080f22] text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Process
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-cyan-500/40 to-transparent" />

          <div className="space-y-12">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Mobile line dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:text-right'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 hover:bg-white/8 transition-all duration-300">
                    <span className="text-blue-400/60 text-xs font-bold tracking-widest">STEP {step}</span>
                    <h3 className="text-white font-bold text-xl mt-1 mb-3">{title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>

                {/* Desktop center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-[#080f22]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
