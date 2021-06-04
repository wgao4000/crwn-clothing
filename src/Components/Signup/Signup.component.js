import React, {Component} from 'react';
import './Signup.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
class Signup extends Component {
	constructor(){
		super();
		this.state  = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		if(this.state.password !== this.state.confirmPassword){
			alert("the passwords need to match");
			return ;
		}
        const {email, password, displayName} = this.state;
        
		try {
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {displayName});
			this.setState({displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		}
		catch(error){
			console.error(error.message);
		}
	}

    handleChange = (event) => {
    	const { name, value } = event.target;
    	this.setState({[name]: value});
    }
	render(){
		return (
			<div className="Signup">	
				<h2 className="title"> I do not have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput  handleChange={this.handleChange}  name="displayName" type="text"  value={this.state.displayName} label="Display Name"/>
					<FormInput  handleChange={this.handleChange}  name="email" type="email"  value={this.state.email} label="Email"/>
					<FormInput  handleChange={this.handleChange}  name="password" type="password"  value={this.state.password} label="Password"/>
					<FormInput  handleChange={this.handleChange}  name="confirmPassword" type="password"  value={this.state.confirmPassword} label="Confirm Password"/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		)
			
	}
}

export default Signup;