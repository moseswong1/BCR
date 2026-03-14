import Link from "next/link";
import { Monitor, Globe, ChevronRight, Check, Zap, Headphones, Award, TrendingUp, BarChart3 } from "lucide-react";

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

export const metadata = { title: "MetaTrader 5" };

export default function MT5Page() {
  const features = [
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
      title: "More order types & widgets",
      description: "Set stop-limit orders for greater control in volatile markets, and place 10 extra indicators and 13 more graphical tools."
    }
  ];

  const bcrAdvantages = [
    { icon: Zap, title: "Super-tight spreads", description: "Enjoy our most competitive spreads starting from 0.0 pips on major forex pairs." },
    { icon: TrendingUp, title: "Fast execution", description: "Ultra-low latency trade execution ensures the best possible fills on your orders." },
    { icon: Headphones, title: "Dedicated support", description: "24/5 professional support team ready to assist with any trading queries." },
    { icon: Award, title: "Established since 2008", description: "Trade with confidence knowing BCR is an experienced Australian broker with almost 20 years in the industry." }
  ];

  const tradingMethods = [
    {
      title: "Spread betting",
      description: "Tax-efficient trading on price movements. Control your stake per point with fees included in the spread."
    },
    {
      title: "CFD Standard",
      description: "Trade CFDs with leverage and transparent pricing. All fees are included in the spread—no hidden costs."
    },
    {
      title: "CFD Advantage",
      description: "Our premium offering with razor-tight spreads from 0.0 pips and professional execution."
    }
  ];

  const faqs = [
    { q: "What's new in MT5 compared to MT4?", a: "MT5 offers more timeframes (21 vs 9), more technical indicators (38 vs 30), an integrated economic calendar, and support for more asset classes including stocks." },
    { q: "Can I migrate my MT4 EAs to MT5?", a: "MT5 uses MQL5, which is different from MQL4. While the languages share similarities, EAs need to be rewritten or converted for MT5." },
    { q: "Is MT5 better for stock trading?", a: "Yes, MT5 was designed with multi-asset trading in mind and offers better support for stock trading, including depth of market (DOM) data." },
    { q: "Does BCR offer MT5 for mobile?", a: "Yes, MT5 is available for iOS and Android devices, offering the same powerful features on the go." }
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[500px]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 mb-6">
                <BarChart3 className="w-4 h-4" />
                Next-Gen Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                MetaTrader 5
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                MetaTrader 5 (MT5) is a next-generation forex CFDs trading platform that retains the familiar look and feel of MT4 while offering advanced features. With MT5, you can trade forex, commodities, and indices using a full set of flexible trading orders.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-6 py-3 font-semibold text-black transition-all shadow-lg shadow-yellow-500/25"
                >
                  Join Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition-all backdrop-blur-sm"
                >
                  Try Demo
                </Link>
              </div>
            </div>

            {/* Chart mockup */}
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-1 shadow-2xl">
                <div className="bg-slate-900 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-3 text-sm text-slate-300 font-medium">EURUSD - Advanced Chart</span>
                    </div>
                    <div className="flex gap-3 text-xs">
                      <span className="text-slate-400">1.18067</span>
                      <span className="text-green-400">+0.82%</span>
                    </div>
                  </div>
                  <div className="p-4 h-64 flex items-end gap-0.5">
                    {[...Array(40)].map((_, i) => {
                      const isGreen = Math.random() > 0.4;
                      return (
                        <div
                          key={i}
                          className={`w-full rounded-sm ${isGreen ? 'bg-green-500' : 'bg-red-500'}`}
                          style={{ height: `${Math.random() * 60 + 20}%` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Why Choose MT5 */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Platform Features
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why choose <span className="text-yellow-600">MT5</span>?
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">
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
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              BCR Advantage
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why choose MT5 with <span className="text-yellow-600">BCR</span>?
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {bcrAdvantages.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-yellow-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Trade */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Trading Methods
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Ways to trade via MT5 with BCR
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {tradingMethods.map((method, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">{method.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Get started with <span className="text-yellow-600">MT5</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { name: "Windows", icon: Monitor },
              { name: "Mac", icon: Monitor },
              { name: "iOS", icon: AppleIcon },
              { name: "Android", icon: AndroidIcon }
            ].map((item) => (
              <button 
                key={item.name} 
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 hover:from-yellow-500 hover:to-yellow-600 text-white hover:text-black font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                <item.icon className="w-5 h-5" />
                Download for {item.name}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">System Requirements:</h3>
            <ul className="text-slate-600 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                Windows 7 or higher / macOS 10.12 or higher
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                100 MB free disk space
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                Reliable internet connection
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                1 GB RAM minimum (4 GB recommended for optimal performance)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-yellow-300 transition-colors">
                <summary className="font-semibold text-slate-900 p-6 flex justify-between items-center cursor-pointer">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-600 px-6 pb-6 -mt-2">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience the power of MT5
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Upgrade to MetaTrader 5 and access advanced trading features
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-all shadow-lg shadow-yellow-500/25 hover:scale-105"
          >
            Open an Account
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
