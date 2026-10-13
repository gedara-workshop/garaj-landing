"use client";

import { useState, type FormEvent } from "react";
import { signupEndpoint } from "@/content/site";
import { Check } from "./ui";
import styles from "./Signup.module.css";

type Status = "idle" | "sending" | "success" | "error";

const perks = [
  "Help decide which features come first",
  "One message when it's ready. No spam.",
  "Tell us what you drive and we'll make sure it works for you",
];

const looksLikeEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const looksLikePhone = (v: string) => v.replace(/[^0-9]/g, "").length >= 9;

export function Signup() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const contact = String(data.get("contact") ?? "").trim();
    if (!looksLikeEmail(contact) && !looksLikePhone(contact)) {
      setStatus("error");
      setMessage("Add a WhatsApp number or email so we can reach you.");
      form.querySelector<HTMLInputElement>("#contact")?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      // Sent straight from the visitor's browser, which Formspree's spam filter trusts
      // far more than a server-to-server request.
      const res = await fetch(signupEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Form service responded ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Couldn't save that just now. Check your connection and try again.");
    }
  }

  const sending = status === "sending";

  return (
    <section className="section" id="join" aria-labelledby="joinh">
      <div className={styles.signup}>
        <div className="section-head">
          <h2 id="joinh">Get Garaj first</h2>
          <p>
            We&apos;re building it now. Join the early access list and you&apos;ll be among the
            first to try it on Android or iPhone.
          </p>
          <ul className={styles.perks}>
            {perks.map((p) => (
              <li key={p}>
                <Check />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.form}>
          {status === "success" ? (
            <div className={styles.thanks} role="status">
              <b>You&apos;re on the list.</b>
              <p>We&apos;ll message you once when Garaj is ready to try. Thanks for helping us build it.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.fields} noValidate>
              <input type="hidden" name="_subject" value="New Garaj early access signup" />
              <label htmlFor="name">
                Your name
                <input id="name" name="name" autoComplete="given-name" placeholder="Dinal" maxLength={80} />
              </label>
              <label htmlFor="contact">
                WhatsApp number or email
                <input
                  id="contact"
                  name="contact"
                  autoComplete="email"
                  placeholder="077 123 4567 or you@gmail.com"
                  required
                  maxLength={120}
                  aria-describedby="contact-hint"
                />
                <span className={styles.hint} id="contact-hint">
                  We&apos;ll only use this to tell you when Garaj is ready.
                </span>
              </label>
              <div className={styles.row}>
                <label htmlFor="vehicles">
                  How many vehicles?
                  <select id="vehicles" name="vehicles" defaultValue="2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4 or more</option>
                  </select>
                </label>
                <label htmlFor="language">
                  Preferred language
                  <select id="language" name="language" defaultValue="English">
                    <option>English</option>
                    <option value="Sinhala">සිංහල</option>
                    <option value="Tamil">தமிழ்</option>
                  </select>
                </label>
              </div>
              <label htmlFor="phone">
                Your phone
                <select id="phone" name="phone" defaultValue="Android">
                  <option>Android</option>
                  <option>iPhone</option>
                </select>
              </label>
              <label htmlFor="drives">
                What do you drive? <span className={styles.hint}>(optional)</span>
                <input id="drives" name="drives" placeholder="Corolla, a scooter, a three-wheeler..." maxLength={200} />
              </label>
              {/* Formspree's built-in honeypot: real people never fill this. */}
              <input className={styles.honeypot} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {status === "error" ? (
                <p className={styles.err} role="alert">
                  {message}
                </p>
              ) : null}
              <button className="btn btn-primary" type="submit" disabled={sending}>
                {sending ? "Joining..." : "Join early access"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
