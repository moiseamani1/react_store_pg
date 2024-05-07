import React from 'react';

import useStyles from '../styles/contact';
import {
  Grid,
  Typography,
  Button,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material';
const Contact = () => {
  const classes = useStyles();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const getDirectionsHandler = () => {
    window.open('https://goo.gl/maps/kfbUhUX6GPRNc6HU6', '_blank');
  };
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Typography className={classes.location} variant="h2" gutterBottom>
            Contact Us
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <div className={classes.gridSection}>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
                {/* <MyMap></MyMap> */}
                <div className={classes.contactInfo}>
                  <Typography variant="h6" gutterBottom>
                    Location
                  </Typography>
                  <Typography variant="subtitle" gutterBottom>
                    23 All Engineers go to heaven street, Ottawa, ON, Canada
                  </Typography>
                  <div className={classes.directions}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={getDirectionsHandler}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
                <div className={classes.contactInfo}>
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="subtitle" gutterBottom>
                    customersupport@essence.ca
                    {/* +1 123-456-789 */}
                  </Typography>
                </div>

                <div className={classes.contactInfo}>
                  <Typography variant="h6" gutterBottom>
                    Telephone
                  </Typography>
                  <Typography variant="subtitle" gutterBottom>
                    +1 123-456-789
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </StyledEngineProvider>
    </main>
  );
};

export default Contact;
