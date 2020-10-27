import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175533_960_720.jpg',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2016/05/03/16/15/gold-1369453_960_720.jpg',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2017/08/07/22/22/still-2608539__340.jpg',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2015/12/13/05/45/jewels-1090711__340.jpg',
  },
  {
    imgPath:
      'https://cdn.pixabay.com/photo/2015/12/13/05/45/jewels-1090711__340.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    // flexGrow: 1,
  },
  img: {
    width: 1503,
    height: 655,
    display: 'block',
    // maxWidth: 400,
    // overflow: 'hidden',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep +  1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
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
    </div>
  );
}

export default SwipeableTextMobileStepper;
