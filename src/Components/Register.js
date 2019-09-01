import React from 'react';
import RegisterMUI from './materialComponent/RegisterMUI';
import axios from 'axios';
import store from 'store';
import history from './history';

export default class Register extends React.Component {
	constructor() {
    super()
	    this.state = {
	    	name: '',
	      	email: '',
	    	adhaar: '',
	      	mobile: '',
	      	postal: '',
	      	district: '',
	      	eid: '',
	      	password: '',
	      	dep: '',
	      	post: '',
	      	key: 12345,
	      	errors: {}
	    }
    }

  	onNameChange = (e) => {
    	this.setState({ name: e.target.value });
  	}

  	onEmailChange = (e) => {
  		this.setState({ email: e.target.value });	
  	}

  	onAdhaarChange = (e) => {
  		this.setState({ adhaar: e.target.value });	
  	}

  	onMobileChange = (e) => {
  		this.setState({ mobile: e.target.value });	
  	}

  	onPostalChange = (e) => {
  		this.setState({ postal: e.target.value });	
  	}

  	onDistrictChange = (e) => {
  		this.setState({ district: e.target.value });	
  	}

  	onEidChange = (e) => {
  		this.setState({ eid: e.target.value });	
  	}

  	onPasswordChange = (e) => {
  		this.setState({ password: e.target.value });	
  	}

  	onPostChange = (e) => {
  		this.setState({ post: e.target.value });	
  	}

  	onDepChange = (e) => {
  		this.setState({ dep: e.target.value });	
  	}
  	// onkeyChange = (e) => {
  	// 	this.setState({ key: e.target.value });	
  	// }

  	onSubmit = async (e) => {
    	e.preventDefault()
		const user = await axios.post('http://172.16.82.90:3002/signup',{
			email : this.state.email,
			password : this.state.password,
			mobile : this.state.mobile,
			dob : this.state.dob,
			adhaar : this.state.adhaar,
			district : this.state.district,
			eid : this.state.eid,
			fname : this.state.fname,
			postal : this.state.postal,
			name : this.state.name,
			dep : this.state.dep,
			post: this.state.post,
		})
		.then(function (response) {
			console.log(response);
			if(response.status = 200) {
				store.set('loggedIn', true);
			}
    	})
    	history.push('/login');
  	}

	render() {
		return(
			<div>
				<RegisterMUI 
					onEmailChange={this.onEmailChange}
					onPasswordChange={this.onPasswordChange}
					onNameChange={this.onNameChange}
					onFnameChange={this.onFnameChange}
					onAdhaarChange={this.onAdhaarChange}
					onMobileChange={this.onMobileChange}
					onPostalChange={this.onPostalChange}
					onDistrictChange={this.onDistrictChange}
					onEidChange={this.onEidChange}
					onDepChange={this.onDepChange}
					onPostChange={this.onPostChange}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	} 
}