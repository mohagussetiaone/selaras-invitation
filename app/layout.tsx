import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriwether = Merriweather({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selaras Invite",
  description: "Selaras Invite - Online Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriwether.className} antialiased`}>{children}</body>
    </html>
  );
}
