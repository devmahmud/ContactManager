import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextInputGroup from '../layout/TextInputGroup';
import LoadingSpinner from '../layout/LoadingSpinner';
import { addContact } from '../../actions/contactActions';

function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.contact);

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

    const newContact = {
      name,
      email,
      phone,
    };

    //// SUBMIT CONTACT ////
    dispatch(addContact(newContact));

    // Clear State
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});

    //Redirect to home
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
        <h4 className="mb-0">Add Contact</h4>
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
                  <span className="ms-2">Adding Contact...</span>
                </>
              ) : (
                <>
                  <i className="fa fa-plus me-2"></i>Add Contact
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
