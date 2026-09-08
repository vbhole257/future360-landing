'use client'

import { useState, useRef } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'

const reelProjects = [
  {
    id: 'DWnbuj7jFMI',
    pageName: 'india360feed',
    profileUrl: 'https://www.instagram.com/india360feed/',
    avatarUrl: '/Assets/Images/profiles/india360feed.jpg',
    videoUrl: '/videos/india360feed.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DWnbuj7jFMI/?stkn=NjZ6ZGptMHU5MjBm',
    likes: '267.7K',
  },
  {
    id: 'C5JVtCgt7km',
    pageName: 'f360_meme',
    profileUrl: 'https://www.instagram.com/f360_meme/',
    avatarUrl: '/Assets/Images/profiles/f360_meme.jpg',
    videoUrl: '/videos/f360_meme.mp4',
    instagramUrl: 'https://www.instagram.com/reel/C5JVtCgt7km/',
    likes: '484.2K',
  },
  {
    id: 'DXnPZE5sTyo',
    pageName: 'todayinbharat',
    profileUrl: 'https://www.instagram.com/todayinbharat/',
    avatarUrl: '/Assets/Images/profiles/todayinbharat.jpg',
    videoUrl: '/videos/todayinbharat.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DXnPZE5sTyo/',
    likes: '29.2K',
  },
]

function ReelCard({ reel }: { reel: (typeof reelProjects)[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.muted = isMuted
      videoRef.current.play().catch(() => {
        // Fallback: if browser prevents unmuted autoplay on initial click, mute and retry
        if (videoRef.current) {
          videoRef.current.muted = true
          setIsMuted(true)
          videoRef.current.play().catch(() => {})
        }
      })
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const nextMuted = !isMuted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <div className="bg-white border border-white/10 hover:border-blue-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/30 flex flex-col">
      {/* Custom Top Bar: Profile Picture (DP), Handle name, View profile */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <a
          href={reel.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 group/profile hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] flex items-center justify-center shrink-0 shadow-xs">
            <img
              src={reel.avatarUrl}
              alt={reel.pageName}
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
          <span className="font-semibold text-sm text-gray-900 group-hover/profile:text-blue-600 transition-colors">
            @{reel.pageName}
          </span>
        </a>

        <a
          href={reel.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
        >
          View profile
        </a>
      </div>

      {/* In-page Video Player */}
      <div
        onClick={togglePlay}
        className="relative w-full h-[470px] bg-black overflow-hidden cursor-pointer group flex items-center justify-center select-none"
      >
        <video
          ref={videoRef}
          src={reel.videoUrl}
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Play Icon Overlay (visible when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity z-10">
            <div className="w-16 h-16 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-gray-900 ml-1" />
            </div>
          </div>
        )}

        {/* Sound toggle button - round white background with black sound icon */}
        <button
          type="button"
          onClick={toggleMute}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-black flex items-center justify-center shadow-lg border border-gray-200 transition-all hover:scale-105"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-black" />
          ) : (
            <Volume2 className="w-4 h-4 text-black" />
          )}
        </button>
      </div>

      {/* Bottom bar: Like icon and Like count, plus Open Instagram in new tab */}
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
  )
}

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
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  )
}
