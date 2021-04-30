import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      minHeight:"100vh",
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    media:{
    height:"35rem",
    maxWidth:'35rem',
    margin:"auto",
    "& .img":{
    objectFit:"scale-down"
    }
    
      },

    root: {
      flexGrow: 1,
    },
    gridSection:{
      padding:"2rem"
    },
    button:{
      marginLeft:"2rem"
    }
}));