import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Painel from "./pages/Painel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </BrowserRouter>
  );
}
