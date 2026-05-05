import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'E-Mail',
    value: 'ole@niu-immobilien.de',
    href: 'mailto:ole@niu-immobilien.de',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+49 461 000000',
    href: 'tel:+49461000000',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Standort',
    value: 'Flensburg, Schleswig-Holstein',
    href: null,
  },
]

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: '', email: '', nachricht: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="kontakt" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label">Kontakt</span>
          <h2 className="section-title mb-4">
            Lassen Sie uns{' '}
            <span className="text-gold italic">sprechen</span>
          </h2>
          <p className="font-body text-gray-500 text-lg leading-relaxed">
            Ich freue mich auf Ihre Anfrage – ob Verkauf, Bewertung oder einfach eine erste Beratung.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {contactInfo.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  {item.icon}
                </div>
                <div>
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-gray-400 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-anthrazit font-medium hover:text-gold transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-anthrazit font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              variants={fadeUp}
              className="mt-2 rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gray-100 relative flex items-center justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70&auto=format&fit=crop"
                alt="Flensburg, Schleswig-Holstein"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-anthrazit/30">
                <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                  <p className="font-body text-sm font-semibold text-anthrazit">Flensburg</p>
                  <p className="font-body text-xs text-gray-500">Schleswig-Holstein</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-anthrazit mb-2">Vielen Dank!</h3>
                  <p className="font-body text-gray-500">Ihre Nachricht wurde gesendet. Ich melde mich in Kürze bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-body text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Ihr Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Max Mustermann"
                        className="font-body text-sm border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 bg-gray-50 placeholder:text-gray-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-wider text-gray-500">
                        E-Mail-Adresse
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="max@beispiel.de"
                        className="font-body text-sm border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 bg-gray-50 placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nachricht" className="font-body text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={5}
                      required
                      value={formData.nachricht}
                      onChange={handleChange}
                      placeholder="Ich interessiere mich für eine Immobilienbewertung / den Verkauf meines Hauses..."
                      className="font-body text-sm border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 bg-gray-50 placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      'Nachricht senden'
                    )}
                  </button>

                  <p className="font-body text-xs text-gray-400 text-center">
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                    <a href="#datenschutz" className="text-gold hover:underline">Datenschutzerklärung</a> zu.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
