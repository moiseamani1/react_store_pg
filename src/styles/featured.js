import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '95%', // 16:9
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
