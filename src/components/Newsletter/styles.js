import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    confirmation:{
        color:"#C0C0C0"
    
    },
      gridSection:{
        padding:"2rem"
      },
      newsletterButton:{
        color:"#f0f0f0"
      },
      newsletter:{
        '& :-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px #266798 inset',
          WebkitTextFillColor: 'white',
        },

        '& .MuiInputBase-input':{
          color:"#f0f0f0"
        },
        '& .MuiInputLabel-root':{
          color:'#f0f0f0'
        },

        '& label.Mui-focused': {
          color: 'green',
          
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#f0f0f0',
          },
          '&:hover fieldset': {
            borderColor: '#f0f0f0',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          },
        }

      },

}));