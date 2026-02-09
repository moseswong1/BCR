"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  popular?: boolean;
  accent?: "slate" | "yellow";
  tagline: string;
  minDeposit: string;
  support: string;
  perks: string[];
  primaryHref: string;
  secondaryHref: string;
};

function TierCard({
  name,
  popular,
  accent = "slate",
  tagline,
  minDeposit,
  support,
  perks,
  primaryHref,
  secondaryHref,
}: Tier) {
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
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="p-6 sm:p-7">
        <div className="text-center">
          <div className="text-xs font-medium tracking-widest text-gray-500">Premium Tier</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">{name}</div>
          <p className="mt-2 text-sm text-gray-600">{tagline}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="text-sm text-gray-600">Minimum Deposit</div>
            <div className="text-sm font-semibold text-gray-900">{minDeposit}</div>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="text-sm text-gray-600">Support</div>
            <div className="text-sm font-semibold text-gray-900">{support}</div>
          </div>

          <div className="pt-1">
            <div className="text-sm text-gray-600">Key Benefits</div>
            <ul className="mt-3 space-y-2">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
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
            <Link href={primaryHref}>REQUEST PREMIUM ACCESS</Link>
          </Button>

          <Button
            variant="outline"
            className="w-full font-semibold border-gray-300 text-gray-900 hover:bg-gray-50"
            asChild
          >
            <Link href={secondaryHref}>TALK TO OUR TEAM</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-900">
          {n}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{title}</div>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function PremiumClientsPage() {
  const [tab, setTab] = useState<"tiers" | "benefits" | "onboarding">("tiers");

  const tiers = useMemo<Tier[]>(
    () => [
      {
        name: "Select",
        tagline: "Priority support and premium servicing for active traders.",
        minDeposit: "10,000 AUD",
        support: "Priority Support",
        perks: [
          "Dedicated relationship contact",
          "Priority withdrawal processing (subject to cut-off)",
          "Invites to product updates & platform briefings",
          "Enhanced account review & servicing",
        ],
        primaryHref: "/register",
        secondaryHref: "/contact",
        accent: "slate",
      },
      {
        name: "Elite",
        popular: true,
        tagline: "A higher-touch experience built for serious, high-volume clients.",
        minDeposit: "50,000 AUD",
        support: "Dedicated Manager",
        perks: [
          "Dedicated account manager",
          "Tailored onboarding & platform walkthrough",
          "Priority servicing and escalation path",
          "Exclusive market commentary & webinars",
        ],
        primaryHref: "/register",
        secondaryHref: "/contact",
        accent: "yellow",
      },
    ],
    []
  );

  const tabButton = (key: "tiers" | "benefits" | "onboarding", label: string) => {
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
              Premium Clients
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Premium Servicing for Serious Traders
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Exclusive rewards, bespoke benefits, and dedicated support for high-volume traders who demand a faster, more personalized experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Request Premium Access
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Talk to Our Team
              </a>
            </div>

            <p className="mt-6 text-xs leading-5 text-white/70">
              Premium tiers are subject to eligibility checks and may vary by region and entity.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trading / Premium Clients
        </div>
        <div className="w-full mt-8">          {/* Premium background panel (same “inner panel” style as Account Overview tabs) */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

            <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
              {/* Tabs */}
              <div className="flex justify-center border-b border-gray-200">
                {tabButton("tiers", "TIERS")}
                {tabButton("benefits", "BENEFITS")}
                {tabButton("onboarding", "ONBOARDING")}
              </div>

              {/* Content */}
              {tab === "tiers" ? (
                <div className="mt-10">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {tiers.map((t) => (
                      <TierCard key={t.name} {...t} />
                    ))}
                  </div>

                  <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
                    <div className="text-sm font-semibold text-gray-900">Eligibility & Notes</div>
                    <p className="mt-2 text-sm text-gray-600">
                      Premium tiers are subject to eligibility checks and may vary by region and entity. Servicing timelines
                      depend on funding method, cut-off windows, and standard compliance requirements.
                    </p>
                  </div>
                </div>
              ) : tab === "benefits" ? (
                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  {[
                    {
                      title: "Higher-touch support",
                      desc: "Priority routing and escalation paths for time-sensitive issues.",
                    },
                    {
                      title: "Better onboarding",
                      desc: "Guided setup, platform walkthrough, and trading environment orientation.",
                    },
                    {
                      title: "Exclusive access",
                      desc: "Webinars, platform updates, and market briefings tailored to active clients.",
                    },
                  ].map((b) => (
                    <div key={b.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="text-sm font-semibold text-gray-900">{b.title}</div>
                      <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
                    </div>
                  ))}

                  <div className="lg:col-span-3 mt-2 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Ready to upgrade?</div>
                        <p className="mt-1 text-sm text-gray-600">
                          Open an account or speak with our team to confirm eligibility and next steps.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                          <Link href="/register">OPEN AN ACCOUNT</Link>
                        </Button>
                        <Button variant="outline" className="border-gray-300 font-semibold" asChild>
                          <Link href="/contact">CONTACT US</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-10">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <StepCard
                      n="01"
                      title="Submit your request"
                      desc="Create an account and request Premium Access (or contact our team directly)."
                    />
                    <StepCard
                      n="02"
                      title="Verification & suitability"
                      desc="We confirm eligibility, region/entity requirements, and compliance checks."
                    />
                    <StepCard
                      n="03"
                      title="Onboarding"
                      desc="You receive a tailored setup walkthrough and servicing details for your tier."
                    />
                  </div>

                  <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
                    <div className="text-sm font-semibold text-gray-900">Need help right now?</div>
                    <p className="mt-2 text-sm text-gray-600">
                      If you’re already a client, log in to MyBCR and message support from the portal for the fastest routing.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                        <Link href="/login">LOGIN MYBCR</Link>
                      </Button>
                      <Button variant="outline" className="border-gray-300 font-semibold" asChild>
                        <Link href="/contact">TALK TO SUPPORT</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
