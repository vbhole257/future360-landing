'use client'

import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { Users, Briefcase, Trophy, Clock } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Team Members', count: 12, suffix: '+', color: 'from-blue-500 to-cyan-500' },
  { icon: Clock, label: 'Years of Experience', count: 2, suffix: '+', color: 'from-purple-500 to-blue-500' },
  { icon: Briefcase, label: 'Completed Projects', count: 50, suffix: '+', color: 'from-cyan-500 to-teal-500' },
  { icon: Trophy, label: 'Awards & Recognition', count: 7, suffix: '+', color: 'from-orange-400 to-yellow-500' },
]

export default function ExpertiseStats() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#050d1f] text-white py-24 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">
            Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Expertise
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, count, suffix, color }, i) => (
            <div
              key={i}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-400/40 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 mb-4 mx-auto`}>
                <Icon size={24} className="text-white" />
              </div>
              <div className={`text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br ${color}`}>
                {inView ? (
                  <CountUp end={count} duration={2.5} suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </div>
              <p className="text-white/60 text-sm font-medium">{label}</p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
