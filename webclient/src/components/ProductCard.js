'use strict';

import React from "react";
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';

const path = '/webclient/src/pages/Home';

export default class ProductCard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false,
    };
  }

  _flipCard = () => this.setState({isFlipped: !this.state.isFlipped})

  _share = (product = this.props) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: 'Check out Web Fundamentals — it rocks!',
        url: 'https://flora-247.firebaseapp.com/' + product.url,
      }).then( () => console.log('Successful share') )
        .catch( error => console.log('Error sharing', error));
    } else {
      ( url => prompt(
        "Share product link", "flora-247.firebaseapp.com" + url
      ) ) (product.url);
    }
  }

  render () {
    return (
      <div className='flip-container'>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div className="card" key='front'>
            <img src={this.props.img} onClick={this._flipCard} />
            <div>
              <a href="#!"><i className="material-icons icon-btn">favorite_border</i></a>
              <a href="#!" onClick={()=>this._share(this.props)}><i className="material-icons icon-btn">share</i></a>
              <a href="#!" onClick={this._flipCard}><i className="material-icons icon-btn right">info_outline</i></a>
            </div>
            <div className="divider" />

    { /*this.props.isButtonRight ?*/
            <div style={{display:'flex', justifyContent: 'space-between'}}>
              <div className='left'>
                <h5 className="truncate">{this.props.name}</h5>
                <span>IDR {this.props.price}</span>
              </div>
              <Link to="/product" className="waves-effect waves-light btn brown right" style={{marginTop:15,marginLeft: 5,paddingTop:4, width:'100%'}}>
                <i className="material-icons left">send</i>
                <span>BOOK</span>
              </Link>
              <div style={{clear:'left'}}/>
           </div>
  /*  :
           <div>
              <h5 className='left'>{this.props.name}</h5>
              <h5 className='right'>IDR {this.props.price}</h5>
              <Link to="/product" className=" waves-effect waves-light btn brown" style={{marginTop:5, width:'100%', padding: '0 80'}}>
                <i className="material-icons left">send</i>
                <span>BOOK</span>
              </Link>
           </div>*/
    }
          </div>


          <div className="card" key='back' onClick={this._flipCard}>
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

    { /*this.props.isButtonRight ?*/
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
    /*:
            <div>
              <h5 className='left'>{this.props.name}</h5>
              <h5 className='right'>IDR {this.props.price}</h5>
              <Link to="/product" className=" waves-effect waves-light btn brown" style={{marginTop:5, width:'100%', padding: '0 80'}}>
                <i className="material-icons left">send</i>
                <span>BOOK</span>
              </Link>
            </div>*/
    }
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}