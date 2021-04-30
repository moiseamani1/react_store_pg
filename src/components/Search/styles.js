import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      minHeight:"100vh",
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
    gridSection:{
      padding:"2rem"
    },
    searchBar:{
        marginTop:"15rem",
        height:"5rem",
       
    }
    
}));