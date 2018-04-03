'use strict';

import React from "react";
import { Link } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { getProducts } from "./productController";

export const SearchModalTrigger = props =>
  <a id='search-modal-trigger' href="#modalSearch" className={"flex modal-trigger "+props.className}>
    <i className="material-icons prefix">search</i>
    <input value={props.text} disabled style={{height:'2rem', margin:'0'}}/>
  </a>

@observer
export default class SearchModal extends React.Component {

  @observable query = ''

  @action
  _searchInputChange = e => this.query = e.target.value

  @action
  _addQuery = query => {
    this.searchInput.focus();
    let re = new RegExp(`\\b${query}\\b`, "i");
    if (!re.test(this.query)) return this.query += ` ${query} `;
  }

  @action
  _clearQuery = () => { this.query = ''; this.searchInput.focus(); }

  _search = () => getProducts(
    this.query.split(/\b/).filter( item => /\w/.test(item) )
  ).then( r => console.log(r) ).catch( err => console.error(err) )

  render () {
    return (
    	<div id="modalSearch" className="modal bottom-sheet" style={{minHeight:'100%'}}>
        <nav className='navbar-fixed z-depth-1'>
          <div className='nav-wrapper container flex'>
            <a href='#!' className='modal-action modal-close'>
              <i className="material-icons icon-btn" style={{width:44}}>arrow_backs</i>
            </a>
            <input className='search-input' ref={ e => this.searchInput = e } type='text'
              value={this.query}
              onChange={this._searchInputChange}
              placeholder='describe your dream buké...'
            />
            { this.query &&
              <div className='waves-effect waves-light' style={{display:'inline-block'}}>
                <i className="material-icons icon-btn" onClick={this._clearQuery}>close</i>
              </div>
            }
          </div>
        </nav>

        <div className='section container'>

          <div className='search-options'>
            <h6>Flower</h6>
            <div className='search-param-options'>
              <div className='chip waves-effect' onClick={()=>this._addQuery('rose')}><img src="/webclient/src/pages/Product/krisan.jpg"/>Rose</div>
              <div className='chip waves-effect' onClick={()=>this._addQuery('lily')}><img src="/webclient/src/pages/Product/krisan.jpg"/>Lily</div>
              <div className='chip waves-effect' onClick={()=>this._addQuery('tulip')}><img src="/webclient/src/pages/Product/krisan.jpg"/>Tulip</div>
              <div className='chip waves-effect' onClick={()=>this._addQuery('chrysant')}><img src="/webclient/src/pages/Product/krisan.jpg"/>Chrysant</div>
            </div>
          </div>
          <div className='search-options'>
            <h6>Color Theme</h6>
            <div className='search-param-options'>
              <div className='color-bubble waves-effect red darken-4' onClick={()=>this._addQuery('red')} />
              <div className='color-bubble waves-effect pink lighten-2' onClick={()=>this._addQuery('pink')} />
              <div className='color-bubble waves-effect pink lighten-4' onClick={()=>this._addQuery('softpink')} />
              <div className='color-bubble waves-effect white' onClick={()=>this._addQuery('white')} />
              <div className='color-bubble waves-effect yellow' onClick={()=>this._addQuery('yellow')} />
              <div className='color-bubble waves-effect light-green lighten-3' onClick={()=>this._addQuery('green')} />
              <div className='color-bubble waves-effect purple lighten-3' onClick={()=>this._addQuery('purple')} />
              <div className='color-bubble waves-effect orange lighten-1' onClick={()=>this._addQuery('orange')} />
              <div className='color-bubble waves-effect blue lighten-4' onClick={()=>this._addQuery('blue')} />
            </div>
          </div>
          <div className='search-options'>
            <h6>Your Recent Search</h6>
            <div className='list flex waves-effect'>salfjf</div>
            <div className='list flex waves-effect'>salfjf</div>
          </div>
          <div className='search-options'>
            <h6>Popular Search</h6>
            <div className='list flex waves-effect'>salfjf</div>
            <div className='list flex waves-effect'>salfjf</div>
          </div>
        </div>

        <CTAButton onClick={this._search}/>
      </div>
    )
  }
}

const CTAButton = props => (
  <button className='cta-button fullwidth btn waves-effect waves-light' onClick={props.onClick}>
    blablabla
  </button>
)

