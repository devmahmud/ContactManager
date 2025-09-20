import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';
import ConfirmationModal from '../layout/ConfirmationModal';

function Contact({ contact }) {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contact);

  const { id, name, email, phone } = contact;

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    setShowDeleteModal(false);
    setDeleting(true);
    await dispatch(deleteContact(id));
    setDeleting(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="card mb-3 shadow-sm">
        <div className="card-header bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-primary">
              <i className="fa fa-user me-2"></i>
              {name}
            </h5>
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => setShowContactInfo(!showContactInfo)}
                title={showContactInfo ? 'Hide details' : 'Show details'}
              >
                <i className={`fa fa-chevron-${showContactInfo ? 'up' : 'down'}`}></i>
              </button>
              <Link
                to={`contact/edit/${id}`}
                className="btn btn-sm btn-outline-warning"
                title="Edit contact"
              >
                <i className="fa fa-pencil"></i>
              </Link>
              <button
                className={`btn btn-sm ${
                  deleting ? 'btn-outline-secondary' : 'btn-outline-danger'
                }`}
                onClick={deleting ? undefined : handleDeleteClick}
                disabled={deleting}
                title={deleting ? 'Deleting...' : 'Delete contact'}
              >
                <i className={`fa ${deleting ? 'fa-spinner fa-spin' : 'fa-trash'}`}></i>
              </button>
            </div>
          </div>
        </div>
        {showContactInfo && (
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-envelope text-muted me-2"></i>
                  <span className="fw-medium">Email:</span>
                  <span className="ms-2">{email}</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-phone text-muted me-2"></i>
                  <span className="fw-medium">Phone:</span>
                  <span className="ms-2">{phone}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ConfirmationModal
        show={showDeleteModal}
        onHide={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Contact"
        message={`Are you sure you want to delete "${name}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        loading={deleting}
      />
    </>
  );
}

export default Contact;
