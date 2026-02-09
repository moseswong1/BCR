'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type Faq = { q: string; a: string };
type ForexPair = { 
  symbol: string; 
  bid: number; 
  ask: number; 
  spread: string; 
  change: number;
  changePercent: number;
};

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(' ');
}

export default function ForexPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'majors' | 'minors'>('all');

  const forexPairs: ForexPair[] = [
    { symbol: 'EURUSD', bid: 1.18067, ask: 1.18077, spread: '1.0 pips', change: 0.09635, changePercent: 0.82 },
    { symbol: 'GBPUSD', bid: 1.47500, ask: 1.47520, spread: '1.5 pips', change: 0.20659, changePercent: 0.16 },
    { symbol: 'USDJPY', bid: 155.647, ask: 155.664, spread: '1.3 pips', change: 5.882, changePercent: 0.39 },
    { symbol: 'AUDUSD', bid: 0.65828, ask: 0.65838, spread: '0.8 pips', change: -0.03803, changePercent: -0.06 },
    { symbol: 'USDCAD', bid: 1.36199, ask: 1.36211, spread: '1.2 pips', change: 0.00115, changePercent: 0.08 },
    { symbol: 'USDCHF', bid: 0.87294, ask: 0.87304, spread: '1.0 pips', change: -0.00089, changePercent: -0.10 },
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Razor-Sharp Spreads',
      description: 'Trade with spreads from 0.0 pips on Advantage Accounts and ultra-competitive rates. Access raw data feeds with professional-grade execution.',
      features: ['Spreads from 0.0 pips', 'No hidden commissions', 'Transparent pricing'],
    },
    {
      icon: '🎯',
      title: 'Exceptional Execution',
      description: 'Place trades with confidence knowing you get the best execution speeds. Sub-50 millisecond fills with deep liquidity and no requotes.',
      features: ['Instant execution', 'No requotes', 'Deep liquidity'],
    },
    {
      icon: '📊',
      title: 'Advanced Trading Tech',
      description: 'Trade 90+ forex pairs on MT4, MT5, and WebTrader platforms. Access professional charting, EAs, and advanced order types.',
      features: ['MT4/MT5/WebTrader', 'Custom indicators', 'Automated trading'],
    },
    {
      icon: '🔄',
      title: 'Flexible Leverage Options',
      description: 'Scale your positions with leverage up to 30:1. Choose the leverage that fits your strategy and risk tolerance.',
      features: ['Up to 30:1 leverage', 'Flexible position sizing', 'Risk management tools'],
    },
  ];

  const faqs: Faq[] = [
    {
      q: 'How many forex pairs can I trade with BCR?',
      a: 'BCR offers access to 90+ forex pairs including major pairs (EURUSD, GBPUSD), minor pairs (AUDCAD, EURGBP), and exotic currencies. You can find the complete list with live pricing in our platform.',
    },
    {
      q: 'What are the tightest spreads available?',
      a: 'Our Advantage Accounts offer spreads from 0.0 pips on major pairs like EURUSD and USDJPY. Alpha Accounts provide even tighter pricing with professional-grade execution.',
    },
    {
      q: 'Can I trade forex 24/5?',
      a: 'Yes, the forex market operates 24 hours a day, 5 days a week (Sunday evening to Friday afternoon). BCR provides uninterrupted access to all major currency pairs during market hours.',
    },
    {
      q: 'What leverage can I use for forex?',
      a: 'BCR offers leverage up to 30:1 for forex trading. You can adjust your leverage according to your risk management strategy and trading style.',
    },
    {
      q: 'Is forex trading suitable for beginners?',
      a: 'Forex can be profitable, but leverage amplifies both gains and losses. We recommend starting with a demo account, learning risk management, and using proper position sizing. Consider using our educational resources.',
    },
    {
      q: 'What platforms can I use to trade forex?',
      a: 'You can trade forex on MT4, MT5, and our Web Trader platforms. All platforms offer real-time charts, technical analysis tools, automated trading, and mobile access.',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section with Value Prop */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300 mb-6 border border-yellow-400/30">
                <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                World's Most Traded Market
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Trade 90+ Forex Pairs with Spreads as Low as 0.0 Pips
              </h1>
              
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                Access the world's most liquid market with professional-grade execution, tight spreads, and advanced trading technology. Trade 24/5 with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition text-lg"
                >
                  Trade Now
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition text-lg"
                >
                  Try Demo
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                Award-winning execution • 24/5 support • Regulated & insured
              </p>
            </div>

            {/* Hero Image Placeholder - Trading Devices */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 border border-blue-400/30 backdrop-blur-sm" />
                <div className="absolute inset-8 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-5xl mb-2">📈</p>
                    <p className="text-white font-bold">Live Trading Charts</p>
                    <p className="text-slate-300 text-sm mt-2">Real-time market data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Forex Prices */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Latest Forex Prices</h2>
          <p className="text-slate-600">Real-time market data - Updated continuously</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={classNames(
              'px-4 py-2 rounded-lg font-semibold transition',
              selectedCategory === 'all'
                ? 'bg-yellow-400 text-black'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            )}
          >
            All Pairs
          </button>
          <button
            onClick={() => setSelectedCategory('majors')}
            className={classNames(
              'px-4 py-2 rounded-lg font-semibold transition',
              selectedCategory === 'majors'
                ? 'bg-yellow-400 text-black'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            )}
          >
            Major Pairs
          </button>
          <button
            onClick={() => setSelectedCategory('minors')}
            className={classNames(
              'px-4 py-2 rounded-lg font-semibold transition',
              selectedCategory === 'minors'
                ? 'bg-yellow-400 text-black'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            )}
          >
            Minor Pairs
          </button>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Pair</th>
                <th className="px-6 py-4 text-right font-semibold">Bid</th>
                <th className="px-6 py-4 text-right font-semibold">Ask</th>
                <th className="px-6 py-4 text-center font-semibold">Spread</th>
                <th className="px-6 py-4 text-center font-semibold">Change</th>
                <th className="px-6 py-4 text-right font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {forexPairs.map((pair) => (
                <tr key={pair.symbol} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 font-bold text-slate-900">{pair.symbol}</td>
                  <td className="px-6 py-4 text-right text-slate-600 font-mono">{pair.bid.toFixed(5)}</td>
                  <td className="px-6 py-4 text-right text-slate-600 font-mono">{pair.ask.toFixed(5)}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm">
                      {pair.spread}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={classNames(
                      'font-semibold',
                      pair.changePercent >= 0 ? 'text-emerald-600' : 'text-red-600'
                    )}>
                      {pair.changePercent >= 0 ? '+' : ''}{pair.changePercent.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href="/register" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                      Trade
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Live prices are indicative only. Check your platform for the most up-to-date bid/ask prices. Spreads may vary during off-peak hours.
        </p>

        <p className="mt-6 text-center text-slate-700">
          You can find the full list of our forex pairs and spreads{' '}
          <Link href="/spreads-commission-swap" className="text-blue-600 font-semibold hover:underline">
            here
          </Link>
        </p>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-sm text-slate-600">
        <p>Markets / Forex</p>
      </nav>

      {/* Why Trade Forex with BCR */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Why Trade Forex with BCR?</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Professional trading conditions with award-winning execution, transparent pricing, and 24/5 market access
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-700 mb-4 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 py-16 my-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Trading Forex Today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get instant access to 90+ forex pairs with professional-grade tools and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition text-lg"
            >
              Open Live Account
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition text-lg"
            >
              Try Demo First
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <summary className="cursor-pointer list-none px-6 py-4 bg-white hover:bg-slate-50 font-semibold text-slate-900 flex items-center justify-between">
                <span>{faq.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-orange-50 border-l-4 border-orange-400 rounded p-6">
          <p className="text-sm text-slate-800">
            <strong>Risk Disclosure:</strong> Trading Contracts for Difference (CFDs) on margin carries a high level of risk and may not be suitable for all investors. You could sustain a loss of some or all of your deposited funds. Leverage amplifies both gains and losses. Always use proper risk management including stop-losses, and ensure you fully understand the risks before trading.
          </p>
        </div>
      </section>
    </div>
  );
}
