'use client'

const mockups = [
  { label: '@f360itsolutions', likes: '2.4K', screenshot: '/layout/ig1.jpg' },
  { label: 'Campaign Results', likes: '1.8K', screenshot: '/layout/ig2.jpg' },
  { label: 'Brand Launch', likes: '3.1K', screenshot: '/layout/ig3.jpg' },
]

export default function LayoutShowcase() {
  return (
    <section id="layout" className="bg-[#080f22] text-white py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">
            Look &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Feel
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A glimpse into our Instagram — content that converts.
          </p>
        </div>

        {/* Phone mockups */}
        <div className="flex flex-wrap justify-center items-end gap-8">
          {mockups.map((item, i) => (
            <div
              key={i}
              className={`relative transition-all duration-500 hover:-translate-y-3 ${i === 1 ? 'scale-110 z-10' : 'scale-95 opacity-80 hover:opacity-100'}`}
            >
              {/* Phone frame */}
              <div className="relative w-56 bg-[#111] rounded-[36px] shadow-2xl shadow-black/60 border border-white/10 overflow-hidden"
                style={{ aspectRatio: '9/19' }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#111] rounded-full z-20" />

                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] flex flex-col">
                  {/* Instagram header simulation */}
                  <div className="pt-10 px-3 pb-2">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                      <span className="text-white text-xs font-semibold">{item.label}</span>
                    </div>
                  </div>

                  {/* Post area */}
                  <div
                    className="flex-1 mx-2 rounded-xl flex items-center justify-center text-white/20 text-xs border border-white/10"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(i * 60 + 200) % 360}, 50%, 15%), hsl(${(i * 60 + 240) % 360}, 50%, 10%))`
                    }}
                  >
                    {/* Screenshot placeholder */}
                    <div className="text-center">
                      <div className="text-2xl mb-2">📸</div>
                      <p className="text-xs text-white/30">Add Screenshot</p>
                    </div>
                  </div>

                  {/* IG action bar */}
                  <div className="px-3 py-2 flex items-center gap-3">
                    <span className="text-white/60 text-[10px]">❤️ {item.likes} likes</span>
                    <span className="text-white/30 text-[10px]">💬 View all comments</span>
                  </div>
                </div>
              </div>

              {/* Label */}
              <p className="text-center text-white/50 text-xs mt-4">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/f360itsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3 rounded-full text-sm transition-all duration-200"
          >
            Follow us on Instagram @f360itsolutions
          </a>
        </div>
      </div>
    </section>
  )
}
