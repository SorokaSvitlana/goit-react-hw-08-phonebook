
import { ContactsList, ContactItem } from './Contacts.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'components/redux/contacts/contactsFilterSlice';
import { deleteContact } from 'components/redux/contacts/contactsOperation';
import { getContacts } from 'components/redux/contacts/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);
  console.log(contacts)

  const getFilteredContacts = () => {
    const normalizedFilter = contactsFilter.toLowerCase();
    return contacts.filter(
      (contact) =>
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = (id) => {
    return dispatch(deleteContact(id));
  };

  return (
    <ContactsList>
      {filteredContacts.length === 0 ? (
        <p>You don't have contacts yet</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}{' '}
            <button onClick={() => handleDeleteContact(id)}>Delete</button>
          </ContactItem>
        ))
      )}
    </ContactsList>
  ); }

