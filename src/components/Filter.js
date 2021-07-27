import React from "react";
import { connect } from "react-redux";
import {changeFilter} from '../redux/contacts/contacts-actions'
import contactsSelectors from '../redux/contacts/contacts-selectors'

const Filter = ({ value, onChange }) => (
   <div className="filter">
    <label className="label">
      Find contacts by name:
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChange}
      >
      </input>
    </label>
  </div>
);

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (evt) => dispatch(changeFilter(evt.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
