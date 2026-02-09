import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Deposit & Withdrawal" };

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
];

const withdrawalLogos: { name: string; img: string }[] = [
  { name: "Bank Transfer", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/bank-transfer.png" },
  { name: "Mastercard", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/mastercard.png" },
  { name: "Direct Debit", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/direct-debit.png" },
  { name: "Visa", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/visa.png" },
  { name: "UnionPay", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/unionpay.png" },
  { name: "FastPay", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/fastpay.png" },
  { name: "Help2Pay", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/help2pay.png" },
  { name: "B-Pay", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/b-pay.png" },
  { name: "Skrill", img: "https://au.thebcr.com/statics/images/deposit-withdrawal/skrill.png" },
];

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-center">
          <img
            src={method.img}
            alt={method.name}
            className="h-[88px] w-auto object-contain transition-transform duration-300 group-hover:scale-[0.92]"
            loading="lazy"
          />
        </div>

        <div className="mt-4 text-center">
          <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            {method.name}
          </div>
        </div>
      </div>

      {/* Hover details overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-full px-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">Process Time</p>
              <p className="text-sm font-semibold text-gray-900">{method.processTime}</p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">Fees</p>
              <p className="text-sm font-semibold text-gray-900">{method.fees}</p>
            </div>

            <div className="mt-4">
              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                asChild
              >
                <Link href="/register">DEPOSIT NOW</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Title band (same format as Account Overview) */}
      <section className="border-b border-gray-200 bg-gradient-to-r from-[#070B0F] via-[#0B1118] to-[#070B0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Deposit &amp; Withdrawal
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-white/70">
            Easily manage your BCR account with secure online access for funding and withdrawals.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Flexible Account Deposit */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 sm:p-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Flexible Account Deposit
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-gray-600">
              We understand that different clients have their unique requirements when it comes to deposit options. At BCR,
              we offer over 10 flexible deposit methods, allowing you to quickly and securely deposit funds into your account,
              tailored to the needs of various currencies. Discover the available funding options on MyBCR when you open a
              live account today.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {depositMethods.map((m) => (
              <PaymentCard key={m.name} method={m} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8" asChild>
              <Link href="/register">DEPOSIT NOW</Link>
            </Button>
          </div>
        </div>

        {/* Withdrawals */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 shadow-sm p-6 sm:p-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Account Withdrawals</h2>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Logos */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-3 gap-4 place-items-center">
                  {withdrawalLogos.map((l) => (
                    <div key={l.name} className="p-2">
                      <img
                        src={l.img}
                        alt={l.name}
                        className="h-[44px] w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy */}
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-900">
                  Clients can withdraw funds online by simply logging into the MyBCR client portal.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                      <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase whitespace-nowrap">
                        Process Time
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        The withdrawal requests cut off time is GMT: 00:00 – 06:00 GMT. Any withdrawal requests submitted
                        before this time will be processed on the same day, while requests submitted after this time will
                        be processed on the following business day.
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                      <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase whitespace-nowrap">
                        Fees
                      </div>
                      <div className="text-gray-700 leading-relaxed">
                        When making deposits or withdrawals with BCR, you won't be charged any extra fees. Nevertheless,
                        please keep in mind that payments to and from certain international banking institutions may incur
                        fees, including intermediary fees. It's important to note that BCR is not responsible for any bank
                        fees that you may incur.
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 leading-relaxed space-y-3">
                    <p>
                      ***In compliance with AML/CTF regulations, BCR is not authorized to deposit funds to third-party accounts.
                      In the meantime, all money withdrawn from your account must go to a bank account in the same name as your
                      BCR account.
                    </p>
                    <p>
                      ***Withdrawal requests are processed in accordance with the funding source used to make the original deposit.
                      For instance, if a deposit was made via Debit/Credit Card and a subsequent withdrawal request is submitted,
                      the amount of funds sent back to the relevant Debit/Credit Card. Same as other payment channels such as PayPal,
                      Skrill and Neteller. Any profits made beyond the deposited amount will be transferred to the nominated bank
                      account held under the same name as your BCR account.
                    </p>
                  </div>

                  <div className="pt-4 text-center">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-6" asChild>
                      <Link href="/login">LOGIN MYBCR</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
