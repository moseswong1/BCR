import Link from "next/link";
import AccountOverviewTabs from "@/components/AccountOverviewTabs";

export const metadata = { title: "Account Overview" };

export default function Page() {
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
              Account Types
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Trading Accounts Designed for Every Strategy
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              BCR has consolidated world-class trading conditions into powerful account types tailored to different trading styles and experience levels.
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
              Risk warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Ensure you understand how CFDs work.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trading / Account Types
        </div>

        <div className="mt-8">
          <AccountOverviewTabs />
        </div>
      </section>
    </main>
  );
}
