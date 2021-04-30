  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  sort:{
    width:"max-content",
    marginBottom:"1rem",
    marginTop:"1rem"
   
    
  },
  
  content: {
    // flexGrow: 1,
    minHeight:"100vh",
    backgroundColor: theme.palette.background.default,
   
   
   padding: theme.spacing(3),
   
  },
  root: {
    flexGrow: 1,
  },
}));