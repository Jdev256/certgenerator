import React, {useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const baseURL = "/login"

export default function Login({authUser}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o reload padrão da página
        setError(null);
        setLoading(true);

        try {
          const formData = new URLSearchParams();
          formData.append("username", email);
          formData.append("password", password);

          const loginResponse = await axios.post(
            "https://api.certgenerate.com.br//api/users/login",
            formData,
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );

          const token = loginResponse.data.access_token;
          localStorage.setItem("token", token);

          const userResponse = await axios.get("https:///api.certgenerate.com.br/api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (authUser) {
            authUser(userResponse.data);
          }

          console.log("Login realizado com sucesso:", userResponse.data);
        } catch (err) {
          console.error("Erro na autenticação:", err);
          const message = err.response?.data?.detail || "Erro ao realizar login. Verifique suas credenciais.";
          setError(message);
        } finally {
          setLoading(false);
        }
  };

    return (
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Digite suas credenciais para acessar.
      </Typography>
      <form onSubmit="{handleSubmit}" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            type="email"
            size="lg"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Ainda não tem uma conta?{" "}
          <a href="#" className="font-medium text-gray-900">
            Cadastrar-se
          </a>
        </Typography>
      </form>
    </Card>
  );
}