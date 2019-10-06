import axios from "axios";

export const getContacts = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: "GET_CONTACTS",
    payload: response.data
  });
};

export const getContact = id => async dispatch => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: "GET_CONTACT",
    payload: response.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: "DELETE_CONTACT",
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users/",
    contact
  );
  dispatch({
    type: "ADD_CONTACT",
    payload: response.data
  });
};

export const updateContact = contact => async dispatch => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: "UPDATE_CONTACT",
    payload: response.data
  });
};
