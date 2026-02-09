'use client';

import { useState } from 'react';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  spread: string;
}

export default function SharesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tech' | 'blue-chip'>('all');

  const stocks: StockData[] = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.34, change: 3.12, changePercent: 1.71, spread: '0.5 pips' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 432.56, change: 8.45, changePercent: 1.99, spread: '0.5 pips' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 147.23, change: 4.89, changePercent: 3.43, spread: '1.0 pip' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 192.78, change: 2.34, changePercent: 1.23, spread: '1.0 pip' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 892.15, change: 34.67, changePercent: 4.03, spread: '1.5 pips' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 254.32, change: 7.89, changePercent: 3.20, spread: '2.0 pips' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Trade Global Stocks with Tight Spreads
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Trade stocks from major exchanges worldwide. Access blue-chip companies, tech giants, and emerging stocks with low commissions.
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
              {/* Stock Trading Terminal */}
              <div className="absolute inset-0 w-full h-64 bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 border-b border-slate-600">
                  <div className="text-sm font-semibold text-white">Stock Portfolio</div>
                </div>
                <div className="p-4 bg-slate-800 relative h-32">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <polyline
                      points="0,80 20,75 40,65 60,50 80,55 100,40 120,35 140,25 160,20 180,30 200,15 220,10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,100 25,90 50,80 75,70 100,75 125,60 150,55 175,45 200,50"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Stock Quote Widget */}
              <div className="absolute bottom-4 right-4 w-48 bg-slate-900 rounded-lg shadow-lg overflow-hidden border border-slate-700">
                <div className="bg-slate-800 p-3 text-xs">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-white font-semibold text-sm">AAPL</div>
                      <div className="text-slate-400 text-xs">Apple Inc.</div>
                    </div>
                    <span className="text-emerald-400 text-lg">↑</span>
                  </div>
                  <div className="text-white text-sm font-bold mb-1">$182.45</div>
                  <div className="h-10 relative mb-2">
                    <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                      <polyline
                        points="0,50 20,45 40,35 60,25 80,20 100,10"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="text-emerald-400 text-xs">+$2.35 (+1.31%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stocks Prices */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Popular Stocks to Trade</h2>
          
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
              onClick={() => setSelectedCategory('tech')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'tech'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Tech
            </button>
            <button
              onClick={() => setSelectedCategory('blue-chip')}
              className={`px-4 py-2 rounded font-semibold transition ${
                selectedCategory === 'blue-chip'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Blue-Chip
            </button>
          </div>

          {/* Prices Table */}
          <div className="overflow-x-auto bg-slate-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Stock</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Price</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Change</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">Spread</th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-900"></th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-slate-200 hover:bg-slate-100 transition">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{stock.name}</div>
                      <div className="text-sm text-slate-500">{stock.symbol}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">${stock.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={stock.change >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                        {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {stock.spread}
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

      {/* Why Trade Shares */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why trade shares with BCR?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Low Commissions */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="20" y="30" width="12" height="40" fill="#fff" rx="2" opacity="0.9" />
                    <rect x="44" y="15" width="12" height="55" fill="#10b981" rx="2" opacity="0.9" />
                    <rect x="68" y="35" width="12" height="35" fill="#fff" rx="2" opacity="0.9" />
                    <path d="M20 70 L80 70" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Low Commissions</h3>
                  <p className="text-slate-600 text-sm">
                    Trade stocks with minimal commissions. Our transparent pricing ensures you keep more of your profits. No hidden fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Global Selection */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="28" stroke="#fff" strokeWidth="2" />
                    <path d="M30 50 Q50 35 70 50" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                    <path d="M35 65 Q50 50 65 65" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                    <circle cx="50" cy="50" r="4" fill="#fff" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Global Stock Access</h3>
                  <p className="text-slate-600 text-sm">
                    Trade stocks from US, UK, EU, Asia and more. Access 5000+ stocks across major global exchanges from one account.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Instant Execution */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <path d="M25 50 L45 70 L75 30" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="28" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Execution</h3>
                  <p className="text-slate-600 text-sm">
                    Get fast execution speeds with near-instantaneous order fills. Trade with confidence during market hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Research Tools */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
                    <rect x="15" y="15" width="70" height="50" rx="2" stroke="#fff" strokeWidth="2" />
                    <line x1="25" y1="28" x2="75" y2="28" stroke="#10b981" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                    <line x1="25" y1="38" x2="75" y2="38" stroke="#fbbf24" strokeWidth="1.5" opacity="0.8" />
                    <line x1="25" y1="48" x2="65" y2="48" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
                    <circle cx="50" cy="75" r="8" stroke="#fff" strokeWidth="2" />
                    <line x1="50" y1="67" x2="50" y2="59" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Research Tools</h3>
                  <p className="text-slate-600 text-sm">
                    Access professional charting, company financials, earnings calendars, and analyst reports. Make informed trading decisions.
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
            Trusted by investors and traders worldwide
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
                How many stocks can I trade?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We offer over 5000 stocks from major exchanges worldwide including NYSE, NASDAQ, LSE, Euronext, TSE and more.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What are your stock commissions?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                We charge competitive commissions from $1-3 per trade depending on your account type. Check our pricing page for full details.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Can I trade fractional shares?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Yes, we support fractional share trading on most stocks, allowing you to invest any amount without needing a full share.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                When can I trade stocks?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                US stocks trade during market hours (9:30-16:00 EST). European and Asian stocks during their respective exchange hours.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Do you offer dividend reinvestment?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Dividends are credited to your account. You can set up automatic reinvestment or take dividends as cash.
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Can I use leverage for stocks?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-600 mt-4">
                Yes, leverage up to 5:1 is available on eligible stocks. Margin requirements vary by stock. Check regulations in your region.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="bg-orange-50 border-l-4 border-orange-400 p-6 mx-4 md:mx-8 my-12 rounded">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-orange-800">
            <strong>Risk Warning:</strong> Stock trading involves risk. Stock prices can be volatile and subject to company performance, market conditions, and economic factors. Past performance is not indicative of future results. Always do your own research and consider your risk tolerance before trading.
          </p>
        </div>
      </section>
    </div>
  );
}
