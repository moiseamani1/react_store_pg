import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  
  content: {
    // flexGrow: 1,
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
  location:{
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    float:"right"
  
  },
  contactInfo:{
      marginTop:"2rem",
      
  },
  directions:{
    marginTop:"1rem"
},
 
  
}));