import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-baseline gap-1 select-none"
          >
            <span className="font-heading text-2xl font-bold text-gold tracking-wide">NIU</span>
            <span className={`font-body text-base font-medium transition-colors duration-300 ${scrolled ? 'text-anthrazit' : 'text-white'}`}>
              Immobilien
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`font-body text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-anthrazit' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); handleNavClick('#kontakt') }}
              className="btn-gold text-sm px-6 py-3"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-anthrazit' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-anthrazit' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-anthrazit' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xl md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="font-body text-base font-medium text-anthrazit hover:text-gold transition-colors duration-200 py-2 border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); handleNavClick('#kontakt') }}
                className="btn-gold text-center mt-2"
              >
                Kontakt aufnehmen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
