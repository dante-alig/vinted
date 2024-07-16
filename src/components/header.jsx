import Logo from "../assets/Vinted_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signup from "./signup";
import Login from "./login";
import Rangestyle from "./Rangestyle";
import Cookies from "js-cookie";

const Header = ({
  search,
  setSearch,
  filter,
  setFilter,
  token,
  setToken,
  valueToken,
  setValueToken,
  modalLogin,
  setModalLogin,
  modalsignup,
  setModalsignup,
  title,
  setTitle,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sortOrder,
  setSortOrder,
}) => {
  const [bgLock, setBgLock] = useState("");
  const [buttonAsc, setButtonAsc] = useState(false);
  const [buttonDesc, setBoutonDesc] = useState(false);

  //etats pour gérer les fenetres modal
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
                setTitle(search);
              }}
            >
              <input
                id="research"
                type="text"
                placeholder="recherche des articles"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  if (search.length > 0) {
                    setTitle(search);
                  }
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
          {/* ------------------------FENETRES MODEL--------------------------- */}
          <div className="menup-box">
            <div className="menup1">
              <button
                style={
                  valueToken
                    ? {
                        backgroundColor: "#C2175B",
                        color: "#ffffff",
                        border: "none",
                      }
                    : {}
                }
                onClick={() => {
                  if (!valueToken) {
                    setModalsignup(!modalsignup);
                    setModalLogin(false);
                    setBgLock();
                  } else {
                    Cookies.remove("token");
                    setValueToken(false);
                  }
                }}
              >
                {valueToken ? "Se déconnecter" : "S'inscrire"}
              </button>
              {modalsignup && (
                <Signup
                  modalsignup={modalsignup}
                  setModalsignup={setModalsignup}
                  token={token}
                  setToken={setToken}
                  valueToken={valueToken}
                  setValueToken={setValueToken}
                />
              )}
              {!valueToken && (
                <button
                  onClick={() => {
                    setModalLogin(!modalLogin);
                    setModalsignup(false);
                    setBgLock();
                  }}
                >
                  se connecter
                </button>
              )}
              {modalLogin && (
                <Login
                  token={token}
                  setToken={setToken}
                  valueToken={valueToken}
                  setValueToken={setValueToken}
                  modalLogin={modalLogin}
                  setModalLogin={setModalLogin}
                />
              )}
            </div>
            <div className="menup2">
              <button>Vends tes articles</button>
            </div>
          </div>
        </div>
      </header>

      {/* ------------------------FILTRES--------------------------- */}
      {filter && (
        <div className="container2">
          <div className="filtre">
            <FontAwesomeIcon icon="filter" className="filtre-icon" />
            <span> TRIER PAR :</span>
            <button
              style={{
                backgroundColor: buttonAsc ? "#09b0ba" : "",
                color: buttonAsc ? "white" : "",
              }}
              onClick={() => {
                setSortOrder(!buttonAsc ? "price-asc" : "");
                console.log("valeur de ", buttonAsc);
                setButtonAsc(!buttonAsc);
              }}
            >
              {" "}
              <FontAwesomeIcon icon="sort-up" className="sort-icon-up" />
              prix croissant
            </button>
            <button
              style={{
                backgroundColor: buttonDesc ? "#09b0ba" : "",
                color: buttonDesc ? "white" : "",
              }}
              onClick={() => {
                setSortOrder(!buttonDesc ? "price-desc" : "");
                console.log("valeur de 2 ", buttonDesc);
                setBoutonDesc(!buttonDesc);
              }}
            >
              <FontAwesomeIcon icon="sort-down" className="sort-icon-down" />
              prix décroissant
            </button>
            <span className="filter-selec">COMPRIS ENTRE : </span>
            <Rangestyle
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
