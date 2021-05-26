import React from 'react';
import './menu-item.component.scss';
import {withRouter} from 'react-router-dom';
const menuItem = ({title, id, imageUrl, linkUrl, history, size, match}) => (<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
	<div className="backgdImage" style = {{backgroundImage: `url(${imageUrl})`}}></div>
	<div className = "content">
		<h1 className="title">{title.toUpperCase()}</h1>
		<span className="sub-title">Shop Now</span>
	</div>
</div>);

export default withRouter(menuItem);