import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Grid, responsiveFontSizes, Typography } from '@material-ui/core';
import Carousel from 'react-grid-carousel';
import Product from '../../Products/Product/Product';

const Related = ({ related, addToCart }) => {
  const classes = useStyles();

  const responsiveLayout = [
    {
      // breakpoint: 800,
      cols: 4,
      rows: 1,
      gap: 10,
      loop: true,
      autoplay: undefined,
    },
  ];

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
          <Carousel cols={4} rows={1} gap={10} loop>
            {related.map((product) => (
              <Carousel.Item key={product.id}>
                <Product product={product} addToCart={addToCart}></Product>
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default Related;
