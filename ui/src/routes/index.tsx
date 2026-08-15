import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CertGenerate — Emissão e validação de certificados" },
      {
        name: "description",
        content:
          "Plataforma para emitir, organizar e validar certificados digitais com verificação pública por código.",
      },
      { property: "og:title", content: "CertGenerate — Certificados digitais" },
      {
        property: "og:description",
        content:
          "Emita, organize e valide certificados digitais com verificação pública por código.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
