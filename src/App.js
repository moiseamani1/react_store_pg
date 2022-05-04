import React,{useState,useEffect} from 'react';

import{Products,Navbar,Cart,Checkout,ProductDetail} from './components'
import {commerce} from './lib/commerce'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SiteMap from './components/SiteMap/SiteMap';
import useStyles from './styles';
import './index.css';
import Landing from './components/Landing/Landing';
import Payments from './components/SiteMap/Payments/Payments';
import Legal from './components/SiteMap/Legal/Legal';
import About from './components/About/About';
import Track from './components/Track/Track';
import Shipping from './components/Shipping/Shipping';
import Returns from './components/Returns/Returns';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Search from './components/Search/Search';

import Modal from 'react-awesome-modal';
import Newsletter from './components/Newsletter/Newsletter';
import ScrollToTop from './helper/ScrollToTop';


const App=()=>{

    const classes=useStyles();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [productId, setProductId] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [loaded, setLoaded] = useState(false);

    const [visible,setVisible]=useState(false);



    const fetchFavorites=async()=>{
      const {data}=await commerce.products.list({category_slug:"favorite"});
      setFavorites(data)

    }



    const fetchProducts=async()=>{

        const {data}=await commerce.products.list();
        setProducts(data)
    }

    const fetchCart=async()=>{

        const cart=await commerce.cart.retrieve();
        setCart(cart)
    }
    const addToCart=async(id,quantity)=>{

        const item=await commerce.cart.add(id,quantity);

        setCart(item.cart)
    }
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
    
        setCart(response.cart);
      };


      const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
      };

      const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
    
        setCart(response.cart);
      };

      const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
    
        setCart(response.cart);
      };

      const handleCaptureCheckout = async (checkoutTokenId, newOrder,onRefresh) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          console.log(incomingOrder)
          setOrder(incomingOrder);
    
          //refreshCart();
          if(onRefresh){
            refreshCart();
          }
          
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };




      const[selectedOption,setSelectedOption]=useState('Latest arrivals');
    
  
      const handleSort=(value)=>{
        
        if(value["value"]==='Latest arrivals'){
          setSelectedOption('Latest arrivals')

       products.sort((a,b)=>(a.created>b.created)?1:-1)
        
        }else if(value["value"]==='Highest to Lowest'){
           products.sort((a,b)=>(a.price.raw<b.price.raw)?1:-1)
           setSelectedOption('Highest to Lowest')
                 
        }else if(value["value"]==='Lowest to Highest'){
             products.sort((a,b)=>(a.price.raw>b.price.raw)?1:-1)
           
             setSelectedOption('Lowest to Highest')
            
        }

      }
     
    
  


   useEffect(() => {
       fetchProducts();
       fetchFavorites();
       fetchCart();
       openModal()
   }, [])

   useEffect(() => {
        
  }, [products])

  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://js.squareup.com/v2/paymentform";
    script.type="text/javascript"
    script.async=false;
    script.onload=()=>{
      setLoaded(true);
    }
    document.getElementsByTagName("head")[0].appendChild(script)
    
    
  
  }, [])









const openModal=()=>{


  setVisible(true)
  
}

const closeModal=()=>{

  setVisible(false)
  
}


  

 


return(

    <Router>
<div class="container">

{/* <Modal   visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => closeModal()}>
                    <div id='newsletterPopup'>
                    <a id="close" href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
                        <Newsletter/>
                       
                       
                    </div>
                </Modal> */}
<div id="main">
<Navbar totalItems={cart.total_items}></Navbar>
<ScrollToTop />
<Switch>
    <Route exact path="/">
    <Landing favorites={favorites}></Landing>
    </Route>


    <Route exact path="/shop">
    <Products products={products}  addToCart={addToCart} handleUpdateCartQty handleSort={handleSort} selectedOption={selectedOption}></Products>
    </Route>
    <Route exact path="/about">
    <About/>
    </Route>

    <Route exact path="/search">
    <Search products={products} addToCart={addToCart}/>
    </Route>

    
    <Route exact path="/contact">
    <Contact/>
    </Route>

    <Route exact path="/faq">
    <FAQ/>
    </Route>

    <Route exact path="/returns">
    <Returns/>
    </Route>
    <Route exact path="/shipping">
    <Shipping/>
    </Route>

<Route exact path="/track">
    <Track/>
    </Route>


    <Route exact path="/cart">
    <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
    </Route>
    <Route path="/checkout" exact>
    <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} loaded={loaded}/>
    </Route>

    <Route path="/product/:productId" >
  
     <ProductDetail cart={cart} addToCart={addToCart}></ProductDetail>
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
    
)


}

export default App;