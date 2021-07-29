import React, { Component, useState } from "react";
import { connect, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import "../base.css";
import "../Contact-form/contact-form.css";

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsOperations.addContact(name, number)),
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts())
// });

// export default connect(null, mapDispatchToProps)(ContactForm);

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();


  // state = {
  //   name: "",
  //   number: "",
  // };

  // // componentDidMount() {
  // //   this.props.fetchContacts()
  // // }

// const handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };

// const  handleSubmit = (evt) => {
//     evt.preventDefault();

//     const { name, number } = this.state;
 
//     this.props.onSubmit(name, number);
   
//     this.reset();
//   };

  const reset = () => {
    setName('');
    setNumber('')
  };

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
  };
