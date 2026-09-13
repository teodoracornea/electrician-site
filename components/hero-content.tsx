import { Zap } from "lucide-react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PhoneButton } from "@/components/phone-button";

export function HeroContent() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-black/30 px-3 py-1 text-sm font-medium text-accent backdrop-blur-sm">
        <Zap className="size-4" fill="currentColor" />
        5+ ani experiență
      </span>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
        Electrician <span className="text-accent">Auto</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
        Diagnosticare profesională, reparații electrice auto, alternatoare și
        electromotoare, identificarea și remedierea erorilor de bord,
        verificarea instalației electrice și montaj de accesorii auto.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <WhatsAppButton size="lg" />
        <PhoneButton size="lg" variant="outline" />
      </div>
    </div>
  );
}
