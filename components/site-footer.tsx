import { Mail, PhoneCall } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import {
  getEmailLink,
  getPhoneLink,
  getWhatsAppLink,
  siteConfig,
} from "@/lib/site-config";
import { hasPublicFile } from "@/lib/public-assets.server";

const socialLinks = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: getWhatsAppLink() },
  { icon: PhoneCall, label: "Telefon", href: getPhoneLink() },
  { icon: Mail, label: "Email", href: getEmailLink() },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.facebookUrl },
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.instagramUrl },
] as const;

export function SiteFooter() {
  const hasLogoFile = hasPublicFile("logo.jpg");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <Logo size="sm" hasLogoFile={hasLogoFile} glowOnHover={false} />

        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}. Toate drepturile rezervate.
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
