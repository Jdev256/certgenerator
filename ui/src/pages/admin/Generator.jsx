import React, { useState, useRef } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Progress,
  Chip,
  Alert,
} from "@material-tailwind/react";
import {
  DocumentArrowUpIcon,
  TableCellsIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  SparklesIcon,
  DocumentCheckIcon,
  XMarkIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Generator() {
  // ================= ESTADOS DO WORKFLOW =================
  const [currentStep, setCurrentStep] = useState(0); // Index do Step (0, 1, 2)

    const [selectedEventId, setSelectedEventId] = useState("");
    const [eventsList, setEventsList] = useState([]); // Preencher via GET /events ou passar via props
    const token = localStorage.getItem("token"); // Resgate do token JWT de autenticação

  // Estado da Planilha Excel
  const [excelFile, setExcelFile] = useState(null);
  const [excelProgress, setExcelProgress] = useState(0);
  const [excelRecordCount, setExcelRecordCount] = useState(0);
  const [excelError, setExcelError] = useState("");
  const [parsedRows, setParsedRows] = useState([]);

  // Estado do Documento SVG
  const [svgFile, setSvgFile] = useState(null);
  const [isVerifyingSvg, setIsVerifyingSvg] = useState(false);
  const [svgMarkers, setSvgMarkers] = useState({
    nameRecipient: false,
    validationCode: false,
    qrCode: false,
  });
  const [svgError, setSvgError] = useState("");

  // Estado de Geração de Documentos
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [currentGeneratingIndex, setCurrentGeneratingIndex] = useState(0);
  const [generatedDocs, setGeneratedDocs] = useState([]);
  const [isGenerationComplete, setIsGenerationComplete] = useState(false);

  // Sistema de Toasts (3 segundos)
  const [toasts, setToasts] = useState([]);

  // Referências para Inputs Ocultos de Arquivo
  const excelInputRef = useRef(null);
  const svgInputRef = useRef(null);

  // ================= SISTEMA DE NOTIFICAÇÕES =================
  const addToast = (title, message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, title, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // ================= PASSO 1: UPLOAD E LEITURA DO EXCEL =================
    const handleExcelSelect = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      setExcelError("");
      setExcelFile(file);
      setExcelProgress(0);

      const fileNameLower = file.name.toLowerCase();
      if (!fileNameLower.endsWith(".xlsx") && !fileNameLower.endsWith(".xls") && !fileNameLower.endsWith(".csv")) {
        setExcelError("Formato de arquivo inválido. Envie um arquivo .xlsx ou .csv");
        return;
      }

      addToast("Planilha Selecionada!", `Arquivo ${file.name} pronto para processamento.`);

      setCurrentStep(1);
    };

    let progress = 0;
    const targetCount = 120;
    const interval = setInterval(() => {
      progress += 10;
      setExcelProgress(progress);
      setExcelRecordCount(Math.floor((progress / 100) * targetCount));

      if (progress >= 100) {
        clearInterval(interval);

        const generatedMockData = Array.from({ length: targetCount }, (_, i) => ({
          id: i + 1,
          nome: `Participante ${i + 1}`,
          email: `aluno${i + 1}@email.com`,
          cidade: i % 2 === 0 ? "Coroatá" : "Vargem Grande",
        }));

        setParsedRows(generatedMockData);
        addToast("Planilha Lida!", `${targetCount} registros identificados.`);

        // Avança para o Passo 2
        setTimeout(() => setCurrentStep(1), 600);
      }
    }, 100);
  };

  // ================= PASSO 2: UPLOAD E VALIDAÇÃO SVG =================
  const handleSvgSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".svg")) {
      setSvgError("Apenas arquivos .svg são permitidos.");
      return;
    }

    setSvgError("");
    setSvgFile(file);
    setIsVerifyingSvg(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const svgText = event.target.result;

      // Validação real na estrutura XML do SVG
      const hasName = svgText.includes("{{NAME_RECIPIENT}}");
      const hasValidationCode = svgText.includes("{{VALIDATION-CODE}}");
      const hasQrCode = svgText.includes("__QR_CODE__");

      setTimeout(() => {
        setSvgMarkers({
          nameRecipient: hasName,
          validationCode: hasValidationCode,
          qrCode: hasQrCode,
        });

        setIsVerifyingSvg(false);

        if (hasName && hasValidationCode && hasQrCode) {
          addToast("SVG Válido!", "Todos os 3 marcadores foram validados no XML.");
          // Avança para o Passo 3
          setTimeout(() => setCurrentStep(2), 800);
        } else {
          setSvgError("O SVG enviado não contém todos os marcadores obrigatórios.");
        }
      }, 1200);
    };

    reader.readAsText(file);
  };

  // ================= PASSO 3: GERAÇÃO DOS DOCUMENTOS =================
  const startDocumentGeneration = async () => {
      // 1. Validação de pré-requisitos obrigatórios
      if (!excelFile || !svgFile || !selectedEventId) {
        addToast("Atenção", "Selecione a planilha, o modelo SVG e o evento antes de continuar.");
        return;
      }

      // 2. Reset dos estados de processamento da UI
      setIsGenerating(true);
      setGenerationProgress(0);
      setGeneratedDocs([]);
      setIsGenerationComplete(false);

      // 3. Montagem do payload multipart/form-data
      const formData = new FormData();
      formData.append("excel", excelFile);      // Alinhado com o parâmetro 'excel: UploadFile' do FastAPI
      formData.append("template", svgFile);    // Alinhado com o parâmetro 'template: UploadFile' do FastAPI

      try {
        // 4. Chamada HTTP para a API real
        const response = await fetch(`/api/documents/upload?event_id=${selectedEventId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // Token JWT do usuário autenticado
          },
          body: formData, // O browser define o Content-Type como multipart/form-data automaticamente
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.detail || "Erro ao processar o lote de documentos no servidor.");
        }

        // 5. Sucesso: processa o retorno da API
        const data = await response.json(); // Array de DocumentResponse retornado pelo servidor

        setGenerationProgress(100);
        setGeneratedDocs(data);
        setIsGenerationComplete(true);
        addToast("Processamento Concluído!", `${data.length} certificado(s) gerado(s) com sucesso.`);

      } catch (error) {
        // 6. Tratamento de erros de rede ou validação do backend
        addToast("Erro no Processamento", error.message);
        setIsGenerationComplete(false);
      } finally {
        // 7. Finalização do estado de carregamento
        setIsGenerating(false);
      }
    };

    const handleDownloadZip = async () => {
      if (!excelFile || !svgFile || !selectedEventId) return;

      const formData = new FormData();
      formData.append("excel", excelFile);
      formData.append("template", svgFile);

      try {
        addToast("Download", "Gerando arquivo ZIP no servidor...");

        const response = await fetch(`/api/documents/download?event_id=${selectedEventId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) throw new Error("Falha ao gerar o arquivo ZIP para download.");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "documentos.zip";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        addToast("Erro no Download", error.message);
      }
    };

  return (
    <div className="space-y-6 pb-12">

      {/* ================= TOASTS DE NOTIFICAÇÃO (3 SEG) ================= */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start justify-between bg-gray-900 text-white p-3.5 rounded-xl shadow-2xl border border-gray-700"
          >
            <div className="flex items-start gap-3">
              <SparklesIcon className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <Typography variant="small" className="font-bold text-blue-300">
                  {toast.title}
                </Typography>
                <Typography variant="small" className="text-gray-200 text-xs">
                  {toast.message}
                </Typography>
              </div>
            </div>
            <button onClick={() => removeToast(toast.id)} className="text-gray-400 hover:text-white">
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* ================= TOPBAR (TOPBAR LAYOUT) ================= */}
      <Card className="shadow-sm border border-gray-200">
        <CardBody className="p-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
              <Cog6ToothIcon className="h-6 w-6 text-blue-600" />
              Gerador de Certificados em Lote
            </Typography>
            <Typography variant="small" className="text-gray-500 font-normal">
              Siga os passos abaixo para processar planilhas, validar o modelo SVG e compilar os documentos.
            </Typography>
          </div>

          <input type="file" ref={excelInputRef} onChange={handleExcelSelect} accept=".xlsx, .xls, .csv" className="hidden" />
          <input type="file" ref={svgInputRef} onChange={handleSvgSelect} accept=".svg" className="hidden" />

          {/* Botões do Topbar */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              color={currentStep === 0 ? "blue" : "gray"}
              variant={currentStep === 0 ? "gradient" : "outlined"}
              className="flex items-center gap-2"
              onClick={() => excelInputRef.current?.click()}
            >
              <TableCellsIcon className="h-4 w-4" />
              Upload Excel
            </Button>

            <Button
              size="sm"
              color={currentStep === 1 ? "blue" : "gray"}
              variant={currentStep === 1 ? "gradient" : "outlined"}
              disabled={currentStep < 1}
              className="flex items-center gap-2"
              onClick={() => svgInputRef.current?.click()}
            >
              <DocumentArrowUpIcon className="h-4 w-4" />
              Upload Documento (SVG)
            </Button>
          </div>
          <div className="w-full sm:w-64">
      <select
        value={selectedEventId}
        onChange={(e) => setSelectedEventId(e.target.value)}
        className="w-full h-[40px] px-3 py-2 text-xs bg-white border border-blue-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700 font-medium"
      >
        <option value="">Selecione o Evento...</option>
        {eventsList.map((ev) => (
          <option key={ev.id} value={ev.id}>
            {ev.name}
          </option>
        ))}
      </select>
    </div>
        </CardBody>
      </Card>

      {/* ================= INDICADOR DE PASSOS (STEPPER) ================= */}
      <Card className="shadow-sm border border-gray-200">
        <CardBody className="p-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep > 0 ? "bg-green-500 text-white" : currentStep === 0 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                {currentStep > 0 ? <CheckCircleIcon className="h-5 w-5" /> : "1"}
              </div>
              <div className="hidden sm:block">
                <Typography variant="small" className="font-bold text-gray-900">Passo 1</Typography>
                <Typography variant="small" className="text-xs text-gray-500">Planilha Excel</Typography>
              </div>
            </div>

            <div className={`flex-1 h-1 mx-4 rounded ${currentStep > 0 ? "bg-green-500" : "bg-gray-200"}`} />

            {/* Step 2 */}
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep > 1 ? "bg-green-500 text-white" : currentStep === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                {currentStep > 1 ? <CheckCircleIcon className="h-5 w-5" /> : "2"}
              </div>
              <div className="hidden sm:block">
                <Typography variant="small" className="font-bold text-gray-900">Passo 2</Typography>
                <Typography variant="small" className="text-xs text-gray-500">Validar Modelo SVG</Typography>
              </div>
            </div>

            <div className={`flex-1 h-1 mx-4 rounded ${currentStep > 1 ? "bg-green-500" : "bg-gray-200"}`} />

            {/* Step 3 */}
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${currentStep === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>
                3
              </div>
              <div className="hidden sm:block">
                <Typography variant="small" className="font-bold text-gray-900">Passo 3</Typography>
                <Typography variant="small" className="text-xs text-gray-500">Compilação & Download</Typography>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* ================= PASSO 1: REGRAS E BARRA DO EXCEL ================= */}
      {currentStep === 0 && (
        <Card className="shadow-sm border border-gray-200">
          <CardBody className="p-6 space-y-6">
            <div>
              <Typography variant="h6" color="blue-gray">Guia de Upload da Planilha Excel</Typography>
              <Typography variant="small" className="text-gray-500">Instruções e regras de cabeçalho para leitura do lote.</Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
                <Typography variant="small" className="font-bold text-blue-900 flex items-center gap-1.5 uppercase">
                  <InformationCircleIcon className="h-4 w-4 text-blue-600" />
                  Instruções & Recomendações
                </Typography>
                <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                  <li>Aceita arquivos nos formatos <strong>.XLSX</strong> ou <strong>.CSV</strong>.</li>
                  <li>Evite linhas mescladas no cabeçalho.</li>
                  <li>Certifique-se de não haver linhas vazias entre os dados.</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl space-y-2">
                <Typography variant="small" className="font-bold text-amber-900 flex items-center gap-1.5 uppercase">
                  <ExclamationTriangleIcon className="h-4 w-4 text-amber-600" />
                  Regras Obrigatórias de Colunas
                </Typography>
                <Typography variant="small" className="text-xs text-amber-800">
                  A planilha DEVE conter obrigatoriamente estas 3 colunas:
                </Typography>
                <div className="flex gap-2 pt-1">
                  <Chip size="sm" value="Email" color="amber" variant="ghost" />
                  <Chip size="sm" value="Nome" color="amber" variant="ghost" />
                  <Chip size="sm" value="Cidade" color="amber" variant="ghost" />
                </div>
              </div>
            </div>

            {/* Progresso da Planilha */}
            {excelFile && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Processando: {excelFile.name}</span>
                  <span>{excelRecordCount} registros lidos</span>
                </div>
                <Progress value={excelProgress} color="blue" size="sm" />
              </div>
            )}

            {excelError && (
              <Alert color="red" icon={<ExclamationTriangleIcon className="h-5 w-5" />}>
                {excelError}
              </Alert>
            )}
          </CardBody>
        </Card>
      )}

      {/* ================= PASSO 2: TRANSIÇÃO E VALIDAÇÃO SVG ================= */}
      {currentStep === 1 && (
        <Card className="shadow-sm border border-gray-200">
          <CardBody className="p-6 space-y-6">
            <div>
              <Typography variant="h6" color="blue-gray">Validação da Estrutura do SVG</Typography>
              <Typography variant="small" className="text-gray-500">Verificação automática de marcadores na árvore XML do arquivo.</Typography>
            </div>

            {isVerifyingSvg ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-3 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50/50">
                <SparklesIcon className="h-10 w-10 text-blue-600 animate-spin" />
                <Typography variant="small" className="font-bold text-gray-800">
                  Verificando estrutura XML do SVG...
                </Typography>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
                    <Typography variant="small" className="font-bold text-blue-900 uppercase">
                      Marcadores Exigidos
                    </Typography>
                    <ul className="text-xs font-mono text-blue-900 space-y-1">
                      <li>Texto: <strong>{"{{NAME_RECIPIENT}}"}</strong></li>
                      <li>Texto: <strong>{"{{VALIDATION-CODE}}"}</strong></li>
                      <li>Imagem/Tag: <strong>{"__QR_CODE__"}</strong></li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                    <Typography variant="small" className="font-bold text-gray-700 uppercase">
                      Checklist de Validação XML
                    </Typography>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className={`h-4 w-4 ${svgMarkers.nameRecipient ? "text-green-500" : "text-gray-300"}`} />
                        <span>Marcador {"{{NAME_RECIPIENT}}"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className={`h-4 w-4 ${svgMarkers.validationCode ? "text-green-500" : "text-gray-300"}`} />
                        <span>Marcador {"{{VALIDATION-CODE}}"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircleIcon className={`h-4 w-4 ${svgMarkers.qrCode ? "text-green-500" : "text-gray-300"}`} />
                        <span>Marcador {"__QR_CODE__"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {svgError && (
                  <Alert color="red" icon={<ExclamationTriangleIcon className="h-5 w-5" />}>
                    {svgError}
                  </Alert>
                )}
              </div>
            )}
          </CardBody>
        </Card>
      )}

      {/* ================= PASSO 3: GERAÇÃO, PROGRESSO E TABELA ================= */}
      {currentStep === 2 && (
        <Card className="shadow-sm border border-gray-200">
          <CardBody className="p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Typography variant="h6" color="blue-gray">Compilação dos Documentos</Typography>
                <Typography variant="small" className="text-gray-500">
                  {parsedRows.length} registros prontos para geração.
                </Typography>
              </div>

              {/* BOTÃO OCULTO LIBERADO: GERAR DOCUMENTOS */}
              {!isGenerating && !isGenerationComplete && (
                <Button
                  color="green"
                  variant="gradient"
                  className="flex items-center gap-2"
                  onClick={startDocumentGeneration}
                >
                  <SparklesIcon className="h-5 w-5" />
                  GERAR DOCUMENTOS
                </Button>
              )}

              {/* BOTÃO OCULTO LIBERADO: DOWNLOAD ZIP */}
              {isGenerationComplete && (
                <Button
                  color="blue"
                  variant="gradient"
                  className="flex items-center gap-2 animate-bounce"
                  onClick={handleDownloadZip}
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  DOWNLOAD (ZIP)
                </Button>
              )}
            </div>

            {/* Barra de Progresso de Geração */}
            {(isGenerating || isGenerationComplete) && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>
                    {isGenerationComplete
                      ? "Processamento Concluído!"
                      : `Gerando documento ${currentGeneratingIndex} de ${parsedRows.length}...`}
                  </span>
                  <span>{generationProgress}%</span>
                </div>
                <Progress value={generationProgress} color={isGenerationComplete ? "green" : "blue"} size="sm" />
              </div>
            )}

            {/* Lista Final de Documentos Gerados */}
            {generatedDocs.length > 0 && (
              <div className="space-y-3">
                <Typography variant="small" className="font-bold text-gray-600 uppercase">
                  Documentos Gerados ({generatedDocs.length})
                </Typography>

                <div className="overflow-x-auto border border-gray-200 rounded-xl max-h-80 overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold sticky top-0">
                      <tr>
                        <th className="p-3">Código Hash</th>
                        <th className="p-3">Destinatário</th>
                        <th className="p-3">Cidade / Polo</th>
                        <th className="p-3">Data</th>
                        <th className="p-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {generatedDocs.map((doc) => (
                        <tr key={doc.id} className="hover:bg-gray-50">
                          <td className="p-3 font-mono font-bold text-blue-600">{doc.code}</td>
                          <td className="p-3 font-medium text-gray-900">{doc.recipient}</td>
                          <td className="p-3 text-gray-600">{doc.city}</td>
                          <td className="p-3 text-gray-500">{doc.date}</td>
                          <td className="p-3 text-right">
                            <Chip size="sm" variant="ghost" color="green" value="Gerado" className="inline-block" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  );
}