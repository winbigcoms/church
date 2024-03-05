import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

const nanum = Nanum_Gothic({
  weight: "400",
  preload: false,
});
export const metadata: Metadata = {
  title: "명덕성결교회",
  description: "주 안에서 말씀으로 하나되는 명덕교회입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={nanum.className}>{children}</body>
    </html>
  );
}
