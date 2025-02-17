import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Prolinks",
  description: ".Architecture .Engineering  .Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Prolinks</title>
        <meta name="description" content=".Architecture .Engineering .Construction" />
        <link rel="icon" href="/assets/logo/logo3.jpg" type="image/jpeg" />
      </Head>
      <body
        className={`${poppins.className} antialiased bg-white dark:bg-white text-black dark:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
