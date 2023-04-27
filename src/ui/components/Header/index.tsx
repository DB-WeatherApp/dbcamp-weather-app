import "./style.css";
import "../../styles/colors.css";
import "../../styles/global.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <Link to={"/"} className="header_link">
        Home
      </Link>
      <Link to={"/register"} className="header_link">
        Cadastrar
      </Link>
      <Link to={"/list"} className="header_link">
        Listar
      </Link>
    </header>
  );
}

export default Header;
