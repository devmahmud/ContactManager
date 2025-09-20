import React from 'react';

export default function About() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <div className="card-body p-5">
            <div className="text-center mb-4">
              <i className="fa fa-address-book fa-4x text-primary mb-3"></i>
              <h1 className="display-4 fw-bold text-primary">Contact Manager</h1>
              <p className="lead text-muted">A modern, responsive contact management application</p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <i className="fa fa-rocket fa-2x text-success me-3 mt-1"></i>
                  <div>
                    <h5 className="fw-bold">Fast & Modern</h5>
                    <p className="text-muted">
                      Built with React 18, Vite, and Bootstrap 5 for optimal performance and user
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <i className="fa fa-mobile fa-2x text-info me-3 mt-1"></i>
                  <div>
                    <h5 className="fw-bold">Responsive Design</h5>
                    <p className="text-muted">
                      Fully responsive design that works perfectly on desktop, tablet, and mobile
                      devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <i className="fa fa-shield-alt fa-2x text-warning me-3 mt-1"></i>
                  <div>
                    <h5 className="fw-bold">State Management</h5>
                    <p className="text-muted">
                      Powered by Redux for predictable state management and better data flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="d-flex align-items-start">
                  <i className="fa fa-bell fa-2x text-danger me-3 mt-1"></i>
                  <div>
                    <h5 className="fw-bold">Real-time Feedback</h5>
                    <p className="text-muted">
                      Toast notifications and loading states provide instant feedback for all user
                      actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="text-center">
              <h5 className="fw-bold mb-3">Features</h5>
              <div className="row">
                <div className="col-md-4 mb-2">
                  <i className="fa fa-plus-circle text-success me-2"></i>
                  Add Contacts
                </div>
                <div className="col-md-4 mb-2">
                  <i className="fa fa-edit text-warning me-2"></i>
                  Edit Contacts
                </div>
                <div className="col-md-4 mb-2">
                  <i className="fa fa-trash text-danger me-2"></i>
                  Delete Contacts
                </div>
                <div className="col-md-4 mb-2">
                  <i className="fa fa-search text-info me-2"></i>
                  View Details
                </div>
                <div className="col-md-4 mb-2">
                  <i className="fa fa-list text-primary me-2"></i>
                  Contact List
                </div>
                <div className="col-md-4 mb-2">
                  <i className="fa fa-mobile text-secondary me-2"></i>
                  Mobile Friendly
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="text-center">
              <p className="text-muted mb-2">
                <strong>Version:</strong> 2.0.0
              </p>
              <p className="text-muted mb-0">
                <strong>Built with:</strong> React, Redux, Vite, Bootstrap 5, React Router v6
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
