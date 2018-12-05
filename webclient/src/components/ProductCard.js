'use strict';
import React from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
const number = int => int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export default class ProductCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false,
    };
  }

  _flipCard = () => this.setState({isFlipped: !this.state.isFlipped})

  render () {
    const { price, name, img, description } = this.props;
    const priceStr = 'IDR ' + number(price);
    return (
      <div className='flip-container'>
        <ReactCardFlip isFlipped={this.state.isFlipped} style={{userSelect: 'none'}}>
          <div className="card z-depth-3" key='front'>
            <img src={img} onClick={this._flipCard} />
            {/*
            <div>
              <a href="#!"><i className="material-icons icon-btn">favorite_border</i></a>
              <a href="#!" onClick={()=>this._share(this.props)}><i className="material-icons icon-btn">share</i></a>
              <a href="#!" onClick={this._flipCard} className='add-to-cart-container'>
                <i className="material-icons icon-btn green-text green-lighten-3">shopping_basket</i>
                <span className='add-to-cart-plus'>+</span>
              </a>
            </div>
            <div className="divider" />
            */}
            <div style={{textAlign:'right', paddingRight:5}}  onClick={this._flipCard}>
            {/* <div style={{display:'flex', justifyContent: 'space-between'}}  onClick={this._flipCard}> */}
              <h5>{name}</h5><span>{priceStr}</span>
           </div>
          </div>


          <div className="card z-depth-3" key='back' onClick={this._flipCard}>
            <div>
              <img className='flipped' src={img} onClick={this._flipCard} />
              <div style={{position:'absolute', top:0, padding:'.8rem', marginRight:'.8rem'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems: 'baseline'}}>
                  <div style={{width:'67%'}}>
                    <h5 className="truncate">{name}</h5>
                  </div>
                  <span>{priceStr}</span>
                </div>
                <p style={{width:'100%', textAlign: 'justify'}}>
                  {description}
                </p>
              </div>
            </div>
            <div className='' style={{alignItems:'center'}}>
              <Link to="/product" className="waves-effect waves-light btn brown" style={{ width:'100%', marginTop:13}}>
                <i className="material-icons left">send</i>
                <span>BOOK</span>
              </Link>
            </div>

          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

  // _share = (product = this.props) => {
  //   if (navigator.share) {
  //     navigator.share({
  //       title: product.name,
  //       text: 'Check out Web Fundamentals — it rocks!',
  //       url: 'https://flora-247.firebaseapp.com/' + product.url,
  //     }).then( () => console.log('Successful share') )
  //       .catch( error => console.log('Error sharing', error));
  //   } else {
  //     ( url => prompt(
  //       "Share product link", "flora-247.firebaseapp.com" + url
  //     ) ) (product.url);
  //   }
  // }
