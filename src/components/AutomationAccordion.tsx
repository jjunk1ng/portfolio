"use client";

import { useState } from "react";
import type { AutomationItem } from "@/data/projects";
import RichText from "@/components/RichText";

export default function AutomationAccordion({
  item,
}: {
  item: AutomationItem;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted mt-1">{item.summary}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-gray-100 text-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span
            className={`text-muted transition-transform duration-300 mt-1 shrink-0 ml-4 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden ${
          expanded ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-8 border-t border-border pt-6">
          {/* 문제 정의 */}
          <section>
            <h4 className="font-semibold mb-3">문제 정의</h4>
            <p className="text-sm text-muted leading-relaxed">
              <RichText text={item.problem} />
            </p>
          </section>

          {/* 주요 기능 */}
          {item.features.length > 0 && (
            <section>
              <h4 className="font-semibold mb-3">주요 기능</h4>
              <ul className="text-sm text-muted space-y-2 leading-relaxed">
                {item.features.map((feat, i) => {
                  const isSub = feat.startsWith("ㄴ ");
                  return (
                    <li key={i} className={`flex gap-2 ${isSub ? "ml-8" : ""}`}>
                      {isSub ? (
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400" />
                      ) : (
                        <span className="text-accent font-mono shrink-0">
                          {String(i + 1 - item.features.slice(0, i).filter(f => f.startsWith("ㄴ ")).length).padStart(2, "0")}
                        </span>
                      )}
                      <span><RichText text={isSub ? feat.slice(2) : feat} /></span>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* 주요 화면 */}
          <section>
            <h4 className="font-semibold mb-3">주요 화면</h4>
            {item.screens.length > 0 ? (
              <div className="space-y-6">
                {item.screens.map((screen, i) => (
                  <div key={i}>
                    <p className="text-xs text-muted font-mono mb-2">
                      {String(i + 1).padStart(2, "0")}.{" "}
                      {screen.label.includes("**") ? (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: screen.label.replace(
                              /\*\*(.+?)\*\*/g,
                              "<strong class='text-foreground'>$1</strong>"
                            ),
                          }}
                        />
                      ) : (
                        screen.label
                      )}
                    </p>
                    <img
                      src={screen.src}
                      alt={screen.label}
                      className="w-full rounded-lg border border-border"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 border border-border rounded-lg p-6">
                <p className="text-muted text-sm">
                  주요 화면 스크린샷을 추가해주세요.
                </p>
              </div>
            )}
          </section>

          {/* 성과 */}
          <section>
            <h4 className="font-semibold mb-3">성과</h4>
            <div className="text-sm text-muted leading-relaxed whitespace-pre-line">
              <RichText text={item.result} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
