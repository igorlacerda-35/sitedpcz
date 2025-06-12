// App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Painel from "./pages/Painel";

function App() {
  const [logado, setLogado] = useState(false);

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
