"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col items-center gap-2 transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* 전화 / 이메일 (펼침) */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          contactOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="tel:010-7275-5694"
          className="w-10 h-10 rounded-full bg-white border border-border text-foreground text-sm flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          aria-label="전화하기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
        <a
          href="mailto:jjunk1ng@naver.com"
          className="w-10 h-10 rounded-full bg-white border border-border text-foreground text-sm flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
          aria-label="이메일 보내기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>

      {/* 컨택 버튼 */}
      <button
        onClick={() => setContactOpen(!contactOpen)}
        className={`w-10 h-10 rounded-full bg-accent text-white text-xl leading-none flex items-center justify-center shadow-md hover:bg-gray-800 transition-all cursor-pointer ${
          contactOpen ? "rotate-45" : ""
        }`}
        aria-label="연락하기"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4"><path d="M12 5v14M5 12h14"/></svg>
      </button>

      {/* 상단 이동 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-full bg-accent text-white text-sm flex items-center justify-center shadow-md hover:bg-gray-800 transition-colors cursor-pointer"
        aria-label="맨 위로 이동"
      >
        ↑
      </button>
    </div>
  );
}
