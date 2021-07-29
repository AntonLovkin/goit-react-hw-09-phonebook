import React, {useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../redux/contacts/contacts-actions'
import contactsSelectors from '../redux/contacts/contacts-selectors'

// const mapStateToProps = (state) => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (evt) => dispatch(changeFilter(evt.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = useCallback((evt) => {
    dispatch(changeFilter(evt.target.value))
  }, [dispatch]);
  
  const value = useSelector(contactsSelectors.getFilter);

  return (
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
}