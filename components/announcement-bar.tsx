import { getPhoneLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";

export function AnnouncementBar() {
  return (
    <div className="bg-accent px-4 py-2 text-center text-sm leading-snug font-medium text-accent-foreground">
      Cauți electrician? Sună sau scrie-ne acum pe{" "}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        WhatsApp
      </a>{" "}
      și primești o ofertă personalizată în câteva minute:{" "}
      <a href={getPhoneLink()} className="underline underline-offset-2">
        {siteConfig.phone}
      </a>
    </div>
  );
}
