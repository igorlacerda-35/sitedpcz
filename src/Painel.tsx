import { useEffect, useState } from "react";
import axios from "axios";

interface Resposta {
  telefone: string;
  status: string;
}

export default function Painel() {
  const [resposta, setResposta] = useState<Resposta | null>(null);
  const [telefone, setTelefone] = useState("");

  const testar = async () => {
    try {
      const res = await axios.post("https://https://sitedpcz.onrender.com/teste", {
        telefone,
      });
      setResposta(res.data);
    } catch (error) {
      alert("Erro ao testar telefone.");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Painel de Testes</h1>
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Número de telefone (ex: 553199999999)"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={testar}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Testar número
        </button>

        {resposta && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p><strong>Telefone:</strong> {resposta.telefone}</p>
            <p><strong>Status:</strong> {resposta.status}</p>
          </div>
        )}
      </div>
    </div>
  );
}
