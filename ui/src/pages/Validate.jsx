import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
  Alert,
  Chip,
} from "@material-tailwind/react";
import {
  CheckCircle2,
  XCircle,
  Search,
  ShieldCheck,
  Award,
  User,
  Mail,
  MapPin
} from "lucide-react";

export default function ValidateDocument() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleValidate = async (e) => {
    e.preventDefault();

    const cleanCode = code.trim();
    if (!cleanCode) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Endpoint público de validação (não requer Bearer Token)
      const response = await axios.get(
        `http://localhost:8000/api/validate/${encodeURIComponent(cleanCode)}`
      );

      setResult(response.data);
    } catch (err) {
      console.error("Erro na validação:", err);
      if (err.response && err.response.status === 404) {
        setError(err.response.data.detail || "Código de verificação inválido ou certificado revogado.");
      } else {
        setError("Erro ao conectar com o serviço de validação. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl">

        {/* Cabeçalho da Página */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-full mb-3">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <Typography variant="h3" color="blue-gray" className="font-bold">
            Validação de Documento
          </Typography>
          <Typography color="gray" className="mt-1 text-sm font-normal">
            Insira o código de verificação impresso no certificado para checar sua autenticidade.
          </Typography>
        </div>

        {/* Formulário de Busca */}
        <Card className="p-6 shadow-md mb-6">
          <form onSubmit={handleValidate} className="flex flex-col sm:flex-row gap-3">
            <div className="relative w-full">
              <Input
                type="text"
                size="lg"
                label="Código de Verificação"
                placeholder="Ex: IESI-A1B2C3D4 ou UUID"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="pr-10"
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !code.trim()}
              className="flex items-center justify-center gap-2 sm:w-auto w-full"
            >
              <Search className="w-4 h-4" />
              {loading ? "Validando..." : "Validar"}
            </Button>
          </form>
        </Card>

        {/* --- CARD DE FALHA / ERRO --- */}
        {error && (
          <Alert
            color="red"
            icon={<XCircle className="w-6 h-6" />}
            className="shadow-sm border border-red-200"
          >
            <Typography variant="h6" color="white" className="font-semibold">
              Documento Não Autenticado
            </Typography>
            <Typography variant="small" color="white" className="mt-1 font-normal opacity-90">
              {error}
            </Typography>
          </Alert>
        )}

        {/* --- CARD DE SUCESSO --- */}
        {result && (
          <Card className="border border-green-200 shadow-lg overflow-hidden animate-fade-in">
            {/* Header de Validação Positiva */}
            <div className="bg-green-500 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                <Typography variant="h6" color="white" className="font-semibold">
                  Documento Autêntico e Válido
                </Typography>
              </div>
              <Chip
                value="Verificado"
                color="white"
                className="text-green-800 font-bold uppercase text-xs"
              />
            </div>

            <CardBody className="space-y-4">
              {/* Nome do Documento / Evento */}
              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <Typography variant="small" color="gray" className="font-medium">
                    Documento / Evento
                  </Typography>
                  <Typography variant="h6" color="blue-gray">
                    {result.name}
                  </Typography>
                </div>
              </div>

              {/* Nome do Portador */}
              <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                <User className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <Typography variant="small" color="gray" className="font-medium">
                    Emitido para
                  </Typography>
                  <Typography variant="h6" color="blue-gray">
                    {result.student_name}
                  </Typography>
                </div>
              </div>

              {/* Informações Complementares (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {result.student_email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <Typography variant="small" color="gray" className="text-xs">
                        E-mail
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {result.student_email}
                      </Typography>
                    </div>
                  </div>
                )}

                {result.city && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <div>
                      <Typography variant="small" color="gray" className="text-xs">
                        Cidade Polo
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {result.city}
                      </Typography>
                    </div>
                  </div>
                )}
              </div>

              {/* Código de Verificação Footer */}
              <div className="bg-gray-50 p-3 rounded-lg text-center mt-4 border border-gray-200">
                <Typography variant="small" color="gray" className="text-xs font-medium">
                  CÓDIGO DE VERIFICAÇÃO PÚBLICA
                </Typography>
                <Typography variant="small" color="blue-gray" className="font-mono font-bold tracking-wider">
                  {result.verification_code}
                </Typography>
              </div>
            </CardBody>
          </Card>
        )}

      </div>
    </div>
  );
}