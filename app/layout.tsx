import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Philtom | Your Mbare Magaba Supply Partner",
  description: "Hardware, paint, tools, furniture and building supplies in Harare. Mbare Magaba made convenient by Naipa Investments Trading, trading as Philtom.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

