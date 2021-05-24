import React from 'react';
import './menu-item.component.scss';
const menuItem = ({title, id, imageUrl, linkUrl, size}) => (<div className={`${size} menu-item`}>
	<div className="backgdImage" style = {{backgroundImage: `url(${imageUrl})`}}></div>
	<div className = "content">
		<h1 className="title">{title.toUpperCase()}</h1>
		<span className="sub-title">Shop Now</span>
	</div>
</div>);

export default menuItem;