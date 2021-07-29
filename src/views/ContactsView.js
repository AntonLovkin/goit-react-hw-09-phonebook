import ContactForm from '../components/Contact-form';
import Filter from '../components/Filter';
import ContactsList from '../components/Contacts';

const ContactsView = () => {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Filter</h2>
        <Filter />

        <h2>Contacts</h2>
        <ContactsList />
      </>
    );
  }


export default ContactsView;