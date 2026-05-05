import { motion } from 'framer-motion'

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Immobilienverkauf',
    desc: 'Professionelle Vermarktungsstrategie, Käuferqualifizierung und Verhandlungsführung – ich begleite Sie vom ersten Gespräch bis zur Schlüsselübergabe.',
    tag: 'Kernleistung',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    title: 'Videografie & Fotografie',
    desc: 'Cineastische Immobilienvideos und professionelle Fotos, die Ihr Objekt im besten Licht präsentieren und Kaufinteressenten emotional ansprechen.',
    tag: 'Differenzierung',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Drohnenaufnahmen',
    desc: 'Spektakuläre Luftaufnahmen für eine eindrucksvolle Darstellung der Lage, Grundstücksgröße und Umgebung Ihres Objektes.',
    tag: 'Premium',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M2 20h20" />
      </svg>
    ),
    title: 'Marktanalyse & Bewertung',
    desc: 'Fundierte Marktwertanalyse auf Basis aktueller Vergleichsdaten und lokaler Marktkenntnis – für einen realistischen und optimalen Angebotspreis.',
    tag: 'Beratung',
  },
]

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Was ich anbiete</span>
          <h2 className="section-title mb-4">
            Leistungen, die{' '}
            <span className="text-gold italic">Ergebnisse liefern</span>
          </h2>
          <p className="font-body text-gray-500 text-lg leading-relaxed">
            Von der professionellen Präsentation bis zum erfolgreichen Abschluss – mit modernen Methoden und persönlichem Engagement.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Tag */}
              <span className="inline-block text-[10px] font-body font-semibold tracking-widest uppercase text-gold/70 mb-3">
                {service.tag}
              </span>

              <h3 className="font-heading text-xl font-semibold text-anthrazit mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="font-body text-gray-500 text-sm leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
