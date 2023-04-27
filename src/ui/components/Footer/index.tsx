import "./style.css";
import "../../styles/colors.css";
import "../../styles/global.css";
import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="container">
      <h1 className="footer_text">make with love</h1>
      <img src={Logo} alt="Logo da DB" className="logo" />
    </footer>
  );
}

export default Footer;
