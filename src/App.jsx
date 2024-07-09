import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Offer from "./pages/Offer";
import Header from "./components/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSliders, faFilter } from "@fortawesome/free-solid-svg-icons";
library.add(faSliders, faFilter);

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
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
      />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/Offer/:id" element={<Offer data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
