import { useSelector } from 'react-redux';
import { getContacts, getFilteredName } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { Container } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredName);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </Container>
  );
};