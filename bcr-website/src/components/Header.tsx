```tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ✅ Works locally + on GitHub Pages (set NEXT_PUBLIC_BASE_PATH=/BCR in production)
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link href="/pro" className="hover:text-yellow-400">PRO</Link>
            <Link href="/careers" className="hover:text-yellow-400">Careers</Link>
            <Link href="/partners" className="hover:text-yellow-400">Partners</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/support" className="hover:text-yellow-400">Help and support</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-yellow-400">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>中文</DropdownMenuItem>
                <DropdownMenuItem>日本語</DropdownMenuItem>
                <DropdownMenuItem>한국어</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={`${BASE_PATH}/icon.png`}
                alt="BCR"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation with Hover Dropdowns */}
          <div className="hidden md:flex">
            <div className="flex items-center space-x-8">
              {/* Trading */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Trading
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/account-overview" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Trading accounts</div>
                      <div className="text-sm text-gray-600">Choose from two account types depending on your strategy</div>
                    </Link>
                    <Link href="/premium-clients" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Premium clients</div>
                      <div className="text-sm text-gray-600">Exclusive rewards and bespoke benefits for high-vol traders</div>
                    </Link>
                    <Link href="/trading/forex" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Margin/Leverage</div>
                      <div className="text-sm text-gray-600">Understand and manage margin</div>
                    </Link>
                    <Link href="/pricing" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Pricing</div>
                      <div className="text-sm text-gray-600">Discover our tight spreads, plus all other possible fees</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Markets */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Markets
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/markets/forex" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Forex CFDs</div>
                      <div className="text-sm text-gray-600">Trade major currency pairs with tight spreads</div>
                    </Link>
                    <Link href="/markets/indices" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Indices CFDs</div>
                      <div className="text-sm text-gray-600">Trade global equity indices with competitive pricing</div>
                    </Link>
                    <Link href="/markets/commodities" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Commodities CFDs</div>
                      <div className="text-sm text-gray-600">Trade metals, energies and softs with low spreads</div>
                    </Link>
                    <Link href="/markets/shares" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Share CFDs</div>
                      <div className="text-sm text-gray-600">Trade global shares with leverage and short selling</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platforms */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Platforms
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/mt5" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">MetaTrader 5</div>
                      <div className="text-sm text-gray-600">Explore the apex in trading automation with our execution tech</div>
                    </Link>
                    <Link href="/mt4" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">MetaTrader 4</div>
                      <div className="text-sm text-gray-600">The world's most popular trading platform</div>
                    </Link>
                    <Link href="/webtrader" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">WebTrader</div>
                      <div className="text-sm text-gray-600">Trade directly in your browser</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Market Analysis
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/market-analysis/navigating-markets" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Market Intelligence</div>
                      <div className="text-sm text-gray-600">Strategic research and in-depth analysis</div>
                    </Link>
                    <Link href="/market-analysis/the-daily-fix" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Daily Brief</div>
                      <div className="text-sm text-gray-600">Your essential market snapshot</div>
                    </Link>
                    <Link href="/market-analysis/meet-the-analysts" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Strategy Team</div>
                      <div className="text-sm text-gray-600">Expert perspectives and insights</div>
                    </Link>
                    <div className="border-t border-gray-200 my-2 pt-2">
                      <Link href="/economic-calendar" className="block p-3 hover:bg-gray-50 rounded">
                        <div className="font-medium">Economic Calendar</div>
                        <div className="text-sm text-gray-600">Stay informed about market-moving events</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  About Us
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/about" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">About BCR</div>
                      <div className="text-sm text-gray-600">BCR was born from the dream of making trading better</div>
                    </Link>
                    <Link href="/contact" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Contact Us</div>
                      <div className="text-sm text-gray-600">Get in touch with our team</div>
                    </Link>
                    <Link href="/disclosure-documents" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Disclosure Documents</div>
                      <div className="text-sm text-gray-600">Legal and regulatory information</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold transition-all duration-200"
              asChild
            >
              <Link href="/demo">Try Demo Account</Link>
            </Button>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6" asChild>
              <Link href="/register">Join now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="/trading" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Trading</a>
            <a href="/markets" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Markets</a>
            <a href="/platforms" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Platforms</a>
            <a href="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Resources</a>
            <a href="/company" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
              <a href="/demo" className="block px-3 py-2 text-base font-medium text-yellow-600 border border-yellow-500 rounded-md text-center hover:bg-yellow-50">Try Demo Account</a>
              <a href="/register" className="block px-3 py-2 text-base font-medium bg-yellow-500 text-black rounded-md text-center hover:bg-yellow-600">Join now</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
```
