"use client";

import { useState } from "react";

interface CareerItemProps {
  period: string;
  company: string;
  role: string;
  items: string[];
  defaultExpanded?: boolean;
}

export default function CareerItem({
  period,
  company,
  role,
  items,
  defaultExpanded = false,
}: CareerItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const shouldCollapse = items.length > 3;

  return (
    <div className="flex gap-6">
      <div className="w-28 shrink-0 text-sm text-muted">{period}</div>
      <div className="flex-1">
        <h4 className="font-semibold">{company}</h4>
        <p className="text-sm text-muted mt-0.5">{role}</p>
        <div className="relative mt-3">
          <ul
            className={`text-sm text-muted space-y-1.5 leading-relaxed overflow-hidden transition-all duration-300 ${
              !expanded && shouldCollapse ? "max-h-[4.5rem]" : "max-h-[1000px]"
            }`}
          >
            {items.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
          {shouldCollapse && !expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        {shouldCollapse && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-muted hover:text-foreground mt-2 transition-colors cursor-pointer"
          >
            {expanded ? "접기 ↑" : "더보기 ↓"}
          </button>
        )}
      </div>
    </div>
  );
}
