import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectItemAccordion from "@/components/ProjectItemAccordion";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} | 남준우 포트폴리오`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === id);
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

      {/* Items */}
      {project.items.length > 0 ? (
        <div className="space-y-4">
          {project.items.map((item) => (
            <ProjectItemAccordion key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border border-border rounded-lg p-12 text-center">
          <p className="text-muted text-sm">
            콘텐츠 준비 중입니다.
          </p>
        </div>
      )}

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
