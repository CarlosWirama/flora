'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { number } from '../../services/formatter';
import SearchHeader from "../../modules/product/SearchHeader";

const path = '/webclient/src/pages/Product';

export default function Product(props) {
  let details = props.location.state || {};
  let price = 'IDR ' + number(details.price);
  return (
    <main>
      <SearchHeader />
      <img src={details.img} style={{paddingTop:56,width:"100%"}} className="z-depth-1" />

      <div className="container" style={{paddingBottom: 30}}>
        <h5>{details.name}</h5>
        {price}<br/><br/>

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
              <b>BOOK</b>
            </a>
          </div>
        </div>
        {/*<p className="caution-box">
          <i className="material-icons orange-text">warning</i>
          <b className="red-text">CAUTION!</b> 
          <b>caution text</b>
          lorem ipsum dolor sit amet caution text lorem ipsum dolor sit amet
        </p>*/}
        {details.description}
      </div>
    </main>
  );
}

// export default Product;