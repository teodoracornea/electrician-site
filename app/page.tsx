import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
    </main>
  );
}
