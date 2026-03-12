import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  BookOpen, 
  Award, 
  DollarSign, 
  Clock, 
  Globe, 
  BarChart3, 
  Smartphone,
  Monitor,
  ChevronDown,
  Play,
  CheckCircle2
} from "lucide-react";

export const metadata = { title: "Demo Account | BCR" };

export default function DemoPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Real Market Data",
      description: "Trade with real-time market prices and live data feeds from global exchanges.",
    },
    {
      icon: DollarSign,
      title: "$50K Virtual Funds",
      description: "Get $50,000 in virtual capital to practice trading without any financial risk.",
    },
    {
      icon: Zap,
      title: "Full Platform Access",
      description: "Access MT4, MT5, and WebTrader with full functionality and all features unlocked.",
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Get guidance from our professional support team whenever you need assistance.",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Learn trading strategies through our comprehensive tutorials and live webinars.",
    },
    {
      icon: Clock,
      title: "90-Day Access",
      description: "Your demo account stays active for 90 days with the option to extend anytime.",
    },
  ];

  const faqs = [
    {
      q: "How long does my demo account last?",
      a: "Your demo account remains active for 90 days. You can request to extend it at any time by contacting our support team.",
    },
    {
      q: "Is the demo data real-time?",
      a: "Yes! All market data in the demo account is real-time, just like in a live trading account. Experience the same market conditions.",
    },
    {
      q: "Can I upgrade to a live account while using the demo?",
      a: "Absolutely. You can seamlessly transition from your demo to a live account whenever you're ready. Your settings can be transferred.",
    },
    {
      q: "How much virtual capital do I get?",
      a: "You start with $50,000 in virtual funds. If you need more, contact support to reset your balance.",
    },
    {
      q: "Are there any restrictions on demo trading?",
      a: "No restrictions—trade freely with the same tools and features available in live accounts, including all markets and instruments.",
    },
  ];

  const steps = [
    { step: 1, title: "Register", description: "Fill out a quick form with your details" },
    { step: 2, title: "Verify Email", description: "Click the link we send to your inbox" },
    { step: 3, title: "Start Trading", description: "Login and begin your trading journey" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <Play className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Risk-Free Trading</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Practice Trading with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> $50,000</span>
              </h1>
              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                Master the markets risk-free. Access real market conditions, professional tools, and build your confidence before trading live.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/register" className="inline-flex items-center">
                    Create Demo Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-14 px-8 border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold text-lg rounded-xl transition-all backdrop-blur-sm"
                  asChild
                >
                  <Link href="/register">Open Live Account</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm">No deposit required</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Real-time market data</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Full platform access</span>
                </div>
              </div>
            </div>

            {/* Platform mockup */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-slate-400">BCR WebTrader - Demo</span>
                </div>
                {/* Chart visualization */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-lg font-bold text-white">EUR/USD</div>
                      <div className="text-sm text-green-400">1.08765 +0.42%</div>
                    </div>
                    <div className="px-3 py-1 bg-yellow-500/20 rounded-full text-xs font-semibold text-yellow-400">
                      DEMO MODE
                    </div>
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-1.5 h-32">
                    {[40, 55, 35, 60, 45, 70, 50, 80, 65, 75, 55, 85, 70, 90, 75, 85].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-yellow-500/60 to-yellow-400/80 rounded-t transition-all"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                {/* Bottom stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-800/90 border-t border-slate-700 px-6 py-3 flex justify-between">
                  <div className="text-center">
                    <div className="text-xs text-slate-400">Balance</div>
                    <div className="text-sm font-bold text-white">$50,000.00</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-400">Equity</div>
                    <div className="text-sm font-bold text-green-400">$52,345.00</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-400">P/L</div>
                    <div className="text-sm font-bold text-green-400">+$2,345.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Get Started</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Open Your Demo Account in 3 Steps
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-500" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-2xl font-bold text-slate-900 shadow-lg shadow-yellow-500/25">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
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
              Why Choose Our Demo Account?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Experience professional trading conditions without risking your capital
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

      {/* Platform Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Platforms</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Trade on Any Platform
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { name: "MetaTrader 4", desc: "The world's most popular trading platform", icon: Monitor },
              { name: "MetaTrader 5", desc: "Advanced multi-asset trading platform", icon: BarChart3 },
              { name: "WebTrader", desc: "Trade directly from your browser", icon: Globe },
            ].map((platform, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-white border border-slate-200 text-center hover:border-yellow-300 hover:shadow-xl transition-all">
                <div className="w-16 h-16 mx-auto rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                  <platform.icon className="w-8 h-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-slate-600">{platform.desc}</p>
                <Button 
                  variant="outline" 
                  className="mt-6 border-slate-200 text-slate-700 hover:bg-slate-50"
                  asChild
                >
                  <Link href={`/${platform.name.toLowerCase().replace(' ', '')}`}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Start in Minutes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of traders who started with a demo account. No risk, no commitment—just pure learning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                Create Free Demo Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
