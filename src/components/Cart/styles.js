import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  location: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    float: 'right',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: 'auto',
    marginBotto: 'auto',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
