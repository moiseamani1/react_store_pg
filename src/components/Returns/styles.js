import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    // flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,

    padding: '1.5rem',
  },
  root: {
    flexGrow: 1,
  },

  gridSection: {
    padding: '2rem',
  },
  location: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    float: 'right',
  },
}));
