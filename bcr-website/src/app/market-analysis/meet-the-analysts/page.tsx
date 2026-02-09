export const metadata = { title: "Strategy Team - Market Analysis" };

export default function StrategyTeamPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Our Team
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              Expert Analysts
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Strategy Team
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Meet the experts providing your competitive trading advantage. Our team of experienced market professionals combines technical expertise with market intuition.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#team"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Meet the Team
              </a>
              <a
                href="/market-analysis"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Team / Experts
        </div>

        <div className="mt-8 space-y-12" id="team">
        {/* Overview */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">BCR's Analysis Specialists</h2>
          <p className="text-lg text-slate-700 mb-6">
            Our team of experienced market professionals combines technical expertise with market intuition. Working around the clock across multiple time zones, they identify opportunities and risks before they become obvious to other traders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "25+",
                label: "Years Combined Experience"
              },
              {
                stat: "8",
                label: "Dedicated Analysts"
              },
              {
                stat: "24/5",
                label: "Market Coverage"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">The Experts Behind Your Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "James Richardson",
                title: "Chief Market Strategist",
                focus: "Global Macro, Forex",
                bio: "Leading our research function with 18 years of market experience. James identifies structural trends and inflection points that define multi-quarter moves in currencies and cross-asset correlations.",
                expertise: ["Macro Analysis", "Forex Trading", "Risk Management"]
              },
              {
                name: "Sarah Chen",
                title: "Senior Equity Analyst",
                focus: "Equities, Sector Rotation",
                bio: "With 14 years tracking equity markets, Sarah combines fundamental research with momentum analysis to identify sector rotations before they gain mainstream attention.",
                expertise: ["Equity Markets", "Sector Analysis", "Technical Analysis"]
              },
              {
                name: "Marco Giuliani",
                title: "Commodities Specialist",
                focus: "Metals, Energies, Agricultural",
                bio: "A 16-year veteran of commodity trading, Marco leverages supply-demand dynamics and inventory data to forecast moves in precious metals, energy, and agricultural complexes.",
                expertise: ["Commodities", "Energy Markets", "Precious Metals"]
              },
              {
                name: "Emily Watson",
                title: "Economic Data Analyst",
                focus: "Economic Calendars, Data Interpretation",
                bio: "Emily's expertise in parsing economic data and central bank communications helps our traders anticipate policy shifts and data-driven market moves.",
                expertise: ["Economic Data", "Central Bank Policy", "Market Events"]
              },
              {
                name: "David Okonkwo",
                title: "Technical Analysis Lead",
                focus: "Chart Patterns, Indicators",
                bio: "David's 12-year track record in technical analysis identifies crucial price levels and reversal patterns. His work helps traders enter and exit at optimal points.",
                expertise: ["Technical Analysis", "Chart Patterns", "Trading Signals"]
              },
              {
                name: "Lisa Bergström",
                title: "Emerging Markets Analyst",
                focus: "EM Currencies, Regional Equities",
                bio: "Lisa specializes in capturing alpha from emerging market dislocations. Her regional expertise spans currency crises, central bank intervention, and growth equity trends.",
                expertise: ["Emerging Markets", "EM Currencies", "Growth Equities"]
              }
            ].map((analyst, idx) => (
              <div key={idx} className="border rounded-lg p-6 hover:shadow-lg transition">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mb-4"></div>
                  <h3 className="text-xl font-bold text-slate-900">{analyst.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-1">{analyst.title}</p>
                  <p className="text-sm text-slate-600 mb-3">{analyst.focus}</p>
                </div>
                <p className="text-slate-700 text-sm mb-4">{analyst.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {analyst.expertise.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Work With Our Team */}
        <section className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Our Team Stands Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Live Market Calls",
                description: "Real-time audio and video updates during key market hours and breaking news events"
              },
              {
                title: "Cross-Asset Expertise",
                description: "Unified view of forex, stocks, commodities, and indices with clear correlation analysis"
              },
              {
                title: "Trading Workshops",
                description: "Learn directly from our analysts through live sessions covering strategies and market themes"
              },
              {
                title: "Entry & Exit Levels",
                description: "Precise technical and fundamental targets with predetermined stops for risk management"
              },
              {
                title: "Round-the-Clock Coverage",
                description: "Our global team ensures you get insights across Asian, European, and North American sessions"
              },
              {
                title: "Objective Analysis",
                description: "No sales agenda—just honest, research-driven insights designed to improve your results"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-5">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Access Expert-Level Analysis</h2>
            <p className="text-lg mb-6 text-blue-100">
              Unlock daily insights, join interactive sessions, and get a direct feed of market opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition">
                Follow Our Analysis
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 transition">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
    </main>
  );
}
