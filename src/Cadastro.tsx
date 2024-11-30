import React, { useState } from 'react';
import './Cadastro.css'

const Cadastro = () => {
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

  function handleNavigate(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
    <div className = "image">
    </div>

      {etapa === 1 && (
        <div className = 'form-container'>
          <h2> Dados Pessoais </h2>
          <input name = "nome" placeholder = "Nome Completo" onChange = {handleChange} />
          <input name = "rg" placeholder = "RG" onChange = {handleChange} />
          <input name = "cpf" placeholder = "CPF" onChange = {handleChange} />
          <input name = "dataNascimento" placeholder = "Data de Nascimento" onChange = {handleChange} />
          <input name = "telefone" placeholder = "Telefone" onChange = {handleChange} />
          <input name = "whatsapp" placeholder = "WhatsApp" onChange = {handleChange} />
          <input name = "endereco" placeholder = "Endereço" onChange = {handleChange} />
          
          <div className = "buttons-cad">
            <button onClick = {handleNext}> Próximo </button>
          </div>
        </div>
      )}
      {etapa === 2 && (
        <div className = 'form-container'>
          <h3> Em caso afirmativo, informe qual: </h3>
          <input type = "text" />
          <h3>Contato de Emergência</h3>
          <input type = "text" placeholder = 'Nome' />
          <input type = "tel" placeholder = 'Telefone' />
          <input type = "tel" placeholder = 'WhatsApp' />

          <div className = "buttons-cad">
            <button onClick = {handleBack}> Voltar </button>
            <button onClick = {handleNext}> Próximo </button>
          </div>
        </div>
      )}
      {etapa === 3 && (
        <div className = 'form-container'>
          <h2 >Modalidade e Horários </h2>
          <input type = "text" placeholder = 'Modalidade' />
          <input type = "text" placeholder = 'Mensalidade' />
          <input type = "date" placeholder = 'Data de Vencimento' />
          <input type = "text" placeholder = 'Horarios de treino' />

          <div className = "buttons-cad">
            <button onClick = {handleBack}> Voltar </button>
            <button onClick = {handleSubmit}> Finalizar </button>
          </div>          
        </div>
      )}
    </div>
  );
};

export default Cadastro;
