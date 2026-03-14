'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// Flag SVG components for each country
const FlagAU = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="au-circle"><circle cx="18" cy="18" r="18"/></clipPath>
    <g clipPath="url(#au-circle)">
      <rect width="36" height="36" fill="#00247D"/>
      {/* Union Jack simplified */}
      <path d="M0 0L14 10H0V0Z" fill="#CF142B"/>
      <path d="M0 0H6L14 6V0H8L0 6V0Z" fill="white"/>
      <path d="M14 0V10H0V0L6 0V6L0 0" fill="white" fillOpacity="0.3"/>
      {/* Stars */}
      <circle cx="9" cy="27" r="2" fill="white"/>
      <circle cx="27" cy="9" r="1.5" fill="white"/>
      <circle cx="30" cy="18" r="1.5" fill="white"/>
      <circle cx="27" cy="27" r="1.5" fill="white"/>
      <circle cx="24" cy="21" r="1" fill="white"/>
    </g>
  </svg>
)

const FlagCN = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#DE2910"/>
    <path d="M10 8l1.5 4.5-4-2.8h5l-4 2.8L10 8z" fill="#FFDE00"/>
    <path d="M16 5l.5 1.5-1.3-.9h1.6l-1.3.9L16 5z" fill="#FFDE00"/>
    <path d="M19 7l.5 1.5-1.3-.9h1.6l-1.3.9L19 7z" fill="#FFDE00"/>
    <path d="M19 11l.5 1.5-1.3-.9h1.6l-1.3.9L19 11z" fill="#FFDE00"/>
    <path d="M16 13l.5 1.5-1.3-.9h1.6l-1.3.9L16 13z" fill="#FFDE00"/>
  </svg>
)

const FlagHK = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#DE2110"/>
    <path d="M18 10c-1 2-3 3-3 5s2 3 3 3c1 0 3-1 3-3s-2-3-3-5z" fill="white"/>
    <path d="M14 14c2 1 3 3 5 3s3-2 3-3c0-1-1-3-3-3s-3 2-5 3z" fill="white"/>
    <path d="M13 20c2-1 4-1 5-3s0-3-1-3-3 1-3 3 1 4-1 3z" fill="white"/>
    <path d="M17 25c1-2 1-4 3-5s3 0 3 1-1 3-3 3-4-1-3 1z" fill="white"/>
    <path d="M23 20c-2 1-4 1-5 3s0 3 1 3 3-1 3-3-1-4 1-3z" fill="white"/>
  </svg>
)

const FlagMY = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <clipPath id="my-circle"><circle cx="18" cy="18" r="18"/></clipPath>
    <g clipPath="url(#my-circle)">
      <rect width="36" height="2.57" fill="#CC0000"/>
      <rect y="2.57" width="36" height="2.57" fill="white"/>
      <rect y="5.14" width="36" height="2.57" fill="#CC0000"/>
      <rect y="7.71" width="36" height="2.57" fill="white"/>
      <rect y="10.28" width="36" height="2.57" fill="#CC0000"/>
      <rect y="12.85" width="36" height="2.57" fill="white"/>
      <rect y="15.42" width="36" height="2.57" fill="#CC0000"/>
      <rect y="18" width="36" height="2.57" fill="white"/>
      <rect y="20.57" width="36" height="2.57" fill="#CC0000"/>
      <rect y="23.14" width="36" height="2.57" fill="white"/>
      <rect y="25.71" width="36" height="2.57" fill="#CC0000"/>
      <rect y="28.28" width="36" height="2.57" fill="white"/>
      <rect y="30.85" width="36" height="2.57" fill="#CC0000"/>
      <rect y="33.42" width="36" height="2.58" fill="white"/>
      <rect width="20" height="20" fill="#010066"/>
      <circle cx="9" cy="10" r="5" fill="#FFCC00"/>
      <circle cx="10" cy="10" r="4" fill="#010066"/>
      <path d="M14 6l1 3-2.5-1.8h3l-2.5 1.8L14 6z" fill="#FFCC00"/>
    </g>
  </svg>
)

const FlagVN = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#DA251D"/>
    <path d="M18 8l2.9 9h-9.5l7.7-5.6-2.9 9-2.9-9 7.7 5.6h-9.5L18 8z" fill="#FFFF00"/>
  </svg>
)

const FlagTH = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <clipPath id="th-circle"><circle cx="18" cy="18" r="18"/></clipPath>
    <g clipPath="url(#th-circle)">
      <rect width="36" height="6" fill="#A51931"/>
      <rect y="6" width="36" height="6" fill="white"/>
      <rect y="12" width="36" height="12" fill="#2D2A4A"/>
      <rect y="24" width="36" height="6" fill="white"/>
      <rect y="30" width="36" height="6" fill="#A51931"/>
    </g>
  </svg>
)

const FlagJP = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="white"/>
    <circle cx="18" cy="18" r="7" fill="#BC002D"/>
  </svg>
)

const FlagKR = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="white"/>
    <circle cx="18" cy="18" r="7" fill="#C60C30"/>
    <path d="M18 11c-3.9 0-7 3.1-7 7h7V11z" fill="#003478"/>
  </svg>
)

const FlagKH = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <clipPath id="kh-circle"><circle cx="18" cy="18" r="18"/></clipPath>
    <g clipPath="url(#kh-circle)">
      <rect width="36" height="9" fill="#032EA1"/>
      <rect y="9" width="36" height="18" fill="#E00025"/>
      <rect y="27" width="36" height="9" fill="#032EA1"/>
      <rect x="13" y="13" width="10" height="10" fill="white" fillOpacity="0.8"/>
    </g>
  </svg>
)

const FlagES = () => (
  <svg className="w-5 h-5 rounded-full" viewBox="0 0 36 36" fill="none">
    <clipPath id="es-circle"><circle cx="18" cy="18" r="18"/></clipPath>
    <g clipPath="url(#es-circle)">
      <rect width="36" height="9" fill="#C60B1E"/>
      <rect y="9" width="36" height="18" fill="#FFC400"/>
      <rect y="27" width="36" height="9" fill="#C60B1E"/>
    </g>
  </svg>
)

// Map language codes to flag components
const flagComponents: Record<string, React.FC> = {
  'en': FlagAU,
  'zh-CN': FlagCN,
  'zh-TW': FlagHK,
  'ms': FlagMY,
  'vi': FlagVN,
  'th': FlagTH,
  'ja': FlagJP,
  'ko': FlagKR,
  'km': FlagKH,
  'es': FlagES,
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t, languages, currentLanguage } = useLanguage()

  const CurrentFlag = flagComponents[language] || FlagAU

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link href="/pro" className="hover:text-yellow-400">{t.header.pro}</Link>
            <a href="https://www.seek.com.au/companies/bcr-bacera-co-164393999744024" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">{t.header.careers}</a>
            <Link href="/demo" className="hover:text-yellow-400">{t.header.demoAccount}</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hover:text-yellow-400">{t.header.support}</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 hover:text-yellow-400 bg-gray-700/50 px-3 py-1.5 rounded-md">
                <CurrentFlag />
                <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700 min-w-[200px]">
                {languages.map((lang) => {
                  const FlagComponent = flagComponents[lang.code]
                  return (
                    <DropdownMenuItem 
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center space-x-3 px-4 py-2.5 cursor-pointer hover:bg-gray-700 text-white ${language === lang.code ? 'bg-gray-700' : ''}`}
                    >
                      <FlagComponent />
                      <span>{lang.nativeName}</span>
                    </DropdownMenuItem>
                  )
                })}
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
                src={BASE_PATH + "/icon.png"}
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
                  {t.header.trading}
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/account-overview" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.tradingAccounts}</div>
                      <div className="text-sm text-gray-600">{t.nav.tradingAccountsDesc}</div>
                    </Link>
                    <Link href="/trading/forex" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.marginLeverage}</div>
                      <div className="text-sm text-gray-600">{t.nav.marginLeverageDesc}</div>
                    </Link>
                    <Link href="/pricing" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.pricing}</div>
                      <div className="text-sm text-gray-600">{t.nav.pricingDesc}</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Markets */}
              <div className="relative group">
                <Link href="/markets" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  {t.header.markets}
                </Link>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/markets" className="block p-3 hover:bg-yellow-50 rounded border-b border-gray-100 mb-2">
                      <div className="font-medium text-yellow-600">{t.nav.rangeOfMarkets}</div>
                      <div className="text-sm text-gray-600">{t.nav.rangeOfMarketsDesc}</div>
                    </Link>
                    <Link href="/markets/forex" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.forexCFDs}</div>
                      <div className="text-sm text-gray-600">{t.nav.forexCFDsDesc}</div>
                    </Link>
                    <Link href="/markets/indices" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.indices}</div>
                      <div className="text-sm text-gray-600">{t.nav.indicesDesc}</div>
                    </Link>
                    <Link href="/markets/commodities" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.commodities}</div>
                      <div className="text-sm text-gray-600">{t.nav.commoditiesDesc}</div>
                    </Link>
                    <Link href="/markets/shares" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.shares}</div>
                      <div className="text-sm text-gray-600">{t.nav.sharesDesc}</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platforms */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  {t.header.platforms}
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/mt5" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.mt5}</div>
                      <div className="text-sm text-gray-600">{t.nav.mt5Desc}</div>
                    </Link>
                    <Link href="/mt4" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.mt4}</div>
                      <div className="text-sm text-gray-600">{t.nav.mt4Desc}</div>
                    </Link>
                    <Link href="/webtrader" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.webTrader}</div>
                      <div className="text-sm text-gray-600">{t.nav.webTraderDesc}</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  {t.header.resources}
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/market-analysis" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.marketAnalysis}</div>
                      <div className="text-sm text-gray-600">{t.nav.marketAnalysisDesc}</div>
                    </Link>
                    <Link href="/economic-calendar" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.economicCalendar}</div>
                      <div className="text-sm text-gray-600">{t.nav.economicCalendarDesc}</div>
                    </Link>
                    <Link href="/market-analysis/meet-the-analysts" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">Meet the Analysts</div>
                      <div className="text-sm text-gray-600">Expert perspectives and insights</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  {t.header.company}
                </button>
                <div className="absolute top-full left-0 mt-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid gap-3">
                    <Link href="/about" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.aboutUs}</div>
                      <div className="text-sm text-gray-600">{t.nav.aboutUsDesc}</div>
                    </Link>
                    <Link href="/contact" className="block p-3 hover:bg-gray-50 rounded">
                      <div className="font-medium">{t.nav.contactUs}</div>
                      <div className="text-sm text-gray-600">{t.nav.contactUsDesc}</div>
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
              <Link href="/login">{t.header.login}</Link>
            </Button>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6" asChild>
              <Link href="/register">{t.header.joinNow}</Link>
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
            <a href="/trading" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{t.header.trading}</a>
            <a href="/markets" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{t.header.markets}</a>
            <a href="/platforms" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{t.header.platforms}</a>
            <a href="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{t.header.resources}</a>
            <a href="/company" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{t.header.company}</a>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{t.header.login}</a>
              <a href="/demo" className="block px-3 py-2 text-base font-medium text-yellow-600 border border-yellow-500 rounded-md text-center hover:bg-yellow-50">{t.header.demoAccount}</a>
              <a href="/register" className="block px-3 py-2 text-base font-medium bg-yellow-500 text-black rounded-md text-center hover:bg-yellow-600">{t.header.joinNow}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
