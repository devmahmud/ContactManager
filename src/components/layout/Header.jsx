import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fa fa-address-book me-2"></i>
          {props.header}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-home me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fa fa-plus me-1"></i> Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fa fa-info-circle me-1"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  header: 'Contact Manager',
};

export default Header;
