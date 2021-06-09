import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishedKey = 'pk_test_51J0BYaEIJIvasycWc512uYxSpPqTeO4qpwLKnI2ZYtwrPRLpT8T30ZuUv1HL6O8HLLrzgZ6aXZjTo2nwlW1oQyt400wvf26F7W';
    const onToken = token => {
    	console.log(token);
    	alert('Payment Successful');
    }

	return (
		<StripeCheckout label="Pay Now" name="CRWN Clothing" billingAddress shippingAddress image='http://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`} amount ={priceForStripe} panelLabel='Pay Now' token = {onToken} stripeKey = {publishedKey} />
		)
}
export default StripeCheckoutButton;