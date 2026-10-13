import type { Status } from "@/content/site";

export function Wordmark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 244 120" role="img" aria-label="garaj">
      <g transform="translate(4,2)">
        <g fill="none" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24.5" cy="56" r="18" />
          <path d="M42.5 38 V90 A18 18 0 0 1 24.5 108 H14.5" />
          <circle cx="83.5" cy="56" r="18" />
          <path d="M101.5 38 V74" />
          <path d="M124.5 38 V74 M124.5 56 A18 18 0 0 1 142.5 38 H146.5" />
          <circle cx="187.5" cy="56" r="18" />
          <path d="M205.5 38 V74" />
          <path d="M228.5 38 V90 A18 18 0 0 1 210.5 108 H202.5" />
        </g>
        {/* The reminder dot is always signal amber. */}
        <circle cx="228.5" cy="15" r="8.5" fill="#f2a93b" />
      </g>
    </svg>
  );
}

export function Plate({ province, plate }: { province?: string; plate: string }) {
  return (
    <span className="plate">
      {province ? <i>{province}</i> : null}
      {plate}
    </span>
  );
}

const statusIcon: Record<Status, React.ReactNode> = {
  ok: <path d="M20 6 9 17l-5-5" />,
  soon: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  due: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6M12 17h.01" />
    </>
  ),
};

export function StatusChip({ status, children }: { status: Status; children: React.ReactNode }) {
  return (
    <span className={`chip chip-${status}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {statusIcon[status]}
      </svg>
      {children}
    </span>
  );
}

export function RenewalTicket({
  kind,
  date,
  days,
  unit,
  status,
  province,
  plate,
}: {
  kind: string;
  date: string;
  days: number;
  unit: string;
  status: Status;
  province?: string;
  plate: string;
}) {
  return (
    <div className={`ticket ticket-${status}`}>
      <div className="ticket-main">
        <div className="ticket-kind">{kind}</div>
        <div className="ticket-date">{date}</div>
        <Plate province={province} plate={plate} />
      </div>
      <div className="ticket-stub">
        <b>{days}</b>
        <span>{unit}</span>
      </div>
    </div>
  );
}

export function Check({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
