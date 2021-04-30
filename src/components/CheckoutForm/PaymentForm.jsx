import React,{useEffect, useState} from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer, PaymentRequestButtonElement,useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review'

import Square from './Square';



const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({checkoutToken,backStep,onCaptureCheckout,nextStep,shippingData,order,cart,loaded}) => {

  



 









    /* useEffect(() => {
      getPaypalPaymentId();
        const script = document.createElement('script');
        script.src = "https://www.paypalobjects.com/api/checkout.js";
        document.head.appendChild(script);
        //const script2 = document.createElement('script');
        //script.src = "https://www.paypal.com/sdk/js?client-id=ATlU430Ma1AQYkRY1BvxIheKFYgpMHpVm2t8F8AuHVc8RkfTL6ZKCL2ArKbVGmNiS3RTjc9Li9_ZqaGL"
        //document.head.appendChild(script);
        return () => {
          document.head.removeChild(script);
          //document.head.removeChild(script2);
        }
      }, [cart]); */


  /*   const captureOrder=async(data)=>{
        try {
            // Complete capturing the order.
            const orderData =  {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
              // We have now changed the action to "capture" as well as included the "payment_id and "payer_id"
              payment: {
                gateway: 'paypal',
                paypal: {
                  action: 'capture',
                  payment_id: data.payment_id,
                  payer_id: data.payer_id,
                },
              },
            }
            await onCaptureCheckout(checkoutToken.id, orderData,true)
            nextStep()
            // If we get here, the order has been successfully captured and the order detail is part of the `order` variable
            console.log(order);
            return;
          } catch (response) {
            // There was an issue capturing the order with Commerce.js
            console.log(response);
            alert(response.message);
            return;
          } finally {
            // Any loading state can be removed here.
          }

    } 


    const renderPaypalButton=(paypalAuth)=>{
        paypal.Button.render({
            style: {
                size: 'medium',
                color: 'black',
                shape: 'rect',
                label: 'pay',
                tagline: 'true'
                },
            env: 'production', // Or 'sandbox',
            commit: true, // Show a 'Pay Now' button
            payment: function() {
              return paypalAuth.payment_id // The payment ID from earlier
      
            },
            onAuthorize: function(data, actions) {
              // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
              captureOrder(data);
            },
            onCancel: function(data, actions) {
              // Handler if customer does not authorize payment
            }
          },
          '#paypal-button-container'
        );
    }

    const getPaypalPaymentId=async()=>{
        try {
            // Use a checkout token ID that was generated earlier, and any order details that may have been collected
            // on this page.
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, 
                town_city: shippingData.city, county_state: shippingData.shippingSubdivision, 
                postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                    gateway: 'paypal',
                    paypal: {
                      action: 'authorize',
                    },
                  },
              };
            
              await onCaptureCheckout(checkoutToken.id, orderData,false)
            // If we get here, we can now push the user to the PayPal URL.
            // An example of rendering the PayPal button is below
              renderPaypalButton(order);  
            
            
            return;
          } catch (response) {
            // There was an issue with capturing the order with Commerce.js
            console.log("The response!!!!!!!:"+response);
            alert(response.message);
            return;
          } finally {
            // Any loading state can be removed here.
          }
    } */



    /* const handleStripeSubmit=async (event,elements,stripe)=>{
        event.preventDefault();

        if(!stripe|| !elements)return;

        const cardElement=elements.getElement(CardElement);
        const {error,paymentMethod}=await stripe.createPaymentMethod({type:'card',card:cardElement});
        if(error){
            console.log(error);
        }else{
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                  gateway: 'stripe',
                  stripe: {
                    payment_method_id: paymentMethod.id,
                  },
                },
              };
        
              onCaptureCheckout(checkoutToken.id, orderData,true);
           
        
              nextStep();

        }
    }
 */


    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
  {/* <Elements stripe={stripePromise}>
    <PayRequest shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout}></PayRequest>
                <ElementsConsumer>
                  
                    {({elements,stripe})=>(
                      <>
                      
                        <form onSubmit={(e)=>handleStripeSubmit(e,elements,stripe)}>
                            <CardElement/>
                            <br/><br/>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
                        </form>
                    </>)}
                </ElementsConsumer>
            </Elements> */}

            {loaded && <Square paymentForm={ window.SqPaymentForm } shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} > </Square>}
            </>
    )
}
export default PaymentForm

          
          


{/* {loaded&&<div paymentForm={window.SqPaymentForm}>
  
<div id="form-container">
          <div id="sq-walletbox">
            <button style={{display: (this.state.applePay) ? 'inherit': 'none'}}
                    className="wallet-button"
                    id="sq-apple-pay"></button>
            <button style={{display: (this.state.masterpass) ? 'block': 'none'}}
                    className="wallet-button"
                    id="sq-masterpass"></button>
            <button style={{display: (this.state.googlePay) ? 'inherit': 'none'}}
                    className="wallet-button"
                    id="sq-google-pay"></button>
            <hr />
          </div>

          <div id="sq-ccbox">
            <p>
              <span style={styles.leftCenter}>Enter Card Info Below </span>
              <span style={styles.blockRight}>
                {this.state.cardBrand.toUpperCase()}
              </span>
            </p>
            <div id="cc-field-wrapper">
              <div id="sq-card-number"></div>
              <input type="hidden" id="card-nonce" name="nonce" />
              <div id="sq-expiration-date"></div>
              <div id="sq-cvv"></div>
            </div>
            <input
              id="name"
              style={styles.name}
              type="text"
              placeholder="Name"
            />
            <div id="sq-postal-code"></div>
          </div>
          <button className="button-credit-card"
                  onClick={this.requestCardNonce}>Pay</button>
        </div>
        <p style={styles.center} id="error"></p>
  
  
  
  
  
  
  </div>} */}

       {/*      <div id="checkout">
      
      <div id="paypal-button-container" ></div>
    </div> */}

   


 


