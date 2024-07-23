import { useState } from "react";
import Api from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = ({
  modalsignup,
  setModalsignup,
  token,
  setToken,
  setValueToken,
  valueToken,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [avatar, setAvatar] = useState("");
  return (
    <div className="sign-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (name && email && password && avatar) {
            console.log(name, email, password, avatar);
          } else {
            alert("vous devez remplir tout les champs");
          }
        }}
      >
        <h2>S'inscrire</h2>
        <div className="input-style">
          <input
            id="name"
            type="text"
            placeholder="Nom d'utilisateur"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
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
        <div className={avatar ? "file-button-up" : "file-button"}>
          <label htmlFor="avatar">
            <div className="file-upload">
              {avatar ? (
                <img src={URL.createObjectURL(avatar)} alt="Avatar" />
              ) : (
                <FontAwesomeIcon
                  icon="arrow-up-from-bracket"
                  className="file-icon"
                />
              )}
            </div>
            <div className={avatar ? "file-text-up" : "file-text"}>
              {avatar ? "ta photo est validée" : "choisie ta photo de profil"}
            </div>
          </label>
          <input
            id="avatar"
            type="file"
            onChange={(event) => {
              setAvatar(event.target.files[0]);
              console.log(event.target.files[0]);
            }}
          />
        </div>
        <div className="checkbox-style">
          <input
            id="checkbox"
            type="checkbox"
            checked={checked}
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
          />
          <span>S'inscrire à notre newletter</span>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>

        <Api
          name={name}
          email={email}
          newsletter={checked}
          password={password}
          avatar={avatar}
          modalsignup={modalsignup}
          setModalsignup={setModalsignup}
          token={token}
          setToken={setToken}
          valueToken={valueToken}
          setValueToken={setValueToken}
        />
      </form>
    </div>
  );
};

export default Signup;
