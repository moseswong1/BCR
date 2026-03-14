"use client";

import Link from "next/link";

export default function DailyBriefPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Daily Updates
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              Market Snapshots
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Daily Brief
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Your essential market snapshot and trading catalysts. Begin your trading session prepared with overnight moves, scheduled events, and actionable opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#summary"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                View Today's Summary
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
          Market Data / Daily Analysis
        </div>

        <div className="mt-8 space-y-12" id="summary">
        {/* Overview */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Trading Day Snapshot</h2>
          <p className="text-lg text-slate-700 mb-6">
            Begin your trading session prepared. Each morning, we deliver an executive summary of overnight moves, scheduled events, and actionable opportunities to keep you ahead of the market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Overnight Moves",
                description: "Track how Asian and European markets moved while you were sleeping"
              },
              {
                title: "Day's Catalysts",
                description: "Economic releases, central bank decisions, and corporate events to watch"
              },
              {
                title: "Trading Setups",
                description: "High-probability opportunities with clear entry and exit levels"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Today's Market Summary */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Today's Market Summary - February 3, 2026</h2>
          
          <div className="space-y-6">
            {/* Forex */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                Forex Markets
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { pair: "EURUSD", level: "1.18067", change: "+0.82%", outlook: "Bullish on data strength" },
                  { pair: "GBPUSD", level: "1.26841", change: "-0.35%", outlook: "Consolidating near resistance" },
                  { pair: "USDJPY", level: "155.647", change: "+1.24%", outlook: "Risk sentiment deteriorating" },
                  { pair: "AUDUSD", level: "0.65234", change: "+0.51%", outlook: "Choppy range trading" }
                ].map((fx, idx) => (
                  <div key={idx} className="bg-slate-50 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">{fx.pair}</span>
                      <span className={fx.change.startsWith("+") ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {fx.change}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">Level: {fx.level}</div>
                    <div className="text-xs text-slate-500 bg-white rounded p-2">{fx.outlook}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indices */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-600 rounded-full"></span>
                Equity Indices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { index: "S&P 500", level: "6,976.45", change: "+0.54%", sentiment: "Positive" },
                  { index: "Nasdaq 100", level: "25,738.61", change: "+0.73%", sentiment: "Bullish" },
                  { index: "FTSE 100", level: "8,124.30", change: "-0.12%", sentiment: "Neutral" }
                ].map((idx, i) => (
                  <div key={i} className="bg-slate-50 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">{idx.index}</span>
                      <span className={idx.change.startsWith("+") ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {idx.change}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">{idx.level}</div>
                    <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">
                      {idx.sentiment}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commodities */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
                Commodities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { commodity: "Gold", level: "$4,899.39/oz", change: "+5.11%", note: "Strong safe-haven demand" },
                  { commodity: "Crude Oil (WTI)", level: "$78.45/bbl", change: "+2.34%", note: "OPEC+ production cuts support" },
                  { commodity: "Natural Gas", level: "$2.87/MMBtu", change: "-1.08%", note: "Mild weather pressures" },
                  { commodity: "Copper", level: "$4.23/lb", change: "+0.89%", note: "China stimulus hopes" }
                ].map((com, idx) => (
                  <div key={idx} className="bg-slate-50 rounded p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900">{com.commodity}</span>
                      <span className={com.change.startsWith("+") ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {com.change}
                      </span>
                    </div>
                    <div className="text-sm text-slate-600 mb-2">{com.level}</div>
                    <div className="text-xs text-slate-500 bg-white rounded p-2">{com.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Economic Events Today */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Today's Economic Releases</h2>
          <div className="space-y-4">
            {[
              {
                time: "08:30 GMT",
                country: "🇺🇸",
                event: "Initial Jobless Claims",
                forecast: "218K",
                importance: "High"
              },
              {
                time: "13:00 GMT",
                country: "🇪🇺",
                event: "ECB President Lagarde Speech",
                forecast: "N/A",
                importance: "Medium"
              },
              {
                time: "14:30 GMT",
                country: "🇬🇧",
                event: "UK Manufacturing PMI",
                forecast: "48.5",
                importance: "High"
              },
              {
                time: "16:00 GMT",
                country: "🇺🇸",
                event: "Factory Orders MoM",
                forecast: "-0.8%",
                importance: "Medium"
              }
            ].map((event, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-4 py-3 flex justify-between items-start">
                <div>
                  <div className="font-semibold text-slate-900">{event.time} - {event.event}</div>
                  <div className="text-sm text-slate-600">Forecast: {event.forecast}</div>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded ${
                  event.importance === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {event.importance}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/economic-calendar" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              View Full Economic Calendar →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Never Miss a Market Move</h2>
          <p className="text-lg mb-6 text-amber-100">
            Get daily briefings delivered to your inbox and stay ahead of the markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-amber-600 font-semibold py-3 px-8 rounded-lg hover:bg-amber-50 transition">
              Open an Account
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-amber-600 transition">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </section>
    </main>
  );
}
