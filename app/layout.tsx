import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional but recommended
  display: "swap",
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
      <body className={`${josefinSans.className} antialiased`}>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
