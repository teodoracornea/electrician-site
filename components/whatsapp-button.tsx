import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getWhatsAppLink } from "@/lib/site-config";

export function WhatsAppButton({
  size = "default",
  label = "Scrie pe WhatsApp",
  message,
  className,
}: {
  size?: "default" | "sm" | "lg";
  label?: string;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ size }),
        "bg-[#25D366] text-white hover:bg-[#20bd5a]",
        className
      )}
    >
      <WhatsAppIcon className="size-4" />
      {label}
    </a>
  );
}
