import React from 'react';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component';
import { connect } from 'react-redux';

const checkout = ({cartItems, total}) => (
	 <div className="checkout-page">
	 	<div className="checkout-header">
	 		<div className="header-block">
	 			<span>product</span>
	 		</div>
	 		<div className="header-block">
	 			<span>description</span>
	 		</div>
	 		<div className="header-block">
	 			<span>quantity</span>
	 		</div>
	 		<div className="header-block">
	 			<span>price</span>
	 		</div>
	 		<div className="header-block">
	 			<span>remove</span>
	 		</div>
	 	</div>
	 	{cartItems.map(cartItem => <CheckoutItem key = {cartItem.id} cartItem = {cartItem} />)}
		<div className="total"><span>TOTAL: ${total}</span></div> 
		<div className="test-warning">
			Please use the following test credit card for payment *
			<br />
			4000 0027 6000 3184 - EXP 02/22 - CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
	 </div>
)

const mapStateToProp = createStructuredSelector({cartItems: selectCartItems, total: selectCartItemsTotal});

export default connect(mapStateToProp)(checkout);