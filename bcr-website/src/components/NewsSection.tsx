import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

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

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="space-y-2">
            <p className="text-yellow-400 font-semibold uppercase tracking-wide">Marketing News & Analysis</p>
            <h2 className="text-4xl font-bold">
              Ahead of the <span className="text-yellow-400">Trend</span> - Never Miss
              <br />
              Opportunities
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with our expert market analysis, economic insights, and trading opportunities
            delivered by our professional research team.
          </p>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsArticles.map((article, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight hover:text-yellow-400 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/market-analysis/${article.id}`}>
                    <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300 p-0">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Market insights section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Professional Market Analysis
            </h3>
            <p className="text-gray-300 text-lg">
              Our team of experienced analysts provides daily market insights,
              technical analysis, and economic commentary to help you make informed trading decisions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Daily Market Outlook</h4>
                  <p className="text-gray-400">Comprehensive analysis of major markets and opportunities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Economic Calendar</h4>
                  <p className="text-gray-400">Key events and their potential market impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Technical Analysis</h4>
                  <p className="text-gray-400">Chart patterns and trading signals from our experts</p>
                </div>
              </div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Access Market Analysis
            </Button>
          </div>

          {/* Market data visualization */}
          <div className="relative">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-white">Live Market Data</h4>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <div>
                      <div className="text-white font-semibold">EUR/USD</div>
                      <div className="text-green-400 text-sm">+0.24%</div>
                    </div>
                    <div className="text-white font-mono">1.0924</div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <div>
                      <div className="text-white font-semibold">GBP/USD</div>
                      <div className="text-red-400 text-sm">-0.18%</div>
                    </div>
                    <div className="text-white font-mono">1.2643</div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded">
                    <div>
                      <div className="text-white font-semibold">XAU/USD</div>
                      <div className="text-green-400 text-sm">+1.24%</div>
                    </div>
                    <div className="text-white font-mono">2,024.50</div>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="h-20 bg-gray-900 rounded flex items-end justify-center space-x-1 p-2">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-yellow-500 w-2 rounded-t"
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
