import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CirLogo from '../../images/circular.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://localhost:3000">
        startUp-punjab
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://github.com/sniperline047/startup-punjab">
        Clashers!
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Step 1: Basic', 'Step 2: Credentials'];

export default function RegisterMUI({
  onEmailChange,
  onNameChange,
  onAdhaarChange,
  onMobileChange,
  onPostalChange,
  onDistrictChange,
  onEidChange,
  onPasswordChange,
  onDepChange,
  onPostChange,
  onSubmit
}) 
{
  const classes = useStyles();
  const [activeStep] = React.useState(0)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <img src={CirLogo} alt="Logo2" height="100" width="100" />
          <Typography variant="h6" color="inherit" noWrap>
            myGovernmentApp
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Registration
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your paitence.
                </Typography>
                <Typography variant="subtitle1">
                  Your EID number is 2001539. We have emailed your order confirmation.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {
                  <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                      Personal Info
                    </Typography>
                    <form noValidate onSubmit={onSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <p className="tl" >Name</p>
                          <TextField
                            required
                            id="Name"
                            name="name"
                            fullWidth
                            autoComplete="fname"
                            onChange={onNameChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                        <p className="tl" >Email</p>
                          <TextField
                            required
                            id="email1"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            onChange={onEmailChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                        <p className="tl" >AdhaarID</p>
                          <TextField
                            id="adhaarID"
                            name="adhaar"
                            fullWidth
                            autoComplete="ID"
                            onChange={onAdhaarChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <p className="tl" >Mobile No.</p>
                          <TextField
                            required
                            id="mobile"
                            name="mobile"
                            fullWidth
                            autoComplete="mobile"
                            onChange={onMobileChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <p className="tl" >Zip / Postal code</p>
                          <TextField
                            required
                            type="number"
                            id="zip"
                            name="zip"
                            fullWidth
                            autoComplete="billing postal-code"
                            onChange={onPostalChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <p>Select District</p>
                            <select onChange={onDistrictChange} >
                              <option value="patiala">Patiala</option>
                              <option value="rajpura">Rajpura</option>
                              <option value="nabha">Nabha</option>
                            </select>
                          </div>
                        </Grid>
                      </Grid>
                            <Grid container spacing={3}>
                      <Grid item xs={12} sm={3}>
                        <p className="tl" >Emp. ID</p>
                        <TextField
                          type="number"
                          required
                          id="eID"
                          name="eid"
                          fullWidth
                          autoComplete="id"
                          onChange={onDepChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                      <p className="tl" >Set Password</p>
                        <TextField
                          type="password"
                          required
                          id="pass"
                          name="password"
                          fullWidth
                          autoComplete="password"
                          onChange={onPasswordChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <p className="tl" >Login Key</p>
                        <TextField
                          required
                          id="key"
                          name="key"
                          fullWidth
                          autoComplete="id"
                          onChange={onEidChange}
                        />
                      </Grid>
                      <Grid item xs={12} className="ib">
                        <div>
                          <p>Select Department</p>
                          <select onChange={onDepChange} >
                              <option value="Finance">Finance</option>
                              <option value="Cooperation">Cooperation</option>
                              <option value="Health">Health</option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="Education">Education</option>
                            </select>
                        </div>
                        <div>
                          <p>Select Post</p>
                          <select onChange={onPostChange} >
                              <option value="Head">Head</option>
                              <option value="HR">HR</option>
                              <option value="Manager">Manager</option>
                              <option value="Asst Manager">Asst Manager</option>
                              <option value="Lvl 1">Lvl 1</option>
                              <option value="Lvl 2">Lvl 2</option>
                            </select>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox color="secondary" name="confirmation" value="yes" />}
                        label="I agree to all terms and conditions."
                      />
                    </Grid>
                <div className={classes.buttons}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </div>
                   <Link href="/login" variant="body2">
                  {"Already a user? Sign In"}
                </Link>
                    </form>
                  </React.Fragment>
                }
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}