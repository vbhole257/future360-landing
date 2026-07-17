'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
// useRef removed
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  // sliderRef removed - unused
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 16 },
      },
    },
  })

  const testimonials = [
    {
      name: 'Shiva Enterprises',
      role: 'Client',
      feedback:
        "Creative strategies, engaging content, and consistent growth. The team understands audience behavior and delivers excellent results.",
      stars: 5,
    },
    {
      name: 'Nidhishree Anushthanam',
      role: 'Client',
      feedback:
        "Professional, responsive, and user-friendly websites delivered on time with great attention to detail. Excellent brand identity solutions, from logo design to complete visual branding, with a premium and modern approach.",
      stars: 5,
    },
    {
      name: 'Envision 3D',
      role: 'Client',
      feedback:
        "A reliable IT and digital marketing company that focuses on quality, innovation, and client satisfaction. Highly recommended for businesses looking to grow online",
      stars: 5,
    },
  ]

  return (
    <section id="testimonials" className="bg-[#081b3e] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-4">Client&apos;s Testimonial</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          At Future 360 IT Solutions, we are proud to have helped numerous clients achieve their digital marketing goals.
        </p>

        <div className="relative">
          {/* Arrow Left */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 text-white bg-transparent hover:text-blue-400 transition"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Slider */}
          <div ref={sliderInstanceRef} className="keen-slider px-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide bg-[#0e2654] text-white border border-gray-500/30 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="font-medium text-gray-300 mb-3">{item.role}</p>
                <p className="text-sm leading-relaxed text-gray-200 mb-4">{item.feedback}</p>
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 text-white bg-transparent hover:text-blue-400 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}
