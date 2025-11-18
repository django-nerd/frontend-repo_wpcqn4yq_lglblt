import { LineChart, Wrench, Megaphone, Users } from 'lucide-react'

const pillars = [
  {
    icon: LineChart,
    title: 'Market Research Engine',
    desc: 'Go from idea to validated opportunity. Deep analysis, Competitor Lab, Problem Forensics, Business Model Lab, and Trends & Tech Radar reveal what to build and why.'
  },
  {
    icon: Wrench,
    title: 'AI SaaS Builder & IDE',
    desc: 'Describe it and ship it. Auto‑generated full‑stack apps—UI, auth, database—with an integrated editor, live preview, and one‑click deploys via GitHub + Vercel.'
  },
  {
    icon: Megaphone,
    title: 'Marketing & Growth Engine',
    desc: 'Turn products into traction. Landing pages, ad creatives, social content, and email campaigns—plus Growth Engine playbooks for launch and scale.'
  },
  {
    icon: Users,
    title: 'The Intelligence Exchange',
    desc: 'A built‑in marketplace for verified builders and growth partners. Swipe & Match to find co‑founders and opportunities that fit your goals.'
  }
]

function CoreFeatures() {
  return (
    <section id="core-features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Core Features</h2>
          <p className="mt-4 text-white/75">The pillars that power your journey from idea to revenue.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/80 via-blue-500/80 to-orange-400/80 text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-6">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreFeatures
