import { useState } from "react";
import "./form.css";
import TotalMoney from "../TotalMoney/TotalMoney";

function Form({ addlistTransactions, listTransactions }) {
  const [operação, setOperação] = useState({
    description: "",
    type: "Entrada",
    value: 0,
  });
  console.log(operação);
  if (listTransactions.length !== 0) {
    return (
      <>
        <form
          id="form"
          onSubmit={(event) => {
            event.preventDefault();
            addlistTransactions(operação);
          }}
        >
          <div>
            <p id="descrição">Descrição</p>
            <input
              id="inputDescrição"
              placeholder="Digite aqui sua descrição"
              required
              onChange={(event) =>
                setOperação({ ...operação, description: event.target.value })
              }
            ></input>
            <p id="Exemplo">Ex: Compra de roupas</p>
          </div>
          <div>
            <div id="valorSection">
              <div>
                <p className="valorInfos">Valor</p>
                <div id="inserirValor">
                  <input
                    id="valorNumerico"
                    type="number"
                    min="0"
                    required
                    onChange={(event) => {
                      setOperação({
                        ...operação,
                        value: Number(event.target.value),
                      });
                    }}
                  ></input>
                  <span id="cifrão">R$</span>
                </div>
              </div>

              <div>
                <p className="valorInfos">Tipo de valor </p>
                <select
                  id="selecionar"
                  onChange={(event) =>
                    setOperação({ ...operação, type: event.target.value })
                  }
                >
                  <option>Entrada</option>
                  <option>Despesa</option>
                </select>
              </div>
            </div>
          </div>
          <button id="submit" type="submit">
            Inserir valor
          </button>
        </form>
        <TotalMoney listTransactions={listTransactions} />
      </>
    );
  } else {
    return (
      <>
        <form
          id="form"
          onSubmit={(event) => {
            event.preventDefault();
            addlistTransactions(operação);
          }}
        >
          <div>
            <p id="descrição">Descrição</p>
            <input
              id="inputDescrição"
              placeholder="Digite aqui sua descrição"
              required
              onChange={(event) =>
                setOperação({ ...operação, description: event.target.value })
              }
            ></input>
            <p id="Exemplo">Ex: Compra de roupas</p>
          </div>
          <div>
            <div id="valorSection">
              <div>
                <p className="valorInfos">Valor</p>
                <div id="inserirValor">
                  <input
                    id="valorNumerico"
                    type="number"
                    min="0"
                    required
                    onChange={(event) => {
                      setOperação({
                        ...operação,
                        value: Number(event.target.value),
                      });
                    }}
                  ></input>
                  <span id="cifrão">R$</span>
                </div>
              </div>

              <div>
                <p className="valorInfos">Tipo de valor </p>
                <select
                  id="selecionar"
                  onChange={(event) =>
                    setOperação({ ...operação, type: event.target.value })
                  }
                >
                  <option>Entrada</option>
                  <option>Despesa</option>
                </select>
              </div>
            </div>
          </div>
          <button id="submit" type="submit">
            Inserir valor
          </button>
        </form>
      </>
    );
  }
}

export default Form;
