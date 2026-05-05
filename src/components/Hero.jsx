import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop"
          alt="Modernes Haus Flensburg"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-anthrazit/70 via-anthrazit/55 to-anthrazit/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="inline-block text-gold font-body text-sm font-medium tracking-[0.3em] uppercase mb-6"
        >
          Flensburg · Schleswig-Holstein
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-heading text-5xl md:text-7xl font-semibold text-white leading-[1.1] mb-6"
        >
          Immobilien.{' '}
          <span className="text-gold italic">Professionell</span>{' '}
          präsentiert.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="font-body text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-10"
        >
          Ole Nieuwenhuizen – NIU Immobilien Flensburg. Ihr Partner für erfolgreichen Immobilienverkauf mit professioneller Vermarktung.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => handleScroll('#kontakt')}
            className="btn-gold text-base"
          >
            Jetzt Kontakt aufnehmen
          </button>
          <button
            onClick={() => handleScroll('#leistungen')}
            className="inline-block border-2 border-white/40 text-white font-body font-medium px-8 py-4 rounded-full transition-all duration-300 hover:border-white hover:bg-white/10 hover:-translate-y-0.5"
          >
            Leistungen entdecken
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={() => handleScroll('#ueber-mich')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300"
        aria-label="Nach unten scrollen"
      >
        <span className="font-body text-xs tracking-widest uppercase">Mehr</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  )
}
