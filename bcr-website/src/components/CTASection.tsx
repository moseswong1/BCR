import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Join us now and explore more
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Sign up in minutes and fund your account in seconds
          </p>

          <div className="flex justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-12 py-4 text-lg rounded-lg"
              >
                Open An Account
              </Button>
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}
