import React from 'react';
import useStyles from '../styles/track';
import {
  Grid,
  Typography,
  TextField,
  Button,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material';

import withStyles from '@mui/styles/withStyles';

const Track = () => {
  const classes = useStyles();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const TrackButton = withStyles({
    root: {
      width: '10rem',
      marginTop: '2rem',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Typography className={classes.location} variant="h2" gutterBottom>
            Track Order
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className={classes.gridSection}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    {' '}
                    <Typography variant="subtitle1" gutterBottom>
                      Option 1
                    </Typography>
                  </div>
                  <div>
                    {' '}
                    <TextField
                      className={classes.margin}
                      required
                      id="standard-required"
                      label="Email"
                      type={'email'}
                      placeholder="e.g john.doe@hotmail.com"
                    />
                  </div>
                  <div>
                    <TextField
                      className={classes.textField}
                      required
                      id="standard-required"
                      label="Order number"
                    />
                  </div>

                  <div>
                    {' '}
                    <TrackButton
                      className={classes.margin}
                      variant="contained"
                      color="primary"
                    >
                      Track
                    </TrackButton>
                  </div>
                </form>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className={classes.gridSection}>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    {' '}
                    <Typography variant="subtitle1" gutterBottom>
                      Option 2
                    </Typography>
                  </div>
                  <div>
                    <TextField
                      className={classes.textField}
                      required
                      id="standard-required"
                      label="Tracking number"
                    />
                  </div>

                  <div>
                    {' '}
                    <TrackButton
                      className={classes.margin}
                      variant="contained"
                      color="primary"
                    >
                      Track
                    </TrackButton>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </StyledEngineProvider>
    </main>
  );
};

export default Track;
