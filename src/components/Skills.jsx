import Section from "./Section.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 rounded-[28px] bg-white p-8 sm:grid-cols-2 sm:p-12">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-4 text-base font-medium">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-canvas px-4 py-2 text-sm text-neutral-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
