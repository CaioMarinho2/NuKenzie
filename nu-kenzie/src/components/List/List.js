import "./list.css";
import noCard from "./images/NoCard.png"
import Card from "../card/card.js";


function List({ listTransactions }) {
  if(listTransactions.length!==0){
return (
  <div id="seçãoFiltros">
  <div id="areaFiltros">
    <p id="resumoFinanceiro">Resumo financeiro</p>
    <div>
      <button id="todos" className="filtro">Todos</button>
      <button id="entradas" className="filtro">Entradas</button>
      <button id="despesas" className="filtro">Despesas</button>
    </div>
  </div>
  <ul id="lista">

    {listTransactions.map(({description,type,value},index)=>{
      return(
          <Card  key={index} description={description} type={type} value={value}  />
      )
    })}
  </ul>
</div>
)
  }else{
return (
  <div id="seçãoFiltros">
  <div id="areaFiltros">
    <p id="resumoFinanceiro">Resumo financeiro</p>
    <div>
      <button id="todos" className="filtro">Todos</button>
      <button id="entradas" className="filtro">Entradas</button>
      <button id="despesas" className="filtro">Despesas</button>
    </div>
  </div>
  <ul id="lista">
    <li id="semLançamento">Você ainda não possui nenhum lançamento</li>
  <li><img alt="Sem transações" src={noCard}/></li>
  </ul>
</div>
)
  }


}
export default List;
