import { alpha } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    width: '100%',
    padding: 0,
    margin: 0,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  toolbar: {
    // paddingRight: "79px",
    // paddingLeft: "118px",
  },
  title: {
    fontFamily: "Playfair Display', serif",
    margin: 'auto',
    display: 'flex',
    textDecoration: 'none',
  },
  nav_links: {
    margin: 'auto 0.4rem auto 0.4rem',
    '@media (max-width: 900px)': {
      margin: 'auto 0rem auto 0rem',
    },
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  drawerContainer: {
    padding: '20px 30px',
  },

  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: '1m',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: '1rem',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: '0rem 1rem',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '1rem 1rem 1rem 0rem',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + 2rem)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
