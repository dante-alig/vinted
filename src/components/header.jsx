import Logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <img src={Logo} alt="logo vinted" />
        </Link>
        <div className="menu">
          <div>
            <button>se connecter</button>
          </div>
          <div>
            <button>s'inscrire</button>
            <button>Vends tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
