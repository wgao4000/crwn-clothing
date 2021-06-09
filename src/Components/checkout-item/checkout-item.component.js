import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {CartRemoveItem, CartReduceItem, CartAddItem} from '../../redux/cart/cart-action';
const CheckoutItem = ({ cartItem, CartRemoveItem, CartReduceItem, CartAddItem }) => {
	const {name, quantity, price, imageUrl} = cartItem;
	return (<div className="checkout-item">
		<div className="image-container">
			<img alt="item" src = {imageUrl} className="img"/>
		</div>
		<span className="name">{name}</span>
		<span className="quantity">
			<div className="arrow" onClick={() => CartReduceItem(cartItem)} >&#10094;</div>
			<span className="value">{quantity}</span>
			<div className="arrow" onClick={() => CartAddItem(cartItem)}>&#10095;</div>
		</span>
		<span className="price">{price}</span>
		<span className="remove-button" onClick={() => CartRemoveItem(cartItem)}>&#10005;</span>
    </div>); 
}

const mapDispatchToProps = dispatch => ({
	CartRemoveItem: item => dispatch(CartRemoveItem(item)),
	CartReduceItem: item => dispatch(CartReduceItem(item)),
	CartAddItem: item => dispatch(CartAddItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);