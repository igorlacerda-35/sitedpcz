// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (usuario === "admin" && senha === "senha123") {
      localStorage.setItem("logado", "true");
      navigate("/painel");
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold mb-6">Área do Cliente</h1>
      <input
        type="text"
        placeholder="Usuário"
        className="mb-3 px-4 py-2 border rounded"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="mb-3 px-4 py-2 border rounded"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Entrar
      </button>
    </div>
  );
}
