import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({cartitem: {price, name, imageUrl, quantity}}) => (
	<div className="cart-item">
		<img className="img" src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">{quantity} x ${price}</span>
		</div>
	</div>
)

export default CartItem;