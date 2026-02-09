'use client';

import { useState } from 'react';

interface CommodityData {
  symbol: string;
  name: string;
  price: number;
  unit: string;
  change: number;
  changePercent: number;
  spread: string;
}

export default function CommoditiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'metals' | 'energies'>('all');

  const commodities: CommodityData[] = [
    { symbol: 'GOLD', name: 'Gold', price: 4899.39, unit: 'USD/oz', change: 238.33, changePercent: 5.11, spread: '0.4 pips' },
    { symbol: 'SILVER', name: 'Silver', price: 31.25, unit: 'USD/oz', change: 0.85, changePercent: 2.80, spread: '2.0 pips' },
    { symbol: 'COPPER', name: 'Copper', price: 4.45, unit: 'USD/lb', change: 0.12, changePercent: 2.77, spread: '2.5 pips' },
    { symbol: 'BRENT', name: 'Brent Oil', price: 81.95, unit: 'USD/bbl', change: -6.28, changePercent: -7.10, spread: '2.0 pips' },
    { symbol: 'WTI', name: 'WTI Oil', price: 78.50, unit: 'USD/bbl', change: -4.95, changePercent: -5.93, spread: '2.5 pips' },
    { symbol: 'NATGAS', name: 'Natural Gas', price: 3.15, unit: 'USD/MMBtu', change: -0.328, changePercent: -9.43, spread: '1.5 pips' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Trade Commodities with Tight Spreads
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Trade precious metals, energies, and more. Access global commodity markets with competitive spreads and flexible leverage.
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
              {/* Trading Terminal */}
              <div className="absolute inset-0 w-full h-64 bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 border-b border-slate-600">
                  <div className="text-sm font-semibold text-white">Commodity Markets</div>
                </div>
                <div className="p-4 bg-slate-800 relative h-32">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="0,60 30,50 60,40 90,35 120,45 150,30 180,25 210,15"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Price Widget */}
              <div className="absolute bottom-4 right-4 w-44 bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-slate-800 p-3 text-xs">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">GOLD</span>
                    <span className="text-emerald-400">↑</span>
                  </div>
                  <div className="text-white text-sm font-bold mb-1">2145.50</div>
                  <div className="h-12 relative mb-2">
                    <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <polyline
                        points="0,45 25,35 50,30 75,20 100,10"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="text-emerald-400 text-xs">+12.30 (+0.58%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Commodities Prices */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Live Commodity Prices</h2>
          
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
              onClick={() => setSelectedCategory('metals')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'metals'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Metals
            </button>
            <button
              onClick={() => setSelectedCategory('energies')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'energies'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Energies
            </button>
          </div>

          {/* Prices Table */}
          <div className="overflow-x-auto bg-slate-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Commodity</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Price</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Change</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Spread</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900"></th>
                </tr>
              </thead>
              <tbody>
                {commodities.map((commodity) => (
                  <tr key={commodity.symbol} className="border-b border-slate-200 hover:bg-slate-100 transition">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{commodity.name}</div>
                      <div className="text-sm text-slate-500">{commodity.symbol}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{commodity.price.toFixed(4)}</div>
                      <div className="text-xs text-slate-500">{commodity.unit}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={commodity.change >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                        {commodity.change >= 0 ? '+' : ''}{commodity.change.toFixed(4)} ({commodity.changePercent >= 0 ? '+' : ''}{commodity.changePercent.toFixed(2)}%)
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {commodity.spread}
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

      {/* Why Trade Commodities */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why trade commodities with BCR?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Tight Spreads */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="18" y="28" width="14" height="44" rx="1" fill="#f59e0b" opacity="0.9" />
                    <rect x="36" y="20" width="14" height="52" rx="1" fill="#10b981" opacity="0.9" />
                    <rect x="54" y="35" width="14" height="37" rx="1" fill="#f59e0b" opacity="0.7" />
                    <rect x="72" y="25" width="14" height="47" rx="1" fill="#10b981" opacity="0.7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Tight Spreads</h3>
                  <p className="text-slate-600 text-sm">
                    Trade with spreads from 0.5 pips on gold and 2.0 cents on oil. Get the most competitive commodity pricing in the market.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Market Access */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="28" stroke="#fff" strokeWidth="2" />
                    <path d="M50 22 L70 50 L50 78 L30 50 Z" fill="#f59e0b" opacity="0.8" />
                    <circle cx="50" cy="50" r="6" fill="#fff" opacity="0.9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Global Market Access</h3>
                  <p className="text-slate-600 text-sm">
                    Trade metals, energies, softs, and more. Access all major commodity markets with one account and unified platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Portfolio Diversification */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <path d="M20 60 Q35 40 50 50 T80 40" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="20" cy="60" r="4" fill="#f59e0b" />
                    <circle cx="50" cy="50" r="4" fill="#10b981" />
                    <circle cx="80" cy="40" r="4" fill="#3b82f6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Portfolio Diversification</h3>
                  <p className="text-slate-600 text-sm">
                    Diversify your trading portfolio with commodities. Hedge against inflation and add non-correlated assets to your strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Flexible Leverage */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <line x1="30" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M35 35 L50 50 L35 65" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M65 35 L50 50 L65 65" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible Leverage</h3>
                  <p className="text-slate-600 text-sm">
                    Choose leverage from 2:1 to 20:1 depending on the commodity. Control position size and manage risk effectively.
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
            Trusted commodity trading platform
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
                What commodities can I trade?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We offer precious metals (gold, silver, platinum), energies (crude oil, natural gas), softs, and more.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What are the tightest spreads available?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Gold spreads start from 0.5 pips, crude oil from 2.0 cents, and other commodities from 1.5 to 2.5 pips.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What leverage is available?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Leverage varies by commodity from 2:1 on precious metals to 20:1 on energies. Check individual commodity specifications.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Are there any swap charges?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Swap charges apply for overnight positions depending on the commodity and your account type. Check our pricing page for details.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What trading hours are available?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Trading hours vary by commodity. Precious metals trade 24/5, while energies follow NYMEX/ICE exchange hours.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Can I trade fractional lot sizes?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Yes, we support fractional lot trading on all commodities, allowing you to trade smaller position sizes.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="bg-orange-50 border-l-4 border-orange-400 p-6 mx-4 md:mx-8 my-12 rounded">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-orange-800">
            <strong>Risk Warning:</strong> Commodity trading involves significant risk and leverage. Prices can be volatile and are subject to external factors. You may lose more than your initial investment. Always use proper risk management and stop losses.
          </p>
        </div>
      </section>
    </div>
  );
}
