import { useParams } from "react-router-dom";
import Article from "../components/article";
const Offer = ({
  data,
  valueToken,
  modalsignup,
  setModalsignup,
  setModalLogin,
  setBgLock,
  token,
  payment,
  setPayment,
}) => {
  const { id } = useParams();
  return (
    <div className="article-bg">
      <Article
        id={id}
        data={data}
        token={token}
        valueToken={valueToken}
        setModalLogin={setModalLogin}
        modalsignup={modalsignup}
        setModalsignup={setModalsignup}
        setBgLock={setBgLock}
        payment={payment}
        setPayment={setPayment}
      />
    </div>
  );
};

export default Offer;
