import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {CartAddItem} from '../../redux/cart/cart-action';
const CollectionItem = ({item, CartAddItem}) => {
	const {name, imageUrl, price} = item;
	return (<div className="collection-item">
		<div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
		<CustomButton onClick = {() => CartAddItem(item)} inverted>Add to cart</CustomButton>
	</div>);
}

const mapDispatchToProps = dispatch => ({
	CartAddItem: item => dispatch(CartAddItem(item)) 
});
export default connect(null, mapDispatchToProps)(CollectionItem);


