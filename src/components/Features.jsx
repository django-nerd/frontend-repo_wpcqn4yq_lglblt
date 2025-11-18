import { Brain, ServerCog, Workflow, LineChart, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Multi-agent intelligence',
    desc: 'Deploy specialized agents for sales, support, ops, and finance — each trained on your data and brand.'
  },
  {
    icon: Workflow,
    title: 'Autonomous workflows',
    desc: 'Drag-and-drop automations that trigger across tools, data sources, and teams with human-in-the-loop controls.'
  },
  {
    icon: ServerCog,
    title: 'Unified knowledge',
    desc: 'Bring docs, wikis, tickets, and product data into one neural index for instant, accurate answers.'
  },
  {
    icon: LineChart,
    title: 'Operational analytics',
    desc: 'Real-time dashboards track agent performance, SLAs, conversions and business KPIs end-to-end.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Role-based access, audit logs, data residency, and configurable guardrails across every action.'
  },
  {
    icon: Sparkles,
    title: 'No-code to pro-code',
    desc: 'Start with templates, then extend with SDKs, webhooks, and APIs when you need more power.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Capabilities
          </p>
          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Everything you need to run your business on autopilot
          </h2>
          <p className="mt-4 text-white/70">
            Connect your stack, centralize your knowledge, and delegate tasks to AI agents that execute with precision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/80 via-blue-500/80 to-orange-400/80 text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
