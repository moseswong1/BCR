export const metadata = { title: "Economic Calendar - Market Analysis" };

export default function EconomicCalendarPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Economic Data
              <span className="h-1 w-1 rounded-full bg-teal-400" />
              Market-Moving Events
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Economic Calendar
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Stay ahead of market-moving macro events. Track economic releases, central bank decisions, and key indicators that drive volatility across all asset classes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calendar"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                View Calendar
              </a>
              <a
                href="/market-analysis"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Hub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Calendar / Economic Events
        </div>

        <div className="mt-8 space-y-12" id="calendar">
        {/* Overview */}
        <section className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Economic Events Matter</h2>
          <p className="text-lg text-slate-700 mb-6">
            Economic data releases are among the most important drivers of market volatility and directional moves. Our Economic Calendar helps you identify high-impact releases and prepare your trading strategy accordingly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Alerts",
                description: "Get notified when high-impact economic data is released with instant market impact analysis"
              },
              {
                title: "Forecast Tracking",
                description: "Compare actual results against economist forecasts and previous readings to gauge surprise factor"
              },
              {
                title: "Impact Ratings",
                description: "Understand volatility potential with our color-coded impact ratings for every scheduled release"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar Events */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Upcoming High-Impact Events</h2>
          
          <div className="space-y-8">
            {/* This Week */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">This Week - February 3-7, 2026</h3>
              <div className="space-y-4">
                {[
                  {
                    date: "Tuesday, Feb 4",
                    time: "13:30 GMT",
                    country: "🇺🇸 USA",
                    event: "Initial Jobless Claims (Weekly)",
                    forecast: "215K",
                    previous: "211K",
                    impact: "High",
                    impactColor: "bg-red-100 text-red-800"
                  },
                  {
                    date: "Wednesday, Feb 5",
                    time: "19:00 GMT",
                    country: "🇪🇺 Eurozone",
                    event: "ECB Interest Rate Decision",
                    forecast: "3.50%",
                    previous: "3.50%",
                    impact: "High",
                    impactColor: "bg-red-100 text-red-800"
                  },
                  {
                    date: "Thursday, Feb 6",
                    time: "13:30 GMT",
                    country: "🇺🇸 USA",
                    event: "Non-Farm Payrolls (Monthly)",
                    forecast: "160K",
                    previous: "227K",
                    impact: "High",
                    impactColor: "bg-red-100 text-red-800"
                  },
                  {
                    date: "Friday, Feb 7",
                    time: "13:30 GMT",
                    country: "🇺🇸 USA",
                    event: "Unemployment Rate",
                    forecast: "3.9%",
                    previous: "3.9%",
                    impact: "High",
                    impactColor: "bg-red-100 text-red-800"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="text-sm font-semibold text-slate-500">{item.date}</p>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${item.impactColor}`}>
                            {item.impact}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900">{item.event}</h4>
                        <p className="text-sm text-slate-600 mt-1">{item.country} • {item.time}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 md:text-right">
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Forecast</p>
                          <p className="text-sm font-semibold text-slate-900">{item.forecast}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Previous</p>
                          <p className="text-sm font-semibold text-slate-900">{item.previous}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Week */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Next Week - February 10-14, 2026</h3>
              <div className="space-y-4">
                {[
                  {
                    date: "Monday, Feb 10",
                    time: "14:00 GMT",
                    country: "🇬🇧 UK",
                    event: "Retail Sales (Monthly)",
                    forecast: "+0.3%",
                    previous: "-0.7%",
                    impact: "Medium",
                    impactColor: "bg-yellow-100 text-yellow-800"
                  },
                  {
                    date: "Wednesday, Feb 12",
                    time: "08:00 GMT",
                    country: "🇦🇺 Australia",
                    event: "Employment Change",
                    forecast: "+35K",
                    previous: "+48.1K",
                    impact: "Medium",
                    impactColor: "bg-yellow-100 text-yellow-800"
                  },
                  {
                    date: "Thursday, Feb 13",
                    time: "13:00 GMT",
                    country: "🇺🇸 USA",
                    event: "Producer Price Index (Monthly)",
                    forecast: "-0.1%",
                    previous: "-0.3%",
                    impact: "Medium",
                    impactColor: "bg-yellow-100 text-yellow-800"
                  },
                  {
                    date: "Friday, Feb 14",
                    time: "13:30 GMT",
                    country: "🇺🇸 USA",
                    event: "Consumer Price Index (Monthly)",
                    forecast: "+0.2%",
                    previous: "+0.2%",
                    impact: "High",
                    impactColor: "bg-red-100 text-red-800"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="text-sm font-semibold text-slate-500">{item.date}</p>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${item.impactColor}`}>
                            {item.impact}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900">{item.event}</h4>
                        <p className="text-sm text-slate-600 mt-1">{item.country} • {item.time}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 md:text-right">
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Forecast</p>
                          <p className="text-sm font-semibold text-slate-900">{item.forecast}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Previous</p>
                          <p className="text-sm font-semibold text-slate-900">{item.previous}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Indicators Guide */}
        <section className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Understanding Economic Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                indicator: "Non-Farm Payrolls (NFP)",
                impact: "Extremely High",
                description: "Monthly employment change in the US. The single most important data point for USD direction and often triggers 1-2% moves in major currency pairs."
              },
              {
                indicator: "Consumer Price Index (CPI)",
                impact: "Extremely High",
                description: "Measures inflation. Critical for central bank policy decisions. Surprises typically drive volatility across forex, equities, and bond markets."
              },
              {
                indicator: "Interest Rate Decisions",
                impact: "Extremely High",
                description: "Central bank policy announcements. Direct impact on currency valuations and market risk sentiment. Prepare for volatility."
              },
              {
                indicator: "GDP (Gross Domestic Product)",
                impact: "Very High",
                description: "Quarterly economic growth measure. Key driver of long-term currency and equity trends. Affects expectations for future rate decisions."
              },
              {
                indicator: "Retail Sales",
                impact: "High",
                description: "Monthly consumer spending data. Important for estimating economic strength and inflation momentum between CPI releases."
              },
              {
                indicator: "Manufacturing PMI",
                impact: "High",
                description: "Purchasing Managers' Index. Early indicator of economic health. Released monthly with preliminary midmonth estimates."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-teal-500 bg-white rounded p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.indicator}</h3>
                <p className="text-sm text-teal-600 font-semibold mb-3">{item.impact}</p>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trading Strategy Tips */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Trading Strategy Around Economic Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Before the Release",
                points: [
                  "Identify the forecast vs. consensus expectations",
                  "Note the historical volatility of the indicator",
                  "Review technicals - key support/resistance levels",
                  "Consider position sizing for upcoming volatility"
                ]
              },
              {
                title: "During the Release",
                points: [
                  "Monitor the actual result vs. forecast immediately",
                  "Watch for whipsaw moves in the first few minutes",
                  "Be aware of FX interventions or central bank commentary",
                  "Look for confirmation with follow-up moves in equities/commodities"
                ]
              },
              {
                title: "After the Release",
                points: [
                  "Assess if the move is justified by the data",
                  "Look for reversal setups if overreaction occurred",
                  "Update your bias based on the new information",
                  "Consider the impact on future policy expectations"
                ]
              },
              {
                title: "Risk Management",
                points: [
                  "Tighten stops before high-impact news",
                  "Consider reducing position size during major releases",
                  "Avoid trading illiquid sessions near major events",
                  "Account for wider spreads and slippage post-release"
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, pidx) => (
                    <li key={pidx} className="flex gap-3">
                      <span className="text-teal-500 font-bold flex-shrink-0">•</span>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      </section>
    </main>
  );
}
