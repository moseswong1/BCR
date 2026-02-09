import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Monitor, Smartphone, Download, Globe } from "lucide-react"

export function PlatformSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Trade at Will with Just <span className="text-yellow-600">One</span> Tap
              </h2>
              <p className="text-xl text-gray-600">
                Customized MetaTrader 4 and MetaTrader 5 from BCR have all the powerful tools
                that you need to trade on both Windows and mobile devices.
              </p>
            </div>

            {/* Platform features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Advanced Charting</h3>
                  <p className="text-gray-600">Professional trading tools with real-time market data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Automated Trading</h3>
                  <p className="text-gray-600">Expert Advisors and algorithmic trading support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cross-Platform Trading</h3>
                  <p className="text-gray-600">Seamless trading across desktop, web, and mobile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Platform mockups */}
          <div className="relative">
            {/* Desktop platform mockup */}
            <div className="relative z-10">
              <Card className="bg-gray-900 p-4 rounded-lg shadow-2xl">
                <div className="bg-gray-800 rounded p-3 space-y-3">
                  {/* Platform header */}
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4">MetaTrader 5 - BCR</span>
                  </div>

                  {/* Chart area */}
                  <div className="h-32 bg-black rounded flex items-end space-x-1 p-2">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-yellow-500 w-1 rounded-t"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Trading interface */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-gray-700 p-2 rounded text-white">
                      <div className="text-green-400">EUR/USD</div>
                      <div className="font-mono">1.0924</div>
                    </div>
                    <div className="bg-gray-700 p-2 rounded text-white">
                      <div className="text-red-400">GBP/USD</div>
                      <div className="font-mono">1.2643</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Mobile app overlay */}
              <div className="absolute -bottom-4 -right-4 w-24">
                <Card className="bg-black p-1 rounded-lg shadow-lg">
                  <div className="bg-gray-900 rounded p-2 space-y-1">
                    <div className="h-1 bg-yellow-500 rounded w-3/4"></div>
                    <div className="h-8 bg-gray-800 rounded flex items-end space-x-0.5 p-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-yellow-500 w-0.5 rounded-t"
                          style={{ height: `${Math.random() * 60 + 20}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-0.5 text-xs">
                      <div className="bg-gray-800 p-0.5 rounded text-green-400 text-center text-[8px]">
                        BUY
                      </div>
                      <div className="bg-gray-800 p-0.5 rounded text-red-400 text-center text-[8px]">
                        SELL
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Platform download options */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Download for Your Device</h3>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {/* Desktop platforms */}
            <Link href="/mt4">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <Monitor className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">MT4</h4>
                <p className="text-sm text-gray-600 mb-4">Windows Desktop</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </Card>
            </Link>

            <Link href="/mt5">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <Monitor className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">MT5</h4>
                <p className="text-sm text-gray-600 mb-4">Windows Desktop</p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </Card>
            </Link>

            <Link href="/webtrader">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <Globe className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">WebTrader</h4>
                <p className="text-sm text-gray-600 mb-4">Browser Trading</p>
                <Button variant="outline" size="sm" className="w-full">
                  Launch
                </Button>
              </Card>
            </Link>

            <Link href="/mt4">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <Smartphone className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Mobile</h4>
                <p className="text-sm text-gray-600 mb-4">iOS & Android</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get App
                </Button>
              </Card>
            </Link>
          </div>

          <div className="pt-4">
            <a href="/platforms" className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700">
              More download options →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
