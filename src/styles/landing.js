import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,

    padding: '1.5rem',
  },
  root: {
    flexGrow: 1,
  },
  media: {
    marginTop: '1rem',
  },
  favorites: {
    marginTop: '5rem',
  },
}));
