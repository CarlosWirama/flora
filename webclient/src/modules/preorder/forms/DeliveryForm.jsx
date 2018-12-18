'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { CommonWords, FormWords } from 'constants/displayTexts';

@observer
class DeliveryForm extends React.Component {

  @observable address = ""
  @observable isRecipient = false

  @action
  _inputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this[name] = newValue;
  }

  _onSubmit = e => {
    e.preventDefault();
    console.log(this.address);
    console.log(this.isRecipient);
  }

  render () {
    return (
      <form onSubmit={ () => console.log('a') }>
        <div className="row container">
          <h5>{CommonWords.DELIVERY}</h5>
          <div>

      {/*<!--       <input id="pac-input" className="controls" type="text" placeholder="Search Box">
            <div id="map"></div> -->*/}

          </div>
          <div className="input-field col s12">
            <textarea id="address" name="address" className="materialize-textarea" required="required"
            value={this.address} onChange={this._inputChange} autoFocus />
            <label htmlFor="address">{FormWords.DELIVERY_ADDRESS}</label>
          </div>
          <div className="input-field col s6">
            <input id="recipients-name" name="recipients-name" type="text" required="required"/>
            <label htmlFor="recipients-name">{FormWords.RECIPIENT_NAME}</label>
          </div>
          <div className="input-field col s6">
            <input id="recipients-phone" name="recipients-phone" type="text" required="required"/>
            <label htmlFor="recipients-phone">{FormWords.RECIPIENT_PHONE}</label>
          </div>
          <div className="input-field col s6">
            <label htmlFor="deliveryDate" className="active">{FormWords.DELIVERY_DATE}</label>
            <input type="date" name="deliveryDate" id="deliveryDate"/>
          </div>
          <div className="input-field col s6">
            <label htmlFor="deliveryHour" className="active">{FormWords.DELIVERY_TIME}</label>
            <input type="time" name="deliveryHour" id="deliveryHour"/>
          </div>

          <div className="input-field col s12">
            <textarea id="instruction" name="instruction" className="materialize-textarea" style={{marginBottom: 0}}></textarea>
            <label htmlFor="instruction">{FormWords.DELIVERY_INSTRUCTION}</label>
            <span className="grey-text" style={{fontSize: '.8rem'}}>{FormWords.WE_WILL_TRY_OUR_BEST}</span>
          </div>

          <div className="col s12" style={{marginTop: 10}}>
            <Link to={'/form/customer'} className="btn btn-large red fullwidth waves-effect waves-light" >
              {FormWords.PROCEED}
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
export default DeliveryForm;