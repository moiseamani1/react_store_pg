import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    padding: '1.5rem',
  },
  media: {
    height: '35rem',
    maxWidth: '35rem',
    margin: 'auto',
    '& .img': {
      objectFit: 'scale-down',
    },
  },

  root: {
    flexGrow: 1,
  },
  gridSection: {
    padding: '2rem',
  },
  button: {
    marginLeft: '2rem',
  },
}));
