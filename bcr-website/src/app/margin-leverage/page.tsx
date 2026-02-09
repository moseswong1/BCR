"use client";

import Link from "next/link";
import {
  Info,
  Percent,
  Scale,
  Shield,
  AlertTriangle,
} from "lucide-react";

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-2 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
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
            Understand margin requirements, leverage, hedging, and stop-out mechanics.
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
            {/* Intro */}
            <div className="max-w-3xl">
              <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                Overview
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
                Margin and Leverage
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                We use multiple liquidity providers from Tier 1 Banks and institutions to give you
                competitive quotes on a wide range of instruments.
              </p>
            </div>

            {/* Sections */}
            <div className="mt-10 sm:mt-12 space-y-10">
              <Section
                icon={<Info className="h-5 w-5 text-amber-700" />}
                title="About Margin"
              >
                <p>
                  Trading on margin allows you to open a position by only depositing a percentage of
                  the full value of the position. Margin is used to cover any credit risks that arise
                  during your trading.
                </p>
                <p>
                  Margin Requirements (and the associated Margin Percentage) vary with each product.
                  A list of the requirements is set out on the Trading Platform. These may change
                  regularly.
                </p>
              </Section>

              <Section
                icon={<Percent className="h-5 w-5 text-amber-700" />}
                title="Margin Percentage"
              >
                <p>
                  At BCR, the margin requirement (per lot) is either represented as a floating amount
                  or a percentage.
                </p>
                <p>
                  For example, using 10:1 leverage, if the price of EURUSD is 1.18992, and a client
                  opens 1 lot of EURUSD (1 lot = 100,000 units of the base currency), then the margin
                  requirement is $11,899.20 (1.18992 * 100,000 / 10).
                </p>
                <p>
                  The margin requirement for US stocks is a fixed percentage (10%). If the price of
                  Apple Inc. stock (#AAPL) is $174.54 per share, and a client trades 0.5 lot
                  (1 lot = 100 contracts = 100 shares), then the margin requirement is $872.70
                  (0.5 * 100 * 174.54 * 10%).
                </p>
                <p>
                  As shown above, the margin requirement to open a position can be dynamic if it is
                  represented as a percentage.
                </p>
              </Section>

              <Section
                icon={<Scale className="h-5 w-5 text-amber-700" />}
                title="Leverage"
              >
                <p>Leverage is another expression of margin percentage.</p>
                <p className="font-semibold text-gray-900">
                  Leverage = 1 / Margin Percentage.
                </p>
                <p>
                  For example, the margin requirement for #AAPL is 10%. This means that leverage for
                  #AAPL is 10:1.
                </p>
                <p>
                  Please review our{" "}
                  <Link href="/contract-specifications" className="text-amber-700 font-semibold hover:underline">
                    Contract Specifications
                  </Link>{" "}
                  for our latest leverage settings.
                </p>
              </Section>

              <Section
                icon={<Shield className="h-5 w-5 text-amber-700" />}
                title="Hedging"
              >
                <p>
                  Hedging is taking on both Long and Short positions of the same size in the same
                  product simultaneously in order to reduce the risk in an adverse market. This
                  involves opening a position in the opposite direction of the same size as the
                  initial opened position.
                </p>
              </Section>

              <Section
                icon={<AlertTriangle className="h-5 w-5 text-amber-700" />}
                title="Liquidation / Stop-out Level"
              >
                <p>
                  The trading platform will automatically begin to liquidate open orders when the
                  client&apos;s Total Equity balance falls below 50% of the Initial Margin Requirement.
                  The trading platform will liquidate individual positions until the remaining Client
                  Total Equity is sufficient to support existing open position(s). In deciding what
                  positions will be individually liquidated, the largest losing position will be closed
                  first during liquidation.
                </p>
                <p>
                  Similarly, the margin in your trading account needs to be more than 50% of open
                  positions in order to be able to open new trades, unless the new trades will result
                  in current positions being partially or fully hedged.
                </p>
                <p>
                  BCR provides different margin and leverage for different instruments. To view BCR
                  margin requirements, click on the instruments below. It is strongly advised that
                  clients always maintain the appropriate amount of margin in their accounts.
                </p>

                {/* Optional action row */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#f5c800]"
                  >
                    View Trading Costs (Pricing)
                  </Link>
                  <Link
                    href="/contract-specifications"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contract Specifications
                  </Link>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
