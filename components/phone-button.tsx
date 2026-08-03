import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { getPhoneLink, siteConfig } from "@/lib/site-config";

export function PhoneButton({
  size = "default",
  variant = "outline",
  label,
  className,
}: {
  size?: "default" | "sm" | "lg";
  variant?: "outline" | "secondary" | "ghost";
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={getPhoneLink()}
      className={cn(buttonVariants({ size, variant }), className)}
    >
      <PhoneCall className="size-4" />
      {label ?? siteConfig.phone}
    </a>
  );
}
