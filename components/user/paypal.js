import { 
	useRef,
	useEffect,
	useState } from 'react';

export default function PayPal(props) {

	if(typeof window === 'undefined' ||
	!window.paypal || !window.paypal.Buttons){
		return null;
	}
	const [paid, setPaid] = useState(false);
	const [error, setError] = useState(null);
	const paypalRef = useRef();

	useEffect(() => {
		window.scrollTo(0,0)
	  window.paypal.Buttons(
				{
					createOrder: (data, actions) => {
						return actions.order.create(
							{
								intent: "CAPTURE",
								purchase_units: [
									{
										description: "Sign up",
										amount: {
											currency_code: process.env.REACT_APP_PAYPAL_CURRENCY,
											value: props.value,
										},
									},
								],
							}
						);
					},
					onApprove: async (data, actions) => {
						const order = await actions.order.capture();
						setPaid(true);
						console.log(order);
					},
					onError: (err) => {
					  setError(err),
						console.error(err);
					},
				}
			)
			.render(paypalRef.current);
	}, [paid,error]);
	
	  // If the payment has been made
		if (paid) {
			return <div>Payment successful.!</div>;
		}
	
		// If any error occurs
		if (error) {
			return <div>Error Occurred in processing payment.! Please try again.</div>;
		}

		console.log(paypalRef)

    return <div>
      <h4>Total Amount in USD: {props.value}</h4>
      <div ref={paypalRef} />
			<style jsx>{`
			  div {
					flex-direction: column;
				}
			`}</style>
    </div>
}