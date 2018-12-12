'use strict';
import React from "react";
import { Link } from "react-router-dom";
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { number } from '../services/formatter';

export default class ProductCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLightboxVisible: false,
    };
    this.toggleLightboxVisibility = this.toggleLightboxVisibility.bind(this);
  }

  toggleLightboxVisibility() {
    this.setState({isLightboxVisible: !this.state.isLightboxVisible});
  }

  // _share = (product = this.props) => {
  //   if (navigator.share) {
  //     navigator.share({
  //       title: product.name,
  //       text: 'Buké Studio for fresh flower bouquet',
  //       url: 'https://flora-247.firebaseapp.com/' + product.url,
  //     }).then( () => console.log('Successful share') )
  //       .catch( error => console.log('Error sharing', error));
  //   } else {
  //     ( url => prompt(
  //       "Share product link", "flora-247.firebaseapp.com" + url
  //     ) ) (product.url);
  //   }
  // }

  render () {
    const { price, name, img, description } = this.props;
    const priceStr = 'IDR ' + number(price);
    return (
      <div className='flip-container' style={{userSelect: 'none'}}>
        <div className="card z-depth-3">
          <img src={img} onClick={() => this.toggleLightboxVisibility()} />
          <div style={{paddingLeft:5}}>
            <h5>{name}</h5><span>{priceStr}</span>
          </div>
          <Link to="/form/card" className="waves-effect waves-light btn brown" style={{ width:'100%', marginTop:13}}>
            BOOK
          </Link>
        </div>

        {isLightboxVisible && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.toggleLightboxVisibility()}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

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
