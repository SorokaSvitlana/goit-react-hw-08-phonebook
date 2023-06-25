import { ContactList } from "components/Contacts/Contacts";
import { ListTitle, Title } from "components/Container/Container.Styled";
import { Form } from "components/FormAddContacts/FormAddContacts";
import { Search } from "components/Search/Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsOperation";
import React from 'react';

export default function ContactsPage() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <div>
        <Title>Phonebook</Title>
      <Form />
      <ListTitle>Contacts</ListTitle>
      <Search />
      <ContactList  />
      </div>
    );
  }
