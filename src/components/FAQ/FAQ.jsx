import React from 'react';

import useStyles from './styles';
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';
import Question from './Question/Question';
const FAQ = () => {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  const faq = {
    'What do I do if I dont get my order in time?':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    'Do you ship globally?':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    'What do I do if my parcel is damaged?':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    'Am I going to be charged duty and import fees?':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    'Can I change my delivery address?':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <ThemeProvider theme={theme}>
        <Typography className={classes.location} variant="h2" gutterBottom>
          FAQ
        </Typography>
        <Grid container justify="center" direction="column">
          <div className={classes.gridSection}>
            {Object.entries(faq).map(([key, value]) => (
              <Grid className={classes.item} item key={key} xs={12} sm={6}>
                <Question question={key} answer={value}></Question>
              </Grid>
            ))}

            <Grid item xs={12} sm={6}></Grid>
          </div>
        </Grid>
      </ThemeProvider>
    </main>
  );
};

export default FAQ;
