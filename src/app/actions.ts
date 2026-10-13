"use server";

export type SignupState = {
  status: "idle" | "success" | "error";
  message: string;
};

const clean = (v: FormDataEntryValue | null, max = 120) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const looksLikePhone = (v: string) => v.replace(/[^0-9]/g, "").length >= 9;

export async function joinWaitlist(_prev: SignupState, formData: FormData): Promise<SignupState> {
  // Honeypot: real people never fill this hidden field.
  if (clean(formData.get("company"))) {
    return { status: "success", message: "" };
  }

  const contact = clean(formData.get("contact"));
  if (!looksLikeEmail(contact) && !looksLikePhone(contact)) {
    return { status: "error", message: "Add a WhatsApp number or email so we can reach you." };
  }

  const entry = {
    name: clean(formData.get("name")),
    contact,
    vehicles: clean(formData.get("vehicles"), 20),
    language: clean(formData.get("language"), 20),
    phone: clean(formData.get("phone"), 20),
    drives: clean(formData.get("drives"), 200),
    submittedAt: new Date().toISOString(),
  };

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    // Local development without a form service: log instead of saving.
    console.info("[waitlist] FORMSPREE_ENDPOINT not set, entry not saved:", entry);
    return { status: "success", message: "" };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(entry),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Form service responded ${res.status}`);
    return { status: "success", message: "" };
  } catch (err) {
    console.error("[waitlist] save failed", err);
    return {
      status: "error",
      message: "Couldn't save that just now. Check your connection and try again.",
    };
  }
}
