import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <About />
    </main>
  );
}
