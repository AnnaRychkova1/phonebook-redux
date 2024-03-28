import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
