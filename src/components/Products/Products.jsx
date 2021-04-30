
import React,{useEffect,useStae} from 'react';
import {Grid} from '@material-ui/core'
import Product from "./Product/Product"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import useStyles from './styles';

// const products=[
// {id:1,name:"Shoes",description:"Running shoes.",price:"$10",image:"https://images.unsplash.com/photo-1610903083766-3458e0ae4082?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"},
// {id:2,name:"Macbook",description:"Apple macbook.",price:"$5",image:"https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}

// ]


const Products=({products,addToCart,handleSort,selectedOption})=>{
    const classes=useStyles();

    const options = [
        'Latest arrivals', 'Highest to Lowest', 'Lowest to Highest'
      ];

      
     
      useEffect(() => {
        
    }, [products])
 



   
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Dropdown className={classes.sort} options={options} onChange={handleSort}  value={selectedOption} placeholder="Select an option" />
        
        <Grid container justify="center" >
            {products.map((product)=>(
                <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
                    <Product product={product} addToCart={addToCart}></Product>
                </Grid>
            ))}

        </Grid>

    </main>)
}

export default Products