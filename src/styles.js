import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
    minHeight:"100%",
    
    boxSizing:"border-box",
    overflowX:"hidden",
    overflowY:"hidden",
    margin: 0
      },
    holder:{
        minHeight: "100%",
    position:"relative"
    },
    body:{
        paddingBottom: "100px"    /* height of footer */
    },
    footer:{
        height: "100px", 
        width:"100%",
        position: "absolute",
        left: 0,
        bottom: 0, 

    }
      
}));