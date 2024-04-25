import React from 'react';
import { Typography, Button } from '@material-ui/core';

import Review from './Review';

import Square from './Square';

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
      <Button variant="outlined" onClick={backStep}>
        Back
      </Button>
      {loaded && (
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
      )}
    </>
  );
};
export default PaymentForm;
