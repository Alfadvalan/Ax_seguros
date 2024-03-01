import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

function Formulario() {
  const [telefone, setTelefone] = useState('');

  // enviar dados api
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    const formData = {
      Nome: e.currentTarget.Nome.value,
      Whatsapp: telefone, // Use o estado 'telefone' aqui
      Email: e.currentTarget.Email.value,
      TipoVeiculo: e.currentTarget.tipoVeiculo.value, // Ajuste para usar 'tipoVeiculo'
      DataHoraPreenchimento: formattedDateTime,
    };

    console.log('Dados do formulário antes do envio:', formData);

    try {
      const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        // Não há mais redirecionamento aqui
      } else {
        console.error('Erro ao enviar dados:', response.status, response.statusText);
      }
      
    } catch (error) {
      console.error('Erro durante a requisição:', error);
    }
  };

  return (
    <form action={import.meta.env.VITE_REACT_APP_API_URL} method="POST" onSubmit={handleFormSubmit}>
      <div className='input-container'>
        <img src="/images/user.png" alt="Usuário" className='icon' />
        <input
          name='Nome'
          type="text"
          placeholder='Nome: '
          required />
      </div>
      <div className='input-container'>
        <img src="/images/whatsapp.png" alt="Whatsapp" />
        <InputMask
          name='Whatsapp'
          mask="(99) 99999-9999"
          type="tel"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="WhatsApp: "
          required
        />
      </div>
      <div className='input-container'>
        <img src="/images/email.png" alt="Email" />
        <input
          name='Email'
          type="email"
          placeholder='E-mail:'
          required />
      </div>
      <div className='input-container'>
        <img src="/images/car.png" alt="Carro" />
        <select id="tipoVeiculo" name="tipoVeiculo" required>
          <option value="" defaultValue>Qual o seu veículo?</option>
          <option value="carro">Carro</option>
          <option value="moto">Moto</option>
        </select>
      </div>
      <div className='termos'>
        <p id='style_termos'>Ao preencher o formulário, concordo em receber comunicação e estou de acordo com os termos de uso.</p>
      </div>
      <Link to='/LastPage'>
        <div id='submit'>
          <button type="submit" id='submit_button'>Enviar</button>
        </div>
      </Link>
    </form>
  );
}

export default Formulario;
