import { Button } from "@/components/ui/button";

export const metadata = { title: "MetaTrader 4" };

export default function MT4Page() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              MetaTrader 4 (MT4)
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              The classic platform trusted by millions of traders worldwide. Powerful, intuitive, and built for both discretionary and automated trading with industry-leading spreads.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition">
              Join now
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-96 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
              {/* Header bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 flex items-center px-6 z-20">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-300 font-medium">Performance Dashboard</span>
                </div>
                <div className="ml-auto flex gap-4 text-xs text-slate-400">
                  <span>Last Update: 14:32 GMT</span>
                </div>
              </div>

              {/* Main chart area */}
              <svg width="100%" height="100%" viewBox="0 0 900 330" className="mt-10" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="barGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.5"/>
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect x="50" y="20" width="800" height="240" fill="rgba(15,23,42,0.5)"/>

                {/* Grid lines - horizontal */}
                {[50, 100, 150, 200, 250].map((y) => (
                  <g key={`h-${y}`}>
                    <line x1="50" y1={y} x2="850" y2={y} stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
                    <text x="35" y={y + 4} fontSize="11" fill="#64748b" textAnchor="end">{300 - (y * 1.2)}</text>
                  </g>
                ))}

                {/* Legend area */}
                <g>
                  <text x="60" y="35" fontSize="10" fill="#94a3b8">Win Rate</text>
                  <text x="200" y="35" fontSize="10" fill="#94a3b8">Profit Factor</text>
                  <text x="360" y="35" fontSize="10" fill="#94a3b8">Sharpe Ratio</text>
                  <text x="520" y="35" fontSize="10" fill="#94a3b8">Drawdown</text>
                  <text x="700" y="35" fontSize="10" fill="#94a3b8">Recovery</text>
                </g>

                {/* Bar groups */}
                {[
                  {x: 70, bars: [{h: 160, g: "barGradient1"}, {h: 150, g: "barGradient2"}, {h: 140, g: "barGradient3"}]},
                  {x: 170, bars: [{h: 180, g: "barGradient1"}, {h: 170, g: "barGradient2"}, {h: 160, g: "barGradient3"}]},
                  {x: 330, bars: [{h: 140, g: "barGradient1"}, {h: 130, g: "barGradient2"}, {h: 120, g: "barGradient3"}]},
                  {x: 490, bars: [{h: 100, g: "barGradient1"}, {h: 110, g: "barGradient2"}, {h: 120, g: "barGradient3"}]},
                  {x: 650, bars: [{h: 170, g: "barGradient1"}, {h: 160, g: "barGradient2"}, {h: 150, g: "barGradient3"}]},
                  {x: 760, bars: [{h: 155, g: "barGradient1"}, {h: 165, g: "barGradient2"}, {h: 145, g: "barGradient3"}]}
                ].map((group, idx) => (
                  <g key={`group-${idx}`}>
                    {group.bars.map((bar, bIdx) => (
                      <g key={`bar-${bIdx}`}>
                        <rect x={group.x + (bIdx * 18) - 30} y={260 - bar.h} width="14" height={bar.h} fill={`url(#${bar.g})`} rx="2"/>
                        <rect x={group.x + (bIdx * 18) - 30} y={260 - bar.h} width="14" height={bar.h / 3} fill="white" opacity="0.1" rx="2"/>
                      </g>
                    ))}
                  </g>
                ))}

                {/* Top labels */}
                {[
                  {x: 70, label: "65.2%"},
                  {x: 170, label: "2.34"},
                  {x: 330, label: "1.89"},
                  {x: 490, label: "15.3%"},
                  {x: 650, label: "88.5%"},
                  {x: 760, label: "92.1%"}
                ].map((label, idx) => (
                  <text key={`label-${idx}`} x={label.x} y="10" fontSize="12" fill="#10b981" fontWeight="bold" textAnchor="middle">
                    {label.label}
                  </text>
                ))}

                {/* X-axis */}
                <line x1="50" y1="260" x2="850" y2="260" stroke="#475569" strokeWidth="1"/>
              </svg>

              {/* Footer bar */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-900 border-t border-slate-700 flex items-center px-6 gap-6 text-xs text-slate-400">
                <span>Timeframe: Monthly</span>
                <span>•</span>
                <span>Total Trades: 1,247</span>
                <span>•</span>
                <span>Net Profit: $45,892.50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MT4 */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why choose MT4?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "User-friendly interface",
                description: "Clean, intuitive design that's easy to navigate for both beginners and experienced traders."
              },
              {
                title: "MQL4 programming",
                description: "Develop custom Expert Advisors (EAs) and indicators using the powerful and well-documented MQL4 language."
              },
              {
                title: "Excellent charting tools",
                description: "Access 9 different timeframes and 50+ technical indicators to analyze market trends and make informed decisions."
              },
              {
                title: "Robust backtesting",
                description: "Test your trading strategies against historical data to validate and optimize your approach before live trading."
              },
              {
                title: "Extensive market access",
                description: "Trade forex, commodities, indices, and more from a single, unified trading platform with live quotes."
              },
              {
                title: "Wide ecosystem support",
                description: "Access thousands of third-party Expert Advisors and indicators from the community marketplace."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MT4 with BCR */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why choose MT4 with BCR?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 0,
                title: "Competitive spreads",
                description: "Access spreads starting from 0.0 points on major forex pairs with our Advantage account."
              },
              {
                icon: 1,
                title: "Swift execution",
                description: "Fast order execution with minimal latency, ensuring your trades are filled at the best available prices."
              },
              {
                icon: 2,
                title: "Expert support team",
                description: "24/5 customer support from our team of trading professionals ready to help you succeed."
              },
              {
                icon: 3,
                title: "Award-winning platform",
                description: "Trusted by thousands of traders for its reliability, performance, and cutting-edge features."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-8 flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  {item.icon === 0 && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {item.icon === 1 && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 6l3 1m0 0l-3-1m3 1v11m0 0l3-1m-3 1l-3-1m3-1l3 1m-3-1l-3-1" />
                    </svg>
                  )}
                  {item.icon === 2 && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {item.icon === 3 && (
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Trade */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Ways to trade via MT4 with BCR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spread betting",
                icon: "chart",
                description: "Speculate on price movements with no tax or stamp duty. Control your stake per point and pay fees only through the spread—no hidden commissions."
              },
              {
                title: "CFD Standard",
                icon: "trending",
                description: "Trade CFDs with leverage while only risking a fraction of your position value. Transparent pricing with all fees included in the spread."
              },
              {
                title: "CFD Advantage",
                icon: "premium",
                description: "Our best spreads with commission-free pricing. Enjoy razor-tight spreads starting from 0.0 points on major forex pairs and premium execution."
              }
            ].map((method, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                  {method.icon === "chart" && <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                  {method.icon === "trending" && <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                  {method.icon === "premium" && <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Get started with MT4
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Windows", platform: "windows" },
              { name: "Mac", platform: "mac" },
              { name: "Mobile", platform: "mobile" }
            ].map((item) => (
              <button key={item.name} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition flex items-center justify-center gap-2">
                {item.platform === "windows" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" /></svg>
                )}
                {item.platform === "mac" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.74h4.32c-.37-1.21-1.37-1.74-2.07-1.74zm-4.75 0c-.75 0-1.77.54-2.12 1.75h4.37c-.35-1.21-1.37-1.75-2.25-1.75zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                )}
                {item.platform === "mobile" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7c-1.1 0-1.99.9-1.99 2v16c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5-3H7V4h10v13z" /></svg>
                )}
                Download for {item.name}
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-4">System Requirements:</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>• Windows XP or higher / macOS 10.5 or higher</li>
              <li>• 50 MB free disk space</li>
              <li>• Reliable internet connection</li>
              <li>• For best performance: Windows 7 or later / macOS 10.12 or later</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is MT4 still relevant in 2026?",
                a: "Absolutely. MT4 remains the industry standard for forex and CFD trading. It's proven, reliable, and suitable for traders of all levels."
              },
              {
                q: "Can I use Expert Advisors on MT4?",
                a: "Yes, MT4 fully supports Expert Advisors (EAs) written in MQL4. You can develop, backtest, and deploy your own automated trading strategies."
              },
              {
                q: "What's the difference between MT4 and MT5?",
                a: "MT5 is the newer platform with advanced features like more timeframes, MQL5 programming, and extended market access. MT4 is simpler and more focused on forex trading."
              },
              {
                q: "Is MT4 free to use?",
                a: "Yes, MT4 is free to download and use. You only pay trading fees through spreads or commissions when you open positions."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-lg p-6 shadow-sm cursor-pointer group">
                <summary className="font-semibold text-slate-900 flex justify-between items-center cursor-pointer">
                  {faq.q}
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-slate-600 mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
