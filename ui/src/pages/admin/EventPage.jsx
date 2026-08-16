import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  // Estado do formulário
  const [formData, setFormData] = useState({
    name: "",
    issue_organization: "",
    event_date: "",
    status: "Ativo",
  });

    const token = TokenStorage.getItem("token");

    const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch("/events/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Erro ao carregar eventos");

      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleOpenModal = (eventToEdit = null) => {
    if (eventToEdit) {
      setEditingEvent(eventToEdit);
      setFormData({
        name: eventToEdit.name,
        issue_organization: eventToEdit.issue_organization,
        event_date: eventToEdit.event_date,
        status: eventToEdit.status,
      });
    } else {
      setEditingEvent(null);
      setFormData({
        name: "",
        issue_organization: "",
        event_date: new Date().toISOString().split("T")[0],
        status: "Ativo",
      });
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingEvent(null);
  };

  // Salvar (Criar ou Atualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.issue_organization || !formData.event_date) return;

    const url = editingEvent ? `https://api.certgenerate.com.br/api/events/${editingEvent.id}` : "/events/";
    const method = editingEvent ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao salvar o evento.");

      await fetchEvents(); // Recarrega a lista atualizada do banco
      handleCloseModal();
    } catch (error) {
      alert(error.message);
    }
  };

  // 4. EXCLUIR EVENTO (DELETE /events/{id})
  const handleDelete = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este evento?")) return;

    try {
      const response = await fetch(`/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Erro ao excluir o evento.");

      await fetchEvents(); // Recarrega a lista
    } catch (error) {
      alert(error.message);
    }
  };

  // Filtragem por busca
  const filteredEvents = events.filter(
    (ev) =>
      ev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ev.issue_organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-10">

      {/* ================= HEADER DA PÁGINA ================= */}
      <Card className="shadow-sm border border-gray-200">
        <CardBody className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2 font-bold">
              <CalendarIcon className="h-6 w-6 text-blue-600" />
              Gerenciamento de Eventos
            </Typography>
            <Typography variant="small" className="text-gray-500 font-normal">
              Cadastre e gerencie os eventos para a geração de certificados e documentos.
            </Typography>
          </div>

          <Button
            onClick={() => handleOpenModal()}
            color="blue"
            variant="gradient"
            className="flex items-center gap-2"
            size="sm"
          >
            <PlusIcon className="h-4 w-4 stroke-2" />
            Novo Evento
          </Button>
        </CardBody>
      </Card>

      {/* ================= TABELA E FILTROS ================= */}
      <Card className="shadow-sm border border-gray-200 overflow-hidden">

        {/* Barra de Pesquisa */}
        <CardHeader floated={false} shadow={false} className="rounded-none p-4 m-0 border-b border-gray-100">
          <div className="w-full md:w-80">
            <Input
              label="Buscar evento ou instituição..."
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>

        <CardBody className="p-0 overflow-x-auto">
          <table className="w-full min-w-max text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider font-semibold">
                <th className="p-4">Nome do Evento</th>
                <th className="p-4">Organização Emissora</th>
                <th className="p-4">Data</th>
                <th className="p-4">Certificados</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50/80 transition-colors">

                    {/* Nome do Evento */}
                    <td className="p-4">
                      <Typography variant="small" className="font-bold text-gray-900">
                        {event.name}
                      </Typography>
                    </td>

                    {/* Instituição / Organização */}
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <BuildingOfficeIcon className="h-4 w-4 text-gray-400" />
                        <Typography variant="small" className="text-gray-600 text-xs">
                          {event.issue_organization}
                        </Typography>
                      </div>
                    </td>

                    {/* Data */}
                    <td className="p-4">
                      <Typography variant="small" className="text-gray-600 text-xs">
                        {new Date(event.event_date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                      </Typography>
                    </td>

                    {/* Contagem de Certificados */}
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-blue-600 font-semibold text-xs">
                        <DocumentCheckIcon className="h-4 w-4" />
                        <span>{event.total_certificates}</span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <Chip
                        size="sm"
                        variant="ghost"
                        color={event.status === "Ativo" ? "green" : "blue-gray"}
                        value={event.status}
                        className="inline-block"
                      />
                    </td>

                    {/* Ações */}
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">
                        <Tooltip content="Editar Evento">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            size="sm"
                            onClick={() => handleOpenModal(event)}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip content="Excluir Evento">
                          <IconButton
                            variant="text"
                            color="red"
                            size="sm"
                            onClick={() => handleDelete(event.id)}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    Nenhum evento encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* ================= MODAL CADASTRO / EDIÇÃO ================= */}
      <Dialog open={openModal} handler={handleCloseModal} size="sm">
        <form onSubmit={handleSubmit}>

          <DialogHeader className="flex justify-between items-center border-b border-gray-100 p-4">
            <Typography variant="h6" color="blue-gray">
              {editingEvent ? "Editar Evento" : "Novo Evento"}
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={handleCloseModal}>
              <XMarkIcon className="h-5 w-5" />
            </IconButton>
          </DialogHeader>

          <DialogBody className="space-y-4 p-4">
            <div>
              <Input
                label="Nome do Evento"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Input
                label="Organização / Instituição Emissora"
                value={formData.issue_organization}
                onChange={(e) => setFormData({ ...formData, issue_organization: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  type="date"
                  label="Data do Evento"
                  value={formData.event_date}
                  onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  required
                />
              </div>

              <div>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full h-[40px] px-3 py-2 text-sm bg-transparent border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-blue-gray-700"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Concluído">Concluído</option>
                  <option value="Arquivado">Arquivado</option>
                </select>
              </div>
            </div>
          </DialogBody>

          <DialogFooter className="flex justify-end gap-2 border-t border-gray-100 p-4">
            <Button variant="text" color="red" onClick={handleCloseModal} size="sm">
              Cancelar
            </Button>
            <Button type="submit" color="blue" variant="gradient" size="sm">
              {editingEvent ? "Atualizar" : "Salvar Evento"}
            </Button>
          </DialogFooter>

        </form>
      </Dialog>

    </div>
  );
}