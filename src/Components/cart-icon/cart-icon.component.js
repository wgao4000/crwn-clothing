import React from 'react';
import {ReactComponent as Cart} from '../../Assests/svgs/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {CartAction} from '../../redux/cart/cart-action';
const CartIcon = ({hiddenCart}) => (
	<div className="cart-icon" onClick = {hiddenCart}>
		<Cart className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
)

const mapDispatchToProps = dispatch => (
	{hiddenCart: () => dispatch(CartAction())}
);
export default connect(null, mapDispatchToProps)(CartIcon);