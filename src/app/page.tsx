import Link from "next/link";
import { projects, automations } from "@/data/projects";
import CareerItem from "@/components/CareerItem";
import AutomationAccordion from "@/components/AutomationAccordion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-12">
        <div className="flex items-center gap-5 mb-5">
          <img
            src="/images/memoji.png"
            alt="남준우 미모티콘"
            className="w-28 h-28"
          />
          <div>
            <p className="text-sm text-muted mb-1">서비스기획자 / PM</p>
            <h1 className="text-4xl font-bold tracking-tight">남준우</h1>
          </div>
        </div>
        <p className="text-base italic text-muted mb-4">
          &ldquo;업무 흐름 파악, 효율적 선택과 집중, 내외적 소통을 통한 의견조율&rdquo;
        </p>
        <p className="text-muted leading-relaxed max-w-2xl">
          컴퓨터학을 전공하고 <strong className="text-foreground">서비스 기획자</strong>로 일하고 있습니다.{" "}
          <strong className="text-foreground">개발에 대한 이해</strong>를 바탕으로 기획의 실현 가능성까지 고려하며,
          반복되는 운영 문제는 직접 <strong className="text-foreground">자동화 도구</strong>를 만들어 해결합니다.{" "}
          기획자의 시선으로 문제를 정의하고, 개발자의 언어로 팀과 소통하며,
          함께 <strong className="text-foreground">더 나은 결과</strong>를 만들어가고 싶습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-6 text-sm text-muted">
          <span>📞 010-7275-5694</span>
          <span className="hidden sm:inline">·</span>
          <span>✉️ jjunk1ng@naver.com</span>
        </div>
      </section>

      {/* AI Automation */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-sm font-medium text-muted mb-8 uppercase tracking-widest">
          AI 활용 업무 자동화
        </h2>
        <div className="space-y-4">
          {automations.map((item) => (
            <AutomationAccordion key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 pb-10">
        <h2 className="text-sm font-medium text-muted mb-8 uppercase tracking-widest">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="block group border border-border rounded-lg p-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-muted font-mono">
                    {String(project.number).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <span className="text-muted group-hover:translate-x-1 transition-transform mt-1">
                  &rarr;
                </span>
              </div>
              {project.items.length > 0 && (
                <div className="mt-4 bg-gray-50 rounded-md px-4 py-3">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {project.items.map((item) => (
                      <li key={item.id} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-gray-100 text-muted rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-sm font-medium text-muted mb-8 uppercase tracking-widest">
            About
          </h2>

          {/* 경력 */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6">
              경력 <span className="text-sm font-normal text-muted ml-2">총 7년 3개월</span>
            </h3>
            <div className="space-y-10">
              <CareerItem
                period="2024.11 - 현재"
                company="(주) 카베이"
                role="서비스 기획자 · 선임"
                defaultExpanded
                items={[
                  "플랫폼 별 IA 작성 및 관리",
                  "기능 별 User Flow 작성 및 관리",
                  "자사 Web/App 플랫폼 유지보수 및 서비스 기획 설계",
                  "자사 어드민(Back Office) 유지보수 및 서비스 기획 설계",
                  "개발 백로그 및 태스크 관리",
                  "Claude AI 활용 UI/DB 모니터링 자동화 도구 기획·구현 (기여도 100%)",
                  "컨소 통합 어드민 페이지 기획 및 개발 (UI/UX·기능·권한 설계)",
                ]}
              />
              <CareerItem
                period="2024.03 - 2024.09"
                company="봄 아카데미"
                role="UI/UX 디자인 부트캠프 (KDT)"
                items={[
                  "UX/UI 이론 (방법론, 리서치, 페르소나, 디자인 시스템)",
                  "그래픽 툴 교육 및 실습 (Adobe Ps/Ai, Figma)",
                  "카카오 이모티콘 리사이클링 서비스 기획",
                  "구독 통합 정보 제공 서비스 GOODOCK(App) 기획",
                  "차량 거래 웹 플랫폼 서비스 기획",
                  "쏘로굿(Thorogood) 웹 디자인 리뉴얼",
                ]}
              />
              <CareerItem
                period="2022.03 - 2023.11"
                company="주식회사 슈퍼브에이아이"
                role="PM · 연구원"
                items={[
                  "B2G/B2B 데이터셋 구축 프로젝트 PM 수행",
                  "과제 요구사항 분석 및 수행 일정 수립",
                  "고객사 니즈 파악 및 커뮤니케이션",
                  "데이터셋 분석 및 구축 설계 (Bbox, Polygon, Tracking 등)",
                  "수집·가공·검수 공정 관리 및 크라우드 워커 교육",
                  "내부 프로덕트(Annotation Tool) 개선 기획",
                  "주요 고객사: 현대 로보틱스랩, 현대 자동차, LG, NBA 등",
                ]}
              />
              <CareerItem
                period="2019.08 - 2022.03"
                company="주식회사 테스트웍스"
                role="PL/PM · 연구원"
                items={[
                  "B2G/B2B 데이터셋 구축 프로젝트 PM/PL 수행",
                  "데이터셋 구축을 위한 개발 도구 기획 (화면설계·기능정의·스토리보드)",
                  "주관/참여 컨소시엄 간 커뮤니케이션",
                  "K-Data 데이터 바우처 제안서 작성 (22개 중 12개 수주)",
                  "신규입사자 대상 모의 프로젝트 기획 및 운영 관리",
                  "채용 관리, 계약 관리, 노무 이슈 관리, 자산 관리",
                  "주요 고객사: NIA, 스트라드비전, 삼성증권, 성균관대 등",
                ]}
              />
            </div>
          </div>

          {/* 학력 & 스킬 */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">학력</h3>
              <div>
                <h4 className="font-semibold">평택대학교</h4>
                <p className="text-sm text-muted mt-0.5">
                  컴퓨터학과 졸업 · 2014.03 - 2020.03
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">스킬</h3>
              <div className="flex gap-5">
                {[
                  { name: "Figma", icon: "/icons/figma.svg" },
                  { name: "MS Office", icon: "/icons/msoffice.svg" },
                  { name: "Slack", icon: "/icons/slack.svg" },
                  { name: "Notion", icon: "/icons/notion.svg" },
                  { name: "Claude", icon: "/icons/claude-code.svg" },
                  { name: "ChatGPT", icon: "/icons/chatgpt.svg" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7"
                    />
                    <span className="text-xs text-muted text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
