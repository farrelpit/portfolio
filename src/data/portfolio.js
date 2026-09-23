export const profile = {
  name: "Farrel Putra Imanuel The",
  role: "web developer",
  headlineTail: "with an eye for detail",
  intro:
    "I build fast, accessible interfaces for the web. I care about clean code, thoughtful details, and products that feel effortless to use.",
  location: "Jakarta, Indonesia",
  email: "farrelputra141@gmail.com",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/farrelpit" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farrel-putra-imanuel-the75ba16326/" },
];

export const navCta = { label: "Contact", hint: "say hi" };

export const heroCtas = {
  primary: { label: "View my work", href: "#works" },
  secondary: { label: "Contact me" },
};
export const about = {
  statement:
    "Computer Science undergraduate building full-stack web products, one feature at a time.",
  paragraphs: [
    "I'm currently studying Computer Science at BINUS University, where I've picked up hands-on experience building full-stack web applications.",
    "I've worked in Agile/Scrum teams to ship features in fast-paced environments.",
  ],
  current: {
    title: "Associate Member",
    company: "BINUS IT Division",
    description:
      "Developing frontend features in React and integrating REST APIs as part of a small team.",
    status: "Open to new opportunities",
  },
};


export const projects = [
  {
    title: "Jabodetabek House Price Prediction",
    type: "Machine learning",
    year: "2026",
    description:
      "Predicts house prices across Jabodetabek. Compared Random Forest, LightGBM, and CatBoost, then deployed CatBoost, the most accurate on individual predictions, as a Streamlit app.",
    tech: ["Python", "scikit-learn", "CatBoost", "Optuna", "Streamlit"],
    github: "https://github.com/farrelpit/ML-project",
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
    group: "Core",
    items: ["JavaScript", "TypeScript", "HTML/CSS", "React", "Python", "Java", "C/C++", "SQL", "REST APIs"],
  },
  {
    group: "Familiar with",
    items: ["Laravel", "ASP.NET Core Web API", "SSMS", "PostgreSQL (Supabase)"],
  },
  {
    group: "Tools",
    items: ["Git", "Postman", "Swagger", "Supabase", "Azure DevOps"],
  },
  {
    group: "Methods",
    items: ["Agile", "Scrum"],
  },
  {
    group: "Soft Skills",
    items: ["Logical Thinking", "Analytical Skills", "Teamwork", "Communication", "Problem Solving", "Adaptability"],
  },
];

export const experience = [
  {
    role: "Associate Member",
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
