import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Offer from "./pages/Offer";
import Header from "./components/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSliders,
  faFilter,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSliders, faFilter, faSortUp, faSortDown);

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || "");
  const [valueToken, setValueToken] = useState(false);
  const [modalsignup, setModalsignup] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [title, setTitle] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // -------------------APPEL API (pour récupérer les produits) -------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        if (title) {
          params.append("title", title);
        }
        if (priceMin) {
          params.append("priceMin", priceMin);
        }
        if (priceMax) {
          params.append("priceMax", priceMax);
        }
        if (sortOrder) {
          params.append("sort", sortOrder);
        }
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?${params.toString()}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [title, priceMin, priceMax, sortOrder]);

  // -------------------GET IDENTIFICATION-------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/token",
          {
            token,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setValueToken(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);
  console.log("la valeur du token est à ", valueToken);
  console.log("le token est ", token);

  // ------------------- RENDU-------------------------

  return loading ? (
    <main>
      <p>Loading...</p>
    </main>
  ) : (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        token={token}
        setToken={setToken}
        valueToken={valueToken}
        setValueToken={setValueToken}
        modalLogin={modalLogin}
        setModalLogin={setModalLogin}
        modalsignup={modalsignup}
        setModalsignup={setModalsignup}
        title={title}
        setTitle={setTitle}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              modalLogin={modalLogin}
              setModalLogin={setModalLogin}
              modalsignup={modalsignup}
              setModalsignup={setModalsignup}
              valueToken={valueToken}
            />
          }
        />
        <Route path="/Offer/:id" element={<Offer data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
