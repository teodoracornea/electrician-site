import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
