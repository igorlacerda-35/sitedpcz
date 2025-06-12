// src/pages/Painel.jsx
import React, { useEffect, useState } from "react";

export default function Painel() {
  const [numeros, setNumeros] = useState([]);
  const [numeroNovo, setNumeroNovo] = useState("");

  const backend = "https://gptwpp.onrender.com";

  const fetchNumeros = async () => {
    try {
      const resp = await fetch(`${backend}/autorizados`, {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa("admin:senha123")
        }
      });
      const data = await resp.json();
      setNumeros(data.autorizados);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNumeros();
  }, []);

  const adicionarNumero = async () => {
    if (!numeroNovo) return;
    await fetch(`${backend}/autorizados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("admin:senha123")
      },
      body: JSON.stringify({ telefone: numeroNovo })
    });
    setNumeroNovo("");
    fetchNumeros();
  };

  const removerNumero = async (tel) => {
    await fetch(`${backend}/autorizados/${tel}`, {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + btoa("admin:senha123")
      }
    });
    fetchNumeros();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Painel do Cliente</h1>
      <ul>
        {numeros.map((tel) => (
          <li key={tel}>
            {tel} <button onClick={() => removerNumero(tel)}>Remover</button>
          </li>
        ))}
      </ul>
      <input
        value={numeroNovo}
        onChange={(e) => setNumeroNovo(e.target.value)}
        placeholder="Telefone novo"
      />
      <button onClick={adicionarNumero}>Adicionar</button>
    </div>
  );
}
