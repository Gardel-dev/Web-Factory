"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { prospects } from "@/lib/data";

type Niche = "reformas" | "climatizacion";

const nicheMeta: Record<Niche, { label: string; eyebrow: string; description: string }> = {
  reformas: {
    label: "Reformas",
    eyebrow: "VIVIENDA · INTERIORISMO · OBRA",
    description: "Tres maneras de vender confianza, deseo o velocidad según el tipo de empresa y el ticket.",
  },
  climatizacion: {
    label: "Climatización",
    eyebrow: "AEROTERMIA · AIRE · HVAC",
    description: "Tres sistemas para convertir una necesidad técnica en una decisión mucho más fácil de tomar.",
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
  const cards = useMemo(() => prospects.filter((p) => p.sector === niche), [niche]);
  const meta = nicheMeta[niche];

  return (
    <main
      id="top"
      className="showcase-home"
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
          <span>WF</span>
          <div><b>WEB FACTORY</b><small>Conversion systems</small></div>
        </Link>
        <div className="showcase-nav-note">6 conceptos · 2 sectores · 1 objetivo</div>
      </nav>

      <section className="showcase-hero">
        <p className="showcase-kicker" data-reveal>SISTEMAS DIGITALES PARA NEGOCIOS QUE YA SABEN HACER SU TRABAJO</p>
        <h1 data-reveal>
          Una web no debería
          <span>parecer una plantilla.</span>
        </h1>
        <p className="showcase-sub" data-reveal>
          Debería hacer evidente por qué elegirte. Hemos diseñado seis direcciones comerciales distintas
          para demostrarlo.
        </p>
      </section>

      <section className="niche-showcase" aria-label="Selecciona un sector">
        <div className="niche-switch" data-reveal>
          {(Object.keys(nicheMeta) as Niche[]).map((id) => (
            <button
              key={id}
              className={niche === id ? "active" : ""}
              onClick={() => setNiche(id)}
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

        <div className="fan-stage" key={"fan-" + niche}>
          {cards.map((p, index) => (
            <Link
              href={"/demo/" + p.slug}
              key={p.slug}
              className={"fan-card fan-card-" + (index + 1) + " fan-" + p.template.toLowerCase()}
              data-tilt
            >
              <div className="fan-shine" />
              <header>
                <span>{p.template}</span>
                <small>{templateNames[p.template]}</small>
              </header>
              <div className="fan-visual" aria-hidden="true">
                <i className="fan-orb o1" />
                <i className="fan-orb o2" />
                <b>{p.template}</b>
              </div>
              <div className="fan-body">
                <p>{p.eyebrow}</p>
                <h2>{p.hero}</h2>
                <div><span>{p.city}</span><strong>Explorar concepto ↗</strong></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="fan-instruction">Mueve el cursor · abre un concepto · compara enfoques</div>
      </section>

      <section className="showcase-proof" data-reveal>
        <article><strong>06</strong><span>sistemas con identidad propia</span></article>
        <article><strong>01</strong><span>arquitectura modular detrás</span></article>
        <article><strong>∞</strong><span>variantes a partir de datos reales</span></article>
      </section>

      <section className="showcase-closing" data-reveal>
        <p>La tecnología es la parte fácil.</p>
        <h2>Lo difícil es diseñar una web que el cliente <em>quiera</em> comprar.</h2>
        <a href="#top">Volver arriba ↑</a>
      </section>
    </main>
  );
}
