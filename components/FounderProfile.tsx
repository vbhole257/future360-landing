export default function FounderProfile() {
  return (
    <section className="bg-[#050d1f] text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-5"
        style={{ background: 'radial-gradient(ellipse at top left, #3b82f6, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Founders Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            The Vision Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              F360 IT Solutions
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-white/70 leading-relaxed text-base md:text-lg">
          <p>
            F360 IT Solutions was founded with a simple belief: <strong className="text-white font-medium">technology should empower businesses, not complicate them.</strong>
          </p>
          <p>
            Driven by this vision, <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 font-bold text-lg md:text-xl underline decoration-blue-500/30 underline-offset-4">Avinash Singh Kushwah</strong> established F360 IT Solutions to help organisations embrace digital transformation through innovative technology, intelligent strategy, and future-ready solutions. His leadership is centred on delivering measurable value by combining creativity, business insight, and emerging technologies to solve real-world challenges.
          </p>
          <p>
            With over five years of experience in strategic marketing, branding, and business growth, <span className="text-white font-semibold">Avinash</span> has partnered with startups, growing enterprises, and established businesses to strengthen their digital presence, build impactful brands, and accelerate sustainable growth. His understanding of both technology and market dynamics enables F360 IT Solutions to deliver solutions that are not only technically sound but also aligned with business objectives.
          </p>
          <p>
            Today, under his leadership, F360 IT Solutions offers a comprehensive portfolio of digital services, including website development, mobile application development, AI-powered solutions, search optimisation (SEO, AEO & GEO), branding, cloud solutions, and performance marketing. Every solution is built with a focus on innovation, scalability, and long-term business success.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8 relative">
            <span className="text-4xl text-blue-500/20 absolute top-4 left-4 font-serif">&quot;</span>
            <h4 className="text-blue-400 font-semibold mb-3 relative z-10">Leadership Philosophy</h4>
            <p className="text-white/80 italic relative z-10 text-sm md:text-base">
              &quot;Innovation begins with understanding. We believe every business deserves technology that is intelligent, scalable, and built to create lasting impact. At F360 IT Solutions, we don&apos;t just deliver digital solutions. We build long-term partnerships that enable businesses to grow with confidence in an ever-evolving digital world.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
