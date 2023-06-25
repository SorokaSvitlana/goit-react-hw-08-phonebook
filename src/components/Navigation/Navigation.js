import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";
import React from 'react';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
        </ul>
      </nav>
    );
  };