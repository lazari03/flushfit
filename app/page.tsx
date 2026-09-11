"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";

const LOCALE_KEY = "flushfit.locale";

// Static export has no server to redirect "/" — this picks the visitor's
// saved (or browser) locale client-side and forwards to /<locale>.
export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    let locale: string = DEFAULT_LOCALE;
    try {
      const saved = window.localStorage.getItem(LOCALE_KEY);
      if (saved && isLocale(saved)) {
        locale = saved;
      } else {
        const browser = window.navigator.language.slice(0, 2);
        if (isLocale(browser)) locale = browser;
      }
    } catch {
      // ignore — fall back to default
    }
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
