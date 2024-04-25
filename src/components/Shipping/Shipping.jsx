import React from 'react';

import useStyles from './styles';
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
const Shipping = () => {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <ThemeProvider theme={theme}>
        <Typography className={classes.location} variant="h2" gutterBottom>
          Shipping
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <div className={classes.gridSection}>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
};

export default Shipping;
