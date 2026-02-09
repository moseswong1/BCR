"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

type AccountCardProps = {
  name: string;
  popular?: boolean;
  tradingPlatform: string;
  commission: string;
  spreadsFrom: string;
  primaryHref: string;
  secondaryHref: string;
  accent?: "slate" | "yellow";
};

function AccountCard({
  name,
  popular,
  tradingPlatform,
  commission,
  spreadsFrom,
  primaryHref,
  secondaryHref,
  accent = "slate",
}: AccountCardProps) {
  const isYellow = accent === "yellow";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-md",
        isYellow
          ? "border border-yellow-200 ring-1 ring-yellow-300"
          : "border border-gray-200 ring-1 ring-gray-200",
      ].join(" ")}
    >
      <div className={["h-1 w-full", isYellow ? "bg-yellow-500" : "bg-gray-700"].join(" ")} />

      {popular && (
        <div className="absolute right-0 top-0">
          <div className="origin-top-right rotate-45 translate-x-10 translate-y-6 bg-yellow-500 px-10 py-1 text-[10px] font-semibold tracking-widest text-black">
            POPULAR
          </div>
        </div>
      )}

      <div className="p-6 sm:p-7">
        <div className="text-center">
          <div className="text-xs font-medium tracking-widest text-gray-500">Account</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">{name}</div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="text-sm text-gray-600">Trading Platform</div>
            <div className="text-sm font-semibold text-gray-900">{tradingPlatform}</div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <div className="text-sm text-gray-600">Commission</div>
              <div className="text-xs text-gray-400">(per lot per side)</div>
            </div>
            <div className="text-sm font-semibold text-gray-900">{commission}</div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Spreads from</div>
              <div className="text-xs text-gray-400">(pips)</div>
            </div>
            <div className="text-sm font-semibold text-gray-900">{spreadsFrom}</div>
          </div>
        </div>

        <div className="mt-7 space-y-3">
          <Button
            className={[
              "w-full font-semibold",
              isYellow
                ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                : "bg-gray-700 hover:bg-gray-800 text-white",
            ].join(" ")}
            asChild
          >
            <Link href={primaryHref}>START TRADING NOW</Link>
          </Button>

          <Button
            variant="outline"
            className="w-full font-semibold border-gray-300 text-gray-900 hover:bg-gray-50"
            asChild
          >
            <Link href={secondaryHref}>TRY A DEMO ACCOUNT</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function CompareCell({ value }: { value: string | "check" | "x" }) {
  if (value === "check") return <Check className="h-4 w-4 inline-block" />;
  if (value === "x") return <X className="h-4 w-4 inline-block" />;
  return <span className="font-medium">{value}</span>;
}

type PaymentMethod = {
  key: string;
  name: string;
  img: string;
  processTime: string;
  fees: string;
};

const DEPOSIT_METHODS: PaymentMethod[] = [
  {
    key: "bank-transfer",
    name: "Bank Transfer",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/bank-transfer.png",
    processTime: "1–2 days",
    fees: "$0",
  },
  {
    key: "mastercard",
    name: "Mastercard",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/mastercard.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "direct-debit",
    name: "Direct Debit",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/direct-debit.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "visa",
    name: "Visa",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/visa.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "unionpay",
    name: "UnionPay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/unionpay.png",
    processTime: "30 min",
    fees: "$0",
  },
  {
    key: "fastpay",
    name: "FastPay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/fastpay.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "help2pay",
    name: "Help2Pay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/help2pay.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "bpay",
    name: "BPay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/b-pay.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "skrill",
    name: "Skrill",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/skrill.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "netteller",
    name: "Netteller",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/netteller.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "poli",
    name: "POLi",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/poli.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    key: "usdt",
    name: "USDT",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/usdt.png",
    processTime: "Instant",
    fees: "$0",
  },
];

function DepositWithdrawalTab() {
  return (
    <div className="mt-10">
      {/* Flexible Account Deposit */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
          Flexible Account Deposit
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
          We understand that different clients have unique requirements when it comes to deposit options. At BCR, we
          offer multiple flexible deposit methods, allowing you to quickly and securely deposit funds into your account
          across supported currencies. Discover the available funding options on MyBCR when you open a live account.
        </p>

        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DEPOSIT_METHODS.map((m) => (
            <div
              key={m.key}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-center">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[0.95]"
                />
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">Process Time</div>
                  <div className="text-sm font-semibold text-gray-900">{m.processTime}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">Fees</div>
                  <div className="text-sm font-semibold text-gray-900">{m.fees}</div>
                </div>

                <div className="pt-2">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                    <Link href="/register">DEPOSIT NOW</Link>
                  </Button>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-60" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold" asChild>
            <Link href="/register">OPEN A LIVE ACCOUNT</Link>
          </Button>
        </div>
      </div>

      {/* Account Withdrawals */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
          Account Withdrawals
        </h2>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {/* Logos grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-4">
              {DEPOSIT_METHODS.slice(0, 9).map((m) => (
                <div key={`w-${m.key}`} className="flex items-center justify-center rounded-xl border border-gray-100 p-3">
                  <img src={m.img} alt={m.name} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>

            {/* Copy */}
            <div className="lg:col-span-2">
              <p className="text-gray-900 text-base sm:text-lg">
                Clients can withdraw funds online by simply logging into the MyBCR client portal.
              </p>

              <div className="mt-6 space-y-6">
  {/* PROCESS TIME */}
  <div className="border-b border-gray-200 pb-6">
    <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-2 items-start">
      <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase pt-1">
        Process Time
      </div>
      <div className="text-gray-700 leading-relaxed">
        The withdrawal requests cut-off time is GMT: 00:00 – 06:00. Any withdrawal requests submitted before this time
        will be processed on the same day, while requests submitted after this time will be processed on the following
        business day.
      </div>
    </div>
  </div>

  {/* FEES */}
  <div className="border-b border-gray-200 pb-6">
    <div className="grid grid-cols-[140px_1fr] gap-x-8 gap-y-2 items-start">
      <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase pt-1">
        Fees
      </div>
      <div className="text-gray-700 leading-relaxed">
        When making deposits or withdrawals with BCR, you won’t be charged any extra fees. However, payments to and from
        certain international banking institutions may incur fees, including intermediary fees. BCR is not responsible
        for any bank fees you may incur.
      </div>
    </div>
  </div>

                <div className="text-xs text-gray-500 leading-relaxed space-y-3">
                  <p>
                    ***In compliance with AML/CTF regulations, BCR is not authorized to deposit funds to third-party
                    accounts. All money withdrawn from your account must go to a bank account in the same name as your
                    BCR account.
                  </p>
                  <p>
                    ***Withdrawal requests are processed in accordance with the funding source used to make the original
                    deposit. For example, if a deposit was made via Debit/Credit Card and a subsequent withdrawal request
                    is submitted, the amount of funds is sent back to the relevant Debit/Credit Card. Any profits beyond
                    the deposited amount will be transferred to the nominated bank account held under the same name as
                    your BCR account.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                  <Link href="/login">LOGIN MYBCR</Link>
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold" asChild>
                  <Link href="/register">OPEN AN ACCOUNT</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountOverviewTabs() {
  const [tab, setTab] = useState<"overview" | "deposit">("overview");

  const tabButton = (key: "overview" | "deposit", label: string) => {
    const active = tab === key;
    return (
      <button
        type="button"
        onClick={() => setTab(key)}
        className={[
          "px-6 py-3 text-xs font-semibold tracking-widest border-b-2 transition-colors",
          active
            ? "border-yellow-500 text-yellow-700"
            : "border-transparent text-gray-500 hover:text-gray-900",
        ].join(" ")}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex justify-center border-b border-gray-200">
            {tabButton("overview", "ACCOUNT OVERVIEW")}
            {tabButton("deposit", "DEPOSIT & WITHDRAWAL")}
          </div>

          {tab === "overview" ? (
            <div className="mt-10">
              <div className="grid gap-6 lg:grid-cols-2">
                <AccountCard
                  name="Advantage"
                  tradingPlatform="MetaTrader"
                  commission="X"
                  spreadsFrom="1.2+"
                  primaryHref="/register"
                  secondaryHref="/demo"
                  accent="slate"
                />
                <AccountCard
                  name="Alpha"
                  popular
                  tradingPlatform="MetaTrader"
                  commission="3 AUD/3 USD"
                  spreadsFrom="0.0+"
                  primaryHref="/register"
                  secondaryHref="/demo"
                  accent="yellow"
                />
              </div>

              <div className="mt-16">
                <h2 className="text-center text-3xl font-semibold text-gray-900">
                  Account Feature Comparison
                </h2>

                <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px]">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-6 py-4 text-left text-xs font-semibold tracking-widest text-gray-600">
                            &nbsp;
                          </th>
                          <th className="px-6 py-4 text-center text-xs font-semibold tracking-widest text-gray-600">
                            ADVANTAGE
                          </th>
                          <th className="px-6 py-4 text-center text-xs font-semibold tracking-widest text-gray-600">
                            ALPHA
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200">
                        {[
                          { label: "Minimum Deposit", adv: "300 AUD", alp: "300 AUD" },
                          { label: "Spreads", adv: "1.2+", alp: "0.0+" },
                          { label: "Commission (per lot per side)", adv: "X", alp: "3 AUD/3 USD" },
                          { label: "Leverage", adv: "30:1", alp: "30:1" },
                          { label: "STOP-OUT Level", adv: "50%", alp: "50%" },
                          { label: "Lot (per transaction)", adv: "10", alp: "20" },
                          { label: "Micro Lot Trading (0.01)", adv: "check" as const, alp: "check" as const },
                          { label: "Single Stock CFDs", adv: "check" as const, alp: "x" as const },
                        ].map((row) => (
                          <tr key={row.label}>
                            <td className="px-6 py-4 text-sm text-gray-700">{row.label}</td>
                            <td className="px-6 py-4 text-center text-sm text-gray-900">
                              <CompareCell value={row.adv} />
                            </td>
                            <td className="px-6 py-4 text-center text-sm text-gray-900">
                              <CompareCell value={row.alp} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="border-t border-gray-200 bg-white px-6 py-8 text-center">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                      <Link href="/register">START TRADING</Link>
                    </Button>
                    <div className="mt-3">
                      <Link
                        href="/demo"
                        className="text-xs font-semibold tracking-widest text-gray-700 hover:text-gray-900"
                      >
                        TRY A FREE DEMO
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <DepositWithdrawalTab />
          )}
        </div>
      </div>
    </div>
  );
}
