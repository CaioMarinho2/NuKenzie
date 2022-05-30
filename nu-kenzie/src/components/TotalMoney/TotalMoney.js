import "./totalMoney.css";

function TotalMoney({ listTransactions }) {
  const entradas = listTransactions.filter(({ type }) => {
    return type === "Entrada";
  });

  const despesa = listTransactions.filter(({ type }) => {
    return type === "Despesa";
  });

  const despesaValor = despesa.reduce((oldprice, { value }) => {
    return value + oldprice;
  }, 0);

  const entradasValor = entradas.reduce((oldprice, { value }) => {
    return value + oldprice;
  }, 0);

  return (
    <div id="totalMoney">
      <div id="infosValor">
        <p id="valorTotal">Valor total:</p>
        <p id="explicaçãoSaldo">O valor se refere ao saldo </p>
      </div>
      <span id="valorDinheiro">${entradasValor - despesaValor}</span>
    </div>
  );
}
export default TotalMoney;
