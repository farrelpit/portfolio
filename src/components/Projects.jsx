import Section from "./Section.jsx";
import { projects } from "../data/portfolio.js";

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-black/5 px-3.5 py-1.5 text-sm text-neutral-700">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ title, github, demo }) {
  if (!github && !demo) return null;

  const linkClass =
    "rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink/5";

  return (
    <div className="flex flex-wrap gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub`}
          className={linkClass}
        >
          GitHub
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} live demo`}
          className={linkClass}
        >
          Live demo
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const { title, type, year, description, tech, featured, github, demo } = project;

  return (
    <article
      className={`flex flex-col justify-between gap-10 rounded-[28px] p-7 sm:p-8 md:last:col-span-2 lg:last:col-span-1 ${
        featured
          ? "bg-accent md:col-span-2 lg:row-span-2 lg:p-10"
          : "bg-white"
      }`}
    >
      <div>
        <div className="flex items-baseline justify-between text-sm text-neutral-700">
          <span>{type}</span>
          <span className="slashed-zero tabular-nums">{year}</span>
        </div>
        <h3
          className={`mt-6 font-medium tracking-[-0.03em] ${
            featured ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 max-w-[44ch] leading-relaxed ${
            featured ? "text-lg text-neutral-800 sm:text-xl" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      </div>
      <div className="space-y-6">
        <Tags items={tech} />
        <ProjectLinks title={title} github={github} demo={demo} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="works" title="Selected works">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
