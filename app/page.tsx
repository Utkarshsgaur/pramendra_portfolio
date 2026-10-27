import Nav         from "@/app/components/Nav";
import Hero        from "@/app/components/Hero";
import Work        from "@/app/components/Work";
import About       from "@/app/components/About";
import Services    from "@/app/components/Services";
import Contact     from "@/app/components/Contact";
import Footer      from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
