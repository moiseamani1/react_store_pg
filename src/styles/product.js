import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '95%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  prodName: {
    color: 'black',
  },
}));
