import { useState, useEffect } from "react";

export default function Painel() {
  const [numeros, setNumeros] = useState([]);
  const [numeroNovo, setNumeroNovo] = useState("");

  const fetchNumeros = async () => {
    try {
      const response = await fetch("https://gptwpp.onrender.com/autorizados");
      const data = await response.json();
      setNumeros(data);
    } catch (error) {
      console.error("Erro ao buscar números:", error);
    }
  };

  const adicionarNumero = async () => {
    if (!numeroNovo) return;
    try {
      await fetch("https://gptwpp.onrender.com/autorizados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telefone: numeroNovo }),
      });
      setNumeroNovo("");
      fetchNumeros();
    } catch (error) {
      console.error("Erro ao adicionar número:", error);
    }
  };

  const removerNumero = async (telefone) => {
    try {
      await fetch(`https://gptwpp.onrender.com/autorizados/${telefone}`, {
        method: "DELETE",
      });
      fetchNumeros();
    } catch (error) {
      console.error("Erro ao remover número:", error);
    }
  };

  useEffect(() => {
    fetchNumeros();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Painel do Cliente</h1>
      <p>Aqui você poderá gerenciar seu projeto, como os números autorizados.</p>
      <input
        type="text"
        placeholder="Novo número"
        value={numeroNovo}
        onChange={(e) => setNumeroNovo(e.target.value)}
      />
      <button onClick={adicionarNumero}>Adicionar</button>
      <ul>
        {numeros.map((n) => (
          <li key={n.telefone}>
            {n.telefone}
            <button onClick={() => removerNumero(n.telefone)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
