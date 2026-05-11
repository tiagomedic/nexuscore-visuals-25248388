import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em]",
            isDark ? "text-cyan" : "text-cyan-soft"
          )}
        >
          <span className={cn("h-px w-10", isDark ? "bg-cyan/60" : "bg-primary/40")} />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            isDark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
