"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Globe, 
  BarChart3, 
  TrendingUp,
  Monitor,
  Smartphone,
  Lock
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const platforms = [
    {
      name: "MetaTrader 4",
      icon: Monitor,
      description: "Desktop & mobile trading",
      href: "/mt4"
    },
    {
      name: "MetaTrader 5",
      icon: BarChart3,
      description: "Advanced multi-asset platform",
      href: "/mt5"
    },
    {
      name: "WebTrader",
      icon: Globe,
      description: "Trade from your browser",
      href: "/webtrader"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Lock className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400">Client Login</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Access Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> Trading Account</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
              Log in to your BCR account and manage your trades across all platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Login Form */}
            <div>
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                {/* Form header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white">Client Login</h2>
                  <p className="mt-1 text-slate-400">Welcome back to BCR</p>
                </div>

                <form className="p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-slate-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-yellow-600 hover:underline font-medium">
                      Forgot password?
                    </a>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-[1.02] inline-flex items-center justify-center"
                  >
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-slate-500">or</span>
                    </div>
                  </div>

                  <p className="text-center text-slate-600">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-yellow-600 hover:underline font-semibold">
                      Create Account
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Right Column - Platforms */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Trading Platforms</h3>
                <div className="space-y-4">
                  {platforms.map((platform, idx) => (
                    <Link 
                      key={idx}
                      href={platform.href}
                      className="group flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-500/10 transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <platform.icon className="w-7 h-7 text-slate-700" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{platform.name}</h4>
                        <p className="text-sm text-slate-600">{platform.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Access */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8">
                <h3 className="text-lg font-bold text-white mb-4">Quick Access</h3>
                <div className="space-y-3">
                  <a 
                    href="https://my.thebcr.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white font-medium">MyBCR Portal</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white font-medium">MT4 Web Terminal</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white font-medium">MT5 Web Terminal</span>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </a>
                </div>
              </div>

              {/* Support */}
              <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6">
                <h3 className="font-bold text-yellow-900 mb-2">Need Help?</h3>
                <p className="text-sm text-yellow-700 mb-4">
                  Our support team is available 24/5 to assist you with any questions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-slate-900 font-semibold text-sm hover:bg-yellow-600 transition-colors"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    href="/support" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-yellow-300 text-yellow-700 font-semibold text-sm hover:bg-yellow-50 transition-colors"
                  >
                    Help Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
