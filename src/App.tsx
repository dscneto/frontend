import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [etapa, setEtapa] = useState(1);
  const [dados, setDados] = useState({
    nome: '',
    rg: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    whatsapp: '',
    endereco: '',


    probSaude: '',    
    descProbSaude: '',    
    nomeEmergencia: '',
    telefoneEmergencia: '',
    whatsappEmergencia: '',

    unidade: '',
    modalidade: '',
    vencimento: '',
    horarioTreino: ''
  });

  const handleNext = () => setEtapa(etapa + 1);
  const handleBack = () => setEtapa(etapa - 1);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(dados); // Aqui você envia os dados ao backend
  };

  return (
    <div>
      {etapa === 1 && (
        <div className = 'form-container'>
          <h2>Dados Pessoais</h2>
          <input name = "nome" placeholder = "Nome Completo" onChange = {handleChange} />
          <input name = "rg" placeholder = "RG" onChange = {handleChange} />
          <input name = "cpf" placeholder = "CPF" onChange = {handleChange} />
          <input name = "dataNascimento" placeholder = "Data de Nascimento" onChange = {handleChange} />
          <input name = "telefone" placeholder = "Telefone" onChange = {handleChange} />
          <input name = "whatsapp" placeholder = "WhatsApp" onChange = {handleChange} />
          <input name = "endereco" placeholder = "Endereço" onChange = {handleChange} />
          
          <div className = "buttons-cad">
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      )}
      {etapa === 2 && (
        <div className = 'form-container'>
          <label class = "switch">
            <h3> Possui algum problema de saude? </h3>
            <input type = "checkbox" id="possui_problema_saude" name = "possui_problema_saude" />
            <span class = "slider round"></span>
          </label>
          <h3> Em caso afirmativo, informe qual: </h3>
          <input type = "text" />
          <h3>Contato de Emergência</h3>
          <input type = "text" placeholder = 'Nome' />
          <input type = "tel" placeholder = 'Telefone' />
          <input type = "tel" placeholder = 'WhatsApp' />

          <div className = "buttons-cad">
            <button onClick={handleBack}>Voltar</button>
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      )}
      {etapa === 3 && (
        <div className = 'form-container'>
          <h2>Modalidade e Horários</h2>
          <input type = "text" placeholder = 'Modalidade' />
          <input type = "text" placeholder = 'Mensalidade' />
          <input type = "date" placeholder = 'Data de Vencimento' />
          <input type = "text" placeholder = 'Horarios de treino' />

          <div className = "buttons-cad">
            <button onClick={handleBack}>Voltar</button>
            <button onClick={handleSubmit}>Finalizar</button>
          </div>          
        </div>
      )}
    </div>
  );
};

export default App;
