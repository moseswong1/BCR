import { Button } from "@/components/ui/button";

export const metadata = { title: "MetaTrader 5" };

export default function MT5Page() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              MetaTrader 5 (MT5)
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Discover MT5's smarter, faster cousin. Upgrade to the apex in trading strategy and automation, with PipesStone's tight spreads and swift execution.
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
                  <span className="text-slate-300 font-medium">EURUSD - Advanced Chart</span>
                </div>
                <div className="ml-auto flex gap-4 text-xs text-slate-400">
                  <span>1.18067</span>
                  <span className="text-green-400">+0.82%</span>
                </div>
              </div>

              {/* Main chart area */}
              <svg width="100%" height="100%" viewBox="0 0 900 330" className="mt-10" preserveAspectRatio="xMidYMid slice">
                {/* Define gradients */}
                <defs>
                  <linearGradient id="bullishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="volumeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>

                {/* Y-axis background */}
                <rect x="50" y="20" width="800" height="240" fill="rgba(15,23,42,0.5)"/>

                {/* Grid lines - horizontal */}
                {[50, 100, 150, 200, 250].map((y) => (
                  <g key={`h-${y}`}>
                    <line x1="50" y1={y} x2="850" y2={y} stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
                    <text x="35" y={y + 4} fontSize="11" fill="#64748b" textAnchor="end">{260 - y}</text>
                  </g>
                ))}

                {/* Grid lines - vertical */}
                {[80, 150, 220, 290, 360, 430, 500, 570, 640, 710, 780].map((x) => (
                  <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="260" stroke="#334155" strokeWidth="0.5" opacity="0.2"/>
                ))}

                {/* Volume bars */}
                {[
                  {x: 70, v: 35}, {x: 100, v: 42}, {x: 130, v: 38}, {x: 160, v: 55}, {x: 190, v: 48},
                  {x: 220, v: 45}, {x: 250, v: 52}, {x: 280, v: 40}, {x: 310, v: 58}, {x: 340, v: 50},
                  {x: 370, v: 46}, {x: 400, v: 54}, {x: 430, v: 44}, {x: 460, v: 56}, {x: 490, v: 48},
                  {x: 520, v: 52}, {x: 550, v: 47}, {x: 580, v: 53}, {x: 610, v: 49}, {x: 640, v: 55},
                  {x: 670, v: 51}, {x: 700, v: 54}, {x: 730, v: 48}, {x: 760, v: 57}, {x: 790, v: 50}
                ].map((bar, idx) => (
                  <rect key={`vol-${idx}`} x={bar.x - 8} y={260 - (bar.v / 2)} width="12" height={bar.v / 2} fill="url(#volumeGradient)" rx="1"/>
                ))}

                {/* Candlestick patterns */}
                {[
                  {x: 70, o: 100, h: 95, l: 110, c: 105},
                  {x: 100, o: 105, h: 90, l: 115, c: 92},
                  {x: 130, o: 92, h: 88, l: 120, c: 115},
                  {x: 160, o: 115, h: 75, l: 125, c: 78},
                  {x: 190, o: 78, h: 72, l: 130, c: 82},
                  {x: 220, o: 82, h: 70, l: 135, c: 72},
                  {x: 250, o: 72, h: 65, l: 138, c: 68},
                  {x: 280, o: 68, h: 60, l: 140, c: 65},
                  {x: 310, o: 65, h: 55, l: 145, c: 58},
                  {x: 340, o: 58, h: 50, l: 148, c: 52},
                  {x: 370, o: 52, h: 48, l: 150, c: 50},
                  {x: 400, o: 50, h: 42, l: 152, c: 45},
                  {x: 430, o: 45, h: 40, l: 155, c: 42},
                  {x: 460, o: 42, h: 35, l: 158, c: 38},
                  {x: 490, o: 38, h: 32, l: 160, c: 35},
                  {x: 520, o: 35, h: 30, l: 162, c: 32},
                  {x: 550, o: 32, h: 28, l: 165, c: 30},
                  {x: 580, o: 30, h: 25, l: 168, c: 27},
                  {x: 610, o: 27, h: 22, l: 170, c: 25},
                  {x: 640, o: 25, h: 20, l: 172, c: 22},
                  {x: 670, o: 22, h: 18, l: 175, c: 20},
                  {x: 700, o: 20, h: 15, l: 178, c: 18},
                  {x: 730, o: 18, h: 12, l: 180, c: 15},
                  {x: 760, o: 15, h: 10, l: 182, c: 12},
                  {x: 790, o: 12, h: 8, l: 185, c: 10}
                ].map((candle, idx) => {
                  const isGreen = candle.c > candle.o;
                  const high = Math.min(candle.h, candle.l);
                  const low = Math.max(candle.h, candle.l);
                  const bodyTop = Math.min(candle.o, candle.c);
                  const bodyHeight = Math.abs(candle.c - candle.o) || 2;
                  
                  return (
                    <g key={`candle-${idx}`}>
                      {/* Wick */}
                      <line x1={candle.x} y1={high} x2={candle.x} y2={low} stroke={isGreen ? "#10b981" : "#ef4444"} strokeWidth="0.8"/>
                      {/* Body */}
                      <rect x={candle.x - 6} y={bodyTop} width="12" height={bodyHeight} fill={isGreen ? "#10b981" : "#ef4444"} opacity="0.8" rx="1"/>
                    </g>
                  );
                })}

                {/* Moving average line */}
                <polyline points="70,105 100,103 130,108 160,112 190,118 220,125 250,132 280,140 310,148 340,156 370,164 400,172 430,180 460,188 490,196 520,204 550,212 580,220 610,228 640,236 670,244 700,250 730,255 760,258 790,260" 
                          fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6"/>

                {/* X-axis */}
                <line x1="50" y1="260" x2="850" y2="260" stroke="#475569" strokeWidth="1"/>
              </svg>

              {/* Footer bar */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-900 border-t border-slate-700 flex items-center px-6 gap-6 text-xs text-slate-400">
                <span>Period: 1H</span>
                <span>•</span>
                <span>RSI: 45.2</span>
                <span>•</span>
                <span>Volume: 2.45M</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MT5 */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why choose MT5?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Back-testing & optimisation",
                description: "Multi-threaded strategy tester with tailored algorithms for faster, more accurate back testing."
              },
              {
                title: "MQL5 programming",
                description: "A step up from MQL4, with advanced event management, object-oriented programming, and improved debugging tools."
              },
              {
                title: "Enhanced charting & timeframes",
                description: "Additional chart types like Renko and Range bars, plus 21 timeframes including tick charts."
              },
              {
                title: "Superior analytics and indicators",
                description: "More built-in indicators, graphical tools, and an integrated economic calendar for deeper insights."
              },
              {
                title: "Wider choice of markets",
                description: "Trade CFDs on forex, indices, shares and commodities, all from one integrated platform and eco."
              },
              {
                title: "More order types, indicators & widgets",
                description: "Set stop-limit orders for greater control in volatile markets, and place 10 extra indicators and 13 more graphical tools."
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

      {/* Why Choose MT5 with BCR */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why choose MT5 with BCR?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 0,
                title: "Super-tight spreads",
                description: "Starting from 0.0 points on FX on a Razor account, and 0.0 points on gold."
              },
              {
                icon: 1,
                title: "Fast, reliable execution",
                description: "From 50 milliseconds, with a 99.59% fill rate and no slippage intervention."
              },
              {
                icon: 2,
                title: "Local support",
                description: "We're here 24hrs a day Mon-Fri, and 18 hrs at the weekend."
              },
              {
                icon: 3,
                title: "The UK's favourite provider",
                description: "We're rated the highest for overall customer satisfaction."
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
            Ways to trade via MT5 with BCR
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spread betting",
                icon: "chart",
                description: "Speculate on price movements in either direction, with no tax or stamp duty to pay on your profits. Decide how much you want to bet per point of price movement. Fees are charged via a spread wagered around the market price, with no commission."
              },
              {
                title: "CFD Standard",
                icon: "trending",
                description: "Gain similar exposure to buying the underlying market outright, while only having to put down a fraction of the full value of your position. All fees - apart from any overnight funding - are included in the spread, and there is no commission to pay."
              },
              {
                title: "CFD Razor",
                icon: "premium",
                description: "Offers identical trading conditions to our Standard account, but with commission-based pricing on forex. Raw FX spreads from 0.0 points alongside fixed, transparent commissions from £1.60 per lot, per side."
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
            Get started with MT5
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
              <li>• Windows 7 or higher / macOS 10.12 or higher</li>
              <li>• 100 MB free disk space</li>
              <li>• Stable internet connection</li>
              <li>• Latest browser version for WebTrader</li>
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
                q: "Is MT5 better than MT4?",
                a: "MT5 offers more advanced features, better performance, and wider market access. However, MT4 remains popular for traders who prefer its simplicity. Both are excellent platforms."
              },
              {
                q: "Can I use trading bots on MT5?",
                a: "Yes, MT5 supports Expert Advisors (EAs) written in MQL5. You can develop, backtest, and deploy automated trading strategies."
              },
              {
                q: "What markets can I trade on MT5?",
                a: "MT5 supports forex, commodities, indices, stocks, and cryptocurrencies all on one platform."
              },
              {
                q: "Is MT5 suitable for beginners?",
                a: "While MT5 is more advanced than MT4, beginners can still use it effectively. We recommend starting with a demo account to familiarize yourself with the platform."
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
