import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center md:p-0 p-3">
        <Hero />
        <Contact />
      </div>
    </section>
  );
}
