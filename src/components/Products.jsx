import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Dropdown from 'react-dropdown';
import {Product } from '../components';

import 'react-dropdown/style.css';

import useStyles from '../styles/products';


const Products = ({ products, addToCart, setCart}) => {
  const classes = useStyles();
  const options = ['Latest arrivals', 'Highest to Lowest', 'Lowest to Highest'];

  useEffect(() => {}, [products]);

  const [selectedOption, setSelectedOption] = useState('Latest arrivals');

  const handleSort = (value) => {
    if (value['value'] === 'Latest arrivals') {
      setSelectedOption('Latest arrivals');

      products.sort((a, b) => (a.created > b.created ? 1 : -1));
    } else if (value['value'] === 'Highest to Lowest') {
      products.sort((a, b) => (a.price.raw < b.price.raw ? 1 : -1));
      setSelectedOption('Highest to Lowest');
    } else if (value['value'] === 'Lowest to Highest') {
      products.sort((a, b) => (a.price.raw > b.price.raw ? 1 : -1));

      setSelectedOption('Lowest to Highest');
    }
  };


  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Dropdown
        className={classes.sort}
        options={options}
        onChange={handleSort}
        value={selectedOption}
        placeholder="Select an option"
      />
      <Grid container justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
            <Product product={product} addToCart={addToCart} setCart={setCart}></Product>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
