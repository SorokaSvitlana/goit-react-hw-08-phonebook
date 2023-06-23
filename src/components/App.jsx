import React, { useEffect }  from "react";
import { Form } from "./FormAddContacts/FormAddContacts";
import { ContactList } from "./Contacts/Contacts";
import { Search } from "./Search/Search";
import { Container, Title, ListTitle } from './Container/Container.Styled'
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/contactsOperation";
import { Route, Routes } from "react-router-dom";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
            <Route
              path="/"
              index
              element={<PrivateRoute component={Home} redirectTo="login" />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={LoginForm} />}
            />
            <Route
              path="register"
              element={<RestrictedRoute component={RegisterForm} />}
            />
          </Routes>
      {/* <Title>Phonebook</Title>
      <Form />
      <ListTitle>Contacts</ListTitle>
      <Search />
      <ContactList  /> */}
    </Container>
  );
}