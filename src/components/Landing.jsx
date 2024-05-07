import React from 'react';
import useStyles from '../styles/landing';

import {
  CardMedia,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from '@mui/material';
import { Featured } from '../components';

const Landing = ({ favorites }) => {
  const classes = useStyles();

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <CardMedia
            className={classes.media}
            component="img"
            src="/images/banner.png"
            title={'banner'}
          ></CardMedia>
        </Grid>
      </Grid>
      <div className={classes.favorites}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" gutterBottom align={'center'}>
              Our Favorites
            </Typography>
          </ThemeProvider>
        </StyledEngineProvider>

        <Grid container justifyContent="center" spacing={4} direction="row">
          {favorites.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Featured product={product}></Featured>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default Landing;
