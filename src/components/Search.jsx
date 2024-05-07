import React, { useState } from 'react';
import useStyles from '../styles/search';
import { Grid, Typography } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import {Product} from '../components';

const Search = ({ products, addToCart }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (newValue) => {
    setValue(newValue);
    console.log(newValue);

    if (!newValue) {
      setSearchResults([]);
    } else {
      setSearchResults(
        products.filter((obj) =>
          obj.name.toLowerCase().includes(newValue.toLowerCase()),
        ),
      );
    }
  };
  const cancelHandler = () => {
    setValue('');
    setSearchResults([]);
  };
  const submitHandler = () => {};
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <SearchBar
          className={classes.searchBar}
          value={value}
          onChange={searchHandler}
          onRequestSearch={submitHandler}
          onCancelSearch={cancelHandler}
        />
        <div className={classes.gridSection}>
          <Typography align={'center'} variant="h6" color="inherit">
            {searchResults.length} search Result(s)
          </Typography>
          <Grid container justifyContent={'center'} spacing={3} direction="row">
            {searchResults.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} addToCart={addToCart}></Product>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </main>
  );
};

export default Search;
