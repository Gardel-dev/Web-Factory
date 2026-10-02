"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { prospects } from "@/lib/data";

type Niche = "reformas" | "climatizacion";

const nicheMeta: Record<Niche, { label: string; eyebrow: string; description: string }> = {
  reformas: {
    label: "Reformas",
    eyebrow: "VIVIENDA · INTERIORISMO · OBRA",
    description: "Tres sistemas para vender deseo, confianza o velocidad según el tipo de empresa y su ticket.",
  },
  climatizacion: {
    label: "Climatización",
    eyebrow: "AEROTERMIA · AIRE · HVAC",
    description: "Tres sistemas para convertir una necesidad técnica en una decisión más simple y mejor cualificada.",
  },
};

const templateNames = {
  R1: "Premium editorial",
  R2: "Confianza y proceso",
  R3: "Conversión directa",
  C1: "Consultiva de alto ticket",
  C2: "Express mobile-first",
  C3: "Técnica B2B",
};

export function FactoryShowcase() {
  const [niche, setNiche] = useState<Niche>("reformas");
  const [activeCard, setActiveCard] = useState(0);
  const fanRef = useRef<HTMLDivElement>(null);

  const cards = useMemo(() => prospects.filter((p) => p.sector === niche), [niche]);
  const meta = nicheMeta[niche];

  useEffect(() => {
    const saved = window.sessionStorage.getItem("web-factory:niche");
    if (saved === "reformas" || saved === "climatizacion") {
      setNiche(saved);
    }
  }, []);

  useEffect(() => {
    setActiveCard(0);
    if (window.matchMedia("(max-width: 650px)").matches) {
      requestAnimationFrame(() => fanRef.current?.scrollTo({ left: 0, behavior: "instant" }));
    }
  }, [niche]);

  const selectNiche = (next: Niche) => {
    setNiche(next);
    window.sessionStorage.setItem("web-factory:niche", next);
  };

  return (
    <main
      id="top"
      className="showcase-home tech-home"
      onPointerMove={(event) => {
        const node = event.currentTarget;
        node.style.setProperty("--home-x", event.clientX + "px");
        node.style.setProperty("--home-y", event.clientY + "px");
      }}
    >
      <div className="showcase-aurora a1" />
      <div className="showcase-aurora a2" />
      <div className="showcase-grid-bg" />

      <nav className="showcase-nav" data-reveal>
        <Link href="/" className="showcase-brand">
          <span>{"</>"}</span>
          <div>
            <b>WEB FACTORY</b>
            <small>built by developer · conversion systems</small>
          </div>
        </Link>
        <div className="tech-status">
          <i />
          <span>system_online</span>
          <b>v0.2</b>
        </div>
      </nav>

      <section className="showcase-hero">
        <div className="tech-path" data-reveal>
          <span>~/web-factory</span><i>/</i><b>production</b>
        </div>
        <p className="showcase-kicker" data-reveal>DISEÑO · CÓDIGO · CONVERSIÓN</p>
        <h1 data-reveal>
          Webs pensadas
          <span>como software.</span>
        </h1>
        <p className="showcase-sub" data-reveal>
          No parto de una plantilla y cambio colores. Diseño sistemas reutilizables, los adapto al negocio
          y los convierto en experiencias que parecen hechas desde cero.
        </p>

        <div className="tech-stack" data-reveal aria-label="Arquitectura del proyecto">
          <span><i>01</i> research</span>
          <b>→</b>
          <span><i>02</i> strategy</span>
          <b>→</b>
          <span><i>03</i> code</span>
          <b>→</b>
          <span><i>04</i> deploy</span>
        </div>
      </section>

      <section className="niche-showcase" aria-label="Selecciona un sector">
        <div className="niche-switch" data-reveal>
          {(Object.keys(nicheMeta) as Niche[]).map((id) => (
            <button
              key={id}
              className={niche === id ? "active" : ""}
              onClick={() => selectNiche(id)}
              aria-pressed={niche === id}
            >
              {nicheMeta[id].label}
            </button>
          ))}
          <span className={"switch-glider " + (niche === "climatizacion" ? "right" : "")} />
        </div>

        <div className="niche-copy" key={niche}>
          <span>{meta.eyebrow}</span>
          <p>{meta.description}</p>
        </div>

        <div
          className="fan-stage"
          key={"fan-" + niche}
          ref={fanRef}
          onScroll={(event) => {
            if (!window.matchMedia("(max-width: 650px)").matches) return;
            const stage = event.currentTarget;
            const center = stage.getBoundingClientRect().left + stage.clientWidth / 2;
            let closest = 0;
            let closestDistance = Number.POSITIVE_INFINITY;

            Array.from(stage.querySelectorAll<HTMLElement>(".fan-card")).forEach((card, index) => {
              const rect = card.getBoundingClientRect();
              const distance = Math.abs(rect.left + rect.width / 2 - center);
              if (distance < closestDistance) {
                closestDistance = distance;
                closest = index;
              }
            });

            setActiveCard(closest);
          }}
        >
          {cards.map((p, index) => (
            <Link
              href={"/demo/" + p.slug}
              key={p.slug}
              className={
                "fan-card fan-card-" + (index + 1) +
                " fan-" + p.template.toLowerCase() +
                (index === activeCard ? " is-active" : index < activeCard ? " is-before" : " is-after")
              }
              data-tilt
              data-reveal
            >
              <div className="fan-shine" />
              <header>
                <span>{p.template}</span>
                <small>{templateNames[p.template]}</small>
              </header>
              <div className="fan-visual" aria-hidden="true">
                <div className="fan-code">
                  <span>template</span>
                  <b>:</b>
                  <strong>"{p.template}"</strong>
                </div>
                <i className="fan-orb o1" />
                <i className="fan-orb o2" />
                <b>{p.template}</b>
              </div>
              <div className="fan-body">
                <p>{p.eyebrow}</p>
                <h2>{p.hero}</h2>
                <div><span>{p.city}</span><strong>open_demo() ↗</strong></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="fan-instruction">
          <span className="desktop-instruction">pointer_move() · select_template() · inspect_demo()</span>
          <span className="mobile-instruction">desliza · centra · toca para abrir</span>
        </div>
      </section>

      <section className="showcase-proof">
        <article data-reveal>
          <strong><span className="desktop-count">06</span><span className="mobile-count">6</span></strong>
          <span>interfaces con lógica comercial distinta</span>
        </article>
        <article data-reveal>
          <strong><span className="desktop-count">01</span><span className="mobile-count">1</span></strong>
          <span>arquitectura modular mantenible</span>
        </article>
        <article data-reveal><strong>0</strong><span>dependencias de animación innecesarias</span></article>
      </section>

      <section className="showcase-closing" data-reveal>
        <p>// BUILDING DIGITAL SYSTEMS, NOT GENERIC WEBS</p>
        <h2>Diseño que entra por los ojos.<br/><em>Arquitectura que aguanta detrás.</em></h2>
        <a href="#top">return_to_top() ↑</a>
      </section>
    </main>
  );
}
