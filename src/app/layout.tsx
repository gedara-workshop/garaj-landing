import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/noto-sans-sinhala/500.css";
import "@fontsource/noto-sans-tamil/500.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Garaj keeps your revenue license, insurance, emission test, services and fuel costs for every vehicle in one app, built for Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Garaj: every vehicle, every renewal, one place",
  description,
  openGraph: {
    title: "Garaj",
    description,
    url: "/",
    siteName: "Garaj",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "A silver Toyota Corolla, tracked in Garaj" }],
    locale: "en_LK",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Garaj", description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#101312" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
