"use client";

import { useState } from "react";
import type { ProjectItem } from "@/data/projects";
import RichText from "@/components/RichText";
import Lightbox from "@/components/Lightbox";

export default function ProjectItemAccordion({
  item,
}: {
  item: ProjectItem;
}) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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
          {/* 기본 정보 */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-muted">기간</span>
              <p className="font-medium mt-0.5">{item.period}</p>
            </div>
            <div>
              <span className="text-muted">역할</span>
              <p className="font-medium mt-0.5">{item.role}</p>
            </div>
            <div>
              <span className="text-muted">팀 구성</span>
              <p className="font-medium mt-0.5">{item.team}</p>
            </div>
          </div>

          {/* 배경 및 목표 */}
          <section>
            <h4 className="font-semibold mb-3">배경 및 목표</h4>
            <p className="text-sm text-muted leading-relaxed">
              <RichText text={item.background} />
            </p>
          </section>

          {/* 기획 과정 */}
          <section>
            <h4 className="font-semibold mb-3">기획 과정</h4>
            <ul className="text-sm text-muted space-y-2 leading-relaxed">
              {item.process.map((step, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent font-mono shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span><RichText text={step} /></span>
                </li>
              ))}
            </ul>
          </section>

          {/* 주요 화면 */}
          <section>
            <h4 className="font-semibold mb-3">주요 화면</h4>
            {item.screens.length > 0 ? (
              (() => {
                const hasGroups = item.screens.some((s) => /^\[.+?\]/.test(s.label));
                const isAlimtalk = item.screens.some((s) => s.src.includes("alimtalk"));
                if (!hasGroups) {
                  return (
                    <div className={isAlimtalk ? "grid grid-cols-3 gap-4" : "space-y-6"}>
                      {item.screens.map((screen, i) => (
                        <div key={i}>
                          <p className="text-xs text-muted font-mono mb-2">
                            {String(i + 1).padStart(2, "0")}. {screen.label}
                          </p>
                          <img
                            src={screen.src}
                            alt={screen.label}
                            className="w-full rounded-lg cursor-zoom-in hover:opacity-90 transition-opacity"
                            style={isAlimtalk ? undefined : { border: "1px solid #e5e7eb" }}
                            loading="lazy"
                            onClick={() => setLightbox({ src: screen.src, alt: screen.label })}
                          />
                        </div>
                      ))}
                    </div>
                  );
                }
                const groups: { group: string; items: { src: string; label: string }[] }[] = [];
                item.screens.forEach((screen) => {
                  const match = screen.label.match(/^\[(.+?)\]\s*(.+)$/);
                  const group = match ? match[1] : "";
                  const label = match ? match[2] : screen.label;
                  const last = groups[groups.length - 1];
                  if (last && last.group === group) {
                    last.items.push({ src: screen.src, label });
                  } else {
                    groups.push({ group, items: [{ src: screen.src, label }] });
                  }
                });
                const isLanding = item.screens.some((s) => s.src.includes("landing/sk"));
                return (
                  <div className="space-y-8">
                    {groups.map((g, gi) => {
                      const isMobileGroup = g.group === "Mobile";
                      const isPcGroup = g.group === "PC";
                      let gridClass = "grid grid-cols-2 sm:grid-cols-3 gap-4";
                      if (isLanding && isPcGroup) gridClass = "grid grid-cols-1 gap-6";
                      if (isLanding && isMobileGroup) gridClass = "grid grid-cols-4 gap-4";
                      return (
                      <div key={gi}>
                        {g.group && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold text-accent">{g.group}</p>
                            <div className="border-b border-border mt-1.5" />
                          </div>
                        )}
                        <div className={gridClass}>
                          {g.items.map((screen, i) => (
                            <div key={i}>
                              <p className="text-xs text-muted font-mono mb-2">
                                {screen.label}
                              </p>
                              <img
                                src={screen.src}
                                alt={screen.label}
                                className="w-full rounded-lg cursor-zoom-in hover:opacity-90 transition-opacity"
                                loading="lazy"
                                onClick={() => setLightbox({ src: screen.src, alt: screen.label })}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      );
                    })}
                  </div>
                );
              })()
            ) : (
              <div className="bg-gray-50 border border-border rounded-lg p-6">
                <p className="text-muted text-sm">주요 화면 스크린샷을 추가해주세요.</p>
              </div>
            )}
          </section>

          {/* 라이브 URL */}
          {item.liveUrl && (
            <section>
              <h4 className="font-semibold mb-3">라이브 URL</h4>
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {item.liveUrl}
              </a>
              <p className="text-xs text-muted mt-1">
                * 현재 운영 중인 사이트이며, 기획 당시와 다를 수 있습니다.
              </p>
            </section>
          )}

          {/* 성과 및 회고 */}
          <section>
            <h4 className="font-semibold mb-3">성과 및 회고</h4>
            <div className="text-sm text-muted leading-relaxed whitespace-pre-line">
              <RichText text={item.result} />
            </div>
          </section>
        </div>
      </div>
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}
