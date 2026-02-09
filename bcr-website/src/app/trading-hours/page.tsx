"use client";

import React from "react";
import Link from "next/link";
import { Clock, Info, RefreshCw, Phone, Mail, ChevronDown } from "lucide-react";

type Row = {
  symbol: string;
  tradingTime?: string;
  breakTime?: string;
  // If you want “rowspan” style grouping later, just repeat the values or leave blank and render "—"
};

type Group = {
  title: string;
  rows: Row[];
};

const GROUPS: Group[] = [
  {
    title: "Forex CFDs",
    rows: [{ symbol: "ALL", tradingTime: "21:05 - 20:55", breakTime: "20:55 - 21:11" }],
  },
  {
    title: "Metals CFDs",
    rows: [{ symbol: "ALL", tradingTime: "22:01 - 20:45", breakTime: "21:00 - 22:01" }],
  },
  {
    title: "Commodity CFDs",
    rows: [
      { symbol: "#CL", tradingTime: "22:01 - 20:45", breakTime: "21:00 - 22:01" },
      { symbol: "XTIUSD", tradingTime: "22:01 - 20:45", breakTime: "21:00 - 22:01" },
      { symbol: "XNGUSD", tradingTime: "22:01 - 20:45", breakTime: "21:00 - 22:01" },
      { symbol: "XBRUSD", tradingTime: "00:01 - 20:45", breakTime: "21:00 - 00:01" },
    ],
  },
  {
    title: "Index CFDs",
    rows: [
      { symbol: "#US500", tradingTime: "22:01 - 20:00", breakTime: "20:00 - 22:01" },
      { symbol: "#US100", tradingTime: "22:01 - 20:00", breakTime: "20:00 - 22:01" },
      { symbol: "#US30", tradingTime: "22:01 - 20:00", breakTime: "20:00 - 22:01" },
      { symbol: "#JPN225", tradingTime: "22:01 - 20:00", breakTime: "20:00 - 22:01" },

      { symbol: "#AUS200", tradingTime: "23:01 - 19:45", breakTime: "05:30 - 06:31, 19:45 - 23:01" },

      { symbol: "#GER40", tradingTime: "06:01 - 19:45", breakTime: "19:45 - 06:01" },
      { symbol: "#EUSTX50", tradingTime: "06:01 - 19:45", breakTime: "19:45 - 06:01" },
      { symbol: "#FRA40", tradingTime: "06:01 - 19:45", breakTime: "19:45 - 06:01" },

      { symbol: "#ESP35", tradingTime: "07:01 - 17:45", breakTime: "17:45 - 07:01" },
      { symbol: "#UK100", tradingTime: "00:01 - 19:45", breakTime: "19:45 - 00:01" },
      { symbol: "#CHN50", tradingTime: "01:01 - 18:00", breakTime: "08:30 - 09:01" },
      { symbol: "#HKG50", tradingTime: "01:16 - 15:45", breakTime: "04:00 - 05:01, 08:30 - 09:16, 15:45 - 01:16" },
    ],
  },
  {
    title: "Share CFDs",
    rows: [
      { symbol: "#AAPL", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#AXP", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#BAC", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#C", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#DIS", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#IBM", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#INTC", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#KO", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#MCD", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#MSFT", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },
      { symbol: "#BA", tradingTime: "13:31 - 20:00", breakTime: "20:00 - 13:31" },

      { symbol: "#6501.T", tradingTime: "00:01 - 06:00", breakTime: "02:30 - 03:31" },
      { symbol: "#6502.T", tradingTime: "00:01 - 06:00", breakTime: "02:30 - 03:31" },
      { symbol: "#7201.T", tradingTime: "00:01 - 06:00", breakTime: "02:30 - 03:31" },
      { symbol: "#7261.T", tradingTime: "00:01 - 06:00", breakTime: "02:30 - 03:31" },
      { symbol: "#8306.T", tradingTime: "00:01 - 06:00", breakTime: "02:30 - 03:31" },

      { symbol: "#QAN.AX", tradingTime: "23:01 - 05:00", breakTime: "05:00 - 23:01" },
      { symbol: "#CSL.AX", tradingTime: "23:01 - 05:00", breakTime: "05:00 - 23:01" },
      { symbol: "#BHP.AX", tradingTime: "23:01 - 05:00", breakTime: "05:00 - 23:01" },

      { symbol: "#0005.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#0291.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#0700.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#0728.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#0941.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#1088.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#1810.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#1928.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#2628.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#3328.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
      { symbol: "#3988.HK", tradingTime: "01:31 - 08:00", breakTime: "04:00 - 05:01" },
    ],
  },
];

function PillNav() {
  return (
    <section className="border-b border-t border-[#EFEFF0] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          <Link
            href="/spreads-commission-swap"
            className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
          >
            Spreads, Commission &amp; Swap
          </Link>
          <Link
            href="/margin-leverage"
            className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
          >
            Margin &amp; Leverage
          </Link>
          <Link href="/trading-hours" className="whitespace-nowrap text-[#FFB800]">
            Trading Hours
          </Link>
        </div>
      </div>
    </section>
  );
}

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

function TradingHoursAccordion({ groups }: { groups: Group[] }) {
  const [open, setOpen] = React.useState<string | null>(groups?.[0]?.title ?? null);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      {groups.map((g) => {
        const isOpen = open === g.title;
        return (
          <div key={g.title} className="border-t first:border-t-0 border-gray-200">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : g.title)}
              className={[
                "w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left",
                "bg-gray-100/60 hover:bg-gray-900 hover:text-[#FFD400]",
                "transition-colors",
              ].join(" ")}
            >
              <span className="font-semibold text-sm sm:text-base">
                {g.title}
              </span>
              <ChevronDown
                className={[
                  "h-5 w-5 shrink-0 transition-transform",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>

            <div
              className={[
                "transition-[max-height] duration-300 ease-out overflow-hidden",
                isOpen ? "max-h-[2000px]" : "max-h-0",
              ].join(" ")}
            >
              <div className="p-4 sm:p-6">
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="min-w-[640px] w-full text-xs sm:text-sm text-center text-gray-800">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-3 w-[32%] font-semibold">SYMBOL</th>
                        <th className="py-3 px-3 w-[34%] font-semibold">TRADING TIME (GMT)</th>
                        <th className="py-3 px-3 w-[34%] font-semibold">DAILY BREAK TIME (GMT)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {g.rows.map((r, idx) => (
                        <tr key={`${g.title}-${r.symbol}-${idx}`} className="border-t border-gray-200">
                          <td className="py-3 px-3">{r.symbol}</td>
                          <td className="py-3 px-3">{r.tradingTime ?? "—"}</td>
                          <td className="py-3 px-3">{r.breakTime ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-gray-500">
                  Server time and charts are set to GMT + 0.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactCard() {
  return (
    <aside className="w-full sm:w-[360px] lg:w-[380px] shrink-0">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="border-t-4 border-[#FFD400] px-6 py-7">
          <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
          <p className="mt-2 text-sm text-gray-700">
            We&apos;re here 24hrs a day Monday to Friday.
          </p>
        </div>

        <div className="px-6 pb-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Info className="h-5 w-5 text-amber-700" />
            </div>
            <div className="text-sm text-gray-700">Help Center</div>
          </div>

          <a
            href="tel:+61284598050"
            className="block rounded-xl bg-gray-100 px-4 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-200"
          >
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +61 2 8459 8050
            </span>
          </a>

          <a
            href="mailto:info@au.thebcr.com"
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50"
          >
            <div className="h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Mail className="h-5 w-5 text-amber-700" />
            </div>
            <div className="text-sm font-semibold text-gray-900">Email Us</div>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default function TradingHoursPage() {
  return (
    <div className="bg-white">
      {/* Gold hero band */}
      <section className="border-b border-gray-200 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
            Trading / Trading Conditions
          </div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Trading Hours
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-white/80">
            24 hours a day, 5 days a week.
          </p>
          <div className="mt-6 h-[2px] w-24 bg-white/70" />
        </div>
      </section>

      <PillNav />

      {/* Content panel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative px-4 sm:px-8 lg:px-10 py-10 sm:py-12">
            {/* Intro */}
            <div className="max-w-3xl">
              <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                Overview
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
                Trading Hours
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                Instruments are only tradable during their open trading hours. Please note that
                BCR server time and charts are set to GMT + 0.
              </p>
            </div>

            {/* Top content (two sections + contact card) */}
            <div className="mt-10 sm:mt-12 flex flex-col lg:flex-row gap-10">
              <div className="flex-1 space-y-10">
                <Section
                  icon={<Clock className="h-5 w-5 text-amber-700" />}
                  title="About Trading Hours"
                >
                  <p>
                    Instruments are only tradable during their open trading hours. Click on the
                    instrument groups below to see their respective trading hours.
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Server time and charts are set to GMT + 0.
                  </p>
                </Section>

                <Section
                  icon={<RefreshCw className="h-5 w-5 text-amber-700" />}
                  title="Changes on Trading Hours"
                >
                  <p>
                    Trading hours may vary due to shifts in Standard Time and Daylight Saving Time in
                    different time zones.
                  </p>
                  <p>
                    Trading is closed on our platform when world financial markets are closed due to
                    holidays. We aim to inform clients as soon as possible of upcoming changes —
                    please check notifications for up-to-date information.
                  </p>
                </Section>
              </div>

              <ContactCard />
            </div>

            {/* Accordion tables */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Instrument Trading Hours (GMT)
              </h3>
              <TradingHoursAccordion groups={GROUPS} />
            </div>

            {/* Action row */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
          </div>
        </div>
      </section>
    </div>
  );
}
