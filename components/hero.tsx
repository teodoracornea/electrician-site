import Image from "next/image";
import { Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PhoneButton } from "@/components/phone-button";
import { FadeIn } from "@/components/fade-in";
import { hasPublicFile } from "@/lib/public-assets.server";

export function Hero() {
  const hasHeroImage = hasPublicFile("hero.jpg");

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <Zap className="size-4" fill="currentColor" />
            5+ ani experiență în Cluj-Napoca
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Electrician <span className="text-accent">Auto</span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Diagnosticare profesională, reparații electrice auto, alternatoare
            și electromotoare, identificarea și remedierea erorilor de bord,
            verificarea instalației electrice și montaj de accesorii auto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg" />
            <PhoneButton size="lg" variant="outline" />
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-accent bg-card shadow-[0_0_40px_12px_#f5c5428c]"
        >
          {hasHeroImage ? (
            <Image
              src="/hero.jpg"
              alt="Electrician Auto Cluj la lucru"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Zap className="size-16 text-muted-foreground/30" />
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
