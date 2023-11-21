import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

    const appearance = {
        theme: "stripe",
        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Ideal Sans, system-ui, sans-serif',
            spacingUnit: '2px',
            borderRadius: '4px',
            // See all possible variables below
          }
    };
    const options = {
        appearance,
    };

    return (
        <div>
            <Elements stripe={stripePromise} options={options}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Payment;
