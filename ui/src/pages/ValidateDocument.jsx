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
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl">

        {/* CABEÇALHO */}
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <ShieldCheck className="h-10 w-10" />
          </div>

          <Typography
            type="h2"
            className="font-bold text-gray-900"
          >
            Validação de Documento
          </Typography>

          <Typography className="mx-auto mt-2 max-w-xl font-normal text-gray-600">
            Insira o código de verificação impresso no certificado para
            verificar sua autenticidade.
          </Typography>
        </header>

        {/* FORMULÁRIO */}
        <Card className="mb-6 p-6 shadow-md">
          <form
            onSubmit={handleValidate}
            className="flex flex-col gap-4 sm:flex-row sm:items-end"
          >
            <div className="w-full">
              <Input
                type="text"
                size="lg"
                label="Código de Verificação"
                placeholder="IESI-A1B2C3D4 ou UUID"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="solid"
              color="primary"
              disabled={loading || !code.trim()}
              className="flex w-full shrink-0 items-center justify-center gap-2 sm:w-auto"
            >
              <Search className="h-4 w-4" />

              {loading ? "Validando..." : "Validar"}
            </Button>
          </form>
        </Card>

        {/* ERRO */}
        {error && (
          <Alert
            color="error"
            className="mb-6 border border-red-200"
          >
            <Alert.Icon>
              <XCircle className="h-5 w-5" />
            </Alert.Icon>

            <Alert.Content>
              <Typography
                type="h6"
                color="error"
                className="font-semibold"
              >
                Documento Não Autenticado
              </Typography>

              <Typography
                type="small"
                className="mt-1 font-normal text-gray-700"
              >
                {error}
              </Typography>
            </Alert.Content>
          </Alert>
        )}

        {/* RESULTADO */}
        {result && (
          <Card className="overflow-hidden border border-green-200 shadow-lg">

            {/* CABEÇALHO DO RESULTADO */}
            <div className="flex items-center justify-between gap-4 bg-green-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 shrink-0" />

                <div>
                  <Typography
                    type="h6"
                    className="font-bold text-white"
                  >
                    Documento Autêntico e Válido
                  </Typography>

                  <Typography className="mt-0.5 text-sm text-green-100">
                    Verificação realizada com sucesso.
                  </Typography>
                </div>
              </div>

              <Chip
                size="sm"
                variant="solid"
                color="success"
              >
                <Chip.Label>
                  Verificado
                </Chip.Label>
              </Chip>
            </div>

            {/* CORPO */}
            <Card.Body className="space-y-5">

              {/* DOCUMENTO */}
              <div className="flex items-start gap-3 border-b border-gray-100 pb-4">
                <Award className="mt-1 h-5 w-5 shrink-0 text-blue-600" />

                <div className="min-w-0">
                  <Typography
                    type="small"
                    className="font-medium text-gray-500"
                  >
                    Documento / Evento
                  </Typography>

                  <Typography
                    type="h6"
                    className="mt-1 break-words text-gray-900"
                  >
                    {result.name}
                  </Typography>
                </div>
              </div>

              {/* PORTADOR */}
              <div className="flex items-start gap-3 border-b border-gray-100 pb-4">
                <User className="mt-1 h-5 w-5 shrink-0 text-blue-600" />

                <div className="min-w-0">
                  <Typography
                    type="small"
                    className="font-medium text-gray-500"
                  >
                    Emitido para
                  </Typography>

                  <Typography
                    type="h6"
                    className="mt-1 break-words text-gray-900"
                  >
                    {result.student_name}
                  </Typography>
                </div>
              </div>

              {/* INFORMAÇÕES COMPLEMENTARES */}
              {(result.student_email || result.city) && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {result.student_email && (
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-gray-400" />

                      <div className="min-w-0">
                        <Typography
                          type="small"
                          className="font-medium text-gray-500"
                        >
                          E-mail
                        </Typography>

                        <Typography
                          type="small"
                          className="mt-1 break-all font-semibold text-gray-900"
                        >
                          {result.student_email}
                        </Typography>
                      </div>
                    </div>
                  )}

                  {result.city && (
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-gray-400" />

                      <div>
                        <Typography
                          type="small"
                          className="font-medium text-gray-500"
                        >
                          Cidade Polo
                        </Typography>

                        <Typography
                          type="small"
                          className="mt-1 font-semibold text-gray-900"
                        >
                          {result.city}
                        </Typography>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* CÓDIGO */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                <Typography
                  type="small"
                  className="font-medium uppercase tracking-wide text-gray-500"
                >
                  Código de Verificação Pública
                </Typography>

                <Typography
                  type="small"
                  className="mt-2 break-all font-mono font-bold tracking-wider text-gray-900"
                >
                  {result.verification_code}
                </Typography>
              </div>

            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}