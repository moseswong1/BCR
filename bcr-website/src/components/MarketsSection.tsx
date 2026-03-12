'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function MarketsSection() {
  const [activeTab, setActiveTab] = useState('Popular')

  const tabs = ['Popular', 'Forex CFDs', 'Index CFDs', 'Share CFDs', 'Commodity CFDs']

  const instrumentData = {
    'Popular': [
      { code: 'EURUSD', bid: '1.18067', ask: '1.18077', spread: '0.1', trend: 'up' },
      { code: 'USDJPY', bid: '155.647', ask: '155.664', spread: '0.2', trend: 'up' },
      { code: 'GBPUSD', bid: '1.47500', ask: '1.47520', spread: '0.4', trend: 'down' },
      { code: 'US500', bid: '6976.45', ask: '6978.45', spread: '2.0', trend: 'up' },
      { code: 'US100', bid: '25738.61', ask: '25742.61', spread: '2.5', trend: 'up' },
      { code: 'XAUUSD', bid: '4899.39', ask: '4900.39', spread: '0.4', trend: 'up' }
    ],
    'Forex CFDs': [
      { code: 'EURUSD', bid: '1.18067', ask: '1.18077', spread: '0.1', trend: 'up' },
      { code: 'USDJPY', bid: '155.647', ask: '155.664', spread: '0.2', trend: 'up' },
      { code: 'GBPUSD', bid: '1.47500', ask: '1.47520', spread: '0.4', trend: 'down' },
      { code: 'USDCAD', bid: '1.36199', ask: '1.36211', spread: '1.2', trend: 'up' },
      { code: 'AUDUSD', bid: '0.65828', ask: '0.65838', spread: '0.1', trend: 'up' },
      { code: 'NZDUSD', bid: '0.59221', ask: '0.59225', spread: '0.4', trend: 'down' }
    ],
    'Index CFDs': [
      { code: 'US500', bid: '6976.45', ask: '6978.45', spread: '2.0', trend: 'up' },
      { code: 'US100', bid: '25738.61', ask: '25742.61', spread: '2.5', trend: 'up' },
      { code: 'US30', bid: '49407.66', ask: '49420.66', spread: '2.0', trend: 'up' },
      { code: 'AUS200', bid: '8845.1', ask: '8847.1', spread: '2.0', trend: 'up' },
      { code: 'GER40', bid: '23741.1', ask: '23743.1', spread: '2.0', trend: 'down' },
      { code: 'UK100', bid: '9229.6', ask: '9234.6', spread: '5.0', trend: 'up' }
    ],
    'Share CFDs': [
      { code: 'AAPL', bid: '270.01', ask: '270.51', spread: '0.5', trend: 'up' },
      { code: 'MSFT', bid: '423.37', ask: '423.87', spread: '0.5', trend: 'down' },
      { code: 'GOOGL', bid: '343.69', ask: '344.19', spread: '1.0', trend: 'up' },
      { code: 'AMZN', bid: '242.96', ask: '243.46', spread: '1.0', trend: 'up' },
      { code: 'NVDA', bid: '185.61', ask: '186.11', spread: '1.5', trend: 'down' },
      { code: 'TSLA', bid: '254.32', ask: '254.82', spread: '2.0', trend: 'up' }
    ],
    'Commodity CFDs': [
      { code: 'XAUUSD', bid: '4899.39', ask: '4900.39', spread: '0.4', trend: 'up' },
      { code: 'XAGUSD', bid: '31.25', ask: '31.35', spread: '2.8', trend: 'up' },
      { code: 'CL', bid: '78.50', ask: '78.65', spread: '1.5', trend: 'down' },
      { code: 'XTIUSD', bid: '74.25', ask: '74.40', spread: '1.5', trend: 'down' },
      { code: 'XBRUSD', bid: '81.80', ask: '82.00', spread: '2.0', trend: 'down' },
      { code: 'XNGUSD', bid: '3.15', ask: '3.17', spread: '1.4', trend: 'down' }
    ]
  }

  return (
    <section id="markets" className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400">
            Trade on Spreads from 0.0+ pips
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            An extensive range of <span className="text-yellow-400">markets</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Trade Majors, Minors and Exotics, Forex, Spot Metals and Energy, Indices and ASX-listed Stocks, and US Stocks{' '}
            <span className="text-yellow-400 font-semibold">in one BCR Account</span>.
          </p>
          
          <Link 
            href="/range-of-markets" 
            className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
          >
            Explore More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Trading table */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Code</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Bid</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Ask</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Spread</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Trade</th>
                </tr>
              </thead>
              <tbody>
                {instrumentData[activeTab as keyof typeof instrumentData].map((instrument, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-white">{instrument.code}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          instrument.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-300">{instrument.bid}</td>
                    <td className="py-4 px-6 font-mono text-slate-300">{instrument.ask}</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded font-mono text-sm">
                        {instrument.spread}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link href="/login">
                          <button className="px-4 py-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-bold rounded-lg transition-colors">
                            BUY
                          </button>
                        </Link>
                        <Link href="/login">
                          <button className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-lg transition-colors">
                            SELL
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
