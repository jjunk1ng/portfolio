"use client";

import { useState, useEffect } from "react";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFlipped(true), 800);
    const timer2 = setTimeout(() => setFlipped(false), 3500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  return (
    <div className="flex flex-col items-center gap-1.5">
    <div
      className="w-28 h-28 cursor-pointer"
      style={{ perspective: "600px" }}
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) setFlipped(true);
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(hover: hover)").matches) setFlipped(false);
      }}
      onClick={() => {
        if (!window.matchMedia("(hover: hover)").matches) setFlipped((prev) => !prev);
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* 앞면: 미모티콘 */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="/images/memoji.png"
            alt="남준우 미모티콘"
            className="w-full h-full object-contain"
          />
        </div>
        {/* 뒷면: 반명함 */}
        <div
          className="absolute -inset-2 rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src="/images/remove_bg.png"
            alt="남준우 반명함"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
    <span className="text-[10px] text-muted hidden md:inline">hover me</span>
    <span className="text-[10px] text-muted md:hidden">click me</span>
    </div>
  );
}
