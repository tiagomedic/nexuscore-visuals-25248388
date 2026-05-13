import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  selector?: string; // child selector to stagger; if omitted animates the container
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLElement>(opts: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      selector,
      y = 40,
      opacity = 0,
      duration = 1,
      stagger = 0.12,
      start = "top 85%",
      once = true,
    } = opts;

    const targets = selector ? el.querySelectorAll(selector) : [el];
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.set(targets, { y, opacity, willChange: "transform, opacity" });
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          invalidateOnRefresh: true,
        },
      });
    }, el);

    // Refresh after images load to recompute trigger positions
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}