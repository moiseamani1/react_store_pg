import React from 'react'
import useStyles from './styles';

import {CardMedia, Grid, Typography,createMuiTheme,ThemeProvider,responsiveFontSizes} from '@material-ui/core'
import Featured from './Featured/Featured';

const Landing = ({favorites}) => {
    const classes=useStyles();

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justify="center" spacing={4}>

        <Grid item  xs={12} sm={12} md={8} lg={8} >
        <CardMedia className={classes.media} component="img" src="/images/banner.png" title={"banner"}>

</CardMedia>

        </Grid>

          

        </Grid>
<div className={classes.favorites}>
<ThemeProvider theme={theme}>
    <Typography variant="h2"  gutterBottom align={'center'}>
        Our Favorites
      </Typography>
</ThemeProvider>

<Grid container justify="center" spacing={4} direction="row">




{favorites.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Featured product={product} ></Featured>
                </Grid>
            ))}
    

      




        </Grid>


</div>
        
    </main>)
}

export default Landing
