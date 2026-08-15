import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  DocumentCheckIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function MainNavbar({ user, onLogout, children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Regra de Acesso: Usuário precisa estar logado E com status ativo
  const canAccessGenerator = Boolean(user && user.is_active);

  return (
    <>
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

          {/* Logo / Título */}
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg text-blue-600 flex items-center gap-2"
          >
            <ShieldCheckIcon className="h-6 w-6" />
            CertGenerate
          </Typography>

          {/* NAV LIST - DESKTOP (Invisível em Mobile) */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {/* Generator (Apenas Usuário Logado e Ativo) */}
              {canAccessGenerator && (
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="font-medium hover:text-blue-500 transition-colors"
                >
                  <a href="/generator" className="flex items-center gap-1">
                    <CogIcon className="h-4 w-4" />
                    Generator
                  </a>
                </Typography>
              )}

              {/* Validar (Público) */}
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="font-medium hover:text-blue-500 transition-colors"
              >
                <a href="/validate" className="flex items-center gap-1">
                  <DocumentCheckIcon className="h-4 w-4" />
                  Validar
                </a>
              </Typography>
            </ul>
          </div>

          {/* BOTÕES DE AÇÃO - DESKTOP */}
          <div className="hidden lg:flex items-center gap-x-2">
            {!user ? (
              <>
                <Button as="a" href="/login" variant="text" size="sm" color="blue-gray">
                  Login
                </Button>
                <Button as="a" href="/register" variant="gradient" size="sm" color="blue">
                  Registro
                </Button>
              </>
            ) : (
              <Button onClick={onLogout} variant="outlined" size="sm" color="red">
                Sair
              </Button>
            )}
          </div>

          {/* BOTÃO HAMBÚRGUER (Visível APENAS em Dispositivos Móveis) */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={openDrawer}
          >
            <Bars3Icon className="h-7 w-7 stroke-2" />
          </IconButton>
        </div>
      </Navbar>

      {/* SIDEBAR DRAWER (Dispositivos Móveis) */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="p-4">
        <Card color="transparent" shadow={false} className="h-full w-full">

          {/* Header da Sidebar */}
          <div className="mb-6 flex items-center justify-between p-2 border-b border-gray-100">
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
              CertGenerate
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon className="h-6 w-6 stroke-2" />
            </IconButton>
          </div>

          {/* Lista de Navegação da Sidebar */}
          <List>
            {/* Generator (Protegido por Regra de Acesso) */}
            {canAccessGenerator && (
              <ListItem as="a" href="/generator" onClick={closeDrawer}>
                <ListItemPrefix>
                  <CogIcon className="h-5 w-5" />
                </ListItemPrefix>
                Generator
              </ListItem>
            )}

            {/* Validar (Público) */}
            <ListItem as="a" href="/validate" onClick={closeDrawer}>
              <ListItemPrefix>
                <DocumentCheckIcon className="h-5 w-5" />
              </ListItemPrefix>
              Validar
            </ListItem>

            <hr className="my-3 border-blue-gray-50" />

            {/* Ações de Autenticação */}
            {!user ? (
              <>
                <ListItem as="a" href="/login" onClick={closeDrawer}>
                  <ListItemPrefix>
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Login
                </ListItem>
                <ListItem as="a" href="/register" onClick={closeDrawer}>
                  <ListItemPrefix>
                    <UserPlusIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Registro
                </ListItem>
              </>
            ) : (
              <ListItem onClick={() => { closeDrawer(); onLogout(); }} className="text-red-500 hover:bg-red-50">
                <ListItemPrefix>
                  <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
                </ListItemPrefix>
                Sair
              </ListItem>
            )}
          </List>
        </Card>
      </Drawer>

      {/* Conteúdo Principal da Aplicação */}
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
}