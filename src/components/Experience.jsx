import Section from "./Section.jsx";
import { experience } from "../data/portfolio.js";

/* A real timeline: order matters, so the rail and dots carry meaning.
   The filled yellow dot marks the current (first) entry. */
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-4 pl-8 sm:pl-12">
        <span
          aria-hidden="true"
          className="absolute bottom-10 left-[7px] top-10 w-px bg-neutral-300"
        />
        {experience.map((job, i) => (
          <li
            key={`${job.org}-${job.period}`}
            className="relative grid gap-3 rounded-[28px] bg-white p-7 sm:p-9 md:grid-cols-[10rem_1fr] md:gap-8"
          >
            <span
              aria-hidden="true"
              className={`absolute -left-8 top-9 size-4 rounded-full ring-4 ring-canvas sm:-left-12 ${
                i === 0 ? "bg-accent" : "border border-neutral-400 bg-white"
              }`}
            />
            <p className="pt-1 text-sm text-neutral-600 slashed-zero tabular-nums">
              {job.period}
            </p>
            <div>
              <h3 className="text-xl font-medium tracking-tight">{job.role}</h3>
              <p className="text-neutral-600">{job.org}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-neutral-700 marker:text-neutral-400">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
