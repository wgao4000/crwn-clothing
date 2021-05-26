import React, {Component} from 'react';
import SHOP_DATA from './shop.data';
import Previewcollection from '../../Components/collection-preview/collection-preview.component';
class Shop extends Component{
	constructor(){
		super();
		this.state = {
			shoppingCollections: SHOP_DATA
		}
	}

	render(){
		return this.state.shoppingCollections.map(({id, ...restProperties}) => (<div><Previewcollection key = {id} {...restProperties} /></div>));
	}
}

export default Shop;