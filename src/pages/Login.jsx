import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogado }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("https://wppweb.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Usuário logado:", data);
        setLogado(true);
        navigate("/painel");
      } else {
        setErro("Usuário ou senha incorretos.");
      }
    } catch (e) {
      setErro("Erro ao tentar fazer login.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Entrar</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}
