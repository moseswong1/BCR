"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles, CreditCard, Building2, Wallet, ArrowRight } from "lucide-react";

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
        "group relative overflow-hidden rounded-2xl bg-white transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        isYellow
          ? "border-2 border-yellow-400 shadow-lg shadow-yellow-500/10"
          : "border border-slate-200 hover:border-yellow-300 hover:shadow-yellow-500/10",
      ].join(" ")}
    >
      {/* Top accent bar */}
      <div className={[
        "h-1.5 w-full transition-all duration-300",
        isYellow 
          ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" 
          : "bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-400"
      ].join(" ")} />

      {popular && (
        <div className="absolute right-0 top-0">
          <div className="origin-top-right rotate-45 translate-x-8 translate-y-5 bg-gradient-to-r from-yellow-400 to-yellow-500 px-10 py-1.5 text-[10px] font-bold tracking-widest text-slate-900 shadow-lg">
            POPULAR
          </div>
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Account name header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
            <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Account Type</span>
          </div>
          <div className="mt-3 text-3xl font-bold text-slate-900">{name}</div>
          {isYellow && (
            <div className="mt-2 inline-flex items-center gap-1.5 text-yellow-600">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide">Best for Active Traders</span>
            </div>
          )}
        </div>

        {/* Feature list */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 group-hover:bg-yellow-50/50 transition-colors">
            <div className="text-sm font-medium text-slate-600">Trading Platform</div>
            <div className="text-sm font-bold text-slate-900">{tradingPlatform}</div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 group-hover:bg-yellow-50/50 transition-colors">
            <div>
              <div className="text-sm font-medium text-slate-600">Commission</div>
              <div className="text-xs text-slate-400">(per lot per side)</div>
            </div>
            <div className={[
              "text-sm font-bold",
              commission === "X" ? "text-green-600" : "text-slate-900"
            ].join(" ")}>
              {commission === "X" ? "None" : commission}
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 group-hover:bg-yellow-50/50 transition-colors">
            <div>
              <div className="text-sm font-medium text-slate-600">Spreads from</div>
              <div className="text-xs text-slate-400">(pips)</div>
            </div>
            <div className={[
              "text-lg font-bold",
              isYellow ? "text-yellow-600" : "text-slate-900"
            ].join(" ")}>
              {spreadsFrom}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 space-y-3">
          <Button
            className={[
              "w-full h-12 font-semibold text-sm tracking-wide rounded-xl transition-all duration-300",
              isYellow
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-[1.02]"
                : "bg-slate-800 hover:bg-slate-900 text-white hover:scale-[1.02]",
            ].join(" ")}
            asChild
          >
            <Link href={primaryHref} className="inline-flex items-center justify-center">
              START TRADING NOW
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="w-full h-11 font-semibold text-sm tracking-wide rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
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
  if (value === "check") return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
      <Check className="h-4 w-4 text-green-600" />
    </span>
  );
  if (value === "x") return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100">
      <X className="h-4 w-4 text-slate-400" />
    </span>
  );
  return <span className="font-semibold text-slate-900">{value}</span>;
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
    <div className="mt-10 space-y-10">
      {/* Flexible Account Deposit */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="relative p-8 sm:p-12">
          {/* Section header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Funding Options</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Flexible Account Deposit
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-relaxed">
              We understand that different clients have unique requirements when it comes to deposit options. At BCR, we
              offer multiple flexible deposit methods, allowing you to quickly deposit funds into your account
              across supported currencies.
            </p>
          </div>

          {/* Payment methods grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEPOSIT_METHODS.map((m) => (
              <div
                key={m.key}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1"
              >
                {/* Hover gradient bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Logo */}
                <div className="flex items-center justify-center h-20">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Time</span>
                    <span className="text-sm font-bold text-slate-900">{m.processTime}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Fees</span>
                    <span className="text-sm font-bold text-green-600">{m.fees}</span>
                  </div>

                  <Button 
                    className="w-full h-11 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold rounded-xl shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/30 transition-all" 
                    asChild
                  >
                    <Link href="/register">DEPOSIT NOW</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button 
              className="h-12 px-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all hover:scale-105" 
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                OPEN A LIVE ACCOUNT
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Account Withdrawals */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-8 sm:p-12">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-yellow-500" />
            <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Withdrawals</span>
            <div className="w-8 h-[2px] bg-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Account Withdrawals
          </h2>
        </div>

        {/* Content card */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-3 items-start">
              {/* Payment logos grid */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-3 gap-4">
                  {DEPOSIT_METHODS.slice(0, 9).map((m) => (
                    <div 
                      key={`w-${m.key}`} 
                      className="flex items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-yellow-200 hover:bg-yellow-50/50 transition-all"
                    >
                      <img src={m.img} alt={m.name} className="h-8 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Information */}
              <div className="lg:col-span-2">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Clients can withdraw funds online by simply logging into the MyBCR client portal.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Process Time */}
                  <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold tracking-wide text-slate-900 uppercase">Process Time</h4>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          The withdrawal requests cut-off time is GMT: 00:00 – 06:00. Any withdrawal requests submitted before this time
                          will be processed on the same day, while requests submitted after this time will be processed on the following
                          business day.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fees */}
                  <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold tracking-wide text-slate-900 uppercase">Fees</h4>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          When making deposits or withdrawals with BCR, you won't be charged any extra fees. However, payments to and from
                          certain international banking institutions may incur fees, including intermediary fees. BCR is not responsible
                          for any bank fees you may incur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimers */}
                <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-xs text-amber-800 space-y-3">
                    <p>
                      <strong>***</strong> In compliance with AML/CTF regulations, BCR is not authorized to deposit funds to third-party
                      accounts. All money withdrawn from your account must go to a bank account in the same name as your
                      BCR account.
                    </p>
                    <p>
                      <strong>***</strong> Withdrawal requests are processed in accordance with the funding source used to make the original
                      deposit. For example, if a deposit was made via Debit/Credit Card and a subsequent withdrawal request
                      is submitted, the amount of funds is sent back to the relevant Debit/Credit Card. Any profits beyond
                      the deposited amount will be transferred to the nominated bank account held under the same name as
                      your BCR account.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="h-12 px-8 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-[1.02]" 
                    asChild
                  >
                    <Link href="/login">LOGIN MYBCR</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 px-8 border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-semibold rounded-xl transition-all" 
                    asChild
                  >
                    <Link href="/register">OPEN AN ACCOUNT</Link>
                  </Button>
                </div>
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
          "relative px-8 py-4 text-xs font-bold tracking-widest transition-all duration-300",
          active
            ? "text-yellow-600"
            : "text-slate-500 hover:text-slate-900",
        ].join(" ")}
      >
        {label}
        {/* Active indicator */}
        <span className={[
          "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300",
          active 
            ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" 
            : "bg-transparent"
        ].join(" ")} />
      </button>
    );
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
          {/* Tab navigation */}
          <div className="flex justify-center border-b border-slate-200">
            {tabButton("overview", "ACCOUNT OVERVIEW")}
            {tabButton("deposit", "DEPOSIT & WITHDRAWAL")}
          </div>

          {tab === "overview" ? (
            <div className="mt-12">
              {/* Account cards */}
              <div className="grid gap-8 lg:grid-cols-2">
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

              {/* Comparison table section */}
              <div className="mt-20">
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-yellow-500" />
                    <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Compare</span>
                    <div className="w-8 h-[2px] bg-yellow-500" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Account Feature Comparison
                  </h2>
                </div>

                {/* Table */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px]">
                      <thead>
                        <tr className="bg-gradient-to-r from-slate-800 to-slate-900">
                          <th className="px-8 py-5 text-left text-xs font-bold tracking-widest text-slate-400">
                            FEATURE
                          </th>
                          <th className="px-8 py-5 text-center text-xs font-bold tracking-widest text-white">
                            ADVANTAGE
                          </th>
                          <th className="px-8 py-5 text-center text-xs font-bold tracking-widest text-yellow-400">
                            ALPHA
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-100">
                        {[
                          { label: "Minimum Deposit", adv: "300 AUD", alp: "300 AUD" },
                          { label: "Spreads", adv: "1.2+", alp: "0.0+" },
                          { label: "Commission (per lot per side)", adv: "X", alp: "3 AUD/3 USD" },
                          { label: "Leverage", adv: "30:1", alp: "30:1" },
                          { label: "STOP-OUT Level", adv: "50%", alp: "50%" },
                          { label: "Lot (per transaction)", adv: "10", alp: "20" },
                          { label: "Micro Lot Trading (0.01)", adv: "check" as const, alp: "check" as const },
                          { label: "Single Stock CFDs", adv: "check" as const, alp: "x" as const },
                        ].map((row, idx) => (
                          <tr 
                            key={row.label}
                            className={[
                              "transition-colors hover:bg-yellow-50/50",
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                            ].join(" ")}
                          >
                            <td className="px-8 py-5 text-sm font-medium text-slate-700">{row.label}</td>
                            <td className="px-8 py-5 text-center">
                              <CompareCell value={row.adv} />
                            </td>
                            <td className="px-8 py-5 text-center">
                              <CompareCell value={row.alp} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table footer CTA */}
                  <div className="border-t border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 px-8 py-10 text-center">
                    <Button 
                      className="h-12 px-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105" 
                      asChild
                    >
                      <Link href="/register" className="inline-flex items-center">
                        START TRADING
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <div className="mt-4">
                      <Link
                        href="/demo"
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-600 hover:text-yellow-600 transition-colors"
                      >
                        TRY A FREE DEMO
                        <ArrowRight className="w-3 h-3" />
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
