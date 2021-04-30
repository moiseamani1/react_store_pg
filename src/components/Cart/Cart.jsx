import React from 'react'
import {Typography,Button,Grid, createMuiTheme,responsiveFontSizes,ThemeProvider} from '@material-ui/core'

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({cart,onEmptyCart, onUpdateCartQty, onRemoveFromCart}) => {

    const classes=useStyles();

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    

    if (!cart.line_items) return 'Loading';

    const isEmpty=!cart.line_items.length;


    const EmptyCart=()=>(
        <ThemeProvider theme={theme}><Typography variant="subtitle1">There are no items in your shopping cart</Typography></ThemeProvider>
        
    )
    const FilledCart=()=>(

        <>
          <div className={classes.cardDetails}>
          <ThemeProvider theme={theme}><Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography></ThemeProvider>
        
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={() => onEmptyCart()}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>
            (<><Grid item xs={12} sm={3} key={item.id}>
                <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            </Grid>
            
            </>
            
            
            
            ))}


        </Grid>
      
        </>
    )


    


    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <ThemeProvider theme={theme}>
            <Typography className={classes.location}   variant="h2" gutterBottom>Your Shopping Cart</Typography>
            </ThemeProvider>
        <Grid container justify="center" >

 {isEmpty?<EmptyCart></EmptyCart>:
                <FilledCart></FilledCart>}

        </Grid>
           
               

        </main>
    )
}

export default Cart
