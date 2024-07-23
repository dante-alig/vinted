import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Api = ({
  name,
  email,
  newsletter,
  password,
  avatar,
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
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("newsletter", newsletter);
      formData.append("password", password);
      formData.append("avatar", avatar);

      const response = await axios.post(
        "http://localhost:3000/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
      <button
        onClick={() => {
          if (name && email && password && avatar) {
            postData();
            setModalsignup(!modalsignup);
            Cookies.set("token", token);
          }
        }}
      >
        S'inscrire
      </button>
    </div>
  );
};

export default Api;
