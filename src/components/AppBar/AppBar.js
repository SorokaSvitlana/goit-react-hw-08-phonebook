import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import React from 'react';

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return (
      <header style={{ display: 'flex' }} >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    );
  };

  