"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

type EnquiryContextValue = {
  open: () => void;
  close: () => void;
  /** Use as onClick on a <Link href="/contact">: opens popup, keeps link as no-JS fallback */
  handleEnquiryClick: (e?: MouseEvent) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiryModal() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiryModal must be used inside <EnquiryModalProvider>");
  return ctx;
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const autoCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAutoClose = () => {
    if (autoCloseTimer.current) {
      clearTimeout(autoCloseTimer.current);
      autoCloseTimer.current = null;
    }
  };

  const close = useCallback(() => {
    clearAutoClose();
    setIsOpen(false);
  }, []);

  // After a successful submit, keep the thank-you message visible for 3s, then hide the popup
  const handleSuccess = useCallback(() => {
    clearAutoClose();
    autoCloseTimer.current = setTimeout(() => {
      autoCloseTimer.current = null;
      setIsOpen(false);
    }, 3000);
  }, []);

  useEffect(() => clearAutoClose, []);
  const handleEnquiryClick = useCallback((e?: MouseEvent) => {
    e?.preventDefault();
    setIsOpen(true);
  }, []);

  // ESC to close + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <EnquiryContext.Provider value={{ open, close, handleEnquiryClick }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="enquiry-overlay"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B1F42]/70 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="enquiry-modal-title"
              className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-[#102D5E] px-6 py-5 text-white sm:px-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b61]">
                  Get a Free Quote
                </span>
                <h2
                  id="enquiry-modal-title"
                  className="mt-1 text-xl font-extrabold sm:text-2xl"
                >
                  Enquire Now
                </h2>
               
              

                <button
                  type="button"
                  onClick={close}
                  aria-label="Close enquiry form"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#D6362C]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form */}
              <div className="overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8">
                <ContactForm
                  className="mt-6 space-y-5"
                  messageRows={4}
                  onSuccess={handleSuccess}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </EnquiryContext.Provider>
  );
}
