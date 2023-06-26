import { NavLink} from "react-router-dom";
import React from 'react';
import { Box, Typography } from "@mui/joy";
import { AppBar, Toolbar } from "@mui/material";


export const AuthNav = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div"  sx={{ display: "flex", marginLeft: 10, gap: 20 }}>
            <NavLink
              to="/register"
              sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
              activeStyle={{ color: "blue" }}
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              sx={{
                color: "black",
                textDecoration: "none",
                
                fontWeight: "bold",
              }}
              activeStyle={{ color: "blue" }}
            >
              Log In
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};