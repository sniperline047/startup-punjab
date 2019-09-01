import React from 'react';
import SideBar from './materialComponent/SideBar';
import Footer from './Footer';
import axios from 'axios';
import details1 from './details1';

export default class Profile extends React.Component {
    constructor() {
	    super();
	    this.state = {
	    	  dep: '',
			  res: '',
		}
	}

	onValueChange = (response) => {
	    this.setState({res: response.data	});
	    console.log(this.state.res);
	}

	onSubmit1 = async (e) => {
		e.preventDefault()
		const { history } = this.props;
		try {
	  		const response = await axios.post('http://172.16.82.90:3002/next',
	  		{ dep: 'Finance' });
	  		this.setState({dep: 'Finance'});
	  		this.onValueChange(response);
	  		console.log(this.state.dep);
	  		history.push('/details1');
		  	console.log('Returned data:', response);
		} catch (e) {
		  	console.log(`Axios request failed: ${e}`);
		}
	}

	onSubmit2 = async (e) => {
		e.preventDefault()
		const { history } = this.props;
		try {
	  		const response = await axios.post('http://172.16.82.90:3002/next',
	  		{ dep: 'Health' });
		  	console.log('Returned data:', response);
		  	this.setState({dep: 'Health'});
		  	this.onValueChange(response);
		  	history.push('/details1');
		} catch (e) {
		  	console.log(`Axios request failed: ${e}`);
		}
	}

	onSubmit3 = async (e) => {
		e.preventDefault()
		const { history } = this.props;
		try {
	  		const response = await axios.post('http://172.16.82.90:3002/next',
	  		{ dep: 'Education' });
		  	console.log('Returned data:', response);
		  	this.setState({dep: 'Education'});
		  	this.onValueChange(response);
		  	history.push('/details1');
		} catch (e) {
		  	console.log(`Axios request failed: ${e}`);
		}
	}

	onSubmit4 = async (e) => {
		e.preventDefault()
		const { history } = this.props;
		try {
	  		const response = await axios.post('http://172.16.82.90:3002/next',
	  		{ dep: 'Agriculture' });
		  	console.log('Returned data:', response);
		  	this.setState({dep: 'Agriculture'});
		  	this.onValueChange(response);
		  	history.push('/details1');
		} catch (e) {
		  	console.log(`Axios request failed: ${e}`);
		}
	}

	onSubmit5 = async (e) => {
		e.preventDefault()
		const { history } = this.props;
		try {
	  		const response = await axios.post('http://172.16.82.90:3002/next',
	  		{ dep: 'Cooperation' });
		  	console.log('Returned data:', response);
		  	this.setState({dep: 'Cooperation'});
		  	this.onValueChange(response);
		  	history.push('/details1');
		} catch (e) {
		  	console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
	const onSubmit1 = async (e) => {
		e.preventDefault()
		const { history } = this.props;
		try {
	  		const response = await axios.post('http://172.16.82.90:3002/next',
	  		{ dep: 'Finance' });
	  		this.setState({dep: 'Finance'});
	  		this.onValueChange(response);
	  		console.log(this.state.dep);
	  		history.push('/details1');
		  	console.log('Returned data:', response);
		} catch (e) {
		  	console.log(`Axios request failed: ${e}`);
		}
	}
		return(
			<div>
				<SideBar 
					onSubmit1={this.onSubmit1}
					onSubmit2={this.onSubmit2}
					onSubmit3={this.onSubmit3}
					onSubmit4={this.onSubmit4}
					onSubmit5={this.onSubmit5}
				/>
				<details1 
					dep={this.state.dep}
					res={this.state.res}
				/>
				<Footer />
			</div>
		);
	} 
}