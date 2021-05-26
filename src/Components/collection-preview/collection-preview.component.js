import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
const collectionPreview = ({title, items}) => {
	return 	(<div className="collection-preview">
				<h1 className="title">{title.toUpperCase()}</h1>
				<div className="preview">
					{items.filter((val, index) => index <4).map(({id, ...restProperties}) => <CollectionItem key = {id} {...restProperties} />)
				}
				</div>	
			</div>)
}

export default collectionPreview;