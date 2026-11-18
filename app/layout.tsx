
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopigo | Alışverişin Yeni Adresi",
  description: "Shopigo online alışveriş platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
