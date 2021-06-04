import React from 'react';
const formInput = ({handleChange, label, ...otherProperties}) => (
	<div className="group">
		<input className="form-input" onChange = {handleChange}  {...otherProperties} />
		{label ? (<label className = {`${otherProperties.value.length > 0 ? 'shrink' : ''} form-input-label` }>{label}</label>) : null}
	</div>
)

export default formInput;