"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight, TrendingUp, Check } from "lucide-react";

type TabKey = "forex" | "shares" | "metals" | "commodities" | "indices";

type Row = {
  symbol: string;
  advantageMinSpread: string;
  advantageCommission: string;
  alphaMinSpread: string;
  alphaCommission: string;
};

type Tab = {
  key: TabKey;
  label: string;
  rows: Row[];
};

export default function SpreadsCommissionSwapPage() {
  const tabs: Tab[] = useMemo(
    () => [
      {
        key: "forex",
        label: "Forex CFDs",
        rows: [
          { symbol: "AUDUSD", advantageMinSpread: "1.2", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "EURUSD", advantageMinSpread: "1.2", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "GBPUSD", advantageMinSpread: "1.6", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
          { symbol: "USDCAD", advantageMinSpread: "1.5", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
          { symbol: "USDJPY", advantageMinSpread: "1.2", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "NZDUSD", advantageMinSpread: "1.7", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
          { symbol: "USDCHF", advantageMinSpread: "1.7", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
        ],
      },
      {
        key: "shares",
        label: "Share CFDs",
        rows: [
          { symbol: "#AXP", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#AAPL", advantageMinSpread: "15", advantageCommission: "20 AUD", alphaMinSpread: "15", alphaCommission: "20 AUD" },
          { symbol: "#BAC", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#C", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#KO", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#DIS", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
        ],
      },
      {
        key: "metals",
        label: "Metal CFDs",
        rows: [
          { symbol: "XAUUSD", advantageMinSpread: "24", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "XAGUSD", advantageMinSpread: "40", advantageCommission: "0 AUD", alphaMinSpread: "-", alphaCommission: "6 AUD" },
          { symbol: "XAGUSDmin", advantageMinSpread: "40", advantageCommission: "0 AUD", alphaMinSpread: "3", alphaCommission: "6 AUD" },
        ],
      },
      {
        key: "commodities",
        label: "Commodity CFDs",
        rows: [
          { symbol: "#CL", advantageMinSpread: "46", advantageCommission: "6 AUD", alphaMinSpread: "46", alphaCommission: "0 AUD" },
          { symbol: "XTIUSD", advantageMinSpread: "40", advantageCommission: "6 AUD", alphaMinSpread: "40", alphaCommission: "0 AUD" },
          { symbol: "XBRUSD", advantageMinSpread: "80", advantageCommission: "6 AUD", alphaMinSpread: "80", alphaCommission: "0 AUD" },
          { symbol: "XNGUSD", advantageMinSpread: "6", advantageCommission: "6 AUD", alphaMinSpread: "6", alphaCommission: "0 AUD" },
        ],
      },
      {
        key: "indices",
        label: "Index CFDs",
        rows: [
          { symbol: "#US500", advantageMinSpread: "30", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#US100", advantageMinSpread: "23", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#US30", advantageMinSpread: "40", advantageCommission: "0 AUD", alphaMinSpread: "30", alphaCommission: "0 AUD" },
          { symbol: "#JPN225", advantageMinSpread: "150", advantageCommission: "0 AUD", alphaMinSpread: "150", alphaCommission: "0 AUD" },
          { symbol: "#AUS200", advantageMinSpread: "20", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#GER40", advantageMinSpread: "20", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<TabKey>("forex");
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  const accountTypes = [
    {
      name: "Advantage",
      description: "Commission-free trading with competitive spreads",
      features: ["No commission fees", "Spreads from 1.2 pips", "All trading strategies allowed", "24/5 support"],
      popular: false
    },
    {
      name: "Alpha",
      description: "Raw spreads with low commission for active traders",
      features: ["Raw spreads from 0.0", "$6 AUD commission per lot", "Ultra-fast execution", "Priority support"],
      popular: true
    }
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[400px]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 mb-6">
              <TrendingUp className="w-4 h-4" />
              Trading Conditions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Transparent Spreads, Low Commission
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Start trading with BCR and enjoy spreads from 0.0 pips and competitive commission across forex, commodities, shares, and more.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-6 py-3 font-semibold text-black transition-all shadow-lg shadow-yellow-500/25"
              >
                Open an Account
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition-all backdrop-blur-sm"
              >
                Try Demo
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              * Spreads may vary based on market conditions and account type
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Account Types */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Account Types
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Choose Your Trading Account
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accountTypes.map((account, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-2xl p-8 transition-all duration-300 ${
                  account.popular 
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl scale-105' 
                    : 'bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10'
                }`}
              >
                {account.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${account.popular ? 'text-white' : 'text-slate-900'}`}>
                  {account.name}
                </h3>
                <p className={`mb-6 ${account.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {account.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {account.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${account.popular ? 'bg-yellow-500' : 'bg-yellow-100'}`}>
                        <Check className={`w-3 h-3 ${account.popular ? 'text-black' : 'text-yellow-600'}`} />
                      </div>
                      <span className={account.popular ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                    account.popular 
                      ? 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-500/25' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spreads Table */}
      <section id="competitive-pricing" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Spreads & Commission
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Competitive Pricing Across Markets
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  active === tab.key
                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-yellow-300 hover:bg-yellow-50'
                }`}
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-4 px-6 text-slate-500 font-semibold text-sm uppercase tracking-wider">Symbol</th>
                    <th className="text-left py-4 px-6 text-slate-500 font-semibold text-sm uppercase tracking-wider" colSpan={2}>
                      <span className="text-slate-900">Advantage</span>
                    </th>
                    <th className="text-left py-4 px-6 text-slate-500 font-semibold text-sm uppercase tracking-wider" colSpan={2}>
                      <span className="text-yellow-600">Alpha</span>
                    </th>
                  </tr>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-2 px-6"></th>
                    <th className="text-left py-2 px-6 text-xs text-slate-400 font-medium">Min Spread</th>
                    <th className="text-left py-2 px-6 text-xs text-slate-400 font-medium">Commission</th>
                    <th className="text-left py-2 px-6 text-xs text-slate-400 font-medium">Min Spread</th>
                    <th className="text-left py-2 px-6 text-xs text-slate-400 font-medium">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab.rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">{row.symbol}</td>
                      <td className="py-4 px-6 font-mono text-slate-700">{row.advantageMinSpread}</td>
                      <td className="py-4 px-6 text-slate-600">{row.advantageCommission}</td>
                      <td className="py-4 px-6">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded font-mono text-sm">
                          {row.alphaMinSpread}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-600">{row.alphaCommission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start trading with competitive spreads
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of Australian traders
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-all shadow-lg shadow-yellow-500/25 hover:scale-105"
          >
            Open an Account
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
