import React, { useEffect }  from "react";
import { Container } from './Container/Container.Styled'
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "Pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { AppBar } from "./AppBar/AppBar";
import { refreshUser } from "redux/auth/operation";
import LoginPage from "Pages/Login";
import RegisterPage from "Pages/Register";
import ContactsPage from "Pages/Phonebook";

export function App() {
  const dispatch = useDispatch();

useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
            <Route
              path="/"
              index
              element={<PrivateRoute component={<Home/>}  />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>} />}
            />
            <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login"  component={<ContactsPage />} />
            }
          />
          </Routes>
    </Container>
  );
}