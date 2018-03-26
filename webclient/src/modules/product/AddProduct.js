'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { addProduct } from "./productController";
// const path = '/webclient/src/pages/Product';


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

@observer
class AddProduct extends React.Component {

  formModel = {
    description: '',
    name: '',
    price: '',
    instagramUrl: '',
  }

  createEmptyForm = () => ({ ...this.formModel });

  @observable form = this.createEmptyForm()

  @action
  _onSubmit = e => {
    e.preventDefault();
    //// manually get tags' value
    this.form.tags = this.refs.tags.value.split(', ');
    addProduct(this.form).then( r => {
      alert('successfully added product '+this.form+' with id '+r)
      this.form = this.createEmptyForm();
    });
  }

  @action
  _inputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.form[name] = newValue;
  }

  render () {
    return (
      <form action='someDummyActionToAdjustKeyboardButtonProperly' onSubmit={this._onSubmit}>
        <div className="row container">
          <h5 className='col s12'>Add Product</h5>

          <div className="col s12">
            <InputField fieldName='instagramUrl' label='Instagram Post URL' arrayOfFields={this.form} />
          </div>

          <div className="input-field col s12">
            <label htmlFor="name">Name</label>
            <input id='name' name='name' type='text' className='filled-in' required
              value={this.form.name} onChange={this._inputChange} />
          </div>
          
          <div className="col s12">
            <InputField fieldName='price' type='number' arrayOfFields={this.form} required/>
          </div>

          <div className='col s12 input-field'>
            <label>Tags</label>
            <div className='chips chips-autocomplete'/>
          </div>
          <input id='chips_input' name='tags' type='hidden' onChange={this._inputChange} ref='tags' />

          <div className="input-field col s12">
            <label htmlFor="description">Description (optional)</label>
            <textarea id="description" name="description" className="materialize-textarea"
              onChange={this._inputChange} value={this.form.description} >
            </textarea>
          </div>


          <div className="col s12" style={{marginTop: 10}}>
            <input type="submit" className="btn red fullwidth" value="add to basket" />
          </div>

        </div>
      </form>
    );
  }
}

@observer
class InputField extends React.Component {
  render () {
    let { fieldName, arrayOfFields, required, label, type, formatter } = this.props;
    let value = arrayOfFields[fieldName];
    return(
      <div className={'input-field '.concat(this.props.className)}>
        <label htmlFor={fieldName} >
          {label || capitalizeFirstLetter(fieldName)}
        </label>
        <input id={fieldName} name={fieldName} type={type||'text'}
          className='filled-in' required={required} value={value}
          onChange={this._inputChange} ref='input'/>
      </div>
    );
  }

  @action
  _inputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    if (type === 'number') this._commify(value);
    this.props.arrayOfFields[name] = newValue;
  }

  _commify = value => {
    var chars = value.split("").reverse()
    var withCommas = []
    for(var i = 1; i <= chars.length; i++ ) {
      withCommas.push(chars[i-1])
      if(i%3==0 && i != chars.length ){  
        withCommas.push(".")
      }
    }
    var val = withCommas.reverse().join("")
    this.refs.input.parentNode.setAttribute("comma-value",val)
  }

}

export default AddProduct;