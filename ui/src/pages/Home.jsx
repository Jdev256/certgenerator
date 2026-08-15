import React from "react";
import MainNavbar from "../layouts/MainNavbar";

import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNavbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800">
        <div className="absolute -right-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <Typography
              variant="small"
              className="mb-4 font-bold uppercase tracking-widest text-blue-200"
            >
              Plataforma inteligente
            </Typography>

            <Typography
              variant="h1"
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              Simplifique seus processos
            </Typography>

            <Typography className="mx-auto mb-10 max-w-2xl text-lg font-normal leading-relaxed text-blue-100">
              Uma plataforma moderna para organizar informações, automatizar
              tarefas e tornar seu trabalho mais eficiente.
            </Typography>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                color="white"
                className="text-blue-700 transition duration-300 hover:-translate-y-1"
              >
                Começar agora
              </Button>

              <Button
                size="lg"
                variant="outlined"
                className="border-white text-white transition duration-300 hover:-translate-y-1"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Typography variant="small" className="font-bold uppercase text-blue-600">
            Recursos
          </Typography>

          <Typography variant="h2" className="mt-3">
            Tudo em um só lugar
          </Typography>

          <Typography className="mt-4 font-normal text-gray-600">
            Tenha ferramentas simples e eficientes para organizar seu trabalho.
          </Typography>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card className="transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardBody className="text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                ⚡
              </div>

              <Typography variant="h5" className="mb-3">
                Rápido
              </Typography>

              <Typography className="font-normal text-gray-600">
                Experiência rápida, responsiva e agradável em qualquer
                dispositivo.
              </Typography>
            </CardBody>
          </Card>

          <Card className="transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardBody className="text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                📊
              </div>

              <Typography variant="h5" className="mb-3">
                Organizado
              </Typography>

              <Typography className="font-normal text-gray-600">
                Centralize seus dados e tenha uma visão clara das informações.
              </Typography>
            </CardBody>
          </Card>

          <Card className="transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardBody className="text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                🔒
              </div>

              <Typography variant="h5" className="mb-3">
                Seguro
              </Typography>

              <Typography className="font-normal text-gray-600">
                Uma arquitetura moderna pensada para manter seus dados
                protegidos.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <Typography className="font-normal text-gray-400">
            © {new Date().getFullYear()} Sua Plataforma. Todos os direitos
            reservados.
          </Typography>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Privacidade
            </a>

            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Termos
            </a>

            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}