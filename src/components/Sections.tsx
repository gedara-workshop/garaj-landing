import Image from "next/image";
import { formatLkr, localPoints, vehicles } from "@/content/site";
import { RenewalTicket, StatusChip } from "./ui";
import styles from "./Sections.module.css";

export function Features() {
  const maxSpend = Math.max(...vehicles.map((v) => v.spentThisMonth));

  return (
    <section className="section" aria-labelledby="what">
      <div className="section-head">
        <h2 id="what">Everything your vehicles need, without the file of papers</h2>
        <p>Three things Garaj does every day, so you don&apos;t have to remember them.</p>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.demo} aria-hidden="true">
            <RenewalTicket kind="Revenue license" date="Expires 25 Oct" days={12} unit="days left" status="soon" province="NC" plate="JO-8663" />
            <RenewalTicket kind="Insurance" date="Renews 2 Mar" days={140} unit="days left" status="ok" plate="56-6383" />
          </div>
          <h3>Reminders before it&apos;s too late</h3>
          <p>
            Revenue license, insurance, emission test and your driving license. A heads-up 30 days
            before, again a week before, and on the day.
          </p>
        </div>

        <div className={styles.feature}>
          <div className={styles.demo} aria-hidden="true">
            <div className={styles.aiNote}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10" />
              </svg>
              Read from your bill
            </div>
            <div>
              <div className={styles.field}>
                <span>Garage</span>
                <b>Lanka Auto Care</b>
              </div>
              <div className={styles.field}>
                <span>Date</span>
                <b className="num">4 Oct 2026</b>
              </div>
              <div className={`${styles.field} ${styles.flag}`}>
                <span>Odometer</span>
                <b className="num">52,640 km?</b>
              </div>
              <div className={styles.field}>
                <span>Total</span>
                <b className="num">LKR 18,500</b>
              </div>
            </div>
          </div>
          <h3>Snap a bill, it fills itself in</h3>
          <p>
            Take a photo of a service, repair or fuel bill. Garaj reads it, flags anything it
            isn&apos;t sure about, and you just check and save.
          </p>
        </div>

        <div className={styles.feature}>
          <div className={styles.demo} aria-hidden="true">
            {vehicles.map((v) => (
              <div className={styles.barRow} key={v.plate}>
                <span>{v.name.split(" ").slice(-1)[0]}</span>
                <span className={styles.bar}>
                  <i style={{ width: `${Math.max(4, (v.spentThisMonth / maxSpend) * 100)}%` }} />
                </span>
                <span className="num">{formatLkr(v.spentThisMonth)}</span>
              </div>
            ))}
            <div className={styles.demoFoot}>LKR spent in October</div>
          </div>
          <h3>See what each vehicle really costs</h3>
          <p>
            Monthly spend and cost per km for every car, jeep, bike and three-wheeler, so you know
            which one is eating your salary.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MadeForSriLanka() {
  return (
    <section className="section" aria-labelledby="local">
      <div className="section-head">
        <h2 id="local">Made for how vehicles work in Sri Lanka</h2>
        <p>Not a foreign app with miles and dollars. Garaj knows the paperwork you actually deal with.</p>
      </div>
      <div className={styles.local}>
        {localPoints.map((p) => (
          <div key={p.title}>
            <b>{p.title}</b>
            <span>{p.body}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Garage() {
  return (
    <section className="section" aria-labelledby="garage">
      <div className="section-head">
        <h2 id="garage">One garage, every vehicle</h2>
        <p>Cars, jeeps, pickups and bikes side by side. Add a photo of yours and it becomes your home screen.</p>
      </div>
      <div className={styles.garage}>
        {vehicles.map((v) => (
          <figure key={v.plate}>
            <div className={styles.photo}>
              <Image src={v.photo} alt={v.photoAlt} fill sizes="(max-width: 900px) 50vw, 270px" />
            </div>
            <figcaption>
              {v.name}
              <StatusChip status={v.status}>{v.statusLabel}</StatusChip>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
