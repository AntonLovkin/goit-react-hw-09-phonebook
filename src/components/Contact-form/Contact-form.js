import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import "../base.css";
import "../Contact-form/contact-form.css";

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsOperations.addContact(name, number)),
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts())
// });

// export default connect(null, mapDispatchToProps)(ContactForm);

export default function ContactForm () {
  const initialState = {
    name: "",
    number: "",
  };

  // componentDidMount() {
  //   this.props.fetchContacts()
  // }

  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const onSubmit = (name, number) => dispatch(contactsOperations.addContact(name, number));
  
  // const contacts = useSelector(state => contactsSelectors.getAllContacts(state));
  const fetchContacts = (name, number) => dispatch(contactsOperations.fetchContacts(name, number));

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = state;
 
    onSubmit(name, number);
   
    reset();
  };

  const reset = () => {
    setState(prev  => ({ ...prev, name: "", number: "" }));
  };

  // const addNoRepeatContact = (state, contacts) => {
  //   const { name, number } = state;
  //   if (
  //     contacts.some(
  //       contacts => contacts.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   if (contacts.some(contacts => contacts.number === number)) {
  //     alert(`${number} is already in contacts`);
  //     return;
  //   }

  //   onSubmit(state);
  //   reset();
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   addNoRepeatContact(state, contacts);
  // };

  fetchContacts();

  const { name, number } = state;

   return (
      <form className="contacts-form" onSubmit={handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=" "
            required
          />
        </label>

        <label className="label">
          Number
          <input
            className="input"
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className="button add" type="submit">
          Add contact
        </button>
      </form>
    );
}