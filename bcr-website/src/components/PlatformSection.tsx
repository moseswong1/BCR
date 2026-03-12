import Link from "next/link"
import { Monitor, Smartphone, Globe, ChevronRight, Check } from "lucide-react"

export function PlatformSection() {
  const features = [
    "Advanced Charting with 50+ technical indicators",
    "Automated Trading with Expert Advisors",
    "Cross-Platform access on desktop, web, and mobile",
    "Real-time market data and execution"
  ]

  const platforms = [
    { name: "MT4", description: "Windows Desktop", icon: Monitor, href: "/mt4" },
    { name: "MT5", description: "Windows Desktop", icon: Monitor, href: "/mt5" },
    { name: "WebTrader", description: "Browser Based", icon: Globe, href: "/webtrader" },
    { name: "Mobile", description: "iOS & Android", icon: Smartphone, href: "/mt5" },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Trading Platforms
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Trade at Will with Just <span className="text-yellow-600">One Tap</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Customized MetaTrader 4 and MetaTrader 5 from BCR have all the powerful tools that you need to trade on both Windows and mobile devices.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-yellow-600" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/mt5"
              className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
            >
              Explore Platforms
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right content - Platform mockup */}
          <div className="relative">
            {/* Desktop platform mockup */}
            <div className="relative z-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-1 shadow-2xl">
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                {/* Platform header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-3 text-sm text-slate-300 font-medium">MetaTrader 5 - BCR</span>
                </div>

                {/* Chart area */}
                <div className="p-4 space-y-4">
                  <div className="h-40 bg-slate-800 rounded-lg flex items-end p-3 gap-1">
                    {[...Array(35)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-yellow-600 to-yellow-400 w-full rounded-t"
                        style={{ height: `${Math.random() * 70 + 30}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Trading interface */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <div className="text-xs text-slate-400 mb-1">EUR/USD</div>
                      <div className="text-lg font-mono text-green-400">1.0924</div>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg">
                      <div className="text-xs text-slate-400 mb-1">GBP/USD</div>
                      <div className="text-lg font-mono text-red-400">1.2643</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile app overlay */}
            <div className="absolute -bottom-6 -right-6 w-28 z-20">
              <div className="bg-slate-900 rounded-2xl p-1 shadow-xl border border-slate-700">
                <div className="bg-slate-800 rounded-xl p-2 space-y-2">
                  <div className="h-1.5 bg-yellow-500/50 rounded w-3/4"></div>
                  <div className="h-12 bg-slate-700 rounded flex items-end gap-0.5 p-1">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-yellow-500 w-full rounded-t"
                        style={{ height: `${Math.random() * 60 + 20}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-green-600 py-1 rounded text-center text-[8px] text-white font-bold">BUY</div>
                    <div className="bg-red-600 py-1 rounded text-center text-[8px] text-white font-bold">SELL</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Platform download options */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">Download for Your Device</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <Link key={index} href={platform.href}>
                <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 cursor-pointer">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <platform.icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{platform.name}</h4>
                  <p className="text-sm text-slate-600 mb-4">{platform.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-yellow-600 group-hover:text-yellow-700">
                    Download
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
