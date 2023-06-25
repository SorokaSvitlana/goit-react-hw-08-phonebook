import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operation";
import { selectUser } from "redux/auth/selectors";
import React from 'react';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUser);
  
    return (
      <container>
        <h2>Welcome, {name}</h2>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </button>
      </container>
    );
  };