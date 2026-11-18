"use client";

import { useState, useEffect } from "react";

const items = [
  "서비스기획자",
  "PM",
  "남준우",
  "010-7275-5694",
  "jjunk1ng@naver.com",
];

export default function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block h-7 overflow-hidden align-middle">
      <span
        className="inline-flex flex-col transition-transform duration-500 ease-in-out"
        style={{ transform: `translateY(-${index * 1.75}rem)` }}
      >
        {items.map((item, i) => (
          <span key={i} className="h-7 leading-7 block">
            {item}
          </span>
        ))}
      </span>
    </span>
  );
}
