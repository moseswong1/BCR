export const metadata = { title: "Market Analysis" };

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Research & Insights
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Market Analysis
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Market Analysis
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Strategic insights, daily briefings, and expert perspectives on global markets
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#sections"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Explore Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Market Analysis Hub
        </div>

        <div className="mt-8 space-y-8" id="sections">
        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section 1: Market Intelligence */}
          <a href="/market-analysis/navigating-markets" className="group block">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition border-l-4 border-blue-600">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Market Intelligence</h3>
              <p className="text-slate-600">In-depth research and strategic analysis on market trends</p>
            </div>
          </a>

          {/* Section 2: Daily Brief */}
          <a href="/market-analysis/the-daily-fix" className="group block">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition border-l-4 border-amber-600">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Daily Brief</h3>
              <p className="text-slate-600">Essential morning updates and trading catalysts</p>
            </div>
          </a>

          {/* Section 3: Strategy Team */}
          <a href="/market-analysis/meet-the-analysts" className="group block">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition border-l-4 border-purple-600">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM4.5 20H9a4 4 0 014-4h5.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Strategy Team</h3>
              <p className="text-slate-600">Expert perspectives from our market specialists</p>
            </div>
          </a>
        </div>

        {/* Description */}
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">What You'll Find Here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Market Intelligence</h4>
              <p className="text-slate-600">Strategic breakdowns of market dynamics, trend analysis, and thematic opportunities across all asset classes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Daily Brief</h4>
              <p className="text-slate-600">Your morning snapshot of overnight moves, key economic releases, and high-probability trading setups.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Strategy Team</h4>
              <p className="text-slate-600">Meet the experts behind BCR's analysis—specialists across forex, equities, commodities, and emerging markets.</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
