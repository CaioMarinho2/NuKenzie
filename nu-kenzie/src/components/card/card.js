import { FaTrash } from "react-icons/fa";
import "./card.css";
function Card({description,type,value}) {
  return (
    <>
      <span className="status"></span>
      <li className="card" >
        <div className="cardInfos">
          <h2 className="cardNome">{description}</h2>
          <p className="cardTipo">{type}</p>
        </div>
        <p className="cardValor">R$ {value.toFixed(2)}</p>
        <button className="cardDeletar">
          <FaTrash />
        </button>
      </li>
    </>
  );
}
export default Card;
