'use client';

import { useState } from 'react';

interface IndexData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  spread: string;
}

export default function IndicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'major' | 'emerging'>('all');

  const indices: IndexData[] = [
    { symbol: 'US500', name: 'S&P 500', price: 6976.45, change: 37.43, changePercent: 0.54, spread: '1.0 pips' },
    { symbol: 'US100', name: 'Nasdaq 100', price: 25738.61, change: 186.23, changePercent: 0.73, spread: '2.5 pips' },
    { symbol: 'US30', name: 'Dow Jones', price: 49407.66, change: 515.19, changePercent: 1.05, spread: '2.0 pips' },
    { symbol: 'GER40', name: 'DAX 40', price: 18567.34, change: 145.23, changePercent: 0.79, spread: '3.0 pips' },
    { symbol: 'UK100', name: 'FTSE 100', price: 8089.45, change: 34.12, changePercent: 0.42, spread: '2.5 pips' },
    { symbol: 'JPN225', name: 'Nikkei 225', price: 33892.15, change: 289.34, changePercent: 0.86, spread: '5.0 pips' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Trade Global Indices with Tight Spreads
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Access the world's leading equity indices. Trade the S&P 500, Nasdaq, DAX, and more with competitive spreads and leverage.
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
            <div className="relative w-full max-w-md h-80">
              {/* Large Monitor */}
              <div className="absolute inset-0 w-full h-64 bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 border-b border-slate-600">
                  <div className="text-sm font-semibold text-white">Index Portfolio</div>
                </div>
                <div className="p-4 bg-slate-800 relative h-32">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="0,80 25,70 50,55 75,45 100,40 125,30 150,25 175,15 200,10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,100 30,85 60,75 90,60 120,50 150,45 180,35 210,30"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Chart overlay */}
              <div className="absolute bottom-4 right-4 w-40 bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-slate-800 p-2 text-xs">
                  <div className="text-white font-semibold mb-1">US500: 5432.89</div>
                  <div className="h-16 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <polyline
                        points="0,40 20,35 40,25 60,15 80,10 100,5"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="text-emerald-400 text-xs">+45.32 (+0.84%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Indices Prices */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Live Indices Prices</h2>
          
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
              onClick={() => setSelectedCategory('major')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'major'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Major
            </button>
            <button
              onClick={() => setSelectedCategory('emerging')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'emerging'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Emerging
            </button>
          </div>

          {/* Prices Table */}
          <div className="overflow-x-auto bg-slate-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Index</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Price</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Change</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Spread</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900"></th>
                </tr>
              </thead>
              <tbody>
                {indices.map((index) => (
                  <tr key={index.symbol} className="border-b border-slate-200 hover:bg-slate-100 transition">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{index.name}</div>
                      <div className="text-sm text-slate-500">{index.symbol}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{index.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={index.change >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                        {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%)
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {index.spread}
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
        </div>
      </section>

      {/* Why Trade Indices */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why trade indices with BCR?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Diversified Exposure */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="20" y="30" width="10" height="40" rx="1" fill="#fff" opacity="0.9" />
                    <rect x="34" y="20" width="10" height="50" rx="1" fill="#10b981" opacity="0.9" />
                    <rect x="48" y="35" width="10" height="35" rx="1" fill="#fff" opacity="0.9" />
                    <rect x="62" y="15" width="10" height="55" rx="1" fill="#3b82f6" opacity="0.9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Diversified Exposure</h3>
                  <p className="text-slate-600 text-sm">
                    Trade entire indices representing multiple companies in one transaction. Get broad market exposure with a single trade.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Competitive Pricing */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="30" stroke="#fff" strokeWidth="2" />
                    <line x1="50" y1="25" x2="50" y2="35" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                    <line x1="50" y1="65" x2="50" y2="75" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                    <path d="M65 50 Q75 45 75 50 Q75 55 65 50" fill="#fbbf24" opacity="0.8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Pricing</h3>
                  <p className="text-slate-600 text-sm">
                    Get tight spreads on major indices from 1.0 pips. Trade with confidence knowing you're getting the best market pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Extended Trading Hours */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="28" stroke="#fff" strokeWidth="2.5" />
                    <line x1="50" y1="22" x2="50" y2="32" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <line x1="78" y1="50" x2="68" y2="50" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <line x1="50" y1="50" x2="65" y2="35" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="50" y1="50" x2="58" y2="58" stroke="#10b981" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Extended Hours Trading</h3>
                  <p className="text-slate-600 text-sm">
                    Trade indices beyond normal market hours. Access to US, European, and Asian index markets with extended availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Leverage Options */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <path d="M30 50 L70 50" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M40 35 L60 65" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="35" cy="50" r="6" fill="#fff" opacity="0.8" />
                    <circle cx="65" cy="50" r="6" fill="#fff" opacity="0.8" />
                    <path d="M50 20 L50 35 M50 65 L50 80" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible Leverage</h3>
                  <p className="text-slate-600 text-sm">
                    Choose your leverage up to 20:1 on major indices. Manage risk with customizable margin and position sizing.
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
            Trusted by institutional and retail traders
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
                What indices can I trade?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We offer major global indices including S&P 500, Nasdaq 100, Dow Jones, DAX 40, FTSE 100, Nikkei 225 and more.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What spreads do you offer on indices?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Spreads vary by index. Major indices like S&P 500 start from 1.0 pips, while other indices range from 2.0 to 5.0 pips.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Can I trade indices 24/5?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Yes, we offer extended trading hours on indices to cover US, European, and Asian market sessions.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What leverage is available on indices?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Leverage up to 20:1 is available on most major indices, with flexibility to adjust based on your risk management strategy.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Which platforms support index trading?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                MetaTrader 4, MetaTrader 5, TradingView, and our proprietary platform all support index CFD trading.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How are index dividends handled?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We adjust for index dividends and corporate actions automatically in your account balance and positions.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="bg-orange-50 border-l-4 border-orange-400 p-6 mx-4 md:mx-8 my-12 rounded">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-orange-800">
            <strong>Risk Warning:</strong> CFDs are leveraged products and carry significant risk. You may lose more than your initial investment. Index trading involves market risk and requires careful risk management. Ensure you fully understand the risks before trading.
          </p>
        </div>
      </section>
    </div>
  );
}
