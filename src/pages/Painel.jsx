import { useEffect, useState } from "react";

function Painel() {
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
      fetchNumeros(); // Atualiza a lista
    } catch (error) {
      console.error("Erro ao adicionar número:", error);
    }
  };

  const removerNumero = async (telefone) => {
    try {
      await fetch(`https://gptwpp.onrender.com/autorizados/${telefone}`, {
        method: "DELETE",
      });
      fetchNumeros(); // Atualiza a lista
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
      <p>Gerencie seus números autorizados para uso com o bot do WhatsApp.</p>

      <input
        type="text"
        value={numeroNovo}
        onChange={(e) => setNumeroNovo(e.target.value)}
        placeholder="Novo número com DDD"
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={adicionarNumero}>Adicionar</button>

      <ul style={{ marginTop: "1rem" }}>
        {numeros.map((numero) => (
          <li key={numero.telefone}>
            {numero.telefone}
            <button
              onClick={() => removerNumero(numero.telefone)}
              style={{ marginLeft: "1rem" }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Painel;
