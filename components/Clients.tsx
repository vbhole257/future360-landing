'use client'

import Image from 'next/image'

const logos = [
  '/clients/1.png', '/clients/2.png', '/clients/3.png',
  '/clients/4.png', '/clients/5.png', '/clients/6.png',
  '/clients/7.png', '/clients/8.png', '/clients/9.png', '/clients/10.png'
]

export default function Clients() {
  return (
    <section className="bg-[#080f22] py-14 px-4 border-y border-white/5 overflow-hidden">
      <p className="text-center text-white/30 text-xs font-semibold uppercase tracking-widest mb-8">
        Trusted by Startups & Brands
      </p>
      <div className="relative overflow-hidden">
        <div className="flex gap-12 animate-marquee w-max">
          {logos.concat(logos).map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Client logo ${i}`}
              width={100}
              height={36}
              className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
