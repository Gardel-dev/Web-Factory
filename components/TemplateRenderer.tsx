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
      <section className="r1-service-atlas">
        <div className="r1-service-intro" data-reveal>
          <p>DISEÑAMOS · COORDINAMOS · EJECUTAMOS</p>
          <h2>Menos catálogo. Más dirección en cada decisión.</h2>
          <span>Una reforma se entiende mejor cuando cada servicio ocupa su lugar dentro del proyecto completo.</span>
        </div>
        <div className="r1-service-list">
          {p.services.map((x,i)=>(
            <article key={x} data-reveal>
              <span>0{i+1}</span>
              <h3>{x}</h3>
              <p>{i===0?"Visión global, decisiones conectadas y una ejecución coherente.":i===1?"Distribución, funcionalidad y materiales pensados para el uso diario.":i===2?"Precisión en espacios pequeños donde cada detalle pesa.":"Estética, luz y proporción para que el conjunto se sienta terminado."}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>
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
      <section id="process" className="section r2-process-section">
        <header className="section-head" data-reveal><p>CONTROL DE PRINCIPIO A FIN</p><h2>Un proceso visible reduce incertidumbre.</h2></header>
        <div className="r2-process-path">
          <div className="r2-process-line" aria-hidden="true" />
          {["Briefing","Visita","Propuesta","Plan de obra","Ejecución","Entrega"].map((x,i)=>(
            <article key={x} data-reveal>
              <div className="r2-process-node">{String(i+1).padStart(2,"0")}</div>
              <div className="r2-process-copy">
                <span>{i===0?"ENTENDER":i===1?"MEDIR":i===2?"DEFINIR":i===3?"ORDENAR":i===4?"EJECUTAR":"CERRAR"}</span>
                <h3>{x}</h3>
                <p>{i===0?"Necesidades, m², timing y prioridades.":i===1?"Contexto real antes de comprometer alcance.":i===2?"Partidas, límites y decisiones explicadas.":i===3?"Secuencia, responsables y puntos de control.":i===4?"Seguimiento, coordinación y cambios trazables.":"Repaso, cierre y entrega sin cabos sueltos."}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
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
      <nav className="r3-nav" data-reveal>
        <b>{p.shortName}</b>
        <div className="r3-nav-links">
          <a href="#services">Servicios</a>
          <a href="#cases">Casos</a>
          <a href="#quote">Presupuesto</a>
        </div>
        <a className="nav-cta" href={"tel:" + p.phoneHref}>☎ {p.phone}</a>
      </nav>
      <section className="r3-hero"><div data-reveal><div className="status-dot">● PRESUPUESTOS ABIERTOS</div><h1>{p.hero}<br/><mark>{p.heroAccent}</mark></h1><p>{p.subhero}</p><div className="metric-row"><b>{p.rating}</b><span>{p.reviews}</span><span>Sin compromiso</span></div></div><div id="quote" className="wizard-shell" data-reveal><div className="wizard-top"><span>PASO 1 DE 3</span><b>Tu proyecto</b></div><DemoForm prospect={p} compact/></div></section>
      <section id="services" className="r3-service-map">
        <div className="r3-service-lead" data-reveal>
          <span>ELIGE TU PUNTO DE PARTIDA</span>
          <h2>No todas las reformas empiezan igual.</h2>
          <p>La web identifica la intención primero y pide detalle después.</p>
        </div>
        <div className="r3-service-cluster">
          {p.services.map((x,i)=>(
            <a href="#quote" key={x} className={"r3-service-card s"+(i+1)} data-reveal>
              <span>0{i+1}</span>
              <h3>{x}</h3>
              <p>{i===0?"Proyecto completo y mayor nivel de contexto.":i===1?"Necesidad concreta, rápida de explicar.":i===2?"Decisiones funcionales, acabados y medidas.":"Intervención ligera con respuesta especialmente rápida."}</p>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>
      <section id="cases" className="section"><header className="section-head" data-reveal><p>PRIMERO INTENCIÓN. DESPUÉS DETALLE.</p><h2>Tres proyectos, tres puertas de entrada.</h2></header><R3Cases p={p}/></section>
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
      <section id="how" className="section">
        <header className="section-head" data-reveal><p>DECIDIR CON DATOS</p><h2>La pregunta no es “¿qué máquina compro?”.</h2></header>
        <div className="c1-diagnostic-path">
          <div className="c1-path-curve" aria-hidden="true" />
          {["Superficie + aislamiento","Sistema actual","Emisores","Uso + prioridades"].map((x,i)=>(
            <article key={x} data-reveal>
              <div className="c1-diagnostic-node"><span>0{i+1}</span></div>
              <div>
                <small>{i===0?"ENVOLVENTE":i===1?"PUNTO DE PARTIDA":i===2?"DISTRIBUCIÓN": "HÁBITOS"}</small>
                <h3>{x}</h3>
                <p>{i===0?"Metros, orientación y aislamiento condicionan cualquier cálculo serio.":i===1?"Saber qué existe evita recomendar por inercia.":i===2?"Suelo radiante, radiadores o fan coils cambian la solución.":"Confort, horarios y prioridades terminan de definir el sistema."}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
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
      <section className="c2-proof-cloud" data-reveal>
        <div className="c2-rating-orb"><strong>{p.rating}</strong><span>{p.reviews}</span></div>
        <div className="c2-proof-chip chip-a"><i>✓</i><span>{p.trust[0]}</span></div>
        <div className="c2-proof-chip chip-b"><i>✓</i><span>{p.trust[1]}</span></div>
        <div className="c2-proof-chip chip-c"><i>✓</i><span>{p.trust[2]}</span></div>
        <div className="c2-proof-line l1" aria-hidden="true" />
        <div className="c2-proof-line l2" aria-hidden="true" />
        <div className="c2-proof-line l3" aria-hidden="true" />
      </section>
      <section className="section"><header className="section-head" data-reveal><p>INSTALACIONES EN MOVIMIENTO</p><h2>Una oferta rápida también puede sentirse cuidada.</h2></header><C2Cases p={p}/></section>
      <Footer p={p}/>
    </main>
  );
}

function C3({ p }: { p: Prospect }) {
  const segments = [
    {
      index: "01",
      label: "HOGAR",
      title: "Confort eficiente, sin complicaciones.",
      copy: "Aire acondicionado, bomba de calor y control WiFi con una instalación pensada para durar.",
      meta: "Viviendas · reformas · sustituciones",
    },
    {
      index: "02",
      label: "EMPRESA",
      title: "Clima que acompaña a la actividad.",
      copy: "Climatización, enfriadoras, ventilación y renovación de aire para locales, oficinas y edificios.",
      meta: "Retail · oficinas · hostelería",
    },
    {
      index: "03",
      label: "ENTORNOS CRÍTICOS",
      title: "Temperatura bajo control donde no puede fallar.",
      copy: "Soluciones para salas técnicas, servidores, CPD y armarios eléctricos con necesidades específicas.",
      meta: "CPD · salas técnicas · control estricto",
    },
  ];

  const clients = [
    "Grupo Antolín",
    "Elecnor",
    "Correos Express",
    "Universidad de Valladolid",
    "Sacyl",
    "Aquavall",
    "Ministerio de Defensa",
    "Cines Broadway",
  ];

  const brands = ["Daikin", "Mitsubishi Electric", "Panasonic", "Fujitsu", "Lennox", "CIAT"];

  return (
    <main className="demo t-c3 c3-refresh">
      <div className="c3-topline">
        <span>Valladolid · Climatización doméstica e industrial</span>
        <div><b>Servicio técnico propio</b><a href={"tel:" + p.phoneHref}>{p.phone}</a></div>
      </div>

      <nav className="c3-nav-v2" data-reveal>
        <a className="c3-brand" href="#top">
          <span className="c3-brand-mark">A/C</span>
          <span><b>Aire y Clima</b><small>Valladolid</small></span>
        </a>
        <div className="c3-nav-links">
          <a href="#solutions">Soluciones</a>
          <a href="#capabilities">Capacidades</a>
          <a href="#experience">Experiencia</a>
        </div>
        <a className="c3-nav-cta" href="#contact">Solicitar estudio <span>↗</span></a>
      </nav>

      <section id="top" className="c3-hero-v2">
        <div className="c3-hero-copy" data-reveal>
          <div className="c3-kicker"><i /> {p.eyebrow}</div>
          <h1>Climatización que <em>mantiene todo en marcha.</em></h1>
          <p className="c3-hero-accent">{p.heroAccent}</p>
          <p className="c3-hero-lede">{p.subhero}</p>

          <div className="c3-hero-actions">
            <a className="c3-primary" href="#contact">{p.primaryCta} <span>↗</span></a>
            <a className="c3-secondary" href={"tel:" + p.phoneHref}>Llamar {p.phone}</a>
          </div>

          <div className="c3-hero-proof">
            <span><strong>4,9/5</strong><small>100+ reseñas públicas</small></span>
            <span><strong>40+ años</strong><small>experiencia en climatización</small></span>
            <span><strong>Daikin</strong><small>instalador oficial</small></span>
          </div>
        </div>

        <div className="c3-air-system" data-reveal aria-label="Sistema visual de flujo de aire">
          <div className="c3-air-grid" />
          <div className="c3-air-glow g1" />
          <div className="c3-air-glow g2" />
          <div className="c3-air-ring ring-1" />
          <div className="c3-air-ring ring-2" />
          <div className="c3-air-core">
            <span>CONTROL</span>
            <strong>21°</strong>
            <small>confort · aire · continuidad</small>
          </div>
          <div className="c3-air-node n1"><b>AIRE</b><span>distribución</span></div>
          <div className="c3-air-node n2"><b>AGUA</b><span>enfriadoras</span></div>
          <div className="c3-air-node n3"><b>CONTROL</b><span>salas técnicas</span></div>
          <div className="c3-air-flow f1" />
          <div className="c3-air-flow f2" />
          <div className="c3-air-flow f3" />
          <div className="c3-air-caption"><i /> sistema completo · instalación + mantenimiento</div>
        </div>
      </section>

      <section className="c3-proof-ribbon" data-reveal>
        <div><strong>40+</strong><span>años de experiencia</span></div>
        <div><strong>4,9★</strong><span>valoración pública</span></div>
        <div><strong>SAT</strong><span>servicio técnico propio</span></div>
        <div><strong>DAIKIN</strong><span>instalador oficial</span></div>
      </section>

      <section id="solutions" className="c3-solutions-v2 section">
        <header className="c3-section-heading" data-reveal>
          <div><span>01 / CONTEXTOS</span><p>Una empresa, tres niveles de exigencia.</p></div>
          <h2>Desde el confort de una vivienda hasta la continuidad de un CPD.</h2>
        </header>

        <div className="c3-segment-deck">
          {segments.map((segment) => (
            <article className="c3-segment-card" key={segment.index} data-reveal>
              <header><span>{segment.index}</span><b>{segment.label}</b></header>
              <div className="c3-segment-icon" aria-hidden="true"><i /><i /><i /></div>
              <h3>{segment.title}</h3>
              <p>{segment.copy}</p>
              <footer>{segment.meta}<b>↗</b></footer>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="c3-capability-zone">
        <div className="c3-capability-inner">
          <header className="c3-section-heading light" data-reveal>
            <div><span>02 / CAPACIDADES</span><p>Más que instalar una máquina.</p></div>
            <h2>Diseñar, mover y mantener el aire como un sistema.</h2>
          </header>

          <div className="c3-bento">
            <article className="c3-bento-card hero-card" data-reveal>
              <span>CLIMATIZACIÓN INTEGRAL</span>
              <h3>Un único equipo desde el dimensionado hasta el mantenimiento.</h3>
              <p>Instalación doméstica e industrial, aire acondicionado y bomba de calor con soporte técnico propio.</p>
              <div className="c3-bento-orbit"><i/><i/><b>A/C</b></div>
            </article>
            <article className="c3-bento-card aqua" data-reveal>
              <span>ENFRIADORAS</span><h3>Agua fría para instalaciones exigentes.</h3><p>Soluciones para edificios, procesos y sistemas que necesitan potencia y estabilidad.</p><b>02</b>
            </article>
            <article className="c3-bento-card mint" data-reveal>
              <span>AIRE Y VENTILACIÓN</span><h3>Renovar, filtrar y recuperar energía.</h3><p>Extracción, filtrado, recuperadores entálpicos y renovación de aire.</p><b>03</b>
            </article>
            <article className="c3-bento-card critical" data-reveal>
              <span>SALAS TÉCNICAS / CPD</span><h3>Cuando la temperatura no puede improvisarse.</h3><p>Control estricto para servidores, salas técnicas y armarios eléctricos.</p><div className="c3-mini-chart"><i/><i/><i/><i/><i/></div>
            </article>
            <article className="c3-bento-card service" data-reveal>
              <span>MANTENIMIENTO</span><h3>La instalación no termina al encenderla.</h3><p>Servicio técnico propio para conservar rendimiento y continuidad.</p><a href="#contact">Hablar con el equipo ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="c3-experience-v2 section">
        <header className="c3-section-heading" data-reveal>
          <div><span>03 / EXPERIENCIA</span><p>Prueba social de verdad.</p></div>
          <h2>Décadas trabajando donde el clima forma parte del negocio.</h2>
        </header>

        <div className="c3-client-panel" data-reveal>
          <div className="c3-client-copy">
            <span>CLIENTES PUBLICADOS POR LA EMPRESA</span>
            <h3>Experiencia con industria, administraciones, retail y servicios.</h3>
            <p>La cartera publicada por Aire y Clima incluye organizaciones privadas y administraciones de perfiles muy distintos.</p>
          </div>
          <div className="c3-client-cloud">
            {clients.map((client) => <span key={client}>{client}</span>)}
          </div>
        </div>

        <div className="c3-usecases">
          {p.caseTitles.map((title, i) => (
            <article key={title} data-reveal>
              <span>0{i + 1}</span>
              <div className="c3-usecase-visual"><i/><i/><b>{["↗","▦","◌"][i]}</b></div>
              <h3>{title}</h3>
              <p>{i === 0 ? "Confort, ventilación y continuidad sin interrumpir la actividad." : i === 1 ? "Sistemas escalables para edificios, oficinas y organismos públicos." : "Temperatura estable y controlada para infraestructura sensible."}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="c3-brands-v2" data-reveal>
        <p>Fabricantes con los que trabaja la empresa</p>
        <div>{brands.map((brand) => <span key={brand}>{brand}</span>)}</div>
      </section>

      <section id="contact" className="c3-contact-v2">
        <div className="c3-contact-copy" data-reveal>
          <span>04 / SIGUIENTE PASO</span>
          <h2>Cuéntanos qué necesitas mantener bajo control.</h2>
          <p>Una primera conversación sirve para saber si hablamos de confort, consumo, ventilación, continuidad o una combinación de todo.</p>
          <div className="c3-contact-details">
            <a href={"tel:" + p.phoneHref}><b>{p.phone}</b><small>Llamar ahora</small></a>
            <span><b>C/ Estaño 17</b><small>Pol. San Cristóbal · Valladolid</small></span>
          </div>
        </div>
        <div className="c3-form-shell" data-reveal>
          <div className="c3-form-top"><span>Solicitud técnica</span><b>≈ 60 s</b></div>
          <DemoForm prospect={p}/>
        </div>
      </section>

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
