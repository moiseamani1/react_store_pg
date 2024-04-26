import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Grid, responsiveFontSizes, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Product from '../../Products/Product/Product';


const Related = ({ related, addToCart }) => {
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            className={classes.relatedTitle}
            gutterBottom
          >
            You may also like{' '}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Carousel responsive={responsive}>
            {related.map((product) => (
              <div key={product.id}>
                <Product product={product} addToCart={addToCart}></Product>
              </div>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default Related;
