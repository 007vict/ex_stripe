import React from 'react';
import {loadStripe} from "@stripe/stripe-js";

import "./checkoutStyle.css"

let stripePromise 

const getStripe = (s) => {
	if (!stripePromise) {
		stripePromise = loadStripe("pk_test_51M5rwUDuPUNprb5LJhjBZ0V8evyNKKwKDc3qnzsFNk7zdcfE2IHsvv9aI8NvhVbgDASIeCXHrpgXUOpDfD1srOHU00J1j6v7e3")
		console.log(stripePromise)
	}
	return stripePromise;
};

function Checkout() {

	const items = {
		price: "price_1M7gE2DuPUNprb5Lrw7OZi3u",
		quantity: 1,
	}
	const checkoutOptions = {
		lineItems: [items],
		mode: "payment",
		successUrl: `${window.location.origin}/success`,
		cancelUrl: `${window.location.origin}/cancel`,
	}

	const redirectToCheckout = async () => {
		console.log("redirectToCheckout")

		const stripe = await getStripe()
		const {error} = await stripe.redirectToCheckout(checkoutOptions)
		console.log("Stripe checkout error", error);

		// if (error) setStripeError(error.message);
	}

	return (
		<div className="App">
			<div className="checkout">
			<button
				className="checkout-button"
				onClick={redirectToCheckout}
			>
				<div className="grey-circle">
					<div className="purple-circle">
						{/*<img className="icon" src={CardIcon} alt="credit-card-icon" />*/}
					</div>
				</div>
				<div className="text-container">
					<p className="text">Buy</p>
				</div>
			</button>
			</div>
		</div>
	);
}

export default Checkout;