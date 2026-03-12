import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Lock, 
  Globe, 
  TrendingUp, 
  Headphones,
  CheckCircle2,
  Award,
  Users,
  Building2,
  Zap,
  Clock
} from "lucide-react";

export const metadata = { title: "Open Account | BCR" };

export default function RegisterPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our advanced infrastructure",
    },
    {
      icon: TrendingUp,
      title: "Competitive Spreads",
      description: "Trade with spreads from 0.0 pips on major currency pairs",
    },
    {
      icon: Globe,
      title: "Global Markets Access",
      description: "Trade forex, indices, commodities and more from one account",
    },
    {
      icon: Headphones,
      title: "24/5 Expert Support",
      description: "Get help from our dedicated team whenever you need it",
    },
  ];

  const trustIndicators = [
    { value: "300+", label: "Global CFDs" },
    { value: "$0", label: "Deposit Fees" },
    { value: "0.0", label: "Spreads From" },
    { value: "24/5", label: "Support" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">Established Since 2008</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Open Your Trading Account
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> Today</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of Australian traders. Get access to global markets with a trusted local broker.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Registration Form */}
            <div>
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                {/* Form header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
                  <p className="mt-1 text-slate-400">Fill in your details to get started</p>
                </div>

                <form className="p-8 space-y-6">
                  {/* Personal Information */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-sm font-bold text-slate-900">
                        1
                      </div>
                      <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">Personal Information</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+61 400 000 000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Country of Residence
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white">
                        <option>Select your country</option>
                        <option>Australia</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>New Zealand</option>
                        <option>Singapore</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Security Information */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-sm font-bold text-slate-900">
                        2
                      </div>
                      <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase">Security Information</h3>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                      <p className="mt-2 text-xs text-slate-500">
                        Must be at least 8 characters with uppercase, lowercase, and a number
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="pt-6 border-t border-slate-200">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-slate-600">
                        I agree to the{" "}
                        <Link href="/disclosure-documents" className="text-yellow-600 hover:underline font-medium">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/disclosure-documents" className="text-yellow-600 hover:underline font-medium">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <Button 
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-[1.02] inline-flex items-center justify-center"
                  >
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-center text-slate-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-yellow-600 hover:underline font-semibold">
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              {/* Benefits cards */}
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust stats */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8">
                <h3 className="text-lg font-bold text-white mb-6">Why Traders Choose BCR</h3>
                <div className="grid grid-cols-2 gap-6">
                  {trustIndicators.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Prefer to practice first?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Open a risk-free demo account with $50,000 in virtual funds
          </p>
          <Button 
            variant="outline"
            className="mt-8 h-12 px-8 border-2 border-slate-300 text-slate-700 hover:bg-white font-semibold rounded-xl"
            asChild
          >
            <Link href="/demo" className="inline-flex items-center">
              Try Demo Account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
