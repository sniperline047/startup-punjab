import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function ForgetPass() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
	      <Container fixed>
	        <h1>Contact your admin for password</h1>
       			<Link to="/login">
					<Button variant="contained" color="secondary" >
			        	Return to Login
		      		</Button>
	      		</Link>
	      </Container>
	  </Typography>
    </React.Fragment>
  );
}
