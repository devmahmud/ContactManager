const initialState = {
  contacts: [],
  contact: {},
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CONTACTS_START':
    case 'GET_CONTACT_START':
    case 'ADD_CONTACT_START':
    case 'UPDATE_CONTACT_START':
    case 'DELETE_CONTACT_START':
      return { ...state, loading: true, error: null };

    case 'GET_CONTACTS_SUCCESS':
      return { ...state, contacts: action.payload, loading: false };

    case 'GET_CONTACT_SUCCESS':
      return { ...state, contact: action.payload, loading: false };

    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };

    case 'UPDATE_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        loading: false,
      };

    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        loading: false,
      };

    case 'GET_CONTACTS_ERROR':
    case 'GET_CONTACT_ERROR':
    case 'ADD_CONTACT_ERROR':
    case 'UPDATE_CONTACT_ERROR':
    case 'DELETE_CONTACT_ERROR':
      return { ...state, loading: false, error: action.payload };

    case 'CLEAR_ERROR':
      return { ...state, error: null };

    default:
      return state;
  }
}
