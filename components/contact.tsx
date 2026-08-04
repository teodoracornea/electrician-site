import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PhoneButton } from "@/components/phone-button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import {
  getEmailLink,
  getPhoneLink,
  getWhatsAppLink,
  siteConfig,
} from "@/lib/site-config";

const contactMethods = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Scrie-ne direct",
    href: getWhatsAppLink(),
    external: true,
  },
  {
    icon: PhoneCall,
    label: "Telefon",
    value: siteConfig.phone,
    href: getPhoneLink(),
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "Click aici",
    href: getEmailLink(),
    external: false,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Vezi pagina noastră",
    href: siteConfig.facebookUrl,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "Vezi profilul nostru",
    href: siteConfig.instagramUrl,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-muted-foreground">
            {siteConfig.owner} — {siteConfig.name}. Scrie-ne pe WhatsApp sau
            sună-ne direct, răspundem rapid.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <WhatsAppButton size="lg" />
            <PhoneButton size="lg" variant="outline" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-lg shadow-black/10 transition-colors hover:bg-card/80"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <method.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">
                  {method.label}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {method.value}
                </span>
              </span>
            </a>
          ))}
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="size-4 text-accent" />
          {siteConfig.city} și împrejurimi
        </FadeIn>
      </div>
    </section>
  );
}
