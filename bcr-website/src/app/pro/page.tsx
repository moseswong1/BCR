export const metadata = {
  title: "BCR PRO - Wholesale Account Services",
  description: "Access higher leverage, volume-based rebates, and exclusive wholesale account services through BCR Pro. Learn qualification requirements and wholesale client benefits.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-to-br from-[#070B0F] via-[#1a1a2e] to-[#070B0F] overflow-hidden flex items-center justify-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-amber-500/30 via-yellow-500/20 to-orange-500/30"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-32 max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            BCR PRO
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Unlock exclusive wholesale account services designed for professional traders and sophisticated investors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/register"
              className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-[#070B0F] font-semibold rounded-lg transition duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 font-semibold rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#070B0F] mb-8 uppercase tracking-wide">
          Wholesale Account Services
        </h2>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 sm:p-8 rounded-lg mb-8">
          <p className="text-gray-800 mb-4">
            As a wholesale client with BCR Pro, you gain access to higher leverage and volume-based rebates unavailable to retail clients. However, certain retail client protections—such as negative balance protection and some AFCA protections—may not apply to you.
          </p>
          <p className="text-gray-800 mb-4">
            For detailed information about risks and important considerations, please review the{" "}
            <a
              href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/Wholesale/Wholesale-Client-Disclosure-Notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-semibold underline hover:text-amber-700"
            >
              Wholesale Client Disclosure Notice
            </a>.
          </p>
          <p className="text-gray-800">
            Have questions about wholesale accounts?{" "}
            <a
              href="mailto:wholesale@au.thebcr.com"
              className="text-amber-600 font-semibold underline hover:text-amber-700"
            >
              Email us at wholesale@au.thebcr.com
            </a>{" "}
            or use our online chat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-[#070B0F] mb-2">Higher Leverage</h3>
            <p className="text-gray-700 text-sm">Access increased leverage ratios scaled to your account equity and margin usage.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-semibold text-[#070B0F] mb-2">Volume-Based Rebates</h3>
            <p className="text-gray-700 text-sm">Earn rebates based on your trading volume and account activity.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-[#070B0F] mb-2">Professional Services</h3>
            <p className="text-gray-700 text-sm">Dedicated support and services tailored to professional traders.</p>
          </div>
        </div>
      </section>

      {/* Qualification Options Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#070B0F] mb-4 uppercase tracking-wide">
            Qualification Paths
          </h2>
          <p className="text-gray-700 mb-12">Become a BCR Pro client by meeting one of our two qualification pathways:</p>

          {/* Option 1 */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border-l-4 border-amber-500 mb-8">
            <h3 className="text-2xl font-semibold text-[#070B0F] mb-4">
              Option 1 – Wealth Threshold Application
            </h3>
            <p className="text-gray-700 mb-6">
              An eligible client is someone who meets one of the following criteria:
            </p>
            <ul className="space-y-3 mb-6 pl-6">
              <li className="text-gray-700 list-disc">
                Has net assets of at least <strong>A$2.5 million</strong>
                <span className="text-sm text-gray-500 ml-2">(accountant's certificate – 2 year expiry)</span>
                <br />
                <strong className="text-gray-800">OR</strong>
              </li>
              <li className="text-gray-700 list-disc">
                Has a gross income for each of the last 2 financial years of at least <strong>A$250,000</strong>
                <span className="text-sm text-gray-500 ml-2">(accountant's certificate – 2 year expiry)</span>
              </li>
            </ul>
            <p className="text-gray-700 bg-amber-50 p-4 rounded">
              Prospective BCR Pro clients meeting these requirements must provide a certificate from a qualified accountant, which will be requested during the application process.
            </p>
          </div>

          {/* Option 2 */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border-l-4 border-amber-500">
            <h3 className="text-2xl font-semibold text-[#070B0F] mb-4">
              Option 2 – Sophisticated Investor Test
            </h3>
            <p className="text-gray-700 mb-6">
              An eligible client can satisfy the requirements through one of three channels:
            </p>

            {/* Channel 1 */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#070B0F] underline mb-4">
                Channel 1 – Knowledge Test & Trade History
              </h4>
              <ul className="space-y-2 pl-6 mb-4">
                <li className="text-gray-700 list-disc">
                  Demonstrate product knowledge by completing our online Knowledge Quiz with a <strong>90% pass mark</strong>
                  <br />
                  <strong className="text-gray-800">AND</strong>
                </li>
                <li className="text-gray-700 list-disc">
                  Traded at least <strong>75 trades</strong> with a firm for Margin FX, CFDs over Indices, Commodities, Currencies, Metals and Shares over the previous 12 months
                  <br />
                  <strong className="text-gray-800">OR</strong>
                </li>
                <li className="text-gray-700 list-disc">
                  Traded at least <strong>50 significant trades</strong> (A$25,000 notional for CFD shares; A$50,000 for other CFDs) over the previous 12 months
                </li>
              </ul>
            </div>

            {/* Channel 2 */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[#070B0F] underline mb-4">
                Channel 2 – Relevant Work Experience
              </h4>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-700 list-disc">
                  Work or have worked in the financial sector for at least <strong>one year</strong> in a professional position requiring knowledge of leveraged derivative trading (provide employment evidence)
                </li>
              </ul>
            </div>

            {/* Channel 3 */}
            <div>
              <h4 className="text-lg font-semibold text-[#070B0F] underline mb-4">
                Channel 3 – Relevant Formal Qualifications
              </h4>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-700 list-disc">
                  Possess formal qualifications relevant to understanding Margin FX and CFDs (Finance or Applied Finance degrees preferred; postgraduate qualifications are preferred)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Notices Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#070B0F] mb-4 uppercase tracking-wide">
          Wholesale Client Protections & Restrictions
        </h2>
        <p className="text-gray-700 mb-12">
          Important information about the protections and restrictions that apply to wholesale clients:
        </p>

        <div className="space-y-6">
          {[
            {
              title: "Retail Leverage Restrictions",
              description:
                "ASIC's proposed product intervention measures for CFDs, including leverage restrictions, will not apply to you.",
            },
            {
              title: "External Dispute Resolution",
              description:
                "AFCA has discretion to exclude complaints from wholesale clients and may not be able to assist with disputes.",
            },
            {
              title: "Disclosure Documents",
              description:
                "You will not receive a Product Disclosure Statement (PDS) or Financial Services Guide (FSG).",
            },
            {
              title: "Client Money Protection",
              description:
                "Your funds and assets will be segregated in accordance with the Corporations Act 2001 (Cth), with the same protections as retail clients.",
            },
            {
              title: "Negative Balance Protection",
              description:
                "As a wholesale client, you may be eligible for a single negative balance protection of up to AUD$10,000 of your total balance (combined balance of all accounts after all trades close). BCR reserves the right to deny protection where there is evidence of misconduct or trading abuse.",
            },
            {
              title: "Margin Close-out",
              description:
                "BCR will close out your position(s) if your equity falls below 50% of the required margin.",
            },
            {
              title: "Leverage Settings",
              description:
                "Your leverage is automatically adjusted based on account equity and used margin (see tables below). BCR is not responsible for positions closed due to leverage adjustments.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-lg border-l-4 border-amber-400 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#070B0F] mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leverage Tables Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#070B0F] mb-12 uppercase tracking-wide">
            Leverage Settings
          </h2>

          {/* Account Equity Table */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#070B0F] mb-4">Based on Account Equity</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-500 text-white">
                    <th className="border border-amber-600 px-4 py-3 text-left font-semibold">Account Equity</th>
                    <th className="border border-amber-600 px-4 py-3 text-left font-semibold">Max Leverage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Below $50,000", "1:400"],
                    ["$50,001 – $100,000", "1:200"],
                    ["$100,001 – $200,000", "1:100"],
                    ["$200,001 – $300,000", "1:50"],
                    ["$300,001 – $500,000", "1:25"],
                    ["$500,001 – $1,000,000", "1:20"],
                    ["$1,000,001 or more", "1:10"],
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-amber-50"}
                    >
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">{row[0]}</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-[#070B0F]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Used Margin Table */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#070B0F] mb-4">Based on Used Margin</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-500 text-white">
                    <th className="border border-amber-600 px-4 py-3 text-left font-semibold">Used Margin</th>
                    <th className="border border-amber-600 px-4 py-3 text-left font-semibold">Max Leverage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Below $50,000", "1:400"],
                    ["$50,001 – $200,000", "1:100"],
                    ["$200,001 or more", "1:50"],
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-amber-50"}
                    >
                      <td className="border border-gray-200 px-4 py-3 text-gray-800">{row[0]}</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-[#070B0F]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Calculation */}
          <div className="bg-white p-8 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-lg font-semibold text-[#070B0F] mb-4">Example Calculation</h3>
            <div className="space-y-2 text-gray-800">
              <p><strong>Account Equity:</strong> $500,000</p>
              <p><strong>Used Margin:</strong> $100,000</p>
              <p className="text-amber-600 font-semibold">
                → Applicable Max Leverage: <strong>1:25</strong> (determined by Account Equity table)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Discretion Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-6xl">
        <div className="bg-amber-50 border-2 border-amber-300 p-8 sm:p-10 rounded-xl">
          <h3 className="text-2xl font-semibold text-[#070B0F] mb-4">BCR's Discretion</h3>
          <p className="text-gray-800 text-lg">
            Even if you meet all wholesale client requirements, BCR may decline to grant you wholesale status in certain circumstances. We reserve the right to assess each application individually and determine eligibility based on our risk assessment and business judgment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 sm:py-24 bg-gradient-to-br from-[#070B0F] to-gray-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Become a BCR Pro Client?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Apply now to unlock higher leverage, volume-based rebates, and professional wholesale account services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/register"
              className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-[#070B0F] font-bold rounded-lg transition duration-300 text-lg"
            >
              Apply for BCR Pro
            </a>
            <a
              href="mailto:wholesale@au.thebcr.com"
              className="px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 font-semibold rounded-lg transition duration-300 text-lg"
            >
              Email Wholesale Team
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        <div className="bg-gray-100 p-6 rounded-lg text-sm text-gray-700 space-y-4">
          <p>
            <strong>Risk Disclosure:</strong> Trading Contracts for Difference on margin carries a high level of risk and may not be suitable for all investors. By trading CFDs, you could sustain a loss of all your deposited funds. Before deciding to trade, please ensure you have read our{" "}
            <a
              href="https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Product-Disclosure-Statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline font-semibold hover:text-amber-700"
            >
              Product Disclosure Statement
            </a>
            , and sought independent professional financial advice.
          </p>
          <p>
            This page is not directed at residents of any country outside Australia and does not constitute an offer to any person in any jurisdiction where distribution would be unlawful.
          </p>
        </div>
      </section>
    </main>
  );
}
