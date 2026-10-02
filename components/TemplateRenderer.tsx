import type { Prospect } from "@/lib/types";
import { DemoForm } from "./DemoForm";

function Trust({ p }: { p: Prospect }) {
  return <div className="trust-row">{[p.rating, p.reviews, p.experience, ...p.trust].filter(Boolean).slice(0, 5).map((x) => <span key={x}>{x}</span>)}</div>;
}

function ProjectCards({ p, technical = false }: { p: Prospect; technical?: boolean }) {
  return <div className="project-grid">{p.caseTitles.map((title, i) => (
    <article className="project-card" key={title}>
      <div className={`project-visual v${i + 1}`}><span>{technical ? "CASO / INSTALACIÓN" : "PROYECTO"} 0{i + 1}</span></div>
      <div className="project-copy"><small>{p.city}</small><h3>{title}</h3><p>{technical ? "Situación → solución → resultado" : "Necesidad → decisión → acabado"}</p></div>
    </article>
  ))}</div>;
}

function Footer({ p }: { p: Prospect }) {
  return <footer className="demo-footer"><b>{p.name}</b><span>{p.city} · {p.phone}</span><small>{p.note}</small></footer>;
}

function R1({ p }: { p: Prospect }) {
  return <main className="demo t-r1">
    <nav><b>{p.shortName}<i>°</i></b><div><a href="#projects">Proyectos</a><a href="#contact">Contacto</a></div></nav>
    <section className="r1-hero"><div className="r1-number">01</div><div><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}</h1><p className="display-accent">{p.heroAccent}</p><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#contact">{p.primaryCta}</a><a href="#projects">{p.secondaryCta}</a></div></div><div className="r1-art"><div className="arch arch-a"/><div className="arch arch-b"/><span>IMAGEN DE PROYECTO REAL</span></div></section>
    <Trust p={p}/>
    <section id="projects" className="section"><header className="section-head"><p>Una selección, no un catálogo.</p><h2>El trabajo tiene que hablar antes que la empresa.</h2></header><ProjectCards p={p}/></section>
    <section className="r1-manifesto"><p>Diseñamos · coordinamos · ejecutamos</p><h2>Menos ruido. Más criterio en cada decisión.</h2><div>{p.services.map((x,i)=><span key={x}>0{i+1} — {x}</span>)}</div></section>
    <section id="contact" className="section split-contact"><div><p className="eyebrow">EMPECEMOS POR EL ESPACIO</p><h2>Cuéntanos qué quieres cambiar.</h2><p>Una primera conversación sirve para entender el proyecto, no para venderte una solución prefabricada.</p></div><DemoForm prospect={p}/></section>
    <Footer p={p}/>
  </main>;
}

function R2({ p }: { p: Prospect }) {
  return <main className="demo t-r2">
    <nav><b>{p.name}</b><div><a href="#process">Proceso</a><a className="nav-cta" href="#contact">Presupuesto</a></div></nav>
    <section className="r2-hero"><div><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}<em>{p.heroAccent}</em></h1><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#contact">{p.primaryCta}</a><a href={`tel:${p.phoneHref}`}>Llamar · {p.phone}</a></div><Trust p={p}/></div><aside><strong>Antes de firmar una obra deberías tener claro:</strong>{["qué incluye el presupuesto","quién coordina","cómo se organiza por fases","qué ocurre si cambia el alcance"].map((x,i)=><div className="check" key={x}><span>0{i+1}</span>{x}</div>)}</aside></section>
    <section id="process" className="section"><header className="section-head"><p>CONTROL DE PRINCIPIO A FIN</p><h2>Un proceso visible reduce incertidumbre.</h2></header><div className="process-grid">{["Briefing","Visita","Propuesta","Plan de obra","Ejecución","Entrega"].map((x,i)=><article key={x}><span>{String(i+1).padStart(2,"0")}</span><h3>{x}</h3><p>{i===0?"Necesidades, m², timing y prioridades.":i===2?"Alcance y partidas explicadas.":i===4?"Seguimiento y coordinación.":"Siguiente paso definido."}</p></article>)}</div></section>
    <section className="dark-band"><div><p className="eyebrow">PRUEBA, NO ADJETIVOS</p><h2>Experiencia + proyectos + reseñas, visibles antes del formulario.</h2></div><ProjectCards p={p}/></section>
    <section id="contact" className="section split-contact"><div><p className="eyebrow">SOLICITUD CUALIFICADA</p><h2>Que la primera llamada empiece con contexto.</h2><p>El formulario recoge la información que normalmente habría que preguntar después.</p></div><DemoForm prospect={p}/></section><Footer p={p}/>
  </main>;
}

function R3({ p }: { p: Prospect }) {
  return <main className="demo t-r3">
    <div className="ticker"><span>REFORMA · PRESUPUESTO · CÓRDOBA · REFORMA · PRESUPUESTO · CÓRDOBA</span></div>
    <nav><b>{p.shortName}</b><a className="nav-cta" href={`tel:${p.phoneHref}`}>☎ {p.phone}</a></nav>
    <section className="r3-hero"><div><div className="status-dot">● PRESUPUESTOS ABIERTOS</div><h1>{p.hero}<br/><mark>{p.heroAccent}</mark></h1><p>{p.subhero}</p><div className="metric-row"><b>{p.rating}</b><span>{p.reviews}</span><span>Sin compromiso</span></div></div><div className="wizard-shell"><div className="wizard-top"><span>PASO 1 DE 3</span><b>Tu proyecto</b></div><DemoForm prospect={p} compact/></div></section>
    <section className="service-strip">{p.services.map((x,i)=><div key={x}><b>0{i+1}</b><span>{x}</span><i>→</i></div>)}</section>
    <section className="section"><header className="section-head"><p>NO HACE FALTA LEER 2.000 PALABRAS</p><h2>Primero captamos intención. Después resolvemos dudas.</h2></header><ProjectCards p={p}/></section>
    <section className="r3-proof"><h2>Tres razones para no perder el lead</h2><div>{["CTA visible siempre","Solicitud que filtra proyecto","Contacto directo desde móvil"].map((x,i)=><article key={x}><strong>{i+1}</strong><p>{x}</p></article>)}</div></section><Footer p={p}/>
  </main>;
}

function C1({ p }: { p: Prospect }) {
  return <main className="demo t-c1">
    <nav><b>{p.shortName}</b><div><a href="#how">Cómo funciona</a><a className="nav-cta" href="#study">Preestudio</a></div></nav>
    <section className="c1-hero"><div><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}</h1><p className="display-accent">{p.heroAccent}</p><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#study">{p.primaryCta}</a><a href={`tel:${p.phoneHref}`}>{p.phone}</a></div></div><div className="energy-orbit"><div className="house">⌂<span>VIVIENDA</span></div><i className="orbit o1"/><i className="orbit o2"/><b>PREESTUDIO</b></div></section>
    <Trust p={p}/>
    <section id="how" className="section"><header className="section-head"><p>DECIDIR CON DATOS</p><h2>La pregunta no es “¿qué máquina compro?”.</h2></header><div className="c1-cards">{["Superficie + aislamiento","Sistema actual","Emisores","Uso + prioridades"].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>Información mínima para orientar el siguiente paso sin prometer ahorros genéricos.</p></article>)}</div></section>
    <section className="soft-band"><ProjectCards p={p} technical/></section>
    <section id="study" className="section split-contact"><div><p className="eyebrow">PREESTUDIO</p><h2>Primero vemos si tiene sentido para tu caso.</h2><p>Una captación consultiva protege al instalador de leads pobres y al cliente de recomendaciones apresuradas.</p></div><DemoForm prospect={p}/></section><Footer p={p}/>
  </main>;
}

function C2({ p }: { p: Prospect }) {
  return <main className="demo t-c2">
    <header className="c2-top"><b>{p.shortName} <span>CLIMA</span></b><a href={`tel:${p.phoneHref}`}>Llamar {p.phone}</a></header>
    <section className="c2-hero"><div><span className="availability">● ATENCIÓN DIRECTA</span><h1>{p.hero}<br/><strong>{p.heroAccent}</strong></h1><p>{p.subhero}</p><div className="quick-services">{p.services.map((x,i)=><a key={x} href="#quote"><span>{["❄","❄❄","▤","↻"][i]}</span><b>{x}</b><i>→</i></a>)}</div></div><aside id="quote"><h2>Presupuesto rápido</h2><p>Lo mínimo para poder orientarte.</p><DemoForm prospect={p} compact/></aside></section>
    <section className="c2-trust"><div><b>{p.rating}</b><span>{p.reviews}</span></div>{p.trust.map(x=><div key={x}>✓ {x}</div>)}</section>
    <section className="section"><header className="section-head"><p>INSTALACIONES REALES</p><h2>Fotos limpias, información útil y contacto siempre cerca.</h2></header><ProjectCards p={p} technical/></section><Footer p={p}/>
  </main>;
}

function C3({ p }: { p: Prospect }) {
  return <main className="demo t-c3">
    <nav><b>{p.shortName}<span>/HVAC</span></b><div><a href="#capabilities">Capacidades</a><a href="#cases">Casos</a><a className="nav-cta" href="#contact">Estudio técnico</a></div></nav>
    <section className="c3-hero"><div><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}</h1><p className="display-accent">{p.heroAccent}</p><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#contact">{p.primaryCta}</a><a href={`tel:${p.phoneHref}`}>{p.phone}</a></div></div><div className="blueprint"><div className="bp-grid"/><span>01 / DIAGNÓSTICO</span><span>02 / DISEÑO</span><span>03 / INSTALACIÓN</span><span>04 / MANTENIMIENTO</span></div></section>
    <section className="c3-metrics"><div><strong>{p.experience}</strong><span>trayectoria</span></div><div><strong>{p.rating}</strong><span>{p.reviews}</span></div><div><strong>360°</strong><span>instalación + mantenimiento</span></div></section>
    <section id="capabilities" className="section"><header className="section-head"><p>CAPACIDADES</p><h2>Orden técnico para que cada segmento encuentre su solución.</h2></header><div className="matrix">{p.services.map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3><p>Diagnóstico · dimensionado · ejecución · soporte</p><b>→</b></article>)}</div></section>
    <section id="cases" className="c3-cases"><div><p className="eyebrow">CASOS</p><h2>El B2B compra evidencia.</h2></div><ProjectCards p={p} technical/></section>
    <section id="contact" className="section split-contact"><div><p className="eyebrow">CONTACTO TÉCNICO</p><h2>Menos “pide información”. Más briefing útil.</h2><p>El formulario puede adaptarse después por segmento: residencial, retail, oficinas, comunidad o industria.</p></div><DemoForm prospect={p}/></section><Footer p={p}/>
  </main>;
}

export function TemplateRenderer({ prospect }: { prospect: Prospect }) {
  switch (prospect.template) {
    case "R1": return <R1 p={prospect}/>;
    case "R2": return <R2 p={prospect}/>;
    case "R3": return <R3 p={prospect}/>;
    case "C1": return <C1 p={prospect}/>;
    case "C2": return <C2 p={prospect}/>;
    case "C3": return <C3 p={prospect}/>;
  }
}
