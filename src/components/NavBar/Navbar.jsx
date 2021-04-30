import React,{useState,useEffect} from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Drawer, MenuItem,Link as Lk } from '@material-ui/core';
import { ShoppingCart,Search,PersonOutline,Menu } from '@material-ui/icons';
import { Link , useLocation, } from 'react-router-dom';

import useStyles from './styles';

import logo from '../../assets/commerce.png';

const headersData = [
        {
          label: "Shop",
          href: "/shop",
        },
        {
          label: "About",
          href: "/about",
        },
        
      ];

const Navbar = ({totalItems}) => {
    const classes=useStyles();
    const location=useLocation();

    


    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
      })
    const { mobileView,drawerOpen  } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
      }, []);

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Lk
              {...{
                component: Link,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Lk>
          );
        });
      };




      const displayDesktop=()=>{
return(<Toolbar className={classes.toolbar}>
                 
    <Typography variant="h6" className={classes.nav_links} color="inherit" component={Link} to="/shop">
        Shop
    </Typography>
    <Typography variant="h6" className={classes.nav_links} color="inherit" component={Link} to="/about">
        About
    </Typography>
   
    

    <div className={classes.grow}></div>

    <Link className="brand"  to="/">
     <h1>ESSENCE</h1>
    </Link>
    <div className={classes.grow}></div>


    <div className={classes.button}>
         <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/cart">
            <PersonOutline></PersonOutline>
         </IconButton>
    </div>


    <div className={classes.button}>

        {location.pathname!=="/cart"?  <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/cart">
            <Badge badgeContent={totalItems}  color="secondary">

                <ShoppingCart></ShoppingCart>
            </Badge>
             </IconButton>:<></>}
      
    </div>
    <div className={classes.button}>
    {location.pathname!=="/search"?
         <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/search">
            <Search></Search>
         </IconButton>:<></>}
    </div>
</Toolbar>
)

      }
      const displayMobile = () => {
        const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));

        const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));




      
        return (
          <Toolbar>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen
              }}
            >
              <Menu />
            </IconButton>
            <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>


            <Link className="brand"  to="/">
     <h1>ESSENCE</h1>
     
    </Link>

    <div className={classes.grow}></div>

    <div className={classes.button}>
         <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/cart">
            <PersonOutline></PersonOutline>
         </IconButton>
    </div>


    <div className={classes.button}>

        {location.pathname!=="/cart"?  <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/cart">
            <Badge badgeContent={totalItems}  color="secondary">

                <ShoppingCart></ShoppingCart>
            </Badge>
             </IconButton>:<></>}
      
    </div>
    <div className={classes.button}>
    {location.pathname!=="/search"?
         <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/search">
            <Search></Search>
         </IconButton>:<></>}
    </div>
    </Toolbar>
        );
      };


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">

            {mobileView ? displayMobile() : displayDesktop()}
                
            </AppBar>
        </>
    )
}

export default Navbar
