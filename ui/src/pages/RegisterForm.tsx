import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  Input,
  Button,
  Typography,
  Alert
} from "@material-tailwind/react";

export default function RegisterForm({ onRegisterSuccess, switchToLogin }) {
  // 1. Estados dos campos do formulário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2. Estados de feedback de interface (carregamento, erros e sucesso)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // 3. Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Validação básica no Front-end
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: email,
        password: password,
        is_active: true
      };

      const response = await axios.post(
        "https://api.certgenerate.com.br/api/users/register",
        payload
      );

      setSuccessMessage("Conta criada com sucesso! Redirecionando para o login...");

      // Limpa os campos
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Callback opcional se quiser disparar alguma ação no pai
      if (onRegisterSuccess) {
        onRegisterSuccess(response.data);
      }

      // Redireciona para o formulário de login após 2 segundos
      setTimeout(() => {
        if (switchToLogin) {
          switchToLogin();
        }
      }, 2000);

    } catch (err) {
      console.error("Erro no cadastro:", err);
      const message =
        err.response?.data?.detail || "Erro ao criar conta. Tente novamente.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Typography variant="h4" color="blue-gray">
        Criar Conta
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Preencha os dados abaixo para se cadastrar na plataforma.
      </Typography>

      {/* Alerta de Erro */}
      {error && (
        <Alert color="red" className="mt-4 max-w-screen-lg w-80 sm:w-96">
          {error}
        </Alert>
      )}

      {/* Alerta de Sucesso */}
      {successMessage && (
        <Alert color="green" className="mt-4 max-w-screen-lg w-80 sm:w-96">
          {successMessage}
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Seu E-mail
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="nome@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Senha
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Confirme a Senha
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Já tem uma conta?{" "}
          <button
            type="button"
            onClick={switchToLogin}
            className="font-medium text-gray-900 underline bg-transparent border-0 cursor-pointer"
          >
            Entrar
          </button>
        </Typography>
      </form>
    </Card>
  );
}