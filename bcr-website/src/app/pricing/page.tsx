"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type TabKey = "forex" | "shares" | "metals" | "commodities" | "indices";

type Row = {
  symbol: string;
  advantageMinSpread: string;
  advantageCommission: string;
  alphaMinSpread: string;
  alphaCommission: string;
};

type Tab = {
  key: TabKey;
  label: string;
  rows: Row[];
};

function classNames(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

export default function SpreadsCommissionSwapPage() {
  const tabs: Tab[] = useMemo(
    () => [
      {
        key: "forex",
        label: "Forex CFDs",
        rows: [
          { symbol: "AUDUSD", advantageMinSpread: "1.2", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "EURUSD", advantageMinSpread: "1.2", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "GBPUSD", advantageMinSpread: "1.6", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
          { symbol: "USDCAD", advantageMinSpread: "1.5", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
          { symbol: "USDJPY", advantageMinSpread: "1.2", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "NZDUSD", advantageMinSpread: "1.7", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
          { symbol: "USDCHF", advantageMinSpread: "1.7", advantageCommission: "0 AUD", alphaMinSpread: "0.5", alphaCommission: "6 AUD" },
        ],
      },
      {
        key: "shares",
        label: "Share CFDs",
        rows: [
          { symbol: "#AXP", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#AAPL", advantageMinSpread: "15", advantageCommission: "20 AUD", alphaMinSpread: "15", alphaCommission: "20 AUD" },
          { symbol: "#BAC", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#C", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#KO", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#DIS", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#IBM", advantageMinSpread: "20", advantageCommission: "20 AUD", alphaMinSpread: "20", alphaCommission: "20 AUD" },
          { symbol: "#INTC", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#MCD", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
          { symbol: "#MSFT", advantageMinSpread: "5", advantageCommission: "20 AUD", alphaMinSpread: "5", alphaCommission: "20 AUD" },
        ],
      },
      {
        key: "metals",
        label: "Metal CFDs",
        rows: [
          { symbol: "XAUUSD", advantageMinSpread: "24", advantageCommission: "0 AUD", alphaMinSpread: "0.0+", alphaCommission: "6 AUD" },
          { symbol: "XAGUSD", advantageMinSpread: "40", advantageCommission: "0 AUD", alphaMinSpread: "-", alphaCommission: "6 AUD" },
          { symbol: "XAGUSDmin", advantageMinSpread: "40", advantageCommission: "0 AUD", alphaMinSpread: "3", alphaCommission: "6 AUD" },
        ],
      },
      {
        key: "commodities",
        label: "Commodity CFDs",
        rows: [
          { symbol: "#CL", advantageMinSpread: "46", advantageCommission: "6 AUD", alphaMinSpread: "46", alphaCommission: "0 AUD" },
          { symbol: "XTIUSD", advantageMinSpread: "40", advantageCommission: "6 AUD", alphaMinSpread: "40", alphaCommission: "0 AUD" },
          { symbol: "XBRUSD", advantageMinSpread: "80", advantageCommission: "6 AUD", alphaMinSpread: "80", alphaCommission: "0 AUD" },
          { symbol: "XNGUSD", advantageMinSpread: "6", advantageCommission: "6 AUD", alphaMinSpread: "6", alphaCommission: "0 AUD" },
        ],
      },
      {
        key: "indices",
        label: "Index CFDs",
        rows: [
          { symbol: "#US500", advantageMinSpread: "30", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#US100", advantageMinSpread: "23", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#US30", advantageMinSpread: "40", advantageCommission: "0 AUD", alphaMinSpread: "30", alphaCommission: "0 AUD" },
          { symbol: "#JPN225", advantageMinSpread: "150", advantageCommission: "0 AUD", alphaMinSpread: "150", alphaCommission: "0 AUD" },
          { symbol: "#AUS200", advantageMinSpread: "20", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#GER40", advantageMinSpread: "20", advantageCommission: "0 AUD", alphaMinSpread: "20", alphaCommission: "0 AUD" },
          { symbol: "#EUSTX50", advantageMinSpread: "50", advantageCommission: "0 AUD", alphaMinSpread: "50", alphaCommission: "0 AUD" },
          { symbol: "#FRA40", advantageMinSpread: "50", advantageCommission: "0 AUD", alphaMinSpread: "50", alphaCommission: "0 AUD" },
          { symbol: "#UK100", advantageMinSpread: "50", advantageCommission: "0 AUD", alphaMinSpread: "50", alphaCommission: "0 AUD" },
          { symbol: "#ESP35", advantageMinSpread: "80", advantageCommission: "0 AUD", alphaMinSpread: "80", alphaCommission: "0 AUD" },
          { symbol: "#HKG50", advantageMinSpread: "100", advantageCommission: "0 AUD", alphaMinSpread: "100", alphaCommission: "0 AUD" },
          { symbol: "#CHN50", advantageMinSpread: "250", advantageCommission: "0 AUD", alphaMinSpread: "200", alphaCommission: "0 AUD" },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<TabKey>("forex");
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Trading Conditions
              <span className="h-1 w-1 rounded-full bg-yellow-400" />
              Spreads & Commission
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Transparent Spreads, Low Commission
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Start trading with BCR and enjoy spreads from 0.0 pips and competitive commission across forex, commodities, shares, and more.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Open an Account
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Try Demo
              </a>
            </div>

            <p className="mt-6 text-xs leading-5 text-white/70">
              * Spreads may vary based on market conditions and account type
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trading / Trading Conditions
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50 mt-8">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative px-4 sm:px-8 lg:px-10 py-10 sm:py-12">
            {/* Section: Spreads definition (same content) */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4 hidden lg:block">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                    Trading costs
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-gray-900">
                    Spreads, Commission and Swap
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-gray-600">
                    <div className="h-1 w-14 bg-amber-600/80 rounded" />
                    <p>
                      Tighter pricing and clear rollover mechanics help you understand total cost of trading.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                  Overview
                </div>
                <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
                  Spreads, Commission and Swap
                </h2>

                <div className="mt-6 space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <p>
                    The Spread is the difference between Bid Price and Ask Price quoted for an instrument. For example,
                    when the Ask Price (or Buy Price) is 1.14345, the Bid Price (or Sell Price) is 1.14347, the spread
                    will be 0.00002 (1.14347 – 1.14345). The spread is one of the key costs involved in investment
                    products. Tighter spread will always give investors better value.
                  </p>
                  <p>
                    Commission is another potential cost that clients should consider. A fixed amount of commission will
                    be charged to your account upon execution of any order for some instruments on our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Our Spreads and Commission (tabs + table) */}
            <div className="mt-12 sm:mt-16">
              <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                Trading conditions
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">
                Our Spreads and Commission
              </h3>

              {/* Tabs */}
              <div className="mt-6">
                <div className="flex gap-6 overflow-x-auto border-b border-gray-200 pb-2"> 
                  {tabs.map((t) => {
                    const isActive = t.key === active;
                    return (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => setActive(t.key)}
                        className={classNames(
                          "whitespace-nowrap pb-2 text-sm sm:text-base font-semibold transition-colors",
                          isActive ? "text-amber-700 border-b-2 border-[#FFD400]" : "text-gray-500 hover:text-amber-700"
                        )}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Table */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-[820px] w-full text-left">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="px-5 py-4 text-sm font-semibold" style={{ borderTopLeftRadius: 16 }}>
                          Product
                        </th>
                        <th className="px-5 py-4 text-sm font-semibold text-center" colSpan={2}>
                          Advantage Account
                        </th>
                        <th className="px-5 py-4 text-sm font-semibold text-center" colSpan={2} style={{ borderTopRightRadius: 16 }}>
                          Alpha Account
                        </th>
                      </tr>
                      <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                        <th className="px-5 py-3 text-xs font-semibold tracking-widest">SYMBOL</th>
                        <th className="px-5 py-3 text-xs font-semibold tracking-widest text-center">MIN SPREAD</th>
                        <th className="px-5 py-3 text-xs font-semibold tracking-widest text-center">COMMISSION</th>
                        <th className="px-5 py-3 text-xs font-semibold tracking-widest text-center">MIN SPREAD</th>
                        <th className="px-5 py-3 text-xs font-semibold tracking-widest text-center">COMMISSION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeTab.rows.map((r, idx) => (
                        <tr key={`${activeTab.key}-${r.symbol}`} className={classNames("border-b border-gray-100", idx % 2 ? "bg-white" : "bg-gray-50/40")}>
                          <td className="px-5 py-3 text-sm font-medium text-gray-900">{r.symbol}</td>
                          <td className="px-5 py-3 text-sm text-gray-700 text-center">{r.advantageMinSpread}</td>
                          <td className="px-5 py-3 text-sm text-gray-700 text-center">{r.advantageCommission}</td>
                          <td className="px-5 py-3 text-sm text-gray-700 text-center">{r.alphaMinSpread}</td>
                          <td className="px-5 py-3 text-sm text-gray-700 text-center">{r.alphaCommission}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section: Swap (same content) */}
            <div className="mt-12 sm:mt-16">
              <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                Holding costs
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900">Swap</h3>

              <h4 className="mt-6 text-lg font-semibold text-gray-900">Swap Rate</h4>
              <div className="mt-2 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  The Swap is the interest paid or earned for holding a position overnight. Each investment product has
                  an interest rate associated with it, and every trade involves two different interest rates. The Swap
                  can add a significant extra cost or profit to your trade. The trading platform automatically
                  calculates Swaps for you.
                </p>
                <p>
                  22:00 GMT(+1) is considered to be the beginning and the end of a trading day. Any positions which are
                  still open at 22:00 GMT(+1) are subject to rollover. Rollover is the process of the settlement of an
                  open position overnight.
                </p>
                <p>
                  There is no settlement on Saturdays and Sundays when the markets are closed, but banks still
                  calculate interest on any position held over the weekend. For this reason, a 3-day swap applies on
                  Wednesdays or Fridays.
                </p>
              </div>

              <h4 className="mt-10 text-lg font-semibold text-gray-900">BCR Swap Rate</h4>
              <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                BCR offers a transparent Swap Rate based on current interest rate. To view BCR Swap Rates, please log in
                to your MT4 account.
              </p>

              <h4 className="mt-10 text-lg font-semibold text-gray-900">Swap Rate Calculation</h4>
              <div className="mt-2 space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>The formula used to calculate the swap charge depends on the CFD instrument you are trading.</p>

                <p>
                  <span className="font-semibold">Forex, Metals, Commodities, Indices:</span> Pip Value * Swap Rate *
                  Trade lots * Number of days held overnight.
                </p>
                <p>
                  For Example: If you BUY 1.00 lot of EURUSD and hold it overnight for one day with a long rollover of
                  6.11 Points, then the swap charge would be 1.46 AUD (AUDUSD@0.68420) * 6.11 Points * 1.00 * 1 = 8.93
                  AUD.
                </p>
                <p>
                  For Example: If you SELL 1.00 lot of USDJPY and hold it overnight for one day with a short rollover of
                  -16.88 Points, then the swap charge would be 1.05 AUD (AUDJPY@95.108) * -16.88 Points * 1.00 * 1 =
                  -17.75 AUD.
                </p>

                <p>
                  <span className="font-semibold">Shares:</span> Open price * Contract size * Annual Swap Rate / 360 *
                  Trade lots * Number of days held overnight ( * or / ) Fx Rate.
                </p>
                <p>
                  For Example: If you BUY 1.00 lot of AAPL at $188.00 and hold it overnight for one day with annual swap
                  rate of -15%, the charge would be $188 * 100 * -15% / 360 * 1.00 * 1 / 0.68420 = 11.44 AUD.
                </p>
                <p>
                  For Example: If you SELL 1.00 lot of DIS at $88.00 and hold it overnight for one day with annual swap
                  rate of -15%, the charge would be $88 * 100 * -15% / 360 * 1.00 * 1 / 0.68420 = 5.36 AUD.
                </p>

                <p>
                  <span className="font-semibold">How are the Swap Rates determined?</span>
                </p>
                <p>
                  The swap rate depends on a range of factors, including the market interest rates of the two
                  currencies, broker fees, short-term/forward market conditions, etc.
                </p>
              </div>
            </div>

            {/* Optional: premium CTA strip (fits the “Premium” vibe) */}
            <div className="mt-12 sm:mt-16 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-gray-900">Ready to get started?</div>
                <p className="mt-1 text-sm text-gray-600">Open an account and access transparent trading conditions.</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#f5c800]"
                >
                  Open an Account
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Try Demo Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
