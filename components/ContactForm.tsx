"use client";

import { useState, type FormEvent } from "react";
import {
  Send,
  User,
  AtSign,
  PhoneCall,
  FileText,
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ACCESS_KEY = "66dc22cb-0c8d-403d-bf5a-7003ea677f1f";

type Errors = Partial<
  Record<"name" | "email" | "phone" | "message" | "consent", string>
>;

const inputClass =
  "w-full rounded-xl border bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-slate-400 shadow-sm outline-none transition-all focus:border-[#D6362C] focus:ring-2 focus:ring-[#D6362C]/10";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const validate = (fd: FormData): Errors => {
    const e: Errors = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/[\s-]/g, "");
    const message = String(fd.get("message") || "").trim();

    if (name.length < 2) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      e.email = "Please enter a valid email address";
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(phone))
      e.phone = "Please enter a valid 10-digit phone number";
    if (message.length < 10)
      e.message = "Message must be at least 10 characters";
    if (!fd.get("consent")) e.consent = "Please accept to continue";
    return e;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);

    const found = validate(fd);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback("Thank you! Your enquiry has been sent. We will contact you shortly.");
        form.reset();
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again or call us directly.");
    }
  };

  const border = (k: keyof Errors) =>
    errors[k] ? "border-red-500" : "border-slate-200";

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="New Enquiry from TSE Elevators Website"
      />
      <input type="hidden" name="from_name" value="TSE Elevators Website" />
      {/* Spam honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <User className="h-4 w-4 text-[#D6362C]" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`${inputClass} ${border("name")}`}
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <AtSign className="h-4 w-4 text-[#D6362C]" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={`${inputClass} ${border("email")}`}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone + Requirement */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <PhoneCall className="h-4 w-4 text-[#D6362C]" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className={`${inputClass} ${border("phone")}`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <FileText className="h-4 w-4 text-[#D6362C]" />
          </div>
          <input
            type="text"
            name="requirement"
            placeholder="Requirement"
            className={`${inputClass} border-slate-200`}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="relative">
          <div className="pointer-events-none absolute left-3.5 top-4">
            <MessageSquare className="h-4 w-4 text-[#D6362C]" />
          </div>
          <textarea
            rows={7}
            name="message"
            placeholder="How can we help you?"
            className={`${inputClass} resize-none ${border("message")}`}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 text-[#D6362C] focus:ring-[#D6362C]"
          />
          <label
            htmlFor="consent"
            className="cursor-pointer text-xs leading-relaxed text-black sm:text-sm"
          >
            I agree that my data is collected and stored.
          </label>
        </div>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-600">{errors.consent}</p>
        )}
      </div>

      {/* Status message */}
      {status === "success" && (
        <div className="flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D6362C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#B52A21] hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        <span>{status === "loading" ? "SENDING..." : "SUBMIT ENQUIRY"}</span>
      </button>
    </form>
  );
}
