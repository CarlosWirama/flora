'use strict';

import React from "react";
import { Link } from "react-router-dom";

const path = '/webclient/src/pages/Home';

export default class ProductCard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      openInfo: false,
      flipCard: false,
    };
  }

  render () {
    let {openInfo} = this.state;
    return (
      <div className="card">
        <a>
          <img src={this.props.img} />
        </a>
        <div>
          <a href="#!" className="icon"><i className="material-icons">favorite_border</i></a>
          <a href="#!" className="icon"><i className="material-icons">share</i></a>
          <a href="#!" className="icon"><i className="material-icons right">{openInfo ? 'info' : 'info_outline'}</i></a>
        </div>
        <div className="divider"></div>

{ this.props.isButtonRight ?
  <div style={{display:'flex'}}>
        <div className='left'>
          <h5 className="truncate">{this.props.name}</h5>
          <span>IDR {this.props.price}</span>
        </div>
        <Link to="/product" className="right waves-effect waves-light btn brown" style={{marginTop:15,marginLeft: 5,padding:'4 0 0', width:'100%'}}>
          {/*<i className="material-icons left">send</i>*/}
          <span>BOOK</span>
        </Link>
        <div style={{clear:'left'}}/>
  </div>
:
  <div>
        <h5 className='left'>{this.props.name}</h5>
        <h5 className='right'>IDR {this.props.price}</h5>
        <Link to="/product" className=" waves-effect waves-light btn brown" style={{marginTop:5, width:'100%', padding: '0 80'}}>
          <i className="material-icons left">send</i>
          <span>BOOK</span>
        </Link>
  </div>
}
      </div>
    );
  }
}