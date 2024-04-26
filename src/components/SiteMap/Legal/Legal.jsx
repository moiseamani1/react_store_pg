import React from 'react';
import useStyles from './styles';
import { Grid, Typography } from '@mui/material';

const Legal = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <div className={classes.row}>
        <div className={classes.legal}>
          <Typography variant="body1" color="inherit">
            &copy; 2024 ESSENCE Inc. All right reserved
          </Typography>
        </div>
        <div className={classes.legal}>
          <Typography variant="body1" display="inline" color="inherit" to="/">
            Terms and Conditions
          </Typography>
          <Typography variant="body1" display="inline" color="inherit">
            {' '}
            |{' '}
          </Typography>
          <Typography variant="body1" display="inline" color="inherit" to="/">
            Privacy Policy
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default Legal;
