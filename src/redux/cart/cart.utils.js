export const addCartItem = (CartItems, itemToBeAdded) => {
	const checkItemToBeAdded = CartItems.find(cartItem => cartItem.id === itemToBeAdded.id);
	if(checkItemToBeAdded){
		return CartItems.map(CartItem => CartItem.id === itemToBeAdded.id ? {...CartItem, quantity: CartItem.quantity + 1}: CartItem);
	}
	return [...CartItems, {...itemToBeAdded, quantity: 1}];
}

export const removeCartItem = (CartItems, itemToBeRemoved) => {
	const checkItemToBeRemoved = CartItems.find(cartItem => cartItem.id === itemToBeRemoved.id);
	if(checkItemToBeRemoved.quantity === 1){
		return CartItems.filter(CartItem => CartItem.id !== itemToBeRemoved.id);
	}
	else{
		return CartItems.map(cartItem =>  cartItem.id === itemToBeRemoved.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
	}
}