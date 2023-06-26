import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operation";
import { selectUser } from "redux/auth/selectors";
import React from 'react';
import { Box, Button, Typography } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);
  
  //   return (
  //     <div>
  //       <h2>Welcome, {name}</h2>
  //       <button type="button" onClick={() => dispatch(logOut())}>
  //         Log Out
  //       </button>
  //     </div>
  //   );
  // };
return (
  <Box sx={{ flexGrow: 1}}>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div"  sx={{ display: "flex", marginLeft: 10, gap: 20, color: 'black' }}>
      Welcome, {name}
      </Typography>
      <Button type="button" onClick={() => dispatch(logOut())}> Log Out </Button>
    </Toolbar>
  </AppBar>
</Box> )}