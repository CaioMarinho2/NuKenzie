import "./list.css";
import noCard from "./images/NoCard.png";
import Card from "../card/card.js";

function List({
  listTransactions,
  removerOperação,
  FiltroEntradas,
  FiltroDespesas,
  Filtrotodos,
}) {
  const buttonSelecionado =
    document.getElementsByClassName("filtroSelecionado")[0];
  if (listTransactions.length !== 0) {
    return (
      <div id="seçãoFiltros">
        <div id="areaFiltros">
          <p id="resumoFinanceiro">Resumo financeiro</p>
          <div>
            <button
              className="filtroSelecionado"
              onClick={(event) => {
                Filtrotodos();

                buttonSelecionado.className = "filtro";
                event.target.className = "filtroSelecionado";
              }}
            >
              Todos
            </button>
            <button
              className="filtro"
              onClick={(event) => {
                FiltroEntradas();

                buttonSelecionado.className = "filtro";
                event.target.className = "filtroSelecionado";
              }}
            >
              Entradas
            </button>
            <button
              className="filtro"
              onClick={(event) => {
                FiltroDespesas();

                buttonSelecionado.className = "filtro";
                event.target.className = "filtroSelecionado";
              }}
            >
              Despesas
            </button>
          </div>
        </div>
        <ul id="lista">
          {listTransactions.map(({ description, type, value, id }, index) => {
            return (
              <Card
                key={index}
                description={description}
                type={type}
                value={value}
                listTransactions={listTransactions}
                removerOperação={removerOperação}
                id={id}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div id="seçãoFiltros">
      <div id="areaFiltros">
        <p id="resumoFinanceiro">Resumo financeiro</p>
        <div>
          <button
            className="filtroSelecionado"
            onClick={(event) => {
              Filtrotodos();

              buttonSelecionado.className = "filtro";
              event.target.className = "filtroSelecionado";
            }}
          >
            Todos
          </button>
          <button
            className="filtro"
            onClick={(event) => {
              FiltroEntradas();

              buttonSelecionado.className = "filtro";
              event.target.className = "filtroSelecionado";
            }}
          >
            Entradas
          </button>
          <button
            className="filtro"
            onClick={(event) => {
              FiltroDespesas();

              buttonSelecionado.className = "filtro";
              event.target.className = "filtroSelecionado";
            }}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul id="lista">
        <li id="semLançamento">Você ainda não possui nenhum lançamento</li>
        <li id="semTransação">
          <img  id="noTransition" alt="Sem transações" src={noCard} />
        </li>
      </ul>
    </div>
  );
}

export default List;
