"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FINISHES } from "@/lib/data";
import { QuoteItem } from "@/lib/types";

const LIST_KEY = "flushfit.requestList";
const FINISH_KEY = "flushfit.finish";

type AppState = {
  list: QuoteItem[];
  finish: string;
  quoteJustSent: boolean;
  setFinish: (name: string) => void;
  addItem: (code: string, finish: string, qty: number) => void;
  incItem: (key: string) => void;
  decItem: (key: string) => void;
  removeItem: (key: string) => void;
  submitQuote: () => void;
  clearJustSent: () => void;
};

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<QuoteItem[]>([]);
  const [finish, setFinishState] = useState<string>(FINISHES[0].name);
  const [quoteJustSent, setQuoteJustSent] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const rawList = window.localStorage.getItem(LIST_KEY);
      if (rawList) setList(JSON.parse(rawList));
      const rawFinish = window.localStorage.getItem(FINISH_KEY);
      if (rawFinish) setFinishState(rawFinish);
    } catch {
      // localStorage unavailable — fall back to in-memory defaults
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(LIST_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }
  }, [list, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(FINISH_KEY, finish);
    } catch {
      // ignore
    }
  }, [finish, hydrated]);

  const setFinish = useCallback((name: string) => setFinishState(name), []);

  const addItem = useCallback((code: string, finishName: string, qty: number) => {
    setList((prev) => {
      const key = code + "|" + finishName;
      const i = prev.findIndex((it) => it.key === key);
      if (i >= 0) {
        const next = prev.slice();
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { key, code, finish: finishName, qty }];
    });
  }, []);

  const incItem = useCallback((key: string) => {
    setList((prev) => prev.map((it) => (it.key === key ? { ...it, qty: it.qty + 1 } : it)));
  }, []);

  const decItem = useCallback((key: string) => {
    setList((prev) => prev.map((it) => (it.key === key ? { ...it, qty: Math.max(1, it.qty - 1) } : it)));
  }, []);

  const removeItem = useCallback((key: string) => {
    setList((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const submitQuote = useCallback(() => {
    setList([]);
    setQuoteJustSent(true);
  }, []);

  const clearJustSent = useCallback(() => setQuoteJustSent(false), []);

  const value = useMemo(
    () => ({ list, finish, quoteJustSent, setFinish, addItem, incItem, decItem, removeItem, submitQuote, clearJustSent }),
    [list, finish, quoteJustSent, setFinish, addItem, incItem, decItem, removeItem, submitQuote, clearJustSent]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
