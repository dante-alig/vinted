import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Api = ({
  name,
  email,
  newsletter,
  password,
  modalsignup,
  setModalsignup,
  token,
  setToken,
  setValueToken,
  valueToken,
}) => {
  const [error, setError] = useState(null);
  const [errorStatut, setErrorStatut] = useState(false);

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        {
          name,
          email,
          newsletter,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setToken(response.data);
      setError(null);
      errorStatut(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Erreur 400:", error.response.data.message);
      } else {
        console.error("Erreur serveur ou autre:", error);
      }
    }
  };

  const handleButtonClick = async () => {
    await postData();
    if (name && email && password) {
      setModalsignup(!modalsignup);
      Cookies.set("token", token);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>S'inscrire</button>
    </div>
  );
};

export default Api;
