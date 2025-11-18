import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Ready to give your business an AI operating system?
          </h3>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">
            Launch in minutes with templates for sales, support, ops, and more. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
              Start free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
