import {CartActionTypes} from './cart.types';
export const CartAction = () => (
	{
		type: CartActionTypes.TOGGLE_HIDDEN_CART
	}
)

export const CartAddItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
})

export const CartRemoveItem = item => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
})

export const CartReduceItem = item => ({
	type: CartActionTypes.REDUCE_ITEM,
	payload: item
})