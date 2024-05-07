import React from 'react';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';

import useStyles from '../styles/cartItem';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart, setCart }) => {
  const classes = useStyles();
  return (
    <Card className="cart-item">
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() =>
              onUpdateCartQty(item.id, item.quantity - 1).then(setCart)
            }
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              onUpdateCartQty(item.id, item.quantity + 1).then(setCart)
            }
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id).then(setCart)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
