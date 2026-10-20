import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, legalStyles as styles } from "@/components/LegalPage";
import { contactEmail } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy · Garaj",
  description: "What the Garaj app keeps about you and your vehicles, who helps run it, and how to delete it.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        Garaj is a vehicle paperwork and service tracker for Sri Lanka, made by Gedara Workshop. This page explains,
        in plain words, what the Garaj app keeps, why, who helps us run it, and how to get it deleted.
      </p>
      <p className={styles.note}>
        The short version: we keep what you put into Garaj so the app can work. We don&apos;t sell it, we don&apos;t
        show ads, and you can delete everything from the app at any time.
      </p>

      <h2>What we keep</h2>
      <ul>
        <li>
          <strong>Your sign-in.</strong> Your mobile number if you sign in with a code by SMS, or your name and email
          from Google if you sign in with Google.
        </li>
        <li>
          <strong>Your vehicles.</strong> Type, make, model, year, fuel, colour, number plate and odometer readings.
        </li>
        <li>
          <strong>Renewals.</strong> Revenue license, insurance, emission test and driving license dates, the insurance
          company if you add it, and a photo of the document if you add one.
        </li>
        <li>
          <strong>Service and costs.</strong> Fuel, service, repair and other entries: what was done, where, the km
          reading, the date, the amount and litres. Service items and their intervals.
        </li>
        <li>
          <strong>Photos you choose to add.</strong> Vehicle photos, bill photos from Snap a bill, and document photos.
          Garaj only uses the camera or your photos when you tap to add one.
        </li>
        <li>
          <strong>On your phone only.</strong> Your language, reminder settings, and any entries waiting for a
          connection. Reminders are scheduled on your phone; we don&apos;t send push messages from a server.
        </li>
      </ul>
      <p>We don&apos;t collect your location, contacts, or anything you haven&apos;t entered into Garaj.</p>

      <h2>Why we keep it</h2>
      <p>
        Only to run the app for you: to show your garage on any phone you sign in on, remind you before renewals
        expire, work out service due dates and costs, and read bills you snap. We don&apos;t sell your data, share it
        for advertising, or use it to build a profile of you.
      </p>

      <h2>Who helps us run Garaj</h2>
      <ul>
        <li>
          <strong>Supabase</strong> stores your account, garage and photos in a private database and private storage
          (servers in Tokyo, Japan). Only you and people you share a garage with can read it.
        </li>
        <li>
          <strong>Text.lk</strong>, a Sri Lankan SMS gateway, sends your sign-in code to your mobile number.
        </li>
        <li>
          <strong>Google</strong> handles sign-in when you choose Continue with Google.
        </li>
        <li>
          <strong>OpenAI</strong> reads a bill photo when you use Snap a bill, and returns the amount, date and other
          details for you to check. Only that photo is sent. Under OpenAI&apos;s API terms, it isn&apos;t used to train
          their models by default.
        </li>
        <li>
          <strong>Vercel</strong> hosts this website and counts visits with privacy-friendly analytics that don&apos;t
          use cookies. The early access form on this site is handled by Formspree.
        </li>
      </ul>
      <p>Each of them only gets what they need for that one job.</p>

      <h2>How long we keep it</h2>
      <p>
        For as long as you have a Garaj account. When you delete your account, your garage, entries and photos are
        deleted straight away. If you share a garage with someone else who also owns it, only you are removed and their
        data stays.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>Edit or delete any vehicle, renewal or entry in the app.</li>
        <li>Export a vehicle&apos;s history as a PDF from its menu.</li>
        <li>
          Delete your account from <strong>Me &gt; Delete account</strong> in the app, or{" "}
          <Link href="/delete-account">ask us to delete it</Link>.
        </li>
        <li>
          Ask us what we hold about you, or to correct it. You have these rights under Sri Lanka&apos;s Personal Data
          Protection Act, No. 9 of 2022.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        Data is sent over encrypted connections. Each garage is walled off from others in the database, photos are in
        private storage that only opens through short-lived links, and the keys that can change everything stay on the
        server, never in the app.
      </p>

      <h2>Children</h2>
      <p>Garaj is made for vehicle owners and isn&apos;t meant for children under 16.</p>

      <h2>Changes</h2>
      <p>If this policy changes in a way that matters, we&apos;ll say so in the app before it applies.</p>

      <h2>Contact</h2>
      <p>
        Questions or requests: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    </LegalPage>
  );
}
