'use client'

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowUpRight, ArrowDownRight, Monitor } from "lucide-react"

type Quote = {
  symbol: string
  name: string
  price: number
  changePct?: number | null
  bid?: number
  ask?: number
}

function fmtSmart(n: number) {
  if (n >= 1000) return n.toLocaleString(undefined, { maximumFractionDigits: 2 })
  if (n >= 10) return n.toLocaleString(undefined, { maximumFractionDigits: 3 })
  return n.toLocaleString(undefined, { maximumFractionDigits: 5 })
}

function ChangeBadge({ pct }: { pct?: number | null }) {
  if (pct === null || pct === undefined) return null
  const v = pct
  const up = v >= 0
  const Icon = up ? ArrowUpRight : ArrowDownRight

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-semibold backdrop-blur-sm
      ${up ? "bg-green-500/15 border-green-400/25 text-green-100" : "bg-red-500/15 border-red-400/25 text-red-100"}
    `}
    >
      <Icon className="h-3.5 w-3.5" />
      {up ? "+" : ""}{v.toFixed(2)}%
    </span>
  )
}

function WebTraderFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[560px] lg:justify-self-end rounded-[26px] border border-white/15 bg-black/35 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2 text-white/90">
          <Monitor className="h-4 w-4" />
          <span className="text-sm font-semibold">BCR WebTrader</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function withIndicativeSpread(mid: number, spreadAbs: number) {
  const half = spreadAbs / 2
  return { bid: mid - half, ask: mid + half }
}

function TradingPreview() {
  // ✅ Hardcoded "today" snapshot (no API calls)
  const updatedLabel = "Updated today"
  const router = useRouter()

  const quotes = useMemo<Record<string, Quote>>(() => {
    const XAU = 4661.45
    const BTC = 78682.0
    const EUR = 1.1815
    const GBP = 1.3690

    return {
      XAUUSD: {
        symbol: "XAUUSD",
        name: "Gold",
        price: XAU,
        changePct: null,
        ...withIndicativeSpread(XAU, 0.40),
      },
      BTCUSD: {
        symbol: "BTCUSD",
        name: "Bitcoin",
        price: BTC,
        // If you want a % here, set it manually; leaving null keeps it clean.
        changePct: null,
        ...withIndicativeSpread(BTC, 12.0),
      },
      EURUSD: {
        symbol: "EURUSD",
        name: "Euro",
        price: EUR,
        changePct: null,
        ...withIndicativeSpread(EUR, 0.00012),
      },
      GBPUSD: {
        symbol: "GBPUSD",
        name: "Pound",
        price: GBP,
        changePct: null,
        ...withIndicativeSpread(GBP, 0.00018),
      },
    }
  }, [])

  const xau = quotes["XAUUSD"]

  const watch = useMemo(() => {
    const order = ["XAUUSD", "BTCUSD", "EURUSD", "GBPUSD"]
    return order.map((k) => quotes[k]).filter(Boolean) as Quote[]
  }, [quotes])

  return (
    <WebTraderFrame>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-white/70">Hot market right now</div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <div className="text-lg font-semibold text-white">XAU/USD (Gold)</div>
            <ChangeBadge pct={xau?.changePct ?? null} />
          </div>

          <div className="mt-2 text-3xl font-bold tracking-tight text-white">
            {xau ? fmtSmart(xau.price) : "—"}
          </div>

          <div className="mt-2 text-xs text-white/60">
            {updatedLabel}
            <span className="mx-2 opacity-50">•</span>
            Indicative prices
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/15 border border-green-400/25 px-3 py-2 text-xs font-semibold text-green-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Trusted by 500K+ Traders
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-white/10 border border-white/10 px-3 py-2 text-xs text-white/80 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Tight spreads*
            </span>
            <span className="rounded-full bg-white/10 border border-white/10 px-3 py-2 text-xs text-white/80 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              One-click trading
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/10">
          <div className="text-sm font-semibold text-white/90">Trades available</div>
          <div className="text-xs text-white/60">Bid / Ask</div>
        </div>

        <div className="divide-y divide-white/10">
          {watch.map((row) => {
            const isHot = row.symbol === "XAUUSD"
            const bid = row.bid ?? row.price
            const ask = row.ask ?? row.price

            return (
              <div
                key={row.symbol}
                className={`px-4 py-3 flex items-center justify-between gap-3 ${isHot ? "bg-white/5" : ""}`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className={`text-sm font-semibold ${isHot ? "text-white" : "text-white/90"}`}>
                      {row.symbol}
                    </div>
                    <div className="text-xs text-white/60 truncate">{row.name}</div>
                    {isHot && (
                      <span className="ml-1 rounded-full bg-yellow-300/20 border border-yellow-200/25 px-2 py-0.5 text-[10px] font-semibold text-yellow-100">
                        Trending
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-white/60">Bid</div>
                    <div className="text-sm font-semibold text-white/90">{fmtSmart(bid)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/60">Ask</div>
                    <div className="text-sm font-semibold text-white/90">{fmtSmart(ask)}</div>
                  </div>
                  <button
                    onClick={() => router.push('/register')}
                    className={`hidden sm:inline-flex rounded-xl px-3 py-2 text-xs font-semibold border transition
                      ${isHot
                        ? "bg-white text-black border-white hover:bg-white/90"
                        : "bg-white/10 text-white border-white/15 hover:bg-white/15"}
                    `}
                  >
                    Trade
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-4 text-xs text-white/60">
        *Replace with compliant spread wording and product availability by region.
      </div>
    </WebTraderFrame>
  )
}

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Momentum Mondays: Market Outlooks</span>
              </div>
              <span className="text-sm opacity-90">Weekly at 11:00am AEST | Live analysis with BCR</span>
            </div>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 bg-white/5">
              Register now
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Bridge the Global Market
                <br />
                <span className="text-black">with BCR</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Access global CFDs with 0.0+ spreads. Trade{" "}
                <span className="font-bold">Forex</span>, <span className="font-bold">Crypto</span>,{" "}
                <span className="font-bold">Metals</span>, <span className="font-bold">Commodities</span>,{" "}
                <span className="font-bold">Indices</span>, and <span className="font-bold">Shares</span>{" "}
                with local analysis and support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Competitive Spreads
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Algo Trading
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                No Requotes
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg 2xl:font-bold w-full sm:w-auto">
                  Apply within minutes
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-yellow-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-200 w-full sm:w-auto"
                >
                  Try Demo Account
                </Button>
              </Link>
            </div>
          </div>

          <TradingPreview />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
          <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
