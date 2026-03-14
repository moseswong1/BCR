"use client";

import React from "react";
import Link from "next/link";
import { Clock, Info, ChevronDown, Phone, Mail, FileText, TrendingUp } from "lucide-react";

// Types
type ContractRow = {
  name: string;
  symbol: string;
  contractSize: string;
  tradingHours: string;
  breakTime: string;
  leverage: string;
  commission?: string;
};

type ContractGroup = {
  title: string;
  rows: ContractRow[];
};

// Contract Specifications Data
const CONTRACT_GROUPS: ContractGroup[] = [
  {
    title: "Forex CFDs",
    rows: [
      { name: "Euro vs US Dollar", symbol: "EURUSD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Japanese Yen", symbol: "USDJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Australian Dollar vs US Dollar", symbol: "AUDUSD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "British Pound vs US Dollar", symbol: "GBPUSD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "New Zealand Dollar vs US Dollar", symbol: "NZDUSD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Canadian Dollar", symbol: "USDCAD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Swiss Franc", symbol: "USDCHF", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs Swiss Franc", symbol: "EURCHF", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs British Pound", symbol: "EURGBP", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs Japanese Yen", symbol: "EURJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Canadian Dollar vs Japanese Yen", symbol: "CADJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Australian Dollar vs New Zealand Dollar", symbol: "AUDNZD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Australian Dollar vs Japanese Yen", symbol: "AUDJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "British Pound vs Swiss Franc", symbol: "GBPCHF", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "British Pound vs Japanese Yen", symbol: "GBPJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Canadian Dollar vs Swiss Franc", symbol: "CADCHF", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "British Pound vs Australian Dollar", symbol: "GBPAUD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Swiss Franc vs Japanese Yen", symbol: "CHFJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Australian Dollar vs Canadian Dollar", symbol: "AUDCAD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs Australian Dollar", symbol: "EURAUD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs Canadian Dollar", symbol: "EURCAD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "New Zealand Dollar vs Japanese Yen", symbol: "NZDJPY", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Australian Dollar vs Swiss Franc", symbol: "AUDCHF", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "New Zealand Dollar vs Swiss Franc", symbol: "NZDCHF", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "British Pound vs New Zealand Dollar", symbol: "GBPNZD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "British Pound vs Canadian Dollar", symbol: "GBPCAD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "New Zealand Dollar vs Canadian Dollar", symbol: "NZDCAD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs New Zealand Dollar", symbol: "EURNZD", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Chinese Yuan (Offshore)", symbol: "USDCNH", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Mexican Peso", symbol: "USDMXN", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Norwegian Krone", symbol: "USDNOK", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs Swedish Krona", symbol: "USDSEK", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "US Dollar vs South African Rand", symbol: "USDZAR", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs Norwegian Krone", symbol: "EURNOK", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
      { name: "Euro vs Swedish Krona", symbol: "EURSEK", contractSize: "100,000 Units of Base Currency", tradingHours: "21:05 - 20:55 (Sun - Fri)", breakTime: "20:55 - 21:11", leverage: "30:1 (3.33%)" },
    ],
  },
  {
    title: "Precious Metal CFDs",
    rows: [
      { name: "Gold", symbol: "XAUUSD", contractSize: "100 oz", tradingHours: "22:01 - 20:45 (Sun - Fri)", breakTime: "21:00 - 22:01", leverage: "20:1 (5.00%)" },
      { name: "Silver", symbol: "XAGUSD", contractSize: "5,000 oz", tradingHours: "22:01 - 20:45 (Sun - Fri)", breakTime: "21:00 - 22:01", leverage: "10:1 (10.00%)" },
      { name: "Silver Mini", symbol: "XAGUSDmin", contractSize: "1,000 oz", tradingHours: "22:01 - 20:45 (Sun - Fri)", breakTime: "21:00 - 22:01", leverage: "10:1 (10.00%)" },
    ],
  },
  {
    title: "Commodity CFDs",
    rows: [
      { name: "Crude Oil Future", symbol: "#CL", contractSize: "1,000 barrels", tradingHours: "22:01 - 20:45 (Sun - Fri)", breakTime: "21:00 - 22:01", leverage: "10:1 (10.00%)" },
      { name: "Crude Oil", symbol: "XTIUSD", contractSize: "1,000 barrels", tradingHours: "22:01 - 20:45 (Sun - Fri)", breakTime: "21:00 - 22:01", leverage: "10:1 (10.00%)" },
      { name: "Brent Crude Oil", symbol: "XBRUSD", contractSize: "1,000 barrels", tradingHours: "00:01 - 20:45 (Mon - Fri)", breakTime: "21:00 - 00:01", leverage: "10:1 (10.00%)" },
      { name: "Natural Gas", symbol: "XNGUSD", contractSize: "10,000 MMBtu", tradingHours: "22:01 - 20:45 (Sun - Fri)", breakTime: "21:00 - 22:01", leverage: "10:1 (10.00%)" },
    ],
  },
  {
    title: "Spot Index CFDs",
    rows: [
      { name: "ASX SPI 200", symbol: "#AUS200", contractSize: "10 × AUS200", tradingHours: "23:01 - 19:45 (Sun - Fri)", breakTime: "05:30 - 06:31, 19:45 - 23:01", leverage: "20:1 (5.00%)" },
      { name: "DAX 40", symbol: "#GER40", contractSize: "10 × GER40", tradingHours: "07:01 - 20:45 (Mon - Fri)", breakTime: "20:45 - 07:01", leverage: "20:1 (5.00%)" },
      { name: "EURO STOXX 50", symbol: "#EUSTX50", contractSize: "10 × EUSTX50", tradingHours: "07:01 - 20:45 (Mon - Fri)", breakTime: "20:45 - 07:01", leverage: "20:1 (5.00%)" },
      { name: "FRANCE CAC 40", symbol: "#FRA40", contractSize: "10 × FRA40", tradingHours: "07:01 - 20:45 (Mon - Fri)", breakTime: "20:45 - 07:01", leverage: "20:1 (5.00%)" },
      { name: "SPAIN IBEX 35", symbol: "#ESP35", contractSize: "10 × ESP35", tradingHours: "08:01 - 18:45 (Mon - Fri)", breakTime: "18:45 - 08:01", leverage: "10:1 (10.00%)" },
      { name: "FTSE 100", symbol: "#UK100", contractSize: "10 × UK100", tradingHours: "01:01 - 20:45 (Mon - Fri)", breakTime: "20:45 - 01:01", leverage: "20:1 (5.00%)" },
      { name: "CHINA A50", symbol: "#CHN50", contractSize: "10 × CHN50", tradingHours: "01:01 - 18:00 (Mon - Sun)", breakTime: "08:30 - 09:01", leverage: "10:1 (10.00%)" },
      { name: "HANG SENG 50", symbol: "#HKG50", contractSize: "100 × HKG50", tradingHours: "01:16 - 15:45 (Mon - Fri)", breakTime: "04:00 - 05:01, 08:30 - 09:16, 15:45 - 01:16", leverage: "10:1 (10.00%)" },
      { name: "Nikkei 225", symbol: "#JPN225", contractSize: "10 × JPN225", tradingHours: "22:01 - 20:45 (Mon - Fri)", breakTime: "20:00 - 22:01", leverage: "20:1 (5.00%)" },
      { name: "S&P 500", symbol: "#US500", contractSize: "10 × US500", tradingHours: "22:01 - 20:45 (Mon - Fri)", breakTime: "20:00 - 22:01", leverage: "20:1 (5.00%)" },
      { name: "Dow Jones 30", symbol: "#US30", contractSize: "10 × US30", tradingHours: "22:01 - 20:45 (Mon - Fri)", breakTime: "20:00 - 22:01", leverage: "20:1 (5.00%)" },
      { name: "NASDAQ 100", symbol: "#US100", contractSize: "10 × US100", tradingHours: "22:01 - 20:45 (Mon - Fri)", breakTime: "20:00 - 22:01", leverage: "20:1 (5.00%)" },
    ],
  },
  {
    title: "United States Share CFDs",
    rows: [
      { name: "Apple Inc.", symbol: "#AAPL", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "American Express", symbol: "#AXP", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Bank of America", symbol: "#BAC", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Boeing Co.", symbol: "#BA", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Citigroup Inc.", symbol: "#C", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Walt Disney", symbol: "#DIS", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "International Bus Machine", symbol: "#IBM", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Intel Corp.", symbol: "#INTC", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Coca-Cola Co.", symbol: "#KO", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "McDonald's Corp.", symbol: "#MCD", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Microsoft Corp.", symbol: "#MSFT", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "NVIDIA Corp.", symbol: "#NVDA", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Tesla Inc.", symbol: "#TSLA", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Alibaba Group Holding Ltd.", symbol: "#BABA", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Verizon", symbol: "#VZ", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Amazon", symbol: "#AMZN", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "VinFast Auto Ltd", symbol: "#VFS", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "American Electric Power", symbol: "#AEP", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Pfizer Inc.", symbol: "#PFE", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Cisco Systems", symbol: "#CSCO", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Netflix", symbol: "#NFLX", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Nike", symbol: "#NKE", contractSize: "100 Shares", tradingHours: "13:31 - 20:00 (Mon - Fri)", breakTime: "NIL", leverage: "5:1 (20.00%)", commission: "$20" },
    ],
  },
  {
    title: "Hong Kong Share CFDs",
    rows: [
      { name: "HSBC Holdings PLC", symbol: "#0005.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "China Resources Beer Holdings Co Ltd", symbol: "#0291.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Tencent Holdings Ltd", symbol: "#0700.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "China Telecom Corp Ltd", symbol: "#0728.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "China Mobile Ltd", symbol: "#0941.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "China Shenhua Energy Co Ltd", symbol: "#1088.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Xiaomi Corp", symbol: "#1810.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Sinopec Corp", symbol: "#1928.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "China Life Insurance Co Ltd", symbol: "#2628.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Bank of Communications Co Ltd", symbol: "#3328.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
      { name: "Bank of China Ltd", symbol: "#3988.HK", contractSize: "100 Shares", tradingHours: "01:31 - 08:00 (Mon - Sun)", breakTime: "04:00 - 05:01", leverage: "5:1 (20.00%)", commission: "$20" },
    ],
  },
];

function PillNav() {
  return (
    <section className="border-b border-t border-[#EFEFF0] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          <Link
            href="/spreads-commission-swap"
            className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
          >
            Spreads, Commission &amp; Swap
          </Link>
          <Link
            href="/margin-leverage"
            className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
          >
            Margin &amp; Leverage
          </Link>
          <Link
            href="/trading-hours"
            className="whitespace-nowrap text-gray-500 hover:text-[#FFB800]"
          >
            Trading Hours
          </Link>
          <Link href="/contract-specifications" className="whitespace-nowrap text-[#FFB800]">
            Contract Specifications
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContractAccordion({ groups }: { groups: ContractGroup[] }) {
  const [open, setOpen] = React.useState<string | null>(groups?.[0]?.title ?? null);
  const hasCommission = (group: ContractGroup) => group.rows.some(r => r.commission);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      {groups.map((g) => {
        const isOpen = open === g.title;
        const showCommission = hasCommission(g);
        return (
          <div key={g.title} className="border-t first:border-t-0 border-gray-200">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : g.title)}
              className={[
                "w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left",
                "bg-gray-100/60 hover:bg-gray-900 hover:text-[#FFD400]",
                "transition-colors",
              ].join(" ")}
            >
              <span className="font-semibold text-sm sm:text-base flex items-center gap-3">
                <TrendingUp className="h-4 w-4 opacity-60" />
                {g.title}
                <span className="text-xs font-normal text-gray-500">
                  ({g.rows.length} instruments)
                </span>
              </span>
              <ChevronDown
                className={[
                  "h-5 w-5 shrink-0 transition-transform",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>

            <div
              className={[
                "transition-[max-height] duration-300 ease-out overflow-hidden",
                isOpen ? "max-h-[5000px]" : "max-h-0",
              ].join(" ")}
            >
              <div className="p-4 sm:p-6">
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="min-w-[900px] w-full text-xs sm:text-sm text-left text-gray-800">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-3 font-semibold">INSTRUMENT</th>
                        <th className="py-3 px-3 font-semibold">SYMBOL</th>
                        <th className="py-3 px-3 font-semibold">CONTRACT SIZE</th>
                        <th className="py-3 px-3 font-semibold">TRADING HOURS (GMT)</th>
                        <th className="py-3 px-3 font-semibold">BREAK TIME (GMT)</th>
                        <th className="py-3 px-3 font-semibold">LEVERAGE</th>
                        {showCommission && (
                          <th className="py-3 px-3 font-semibold">COMMISSION</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {g.rows.map((r, idx) => (
                        <tr key={`${g.title}-${r.symbol}-${idx}`} className="border-t border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-3 font-medium text-gray-900">{r.name}</td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-xs font-semibold">
                              {r.symbol}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-gray-600">{r.contractSize}</td>
                          <td className="py-3 px-3 text-gray-600">{r.tradingHours}</td>
                          <td className="py-3 px-3 text-gray-600">{r.breakTime}</td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-semibold">
                              {r.leverage}
                            </span>
                          </td>
                          {showCommission && (
                            <td className="py-3 px-3 text-gray-600">{r.commission ?? "—"}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-gray-500">
                  All times displayed are in GMT (Greenwich Mean Time). Roll Over Time: GMT 21:00 daily.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <div className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <aside className="w-full lg:w-[380px] shrink-0">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="border-t-4 border-[#FFD400] px-6 py-7">
          <h3 className="text-2xl font-semibold text-gray-900">Need Help?</h3>
          <p className="mt-2 text-sm text-gray-700">
            Our team is available 24 hours a day, Monday to Friday.
          </p>
        </div>

        <div className="px-6 pb-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Info className="h-5 w-5 text-amber-700" />
            </div>
            <div className="text-sm text-gray-700">Help Center</div>
          </div>

          <a
            href="tel:+61284598050"
            className="block rounded-xl bg-gray-100 px-4 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-200"
          >
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +61 2 8459 8050
            </span>
          </a>

          <a
            href="mailto:info@au.thebcr.com"
            className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50"
          >
            <div className="h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center">
              <Mail className="h-5 w-5 text-amber-700" />
            </div>
            <div className="text-sm font-semibold text-gray-900">Email Us</div>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default function ContractSpecificationsPage() {
  return (
    <div className="bg-white">
      {/* Gold hero band */}
      <section className="border-b border-gray-200 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="text-xs font-medium tracking-[0.3em] text-white/70 uppercase">
            Trading / Trading Conditions
          </div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Contract Specifications
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-white/80">
            Complete specifications for all tradable instruments including contract sizes, trading hours, and leverage.
          </p>
          <div className="mt-6 h-[2px] w-24 bg-white/70" />
        </div>
      </section>

      <PillNav />

      {/* Content panel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative px-4 sm:px-8 lg:px-10 py-10 sm:py-12">
            {/* Intro */}
            <div className="max-w-3xl">
              <div className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                Trading Instruments
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
                BCR Contract Specifications
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                The times displayed in the chart are in GMT (Greenwich Mean Time). Roll Over Time: GMT 21:00 daily.
                Review the complete specifications for each instrument before trading.
              </p>
            </div>

            {/* Info cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <InfoCard icon={<Clock className="h-5 w-5 text-amber-700" />} title="Server Time">
                All trading times are displayed in GMT + 0. Server time and charts follow this timezone.
              </InfoCard>
              <InfoCard icon={<TrendingUp className="h-5 w-5 text-amber-700" />} title="Leverage">
                Leverage varies by instrument type. Forex offers up to 30:1, while shares typically offer 5:1.
              </InfoCard>
              <InfoCard icon={<FileText className="h-5 w-5 text-amber-700" />} title="Contract Size">
                Each instrument has a specific contract size. 1 lot of Forex equals 100,000 units of base currency.
              </InfoCard>
            </div>

            {/* Main content with sidebar */}
            <div className="mt-10 flex flex-col lg:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <ContractAccordion groups={CONTRACT_GROUPS} />
              </div>
              <ContactCard />
            </div>

            {/* CTA strip */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  Explore more opportunities &amp; potential with BCR now
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  Sign up in minutes and fund in seconds.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-2.5 text-sm font-semibold text-black hover:bg-[#f5c800]"
                >
                  Open an Account
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
