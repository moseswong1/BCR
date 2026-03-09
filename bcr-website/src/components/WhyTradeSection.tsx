import { Card } from "@/components/ui/card"
import { Clock, TrendingUp, Headphones } from "lucide-react"

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

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  )
}
