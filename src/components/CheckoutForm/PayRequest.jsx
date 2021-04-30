import React, {useState, useEffect} from 'react';
import {PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';

const PayRequest = ({checkoutToken,shippingData,onCaptureCheckout,nextStep}) => {

    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);
  
    useEffect(() => {
      if (stripe) {
        const pr = stripe.paymentRequest({
          country: 'CA',
          currency: 'cad',
          total: {
            label: 'Demo total',
            amount: checkoutToken.live.total.raw*100,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });
  
        // Check the availability of the Payment Request API.
        pr.canMakePayment().then(result => {
          if (result) {
            setPaymentRequest(pr);
          }
        });
      }
    }, [stripe]);
    
      
     if(paymentRequest){
        console.log(paymentRequest)
        
    paymentRequest.on('paymentmethod', async (ev) => {
        // Confirm the PaymentIntent without handling potential next actions (yet).
        
        const clientSecret=''
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {payment_method: ev.paymentMethod.id},
          {handleActions: false}
        );
      
        if (confirmError) {
          // Report to the browser that the payment failed, prompting it to
          // re-show the payment interface, or show an error message and close
          // the payment interface.
          ev.complete('fail');
        } else {
          // Report to the browser that the confirmation was successful, prompting
          // it to close the browser payment method collection interface.
          ev.complete('success');
          // Check if the PaymentIntent requires any actions and if so let Stripe.js
          // handle the flow. If using an API version older than "2019-02-11" instead
          // instead check for: `paymentIntent.status === "requires_source_action"`.
          if (paymentIntent.status === "requires_action") {
            // Let Stripe.js handle the rest of the payment flow.
            const {error} = await stripe.confirmCardPayment(clientSecret);
            if (error) {
              // The payment failed -- ask your customer for a new payment method.
            } else {
              // The payment has succeeded.
      
              const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                  gateway: 'stripe',
                  stripe: {
                    payment_method_id: ev.paymentMethod.id,
                  },
                },
              };
        
              onCaptureCheckout(checkoutToken.id, orderData,true);
           
        
              nextStep();
            }
          } else {
            // The payment has succeeded.
      
            const orderData = {
              line_items: checkoutToken.live.line_items,
              customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
              shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
              fulfillment: { shipping_method: shippingData.shippingOption },
              payment: {
                gateway: 'stripe',
                stripe: {
                  payment_method_id: ev.paymentMethod.id,
                },
              },
            };
      
            onCaptureCheckout(checkoutToken.id, orderData,true);
         
      
            nextStep();
      
          }
        }
      })}



  
    // if (paymentRequest) {
    //   return <PaymentRequestButtonElement options={{paymentRequest}} />
    // }




    return (
        paymentRequest?<PaymentRequestButtonElement options={{paymentRequest}} />:
        <div>
            123
        </div>
    )
}

export default PayRequest
