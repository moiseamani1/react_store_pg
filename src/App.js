import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import ScrollToTop from './helper/ScrollToTop';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { About, Cart, Checkout, Contact, FAQ, Landing, Legal, Navbar, Payments, Products, ProductDetail, Returns, Search, Shipping, SiteMap, Track } from './components';
import {
  fetchFavorites,
  fetchProducts,
  fetchCart,
  addToCart,
  handleEmptyCart,
  refreshCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleCaptureCheckout
} from './api/api';


const App = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchFavorites().then(setFavorites);
    fetchCart().then(setCart);
  }, []);

  useEffect(() => {}, [products]);

  return (
    <ThemeProvider theme={createTheme()}>
      <Router>
        <div className="container">
          <div id="main">
            <Navbar cart={cart}></Navbar>
            <ScrollToTop />
            <Switch>
              <Route exact path="/">
                <Landing favorites={favorites}></Landing>
              </Route>

              <Route exact path="/shop">
                <Products
                  products={products}
                  addToCart={addToCart}
                  setCart={setCart}
                ></Products>
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/search">
                <Search products={products} addToCart={addToCart} />
              </Route>

              <Route exact path="/contact">
                <Contact />
              </Route>

              <Route exact path="/faq">
                <FAQ />
              </Route>

              <Route exact path="/returns">
                <Returns />
              </Route>
              <Route exact path="/shipping">
                <Shipping />
              </Route>

              <Route exact path="/track">
                <Track />
              </Route>

              <Route exact path="/cart">
                <Cart
                  cart={cart}
                  setCart={setCart}
                  onUpdateCartQty={handleUpdateCartQty}
                  onRemoveFromCart={handleRemoveFromCart}
                  onEmptyCart={handleEmptyCart}
                />
              </Route>
              <Route path="/checkout" exact>
                <Checkout
                  cart={cart}
                  refreshCart={refreshCart}
                  order={order}
                  setOrder={setOrder}
                  onCaptureCheckout={handleCaptureCheckout}
                  loaded={loaded}
                />
              </Route>


              <Route path="/product/:productId">
                <ProductDetail
                  setCart={setCart}
                  addToCart={addToCart}
                ></ProductDetail>
              </Route>

            </Switch>
          </div>

          <div id="footer">
            <Payments></Payments>
            <SiteMap></SiteMap>
            <Legal></Legal>
          </div>

        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
