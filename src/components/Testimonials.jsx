function Testimonials() {
  const quotes = [
    { text: 'Resolvia built my SaaS MVP in 3 days. Mind-blowing.', author: 'Aman, Solo Founder' },
    { text: 'I spent months learning tools. Resolvia did everything in minutes.', author: 'Ria, Product Manager' },
    { text: 'This is the future of entrepreneurship. Period.', author: 'Danish, Tech Entrepreneur' }
  ]

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What founders are saying</h2>
          <p className="mt-4 text-white/75">Proof that leverage beats hustle.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-white/90">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-white/60 text-sm">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
