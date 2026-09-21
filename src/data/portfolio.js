// ---------------------------------------------------------------------------
// ALL SITE CONTENT LIVES IN THIS FILE.
//
// Everything below is PLACEHOLDER content. Search for your own details and
// replace them. Nothing else in the project needs to change for a content edit.
//
// Don't forget to also update the <title> and meta description in index.html.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Farrel Putra Imanuel The",
  // Hero reads: "Hey, I'm {name}" / "a {role} {headlineTail}"
  role: "web developer",
  headlineTail: "with an eye for detail",
  intro:
    "I build fast, accessible interfaces for the web. I care about clean code, thoughtful details, and products that feel effortless to use.",
  location: "Jakarta, Indonesia",
  email: "farrelputra141@gmail.com",
};

// Shown in the navbar and footer. Remove any you don't use.
export const socials = [
  { label: "GitHub", href: "https://github.com/farrelpit" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farrel-putra-imanuel-the75ba16326/" },
];

// Yellow pill on the right of the navbar (opens the visitor's email app).
export const navCta = { label: "Contact", hint: "say hi" };

// Four numbers under the hero. Keep them honest.
export const stats = [
  { value: "1", label: "Year of experience" },
  { value: "2", label: "Teams and clients" },
  { value: "6", label: "Projects built" },
];

export const about = {
  statement:
    "I've been helping teams turn rough ideas into fast, dependable web products.",
  paragraphs: [
    "I'm a web developer who enjoys the whole front-end journey: shaping component systems, sweating the small interactions, and keeping pages quick on slow connections.",
    "Outside of work I contribute to open source, write about what I learn, and tinker with side projects that never quite stay small.",
  ],
  current: {
    title: "Associate Member",
    company: "BINUS IT Division",
    description:
      "Building design-system components and performance tooling used by every product team.",
    status: "Open to new opportunities",
  },
};

// No links or screenshots, so each card is text only.
// `featured: true` renders the card wider and in yellow (use on one project).
export const projects = [
  {
    title: "Jabodetabek House Price Prediction",
    type: "Machine learning",
    year: "2025", // set the real year
    description:
      "Predicts house prices across Jabodetabek. Compared Random Forest, LightGBM, and CatBoost, then deployed CatBoost, the most accurate on individual predictions, as a Streamlit app.",
    tech: ["Python", "scikit-learn", "CatBoost", "Optuna", "Streamlit"],
    github: "https://github.com/farrelpit/ML-project", // your README didn't include the repo link
  },
  {
    title: "Budget Control System",
    type: "Client project",
    year: "2026",
    description:
      "A budget control system for a client, connected to Accurate accounting through its API to keep budgets and actual spending in sync.",
    tech: ["React", "REST APIs", "Accurate API"],
  },
  {
    title: "RectUp",
    type: "Web app",
    year: "2025",
    description:
      "A web-based canvas to-do app for students, recognized by top lecturers at BINUS University",
    tech: ["React", "Supabase"],
    github: "https://github.com/x3nozite/rect-up"
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL", "C/C++", "Java"],
  },
  {
    group: "Frontend",
    items: ["React", "Tailwind CSS", "Redux", "Vite"],
  },
  {
    group: "Data and APIs",
    items: ["PostgreSQL", "REST APIs", "Supabase"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub Actions", "Figma", "Azure DevOps"],
  },
];

// Newest first. Add education here too if you like.
export const experience = [
  {
    role: "Associate Programmer",
    org: "BINUS IT Division",
    period: "Mar 2026 - Present",
    bullets: [
    ],
  },
  {
    role: "Programmer",
    org: "Freelance",
    period: "Jan 2026 - Feb 2026",
    bullets: [
      "Built a budget control system for a client, integrating Accurate API",
      "Worked in a team of 3, translating requirements to code",
    ],
  },
  {
    role: "Member",
    org: "Sigma Lab",
    period: "Mar 2025 - Present",
    bullets: [
      "Built a web-based canvas to-do app for students, recognized by top lecturers at BINUS University"
    ],
  },
];
