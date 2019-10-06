import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          {props.header}
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/add">
              <i className="fa fa-plus"></i> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fa fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  header: "Contact Manager"
};

export default Header;
