import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/">HOME</NavLink>
          </Typography>
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
// export const Navigation = () => {
//     const isLoggedIn = useSelector(selectIsLoggedIn);
//     return ( <>
//       <NavLink to="/">Home</NavLink>
//       {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
//       </>
//     );
//   };



