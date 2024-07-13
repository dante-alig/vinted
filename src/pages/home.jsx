import { Link } from "react-router-dom";
import slide from "../images/screen.png";
import Articles from "../components/articles";

const Home = ({ data }) => {
  return (
    <>
      <div className="slider">
        <img src={slide} alt="" />
      </div>
      <div className="wrapper">
        {data.offers.map((tab) => {
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
