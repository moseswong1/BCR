import { Calendar, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const articles = {
  "fed-independence": {
    title: "Fed Independence at Risk After Trump Fires Fed Governor Lisa Cook",
    category: "Federal Reserve",
    date: "2025-01-20",
    image: "https://ext.same-assets.com/2057172512/3793660587.png",
    content: `
      <p>The independence of the U.S. Federal Reserve was thrown into turmoil Monday after President Donald Trump announced he had fired Federal Reserve Governor Lisa Cook, escalating tensions between the administration and the nation's central bank.</p>
      
      <h2>The Impact on Markets</h2>
      <p>This unprecedented move raises serious questions about the Fed's institutional independence, a cornerstone of modern central banking. Markets reacted swiftly to the news, with volatility spiking across equities, bonds, and currencies.</p>
      
      <p>The firing comes at a critical juncture for monetary policy, as the Federal Reserve attempts to navigate inflation concerns and economic growth forecasts. Governor Cook had been known for her dovish stance on monetary policy and her research on economic inequality.</p>
      
      <h2>Historical Context</h2>
      <p>The President does not have the constitutional authority to directly fire Federal Reserve governors. However, this announcement signals a dramatic shift in the relationship between the executive branch and the Fed, potentially setting a precedent for future administrations.</p>
      
      <p>The market implications are significant: uncertainty about future Fed policy decisions could persist, potentially influencing central bank decisions and international investor confidence in U.S. monetary policy independence.</p>
    `
  },
  "powell-jackson-hole": {
    title: "How Powell's Jackson Hole Speech Shaped the Gold Market's Outlook",
    category: "Commodities",
    date: "2025-01-18",
    image: "https://ext.same-assets.com/2057172512/53824311.png",
    content: `
      <p>When Federal Reserve Chair Jerome Powell took the podium at the 2025 Jackson Hole economic symposium, markets braced for clarity on the future trajectory of monetary policy. His remarks did not disappoint, providing crucial guidance that rippled through commodity markets, particularly impacting precious metals.</p>
      
      <h2>Powell's Key Messages</h2>
      <p>Fed Chair Powell emphasized the central bank's commitment to price stability while acknowledging the complexity of the current economic environment. His balanced rhetoric suggested a potential pivot in monetary policy, neither aggressively hawkish nor overtly dovish.</p>
      
      <p>Specifically, Powell's comments on inflation dynamics and labor market strength influenced market expectations about future interest rate decisions. Lower expected rates typically support gold prices, as the opportunity cost of holding non-yielding assets decreases.</p>
      
      <h2>Gold Market Response</h2>
      <p>Following Powell's speech, gold prices surged to multi-month highs as investors repositioned portfolios in anticipation of a less restrictive monetary policy stance. The speech provided the catalyst markets needed to push precious metals higher.</p>
      
      <p>The Jackson Hole speech remains a key marker for commodity traders, serving as an important benchmark for assessing central bank sentiment and adjusting trading strategies accordingly.</p>
    `
  },
  "weekly-outlook": {
    title: "Weekly Outlook 2025.9.1-2025.9.5",
    category: "Market Analysis",
    date: "2025-01-15",
    image: "https://ext.same-assets.com/2057172512/2823707942.png",
    content: `
      <p>As we enter the trading week of September 1-5, 2025, multiple economic catalysts and technical factors are poised to influence market direction across major asset classes.</p>
      
      <h2>Economic Events to Watch</h2>
      <p>Key economic indicators scheduled for the week include employment data, manufacturing PMI reports, and central bank communications. Each of these developments has the potential to significantly impact market sentiment and positioning.</p>
      
      <p>The labor market remains a critical focus for investors and policymakers alike. Any surprises in employment figures could trigger volatility across equity and currency markets, as employment data directly influences inflation expectations and monetary policy assumptions.</p>
      
      <h2>Trading Opportunities</h2>
      <p>Forex traders should monitor central bank speakers throughout the week. Commodity traders might find opportunities as supply concerns intersect with demand forecasts. Equities markets remain sensitive to macro data releases and Fed communication.</p>
      
      <h2>Technical Outlook</h2>
      <p>Major indices are testing key resistance levels. A break above these levels could signal further upside momentum, while a failure to break through may lead to consolidation or pullback scenarios. Position management and risk control remain paramount during periods of elevated uncertainty.</p>
      
      <p>As always, we recommend traders maintain strict risk management protocols and adjust position sizes according to their individual risk tolerance and market outlook.</p>
    `
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles[id as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <main className="bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/market-analysis" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Market Analysis
        </Link>

        {/* Article Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold">
              {article.category}
            </span>
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{article.title}</h1>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{
              __html: article.content
                .split('\n')
                .map(line => {
                  if (line.startsWith('<h2>')) return line
                  if (line.startsWith('<p>')) return line
                  if (line.trim() === '') return ''
                  return `<p>${line}</p>`
                })
                .join('')
            }}
          />
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-semibold">Share this article:</span>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Market Analysis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(articles)
              .filter(([key]) => key !== id)
              .map(([key, art]) => (
                <Link key={key} href={`/market-analysis/${key}`}>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <img src={art.image} alt={art.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <p className="text-xs text-yellow-600 font-semibold mb-2">{art.category}</p>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{art.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </main>
  )
}

export function generateStaticParams() {
  return [
    { id: "fed-independence" },
    { id: "powell-jackson-hole" },
    { id: "weekly-outlook" }
  ]
}
