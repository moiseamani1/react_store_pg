import React,{useState} from 'react'
import {Grid,Typography,List,ListItem,TextField,InputAdornment,IconButton} from '@material-ui/core';
import { Facebook, Instagram,Twitter,LinkedIn,GitHub,ArrowForwardIos } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const SiteMap = () => {

    
    const classes=useStyles();
    const sitemap={"Contact Us":"/contact","FAQ":"/faq","Returns & Exchanges":"/returns","Shipping":"/shipping","Track Order":"/track"}

    const [email, setEmail] = useState('');

const submit = (event,subscribe) =>{
        event.preventDefault();
        return email && subscribe({EMAIL: email,});
}
    

    


    return (
        <Grid container className={classes.root} >
        <Grid container justify={"center"} direction="row" >
      <Grid item xs={12} sm={6} md={3} lg={3} >
            <List className={classes.list}>
            <ListItem className={classes.listItem}><Typography variant="h6" color="inherit" to="/">Customer Care</Typography></ListItem>
        {Object.entries(sitemap).map(([key, value])=>(
            <ListItem className={classes.listItem}><Typography variant="body1"  color="inherit" component={Link} to={value}>{key}</Typography></ListItem>
        ))
        }
            </List>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} >
        <List className={classes.list}>
            <ListItem className={classes.listItem}><Typography variant="h6"  color="inherit"  to="/">About Retrendz</Typography></ListItem>
            <ListItem className={classes.listItem}><Typography variant="body1"  color="inherit" component={Link} to={"/about"}>{'About Us'}</Typography></ListItem>
        </List>
        </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <List className={classes.list}>
            <ListItem className={classes.listItem}><Typography variant="h6" color="inherit" >Stay connected with us</Typography></ListItem>
            <ListItem className={classes.listItem} style={{display:"flex",flexWrap:"row"}}><Facebook /><Instagram /><Twitter /><LinkedIn className={classes.social} onClick={()=>(window.open("https://www.linkedin.com/in/moise-amani", '_blank'))}/>
            <GitHub className={classes.social} onClick={()=>(window.open("https://github.com/moiseamani1", '_blank'))}/></ListItem>
        </List>
        </Grid>

        <Grid item xs={12}  sm={6} md={3} lg={3}>
            <List className={classes.list}>
            <ListItem className={classes.listItem}><Typography variant="h6" color="inherit" to="/">Newsletter</Typography></ListItem>
            <ListItem className={classes.listItem}> 

          
           
<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} 
render={({ subscribe, status, message }) => (
<div>
  <form onSubmit={(event)=>submit(event,subscribe)}>
  <TextField key="formInput1" value={email} onInput={ e=>setEmail(e.target.value)} InputProps={{
  endAdornment: <InputAdornment position="end"> 
  <IconButton
  type="submit"
  aria-label="delete"
  className={classes.newsletterButton}
  >
<ArrowForwardIos/>
  </IconButton>
 
</InputAdornment>,
}} className={classes.newsletter} id="custom-css-standard-input"  variant="outlined" label="Email Address" /> 
</form>  
   {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
{status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
{status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}   
</div>





)}

/>


          
          </ListItem>
            </List>
      </Grid>
        

</Grid>

      </Grid>
    )
}

export default SiteMap
