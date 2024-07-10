import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div className="sign-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (name && email && password) {
            setDisplay("form-display");
          } else {
            alert("vous devez remplir tout les champs");
          }
        }}
      >
        <h2>Se connecter</h2>
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

        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
