'use client'

const reelProjects = [
  {
    id: 'C5JVtCgt7km',
    pageName: 'f360_meme',
    embedUrl: 'https://www.instagram.com/reel/C5JVtCgt7km/embed/',
    instagramUrl: 'https://www.instagram.com/reel/C5JVtCgt7km/',
    likes: '484.2K',
  },
  {
    id: 'Db-AFa3N_mW',
    pageName: 'india360feed',
    embedUrl: 'https://www.instagram.com/reel/Db-AFa3N_mW/embed/',
    instagramUrl: 'https://www.instagram.com/reel/Db-AFa3N_mW/',
    likes: '27K',
  },
  {
    id: 'DXnPZE5sTyo',
    pageName: 'todayinbharat',
    embedUrl: 'https://www.instagram.com/reel/DXnPZE5sTyo/embed/',
    instagramUrl: 'https://www.instagram.com/reel/DXnPZE5sTyo/',
    likes: '29.2K',
  },
]

export default function OurWork() {
  return (
    <section id="work" className="bg-[#050d1f] text-white py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Work
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reelProjects.map((reel) => (
            <div
              key={reel.id}
              className="bg-white border border-white/10 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30 flex flex-col"
            >
              {/* Instagram Reel Embed with bottom cropped to remove View more link & action icons */}
              <div className="relative w-full h-[470px] bg-white overflow-hidden">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-[620px] border-0 overflow-hidden"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title={reel.pageName}
                />
              </div>

              {/* Bottom bar: Only Like icon and Like count, plus Open Instagram in new tab */}
              <div className="bg-white px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-gray-800">
                  <svg
                    className="w-5 h-5 text-red-500 fill-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-semibold text-sm text-gray-900">
                    {reel.likes} <span className="text-gray-500 font-normal">likes</span>
                  </span>
                </div>

                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
                >
                  <span>Open Instagram</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
