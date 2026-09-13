import { ExplodedView } from "@/components/exploded-view";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <ExplodedView />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
