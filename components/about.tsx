import Image from "next/image";
import { Award, Handshake, Home, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { aboutHighlights, aboutParagraphs } from "@/lib/about";
import { hasPublicFile } from "@/lib/public-assets.server";

const iconMap: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  Home,
  Handshake,
};

export function About() {
  const hasAboutPhoto = hasPublicFile("hero.jpg");

  return (
    <section
      id="despre-noi"
      className="relative z-10 scroll-mt-16 bg-background/80 py-16 sm:py-24"
    >
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

        <FadeIn delay={0.1} className="mt-10 flex flex-col gap-6 lg:mt-0">
          {hasAboutPhoto && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-accent bg-card">
              <Image
                src="/hero.jpg"
                alt="Electrician Auto Cluj la lucru"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="rounded-2xl bg-card p-6 shadow-lg shadow-black/10 sm:p-8">
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
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
