"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
