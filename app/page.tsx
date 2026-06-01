export default function Page() {
  const faqs = [
    {
      q: 'Which databases are supported?',
      a: 'PostgreSQL, MySQL, and SQLite are fully supported. More adapters are on the roadmap.'
    },
    {
      q: 'How does live sync work?',
      a: 'The service polls your schema on a configurable interval, diffs it against a stored snapshot, and fires webhook notifications on any change.'
    },
    {
      q: 'Is my connection string stored securely?',
      a: 'Connection strings are encrypted at rest with AES-256 and never logged or exposed in responses.'
    }
  ]

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate ERDs that{' '}
          <span className="text-[#58a6ff]">update with schema changes</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Connect your database once. Get interactive entity relationship diagrams that stay in sync — with instant webhook notifications whenever your schema changes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $25/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No setup fees.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-2xl w-full grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔗', title: 'Secure Connect', desc: 'Encrypted connection strings, never logged.' },
          { icon: '📊', title: 'Live ERDs', desc: 'Interactive diagrams rebuilt on every schema change.' },
          { icon: '🔔', title: 'Webhooks', desc: 'Instant notifications to Slack, email, or any endpoint.' }
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 flex flex-col items-center">
          <div className="text-4xl font-bold text-white mb-1">$25<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, one flat price</div>
          <ul className="w-full space-y-3 mb-8">
            {[
              'Unlimited databases',
              'Live ERD generation',
              'Schema change webhooks',
              'Configurable poll intervals',
              'Export diagrams as PNG/SVG',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-1">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-xs text-[#6e7681] text-center">
        &copy; {new Date().getFullYear()} ERD Live Sync. All rights reserved.
      </footer>
    </main>
  )
}
