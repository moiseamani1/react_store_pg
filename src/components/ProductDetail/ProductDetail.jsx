import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { commerce } from '../../lib/commerce';
import {
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  CardMedia,
  CircularProgress,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Related from './Related/Related';

const ProductDetail = ({ addToCart }) => {
  // const location=useLocation();
  // const productId=location.pathname.slice(8);
  // const productId=props.productId;
  let { productId } = useParams();

  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const fetchProduct = async () => {
    commerce.products.retrieve(productId).then((product) => {
      console.log(product);
      console.log(product.related_products);
      setProduct(product);
      setRelated(product.related_products);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [loading, product]);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={3} direction="row">
            <Grid item className={classes.gridItem} xs={12} md={6}>
              <div className={classes.gridSection}>
                <CardMedia
                  className={classes.media}
                  image={product.media.source}
                  title={product.name}
                />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.gridSection}>
                <div>
                  <Typography variant="h5" gutterBottom>
                    {' '}
                    {product.name}
                  </Typography>
                  <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                  </Typography>
                  <Typography variant="h6">
                    Colour: {product.name.split(' ').pop().toUpperCase()}
                  </Typography>
                </div>

                <div>
                  <Typography variant="h5">{'Product detail'}</Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></Typography>
                </div>
                <div>
                  {' '}
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    size={'large'}
                    onClick={() => addToCart(product.id, 1)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>

          <Related related={related} addToCart={addToCart} />
        </>
      )}
    </main>
  );
};

export default ProductDetail;
