import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const fazerLogin = () => {
    navigate("/painel");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Área do Cliente</h1>
      <input placeholder="Usuário" />
      <br /><br />
      <input type="password" placeholder="Senha" />
      <br /><br />
      <button onClick={fazerLogin}>Entrar</button>
    </div>
  );
}
