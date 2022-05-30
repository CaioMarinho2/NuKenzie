import { FaTrash } from "react-icons/fa";
import "./card.css";

function Card({ description, type, value, removerOperação, id }) {
  function cardClass() {
    if (type === "Entrada") {
      return "statusPositivo";
    }
    return "statusNegativo";
  }

  return (
  
      <li className="card">
      <span className={cardClass()}></span>
        <div className="cardInfos">
          <h2 className="cardNome">{description}</h2>
          <p className="cardTipo">{type}</p>
        </div>
        <p className="cardValor">R$ {value.toFixed(2)}</p>
        <button className="cardDeletar" onClick={() => removerOperação({ id })}>
          <FaTrash />
        </button>
      </li>
  
  );
}
export default Card;
