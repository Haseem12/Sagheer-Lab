import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Pillars } from "./components/Pillars";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Journal } from "./components/Journal";
import { Opportunities } from "./components/Opportunities";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <ProjectShowcase />
        <Journal />
        <Opportunities />
      </main>
      <Footer />
    </div>
  );
}