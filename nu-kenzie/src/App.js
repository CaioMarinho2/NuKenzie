import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import HomePage from "./components/homePage/homePage";
import Logo from "./Images/logo.png";

function App() {
  const [login, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [listTransactions2, setListTransactions2] = useState([]);

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
    setListTransactions2([...listTransactions, newTransition]);
  }

  function removerOperação(id) {
    const remove = listTransactions.filter((item) => {
      return item.id !== id.id;
    });
    const remove2 = listTransactions2.filter((item) => {
      return item.id !== id.id;
    });
    setListTransactions([...remove]);
    setListTransactions2([...remove2]);
  }




  function Filtrotodos() {
    setListTransactions(listTransactions2);
  }
  function FiltroEntradas() {
    const filtroEntradas = listTransactions2.filter(
      ({ type }) => type === "Entrada"
    );
    return setListTransactions(filtroEntradas);
  }
  function FiltroDespesas() {
    const FiltroDespesas = listTransactions2.filter(
      ({ type }) => type === "Despesa"
    );
    return setListTransactions(FiltroDespesas);
  }

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
        <List
          listTransactions={listTransactions}
          removerOperação={removerOperação}
          FiltroEntradas={FiltroEntradas}
          FiltroDespesas={FiltroDespesas}
          Filtrotodos={Filtrotodos}
        />
      </main>
    </div>
  ) : (
    <HomePage logar={Logar} />
  );
}

export default App;
