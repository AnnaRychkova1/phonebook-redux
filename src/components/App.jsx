import css from './App.module.css';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

function App() {
  // const [filter, setFilter] = useState('');

  // const [contacts, setContacts] = useState(() => {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   return JSON.parse(stringifiedContacts) || contactsList;
  // });

  // const onFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onAddNewContact = contactData => {
  //   const createdContact = {
  //     ...contactData,
  //     id: nanoid(),
  //   };
  //   setContacts(prevState => [...prevState, createdContact]);
  // };

  // const handleDelete = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
