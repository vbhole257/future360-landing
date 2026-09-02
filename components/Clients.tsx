'use client'

import Image from 'next/image'

const logos = [
  '/Assets/Images/clients/Balaji education Logo.png',
  '/Assets/Images/clients/Buildfab Logo.png',
  '/Assets/Images/clients/COTBAY Logo.png',
  '/Assets/Images/clients/Envision 3D Logo.png',
  '/Assets/Images/clients/I360feed logo.png',
  '/Assets/Images/clients/Magnoux Logo.png',
  '/Assets/Images/clients/Nidhishree Logo.png',
  '/Assets/Images/clients/PTB Logo.png',
  '/Assets/Images/clients/Shiva Logo.png',
  '/Assets/Images/clients/TIB static.png',
]

export default function Clients() {
  return (
    <section className="bg-[#080f22] py-14 px-4 border-y border-white/5 overflow-hidden">
      <p className="text-center text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
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
              className="opacity-100 transition-all duration-300 object-contain hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
