import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./experience.css";
import "./c3-refresh.css";
import "./premium-pass.css";
import { MotionEnhancer } from "@/components/MotionEnhancer";

export const metadata: Metadata = {
  title: "Web Factory — sistemas digitales de captación",
  description: "Seis conceptos comerciales para empresas de reformas y climatización.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <MotionEnhancer />
        {children}
      </body>
    </html>
  );
}
