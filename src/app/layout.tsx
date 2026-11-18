import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
        <header className="border-b border-border">
          <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              남준우
            </Link>
            <div className="flex gap-6 text-sm text-muted">
              <Link href="/#projects" className="hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/#about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <a
                href="mailto:jjunk1ng@naver.com"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-muted">
            <p>&copy; 2024 남준우. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
