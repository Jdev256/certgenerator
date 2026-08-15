import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout({ children, user, onLogout }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  // Links requisitados na Sidebar
  const navItems = [
    { name: "Eventos", path: "/admin/events", icon: CalendarIcon },
    { name: "Destinatários", path: "/admin/recipients", icon: UserGroupIcon },
    { name: "Documentos", path: "/admin/documents", icon: DocumentTextIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ==================== NAVBAR (FIXA NO TOPO) ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          {/* Botão Hambúrguer (Exibido apenas em telas menores que lg) */}
          <button
            onClick={toggleMobileSidebar}
            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 lg:hidden focus:outline-none"
            aria-label="Abrir menu lateral"
          >
            {isMobileOpen ? (
              <XMarkIcon className="h-6 w-6 stroke-2" />
            ) : (
              <Bars3Icon className="h-6 w-6 stroke-2" />
            )}
          </button>

          {/* Logo / Marca */}
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-lg">
            <ShieldCheckIcon className="h-7 w-7 text-blue-600" />
            <span className="hidden sm:inline text-blue-gray-900">CertGenerate</span>
          </Link>
        </div>

        {/* Ações da Navbar */}
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm font-medium text-gray-600 hidden sm:inline">
              {user.name || user.email}
            </span>
          )}
          {onLogout && (
            <button
              onClick={onLogout}
              className="text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition-colors"
            >
              Sair
            </button>
          )}
        </div>
      </header>

      {/* ==================== ESTRUTURA PRINCIPAL ==================== */}
      <div className="pt-16 flex min-h-screen">

        {/* BACKDROP MOBILE (Escurece o fundo ao abrir a Sidebar em telas pequenas) */}
        {isMobileOpen && (
          <div
            onClick={closeMobileSidebar}
            className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* ==================== SIDEBAR ==================== */}
        <aside
          className={`
            fixed top-16 bottom-0 left-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col justify-between transition-transform duration-300 ease-in-out
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          {/* Menu de Navegação */}
          <nav className="p-4 space-y-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Menu Principal
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`
                  }
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Footer da Sidebar */}
          <div className="p-4 border-t border-gray-100 text-xs text-gray-400">
            Painel Administrativo
          </div>
        </aside>

        {/* ==================== ÁREA DE CONTEÚDO PRINCIPAL ==================== */}
        <main className="flex-1 lg:pl-64 w-full p-6 transition-all duration-300">
          {/* Suporta tanto o padrão {children} quanto <Outlet /> do React Router */}
          {children || <Outlet />}
        </main>

      </div>
    </div>
  );
}