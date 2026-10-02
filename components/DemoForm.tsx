"use client";

import { useState } from "react";
import type { Prospect } from "@/lib/types";

export function DemoForm({ prospect, compact = false }: { prospect: Prospect; compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const reform = prospect.sector === "reformas";

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <strong>Demo completada</strong>
        <p>En producción, esta solicitud llegaría al email/CRM del negocio.</p>
        <button onClick={() => setSent(false)}>Volver al formulario</button>
      </div>
    );
  }

  return (
    <form className={`lead-form ${compact ? "compact" : ""}`} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div className="field-grid">
        <label>
          <span>¿Qué necesitas?</span>
          <select defaultValue="">
            <option value="" disabled>Selecciona una opción</option>
            {prospect.services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </label>
        <label>
          <span>{reform ? "Localidad" : "Tipo de inmueble"}</span>
          {reform ? <input placeholder={prospect.city} /> : (
            <select defaultValue="">
              <option value="" disabled>Selecciona</option>
              <option>Piso</option><option>Casa / chalet</option><option>Local / oficina</option>
            </select>
          )}
        </label>
        <label>
          <span>{reform ? "Metros aproximados" : "Superficie aproximada"}</span>
          <input placeholder="Ej. 90 m²" inputMode="numeric" />
        </label>
        <label>
          <span>¿Cuándo?</span>
          <select defaultValue="">
            <option value="" disabled>Selecciona</option>
            <option>Cuanto antes</option><option>1–3 meses</option><option>3–6 meses</option><option>Solo valorando</option>
          </select>
        </label>
        <label className="wide">
          <span>Teléfono</span>
          <input placeholder="Tu teléfono" inputMode="tel" required />
        </label>
      </div>
      <button className="submit-demo" type="submit">{prospect.primaryCta} →</button>
      <small>Formulario demostrativo · no envía datos reales.</small>
    </form>
  );
}
