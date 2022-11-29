import React, {useState} from 'react';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51M5rwUDuPUNprb5LJhjBZ0V8evyNKKwKDc3qnzsFNk7zdcfE2IHsvv9aI8NvhVbgDASIeCXHrpgXUOpDfD1srOHU00J1j6v7e3"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {

	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	);
}

export default StripeContainer;