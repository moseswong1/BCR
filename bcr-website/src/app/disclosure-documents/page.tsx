'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Shield, AlertCircle, Scale, FileCheck } from "lucide-react"
import Link from "next/link"

export default function DisclosureDocumentsPage() {
  const documents = [
    {
      icon: FileText,
      title: "Website Terms of Use",
      description: "Our terms and conditions for using the BCR website and services",
      url: "https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Terms-and-Conditions.pdf",
      category: "Legal"
    },
    {
      icon: Shield,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      url: "https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Privacy-Policy.pdf",
      category: "Legal"
    },
    {
      icon: Scale,
      title: "Complaints Handling Policy",
      description: "Our process for handling and resolving client complaints",
      url: "https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Public-Complaints-Policy.pdf",
      category: "Compliance"
    },
    {
      icon: FileCheck,
      title: "Target Market Determination",
      description: "Product design and distribution information for investors",
      url: "https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Target-Market-Determination.pdf",
      category: "Compliance"
    },
    {
      icon: AlertCircle,
      title: "RG 227 Simplified Disclosure",
      description: "ASIC's simplified financial product disclosure requirements",
      url: "/rg227",
      category: "Regulatory"
    },
    {
      icon: AlertCircle,
      title: "Risk Disclosure Addendum",
      description: "Important risk information for CFD trading",
      url: "/risk-disclosure-addendum",
      category: "Risk"
    }
  ]

  const additionalDocuments = [
    {
      title: "Product Disclosure Statement",
      description: "Complete information about BCR's CFD products and features",
      url: "https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Product-Disclosure-Statement.pdf"
    },
    {
      title: "Financial Services Guide",
      description: "Details about BCR's financial services and compensation arrangements",
      url: "https://bcrpropublic.s3.ap-southeast-1.amazonaws.com/docs/ba/en-us/BCR-Financial-Services-Guide.pdf"
    }
  ]

  const categories = [
    {
      name: "Legal Documents",
      count: 2,
      description: "Terms, conditions, and privacy policies"
    },
    {
      name: "Compliance",
      count: 2,
      description: "Regulatory compliance and handling procedures"
    },
    {
      name: "Risk & Regulatory",
      count: 2,
      description: "Risk disclosures and regulatory information"
    }
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Disclosure Documents
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete transparency. Important legal and regulatory documents to help you understand our services and your obligations as a trader
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href="/about">
              <button className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
                BCR Profile
              </button>
            </a>
            <a href="/contact">
              <button className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all">
                Contact Us
              </button>
            </a>
            <button className="px-6 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all">
              Disclosure Documents
            </button>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Document Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 font-bold text-sm">
                    {category.count}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Documents */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Essential Documents
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, idx) => {
              const Icon = doc.icon
              return (
                <Card key={idx} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all bg-white flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="ml-3 text-xs font-semibold text-yellow-600 uppercase tracking-wider">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {doc.description}
                  </p>

                  <a href={doc.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      View Document
                    </Button>
                  </a>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Documents */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Additional Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {additionalDocuments.map((doc, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="w-8 h-8 text-gray-700 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {doc.description}
                    </p>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="p-8 bg-blue-50 border border-blue-200">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Risk Disclosure
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Trading Contracts for Difference on margin carries a high level of risk and may not be suitable for all investors. By trading CFDs, you could sustain a loss of all your deposited funds. Before deciding to trade with BCR, please ensure that you have read all relevant disclosure documents, including the Product Disclosure Statement, Financial Services Guide, and Target Market Determination.
                </p>
                <p className="text-gray-700 text-sm font-semibold">
                  We strongly recommend seeking independent financial advice to ensure you fully understand the risks involved.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Regulatory Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Regulatory Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-0 shadow-md bg-white">
              <h3 className="font-bold text-gray-900 mb-3">Company Details</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Company Name:</strong> Bacera Co Pty Ltd</p>
                <p><strong>ACN:</strong> 130 877 137</p>
                <p><strong>AFSL:</strong> 328794</p>
                <p><strong>Business Address:</strong> Suite 3, Level 18, 201 Elizabeth Street, Sydney NSW 2000</p>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md bg-white">
              <h3 className="font-bold text-gray-900 mb-3">Contact Regulatory Bodies</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>ASIC:</strong> Australian Securities and Investments Commission</p>
                <p className="text-gray-600">Complaints can be lodged with ASIC via their website or by contacting their helpline</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Open a live account or try our demo to experience professional CFD trading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3" asChild>
              <Link href="/register">
                Open Live Account
              </Link>
            </Button>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3" asChild>
              <Link href="/demo">
                Try Demo Account
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
