import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Eye, EyeOff, Shield, Lock, Smartphone, ArrowRight, Globe, BarChart3, TrendingUp } from "lucide-react";

export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Access Your Trading Account
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Securely log in to your BCR account and manage your trades across all platforms.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Login Form */}
          <div>
            <Card className="p-8 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Client Login</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      <EyeOff className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
                  Sign In
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <p className="text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline font-semibold">
                  Create Account
                </Link>
              </p>
            </Card>
          </div>

          {/* Right Column - Platforms & Security */}
          <div className="space-y-6">
            {/* Trading Platforms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trading Platforms</h2>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 border-gray-200 hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 mb-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">WebTrader</h3>
                  <p className="text-sm text-gray-600 mt-1">Browser-based trading</p>
                </Card>
                <Card className="p-6 border-gray-200 hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">MetaTrader 4</h3>
                  <p className="text-sm text-gray-600 mt-1">Advanced charting tools</p>
                </Card>
                <Card className="p-6 border-gray-200 hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 mb-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">MetaTrader 5</h3>
                  <p className="text-sm text-gray-600 mt-1">Next-gen platform</p>
                </Card>
                <Card className="p-6 border-gray-200 hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 mb-3">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Mobile App</h3>
                  <p className="text-sm text-gray-600 mt-1">Trade on the go</p>
                </Card>
              </div>
            </div>

            {/* Security Features */}
            <Card className="p-6 border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                Banking-Grade Security
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Two-Factor Authentication (2FA)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>256-bit SSL Encryption</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Segregated Client Accounts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Fraud Monitoring Systems</span>
                </li>
              </ul>
            </Card>

            {/* Support */}
            <Card className="p-6 border-gray-200 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <h3 className="font-semibold mb-2">Need Help Logging In?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Our support team is available 24/5 to assist you.
              </p>
              <Link href="/contact" className="text-blue-200 hover:text-white font-semibold flex items-center">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
