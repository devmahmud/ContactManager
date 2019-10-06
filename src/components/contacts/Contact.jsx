import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <div className="card mb-2">
        <div className="card-header">
          <h4>
            {name}
            <i
              className="fa fa-sort-down ml-2"
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                })
              }
            ></i>
            <i
              className="fa fa-times"
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={() => this.props.deleteContact(id)}
            ></i>
            <Link to={`contact/edit/${id}`}>
              <i
                className="fa fa-pencil"
                style={{
                  cursor: "pointer",
                  float: "right",
                  color: "black",
                  marginRight: "1rem"
                }}
              />
            </Link>
          </h4>
        </div>
        {this.state.showContactInfo ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteContact }
)(Contact);
