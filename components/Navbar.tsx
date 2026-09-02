'use client'

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [activeId, setActiveId] = useState<string>('home')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    if (pathname === '/about' || pathname === '/about-us') {
      setActiveId('about')
      return
    }

    if (pathname === '/') {
      const sectionIds = ['home', 'work', 'services', 'contact']
      const handleSectionScroll = () => {
        const scrollPosition = window.scrollY + 220
        if (window.scrollY < 200) {
          setActiveId('home')
          return
        }

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i]
          const el = document.getElementById(id)
          if (el) {
            const top = el.offsetTop
            if (scrollPosition >= top) {
              setActiveId(id)
              break
            }
          }
        }
      }

      handleSectionScroll()
      window.addEventListener('scroll', handleSectionScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleSectionScroll)
    } else {
      setActiveId('')
    }
  }, [pathname])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(next)
    root.style.colorScheme = next
    localStorage.setItem('f360-theme', next)
    setTheme(next)
  }

  const navLinks = [
    { label: 'Home', href: '/#home', id: 'home' },
    { label: 'Our Work', href: '/#work', id: 'work' },
    { label: 'About Us', href: '/about', id: 'about' },
    { label: 'Services', href: '/#services', id: 'services' },
    { label: 'Contact', href: '/#contact', id: 'contact' },
  ]

  return (
    <header className={`reference-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="reference-navbar-inner flex items-center justify-between w-full">
        {/* 1. Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/Assets/Images/F360 Logo_without_bg_hero.png"
            alt="F360 Logo"
            width={80}
            height={15}
            className="h-9 sm:h-9 w-auto"
            priority
          />
        </Link>

        {/* 2. All Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                className={`reference-nav-link group ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
                <span
                  className={`absolute bottom-[-4px] left-0 h-[2px] bg-blue-400 transition-all duration-300 ${
                    isActive ? 'w-full shadow-sm shadow-blue-400/50' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* 3. Let's Talk CTA button + Dark/Light Theme Switcher */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="/#contact"
            className="reference-nav-cta"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls: Theme toggle + Hamburger menu */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="text-white p-1"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="reference-mobile-menu md:hidden">
          {navLinks.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveId(item.id)
                  setMenuOpen(false)
                }}
                className={`reference-mobile-link flex items-center justify-between ${
                  isActive ? 'is-active' : ''
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400" />
                )}
              </a>
            )
          })}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="reference-nav-cta block mt-4 text-center"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  )
}
