import { TrendingUp, Percent, DollarSign, Clock, Headphones } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      value: "300+",
      label: "Products",
      description: "Trade Forex, Metals, Commodities, Indices, and Shares",
      icon: TrendingUp,
      featured: true,
    },
    {
      value: "30:1",
      label: "Max Leverage",
      description: "Flexible leverage options for your trading strategy",
      icon: Percent,
    },
    {
      value: "300",
      label: "Minimum Deposit",
      description: "AUD minimum to start trading",
      icon: DollarSign,
    },
    {
      value: "0.0+",
      label: "Spreads",
      description: "Competitive spreads from 0.0 pips",
      icon: TrendingUp,
    },
    {
      value: "24/5",
      label: "Client Service",
      description: "Dedicated support team available around the clock",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <div className="w-8 h-[2px] bg-yellow-500" />
            Trading Conditions
            <div className="w-8 h-[2px] bg-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Industry-Leading <span className="text-yellow-600">Conditions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            stat.featured ? (
              <div
                key={idx}
                className="group relative lg:col-span-1 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl" />
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <span className="text-5xl font-black text-yellow-400 leading-tight">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <span className="text-4xl font-black text-yellow-600">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
