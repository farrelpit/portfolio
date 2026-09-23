import Reveal from "./Reveal.jsx";

export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-[calc(1130px+3rem)] scroll-mt-28 px-4 py-10 sm:px-6 lg:py-14"
    >
      {title && (
        <Reveal as="h2" className="mb-6 text-3xl font-medium tracking-tight sm:mb-8 sm:text-4xl">
          {title}
        </Reveal>
      )}
      {children}
    </section>
  );
}
