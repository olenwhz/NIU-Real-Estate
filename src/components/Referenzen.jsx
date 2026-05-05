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

const objekte = [
  {
    title: 'Einfamilienhaus in Flensburg-Mürwik',
    details: '5 Zimmer · 148 m² · Baujahr 1994',
    status: 'Verkauft',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80&auto=format&fit=crop',
  },
  {
    title: 'Moderne Eigentumswohnung Innenstadt',
    details: '3 Zimmer · 82 m² · Erstbezug 2021',
    status: 'Verkauft',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80&auto=format&fit=crop',
  },
  {
    title: 'Doppelhaushälfte Schleswig',
    details: '4 Zimmer · 115 m² · Garten 320 m²',
    status: 'Aktuell verfügbar',
    img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=700&q=80&auto=format&fit=crop',
  },
]

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title mb-4">
            Aktuelle{' '}
            <span className="text-gold italic">Objekte</span>
          </h2>
          <p className="font-body text-gray-500 text-lg leading-relaxed">
            Eine Auswahl unserer erfolgreich vermarkteten und aktuellen Immobilien.
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-anthrazit/5">
            {/* YouTube Placeholder — replace src with real YouTube embed URL */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ObiIhqzOovM?start=113"
              title="NIU Immobilien – Objektvideo Showcase"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center font-body text-sm text-gray-400 mt-4">
            Beispiel-Objektvideo · Eigentumswohnung Flensburg Innenstadt
          </p>
        </motion.div>

        {/* Property Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {objekte.map((obj) => (
            <motion.div
              key={obj.title}
              variants={fadeUp}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={obj.img}
                  alt={obj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full ${
                      obj.status === 'Verkauft'
                        ? 'bg-anthrazit/80 text-white'
                        : 'bg-gold text-white'
                    }`}
                  >
                    {obj.status}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-anthrazit mb-1 leading-snug">
                  {obj.title}
                </h3>
                <p className="font-body text-sm text-gray-500">{obj.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-gold/8 rounded-2xl px-8 py-6 border border-gold/20">
            <p className="font-body text-anthrazit font-medium mb-1">
              Interesse an weiteren Objekten?
            </p>
            <p className="font-body text-gray-500 text-sm">
              Weitere Objekte und aktuelle Verfügbarkeiten gerne{' '}
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="text-gold font-semibold hover:underline"
              >
                auf Anfrage
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
