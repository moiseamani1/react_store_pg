import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton,createMuiTheme,ThemeProvider,responsiveFontSizes} from '@material-ui/core'
import{AddShoppingCart, CallMissedSharp} from '@material-ui/icons'

import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Product = ({product,addToCart}) => {
    const classes=useStyles();

   
    console.log(product)

    let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
    
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={product.media.source} title={product.name} component={Link} to={`/product/${product.id}`} />
            <CardContent>
                <div className="classes.cardContent">
                    


                    <ThemeProvider theme={theme}>
                        <Link to={`/product/${product.id}`} >
                          <Typography className={classes.prodName}variant="h5" gutterBottom > 
                    {product.name}
                    </Typography>
                    </Link>
                    
                    <Typography variant="h5" > 
                    {product.price.formatted_with_symbol}
                    </Typography>
                        
                        </ThemeProvider>    
                  
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label="Add to Cart" onClick={()=>addToCart(product.id,1)}>
                            <AddShoppingCart></AddShoppingCart>
                        </IconButton>

                    </CardActions>
 



                </div>
                </CardContent>            
        </Card>
    )
}

export default Product
