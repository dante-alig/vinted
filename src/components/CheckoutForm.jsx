import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = ({ payment, getPrice }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (elements == null) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Affiche l'erreur en question
      setErrorMessage(submitError.message);
      return;
    }
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
        {
          title: payment.title,
          amount: payment.price,
        }
      );

      const stripeResponse = await stripe.confirmPayment({
        // elements contient les infos et la configuration du paiement
        elements,
        clientSecret: response.data.client_secret,
        confirmParams: {
          return_url: "http://localhost:5173/",
        },

        // redirect: "if_required",
      });
      if (stripeResponse.error) {
        setErrorMessage(stripeResponse.error.message);
      }
      if (stripeResponse.paymentIntent.status === "succeeded") {
        setCompleted(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error response>>>", error.response);
      setErrorMessage(error.response);
    }
  };

  return completed ? (
    <p>Félicitations pour votre acquisition ! Paiement effectué !</p>
  ) : (
    <>
      <section>
        <div>
          <span>Commande :</span>
          <span>{payment.price.toFixed(2)} €</span>
        </div>
        <div>
          <span>Frais protection acheteur :</span>
          <span>0.40 €</span>
        </div>
        <div>
          <span>Frais de port :</span>
          <span>0.80 €</span>
        </div>
      </section>
      <section>
        <div>
          <h2>TOTAL :</h2>
          <h2>{getPrice(payment.price)} €</h2>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button className="pay" disabled={!stripe || !elements || isLoading}>
          Pay
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        {completed && <p>{completed}</p>}
      </form>
    </>
  );
};

export default CheckoutForm;
