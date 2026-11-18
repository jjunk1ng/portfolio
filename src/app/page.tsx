import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <p className="text-sm text-muted mb-3">Service Planner / PM</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">남준우</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">
          PM 경력을 베이스로, 원활한 소통과 체계적인 계획을 바탕으로
          <br />
          꼼꼼하게 서비스를 설계하는 기획자입니다.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="mailto:jjunk1ng@naver.com"
            className="px-5 py-2.5 bg-accent text-white text-sm rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
          <a
            href="#projects"
            className="px-5 py-2.5 border border-border text-sm rounded-md hover:bg-gray-50 transition-colors"
          >
            Projects
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 pb-20">
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
              <div className="flex gap-2 mt-4">
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
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-sm font-medium text-muted mb-8 uppercase tracking-widest">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">경력 요약</h3>
              <p className="text-muted leading-relaxed">
                PM 경력을 기반으로 서비스 기획 업무를 수행하고 있습니다.
                이해관계자와의 원활한 소통, 체계적인 계획 수립,
                꼼꼼한 화면 설계를 통해 사용자 중심의 서비스를 만들어갑니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">핵심 역량</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  PM 경력 베이스의 기획력
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  이해관계자와의 원활한 소통
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  계획을 바탕으로 한 체계적 업무 수행
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  꼼꼼한 화면 기획 및 문서 작성
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
