import Link from "next/link";
import { legalUpdated } from "@/content/site";
import styles from "./LegalPage.module.css";
import { Wordmark } from "./ui";

/** Shared frame for the privacy policy and delete-account pages: logo home, title, footer links. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="wrap">
      <header className={styles.top}>
        <Link href="/" aria-label="Garaj home" className={styles.logo}>
          <Wordmark className={styles.wordmark} />
        </Link>
      </header>
      <main>
        <article className={styles.article}>
          <h1>{title}</h1>
          <p className={styles.updated}>Last updated {legalUpdated}</p>
          {children}
        </article>
      </main>
      <LegalFooter />
    </div>
  );
}

export function LegalFooter() {
  return (
    <footer className={styles.footer}>
      <span>Garaj, made in Sri Lanka by Gedara Workshop</span>
      <Link href="/privacy">Privacy policy</Link>
      <Link href="/delete-account">Delete your account</Link>
    </footer>
  );
}

export const legalStyles = styles;
