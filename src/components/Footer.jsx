export default function Footer() {
  return (
    <footer className="bg-anthrazit text-white/60 font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-bold text-gold">NIU</span>
            <span className="font-body text-sm text-white/70">Immobilien</span>
          </div>

          {/* Center */}
          <p className="text-sm text-center">
            © {new Date().getFullYear()} NIU Immobilien – Ole Nieuwenhuizen. Alle Rechte vorbehalten.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#impressum" className="hover:text-gold transition-colors duration-200">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-gold transition-colors duration-200">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
