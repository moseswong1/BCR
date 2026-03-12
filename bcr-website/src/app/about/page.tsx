import Link from "next/link";
import { TrendingUp, Monitor, BarChart3, Award, ChevronRight, Globe, Building, Users } from "lucide-react";

export const metadata = { title: "BCR Profile" };

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[400px]">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400 mb-6">
              <Globe className="w-4 h-4" />
              Since 2008
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              BCR Profile
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              Trade The Worlds&apos; Markets With A Trusted And Regulated Firm
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-6 py-3 font-semibold text-black transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30"
              >
                Open an Account
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Sub-nav */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8 overflow-x-auto py-4 text-sm font-semibold">
            <span className="whitespace-nowrap text-yellow-600 border-b-2 border-yellow-500 pb-3 px-1">
              BCR Profile
            </span>
            <Link
              href="/contact"
              className="whitespace-nowrap text-gray-500 hover:text-yellow-600 pb-3 px-1 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/disclosure-documents"
              className="whitespace-nowrap text-gray-500 hover:text-yellow-600 pb-3 px-1 transition-colors"
            >
              Disclosure Documents
            </Link>
          </div>
        </div>
      </section>

      {/* About BCR Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-[2px] bg-yellow-500" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                About BCR
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                BCR, founded in 2008, is a proudly Australian CFD trading provider headquartered in Sydney. With almost 20 years of industry experience, BCR has built a strong reputation for delivering transparent and professional trading services to Australian traders.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Guided by the core values of integrity, innovation, and client success, BCR continues to evolve and grow as a trusted name in the financial services industry.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2008</div>
                <div className="text-sm text-slate-300">Founded in Sydney</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-black">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-yellow-900">Years Experience</div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">300+</div>
                <div className="text-sm text-slate-600">Trading Instruments</div>
              </div>
              <div className="bg-slate-100 rounded-2xl p-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">24/5</div>
                <div className="text-sm text-slate-600">Client Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              Benefits
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Raw Spread from 0.0</h3>
              <p className="text-slate-600 text-sm">Ultra-competitive spreads for maximum trading efficiency</p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trade On MT4/5</h3>
              <p className="text-slate-600 text-sm">Access world-leading trading platforms</p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Diverse CFD Markets</h3>
              <p className="text-slate-600 text-sm">Trade on CFDs of forex, metals, commodities, shares, and indices</p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Trusted Broker</h3>
              <p className="text-slate-600 text-sm">Your trusted Australian CFD broker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Building className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-bold text-slate-900 mb-1">Sydney Office</h3>
              <p className="text-sm text-slate-600">201 Elizabeth Street, NSW</p>
            </div>
            <div className="flex flex-col items-center">
              <Building className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-bold text-slate-900 mb-1">Melbourne Office</h3>
              <p className="text-sm text-slate-600">447 Collins St, Melbourne VIC</p>
            </div>
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
            Explore more opportunities &amp; potential with BCR now
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of Australian traders
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 hover:scale-105"
          >
            Open an Account
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
