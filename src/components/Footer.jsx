import Reveal from "./Reveal.jsx";
import { profile, socials } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[calc(1130px+3rem)] px-4 pb-6 pt-10 sm:px-6 lg:pt-14">
      <Reveal className="rounded-[28px] bg-white px-6 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-3xl font-medium tracking-[-0.03em] sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-[44ch] text-neutral-600">
          I&rsquo;m always happy to talk about new work. Email is the quickest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-accent px-7 py-4 text-lg font-medium transition duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] motion-reduce:hover:translate-y-0 break-all"
        >
          Say hello
        </a>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 text-neutral-700 transition-colors hover:bg-black/5"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <p className="mt-6 text-center text-sm text-neutral-600">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
