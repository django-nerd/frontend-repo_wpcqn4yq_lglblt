function UseCases() {
  const segments = [
    {
      title: 'SaaS',
      desc: 'Launch software without writing code. Validate a niche, generate your app, connect payments, and iterate fast with automated deployments and growth loops.'
    },
    {
      title: 'E‑Commerce',
      desc: 'Discover products, source manufacturers, and automate store setup. Resolvia optimizes pricing, ads, and fulfillment so you can focus on brand and customers.'
    },
    {
      title: 'Creator / Influencer',
      desc: 'Monetize your audience with courses, communities, and digital products. Build funnels, produce content, and track conversions—all in one place.'
    },
    {
      title: 'Agency',
      desc: 'Automate prospecting, proposals, and project delivery. Standardize services, generate client assets on demand, and scale capacity without a large team.'
    }
  ]

  return (
    <section id="use-cases" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Four Ways to Build Your Future</h2>
          <p className="mt-4 text-white/75">Pick a path—Resolvia handles the rest.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
