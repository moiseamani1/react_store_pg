import makeStyles from '@mui/styles/makeStyles';
import { Autorenew } from '@mui/icons-material';

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
  media: {
    marginTop: '1rem',
  },
  favorites: {
    marginTop: '5rem',
  },
}));
