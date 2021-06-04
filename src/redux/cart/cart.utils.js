export const addCartItem = (CartItems, itemToBeAdded) => {
	const checkItemToBeAdded = CartItems.find(cartItem => cartItem.id === itemToBeAdded.id);
	if(checkItemToBeAdded){
		return CartItems.map(CartItem => ({...CartItem, quality: CartItem.quality + 1}));
	}
	return [...CartItems, {...itemToBeAdded, quality: 1}];
}