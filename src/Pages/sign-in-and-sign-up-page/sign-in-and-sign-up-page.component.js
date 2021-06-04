import React from 'react';
import './sign-in-and-sign-up-page.styles.scss';
import Signin from '../../Components/Signin/Signin.component';
import Signup from '../../Components/Signup/Signup.component';
const signinandup = () => (
	<div className="sign-in-and-sign-up">
		<div className="sign-in"><Signin /></div>
		<div className="sign-up"><Signup /></div>
	</div>
)

export default signinandup;