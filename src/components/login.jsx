import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({
  modalLogin,
  setModalLogin,
  token,
  setToken,
  valueToken,
  setValueToken,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatut, setErrorStatut] = useState("");

  // ----------------------PASSWORD VERIF----------------------

  const verifData = async () => {
    try {
      const response = await axios.post(
        "https://site--vinted-back-p1--dqd24mcv82s5.code.run/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setErrorStatut("connexion réussie avec succès");
      setToken(response.data.token);
      console.log(response.data.token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorStatut("Mot de passe ou email incorrect");
      } else {
        console.error("Erreur serveur ou autre:", error);
        setErrorStatut("Erreur serveur ou autre:");
      }
    }
  };

  return (
    <div className="sign-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          verifData();
          setModalLogin(!modalLogin);
          Cookies.set("token", token);
          setValueToken(true);
        }}
      >
        <h2>Se connecter</h2>
        <div className="input-style">
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="input-style">
          <input
            id="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <p className="error">{errorStatut}</p>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
