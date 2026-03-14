import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Monitor, 
  Smartphone,
  BarChart3,
  Lock,
  RefreshCw,
  Clock,
  CheckCircle2,
  ChevronDown,
  Headphones,
  TrendingUp,
  LineChart,
  Settings
} from "lucide-react";

export const metadata = { title: "WebTrader | BCR" };

export default function WebTraderPage() {
  const features = [
    {
      icon: Globe,
      title: "No Installation Required",
      description: "Access your trading account instantly from any browser—Windows, Mac, Linux, or mobile.",
    },
    {
      icon: LineChart,
      title: "Advanced Charting",
      description: "Professional-grade charts with 40+ technical indicators and multiple timeframes.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our optimized web-based infrastructure.",
    },
    {
      icon: RefreshCw,
      title: "Cross-Platform Sync",
      description: "Your positions, settings, and data sync seamlessly across all devices.",
    },
    {
      icon: Settings,
      title: "Customizable Interface",
      description: "Personalize your workspace with flexible layouts and color schemes.",
    },
    {
      icon: Clock,
      title: "Always Up-to-Date",
      description: "Automatic updates ensure you always have the latest features and tools.",
    },
  ];

  const bcrAdvantages = [
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "Orders executed in milliseconds with 99.9% uptime reliability.",
    },
    {
      icon: Lock,
      title: "Professional Tools",
      description: "Advanced charting, technical indicators, and analysis tools.",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Perfect experience on desktop, tablet, or mobile devices.",
    },
    {
      icon: Headphones,
      title: "Award-Winning Support",
      description: "24/5 customer support via live chat, email, and phone.",
    },
  ];

  const faqs = [
    {
      q: "Do I need to download anything to use WebTrader?",
      a: "No! WebTrader runs entirely in your browser. Simply log in to your BCR account and start trading immediately. No downloads, installations, or plugins required.",
    },
    {
      q: "Is WebTrader available on mobile devices?",
      a: "Yes, WebTrader is fully responsive and works perfectly on smartphones and tablets. Access your account from any device with a modern web browser.",
    },
    {
      q: "What tools are available on WebTrader?",
      a: "WebTrader includes advanced charting with 50+ technical indicators, one-click trading, price alerts, real-time quotes, and customizable watchlists.",
    },
    {
      q: "Can I use the same account on WebTrader and MT4/MT5?",
      a: "Yes! Your BCR trading account works across all platforms. Switch between WebTrader, MT4, and MT5 seamlessly while your positions and balance stay synchronized.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <Globe className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Browser-Based Trading</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Trade Anywhere with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> WebTrader</span>
              </h1>
              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                Access global markets directly from your browser. No downloads, no installations—just fast, seamless trading from any device.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/register" className="inline-flex items-center">
                    Start Trading Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  className="h-14 px-8 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-lg rounded-xl shadow-lg transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/demo" className="inline-flex items-center">
                    Try Free Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm">No download required</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Works on any device</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Real-time data</span>
                </div>
              </div>
            </div>

            {/* Platform mockup */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="h-12 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 flex items-center px-4 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="px-4 py-1 rounded bg-slate-700/50 text-xs text-slate-400">
                      webtrader.thebcr.com
                    </div>
                  </div>
                </div>

                {/* Trading interface */}
                <div className="p-4 flex gap-4">
                  {/* Watchlist sidebar */}
                  <div className="w-1/3 space-y-2">
                    {[
                      { pair: "EUR/USD", price: "1.08765", change: "+0.42%" },
                      { pair: "GBP/USD", price: "1.26543", change: "+0.18%" },
                      { pair: "USD/JPY", price: "155.234", change: "-0.12%" },
                      { pair: "XAU/USD", price: "2341.50", change: "+0.85%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-800/50 text-xs">
                        <span className="text-white font-medium">{item.pair}</span>
                        <span className="text-slate-400">{item.price}</span>
                        <span className={item.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
                          {item.change}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-lg font-bold text-white">EUR/USD</div>
                        <div className="text-sm text-green-400">1.08765 +0.42%</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold">BUY</div>
                        <div className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold">SELL</div>
                      </div>
                    </div>
                    {/* Chart bars */}
                    <div className="flex items-end gap-1 h-24">
                      {[45, 60, 40, 70, 55, 80, 65, 75, 50, 85, 70, 90, 75, 85, 80].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-green-500/60 to-green-400/80 rounded-t transition-all"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-800/90 border-t border-slate-700 px-4 py-2 flex justify-between text-xs">
                  <span className="text-slate-400">Balance: <span className="text-white">$50,000.00</span></span>
                  <span className="text-slate-400">Equity: <span className="text-green-400">$52,345.00</span></span>
                  <span className="text-slate-400">Margin: <span className="text-white">$1,250.00</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Features</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose WebTrader?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              All the power of professional trading platforms, accessible from any browser
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-yellow-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BCR Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">BCR Advantage</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why WebTrader with BCR?
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {bcrAdvantages.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-yellow-500" />
                <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Compatibility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Trade on Any Device
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                WebTrader adapts perfectly to your screen size, whether you&apos;re on a desktop monitor, 
                laptop, tablet, or smartphone. Enjoy the same powerful features everywhere.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Monitor, label: "Desktop & Laptop", desc: "Full-featured experience on any screen size" },
                  { icon: Smartphone, label: "Tablet & Mobile", desc: "Responsive design optimized for touch" },
                  { icon: Globe, label: "Any Browser", desc: "Chrome, Firefox, Safari, Edge supported" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device stack visualization */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Desktop */}
                <div className="w-80 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600 shadow-2xl">
                  <div className="h-6 bg-slate-700 rounded-t-xl flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="p-4 flex items-end gap-1 h-32">
                    {[35, 50, 40, 60, 45, 70, 55, 65, 50, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-yellow-500/60 to-yellow-400/80 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {/* Stand */}
                <div className="mx-auto w-20 h-4 bg-slate-600 rounded-b" />
                <div className="mx-auto w-32 h-2 bg-slate-700 rounded-b" />
                
                {/* Mobile overlay */}
                <div className="absolute -bottom-4 -right-8 w-24 h-40 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border-2 border-slate-500 shadow-xl">
                  <div className="p-2 flex items-end gap-0.5 h-28">
                    {[40, 55, 45, 65, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-green-500/60 to-green-400/80 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">FAQ</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-yellow-300 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Globe className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Start in Seconds</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Trade from Your Browser?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Open your account today and experience seamless web-based trading with BCR.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                Open Live Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              className="h-14 px-10 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-lg rounded-xl shadow-lg transition-all hover:scale-105"
              asChild
            >
              <Link href="/demo" className="inline-flex items-center">
                Try Demo Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
