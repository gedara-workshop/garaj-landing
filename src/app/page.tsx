import { Hero } from "@/components/Hero";
import { Features, Garage, MadeForSriLanka } from "@/components/Sections";
import { Signup } from "@/components/Signup";
import { Wordmark } from "@/components/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="wrap">
      <header className={styles.top}>
        <a href="#" aria-label="Garaj home" className={styles.logo}>
          <Wordmark className={styles.wordmark} />
        </a>
        <a className={styles.topCta} href="#join">
          Get early access
        </a>
      </header>

      <main>
        <Hero />
        <Features />
        <MadeForSriLanka />
        <Garage />
        <Signup />
      </main>

      <footer className={styles.footer}>
        <span>Garaj, made in Sri Lanka by Gedara Workshop</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
