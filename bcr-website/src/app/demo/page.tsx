import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, BookOpen, Award, DollarSign, Clock, Globe, BarChart3, Smartphone } from "lucide-react";

export const metadata = { title: "Demo Account" };

export default function DemoPage() {
  const faqs = [
    {
      q: "How long does my demo account last?",
      a: "Your demo account remains active for 90 days. You can request to extend it at any time.",
    },
    {
      q: "Is the demo data real-time?",
      a: "Yes! All market data in the demo account is real-time, just like in a live trading account.",
    },
    {
      q: "Can I upgrade to a live account while using the demo?",
      a: "Absolutely. You can seamlessly transition from your demo to a live account whenever you're ready.",
    },
    {
      q: "How much virtual capital do I get?",
      a: "You start with $50,000 in virtual funds that resets if you deposit real money into a live account.",
    },
    {
      q: "Are there any restrictions on demo trading?",
      a: "No restrictions—trade freely with the same tools and features available in live accounts.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Try Trading Risk-Free with a Demo Account
          </h1>
          <p className="text-xl text-yellow-50 max-w-2xl">
            Practice trading with $50,000 in virtual funds. Learn, test strategies, and build confidence—no risk involved.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Demo Account?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Market Data</h3>
              <p className="text-gray-600 text-sm">
                Trade with real-time market prices and live data feeds.
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                <DollarSign className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">$50K Virtual Funds</h3>
              <p className="text-gray-600 text-sm">
                Get $50,000 in virtual capital to practice trading.
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Full Platform Access</h3>
              <p className="text-gray-600 text-sm">
                Access all our trading platforms with full functionality.
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Get guidance from our professional support team.
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                <BookOpen className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Educational Resources</h3>
              <p className="text-gray-600 text-sm">
                Learn trading strategies through tutorials and webinars.
              </p>
            </Card>

            <Card className="p-6 border-gray-200 hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Card Required</h3>
              <p className="text-gray-600 text-sm">
                Start immediately. No payment information needed.
              </p>
            </Card>
          </div>
        </div>

        {/* Demo Account Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Your Demo Account</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                  <option>Select your country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trading Experience
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                  <option>Select your experience level</option>
                  <option>Beginner (0-1 years)</option>
                  <option>Intermediate (1-3 years)</option>
                  <option>Advanced (3+ years)</option>
                </select>
              </div>

              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2">
                Open Demo Account
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Available Platforms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Platforms</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-6 border-gray-200 text-center hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mx-auto mb-3">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900">WebTrader</h3>
              </Card>
              <Card className="p-6 border-gray-200 text-center hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900">MetaTrader 4</h3>
              </Card>
              <Card className="p-6 border-gray-200 text-center hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900">MetaTrader 5</h3>
              </Card>
              <Card className="p-6 border-gray-200 text-center hover:shadow-lg transition">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-100 mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Mobile App</h3>
              </Card>
            </div>

            {/* CTA Card */}
            <Card className="p-8 border-gray-200 bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to go live?</h3>
              <p className="text-gray-600 mb-6">
                Once you've mastered the demo, upgrade to a live trading account and start trading with real money.
              </p>
              <Link href="/register">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Open Live Account
                </Button>
              </Link>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <Card className="p-12 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-center border-0">
          <h2 className="text-3xl font-bold mb-4">Start Your Trading Journey Today</h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who started with our demo account. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
              Open Demo Account
            </Button>
            <Button className="border border-white text-white hover:bg-teal-700 font-semibold">
              Learn More
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
