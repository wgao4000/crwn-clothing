import React from 'react';
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {  selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({shoppingCollections}) => {
	return shoppingCollections.map(({id, ...restProperties}) => (<div className="collection-overview"><CollectionPreview key = {id} {...restProperties} /></div>));
}


const mapStateToProp = createStructuredSelector({
	shoppingCollections: selectCollectionsForPreview
});

export default connect(mapStateToProp)(CollectionsOverview);
