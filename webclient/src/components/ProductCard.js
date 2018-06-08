'use strict';

import React from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import { number } from '../services/formatter';
import ReactImageMagnify from 'react-image-magnify';

// const path = '/webclient/src/pages/Home';

export default class ProductCard extends React.Component {

  constructor () {
    super()
    this.state = {
      isFlipped: false,
    };
  }

  _flipCard = () => this.setState({isFlipped: !this.state.isFlipped})

  _share = (product = this.props) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: 'Buké Studio for fresh flower bouquet',
        url: 'https://flora-247.firebaseapp.com/' + product.url,
      }).then( () => console.log('Successful share') )
        .catch( error => console.log('Error sharing', error));
    } else {
      ( url => prompt(
        "Share product link", "flora-247.firebaseapp.com" + url
      ) ) (product.url);
    }
  }

  _mouseMove = e => {}//console.log(e.clientX)

  render () {
    let price = 'IDR ' + number(this.props.price);
    return (
      <div className='flip-container'>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div className="card z-depth-3" key='front'>
            <img src={this.props.img} onClick={this._flipCard} />
            <div>
              <a href="#!"><i className="material-icons icon-btn">favorite_border</i></a>
              <a href="#!" onClick={()=>this._share(this.props)}><i className="material-icons icon-btn">share</i></a>
              <a href="#!" onClick={this._flipCard} className='add-to-cart-container'>
                <i className="material-icons icon-btn green-text green-lighten-3">shopping_basket</i>
                <span className='add-to-cart-plus'>+</span>
              </a>
            </div>
            <div className="divider" />
            <div style={{display:'flex', justifyContent: 'space-between'}}  onClick={this._flipCard}>
              {/*<div className='left'>*/}
              <div>
                <h5>{this.props.name}</h5>
                <span>{price}</span>
              </div>
              {/*<Link to="/product" className="waves-effect waves-light btn brown right" style={{marginTop:15,marginLeft: 5,paddingTop:4, width:'100%'}}>
                <i className="material-icons left">send</i>
                <span>BOOK</span>
              </Link>
              <div style={{clear:'left'}}/>*/}
           </div>
          </div>


          <div className="card z-depth-3" key='back' onClick={this._flipCard} onMouseMove={this._mouseMove}>
            <div>
              <img className='flipped' src={this.props.img} onClick={this._flipCard} />
              <div style={{position:'absolute', top:0}}>
                <p style={{width:'100%'}}>
                  {this.props.description}
                </p>
              </div>
            </div>
            <a href="#!"><i className="material-icons icon-btn">arrow_backs</i></a>
            <div className="divider" />
            <div style={{ display:'flex', justifyContent:'space-between'}}>
              <div style={{width:'47%'}}>
                <h5 className="truncate">{this.props.name}</h5>
                <span>{price}</span>
              </div>
              <div className='' style={{alignItems:'center'}}>
                <Link to={{pathname:'/product', state:{...this.props}}} className="waves-effect waves-light btn brown" style={{ width:'100%', marginTop:13}}>
                  <i className="material-icons left">send</i>
                  <span>BOOK</span>
                </Link>
              </div>
            </div>

          </div>
        </ReactCardFlip>

        <div className="card z-depth-3" style={{visibility:'hidden'}}>
          <img src={this.props.img} onClick={this._flipCard} />
          <div>
            <a href="#!"><i className="material-icons icon-btn">favorite_border</i></a>
            <a href="#!" onClick={()=>this._share(this.props)}><i className="material-icons icon-btn">share</i></a>
            <a href="#!" onClick={this._flipCard} className='add-to-cart-container'>
              <i className="material-icons icon-btn green-text green-lighten-3">shopping_basket</i>
              <span className='add-to-cart-plus'>+</span>
            </a>
          </div>
          <div className="divider" />
          <div style={{display:'flex', justifyContent: 'space-between'}}  onClick={this._flipCard}>
            {/*<div className='left'>*/}
            <div>
              <h5>{this.props.name}</h5>
              <span>{price}</span>
            </div>
            {/*<Link to="/product" className="waves-effect waves-light btn brown right" style={{marginTop:15,marginLeft: 5,paddingTop:4, width:'100%'}}>
              <i className="material-icons left">send</i>
              <span>BOOK</span>
            </Link>
            <div style={{clear:'left'}}/>*/}
         </div>
        </div>

      </div>
    );
  }
}