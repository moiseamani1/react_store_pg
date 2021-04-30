import React from 'react'
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Featured = ({product}) => {
    const classes=useStyles();
    return (
        <Card className={classes.root} component={Link} to={`/product/${product.id}`}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
        <CardContent>
            <div className="classes.cardContent">
                <Typography variant="h5" gutterBottom> 
                {product.name}
                </Typography>
                <Typography variant="h5" > 
                {product.price.formatted_with_symbol}
                </Typography>
            </div>
            </CardContent>            
    </Card>
    )
}

export default Featured
