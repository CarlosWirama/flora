'use strict';

import React from "react";
import { Link } from "react-router-dom";

const path = '/webclient/src/pages/Product';
const Product = () => (
  <div>
    <img src={path + "/krisan.jpg"} width="100%" />
    <div className="carousel carousel-slider center" data-indicators="true">
      <div className="carousel-item red white-text" href="#one!">
        <img src={path + "/krisan.jpg"} />
      </div>
      <div className="carousel-item amber white-text" href="#two!">
        <h2>Second Panel</h2>
        <p className="white-text">This is your second panel</p>
      </div>
      <div className="carousel-item green white-text" href="#three!">
        <h2>Third Panel</h2>
        <p className="white-text">This is your third panel</p>
      </div>
      <div className="carousel-item blue white-text" href="#four!">
        <h2>Fourth Panel</h2>
        <p className="white-text">This is your fourth panel</p>
      </div>
    </div>

    <div className="container">
      <h5>Chrysanthemum</h5>
      This is a tag line!<br/>

      {/*<!-- IDR 440.000 &nbsp;&nbsp; for &nbsp;
      <div className="input-field inline">
        <input type="date" name="deliveryDate" id="deliveryDate" placeholder="Delivery Date" style="height: 1rem">
      </div> -->*/}

      <div className="row">
        <div className="col s4">
          <input type="date" name="deliveryDate" id="deliveryDate" className="datepicker" placeholder="Delivery Date" />
          slkfj lskajfd
        </div>
        <div className="col s8">
          <div className="col s12">
            <input className="with-gap" name="size" type="radio" id="sizeS"/>
            <label htmlFor="sizeS">Small - 200</label>
          </div>
          <div className="col s12">
            <input className="with-gap" name="size" type="radio" id="sizeM"/>
            <label htmlFor="sizeM">Medium - 320</label>
          </div>
          <div className="col s12">
            <input className="with-gap" name="size" type="radio" id="sizeL"/>
            <label htmlFor="sizeL">Large - 550</label>
          </div>
          <div className="col s12">
            <input className="with-gap" name="size" type="radio" id="sizeCustom" disabled />
            <label htmlFor="sizeCustom"><a href="#">Login</a> for custom price</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col s6">
        {/*<!-- TODO blom -->*/}
          <button className="btn fullwidth waves-effect waves-light" style={{padding: "0 1.8rem"}}>
            <i className="material-icons left">favorite_border</i>LOVE
          </button>
        </div>
        <div className="col s6">
          <button className="btn fullwidth waves-effect waves-light" style={{padding: '0 1.8rem'}}>
            <i className="material-icons left">share</i>SHARE
          </button>
        </div>
      </div>
      <div className="row" style={{marginTop: 10}}>
        <div className="col s12">
          <a href="#!/product/1/pick/step1" className="btn btn-large red fullwidth waves-effect waves-light">
            <b>PICK</b>
          </a>
        </div>
      </div>
      <p className="caution-box">
        <i className="material-icons orange-text">warning</i>
        <b className="red-text">CAUTION!</b> 
        <b>caution text</b>
        lorem ipsum dolor sit amet caution text lorem ipsum dolor sit amet
      </p>
      <p>description text lorem ipsum dolor sit amet</p>
    </div>

    <pageFooter/>
  </div>
);

export default Product;