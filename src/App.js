import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api from './services/cep/api';

function App() {

  const [input, setInput] = useState('');
  const [response, setResponse] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert('Prencha algum CEP');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      setResponse(response.data);
    } catch (error) {
      alert('O CEP informado não existe.');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" className="input" placeholder="Digite seu Cep" value={input} onChange={(e) => setInput(e.target.value)}/>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" onClick={handleSearch}/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: {response.cep}</h2>

        <span>Bairro: {response.bairro}</span>
        <span>Rua: {response.logradouro}</span>
        <span>Complemento: {response.complemento}</span>
        <span>Localidade: {response.localidade}</span>
        <span>{response.uf}</span>
      </main>
    </div>
  );
}

export default App;
