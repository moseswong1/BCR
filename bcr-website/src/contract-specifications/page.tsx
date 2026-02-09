"use client";

import Link from "next/link";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
      <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function MarginLeveragePage() {
  return (
    <div className="bg-white">
      {/* Gold hero band */}
      <section className="border-b border-gray-200 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
            Trading / Trading Conditions
          </div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Margin &amp; Leverage
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-white/80">
            Understand margin requirements, leverage, hedging, and liquidation rules.
          </p>
          <div className="mt-6 h-[2px] w-24 bg-white/70" />
        </div>
      </section>

      {/* Sub-nav */}
      <section className="border-b border-t border-[#EFEFF0] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <Link
              href="/spreads-commission-swap"
              className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
            >
              Spreads, Commission &amp; Swap
            </Link>
            <Link href="/margin-leverage" className="whitespace-nowrap text-[#FFB800]">
              Margin &amp; Leverage
            </Link>
            <Link
              href="/trading-hours"
              className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
            >
              Trading Hours
            </Link>
          </div>
        </div>
      </section>

      {/* Content panel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          {/* subtle dotted texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative px-4 sm:px-8 lg:px-10 py-10 sm:py-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Margin and Leverage
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                We use multiple liquidity providers from Tier 1 banks and institutions to give you competitive
                quotes across a wide range of instruments.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Section title="About Margin">
                <p>
                  Trading on margin allows you to open a position by only depositing a percentage of the full value
                  of the position. Margin is used to cover any credit risks that arise during your trading.
                </p>
                <p>
                  Margin requirements (and the associated margin percentage) vary by product. Requirements are set out
                  on the trading platform and may change regularly.
                </p>
              </Section>

              <Section title="Margin Percentage">
                <p>
                  At BCR, the margin requirement (per lot) is represented either as a floating amount or a percentage.
                </p>
                <p>
                  <span className="font-semibold">Example (FX):</span> Using 10:1 leverage, if EURUSD is 1.18992 and a
                  client opens 1 lot of EURUSD (1 lot = 100,000 units of base currency), then margin is:
                  <span className="font-semibold"> 100,000 / 10 = 10,000</span>.
                </p>
                <p>
                  <span className="font-semibold">Example (Shares):</span> If #AAPL is $174.54 and a client trades
                  0.5 lot (1 lot = 100 contracts = 100 shares) with a 10% margin, then margin is:
                  <span className="font-semibold"> 0.5 × 100 × 174.54 × 10% = $872.70</span>.
                </p>
                <p>
                  Margin can be dynamic when it is represented as a percentage.
                </p>
              </Section>

              <Section title="Leverage">
                <p>Leverage is another expression of margin percentage.</p>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="text-sm font-semibold text-gray-900">Formula</div>
                  <div className="mt-1 font-mono text-sm text-gray-800">
                    Leverage = 1 / Margin Percentage
                  </div>
                </div>
                <p>
                  For example, if margin requirement for #AAPL is 10%, the leverage is 10:1.
                </p>
                <p>
                  Please review our{" "}
                  <Link href="/contract-specifications" className="font-semibold text-amber-700 hover:text-amber-800">
                    Contract Specifications
                  </Link>{" "}
                  for the latest leverage settings.
                </p>
              </Section>

              <Section title="Hedging">
                <p>
                  Hedging is taking both long and short positions of the same size in the same product simultaneously
                  to reduce risk in an adverse market. This involves opening a position in the opposite direction of
                  the initial opened position.
                </p>
              </Section>
            </div>

            <div className="mt-6">
              <Section title="Liquidation / Stop-out Level">
                <p>
                  The trading platform will automatically begin to liquidate open orders when the client’s Total Equity
                  balance falls below <span className="font-semibold">50%</span> of the Initial Margin Requirement.
                </p>
                <p>
                  The platform will liquidate individual positions until remaining Total Equity is sufficient to support
                  existing open positions. The largest losing positions may be closed first during liquidation.
                </p>
                <p>
                  Similarly, margin in your trading account must be more than 50% for open positions in order to open new
                  trades, unless new trades result in current positions being partially or fully hedged.
                </p>
                <p>
                  BCR provides different margin and leverage for different instruments. To view margin requirements,
                  refer to Contract Specifications.
                </p>
              </Section>
            </div>

            {/* CTA strip */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-gray-900">Need instrument-by-instrument requirements?</div>
                <p className="mt-1 text-sm text-gray-600">
                  View contract sizes, trading hours, breaks, margin requirements and commissions.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contract-specifications"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#f5c800]"
                >
                  Contract Specifications
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Open an Account
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
