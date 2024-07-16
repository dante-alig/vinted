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
        "http://localhost:3000/user/login",
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

      setErrorStatut("ok");
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

  const valid = async () => {
    await verifData();
    // console.log("1>>>", errorStatut);
    if (errorStatut === "ok") {
      setModalLogin(!modalLogin);
      // console.log("2>>>", errorStatut);
      Cookies.set("token", token);
      setValueToken(true);
    }
  };

  return (
    <div className="sign-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
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

        <button onClick={valid}>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
