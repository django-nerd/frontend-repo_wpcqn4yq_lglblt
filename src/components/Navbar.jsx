import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 shadow-[0_0_35px_rgba(99,102,241,0.35)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">AIOps OS</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a className="hover:text-white transition" href="#features">Features</a>
              <a className="hover:text-white transition" href="#solutions">Solutions</a>
              <a className="hover:text-white transition" href="#pricing">Pricing</a>
              <a className="hover:text-white transition" href="#faq">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                Get started
              </a>
            </div>

            <button className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/10 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
