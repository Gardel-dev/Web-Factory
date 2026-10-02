"use client";

import { useEffect, useRef } from "react";

type Props = {
  titles: string[];
  zone: string;
};

export function C2Conveyor({ titles, zone }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const resumeAtRef = useRef(0);
  const mobileRef = useRef(false);

  const items = [...titles, ...titles];

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const media = window.matchMedia("(max-width: 650px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = performance.now();

    const normalize = () => {
      const half = track.scrollWidth / 2;
      if (!half) return;
      while (xRef.current <= -half) xRef.current += half;
      while (xRef.current > 0) xRef.current -= half;
    };

    const render = () => {
      track.style.transform = `translate3d(${xRef.current}px,0,0)`;
    };

    const tick = (now: number) => {
      const dt = Math.min(32, now - previous);
      previous = now;

      mobileRef.current = media.matches;

      if (mobileRef.current && !reduced.matches && !draggingRef.current && now >= resumeAtRef.current) {
        xRef.current -= (34 * dt) / 1000;
        normalize();
        render();
      }

      frame = requestAnimationFrame(tick);
    };

    if (media.matches) {
      track.style.animation = "none";
      render();
    }

    const onMediaChange = () => {
      mobileRef.current = media.matches;
      if (media.matches) {
        track.style.animation = "none";
        render();
      } else {
        xRef.current = 0;
        track.style.transform = "";
        track.style.animation = "";
      }
    };

    media.addEventListener("change", onMediaChange);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener("change", onMediaChange);
      track.style.transform = "";
      track.style.animation = "";
    };
  }, []);

  const beginDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!mobileRef.current) return;
    draggingRef.current = true;
    lastPointerXRef.current = event.clientX;
    resumeAtRef.current = Number.POSITIVE_INFINITY;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };

  const drag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!mobileRef.current || !draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const delta = event.clientX - lastPointerXRef.current;
    lastPointerXRef.current = event.clientX;
    xRef.current += delta;

    const half = track.scrollWidth / 2;
    if (half) {
      while (xRef.current <= -half) xRef.current += half;
      while (xRef.current > 0) xRef.current -= half;
    }

    track.style.transform = `translate3d(${xRef.current}px,0,0)`;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!mobileRef.current || !draggingRef.current) return;
    draggingRef.current = false;
    resumeAtRef.current = performance.now() + 500;
    event.currentTarget.classList.remove("is-dragging");

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="c2-conveyor-wrap c2-conveyor-interactive"
      data-reveal
      onPointerDown={beginDrag}
      onPointerMove={drag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="c2-conveyor">
        {items.map((title, i) => {
          const original = i % titles.length;
          return (
            <article className="c2-ticket" key={title + i} aria-hidden={i >= titles.length}>
              <header><span>INSTALACIÓN 0{original + 1}</span><b>● DISPONIBLE</b></header>
              <div>
                <h3>{title}</h3>
                <p>{original === 0 ? "Necesidad clara, respuesta directa y pocos pasos." : original === 1 ? "Servicio local con CTA visible desde cualquier punto." : "El móvil como canal principal, no como versión reducida."}</p>
              </div>
              <footer><span>{zone}</span><b>Consultar →</b></footer>
            </article>
          );
        })}
      </div>
    </div>
  );
}
