import React from 'react';
import LoginMUI from './materialComponent/LoginMUI';
import axios from 'axios';
import store from 'store';
import history from './history';

export default class Login extends React.Component {
	constructor() {
    super()
	    this.state = {
	      email: '',
	      password: '',
	      errors: {}
	    }
    }

  	onPasswordChange = (e) => {
    	this.setState({ password: e.target.value });
  	}

  	onEmailChange = (e) => {
  		this.setState({ email: e.target.value });	
  	}

  	onSubmit = async (e) => {
    	e.preventDefault()
    	const { history } = this.props;
		const user = await axios.post('http://172.16.82.90:3002/ldone',{
			email : this.state.email,
			password : this.state.password
		})
		.then(function (response) {
			console.log(response.data);
			if(response.data === 1) {
				store.set('loggedIn', true);
			}else {
            	alert("Wrong Password");
            }
    	})
    	history.push('/user');
  	}

	render() {
		return(
			<div>
				<LoginMUI 
					onEmailChange={this.onEmailChange}
					onPasswordChange={this.onPasswordChange}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	} 
}