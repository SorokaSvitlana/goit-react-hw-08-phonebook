import React, { useEffect }  from "react";
import { Container } from './Container/Container.Styled'
import { useDispatch, useSelector} from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { AppBar} from "./AppBar/AppBar";
import { refreshUser } from "redux/auth/operation";
import LoginPage from "Pages/Login";
import RegisterPage from "Pages/Register";
import ContactsPage from "Pages/Phonebook";
import Home from "Pages/Home";
import { selectIsRefreshing } from "redux/auth/selectors";
import { PageNotFound } from "Pages/PageNotFound";

export function App() {
  const dispatch = useDispatch();
  const isUserRefreshing = useSelector(selectIsRefreshing);

useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return  isUserRefreshing ? (
    <h2>Refreshing user...</h2>
  ) :  (
    <Container>
      <AppBar />
      <Routes>
            <Route
              path="/"
              element={<Home />}/>
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
          <Route path="*" element={<PageNotFound />} />
          </Routes>
    </Container>
  );
}