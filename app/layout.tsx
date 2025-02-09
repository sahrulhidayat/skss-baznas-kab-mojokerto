import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKSS BAZNAS KABUPATEN MOJOKERTO",
  description: "Website penerima beasiswa dari program SKSS BAZNAS Kabupaten Mojokerto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}
