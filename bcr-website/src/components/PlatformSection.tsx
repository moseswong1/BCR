import Link from "next/link"
import { Monitor, Globe, ChevronRight, Check } from "lucide-react"

// Custom Apple icon component
const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

// Custom Android icon component  
const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.44-.59-3.03-.92-4.47-.92s-3.03.33-4.47.92L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
  </svg>
)

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
    { name: "iOS", description: "iPhone & iPad", icon: AppleIcon, href: "/mt5" },
    { name: "Android", description: "Android Devices", icon: AndroidIcon, href: "/mt5" },
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
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
