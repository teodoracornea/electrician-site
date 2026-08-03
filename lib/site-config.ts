export const siteConfig = {
  name: "Electrician Auto Cluj",
  owner: "Moldovan Dan",
  city: "Cluj-Napoca",
  phone: "+40779247978",
  whatsapp: "40779247978",
  email: "alternator.electro@gmail.com",
  facebookUrl:
    "https://www.facebook.com/profile.php?id=100083288735040&locale=ro_RO",
  instagramUrl: "https://www.instagram.com/electrician.auto.cluj",
} as const;

export const navLinks = [
  { label: "Servicii", href: "#servicii" },
  { label: "Despre noi", href: "#despre-noi" },
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

export function getEmailLink() {
  return `mailto:${siteConfig.email}`;
}
