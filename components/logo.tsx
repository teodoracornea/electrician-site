import Image from "next/image";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const sizeMap = {
  sm: { chip: "size-9", image: 28 },
  md: { chip: "size-11", image: 34 },
  lg: { chip: "size-14", image: 44 },
} as const;

export function Logo({
  size = "md",
  showName = true,
  hasLogoFile = false,
  glowOnHover = true,
  className,
}: {
  size?: keyof typeof sizeMap;
  showName?: boolean;
  hasLogoFile?: boolean;
  glowOnHover?: boolean;
  className?: string;
}) {
  const { chip, image } = sizeMap[size];

  return (
    <div className={cn(glowOnHover && "group", "flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-card ring-1 ring-white/10 transition-shadow duration-300",
          glowOnHover && "group-hover:shadow-[0_0_24px_6px_#f5c5428c]",
          chip
        )}
      >
        {hasLogoFile ? (
          <Image
            src="/logo.jpg"
            alt={siteConfig.name}
            width={image}
            height={image}
            className="rounded-full object-cover"
            priority
          />
        ) : (
          <Zap
            className="text-accent"
            style={{ width: image * 0.55, height: image * 0.55 }}
            fill="currentColor"
          />
        )}
      </span>
      {showName && (
        <span className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-tight text-foreground">
            Electrician Auto
          </span>
          <span className="text-xs font-medium text-accent">
            {siteConfig.city}
          </span>
        </span>
      )}
    </div>
  );
}
