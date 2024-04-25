import React from 'react';
import useStyles from './styles';
import {
  CardMedia,
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
const About = () => {
  const classes = useStyles();

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <ThemeProvider theme={theme}>
        <Typography className={classes.location} variant="h2" gutterBottom>
          About Us
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.gridSection}>
              <CardMedia
                className={classes.media}
                image={'/images/about.jpg'}
                title={'about'}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={classes.gridSection}>
              <Typography variant="body1" gutterBottom>
                This is a demo project where I use React, CommerceJs, Mailchimp
                API and Square API to build a fully functional e-commerce store.
                My social links are in the sitemap.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </main>
  );
};

export default About;
