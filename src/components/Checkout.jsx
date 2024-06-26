import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from '../styles/checkout.js';
import { AddressForm } from '../components';
import { PaymentForm } from '../components';
import { commerce } from '../lib/commerce.js';

const steps = ['Shipping address', 'Payment details'];
const Checkout = ({
  cart,
  refreshCart,
  onCaptureCheckout,
  order,
  loaded,
  setOrder,
}) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [error, setError] = useState('');

  const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });

        console.log(token);
        setCheckoutToken(token);
      } catch (err) {
        console.log(err);
        //TODO FIX error handling
        //history.push('/')
      }
    };
    generateToken();
  }, [cart,order.customer]);

  const next = data => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}{' '}
            {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        cart={cart}
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        order={order}
        setOrder={setOrder}
        refreshCart={refreshCart}
        loaded={loaded}
        setError={setError}
      />
    );

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar}></div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
