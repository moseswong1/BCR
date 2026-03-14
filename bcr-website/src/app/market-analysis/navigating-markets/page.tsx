"use client";

import Link from "next/link";

export default function MarketIntelligencePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Market Analysis
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Research & Insights
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Market Intelligence
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Strategic research and in-depth analysis on global market dynamics. Understand what's moving markets with our comprehensive research across all major asset classes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#research"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Explore Research
              </a>
              <Link
                href="/market-analysis"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Analysis / Market Research
        </div>

        <div className="mt-8 space-y-12" id="research">
        {/* Overview */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Deep Market Research</h2>
          <p className="text-lg text-slate-700 mb-6">
            Understand what's moving markets with our comprehensive research and strategic analysis across all major asset classes and geographies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Trend Analysis",
                description: "Comprehensive breakdowns of momentum, reversals, and key technical levels across markets"
              },
              {
                title: "Geopolitical Impact",
                description: "How global events and policy shifts influence currency, commodity, and equity valuations"
              },
              {
                title: "Thematic Trading",
                description: "Identifying emerging opportunities through sector analysis and macro trend identification"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Analysis */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Commentary & Analysis</h2>
          <div className="space-y-6">
            {[
              {
                date: "Feb 3, 2026",
                title: "USD Strength Continues as Inflation Expectations Rise",
                excerpt: "The dollar extends gains on the back of stronger-than-expected economic data. Key levels to watch for major pairs.",
                category: "Forex"
              },
              {
                date: "Feb 2, 2026",
                title: "Tech Sector Shows Resilience Despite Market Headwinds",
                excerpt: "Large-cap tech stocks outperform broader indices. Analysis on sector momentum and upcoming earnings reports.",
                category: "Equities"
              },
              {
                date: "Feb 1, 2026",
                title: "Precious Metals Rally on Safe-Haven Demand",
                excerpt: "Gold and silver prices surge amid geopolitical tensions. Expert view on longer-term precious metal trends.",
                category: "Commodities"
              },
              {
                date: "Jan 31, 2026",
                title: "Energy Markets React to OPEC+ Decision",
                excerpt: "Oil prices consolidate following production announcements. What this means for energy traders and investors.",
                category: "Energy"
              }
            ].map((article, idx) => (
              <article key={idx} className="border-l-4 border-blue-600 pl-6 py-4 hover:bg-slate-50 rounded transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{article.title}</h3>
                <p className="text-slate-600">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Analysis Tools */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Research Tools & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Economic Calendar",
                description: "Track upcoming economic releases and their potential market impact",
                link: "/economic-calendar"
              },
              {
                title: "Trading Platforms",
                description: "Access our suite of powerful trading platforms for execution",
                link: "/mt5"
              },
              {
                title: "Market Analysis Hub",
                description: "Explore all our analysis, daily briefs, and strategy insights",
                link: "/market-analysis"
              },
              {
                title: "Contact Our Team",
                description: "Get in touch with our analysts for personalized insights",
                link: "/contact"
              }
            ].map((tool, idx) => (
              <Link key={idx} href={tool.link} className="block bg-slate-50 rounded-lg p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-slate-900 mb-2">{tool.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{tool.description}</p>
                <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Trading with BCR</h2>
          <p className="text-lg mb-6 text-blue-100">
            Access our market intelligence and execute trades with competitive spreads
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition">
              Open an Account
            </Link>
            <Link href="/demo" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-600 transition">
              Try Demo
            </Link>
          </div>
        </section>
      </div>
    </section>
    </main>
  );
}
