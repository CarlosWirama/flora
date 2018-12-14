'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

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
          <h5>Delivery</h5>
          <div>

      {/*<!--       <input id="pac-input" className="controls" type="text" placeholder="Search Box">
            <div id="map"></div> -->*/}

          </div>
          <div className="input-field col s12">
            <textarea id="address" name="address" className="materialize-textarea" required="required"
            value={this.address} onChange={this._inputChange} autoFocus />
            <label htmlFor="address">Address</label>
          </div>
          <div className="col s6">
            <input
              type='checkbox'
              className='filled-in'
              id='isRecipient'
              name='isRecipient'
              checked={this.isRecipient}
              onChange={this._inputChange}
            />
            <label htmlFor="isRecipient" style={{
              lineHeight: 1.4,
              paddingLeft: 30,
            }}>I'm the recipient</label>
          </div>
          <div className="col s6">
            <input type="checkbox" className="filled-in" id="dont-call-recipient" name="dont-call-recipient"/>
            <label htmlFor="dont-call-recipient" style={{
              lineHeight: 1.4,
              paddingLeft: 30,
            }}>Don't call the&nbsp;recipient</label>
          </div>
          <div className="input-field col s6">
            <input id="recipients-name" name="recipients-name" type="text" required="required"/>
            <label htmlFor="recipients-name">Recipient's Name</label>
          </div>
          <div className="input-field col s6">
            <input id="recipients-phone" name="recipients-phone" type="text" required="required"/>
            <label htmlFor="recipients-phone">Recipient's Phone</label>
          </div>
          <div className="input-field col s6">
            <label htmlFor="deliveryDate">Delivery Date</label>
            <input type="date" name="deliveryDate" id="deliveryDate"/>
          </div>
          <div className="input-field col s6">
            <label htmlFor="deliveryHour">Delivery Hour</label>
            <input type="time" name="deliveryHour" id="deliveryHour"/>
          </div>

          <div className="col s12">
            <input type="checkbox" className="filled-in" id="instruction1" name=""/>
            <label htmlFor="instruction1" style={{fontSize: '.9rem !important', lineHeight: 1.7}}>
              If the recipient isn't available upon delivery, please leave the item in front of the door / at&nbsp;receptionist / security guard.
            </label>

            <input type="checkbox" className="filled-in" id="instruction2" name=""/>
            <label htmlFor="instruction2" style={{fontSize: '.9rem !important', lineHeight: 1.7, marginTop: 50}}>Please contact me for further action.</label>

            <br/>
            <input type="checkbox" className="filled-in" id="instruction-other-chk"/>
            <label htmlFor="instruction-other-chk" style={{fontSize: '.9rem !important', lineHeight: 1.7}}>Other :</label>
            {/*<!-- <input id="instruction-other" name="instruction-other" type="text" style="float:left;"> -->*/}
            <div className="input-field inline" style={{width:"auto"}}>
              <input id="instruction-other" name="instruction-other" type="text"/>
            </div>


            <input type="checkbox" className="filled-in" id="prepaid-delivery"/>
            <label htmlFor="prepaid-delivery" style={{fontSize: '.9rem !important', lineHeight: 1.7}}>Bayar beserta ongkir (tarif gocar)</label>
            
          </div>
      {/*<!-- 
          <div className="input-field col s12">
            <textarea id="instruction" name="instruction" className="materialize-textarea" style="margin-bottom: 0"></textarea>
            <label htmlFor="instruction">Delivery Instruction (if any)</label>
            <span className="grey-text" style="font-size: .8rem">We will try our best to fulfill the request without any promises</span>
          </div> -->*/}

          <div className="col s12" style={{marginTop: 10}}>
            <Link to={'/form/customer'} className="btn btn-large red fullwidth waves-effect waves-light" >
              continue
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
export default DeliveryForm;