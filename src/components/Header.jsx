import "./Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <h1 className="tit">Clonazepunk Records</h1>
      <nav className="navbar">
        <ul>
          <button
            className="btn-tit"
            onClick={function clicar() {
              alert("Você será direcionado para a página de Login :)");
            }}
          >
            Entrar
          </button>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <img className="logo" src="1.png" alt="logo_marca"></img>
    </header>
  );
}

export default Header;
