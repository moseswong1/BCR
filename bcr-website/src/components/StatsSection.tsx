export function StatsSection() {
  const stats = [
    {
      value: "2008",
      label: "AU Operations",
      description: "Established and operated in Australia.",
      eyebrow: "Operating since",
      isFeature: true,
    },
    {
      value: "70+",
      label: "Countries Served",
      description: "A truly global presence with diverse clientele",
    },
    {
      value: "500+",
      label: "Trading Instruments",
      description: "Forex, metals, commodities, indices, and stocks",
    },
    {
      value: "100K+",
      label: "Active Traders",
      description: "Trusted by traders from around the world",
    },
    {
      value: "$30B",
      label: "Notional Monthly Trading Volume",
      description: "Average monthly processed trade value",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-950 mb-4">
            BCR by the Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Industry-leading metrics that showcase our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            stat.isFeature ? (
              <div
                key={idx}
                className="lg:col-span-1 p-8 bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                    {stat.eyebrow}
                  </p>
                  <div>
                    <span className="text-6xl font-black text-yellow-600 leading-tight">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="p-8 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-center"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-5xl font-black text-yellow-600">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-950 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
