import { profile, stats } from "../data/portfolio.js";

/* Decorative white pills that flank the headline (xl screens and up). */
function OrbitIcon() {
  return (
    <svg viewBox="0 0 64 28" className="w-16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <ellipse cx="32" cy="14" rx="30" ry="12" />
      <ellipse cx="32" cy="14" rx="24" ry="12" />
      <ellipse cx="32" cy="14" rx="17" ry="12" />
      <path
        d="M32 6c.6 4.4 2.6 6.4 7 8-4.4 1.6-6.4 3.6-7 8-.6-4.4-2.6-6.4-7-8 4.4-1.6 6.4-3.6 7-8Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LensIcon() {
  return (
    <svg viewBox="0 0 56 28" className="w-14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <ellipse cx="28" cy="14" rx="26" ry="12" />
      <path d="M2 14h52M3.1 10.5h49.8M3.1 17.5h49.8M6.9 7h42.2M6.9 21h42.2M15.4 3.5h25.2M15.4 24.5h25.2" />
    </svg>
  );
}

function Pill({ side, children }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-[15rem] hidden h-[72px] w-[148px] place-items-center rounded-full border border-black/5 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)] xl:grid ${
        side === "left" ? "left-[4%]" : "right-[4%]"
      }`}
    >
      {children}
    </div>
  );
}

/* Thin guide lines that run in from the edges. Each entry is [top, width]. */
const leftLines = [
  ["10.75rem", "22%"],
  ["17.25rem", "4%"],
  ["23.75rem", "13%"],
  ["30.25rem", "9%"],
];
const rightLines = [
  ["10.75rem", "18%"],
  ["17.25rem", "4%"],
  ["23.75rem", "9%"],
  ["30.25rem", "6%"],
];

function Guides() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden xl:block">
      {leftLines.map(([top, w]) => (
        <span key={`l${top}`} className="absolute left-0 h-px bg-line" style={{ top, width: w }} />
      ))}
      {rightLines.map(([top, w]) => (
        <span key={`r${top}`} className="absolute right-0 h-px bg-line" style={{ top, width: w }} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
      <Guides />
      <Pill side="left">
        <OrbitIcon />
      </Pill>
      <Pill side="right">
        <LensIcon />
      </Pill>

      <div className="relative mx-auto max-w-[1130px] text-center">
        <h1 className="text-4xl font-medium leading-[1.12] tracking-[-0.035em] sm:text-6xl xl:text-[4rem] 2xl:text-7xl">
          <span className="relative isolate inline-block px-5 py-2 sm:px-8 sm:py-3">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 origin-left animate-wipe rounded-[18px] bg-accent motion-reduce:animate-none sm:rounded-[22px]"
            />
            Hey, I&rsquo;m {profile.name}
          </span>
          <span className="mx-auto mt-4 block max-w-[22ch] text-balance sm:mt-5">
            a {profile.role} {profile.headlineTail}
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-[60ch] text-lg leading-[1.8] text-neutral-700 sm:mt-10 sm:text-xl sm:leading-[1.8]">
          {profile.intro}
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-y-8 rounded-[24px] bg-white px-4 py-8 sm:mt-20 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse items-center gap-2">
              <dt className="text-sm text-neutral-600">{s.label}</dt>
              <dd className="text-3xl font-medium tracking-tight slashed-zero tabular-nums sm:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
