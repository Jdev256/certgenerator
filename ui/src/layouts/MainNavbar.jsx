import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Card,
  List,
  ListItem,
  Collapse,
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
  const [openNav, setOpenNav] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const canAccessGenerator = Boolean(user?.is_active);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
        setOpenDrawer(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar className="mx-auto w-full max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center">

          {/* LOGO */}
          <Typography
            as="a"
            href="/"
            type="small"
            className="mx-2 flex items-center gap-2 py-1 font-bold text-blue-600"
          >
            <ShieldCheckIcon className="h-6 w-6" />
            CertGenerate
          </Typography>

          {/* NAVEGAÇÃO DESKTOP */}
          <div className="hidden lg:ml-auto lg:mr-2 lg:block">
            <ul className="flex items-center gap-x-6">

              {canAccessGenerator && (
                <li>
                  <Typography
                    as="a"
                    href="/generator"
                    type="small"
                    className="flex items-center gap-1 p-1 font-medium text-blue-gray-900 transition-colors hover:text-blue-500"
                  >
                    <CogIcon className="h-4 w-4" />
                    Generator
                  </Typography>
                </li>
              )}

              <li>
                <Typography
                  as="a"
                  href="/validate"
                  type="small"
                  className="flex items-center gap-1 p-1 font-medium text-blue-gray-900 transition-colors hover:text-blue-500"
                >
                  <DocumentCheckIcon className="h-4 w-4" />
                  Validar
                </Typography>
              </li>

            </ul>
          </div>

          {/* AÇÕES DESKTOP */}
          <div className="hidden items-center gap-x-2 lg:flex">

            {!user ? (
              <>
                <Button
                  as="a"
                  href="/login"
                  variant="ghost"
                  size="sm"
                  color="secondary"
                >
                  Login
                </Button>

                <Button
                  as="a"
                  href="/register"
                  variant="solid"
                  size="sm"
                  color="primary"
                >
                  Registro
                </Button>
              </>
            ) : (
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                color="error"
              >
                Sair
              </Button>
            )}

          </div>

          {/* MENU MOBILE */}
          <IconButton
            size="sm"
            variant="ghost"
            color="secondary"
            onClick={() => setOpenNav(!openNav)}
            className="ml-auto grid lg:hidden"
          >
            {openNav ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </IconButton>
        </div>

        {/* MENU MOBILE */}
        <Collapse open={openNav}>
          <div className="mt-4 rounded-lg border border-blue-gray-50 p-2 lg:hidden">

            <List>

              {canAccessGenerator && (
                <ListItem
                  as="a"
                  href="/generator"
                  onClick={() => setOpenNav(false)}
                >
                  <CogIcon className="mr-3 h-5 w-5" />
                  Generator
                </ListItem>
              )}

              <ListItem
                as="a"
                href="/validate"
                onClick={() => setOpenNav(false)}
              >
                <DocumentCheckIcon className="mr-3 h-5 w-5" />
                Validar
              </ListItem>

              <hr className="my-3 border-blue-gray-50" />

              {!user ? (
                <>
                  <ListItem
                    as="a"
                    href="/login"
                    onClick={() => setOpenNav(false)}
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                    Login
                  </ListItem>

                  <ListItem
                    as="a"
                    href="/register"
                    onClick={() => setOpenNav(false)}
                  >
                    <UserPlusIcon className="mr-3 h-5 w-5" />
                    Registro
                  </ListItem>
                </>
              ) : (
                <ListItem
                  onClick={() => {
                    setOpenNav(false);
                    onLogout?.();
                  }}
                  className="text-red-500"
                >
                  <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-500" />
                  Sair
                </ListItem>
              )}

            </List>
          </div>
        </Collapse>
      </Navbar>

      {/* CONTEUDO DAS ROTAS */}
      <main className="w-full flex-1">{children}</main>

      {/* DRAWER */}
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Drawer.Overlay>
          <Drawer.Panel placement="left" className="p-4">

            <Card
              color="secondary"
              shadow={false}
              className="h-full w-full"
            >

              {/* HEADER */}
              <div className="mb-6 flex items-center justify-between border-b border-gray-100 p-2">

                <Typography
                  type="h5"
                  color="secondary"
                  className="flex items-center gap-2"
                >
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                  CertGenerate
                </Typography>

                <IconButton
                  size="sm"
                  variant="ghost"
                  color="secondary"
                  onClick={() => setOpenDrawer(false)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </IconButton>

              </div>

              {/* NAVEGAÇÃO */}
              <List>

                {canAccessGenerator && (
                  <ListItem
                    as="a"
                    href="/generator"
                    onClick={() => setOpenDrawer(false)}
                  >
                    <CogIcon className="mr-3 h-5 w-5" />
                    Generator
                  </ListItem>
                )}

                <ListItem
                  as="a"
                  href="/validate"
                  onClick={() => setOpenDrawer(false)}
                >
                  <DocumentCheckIcon className="mr-3 h-5 w-5" />
                  Validar
                </ListItem>

                <hr className="my-3 border-blue-gray-50" />

                {!user ? (
                  <>
                    <ListItem
                      as="a"
                      href="/login"
                      onClick={() => setOpenDrawer(false)}
                    >
                      <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                      Login
                    </ListItem>

                    <ListItem
                      as="a"
                      href="/register"
                      onClick={() => setOpenDrawer(false)}
                    >
                      <UserPlusIcon className="mr-3 h-5 w-5" />
                      Registro
                    </ListItem>
                  </>
                ) : (
                  <ListItem
                    onClick={() => {
                      setOpenDrawer(false);
                      onLogout?.();
                    }}
                    className="text-red-500"
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-500" />
                    Sair
                  </ListItem>
                )}

              </List>

            </Card>

          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
    </>
  );
}