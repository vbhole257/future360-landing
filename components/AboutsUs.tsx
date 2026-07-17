'use client'

import Image from 'next/image'

export default function AboutUs() {
  const logos = [
    '/about/republic.png',
    '/about/dainik-bhaskar.png',
    '/about/ht.png',
    '/about/india-saga.png',
    '/about/dmn.png',
  ]

  return (
    <section id="about" className="bg-[#080f22] text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{ background: 'radial-gradient(ellipse at top right, #3b82f6, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
              <Image
                src="/about/teamwork.gif"
                alt="F360 Team"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f22]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">2023</p>
              <p className="text-xs text-blue-200">Founded in Indore</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">F360</span>
            </h2>

            <p className="text-white/70 mb-4 leading-relaxed">
              At F360 IT Solutions, we believe great work isn&apos;t just about going digital — it&apos;s about being <span className="text-white font-medium">impactful</span>. Founded in 2023 in Indore, we&apos;re a hybrid team combining creative firepower, strategic clarity, and cutting-edge tech to grow brands with purpose.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              From website development to AI-powered SEO, social media marketing, cloud, branding, and ad management — our <span className="text-blue-400 font-medium">360° service suite</span> is built to elevate businesses across education, e-commerce, housing, finance, and more.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              We leverage AI not just to optimise performance, but to personalise experiences, predict trends, and drive smarter decision-making. <span className="text-white font-medium">Strategy + Storytelling + AI = Future-ready growth.</span>
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-900/40"
            >
              Work With Us
            </a>

            <div className="mt-10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">As Featured In</p>
              <div className="flex flex-wrap gap-3">
                {logos.map((src, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-2 h-10 w-20 flex items-center justify-center">
                    <Image src={src} alt={`Media ${idx}`} width={60} height={24} className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
