import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import {Navbar} from "./components/Navbar";
import Footer from "./components/Footer";






const poppins = Poppins({
 weight: ['400', '600'],
 subsets: ['latin'],
 display: 'swap',
});

export const metadata: Metadata = {
  title: "Prolinks - Architectural Excellence.",
  description: "Architecture. Engineering. Construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
