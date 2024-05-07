import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  question: {
    backgroundColor: 'black',

    color: 'white',
    padding: '1rem',
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  answer: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    border: '1px solid black',
  },
  arrow: {
    color: 'white',
    width: '5rem',
  },
  innerContent: {
    width: 'fit-content',
  },
}));
