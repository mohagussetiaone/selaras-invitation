import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const merriwether = Merriweather({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selaras Invite",
  description: "Selaras Invite - Online Wedding Invitation",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriwether.className} antialiased`}>
        <main className="w-full mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
