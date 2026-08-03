import { Award, Handshake, Home, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { aboutHighlights, aboutParagraphs } from "@/lib/about";

const iconMap: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  Home,
  Handshake,
};

export function About() {
  return (
    <section id="despre-noi" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Despre noi
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="mt-10 rounded-2xl bg-card p-6 shadow-lg shadow-black/10 sm:p-8 lg:mt-0"
        >
          <ul className="divide-y divide-border">
            {aboutHighlights.map((highlight) => {
              const Icon = iconMap[highlight.icon];
              return (
                <li key={highlight.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{highlight.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
