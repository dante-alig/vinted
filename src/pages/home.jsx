import { Link } from "react-router-dom";
import slide from "../images/screen.png";
import Articles from "../components/articles";
import { useNavigate } from "react-router-dom";

const Home = ({ data, modalLogin, setModalLogin, valueToken }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="slider">
        <img src={slide} alt="" />
      </div>
      <div className="wrapper">
        <div className="box-slider">
          {!valueToken ? (
            <h1>Prêts à faire du tri dans vos placards ?</h1>
          ) : (
            <h1>Bienvenue</h1>
          )}
          <button
            onClick={() => {
              if (!valueToken) {
                setModalLogin(!modalLogin);
              } else {
                navigate("/publish");
              }
            }}
          >
            {!valueToken ? "Connectez-vous d'abord" : "Commencez à vendre"}
          </button>
        </div>

        {data.map((tab) => {
          return (
            <div key={tab._id}>
              <Link to={`/Offer/${tab._id}`}>
                <Articles tab={tab} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
