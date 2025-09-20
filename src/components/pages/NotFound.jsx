import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="text-center">
          <div className="mb-4">
            <i className="fa fa-exclamation-triangle fa-5x text-warning"></i>
          </div>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="h3 mb-3">Page Not Found</h2>
          <p className="lead text-muted mb-4">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or
            you entered the wrong URL.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/" className="btn btn-primary">
              <i className="fa fa-home me-2"></i>Go Home
            </Link>
            <Link to="/contact/add" className="btn btn-outline-primary">
              <i className="fa fa-plus me-2"></i>Add Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
