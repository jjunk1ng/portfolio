"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import RollingText from "@/components/RollingText";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setVisible(y < 50 || y < lastY.current);
      lastY.current = y;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <RollingText />
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
  );
}
