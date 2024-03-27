import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
// import { selectContacts, selectNameFilter } from '../../redux/contactsSlice';

const getVisibleContacts = (contacts, filter) => {
  // return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  // );
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
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
