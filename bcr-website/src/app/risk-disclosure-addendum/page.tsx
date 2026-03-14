'use client';

import Link from 'next/link';
import { ChevronLeft, AlertTriangle, TrendingDown, DollarSign, FileText } from 'lucide-react';

interface RiskSection {
  icon: React.ElementType;
  title: string;
  content: string[];
}

export default function RiskDisclosureAddendumPage() {
  const riskSections: RiskSection[] = [
    {
      icon: AlertTriangle,
      title: 'Risks Associated with Transactions in Derivative Contracts-for-Difference',
      content: [
        'The Client should unreservedly acknowledge and accept that, regardless of any information which may be offered by the Company, the value of the Contracts-for-Difference provided by the Company may fluctuate downwards or upwards and it is even probable that the investment may become of no value.',
        'Trading in Contracts-for-Difference and other leveraged products may involve a significant level of risk and is not suitable for all investors. Before undertaking any such transactions you should ensure that you fully understand the risks involved and you should seek independent advice if necessary. The Client should not engage in any dealings in Contracts-for-Difference, directly or indirectly, unless you know and understand all of the risks involved.',
        'The Client should unreservedly acknowledge and accept that he runs a great risk of incurring losses and damages as a result of the dealing in Contracts-for-Difference and accepts and declares that he is willing to undertake this risk.',
        'The high degree of leverage is a particular feature of derivative Contracts-for-Difference. This stems from the margining system applicable to such trades, which generally involves a comparatively modest deposit or margin in terms of the overall contract value, so that a relatively small movement in the underlying market can have a disproportionately dramatic effect on the Client\'s trade.',
        'The Contracts-for-Difference available for trading with the Company are \'non-deliverable spot transactions\' giving an opportunity to make profit on changes in currency rates, commodity, stock market indices or share prices called the underlying instrument. If the underlying instrument movement is in the Client\'s favor, the client may achieve a good profit, but an equally small adverse market movement can not only quickly result in the loss of the Clients\' entire deposit but also any additional commissions and other expenses incurred.',
      ],
    },
    {
      icon: TrendingDown,
      title: 'Volatility of Price and Limitation on the Available Market',
      content: [
        'The Contracts-for-Difference provided by the Company are derivative securities, where their price is derived from the price of the underlying reference instruments in which the Contracts-for-Difference refer to. Derivative securities/markets can be highly volatile. The prices of derivative Contracts-for-Difference and the Underlying Reference Instruments and Indices may fluctuate rapidly and over wide ranges and may reflect unforeseeable events or changes in conditions, none of which can be controlled by the Client or the Company. Under certain market conditions it can be impossible to execute any type of Client\'s order at a declared price. Therefore Stop Loss order cannot guarantee the limit of loss.',
        'The prices of derivative Contracts-for-Difference will be influenced by, amongst other things, changing supply and demand relationships, governmental, agricultural, and trade programs and policies, national and international political and economic events and the prevailing psychological characteristics of the relevant marketplace.',
        'Transactions in derivative Contracts-for-Difference provided by the Company are not undertaken on a recognized exchange, rather they are undertaken through the Company\'s Trading Platform and, accordingly, they may expose the Client to greater risks than regulated exchange transactions. The terms and conditions and trading rules are established solely by the counterparty which in this case is the Company. The Client is obliged to close an open position of any given Contracts-for-Difference during the opening hours of the Company\'s Trading Platform.',
      ],
    },
    {
      icon: DollarSign,
      title: 'Margin Requirements',
      content: [
        'Clients are required to deposit an Initial Margin Deposit with BCR in order to open a position. The Margin requirement will depend on the underlying instrument of the derivative Contracts-for-Difference, level of leverage assigned and the value of position to be established.',
        'BCR will attempt to notify the Client when the account total equity balance is at or near 100% of the Initial Margin Requirement for open positions. BCR has the discretionary right to liquidate individual positions until the remaining Client Total Equity is sufficient to support existing open position(s). In deciding what positions will be individually liquidated the largest losing position will be closed first during liquidation.',
        'BCR guarantees that there will be no negative balance in the account when trading Contracts-for-Difference provided by BCR.',
      ],
    },
    {
      icon: FileText,
      title: 'Other Additional Obligations',
      content: [
        'Before the Client begins to trade, he should obtain details of all commissions and other charges for which the Client will be liable and which may be found through BCR\'s Website and Client Agreement. If any charges are not expressed in money terms (but for example as a dealing spread), the Client should obtain a clear written explanation, including appropriate examples, to establish what such charges are likely to mean in specific money terms.',
        'The value of open positions in the Contracts-for-Difference provided by BCR is subject to Swap fees. Swap fees are based on prevailing market interest rates, which may vary over time. Details of daily swap fees applied are available on BCR\'s Trading Platform.',
        'The Client should take the risk that his trades in Contracts-for-Difference may be or become subject to tax and/or any other duty for example because of changes in legislation or his personal circumstances. BCR does not warrant that no tax and/or any other stamp duty will be payable. The Client should be responsible for any taxes and/or any other duty which may accrue in respect of his trades.',
        'This notice cannot and does not disclose or explain all of the risks and other significant aspects involved in dealing in Contracts-for-Difference and was designed to explain in general terms the nature of the risks particular to dealing in the Contracts-for-Difference provided by BCR and to help the Client to take investment decisions on an informed basis. This notice should be read together with BCR\'s Product Disclosure Statement and Financial Services Guide.',
      ],
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Risk Disclosure Addendum</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            BCR is the trading name of Bacera Co Pty Ltd, Australian Company Number 130 877 137, Australian Financial Services Licence Number 328794.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-slate-600 leading-relaxed">
            BCR recommends that prospective clients read our{' '}
            <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Product-Disclosure-Statement.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Product Disclosure Statement</a> and the{' '}
            <a href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Financial-Services-Guide.pdf" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Financial Services Guide</a>, as well as seek independent professional advice, before making any decision concerning BCR's products.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Please note that if BCR's financial services are being provided from a location outside of Australia, BCR's AFSL and Australian regulation only applies to the financial services provided to Australian residents only. Due to regulatory restrictions BCR does not accept applications from US citizens.
          </p>
          <p className="text-slate-600 leading-relaxed font-semibold">
            Prior to applying for an account the Client should consider carefully whether trading in derivative Contracts-for-Difference is suitable for him in the light of his circumstances and financial resources. Trading in derivative Contracts-for-Difference entails the use of leverage. In considering whether to engage in this form of trading, the Client should be aware of the following:
          </p>
        </div>
      </section>

      {/* Risk Sections */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {riskSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                    <div className="bg-yellow-500/20 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-slate-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
