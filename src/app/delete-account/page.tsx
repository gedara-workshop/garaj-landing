import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, legalStyles as styles } from "@/components/LegalPage";
import { contactEmail } from "@/content/site";

export const metadata: Metadata = {
  title: "Delete your Garaj account",
  description: "How to delete your Garaj account and data, in the app or by email.",
  alternates: { canonical: "/delete-account" },
};

// Google Play asks for a page like this: a way to request deletion without installing the app.
export default function DeleteAccount() {
  const subject = encodeURIComponent("Delete my Garaj account");
  const body = encodeURIComponent(
    "Please delete my Garaj account.\n\nI signed in with (mobile number or Google email):\n"
  );

  return (
    <LegalPage title="Delete your Garaj account">
      <p>
        You can delete your Garaj account and everything in it at any time. It takes effect straight away and
        can&apos;t be undone.
      </p>

      <h2>In the app (fastest)</h2>
      <ol>
        <li>Open Garaj and go to the Me tab.</li>
        <li>Tap Delete account.</li>
        <li>Check the list of what will be deleted, then tap Delete my account and tap again to confirm.</li>
      </ol>
      <p className={styles.note}>
        Want a copy first? Open each vehicle, tap the ⋯ menu and choose Export history (PDF).
      </p>

      <h2>Without the app</h2>
      <p>
        Email <a href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}>{contactEmail}</a> from any address,
        with the subject &quot;Delete my Garaj account&quot;, and include the mobile number or Google email you signed
        in with. We&apos;ll confirm it&apos;s your account by sending a message to that number or email, then delete it
        within 7 days and reply when it&apos;s done.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your sign-in (mobile number or Google account link)</li>
        <li>Your vehicles, renewals, service items, and fuel, service and repair entries</li>
        <li>Vehicle photos, bill photos and document photos</li>
      </ul>
      <p>
        If someone else also owns a garage with you, only you are removed from it and their data stays. Nothing is kept
        after deletion. Read more in our <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
