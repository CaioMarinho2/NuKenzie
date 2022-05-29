import logo from "./images/logo.png";
import templateImage from "./images/templateImage.png";
import "./homePage.css";

function HomePage({ logar }) {
  return (
    <main id="homePageMain">
      <div>
        <img src={logo} alt="Logo Nu Kenzie" />
        <h1 id="tituloHomePage">Centralize o controle das suas finanças</h1>
        <h3 id="descriçãoHomePage"> de forma rápida e segura</h3>
        <button id="botãoIniciar" onClick={logar}>
          Iniciar
        </button>
      </div>
      <figure>
        <img src={templateImage} alt="TemplateImage" />
      </figure>
    </main>
  );
}
export default HomePage;
