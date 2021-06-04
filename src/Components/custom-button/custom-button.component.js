import React from 'react';
import './custom-button.styles.scss';
const custombutton = ({children, inverted, isGoogleSignin, ...otherProperties}) => (
	<button className={`${inverted ? "inverted": ""} ${isGoogleSignin ? "googleSignin": ""} custom-button`} {...otherProperties}>{children}</button>
)

export default custombutton;