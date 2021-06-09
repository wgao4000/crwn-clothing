import React from 'react';
import Previewcollection from '../../Components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';
import {Route} from 'react-router-dom';
const Shop = ({match}) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`}  component = {CollectionsOverview}  />
		<Route path= {`${match.path}/:collectionId`} component = {Collection} />
	</div>
)


export default Shop;