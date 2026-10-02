export type TemplateId = "R1" | "R2" | "R3" | "C1" | "C2" | "C3";

export type Prospect = {
  slug: string;
  template: TemplateId;
  name: string;
  shortName: string;
  sector: "reformas" | "climatizacion";
  city: string;
  zone: string;
  phone: string;
  phoneHref: string;
  website?: string;
  rating?: string;
  reviews?: string;
  experience?: string;
  eyebrow: string;
  hero: string;
  heroAccent: string;
  subhero: string;
  services: string[];
  trust: string[];
  caseTitles: string[];
  primaryCta: string;
  secondaryCta: string;
  note: string;
};
