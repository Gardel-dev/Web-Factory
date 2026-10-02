import type { Prospect } from "@/lib/types";
import { DemoForm } from "./DemoForm";

function Trust({ p }: { p: Prospect }) {
  return (
    <div className="trust-row" data-reveal>
      {[p.rating, p.reviews, p.experience, ...p.trust].filter(Boolean).slice(0, 5).map((x) => (
        <span key={x}>{x}</span>
      ))}
    </div>
  );
}

function Footer({ p }: { p: Prospect }) {
  return (
    <footer className="demo-footer" data-reveal>
      <b>{p.name}</b>
      <span>{p.city} · {p.phone}</span>
      <small>{p.note}</small>
    </footer>
  );
}

function R1Cases({ p }: { p: Prospect }) {
  return (
    <div className="r1-triptych">
      {p.caseTitles.map((title, i) => (
        <article className="r1-story" key={title} data-reveal>
          <div className="r1-story-visual" aria-hidden="true" />
          <div className="r1-story-copy">
            <span>0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{i === 0 ? "Materiales cálidos · luz · continuidad" : i === 1 ? "Distribución · detalle · proporción" : "Carácter · uso · permanencia"}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function R2Cases({ p }: { p: Prospect }) {
  return (
    <div className="r2-ledger">
      {p.caseTitles.map((title, i) => (
        <article className="r2-case-row" key={title} data-reveal>
          <span>0{i + 1}</span>
          <h3>{title}</h3>
          <p>{i === 0 ? "Un solo alcance, fases visibles y un interlocutor." : i === 1 ? "Decisiones cerradas antes de entrar en obra." : "Entrega ordenada, repaso y cierre del proyecto."}</p>
          <b>→</b>
        </article>
      ))}
    </div>
  );
}

function R3Cases({ p }: { p: Prospect }) {
  return (
    <div className="r3-snap-shell" data-reveal>
      <div className="r3-snap-track">
        {p.caseTitles.map((title, i) => (
          <article className="r3-snap-card" key={title}>
            <span>CASO 0{i + 1}</span>
            <div className="r3-symbol">{["↗", "◇", "+"][i]}</div>
            <div>
              <h3>{title}</h3>
              <p>{i === 0 ? "Tipo de reforma → metros → timing → contacto." : i === 1 ? "La información útil aparece antes que el discurso corporativo." : "Desde móvil, pedir presupuesto no debería sentirse como rellenar un expediente."}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="r3-snap-dots" aria-hidden="true"><i /><i /><i /></div>
    </div>
  );
}

function C1Cases({ p }: { p: Prospect }) {
  return (
    <div className="c1-orbit-showcase" data-reveal>
      <div className="c1-orbit-core">
        <div><strong>Tu vivienda</strong><br/><span>ANTES QUE LA MÁQUINA</span></div>
      </div>
      {p.caseTitles.map((title, i) => (
        <article className="c1-orbit-card" key={title}>
          <span>0{i + 1} · PREESTUDIO</span>
          <h3>{title}</h3>
          <p>{i === 0 ? "Superficie, aislamiento y hábitos." : i === 1 ? "Sistema actual, emisores y objetivo de cambio." : "Demanda térmica, prioridades y siguiente paso técnico."}</p>
        </article>
      ))}
    </div>
  );
}

function C2Cases({ p }: { p: Prospect }) {
  const items = [...p.caseTitles, ...p.caseTitles];
  return (
    <div className="c2-conveyor-wrap" data-reveal>
      <div className="c2-conveyor">
        {items.map((title, i) => {
          const original = i % p.caseTitles.length;
          return (
            <article className="c2-ticket" key={title + i} aria-hidden={i >= p.caseTitles.length}>
              <header><span>INSTALACIÓN 0{original + 1}</span><b>● DISPONIBLE</b></header>
              <div>
                <h3>{title}</h3>
                <p>{original === 0 ? "Necesidad clara, respuesta directa y pocos pasos." : original === 1 ? "Servicio local con CTA visible desde cualquier punto." : "El móvil como canal principal, no como versión reducida."}</p>
              </div>
              <footer><span>{p.zone}</span><b>Consultar →</b></footer>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function C3Cases({ p }: { p: Prospect }) {
  return (
    <div className="c3-dossier" data-reveal>
      {p.caseTitles.map((title, i) => (
        <article className="c3-dossier-card" key={title}>
          <span>CASE / 0{i + 1}</span>
          <b>{String(i + 1).padStart(2, "0")}</b>
          <h3>{title}</h3>
          <p>{i === 0 ? "Necesidad → dimensionado → instalación → mantenimiento." : i === 1 ? "Capacidad técnica presentada por contexto, no por catálogo." : "Evidencia, continuidad operativa y contacto técnico cualificado."}</p>
        </article>
      ))}
    </div>
  );
}

function R1({ p }: { p: Prospect }) {
  return (
    <main className="demo t-r1">
      <nav data-reveal><b>{p.shortName}<i>°</i></b><div><a href="#projects">Proyectos</a><a href="#contact">Contacto</a></div></nav>
      <section className="r1-hero">
        <div className="r1-number" data-reveal>01</div>
        <div data-reveal><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}</h1><p className="display-accent">{p.heroAccent}</p><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#contact">{p.primaryCta}</a><a href="#projects">{p.secondaryCta}</a></div></div>
        <div className="r1-art" data-reveal><div className="arch arch-a"/><div className="arch arch-b"/><span>PROYECTO / ESPACIO / MATERIA</span></div>
      </section>
      <Trust p={p}/>
      <section id="projects" className="section">
        <header className="section-head" data-reveal><p>UNA SELECCIÓN, NO UN CATÁLOGO</p><h2>El trabajo tiene que hablar antes que la empresa.</h2></header>
        <R1Cases p={p}/>
      </section>
      <section className="r1-manifesto" data-reveal><p>DISEÑAMOS · COORDINAMOS · EJECUTAMOS</p><h2>Menos ruido. Más criterio en cada decisión.</h2><div>{p.services.map((x,i)=><span key={x}>0{i+1} — {x}</span>)}</div></section>
      <section id="contact" className="section split-contact"><div data-reveal><p className="eyebrow">EMPECEMOS POR EL ESPACIO</p><h2>Cuéntanos qué quieres cambiar.</h2><p>Una primera conversación sirve para entender el proyecto, no para venderte una solución prefabricada.</p></div><div data-reveal><DemoForm prospect={p}/></div></section>
      <Footer p={p}/>
    </main>
  );
}

function R2({ p }: { p: Prospect }) {
  return (
    <main className="demo t-r2">
      <nav data-reveal><b>{p.name}</b><div><a href="#process">Proceso</a><a className="nav-cta" href="#contact">Presupuesto</a></div></nav>
      <section className="r2-hero">
        <div data-reveal><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}<em>{p.heroAccent}</em></h1><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#contact">{p.primaryCta}</a><a href={"tel:" + p.phoneHref}>Llamar · {p.phone}</a></div><Trust p={p}/></div>
        <aside data-reveal><strong>Antes de firmar una obra deberías tener claro:</strong>{["qué incluye el presupuesto","quién coordina","cómo se organiza por fases","qué ocurre si cambia el alcance"].map((x,i)=><div className="check" key={x}><span>0{i+1}</span>{x}</div>)}</aside>
      </section>
      <section id="process" className="section"><header className="section-head" data-reveal><p>CONTROL DE PRINCIPIO A FIN</p><h2>Un proceso visible reduce incertidumbre.</h2></header><div className="process-grid">{["Briefing","Visita","Propuesta","Plan de obra","Ejecución","Entrega"].map((x,i)=><article key={x} data-reveal><span>{String(i+1).padStart(2,"0")}</span><h3>{x}</h3><p>{i===0?"Necesidades, m², timing y prioridades.":i===2?"Alcance y partidas explicadas.":i===4?"Seguimiento y coordinación.":"Siguiente paso definido."}</p></article>)}</div></section>
      <section className="dark-band"><div data-reveal><p className="eyebrow">PRUEBA, NO ADJETIVOS</p><h2>La experiencia se demuestra proyecto a proyecto.</h2></div><R2Cases p={p}/></section>
      <section id="contact" className="section split-contact"><div data-reveal><p className="eyebrow">SOLICITUD CUALIFICADA</p><h2>Que la primera llamada empiece con contexto.</h2><p>El formulario recoge la información que normalmente habría que preguntar después.</p></div><div data-reveal><DemoForm prospect={p}/></div></section>
      <Footer p={p}/>
    </main>
  );
}

function R3({ p }: { p: Prospect }) {
  return (
    <main className="demo t-r3">
      <div className="ticker"><span>REFORMA · PRESUPUESTO · CÓRDOBA · REFORMA · PRESUPUESTO · CÓRDOBA</span></div>
      <nav data-reveal><b>{p.shortName}</b><a className="nav-cta" href={"tel:" + p.phoneHref}>☎ {p.phone}</a></nav>
      <section className="r3-hero"><div data-reveal><div className="status-dot">● PRESUPUESTOS ABIERTOS</div><h1>{p.hero}<br/><mark>{p.heroAccent}</mark></h1><p>{p.subhero}</p><div className="metric-row"><b>{p.rating}</b><span>{p.reviews}</span><span>Sin compromiso</span></div></div><div className="wizard-shell" data-reveal><div className="wizard-top"><span>PASO 1 DE 3</span><b>Tu proyecto</b></div><DemoForm prospect={p} compact/></div></section>
      <section className="service-strip">{p.services.map((x,i)=><div key={x} data-reveal><b>0{i+1}</b><span>{x}</span><i>→</i></div>)}</section>
      <section className="section"><header className="section-head" data-reveal><p>PRIMERO INTENCIÓN. DESPUÉS DETALLE.</p><h2>Tres proyectos, tres puertas de entrada.</h2></header><R3Cases p={p}/></section>
      <section className="r3-proof" data-reveal><h2>Tres razones para no perder el lead</h2><div>{["CTA visible siempre","Solicitud que filtra proyecto","Contacto directo desde móvil"].map((x,i)=><article key={x}><strong>{i+1}</strong><p>{x}</p></article>)}</div></section>
      <Footer p={p}/>
    </main>
  );
}

function C1({ p }: { p: Prospect }) {
  return (
    <main className="demo t-c1">
      <nav data-reveal><b>{p.shortName}</b><div><a href="#how">Cómo funciona</a><a className="nav-cta" href="#study">Preestudio</a></div></nav>
      <section className="c1-hero"><div data-reveal><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}</h1><p className="display-accent">{p.heroAccent}</p><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#study">{p.primaryCta}</a><a href={"tel:" + p.phoneHref}>{p.phone}</a></div></div><div className="energy-orbit" data-reveal><div className="house">⌂<span>VIVIENDA</span></div><i className="orbit o1"/><i className="orbit o2"/><b>PREESTUDIO</b></div></section>
      <Trust p={p}/>
      <section id="how" className="section"><header className="section-head" data-reveal><p>DECIDIR CON DATOS</p><h2>La pregunta no es “¿qué máquina compro?”.</h2></header><div className="c1-cards">{["Superficie + aislamiento","Sistema actual","Emisores","Uso + prioridades"].map((x,i)=><article key={x} data-reveal><span>0{i+1}</span><h3>{x}</h3><p>Información mínima para orientar el siguiente paso sin prometer ahorros genéricos.</p></article>)}</div></section>
      <section className="soft-band"><C1Cases p={p}/></section>
      <section id="study" className="section split-contact"><div data-reveal><p className="eyebrow">PREESTUDIO</p><h2>Primero vemos si tiene sentido para tu caso.</h2><p>Una captación consultiva protege al instalador de leads pobres y al cliente de recomendaciones apresuradas.</p></div><div data-reveal><DemoForm prospect={p}/></div></section>
      <Footer p={p}/>
    </main>
  );
}

function C2({ p }: { p: Prospect }) {
  return (
    <main className="demo t-c2">
      <header className="c2-top" data-reveal><b>{p.shortName} <span>CLIMA</span></b><a href={"tel:" + p.phoneHref}>Llamar {p.phone}</a></header>
      <section className="c2-hero"><div data-reveal><span className="availability">● ATENCIÓN DIRECTA</span><h1>{p.hero}<br/><strong>{p.heroAccent}</strong></h1><p>{p.subhero}</p><div className="quick-services">{p.services.map((x,i)=><a key={x} href="#quote"><span>{["❄","❄❄","▤","↻"][i]}</span><b>{x}</b><i>→</i></a>)}</div></div><aside id="quote" data-reveal><h2>Presupuesto rápido</h2><p>Lo mínimo para poder orientarte.</p><DemoForm prospect={p} compact/></aside></section>
      <section className="c2-trust" data-reveal><div><b>{p.rating}</b><span>{p.reviews}</span></div>{p.trust.map(x=><div key={x}>✓ {x}</div>)}</section>
      <section className="section"><header className="section-head" data-reveal><p>INSTALACIONES EN MOVIMIENTO</p><h2>Una oferta rápida también puede sentirse cuidada.</h2></header><C2Cases p={p}/></section>
      <Footer p={p}/>
    </main>
  );
}

function C3({ p }: { p: Prospect }) {
  return (
    <main className="demo t-c3">
      <nav data-reveal><b>{p.shortName}<span>/HVAC</span></b><div><a href="#capabilities">Capacidades</a><a href="#cases">Casos</a><a className="nav-cta" href="#contact">Estudio técnico</a></div></nav>
      <section className="c3-hero"><div data-reveal><p className="eyebrow">{p.eyebrow}</p><h1>{p.hero}</h1><p className="display-accent">{p.heroAccent}</p><p className="lede">{p.subhero}</p><div className="actions"><a className="primary" href="#contact">{p.primaryCta}</a><a href={"tel:" + p.phoneHref}>{p.phone}</a></div></div><div className="blueprint" data-reveal><div className="bp-grid"/><span>01 / DIAGNÓSTICO</span><span>02 / DISEÑO</span><span>03 / INSTALACIÓN</span><span>04 / MANTENIMIENTO</span></div></section>
      <section className="c3-metrics" data-reveal><div><strong>{p.experience}</strong><span>trayectoria</span></div><div><strong>{p.rating}</strong><span>{p.reviews}</span></div><div><strong>360°</strong><span>instalación + mantenimiento</span></div></section>
      <section id="capabilities" className="section"><header className="section-head" data-reveal><p>CAPACIDADES</p><h2>Orden técnico para que cada segmento encuentre su solución.</h2></header><div className="matrix">{p.services.map((x,i)=><article key={x} data-reveal><span>0{i+1}</span><h3>{x}</h3><p>Diagnóstico · dimensionado · ejecución · soporte</p><b>→</b></article>)}</div></section>
      <section id="cases" className="c3-cases"><div data-reveal><p className="eyebrow">CASOS</p><h2>El B2B compra evidencia.</h2></div><C3Cases p={p}/></section>
      <section id="contact" className="section split-contact"><div data-reveal><p className="eyebrow">CONTACTO TÉCNICO</p><h2>Menos “pide información”. Más briefing útil.</h2><p>El formulario puede adaptarse después por segmento: residencial, retail, oficinas, comunidad o industria.</p></div><div data-reveal><DemoForm prospect={p}/></div></section>
      <Footer p={p}/>
    </main>
  );
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
