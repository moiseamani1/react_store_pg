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
  const [errorMessage, setErrorMessage] = useState('');
  const [loaded, setLoaded] = useState(false);

  // const fetchFavorites = async () => {
  //   const { data } = await commerce.products.list({
  //     category_slug: 'favorite',
  //   });
  //   setFavorites(data);
  // };

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   const cart = await commerce.cart.retrieve();
  //   setCart(cart);
  // };
  // const addToCart = async (id, quantity) => {
  //   const item = await commerce.cart.add(id, quantity);

  //   setCart(item.cart);
  // };
  // const handleEmptyCart = async () => {
  //   const response = await commerce.cart.empty();

  //   setCart(response.cart);
  // };

  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();

  //   setCart(newCart);
  // };

  // const handleUpdateCartQty = async (lineItemId, quantity) => {
  //   const response = await commerce.cart.update(lineItemId, { quantity });

  //   setCart(response.cart);
  // };

  // const handleRemoveFromCart = async (lineItemId) => {
  //   const response = await commerce.cart.remove(lineItemId);

  //   setCart(response.cart);
  // };

  // const handleCaptureCheckout = async (
  //   checkoutTokenId,
  //   newOrder,
  //   onRefresh,
  // ) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(
  //       checkoutTokenId,
  //       newOrder,
  //     );

  //     console.log(incomingOrder);
  //     setOrder(incomingOrder);

  //     if (onRefresh) {
  //       refreshCart();
  //     }
  //   } catch (error) {
  //     setErrorMessage(error.data.error.message);
  //   }
  // };



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
                  order={order}
                  setOrder={setOrder}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
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
