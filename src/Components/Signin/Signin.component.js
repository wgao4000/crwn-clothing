import React, {Component} from 'react';
import "./form-input.styles.scss";
import "./Signin.styles.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from "../../firebase/firebase.utils";
import {auth} from '../../firebase/firebase.utils';
class Signin extends Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			})
		}
		catch(error){
			console.error(error.message);
		}
	}

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({[name]: value})
	}

	render(){ 
		return (<div className="sign-in">
			<h2 className="title"> I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={this.handleSubmit}>
				<FormInput  handleChange={this.handleChange}  name="email" type="email"  value={this.state.email} label="Email"/>
				<FormInput  handleChange={this.handleChange}  name="password" type="password"  value={this.state.password} label="Password"/>
				<div className = "buttons">
					<CustomButton type="submit">Submit Form</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign in with google</CustomButton>
				</div>
			</form>
		</div>);
	}
	
}

export default Signin;