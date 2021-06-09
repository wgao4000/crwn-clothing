import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
const shop = state => state.shop;

export const shoppingCollections = createSelector([shop], shop => shop.shoppingCollections);

export const selectCollectionsForPreview = createSelector([shoppingCollections], shoppingCollections => 
		Object.keys(shoppingCollections).map(shoppingCollectionKey => shoppingCollections[shoppingCollectionKey])
	 )

export const selectCollection = memoize(collectionUrlParam => 
	createSelector([shoppingCollections], shoppingCollections => shoppingCollections[collectionUrlParam]));