'use strict';
import React from "react";
import { Link } from "react-router-dom";

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
    }
  }

  _onInputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({[name]: newValue});
  }

  _onSubmit = e => {
    e.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="row container">
          <h5>Sender Detail</h5>

          <div className="input-field col s6">
            <input name="sender-name" type="text" required />
            <label htmlFor="sender-name">Sender Name</label>
          </div>
          <div className="input-field col s6">
            <input name="sender-phone" type="text" required />
            <label htmlFor="sender-phone">Sender Phone No.</label>
          </div>
          <div className="input-field col s12">
            <input name="sender-email" type="email" />
            <label htmlFor="sender-email">Billing Email</label>
          </div>

          <div className="col s12" style={{marginTop: 10}}>
            <input type="submit" className="btn btn-large red fullwidth waves-effect waves-light" value="add to basket"/>
          </div>
        </div>
      </form>
    );
  }
}
