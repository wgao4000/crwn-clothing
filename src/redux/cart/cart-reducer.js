import {CartActionTypes} from './cart.types';
import {addCartItem, removeCartItem} from './cart.utils';
const INITIAL_STATE = {hiddenCart: false, cartItems: []};
const CartReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case CartActionTypes.TOGGLE_HIDDEN_CART:
			return {
				...state,
				hiddenCart: !state.hiddenCart
			}
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addCartItem(state.cartItems, action.payload)
			}
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
			}
		case CartActionTypes.REDUCE_ITEM:
			return {
				...state,
				cartItems: removeCartItem(state.cartItems, action.payload)
			}
		default:
			return state
	}
}

export default CartReducer;