import Logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signup from "./signup";
import Login from "./login";

const Header = ({ search, setSearch, filter, setFilter }) => {
  const [modalsignup, setModalsignup] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [bgLock, setBgLock] = useState("");

  useEffect(() => {
    if (modalLogin || modalsignup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalLogin, modalsignup, bgLock]);

  return (
    <>
      <header>
        <div className="container">
          <div>
            <Link
              to={"/"}
              onClick={() => {
                setModalLogin(false);
                setModalsignup(false);
              }}
            >
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
              <button
                onClick={() => {
                  setModalsignup(!modalsignup);
                  setModalLogin(false);
                  setBgLock();
                }}
              >
                s'inscrire
              </button>
              {modalsignup && <Signup />}
              <button
                onClick={() => {
                  setModalLogin(!modalLogin);
                  setModalsignup(false);
                  setBgLock();
                }}
              >
                se connecter
              </button>
              {modalLogin && <Login />}
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
