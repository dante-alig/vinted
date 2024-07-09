import Logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ search, setSearch, filter, setFilter }) => {
  return (
    <>
      <header>
        <div className="container">
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="logo vinted" />
            </Link>
          </div>
          <div className="research">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert(search);
              }}
            >
              <input
                id="research"
                type="text"
                placeholder="recherche des articles"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </form>

            <div
              className="filtre-button"
              onClick={() => {
                setFilter(!filter);
              }}
            >
              <FontAwesomeIcon icon="sliders" className="filtre-icon" />
              FILTRES
            </div>
          </div>

          <div className="menup-box">
            <div className="menup1">
              <button>s'inscrire</button>
              <button>se connecter</button>
            </div>
            <div className="menup2">
              <button>Vends tes articles</button>
            </div>
          </div>
        </div>
      </header>
      {filter && (
        <div className="container2">
          <div className="filtre">
            <FontAwesomeIcon icon="filter" className="filtre-icon" />
            TRIER PAR PRIX :
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
