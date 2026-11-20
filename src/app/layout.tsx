import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "남준우 | 서비스 기획자 포트폴리오",
  description:
    "PM 경력 베이스의 서비스 기획자 남준우 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <Header />

        <main className="flex-1">{children}</main>
        <ScrollToTop />

        <footer className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-muted">
            <p>&copy; 2024 남준우. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
