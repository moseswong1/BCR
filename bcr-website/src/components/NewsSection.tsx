import Link from "next/link"
import { Calendar, TrendingUp, ArrowRight, ChevronRight, BarChart3, FileText } from "lucide-react"

export function NewsSection() {
  const newsArticles = [
    {
      id: "fed-independence",
      image: "https://ext.same-assets.com/2057172512/3793660587.png",
      title: "Fed Independence at Risk After Trump Fires Fed Governor Lisa Cook",
      excerpt: "The independence of the U.S. Federal Reserve was thrown into turmoil Monday after President Donald Trump announced he had...",
      date: "2025-01-20",
      category: "Federal Reserve"
    },
    {
      id: "powell-jackson-hole",
      image: "https://ext.same-assets.com/2057172512/53824311.png",
      title: "How Powell's Jackson Hole Speech Shaped the Gold Market's Outlook",
      excerpt: "When Federal Reserve Chair Jerome Powell took the podium at the 2025 Jackson Hole symposium, markets braced for clarity on the future of...",
      date: "2025-01-18",
      category: "Commodities"
    },
    {
      id: "weekly-outlook",
      image: "https://ext.same-assets.com/2057172512/2823707942.png",
      title: "Weekly Outlook 2025.9.1-2025.9.5",
      excerpt: "Key economic events and market opportunities for the upcoming trading week...",
      date: "2025-01-15",
      category: "Market Analysis"
    }
  ]

  const insights = [
    {
      icon: TrendingUp,
      title: "Daily Market Outlook",
      description: "Comprehensive analysis of major markets and opportunities"
    },
    {
      icon: BarChart3,
      title: "Technical Analysis",
      description: "In-depth chart analysis and key levels to watch"
    },
    {
      icon: FileText,
      title: "Economic Calendar",
      description: "Stay ahead of key economic events and releases"
    }
  ]

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-sm font-medium text-yellow-400">
            Marketing News &amp; Analysis
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ahead of the <span className="text-yellow-400">Trend</span> - Never Miss Opportunities
          </h2>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {newsArticles.map((article, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="aspect-video bg-slate-700 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <Link 
                    href={`/market-analysis/${article.id}`}
                    className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market insights section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Professional Market Analysis
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our team of experienced analysts provides daily market insights,
              technical analysis, and economic commentary to help you make informed trading decisions.
            </p>
            
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <insight.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{insight.title}</h4>
                    <p className="text-slate-400 text-sm">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              href="/market-analysis"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-yellow-500/25"
            >
              View All Analysis
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-white mb-6">Latest Market Updates</h4>
            <div className="space-y-4">
              {[
                { pair: "EUR/USD", change: "+0.23%", trend: "up" },
                { pair: "GBP/USD", change: "-0.15%", trend: "down" },
                { pair: "XAU/USD", change: "+0.82%", trend: "up" },
                { pair: "US500", change: "+0.45%", trend: "up" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                  <span className="font-semibold text-white">{item.pair}</span>
                  <span className={`font-mono font-bold ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
