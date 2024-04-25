import React from 'react';

import useStyles from './styles';
import { Grid, Icon, ListItem } from '@material-ui/core';

const Payments = () => {
  const classes = useStyles();
  const types = {
    Visa: '/payments/visa.svg',
    Mastercard: '/payments/mastercard.svg',
    AmericanExpress: '/payments/american-express.svg',
    Discover: '/payments/discover.svg',
    DinersClub: '/payments/diners-club.svg',
    JCB: '/payments/jcb.svg',
  };
  return (
    <Grid container className={classes.root}>
      <Grid container justify={'center'} direction="row">
        {Object.entries(types).map(([key, value]) => (
          <div className={classes.payments}>
            <Icon classes={{ root: classes.iconRoot }}>
              <img alt={key} className={classes.imageIcon} src={value} />
            </Icon>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default Payments;
