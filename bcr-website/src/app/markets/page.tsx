'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Professional SVG Graphics for each market
const ForexGraphic = () => (
  <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-forex" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-forex)"/>
      </svg>
    </div>
    {/* Chart line */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="forex-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        <linearGradient id="forex-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,150 Q50,120 100,130 T200,100 T300,80 T400,40" fill="none" stroke="url(#forex-line)" strokeWidth="3"/>
      <path d="M0,150 Q50,120 100,130 T200,100 T300,80 T400,40 V200 H0 Z" fill="url(#forex-fill)"/>
    </svg>
    {/* Currency pairs */}
    <div className="relative z-10 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-4xl font-bold text-white">EUR</span>
        <span className="text-2xl text-blue-400">/</span>
        <span className="text-4xl font-bold text-blue-400">USD</span>
      </div>
      <div className="text-5xl font-bold text-emerald-400">1.08445</div>
      <div className="text-sm text-emerald-400 mt-2">▲ +0.32%</div>
    </div>
    {/* Floating currency symbols */}
    <div className="absolute top-4 left-4 text-white/20 text-2xl font-bold">$</div>
    <div className="absolute top-8 right-8 text-white/20 text-xl font-bold">€</div>
    <div className="absolute bottom-8 left-8 text-white/20 text-xl font-bold">£</div>
    <div className="absolute bottom-4 right-4 text-white/20 text-2xl font-bold">¥</div>
  </div>
);

const SharesGraphic = () => (
  <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 flex items-center justify-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-shares" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-shares)"/>
      </svg>
    </div>
    {/* Candlestick chart */}
    <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
      {/* Candlesticks */}
      <g>
        <line x1="20" y1="30" x2="20" y2="90" stroke="#ef4444" strokeWidth="1"/>
        <rect x="15" y="40" width="10" height="35" fill="#ef4444"/>
        
        <line x1="45" y1="25" x2="45" y2="85" stroke="#10b981" strokeWidth="1"/>
        <rect x="40" y="35" width="10" height="40" fill="#10b981"/>
        
        <line x1="70" y1="20" x2="70" y2="75" stroke="#10b981" strokeWidth="1"/>
        <rect x="65" y="30" width="10" height="30" fill="#10b981"/>
        
        <line x1="95" y1="15" x2="95" y2="65" stroke="#10b981" strokeWidth="1"/>
        <rect x="90" y="20" width="10" height="35" fill="#10b981"/>
        
        <line x1="120" y1="25" x2="120" y2="70" stroke="#ef4444" strokeWidth="1"/>
        <rect x="115" y="30" width="10" height="30" fill="#ef4444"/>
        
        <line x1="145" y1="10" x2="145" y2="55" stroke="#10b981" strokeWidth="1"/>
        <rect x="140" y="15" width="10" height="30" fill="#10b981"/>
        
        <line x1="170" y1="5" x2="170" y2="50" stroke="#10b981" strokeWidth="1"/>
        <rect x="165" y="10" width="10" height="30" fill="#10b981"/>
      </g>
    </svg>
    {/* Stock tickers */}
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 text-xs">
      <div className="bg-slate-800/80 px-3 py-1 rounded">
        <span className="text-white font-medium">AAPL</span>
        <span className="text-emerald-400 ml-2">+2.4%</span>
      </div>
      <div className="bg-slate-800/80 px-3 py-1 rounded">
        <span className="text-white font-medium">MSFT</span>
        <span className="text-emerald-400 ml-2">+1.8%</span>
      </div>
      <div className="bg-slate-800/80 px-3 py-1 rounded">
        <span className="text-white font-medium">BHP</span>
        <span className="text-red-400 ml-2">-0.5%</span>
      </div>
    </div>
  </div>
);

const MetalsGraphic = () => (
  <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-800 flex items-center justify-center overflow-hidden">
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-400/10 to-transparent"></div>
    {/* Gold bars visualization */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="flex gap-1 mb-2">
        <div className="w-16 h-8 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 rounded-sm shadow-lg transform -skew-x-6"></div>
        <div className="w-16 h-8 bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 rounded-sm shadow-lg transform -skew-x-6"></div>
      </div>
      <div className="flex gap-1 mb-2">
        <div className="w-16 h-8 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-700 rounded-sm shadow-lg transform -skew-x-6"></div>
        <div className="w-16 h-8 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-700 rounded-sm shadow-lg transform -skew-x-6"></div>
        <div className="w-16 h-8 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-700 rounded-sm shadow-lg transform -skew-x-6"></div>
      </div>
      <div className="mt-4 text-center">
        <div className="text-yellow-400 text-sm font-medium">XAU/USD</div>
        <div className="text-3xl font-bold text-white">2,341.50</div>
        <div className="text-emerald-400 text-sm">▲ +0.85%</div>
      </div>
    </div>
    {/* Silver indicator */}
    <div className="absolute top-4 right-4 bg-slate-800/80 px-3 py-2 rounded-lg">
      <div className="text-slate-400 text-xs">XAG/USD</div>
      <div className="text-white font-semibold">27.45</div>
    </div>
  </div>
);

const CommoditiesGraphic = () => (
  <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 flex items-center justify-center overflow-hidden">
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
    </div>
    {/* Oil barrel visualization */}
    <div className="relative z-10 flex items-center gap-8">
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 80 120" className="w-20 h-28">
          <defs>
            <linearGradient id="barrel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b"/>
              <stop offset="30%" stopColor="#334155"/>
              <stop offset="70%" stopColor="#334155"/>
              <stop offset="100%" stopColor="#1e293b"/>
            </linearGradient>
          </defs>
          <ellipse cx="40" cy="15" rx="35" ry="10" fill="#475569"/>
          <rect x="5" y="15" width="70" height="90" fill="url(#barrel)"/>
          <ellipse cx="40" cy="105" rx="35" ry="10" fill="#1e293b"/>
          <rect x="10" y="30" width="60" height="8" fill="#f97316" opacity="0.8"/>
          <rect x="10" y="50" width="60" height="8" fill="#f97316" opacity="0.6"/>
          <rect x="10" y="70" width="60" height="8" fill="#f97316" opacity="0.4"/>
          <text x="40" y="95" textAnchor="middle" fill="#f97316" fontSize="12" fontWeight="bold">OIL</text>
        </svg>
      </div>
      <div className="text-center">
        <div className="text-orange-400 text-sm font-medium mb-1">WTI Crude</div>
        <div className="text-4xl font-bold text-white">$78.45</div>
        <div className="text-emerald-400 text-sm mt-1">▲ +1.2%</div>
        <div className="mt-4 text-slate-400 text-xs">
          <div>Brent: $82.30</div>
          <div>Natural Gas: $2.45</div>
        </div>
      </div>
    </div>
  </div>
);

const IndicesGraphic = () => (
  <div className="relative w-full h-full min-h-[280px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center overflow-hidden">
    {/* Multiple chart lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#c084fc"/>
        </linearGradient>
        <linearGradient id="line2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#60a5fa"/>
        </linearGradient>
        <linearGradient id="line3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#34d399"/>
        </linearGradient>
      </defs>
      <path d="M0,120 Q80,100 160,90 T320,60 T400,30" fill="none" stroke="url(#line1)" strokeWidth="2.5" opacity="0.9"/>
      <path d="M0,140 Q100,130 180,110 T340,70 T400,50" fill="none" stroke="url(#line2)" strokeWidth="2" opacity="0.7"/>
      <path d="M0,160 Q90,150 170,130 T330,90 T400,70" fill="none" stroke="url(#line3)" strokeWidth="2" opacity="0.5"/>
    </svg>
    {/* Index cards */}
    <div className="relative z-10 grid grid-cols-2 gap-3">
      <div className="bg-slate-800/90 px-4 py-3 rounded-lg backdrop-blur">
        <div className="text-purple-400 text-xs font-medium">S&P 500</div>
        <div className="text-white font-bold text-lg">5,234.18</div>
        <div className="text-emerald-400 text-xs">▲ +0.54%</div>
      </div>
      <div className="bg-slate-800/90 px-4 py-3 rounded-lg backdrop-blur">
        <div className="text-blue-400 text-xs font-medium">NASDAQ</div>
        <div className="text-white font-bold text-lg">16,428.82</div>
        <div className="text-emerald-400 text-xs">▲ +0.73%</div>
      </div>
      <div className="bg-slate-800/90 px-4 py-3 rounded-lg backdrop-blur">
        <div className="text-emerald-400 text-xs font-medium">ASX 200</div>
        <div className="text-white font-bold text-lg">7,892.40</div>
        <div className="text-emerald-400 text-xs">▲ +0.42%</div>
      </div>
      <div className="bg-slate-800/90 px-4 py-3 rounded-lg backdrop-blur">
        <div className="text-yellow-400 text-xs font-medium">DAX 40</div>
        <div className="text-white font-bold text-lg">18,567.34</div>
        <div className="text-red-400 text-xs">▼ -0.15%</div>
      </div>
    </div>
  </div>
);

interface MarketCard {
  title: string;
  description: string;
  features: string[];
  href: string;
  graphic: React.ReactNode;
}

export default function MarketsPage() {
  const markets: MarketCard[] = [
    {
      title: 'Forex CFDs',
      description: "The world's biggest and most dynamic market, open around the clock and boasting an incredible daily trading volume of over $6 trillion. There are always opportunities to be found in our 40+ currency pairs by predicting their movements.",
      features: ['40+ currency pairs', 'Up to 30:1 leverage', 'Tight spreads from 0.0+ pips'],
      href: '/markets/forex',
      graphic: <ForexGraphic />,
    },
    {
      title: 'Share CFDs',
      description: 'Take advantage of up to 5:1 leverage to trade shares from HKEX, ASX and U.S. stock markets with a smaller initial investment.',
      features: ['Shares from Global markets', 'Trade long and short', 'Up to 5:1 leverage'],
      href: '/markets/shares',
      graphic: <SharesGraphic />,
    },
    {
      title: 'Metal CFDs',
      description: 'Trade CFDs on precious metals for easy diversification and speculation benefits without having to physically own it.',
      features: ['Competitive spread for Gold from 0.03', 'Up to 20:1 leverage', 'No expiry and no rollovers'],
      href: '/markets/commodities',
      graphic: <MetalsGraphic />,
    },
    {
      title: 'Commodity CFDs',
      description: 'Energy like Oil and Gas can always be an important part of your portfolio. Trade both Spot and Futures of Oil and Gas with BCR.',
      features: ['Both Spot and Futures CFDs', 'Up to 20:1 leverage', 'Trade Energy CFDs on MT4/5 with ease'],
      href: '/markets/commodities',
      graphic: <CommoditiesGraphic />,
    },
    {
      title: 'Index CFDs',
      description: "Choose from a wide range of world Index CFDs, including ASX200, UK100, HKG50, and U.S. indices. Trade with BCR's customised Index CFDs with no expiry to avoid mandatory liquidation.",
      features: ['Top 10 popular Index CFDs', 'Up to 20:1 leverage', 'No expiry'],
      href: '/markets/indices',
      graphic: <IndicesGraphic />,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Range of Markets
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Experience a world-class trading environment and bridge the world's markets with BCR.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition"
            >
              Open an Account
            </Link>
            <Link
              href="/demo"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Market Navigation Tabs */}
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {markets.map((market) => (
              <Link
                key={market.title}
                href={market.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg transition"
              >
                {market.title.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {markets.map((market, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={market.title}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden`}
                >
                  {/* Graphic Section */}
                  <div className="w-full md:w-2/5">
                    {market.graphic}
                  </div>
                  
                  {/* Content Section */}
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {market.title}
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {market.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {market.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                          <ArrowRight className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={market.href}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition w-fit"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">300+</div>
              <div className="text-slate-300">Trading Instruments</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">0.0</div>
              <div className="text-slate-300">Spreads From</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">30:1</div>
              <div className="text-slate-300">Max Leverage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">24/5</div>
              <div className="text-slate-300">Trading Available</div>
            </div>
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
