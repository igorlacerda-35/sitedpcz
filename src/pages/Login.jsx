import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogado }) {
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (senha === "1234") {
      setLogado(true);
      navigate("/painel");
    } else {
      alert("Senha incorreta");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Área do Cliente</h2>
      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
