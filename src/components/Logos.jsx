const logos = [
  'Stripe', 'HubSpot', 'Salesforce', 'Notion', 'Zendesk', 'Slack'
]

function Logos() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center gap-10 opacity-70 flex-wrap">
          {logos.map((l) => (
            <div key={l} className="text-white/60 text-sm tracking-wider">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
