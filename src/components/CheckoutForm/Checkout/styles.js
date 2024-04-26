import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: '1rem',
    marginRight: '1rem',
    [theme.breakpoints.up(600 + '1rem' * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + '1.5rem' * 2)]: {
      marginTop: '3rem',
      marginBottom: '3rem',
      padding: '1.5rem',
    },
  },
  stepper: {
    padding: '3rem 0rem 5rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '1.5rem',
    marginLeft: '0.5rem',
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
