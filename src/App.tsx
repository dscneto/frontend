import React from "react";
import { Routes, Route } from "react-router-dom";
import TelaInicial from "./TelaInicial.tsx";
import Cadastro from "./Cadastro.tsx";
import Listagem from "./Listagem.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/alunos" element={<Listagem />} />
    </Routes>
  );
};

export default App;