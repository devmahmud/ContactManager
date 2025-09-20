import axios from 'axios';
import { showSuccess, showError } from '../services/toastService';

export const getContacts = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_CONTACTS_START' });
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: 'GET_CONTACTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_CONTACTS_ERROR',
      payload: error.message,
    });
    showError('Failed to load contacts');
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_CONTACT_START' });
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: 'GET_CONTACT_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_CONTACT_ERROR',
      payload: error.message,
    });
    showError('Failed to load contact details');
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_CONTACT_START' });
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: 'DELETE_CONTACT_SUCCESS',
      payload: id,
    });
    showSuccess('Contact deleted successfully');
  } catch (error) {
    dispatch({
      type: 'DELETE_CONTACT_ERROR',
      payload: error.message,
    });
    showError('Failed to delete contact');
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_CONTACT_START' });
    const response = await axios.post('https://jsonplaceholder.typicode.com/users/', contact);
    dispatch({
      type: 'ADD_CONTACT_SUCCESS',
      payload: response.data,
    });
    showSuccess('Contact added successfully');
  } catch (error) {
    dispatch({
      type: 'ADD_CONTACT_ERROR',
      payload: error.message,
    });
    showError('Failed to add contact');
  }
};

export const updateContact = (contact) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_CONTACT_START' });
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${contact.id}`,
      contact
    );
    dispatch({
      type: 'UPDATE_CONTACT_SUCCESS',
      payload: response.data,
    });
    showSuccess('Contact updated successfully');
  } catch (error) {
    dispatch({
      type: 'UPDATE_CONTACT_ERROR',
      payload: error.message,
    });
    showError('Failed to update contact');
  }
};

export const clearError = () => ({
  type: 'CLEAR_ERROR',
});
