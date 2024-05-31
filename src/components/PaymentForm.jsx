import React from 'react';
import { Typography, Button } from '@mui/material';

import { Review } from '../components';

import {
  CreditCard,
  GooglePay,
  ApplePay,
  PaymentForm as PayForm,
} from 'react-square-web-payments-sdk';

const PaymentForm = ({
  checkoutToken,
  backStep,
  onCaptureCheckout,
  nextStep,
  shippingData,
  order,
  cart,
  loaded,
}) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
        Payment method
      </Typography>
      <br />
      <br />
 
      <PayForm
        /**
         * Identifies the calling form with a verified application ID generated from
         * the Square Application Dashboard.
         */
        applicationId={checkoutToken.gateways.square.settings.application_id}
        /**
         * Invoked when payment form receives the result of a tokenize generation
         * request. The result will be a valid credit card or wallet token, or an error.
         *
         *
         *
         *
         */
        cardTokenizeResponseReceived={(tokenResponse, buyer) => {
          console.log("Token + Buyer");
          console.log({ tokenResponse, buyer });
          const nonce  = tokenResponse.token;
          console.log("Nonce extracted");
          console.log(nonce);

          const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: {
              firstname: shippingData.firstName,
              lastname: shippingData.lastName,
              email: shippingData.email,
            },
            shipping: {
              name: 'International',
              street: shippingData.address1,
              town_city: shippingData.city,
              county_state: shippingData.shippingSubdivision,
              postal_zip_code: shippingData.zip,
              country: shippingData.shippingCountry,
            },
            fulfillment: {
              shipping_method: shippingData.shippingOption,
            },
            payment: {
              gateway: 'square',
              card: { nonce },
            },
          };

          console.log(checkoutToken);

          onCaptureCheckout(checkoutToken.id, orderData, true)
            .then((val) => {
              nextStep();
            })
        }}
        /**
         * This function enable the Strong Customer Authentication (SCA) flow
         *
         * We strongly recommend use this function to verify the buyer and reduce
         * the chance of fraudulent transactions.
         */
        createVerificationDetails={() => ({
          amount: '1',
          /* collected from the buyer */
          billingContact: {
            addressLines: ['123 Main Street', 'Apartment 1'],
            familyName: 'Doe',
            givenName: 'John',
            countryCode: 'CA',
            city: 'Calgary',
          },
          currencyCode: 'CAD',
          intent: 'CHARGE',
        })}


        createPaymentRequest={() => {
          const subtotal = checkoutToken.live.total.raw;
          const tax = subtotal * 0.1;
          const totalAmount = subtotal + tax;
        
          return {
            requestShippingContact: true,
            requestBillingInfo: true,
            currencyCode: 'CAD',
            countryCode: 'CA',
            total: {
              label: 'Essence',
              amount: totalAmount.toString(),
              pending: false,
            },
            lineItems: [
              {
                label: 'Subtotal',
                amount: subtotal.toString(),
                pending: false,
              },
              {
                label: 'Tax',
                amount: tax.toString(),
                pending: false,
              },
            ],
          };
        }}

        /**
         * Identifies the location of the merchant that is taking the payment.
         * Obtained from the Square Application Dashboard - Locations tab.
         */
        locationId={checkoutToken.gateways.square.settings.location_id}
      >
        <GooglePay />
        <ApplePay />
        <CreditCard />
      </PayForm>
      
      <Button variant="outlined" onClick={backStep}>
        Back
      </Button>
    </>
  );
};
export default PaymentForm;
