// App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Painel from "./pages/Painel";

function App() {
  const [logado, setLogado] = useState(() => {
    // Recupera o estado de login do localStorage ao iniciar
    return localStorage.getItem("logado") === "true";
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que o estado de login mudar
    localStorage.setItem("logado", logado);
  }, [logado]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setLogado={setLogado} />} />
        <Route
          path="/painel"
          element={logado ? <Painel /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
