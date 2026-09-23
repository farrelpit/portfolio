import Section from "./Section.jsx";
import Reveal from "./Reveal.jsx";
import { about, profile } from "../data/portfolio.js";

export default function About() {
  const { current } = about;

  return (
    <Section id="about">
      <div className="grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        <Reveal className="flex flex-col rounded-[28px] bg-white p-8 sm:p-12">
          <h2 className="max-w-[20ch] text-balance text-3xl font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]">
            {about.statement}
          </h2>
          <div className="mt-8 max-w-[56ch] space-y-4 leading-relaxed text-neutral-600">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-sm text-neutral-600 lg:mt-auto lg:pt-10">
            Based in {profile.location}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="flex min-h-[320px] flex-col justify-between rounded-[28px] bg-gradient-to-br from-slate via-ink to-ink p-8 text-white sm:p-10"
        >
          <div>
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {current.title}
            </h3>
            <p className="mt-1 text-neutral-400">Currently at {current.company}</p>
            <p className="mt-6 max-w-[34ch] leading-relaxed text-neutral-300">
              {current.description}
            </p>
          </div>
          <p className="mt-10 inline-flex w-fit items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-sm">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {current.status}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
