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
}) => {
  const [error, setError] = useState(null);

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
    } catch (error) {
      console.error("There was an error!", error);
      setError(error.message || "An unexpected error occurred");
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          postData();
          setModalsignup(!modalsignup);
          Cookies.set("token", token);
        }}
      >
        S'inscrire
      </button>
    </div>
  );
};

export default Api;
