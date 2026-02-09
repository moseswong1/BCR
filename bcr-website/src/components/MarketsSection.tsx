'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
    <section id="markets" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl font-bold">
            An extensive range of <span className="text-yellow-400">markets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Trade Majors, Minors and Exotics, Forex, Spot Metals and Energy, Indices and ASX-listed Stocks, and US Stocks{' '}
            <span className="text-yellow-400 font-semibold">in one BCR Account</span>.
          </p>
          <div className="pt-4">
            <a href="/markets" className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300">
              Explore More →
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              className={`${
                activeTab === tab
                  ? 'bg-yellow-500 text-black hover:bg-yellow-600 border-yellow-500'
                  : 'border-yellow-500 bg-transparent text-white hover:bg-yellow-500 hover:text-black transition-all duration-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Trading table */}
        <Card className="bg-gray-800 border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">CODE</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">BID</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">ASK</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">SPREAD</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">TRADE</th>
                </tr>
              </thead>
              <tbody>
                {instrumentData[activeTab as keyof typeof instrumentData].map((instrument, index) => (
                  <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-white">{instrument.code}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          instrument.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-gray-300">{instrument.bid}</td>
                    <td className="py-4 px-6 font-mono text-gray-300">{instrument.ask}</td>
                    <td className="py-4 px-6 font-mono text-gray-300">{instrument.spread}</td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <Link href="/login">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-3 py-1">
                            BUY
                          </Button>
                        </Link>
                        <Link href="/login">
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1">
                            SELL
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
