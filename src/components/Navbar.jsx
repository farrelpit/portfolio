import { useEffect, useState } from "react";
import { profile, socials, navCta } from "../data/portfolio.js";

const sections = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const linkClass =
  "rounded-full px-4 py-2.5 text-[15px] transition-colors hover:bg-black/5";

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M12 3h5a4 4 0 0 1 4 4v5h-5a4 4 0 0 1-4-4V3Z" />
      <path d="M12 21H7a4 4 0 0 1-4-4v-5h5a4 4 0 0 1 4 4v5Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-2rem)] max-w-[1130px] sm:top-4 sm:mt-6 sm:w-[calc(100%-3rem)]">
      <nav
        aria-label="Main"
        className="flex h-[60px] items-center gap-2 rounded-full border border-black/5 bg-white px-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.04)] sm:h-20 sm:px-4"
      >
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="grid size-10 shrink-0 place-items-center rounded-full bg-accent transition-transform duration-200 hover:scale-105 motion-reduce:hover:scale-100 sm:size-12"
        >
          <LogoMark />
        </a>

        {/* Desktop links */}
        <div className="ml-6 hidden items-center lg:flex">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className={linkClass}>
              {s.label}
            </a>
          ))}
          <span aria-hidden="true" className="mx-4 h-4 w-px bg-black/15" />
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="ml-auto whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent-hover sm:px-5 sm:py-3.5 sm:text-[15px]"
        >
          {navCta.label}
          <span className="hidden sm:inline">
            <span aria-hidden="true" className="mx-2 opacity-60">
              ~
            </span>
            {navCta.hint}
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 shrink-0 place-items-center rounded-full transition-colors hover:bg-black/5 sm:size-12 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full mt-2 origin-top animate-fade-up rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] motion-reduce:animate-none lg:hidden"
        >
          <ul className="flex flex-col">
            {sections.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg transition-colors hover:bg-black/5"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <hr className="mx-4 my-2 border-line" />
          <ul className="flex flex-col">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl px-4 py-3 text-lg text-neutral-600 transition-colors hover:bg-black/5"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
