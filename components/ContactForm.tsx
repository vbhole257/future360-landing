'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-[#050d1f] text-white py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ background: 'radial-gradient(ellipse at bottom left, #3b82f6, transparent 60%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Let&apos;s Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Us
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Use our expertise to your advantage — get in touch with us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <textarea
              name="requirements"
              rows={4}
              placeholder="Tell us about your requirements..."
              required
              value={form.requirements}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/40"
            >
              {submitted ? '✅ Message Sent!' : 'Submit Now'}
            </button>
          </form>

          {/* Info */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/20 p-8 rounded-2xl flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Take Your Business to the Next Level</h3>
              <p className="text-white/60 text-sm">We&apos;d love to be a part of your growth journey. Reach out anytime.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium">+91 8889995985</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium">team@future360itsolutions.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Office</p>
                  <p className="text-white font-medium">Vijay Nagar, Indore (MP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
