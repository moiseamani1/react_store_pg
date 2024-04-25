import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000000',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    paddingRight: '2.5rem',
    paddingLeft: '2.5rem',
    display: 'flex',
  },
  listItem: {
    display: 'flex',
    // width:"20rem",
    color: '#f9f9f9',
    textDecoration: 'none',
  },
  social: {
    cursor: 'pointer',
  },
  control: {
    padding: theme.spacing(2),
  },
  newsletterButton: {
    color: '#f0f0f0',
  },
  newsletter: {
    '& :-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #266798 inset',
      WebkitTextFillColor: 'white',
    },

    '& .MuiInputBase-input': {
      color: '#f0f0f0',
    },
    '& .MuiInputLabel-root': {
      color: '#f0f0f0',
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
    },
  },

  // newsletter:{

  //   color: "red",
  //   borderRadius: 2,
  //   padding: 100,
  //   display: "inline-block"
  // }
}));
