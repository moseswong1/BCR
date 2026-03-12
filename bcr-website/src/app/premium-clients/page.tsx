import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
  Headphones, 
  TrendingUp,
  Zap,
  Users,
  Star,
  Crown,
  CheckCircle2,
  ChevronDown
} from "lucide-react";

export const metadata = { title: "Premium Clients | BCR" };

export default function PremiumClientsPage() {
  const benefits = [
    {
      icon: Crown,
      title: "Dedicated Account Manager",
      description: "Your personal point of contact for all trading needs and account queries.",
    },
    {
      icon: Zap,
      title: "Priority Execution",
      description: "Faster order execution with priority access to our trading servers.",
    },
    {
      icon: TrendingUp,
      title: "Enhanced Leverage",
      description: "Access to higher leverage options based on your trading history.",
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "24/5 priority support with dedicated phone line and live chat.",
    },
    {
      icon: Star,
      title: "Exclusive Analysis",
      description: "Daily market insights and trading signals from our senior analysts.",
    },
    {
      icon: Award,
      title: "VIP Events",
      description: "Invitations to exclusive webinars, trading workshops and events.",
    },
  ];

  const tiers = [
    {
      name: "Silver",
      minDeposit: "$10,000",
      features: [
        "Dedicated account manager",
        "Priority customer support",
        "Weekly market analysis",
        "Access to premium webinars",
      ],
    },
    {
      name: "Gold",
      minDeposit: "$50,000",
      popular: true,
      features: [
        "Everything in Silver",
        "Daily trading signals",
        "Enhanced leverage options",
        "Priority execution",
        "Exclusive trading tools",
      ],
    },
    {
      name: "Platinum",
      minDeposit: "$100,000",
      features: [
        "Everything in Gold",
        "Personal trading advisor",
        "Custom trading solutions",
        "VIP event invitations",
        "Fee rebates on high volume",
        "Direct line to senior analysts",
      ],
    },
  ];

  const faqs = [
    {
      q: "How do I become a Premium Client?",
      a: "Premium status is automatically granted when your account balance reaches the minimum threshold for each tier. Contact your account manager for details.",
    },
    {
      q: "Can I lose my Premium status?",
      a: "Your status is based on your trading activity and account balance. We'll notify you if your status is at risk of changing.",
    },
    {
      q: "Are there any fees for Premium status?",
      a: "No additional fees. Premium benefits are our way of thanking active traders for choosing BCR.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-28">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Exclusive Benefits</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Experience
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> Premium Trading</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Unlock exclusive benefits, personalized service, and enhanced trading conditions as a BCR Premium Client.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                Become a Premium Client
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="h-14 px-8 border-2 border-slate-600 text-white hover:bg-slate-800 font-semibold text-lg rounded-xl transition-all"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Benefits</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Premium Client Benefits
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Enjoy exclusive advantages designed for serious traders
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-yellow-600" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Tiers</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Choose Your Tier
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div 
                key={idx}
                className={[
                  "relative rounded-2xl overflow-hidden transition-all",
                  tier.popular 
                    ? "border-2 border-yellow-400 shadow-xl shadow-yellow-500/10 scale-105" 
                    : "border border-slate-200 bg-white"
                ].join(" ")}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 text-center">
                    <span className="text-sm font-bold text-slate-900">MOST POPULAR</span>
                  </div>
                )}
                
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                  <div className="mt-2">
                    <span className="text-sm text-slate-500">Minimum deposit</span>
                    <div className="text-3xl font-bold text-yellow-600">{tier.minDeposit}</div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={[
                      "w-full mt-8 h-12 font-semibold rounded-xl transition-all",
                      tier.popular 
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 shadow-lg shadow-yellow-500/25" 
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    ].join(" ")}
                    asChild
                  >
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">FAQ</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx} 
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-yellow-300 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready for Premium Trading?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Open your account today and discover the BCR Premium experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="h-14 px-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                Open Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
