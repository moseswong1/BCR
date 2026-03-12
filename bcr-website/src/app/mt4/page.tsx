import Link from "next/link";
import { Monitor, Smartphone, Globe, ChevronRight, Check, Zap, Headphones, Award, TrendingUp } from "lucide-react";

export const metadata = { title: "MetaTrader 4" };

export default function MT4Page() {
  const features = [
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
      description: "Access 9 different timeframes and 50+ technical indicators to analyze market trends."
    },
    {
      title: "Robust backtesting",
      description: "Test your trading strategies against historical data to validate and optimize your approach."
    },
    {
      title: "Extensive market access",
      description: "Trade forex, commodities, indices, and more from a single, unified trading platform."
    },
    {
      title: "Wide ecosystem support",
      description: "Access thousands of third-party Expert Advisors and indicators from the community marketplace."
    }
  ];

  const bcrAdvantages = [
    { icon: Zap, title: "Competitive spreads", description: "Access spreads starting from 0.0 points on major forex pairs with our Advantage account." },
    { icon: TrendingUp, title: "Swift execution", description: "Fast order execution with minimal latency, ensuring your trades are filled at the best available prices." },
    { icon: Headphones, title: "Expert support team", description: "24/5 customer support from our team of trading professionals ready to help you succeed." },
    { icon: Award, title: "Award-winning platform", description: "Trusted by thousands of traders for its reliability, performance, and cutting-edge features." }
  ];

  const tradingMethods = [
    {
      title: "Spread betting",
      description: "Speculate on price movements with no tax or stamp duty. Control your stake per point and pay fees only through the spread—no hidden commissions."
    },
    {
      title: "CFD Standard",
      description: "Trade CFDs with leverage while only risking a fraction of your position value. Transparent pricing with all fees included in the spread."
    },
    {
      title: "CFD Advantage",
      description: "Our best spreads with commission-free pricing. Enjoy razor-tight spreads starting from 0.0 points on major forex pairs and premium execution."
    }
  ];

  const faqs = [
    { q: "Is MT4 still relevant in 2026?", a: "Absolutely. MT4 remains the industry standard for forex and CFD trading. It's proven, reliable, and suitable for traders of all levels." },
    { q: "Can I use Expert Advisors on MT4?", a: "Yes, MT4 fully supports Expert Advisors (EAs) written in MQL4. You can develop, backtest, and deploy your own automated trading strategies." },
    { q: "What's the difference between MT4 and MT5?", a: "MT5 is the newer platform with advanced features like more timeframes, MQL5 programming, and extended market access. MT4 is simpler and more focused on forex trading." },
    { q: "Is MT4 free to use?", a: "Yes, MT4 is free to download and use. You only pay trading fees through spreads or commissions when you open positions." }
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
                <Monitor className="w-4 h-4" />
                Trading Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                MetaTrader 4
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                MetaTrader 4 (MT4) is a globally renowned trading platform known for its reliability and user-friendly interface. It is used by millions of traders to execute trades in the financial markets.
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
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-3 text-sm text-slate-300 font-medium">Performance Dashboard</span>
                  </div>
                  <div className="p-4 h-64 flex items-end gap-1">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-yellow-600 to-yellow-400 w-full rounded-t"
                        style={{ height: `${Math.random() * 70 + 30}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Why Choose MT4 */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Platform Features
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why choose <span className="text-yellow-600">MT4</span>?
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

      {/* Why Choose MT4 with BCR */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              BCR Advantage
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why choose MT4 with <span className="text-yellow-600">BCR</span>?
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
              Ways to trade via MT4 with BCR
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
              Get started with <span className="text-yellow-600">MT4</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { name: "Windows", icon: Monitor },
              { name: "Mac", icon: Monitor },
              { name: "Mobile", icon: Smartphone }
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
                Windows XP or higher / macOS 10.5 or higher
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                50 MB free disk space
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                Reliable internet connection
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                For best performance: Windows 7 or later / macOS 10.12 or later
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
            Start trading with MT4 today
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of traders using MetaTrader 4 with BCR
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
