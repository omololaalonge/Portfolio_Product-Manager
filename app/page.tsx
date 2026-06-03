import About from "@/components/About";
import ContactFooter from "@/components/ContactFooter";
import EducationCerts from "@/components/EducationCerts";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductPhilosophy from "@/components/ProductPhilosophy";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCerts />
        <ProductPhilosophy />
      </main>
      <ContactFooter />
    </>
  );
}
