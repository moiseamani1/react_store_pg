import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Grid,
} from '@mui/material';
import { ArrowForwardIos, Mail, MailOutline } from '@mui/icons-material';
import useStyles from './styles';

import MailchimpSubscribe from 'react-mailchimp-subscribe';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const classes = useStyles();
  const submit = (event, subscribe) => {
    event.preventDefault();
    return email && subscribe({ EMAIL: email });
  };

  return <>
    <Typography variant="h4" gutterBottom>
      <u>Newsletter</u>
      <MailOutline></MailOutline>
    </Typography>
    <Grid container spacing={3} direction="row">
      <Grid item className={classes.gridItem} xs={12}>
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <div>
              <form onSubmit={(event) => submit(event, subscribe)}>
                <TextField
                  key="formInput1"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="submit"
                          aria-label="delete"
                          className={classes.newsletterButton}
                          size="large">
                          <ArrowForwardIos />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className={classes.newsletter}
                  id="custom-css-standard-input"
                  variant="outlined"
                  label="Email Address"
                />
              </form>
              {status === 'sending' && (
                <div style={{ color: 'blue' }}>sending...</div>
              )}
              {status === 'error' && (
                <div
                  style={{ color: 'red' }}
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === 'success' && (
                <div style={{ color: 'green' }}>Subscribed !</div>
              )}
            </div>
          )}
        />
      </Grid>
      <Grid item className={classes.gridItem} xs={12}>
        <Typography variant="body1" gutterBottom>
          Join our mailing list and be the first to know about news,
          promotions, and special offers. You may unsubscribe at any time.
        </Typography>

        <Typography
          className={classes.confirmation}
          variant="body2"
          gutterBottom
        >
          By clicking '>', I confirm that I've read and accepted the{' '}
          <u>Terms &amp; Conditions</u> of Essence.{' '}
        </Typography>
      </Grid>
    </Grid>
  </>;
};

export default Newsletter;
