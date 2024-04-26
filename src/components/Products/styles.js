import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  sort: {
    width: 'max-content',
    marginBottom: '1rem',
    marginTop: '1rem',
  },

  content: {
    // flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,

    padding: '1.5rem',
  },
  root: {
    flexGrow: 1,
  },
}));
