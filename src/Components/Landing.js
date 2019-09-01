import React from 'react';
import Tilt from 'react-tilt'
import logo from '../images/startup-Logo.png';
import main from '../images/logo.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Footer from './Footer';

export default class Landing extends React.Component {
	render() {
		return(
			<div>
		        <Tilt className="Tilt br3 shadow-4" options={{ max : 70 }} style={{ height: 150, width: 250 }} >
		        	<div className="Tilt-inner">
		            	<img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
		            	<p>A new Iinitiative!</p>
		        	</div>
		        </Tilt>
		        <div className="mt3 mw4 mw9-ns center pa3 ph5-ns">
			        <img src={main} alt="Main Logo" height="350" width="350"/>
					<h1>Welcome Officer!</h1>
					<p>
						Welcome to Inter-Connecting Punjab government portal.An official Web-App that provides access to information within the departments. 
					</p>
					<Link to="/signup">
						<Button variant="contained" color="primary" >
				        	Continue!
			      		</Button>
		      		</Link>
		      	</div>
	      		<br/>	
	      		<Footer />
			</div>
		);
	} 
}