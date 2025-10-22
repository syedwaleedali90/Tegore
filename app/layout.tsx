import type { Metadata } from "next";
import { Josefin_Sans, Raleway, Manrope } from "next/font/google";
import "./globals.css";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional but recommended
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Tegore Client",
  description: "Tegore client application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} ${raleway.variable} ${manrope.variable} antialiased`}>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
