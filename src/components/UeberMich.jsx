import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.82V18a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h10.5" />
        <path d="M15 5a2 2 0 114 0 2 2 0 01-4 0z" />
      </svg>
    ),
    title: 'Professionelle Videografie',
    desc: 'Cineastische Immobilienvideos, die Kaufinteressenten begeistern.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Drohnenaufnahmen',
    desc: 'Beeindruckende Luftaufnahmen für optimale Lage- und Objektdarstellung.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Persönliche Betreuung',
    desc: 'Individuelle Beratung und transparente Kommunikation vom ersten Kontakt bis zum Abschluss.',
  },
]

export default function UeberMich() {
  return (
    <section id="ueber-mich" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop"
                alt="Ole Nieuwenhuizen – NIU Immobilien"
                className="w-full h-full object-cover object-top"
              />
              {/* Gold accent card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <p className="font-heading text-lg font-semibold text-anthrazit">Ole Nieuwenhuizen</p>
                <p className="font-body text-sm text-gold font-medium mt-0.5">Inhaber · NIU Immobilien Flensburg</p>
              </div>
            </div>
            {/* Decorative gold element */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gold/10 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-gold/5 -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeUp} className="section-label">
              Über mich
            </motion.span>

            <motion.h2 variants={fadeUp} className="section-title mb-6">
              Leidenschaft für Immobilien und{' '}
              <span className="text-gold italic">professionelle Vermarktung</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-gray-600 text-lg leading-relaxed mb-4">
              Mein Name ist Ole Nieuwenhuizen – ich bin 22 Jahre alt, aufgewachsen und zuhause in Flensburg. Neben meinem BWL-Studium brenne ich für alles, was mit Immobilien zu tun hat.
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-gray-600 text-base leading-relaxed mb-10">
              Was mich antreibt: Immobilien nicht einfach nur zu verkaufen, sondern sie so zu präsentieren, dass Käufer sich auf Anhieb vorstellen können, dort zu leben. Mit professioneller Videografie, Drohnenaufnahmen und einer persönlichen Betreuung bringe ich Ihr Objekt optimal in Szene – für den bestmöglichen Verkaufserfolg.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={stagger} className="flex flex-col gap-5">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-anthrazit text-sm mb-0.5">{item.title}</p>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
