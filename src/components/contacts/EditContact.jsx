import React, { useState, useEffect } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import LoadingSpinner from '../layout/LoadingSpinner';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getContact, updateContact } from '../../actions/contactActions';

function EditContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { contact, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (contact) {
      setName(contact.name || '');
      setEmail(contact.email || '');
      setPhone(contact.phone || '');
    }
  }, [contact]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Check For Errors
    if (name === '') {
      setErrors({ name: 'Name is required' });
      return;
    }

    if (email === '') {
      setErrors({ email: 'Email is required' });
      return;
    }

    if (phone === '') {
      setErrors({ phone: 'Phone is required' });
      return;
    }

    const updContact = {
      id,
      name,
      email,
      phone,
    };

    dispatch(updateContact(updContact));

    // Clear State
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});

    navigate('/');
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4 className="mb-0">Edit Contact</h4>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <TextInputGroup
            label="Name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={onChange}
            error={errors.name}
          />
          <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={onChange}
            error={errors.email}
          />
          <TextInputGroup
            label="Phone"
            name="phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={onChange}
            error={errors.phone}
          />
          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <>
                  <LoadingSpinner size="sm" text="" />
                  <span className="ms-2">Updating Contact...</span>
                </>
              ) : (
                <>
                  <i className="fa fa-save me-2"></i>Update Contact
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditContact;
