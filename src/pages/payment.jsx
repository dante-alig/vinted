import { Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ token, payment }) => {
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );

  const getPrice = (price) => {
    const subTotal = Math.round((price + 1.2) * 100);
    const total = (subTotal / 100).toFixed(2);
    return total;
  };

  return token ? (
    <div className="payment-box">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: Number((getPrice(payment.price) * 100).toFixed(0)),
          currency: "eur",
        }}
      >
        <CheckoutForm
          payment={payment}
          amount={getPrice(payment.price)}
          getPrice={getPrice}
        />
      </Elements>
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Payment;
