'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const visualRef = useRef<HTMLDivElement | null>(null)
  const logoStageRef = useRef<HTMLDivElement | null>(null)
  const heroGlowRef = useRef<HTMLDivElement | null>(null)
  const convergeGlowRef = useRef<HTMLDivElement | null>(null)
  const sweepRef = useRef<HTMLDivElement | null>(null)

  const fiWebRef = useRef<HTMLDivElement | null>(null)
  const fiAiRef = useRef<HTMLDivElement | null>(null)
  const fiSocialRef = useRef<HTMLDivElement | null>(null)
  const fiCloudRef = useRef<HTMLDivElement | null>(null)
  const fiSeoRef = useRef<HTMLDivElement | null>(null)
  const fiBrandRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // --- Particle Field on canvas ---
    const canvas = canvasRef.current
    let heroBurst: (cxFrac: number, cyFrac: number) => void = () => {}
    let cancelParticleRaf: number | null = null

    if (canvas && canvas.parentElement) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        let w = (canvas.width = canvas.parentElement.getBoundingClientRect().width)
        let h = (canvas.height = canvas.parentElement.getBoundingClientRect().height)
        let burst: Array<{
          x: number
          y: number
          vx: number
          vy: number
          r: number
          life: number
        }> = []

        const resize = () => {
          if (!canvas.parentElement) return
          const rect = canvas.parentElement.getBoundingClientRect()
          w = canvas.width = rect.width
          h = canvas.height = rect.height
        }

        const N = 13
        const particles = Array.from({ length: N }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1 + Math.random() * 1.3,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.3,
        }))

        const tickParticles = (t: number) => {
          ctx.clearRect(0, 0, w, h)
          if (!reduceMotion) {
            particles.forEach((p) => {
              p.x += p.vx
              p.y += p.vy
              if (p.x < 0) p.x = w
              if (p.x > w) p.x = 0
              if (p.y < 0) p.y = h
              if (p.y > h) p.y = 0
              const pulse = 0.5 + 0.5 * Math.sin(t * 0.001 * p.speed + p.phase)
              ctx.beginPath()
              ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(37,99,235,${0.15 + pulse * 0.2})`
              ctx.fill()
            })

            burst = burst.filter((b) => b.life > 0)
            burst.forEach((b) => {
              b.x += b.vx
              b.y += b.vy
              b.life -= 0.028
              ctx.beginPath()
              ctx.arc(b.x, b.y, b.r * Math.max(0, b.life), 0, Math.PI * 2)
              ctx.fillStyle = `rgba(37,99,235,${Math.max(0, b.life) * 0.8})`
              ctx.fill()
            })
          }
          cancelParticleRaf = requestAnimationFrame(tickParticles)
        }

        window.addEventListener('resize', resize)
        cancelParticleRaf = requestAnimationFrame(tickParticles)

        heroBurst = (cxFrac: number, cyFrac: number) => {
          if (reduceMotion) return
          const cx = w * cxFrac
          const cy = h * cyFrac
          for (let i = 0; i < 18; i++) {
            const ang = Math.random() * Math.PI * 2
            const spd = 0.6 + Math.random() * 1.6
            burst.push({
              x: cx,
              y: cy,
              vx: Math.cos(ang) * spd,
              vy: Math.sin(ang) * spd,
              r: 1.2 + Math.random() * 1.4,
              life: 1,
            })
          }
        }
      }
    }

    // --- Hero reveal sequence: icons orbit once and dissolve, then the logo appears ---
    const icons = [
      { el: fiWebRef.current, entry: [-130, -100], angle: -90 },
      { el: fiAiRef.current, entry: [120, -110], angle: -30 },
      { el: fiSocialRef.current, entry: [140, 50], angle: 30 },
      { el: fiCloudRef.current, entry: [95, 130], angle: 90 },
      { el: fiSeoRef.current, entry: [-110, 120], angle: 150 },
      { el: fiBrandRef.current, entry: [-140, 10], angle: 210 },
    ].filter((c): c is { el: HTMLDivElement; entry: number[]; angle: number } => Boolean(c.el))

    const logoStage = logoStageRef.current
    const heroGlow = heroGlowRef.current
    const convergeGlow = convergeGlowRef.current
    const sweep = sweepRef.current

    let cancelSequenceRaf: number | null = null

    if (logoStage && icons.length > 0) {
      const R = 128
      const ENTRANCE_DUR = 620
      const ORBIT_START = 550
      const ORBIT_DUR = 1800
      const CONVERGE_END = ORBIT_START + ORBIT_DUR
      const DISSOLVE_DUR = 380
      const REVEAL_START = CONVERGE_END + 300
      const REVEAL_DUR = 800
      const IDLE_START = REVEAL_START + REVEAL_DUR

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const easeInQuad = (t: number) => t * t

      if (reduceMotion) {
        icons.forEach((c) => {
          c.el.style.display = 'none'
        })
        logoStage.classList.add('is-revealed')
        requestAnimationFrame(() => logoStage.classList.add('is-idle'))
        if (heroGlow) {
          heroGlow.classList.add('is-visible')
          requestAnimationFrame(() => heroGlow.classList.add('is-idle'))
        }
      } else {
        let dissolved = false
        let revealed = false
        let idled = false
        let sweepFired = false
        const start = performance.now()

        const tick = (now: number) => {
          const t = now - start

          icons.forEach((cfg) => {
            const rad = (cfg.angle * Math.PI) / 180
            const orbitStartX = R * Math.cos(rad)
            const orbitStartY = R * Math.sin(rad)

            if (t <= ORBIT_START) {
              const p = easeOutCubic(Math.min(1, t / ENTRANCE_DUR))
              const x = cfg.entry[0] + (orbitStartX - cfg.entry[0]) * p
              const y = cfg.entry[1] + (orbitStartY - cfg.entry[1]) * p
              cfg.el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`
              cfg.el.style.opacity = `${p}`
              cfg.el.style.filter = `blur(${8 * (1 - p)}px)`
            } else if (t <= CONVERGE_END) {
              const p = Math.min(1, (t - ORBIT_START) / ORBIT_DUR)
              const angle = rad + p * Math.PI * 2
              const radius = R * (1 - easeInQuad(p))
              const x = radius * Math.cos(angle)
              const y = radius * Math.sin(angle)
              cfg.el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`
              cfg.el.style.opacity = '1'
              cfg.el.style.filter = 'blur(0px)'
            } else if (t <= CONVERGE_END + DISSOLVE_DUR) {
              if (!dissolved) {
                dissolved = true
                if (convergeGlow) convergeGlow.classList.add('is-active')
                heroBurst(0.5, 0.5)
              }
              const p = (t - CONVERGE_END) / DISSOLVE_DUR
              cfg.el.style.transform = `translate(-50%,-50%) scale(${1 + p * 0.6})`
              cfg.el.style.opacity = `${1 - p}`
            } else if (cfg.el.style.opacity !== '0') {
              cfg.el.style.opacity = '0'
              cfg.el.style.display = 'none'
            }
          })

          if (t > REVEAL_START && !revealed) {
            revealed = true
            logoStage.classList.add('is-revealed')
            if (heroGlow) heroGlow.classList.add('is-visible')
          }
          if (t > CONVERGE_END + DISSOLVE_DUR + 150 && convergeGlow) {
            convergeGlow.classList.remove('is-active')
          }
          if (t > IDLE_START && !idled) {
            idled = true
            logoStage.classList.add('is-idle')
            if (heroGlow) heroGlow.classList.add('is-idle')
            if (sweep) sweep.classList.add('is-active')
            sweepFired = true
          }

          if (!idled || !sweepFired) {
            cancelSequenceRaf = requestAnimationFrame(tick)
          }
        }
        cancelSequenceRaf = requestAnimationFrame(tick)
      }
    }

    // --- Mouse Parallax ---
    const visual = visualRef.current
    let cancelParallaxRaf: number | null = null

    if (!reduceMotion && visual && logoStage) {
      let targetX = 0
      let targetY = 0
      let curX = 0
      let curY = 0

      const onMouseMove = (e: MouseEvent) => {
        const rect = visual.getBoundingClientRect()
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      }

      const onMouseLeave = () => {
        targetX = 0
        targetY = 0
      }

      visual.addEventListener('mousemove', onMouseMove)
      visual.addEventListener('mouseleave', onMouseLeave)

      const setXY = (el: HTMLElement, x: number, y: number) => {
        el.style.setProperty('--px', `${x}px`)
        el.style.setProperty('--py', `${y}px`)
      }

      const raf = () => {
        curX += (targetX - curX) * 0.06
        curY += (targetY - curY) * 0.06
        setXY(logoStage, curX * 10, curY * 8)
        if (heroGlow) setXY(heroGlow, curX * 16, curY * 14)
        icons.forEach((item, i) => {
          const depth = 6 + (i % 3) * 4
          setXY(item.el, curX * depth, curY * depth)
        })
        cancelParallaxRaf = requestAnimationFrame(raf)
      }
      cancelParallaxRaf = requestAnimationFrame(raf)

      return () => {
        if (cancelParticleRaf) cancelAnimationFrame(cancelParticleRaf)
        if (cancelSequenceRaf) cancelAnimationFrame(cancelSequenceRaf)
        if (cancelParallaxRaf) cancelAnimationFrame(cancelParallaxRaf)
        visual.removeEventListener('mousemove', onMouseMove)
        visual.removeEventListener('mouseleave', onMouseLeave)
      }
    }

    return () => {
      if (cancelParticleRaf) cancelAnimationFrame(cancelParticleRaf)
      if (cancelSequenceRaf) cancelAnimationFrame(cancelSequenceRaf)
      if (cancelParallaxRaf) cancelAnimationFrame(cancelParallaxRaf)
    }
  }, [])

  return (
    <section className="hero" id="home">
      {/* Background Ambience from original HTML */}
      <div className="grid-overlay" />
      <div className="scan-line" />
      <div className="glow-blob b1" />
      <div className="glow-blob b2" />
      <div className="glow-blob b3" />

      <div className="hero-grid">
        <div className="hero-copy">
          <span className="badge">Future 360 IT Solutions</span>
          <h1 className="stair-tagline" aria-label="Innovate. Integrate. Elevate.">
            <span className="stair-line sl1" style={{ '--n': 0, animationDelay: '0.1s' } as React.CSSProperties}>
              Innovate.
            </span>
            <span className="stair-line sl2" style={{ '--n': 1, animationDelay: '0.3s' } as React.CSSProperties}>
              Integrate.
            </span>
            <span className="stair-line sl3" style={{ '--n': 2, animationDelay: '0.5s' } as React.CSSProperties}>
              Elevate.
            </span>
          </h1>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
                else window.location.hash = '#contact'
              }}
            >
              Start Your Project
            </a>
            <a
              href="#work"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('work')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
                else window.location.hash = '#work'
              }}
            >
              View Our Work
            </a>
          </div>

          <div className="trust-strip">
            <div className="trust-avatars">
              <span>M</span>
              <span>K</span>
              <span>I</span>
              <span>+</span>
            </div>
            <p className="trust-copy">
              <strong>Trusted by 50+ brands</strong>
              <br />
              across 10+ industries
            </p>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef} aria-label="Future 360 digital services">
          <canvas id="particle-canvas" ref={canvasRef} />
          <div className="hero-glow" ref={heroGlowRef} />
          <div className="converge-glow" ref={convergeGlowRef} />

          {/* Floating icons */}
          <div className="fi-pos fi-web" ref={fiWebRef} title="Website Development">
            <div className="float-icon fa1">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" />
              </svg>
            </div>
          </div>

          <div className="fi-pos fi-ai" ref={fiAiRef} title="AI Automation">
            <div className="float-icon fa2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                <rect x="5" y="8" width="14" height="11" rx="3" />
                <path d="M9 8V5a3 3 0 016 0v3" />
                <circle cx="9.5" cy="13.5" r="1" />
                <circle cx="14.5" cy="13.5" r="1" />
              </svg>
            </div>
          </div>

          <div className="fi-pos fi-social" ref={fiSocialRef} title="Social Media">
            <div className="float-icon fa3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                <path d="M3 11l18-5-5 18-4-8-9-5z" />
              </svg>
            </div>
          </div>

          <div className="fi-pos fi-cloud" ref={fiCloudRef} title="Cloud">
            <div className="float-icon fa4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
              </svg>
            </div>
          </div>

          <div className="fi-pos fi-seo" ref={fiSeoRef} title="SEO / Analytics">
            <div className="float-icon fa5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M15 7h6v6" />
              </svg>
            </div>
          </div>

          <div className="fi-pos fi-brand" ref={fiBrandRef} title="Branding">
            <div className="float-icon fa6">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.4.3.6.8.6 1.2h6c0-.4.2-.9.6-1.2A6 6 0 0012 3z" />
              </svg>
            </div>
          </div>

          {/* Central Logo with Sweep Light */}
          <div className="logo-stage" ref={logoStageRef} role="img" aria-label="Future 360 IT Solutions logo">
            <Image
              src="/Assets/Images/F360 Logo_without_bg_hero.png"
              alt="Future 360 IT Solutions"
              width={520}
              height={295}
              priority
            />
            <div className="logo-sweep" ref={sweepRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
