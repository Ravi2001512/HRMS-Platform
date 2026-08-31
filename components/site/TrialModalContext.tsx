"use client";

import * as React from "react";

type TrialModalContextValue = {
  open: boolean;
  headcount: number;
  openModal: (headcount?: number) => void;
  closeModal: () => void;
};

const TrialModalContext = React.createContext<TrialModalContextValue | null>(null);

export function TrialModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [headcount, setHeadcount] = React.useState(25);

  const openModal = React.useCallback((count?: number) => {
    if (typeof count === "number") setHeadcount(count);
    setOpen(true);
  }, []);
  const closeModal = React.useCallback(() => setOpen(false), []);

  return (
    <TrialModalContext.Provider value={{ open, headcount, openModal, closeModal }}>
      {children}
    </TrialModalContext.Provider>
  );
}

export function useTrialModal() {
  const ctx = React.useContext(TrialModalContext);
  if (!ctx) throw new Error("useTrialModal must be used within TrialModalProvider");
  return ctx;
}
