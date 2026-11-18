import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} | 남준우 포트폴리오`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/#projects"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        &larr; Back to Projects
      </Link>

      {/* Header */}
      <header className="mt-8 mb-12">
        <span className="text-sm text-muted font-mono">
          Project {String(project.number).padStart(2, "0")}
        </span>
        <h1 className="text-3xl font-bold tracking-tight mt-2">
          {project.title}
        </h1>
        <p className="text-lg text-muted mt-3">{project.description}</p>

        <div className="flex gap-6 mt-6 text-sm">
          <div>
            <span className="text-muted">역할</span>
            <p className="font-medium mt-0.5">{project.role}</p>
          </div>
          <div>
            <span className="text-muted">기간</span>
            <p className="font-medium mt-0.5">{project.period}</p>
          </div>
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
      </header>

      {/* Sections */}
      <div className="space-y-12">
        {project.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className="bg-gray-50 border border-border rounded-lg p-6">
              <p className="text-muted text-sm">{section.content}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation */}
      <nav className="flex justify-between mt-16 pt-8 border-t border-border">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; {prevProject.title}
          </Link>
        ) : (
          <span />
        )}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {nextProject.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
