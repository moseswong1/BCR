import { Button } from "@/components/ui/button";

export const metadata = { title: "WebTrader" };

export default function WebTraderPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              WebTrader
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Trade directly from your browser with no installation required. Access your account from any device, anywhere in the world. Fast, secure, and built for modern traders.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition">
              Start trading now
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-96 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
              {/* Header bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 flex items-center px-6 z-20">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-300 font-medium">S&P 500 - 1D Chart</span>
                </div>
                <div className="ml-auto flex gap-4 text-xs text-slate-400">
                  <span>6,976.45</span>
                  <span className="text-green-400">+0.54%</span>
                </div>
              </div>

              {/* Main chart area */}
              <svg width="100%" height="100%" viewBox="0 0 900 330" className="mt-10" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect x="50" y="20" width="800" height="240" fill="rgba(15,23,42,0.5)"/>

                {/* Grid lines - horizontal */}
                {[50, 100, 150, 200, 250].map((y) => (
                  <g key={`h-${y}`}>
                    <line x1="50" y1={y} x2="850" y2={y} stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
                    <text x="35" y={y + 4} fontSize="11" fill="#64748b" textAnchor="end">{6950 + ((260 - y) * 2.5)}</text>
                  </g>
                ))}

                {/* Grid lines - vertical for hours/days */}
                {[80, 150, 220, 290, 360, 430, 500, 570, 640, 710, 780].map((x) => (
                  <line key={`v-${x}`} x1={x} y1="20" x2={x} y2="260" stroke="#334155" strokeWidth="0.5" opacity="0.2"/>
                ))}

                {/* Volume bars background */}
                {[
                  {x: 70, v: 42}, {x: 100, v: 55}, {x: 130, v: 48}, {x: 160, v: 52}, {x: 190, v: 45},
                  {x: 220, v: 58}, {x: 250, v: 50}, {x: 280, v: 46}, {x: 310, v: 54}, {x: 340, v: 44},
                  {x: 370, v: 56}, {x: 400, v: 48}, {x: 430, v: 52}, {x: 460, v: 47}, {x: 490, v: 53},
                  {x: 520, v: 49}, {x: 550, v: 55}, {x: 580, v: 51}, {x: 610, v: 54}, {x: 640, v: 48},
                  {x: 670, v: 57}, {x: 700, v: 50}, {x: 730, v: 52}, {x: 760, v: 46}, {x: 790, v: 55}
                ].map((bar, idx) => (
                  <rect key={`vol-${idx}`} x={bar.x - 8} y={260 - (bar.v / 2.5)} width="12" height={bar.v / 2.5} fill="#3b82f6" opacity="0.15" rx="1"/>
                ))}

                {/* Main price line */}
                <polyline points="70,180 100,165 130,150 160,135 190,125 220,115 250,108 280,102 310,95 340,92 370,88 400,85 430,82 460,80 490,78 520,76 550,75 580,74 610,73 640,72 670,71 700,70 730,69 760,68 790,67" 
                          fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

                {/* Area under curve */}
                <polygon points="70,180 100,165 130,150 160,135 190,125 220,115 250,108 280,102 310,95 340,92 370,88 400,85 430,82 460,80 490,78 520,76 550,75 580,74 610,73 640,72 670,71 700,70 730,69 760,68 790,67 790,260 70,260" 
                         fill="url(#areaGrad)"/>

                {/* Moving average (20 period) */}
                <polyline points="70,185 100,172 130,158 160,145 190,133 220,123 250,115 280,109 310,103 340,99 370,95 400,92 430,89 460,87 490,85 520,83 550,82 580,81 610,80 640,79 670,78 700,77 730,76 760,75 790,74" 
                          fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" strokeDasharray="4,4"/>

                {/* Support/Resistance levels */}
                <line x1="50" y1="100" x2="850" y2="100" stroke="#ef4444" strokeWidth="1" opacity="0.3" strokeDasharray="5,5"/>
                <line x1="50" y1="220" x2="850" y2="220" stroke="#10b981" strokeWidth="1" opacity="0.3" strokeDasharray="5,5"/>
                <text x="855" y="104" fontSize="10" fill="#ef4444" opacity="0.6">R1: 7050</text>
                <text x="855" y="224" fontSize="10" fill="#10b981" opacity="0.6">S1: 6900</text>

                {/* Data points */}
                {[70, 130, 190, 250, 310, 370, 430, 490, 550, 610, 670, 730, 790].map((x, idx) => {
                  const yValues = [180, 150, 125, 108, 95, 88, 82, 78, 75, 73, 71, 69, 67];
                  return (
                    <circle key={`point-${idx}`} cx={x} cy={yValues[idx]} r="1.5" fill="#10b981" opacity="0.7"/>
                  );
                })}

                {/* X-axis */}
                <line x1="50" y1="260" x2="850" y2="260" stroke="#475569" strokeWidth="1"/>
              </svg>

              {/* Footer bar */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-900 border-t border-slate-700 flex items-center px-6 gap-6 text-xs text-slate-400">
                <span>H: 7,015.20</span>
                <span>•</span>
                <span>L: 6,914.34</span>
                <span>•</span>
                <span>Volume: 3.2B</span>
                <span>•</span>
                <span>Change: +37.43</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WebTrader */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why choose WebTrader?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No installation required",
                description: "Access your trading account instantly from any browser—Windows, Mac, Linux, or mobile. No downloads, no waiting."
              },
              {
                title: "Intuitive interface",
                description: "Clean, modern design optimized for web trading. Easy to navigate for beginners and powerful enough for professionals."
              },
              {
                title: "Real-time charting",
                description: "Advanced charting tools with multiple timeframes and 40+ technical indicators at your fingertips."
              },
              {
                title: "Cross-platform sync",
                description: "Your account data, settings, and positions sync seamlessly across all your devices in real-time."
              },
              {
                title: "Secure connection",
                description: "Bank-level SSL encryption ensures your account and funds are protected at all times."
              },
              {
                title: "Always up-to-date",
                description: "Automatic updates mean you always have the latest features without manual installation."
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

      {/* Why Choose WebTrader with BCR */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Why choose WebTrader with BCR?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: 0,
                title: "Lightning-fast execution",
                description: "Orders executed in milliseconds with 99.9% uptime reliability and zero latency."
              },
              {
                icon: 1,
                title: "Enterprise-grade security",
                description: "Two-factor authentication, IP whitelisting, and bank-level encryption for complete peace of mind."
              },
              {
                icon: 2,
                title: "Fully responsive",
                description: "Perfect on desktop, tablet, or mobile. Trade on the go with the same full functionality."
              },
              {
                icon: 3,
                title: "Award-winning support",
                description: "24/5 customer support dedicated to helping you succeed with live chat, email, and phone support."
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {item.icon === 2 && (
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
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

      {/* Trading Products */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Trade multiple markets on WebTrader
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Forex CFDs",
                icon: "currency",
                description: "Trade 90+ currency pairs with spreads from 0.0 pips and lightning-fast execution."
              },
              {
                title: "Index CFDs",
                icon: "chart",
                description: "Access major global indices including S&P 500, Nasdaq 100, DAX, FTSE 100 and more."
              },
              {
                title: "Commodity CFDs",
                icon: "trophy",
                description: "Trade precious metals, energies, and softs with competitive spreads and tight pricing."
              },
              {
                title: "Stock CFDs",
                icon: "trending",
                description: "Trade thousands of stocks from around the world with leveraged exposure and no overnight fees."
              },
              {
                title: "Crypto CFDs",
                icon: "crypto",
                description: "Trade Bitcoin, Ethereum, and other cryptocurrencies with leveraged positions and tight spreads."
              },
              {
                title: "Share CFDs",
                icon: "target",
                description: "Trade shares as CFDs with leveraged exposure and no overnight fees."
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                  {product.icon === "currency" && <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {product.icon === "chart" && <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                  {product.icon === "trophy" && <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>}
                  {product.icon === "trending" && <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                  {product.icon === "crypto" && <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" /></svg>}
                  {product.icon === "target" && <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" /></svg>}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Support */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Browser compatibility
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Google Chrome", browser: "chrome", support: "Fully supported" },
              { name: "Mozilla Firefox", browser: "firefox", support: "Fully supported" },
              { name: "Safari", browser: "safari", support: "Fully supported" },
              { name: "Microsoft Edge", browser: "edge", support: "Fully supported" }
            ].map((item) => (
              <div key={item.name} className="bg-slate-50 rounded-lg p-6 flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  {item.browser === "chrome" && <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>}
                  {item.browser === "firefox" && <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>}
                  {item.browser === "safari" && <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>}
                  {item.browser === "edge" && <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-slate-600 text-sm">{item.support}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-slate-700">
              For the best experience, we recommend using the latest version of your browser. WebTrader works on desktop, tablet, and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Get started in 3 simple steps
          </h2>
          
          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Create an account",
                description: "Sign up for a free BCR account in just 5 minutes with our simple registration process."
              },
              {
                number: "2",
                title: "Log in to WebTrader",
                description: "Use your credentials to access WebTrader instantly—no installation required."
              },
              {
                number: "3",
                title: "Start trading",
                description: "Fund your account and start trading your preferred markets immediately."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm flex gap-6 items-start">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition">
              Open WebTrader now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to download anything to use WebTrader?",
                a: "No, WebTrader is a fully web-based platform. Simply log in from any browser and start trading immediately."
              },
              {
                q: "Is WebTrader secure?",
                a: "Yes, WebTrader uses bank-level SSL encryption and two-factor authentication to protect your account and funds."
              },
              {
                q: "Can I use WebTrader on my mobile phone?",
                a: "Absolutely! WebTrader is fully responsive and works perfectly on smartphones and tablets."
              },
              {
                q: "What are the system requirements?",
                a: "All you need is a modern web browser and an internet connection. WebTrader works on Windows, Mac, Linux, iOS, and Android."
              },
              {
                q: "Is WebTrader free?",
                a: "Yes, WebTrader is completely free to use. You only pay trading fees through spreads or commissions when you trade."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-slate-50 rounded-lg p-6 shadow-sm cursor-pointer group">
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
