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
  DocumentCheckIcon,
  ArrowDownTrayIcon,
  TrashIcon,
  FunnelIcon,
  XMarkIcon,
  ShieldCheckIcon,
  QrCodeIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  NoSymbolIcon,
} from "@heroicons/react/24/outline";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Todos os Status");
  const [viewingDoc, setViewingDoc] = useState(null);

  const [selectedEventId, setSelectedEventId] = useState("");
  const [eventsList, setEventsList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!selectedEventId) return;

    const fetchDocuments = async () => {
      try {
        const response = await fetch(`https://api.certgenerate.com.br//api/documents/?event_id=${selectedEventId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) throw new Error("Erro ao buscar documentos.");
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocuments();
  }, [selectedEventId]);

    useEffect(() => {
    fetch("/events/", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => setEventsList(data.events || []))
      .catch(console.error);
  }, []);

  // Alterar Status (Revogar / Reativar)
  const handleToggleStatus = (id) => {
    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === id) {
          const newStatus = doc.status === "Válido" ? "Revogado" : "Válido";
          return { ...doc, status: newStatus };
        }
        return doc;
      })
    );
  };

  // Excluir Documento do Registro
  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja apagar este documento do histórico permanente?")) {
      setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    }
  };

  // Download individual (Simulado)
  const handleDownload = (doc) => {
    alert(`Iniciando download do documento PDF: ${doc.code}`);
  };

  // Filtro Combinado (Hash/Código/Destinatário + Status)
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.recipient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.recipient_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.event_name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "Todos os Status" || doc.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-10">

      {/* ================= HEADER DA PÁGINA ================= */}
      <Card className="shadow-sm border border-gray-200">
        <CardBody className="p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2 font-bold">
              <DocumentCheckIcon className="h-6 w-6 text-blue-600" />
              Acervo de Documentos Emitidos
            </Typography>
            <Typography variant="small" className="text-gray-500 font-normal">
              Consulte códigos de verificação, autenticidade por hash e faça a gestão de status das emissões.
            </Typography>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-center">
              <Typography variant="small" className="text-xs text-blue-800 font-medium">Total Registrado</Typography>
              <Typography variant="h6" className="text-blue-900 font-bold">{documents.length}</Typography>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* ================= TABELA E FILTROS ================= */}
      <Card className="shadow-sm border border-gray-200 overflow-hidden">

        {/* Barra de Pesquisa e Filtros */}
        <CardHeader floated={false} shadow={false} className="rounded-none p-4 m-0 border-b border-gray-100 bg-gray-50/50">
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Campo de Busca Textual */}
            <div className="w-full sm:w-96">
              <Input
                label="Buscar por Código, Hash, Destinatário ou Evento..."
                icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filtro por Status */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FunnelIcon className="h-4 w-4 text-gray-500 hidden sm:block" />
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full sm:w-48 h-[40px] px-3 py-2 text-xs bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 font-medium"
              >
                {STATUS_OPTIONS.map((st, idx) => (
                  <option key={idx} value={st}>
                    {st}
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
                <th className="p-4">Código / Registro</th>
                <th className="p-4">Destinatário</th>
                <th className="p-4">Evento</th>
                <th className="p-4">Data Emissão</th>
                <th className="p-4">Status Autenticidade</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50/80 transition-colors">

                    {/* Código Hash */}
                    <td className="p-4">
                      <div>
                        <Typography variant="small" className="font-mono font-bold text-blue-600 text-xs">
                          {doc.code}
                        </Typography>
                        <Typography variant="small" className="font-mono text-[10px] text-gray-400 max-w-[180px] truncate" title={doc.hash}>
                          {doc.hash}
                        </Typography>
                      </div>
                    </td>

                    {/* Destinatário */}
                    <td className="p-4">
                      <div>
                        <Typography variant="small" className="font-bold text-gray-900">
                          {doc.recipient_name}
                        </Typography>
                        <Typography variant="small" className="text-gray-500 text-xs">
                          {doc.recipient_email}
                        </Typography>
                      </div>
                    </td>

                    {/* Evento */}
                    <td className="p-4">
                      <Typography variant="small" className="text-gray-700 text-xs font-medium max-w-xs truncate">
                        {doc.event_name}
                      </Typography>
                    </td>

                    {/* Data */}
                    <td className="p-4">
                      <Typography variant="small" className="text-gray-600 text-xs">
                        {new Date(doc.issue_date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                      </Typography>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <Chip
                        size="sm"
                        variant="ghost"
                        color={doc.status === "Válido" ? "green" : "red"}
                        value={doc.status}
                        className="inline-block"
                      />
                    </td>

                    {/* Ações */}
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-1">

                        {/* Detalhes / Verificação */}
                        <Tooltip content="Ver Detalhes do Registro">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            size="sm"
                            onClick={() => setViewingDoc(doc)}
                          >
                            <EyeIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>

                        {/* Download PDF */}
                        <Tooltip content="Baixar PDF">
                          <IconButton
                            variant="text"
                            color="blue"
                            size="sm"
                            onClick={() => handleDownload(doc)}
                          >
                            <ArrowDownTrayIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>

                        {/* Revogar / Alternar Status */}
                        <Tooltip content={doc.status === "Válido" ? "Revogar Documento" : "Reativar Documento"}>
                          <IconButton
                            variant="text"
                            color={doc.status === "Válido" ? "amber" : "green"}
                            size="sm"
                            onClick={() => handleToggleStatus(doc.id)}
                          >
                            {doc.status === "Válido" ? (
                              <NoSymbolIcon className="h-4 w-4" />
                            ) : (
                              <CheckCircleIcon className="h-4 w-4" />
                            )}
                          </IconButton>
                        </Tooltip>

                        {/* Excluir do Registro */}
                        <Tooltip content="Excluir do Acervo">
                          <IconButton
                            variant="text"
                            color="red"
                            size="sm"
                            onClick={() => handleDelete(doc.id)}
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
                    Nenhum documento encontrado com os critérios pesquisados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* ================= MODAL DETALHES DE AUTENTICIDADE ================= */}
      {viewingDoc && (
        <Dialog open={Boolean(viewingDoc)} handler={() => setViewingDoc(null)} size="sm">
          <DialogHeader className="flex justify-between items-center border-b border-gray-100 p-4">
            <Typography variant="h6" color="blue-gray" className="flex items-center gap-2">
              <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
              Comprovante de Validação
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={() => setViewingDoc(null)}>
              <XMarkIcon className="h-5 w-5" />
            </IconButton>
          </DialogHeader>

          <DialogBody className="space-y-4 p-4 text-xs">

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Status no Sistema:</span>
                <Chip
                  size="sm"
                  variant="ghost"
                  color={viewingDoc.status === "Válido" ? "green" : "red"}
                  value={viewingDoc.status}
                />
              </div>

              <div>
                <span className="text-gray-500 font-medium block">Código de Validação:</span>
                <span className="font-mono font-bold text-blue-700 text-sm">{viewingDoc.code}</span>
              </div>

              <div>
                <span className="text-gray-500 font-medium block">Hash Criptográfico (SHA-256):</span>
                <span className="font-mono text-[10px] text-gray-800 break-all bg-white p-2 border border-gray-200 rounded block mt-0.5">
                  {viewingDoc.hash}
                </span>
              </div>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Destinatário:</span>
                <span className="font-bold text-gray-900">{viewingDoc.recipient_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">E-mail:</span>
                <span className="text-gray-800">{viewingDoc.recipient_email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Evento:</span>
                <span className="text-gray-800 font-medium text-right max-w-[200px]">{viewingDoc.event_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Data de Emissão:</span>
                <span className="text-gray-800">{new Date(viewingDoc.issue_date).toLocaleDateString("pt-BR", { timeZone: "UTC" })}</span>
              </div>
            </div>

            {/* Simulação de QR Code para validação pública */}
            <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl flex items-center gap-3">
              <QrCodeIcon className="h-10 w-10 text-blue-600 flex-shrink-0" />
              <div>
                <Typography variant="small" className="font-bold text-blue-900 text-xs">
                  URL de Verificação Pública
                </Typography>
                <Typography variant="small" className="text-[11px] text-blue-700 font-mono underline cursor-pointer">
                  https://valida.sistema.com/verify/{viewingDoc.code}
                </Typography>
              </div>
            </div>

          </DialogBody>

          <DialogFooter className="border-t border-gray-100 p-4">
            <Button color="blue" variant="gradient" size="sm" onClick={() => setViewingDoc(null)} className="w-full">
              Fechar
            </Button>
          </DialogFooter>
        </Dialog>
      )}

    </div>
  );
}