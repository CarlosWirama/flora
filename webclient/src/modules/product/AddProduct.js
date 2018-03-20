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
      <form onSubmit={this._onSubmit} >
        <div className="row container">
          <h5 className='col s12'>Add Product</h5>

          <div className="input-field col s12">
            <label htmlFor="name">Name</label>
            <input id='name' name='name' type='text' className='filled-in' required
              value={this.form.name} onChange={this._inputChange} />
          </div>
          
          <div className="col s12">
            <InputField fieldName='price' arrayOfFields={this.form} required/>
          </div>

          <div className="col s12">
            <InputField fieldName='instagramUrl' label='Instagram Post URL' arrayOfFields={this.form} />
          </div>

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
    let { fieldName, arrayOfFields, required, label } = this.props;
    return(
      <div className='input-field'>
        <label htmlFor={fieldName} >
          {label || capitalizeFirstLetter(fieldName)}
        </label>
        <input id={fieldName} name={fieldName} type='text' className='filled-in' required={required}
          value={arrayOfFields[fieldName]} onChange={this._inputChange} />
      </div>
    );
  }

  @action
  _inputChange = e => {
    const {name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.props.arrayOfFields[name] = newValue;
  }
}

export default AddProduct;