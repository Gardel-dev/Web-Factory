"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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
  const cards = useMemo(() => prospects.filter((p) => p.sector === niche), [niche]);
  const meta = nicheMeta[niche];

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

        <div className="fan-instruction">pointer_move() · select_template() · inspect_demo()</div>
      </section>

      <section className="showcase-proof" data-reveal>
        <article><strong>06</strong><span>interfaces con lógica comercial distinta</span></article>
        <article><strong>01</strong><span>arquitectura modular mantenible</span></article>
        <article><strong>0</strong><span>dependencias de animación innecesarias</span></article>
      </section>

      <section className="tech-console" data-reveal>
        <header><div><i/><i/><i/></div><span>factory.config.ts</span><b>READY</b></header>
        <pre><code><span className="c-key">const</span> factory = {"{"}
{"
"}  niche: <span className="c-string">"{niche}"</span>,
{"
"}  strategy: <span className="c-string">"conversion-first"</span>,
{"
"}  templates: <span className="c-number">3</span>,
{"
"}  deploy: <span className="c-bool">true</span>
{"
"}{"}"}</code></pre>
      </section>

      <section className="showcase-closing" data-reveal>
        <p>// BUILDING DIGITAL SYSTEMS, NOT GENERIC WEBS</p>
        <h2>Diseño que entra por los ojos.<br/><em>Arquitectura que aguanta detrás.</em></h2>
        <a href="#top">return_to_top() ↑</a>
      </section>
    </main>
  );
}
