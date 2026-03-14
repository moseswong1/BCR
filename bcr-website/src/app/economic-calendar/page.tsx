"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight, Filter, X, Check } from "lucide-react";

// Country data with flags
const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "EU", name: "Eurozone", flag: "🇪🇺" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰" },
];

// Sample economic events data - in real implementation this would come from an API
const generateEvents = () => {
  const events = [
    // Mar 13, 2026 (Thursday) - Heavy day
    { date: "2026-03-13", time: "00:30", country: "AU", event: "Employment Change (Feb)", importance: "high", actual: "+30.5K", forecast: "+28.0K", previous: "+44.0K" },
    { date: "2026-03-13", time: "00:30", country: "AU", event: "Unemployment Rate (Feb)", importance: "high", actual: "4.0%", forecast: "4.1%", previous: "4.1%" },
    { date: "2026-03-13", time: "00:30", country: "AU", event: "Participation Rate (Feb)", importance: "medium", actual: "67.3%", forecast: "67.2%", previous: "67.2%" },
    { date: "2026-03-13", time: "02:00", country: "CN", event: "Industrial Production YoY (Feb)", importance: "medium", actual: "", forecast: "5.3%", previous: "6.2%" },
    { date: "2026-03-13", time: "02:00", country: "CN", event: "Retail Sales YoY (Feb)", importance: "medium", actual: "", forecast: "4.0%", previous: "3.7%" },
    { date: "2026-03-13", time: "02:00", country: "CN", event: "Fixed Asset Investment YoY (Feb)", importance: "low", actual: "", forecast: "3.2%", previous: "3.2%" },
    { date: "2026-03-13", time: "07:00", country: "DE", event: "CPI MoM Final (Feb)", importance: "medium", actual: "", forecast: "0.4%", previous: "-0.2%" },
    { date: "2026-03-13", time: "07:00", country: "DE", event: "CPI YoY Final (Feb)", importance: "high", actual: "", forecast: "2.3%", previous: "2.3%" },
    { date: "2026-03-13", time: "07:00", country: "GB", event: "GDP MoM (Jan)", importance: "high", actual: "", forecast: "0.1%", previous: "-0.1%" },
    { date: "2026-03-13", time: "07:00", country: "GB", event: "Industrial Production MoM (Jan)", importance: "medium", actual: "", forecast: "0.2%", previous: "0.5%" },
    { date: "2026-03-13", time: "07:00", country: "GB", event: "Manufacturing Production MoM (Jan)", importance: "medium", actual: "", forecast: "0.1%", previous: "0.3%" },
    { date: "2026-03-13", time: "07:00", country: "GB", event: "Trade Balance (Jan)", importance: "low", actual: "", forecast: "-£17.5B", previous: "-£18.9B" },
    { date: "2026-03-13", time: "10:00", country: "EU", event: "Industrial Production MoM (Jan)", importance: "medium", actual: "", forecast: "0.5%", previous: "-1.1%" },
    { date: "2026-03-13", time: "12:30", country: "CA", event: "Building Permits MoM (Jan)", importance: "low", actual: "", forecast: "1.5%", previous: "-5.2%" },
    { date: "2026-03-13", time: "13:30", country: "US", event: "Initial Jobless Claims", importance: "high", actual: "", forecast: "218K", previous: "221K" },
    { date: "2026-03-13", time: "13:30", country: "US", event: "Continuing Jobless Claims", importance: "medium", actual: "", forecast: "1.87M", previous: "1.89M" },
    { date: "2026-03-13", time: "13:30", country: "US", event: "PPI MoM (Feb)", importance: "high", actual: "", forecast: "0.3%", previous: "0.4%" },
    { date: "2026-03-13", time: "13:30", country: "US", event: "PPI YoY (Feb)", importance: "high", actual: "", forecast: "3.3%", previous: "3.5%" },
    { date: "2026-03-13", time: "13:30", country: "US", event: "Core PPI MoM (Feb)", importance: "high", actual: "", forecast: "0.2%", previous: "0.3%" },
    { date: "2026-03-13", time: "13:30", country: "US", event: "Core PPI YoY (Feb)", importance: "high", actual: "", forecast: "3.5%", previous: "3.6%" },
    { date: "2026-03-13", time: "15:00", country: "US", event: "Michigan Consumer Sentiment Prel (Mar)", importance: "medium", actual: "", forecast: "76.5", previous: "76.9" },
    { date: "2026-03-13", time: "15:00", country: "US", event: "Michigan Inflation Expectations (Mar)", importance: "medium", actual: "", forecast: "4.3%", previous: "4.3%" },
    { date: "2026-03-13", time: "18:00", country: "US", event: "Baker Hughes Rig Count", importance: "low", actual: "", forecast: "", previous: "592" },
    
    // Mar 14, 2026 (Saturday)
    { date: "2026-03-14", time: "09:00", country: "CN", event: "M2 Money Supply YoY (Feb)", importance: "low", actual: "", forecast: "7.0%", previous: "7.0%" },
    { date: "2026-03-14", time: "09:00", country: "CN", event: "Total Social Financing (Feb)", importance: "low", actual: "", forecast: "2.0T", previous: "6.5T" },
    { date: "2026-03-14", time: "09:00", country: "CN", event: "Outstanding Loan Growth YoY (Feb)", importance: "low", actual: "", forecast: "7.5%", previous: "7.5%" },
    
    // Mar 15, 2026 (Sunday) - Weekend
    
    // Mar 16, 2026 (Monday)
    { date: "2026-03-16", time: "00:00", country: "JP", event: "Bank Holiday - Spring Equinox", importance: "low", actual: "", forecast: "", previous: "" },
    { date: "2026-03-16", time: "05:30", country: "JP", event: "Industrial Production MoM Final (Jan)", importance: "low", actual: "", forecast: "-1.1%", previous: "0.3%" },
    { date: "2026-03-16", time: "07:00", country: "IT", event: "CPI MoM Final (Feb)", importance: "medium", actual: "", forecast: "0.2%", previous: "-0.6%" },
    { date: "2026-03-16", time: "10:00", country: "EU", event: "Trade Balance (Jan)", importance: "low", actual: "", forecast: "€14.0B", previous: "€15.5B" },
    { date: "2026-03-16", time: "12:30", country: "CA", event: "Manufacturing Sales MoM (Jan)", importance: "low", actual: "", forecast: "0.8%", previous: "-0.5%" },
    { date: "2026-03-16", time: "13:30", country: "US", event: "NY Empire State Manufacturing Index (Mar)", importance: "medium", actual: "", forecast: "-5.0", previous: "-5.7" },
    { date: "2026-03-16", time: "15:00", country: "US", event: "NAHB Housing Market Index (Mar)", importance: "medium", actual: "", forecast: "42", previous: "42" },
    
    // Mar 17, 2026 (Tuesday)
    { date: "2026-03-17", time: "00:30", country: "AU", event: "RBA Meeting Minutes", importance: "high", actual: "", forecast: "", previous: "" },
    { date: "2026-03-17", time: "07:00", country: "DE", event: "ZEW Economic Sentiment (Mar)", importance: "high", actual: "", forecast: "20.0", previous: "26.0" },
    { date: "2026-03-17", time: "10:00", country: "EU", event: "ZEW Economic Sentiment (Mar)", importance: "medium", actual: "", forecast: "18.5", previous: "24.2" },
    { date: "2026-03-17", time: "13:30", country: "US", event: "Housing Starts (Feb)", importance: "medium", actual: "", forecast: "1.38M", previous: "1.37M" },
    { date: "2026-03-17", time: "13:30", country: "US", event: "Building Permits (Feb)", importance: "medium", actual: "", forecast: "1.45M", previous: "1.48M" },
    { date: "2026-03-17", time: "13:30", country: "CA", event: "CPI MoM (Feb)", importance: "high", actual: "", forecast: "0.6%", previous: "0.1%" },
    { date: "2026-03-17", time: "13:30", country: "CA", event: "CPI YoY (Feb)", importance: "high", actual: "", forecast: "2.9%", previous: "1.9%" },
    
    // Mar 18, 2026 (Wednesday) - FOMC Day
    { date: "2026-03-18", time: "00:50", country: "JP", event: "Trade Balance (Feb)", importance: "low", actual: "", forecast: "-¥700B", previous: "-¥758B" },
    { date: "2026-03-18", time: "07:00", country: "GB", event: "CPI MoM (Feb)", importance: "high", actual: "", forecast: "0.5%", previous: "-0.1%" },
    { date: "2026-03-18", time: "07:00", country: "GB", event: "CPI YoY (Feb)", importance: "high", actual: "", forecast: "2.9%", previous: "3.0%" },
    { date: "2026-03-18", time: "07:00", country: "GB", event: "Core CPI YoY (Feb)", importance: "high", actual: "", forecast: "3.6%", previous: "3.7%" },
    { date: "2026-03-18", time: "10:00", country: "EU", event: "CPI YoY Final (Feb)", importance: "high", actual: "", forecast: "2.4%", previous: "2.4%" },
    { date: "2026-03-18", time: "10:00", country: "EU", event: "Core CPI YoY Final (Feb)", importance: "high", actual: "", forecast: "2.6%", previous: "2.6%" },
    { date: "2026-03-18", time: "15:00", country: "US", event: "Existing Home Sales (Feb)", importance: "medium", actual: "", forecast: "4.0M", previous: "4.08M" },
    { date: "2026-03-18", time: "19:00", country: "US", event: "FOMC Interest Rate Decision", importance: "high", actual: "", forecast: "4.50%", previous: "4.50%" },
    { date: "2026-03-18", time: "19:00", country: "US", event: "FOMC Statement", importance: "high", actual: "", forecast: "", previous: "" },
    { date: "2026-03-18", time: "19:30", country: "US", event: "FOMC Press Conference", importance: "high", actual: "", forecast: "", previous: "" },
    
    // Mar 19, 2026 (Thursday)
    { date: "2026-03-19", time: "00:00", country: "JP", event: "BoJ Interest Rate Decision", importance: "high", actual: "", forecast: "0.50%", previous: "0.50%" },
    { date: "2026-03-19", time: "06:30", country: "JP", event: "BoJ Press Conference", importance: "high", actual: "", forecast: "", previous: "" },
    { date: "2026-03-19", time: "08:30", country: "CH", event: "SNB Interest Rate Decision", importance: "high", actual: "", forecast: "0.25%", previous: "0.50%" },
    { date: "2026-03-19", time: "12:00", country: "GB", event: "BoE Interest Rate Decision", importance: "high", actual: "", forecast: "4.50%", previous: "4.50%" },
    { date: "2026-03-19", time: "13:30", country: "US", event: "Philadelphia Fed Manufacturing Index (Mar)", importance: "medium", actual: "", forecast: "5.0", previous: "18.1" },
    { date: "2026-03-19", time: "13:30", country: "US", event: "Initial Jobless Claims", importance: "high", actual: "", forecast: "220K", previous: "218K" },
  ];
  
  return events;
};

const allEvents = generateEvents();

// Helper to format date for display
const formatDateDisplay = (dateStr: string) => {
  const date = new Date(dateStr);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// Helper to get short date
const formatShortDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getDate()}`;
};

// Generate week dates
const getWeekDates = (startDate: Date) => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

export default function EconomicCalendarPage() {
  // Start from March 13, 2026 (the reference date)
  const [weekStart, setWeekStart] = useState(new Date("2026-03-13"));
  const [selectedDate, setSelectedDate] = useState("2026-03-13");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedImportance, setSelectedImportance] = useState<string[]>(["high", "medium", "low"]);
  const [showCountryFilter, setShowCountryFilter] = useState(false);
  const [showImportanceFilter, setShowImportanceFilter] = useState(false);

  const weekDates = useMemo(() => getWeekDates(weekStart), [weekStart]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const dateMatch = event.date === selectedDate;
      const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(event.country);
      const importanceMatch = selectedImportance.includes(event.importance);
      return dateMatch && countryMatch && importanceMatch;
    });
  }, [selectedDate, selectedCountries, selectedImportance]);

  // Navigation functions
  const goToPreviousWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(weekStart.getDate() - 7);
    setWeekStart(newStart);
    setSelectedDate(newStart.toISOString().split('T')[0]);
  };

  const goToNextWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(weekStart.getDate() + 7);
    setWeekStart(newStart);
    setSelectedDate(newStart.toISOString().split('T')[0]);
  };

  const goToToday = () => {
    const today = new Date("2026-03-14"); // Simulating "today" as March 14, 2026
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Start week on Monday
    const weekStartDate = new Date(today);
    weekStartDate.setDate(today.getDate() + diff);
    setWeekStart(new Date("2026-03-13")); // Keep consistent with sample data
    setSelectedDate(today.toISOString().split('T')[0]);
  };

  const toggleCountry = (code: string) => {
    setSelectedCountries(prev => 
      prev.includes(code) 
        ? prev.filter(c => c !== code)
        : [...prev, code]
    );
  };

  const toggleImportance = (level: string) => {
    setSelectedImportance(prev => 
      prev.includes(level)
        ? prev.filter(i => i !== level)
        : [...prev, level]
    );
  };

  const clearCountryFilter = () => setSelectedCountries([]);
  const selectAllCountries = () => setSelectedCountries(countries.map(c => c.code));

  const getCountryFlag = (code: string) => {
    const country = countries.find(c => c.code === code);
    return country?.flag || "🏳️";
  };

  const getImportanceStyle = (importance: string) => {
    switch (importance) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#070B0F]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Economic Data
              <span className="h-1 w-1 rounded-full bg-teal-400" />
              Market-Moving Events
            </p>

            <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Economic Calendar
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Stay ahead of market-moving macro events. Track economic releases, central bank decisions, and key indicators that drive volatility across all asset classes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#calendar"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFD400] px-5 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                View Calendar
              </a>
              <Link
                href="/market-analysis"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Back to Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16" id="calendar">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8">
          Calendar / Economic Events
        </div>

        {/* Filter Bar */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Date Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={goToPreviousWeek}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              
              <div className="flex gap-1 overflow-x-auto pb-2 lg:pb-0">
                {weekDates.map((date) => {
                  const isSelected = date === selectedDate;
                  const isWeekend = new Date(date).getDay() === 0 || new Date(date).getDay() === 6;
                  const eventsCount = allEvents.filter(e => e.date === date).length;
                  
                  return (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`flex flex-col items-center px-3 py-2 rounded-xl min-w-[70px] transition-all ${
                        isSelected
                          ? "bg-slate-900 text-white"
                          : isWeekend
                          ? "bg-slate-100 text-slate-400 hover:bg-slate-200"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <span className="text-xs font-medium">
                        {formatShortDate(date)}
                      </span>
                      <span className="text-[10px] mt-1 opacity-70">
                        {eventsCount > 0 ? `${eventsCount} events` : "—"}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={goToNextWeek}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
              
              <button
                onClick={goToToday}
                className="px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition"
              >
                Today
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {/* Importance Filter */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowImportanceFilter(!showImportanceFilter);
                    setShowCountryFilter(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition text-sm font-medium"
                >
                  <Filter className="w-4 h-4" />
                  Importance
                  {selectedImportance.length < 3 && (
                    <span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full">
                      {selectedImportance.length}
                    </span>
                  )}
                </button>
                
                {showImportanceFilter && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-20 min-w-[200px]">
                    <div className="space-y-2">
                      {[
                        { level: "high", label: "High Impact", color: "bg-red-500" },
                        { level: "medium", label: "Medium Impact", color: "bg-yellow-500" },
                        { level: "low", label: "Low Impact", color: "bg-green-500" },
                      ].map(({ level, label, color }) => (
                        <label
                          key={level}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedImportance.includes(level)}
                            onChange={() => toggleImportance(level)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            selectedImportance.includes(level) 
                              ? "bg-teal-600 border-teal-600" 
                              : "border-slate-300"
                          }`}>
                            {selectedImportance.includes(level) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div className={`w-3 h-3 rounded-full ${color}`} />
                          <span className="text-sm text-slate-700">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Country Filter */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowCountryFilter(!showCountryFilter);
                    setShowImportanceFilter(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition text-sm font-medium"
                >
                  <span>🌍</span>
                  Countries
                  {selectedCountries.length > 0 && (
                    <span className="bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full">
                      {selectedCountries.length}
                    </span>
                  )}
                </button>
                
                {showCountryFilter && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-20 w-[320px] max-h-[400px] overflow-y-auto">
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
                      <span className="text-sm font-semibold text-slate-700">Filter by Country</span>
                      <div className="flex gap-2">
                        <button
                          onClick={selectAllCountries}
                          className="text-xs text-teal-600 hover:text-teal-700"
                        >
                          Select All
                        </button>
                        <span className="text-slate-300">|</span>
                        <button
                          onClick={clearCountryFilter}
                          className="text-xs text-slate-500 hover:text-slate-700"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {countries.map((country) => (
                        <label
                          key={country.code}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCountries.includes(country.code)}
                            onChange={() => toggleCountry(country.code)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                            selectedCountries.includes(country.code) 
                              ? "bg-teal-600 border-teal-600" 
                              : "border-slate-300"
                          }`}>
                            {selectedCountries.includes(country.code) && (
                              <Check className="w-2.5 h-2.5 text-white" />
                            )}
                          </div>
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-sm text-slate-700">{country.code}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCountries.length > 0 || selectedImportance.length < 3) && (
            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Active filters:</span>
              {selectedImportance.length < 3 && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs border border-slate-200">
                  Importance: {selectedImportance.map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(", ")}
                  <button onClick={() => setSelectedImportance(["high", "medium", "low"])} className="ml-1 text-slate-400 hover:text-slate-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCountries.length > 0 && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs border border-slate-200">
                  Countries: {selectedCountries.length} selected
                  <button onClick={clearCountryFilter} className="ml-1 text-slate-400 hover:text-slate-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Selected Date Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {formatDateDisplay(selectedDate)}
          </h2>
          <span className="text-sm text-slate-500">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <div className="col-span-1">Time</div>
            <div className="col-span-1">Country</div>
            <div className="col-span-4">Event</div>
            <div className="col-span-2 text-center">Importance</div>
            <div className="col-span-1 text-right">Actual</div>
            <div className="col-span-1 text-right">Forecast</div>
            <div className="col-span-2 text-right">Previous</div>
          </div>

          {/* Events List */}
          <div className="divide-y divide-slate-100">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, idx) => (
                <div 
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 hover:bg-slate-50 transition-colors"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{getCountryFlag(event.country)}</span>
                        <span className="text-sm font-medium text-slate-600">{event.country}</span>
                        <span className="text-sm text-slate-400">{event.time}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold capitalize border ${getImportanceStyle(event.importance)}`}>
                        {event.importance}
                      </span>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{event.event}</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500 text-xs">Actual</span>
                        <p className={`font-semibold ${event.actual ? "text-slate-900" : "text-slate-400"}`}>
                          {event.actual || "—"}
                        </p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs">Forecast</span>
                        <p className="font-semibold text-slate-700">{event.forecast || "—"}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 text-xs">Previous</span>
                        <p className="font-semibold text-slate-700">{event.previous || "—"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:contents">
                    <div className="col-span-1 text-sm text-slate-600 font-medium">{event.time}</div>
                    <div className="col-span-1 flex items-center gap-1">
                      <span className="text-lg">{getCountryFlag(event.country)}</span>
                      <span className="text-sm text-slate-600">{event.country}</span>
                    </div>
                    <div className="col-span-4 font-medium text-slate-900">{event.event}</div>
                    <div className="col-span-2 text-center">
                      <span className={`inline-block px-3 py-1 rounded text-xs font-semibold capitalize border ${getImportanceStyle(event.importance)}`}>
                        {event.importance}
                      </span>
                    </div>
                    <div className={`col-span-1 text-right text-sm font-semibold ${event.actual ? "text-slate-900" : "text-slate-400"}`}>
                      {event.actual || "—"}
                    </div>
                    <div className="col-span-1 text-right text-sm text-slate-600">{event.forecast || "—"}</div>
                    <div className="col-span-2 text-right text-sm text-slate-600">{event.previous || "—"}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">No events found for this date</p>
                <p className="text-sm text-slate-400 mt-1">Try adjusting your filters or selecting a different date</p>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
          <span className="text-slate-500 font-medium">Impact Legend:</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-slate-600">High</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-slate-600">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-slate-600">Low</span>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Real-Time Updates",
              description: "Data is refreshed as results are released. Actual values appear once announced."
            },
            {
              title: "Forecast vs Actual",
              description: "Compare economist forecasts against actual results to gauge market surprise potential."
            },
            {
              title: "Impact Ratings",
              description: "High impact events typically cause significant volatility. Plan your trades accordingly."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trade the News with BCR
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Get lightning-fast execution during high-impact releases. Open your account today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-[#FFD400] text-black font-semibold py-3 px-8 rounded-xl hover:brightness-95 transition">
              Open Live Account
            </Link>
            <Link href="/demo" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition">
              Try Demo Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
