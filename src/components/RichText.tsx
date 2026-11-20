"use client";

import React, { useState } from "react";

function Tooltip({ term, description }: { term: string; description: string }) {
  const [open, setOpen] = useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const tipRef = React.useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  React.useEffect(() => {
    if (!open || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const tipWidth = 240;
    let left = rect.left + rect.width / 2 - tipWidth / 2;
    if (left < 8) left = 8;
    if (left + tipWidth > window.innerWidth - 8) left = window.innerWidth - 8 - tipWidth;
    setPos({ top: rect.bottom + 8, left });
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen(!open)}
        className="underline decoration-dotted decoration-gray-400 underline-offset-2 cursor-help font-semibold text-foreground"
      >
        {term}
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          {pos && (
            <span
              ref={tipRef}
              className="fixed z-50 w-60 px-3 py-2 text-xs leading-relaxed text-white bg-gray-800 rounded-lg shadow-lg"
              style={{ top: pos.top, left: pos.left }}
            >
              {description}
            </span>
          )}
        </>
      )}
    </>
  );
}

function parseInline(text: string, keyPrefix = ""): React.ReactNode[] {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((part, i) => {
    if (part.startsWith("{{") && part.endsWith("}}")) {
      const inner = part.slice(2, -2);
      const [term, desc] = inner.split("||");
      if (term && desc) {
        return <Tooltip key={`${keyPrefix}${i}`} term={term} description={desc} />;
      }
    }
    return <span key={`${keyPrefix}${i}`}>{part}</span>;
  });
}

export default function RichText({ text }: { text: string }) {
  // Split by bold first, then parse tooltips inside each segment
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const inner = part.slice(2, -2);
          return (
            <strong key={i} className="text-foreground font-semibold">
              {parseInline(inner, `b${i}-`)}
            </strong>
          );
        }
        return <React.Fragment key={i}>{parseInline(part, `t${i}-`)}</React.Fragment>;
      })}
    </>
  );
}
