import { Check, Gauge, Navigation, Speaker, Truck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { onSiteService, serviceGroups } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  Gauge,
  Wrench,
  Navigation,
  Speaker,
  Truck,
};

export function Services() {
  return (
    <section id="servicii" className="scroll-mt-16 bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Serviciile noastre
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {serviceGroups.map((group, index) => {
            const Icon = iconMap[group.icon];
            return (
              <FadeIn
                key={group.title}
                delay={index * 0.1}
                className="rounded-2xl bg-card p-6 shadow-lg shadow-black/10 sm:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {group.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn
          delay={0.2}
          className="mt-6 flex flex-col items-start gap-4 rounded-2xl bg-card p-6 shadow-lg shadow-black/10 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Truck className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{onSiteService.title}</h3>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                {onSiteService.description}
              </p>
            </div>
          </div>
          <WhatsAppButton className="w-full shrink-0 sm:w-auto" />
        </FadeIn>
      </div>
    </section>
  );
}
