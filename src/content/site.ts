export type Status = "ok" | "soon" | "due";

export type Vehicle = {
  name: string;
  province?: string;
  plate: string;
  photo: string;
  photoAlt: string;
  status: Status;
  statusLabel: string;
  spentThisMonth: number;
};

// Sample garage shown on the landing page (the founder's own vehicles).
export const vehicles: Vehicle[] = [
  {
    name: "Toyota Corolla",
    province: "NC",
    plate: "JO-8663",
    photo: "/vehicles/corolla.jpg",
    photoAlt: "Silver Toyota Corolla parked on a paved lane",
    status: "soon",
    statusLabel: "Due in 12 days",
    spentThisMonth: 33412,
  },
  {
    name: "Mitsubishi Jeep",
    plate: "31-8899",
    photo: "/vehicles/jeep.jpg",
    photoAlt: "Green Mitsubishi jeep with off-road tyres in a carport",
    status: "due",
    statusLabel: "Overdue",
    spentThisMonth: 14628,
  },
  {
    name: "Toyota Hilux",
    plate: "56-6383",
    photo: "/vehicles/hilux.jpg",
    photoAlt: "Red Toyota Hilux on a misty hilltop",
    status: "ok",
    statusLabel: "All good",
    spentThisMonth: 11000,
  },
  {
    name: "Honda AX-1",
    province: "NW",
    plate: "BAW-7715",
    photo: "/vehicles/ax1.jpg",
    photoAlt: "Honda AX-1 motorbike by the sea",
    status: "ok",
    statusLabel: "All good",
    spentThisMonth: 2200,
  },
];

export const localPoints = [
  {
    title: "Revenue license and emission test",
    body: "Tracked like the documents they are, with the dates that matter here.",
  },
  {
    title: "Real number plates",
    body: "New and old formats, from WP CAB-4521 to 31-8899.",
  },
  {
    title: "Rupees and kilometres",
    body: "Costs in LKR, distance in km, and a cost per km that makes sense.",
  },
  {
    title: "Your language",
    body: "සිංහල, தமிழ் or English. Switch any time.",
  },
];

export const formatLkr = (n: number) => n.toLocaleString("en-LK");

// Formspree form that stores early access signups. Form endpoints are public by design
// (they sit in the page's HTML), so a default lives here; set NEXT_PUBLIC_FORMSPREE_ENDPOINT to override.
export const signupEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xaeqpjzv";
