import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

/**
 * Nexcore Brasil wordmark. Pure SVG so it scales crisply.
 * Arc above the "N" + "Brasil" in lighter cyan (matches brand guide).
 */
export function Logo({ variant = "light", showTagline = false, className }: LogoProps) {
  const nexcore = variant === "light" ? "#ffffff" : "hsl(220 60% 22%)";
  const brasil = variant === "light" ? "rgba(255,255,255,0.85)" : "hsl(200 65% 60%)";
  const arc = variant === "light" ? "#ffffff" : "hsl(200 75% 55%)";
  const tag = variant === "light" ? "rgba(255,255,255,0.7)" : "hsl(220 40% 40%)";

  return (
    <div className={cn("inline-flex flex-col items-start leading-none select-none", className)}>
      <svg viewBox="0 0 360 90" className="h-10 w-auto" aria-label="Nexcore Brasil">
        {/* Arc */}
        <path
          d="M30 55 Q 180 -5, 330 55"
          fill="none"
          stroke={arc}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <text
          x="0"
          y="82"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="44"
          fontWeight="500"
          letterSpacing="-1"
          fill={nexcore}
        >
          Nexcore
        </text>
        <text
          x="178"
          y="82"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="44"
          fontWeight="300"
          letterSpacing="-0.5"
          fill={brasil}
        >
          Brasil
        </text>
      </svg>
      {showTagline && (
        <span
          className="mt-1 text-[9px] tracking-[0.32em] uppercase"
          style={{ color: tag }}
        >
          Integrated Solutions
        </span>
      )}
    </div>
  );
}
