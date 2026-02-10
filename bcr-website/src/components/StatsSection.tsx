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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          BCR by the Numbers
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Industry-leading metrics that showcase our commitment to excellence
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            stat.isFeature ? (
              <div
                key={idx}
                className="p-8 border border-gray-200 rounded-lg hover:border-yellow-400 hover:shadow-md transition-all bg-white flex flex-col justify-center"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {stat.eyebrow}
                  </p>
                  <div>
                    <span className="text-5xl font-bold text-yellow-600 leading-tight">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-yellow-400 hover:shadow-md transition-all bg-white"
              >
                <div className="mb-3">
                  <span className="text-4xl font-bold text-yellow-600">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {stat.label}
                </h3>
                <p className="text-xs text-gray-600">
                  {stat.description}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
