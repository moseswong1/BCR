import { TrendingUp, Headphones, Globe, Zap, Award, BarChart3 } from "lucide-react"

export function WhyTradeSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "UTILISE EVERY TRADING STRATEGY",
      description: "BCR is your best choice of intra-day traders, scalpers, copytrade, and robots."
    },
    {
      icon: Headphones,
      title: "24/5 SUPPORT TEAM",
      description: "Our dedicated client support team is available 24/5, and our premium account managers have even more availability."
    },
    {
      icon: Globe,
      title: "GLOBAL MARKET ACCESS",
      description: "Access forex, indices, commodities, and shares from one powerful trading account."
    },
    {
      icon: Zap,
      title: "LIGHTNING FAST EXECUTION",
      description: "Ultra-low latency execution ensures your trades are filled at the best available prices."
    }
  ]

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-8 h-[2px] bg-yellow-500" />
            Advantages
            <div className="w-8 h-[2px] bg-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why <span className="text-yellow-600">trade</span> CFDs with BCR
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the difference with our comprehensive trading solutions,
            professional support, and cutting-edge technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
