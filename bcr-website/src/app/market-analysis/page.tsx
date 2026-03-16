"use client";

import Link from "next/link";
import { TrendingUp, Calendar, Users, BarChart3, Clock, Target, BookOpen, LineChart, Globe, Shield } from "lucide-react";

export default function MarketAnalysisPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Research & Insights
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              Market Analysis
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Market Analysis Hub
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Strategic insights, daily briefings, and expert perspectives on global markets. 
              Stay ahead with BCR's comprehensive research and analysis across forex, indices, commodities, and more.
            </p>


            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-sm text-white/60">Market Updates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-sm text-white/60">Expert Analysts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/5</div>
                <div className="text-sm text-white/60">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Market Analysis Hub
        </div>

        <div className="mt-8 space-y-12" id="sections">
          {/* Main Sections - Enhanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section 1: Market Intelligence */}
            <Link href="/market-analysis/navigating-markets" className="group block">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Market Intelligence</h3>
                <p className="text-slate-600 mb-4">In-depth research and strategic analysis on global market trends, technical levels, and trading opportunities.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>Trend Analysis & Technical Levels</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span>Geopolitical Market Impact</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span>Thematic Trading Ideas</span>
                  </div>
                </div>
                <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  Explore Research <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
              </div>
            </Link>

            {/* Section 2: Daily Brief */}
            <Link href="/market-analysis/the-daily-fix" className="group block">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Daily Brief</h3>
                <p className="text-slate-600 mb-4">Your essential morning snapshot with overnight moves, economic releases, and high-probability trading setups.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Overnight Market Recap</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>Today's Economic Catalysts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <LineChart className="w-4 h-4 text-amber-500" />
                    <span>Actionable Trading Setups</span>
                  </div>
                </div>
                <span className="inline-flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all">
                  View Today's Brief <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
              </div>
            </Link>

            {/* Section 3: Strategy Team */}
            <Link href="/market-analysis/meet-the-analysts" className="group block">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-purple-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Strategy Team</h3>
                <p className="text-slate-600 mb-4">Meet the expert analysts behind BCR's research—specialists across forex, equities, commodities, and emerging markets.</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>3 Dedicated Market Analysts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Shield className="w-4 h-4 text-purple-500" />
                    <span>Global Market Perspective</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    <span>Live Trading Workshops</span>
                  </div>
                </div>
                <span className="inline-flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                  Meet the Team <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </span>
              </div>
            </Link>
          </div>

          {/* What You'll Find Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What You'll Find in Our Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Market Intelligence</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Strategic breakdowns of market dynamics, trend analysis, and thematic opportunities across all asset classes. Our research identifies momentum shifts, key technical levels, and geopolitical impacts before they become consensus.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Daily Brief</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your morning snapshot of overnight market moves, key economic releases, and high-probability trading setups. Start each session informed with clear entry levels, risk parameters, and intraday catalysts to watch.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Strategy Team</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Meet the experts behind BCR's analysis—specialists across forex, equities, commodities, and emerging markets. Learn their methodologies, access live workshops, and benefit from decades of combined experience.
                </p>
              </div>
            </div>
          </div>

          {/* Latest Insights Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Latest Insights</h2>
              <Link href="/market-analysis/navigating-markets" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Forex",
                  title: "USD Strength Continues Amid Rising Inflation Expectations",
                  excerpt: "The dollar extends gains on stronger-than-expected data. Key levels to watch for EUR/USD and GBP/USD.",
                  date: "Today",
                  color: "blue"
                },
                {
                  category: "Equities",
                  title: "Tech Sector Shows Resilience Despite Market Headwinds",
                  excerpt: "Large-cap tech stocks outperform broader indices. Analysis on sector momentum and upcoming earnings.",
                  date: "Yesterday",
                  color: "emerald"
                },
                {
                  category: "Commodities",
                  title: "Gold Rallies on Safe-Haven Demand",
                  excerpt: "Precious metals surge amid geopolitical tensions. Expert view on longer-term trends and key resistance.",
                  date: "2 days ago",
                  color: "amber"
                },
                {
                  category: "Indices",
                  title: "S&P 500 Tests All-Time Highs",
                  excerpt: "US markets approach record territory. Technical analysis of key support and resistance zones.",
                  date: "3 days ago",
                  color: "purple"
                }
              ].map((article, idx) => (
                <article key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold text-white bg-${article.color}-600 px-3 py-1 rounded-full`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{article.title}</h3>
                  <p className="text-slate-600 text-sm">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/economic-calendar" className="bg-slate-50 rounded-xl p-5 text-center hover:bg-slate-100 transition border border-slate-200">
              <Calendar className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <div className="font-semibold text-slate-900 text-sm">Economic Calendar</div>
              <div className="text-xs text-slate-500 mt-1">Track key releases</div>
            </Link>
            <Link href="/mt5" className="bg-slate-50 rounded-xl p-5 text-center hover:bg-slate-100 transition border border-slate-200">
              <LineChart className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <div className="font-semibold text-slate-900 text-sm">Trading Platforms</div>
              <div className="text-xs text-slate-500 mt-1">MT4 & MT5</div>
            </Link>
            <Link href="/spreads-commission-swap" className="bg-slate-50 rounded-xl p-5 text-center hover:bg-slate-100 transition border border-slate-200">
              <TrendingUp className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <div className="font-semibold text-slate-900 text-sm">Trading Conditions</div>
              <div className="text-xs text-slate-500 mt-1">Spreads & Fees</div>
            </Link>
            <Link href="/contact" className="bg-slate-50 rounded-xl p-5 text-center hover:bg-slate-100 transition border border-slate-200">
              <Users className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <div className="font-semibold text-slate-900 text-sm">Contact Analysts</div>
              <div className="text-xs text-slate-500 mt-1">Get in touch</div>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Trading with Expert Insights
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Open an account today and get access to BCR's comprehensive market analysis, daily briefings, and expert trading insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition shadow-lg">
                Open Live Account
              </Link>
              <Link href="/demo" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition">
                Try Demo Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
