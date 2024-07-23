import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "http://localhost:4000/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <div className="publish-bg">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (title && description && price) {
            handleSubmit();
            console.log("envois effecté");
            navigate("/");
          } else {
            alert("Vous devez remplir tous les champs");
          }
        }}
      >
        <div className="picture-container">
          {/* ---------------IMAGE----------------------------- */}
          <label htmlFor="picture" className="picture-border">
            {picture && (
              <img
                className="picture-apercu"
                src={URL.createObjectURL(picture)}
                alt="picture"
              />
            )}
            <div className="picture-box">
              {!picture && (
                <div className="picture">
                  <div className="picture-image">
                    <p>ajouter une photo</p>
                  </div>
                </div>
              )}

              <input
                id="picture"
                type="file"
                onChange={(event) => {
                  setPicture(event.target.files[0]);
                  console.log(event.target.files[0]);
                }}
              />
            </div>
          </label>
        </div>

        <div className="publish-container">
          {/* ---------------TITRE----------------------------- */}
          <div className="publish-box">
            <p>Titre</p>
            <input
              id="title"
              type="text"
              placeholder="ex:chemise Sezane verte"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          {/* ---------------DESCRIPTION----------------------------- */}
          <div className="publish-box">
            <p>Décris ton article</p>
            <input
              id="description"
              type="text"
              placeholder="porté quelquefois taille correctement"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="publish-container">
          {/* ---------------MARQUE----------------------------- */}
          <div className="publish-box">
            <p>Marque</p>
            <input
              id="brand"
              type="text"
              placeholder="ex: Zara"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          {/* ---------------TAILLE----------------------------- */}
          <div className="publish-box">
            <p>Taille</p>
            <input
              id="size"
              type="text"
              placeholder="ex: L / 40 / 12"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          {/* ---------------COULEUR----------------------------- */}
          <div className="publish-box">
            <p>Couleur</p>
            <input
              id="color"
              type="text"
              placeholder="ex: Blue"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          {/* ---------------ETAT----------------------------- */}
          <div className="publish-box">
            <p>Etat</p>
            <input
              id="condition"
              type="text"
              placeholder="ex: neuf avec etiquettes"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>

          {/* ---------------LIEU----------------------------- */}
          <div className="publish-box">
            <p>Lieu</p>
            <input
              id="city"
              type="text"
              placeholder="ex: Paris"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </div>

        {/* ---------------PRIX----------------------------- */}
        <div className="publish-container">
          <div className="publish-box">
            <p>Prix</p>
            <input
              id="price"
              type="text"
              placeholder="0,00€"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="publish-container-send">
          <div>
            <button type="submit">valider</button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Publish;
