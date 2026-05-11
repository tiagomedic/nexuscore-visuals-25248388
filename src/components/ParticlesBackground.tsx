"use client";
import { useEffect, useState, useId } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  density?: number;
  color?: string;
}

export function ParticlesBackground({ className, density = 80, color = "#7dd3fc" }: Props) {
  const [ready, setReady] = useState(false);
  const id = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id={`p-${id}`}
      className={cn("absolute inset-0 -z-10", className)}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          color: { value: color },
          number: { value: density, density: { enable: true, width: 800, height: 800 } },
          opacity: {
            value: { min: 0.1, max: 0.7 },
            animation: { enable: true, speed: 1.2, sync: false, startValue: "random" },
          },
          size: { value: { min: 0.5, max: 1.8 } },
          move: {
            enable: true,
            speed: { min: 0.1, max: 0.5 },
            direction: "none",
            random: true,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            color,
            distance: 130,
            opacity: 0.18,
            width: 0.6,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 160, links: { opacity: 0.4 } } },
        },
      }}
    />
  );
}
