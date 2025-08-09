import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hilda Zakiatun Nufus - Information Security Professional",
  description:
    "Information Security & Technology Professional specializing in GRC, ISO 27001, automation, and compliance frameworks. Available for remote opportunities.",
  keywords:
    "Information Security, GRC, ISO 27001, Cybersecurity, Compliance, Automation, Remote Work, Jakarta",
  authors: [{ name: "Hilda Zakiatun Nufus" }],
  openGraph: {
    title: "Hilda Zakiatun Nufus - Information Security Professional",
    description:
      "Security, compliance, automation. Information Security Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
