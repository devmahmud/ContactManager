import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import LoadingSpinner from '../layout/LoadingSpinner';
import { getContacts } from '../../actions/contactActions';

function Contacts() {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">
            <span className="text-danger">Contact</span> List
          </h1>
          <Link to="/contact/add" className="btn btn-primary">
            <i className="fa fa-plus me-2"></i>Add Contact
          </Link>
        </div>
        <div className="text-center py-5">
          <LoadingSpinner size="lg" text="Loading contacts..." />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0">
            <span className="text-danger">Contact</span> List
          </h1>
          <Link to="/contact/add" className="btn btn-primary">
            <i className="fa fa-plus me-2"></i>Add Contact
          </Link>
        </div>
        <div className="alert alert-danger" role="alert">
          <i className="fa fa-exclamation-triangle me-2"></i>
          {error}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">
          <span className="text-danger">Contact</span> List
        </h1>
        <Link to="/contact/add" className="btn btn-primary">
          <i className="fa fa-plus me-2"></i>Add Contact
        </Link>
      </div>
      {contacts.length === 0 ? (
        <div className="text-center py-5">
          <i className="fa fa-users fa-3x text-muted mb-3"></i>
          <h4 className="text-muted">No contacts found</h4>
          <p className="text-muted">Get started by adding your first contact!</p>
          <Link to="/contact/add" className="btn btn-primary">
            <i className="fa fa-plus me-2"></i>Add Your First Contact
          </Link>
        </div>
      ) : (
        contacts.map((contact) => <Contact contact={contact} key={contact.id} />)
      )}
    </>
  );
}

export default Contacts;
