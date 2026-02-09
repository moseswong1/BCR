'use client';

import { useState } from 'react';

interface ForexPair {
  symbol: string;
  currency: string;
  bid: number;
  ask: number;
  spread: string;
}

export default function ForexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'majors' | 'minors'>('all');

  const forexPairs: ForexPair[] = [
    { symbol: 'EURUSD', currency: 'EUR/USD', bid: 1.18067, ask: 1.18077, spread: '1.0 pips' },
    { symbol: 'GBPUSD', currency: 'GBP/USD', bid: 1.47500, ask: 1.47520, spread: '1.5 pips' },
    { symbol: 'USDJPY', currency: 'USD/JPY', bid: 155.647, ask: 155.664, spread: '1.3 pips' },
    { symbol: 'AUDUSD', currency: 'AUD/USD', bid: 0.65828, ask: 0.65838, spread: '0.8 pips' },
    { symbol: 'USDCAD', currency: 'USD/CAD', bid: 1.36199, ask: 1.36211, spread: '1.2 pips' },
    { symbol: 'USDCHF', currency: 'USD/CHF', bid: 0.87294, ask: 0.87304, spread: '1.0 pips' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Trade on 90+ forex pairs with spreads as low as 0.0¹
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Spread better in trade CFDs on forex, with ultra-competitive spreads and dedicated local service.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
                Try demo
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
                Start now
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl h-96">
              {/* Laptop - Main Trading Screen */}
              <div className="absolute top-0 right-0 w-72 bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 flex justify-between items-center border-b border-slate-600">
                  <div className="text-sm font-semibold text-white">EURUSD</div>
                  <div className="text-xs text-emerald-400">1.08445 ▲</div>
                </div>
                
                {/* Chart Area */}
                <div className="p-4 bg-slate-800 relative h-40">
                  {/* Grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 grid-rows-4 h-full w-full border border-slate-600">
                      {Array(16).fill(0).map((_, i) => <div key={i}></div>)}
                    </div>
                  </div>
                  
                  {/* Chart line - uptrend */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="0,120 20,110 40,100 60,85 80,70 100,65 120,55 140,40 160,35 180,25 200,20 220,25 240,15 260,10 280,5"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Stats */}
                <div className="bg-slate-900 px-4 py-2 grid grid-cols-2 gap-3 border-t border-slate-700 text-xs">
                  <div>
                    <div className="text-slate-400">Bid</div>
                    <div className="text-white font-semibold">1.08432</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Ask</div>
                    <div className="text-white font-semibold">1.08445</div>
                  </div>
                </div>
              </div>

              {/* Tablet - Secondary View */}
              <div className="absolute top-24 left-0 w-56 bg-slate-900 rounded-lg shadow-xl overflow-hidden border border-slate-700 transform -rotate-6">
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-3 py-2 border-b border-slate-600">
                  <div className="text-xs font-semibold text-white">GBPUSD</div>
                </div>
                
                {/* Mini Chart */}
                <div className="p-3 bg-slate-800 relative h-24">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="0,60 15,55 30,50 45,45 60,40 75,35 80,30"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="absolute bottom-2 right-2 text-xs text-emerald-400 font-semibold">1.26846</div>
                </div>
              </div>

              {/* Phone - Mobile Trading */}
              <div className="absolute bottom-8 right-8 w-32 bg-slate-900 rounded-2xl shadow-lg overflow-hidden border-2 border-slate-700">
                {/* Status Bar */}
                <div className="bg-slate-950 px-2 py-1 flex justify-between items-center text-xs text-white border-b border-slate-700">
                  <span>9:41</span>
                  <span>●●●●●</span>
                </div>
                
                {/* Pair Info */}
                <div className="bg-slate-800 px-2 py-2 border-b border-slate-700">
                  <div className="text-xs font-semibold text-white">USDJPY</div>
                  <div className="text-xs text-red-400">154.778 ▼</div>
                </div>
                
                {/* Mini Chart */}
                <div className="p-2 bg-slate-850 relative h-20">
                  <svg className="w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
                    <polyline
                      points="0,40 15,35 30,40 45,30 60,35 75,25 85,20"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Quick Stats */}
                <div className="bg-slate-900 px-2 py-1.5 text-xs space-y-1 border-t border-slate-700">
                  <div className="flex justify-between text-slate-300">
                    <span>Open</span>
                    <span className="text-white text-xs">154.763</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>High</span>
                    <span className="text-white text-xs">155.200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Forex Prices */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Latest forex prices</h2>
          
          {/* Category Filter */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('majors')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'majors'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Major pairs
            </button>
            <button
              onClick={() => setSelectedCategory('minors')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'minors'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Minor pairs
            </button>
          </div>

          {/* Prices Table */}
          <div className="overflow-x-auto bg-slate-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Currency pair</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Bid</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Ask</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Spread</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900"></th>
                </tr>
              </thead>
              <tbody>
                {forexPairs.map((pair) => (
                  <tr key={pair.symbol} className="border-b border-slate-200 hover:bg-slate-100 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">{pair.currency}</td>
                    <td className="px-6 py-4 text-slate-700">{pair.bid.toFixed(5)}</td>
                    <td className="px-6 py-4 text-slate-700">{pair.ask.toFixed(5)}</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {pair.spread}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 mt-4">
            You can find the full list of our forex pairs and spreads{' '}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              here
            </a>
          </p>
        </div>
      </section>

      {/* Why Trade Forex */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why trade on forex with BCR?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Razor-sharp spreads */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="20" y="30" width="12" height="40" fill="#fff" rx="2" />
                    <rect x="44" y="20" width="12" height="50" fill="#fff" rx="2" />
                    <rect x="68" y="35" width="12" height="35" fill="#fff" rx="2" />
                    <path d="M20 70 L32 70 L44 20 L56 20 L68 35 L80 35" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Razor-sharp spreads</h3>
                  <p className="text-slate-600 text-sm">
                    Trade with spreads from 0.0 and low commission on a razor CFD account. Standard CFD and spread betting accounts, with spreads from 1.0 and 4.0 respectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Outstanding execution */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="#fff" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="8" fill="#fbbf24" />
                    <path d="M50 10 L50 25" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                    <path d="M78 32 L68 42" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Outstanding execution</h3>
                  <p className="text-slate-600 text-sm">
                    Place trades with confidence, knowing you'll get execution speeds from 50 milliseconds, a 99.9% fill rate and no dealer intervention.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Smart trading tech */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="15" y="15" width="70" height="50" rx="3" stroke="#fff" strokeWidth="2.5" />
                    <rect x="35" y="68" width="30" height="4" rx="1" fill="#fff" />
                    <line x1="50" y1="72" x2="50" y2="78" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <line x1="25" y1="28" x2="45" y2="28" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                    <line x1="25" y1="38" x2="75" y2="38" stroke="#10b981" strokeWidth="1.5" opacity="0.8" />
                    <line x1="25" y1="48" x2="65" y2="48" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Smart trading tech</h3>
                  <p className="text-slate-600 text-sm">
                    With BCR you can trade forex on a range of popular platforms. Choose from TradingView, MetaTrader 4, MetaTrader 5 or our own platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Spread betting or CFDs */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="18" y="28" width="14" height="44" rx="1" fill="#10b981" opacity="0.9" />
                    <rect x="36" y="20" width="14" height="52" rx="1" fill="#fbbf24" opacity="0.9" />
                    <rect x="54" y="35" width="14" height="37" rx="1" fill="#ef4444" opacity="0.9" />
                    <rect x="72" y="25" width="14" height="47" rx="1" fill="#3b82f6" opacity="0.9" />
                    <line x1="15" y1="75" x2="85" y2="75" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Spread betting or CFDs</h3>
                  <p className="text-slate-600 text-sm">
                    Choose spread betting for competitive, zero-commission pricing and tax-free profits, or trade forex CFDs for our tightest spreads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Choose a broker trusted by 750,000 traders worldwide¹
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-6 text-center hover:shadow-md transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Award Title</h3>
                <p className="text-sm text-slate-600">Award Organization 2025</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How many forex pairs do you offer?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We offer trading on over 90 forex pairs including major, minor, and exotic currency pairs.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What are the tightest spreads available?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Our razor CFD accounts offer spreads from 0.0 pips on major pairs like EURUSD and GBPUSD.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Can I trade forex 24/5?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Yes, the forex market operates 24 hours a day, 5 days a week, allowing you to trade almost any time during the week.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What leverage options are available?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We offer flexible leverage options up to 30:1 on forex pairs, depending on your account type and regulatory requirements.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Which platforms can I use?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                You can trade on MetaTrader 4, MetaTrader 5, TradingView, and our proprietary BCR platform.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What is the minimum account size?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                You can start trading with as little as $100 on most BCR accounts.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="bg-orange-50 border-l-4 border-orange-400 p-6 mx-4 md:mx-8 my-12 rounded">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-orange-800">
            <strong>Risk Warning:</strong> CFDs and spread betting are leveraged products. Trading in leveraged products carries a high level of risk to your capital. You may lose more than your initial investment. Ensure you fully understand the risks and seek independent advice if necessary.
          </p>
        </div>
      </section>
    </div>
  );
}
