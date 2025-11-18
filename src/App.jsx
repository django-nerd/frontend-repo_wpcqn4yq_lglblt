import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Problem from './components/Problem'
import Solution from './components/Solution'
import CoreFeatures from './components/CoreFeatures'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import Vision from './components/Vision'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,28,41,1),_transparent_60%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Logos />
        <Problem />
        <Solution />
        <CoreFeatures />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Vision />
        <CTA />
        <footer className="py-12 text-center text-white/50 text-sm">© {new Date().getFullYear()} Resolvia. All rights reserved.</footer>
      </div>
    </div>
  )
}

export default App
