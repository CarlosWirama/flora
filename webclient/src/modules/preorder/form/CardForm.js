'use strict';
import React from "react";
import { Link } from "react-router-dom";

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: '',
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
          <h5>Card</h5>

          <div className="input-field col s12">
            <textarea name="cardContent" className="materialize-textarea"
            value={this.state.cardContent} onChange={this._onInputChange} />
          </div>
          <div className="col s12" style={{marginTop: 10}}>
            <Link to={"/form/delivery"} className="btn btn-large red fullwidth waves-effect waves-light" >
              continue
            </Link>
          </div>
        </div>
      </form>
    );
  }
}