import React from "react";

interface Aluno {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  endereco: string;
}

const Listagem: React.FC = () => {
  const alunos: Aluno[] = [
    {
      id: 1,
      nome: "João da Silva",
      cpf: "123.456.789-00",
      dataNascimento: "2000-05-15",
      endereco: "Rua A, 123, Centro, Cidade X",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      cpf: "987.654.321-00",
      dataNascimento: "1995-11-30",
      endereco: "Av. B, 456, Bairro Y, Cidade Z",
    },
  ];
  
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-md p-6">
    <div className = "image">
      <img src="../public/logo.svg" alt="CT Cruz" />
    </div>
    
      <h2 className="text-2xl font-bold mb-6 text-center">Alunos Cadastrados</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">CPF</th>
            <th className="border border-gray-300 px-4 py-2">Data de Nascimento</th>
            <th className="border border-gray-300 px-4 py-2">Endereço</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{aluno.nome}</td>
              <td className="border border-gray-300 px-4 py-2">{aluno.cpf}</td>
              <td className="border border-gray-300 px-4 py-2">{aluno.dataNascimento}</td>
              <td className="border border-gray-300 px-4 py-2">{aluno.endereco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;
