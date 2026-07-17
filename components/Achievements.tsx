'use client'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Achievements() {
  const images = [
    { src: '/achievements/1.jpg', caption: 'Future 360 featured on Republic TV' },
    { src: '/achievements/2.jpg', caption: 'Met Central Minister Narayan Rane ji' },
    { src: '/achievements/3.jpg', caption: 'IITD Startup featured in National Paper' },
    { src: '/achievements/4.jpg', caption: 'Awarded by MP Govt for digital work' },
    { src: '/achievements/5.jpg', caption: 'Panel discussion at Startup Expo' },
    { src: '/achievements/6.jpg', caption: 'Featured in top marketing firms of India' },
  ]

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    renderMode: "performance",
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
  })

  // Autoplay
  useEffect(() => {
    if (!slider) return
    const interval = setInterval(() => {
      slider.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [slider])

  return (
    <section id="achievements" className="bg-[#081b3e] py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Achievements</h2>
        <div className="h-1 w-24 bg-white mx-auto mb-10 rounded-full" />

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute z-10 -left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-300 transition"
          >
            <ChevronLeft className="text-blue-700" />
          </button>

          <div ref={sliderRef} className="keen-slider px-2">
            {images.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-xl border-2 border-blue-500 shadow-md overflow-hidden"
              >
                {item.caption && (
                  <div className="text-center font-semibold text-sm text-[#0b1b3e] px-4 pt-4">
                    {item.caption}
                  </div>
                )}
                <Image
                  src={item.src}
                  alt={`Achievement ${index + 1}`}
                  width={400}
                  height={320}
                  className="w-full h-[320px] object-contain p-4"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => slider.current?.next()}
            className="absolute z-10 -right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-300 transition"
          >
            <ChevronRight className="text-blue-700" />
          </button>
        </div>
      </div>
    </section>
  )
}
