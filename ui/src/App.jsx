import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Layouts
import MainNavbar from "./layouts/MainNavbar";
import DashboardLayout from "./layouts/DashboardLayout";

// Páginas Públicas / Gerais
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Validate from "./pages/Validate";
import Login from "./pages/Login";
import Register from "./pages/Register";

import EventsPage from "./pages/admin/EventsPage";
import RecipientsPage from "./pages/admin/RecipientsPage";
import DocumentsPage from "./pages/admin/DocumentsPage";

// 1. Guard de Rota Protegida
const ProtectedRoute = ({ user, children }) => {
  if (!user || !user.is_active) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// 2. Wrapper do Layout Público (aplica o MainNavbar apenas para estas páginas)
const PublicLayout = ({ user, onLogout }) => (
  <MainNavbar user={user} onLogout={onLogout}>
    <Outlet />
  </MainNavbar>
);

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Jonata",
    is_active: true,
  });

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* ================= ROTAS COM MAIN NAVBAR ================= */}
        <Route element={<PublicLayout user={user} onLogout={handleLogout} />}>
          <Route path="/" element={<Home />} />
          <Route path="/validate" element={<Validate />} />
          {/*<Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />*/}

          {/* Rota Protegida do Generator
          <Route
            path="/generator"
            element={
              <ProtectedRoute user={user}>
                <Generator />
              </ProtectedRoute>
            }
          />
        </Route>*/}

        {/* ================= ROTAS DO PAINEL ADMIN ================= */}
        {/* Usa apenas o DashboardLayout (sem o MainNavbar englobando)
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              <DashboardLayout user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          }>*/}
          {/* Redireciona /admin direto para /admin/events
          <Route index element={<Navigate to="events" replace />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="recipients" element={<RecipientsPage />} />
          <Route path="documents" element={<DocumentsPage />} />*/}
        </Route>

        {/* ================= FALLBACK (PÁGINA NÃO ENCONTRADA) ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;