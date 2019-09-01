import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Department of Finance',
    imgPath:
      require('../../images/finance.jpg'),
  },
  {
    label: 'Department of Education',
    imgPath:
      require('../../images/education.jpg'),
  },
  {
    label: 'Department of Cooperation',
    imgPath:
      require('../../images/cooperation.jpg'),
  },
  {
    label: 'Department of Agriculture',
    imgPath:
      require('../../images/agriculture.jpg'),
  },
  {
    label: 'Department of Health',
    imgPath:
      require('../../images/health.jpg'),
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 40,
    maxWidth: 1100,
    flexGrow: 1,
    width: '50%',
  },
  header: {
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    paddingLeft: 100,
    height: 500,
    display: 'block',
    maxWidth: 900,
    width: '100%',
  },
}));

function Carosel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
    
  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.header} >{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <hr className="w-90 "/>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <hr className="w-90 "/>
      <h1>Our Department's</h1>
    </div>
  );
}

export default Carosel;