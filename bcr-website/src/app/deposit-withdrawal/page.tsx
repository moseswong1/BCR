import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CreditCard,
  Wallet,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap
} from "lucide-react";

export const metadata = { title: "Deposit & Withdrawal | BCR" };

type PaymentMethod = {
  name: string;
  img: string;
  processTime: string;
  fees: string;
};

const depositMethods: PaymentMethod[] = [
  {
    name: "Bank Transfer",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/bank-transfer.png",
    processTime: "1-2 days",
    fees: "$0",
  },
  {
    name: "Mastercard",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/mastercard.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "Direct Debit",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/direct-debit.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "Visa",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/visa.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "UnionPay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/unionpay.png",
    processTime: "30 Min",
    fees: "$0",
  },
  {
    name: "FastPay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/fastpay.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "Help2Pay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/help2pay.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "B-Pay",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/b-pay.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "Skrill",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/skrill.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "Neteller",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/netteller.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "POLi",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/poli.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "USDT",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/usdt.png",
    processTime: "Instant",
    fees: "$0",
  },
  {
    name: "PayPal",
    img: "https://au.thebcr.com/statics/images/deposit-withdrawal/paypal.png",
    processTime: "Instant",
    fees: "$0",
  },
];

export default function DepositWithdrawalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-24">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <CreditCard className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">Fast Transactions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Deposit &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> Withdrawal</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
            Multiple payment methods with zero fees. Fund your account quickly and withdraw your profits hassle-free.
          </p>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { icon: Wallet, label: `${depositMethods.length} Payment Methods` },
              { icon: Clock, label: "Instant Processing" },
              { icon: Zap, label: "Fast Withdrawals" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deposit Methods Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-xs font-semibold tracking-widest text-yellow-600 uppercase">Deposits</span>
              <div className="w-8 h-[2px] bg-yellow-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Flexible Account Deposit
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We understand that different clients have unique requirements when it comes to deposit options. At BCR, we offer multiple flexible deposit methods, allowing you to quickly deposit funds into your account across supported currencies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {depositMethods.map((method, idx) => (
              <div key={idx} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-yellow-200 transition-all duration-300 p-6 flex flex-col">
                <div className="mb-5 h-16 flex items-center justify-center">
                  <img
                    src={method.img}
                    alt={method.name}
                    className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Time</span>
                    <span className="text-sm font-bold text-slate-900">{method.processTime}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Fees</span>
                    <span className="text-sm font-bold text-green-600">{method.fees}</span>
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
          <div className="mt-16 text-center">
            <Button
              className="h-14 px-10 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all hover:scale-105"
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                OPEN A LIVE ACCOUNT
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Withdrawals Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="mt-16 rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-3 gap-10 items-start">
                {/* Payment logos */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Supported Methods</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {depositMethods.slice(0, 9).map((method) => (
                      <div
                        key={`w-${method.name}`}
                        className="flex items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-yellow-200 hover:bg-yellow-50/50 transition-all"
                      >
                        <img src={method.img} alt={method.name} className="h-8 w-auto object-contain" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Information */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Withdraw funds easily by logging into the MyBCR client portal. We process all withdrawal requests promptly.
                  </p>

                  {/* Process Time */}
                  <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold tracking-wide text-slate-900 uppercase">Process Time</h4>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          Cut-off time is GMT 00:00 – 06:00. Requests before cut-off are processed same day; after cut-off, next business day.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fees */}
                  <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold tracking-wide text-slate-900 uppercase">Zero Fees</h4>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          BCR does not charge fees for deposits or withdrawals. International bank fees may apply from your institution.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Important notices */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-amber-800 space-y-2">
                        <p>
                          <strong>AML/CTF Compliance:</strong> Withdrawals must be to a bank account in the same name as your BCR account.
                        </p>
                        <p>
                          <strong>Withdrawal Priority:</strong> Funds are returned to the original deposit method first. Profits beyond deposits go to your nominated bank account.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Start Trading?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Open your account today and fund it with your preferred payment method.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="h-14 px-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-semibold text-lg rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all hover:scale-105"
              asChild
            >
              <Link href="/register" className="inline-flex items-center">
                Open Live Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              className="h-14 px-10 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-lg rounded-xl shadow-lg transition-all hover:scale-105"
              asChild
            >
              <Link href="/demo" className="inline-flex items-center">
                Try Demo First
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
