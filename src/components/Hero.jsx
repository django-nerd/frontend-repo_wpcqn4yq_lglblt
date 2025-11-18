import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-24">
      {/* gradient auras */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.25),_transparent_60%)] blur-2xl" />
        <div className="absolute left-[20%] top-[25%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_transparent_60%)] blur-2xl" />
        <div className="absolute right-[12%] bottom-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.2),_transparent_60%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              Introducing an AI Operating System for business
            </div>
            
            <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-white">
              Orchestrate every workflow with an AI that never sleeps
            </h1>
            <p className="mt-6 text-lg leading-7 text-white/75 max-w-xl">
              Centralize agents, automations, knowledge, and analytics into one secure command center. Ship faster, support smarter, and operate autonomously.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                See how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                SOC2 & GDPR ready
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Live in under 10 minutes
              </div>
            </div>
          </div>

          {/* Spline scene */}
          <div className="relative h-[520px] lg:h-[580px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* soft gradient overlay to blend with background, pass through clicks */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
