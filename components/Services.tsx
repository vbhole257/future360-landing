'use client'

import { Globe, Smartphone, Search, Sparkles, MessageSquare, Brain, Share2, Palette, Target, Cloud, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'We build fast, secure, and conversion-focused websites that help businesses establish a strong digital presence. From corporate websites to e-commerce platforms, every solution is designed for performance, scalability, and an exceptional user experience.',
    deliverables: ['Corporate & Business Websites', 'E-commerce Development', 'Landing Pages', 'CMS Development', 'Website Maintenance & Support', 'Performance & Security Optimization'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'PHP', 'Node.js', 'WordPress', 'Shopify', 'Webflow', 'Figma'],
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-900/20 to-cyan-900/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'We create intuitive, high-performance mobile applications that deliver seamless user experiences while helping businesses engage customers and drive growth.',
    deliverables: ['Android App Development', 'iOS App Development', 'Cross-Platform App Development', 'UI/UX Design', 'App Maintenance & Support'],
    tech: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'Android Studio', 'Xcode'],
    gradient: 'from-purple-500 to-indigo-500',
    bg: 'from-purple-900/20 to-indigo-900/10',
  },
  {
    icon: Search,
    title: 'Search Engine Optimisation (SEO)',
    description: 'Improve your online visibility with data-driven SEO strategies that increase organic traffic, strengthen search rankings, and generate qualified leads.',
    deliverables: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Local SEO', 'Keyword Research', 'SEO Audits & Reporting'],
    tech: ['Google Search Console', 'GA4', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Rank Math', 'Yoast SEO', 'Surfer SEO'],
    gradient: 'from-green-500 to-teal-500',
    bg: 'from-green-900/20 to-teal-900/10',
  },
  {
    icon: Sparkles,
    title: 'AI Search Optimisation (AEO & GEO)',
    description: 'Prepare your business for the future of search by optimising your digital presence for AI-powered search engines, answer engines, voice search, and generative AI platforms.',
    deliverables: ['Answer Engine Optimisation', 'Generative Engine Optimisation', 'AI Search Visibility', 'Voice Search Optimisation', 'Structured Data & Schema Markup', 'AI Content Optimisation'],
    tech: ['ChatGPT', 'Gemini', 'Claude', 'Perplexity AI', 'Google Search Console', 'Schema Markup', 'JSON-LD'],
    gradient: 'from-orange-500 to-red-500',
    bg: 'from-orange-900/20 to-red-900/10',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot & Virtual Assistant',
    description: 'Develop intelligent AI-powered chatbots and virtual assistants that provide instant customer support, automate lead generation, and enhance customer engagement across websites and messaging platforms.',
    deliverables: ['Website AI Chatbots', 'WhatsApp Business Chatbots', 'Lead Qualification Bots', 'Customer Support Automation', 'AI Knowledge Assistants'],
    tech: ['OpenAI API', 'Dialogflow', 'Botpress', 'Voiceflow', 'LangChain', 'WhatsApp Business API'],
    gradient: 'from-pink-500 to-rose-500',
    bg: 'from-pink-900/20 to-rose-900/10',
  },
  {
    icon: Brain,
    title: 'Generative AI Solutions',
    description: 'Leverage Generative AI to enhance productivity, streamline content creation, and build intelligent business solutions tailored to your organisation\'s needs.',
    deliverables: ['AI Content Generation', 'AI Image Generation', 'AI Document Processing', 'AI Knowledge Base Development', 'Custom AI Integrations'],
    tech: ['OpenAI GPT', 'Gemini', 'Claude', 'DALL·E', 'Midjourney', 'Stable Diffusion', 'LangChain'],
    gradient: 'from-indigo-500 to-blue-500',
    bg: 'from-indigo-900/20 to-blue-900/10',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    description: 'From brand awareness to lead generation, we create data-driven social media strategies that grow communities, increase engagement, and drive measurable business results.',
    deliverables: ['Social Media Strategy', 'Content Creation', 'Community Management', 'Campaign Management', 'Influencer Marketing', 'Performance Analytics'],
    tech: ['Meta Business Suite', 'LinkedIn Campaign Manager', 'Canva', 'Adobe Express', 'Buffer', 'Hootsuite', 'Google Trends'],
    gradient: 'from-cyan-500 to-blue-500',
    bg: 'from-cyan-900/20 to-blue-900/10',
  },
  {
    icon: Palette,
    title: 'Branding & Identity Design',
    description: 'We create memorable brand identities that communicate your vision, build trust, and establish a consistent presence across every customer touchpoint.',
    deliverables: ['Brand Strategy', 'Logo Design', 'Visual Identity System', 'Brand Guidelines', 'Marketing Collateral', 'Brand Positioning'],
    tech: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro', 'Midjourney'],
    gradient: 'from-rose-500 to-orange-500',
    bg: 'from-rose-900/20 to-orange-900/10',
  },
  {
    icon: Target,
    title: 'Ads Management (Paid Media)',
    description: 'Maximise your marketing ROI with high-performing advertising campaigns across Google, Meta, LinkedIn, and other digital platforms.',
    deliverables: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Lead Generation Campaigns', 'Conversion Optimisation', 'Campaign Performance Reporting'],
    tech: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Google Tag Manager', 'GA4', 'Meta Pixel'],
    gradient: 'from-yellow-500 to-amber-500',
    bg: 'from-yellow-900/20 to-amber-900/10',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Empower your business with secure, scalable, and reliable cloud solutions that improve collaboration, strengthen security, and support long-term digital transformation.',
    deliverables: ['Cloud Migration', 'Cloud Infrastructure Management', 'Data Backup & Recovery', 'Cloud Security', 'Performance Monitoring'],
    tech: ['AWS', 'Microsoft Azure', 'GCP', 'Docker', 'Kubernetes', 'Cloudflare'],
    gradient: 'from-teal-500 to-green-500',
    bg: 'from-teal-900/20 to-green-900/10',
  }
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
            Discover our comprehensive suite of 360° digital services designed to empower your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description, deliverables, tech, gradient, bg }, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${bg} border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-20 flex-shrink-0`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-2xl group-hover:text-blue-300 transition-colors pt-2">
                    {title}
                  </h3>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  {description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider text-blue-400/80">Key Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                    {deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70 text-sm font-medium">
                        <span className="text-blue-500 mt-0.5 text-lg leading-none">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider text-blue-400/80">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner gradient */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl ${gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
