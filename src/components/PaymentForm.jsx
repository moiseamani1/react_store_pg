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
      {/* {loaded && (
        <Square
          onCaptureCheckout={onCaptureCheckout}
          paymentForm={window.SqPaymentForm}
          shippingData={shippingData}
          checkoutToken={checkoutToken}
          backStep={backStep}
          nextStep={nextStep}
        >
          {' '}
        </Square>
      )} */}

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
        cardTokenizeResponseReceived={(token, buyer) => {
          console.info({ token, buyer });
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
        createPaymentRequest={() => ({
          requestShippingContact: true,
          requestBillingInfo: true,
          currencyCode: 'CAD',
          countryCode: 'CA',
          total: {
            label: 'MERCHANT NAME',
            amount: '1',
            pending: false,
          },
          lineItems: [
            {
              label: 'Subtotal',
              amount: '0.8',
              pending: false,
            },
            {
              label: 'Tax',
              amount: '0.2',
              pending: false,
            },
          ],
        })}
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
