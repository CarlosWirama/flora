'use strict';
import React from "react";
import { Link } from "react-router-dom";

import { CardFormWords } from 'constants/displayTexts';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: '',
      dontUseCard: '',
      requestBlankCard: '',
    };
  }

  _onInputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({[name]: newValue});
  }

  _onSubmit = e => {
    e.preventDefault();
  }

  _onRadioCheckboxChanged = e => {
    if (e.target.name == 'dontUseCard')
      this.setState({ requestBlankCard: false });
    else if (e.target.name == 'requestBlankCard')
      this.setState({ dontUseCard: false });
    this._onInputChange(e);
  }

  _cardAreaClicked = () => {
    this.refs.cardContent.disabled = false;
    this.refs.cardContent.focus();
    this.setState({
      dontUseCard: false,
      requestBlankCard: false,
    });
  }

  render () {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="row container">
          <h5>{CardFormWords.GREETING_CARD}</h5>

          <div className="input-field col s12">
            <input id="dontUseCard" name="dontUseCard" type="checkbox"
              onChange={this._onRadioCheckboxChanged}
              checked={this.state.dontUseCard} class="filled-in" />
            <label htmlFor="dontUseCard">{CardFormWords.DONT_USE_CARD}</label>
          </div>

          <div className="input-field col s12">
            <input id="requestBlankCard" name="requestBlankCard" type="checkbox"
              onChange={this._onRadioCheckboxChanged}
              checked={this.state.requestBlankCard} class="filled-in" />
            <label htmlFor="requestBlankCard">{CardFormWords.REQUEST_BLANK_CARD}</label>
          </div>

          <div className="input-field col s12" onClick={this._cardAreaClicked}>
            <textarea name="cardContent" className="materialize-textarea"
              value={this.state.cardContent} onChange={this._onInputChange}
              disabled={this.state.dontUseCard || this.state.requestBlankCard}
              ref="cardContent">
            </textarea>
          </div>

          <div className="col s12" style={{marginTop: 10}}>
            <Link to={"/form/delivery"} className="btn btn-large red fullwidth waves-effect waves-light" >
              {CardFormWords.NEXT}
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
