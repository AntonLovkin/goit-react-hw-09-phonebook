import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    addContactSuccess,
    deleteContactSuccess,
    fetchContactsSuccess,
    changeFilter
} from './contacts-actions'
// import actions from "./contacts-actions";
// import types from "./contacts-types";

// console.log(actions.addContact.type);

const items = createReducer(([]), {
  [fetchContactsSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.map(({ name }) => name).includes(payload.name)) {
      alert(`${payload.name} is already in contacts`);
      // console.log(payload.name);
      return 
    } 
      return [payload, ...state];
    
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {})

export default combineReducers({
  items,
  filter,
  error
});
