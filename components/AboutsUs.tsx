'use client'

import Image from 'next/image'

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#080f22] text-white py-24 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, #3b82f6, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/30">
              <Image
                src="/Assets/Images/office.jpg"
                alt="Future 360 IT Solutions Office Workspace in Indore"
                width={700}
                height={525}
                className="w-full h-auto object-cover"
                priority
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
              Company Overview
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Future 360
              </span>
            </h2>

            <p className="text-white/70 mb-4 leading-relaxed">
              At F360 IT Solutions, we believe great work isn&apos;t just about going digital—it&apos;s about creating meaningful impact. Founded in 2023 in Indore, we are a hybrid team that combines creative excellence, strategic thinking, and cutting-edge technology to help brands grow with purpose.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              From website development and AI-powered SEO to social media marketing, cloud solutions, branding, and advertising management, our 360° suite of services is designed to empower businesses across industries, including education, e-commerce, housing and construction, finance, news, and digital content.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              But we don&apos;t stop at delivering results. We build brands, shape narratives, and create meaningful digital experiences while contributing to communities and proudly celebrating Bharat&apos;s rich cultural and civilizational heritage.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              We leverage AI not only to optimise performance but also to personalise customer experiences, predict market trends, and enable smarter, faster, and more scalable decision-making for our clients. <br /><br />
              <span className="text-white font-medium text-lg">Strategy + Storytelling + AI = Future-Ready Growth.</span>
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                <h3 className="text-blue-400 font-semibold mb-2">Our Mission</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Our mission is to simplify digital growth for modern businesses. We combine creative marketing, powerful technology, and actionable strategies to help brands cut through the noise, reach the right audience, and grow faster than ever before.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                <h3 className="text-blue-400 font-semibold mb-2">Our Vision</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We envision a future where digital growth is smart, sustainable, and accessible to all—a future where brands don&apos;t just survive online but thrive with confidence, clarity, and measurable results.
                </p>
              </div>
            </div>

            <a
              href="/#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-blue-900/40"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
