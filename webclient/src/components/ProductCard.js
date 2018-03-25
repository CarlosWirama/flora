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

  render () {
    return (
      <div className='flip-container'>
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div className="card" key='front'>
            <img src={this.props.img} onClick={this._flipCard} />
            <div>
              <a href="#!" className="icon"><i className="material-icons">favorite_border</i></a>
              <a href="#!" className="icon"><i className="material-icons">share</i></a>
              <a href="#!" className="icon" onClick={this._flipCard}><i className="material-icons right">info_outline</i></a>
            </div>
            <div className="divider"></div>

    { /*this.props.isButtonRight ?*/
            <div style={{display:'flex', justifyContent: 'space-between'}}>
              <div className='left'>
                <h5 className="truncate">{this.props.name}</h5>
                <span>IDR {this.props.price}</span>
              </div>
              <Link to="/product" className="right waves-effect waves-light btn brown" style={{marginTop:15,marginLeft: 5,padding:'4 20 0 20'}}>
                {/*<i className="material-icons left">send</i>*/}
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
                Thrilling and exciting at the same time, to set eyes on this charming bouquet is like being stranded in a mysterious islands belongs to mermaids and mystical creatures. The captivating pink roses bouquet is suitable for any special occasion.
                </p>
              </div>
            </div>
            <a href="#!" className="icon"><i className="material-icons">arrow_backs</i></a>
            <div className="divider"></div>

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