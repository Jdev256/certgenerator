import { createFileRoute } from "@tanstack/react-router";
import ValidateDocument from "../pages/ValidateDocument.jsx";

export const Route = createFileRoute("/validate")({
  head: () => ({
    meta: [
      { title: "Validar documento — CertGenerate" },
      {
        name: "description",
        content:
          "Verifique a autenticidade de um certificado informando o código de verificação impresso no documento.",
      },
      { property: "og:title", content: "Validar documento — CertGenerate" },
      {
        property: "og:description",
        content: "Verifique a autenticidade de um certificado pelo código de verificação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ValidateDocument,
});
