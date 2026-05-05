import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UeberMich from './components/UeberMich'
import Leistungen from './components/Leistungen'
import Referenzen from './components/Referenzen'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <UeberMich />
        <Leistungen />
        <Referenzen />
        <Kontakt />
      </main>
      <Footer />
    </div>
  )
}
