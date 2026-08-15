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
  UserPlusIcon,
  PencilIcon,
  TrashIcon,
  UserGroupIcon,
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon,
  XMarkIcon,
  DocumentTextIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

export default function RecipientsPage() {
  const [recipients, setRecipients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("Todos os Eventos");
  const [openModal, setOpenModal] = useState(false);
  const [editingRecipient, setEditingRecipient] = useState(null);
  const token = localStorage.getItem("token");

  // Estado do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    event_name: EVENTS_LIST[1],
    status: "Pendente",
  });

    const fetchRecipients = async () => {
        try {
          const response = await fetch("/recipients/", {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (!response.ok) throw new Error("Erro ao listar destinatários.");
          const data = await response.json();
          setRecipients(data.recipients || []);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        fetchRecipients();
      }, []);

  // Abre modal para criação ou edição
  const handleOpenModal = (recipientToEdit = null) => {
    if (recipientToEdit) {
      setEditingRecipient(recipientToEdit);
      setFormData({
        name: recipientToEdit.name,
        email: recipientToEdit.email,
        cpf: recipientToEdit.cpf,
        city: recipientToEdit.city,
        event_name: recipientToEdit.event_name,
        status: recipientToEdit.status,
      });
    } else {
      setEditingRecipient(null);
      setFormData({
        name: "",
        email: "",
        cpf: "",
        city: "",
        event_name: EVENTS_LIST[1],
        status: "Pendente",
      });
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingRecipient(null);
  };

  // Salvar (Criar ou Atualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Payload ajustado conforme RecipientCreate no backend
    const payload = {
      name: formData.name,
      email: formData.email || null,
      city: formData.city || null,
      phone: formData.phone || null,
      recipient_type: "PARTICIPANT"
    };

    const url = editingRecipient ? `/recipients/${editingRecipient.id}` : "/recipients/";
    const method = editingRecipient ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Falha ao salvar destinatário.");

      await fetchRecipients();
      handleCloseModal();
    } catch (error) {
      alert(error.message);
    }
  };

  // Excluir destinatário
  const handleDelete = async (id) => {
    if (!window.confirm("Deseja remover este destinatário?")) return;

    try {
      const response = await fetch(`/recipients/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.ok) throw new Error("Erro ao excluir destinatário.");

      await fetchRecipients();
    } catch (error) {
      alert(error.message);
    }
  };

  // Filtragem combinada (Busca textual + Filtro por Evento)
  const filteredRecipients = recipients.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesEvent =
      selectedEvent === "Todos os Eventos" || item.event_name === selectedEvent;

    return matchesSearch && matchesEvent;
  });

  return (
    <div className="space-y-6 pb-10">

      {/* ================= HEADER DA PÁGINA ================= */}
      <Card className="shadow-sm border border-gray-200">
        <CardBody className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2 font-bold">
              <UserGroupIcon className="h-6 w-6 text-blue-600" />
              Base de Destinatários
            </Typography>
            <Typography variant="small" className="text-gray-500 font-normal">
              Cadastre e gerencie participantes, alunos e ouvintes vinculados aos eventos de certificação.
            </Typography>
          </div>

          <Button
            onClick={() => handleOpenModal()}
            color="blue"
            variant="gradient"
            className="flex items-center gap-2"
            size="sm"
          >
            <UserPlusIcon className="h-4 w-4 stroke-2" />
            Novo Destinatário
          </Button>
        </CardBody>
      </Card>

      {/* ================= TABELA E FILTROS ================= */}
      <Card className="shadow-sm border border-gray-200 overflow-hidden">

        {/* Barra de Pesquisa e Filtros */}
        <CardHeader floated={false} shadow={false} className="rounded-none p-4 m-0 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-wrap items-center justify-between gap-4">


            {/* Filtro por Evento */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FunnelIcon className="h-4 w-4 text-gray-500 hidden sm:block" />
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full sm:w-64 h-[40px] px-3 py-2 text-xs bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 font-medium"
              >
                {EVENTS_LIST.map((ev, idx) => (
                  <option key={idx} value={ev}>
                    {ev}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </CardHeader>

        <CardBody className="p-0 overflow-x-auto">
          <table className="w-full min-w-max text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider font-semibold">
                <th className="p-4">Destinatário</th>
                <th className="p-4">Cidade / Polo</th>
                <th className="p-4">Evento Vinculado</th>
                <th className="p-4">Status Doc.</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredRecipients.length > 0 ? (
                filteredRecipients.map((recipient) => (
                  <tr key={recipient.id} className="hover:bg-gray-50/80 transition-colors">

                    {/* Nome e E-mail */}
                    <td className="p-4">
                      <div>
                        <Typography variant="small" className="font-bold text-gray-900">
                          {recipient.name}
                        </Typography>
                        <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
                          <EnvelopeIcon className="h-3.5 w-3.5" />
                          <span>{recipient.email}</span>
                        </div>
                      </div>
                    </td>

                    {/* Cidade */}
                    <td className="p-4">
                      <div className="flex items-center gap-1 text-gray-600 text-xs">
                        <MapPinIcon className="h-4 w-4 text-gray-400" />
                        <span>{recipient.city}</span>
                      </div>
                    </td>

                    {/* Evento */}
                    <td className="p-4">
                      <div className="flex items-center gap-1.5 text-xs text-blue-900 bg-blue-50/60 px-2.5 py-1 rounded-md border border-blue-100 max-w-xs truncate">
                        <AcademicCapIcon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="truncate">{recipient.event_name}</span>
                      </div>
                    </td>

                    {/* Status do Certificado */}
                    <td className="p-4">
                      <Chip
                        size="sm"
                        variant="ghost"
                        color={recipient.status === "Emitido" ? "green" : "amber"}
                        value={recipient.status}
                        className="inline-block"
                      />
                    </td>

                    {/* Ações */}
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">
                        <Tooltip content="Editar Destinatário">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            size="sm"
                            onClick={() => handleOpenModal(recipient)}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip content="Excluir Destinatário">
                          <IconButton
                            variant="text"
                            color="red"
                            size="sm"
                            onClick={() => handleDelete(recipient.id)}
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
                    Nenhum destinatário encontrado para os filtros selecionados.
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
              {editingRecipient ? "Editar Destinatário" : "Novo Destinatário"}
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={handleCloseModal}>
              <XMarkIcon className="h-5 w-5" />
            </IconButton>
          </DialogHeader>

          <DialogBody className="space-y-4 p-4">
            <div>
              <Input
                label="Nome Completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  type="email"
                  label="Endereço de E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  label="Cidade / Polo"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Status Emissão</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full h-[40px] px-3 py-2 text-sm bg-transparent border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-blue-gray-700"
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Emitido">Emitido</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Evento Vinculado</label>
              <select
                value={formData.event_name}
                onChange={(e) => setFormData({ ...formData, event_name: e.target.value })}
                className="w-full h-[40px] px-3 py-2 text-sm bg-transparent border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-blue-gray-700"
              >
                {EVENTS_LIST.filter((ev) => ev !== "Todos os Eventos").map((ev, idx) => (
                  <option key={idx} value={ev}>
                    {ev}
                  </option>
                ))}
              </select>
            </div>
          </DialogBody>

          <DialogFooter className="flex justify-end gap-2 border-t border-gray-100 p-4">
            <Button variant="text" color="red" onClick={handleCloseModal} size="sm">
              Cancelar
            </Button>
            <Button type="submit" color="blue" variant="gradient" size="sm">
              {editingRecipient ? "Atualizar" : "Salvar Destinatário"}
            </Button>
          </DialogFooter>

        </form>
      </Dialog>

    </div>
  );
}