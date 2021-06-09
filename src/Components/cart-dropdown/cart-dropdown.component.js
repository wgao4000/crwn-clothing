import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {CartAction} from '../../redux/cart/cart-action';
import {withRouter} from 'react-router-dom';

const CartDropDown = ({cartItems, history, dispatch}) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length? cartItems.map(cartitem => (<CartItem key = {cartitem.id} cartitem = {cartitem} />)): 
			<span className="empty-message">Your cart is empty</span>}
		</div>
		<CustomButton onClick = {() => { history.push('/checkout'); dispatch(CartAction());}}>go to checkout</CustomButton>
	</div>
)

const mapStateToProp = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProp)(CartDropDown));