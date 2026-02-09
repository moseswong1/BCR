export function StatsSection() {
  const stats = [
    {
      value: "18+",
      label: "Years in the Trading Industry",
      description: "Serving traders globally since 2006",
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
      label: "Monthly Trading Volume",
      description: "Average monthly processed trade value",
    },
    {
      value: "3",
      label: "Regulatory Bodies",
      description: "Multi-licensed and fully regulated",
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
          ))}
        </div>
      </div>
    </section>
  );
}
