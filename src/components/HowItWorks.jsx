function HowItWorks() {
  const steps = [
    {
      title: 'Idea',
      desc: 'Start with a concept. Resolvia validates it, profiles your audience, and sizes the market.'
    },
    {
      title: 'Build',
      desc: 'The AI coding agent assembles your full application or website—front to back—in minutes.'
    },
    {
      title: 'Deploy',
      desc: 'Launch instantly with one‑click deployment and production‑ready infrastructure.'
    },
    {
      title: 'Market',
      desc: 'The AI marketing agent crafts campaigns, creatives, and funnels to find your first customers.'
    },
    {
      title: 'Grow',
      desc: 'An AI Mini‑CEO monitors metrics, suggests improvements, and runs experiments to scale revenue.'
    }
  ]

  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How It Works</h2>
          <p className="mt-4 text-white/75">A simple, guided path from idea to income.</p>
        </div>
        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">Step</div>
              <h3 className="mt-1 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-6">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
