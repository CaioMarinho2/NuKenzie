import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import HomePage from "./components/homePage/homePage";
import Logo from "./Images/logo.png";

function App() {
  const [login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  function Logar() {
    document.body.style.backgroundColor = "#ffffff";

    return setLogin(true);
  }
  function logout() {
    document.body.style.backgroundColor = "#212529";
    return setLogin(false);
  }

  function addlistTransactions(newTransition) {
    setListTransactions([...listTransactions, newTransition]);
  }
  console.log(listTransactions);

  return login ? (
    <div className="App">
      <header id="Header">
        <img id="logoEscuro" src={Logo} alt="Logo Nukenzie" />
        <button id="logout" onClick={logout}>
          Inicio
        </button>
      </header>
      <main id="appMain">
        <aside id="aside">
          <Form
            addlistTransactions={addlistTransactions}
            listTransactions={listTransactions}
          />
        </aside>
        <List listTransactions={listTransactions} />
      </main>
    </div>
  ) : (
    <HomePage logar={Logar} />
  );
}

export default App;
