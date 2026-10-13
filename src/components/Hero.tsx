import Image from "next/image";
import { Plate, RenewalTicket, StatusChip } from "./ui";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <span className={styles.eyebrow}>Coming to Android and iPhone in Sri Lanka</span>
        <h1 className={styles.title}>
          Never get caught with an expired <span className={styles.plateWord}>license</span> again.
        </h1>
        <p className={styles.lede}>
          Garaj keeps your revenue license, insurance, emission test, services and fuel for every
          vehicle you own, and reminds you before anything runs out.
        </p>
        <div className={styles.actions}>
          <a className="btn btn-primary" href="#join">
            Get early access
          </a>
          <span className={styles.note}>Free for your first two vehicles</span>
        </div>
        <div className={styles.langs}>
          In <span className={styles.lang}>English</span>
          <span className={styles.lang} lang="si" style={{ fontFamily: "var(--font-si)" }}>
            සිංහල
          </span>
          <span className={styles.lang} lang="ta" style={{ fontFamily: "var(--font-ta)" }}>
            தமிழ்
          </span>
        </div>
      </div>

      <div className={styles.phone} role="img" aria-label="Garaj home screen showing a Toyota Corolla and an overdue emission test">
        <div className={styles.screen}>
          <div className={styles.screenTop}>
            <b>My Garaj</b>
            <span>4 vehicles</span>
          </div>
          <div className={styles.vcard}>
            <div className={styles.vphoto}>
              <Image src="/vehicles/corolla.jpg" alt="" fill sizes="340px" priority />
              <div className={styles.vover}>
                <b>Toyota Corolla</b>
                <Plate province="NC" plate="JO-8663" />
              </div>
            </div>
            <div className={styles.vnext}>
              <span>Revenue license</span>
              <StatusChip status="soon">12 days</StatusChip>
            </div>
            <div className={styles.vstats}>
              <div>
                <b>54,320</b>
                <span>km on clock</span>
              </div>
              <div>
                <b>1,680</b>
                <span>km to service</span>
              </div>
              <div>
                <b>142k</b>
                <span>LKR this year</span>
              </div>
            </div>
          </div>
          <RenewalTicket kind="Emission test" date="Expired 10 Oct" days={3} unit="days over" status="due" plate="31-8899" />
        </div>
      </div>
    </section>
  );
}
