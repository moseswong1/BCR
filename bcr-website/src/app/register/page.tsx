import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Lock, Globe, Shield, Headphones } from "lucide-react";

export const metadata = { title: "Join Now" };

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Open Your Trading Account Today
          </h1>
          <p className="text-xl text-yellow-50 max-w-2xl">
            Join thousands of traders worldwide. Get instant access to global markets and start trading in minutes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div>
            <Card className="p-8 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Create Your Account</h2>

              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-600 text-white text-xs mr-3">
                      1
                    </span>
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                      <option>Select your country</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Security Information */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-600 text-white text-xs mr-3">
                      2
                    </span>
                    Security Information
                  </h3>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      At least 8 characters, including uppercase, lowercase, and numbers
                    </p>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 accent-yellow-600"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-yellow-600 hover:underline font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-yellow-600 hover:underline font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2">
                  Create Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <p className="text-center text-gray-600 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-yellow-600 hover:underline font-semibold">
                  Sign In
                </Link>
              </p>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Join BCR?</h2>

            <div className="space-y-4">
              <Card className="p-6 border-gray-200 hover:shadow-lg transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100">
                      <Lock className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Secure & Regulated
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Trade with confidence. Fully regulated and licensed by top-tier authorities worldwide.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-gray-200 hover:shadow-lg transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100">
                      <Globe className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Global Markets Access
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Trade 500+ instruments including forex, commodities, crypto, and indices.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-gray-200 hover:shadow-lg transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Instant Account Opening
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Open your account and start trading in minutes with our streamlined process.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-gray-200 hover:shadow-lg transition">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-100">
                      <Headphones className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      24/5 Expert Support
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Get help from our professional support team throughout your trading week.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
