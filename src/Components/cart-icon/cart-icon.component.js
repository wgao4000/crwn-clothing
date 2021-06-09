import React from 'react';
import {ReactComponent as Cart} from '../../Assests/svgs/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {CartAction} from '../../redux/cart/cart-action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({hiddenCart, itemCount}) => (
	<div className="cart-icon" onClick = {hiddenCart}>
		<Cart className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
)

const mapDispatchToProps = dispatch => ({hiddenCart: () => dispatch(CartAction())});


const mapStateToProp = createStructuredSelector({itemCount: selectCartItemsCount});

export default connect(mapStateToProp, mapDispatchToProps)(CartIcon);