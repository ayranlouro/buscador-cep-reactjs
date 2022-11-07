import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" className="input" placeholder="Digite seu Cep" />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 12837172</h2>

        <span>Rua teste</span>
        <span>Complemento: </span>
        <span>Copacabana</span>
        <span>Rio de Janeiro - RJ</span>
      </main>
    </div>
  );
}

export default App;
