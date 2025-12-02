import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leadership Social Program - Automated Discovery",
  description: "Last week's industry news, tuned for our leadership team",
  icons: {
    icon: "/cointracker logo mark.png",
    shortcut: "/cointracker logo mark.png",
    apple: "/cointracker logo mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cointracker logo mark.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

