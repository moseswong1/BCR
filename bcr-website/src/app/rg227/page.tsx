'use client';

import Link from 'next/link';
import { ChevronLeft, CheckCircle, XCircle } from 'lucide-react';

interface Benchmark {
  title: string;
  meets: boolean;
  description: string;
}

export default function RG227Page() {
  const benchmarks: Benchmark[] = [
    {
      title: 'Client Qualification',
      meets: true,
      description: `BCR maintains and applies a written policy which sets out the minimum qualification criteria that prospective retail investors will need to demonstrate before we will open a trading account for you. BCR also maintains a written policy/procedure to ensure such criteria are properly applied, and unsuitable investors are not accepted. We also maintain records of our assessments.

Please note that we do not provide personal advice regarding the suitability of trading in these products. BCR does not accept retail investors unless they are able to satisfactorily answer the Appropriateness Test in our trading account web application form which addresses the following criteria:

• Previous trading experience in financial products
• Understanding of leverage, margins and volatility
• Understanding of the key features of the product
• Ability to monitor and manage the risks of trading
• Understanding that only risk capital should be traded`,
    },
    {
      title: 'Opening Collateral',
      meets: false,
      description: `While BCR does not encourage trading using borrowed funds, we realize the additional funding option is appreciated by our clients. To limit fraud risk, BCR imposes a limit of $1,000 on initial account funding done via credit card, and we also limit overall credit card funding to $5,000 per month. Please note that exceptions may apply.

BCR does not encourage the use of leverage products with borrowed funds. You should be aware that trading on leverage with borrowed money exposes you to greater credit risks and cash flow risks. This includes the risk of 'double leverage'.

BCR does not accept "cash equivalents" as opening collateral (e.g. no securities as deposits).`,
    },
    {
      title: 'Counterparty Risk - Hedging',
      meets: true,
      description: `Within BCR's risk management framework we have assessed the market risk and counterparty risks arising from entering into OTC CFD transactions with customers and hedge counterparties and applied controls to mitigate those risks. Those controls include:

• The enforcement of position limits based on the account equity of the client and the instruments being traded
• The enforcement of market risk limits on the net exposure and daily loss limits of BCR
• The selection of hedge counterparties, in sufficient number to give reasonable assurance that BCR has adequate facilities and capacity to hedge its exposures
• The selection and maintenance of hedge counterparty relationships based on, amongst other things, their financial capacity and resilience

BCR's selection of hedge counterparties is based on the following factors:
• Whether the funds placed by BCR as collateral are subject to Segregation
• The counterparties' financial strength and stability based on its credit rating and that of its parent (if any)
• The regulatory status of the counterparties
• The services it provides and the strength of its operational controls and systems`,
    },
    {
      title: 'Counterparty Risk - Financial Resources',
      meets: true,
      description: `BCR maintains a written policy and procedure with regard to the management and ongoing monitoring of its financial resources. This written policy addresses the following matters, amongst other things:

• The methodology employed by BCR to measure and assess its regulatory financial requirements under its Australian Financial Services License
• Linkages between the budgetary planning process and the financial requirements
• Scenarios used to forecast the cash resources available to BCR to meet its financial requirements
• Roles and responsibilities for measuring and monitoring the financial condition against the requirements

We do not perform regular testing of our financial needs under stressed conditions due to the fact that exposures are subject to significant variation and the results generated at any point in time may not be applicable to our financial position at other points in time. To mitigate the risks of failing to satisfy the financial requirements, we have established a capital buffer based upon historical market moves and measure and monitor capital daily. Financial resources are also subject to external audit on an annual basis.`,
    },
    {
      title: 'Client Money',
      meets: true,
      description: `This information is made available by BCR to explain how client money is handled. The purpose is to provide clients with an insight into how client money is segregated and may be utilised by BCR so that clients are better informed to assess the safety of their funds.

Client money is held with Australian Authorised Deposit-taking Institutions (ADIs) in compliance with the Corporations Act Regulations. BCR currently holds client segregated trust accounts with Commonwealth Bank of Australia and Bank of China Australia.

Funds are not held in individual segregated accounts but are pooled with other client's funds. BCR maintains client segregated trust accounts in a number of currencies for this purpose.

Funds held in trust on behalf of a retail client may only be withdrawn by BCR as permitted under the Australian Client Money Rules, as set out in the Product Disclosure Statement and Client Agreement.

Funds held in trust on behalf of a wholesale client may be used by BCR to meet its obligations incurred in connection with margining, guaranteeing, securing, transferring, adjusting or settling dealings in derivatives, including dealings on behalf of other clients.

A daily and a monthly reconciliation of client funds held in client segregated trust accounts is performed. On the basis of which BCR either pays to or withdraws money from the segregated trust accounts reflecting the net settlement of all obligations to its clients.

We are solely entitled to any interest or earnings derived from Client Money being deposited in a trust account or invested by us in accordance with the Australian Client Money Rules, with such interest or earnings being payable to us from the relevant trust account or investment account.`,
    },
    {
      title: 'Suspended or Halted Underlying Assets',
      meets: true,
      description: `An underlying financial product may be placed in a trading halt on the relevant exchange in various circumstances. Additionally, it may be suspended or delisted in certain circumstances. Exchange rates depend on a number of factors including, for example, interest rates, currency supply and demand and actions of the government. In some situations, exchanges of currency may be suspended.

BCR, in its absolute discretion, cancel your order in respect of a transaction which has not yet been opened, or close any open Position, where the underlying financial product is the subject of a trading halt, suspension or delisting.

When you place an order for a CFD with us, it is likely that we will place a corresponding order to purchase or sell the relevant product to hedge our market risk. BCR has the discretion as to when and if it will accept an order. Without limiting this discretion, it is likely that we will elect not to accept an order in circumstances where our corresponding order cannot be filled. Accordingly, BCR may at any time determine, in our absolute discretion, that we will not permit the entry into a CFD over one or more underlying assets.`,
    },
    {
      title: 'Margin Calls',
      meets: true,
      description: `BCR establishes minimum margin requirements for all instruments. These margin requirements are set out in the Contract Specifications available on the website.

The MT4 trading system monitors the margin requirements of all open positions for each client against the client's account equity. Clients can monitor their margin requirements and the margin ratio within the MT4 trading application.

Where account equity falls below the total margin requirement a margin call is generated and a notification is sent to the email address provided by the client to BCR. Clients are advised that it is their responsibility to ensure they maintain sufficient equity to meet the total margin requirement at all times.

BCR is under no obligation to allow time for clients to forward funds to meet margin calls as markets can be volatile and BCR may without notice, in its discretion, close out all or some positions if the margin requirements are not satisfied.

Clients must ensure that they monitor their margin requirements as BCR cannot guarantee that margin call notifications will be received by clients so clients should not rely on this.

If a client's free equity falls below the Stop-out Level BCR's Trading Platform will automatically begin to liquidate open orders when the client's Total Equity balance falls below 50% of the Initial Margin Requirement. The trading platform will liquidate individual positions until the remaining Client Total Equity is sufficient to support existing open position(s). In deciding what positions will be individually liquidated the largest losing position will be closed first during liquidation.`,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/disclosure-documents"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Disclosure Documents
          </Link>
          
          <div className="flex gap-4 mb-6">
            <Link href="/about" className="text-sm text-slate-400 hover:text-yellow-400 transition-colors">BCR PROFILE</Link>
            <Link href="/contact" className="text-sm text-slate-400 hover:text-yellow-400 transition-colors">CONTACT US</Link>
            <Link href="/disclosure-documents" className="text-sm text-yellow-400">DISCLOSURE DOCUMENTS</Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">RG227</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Regulatory Guide 227 (RG 227) issued by Australian Securities and Investment Commission sets out 7 disclosure benchmarks for over the counter contracts for difference. Product Disclosure Statements must address the benchmarks on an "if not, why not" basis.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-600 leading-relaxed">
            As an issuer of OTC CFDs BCR provides the information set out below to explain whether and how it addresses the benchmarks. These disclosures are a summary only and should not be relied upon solely. The Product Disclosure Statement (PDS) sets out the information in detail and is available on this website. Clients should ensure they review the PDS in full before deciding whether to acquire BCR's products.
          </p>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {benchmarks.map((benchmark, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-slate-300">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl font-bold text-slate-900">{benchmark.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {benchmark.meets ? (
                      <>
                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                        <span className="text-sm font-semibold text-emerald-600">Yes</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-red-500" />
                        <span className="text-sm font-semibold text-red-600">No</span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="prose prose-slate max-w-none">
                    {benchmark.description.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-slate-600 leading-relaxed mb-4 last:mb-0 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore more opportunities & potential with BCR now
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Sign up in minutes and fund in seconds
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Open an Account
            </Link>
            <Link
              href="/demo"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition"
            >
              Try Demo First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
