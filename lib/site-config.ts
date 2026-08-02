export const siteConfig = {
  name: "Electrician Auto Cluj",
  owner: "Moldovan Dan",
  city: "Cluj-Napoca",
  phone: "+40779247978",
  whatsapp: "40779247978",
  facebookUrl:
    "https://www.facebook.com/profile.php?id=100083288735040&locale=ro_RO",
} as const;

export const navLinks = [
  { label: "Servicii", href: "#servicii" },
  { label: "Despre noi", href: "#despre-noi" },
  { label: "Testimoniale", href: "#testimoniale" },
  { label: "Contact", href: "#contact" },
] as const;

const defaultWhatsAppMessage = `Bună ziua, am nevoie de o interventie la mașină.
Marca și modelul:
Anul fabricației:
Problema: `;

export function getWhatsAppLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getPhoneLink() {
  return `tel:${siteConfig.phone}`;
}
