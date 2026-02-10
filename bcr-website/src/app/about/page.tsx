export const metadata = { title: "About BCR - Transparent and Reliable CFDs Trading" };

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Our Company
              <span className="h-1 w-1 rounded-full bg-indigo-400" />
              18 Years of Excellence
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              About BCR
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Trade the world's markets with a trusted and regulated firm. BCR is committed to delivering transparent and reliable trading services to our clients worldwide.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Get in Touch
              </a>
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Start Trading
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Company / About
        </div>

        <div className="mt-8 space-y-12">
          {/* Core Values */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Boundless. Confident. Respected.</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-indigo-500 bg-indigo-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Boundless</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Over the past 18 years, BCR has achieved many milestones in the derivatives trading industry. We are a global leader in online FX and CFD trading services. Our financial services have reached over 70 countries worldwide, serving a sizable clientele spanning different cultures and economic backgrounds. Our offices are located in seven countries across the globe. With our vast experience and support available in eight languages, BCR is the preferred choice for traders at every level.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Confident</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We believe that every client has the potential to grow and prosper with BCR, and we strive to understand our clients' goals to provide the products and services they need, delivered on demand. We pride ourselves on providing our clients with a professional and fair experience. Our trading environment provides a trustworthy experience, by employing a strict No Re-Quote and No Order Rejection policy.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 bg-pink-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Respected</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We hold highly regarded, globally-recognized financial services licenses in several jurisdictions, and we have consistently adhered to our regulatory obligations, ensuring the protection of our clients' interests and the security of their funds.
                </p>
              </div>
            </div>
          </section>

          {/* Key Stats */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">BCR by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  stat: "Operating since 2008",
                  label: "AU Operations",
                  description: "Established and regulated in Australia"
                },
                {
                  stat: "70+",
                  label: "Countries Served",
                  description: "A truly global presence with diverse clientele"
                },
                {
                  stat: "500+",
                  label: "Trading Instruments",
                  description: "Forex, metals, commodities, indices, and stocks"
                },
                {
                  stat: "100K+",
                  label: "Active Traders",
                  description: "Trusted by traders from around the world"
                },
                {
                  stat: "$30B",
                  label: "Notional Monthly Trading Volume",
                  description: "Average monthly processed trade value"
                },
                {
                  stat: "AU",
                  label: "Regulated in Australia",
                  description: "Services provided under Australian regulatory requirements"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Choose BCR?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Multi Licensed",
                  description: "BCR holds highly regarded, globally-recognized financial services licenses in several jurisdictions, ensuring regulatory compliance and client protection."
                },
                {
                  title: "Raw Spreads from 0.0",
                  description: "Trade with competitive, transparent pricing and raw spreads that give you the tightest execution available in the market."
                },
                {
                  title: "Trade on MT4 & MT5",
                  description: "Access world-leading trading platforms with advanced charting tools, automated trading, and comprehensive market analysis."
                },
                {
                  title: "Diverse Asset Classes",
                  description: "Trade CFDs on forex, metals, commodities, shares, and indices. With 500+ instruments, diversification is within reach."
                },
                {
                  title: "Award-Winning Service",
                  description: "Recognized for excellence in the trading industry. Our commitment to quality and innovation has earned multiple industry accolades."
                },
                {
                  title: "No Re-Quote & No Rejection",
                  description: "Experience fair dealing with our strict no re-quote and no order rejection policy. Transparent execution every time."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Global Presence */}
          <section className="bg-slate-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Global Presence</h2>
            <p className="text-lg text-slate-700 mb-6">
              With offices in 7 countries across the globe and support available in 8 languages, BCR is positioned to serve traders wherever they are.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  region: "Asia-Pacific",
                  presence: "Primary trading hub serving the region with local support teams"
                },
                {
                  region: "Europe",
                  presence: "Multi-jurisdictional presence with regulated entities across key markets"
                },
                {
                  region: "Middle East & Africa",
                  presence: "Growing presence with dedicated support for emerging markets"
                },
                {
                  region: "24/5 Support",
                  presence: "Round-the-clock customer support available in multiple languages"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <div className="h-5 w-5 rounded-full bg-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.region}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.presence}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Statement */}
          <section className="border-2 border-indigo-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              To empower traders worldwide by providing transparent, reliable, and innovative CFD trading solutions. We are committed to delivering world-class execution, competitive pricing, and exceptional customer service while maintaining the highest standards of regulatory compliance and client protection.
            </p>
          </section>

          {/* Regulatory Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Regulatory Compliance</h2>
            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <p className="text-slate-700 mb-6">
                BCR Co Pty Ltd is regulated by multiple financial authorities, ensuring that we meet the highest standards of compliance and client protection:
              </p>
              <ul className="space-y-4">
                {[
                  "Licensed and regulated by the British Virgin Islands Financial Services Commission (License No. SIBA/L/19/1122)",
                  "Company Registration Number in BVI: 1975046",
                  "Registered Address: Trident Chambers, Wickham's Cay 1, Road Town, Tortola, British Virgin Islands",
                  "Commitment to strict regulatory obligations ensuring protection of client interests and security of funds"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Disclosure Documents */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Disclosure Documents</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8">
              <p className="text-slate-700 mb-6">
                We believe in transparency. Access all our important legal, regulatory, and disclosure documents to fully understand our services and your obligations as a trader.
              </p>
              <a
                href="/disclosure-documents"
                className="inline-flex items-center justify-center rounded-lg bg-[#FFD400] px-6 py-3 font-semibold text-black hover:brightness-95 transition-all"
              >
                View Disclosure Documents
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
