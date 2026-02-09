"use client";

import React, { useMemo, useState } from "react";

type Faq = { q: string; a: string };

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function formatMoney(n: number, currency = "USD") {
  if (!Number.isFinite(n)) return "-";
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    // Fallback if currency code is not supported by locale
    return `${currency} ${n.toFixed(2)}`;
  }
}

function formatNumber(n: number, decimals = 2) {
  if (!Number.isFinite(n)) return "-";
  return n.toFixed(decimals);
}

/**
 * Notes:
 * - This is a marketing/education page. Keep it generic and compliant.
 * - Calculator uses a simplified FX margin estimate:
 *    Notional = lots * contractSize * price
 *    Margin   = notional / leverage
 * - For some pairs/CFD specs, broker contract settings may differ.
 */
export default function Page() {
  // Calculator inputs
  const [accountCurrency, setAccountCurrency] = useState<"USD" | "AUD" | "EUR" | "GBP">("USD");
  const [symbol, setSymbol] = useState("EURUSD");
  const [lots, setLots] = useState<string>("1");
  const [contractSize, setContractSize] = useState<string>("100000");
  const [price, setPrice] = useState<string>("1.0850");
  const [leverage, setLeverage] = useState<string>("30");
  const [includeBuffer, setIncludeBuffer] = useState(true);
  const [bufferPct, setBufferPct] = useState<string>("10");

  const lotsNum = Number(lots);
  const contractSizeNum = Number(contractSize);
  const priceNum = Number(price);
  const leverageNum = Number(leverage);
  const bufferNum = Number(bufferPct);

  const calc = useMemo(() => {
    const valid =
      lotsNum > 0 &&
      contractSizeNum > 0 &&
      priceNum > 0 &&
      leverageNum > 0 &&
      Number.isFinite(lotsNum) &&
      Number.isFinite(contractSizeNum) &&
      Number.isFinite(priceNum) &&
      Number.isFinite(leverageNum);

    if (!valid) {
      return {
        valid: false,
        notional: NaN,
        margin: NaN,
        marginWithBuffer: NaN,
        bufferAmount: NaN,
      };
    }

    const notional = lotsNum * contractSizeNum * priceNum;
    const margin = notional / leverageNum;

    const bufferAmount =
      includeBuffer && bufferNum > 0 && Number.isFinite(bufferNum) ? (margin * bufferNum) / 100 : 0;

    const marginWithBuffer = margin + bufferAmount;

    return { valid: true, notional, margin, marginWithBuffer, bufferAmount };
  }, [lotsNum, contractSizeNum, priceNum, leverageNum, includeBuffer, bufferNum]);

  const faqs: Faq[] = [
    {
      q: "What is margin in FX CFD trading?",
      a: "Margin is the amount of funds set aside to open and maintain a leveraged position. It is not a fee. It is a portion of your account used as collateral for the position.",
    },
    {
      q: "What is leverage?",
      a: "Leverage lets you control a larger position with a smaller amount of capital. For example, 30:1 means you can control 30 units of exposure for every 1 unit of margin.",
    },
    {
      q: "What is the difference between initial margin and maintenance margin?",
      a: "Initial margin is the amount required to open a trade. Maintenance margin is the minimum equity required to keep it open. If your account equity falls below maintenance margin, you may receive a margin call and/or positions may be closed.",
    },
    {
      q: "How does a margin call happen?",
      a: "A margin call can occur when unrealized losses reduce your account equity and your margin level drops below the broker’s threshold. At that point you may need to add funds or reduce exposure.",
    },
    {
      q: "Does higher leverage mean higher risk?",
      a: "Yes. Higher leverage reduces the margin required, but it can magnify both profits and losses. Risk should be managed via position sizing, stop-losses, and prudent exposure.",
    },
  ];

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
              Margin & Leverage (FX)
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Understand Margin & Leverage in FX CFDs
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Margin is the collateral required to open a leveraged position. Leverage can amplify profits, but it can
              also amplify losses. Use this page to understand the mechanics, see worked examples, and estimate margin
              requirements.
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
              Risk warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to
              leverage. Ensure you understand how CFDs work and whether you can afford to take the high risk of losing
              your money.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Breadcrumb-ish */}
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trading / Trading Conditions
        </div>

        {/* Key concepts grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <InfoCard
            title="Margin Requirement"
            body="The amount of funds allocated as collateral to open and keep a position. Margin is not a fee."
          />
          <InfoCard
            title="Leverage Ratio"
            body="Your exposure relative to margin. Example: 30:1 means $1 margin can control $30 notional exposure."
          />
          <InfoCard
            title="Margin Level"
            body="Commonly: (Equity / Used Margin) × 100%. A lower margin level increases the risk of margin call / stop-out."
          />
        </div>

        {/* How it works */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">How margin is calculated</h2>
            <p className="mt-3 text-slate-600 leading-7">
              Margin varies by instrument, account type, and regulatory settings. A simplified way to estimate FX margin
              is:
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Simplified estimate</p>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="rounded bg-white px-2 py-1 text-[13px] text-slate-900 border border-slate-200">
                    Notional = lots × contractSize × price
                  </code>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <code className="rounded bg-white px-2 py-1 text-[13px] text-slate-900 border border-slate-200">
                    Margin = Notional ÷ leverage
                  </code>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Contract specs and conversions can differ (e.g., JPY pairs, non-USD account currency, CFD contract sizes).
                Use your platform’s contract specification as the final reference.
              </p>
            </div>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">What can change your margin?</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li className="flex gap-2">
                <Bullet /> Leverage settings (retail vs professional, instrument limits, regulatory rules)
              </li>
              <li className="flex gap-2">
                <Bullet /> Price movements (notional exposure changes as price changes)
              </li>
              <li className="flex gap-2">
                <Bullet /> Hedging rules (some brokers reduce margin on offsetting positions)
              </li>
              <li className="flex gap-2">
                <Bullet /> Volatility and special events (brokers may adjust margin requirements)
              </li>
            </ul>
          </div>

          {/* Calculator */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Margin calculator</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Estimate required margin for an FX position using a simplified model.
                </p>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Educational
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Symbol">
                <input
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                  className={inputClass}
                  placeholder="e.g. EURUSD"
                />
              </Field>

              <Field label="Account currency">
                <select
                  value={accountCurrency}
                  onChange={(e) => setAccountCurrency(e.target.value as any)}
                  className={inputClass}
                >
                  <option value="USD">USD</option>
                  <option value="AUD">AUD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </Field>

              <Field label="Lots">
                <input
                  inputMode="decimal"
                  value={lots}
                  onChange={(e) => setLots(e.target.value)}
                  className={inputClass}
                  placeholder="1"
                />
              </Field>

              <Field label="Contract size">
                <input
                  inputMode="numeric"
                  value={contractSize}
                  onChange={(e) => setContractSize(e.target.value)}
                  className={inputClass}
                  placeholder="100000"
                />
              </Field>

              <Field label="Price (quote)">
                <input
                  inputMode="decimal"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className={inputClass}
                  placeholder="1.0850"
                />
              </Field>

              <Field label="Leverage (e.g. 30 = 30:1)">
                <input
                  inputMode="numeric"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                  className={inputClass}
                  placeholder="30"
                />
              </Field>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={includeBuffer}
                  onChange={(e) => setIncludeBuffer(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300"
                />
                Add safety buffer
              </label>

              <div className={classNames("flex items-center gap-2", !includeBuffer && "opacity-50")}>
                <span className="text-sm text-slate-600">Buffer %</span>
                <input
                  inputMode="numeric"
                  value={bufferPct}
                  onChange={(e) => setBufferPct(e.target.value)}
                  disabled={!includeBuffer}
                  className={classNames(inputClass, "w-24")}
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Result label="Notional exposure">
                  {calc.valid ? `${formatMoney(calc.notional, accountCurrency)} (${symbol})` : "-"}
                </Result>
                <Result label="Estimated margin">
                  {calc.valid ? formatMoney(calc.margin, accountCurrency) : "-"}
                </Result>
                <Result label="Buffer amount">
                  {calc.valid ? formatMoney(calc.bufferAmount, accountCurrency) : "-"}
                </Result>
                <Result label="Margin with buffer">
                  {calc.valid ? formatMoney(calc.marginWithBuffer, accountCurrency) : "-"}
                </Result>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                This is an estimate. Final margin depends on instrument specifications, conversions, and broker settings.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/register"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#070B0F] px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Trade FX CFDs
              </a>
              <a
                href="/trading-hours"
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Trading Hours
              </a>
            </div>
          </div>
        </div>

        {/* Worked example */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Worked example</h2>
          <p className="mt-2 text-slate-600 leading-7">
            Example only. Assume you buy <span className="font-semibold">1 lot</span> of EUR/USD at{" "}
            <span className="font-semibold">1.18508</span> with{" "}
            <span className="font-semibold">30:1</span> leverage and contract size{" "}
            <span className="font-semibold">100,000</span>.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <ExampleCard
              title="Position size"
              lines={[
                "Lots: 1",
                "Contract size: 100,000",
                "Price: 1.18508",
                `Notional = 1 × 100,000 × 1.18508 = ${formatNumber(118508, 0)} (USD)`,
              ]}
            />
            <ExampleCard
              title="Margin required"
              lines={[
                "Leverage: 30:1",
                "Margin = Notional ÷ Leverage",
                `Margin = 118,508 ÷ 30 = ${formatMoney(3950.2667, "USD")}`,
                "This is the collateral required to open the position (simplified).",
              ]}
            />
            <ExampleCard
              title="P&L sensitivity"
              lines={[
                "If price moves against you, losses reduce equity.",
                "Lower equity reduces margin level.",
                "If margin level reaches thresholds, positions may be closed.",
                "Use risk controls and prudent sizing.",
              ]}
            />
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            The example is simplified for education. Real calculations may involve conversion rates, spreads, swaps, and
            contract specifications.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <span>{f.q}</span>
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070B0F]">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Trade with clarity on costs, margin, and risk
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Open an account in minutes and explore FX CFDs on a demo first. Know your margin, size responsibly, and use
            risk management tools.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-6 py-3 text-sm font-semibold text-black hover:brightness-95"
            >
              Open an Account
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Try Demo
            </a>
          </div>

          <p className="mt-6 text-xs leading-5 text-white/70">
            Trading involves risk. Past performance is not a reliable indicator of future results.
          </p>
        </div>
      </section>
    </main>
  );
}

const inputClass =
  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200";

function Field(props: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{props.label}</div>
      {props.children}
    </label>
  );
}

function Result(props: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-4 border border-slate-200">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{props.label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{props.children}</div>
    </div>
  );
}

function InfoCard(props: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{props.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{props.body}</p>
    </div>
  );
}

function ExampleCard(props: { title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-sm font-semibold text-slate-900">{props.title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {props.lines.map((l) => (
          <li key={l} className="leading-6">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Bullet() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD400]" />;
}
