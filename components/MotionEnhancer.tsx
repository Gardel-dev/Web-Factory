"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
    );

    revealNodes.forEach((node) => observer.observe(node));

    const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const cleanups = tiltNodes.map((node) => {
      const onMove = (event: PointerEvent) => {
        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const ry = (px - 0.5) * 7;
        const rx = (0.5 - py) * 7;
        node.style.setProperty("--tilt-x", rx.toFixed(2) + "deg");
        node.style.setProperty("--tilt-y", ry.toFixed(2) + "deg");
        node.style.setProperty("--pointer-x", (px * 100).toFixed(1) + "%");
        node.style.setProperty("--pointer-y", (py * 100).toFixed(1) + "%");
      };
      const onLeave = () => {
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
      };
      node.addEventListener("pointermove", onMove);
      node.addEventListener("pointerleave", onLeave);
      return () => {
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
