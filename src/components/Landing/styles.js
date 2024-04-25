import { makeStyles } from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(3),
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
