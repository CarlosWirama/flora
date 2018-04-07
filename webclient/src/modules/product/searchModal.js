'use strict';

import React from "react";
import { Link, withRouter } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { getProducts } from "./productController";
import { Modal } from 'react-materialize';
import { CSSTransition } from 'react-transition-group';

const SearchModal = withRouter(props => <SearchModalLayout {...props}/>);

@observer
class SearchModalLayout extends React.Component {

  @observable query = ''

  @action _searchInputChange = e => this.query = e.target.value

  @action
  _addQuery = query => {
    this.searchInput.focus();
    let re = new RegExp(`\\b${query}\\b`, "i");
    if (!re.test(this.query)) return this.query += ` ${query} `;
  }

  @action
  _clearQuery = () => { this.query = ''; this.searchInput.focus(); }

  _search = () => {
    this._hideModal()
    getProducts(
      this.query.split(/\b/).filter( item => /\w/.test(item) )
    ).then( r => this.props.history.push('/product/add', {getProducts: 'ssss'}) )
    .catch( err => console.error(err) )
  }

  _hideModal = this.props.toggle


  render () {
    return (
      <div id='search-modal' style={{minHeight:'100%',maxWidth:'100%'}}>
        <nav className='navbar-fixed z-depth-1'>
          <div className='nav-wrapper container flex'>
            <a onClick={this._hideModal}>
              <i className="material-icons icon-btn">arrow_backs</i>
            </a>
            <div className='flex' style={{flex:1}}>
              <form onSubmit={this._search}>
                <input
                  className='search-input'
                  ref={ e => this.searchInput = e }
                  type='text'
                  value={this.query}
                  onChange={this._searchInputChange}
                  placeholder='describe your dream buké...'
                />
              </form>
              { this.query &&
                <div className='waves-effect waves-light center'>
                  <i className="material-icons icon-btn" onClick={this._clearQuery}>close</i>
                </div>
              }
            </div>
            <div
              className='waves-effect waves-light'
              style={{display:'inline-block', textAlign: 'end'}}
              onClick={this._search}
            >
              <i className="material-icons icon-btn" onClick={this._clearQuery}>search</i>
            </div>
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
              <div className='color-bubble waves-effect red darken-4'   onClick={()=>this._addQuery('red')} />
              <div className='color-bubble waves-effect pink lighten-2' onClick={()=>this._addQuery('pink')} />
              <div className='color-bubble waves-effect pink lighten-4' onClick={()=>this._addQuery('softpink')} />
              <div className='color-bubble waves-effect white'          onClick={()=>this._addQuery('white')} />
              <div className='color-bubble waves-effect yellow'         onClick={()=>this._addQuery('yellow')} />
              <div className='color-bubble waves-effect light-green lighten-3' onClick={()=>this._addQuery('green')} />
              <div className='color-bubble waves-effect purple lighten-3' onClick={()=>this._addQuery('purple')} />
              <div className='color-bubble waves-effect orange lighten-1' onClick={()=>this._addQuery('orange')} />
              <div className='color-bubble waves-effect blue lighten-4'   onClick={()=>this._addQuery('blue')} />
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

        <CTAButton text='Search' onClick={this._search} />
      </div>
    );
  }
}

const CTAButton = props => (
  <button
    className={'fullwidth btn waves-effect waves-light '+props.className}
    onClick={props.onClick}
  >{props.text}</button>
)

export default SearchModal;


