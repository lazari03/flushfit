"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { FINISH_ORDER } from "@/lib/data";
import { FinishId } from "@/lib/types";

const FINISH_KEY = "flushfit.finish";

type AppState = {
  finishId: FinishId;
  setFinishId: (id: FinishId) => void;
};

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [finishId, setFinishIdState] = useState<FinishId>(FINISH_ORDER[0]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(FINISH_KEY);
      if (saved && (FINISH_ORDER as string[]).includes(saved)) setFinishIdState(saved as FinishId);
    } catch {
      // localStorage unavailable — fall back to in-memory default
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(FINISH_KEY, finishId);
    } catch {
      // ignore
    }
  }, [finishId, hydrated]);

  const setFinishId = useCallback((id: FinishId) => setFinishIdState(id), []);

  const value = useMemo(() => ({ finishId, setFinishId }), [finishId, setFinishId]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
