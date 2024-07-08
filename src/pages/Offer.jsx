import { useParams } from "react-router-dom";
import Article from "../components/article";
const Offer = ({ data }) => {
  const { id } = useParams();
  return (
    <div className="article-bg">
      <Article id={id} data={data} />
    </div>
  );
};

export default Offer;
