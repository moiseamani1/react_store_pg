import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    // paddingRight:"2.5rem",
    // paddingLeft:"2.5rem",
    display: 'flex',
  },
  row: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '1rem',
  },
  legal: {
    fontSize: '0.875rem',
  },
}));
