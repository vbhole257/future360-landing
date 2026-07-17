'use client'

import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#030812] text-white pt-16 pb-10 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Image src="/logo.png" alt="F360 Logo" width={100} height={40} className="h-10 w-auto mb-4" />
          <p className="text-sm text-white/50 leading-relaxed">
            Innovate. Integrate. Elevate. — Helping modern businesses grow smarter, faster, and better.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-white/40">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
            <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-white/40">
            <p>📞 +91 8889995985</p>
            <p>✉️ team@future360itsolutions.com</p>
            <p>📍 Vijay Nagar, Indore (MP)</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">Follow Us</h3>
          <div className="flex gap-3 flex-wrap">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/share/1FhLb2Ej8t/' },
              { icon: Instagram, href: 'https://www.instagram.com/f360itsolutions' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/future360itsolutions' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <Icon size={16} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 mt-10 pt-6 text-center text-xs text-white/20">
        © {new Date().getFullYear()} Future 360 IT Solutions. All Rights Reserved.
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918889995985"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-900/50 transition-all duration-200 hover:scale-110"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-10 h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-50"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
