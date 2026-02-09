import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Headphones, Shield } from "lucide-react"

export function TradingSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: "300+",
      label: "Products",
      description: "Global CFDs available"
    },
    {
      icon: Shield,
      number: "30:1",
      label: "FlexibleLeverage",
      description: "Regulated trading"
    },
    {
      icon: DollarSign,
      number: "300 AUD",
      label: "Minimum Deposit",
      description: "Start trading today"
    },
    {
      icon: TrendingUp,
      number: "0.0+",
      label: "Spreads",
      description: "Competitive pricing"
    },
    {
      icon: Headphones,
      number: "24/5",
      label: "Client Service",
      description: "Professional support"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600 xl:font-medium">{stat.description}</div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
