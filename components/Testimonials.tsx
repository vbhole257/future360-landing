'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    slides: {
      perView: 2,
      spacing: 28,
    },
    breakpoints: {
      '(max-width: 900px)': {
        slides: { perView: 1, spacing: 16 },
      },
    },
  })

  const testimonials = [
    {
      name: 'Shiva Enterprises',
      role: 'Growth & Strategy Partner',
      feedback:
        'Creative strategies, engaging content, and consistent growth. The team deeply understands audience behaviour and delivers excellent, measurable results.',
      stars: 5,
      logoSrc: '/Assets/Images/clients/Shiva Logo.png',
      tag: 'Digital Marketing & Content',
    },
    {
      name: 'NidhiShree Anushthanam',
      role: 'Enterprise Client',
      feedback:
        'Professional, responsive, and user-friendly websites delivered on time with exceptional attention to detail. Their branding expertise reflects a premium and modern approach.',
      stars: 5,
      logoSrc: '/Assets/Images/clients/Nidhishree Logo.png',
      tag: 'Web & Visual Identity',
    },
    {
      name: 'Envision3D',
      role: 'Technology Partner',
      feedback:
        'A reliable IT and digital marketing company that prioritises quality, innovation, and client satisfaction. Highly recommended for businesses looking to scale their digital presence.',
      stars: 5,
      logoSrc: '/Assets/Images/clients/Envision 3D Logo.png',
      tag: 'IT Solutions & SEO',
    },
    {
      name: 'Magnoux',
      role: 'Brand Partner',
      feedback:
        'Working with F360 IT Solutions was effortless. They understood our requirements, maintained crystal-clear communication, and delivered a solution that was both functional and visually impressive.',
      stars: 5,
      logoSrc: '/Assets/Images/clients/Magnoux Logo.png',
      tag: 'Product Design & Web',
    },
    {
      name: 'Cotbay',
      role: 'E-commerce Client',
      feedback:
        'The team combined deep technical expertise with strategic thinking to deliver solutions that helped us strengthen our digital presence and connect with the right audience.',
      stars: 5,
      logoSrc: '/Assets/Images/clients/COTBAY Logo.png',
      tag: 'Full-Stack Development',
    },
  ]

  return (
    <section id="testimonials" className="bg-[#f7faff] py-24 relative overflow-hidden border-t border-blue-900/10">
      {/* Background radial accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Header (consistent with other sections) */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3 block">
            What Our Clients Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-[#10203a]">
            Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
            Real results, genuine partnerships. Hear from founders and leaders who scaled with Future 360 IT Solutions.
          </p>
        </div>

        {/* Carousel with side navigation arrows */}
        <div className="relative px-2 sm:px-8">
          {/* Arrow Left */}
          <button
            onClick={() => slider.current?.prev()}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-gray-200 hover:border-blue-500 bg-white text-gray-700 hover:text-blue-600 items-center justify-center transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Arrow Right */}
          <button
            onClick={() => slider.current?.next()}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-gray-200 hover:border-blue-500 bg-white text-gray-700 hover:text-blue-600 items-center justify-center transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          <div ref={sliderInstanceRef} className="keen-slider py-2">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Stars + Tag */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  {/* Feedback text */}
                  <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-8 font-normal">
                    {item.feedback}
                  </p>
                </div>

                {/* Client Info footer */}
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
                    <img
                      src={item.logoSrc}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#10203a] leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
