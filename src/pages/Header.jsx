import { Link } from "react-router-dom";
import "./css_pages/Header.css"

function Header() {
  return (
    <><header className="cabecalho">
      <Link to="/">
      <img className="logo-hd" src="1.png" alt="logo" />
      </Link>
      <h1 className="tit">Clonazepunk Records</h1>
    </header>
    <nav className="navbar-hd">
        <ul className="container-fluid">
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Eventos</a>
          </li>
        </ul>
      </nav></>
  );
}

export default Header;
