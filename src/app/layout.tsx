import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oda.branditeth.com"),
  title: "ODA Bekele | Creative Design Studio",
  description:
    "A premium portfolio for ODA Bekele, a creative design studio in Addis Ababa specializing in logo design, brand identity, website design, and interior design.",
  keywords: [
    "ODA Bekele",
    "creative designer",
    "brand identity",
    "logo design",
    "website design",
    "interior design",
    "Addis Ababa",
  ],
  authors: [{ name: "ODA Bekele" }],
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "ODA Bekele | Creative Design Studio",
    description:
      "Design is a true delight. Explore brand identities, campaigns, and creative systems by ODA Bekele.",
    images: ["/images/pic10.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fffef8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
