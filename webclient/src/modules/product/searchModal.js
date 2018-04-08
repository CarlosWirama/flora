'use strict';

import React from "react";
import { withRouter } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
// import { getProducts } from "./productController";
import SearchHeader from "./SearchHeader";

// const SearchModal = props => <SearchModal {...props}/>);

@observer
class SearchModal extends React.Component {

  @observable query = ''
  @action changeQuery = newQuery => this.query = newQuery

  @action
  _addQuery = query => {
    this.searchHeader.focusInput();
    let re = new RegExp(`\\b${query}\\b`, "i");
    if (!re.test(this.query)) return this.query += ` ${query} `;
  }

  _search = () => {
    let q = this.query.split(/\b/)
                      .filter( item => /\w/.test(item) )
                      .join('+');
    let queryString = q && '?q=' + q;
    this.props.history.push('/search' + queryString );
  }

  render () {
    return (
      <div id='search-modal' style={{minHeight:'100%',maxWidth:'100%'}}>
        <SearchHeader
          ref={ e => this.searchHeader = e }
          query={this.query}
          onChange={this.changeQuery}
          onSearch={this._search}
          onBackPressed={this.props.onBackPressed}
        />
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
    className={'wide-cta-btn btn waves-effect waves-light '+props.className}
    onClick={props.onClick}
  >{props.text}</button>
)

export default withRouter(SearchModal);


