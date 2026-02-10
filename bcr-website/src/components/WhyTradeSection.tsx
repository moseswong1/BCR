import { Card } from "@/components/ui/card"
import { Shield, Clock, TrendingUp, Users, Award, Headphones } from "lucide-react"

export function WhyTradeSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "UTILISE EVERY TRADING STRATEGY",
      description: "BCR is your best choice of intra-day traders, scalpers, copy trade, and robots."
    },
    {
      icon: Headphones,
      title: "24/5 SUPPORT TEAM",
      description: "Our dedicated client support team is available 24/5, and our premium account managers have even more availability."
    },
    {
      icon: Shield,
      title: "TRANSPARENT TRADING CONDITIONS",
      description: "Clear pricing, straightforward execution policies, and risk-focused trading tools."
    },
    {
      icon: Award,
      title: "AWARD-WINNING PLATFORM",
      description: "Industry-recognized trading platforms with advanced features and reliable execution."
    },
    {
      icon: Clock,
      title: "FAST EXECUTION",
      description: "Lightning-fast order execution with minimal slippage for optimal trading performance."
    },
    {
      icon: Users,
      title: "GLOBAL COMMUNITY",
      description: "Join thousands of traders worldwide who trust BCR for their trading needs."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why <span className="text-yellow-600">trade</span>
            <br />
            CFDs with BCR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our comprehensive trading solutions,
            professional support, and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Trade with Confidence
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Competitive Spreads</h4>
                  <p className="text-gray-600">Start from 0.0 pips on major currency pairs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">No Requotes</h4>
                  <p className="text-gray-600">Direct market access with transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Deep Liquidity</h4>
                  <p className="text-gray-600">Access to global liquidity providers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Tools</h4>
                  <p className="text-gray-600">Advanced charting and analysis tools</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Circular feature diagram */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              {/* Surrounding circles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
