'use client'

import { ExternalLink, Play } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Brand Launch',
    category: 'Social Media',
    thumbnail: '/work/project1.jpg',
    link: 'https://www.instagram.com/f360itsolutions',
    description: 'Full social media strategy + reels for a fashion brand',
  },
  {
    title: 'Real Estate Campaign',
    category: 'Ads Management',
    thumbnail: '/work/project2.jpg',
    link: 'https://www.instagram.com/f360itsolutions',
    description: '3x lead generation through targeted Meta ads',
  },
  {
    title: 'EdTech Website',
    category: 'Web Development',
    thumbnail: '/work/project3.jpg',
    link: 'https://www.instagram.com/f360itsolutions',
    description: 'Next.js website with LMS integration',
  },
  {
    title: 'Restaurant Branding',
    category: 'Branding',
    thumbnail: '/work/project4.jpg',
    link: 'https://www.instagram.com/f360itsolutions',
    description: 'Complete brand identity — logo, menu, social presence',
  },
  {
    title: 'Finance Startup SEO',
    category: 'SEO',
    thumbnail: '/work/project5.jpg',
    link: 'https://www.instagram.com/f360itsolutions',
    description: 'Ranked 15+ keywords on page 1 in 90 days',
  },
  {
    title: 'News Portal Growth',
    category: 'Social Media',
    thumbnail: '/work/project6.jpg',
    link: 'https://www.instagram.com/f360itsolutions',
    description: '10x organic reach in 60 days through reels strategy',
  },
]

const categoryColors: Record<string, string> = {
  'Social Media': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Ads Management': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Web Development': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Branding': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'SEO': 'bg-green-500/20 text-green-300 border-green-500/30',
}

export default function OurWork() {
  return (
    <section id="work" className="bg-[#050d1f] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Work
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Click any project to view the full reel or case study
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#0b1729] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/30 block"
            >
              {/* Thumbnail */}
              <div className="relative h-52 bg-gradient-to-br from-blue-900/40 to-[#080f22] flex items-center justify-center overflow-hidden">
                {/* Placeholder gradient since no images yet */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, hsl(${(i * 47 + 200) % 360}, 70%, 30%), hsl(${(i * 47 + 240) % 360}, 70%, 20%))`
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-blue-600/50 transition-all duration-300">
                    <Play size={22} className="text-white ml-1" />
                  </div>
                  <span className="text-white/60 text-xs">View Project</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-3 py-1 rounded-full border font-medium ${categoryColors[project.category] || 'bg-blue-500/20 text-blue-300 border-blue-500/30'}`}>
                    {project.category}
                  </span>
                  <ExternalLink size={14} className="text-white/30 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
