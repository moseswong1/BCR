import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Newsletter signup */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-yellow-400 font-semibold">Ready to get started?</span>
                <Link href="/register">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    Open an Account
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <Link href="#newsletter">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6">
                    →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Trading links */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg">Trading</h3>
            <div className="space-y-3">
              <a href="/register" className="block text-gray-300 hover:text-white">Open a Live Account</a>
              <a href="/demo" className="block text-gray-300 hover:text-white">Open a Demo Account</a>
            </div>
          </div>

          {/* Trading Specification */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-semibold text-lg">Trading Specification</h3>
            <div className="space-y-3">
              <a href="/account-overview" className="block text-gray-300 hover:text-white">Account Overview</a>
              <a href="/spreads-commission-swap" className="block text-gray-300 hover:text-white">Spreads, Commission & Swap</a>
              <a href="/margin-leverage" className="block text-gray-300 hover:text-white">Margin & Leverage</a>
              <a href="/trading-hours" className="block text-gray-300 hover:text-white">Trading Hours</a>
              <a href="/deposit-withdrawal" className="block text-gray-300 hover:text-white">Deposit & Withdrawal</a>
            </div>
          </div>

          {/* Regulation & About */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-yellow-400 font-semibold text-lg">Regulation</h3>
              <div className="space-y-3">
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Public-Complaints-Policy.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">Complaints Handling Policy</a>
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Terms-and-Conditions.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">Terms & Conditions</a>
                <a href="/rg227" className="block text-gray-300 hover:text-white">RG227</a>
                <a href="/risk-disclosure-addendum" className="block text-gray-300 hover:text-white">Risk Disclosure Addendum</a>
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Target-Market-Determination.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">Target Market Determination</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-yellow-400 font-semibold text-lg">About</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-gray-300 hover:text-white">Our Story</a>
                <a href="/contact" className="block text-gray-300 hover:text-white">Contact Us</a>
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Terms-and-Conditions.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">Terms & Conditions</a>
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal links */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <span>2026 © - All Rights Reserved by Bacera Co Pty Ltd</span>
            </div>

            {/* Social media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BCRbridgethedifference?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://x.com/BCROFFICIALAU" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.instagram.com/thebcrofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/thebcr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Risk disclosure */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="text-xs text-gray-500 leading-relaxed space-y-2">
              <p>
                <strong>Risk Disclosure:</strong> Trading Contracts for Difference on margin carries a high level of risk, and may not be suitable for all investors. By trading Contracts for Difference, you could sustain a loss of all your deposited funds. BCR makes no recommendations as to the merits of any financial product referred to on our website, emails, or related material(s). The information contained on our website, emails, or related material(s) does not take into consideration prospective clients' trading objectives, financial situations, or investment needs. Before deciding to trade the Contracts for Difference offered by BCR, please ensure that you have read our{' '}
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Product-Disclosure-Statement.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Product Disclosure Statement</a>,{' '}
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Financial-Services-Guide.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Financial Services Guide</a>,{' '}
                <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Target-Market-Determination.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">Target Market Determination</a> and have sought independent professional financial advice to ensure you fully understand the risk involved before trading.
              </p>

              <p>
                "BCR" is a registered business name of Bacera Co Pty Ltd, Australian Company Number 130 877 137, Australian Financial Services Licence Number 328794.
              </p>

              <p>
                Business Address: Suite 3, Level 18, 201 Elizabeth Street, SYDNEY NSW 2000 | Registered Address: Level 1, 6-10 O'Connell Street, SYDNEY NSW 2000
              </p>

              <p>
                The information on this site is not directed at residents of any particular country outside of Australia and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
