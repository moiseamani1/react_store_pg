import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    borderTop: '1px solid #f0f0f0',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    // paddingRight:"2.5rem",
    // paddingLeft:"2.5rem",
    display: 'flex',
  },
  imageIcon: {
    height: '100%',
  },
  iconRoot: {
    textAlign: 'center',
  },
  payments: {
    height: '2.5rem',
    padding: '0.5rem',
  },
}));
