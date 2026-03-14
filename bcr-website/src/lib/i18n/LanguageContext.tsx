"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { 
  type Language, 
  type Translations, 
  type LanguageConfig,
  languages, 
  getTranslation 
} from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languages: LanguageConfig[];
  currentLanguage: LanguageConfig;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'bcr-language';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Initialize language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && languages.some(l => l.code === stored)) {
      setLanguageState(stored);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language;
      const matchedLang = languages.find(l => 
        browserLang.startsWith(l.code) || 
        browserLang.startsWith(l.code.split('-')[0])
      );
      if (matchedLang) {
        setLanguageState(matchedLang.code);
      }
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    // Update html lang attribute
    document.documentElement.lang = lang;
  }, []);

  const currentLanguage = languages.find(l => l.code === language) || languages[0];
  const t = getTranslation(language);

  // Prevent hydration mismatch by using default language until mounted
  const value: LanguageContextType = {
    language: mounted ? language : 'en',
    setLanguage,
    t: mounted ? t : getTranslation('en'),
    languages,
    currentLanguage: mounted ? currentLanguage : languages[0],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Export types for convenience
export type { Language, Translations, LanguageConfig };
