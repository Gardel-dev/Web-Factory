"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealSeen = new WeakSet<Element>();
    const tiltCleanups = new Map<HTMLElement, () => void>();

    const observer = reduce
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                (entry.target as HTMLElement).classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
        );

    const attachTilt = (node: HTMLElement) => {
      if (tiltCleanups.has(node)) return;

      const onMove = (event: PointerEvent) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
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

      tiltCleanups.set(node, () => {
        node.removeEventListener("pointermove", onMove);
        node.removeEventListener("pointerleave", onLeave);
      });
    };

    const wireElement = (element: Element) => {
      const revealNodes: Element[] = [];
      const tiltNodes: HTMLElement[] = [];

      if (element.matches?.("[data-reveal]")) revealNodes.push(element);
      revealNodes.push(...Array.from(element.querySelectorAll("[data-reveal]")));

      if (element instanceof HTMLElement && element.matches("[data-tilt]")) tiltNodes.push(element);
      tiltNodes.push(
        ...Array.from(element.querySelectorAll<HTMLElement>("[data-tilt]"))
      );

      revealNodes.forEach((node) => {
        if (revealSeen.has(node)) return;
        revealSeen.add(node);

        if (reduce) {
          node.classList.add("is-visible");
        } else {
          observer?.observe(node);
        }
      });

      tiltNodes.forEach(attachTilt);
    };

    // App Router keeps the root layout mounted, so every route change needs
    // a fresh pass over the newly rendered page.
    requestAnimationFrame(() => wireElement(document.body));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) wireElement(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
