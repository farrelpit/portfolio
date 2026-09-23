import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen p-2 sm:p-4 lg:p-[30px]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <div className="rounded-[20px] bg-canvas sm:rounded-[28px]">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}
