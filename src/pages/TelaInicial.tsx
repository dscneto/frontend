import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/TelaInicial.css';

//import logo from '../assets/logo.svg';


const TelaInicial: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className = "image">
      </div>

      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Sistema de Academia</h1>
      <div className="space-y-4">
        <button
          onClick={() => handleNavigate("/cadastro")}
          className="w-64 bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Cadastro de Alunos
        </button>
        <button
          onClick={() => handleNavigate("/alunos")}
          className="w-64 bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-600 transition"
        >
          Listar Alunos
        </button>
      </div>
    </div>
  );
};

export default TelaInicial;
