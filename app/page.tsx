import Link from "next/link";
import { prospects } from "@/lib/data";

const labels = {
  R1: "Premium / Editorial",
  R2: "Confianza / Proceso",
  R3: "Conversión / Estimador",
  C1: "Aerotermia consultiva",
  C2: "Aire Express",
  C3: "Técnica / B2B",
};

export default function Home() {
  return (
    <main className="factory-home">
      <header><p>WEB FACTORY · DÍA 2</p><h1>Seis sistemas.<br/>Seis hipótesis comerciales.</h1><span>Una base modular para generar demos específicas sin reconstruir cada proyecto desde cero.</span></header>
      <section className="factory-grid">
        {prospects.map((p) => (
          <Link className={`factory-card fc-${p.template.toLowerCase()}`} href={`/demo/${p.slug}`} key={p.slug}>
            <div><span>{p.template}</span><small>{labels[p.template]}</small></div>
            <h2>{p.name}</h2><p>{p.hero}</p><footer><b>{p.city}</b><i>Ver demo →</i></footer>
          </Link>
        ))}
      </section>
      <footer className="factory-footer">Web Factory · prototipos comerciales · datos públicos sujetos a verificación antes de producción.</footer>
    </main>
  );
}
