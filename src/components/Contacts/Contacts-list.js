import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from '../../redux/contacts/contacts-operations'
import contactsSelectors from "../../redux/contacts/contacts-selectors";
import "./contacts-list.css";

// const mapStateToProps = (state) => ({
//   filteredContacts: contactsSelectors.getFilteredContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

export default function ContactsList() {
  const dispatch = useDispatch();

  // const onDeleteContact = useEffect((id) => {dispatch(contactsOperations.deleteContact(id))})

  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  
  return (
  <ul className="contact-list">
    {filteredContacts.map(({ name, number, id }) => (
      <li key={id} className="contact-item">
        <span className="contact-name">{name} : </span>
        <span className="contact-number"> {number}</span>
        <button
          className="button contact-item__button"
          // onClick={onDeleteContact}
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
          // onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
} 