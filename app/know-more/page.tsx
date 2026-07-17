import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Globe, Search, Share2, Palette, Target, MessageSquare, Lightbulb, Rocket, BarChart2 } from 'lucide-react'

export default function KnowMorePage() {
  return (
    <main className="min-h-screen bg-[#050d1f] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#050d1f]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/#team" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} />
            Back to Website
          </Link>
          <Image src="/logo.png" alt="F360 Logo" width={80} height={32} className="h-8 w-auto" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            The Complete Picture
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            Know More About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              F360
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our story, how we work, and everything we offer — all in one place.
          </p>
        </div>

        {/* About the Company */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 font-playfair">About the Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                Our mission is to simplify digital growth for modern businesses. We combine creative marketing, powerful tech, and actionable strategies to help brands cut through the noise, reach the right audience, and grow faster than ever before.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                We envision a future where digital growth is smart, sustainable, and accessible to all — where brands don&apos;t just survive online, they thrive with confidence, clarity, and results that matter.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/5 border border-blue-500/20 rounded-2xl p-8">
            <p className="text-white/80 leading-relaxed text-lg">
              At F360 IT Solutions, we believe great work isn&apos;t just about going digital — it&apos;s about being <strong className="text-white">impactful</strong>. Founded in 2023 in Indore, we&apos;re a hybrid team combining creative firepower, strategic clarity, and cutting-edge tech to grow brands with purpose.
            </p>
            <p className="text-white/60 mt-4 leading-relaxed">
              We leverage AI not just to optimise performance, but to personalise experiences, predict trends, and drive smarter decision-making for our clients — faster, sharper, and at scale. <span className="text-blue-400 font-medium">Strategy + Storytelling + AI = Future-ready growth.</span>
            </p>
          </div>
        </section>

        {/* Work Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Our Work Process</h2>
          <div className="space-y-4">
            {[
              { icon: MessageSquare, step: '01', title: 'Discovery Call', desc: 'We understand your business, goals, target audience, and current challenges in a detailed consultation.' },
              { icon: Search, step: '02', title: 'Research & Audit', desc: 'Deep dive into your market, competitors, and digital presence to identify opportunities and gaps.' },
              { icon: Lightbulb, step: '03', title: 'Strategy Building', desc: 'We craft a custom 360° growth strategy combining creativity, tech, and data-driven insights.' },
              { icon: Rocket, step: '04', title: 'Execution', desc: 'Our team executes with precision — from content creation to campaigns, websites to branding.' },
              { icon: BarChart2, step: '05', title: 'Track & Optimise', desc: 'Continuous monitoring, reporting, and refinement to maximize your ROI over time.' },
            ].map(({ icon: Icon, step, title, desc }, i) => (
              <div key={i} className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                  <span className="text-blue-400/60 text-xs font-bold tracking-widest">STEP {step}</span>
                  <h3 className="text-white font-semibold text-lg mt-1 mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe, title: 'Website Development',
                desc: 'We create responsive, SEO-friendly, and high-converting websites tailored to your business goals — e-commerce portals, corporate sites, or content hubs.',
                tools: ['React.js', 'Next.js', 'WordPress', 'Shopify', 'Figma', 'Node.js']
              },
              {
                icon: Search, title: 'Search Engine Optimisation (SEO)',
                desc: 'We help your business rank higher and reach the right audience through strategic on-page, off-page, and technical SEO practices powered by AI insights.',
                tools: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Surfer SEO', 'RankMath']
              },
              {
                icon: Share2, title: 'Social Media Marketing',
                desc: 'From brand-building to lead generation, we craft platform-specific content, manage campaigns, and grow engagement across all major platforms.',
                tools: ['Meta Business Suite', 'Canva', 'Buffer', 'Creator Studio', 'ChatGPT']
              },
              {
                icon: Palette, title: 'Branding & Identity Design',
                desc: 'We build brands that are not just seen — but remembered. From logo to language, we shape your identity to stand out and stay consistent.',
                tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Midjourney']
              },
              {
                icon: Target, title: 'Ads Management (Paid Media)',
                desc: 'We run performance-driven ad campaigns on Google, Meta, and other platforms with a focus on ROI, targeting accuracy, and AI-led optimization.',
                tools: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'AdCreative.ai']
              },
            ].map(({ icon: Icon, title, desc, tools }, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-blue-400/30 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, j) => (
                    <span key={j} className="bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Ready to Grow with F360?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let&apos;s turn your vision into results. Book a discovery call today.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
            >
              Get in Touch
            </a>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 border border-white/20"
            >
              Back to Home
            </Link>
          </div> */}
        </div>
      </div>
    </main>
  )
}
